import { createRoute, z } from '@hono/zod-openapi'

const ErrorInvalidIdSchema = z
  .object({
    detail: z
      .string()
      .openapi({
        description: 'Additional information about the error',
        example: "ID '0A000000B0C9A1234' could not be found (type=MT)",
      }),
    instance: z
      .string()
      .openapi({ description: 'Internal Trace ID', example: 'bf0ca0bf927b3b52e3cb03217e1a1ddf' }),
    title: z.string().openapi({ description: 'Generic error message', example: 'Invalid ID' }),
    type: z
      .string()
      .openapi({
        description: 'Link to error / remediation options',
        example: 'https://developer.nexmo.com/api-errors#invalid-id',
      }),
  })
  .openapi({ required: ['type', 'title', 'detail', 'instance'] })
  .openapi('ErrorInvalidId')

const ErrorInvalidJsonSchema = z
  .object({
    detail: z
      .string()
      .openapi({
        description: 'Additional information about the error',
        example:
          "Unexpected character ('\"' (code 34)): was expecting comma to separate Object entries",
      }),
    instance: z
      .string()
      .openapi({ description: 'Internal Trace ID', example: 'bf0ca0bf927b3b52e3cb03217e1a1ddf' }),
    title: z.string().openapi({ description: 'Generic error message', example: 'Invalid JSON' }),
    type: z
      .string()
      .openapi({
        description: 'Link to error / remediation options',
        example: 'https://developer.nexmo.com/api-errors#invalid-json',
      }),
  })
  .openapi({ description: 'Invalid JSON', required: ['type', 'title', 'detail', 'instance'] })
  .openapi('ErrorInvalidJson')

const ErrorPrematureRedactionSchema = z
  .object({
    detail: z
      .string()
      .openapi({
        description: 'Additional information about the error',
        example: "You must wait 60 minutes before redacting ID '0A000000B0C9A1234'",
      }),
    instance: z
      .string()
      .openapi({ description: 'Internal Trace ID', example: 'bf0ca0bf927b3b52e3cb03217e1a1ddf' }),
    title: z
      .string()
      .openapi({ description: 'Generic error message', example: 'Premature Redaction' }),
    type: z
      .string()
      .openapi({
        description: 'Link to error / remediation options',
        example: 'https://developer.nexmo.com/api-errors/redact#premature-redaction',
      }),
  })
  .openapi({
    description: 'Premature Redaction',
    required: ['type', 'title', 'detail', 'instance'],
  })
  .openapi('ErrorPrematureRedaction')

const ErrorThrottledSchema = z
  .object({
    detail: z
      .string()
      .openapi({
        description: 'Additional information about the error',
        example: 'Please wait, then retry your request',
      }),
    instance: z
      .string()
      .openapi({ description: 'Internal Trace ID', example: 'bf0ca0bf927b3b52e3cb03217e1a1ddf' }),
    title: z.string().openapi({ description: 'Generic error message', example: 'Rate Limit Hit' }),
    type: z
      .string()
      .openapi({
        description: 'Link to error / remediation options',
        example: 'https://developer.nexmo.com/api-errors/redact#rate-limit',
      }),
  })
  .openapi({ required: ['type', 'title', 'detail', 'instance'] })
  .openapi('ErrorThrottled')

const ErrorUnauthorizedSchema = z
  .object({
    error_title: z.string().openapi({ description: 'Error title', example: 'Unauthorized' }),
    type: z
      .string()
      .openapi({ description: 'Machine readable error type', example: 'UNAUTHORIZED' }),
  })
  .openapi({ required: ['type', 'error_title'] })
  .openapi('ErrorUnauthorized')

const ErrorUnprovisionedSchema = z
  .object({
    detail: z
      .string()
      .openapi({
        description: 'Additional information about the error',
        example: 'User=ABC123 is not provisioned to redact product=SMS',
      }),
    instance: z
      .string()
      .openapi({ description: 'Internal Trace ID', example: 'bf0ca0bf927b3b52e3cb03217e1a1ddf' }),
    title: z
      .string()
      .openapi({ description: 'Generic error message', example: 'Authorisation error' }),
    type: z
      .string()
      .openapi({
        description: 'Link to error / remediation options',
        example: 'https://developer.nexmo.com/api-errors#unprovisioned',
      }),
  })
  .openapi({ description: 'Unprovisioned', required: ['type', 'title', 'detail', 'instance'] })
  .openapi('ErrorUnprovisioned')

const ErrorUnsupportedProductSchema = z
  .object({
    detail: z
      .string()
      .openapi({
        description: 'Additional information about the error',
        example: 'No product corresponding to supplied string sms2!',
      }),
    instance: z
      .string()
      .openapi({ description: 'Internal Trace ID', example: 'bf0ca0bf927b3b52e3cb03217e1a1ddf' }),
    title: z.string().openapi({ description: 'Generic error message', example: 'Invalid Product' }),
    type: z
      .string()
      .openapi({
        description: 'Link to error / remediation options',
        example: 'https://developer.nexmo.com/api-errors/redact#invalid-product',
      }),
  })
  .openapi({
    description: 'Unsupported Product',
    required: ['type', 'title', 'detail', 'instance'],
  })
  .openapi('ErrorUnsupportedProduct')

const RedactTransactionSchema = z
  .object({
    id: z
      .string()
      .openapi({
        description: 'The transaction ID to redact',
        example: '209ab3c7536542b91e8b5aef032f6861',
      }),
    product: z
      .enum(['sms', 'voice', 'number-insight', 'verify', 'verify-sdk', 'messages'])
      .openapi({ description: 'Product name that the ID provided relates to', example: 'sms' }),
    type: z
      .enum(['inbound', 'outbound'])
      .default('outbound')
      .openapi({ description: 'Required if redacting SMS data', example: 'outbound' }),
  })
  .openapi({ required: ['id', 'product', 'type'] })
  .openapi('RedactTransaction')

const BasicAuthSecurityScheme = { scheme: 'basic', type: 'http' }

export const postTransactionRoute = createRoute({
  method: 'post',
  path: '/transaction',
  summary: 'Redact a specific message',
  operationId: 'redact-message',
  request: {
    body: { content: { 'application/json': { schema: RedactTransactionSchema } }, required: true },
  },
  responses: {
    204: { description: 'Success' },
    401: {
      description: 'Authentication failure',
      content: { 'application/json': { schema: ErrorUnauthorizedSchema } },
    },
    403: {
      description: 'Authorisation denied',
      content: {
        'application/json': {
          schema: z.xor([ErrorPrematureRedactionSchema, ErrorUnprovisionedSchema]),
        },
      },
    },
    404: {
      description: 'No such record',
      content: { 'application/json': { schema: ErrorInvalidIdSchema } },
    },
    422: {
      description: 'Invalid JSON body',
      content: {
        'application/json': {
          schema: z.xor([ErrorInvalidJsonSchema, ErrorUnsupportedProductSchema]),
        },
      },
    },
    429: {
      description: 'Rate Limited',
      content: { 'application/json': { schema: ErrorThrottledSchema } },
    },
  },
  security: [{ basicAuth: [] }],
})
