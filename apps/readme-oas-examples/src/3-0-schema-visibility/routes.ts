import { createRoute, z } from '@hono/zod-openapi'

export const postRoute = createRoute({
  method: 'post',
  path: '/',
  description:
    'This operation has a `requestBody` with a `readOnly` and a `writeOnly` property, as well as a response with the same. `writeOnly` properties should show up in the form and `readOnly` properties should show up in response examples.',
  request: {
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              id: z.string().exactOptional(),
              propWithReadOnly: z.string().exactOptional().openapi({ readOnly: true }),
              propWithWriteOnly: z.string().exactOptional().openapi({ writeOnly: true }),
            })
            .openapi({ required: [] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: '',
      content: {
        'application/json': {
          schema: z
            .object({
              id: z.string().exactOptional(),
              propWithReadOnly: z.string().exactOptional().openapi({ readOnly: true }),
              propWithWriteOnly: z.string().exactOptional().openapi({ writeOnly: true }),
            })
            .openapi({ required: [] }),
        },
      },
    },
  },
})
