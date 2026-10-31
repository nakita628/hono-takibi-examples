import { createRoute, z } from '@hono/zod-openapi'

export const getRoute = createRoute({
  method: 'get',
  path: '/',
  request: {
    query: z.object({
      test: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'test',
            in: 'query',
            deprecated: true,
            schema: { type: 'string', deprecated: true },
            required: false,
          },
          deprecated: true,
        }),
    }),
  },
  responses: { 200: { description: 'OK' } },
  deprecated: true,
})
