import { createRoute, z } from '@hono/zod-openapi'

const AmountSchema = z
  .object({
    currency: z
      .string()
      .openapi({
        description:
          'The three-character [ISO currency code](https://docs.adyen.com/development-resources/currency-codes#currency-codes) of the amount.',
      }),
    value: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .openapi({
        type: 'integer',
        format: 'int64',
        description:
          'The numeric value of the amount, in [minor units](https://docs.adyen.com/development-resources/currency-codes#minor-units).',
      }),
  })
  .openapi({ required: ['currency', 'value'] })
  .openapi('Amount')

const BalancesSchema = z
  .object({
    available: z
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
      .openapi({
        type: 'integer',
        format: 'int64',
        description: 'The balance that is available for use.',
      }),
    balance: z
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
      .openapi({
        type: 'integer',
        format: 'int64',
        description: 'The sum of transactions that have already been settled.',
      }),
    pending: z
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
      .openapi({
        type: 'integer',
        format: 'int64',
        description: 'The sum of transactions that will be settled in the future.',
      }),
    reserved: z
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
      .openapi({
        type: 'integer',
        format: 'int64',
        description: 'The balance currently held in reserve.',
      }),
  })
  .openapi({ required: [] })
  .openapi('Balances')

const BalanceNotificationDataSchema = z
  .object({
    balanceAccountId: z
      .string()
      .openapi({ description: 'The unique identifier of the balance account.' }),
    balancePlatform: z
      .string()
      .exactOptional()
      .openapi({ description: 'The unique identifier of the balance platform.' }),
    balances: BalancesSchema.openapi({ description: 'The list balance types.' }),
    creationDate: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({
        description:
          'The date and time when the event was triggered, in ISO 8601 extended format. For example, **2025-03-19T10:15:30+01:00**.',
      }),
    currency: z
      .string()
      .openapi({
        description:
          'The three-character [ISO currency code](https://docs.adyen.com/development-resources/currency-codes).',
      }),
    id: z
      .string()
      .exactOptional()
      .openapi({ description: 'The ID of the resource.', readOnly: true }),
    settingIds: z
      .array(z.string())
      .openapi({ description: 'The unique identifier of the balance webhook setting.' }),
  })
  .openapi({ required: ['balanceAccountId', 'balances', 'currency', 'settingIds'] })
  .openapi('BalanceNotificationData')

const BalanceAccountBalanceNotificationRequestSchema = z
  .object({
    data: BalanceNotificationDataSchema.openapi({ description: 'Contains event details.' }),
    environment: z
      .string()
      .openapi({
        description:
          'The environment from which the webhook originated.\n\nPossible values: **test**, **live**.',
      }),
    timestamp: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({ description: 'When the event was queued.' }),
    type: z
      .literal('balancePlatform.balanceAccount.balance.updated')
      .openapi({ description: 'Type of webhook.' }),
  })
  .openapi({ required: ['data', 'environment', 'type'] })
  .openapi('BalanceAccountBalanceNotificationRequest')

const BalancePlatformNotificationResponseSchema = z
  .object({
    notificationResponse: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Respond with any **2xx** HTTP status code to [accept the webhook](https://docs.adyen.com/development-resources/webhooks/#accept-webhooks).',
      }),
  })
  .openapi({ required: [] })
  .openapi('BalancePlatformNotificationResponse')

const ResourceReferenceSchema = z
  .object({
    description: z
      .string()
      .exactOptional()
      .openapi({ description: 'The description of the resource.' }),
    id: z
      .string()
      .exactOptional()
      .openapi({ description: 'The unique identifier of the resource.' }),
    reference: z
      .string()
      .exactOptional()
      .openapi({ description: 'The reference for the resource.' }),
  })
  .openapi({ required: [] })
  .openapi('ResourceReference')

const ReleaseBlockedBalanceNotificationDataSchema = z
  .object({
    accountHolder: ResourceReferenceSchema.openapi({
      description:
        'Contains information about the account holder associated with the `balanceAccount`.',
    }),
    amount: AmountSchema.openapi({ description: 'The amount released.' }),
    balanceAccount: ResourceReferenceSchema.openapi({
      description: 'Contains information about the associated balance account.',
    }),
    balancePlatform: z
      .string()
      .exactOptional()
      .openapi({ description: 'The unique identifier of the balance platform.' }),
    batchReference: z
      .string()
      .exactOptional()
      .openapi({ description: 'The reference of the batch that was released.' }),
    blockedBalanceAfter: AmountSchema.exactOptional().openapi({
      description: 'The new blocked balance after the funds were released.',
    }),
    blockedBalanceBefore: AmountSchema.exactOptional().openapi({
      description: 'The blocked balance before the funds were released.',
    }),
    creationDate: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({
        description:
          'The date and time when the event was triggered, in ISO 8601 extended format. For example, **2025-03-19T10:15:30+01:00**.',
      }),
    id: z
      .string()
      .exactOptional()
      .openapi({ description: 'The ID of the resource.', readOnly: true }),
    valueDate: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({
        description:
          'The date and time when the amount was released, in ISO 8601 extended format. For example, **2025-03-19T10:15:30+01:00**.',
      }),
  })
  .openapi({ required: ['accountHolder', 'amount', 'balanceAccount'] })
  .openapi('ReleaseBlockedBalanceNotificationData')

