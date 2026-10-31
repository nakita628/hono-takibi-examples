import { createRoute, z } from '@hono/zod-openapi'

export const postHooksRoute = createRoute({
  method: 'post',
  path: '/hooks',
  request: {
    body: {
      description: 'body provided by consumer with callback URL',
      content: {},
      required: true,
    },
  },
  responses: {
    201: {
      description: 'Successfully subscribed',
      content: {},
      links: {
        unsubscribe: {
          operationId: 'cancelHookCallback',
          parameters: { id: '$response.body#/hookId' },
        },
      },
    },
  },
  callbacks: {
    hookEvent: {
      '$request.body#/callback-url': {
        post: {
          requestBody: { content: {} },
          responses: { 200: { description: 'Expected responses from callback consumer' } },
        },
      },
    },
  },
})

export const deleteHooksIdRoute = createRoute({
  method: 'delete',
  path: '/hooks/{id}',
  operationId: 'cancelHookCallback',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({ param: { name: 'id', in: 'path', required: true, schema: { type: 'string' } } }),
    }),
  },
  responses: { 200: { description: 'Successfully cancelled callback' } },
})
