import { createRoute, z } from '@hono/zod-openapi'

export const getGetcurrencyrateRoute = createRoute({
  method: 'get',
  path: '/getcurrencyrate',
  tags: ['Currency Rates'],
  summary: 'Gets a foreign currency rate for one US Dollar',
  description:
    'Use a currency symbol (EUR, GBP, CNY, JPY, AUD, etc.) to obtain a live currency foreign exchange rate for one US Dollar. See the API home page for list of all supported currencies.',
  operationId: 'getcurrencyrate',
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
      symbol: z
        .string()
        .openapi({
          param: {
            description: 'Currency symbol to retrieve current rate for',
            in: 'query',
            name: 'symbol',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Currency rate data to one US Dollar',
      content: {
        'application/json': {
          schema: z
            .object({
              Code: z.string().exactOptional(),
              Country: z.string().exactOptional(),
              Credits: z.string().exactOptional(),
              Name: z.string().exactOptional(),
              Rate: z.string().exactOptional(),
              Symbol: z.string().exactOptional(),
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
