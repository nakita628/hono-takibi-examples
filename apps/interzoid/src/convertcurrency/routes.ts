import { createRoute, z } from '@hono/zod-openapi'

export const getConvertcurrencyRoute = createRoute({
  method: 'get',
  path: '/convertcurrency',
  tags: ['Live Currency Rate Conversion'],
  summary: 'Converts amount in one currency to that of another',
  description:
    'Provide an amount in one currency (EUR, GBP, CNY, JPY, AUD, etc.), and also a second currency to convert it to. The API will return the result using current foreign exchange rates. See the API home page for a list of all supported currencies.',
  operationId: 'convertcurrency',
  request: {
    query: z.object({
      license: z
        .string()
        .openapi({
          param: {
            description: 'Your Interzoid license API key. Register at www.interzoid.com/register',
            in: 'query',
            name: 'license',
            required: true,
            schema: { type: 'string' },
          },
        }),
      from: z
        .string()
        .openapi({
          param: {
            description: 'Currency symbol for the converted from amount',
            in: 'query',
            name: 'from',
            required: true,
            schema: { type: 'string' },
          },
        }),
      to: z
        .string()
        .openapi({
          param: {
            description: 'Currency symbol for the converted to amount',
            in: 'query',
            name: 'to',
            required: true,
            schema: { type: 'string' },
          },
        }),
      amount: z
        .string()
        .openapi({
          param: {
            description: 'The amount of currency to be converted',
            in: 'query',
            name: 'amount',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Currency rate data to one US DOllar',
      content: {
        'application/json': {
          schema: z
            .object({
              Code: z.string().exactOptional(),
              Converted: z.string().exactOptional(),
              Credits: z.string().exactOptional(),
              Currency: z.string().exactOptional(),
            })
            .openapi({ required: [] }),
        },
      },
    },
    400: { description: 'bad request - insufficient parameters' },
    402: { description: 'credits exhausted' },
    403: { description: 'invalid license API key' },
    404: { description: 'currency symbol not found' },
    405: { description: 'method not allowed' },
    500: { description: 'internal server error' },
  },
})
