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

const CategoryRatedAreasSchema = z
  .object({
    categoryScores: z
      .object({
        nightLife: z
          .object({
            overall: z
              .number()
              .exactOptional()
              .openapi({
                description:
                  'score of nigh life possibility from 0 (nothing to do at night) to 100 (many night activities to enjoy)',
              }),
          })
          .exactOptional()
          .openapi({ description: 'night life category', required: [] }),
        restaurant: z
          .object({
            overall: z
              .number()
              .exactOptional()
              .openapi({
                description:
                  'score of eating possibility from 0 (no place to eat) to 100 (many restaurants to enjoy)',
              }),
            vegetarian: z
              .number()
              .exactOptional()
              .openapi({
                description:
                  'score of vegetatian eating possibility from 0 (no place to eat vegetatian) to 100 (many restaurants to enjoy)',
              }),
          })
          .exactOptional()
          .openapi({ description: 'restaurant category', required: [] }),
        shopping: z
          .object({
            luxury: z
              .number()
              .exactOptional()
              .openapi({
                description:
                  'score of luxury shopping possibility from 0 (no luxury shop) to 100 (many luxury shops to enjoy)',
              }),
            overall: z
              .number()
              .exactOptional()
              .openapi({
                description:
                  'score of shopping possibility from 0 (no shop) to 100 (many shops to enjoy)',
              }),
          })
          .exactOptional()
          .openapi({ description: 'shopping category', required: [] }),
        sight: z
          .object({
            beachAndPark: z
              .int()
              .exactOptional()
              .openapi({
                description:
                  'score of outdoor activity possibility from 0 (no outdoor spaces) to 100 (many parks or beaches to enjoy)',
              }),
            historical: z
              .int()
              .exactOptional()
              .openapi({
                description:
                  'score of historical discovery possibility from 0 (no historical site) to 100 (many historical site to enjoy)',
              }),
            overall: z
              .int()
              .exactOptional()
              .openapi({
                description:
                  'score of sight seeing possibility from 0 (nothing to see) to 100 (many sceneries to enjoy)',
              }),
          })
          .exactOptional()
          .openapi({ description: 'sight category', required: [] }),
      })
      .exactOptional()
      .openapi({ description: 'category scoring of the location', required: [] }),
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
    radius: z.int().exactOptional().openapi({ description: 'Radius of the area in meters' }),
  })
  .openapi({ required: [] })
  .and(
    z
      .object({
        type: z
          .string()
          .exactOptional()
          .openapi({ description: 'Type of the manipulatd resource', example: 'PNR' }),
      })
      .openapi({
        description: 'Identification of a specific version of a resource  ',
        title: 'Abstract Resource',
        required: [],
      }),
  )
  .openapi({ description: '', title: 'scored-locations' })
  .openapi('CategoryRatedAreas')

export const getLocationAnalyticsCategoryRatedAreasRoute = createRoute({
  method: 'get',
  path: '/location/analytics/category-rated-areas',
  tags: ['category-rated-areas'],
  summary: 'GET category rated areas',
  operationId: 'get-category-rated-areas',
  request: {
    query: z.object({
      latitude: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.number(),
        )
        .openapi({
          param: {
            description: 'Latitude in decimal coordinates',
            example: 41.397158,
            in: 'query',
            name: 'latitude',
            required: true,
            schema: { type: 'number' },
          },
        }),
      longitude: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.number(),
        )
        .openapi({
          param: {
            description: 'Longitude in decimal coordinates',
            example: 2.160873,
            in: 'query',
            name: 'longitude',
            required: true,
            schema: { type: 'number' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful Reply',
      content: {
        'application/vnd.amadeus+json': {
          schema: z
            .object({
              data: z.array(CategoryRatedAreasSchema).exactOptional(),
              meta: MetaSchema.exactOptional(),
              warnings: z.array(WarningSchema).exactOptional(),
            })
            .openapi({ required: [] }),
          examples: {
            'Successful Reply': {
              value: {
                data: [
                  {
                    categoryScores: {
                      nightLife: { overall: 93 },
                      restaurant: { overall: 99, vegetarian: 82 },
                      shopping: { luxury: 97, overall: 99 },
                      sight: { beachAndPark: 0, historical: 86, overall: 90 },
                    },
                    geoCode: { latitude: 2.160873, longitude: 41.397158 },
                    radius: 200,
                    type: 'category-rated-area',
                  },
                  {
                    categoryScores: {
                      nightLife: { overall: 96 },
                      restaurant: { overall: 99, vegetarian: 92 },
                      shopping: { luxury: 99, overall: 99 },
                      sight: { beachAndPark: 0, historical: 89, overall: 99 },
                    },
                    geoCode: { latitude: 2.160873, longitude: 41.397158 },
                    radius: 500,
                    type: 'category-rated-area',
                  },
                  {
                    categoryScores: {
                      nightLife: { overall: 99 },
                      restaurant: { overall: 99, vegetarian: 99 },
                      shopping: { luxury: 99, overall: 99 },
                      sight: { beachAndPark: 58, historical: 99, overall: 99 },
                    },
                    geoCode: { latitude: 2.160873, longitude: 41.397158 },
                    radius: 1500,
                    type: 'category-rated-area',
                  },
                ],
                meta: {
                  count: 3,
                  links: {
                    self: 'https://test.api.amadeus.com/v1/location/analytics/category-rated-areas?latitude=41.397158&longitude=2.160873',
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
            example: {
              value: {
                errors: [
                  {
                    code: 477,
                    detail: 'invalid query parameter format',
                    source: { example: '41.397158', parameter: 'latitude' },
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
            example: {
              value: { errors: [{ code: 141, status: 500, title: 'SYSTEM ERROR HAS OCCURRED' }] },
            },
          },
        },
      },
    },
  },
})
