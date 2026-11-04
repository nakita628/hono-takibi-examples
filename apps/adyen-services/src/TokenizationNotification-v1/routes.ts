import { createRoute, z } from '@hono/zod-openapi'

const RecurringTokenSchema = z
  .strictObject({
    merchantAccount: z
      .string()
      .openapi({
        description:
          'The identifier of the merchant account related to the event that triggered the webhook.',
      }),
    shopperReference: z
      .string()
      .openapi({
        description:
          'Your unique shopper reference that is associated with the `storedPaymentMethodId`.',
      }),
    storedPaymentMethodId: z.string().openapi({ description: 'The ID of the token.' }),
    type: z.string().openapi({ description: 'The type of the payment method.' }),
  })
  .openapi({ required: ['merchantAccount', 'shopperReference', 'storedPaymentMethodId', 'type'] })
  .openapi('RecurringToken')

const RecurringTokenStoreOperationSchema = z
  .strictObject({
    merchantAccount: z
      .string()
      .openapi({
        description:
          'The identifier of the merchant account related to the event that triggered the webhook.',
      }),
    operation: z
      .string()
      .openapi({
        description:
          'A text description that provides details about the operation, intended for audit purposes.',
      }),
    shopperReference: z
      .string()
      .openapi({
        description:
          'Your unique shopper reference that is associated with the `storedPaymentMethodId`.',
      }),
    storedPaymentMethodId: z.string().openapi({ description: 'The ID of the token.' }),
    type: z.string().openapi({ description: 'The type of the payment method.' }),
  })
  .openapi({
    required: ['merchantAccount', 'operation', 'shopperReference', 'storedPaymentMethodId', 'type'],
  })
  .openapi('RecurringTokenStoreOperation')

const TokenizationAlreadyExistingDetailsNotificationRequestSchema = z
  .strictObject({
    createdAt: z.iso
      .datetime({ offset: true })
      .openapi({
        description: 'The date and time when the event happened, in ISO 8601 extended format.',
        example: '2024-10-29T16:15:29+01:00',
      }),
    data: RecurringTokenStoreOperationSchema.openapi({ description: 'Contains event details.' }),
    environment: z
      .enum(['test', 'live'])
      .openapi({
        description:
          'The environment from which the webhook originated.\n\nPossible values: **test**, **live**.',
        example: 'live',
      }),
    eventId: z
      .string()
      .openapi({ description: 'The PSP reference of the event that triggered the webhook.' }),
    type: z
      .literal('recurring.token.alreadyExisting')
      .openapi({ description: 'The type of webhook.' }),
    version: z
      .string()
      .exactOptional()
      .openapi({ description: 'The version of this entity.', example: '1' }),
  })
  .openapi({ required: ['createdAt', 'data', 'environment', 'eventId', 'type'] })
  .openapi('TokenizationAlreadyExistingDetailsNotificationRequest')

const TokenizationCreatedDetailsNotificationRequestSchema = z
  .strictObject({
    createdAt: z.iso
      .datetime({ offset: true })
      .openapi({
        description: 'The date and time when the event happened, in ISO 8601 extended format.',
        example: '2024-10-29T16:15:29+01:00',
      }),
    data: RecurringTokenStoreOperationSchema.openapi({ description: 'Contains event details.' }),
    environment: z
      .enum(['test', 'live'])
      .openapi({
        description:
          'The environment from which the webhook originated.\n\nPossible values: **test**, **live**.',
        example: 'live',
      }),
    eventId: z
      .string()
      .openapi({ description: 'The PSP reference of the event that triggered the webhook.' }),
    type: z.literal('recurring.token.created').openapi({ description: 'The type of webhook.' }),
    version: z
      .string()
      .exactOptional()
      .openapi({ description: 'The version of this entity.', example: '1' }),
  })
  .openapi({ required: ['createdAt', 'data', 'environment', 'eventId', 'type'] })
  .openapi('TokenizationCreatedDetailsNotificationRequest')

