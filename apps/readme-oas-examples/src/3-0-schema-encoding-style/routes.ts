import { createRoute, z } from '@hono/zod-openapi'

export const putFormPrimitiveRoute = createRoute({
  method: 'put',
  path: '/form/primitive',
  summary: 'Form style serialization',
  description: 'Form style serialization',
  operationId: 'encoding_form',
  request: {
    body: {
      content: {
        'multipart/form-data': {
          schema: z
            .object({
              primitive: z.string().exactOptional(),
              array: z
                .preprocess(
                  (val) => (val === undefined || Array.isArray(val) ? val : [val]),
                  z.array(z.string()),
                )
                .exactOptional(),
              object: z
                .object({ foo: z.string().exactOptional(), bar: z.string().exactOptional() })
                .exactOptional()
                .openapi({ required: [] }),
            })
            .openapi({ required: [] }),
          encoding: { primitive: {}, array: {}, object: {} },
        },
      },
    },
  },
  responses: { 200: { description: 'OK' } },
})
