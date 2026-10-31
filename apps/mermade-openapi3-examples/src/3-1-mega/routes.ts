import { z } from '@hono/zod-openapi'

const MtlsSecurityScheme = { type: 'mutualTLS' }

const MyPathItemPathItem = {
  post: {
    requestBody: {
      content: {
        'application/json': {
          schema: z
            .object({
              type: z.string().exactOptional(),
              int: z.int().gt(0).lt(100).exactOptional(),
              none: z.null().nullable().exactOptional(),
              arr: z.array(z.any()).exactOptional(),
              either: z.string().nullable().exactOptional(),
            })
            .openapi({
              discriminator: { propertyName: 'type', 'x-extension': true },
              myArbitraryKeyword: true,
              required: [],
            }),
        },
      },
      required: true,
    },
  },
}
