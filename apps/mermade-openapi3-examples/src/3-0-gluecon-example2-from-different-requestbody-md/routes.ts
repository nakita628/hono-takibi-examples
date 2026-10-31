import { createRoute, z } from '@hono/zod-openapi'

export const postOpinionsRoute = createRoute({
  method: 'post',
  path: '/opinions',
  request: {
    body: {
      description: '',
      content: {
        'text/plain': { schema: z.string(), example: 'I think the V3 way is cleaner' },
        'application/json': { schema: z.string() },
      },
      required: true,
    },
  },
  responses: { 200: { description: 'OK' } },
})
