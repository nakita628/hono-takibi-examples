import { createRoute, z } from '@hono/zod-openapi'

export const getV1EmailFreeRoute = createRoute({
  method: 'get',
  path: '/v1/email/free',
  description:
    'The Free Email Checker API does validation on a single email address and returns if it is from a free email provider in either JSON or XML format.',
  request: {
    query: z.object({
      format: z
        .enum(['json', 'xml'])
        .exactOptional()
        .openapi({
          param: {
            description: 'Return the result in json (default) or xml format.',
            in: 'query',
            name: 'format',
            schema: { enum: ['json', 'xml'], type: 'string' },
            required: false,
          },
        }),
      email: z
        .string()
        .openapi({
          param: {
            description: 'The email address to check if is from a free email provider.',
            in: 'query',
            name: 'email',
            required: true,
            schema: { type: 'string' },
          },
        }),
      key: z
        .string()
        .openapi({
          param: {
            description: 'API key.',
            in: 'query',
            name: 'key',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'free email checker response',
      content: {
        'application/json; charset=utf-8': {
          schema: z.string(),
          examples: {
            '0': {
              value:
                '{"email_address":"","is_free":"","credits_available":"","error_code":"","error_message":""}',
            },
          },
        },
      },
    },
  },
})
