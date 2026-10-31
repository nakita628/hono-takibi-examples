import { createRoute, z } from '@hono/zod-openapi'

export const postPostRoute = createRoute({
  method: 'post',
  path: '/post',
  request: {
    cookies: z.object({
      foo: z
        .string()
        .exactOptional()
        .openapi({
          param: { in: 'cookie', name: 'foo', schema: { type: 'string' }, required: false },
        }),
      bar: z
        .string()
        .exactOptional()
        .openapi({
          param: { in: 'cookie', name: 'bar', schema: { type: 'string' }, required: false },
        }),
    }),
  },
  responses: { 200: { description: 'OK' } },
})
