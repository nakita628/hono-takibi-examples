import { createRoute, z } from '@hono/zod-openapi'

const Error_400Schema = z
  .object({
    errors: z
      .array(
        z
          .object({
            code: z
              .int()
              .exactOptional()
              .openapi({
                description:
                  'A machine-readable error code from the Amadeus Canned Messages table, that will enable the API Consumers code to handle this type of error',
              }),
            detail: z
              .string()
              .exactOptional()
              .openapi({
                description:
                  'An easy-to-read explanation specific to this occurrence of the problem. It should give the API consumer an idea of what went wrong and how to recover from it. Like the title, this field’s value can be localized.',
              }),
            source: z
              .object({
                example: z
                  .string()
                  .exactOptional()
                  .openapi({
                    description: 'A sample input to guide the user when resolving this issue',
                  }),
                parameter: z
                  .string()
                  .exactOptional()
                  .openapi({
                    description: 'The key of the URI path or query parameter that caused the error',
                  }),
                pointer: z
                  .string()
                  .exactOptional()
                  .openapi({
                    description:
                      'A JSON Pointer [RFC6901] to the associated entity in the request body that caused this error',
                  }),
              })
              .exactOptional()
              .openapi({ title: 'Error_Source', required: [] }),
            status: z
              .int()
              .exactOptional()
              .openapi({
                description:
                  'The [HTTP status code](https://www.iana.org/assignments/http-status-codes/http-status-codes.xhtml) of this response. This is present only in terminal errors which cause an unsuccessful response. In the case of multiple errors, they must all have the same status.',
              }),
            title: z
              .string()
              .exactOptional()
              .openapi({
                description:
                  'An error title from the Canned Messages table with a 1:1 correspondence to the error code. This may be localized',
              }),
          })
          .openapi({ description: 'The Error Definition', title: 'Error', required: [] }),
      )
      .exactOptional(),
  })
  .openapi({ description: 'A set of errors', title: 'Error 400', required: [] })
  .openapi('Error_400')

const Error_500Schema = z
  .object({
    errors: z
      .array(
        z
          .object({
            code: z
              .int()
              .exactOptional()
              .openapi({
                description:
                  'A machine-readable error code from the Amadeus Canned Messages table, that will enable the API Consumers code to handle this type of error',
              }),
            detail: z
              .string()
              .exactOptional()
              .openapi({
                description:
                  'An easy-to-read explanation specific to this occurrence of the problem. It should give the API consumer an idea of what went wrong and how to recover from it. Like the title, this field’s value can be localized.',
              }),
            source: z
              .object({
                example: z
                  .string()
                  .exactOptional()
                  .openapi({
                    description: 'A sample input to guide the user when resolving this issue',
                  }),
                parameter: z
                  .string()
                  .exactOptional()
                  .openapi({
                    description: 'The key of the URI path or query parameter that caused the error',
                  }),
                pointer: z
                  .string()
                  .exactOptional()
                  .openapi({
                    description:
                      'A JSON Pointer [RFC6901] to the associated entity in the request body that caused this error',
                  }),
              })
              .exactOptional()
              .openapi({ title: 'Error_Source', required: [] }),
            status: z
              .int()
              .exactOptional()
              .openapi({
                description:
                  'The [HTTP status code](https://www.iana.org/assignments/http-status-codes/http-status-codes.xhtml) of this response. This is present only in terminal errors which cause an unsuccessful response. In the case of multiple errors, they must all have the same status.',
              }),
            title: z
              .string()
              .exactOptional()
              .openapi({
                description:
                  'An error title from the Canned Messages table with a 1:1 correspondence to the error code. This may be localized',
              }),
          })
          .openapi({ description: 'The Error Definition', title: 'Error', required: [] }),
      )
      .exactOptional(),
  })
  .openapi({ description: 'A set of errors', title: 'Error 500', required: [] })
  .openapi('Error_500')

