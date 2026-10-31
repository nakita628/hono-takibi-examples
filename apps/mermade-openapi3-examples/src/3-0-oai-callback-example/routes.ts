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
              'the location where data will be sent.  Must be network accessible\nby the source server\n',
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
                'Your server implementation should return this HTTP status code\nif the data was received successfully\n',
            },
            204: {
              description:
                'Your server should return this HTTP status code if no longer interested\nin further updates\n',
            },
          },
        },
      },
    },
  },
})