const TokenizationDisabledDetailsNotificationRequestSchema = z
  .strictObject({
    createdAt: z.iso
      .datetime({ offset: true })
      .openapi({
        description: 'The date and time when the event happened, in ISO 8601 extended format.',
        example: '2024-10-29T16:15:29+01:00',
      }),
    data: RecurringTokenSchema.openapi({ description: 'Contains event details.' }),
    environment: z
      .enum(['test', 'live'])
      .openapi({
        description:
          'The environment from which the webhook originated.\n\nPossible values: **test**, **live**.',
        example: 'live',
      }),
    eventId: z
      .string()
      .openapi({ description: 'The PSP reference of the event that triggered the webhook.' }),
    type: z.literal('recurring.token.disabled').openapi({ description: 'The type of webhook.' }),
    version: z
      .string()
      .exactOptional()
      .openapi({ description: 'The version of this entity.', example: '1' }),
  })
  .openapi({ required: ['createdAt', 'data', 'environment', 'eventId', 'type'] })
  .openapi('TokenizationDisabledDetailsNotificationRequest')

const TokenizationNotificationResponseSchema = z
  .strictObject({
    notificationResponse: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Respond with any **2xx** HTTP status code to [accept the webhook](https://docs.adyen.com/development-resources/webhooks/#accept-webhooks).',
      }),
  })
  .openapi({ required: [] })
  .openapi('TokenizationNotificationResponse')

const TokenizationUpdatedDetailsNotificationRequestSchema = z
  .strictObject({
    createdAt: z.iso
      .datetime({ offset: true })
      .openapi({
        description: 'The date and time when the event happened, in ISO 8601 extended format.',
        example: '2024-10-29T16:15:29+01:00',
      }),
    data: RecurringTokenStoreOperationSchema.openapi({ description: 'Contains event details.' }),
    environment: z
      .enum(['test', 'live'])
      .openapi({
        description:
          'The environment from which the webhook originated.\n\nPossible values: **test**, **live**.',
        example: 'live',
      }),
    eventId: z
      .string()
      .openapi({ description: 'The PSP reference of the event that triggered the webhook.' }),
    type: z.literal('recurring.token.updated').openapi({ description: 'The type of webhook.' }),
    version: z
      .string()
      .exactOptional()
      .openapi({ description: 'The version of this entity.', example: '1' }),
  })
  .openapi({ required: ['createdAt', 'data', 'environment', 'eventId', 'type'] })
  .openapi('TokenizationUpdatedDetailsNotificationRequest')

const PostRecurringTokenAlreadyExistingRecurringTokenAlreadyExistingExample = {
  summary: 'Token already exists',
  value: {
    createdAt: '2025-06-30T16:40:23+02:00',
    eventId: 'QBQQ9DLNRHHKGK38',
    environment: 'test',
    data: {
      merchantAccount: 'YOUR_MERCHANT_ACCOUNT',
      storedPaymentMethodId: 'M5N7TQ4TG5PFWR50',
      type: 'visastandarddebit',
      operation: 'alreadyExisting',
      shopperReference: 'YOUR_SHOPPER_REFERENCE',
    },
    type: 'recurring.token.alreadyExisting',
  },
}

const PostRecurringTokenCreatedRecurringTokenCreatedExample = {
  summary: 'Token is created',
  value: {
    createdAt: '2025-06-30T16:40:23+02:00',
    eventId: 'QBQQ9DLNRHHKGK38',
    environment: 'test',
    data: {
      merchantAccount: 'YOUR_MERCHANT_ACCOUNT',
      storedPaymentMethodId: 'M5N7TQ4TG5PFWR50',
      type: 'visastandarddebit',
      operation: 'created',
      shopperReference: 'YOUR_SHOPPER_REFERENCE',
    },
    type: 'recurring.token.created',
  },
}

const PostRecurringTokenDisabledRecurringTokenDisabledExample = {
  summary: 'Token is disabled',
  value: {
    createdAt: '2025-06-30T16:40:23+02:00',
    eventId: 'QBQQ9DLNRHHKGK38',
    environment: 'test',
    data: {
      merchantAccount: 'YOUR_MERCHANT_ACCOUNT',
      storedPaymentMethodId: 'M5N7TQ4TG5PFWR50',
      type: 'visastandarddebit',
      shopperReference: 'YOUR_SHOPPER_REFERENCE',
    },
    type: 'recurring.token.disabled',
  },
}

