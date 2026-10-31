import { createRoute, z } from '@hono/zod-openapi'

export const getCacheRoute = createRoute({
  method: 'get',
  path: '/cache',
  summary: 'Load a file with caching headers',
  description:
    'Making this request without these parameters should make an uncached request. When you provide `if-modified-since` or `if-none-match` you should return a `304 Not Modified`.',
  operationId: 'cached',
  request: {
    headers: z.object({
      'If-Modified-Since': z.iso
        .datetime({ offset: true })
        .exactOptional()
        .openapi({
          param: {
            name: 'If-Modified-Since',
            in: 'header',
            description:
              'An RFC 3339 formatted `date-time` string, preferably in UTC. If the resource was last updated before the provided `date-time`, the server should return a `304 Not Modified` response, otherwise a 200 with an accurate `last-modified` time.',
            required: false,
            schema: { type: 'string', format: 'date-time' },
          },
        }),
      'If-None-Match': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'If-None-Match',
            in: 'header',
            description:
              "If you provide a value here, it will be checked against the generated ETAG of the target resource. If they match, you'll get a `304 Not Modified` response, otherwise a `200 OK` with a new ETAG.",
            required: false,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: { default: { description: 'successful response' } },
  security: [{ api_key: [] }],
})

export const getStatus302Route = createRoute({
  method: 'get',
  path: '/status/302',
  summary: 'Redirect',
  description: 'Returns a `302 Found` status',
  operationId: 'redirect',
  responses: { default: { description: 'successful response' } },
  security: [{ api_key: [] }],
})

export const getStatus204Route = createRoute({
  method: 'get',
  path: '/status/204',
  summary: 'No content',
  description: 'Returns a `204 No Content` with no body',
  operationId: 'nocontent',
  responses: { default: { description: 'successful response' } },
  security: [{ api_key: [] }],
})
