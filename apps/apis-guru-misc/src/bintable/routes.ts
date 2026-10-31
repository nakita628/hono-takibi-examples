import { createRoute, z } from '@hono/zod-openapi'

const ResponseItemSchema = z
  .object({
    data: z.object({}),
    message: z.string().openapi({ example: 'SUCCESS' }),
    result: z.int().openapi({ example: 200 }),
  })
  .openapi({ required: ['data', 'message', 'result'] })
  .openapi('ResponseItem')

export const getBalanceRoute = createRoute({
  method: 'get',
  path: '/balance',
  tags: ['Balance'],
  summary: 'Check Balance',
  description: 'Get Account balance and expiry',
  operationId: 'balanceLookup',
  request: {
    query: z.object({
      api_key: z
        .string()
        .openapi({
          param: {
            description: 'The API key, which you can get from bintable.com website.',
            explode: true,
            in: 'query',
            name: 'api_key',
            required: true,
            schema: { type: 'string' },
            style: 'form',
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Balance reponse',
      content: { '*/*': { schema: z.array(ResponseItemSchema) } },
    },
    401: { description: 'Your balance is exhausted,or package expired' },
    403: { description: 'Invalid API Key' },
    422: { description: 'API key is missing' },
  },
})

export const getBinRoute = createRoute({
  method: 'get',
  path: '/{bin}',
  tags: ['Lookup'],
  summary: 'Lookup for bin',
  description:
    'By passing in the appropriate BIN, you can lookup for\ncard meta data in bintable.com API\n',
  operationId: 'binLookup',
  request: {
    params: z.object({
      bin: z
        .string()
        .openapi({
          param: {
            description: 'pass the required BIN code',
            explode: false,
            in: 'path',
            name: 'bin',
            required: true,
            schema: { type: 'string' },
            style: 'simple',
          },
        }),
    }),
    query: z.object({
      api_key: z
        .string()
        .openapi({
          param: {
            description: 'The API key, which you can get from bintable.com website.',
            explode: true,
            in: 'query',
            name: 'api_key',
            required: true,
            schema: { type: 'string' },
            style: 'form',
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'BIN data response',
      content: { 'application/json': { schema: z.array(ResponseItemSchema) } },
    },
    401: { description: 'Your balance is exhausted,or package expired' },
    403: { description: 'Invalid API Key' },
    422: { description: 'API key is missing' },
  },
})