const PostRecurringTokenUpdatedRecurringTokenUpdatedExample = {
  summary: 'Token details are updated',
  value: {
    createdAt: '2025-06-30T16:40:23+02:00',
    eventId: 'QBQQ9DLNRHHKGK38',
    environment: 'test',
    data: {
      merchantAccount: 'YOUR_MERCHANT_ACCOUNT',
      storedPaymentMethodId: 'M5N7TQ4TG5PFWR50',
      type: 'visastandarddebit',
      operation: 'updated',
      shopperReference: 'YOUR_SHOPPER_REFERENCE',
    },
    type: 'recurring.token.updated',
  },
}

const BasicAuthSecurityScheme = { type: 'http', scheme: 'basic' }

export const recurringTokenAlreadyExistingPostWebhook = {
  method: 'post',
  path: '/recurring.token.alreadyExisting',
  tags: ['General'],
  summary: 'Token already exists',
  description:
    'Adyen sends this webhook when you attempt to create or update a token with details that match an already existing token.',
  operationId: 'post-recurring.token.alreadyExisting',
  request: {
    body: {
      content: {
        'application/json': {
          schema: TokenizationAlreadyExistingDetailsNotificationRequestSchema,
          examples: {
            'recurring-token-alreadyExisting':
              PostRecurringTokenAlreadyExistingRecurringTokenAlreadyExistingExample,
          },
        },
      },
    },
  },
  responses: {
    200: {
      description: 'OK - the request has succeeded.',
      content: { 'application/json': { schema: TokenizationNotificationResponseSchema } },
    },
  },
  security: [{ BasicAuth: [] }],
}

export const recurringTokenCreatedPostWebhook = {
  method: 'post',
  path: '/recurring.token.created',
  tags: ['General'],
  summary: 'Token created',
  description: 'Adyen sends this webhook when a token is created.',
  operationId: 'post-recurring.token.created',
  request: {
    body: {
      content: {
        'application/json': {
          schema: TokenizationCreatedDetailsNotificationRequestSchema,
          examples: {
            'recurring-token-created': PostRecurringTokenCreatedRecurringTokenCreatedExample,
          },
        },
      },
    },
  },
  responses: {
    200: {
      description: 'OK - the request has succeeded.',
      content: { 'application/json': { schema: TokenizationNotificationResponseSchema } },
    },
  },
  security: [{ BasicAuth: [] }],
}

export const recurringTokenDisabledPostWebhook = {
  method: 'post',
  path: '/recurring.token.disabled',
  tags: ['General'],
  summary: 'Token disabled',
  description:
    'Adyen sends this webhook when a token is disabled. For example, when you [delete stored payment details](https://docs.adyen.com/online-payments/tokenization/managing-tokens/#delete-stored-details), or when a third party disables the payment details.',
  operationId: 'post-recurring.token.disabled',
  request: {
    body: {
      content: {
        'application/json': {
          schema: TokenizationDisabledDetailsNotificationRequestSchema,
          examples: {
            'recurring-token-disabled': PostRecurringTokenDisabledRecurringTokenDisabledExample,
          },
        },
      },
    },
  },
  responses: {
    200: {
      description: 'OK - the request has succeeded.',
      content: { 'application/json': { schema: TokenizationNotificationResponseSchema } },
    },
  },
  security: [{ BasicAuth: [] }],
}

export const recurringTokenUpdatedPostWebhook = {
  method: 'post',
  path: '/recurring.token.updated',
  tags: ['General'],
  summary: 'Token updated',
  description:
    'Adyen sends this webhook when a token is updated, for example, when you [update stored details](https://docs.adyen.com/online-payments/tokenization/managing-tokens/#update-stored-details). Tokens can also be updated by card networks.',
  operationId: 'post-recurring.token.updated',
  request: {
    body: {
      content: {
        'application/json': {
          schema: TokenizationUpdatedDetailsNotificationRequestSchema,
          examples: {
            'recurring-token-updated': PostRecurringTokenUpdatedRecurringTokenUpdatedExample,
          },
        },
      },
    },
  },
  responses: {
    200: {
      description: 'OK - the request has succeeded.',
      content: { 'application/json': { schema: TokenizationNotificationResponseSchema } },
    },
  },
  security: [{ BasicAuth: [] }],
}
