import { createRoute, z } from '@hono/zod-openapi'

export const getV1EmailDisposableRoute = createRoute({
  method: 'get',
  path: '/v1/email/disposable',
  description:
    'The Disposable Email Checker API does checking on a single email address and returns if it is from a disposable email provider in either JSON or XML format.',
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
            description: 'The email address to check if is from a disposable email provider.',
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
      description: 'disposable email checker response',
      content: {
        'application/json; charset=utf-8': {
          schema: z.string(),
          examples: {
            '0': {
              value:
                '{"email_address":"","is_disposable":"","credits_available":"","error_code":"","error_message":""}',
            },
          },
        },
      },
    },
  },
})
