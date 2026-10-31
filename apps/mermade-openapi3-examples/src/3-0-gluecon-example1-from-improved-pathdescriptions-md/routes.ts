import { createRoute, z } from '@hono/zod-openapi'

export const getSpeakersRoute = createRoute({
  method: 'get',
  path: '/speakers',
  responses: { 200: { description: 'List of speakers', content: {} } },
})

export const postSpeakersRoute = createRoute({
  method: 'post',
  path: '/speakers',
  description: 'Use a `application/x-www-urlencoded-form` to send speaker related information',
  responses: {
    201: {
      description: 'Acknowledge creation of a new speaker resource',
      headers: z.object({
        Location: {
          schema: z
            .url()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
      }),
    },
  },
})

export const deleteSpeakersRoute = createRoute({
  method: 'delete',
  path: '/speakers',
  responses: { 204: { description: 'Acknowledge successful deleted' } },
})
