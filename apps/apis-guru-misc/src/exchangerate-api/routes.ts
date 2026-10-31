import { createRoute, z } from '@hono/zod-openapi'

export const getLatestBaseCurrencyRoute = createRoute({
  method: 'get',
  path: '/latest/{base_currency}',
  summary: 'Returns latest exchange rates in parameter-supplied base currency.',
  request: {
    params: z.object({
      base_currency: z
        .string()
        .openapi({
          param: {
            description:
              '**Base Currency**. *Example: USD*. You an use any of the ISO 4217 currency codes we support. See https://www.exchangerate-api.com/docs/supported-currencies',
            in: 'path',
            name: 'base_currency',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: {
        'application/json': {
          schema: z
            .object({
              base: z
                .string()
                .exactOptional()
                .openapi({
                  description: 'The currency code you supplied as base in your request',
                  example: 'USD',
                }),
              date: z
                .string()
                .exactOptional()
                .openapi({ description: 'The date these exchange rates are for' }),
              rates: z
                .record(z.string(), z.float64())
                .exactOptional()
                .openapi({
                  description: 'Each supported currency code in terms of the base currency',
                }),
              time_last_updated: z
                .int()
                .exactOptional()
                .openapi({
                  description: 'The epoch time this set of exchange rates was generated',
                  example: 1556293443,
                }),
            })
            .openapi({ required: [] }),
        },
      },
    },
    404: {
      description: 'Currency code not supported',
      content: {
        'application/json': {
          schema: z
            .object({ error_type: z.string().exactOptional(), result: z.string().exactOptional() })
            .openapi({ required: [] }),
        },
      },
    },
  },
})