const MetaSchema = z
  .object({
    count: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64().nonnegative(),
      )
      .exactOptional()
      .openapi({
        type: 'integer',
        format: 'int64',
        minimum: 0,
        exclusiveMinimum: false,
        description: 'Total number of object(s) retrieved',
      }),
    links: z
      .object({ self: z.url().exactOptional().openapi({ description: 'Link to the same page.' }) })
      .exactOptional()
      .openapi({
        description: 'Links related to the returned object(s)',
        title: 'Links',
        required: [],
      }),
  })
  .openapi({
    description: 'Meta information about the returned object(s) in "data"',
    title: 'Meta',
    required: [],
  })
  .openapi('Meta')

const RecommendedLocationSchema = z
  .object({
    geoCode: z
      .object({
        latitude: z
          .float32()
          .min(-90)
          .max(90)
          .exactOptional()
          .openapi({
            description:
              'Latitude of the position expressed in decimal degrees (WSG 84), e.g. 6.244203. A positive value denotes northern hemisphere or the equator, and a negative value denotes southern hemisphere. The number of digits to represent the precision of the coordinate.',
            example: 48.85837,
          }),
        longitude: z
          .float32()
          .min(-180)
          .max(180)
          .exactOptional()
          .openapi({
            description:
              'Longitude of the position expressed in decimal degrees (WSG 84), e.g. -75.581211. A positive value denotes east longitude or the prime meridian, and a negative value denotes west longitude.  The number of digits to represent the precision of the coordinate.',
            example: 2.294481,
          }),
      })
      .exactOptional()
      .openapi({
        description:
          'Geographic coordinates describing the position of any location on the surface of Earth',
        title: 'GeoCode',
        required: [],
      }),
    iataCode: z
      .string()
      .exactOptional()
      .openapi({ description: 'IATA location code', example: 'PAR' }),
    name: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Label associated to the location (e.g. Eiffel Tower, Madison Square)',
        example: 'Eiffel Tower',
      }),
    subtype: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Location sub-type (e.g. airport, port, rail-station, restaurant, atm...)',
      }),
  })
  .openapi({
    description: 'Description of a particular point or place in physical space',
    title: 'Location',
    required: [],
  })
  .and(
    z
      .object({
        relevance: z
          .number()
          .exactOptional()
          .openapi({
            description: 'percentage of similarity.\n\n0 for not similar to 1 for exactly the same',
          }),
        type: z.string().exactOptional().openapi({ description: 'Ressource type' }),
      })
      .openapi({ required: [] }),
  )
  .openapi({
    description: 'Similar Location',
    title: '',
    'x-examples': {
      Example: {
        geoCode: { latitude: 48.85755, longiture: 2.34276 },
        iataCode: 'PAR',
        name: 'PARIS',
        relevance: 0.71,
        subtype: 'CITY',
        type: 'recommended-location',
      },
    },
  })
  .openapi('RecommendedLocation')

const WarningSchema = z
  .object({
    code: z
      .int()
      .openapi({
        description:
          'A machine-readable error code from the Canned Messages table, that will enable the API Consumers code to handle this type of error',
      }),
    detail: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'An easy-to-read explanation specific to this occurrence of the problem. It should give the API consumer an idea of what went wrong and how to recover from it. Like the title, this field’s value can be localized.',
      }),
    source: z
      .object({
        example: z
          .string()
          .exactOptional()
          .openapi({ description: 'A sample input to guide the user when resolving this issu' }),
        parameter: z
          .string()
          .exactOptional()
          .openapi({
            description: 'The key of the URI path or query parameter that caused the error',
          }),
        pointer: z
          .string()
          .exactOptional()
          .openapi({
            description:
              'A JSON Pointer [RFC6901] to the associated entity in the request body that caused this error',
          }),
      })
      .exactOptional()
      .openapi({
        description: 'The Warning Source Definition',
        title: 'Warning_Source',
        required: [],
      }),
    title: z
      .string()
      .openapi({
        description:
          'An error title from the Canned Messages table with a 1:1 correspondence to the error code. This may be localized',
      }),
  })
  .openapi({ description: 'The Warning Definition', required: ['code', 'title'], title: 'Warning' })
  .openapi('Warning')

