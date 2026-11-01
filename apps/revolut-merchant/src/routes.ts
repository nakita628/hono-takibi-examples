import { createRoute, z } from '@hono/zod-openapi'

const SubscriptionPlanIdSchema = z
  .uuid()
  .openapi({
    title: 'Subscription-Plan-Id',
    description: 'Unique identifier for the subscription plan.',
  })
  .openapi('SubscriptionPlanId')

const SubscriptionPlanNameSchema = z
  .string()
  .min(1)
  .max(1024)
  .openapi({ title: 'Subscription-Plan-Name', description: 'The name of the subscription plan.' })
  .openapi('SubscriptionPlanName')

const SubscriptionPlanTrialDurationSchema = z.iso
  .duration()
  .regex(/^P[0-9]+D$/)
  .openapi({
    title: 'Subscription-Plan-Trial-Duration',
    description:
      'The default trial period duration for this subscription plan in [ISO 8601 duration format](https://en.wikipedia.org/wiki/ISO_8601#Durations) (e.g., "P14D" for 14 days).\n\nThis value serves as the default trial duration for all subscriptions created from this plan. Individual subscriptions can override this value at creation time.\n\n:::note\nOnly days (`D`) are allowed. Time components such as hours, minutes, or seconds are not permitted.\n:::',
    example: 'P14D',
  })
  .openapi('SubscriptionPlanTrialDuration')

const SubscriptionPlanStateSchema = z
  .enum(['active', 'deactivated'])
  .openapi({
    title: 'Subscription-Plan-State',
    description:
      'The state of the subscription plan.\n\n| State | Description |\n| ----- | ----------- |\n| `active` | The plan is active and can be used to create new subscriptions. |\n| `deactivated` | The plan has been deactivated and cannot be used for new subscriptions. |',
  })
  .openapi('SubscriptionPlanState')

const SubscriptionPlanCreatedSchema = z.iso
  .datetime({ offset: true })
  .openapi({
    title: 'Subscription-Plan-Created',
    description:
      'The date and time the subscription plan was created in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format.',
  })
  .openapi('SubscriptionPlanCreated')

const SubscriptionPlanUpdatedSchema = z.iso
  .datetime({ offset: true })
  .openapi({
    title: 'Subscription-Plan-Updated',
    description:
      'The date and time the subscription plan was last updated in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format.',
  })
  .openapi('SubscriptionPlanUpdated')

const SubscriptionPlanVariationIdSchema = z
  .uuid()
  .openapi({
    title: 'Subscription-Plan-Variation-Id',
    description: 'Unique identifier for the subscription plan variation.',
  })
  .openapi('SubscriptionPlanVariationId')

const SubscriptionPlanPhaseIdSchema = z
  .uuid()
  .openapi({
    title: 'Subscription-Plan-Phase-Id',
    description: 'Unique identifier for the subscription plan phase.',
  })
  .openapi('SubscriptionPlanPhaseId')

const SubscriptionPlanOrdinalSchema = z
  .int()
  .min(1)
  .openapi({
    description:
      'The sequential order of this phase in the subscription billing lifecycle.\n\nPhases execute in ascending order based on this value:\n- Phase with `ordinal=1` executes first\n- Phase with `ordinal=2` executes second, and so on\n\nWhen a phase completes its `cycle_count`, the subscription automatically progresses to the phase with the next `ordinal` value.\n\n**Example**: A subscription with phases ordered as `ordinal=1` (trial), `ordinal=2` (regular), `ordinal=3` (discounted) will progress through them in that sequence.',
    title: 'Subscription-Plan-Ordinal',
  })
  .openapi('SubscriptionPlanOrdinal')

const CycleDurationSchema = z.iso
  .duration()
  .openapi({
    title: 'Cycle-Duration',
    description:
      'The length of each billing cycle for this phase in [ISO 8601 duration format](https://en.wikipedia.org/wiki/ISO_8601#Durations).\n\nThis determines how often the customer is billed during this phase. The total time spent in a phase is `cycle_duration × cycle_count`.\n\n**Common durations**:\n\n| Duration | Description |\n| -------- | ----------- |\n| `P1M` | 1 month |\n| `P1Y` | 1 year |\n| `P15D` | 15 days |\n| `P1W` | 1 week |\n| `PT2H` | 2 hours |\n\n**Example**: If `cycle_duration=P1M` and `cycle_count=12`, the customer will be billed monthly for 12 months (1 year total).',
  })
  .openapi('CycleDuration')

const CycleCountSchema = z
  .int()
  .min(1)
  .nullable()
  .openapi({
    description:
      'Number of billing cycles for this phase before moving to the next phase.\n\n| Value | Behavior |\n| ----- | -------- |\n| `null` or omitted | Phase continues indefinitely. The subscription remains in this phase with no automatic progression. |\n| Specific number (e.g., `1`, `3`, `12`) | After completing this many billing cycles, the subscription automatically moves to the next phase as determined by the `ordinal` field. |\n\n**Example**: If `cycle_count=3` and `cycle_duration=P1M`, the subscription will complete 3 monthly cycles then move to the phase with the next highest `ordinal` value.\n\n:::note\nIf no next phase exists in after a cycle with a specific `cycle_count`, the subscription will automatically stop when it completes its cycles.\n:::',
    title: 'Cycle-Count',
  })
  .openapi('CycleCount')

const SubscriptionAmountSchema = z
  .preprocess(
    (val) =>
      typeof val === 'number' && Number.isSafeInteger(val)
        ? BigInt(val)
        : typeof val === 'string' && /^-?\d+$/.test(val)
          ? BigInt(val)
          : val,
    z.int64().min(0n),
  )
  .openapi({
    type: 'integer',
    format: 'int64',
    minimum: 0,
    title: 'Subscription-Amount',
    description:
      'Subscription amount in minor currency units (e.g., cents for USD, pence for GBP).\n\nFor example, `9900` in `GBP` represents £99.00.\n\n:::info\nConversion between major and minor units varies by currency. For instance, `100` minor units equal £1.00 in `GBP`, whereas in `ISK` they represent 100 units. For more details, see the [ISO 4217 standard](https://en.wikipedia.org/wiki/ISO_4217).\n:::',
  })
  .openapi('SubscriptionAmount')

const CurrencySchema = z
  .string()
  .length(3)
  .openapi({
    title: 'Currency',
    description:
      '[ISO 4217](https://en.wikipedia.org/wiki/ISO_4217) currency code in upper case.\n\n:::info\nFor more information about the supported currencies, see: [Help Center](https://help.revolut.com/business/help/merchant-accounts/payments/in-which-currencies-can-i-accept-payments/).\n:::',
  })
  .openapi('Currency')

const SubscriptionItemIdSchema = z
  .uuid()
  .openapi({
    title: 'Subscription-Item-Id',
    description: 'The unique identifier of the subscription item.',
  })
  .openapi('SubscriptionItemId')

const SubscriptionItemNameSchema = z
  .string()
  .max(250)
  .openapi({
    title: 'Subscription-Item-Name',
    description: 'The name of the subscription item.',
    example: 'Base Subscription Fee',
  })
  .openapi('SubscriptionItemName')

const SubscriptionItemTypeSchema = z
  .enum(['flat', 'usage'])
  .openapi({
    title: 'Subscription-Item-Type',
    description: 'The type of subscription item.',
    example: 'flat',
  })
  .openapi('SubscriptionItemType')

const SubscriptionItemPackageSizeSchema = z
  .number()
  .openapi({
    title: 'Subscription-Item-Package-Size',
    description:
      'The number of units grouped together as a single billable package. Used to enable pricing of items that are too inexpensive to charge individually.\n\nFor example, a `package_size` of `1000` with a unit price of 10 minor units (£0.10 in GBP) lets you sell 1000 tokens for £0.10 — effectively pricing each token at £0.0001, below the minimum chargeable amount.\n\nSet to `1` to price each unit individually.',
    example: 1,
  })
  .openapi('SubscriptionItemPackageSize')

const SubscriptionItemUnitSchema = z
  .string()
  .max(100)
  .openapi({
    title: 'Subscription-Item-Unit',
    description: 'The unit of measurement for the item.',
    example: 'subscription',
  })
  .openapi('SubscriptionItemUnit')

const SubscriptionItemQuantitySchema = z
  .number()
  .openapi({
    title: 'Subscription-Item-Quantity',
    description: 'The quantity of the item.',
    example: 1,
  })
  .openapi('SubscriptionItemQuantity')

const SubscriptionItemFlatSchema = z
  .object({
    id: SubscriptionItemIdSchema,
    name: SubscriptionItemNameSchema,
    type: SubscriptionItemTypeSchema,
    package_size: SubscriptionItemPackageSizeSchema.exactOptional(),
    unit: SubscriptionItemUnitSchema,
    quantity: SubscriptionItemQuantitySchema,
    amount: z
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
        description: 'Amount in minor currency units (e.g., cents for USD).',
        example: 9900,
      }),
    currency: CurrencySchema,
  })
  .openapi({
    title: 'Subscription-Item-Flat',
    description: 'Object structure of flat subscription item.',
    required: ['id', 'name', 'type', 'amount', 'currency', 'unit', 'quantity'],
  })
  .openapi('SubscriptionItemFlat')

const SubscriptionItemTierSchema = z
  .object({
    upper_quantity_threshold: z
      .number()
      .nullable()
      .exactOptional()
      .openapi({
        description: 'The upper bound of the tier (exclusive). Null means unlimited.',
        example: 100,
      }),
    amount: z
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
          "Per-unit amount in minor currency units (e.g., cents for USD) charged for usage within this tier's threshold range.",
        example: 500,
      }),
  })
  .openapi({
    title: 'Subscription-Item-Tier',
    description:
      'A pricing tier for a subscription item, defining a per-unit amount within a quantity range.',
    required: ['amount'],
  })
  .openapi('SubscriptionItemTier')

const SubscriptionItemCodeSchema = z
  .string()
  .max(250)
  .openapi({
    title: 'Subscription-Item-Code',
    description:
      'A merchant-defined identifier for a usage-based subscription item. You set this code on each usage item when creating a subscription plan, and supply it when reporting consumption on [Create a subscription usage endpoint](https://developer.revolut.com/docs/api/merchant#create-subscription-usage) to target the correct metered item.\n\nThis allows a subscription with multiple usage items (e.g., `api_calls` and `storage_gb`) to receive consumption reports against the right item without relying on internal IDs.\n\nThe code must be unique within a plan phase.',
    example: 'api_calls',
  })
  .openapi('SubscriptionItemCode')

const UsageAggregationMethodSchema = z
  .enum(['sum', 'latest', 'max'])
  .openapi({
    title: 'Usage-Aggregation-Method',
    description:
      'The method used to aggregate usage events over a billing cycle to calculate the chargeable amount.\n\n| Value | Behaviour |\n| ----- | --------- |\n| `sum` | Totals all reported usage events during the cycle. Use for cumulative metrics (e.g., API calls, data transferred). |\n| `latest` | Uses the most recently reported value at the end of the cycle. If no usage is reported in a cycle, `0` is used — values do not carry over from previous cycles. Use for gauge-style metrics (e.g., active seats). |\n| `max` | Uses the peak value reported during the cycle. Use for capacity-based billing (e.g., max concurrent connections). |',
    example: 'sum',
  })
  .openapi('UsageAggregationMethod')

const SubscriptionItemUsageSchema = z
  .object({
    id: SubscriptionItemIdSchema,
    name: SubscriptionItemNameSchema,
    type: SubscriptionItemTypeSchema,
    package_size: SubscriptionItemPackageSizeSchema.exactOptional(),
    unit: SubscriptionItemUnitSchema,
    amount: z
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
        description:
          'Flat amount per unit in minor currency units. Mutually exclusive with `tiers`.',
        example: 10,
      }),
    currency: CurrencySchema,
    tiers: z
      .array(SubscriptionItemTierSchema)
      .exactOptional()
      .openapi({ description: 'Graduated pricing tiers. Mutually exclusive with `amount`.' }),
    code: SubscriptionItemCodeSchema,
    usage_aggregation_method: UsageAggregationMethodSchema,
  })
  .openapi({
    title: 'Subscription-Item-Usage',
    description: 'Object structure of usage subscription item.',
    required: ['id', 'name', 'type', 'currency', 'unit', 'code', 'usage_aggregation_method'],
  })
  .openapi('SubscriptionItemUsage')

const SubscriptionItemSchema = z
  .xor([SubscriptionItemFlatSchema, SubscriptionItemUsageSchema])
  .openapi({
    title: 'Subscription-Item',
    description:
      'A subscription item that defines a billing line within a plan phase. Can be either a fixed-fee (flat) item or a metered (usage) item.',
    discriminator: {
      propertyName: 'type',
      mapping: {
        flat: '#/components/schemas/Subscription-Item-Flat',
        usage: '#/components/schemas/Subscription-Item-Usage',
      },
    },
  })
  .openapi('SubscriptionItem')

const SubscriptionItemsSchema = z
  .array(SubscriptionItemSchema)
  .openapi({
    title: 'Subscription-Items',
    description: 'A list of subscription items for this phase.',
  })
  .openapi('SubscriptionItems')

const SubscriptionPlanPhaseSchema = z
  .object({
    id: SubscriptionPlanPhaseIdSchema,
    ordinal: SubscriptionPlanOrdinalSchema,
    cycle_duration: CycleDurationSchema,
    cycle_count: CycleCountSchema.exactOptional(),
    amount: SubscriptionAmountSchema.exactOptional(),
    currency: CurrencySchema.exactOptional(),
    subscription_items: SubscriptionItemsSchema.exactOptional(),
  })
  .openapi({
    title: 'Subscription-Plan-Phase',
    description:
      'A billing phase within a subscription plan variation, including its cycle duration, amount, and subscription items.',
    required: ['id', 'ordinal', 'cycle_duration'],
  })
  .openapi('SubscriptionPlanPhase')

const SubscriptionPlanVariationSchema = z
  .object({
    id: SubscriptionPlanVariationIdSchema,
    phases: z
      .array(SubscriptionPlanPhaseSchema)
      .openapi({ description: 'List of billing phases for this variation.' }),
  })
  .openapi({
    title: 'Subscription-Plan-Variation',
    description: 'A subscription plan variation, including its ID and billing phases.',
    required: ['id', 'phases'],
  })
  .openapi('SubscriptionPlanVariation')

type SubscriptionPlanType = {
  id: z.infer<typeof SubscriptionPlanIdSchema>
  name: z.infer<typeof SubscriptionPlanNameSchema>
  trial_duration?: z.infer<typeof SubscriptionPlanTrialDurationSchema>
  state: z.infer<typeof SubscriptionPlanStateSchema>
  created_at: z.infer<typeof SubscriptionPlanCreatedSchema>
  updated_at: z.infer<typeof SubscriptionPlanUpdatedSchema>
  variations: z.infer<typeof SubscriptionPlanVariationSchema>[]
}

const SubscriptionPlanSchema: z.ZodType<SubscriptionPlanType> = z
  .object({
    id: SubscriptionPlanIdSchema,
    name: SubscriptionPlanNameSchema,
    trial_duration: SubscriptionPlanTrialDurationSchema.exactOptional(),
    state: SubscriptionPlanStateSchema,
    created_at: SubscriptionPlanCreatedSchema,
    updated_at: SubscriptionPlanUpdatedSchema,
    variations: z
      .array(SubscriptionPlanVariationSchema)
      .openapi({ description: 'List of subscription plan variations.' }),
  })
  .openapi({
    title: 'Subscription-Plan',
    description: 'A subscription plan, including its name, state, and pricing variations.',
    required: ['id', 'name', 'state', 'created_at', 'updated_at', 'variations'],
  })
  .openapi('SubscriptionPlan')

type SubscriptionPlansType = {
  next_page_token?: string | null
  subscription_plans: z.infer<typeof SubscriptionPlanSchema>[]
}

const SubscriptionItemFlatCreationSchema = z
  .object({
    name: SubscriptionItemNameSchema,
    type: SubscriptionItemTypeSchema,
    package_size: SubscriptionItemPackageSizeSchema.exactOptional(),
    unit: SubscriptionItemUnitSchema,
    quantity: SubscriptionItemQuantitySchema,
    amount: z
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
        description: 'Amount in minor currency units (e.g., cents for USD).',
        example: 9900,
      }),
    currency: CurrencySchema,
  })
  .openapi({
    title: 'Subscription-Item-Flat-Creation',
    description: 'Object structure of flat subscription item.',
    required: ['name', 'type', 'amount', 'currency', 'unit', 'quantity'],
  })
  .openapi('SubscriptionItemFlatCreation')

const SubscriptionItemUsageCreationSchema = z
  .object({
    name: SubscriptionItemNameSchema,
    type: SubscriptionItemTypeSchema,
    package_size: SubscriptionItemPackageSizeSchema.exactOptional(),
    unit: SubscriptionItemUnitSchema,
    amount: z
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
        description:
          'Flat amount per unit in minor currency units. Mutually exclusive with `tiers`.',
        example: 10,
      }),
    currency: CurrencySchema,
    tiers: z
      .array(SubscriptionItemTierSchema)
      .exactOptional()
      .openapi({ description: 'Graduated pricing tiers. Mutually exclusive with `amount`.' }),
    code: SubscriptionItemCodeSchema,
    usage_aggregation_method: UsageAggregationMethodSchema,
  })
  .openapi({
    title: 'Subscription-Item-Usage-Creation',
    description: 'Object structure for usage subscription item.',
    required: ['name', 'type', 'currency', 'unit', 'code', 'usage_aggregation_method'],
  })
  .openapi('SubscriptionItemUsageCreation')

const SubscriptionItemCreationSchema = z
  .xor([SubscriptionItemFlatCreationSchema, SubscriptionItemUsageCreationSchema])
  .openapi({
    title: 'Subscription-Item-Creation',
    description:
      'A subscription item for a plan phase. Can be either a fixed-fee (flat) item or a metered (usage) item.',
    discriminator: {
      propertyName: 'type',
      mapping: {
        flat: '#/components/schemas/Subscription-Item-Flat-Creation',
        usage: '#/components/schemas/Subscription-Item-Usage-Creation',
      },
    },
  })
  .openapi('SubscriptionItemCreation')

const SubscriptionItemsCreationSchema = z
  .array(SubscriptionItemCreationSchema)
  .openapi({
    title: 'Subscription-Items-Creation',
    description: 'A list of subscription items for this phase.',
  })
  .openapi('SubscriptionItemsCreation')

const SubscriptionPlanPhaseCreationSchema = z
  .object({
    ordinal: SubscriptionPlanOrdinalSchema,
    cycle_duration: CycleDurationSchema,
    cycle_count: CycleCountSchema.exactOptional(),
    amount: SubscriptionAmountSchema,
    currency: CurrencySchema,
    subscription_items: SubscriptionItemsCreationSchema.exactOptional(),
  })
  .openapi({
    title: 'Subscription-Plan-Phase-Creation',
    description:
      'Request body for creating a billing phase within a subscription plan variation, including cycle duration, amount, and subscription items.',
    required: ['ordinal', 'cycle_duration', 'amount', 'currency'],
  })
  .openapi('SubscriptionPlanPhaseCreation')

const SubscriptionPlanVariationCreationSchema = z
  .object({
    phases: z
      .array(SubscriptionPlanPhaseCreationSchema)
      .min(1)
      .openapi({ description: 'List of billing phases for this variation.' }),
  })
  .openapi({
    title: 'Subscription-Plan-Variation-Creation',
    description:
      'Request body for creating a subscription plan variation, including its billing phases.',
    required: ['phases'],
  })
  .openapi('SubscriptionPlanVariationCreation')

type SubscriptionPlanCreationType = {
  name: z.infer<typeof SubscriptionPlanNameSchema>
  trial_duration?: z.infer<typeof SubscriptionPlanTrialDurationSchema>
  variations: z.infer<typeof SubscriptionPlanVariationCreationSchema>[]
}

const MerchantOrderExternalReferenceSchema = z
  .string()
  .openapi({
    title: 'Merchant-Order-External-Reference',
    description:
      'Merchant order ID for external reference.\n\nUse this field to set the ID that your own system can use to easily track orders.',
  })
  .openapi('MerchantOrderExternalReference')

const OrderStateSchema = z
  .enum(['pending', 'processing', 'authorised', 'completed', 'cancelled', 'failed'])
  .openapi({
    title: 'Order-State',
    description:
      'The state of the order in its lifecycle.\n\n| State | Description |\n|-------|-------------|\n| `pending` | Order created, awaiting payment |\n| `processing` | Payment is being processed |\n| `authorised` | Payment authorised but not yet captured (for manual capture) |\n| `completed` | Payment successfully captured and settled |\n| `cancelled` | Order was cancelled |\n| `failed` | Payment failed |\n\n:::info\nFor more information, see: [Order and payment lifecycle](https://developer.revolut.com/docs/guides/merchant/reference/order-lifecycle)\n:::',
    example: 'authorised',
  })
  .openapi('OrderState')

const OrderIdSchema = z
  .uuid()
  .openapi({
    title: 'Order-Id',
    description:
      'Permanent order ID used to retrieve, capture, cancel, or refund an order after authorization.',
  })
  .openapi('OrderId')

const OrderTokenSchema = z
  .string()
  .openapi({
    title: 'Order-Token',
    description:
      'Temporary ID for the order, which expires when the payment is authorised.\n\nThe order `token` is used for [token-based initialisation](https://developer.revolut.com/docs/sdks/merchant-web-sdk/initialisation/token-based), and is returned by the `createOrder` callback in the following payment methods:\n\n- [Embedded Checkout](https://developer.revolut.com/docs/sdks/merchant-web-sdk/payment-methods/embedded-checkout#embedded-checkout-options-interface)\n- [Revolut Pay](https://developer.revolut.com/docs/sdks/merchant-web-sdk/payment-methods/revolut-pay#widget-payments-revolut-pay-options)\n- [Apple Pay and Google Pay](https://developer.revolut.com/docs/sdks/merchant-web-sdk/payment-methods/apple-pay-google-pay#payment-request-options-interface)\n- [Pay by Bank](https://developer.revolut.com/docs/sdks/merchant-web-sdk/payment-methods/pay-by-bank#pay-by-bank-options-interface)',
  })
  .openapi('OrderToken')

const OrderTypeV2Schema = z
  .enum([
    'payment',
    'payment_request',
    'refund',
    'chargeback',
    'chargeback_reversal',
    'credit_reimbursement',
  ])
  .openapi({ title: 'Order-Type-v2', description: 'The type of the order.' })
  .openapi('OrderTypeV2')

const OrderAmountV2Schema = z
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
    title: 'Order-Amount-v2',
    description:
      "The order total expressed in minor currency units, according to the [ISO 4217 standard](https://en.wikipedia.org/wiki/ISO_4217). For example, `7034` in `EUR` corresponds to €70.34.\n\n:::info\n- Conversion between major and minor units varies by currency. For instance, `100` minor units equal £1.00 in `GBP`, whereas in `ISK` they represent 100 units. For more details, see the [ISO 4217 standard](https://en.wikipedia.org/wiki/ISO_4217).\n- If `line_items` are provided, the order `amount` must equal the sum of all line items' `total_amount`.\n- For card payments with a non-zero amount, the order `amount` must be at least **$0.005** (or equivalent in different currencies, calculated using Revolut's exchange rate on the payment date). Otherwise, card payments can't be performed.\n:::",
  })
  .openapi('OrderAmountV2')

const OutstandingAmountSchema = z
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
    title: 'Outstanding-Amount',
    description:
      'The amount not yet paid for a given order (in minor currency units). For example, `7034` represents €70.34. \n\nThe value in this field may differ from `amount` if there are partial payments associated with the order.',
  })
  .openapi('OutstandingAmount')

const CaptureModeV2Schema = z
  .enum(['automatic', 'manual'])
  .default('automatic')
  .openapi({
    title: 'Capture-Mode-v2',
    description:
      'The capture mode of the order. `automatic` is used by default.\n\n| Parameter value | Description |\n| --------------- | ----------- |\n| `automatic` | The order is captured automatically after payment authorisation. |\n| `manual` | The order is not captured automatically. You must manually capture the order later. |\n\n:::info\nFor more information, see [Capture an order](https://developer.revolut.com/docs/api/merchant#capture-order).\n:::',
  })
  .openapi('CaptureModeV2')

const EnforceChallengeV2Schema = z
  .enum(['automatic', 'forced'])
  .default('automatic')
  .openapi({
    title: 'Enforce-Challenge-v2',
    description:
      'The enforce challenge mode. `automatic` is used by default.\n\n| Parameter value | Description |\n| --------------- | ----------- |\n| `automatic` | The payments created for an order will have challenge requirement calculated by our fraud mechanisms. Not all payments will trigger a 3DS challenge. |\n| `forced` | The payments created for an order will always require a 3DS challenge. Currently only supported for card payments. |',
  })
  .openapi('EnforceChallengeV2')

const AuthorisationTypeSchema = z
  .enum(['final', 'pre_authorisation'])
  .default('final')
  .openapi({
    title: 'Authorisation-Type',
    description:
      "The type of authorisation for the order. Used with manual capture mode. If omitted, `final` is used by default.\n\n### Pre-authorisation\n\nPre-authorisation allows you to reserve funds on a customer's card without immediately capturing them. This is useful for scenarios like:\n\n- Hotel bookings where the final amount may vary\n- Car rentals where additional charges may apply\n- Deposits that need to be held temporarily\n\n| Parameter value | Description |\n| --------------- | ----------- |\n| `final` | Standard authorisation for immediate or near-immediate capture. |\n| `pre_authorisation` | Reserve funds for later capture, used with manual capture mode. |\n\n:::note\nPre-authorisation must be used with `capture_mode: manual`. For more information, see [Capture an order](https://developer.revolut.com/docs/api/merchant#capture-order).\n:::",
  })
  .openapi('AuthorisationType')

const OrderDescriptionSchema = z
  .string()
  .openapi({ title: 'Order-Description', description: 'The description of the order.' })
  .openapi('OrderDescription')

const MetadataSchema = z
  .record(
    z.string(),
    z
      .string()
      .max(500)
      .openapi({
        description: 'Additional metadata value provided with the corresponding metadata key.',
      }),
  )
  .refine((val) => Object.keys(val).length <= 50)
  .openapi({
    title: 'Metadata',
    description:
      'Additional information to track your orders in your system, by providing custom metadata using `"<key>" : "<value>"` pairs.\n\n:::warning\n**Restrictions:**\n\n- Both keys and values must be `string`s\n- Values cannot be `null`.\n- Max number of key-value pairs: `50`\n- Max length of values: `500` characters\n- Format of keys: Must start with a letter and contain only letters, digits, and underscores. Max 40 characters. Pattern: `^[a-zA-Z][a-zA-Z\\\\d_]{0,39}$`\n:::',
    example: {
      order_reference: 'ORD-12345',
      customer_segment: 'premium',
      internal_note: 'VIP customer - priority handling',
    },
  })
  .openapi('Metadata')

const RelatedOrderIdSchema = z
  .uuid()
  .openapi({
    title: 'Related-Order-Id',
    description:
      'The unique ID of the original order that was refunded and this refund is associated with. You can use this ID to get more information about the related order using the [Retrieve an order](https://developer.revolut.com/docs/api/merchant#retrieve-order) operation.\n\n:::note\nThis field is only returned for orders with `type: refund`.\n:::',
  })
  .openapi('RelatedOrderId')

const SubscriptionIdSchema = z
  .uuid()
  .openapi({ title: 'Subscription-Id', description: 'Unique identifier for the subscription.' })
  .openapi('SubscriptionId')

const SubscriptionActiveCycleIdSchema = z
  .uuid()
  .openapi({
    title: 'Subscription-Active-Cycle-Id',
    description:
      'The unique identifier of the active (pre-paid) subscription cycle that this order collects payment for.\n\nThis is the current billing cycle whose recurring charges are being collected in advance by this order. For example, if a subscription cycle covers 1-31 July and the order is generated on 1 July, this field identifies that July cycle.',
  })
  .openapi('SubscriptionActiveCycleId')

const SubscriptionSettledCycleIdSchema = z
  .uuid()
  .openapi({
    title: 'Subscription-Settled-Cycle-Id',
    description:
      'The unique identifier of the settled (post-paid) subscription cycle whose usage-based charges this order collects.\n\nThis is the previous billing cycle whose usage is being settled by this order. For example, if a subscription cycle covers usage from 1-30 June and the order is generated on 10 July, this field identifies that June cycle.',
  })
  .openapi('SubscriptionSettledCycleId')

const SubscriptionOrderBillingReasonSchema = z
  .enum(['cycle_billing', 'final_settlement', 'setup_intent'])
  .openapi({
    title: 'Subscription-Order-Billing-Reason',
    description:
      'The reason this subscription order was created.\n\n| Value | Description |\n| ----- | ----------- |\n| `cycle_billing` | The order was automatically generated to collect payment for an ongoing subscription cycle. `active_cycle_id` is present; `settled_cycle_id` is present if the previous cycle included usage-based products. |\n| `final_settlement` | The order was automatically generated after the subscription ended to collect outstanding usage-based charges. `active_cycle_id` is absent; `settled_cycle_id` is present. |\n| `setup_intent` | The order was manually created by the merchant or customer to update the payment method on file. `active_cycle_id` is absent; `settled_cycle_id` is absent. |',
  })
  .openapi('SubscriptionOrderBillingReason')

const SubscriptionDataSchema = z
  .object({
    subscription_id: SubscriptionIdSchema,
    active_cycle_id: SubscriptionActiveCycleIdSchema.exactOptional(),
    settled_cycle_id: SubscriptionSettledCycleIdSchema.exactOptional(),
    billing_reason: SubscriptionOrderBillingReasonSchema,
  })
  .openapi({
    title: 'Subscription-Data',
    required: ['subscription_id', 'billing_reason'],
    description:
      'Subscription details linked to the order. Use this object to match an order with its underlying subscription and understand the billing context in which the order was created.\n\nOnly present on orders created by a subscription.',
  })
  .openapi('SubscriptionData')

const CustomerIdSchema = z
  .uuid()
  .openapi({ title: 'Customer-Id', description: 'Unique identifier for the customer.' })
  .openapi('CustomerId')

const EmailSchema = z
  .email()
  .openapi({ title: 'Email', description: 'The email address of the customer.' })
  .openapi('Email')

const PhoneSchema = z
  .string()
  .openapi({
    title: 'Phone',
    description:
      'The phone number of the customer in [E.164 format](https://en.wikipedia.org/wiki/E.164).',
  })
  .openapi('Phone')

const FullNameSchema = z
  .string()
  .openapi({ title: 'Full-Name', description: 'The full name of the customer.' })
  .openapi('FullName')

const DateOfBirthSchema = z.iso
  .date()
  .openapi({ title: 'Date-Of-Birth', description: 'The birth date of the customer.' })
  .openapi('DateOfBirth')

const OrderCustomerV2Schema = z
  .object({
    id: CustomerIdSchema,
    email: EmailSchema.exactOptional(),
    phone: PhoneSchema.exactOptional(),
    full_name: FullNameSchema.exactOptional(),
    date_of_birth: DateOfBirthSchema.exactOptional(),
  })
  .openapi({
    title: 'Order-Customer-v2',
    description:
      'A lightweight customer object embedded in an order.\n\nThis is a simplified representation intended for the order context. For the full customer object including all payment methods, use the [Retrieve a customer](https://developer.revolut.com/docs/api/merchant#retrieve-customer) endpoint.',
    required: ['id'],
  })
  .openapi('OrderCustomerV2')

const QuantitySchema = z
  .object({
    value: z.float64().min(0).openapi({ description: 'The number of units of the line item.' }),
    unit: z
      .string()
      .max(100)
      .exactOptional()
      .openapi({ description: 'The measurement unit for the quantity, such as `cm`, or `kg`.' }),
  })
  .openapi({
    title: 'Quantity',
    description:
      'Object representing the quantity details of a line item, including the amount and its associated unit of measurement.',
    required: ['value'],
  })
  .openapi('Quantity')

const DiscountSchema = z
  .object({
    name: z
      .string()
      .max(100)
      .openapi({
        description: 'The specific name or label of the discount applied to the line item.',
      }),
    amount: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64().min(0n),
      )
      .openapi({
        type: 'integer',
        format: 'int64',
        minimum: 0,
        description: 'The monetary value of the discount. ',
      }),
  })
  .openapi({
    title: 'Discount',
    description:
      'Details of a discount applied to the line item, including its name and monetary value.',
    required: ['name', 'amount'],
  })
  .openapi('Discount')

const TaxSchema = z
  .object({
    name: z
      .string()
      .max(100)
      .openapi({
        description: 'The specific name or designation of the tax applied to the line item.',
      }),
    amount: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64().min(0n),
      )
      .openapi({
        type: 'integer',
        format: 'int64',
        minimum: 0,
        description: 'The monetary value of the tax in minor currency units (e.g., cents for EUR).',
      }),
  })
  .openapi({
    title: 'Tax',
    description:
      'Details about a tax applied to the line item, including its name and the corresponding amount.',
    required: ['name', 'amount'],
  })
  .openapi('Tax')

const ImageUrlSchema = z
  .url()
  .regex(/^https?:\/{2}.+/)
  .max(2000)
  .openapi({
    title: 'Image-Url',
    description:
      'URL to an image associated with the line item.\n\n:::warning\nRestrictions:\n- Must be a valid URI as defined by [RFC 3986](https://datatracker.ietf.org/doc/html/rfc3986)\n- URI scheme is required and must be either `http` or `https`\n- URI host is required and cannot be `localhost` or an IP address\n- Max length: `2000`\n- Reserved or invalid characters must be percent-encoded (for example, use `%20` instead of a space)\n:::',
  })
  .openapi('ImageUrl')

const LineItemSchema = z
  .object({
    name: z.string().max(250).openapi({ description: 'Name of the line item.' }),
    type: z.enum(['physical', 'service']).openapi({ description: 'Type of the line item.' }),
    quantity: QuantitySchema,
    unit_price_amount: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64().min(0n),
      )
      .openapi({
        type: 'integer',
        format: 'int64',
        minimum: 0,
        description: 'The unit price of the line item.',
      }),
    total_amount: z
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
          'The total amount to be paid for the line item, including taxes and discounts.',
      }),
    external_id: z
      .string()
      .max(250)
      .exactOptional()
      .openapi({ description: "Unique identifier of line item in the merchant's system." }),
    discounts: z
      .array(DiscountSchema)
      .max(50)
      .exactOptional()
      .openapi({
        description:
          'A list of discounts applied to the line item. Each discount should be subtracted from the total amount payable for the item.',
      }),
    taxes: z
      .array(TaxSchema)
      .max(50)
      .exactOptional()
      .openapi({
        description:
          'A list of taxes applied to the line item. Each tax should be added to the total amount payable for the item.',
      }),
    image_urls: z
      .array(ImageUrlSchema)
      .max(50)
      .exactOptional()
      .openapi({
        description:
          'A list of URLs pointing to images related to the line item. These images can provide visual details or representations of the item.',
      }),
    description: z
      .string()
      .max(1024)
      .exactOptional()
      .openapi({ description: 'Description of the line item.' }),
    url: z
      .url()
      .regex(/^https?:\/{2}.+/)
      .max(2000)
      .exactOptional()
      .openapi({
        description:
          'An HTTP/HTTPS URL that links to more information about the line item, such as a product page or details.\n\n:::warning\nRestrictions:\n- Must be a valid URI as defined by [RFC 3986](https://datatracker.ietf.org/doc/html/rfc3986)\n- URI scheme is required and must be either `http` or `https`\n- URI host is required and cannot be `localhost` or an IP address\n- Max length: `2000`\n- Reserved or invalid characters must be percent-encoded (for example, use `%20` instead of a space)\n:::',
      }),
  })
  .openapi({
    title: 'Line-Item',
    description:
      'A single line item in an order, describing a product or service with its quantity and price details.',
    required: ['name', 'unit_price_amount', 'total_amount', 'quantity', 'type'],
  })
  .openapi('LineItem')

const LineItemsSchema = z
  .array(LineItemSchema)
  .max(250)
  .openapi({
    title: 'Line-Items',
    description:
      'An array of line items included in the order. Each line item represents an individual product or service, along with its quantity, price, taxes, and discounts.\n\n:::info\nRequired for merchants collecting payment for one or multiple products/services in one transaction. Omitting this information may trigger additional scrutiny and risk mitigation actions by Revolut.\n:::',
  })
  .openapi('LineItems')

const MerchantOrderUrlSchema = z
  .url()
  .regex(/^https?:\/{2}.+/)
  .max(2000)
  .openapi({
    title: 'Merchant-Order-Url',
    description:
      "The URL of the order stored in the merchant's order management system.\n\nThis URL will be included in the order confirmation email for payments made via Revolut Pay. If specified, this URL will override the default link to the merchant's **Business website** configured in the Revolut Business account.\n\n:::warning\nRestrictions:\n- Must be a valid URI as defined by [RFC 3986](https://datatracker.ietf.org/doc/html/rfc3986)\n- URI scheme is required and must be either `http` or `https`\n- URI host is required and cannot be `localhost` or an IP address\n- Max length: `2000`\n- Reserved or invalid characters must be percent-encoded (for example, use `%20` instead of a space)\n:::",
  })
  .openapi('MerchantOrderUrl')

const MerchantOrderDataSchema = z
  .object({
    url: MerchantOrderUrlSchema.exactOptional(),
    reference: MerchantOrderExternalReferenceSchema.exactOptional(),
  })
  .openapi({
    title: 'Merchant-Order-Data',
    description:
      "Object for providing additional information stored in the merchant's order management system. ",
    required: [],
  })
  .openapi('MerchantOrderData')

const LocationIdSchema = z
  .uuid()
  .openapi({
    title: 'Location-Id',
    description:
      'Unique ID representing the location where merchants sells products.\n\n:::info\nFor more information, see: [Locations](https://developer.revolut.com/docs/api/merchant#tag-locations).\n:::        ',
  })
  .openapi('LocationId')

const RedirectUrlSchema = z
  .url()
  .regex(/^https?:\/{2}.+/)
  .max(2000)
  .openapi({
    title: 'Redirect-Url',
    description:
      'The URL your customer will be redirected to after completing a payment flow.\n\n- **Hosted Checkout Page** (`checkout_url`): This is the post-success URL - the customer is redirected only after a successful payment.\n- **Embedded Revolut Pay** (Revolut Checkout widget): This URL is used for all redirect outcomes - success, failure, and cancellation.\n\n:::warning [Restrictions]\n- Must be a valid URI as defined by [RFC 3986](https://datatracker.ietf.org/doc/html/rfc3986)\n- URI scheme is required and must be either `http` or `https`\n- URI host is required and cannot be `localhost` or an IP address\n- Max length: `2000`\n- Reserved or invalid characters must be percent-encoded (for example, use `%20` instead of a space)\n:::\n\n:::note [Revolut Checkout]\n- Revolut Pay will not appear in the widget on mobile devices unless redirect targets are configured - either via this `redirect_url` parameter or the SDK-level `revolutPayOptions.mobileRedirectUrls` option.\n- If `redirect_url` is set on the order, it takes precedence over `revolutPayOptions.mobileRedirectUrls` and is used for all redirect outcomes (success, failure, cancel).\n:::\n\n:::info\nFor more information, see:\n- [Hosted Checkout Page: Custom redirection](https://developer.revolut.com/docs/guides/merchant/accept-payments/online-payments/hosted-checkout-page/api#custom-post-payment-redirection-optional)\n- [Revolut Checkout: Configure mobile redirects](https://developer.revolut.com/docs/guides/merchant/accept-payments/online-payments/revolut-checkout/web#35-configure-revolut-pay-mobile-redirects)\n:::',
  })
  .openapi('RedirectUrl')

const CancelAuthorisedAfterSchema = z.iso
  .duration()
  .openapi({
    title: 'Cancel-Authorised-After',
    description:
      'Automatic cancellation period for uncaptured orders, specified in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format. \n\nAfter this period, the authorised payment is automatically cancelled and the order is cancelled. Maximum: 7 days = `P7D`.\n\n:::note\nThe following limitations apply:\n  - Cannot be a negative value.\n  - Cannot be updated if the new value is less than or equal to the elapsed time since authorisation. \n\n    **Failing scenario:**\n      - Original value: 7 days\n      - Time since authorisation: 3 days\n      - Update value: 2 days\n      \n    In this scenario, an error is returned.\n    \n    **Successful scenario:**\n      - Original value: 7 days\n      - Time since authorisation: 3 days\n      - Update value: 4 days\n\n    In this scenario, the parameter can be updated.\n\n  - Cannot be updated if cancellation is ≤ 30 minutes away.\n\n    **Failing scenario:**\n      - Original value: 12 hours\n      - Time since authorisation: 11 hours 40 minutes\n                        \n    In this scenario, an error is returned.\n    \n    **Successful scenario:** \n      - Original value: 12 hours\n      - Time since authorisation: 11 hours 20 minutes\n\n    In this scenario, the parameter can be updated.\n:::',
  })
  .openapi('CancelAuthorisedAfter')

const StatementDescriptorSuffixSchema = z
  .string()
  .regex(/^[^*\n\r\\]+$/)
  .min(1)
  .max(19)
  .openapi({
    title: 'Statement-Descriptor-Suffix',
    description:
      'You can set a dynamic statement descriptor for your orders by providing a custom suffix. \n\nA statement descriptor is the text shown on cardholders\' bank or card statements, helping them recognise a transaction or merchant. This field can be used to send extra information with the statement descriptor for card transactions.\n\nThe complete descriptor is built using the following format: `{base}*{suffix}`, where:\n  \n  - **`{base}`** is the existing descriptor configured in the Revolut Business dashboard (**Settings > Business account > Merchant profile > Statement descriptor**).  \n  - **`{suffix}`** is defined by the `statement_descriptor_suffix` field.\n\n:::note\n- If the combined descriptor\'s length (base + suffix) exceeds the character limits of card scheme providers, the final value will be truncated. For example if the limit is 22 characters, the base descriptor is `"base"` and the suffix is `"testdescriptorsuffix"`, the final descriptor becomes `"base*testdescriptorsuf"`.\n- The final statement descriptor shown on a cardholder\'s statement may vary by issuing bank, as some banks apply their own custom formatting or truncation rules.\n:::',
  })
  .openapi('StatementDescriptorSuffix')

const OrderSimplifiedV2Schema = z
  .object({
    id: OrderIdSchema,
    token: OrderTokenSchema.exactOptional(),
    type: OrderTypeV2Schema,
    state: OrderStateSchema,
    created_at: z.iso
      .datetime({ offset: true })
      .openapi({ description: 'The date and time the order was created.' }),
    updated_at: z.iso
      .datetime({ offset: true })
      .openapi({ description: 'The date and time the order was last updated.' }),
    amount: OrderAmountV2Schema,
    currency: CurrencySchema,
    outstanding_amount: OutstandingAmountSchema,
    capture_mode: CaptureModeV2Schema,
    enforce_challenge: EnforceChallengeV2Schema,
    authorisation_type: AuthorisationTypeSchema.exactOptional(),
    description: OrderDescriptionSchema.exactOptional(),
    metadata: MetadataSchema.exactOptional(),
    related_order_id: RelatedOrderIdSchema.exactOptional(),
    subscription_data: SubscriptionDataSchema.exactOptional(),
    customer: OrderCustomerV2Schema.exactOptional(),
    line_items: LineItemsSchema.exactOptional(),
    merchant_order_data: MerchantOrderDataSchema.exactOptional(),
    location_id: LocationIdSchema.exactOptional(),
    redirect_url: RedirectUrlSchema.exactOptional(),
    cancel_authorised_after: CancelAuthorisedAfterSchema.exactOptional(),
    statement_descriptor_suffix: StatementDescriptorSuffixSchema.exactOptional(),
  })
  .openapi({
    title: 'Order-Simplified-v2',
    description:
      'A simplified order object returned in list responses.\n\nTo get the full details of an order, use the [Retrieve an order](https://developer.revolut.com/docs/api/merchant#retrieve-order) endpoint.',
    required: [
      'id',
      'type',
      'state',
      'created_at',
      'updated_at',
      'amount',
      'currency',
      'outstanding_amount',
      'capture_mode',
      'enforce_challenge',
    ],
  })
  .openapi('OrderSimplifiedV2')

const OrdersV2Schema = z
  .object({ orders: z.array(OrderSimplifiedV2Schema).openapi({ description: 'List of orders.' }) })
  .openapi({ title: 'Orders-v2', description: 'A paginated list of orders.', required: ['orders'] })
  .openapi('OrdersV2')

const ErrorV2Schema = z
  .object({
    code: z
      .xor([z.string(), z.int()])
      .openapi({
        description:
          'An identifier for the error. This can be either a string (e.g., `"validation"`, `"bad_state"`) or an integer (e.g., `1005`, `2054`). Share this code with Revolut support for troubleshooting.',
      }),
    message: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Human-readable text describing what went wrong. Not always present.',
      }),
    timestamp: z
      .int()
      .openapi({
        description:
          'The [UNIX timestamp](https://www.unixtimestamp.com/) (in milliseconds) of when the error occurred.',
      }),
  })
  .openapi({
    title: 'Error-v2',
    description: 'An error response returned by the API.',
    required: ['code', 'timestamp'],
  })
  .openapi('ErrorV2')

const SettlementCurrencySchema = z
  .string()
  .openapi({
    title: 'Settlement-Currency',
    description:
      "[ISO 4217](https://en.wikipedia.org/wiki/ISO_4217) currency code in upper case. \n\nIf `settlement_currency` is different from the value of `currency`, the money will be exchanged when the amount is settled to your merchant account. In case of a refund or chargeback, the money will be exchanged to the order's initial `currency`.\n\nIf `settlement_currency` is not specified, this value is taken from `currency`.\n\n:::info\nFor more information about the supported currencies, see: [Help Center](https://help.revolut.com/business/help/merchant-accounts/payments/in-which-currencies-can-i-accept-payments/).\n:::",
  })
  .openapi('SettlementCurrency')

const CustomerV2Schema = z
  .object({
    id: z
      .uuid()
      .exactOptional()
      .openapi({
        description:
          "Permanent ID of a customer used to retrieve, update, delete a customer. This ID can also be used to link customer to an order.\n\n:::note\nIf you provide the customer's ID during order creation, no other customer data is required, they will be parsed automatically from the referenced customer object.\n:::",
      }),
    full_name: FullNameSchema.exactOptional(),
    phone: PhoneSchema.exactOptional(),
    email: EmailSchema.exactOptional(),
    date_of_birth: DateOfBirthSchema.exactOptional(),
  })
  .openapi({
    title: 'Customer-v2',
    description:
      "Object containing information about a customer.\n\nIf you have it, we strongly advise providing at least either `id`, `phone`, or `email`.\n\nUsing the [Customers operations](https://developer.revolut.com/docs/api/merchant#tag-customers), you can manage customer instances.\n\nThe following behaviours apply to different use cases:\n\n  | Use case | API behavior |\n  | -------- | ------------ |\n  | Existing customer | If `id` was provided, we ignore other customer details and associate the customer with the order.<br/><br/>If either `email`, `phone`, or `full_name` was provided (without an existing customer's `id`), we always create a new customer, irrespective of another, existing customer object having the same details. |\n  | New customer | If either `email`, `phone`, or `full_name` was provided, we create a new customer, irrespective of another customer object having the same details. <br/><br/>If `id` of a non-existent customer was provided, we return a `404` error, irrespective of other details provided. |\n\n:::note\nTo avoid unintentional duplication of customer records, search for an existing customer by email or phone using the [List customers](https://developer.revolut.com/docs/api/merchant#retrieve-customer-list) endpoint first, then provide `customer.id` in the order.\n:::",
    required: [],
  })
  .openapi('CustomerV2')

const AddressV3Schema = z
  .object({
    street_line_1: z.string().max(100).openapi({ description: 'Primary address line.' }),
    street_line_2: z
      .string()
      .max(100)
      .exactOptional()
      .openapi({ description: 'Secondary address line, such as floor and apartment number.' }),
    region: z
      .string()
      .max(100)
      .exactOptional()
      .openapi({ description: 'State or province of the address.' }),
    city: z.string().max(100).openapi({ description: 'City of the address.' }),
    country_code: z
      .string()
      .regex(/^[A-Z]{2}$/)
      .length(2)
      .openapi({ description: 'ISO 2-letter country code.' }),
    postcode: z.string().max(100).openapi({ description: 'Postal code of the address.' }),
  })
  .openapi({
    title: 'Address-v3',
    description: 'Details of a physical address.',
    required: ['street_line_1', 'city', 'country_code', 'postcode'],
  })
  .openapi('AddressV3')

const ContactSchema = z
  .object({
    name: z
      .string()
      .max(250)
      .exactOptional()
      .openapi({ description: 'Full name of the contact person.' }),
    email: z
      .email()
      .exactOptional()
      .openapi({ description: 'Email address of the contact person.' }),
    phone: z
      .string()
      .exactOptional()
      .openapi({ description: 'Phone number of the contact person.' }),
  })
  .openapi({
    title: 'Contact',
    description:
      'Contact details for someone responsible for the shipment.\n\n:::warning\nAt least `email` or `phone` is required.\n:::',
    required: [],
  })
  .openapi('Contact')

const ShipmentSchema = z
  .object({
    shipping_company_name: z
      .string()
      .max(250)
      .openapi({ description: 'Name of the company handling the shipment.' }),
    tracking_number: z
      .string()
      .max(500)
      .openapi({ description: 'Unique tracking number for the shipment.' }),
    estimated_delivery_date: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({
        description:
          "Estimated delivery date and time for the shipment. \nThe time should also include the customer's timezone.",
      }),
    tracking_url: z
      .url()
      .regex(/^https?:\/{2}.+/)
      .max(2000)
      .exactOptional()
      .openapi({
        description:
          'An HTTP/HTTPS URL where the shipment can be tracked.\n\n:::warning\nRestrictions:\n- Must be a valid URI as defined by [RFC 3986](https://datatracker.ietf.org/doc/html/rfc3986)\n- URI scheme is required and must be either `http` or `https`\n- URI host is required and cannot be `localhost` or an IP address\n- Max length: `2000`\n- Reserved or invalid characters must be percent-encoded (for example, use `%20` instead of a space)\n:::',
      }),
  })
  .openapi({
    title: 'Shipment',
    description: 'Details of an individual shipment.',
    required: ['shipping_company_name', 'tracking_number'],
  })
  .openapi('Shipment')

const ShipmentsSchema = z
  .array(ShipmentSchema)
  .max(50)
  .openapi({ title: 'Shipments', description: 'List of individual shipment details.' })
  .openapi('Shipments')

const ShippingSchema = z
  .object({
    address: AddressV3Schema.exactOptional(),
    contact: ContactSchema.exactOptional(),
    shipments: ShipmentsSchema.exactOptional(),
  })
  .openapi({
    title: 'Shipping',
    description:
      'Details about the shipping related to the order, including address, contact information, and individual shipments.\n\n:::info\nRequired for merchants shipping physical goods. Omitting this information may trigger additional scrutiny and risk mitigation actions by Revolut.\n:::',
    required: [],
  })
  .openapi('Shipping')

const ExpirePendingAfterSchema = z.iso
  .duration()
  .openapi({
    title: 'Expire-Pending-After',
    example: 'PT15M',
    description:
      'Automatic expiration period for pending orders, specified in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format.\n\nOrders in `pending` state will be automatically failed if they stay unpaid for longer than the period specified.\n\nWhen the order expires, it transitions to the `failed` state and an `ORDER_FAILED` webhook event is triggered.\n\n:::note\n- This field can only be set during order creation and cannot be updated afterward.\n- Must be between `PT1M` (1 minute) and `PT720H` (30 days).\n- Cannot be a negative value.\n:::',
  })
  .openapi('ExpirePendingAfter')

const IndustryDataTypeSchema = z
  .enum(['airline', 'car_rental', 'crypto', 'event', 'lodging', 'marketplace'])
  .openapi({
    title: 'Industry-Data-Type',
    description:
      "Type of the industry-specific data object, determining what additional data is expected.\n\nAvailable types:\n\n  | Object type   | Description |\n  | ------------- | ----------- |\n  | `airline`     | Object containing information about a specific airline ticket purchase. |\n  | `car_rental`  | Object containing information about a car rental booking associated with the order. |\n  | `crypto`      | Object containing information about crypto transactions associated with the order. |\n  | `marketplace` | This object is required by Mastercard and Visa for merchants operating as marketplaces under the **Merchant Category Code (MCC):** `5262`. The marketplace object ensures compliance with the card schemes' regulations by providing detailed information about the subseller involved in the transaction. |\n  | `event` | Object containing information about event ticket bookings associated with the order. |\n  | `lodging` | Object containing information about lodging bookings associated with the order. |",
  })
  .openapi('IndustryDataType')

const BookingIdSchema = z
  .string()
  .openapi({
    title: 'Booking-Id',
    description:
      "A unique identifier provided by the merchant associated with the order. \n\nThis `booking_id` is used to reference and correlate booking information with the Merchant API and the merchant's internal system.",
  })
  .openapi('BookingId')

const RefundabilitySchema = z
  .enum(['refundable', 'non_refundable', 'partially_refundable'])
  .openapi({
    title: 'Refundability',
    description:
      'Parameter indicating whether the booking is refundable, partially refundable, or not refundable.',
  })
  .openapi('Refundability')

const PassengerSchema = z
  .object({
    first_name: z.string().openapi({ description: "Passenger's first name." }),
    last_name: z.string().openapi({ description: "Passenger's last name." }),
  })
  .openapi({
    title: 'Passenger',
    description: "A passenger's first and last name, used in travel-related order data.",
    required: ['first_name', 'last_name'],
  })
  .openapi('Passenger')

const PassengersSchema = z
  .array(PassengerSchema)
  .openapi({
    title: 'Passengers',
    description: 'Array containing information of passengers associated with the booking.',
  })
  .openapi('Passengers')

const JourneyLegSchema = z
  .object({
    sequence: z
      .int()
      .openapi({
        description:
          'Sequence of the journey legs. Increment by 1 for each flight included in the ticket.\n\nFor example: For a `FRA > LHR > DUB > LHR > FRA` journey the sequence will be assigned as:\n  - `FRA > LHR`: 1\n  - `LHR > DUB`: 2\n  - `DUB > LHR`: 3\n  - `LHR > FRA`: 4',
      }),
    departure_airport_code: z
      .string()
      .openapi({
        description:
          'The [IATA](https://www.iata.org/en/services/codes) 3-letter airport code for the departure airport.',
      }),
    arrival_airport_code: z
      .string()
      .openapi({
        description:
          'The [IATA](https://www.iata.org/en/services/codes) 3-letter airport code for the arrival airport.',
      }),
    flight_number: z
      .string()
      .exactOptional()
      .openapi({ description: 'The flight identifier, without airline code.' }),
    fare_base_code: z
      .string()
      .exactOptional()
      .openapi({ description: 'The fare base code for the given journey leg.' }),
    travel_date: z.iso
      .datetime({ offset: true })
      .openapi({
        description: 'The UTC date and time of the flight departure for the given journey leg.',
      }),
    airline_name: z
      .string()
      .openapi({ description: 'The name of the airline associated with the journey leg.' }),
    airline_code: z
      .string()
      .openapi({
        description:
          'The IATA 2-letter accounting code identifying the airline associated with the journey leg.',
      }),
    pnr: z
      .string()
      .regex(/^[a-zA-Z0-9]*$/)
      .max(20)
      .exactOptional()
      .openapi({
        description:
          'The Passenger Name Record (PNR) for the journey leg issued by the airline. \n\nPNR is a unique identifier for the booking, acting as a digital certificate allowing passengers to retrieve or manage their booking details.\n\n:::warning\nThis is a required field for OTAs.\n:::',
      }),
  })
  .openapi({
    title: 'Journey-Leg',
    description:
      'A single leg of a journey, including departure and arrival airports, flight details, and airline information.',
    required: [
      'sequence',
      'departure_airport_code',
      'arrival_airport_code',
      'travel_date',
      'airline_name',
      'airline_code',
    ],
  })
  .openapi('JourneyLeg')

const JourneyLegsSchema = z
  .array(JourneyLegSchema)
  .openapi({
    title: 'Journey-Legs',
    description:
      'Array containing information of journey legs associated with the booking.\n\n:::info\nThis field is required for activating **Revolut Flight Alerts** functionalities within the Revolut app. \n\nThis information is used to compile a tracking widget that provides real-time updates on flight status and sends notifications, such as a check-in reminders, boarding alerts, and notifications for cancellations or delays. \n\nTo enable the widget the following fields are required on order creation or update, before capturing the order:\n\n  ```\n  sequence,\n  departure_airport_code,\n  arrival_airport_code,\n  flight_number,\n  travel_date,\n  airline_name,\n  airline_code,\n  ```\n:::',
  })
  .openapi('JourneyLegs')

const AirlineDataSchema = z
  .object({
    type: IndustryDataTypeSchema,
    booking_id: BookingIdSchema,
    fulfillment_date: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({
        description:
          'The UTC date and time of the final journey leg.\n\n:::warning\nThe following limitations apply:\n  - When creating or updating an order, `fulfillment_date` cannot be set to a date in the past.\n  - When updating an order, if the current `fulfillment_date` value is already in the past, it cannot be modified. The date must remain as is to maintain data integrity for completed transactions.\n:::',
      }),
    tickets_purchase: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Flag indicating whether the order includes actual ticket purchases. Set to `true` if the order contains ticket purchases, and `false` if it does not (e.g., it **only** contains seat reservations, or baggage upgrades). \n\n:::info\nThis field is required for activating **Revolut Flight Alerts** functionalities within the Revolut app.\n\nProvide the info on order creation or update, before capturing the order.\n:::',
      }),
    ticket_type: z
      .enum(['fixed', 'flexible'])
      .exactOptional()
      .openapi({
        description:
          'The type of the ticket.\n\n| Parameter value | Description |\n| --------------- | ----------- |\n| `fixed`         | Non-modifiable once confirmed. |\n| `flexible`      | Allows modifications or cancellations under specified conditions. |',
      }),
    crs_code: z
      .string()
      .max(4)
      .exactOptional()
      .openapi({
        description:
          'The code of the Computer Reservation System (CRS) used to make the booking and purchase the ticket.',
      }),
    ticket_change_indicator: z
      .enum(['new', 'modification'])
      .exactOptional()
      .openapi({
        description:
          'Parameter indicating whether this order is related to a new ticket reservation or a modification of an existing one.',
      }),
    refundability: RefundabilitySchema.exactOptional(),
    passengers: PassengersSchema.exactOptional(),
    journey_legs: JourneyLegsSchema.exactOptional(),
    booking_url: z
      .url()
      .regex(/^https?:\/{2}.+/)
      .max(2000)
      .exactOptional()
      .openapi({
        description:
          'URL to the online portal for managing the airline booking, which includes check-in functionality. This URL may be a personalised, pre-populated check-in link specific to the user or a generic link, and it is essential for enabling direct access to booking details within the Revolut app.\n\n:::info\nThis field is required for activating **Revolut Flight Alerts** functionalities within the Revolut app. \n\nProvide the info on order creation or update, before capturing the order.\n:::\n\n:::warning\nRestrictions:\n- Must be a valid URI as defined by [RFC 3986](https://datatracker.ietf.org/doc/html/rfc3986)\n- URI scheme is required and must be either `http` or `https`\n- URI host is required and cannot be `localhost` or an IP address\n- Max length: `2000`\n- Reserved or invalid characters must be percent-encoded (for example, use `%20` instead of a space)\n:::',
      }),
  })
  .openapi({
    title: 'Airline-Data',
    description:
      'Object containing additional information about an airline booking associated with the order. \n\nUse this object to provide required data to enable **Revolut Flight Alerts**. This feature allows users to receive real-time flight updates such as check-in reminders, boarding alerts, and notifications for cancellations or delays in the Revolut app.\n\nTo enable **Revolut Flight Alerts** functionalities in the Revolut app, the following fields are **required** on order creation or update, before capturing the order:\n  ```\n  tickets_purchase,\n  journey_legs,\n  booking_url\n  ```\n\n:::note\nThese are the specific data field requirements for merchants who must provide airline data. Note that these requirements can be extended on a case by case basis as decided by Revolut.\n\n| Required for airline/charter merchants | Required for OTA merchants |\n| -------------------------------------- | -------------------------- |\n| <ul><li>`booking_id`</li><li>`fulfillment_date`</li><li>`passengers[].first_name`</li><li>`passengers[].last_name`</li><li>`journey_legs[].pnr`</li><li>`journey_legs[].sequence`</li><li>`journey_legs[].flight_number`</li><li>`journey_legs[].travel_date`</li><li>`journey_legs[].airline_code`</li><li>`journey_legs[].departure_airport_code`</li><li>`journey_legs[].arrival_airport_code`</li></ul> | <ul><li>`booking_id`</li><li>`fulfillment_date`</li><li>`passengers[].first_name`</li><li>`passengers[].last_name`</li><li>`journey_legs[].pnr`</li><li>`journey_legs[].arrival_airport_code`</li></ul> |\n:::',
    required: ['type', 'booking_id'],
  })
  .openapi('AirlineData')

const CryptoTransactionSchema = z
  .object({
    id: z
      .string()
      .max(255)
      .openapi({ description: 'The public transaction hash of the crypto transaction.' }),
    status: z
      .enum(['pending', 'failed', 'cancelled', 'completed'])
      .openapi({ description: 'The status of the crypto transaction.' }),
    recipient_wallet_id: z
      .string()
      .max(255)
      .exactOptional()
      .openapi({
        description:
          'The wallet ID of the recipient.\n\n:::note\nAt least one of the parameters: `recipient_user_id` or `recipient_wallet_id` is required.\n::: ',
      }),
    recipient_user_id: z
      .string()
      .max(255)
      .exactOptional()
      .openapi({
        description:
          'The user ID of the recipient.\n\n:::note\nAt least one of the parameters: `recipient_user_id` or `recipient_wallet_id` is required.\n:::              ',
      }),
  })
  .openapi({
    title: 'Crypto-Transaction',
    description:
      'Details of a crypto transaction, including the transaction hash, status, and recipient information.',
    required: ['id', 'status', 'recipient'],
  })
  .openapi('CryptoTransaction')

const CryptoTransactionsSchema = z
  .object({
    type: IndustryDataTypeSchema,
    transactions: z
      .array(CryptoTransactionSchema)
      .min(1)
      .openapi({ description: 'Array of crypto transaction data associated with the order.' }),
    subseller_mcc: z
      .string()
      .regex(/^\d{4}$/)
      .length(4)
      .exactOptional()
      .openapi({
        description:
          "A string representing the four-digit [Merchant Category Code (MCC)](https://en.wikipedia.org/wiki/Merchant_category_code) of the subseller. \n\nThis code should be provided when a customer completes a payment on a subseller's website rather than directly on the merchant's website, providing insight into the type of business conducted by the subseller.",
      }),
    subseller_url: z
      .url()
      .regex(/^https?:\/{2}.+/)
      .max(2000)
      .exactOptional()
      .openapi({
        description:
          "The URL of the subseller's website.\n\nThis parameter should be provided when a customer completes a payment on a subseller's website rather than directly on the merchant's website, providing additional insight into the type of business conducted by the subseller.\n\n:::warning\nRestrictions: \n- Must be a valid URI as defined by [RFC 3986](https://datatracker.ietf.org/doc/html/rfc3986)\n- URI scheme is required and must be either `http` or `https`\n- URI host is required and cannot be `localhost` or an IP address\n- Max length: `2000`\n- Reserved or invalid characters must be percent-encoded (for example, use `%20` instead of a space)\n:::",
      }),
  })
  .openapi({
    title: 'Crypto-Transactions',
    description:
      'Object containing information about crypto transactions associated with the order.\n\n:::info\nThese are the specific data field requirements for merchants offering crypto services. Note that these requirements can be extended on a case by case basis as decided by Revolut.\n\n```\ntransactions[].id\ntransactions[].status\ntransactions[].recipient_wallet_id\nsubseller_mcc\nsubseller_url\ncustomer.full_name\ncustomer.date_of_birth\n```\n:::',
    required: ['type', 'transactions'],
  })
  .openapi('CryptoTransactions')

const AddressV4Schema = z
  .object({
    street_line_1: z.string().max(100).openapi({ description: 'Primary address line.' }),
    street_line_2: z
      .string()
      .max(100)
      .exactOptional()
      .openapi({ description: 'Secondary address line, such as floor and apartment number.' }),
    region: z
      .string()
      .max(100)
      .exactOptional()
      .openapi({ description: 'State or province of the address.' }),
    city: z.string().max(100).openapi({ description: 'City of the address.' }),
    country_code: z
      .string()
      .regex(/^[A-Z]{2}$/)
      .length(2)
      .openapi({ description: 'ISO 2-letter country code.' }),
    country_subdivision_code: z
      .string()
      .regex(/^[A-Z]{2}-[A-Z0-9]{1,3}$/)
      .min(5)
      .max(6)
      .exactOptional()
      .openapi({
        description:
          'The subdivision code represents the state, province, or region within the country, following the [ISO 3166-2](https://en.wikipedia.org/wiki/ISO_3166-2) standard. This code uniquely identifies subdivisions within a country. \n\nFor example, for London in the United Kingdom, use `GB-LND`.\n\n:::warning\nThe parameter is required for countries listed on the [ISO 3166-2](https://en.wikipedia.org/wiki/ISO_3166-2) page.\n:::',
      }),
    postcode: z.string().max(100).openapi({ description: 'Postal code of the address.' }),
  })
  .openapi({
    title: 'Address-v4',
    description: 'Details of a physical address.',
    required: ['street_line_1', 'city', 'country_code', 'postcode'],
  })
  .openapi('AddressV4')

const SubsellerSchema = z
  .object({
    id: z
      .string()
      .min(1)
      .max(15)
      .openapi({ description: "The ID of the subseller in the marketplace's internal system." }),
    name: z
      .string()
      .min(1)
      .max(50)
      .openapi({ description: 'The business or legal name of the subseller.' }),
    website: z
      .url()
      .regex(/^https?:\/{2}.+/)
      .max(255)
      .openapi({
        description:
          'The URL of the website of the subseller.\n\n:::warning\nRestrictions:\n- Must be a valid URI as defined by [RFC 3986](https://datatracker.ietf.org/doc/html/rfc3986)\n- URI scheme is required and must be either `http` or `https`\n- URI host is required and cannot be `localhost` or an IP address\n- Max length: `255`\n- Reserved or invalid characters must be percent-encoded (for example, use `%20` instead of a space)\n:::',
      }),
    phone: z.string().openapi({ description: 'The phone number of the subseller.' }),
    address: AddressV4Schema,
  })
  .openapi({
    title: 'Subseller',
    description: 'Information about the subseller related to this order.',
    required: ['id', 'name', 'website', 'phone', 'address'],
  })
  .openapi('Subseller')

const MarketplaceSchema = z
  .object({ type: IndustryDataTypeSchema, subseller: SubsellerSchema })
  .openapi({
    title: 'Marketplace',
    description:
      "This object is required by Mastercard and Visa for merchants operating as marketplaces under the Merchant Category Code (MCC) `5262`. The marketplace object ensures compliance with the card schemes' regulations by providing detailed information about the subseller involved in the transaction.\n\n:::info\nThese are the specific data field requirements for merchants who must provide marketplace data.\n\n```\nsubseller.id\nsubseller.name\nsubseller.phone\n```\n:::",
    required: ['type', 'subseller'],
  })
  .openapi('Marketplace')

const SupplierPaymentDateSchema = z.iso
  .datetime({ offset: true })
  .openapi({
    title: 'Supplier-Payment-Date',
    description:
      '[ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) date and time when the funds are released to merchants.',
  })
  .openapi('SupplierPaymentDate')

const TicketSchema = z
  .object({
    id: z
      .string()
      .openapi({
        description: 'A unique identifier provided by the merchant associated with the ticket.',
      }),
    transferable: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Indicates whether the ticket is transferable to another buyer.' }),
    refundability: RefundabilitySchema.exactOptional(),
  })
  .openapi({
    title: 'Ticket',
    description: 'Object containing information about a ticket associated with the booking.',
    required: ['id'],
  })
  .openapi('Ticket')

const EventSchema = z
  .object({
    start_date: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({
        description:
          '[ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) date and time when the event starts.',
      }),
    end_date: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({
        description:
          '[ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) date and time when the event ends.',
      }),
    supplier: z
      .string()
      .exactOptional()
      .openapi({ description: 'Legal name of the ticket vendor/event organiser.' }),
    supplier_payment_date: SupplierPaymentDateSchema.exactOptional(),
    name: z.string().exactOptional().openapi({ description: 'The name of the event.' }),
    location: AddressV3Schema.exactOptional().openapi({
      description: 'The address of the event location.',
    }),
    category: z
      .enum([
        'concert',
        'conference',
        'convention',
        'exhibition',
        'festival',
        'party',
        'performance',
        'other',
      ])
      .exactOptional()
      .openapi({ description: 'The type of the event.' }),
    market: z
      .enum(['primary', 'secondary'])
      .exactOptional()
      .openapi({
        description:
          'Indicates the relationship between the ticket vendor and the event organiser. \n\n| Parameter value | Description |\n| --------------- | ----------- |\n| `primary`       | The merchant is the organiser and primary distributor of the tickets. |\n| `secondary`     | The merchant is a reseller, only distributing the tickets. |',
      }),
    tickets: z
      .array(TicketSchema)
      .exactOptional()
      .openapi({ description: 'A list of tickets associated with the booking.' }),
  })
  .openapi({
    title: 'Event',
    description: 'Object containing booking information about a specific event. ',
    required: [],
  })
  .openapi('Event')

const EventsSchema = z
  .object({
    type: IndustryDataTypeSchema,
    booking_id: BookingIdSchema,
    events: z
      .array(EventSchema)
      .exactOptional()
      .openapi({ description: 'A list of events associated with the booking.' }),
  })
  .openapi({
    title: 'Events',
    description:
      'Object containing booking information for a list of event tickets associated with the order.\n\n:::info\nThese are the specific data field requirements for merchants who must provide event data. Note that these requirements can be extended on a case by case basis as decided by Revolut.\n\n```\nbooking_id\nevents[].start_date\nevents[].end_date\nevents[].supplier\nevents[].tickets[].id\n```\n:::',
    required: ['type', 'booking_id'],
  })
  .openapi('Events')

const GuestSchema = z
  .object({
    first_name: z.string().openapi({ description: "Guest's first name." }),
    last_name: z.string().openapi({ description: "Guest's last name." }),
  })
  .openapi({
    title: 'Guest',
    description: "A guest's first and last name, used in travel-related order data.",
    required: ['first_name', 'last_name'],
  })
  .openapi('Guest')

const GuestsSchema = z
  .array(GuestSchema)
  .openapi({ title: 'Guests', description: 'List of guests associated with the booking.' })
  .openapi('Guests')

const LodgingSchema = z
  .object({
    type: IndustryDataTypeSchema,
    booking_id: BookingIdSchema,
    check_in_date: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({
        description:
          '[ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) date and time of the check-in.',
      }),
    check_out_date: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({
        description:
          '[ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) date and time of the check-out.',
      }),
    supplier_payment_date: SupplierPaymentDateSchema.exactOptional(),
    category: z
      .enum(['bed_and_breakfast', 'hostel', 'hotel', 'short_term_rental', 'other'])
      .exactOptional()
      .openapi({ description: 'The type of the accommodation associated with the booking.' }),
    booking_type: z
      .enum(['fixed', 'flexible'])
      .exactOptional()
      .openapi({
        description:
          'Indicates whether the booking terms are fixed or flexible.\n\n| Parameter value | Description |\n| --------------- | ----------- |\n| `fixed`         | Non-modifiable once confirmed. |\n| `flexible`      | Allows modifications or cancellations under specified conditions. |',
      }),
    refundability: RefundabilitySchema.exactOptional(),
    location: z
      .object({
        street_line_1: z.string().max(100).openapi({ description: 'Primary address line.' }),
        street_line_2: z
          .string()
          .max(100)
          .exactOptional()
          .openapi({ description: 'Secondary address line, such as floor and apartment number.' }),
        region: z
          .string()
          .max(100)
          .exactOptional()
          .openapi({ description: 'State or province of the address.' }),
        city: z.string().max(100).openapi({ description: 'City of the address.' }),
        country_code: z
          .string()
          .regex(/^[A-Z]{2}$/)
          .length(2)
          .openapi({ description: 'ISO 2-letter country code.' }),
        postcode: z.string().max(100).openapi({ description: 'Postal code of the address.' }),
      })
      .exactOptional()
      .openapi({
        description: 'Address of the accommodation.',
        required: ['street_line_1', 'city', 'country_code', 'postcode'],
      }),
    guests: GuestsSchema.exactOptional(),
  })
  .openapi({
    title: 'Lodging',
    description:
      'Object containing details of a lodging booking.\n\n:::info\nThese are the specific data field requirements for merchants who must provide lodging data. Note that these requirements can be extended on a case by case basis as decided by Revolut.\n\n```\nbooking_id\ncheck_in_date\ncheck_out_date\nsupplier_payment_date\n```\n:::',
    required: ['type', 'booking_id'],
  })
  .openapi('Lodging')

const IndustryDataSchema = z
  .xor([
    AirlineDataSchema,
    CryptoTransactionsSchema,
    MarketplaceSchema,
    EventsSchema,
    LodgingSchema,
  ])
  .openapi({
    title: 'Industry-Data',
    description:
      'Object containing industry-specific information associated with the order.\n\n:::info\nIn the following cases, industry-specific info is required. Omitting this information may trigger additional scrutiny and risk mitigation actions by the Revolut risk team.\n\n  | Transaction type | Required for | \n  | ---------------- | ----------- |\n  | `airline`        | Airlines and Online Travel Agencies (OTAs). |\n  | `crypto`         | Crypto merchants. |\n  | `marketplace`    | Marketplace merchants. |\n  | `event`          | Event ticket sellers. |\n  | `lodging`        | Lodging providers and OTAs. |\n:::',
    discriminator: {
      propertyName: 'type',
      mapping: {
        airline: '#/components/schemas/Airline-Data',
        crypto: '#/components/schemas/Crypto-Transactions',
        marketplace: '#/components/schemas/Marketplace',
        event: '#/components/schemas/Events',
        lodging: '#/components/schemas/Lodging',
      },
    },
  })
  .openapi('IndustryData')

const UpcomingPaymentSchema = z
  .object({
    date: z.iso
      .datetime({ offset: true })
      .openapi({
        description:
          'The date and time in [ISO 8601 format](https://en.wikipedia.org/wiki/ISO_8601) when the upcoming payment is scheduled to be executed.',
      }),
    payment_method_id: z
      .string()
      .openapi({
        description:
          "The unique ID of the customer's payment method used to complete the scheduled payment.\n\n:::info\nFor more information about operations related to customer's payment methods, see:\n  - [Retrieve payment method list of a customer](https://developer.revolut.com/docs/api/merchant#retrieve-payment-method-list)\n  - [Retrieve a customer's payment method](https://developer.revolut.com/docs/api/merchant#retrieve-payment-method)\n  - [Update a customer's payment method](https://developer.revolut.com/docs/api/merchant#update-payment-method)\n  - [Delete a customer's payment method](https://developer.revolut.com/docs/api/merchant#delete-payment-method)\n:::",
      }),
  })
  .openapi({
    title: 'Upcoming-Payment',
    description: 'Object containing information about upcoming payments associated with the order.',
    required: ['date', 'payment_method_id'],
  })
  .openapi('UpcomingPayment')

const OrderCreationV4Schema = z
  .object({
    amount: OrderAmountV2Schema,
    currency: CurrencySchema,
    settlement_currency: SettlementCurrencySchema.exactOptional(),
    description: OrderDescriptionSchema.exactOptional(),
    customer: CustomerV2Schema.exactOptional(),
    enforce_challenge: EnforceChallengeV2Schema.exactOptional(),
    line_items: LineItemsSchema.exactOptional(),
    shipping: ShippingSchema.exactOptional(),
    capture_mode: CaptureModeV2Schema.exactOptional(),
    authorisation_type: AuthorisationTypeSchema.exactOptional(),
    cancel_authorised_after: CancelAuthorisedAfterSchema.exactOptional(),
    expire_pending_after: ExpirePendingAfterSchema.exactOptional(),
    location_id: LocationIdSchema.exactOptional(),
    metadata: MetadataSchema.exactOptional(),
    industry_data: IndustryDataSchema.exactOptional(),
    merchant_order_data: MerchantOrderDataSchema.exactOptional(),
    upcoming_payment_data: UpcomingPaymentSchema.exactOptional(),
    redirect_url: RedirectUrlSchema.exactOptional(),
    statement_descriptor_suffix: StatementDescriptorSuffixSchema.exactOptional(),
  })
  .openapi({
    title: 'Order-Creation-v4',
    description:
      'Object schema containing information about order creation body request parameters.',
    required: ['amount', 'currency'],
  })
  .openapi('OrderCreationV4')

const RefundedAmountSchema = z
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
    title: 'Refunded-Amount',
    description:
      'The amount that was refunded from the order (in minor currency units). For example, `7034` represents €70.34. \n\nThis applies to orders that have been refunded (i.e., orders of type `payment` that have a related `refund` order).',
  })
  .openapi('RefundedAmount')

const PaymentIdSchema = z
  .uuid()
  .openapi({ title: 'Payment-Id', description: 'The ID of the payment.' })
  .openapi('PaymentId')

const PaymentStateV2Schema = z
  .enum([
    'pending',
    'authentication_challenge',
    'authentication_verified',
    'authorisation_started',
    'authorisation_passed',
    'authorised',
    'capture_started',
    'captured',
    'refund_validated',
    'refund_started',
    'cancellation_started',
    'declining',
    'completing',
    'cancelling',
    'failing',
    'completed',
    'declined',
    'soft_declined',
    'cancelled',
    'failed',
  ])
  .openapi({ title: 'Payment-State-v2', description: 'The status of the payment.' })
  .openapi('PaymentStateV2')

const DeclineReasonV2Schema = z
  .enum([
    '3ds_challenge_abandoned',
    '3ds_challenge_failed',
    '3ds_challenge_failed_manually',
    'authentication_required',
    'card_not_enrolled_to_three_ds',
    'cardholder_name_missing',
    'currency_not_supported',
    'customer_challenge_abandoned',
    'customer_challenge_failed',
    'customer_date_of_birth_mismatch',
    'customer_name_mismatch',
    'customer_verification_failed',
    'customer_wallet_limits_exceeded',
    'do_not_honour',
    'expired_card',
    'high_risk',
    'insufficient_funds',
    'insufficient_refundable_amount',
    'invalid_account',
    'invalid_address',
    'invalid_amount',
    'invalid_card',
    'invalid_country',
    'invalid_cvv',
    'invalid_email',
    'invalid_expiry',
    'invalid_merchant',
    'invalid_phone',
    'invalid_pin',
    'invalid_transaction',
    'issuer_decline',
    'issuer_not_available',
    'law_violation',
    'lost_card',
    'new_card_not_unblocked',
    'no_common_supported_three_ds_version',
    'no_such_issuer',
    'payment_attempt_blocked',
    'pick_up_card',
    'pin_required',
    'pin_try_exceeded',
    'rejected_by_customer',
    'restricted_card',
    'security_violation',
    'stolen_card',
    'suspected_fraud',
    'technical_error',
    'transaction_not_allowed',
    'transaction_not_allowed_for_cardholder',
    'unknown',
    'unknown_card',
    'withdrawal_frequency_exceeded',
    'withdrawal_limit_exceeded',
  ])
  .openapi({
    title: 'Decline-Reason-v2',
    description:
      'The reason for a `failed` or `declined` payment.\n\nA failed or declined payment can result from multiple reasons. To learn more, check our [failure reasons](https://developer.revolut.com/docs/guides/merchant/reference/error-codes/decline-reasons).',
  })
  .openapi('DeclineReasonV2')

const BankMessageSchema = z
  .string()
  .openapi({
    title: 'Bank-Message',
    description:
      'The reason for a `failed` or `declined` payment, sent by the financial institution processing the payment.',
  })
  .openapi('BankMessage')

const PaymentCreatedSchema = z.iso
  .datetime({ offset: true })
  .openapi({ title: 'Payment-Created', description: 'The date and time the payment was created.' })
  .openapi('PaymentCreated')

const PaymentUpdatedSchema = z.iso
  .datetime({ offset: true })
  .openapi({
    title: 'Payment-Updated',
    description: 'The date and time the payment was last updated.',
  })
  .openapi('PaymentUpdated')

const PaymentTokenSchema = z
  .uuid()
  .openapi({
    title: 'Payment-Token',
    description:
      'Temporary token of the payment used to fetch the reward offer during checkout and link user registrations to the given offers. \n\nThe token is only valid for a limited time.',
  })
  .openapi('PaymentToken')

const PaymentAmountSchema = z
  .preprocess(
    (val) =>
      typeof val === 'number' && Number.isSafeInteger(val)
        ? BigInt(val)
        : typeof val === 'string' && /^-?\d+$/.test(val)
          ? BigInt(val)
          : val,
    z.int64().min(0n),
  )
  .openapi({
    type: 'integer',
    format: 'int64',
    minimum: 0,
    title: 'Payment-Amount',
    description:
      'The payment amount in minor units (e.g., cents). The value of this field depends on the payment type and state.\n\n| Payment type | State | Amount value |\n|--------------|-------|--------------|\n| Standard payment | Any | Total payment amount |\n| Pre-authorised payment | `authorisation_started` | New amount being authorised (during increment processing) |\n| Pre-authorised payment | `authorised` | Currently authorised amount (equals `authorised_amount`) |\n\n:::info\nFor pre-authorised payments, see the `authorised_amount` field for tracking the currently authorised amount separately.\n:::',
    example: 600,
  })
  .openapi('PaymentAmount')

const PaymentAuthorisedAmountSchema = z
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
    title: 'Payment-Authorised-Amount',
    description:
      'The currently authorised amount for this payment (in minor units).\n\nFor pre-authorised payments with incremental authorization:\n- Initially equals the `amount` field\n- Remains unchanged during increment processing\n- Updates to new amount upon successful increment\n- Remains at original amount if increment is declined\n\nFor standard payments, this field may not be present or will equal the `amount` field.',
    example: 600,
  })
  .openapi('PaymentAuthorisedAmount')

const PaymentSettledAmountSchema = z
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
    title: 'Payment-Settled-Amount',
    description:
      'The amount of the settled payment (minor currency unit). For example, `7034` stands for €70.34.',
  })
  .openapi('PaymentSettledAmount')

const PaymentSettledCurrencySchema = z
  .string()
  .openapi({
    title: 'Payment-Settled-Currency',
    description:
      'The currency of the settled payment. [ISO 4217](https://en.wikipedia.org/wiki/ISO_4217) currency code in upper case.\n\n:::info\nFor more information about the supported currencies, see: [Help Center](https://help.revolut.com/business/help/merchant-accounts/payments/in-which-currencies-can-i-accept-payments/).\n:::',
  })
  .openapi('PaymentSettledCurrency')

const PaymentMethodTypeSchema = z
  .enum([
    'apple_pay',
    'card',
    'google_pay',
    'revolut_pay_card',
    'revolut_pay_account',
    'sepa_direct_debit',
  ])
  .openapi({
    title: 'Payment-Method-Type',
    description:
      'The type of payment method used to pay for the order.\n\nAvailable values:\n\n| Payment method `type` | Description |\n| --------------------- | ----------- |\n| `apple_pay` | The customer paid the order using Apple Pay. |\n| `card` | The customer paid the order using their credit or debit card. |\n| `google_pay` | The customer paid the order using Google Pay. |\n| `revolut_pay_card` | The customer paid the order via Revolut Pay using their credit or debit card. |\n| `revolut_pay_account` | The customer paid the order via Revolut Pay using their Revolut account. |\n| `sepa_direct_debit` | The customer paid the order using SEPA Direct Debit. |',
  })
  .openapi('PaymentMethodType')

const CardChecksV2Schema = z
  .object({
    three_ds: z
      .object({
        eci: z
          .string()
          .exactOptional()
          .openapi({
            description:
              'The Electronic Commerce Indicator (ECI) value corresponds to the authentication result and indicates the level of security used when the payment information was provided.',
          }),
        state: z
          .enum(['verified', 'failed', 'challenge', 'declined'])
          .exactOptional()
          .openapi({
            description:
              'The result of 3D Secure check.\n\n| Parameter value | Description |\n| ----- | ----------- |\n| `verified` | 3D Secure authentication completed successfully |\n| `failed` | 3D Secure authentication failed |\n| `challenge` | A 3D Secure challenge is required to complete the authentication |\n| `declined` | 3D Secure authentication was declined by the issuer |',
          }),
        version: z.int().exactOptional().openapi({ description: 'The 3D Secure version.' }),
      })
      .exactOptional()
      .openapi({
        description:
          'The details of the 3D Secure check. Only for orders with successful payments.\n\n:::note\nNot returned for Apple Pay and Google Pay payments.\n:::',
        required: [],
      }),
    cvv_verification: z
      .enum(['match', 'not_match', 'incorrect', 'not_processed'])
      .exactOptional()
      .openapi({
        description:
          "The result of CVV verification.\n\n| Parameter value | Description |\n| ----- | ----------- |\n| `match` | CVV matches the card's CVV |\n| `not_match` | CVV does not match the card's CVV |\n| `incorrect` | CVV format is incorrect for this type of card |\n| `not_processed` | CVV verification was not performed |",
      }),
    address: z
      .enum(['match', 'not_match', 'n_a', 'invalid'])
      .exactOptional()
      .openapi({ description: 'The result of address verification.' }),
    postcode: z
      .enum(['match', 'not_match', 'n_a', 'invalid'])
      .exactOptional()
      .openapi({ description: 'The result of postcode verification.' }),
    cardholder: z
      .enum(['match', 'not_match', 'n_a', 'invalid'])
      .exactOptional()
      .openapi({ description: 'The result of cardholder verification.' }),
  })
  .openapi({
    title: 'Card-Checks-v2',
    description:
      'The details of the check for card payment. Only for orders with successful payments.',
    required: [],
  })
  .openapi('CardChecksV2')

const AuthorisationCodeSchema = z
  .string()
  .regex(/^[a-zA-Z0-9]{2,6}$/)
  .min(2)
  .max(6)
  .openapi({
    title: 'Authorisation-Code',
    description:
      "The authorisation code (or auth code) is a short, alphanumeric code returned by the cardholder's issuing bank to the merchant's terminal or payment gateway.\n\nIt serves as confirmation that the transaction has been approved and funds are available.",
    example: 'T483XF',
  })
  .openapi('AuthorisationCode')

const ArnSchema = z
  .string()
  .length(23)
  .openapi({
    title: 'Arn',
    description:
      'Acquirer Reference Number (ARN) of the payment.\n\n:::note\nOnly returned for refund payments made by a card.\n:::',
    example: '74839572049583726403928',
  })
  .openapi('Arn')

const CaptureDeadlineSchema = z.iso
  .datetime({ offset: true })
  .openapi({
    title: 'Capture-Deadline',
    description:
      'The date and time by which the payment must be captured.\n\nAfter this deadline, the authorised funds may be automatically released by the card issuer.',
  })
  .openapi('CaptureDeadline')

const TerminalHardwareIdSchema = z
  .string()
  .openapi({
    title: 'Terminal-Hardware-Id',
    description:
      'The hardware identifier of the Revolut Terminal device used to process the payment.\n\n:::note\nOnly present for card-present transactions processed via Revolut Terminal.\n:::',
  })
  .openapi('TerminalHardwareId')

const FingerprintSchema = z
  .string()
  .length(44)
  .openapi({
    title: 'Fingerprint',
    description:
      "A unique identifier for a payment method, always 44 characters long. This fingerprint can be used to uniquely identify various payment methods.\n\n#### Fingerprint generation\n\n| Payment method | Description |\n| -------- | ----------- |\n| **All payment methods** | A fingerprint is generated for all payment methods, including cards, Revolut Pay (card, account-to-account payments), Apple Pay, and Google Pay. |\n| **Cards (Revolut Pay & Card Gateway)** | For cards, the fingerprint is based on the PAN. Cards processed via Revolut Pay and our card gateway will share the same fingerprint. Renewed cards (new expiry/CVV) retain the same fingerprint for efficient blocking. |\n| **Apple Pay & Google Pay** | Since Apple Pay and Google Pay provide us Device PANs (DPAN), the fingerprint is based on the DPAN provided by Apple/Google, not the connected card's PAN. This means that a new DPAN (and fingerprint) is generated for cards in case they are re-added to the customer's digital wallet, or added to different devices. |\n\n#### Detecting duplicate payment methods\n\nFingerprints are a valuable tool for detecting duplicate payment methods by identifying if a payment method has been seen before. This capability, in turn, helps in preventing various types of misuse (e.g., exploitation of free trials, or association with known problematic accounts, which can be a form of fraud). To effectively use fingerprints for this purpose, you will need to create and maintain your own lists (e.g., blocklists of known problematic fingerprints, allowlists for trusted customers, or tracking frequently used fingerprints). \n\nThe ideal way to utilise fingerprints is by combining them with a manual capture process. While automatic capture with subsequent refunds for problematic payments is possible, manual capture based on fingerprint validation is recommended.\n\nDuring your manual capture workflow, after a payment was authorised:\n  \n  - Check the fingerprint status by comparing it against your maintained lists and internal business rules.\n  - If you decide to proceed with the payment (e.g., the fingerprint is not on a blocklist, or matches a trusted customer's previous payment method): [Capture the order](https://developer.revolut.com/docs/api/merchant#capture-order).\n  - If you decide not to proceed with the payment (e.g., the fingerprint matches a known fraudulent fingerprint, or exhibits suspicious patterns): [Cancel the order](https://developer.revolut.com/docs/api/merchant#cancel-order).",
    example: '1JAllfQY4POhBV8DaddAQ4LC5RbMP8LMLvUdJW4s5JY=',
  })
  .openapi('Fingerprint')

const NetworkTransactionIdSchema = z
  .string()
  .openapi({
    title: 'Network-Transaction-Id',
    description:
      'The Network Transaction ID (NTI) is a unique identifier assigned by the card scheme (e.g., Visa or Mastercard) to a card transaction.\n\nIt can be used to trace the transaction across the payment network, link recurring or instalment payments to the original authorisation, and support dispute resolution.',
  })
  .openapi('NetworkTransactionId')

const ApplePaySchema = z
  .object({
    id: z
      .uuid()
      .exactOptional()
      .openapi({
        description:
          'ID of the saved payment method.\n\n:::note\nThe `id` parameter is only returned when the payment method is saved.\n:::',
      }),
    type: PaymentMethodTypeSchema,
    card_brand: z
      .enum(['visa', 'mastercard', 'american_express'])
      .exactOptional()
      .openapi({ description: 'The type of the card.' }),
    funding: z
      .enum(['credit', 'debit', 'prepaid'])
      .exactOptional()
      .openapi({ description: 'The type of card funding.' }),
    commercial: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Indicates whether the card is a commercial card.\nThe field is omitted when the classification is unavailable.',
      }),
    card_country_code: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The 2-letter country code of the country where the card was issued.',
      }),
    card_bin: z.string().length(6).exactOptional().openapi({ description: 'The BIN of the card.' }),
    card_last_four: z
      .string()
      .length(4)
      .exactOptional()
      .openapi({ description: 'The last four digits of the card number.' }),
    card_expiry: z
      .string()
      .exactOptional()
      .openapi({ description: 'The expiry date of the card in the format of MM/YY.' }),
    cardholder_name: z
      .string()
      .exactOptional()
      .openapi({ description: 'The name of the cardholder.' }),
    checks: CardChecksV2Schema.exactOptional(),
    authorisation_code: AuthorisationCodeSchema.exactOptional(),
    arn: ArnSchema.exactOptional(),
    capture_deadline: CaptureDeadlineSchema.exactOptional(),
    terminal_hardware_id: TerminalHardwareIdSchema.exactOptional(),
    fingerprint: FingerprintSchema.exactOptional(),
    network_transaction_id: NetworkTransactionIdSchema.exactOptional(),
  })
  .openapi({
    title: 'Apple-Pay',
    description: 'Object containing details of a card used via Apple Pay.',
    required: ['type'],
  })
  .openapi('ApplePay')

const CardSchema = z
  .object({
    id: z
      .uuid()
      .exactOptional()
      .openapi({
        description:
          'ID of the saved payment method.\n\n:::note\nThe `id` parameter is only returned when the payment method is saved.\n:::',
      }),
    type: PaymentMethodTypeSchema,
    card_brand: z
      .enum(['visa', 'mastercard', 'american_express'])
      .exactOptional()
      .openapi({ description: 'The type of the card.' }),
    funding: z
      .enum(['credit', 'debit', 'prepaid'])
      .exactOptional()
      .openapi({ description: 'The type of card funding.' }),
    commercial: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Indicates whether the card is a commercial card.\nThe field is omitted when the classification is unavailable.',
      }),
    card_country_code: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The 2-letter country code of the country where the card was issued.',
      }),
    card_bin: z.string().length(6).exactOptional().openapi({ description: 'The BIN of the card.' }),
    card_last_four: z
      .string()
      .length(4)
      .exactOptional()
      .openapi({ description: 'The last four digits of the card number.' }),
    card_expiry: z
      .string()
      .exactOptional()
      .openapi({ description: 'The expiry date of the card in the format of MM/YY.' }),
    cardholder_name: z
      .string()
      .exactOptional()
      .openapi({ description: 'The name of the cardholder.' }),
    checks: CardChecksV2Schema.exactOptional(),
    authorisation_code: AuthorisationCodeSchema.exactOptional(),
    arn: ArnSchema.exactOptional(),
    capture_deadline: CaptureDeadlineSchema.exactOptional(),
    terminal_hardware_id: TerminalHardwareIdSchema.exactOptional(),
    fingerprint: FingerprintSchema.exactOptional(),
    network_transaction_id: NetworkTransactionIdSchema.exactOptional(),
  })
  .openapi({
    title: 'Card',
    description: 'Object containing details of the card used for the payment.',
    required: ['type'],
  })
  .openapi('Card')

const GooglePaySchema = z
  .object({
    id: z
      .uuid()
      .exactOptional()
      .openapi({
        description:
          'ID of the saved payment method.\n\n:::note\nThe `id` parameter is only returned when the payment method is saved.\n:::',
      }),
    type: PaymentMethodTypeSchema,
    card_brand: z
      .enum(['visa', 'mastercard', 'american_express'])
      .exactOptional()
      .openapi({ description: 'The type of the card.' }),
    funding: z
      .enum(['credit', 'debit', 'prepaid'])
      .exactOptional()
      .openapi({ description: 'The type of card funding.' }),
    commercial: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Indicates whether the card is a commercial card.\nThe field is omitted when the classification is unavailable.',
      }),
    card_country_code: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The 2-letter country code of the country where the card was issued.',
      }),
    card_bin: z.string().length(6).exactOptional().openapi({ description: 'The BIN of the card.' }),
    card_last_four: z
      .string()
      .length(4)
      .exactOptional()
      .openapi({ description: 'The last four digits of the card number.' }),
    card_expiry: z
      .string()
      .exactOptional()
      .openapi({ description: 'The expiry date of the card in the format of MM/YY.' }),
    cardholder_name: z
      .string()
      .exactOptional()
      .openapi({ description: 'The name of the cardholder.' }),
    checks: CardChecksV2Schema.exactOptional(),
    authorisation_code: AuthorisationCodeSchema.exactOptional(),
    arn: ArnSchema.exactOptional(),
    capture_deadline: CaptureDeadlineSchema.exactOptional(),
    terminal_hardware_id: TerminalHardwareIdSchema.exactOptional(),
    fingerprint: FingerprintSchema.exactOptional(),
    network_transaction_id: NetworkTransactionIdSchema.exactOptional(),
  })
  .openapi({
    title: 'Google-Pay',
    description: 'Object containing details of a card used via Google Pay.',
    required: ['type'],
  })
  .openapi('GooglePay')

const RevolutPayCardSchema = z
  .object({
    id: z
      .uuid()
      .exactOptional()
      .openapi({
        description:
          'ID of the saved payment method.\n\n:::note\nThe `id` parameter is only returned when the payment method is saved.\n:::',
      }),
    type: PaymentMethodTypeSchema,
    card_brand: z
      .enum(['visa', 'mastercard', 'american_express'])
      .exactOptional()
      .openapi({ description: 'The type of the card.' }),
    funding: z
      .enum(['credit', 'debit', 'prepaid'])
      .exactOptional()
      .openapi({ description: 'The type of card funding.' }),
    commercial: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Indicates whether the card is a commercial card.\nThe field is omitted when the classification is unavailable.',
      }),
    card_country_code: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The 2-letter country code of the country where the card was issued.',
      }),
    card_bin: z.string().length(6).exactOptional().openapi({ description: 'The BIN of the card.' }),
    card_last_four: z
      .string()
      .length(4)
      .exactOptional()
      .openapi({ description: 'The last four digits of the card number.' }),
    card_expiry: z
      .string()
      .exactOptional()
      .openapi({ description: 'The expiry date of the card in the format of MM/YY.' }),
    cardholder_name: z
      .string()
      .exactOptional()
      .openapi({ description: 'The name of the cardholder.' }),
    checks: CardChecksV2Schema.exactOptional(),
    authorisation_code: AuthorisationCodeSchema.exactOptional(),
    arn: ArnSchema.exactOptional(),
    capture_deadline: CaptureDeadlineSchema.exactOptional(),
    terminal_hardware_id: TerminalHardwareIdSchema.exactOptional(),
    fingerprint: FingerprintSchema.exactOptional(),
    network_transaction_id: NetworkTransactionIdSchema.exactOptional(),
  })
  .openapi({
    title: 'Revolut-Pay-Card',
    description: 'Object containing details of a card used via Revolut Pay.',
    required: ['type'],
  })
  .openapi('RevolutPayCard')

const RevolutPayAccountSchema = z
  .object({
    id: z
      .uuid()
      .exactOptional()
      .openapi({
        description:
          'ID of the saved payment method.\n\n:::note\nThe `id` parameter is only returned when the payment method is saved.\n:::',
      }),
    type: PaymentMethodTypeSchema,
    fingerprint: FingerprintSchema.exactOptional(),
  })
  .openapi({
    title: 'Revolut-Pay-Account',
    description:
      'Revolut Pay account payment method details, including the saved payment method ID and fingerprint.',
    required: ['type'],
  })
  .openapi('RevolutPayAccount')

const SepaDirectDebitDebtorIbanLastFourSchema = z
  .string()
  .length(4)
  .openapi({
    title: 'Sepa-Direct-Debit-Debtor-Iban-Last-Four',
    description: "The last four digits of the debtor's IBAN.",
  })
  .openapi('SepaDirectDebitDebtorIbanLastFour')

const SepaDirectDebitDebtorNameSchema = z
  .string()
  .openapi({
    title: 'Sepa-Direct-Debit-Debtor-Name',
    description: 'The full name of the debtor as provided in the mandate.',
  })
  .openapi('SepaDirectDebitDebtorName')

const SepaDirectDebitMandateReferenceSchema = z
  .string()
  .openapi({
    title: 'Sepa-Direct-Debit-Mandate-Reference',
    description:
      'The unique mandate reference generated by Revolut. Include this in pre-debit notifications sent to your customers.',
  })
  .openapi('SepaDirectDebitMandateReference')

const SepaDirectDebitSchema = z
  .object({
    id: z
      .uuid()
      .exactOptional()
      .openapi({
        description:
          'ID of the saved payment method.\n\n:::note\nThe `id` parameter is only returned when the payment method is saved for the merchant.\n:::',
      }),
    type: PaymentMethodTypeSchema,
    debtor_iban_last_four: SepaDirectDebitDebtorIbanLastFourSchema.exactOptional(),
    debtor_name: SepaDirectDebitDebtorNameSchema.exactOptional(),
    mandate_reference: SepaDirectDebitMandateReferenceSchema.exactOptional(),
  })
  .openapi({
    title: 'Sepa-Direct-Debit',
    description:
      'Object containing details of a SEPA Direct Debit payment.\n\n:::info\nFor more information, see: [SEPA Direct Debit server-to-server integration](https://developer.revolut.com/docs/guides/merchant/accept-payments/payment-methods/sepa-direct-debit/server-to-server)\n:::',
    required: ['type'],
  })
  .openapi('SepaDirectDebit')

const PaymentMethodV2Schema = z
  .xor([
    ApplePaySchema,
    CardSchema,
    GooglePaySchema,
    RevolutPayCardSchema,
    RevolutPayAccountSchema,
    SepaDirectDebitSchema,
  ])
  .openapi({
    title: 'Payment-Method-v2',
    description: 'The details of the payment method used to make the payment.',
    discriminator: {
      propertyName: 'type',
      mapping: {
        apple_pay: '#/components/schemas/Apple-Pay',
        card: '#/components/schemas/Card',
        google_pay: '#/components/schemas/Google-Pay',
        revolut_pay_card: '#/components/schemas/Revolut-Pay-Card',
        revolut_pay_account: '#/components/schemas/Revolut-Pay-Account',
        sepa_direct_debit: '#/components/schemas/Sepa-Direct-Debit',
      },
    },
  })
  .openapi('PaymentMethodV2')

const AuthenticationChallengeTypeSchema = z
  .enum(['three_ds', 'three_ds_fingerprint'])
  .openapi({
    title: 'Authentication-Challenge-Type',
    description: 'Type of the authentication challenge the payment triggers.',
  })
  .openapi('AuthenticationChallengeType')

const ThreeDsSchema = z
  .object({
    type: AuthenticationChallengeTypeSchema,
    acs_url: z.url().openapi({ description: 'The URL of the authentication challenge.' }),
  })
  .openapi({
    title: 'Three-Ds',
    description: 'Information about the 3DS challenge.',
    required: ['type', 'acs_url'],
  })
  .openapi('ThreeDs')

const ThreeDsFingerprintSchema = z
  .object({
    type: AuthenticationChallengeTypeSchema,
    fingerprint_url: z
      .url()
      .openapi({ description: 'The URL of the fingerprint. (Used only internally by Revolut.)' }),
    fingerprint_data: z
      .string()
      .openapi({
        description:
          'Data about the fingerprint used for authentication. (Used only internally\nby Revolut.)',
      }),
  })
  .openapi({
    title: 'Three-Ds-Fingerprint',
    description: 'Information about the 3DS fingerprint challenge.',
    required: ['type', 'fingerprint_url', 'fingerprint_data'],
  })
  .openapi('ThreeDsFingerprint')

const AuthenticationChallengeSchema = z
  .xor([ThreeDsSchema, ThreeDsFingerprintSchema])
  .openapi({
    title: 'Authentication-Challenge',
    description:
      "Details about the authentication challenge that should be performed to complete the authentication process. For more information about Revolut's 3DS solution, see: [3D Secure overview](https://developer.revolut.com/docs/guides/merchant/reference/3d-secure).\n\nOnly returned if the payment's state is `authentication_challenge`.",
    discriminator: {
      propertyName: 'type',
      mapping: {
        three_ds: '#/components/schemas/Three-Ds',
        three_ds_fingerprint: '#/components/schemas/Three-Ds-Fingerprint',
      },
    },
  })
  .openapi('AuthenticationChallenge')

const AddressV2Schema = z
  .object({
    street_line_1: z
      .string()
      .max(100)
      .exactOptional()
      .openapi({ description: 'Street line 1 information.' }),
    street_line_2: z
      .string()
      .max(100)
      .exactOptional()
      .openapi({ description: 'Street line 2 information.' }),
    region: z
      .string()
      .max(100)
      .exactOptional()
      .openapi({ description: 'The region associated with the address.' }),
    city: z
      .string()
      .max(100)
      .exactOptional()
      .openapi({ description: 'The city associated with the address.' }),
    country_code: z
      .string()
      .max(2)
      .openapi({
        description: 'The 2-letter country code of the country associated with the address.',
      }),
    postcode: z
      .string()
      .max(100)
      .openapi({ description: 'The postcode associated with the address.' }),
  })
  .openapi({
    title: 'Address-v2',
    description: 'Object containing address details.',
    required: ['country_code', 'postcode'],
  })
  .openapi('AddressV2')

const PaymentRiskLevelSchema = z
  .enum(['low', 'high'])
  .openapi({
    title: 'Payment-Risk-Level',
    description:
      'The risk level of the card.\n\nIf the risk level is `high`, the payment might be declined.',
  })
  .openapi('PaymentRiskLevel')

const FeeSchema = z
  .object({
    type: z
      .enum(['fx', 'acquiring'])
      .exactOptional()
      .openapi({ description: 'The type of the order fee.' }),
    amount: z
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
        description:
          'The amount of the payment fee (minor currency unit). For example, enter `7034` for €70.34 in the field.',
      }),
    currency: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The currency of the payment fee. [ISO 4217](https://en.wikipedia.org/wiki/ISO_4217) currency code in upper case.\n\n:::info\nFor more information about the supported currencies, see: [Help Center](https://help.revolut.com/business/help/merchant-accounts/payments/in-which-currencies-can-i-accept-payments/).\n:::',
      }),
  })
  .openapi({
    title: 'Fee',
    description: 'A fee applied to an order, including its type, amount, and currency.',
    required: [],
  })
  .openapi('Fee')

const FeesSchema = z
  .array(FeeSchema)
  .openapi({ title: 'Fees', description: 'The details of the order fee.' })
  .openapi('Fees')

const PayerSchema = z
  .object({
    email: EmailSchema.exactOptional().openapi({
      description: 'The email of the person who made the payment.',
    }),
    phone: PhoneSchema.exactOptional().openapi({
      description:
        'The phone number of the payer in [E.164 format](https://en.wikipedia.org/wiki/E.164).',
    }),
  })
  .openapi({
    title: 'Payer',
    description:
      'The person who made the payment. This object is present when an email or phone number is provided during the payment flow.\n\nCapturing payer details lets you identify exactly who authorised the charge, reach the right person for receipts or refund queries, and support compliance or fraud-review workflows where the paying identity matters.',
    required: [],
  })
  .openapi('Payer')

const PaymentV2Schema = z
  .object({
    id: PaymentIdSchema,
    state: PaymentStateV2Schema,
    decline_reason: DeclineReasonV2Schema.exactOptional(),
    bank_message: BankMessageSchema.exactOptional(),
    created_at: PaymentCreatedSchema,
    updated_at: PaymentUpdatedSchema,
    token: PaymentTokenSchema.exactOptional(),
    amount: PaymentAmountSchema,
    authorised_amount: PaymentAuthorisedAmountSchema.exactOptional(),
    currency: CurrencySchema.exactOptional(),
    settled_amount: PaymentSettledAmountSchema.exactOptional(),
    settled_currency: PaymentSettledCurrencySchema.exactOptional(),
    payment_method: PaymentMethodV2Schema.exactOptional(),
    authentication_challenge: AuthenticationChallengeSchema.exactOptional(),
    billing_address: AddressV2Schema.exactOptional(),
    risk_level: PaymentRiskLevelSchema.exactOptional(),
    fees: FeesSchema.exactOptional(),
    payer: PayerSchema.exactOptional(),
  })
  .openapi({
    title: 'Payment-v2',
    description:
      'Represents a payment for an order.\n\nFor pre-authorised payments, the `authorised_amount` field tracks the currently authorised amount, which may differ from `amount` during incremental authorisation processing.',
    required: ['id', 'state', 'created_at', 'updated_at', 'amount'],
  })
  .openapi('PaymentV2')

const IncrementReferenceSchema = z
  .string()
  .max(255)
  .openapi({
    title: 'Increment-Reference',
    description:
      'External reference for this incremental authorisation.\n\n:::tip\nUse your internal charge or invoice ID. This reference is returned in webhooks for easy matching to your system.\n:::',
    example: 'CHG-67890',
  })
  .openapi('IncrementReference')

const IncrementalAuthorisationSchema = z
  .object({
    new_amount: z
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
        description: 'The new total amount requested in this increment (in minor units).',
        example: 600,
      }),
    old_amount: z
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
        description: 'The previously authorised amount before this increment (in minor units).',
        example: 500,
      }),
    state: z
      .enum(['pending', 'processing', 'authorised', 'declined', 'failed'])
      .exactOptional()
      .openapi({
        description:
          'The state of this incremental authorization attempt.\n\n| State | Description |\n|-------|-------------|\n| `pending` | Increment registered in system, not yet submitted to card network |\n| `processing` | Increment is being processed by card network |\n| `authorised` | Increment was successfully authorised |\n| `declined` | Increment was declined by card issuer |\n| `failed` | Increment failed due to technical error (not an issuer decline) |',
      }),
    reference: IncrementReferenceSchema.exactOptional(),
    line_items: z
      .array(LineItemSchema)
      .exactOptional()
      .openapi({
        description:
          'Line items associated with this increment (if provided).\n\n:::note\nIf the increment is successful, these line items will override the existing order line items.\n:::',
      }),
    reason: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Reason why increment was declined or failed.\n\n:::note\nOnly present when `state` is `declined` or `failed`.\n:::',
        example: 'insufficient_funds',
      }),
  })
  .openapi({
    title: 'Incremental-Authorisation',
    description:
      'Represents a single incremental authorisation attempt on an order.\n\nThe `incremental_authorisations` array tracks all increment attempts (successful and failed) in chronological order.',
    required: [],
  })
  .openapi('IncrementalAuthorisation')

const IncrementalAuthorisationsSchema = z
  .array(IncrementalAuthorisationSchema)
  .openapi({
    title: 'Incremental-Authorisations',
    description:
      'History of incremental authorisation attempts for this order.\n\nOnly present for orders with `authorisation_type: pre_authorisation`.\n\nContains all increment attempts in chronological order.',
  })
  .openapi('IncrementalAuthorisations')

const CheckoutUrlSchema = z
  .url()
  .openapi({ title: 'Checkout-Url', description: 'Link to a checkout page hosted by Revolut.' })
  .openapi('CheckoutUrl')

const OrderV4Schema = z
  .object({
    id: OrderIdSchema.exactOptional(),
    token: OrderTokenSchema.exactOptional(),
    type: OrderTypeV2Schema.exactOptional(),
    state: OrderStateSchema.exactOptional(),
    created_at: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({ description: 'The date and time the order was created.' }),
    updated_at: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({ description: 'The date and time the order was last updated.' }),
    description: OrderDescriptionSchema.exactOptional(),
    capture_mode: CaptureModeV2Schema.exactOptional(),
    authorisation_type: AuthorisationTypeSchema.exactOptional(),
    cancel_authorised_after: CancelAuthorisedAfterSchema.exactOptional(),
    amount: OrderAmountV2Schema.exactOptional(),
    outstanding_amount: OutstandingAmountSchema.exactOptional(),
    refunded_amount: RefundedAmountSchema.exactOptional(),
    currency: CurrencySchema.exactOptional(),
    settlement_currency: SettlementCurrencySchema.exactOptional(),
    customer: CustomerV2Schema.exactOptional(),
    payments: z
      .array(PaymentV2Schema)
      .exactOptional()
      .openapi({
        description:
          'The details of all the payments that have been made towards this order (successful or unsuccessful).',
      }),
    incremental_authorisations: IncrementalAuthorisationsSchema.exactOptional(),
    location_id: LocationIdSchema.exactOptional(),
    metadata: MetadataSchema.exactOptional(),
    industry_data: IndustryDataSchema.exactOptional(),
    merchant_order_data: MerchantOrderDataSchema.exactOptional(),
    upcoming_payment_data: UpcomingPaymentSchema.exactOptional(),
    checkout_url: CheckoutUrlSchema.exactOptional(),
    redirect_url: RedirectUrlSchema.exactOptional(),
    shipping: ShippingSchema.exactOptional(),
    enforce_challenge: EnforceChallengeV2Schema.exactOptional(),
    line_items: LineItemsSchema.exactOptional(),
    statement_descriptor_suffix: StatementDescriptorSuffixSchema.exactOptional(),
    related_order_id: RelatedOrderIdSchema.exactOptional(),
    subscription_data: SubscriptionDataSchema.exactOptional(),
  })
  .openapi({
    title: 'Order-v4',
    description:
      'To process the order from a credit or debit card, you create an `Order` object. You can then retrieve, capture, cancel, refund, or pay an order using its unique `id`. Alternatively, you can use its unique `token` to process a card payment with the Revolut Checkout Widget.',
    required: [],
  })
  .openapi('OrderV4')

const OrderUpdateV4Schema = z
  .object({
    amount: OrderAmountV2Schema.exactOptional(),
    currency: CurrencySchema.exactOptional(),
    settlement_currency: SettlementCurrencySchema.exactOptional(),
    description: OrderDescriptionSchema.exactOptional(),
    customer: CustomerV2Schema.exactOptional(),
    shipping: ShippingSchema.exactOptional(),
    enforce_challenge: EnforceChallengeV2Schema.exactOptional(),
    line_items: LineItemsSchema.exactOptional(),
    capture_mode: CaptureModeV2Schema.exactOptional(),
    cancel_authorised_after: CancelAuthorisedAfterSchema.exactOptional(),
    metadata: MetadataSchema.exactOptional(),
    industry_data: IndustryDataSchema.exactOptional(),
    merchant_order_data: MerchantOrderDataSchema.exactOptional(),
    upcoming_payment_data: UpcomingPaymentSchema.exactOptional(),
    redirect_url: RedirectUrlSchema.exactOptional(),
    statement_descriptor_suffix: StatementDescriptorSuffixSchema.exactOptional(),
  })
  .openapi({
    title: 'Order-Update-v4',
    description: 'Object schema containing information about order update request.',
    required: [],
  })
  .openapi('OrderUpdateV4')

const IncrementAmountSchema = z
  .preprocess(
    (val) =>
      typeof val === 'number' && Number.isSafeInteger(val)
        ? BigInt(val)
        : typeof val === 'string' && /^-?\d+$/.test(val)
          ? BigInt(val)
          : val,
    z.int64().min(1n),
  )
  .openapi({
    type: 'integer',
    format: 'int64',
    minimum: 1,
    title: 'Increment-Amount',
    description:
      'The new total amount to be authorised (in minor units, e.g., cents).\n\nThis should be the **full new amount**, not the increment value.\nFor example, if the current authorised amount is `500` and you want to add 100, pass `600`.\n\n:::warning\n- Must be greater than or equal to the current authorised amount (incrementing with same amount allowed to extend capture deadline for Mastercard)\n- The sum of all increment amounts cannot exceed 5x the initial authorised amount (e.g., initial amount £100 allows up to £500 in total increments)\n:::',
    example: 600,
  })
  .openapi('IncrementAmount')

const IncrementalAuthorisationRequestSchema = z
  .object({
    amount: IncrementAmountSchema,
    reference: IncrementReferenceSchema.exactOptional(),
    line_items: LineItemsSchema.exactOptional(),
  })
  .openapi({
    title: 'Incremental-Authorisation-Request',
    description:
      'Request body for incrementing an existing payment authorisation with additional amount, reference, or line items.',
    required: ['amount'],
  })
  .openapi('IncrementalAuthorisationRequest')

const OrderCaptureAmountSchema = z
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
    title: 'Order-Capture-Amount',
    description:
      'Specify an amount to capture, in minor currency units. The amount must not exceed the authorised amount.\n\nAn order can only be captured once. Partial capture is supported by sending an amount lower than the authorised amount. The uncaptured amount will be voided.\n\nIf you resend a capture request for an order that is already captured, no additional capture is performed. Resending with the same amount returns the current order state, while resending with a different amount returns an error.\n\nIf not provided, it defaults to the authorised amount (full capture will be executed).',
  })
  .openapi('OrderCaptureAmount')

const OrderCaptureV2Schema = z
  .object({
    amount: OrderCaptureAmountSchema.exactOptional(),
    line_items: LineItemsSchema.exactOptional(),
  })
  .openapi({
    title: 'Order-Capture-v2',
    description:
      'Order capture request parameters.\n\nYou can optionally provide line items when capturing an order. This is useful when you need to adjust the final order details at capture time (for example, when doing partial captures with specific items, or when the final delivered items differ from the initial authorisation).\n\n:::warning\nIf you provide `line_items` when capturing, they will **overwrite** the original line items that were provided during order creation or update. Make sure to include all the items you want to be associated with the captured order.\n:::',
    required: [],
  })
  .openapi('OrderCaptureV2')

const RefundAmountSchema = z
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
    title: 'Refund-Amount',
    description:
      'The amount to be refunded, specified in the smallest currency unit (e.g., cents for USD, pence for GBP).',
    example: 100,
  })
  .openapi('RefundAmount')

const RefundCurrencySchema = z
  .string()
  .length(3)
  .openapi({
    title: 'Refund-Currency',
    description:
      '[ISO 4217](https://en.wikipedia.org/wiki/ISO_4217) currency code in upper case.\n\n**Must match the `currency` of the original order to be refunded.**\n\n:::info\nFor more information about the supported currencies, see: [Help Center](https://help.revolut.com/business/help/merchant-accounts/payments/in-which-currencies-can-i-accept-payments/).\n:::',
  })
  .openapi('RefundCurrency')

const OrderRefundV2Schema = z
  .object({
    amount: RefundAmountSchema,
    currency: RefundCurrencySchema,
    merchant_order_data: z
      .object({ reference: MerchantOrderExternalReferenceSchema.exactOptional() })
      .exactOptional()
      .openapi({
        description:
          "Object for providing additional information stored in the merchant's order management system.",
        required: [],
      }),
    metadata: MetadataSchema.exactOptional(),
    description: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'An optional, user-facing description for the refund. This may be displayed to the customer.',
        example: 'Refund for returned item.',
      }),
  })
  .openapi({
    title: 'Order-Refund-v2',
    description: 'The request body for creating a refund order.',
    required: ['amount', 'currency'],
  })
  .openapi('OrderRefundV2')

const RevolutPayAccountLegacySchema = z
  .object({
    type: z
      .enum(['card', 'revolut_pay'])
      .openapi({ description: 'The type of payment method used to pay for the order.' }),
    subtype: z
      .enum(['revolut_account', 'card'])
      .openapi({
        description:
          'Indicates whether the customer used their card or Revolut account via Revolut Pay.',
      }),
    id: z
      .uuid()
      .exactOptional()
      .openapi({
        description:
          'ID of the saved payment method.\n\n:::note\nThe `id` parameter is only returned if the payment method is saved.\n:::',
      }),
  })
  .openapi({
    title: 'Revolut-Pay-Account-Legacy',
    description:
      'Revolut Pay account payment method details, used when the customer paid via their Revolut account.',
    required: ['type', 'subtype'],
  })
  .openapi('RevolutPayAccountLegacy')

const RevolutPayCardLegacySchema = z
  .object({
    type: z
      .enum(['card', 'revolut_pay'])
      .openapi({ description: 'The type of payment method used to pay for the order.' }),
    subtype: z
      .enum(['revolut_account', 'card'])
      .openapi({
        description:
          'Indicates whether the customer used their card or Revolut account via Revolut Pay.',
      }),
    id: z
      .uuid()
      .exactOptional()
      .openapi({
        description:
          'ID of the saved payment method.\n\n:::note\nThe `id` parameter is only returned if the payment method is saved.\n:::',
      }),
    brand: z.string().exactOptional().openapi({ description: 'The type of the card.' }),
    last_four: z
      .string()
      .exactOptional()
      .openapi({ description: 'The last four digits of the card number.' }),
  })
  .openapi({
    title: 'Revolut-Pay-Card-Legacy',
    description:
      'Revolut Pay card payment method details, used when the customer paid via a card through Revolut Pay.',
    required: ['type', 'subtype'],
  })
  .openapi('RevolutPayCardLegacy')

const RevolutPaySchema = z
  .xor([RevolutPayAccountLegacySchema, RevolutPayCardLegacySchema])
  .openapi({
    title: 'Revolut-Pay',
    description:
      'Revolut Pay payment method details, discriminated by subtype into account or card variants.',
    discriminator: {
      propertyName: 'subtype',
      mapping: {
        revolut_pay_account: '#/components/schemas/Revolut-Pay-Account-Legacy',
        revolut_pay_card: '#/components/schemas/Revolut-Pay-Card-Legacy',
      },
    },
  })
  .openapi('RevolutPay')

const CardForPaymentDetailsSchema = z
  .object({
    type: z
      .enum(['card', 'revolut_pay'])
      .openapi({ description: 'The type of payment method used to pay for the order.' }),
    brand: z.string().exactOptional().openapi({ description: 'The type of the card.' }),
    last_four: z
      .string()
      .exactOptional()
      .openapi({ description: 'The last four digits of the card number.' }),
    id: z
      .uuid()
      .exactOptional()
      .openapi({
        description:
          'ID of the saved payment method.\n\n:::note\nThe `id` parameter is only returned if the payment method is saved.\n:::',
      }),
  })
  .openapi({
    title: 'Card-For-Payment-Details',
    description: 'Card payment method details returned in the payment retrieval response.',
    required: ['type'],
  })
  .openapi('CardForPaymentDetails')

const PaymentRetrievalSchema = z
  .object({
    id: PaymentIdSchema,
    order_id: OrderIdSchema,
    payment_method: z
      .xor([RevolutPaySchema, CardForPaymentDetailsSchema, SepaDirectDebitSchema])
      .openapi({
        description: 'The payment method used to pay for the order.',
        discriminator: {
          propertyName: 'type',
          mapping: {
            revolut_pay: '#/components/schemas/Revolut-Pay',
            card: '#/components/schemas/Card-For-Payment-Details',
            sepa_direct_debit: '#/components/schemas/Sepa-Direct-Debit',
          },
        },
      }),
    token: PaymentTokenSchema.exactOptional(),
    amount: PaymentAmountSchema.exactOptional(),
    currency: CurrencySchema.exactOptional(),
    state: PaymentStateV2Schema.exactOptional(),
    decline_reason: DeclineReasonV2Schema.exactOptional(),
    authentication_challenge: AuthenticationChallengeSchema.exactOptional(),
  })
  .openapi({
    title: 'Payment-Retrieval',
    description:
      'A payment object retrieved from the API, including its method, amount, state, and optional authentication challenge.',
    required: ['id', 'order_id', 'payment_method'],
  })
  .openapi('PaymentRetrieval')

const BrowserEnvironmentSchema = z
  .object({
    type: z
      .literal('browser')
      .openapi({
        example: 'browser',
        description: 'Type of environment where the payment was made.',
      }),
    time_zone_utc_offset: z
      .int()
      .openapi({ example: 180, description: 'Defines the offset to UTC in minutes.' }),
    color_depth: z
      .int()
      .openapi({ example: 32, description: "The browser's available colour depth." }),
    screen_width: z
      .int()
      .openapi({ example: 1920, description: "The browser's screen width in pixels." }),
    screen_height: z
      .int()
      .openapi({ example: 1080, description: "The browser's screen height in pixels." }),
    java_enabled: z
      .boolean()
      .openapi({ example: false, description: 'Indicates if the browser has Java enabled.' }),
    challenge_window_width: z
      .int()
      .exactOptional()
      .openapi({
        example: 640,
        description:
          'Defines the width of the pop-up window where the authentication challenge appears.',
      }),
    browser_url: z
      .url()
      .exactOptional()
      .openapi({
        example: 'https://business.revolut.com',
        description: 'The URL of the page where the payment was initiated.',
      }),
  })
  .openapi({
    title: 'Browser-Environment',
    description: 'Browser environment',
    required: [
      'type',
      'time_zone_utc_offset',
      'color_depth',
      'screen_width',
      'screen_height',
      'java_enabled',
    ],
  })
  .openapi('BrowserEnvironment')

const EnvironmentSchema = z
  .xor([BrowserEnvironmentSchema])
  .openapi({
    title: 'Environment',
    description:
      'Environment object, indicating in which environment the payment was made.\n\n:::warning\nOnly required if `initiator: customer`.\n:::\n\n:::note\nOnly `browser` is available at the moment.\n:::',
    discriminator: {
      propertyName: 'type',
      mapping: { browser: '#/components/schemas/Browser-Environment' },
    },
  })
  .openapi('Environment')

const SavedPaymentMethodSchema = z
  .object({
    saved_payment_method: z
      .object({
        type: z
          .enum(['card', 'revolut_pay'])
          .openapi({ description: 'Type of saved payment method.', example: 'card' }),
        id: z.string().openapi({ description: 'Saved payment method ID.' }),
        initiator: z
          .enum(['customer', 'merchant'])
          .openapi({
            description:
              'Indicates who is allowed to initiate the payment. \n\n:::note\nUsing this endpoint, only merchant initiated payments are supported with Revolut Pay.\n:::',
            example: 'customer',
          }),
        environment: EnvironmentSchema,
      })
      .openapi({
        description:
          'Object containing information about the saved payment method used to pay for the order.',
        required: ['type', 'id', 'initiator', 'environment'],
      }),
  })
  .openapi({
    title: 'Saved-Payment-Method',
    description:
      'A saved payment method used to pay for an order, including type, ID, initiator, and environment.',
    required: ['saved_payment_method'],
  })
  .openapi('SavedPaymentMethod')

const NextPageTokenSchema = z
  .string()
  .nullable()
  .openapi({
    title: 'Next-Page-Token',
    description:
      'Token for retrieving the next page of results. Use this token as the value of the `page_token` query parameter in your next request to retrieve the next page.\n\nIf not present, there are no more results to retrieve.',
  })
  .openapi('NextPageToken')

const CustomerSimplifiedSchema = z
  .object({
    id: CustomerIdSchema,
    full_name: FullNameSchema.exactOptional(),
    email: EmailSchema,
    phone: PhoneSchema.exactOptional(),
    created_at: z.iso
      .datetime({ offset: true })
      .openapi({ description: 'The date and time the customer was created.' }),
    updated_at: z.iso
      .datetime({ offset: true })
      .openapi({ description: 'The date and time the customer was last updated.' }),
  })
  .openapi({
    title: 'Customer-Simplified',
    description: 'A customer object.',
    required: ['id', 'created_at', 'updated_at', 'email'],
  })
  .openapi('CustomerSimplified')

const CustomersSchema = z
  .object({
    next_page_token: NextPageTokenSchema.exactOptional(),
    customers: z.array(CustomerSimplifiedSchema).openapi({ description: 'List of customers.' }),
  })
  .openapi({
    title: 'Customers',
    description: 'A paginated list of customers.',
    required: ['customers'],
  })
  .openapi('Customers')

const CustomerCreationV2Schema = z
  .object({
    full_name: FullNameSchema.exactOptional(),
    email: EmailSchema,
    phone: PhoneSchema.exactOptional(),
    date_of_birth: DateOfBirthSchema.exactOptional(),
  })
  .openapi({
    title: 'Customer-Creation-v2',
    description: 'The request body for creating a customer.',
    required: ['email'],
  })
  .openapi('CustomerCreationV2')

const CustomerCreatedSchema = z
  .object({
    id: CustomerIdSchema,
    full_name: FullNameSchema.exactOptional(),
    email: EmailSchema,
    phone: PhoneSchema.exactOptional(),
    created_at: z.iso
      .datetime({ offset: true })
      .openapi({ description: 'The date and time the customer was created.' }),
    updated_at: z.iso
      .datetime({ offset: true })
      .openapi({ description: 'The date and time the customer was last updated.' }),
  })
  .openapi({
    title: 'Customer-Created',
    description: 'A customer object.',
    required: ['id', 'created_at', 'updated_at', 'email'],
  })
  .openapi('CustomerCreated')

const PaymentMethodIdSchema = z
  .uuid()
  .openapi({ title: 'Payment-Method-Id', description: 'Unique identifier for the payment method.' })
  .openapi('PaymentMethodId')

const PaymentMethodTypeV2Schema = z
  .enum(['card', 'revolut_pay', 'sepa_direct_debit'])
  .openapi({ title: 'Payment-Method-Type-v2', description: 'The type of the payment method.' })
  .openapi('PaymentMethodTypeV2')

const SavedForSchema = z
  .enum(['customer', 'merchant'])
  .openapi({
    title: 'Saved-For',
    description:
      'Indicates in which case this saved payment method can be used for payments.\n\n| Value | Description |\n| ----- | ----------- |\n| `customer` | This payment method can be used only when the customer is on the checkout page. |\n| `merchant` | This payment method can be used without the customer being on the checkout page, and the merchant can initiate transactions, for example, to take payments for recurring transactions. |',
  })
  .openapi('SavedFor')

const PaymentMethodCreatedAtSchema = z.iso
  .datetime({ offset: true })
  .openapi({
    title: 'Payment-Method-Created-At',
    description: 'The date and time the payment method was added.',
  })
  .openapi('PaymentMethodCreatedAt')

const CardBinSchema = z
  .string()
  .openapi({
    title: 'Card-Bin',
    description:
      'The BIN (Bank Identification Number) of the payment card, typically the first 6-8 digits.',
  })
  .openapi('CardBin')

const CardLastFourSchema = z
  .string()
  .length(4)
  .openapi({
    title: 'Card-Last-Four',
    description: 'The last four digits of the payment card number.',
  })
  .openapi('CardLastFour')

const CardExpiryMonthSchema = z
  .int()
  .openapi({ title: 'Card-Expiry-Month', description: 'The expiry month of the payment card.' })
  .openapi('CardExpiryMonth')

const CardExpiryYearSchema = z
  .int()
  .openapi({ title: 'Card-Expiry-Year', description: 'The expiry year of the payment card.' })
  .openapi('CardExpiryYear')

const CardholderNameSchema = z
  .string()
  .openapi({
    title: 'Cardholder-Name',
    description: 'The name of the cardholder as it appears on the card.',
  })
  .openapi('CardholderName')

const CardBrandV2Schema = z
  .enum(['visa', 'mastercard', 'american_express'])
  .openapi({ title: 'Card-Brand-v2', description: 'The brand of the payment card.' })
  .openapi('CardBrandV2')

const CardFundingV2Schema = z
  .enum(['debit', 'credit', 'prepaid'])
  .openapi({ title: 'Card-Funding-v2', description: 'The funding type of the payment card.' })
  .openapi('CardFundingV2')

const CardIssuerSchema = z
  .string()
  .openapi({
    title: 'Card-Issuer',
    description: 'The name of the card-issuing bank or institution.',
  })
  .openapi('CardIssuer')

const CardIssuerCountrySchema = z
  .string()
  .length(2)
  .openapi({
    title: 'Card-Issuer-Country',
    description:
      'The ISO 3166-1 alpha-2 country code of the country where the payment card was issued.',
  })
  .openapi('CardIssuerCountry')

const BillingAddressSchema = z
  .object({
    street_line_1: z
      .string()
      .max(100)
      .exactOptional()
      .openapi({ description: 'Primary address line.' }),
    street_line_2: z
      .string()
      .max(100)
      .exactOptional()
      .openapi({ description: 'Secondary address line, such as floor and apartment number.' }),
    region: z
      .string()
      .max(100)
      .exactOptional()
      .openapi({ description: 'State or province of the address.' }),
    city: z.string().max(100).exactOptional().openapi({ description: 'City of the address.' }),
    country_code: z
      .string()
      .regex(/^[A-Z]{2}$/)
      .length(2)
      .openapi({ description: 'ISO 2-letter country code.' }),
    postcode: z.string().max(100).openapi({ description: 'Postal code of the address.' }),
  })
  .openapi({
    title: 'Billing-Address',
    description: 'The billing address associated with the payment method.',
    required: ['country_code', 'postcode'],
  })
  .openapi('BillingAddress')

const CardV2Schema = z
  .object({
    id: PaymentMethodIdSchema,
    type: PaymentMethodTypeV2Schema,
    saved_for: SavedForSchema.exactOptional(),
    created_at: PaymentMethodCreatedAtSchema,
    bin: CardBinSchema.exactOptional(),
    last_four: CardLastFourSchema.exactOptional(),
    expiry_month: CardExpiryMonthSchema.exactOptional(),
    expiry_year: CardExpiryYearSchema.exactOptional(),
    cardholder_name: CardholderNameSchema.exactOptional(),
    brand: CardBrandV2Schema.exactOptional(),
    funding: CardFundingV2Schema.exactOptional(),
    issuer: CardIssuerSchema.exactOptional(),
    issuer_country: CardIssuerCountrySchema.exactOptional(),
    billing_address: BillingAddressSchema.exactOptional(),
    terminal_hardware_id: TerminalHardwareIdSchema.exactOptional(),
  })
  .openapi({
    title: 'Card-v2',
    description:
      'A saved card payment method.\n\n:::info\nThe `checks` object (3DS, CVV, address verification) is not included as it is specific to the transactional payment context.\n:::',
    required: ['id', 'type', 'created_at'],
  })
  .openapi('CardV2')

const RevolutPayV2Schema = z
  .object({
    id: PaymentMethodIdSchema,
    type: PaymentMethodTypeV2Schema,
    saved_for: SavedForSchema.exactOptional(),
    created_at: PaymentMethodCreatedAtSchema,
  })
  .openapi({
    title: 'Revolut-Pay-v2',
    description:
      'A saved Revolut Pay payment method on a customer profile.\n\nBoth Revolut Pay card-backed and account-to-account (A2A) variants are\nrepresented by this single type at the saved payment method level.\nNo underlying card details are exposed here; use the order-level\n`payments[].payment_method` object (types `revolut_pay_card` /\n`revolut_pay_account`) for per-transaction details.',
    required: ['id', 'type', 'created_at'],
  })
  .openapi('RevolutPayV2')

const SepaDirectDebitV2Schema = z
  .object({
    id: PaymentMethodIdSchema,
    type: PaymentMethodTypeV2Schema,
    saved_for: SavedForSchema.exactOptional(),
    debtor_iban_last_four: SepaDirectDebitDebtorIbanLastFourSchema.exactOptional(),
    debtor_name: SepaDirectDebitDebtorNameSchema.exactOptional(),
    mandate_reference: SepaDirectDebitMandateReferenceSchema.exactOptional(),
    billing_address: BillingAddressSchema.exactOptional(),
    created_at: PaymentMethodCreatedAtSchema,
  })
  .openapi({
    title: 'Sepa-Direct-Debit-v2',
    description:
      'A saved SEPA Direct Debit payment method on a customer profile.\n\n:::info\nFor more information, see: [SEPA Direct Debit server-to-server integration](https://developer.revolut.com/docs/guides/merchant/accept-payments/payment-methods/sepa-direct-debit/server-to-server)\n:::',
    required: ['id', 'type', 'created_at'],
  })
  .openapi('SepaDirectDebitV2')

const PaymentMethodV4Schema = z
  .xor([CardV2Schema, RevolutPayV2Schema, SepaDirectDebitV2Schema])
  .openapi({
    title: 'Payment-Method-v4',
    description:
      'A saved payment method on a customer profile.\n\nUse the `type` field to determine the specific payment method variant.\n\n:::note\nThis schema represents a stored credential available for future charges and supports three types: `card`, `revolut_pay`, and `sepa_direct_debit`.\n\nIt differs from the `payment_method` object on a Payment, which is a transactional snapshot of how a specific charge was executed and includes additional detail such as wallet wrappers (`apple_pay`, `google_pay`) and Revolut Pay funding source (`revolut_pay_card` vs `revolut_pay_account`).\n:::',
    discriminator: {
      propertyName: 'type',
      mapping: {
        card: '#/components/schemas/Card-v2',
        revolut_pay: '#/components/schemas/Revolut-Pay-v2',
        sepa_direct_debit: '#/components/schemas/Sepa-Direct-Debit-v2',
      },
    },
  })
  .openapi('PaymentMethodV4')

const CustomerV3Schema = z
  .object({
    id: CustomerIdSchema,
    full_name: FullNameSchema.exactOptional(),
    email: EmailSchema,
    phone: PhoneSchema.exactOptional(),
    created_at: z.iso
      .datetime({ offset: true })
      .openapi({ description: 'The date and time the customer was created.' }),
    updated_at: z.iso
      .datetime({ offset: true })
      .openapi({ description: 'The date and time the customer was last updated.' }),
    payment_methods: z
      .array(PaymentMethodV4Schema)
      .openapi({
        description:
          'Saved payment methods associated with this customer. Each entry represents a\npayment method authorised for future charges. Two types are supported: `card`\n(with full card details) and `revolut_pay` (covers both card-backed and\naccount-to-account Revolut Pay variants). Use the `type` field on each item\nto identify the variant.',
      }),
  })
  .openapi({
    title: 'Customer-v3',
    description: 'A customer object.',
    required: ['id', 'created_at', 'updated_at', 'email', 'payment_methods'],
  })
  .openapi('CustomerV3')

const CustomerUpdateV2Schema = z
  .object({
    full_name: FullNameSchema.exactOptional(),
    email: EmailSchema.exactOptional(),
    phone: PhoneSchema.exactOptional(),
    date_of_birth: DateOfBirthSchema.exactOptional(),
  })
  .openapi({
    title: 'Customer-Update-v2',
    description:
      'The request body for updating a customer.\n\nAll fields are optional. Only the fields provided in the request will be updated.\n\n:::note\n`business_name` is not supported in this version of the API.\n:::',
    required: [],
  })
  .openapi('CustomerUpdateV2')

const CustomerPaymentMethodsV2Schema = z
  .object({
    payment_methods: z
      .array(PaymentMethodV4Schema)
      .openapi({
        description:
          'Saved payment methods associated with this customer. Each entry represents a\npayment method authorised for future charges. Two types are supported: `card`\n(with full card details) and `revolut_pay` (covers both card-backed and\naccount-to-account Revolut Pay variants). Use the `type` field on each item\nto identify the variant.',
      }),
  })
  .openapi({
    title: 'Customer-Payment-Methods-v2',
    description: 'A list of saved payment methods associated with a customer.',
    required: ['payment_methods'],
  })
  .openapi('CustomerPaymentMethodsV2')

const PaymentMethodUpdateSchema = z
  .object({
    saved_for: z
      .literal('customer')
      .exactOptional()
      .openapi({
        description:
          'Update the value of `saved_for` from `merchant` to `customer`.\n\nOnce updated, this payment method can no longer be used for merchant-initiated transactions (MIT). It can only be used when the customer is present on the checkout page.\n\n| Value | Description |\n| ----- | ----------- |\n| `customer` | Restrict this payment method to customer-initiated transactions only. |',
      }),
  })
  .openapi({
    title: 'Payment-Method-Update',
    description: 'Fields to update on a saved payment method.',
    required: [],
  })
  .openapi('PaymentMethodUpdate')

const DisputePaymentIdSchema = z
  .uuid()
  .openapi({
    title: 'Dispute-Payment-Id',
    description: 'The ID of the original payment that was disputed.',
  })
  .openapi('DisputePaymentId')

const DisputePaymentOrderIdSchema = z
  .uuid()
  .openapi({
    title: 'Dispute-Payment-Order-Id',
    description: 'The ID of the order linked to the original disputed payment.',
  })
  .openapi('DisputePaymentOrderId')

const DisputePaymentCreatedAtSchema = z.iso
  .datetime({ offset: true })
  .openapi({
    title: 'Dispute-Payment-Created-At',
    description:
      '[ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) date and time when the original disputed payment was created.',
  })
  .openapi('DisputePaymentCreatedAt')

const DisputePaymentArnSchema = z
  .string()
  .openapi({
    title: 'Dispute-Payment-Arn',
    description:
      'Acquirer Reference Number (ARN) of the original payment.\n\n:::note\nOnly returned for payments made by a card.\n:::',
  })
  .openapi('DisputePaymentArn')

const DisputePaymentAmountSchema = z
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
    title: 'Dispute-Payment-Amount',
    description:
      'Amount of the original payment expressed in minor currency units, according to the [ISO 4217 standard](https://en.wikipedia.org/wiki/ISO_4217). For example, `7034` in `EUR` corresponds to €70.34.\n\n:::info\nConversion between major and minor units varies by currency. For instance, `100` minor units equal £1.00 in `GBP`, whereas in `ISK` they represent 100 units. For more details, see the [ISO 4217 standard](https://en.wikipedia.org/wiki/ISO_4217).\n:::',
  })
  .openapi('DisputePaymentAmount')

const DisputePaymentMethodTypeSchema = z
  .enum([
    'apple_pay',
    'apple_tap_to_pay',
    'card',
    'google_pay',
    'revolut_pay_account',
    'revolut_pay_card',
    'sepa_direct_debit',
  ])
  .openapi({
    title: 'Dispute-Payment-Method-Type',
    description:
      'Type of the payment method used for the original payment.\n\nAvailable values:\n\n| Payment method `type` | Description |\n| --------------------- | ----------- |\n| `apple_pay` | The customer paid the order using Apple Pay. |\n| `apple_tap_to_pay` | The customer paid the order using Apple Tap to Pay. |\n| `card` | The customer paid the order using their credit or debit card. |\n| `google_pay` | The customer paid the order using Google Pay. |\n| `revolut_pay_card` | The customer paid the order via Revolut Pay using their credit or debit card. |\n| `revolut_pay_account` | The customer paid the order via Revolut Pay using their Revolut account. |\n| `sepa_direct_debit` | The customer paid the order via SEPA Direct Debit. |',
  })
  .openapi('DisputePaymentMethodType')

const DisputePaymentMethodApplePaySchema = z
  .object({
    type: DisputePaymentMethodTypeSchema,
    card_brand: CardBrandV2Schema.exactOptional(),
    card_last_four: CardLastFourSchema.exactOptional(),
  })
  .openapi({
    title: 'Dispute-Payment-Method-Apple-Pay',
    description: 'Object containing details of a card used via Apple Pay.',
    required: ['type'],
  })
  .openapi('DisputePaymentMethodApplePay')

const DisputePaymentMethodAppleTapToPaySchema = z
  .object({ type: DisputePaymentMethodTypeSchema })
  .openapi({
    title: 'Dispute-Payment-Method-Apple-Tap-To-Pay',
    description: 'Object containing details of a payment made via Apple Tap to Pay.',
    required: ['type'],
  })
  .openapi('DisputePaymentMethodAppleTapToPay')

const DisputePaymentMethodCardSchema = z
  .object({
    type: DisputePaymentMethodTypeSchema,
    card_brand: CardBrandV2Schema.exactOptional(),
    card_last_four: CardLastFourSchema.exactOptional(),
  })
  .openapi({
    title: 'Dispute-Payment-Method-Card',
    description: 'Object containing details of the card used for the payment.',
    required: ['type'],
  })
  .openapi('DisputePaymentMethodCard')

const DisputePaymentMethodGooglePaySchema = z
  .object({
    type: DisputePaymentMethodTypeSchema,
    card_brand: CardBrandV2Schema.exactOptional(),
    card_last_four: CardLastFourSchema.exactOptional(),
  })
  .openapi({
    title: 'Dispute-Payment-Method-Google-Pay',
    description: 'Object containing details of a card used via Google Pay.',
    required: ['type'],
  })
  .openapi('DisputePaymentMethodGooglePay')

const DisputePaymentMethodRevolutPayAccountSchema = z
  .object({ type: DisputePaymentMethodTypeSchema })
  .openapi({
    title: 'Dispute-Payment-Method-Revolut-Pay-Account',
    description: 'Object containing details of a payment made via Revolut Pay account.',
    required: ['type'],
  })
  .openapi('DisputePaymentMethodRevolutPayAccount')

const DisputePaymentMethodRevolutPayCardSchema = z
  .object({
    type: DisputePaymentMethodTypeSchema,
    card_brand: CardBrandV2Schema.exactOptional(),
    card_last_four: CardLastFourSchema.exactOptional(),
  })
  .openapi({
    title: 'Dispute-Payment-Method-Revolut-Pay-Card',
    description: 'Object containing details of a card used via Revolut Pay.',
    required: ['type'],
  })
  .openapi('DisputePaymentMethodRevolutPayCard')

const DisputePaymentMethodSepaDirectDebitSchema = z
  .object({
    type: DisputePaymentMethodTypeSchema,
    debtor_iban_last_four: SepaDirectDebitDebtorIbanLastFourSchema.exactOptional(),
    debtor_name: SepaDirectDebitDebtorNameSchema.exactOptional(),
    mandate_reference: SepaDirectDebitMandateReferenceSchema.exactOptional(),
  })
  .openapi({
    title: 'Dispute-Payment-Method-Sepa-Direct-Debit',
    description: 'Object containing details of a SEPA Direct Debit payment.',
    required: ['type'],
  })
  .openapi('DisputePaymentMethodSepaDirectDebit')

const DisputePaymentMethodSchema = z
  .xor([
    DisputePaymentMethodApplePaySchema,
    DisputePaymentMethodAppleTapToPaySchema,
    DisputePaymentMethodCardSchema,
    DisputePaymentMethodGooglePaySchema,
    DisputePaymentMethodRevolutPayAccountSchema,
    DisputePaymentMethodRevolutPayCardSchema,
    DisputePaymentMethodSepaDirectDebitSchema,
  ])
  .openapi({
    title: 'Dispute-Payment-Method',
    description:
      'Payment method used for the original payment.\n\nUse the `type` field to determine the specific payment method variant.',
    discriminator: {
      propertyName: 'type',
      mapping: {
        apple_pay: '#/components/schemas/Dispute-Payment-Method-Apple-Pay',
        apple_tap_to_pay: '#/components/schemas/Dispute-Payment-Method-Apple-Tap-To-Pay',
        card: '#/components/schemas/Dispute-Payment-Method-Card',
        google_pay: '#/components/schemas/Dispute-Payment-Method-Google-Pay',
        revolut_pay_account: '#/components/schemas/Dispute-Payment-Method-Revolut-Pay-Account',
        revolut_pay_card: '#/components/schemas/Dispute-Payment-Method-Revolut-Pay-Card',
        sepa_direct_debit: '#/components/schemas/Dispute-Payment-Method-Sepa-Direct-Debit',
      },
    },
  })
  .openapi('DisputePaymentMethod')

const DisputePaymentSchema = z
  .object({
    id: DisputePaymentIdSchema.exactOptional(),
    order_id: DisputePaymentOrderIdSchema.exactOptional(),
    created_at: DisputePaymentCreatedAtSchema.exactOptional(),
    arn: DisputePaymentArnSchema.exactOptional(),
    amount: DisputePaymentAmountSchema.exactOptional(),
    currency: CurrencySchema.exactOptional(),
    payment_method: DisputePaymentMethodSchema.exactOptional(),
  })
  .openapi({
    title: 'Dispute-Payment',
    description:
      'Object containing the details of the original payment associated with the dispute.',
    required: [],
  })
  .openapi('DisputePayment')

const DisputeSchema = z
  .object({
    id: z.uuid().exactOptional().openapi({ description: 'Unique identifier of the dispute.' }),
    state: z
      .enum(['needs_response', 'under_review', 'won', 'lost'])
      .exactOptional()
      .openapi({
        description:
          'Represents the state of the dispute.\n\nIt indicates either the final outcome of the dispute or if further action is required.\n\n| Parameter value | Description |\n| --------------- | ----------- |\n| `needs_response` | Indicates that the dispute requires a response or action from the merchant. |\n| `under_review` | Indicates that the dispute is currently under review, and the outcome is pending. |\n| `won` | Indicates that the dispute has been resolved in favor of the merchant. |\n| `lost` | Indicates that the dispute has been resolved against the merchant. |',
      }),
    substate: z
      .enum([
        'arbitration',
        'lost_accepted',
        'lost_arbitration',
        'lost_expired',
        'lost_pre_arbitration',
        'lost_representment',
        'new',
        'pre_arbitration',
        'representment',
        'won_arbitration',
        'won_pre_arbitration',
        'won_representment',
        'won_reversal',
      ])
      .exactOptional()
      .openapi({
        description:
          'Provides additional granularity about the dispute state.\n\nIt details the progression of the dispute process, showing the current stage or phase.\n\n| Parameter value | Description |\n| --------------- | ----------- |\n| `new` | The dispute has been recently created and is in the initial phase, awaiting further processing. |\n| `lost_expired` | The dispute has been lost due to expiration, likely because the merchant did not respond within the required timeframe. |\n| `pre_arbitration` | The dispute is in the pre-arbitration phase, where preliminary evidence is being gathered before a formal arbitration process. |\n| `won_pre_arbitration`| The merchant secured a win during the pre-arbitration phase based on the evidence provided. |\n| `lost_pre_arbitration` | The dispute was lost during the pre-arbitration phase, indicating that the preliminary review did not favor the merchant. |\n| `lost_accepted` | The loss has been accepted as final, implying that no further contestation is likely or needed. |\n| `arbitration` | The dispute has escalated to the arbitration stage, where a neutral third party is reviewing the evidence. |\n| `won_arbitration` | The merchant won the dispute during the arbitration process. |\n| `lost_arbitration` | The merchant lost the dispute during the arbitration process. |',
      }),
    created_at: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({
        description:
          '[ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) date and time when the dispute was created.',
      }),
    updated_at: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({
        description:
          '[ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) date and time when the dispute was last updated.',
      }),
    response_due_date: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({
        description:
          '[ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) date and time until when the merchant needs to respond to the dispute.\n\nThe response time by default is 15 days after the dispute is created. If no response is provided by this date, the dispute transitions to:\n  - `state: lost`\n  - `substate: lost_expired` ',
      }),
    reason_code: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Dispute reason code from the payment scheme, following standard formats defined by individual providers.\n\n:::info\nFor complete, official lists of dispute codes, see:  \n- **Visa**: [Visa Core Rules and Visa Product and Service Rules](https://corporate.visa.com/content/dam/VCOM/download/about-visa/visa-rules-public.pdf) \n- **Mastercard**: [Chargeback Guide - Merchant Edition](https://www.mastercard.com/content/dam/public/mastercardcom/na/global-site/documents/chargeback-guide.pdf)\n- **American Express**: [Chargeback Codes](https://www.americanexpress.com/content/dam/amex/au/en/merchant/static/chargebackcodeguide.pdf)\n:::',
      }),
    reason_description: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Provides a human-readable explanation for the dispute reason codes.',
      }),
    amount: z
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
        description:
          'Disputed amount expressed in minor currency units, according to the [ISO 4217 standard](https://en.wikipedia.org/wiki/ISO_4217). For example, `7034` in `EUR` corresponds to €70.34.\n\n:::info\nConversion between major and minor units varies by currency. For instance, `100` minor units equal £1.00 in `GBP`, whereas in `ISK` they represent 100 units. For more details, see the [ISO 4217 standard](https://en.wikipedia.org/wiki/ISO_4217).\n:::',
      }),
    currency: CurrencySchema.exactOptional(),
    payment: DisputePaymentSchema.exactOptional(),
  })
  .openapi({
    title: 'Dispute',
    description:
      'A dispute raised against a payment, including its state, reason, amount, and associated payment details.',
    required: [],
  })
  .openapi('Dispute')

const DisputesSchema = z
  .array(DisputeSchema)
  .openapi({ title: 'Disputes', description: 'An array containing a list of disputes.' })
  .openapi('Disputes')

const DisputeEvidenceCreationSchema = z
  .object({
    file: z
      .file()
      .openapi({
        type: 'string',
        format: 'binary',
        description:
          'The single evidence file to upload, sent as a multipart form part named `file`.\n\nThe part must include a `Content-Type` header specifying the media type of the file. Allowed types: `application/pdf`, `image/png`, `image/jpeg`.\n\nMaximum file size: `10MB`.',
      }),
  })
  .openapi({
    title: 'Dispute-Evidence-Creation',
    description: 'Request body for uploading a single piece of dispute evidence.',
    required: ['file'],
  })
  .openapi('DisputeEvidenceCreation')

const DisputeEvidenceSchema = z
  .object({
    id: z
      .uuid()
      .openapi({
        description: 'The ID of the uploaded evidence.',
        example: 'ad2ca3d0-67e9-4cea-b455-e39dd319113d',
      }),
  })
  .openapi({
    title: 'Dispute-Evidence',
    description: 'The ID of an uploaded piece of dispute evidence.',
    required: ['id'],
  })
  .openapi('DisputeEvidence')

const DisputeChallengeReasonSchema = z
  .enum(['product_already_delivered', 'refund_already_issued', 'disagree_with_customers_claim'])
  .openapi({
    title: 'Dispute-Challenge-Reason',
    description: 'The reason for challenging the dispute.',
    example: 'refund_already_issued',
  })
  .openapi('DisputeChallengeReason')

const DisputeChallengeCommentSchema = z
  .string()
  .max(250)
  .openapi({
    title: 'Dispute-Challenge-Comment',
    description: 'Additional explanation or comment for the challenge, if needed.',
    example: 'Refund PDF attached as evidence.',
  })
  .openapi('DisputeChallengeComment')

const DisputeChallengeEvidencesSchema = z
  .array(z.uuid().openapi({ description: 'ID of a previously uploaded evidence file.' }))
  .min(1)
  .max(10)
  .superRefine((items, ctx) => {
    const seen = new Map()
    for (const [i, val] of items.entries()) {
      const key = JSON.stringify(val)
      if (seen.has(key)) ctx.addIssue({ code: 'custom', path: [i] })
      else seen.set(key, i)
    }
  })
  .openapi({
    title: 'Dispute-Challenge-Evidences',
    description:
      'A list of IDs of previously uploaded evidence files to associate with this challenge.\n\n:::warning\nEach evidence ID can only be used for **a single challenge**. This means, that evidences already assigned to a challenge **cannot be reused** for other challenges.\n:::',
    example: ['121ac27c-b00a-44d0-9120-efeeec7c912d', '0010e98d-0653-4dbe-8a4f-70cd5e9491f2'],
  })
  .openapi('DisputeChallengeEvidences')

const DisputeChallengeSchema = z
  .object({
    reason: DisputeChallengeReasonSchema,
    comment: DisputeChallengeCommentSchema.exactOptional(),
    evidences: DisputeChallengeEvidencesSchema,
  })
  .openapi({
    title: 'Dispute-Challenge',
    description:
      'A dispute challenge response submitted by the merchant, including reason, comment, and supporting evidence.',
    required: ['reason', 'evidences'],
  })
  .openapi('DisputeChallenge')

const PaymentRetrievalV2Schema = z
  .object({
    order_id: z.uuid().exactOptional().openapi({ description: 'The ID of the associated order.' }),
    id: PaymentIdSchema,
    state: PaymentStateV2Schema,
    decline_reason: DeclineReasonV2Schema.exactOptional(),
    bank_message: BankMessageSchema.exactOptional(),
    created_at: PaymentCreatedSchema,
    updated_at: PaymentUpdatedSchema,
    token: PaymentTokenSchema.exactOptional(),
    amount: PaymentAmountSchema,
    authorised_amount: PaymentAuthorisedAmountSchema.exactOptional(),
    currency: CurrencySchema.exactOptional(),
    settled_amount: PaymentSettledAmountSchema.exactOptional(),
    settled_currency: PaymentSettledCurrencySchema.exactOptional(),
    payment_method: PaymentMethodV2Schema.exactOptional(),
    authentication_challenge: AuthenticationChallengeSchema.exactOptional(),
    billing_address: AddressV2Schema.exactOptional(),
    risk_level: PaymentRiskLevelSchema.exactOptional(),
    fees: FeesSchema.exactOptional(),
    payer: PayerSchema.exactOptional(),
  })
  .openapi({
    title: 'Payment-Retrieval-v2',
    description:
      'Represents a payment for an order.\n\nFor pre-authorised payments, the `authorised_amount` field tracks the currently authorised amount, which may differ from `amount` during incremental authorisation processing.',
    required: ['id', 'state', 'created_at', 'updated_at', 'amount'],
  })
  .openapi('PaymentRetrievalV2')

const SubscriptionPlansSchema: z.ZodType<SubscriptionPlansType> = z
  .object({
    next_page_token: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({
        description:
          'Token for retrieving the next page of results.\n\nIf not present, there are no more results to retrieve.',
      }),
    subscription_plans: z
      .array(SubscriptionPlanSchema)
      .openapi({ description: 'List of subscription plans.' }),
  })
  .openapi({
    title: 'Subscription-Plans',
    description: 'A paginated list of subscription plans.',
    required: ['subscription_plans'],
  })
  .openapi('SubscriptionPlans')

const SubscriptionPlanCreationSchema: z.ZodType<SubscriptionPlanCreationType> = z
  .object({
    name: SubscriptionPlanNameSchema,
    trial_duration: SubscriptionPlanTrialDurationSchema.exactOptional(),
    variations: z
      .array(SubscriptionPlanVariationCreationSchema)
      .min(1)
      .openapi({
        description:
          'List of subscription plan variations (e.g., monthly, yearly pricing options).',
      }),
  })
  .openapi({
    title: 'Subscription-Plan-Creation',
    description:
      'Request body for creating a subscription plan, including its name and pricing variations.',
    required: ['name', 'variations'],
  })
  .openapi('SubscriptionPlanCreation')

const SubscriptionExternalReferenceSchema = z
  .string()
  .max(1024)
  .openapi({
    title: 'Subscription-External-Reference',
    description:
      "Optional external reference for the subscription.\n\nUse this field to store your own system's identifier for easy tracking and correlation.",
  })
  .openapi('SubscriptionExternalReference')

const SubscriptionStateSchema = z
  .enum(['pending', 'active', 'overdue', 'paused', 'cancelled', 'finished'])
  .openapi({
    title: 'Subscription-State',
    description:
      'The state of the subscription.\n\n| State | Description |\n| ----- | ----------- |\n| `pending` | The subscription has been created but is not yet active. This typically occurs when awaiting the first payment or setup completion. |\n| `active` | The subscription is currently active and billing cycles are processing normally. |\n| `overdue` | The subscription has a failed payment and is awaiting resolution. |\n| `paused` | The subscription has been temporarily paused and no billing will occur. |\n| `cancelled` | The subscription has been cancelled and will not renew. |\n| `finished` | The subscription has completed all billing cycles (for limited-duration subscriptions). |',
  })
  .openapi('SubscriptionState')

const SubscriptionPaymentMethodTypeSchema = z
  .enum(['automatic', 'manual'])
  .openapi({
    title: 'Subscription-Payment-Method-Type',
    description:
      "The type of payment method used for the subscription.\n\n| Type | Description |\n| ---- | ----------- |\n| `automatic` | Payments are automatically charged to the customer's saved payment method. |\n| `manual` | Payments require manual processing by the customer. |",
  })
  .openapi('SubscriptionPaymentMethodType')

const SubscriptionCreatedSchema = z.iso
  .datetime({ offset: true })
  .openapi({
    title: 'Subscription-Created',
    description:
      'The date and time the subscription was created in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format.',
  })
  .openapi('SubscriptionCreated')

const SubscriptionUpdatedSchema = z.iso
  .datetime({ offset: true })
  .openapi({
    title: 'Subscription-Updated',
    description:
      'The date and time the subscription was last updated in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format.',
  })
  .openapi('SubscriptionUpdated')

const SubscriptionStartDateSchema = z.iso
  .datetime({ offset: true })
  .nullable()
  .openapi({
    title: 'Subscription-Start-Date',
    description:
      'The date and time the subscription started in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format.\n\nThis field is `null` until the subscription becomes active.',
  })
  .openapi('SubscriptionStartDate')

const SubscriptionCycleIdSchema = z
  .uuid()
  .openapi({
    title: 'Subscription-Cycle-Id',
    description: 'Unique identifier for the subscription cycle.',
  })
  .openapi('SubscriptionCycleId')

const SubscriptionTrialDurationSchema = z.iso
  .duration()
  .regex(/^P[0-9]+D$/)
  .openapi({
    title: 'Subscription-Trial-Duration',
    description:
      'The trial period duration for this subscription in [ISO 8601 duration format](https://en.wikipedia.org/wiki/ISO_8601#Durations) (e.g., "P14D" for 14 days).\n\n### Override plan defaults\n\nSubscription plans can define a default trial duration. When creating a subscription, you can use this field to override the plan\'s default trial period:\n\n| Field value | Behaviour | Example |\n| ----------- | -------- | ------- |\n| **Not provided** | Uses the trial duration defined in the plan (if any) | Plan has `"P7D"` → subscription gets 7-day trial |\n| **Different value** | Overrides the plan\'s default trial duration | Plan has `"P7D"` → set to `"P30D"` for promotional offer, or `"P3D"` to reduce |\n| **`"P0D"`** | Explicitly skips the trial period | Plan has `"P7D"` → set to `"P0D"` to skip trial entirely |\n\n:::note\nOnly days (`D`) are allowed. Time components such as hours, minutes, or seconds are not permitted.\n:::',
    example: 'P14D',
  })
  .openapi('SubscriptionTrialDuration')

const SubscriptionTrialEndDateSchema = z.iso
  .datetime({ offset: true })
  .nullable()
  .openapi({
    title: 'Subscription-Trial-End-Date',
    description:
      "The date and time when the subscription's trial period ends in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format.\n\nThis value is automatically calculated by the system as: `start_date` + `trial_duration`\n\nThe `trial_duration` used in the calculation comes from either:\n- The subscription's custom `trial_duration` (if provided at creation time), or\n- The plan's default `trial_duration` (if no override was specified)\n\nThis field is `null` when the subscription has no trial period (e.g., when `trial_duration` is not set or is `\"P0D\"`).",
    example: '2025-06-19T21:00:00.036001Z',
  })
  .openapi('SubscriptionTrialEndDate')

const SetupOrderIdSchema = z
  .uuid()
  .openapi({
    title: 'Setup-Order-Id',
    description:
      "The ID of the order created for handling the setup payment for the subscription.\n\nUse the [Retrieve an order](https://developer.revolut.com/docs/api/merchant#retrieve-order) endpoint with this ID to get order details, including the `checkout_url` for redirecting customers to the Hosted Payment Page or the `token` for widget integration.\n\n:::note\nThe order is created in parallel to the subscription and is used to collect the initial payment and save the customer's payment method for future billing cycles.\n:::",
  })
  .openapi('SetupOrderId')

const SubscriptionScheduledActionTypeSchema = z
  .enum(['cancel', 'change_plan_variation'])
  .openapi({
    title: 'Subscription-Scheduled-Action-Type',
    description:
      'The type of the scheduled action.\n\n| Value | Description |\n| ----- | ----------- |\n| `cancel` | A cancellation scheduled to take effect at the end of the current billing cycle. |\n| `change_plan_variation` | A plan variation change scheduled to take effect at the end of the current billing cycle. |',
    example: 'change_plan_variation',
  })
  .openapi('SubscriptionScheduledActionType')

const SubscriptionChangePlanReasonSchema = z
  .enum(['customer_request', 'merchant_request'])
  .default('merchant_request')
  .openapi({
    title: 'Subscription-Change-Plan-Reason',
    description:
      'The reason for the scheduled action. This field is informational and does not affect how the action is processed.\n\n| Value | Description |\n| ----- | ----------- |\n| `customer_request` | The action was requested by the customer. |\n| `merchant_request` | The action was initiated by the merchant. |',
    example: 'customer_request',
  })
  .openapi('SubscriptionChangePlanReason')

const SubscriptionScheduledActionCancelSchema = z
  .object({
    type: SubscriptionScheduledActionTypeSchema,
    reason: SubscriptionChangePlanReasonSchema,
  })
  .openapi({
    title: 'Subscription-Scheduled-Action-Cancel',
    description: 'A cancellation scheduled to take effect at the end of the current billing cycle.',
    required: ['type', 'reason'],
  })
  .openapi('SubscriptionScheduledActionCancel')

const SubscriptionScheduledActionChangePlanSchema = z
  .object({
    type: SubscriptionScheduledActionTypeSchema,
    reason: SubscriptionChangePlanReasonSchema,
    plan_variation_id: SubscriptionPlanVariationIdSchema,
    plan_variation_phase_id: SubscriptionPlanPhaseIdSchema.exactOptional(),
  })
  .openapi({
    title: 'Subscription-Scheduled-Action-Change-Plan',
    description:
      'A plan variation change scheduled to take effect at the end of the current billing cycle.',
    required: ['type', 'reason', 'plan_variation_id'],
  })
  .openapi('SubscriptionScheduledActionChangePlan')

const SubscriptionScheduledActionSchema = z
  .xor([SubscriptionScheduledActionCancelSchema, SubscriptionScheduledActionChangePlanSchema])
  .openapi({
    title: 'Subscription-Scheduled-Action',
    description:
      'A pending scheduled action on the subscription, applied at the end of the current billing cycle.',
    discriminator: {
      propertyName: 'type',
      mapping: {
        cancel: '#/components/schemas/Subscription-Scheduled-Action-Cancel',
        change_plan_variation: '#/components/schemas/Subscription-Scheduled-Action-Change-Plan',
      },
    },
  })
  .openapi('SubscriptionScheduledAction')

const SubscriptionSchema = z
  .object({
    id: SubscriptionIdSchema,
    external_reference: SubscriptionExternalReferenceSchema.exactOptional(),
    state: SubscriptionStateSchema,
    customer_id: CustomerIdSchema,
    plan_id: SubscriptionPlanIdSchema,
    plan_variation_id: SubscriptionPlanVariationIdSchema,
    payment_method_type: SubscriptionPaymentMethodTypeSchema,
    payment_method_id: PaymentMethodIdSchema.exactOptional(),
    created_at: SubscriptionCreatedSchema,
    updated_at: SubscriptionUpdatedSchema,
    start_date: SubscriptionStartDateSchema.exactOptional(),
    current_cycle_id: SubscriptionCycleIdSchema,
    trial_duration: SubscriptionTrialDurationSchema.exactOptional(),
    trial_end_date: SubscriptionTrialEndDateSchema.exactOptional(),
    setup_order_id: SetupOrderIdSchema.exactOptional(),
    scheduled_action: SubscriptionScheduledActionSchema.exactOptional(),
  })
  .openapi({
    title: 'Subscription',
    description:
      'A subscription, including its state, plan, customer, payment method, and current billing cycle.',
    required: [
      'id',
      'state',
      'customer_id',
      'plan_id',
      'plan_variation_id',
      'payment_method_type',
      'created_at',
      'updated_at',
      'current_cycle_id',
    ],
  })
  .openapi('Subscription')

const SubscriptionsSchema = z
  .object({
    next_page_token: NextPageTokenSchema.exactOptional(),
    subscriptions: z.array(SubscriptionSchema).openapi({ description: 'List of subscriptions.' }),
  })
  .openapi({
    title: 'Subscriptions',
    description: 'A paginated list of subscriptions.',
    required: ['subscriptions'],
  })
  .openapi('Subscriptions')

const SetupOrderRedirectURLSchema = z
  .url()
  .regex(/^https?:\/{2}.+/)
  .max(2000)
  .openapi({
    title: 'Setup-Order-Redirect-URL',
    description:
      'The URL to which the customer is redirected after completing the setup order on the Revolut Hosted Payment Page.\n\nWhen provided, the response will include a `setup_order_id`. Use the [Retrieve an order](https://developer.revolut.com/docs/api/merchant#retrieve-order) endpoint with this `setup_order_id` to get the `checkout_url` for redirecting the customer to the Hosted Payment Page.\n\n:::warning\nRestrictions:\n- Must be a valid URI as defined by [RFC 3986](https://datatracker.ietf.org/doc/html/rfc3986)\n- URI scheme is required and must be either `http` or `https`\n- URI host is required and cannot be `localhost` or an IP address\n- Max length: `2000`\n- Reserved or invalid characters must be percent-encoded (for example, use `%20` instead of a space)\n:::',
  })
  .openapi('SetupOrderRedirectURL')

const SubscriptionCreationSchema = z
  .object({
    plan_variation_id: SubscriptionPlanVariationIdSchema,
    customer_id: CustomerIdSchema,
    external_reference: SubscriptionExternalReferenceSchema.exactOptional(),
    setup_order_redirect_url: SetupOrderRedirectURLSchema.exactOptional(),
    trial_duration: SubscriptionTrialDurationSchema.exactOptional(),
  })
  .openapi({
    title: 'Subscription-Creation',
    description:
      'Request body for creating a new subscription, including the plan variation, customer, and optional trial configuration.',
    required: ['plan_variation_id', 'customer_id'],
  })
  .openapi('SubscriptionCreation')

const SubscriptionUpdateSchema = z
  .object({ external_reference: SubscriptionExternalReferenceSchema.exactOptional() })
  .openapi({
    title: 'Subscription-Update',
    description: "Request body for updating a subscription's external reference.",
    required: [],
  })
  .openapi('SubscriptionUpdate')

const SubscriptionChangePlanSchema = z
  .object({
    plan_variation_id: SubscriptionPlanVariationIdSchema,
    plan_variation_phase_id: SubscriptionPlanPhaseIdSchema.exactOptional(),
    scheduled: z
      .literal('at_cycle_end')
      .openapi({
        description:
          'When the plan change should take effect.\n\n| Value | Description |\n| ----- | ----------- |\n| `at_cycle_end` | The change is applied at the end of the current billing cycle. |',
        example: 'at_cycle_end',
      }),
    reason: SubscriptionChangePlanReasonSchema.exactOptional(),
  })
  .openapi({
    title: 'Subscription-Change-Plan',
    description:
      "Request body for changing a subscription's plan variation, including the new variation ID and scheduling.",
    required: ['plan_variation_id', 'scheduled'],
  })
  .openapi('SubscriptionChangePlan')

const SubscriptionUpdateRenewalDateSchema = z
  .object({
    renewal_date: z.iso
      .datetime({ offset: true })
      .openapi({
        description:
          'The new renewal date for the subscription, expressed as a UTC date-time value.\n\nMust be set to a date later than the current renewal date; earlier dates are rejected.',
        example: '2026-07-01T00:00:00Z',
      }),
  })
  .openapi({
    title: 'Subscription-Update-Renewal-Date',
    description: "Request body for updating a subscription's renewal date.",
    required: ['renewal_date'],
  })
  .openapi('SubscriptionUpdateRenewalDate')

const CycleNumberSchema = z
  .int()
  .min(1)
  .openapi({
    title: 'Cycle-Number',
    description:
      'The sequential cycle number within the subscription.\n\nStarts at `1` for the first cycle and increments with each new billing cycle.',
  })
  .openapi('CycleNumber')

const PreviousCycleIdSchema = z
  .uuid()
  .nullable()
  .openapi({
    title: 'Previous-Cycle-Id',
    description:
      'The unique identifier of the previous billing cycle.\n\nThis field is `null` for the first cycle in a subscription.',
  })
  .openapi('PreviousCycleId')

const SubscriptionCycleStateSchema = z
  .enum(['pending', 'active', 'finished'])
  .openapi({
    title: 'Subscription-Cycle-State',
    description:
      'The state of the subscription cycle.\n\n| State | Description |\n| ----- | ----------- |\n| `pending` | The cycle has been created but has not yet started. A cycle can enter this state automatically when usage is reported for a future cycle via `POST /api/subscription-usages`. |\n| `active` | The cycle is currently active and in progress. |\n| `finished` | The cycle has completed. |',
  })
  .openapi('SubscriptionCycleState')

const SubscriptionCycleStartDateSchema = z.iso
  .datetime({ offset: true })
  .openapi({
    title: 'Subscription-Cycle-Start-Date',
    description:
      'The date and time the subscription cycle starts in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format.',
  })
  .openapi('SubscriptionCycleStartDate')

const SubscriptionCycleEndDateSchema = z.iso
  .datetime({ offset: true })
  .openapi({
    title: 'Subscription-Cycle-End-Date',
    description:
      'The date and time the subscription cycle ends in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format.',
  })
  .openapi('SubscriptionCycleEndDate')

const SubscriptionCycleUsageCutoffDateSchema = z.iso
  .datetime({ offset: true })
  .openapi({
    title: 'Subscription-Cycle-Usage-Cutoff-Date',
    description:
      "The deadline for submitting or correcting usage records for this cycle, in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format.\n\nSet to 12 hours after the cycle's `end_date` by default. After this time, Revolut aggregates all reported usage records and creates the `post_billing_order_id` to initiate the charge.\n\n:::note\nOnly present for cycles that include usage-based subscription items.\n:::",
  })
  .openapi('SubscriptionCycleUsageCutoffDate')

const SubscriptionCyclePostBillingOrderIdSchema = z
  .uuid()
  .openapi({
    title: 'Subscription-Cycle-Post-Billing-Order-Id',
    description:
      "The ID of the order created after the cycle's `usage_cutoff_date` to charge usage-based items accumulated during the cycle.\n\n| Scenario | Detail |\n| -------- | ------ |\n| Ongoing subscription | This order also acts as the next cycle's `order_id`, combining usage post-billing for the current cycle with pre-billing for the next. |\n| Last cycle | A standalone finishing order is created to charge all usage from this cycle. |\n| Subscription ended with unpaid cycles | The finishing order consolidates all outstanding usage charges, including any from previous cycles where payment failed. |\n\n:::note\nOnly present for cycles that include usage-based subscription items.\n:::",
  })
  .openapi('SubscriptionCyclePostBillingOrderId')

const SubscriptionCycleTrialSchema = z
  .boolean()
  .default(false)
  .openapi({
    title: 'Subscription-Cycle-Trial',
    description:
      "Indicates whether this billing cycle occurs during the subscription's trial period.\n\nThis value is automatically calculated by the system based on the cycle's timing relative to the subscription's trial period. Returns `true` if the cycle is within the trial period (before `trial_end_date`), otherwise `false`. \n\nTrial cycles typically have different billing behavior, such as reduced or zero charges.",
    example: false,
  })
  .openapi('SubscriptionCycleTrial')

const SubscriptionCycleSchema = z
  .object({
    id: SubscriptionCycleIdSchema,
    subscription_id: SubscriptionIdSchema,
    plan_variation_id: SubscriptionPlanVariationIdSchema,
    plan_variation_phase_id: SubscriptionPlanPhaseIdSchema.exactOptional(),
    number: CycleNumberSchema,
    previous_cycle_id: PreviousCycleIdSchema.exactOptional(),
    state: SubscriptionCycleStateSchema,
    start_date: SubscriptionCycleStartDateSchema.exactOptional(),
    end_date: SubscriptionCycleEndDateSchema.exactOptional(),
    usage_cutoff_date: SubscriptionCycleUsageCutoffDateSchema.exactOptional(),
    order_id: OrderIdSchema.exactOptional(),
    post_billing_order_id: SubscriptionCyclePostBillingOrderIdSchema.exactOptional(),
    trial: SubscriptionCycleTrialSchema.exactOptional(),
  })
  .openapi({
    title: 'Subscription-Cycle',
    description:
      'A single billing cycle of a subscription, including its state, dates, and associated order.',
    required: ['id', 'subscription_id', 'plan_variation_id', 'number', 'state'],
  })
  .openapi('SubscriptionCycle')

const SubscriptionCyclesSchema = z
  .object({
    next_page_token: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({
        description:
          'Token for retrieving the next page of results.\n\nIf not present, there are no more results to retrieve.',
      }),
    cycles: z
      .array(SubscriptionCycleSchema)
      .openapi({ description: 'List of subscription cycles.' }),
  })
  .openapi({
    title: 'Subscription-Cycles',
    description: 'A paginated list of subscription billing cycles.',
    required: ['cycles'],
  })
  .openapi('SubscriptionCycles')

const SubscriptionUsageIdSchema = z
  .uuid()
  .openapi({
    title: 'Subscription-Usage-Id',
    description: 'The unique identifier of the usage record.',
  })
  .openapi('SubscriptionUsageId')

const SubscriptionUsageDateSchema = z.iso
  .datetime({ offset: true })
  .openapi({
    title: 'Subscription-Usage-Date',
    description:
      'The timestamp indicating when the consumption actually occurred.\n\n| Constraint | Detail |\n| ---------- | ------ |\n| Format | [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) date-time string (e.g., `YYYY-MM-DDTHH:mm:ssZ`). |\n| Timezone | Must be UTC. |\n| Validation | Revolut uses this to identify the applicable billing cycle. Accepted for the active cycle (`start_date ≤ usage_date < end_date`), for a recently ended cycle before its `usage_cutoff_date`, and for the one next upcoming cycle. Other dates are rejected. |',
    example: '2026-03-01T21:00:00Z',
  })
  .openapi('SubscriptionUsageDate')

const SubscriptionUsageQuantitySchema = z
  .number()
  .gt(0)
  .openapi({
    title: 'Subscription-Usage-Quantity',
    description:
      'The quantity of consumption to record for this usage report. \n\nSupports up to 20 digits before and 20 digits after the decimal point.',
    example: 100.5,
  })
  .openapi('SubscriptionUsageQuantity')

const SubscriptionUsageMetadataSchema = z
  .record(z.string(), z.union([z.string(), z.number(), z.boolean()]))
  .refine((val) => Object.keys(val).length <= 50)
  .openapi({
    title: 'Subscription-Usage-Metadata',
    description:
      'Key-value pairs you can attach to a usage record for your own tracking and reporting purposes.\n\n| Constraint | Detail |\n| ---------- | ------ |\n| Keys | Maximum 50 keys per record. |\n| Value types | String, number, or boolean only. |\n| Number precision | Up to 20 digits before and 20 digits after the decimal point. |',
    example: { user_id: '12345', api_version: 'v2', usage_rate: 1.5, is_trial: true },
  })
  .openapi('SubscriptionUsageMetadata')

const SubscriptionUsageCreatedDateSchema = z.iso
  .datetime({ offset: true })
  .openapi({
    title: 'Subscription-Usage-Created-Date',
    description:
      'The date and time the usage record was created in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format.',
    example: '2026-03-01T21:05:00Z',
  })
  .openapi('SubscriptionUsageCreatedDate')

const SubscriptionUsageUpdatedDateSchema = z.iso
  .datetime({ offset: true })
  .openapi({
    title: 'Subscription-Usage-Updated-Date',
    description:
      'The date and time the usage record was last updated in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format.',
    example: '2026-03-01T21:05:00Z',
  })
  .openapi('SubscriptionUsageUpdatedDate')

const SubscriptionUsageSchema = z
  .object({
    id: SubscriptionUsageIdSchema,
    subscription_id: SubscriptionIdSchema,
    subscription_cycle_id: SubscriptionCycleIdSchema,
    subscription_item_code: SubscriptionItemCodeSchema,
    usage_date: SubscriptionUsageDateSchema,
    quantity: SubscriptionUsageQuantitySchema,
    metadata: SubscriptionUsageMetadataSchema.exactOptional(),
    created_at: SubscriptionUsageCreatedDateSchema,
    updated_at: SubscriptionUsageUpdatedDateSchema,
  })
  .openapi({
    title: 'Subscription-Usage',
    description:
      'A recorded usage entry for a subscription item, including quantity, date, and metadata.',
    required: [
      'id',
      'subscription_id',
      'subscription_cycle_id',
      'subscription_item_code',
      'usage_date',
      'quantity',
      'created_at',
      'updated_at',
    ],
  })
  .openapi('SubscriptionUsage')

const SubscriptionUsagesSchema = z
  .object({
    next_page_token: NextPageTokenSchema.exactOptional(),
    subscription_usages: z
      .array(SubscriptionUsageSchema)
      .exactOptional()
      .openapi({ description: 'List of subscription usages.' }),
  })
  .openapi({
    title: 'Subscription-Usages',
    description: 'A paginated list of subscription usage entries.',
    required: [],
  })
  .openapi('SubscriptionUsages')

const SubscriptionUsageCreationSchema = z
  .object({
    subscription_id: SubscriptionIdSchema,
    subscription_item_code: SubscriptionItemCodeSchema,
    usage_date: SubscriptionUsageDateSchema,
    quantity: SubscriptionUsageQuantitySchema,
    metadata: SubscriptionUsageMetadataSchema.exactOptional(),
  })
  .openapi({
    title: 'Subscription-Usage-Creation',
    description:
      'Request body for recording usage against a subscription item, including the subscription ID, item code, date, and quantity.',
    required: ['subscription_id', 'subscription_item_code', 'usage_date', 'quantity'],
  })
  .openapi('SubscriptionUsageCreation')

const SubscriptionUsageUpdateSchema = z
  .object({
    quantity: SubscriptionUsageQuantitySchema.exactOptional(),
    metadata: SubscriptionUsageMetadataSchema.exactOptional(),
  })
  .openapi({
    title: 'Subscription-Usage-Update',
    description:
      "Request body for updating a recorded subscription usage entry's quantity or metadata.",
    required: [],
  })
  .openapi('SubscriptionUsageUpdate')

const PayoutStateSchema = z
  .enum(['processing', 'completed', 'failed'])
  .openapi({ title: 'Payout-State', description: 'The state of the payout.' })
  .openapi('PayoutState')

const PayoutIdSchema = z
  .uuid()
  .openapi({ title: 'Payout-Id', description: 'Permanent payout ID used for payouts operations.' })
  .openapi('PayoutId')

const PayoutDestinationTypeSchema = z
  .enum(['current_pocket', 'external_beneficiary'])
  .openapi({
    title: 'Payout-Destination-Type',
    description:
      'The destination of the payout funds when a merchant initiates a withdrawal from their merchant account.\n\n| Destination type | Description |\n| ---------------- | ----------- |\n| `current_pocket` | The funds were moved from the merchant account to the business account within the platform. This indicates an **internal transfer**, allowing the merchant to access the funds within their own business account. |\n| `external_beneficiary` | The funds were transferred to an external bank account or beneficiary outside the platform. This indicates a **transfer to an external account**, enabling the merchant to withdraw funds to external financial institutions. |',
  })
  .openapi('PayoutDestinationType')

const PayoutAmountSchema = z
  .preprocess(
    (val) =>
      typeof val === 'number' && Number.isSafeInteger(val)
        ? BigInt(val)
        : typeof val === 'string' && /^-?\d+$/.test(val)
          ? BigInt(val)
          : val,
    z.int64().min(1n),
  )
  .openapi({
    type: 'integer',
    format: 'int64',
    minimum: 1,
    title: 'Payout-Amount',
    description:
      'The total amount of the payout in minor currency units. For example, `7034` represents €70.34.',
  })
  .openapi('PayoutAmount')

const PayoutSchema = z
  .object({
    id: PayoutIdSchema,
    state: PayoutStateSchema,
    created_at: z.iso
      .datetime({ offset: true })
      .openapi({ description: 'The date and time the payout was created.' }),
    destination_type: PayoutDestinationTypeSchema,
    amount: PayoutAmountSchema.exactOptional(),
    currency: CurrencySchema.exactOptional(),
  })
  .openapi({
    title: 'Payout',
    description:
      'A payout to a merchant, including its state, amount, currency, and destination type.',
    required: ['id', 'state', 'created_at', 'destination_type'],
  })
  .openapi('Payout')

const ReportRunFromSchema = z.iso
  .datetime({ offset: true })
  .openapi({
    title: 'Report-Run-From',
    description:
      "This parameter specifies the start boundary for filtering report data. It accepts ETC/UTC date and time in [ISO 8601 format](https://en.wikipedia.org/wiki/ISO_8601) and includes all matching records on or after this timestamp.\n\nCombined with the `to` parameter, this determines the report's timeframe, including all matching records between the two values.\n\nFor example, by setting the `from` parameter to `2021-01-01T00:00:00Z`, the report will include matching records from the first second of January 1, 2021, UTC, and onwards.",
  })
  .openapi('ReportRunFrom')

const ReportRunToSchema = z.iso
  .datetime({ offset: true })
  .openapi({
    title: 'Report-Run-To',
    description:
      'This parameter specifies the end boundary for filtering report data. It accepts ETC/UTC date and time in [ISO 8601 format](https://en.wikipedia.org/wiki/ISO_8601) and includes all matching records before this timestamp (exclusive).\n\nCombined with the `from` parameter, this determines the timeframe for the report, including all matching records between the two values.\n\nFor example, setting the `to` parameter to `2021-12-31T23:59:59Z` will include all matching records in the report up to, but not including, the last second of December 31, 2021, UTC.',
  })
  .openapi('ReportRunTo')

const ReportRunEntityTypesSchema = z
  .array(z.enum(['payment', 'refund', 'dispute']))
  .openapi({
    title: 'Report-Run-Entity-Types',
    description:
      'Select source entity families to be included in the report.\n\n| Value | Description |\n| ----- | ----------- |\n| `payment` | Include rows originating from payment settlement activity. |\n| `refund` | Include rows originating from refund activity. |\n| `dispute` | Include rows originating from dispute and chargeback activity. |\n\n:::note\nThese values are filter input categories. They do not map 1:1 to the CSV `type` output column. For example, a settlement report filtered with `payment`, `refund`, and `dispute` can still return CSV `type` values such as `SETTLEMENT`, `REFUND`, `CHARGEBACK`, and `CHARGEBACK_REVERSAL`.\n:::',
  })
  .openapi('ReportRunEntityTypes')

const ReportRunEntityStatesSchema = z
  .array(z.enum(['completed', 'processing', 'cancelled', 'reverted']))
  .openapi({
    title: 'Report-Run-Entity-States',
    description:
      'Select transactions by state to be included in the report.\n\n| Value | Description |\n| ----- | ----------- |\n| `completed` | Include transactions that reached their final successful state. |\n| `processing` | Include transactions that are still being processed. |\n| `cancelled` | Include transactions that were cancelled before final completion. |\n| `reverted` | Include transactions that were reversed after initial creation. |\n\nIf not provided, only `completed` transactions will be included in the report.',
  })
  .openapi('ReportRunEntityStates')

const ReportRunCurrencySchema = z
  .string()
  .length(3)
  .openapi({
    title: 'Report-Run-Currency',
    description:
      'Select transactions with specific currencies to include in the report. Provide [ISO 4217](https://en.wikipedia.org/wiki/ISO_4217) currency code in upper case.\n\n:::info\nFor more information about the supported currencies, see: [Help Center](https://help.revolut.com/business/help/merchant-accounts/payments/in-which-currencies-can-i-accept-payments/).\n:::',
    example: 'GBP',
  })
  .openapi('ReportRunCurrency')

const ReportRunLocationIdSchema = z
  .uuid()
  .openapi({
    title: 'Report-Run-Location-Id',
    description:
      'Select transactions by location ID to be included in the report.\n\n:::info\nFor more information, see: [Locations](https://developer.revolut.com/docs/api/merchant#tag-locations).\n:::        ',
  })
  .openapi('ReportRunLocationId')

const ReportRunFilterSchema = z
  .object({
    from: ReportRunFromSchema,
    to: ReportRunToSchema,
    entity_types: ReportRunEntityTypesSchema.exactOptional(),
    entity_states: ReportRunEntityStatesSchema.exactOptional(),
    currency: ReportRunCurrencySchema.exactOptional(),
    location_id: ReportRunLocationIdSchema.exactOptional(),
  })
  .openapi({
    title: 'Report-Run-Filter',
    description:
      'Filtering parameters to be applied to the report.\n\n:::note\nFor `settlement_report` and `custom_report`, `from` and `to` are evaluated against the transaction `created_date`, not the original payment-start timeframe or the `payment_created_date` and `payment_captured_date` columns.\n:::',
    required: ['from', 'to'],
  })
  .openapi('ReportRunFilter')

const ReportRunFormatSchema = z
  .literal('csv')
  .openapi({
    title: 'Report-Run-Format',
    description: 'Format of the generated report file.',
    example: 'csv',
  })
  .openapi('ReportRunFormat')

const ReportRunTypeSchema = z
  .enum([
    'settlement_report',
    'custom_report',
    'payments_report',
    'payout_statement_report',
    'icpp_fee_breakdown_report',
  ])
  .openapi({
    title: 'Report-Run-Type',
    description:
      'Type of the report.\n\n  | Report type | Description |\n  | -------------- | ----------- |\n  | `settlement_report` | All settled transactions associated with a Merchant account, with a configurable set of columns. |\n  | `custom_report` | Settled and processing transactions associated with a Merchant account, with a configurable set of columns. |\n  | `payments_report` | Payments report provides details of all payments associated with a Merchant account, including failed and declined payments. Supports filtering by `from` and `to` creation timestamps, and optionally by `entity_states`. |\n  | `payout_statement_report`    | Payout statement Reports provide a detailed breakdown of all transactions contributing to a specific payout amount. It requires the additional parameter `filter.payout_id`, which should be obtained from the payout ID retrieved via the [payout list endpoint](https://developer.revolut.com/docs/api/merchant#retrieve-payout-list) or from [webhook events](https://developer.revolut.com/docs/api/merchant#webhook-webhook-event). |\n  | `icpp_fee_breakdown_report`  | IC++ fee breakdown reports provide a detailed breakdown of fees for each IC++ transaction related to a payout. It requires the additional parameter `filter.icpp_charge_id`, which should be obtained from the `related_icpp_charge_id` column in the Payout statement report. A separate report should be generated for each IC++ transaction. |',
    example: 'settlement_report',
  })
  .openapi('ReportRunType')

const ReportRunTimezoneSchema = z
  .string()
  .openapi({
    title: 'Report-Run-Timezone',
    description:
      'Defaults to `ETC/UTC`. Defines the output timezone for all timestamps displayed in the report.\n\nHas no effect on `from` or `to` parameters.',
    example: 'Europe/London',
  })
  .openapi('ReportRunTimezone')

const ReportRunSettlementOptionsSchema = z
  .object({
    timezone: ReportRunTimezoneSchema.exactOptional(),
    columns: z
      .array(
        z.enum([
          'transaction_id',
          'order_id',
          'original_order_id',
          'started_date',
          'updated_date',
          'completed_date',
          'payment_created_date',
          'payment_captured_date',
          'type',
          'state',
          'description',
          'merchant_order_ext_ref',
          'customer_id',
          'amount',
          'currency',
          'settlement_amount',
          'settlement_currency',
          'payment_method',
          'fee_amount',
          'fee_currency',
          'processing_fee_amount',
          'processing_fee_currency',
          'browser_url',
          'location_id',
        ]),
      )
      .exactOptional()
      .openapi({
        description:
          "Names of the columns to be included in the report.\n\nIf the `columns` parameter is not defined in the request, all available columns will be included in the report. An empty array will return an error.\n\nAvailable columns:\n\n  | Column name | Description |\n  | ----------- | ----------- |\n  | `transaction_id` | Unique identifier of the ledger transaction related to an order. |\n  | `order_id` | Unique identifier of the order. |\n  | `original_order_id` | Unique identifier of the original order. For refunds and chargebacks, references the order being reversed. |\n  | `started_date` | Start timestamp shown on the row. For payment rows, this is the payment start timestamp. For non-payment rows such as refunds and chargebacks, this is the transaction start timestamp. Separate from the report filter timeframe. |\n  | `updated_date` | Last update timestamp shown on the row. For payment rows, this is the payment update timestamp. For non-payment rows such as refunds and chargebacks, this is the transaction update timestamp. Separate from the report filter timeframe. |\n  | `completed_date` | Completion timestamp shown on the row. For payment rows, this is the payment completion timestamp. For non-payment rows such as refunds and chargebacks, this is the transaction completion timestamp. Separate from the report filter timeframe. |\n  | `payment_created_date` | Payment authorisation or creation timestamp for rows linked to a payment. Empty for refunds and non-payment-related rows where no payment timestamp applies. This is returned data, not the report filter key. |\n  | `payment_captured_date` | Payment capture timestamp for rows linked to a captured payment. Empty for refunds, non-payment-related rows, or payments not captured. This is returned data, not the report filter key. |\n  | `type` | Settlement report row type. A partial-settlement is represented by separate `SETTLEMENT` and `REFUND` rows, not a dedicated type. |\n  | `state` | State of the transaction. |\n  | `description` | Description of the order. |\n  | `merchant_order_ext_ref` | Merchant's order reference. The value of the `merchant_order_data.reference` field set when the order was created. |\n  | `customer_id` | Unique identifier of the customer. |\n  | `amount` | Total amount of the order. |\n  | `currency` | The [ISO 4217](https://en.wikipedia.org/wiki/ISO_4217) currency code of the order. |\n  | `settlement_amount` | Total amount settled on the merchant's account. |\n  | `settlement_currency` | The [ISO 4217](https://en.wikipedia.org/wiki/ISO_4217) currency code of the settled amount. |\n  | `payment_method` | Type of the payment method the customer used to pay for the order. |\n  | `fee_amount` | Total fee amount applied to the order, aggregated across all fee components (acquiring markup + interchange + scheme fees). |\n  | `fee_currency` | The [ISO 4217](https://en.wikipedia.org/wiki/ISO_4217) currency code of the total fee. |\n  | `processing_fee_amount` | Acquiring markup fee only — a subset of `fee_amount`. Represents Revolut's service fee, excluding interchange and scheme fees. |\n  | `processing_fee_currency` | The [ISO 4217](https://en.wikipedia.org/wiki/ISO_4217) currency code of the acquiring markup fee. |\n  | `browser_url` | The URL where the customer initiated the payment. |\n  | `location_id` | Unique identifier of the location related to the transaction. |",
        example: [
          'transaction_id',
          'type',
          'amount',
          'currency',
          'settlement_amount',
          'settlement_currency',
        ],
      }),
  })
  .openapi({
    title: 'Report-Run-Settlement-Options',
    description: 'Further options to customise the report.',
    required: [],
  })
  .openapi('ReportRunSettlementOptions')

const ReportRunSettlementReportSchema = z
  .object({
    filter: ReportRunFilterSchema,
    format: ReportRunFormatSchema,
    type: ReportRunTypeSchema,
    options: ReportRunSettlementOptionsSchema.exactOptional(),
  })
  .openapi({
    title: 'Report-Run-Settlement-Report',
    description:
      'A settlement report contains all the query information for generating reports of settled transactions associated with a Merchant account.',
    required: ['filter', 'format', 'type'],
  })
  .openapi('ReportRunSettlementReport')

const ReportRunCustomOptionsSchema = z
  .object({
    timezone: ReportRunTimezoneSchema.exactOptional(),
    columns: z
      .array(
        z.enum([
          'transaction_id',
          'related_transaction_id',
          'transaction_description',
          'payout_id',
          'dispute_id',
          'account_id',
          'account_balance',
          'order_id',
          'original_order_id',
          'original_order_ext_ref',
          'order_description',
          'order_channel',
          'order_customer_note',
          'order_tip_amount',
          'order_created_by',
          'payment_initiated_by',
          'order_line_items',
          'payout_reference',
          'invoice_reference',
          'started_date',
          'created_date',
          'updated_date',
          'completed_date',
          'payment_created_date',
          'payment_captured_date',
          'type',
          'legacy_type',
          'state',
          'description',
          'merchant_order_ext_ref',
          'customer_id',
          'amount',
          'currency',
          'settlement_amount',
          'settlement_currency',
          'exchange_rate',
          'refunded_amount',
          'statement_descriptor',
          'tip_amount',
          'terminal_hardware_id',
          'customer_name',
          'customer_email',
          'customer_card_number',
          'customer_card_brand',
          'customer_card_type',
          'customer_card_category',
          'payment_method',
          'fee_amount',
          'fee_currency',
          'processing_fee_amount',
          'processing_fee_currency',
          'fx_fee_amount',
          'fx_fee_currency',
          'browser_url',
          'beneficiary_name',
          'beneficiary_account_number',
          'location_id',
          'location_name',
          'surcharge_amount',
          'order_surcharge_amount',
          'order_custom_field_name',
          'order_custom_field_value',
          'offline_payment_state',
          'order_authorisation_type',
          'metadata.*',
        ]),
      )
      .exactOptional()
      .openapi({
        description:
          "Names of the columns to include in the report.\n\nIf not specified, all available columns are included. An empty array returns an error.\n\nTo include custom order metadata, use `metadata.*` with the attribute name, for example `metadata.my_attribute`.\n\nAvailable columns:\n\n  | Column name | Description |\n  | ----------- | ----------- |\n  | `transaction_id` | Unique identifier of the ledger transaction. Matches `transaction_id` in the settlement and payout reports. Use `order_id` to cross-reference with the payments report. |\n  | `related_transaction_id` | For refund and chargeback transactions, the ledger transaction ID of the original payment. Corresponds to `original_transaction_id` in the payout report. |\n  | `transaction_description` | Description of the transaction. |\n  | `payout_id` | Unique identifier of the payout that this transaction contributed to. |\n  | `dispute_id` | Unique identifier of the dispute associated with this transaction, if applicable. |\n  | `account_id` | Unique identifier of the merchant account. |\n  | `account_balance` | Account balance at the time of the transaction. |\n  | `order_id` | Unique identifier of the order. Use to cross-reference with the payments or payout reports. |\n  | `original_order_id` | For refunds and chargebacks, the order ID of the original payment. For settlement transactions, matches `order_id`. |\n  | `original_order_ext_ref` | Merchant's order identifier of the original order for external reference. |\n  | `order_description` | Description of the order. |\n  | `order_channel` | Channel through which the order was created. |\n  | `order_customer_note` | Note added by the customer at the time of the order. |\n  | `order_tip_amount` | Tip amount set at the order level. |\n  | `order_created_by` | Identifier of the user who created the order. |\n  | `payment_initiated_by` | Identifier of who initiated the payment. |\n  | `order_line_items` | Line items included in the order, if any. |\n  | `payout_reference` | Reference of the payout transfer associated with the transaction. |\n  | `invoice_reference` | Invoice reference associated with the order, if any. |\n  | `started_date` | Start timestamp shown on the row. For payment rows, this is the payment start timestamp. For non-payment rows such as refunds and chargebacks, this is the transaction start timestamp. Separate from the report filter timeframe. |\n  | `created_date` | Date and time the order was created. |\n  | `updated_date` | Last update timestamp shown on the row. For payment rows, this is the payment update timestamp. For non-payment rows such as refunds and chargebacks, this is the transaction update timestamp. Separate from the report filter timeframe. |\n  | `completed_date` | Completion timestamp shown on the row. For payment rows, this is the payment completion timestamp. For non-payment rows such as refunds and chargebacks, this is the transaction completion timestamp. Separate from the report filter timeframe. |\n  | `payment_created_date` | Payment authorisation or creation timestamp for rows linked to a payment. Empty for refunds and non-payment-related rows where no payment timestamp applies. This is returned data, not the report filter key. |\n  | `payment_captured_date` | Payment capture timestamp for rows linked to a captured payment. Empty for refunds, non-payment-related rows, or payments not captured. This is returned data, not the report filter key. |\n  | `type` | Category of the reported transaction row, indicating what kind of balance-affecting event the row represents. For the full list of returned values, see [Download report file](https://developer.revolut.com/docs/api/merchant#download-report-file). |\n  | `legacy_type` | Legacy type value for backwards compatibility. |\n  | `state` | State of the transaction. |\n  | `description` | Description of the transaction. |\n  | `merchant_order_ext_ref` | Merchant's order reference. The value of the `merchant_order_data.reference` field set when the order was created. |\n  | `customer_id` | Unique identifier of the customer. |\n  | `amount` | Total amount of the order. |\n  | `currency` | The [ISO 4217](https://en.wikipedia.org/wiki/ISO_4217) currency code of the order. |\n  | `settlement_amount` | Total amount settled on the merchant's account. |\n  | `settlement_currency` | The [ISO 4217](https://en.wikipedia.org/wiki/ISO_4217) currency code of the settled amount. |\n  | `exchange_rate` | Exchange rate applied if currency conversion occurred. |\n  | `refunded_amount` | Amount refunded for the order. |\n  | `statement_descriptor` | Statement descriptor shown on the customer's bank statement. |\n  | `tip_amount` | Tip amount included in the transaction. |\n  | `terminal_hardware_id` | Identifier of the card reader hardware used, for in-person payments. |\n  | `customer_name` | Name of the customer. |\n  | `customer_email` | Email address of the customer. |\n  | `customer_card_number` | Masked card number used for the payment. |\n  | `customer_card_brand` | Card brand used for the payment. Derived from BIN data. Example values: `VISA`, `MASTERCARD`, `MASTERCARD_DEBIT`, `MAESTRO`, `AMEX`, `DINERS`, `DISCOVER`, `JCB`. |\n  | `customer_card_type` | Card funding type of the card used for the payment, for example debit, credit, prepaid, deferred debit, or charge. For the full list of returned values, see [Download report file](https://developer.revolut.com/docs/api/merchant#download-report-file). |\n  | `customer_card_category` | Card commercial category. Values: `consumer` (personal card) and `commercial` (business or corporate card). |\n  | `payment_method` | Payment method the customer used to pay for the order. |\n  | `fee_amount` | Total fee amount applied to the order, aggregated across all fee components (acquiring markup + interchange + scheme fees). |\n  | `fee_currency` | The [ISO 4217](https://en.wikipedia.org/wiki/ISO_4217) currency code of the total fee. |\n  | `processing_fee_amount` | Acquiring markup fee only — a subset of `fee_amount`. Represents Revolut's service fee, excluding interchange and scheme fees. |\n  | `processing_fee_currency` | The [ISO 4217](https://en.wikipedia.org/wiki/ISO_4217) currency code of the acquiring markup fee. |\n  | `fx_fee_amount` | Foreign exchange fee amount, if applicable. |\n  | `fx_fee_currency` | The [ISO 4217](https://en.wikipedia.org/wiki/ISO_4217) currency code of the FX fee. |\n  | `browser_url` | The URL where the customer initiated the payment. |\n  | `beneficiary_name` | Name of the beneficiary, for bank transfer payments. |\n  | `beneficiary_account_number` | Account number of the beneficiary, for bank transfer payments. |\n  | `location_id` | Unique identifier of the location related to the transaction. |\n  | `location_name` | Name of the location related to the transaction. |\n  | `surcharge_amount` | Surcharge amount applied to the transaction. Omitted when no surcharge applies. |\n  | `order_surcharge_amount` | Surcharge amount set at the order level. |\n  | `order_custom_field_name` | Name of a custom field set on the order. |\n  | `order_custom_field_value` | Value of a custom field set on the order. |\n  | `offline_payment_state` | State of an offline payment, if applicable. |\n  | `order_authorisation_type` | Authorisation type of the order, for example `FULL` or `PRE_AUTH`. |\n  | `metadata.*` | Custom order metadata. Replace `*` with the attribute name, for example `metadata.my_attribute`. |",
        example: ['transaction_id', 'amount', 'currency', 'metadata.my_attribute'],
      }),
  })
  .openapi({
    title: 'Report-Run-Custom-Options',
    description: 'Further options to customise the report.',
    required: [],
  })
  .openapi('ReportRunCustomOptions')

const ReportRunCustomReportSchema = z
  .object({
    filter: ReportRunFilterSchema,
    format: ReportRunFormatSchema,
    type: ReportRunTypeSchema,
    options: ReportRunCustomOptionsSchema.exactOptional(),
  })
  .openapi({
    title: 'Report-Run-Custom-Report',
    description:
      'A custom report contains all the query information for generating reports of selected transactions associated with a Merchant account.',
    required: ['filter', 'format', 'type'],
  })
  .openapi('ReportRunCustomReport')

const ReportRunPaymentsEntityStatesSchema = z
  .array(z.enum(['completed', 'failed', 'declined', 'cancelled']))
  .openapi({
    title: 'Report-Run-Payments-Entity-States',
    description:
      'Select payments by state to be included in the report.\n\n| Value | Description |\n| ----- | ----------- |\n| `completed` | Include payments that completed successfully. |\n| `failed` | Include payments that failed during processing. |\n| `declined` | Include payments rejected by the issuer or payment flow. |\n| `cancelled` | Include payments cancelled before completion. |\n\nIf not provided, payments in all states will be included in the report.',
  })
  .openapi('ReportRunPaymentsEntityStates')

const ReportRunPaymentsFilterSchema = z
  .object({
    from: ReportRunFromSchema,
    to: ReportRunToSchema,
    entity_states: ReportRunPaymentsEntityStatesSchema.exactOptional(),
  })
  .openapi({
    title: 'Report-Run-Payments-Filter',
    description:
      'Filtering parameters to be applied to the report.\n\n:::note\nFor `payments_report`, `from` and `to` are evaluated against the payment `created_date`. The `captured_date` column is returned data and does not change the filter key.\n:::',
    required: ['from', 'to'],
  })
  .openapi('ReportRunPaymentsFilter')

const ReportRunPaymentsOptionsSchema = z
  .object({
    timezone: ReportRunTimezoneSchema.exactOptional(),
    columns: z
      .array(
        z.enum([
          'payment_id',
          'type',
          'description',
          'original_payment_id',
          'order_id',
          'state',
          'reason',
          'amount',
          'currency',
          'surcharge_amount',
          'tip_amount',
          'refunded_amount',
          'created_date',
          'captured_date',
          'merchant_order_ext_ref',
          'payment_method',
          'location_id',
          'customer_id',
          'customer_card_number',
          'customer_card_country',
          'customer_card_brand',
          'customer_card_type',
          'customer_card_category',
          'customer_email',
          'fee_amount',
          'fee_currency',
        ]),
      )
      .exactOptional()
      .openapi({
        description:
          "Names of the columns to be included in the report.\n\nIf the `columns` parameter is not defined in the request, all available columns will be included in the report. An empty array will return an error.\n\nAvailable columns:\n\n  | Column name | Description |\n  | ----------- | ----------- |\n  | `payment_id` | Unique identifier of the payment. |\n  | `type` | Category of the payment row, indicating whether the row represents a payment attempt or a refund. For the full list of returned values, see [Download report file](https://developer.revolut.com/docs/api/merchant#download-report-file). |\n  | `description` | Description of the payment. |\n  | `original_payment_id` | For refunds, the unique identifier of the original payment. |\n  | `order_id` | Unique identifier of the order associated with the payment. |\n  | `state` | Lifecycle state of the payment. For the full list of returned values, see [Download report file](https://developer.revolut.com/docs/api/merchant#download-report-file). |\n  | `reason` | Reason for a failed or declined payment, for example: `Insufficient Funds`. |\n  | `amount` | Total amount of the payment. |\n  | `currency` | The [ISO 4217](https://en.wikipedia.org/wiki/ISO_4217) currency code of the payment. |\n  | `surcharge_amount` | Surcharge amount applied to the payment, if any. |\n  | `tip_amount` | Tip amount included in the payment, if any. |\n  | `refunded_amount` | Amount refunded for the payment. |\n  | `created_date` | Date and time the payment was created. |\n  | `captured_date` | Date and time the payment was captured. Empty when the payment has not been captured. |\n  | `merchant_order_ext_ref` | Merchant's order reference. The value of the `merchant_order_data.reference` field set when the order was created. |\n  | `payment_method` | Payment method used, for example: `CARD` or `PAY_WITH_REVOLUT`. |\n  | `location_id` | Unique identifier of the location where the payment was made. |\n  | `customer_id` | Unique identifier of the customer. |\n  | `customer_card_number` | Masked card number used for the payment. |\n  | `customer_card_country` | Country of the card used for the payment, as an [ISO 3166-1 alpha-2](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2) code. |\n  | `customer_card_brand` | Card brand used for the payment, for example: `VISA` or `MASTERCARD_DEBIT`. |\n  | `customer_card_type` | Card funding type of the card used for the payment. For the full list of returned values, see [Download report file](https://developer.revolut.com/docs/api/merchant#download-report-file). |\n  | `customer_card_category` | Card commercial category. Values: `consumer` (personal card) and `commercial` (business or corporate card). |\n  | `customer_email` | Email address of the customer. |\n  | `fee_amount` | Total fee amount charged for the payment. |\n  | `fee_currency` | The [ISO 4217](https://en.wikipedia.org/wiki/ISO_4217) currency code of the fee. |",
        example: ['payment_id', 'type', 'state', 'amount', 'currency'],
      }),
  })
  .openapi({
    title: 'Report-Run-Payments-Options',
    description: 'Further options to customise the report.',
    required: [],
  })
  .openapi('ReportRunPaymentsOptions')

const ReportRunPaymentsReportSchema = z
  .object({
    filter: ReportRunPaymentsFilterSchema,
    format: ReportRunFormatSchema,
    type: ReportRunTypeSchema,
    options: ReportRunPaymentsOptionsSchema.exactOptional(),
  })
  .openapi({
    title: 'Report-Run-Payments-Report',
    description:
      'A payments report contains all the query information for generating reports of payments associated with a Merchant account, including failed and declined payments.',
    required: ['filter', 'format', 'type'],
  })
  .openapi('ReportRunPaymentsReport')

const ReportRunPayoutFilterSchema = z
  .object({ payout_id: PayoutIdSchema })
  .openapi({
    title: 'Report-Run-Payout-Filter',
    description: 'Filtering parameters to be applied to the report.',
    required: ['payout_id'],
  })
  .openapi('ReportRunPayoutFilter')

const ReportRunPayoutOptionsSchema = z
  .object({
    timezone: ReportRunTimezoneSchema.exactOptional(),
    columns: z
      .array(
        z.enum([
          'created_date',
          'completed_date',
          'payout_affected_date',
          'affected_payout_amount',
          'transaction_id',
          'order_id',
          'dispute_id',
          'merchant_order_reference',
          'type',
          'related_icpp_charge_id',
          'transaction_amount',
          'transaction_currency',
          'billing_amount',
          'billing_currency',
          'state',
          'original_transaction_id',
          'original_transaction_amount',
          'original_transaction_currency',
          'original_order_id',
          'original_order_channel',
          'original_merchant_order_reference',
          'fee_amount',
          'fee_currency',
          'settlement_amount',
          'settlement_currency',
          'location_id',
          'location_name',
          'submerchant_id',
          'payout_transfer_reference',
          'payout_total_amount',
          'payout_date',
        ]),
      )
      .exactOptional()
      .openapi({
        description:
          "Names of the columns to be included in the report.\n\nIf the `columns` parameter is not defined in the request, all available columns will be included in the report. An empty array will return an error.\n\nAvailable columns:\n\n  | Column name | Description |\n  | ----------- | ----------- |\n  | `created_date` | Date and time the transaction was created. |\n  | `completed_date` | Date and time the transaction was completed. |\n  | `payout_affected_date` | Date and time the payout was affected by this transaction. |\n  | `affected_payout_amount` | Boolean flag indicating whether this transaction contributed to the payout amount (`true`) or not (`false`). Despite the name, this is not a monetary value. |\n  | `transaction_id` | Unique identifier of the transaction. |\n  | `order_id` | Unique identifier of the order associated with the transaction. |\n  | `dispute_id` | Unique identifier of the dispute associated with a chargeback or chargeback reversal transaction. Empty for rows not related to a dispute. |\n  | `merchant_order_reference` | Merchant's order reference. The value of the `merchant_order_data.reference` field set when the order was created. |\n  | `type` | Type of the payout-related ledger event the row represents. For the full list of returned values, see [Download report file](https://developer.revolut.com/docs/api/merchant#download-report-file). |\n  | `related_icpp_charge_id` | Unique identifier of the IC++ charge related to the transaction, if applicable. |\n  | `transaction_amount` | Amount of the transaction in the transaction currency. |\n  | `transaction_currency` | The [ISO 4217](https://en.wikipedia.org/wiki/ISO_4217) currency code of the transaction. |\n  | `billing_amount` | Amount of the transaction in the billing currency. |\n  | `billing_currency` | The [ISO 4217](https://en.wikipedia.org/wiki/ISO_4217) currency code of the billing amount. |\n  | `state` | State of the transaction. Possible values: `COMPLETED`, `PENDING`, `REVERTED`, `DECLINED`, `FAILED`. For `Irreducible balance hold` type transactions, only `PENDING` and `REVERTED` are possible. |\n  | `original_transaction_id` | Unique identifier of the original transaction. For refunds, references the transaction being refunded. |\n  | `original_transaction_amount` | Amount of the original transaction. |\n  | `original_transaction_currency` | The [ISO 4217](https://en.wikipedia.org/wiki/ISO_4217) currency code of the original transaction. |\n  | `original_order_id` | Unique identifier of the original order. For refunds, references the order being refunded. |\n  | `original_order_channel` | Channel through which the original order was created. |\n  | `original_merchant_order_reference` | Merchant's order reference for the original order. The value of the `merchant_order_data.reference` field set when the original order was created. |\n  | `fee_amount` | Total fee amount charged for the transaction. |\n  | `fee_currency` | The [ISO 4217](https://en.wikipedia.org/wiki/ISO_4217) currency code of the fee. |\n  | `settlement_amount` | Total amount settled on the merchant's account. |\n  | `settlement_currency` | The [ISO 4217](https://en.wikipedia.org/wiki/ISO_4217) currency code of the settled amount. |\n  | `location_id` | Unique identifier of the location associated with the transaction. |\n  | `location_name` | Name of the location associated with the transaction. |\n  | `submerchant_id` | Unique identifier of the submerchant associated with the transaction. |\n  | `payout_transfer_reference` | Reference of the bank transfer for this payout. This value is the same across all rows in the report, as each report covers a single payout. |\n  | `payout_total_amount` | Total amount of this payout. This value is the same across all rows in the report, as each report covers a single payout. |\n  | `payout_date` | Date and time the payout covered by this report was created. This value is the same across all rows in the report, as each report covers a single payout. |",
        example: ['transaction_id', 'type', 'transaction_amount', 'transaction_currency'],
      }),
  })
  .openapi({
    title: 'Report-Run-Payout-Options',
    description: 'Further options to customise the report.',
    required: [],
  })
  .openapi('ReportRunPayoutOptions')

const ReportRunPayoutReportSchema = z
  .object({
    filter: ReportRunPayoutFilterSchema,
    format: ReportRunFormatSchema,
    type: ReportRunTypeSchema,
    options: ReportRunPayoutOptionsSchema.exactOptional(),
  })
  .openapi({
    title: 'Report-Run-Payout-Report',
    description:
      'A payout statement report contains all the query information for generating reports of a selected payout associated with a Merchant account.',
    required: ['filter', 'format', 'type'],
  })
  .openapi('ReportRunPayoutReport')

const IcppChargeIdSchema = z
  .uuid()
  .openapi({
    title: 'Icpp-Charge-Id',
    description:
      'Permanent ID of of the IC++ fee related to a payout transaction.\n\nThis ID can be obtained from the `related_icpp_charge_id` column of a payout statement report.',
  })
  .openapi('IcppChargeId')

const ReportRunIcppFilterSchema = z
  .object({ icpp_charge_id: IcppChargeIdSchema })
  .openapi({
    title: 'Report-Run-Icpp-Filter',
    description: 'Filtering parameters to be applied to the report.',
    required: ['icpp_charge_id'],
  })
  .openapi('ReportRunIcppFilter')

const ReportRunIcppOptionsSchema = z
  .object({
    timezone: ReportRunTimezoneSchema.exactOptional(),
    columns: z
      .array(
        z.enum([
          'id',
          'created_at',
          'operation',
          'amount',
          'currency',
          'settlement_amount',
          'settlement_currency',
          'payment_method',
          'card_scheme',
          'card_funding',
          'order_description',
          'order_merchant_external_ref',
          'original_operation_id',
          'acquiring_fee_amount',
          'card_interchange_fee_amount',
          'card_scheme_fee_amount',
          'card_type',
          'order_channel',
          'card_country',
        ]),
      )
      .exactOptional()
      .openapi({
        description:
          "Names of the columns to be included in the report.\n\nIf the `columns` parameter is not defined in the request, all available columns will be included in the report. An empty array will return an error.\n\nAvailable columns:\n\n  | Column name | Description |\n  | ----------- | ----------- |\n  | `id` | Unique identifier of the payment. |\n  | `created_at` | Date and time the payment was created. |\n  | `operation` | IC++ transaction type. Values: `SALE` (payment sale), `REFUND` (refund), and `DISPUTE` (dispute-related transaction). |\n  | `amount` | Transaction amount. |\n  | `currency` | The [ISO 4217](https://en.wikipedia.org/wiki/ISO_4217) currency code of the transaction. |\n  | `settlement_amount` | Amount settled on the merchant's account. |\n  | `settlement_currency` | The [ISO 4217](https://en.wikipedia.org/wiki/ISO_4217) currency code of the settled amount. |\n  | `payment_method` | Payment method used for the transaction. Returns `REVOLUT_PAY` for Revolut Pay payments, or the card scheme name for card payments. |\n  | `card_scheme` | Card BIN scheme. |\n  | `card_funding` | Card funding type, for example: `DEBIT` or `PREPAID`. |\n  | `order_description` | Description of the order. |\n  | `order_merchant_external_ref` | Merchant's order reference. The value of the `merchant_order_data.reference` field set when the order was created. |\n  | `original_operation_id` | Unique identifier of the related original transaction. |\n  | `acquiring_fee_amount` | IC++ acquiring markup fee component. |\n  | `card_interchange_fee_amount` | Interchange fee component. Omitted for Revolut Pay transactions. |\n  | `card_scheme_fee_amount` | Card scheme fee component. Omitted for Revolut Pay transactions. |\n  | `card_type` | Card commercial category. Values: `COMMERCIAL` (business or corporate card) and `CONSUMER` (personal card). |\n  | `order_channel` | Channel through which the order was created. |\n  | `card_country` | Country of the card, as an [ISO 3166-1 alpha-2](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2) code. |",
        example: [
          'id',
          'operation',
          'acquiring_fee_amount',
          'card_interchange_fee_amount',
          'card_scheme_fee_amount',
        ],
      }),
  })
  .openapi({
    title: 'Report-Run-Icpp-Options',
    description: 'Further options to customise the report.',
    required: [],
  })
  .openapi('ReportRunIcppOptions')

const ReportRunIcppReportSchema = z
  .object({
    filter: ReportRunIcppFilterSchema,
    format: ReportRunFormatSchema,
    type: ReportRunTypeSchema,
    options: ReportRunIcppOptionsSchema.exactOptional(),
  })
  .openapi({
    title: 'Report-Run-Icpp-Report',
    description:
      'A IC++ fee breakdown report contains all the query information for generating reports of fees for each IC++ transaction related to a payout.',
    required: ['filter', 'format', 'type'],
  })
  .openapi('ReportRunIcppReport')

const ReportRunSchema = z
  .object({
    report_run_id: z
      .uuid()
      .openapi({
        description:
          'Unique ID used for accessing report details. Use this to check report generation status.',
      }),
    status: z
      .enum(['processing', 'completed', 'failed', 'expired'])
      .openapi({
        description:
          'Current status of the report run.\n\n| Value | Description |\n| ----- | ----------- |\n| `processing` | Report generation is still in progress. |\n| `completed` | Report generation finished successfully and the file is available to download for 24 hours via `file_url`. |\n| `failed` | Report generation failed and no report file is available. |\n| `expired` | Report generation previously completed, but the 24-hour file availability window has elapsed and the file can no longer be downloaded. |',
      }),
    file_url: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Use this link to download the report file. Available only when `status` is `completed`, and only for 24 hours after report generation finishes.',
      }),
  })
  .openapi({
    title: 'Report-Run',
    description:
      'The `ReportRunDetails` object contains all information associated with a specific report run, identified by the `report_run_id`.',
    required: ['report_run_id', 'status'],
  })
  .openapi('ReportRun')

const ReportRunCsvSettlementSchema = z
  .object({
    transaction_id: z
      .uuid()
      .exactOptional()
      .openapi({
        description:
          'Unique identifier of the ledger transaction in the core settlement system. Matches `transaction_id` in the payout statement report for the same event. Not the same as `payment_id` in the payments report — a payment and its resulting ledger transaction have different UUIDs. Use `order_id` to cross-reference with the payments report.',
      }),
    order_id: z
      .uuid()
      .exactOptional()
      .openapi({
        description:
          'Unique identifier of the order. An order is the top-level entity that groups one or more payment attempts against it. `order_id` is consistent across all report types and can be used to cross-reference between the payments report and the settlement or payout reports.',
      }),
    original_order_id: z
      .uuid()
      .exactOptional()
      .openapi({
        description:
          "For refunds and chargebacks, the order ID of the original payment that this transaction reverses. Refunds and chargebacks create their own order in the system, so `order_id` refers to the refund or chargeback order while `original_order_id` points back to the original payment's order. For settlement transactions, matches `order_id`.",
      }),
    started_date: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({
        description:
          "Date and time the row's source record was started. For payment rows, this is the payment start timestamp. For non-payment rows such as refunds and chargebacks, this is the transaction start timestamp. This displayed value is separate from the report filter timeframe.",
      }),
    updated_date: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({
        description:
          "Date and time the row's source record was last updated. For payment rows, this is the payment update timestamp. For non-payment rows such as refunds and chargebacks, this is the transaction update timestamp. This displayed value is separate from the report filter timeframe.",
      }),
    completed_date: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({
        description:
          "Date and time the row's source record was completed. For payment rows, this is the payment completion timestamp. For non-payment rows such as refunds and chargebacks, this is the transaction completion timestamp. This displayed value is separate from the report filter timeframe.",
      }),
    payment_created_date: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({
        description:
          'Payment authorisation or creation timestamp for rows linked to a payment, in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) UTC date-time format. Empty for refunds and non-payment-related rows where no payment timestamp applies. This displayed value is separate from the report filter timeframe.',
      }),
    payment_captured_date: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({
        description:
          'Payment capture timestamp for rows linked to a captured payment, in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) UTC date-time format. Empty for refunds, non-payment-related rows, or payments not captured. This displayed value is separate from the report filter timeframe.',
      }),
    type: z
      .enum(['SETTLEMENT', 'REFUND', 'CHARGEBACK', 'CHARGEBACK_REVERSAL'])
      .exactOptional()
      .openapi({
        description:
          'Type of the settlement report row.\n\nA partial-settlement is represented by separate `SETTLEMENT` and `REFUND` rows instead of a dedicated type.\n\n| Value | Description |\n| ----- | ----------- |\n| `SETTLEMENT` | Settlement of a payment into the merchant balance. |\n| `REFUND` | Refund entry reducing the merchant balance. |\n| `CHARGEBACK` | Dispute withdrawal entry reducing the merchant balance. |\n| `CHARGEBACK_REVERSAL` | Reversal of a previous chargeback, restoring funds to the merchant balance. |',
      }),
    state: z.string().exactOptional().openapi({ description: 'State of the transaction.' }),
    description: z.string().exactOptional().openapi({ description: 'Description of the order.' }),
    merchant_order_ext_ref: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "Merchant's order reference. The value of the `merchant_order_data.reference` field set when the order was created.",
      }),
    customer_id: z
      .uuid()
      .exactOptional()
      .openapi({ description: 'Unique identifier of the customer related to an order.' }),
    amount: z.number().exactOptional().openapi({ description: 'Total amount of the order.' }),
    currency: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The [ISO 4217](https://en.wikipedia.org/wiki/ISO_4217) currency code that represents the currency of the order.',
        example: 'GBP',
      }),
    settlement_amount: z
      .number()
      .exactOptional()
      .openapi({ description: "Total amount settled on the merchant's account." }),
    settlement_currency: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The [ISO 4217](https://en.wikipedia.org/wiki/ISO_4217) currency code that represents the currency of the settled amount.',
        example: 'GBP',
      }),
    payment_method: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Type of the payment method the customer used to pay for the order.',
        example: 'CARD',
      }),
    fee_amount: z
      .number()
      .exactOptional()
      .openapi({
        description:
          'Total fee amount applied to the order, aggregated across all fee components (acquiring markup + interchange + scheme fees).',
      }),
    fee_currency: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The [ISO 4217](https://en.wikipedia.org/wiki/ISO_4217) currency code that represents the currency of the total fee.',
        example: 'GBP',
      }),
    processing_fee_amount: z
      .number()
      .exactOptional()
      .openapi({
        description:
          "Acquiring markup fee only — a subset of `fee_amount`. Represents Revolut's service fee, excluding interchange and scheme fees.",
      }),
    processing_fee_currency: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The [ISO 4217](https://en.wikipedia.org/wiki/ISO_4217) currency code that represents the currency of the acquiring markup fee.',
        example: 'GBP',
      }),
    browser_url: z
      .url()
      .exactOptional()
      .openapi({ description: 'The URL where the customer initiated the payment.' }),
    location_id: z
      .uuid()
      .exactOptional()
      .openapi({ description: 'Unique identifier of the location related to the transaction.' }),
  })
  .openapi({
    title: 'Report-Run-Csv-Settlement',
    description:
      "CSV output for `settlement_report`. Contains settled transactions associated with a Merchant account.\n\nThe first row is a header row with column names. Subsequent rows contain transaction data, one row per transaction.\n\nA partial-settlement is represented by separate `SETTLEMENT` and `REFUND` rows instead of a dedicated type.\n\n:::note\nThe actual response is a raw `text/csv` string. The object schema below is a documentation convention only: OpenAPI's schema language (JSON Schema) describes JSON data shapes and has no native construct for typed CSV columns, so each property here corresponds to a CSV column header rather than a JSON field.\n:::",
    required: [],
  })
  .openapi('ReportRunCsvSettlement')

const ReportRunCsvCustomSchema = z
  .object({
    transaction_id: z
      .uuid()
      .exactOptional()
      .openapi({
        description:
          'Unique identifier of the ledger transaction in the core settlement system. Matches `transaction_id` in the settlement and payout reports for the same event. Not the same as `payment_id` in the payments report — a payment and its resulting ledger transaction have different UUIDs. Use `order_id` to cross-reference with the payments report.',
      }),
    related_transaction_id: z
      .uuid()
      .exactOptional()
      .openapi({
        description:
          'For refund and chargeback transactions, the ledger transaction ID of the original payment that this transaction reverses. Corresponds to `original_transaction_id` in the payout statement report.',
      }),
    transaction_description: z
      .string()
      .exactOptional()
      .openapi({ description: 'Description of the transaction.' }),
    order_id: z
      .uuid()
      .exactOptional()
      .openapi({
        description:
          'Unique identifier of the order. An order is the top-level entity that groups one or more payment attempts against it. `order_id` is consistent across all report types and can be used to cross-reference between the payments report and the settlement or payout reports.',
      }),
    original_order_id: z
      .uuid()
      .exactOptional()
      .openapi({
        description:
          "For refunds and chargebacks, the order ID of the original payment that this transaction reverses. Refunds and chargebacks create their own order in the system, so `order_id` refers to the refund or chargeback order while `original_order_id` points back to the original payment's order. For settlement transactions, matches `order_id`.",
      }),
    original_order_ext_ref: z
      .string()
      .exactOptional()
      .openapi({
        description: "Merchant's order identifier of the original order for external reference.",
      }),
    order_description: z
      .string()
      .exactOptional()
      .openapi({ description: 'Description of the order.' }),
    order_channel: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Channel through which the order was created.\n\nThe value depends on the order source and integration. It may reflect platform-specific or externally provided values, so the set of returned values should not be treated as a fixed enum.',
      }),
    order_customer_note: z
      .string()
      .exactOptional()
      .openapi({ description: 'Note added by the customer at the time of the order.' }),
    order_tip_amount: z
      .number()
      .exactOptional()
      .openapi({ description: 'Tip amount set at the order level.' }),
    order_created_by: z
      .string()
      .exactOptional()
      .openapi({ description: 'Identifier of the user who created the order.' }),
    payment_initiated_by: z
      .string()
      .exactOptional()
      .openapi({ description: 'Identifier of who initiated the payment.' }),
    order_line_items: z
      .string()
      .exactOptional()
      .openapi({ description: 'Line items included in the order, if any.' }),
    payout_id: z
      .uuid()
      .exactOptional()
      .openapi({
        description:
          'Unique identifier of the payout that this transaction contributed to. Use to cross-reference with the payout statement report.',
      }),
    payout_reference: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Reference of the payout transfer associated with the transaction.',
      }),
    invoice_reference: z
      .string()
      .exactOptional()
      .openapi({ description: 'Invoice reference associated with the order, if any.' }),
    dispute_id: z
      .uuid()
      .exactOptional()
      .openapi({ description: 'Unique identifier of the dispute, if applicable.' }),
    account_id: z
      .uuid()
      .exactOptional()
      .openapi({ description: 'Unique identifier of the merchant account.' }),
    account_balance: z
      .number()
      .exactOptional()
      .openapi({ description: 'Account balance at the time of the transaction.' }),
    started_date: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({
        description:
          "Date and time the row's source record was started. For payment rows, this is the payment start timestamp. For non-payment rows such as refunds and chargebacks, this is the transaction start timestamp. This displayed value is separate from the report filter timeframe.",
      }),
    created_date: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({ description: 'Date and time the order was created.' }),
    updated_date: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({
        description:
          "Date and time the row's source record was last updated. For payment rows, this is the payment update timestamp. For non-payment rows such as refunds and chargebacks, this is the transaction update timestamp. This displayed value is separate from the report filter timeframe.",
      }),
    completed_date: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({
        description:
          "Date and time the row's source record was completed. For payment rows, this is the payment completion timestamp. For non-payment rows such as refunds and chargebacks, this is the transaction completion timestamp. This displayed value is separate from the report filter timeframe.",
      }),
    payment_created_date: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({
        description:
          'Payment authorisation or creation timestamp for rows linked to a payment, in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) UTC date-time format. Empty for refunds and non-payment-related rows where no payment timestamp applies. This displayed value is separate from the report filter timeframe.',
      }),
    payment_captured_date: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({
        description:
          'Payment capture timestamp for rows linked to a captured payment, in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) UTC date-time format. Empty for refunds, non-payment-related rows, or payments not captured. This displayed value is separate from the report filter timeframe.',
      }),
    type: z
      .enum([
        'SETTLEMENT',
        'RESERVE',
        'REFUND',
        'TOPUP',
        'TOPUP_RETURN',
        'CHARGEBACK',
        'CHARGEBACK_REVERSAL',
        'CREDIT_REIMBURSEMENT',
        'FEE',
        'PAYOUT',
        'TRANSFER',
        'REVOLUT_REFUND',
        'REVOLUT_FEE',
        'WRITE_OFF',
        'CHARGE',
      ])
      .exactOptional()
      .openapi({
        description:
          'Type of the transaction.\n\n| Value | Description |\n| ----- | ----------- |\n| `SETTLEMENT` | Settlement of a payment into the merchant balance. |\n| `RESERVE` | Reserve entry holding funds on the merchant balance. |\n| `REFUND` | Refund entry reducing the merchant balance. |\n| `TOPUP` | Balance top-up entry. |\n| `TOPUP_RETURN` | Reversal of a top-up entry. |\n| `CHARGEBACK` | Dispute withdrawal from the merchant balance. |\n| `CHARGEBACK_REVERSAL` | Reversal of a previous chargeback. |\n| `CREDIT_REIMBURSEMENT` | Credit reimbursement entry. |\n| `FEE` | Fee charged against the merchant balance. |\n| `PAYOUT` | Payout-related ledger entry. |\n| `TRANSFER` | Balance transfer entry. |\n| `REVOLUT_REFUND` | Refund-related entry specific to Revolut internal flows. |\n| `REVOLUT_FEE` | Fee-related entry specific to Revolut internal flows. |\n| `WRITE_OFF` | Write-off entry. |\n| `CHARGE` | Charge entry posted to the merchant balance. |',
      }),
    legacy_type: z
      .string()
      .exactOptional()
      .openapi({ description: 'Legacy type value for backwards compatibility.' }),
    state: z.string().exactOptional().openapi({ description: 'State of the transaction.' }),
    description: z
      .string()
      .exactOptional()
      .openapi({ description: 'Description of the transaction.' }),
    merchant_order_ext_ref: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "Merchant's order reference. The value of the `merchant_order_data.reference` field set when the order was created.",
      }),
    customer_id: z
      .uuid()
      .exactOptional()
      .openapi({ description: 'Unique identifier of the customer related to the order.' }),
    amount: z.number().exactOptional().openapi({ description: 'Total amount of the order.' }),
    currency: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The [ISO 4217](https://en.wikipedia.org/wiki/ISO_4217) currency code of the order.',
        example: 'GBP',
      }),
    settlement_amount: z
      .number()
      .exactOptional()
      .openapi({ description: "Total amount settled on the merchant's account." }),
    settlement_currency: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The [ISO 4217](https://en.wikipedia.org/wiki/ISO_4217) currency code of the settled amount.',
        example: 'GBP',
      }),
    exchange_rate: z
      .number()
      .exactOptional()
      .openapi({ description: 'Exchange rate applied if currency conversion occurred.' }),
    refunded_amount: z
      .number()
      .exactOptional()
      .openapi({ description: 'Amount refunded for the order.' }),
    statement_descriptor: z
      .string()
      .exactOptional()
      .openapi({ description: "Statement descriptor shown on the customer's bank statement." }),
    tip_amount: z
      .number()
      .exactOptional()
      .openapi({ description: 'Tip amount included in the transaction.' }),
    surcharge_amount: z
      .number()
      .exactOptional()
      .openapi({
        description:
          'Surcharge amount applied to the transaction. Omitted when no surcharge applies.',
      }),
    order_surcharge_amount: z
      .number()
      .exactOptional()
      .openapi({ description: 'Surcharge amount set at the order level.' }),
    terminal_hardware_id: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Identifier of the card reader hardware used, for in-person payments.',
      }),
    customer_name: z.string().exactOptional().openapi({ description: 'Name of the customer.' }),
    customer_email: z
      .email()
      .exactOptional()
      .openapi({ description: 'Email address of the customer.' }),
    customer_card_number: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Masked card number used for the payment.',
        example: '492942******5709',
      }),
    customer_card_brand: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Card brand used for the payment. Derived from BIN data. Example values include `VISA`, `MASTERCARD`, `MASTERCARD_DEBIT`, `MAESTRO`, `AMEX`, `DINERS`, `DISCOVER`, `JCB`.',
        example: 'VISA',
      }),
    customer_card_type: z
      .enum(['DEBIT', 'CREDIT', 'PREPAID', 'DEFERRED_DEBIT', 'CHARGE'])
      .exactOptional()
      .openapi({
        description:
          'Card funding type.\n\n| Value | Description |\n| ----- | ----------- |\n| `DEBIT` | Debit card. |\n| `CREDIT` | Credit card. |\n| `PREPAID` | Prepaid card. |\n| `DEFERRED_DEBIT` | Deferred debit card. |\n| `CHARGE` | Charge card. |',
      }),
    customer_card_category: z
      .enum(['consumer', 'commercial'])
      .exactOptional()
      .openapi({
        description:
          'Card commercial category.\n\n| Value | Description |\n| ----- | ----------- |\n| `consumer` | Personal card. |\n| `commercial` | Business or corporate card. |',
      }),
    payment_method: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Payment method the customer used to pay for the order.',
        example: 'CARD',
      }),
    fee_amount: z
      .number()
      .exactOptional()
      .openapi({
        description:
          'Total fee amount applied to the order, aggregated across all fee components (acquiring markup + interchange + scheme fees).',
      }),
    fee_currency: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The [ISO 4217](https://en.wikipedia.org/wiki/ISO_4217) currency code of the total fee.',
        example: 'GBP',
      }),
    processing_fee_amount: z
      .number()
      .exactOptional()
      .openapi({
        description:
          "Acquiring markup fee only — a subset of `fee_amount`. Represents Revolut's service fee, excluding interchange and scheme fees.",
      }),
    processing_fee_currency: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The [ISO 4217](https://en.wikipedia.org/wiki/ISO_4217) currency code of the acquiring markup fee.',
        example: 'GBP',
      }),
    fx_fee_amount: z
      .number()
      .exactOptional()
      .openapi({ description: 'Foreign exchange fee amount, if applicable.' }),
    fx_fee_currency: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The [ISO 4217](https://en.wikipedia.org/wiki/ISO_4217) currency code of the FX fee.',
        example: 'GBP',
      }),
    browser_url: z
      .url()
      .exactOptional()
      .openapi({ description: 'The URL where the customer initiated the payment.' }),
    beneficiary_name: z
      .string()
      .exactOptional()
      .openapi({ description: 'Name of the beneficiary, for bank transfer payments.' }),
    beneficiary_account_number: z
      .string()
      .exactOptional()
      .openapi({ description: 'Account number of the beneficiary, for bank transfer payments.' }),
    location_id: z
      .uuid()
      .exactOptional()
      .openapi({ description: 'Unique identifier of the location related to the transaction.' }),
    location_name: z
      .string()
      .exactOptional()
      .openapi({ description: 'Name of the location related to the transaction.' }),
    order_custom_field_name: z
      .string()
      .exactOptional()
      .openapi({ description: 'Name of a custom field set on the order.' }),
    order_custom_field_value: z
      .string()
      .exactOptional()
      .openapi({ description: 'Value of a custom field set on the order.' }),
    offline_payment_state: z
      .string()
      .exactOptional()
      .openapi({ description: 'State of an offline payment, if applicable.' }),
    order_authorisation_type: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Authorisation type of the order, for example `FULL` or `PRE_AUTH`.',
      }),
  })
  .openapi({
    title: 'Report-Run-Csv-Custom',
    description:
      "CSV output for `custom_report` report type. Contains settled and processing transactions with a configurable set of columns.\n\nThe first row is a header row with column names. Subsequent rows contain transaction data, one row per transaction.\n\nThe columns included in the response depend on the `options.columns` list specified in the request. If no columns list was provided, all available columns are included.\n\nCustom metadata columns can also be requested using the `metadata.` prefix, for example `metadata.custom_attribute`.\n\n:::note\nThe actual response is a raw `text/csv` string. The object schema below is a documentation convention only: OpenAPI's schema language (JSON Schema) describes JSON data shapes and has no native construct for typed CSV columns, so each property here corresponds to a CSV column header rather than a JSON field.\n:::",
    required: [],
  })
  .openapi('ReportRunCsvCustom')

const ReportRunCsvPaymentsSchema = z
  .object({
    payment_id: z
      .uuid()
      .exactOptional()
      .openapi({
        description:
          'Unique identifier of the payment attempt in the acquiring system. Corresponds to `id` in the IC++ fee breakdown report for the same payment. Not the same as `transaction_id` in the settlement or payout reports — a payment and its resulting ledger transaction have different UUIDs. Use `order_id` to cross-reference with the settlement or payout reports.',
      }),
    type: z
      .enum(['PAYMENT', 'REFUND'])
      .exactOptional()
      .openapi({
        description:
          'Type of the payment.\n\n| Value | Description |\n| ----- | ----------- |\n| `PAYMENT` | A payment attempt made against the order. |\n| `REFUND` | A refund record reversing a previously completed payment. |',
      }),
    description: z.string().exactOptional().openapi({ description: 'Description of the payment.' }),
    original_payment_id: z
      .uuid()
      .exactOptional()
      .openapi({
        description:
          'For refunds, the acquiring ID of the original payment that this record reverses. Corresponds to `payment_id` on the original payment row. Populated only when `type` is `REFUND`.',
      }),
    order_id: z
      .uuid()
      .exactOptional()
      .openapi({
        description:
          'Unique identifier of the order associated with this payment. An order can have multiple payment attempts — for example, a retry after a declined payment. Use `order_id` to cross-reference with the settlement or payout reports.',
      }),
    state: z
      .enum(['COMPLETED', 'FAILED', 'DECLINED', 'CANCELLED', 'PROCESSING'])
      .exactOptional()
      .openapi({
        description:
          'State of the payment.\n\n| Value | Description |\n| ----- | ----------- |\n| `COMPLETED` | The payment completed successfully. |\n| `FAILED` | The payment failed during processing. |\n| `DECLINED` | The payment was rejected by the issuer or payment flow. |\n| `CANCELLED` | The payment was cancelled before completion. |\n| `PROCESSING` | The payment is still being processed. |',
      }),
    reason: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Reason code for a failed or declined payment. Present only when `state` is `FAILED` or `DECLINED`.\n\nExample values: `INSUFFICIENT_FUNDS`, `DO_NOT_HONOUR`, `EXPIRED_CARD`, `INVALID_CVV`, `THREE_DS_CHALLENGE_FAILED`, `SUSPECTED_FRAUD`, `LOST_CARD`, `STOLEN_CARD`, `TECHNICAL_ERROR`.',
      }),
    amount: z.number().exactOptional().openapi({ description: 'Total amount of the payment.' }),
    currency: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The [ISO 4217](https://en.wikipedia.org/wiki/ISO_4217) currency code of the payment.',
        example: 'GBP',
      }),
    surcharge_amount: z
      .number()
      .exactOptional()
      .openapi({
        description:
          'Surcharge amount applied to the payment. Empty when no surcharge applies — this field is empty, not set to `0`.',
      }),
    tip_amount: z
      .number()
      .exactOptional()
      .openapi({ description: 'Tip amount included in the payment, if any.' }),
    refunded_amount: z
      .number()
      .exactOptional()
      .openapi({ description: 'Amount refunded for the payment.' }),
    created_date: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({ description: 'Date and time the payment was created.' }),
    captured_date: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({
        description:
          'Date and time the payment was captured, in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) UTC date-time format. Empty when the payment has not been captured.',
      }),
    merchant_order_ext_ref: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "Merchant's order reference. The value of the `merchant_order_data.reference` field set when the order was created.",
      }),
    payment_method: z
      .string()
      .exactOptional()
      .openapi({ description: 'Payment method used.', example: 'CARD' }),
    location_id: z
      .uuid()
      .exactOptional()
      .openapi({ description: 'Unique identifier of the location where the payment was made.' }),
    customer_id: z
      .uuid()
      .exactOptional()
      .openapi({ description: 'Unique identifier of the customer.' }),
    customer_card_number: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Masked card number used for the payment.',
        example: '492942******5709',
      }),
    customer_card_country: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Country of the card used for the payment, as an [ISO 3166-1 alpha-2](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2) code.',
        example: 'GB',
      }),
    customer_card_brand: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Card brand used for the payment. Derived from BIN data. Example values include `VISA`, `MASTERCARD`, `MASTERCARD_DEBIT`, `MAESTRO`, `AMEX`, `DINERS`, `DISCOVER`, `JCB`.',
        example: 'VISA',
      }),
    customer_card_type: z
      .enum(['DEBIT', 'CREDIT', 'PREPAID', 'DEFERRED_DEBIT', 'CHARGE'])
      .exactOptional()
      .openapi({
        description:
          'Card funding type.\n\n| Value | Description |\n| ----- | ----------- |\n| `DEBIT` | Debit card. |\n| `CREDIT` | Credit card. |\n| `PREPAID` | Prepaid card. |\n| `DEFERRED_DEBIT` | Deferred debit card. |\n| `CHARGE` | Charge card. |',
      }),
    customer_card_category: z
      .enum(['consumer', 'commercial'])
      .exactOptional()
      .openapi({
        description:
          'Card commercial category.\n\n| Value | Description |\n| ----- | ----------- |\n| `consumer` | Personal card. |\n| `commercial` | Business or corporate card. |',
      }),
    customer_email: z
      .email()
      .exactOptional()
      .openapi({ description: 'Email address of the customer.' }),
    fee_amount: z
      .number()
      .exactOptional()
      .openapi({
        description:
          'Total fee amount charged for the payment. Omitted for failed and declined payments.',
      }),
    fee_currency: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The [ISO 4217](https://en.wikipedia.org/wiki/ISO_4217) currency code of the fee. Omitted for failed and declined payments.',
        example: 'GBP',
      }),
  })
  .openapi({
    title: 'Report-Run-Csv-Payments',
    description:
      "CSV output for `payments_report` report type. Contains all payments including failed and declined ones.\n\nThe first row is a header row with column names. Subsequent rows contain payment data, one row per payment.\n\nFor failed and declined payments, `fee_amount` and `fee_currency` are omitted. For payments made without a card, card-related columns are omitted.\n\n:::note\nThe actual response is a raw `text/csv` string. The object schema below is a documentation convention only: OpenAPI's schema language (JSON Schema) describes JSON data shapes and has no native construct for typed CSV columns, so each property here corresponds to a CSV column header rather than a JSON field.\n:::",
    required: [],
  })
  .openapi('ReportRunCsvPayments')

const ReportRunCsvPayoutSchema = z
  .object({
    created_date: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({ description: 'Date and time the transaction was created.' }),
    completed_date: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({ description: 'Date and time the transaction was completed.' }),
    payout_affected_date: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({ description: 'Date and time the payout was affected by this transaction.' }),
    affected_payout_amount: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Indicates whether this transaction contributed to the payout amount (`true`) or not (`false`).\n\n:::note\nDespite the name implying a monetary amount, this field is a boolean flag. The payout statement report only includes transactions where `affected_payout_amount` is `true` - transactions that did not affect the payout amount are excluded from the report.\n:::',
      }),
    transaction_id: z
      .uuid()
      .exactOptional()
      .openapi({
        description:
          'Unique identifier of the ledger transaction in the core settlement system. Matches `transaction_id` in the settlement report for the same event. Use `order_id` to cross-reference with the payments report.',
      }),
    order_id: z
      .uuid()
      .exactOptional()
      .openapi({
        description:
          'Unique identifier of the order associated with this transaction. Use `order_id` to cross-reference with the payments report or settlement report.',
      }),
    dispute_id: z
      .uuid()
      .exactOptional()
      .openapi({
        description:
          'Unique identifier of the dispute associated with a chargeback or chargeback reversal transaction. Empty for rows not related to a dispute.',
      }),
    merchant_order_reference: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "Merchant's order reference. The value of the `merchant_order_data.reference` field set when the order was created.",
      }),
    type: z
      .enum([
        'Settlement',
        'Refund',
        'External transfer money return',
        'Topup',
        'Topup Return',
        'Customer dispute - withdrawal',
        'Customer dispute - won',
        'Transfer from linked pocket',
        'Automatic negative balance recovery',
        'Payout',
        'Payout to an external account',
        'Transfer from linked pocket with FX',
        'Payout with FX',
        'Money reserve block',
        'Money reserve unblock',
        'IC++ post-billing fee',
        'Fee refund',
        'Unrecognised transaction',
        'Irreducible balance hold',
      ])
      .exactOptional()
      .openapi({
        description:
          'Type of the transaction.\n\n| Value | Description |\n| ----- | ----------- |\n| `Settlement` | Settlement of a payment into the merchant balance. |\n| `Refund` | Refund entry reducing the merchant balance. |\n| `External transfer money return` | Return of an external transfer entry. |\n| `Topup` | Balance top-up entry. |\n| `Topup Return` | Reversal of a top-up entry. |\n| `Customer dispute - withdrawal` | Chargeback or dispute withdrawal from the merchant balance. |\n| `Customer dispute - won` | Reversal of a previous dispute withdrawal. |\n| `Transfer from linked pocket` | Transfer from a linked balance pocket. |\n| `Automatic negative balance recovery` | Automatic recovery entry for a negative balance. |\n| `Payout` | Payout-related ledger entry. |\n| `Payout to an external account` | Transfer of payout funds to an external account. |\n| `Transfer from linked pocket with FX` | Transfer from a linked pocket involving FX conversion. |\n| `Payout with FX` | Payout-related entry involving FX conversion. |\n| `Money reserve block` | Reserve block entry withholding funds. |\n| `Money reserve unblock` | Release of previously blocked reserve funds. |\n| `IC++ post-billing fee` | IC++ fee charged after billing. |\n| `Fee refund` | Reversal of a previously charged fee. |\n| `Unrecognised transaction` | Transaction that does not map to a more specific category. |\n| `Irreducible balance hold` | Temporary hold on the irreducible balance amount during payout processing. Only `PENDING` and `REVERTED` states are possible - this transaction never reaches `COMPLETED` state because it represents a temporary hold, not an actual transfer. |\n\n:::note [Irreducible balance hold lifecycle]\nThese transactions appear in pairs across consecutive payouts:\n\n- A `PENDING` row at payout time represents the current hold. Its `transaction_amount` is negative (funds held).\n- A `REVERTED` row at payout time represents the release of a hold placed at the previous payout. Its `transaction_amount` is positive (funds released).\n\nBoth rows have `affected_payout_amount` set to `true` - the hold directly reduces the payout amount by the irreducible balance amount.\n\nIf the merchant has not configured an irreducible balance, no rows of this type will appear in the report.\n:::',
      }),
    related_icpp_charge_id: z
      .uuid()
      .exactOptional()
      .openapi({
        description:
          'Unique identifier of the IC++ charge related to the transaction, if applicable.',
      }),
    transaction_amount: z
      .number()
      .exactOptional()
      .openapi({ description: 'Amount of the transaction in the transaction currency.' }),
    transaction_currency: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The [ISO 4217](https://en.wikipedia.org/wiki/ISO_4217) currency code of the transaction.',
        example: 'GBP',
      }),
    billing_amount: z
      .number()
      .exactOptional()
      .openapi({ description: 'Amount of the transaction in the billing currency.' }),
    billing_currency: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The [ISO 4217](https://en.wikipedia.org/wiki/ISO_4217) currency code of the billing amount.',
        example: 'GBP',
      }),
    state: z
      .enum(['COMPLETED', 'PENDING', 'REVERTED', 'DECLINED', 'FAILED'])
      .exactOptional()
      .openapi({
        description:
          'State of the transaction.\n\n| Value | Description |\n| ----- | ----------- |\n| `COMPLETED` | The transaction has completed successfully. |\n| `PENDING` | The transaction is pending. |\n| `REVERTED` | The transaction has been reverted. Only applicable to `Irreducible balance hold` type transactions - the hold from a previous payout is released. |\n| `DECLINED` | The transaction was declined. Rare - only appears if a declined transaction affected the payout balance. |\n| `FAILED` | The transaction failed. Rare - only appears if a failed transaction affected the payout balance. |\n\n:::note\n`Irreducible balance hold` transactions can only have `PENDING` or `REVERTED` states. They never reach `COMPLETED` state because they represent a temporary hold on funds during the payout process, not an actual transfer.\n:::',
        example: 'COMPLETED',
      }),
    original_transaction_id: z
      .uuid()
      .exactOptional()
      .openapi({
        description:
          'For refunds and chargebacks, the ledger transaction ID of the original payment that this transaction reverses. Corresponds to `transaction_id` on the original settlement row. \n\n:::note\nPopulated only for reversal-type rows - for example, when `type` is `Refund` or `Customer dispute - withdrawal`.\n:::',
      }),
    original_transaction_amount: z
      .number()
      .exactOptional()
      .openapi({ description: 'Amount of the original transaction.' }),
    original_transaction_currency: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The [ISO 4217](https://en.wikipedia.org/wiki/ISO_4217) currency code of the original transaction.',
        example: 'GBP',
      }),
    original_order_id: z
      .uuid()
      .exactOptional()
      .openapi({
        description:
          "For refunds and chargebacks, the order ID of the original payment that this transaction reverses. Refunds and chargebacks create their own order in the system, so `order_id` refers to the refund or chargeback order while `original_order_id` points back to the original payment's order. For settlement transactions, matches `order_id`.",
      }),
    original_order_channel: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Channel through which the original order was created.\n\nThe value depends on the original order source and integration. It may reflect platform-specific or externally provided values, so the set of returned values should not be treated as a fixed enum.',
        example: 'API',
      }),
    original_merchant_order_reference: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "Merchant's order reference for the original order. The value of the `merchant_order_data.reference` field set when the original order was created.",
      }),
    fee_amount: z
      .number()
      .exactOptional()
      .openapi({ description: 'Total fee amount charged for the transaction.' }),
    fee_currency: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The [ISO 4217](https://en.wikipedia.org/wiki/ISO_4217) currency code of the fee.',
        example: 'GBP',
      }),
    settlement_amount: z
      .number()
      .exactOptional()
      .openapi({ description: "Total amount settled on the merchant's account." }),
    settlement_currency: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The [ISO 4217](https://en.wikipedia.org/wiki/ISO_4217) currency code of the settled amount.',
        example: 'GBP',
      }),
    location_id: z
      .uuid()
      .exactOptional()
      .openapi({
        description: 'Unique identifier of the location associated with the transaction.',
      }),
    location_name: z
      .string()
      .exactOptional()
      .openapi({ description: 'Name of the location associated with the transaction.' }),
    submerchant_id: z
      .uuid()
      .exactOptional()
      .openapi({
        description: 'Unique identifier of the submerchant associated with the transaction.',
      }),
    payout_transfer_reference: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Reference of the bank transfer for this payout. This value is the same across all rows in the report, as each report covers a single payout.',
      }),
    payout_total_amount: z
      .number()
      .exactOptional()
      .openapi({
        description:
          'Total amount of this payout. This value is the same across all rows in the report, as each report covers a single payout.',
      }),
    payout_date: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({
        description:
          'Date and time the payout covered by this report was created, in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) UTC date-time format. This value is the same across all rows in the report, as each report covers a single payout.',
      }),
  })
  .openapi({
    title: 'Report-Run-Csv-Payout',
    description:
      "CSV output for `payout_statement_report` report type. Contains all transactions that contributed to a specific payout.\n\nThe first row is a header row with column names. Subsequent rows contain transaction data, one row per transaction.\n\n:::note\nThe actual response is a raw `text/csv` string. The object schema below is a documentation convention only: OpenAPI's schema language (JSON Schema) describes JSON data shapes and has no native construct for typed CSV columns, so each property here corresponds to a CSV column header rather than a JSON field.\n:::",
    required: [],
  })
  .openapi('ReportRunCsvPayout')

const ReportRunCsvIcppSchema = z
  .object({
    id: z
      .uuid()
      .exactOptional()
      .openapi({
        description:
          'Unique identifier of the payment in the acquiring system. Corresponds to `payment_id` in the payments report for the same payment.',
      }),
    created_at: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({ description: 'Date and time the payment was created.' }),
    operation: z
      .enum(['SALE', 'REFUND', 'DISPUTE'])
      .exactOptional()
      .openapi({
        description:
          'Type of the IC++ transaction.\n\n| Value | Description |\n| ----- | ----------- |\n| `SALE` | Fee breakdown for a payment sale. |\n| `REFUND` | Fee breakdown for a refund. |\n| `DISPUTE` | Fee breakdown for a dispute-related transaction. |',
      }),
    amount: z.number().exactOptional().openapi({ description: 'Transaction amount.' }),
    currency: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The [ISO 4217](https://en.wikipedia.org/wiki/ISO_4217) currency code of the transaction.',
        example: 'GBP',
      }),
    settlement_amount: z
      .number()
      .exactOptional()
      .openapi({ description: "Amount settled on the merchant's account." }),
    settlement_currency: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The [ISO 4217](https://en.wikipedia.org/wiki/ISO_4217) currency code of the settled amount.',
        example: 'GBP',
      }),
    payment_method: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Payment method used. Returns `REVOLUT_PAY` for Revolut Pay, or the card scheme name for card payments.',
        example: 'REVOLUT_PAY',
      }),
    card_scheme: z
      .string()
      .exactOptional()
      .openapi({ description: 'Card BIN scheme.', example: 'VISA' }),
    card_funding: z
      .string()
      .exactOptional()
      .openapi({ description: 'Card funding type.', example: 'DEBIT' }),
    order_description: z
      .string()
      .exactOptional()
      .openapi({ description: 'Description of the order.' }),
    order_merchant_external_ref: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "Merchant's order reference. The value of the `merchant_order_data.reference` field set when the order was created.",
      }),
    original_operation_id: z
      .uuid()
      .exactOptional()
      .openapi({
        description:
          'For refunds and disputes, the acquiring ID of the original payment. Corresponds to `original_payment_id` in the payments report.',
      }),
    acquiring_fee_amount: z
      .number()
      .exactOptional()
      .openapi({ description: 'IC++ acquiring markup fee component.' }),
    card_interchange_fee_amount: z
      .number()
      .exactOptional()
      .openapi({ description: 'Interchange fee component. Omitted for Revolut Pay transactions.' }),
    card_scheme_fee_amount: z
      .number()
      .exactOptional()
      .openapi({ description: 'Card scheme fee component. Omitted for Revolut Pay transactions.' }),
    card_type: z
      .enum(['COMMERCIAL', 'CONSUMER'])
      .exactOptional()
      .openapi({
        description:
          'Card commercial category.\n\n| Value | Description |\n| ----- | ----------- |\n| `COMMERCIAL` | Business or corporate card. |\n| `CONSUMER` | Personal card. |',
      }),
    order_channel: z
      .string()
      .exactOptional()
      .openapi({ description: 'Channel through which the order was created.', example: 'API' }),
    card_country: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Country of the card, as an [ISO 3166-1 alpha-2](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2) code.',
        example: 'GB',
      }),
  })
  .openapi({
    title: 'Report-Run-Csv-Icpp',
    description:
      "CSV output for `icpp_fee_breakdown_report` report type. Contains IC++ fee components broken down per transaction for a specific IC++ charge.\n\nThe first row is a header row with column names. Subsequent rows contain one row per transaction.\n\n`card_interchange_fee_amount` and `card_scheme_fee_amount` are omitted for Revolut Pay transactions.\n\n:::note\nThe actual response is a raw `text/csv` string. The object schema below is a documentation convention only: OpenAPI's schema language (JSON Schema) describes JSON data shapes and has no native construct for typed CSV columns, so each property here corresponds to a CSV column header rather than a JSON field.\n\n`payment_method` in this report returns `REVOLUT_PAY` for Revolut Pay transactions. Other reports use `PAY_WITH_REVOLUT` for the same payment method.\n:::",
    required: [],
  })
  .openapi('ReportRunCsvIcpp')

const WebhookIdSchema = z
  .uuid()
  .openapi({ title: 'Webhook-Id', description: 'The ID of the webhook.' })
  .openapi('WebhookId')

const WebhookUrlSchema = z
  .url()
  .regex(/^https?:\/{2}.+/)
  .max(2000)
  .openapi({
    title: 'Webhook-Url',
    description:
      "Your webhook's URL to which event notifications will be sent. \n\nMust be a valid HTTP or HTTPS URL, capable of receiving `POST` requests.\n\n:::warning\nRestrictions:\n- Must be a valid URI as defined by [RFC 3986](https://datatracker.ietf.org/doc/html/rfc3986)\n- URI scheme is required and must be either `http` or `https`\n- URI host is required and cannot be `localhost` or an IP address\n- Max length: `2000`\n- Reserved or invalid characters must be percent-encoded (for example, use `%20` instead of a space)\n:::",
  })
  .openapi('WebhookUrl')

const WebhookEventsSchema = z
  .array(
    z
      .enum([
        'ORDER_COMPLETED',
        'ORDER_AUTHORISED',
        'ORDER_CANCELLED',
        'ORDER_FAILED',
        'ORDER_INCREMENTAL_AUTHORISATION_AUTHORISED',
        'ORDER_INCREMENTAL_AUTHORISATION_DECLINED',
        'ORDER_INCREMENTAL_AUTHORISATION_FAILED',
        'ORDER_PAYMENT_AUTHENTICATION_CHALLENGED',
        'ORDER_PAYMENT_AUTHENTICATED',
        'ORDER_PAYMENT_AUTHORISATION_STARTED',
        'ORDER_PAYMENT_DECLINED',
        'ORDER_PAYMENT_FAILED',
        'SUBSCRIPTION_INITIATED',
        'SUBSCRIPTION_FINISHED',
        'SUBSCRIPTION_CANCELLED',
        'SUBSCRIPTION_OVERDUE',
        'PAYOUT_INITIATED',
        'PAYOUT_COMPLETED',
        'PAYOUT_FAILED',
        'DISPUTE_ACTION_REQUIRED',
        'DISPUTE_UNDER_REVIEW',
        'DISPUTE_WON',
        'DISPUTE_LOST',
      ])
      .openapi({ description: 'The available event types your can listen to.' }),
  )
  .min(1)
  .openapi({
    title: 'Webhook-Events',
    description:
      'List of event types that the webhook is configured to listen to.\n\nEach event is related to status changes of a specific object in the Merchant API:\n\n  | Object | Event types |\n  | --------- | ----------- |\n  | `Order`   | <ul> <li>`ORDER_COMPLETED`</li> <li>`ORDER_AUTHORISED`</li> <li>`ORDER_CANCELLED`</li> <li>`ORDER_FAILED`</li> <li>`ORDER_INCREMENTAL_AUTHORISATION_AUTHORISED`</li> <li>`ORDER_INCREMENTAL_AUTHORISATION_DECLINED`</li> <li>`ORDER_INCREMENTAL_AUTHORISATION_FAILED`</li> </ul> |\n  | `Payment` | <ul> <li>`ORDER_PAYMENT_AUTHENTICATION_CHALLENGED`</li> <li>`ORDER_PAYMENT_AUTHENTICATED`</li> <li>`ORDER_PAYMENT_AUTHORISATION_STARTED`</li> <li>`ORDER_PAYMENT_DECLINED`</li> <li>`ORDER_PAYMENT_FAILED`</li> </ul> |\n  | `Subscription`  | <ul> <li>`SUBSCRIPTION_INITIATED`</li> <li>`SUBSCRIPTION_FINISHED`</li> <li>`SUBSCRIPTION_CANCELLED`</li> <li>`SUBSCRIPTION_OVERDUE`</li></ul> |\n  | `Payout`  | <ul> <li>`PAYOUT_INITIATED`</li> <li>`PAYOUT_COMPLETED`</li> <li>`PAYOUT_FAILED`</li> </ul> |\n  | `Dispute`  | <ul> <li>`DISPUTE_ACTION_REQUIRED`</li> <li>`DISPUTE_UNDER_REVIEW`</li> <li>`DISPUTE_WON`</li> <li>`DISPUTE_LOST`</li></ul> |',
  })
  .openapi('WebhookEvents')

const WebhookSigningSecretSchema = z
  .string()
  .openapi({
    title: 'Webhook-Signing-Secret',
    description:
      "The signing secret for the webhook. Use it to verify the signature for the webhook request's payload.",
  })
  .openapi('WebhookSigningSecret')

const WebhookV2Schema = z
  .object({
    id: WebhookIdSchema,
    url: WebhookUrlSchema,
    events: WebhookEventsSchema,
    signing_secret: WebhookSigningSecretSchema,
  })
  .openapi({
    title: 'Webhook-v2',
    description:
      'A webhook object.\n\nUnlike the legacy API, `signing_secret` is included in all webhook responses, not only on creation.',
    required: ['id', 'url', 'events', 'signing_secret'],
  })
  .openapi('WebhookV2')

const WebhooksSchema = z
  .object({
    webhooks: z.array(WebhookV2Schema).max(10).openapi({ description: 'List of webhooks.' }),
  })
  .openapi({
    title: 'Webhooks',
    description: 'A list of configured webhooks for the merchant.',
    required: ['webhooks'],
  })
  .openapi('Webhooks')

const WebhookCreationSchema = z
  .object({ url: WebhookUrlSchema, events: WebhookEventsSchema })
  .openapi({
    title: 'Webhook-Creation',
    description:
      'Request body for creating or updating a webhook, including the endpoint URL and subscribed events.',
    required: ['url', 'events'],
  })
  .openapi('WebhookCreation')

const WebhookUpdateSchema = z
  .object({ url: WebhookUrlSchema.exactOptional(), events: WebhookEventsSchema.exactOptional() })
  .openapi({
    title: 'Webhook-Update',
    description:
      'The request body for updating a webhook.\n\nAll fields are optional. Only the fields provided in the request will be updated.',
    required: [],
  })
  .openapi('WebhookUpdate')

const SynchronousWebhookSchema = z
  .object({
    id: z.uuid().openapi({ description: 'The ID of the synchronous webhook object.' }),
    signing_key: z
      .string()
      .regex(/^swsk_[a-zA-Z0-9]{32}$/)
      .openapi({
        description:
          'A randomly generated signing key, which can be used by merchants to authenticate requests from Revolut by verifying the signature. For more information, see: [Payload Signature](https://developer.revolut.com/docs/api/merchant#authentication).',
      }),
    url: z
      .url()
      .regex(/^https:\/{2}.+/)
      .max(2000)
      .openapi({
        description:
          'The valid URL of the endpoint, that uses HTTPS URL schema. Revolut sends the shipping address of the customer to this URL for validation.\n\n:::warning\nRestrictions:\n- Must be a valid URI as defined by [RFC 3986](https://datatracker.ietf.org/doc/html/rfc3986)\n- URI scheme is required and must be `https`\n- URI host is required and cannot be `localhost` or an IP address\n- Max length: `2000`\n- Reserved or invalid characters must be percent-encoded (for example, use `%20` instead of a space)\n:::',
      }),
    event_type: z
      .literal('fast_checkout.validate_address')
      .openapi({
        description:
          'Type of event this synchronous webhook is configured for.\n\n:::note\nAt the moment, synchronous webhooks only support address validation events. \n:::',
      }),
    location_id: LocationIdSchema.exactOptional(),
  })
  .openapi({
    title: 'Synchronous-Webhook',
    description:
      'A synchronous webhook configuration for real-time address validation during fast checkout.',
    required: ['id', 'signing_key', 'url', 'event_type'],
  })
  .openapi('SynchronousWebhook')

const SynchronousWebhookCreationSchema = z
  .object({
    event_type: z
      .literal('fast_checkout.validate_address')
      .openapi({
        description:
          'Type of event this synchronous webhook is configured for.\n\n:::note\nAt the moment, synchronous webhooks only support address validation events. \n:::',
      }),
    url: z
      .url()
      .regex(/^https:\/{2}.+/)
      .max(2000)
      .openapi({
        description:
          'The valid URL of the endpoint, that uses HTTPS URL schema. Revolut sends the shipping address of the customer to this URL for validation.\n\n:::warning\nRestrictions:\n- Must be a valid URI as defined by [RFC 3986](https://datatracker.ietf.org/doc/html/rfc3986)\n- URI scheme is required and must be `https`\n- URI host is required and cannot be `localhost` or an IP address\n- Max length: `2000`\n- Reserved or invalid characters must be percent-encoded (for example, use `%20` instead of a space)\n:::',
      }),
    location_id: LocationIdSchema.exactOptional(),
  })
  .openapi({
    title: 'Synchronous-Webhook-Creation',
    description:
      'The `SynchronousWebhook` object allows merchants to register endpoints on their backend for receiving predefined event types. Currently, only address validation events are available.\n\nIn addition, merchants can specify locations representing their online stores, enabling them to set up different webhooks for different stores.',
    required: ['event_type', 'url'],
  })
  .openapi('SynchronousWebhookCreation')

const LocationNameSchema = z
  .string()
  .openapi({
    title: 'Location-Name',
    description:
      "Name of the location. \n\n:::warning\nThe `name` parameter's value must be unique across all locations.\n:::",
  })
  .openapi('LocationName')

const LocationTypeSchema = z
  .enum(['online', 'physical'])
  .openapi({
    title: 'Location-Type',
    description:
      'Type of the location.\n\n| Value | Description |\n| ----- | ----------- |\n| `online` | Represents an online store. |\n| `physical` | Represents a physical point of sale. |',
  })
  .openapi('LocationType')

const LocationOnlineDetailsSchema = z
  .object({
    domain: z
      .string()
      .openapi({
        description:
          "Domain address of the location. Required for online locations.\n\n:::warning\nThe `domain` parameter's value must be unique across all locations.\n:::",
      }),
  })
  .openapi({
    title: 'Location-Online-Details',
    description: 'Additional details of the location.',
    required: ['domain'],
  })
  .openapi('LocationOnlineDetails')

const LocationOnlineSchema = z
  .object({
    id: LocationIdSchema,
    name: LocationNameSchema,
    type: LocationTypeSchema,
    details: LocationOnlineDetailsSchema,
  })
  .openapi({
    title: 'Location-Online',
    description: 'An online merchant location, including its ID, name, type, and details.',
    required: ['id', 'name', 'type', 'details'],
  })
  .openapi('LocationOnline')

const GeoLocationSchema = z
  .object({
    lat: z
      .float64()
      .min(-90)
      .max(90)
      .openapi({ description: 'The latitude of the location, in decimal degrees.' }),
    lon: z
      .float64()
      .min(-180)
      .max(180)
      .openapi({ description: 'To longitude of the location, in decimal degrees.' }),
  })
  .openapi({
    title: 'Geo-Location',
    description: 'Coordinates of the location.',
    required: ['lat', 'lon'],
  })
  .openapi('GeoLocation')

const DayOpeningHoursSchema = z
  .array(
    z
      .object({
        from: z
          .string()
          .regex(
            /^(?:[01]\d|2[0-3]):[0-5]\d(?::[0-5]\d(?:\.\d+)?)?(?:Z|[+-](?:[01]\d|2[0-3]):[0-5]\d)?$/,
          )
          .openapi({
            format: 'time',
            description:
              'The local time when the interval begins.\n\n:::note\nThe format is `hh:mm[:ss]`; seconds are optional and must be `00` if provided.\n:::',
            example: '09:00:00',
          }),
        to: z
          .string()
          .regex(
            /^(?:[01]\d|2[0-3]):[0-5]\d(?::[0-5]\d(?:\.\d+)?)?(?:Z|[+-](?:[01]\d|2[0-3]):[0-5]\d)?$/,
          )
          .openapi({
            format: 'time',
            description:
              'The local time when the interval ends.\n\n:::note\nThe format is `hh:mm[:ss]`; seconds are optional and must be `00` if provided.\n:::',
            example: '18:00:00',
          }),
      })
      .openapi({ required: ['from', 'to'] }),
  )
  .openapi({
    title: 'Day-Opening-Hours',
    description:
      'A list of one or more time intervals for a single day. \n\nA day can have multiple intervals (e.g., closing for a lunch break).',
  })
  .openapi('DayOpeningHours')

const OpeningHoursSchema = z
  .object({
    monday: DayOpeningHoursSchema.exactOptional().openapi({
      description: 'Opening hours for Monday.',
    }),
    tuesday: DayOpeningHoursSchema.exactOptional().openapi({
      description: 'Opening hours for Tuesday.',
    }),
    wednesday: DayOpeningHoursSchema.exactOptional().openapi({
      description: 'Opening hours for Wednesday.',
    }),
    thursday: DayOpeningHoursSchema.exactOptional().openapi({
      description: 'Opening hours for Thursday.',
    }),
    friday: DayOpeningHoursSchema.exactOptional().openapi({
      description: 'Opening hours for Friday.',
    }),
    saturday: DayOpeningHoursSchema.exactOptional().openapi({
      description: 'Opening hours for Saturday.',
    }),
    sunday: DayOpeningHoursSchema.exactOptional().openapi({
      description: 'Opening hours for Sunday.',
    }),
  })
  .openapi({
    title: 'Opening-Hours',
    description:
      'An object containing the opening hours for each day of the week.\n\nA day can have multiple intervals (e.g., closing for a lunch break).',
    required: [],
  })
  .openapi('OpeningHours')

const LocationPhysicalDetailsSchema = z
  .object({
    address: AddressV3Schema,
    geo_location: GeoLocationSchema,
    opening_hours: OpeningHoursSchema,
  })
  .openapi({
    title: 'Location-Physical-Details',
    description: 'Additional details of the location.',
    required: ['address', 'geo_location', 'opening_hours'],
  })
  .openapi('LocationPhysicalDetails')

const LocationPhysicalSchema = z
  .object({
    id: LocationIdSchema,
    name: LocationNameSchema,
    type: LocationTypeSchema,
    details: LocationPhysicalDetailsSchema,
  })
  .openapi({
    title: 'Location-Physical',
    description: 'A physical merchant location, including its ID, name, type, and details.',
    required: ['id', 'name', 'type', 'details'],
  })
  .openapi('LocationPhysical')

const LocationSchema = z
  .xor([LocationOnlineSchema, LocationPhysicalSchema])
  .openapi({
    title: 'Location',
    description: 'Location object represents merchant locations depending on type.',
    discriminator: {
      propertyName: 'type',
      mapping: {
        online: '#/components/schemas/Location-Online',
        physical: '#/components/schemas/Location-Physical',
      },
    },
  })
  .openapi('Location')

const LocationCreationOnlineSchema = z
  .object({
    name: LocationNameSchema,
    type: LocationTypeSchema,
    details: LocationOnlineDetailsSchema,
  })
  .openapi({
    title: 'Location-Creation-Online',
    description: 'Request body for creating an online merchant location.',
    required: ['name', 'type', 'details'],
  })
  .openapi('LocationCreationOnline')

const LocationCreationPhysicalSchema = z
  .object({
    name: LocationNameSchema,
    type: LocationTypeSchema,
    details: LocationPhysicalDetailsSchema,
  })
  .openapi({
    title: 'Location-Creation-Physical',
    description: 'Request body for creating a physical merchant location.',
    required: ['name', 'type', 'details'],
  })
  .openapi('LocationCreationPhysical')

const LocationCreationSchema = z
  .xor([LocationCreationOnlineSchema, LocationCreationPhysicalSchema])
  .openapi({
    title: 'Location-Creation',
    description:
      'Request body for creating a location. The structure of the `details` object depends on the `type` of the location.',
    discriminator: {
      propertyName: 'type',
      mapping: {
        online: '#/components/schemas/Location-Creation-Online',
        physical: '#/components/schemas/Location-Creation-Physical',
      },
    },
  })
  .openapi('LocationCreation')

const LocationUpdateOnlineSchema = z
  .object({
    name: LocationNameSchema.exactOptional(),
    details: LocationOnlineDetailsSchema.exactOptional(),
  })
  .openapi({
    title: 'Location-Update-Online',
    description: "Request body for updating an online merchant location's name or details.",
    required: [],
  })
  .openapi('LocationUpdateOnline')

const LocationUpdatePhysicalSchema = z
  .xor([LocationOnlineSchema, LocationPhysicalSchema])
  .openapi({
    title: 'Location-Update-Physical',
    description: 'Location object represents merchant locations depending on type.',
    discriminator: {
      propertyName: 'type',
      mapping: {
        online: '#/components/schemas/Location-Online',
        physical: '#/components/schemas/Location-Physical',
      },
    },
  })
  .openapi('LocationUpdatePhysical')

const LocationUpdateSchema = z
  .xor([LocationUpdateOnlineSchema, LocationUpdatePhysicalSchema])
  .openapi({
    title: 'Location-Update',
    description:
      'Request body for updating a location. The structure of the `details` object depends on the `type` of the location.',
    discriminator: {
      propertyName: 'type',
      mapping: {
        online: '#/components/schemas/Location-Update-Online',
        physical: '#/components/schemas/Location-Update-Physical',
      },
    },
  })
  .openapi('LocationUpdate')

const TerminalOperationModeSchema = z
  .enum(['pos', 'payment_acceptance'])
  .openapi({
    title: 'Terminal-Operation-Mode',
    description:
      'The operation mode of the terminal.\n\n  | Value | Description |\n|-------|-------------|\n| `pos` | Returns only terminals in Pay at Counter mode |\n| `payment_acceptance` | Returns only terminals in standard checkout mode |',
  })
  .openapi('TerminalOperationMode')

const TerminalIdSchema = z
  .uuid()
  .openapi({ title: 'Terminal-Id', description: 'The unique identifier of the terminal.' })
  .openapi('TerminalId')

const TerminalNameSchema = z
  .string()
  .openapi({ title: 'Terminal-Name', description: 'The name of the terminal device.' })
  .openapi('TerminalName')

const TerminalTypeSchema = z
  .enum(['youtransactor_ucube_touch', 'newland_n950', 'newland_n750', 'newland_r25p'])
  .openapi({
    title: 'Terminal-Type',
    description: 'The hardware type/model of the terminal device.',
  })
  .openapi('TerminalType')

const TerminalSerialNumberSchema = z
  .string()
  .openapi({
    title: 'Terminal-Serial-Number',
    description: 'The serial number of the terminal device.',
    example: 'RT-00123456',
  })
  .openapi('TerminalSerialNumber')

const TerminalBatteryLevelSchema = z
  .int()
  .min(0)
  .max(100)
  .openapi({
    title: 'Terminal-Battery-Level',
    description: 'The current battery level of the terminal as a percentage (0-100).',
  })
  .openapi('TerminalBatteryLevel')

const TerminalOnlineSchema = z
  .boolean()
  .openapi({
    title: 'Terminal-Online',
    description:
      'Indicates whether the terminal is currently online and connected.\n\n| Value | Description |\n|-------|-------------|\n| `true` | Terminal is online and available |\n| `false` | Terminal is offline |',
  })
  .openapi('TerminalOnline')

const TerminalLastOnlineAtSchema = z.iso
  .datetime({ offset: true })
  .openapi({
    title: 'Terminal-Last-Online-At',
    description: 'The date and time when the terminal was last seen online.',
  })
  .openapi('TerminalLastOnlineAt')

const TerminalDeviceIdSchema = z
  .uuid()
  .openapi({
    title: 'Terminal-Device-Id',
    description:
      'The unique identifier of the Revolut app installed on the terminal, assigned during device pairing. Only returned for Newland terminal types.',
  })
  .openapi('TerminalDeviceId')

const TerminalSchema = z
  .object({
    id: TerminalIdSchema,
    name: TerminalNameSchema.exactOptional(),
    type: TerminalTypeSchema,
    serial_number: TerminalSerialNumberSchema,
    battery_level: TerminalBatteryLevelSchema.exactOptional(),
    online: TerminalOnlineSchema,
    last_online_at: TerminalLastOnlineAtSchema.exactOptional(),
    device_id: TerminalDeviceIdSchema.exactOptional(),
  })
  .openapi({
    title: 'Terminal',
    description: 'Represents a Revolut Terminal device.',
    required: ['id', 'type', 'serial_number', 'online'],
  })
  .openapi('Terminal')

const TerminalsSchema = z
  .array(TerminalSchema)
  .openapi({ title: 'Terminals', description: 'List of terminal devices.' })
  .openapi('Terminals')

const TerminalsResponseSchema = z
  .object({ terminals: TerminalsSchema })
  .openapi({
    title: 'Terminals-Response',
    description: 'Response containing a list of terminals.',
    required: ['terminals'],
  })
  .openapi('TerminalsResponse')

const PaymentIntentAmountSchema = z
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
    title: 'Payment-Intent-Amount',
    description:
      'The payment amount expressed in minor currency units, according to the [ISO 4217 standard](https://en.wikipedia.org/wiki/ISO_4217). For example, `7034` in `EUR` corresponds to €70.34.\n\n:::info\nConversion between major and minor units varies by currency. For instance, `100` minor units equal £1.00 in `GBP`, whereas in `ISK` they represent 100 units. For more details, see the [ISO 4217 standard](https://en.wikipedia.org/wiki/ISO_4217).\n:::',
  })
  .openapi('PaymentIntentAmount')

const PaymentIntentCreationSchema = z
  .object({ amount: PaymentIntentAmountSchema, terminal_id: TerminalIdSchema })
  .openapi({
    title: 'Payment-Intent-Creation',
    description: 'Request body for creating a payment intent to push to a terminal.',
    required: ['amount', 'terminal_id'],
  })
  .openapi('PaymentIntentCreation')

const PaymentIntentIdSchema = z
  .uuid()
  .openapi({
    title: 'Payment-Intent-Id',
    description: 'The unique identifier of the payment intent.',
  })
  .openapi('PaymentIntentId')

const PaymentIntentStateSchema = z
  .enum(['pending', 'processing', 'completed', 'cancelled', 'failed'])
  .openapi({
    title: 'Payment-Intent-State',
    description:
      'The current state of the payment intent.\n\n| State | Description |\n|-------|-------------|\n| `pending` | Payment intent created and sent to terminal, customer has not yet started interacting |\n| `processing` | Customer is actively interacting with the terminal (e.g., inserting card, entering PIN) |\n| `completed` | Payment authorization is complete, includes a `payment_id` in the response |\n| `cancelled` | Payment intent was cancelled (by system or customer) |\n| `failed` | Payment intent failed due to technical issues (timeout, terminal unavailable, network error) |',
  })
  .openapi('PaymentIntentState')

const PaymentIntentSchema = z
  .object({
    id: PaymentIntentIdSchema,
    state: PaymentIntentStateSchema,
    terminal_id: TerminalIdSchema,
    order_id: OrderIdSchema,
    payment_id: PaymentIdSchema.exactOptional(),
    amount: PaymentIntentAmountSchema,
    currency: CurrencySchema,
    created_at: z.iso
      .datetime({ offset: true })
      .openapi({ description: 'The date and time the payment intent was created.' }),
    updated_at: z.iso
      .datetime({ offset: true })
      .openapi({ description: 'The date and time the payment intent was last updated.' }),
  })
  .openapi({
    title: 'Payment-Intent',
    description:
      'Represents a payment intent that has been pushed to a Revolut Terminal device.\n\nWhen the payment intent reaches `completed` state, it includes a `payment_id` that can be used to [retrieve the final payment status](https://developer.revolut.com/docs/api/merchant#retrieve-payment-details).',
    required: [
      'id',
      'order_id',
      'state',
      'amount',
      'currency',
      'terminal_id',
      'created_at',
      'updated_at',
    ],
  })
  .openapi('PaymentIntent')

const WebhookCallbackEventSchema = z
  .enum([
    'ORDER_COMPLETED',
    'ORDER_AUTHORISED',
    'ORDER_CANCELLED',
    'ORDER_FAILED',
    'ORDER_INCREMENTAL_AUTHORISATION_AUTHORISED',
    'ORDER_INCREMENTAL_AUTHORISATION_DECLINED',
    'ORDER_INCREMENTAL_AUTHORISATION_FAILED',
    'ORDER_PAYMENT_AUTHENTICATION_CHALLENGED',
    'ORDER_PAYMENT_AUTHENTICATED',
    'ORDER_PAYMENT_AUTHORISATION_STARTED',
    'ORDER_PAYMENT_DECLINED',
    'ORDER_PAYMENT_FAILED',
    'SUBSCRIPTION_INITIATED',
    'SUBSCRIPTION_FINISHED',
    'SUBSCRIPTION_CANCELLED',
    'SUBSCRIPTION_OVERDUE',
    'PAYOUT_INITIATED',
    'PAYOUT_COMPLETED',
    'PAYOUT_FAILED',
    'DISPUTE_ACTION_REQUIRED',
    'DISPUTE_UNDER_REVIEW',
    'DISPUTE_WON',
    'DISPUTE_LOST',
  ])
  .openapi({
    title: 'Webhook-Callback-Event',
    description:
      "The event type of the webhook notification that's sent by Revolut to your webhook URL.\n\nEach event is related to status changes of a specific object in the Merchant API:\n\n  | Object | Event types |\n  | --------- | ----------- |\n  | `Order`   | <ul> <li>`ORDER_COMPLETED`</li> <li>`ORDER_AUTHORISED`</li> <li>`ORDER_CANCELLED`</li> <li>`ORDER_FAILED`</li> <li>`ORDER_INCREMENTAL_AUTHORISATION_AUTHORISED`</li> <li>`ORDER_INCREMENTAL_AUTHORISATION_DECLINED`</li> <li>`ORDER_INCREMENTAL_AUTHORISATION_FAILED`</li> </ul> |\n  | `Payment` | <ul> <li>`ORDER_PAYMENT_AUTHENTICATION_CHALLENGED`</li> <li>`ORDER_PAYMENT_AUTHENTICATED`</li> <li>`ORDER_PAYMENT_AUTHORISATION_STARTED`</li> <li>`ORDER_PAYMENT_DECLINED`</li> <li>`ORDER_PAYMENT_FAILED`</li> </ul> |\n  | `Subscription`  | <ul> <li>`SUBSCRIPTION_INITIATED`</li> <li>`SUBSCRIPTION_FINISHED`</li> <li>`SUBSCRIPTION_CANCELLED`</li> <li>`SUBSCRIPTION_OVERDUE`</li></ul> |\n  | `Payout`  | <ul> <li>`PAYOUT_INITIATED`</li> <li>`PAYOUT_COMPLETED`</li> <li>`PAYOUT_FAILED`</li> </ul> |\n  | `Dispute`  | <ul> <li>`DISPUTE_ACTION_REQUIRED`</li> <li>`DISPUTE_UNDER_REVIEW`</li> <li>`DISPUTE_WON`</li> <li>`DISPUTE_LOST`</li></ul> |",
  })
  .openapi('WebhookCallbackEvent')

const WebhookOrderEventSchema = z
  .object({
    event: WebhookCallbackEventSchema,
    order_id: z.uuid().openapi({ description: 'The ID of the order the event is related to.' }),
    merchant_order_ext_ref: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The information sent during order creation in the\n`merchant_order_data.reference` field.',
      }),
    incremental_authorisation_ext_reference: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The reference sent in the `reference` field of the [Increment authorisation](https://developer.revolut.com/docs/api/merchant#increment-authorisation) request. Only present for incremental authorisation events.',
      }),
  })
  .openapi({
    title: 'Webhook-Order-Event',
    description:
      'A webhook event payload for order-related events, including the order ID and optional reference fields.',
    required: ['event', 'order_id'],
  })
  .openapi('WebhookOrderEvent')

const WebhookSubscriptionEventSchema = z
  .object({
    event: WebhookCallbackEventSchema,
    subscription_id: z
      .uuid()
      .openapi({ description: 'The ID of the subscription the event is related to.' }),
    external_reference: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The information sent in the `external_reference` field of the [Create a subscription](https://developer.revolut.com/docs/api/merchant#create-subscription) request.',
      }),
  })
  .openapi({
    title: 'Webhook-Subscription-Event',
    description:
      'A webhook event payload for subscription-related events, including the subscription ID and external reference.',
    required: ['event', 'subscription_id'],
  })
  .openapi('WebhookSubscriptionEvent')

const WebhookPayoutEventSchema = z
  .object({
    event: WebhookCallbackEventSchema,
    payout_id: z.uuid().openapi({ description: 'The ID of the payout the event is related to.' }),
  })
  .openapi({
    title: 'Webhook-Payout-Event',
    description: 'A webhook event payload for payout-related events, including the payout ID.',
    required: ['event', 'payout_id'],
  })
  .openapi('WebhookPayoutEvent')

const WebhookDisputeEventSchema = z
  .object({
    event: WebhookCallbackEventSchema,
    dispute_id: z.uuid().openapi({ description: 'The ID of the dispute the event is related to.' }),
  })
  .openapi({
    title: 'Webhook-Dispute-Event',
    description: 'A webhook event payload for dispute-related events, including the dispute ID.',
    required: ['event', 'dispute_id'],
  })
  .openapi('WebhookDisputeEvent')

const AuthorizationParamsSchema = z
  .string()
  .openapi({
    param: {
      name: 'Authorization',
      in: 'header',
      schema: {
        type: 'string',
        example: 'Bearer sk_1234567890ABCdefGHIjklMNOpqrSTUvwxYZ_1234567890-Ab_cdeFGHijkLMNopq',
      },
      required: true,
      description:
        "This parameter accepts the [Merchant API Secret key](https://business.revolut.com/settings/apis?tab=merchant-api) to authorise requests coming from the merchant's backend. \n\nIt ensures that ensures that each request is authenticated and authorised by verifying the secret key. The secret key should be included in all request headers as a `Bearer` token.\n\n:::info\nFor more information, see: [Authentication](https://developer.revolut.com/docs/api/merchant#authentication)\n:::",
    },
    example: 'Bearer sk_1234567890ABCdefGHIjklMNOpqrSTUvwxYZ_1234567890-Ab_cdeFGHijkLMNopq',
  })

const RevolutApiVersionParamsSchema = z
  .enum([
    '2023-09-01',
    '2024-05-01',
    '2024-09-01',
    '2025-10-16',
    '2025-12-04',
    '2026-03-12',
    '2026-04-20',
    '2026-08-17',
  ])
  .openapi({
    param: {
      name: 'Revolut-Api-Version',
      in: 'header',
      schema: {
        type: 'string',
        format: 'date',
        example: '2026-08-17',
        enum: [
          '2023-09-01',
          '2024-05-01',
          '2024-09-01',
          '2025-10-16',
          '2025-12-04',
          '2026-03-12',
          '2026-04-20',
          '2026-08-17',
        ],
      },
      required: true,
      description:
        'The version of the Merchant API, specified in `YYYY-MM-DD` format.\n\nIf not specified, you will receive an error.\n\n\n:::info\nFor more information about API versioning, see: [API versions](https://developer.revolut.com/docs/guides/merchant/reference/versioning/api-versions).\n:::',
      'x-config-always-visible-in-example': true,
    },
    example: '2026-08-17',
  })

const LimitParamsSchema = z
  .preprocess(
    (val) =>
      typeof val === 'string' &&
      /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
      (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
        ? Number(val)
        : val,
    z.int().min(1).max(500),
  )
  .default(100)
  .exactOptional()
  .openapi({
    param: {
      name: 'limit',
      in: 'query',
      schema: { type: 'integer', minimum: 1, maximum: 500, default: 100 },
      description: 'Maximum number of records to return. Used for **pagination**.',
      required: false,
    },
  })

const FromParamsSchema = z.iso
  .datetime({ offset: true })
  .exactOptional()
  .openapi({
    param: {
      name: 'from',
      in: 'query',
      schema: { type: 'string', format: 'date-time' },
      description: 'Filter records created from this date/time. Used for **filtering**.',
      required: false,
    },
  })

const ToParamsSchema = z.iso
  .datetime({ offset: true })
  .exactOptional()
  .openapi({
    param: {
      name: 'to',
      in: 'query',
      schema: { type: 'string', format: 'date-time' },
      description: 'Filter records created until this date/time. Used for **filtering**.',
      required: false,
    },
  })

const CustomerIdQueryParamsSchema = z
  .uuid()
  .exactOptional()
  .openapi({
    param: {
      name: 'customer_id',
      in: 'query',
      schema: { type: 'string', format: 'uuid' },
      description: 'Filter orders by the ID of the customer.',
      required: false,
    },
  })

const MerchantOrderDataReferenceParamsSchema = MerchantOrderExternalReferenceSchema.openapi({
  param: {
    name: 'merchant_order_data_reference',
    in: 'query',
    schema: { $ref: '#/components/schemas/Merchant-Order-External-Reference' },
    description:
      'Filter orders by your own order reference set in `merchant_order_data.reference`.',
    required: false,
  },
}).exactOptional()

const OrderStateQueryParamsSchema = z
  .preprocess(
    (val) => (val === undefined || Array.isArray(val) ? val : [val]),
    z.array(OrderStateSchema),
  )
  .exactOptional()
  .openapi({
    param: {
      name: 'state',
      in: 'query',
      required: false,
      explode: true,
      description: 'Filter orders by state. Repeat the parameter to filter by multiple states.',
      schema: { type: 'array', items: { $ref: '#/components/schemas/Order-State' } },
    },
  })

const LocationIdQueryParamsSchema = z
  .uuid()
  .exactOptional()
  .openapi({
    param: {
      name: 'location_id',
      schema: {
        type: 'string',
        format: 'uuid',
        description: 'A UUID string, typically used to identify resources.',
      },
      in: 'query',
      required: false,
      description: 'Filter results by location ID.',
    },
    description: 'A UUID string, typically used to identify resources.',
  })

const OrderIdParamsSchema = z
  .uuid()
  .openapi({
    param: {
      name: 'order_id',
      in: 'path',
      schema: {
        type: 'string',
        format: 'uuid',
        description: 'A UUID string, typically used to identify resources.',
      },
      required: true,
      description: 'The ID of the `Order` object.',
    },
    description: 'A UUID string, typically used to identify resources.',
  })

const RevolutApiVersionOptionalParamsSchema = z
  .enum([
    '2023-09-01',
    '2024-05-01',
    '2024-09-01',
    '2025-10-16',
    '2025-12-04',
    '2026-03-12',
    '2026-04-20',
    '2026-08-17',
  ])
  .exactOptional()
  .openapi({
    param: {
      name: 'Revolut-Api-Version',
      in: 'header',
      schema: {
        type: 'string',
        format: 'date',
        example: '2026-08-17',
        enum: [
          '2023-09-01',
          '2024-05-01',
          '2024-09-01',
          '2025-10-16',
          '2025-12-04',
          '2026-03-12',
          '2026-04-20',
          '2026-08-17',
        ],
      },
      description:
        'The version of the Merchant API, specified in `YYYY-MM-DD` format.\n\n:::info\nFor more information about API versioning, see: [API versions](https://developer.revolut.com/docs/guides/merchant/reference/versioning/api-versions).\n:::',
      'x-config-always-visible-in-example': true,
      required: false,
    },
    example: '2026-08-17',
  })

const IdempotencyKeyParamsSchema = z
  .string()
  .max(50)
  .exactOptional()
  .openapi({
    param: {
      name: 'Idempotency-Key',
      in: 'header',
      schema: { type: 'string', maxLength: 50 },
      required: false,
      description:
        "The `Idempotency-Key` ensures that requests are processed only once, preventing multiple executions of the same operation due to retries or duplicate requests.\n\nThis header is optional and can accept any unique string value the merchant uses.\n\nA recommended practice is to use a unique identifier from your system (such as the entity's ID or a request UUID) as the idempotency key. This facilitates tracking and managing requests effectively.",
    },
  })

const RevolutApiVersion_2024_09_01MinParamsSchema = z
  .enum(['2024-09-01', '2025-10-16', '2025-12-04', '2026-03-12', '2026-04-20', '2026-08-17'])
  .openapi({
    param: {
      name: 'Revolut-Api-Version',
      in: 'header',
      schema: {
        type: 'string',
        format: 'date',
        example: '2026-08-17',
        enum: ['2024-09-01', '2025-10-16', '2025-12-04', '2026-03-12', '2026-04-20', '2026-08-17'],
      },
      required: true,
      description:
        'The version of the Merchant API, specified in `YYYY-MM-DD` format.\n\nThis endpoint is available from version `2024-09-01`. If a version earlier than `2024-09-01` is provided, the endpoint returns a `404` response.\n\nIf not specified, you will receive an error.\n\n\n:::info\nFor more information about API versioning, see: [API versions](https://developer.revolut.com/docs/guides/merchant/reference/versioning/api-versions).\n:::',
      'x-config-always-visible-in-example': true,
    },
    example: '2026-08-17',
  })

const PageTokenParamsSchema = z
  .string()
  .exactOptional()
  .openapi({
    param: {
      name: 'page_token',
      in: 'query',
      schema: { type: 'string' },
      description:
        'Token for retrieving the next page of results. Used for **pagination**.\n\nTo paginate through results:\n\n  1. Make an initial request with the desired `limit`.\n  1. The response will include a `next_page_token` if more results are available.\n  1. Use that token in the `page_token` parameter of your next request.\n  1. Repeat until `next_page_token` is not present.\n\n:::note\nWhen using `page_token`, you must include all query parameters from the initial request (such as `from`, `to`, or other filter parameters) to maintain consistent filtering across pages.\n:::',
      required: false,
    },
  })

const CustomerIdParamsSchema = z
  .uuid()
  .openapi({
    param: {
      name: 'customer_id',
      in: 'path',
      schema: {
        type: 'string',
        format: 'uuid',
        description: 'A UUID string, typically used to identify resources.',
      },
      required: true,
      description: 'The ID of the `Customer` object.',
    },
    description: 'A UUID string, typically used to identify resources.',
  })

const OnlyMerchantParamsSchema = z
  .stringbool()
  .exactOptional()
  .openapi({
    param: {
      name: 'only_merchant',
      in: 'query',
      schema: { type: 'boolean' },
      description:
        'If `true`, returns only the saved payment methods that can be used for\nmerchant-initiated transactions (MIT).',
      required: false,
    },
  })

const PaymentMethodIdParamsSchema = z
  .uuid()
  .openapi({
    param: {
      name: 'payment_method_id',
      in: 'path',
      schema: {
        type: 'string',
        format: 'uuid',
        description: 'A UUID string, typically used to identify resources.',
      },
      required: true,
      description: 'The ID of the payment method.',
    },
    description: 'A UUID string, typically used to identify resources.',
  })

const FromCreatedDateParamsSchema = z.iso
  .datetime({ offset: true })
  .exactOptional()
  .openapi({
    param: {
      name: 'from_created_date',
      in: 'query',
      required: false,
      schema: { type: 'string', format: 'date-time' },
      description:
        'Retrieve records with a `created_at` value ≥ `from_created_date`.\n\nUse the [ISO 8601 date-time format](https://en.wikipedia.org/wiki/ISO_8601): `yyyy-MM-ddTHH:mm:ss[.SSSSSS]Z`.',
    },
  })

const ToCreatedDateParamsSchema = z.iso
  .datetime({ offset: true })
  .exactOptional()
  .openapi({
    param: {
      name: 'to_created_date',
      in: 'query',
      required: false,
      schema: { type: 'string', format: 'date-time' },
      description:
        'Retrieve records with a `created_at` value ≤ `to_created_date`.\n\nUse the [ISO 8601 date-time format](https://en.wikipedia.org/wiki/ISO_8601): `yyyy-MM-ddTHH:mm:ss[.SSSSSS]Z`.',
    },
  })

const DisputeStateQueryParamsSchema = z
  .preprocess(
    (val) => (val === undefined || Array.isArray(val) ? val : [val]),
    z.array(z.enum(['needs_response', 'under_review', 'won', 'lost'])),
  )
  .exactOptional()
  .openapi({
    param: {
      name: 'state',
      in: 'query',
      required: false,
      schema: {
        type: 'array',
        items: { type: 'string', enum: ['needs_response', 'under_review', 'won', 'lost'] },
      },
      style: 'form',
      explode: true,
      description:
        'Filter disputes by state. Repeat the parameter to filter by multiple states.\n\n| Value | Description |\n|-------|-------------|\n| `needs_response` | Dispute requires your response |\n| `under_review` | Dispute is being reviewed |\n| `won` | Dispute resolved in your favour |\n| `lost` | Dispute resolved against you |\n\nThe parameter is case sensitive.',
    },
  })

const PaymentIdQueryParamsSchema = z
  .preprocess((val) => (val === undefined || Array.isArray(val) ? val : [val]), z.array(z.uuid()))
  .exactOptional()
  .openapi({
    param: {
      name: 'payment_id',
      in: 'query',
      required: false,
      schema: { type: 'array', items: { type: 'string', format: 'uuid' } },
      style: 'form',
      explode: true,
      description:
        'Filter disputes by the ID of the associated payment. Repeat the parameter to filter by multiple payment IDs.\n\n```\nhttps://merchant.revolut.com/api/disputes?payment_id=123&payment_id=456\n```',
    },
  })

const DisputeIdParamsSchema = z
  .uuid()
  .openapi({
    param: {
      name: 'dispute_id',
      in: 'path',
      schema: {
        type: 'string',
        format: 'uuid',
        description: 'A UUID string, typically used to identify resources.',
      },
      required: true,
      description: 'The ID of the `Dispute` object.',
    },
    description: 'A UUID string, typically used to identify resources.',
  })

const ContentTypeParamsSchema = z
  .string()
  .openapi({
    param: {
      name: 'Content-Type',
      in: 'header',
      required: true,
      schema: { type: 'string' },
      description: 'The content type sent in the request.',
      example: 'multipart/form-data',
    },
  })

const PaymentIdParamsSchema = z
  .uuid()
  .openapi({
    param: {
      name: 'payment_id',
      in: 'path',
      schema: {
        type: 'string',
        format: 'uuid',
        description: 'A UUID string, typically used to identify resources.',
      },
      required: true,
      description: 'The ID of the `Payment` object.',
    },
    description: 'A UUID string, typically used to identify resources.',
  })

const SubscriptionPlanIdParamsSchema = z
  .uuid()
  .openapi({
    param: {
      name: 'subscription_plan_id',
      in: 'path',
      schema: {
        type: 'string',
        format: 'uuid',
        description: 'A UUID string, typically used to identify resources.',
      },
      required: true,
      description: 'The ID of the subscription plan.',
    },
    description: 'A UUID string, typically used to identify resources.',
  })

const SubscriptionIdParamsSchema = z
  .uuid()
  .openapi({
    param: {
      name: 'subscription_id',
      in: 'path',
      schema: {
        type: 'string',
        format: 'uuid',
        description: 'A UUID string, typically used to identify resources.',
      },
      required: true,
      description: 'The ID of the subscription.',
    },
    description: 'A UUID string, typically used to identify resources.',
  })

const CycleIdParamsSchema = z
  .uuid()
  .openapi({
    param: {
      name: 'cycle_id',
      in: 'path',
      schema: {
        type: 'string',
        format: 'uuid',
        description: 'A UUID string, typically used to identify resources.',
      },
      required: true,
      description: 'The ID of the subscription cycle.',
    },
    description: 'A UUID string, typically used to identify resources.',
  })

const FromUsageDateParamsSchema = z.iso
  .datetime({ offset: true })
  .exactOptional()
  .openapi({
    param: {
      name: 'from_usage_date',
      in: 'query',
      schema: { type: 'string', format: 'date-time' },
      description: 'Filter usage records with a `usage_date` on or after this date and time.',
      required: false,
    },
  })

const ToUsageDateParamsSchema = z.iso
  .datetime({ offset: true })
  .exactOptional()
  .openapi({
    param: {
      name: 'to_usage_date',
      in: 'query',
      schema: { type: 'string', format: 'date-time' },
      description: 'Filter usage records with a `usage_date` before this date and time.',
      required: false,
    },
  })

const SubscriptionIdQueryParamsSchema = z
  .uuid()
  .exactOptional()
  .openapi({
    param: {
      name: 'subscription_id',
      in: 'query',
      schema: { type: 'string', format: 'uuid' },
      description: 'Filter usages by the ID of the subscription.',
      required: false,
    },
  })

const SubscriptionCycleIdQueryParamsSchema = z
  .uuid()
  .exactOptional()
  .openapi({
    param: {
      name: 'subscription_cycle_id',
      in: 'query',
      schema: { type: 'string', format: 'uuid' },
      description: 'Filter usages by the ID of the subscription cycle.',
      required: false,
    },
  })

const IdempotencyKeyRequiredParamsSchema = z
  .string()
  .openapi({
    param: {
      name: 'Idempotency-Key',
      in: 'header',
      schema: { type: 'string' },
      required: true,
      description:
        "The `Idempotency-Key` ensures that requests are processed only once, preventing multiple executions of the same operation due to retries or duplicate requests.\n\nThis header is required. It can accept any unique string value the merchant uses.\n\nA recommended practice is to use a unique identifier from your system (such as the entity's ID or a request UUID) as the idempotency key. This facilitates tracking and managing requests effectively.",
    },
  })

const UsageIdParamsSchema = z
  .uuid()
  .openapi({
    param: {
      name: 'usage_id',
      in: 'path',
      schema: {
        type: 'string',
        format: 'uuid',
        description: 'A UUID string, typically used to identify resources.',
      },
      required: true,
      description: 'The ID of the usage record.',
    },
    description: 'A UUID string, typically used to identify resources.',
  })

const PayoutStateQueryParamsSchema = z
  .preprocess(
    (val) => (val === undefined || Array.isArray(val) ? val : [val]),
    z.array(PayoutStateSchema),
  )
  .exactOptional()
  .openapi({
    param: {
      name: 'state',
      in: 'query',
      required: false,
      schema: { type: 'array', items: { $ref: '#/components/schemas/Payout-State' } },
      style: 'form',
      explode: true,
      description: 'Filter payouts by state. Repeat the parameter to filter by multiple states.',
    },
  })

const PayoutIdParamsSchema = z
  .uuid()
  .openapi({
    param: {
      name: 'payout_id',
      in: 'path',
      schema: {
        type: 'string',
        format: 'uuid',
        description: 'A UUID string, typically used to identify resources.',
      },
      required: true,
      description: 'The ID of the `Payout` object.',
    },
    description: 'A UUID string, typically used to identify resources.',
  })

const ReportRunIdParamsSchema = z
  .uuid()
  .openapi({
    param: {
      name: 'report_run_id',
      in: 'path',
      schema: {
        type: 'string',
        format: 'uuid',
        description: 'A UUID string, typically used to identify resources.',
      },
      required: true,
      description: 'Unique ID of the report run.',
    },
    description: 'A UUID string, typically used to identify resources.',
  })

const WebhookIdParamsSchema = z
  .uuid()
  .openapi({
    param: {
      name: 'webhook_id',
      in: 'path',
      schema: {
        type: 'string',
        format: 'uuid',
        description: 'A UUID string, typically used to identify resources.',
      },
      required: true,
      description: 'The ID of the webhook.',
    },
    description: 'A UUID string, typically used to identify resources.',
  })

const SynchronousWebhookIdParamsSchema = z
  .uuid()
  .openapi({
    param: {
      name: 'synchronous_webhook_id',
      in: 'path',
      schema: {
        type: 'string',
        format: 'uuid',
        description: 'A UUID string, typically used to identify resources.',
      },
      required: true,
      description: 'The ID of the synchronous webhook.',
    },
    description: 'A UUID string, typically used to identify resources.',
  })

const LocationTypeParamsSchema = z
  .enum(['online', 'physical'])
  .exactOptional()
  .openapi({
    param: {
      name: 'type',
      in: 'query',
      schema: { type: 'string', enum: ['online', 'physical'] },
      description: 'Filter the list by location type.',
      required: false,
    },
  })

const LocationIdParamsSchema = z
  .uuid()
  .openapi({
    param: {
      name: 'location_id',
      schema: {
        type: 'string',
        format: 'uuid',
        description: 'A UUID string, typically used to identify resources.',
      },
      in: 'path',
      required: true,
      description: 'The ID of the location.',
    },
    description: 'A UUID string, typically used to identify resources.',
  })

const OperationModeParamsSchema = TerminalOperationModeSchema.openapi({
  param: {
    name: 'operation_mode',
    in: 'query',
    required: false,
    explode: true,
    description:
      'Filter terminals by operation mode.\n\n| Value | Description |\n|-------|-------------|\n| `pos` | Returns only terminals in Pay at Counter mode |\n| `payment_acceptance` | Returns only terminals in standard checkout mode |',
    schema: { $ref: '#/components/schemas/Terminal-Operation-Mode' },
  },
}).exactOptional()

const PaymentIntentIdParamsSchema = PaymentIntentIdSchema.openapi({
  param: {
    name: 'payment_intent_id',
    in: 'path',
    required: true,
    description: 'The unique identifier of the payment intent.',
    schema: { $ref: '#/components/schemas/Payment-Intent-Id' },
  },
})

const RevolutRequestTimestampParamsSchema = z
  .string()
  .openapi({
    param: {
      name: 'Revolut-Request-Timestamp',
      in: 'header',
      required: true,
      schema: { type: 'string' },
      description:
        'The [UNIX timestamp](https://www.unixtimestamp.com/) of the date and time when the webhook event was sent from Revolut. Used to verify the webhook event payload was actually sent by Revolut.\n\n:::info\nFor more information, see: [Verify payload signature](https://developer.revolut.com/docs/guides/merchant/monitor-and-observe/webhooks/verify-the-payload-signature)\n:::',
    },
  })

const RevolutSignatureParamsSchema = z
  .string()
  .openapi({
    param: {
      name: 'Revolut-Signature',
      in: 'header',
      required: true,
      schema: { type: 'string' },
      description:
        'The payload signature computed by Revolut using a Hash-based Message Authentication Code (HMAC). Used to verify the webhook event payload was actually sent by Revolut.\n\n:::info\nFor more information, see: [Verify payload signature](https://developer.revolut.com/docs/guides/merchant/monitor-and-observe/webhooks/verify-the-payload-signature)\n:::',
    },
  })

const ResOrdersListV2Example = {
  summary: 'List of orders',
  value: {
    orders: [
      {
        id: 'a1b2c3d4-0001-0000-0000-000000000001',
        token: 'b2c3d4e5-0001-0000-0000-000000000001',
        type: 'payment',
        state: 'completed',
        created_at: '2025-03-10T08:30:00Z',
        updated_at: '2025-03-10T08:32:15Z',
        amount: 4999,
        currency: 'GBP',
        outstanding_amount: 0,
        capture_mode: 'automatic',
        enforce_challenge: 'automatic',
        description: 'Premium subscription',
        customer: {
          id: 'c3d4e5f6-0001-0000-0000-000000000001',
          email: 'jane.doe@example.com',
          full_name: 'Jane Doe',
          phone: '+441234567890',
        },
      },
      {
        id: 'a1b2c3d4-0002-0000-0000-000000000002',
        token: 'b2c3d4e5-0002-0000-0000-000000000002',
        type: 'payment',
        state: 'completed',
        created_at: '2025-03-11T09:00:00Z',
        updated_at: '2025-03-11T09:01:45Z',
        amount: 12500,
        currency: 'EUR',
        outstanding_amount: 0,
        capture_mode: 'automatic',
        enforce_challenge: 'automatic',
        description: 'Shopping cart',
        customer: {
          id: 'c3d4e5f6-0002-0000-0000-000000000002',
          email: 'john.smith@example.com',
          full_name: 'John Smith',
        },
        line_items: [
          { name: 'Wireless headphones', quantity: 1, unit_price: 9900, total_amount: 9900 },
          { name: 'Phone case', quantity: 2, unit_price: 1300, total_amount: 2600 },
        ],
      },
      {
        id: 'a1b2c3d4-0003-0000-0000-000000000003',
        type: 'refund',
        state: 'completed',
        created_at: '2025-03-12T11:15:00Z',
        updated_at: '2025-03-12T11:16:30Z',
        amount: 4999,
        currency: 'GBP',
        outstanding_amount: 0,
        capture_mode: 'automatic',
        enforce_challenge: 'automatic',
        related_order_id: 'a1b2c3d4-0001-0000-0000-000000000001',
        merchant_order_data: { order_id: 'ORD-2025-001', description: 'Customer-requested refund' },
      },
      {
        id: 'a1b2c3d4-0004-0000-0000-000000000004',
        token: 'b2c3d4e5-0004-0000-0000-000000000004',
        type: 'payment',
        state: 'authorised',
        created_at: '2025-03-13T14:00:00Z',
        updated_at: '2025-03-13T14:00:30Z',
        amount: 35000,
        currency: 'USD',
        outstanding_amount: 35000,
        capture_mode: 'manual',
        enforce_challenge: 'automatic',
        description: 'Enterprise software licence',
        cancel_authorised_after: '2025-03-20T14:00:00Z',
        customer: {
          id: 'c3d4e5f6-0003-0000-0000-000000000003',
          email: 'alex.johnson@example.com',
          full_name: 'Alex Johnson',
        },
      },
      {
        id: 'a1b2c3d4-0005-0000-0000-000000000005',
        token: 'b2c3d4e5-0005-0000-0000-000000000005',
        type: 'payment',
        state: 'completed',
        created_at: '2025-03-14T16:45:00Z',
        updated_at: '2025-03-14T16:46:00Z',
        amount: 799,
        currency: 'GBP',
        outstanding_amount: 0,
        capture_mode: 'automatic',
        enforce_challenge: 'automatic',
        description: 'Coffee and pastry',
        location_id: 'd4e5f6a7-0001-0000-0000-000000000001',
      },
      {
        id: 'a1b2c3d4-0006-0000-0000-000000000006',
        token: 'b2c3d4e5-0006-0000-0000-000000000006',
        type: 'payment',
        state: 'completed',
        created_at: '2025-03-15T09:00:00Z',
        updated_at: '2025-03-15T09:01:00Z',
        amount: 1999,
        currency: 'GBP',
        outstanding_amount: 0,
        capture_mode: 'automatic',
        enforce_challenge: 'automatic',
        subscription_data: {
          subscription_id: 'e2862e0e-66e8-4623-bdd6-7da59b85365d',
          active_cycle_id: 'a1b2c3d4-5678-9012-abcd-ef1234567890',
          billing_reason: 'cycle_billing',
        },
      },
    ],
  },
}

const ReqOrderMinExample = {
  summary: 'Example order with minimal required parameters',
  value: { amount: 500, currency: 'GBP' },
}

const ReqOrderAdditionalV2Example = {
  summary: 'Example order with additional parameters',
  value: {
    amount: 500,
    currency: 'GBP',
    capture_mode: 'manual',
    cancel_authorised_after: 'PT30M',
    expire_pending_after: 'PT15M',
    customer: { email: 'example@example.com', date_of_birth: '1990-01-01' },
    description: 'Example product',
    shipping: {
      address: {
        street_line_1: '7 Westferry Circus',
        city: 'London',
        country_code: 'GB',
        postcode: 'E14 4HD',
      },
    },
    enforce_challenge: 'forced',
    metadata: { product_type: 'Example' },
    merchant_order_data: { url: 'https://www.example.com/orders/12345' },
    redirect_url: 'https://www.example.com/redirect',
    statement_descriptor_suffix: '12345',
  },
}

const ReqOrderPreAuthExample = {
  summary: 'Example order with pre-authorisation',
  value: {
    amount: 5000,
    currency: 'GBP',
    capture_mode: 'manual',
    authorisation_type: 'pre_authorisation',
    description: 'Hotel reservation deposit',
    cancel_authorised_after: 'PT72H',
  },
}

const ReqOrderLineItemsExample = {
  summary: 'Example order with line items',
  value: {
    amount: 770,
    currency: 'GBP',
    line_items: [
      {
        name: 'Example item 1',
        type: 'physical',
        quantity: { value: 2, unit: 'kg' },
        unit_price_amount: 100,
        total_amount: 170,
        external_id: 'external_id_123',
        discounts: [{ name: 'Discount 1', amount: 50 }],
        taxes: [{ name: '10% VAT', amount: 20 }],
        image_urls: [
          'https://www.example.com/line-item-image1',
          'https://www.example.com/line-item-image2',
        ],
        description: 'First line item',
        url: 'https://www.example.com',
      },
      {
        name: 'Example item 2',
        type: 'service',
        quantity: { value: 10, unit: 'pieces' },
        unit_price_amount: 100,
        total_amount: 600,
        external_id: 'external_id_456',
        discounts: [{ name: 'Discount 2', amount: 500 }],
        taxes: [{ name: '10% VAT', amount: 100 }],
        image_urls: [
          'https://www.example.com/line-item-image3',
          'https://www.example.com/line-item-image4',
        ],
        description: 'Second line item',
        url: 'https://www.example.com',
      },
    ],
  },
}

const ReqOrderShippingExample = {
  summary: 'Example order with shipping details',
  value: {
    amount: 500,
    currency: 'GBP',
    shipping: {
      address: {
        street_line_1: 'Example Street 123',
        street_line_2: 'II/123',
        region: 'London',
        city: 'London',
        country_code: 'GB',
        postcode: '123456',
      },
      contact: {
        name: 'Example Contact',
        email: 'example.contact@example.com',
        phone: '+441234567890',
      },
      shipments: [
        {
          shipping_company_name: 'Example Shipping Co.',
          tracking_number: '123456789',
          estimated_delivery_date: '2024-12-03T10:15:30+02:00[Europe/Paris]',
          tracking_url: 'https://www.example.com/tracking/123456789',
        },
      ],
    },
  },
}

const ReqOrderAirlineExample = {
  summary: 'Example order with additional airline data',
  value: {
    amount: 500,
    currency: 'GBP',
    settlement_currency: 'EUR',
    description: 'Example order description',
    customer: {
      full_name: 'Example Customer',
      phone: '+441234567890',
      email: 'example@example.com',
    },
    enforce_challenge: 'forced',
    capture_mode: 'manual',
    cancel_authorised_after: 'PT30M',
    industry_data: {
      type: 'airline',
      booking_id: 'unique-booking-id-12345',
      fulfillment_date: '2023-07-10T14:00:00.069624Z',
      ticket_type: 'flexible',
      crs_code: 'DATS',
      ticket_change_indicator: 'new',
      refundability: 'refundable',
      passengers: [
        { first_name: 'Example', last_name: 'Customer' },
        { first_name: 'John', last_name: 'Doe' },
      ],
      journey_legs: [
        {
          sequence: 1,
          departure_airport_code: 'FRA',
          arrival_airport_code: 'LHR',
          flight_number: '670',
          fare_base_code: 'J',
          travel_date: '2023-07-10T10:00:00.069624Z',
          airline_name: 'AerLingus',
          airline_code: 'EI',
        },
        {
          sequence: 2,
          departure_airport_code: 'LHR',
          arrival_airport_code: 'DUB',
          flight_number: '678',
          fare_base_code: 'J',
          travel_date: '2023-07-10T15:00:00.069624Z',
          airline_name: 'AerLingus',
          airline_code: 'EI',
        },
        {
          sequence: 3,
          departure_airport_code: 'DUB',
          arrival_airport_code: 'LHR',
          flight_number: '679',
          fare_base_code: 'F',
          travel_date: '2023-07-15T10:00:00.069624Z',
          airline_name: 'AerLingus',
          airline_code: 'EI',
        },
        {
          sequence: 4,
          departure_airport_code: 'LHR',
          arrival_airport_code: 'FRA',
          flight_number: '671',
          fare_base_code: 'F',
          travel_date: '2023-07-10T14:00:00.069624Z',
          airline_name: 'AerLingus',
          airline_code: 'EI',
        },
      ],
      booking_url: 'https://example.com/bookings/1234',
    },
    merchant_order_data: {
      url: 'https://www.example.com/ticketnumber-12345',
      reference: 'example_airline_reference',
    },
    redirect_url: 'https://www.example.com/redirect',
  },
}

const ReqOrderCarRentalExample = {
  summary: 'Example order with additional car rental data',
  value: {
    amount: 500,
    currency: 'GBP',
    settlement_currency: 'GBP',
    description: 'Example car rental order',
    customer: {
      full_name: 'Example Customer',
      phone: '+447700900000',
      email: 'example@example.com',
    },
    enforce_challenge: 'forced',
    capture_mode: 'manual',
    cancel_authorised_after: 'PT30M',
    industry_data: {
      type: 'car_rental',
      booking_id: 'example_booking_id',
      pick_up_date: '2026-03-01T11:00:00Z',
      drop_off_date: '2026-03-05T16:30:00Z',
      refundability: 'partially_refundable',
      pick_up_location: {
        street_line_1: '1 Example Street',
        city: 'London',
        country_code: 'GB',
        postcode: 'SW1A 1AA',
      },
      drop_off_location: {
        street_line_1: '10 Another Road',
        city: 'Manchester',
        country_code: 'GB',
        postcode: 'M1 1AA',
      },
      distance_limit: {
        limit: 500,
        unit: 'miles',
        additional_distance_cost: { amount: 150, currency: 'GBP' },
      },
    },
    merchant_order_data: {
      url: 'https://www.example.com/rental/example_booking_id',
      reference: 'example_car_rental_reference',
    },
    redirect_url: 'https://www.example.com/redirect',
  },
}

const ReqOrderCryptoExample = {
  summary: 'Example order with additional crypto transaction data',
  value: {
    amount: 26100,
    currency: 'EUR',
    settlement_currency: 'EUR',
    description: 'Customer wants to buy 0.01 BTC',
    customer: { id: 'db186257-3031-4726-98ea-f2260ea115f0' },
    capture_mode: 'manual',
    cancel_authorised_after: 'PT30M',
    industry_data: {
      type: 'crypto',
      transactions: [
        {
          id: '7b2a8ed4-5889-4c0c-a8cc-299aff1c881b',
          status: 'pending',
          recipient_wallet_id: '64a6f159-0a60-a446-880e-e449a1f62f7c',
        },
      ],
      subseller_mcc: '1234',
      subseller_url: 'https://example.com',
    },
    merchant_order_data: {
      url: 'https://www.example.com/cryptotransactionnumber-12345',
      reference: 'example_crypto_reference',
    },
    redirect_url: 'https://www.example.com/redirect',
  },
}

const ReqOrderMarketplaceExample = {
  summary: 'Example order with additional marketplace data',
  value: {
    amount: 10000,
    currency: 'EUR',
    industry_data: {
      type: 'marketplace',
      subseller: {
        id: '123-45-67',
        name: 'Example Subseller',
        website: 'https://example.com/123-45-67',
        phone: '+441234567890',
        address: {
          street_line_1: '1 Canada Square',
          street_line_2: 'Revolut LTD, Level 39',
          postcode: 'E14 4HD',
          country_code: 'GB',
          country_subdivision_code: 'GB-LND',
          city: 'London',
          region: 'Greater London',
        },
      },
    },
  },
}

const ReqOrderEventExample = {
  summary: 'Example order with additional event data',
  value: {
    amount: 100,
    currency: 'GBP',
    industry_data: {
      type: 'event',
      booking_id: 'example_booking_123',
      events: [
        {
          start_date: '2025-03-04T14:00:00Z',
          end_date: '2025-03-04T17:00:00Z',
          supplier: 'Example Supplier',
          supplier_payment_date: '2025-03-03T14:00:15Z',
          name: 'Example Event',
          location: {
            street_line_1: 'Example Street 123',
            street_line_2: 'II/123',
            region: 'London',
            city: 'London',
            country_code: 'GB',
            postcode: '123456',
          },
          category: 'exhibition',
          market: 'primary',
          tickets: [
            { id: 'example_ticket_1', transferable: false, refundability: 'partially_refundable' },
            { id: 'example_ticket_2', transferable: true, refundability: 'non_refundable' },
            { id: 'example_ticket_3' },
          ],
        },
      ],
    },
  },
}

const ReqOrderLodgingExample = {
  summary: 'Example order with additional lodging data',
  value: {
    amount: 100,
    currency: 'GBP',
    industry_data: {
      type: 'lodging',
      booking_id: 'example_booking_123',
      check_in_date: '2025-05-01T15:00:00Z',
      check_out_date: '2025-05-05T11:00:00Z',
      supplier_payment_date: '2025-05-05T11:00:00Z',
      category: 'bed_and_breakfast',
      booking_type: 'flexible',
      refundability: 'partially_refundable',
      location: {
        street_line_1: 'Example Street 123',
        street_line_2: 'II/123',
        region: 'London',
        city: 'London',
        country_code: 'GB',
        postcode: '123456',
      },
      guests: [
        { first_name: 'First', last_name: 'Guest' },
        { first_name: 'Second', last_name: 'Guest' },
      ],
    },
  },
}

const ResOrderMinExample = {
  summary: 'Example order response with minimal required parameters',
  value: {
    id: '6516e61c-d279-a454-a837-bc52ce55ed49',
    token: '0adc0e3c-ab44-4f33-bcc0-534ded7354ce',
    type: 'payment',
    state: 'pending',
    created_at: '2023-09-29T14:58:36.079398Z',
    updated_at: '2023-09-29T14:58:36.079398Z',
    amount: 500,
    currency: 'GBP',
    outstanding_amount: 500,
    capture_mode: 'automatic',
    authorisation_type: 'final',
    checkout_url: 'https://checkout.revolut.com/payment-link/0adc0e3c-ab44-4f33-bcc0-534ded7354ce',
    enforce_challenge: 'automatic',
  },
}

const ResOrderAdditionalV2Example = {
  summary: 'Example order response with additional parameters',
  value: {
    id: '6516e6ec-c7f7-a0fb-a6d3-add05fa46d2f',
    token: '1058031d-1e71-4d07-9f97-5ad388a1346c',
    type: 'payment',
    state: 'pending',
    created_at: '2023-09-29T15:02:04.083787Z',
    updated_at: '2023-09-29T15:02:04.083787Z',
    amount: 500,
    currency: 'GBP',
    outstanding_amount: 500,
    capture_mode: 'manual',
    authorisation_type: 'final',
    cancel_authorised_after: 'PT30M',
    description: 'Example product',
    checkout_url: 'https://checkout.revolut.com/payment-link/1058031d-1e71-4d07-9f97-5ad388a1346c',
    redirect_url: 'https://www.example.com/redirect',
    shipping: {
      address: {
        street_line_1: '7 Westferry Circus',
        city: 'London',
        country_code: 'GB',
        postcode: 'E14 4HD',
      },
    },
    metadata: { product_type: 'Example' },
    enforce_challenge: 'forced',
    customer: {
      id: '467646d6-e452-4d1e-a401-703f09cd3818',
      email: 'example@example.com',
      date_of_birth: '1990-01-01',
    },
    merchant_order_data: { url: 'https://example.com/orders/12345' },
    statement_descriptor_suffix: '12345',
  },
}

const ResOrderPreAuthExample = {
  summary: 'Example order response with pre-authorisation and card payment',
  value: {
    id: '6516e61c-d279-a454-a837-bc52ce55ed49',
    token: '0adc0e3c-ab44-4f33-bcc0-534ded7354ce',
    type: 'payment',
    state: 'authorised',
    created_at: '2023-09-29T14:58:36.079398Z',
    updated_at: '2023-09-29T14:58:36.079398Z',
    amount: 5000,
    currency: 'GBP',
    outstanding_amount: 5000,
    capture_mode: 'manual',
    authorisation_type: 'pre_authorisation',
    cancel_authorised_after: 'PT72H',
    description: 'Hotel reservation deposit',
    checkout_url: 'https://checkout.revolut.com/payment-link/0adc0e3c-ab44-4f33-bcc0-534ded7354ce',
    enforce_challenge: 'automatic',
    payments: [
      {
        id: '6516f38a-a12b-aca3-83f2-6ed16d6ed246',
        state: 'authorised',
        created_at: '2023-09-29T14:55:54.579311Z',
        updated_at: '2023-09-29T14:56:38.403232Z',
        amount: 5000,
        currency: 'GBP',
        settled_amount: 5000,
        settled_currency: 'GBP',
        billing_address: { country_code: 'GB', postcode: 'SW1A 1AA' },
        risk_level: 'low',
        fees: [],
        payer: { email: 'example.payer@example.com', phone: '+447911123456' },
        payment_method: {
          type: 'card',
          card_brand: 'visa',
          funding: 'credit',
          commercial: false,
          card_country_code: 'GB',
          card_bin: '411111',
          card_last_four: '1111',
          card_expiry: '12/25',
          cardholder_name: 'Example Holder',
          capture_deadline: '2023-10-06T14:55:54.579311Z',
          fingerprint: '1JAllfQY4POhBV8DaddAQ4LC5RbMP8LMLvUdJW4s5JY=',
          network_transaction_id: '1234567890123456',
        },
      },
    ],
  },
}

const ResOrderLineItemsExample = {
  description: 'Example order response with line items',
  value: {
    id: '66bcc998-4209-ac6e-96fe-2910b949c516',
    token: '0bcfcc1d-9ee9-4476-b36c-cf4abba2e45a',
    type: 'payment',
    state: 'pending',
    created_at: '2024-08-14T15:13:28.814729Z',
    updated_at: '2024-08-14T15:13:28.814729Z',
    amount: 770,
    currency: 'GBP',
    outstanding_amount: 770,
    capture_mode: 'automatic',
    authorisation_type: 'final',
    checkout_url: 'https://checkout.revolut.com/payment-link/0bcfcc1d-9ee9-4476-b36c-cf4abba2e45a',
    enforce_challenge: 'automatic',
    line_items: [
      {
        name: 'Example item 1',
        unit_price_amount: 100,
        quantity: { value: 2, unit: 'kg' },
        type: 'physical',
        discounts: [{ name: 'Discount 1', amount: 50 }],
        taxes: [{ name: '10% VAT', amount: 20 }],
        total_amount: 170,
        image_urls: [
          'https://www.example.com/line-item-image1',
          'https://www.example.com/line-item-image2',
        ],
        description: 'First line item',
        external_id: 'external_id_123',
        url: 'https://www.example.com',
      },
      {
        name: 'Example item 2',
        unit_price_amount: 100,
        quantity: { value: 10, unit: 'pieces' },
        type: 'service',
        discounts: [{ name: 'Discount 2', amount: 500 }],
        taxes: [{ name: '10% VAT', amount: 100 }],
        total_amount: 600,
        image_urls: [
          'https://www.example.com/line_item_image3',
          'https://www.example.com/line_item_image4',
        ],
        description: 'Second line item',
        external_id: 'external_id_456',
        url: 'https://www.example.com',
      },
    ],
  },
}

const ResOrderShippingExample = {
  summary: 'Example order response with shipping details',
  value: {
    id: '66c5e449-36d3-af78-a832-328150ddc6a3',
    token: 'b1145e3e-30c7-4dd6-b84c-680dccd39dde',
    type: 'payment',
    state: 'pending',
    created_at: '2024-08-21T12:57:45.793605Z',
    updated_at: '2024-08-21T12:57:45.793605Z',
    amount: 770,
    currency: 'GBP',
    outstanding_amount: 770,
    capture_mode: 'automatic',
    authorisation_type: 'final',
    checkout_url: 'https://checkout.revolut.com/payment-link/b1145e3e-30c7-4dd6-b84c-680dccd39dde',
    shipping: {
      address: {
        street_line_1: 'Example Street 123',
        street_line_2: 'II/123',
        region: 'London',
        city: 'London',
        country_code: 'GB',
        postcode: '123456',
      },
      contact: {
        name: 'Example Contact',
        email: 'example.contact@example.com',
        phone: '+441234567890',
      },
      shipments: [
        {
          shipping_company_name: 'Example Shipping Co.',
          tracking_number: '123456789',
          estimated_delivery_date: '2024-12-03T10:15:30+02:00[Europe/Paris]',
          tracking_url: 'https://www.example.com/tracking/123456789',
        },
      ],
    },
    enforce_challenge: 'automatic',
  },
}

const ResOrderAirlineExample = {
  summary: 'Example order response with additional airline data',
  value: {
    id: '6516ed0c-098f-aa19-80e5-9d92f52b35e0',
    token: '061f2c63-e36b-421e-9ece-5adfcd580886',
    type: 'payment',
    state: 'pending',
    created_at: '2023-09-29T15:28:12.114992Z',
    updated_at: '2023-09-29T15:28:12.114992Z',
    amount: 500,
    currency: 'GBP',
    outstanding_amount: 500,
    settlement_currency: 'EUR',
    capture_mode: 'manual',
    authorisation_type: 'final',
    description: 'Example order description',
    checkout_url: 'https://checkout.revolut.com/payment-link/061f2c63-e36b-421e-9ece-5adfcd580886',
    redirect_url: 'https://www.example.com/redirect',
    cancel_authorised_after: 'PT30M',
    industry_data: {
      type: 'airline',
      booking_id: 'unique-booking-id-12345',
      fulfillment_date: '2023-07-10T14:00:00.069624Z',
      ticket_type: 'flexible',
      crs_code: 'DATS',
      ticket_change_indicator: 'new',
      refundability: 'refundable',
      passengers: [
        { first_name: 'Example', last_name: 'Customer' },
        { first_name: 'John', last_name: 'Doe' },
      ],
      journey_legs: [
        {
          sequence: 1,
          departure_airport_code: 'FRA',
          arrival_airport_code: 'LHR',
          flight_number: '670',
          fare_base_code: 'J',
          travel_date: '2023-07-10T10:00:00.069624Z',
          airline_name: 'AerLingus',
          airline_code: 'EI',
        },
        {
          sequence: 2,
          departure_airport_code: 'LHR',
          arrival_airport_code: 'DUB',
          flight_number: '678',
          fare_base_code: 'J',
          travel_date: '2023-07-10T15:00:00.069624Z',
          airline_name: 'AerLingus',
          airline_code: 'EI',
        },
        {
          sequence: 3,
          departure_airport_code: 'DUB',
          arrival_airport_code: 'LHR',
          flight_number: '679',
          fare_base_code: 'F',
          travel_date: '2023-07-15T10:00:00.069624Z',
          airline_name: 'AerLingus',
          airline_code: 'EI',
        },
        {
          sequence: 4,
          departure_airport_code: 'LHR',
          arrival_airport_code: 'FRA',
          flight_number: '671',
          fare_base_code: 'F',
          travel_date: '2023-07-10T14:00:00.069624Z',
          airline_name: 'AerLingus',
          airline_code: 'EI',
        },
      ],
      booking_url: 'https://example.com/bookings/1234',
    },
    enforce_challenge: 'forced',
    customer: {
      id: 'db186257-3031-4726-98ea-f2260ea115f0',
      email: 'example@example.com',
      phone: '+441234567890',
      full_name: 'Example Customer',
    },
    merchant_order_data: {
      url: 'https://www.example.com/ticketnumber-12345',
      reference: 'example_airline_reference',
    },
  },
}

const ResOrderCarRentalExample = {
  summary: 'Example order response with additional car rental data',
  value: {
    id: '6516ed0c-098f-aa19-80e5-9d92f52b35e0',
    token: '061f2c63-e36b-421e-9ece-5adfcd580886',
    type: 'payment',
    state: 'pending',
    created_at: '2025-01-29T15:28:12.114992Z',
    updated_at: '2025-01-29T15:28:12.114992Z',
    amount: 500,
    currency: 'GBP',
    outstanding_amount: 500,
    settlement_currency: 'GBP',
    capture_mode: 'manual',
    authorisation_type: 'final',
    description: 'Example car rental order',
    checkout_url: 'https://checkout.revolut.com/payment-link/061f2c63-e36b-421e-9ece-5adfcd580886',
    redirect_url: 'https://www.example.com/redirect',
    cancel_authorised_after: 'PT30M',
    industry_data: {
      type: 'car_rental',
      booking_id: 'example_booking_id',
      pick_up_date: '2026-03-01T11:00:00Z',
      drop_off_date: '2026-03-05T16:30:00Z',
      refundability: 'partially_refundable',
      pick_up_location: {
        street_line_1: '1 Example Street',
        city: 'London',
        country_code: 'GB',
        postcode: 'SW1A 1AA',
      },
      drop_off_location: {
        street_line_1: '10 Another Road',
        city: 'Manchester',
        country_code: 'GB',
        postcode: 'M1 1AA',
      },
      distance_limit: {
        limit: 500,
        unit: 'miles',
        additional_distance_cost: { amount: 150, currency: 'GBP' },
      },
    },
    enforce_challenge: 'forced',
    customer: {
      id: 'db186257-3031-4726-98ea-f2260ea115f0',
      email: 'example@example.com',
      phone: '+447700900000',
      full_name: 'Example Customer',
    },
    merchant_order_data: {
      url: 'https://www.example.com/rental/example_booking_id',
      reference: 'example_car_rental_reference',
    },
  },
}

const ResOrderCryptoExample = {
  summary: 'Example order response with additional crypto transaction data',
  value: {
    id: '6516edb9-74af-ae47-829b-1475e807a8d7',
    token: '1e619c26-d954-4d45-94ab-aba1e407fcee',
    type: 'payment',
    state: 'pending',
    created_at: '2023-09-29T15:31:05.746826Z',
    updated_at: '2023-09-29T15:31:05.746826Z',
    amount: 26100,
    currency: 'EUR',
    outstanding_amount: 26100,
    settlement_currency: 'EUR',
    capture_mode: 'manual',
    authorisation_type: 'final',
    description: 'Customer wants to buy 0.01 BTC',
    checkout_url: 'https://checkout.revolut.com/payment-link/1e619c26-d954-4d45-94ab-aba1e407fcee',
    redirect_url: 'https://www.example.com/redirect',
    industry_data: {
      type: 'crypto',
      transactions: [
        {
          id: '7b2a8ed4-5889-4c0c-a8cc-299aff1c881b',
          status: 'pending',
          recipient_wallet_id: '64a6f159-0a60-a446-880e-e449a1f62f7c',
        },
      ],
      subseller_mcc: '1234',
      subseller_url: 'https://example.com',
    },
    enforce_challenge: 'automatic',
    customer: {
      id: 'db186257-3031-4726-98ea-f2260ea115f0',
      email: 'example@example.com',
      phone: '+44123456789',
      full_name: 'Example Customer',
    },
    merchant_order_data: {
      url: 'https://www.example.com/cryptotransactionnumber-12345',
      reference: 'example_crypto_reference',
    },
  },
}

const ResOrderMarketplaceExample = {
  summary: 'Example order response with additional marketplace data',
  value: {
    id: '670920dc-d343-abf8-963a-68ae1bc8ae58',
    token: '41aabe45-b444-45e6-8363-f0433452e138',
    type: 'payment',
    state: 'pending',
    created_at: '2024-10-11T12:58:04.826974Z',
    updated_at: '2024-10-11T12:58:04.826974Z',
    amount: 10000,
    currency: 'EUR',
    outstanding_amount: 10000,
    capture_mode: 'automatic',
    authorisation_type: 'final',
    checkout_url: 'https://checkout.revolut.com/payment-link/41aabe45-b444-45e6-8363-f0433452e138',
    industry_data: {
      type: 'marketplace',
      subseller: {
        id: '123-45-67',
        name: 'Example Subseller',
        address: {
          street_line_1: '1 Canada Square',
          street_line_2: 'Revolut LTD, Level 39',
          region: 'Greater London',
          city: 'London',
          country_code: 'GB',
          country_subdivision_code: 'GB-LND',
          postcode: 'E14 4HD',
        },
        website: 'https://example.com/123-45-67',
        phone: '+441234567890',
      },
    },
    enforce_challenge: 'automatic',
  },
}

const ResOrderEventExample = {
  summary: 'Example order response with additional event data',
  value: {
    id: '67bf20c4-59a5-a7a9-81ad-052fda5f80eb',
    token: '8737a497-9bae-4647-90bf-1abe2fd9162a',
    type: 'payment',
    state: 'pending',
    created_at: '2025-02-26T14:10:12.804901Z',
    updated_at: '2025-02-26T14:10:12.804901Z',
    amount: 100,
    currency: 'GBP',
    outstanding_amount: 100,
    capture_mode: 'automatic',
    authorisation_type: 'final',
    checkout_url: 'https://checkout.revolut.com/payment-link/8737a497-9bae-4647-90bf-1abe2fd9162a',
    industry_data: {
      type: 'event',
      booking_id: 'example_booking_123',
      events: [
        {
          start_date: '2025-03-04T14:00:00Z',
          end_date: '2025-03-04T17:00:00Z',
          supplier: 'Example Supplier',
          supplier_payment_date: '2025-03-03T14:00:15Z',
          name: 'Example Event',
          location: {
            street_line_1: 'Example Street 123',
            street_line_2: 'II/123',
            region: 'London',
            city: 'London',
            country_code: 'GB',
            postcode: '123456',
          },
          category: 'exhibition',
          market: 'primary',
          tickets: [
            { id: 'example_ticket_1', transferable: false, refundability: 'partially_refundable' },
            { id: 'example_ticket_2', transferable: true, refundability: 'non_refundable' },
            { id: 'example_ticket_3' },
          ],
        },
      ],
    },
    enforce_challenge: 'automatic',
  },
}

const ResOrderLodgingExample = {
  summary: 'Example order response with additional lodging data',
  value: {
    id: '67c70d42-1545-a73d-a4a5-35b7ac49e1da',
    token: '9effe2b6-8907-4954-9e9b-696f763f7e08',
    type: 'payment',
    state: 'pending',
    created_at: '2025-03-04T14:25:06.099782Z',
    updated_at: '2025-03-04T14:25:06.099782Z',
    amount: 100,
    currency: 'GBP',
    outstanding_amount: 100,
    capture_mode: 'automatic',
    authorisation_type: 'final',
    checkout_url: 'https://checkout.revolut.com/payment-link/9effe2b6-8907-4954-9e9b-696f763f7e08',
    industry_data: {
      type: 'lodging',
      booking_id: 'example_booking_123',
      check_out_date: '2025-05-05T11:00:00Z',
      booking_type: 'flexible',
      refundability: 'partially_refundable',
      location: {
        street_line_1: 'Example Street 123',
        street_line_2: 'II/123',
        region: 'London',
        city: 'London',
        country_code: 'GB',
        postcode: '123456',
      },
      guests: [
        { first_name: 'First', last_name: 'Guest' },
        { first_name: 'Second', last_name: 'Guest' },
      ],
      check_in_date: '2025-05-01T15:00:00Z',
      supplier_payment_date: '2025-05-05T11:00:00Z',
      category: 'bed_and_breakfast',
    },
    enforce_challenge: 'automatic',
  },
}

const ResOrderSubscriptionExample = {
  summary: 'Example order response with subscription data (cycle billing, no usage-based items)',
  value: {
    id: '7a1b2c3d-4e5f-6789-abcd-e1234567890a',
    token: '9f8e7d6c-5b4a-3210-fedc-ba0987654321',
    type: 'payment',
    state: 'completed',
    created_at: '2025-06-15T10:30:00.000000Z',
    updated_at: '2025-06-15T10:31:00.000000Z',
    amount: 1999,
    currency: 'GBP',
    outstanding_amount: 0,
    capture_mode: 'automatic',
    authorisation_type: 'final',
    checkout_url: 'https://checkout.revolut.com/payment-link/9f8e7d6c-5b4a-3210-fedc-ba0987654321',
    enforce_challenge: 'automatic',
    subscription_data: {
      subscription_id: 'e2862e0e-66e8-4623-bdd6-7da59b85365d',
      active_cycle_id: 'a1b2c3d4-5678-9012-abcd-ef1234567890',
      billing_reason: 'cycle_billing',
    },
  },
}

const ReqOrderUpdateExample = {
  summary: 'Example order update',
  value: {
    amount: 1000,
    currency: 'EUR',
    settlement_currency: 'GBP',
    capture_mode: 'manual',
    cancel_authorised_after: 'P3D',
    metadata: { example_key: 'example_value' },
    merchant_order_data: { url: 'https://example.com/orders/12345' },
    statement_descriptor_suffix: '12345',
  },
}

const ResOrderUpdateExample = {
  summary: 'Example order update response',
  value: {
    id: '651a941a-02ef-af6f-9b6c-458c652e2c6a',
    token: '0aa685ee-8d86-441d-bedd-3f7fbf41731b',
    type: 'payment',
    state: 'pending',
    created_at: '2023-10-02T09:57:46.498026Z',
    updated_at: '2023-10-02T11:54:46.648414Z',
    amount: 1000,
    currency: 'EUR',
    outstanding_amount: 1000,
    settlement_currency: 'GBP',
    capture_mode: 'manual',
    cancel_authorised_after: 'P3D',
    checkout_url: 'https://checkout.revolut.com/payment-link/0aa685ee-8d86-441d-bedd-3f7fbf41731b',
    metadata: { example_key: 'example_value' },
    enforce_challenge: 'automatic',
    merchant_order_data: { url: 'https://example.com/orders/12345' },
    statement_descriptor_suffix: '12345',
  },
}

const ReqOrderIncrementAuthBasicExample = {
  summary: 'Example increment with minimal required parameters',
  value: { amount: 600 },
}

const ReqOrderIncrementAuthAdditionalExample = {
  summary: 'Example increment with additional parameters',
  value: {
    amount: 6000,
    reference: 'CHG-67890',
    line_items: [
      {
        name: 'Minibar',
        type: 'physical',
        quantity: { value: 1 },
        unit_price_amount: 2500,
        total_amount: 2500,
      },
      {
        name: 'Room service',
        type: 'physical',
        quantity: { value: 1 },
        unit_price_amount: 3500,
        total_amount: 3500,
      },
    ],
  },
}

const ResOrderIncrementProcessingExample = {
  summary: 'Increment in progress',
  value: {
    id: '6920869a-8d8d-aefd-a3c3-8fe4690e4323',
    token: '0823794d-28e9-4fdd-a130-3293ff9dd57b',
    type: 'payment',
    state: 'processing',
    created_at: '2025-11-21T15:34:50.351537Z',
    updated_at: '2025-11-21T15:35:12.123456Z',
    amount: 500,
    currency: 'EUR',
    outstanding_amount: 500,
    capture_mode: 'manual',
    authorisation_type: 'pre_authorisation',
    incremental_authorisations: [
      { new_amount: 600, old_amount: 500, state: 'processing', reference: '1263738' },
    ],
    payments: [
      {
        id: '696a4ce4-2aaf-a008-9f26-f47cf8ab1678',
        state: 'authorisation_started',
        created_at: '2025-11-21T15:34:50.474085Z',
        updated_at: '2025-11-21T15:35:12.300608Z',
        token: '928f25b1-121c-4669-ab9f-d0b7a5804576',
        amount: 600,
        authorised_amount: 500,
        currency: 'EUR',
        settled_amount: 500,
        settled_currency: 'EUR',
        billing_address: { country_code: 'US', postcode: '94102' },
        risk_level: 'low',
        fees: [],
        payer: { email: 'example.payer@example.com', phone: '+447911123456' },
        payment_method: {
          type: 'card',
          card_brand: 'visa',
          funding: 'debit',
          commercial: false,
          card_country_code: 'US',
          card_bin: '424242',
          card_last_four: '4242',
          card_expiry: '12/35',
          cardholder_name: 'Example Customer',
          checks: {
            three_ds: { eci: '05', state: 'verified', version: 2 },
            cvv_verification: 'not_processed',
            address: 'n_a',
            postcode: 'n_a',
            cardholder: 'n_a',
          },
          fingerprint: 'aadDmPDArelhtk5QK3zqccaPi39zEDp6/uKuUsA9LHE=',
          network_transaction_id: '1234567890123456',
          authorisation_code: '100000',
          arn: '12345678912345678912345',
          capture_deadline: '2025-11-28T15:34:50.513Z',
        },
      },
    ],
    checkout_url: 'https://checkout.revolut.com/payment-link/0823794d-28e9-4fdd-a130-3293ff9dd57b',
    enforce_challenge: 'automatic',
  },
}

const ResOrderIncrementAuthorisedExample = {
  summary: 'Increment authorised successfully',
  value: {
    id: '6920869a-8d8d-aefd-a3c3-8fe4690e4323',
    token: '0823794d-28e9-4fdd-a130-3293ff9dd57b',
    type: 'payment',
    state: 'authorised',
    created_at: '2025-11-21T15:34:50.351537Z',
    updated_at: '2025-11-21T15:35:15.789012Z',
    amount: 600,
    currency: 'EUR',
    outstanding_amount: 600,
    capture_mode: 'manual',
    authorisation_type: 'pre_authorisation',
    incremental_authorisations: [
      { new_amount: 600, old_amount: 500, state: 'authorised', reference: '1263738' },
    ],
    payments: [
      {
        id: '696a4ce4-2aaf-a008-9f26-f47cf8ab1678',
        state: 'authorised',
        created_at: '2025-11-21T15:34:50.474085Z',
        updated_at: '2025-11-21T15:35:15.789012Z',
        token: '928f25b1-121c-4669-ab9f-d0b7a5804576',
        amount: 600,
        authorised_amount: 600,
        currency: 'EUR',
        settled_amount: 600,
        settled_currency: 'EUR',
        billing_address: { country_code: 'US', postcode: '94102' },
        risk_level: 'low',
        fees: [],
        payer: { email: 'example.payer@example.com', phone: '+447911123456' },
        payment_method: {
          type: 'card',
          card_brand: 'visa',
          funding: 'debit',
          commercial: false,
          card_country_code: 'US',
          card_bin: '424242',
          card_last_four: '4242',
          card_expiry: '12/35',
          cardholder_name: 'Example Customer',
          checks: {
            three_ds: { eci: '05', state: 'verified', version: 2 },
            cvv_verification: 'not_processed',
            address: 'n_a',
            postcode: 'n_a',
            cardholder: 'n_a',
          },
          fingerprint: 'aadDmPDArelhtk5QK3zqccaPi39zEDp6/uKuUsA9LHE=',
          network_transaction_id: '1234567890123456',
          authorisation_code: '100000',
          arn: '12345678912345678912345',
          capture_deadline: '2025-11-28T15:34:50.513Z',
        },
      },
    ],
  },
}

const ResOrderIncrementDeclinedExample = {
  summary: 'Increment declined',
  value: {
    id: '6920869a-8d8d-aefd-a3c3-8fe4690e4323',
    token: '0823794d-28e9-4fdd-a130-3293ff9dd57b',
    type: 'payment',
    state: 'authorised',
    created_at: '2025-11-21T15:34:50.351537Z',
    updated_at: '2025-11-21T15:35:15.789012Z',
    amount: 500,
    currency: 'EUR',
    outstanding_amount: 500,
    capture_mode: 'manual',
    authorisation_type: 'pre_authorisation',
    incremental_authorisations: [
      {
        new_amount: 600,
        old_amount: 500,
        state: 'declined',
        reference: '1263738',
        reason: 'insufficient_funds',
      },
    ],
    payments: [
      {
        id: '696a4ce4-2aaf-a008-9f26-f47cf8ab1678',
        state: 'authorised',
        created_at: '2025-11-21T15:34:50.474085Z',
        updated_at: '2025-11-21T15:35:15.789012Z',
        token: '928f25b1-121c-4669-ab9f-d0b7a5804576',
        amount: 500,
        authorised_amount: 500,
        currency: 'EUR',
        settled_amount: 500,
        settled_currency: 'EUR',
        billing_address: { country_code: 'US', postcode: '94102' },
        risk_level: 'low',
        fees: [],
        payer: { email: 'example.payer@example.com', phone: '+447911123456' },
        payment_method: {
          type: 'card',
          card_brand: 'visa',
          funding: 'debit',
          commercial: false,
          card_country_code: 'US',
          card_bin: '424242',
          card_last_four: '4242',
          card_expiry: '12/35',
          cardholder_name: 'Example Customer',
          checks: {
            three_ds: { eci: '05', state: 'verified', version: 2 },
            cvv_verification: 'not_processed',
            address: 'n_a',
            postcode: 'n_a',
            cardholder: 'n_a',
          },
          fingerprint: 'aadDmPDArelhtk5QK3zqccaPi39zEDp6/uKuUsA9LHE=',
          network_transaction_id: '1234567890123456',
          authorisation_code: '100000',
          arn: '12345678912345678912345',
          capture_deadline: '2025-11-28T15:34:50.513Z',
        },
      },
    ],
  },
}

const ResErrorIncrementInvalidAmountExample = {
  summary: 'Invalid amount',
  value: {
    code: 'validation',
    message: 'New amount: 3 should be greater or equal to order amount: 500',
    timestamp: 1768397646286,
  },
}

const ResErrorIncrementInvalidStateExample = {
  summary: 'Invalid state',
  value: {
    code: 'bad_state',
    message:
      'No authorised card not present payment found for order 69732536-0379-a2e2-8983-15e7184f8fc6.',
    timestamp: 1768397646286,
  },
}

const ResErrorIncrementInvalidAuthTypeExample = {
  summary: 'Wrong authorisation type',
  value: {
    code: 'order_invalid_authorisation_type',
    message:
      'Operation cannot be performed for order 697325ca-a9a2-a922-8df5-c603664da5a5 because order authorisation type is final and expected is pre_authorisation',
    timestamp: 1768397646286,
  },
}

const ReqOrderCaptureMinExample = { summary: 'Capture with amount only', value: { amount: 100 } }

const ReqOrderCaptureLineItemsExample = {
  summary: 'Capture with amount and line items',
  value: {
    amount: 770,
    line_items: [
      {
        name: 'Example item 1',
        type: 'physical',
        quantity: { value: 2, unit: 'kg' },
        unit_price_amount: 100,
        total_amount: 170,
        external_id: 'external_id_123',
        discounts: [{ name: 'Discount 1', amount: 50 }],
        taxes: [{ name: '10% VAT', amount: 20 }],
      },
      {
        name: 'Example item 2',
        type: 'service',
        quantity: { value: 10, unit: 'pieces' },
        unit_price_amount: 100,
        total_amount: 600,
        external_id: 'external_id_456',
        discounts: [{ name: 'Discount 2', amount: 500 }],
        taxes: [{ name: '10% VAT', amount: 100 }],
      },
    ],
  },
}

const ResOrderCaptureMinExample = {
  summary: 'Captured order (minimal)',
  value: {
    id: '65c4c739-113d-a608-9128-47c7ca90cbe3',
    token: 'ebc06202-061e-4d0f-8063-99195fad31fb',
    type: 'payment',
    state: 'completed',
    created_at: '2024-02-08T12:21:13.022871Z',
    updated_at: '2024-02-08T12:21:52.194601Z',
    amount: 100,
    currency: 'GBP',
    refunded_amount: 0,
    outstanding_amount: 0,
    capture_mode: 'manual',
    payments: [
      {
        id: '65c4c748-bf0d-af8a-9d69-0fc92bc0ff94',
        state: 'captured',
        created_at: '2024-02-08T12:21:28.803165Z',
        updated_at: '2024-02-08T12:21:52.191352Z',
        token: '74af5a2b-6722-4353-aaf1-cd5926883b60',
        amount: 100,
        currency: 'GBP',
        settled_amount: 100,
        settled_currency: 'GBP',
        billing_address: { country_code: 'US', postcode: '12345' },
        risk_level: 'low',
        fees: [],
        payer: { email: 'example.payer@example.com', phone: '+447911123456' },
        payment_method: {
          type: 'revolut_pay_card',
          card_brand: 'visa',
          funding: 'debit',
          commercial: false,
          card_country_code: 'US',
          card_bin: '529999',
          card_last_four: '0368',
          card_expiry: '12/28',
          cardholder_name: 'Test Holder',
          checks: { three_ds: { state: 'verified', version: 2 } },
          enforce_challenge: 'automatic',
          fingerprint: '1JAllfQY4POhBV8DaddAQ4LC5RbMP8LMLvUdJW4s5JY=',
          network_transaction_id: '1234567890123456',
        },
      },
    ],
  },
}

const ResOrderCaptureLineItemsExample = {
  summary: 'Captured order with line items',
  value: {
    id: '65c4c739-113d-a608-9128-47c7ca90cbe3',
    token: 'ebc06202-061e-4d0f-8063-99195fad31fb',
    type: 'payment',
    state: 'completed',
    created_at: '2024-02-08T12:21:13.022871Z',
    updated_at: '2024-02-08T12:21:52.194601Z',
    amount: 770,
    currency: 'GBP',
    refunded_amount: 0,
    outstanding_amount: 0,
    capture_mode: 'manual',
    line_items: [
      {
        name: 'Example item 1',
        type: 'physical',
        quantity: { value: 2, unit: 'kg' },
        unit_price_amount: 100,
        total_amount: 170,
        external_id: 'external_id_123',
        discounts: [{ name: 'Discount 1', amount: 50 }],
        taxes: [{ name: '10% VAT', amount: 20 }],
      },
      {
        name: 'Example item 2',
        type: 'service',
        quantity: { value: 10, unit: 'pieces' },
        unit_price_amount: 100,
        total_amount: 600,
        external_id: 'external_id_456',
        discounts: [{ name: 'Discount 2', amount: 500 }],
        taxes: [{ name: '10% VAT', amount: 100 }],
      },
    ],
    payments: [
      {
        id: '65c4c748-bf0d-af8a-9d69-0fc92bc0ff94',
        state: 'captured',
        created_at: '2024-02-08T12:21:28.803165Z',
        updated_at: '2024-02-08T12:21:52.191352Z',
        token: '74af5a2b-6722-4353-aaf1-cd5926883b60',
        amount: 770,
        currency: 'GBP',
        settled_amount: 770,
        settled_currency: 'GBP',
        billing_address: { country_code: 'US', postcode: '12345' },
        risk_level: 'low',
        fees: [],
        payer: { email: 'example.payer@example.com', phone: '+447911123456' },
        payment_method: {
          type: 'revolut_pay_card',
          card_brand: 'visa',
          funding: 'debit',
          commercial: false,
          card_country_code: 'US',
          card_bin: '529999',
          card_last_four: '0368',
          card_expiry: '12/28',
          cardholder_name: 'Test Holder',
          checks: { three_ds: { state: 'verified', version: 2 } },
          enforce_challenge: 'automatic',
          fingerprint: '1JAllfQY4POhBV8DaddAQ4LC5RbMP8LMLvUdJW4s5JY=',
          network_transaction_id: '1234567890123456',
        },
      },
    ],
  },
}

const ResOrderCancelMinExample = {
  summary: 'Example order response with minimal required parameters',
  value: {
    id: '6516f565-c903-ae7d-8582-0bc70468ec29',
    token: '579462b3-da89-4a46-8690-572d3968573f',
    type: 'payment',
    state: 'cancelled',
    created_at: '2023-09-29T16:03:49.569437Z',
    updated_at: '2023-09-29T16:04:30.727004Z',
    amount: 500,
    currency: 'GBP',
    refunded_amount: 0,
    outstanding_amount: 0,
    capture_mode: 'automatic',
    authorisation_type: 'final',
    enforce_challenge: 'automatic',
  },
}

const ResOrderCancelAdditionalV2Example = {
  summary: 'Example order response with additional parameters',
  value: {
    id: '6516f379-c03f-adf3-a2bf-24b328909731',
    token: '91533c29-47d1-4ae9-a73f-74225fd4b176',
    type: 'payment',
    state: 'cancelled',
    created_at: '2023-09-29T15:55:37.201407Z',
    updated_at: '2023-09-29T15:56:38.398961Z',
    amount: 500,
    currency: 'GBP',
    refunded_amount: 0,
    outstanding_amount: 500,
    capture_mode: 'manual',
    authorisation_type: 'final',
    cancel_authorised_after: 'PT30M',
    description: 'Example product',
    checkout_url: 'https://checkout.revolut.com/payment-link/91533c29-47d1-4ae9-a73f-74225fd4b176',
    redirect_url: 'https://www.example.com/redirect',
    shipping_address: {
      street_line_1: '7 Westferry Circus',
      city: 'London',
      country_code: 'GB',
      postcode: 'E14 4HD',
    },
    metadata: { product_type: 'Example' },
    payments: [
      {
        id: '6516f38a-a12b-aca3-83f2-6ed16d6ed246',
        state: 'authorised',
        created_at: '2023-09-29T15:55:54.579311Z',
        updated_at: '2023-09-29T15:56:38.403232Z',
        amount: 500,
        currency: 'GBP',
        settled_amount: 500,
        settled_currency: 'GBP',
        billing_address: {
          street_line_1: '26 Atkins Avenue',
          street_line_2: 'New York 42233',
          city: 'SentinelFraudLow',
          country_code: 'GB',
          postcode: 'PE3 9UP',
        },
        risk_level: 'low',
        fees: [],
        payer: { email: 'example.payer@example.com', phone: '+447911123456' },
        payment_method: {
          type: 'revolut_pay_account',
          fingerprint: '1JAllfQY4POhBV8DaddAQ4LC5RbMP8LMLvUdJW4s5JY=',
        },
      },
    ],
    enforce_challenge: 'forced',
    customer: {
      id: '3c131306-0a0a-4f54-99d7-3fb2e027c6f7',
      email: 'example@example.com',
      phone: '+441234567890',
      full_name: 'Example Customer',
    },
    merchant_order_data: { url: 'https://example.com/orders/12345' },
    statement_descriptor_suffix: '12345',
  },
}

const ResOrderCancelLineItemsExample = {
  description: 'Example order response with line items',
  value: {
    id: '66bcc998-4209-ac6e-96fe-2910b949c516',
    token: '0bcfcc1d-9ee9-4476-b36c-cf4abba2e45a',
    type: 'payment',
    state: 'cancelled',
    created_at: '2024-08-14T15:13:28.814729Z',
    updated_at: '2024-08-14T15:13:28.814729Z',
    amount: 770,
    currency: 'GBP',
    outstanding_amount: 770,
    capture_mode: 'automatic',
    authorisation_type: 'final',
    checkout_url: 'https://checkout.revolut.com/payment-link/0bcfcc1d-9ee9-4476-b36c-cf4abba2e45a',
    enforce_challenge: 'automatic',
    line_items: [
      {
        name: 'Example item 1',
        unit_price_amount: 100,
        quantity: { value: 2, unit: 'kg' },
        type: 'physical',
        discounts: [{ name: 'Discount 1', amount: 50 }],
        taxes: [{ name: '10% VAT', amount: 20 }],
        total_amount: 170,
        image_urls: [
          'https://www.example.com/line-item-image1',
          'https://www.example.com/line-item-image2',
        ],
        description: 'First line item',
        external_id: 'external_id_123',
        url: 'https://www.example.com',
      },
      {
        name: 'Example item 2',
        unit_price_amount: 100,
        quantity: { value: 10, unit: 'pieces' },
        type: 'service',
        discounts: [{ name: 'Discount 2', amount: 500 }],
        taxes: [{ name: '10% VAT', amount: 100 }],
        total_amount: 600,
        image_urls: [
          'https://www.example.com/line_item_image3',
          'https://www.example.com/line_item_image4',
        ],
        description: 'Second line item',
        external_id: 'external_id_456',
        url: 'https://www.example.com',
      },
    ],
  },
}

const ResOrderCancelShippingExample = {
  summary: 'Example order response with shipping details',
  value: {
    id: '66c5e449-36d3-af78-a832-328150ddc6a3',
    token: 'b1145e3e-30c7-4dd6-b84c-680dccd39dde',
    type: 'payment',
    state: 'cancelled',
    created_at: '2024-08-21T12:57:45.793605Z',
    updated_at: '2024-08-21T12:57:45.793605Z',
    amount: 770,
    currency: 'GBP',
    outstanding_amount: 770,
    capture_mode: 'automatic',
    authorisation_type: 'final',
    checkout_url: 'https://checkout.revolut.com/payment-link/b1145e3e-30c7-4dd6-b84c-680dccd39dde',
    shipping: {
      address: {
        street_line_1: 'Example Street 123',
        street_line_2: 'II/123',
        region: 'London',
        city: 'London',
        country_code: 'GB',
        postcode: '123456',
      },
      contact: {
        name: 'Example Contact',
        email: 'example.contact@example.com',
        phone: '+441234567890',
      },
      shipments: [
        {
          shipping_company_name: 'Example Shipping Co.',
          tracking_number: '123456789',
          estimated_delivery_date: '2024-12-03T10:15:30+02:00[Europe/Paris]',
          tracking_url: 'https://www.example.com/tracking/123456789',
        },
      ],
    },
    enforce_challenge: 'automatic',
  },
}

const ResOrderCancelAirlineExample = {
  summary: 'Example order response with additional airline data',
  value: {
    id: '6516f2f3-fd2c-ac2c-9bf2-3e02711dd3fb',
    token: '245e63f3-1e44-40db-bcd4-4448263d3fa2',
    type: 'payment',
    state: 'cancelled',
    created_at: '2023-09-29T15:53:23.234913Z',
    updated_at: '2023-09-29T16:24:39.366956Z',
    amount: 500,
    currency: 'GBP',
    outstanding_amount: 500,
    settlement_currency: 'EUR',
    capture_mode: 'manual',
    authorisation_type: 'final',
    description: 'Example order description',
    checkout_url: 'https://checkout.revolut.com/payment-link/245e63f3-1e44-40db-bcd4-4448263d3fa2',
    redirect_url: 'https://www.example.com/redirect',
    cancel_authorised_after: 'PT30M',
    industry_data: {
      type: 'airline',
      booking_id: 'unique-booking-id-12345',
      fulfillment_date: '2023-07-10T14:00:00.069624Z',
      ticket_type: 'flexible',
      crs_code: 'DATS',
      ticket_change_indicator: 'new',
      refundability: 'refundable',
      passengers: [
        { first_name: 'Example', last_name: 'Customer' },
        { first_name: 'John', last_name: 'Doe' },
      ],
      journey_legs: [
        {
          sequence: 1,
          departure_airport_code: 'FRA',
          arrival_airport_code: 'LHR',
          flight_number: '670',
          fare_base_code: 'J',
          travel_date: '2023-07-10T10:00:00.069624Z',
          airline_name: 'AerLingus',
          airline_code: 'EI',
        },
        {
          sequence: 2,
          departure_airport_code: 'LHR',
          arrival_airport_code: 'DUB',
          flight_number: '678',
          fare_base_code: 'J',
          travel_date: '2023-07-10T15:00:00.069624Z',
          airline_name: 'AerLingus',
          airline_code: 'EI',
        },
        {
          sequence: 3,
          departure_airport_code: 'DUB',
          arrival_airport_code: 'LHR',
          flight_number: '679',
          fare_base_code: 'F',
          travel_date: '2023-07-15T10:00:00.069624Z',
          airline_name: 'AerLingus',
          airline_code: 'EI',
        },
        {
          sequence: 4,
          departure_airport_code: 'LHR',
          arrival_airport_code: 'FRA',
          flight_number: '671',
          fare_base_code: 'F',
          travel_date: '2023-07-10T14:00:00.069624Z',
          airline_name: 'AerLingus',
          airline_code: 'EI',
        },
      ],
      booking_url: 'https://example.com/bookings/1234',
    },
    payments: [
      {
        id: '6516f315-f713-a5fd-8299-f28820937409',
        state: 'failed',
        created_at: '2023-09-29T15:53:57.268142Z',
        updated_at: '2023-09-29T16:24:39.374460Z',
        amount: 500,
        currency: 'GBP',
        settled_amount: 576,
        settled_currency: 'EUR',
        risk_level: 'low',
        fees: [],
        payer: { email: 'example.payer@example.com', phone: '+447911123456' },
        payment_method: {
          type: 'card',
          fingerprint: '1JAllfQY4POhBV8DaddAQ4LC5RbMP8LMLvUdJW4s5JY=',
          network_transaction_id: '1234567890123456',
          card_brand: 'mastercard',
          funding: 'credit',
          commercial: false,
          card_country_code: 'MT',
          card_bin: '542071',
          card_last_four: '0016',
          card_expiry: '12/28',
          cardholder_name: 'Example Holder',
          checks: { three_ds: { state: 'verified', version: 2 }, cvv_verification: 'match' },
        },
      },
    ],
    enforce_challenge: 'forced',
    customer: {
      id: 'db186257-3031-4726-98ea-f2260ea115f0',
      email: 'example@example.com',
      phone: '+441234567890',
      full_name: 'Example Customer',
    },
    merchant_order_data: {
      url: 'https://www.airline.com/ticketnumber-12345',
      reference: 'example_airline_reference',
    },
  },
}

const ResOrderCancelCryptoExample = {
  summary: 'Example order response with additional crypto transaction data',
  value: {
    id: '6516f11e-5eb1-a223-858d-2c9a7f2a7189',
    token: '74dce962-2f86-4d86-98b3-a0c590bccc56',
    type: 'payment',
    state: 'cancelled',
    created_at: '2023-09-29T15:45:34.922508Z',
    updated_at: '2023-09-29T15:50:37.989334Z',
    amount: 26100,
    currency: 'EUR',
    refunded_amount: 0,
    outstanding_amount: 26100,
    settlement_currency: 'EUR',
    capture_mode: 'manual',
    authorisation_type: 'final',
    cancel_authorised_after: 'PT30M',
    description: 'Customer wants to buy 0.01 BTC',
    checkout_url: 'https://checkout.revolut.com/payment-link/74dce962-2f86-4d86-98b3-a0c590bccc56',
    redirect_url: 'https://www.example.com/redirect',
    industry_data: {
      type: 'crypto',
      transactions: [
        {
          id: '7b2a8ed4-5889-4c0c-a8cc-299aff1c881b',
          status: 'pending',
          recipient_wallet_id: '64a6f159-0a60-a446-880e-e449a1f62f7c',
        },
      ],
      subseller_mcc: '1234',
      subseller_url: 'https://example.com',
    },
    payments: [
      {
        id: '6516f139-a0ad-aaf9-a3a5-0f6ee8c9fde5',
        state: 'failed',
        decline_reason: 'technical_error',
        created_at: '2023-09-29T15:46:01.823402Z',
        updated_at: '2023-09-29T15:46:03.199834Z',
        amount: 26100,
        currency: 'EUR',
        settled_amount: 26100,
        settled_currency: 'EUR',
        risk_level: 'low',
        fees: [],
        payer: { email: 'example.payer@example.com', phone: '+447911123456' },
        payment_method: {
          type: 'card',
          fingerprint: '1JAllfQY4POhBV8DaddAQ4LC5RbMP8LMLvUdJW4s5JY=',
          network_transaction_id: '1234567890123456',
          card_brand: 'mastercard',
          funding: 'credit',
          commercial: false,
          card_country_code: 'MT',
          card_bin: '542071',
          card_last_four: '0016',
          card_expiry: '12/28',
          cardholder_name: 'Test Holder',
          checks: { three_ds: { state: 'failed', version: 2 } },
        },
      },
      {
        id: '6516f186-0cf3-aefe-b6da-af1a5dad1630',
        state: 'authorised',
        created_at: '2023-09-29T15:47:18.050227Z',
        updated_at: '2023-09-29T15:50:37.993217Z',
        amount: 26100,
        currency: 'EUR',
        settled_amount: 26100,
        settled_currency: 'EUR',
        billing_address: {
          street_line_1: '26 Atkins Avenue',
          street_line_2: 'New York 42233',
          city: 'SentinelFraudLow',
          country_code: 'GB',
          postcode: 'PE3 9UP',
        },
        risk_level: 'low',
        fees: [],
        payer: { email: 'example.payer@example.com', phone: '+447911123456' },
        payment_method: {
          type: 'revolut_pay_account',
          fingerprint: '1JAllfQY4POhBV8DaddAQ4LC5RbMP8LMLvUdJW4s5JY=',
        },
      },
    ],
    enforce_challenge: 'automatic',
    customer: {
      id: '3c131306-0a0a-4f54-99d7-3fb2e027c6f7',
      email: 'example@example.com',
      phone: '+441234567890',
      full_name: 'Example Customer',
    },
    merchant_order_data: {
      url: 'https://www.example.com/cryptotransactionnumber-12345',
      reference: 'example_crypto_reference',
    },
  },
}

const ResOrderCancelMarketplaceExample = {
  summary: 'Example order response with additional marketplace data',
  value: {
    id: '670920dc-d343-abf8-963a-68ae1bc8ae58',
    token: '41aabe45-b444-45e6-8363-f0433452e138',
    type: 'payment',
    state: 'cancelled',
    created_at: '2024-10-11T12:58:04.826974Z',
    updated_at: '2024-10-11T12:58:04.826974Z',
    amount: 10000,
    currency: 'EUR',
    outstanding_amount: 10000,
    capture_mode: 'automatic',
    authorisation_type: 'final',
    checkout_url: 'https://checkout.revolut.com/payment-link/41aabe45-b444-45e6-8363-f0433452e138',
    industry_data: {
      type: 'marketplace',
      subseller: {
        id: '123-45-67',
        name: 'Example Subseller',
        address: {
          street_line_1: '1 Canada Square',
          street_line_2: 'Revolut LTD, Level 39',
          region: 'Greater London',
          city: 'London',
          country_code: 'GB',
          country_subdivision_code: 'GB-LND',
          postcode: 'E14 4HD',
        },
        website: 'https://example.com/123-45-67',
        phone: '+441234567890',
      },
    },
    enforce_challenge: 'automatic',
  },
}

const ResOrderCancelEventExample = {
  summary: 'Example order response with additional event data',
  value: {
    id: '67bf20c4-59a5-a7a9-81ad-052fda5f80eb',
    token: '8737a497-9bae-4647-90bf-1abe2fd9162a',
    type: 'payment',
    state: 'cancelled',
    created_at: '2025-02-26T14:10:12.804901Z',
    updated_at: '2025-02-26T14:10:12.804901Z',
    amount: 100,
    currency: 'GBP',
    outstanding_amount: 100,
    capture_mode: 'automatic',
    authorisation_type: 'final',
    checkout_url: 'https://checkout.revolut.com/payment-link/8737a497-9bae-4647-90bf-1abe2fd9162a',
    industry_data: {
      type: 'event',
      booking_id: 'example_booking_123',
      events: [
        {
          start_date: '2025-03-04T14:00:00Z',
          end_date: '2025-03-04T17:00:00Z',
          supplier: 'Example Supplier',
          supplier_payment_date: '2025-03-03T14:00:15Z',
          name: 'Example Event',
          location: {
            street_line_1: 'Example Street 123',
            street_line_2: 'II/123',
            region: 'London',
            city: 'London',
            country_code: 'GB',
            postcode: '123456',
          },
          category: 'exhibition',
          market: 'primary',
          tickets: [
            { id: 'example_ticket_1', transferable: false, refundability: 'partially_refundable' },
            { id: 'example_ticket_2', transferable: true, refundability: 'non_refundable' },
            { id: 'example_ticket_3' },
          ],
        },
      ],
    },
    enforce_challenge: 'automatic',
  },
}

const ResOrderCancelLodgingExample = {
  summary: 'Example order response with additional lodging data',
  value: {
    id: '67c70d42-1545-a73d-a4a5-35b7ac49e1da',
    token: '9effe2b6-8907-4954-9e9b-696f763f7e08',
    type: 'payment',
    state: 'cancelled',
    created_at: '2025-03-04T14:25:06.099782Z',
    updated_at: '2025-03-04T14:25:06.099782Z',
    amount: 100,
    currency: 'GBP',
    outstanding_amount: 100,
    capture_mode: 'automatic',
    authorisation_type: 'final',
    checkout_url: 'https://checkout.revolut.com/payment-link/9effe2b6-8907-4954-9e9b-696f763f7e08',
    industry_data: {
      type: 'lodging',
      booking_id: 'example_booking_123',
      check_out_date: '2025-05-05T11:00:00Z',
      booking_type: 'flexible',
      refundability: 'partially_refundable',
      location: {
        street_line_1: 'Example Street 123',
        street_line_2: 'II/123',
        region: 'London',
        city: 'London',
        country_code: 'GB',
        postcode: '123456',
      },
      guests: [
        { first_name: 'First', last_name: 'Guest' },
        { first_name: 'Second', last_name: 'Guest' },
      ],
      check_in_date: '2025-05-01T15:00:00Z',
      supplier_payment_date: '2025-05-05T11:00:00Z',
      category: 'bed_and_breakfast',
    },
    enforce_challenge: 'automatic',
  },
}

const ReqRefundMinExample = {
  summary: 'Refund order with minimal required parameters',
  value: { amount: 100, currency: 'GBP' },
}

const ReqRefundAdditionalExample = {
  summary: 'Refund order with additional parameters',
  value: {
    amount: 100,
    currency: 'GBP',
    description: 'Example refund description',
    merchant_order_data: { reference: 'example_order_reference_123456' },
    metadata: {
      example_metadata_1: 'Example metadata value 1',
      example_metadata_2: 'Example metadata value 2',
    },
  },
}

const ResRefundMinExample = {
  summary: 'Refund order response with minimal required parameters',
  value: {
    id: '6852e9a6-5cf0-ac65-8182-6a9c251011ce',
    type: 'refund',
    state: 'processing',
    created_at: '2025-06-18T16:30:30.792962Z',
    updated_at: '2025-06-18T16:30:30.954966Z',
    amount: 100,
    currency: 'GBP',
    outstanding_amount: 100,
    capture_mode: 'automatic',
    authorisation_type: 'final',
    payments: [
      {
        id: '6852e9a6-ca77-a25d-b0be-83191db96e68',
        state: 'refund_validated',
        created_at: '2025-06-18T16:30:30.821411Z',
        updated_at: '2025-06-18T16:30:31.391153Z',
        amount: 100,
        currency: 'GBP',
        settled_amount: -100,
        settled_currency: 'GBP',
        billing_address: { country_code: 'GB', postcode: 'E14 4HD' },
        risk_level: 'low',
        fees: [],
        payer: { email: 'example.payer@example.com', phone: '+447911123456' },
        payment_method: {
          type: 'card',
          fingerprint: '1JAllfQY4POhBV8DaddAQ4LC5RbMP8LMLvUdJW4s5JY=',
          network_transaction_id: '1234567890123456',
          card_brand: 'visa',
          funding: 'credit',
          commercial: false,
          card_country_code: 'GB',
          card_bin: '123456',
          card_last_four: '1234',
          card_expiry: '12/33',
          cardholder_name: 'Example Holder',
        },
      },
    ],
    enforce_challenge: 'automatic',
    related_order_id: '6852e963-d6a9-a5a4-9609-50b3addc5425',
  },
}

const ResRefundAdditionalExample = {
  summary: 'Refund order response with additional parameters',
  value: {
    id: '6852dd1f-32e1-a7ca-81c5-66e0dbc85122',
    type: 'refund',
    state: 'processing',
    created_at: '2025-06-18T15:37:03.410996Z',
    updated_at: '2025-06-18T15:37:07.691537Z',
    amount: 100,
    currency: 'GBP',
    outstanding_amount: 0,
    capture_mode: 'automatic',
    authorisation_type: 'final',
    description: 'Example refund description',
    metadata: {
      example_metadata_1: 'Example metadata value 1',
      example_metadata_2: 'Example metadata value 2',
    },
    payments: [
      {
        id: '6852dd1f-25df-a855-9481-f5405a03da67',
        state: 'refund_validated',
        created_at: '2025-06-18T15:37:03.557842Z',
        updated_at: '2025-06-18T15:37:07.794313Z',
        amount: 100,
        currency: 'GBP',
        settled_amount: -100,
        settled_currency: 'GBP',
        billing_address: {
          street_line_1: '123 Example Street',
          street_line_2: 'Example City 123456',
          city: 'SentinelFraudLow',
          country_code: 'GB',
          postcode: 'AB1 C23',
        },
        risk_level: 'low',
        fees: [],
        payer: { email: 'example.payer@example.com', phone: '+447911123456' },
        payment_method: {
          type: 'revolut_pay_account',
          fingerprint: '1JAllfQY4POhBV8DaddAQ4LC5RbMP8LMLvUdJW4s5JY=',
        },
      },
    ],
    enforce_challenge: 'automatic',
    related_order_id: '6852dc49-b522-a7a2-89e0-09da07982e90',
    customer: {
      id: '03e12eee-ea3c-4282-bb61-221517c47882',
      email: 'example.customer@example.com',
      phone: '+441234567890',
      full_name: 'Example Customer',
      date_of_birth: '1990-01-01',
    },
    merchant_order_data: { reference: 'example_order_reference_123456' },
  },
}

const ResCustomersListExample = {
  summary: 'List of customers',
  value: {
    next_page_token: '9e5d2caa-bb60-4b5b-b7cf-6345bbdff67e',
    customers: [
      {
        id: '9dfb8491-bfb0-4420-ad63-0fa7bdd3dffb',
        full_name: 'First Customer',
        email: 'first.customer@example.com',
        created_at: '2020-06-24T12:12:56.596703Z',
        updated_at: '2020-06-24T12:12:56.737082Z',
      },
      {
        id: '6c7c97a8-cfc1-4cf3-8b38-26a74fdf1fae',
        full_name: 'Second Customer',
        email: 'second.customer@example.com',
        phone: '+441234567890',
        created_at: '2020-06-24T12:03:39.979397Z',
        updated_at: '2020-06-25T10:03:39.134417Z',
      },
    ],
  },
}

const ReqCustomerCreationV2Example = {
  summary: 'Create a customer',
  value: {
    full_name: 'Example Customer',
    email: 'example.customer@example.com',
    phone: '+441234567890',
    date_of_birth: '1990-01-01',
  },
}

const ResCustomerCreatedExample = {
  summary: 'Customer',
  value: {
    id: '6c7c97a8-cfc1-4cf3-8b38-26a74fdf1fae',
    full_name: 'Example Customer',
    email: 'example.customer@example.com',
    phone: '+441234567890',
    created_at: '2020-06-24T12:03:39.979397Z',
    updated_at: '2020-06-24T12:03:39.979397Z',
  },
}

const ResCustomerV3Example = {
  summary: 'Customer',
  value: {
    id: '6c7c97a8-cfc1-4cf3-8b38-26a74fdf1fae',
    full_name: 'Example Customer',
    email: 'example.customer@example.com',
    phone: '+441234567890',
    created_at: '2020-06-24T12:03:39.979397Z',
    updated_at: '2020-06-25T10:03:39.134417Z',
    payment_methods: [
      {
        id: '648334a8-9546-a983-a81a-efc6d5bdd0be',
        type: 'revolut_pay',
        saved_for: 'merchant',
        created_at: '2023-06-09T14:18:16.577888Z',
      },
      {
        id: 'edef3ba4-60a0-4df3-8f12-e5fc858c2420',
        type: 'card',
        saved_for: 'customer',
        created_at: '2023-03-24T14:15:22Z',
        bin: '459765',
        last_four: '6578',
        expiry_month: 2,
        expiry_year: 2025,
        cardholder_name: 'Example Customer',
        brand: 'visa',
        funding: 'debit',
        issuer: 'EXAMPLE ISSUER',
        issuer_country: 'GB',
        billing_address: {
          street_line_1: '7 Westferry Circus',
          street_line_2: 'Columbus Building',
          postcode: 'E144HD',
          city: 'London',
          region: 'Greater London',
          country_code: 'GB',
        },
      },
      {
        id: '6a0fe961-a961-a8b6-ad17-ab2779165a82',
        type: 'sepa_direct_debit',
        saved_for: 'merchant',
        created_at: '2026-05-22T05:28:01.887482Z',
        debtor_iban_last_four: '3273',
        debtor_name: 'John Doe',
        mandate_reference: '69F1CB61BD99A32C8E20D7FB9E21E146',
        billing_address: {
          street_line_1: 'Bank of England',
          street_line_2: 'Threadneedle St',
          postcode: 'EC2R 8AH',
          city: 'London',
          region: 'Greater London',
          country_code: 'GB',
        },
      },
    ],
  },
}

const ReqCustomerUpdateV2Example = {
  summary: 'Update a customer',
  value: { email: 'updated.customer@example.com' },
}

const ResCustomerPaymentMethodsListExample = {
  summary: 'List of payment methods',
  value: {
    payment_methods: [
      {
        id: '648334a8-9546-a983-a81a-efc6d5bdd0be',
        type: 'revolut_pay',
        saved_for: 'merchant',
        created_at: '2023-06-09T14:18:16.577888Z',
      },
      {
        id: 'edef3ba4-60a0-4df3-8f12-e5fc858c2420',
        type: 'card',
        saved_for: 'customer',
        created_at: '2023-03-24T14:15:22Z',
        bin: '459678',
        last_four: '6896',
        expiry_month: 3,
        expiry_year: 2025,
        cardholder_name: 'Example Customer',
        brand: 'visa',
        funding: 'debit',
        issuer: 'EXAMPLE ISSUER',
        issuer_country: 'GB',
        billing_address: {
          street_line_1: '7',
          street_line_2: 'Westferry Circus',
          postcode: 'E144HD',
          city: 'London',
          region: 'Greater London',
          country_code: 'GB',
        },
      },
      {
        id: 'a04406c4-05be-498b-8207-cc1e02a9b3ca',
        type: 'card',
        saved_for: 'merchant',
        created_at: '2023-03-24T14:15:22Z',
        bin: '459885',
        last_four: '7653',
        expiry_month: 12,
        expiry_year: 2026,
        cardholder_name: 'Example Holder',
        brand: 'mastercard',
        funding: 'credit',
        issuer: 'EXAMPLE ISSUER',
        issuer_country: 'GB',
        billing_address: {
          street_line_1: 'Revolut',
          street_line_2: '1 Canada Square',
          postcode: 'EC2V 6DN',
          city: 'London',
          region: 'Greater London',
          country_code: 'GB',
        },
      },
      {
        id: '6a0fe961-a961-a8b6-ad17-ab2779165a82',
        type: 'sepa_direct_debit',
        saved_for: 'merchant',
        created_at: '2026-05-22T05:28:01.887482Z',
        debtor_iban_last_four: '3273',
        debtor_name: 'John Doe',
        mandate_reference: '69F1CB61BD99A32C8E20D7FB9E21E146',
        billing_address: {
          street_line_1: 'Bank of England',
          street_line_2: 'Threadneedle St',
          postcode: 'EC2R 8AH',
          city: 'London',
          region: 'Greater London',
          country_code: 'GB',
        },
      },
    ],
  },
}

const ResCustomerPaymentMethodCardExample = {
  summary: 'Card payment method',
  value: {
    id: 'edef3ba4-60a0-4df3-8f12-e5fc858c2420',
    type: 'card',
    saved_for: 'customer',
    created_at: '2023-03-24T14:15:22Z',
    bin: '459678',
    last_four: '6896',
    expiry_month: 3,
    expiry_year: 2025,
    cardholder_name: 'Example Customer',
    brand: 'visa',
    funding: 'debit',
    issuer: 'EXAMPLE ISSUER',
    issuer_country: 'GB',
    billing_address: {
      street_line_1: '7',
      street_line_2: 'Westferry Circus',
      postcode: 'E144HD',
      city: 'London',
      region: 'Greater London',
      country_code: 'GB',
    },
  },
}

const ResCustomerPaymentMethodRevolutPayExample = {
  summary: 'Revolut Pay payment method',
  value: {
    id: '648334a8-9546-a983-a81a-efc6d5bdd0be',
    type: 'revolut_pay',
    saved_for: 'merchant',
    created_at: '2023-06-09T14:18:16.577888Z',
  },
}

const ResCustomerPaymentMethodSepaDirectDebitExample = {
  summary: 'SEPA Direct Debit payment method',
  value: {
    id: '6a0fe961-a961-a8b6-ad17-ab2779165a82',
    type: 'sepa_direct_debit',
    saved_for: 'merchant',
    created_at: '2026-05-22T05:28:01.887482Z',
    debtor_iban_last_four: '3273',
    debtor_name: 'John Doe',
    mandate_reference: '69F1CB61BD99A32C8E20D7FB9E21E146',
    billing_address: {
      street_line_1: 'Bank of England',
      street_line_2: 'Threadneedle St',
      postcode: 'EC2R 8AH',
      city: 'London',
      region: 'Greater London',
      country_code: 'GB',
    },
  },
}

const ReqPaymentMethodUpdateExample = {
  summary: 'Update a payment method',
  value: { saved_for: 'customer' },
}

const ResDisputeListExample = {
  summary: 'List of disputes',
  value: [
    {
      id: 'ab934829-e4ba-4e7f-8a21-365cad85c763',
      state: 'under_review',
      substate: 'arbitration',
      created_at: '2024-06-13T12:06:18.732706Z',
      updated_at: '2024-09-12T22:27:10.005680Z',
      response_due_date: '2024-10-12T22:27:10.005625Z',
      reason_code: '50',
      reason_description: 'Fraud',
      amount: 50,
      currency: 'EUR',
      payment: {
        id: '6666f6c7-3898-a094-9c83-dc0152e0185c',
        order_id: '6666f685-46a7-a7b9-9860-a28a4f3495a4',
        created_at: '2024-06-10T12:51:19.960490Z',
        amount: 50,
        currency: 'EUR',
        payment_method: { type: 'revolut_pay_account' },
      },
    },
    {
      id: '340b85dc-da99-4c5f-9d47-37a45d52a455',
      state: 'lost',
      substate: 'lost_expired',
      created_at: '2024-09-11T21:20:05.659978Z',
      updated_at: '2024-09-12T22:35:31.721921Z',
      response_due_date: '2024-09-22T22:35:31.721860Z',
      reason_code: '12.4',
      reason_description: 'Incorrect Account Number',
      amount: 40,
      currency: 'EUR',
      payment: {
        id: '66e1fc66-7606-a7fb-b2e8-b48fb637783a',
        order_id: '66e1fc4d-5cbe-a692-80aa-1cb912291d55',
        created_at: '2024-09-11T20:24:06.271746Z',
        amount: 40,
        currency: 'EUR',
        payment_method: { type: 'card', card_brand: 'visa', card_last_four: '1234' },
      },
    },
    {
      id: 'e9b5472b-7308-4aea-86a0-d4427bc04c24',
      state: 'lost',
      substate: 'lost_pre_arbitration',
      created_at: '2026-05-22T09:00:00Z',
      updated_at: '2026-05-22T10:15:00Z',
      response_due_date: '2030-12-15T00:00:00Z',
      reason_code: 'OTHER',
      reason_description: 'merchant_dispute',
      amount: 91700,
      currency: 'GBP',
      payment: {
        id: '6a0f2bc4-2137-a1ad-9eb6-b34cf4ca6597',
        order_id: '2bcaf93a-aa87-4d3d-b5c6-62e06051cff2',
        created_at: '2026-05-21T15:59:00.451602Z',
        amount: 1000,
        currency: 'GBP',
        payment_method: {
          type: 'sepa_direct_debit',
          debtor_iban_last_four: '3273',
          debtor_name: 'John Doe',
          mandate_reference: '69F1CB61BD99A32C8E20D7FB9E21E146',
        },
      },
    },
  ],
}

const ResDisputeCardExample = {
  summary: 'Dispute for a card payment',
  value: {
    id: 'fccc53e9-00e0-4847-9d54-6938e9cdd3ef',
    state: 'lost',
    substate: 'lost_accepted',
    created_at: '2025-03-12T07:00:00.000000Z',
    updated_at: '2025-03-13T10:00:00.000000Z',
    response_due_date: '2025-03-15T12:00:00.000000Z',
    reason_code: '50',
    reason_description: 'Fraud',
    amount: 1500,
    currency: 'EUR',
    payment: {
      id: '67810850-4c48-a25d-8765-d03d36ca6719',
      order_id: '38bd1186-a276-4b14-91b4-5da886481f85',
      created_at: '2025-01-02T10:00:00Z',
      arn: 'P58PC241502Q7800000000A',
      amount: 3000,
      currency: 'EUR',
      payment_method: { type: 'card', card_brand: 'visa', card_last_four: '1234' },
    },
  },
}

const ResDisputeSepaDirectDebitExample = {
  summary: 'Dispute for a SEPA Direct Debit payment',
  value: {
    id: '7a2d8f4b-1c3e-4a56-b789-0d1e2f3a4b5c',
    state: 'needs_response',
    substate: 'new',
    created_at: '2026-05-22T09:00:00Z',
    updated_at: '2026-05-22T09:00:00Z',
    response_due_date: '2026-06-05T09:00:00Z',
    reason_code: 'OTHER',
    reason_description: 'merchant_dispute',
    amount: 10000,
    currency: 'EUR',
    payment: {
      id: '6a0f2bc4-2137-a1ad-9eb6-b34cf4ca6597',
      order_id: '2bcaf93a-aa87-4d3d-b5c6-62e06051cff2',
      created_at: '2026-05-21T15:59:00.451602Z',
      amount: 10000,
      currency: 'EUR',
      payment_method: {
        type: 'sepa_direct_debit',
        debtor_iban_last_four: '3273',
        debtor_name: 'John Doe',
        mandate_reference: '69F1CB61BD99A32C8E20D7FB9E21E146',
      },
    },
  },
}

const ResDisputeEvidenceExample = {
  summary: 'Uploaded evidence',
  value: { id: '121ac27c-b00a-44d0-9120-efeeec7c912d' },
}

const ReqDisputeChallengeMinExample = {
  summary: 'Minimal dispute challenge with reason and evidence',
  value: { reason: 'refund_already_issued', evidences: ['121ac27c-b00a-44d0-9120-efeeec7c912d'] },
}

const ReqDisputeChallengeWithEvidenceExample = {
  summary: 'Dispute challenge with reason, multiple evidences, and comment',
  value: {
    reason: 'product_already_delivered',
    comment:
      'The customer received the product on 2026-05-10 as confirmed by our delivery records.',
    evidences: ['121ac27c-b00a-44d0-9120-efeeec7c912d', '0010e98d-0653-4dbe-8a4f-70cd5e9491f2'],
  },
}

const ResSubscriptionPlansListExample = {
  summary: 'List of subscription plans',
  value: {
    next_page_token: '9e5d2caa-bb60-4b5b-b7cf-6345bbdff67e',
    subscription_plans: [
      {
        id: '550e8400-e29b-41d4-a716-446655440000',
        name: 'Premium Plan with 14-days Trial',
        state: 'active',
        trial_duration: 'P14D',
        created_at: '2025-06-05T21:00:00.036001Z',
        updated_at: '2025-06-05T21:00:00.036001Z',
        variations: [
          {
            id: '550e8400-e29b-41d4-a716-446655440001',
            phases: [
              {
                id: '550e8400-e29b-41d4-a716-446655440002',
                ordinal: 1,
                cycle_duration: 'P1Y',
                amount: 99900,
                currency: 'GBP',
              },
            ],
          },
        ],
      },
      {
        id: 'f757b068-f287-43c8-8d05-9c073fecbe73',
        name: 'Enterprise Pro Plan',
        state: 'active',
        created_at: '2026-01-26T08:59:09.433527Z',
        updated_at: '2026-01-26T08:59:09.433527Z',
        variations: [
          {
            id: 'f4e0a171-4f4e-484b-b0a2-22085059af65',
            phases: [
              {
                id: '23319d04-4b23-4ae7-ba54-82112c752683',
                ordinal: 1,
                cycle_duration: 'P1M',
                amount: 990,
                currency: 'GBP',
              },
            ],
          },
          {
            id: '7cf47b0d-3da9-496b-a4e9-fbbe43c33ee3',
            phases: [
              {
                id: 'feed2491-c895-4bfa-ba05-a3a088842d5c',
                ordinal: 1,
                cycle_duration: 'P1Y',
                amount: 9990,
                currency: 'GBP',
              },
            ],
          },
        ],
      },
    ],
  },
}

const ReqSubscriptionPlanSimpleExample = {
  summary: 'Simple yearly and monthly plan',
  value: {
    name: 'Enterprise Pro Plan',
    variations: [
      { phases: [{ ordinal: 1, cycle_duration: 'P1Y', amount: 99900, currency: 'GBP' }] },
      { phases: [{ ordinal: 1, cycle_duration: 'P1M', amount: 9900, currency: 'GBP' }] },
    ],
  },
}

const ReqSubscriptionPlanWithTrialDurationExample = {
  summary: 'Plan with trial duration',
  value: {
    name: 'Premium Plan with 14-day Trial',
    trial_duration: 'P14D',
    variations: [
      { phases: [{ ordinal: 1, cycle_duration: 'P1M', amount: 9900, currency: 'GBP' }] },
    ],
  },
}

const ReqSubscriptionPlanLimitedExample = {
  summary: 'Plan that ends after 12 months',
  value: {
    name: '12-month Limited Plan',
    variations: [
      {
        phases: [
          { ordinal: 1, cycle_duration: 'P1M', cycle_count: 12, amount: 1000, currency: 'GBP' },
        ],
      },
    ],
  },
}

const ReqSubscriptionPlanUsageBaseExample = {
  summary: 'Usage-based plan with tiered pricing',
  value: {
    name: 'API Usage Plan',
    variations: [
      {
        phases: [
          {
            ordinal: 1,
            cycle_duration: 'P1M',
            subscription_items: [
              {
                name: 'API Calls',
                type: 'usage',
                currency: 'GBP',
                unit: 'calls',
                code: 'api_calls',
                usage_aggregation_method: 'sum',
                tiers: [
                  { upper_quantity_threshold: 1000, amount: 0 },
                  { upper_quantity_threshold: 10000, amount: 10 },
                  { amount: 5 },
                ],
              },
            ],
          },
        ],
      },
    ],
  },
}

const ReqSubscriptionPlanHybridExample = {
  summary: 'Hybrid plan with flat base fee and usage-based items',
  value: {
    name: 'Professional Plan',
    variations: [
      {
        phases: [
          {
            ordinal: 1,
            cycle_duration: 'P1M',
            subscription_items: [
              {
                name: 'Base Subscription',
                type: 'flat',
                quantity: 1,
                amount: 2900,
                currency: 'GBP',
                unit: 'subscription',
              },
              {
                name: 'API Calls',
                type: 'usage',
                currency: 'GBP',
                unit: 'calls',
                code: 'api_calls',
                usage_aggregation_method: 'sum',
                amount: 10,
              },
              {
                name: 'Storage',
                type: 'usage',
                currency: 'GBP',
                unit: 'gb',
                code: 'storage_gb',
                usage_aggregation_method: 'max',
                package_size: 1,
                tiers: [
                  { upper_quantity_threshold: 10, amount: 0 },
                  { upper_quantity_threshold: 100, amount: 50 },
                  { amount: 30 },
                ],
              },
            ],
          },
        ],
      },
    ],
  },
}

const ReqSubscriptionPlanPackageExample = {
  summary: 'Usage-based plan with block pricing (price per 1000 units)',
  value: {
    name: 'SMS Plan',
    variations: [
      {
        phases: [
          {
            ordinal: 1,
            cycle_duration: 'P1M',
            subscription_items: [
              {
                name: 'SMS Messages',
                type: 'usage',
                currency: 'GBP',
                unit: 'messages',
                code: 'sms_messages',
                usage_aggregation_method: 'sum',
                package_size: 1000,
                amount: 500,
              },
            ],
          },
        ],
      },
    ],
  },
}

const ReqSubscriptionPlanWithItemsExample = {
  summary: 'Plan with flat and usage-based subscription items',
  value: {
    name: 'Professional Platform Plan',
    variations: [
      {
        phases: [
          {
            ordinal: 1,
            cycle_duration: 'P1M',
            amount: 4900,
            currency: 'GBP',
            subscription_items: [
              {
                type: 'flat',
                name: 'Platform License',
                unit: 'subscription',
                quantity: 1,
                amount: 4900,
                currency: 'GBP',
              },
              {
                type: 'usage',
                name: 'API Calls',
                unit: 'call',
                code: 'api_calls',
                usage_aggregation_method: 'sum',
                amount: 1,
                currency: 'GBP',
              },
            ],
          },
        ],
      },
    ],
  },
}

const ResSubscriptionPlanSimpleExample = {
  summary: 'Simple yearly and monthly plan',
  value: {
    id: 'f757b068-f287-43c8-8d05-9c073fecbe73',
    name: 'Enterprise Pro Plan',
    state: 'active',
    created_at: '2026-01-26T08:59:09.433527Z',
    updated_at: '2026-01-26T08:59:09.433527Z',
    variations: [
      {
        id: 'f4e0a171-4f4e-484b-b0a2-22085059af65',
        phases: [
          {
            id: '23319d04-4b23-4ae7-ba54-82112c752683',
            ordinal: 1,
            cycle_duration: 'P1M',
            amount: 990,
            currency: 'GBP',
          },
        ],
      },
      {
        id: '7cf47b0d-3da9-496b-a4e9-fbbe43c33ee3',
        phases: [
          {
            id: 'feed2491-c895-4bfa-ba05-a3a088842d5c',
            ordinal: 1,
            cycle_duration: 'P1Y',
            amount: 9990,
            currency: 'GBP',
          },
        ],
      },
    ],
  },
}

const ResSubscriptionPlanWithTrialDurationExample = {
  summary: 'Plan with trial duration',
  value: {
    id: '750e8400-e29b-41d4-a716-446655440010',
    name: 'Premium Plan with 14-day Trial',
    trial_duration: 'P14D',
    state: 'active',
    created_at: '2025-06-04T21:00:00.036001Z',
    updated_at: '2025-06-04T21:00:00.036001Z',
    variations: [
      {
        id: '850e8400-e29b-41d4-a716-446655440011',
        phases: [
          {
            id: '950e8400-e29b-41d4-a716-446655440012',
            ordinal: 1,
            cycle_duration: 'P1M',
            amount: 9900,
            currency: 'GBP',
          },
        ],
      },
    ],
  },
}

const ResSubscriptionPlanLimitedExample = {
  summary: 'Plan that ends after 12 months',
  value: {
    id: '550e8400-e29b-41d4-a716-446655440003',
    name: '12-month Limited Plan',
    state: 'active',
    created_at: '2025-06-05T21:00:00.036001Z',
    updated_at: '2025-06-05T21:00:00.036001Z',
    variations: [
      {
        id: '550e8400-e29b-41d4-a716-446655440004',
        phases: [
          {
            id: '550e8400-e29b-41d4-a716-446655440005',
            ordinal: 1,
            cycle_duration: 'P1M',
            cycle_count: 12,
            amount: 1000,
            currency: 'GBP',
          },
        ],
      },
    ],
  },
}

const ResSubscriptionPlanUsageBaseExample = {
  summary: 'Usage-based plan with tiered pricing',
  value: {
    id: '8d2c8872-9e8a-4b1a-827c-3f78e1234abc',
    name: 'API Usage Plan',
    state: 'active',
    created_at: '2026-04-15T17:58:36.000Z',
    updated_at: '2026-04-15T17:58:36.000Z',
    variations: [
      {
        id: 'a4e0a171-4f4e-484b-b0a2-22085059df99',
        phases: [
          {
            id: 'ceed2491-c895-4bfa-ba05-a3a088842e11',
            ordinal: 1,
            cycle_duration: 'P1M',
            subscription_items: [
              {
                name: 'API Calls',
                type: 'usage',
                currency: 'GBP',
                unit: 'calls',
                code: 'api_calls',
                usage_aggregation_method: 'sum',
                tiers: [
                  { upper_quantity_threshold: 1000, amount: 0 },
                  { upper_quantity_threshold: 10000, amount: 10 },
                  { amount: 5 },
                ],
              },
            ],
          },
        ],
      },
    ],
  },
}

const ResSubscriptionPlanHybridExample = {
  summary: 'Hybrid plan with flat base fee and usage-based items',
  value: {
    id: 'b22198c4-724d-4e9e-b9e3-827c3f78e456',
    name: 'Professional Plan',
    state: 'active',
    created_at: '2026-04-15T18:02:11.000Z',
    updated_at: '2026-04-15T18:02:11.000Z',
    variations: [
      {
        id: 'd4e0a171-4f4e-484b-b0a2-22085059df77',
        phases: [
          {
            id: 'ffeed491-c895-4bfa-ba05-a3a088842e22',
            ordinal: 1,
            cycle_duration: 'P1M',
            subscription_items: [
              {
                name: 'Base Subscription',
                type: 'flat',
                quantity: 1,
                amount: 2900,
                currency: 'GBP',
                unit: 'subscription',
              },
              {
                name: 'API Calls',
                type: 'usage',
                currency: 'GBP',
                unit: 'calls',
                code: 'api_calls',
                usage_aggregation_method: 'sum',
                amount: 10,
              },
              {
                name: 'Storage',
                type: 'usage',
                currency: 'GBP',
                unit: 'gb',
                code: 'storage_gb',
                usage_aggregation_method: 'max',
                package_size: 1,
                tiers: [
                  { upper_quantity_threshold: 10, amount: 0 },
                  { upper_quantity_threshold: 100, amount: 50 },
                  { amount: 30 },
                ],
              },
            ],
          },
        ],
      },
    ],
  },
}

const ResSubscriptionPlanPackageExample = {
  summary: 'Usage-based plan with block pricing (price per 1000 units)',
  value: {
    id: 'e33198c4-124d-4e9e-b9e3-827c3f78e789',
    name: 'SMS Plan',
    state: 'active',
    created_at: '2026-04-15T18:05:42.000Z',
    updated_at: '2026-04-15T18:05:42.000Z',
    variations: [
      {
        id: 'c4e0a171-4f4e-484b-b0a2-22085059df44',
        phases: [
          {
            id: 'ddeed491-c895-4bfa-ba05-a3a088842e33',
            ordinal: 1,
            cycle_duration: 'P1M',
            subscription_items: [
              {
                name: 'SMS Messages',
                type: 'usage',
                currency: 'GBP',
                unit: 'messages',
                code: 'sms_messages',
                usage_aggregation_method: 'sum',
                package_size: 1000,
                amount: 500,
              },
            ],
          },
        ],
      },
    ],
  },
}

const ResSubscriptionPlanWithItemsExample = {
  summary: 'Plan with flat and usage-based subscription items',
  value: {
    id: 'a1b2c3d4-e5f6-7890-abcd-ef1234567890',
    name: 'Professional Platform Plan',
    state: 'active',
    created_at: '2026-01-10T09:00:00.000000Z',
    updated_at: '2026-01-10T09:00:00.000000Z',
    variations: [
      {
        id: 'b2c3d4e5-f6a7-8901-bcde-f12345678901',
        phases: [
          {
            id: 'c3d4e5f6-a7b8-9012-cdef-123456789012',
            ordinal: 1,
            cycle_duration: 'P1M',
            amount: 4900,
            currency: 'GBP',
            subscription_items: [
              {
                id: 'd4e5f6a7-b8c9-0123-defa-234567890123',
                type: 'flat',
                name: 'Platform License',
                unit: 'subscription',
                quantity: 1,
                amount: 4900,
                currency: 'GBP',
              },
              {
                id: 'e5f6a7b8-c9d0-1234-efab-345678901234',
                type: 'usage',
                name: 'API Calls',
                unit: 'call',
                code: 'api_calls',
                usage_aggregation_method: 'sum',
                amount: 1,
                currency: 'GBP',
              },
            ],
          },
        ],
      },
    ],
  },
}

const ResSubscriptionsListExample = {
  summary: 'List of subscriptions',
  value: {
    next_page_token: '9e5d2caa-bb60-4b5b-b7cf-6345bbdff67e',
    subscriptions: [
      {
        id: '550e8400-e29b-41d4-a716-446655440000',
        external_reference: 'ext-ref-12345',
        state: 'active',
        customer_id: '650e8400-e29b-41d4-a716-446655440001',
        plan_id: '750e8400-e29b-41d4-a716-446655440002',
        plan_variation_id: '850e8400-e29b-41d4-a716-446655440003',
        payment_method_type: 'automatic',
        payment_method_id: '6689e244-8af7-4ada-9448-a91f02d4f192',
        created_at: '2025-06-05T21:00:00.036001Z',
        updated_at: '2025-06-05T21:00:00.036001Z',
        start_date: '2025-06-05T21:00:00.036001Z',
        current_cycle_id: '950e8400-e29b-41d4-a716-446655440004',
      },
      {
        id: '550e8400-e29b-41d4-a716-446655440010',
        state: 'pending',
        customer_id: '650e8400-e29b-41d4-a716-446655440011',
        plan_id: '750e8400-e29b-41d4-a716-446655440012',
        plan_variation_id: '850e8400-e29b-41d4-a716-446655440013',
        payment_method_type: 'automatic',
        created_at: '2025-06-04T21:00:00.036001Z',
        updated_at: '2025-06-04T21:00:00.036001Z',
        current_cycle_id: 'a31627fb-b037-4566-8d7b-f380c1f44653',
      },
    ],
  },
}

const ReqSubscriptionSetupOrderExample = {
  summary: 'Subscription with redirect URL',
  value: {
    plan_variation_id: '550e8400-e29b-41d4-a716-446655440000',
    customer_id: '650e8400-e29b-41d4-a716-446655440001',
    setup_order_redirect_url: 'https://example.com/subscription/setup/complete',
    external_reference: 'ext-ref-12345',
  },
}

const ReqSubscriptionSetupOrderNoURLExample = {
  summary: 'Subscription without redirect URL',
  value: {
    plan_variation_id: '550e8400-e29b-41d4-a716-446655440000',
    customer_id: '650e8400-e29b-41d4-a716-446655440001',
    external_reference: 'ext-ref-12345',
  },
}

const ReqSubscriptionWithTrialExample = {
  summary: 'Subscription with trial period overriding the trial duration from plan',
  value: {
    plan_variation_id: '550e8400-e29b-41d4-a716-446655440000',
    customer_id: '650e8400-e29b-41d4-a716-446655440001',
    payment_method_id: '6689e244-8af7-4ada-9448-a91f02d4f192',
    trial_duration: 'P14D',
    external_reference: 'ext-ref-12345',
  },
}

const ReqSubscriptionSkipTrialExample = {
  summary: 'Subscription skipping trial predefined in plan',
  value: {
    plan_variation_id: '550e8400-e29b-41d4-a716-446655440000',
    customer_id: '650e8400-e29b-41d4-a716-446655440001',
    payment_method_id: '6689e244-8af7-4ada-9448-a91f02d4f192',
    trial_duration: 'P0D',
    external_reference: 'ext-ref-12345',
  },
}

const ResSubscriptionSetupOrderExample = {
  summary: 'Subscription created with setup order',
  value: {
    id: '550e8400-e29b-41d4-a716-446655440000',
    external_reference: 'ext-ref-12345',
    state: 'pending',
    customer_id: '650e8400-e29b-41d4-a716-446655440001',
    plan_id: '750e8400-e29b-41d4-a716-446655440002',
    plan_variation_id: '850e8400-e29b-41d4-a716-446655440003',
    payment_method_type: 'automatic',
    created_at: '2025-06-05T21:00:00.036001Z',
    updated_at: '2025-06-05T21:00:00.036001Z',
    setup_order_id: 'a50e8400-e29b-41d4-a716-446655440005',
    current_cycle_id: 'a31627fb-b037-4566-8d7b-f380c1f44653',
  },
}

const ResSubscriptionSetupOrderNoURLExample = {
  summary: 'Subscription created with setup order (no redirect URL)',
  value: {
    id: '550e8400-e29b-41d4-a716-446655440006',
    external_reference: 'ext-ref-12345',
    state: 'pending',
    customer_id: '650e8400-e29b-41d4-a716-446655440001',
    plan_id: '750e8400-e29b-41d4-a716-446655440002',
    plan_variation_id: '850e8400-e29b-41d4-a716-446655440003',
    payment_method_type: 'automatic',
    created_at: '2025-06-05T21:00:00.036001Z',
    updated_at: '2025-06-05T21:00:00.036001Z',
    setup_order_id: 'a50e8400-e29b-41d4-a716-446655440007',
    current_cycle_id: 'a31627fb-b037-4566-8d7b-f380c1f44654',
  },
}

const ResSubscriptionActiveExample = {
  summary: 'Active subscription',
  value: {
    id: '550e8400-e29b-41d4-a716-446655440000',
    external_reference: 'ext-ref-12345',
    state: 'active',
    customer_id: '650e8400-e29b-41d4-a716-446655440001',
    plan_id: '750e8400-e29b-41d4-a716-446655440002',
    plan_variation_id: '850e8400-e29b-41d4-a716-446655440003',
    payment_method_type: 'automatic',
    payment_method_id: '6689e244-8af7-4ada-9448-a91f02d4f192',
    created_at: '2025-06-05T21:00:00.036001Z',
    updated_at: '2025-06-05T21:00:00.036001Z',
    start_date: '2025-06-05T21:00:00.036001Z',
    current_cycle_id: '950e8400-e29b-41d4-a716-446655440004',
    trial_duration: 'P14D',
    trial_end_date: '2025-06-19T21:00:00.036001Z',
  },
}

const ReqSubscriptionUpdateExample = {
  summary: 'Update subscription',
  value: { external_reference: 'ext-ref-12345' },
}

const ReqSubscriptionChangePlanExample = {
  summary: 'Schedule plan change at cycle end',
  value: { plan_variation_id: '850e8400-e29b-41d4-a716-446655440003', scheduled: 'at_cycle_end' },
}

const ReqSubscriptionChangePlanWithReasonExample = {
  summary: 'Schedule plan change with reason',
  value: {
    plan_variation_id: '850e8400-e29b-41d4-a716-446655440003',
    scheduled: 'at_cycle_end',
    reason: 'customer_request',
  },
}

const ReqSubscriptionChangePlanWithPhaseExample = {
  summary: 'Schedule plan change to a specific phase',
  value: {
    plan_variation_id: '850e8400-e29b-41d4-a716-446655440003',
    plan_variation_phase_id: '950e8400-e29b-41d4-a716-446655440004',
    scheduled: 'at_cycle_end',
  },
}

const ReqSubscriptionUpdateRenewalDateExample = {
  summary: 'Update renewal date',
  value: { renewal_date: '2026-07-01T00:00:00Z' },
}

const ResSubscriptionCyclesListExample = {
  summary: 'List of subscription cycles',
  value: {
    next_page_token: '9e5d2caa-bb60-4b5b-b7cf-6345bbdff67e',
    cycles: [
      {
        id: '550e8400-e29b-41d4-a716-446655440010',
        subscription_id: '650e8400-e29b-41d4-a716-446655440001',
        plan_variation_id: '750e8400-e29b-41d4-a716-446655440002',
        plan_variation_phase_id: '850e8400-e29b-41d4-a716-446655440003',
        number: 2,
        previous_cycle_id: '550e8400-e29b-41d4-a716-446655440000',
        state: 'active',
        start_date: '2025-07-05T21:00:00.036001Z',
        end_date: '2025-08-05T21:00:00.036001Z',
        order_id: 'a50e8400-e29b-41d4-a716-446655440015',
        trial: false,
      },
      {
        id: '550e8400-e29b-41d4-a716-446655440000',
        subscription_id: '650e8400-e29b-41d4-a716-446655440001',
        plan_variation_id: '750e8400-e29b-41d4-a716-446655440002',
        number: 1,
        state: 'finished',
        start_date: '2025-06-05T21:00:00.036001Z',
        end_date: '2025-07-05T21:00:00.036001Z',
        order_id: 'a50e8400-e29b-41d4-a716-446655440005',
        trial: true,
      },
    ],
  },
}

const ResSubscriptionCycleFinishedExample = {
  summary: 'Finished subscription cycle',
  value: {
    id: '950e8400-e29b-41d4-a716-446655440004',
    subscription_id: '650e8400-e29b-41d4-a716-446655440001',
    plan_variation_id: '750e8400-e29b-41d4-a716-446655440002',
    plan_variation_phase_id: '850e8400-e29b-41d4-a716-446655440003',
    number: 1,
    state: 'finished',
    start_date: '2025-06-05T21:00:00.036001Z',
    end_date: '2025-07-05T21:00:00.036001Z',
    order_id: 'b50e8400-e29b-41d4-a716-446655440006',
    trial: true,
  },
}

const ResUsageListExample = {
  summary: 'Retrieve a list of usage records',
  value: {
    next_page_token: '9e5d2caa-bb60-4b5b-b7cf-6345bbdff67e',
    subscription_usages: [
      {
        id: '750e8400-e29b-41d4-a716-446655440000',
        subscription_id: '550e8400-e29b-41d4-a716-446655440000',
        subscription_cycle_id: '850e8400-e29b-41d4-a716-446655440000',
        subscription_item_code: 'api_calls',
        usage_date: '2026-03-01T21:00:00Z',
        quantity: 100,
        metadata: { user_id: '12345', api_version: 'v2' },
        created_at: '2026-03-01T21:05:00Z',
        updated_at: '2026-03-01T21:05:00Z',
      },
      {
        id: 'bc903328-9f37-4d7a-8f56-02e5b7c76891',
        subscription_id: '550e8400-e29b-41d4-a716-446655440000',
        subscription_cycle_id: '850e8400-e29b-41d4-a716-446655440000',
        subscription_item_code: 'api_calls',
        usage_date: '2026-03-01T22:15:00Z',
        quantity: 50,
        metadata: { user_id: '12345', api_version: 'v2' },
        created_at: '2026-03-01T22:20:00Z',
        updated_at: '2026-03-01T22:20:00Z',
      },
    ],
  },
}

const ReqSubscriptionUsageExample = {
  summary: 'Report active license seats',
  description: 'Reporting active seats used during a period',
  value: {
    subscription_id: '550e8400-e29b-41d4-a716-446655440000',
    subscription_item_code: 'active_seats',
    usage_date: '2026-03-15T09:30:00Z',
    quantity: 12,
    metadata: { department: 'engineering', update_type: 'onboarding' },
  },
}

const ResSubscriptionUsageExample = {
  summary: 'Successful usage record creation',
  description: 'Returns the reported usages',
  value: {
    id: '750e8400-e29b-41d4-a716-446655440000',
    subscription_id: '550e8400-e29b-41d4-a716-446655440000',
    subscription_cycle_id: '850e8400-e29b-41d4-a716-446655440000',
    subscription_item_code: 'api_calls',
    usage_date: '2026-03-01T21:00:00Z',
    quantity: 100,
    metadata: { user_id: '12345', api_version: 'v2' },
    created_at: '2026-03-01T21:05:00Z',
    updated_at: '2026-03-01T21:05:00Z',
  },
}

const ReqSubscriptionUsageUpdateQuantityExample = {
  summary: 'Update quantity',
  value: { quantity: 150 },
}

const ReqSubscriptionUsageUpdateMetadataExample = {
  summary: 'Update metadata',
  value: { metadata: { user_id: '67890', api_version: 'v3' } },
}

const ReqSubscriptionUsageUpdateExample = {
  summary: 'Update both quantity and metadata',
  value: { quantity: 200, metadata: { user_id: '54321' } },
}

const ResSettlementReportExample = {
  summary: 'Settlement report',
  value:
    'transaction_id,order_id,original_order_id,started_date,updated_date,completed_date,payment_created_date,payment_captured_date,type,state,description,merchant_order_ext_ref,customer_id,amount,currency,settlement_amount,settlement_currency,payment_method,fee_amount,fee_currency,processing_fee_amount,processing_fee_currency,browser_url,location_id\n67f66fa6-200c-aaef-8708-cb78366f8a30,67f66f41-3022-a623-827e-e0616c0d04e7,67f66f41-3022-a623-827e-e0616c0d04e7,2025-04-09T13:01:26.288638Z,2025-04-10T13:02:09.843018Z,2025-04-10T13:02:09.837719Z,2025-04-09T13:01:26.186Z,2025-04-10T13:02:09.837719Z,SETTLEMENT,COMPLETED,Summer hat,ORD-2025-0042,,100.00,GBP,99.00,GBP,CARD,1.00,GBP,1.00,GBP,https://sandbox-checkout.revolut.com/payment-link/1ae44a1c-3ea8-47ac-b736-7d7d4c992bb4,\n67f66fb7-300d-bbff-9819-dc89477a9b41,67f67052-4133-b734-938f-f1727d1e15f8,67f66f41-3022-a623-827e-e0616c0d04e7,2025-04-10T09:10:00.000000Z,2025-04-10T09:12:00.000000Z,2025-04-10T09:12:00.000000Z,,,REFUND,COMPLETED,Refund for Summer hat,ORD-2025-0042-R1,,25.00,GBP,-25.00,GBP,CARD,0.00,GBP,0.00,GBP,https://sandbox-checkout.revolut.com/payment-link/1ae44a1c-3ea8-47ac-b736-7d7d4c992bb4,\n67f66fc8-411e-cc10-a92a-ed9a588b0c52,67f67063-5244-c845-a49a-a2838e2f26a9,67f66f41-3022-a623-827e-e0616c0d04e7,2025-04-11T08:30:00.000000Z,2025-04-11T08:45:00.000000Z,2025-04-11T08:45:00.000000Z,,,CHARGEBACK,COMPLETED,Chargeback for Summer hat,ORD-2025-0042-CB1,,75.00,GBP,-75.00,GBP,CARD,0.00,GBP,0.00,GBP,https://sandbox-checkout.revolut.com/payment-link/1ae44a1c-3ea8-47ac-b736-7d7d4c992bb4,\n67f66fd9-522f-dd21-ba3b-feab699a1d63,67f67074-6355-d956-b50a-a3949f3a37a0,67f66f41-3022-a623-827e-e0616c0d04e7,2025-04-15T10:00:00.000000Z,2025-04-15T10:05:00.000000Z,2025-04-15T10:05:00.000000Z,,,CHARGEBACK_REVERSAL,COMPLETED,Chargeback reversal for Summer hat,ORD-2025-0042-CBR1,,75.00,GBP,75.00,GBP,CARD,0.00,GBP,0.00,GBP,https://sandbox-checkout.revolut.com/payment-link/1ae44a1c-3ea8-47ac-b736-7d7d4c992bb4,',
}

const ResCustomReportExample = {
  summary: 'Custom report (filtered columns)',
  value:
    'transaction_id,order_id,payment_created_date,payment_captured_date,payment_method,amount,currency,state,updated_date\n649ae37f-99ca-a7db-a4fb-5924af14ad7c,649ae35c-2558-adea-bf98-3a7156a764e7,2023-06-28T13:20:46.07498Z,2023-06-28T13:30:46.07498Z,PAY_WITH_REVOLUT,0.05,GBP,COMPLETED,2023-06-28T13:30:46.07498Z\n649ae3de-e945-af9f-98c8-1d6172e350b5,649ae3ab-3998-ab2b-ad95-41b48346be69,2023-06-28T13:22:46.075569Z,2023-06-28T13:30:46.075569Z,PAY_WITH_REVOLUT,0.05,GBP,COMPLETED,2023-06-28T13:30:46.075569Z\n649ae48b-37f6-a097-9cb0-4fc2a89d9e5a,649ae479-d7e8-a139-993b-bf75865c5059,2023-06-28T13:35:46.084289Z,2023-06-28T13:38:46.084289Z,PAY_WITH_REVOLUT,0.05,GBP,COMPLETED,2023-06-28T13:38:46.084289Z',
}

const ResPaymentsReportExample = {
  summary: 'Payments report',
  value:
    'payment_id,type,description,original_payment_id,order_id,state,reason,amount,currency,surcharge_amount,tip_amount,refunded_amount,created_date,captured_date,merchant_order_ext_ref,payment_method,location_id,customer_id,customer_card_number,customer_card_country,customer_card_brand,customer_card_type,customer_card_category,customer_email,fee_amount,fee_currency\n67f66fa6-7e98-ae73-9570-50583cec116d,PAYMENT,Payment from customer,,67f66f41-3022-a623-827e-e0616c0d04e7,COMPLETED,,1.00,GBP,,0.00,0.00,2025-04-09T13:01:26.186Z,2025-04-10T13:02:09.837Z,ORD-2025-0042,CARD,,cust-0001-0000-0000-000000000001,528143******4148,GB,VISA,DEBIT,consumer,customer@example.com,0.01,GBP\n6807b0a5-a367-afbf-b31f-353730b788b5,PAYMENT,Payment from customer,,6807b09c-c62a-a656-818e-f071ef67ee36,DECLINED,,10.01,GBP,,0.00,0.00,2025-04-22T15:07:17.352Z,,,PAY_WITH_REVOLUT,,,,,,,,customer@example.com,,\n67efa316-db8a-aec6-8eb4-46e47b6ebdc4,PAYMENT,Payment from customer,,67efa305-be19-a456-a6a2-154b218ac386,FAILED,INSUFFICIENT_FUNDS,0.57,USD,,0.00,0.00,2025-04-04T09:15:02.13Z,,,CARD,,,222300******9399,GB,VISA,DEBIT,consumer,customer@example.com,,',
}

const ResPayoutReportExample = {
  summary: 'Payout statement report',
  value:
    'created_date,completed_date,payout_affected_date,affected_payout_amount,transaction_id,order_id,dispute_id,merchant_order_reference,type,related_icpp_charge_id,transaction_amount,transaction_currency,billing_amount,billing_currency,state,original_transaction_id,original_transaction_amount,original_transaction_currency,original_order_id,original_order_channel,original_merchant_order_reference,fee_amount,fee_currency,settlement_amount,settlement_currency,location_id,location_name,submerchant_id,payout_transfer_reference,payout_total_amount,payout_date\n2025-03-25T14:34:05.708899Z,2025-03-26T14:34:38.06903Z,2025-03-26T14:34:38.06903Z,true,67e2bedd-0e79-a8ea-ac4c-e9fd13693286,67e2be76-89c5-ae4f-9103-a152ae6f0584,,ORD-2025-0042,Settlement,,0.57,USD,0.57,USD,COMPLETED,67e2bedd-0e79-a8ea-ac4c-e9fd13693286,0.57,USD,67e2be76-89c5-ae4f-9103-a152ae6f0584,API,ORD-2025-0042,0.00,USD,0.57,USD,4a0f98a6-0f61-4e85-9ef0-7e5d0cb92ef0,Store London,,Revolut USD payout 2025-03-26 MerchantName,0.17,2025-03-26T15:00:00Z\n2025-03-25T15:38:45.162946Z,2025-03-26T15:39:58.03824Z,2025-03-26T15:39:58.03824Z,true,67e2ce05-1a16-abeb-b05b-5059073bcdaa,67e2ce00-6665-a52b-9f10-368f886054d7,a81bba54-e3f9-450f-aa50-7aea8e4e5b9a,ORD-2025-0042-CB1,Customer dispute - withdrawal,,-0.40,USD,-0.40,USD,COMPLETED,67e2bedd-0e79-a8ea-ac4c-e9fd13693286,0.57,USD,67e2be76-89c5-ae4f-9103-a152ae6f0584,API,ORD-2025-0042,0.00,USD,-0.40,USD,4a0f98a6-0f61-4e85-9ef0-7e5d0cb92ef0,Store London,,Revolut USD payout 2025-03-26 MerchantName,0.17,2025-03-26T15:00:00Z\n2025-03-26T08:00:00.000000Z,,2025-03-26T14:34:38.06903Z,true,67e2bf98-5678-efab-cd12-9012345678de,,,,Irreducible balance hold,,50.00,USD,50.00,USD,REVERTED,,,,,,,,,50.00,USD,,,,Revolut USD payout 2025-03-26 MerchantName,0.17,2025-03-26T15:00:00Z\n2025-03-26T08:00:00.000000Z,,2025-03-26T14:34:38.06903Z,true,67e2bf99-1234-abcd-ef01-1234567890ab,,,,Irreducible balance hold,,-50.00,USD,-50.00,USD,PENDING,,,,,,,,,-50.00,USD,,,,Revolut USD payout 2025-03-26 MerchantName,0.17,2025-03-26T15:00:00Z',
}

const ResWebhooksListExample = {
  summary: 'List of webhooks',
  value: {
    webhooks: [
      {
        id: '6fc8db62-6489-4470-a9e0-84b462fe3908',
        url: 'https://revolut.com/webhooks',
        events: ['ORDER_COMPLETED'],
      },
      {
        id: 'b466ab77-4932-4850-beb0-113bfc1166f8',
        url: 'https://business.revolut.com/webhooks',
        events: ['ORDER_COMPLETED', 'ORDER_AUTHORISED'],
      },
      {
        id: 'c6b981f4-53b3-47d5-9b24-4f87af1160eb',
        url: 'https://example.com/webhooks',
        events: ['ORDER_AUTHORISED', 'ORDER_COMPLETED'],
      },
    ],
  },
}

const ReqWebhookCreateExample = {
  summary: 'Example webhook request',
  value: { url: 'https://example.com/webhooks', events: ['ORDER_COMPLETED', 'ORDER_AUTHORISED'] },
}

const ResWebhookV2Example = {
  summary: 'Webhook',
  value: {
    id: 'c6b981f4-53b3-47d5-9b24-4f87af1160eb',
    url: 'https://example.com/webhooks',
    events: ['ORDER_AUTHORISED', 'ORDER_COMPLETED'],
    signing_secret: 'wsk_4jETWMz1g1b37gCONjNp84t2KSSIT7dK',
  },
}

const ReqWebhookUpdateExample = {
  summary: 'Update a webhook',
  value: {
    url: 'https://example.com/webhooks/updated',
    events: ['ORDER_COMPLETED', 'ORDER_AUTHORISED', 'ORDER_CANCELLED'],
  },
}

const ReqWebhookRotateSigningSecretExample = {
  summary: 'Webhook signing secret rotation request',
  value: { expiration_period: 'PT5H30M' },
}

const ReqLocationOnlineExample = {
  summary: 'Online location request example',
  value: { name: 'Grocery website', type: 'online', details: { domain: 'groceries.example.com' } },
}

const ReqLocationPhysicalExample = {
  summary: 'Physical location request example',
  value: {
    name: 'Example Street Store',
    type: 'physical',
    details: {
      address: {
        street_line_1: '123 Example Street',
        city: 'Example city',
        postcode: '12345',
        country_code: 'GB',
      },
      geo_location: { lat: 12.3456, lon: -12.3456 },
      opening_hours: {
        monday: [
          { from: '09:00', to: '15:00' },
          { from: '16:00', to: '18:00' },
        ],
        tuesday: [
          { from: '10:00', to: '13:00' },
          { from: '16:00', to: '18:00' },
        ],
      },
    },
  },
}

const ResLocationOnlineExample = {
  summary: 'Online location request example',
  value: {
    id: '8d9a7125-805f-40f3-a405-bc89765db996',
    name: 'Grocery website',
    type: 'online',
    details: { domain: 'groceries.example.com' },
  },
}

const ResLocationPhysicalExample = {
  summary: 'Physical location request example',
  value: {
    id: '8d9a7125-805f-40f3-a405-bc89765db996',
    name: 'Example Street Store',
    type: 'physical',
    details: {
      address: {
        street_line_1: '123 Example Street',
        city: 'Example city',
        postcode: '12345',
        country_code: 'GB',
      },
      geo_location: { lat: 12.3456, lon: -12.3456 },
      opening_hours: {
        monday: [
          { from: '09:00', to: '15:00' },
          { from: '16:00', to: '18:00' },
        ],
        tuesday: [
          { from: '10:00', to: '13:00' },
          { from: '16:00', to: '18:00' },
        ],
      },
    },
  },
}

const ResTerminalsListExample = {
  summary: 'List of terminals at a location',
  value: {
    terminals: [
      {
        id: '0e53f673-7705-473a-a263-89a3e7647c3d',
        name: 'Terminal 1',
        type: 'newland_n950',
        serial_number: 'RT-00123456',
        battery_level: 85,
        online: true,
        last_online_at: '2025-01-15T14:30:00Z',
      },
      {
        id: 'a7b2c8d1-4e5f-6a7b-8c9d-0e1f2a3b4c5d',
        name: 'Terminal 2',
        type: 'newland_n950',
        serial_number: 'RT-00123457',
        battery_level: 92,
        online: true,
        last_online_at: '2025-01-15T14:32:00Z',
        device_id: '37d9bc77-dde3-51c6-a961-d2747ef6e4b9',
      },
    ],
  },
}

const ReqPaymentIntentExample = {
  summary: 'Create payment intent request example',
  value: { amount: 2500, terminal_id: '0e53f673-7705-473a-a263-89a3e7647c3d' },
}

const ResPaymentIntentPendingExample = {
  summary: 'Payment intent pending',
  value: {
    id: 'b4d58add-b3fe-40e4-a70a-8c78df977888',
    state: 'pending',
    order_id: '5c9fc54e-11b4-4f7f-8686-4a64d4d20db4',
    amount: 2500,
    currency: 'GBP',
  },
}

const ResPaymentIntentProcessingExample = {
  summary: 'Payment intent processing',
  value: {
    id: 'b4d58add-b3fe-40e4-a70a-8c78df977888',
    order_id: '5c9fc54e-11b4-4f7f-8686-4a64d4d20db4',
    state: 'processing',
    amount: 2500,
    currency: 'GBP',
    terminal_id: '0e53f673-7705-473a-a263-89a3e7647c3d',
    created_at: '2025-01-15T11:01:00Z',
    updated_at: '2025-01-15T11:02:15Z',
  },
}

const ResPaymentIntentCompletedExample = {
  summary: 'Payment intent completed',
  value: {
    id: 'b4d58add-b3fe-40e4-a70a-8c78df977888',
    state: 'completed',
    terminal_id: '0e53f673-7705-473a-a263-89a3e7647c3d',
    order_id: '5c9fc54e-11b4-4f7f-8686-4a64d4d20db4',
    payment_id: '7a8b9c0d-1e2f-3a4b-5c6d-7e8f9a0b1c2d',
    amount: 2500,
    currency: 'GBP',
    created_at: '2025-01-15T11:01:00Z',
    updated_at: '2025-01-15T11:02:30Z',
  },
}

const ResPaymentIntentCancelledExample = {
  summary: 'Payment intent cancelled',
  value: {
    id: 'b4d58add-b3fe-40e4-a70a-8c78df977888',
    state: 'cancelled',
    terminal_id: '0e53f673-7705-473a-a263-89a3e7647c3d',
    order_id: '5c9fc54e-11b4-4f7f-8686-4a64d4d20db4',
    amount: 2500,
    currency: 'GBP',
    created_at: '2025-01-15T11:01:00Z',
    updated_at: '2025-01-15T11:01:45Z',
  },
}

const ResPaymentIntentFailedExample = {
  summary: 'Payment intent failed',
  value: {
    id: 'b4d58add-b3fe-40e4-a70a-8c78df977888',
    state: 'failed',
    terminal_id: '0e53f673-7705-473a-a263-89a3e7647c3d',
    order_id: '5c9fc54e-11b4-4f7f-8686-4a64d4d20db4',
    amount: 2500,
    currency: 'GBP',
    created_at: '2025-01-15T11:01:00Z',
    updated_at: '2025-01-15T11:03:00Z',
  },
}

const BearerAuthSecurityScheme = {
  type: 'http',
  scheme: 'bearer',
  bearerFormat: 'string',
  description:
    "Each Merchant API request must contain an authorization header in the following format:\n\n```\n'Authorization: Bearer <yourSecretApiKey>'\n```\n\nTo use this API, you need to generate API keys from your Revolut Business account. The Secret key is used in the authorization header for all server calls, while the Public key is provided with payment methods at checkout.\n\n:::info\nFor detailed instructions on generating your API keys, see: [Generate API keys](https://developer.revolut.com/docs/guides/merchant/get-started#generate-api-keys).\n:::",
}

const SSLSecurityScheme = {
  type: 'http',
  scheme: 'SSL',
  description:
    ":::note\nThis authentication protocol is used exclusively when using [Fast checkout](https://developer.revolut.com/docs/guides/merchant/optimise-checkout/fast-checkout).\n:::\n\nConnection over HTTPS is using SSL authentication. For successful authentication, your system's certificate should be issued by a Public Certificate Authority (PCA) and your system should trust Revolut's public certificate.",
}

const PayloadSignatureSecurityScheme = {
  type: 'apiKey',
  in: 'header',
  name: 'Revolut-Pay-Payload-Signature',
  description:
    ':::note\nThis authentication protocol is used exclusively when using [Fast checkout](https://developer.revolut.com/docs/guides/merchant/optimise-checkout/fast-checkout).\n:::\n\nData integrity and authorship will be verified using a payload-based signature. The response of a successful URL registration for address validation (see: [Register address validation for Fast checkout](https://developer.revolut.com/docs/api/merchant#register-address-validation-endpoint)) will contain a secret signing key.\n\nThe signing key will be used by Revolut to compute a Hash-based Message Authentication Code (HMAC) payload signature whenever the registered URL is called, which should be verified by your backend.',
}

export const getApiOrdersRoute = createRoute({
  method: 'get',
  path: '/api/orders',
  tags: ['Orders'],
  summary: 'Retrieve an order list',
  description:
    'Get a paginated list of your orders, returned as a wrapped `orders` array.\n\nThe response contains simplified `Order` objects. To get the full details of a specific order, use the [Retrieve an order](https://developer.revolut.com/docs/api/merchant/2024-09-01#retrieve-order) endpoint.  ',
  operationId: 'retrieveOrderList',
  request: {
    headers: z.object({
      Authorization: AuthorizationParamsSchema,
      'Revolut-Api-Version': RevolutApiVersionParamsSchema,
    }),
    query: z.object({
      limit: LimitParamsSchema,
      from: FromParamsSchema,
      to: ToParamsSchema,
      customer_id: CustomerIdQueryParamsSchema,
      merchant_order_data_reference: MerchantOrderDataReferenceParamsSchema,
      state: OrderStateQueryParamsSchema,
      location_id: LocationIdQueryParamsSchema,
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': {
          schema: OrdersV2Schema,
          examples: { list_of_orders: ResOrdersListV2Example },
        },
      },
    },
    400: { description: 'Bad Request', content: { 'application/json': { schema: ErrorV2Schema } } },
    401: {
      description: 'Unauthorized',
      content: { 'application/json': { schema: ErrorV2Schema } },
    },
    403: {
      description: 'Forbidden',
      content: {
        'application/json': {
          schema: ErrorV2Schema,
          example: {
            code: 'forbidden',
            message: 'The requested operation is forbidden',
            timestamp: 1721050063886,
          },
        },
      },
    },
    422: {
      description: 'Unprocessable entity',
      content: { 'application/json': { schema: ErrorV2Schema } },
    },
    500: {
      description: 'Internal Server Error',
      content: { 'application/json': { schema: ErrorV2Schema } },
    },
  },
  security: [{ 'Bearer-Auth': [] }],
})

export const postApiOrdersRoute = createRoute({
  method: 'post',
  path: '/api/orders',
  tags: ['Orders'],
  summary: 'Create an order',
  description:
    'Create an `Order` object.\n\nCreating orders is one of the basic operations of the Merchant API. Most of the other operations are related to creating orders. Furthermore, the payment methods merchants can use to take payments for their orders are also built on order creation.\n\nTo learn more about how you can accept payments, see:\n  - [Revolut Pay](https://developer.revolut.com/docs/guides/merchant/accept-payments/online-payments/revolut-pay/introduction)\n  - [Card payments](https://developer.revolut.com/docs/guides/merchant/accept-payments/online-payments/card-payments/introduction)\n  - [Apple Pay and Google Pay](https://developer.revolut.com/docs/guides/merchant/accept-payments/online-payments/apple-pay-google-pay/introduction)\n  - [Pay by Bank](https://developer.revolut.com/docs/guides/merchant/accept-payments/online-payments/pay-by-bank/introduction)\n  - [Revolut Checkout](https://developer.revolut.com/docs/guides/merchant/accept-payments/online-payments/revolut-checkout/introduction)\n  - [Hosted Checkout Page](https://developer.revolut.com/docs/guides/merchant/accept-payments/online-payments/hosted-checkout-page/introduction)\n\n\n### Pre-authorisation and incremental authorisation\n\nOrders can be created with `authorisation_type: pre_authorisation` to enable incremental authorisation. This allows you to increase the authorised amount after the initial authorisation.\n\n**Requirements:**\n- `capture_mode` must be set to `manual`\n- `authorisation_type` must be set to `pre_authorisation`\n- Only supported for card payments currently\n\n**Example use cases:**\n- Hotels: authorise deposit, then increment for room service and minibar\n- Car rentals: authorise deposit, then increment for damages or fuel\n\n:::info\nFor more information, see:\n- [Pre-authorisation guide](https://developer.revolut.com/docs/guides/merchant/operations/capture-and-settlement/advanced-authorisation/pre-authorisation)\n- [Incremental authorisation guide](https://developer.revolut.com/docs/guides/merchant/operations/capture-and-settlement/advanced-authorisation/incremental-authorisation)\n- [Increment authorisation endpoint](https://developer.revolut.com/docs/api/merchant/2024-09-01#increment-authorisation)\n:::\n\n<details>\n<summary>Industry-specific requirements</summary>\n\nIf you operate in any of the industries listed below, sharing industry-specific data is mandatory. Not providing the necessary information will result in further scrutiny from Revolut and/or the imposition of risk mitigation actions.\n\n| Industry | Related fields |\n| ------- | --------------- |\n| Retail merchants | `line_items`, `shipping` |\n| Airlines | `industry_data` with `type: airline` |\n| Car rentals | `industry_data` with `type: car_rental` |\n| Hotels & accommodation | `industry_data` with `type: lodging` |\n| Travel agencies (OTAs) | `industry_data` with `type: airline` or `industry_data` with `type: lodging` |\n| Crypto merchants | `industry_data` with `type: crypto`; `customer.full_name`, `customer.date_of_birth` |\n| Financial institutions | `customer.full_name`, `customer.date_of_birth` |\n| Stored value / Wallets | `customer.full_name`, `customer.date_of_birth` |\n| Event ticket sellers | `industry_data` with `type: event` |\n| Marketplace merchants | `industry_data` with `type: marketplace` |\n\n</details>',
  operationId: 'createOrder',
  request: {
    headers: z.object({
      Authorization: AuthorizationParamsSchema,
      'Revolut-Api-Version': RevolutApiVersionParamsSchema,
    }),
    body: {
      content: {
        'application/json': {
          schema: OrderCreationV4Schema,
          examples: {
            example_order_min_params: ReqOrderMinExample,
            example_order_additional: ReqOrderAdditionalV2Example,
            example_order_pre_auth: ReqOrderPreAuthExample,
            example_order_line_items: ReqOrderLineItemsExample,
            example_order_shipping: ReqOrderShippingExample,
            example_order_airline: ReqOrderAirlineExample,
            example_order_car_rental: ReqOrderCarRentalExample,
            example_order_crypto: ReqOrderCryptoExample,
            example_order_marketplace: ReqOrderMarketplaceExample,
            example_order_event: ReqOrderEventExample,
            example_order_lodging: ReqOrderLodgingExample,
          },
        },
      },
    },
  },
  responses: {
    201: {
      description: 'Order created',
      content: {
        'application/json': {
          schema: OrderV4Schema,
          examples: {
            example_order_min_params: ResOrderMinExample,
            example_order_additional: ResOrderAdditionalV2Example,
            example_order_pre_auth: ResOrderPreAuthExample,
            example_order_line_items: ResOrderLineItemsExample,
            example_order_shipping: ResOrderShippingExample,
            example_order_airline: ResOrderAirlineExample,
            example_order_car_rental: ResOrderCarRentalExample,
            example_order_crypto: ResOrderCryptoExample,
            example_order_marketplace: ResOrderMarketplaceExample,
            example_order_event: ResOrderEventExample,
            example_order_lodging: ResOrderLodgingExample,
          },
        },
      },
    },
    400: {
      description: 'Bad Request',
      content: {
        'application/json': {
          schema: ErrorV2Schema,
          example: {
            code: 'bad_request',
            message: 'Could not parse JSON',
            timestamp: 1721049596461,
          },
        },
      },
      headers: z.object({}),
    },
    401: {
      description: 'Unauthorized',
      content: {
        'application/json': {
          schema: ErrorV2Schema,
          example: {
            code: 'unauthenticated',
            message: 'Authentication failed',
            timestamp: 1721049596461,
          },
        },
      },
    },
    403: {
      description: 'Forbidden',
      content: {
        'application/json': {
          schema: ErrorV2Schema,
          example: {
            code: 'forbidden',
            message: 'The requested operation is forbidden',
            timestamp: 1721050063886,
          },
        },
      },
    },
    404: { description: 'Not Found', content: { 'application/json': { schema: ErrorV2Schema } } },
    422: {
      description: 'Unprocessable entity',
      content: { 'application/json': { schema: ErrorV2Schema } },
    },
    500: {
      description: 'Internal Server Error',
      content: { 'application/json': { schema: ErrorV2Schema } },
    },
  },
  security: [{ 'Bearer-Auth': [] }],
})

export const getApiOrdersOrderIdRoute = createRoute({
  method: 'get',
  path: '/api/orders/{order_id}',
  tags: ['Orders'],
  summary: 'Retrieve an order',
  description:
    'Retrieve the details of an order that has been created. Provide the unique\norder ID, and the corresponding order information is returned.',
  operationId: 'retrieveOrder',
  request: {
    headers: z.object({
      Authorization: AuthorizationParamsSchema,
      'Revolut-Api-Version': RevolutApiVersionParamsSchema,
    }),
    params: z.object({ order_id: OrderIdParamsSchema }),
  },
  responses: {
    200: {
      description: 'Order retrieved',
      content: {
        'application/json': {
          schema: OrderV4Schema,
          examples: {
            example_order_min_params: ResOrderMinExample,
            example_order_additional: ResOrderAdditionalV2Example,
            example_order_pre_auth: ResOrderPreAuthExample,
            example_order_line_items: ResOrderLineItemsExample,
            example_order_subscription: ResOrderSubscriptionExample,
            example_order_shipping: ResOrderShippingExample,
            example_order_airline: ResOrderAirlineExample,
            example_order_car_rental: ResOrderCarRentalExample,
            example_order_crypto: ResOrderCryptoExample,
            example_order_marketplace: ResOrderMarketplaceExample,
            example_order_event: ResOrderEventExample,
            example_order_lodging: ResOrderLodgingExample,
          },
        },
      },
    },
    400: {
      description: 'Bad Request',
      content: {
        'application/json': {
          schema: ErrorV2Schema,
          example: {
            code: 'bad_request',
            message: 'Could not parse JSON',
            timestamp: 1601296792533,
          },
        },
      },
    },
    401: {
      description: 'Unauthorized',
      content: {
        'application/json': {
          schema: ErrorV2Schema,
          example: {
            code: 'unauthenticated',
            message: 'Authentication failed',
            timestamp: 1721049596461,
          },
        },
      },
    },
    404: {
      description: 'Not Found',
      content: {
        'application/json': {
          schema: ErrorV2Schema,
          example: {
            code: 'not_found',
            message: 'Order with id abfa5bbd-a20c-4a0e-be66-30e733454518 was not found',
            timestamp: 1721050063886,
          },
        },
      },
    },
    500: {
      description: 'Internal Server Error',
      content: { 'application/json': { schema: ErrorV2Schema } },
    },
  },
  security: [{ 'Bearer-Auth': [] }],
})

export const patchApiOrdersOrderIdRoute = createRoute({
  method: 'patch',
  path: '/api/orders/{order_id}',
  tags: ['Orders'],
  summary: 'Update an order',
  description:
    'Update the details of an order.\n\nYou can update an order and specific parameters based on the value of the `state` parameter:\n  \n| State parameter value | Modifiable parameters |\n| --------------------- | --------------------- |\n| `pending` | You can modify all listed parameters. |\n| `authorised` | You can modify the following parameters: <br /><br /> <ul><li>`merchant_order_data.reference`</li><li>`description`</li><li>`metadata`</li><li>`shipping`</li><li>`industry_data`</li><li>`cancel_authorised_after`</li></ul> |\n| `completed` | You can modify the following parameters: <br /><br /> <ul><li>`merchant_order_data.reference`</li><li>`description`</li><li>`metadata`</li><li>`shipping`</li><li>`industry_data`</li></ul> |\n| `processing` | You cannot modify parameters. |\n\n:::info\nFor more information about the order lifecycle, see: [Order and payment lifecycle](https://developer.revolut.com/docs/guides/merchant/reference/order-lifecycle).\n:::',
  operationId: 'updateOrder',
  request: {
    headers: z.object({
      Authorization: AuthorizationParamsSchema,
      'Revolut-Api-Version': RevolutApiVersionParamsSchema,
    }),
    params: z.object({ order_id: OrderIdParamsSchema }),
    body: {
      content: {
        'application/json': {
          schema: OrderUpdateV4Schema,
          examples: { example_update_order: ReqOrderUpdateExample },
        },
      },
    },
  },
  responses: {
    200: {
      description: 'Order updated',
      content: {
        'application/json': {
          schema: OrderV4Schema,
          examples: { example_order_updated: ResOrderUpdateExample },
        },
      },
    },
    400: {
      description: 'Bad Request',
      content: {
        'application/json': {
          schema: ErrorV2Schema,
          example: {
            code: 'bad_request',
            message: 'Could not parse JSON',
            timestamp: 1721049596461,
          },
        },
      },
      headers: z.object({}),
    },
    401: {
      description: 'Unauthorized',
      content: {
        'application/json': {
          schema: ErrorV2Schema,
          example: {
            code: 'unauthenticated',
            message: 'Authentication failed',
            timestamp: 1721049596461,
          },
        },
      },
    },
    403: {
      description: 'Forbidden',
      content: {
        'application/json': {
          schema: ErrorV2Schema,
          example: {
            code: 'forbidden',
            message: 'The requested operation is forbidden',
            timestamp: 1721050063886,
          },
        },
      },
    },
    404: {
      description: 'Not Found',
      content: {
        'application/json': {
          schema: ErrorV2Schema,
          example: {
            code: 'not_found',
            message: 'Order with id abfa5bbd-a20c-4a0e-be66-30e733454518 was not found',
            timestamp: 1721050063886,
          },
        },
      },
    },
    422: {
      description: 'Unprocessable Entity',
      content: {
        'application/json': {
          schema: ErrorV2Schema,
          example: {
            code: 'order_invalid_state',
            message:
              'Operation cannot be performed because order is in completed state and expected is [pending]',
            timestamp: 1721049952145,
          },
        },
      },
    },
    500: {
      description: 'Internal Server Error',
      content: { 'application/json': { schema: ErrorV2Schema } },
    },
  },
  security: [{ 'Bearer-Auth': [] }],
})

export const postApiOrdersOrderIdIncrementAuthorisationRoute = createRoute({
  method: 'post',
  path: '/api/orders/{order_id}/increment-authorisation',
  tags: ['Orders'],
  summary: 'Increment authorisation',
  description:
    'Increase the authorised amount on a pre-authorised order.\n\nThis operation allows you to increment the authorised amount for orders created with `authorisation_type: pre_authorisation` and `capture_mode: manual`.\n\n:::note\nCurrently, only card payments are supported.\n:::\n\n### Common use-cases\n\n- Hotel additional charges (e.g., minibar, room service)\n- Car rental damage or fuel charges\n- Equipment rental extensions\n\n### How it works\n\n1. Create an order with `capture_mode: manual` and `authorisation_type: pre_authorisation`\n1. Take payment using one of our card payment solutions\n1. When payment/order reaches `authorised` state, you can increment authorised amount\n1. When no more increments are expected, [capture the order](https://developer.revolut.com/docs/api/merchant/2024-09-01#capture-order) to complete the transaction\n\n:::warning\n- Can only increment orders in `authorised` state\n- Must have `authorisation_type: pre_authorisation` and `capture_mode: manual`\n- Sum of all increment amounts cannot exceed 5x the initial amount\n- Maximum 10 increments per order\n- Process increments sequentially to avoid declines\n- Currently only supported for card payments\n:::\n\n:::info\nFor more information, see: [Incremental authorisation guide](https://developer.revolut.com/docs/guides/merchant/operations/capture-and-settlement/advanced-authorisation/incremental-authorisation)\n:::',
  operationId: 'incrementOrderAuthorisation',
  request: {
    headers: z.object({
      Authorization: AuthorizationParamsSchema,
      'Revolut-Api-Version': RevolutApiVersionParamsSchema,
    }),
    params: z.object({ order_id: OrderIdParamsSchema }),
    body: {
      content: {
        'application/json': {
          schema: IncrementalAuthorisationRequestSchema,
          examples: {
            basic_increment: ReqOrderIncrementAuthBasicExample,
            increment_with_additional: ReqOrderIncrementAuthAdditionalExample,
          },
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Authorization increment initiated successfully',
      content: {
        'application/json': {
          schema: OrderV4Schema,
          examples: {
            increment_in_progress: ResOrderIncrementProcessingExample,
            increment_authorised: ResOrderIncrementAuthorisedExample,
            increment_declined: ResOrderIncrementDeclinedExample,
          },
        },
      },
    },
    400: {
      description: 'Bad Request',
      content: {
        'application/json': {
          schema: ErrorV2Schema,
          examples: { invalid_amount: ResErrorIncrementInvalidAmountExample },
        },
      },
    },
    401: {
      description: 'Unauthorized',
      content: {
        'application/json': {
          schema: ErrorV2Schema,
          example: {
            code: 'unauthenticated',
            message: 'Authentication failed',
            timestamp: 1721049596461,
          },
        },
      },
    },
    403: {
      description: 'Forbidden',
      content: {
        'application/json': {
          schema: ErrorV2Schema,
          example: {
            code: 'forbidden',
            message: 'The requested operation is forbidden',
            timestamp: 1721050063886,
          },
        },
      },
    },
    404: {
      description: 'Order not found',
      content: {
        'application/json': {
          schema: ErrorV2Schema,
          example: { code: 'not_found', message: 'Order not found', timestamp: 1768397646286 },
        },
      },
    },
    422: {
      description: 'Unprocessable Entity',
      content: {
        'application/json': {
          schema: ErrorV2Schema,
          examples: {
            invalid_state: ResErrorIncrementInvalidStateExample,
            invalid_auth_type: ResErrorIncrementInvalidAuthTypeExample,
          },
        },
      },
    },
    500: {
      description: 'Internal Server Error',
      content: { 'application/json': { schema: ErrorV2Schema } },
    },
  },
  security: [{ 'Bearer-Auth': [] }],
})

export const postApiOrdersOrderIdCaptureRoute = createRoute({
  method: 'post',
  path: '/api/orders/{order_id}/capture',
  tags: ['Orders'],
  summary: 'Capture an order',
  description:
    "This endpoint is used to capture the funds of an existing, uncaptured order. When the payment for an order is authorised, you can capture the order to send it to the processing stage.\n\n:::info\nFor more information about the order and payment lifecycle, see: [Order and payment\nlifecycle](https://developer.revolut.com/docs/guides/merchant/reference/order-lifecycle).\n:::\n\n## Capture modes\n\nWhen you [create an order](https://developer.revolut.com/docs/api/merchant/2024-09-01#create-order), you can choose one of the following capture modes:\n\n  | **Capture mode** | **Description** |\n  | ---------------- | --------------- |\n  | `automatic` | The order is captured automatically after payment authorisation. No further actions are needed. |\n  | `manual` | The order is not captured automatically and stays in `authorised` state. You must manually capture the order using the steps outlined below. |\n\n:::warning\nBy default, uncaptured orders with **final authorisation** (`authorisation_type: final`) remain in `authorised` state for **7 days**. If not captured within this period, the funds are returned to the customer's original payment method.\n\nThe capture deadline can be customised:\n- Use `cancel_authorised_after` parameter when creating an order to set a custom expiry period\n- The effective deadline is the earlier of `cancel_authorised_after` and the card/network clearing window\n- `capture_deadline` is set when the order becomes `authorised` and doesn't change afterwards\n- Use **pre-authorisation** (`authorisation_type: pre_authorisation`) for extended clearing windows (up to 30 days) and incremental authorisation support (see tip below)\n:::\n\n:::tip [Extended clearing windows]\nIf your business requires longer authorisation hold periods (up to 30 days depending on card scheme and MCC), use [pre-authorisation](https://developer.revolut.com/docs/guides/merchant/operations/capture-and-settlement/advanced-authorisation/pre-authorisation) instead of standard authorisation. Pre-authorisation also supports [incremental authorisation](https://developer.revolut.com/docs/guides/merchant/operations/capture-and-settlement/advanced-authorisation/incremental-authorisation) for variable-amount scenarios.\n:::\n\n### Manual capture\n  \nTo capture an order manually, use one of the following methods:\n  \n| **Web UI** | **Merchant API** |\n| ---------- | ------------ |\n| <ol><li>Log in to your [Revolut Business portal](https://business.revolut.com).</li><li>Navigate to the **Merchant** tab on the dashboard, and click the **See all** button in the **Transactions** section.</li><li>Select an uncaptured payment, and click **Capture**.</li></ol> | Use the `/capture` endpoint. |\n\n:::info\nFor more information about manually capturing an order, see: [Authorise an amount to capture\nlater](https://developer.revolut.com/docs/guides/merchant/operations/capture-and-settlement/capture-later).\n:::\n\n#### Partial capture\n\nYou have the option to capture only a fraction of the full amount. In such cases, the uncaptured portion of the amount will be voided.\n\n:::warning\nThe following limitations apply to manual captures:\n  - An order can only be captured once\n  - Captured amount can't exceed the authorised amount\n  - On Web UI, only capturing full amount is possible\n  - `0` amount captures are not allowed\n  - For partial captures, you can only resend the request with the initial amount\n:::\n\n#### Updating line items at capture\n\nYou can optionally provide `line_items` when capturing an order. This allows you to adjust the final order details at the time of capture, which is useful for scenarios such as:\n- **Partial captures:** Specify which items are being captured when capturing less than the full amount. Line items help accurately reflect which items were captured versus voided (see [Partial capture](#partial-capture) above).\n- **Final adjustments:** Update order details when the delivered items differ from the initial authorisation (e.g., out-of-stock items, substitutions, quantity changes).\n\n:::warning\nIf you provide `line_items` when capturing, they will **overwrite** the original line items provided during order creation or update. Ensure you include all items you want associated with the captured order.\n:::\n\n:::info\nFor a comprehensive guide including use cases and examples, see: [Authorise a payment to capture later](https://developer.revolut.com/docs/guides/merchant/operations/capture-and-settlement/capture-later#update-line-items-at-capture).\n:::\n\n## Idempotency and repeated requests\n\nThe capture operation is idempotent. This means that an order can only be captured once. If you send a capture request more than once:\n\n- The first valid request captures the order and moves it to the processing stage.\n- Any subsequent request with the same capture amount will not recapture funds and behaves like a [Retrieve an order](https://developer.revolut.com/docs/api/merchant/2024-09-01#retrieve-order) request, returning the current order state.\n- A subsequent request with a different capture amount returns an error.\n\n:::info\nUtilising the idempotent nature of this endpoint helps maintain data consistency and prevents duplicate processing of the same order.\n:::",
  operationId: 'captureOrder',
  request: {
    headers: z.object({
      Authorization: AuthorizationParamsSchema,
      'Revolut-Api-Version': RevolutApiVersionParamsSchema,
    }),
    params: z.object({ order_id: OrderIdParamsSchema }),
    body: {
      content: {
        'application/json': {
          schema: OrderCaptureV2Schema,
          examples: {
            example_minimal: ReqOrderCaptureMinExample,
            example_with_line_items: ReqOrderCaptureLineItemsExample,
          },
        },
      },
    },
  },
  responses: {
    200: {
      description: 'Order captured',
      content: {
        'application/json': {
          schema: OrderV4Schema,
          examples: {
            captured_order_minimal: ResOrderCaptureMinExample,
            captured_order_line_items: ResOrderCaptureLineItemsExample,
          },
        },
      },
    },
    400: {
      description: 'Bad Request',
      content: {
        'application/json': {
          schema: ErrorV2Schema,
          example: {
            code: 'bad_request',
            message: 'Could not parse JSON',
            timestamp: 1601296792533,
          },
        },
      },
    },
    401: {
      description: 'Unauthorized',
      content: {
        'application/json': {
          schema: ErrorV2Schema,
          example: {
            code: 'unauthenticated',
            message: 'Authentication failed',
            timestamp: 1721049596461,
          },
        },
      },
    },
    403: {
      description: 'Forbidden',
      content: {
        'application/json': {
          schema: ErrorV2Schema,
          example: {
            code: 'forbidden',
            message: 'The requested operation is forbidden',
            timestamp: 1721050063886,
          },
        },
      },
    },
    404: {
      description: 'Not Found',
      content: {
        'application/json': {
          schema: ErrorV2Schema,
          example: {
            code: 'not_found',
            message: 'Order with id abfa5bbd-a20c-4a0e-be66-30e733454518 was not found',
            timestamp: 1721050063886,
          },
        },
      },
    },
    422: {
      description: 'Unprocessable entity',
      content: { 'application/json': { schema: ErrorV2Schema } },
    },
    500: {
      description: 'Internal Server Error',
      content: { 'application/json': { schema: ErrorV2Schema } },
    },
  },
  security: [{ 'Bearer-Auth': [] }],
})

export const postApiOrdersOrderIdCancelRoute = createRoute({
  method: 'post',
  path: '/api/orders/{order_id}/cancel',
  tags: ['Orders'],
  summary: 'Cancel an order',
  description:
    'Cancel an existing uncaptured order.\n\nYou can only cancel an order that is in one of the following states:\n  \n  | Order state | Description |\n  | ----------- | ----------- |\n  | `pending` | The order does not have any successful payment. |\n  | `authorised` | The `capture_mode` of an order is set to `manual` and the customer has made a successful payment. |\n\n:::info\nFor more information about the order lifecycle, see: [Order and payment lifecycle](https://developer.revolut.com/docs/guides/merchant/reference/order-lifecycle).\n:::',
  operationId: 'cancelOrder',
  request: {
    headers: z.object({
      Authorization: AuthorizationParamsSchema,
      'Revolut-Api-Version': RevolutApiVersionOptionalParamsSchema,
    }),
    params: z.object({ order_id: OrderIdParamsSchema }),
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': {
          schema: OrderV4Schema,
          examples: {
            example_order_min: ResOrderCancelMinExample,
            example_order_additional: ResOrderCancelAdditionalV2Example,
            example_order_line_items: ResOrderCancelLineItemsExample,
            example_order_shipping: ResOrderCancelShippingExample,
            example_order_airline: ResOrderCancelAirlineExample,
            example_order_crypto: ResOrderCancelCryptoExample,
            example_order_marketplace: ResOrderCancelMarketplaceExample,
            example_order_event: ResOrderCancelEventExample,
            example_order_lodging: ResOrderCancelLodgingExample,
          },
        },
      },
    },
    400: {
      description: 'Bad Request',
      content: {
        'application/json': {
          schema: ErrorV2Schema,
          example: {
            code: 'bad_request',
            message: 'Could not parse JSON',
            timestamp: 1601296792533,
          },
        },
      },
    },
    401: {
      description: 'Unauthorized',
      content: {
        'application/json': {
          schema: ErrorV2Schema,
          example: {
            code: 'unauthenticated',
            message: 'Authentication failed',
            timestamp: 1721049596461,
          },
        },
      },
    },
    403: {
      description: 'Forbidden',
      content: {
        'application/json': {
          schema: ErrorV2Schema,
          example: {
            code: 'forbidden',
            message: 'The requested operation is forbidden',
            timestamp: 1721050063886,
          },
        },
      },
    },
    404: {
      description: 'Not Found',
      content: {
        'application/json': {
          schema: ErrorV2Schema,
          example: {
            code: 'not_found',
            message: 'Order with id abfa5bbd-a20c-4a0e-be66-30e733454518 was not found',
            timestamp: 1721050063886,
          },
        },
      },
    },
    422: {
      description: 'Unprocessable entity',
      content: { 'application/json': { schema: ErrorV2Schema } },
    },
    500: {
      description: 'Internal Server Error',
      content: { 'application/json': { schema: ErrorV2Schema } },
    },
  },
  security: [{ 'Bearer-Auth': [] }],
})

export const postApiOrdersOrderIdRefundRoute = createRoute({
  method: 'post',
  path: '/api/orders/{order_id}/refund',
  tags: ['Orders'],
  summary: 'Refund an order',
  description:
    "Issue a refund for a completed order. This operation allows for either a full or partial refund, which will be processed back to the customer's original payment method.\n\n- The refund operation generates a new order with `type: refund`. This new order represents a full or partial refund of the original amount paid.\n- Multiple partial refunds can be issued for a single order, given the total refunded amount does not exceed the original order amount.\n- Refund orders will contain `related_order_id` which links to the original order that was refunded.\n- Refunds can only be initiated for orders that are in a `completed` state. Orders in any other state are not eligible for refunds to ensure transaction integrity and to prevent errors.\n- Refunds are processed asynchronously: the refund order can take up to 2 days to reach a final state (`completed`, or declined/failed). Monitor the refund order — via webhooks or [Retrieve an order](https://developer.revolut.com/docs/api/merchant#retrieve-order) — for at least that window before finalising the refund on your side.\n\n:::note\nConsider using the `Idempotency-Key` header to make the refund operation idempotent, preventing duplicate refund processing in cases of multiple submissions.\n:::\n\n:::info\nFor more information see our [Refund payments](https://developer.revolut.com/docs/guides/merchant/operations/refunds) guide.\n:::",
  operationId: 'refundOrder',
  request: {
    headers: z.object({
      Authorization: AuthorizationParamsSchema,
      'Revolut-Api-Version': RevolutApiVersionParamsSchema,
      'Idempotency-Key': IdempotencyKeyParamsSchema,
    }),
    params: z.object({ order_id: OrderIdParamsSchema }),
    body: {
      content: {
        'application/json': {
          schema: OrderRefundV2Schema,
          examples: {
            refund_with_minimal_params: ReqRefundMinExample,
            refund_with_additional_params: ReqRefundAdditionalExample,
          },
        },
      },
    },
  },
  responses: {
    201: {
      description: 'Refund order successfully created',
      content: {
        'application/json': {
          schema: OrderV4Schema,
          examples: {
            refund_with_minimal_params: ResRefundMinExample,
            refund_with_additional_params: ResRefundAdditionalExample,
          },
        },
      },
    },
    400: {
      description: 'Bad Request',
      content: {
        'application/json': {
          schema: ErrorV2Schema,
          example: {
            code: 'bad_request',
            message: 'Could not parse JSON',
            timestamp: 1750265245422,
          },
        },
      },
    },
    401: {
      description: 'Unauthorized',
      content: {
        'application/json': {
          schema: ErrorV2Schema,
          example: {
            code: 'unauthenticated',
            message: 'Authentication failed',
            timestamp: 1750265245422,
          },
        },
      },
    },
    403: {
      description: 'Forbidden',
      content: {
        'application/json': {
          schema: ErrorV2Schema,
          example: {
            code: 'forbidden',
            message: 'The requested operation is forbidden',
            timestamp: 1721050063886,
          },
        },
      },
    },
    404: {
      description: 'Not Found',
      content: {
        'application/json': {
          schema: ErrorV2Schema,
          example: {
            code: 'not_found',
            message: 'Order with id 6852e963-0009-a5a4-9609-50b3addc5425 was not found',
            timestamp: 1750265369820,
          },
        },
      },
    },
    409: {
      description: 'Conflict',
      content: {
        'application/json': {
          schema: ErrorV2Schema,
          example: {
            code: 'conflict',
            message: 'The request conflicts with the current state of the resource',
            timestamp: 1721050000000,
          },
        },
      },
    },
    422: {
      description: 'Unprocessable Entity',
      content: { 'application/json': { schema: ErrorV2Schema } },
    },
    500: {
      description: 'Internal Server Error',
      content: { 'application/json': { schema: ErrorV2Schema } },
    },
  },
  security: [{ 'Bearer-Auth': [] }],
})

export const getApiOrdersOrderIdPaymentsRoute = createRoute({
  method: 'get',
  path: '/api/orders/{order_id}/payments',
  tags: ['Orders', 'Payments'],
  summary: 'Retrieve payment list of an order',
  description:
    "Retrieve a list of payments for a specific order, based on the order's ID.\n\n:::note\nThis endpoint is part of a new API, pay attention to the different endpoint URL.\n:::\n\nUse this endpoint to retrieve payment details for saved payment methods to make merchant and customer initiated transactions. For more information, see: \n  - [Speed up customer checkout by using saved card details](https://developer.revolut.com/docs/guides/merchant/optimise-checkout/save-payment-methods/checkout-with-saved-card)\n  - [Manage subscriptions](https://developer.revolut.com/docs/guides/merchant/optimise-checkout/save-payment-methods/subscription-management)",
  operationId: 'retrievePaymentList',
  request: {
    headers: z.object({ Authorization: AuthorizationParamsSchema }),
    params: z.object({ order_id: OrderIdParamsSchema }),
  },
  responses: {
    200: {
      description: 'List of payments',
      content: {
        'application/json': {
          schema: z.array(PaymentRetrievalSchema),
          examples: {
            payment_list: {
              summary: 'List of payments (failed card attempt, SEPA Direct Debit retry)',
              value: [
                {
                  id: '63dd0e4a-42c4-a1a6-ab2c-6ac9d255ca4b',
                  token: '294358bf-3818-49b2-aacc-7ca971f52695',
                  order_id: '63dd0e3f-7b84-ab5c-927c-1a06f7c9583a',
                  state: 'declined',
                  amount: 100,
                  currency: 'EUR',
                  payment_method: {
                    type: 'card',
                    card_brand: 'visa',
                    funding: 'credit',
                    card_last_four: '1234',
                  },
                },
                {
                  id: '649adc44-3e86-a832-879c-2f6d0255dd4c',
                  token: '8061e645-35e0-42bb-8318-603abaeab7b7',
                  order_id: '63dd0e3f-7b84-ab5c-927c-1a06f7c9583a',
                  state: 'declined',
                  amount: 100,
                  currency: 'EUR',
                  decline_reason: 'insufficient_funds',
                  payment_method: { type: 'revolut_pay', subtype: 'revolut_account' },
                },
                {
                  id: '663387f1-1c2e-a295-b143-9f1fb1eec175',
                  token: '663387f1-c91e-a464-908a-1cc4548ebc6a',
                  order_id: '63dd0e3f-7b84-ab5c-927c-1a06f7c9583a',
                  state: 'pending',
                  amount: 100,
                  currency: 'EUR',
                  payment_method: {
                    type: 'sepa_direct_debit',
                    debtor_iban_last_four: '1234',
                    debtor_name: 'John Doe',
                    mandate_reference: 'A1B2C3D4E5F6A1B2C3D4E5F6A1B2C3D4',
                  },
                },
              ],
            },
          },
        },
      },
    },
    400: {
      description: 'Bad Request',
      content: {
        'application/json': {
          schema: ErrorV2Schema,
          example: {
            code: 'bad_request',
            message: 'Could not parse JSON',
            timestamp: 1720528890647,
          },
        },
      },
    },
    401: {
      description: 'Unauthenticated',
      content: {
        'application/json': {
          schema: ErrorV2Schema,
          example: {
            code: 'unauthenticated',
            message: 'Authentication failed',
            timestamp: 1720528890647,
          },
        },
      },
    },
    403: {
      description: 'Forbidden',
      content: {
        'application/json': {
          schema: ErrorV2Schema,
          example: {
            code: 'forbidden',
            message: 'The requested operation is forbidden',
            timestamp: 1721050063886,
          },
        },
      },
    },
    404: {
      description: 'Not Found',
      content: {
        'application/json': {
          schema: ErrorV2Schema,
          example: {
            code: 'not_found',
            message: 'Order with id b8883ab5-964a-4329-aa44-4d3c76cf3f54 was not found',
            timestamp: 1720528890647,
          },
        },
      },
    },
    422: {
      description: 'Unprocessable entity',
      content: { 'application/json': { schema: ErrorV2Schema } },
    },
    500: {
      description: 'Internal Server Error',
      content: { 'application/json': { schema: ErrorV2Schema } },
    },
  },
  security: [{ 'Bearer-Auth': [] }],
})

export const postApiOrdersOrderIdPaymentsRoute = createRoute({
  method: 'post',
  path: '/api/orders/{order_id}/payments',
  tags: ['Orders', 'Payments'],
  summary: 'Pay for an order',
  description:
    "Initiate a payment to pay full amount for an order using a customer's saved payment method.\n\n:::note\nThe `/orders/{order_id}/confirm` endpoint has been deprecated. It will be only supported for already existing implementations.\n:::\n\n:::warning\nThis endpoint is part of a new API, pay attention to the different endpoint URL. \n:::\n\nFor more information about how to save and charge payment methods, see: [Charge a customer's saved payment method](https://developer.revolut.com/docs/guides/merchant/optimise-checkout/save-payment-methods/charge-saved-payment-method).\n\nThe following table shows who can initiate payments on saved payment methods (`initiator` parameter), depending on if the payment method was saved for the customer or the merchant (`savedPaymentMethodFor` parameter):\n\n  |                           | `savePaymentMethodFor: customer` | `savePaymentMethodFor: merchant` |\n  | ------------------------- | -------------------------------- | -------------------------------- |\n  | **`initiator: customer`** | Allowed                          | Allowed                          |\n  | **`initiator: merchant`** | Not allowed                      | Allowed                          |\n\n\n:::note\nUsing this endpoint, only merchant initiated payments are supported with Revolut Pay.\n:::\n          \nFor more information about customers' payment methods, see the [Retrieve payment method list of a customer](https://developer.revolut.com/docs/api/merchant#retrieve-payment-method-list) operation.",
  operationId: 'payOrder',
  request: {
    headers: z.object({ Authorization: AuthorizationParamsSchema }),
    params: z.object({ order_id: OrderIdParamsSchema }),
    body: {
      content: {
        'application/json': {
          schema: SavedPaymentMethodSchema,
          examples: {
            saved_card_customer: {
              summary: 'Saved card (customer initiator)',
              value: {
                saved_payment_method: {
                  type: 'card',
                  id: '2b83c23a-650e-40c3-8989-00ee24478738',
                  initiator: 'customer',
                  environment: {
                    type: 'browser',
                    time_zone_utc_offset: 180,
                    color_depth: 48,
                    screen_width: 1920,
                    screen_height: 1080,
                    java_enabled: true,
                    challenge_window_width: 640,
                    browser_url: 'https://business.revolut.com',
                  },
                },
              },
            },
            saved_card_merchant: {
              summary: 'Saved card (merchant initiator)',
              value: {
                saved_payment_method: {
                  type: 'card',
                  id: '2b83c23a-650e-40c3-8989-00ee24478738',
                  initiator: 'merchant',
                },
              },
            },
            revolut_pay: {
              summary: 'Saved Revolut Pay (merchant initiator)',
              value: {
                saved_payment_method: {
                  type: 'revolut_pay',
                  id: '2b83c23a-650e-40c3-8989-00ee24478738',
                  initiator: 'merchant',
                },
              },
            },
          },
        },
      },
    },
  },
  responses: {
    200: {
      description: 'Payment initiated',
      content: {
        'application/json': {
          schema: PaymentRetrievalSchema,
          examples: {
            successful_payment_card: {
              summary: 'Payment authorised (card)',
              value: {
                id: '63c55e04-4208-a43d-9c96-eaee848ffbaf',
                order_id: '63c55df6-1461-a886-b90f-f49d3c370253',
                payment_method: {
                  type: 'card',
                  id: '2b83c23a-650e-40c3-8989-00ee24478738',
                  brand: 'mastercard_credit',
                  last_four: '1234',
                },
                state: 'authorisation_passed',
              },
            },
            successful_payment_revolut_pay_account: {
              summary: 'Payment authorised (Revolut Pay - Revolut account)',
              value: {
                id: '63c55e04-4208-a43d-9c96-eaee848ffbaf',
                order_id: '63c55df6-1461-a886-b90f-f49d3c370253',
                payment_method: {
                  type: 'revolut_pay',
                  subtype: 'revolut_account',
                  id: '2b83c23a-650e-40c3-8989-00ee24478738',
                },
                state: 'authorisation_passed',
              },
            },
            successful_payment_revolut_pay_card: {
              summary: 'Payment authorised (Revolut Pay - card)',
              value: {
                id: '63c55e04-4208-a43d-9c96-eaee848ffbaf',
                order_id: '63c55df6-1461-a886-b90f-f49d3c370253',
                payment_method: {
                  type: 'revolut_pay',
                  subtype: 'card',
                  id: '2b83c23a-650e-40c3-8989-00ee24478738',
                  brand: 'visa',
                  last_four: '1234',
                },
                state: 'authorisation_passed',
              },
            },
            three_ds: {
              summary: 'Saved card payment (3DS challenge)',
              value: {
                id: '5e96b328-4054-41ed-b089-595ccc4d0870',
                order_id: 'a16718e0-077a-4942-89bc-23ac17a2e14c',
                payment_method: {
                  type: 'card',
                  id: '2b83c23a-650e-40c3-8989-00ee24478738',
                  brand: 'mastercard_credit',
                  last_four: '1234',
                },
                state: 'authentication_challenge',
                authentication_challenge: { type: 'three_ds', acs_url: 'https://example.com' },
              },
            },
            three_ds_fingerprint: {
              summary: 'Saved card payment (3DS fingerprint challenge)',
              value: {
                id: '5e96b328-4054-41ed-b089-595ccc4d0870',
                order_id: 'a16718e0-077a-4942-89bc-23ac17a2e14c',
                payment_method: {
                  type: 'card',
                  id: '2b83c23a-650e-40c3-8989-00ee24478738',
                  brand: 'mastercard_credit',
                  last_four: '1234',
                },
                state: 'authentication_challenge',
                authentication_challenge: {
                  type: 'three_ds_fingerprint',
                  fingerprint_url: 'https://example.com',
                  fingerprint_data: 'string',
                },
              },
            },
          },
        },
      },
    },
    400: {
      description: 'Bad Request',
      content: {
        'application/json': {
          schema: z
            .object({
              errorId: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    'The ID of the error. You can share this ID with Revolut\nsupport for troubleshooting.',
                }),
              timestamp: z
                .int()
                .exactOptional()
                .openapi({ description: 'The date and time the error happened.' }),
            })
            .openapi({ required: [] }),
          examples: {
            'example-1': {
              value: { errorId: '94b27660-fdda-49ec-8b85-cd46a068ade0', timestamp: 1601296792533 },
            },
          },
        },
      },
    },
    401: { description: 'Unauthorized' },
    403: {
      description: 'Forbidden',
      content: {
        'application/json': {
          schema: ErrorV2Schema,
          example: {
            code: 'forbidden',
            message: 'The requested operation is forbidden',
            timestamp: 1721050063886,
          },
        },
      },
    },
    404: {
      description: 'Not Found',
      content: {
        'application/json': {
          schema: z
            .object({
              errorId: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    'The ID of the error. You can share this ID with Revolut\nsupport for troubleshooting.',
                }),
              timestamp: z
                .int()
                .exactOptional()
                .openapi({ description: 'The date and time the error happened.' }),
              code: z.int().exactOptional(),
            })
            .openapi({ required: [] }),
          examples: {
            'example-1': {
              value: {
                errorId: '94b27660-fdda-49ec-8b85-cd46a068ade0',
                timestamp: 1601296792533,
                code: 1024,
              },
            },
          },
        },
      },
    },
    422: {
      description: 'Unprocessable entity',
      content: { 'application/json': { schema: ErrorV2Schema } },
    },
    500: {
      description: 'Internal Server Error',
      content: { 'application/json': { schema: ErrorV2Schema } },
    },
  },
  security: [{ 'Bearer-Auth': [] }],
})

export const getApiCustomersRoute = createRoute({
  method: 'get',
  path: '/api/customers',
  tags: ['Customers'],
  summary: 'Retrieve a customer list',
  description:
    'Get a paginated list of your customer profiles.\n\n| Filtering | Pagination |\n| --------- | ---------- |\n| Filter the customers that you want to retrieve, for example, only retrieve customers created within a specific date range. <br/><br/>Parameters used for filtering:<br/><ul><li>`from`</li><li>`to`</li></ul> | View customers without loading all of them at once, for example, return a specified number of customers per page. <br/><br/>Parameters used for pagination:<br/><ul><li>`limit`</li><li>`page_token`</li></ul> |\n\nTo paginate through all results:\n\n1. Make an initial request with the desired `limit` and any filter parameters.\n1. If more results are available, the response includes a `next_page_token`.\n1. Pass `next_page_token` as `page_token` in your next request, keeping all other parameters unchanged.\n1. Repeat until `next_page_token` is no longer present in the response.',
  operationId: 'retrieveCustomerList',
  request: {
    headers: z.object({
      Authorization: AuthorizationParamsSchema,
      'Revolut-Api-Version': RevolutApiVersion_2024_09_01MinParamsSchema,
    }),
    query: z.object({
      limit: LimitParamsSchema,
      page_token: PageTokenParamsSchema,
      from: FromParamsSchema,
      to: ToParamsSchema,
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': {
          schema: CustomersSchema,
          examples: { list_of_customers: ResCustomersListExample },
        },
      },
    },
    401: {
      description: 'Unauthorized',
      content: { 'application/json': { schema: ErrorV2Schema } },
    },
    403: {
      description: 'Forbidden',
      content: {
        'application/json': {
          schema: ErrorV2Schema,
          example: {
            code: 'forbidden',
            message: 'The requested operation is forbidden',
            timestamp: 1721050063886,
          },
        },
      },
    },
    422: {
      description: 'Unprocessable entity',
      content: { 'application/json': { schema: ErrorV2Schema } },
    },
    500: {
      description: 'Internal Server Error',
      content: { 'application/json': { schema: ErrorV2Schema } },
    },
  },
  security: [{ 'Bearer-Auth': [] }],
})

export const postApiCustomersRoute = createRoute({
  method: 'post',
  path: '/api/customers',
  tags: ['Customers'],
  summary: 'Create a customer',
  description:
    "Create a `customer` object.\n\n:::note [No automatic deduplication]\nThe API does not prevent creating multiple customers with the same email address or phone number.\n\nThis can be intentional, for example, to maintain separate customer records per storefront or brand under the same account.\n\nTo avoid unintentional duplicates, search for existing customers by email or phone using the [List customers](https://developer.revolut.com/docs/api/merchant/2024-09-01#retrieve-customer-list) endpoint before creating a new one.\n:::\n\n### Save payment methods\n\nIf you wish to save a customer's payment details using any of the available payment methods on the Revolut Checkout Widget ([Revolut Pay](https://developer.revolut.com/docs/guides/merchant/accept-payments/online-payments/revolut-pay/introduction), [Card payments](https://developer.revolut.com/docs/guides/merchant/accept-payments/online-payments/card-payments/introduction)), you need to meet one of the following requirements:\n\n  - [ ] Have a customer object with `email` and assign it to the order by providing `customer.id`\n  - [ ] Create a new customer with, at least, `customer.email` during [order creation](https://developer.revolut.com/docs/api/merchant/2024-09-01#create-order)\n\nFor more information, see: [Charge a customer's saved payment method](https://developer.revolut.com/docs/guides/merchant/optimise-checkout/save-payment-methods/charge-saved-payment-method).\n\n<details>\n<summary>AFT processing requirements</summary>\n\nFor merchants in the following industries, `full_name` and `date_of_birth` are required for Account Funding Transaction (AFT) processing:\n\n| Industry | Required fields |\n| -------- | --------------- |\n| Crypto | `full_name`, `date_of_birth` |\n| Financial Institutions | `full_name`, `date_of_birth` |\n| Stored Value / Wallets | `full_name`, `date_of_birth` |\n\n</details>",
  operationId: 'createCustomer',
  request: {
    headers: z.object({
      Authorization: AuthorizationParamsSchema,
      'Revolut-Api-Version': RevolutApiVersion_2024_09_01MinParamsSchema,
    }),
    body: {
      content: {
        'application/json': {
          schema: CustomerCreationV2Schema,
          examples: { example_customer_creation: ReqCustomerCreationV2Example },
        },
      },
    },
  },
  responses: {
    201: {
      description: 'Created',
      content: {
        'application/json': {
          schema: CustomerCreatedSchema,
          examples: { created_customer: ResCustomerCreatedExample },
        },
      },
    },
    400: { description: 'Bad Request', content: { 'application/json': { schema: ErrorV2Schema } } },
    401: {
      description: 'Unauthorized',
      content: { 'application/json': { schema: ErrorV2Schema } },
    },
    403: {
      description: 'Forbidden',
      content: {
        'application/json': {
          schema: ErrorV2Schema,
          example: {
            code: 'forbidden',
            message: 'The requested operation is forbidden',
            timestamp: 1721050063886,
          },
        },
      },
    },
    422: {
      description: 'Unprocessable entity',
      content: { 'application/json': { schema: ErrorV2Schema } },
    },
    500: {
      description: 'Internal Server Error',
      content: { 'application/json': { schema: ErrorV2Schema } },
    },
  },
  security: [{ 'Bearer-Auth': [] }],
})

export const getApiCustomersCustomerIdRoute = createRoute({
  method: 'get',
  path: '/api/customers/{customer_id}',
  tags: ['Customers'],
  summary: 'Retrieve a customer',
  description:
    'Get the information about a specific customer, including their saved payment methods.',
  operationId: 'retrieveCustomer',
  request: {
    headers: z.object({
      Authorization: AuthorizationParamsSchema,
      'Revolut-Api-Version': RevolutApiVersion_2024_09_01MinParamsSchema,
    }),
    params: z.object({ customer_id: CustomerIdParamsSchema }),
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': {
          schema: CustomerV3Schema,
          examples: { retrieved_customer: ResCustomerV3Example },
        },
      },
    },
    401: {
      description: 'Unauthorized',
      content: { 'application/json': { schema: ErrorV2Schema } },
    },
    404: { description: 'Not Found', content: { 'application/json': { schema: ErrorV2Schema } } },
    500: {
      description: 'Internal Server Error',
      content: { 'application/json': { schema: ErrorV2Schema } },
    },
  },
  security: [{ 'Bearer-Auth': [] }],
})

export const deleteApiCustomersCustomerIdRoute = createRoute({
  method: 'delete',
  path: '/api/customers/{customer_id}',
  tags: ['Customers'],
  summary: 'Delete a customer',
  description: 'Delete the profile of a specific customer.',
  operationId: 'deleteCustomer',
  request: {
    headers: z.object({
      Authorization: AuthorizationParamsSchema,
      'Revolut-Api-Version': RevolutApiVersion_2024_09_01MinParamsSchema,
    }),
    params: z.object({ customer_id: CustomerIdParamsSchema }),
  },
  responses: {
    204: { description: 'No Content' },
    400: {
      description: 'Bad Request',
      content: {
        'application/json': {
          schema: ErrorV2Schema,
          example: { code: 'bad_request', message: 'Invalid request', timestamp: 1721050000000 },
        },
      },
    },
    401: {
      description: 'Unauthorized',
      content: { 'application/json': { schema: ErrorV2Schema } },
    },
    403: {
      description: 'Forbidden',
      content: {
        'application/json': {
          schema: ErrorV2Schema,
          example: {
            code: 'forbidden',
            message: 'The requested operation is forbidden',
            timestamp: 1721050063886,
          },
        },
      },
    },
    404: { description: 'Not Found', content: { 'application/json': { schema: ErrorV2Schema } } },
    422: {
      description: 'Unprocessable entity',
      content: { 'application/json': { schema: ErrorV2Schema } },
    },
    500: {
      description: 'Internal Server Error',
      content: { 'application/json': { schema: ErrorV2Schema } },
    },
  },
  security: [{ 'Bearer-Auth': [] }],
})

export const patchApiCustomersCustomerIdRoute = createRoute({
  method: 'patch',
  path: '/api/customers/{customer_id}',
  tags: ['Customers'],
  summary: 'Update a customer',
  description:
    'Update the attributes of a specific customer.\n\nAll request body fields are optional. Only the fields provided will be updated.\n\n<details>\n<summary>AFT processing requirements</summary>\n\nFor merchants in the following industries, `full_name` and `date_of_birth` are required for Account Funding Transaction (AFT) processing:\n\n| Industry | Required fields |\n| -------- | --------------- |\n| Crypto | `full_name`, `date_of_birth` |\n| Financial Institutions | `full_name`, `date_of_birth` |\n| Stored Value / Wallets | `full_name`, `date_of_birth` |\n\n</details>',
  operationId: 'updateCustomer',
  request: {
    headers: z.object({
      Authorization: AuthorizationParamsSchema,
      'Revolut-Api-Version': RevolutApiVersion_2024_09_01MinParamsSchema,
    }),
    params: z.object({ customer_id: CustomerIdParamsSchema }),
    body: {
      content: {
        'application/json': {
          schema: CustomerUpdateV2Schema,
          examples: { example_customer_update: ReqCustomerUpdateV2Example },
        },
      },
    },
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': {
          schema: CustomerV3Schema,
          examples: { updated_customer: ResCustomerV3Example },
        },
      },
    },
    400: { description: 'Bad Request', content: { 'application/json': { schema: ErrorV2Schema } } },
    401: {
      description: 'Unauthorized',
      content: { 'application/json': { schema: ErrorV2Schema } },
    },
    403: {
      description: 'Forbidden',
      content: {
        'application/json': {
          schema: ErrorV2Schema,
          example: {
            code: 'forbidden',
            message: 'The requested operation is forbidden',
            timestamp: 1721050063886,
          },
        },
      },
    },
    404: { description: 'Not Found', content: { 'application/json': { schema: ErrorV2Schema } } },
    422: {
      description: 'Unprocessable entity',
      content: { 'application/json': { schema: ErrorV2Schema } },
    },
    500: {
      description: 'Internal Server Error',
      content: { 'application/json': { schema: ErrorV2Schema } },
    },
  },
  security: [{ 'Bearer-Auth': [] }],
})

export const getApiCustomersCustomerIdPaymentMethodsRoute = createRoute({
  method: 'get',
  path: '/api/customers/{customer_id}/payment-methods',
  tags: ['Customers'],
  summary: 'Retrieve payment method list of a customer',
  description:
    'Retrieve all the saved payment methods for a specific customer.\nThis can be useful in the following example cases:\n\n- To show what payment information is stored for the customer.\n- To try a different payment method if the first payment method fails when a recurring transaction occurs.',
  operationId: 'retrievePaymentMethodList',
  request: {
    headers: z.object({
      Authorization: AuthorizationParamsSchema,
      'Revolut-Api-Version': RevolutApiVersion_2024_09_01MinParamsSchema,
    }),
    params: z.object({ customer_id: CustomerIdParamsSchema }),
    query: z.object({ only_merchant: OnlyMerchantParamsSchema }),
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': {
          schema: CustomerPaymentMethodsV2Schema,
          examples: { list_of_payment_methods: ResCustomerPaymentMethodsListExample },
        },
      },
    },
    401: {
      description: 'Unauthorized',
      content: { 'application/json': { schema: ErrorV2Schema } },
    },
    404: { description: 'Not Found', content: { 'application/json': { schema: ErrorV2Schema } } },
    500: {
      description: 'Internal Server Error',
      content: { 'application/json': { schema: ErrorV2Schema } },
    },
  },
  security: [{ 'Bearer-Auth': [] }],
})

export const getApiCustomersCustomerIdPaymentMethodsPaymentMethodIdRoute = createRoute({
  method: 'get',
  path: '/api/customers/{customer_id}/payment-methods/{payment_method_id}',
  tags: ['Customers'],
  summary: "Retrieve a customer's payment method",
  description: 'Retrieve the information of a specific saved payment method for a customer.  ',
  operationId: 'retrievePaymentMethod',
  request: {
    headers: z.object({
      Authorization: AuthorizationParamsSchema,
      'Revolut-Api-Version': RevolutApiVersion_2024_09_01MinParamsSchema,
    }),
    params: z.object({
      customer_id: CustomerIdParamsSchema,
      payment_method_id: PaymentMethodIdParamsSchema,
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': {
          schema: PaymentMethodV4Schema,
          examples: {
            retrieved_card: ResCustomerPaymentMethodCardExample,
            retrieved_revolut_pay: ResCustomerPaymentMethodRevolutPayExample,
            retrieved_sepa_direct_debit: ResCustomerPaymentMethodSepaDirectDebitExample,
          },
        },
      },
    },
    401: {
      description: 'Unauthorized',
      content: { 'application/json': { schema: ErrorV2Schema } },
    },
    404: { description: 'Not Found', content: { 'application/json': { schema: ErrorV2Schema } } },
    500: {
      description: 'Internal Server Error',
      content: { 'application/json': { schema: ErrorV2Schema } },
    },
  },
  security: [{ 'Bearer-Auth': [] }],
})

export const deleteApiCustomersCustomerIdPaymentMethodsPaymentMethodIdRoute = createRoute({
  method: 'delete',
  path: '/api/customers/{customer_id}/payment-methods/{payment_method_id}',
  tags: ['Customers'],
  summary: "Delete a customer's payment method",
  description:
    "Delete a specific saved payment method. The payment method is completely removed from the customer's saved payment methods.\n\nTo reuse a deleted payment method, direct your customer to the checkout page to save their card details again.",
  operationId: 'deletePaymentMethod',
  request: {
    headers: z.object({
      Authorization: AuthorizationParamsSchema,
      'Revolut-Api-Version': RevolutApiVersion_2024_09_01MinParamsSchema,
    }),
    params: z.object({
      customer_id: CustomerIdParamsSchema,
      payment_method_id: PaymentMethodIdParamsSchema,
    }),
  },
  responses: {
    204: { description: 'No Content' },
    400: {
      description: 'Bad Request',
      content: {
        'application/json': {
          schema: ErrorV2Schema,
          example: { code: 'bad_request', message: 'Invalid request', timestamp: 1721050000000 },
        },
      },
    },
    401: {
      description: 'Unauthorized',
      content: { 'application/json': { schema: ErrorV2Schema } },
    },
    403: {
      description: 'Forbidden',
      content: {
        'application/json': {
          schema: ErrorV2Schema,
          example: {
            code: 'forbidden',
            message: 'The requested operation is forbidden',
            timestamp: 1721050063886,
          },
        },
      },
    },
    404: { description: 'Not Found', content: { 'application/json': { schema: ErrorV2Schema } } },
    422: {
      description: 'Unprocessable entity',
      content: { 'application/json': { schema: ErrorV2Schema } },
    },
    500: {
      description: 'Internal Server Error',
      content: { 'application/json': { schema: ErrorV2Schema } },
    },
  },
  security: [{ 'Bearer-Auth': [] }],
})

export const patchApiCustomersCustomerIdPaymentMethodsPaymentMethodIdRoute = createRoute({
  method: 'patch',
  path: '/api/customers/{customer_id}/payment-methods/{payment_method_id}',
  tags: ['Customers'],
  summary: "Update a customer's payment method",
  description:
    "Update the attributes of a specific saved payment method for a customer.\n\n:::note\nUpdating `saved_for` to `customer` is a one-way operation — you can't change it back to `merchant`.\n\nOnce updated, this payment method can no longer be used for merchant-initiated transactions (MIT), for example, to charge recurring payments. It can only be used when the customer is on the checkout page.\n\nFor more information, see:\n- [Pay for an order](https://developer.revolut.com/docs/api/merchant/2024-09-01#pay-order)\n- [Charge a customer's saved payment method](https://developer.revolut.com/docs/guides/merchant/optimise-checkout/save-payment-methods/charge-saved-payment-method)\n:::",
  operationId: 'updatePaymentMethod',
  request: {
    headers: z.object({
      Authorization: AuthorizationParamsSchema,
      'Revolut-Api-Version': RevolutApiVersion_2024_09_01MinParamsSchema,
    }),
    params: z.object({
      customer_id: CustomerIdParamsSchema,
      payment_method_id: PaymentMethodIdParamsSchema,
    }),
    body: {
      content: {
        'application/json': {
          schema: PaymentMethodUpdateSchema,
          examples: { example_payment_method_update: ReqPaymentMethodUpdateExample },
        },
      },
    },
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': {
          schema: PaymentMethodV4Schema,
          examples: {
            updated_card: ResCustomerPaymentMethodCardExample,
            updated_revolut_pay: ResCustomerPaymentMethodRevolutPayExample,
            updated_sepa_direct_debit: ResCustomerPaymentMethodSepaDirectDebitExample,
          },
        },
      },
    },
    401: {
      description: 'Unauthorized',
      content: { 'application/json': { schema: ErrorV2Schema } },
    },
    403: {
      description: 'Forbidden',
      content: {
        'application/json': {
          schema: ErrorV2Schema,
          example: {
            code: 'forbidden',
            message: 'The requested operation is forbidden',
            timestamp: 1721050063886,
          },
        },
      },
    },
    404: { description: 'Not Found', content: { 'application/json': { schema: ErrorV2Schema } } },
    422: {
      description: 'Unprocessable entity',
      content: { 'application/json': { schema: ErrorV2Schema } },
    },
    500: {
      description: 'Internal Server Error',
      content: { 'application/json': { schema: ErrorV2Schema } },
    },
  },
  security: [{ 'Bearer-Auth': [] }],
})

export const getApiDisputesRoute = createRoute({
  method: 'get',
  path: '/api/disputes',
  tags: ['Disputes'],
  summary: 'Retrieve a dispute list',
  description:
    'Retrieve a list of disputes associated with your merchant account. \n\n:::note\nThis endpoint is only available in **Production** environment.\n:::\n\nYou can also use the query parameters for:\n  \n  | Filtering | Pagination |\n  | --------- | ---------- |\n  | Filter the diputes that you want to retrieve, for example, only retrieve the disputes that have a specific state. <br/><br/>Parameters used for filtering:<br/><ul><li>`from_created_date`</li><li>`to_created_date`</li><li>`payment_id`</li><li>`state`</li></ul> | View the disputes without loading all of them at once, for example, return a specified number of disputes per page. <br/><br/>Parameters used for pagination: <br/><ul><li>`limit`</li><li>`from_created_date` or `to_created_date`</li></ul> |',
  operationId: 'retrieveDisputeList',
  request: {
    headers: z.object({
      Authorization: AuthorizationParamsSchema,
      'Revolut-Api-Version': RevolutApiVersionParamsSchema,
    }),
    query: z.object({
      limit: LimitParamsSchema,
      from_created_date: FromCreatedDateParamsSchema,
      to_created_date: ToCreatedDateParamsSchema,
      state: DisputeStateQueryParamsSchema,
      payment_id: PaymentIdQueryParamsSchema,
    }),
  },
  responses: {
    200: {
      description: 'List of disputes retrieved',
      content: {
        'application/json': {
          schema: DisputesSchema,
          examples: { dispute_list: ResDisputeListExample },
        },
      },
    },
    400: {
      description: 'Bad Request',
      content: {
        'application/json': {
          schema: ErrorV2Schema,
          example: {
            code: 'validation',
            message: 'limit must be between 1 and 500',
            timestamp: 1601296792533,
          },
        },
      },
    },
    401: {
      description: 'Unauthorized',
      content: {
        'application/json': {
          schema: ErrorV2Schema,
          example: {
            code: 'unauthenticated',
            message: 'Authentication failed',
            timestamp: 1721049596461,
          },
        },
      },
    },
    500: {
      description: 'Internal Server Error',
      content: { 'application/json': { schema: ErrorV2Schema } },
    },
  },
  security: [{ 'Bearer-Auth': [] }],
  servers: [
    { description: 'Production server (uses live data)', url: 'https://merchant.revolut.com' },
  ],
})

export const getApiDisputesDisputeIdRoute = createRoute({
  method: 'get',
  path: '/api/disputes/{dispute_id}',
  tags: ['Disputes'],
  summary: 'Retrieve a dispute',
  description:
    'Retrieve the details of a specific dispute by its ID.\n\n:::note\nThis endpoint is only available in **Production** environment.\n:::',
  operationId: 'retrieveDispute',
  request: {
    headers: z.object({
      Authorization: AuthorizationParamsSchema,
      'Revolut-Api-Version': RevolutApiVersionParamsSchema,
    }),
    params: z.object({ dispute_id: DisputeIdParamsSchema }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: {
        'application/json': {
          schema: DisputeSchema,
          examples: {
            card_dispute: ResDisputeCardExample,
            sepa_direct_debit_dispute: ResDisputeSepaDirectDebitExample,
          },
        },
      },
    },
    400: {
      description: 'Bad Request',
      content: {
        'application/json': {
          schema: ErrorV2Schema,
          example: {
            code: 'bad_request',
            message: 'Missing Revolut-Api-Version header',
            timestamp: 1601296792533,
          },
        },
      },
    },
    401: {
      description: 'Unauthorized',
      content: {
        'application/json': {
          schema: ErrorV2Schema,
          example: {
            code: 'unauthenticated',
            message: 'Authentication failed',
            timestamp: 1721049596461,
          },
        },
      },
    },
    404: {
      description: 'Not Found',
      content: {
        'application/json': {
          schema: ErrorV2Schema,
          example: {
            code: 'not_found',
            message: 'The requested resource is not found',
            timestamp: 1721050063886,
          },
        },
      },
    },
    500: {
      description: 'Internal Server Error',
      content: { 'application/json': { schema: ErrorV2Schema } },
    },
  },
  security: [{ 'Bearer-Auth': [] }],
  servers: [
    { description: 'Production server (uses live data)', url: 'https://merchant.revolut.com' },
  ],
})

export const postApiDisputesDisputeIdAcceptRoute = createRoute({
  method: 'post',
  path: '/api/disputes/{dispute_id}/accept',
  tags: ['Disputes'],
  summary: 'Accept a dispute',
  description:
    'Marks a specific dispute as accepted.\n\nAfter accepting a dispute, you cannot challenge it.\n\n:::note\nThis endpoint is only available in **Production** environment.\n:::',
  operationId: 'acceptDispute',
  request: {
    headers: z.object({
      Authorization: AuthorizationParamsSchema,
      'Revolut-Api-Version': RevolutApiVersionParamsSchema,
    }),
    params: z.object({ dispute_id: DisputeIdParamsSchema }),
  },
  responses: {
    204: { description: 'Dispute accepted successfully' },
    400: {
      description: 'Bad Request',
      content: {
        'application/json': {
          schema: ErrorV2Schema,
          example: {
            code: 'bad_request',
            message: 'Missing Revolut-Api-Version header',
            timestamp: 1601296792533,
          },
        },
      },
    },
    401: {
      description: 'Unauthorized',
      content: {
        'application/json': {
          schema: ErrorV2Schema,
          example: {
            code: 'unauthenticated',
            message: 'Authentication failed',
            timestamp: 1721049596461,
          },
        },
      },
    },
    403: {
      description: 'Forbidden',
      content: {
        'application/json': {
          schema: ErrorV2Schema,
          example: {
            code: 'not_found',
            message: 'The requested operation is forbidden',
            timestamp: 1721050063886,
          },
        },
      },
    },
    404: {
      description: 'Not Found',
      content: {
        'application/json': {
          schema: ErrorV2Schema,
          example: {
            code: 'not_found',
            message: 'The requested resource is not found',
            timestamp: 1721050063886,
          },
        },
      },
    },
    422: {
      description: 'Unprocessable entity',
      content: { 'application/json': { schema: ErrorV2Schema } },
    },
    500: {
      description: 'Internal Server Error',
      content: { 'application/json': { schema: ErrorV2Schema } },
    },
  },
  security: [{ 'Bearer-Auth': [] }],
  servers: [
    { description: 'Production server (uses live data)', url: 'https://merchant.revolut.com' },
  ],
})

export const postApiDisputesDisputeIdEvidencesRoute = createRoute({
  method: 'post',
  path: '/api/disputes/{dispute_id}/evidences',
  tags: ['Disputes'],
  summary: 'Upload evidence for a dispute',
  description:
    'Allows uploading a single evidence file for a specific dispute.\n\nUse these evidences to provide proof for claims when challenging a dispute.\n\n:::warning\n**Limitations:**\n  - Maximum `100` uploaded files are allowed per dispute.\n  - Maximum file size: `10MB`.\n  - Allowed file types: `PDF`, `PNG`, `JPEG`.\n:::\n\n:::note\nThis endpoint is only available in **Production** environment.\n:::',
  operationId: 'uploadDisputeEvidence',
  request: {
    headers: z.object({
      Authorization: AuthorizationParamsSchema,
      'Revolut-Api-Version': RevolutApiVersionParamsSchema,
      'Content-Type': ContentTypeParamsSchema,
    }),
    params: z.object({ dispute_id: DisputeIdParamsSchema }),
    body: {
      content: {
        'multipart/form-data': {
          schema: DisputeEvidenceCreationSchema,
          examples: {
            upload_pdf_evidence: {
              summary: 'Upload a PDF file as dispute evidence',
              value: { file: '<binary file content>' },
            },
          },
          encoding: { file: { contentType: 'application/pdf, image/png, image/jpeg' } },
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Evidence uploaded successfully',
      content: {
        'application/json': {
          schema: DisputeEvidenceSchema,
          examples: { evidence_uploaded: ResDisputeEvidenceExample },
        },
      },
    },
    400: {
      description: 'Bad Request',
      content: {
        'application/json': {
          schema: ErrorV2Schema,
          example: {
            code: 'bad_request',
            message: 'Missing Revolut-Api-Version header',
            timestamp: 1601296792533,
          },
        },
      },
    },
    401: {
      description: 'Unauthorized',
      content: {
        'application/json': {
          schema: ErrorV2Schema,
          example: {
            code: 'unauthenticated',
            message: 'Authentication failed',
            timestamp: 1721049596461,
          },
        },
      },
    },
    403: {
      description: 'Forbidden',
      content: {
        'application/json': {
          schema: ErrorV2Schema,
          example: {
            code: 'forbidden',
            message: 'The requested operation is forbidden',
            timestamp: 1721050063886,
          },
        },
      },
    },
    404: {
      description: 'Not Found',
      content: {
        'application/json': {
          schema: ErrorV2Schema,
          example: {
            code: 'not_found',
            message: 'The requested resource is not found',
            timestamp: 1721050063886,
          },
        },
      },
    },
    413: {
      description: 'Request Entity Too Large',
      content: {
        'application/json': {
          schema: ErrorV2Schema,
          example: {
            code: 'max_uploaded_file_size_limit_exceeded',
            message: 'The uploaded file exceeds the maximum allowed size of 10MB',
            timestamp: 1721050000000,
          },
        },
      },
    },
    415: {
      description: 'Unsupported Media Type',
      content: {
        'application/json': {
          schema: ErrorV2Schema,
          example: {
            code: 'unsupported_media_type',
            message: 'The uploaded file type is not supported. Allowed types: PDF, PNG, JPEG',
            timestamp: 1721050000000,
          },
        },
      },
    },
    422: {
      description: 'Unprocessable entity',
      content: { 'application/json': { schema: ErrorV2Schema } },
    },
    500: {
      description: 'Internal Server Error',
      content: { 'application/json': { schema: ErrorV2Schema } },
    },
  },
  security: [{ 'Bearer-Auth': [] }],
  servers: [
    { description: 'Production server (uses live data)', url: 'https://merchant.revolut.com' },
  ],
})

export const postApiDisputesDisputeIdChallengeRoute = createRoute({
  method: 'post',
  path: '/api/disputes/{dispute_id}/challenge',
  tags: ['Disputes'],
  summary: 'Challenge a dispute',
  description:
    'Allows challenging a dispute with a reason, comment and associated evidences.\n\nUse the uploaded evidences to provide proof for the challenge.\n\nA dispute previously accepted, cannot be challenged.\n\n:::note\nThis endpoint is only available in **Production** environment.\n:::',
  operationId: 'challengeDispute',
  request: {
    headers: z.object({
      Authorization: AuthorizationParamsSchema,
      'Revolut-Api-Version': RevolutApiVersionParamsSchema,
    }),
    params: z.object({ dispute_id: DisputeIdParamsSchema }),
    body: {
      content: {
        'application/json': {
          schema: DisputeChallengeSchema,
          examples: {
            challenge_min: ReqDisputeChallengeMinExample,
            challenge_with_evidence: ReqDisputeChallengeWithEvidenceExample,
          },
        },
      },
      required: true,
    },
  },
  responses: {
    204: { description: 'Dispute challenged successfully' },
    400: {
      description: 'Bad Request',
      content: {
        'application/json': {
          schema: ErrorV2Schema,
          example: {
            code: 'bad_request',
            message: 'Missing Revolut-Api-Version header',
            timestamp: 1601296792533,
          },
        },
      },
    },
    401: {
      description: 'Unauthorized',
      content: {
        'application/json': {
          schema: ErrorV2Schema,
          example: {
            code: 'unauthenticated',
            message: 'Authentication failed',
            timestamp: 1721049596461,
          },
        },
      },
    },
    403: {
      description: 'Forbidden',
      content: {
        'application/json': {
          schema: ErrorV2Schema,
          example: {
            code: 'not_found',
            message: 'The requested operation is forbidden',
            timestamp: 1721050063886,
          },
        },
      },
    },
    404: {
      description: 'Not Found',
      content: {
        'application/json': {
          schema: ErrorV2Schema,
          example: {
            code: 'not_found',
            message: 'The requested resource is not found',
            timestamp: 1721050063886,
          },
        },
      },
    },
    422: {
      description: 'Unprocessable entity',
      content: { 'application/json': { schema: ErrorV2Schema } },
    },
    500: {
      description: 'Internal Server Error',
      content: { 'application/json': { schema: ErrorV2Schema } },
    },
  },
  security: [{ 'Bearer-Auth': [] }],
  servers: [
    { description: 'Production server (uses live data)', url: 'https://merchant.revolut.com' },
  ],
})

export const getApiPaymentsPaymentIdRoute = createRoute({
  method: 'get',
  path: '/api/payments/{payment_id}',
  tags: ['Payments'],
  summary: 'Retrieve payment details',
  description:
    "Retrieve information about a specific payment, based on the payment's ID.\n\nUse this endpoint to track a payment's lifecycle, for example:\n  - When you develop a [1-click checkout process](https://developer.revolut.com/docs/guides/merchant/optimise-checkout/save-payment-methods/checkout-with-saved-card)\n  - When you build a [subscription management system](https://developer.revolut.com/docs/guides/merchant/optimise-checkout/save-payment-methods/subscription-management)",
  operationId: 'retrievePaymentDetails',
  request: {
    headers: z.object({
      Authorization: AuthorizationParamsSchema,
      'Revolut-Api-Version': RevolutApiVersionOptionalParamsSchema,
    }),
    params: z.object({ payment_id: PaymentIdParamsSchema }),
  },
  responses: {
    200: {
      description: 'Payment details',
      content: {
        'application/json': {
          schema: PaymentRetrievalV2Schema,
          examples: {
            revolut_pay_saved: {
              summary: 'Payment completed via Revolut Pay (card, saved details)',
              value: {
                id: '6633855a-0e4f-a768-8b2c-e765d8872505',
                state: 'captured',
                created_at: '2024-05-02T12:21:46.638369Z',
                updated_at: '2024-05-02T12:21:55.198089Z',
                token: '0b277730-8b3c-48d4-ab63-8903f40ee520',
                amount: 100,
                currency: 'GBP',
                settled_amount: 77,
                settled_currency: 'GBP',
                risk_level: 'low',
                fees: [{ type: 'acquiring', amount: 23, currency: 'GBP' }],
                payment_method: {
                  id: '6633855a-3b39-ad95-9782-cd1327ffa0e7',
                  type: 'revolut_pay_card',
                  fingerprint: '1JAllfQY4POhBV8DaddAQ4LC5RbMP8LMLvUdJW4s5JY=',
                  card_brand: 'visa',
                  funding: 'credit',
                  card_country_code: 'MT',
                  card_bin: '123456',
                  card_last_four: '1234',
                  card_expiry: '12/28',
                  cardholder_name: 'Example Holder',
                  checks: { three_ds: { eci: '06', state: 'verified', version: 2 } },
                },
                order_id: '66338534-28a7-a68e-b312-43722430df1b',
              },
            },
            revolut_pay_not_saved: {
              summary: 'Payment completed via Revolut Pay (account, not saved details)',
              value: {
                id: '66338688-fd73-a358-a82d-97da413c5325',
                state: 'captured',
                created_at: '2024-05-02T12:26:48.134039Z',
                updated_at: '2024-05-02T12:26:49.514594Z',
                token: '8061e645-35e0-42bb-8318-603abaeab7b7',
                amount: 100,
                currency: 'GBP',
                settled_amount: 79,
                settled_currency: 'GBP',
                billing_address: {
                  street_line_1: '123 Example Street',
                  street_line_2: 'Building A, 3rd Floor',
                  city: 'Example City',
                  region: 'Example Region',
                  country_code: 'GB',
                  postcode: 'E14 4HD',
                },
                risk_level: 'low',
                fees: [{ type: 'acquiring', amount: 21, currency: 'GBP' }],
                payment_method: {
                  type: 'revolut_pay_account',
                  fingerprint: '1JAllfQY4POhBV8DaddAQ4LC5RbMP8LMLvUdJW4s5JY=',
                },
                order_id: '6633865d-d911-a98c-8715-425f8731640c',
              },
            },
            apple_tap_to_pay: {
              summary: 'Payment declined via Apple Tap to Pay',
              value: {
                id: '66338688-fd73-a358-a82d-97da413c5325',
                state: 'declined',
                created_at: '2024-05-02T12:26:48.134039Z',
                updated_at: '2024-05-02T12:26:49.514594Z',
                token: '8061e645-35e0-42bb-8318-603abaeab7b7',
                amount: 100,
                currency: 'GBP',
                settled_amount: 79,
                settled_currency: 'GBP',
                billing_address: {
                  street_line_1: '123 Example Street',
                  street_line_2: 'Building A, 3rd Floor',
                  city: 'Example City',
                  region: 'Example Region',
                  country_code: 'GB',
                  postcode: 'E14 4HD',
                },
                risk_level: 'low',
                fees: [{ type: 'acquiring', amount: 21, currency: 'GBP' }],
                payment_method: { type: 'apple_tap_to_pay', failure_reason: 'pin_data_required' },
                order_id: '6633865d-d911-a98c-8715-425f8731640c',
              },
            },
            apple_pay: {
              summary: 'Payment completed via Apple Pay',
              value: {
                id: '66338688-fd73-a358-a82d-97da413c5325',
                state: 'captured',
                created_at: '2024-05-02T12:26:48.134039Z',
                updated_at: '2024-05-02T12:26:49.514594Z',
                token: '8061e645-35e0-42bb-8318-603abaeab7b7',
                amount: 100,
                currency: 'GBP',
                settled_amount: 79,
                settled_currency: 'GBP',
                billing_address: {
                  street_line_1: '123 Example Street',
                  street_line_2: 'Building A, 3rd Floor',
                  city: 'Example City',
                  region: 'Example Region',
                  country_code: 'GB',
                  postcode: 'E14 4HD',
                },
                risk_level: 'low',
                fees: [{ type: 'acquiring', amount: 21, currency: 'GBP' }],
                payment_method: {
                  type: 'apple_pay',
                  fingerprint: '1JAllfQY4POhBV8DaddAQ4LC5RbMP8LMLvUdJW4s5JY=',
                },
                order_id: '6633865d-d911-a98c-8715-425f8731640c',
              },
            },
            google_pay: {
              summary: 'Payment completed via Google Pay',
              value: {
                id: '66338688-fd73-a358-a82d-97da413c5325',
                state: 'captured',
                created_at: '2024-05-02T12:26:48.134039Z',
                updated_at: '2024-05-02T12:26:49.514594Z',
                token: '8061e645-35e0-42bb-8318-603abaeab7b7',
                amount: 100,
                currency: 'GBP',
                settled_amount: 79,
                settled_currency: 'GBP',
                billing_address: {
                  street_line_1: '123 Example Street',
                  street_line_2: 'Building A, 3rd Floor',
                  city: 'Example City',
                  region: 'Example Region',
                  country_code: 'GB',
                  postcode: 'E14 4HD',
                },
                risk_level: 'low',
                fees: [{ type: 'acquiring', amount: 21, currency: 'GBP' }],
                payment_method: {
                  type: 'google_pay',
                  fingerprint: '1JAllfQY4POhBV8DaddAQ4LC5RbMP8LMLvUdJW4s5JY=',
                },
                order_id: '6633865d-d911-a98c-8715-425f8731640c',
              },
            },
            card_payment_saved: {
              summary: 'Payment completed via card (saved details)',
              value: {
                id: '663387f1-1c2e-a295-b143-9f1fb1eec175',
                state: 'captured',
                created_at: '2024-05-02T12:32:49.033945Z',
                updated_at: '2024-05-02T12:32:57.003519Z',
                token: '294358bf-3818-49b2-aacc-7ca971f52695',
                amount: 100,
                currency: 'GBP',
                settled_amount: 79,
                settled_currency: 'GBP',
                billing_address: {
                  street_line_1: '123 Example Street',
                  street_line_2: 'Building A, 3rd Floor',
                  city: 'Example City',
                  region: 'Example Region',
                  country_code: 'GB',
                  postcode: 'E14 4HD',
                },
                risk_level: 'low',
                fees: [{ type: 'acquiring', amount: 21, currency: 'GBP' }],
                payment_method: {
                  id: '663387f1-c91e-a464-908a-1cc4548ebc6a',
                  type: 'card',
                  fingerprint: '1JAllfQY4POhBV8DaddAQ4LC5RbMP8LMLvUdJW4s5JY=',
                  card_brand: 'visa',
                  funding: 'credit',
                  card_country_code: 'GB',
                  card_bin: '123456',
                  card_last_four: '1234',
                  card_expiry: '12/30',
                  cardholder_name: 'Test Holder',
                  checks: {
                    three_ds: { eci: '06', state: 'verified', version: 2 },
                    cvv_verification: 'match',
                    address: 'match',
                    postcode: 'match',
                    cardholder: 'n_a',
                  },
                },
                order_id: '663387bd-8484-ac57-93a7-3751dc154bbc',
              },
            },
            sepa_direct_debit: {
              summary: 'Payment via SEPA Direct Debit (pending)',
              value: {
                id: '63dd0e4a-42c4-a1a6-ab2c-6ac9d255ca4b',
                state: 'pending',
                created_at: '2024-05-02T12:32:49.033945Z',
                updated_at: '2024-05-02T12:32:57.003519Z',
                token: '294358bf-3818-49b2-aacc-7ca971f52695',
                amount: 100,
                currency: 'EUR',
                risk_level: 'low',
                payment_method: {
                  type: 'sepa_direct_debit',
                  debtor_iban_last_four: '1234',
                  debtor_name: 'John Doe',
                  mandate_reference: 'A1B2C3D4E5F6A1B2C3D4E5F6A1B2C3D4',
                },
                order_id: '63dd0e3f-7b84-ab5c-927c-1a06f7c9583a',
              },
            },
            card_payment_not_saved: {
              summary: 'Payment completed via card (not saved details)',
              value: {
                id: '663387f1-1c2e-a295-b143-9f1fb1eec175',
                state: 'captured',
                created_at: '2024-05-02T12:32:49.033945Z',
                updated_at: '2024-05-02T12:32:57.003519Z',
                token: '294358bf-3818-49b2-aacc-7ca971f52695',
                amount: 100,
                currency: 'GBP',
                settled_amount: 79,
                settled_currency: 'GBP',
                billing_address: {
                  street_line_1: '123 Example Street',
                  street_line_2: 'Building A, 3rd Floor',
                  city: 'Example City',
                  region: 'Example Region',
                  country_code: 'GB',
                  postcode: 'E14 4HD',
                },
                risk_level: 'low',
                fees: [{ type: 'acquiring', amount: 21, currency: 'GBP' }],
                payment_method: {
                  type: 'card',
                  fingerprint: '1JAllfQY4POhBV8DaddAQ4LC5RbMP8LMLvUdJW4s5JY=',
                  card_brand: 'visa',
                  funding: 'credit',
                  card_country_code: 'GB',
                  card_bin: '123456',
                  card_last_four: '1234',
                  card_expiry: '12/30',
                  cardholder_name: 'Test Holder',
                  checks: {
                    three_ds: { eci: '06', state: 'verified', version: 2 },
                    cvv_verification: 'match',
                    address: 'match',
                    postcode: 'match',
                    cardholder: 'n_a',
                  },
                },
                order_id: '663387bd-8484-ac57-93a7-3751dc154bbc',
              },
            },
          },
        },
      },
    },
    400: {
      description: 'Bad Request',
      content: {
        'application/json': {
          schema: z
            .object({
              errorId: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    'The ID of the error. You can share this ID with Revolut\nsupport for troubleshooting.',
                }),
              timestamp: z
                .int()
                .exactOptional()
                .openapi({ description: 'The date and time the error happened.' }),
            })
            .openapi({ required: [] }),
          examples: {
            'example-1': {
              value: { errorId: '94b27660-fdda-49ec-8b85-cd46a068ade0', timestamp: 1601296792533 },
            },
          },
        },
      },
    },
    401: { description: 'Unauthorized' },
    404: {
      description: 'Not Found',
      content: {
        'application/json': {
          schema: z
            .object({
              errorId: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    'The ID of the error. You can share this ID with Revolut\nsupport for troubleshooting.',
                }),
              timestamp: z
                .int()
                .exactOptional()
                .openapi({ description: 'The date and time the error happened.' }),
              code: z.int().exactOptional(),
            })
            .openapi({ required: [] }),
          examples: {
            'example-1': {
              value: {
                errorId: '94b27660-fdda-49ec-8b85-cd46a068ade0',
                timestamp: 1601296792533,
                code: 1024,
              },
            },
          },
        },
      },
    },
    500: {
      description: 'Internal Server Error',
      content: { 'application/json': { schema: ErrorV2Schema } },
    },
  },
  security: [{ 'Bearer-Auth': [] }],
})

export const getApiSubscriptionPlansRoute = createRoute({
  method: 'get',
  path: '/api/subscription-plans',
  tags: ['Subscriptions'],
  summary: 'Retrieve a subscription plan list',
  description:
    'Retrieve all subscription plans configured for your merchant account. You can use the query parameters for:\n\n  | Filtering | Pagination |\n  | --------- | ---------- |\n  | Filter the subscription plans that you want to retrieve, for example, only retrieve plans created within a specific date range. <br/><br/>Parameters used for filtering:<br/><ul><li>`from`</li><li>`to`</li></ul> | View the subscription plans without loading all of them at once, for example, return a specified number of plans per page. <br/><br/>Parameters used for pagination: <br/><ul><li>`limit`</li><li>`page_token`</li></ul> |',
  operationId: 'retrieveSubscriptionPlanList',
  request: {
    headers: z.object({
      Authorization: AuthorizationParamsSchema,
      'Revolut-Api-Version': RevolutApiVersionParamsSchema,
    }),
    query: z.object({
      limit: LimitParamsSchema,
      from: FromParamsSchema,
      to: ToParamsSchema,
      page_token: PageTokenParamsSchema,
    }),
  },
  responses: {
    200: {
      description: 'List of subscription plans retrieved successfully',
      content: {
        'application/json': {
          schema: SubscriptionPlansSchema,
          examples: { plans_list: ResSubscriptionPlansListExample },
        },
      },
    },
    400: { description: 'Bad Request', content: { 'application/json': { schema: ErrorV2Schema } } },
    401: {
      description: 'Unauthorized',
      content: { 'application/json': { schema: ErrorV2Schema } },
    },
    403: {
      description: 'Forbidden',
      content: {
        'application/json': {
          schema: ErrorV2Schema,
          example: {
            code: 'forbidden',
            message: 'The requested operation is forbidden',
            timestamp: 1721050063886,
          },
        },
      },
    },
    422: {
      description: 'Unprocessable entity',
      content: { 'application/json': { schema: ErrorV2Schema } },
    },
    500: {
      description: 'Internal Server Error',
      content: { 'application/json': { schema: ErrorV2Schema } },
    },
    default: {
      description: 'Error response',
      content: { 'application/json': { schema: ErrorV2Schema } },
    },
  },
  security: [{ 'Bearer-Auth': [] }],
})

export const postApiSubscriptionPlansRoute = createRoute({
  method: 'post',
  path: '/api/subscription-plans',
  tags: ['Subscriptions'],
  summary: 'Create a subscription plan',
  description:
    'Create a new subscription plan with one or more pricing variations.\n\nA subscription plan defines the billing structure for subscriptions. Each plan can have multiple variations (e.g., monthly vs. yearly), and each variation can have multiple billing phases (e.g., trial period followed by regular billing). These plans are designed for flexibility, allowing you to combine fixed recurring fees with unit-based or usage-based charges into a single, unified subscription.\n\n## How subscription plans work\n\nA subscription plan consists of four hierarchical levels:\n\n1. **Plan**: The top-level container (e.g., "Standard Plan")\n1. **Variations**: Different pricing options (e.g., monthly vs. yearly)\n1. **Phases**: Sequential billing stages within each variation\n1. **Subscription items**: Individual line items within a phase that define **how** to charge (e.g., a base fee plus per-unit charges)\n\n### Phases and billing items\n\nIf a `trial_duration` is defined at the variation level, billing phases begin immediately after the trial ends. Phases execute in sequence based on their `ordinal` value (1, 2, 3, etc.):\n\n| Concept | Behaviour |\n| ------- | --------- |\n| **Cycle control** | Each phase has a `cycle_duration` (e.g., `P1M` for monthly). Use `cycle_count` to limit how many cycles occur; if `null` or omitted, the phase runs indefinitely. |\n| **Sequential transition** | When a phase completes its cycles, the subscription advances to the next `ordinal`. If no next phase exists, the subscription stops automatically. |\n| **Item composition** | Each phase contains one or more `subscription_items` defining how charges are calculated: **flat** items apply a fixed cost multiplied by `quantity`; **usage** items are metered at the end of the cycle based on reported consumption. |\n\n:::tip [Example: Multi-item billing]\nA plan combining a **base platform fee** and **monthly user licenses**:\n\n**Variation:** `Monthly Team`\n\n**Phase 1** — `ordinal: 1`, `cycle_duration: P1M`\n\n| Item | Type | `amount` | `quantity` |\n| ---- | ---- | -------- | ---------- |\n| **Base platform fee** | `flat` | `4900` (£49.00) | `1` |\n| **User licenses** | `flat` | `1000` (£10.00 per unit) | `5` |\n\nThe customer is billed a fixed platform fee plus £10.00 for each of their 5 active licenses every month.\n:::',
  operationId: 'createSubscriptionPlan',
  request: {
    headers: z.object({
      Authorization: AuthorizationParamsSchema,
      'Revolut-Api-Version': RevolutApiVersionParamsSchema,
    }),
    body: {
      content: {
        'application/json': {
          schema: SubscriptionPlanCreationSchema,
          examples: {
            simple_plan: ReqSubscriptionPlanSimpleExample,
            trial_plan_with_duration: ReqSubscriptionPlanWithTrialDurationExample,
            limited_plan: ReqSubscriptionPlanLimitedExample,
            usage_base_plan: ReqSubscriptionPlanUsageBaseExample,
            hybrid_plan: ReqSubscriptionPlanHybridExample,
            package_plan: ReqSubscriptionPlanPackageExample,
            items_plan: ReqSubscriptionPlanWithItemsExample,
          },
        },
      },
      required: true,
    },
  },
  responses: {
    201: {
      description: 'Subscription plan created successfully',
      content: {
        'application/json': {
          schema: SubscriptionPlanSchema,
          examples: {
            simple_plan: ResSubscriptionPlanSimpleExample,
            trial_plan_with_duration: ResSubscriptionPlanWithTrialDurationExample,
            limited_plan: ResSubscriptionPlanLimitedExample,
            usage_base_plan: ResSubscriptionPlanUsageBaseExample,
            hybrid_plan: ResSubscriptionPlanHybridExample,
            package_plan: ResSubscriptionPlanPackageExample,
            items_plan: ResSubscriptionPlanWithItemsExample,
          },
        },
      },
    },
    400: { description: 'Bad Request', content: { 'application/json': { schema: ErrorV2Schema } } },
    401: {
      description: 'Unauthorized',
      content: { 'application/json': { schema: ErrorV2Schema } },
    },
    403: {
      description: 'Forbidden',
      content: {
        'application/json': {
          schema: ErrorV2Schema,
          example: {
            code: 'forbidden',
            message: 'The requested operation is forbidden',
            timestamp: 1721050063886,
          },
        },
      },
    },
    422: {
      description: 'Unprocessable entity',
      content: { 'application/json': { schema: ErrorV2Schema } },
    },
    500: {
      description: 'Internal Server Error',
      content: { 'application/json': { schema: ErrorV2Schema } },
    },
    default: {
      description: 'Error response',
      content: { 'application/json': { schema: ErrorV2Schema } },
    },
  },
  security: [{ 'Bearer-Auth': [] }],
})

export const getApiSubscriptionPlansSubscriptionPlanIdRoute = createRoute({
  method: 'get',
  path: '/api/subscription-plans/{subscription_plan_id}',
  tags: ['Subscriptions'],
  summary: 'Retrieve a subscription plan',
  description:
    'Retrieve a specific subscription plan by its unique identifier.\n\nA subscription plan contains **variations** (different pricing options like monthly vs. yearly), and each variation contains **phases** (sequential billing stages).\n\nPhases execute based on their `ordinal` value. When a phase completes its `cycle_count`, the subscription moves to the next phase. If `cycle_count` is `null` or omitted, the phase continues indefinitely.\n\n:::note\nIf a `trial_duration` is defined, phases begin immediately after the trial ends.\n:::',
  operationId: 'retrieveSubscriptionPlan',
  request: {
    headers: z.object({
      Authorization: AuthorizationParamsSchema,
      'Revolut-Api-Version': RevolutApiVersionParamsSchema,
    }),
    params: z.object({ subscription_plan_id: SubscriptionPlanIdParamsSchema }),
  },
  responses: {
    200: {
      description: 'Subscription plan retrieved successfully',
      content: {
        'application/json': {
          schema: SubscriptionPlanSchema,
          examples: {
            simple_plan: ResSubscriptionPlanSimpleExample,
            trial_plan_with_duration: ResSubscriptionPlanWithTrialDurationExample,
            limited_plan: ResSubscriptionPlanLimitedExample,
          },
        },
      },
    },
    400: { description: 'Bad Request', content: { 'application/json': { schema: ErrorV2Schema } } },
    401: {
      description: 'Unauthorized',
      content: { 'application/json': { schema: ErrorV2Schema } },
    },
    404: {
      description: 'Subscription plan not found',
      content: { 'application/json': { schema: ErrorV2Schema } },
    },
    500: {
      description: 'Internal Server Error',
      content: { 'application/json': { schema: ErrorV2Schema } },
    },
    default: {
      description: 'Error response',
      content: { 'application/json': { schema: ErrorV2Schema } },
    },
  },
  security: [{ 'Bearer-Auth': [] }],
})

export const getApiSubscriptionsRoute = createRoute({
  method: 'get',
  path: '/api/subscriptions',
  tags: ['Subscriptions'],
  summary: 'Retrieve a subscription list',
  description:
    'Retrieve all subscriptions for the merchant account. You can use the query parameters for:\n\n  | Filtering | Pagination |\n  | --------- | ---------- |\n  | Filter the subscriptions that you want to retrieve, for example, only retrieve subscriptions created within a specific date range or with a specific external reference. <br/><br/>Parameters used for filtering:<br/><ul><li>`from`</li><li>`to`</li><li>`external_reference`</li></ul> | View the subscriptions without loading all of them at once, for example, return a specified number of subscriptions per page. <br/><br/>Parameters used for pagination: <br/><ul><li>`limit`</li><li>`page_token`</li></ul> |',
  operationId: 'retrieveSubscriptionList',
  request: {
    headers: z.object({
      Authorization: AuthorizationParamsSchema,
      'Revolut-Api-Version': RevolutApiVersionParamsSchema,
    }),
    query: z.object({
      limit: LimitParamsSchema,
      from: FromParamsSchema,
      to: ToParamsSchema,
      external_reference: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'external_reference',
            in: 'query',
            schema: { type: 'string' },
            description:
              'Return subscriptions with a specific `external_reference`. Used for **filtering**.',
            required: false,
          },
        }),
      page_token: PageTokenParamsSchema,
    }),
  },
  responses: {
    200: {
      description: 'List of subscriptions retrieved successfully',
      content: {
        'application/json': {
          schema: SubscriptionsSchema,
          examples: { subscriptions_list: ResSubscriptionsListExample },
        },
      },
    },
    400: { description: 'Bad Request', content: { 'application/json': { schema: ErrorV2Schema } } },
    401: {
      description: 'Unauthorized',
      content: { 'application/json': { schema: ErrorV2Schema } },
    },
    403: {
      description: 'Forbidden',
      content: {
        'application/json': {
          schema: ErrorV2Schema,
          example: {
            code: 'forbidden',
            message: 'The requested operation is forbidden',
            timestamp: 1721050063886,
          },
        },
      },
    },
    422: {
      description: 'Unprocessable entity',
      content: { 'application/json': { schema: ErrorV2Schema } },
    },
    500: {
      description: 'Internal Server Error',
      content: { 'application/json': { schema: ErrorV2Schema } },
    },
    default: {
      description: 'Error response',
      content: { 'application/json': { schema: ErrorV2Schema } },
    },
  },
  security: [{ 'Bearer-Auth': [] }],
})

export const postApiSubscriptionsRoute = createRoute({
  method: 'post',
  path: '/api/subscriptions',
  tags: ['Subscriptions'],
  summary: 'Create a subscription',
  description:
    "Create a new subscription for a customer using a subscription plan variation.\n\nThere are several supported flows for creating and activating subscriptions, depending on your integration needs.\n\n:::note\nThe customer must already exist in the API. The `customer_id` is required for all subscription flows.\n:::\n\n<details>\n<summary>\n\n#### Flow 1: Hosted Payment Page (HPP)\n\n</summary>\n\nUse this flow to redirect the customer to Revolut's Hosted Payment Page to complete the first payment and save their payment method.\n\n**Backend flow:**\n1. Create a subscription with optional `setup_order_redirect_url`:\n\n   | `setup_order_redirect_url` | Behaviour |\n   | -------------------------- | --------- |\n   | **Provided** | The setup order's `redirect_url` field is set to this value. |\n   | **Omitted** | The setup order uses Revolut's default redirect behaviour. |\n\n1. The subscription is created in a `pending` state with a `setup_order_id` in the response.\n1. [Retrieve the order](https://developer.revolut.com/docs/api/merchant/2024-09-01#retrieve-order) using `setup_order_id` as the `order_id` in the path to get the `checkout_url`.\n1. Redirect the customer to the `checkout_url` for the Hosted Payment Page.\n\n**Customer flow:**\n1. Customer is redirected to Revolut's Hosted Payment Page.\n1. Customer completes payment on the HPP, and their payment method is saved.\n1. Customer redirect after payment depends on your setup:\n\n   | `setup_order_redirect_url` | Customer redirect |\n   | -------------------------- | ----------------- |\n   | **Provided** | Customer is redirected to your custom URL. |\n   | **Omitted** | Customer sees the default Revolut completion screen. |\n\n**Key characteristics:**\n- Customer completes payment on Revolut's hosted page\n- Payment method is automatically saved for future billing cycles\n- Optional custom redirect after payment\n- Best for web-based integrations\n\n</details>\n\n<details>\n\n<summary>\n\n#### Flow 2: Widget or card-not-present (CNP) payment\n\n</summary>\n\nUse this flow when you want to embed the payment experience directly on your website using one of Revolut's payment widgets or handle card-not-present payments.\n\n**Backend flow:**\n1. Create a subscription with minimal required parameters.\n1. The subscription is created in a `pending` state with a `setup_order_id` in the response.\n1. [Retrieve the order](https://developer.revolut.com/docs/api/merchant/2024-09-01#retrieve-order) using `setup_order_id` as the `order_id` in the path to get order details for your integration.\n1. Integrate your payment solution (widget, SDK, or CNP method) on your frontend, ensuring it's configured to save the customer's payment method for recurring billing.\n\n**Customer flow:**\n1. Customer stays on your website/application.\n1. Customer completes payment, and their payment method is saved for future billing cycles.\n\n**Key characteristics:**\n- Payment experience embedded directly in your application\n- Customer never leaves your website\n- Payment method is saved for future billing cycles\n- Best for native mobile apps or fully custom web experiences\n\n</details>",
  operationId: 'createSubscription',
  request: {
    headers: z.object({
      Authorization: AuthorizationParamsSchema,
      'Revolut-Api-Version': RevolutApiVersionParamsSchema,
      'Idempotency-Key': IdempotencyKeyParamsSchema,
    }),
    body: {
      content: {
        'application/json': {
          schema: SubscriptionCreationSchema,
          examples: {
            with_setup_order: ReqSubscriptionSetupOrderExample,
            with_setup_order_no_url: ReqSubscriptionSetupOrderNoURLExample,
            with_trial: ReqSubscriptionWithTrialExample,
            skip_trial: ReqSubscriptionSkipTrialExample,
          },
        },
      },
      required: true,
    },
  },
  responses: {
    201: {
      description: 'Subscription created successfully',
      content: {
        'application/json': {
          schema: SubscriptionSchema,
          examples: {
            with_setup_order: ResSubscriptionSetupOrderExample,
            with_setup_order_no_url: ResSubscriptionSetupOrderNoURLExample,
          },
        },
      },
    },
    400: { description: 'Bad Request', content: { 'application/json': { schema: ErrorV2Schema } } },
    401: {
      description: 'Unauthorized',
      content: { 'application/json': { schema: ErrorV2Schema } },
    },
    403: {
      description: 'Forbidden',
      content: {
        'application/json': {
          schema: ErrorV2Schema,
          example: {
            code: 'forbidden',
            message: 'The requested operation is forbidden',
            timestamp: 1721050063886,
          },
        },
      },
    },
    422: {
      description: 'Unprocessable entity',
      content: { 'application/json': { schema: ErrorV2Schema } },
    },
    500: {
      description: 'Internal Server Error',
      content: { 'application/json': { schema: ErrorV2Schema } },
    },
    default: {
      description: 'Error response',
      content: { 'application/json': { schema: ErrorV2Schema } },
    },
  },
  security: [{ 'Bearer-Auth': [] }],
})

export const getApiSubscriptionsSubscriptionIdRoute = createRoute({
  method: 'get',
  path: '/api/subscriptions/{subscription_id}',
  tags: ['Subscriptions'],
  summary: 'Retrieve a subscription',
  description:
    'Retrieve a subscription by its unique identifier.\n\nUse this endpoint to get the current state and details of a specific subscription.',
  operationId: 'retrieveSubscription',
  request: {
    headers: z.object({
      Authorization: AuthorizationParamsSchema,
      'Revolut-Api-Version': RevolutApiVersionParamsSchema,
    }),
    params: z.object({ subscription_id: SubscriptionIdParamsSchema }),
  },
  responses: {
    200: {
      description: 'Subscription retrieved successfully',
      content: {
        'application/json': {
          schema: SubscriptionSchema,
          examples: { active_subscription: ResSubscriptionActiveExample },
        },
      },
    },
    400: { description: 'Bad Request', content: { 'application/json': { schema: ErrorV2Schema } } },
    401: {
      description: 'Unauthorized',
      content: { 'application/json': { schema: ErrorV2Schema } },
    },
    404: {
      description: 'Subscription not found',
      content: { 'application/json': { schema: ErrorV2Schema } },
    },
    500: {
      description: 'Internal Server Error',
      content: { 'application/json': { schema: ErrorV2Schema } },
    },
    default: {
      description: 'Error response',
      content: { 'application/json': { schema: ErrorV2Schema } },
    },
  },
  security: [{ 'Bearer-Auth': [] }],
})

export const patchApiSubscriptionsSubscriptionIdRoute = createRoute({
  method: 'patch',
  path: '/api/subscriptions/{subscription_id}',
  tags: ['Subscriptions'],
  summary: 'Update a subscription',
  description:
    "Update a subscription's details.\n\nYou can update a subscription and specific parameters based on the value of the `state` parameter:\n\n| State parameter value | Modifiable parameters |\n| --------------------- | --------------------- |\n| `pending`, `active`, `overdue`, `paused` | You can modify all listed parameters. |\n| `cancelled`, `finished` | You cannot modify parameters. These are final states. |\n\n**Common use cases:**\n- **Update external reference**: When you need to sync with updated customer records in your system, correct an initial reference value, or re-map the subscription to a different internal tracking ID to maintain consistency with your database.",
  operationId: 'updateSubscription',
  request: {
    headers: z.object({
      Authorization: AuthorizationParamsSchema,
      'Revolut-Api-Version': RevolutApiVersionParamsSchema,
    }),
    params: z.object({ subscription_id: SubscriptionIdParamsSchema }),
    body: {
      content: {
        'application/json': {
          schema: SubscriptionUpdateSchema,
          examples: { update_subscription: ReqSubscriptionUpdateExample },
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Subscription updated successfully',
      content: {
        'application/json': {
          schema: SubscriptionSchema,
          examples: { updated_subscription: ResSubscriptionActiveExample },
        },
      },
    },
    400: { description: 'Bad Request', content: { 'application/json': { schema: ErrorV2Schema } } },
    401: {
      description: 'Unauthorized',
      content: { 'application/json': { schema: ErrorV2Schema } },
    },
    403: {
      description: 'Forbidden',
      content: {
        'application/json': {
          schema: ErrorV2Schema,
          example: {
            code: 'forbidden',
            message: 'The requested operation is forbidden',
            timestamp: 1721050063886,
          },
        },
      },
    },
    404: {
      description: 'Subscription not found',
      content: { 'application/json': { schema: ErrorV2Schema } },
    },
    422: {
      description: 'Unprocessable entity',
      content: { 'application/json': { schema: ErrorV2Schema } },
    },
    500: {
      description: 'Internal Server Error',
      content: { 'application/json': { schema: ErrorV2Schema } },
    },
    default: {
      description: 'Error response',
      content: { 'application/json': { schema: ErrorV2Schema } },
    },
  },
  security: [{ 'Bearer-Auth': [] }],
})

export const postApiSubscriptionsSubscriptionIdCancelRoute = createRoute({
  method: 'post',
  path: '/api/subscriptions/{subscription_id}/cancel',
  tags: ['Subscriptions'],
  summary: 'Cancel a subscription',
  description:
    'Cancel a subscription.\n\nYou can cancel a subscription in any state except `cancelled` or `finished`. When you cancel a subscription, it will be marked as `cancelled` and no further billing cycles will be created. Any pending orders will be cancelled.',
  operationId: 'cancelSubscription',
  request: {
    headers: z.object({
      Authorization: AuthorizationParamsSchema,
      'Revolut-Api-Version': RevolutApiVersionParamsSchema,
    }),
    params: z.object({ subscription_id: SubscriptionIdParamsSchema }),
  },
  responses: {
    204: { description: 'Subscription cancelled successfully' },
    400: { description: 'Bad Request', content: { 'application/json': { schema: ErrorV2Schema } } },
    401: {
      description: 'Unauthorized',
      content: { 'application/json': { schema: ErrorV2Schema } },
    },
    403: {
      description: 'Forbidden',
      content: {
        'application/json': {
          schema: ErrorV2Schema,
          example: {
            code: 'forbidden',
            message: 'The requested operation is forbidden',
            timestamp: 1721050063886,
          },
        },
      },
    },
    404: {
      description: 'Subscription not found',
      content: { 'application/json': { schema: ErrorV2Schema } },
    },
    422: {
      description: 'Unprocessable entity',
      content: { 'application/json': { schema: ErrorV2Schema } },
    },
    500: {
      description: 'Internal Server Error',
      content: { 'application/json': { schema: ErrorV2Schema } },
    },
    default: {
      description: 'Error response',
      content: { 'application/json': { schema: ErrorV2Schema } },
    },
  },
  security: [{ 'Bearer-Auth': [] }],
})

export const postApiSubscriptionsSubscriptionIdChangePlanRoute = createRoute({
  method: 'post',
  path: '/api/subscriptions/{subscription_id}/change-plan',
  tags: ['Subscriptions'],
  summary: 'Change a subscription plan',
  description:
    "Schedule a plan change for a subscription. The change is applied at the end of the current billing cycle.\n\n### Use cases\n\n- **Plan upgrades:** Moving a customer to a higher-tier plan with more features or capacity.\n- **Plan downgrades:** Moving a customer to a lower-tier plan that better fits their usage and budget.\n- **Customer requests:** Accommodating a customer's request to switch to a different plan variation.\n\n### How it works\n\nWhen you schedule a plan change, the subscription continues operating under its current plan variation until the current billing cycle ends. At that point, the next cycle is created under the new plan variation.\n\n- **Scheduled change:** The plan change is scheduled to take effect `at_cycle_end`. The current cycle completes normally, and the new plan variation applies starting from the next cycle.\n- **Plan variation phases:** Some plan variations are divided into phases - distinct pricing or duration periods within a single variation. If the target plan variation has multiple phases, use `plan_variation_phase_id` to specify which phase to start from. If omitted, the change starts from the first phase.\n- **Trial periods:** If the target plan variation includes a trial period, it is skipped when changing plans. Trial periods only apply when a subscription is first created.\n- **Subsequent cycles:** After the transition, future cycles follow the cadence and pricing defined by the new plan variation.",
  operationId: 'changeSubscriptionPlan',
  request: {
    headers: z.object({
      Authorization: AuthorizationParamsSchema,
      'Revolut-Api-Version': RevolutApiVersionParamsSchema,
    }),
    params: z.object({ subscription_id: SubscriptionIdParamsSchema }),
    body: {
      content: {
        'application/json': {
          schema: SubscriptionChangePlanSchema,
          examples: {
            change_plan: ReqSubscriptionChangePlanExample,
            change_plan_with_reason: ReqSubscriptionChangePlanWithReasonExample,
            change_plan_with_phase: ReqSubscriptionChangePlanWithPhaseExample,
          },
        },
      },
      required: true,
    },
  },
  responses: {
    204: { description: 'Plan change scheduled successfully' },
    400: {
      description: 'Bad Request',
      content: {
        'application/json': {
          schema: ErrorV2Schema,
          examples: {
            immediate_not_supported: {
              summary: 'Immediate plan change not supported',
              value: {
                code: 'bad_request',
                message:
                  "Immediate plan change is not supported. Please provide 'scheduled' field (e.g. 'at_cycle_end')",
                timestamp: 1601296792533,
              },
            },
          },
        },
      },
    },
    401: {
      description: 'Unauthorized',
      content: { 'application/json': { schema: ErrorV2Schema } },
    },
    403: {
      description: 'Forbidden',
      content: {
        'application/json': {
          schema: ErrorV2Schema,
          example: {
            code: 'forbidden',
            message: 'The requested operation is forbidden',
            timestamp: 1721050063886,
          },
        },
      },
    },
    404: {
      description: 'Subscription not found',
      content: { 'application/json': { schema: ErrorV2Schema } },
    },
    422: {
      description: 'Unprocessable entity',
      content: {
        'application/json': {
          schema: ErrorV2Schema,
          examples: {
            subscription_finished: {
              summary: 'Subscription is finished',
              value: {
                code: 'subscription_finished',
                message: 'The subscription is finished',
                timestamp: 1601296792533,
              },
            },
            next_cycle_exists: {
              summary: 'Next cycle already exists with a different plan variation',
              value: {
                code: 'subscription_cycle_next_cycle_exists',
                message: 'Next cycle already exists with a different plan variation',
                timestamp: 1601296792533,
              },
            },
          },
        },
      },
    },
    500: {
      description: 'Internal Server Error',
      content: { 'application/json': { schema: ErrorV2Schema } },
    },
    default: {
      description: 'Error response',
      content: { 'application/json': { schema: ErrorV2Schema } },
    },
  },
  security: [{ 'Bearer-Auth': [] }],
})

export const postApiSubscriptionsSubscriptionIdChangeRenewalDateRoute = createRoute({
  method: 'post',
  path: '/api/subscriptions/{subscription_id}/change-renewal-date',
  tags: ['Subscriptions'],
  summary: 'Update a subscription renewal date',
  description:
    "Reschedule the upcoming payment date for an active subscription cycle. This is a command endpoint — the renewal date is not a direct field on the Subscription resource, but is derived from the current active cycle's `end_date`.\n\n### Use cases\n\n- **Payment extensions:** Granting a customer more time to pay.\n- **Service delays:** Adjusting the billing date if service delivery is delayed.\n- **Billing alignment:** Moving a payment date to better suit a customer's financial schedule.\n\n### How it works\n\nExtending the current cycle's `end_date` naturally postpones the start of the next cycle and its associated payment trigger, providing flexibility for both the merchant and the customer.\n\nThe relationship between the cycle end and the billing execution depends on the plan type:\n\n- **Non-usage plans:** The next cycle's start date is the same as the billing date. The moment the current cycle ends, the next cycle begins and the payment is attempted.\n- **Usage-based plans (buffer & overlap):** To allow merchants time to finalize usage data, the billing date is scheduled after the cycle `end_date`.\n    - Usage continues to be aggregated until the updated `end_date`.\n    - When the current cycle (Cycle 1) reaches its updated `end_date`, **Cycle 2 starts immediately** to ensure no service interruption.\n    - The billing for Cycle 1 occurs a few hours later (12-hour buffer). This window allows you to upload or edit usages for the period that just ended while the customer is already technically in their next cycle.\n    - Rescheduling the `renewal_date` pushes this entire sequence—the end of Cycle 1, the start of Cycle 2, and the delayed billing trigger—further into the future.\n\nSubsequent cycles resume the original plan cadence (e.g., monthly) from the new date.",
  operationId: 'updateSubscriptionRenewalDate',
  request: {
    headers: z.object({
      Authorization: AuthorizationParamsSchema,
      'Revolut-Api-Version': RevolutApiVersionParamsSchema,
    }),
    params: z.object({ subscription_id: SubscriptionIdParamsSchema }),
    body: {
      content: {
        'application/json': {
          schema: SubscriptionUpdateRenewalDateSchema,
          examples: { simple_plan: ReqSubscriptionUpdateRenewalDateExample },
        },
      },
      required: true,
    },
  },
  responses: {
    204: { description: 'Renewal date updated successfully' },
    400: { description: 'Bad Request', content: { 'application/json': { schema: ErrorV2Schema } } },
    401: {
      description: 'Unauthorized',
      content: { 'application/json': { schema: ErrorV2Schema } },
    },
    403: {
      description: 'Forbidden',
      content: {
        'application/json': {
          schema: ErrorV2Schema,
          example: {
            code: 'forbidden',
            message: 'The requested operation is forbidden',
            timestamp: 1721050063886,
          },
        },
      },
    },
    404: {
      description: 'Subscription not found',
      content: { 'application/json': { schema: ErrorV2Schema } },
    },
    422: {
      description: 'Unprocessable entity (business rule violation)',
      content: {
        'application/json': {
          schema: ErrorV2Schema,
          examples: {
            subscription_finished: {
              summary: 'Subscription is finished',
              value: {
                code: 'subscription_finished',
                message: 'The subscription is finished',
                timestamp: 1601296792533,
              },
            },
            next_cycle_exists: {
              summary: 'Next cycle already exists',
              value: {
                code: 'subscription_cycle_next_cycle_exists',
                message: 'Cannot change cycle end date when next cycle already exists',
                timestamp: 1601296792533,
              },
            },
            end_date_too_early: {
              summary: 'Renewal date is too early',
              value: {
                code: 'subscription_cycle_end_date_too_early',
                message: 'The end date is too early',
                timestamp: 1601296792533,
              },
            },
            end_date_too_far: {
              summary: 'Renewal date is too far in the future',
              value: {
                code: 'subscription_cycle_end_date_too_far',
                message: 'The end date is too far in the future',
                timestamp: 1601296792533,
              },
            },
          },
        },
      },
    },
    500: {
      description: 'Internal Server Error',
      content: { 'application/json': { schema: ErrorV2Schema } },
    },
    default: {
      description: 'Error response',
      content: { 'application/json': { schema: ErrorV2Schema } },
    },
  },
  security: [{ 'Bearer-Auth': [] }],
})

export const getApiSubscriptionsSubscriptionIdCyclesRoute = createRoute({
  method: 'get',
  path: '/api/subscriptions/{subscription_id}/cycles',
  tags: ['Subscriptions'],
  summary: 'Retrieve a subscription cycle list',
  description:
    'Retrieve all billing cycles for a specific subscription. \n\nYou can use the query parameters for:\n\n  | Filtering | Pagination |\n  | --------- | ---------- |\n  | Filter the subscription cycles that you want to retrieve, for example, only retrieve cycles that started within a specific date range. <br/><br/>Parameters used for filtering:<br/><ul><li>`from`</li><li>`to`</li></ul> | View the subscription cycles without loading all of them at once, for example, return a specified number of cycles per page. <br/><br/>Parameters used for pagination: <br/><ul><li>`limit`</li><li>`page_token`</li></ul> |',
  operationId: 'retrieveSubscriptionCycleList',
  request: {
    headers: z.object({
      Authorization: AuthorizationParamsSchema,
      'Revolut-Api-Version': RevolutApiVersionParamsSchema,
    }),
    params: z.object({ subscription_id: SubscriptionIdParamsSchema }),
    query: z.object({
      limit: LimitParamsSchema,
      from: FromParamsSchema,
      to: ToParamsSchema,
      page_token: PageTokenParamsSchema,
    }),
  },
  responses: {
    200: {
      description: 'List of subscription cycles retrieved successfully',
      content: {
        'application/json': {
          schema: SubscriptionCyclesSchema,
          examples: { cycles_list: ResSubscriptionCyclesListExample },
        },
      },
    },
    400: { description: 'Bad Request', content: { 'application/json': { schema: ErrorV2Schema } } },
    401: {
      description: 'Unauthorized',
      content: { 'application/json': { schema: ErrorV2Schema } },
    },
    404: {
      description: 'Subscription not found',
      content: { 'application/json': { schema: ErrorV2Schema } },
    },
    500: {
      description: 'Internal Server Error',
      content: { 'application/json': { schema: ErrorV2Schema } },
    },
    default: {
      description: 'Error response',
      content: { 'application/json': { schema: ErrorV2Schema } },
    },
  },
  security: [{ 'Bearer-Auth': [] }],
})

export const getApiSubscriptionsSubscriptionIdCyclesCycleIdRoute = createRoute({
  method: 'get',
  path: '/api/subscriptions/{subscription_id}/cycles/{cycle_id}',
  tags: ['Subscriptions'],
  summary: 'Retrieve a subscription cycle',
  description:
    'Retrieve a specific billing cycle for a subscription by its unique identifier.\n\nUse this endpoint to get the details and current state of a particular billing cycle.',
  operationId: 'retrieveSubscriptionCycle',
  request: {
    headers: z.object({
      Authorization: AuthorizationParamsSchema,
      'Revolut-Api-Version': RevolutApiVersionParamsSchema,
    }),
    params: z.object({
      subscription_id: SubscriptionIdParamsSchema,
      cycle_id: CycleIdParamsSchema,
    }),
  },
  responses: {
    200: {
      description: 'Subscription cycle retrieved successfully',
      content: {
        'application/json': {
          schema: SubscriptionCycleSchema,
          examples: { finished_cycle: ResSubscriptionCycleFinishedExample },
        },
      },
    },
    400: { description: 'Bad Request', content: { 'application/json': { schema: ErrorV2Schema } } },
    401: {
      description: 'Unauthorized',
      content: { 'application/json': { schema: ErrorV2Schema } },
    },
    404: {
      description: 'Subscription cycle not found',
      content: { 'application/json': { schema: ErrorV2Schema } },
    },
    500: {
      description: 'Internal Server Error',
      content: { 'application/json': { schema: ErrorV2Schema } },
    },
    default: {
      description: 'Error response',
      content: { 'application/json': { schema: ErrorV2Schema } },
    },
  },
  security: [{ 'Bearer-Auth': [] }],
})

export const getApiSubscriptionUsagesRoute = createRoute({
  method: 'get',
  path: '/api/subscription-usages',
  tags: ['Subscriptions'],
  summary: 'Retrieve a subscription usage list',
  description:
    'Retrieve all usage records for the merchant account. Results are ordered by `usage_date`, unlike other list endpoints which order by `created_at`. You can use the query parameters for:\n\n  | Filtering | Pagination |\n  | --------- | ---------- |\n  | Filter the usage records that you want to retrieve, for example, only retrieve records for a specific subscription or billing cycle. <br/><br/>Parameters used for filtering:<br/><ul><li>`subscription_id`</li><li>`subscription_cycle_id`</li><li>`from_usage_date`</li><li>`to_usage_date`</li></ul> | View usage records without loading all of them at once, for example, return a specified number of records per page. <br/><br/>Parameters used for pagination:<br/><ul><li>`limit`</li><li>`page_token`</li></ul> |',
  operationId: 'retrieveSubscriptionUsageList',
  request: {
    headers: z.object({
      Authorization: AuthorizationParamsSchema,
      'Revolut-Api-Version': RevolutApiVersionParamsSchema,
    }),
    query: z.object({
      limit: LimitParamsSchema,
      from_usage_date: FromUsageDateParamsSchema,
      to_usage_date: ToUsageDateParamsSchema,
      subscription_id: SubscriptionIdQueryParamsSchema,
      subscription_cycle_id: SubscriptionCycleIdQueryParamsSchema,
      page_token: PageTokenParamsSchema,
    }),
  },
  responses: {
    200: {
      description: 'List of subscription usages retrieved successfully',
      content: {
        'application/json': {
          schema: SubscriptionUsagesSchema,
          examples: { usage_list: ResUsageListExample },
        },
      },
    },
    400: { description: 'Bad Request', content: { 'application/json': { schema: ErrorV2Schema } } },
    401: {
      description: 'Unauthorized',
      content: { 'application/json': { schema: ErrorV2Schema } },
    },
    403: {
      description: 'Forbidden',
      content: {
        'application/json': {
          schema: ErrorV2Schema,
          example: {
            code: 'forbidden',
            message: 'The requested operation is forbidden',
            timestamp: 1721050063886,
          },
        },
      },
    },
    500: {
      description: 'Internal Server Error',
      content: { 'application/json': { schema: ErrorV2Schema } },
    },
    default: {
      description: 'Error response',
      content: { 'application/json': { schema: ErrorV2Schema } },
    },
  },
  security: [{ 'Bearer-Auth': [] }],
})

export const postApiSubscriptionUsagesRoute = createRoute({
  method: 'post',
  path: '/api/subscription-usages',
  tags: ['Subscriptions'],
  summary: 'Create a subscription usage',
  description:
    "Report a unit of consumption against a usage-based subscription item. Revolut accumulates reported records throughout the billing cycle and processes the charge after the cycle's `usage_cutoff_date`.\n\n### Resolve the billing cycle\n\nRevolut automatically identifies the applicable billing cycle from the `usage_date` you provide. The following submission windows are accepted:\n\n| Window | Rule |\n| ------ | ---- |\n| Active cycle | `usage_date` falls within the current cycle (`start_date ≤ usage_date < end_date`). |\n| Past cycle correction | `usage_date` falls within a recently ended cycle, and the request is made before that cycle's `usage_cutoff_date` (12 hours after `end_date` by default). |\n| Next upcoming cycle | `usage_date` falls within the one next future cycle. Revolut creates a `pending` cycle to hold the record until it becomes active. |\n\nAny `usage_date` outside these windows causes the request to be rejected.\n\n### How Revolut calculates the charge\n\nAfter the `usage_cutoff_date` passes, all records for each usage item are aggregated using the method defined on the subscription plan:\n\n| Method | Behaviour |\n| ------ | --------- |\n| `sum` | Totals all reported values during the cycle. Use for cumulative metrics (e.g., total GB transferred). |\n| `latest` | Uses the most recently reported value at the `usage_cutoff_date`. If no usages are reported during the cycle, the charge is 0. Use for gauge-style metrics (e.g., active seat count at month-end). |\n| `max` | Uses the highest value reported during the cycle. Use for capacity-based billing (e.g., peak concurrent connections). |\n\nThe aggregated total is multiplied by the unit price to produce the final charge.\n\n:::warning\nThe `Idempotency-Key` header is **required** for this endpoint. Providing a unique idempotency key ensures that duplicate requests due to retries or network issues do not result in duplicate usage records.\n:::",
  operationId: 'createSubscriptionUsage',
  request: {
    headers: z.object({
      Authorization: AuthorizationParamsSchema,
      'Revolut-Api-Version': RevolutApiVersionParamsSchema,
      'Idempotency-Key': IdempotencyKeyRequiredParamsSchema,
    }),
    body: {
      content: {
        'application/json': {
          schema: SubscriptionUsageCreationSchema,
          examples: { report_usage: ReqSubscriptionUsageExample },
        },
      },
      required: true,
    },
  },
  responses: {
    201: {
      description: 'Usage reported successfully',
      content: {
        'application/json': {
          schema: SubscriptionUsageSchema,
          examples: { usage_record: ResSubscriptionUsageExample },
        },
      },
    },
    400: {
      description: 'Bad Request',
      content: {
        'application/json': {
          schema: ErrorV2Schema,
          examples: {
            item_code_not_found: {
              summary: 'Subscription item code not found',
              value: {
                code: 'subscription_item_code_not_found',
                message: "Subscription item code 'api_calls' not found for phase",
                timestamp: 1743465600,
              },
            },
          },
        },
      },
    },
    401: {
      description: 'Unauthorized',
      content: { 'application/json': { schema: ErrorV2Schema } },
    },
    403: {
      description: 'Forbidden',
      content: {
        'application/json': {
          schema: ErrorV2Schema,
          example: {
            code: 'forbidden',
            message: 'The requested operation is forbidden',
            timestamp: 1721050063886,
          },
        },
      },
    },
    422: {
      description: 'Unprocessable entity (business rule violation)',
      content: {
        'application/json': {
          schema: ErrorV2Schema,
          examples: {
            subscription_finished: {
              summary: 'Subscription is finished',
              value: {
                code: 'subscription_finished',
                message: 'Cannot add usage to a finished subscription',
                timestamp: 1743465600,
              },
            },
            usage_after_last_cycle: {
              summary: 'Usage date after last cycle',
              value: {
                code: 'subscription_usage_after_last_cycle',
                message: 'Usage date is after the last cycle',
                timestamp: 1743465600,
              },
            },
            usage_before_start: {
              summary: 'Usage date before subscription start',
              value: {
                code: 'subscription_usage_before_subscription_start',
                message: 'Usage date is before the subscription start date',
                timestamp: 1743465600,
              },
            },
            future_cycle_limit_exceeded: {
              summary: 'Future cycle limit exceeded',
              value: {
                code: 'subscription_usage_future_cycle_limit_exceeded',
                message: 'Cannot add usage for cycles too far in the future',
                timestamp: 1743465600,
              },
            },
            usage_locked: {
              summary: 'Cycle is past the usage cutoff date',
              value: {
                code: 'subscription_usage_locked',
                message: 'Cannot modify usage for a locked cycle',
                timestamp: 1743465600,
              },
            },
          },
        },
      },
    },
    500: {
      description: 'Internal Server Error',
      content: { 'application/json': { schema: ErrorV2Schema } },
    },
    default: {
      description: 'Error response',
      content: { 'application/json': { schema: ErrorV2Schema } },
    },
  },
  security: [{ 'Bearer-Auth': [] }],
})

export const getApiSubscriptionUsagesUsageIdRoute = createRoute({
  method: 'get',
  path: '/api/subscription-usages/{usage_id}',
  tags: ['Subscriptions'],
  summary: 'Retrieve a subscription usage',
  description:
    'Retrieve a usage record by its unique identifier.\n\nUse this endpoint to get the details of a specific usage that was reported or updated.',
  operationId: 'retrieveSubscriptionUsage',
  request: {
    headers: z.object({
      Authorization: AuthorizationParamsSchema,
      'Revolut-Api-Version': RevolutApiVersionParamsSchema,
    }),
    params: z.object({ usage_id: UsageIdParamsSchema }),
  },
  responses: {
    200: {
      description: 'Usage record retrieved successfully',
      content: {
        'application/json': {
          schema: SubscriptionUsageSchema,
          examples: { usage_record: ResSubscriptionUsageExample },
        },
      },
    },
    400: { description: 'Bad Request', content: { 'application/json': { schema: ErrorV2Schema } } },
    401: {
      description: 'Unauthorized',
      content: { 'application/json': { schema: ErrorV2Schema } },
    },
    404: {
      description: 'Usage not found',
      content: { 'application/json': { schema: ErrorV2Schema } },
    },
    500: {
      description: 'Internal Server Error',
      content: { 'application/json': { schema: ErrorV2Schema } },
    },
    default: {
      description: 'Error response',
      content: { 'application/json': { schema: ErrorV2Schema } },
    },
  },
  security: [{ 'Bearer-Auth': [] }],
})

export const deleteApiSubscriptionUsagesUsageIdRoute = createRoute({
  method: 'delete',
  path: '/api/subscription-usages/{usage_id}',
  tags: ['Subscriptions'],
  summary: 'Delete a subscription usage',
  description:
    'Delete a subscription usage record. This operation is only permitted while the billing cycle is still open.',
  operationId: 'deleteSubscriptionUsage',
  request: {
    headers: z.object({
      Authorization: AuthorizationParamsSchema,
      'Revolut-Api-Version': RevolutApiVersionParamsSchema,
    }),
    params: z.object({ usage_id: UsageIdParamsSchema }),
  },
  responses: {
    204: { description: 'Usage deleted successfully' },
    400: { description: 'Bad Request', content: { 'application/json': { schema: ErrorV2Schema } } },
    401: {
      description: 'Unauthorized',
      content: { 'application/json': { schema: ErrorV2Schema } },
    },
    403: {
      description: 'Forbidden',
      content: {
        'application/json': {
          schema: ErrorV2Schema,
          example: {
            code: 'forbidden',
            message: 'The requested operation is forbidden',
            timestamp: 1721050063886,
          },
        },
      },
    },
    404: {
      description: 'Usage not found',
      content: { 'application/json': { schema: ErrorV2Schema } },
    },
    422: {
      description: 'Unprocessable entity (business rule violation)',
      content: {
        'application/json': {
          schema: ErrorV2Schema,
          examples: {
            usage_locked: {
              summary: 'Cycle is past the usage cutoff date',
              value: {
                code: 'subscription_usage_locked',
                message: 'Cannot modify usage for a locked cycle',
                timestamp: 1743465600,
              },
            },
          },
        },
      },
    },
    500: {
      description: 'Internal Server Error',
      content: { 'application/json': { schema: ErrorV2Schema } },
    },
    default: {
      description: 'Error response',
      content: { 'application/json': { schema: ErrorV2Schema } },
    },
  },
  security: [{ 'Bearer-Auth': [] }],
})

export const patchApiSubscriptionUsagesUsageIdRoute = createRoute({
  method: 'patch',
  path: '/api/subscription-usages/{usage_id}',
  tags: ['Subscriptions'],
  summary: 'Update a subscription usage',
  description: 'Update the quantity or metadata of a subscription usage record.',
  operationId: 'updateSubscriptionUsage',
  request: {
    headers: z.object({
      Authorization: AuthorizationParamsSchema,
      'Revolut-Api-Version': RevolutApiVersionParamsSchema,
    }),
    params: z.object({ usage_id: UsageIdParamsSchema }),
    body: {
      content: {
        'application/json': {
          schema: SubscriptionUsageUpdateSchema,
          examples: {
            update_usage_quantity: ReqSubscriptionUsageUpdateQuantityExample,
            update_usage_metadata: ReqSubscriptionUsageUpdateMetadataExample,
            update_usage: ReqSubscriptionUsageUpdateExample,
          },
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Usage updated successfully',
      content: {
        'application/json': {
          schema: SubscriptionUsageSchema,
          examples: { updated_usage: ResSubscriptionUsageExample },
        },
      },
    },
    400: { description: 'Bad Request', content: { 'application/json': { schema: ErrorV2Schema } } },
    401: {
      description: 'Unauthorized',
      content: { 'application/json': { schema: ErrorV2Schema } },
    },
    403: {
      description: 'Forbidden',
      content: {
        'application/json': {
          schema: ErrorV2Schema,
          example: {
            code: 'forbidden',
            message: 'The requested operation is forbidden',
            timestamp: 1721050063886,
          },
        },
      },
    },
    404: {
      description: 'Usage not found',
      content: { 'application/json': { schema: ErrorV2Schema } },
    },
    422: {
      description: 'Unprocessable entity (business rule violation)',
      content: {
        'application/json': {
          schema: ErrorV2Schema,
          examples: {
            usage_locked: {
              summary: 'Cycle is past the usage cutoff date',
              value: {
                code: 'subscription_usage_locked',
                message: 'Cannot modify usage for a locked cycle',
                timestamp: 1743465600,
              },
            },
          },
        },
      },
    },
    500: {
      description: 'Internal Server Error',
      content: { 'application/json': { schema: ErrorV2Schema } },
    },
    default: {
      description: 'Error response',
      content: { 'application/json': { schema: ErrorV2Schema } },
    },
  },
  security: [{ 'Bearer-Auth': [] }],
})

export const getApiPayoutsRoute = createRoute({
  method: 'get',
  path: '/api/payouts',
  tags: ['Payouts'],
  summary: 'Retrieve a payout list',
  description:
    'Retrieve all the payouts you made from your Merchant account. You can also use the query parameters for:\n\n  | Filtering | Pagination |\n  | --------- | ---------- |\n  | Filter the orders that you want to retrieve, for example, only retrieve the orders that have a specific email. <br/><br/>Parameters used for filtering:<br/><ul><li>`from_created_date`</li><li>`to_created_date`</li><li>`currency`</li><li>`state`</li></ul> | View the orders without loading all of them at once, for example, return a specified number of orders per page. <br/><br/>Parameters used for pagination: <br/><ul><li>`limit`</li></ul> |',
  operationId: 'retrievePayoutList',
  request: {
    headers: z.object({
      Authorization: AuthorizationParamsSchema,
      'Revolut-Api-Version': RevolutApiVersionParamsSchema,
    }),
    query: z.object({
      currency: z
        .string()
        .length(3)
        .exactOptional()
        .openapi({
          param: {
            name: 'currency',
            in: 'query',
            schema: { type: 'string', minLength: 3, maxLength: 3 },
            description:
              '[ISO 4217](https://en.wikipedia.org/wiki/ISO_4217) currency code in upper case.\n\n:::info\nFor more information about the supported currencies, see: [Help Center](https://help.revolut.com/business/help/merchant-accounts/payments/in-which-currencies-can-i-accept-payments/).\n:::',
            required: false,
          },
        }),
      limit: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int().min(1).max(500),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'limit',
            in: 'query',
            schema: { type: 'integer', minimum: 1, maximum: 500 },
            description:
              'The maximum number of payouts returned per page. Used for **pagination**.',
            required: false,
          },
        }),
      from_created_date: FromCreatedDateParamsSchema,
      to_created_date: ToCreatedDateParamsSchema,
      state: PayoutStateQueryParamsSchema,
    }),
  },
  responses: {
    201: {
      description: 'Payouts retrieved',
      content: {
        'application/json': {
          schema: z.array(PayoutSchema),
          example: [
            {
              id: 'a830020e-090c-4717-836d-37941a27ad12',
              state: 'completed',
              created_at: '2024-02-27T00:16:39.079285Z',
              destination_type: 'current_pocket',
              amount: 50000,
              currency: 'GBP',
            },
            {
              id: '66ffee42-7c4a-a15c-9a47-5dc67150386f',
              state: 'processing',
              created_at: '2024-02-26T17:16:39.079285Z',
              destination_type: 'external_beneficiary',
              amount: 10000,
              currency: 'GBP',
            },
          ],
        },
      },
    },
    400: {
      description: 'Bad Request',
      content: {
        'application/json': {
          schema: ErrorV2Schema,
          example: {
            code: 'bad_request',
            message: 'Could not parse JSON',
            timestamp: 1721049596461,
          },
        },
      },
      headers: z.object({}),
    },
    401: {
      description: 'Unauthorized',
      content: {
        'application/json': {
          schema: ErrorV2Schema,
          example: {
            code: 'unauthenticated',
            message: 'Authentication failed',
            timestamp: 1721049596461,
          },
        },
      },
    },
    404: { description: 'Not Found', content: { 'application/json': { schema: ErrorV2Schema } } },
    500: {
      description: 'Internal Server Error',
      content: { 'application/json': { schema: ErrorV2Schema } },
    },
  },
  security: [{ 'Bearer-Auth': [] }],
})

export const getApiPayoutsPayoutIdRoute = createRoute({
  method: 'get',
  path: '/api/payouts/{payout_id}',
  tags: ['Payouts'],
  summary: 'Retrieve a payout',
  description:
    'Retrieve the details of a payout. Provide the unique payout ID, and the corresponding payout information is returned.',
  operationId: 'retrievePayout',
  request: {
    headers: z.object({
      Authorization: AuthorizationParamsSchema,
      'Revolut-Api-Version': RevolutApiVersionParamsSchema,
    }),
    params: z.object({ payout_id: PayoutIdParamsSchema }),
  },
  responses: {
    200: {
      description: 'Payout retrieved',
      content: {
        'application/json': {
          schema: PayoutSchema,
          example: {
            id: 'a830020e-090c-4717-836d-37941a27ad12',
            state: 'completed',
            created_at: '2024-02-27T00:16:39.079285Z',
            destination_type: 'current_pocket',
            amount: 50000,
            currency: 'GBP',
          },
        },
      },
    },
    400: {
      description: 'Bad Request',
      content: {
        'application/json': {
          schema: ErrorV2Schema,
          example: {
            code: 'bad_request',
            message: 'Missing Revolut-Api-Version header',
            timestamp: 1721049596461,
          },
        },
      },
      headers: z.object({}),
    },
    401: {
      description: 'Unauthorized',
      content: {
        'application/json': {
          schema: ErrorV2Schema,
          example: {
            code: 'unauthenticated',
            message: 'Authentication failed',
            timestamp: 1721049596461,
          },
        },
      },
    },
    404: {
      description: 'Not Found',
      content: {
        'application/json': {
          schema: ErrorV2Schema,
          example: {
            code: 'not_found',
            message: 'The requested resource is not found',
            timestamp: 1721050063886,
          },
        },
      },
    },
    500: {
      description: 'Internal Server Error',
      content: { 'application/json': { schema: ErrorV2Schema } },
    },
  },
  security: [{ 'Bearer-Auth': [] }],
})

export const postApiReportRunsRoute = createRoute({
  method: 'post',
  path: '/api/report-runs',
  tags: ['Report runs'],
  summary: 'Create a report run',
  description:
    'Start generating a report of all transactions that match the filter and options specified in the request body.\n\nUse the returned `report_run_id` and the [Retrieve report run details](https://developer.revolut.com/docs/api/merchant#retrieve-report-run) operation to check the status of the generation.\n\nAfter generation is done, use the [Download report file](https://developer.revolut.com/docs/api/merchant#download-report-file) operation to retrieve the CSV. The `file_url` in the completed report run object is the request URL for that endpoint and requires the same authorisation as any other Merchant API request. \n\n### Report types\n\nThe table below helps to choose the right report type for your use case:\n\n| Report type | What it covers |\n| ----------- | -------------- |\n| `custom_report` | Settled and processing transactions with configurable columns |\n| `settlement_report` | All settled transactions, with a configurable set of columns |\n| `payments_report` | All payments including failed and declined ones |\n| `payout_statement_report` | All transactions contributing to a specific payout |\n| `icpp_fee_breakdown_report` | IC++ fees per transaction for a specific IC++ charge |\n\n### IDs across report types\n\nEach report type uses a different primary ID, depending on which system the data comes from:\n\n| ID column | System | Report types |\n| --------- | ------ | ------------ |\n| `payment_id`, `id` | **Acquiring system** - identifies a payment attempt | `payments_report`, `icpp_fee_breakdown_report` |\n| `transaction_id` | **Core ledger** - identifies the settlement entry created when a payment is captured | `settlement_report`, `payout_statement_report`, `custom_report` |\n| `order_id` | **Both systems** - bridges the acquiring and ledger perspectives | `settlement_report`, `payments_report`, `payout_statement_report`, `custom_report` |',
  operationId: 'createReportRun',
  request: {
    headers: z.object({ Authorization: AuthorizationParamsSchema }),
    body: {
      content: {
        'application/json': {
          schema: z
            .xor([
              ReportRunSettlementReportSchema,
              ReportRunCustomReportSchema,
              ReportRunPaymentsReportSchema,
              ReportRunPayoutReportSchema,
              ReportRunIcppReportSchema,
            ])
            .openapi({
              discriminator: {
                propertyName: 'type',
                mapping: {
                  settlement_report: '#/components/schemas/Report-Run-Settlement-Report',
                  custom_report: '#/components/schemas/Report-Run-Custom-Report',
                  payments_report: '#/components/schemas/Report-Run-Payments-Report',
                  payout_statement_report: '#/components/schemas/Report-Run-Payout-Report',
                  icpp_fee_breakdown_report: '#/components/schemas/Report-Run-Icpp-Report',
                },
              },
            }),
          examples: {
            custom_report: {
              summary: 'Custom report',
              value: {
                filter: {
                  from: '2020-01-01T00:00:00Z',
                  to: '2020-01-02T00:00:00Z',
                  entity_types: ['payment'],
                  entity_states: ['completed', 'processing'],
                },
                format: 'csv',
                type: 'custom_report',
                options: {
                  timezone: 'Europe/London',
                  columns: ['transaction_id', 'amount', 'currency', 'metadata.custom_attribute'],
                },
              },
            },
            settlement_report: {
              summary: 'Settlement report',
              value: {
                filter: {
                  from: '2020-01-01T00:00:00Z',
                  to: '2020-01-02T00:00:00Z',
                  entity_types: ['payment'],
                },
                format: 'csv',
                type: 'settlement_report',
              },
            },
            payments_report: {
              summary: 'Payments report',
              value: {
                filter: {
                  from: '2020-01-01T00:00:00Z',
                  to: '2020-01-02T00:00:00Z',
                  entity_states: ['completed', 'failed', 'declined'],
                },
                format: 'csv',
                type: 'payments_report',
              },
            },
            payout_statement_report: {
              summary: 'Payout statement report',
              value: {
                filter: { payout_id: 'a830020e-090c-4717-836d-37941a27ad12' },
                format: 'csv',
                type: 'payout_statement_report',
              },
            },
            icpp_fee_breakdown_report: {
              summary: 'IC++ fee breakdown report',
              value: {
                filter: { icpp_charge_id: '41d6c699-744a-4994-91c0-9227539c587f' },
                format: 'csv',
                type: 'icpp_fee_breakdown_report',
              },
            },
          },
        },
      },
    },
  },
  responses: {
    201: {
      description: 'Report run created, report started generating',
      content: {
        'application/json': {
          schema: ReportRunSchema,
          examples: {
            report_run_processing: {
              summary: 'Report run processing',
              value: {
                report_run_id: 'd6f6ef64-f668-4e64-8967-1cdf8afb2561',
                status: 'processing',
              },
            },
            report_run_completed: {
              summary: 'Report run completed, report file ready',
              value: {
                report_run_id: 'd6f6ef64-f668-4e64-8967-1cdf8afb2561',
                status: 'completed',
                file_url:
                  'https://merchant.revolut.com/api/report-runs/d6f6ef64-f668-4e64-8967-1cdf8afb2561/file',
              },
            },
          },
        },
      },
    },
    400: { description: 'Bad Request', content: { 'application/json': { schema: ErrorV2Schema } } },
    401: {
      description: 'Unauthorized',
      content: { 'application/json': { schema: ErrorV2Schema } },
    },
    403: {
      description: 'Forbidden',
      content: {
        'application/json': {
          schema: ErrorV2Schema,
          example: {
            code: 'forbidden',
            message: 'The requested operation is forbidden',
            timestamp: 1721050063886,
          },
        },
      },
    },
    404: { description: 'Not Found', content: { 'application/json': { schema: ErrorV2Schema } } },
    422: {
      description: 'Unprocessable entity',
      content: { 'application/json': { schema: ErrorV2Schema } },
    },
    500: {
      description: 'Internal Server Error',
      content: { 'application/json': { schema: ErrorV2Schema } },
    },
  },
  security: [{ 'Bearer-Auth': [] }],
})

export const getApiReportRunsReportRunIdRoute = createRoute({
  method: 'get',
  path: '/api/report-runs/{report_run_id}',
  tags: ['Report runs'],
  summary: 'Retrieve a report run',
  description:
    "Retrieve details of a report run, based on the `report_run_id`. \n\nUse this method to check the status of a report run.\n\nIf a report run's `status` is `completed`, the report file can be downloaded using the `file_url` for 24 hours after report generation finishes.\n\nOnce that 24-hour window elapses, the report run remains retrievable but transitions to `expired`, and the file can no longer be downloaded.",
  operationId: 'retrieveReportRun',
  request: {
    headers: z.object({ Authorization: AuthorizationParamsSchema }),
    params: z.object({ report_run_id: ReportRunIdParamsSchema }),
  },
  responses: {
    200: {
      description: 'Report run found',
      content: {
        'application/json': {
          schema: ReportRunSchema,
          examples: {
            report_run_processing: {
              summary: 'Report run processing',
              value: {
                report_run_id: 'd6f6ef64-f668-4e64-8967-1cdf8afb2561',
                status: 'processing',
              },
            },
            report_run_completed: {
              summary: 'Report run completed',
              value: {
                report_run_id: 'd6f6ef64-f668-4e64-8967-1cdf8afb2561',
                status: 'completed',
                file_url:
                  'https://merchant.revolut.com/api/report-runs/d6f6ef64-f668-4e64-8967-1cdf8afb2561/file',
              },
            },
            report_run_expired: {
              summary: 'Report run expired',
              value: { report_run_id: 'd6f6ef64-f668-4e64-8967-1cdf8afb2561', status: 'expired' },
            },
          },
        },
      },
    },
    400: { description: 'Bad Request', content: { 'application/json': { schema: ErrorV2Schema } } },
    401: {
      description: 'Unauthorized',
      content: { 'application/json': { schema: ErrorV2Schema } },
    },
    404: { description: 'Not Found', content: { 'application/json': { schema: ErrorV2Schema } } },
    500: {
      description: 'Internal Server Error',
      content: { 'application/json': { schema: ErrorV2Schema } },
    },
  },
  security: [{ 'Bearer-Auth': [] }],
})

export const getApiReportRunsReportRunIdFileRoute = createRoute({
  method: 'get',
  path: '/api/report-runs/{report_run_id}/file',
  tags: ['Report runs'],
  summary: 'Download report file',
  description:
    'Use this endpoint to download the generated report file.\n\nA generated report file is available for 24 hours after report generation finishes. After that, the report run becomes `expired` and the file can no longer be downloaded.\n\nThe response is a raw `text/csv` file. The first row contains the column headers. The columns included depend on the report type used when creating the report run, and the `options.columns` list if specified.\n\n### IDs across report types\n\nRevolut uses two separate ID systems across report types:\n\n| ID column | System | Report types |\n| --------- | ------ | ------------ |\n| `payment_id`, `id` | **Acquiring system** - identifies a payment attempt | `payments_report`, `icpp_fee_breakdown_report` |\n| `transaction_id` | **Core ledger** - identifies the settlement entry created when a payment is captured | `settlement_report`, `payout_statement_report`, `custom_report` |\n| `order_id` | **Both systems** - bridges the acquiring and ledger perspectives | `settlement_report`, `payments_report`, `payout_statement_report`, `custom_report` |\n\n:::tip\nA payment and its resulting ledger transaction represent the same event but have **different UUIDs**. To reconcile `payments_report` data against `settlement_report` data, join on `order_id`.\n:::\n\nUse the schema selector below to see the available columns for each report type.',
  operationId: 'downloadReportFile',
  request: {
    headers: z.object({ Authorization: AuthorizationParamsSchema }),
    params: z.object({ report_run_id: ReportRunIdParamsSchema }),
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'text/csv': {
          schema: z.xor([
            ReportRunCsvSettlementSchema,
            ReportRunCsvCustomSchema,
            ReportRunCsvPaymentsSchema,
            ReportRunCsvPayoutSchema,
            ReportRunCsvIcppSchema,
          ]),
          examples: {
            settlement_report: ResSettlementReportExample,
            custom_report: ResCustomReportExample,
            payments_report: ResPaymentsReportExample,
            payout_statement_report: ResPayoutReportExample,
          },
        },
      },
    },
    400: { description: 'Bad Request', content: { 'application/json': { schema: ErrorV2Schema } } },
    401: {
      description: 'Unauthorized',
      content: { 'application/json': { schema: ErrorV2Schema } },
    },
    404: { description: 'Not Found', content: { 'application/json': { schema: ErrorV2Schema } } },
    500: {
      description: 'Internal Server Error',
      content: { 'application/json': { schema: ErrorV2Schema } },
    },
  },
  security: [{ 'Bearer-Auth': [] }],
})

export const getApiWebhooksRoute = createRoute({
  method: 'get',
  path: '/api/webhooks',
  tags: ['Webhooks'],
  summary: 'Retrieve a webhook list',
  description: 'Get a list of webhooks that you are currently subscribed to.',
  operationId: 'retrieveWebhookList',
  request: {
    headers: z.object({
      Authorization: AuthorizationParamsSchema,
      'Revolut-Api-Version': RevolutApiVersion_2024_09_01MinParamsSchema,
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': {
          schema: WebhooksSchema,
          examples: { list_of_webhooks: ResWebhooksListExample },
        },
      },
    },
    401: {
      description: 'Unauthorized',
      content: { 'application/json': { schema: ErrorV2Schema } },
    },
    403: {
      description: 'Forbidden',
      content: {
        'application/json': {
          schema: ErrorV2Schema,
          example: {
            code: 'forbidden',
            message: 'The requested operation is forbidden',
            timestamp: 1721050063886,
          },
        },
      },
    },
    500: {
      description: 'Internal Server Error',
      content: { 'application/json': { schema: ErrorV2Schema } },
    },
  },
  security: [{ 'Bearer-Auth': [] }],
})

export const postApiWebhooksRoute = createRoute({
  method: 'post',
  path: '/api/webhooks',
  tags: ['Webhooks'],
  summary: 'Create a webhook',
  description:
    'Set up a webhook URL so that the Merchant API can push event notifications to the specified URL.\n\nEvents are delivered to the `url` provided in the request body - see the [Webhook event](https://developer.revolut.com/docs/api/merchant#webhook-webhook-event) operation for the payload schema.\n\n:::warning\nMerchants can register a **maximum of 10 webhook URLs**. If you attempt to register more than 10, the API will return a `422 - Unprocessable Content` error.\n\nEnsure your webhook registrations are necessary and within the allowed limit.\n:::',
  operationId: 'createWebhook',
  request: {
    headers: z.object({
      Authorization: AuthorizationParamsSchema,
      'Revolut-Api-Version': RevolutApiVersion_2024_09_01MinParamsSchema,
    }),
    body: {
      content: {
        'application/json': {
          schema: WebhookCreationSchema,
          examples: { example_webhook_request: ReqWebhookCreateExample },
        },
      },
    },
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': {
          schema: WebhookV2Schema,
          examples: { created_webhook: ResWebhookV2Example },
        },
      },
      links: {
        webhookEvent: {
          operationId: 'webhookEvent',
          description:
            'Webhook events are delivered to the `url` registered in this request\n(`{$request.body#/url}`), echoed back in the response (`{$response.body#/url}`).',
        },
      },
    },
    400: { description: 'Bad Request', content: { 'application/json': { schema: ErrorV2Schema } } },
    401: {
      description: 'Unauthorized',
      content: { 'application/json': { schema: ErrorV2Schema } },
    },
    403: {
      description: 'Forbidden',
      content: {
        'application/json': {
          schema: ErrorV2Schema,
          example: {
            code: 'forbidden',
            message: 'The requested operation is forbidden',
            timestamp: 1721050063886,
          },
        },
      },
    },
    422: {
      description: 'Unprocessable Content',
      content: { 'application/json': { schema: ErrorV2Schema } },
    },
    500: {
      description: 'Internal Server Error',
      content: { 'application/json': { schema: ErrorV2Schema } },
    },
  },
  security: [{ 'Bearer-Auth': [] }],
})

export const getApiWebhooksWebhookIdRoute = createRoute({
  method: 'get',
  path: '/api/webhooks/{webhook_id}',
  tags: ['Webhooks'],
  summary: 'Retrieve a webhook',
  description: 'Get the details of a specific webhook, including its `signing_secret`.  ',
  operationId: 'retrieveWebhook',
  request: {
    headers: z.object({
      Authorization: AuthorizationParamsSchema,
      'Revolut-Api-Version': RevolutApiVersion_2024_09_01MinParamsSchema,
    }),
    params: z.object({ webhook_id: WebhookIdParamsSchema }),
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': {
          schema: WebhookV2Schema,
          examples: { retrieved_webhook: ResWebhookV2Example },
        },
      },
    },
    401: {
      description: 'Unauthorized',
      content: { 'application/json': { schema: ErrorV2Schema } },
    },
    404: { description: 'Not Found', content: { 'application/json': { schema: ErrorV2Schema } } },
    500: {
      description: 'Internal Server Error',
      content: { 'application/json': { schema: ErrorV2Schema } },
    },
  },
  security: [{ 'Bearer-Auth': [] }],
})

export const deleteApiWebhooksWebhookIdRoute = createRoute({
  method: 'delete',
  path: '/api/webhooks/{webhook_id}',
  tags: ['Webhooks'],
  summary: 'Delete a webhook',
  description: 'Delete a webhook so that events are no longer sent to the specified URL.',
  operationId: 'deleteWebhook',
  request: {
    headers: z.object({
      Authorization: AuthorizationParamsSchema,
      'Revolut-Api-Version': RevolutApiVersion_2024_09_01MinParamsSchema,
    }),
    params: z.object({ webhook_id: WebhookIdParamsSchema }),
  },
  responses: {
    204: { description: 'No Content' },
    400: {
      description: 'Bad Request',
      content: {
        'application/json': {
          schema: ErrorV2Schema,
          example: { code: 'bad_request', message: 'Invalid request', timestamp: 1721050000000 },
        },
      },
    },
    401: {
      description: 'Unauthorized',
      content: { 'application/json': { schema: ErrorV2Schema } },
    },
    403: {
      description: 'Forbidden',
      content: {
        'application/json': {
          schema: ErrorV2Schema,
          example: {
            code: 'forbidden',
            message: 'The requested operation is forbidden',
            timestamp: 1721050063886,
          },
        },
      },
    },
    404: { description: 'Not Found', content: { 'application/json': { schema: ErrorV2Schema } } },
    422: {
      description: 'Unprocessable entity',
      content: { 'application/json': { schema: ErrorV2Schema } },
    },
    500: {
      description: 'Internal Server Error',
      content: { 'application/json': { schema: ErrorV2Schema } },
    },
  },
  security: [{ 'Bearer-Auth': [] }],
})

export const patchApiWebhooksWebhookIdRoute = createRoute({
  method: 'patch',
  path: '/api/webhooks/{webhook_id}',
  tags: ['Webhooks'],
  summary: 'Update a webhook',
  description:
    'Update the URL or events for a specific webhook.\n\nAll request body fields are optional. Only the fields provided will be updated.  ',
  operationId: 'updateWebhook',
  request: {
    headers: z.object({
      Authorization: AuthorizationParamsSchema,
      'Revolut-Api-Version': RevolutApiVersion_2024_09_01MinParamsSchema,
    }),
    params: z.object({ webhook_id: WebhookIdParamsSchema }),
    body: {
      content: {
        'application/json': {
          schema: WebhookUpdateSchema,
          examples: { webhook_update_request: ReqWebhookUpdateExample },
        },
      },
    },
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': {
          schema: WebhookV2Schema,
          examples: { updated_webhook: ResWebhookV2Example },
        },
      },
    },
    400: { description: 'Bad Request', content: { 'application/json': { schema: ErrorV2Schema } } },
    401: {
      description: 'Unauthorized',
      content: { 'application/json': { schema: ErrorV2Schema } },
    },
    403: {
      description: 'Forbidden',
      content: {
        'application/json': {
          schema: ErrorV2Schema,
          example: {
            code: 'forbidden',
            message: 'The requested operation is forbidden',
            timestamp: 1721050063886,
          },
        },
      },
    },
    404: { description: 'Not Found', content: { 'application/json': { schema: ErrorV2Schema } } },
    422: {
      description: 'Unprocessable entity',
      content: { 'application/json': { schema: ErrorV2Schema } },
    },
    500: {
      description: 'Internal Server Error',
      content: { 'application/json': { schema: ErrorV2Schema } },
    },
  },
  security: [{ 'Bearer-Auth': [] }],
})

export const postApiWebhooksWebhookIdRotateSigningSecretRoute = createRoute({
  method: 'post',
  path: '/api/webhooks/{webhook_id}/rotate-signing-secret',
  tags: ['Webhooks'],
  summary: 'Rotate a webhook signing secret',
  description:
    'Rotate the `signing_secret` for a specific webhook.\n\nThe updated signing secret is returned in the response as part of the full webhook object.\n\n:::info\nFor more information, see [Tutorials: Verify the payload signature](https://developer.revolut.com/docs/guides/merchant/monitor-and-observe/webhooks/verify-the-payload-signature).\n:::',
  operationId: 'rotateWebhookSigningSecret',
  request: {
    headers: z.object({
      Authorization: AuthorizationParamsSchema,
      'Revolut-Api-Version': RevolutApiVersion_2024_09_01MinParamsSchema,
    }),
    params: z.object({ webhook_id: WebhookIdParamsSchema }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              expiration_period: z.iso
                .duration()
                .exactOptional()
                .openapi({
                  description:
                    'The expiration period of the signing secret in the [ISO 8601 format](https://en.wikipedia.org/wiki/ISO_8601#Durations).\n\nIf defined, when the signing secret is rotated, it continues to be valid until the expiration period passes.\n\nOtherwise, it is invalidated immediately.\n\nMaximum expiration period is 7 days.',
                  example: 'PT5H30M',
                }),
            })
            .openapi({ required: [] }),
          examples: { webhook_signing_secret_rotate_request: ReqWebhookRotateSigningSecretExample },
        },
      },
    },
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': {
          schema: WebhookV2Schema,
          examples: { updated_webhook: ResWebhookV2Example },
        },
      },
    },
    400: { description: 'Bad Request', content: { 'application/json': { schema: ErrorV2Schema } } },
    401: {
      description: 'Unauthorized',
      content: { 'application/json': { schema: ErrorV2Schema } },
    },
    403: {
      description: 'Forbidden',
      content: {
        'application/json': {
          schema: ErrorV2Schema,
          example: {
            code: 'forbidden',
            message: 'The requested operation is forbidden',
            timestamp: 1721050063886,
          },
        },
      },
    },
    404: { description: 'Not Found', content: { 'application/json': { schema: ErrorV2Schema } } },
    422: {
      description: 'Unprocessable entity',
      content: { 'application/json': { schema: ErrorV2Schema } },
    },
    500: {
      description: 'Internal Server Error',
      content: { 'application/json': { schema: ErrorV2Schema } },
    },
  },
  security: [{ 'Bearer-Auth': [] }],
})

export const postApiApplePayDomainsRegisterRoute = createRoute({
  method: 'post',
  path: '/api/apple-pay/domains/register',
  tags: ['Apple Pay merchant registration'],
  summary: 'Register domain for Apple Pay',
  description:
    "Register your website's domain to accept payments via Apple Pay. \n\nBefore you call this endpoint, make sure that you have completed the following steps:\n\n1. Download the latest [domain validation file](https://assets.revolut.com/api-docs/merchant-api/files/apple-developer-merchantid-domain-association).\n1. Upload the domain validation file to your website in the following folder `/.well-known/`. For example, if your website is `example.com`, the file should be available on `example.com/.well-known/apple-developer-merchantid-domain-association`, where `apple-developer-merchantid-domain-association` indicates the name of the file.",
  operationId: 'registerDomainApplePay',
  request: {
    headers: z.object({ Authorization: AuthorizationParamsSchema }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              domain: z
                .string()
                .openapi({
                  description:
                    'Domain name of your website without the scheme (i.e. without `http://` or `https://`).',
                  example: 'revolut.com',
                }),
            })
            .openapi({ required: ['domain'] }),
          examples: {
            example_request: {
              summary: 'Example domain registration request for Apple Pay',
              value: { domain: 'revolut.com' },
            },
          },
        },
      },
    },
  },
  responses: {
    204: { description: 'Domain registered successfully' },
    400: {
      description: 'Bad Request',
      content: {
        'application/json': {
          schema: ErrorV2Schema,
          examples: {
            error_message: {
              summary: 'Error message',
              value: {
                code: 'validation',
                message: 'Exactly one value must be supplied for client_id',
                timestamp: 1721049596461,
              },
            },
          },
        },
      },
    },
    401: {
      description: 'Unauthorized',
      content: {
        'application/json': {
          schema: ErrorV2Schema,
          example: {
            code: 'unauthenticated',
            message: 'Authentication failed',
            timestamp: 1721049596461,
          },
        },
      },
    },
    403: {
      description: 'Forbidden',
      content: {
        'application/json': {
          schema: ErrorV2Schema,
          example: {
            code: 'forbidden',
            message: 'The requested operation is forbidden',
            timestamp: 1721050063886,
          },
        },
      },
    },
    422: {
      description: 'Unprocessable entity',
      content: { 'application/json': { schema: ErrorV2Schema } },
    },
    500: {
      description: 'Internal Server Error',
      content: { 'application/json': { schema: ErrorV2Schema } },
    },
  },
  security: [{ 'Bearer-Auth': [] }],
})

export const postApiApplePayDomainsUnregisterRoute = createRoute({
  method: 'post',
  path: '/api/apple-pay/domains/unregister',
  tags: ['Apple Pay merchant registration'],
  summary: 'Unregister domain for Apple Pay',
  description: "Unregister your website from Apple Pay's registered domains. ",
  operationId: 'unregisterDomainApplePay',
  request: {
    headers: z.object({
      Authorization: AuthorizationParamsSchema,
      'Revolut-Api-Version': RevolutApiVersionOptionalParamsSchema,
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              domain: z
                .string()
                .openapi({
                  description:
                    'Domain name of your website without the scheme (i.e. without `http://` or `https://`).',
                  example: 'revolut.com',
                }),
              reason: z
                .string()
                .max(1024)
                .openapi({ description: 'A short explanation why you remove the domain.' }),
            })
            .openapi({ required: ['domain', 'reason'] }),
          examples: {
            example_request: {
              summary: 'Example domain registration request for Apple Pay',
              value: { domain: 'revolut.com', reason: 'Unregister due to domain change.' },
            },
          },
        },
      },
    },
  },
  responses: {
    204: { description: 'Domain unregistered successfully' },
    400: {
      description: 'Bad Request',
      content: {
        'application/json': {
          schema: ErrorV2Schema,
          examples: {
            error_message: {
              summary: 'Error message',
              value: {
                code: 'validation',
                message: 'Exactly one value must be supplied for client_id',
                timestamp: 1721049596461,
              },
            },
          },
        },
      },
    },
    401: {
      description: 'Unauthorized',
      content: {
        'application/json': {
          schema: ErrorV2Schema,
          example: {
            code: 'unauthenticated',
            message: 'Authentication failed',
            timestamp: 1721049596461,
          },
        },
      },
    },
    403: {
      description: 'Forbidden',
      content: {
        'application/json': {
          schema: ErrorV2Schema,
          example: {
            code: 'forbidden',
            message: 'The requested operation is forbidden',
            timestamp: 1721050063886,
          },
        },
      },
    },
    422: {
      description: 'Unprocessable entity',
      content: { 'application/json': { schema: ErrorV2Schema } },
    },
    500: {
      description: 'Internal Server Error',
      content: { 'application/json': { schema: ErrorV2Schema } },
    },
  },
  security: [{ 'Bearer-Auth': [] }],
})

export const getApiSynchronousWebhooksRoute = createRoute({
  method: 'get',
  path: '/api/synchronous-webhooks',
  tags: ['Other'],
  summary: 'Retrieve a synchronous webhook list',
  description:
    'Retrieve a list of synchronous webhook objects.\n\nYou can use this endpoint to see your different address validation endpoints registered to different locations.\n\n:::info\nFor more information about locations, see: [Merchant API: Locations](https://developer.revolut.com/docs/api/merchant#tag-locations).\n:::',
  operationId: 'retrieveSynchronousWebhookList',
  request: { headers: z.object({ Authorization: AuthorizationParamsSchema }) },
  responses: {
    200: {
      description: 'Synchronous webhook list returned',
      content: {
        'application/json': {
          schema: z.array(SynchronousWebhookSchema),
          examples: {
            example_without_location: {
              summary: 'List of synchronous webhooks',
              value: [
                {
                  id: 'f6abc4df-eb48-417c-8e75-f7c6d7ad394f',
                  signing_key: 'swsk_y5z3LEHYZ9ndote3qegzWD6uL4t1lfp1',
                  url: 'https://example.com/webhooks/validate-address',
                  event_type: 'fast_checkout.validate_address',
                },
                {
                  id: '5c08dcc1-cd60-4b7d-a255-e42d24d7365c',
                  signing_key: 'swsk_VsuFcq6FIpa9gOWUu0n2WxiCbsDHIJlN',
                  url: 'https://groceries.example.com/webhooks/validate-address',
                  event_type: 'fast_checkout.validate_address',
                  location_id: 'b0ebede4-5cbc-4951-977f-70329faa8769',
                },
                {
                  id: 'dbebe6f8-4c47-4176-a94f-576d76e1d0b6',
                  signing_key: 'swsk_0TKYlzoakBgGGVvojCiRRqInMD1ufLZn',
                  url: 'https://clothes.example.com/webhooks/validate-address',
                  event_type: 'fast_checkout.validate_address',
                  location_id: '6ebd3d2b-7a51-42e4-84f4-3c513621edd3',
                },
              ],
            },
          },
        },
      },
    },
    400: { description: 'Bad Request', content: { 'application/json': { schema: ErrorV2Schema } } },
    401: { description: 'Unauthorized' },
    403: {
      description: 'Forbidden',
      content: {
        'application/json': {
          schema: ErrorV2Schema,
          example: {
            code: 'forbidden',
            message: 'The requested operation is forbidden',
            timestamp: 1721050063886,
          },
        },
      },
    },
    422: {
      description: 'Unprocessable entity',
      content: { 'application/json': { schema: ErrorV2Schema } },
    },
    500: {
      description: 'Internal Server Error',
      content: { 'application/json': { schema: ErrorV2Schema } },
    },
  },
  security: [{ 'Bearer-Auth': [] }],
})

export const postApiSynchronousWebhooksRoute = createRoute({
  method: 'post',
  path: '/api/synchronous-webhooks',
  tags: ['Other'],
  summary: 'Register address validation endpoint for Fast checkout',
  description:
    "Use this endpoint to register a URL where Revolut can send shipping address(es) from a Revolut Pay customer for validation during the [Fast checkout\nprocess](https://developer.revolut.com/docs/guides/merchant/optimise-checkout/fast-checkout).\n\nRevolut Pay can support Fast checkout for delivering goods. Once your customer selects a shipping address, Revolut needs to validate if the merchant (or their shipping partner) delivers to the address provided. This is done by contacting the merchant's backend and asking for such validation and information.\n\nIn order for your backend to support Fast checkout, you need to:\n\n1. Register an URL to handle address validation\n1. Validate the shipping address sent to your backend\n1. Respond with a JSON object containing the result of the validation\n\nAdditionally, Revolut Pay can support multiple webhooks if you have multiple stores. For more information, see:\n  - [Manage multiple stores with Fast checkout](https://developer.revolut.com/docs/guides/merchant/optimise-checkout/fast-checkout#manage-multiple-stores-with-fast-checkout)\n  - [Merchant API: Locations](https://developer.revolut.com/docs/api/merchant#tag-locations)\n\n:::note\nTo set up a webhook for tracking order completion, failure, error, etc. events, use the [Webhooks endpoints](https://developer.revolut.com/docs/api/merchant#tag-webhooks).\n:::",
  operationId: 'registerAddressValidationEndpoint',
  request: {
    headers: z.object({ Authorization: AuthorizationParamsSchema }),
    body: {
      content: {
        'application/json': {
          schema: SynchronousWebhookCreationSchema,
          examples: {
            create_webhook: {
              summary: 'Create synchronous webhook',
              value: {
                event_type: 'fast_checkout.validate_address',
                url: 'https://backend.example.com/webhooks/validate-address',
              },
            },
            create_webhook_with_location_id: {
              summary: 'Create synchronous webhook with location ID',
              value: {
                event_type: 'fast_checkout.validate_address',
                url: 'https://backend.example.com/webhooks/validate-address',
                location_id: '8d9a7125-805f-40f3-a405-bc89765db996',
              },
            },
          },
        },
      },
    },
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': {
          schema: SynchronousWebhookSchema,
          examples: {
            example_without_location: {
              summary: 'Synchronous webhook response',
              value: {
                id: 'f6abc4df-eb48-417c-8e75-f7c6d7ad394f',
                signing_key: 'swsk_y5z3LEHYZ9ndote3qegzWD6uL4t1lfp1',
                url: 'https://backend.example.com/webhooks/validate-address',
                event_type: 'fast_checkout.validate_address',
              },
            },
            example_with_location: {
              summary: 'Synchronous webhook response with location ID',
              value: {
                id: 'f6abc4df-eb48-417c-8e75-f7c6d7ad394f',
                signing_key: 'swsk_y5z3LEHYZ9ndote3qegzWD6uL4t1lfp1',
                url: 'https://backend.example.com/webhooks/validate-address',
                event_type: 'fast_checkout.validate_address',
                location_id: 'b0ebede4-5cbc-4951-977f-70329faa8769',
              },
            },
          },
        },
      },
    },
    400: { description: 'Bad Request', content: { 'application/json': { schema: ErrorV2Schema } } },
    401: { description: 'Unauthorized' },
    403: {
      description: 'Forbidden',
      content: {
        'application/json': {
          schema: ErrorV2Schema,
          example: {
            code: 'forbidden',
            message: 'The requested operation is forbidden',
            timestamp: 1721050063886,
          },
        },
      },
    },
    422: {
      description: 'Unprocessable entity',
      content: { 'application/json': { schema: ErrorV2Schema } },
    },
    500: {
      description: 'Internal Server Error',
      content: { 'application/json': { schema: ErrorV2Schema } },
    },
  },
  security: [{ 'Bearer-Auth': [] }],
})

export const deleteApiSynchronousWebhooksSynchronousWebhookIdRoute = createRoute({
  method: 'delete',
  path: '/api/synchronous-webhooks/{synchronous_webhook_id}',
  tags: ['Other'],
  summary: 'Delete a synchronous webhook',
  description: 'Delete a specific synchronous webhook registration, based on its ID.',
  operationId: 'deleteSynchronousWebhook',
  request: {
    headers: z.object({ Authorization: AuthorizationParamsSchema }),
    params: z.object({ synchronous_webhook_id: SynchronousWebhookIdParamsSchema }),
  },
  responses: {
    204: { description: 'Synchronous webhook deleted' },
    400: {
      description: 'Bad Request',
      content: {
        'application/json': {
          schema: ErrorV2Schema,
          example: { code: 'bad_request', message: 'Invalid request', timestamp: 1721050000000 },
        },
      },
    },
    401: { description: 'Unauthorized' },
    403: {
      description: 'Forbidden',
      content: {
        'application/json': {
          schema: ErrorV2Schema,
          example: {
            code: 'forbidden',
            message: 'The requested operation is forbidden',
            timestamp: 1721050063886,
          },
        },
      },
    },
    404: { description: 'Not Found', content: { 'application/json': { schema: ErrorV2Schema } } },
    422: {
      description: 'Unprocessable entity',
      content: { 'application/json': { schema: ErrorV2Schema } },
    },
    500: {
      description: 'Internal Server Error',
      content: { 'application/json': { schema: ErrorV2Schema } },
    },
  },
  security: [{ 'Bearer-Auth': [] }],
})

export const getApiLocationsRoute = createRoute({
  method: 'get',
  path: '/api/locations',
  tags: ['Locations'],
  summary: 'Retrieve location list',
  description:
    'Retrieve a list of locations registered for the merchant.\n\n:::note [Default behavior]\nWithout the `type` query parameter, this endpoint returns only **online** locations by default. To retrieve physical locations, you must explicitly specify `type=physical` in the query parameters.\n:::',
  operationId: 'retrieveLocationList',
  request: {
    headers: z.object({ Authorization: AuthorizationParamsSchema }),
    query: z.object({ type: LocationTypeParamsSchema }),
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': {
          schema: z.array(LocationSchema),
          examples: {
            list_of_locations: {
              summary: 'Location list',
              value: [
                {
                  id: '8d9a7125-805f-40f3-a405-bc89765db996',
                  name: 'Grocery website',
                  type: 'online',
                  details: { domain: 'groceries.example.com' },
                },
                {
                  id: '066223df-d5a8-42f0-b3ce-688c7a76f9a8',
                  name: 'Cars website',
                  type: 'online',
                  details: { domain: 'cars.example.com' },
                },
                {
                  id: '299050a4-cc7a-44b0-8b2b-7cd1e335ef38',
                  name: 'Example Street Store',
                  type: 'physical',
                  details: {
                    address: {
                      street_line_1: '123 Example Street',
                      city: 'Example city',
                      postcode: '12345',
                      country_code: 'GB',
                    },
                    geo_location: { lat: 12.3456, lon: -12.3456 },
                    opening_hours: {
                      monday: [
                        { from: '09:00', to: '15:00' },
                        { from: '16:00', to: '18:00' },
                      ],
                      tuesday: [
                        { from: '10:00', to: '13:00' },
                        { from: '16:00', to: '18:00' },
                      ],
                    },
                  },
                },
              ],
            },
          },
        },
      },
    },
    401: { description: 'Unauthorized' },
    403: {
      description: 'Forbidden',
      content: {
        'application/json': {
          schema: ErrorV2Schema,
          example: {
            code: 'forbidden',
            message: 'The requested operation is forbidden',
            timestamp: 1721050063886,
          },
        },
      },
    },
    422: {
      description: 'Unprocessable entity',
      content: { 'application/json': { schema: ErrorV2Schema } },
    },
    500: {
      description: 'Internal Server Error',
      content: { 'application/json': { schema: ErrorV2Schema } },
    },
  },
  security: [{ 'Bearer-Auth': [] }],
})

export const postApiLocationsRoute = createRoute({
  method: 'post',
  path: '/api/locations',
  tags: ['Locations'],
  summary: 'Create a location',
  description: 'Create a `Location` object. Supports `online` and `physical` location types.',
  operationId: 'createLocation',
  request: {
    headers: z.object({ Authorization: AuthorizationParamsSchema }),
    body: {
      content: {
        'application/json': {
          schema: LocationCreationSchema,
          examples: {
            example_online_location: ReqLocationOnlineExample,
            example_physical_location: ReqLocationPhysicalExample,
          },
        },
      },
    },
  },
  responses: {
    201: {
      description: 'Location created',
      content: {
        'application/json': {
          schema: LocationSchema,
          examples: {
            example_online_location: ResLocationOnlineExample,
            example_physical_location: ResLocationPhysicalExample,
          },
        },
      },
    },
    400: { description: 'Bad Request', content: { 'application/json': { schema: ErrorV2Schema } } },
    401: {
      description: 'Unauthorized',
      content: { 'application/json': { schema: ErrorV2Schema } },
    },
    403: {
      description: 'Forbidden',
      content: {
        'application/json': {
          schema: ErrorV2Schema,
          example: {
            code: 'forbidden',
            message: 'The requested operation is forbidden',
            timestamp: 1721050063886,
          },
        },
      },
    },
    404: { description: 'Not Found', content: { 'application/json': { schema: ErrorV2Schema } } },
    422: {
      description: 'Unprocessable entity',
      content: { 'application/json': { schema: ErrorV2Schema } },
    },
    500: {
      description: 'Internal Server Error',
      content: { 'application/json': { schema: ErrorV2Schema } },
    },
  },
  security: [{ 'Bearer-Auth': [] }],
})

export const getApiLocationsLocationIdRoute = createRoute({
  method: 'get',
  path: '/api/locations/{location_id}',
  tags: ['Locations'],
  summary: 'Retrieve a location',
  description: 'Retrieve details of a specific location, based on its ID.',
  operationId: 'retrieveLocation',
  request: {
    headers: z.object({ Authorization: AuthorizationParamsSchema }),
    params: z.object({ location_id: LocationIdParamsSchema }),
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': {
          schema: LocationSchema,
          examples: {
            example_online_location: ResLocationOnlineExample,
            example_physical_location: ResLocationPhysicalExample,
          },
        },
      },
    },
    401: {
      description: 'Unauthorized',
      content: { 'application/json': { schema: ErrorV2Schema } },
    },
    404: { description: 'Not Found', content: { 'application/json': { schema: ErrorV2Schema } } },
    500: {
      description: 'Internal Server Error',
      content: { 'application/json': { schema: ErrorV2Schema } },
    },
  },
  security: [{ 'Bearer-Auth': [] }],
})

export const deleteApiLocationsLocationIdRoute = createRoute({
  method: 'delete',
  path: '/api/locations/{location_id}',
  tags: ['Locations'],
  summary: 'Delete a location',
  description: 'Delete a specific location, based on its ID.',
  operationId: 'deleteLocation',
  request: {
    headers: z.object({ Authorization: AuthorizationParamsSchema }),
    params: z.object({ location_id: LocationIdParamsSchema }),
  },
  responses: {
    204: { description: 'Location deleted' },
    400: {
      description: 'Bad Request',
      content: {
        'application/json': {
          schema: ErrorV2Schema,
          example: { code: 'bad_request', message: 'Invalid request', timestamp: 1721050000000 },
        },
      },
    },
    401: {
      description: 'Unauthorized',
      content: { 'application/json': { schema: ErrorV2Schema } },
    },
    403: {
      description: 'Forbidden',
      content: {
        'application/json': {
          schema: ErrorV2Schema,
          example: {
            code: 'forbidden',
            message: 'The requested operation is forbidden',
            timestamp: 1721050063886,
          },
        },
      },
    },
    404: { description: 'Not Found', content: { 'application/json': { schema: ErrorV2Schema } } },
    422: {
      description: 'Unprocessable entity',
      content: { 'application/json': { schema: ErrorV2Schema } },
    },
    500: {
      description: 'Internal Server Error',
      content: { 'application/json': { schema: ErrorV2Schema } },
    },
  },
  security: [{ 'Bearer-Auth': [] }],
})

export const patchApiLocationsLocationIdRoute = createRoute({
  method: 'patch',
  path: '/api/locations/{location_id}',
  tags: ['Locations'],
  summary: 'Update a location',
  description:
    "Update details of a specific location, based on its ID. \n\nOnly the fields provided in the request will be updated. Any omitted fields will retain their current values.\n\n:::note\nThe value of the location's `type` parameter cannot be updated.\n:::",
  operationId: 'updateLocation',
  request: {
    headers: z.object({ Authorization: AuthorizationParamsSchema }),
    params: z.object({ location_id: LocationIdParamsSchema }),
    body: {
      content: {
        'application/json': {
          schema: LocationUpdateSchema,
          examples: {
            online_location: {
              summary: 'Online location example',
              value: {
                name: 'Cars website - Name update',
                details: { domain: 'cars.example.com' },
              },
            },
            physical_location: {
              summary: 'Physical location example',
              value: {
                name: 'Example Street Store',
                details: {
                  opening_hours: {
                    monday: [{ from: '10:00', to: '18:00' }],
                    wednesday: [{ from: '11:00', to: '18:00' }],
                  },
                },
              },
            },
          },
        },
      },
    },
  },
  responses: {
    200: {
      description: 'Location updated',
      content: {
        'application/json': {
          schema: LocationSchema,
          examples: {
            online_location: {
              summary: 'Online location example',
              value: {
                id: '8d9a7125-805f-40f3-a405-bc89765db996',
                name: 'Cars website - Name update',
                type: 'online',
                details: { domain: 'cars.example.com' },
              },
            },
            physical_location: {
              summary: 'Physical location example',
              value: {
                id: '299050a4-cc7a-44b0-8b2b-7cd1e335ef38',
                name: 'Example Street Store',
                type: 'physical',
                details: {
                  address: {
                    street_line_1: '123 Example Street',
                    city: 'Example city',
                    postcode: '12345',
                    country_code: 'GB',
                  },
                  geo_location: { lat: 12.3456, lon: -12.3456 },
                  opening_hours: {
                    monday: [{ from: '10:00', to: '18:00' }],
                    tuesday: [
                      { from: '10:00', to: '13:00' },
                      { from: '16:00', to: '18:00' },
                    ],
                    wednesday: [{ from: '11:00', to: '18:00' }],
                  },
                },
              },
            },
          },
        },
      },
    },
    400: { description: 'Bad Request', content: { 'application/json': { schema: ErrorV2Schema } } },
    401: {
      description: 'Unauthorized',
      content: { 'application/json': { schema: ErrorV2Schema } },
    },
    403: {
      description: 'Forbidden',
      content: {
        'application/json': {
          schema: ErrorV2Schema,
          example: {
            code: 'forbidden',
            message: 'The requested operation is forbidden',
            timestamp: 1721050063886,
          },
        },
      },
    },
    404: { description: 'Not Found', content: { 'application/json': { schema: ErrorV2Schema } } },
    422: {
      description: 'Unprocessable entity',
      content: { 'application/json': { schema: ErrorV2Schema } },
    },
    500: {
      description: 'Internal Server Error',
      content: { 'application/json': { schema: ErrorV2Schema } },
    },
  },
  security: [{ 'Bearer-Auth': [] }],
})

export const getApiTerminalsRoute = createRoute({
  method: 'get',
  path: '/api/terminals',
  tags: ['Terminals'],
  summary: 'Retrieve terminal list',
  description:
    'Retrieve a list of Revolut Terminal devices available to the merchant.\n\nThis endpoint is primarily used for push payments to Revolut Terminal integration, allowing POS systems to discover available terminals at a specific location and in the correct operation mode.\n\n:::tip\nFor push payments integration, use the `operation_mode=pos` query parameter to filter only terminals in **Pay at Counter** mode that are ready to receive payment intents.\n:::\n\n:::info\nFor more information about integration, see: [Push payments to Revolut Terminal](https://developer.revolut.com/docs/guides/merchant/accept-payments/in-person-payments/terminal/push-payments).\n:::',
  operationId: 'retrieveTerminalList',
  request: {
    headers: z.object({
      Authorization: AuthorizationParamsSchema,
      'Revolut-Api-Version': RevolutApiVersionOptionalParamsSchema,
    }),
    query: z.object({
      operation_mode: OperationModeParamsSchema,
      location_id: LocationIdQueryParamsSchema,
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': {
          schema: TerminalsResponseSchema,
          examples: { terminals_list: ResTerminalsListExample },
        },
      },
    },
    400: { description: 'Bad Request', content: { 'application/json': { schema: ErrorV2Schema } } },
    401: {
      description: 'Unauthorized',
      content: { 'application/json': { schema: ErrorV2Schema } },
    },
    500: {
      description: 'Internal Server Error',
      content: { 'application/json': { schema: ErrorV2Schema } },
    },
  },
  security: [{ 'Bearer-Auth': [] }],
})

export const postApiOrdersOrderIdPaymentIntentsRoute = createRoute({
  method: 'post',
  path: '/api/orders/{order_id}/payment-intents',
  tags: ['Payment intents'],
  summary: 'Create a payment intent',
  description:
    'Create a payment intent to push a payment request to a specific Revolut Terminal device.\n\nThis endpoint is used in push payments to Revolut Terminal integration, where a POS system sends payment requests to physical terminal devices. The terminal must be in Pay at Counter mode and assigned to the same location as the order.\n\n**Requirements:**\n- Order must be created with `channel: "pos"` and include a `location_id`\n- Terminal must be online, in `pos` operation mode, and assigned to the same location\n- Amount must match the order amount\n\n**What happens next:**\n- The payment request appears on the Revolut Terminal screen\n- Customer presents their card or device to complete payment\n- You should poll the payment intent status until it reaches a final state (`completed`, `cancelled`, or `failed`)\n- When the payment intent reaches `completed` state, use the returned `payment_id` to retrieve the final payment status\n\n:::info\nFor the complete push payments flow, see: [Push payments to Revolut Terminal](https://developer.revolut.com/docs/guides/merchant/accept-payments/in-person-payments/terminal/push-payments).\n:::',
  operationId: 'createPaymentIntent',
  request: {
    headers: z.object({
      Authorization: AuthorizationParamsSchema,
      'Revolut-Api-Version': RevolutApiVersionOptionalParamsSchema,
    }),
    params: z.object({ order_id: OrderIdParamsSchema }),
    body: {
      content: {
        'application/json': {
          schema: PaymentIntentCreationSchema,
          examples: { create_payment_intent: ReqPaymentIntentExample },
        },
      },
      required: true,
    },
  },
  responses: {
    201: {
      description: 'Payment intent created',
      content: {
        'application/json': {
          schema: PaymentIntentSchema,
          examples: { payment_intent_pending: ResPaymentIntentPendingExample },
        },
      },
    },
    400: { description: 'Bad Request', content: { 'application/json': { schema: ErrorV2Schema } } },
    401: {
      description: 'Unauthorized',
      content: { 'application/json': { schema: ErrorV2Schema } },
    },
    403: {
      description: 'Forbidden',
      content: {
        'application/json': {
          schema: ErrorV2Schema,
          example: {
            code: 'forbidden',
            message: 'The requested operation is forbidden',
            timestamp: 1721050063886,
          },
        },
      },
    },
    404: { description: 'Not Found', content: { 'application/json': { schema: ErrorV2Schema } } },
    409: {
      description: 'Conflict',
      content: {
        'application/json': {
          schema: ErrorV2Schema,
          example: {
            code: 'conflict',
            message: 'The request conflicts with the current state of the resource',
            timestamp: 1721050000000,
          },
        },
      },
    },
    422: {
      description: 'Unprocessable entity',
      content: { 'application/json': { schema: ErrorV2Schema } },
    },
    500: {
      description: 'Internal Server Error',
      content: { 'application/json': { schema: ErrorV2Schema } },
    },
  },
  security: [{ 'Bearer-Auth': [] }],
})

export const getApiPaymentIntentsPaymentIntentIdRoute = createRoute({
  method: 'get',
  path: '/api/payment-intents/{payment_intent_id}',
  tags: ['Payment intents'],
  summary: 'Retrieve a payment intent',
  description:
    'Retrieve the current state and details of a payment intent.\n\nThis endpoint is used to poll the payment intent status after pushing a payment request to a Revolut Terminal. You should poll this endpoint repeatedly until the payment intent reaches a final state.\n\n**Payment intent states:**\n\n| State | Description |\n|-------|-------------|\n| `pending` | Payment intent created and sent to terminal, customer has not yet started interacting |\n| `processing` | Customer is actively interacting with the terminal (e.g., inserting card, entering PIN) |\n| `completed` | Payment authorisation is complete, response includes a `payment_id` that you should use to [retrieve the final payment status](https://developer.revolut.com/docs/api/merchant#retrieve-payment-details) |\n| `cancelled` | Payment intent was cancelled (by your system or by the customer on the terminal) |\n| `failed` | Payment intent failed due to technical issues (e.g., timeout, terminal became unavailable) |\n\n:::tip [Polling strategy]\n- Poll every second while the state is `pending` or `processing`\n- Set a reasonable timeout (e.g., 60 seconds) to handle cases where the customer abandons the payment\n:::\n\n:::info\nFor the complete push payments flow, see: [Push payments to Revolut Terminal](https://developer.revolut.com/docs/guides/merchant/accept-payments/in-person-payments/terminal/push-payments).\n:::',
  operationId: 'retrievePaymentIntent',
  request: {
    headers: z.object({
      Authorization: AuthorizationParamsSchema,
      'Revolut-Api-Version': RevolutApiVersionOptionalParamsSchema,
    }),
    params: z.object({ payment_intent_id: PaymentIntentIdParamsSchema }),
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': {
          schema: PaymentIntentSchema,
          examples: {
            payment_intent_pending: ResPaymentIntentPendingExample,
            payment_intent_processing: ResPaymentIntentProcessingExample,
            payment_intent_completed: ResPaymentIntentCompletedExample,
            payment_intent_cancelled: ResPaymentIntentCancelledExample,
            payment_intent_failed: ResPaymentIntentFailedExample,
          },
        },
      },
    },
    401: {
      description: 'Unauthorized',
      content: { 'application/json': { schema: ErrorV2Schema } },
    },
    404: { description: 'Not Found', content: { 'application/json': { schema: ErrorV2Schema } } },
    500: {
      description: 'Internal Server Error',
      content: { 'application/json': { schema: ErrorV2Schema } },
    },
  },
  security: [{ 'Bearer-Auth': [] }],
})

export const postApiPaymentIntentsPaymentIntentIdCancelRoute = createRoute({
  method: 'post',
  path: '/api/payment-intents/{payment_intent_id}/cancel',
  tags: ['Payment intents'],
  summary: 'Cancel a payment intent',
  description:
    "Cancel a payment intent while it's still in `pending` state, before the customer has completed the payment.\n\nThis is useful if the customer changes their mind or if there's an issue with the order before payment is completed.\n\n:::warning\n**Requirements:**\n- Payment intent must be in `pending` state\n- Cannot cancel payment intents that are already `completed`, `cancelled`, or `failed`\n:::\n\n:::info\nFor the complete push payments flow, see: [Push payments to Revolut Terminal](https://developer.revolut.com/docs/guides/merchant/accept-payments/in-person-payments/terminal/push-payments).\n:::",
  operationId: 'cancelPaymentIntent',
  request: {
    headers: z.object({
      Authorization: AuthorizationParamsSchema,
      'Revolut-Api-Version': RevolutApiVersionOptionalParamsSchema,
    }),
    params: z.object({ payment_intent_id: PaymentIntentIdParamsSchema }),
  },
  responses: {
    200: {
      description: 'Payment intent cancelled',
      content: {
        'application/json': {
          schema: PaymentIntentSchema,
          examples: { payment_intent_cancelled: ResPaymentIntentCancelledExample },
        },
      },
    },
    400: { description: 'Bad Request', content: { 'application/json': { schema: ErrorV2Schema } } },
    401: {
      description: 'Unauthorized',
      content: { 'application/json': { schema: ErrorV2Schema } },
    },
    403: {
      description: 'Forbidden',
      content: {
        'application/json': {
          schema: ErrorV2Schema,
          example: {
            code: 'forbidden',
            message: 'The requested operation is forbidden',
            timestamp: 1721050063886,
          },
        },
      },
    },
    404: { description: 'Not Found', content: { 'application/json': { schema: ErrorV2Schema } } },
    422: {
      description: 'Unprocessable entity',
      content: { 'application/json': { schema: ErrorV2Schema } },
    },
    500: {
      description: 'Internal Server Error',
      content: { 'application/json': { schema: ErrorV2Schema } },
    },
  },
  security: [{ 'Bearer-Auth': [] }],
})

export const webhookEventPostWebhook = {
  method: 'post',
  path: '/webhookEvent',
  tags: ['Webhooks'],
  summary: 'Webhook event',
  description:
    'The following webhook event payload is sent as an HTTP POST request to the `url` registered via the [Create a webhook](https://developer.revolut.com/docs/api/merchant#create-webhook) operation.\n\nThe delivery of the webhook events happen asynchronously, based on the events you subscribed to.\n\nRefund orders can take up to 2 days to reach a final state. If you process refunds, keep handling webhook events for refund orders for at least that window after you create the refund.\n\n:::info\nFor more information, see: [Use webhooks to track order and payment lifecycle](https://developer.revolut.com/docs/guides/merchant/monitor-and-observe/webhooks/using-webhooks).\n:::\n\n### IP allowlisting\n\nTo ensure secure delivery of webhook events, please allowlist the following IP addresses from which the events originate:\n\n| Environment | Webhook IP addresses |\n|-------------|---------------------|\n| Production  | `35.246.21.235`, `34.89.70.170` |\n| Sandbox     | `35.242.130.242`, `35.242.162.241` |',
  operationId: 'webhookEvent',
  request: {
    headers: z.object({
      'Revolut-Request-Timestamp': RevolutRequestTimestampParamsSchema,
      'Revolut-Signature': RevolutSignatureParamsSchema,
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .xor([
              WebhookOrderEventSchema,
              WebhookSubscriptionEventSchema,
              WebhookPayoutEventSchema,
              WebhookDisputeEventSchema,
            ])
            .openapi({
              discriminator: {
                propertyName: 'event',
                mapping: {
                  'Order or payment event': '#/components/schemas/Webhook-Order-Event',
                  Subscription: '#/components/schemas/Webhook-Subscription-Event',
                  'Payout event': '#/components/schemas/Webhook-Payout-Event',
                  'Dispute event': '#/components/schemas/Webhook-Dispute-Event',
                },
              },
            }),
          examples: {
            order_event: {
              summary: 'Webhook event related to an order or payment',
              value: {
                event: 'ORDER_COMPLETED',
                order_id: '6634c172-3398-ac93-aee9-50de0282e3ac',
                merchant_order_ext_ref: 'Example reference #123',
              },
            },
            subscription_event: {
              summary: 'Webhook event related to a subscription',
              value: {
                event: 'SUBSCRIPTION_INITIATED',
                subscription_id: '550e8400-e29b-41d4-a716-446655440000',
                external_reference: 'ext-ref-12345',
              },
            },
            incremental_auth_authorised: {
              summary: 'Webhook event for successful incremental authorisation',
              value: {
                event: 'ORDER_INCREMENTAL_AUTHORISATION_AUTHORISED',
                order_id: '6634c172-3398-ac93-aee9-50de0282e3ac',
                incremental_authorisation_ext_reference: 'CHG-67890',
              },
            },
            incremental_auth_declined: {
              summary: 'Webhook event for declined incremental authorisation',
              value: {
                event: 'ORDER_INCREMENTAL_AUTHORISATION_DECLINED',
                order_id: '6634c172-3398-ac93-aee9-50de0282e3ac',
                incremental_authorisation_ext_reference: 'CHG-67891',
              },
            },
            incremental_auth_failed: {
              summary: 'Webhook event for failed incremental authorisation',
              value: {
                event: 'ORDER_INCREMENTAL_AUTHORISATION_FAILED',
                order_id: '6634c172-3398-ac93-aee9-50de0282e3ac',
                incremental_authorisation_ext_reference: 'CHG-67892',
              },
            },
            authorisation_started: {
              summary: 'Webhook event for payment authorisation started (SEPA Direct Debit)',
              value: {
                event: 'ORDER_PAYMENT_AUTHORISATION_STARTED',
                order_id: '6634c172-3398-ac93-aee9-50de0282e3ac',
                merchant_order_ext_ref: 'Example reference #123',
              },
            },
            payout_event: {
              summary: 'Webhook event related to a payout',
              value: {
                event: 'PAYOUT_COMPLETED',
                payout_id: '6634c172-3398-ac93-aee9-50de0282e3ac',
              },
            },
            dispute_event: {
              summary: 'Webhook event related to a dispute',
              value: {
                event: 'DISPUTE_ACTION_REQUIRED',
                dispute_id: 'ab934829-e4ba-4e7f-8a21-365cad85c763',
              },
            },
          },
        },
      },
      required: true,
    },
  },
  responses: {
    204: {
      description:
        'If the webhook event was delivered successfully, we recommend to respond with a `204` code.\n\n:::note\nYou can respond to and acknowledge the delivery of a webhook event by any HTTP response code between `200-399`.\n:::',
    },
    '4XX': {
      description:
        'If the webhook event delivery times out or the delivery of the events fails, you can respond with any HTTP `4XX` code. In this case, Revolut will retry sending the webhook event 3 more times, each with a 10-minute delay.',
    },
  },
}
