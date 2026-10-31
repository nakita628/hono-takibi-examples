import { createRoute, z } from '@hono/zod-openapi'

export const getAddressRoute = createRoute({
  method: 'get',
  path: '/{address}',
  request: {
    params: z.object({
      address: z
        .string()
        .openapi({
          param: { in: 'path', name: 'address', required: true, schema: { type: 'string' } },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': {
          schema: z
            .object({ description: z.string().exactOptional(), trap: z.boolean().exactOptional() })
            .openapi({ required: [] }),
        },
      },
    },
  },
})
