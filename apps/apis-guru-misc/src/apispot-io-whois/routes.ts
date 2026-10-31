import { createRoute, z } from '@hono/zod-openapi'

const BatchSchema = z
  .object({
    completed: z.boolean().exactOptional(),
    count: z.int().exactOptional(),
    created_at: z.string().exactOptional(),
    id: z.string().exactOptional(),
    operation: z.string().exactOptional(),
    results: z.array(z.any()).exactOptional(),
    status: z.string().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('Batch')

const ArrayOfBatchSchema = z
  .object({ batches: z.array(BatchSchema).exactOptional() })
  .openapi({ required: [] })
  .openapi('ArrayOfBatch')

const ApiKeyAuthSecurityScheme = {
  description: "API Key can be found on your 'Account' page upon login.",
  in: 'header',
  name: 'X-API-KEY',
  type: 'apiKey',
}

export const getBatchRoute = createRoute({
  method: 'get',
  path: '/batch',
  description: 'Get your batches',
  operationId: 'getBatches',
  responses: {
    200: { description: 'OK', content: { 'application/json': { schema: ArrayOfBatchSchema } } },
  },
})

export const postBatchRoute = createRoute({
  method: 'post',
  path: '/batch',
  description:
    'Create batch. Batch is then being processed until all provided items have been completed. At any time it can be `get` to provide current status with results optionally.',
  operationId: 'createBatch',
  request: {
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              domains: z.array(z.string()).openapi({ example: ['foo.com', 'foo.net', 'foo.io'] }),
              operation: z.enum(['whois', 'check']),
              options: z
                .object({ format: z.enum(['raw', 'formatted', 'json']).exactOptional() })
                .exactOptional()
                .openapi({ required: [] }),
            })
            .openapi({ required: ['operation', 'domains'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: { description: 'OK', content: { 'application/json': { schema: BatchSchema } } },
  },
})

export const getBatchIdRoute = createRoute({
  method: 'get',
  path: '/batch/{id}',
  description: 'Get batch',
  operationId: 'getBatch',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            description: 'Batch ID',
            in: 'path',
            name: 'id',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: { description: 'OK', content: { 'application/json': { schema: BatchSchema } } },
  },
})

export const deleteBatchIdRoute = createRoute({
  method: 'delete',
  path: '/batch/{id}',
  description: 'Delete batch',
  operationId: 'deleteBatch',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            description: 'Batch ID',
            in: 'path',
            name: 'id',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: { 200: { description: 'OK' } },
})

export const getDbRoute = createRoute({
  method: 'get',
  path: '/db',
  description: 'Query domain database',
  operationId: 'queryDb',
  request: {
    query: z.object({
      query: z
        .string()
        .openapi({
          param: {
            description: 'Query (contact name, dns, domain etc)',
            in: 'query',
            name: 'query',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: { description: 'OK', content: { 'application/json': { schema: z.object({}) } } },
  },
})

export const getDomainsDomainCheckRoute = createRoute({
  method: 'get',
  path: '/domains/{domain}/check',
  description: 'Check domain availability',
  operationId: 'checkDomain',
  request: {
    params: z.object({
      domain: z
        .string()
        .openapi({
          param: {
            description: 'Domain',
            in: 'path',
            name: 'domain',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': {
          schema: z.object({ isAvailable: z.boolean().exactOptional() }).openapi({ required: [] }),
        },
      },
    },
  },
})

export const getDomainsDomainRankRoute = createRoute({
  method: 'get',
  path: '/domains/{domain}/rank',
  description: 'Check domain rank (authority).',
  operationId: 'domainRank',
  request: {
    params: z.object({
      domain: z
        .string()
        .openapi({
          param: {
            description: 'Domain',
            in: 'path',
            name: 'domain',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': {
          schema: z.object({ rank: z.number().exactOptional() }).openapi({ required: [] }),
        },
      },
    },
  },
})

export const getDomainsDomainWhoisRoute = createRoute({
  method: 'get',
  path: '/domains/{domain}/whois',
  description: 'WHOIS query for a domain',
  operationId: 'whois',
  request: {
    params: z.object({
      domain: z
        .string()
        .openapi({
          param: {
            description: 'Domain',
            in: 'path',
            name: 'domain',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      format: z
        .enum(['raw', 'formatted', 'json'])
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'format',
            schema: { enum: ['raw', 'formatted', 'json'], type: 'string' },
            required: false,
          },
        }),
    }),
  },
  responses: { 200: { description: 'OK' } },
})
