import { createRoute, z } from '@hono/zod-openapi'

export const getHelloRoute = createRoute({
  method: 'get',
  path: '/hello',
  request: {
    query: z.object({
      name: z
        .string()
        .openapi({
          param: { name: 'name', in: 'query', required: true, schema: { type: 'string' } },
        }),
    }),
  },
  responses: {
    200: { description: 'OK', content: { 'application/json': { schema: z.string() } } },
  },
})
