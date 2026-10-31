import { createRoute, z } from '@hono/zod-openapi'

export const postSubmitRoute = createRoute({
  method: 'post',
  path: '/submit',
  request: {
    body: {
      content: {
        'application/x-www-urlencoded-form': {
          schema: z
            .object({
              street: z.string().exactOptional(),
              city: z.string().exactOptional(),
              province: z.string().exactOptional(),
              country: z.string().exactOptional(),
              postcode: z.string().exactOptional(),
              tags: z.array(z.string()).exactOptional(),
            })
            .openapi({ required: [] }),
        },
      },
    },
  },
  responses: { 200: { description: 'Great Success!' } },
})
