import { createRoute, z } from '@hono/zod-openapi'

const ResponseSchema = z
  .object({ data: z.object({}), success: z.boolean() })
  .openapi({ required: ['success', 'data'], title: 'Default response object' })
  .openapi('Response')

const AuthenticationTokenResponseSchema = ResponseSchema.and(
  z
    .object({
      data: z
        .object({ token: z.string() })
        .exactOptional()
        .openapi({ required: ['token'] }),
    })
    .openapi({ required: [] }),
)
  .openapi({ title: 'Request Authentication Token response' })
  .openapi('AuthenticationTokenResponse')

export const postAuthRoute = createRoute({
  method: 'post',
  path: '/auth',
  description: 'Request Authentication Token',
  request: {
    query: z.object({
      client_id: z
        .string()
        .openapi({
          param: {
            description: 'Client id of the downloaded credentials file',
            in: 'query',
            name: 'client_id',
            required: true,
            schema: { type: 'string' },
          },
        }),
      client_secret: z
        .string()
        .openapi({
          param: {
            description: 'Client secret of the downloaded credentials file',
            in: 'query',
            name: 'client_secret',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: '',
      content: {
        'application/json': {
          schema: AuthenticationTokenResponseSchema,
          examples: {
            response: {
              value: {
                data: {
                  token:
                    'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOi8vYXBpLmRldi5wZXJzb25pby5kZTozMDAwMS92MS9hdXRoIiwiaWF0IjoxNDg5MDkxMzA2LCJleHAiOjE0ODkxNzc3MDYsIm5iZiI6MTQ4OTA5MTMwNiwianRpIjoiZmU1ZjkxOGY2MDZjOWI4OGMwMzM0ZmJkZjkyYzkwMzgiLCJzdWIiOiJPR014TVdRd1kySmxZbVF6Tm1RNVpqQmxOell6WmpsaSJ9.QZZCdlDjmL-LYdoDx2XLUfhwTdcjDgm9h4t-6JoACiM',
                },
                success: true,
              },
            },
          },
        },
      },
    },
  },
})
