import { createRoute, z } from '@hono/zod-openapi'

const SearchResponseSchema = z
  .object({
    results: z
      .array(
        z
          .object({
            currency_code: z
              .string()
              .exactOptional()
              .openapi({ description: 'The currency that the price is in' }),
            description: z
              .string()
              .exactOptional()
              .openapi({ description: 'The description of the product' }),
            price: z.number().exactOptional().openapi({ description: 'The price of the product' }),
            title: z.string().exactOptional().openapi({ description: 'The title of the product' }),
            url: z
              .string()
              .exactOptional()
              .openapi({ description: 'The url of the product page for this product' }),
          })
          .openapi({ description: 'The list of products matching the search', required: [] }),
      )
      .exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('SearchResponse')

export const getOpenaiDetailsRoute = createRoute({
  method: 'get',
  path: '/openai/details',
  summary: 'Return more details about a list of products.',
  operationId: 'details',
  request: {
    query: z.object({
      ids: z
        .string()
        .openapi({
          param: {
            description: 'Comma separated list of product ids',
            in: 'query',
            name: 'ids',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: { description: 'OK', content: { 'application/json': { schema: SearchResponseSchema } } },
    503: { description: 'Service Unavailable' },
  },
})

export const getOpenaiSearchRoute = createRoute({
  method: 'get',
  path: '/openai/search',
  summary: 'Search for products',
  operationId: 'search',
  request: {
    query: z.object({
      query: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Query string to search for items.',
            in: 'query',
            name: 'query',
            required: false,
            schema: { type: 'string' },
          },
        }),
      price_min: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.number(),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'The minimum price to filter by.',
            in: 'query',
            name: 'price_min',
            required: false,
            schema: { type: 'number' },
          },
        }),
      price_max: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.number(),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'The maximum price to filter by.',
            in: 'query',
            name: 'price_max',
            required: false,
            schema: { type: 'number' },
          },
        }),
      similar_to_id: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'A product id that you want to find similar products for. (Only include one)',
            in: 'query',
            name: 'similar_to_id',
            required: false,
            schema: { type: 'string' },
          },
        }),
      num_results: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'How many results to return. Defaults to 5. It can be a number between 1 and 10.',
            in: 'query',
            name: 'num_results',
            required: false,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: { description: 'OK', content: { 'application/json': { schema: SearchResponseSchema } } },
    503: { description: 'Service Unavailable' },
  },
})
