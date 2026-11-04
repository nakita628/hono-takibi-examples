import { createRoute, z } from '@hono/zod-openapi'

const AmountSchema = z
  .strictObject({
    currency: z
      .string()
      .length(3)
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

const ResourceReferenceSchema = z
  .strictObject({
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

const NegativeBalanceCompensationWarningNotificationDataSchema = z
  .strictObject({
    accountHolder: ResourceReferenceSchema.exactOptional().openapi({
      description:
        'The details of the account holder who owns the balance account with a negative balance.',
    }),
    amount: AmountSchema.exactOptional().openapi({
      description: 'The negative balance amount of the balance account.',
    }),
    balancePlatform: z
      .string()
      .exactOptional()
      .openapi({ description: 'The unique identifier of the balance platform.' }),
    creationDate: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({
        description:
          'The date and time when the event was triggered, in ISO 8601 extended format. For example, **2025-03-19T10:15:30+01:00**.',
      }),
    id: z.string().exactOptional().openapi({ description: 'The ID of the resource.' }),
    liableBalanceAccountId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The balance account ID of the account that will be used to compensate the balance account whose balance is negative.',
      }),
    negativeBalanceSince: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({ description: 'The date the balance for the account became negative.' }),
    scheduledCompensationAt: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({
        description: 'The date when a compensation transfer to the account is scheduled to happen.',
      }),
  })
  .openapi({ required: [] })
  .openapi('NegativeBalanceCompensationWarningNotificationData')

const NegativeBalanceCompensationWarningNotificationRequestSchema = z
  .strictObject({
    data: NegativeBalanceCompensationWarningNotificationDataSchema.openapi({
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
      .literal('balancePlatform.negativeBalanceCompensationWarning.scheduled')
      .openapi({ description: 'Type of webhook.' }),
  })
  .openapi({ required: ['data', 'environment', 'type'] })
  .openapi('NegativeBalanceCompensationWarningNotificationRequest')

const ResourceSchema = z
  .strictObject({
    balancePlatform: z
      .string()
      .exactOptional()
      .openapi({ description: 'The unique identifier of the balance platform.' }),
    creationDate: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({
        description:
          'The date and time when the event was triggered, in ISO 8601 extended format. For example, **2025-03-19T10:15:30+01:00**.',
      }),
    id: z.string().exactOptional().openapi({ description: 'The ID of the resource.' }),
  })
  .openapi({ required: [] })
  .openapi('Resource')

const PostBalancePlatformNegativeBalanceCompensationWarningScheduledBalancePlatformNegativeBalanceCompensationWarningScheduledExample =
  {
    summary: 'Negative balance compensation scheduled',
    description:
      'Example webhook sent as warning when a negative balance compensation is scheduled.',
    value: {
      data: {
        balancePlatform: 'YOUR_BALANCE_PLATFORM',
        creationDate: '2024-10-22T00:00:00+02:00',
        id: 'BA00000000000000000001',
        accountHolder: {
          description: 'Description for the account holder.',
          reference: 'YOUR_REFERENCE',
          id: 'AH00000000000000000001',
        },
        amount: { currency: 'EUR', value: -145050 },
        liableBalanceAccountId: 'BA11111111111111111111',
        negativeBalanceSince: '2024-10-19T00:33:13+02:00',
        scheduledCompensationAt: '2024-12-01T01:00:00+01:00',
      },
      environment: 'test',
      timestamp: '2024-10-22T00:00:00+02:00',
      type: 'balancePlatform.negativeBalanceCompensationWarning.scheduled',
    },
  }

const BasicAuthSecurityScheme = { type: 'http', scheme: 'basic' }

export const balancePlatformNegativeBalanceCompensationWarningScheduledPostWebhook = {
  method: 'post',
  path: '/balancePlatform.negativeBalanceCompensationWarning.scheduled',
  tags: ['General'],
  summary: 'Negative balance compensation scheduled',
  description:
    'Adyen sends this webhook to inform you about a balance account whose balance has been negative for 20 or more days. If you do not transfer funds to that balance account to cover the negative balance before the scheduled compensation date, a transfer is made from your liable balance account on that date.',
  operationId: 'post-balancePlatform.negativeBalanceCompensationWarning.scheduled',
  request: {
    body: {
      content: {
        'application/json': {
          schema: NegativeBalanceCompensationWarningNotificationRequestSchema,
          examples: {
            'balancePlatform.negativeBalanceCompensationWarning.scheduled':
              PostBalancePlatformNegativeBalanceCompensationWarningScheduledBalancePlatformNegativeBalanceCompensationWarningScheduledExample,
          },
        },
      },
    },
  },
  responses: {
    200: {
      description: 'No Content - webhook events are accepted on the basis of the HTTP status code.',
    },
  },
  security: [{ BasicAuth: [] }],
}
