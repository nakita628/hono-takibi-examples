import { createRoute, z } from '@hono/zod-openapi'

const TokenSchema = z
  .object({ access_token: z.int32(), token_type: z.string(), expires_in: z.int32() })
  .openapi({ title: 'Token', required: ['access_token', 'token_type', 'expires_in'] })
  .openapi('Token')

export const postAnythingRoute = createRoute({
  method: 'post',
  path: '/anything',
  summary: 'Demo handling of formData',
  operationId: 'demoFormData',
  request: {
    body: {
      content: {
        'application/x-www-form-urlencoded': {
          schema: z
            .object({
              client_id: z.string(),
              client_secret: z.string(),
              scope: z
                .preprocess(
                  (val) =>
                    typeof val === 'string' &&
                    /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                    (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                      ? Number(val)
                      : val,
                  z.int32(),
                )
                .exactOptional(),
            })
            .openapi({ required: ['client_id', 'client_secret'] }),
        },
      },
    },
  },
  responses: {
    200: { description: 'Valid Token', content: { 'application/json': { schema: TokenSchema } } },
    401: { description: 'Unauthorized' },
  },
})
