import { createRoute, z } from '@hono/zod-openapi'

const ProductSchema = z
  .object({
    attributes: z.array(z.string()).exactOptional(),
    name: z.string().exactOptional(),
    price: z.string().exactOptional(),
    url: z.string().exactOptional(),
  })
  .openapi({ title: 'Product', required: [] })
  .openapi('Product')

const ProductResponseSchema = z
  .object({ products: z.array(ProductSchema).exactOptional() })
  .openapi({ title: 'ProductResponse', required: [] })
  .openapi('ProductResponse')

export const getPublicOpenaiV0ProductsRoute = createRoute({
  method: 'get',
  path: '/public/openai/v0/products',
  tags: ['open-ai-product-endpoint'],
  summary: 'API for fetching Klarna product information',
  operationId: 'productsUsingGET',
  request: {
    query: z.object({
      q: z
        .string()
        .openapi({
          param: {
            description:
              "A precise query that matches one very small category or product that needs to be searched for to find the products the user is looking for. If the user explicitly stated what they want, use that as a query. The query is as specific as possible to the product name or category mentioned by the user in its singular form, and don't contain any clarifiers like latest, newest, cheapest, budget, premium, expensive or similar. The query is always taken from the latest topic, if there is a new topic a new query is started.",
            in: 'query',
            name: 'q',
            required: true,
            schema: { type: 'string' },
          },
        }),
      size: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'number of products returned',
            in: 'query',
            name: 'size',
            required: false,
            schema: { type: 'integer' },
          },
        }),
      budget: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'maximum price of the matching product in local currency, filters results',
            in: 'query',
            name: 'budget',
            required: false,
            schema: { type: 'integer' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Products found',
      content: { 'application/json': { schema: ProductResponseSchema } },
    },
    503: { description: 'one or more services are unavailable' },
  },
})