export const getReferenceDataRecommendedLocationsRoute = createRoute({
  method: 'get',
  path: '/reference-data/recommended-locations',
  tags: ['recommended-locations'],
  summary: 'GET recommended destinations',
  operationId: 'getRecommendedLocation',
  request: {
    query: z.object({
      cityCodes: z
        .string()
        .openapi({
          param: {
            description:
              'City used by the algorythm to recommend new destination. Several cities can be specified using comma.\n\nCity codes follow [IATA standard](http://www.iata.org/publications/Pages/code-search.aspx)',
            example: 'PAR',
            in: 'query',
            name: 'cityCodes',
            required: true,
            schema: { type: 'string' },
          },
        }),
      travelerCountryCode: z
        .string()
        .length(2)
        .default('FR')
        .exactOptional()
        .openapi({
          param: {
            description:
              'Origin country of the traveler following [ISO 3166-1 alpha-2](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2) code format (e.g. US)',
            example: 'FR',
            in: 'query',
            name: 'travelerCountryCode',
            schema: { default: 'FR', maxLength: 2, minLength: 2, type: 'string' },
            required: false,
          },
        }),
      destinationCountryCodes: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'List of country the traveler want to visit, separated with comma.\n\nCountry codes follow [ISO 3166-1 alpha-2](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2) code format (e.g. US)',
            in: 'query',
            name: 'destinationCountryCodes',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful reply',
      content: {
        'application/vnd.amadeus+json': {
          schema: z
            .object({
              data: z.array(RecommendedLocationSchema).exactOptional(),
              meta: MetaSchema.exactOptional(),
              warnings: z.array(WarningSchema).exactOptional(),
            })
            .openapi({ required: [] }),
          examples: {
            'Successful Reply': {
              value: {
                data: [
                  {
                    geoCode: { latitude: 48.85755, longiture: 2.34276 },
                    iataCode: 'PAR',
                    name: 'PARIS',
                    relevance: 0.71,
                    subtype: 'CITY',
                    type: 'recommended-location',
                  },
                  {
                    geoCode: { latitude: 40.41654, longiture: 3.70348 },
                    iataCode: 'MAD',
                    name: 'MADRID',
                    relevance: 0.68,
                    subtype: 'CITY',
                    type: 'recommended-location',
                  },
                ],
                meta: {
                  count: 2,
                  links: {
                    self: 'https://test.api.amadeus.com/v1/reference-data/recommended-locations?cityCodes=LON&travelerCountryCode=FR',
                  },
                },
              },
            },
          },
        },
      },
    },
    400: {
      description:
        'code    | title                                 \n------- | ------------------------------------- \n477     | INVALID FORMAT\n572     | INVALID OPTION                            \n32171   | MANDATORY DATA MISSING ',
      content: {
        'application/vnd.amadeus+json': {
          schema: Error_400Schema,
          examples: {
            'Error 400': {
              value: {
                errors: [
                  {
                    code: 477,
                    detail: 'invalid query parameter format',
                    source: { example: 'PAR', parameter: 'cityCodes' },
                    status: 400,
                    title: 'INVALID FORMAT',
                  },
                ],
              },
            },
          },
        },
      },
    },
    500: {
      description: 'Internal Server Error',
      content: {
        'application/vnd.amadeus+json': {
          schema: Error_500Schema,
          examples: {
            'Error 500': {
              value: { errors: [{ code: 141, status: 500, title: 'SYSTEM ERROR HAS OCCURRED' }] },
            },
          },
        },
      },
    },
  },
})
