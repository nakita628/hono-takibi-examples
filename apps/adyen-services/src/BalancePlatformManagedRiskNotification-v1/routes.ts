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

const ManagedRiskBalanceBlockReleasedNotificationRequestSchema = z
  .object({
    data: ReleaseBlockedBalanceNotificationDataSchema.openapi({
      description: 'Contains event details.',
    }),
    environment: z
      .enum(['test', 'live'])
      .openapi({
        description:
          'The environment from which the webhook originated.\n\nPossible values: **test**, **live**.',
      }),
    timestamp: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({ description: 'When the event was queued.' }),
    type: z
      .literal('balancePlatform.managedRisk.balance.block.released')
      .openapi({ description: 'Type of webhook.' }),
  })
  .openapi({ required: ['data', 'environment', 'type'] })
  .openapi('ManagedRiskBalanceBlockReleasedNotificationRequest')

const ReserveWaiverAppliedNotificationResourceSchema = z
  .object({
    accountHolderId: z
      .string()
      .openapi({
        description: 'The unique identifier of the account holder whose reserves will be waived.',
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
    eventDate: z.iso
      .date()
      .openapi({
        description: 'The date in which a reserve waiver has been applied to this account.',
      }),
    id: z
      .string()
      .exactOptional()
      .openapi({ description: 'The ID of the resource.', readOnly: true }),
  })
  .openapi({ required: ['accountHolderId', 'eventDate'] })
  .openapi('ReserveWaiverAppliedNotificationResource')

const ManagedRiskReserveWaiverAppliedNotificationRequestSchema = z
  .object({
    data: ReserveWaiverAppliedNotificationResourceSchema.openapi({
      description: 'Contains event details.',
    }),
    environment: z
      .enum(['test', 'live'])
      .openapi({
        description:
          'The environment from which the webhook originated.\n\nPossible values: **test**, **live**.',
      }),
    timestamp: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({ description: 'When the event was queued.' }),
    type: z
      .literal('balancePlatform.managedRisk.reserveWaiver.applied')
      .openapi({ description: 'Type of webhook.' }),
  })
  .openapi({ required: ['data', 'environment', 'type'] })
  .openapi('ManagedRiskReserveWaiverAppliedNotificationRequest')

const ReserveWaiverRemovedNotificationResourceSchema = z
  .object({
    accountHolderId: z
      .string()
      .openapi({
        description:
          'The unique identifier of the account holder whose reserves will no longer be waived.',
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
    eventDate: z.iso
      .date()
      .openapi({
        description: 'The date in which a reserve waiver has been removed from this account.',
      }),
    id: z
      .string()
      .exactOptional()
      .openapi({ description: 'The ID of the resource.', readOnly: true }),
  })
  .openapi({ required: ['accountHolderId', 'eventDate'] })
  .openapi('ReserveWaiverRemovedNotificationResource')

const ManagedRiskReserveWaiverRemovedNotificationRequestSchema = z
  .object({
    data: ReserveWaiverRemovedNotificationResourceSchema.openapi({
      description: 'Contains event details.',
    }),
    environment: z
      .enum(['test', 'live'])
      .openapi({
        description:
          'The environment from which the webhook originated.\n\nPossible values: **test**, **live**.',
      }),
    timestamp: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({ description: 'When the event was queued.' }),
    type: z
      .literal('balancePlatform.managedRisk.reserveWaiver.removed')
      .openapi({ description: 'Type of webhook.' }),
  })
  .openapi({ required: ['data', 'environment', 'type'] })
  .openapi('ManagedRiskReserveWaiverRemovedNotificationRequest')

const RollingReserveNotificationResourceSchema = z
  .object({
    accountHolderId: z
      .string()
      .openapi({
        description: 'The unique identifier of the account holder whose risk settings changed.',
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
    id: z
      .string()
      .exactOptional()
      .openapi({ description: 'The ID of the resource.', readOnly: true }),
    rollingReservePercentage: z
      .int32()
      .openapi({
        description:
          "The percentage of your user's daily sales volume that is withheld from the settlement batch as a rolling reserve.",
      }),
    withHoldingPeriodInDays: z
      .int32()
      .openapi({
        description:
          "The number of days after which we release the withheld percentage of your user's daily sales volume.",
      }),
  })
  .openapi({ required: ['accountHolderId', 'rollingReservePercentage', 'withHoldingPeriodInDays'] })
  .openapi('RollingReserveNotificationResource')

const ManagedRiskRollingReserveAppliedNotificationRequestSchema = z
  .object({
    data: RollingReserveNotificationResourceSchema.openapi({
      description: 'Contains event details.',
    }),
    environment: z
      .enum(['test', 'live'])
      .openapi({
        description:
          'The environment from which the webhook originated.\n\nPossible values: **test**, **live**.',
      }),
    timestamp: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({ description: 'When the event was queued.' }),
    type: z
      .literal('balancePlatform.managedRisk.rollingReserve.applied')
      .openapi({ description: 'Type of webhook.' }),
  })
  .openapi({ required: ['data', 'environment', 'type'] })
  .openapi('ManagedRiskRollingReserveAppliedNotificationRequest')

const RollingReserveLiftedNotificationResourceSchema = z
  .object({
    accountHolderId: z
      .string()
      .openapi({
        description: 'The unique identifier of the account holder whose risk settings changed.',
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
    id: z
      .string()
      .exactOptional()
      .openapi({ description: 'The ID of the resource.', readOnly: true }),
  })
  .openapi({ required: ['accountHolderId'] })
  .openapi('RollingReserveLiftedNotificationResource')

const ManagedRiskRollingReserveLiftedNotificationRequestSchema = z
  .object({
    data: RollingReserveLiftedNotificationResourceSchema.openapi({
      description: 'Contains event details.',
    }),
    environment: z
      .enum(['test', 'live'])
      .openapi({
        description:
          'The environment from which the webhook originated.\n\nPossible values: **test**, **live**.',
      }),
    timestamp: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({ description: 'When the event was queued.' }),
    type: z
      .literal('balancePlatform.managedRisk.rollingReserve.lifted')
      .openapi({ description: 'Type of webhook.' }),
  })
  .openapi({ required: ['data', 'environment', 'type'] })
  .openapi('ManagedRiskRollingReserveLiftedNotificationRequest')

const ManagedRiskRollingReserveUpdatedNotificationRequestSchema = z
  .object({
    data: RollingReserveNotificationResourceSchema.openapi({
      description: 'Contains event details.',
    }),
    environment: z
      .enum(['test', 'live'])
      .openapi({
        description:
          'The environment from which the webhook originated.\n\nPossible values: **test**, **live**.',
      }),
    timestamp: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({ description: 'When the event was queued.' }),
    type: z
      .literal('balancePlatform.managedRisk.rollingReserve.updated')
      .openapi({ description: 'Type of webhook.' }),
  })
  .openapi({ required: ['data', 'environment', 'type'] })
  .openapi('ManagedRiskRollingReserveUpdatedNotificationRequest')

const SettlementDelayLiftedNotificationResourceSchema = z
  .object({
    accountHolderId: z
      .string()
      .openapi({
        description: 'The unique identifier of the account holder whose risk settings changed.',
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
    id: z
      .string()
      .exactOptional()
      .openapi({ description: 'The ID of the resource.', readOnly: true }),
    reason: z
      .enum(['paymentProcessingEnabled', 'settlementDelayChanged', 'riskReviewPeriodPassed'])
      .openapi({
        description:
          "The reason for the change in your account holder's settlement delay.\n\nPossible values: **paymentProcessingEnabled**, **settlementDelayChanged**, **riskReviewPeriodPassed**.",
      }),
  })
  .openapi({ required: ['accountHolderId', 'reason'] })
  .openapi('SettlementDelayLiftedNotificationResource')

const ManagedRiskSettlementDelayLiftedNotificationRequestSchema = z
  .object({
    data: SettlementDelayLiftedNotificationResourceSchema.openapi({
      description: 'Contains event details.',
    }),
    environment: z
      .enum(['test', 'live'])
      .openapi({
        description:
          'The environment from which the webhook originated.\n\nPossible values: **test**, **live**.',
      }),
    timestamp: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({ description: 'When the event was queued.' }),
    type: z
      .literal('balancePlatform.managedRisk.settlementDelay.lifted')
      .openapi({ description: 'Type of webhook.' }),
  })
  .openapi({ required: ['data', 'environment', 'type'] })
  .openapi('ManagedRiskSettlementDelayLiftedNotificationRequest')

const SettlementDelayConfigurationSchema = z
  .object({
    paymentMethod: z
      .string()
      .openapi({ description: 'The payment method to which the settlement delay applies.' }),
    settlementDelay: z
      .int32()
      .openapi({
        description:
          "The updated settlement delay applied to your user's transactions. It indicates the number of days after which your user's funds become available in their balance account.",
      }),
  })
  .openapi({ required: ['paymentMethod', 'settlementDelay'] })
  .openapi('SettlementDelayConfiguration')

const SettlementDelayNotificationResourceSchema = z
  .object({
    accountHolderId: z
      .string()
      .openapi({
        description: 'The unique identifier of the account holder whose risk settings changed.',
      }),
    balancePlatform: z
      .string()
      .exactOptional()
      .openapi({ description: 'The unique identifier of the balance platform.' }),
    configurations: z
      .array(SettlementDelayConfigurationSchema)
      .openapi({
        description: 'Contains information about the configuration of a settlement delay.',
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
    reason: z
      .enum(['paymentProcessingEnabled', 'settlementDelayChanged', 'riskReviewPeriodPassed'])
      .openapi({
        description:
          "The reason for the change in your account holder's settlement delay.\n\nPossible values: **paymentProcessingEnabled**, **settlementDelayChanged**, **riskReviewPeriodPassed**.",
      }),
  })
  .openapi({ required: ['accountHolderId', 'configurations', 'reason'] })
  .openapi('SettlementDelayNotificationResource')

const ManagedRiskSettlementDelayNotificationRequestSchema = z
  .object({
    data: SettlementDelayNotificationResourceSchema.openapi({
      description: 'Contains event details.',
    }),
    environment: z
      .enum(['test', 'live'])
      .openapi({
        description:
          'The environment from which the webhook originated.\n\nPossible values: **test**, **live**.',
      }),
    timestamp: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({ description: 'When the event was queued.' }),
    type: z
      .literal('balancePlatform.managedRisk.settlementDelay.updated')
      .openapi({ description: 'Type of webhook.' }),
  })
  .openapi({ required: ['data', 'environment', 'type'] })
  .openapi('ManagedRiskSettlementDelayNotificationRequest')

const ApiKeyAuthSecurityScheme = { type: 'apiKey', name: 'X-API-Key', in: 'header' }

const BasicAuthSecurityScheme = { type: 'http', scheme: 'basic' }

export const balancePlatformManagedRiskBalanceBlockReleasedPostWebhook = {
  method: 'post',
  path: '/balancePlatform.managedRisk.balance.block.released',
  tags: ['Managed Risk'],
  summary: 'Blocked funds released',
  description:
    'Adyen sends this webhook when funds that were previously blocked are released, making them available.',
  operationId: 'post-balancePlatform.managedRisk.balance.block.released',
  request: {
    body: {
      content: {
        'application/json': {
          schema: ManagedRiskBalanceBlockReleasedNotificationRequestSchema,
          examples: {
            'balance-block-released': {
              summary: 'Blocked funds released',
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
                type: 'balancePlatform.managedRisk.balance.block.released',
              },
            },
          },
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'OK - the request has succeeded.',
      content: { 'application/json': { schema: BalancePlatformNotificationResponseSchema } },
    },
  },
}

export const balancePlatformManagedRiskReserveWaiverAppliedPostWebhook = {
  method: 'post',
  path: '/balancePlatform.managedRisk.reserveWaiver.applied',
  tags: ['Managed Risk'],
  summary: 'Reserve waiver applied',
  description:
    'Adyen sends this webhook when we apply a reserve waiver to your account holder, so that reserves are no longer withheld from their payouts.',
  operationId: 'post-balancePlatform.managedRisk.reserveWaiver.applied',
  request: {
    body: {
      content: {
        'application/json': {
          schema: ManagedRiskReserveWaiverAppliedNotificationRequestSchema,
          examples: {
            'reserve-waiver-applied': {
              summary: 'Reserve waiver applied',
              description: 'A reserve waiver was applied to the account holder.',
              value: {
                data: {
                  accountHolderId: 'AH00000000000000000001',
                  eventDate: '2025-01-19',
                  balancePlatform: 'YOUR_BALANCE_PLATFORM',
                  id: '9313547924908349',
                },
                environment: 'test',
                type: 'balancePlatform.managedRisk.reserveWaiver.applied',
              },
            },
          },
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'OK - the request has succeeded.',
      content: { 'application/json': { schema: BalancePlatformNotificationResponseSchema } },
    },
  },
}

export const balancePlatformManagedRiskReserveWaiverRemovedPostWebhook = {
  method: 'post',
  path: '/balancePlatform.managedRisk.reserveWaiver.removed',
  tags: ['Managed Risk'],
  summary: 'Reserve waiver removed',
  description:
    'Adyen sends this webhook when we remove a reserve waiver from your account holder, so that reserves are withheld from their payouts again.',
  operationId: 'post-balancePlatform.managedRisk.reserveWaiver.removed',
  request: {
    body: {
      content: {
        'application/json': {
          schema: ManagedRiskReserveWaiverRemovedNotificationRequestSchema,
          examples: {
            'reserve-waiver-removed': {
              summary: 'Reserve waiver removed',
              description: 'A reserve waiver was removed from the account holder.',
              value: {
                data: {
                  accountHolderId: 'AH00000000000000000001',
                  eventDate: '2025-01-19',
                  balancePlatform: 'YOUR_BALANCE_PLATFORM',
                  id: '9313547924908349',
                },
                environment: 'test',
                type: 'balancePlatform.managedRisk.reserveWaiver.removed',
              },
            },
          },
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'OK - the request has succeeded.',
      content: { 'application/json': { schema: BalancePlatformNotificationResponseSchema } },
    },
  },
}

export const balancePlatformManagedRiskRollingReserveAppliedPostWebhook = {
  method: 'post',
  path: '/balancePlatform.managedRisk.rollingReserve.applied',
  tags: ['Managed Risk'],
  summary: 'Rolling reserve applied',
  description:
    "Adyen sends this webhook when we apply a rolling reserve policy to your account holder's payouts, because of their risk level.",
  operationId: 'post-balancePlatform.managedRisk.rollingReserve.applied',
  request: {
    body: {
      content: {
        'application/json': {
          schema: ManagedRiskRollingReserveAppliedNotificationRequestSchema,
          examples: {
            'rolling-reserve-applied': {
              summary: 'Rolling reserve applied',
              description: 'A rolling reserve policy was applied to the account holder.',
              value: {
                data: {
                  accountHolderId: 'AH00000000000000000001',
                  rollingReservePercentage: 10,
                  withHoldingPeriodInDays: 30,
                  balancePlatform: 'YOUR_BALANCE_PLATFORM',
                  creationDate: '2025-01-19T13:37:38+02:00',
                  id: '9313547924908349',
                },
                environment: 'test',
                type: 'balancePlatform.managedRisk.rollingReserve.applied',
              },
            },
          },
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'OK - the request has succeeded.',
      content: { 'application/json': { schema: BalancePlatformNotificationResponseSchema } },
    },
  },
}

export const balancePlatformManagedRiskRollingReserveLiftedPostWebhook = {
  method: 'post',
  path: '/balancePlatform.managedRisk.rollingReserve.lifted',
  tags: ['Managed Risk'],
  summary: 'Rolling reserve lifted',
  description:
    "Adyen sends this webhook when we lift a rolling reserve policy from your account holder's payouts.",
  operationId: 'post-balancePlatform.managedRisk.rollingReserve.lifted',
  request: {
    body: {
      content: {
        'application/json': {
          schema: ManagedRiskRollingReserveLiftedNotificationRequestSchema,
          examples: {
            'rolling-reserve-lifted': {
              summary: 'Rolling reserve lifted',
              description: 'A rolling reserve policy was lifted from the account holder.',
              value: {
                data: {
                  accountHolderId: 'AH00000000000000000001',
                  balancePlatform: 'YOUR_BALANCE_PLATFORM',
                  creationDate: '2025-01-19T13:37:38+02:00',
                  id: '9313547924908349',
                },
                environment: 'test',
                type: 'balancePlatform.managedRisk.rollingReserve.lifted',
              },
            },
          },
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'OK - the request has succeeded.',
      content: { 'application/json': { schema: BalancePlatformNotificationResponseSchema } },
    },
  },
}

export const balancePlatformManagedRiskRollingReserveUpdatedPostWebhook = {
  method: 'post',
  path: '/balancePlatform.managedRisk.rollingReserve.updated',
  tags: ['Managed Risk'],
  summary: 'Rolling reserve updated',
  description:
    "Adyen sends this webhook when we update a rolling reserve policy applied to your account holder's payouts, because of their risk level.",
  operationId: 'post-balancePlatform.managedRisk.rollingReserve.updated',
  request: {
    body: {
      content: {
        'application/json': {
          schema: ManagedRiskRollingReserveUpdatedNotificationRequestSchema,
          examples: {
            'rolling-reserve-updated': {
              summary: 'Rolling reserve updated',
              description: 'An existing rolling reserve policy was updated.',
              value: {
                data: {
                  accountHolderId: 'AH00000000000000000001',
                  rollingReservePercentage: 15,
                  withHoldingPeriodInDays: 45,
                  balancePlatform: 'YOUR_BALANCE_PLATFORM',
                  creationDate: '2025-01-19T13:37:38+02:00',
                  id: '9313547924908349',
                },
                environment: 'test',
                type: 'balancePlatform.managedRisk.rollingReserve.updated',
              },
            },
          },
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'OK - the request has succeeded.',
      content: { 'application/json': { schema: BalancePlatformNotificationResponseSchema } },
    },
  },
}

export const balancePlatformManagedRiskSettlementDelayLiftedPostWebhook = {
  method: 'post',
  path: '/balancePlatform.managedRisk.settlementDelay.lifted',
  tags: ['Managed Risk'],
  summary: 'Settlement delay lifted',
  description:
    "Adyen sends this webhook when we lift a settlement delay from your account holder's payouts after their risk review period has passed.",
  operationId: 'post-balancePlatform.managedRisk.settlementDelay.lifted',
  request: {
    body: {
      content: {
        'application/json': {
          schema: ManagedRiskSettlementDelayLiftedNotificationRequestSchema,
          examples: {
            'settlement-delay-lifted': {
              summary: 'Settlement delay lifted',
              description: 'The settlement delay was lifted for the account holder.',
              value: {
                data: {
                  accountHolderId: 'AH00000000000000000001',
                  reason: 'riskReviewPeriodPassed',
                  balancePlatform: 'YOUR_BALANCE_PLATFORM',
                  creationDate: '2025-01-19T13:37:38+02:00',
                  id: '9313547924908349',
                },
                environment: 'test',
                type: 'balancePlatform.managedRisk.settlementDelay.lifted',
              },
            },
          },
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'OK - the request has succeeded.',
      content: { 'application/json': { schema: BalancePlatformNotificationResponseSchema } },
    },
  },
}

export const balancePlatformManagedRiskSettlementDelayUpdatedPostWebhook = {
  method: 'post',
  path: '/balancePlatform.managedRisk.settlementDelay.updated',
  tags: ['Managed Risk'],
  summary: 'Settlement delay updated',
  description:
    "Adyen sends this webhook when we update the settlement delay for your account holder's payouts, because of their risk level.",
  operationId: 'post-balancePlatform.managedRisk.settlementDelay.updated',
  request: {
    body: {
      content: {
        'application/json': {
          schema: ManagedRiskSettlementDelayNotificationRequestSchema,
          examples: {
            'settlement-delay-updated': {
              summary: 'Settlement delay updated',
              description: 'The settlement delay was updated for the account holder.',
              value: {
                data: {
                  accountHolderId: 'AH00000000000000000001',
                  reason: 'settlementDelayChanged',
                  configurations: [{ paymentMethod: 'standard', settlementDelay: 5 }],
                  balancePlatform: 'YOUR_BALANCE_PLATFORM',
                  creationDate: '2025-01-19T13:37:38+02:00',
                  id: '9313547924908349',
                },
                environment: 'test',
                type: 'balancePlatform.managedRisk.settlementDelay.updated',
              },
            },
          },
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'OK - the request has succeeded.',
      content: { 'application/json': { schema: BalancePlatformNotificationResponseSchema } },
    },
  },
}
