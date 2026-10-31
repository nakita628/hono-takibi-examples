import { createRoute, z } from '@hono/zod-openapi'

export const postStreamsRoute = createRoute({
  method: 'post',
  path: '/streams',
  description: 'subscribes a client to receive out-of-band data',
  request: {
    query: z.object({
      callbackUrl: z
        .url()
        .openapi({
          param: {
            name: 'callbackUrl',
            in: 'query',
            required: true,
            description:
              'the location where data will be sent. Must be network accessible by the source server',
            schema: { type: 'string', format: 'uri', example: 'https://tonys-server.com' },
          },
          example: 'https://tonys-server.com',
        }),
    }),
  },
  responses: {
    201: {
      description: 'subscription successfully created',
      content: {
        'application/json': {
          schema: z
            .object({
              subscriptionId: z
                .string()
                .openapi({
                  description: 'this unique identifier allows management of the subscription',
                  example: '2531329f-fb09-4ef7-887e-84e648214436',
                }),
            })
            .openapi({ description: 'subscription information', required: ['subscriptionId'] }),
        },
      },
    },
  },
  callbacks: {
    onData: {
      '{$request.query.callbackUrl}/data': {
        post: {
          requestBody: {
            description: 'subscription payload',
            content: {
              'application/json': {
                schema: z
                  .object({
                    timestamp: z.iso.datetime({ offset: true }).exactOptional(),
                    userData: z.string().exactOptional(),
                  })
                  .openapi({ required: [] }),
              },
            },
          },
          responses: {
            202: {
              description:
                'Your server implementation should return this HTTP status code if the data was received successfully',
              content: {
                'application/json': {
                  schema: z
                    .object({
                      User: z
                        .object({
                          email: z.string().exactOptional(),
                          name: z.string().exactOptional(),
                        })
                        .exactOptional()
                        .openapi({ required: [] }),
                    })
                    .openapi({ required: [] }),
                  examples: {
                    user: {
                      value: { user: { email: 'test@example.com', name: 'Test user name' } },
                    },
                  },
                },
              },
            },
            204: {
              description:
                'Your server should return this HTTP status code if no longer interested in further updates',
              content: {
                'application/json': {
                  schema: z
                    .object({
                      email: z.string().exactOptional(),
                      name: z.string().exactOptional(),
                      id: z
                        .preprocess(
                          (val) =>
                            typeof val === 'number' && Number.isSafeInteger(val)
                              ? BigInt(val)
                              : typeof val === 'string' && /^-?\d+$/.test(val)
                                ? BigInt(val)
                                : val,
                          z.int64(),
                        )
                        .exactOptional()
                        .openapi({ type: 'integer', format: 'int64' }),
                    })
                    .openapi({ required: [] }),
                  example: { id: 12345, email: 'test@example.com', name: 'Test user name' },
                },
              },
            },
          },
        },
      },
    },
  },
})
