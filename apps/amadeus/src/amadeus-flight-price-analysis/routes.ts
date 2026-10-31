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

const ItineraryPriceMetricSchema = z
  .object({
    currencyCode: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'currency of the prices.\n\nCurrency is specified in the [ISO 4217](https://en.wikipedia.org/wiki/ISO_4217) format, e.g. EUR for Euro',
      }),
    departureDate: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The date on which the traveler will depart from the origin to go to the destination. \n\nDates are specified in the[ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) YYYY-MM-DD format.',
      }),
    destination: z
      .object({
        iataCode: z
          .string()
          .exactOptional()
          .openapi({ description: 'IATA location code', example: 'PAR' }),
      })
      .exactOptional()
      .openapi({
        description: 'Description of a particular point or place in physical space',
        title: 'Location',
        required: [],
      }),
    oneWay: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'true for a one way trip,\nfalse for a round trip' }),
    origin: z
      .object({
        iataCode: z
          .string()
          .exactOptional()
          .openapi({ description: 'IATA location code', example: 'PAR' }),
      })
      .exactOptional()
      .openapi({
        description: 'Description of a particular point or place in physical space',
        title: 'Location',
        required: [],
      }),
    priceMetrics: z
      .array(
        z
          .object({
            amount: z
              .string()
              .exactOptional()
              .openapi({
                description:
                  'Defines the monetary value with decimal position. It can be in cash or miles.',
              }),
            quartileRanking: z
              .enum(['MINIMUM', 'FIRST', 'MEDIUM', 'THIRD', 'MAXIMUM'])
              .exactOptional(),
          })
          .openapi({ required: [] }),
      )
      .exactOptional(),
    transportType: z
      .literal('FLIGHT')
      .exactOptional()
      .openapi({ description: 'transportation type' }),
    type: z
      .string()
      .exactOptional()
      .openapi({ description: 'ressource type - always price-metrics' }),
  })
  .openapi({ description: 'price metric', title: 'ItineraryPriceMetric', required: [] })
  .openapi('ItineraryPriceMetric')

export const getAnalyticsItineraryPriceMetricsRoute = createRoute({
  method: 'get',
  path: '/analytics/itinerary-price-metrics',
  tags: ['price-metrics'],
  summary: 'GET itinerary price metric',
  operationId: 'get-itinerary-price-metrics',
  request: {
    query: z.object({
      originIataCode: z
        .string()
        .regex(/[a-zA-Z]{3}/)
        .length(3)
        .openapi({
          param: {
            description:
              'airport code, following [IATA standard](http://www.iata.org/publications/Pages/code-search.aspx), from which the traveler will depart\n',
            example: 'MAD',
            in: 'query',
            name: 'originIataCode',
            required: true,
            schema: { maxLength: 3, minLength: 3, pattern: '[a-zA-Z]{3}', type: 'string' },
          },
        }),
      destinationIataCode: z
        .string()
        .regex(/[a-zA-Z]{3}/)
        .length(3)
        .openapi({
          param: {
            description:
              'airport code, following [IATA standard](http://www.iata.org/publications/Pages/code-search.aspx), to which the traveler is going.',
            example: 'CDG',
            in: 'query',
            name: 'destinationIataCode',
            required: true,
            schema: { maxLength: 3, minLength: 3, pattern: '[a-zA-Z]{3}', type: 'string' },
          },
        }),
      departureDate: z
        .string()
        .openapi({
          param: {
            description:
              'The date on which the traveler will depart from the origin to go to the destination. \n\nDates are specified in the[ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) YYYY-MM-DD format.',
            example: '2021-03-21',
            in: 'query',
            name: 'departureDate',
            required: true,
            schema: { type: 'string' },
          },
        }),
      currencyCode: z
        .string()
        .regex(/[a-zA-Z]{3}/)
        .length(3)
        .default('EUR')
        .exactOptional()
        .openapi({
          param: {
            description:
              'the preferred currency for display. Currency is specified in the [ISO 4217](https://en.wikipedia.org/wiki/ISO_4217) format, e.g. EUR for Euro',
            in: 'query',
            name: 'currencyCode',
            schema: {
              default: 'EUR',
              maxLength: 3,
              minLength: 3,
              pattern: '[a-zA-Z]{3}',
              type: 'string',
            },
            required: false,
          },
        }),
      oneWay: z
        .stringbool()
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            description:
              'true to get price metrics for a one way trip,\nfalse to get price metrics for a round trip',
            in: 'query',
            name: 'oneWay',
            schema: { default: 'false', type: 'boolean' },
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
              data: z.array(ItineraryPriceMetricSchema).exactOptional(),
              meta: z
                .object({
                  href: z.url().exactOptional().openapi({ description: 'URL value' }),
                  methods: z
                    .array(z.enum(['GET', 'POST', 'PUT', 'PATCH', 'DELETE', 'OPTIONS']))
                    .exactOptional()
                    .openapi({ description: 'HTTP methods supported by the sibling URI' }),
                })
                .exactOptional()
                .openapi({
                  description: 'Links related to the returned objects(s)',
                  title: 'Links',
                  required: [],
                }),
              warnings: z.array(WarningSchema).exactOptional(),
            })
            .openapi({ required: [] }),
          examples: {
            'Successful reply': {
              value: {
                data: [
                  {
                    currencyCode: 'EUR',
                    departureDate: '2021-03-21',
                    destination: { iataCode: 'CDG' },
                    oneWay: false,
                    origin: { iataCode: 'MAD' },
                    priceMetrics: [
                      { amount: '43.27', quartileRanking: 'MINIMUM' },
                      { amount: '228.65', quartileRanking: 'FIRST' },
                      { amount: '231.03', quartileRanking: 'MEDIUM' },
                      { amount: '234.48', quartileRanking: 'THIRD' },
                      { amount: '442.62', quartileRanking: 'MAXIMUM' },
                    ],
                    transportType: 'FLIGHT',
                    type: 'itinerary-price-metric',
                  },
                ],
                meta: {
                  count: 1,
                  links: {
                    self: 'https://test.api.amadeus.com/v1/analytics/itinerary-price-metrics?originIataCode=MAD&destinationIataCode=CDG&departureDate=2021-03-21&currencyCode=EUR&oneWay=false',
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
            'example-400': {
              value: {
                errors: [
                  {
                    code: 32171,
                    detail: 'Missing mandatory query parameter',
                    status: 400,
                    title: 'MANDATORY DATA MISSING',
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
            'example-500': {
              value: { errors: [{ code: 141, status: 500, title: 'SYSTEM ERROR HAS OCCURRED' }] },
            },
          },
        },
      },
    },
  },
})
