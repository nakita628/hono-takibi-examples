import { createRoute, z } from '@hono/zod-openapi'

export const postSubscribeRoute = createRoute({
  method: 'post',
  path: '/subscribe',
  request: {
    body: {
      content: {
        'application/json': {
          schema: z.object({ url: z.url().exactOptional() }).openapi({ required: [] }),
        },
      },
    },
  },
  responses: { 201: { description: 'Created subscription to webhook' } },
  callbacks: {
    mainHook: {
      '$request.body#/url': {
        post: { responses: { 200: { description: 'webhook successfully processed' } } },
      },
    },
  },
})
