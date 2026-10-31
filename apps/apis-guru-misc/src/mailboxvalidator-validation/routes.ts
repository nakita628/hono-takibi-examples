import { createRoute, z } from '@hono/zod-openapi'

export const getV1ValidationSingleRoute = createRoute({
  method: 'get',
  path: '/v1/validation/single',
  description:
    'The Single Validation API does validation on a single email address and returns all the validation results in either JSON or XML format.',
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
            description: 'The email address to be validated.',
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
      description: 'single email validation response',
      content: {
        'application/json; charset=utf-8': {
          schema: z.string(),
          examples: {
            '0': {
              value:
                '{"email_address":"","domain":"","is_free":"","is_syntax":"","is_domain":"","is_smtp":"","is_verified":"","is_server_down":"","is_greylisted":"","is_disposable":"","is_suppressed":"","is_role":"","is_high_risk":"","is_catchall":"","mailboxvalidator_score":"","time_taken":0,"status":"","credits_available":"","error_code":"100","error_message":"Missing parameter."}',
            },
          },
        },
      },
    },
  },
})