const ReleasedBlockedBalanceNotificationRequestSchema = z
  .object({
    data: ReleaseBlockedBalanceNotificationDataSchema.openapi({
      description: 'Contains event details.',
    }),
    environment: z
      .string()
      .openapi({
        description:
          'The environment from which the webhook originated.\n\nPossible values: **test**, **live**.',
      }),
    timestamp: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({ description: 'When the event was queued.' }),
    type: z
      .literal('balancePlatform.balanceAccount.balance.block.released')
      .openapi({ description: 'Type of webhook.' }),
  })
  .openapi({ required: ['data', 'environment', 'type'] })
  .openapi('ReleasedBlockedBalanceNotificationRequest')

const ApiKeyAuthSecurityScheme = { type: 'apiKey', name: 'X-API-Key', in: 'header' }

const BasicAuthSecurityScheme = { type: 'http', scheme: 'basic' }

export const balancePlatformBalanceAccountBalanceBlockReleasedPostWebhook = {
  method: 'post',
  path: '/balancePlatform.balanceAccount.balance.block.released',
  tags: ['Balances'],
  summary: 'Blocked funds released',
  description:
    'Adyen sends this webhook when funds that were previously blocked are released, making them available. Funds may be blocked for reasons such as:\n\n**Collateral for payments**: Funds are held to secure loans or payments, and are released upon repayment.\n\n**Risk mitigation**: Funds are held to cover potential risks like chargebacks, and are released after a set period, such as a return window.\n\n',
  operationId: 'post-balancePlatform.balanceAccount.balance.block.released',
  request: {
    body: {
      content: {
        'application/json': {
          schema: ReleasedBlockedBalanceNotificationRequestSchema,
          examples: {
            'released-block-balance': {
              summary: 'Funds released',
              description: 'Funds that were previously blocked are released.',
              value: {
                data: {
                  accountHolder: {
                    description: 'Account holder for retail operations',
                    id: 'AH00000000000000000001',
                    reference: 'Store_001',
                  },
                  amount: { currency: 'EUR', value: 25000 },
                  balanceAccount: {
                    description: 'Main operating account',
                    id: 'BA00000000000000000001',
                    reference: 'OP_ACCT_MAIN',
                  },
                  balancePlatform: 'YOUR_BALANCE_PLATFORM',
                  batchReference: 'BATCH_REF_20250925',
                  blockedBalanceAfter: { currency: 'EUR', value: -75000 },
                  blockedBalanceBefore: { currency: 'EUR', value: -100000 },
                  creationDate: '2025-09-25T14:30:00Z',
                  valueDate: '2025-09-25T14:35:00Z',
                },
                environment: 'test',
                timestamp: '2025-09-25T14:35:00Z',
                type: 'balancePlatform.balanceAccount.balance.block.released',
              },
            },
          },
        },
      },
    },
  },
  responses: {
    200: {
      description: 'OK - the request has succeeded.',
      content: {
        'application/json': {
          schema: BalancePlatformNotificationResponseSchema,
          examples: {
            'released-block-balance': {
              summary: 'Acknowledge webhook',
              description: 'Acknowledge webhook',
              value: { notificationResponse: '[accepted]' },
            },
          },
        },
      },
    },
  },
}

export const balancePlatformBalanceAccountBalanceUpdatedPostWebhook = {
  method: 'post',
  path: '/balancePlatform.balanceAccount.balance.updated',
  tags: ['Balances'],
  summary: 'Balance updated',
  description:
    'Adyen sends this webhook when the specified balance type reaches or drops below the threshold you configured.',
  operationId: 'post-balancePlatform.balanceAccount.balance.updated',
  request: {
    body: {
      content: {
        'application/json': {
          schema: BalanceAccountBalanceNotificationRequestSchema,
          examples: {
            'balance-updated': {
              summary: 'Balance changed',
              description: 'Balance changed',
              value: {
                data: {
                  settingIds: ['BWHS00000000000000000000000001', 'BWHS00000000000000000000000002'],
                  creationDate: '2025-01-19T13:37:38+02:00',
                  balancePlatform: 'YOUR_BALANCE_PLATFORM',
                  balanceAccountId: 'BA00000000000000000000000001',
                  currency: 'USD',
                  balances: {
                    available: 499900,
                    pending: 350000,
                    reserved: 120000,
                    balance: 470000,
                  },
                },
                environment: 'test',
                type: 'balancePlatform.balanceAccount.balance.updated',
              },
            },
          },
        },
      },
    },
  },
  responses: {
    200: {
      description: 'OK - the request has succeeded.',
      content: {
        'application/json': {
          schema: BalancePlatformNotificationResponseSchema,
          examples: {
            'balance-updated': {
              summary: 'Acknowledge webhook',
              description: 'Acknowledge webhook',
              value: { notificationResponse: '[accepted]' },
            },
          },
        },
      },
    },
  },
}
