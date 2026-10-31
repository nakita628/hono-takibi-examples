import { createRoute, z } from '@hono/zod-openapi'

const ApiKeySecurityScheme = { in: 'header', name: 'apiKey', type: 'apiKey' }

export const getApiV1ScansRoute = createRoute({
  method: 'get',
  path: '/api/v1/scans',
  tags: ['Scans'],
  summary: 'Retrieves all scans',
  request: {
    query: z.object({
      name: z
        .string()
        .exactOptional()
        .openapi({
          param: { in: 'query', name: 'name', required: false, schema: { type: 'string' } },
        }),
      per_page: z
        .string()
        .exactOptional()
        .openapi({
          param: { in: 'query', name: 'per_page', required: false, schema: { type: 'string' } },
        }),
    }),
  },
  responses: {
    200: { description: 'scans found', content: {} },
    404: { description: 'scans not found' },
  },
  security: [{ api_key: [] }],
})

export const getApiV1ScansIdRoute = createRoute({
  method: 'get',
  path: '/api/v1/scans/{id}',
  tags: ['Scans'],
  summary: 'Retrieves a project scan result',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({ param: { in: 'path', name: 'id', required: true, schema: { type: 'string' } } }),
    }),
  },
  responses: {
    200: { description: 'scan found', content: {} },
    404: { description: 'scan not found' },
  },
  security: [{ api_key: [] }],
})

export const getApiV1ScansIdFilesFileIdRoute = createRoute({
  method: 'get',
  path: '/api/v1/scans/{id}/files/{file_id}',
  tags: ['Scans'],
  summary: 'Retrieves a file object, containing information about dependencies in the file',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({ param: { in: 'path', name: 'id', required: true, schema: { type: 'string' } } }),
      file_id: z
        .string()
        .openapi({
          param: { in: 'path', name: 'file_id', required: true, schema: { type: 'string' } },
        }),
    }),
    query: z.object({
      per_page: z
        .string()
        .exactOptional()
        .openapi({
          param: { in: 'query', name: 'per_page', required: false, schema: { type: 'string' } },
        }),
    }),
  },
  responses: {
    200: { description: 'file found', content: {} },
    404: { description: 'file not found' },
  },
  security: [{ api_key: [] }],
})
