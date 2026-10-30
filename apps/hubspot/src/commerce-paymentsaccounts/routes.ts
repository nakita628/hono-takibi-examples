import { createRoute, z } from '@hono/zod-openapi'

const ErrorDetailSchema = z
  .object({
    code: z
      .string()
      .exactOptional()
      .openapi({ description: 'The status code associated with the error detail', example: null }),
    context: z
      .record(z.string(), z.array(z.string().openapi({ example: null })).openapi({ example: null }))
      .exactOptional()
      .openapi({
        description: 'Context about the error condition',
        example: '{missingScopes=[scope1, scope2]}',
      }),
    in: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The name of the field or parameter in which the error was found.',
        example: null,
      }),
    message: z
      .string()
      .openapi({
        description:
          'A human readable message describing the error along with remediation steps where appropriate',
        example: null,
      }),
    subCategory: z
      .string()
      .exactOptional()
      .openapi({
        description: 'A specific category that contains more specific detail about the error',
        example: null,
      }),
  })
  .openapi({
    required: ['message'],
    description:
      'Represents detailed information about an error that occurred in the API. This component is used to provide additional context and specifics about errors, typically as part of an error response.',
    example: null,
  })
  .openapi('ErrorDetail')

const ErrorSchema = z
  .object({
    category: z.string().openapi({ description: 'The error category', example: null }),
    context: z
      .record(z.string(), z.array(z.string().openapi({ example: null })).openapi({ example: null }))
      .exactOptional()
      .openapi({
        description: 'Context about the error condition',
        example: '{invalidPropertyName=[propertyValue], missingScopes=[scope1, scope2]}',
      }),
    correlationId: z
      .uuid()
      .openapi({
        description:
          'A unique identifier for the request. Include this value with any error reports or support tickets',
        example: 'aeb5f871-7f07-4993-9211-075dc63e7cbf',
      }),
    errors: z
      .array(ErrorDetailSchema)
      .exactOptional()
      .openapi({ description: 'further information about the error', example: null }),
    links: z
      .record(z.string(), z.string().openapi({ example: null }))
      .exactOptional()
      .openapi({
        description:
          'A map of link names to associated URIs containing documentation about the error or recommended remediation steps',
        example: null,
      }),
    message: z
      .string()
      .openapi({
        description:
          'A human readable message describing the error along with remediation steps where appropriate',
        example: 'An error occurred',
      }),
    subCategory: z
      .string()
      .exactOptional()
      .openapi({
        description: 'A specific category that contains more specific detail about the error',
        example: null,
      }),
  })
  .openapi({
    required: ['category', 'correlationId', 'message'],
    description:
      'Represents an error response returned by the API when an operation fails. This component is used in various endpoints to provide detailed information about the error encountered.',
    example: {
      message: 'Invalid input (details will vary based on the error)',
      correlationId: 'aeb5f871-7f07-4993-9211-075dc63e7cbf',
      category: 'VALIDATION_ERROR',
      links: { 'knowledge-base': 'https://www.hubspot.com/products/service/knowledge-base' },
    },
  })
  .openapi('Error')

const PaymentAccountViewSchema = z
  .object({
    canPayout: z
      .boolean()
      .openapi({
        description: 'A boolean indicating whether the account is capable of making payouts.',
        example: null,
      }),
    canTransact: z
      .boolean()
      .openapi({
        description:
          'A boolean indicating whether the account is capable of processing transactions.',
        example: null,
      }),
    createdAt: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({
        description: 'The date and time when the payment account was created, in ISO 8601 format.',
        example: null,
      }),
    eligibleProcessorTypes: z
      .array(z.enum(['NOT_ENROLLED', 'HS_PAYMENTS', 'BYO_STRIPE']).openapi({ example: null }))
      .openapi({
        description:
          "An array of processor types that the account is eligible to use. Valid values include 'HS_PAYMENTS', and 'BYO_STRIPE'.",
        example: null,
      }),
    enrollmentState: z
      .enum([
        'ACTIVE',
        'DISCONNECTED',
        'IN_PROGRESS',
        'IN_UNDERWRITING',
        'NOT_STARTED',
        'OPTED_OUT',
        'REJECTED',
        'SUSPENDED',
      ])
      .openapi({
        description:
          "The current enrollment state of the payment account. Valid values include 'NOT_STARTED', 'IN_PROGRESS', 'IN_UNDERWRITING', 'ACTIVE', 'SUSPENDED', 'REJECTED', 'OPTED_OUT', and 'DISCONNECTED'.",
        example: null,
      }),
    hasTransacted: z
      .boolean()
      .openapi({
        description: 'A boolean indicating whether the account has ever processed a transaction.',
        example: null,
      }),
    id: z.string().openapi({ description: 'The portalId for the payment account.', example: null }),
    lastTransactedAt: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({
        description:
          'The date and time of the last transaction made with this account, in ISO 8601 format.',
        example: null,
      }),
    processorType: z
      .enum(['BYO_STRIPE', 'HS_PAYMENTS', 'NOT_ENROLLED'])
      .openapi({
        description:
          "The type of payment processor associated with the account. Valid values include 'NOT_ENROLLED', 'HS_PAYMENTS', and 'BYO_STRIPE'.",
        example: null,
      }),
    updatedAt: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({
        description:
          'The date and time when the payment account was last updated, in ISO 8601 format.',
        example: null,
      }),
  })
  .openapi({
    required: [
      'canPayout',
      'canTransact',
      'eligibleProcessorTypes',
      'enrollmentState',
      'hasTransacted',
      'id',
      'processorType',
    ],
    example: null,
  })
  .openapi('PaymentAccountView')

const ErrorResponse = {
  description: 'An error occurred.',
  content: { '*/*': { schema: ErrorSchema, example: null } },
}

const DeveloperHapikeySecurityScheme = { type: 'apiKey', name: 'hapikey', in: 'query' }

const Oauth2SecurityScheme = {
  type: 'oauth2',
  flows: {
    authorizationCode: {
      authorizationUrl: 'https://app.hubspot.com/oauth/authorize',
      tokenUrl: 'https://api.hubapi.com/oauth/v1/token',
      scopes: { 'cpq.quotes.write': '' },
    },
  },
}

const PrivateAppsSecurityScheme = { type: 'apiKey', name: 'private-app', in: 'header' }

const PrivateAppsLegacySecurityScheme = { type: 'apiKey', name: 'private-app-legacy', in: 'header' }

export const getCommercePaymentAccounts202609StatusRoute = createRoute({
  method: 'get',
  path: '/commerce/payment-accounts/2026-09/status',
  tags: ['Basic'],
  summary: "Retrieve status and general information about a portal's payments account.",
  description:
    "Retrieve the status of payment accounts in your HubSpot account. This endpoint provides information about the account's ability to transact and payout, its enrollment state, when or if it has transacted last, and the types of payment processors it is eligible for. Use this to monitor and manage your payment account's operational status.",
  operationId: 'get-/commerce/payment-accounts/2026-09/status',
  responses: {
    200: {
      description: 'successful operation',
      content: { 'application/json': { schema: PaymentAccountViewSchema, example: null } },
    },
    default: ErrorResponse,
  },
  security: [{ oauth2: ['cpq.quotes.write'] }],
})
