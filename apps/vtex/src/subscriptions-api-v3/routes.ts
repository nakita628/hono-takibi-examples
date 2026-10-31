import { createRoute, z } from '@hono/zod-openapi'

const PeriodicitySchema = z
  .union([z.literal(0), z.literal(1), z.literal(2), z.literal(3), z.literal(4)])
  .openapi('Periodicity')

const FrequencySchema = z
  .strictObject({
    interval: z.int32().exactOptional(),
    periodicity: PeriodicitySchema.exactOptional(),
    periodicityAsString: z.string().nullable().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('Frequency')

const FrequencyRequestSchema = z
  .strictObject({
    interval: z
      .int32()
      .openapi({
        description:
          'Time interval configured between subscription orders, which depends on the periodicity. For a `DAILY` periodicity, the value will be days, for `MONTHLY` it will be months, and so on.',
        example: 3,
      }),
    periodicity: z
      .string()
      .nullable()
      .openapi({
        description:
          'Defines the subscriptions recurrence period. The possible values are: \r\n- `DAILY` \r\n- `WEEKLY` \r\n- `MONTHLY` \r\n- `YEARLY`',
        example: 'MONTHLY',
      }),
  })
  .openapi({
    description: "Information about subscriptions' recurrence.",
    required: ['interval', 'periodicity'],
  })
  .openapi('FrequencyRequest')

const FrequencyResponseSchema = z
  .strictObject({ interval: z.int32(), periodicity: z.string().nullable() })
  .openapi({ required: ['interval', 'periodicity'], title: 'Frequency' })
  .openapi('FrequencyResponse')

const ItemAttachmentSchema = z
  .strictObject({
    content: z.record(z.string(), z.string()).nullable().exactOptional(),
    name: z.string().nullable().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ItemAttachment')

const ItemSimulationStatusSchema = z
  .union([z.literal(0), z.literal(1), z.literal(2), z.literal(3), z.literal(4)])
  .openapi('ItemSimulationStatus')

const LogisticsInfoDeliveryWindowSchema = z
  .strictObject({
    endDateUtc: z.iso.datetime({ offset: true }).exactOptional(),
    price: z
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
      .openapi({ type: 'integer', format: 'int64' }),
    startDateUtc: z.iso.datetime({ offset: true }).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('LogisticsInfoDeliveryWindow')

const LogisticsInfoSLASchema = z
  .strictObject({
    availableDeliveryWindows: z.array(LogisticsInfoDeliveryWindowSchema).nullable().exactOptional(),
    deliveryChannel: z.string().nullable().exactOptional(),
    deliveryWindows: z.array(LogisticsInfoDeliveryWindowSchema).nullable().exactOptional(),
    id: z.string().nullable().exactOptional(),
    lockTtl: z.string().nullable().exactOptional(),
    pickupPointId: z.string().nullable().exactOptional(),
    price: z.int32().exactOptional(),
    shippingEstimate: z.string().nullable().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('LogisticsInfoSLA')

const LogisticsInfoSchema = z
  .strictObject({
    addressId: z.string().nullable().exactOptional(),
    deliveryWindow: LogisticsInfoDeliveryWindowSchema.exactOptional(),
    itemIndex: z.int32().exactOptional(),
    lockTtl: z.string().nullable().exactOptional(),
    pickupId: z.string().nullable().exactOptional(),
    price: z.int32().exactOptional(),
    quantity: z
      .int32()
      .exactOptional()
      .openapi({ description: 'Amount of units in the cart.', example: 5, title: 'quantity' }),
    selectedDeliveryChannel: z.string().nullable().exactOptional(),
    selectedSla: z.string().nullable().exactOptional(),
    shippingEstimate: z.string().nullable().exactOptional(),
    slAs: z.array(LogisticsInfoSLASchema).nullable().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('LogisticsInfo')

const PriceTagSchema = z
  .strictObject({
    identifier: z.string().nullable().exactOptional(),
    isPercentual: z.boolean().exactOptional(),
    name: z.string().nullable().exactOptional(),
    rawValue: z.float64().exactOptional(),
    valueAsInt: z
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
      .openapi({ type: 'integer', format: 'int64' }),
  })
  .openapi({ required: [] })
  .openapi('PriceTag')

const OrderItemSchema = z
  .strictObject({
    attachments: z.array(ItemAttachmentSchema).nullable().exactOptional(),
    id: z.string().nullable().exactOptional(),
    isGift: z.boolean().exactOptional(),
    name: z.string().nullable().exactOptional(),
    price: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .nullable()
      .exactOptional()
      .openapi({ type: ['integer', 'null'], format: 'int64' }),
    priceTags: z.array(PriceTagSchema).nullable().exactOptional(),
    quantity: z
      .int32()
      .exactOptional()
      .openapi({ description: 'Amount of units in the cart.', example: 5, title: 'quantity' }),
    seller: z.string().nullable().exactOptional(),
    sellingPrice: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .nullable()
      .exactOptional()
      .openapi({ type: ['integer', 'null'], format: 'int64' }),
    unitMultiplier: z.float64().nullable().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('OrderItem')

const PaymentFieldSchema = z
  .strictObject({
    name: z.string().nullable().exactOptional(),
    value: z.string().nullable().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('PaymentField')

const PaymentSchema = z
  .strictObject({
    accountId: z.string().nullable().exactOptional(),
    bin: z.string().nullable().exactOptional(),
    cardNumber: z.string().nullable().exactOptional(),
    fields: z.array(PaymentFieldSchema).nullable().exactOptional(),
    group: z.string().nullable().exactOptional(),
    id: z.string().nullable().exactOptional(),
    installments: z.int32().exactOptional(),
    parentAccountId: z.string().nullable().exactOptional(),
    paymentSystem: z.string().nullable().exactOptional(),
    referenceValue: z
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
      .openapi({ type: 'integer', format: 'int64' }),
    url: z.string().nullable().exactOptional(),
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
      .exactOptional()
      .openapi({ type: 'integer', format: 'int64' }),
  })
  .openapi({ required: [] })
  .openapi('Payment')

const TransactionSchema = z
  .strictObject({
    isActive: z.boolean().exactOptional(),
    payments: z.array(PaymentSchema).nullable().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('Transaction')

const PaymentDataSchema = z
  .strictObject({
    payments: z.array(PaymentSchema).nullable().exactOptional(),
    transactions: z.array(TransactionSchema).nullable().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('PaymentData')

const PaymentMethodResponseSchema = z
  .strictObject({
    installments: z.int32().nullable().exactOptional(),
    paymentAccountId: z.string().nullable().exactOptional(),
    paymentSystem: z.string().nullable(),
  })
  .openapi({ required: ['paymentSystem'], title: 'PaymentMethod' })
  .openapi('PaymentMethodResponse')

const PaymentMethodThinRequestSchema = z
  .strictObject({
    installments: z
      .int32()
      .nullable()
      .exactOptional()
      .openapi({ description: 'Number of payment installments.', example: 3 }),
    paymentAccountId: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({
        description:
          "Data about shoppers' profiles and documents. For example, their credit card number. To obtain that information, use the endpoint [Get client profile by email](https://developers.vtex.com/docs/api-reference/checkout-api#get-/api/checkout/pub/profiles).",
        example: '340357032569595',
      }),
    paymentSystem: z
      .string()
      .nullable()
      .openapi({ description: "Payment system's ID.", example: '4' }),
  })
  .openapi({
    description: 'Object containing information about the payment method.',
    required: ['paymentSystem'],
    title: 'PaymentMethodRequest',
  })
  .openapi('PaymentMethodThinRequest')

const PurchaseDaySchema = z
  .union([
    z.literal(0),
    z.literal(1),
    z.literal(2),
    z.literal(3),
    z.literal(4),
    z.literal(5),
    z.literal(6),
    z.literal(7),
    z.literal(8),
    z.literal(9),
    z.literal(10),
    z.literal(11),
    z.literal(12),
    z.literal(13),
    z.literal(14),
    z.literal(15),
    z.literal(16),
    z.literal(17),
    z.literal(18),
    z.literal(19),
    z.literal(20),
    z.literal(21),
    z.literal(22),
    z.literal(23),
    z.literal(24),
    z.literal(25),
    z.literal(26),
    z.literal(27),
    z.literal(28),
    z.literal(29),
    z.literal(30),
    z.literal(31),
    z.literal(999),
    z.literal(-6),
    z.literal(-5),
    z.literal(-4),
    z.literal(-3),
    z.literal(-2),
    z.literal(-1),
  ])
  .openapi('PurchaseDay')

const ValidityResponseSchema = z
  .strictObject({
    begin: z.iso.datetime({ offset: true }),
    end: z.iso.datetime({ offset: true }).nullable().exactOptional(),
  })
  .openapi({ required: ['begin'], title: 'Validity' })
  .openapi('ValidityResponse')

const PlanResponseSchema = z
  .strictObject({
    frequency: FrequencyResponseSchema,
    id: z.string().nullable(),
    purchaseDay: PurchaseDaySchema,
    validity: ValidityResponseSchema,
  })
  .openapi({ required: ['frequency', 'id', 'purchaseDay', 'validity'], title: 'Plan' })
  .openapi('PlanResponse')

const ValidityRequestSchema = z
  .strictObject({
    begin: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({
        description: "Subscription's beginning date with the format `yyyy-mm-ddThh:mm:ss`.",
        example: '2022-06-10T00:00:00',
      }),
    end: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({
        description: "Subscription's ending date with the format `yyyy-mm-ddThh:mm:ss`.",
        example: '2023-06-10T00:00:00',
      }),
  })
  .openapi({
    description: 'Information about the period during which the subscription will be valid.',
    required: [],
  })
  .openapi('ValidityRequest')

const PlanThinRequestSchema = z
  .strictObject({
    frequency: FrequencyRequestSchema,
    id: z
      .string()
      .nullable()
      .openapi({ description: 'ID of the plan.', example: 'store.subscription' }),
    purchaseDay: z
      .string()
      .nullable()
      .openapi({ description: 'Day in which recurrent orders will be created.', example: '15' }),
    validity: ValidityRequestSchema.exactOptional(),
  })
  .openapi({
    description: 'Information about the plan.',
    required: ['frequency', 'id', 'purchaseDay'],
    title: 'PlanRequest',
  })
  .openapi('PlanThinRequest')

const PurchaseContextAvailableGiftResponseSchema = z
  .strictObject({
    attachments: z.array(ItemAttachmentSchema).nullable().exactOptional(),
    id: z.string().nullable().exactOptional(),
    isGift: z.boolean().exactOptional(),
    isSelected: z.boolean().exactOptional(),
    name: z.string().nullable().exactOptional(),
    price: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .nullable()
      .exactOptional()
      .openapi({ type: ['integer', 'null'], format: 'int64' }),
    priceTags: z.array(PriceTagSchema).nullable().exactOptional(),
    quantity: z
      .int32()
      .exactOptional()
      .openapi({ description: 'Amount of units in the cart.', example: 5, title: 'quantity' }),
    seller: z.string().nullable().exactOptional(),
    sellingPrice: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .nullable()
      .exactOptional()
      .openapi({ type: ['integer', 'null'], format: 'int64' }),
    unitMultiplier: z.float64().nullable().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('PurchaseContextAvailableGiftResponse')

const PurchaseContextSelectableGiftsResponseSchema = z
  .strictObject({
    availableGifts: z.array(PurchaseContextAvailableGiftResponseSchema).nullable().exactOptional(),
    availableQuantity: z.int32().exactOptional(),
    id: z.string().nullable().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('PurchaseContextSelectableGiftsResponse')

const PurchaseSettingsResponseSchema = z
  .strictObject({ currencyCode: z.string().nullable(), paymentMethod: PaymentMethodResponseSchema })
  .openapi({ required: ['currencyCode', 'paymentMethod'], title: 'PurchaseSettings' })
  .openapi('PurchaseSettingsResponse')

const PurchaseSettingsThinRequestSchema = z
  .strictObject({
    paymentMethod: PaymentMethodThinRequestSchema,
    salesChannel: z
      .string()
      .default('1')
      .openapi({
        description:
          'Sales channel (or [trade policy](https://help.vtex.com/en/tutorial/how-trade-policies-work--6Xef8PZiFm40kg2STrMkMV)) applied to the subscription being created. You can associate only one sales channel to each subscription. The default value is the main sales channel, which corresponds to `1`.',
      }),
  })
  .openapi({
    description: 'Object containing purchase settings information.',
    required: ['paymentMethod', 'salesChannel'],
    title: 'PurchaseSettingsRequest',
  })
  .openapi('PurchaseSettingsThinRequest')

const ReportResponseSchema = z
  .strictObject({
    canceled: z.boolean().exactOptional(),
    completedDate: z.iso.datetime({ offset: true }).nullable().exactOptional(),
    email: z.string().nullable().exactOptional(),
    enqueueDate: z.iso.datetime({ offset: true }).nullable().exactOptional(),
    errorCount: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .nullable()
      .exactOptional()
      .openapi({ type: ['integer', 'null'], format: 'int64' }),
    finished: z.boolean().exactOptional(),
    id: z.string().nullable().exactOptional(),
    lastErrorMessage: z.string().nullable().exactOptional(),
    lastUpdateTime: z.iso.datetime({ offset: true }).nullable().exactOptional(),
    linkToDownload: z.string().nullable().exactOptional(),
    outputType: z.string().nullable().exactOptional(),
    percentageProcessed: z
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
      .openapi({ type: 'integer', format: 'int64' }),
    recordsProcessed: z
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
      .openapi({ type: 'integer', format: 'int64', readOnly: true }),
    recordsSum: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .nullable()
      .exactOptional()
      .openapi({ type: ['integer', 'null'], format: 'int64' }),
    startDate: z.iso.datetime({ offset: true }).nullable().exactOptional(),
    statusMessage: z.string().nullable().exactOptional().openapi({ readOnly: true }),
    zipped: z.boolean().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ReportResponse')

const ShippingAddressResponseSchema = z
  .strictObject({ addressId: z.string().nullable(), addressType: z.string().nullable() })
  .openapi({ required: ['addressId', 'addressType'], title: 'Address' })
  .openapi('ShippingAddressResponse')

const ShippingEstimateSchema = z
  .strictObject({
    allItemsMatched: z.boolean().exactOptional(),
    estimate: z.string().nullable().exactOptional(),
    estimateDeliveryDate: z.iso.datetime({ offset: true }).nullable().exactOptional(),
    name: z.string().nullable().exactOptional(),
    nextPurchaseDate: z.iso.datetime({ offset: true }).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ShippingEstimate')

const SimulateMessageResponseSchema = z
  .strictObject({
    code: z.string().nullable().exactOptional(),
    status: z.string().nullable().exactOptional(),
    text: z.string().nullable().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('SimulateMessageResponse')

const SimulationItemResultSchema = z
  .strictObject({
    id: z.string().nullable().exactOptional(),
    quantity: z
      .int32()
      .exactOptional()
      .openapi({ description: 'Amount of units in the cart.', example: 5, title: 'quantity' }),
    status: ItemSimulationStatusSchema.exactOptional(),
    statusName: z.string().nullable().exactOptional(),
    unitPrice: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .nullable()
      .exactOptional()
      .openapi({ type: ['integer', 'null'], format: 'int64' }),
  })
  .openapi({ required: [] })
  .openapi('SimulationItemResult')

const TotalizationResponseSchema = z
  .strictObject({
    id: z.string().nullable().exactOptional(),
    name: z.string().nullable().exactOptional(),
    valueAsInt: z
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
      .openapi({ type: 'integer', format: 'int64' }),
  })
  .openapi({ required: [] })
  .openapi('TotalizationResponse')

const SimulateResponseSchema = z
  .strictObject({
    country: z.string().nullable().exactOptional(),
    items: z.array(OrderItemSchema).nullable().exactOptional(),
    logisticsInfo: z.array(LogisticsInfoSchema).nullable().exactOptional(),
    messages: z.array(SimulateMessageResponseSchema).nullable().exactOptional(),
    paymentData: PaymentDataSchema.exactOptional(),
    postalCode: z.string().nullable().exactOptional(),
    selectableGiftsResponse: z
      .array(PurchaseContextSelectableGiftsResponseSchema)
      .nullable()
      .exactOptional(),
    simulationItems: z.array(SimulationItemResultSchema).nullable().exactOptional(),
    totals: z.array(TotalizationResponseSchema).nullable().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('SimulateResponse')

const TotalizationSchema = z
  .strictObject({ id: z.string().nullable().exactOptional(), value: z.float64().exactOptional() })
  .openapi({ required: [] })
  .openapi('Totalization')

const SimulateResponseVOSchema = z
  .strictObject({
    shippingEstimate: ShippingEstimateSchema.exactOptional(),
    simulateResponse: SimulateResponseSchema.exactOptional(),
    simulationItems: z.array(SimulationItemResultSchema).nullable().exactOptional(),
    totals: z.array(TotalizationSchema).nullable().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('SimulateResponseVO')

const StatusSchema = z
  .union([z.literal(0), z.literal(1), z.literal(2), z.literal(3)])
  .openapi('Status')

const StorePlanSchema = z
  .strictObject({
    frequencies: z.array(FrequencySchema).nullable().exactOptional(),
    id: z.string().nullable().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('StorePlan')

const SubscriptionCycleItemContextSchema = z
  .strictObject({
    cycleCount: z.int32().exactOptional(),
    isSkipped: z.boolean().exactOptional(),
    quantity: z
      .int32()
      .exactOptional()
      .openapi({ description: 'Amount of units in the cart.', example: 5, title: 'quantity' }),
    skuId: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({ description: 'SKU ID.', example: '12', title: 'skuId' }),
    status: StatusSchema.exactOptional(),
    subscriptionItemId: z.string().nullable().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('SubscriptionCycleItemContext')

const SubscriptionCycleContextSchema = z
  .strictObject({
    addressId: z.string().nullable().exactOptional(),
    addressType: z.string().nullable().exactOptional(),
    items: z.array(SubscriptionCycleItemContextSchema).nullable().exactOptional(),
    paymentAccountId: z.string().nullable().exactOptional(),
    paymentSystem: z.string().nullable().exactOptional(),
    paymentSystemGroup: z.string().nullable().exactOptional(),
    paymentSystemName: z.string().nullable().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('SubscriptionCycleContext')

const SubscriptionCycleOrderInfoSchema = z
  .strictObject({
    orderGroup: z.string().nullable().exactOptional(),
    orderId: z.string().nullable().exactOptional(),
    paymentURL: z.string().nullable().exactOptional(),
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
      .exactOptional()
      .openapi({ type: 'integer', format: 'int64' }),
  })
  .openapi({ required: [] })
  .openapi('SubscriptionCycleOrderInfo')

const SubscriptionCycleResponseSchema = z
  .strictObject({
    context: SubscriptionCycleContextSchema.exactOptional(),
    customerEmail: z.string().nullable().exactOptional(),
    cycleCount: z.int32().exactOptional(),
    date: z.iso.datetime({ offset: true }).exactOptional(),
    id: z.string().nullable().exactOptional(),
    isInRetry: z.boolean().exactOptional(),
    lastUpdate: z.iso.datetime({ offset: true }).exactOptional(),
    message: z.string().nullable().exactOptional(),
    orderInfo: SubscriptionCycleOrderInfoSchema.exactOptional(),
    simulationItems: z.array(SimulationItemResultSchema).nullable().exactOptional(),
    status: z.string().nullable().exactOptional(),
    subscriptionId: z.string().nullable().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('SubscriptionCycleResponse')

const SubscriptionThinItemRequestSchema = z
  .strictObject({
    manualPrice: z
      .int32()
      .nullable()
      .default(null)
      .exactOptional()
      .openapi({ description: 'Manual price.', example: 40, title: 'manualPrice' }),
    quantity: z
      .int32()
      .exactOptional()
      .openapi({ description: 'Amount of units in the cart.', example: 5, title: 'quantity' }),
    skuId: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({ description: 'SKU ID.', example: '12', title: 'skuId' }),
  })
  .openapi({ required: [] })
  .openapi('SubscriptionThinItemRequest')

const ShippingAddressSchema = z
  .strictObject({
    addressId: z
      .string()
      .nullable()
      .openapi({ description: 'Shipping address ID.', example: '8109266555005' }),
    addressType: z
      .string()
      .nullable()
      .openapi({
        description: 'Type of the address. Possible values are `residential` or `pickup`.',
        example: 'residential',
      }),
  })
  .openapi({ required: ['addressId', 'addressType'], title: 'shippingAddress' })
  .openapi('ShippingAddress')

const SubscriptionGroupRequestSchema = z
  .strictObject({
    catalogAttachment: z.string().nullable().exactOptional(),
    customerEmail: z.string().nullable(),
    items: z.array(SubscriptionThinItemRequestSchema).nullable(),
    nextPurchaseDate: z.iso.datetime({ offset: true }).nullable().exactOptional(),
    plan: PlanThinRequestSchema,
    purchaseSettings: PurchaseSettingsThinRequestSchema,
    shippingAddress: ShippingAddressSchema,
    status: z.string().nullable().exactOptional(),
    title: z.string().nullable().exactOptional(),
  })
  .openapi({
    required: ['customerEmail', 'items', 'plan', 'purchaseSettings', 'shippingAddress'],
    title: 'SubscriptionRequest',
  })
  .openapi('SubscriptionGroupRequest')

const SubscriptionItemResponseSchema = z
  .strictObject({
    id: z.string().nullable(),
    isSkipped: z.boolean(),
    manualPrice: z
      .int32()
      .nullable()
      .default(null)
      .exactOptional()
      .openapi({ description: 'Manual price.', example: 40, title: 'manualPrice' }),
    originalOrderId: z.string().nullable().exactOptional(),
    quantity: z
      .int32()
      .openapi({ description: 'Amount of units in the cart.', example: 5, title: 'quantity' }),
    skuId: z.string().nullable().openapi({ description: 'SKU ID.', example: '12', title: 'skuId' }),
    status: z.string().nullable(),
  })
  .openapi({
    required: ['id', 'isSkipped', 'quantity', 'skuId', 'status'],
    title: 'SubscriptionItem',
  })
  .openapi('SubscriptionItemResponse')

const SubscriptionGroupResponseSchema = z
  .strictObject({
    createdAt: z.iso.datetime({ offset: true }),
    customerEmail: z.string().nullable(),
    customerId: z.string().nullable(),
    cycleCount: z.int32(),
    id: z.string().nullable(),
    isSkipped: z.boolean(),
    items: z.array(SubscriptionItemResponseSchema).nullable(),
    lastPurchaseDate: z.iso.datetime({ offset: true }).nullable().exactOptional(),
    lastUpdate: z.iso.datetime({ offset: true }),
    nextPurchaseDate: z.iso.datetime({ offset: true }),
    plan: PlanResponseSchema,
    purchaseSettings: PurchaseSettingsResponseSchema,
    shippingAddress: ShippingAddressResponseSchema,
    status: z.string().nullable(),
    title: z.string().nullable().exactOptional(),
  })
  .openapi({
    required: [
      'createdAt',
      'customerEmail',
      'customerId',
      'cycleCount',
      'id',
      'isSkipped',
      'items',
      'lastUpdate',
      'nextPurchaseDate',
      'plan',
      'purchaseSettings',
      'shippingAddress',
      'status',
    ],
    title: 'Subscription',
  })
  .openapi('SubscriptionGroupResponse')

const SubscriptionReportParamSchema = z
  .strictObject({
    name: z.string().nullable().exactOptional(),
    type: z.string().nullable().exactOptional(),
    value: z.any().nullable().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('SubscriptionReportParam')

const SubscriptionReportSchema = z
  .strictObject({
    account: z.string().nullable().exactOptional(),
    description: z.string().nullable().exactOptional(),
    entity: z.string().nullable().exactOptional(),
    key: z.string().nullable().exactOptional(),
    name: z.string().nullable().exactOptional(),
    params: z.array(SubscriptionReportParamSchema).nullable().exactOptional(),
    query: z.string().nullable().exactOptional(),
    requesterEmail: z.string().nullable().exactOptional(),
    schema: z.string().nullable().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('SubscriptionReport')

const SubscriptionUpdateRequestV3Schema = z
  .strictObject({
    isSkipped: z
      .boolean()
      .nullable()
      .exactOptional()
      .openapi({
        description:
          'When set as `true`, it means the shopper asked to skip the next subscription order, and when set as `false`, no subscription order is going to be skipped.',
        example: false,
      }),
    plan: PlanThinRequestSchema.exactOptional(),
    purchaseSettings: PurchaseSettingsThinRequestSchema.exactOptional(),
    shippingAddress: ShippingAddressSchema.exactOptional(),
    status: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({
        description:
          'Status to which you wish to update the subscription. The accepted values are: \r\n- `ACTIVE` \r\n- `PAUSED` \r\n- `CANCELLED` \r\n- `EXPIRED` \r\n- `MISSING`',
        example: 'ACTIVE',
      }),
    title: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({ description: 'Name of the subscription.', example: 'catFood' }),
  })
  .openapi({ title: 'SubscriptionUpdateRequest', required: [] })
  .openapi('SubscriptionUpdateRequestV3')

const UpdateItemInputSchema = z
  .strictObject({
    isSkipped: z.boolean().nullable().exactOptional(),
    manualPrice: z
      .int32()
      .nullable()
      .default(null)
      .exactOptional()
      .openapi({ description: 'Manual price.', example: 40, title: 'manualPrice' }),
    quantity: z
      .int32()
      .exactOptional()
      .openapi({ description: 'Amount of units in the cart.', example: 5, title: 'quantity' }),
    status: z.string().nullable().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('UpdateItemInput')

const SettingsSchema = z
  .object({
    defaultSla: z
      .string()
      .nullable()
      .default(null)
      .openapi({ description: 'Default delivery method.', example: null, title: 'defaultSla' }),
    deliveryChannels: z
      .array(
        z
          .string()
          .openapi({
            description:
              'Type of delivery channel. The values that are possible are: `pickupInPoint` for pickup point and `delivery` for regular delivery.',
            example: 'delivery',
            title: '',
          }),
      )
      .default([])
      .openapi({
        description: 'Array containing delivery channels.',
        example: 'delivery',
        title: 'deliveryChannels',
      }),
    executionHourInUtc: z
      .int()
      .default(0)
      .openapi({
        description: 'Indicates the time future subscription orders will be generated.',
        example: 9,
        title: 'executionHourInUtc',
      }),
    isMultipleInstallmentsEnabledOnCreation: z
      .boolean()
      .default(false)
      .openapi({
        description:
          'Defines whether or not multiple installments are enabled when a subscription is created.',
        example: false,
        title: 'isMultipleInstallmentsEnabledOnCreation',
      }),
    isMultipleInstallmentsEnabledOnUpdate: z
      .boolean()
      .default(false)
      .openapi({
        description:
          'Defines whether or not multiple installments are enabled when a subscription is updated.',
        example: false,
        title: 'isMultipleInstallmentsEnabledOnUpdate',
      }),
    isUsingV3: z
      .boolean()
      .default(false)
      .openapi({
        description: 'Indicates whether or not Subscriptions V3 is enabled.',
        example: true,
        title: 'isUsingV3',
      }),
    manualPriceAllowed: z
      .boolean()
      .default(false)
      .openapi({
        description:
          'When set to `true`, this property enables manual price configuration in subscription items. This is valid for all existing subscriptions, provided that there is a manual price configured and that `isUsingV3` is `true`.',
        example: false,
        title: 'manualPriceAllowed',
      }),
    onMigrationProcess: z
      .boolean()
      .default(false)
      .openapi({
        description:
          'Indicates whether or not the account is in the migration process to Subscriptions V3.',
        example: false,
        title: 'onMigrationProcess',
      }),
    orderCustomDataAppId: z
      .string()
      .nullable()
      .default(null)
      .openapi({
        description:
          'When filled, this field passes along the `customData` infomration in the order to the future recurrent subscription orders.',
        example: null,
        title: 'orderCustomDataAppId',
      }),
    postponeExpiration: z
      .boolean()
      .default(false)
      .openapi({
        description: 'Defines whether or not the expiration of subscriptions can be postponed.',
        example: false,
        title: 'postponeExpiration',
      }),
    randomIdGeneration: z
      .boolean()
      .default(false)
      .openapi({
        description:
          'Defines whether or not the subscription order IDs will be randomly generated.',
        example: false,
        title: 'randomIdGeneration',
      }),
    slaOption: z
      .string()
      .default('')
      .openapi({ description: 'Delivery method.', example: 'NONE', title: 'slaOption' }),
    useItemPriceFromOriginalOrder: z
      .boolean()
      .default(false)
      .openapi({
        description:
          'When set to `true`, this property enables using the manual price for each item from the original subscription order. This is only valid for new subscriptions, created from the moment this configuration is enabled. For this to work, it is mandatory that the `manualPriceAllowed` property is set to `true` and that `isUsingV3` is `true`.',
        example: false,
        title: 'useItemPriceFromOriginalOrder',
      }),
    workflowVersion: z
      .string()
      .default('')
      .openapi({ description: 'Workflow version.', example: '1.1', title: 'workflowVersion' }),
  })
  .openapi({
    description: 'Subscriptions settings',
    example: [
      {
        defaultSla: null,
        deliveryChannels: ['delivery'],
        executionHourInUtc: 9,
        isMultipleInstallmentsEnabledOnCreation: false,
        isMultipleInstallmentsEnabledOnUpdate: false,
        isUsingV3: true,
        manualPriceAllowed: false,
        onMigrationProcess: false,
        orderCustomDataAppId: null,
        postponeExpiration: false,
        randomIdGeneration: false,
        slaOption: 'NONE',
        useItemPriceFromOriginalOrder: false,
        workflowVersion: '1.1',
      },
    ],
    required: [
      'slaOption',
      'defaultSla',
      'isUsingV3',
      'onMigrationProcess',
      'executionHourInUtc',
      'workflowVersion',
      'deliveryChannels',
      'randomIdGeneration',
      'isMultipleInstallmentsEnabledOnCreation',
      'isMultipleInstallmentsEnabledOnUpdate',
      'orderCustomDataAppId',
      'postponeExpiration',
      'manualPriceAllowed',
      'useItemPriceFromOriginalOrder',
    ],
    title: '',
  })
  .openapi('Settings')

const AppKeySecurityScheme = { in: 'header', name: 'X-VTEX-API-AppKey', type: 'apiKey' }

const AppTokenSecurityScheme = { in: 'header', name: 'X-VTEX-API-AppToken', type: 'apiKey' }

export const getApiRnsPubCyclesRoute = createRoute({
  method: 'get',
  path: '/api/rns/pub/cycles',
  tags: ['Cycles'],
  summary: 'List cycles',
  description: 'List cycles filtering by some arguments.',
  request: {
    query: z.object({
      beginDate: z
        .string()
        .nullable()
        .exactOptional()
        .openapi({
          param: {
            description: 'Lower limit for the date of creation of the cycle',
            in: 'query',
            name: 'beginDate',
            schema: { nullable: true, type: 'string' },
            required: false,
          },
        }),
      endDate: z
        .string()
        .nullable()
        .exactOptional()
        .openapi({
          param: {
            description: 'Upper limit for the date of creation of the cycle',
            in: 'query',
            name: 'endDate',
            schema: { nullable: true, type: 'string' },
            required: false,
          },
        }),
      subscriptionId: z
        .string()
        .nullable()
        .exactOptional()
        .openapi({
          param: {
            description: 'Id from the subscription that generated the cycle',
            in: 'query',
            name: 'subscriptionId',
            schema: { nullable: true, type: 'string' },
            required: false,
          },
        }),
      customerEmail: z
        .string()
        .nullable()
        .exactOptional()
        .openapi({
          param: {
            description: 'Customer that owns the subscription. Defaults to the current logged user',
            in: 'query',
            name: 'customerEmail',
            schema: { nullable: true, type: 'string' },
            required: false,
          },
        }),
      status: z
        .string()
        .nullable()
        .exactOptional()
        .openapi({
          param: {
            description: 'Current cycle status',
            in: 'query',
            name: 'status',
            schema: { nullable: true, type: 'string' },
            required: false,
          },
        }),
      page: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .default(1)
        .exactOptional()
        .openapi({
          param: {
            description: 'Page used for pagination',
            in: 'query',
            name: 'page',
            schema: { default: 1, format: 'int32', type: 'integer' },
            required: false,
          },
        }),
      size: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .default(15)
        .exactOptional()
        .openapi({
          param: {
            description: 'Page size used for pagination',
            in: 'query',
            name: 'size',
            schema: { default: 15, format: 'int32', type: 'integer' },
            required: false,
          },
        }),
    }),
    headers: z.object({
      'Content-Type': z
        .string()
        .openapi({
          param: {
            description: 'Type of the content being sent.',
            in: 'header',
            name: 'Content-Type',
            required: true,
            schema: { example: 'application/json', type: 'string' },
            style: 'simple',
          },
          example: 'application/json',
        }),
      Accept: z
        .string()
        .openapi({
          param: {
            description:
              'HTTP Client Negotiation Accept Header. Indicates the types of responses the client can understand.',
            in: 'header',
            name: 'Accept',
            required: true,
            schema: { example: 'application/json', type: 'string' },
            style: 'simple',
          },
          example: 'application/json',
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': { schema: z.array(SubscriptionCycleResponseSchema) },
        'text/json': { schema: z.array(SubscriptionCycleResponseSchema) },
        'text/plain': { schema: z.array(SubscriptionCycleResponseSchema) },
      },
    },
  },
})

export const getApiRnsPubCyclesCycleIdRoute = createRoute({
  method: 'get',
  path: '/api/rns/pub/cycles/{cycleId}',
  tags: ['Cycles'],
  summary: 'Get cycle details',
  description: 'Retrieve a specific cycle by its ID.',
  request: {
    params: z.object({
      cycleId: z
        .string()
        .nullable()
        .openapi({
          param: {
            description: 'ID from the desired cycle.',
            in: 'path',
            name: 'cycleId',
            required: true,
            schema: { nullable: true, type: 'string' },
          },
        }),
    }),
    headers: z.object({
      'Content-Type': z
        .string()
        .openapi({
          param: {
            description: 'Type of the content being sent.',
            in: 'header',
            name: 'Content-Type',
            required: true,
            schema: { example: 'application/json', type: 'string' },
            style: 'simple',
          },
          example: 'application/json',
        }),
      Accept: z
        .string()
        .openapi({
          param: {
            description:
              'HTTP Client Negotiation Accept Header. Indicates the types of responses the client can understand.',
            in: 'header',
            name: 'Accept',
            required: true,
            schema: { example: 'application/json', type: 'string' },
            style: 'simple',
          },
          example: 'application/json',
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': { schema: SubscriptionCycleResponseSchema },
        'text/json': { schema: SubscriptionCycleResponseSchema },
        'text/plain': { schema: SubscriptionCycleResponseSchema },
      },
    },
  },
})

export const postApiRnsPubCyclesCycleIdRetryRoute = createRoute({
  method: 'post',
  path: '/api/rns/pub/cycles/{cycleId}/retry',
  tags: ['Cycles'],
  summary: 'Retry cycle',
  description:
    'Every subscription order has an execution count called cycle, which determines the position of an order counting from when the shopper subscribed. This endpoint reruns a cycle that is currently in error state.',
  request: {
    params: z.object({
      cycleId: z
        .string()
        .nullable()
        .openapi({
          param: {
            description: 'Id from the cycle that will be retried',
            in: 'path',
            name: 'cycleId',
            required: true,
            schema: { nullable: true, type: 'string' },
          },
        }),
    }),
    headers: z.object({
      'Content-Type': z
        .string()
        .openapi({
          param: {
            description: 'Type of the content being sent.',
            in: 'header',
            name: 'Content-Type',
            required: true,
            schema: { example: 'application/json', type: 'string' },
            style: 'simple',
          },
          example: 'application/json',
        }),
      Accept: z
        .string()
        .openapi({
          param: {
            description:
              'HTTP Client Negotiation Accept Header. Indicates the types of responses the client can understand.',
            in: 'header',
            name: 'Accept',
            required: true,
            schema: { example: 'application/json', type: 'string' },
            style: 'simple',
          },
          example: 'application/json',
        }),
    }),
  },
  responses: { 200: { description: 'OK' } },
})

export const getApiRnsPubSubscriptionsRoute = createRoute({
  method: 'get',
  path: '/api/rns/pub/subscriptions',
  tags: ['Subscriptions'],
  summary: 'List subscriptions',
  description: 'List subscriptions filtering by some arguments.',
  request: {
    query: z.object({
      customerEmail: z
        .string()
        .nullable()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Customer that owns the subscription. Defaults to the current logged user.',
            in: 'query',
            name: 'customerEmail',
            schema: { nullable: true, type: 'string' },
            required: false,
          },
        }),
      status: z
        .string()
        .nullable()
        .exactOptional()
        .openapi({
          param: {
            description: 'Current subscription status',
            in: 'query',
            name: 'status',
            schema: { nullable: true, type: 'string' },
            required: false,
          },
        }),
      addressId: z
        .string()
        .nullable()
        .exactOptional()
        .openapi({
          param: {
            description: 'Id from the address used as shipping address',
            in: 'query',
            name: 'addressId',
            schema: { nullable: true, type: 'string' },
            required: false,
          },
        }),
      paymentId: z
        .string()
        .nullable()
        .exactOptional()
        .openapi({
          param: {
            description: 'Id from the payment used as payment method',
            in: 'query',
            name: 'paymentId',
            schema: { nullable: true, type: 'string' },
            required: false,
          },
        }),
      planId: z
        .string()
        .nullable()
        .exactOptional()
        .openapi({
          param: {
            description: 'Id from the plan that the subscription belongs to',
            in: 'query',
            name: 'planId',
            schema: { nullable: true, type: 'string' },
            required: false,
          },
        }),
      nextPurchaseDate: z
        .string()
        .nullable()
        .exactOptional()
        .openapi({
          param: {
            description: 'Date for the next cycle',
            in: 'query',
            name: 'nextPurchaseDate',
            schema: { nullable: true, type: 'string' },
            required: false,
          },
        }),
      originalOrderId: z
        .string()
        .nullable()
        .exactOptional()
        .openapi({
          param: {
            description: 'Id from the order that generated the subscription',
            in: 'query',
            name: 'originalOrderId',
            schema: { nullable: true, type: 'string' },
            required: false,
          },
        }),
      page: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .default(1)
        .exactOptional()
        .openapi({
          param: {
            description: 'Page used for pagination',
            in: 'query',
            name: 'page',
            schema: { default: 1, format: 'int32', type: 'integer' },
            required: false,
          },
        }),
      size: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .default(15)
        .exactOptional()
        .openapi({
          param: {
            description: 'Page size used for pagination',
            in: 'query',
            name: 'size',
            schema: { default: 15, format: 'int32', type: 'integer' },
            required: false,
          },
        }),
    }),
    headers: z.object({
      'Content-Type': z
        .string()
        .openapi({
          param: {
            description: 'Type of the content being sent.',
            in: 'header',
            name: 'Content-Type',
            required: true,
            schema: { example: 'application/json', type: 'string' },
            style: 'simple',
          },
          example: 'application/json',
        }),
      Accept: z
        .string()
        .openapi({
          param: {
            description:
              'HTTP Client Negotiation Accept Header. Indicates the types of responses the client can understand.',
            in: 'header',
            name: 'Accept',
            required: true,
            schema: { example: 'application/json', type: 'string' },
            style: 'simple',
          },
          example: 'application/json',
        }),
    }),
  },
  responses: {
    200: {
      description: 'Requested subscriptions',
      content: {
        'application/json': { schema: z.array(SubscriptionGroupResponseSchema) },
        'text/json': { schema: z.array(SubscriptionGroupResponseSchema) },
        'text/plain': { schema: z.array(SubscriptionGroupResponseSchema) },
      },
    },
  },
})

export const postApiRnsPubSubscriptionsRoute = createRoute({
  method: 'post',
  path: '/api/rns/pub/subscriptions',
  tags: ['Subscriptions'],
  summary: 'Create subscription',
  description: 'Create a new subscription.',
  request: {
    headers: z.object({
      'Content-Type': z
        .string()
        .openapi({
          param: {
            description: 'Type of the content being sent.',
            in: 'header',
            name: 'Content-Type',
            required: true,
            schema: { example: 'application/json', type: 'string' },
            style: 'simple',
          },
          example: 'application/json',
        }),
      Accept: z
        .string()
        .openapi({
          param: {
            description:
              'HTTP Client Negotiation Accept Header. Indicates the types of responses the client can understand.',
            in: 'header',
            name: 'Accept',
            required: true,
            schema: { example: 'application/json', type: 'string' },
            style: 'simple',
          },
          example: 'application/json',
        }),
    }),
    body: {
      content: {
        'application/*+json': { schema: SubscriptionGroupRequestSchema },
        'application/json': { schema: SubscriptionGroupRequestSchema },
        'application/json-patch+json': { schema: SubscriptionGroupRequestSchema },
        'text/json': { schema: SubscriptionGroupRequestSchema },
      },
    },
  },
  responses: {
    201: {
      description: 'Subscription created',
      content: {
        'application/json': { schema: SubscriptionGroupResponseSchema },
        'text/json': { schema: SubscriptionGroupResponseSchema },
        'text/plain': { schema: SubscriptionGroupResponseSchema },
      },
    },
  },
})

export const postApiRnsPubSubscriptionsSimulateRoute = createRoute({
  method: 'post',
  path: '/api/rns/pub/subscriptions/simulate',
  tags: ['Subscriptions'],
  summary: 'Calculate the current prices for the provided subscription template',
  description:
    'Simulates an order made by subscriptions on checkout and retrieves the current price for items and shipping.',
  request: {
    headers: z.object({
      'Content-Type': z
        .string()
        .openapi({
          param: {
            description: 'Type of the content being sent.',
            in: 'header',
            name: 'Content-Type',
            required: true,
            schema: { example: 'application/json', type: 'string' },
            style: 'simple',
          },
          example: 'application/json',
        }),
      Accept: z
        .string()
        .openapi({
          param: {
            description:
              'HTTP Client Negotiation Accept Header. Indicates the types of responses the client can understand.',
            in: 'header',
            name: 'Accept',
            required: true,
            schema: { example: 'application/json', type: 'string' },
            style: 'simple',
          },
          example: 'application/json',
        }),
    }),
    body: {
      content: {
        'application/*+json': { schema: SubscriptionGroupRequestSchema },
        'application/json': { schema: SubscriptionGroupRequestSchema },
        'application/json-patch+json': { schema: SubscriptionGroupRequestSchema },
        'text/json': { schema: SubscriptionGroupRequestSchema },
      },
    },
  },
  responses: {
    200: {
      description: 'Simulation result',
      content: {
        'application/json': { schema: SimulateResponseVOSchema },
        'text/json': { schema: SimulateResponseVOSchema },
        'text/plain': { schema: SimulateResponseVOSchema },
      },
    },
  },
})

export const getApiRnsPubSubscriptionsIdRoute = createRoute({
  method: 'get',
  path: '/api/rns/pub/subscriptions/{id}',
  tags: ['Subscriptions'],
  summary: 'Get subscription details',
  description: 'Retrieve a specific subscription by its ID.',
  request: {
    params: z.object({
      id: z
        .string()
        .nullable()
        .openapi({
          param: {
            description: 'ID from the target subscription.',
            in: 'path',
            name: 'id',
            required: true,
            schema: { nullable: true, type: 'string' },
          },
        }),
    }),
    headers: z.object({
      'Content-Type': z
        .string()
        .openapi({
          param: {
            description: 'Type of the content being sent.',
            in: 'header',
            name: 'Content-Type',
            required: true,
            schema: { example: 'application/json', type: 'string' },
            style: 'simple',
          },
          example: 'application/json',
        }),
      Accept: z
        .string()
        .openapi({
          param: {
            description:
              'HTTP Client Negotiation Accept Header. Indicates the types of responses the client can understand.',
            in: 'header',
            name: 'Accept',
            required: true,
            schema: { example: 'application/json', type: 'string' },
            style: 'simple',
          },
          example: 'application/json',
        }),
    }),
  },
  responses: {
    200: {
      description: 'Requested subscription',
      content: {
        'application/json': { schema: SubscriptionGroupResponseSchema },
        'text/json': { schema: SubscriptionGroupResponseSchema },
        'text/plain': { schema: SubscriptionGroupResponseSchema },
      },
    },
  },
})

export const patchApiRnsPubSubscriptionsIdRoute = createRoute({
  method: 'patch',
  path: '/api/rns/pub/subscriptions/{id}',
  tags: ['Subscriptions'],
  summary: 'Update subscription',
  description: 'Update a specific subscription.',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            description: 'ID from the given subscription.',
            in: 'path',
            name: 'id',
            required: true,
            schema: { example: '4002961', nullable: false, type: 'string' },
          },
          example: '4002961',
        }),
    }),
    headers: z.object({
      'Content-Type': z
        .string()
        .openapi({
          param: {
            description: 'Type of the content being sent.',
            in: 'header',
            name: 'Content-Type',
            required: true,
            schema: { example: 'application/json', type: 'string' },
            style: 'simple',
          },
          example: 'application/json',
        }),
      Accept: z
        .string()
        .openapi({
          param: {
            description:
              'HTTP Client Negotiation Accept Header. Indicates the types of responses the client can understand.',
            in: 'header',
            name: 'Accept',
            required: true,
            schema: { example: 'application/json', type: 'string' },
            style: 'simple',
          },
          example: 'application/json',
        }),
    }),
    body: {
      content: {
        'application/*+json': { schema: SubscriptionUpdateRequestV3Schema },
        'application/json': { schema: SubscriptionUpdateRequestV3Schema },
        'application/json-patch+json': { schema: SubscriptionUpdateRequestV3Schema },
        'text/json': { schema: SubscriptionUpdateRequestV3Schema },
      },
    },
  },
  responses: {
    200: {
      description: 'Subscription successfully updated',
      content: {
        'application/json': { schema: SubscriptionGroupResponseSchema },
        'text/json': { schema: SubscriptionGroupResponseSchema },
        'text/plain': { schema: SubscriptionGroupResponseSchema },
      },
    },
  },
})

export const postApiRnsPubSubscriptionsIdItemsRoute = createRoute({
  method: 'post',
  path: '/api/rns/pub/subscriptions/{id}/items',
  tags: ['Subscriptions'],
  summary: 'Add item to subscription',
  description: 'Add a new item to a given subscription.',
  request: {
    params: z.object({
      id: z
        .string()
        .nullable()
        .openapi({
          param: {
            description: 'ID from the target subscription',
            in: 'path',
            name: 'id',
            required: true,
            schema: { nullable: true, type: 'string' },
          },
        }),
    }),
    headers: z.object({
      'Content-Type': z
        .string()
        .openapi({
          param: {
            description: 'Type of the content being sent.',
            in: 'header',
            name: 'Content-Type',
            required: true,
            schema: { example: 'application/json', type: 'string' },
            style: 'simple',
          },
          example: 'application/json',
        }),
      Accept: z
        .string()
        .openapi({
          param: {
            description:
              'HTTP Client Negotiation Accept Header. Indicates the types of responses the client can understand.',
            in: 'header',
            name: 'Accept',
            required: true,
            schema: { example: 'application/json', type: 'string' },
            style: 'simple',
          },
          example: 'application/json',
        }),
    }),
    body: {
      content: {
        'application/*+json': { schema: SubscriptionThinItemRequestSchema },
        'application/json': { schema: SubscriptionThinItemRequestSchema },
        'application/json-patch+json': { schema: SubscriptionThinItemRequestSchema },
        'text/json': { schema: SubscriptionThinItemRequestSchema },
      },
    },
  },
  responses: {
    200: {
      description: 'Subscription successfully updated',
      content: {
        'application/json': { schema: SubscriptionGroupResponseSchema },
        'text/json': { schema: SubscriptionGroupResponseSchema },
        'text/plain': { schema: SubscriptionGroupResponseSchema },
      },
    },
  },
})

export const deleteApiRnsPubSubscriptionsIdItemsItemIdRoute = createRoute({
  method: 'delete',
  path: '/api/rns/pub/subscriptions/{id}/items/{itemId}',
  tags: ['Subscriptions'],
  summary: 'Remove items from a subscription.',
  description: 'Removes a specific item from a given subscription',
  request: {
    params: z.object({
      id: z
        .string()
        .nullable()
        .openapi({
          param: {
            description: 'Id from the target subscription',
            in: 'path',
            name: 'id',
            required: true,
            schema: { nullable: true, type: 'string' },
          },
        }),
      itemId: z
        .string()
        .nullable()
        .openapi({
          param: {
            description: 'Id from the subscription item that will be removed',
            in: 'path',
            name: 'itemId',
            required: true,
            schema: { nullable: true, type: 'string' },
          },
        }),
    }),
    headers: z.object({
      'Content-Type': z
        .string()
        .openapi({
          param: {
            description: 'Type of the content being sent.',
            in: 'header',
            name: 'Content-Type',
            required: true,
            schema: { example: 'application/json', type: 'string' },
            style: 'simple',
          },
          example: 'application/json',
        }),
      Accept: z
        .string()
        .openapi({
          param: {
            description:
              'HTTP Client Negotiation Accept Header. Indicates the types of responses the client can understand.',
            in: 'header',
            name: 'Accept',
            required: true,
            schema: { example: 'application/json', type: 'string' },
            style: 'simple',
          },
          example: 'application/json',
        }),
    }),
  },
  responses: { 200: { description: 'Success' } },
})

export const patchApiRnsPubSubscriptionsIdItemsItemIdRoute = createRoute({
  method: 'patch',
  path: '/api/rns/pub/subscriptions/{id}/items/{itemId}',
  tags: ['Subscriptions'],
  summary: 'Edit items on a subscription.',
  description: 'Edit a given item on a specific subscription',
  request: {
    params: z.object({
      id: z
        .string()
        .nullable()
        .openapi({
          param: {
            description: 'Id from the target subscription',
            in: 'path',
            name: 'id',
            required: true,
            schema: { nullable: true, type: 'string' },
          },
        }),
      itemId: z
        .string()
        .nullable()
        .openapi({
          param: {
            description: 'Id from the target item',
            in: 'path',
            name: 'itemId',
            required: true,
            schema: { nullable: true, type: 'string' },
          },
        }),
    }),
    headers: z.object({
      'Content-Type': z
        .string()
        .openapi({
          param: {
            description: 'Type of the content being sent.',
            in: 'header',
            name: 'Content-Type',
            required: true,
            schema: { example: 'application/json', type: 'string' },
            style: 'simple',
          },
          example: 'application/json',
        }),
      Accept: z
        .string()
        .openapi({
          param: {
            description:
              'HTTP Client Negotiation Accept Header. Indicates the types of responses the client can understand.',
            in: 'header',
            name: 'Accept',
            required: true,
            schema: { example: 'application/json', type: 'string' },
            style: 'simple',
          },
          example: 'application/json',
        }),
    }),
    body: {
      content: {
        'application/*+json': { schema: UpdateItemInputSchema },
        'application/json': { schema: UpdateItemInputSchema },
        'application/json-patch+json': { schema: UpdateItemInputSchema },
        'text/json': { schema: UpdateItemInputSchema },
      },
    },
  },
  responses: {
    200: {
      description: 'Subscription updated',
      content: {
        'application/json': { schema: SubscriptionGroupResponseSchema },
        'text/json': { schema: SubscriptionGroupResponseSchema },
        'text/plain': { schema: SubscriptionGroupResponseSchema },
      },
    },
  },
})

export const postApiRnsPubSubscriptionsIdSimulateRoute = createRoute({
  method: 'post',
  path: '/api/rns/pub/subscriptions/{id}/simulate',
  tags: ['Subscriptions'],
  summary: 'Calculate the current prices for a specific subscription',
  description:
    'Simulates an order made by the specific subscription on checkout and retrieves the current price for items and shipping.',
  request: {
    params: z.object({
      id: z
        .string()
        .nullable()
        .openapi({
          param: {
            description: 'Id from the target subscription',
            in: 'path',
            name: 'id',
            required: true,
            schema: { nullable: true, type: 'string' },
          },
        }),
    }),
    headers: z.object({
      'Content-Type': z
        .string()
        .openapi({
          param: {
            description: 'Type of the content being sent.',
            in: 'header',
            name: 'Content-Type',
            required: true,
            schema: { example: 'application/json', type: 'string' },
            style: 'simple',
          },
          example: 'application/json',
        }),
      Accept: z
        .string()
        .openapi({
          param: {
            description:
              'HTTP Client Negotiation Accept Header. Indicates the types of responses the client can understand.',
            in: 'header',
            name: 'Accept',
            required: true,
            schema: { example: 'application/json', type: 'string' },
            style: 'simple',
          },
          example: 'application/json',
        }),
    }),
  },
  responses: {
    200: {
      description: 'Simulation result',
      content: {
        'application/json': { schema: SimulateResponseVOSchema },
        'text/json': { schema: SimulateResponseVOSchema },
        'text/plain': { schema: SimulateResponseVOSchema },
      },
    },
  },
})

export const getApiRnsPubSubscriptionsSubscriptionIdConversationMessageRoute = createRoute({
  method: 'get',
  path: '/api/rns/pub/subscriptions/{subscriptionId}/conversation-message',
  tags: ['Subscriptions'],
  summary: 'Get conversation messages',
  description:
    'Retrieve all conversation messages sent to a customer regarding a given subscription.',
  request: {
    params: z.object({
      subscriptionId: z
        .string()
        .default('123456789abc')
        .openapi({
          param: {
            description: 'ID of the subscription.',
            in: 'path',
            name: 'subscriptionId',
            required: true,
            schema: { default: '123456789abc', type: 'string' },
            style: 'simple',
          },
        }),
    }),
    headers: z.object({
      'Content-Type': z
        .string()
        .openapi({
          param: {
            description: 'Type of the content being sent.',
            in: 'header',
            name: 'Content-Type',
            required: true,
            schema: { example: 'application/json', type: 'string' },
            style: 'simple',
          },
          example: 'application/json',
        }),
      Accept: z
        .string()
        .openapi({
          param: {
            description:
              'HTTP Client Negotiation Accept Header. Indicates the types of responses the client can understand.',
            in: 'header',
            name: 'Accept',
            required: true,
            schema: { example: 'application/json', type: 'string' },
            style: 'simple',
          },
          example: 'application/json',
        }),
    }),
  },
  responses: {
    200: {
      description: '',
      content: {
        'application/json': {
          schema: z.array(
            z
              .object({
                attachmentNames: z
                  .array(z.string())
                  .exactOptional()
                  .openapi({ description: 'Attachment names.' }),
                body: z
                  .string()
                  .exactOptional()
                  .openapi({ description: "HTML content of the message's body." }),
                date: z.string().exactOptional().openapi({ description: 'Date of message.' }),
                firstWords: z
                  .string()
                  .exactOptional()
                  .openapi({ description: 'First words of the message text.' }),
                from: z
                  .object({
                    aliasMaskType: z
                      .string()
                      .exactOptional()
                      .openapi({ description: 'Alias mask type.' }),
                    conversationRelatedTo: z
                      .string()
                      .exactOptional()
                      .openapi({ description: 'ID of the subscription related to the message.' }),
                    conversationSubject: z
                      .string()
                      .exactOptional()
                      .openapi({ description: 'Subject of conversation.' }),
                    email: z.string().exactOptional().openapi({ description: 'Email address.' }),
                    emailAlias: z.string().exactOptional().openapi({ description: 'Email alias.' }),
                    name: z.string().exactOptional().openapi({ description: 'Name.' }),
                    role: z.string().exactOptional().openapi({ description: 'Role.' }),
                  })
                  .exactOptional()
                  .openapi({
                    description: 'Information regarding the message sender.',
                    required: [],
                  }),
                hasAttachment: z
                  .boolean()
                  .exactOptional()
                  .openapi({
                    description: 'Indicates whether the message has at least one attachment.',
                  }),
                id: z.string().exactOptional().openapi({ description: 'Message ID' }),
                subject: z.string().exactOptional().openapi({ description: 'Message subject.' }),
                to: z
                  .array(
                    z
                      .object({
                        aliasMaskType: z
                          .string()
                          .exactOptional()
                          .openapi({ description: 'Alias mask type.' }),
                        conversationRelatedTo: z
                          .string()
                          .exactOptional()
                          .openapi({
                            description: 'ID of the subscription related to the message.',
                          }),
                        conversationSubject: z
                          .string()
                          .exactOptional()
                          .openapi({ description: 'Subject of conversation.' }),
                        email: z
                          .string()
                          .exactOptional()
                          .openapi({ description: 'Email address.' }),
                        emailAlias: z
                          .string()
                          .exactOptional()
                          .openapi({ description: 'Email alias.' }),
                        name: z.string().exactOptional().openapi({ description: 'Name.' }),
                        role: z.string().exactOptional().openapi({ description: 'Role.' }),
                      })
                      .openapi({ required: [] }),
                  )
                  .exactOptional()
                  .openapi({ description: 'Information regarding the message receivers.' }),
              })
              .openapi({ required: [] }),
          ),
          example: [
            {
              attachmentNames: ['string'],
              body: 'string',
              date: '2021-08-31T22:50:53.564Z',
              firstWords: 'string',
              from: {
                aliasMaskType: 'string',
                conversationRelatedTo: 'string',
                conversationSubject: 'string',
                email: 'string',
                emailAlias: 'string',
                name: 'string',
                role: 'string',
              },
              hasAttachment: true,
              id: 'string',
              subject: 'string',
              to: [
                {
                  aliasMaskType: 'string',
                  conversationRelatedTo: 'string',
                  conversationSubject: 'string',
                  email: 'string',
                  emailAlias: 'string',
                  name: 'string',
                  role: 'string',
                },
              ],
            },
          ],
        },
      },
    },
  },
})

export const getApiRnsPvtPlansRoute = createRoute({
  method: 'get',
  path: '/api/rns/pvt/plans',
  tags: ['Plans'],
  summary: 'List plans',
  description: 'List plans filtering by some arguments.',
  request: {
    query: z.object({
      periodicity: z
        .string()
        .nullable()
        .exactOptional()
        .openapi({
          param: {
            description: 'Filter plans by available periodicity',
            in: 'query',
            name: 'periodicity',
            schema: { nullable: true, type: 'string' },
            required: false,
          },
        }),
      interval: z
        .string()
        .nullable()
        .exactOptional()
        .openapi({
          param: {
            description: 'Filter plans by available interval',
            in: 'query',
            name: 'interval',
            schema: { nullable: true, type: 'string' },
            required: false,
          },
        }),
      page: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .default(1)
        .exactOptional()
        .openapi({
          param: {
            description: 'Page used for pagination',
            in: 'query',
            name: 'page',
            schema: { default: 1, format: 'int32', type: 'integer' },
            required: false,
          },
        }),
      size: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .default(15)
        .exactOptional()
        .openapi({
          param: {
            description: 'Page size used for pagination',
            in: 'query',
            name: 'size',
            schema: { default: 15, format: 'int32', type: 'integer' },
            required: false,
          },
        }),
    }),
    headers: z.object({
      'Content-Type': z
        .string()
        .openapi({
          param: {
            description: 'Type of the content being sent.',
            in: 'header',
            name: 'Content-Type',
            required: true,
            schema: { example: 'application/json', type: 'string' },
            style: 'simple',
          },
          example: 'application/json',
        }),
      Accept: z
        .string()
        .openapi({
          param: {
            description:
              'HTTP Client Negotiation Accept Header. Indicates the types of responses the client can understand.',
            in: 'header',
            name: 'Accept',
            required: true,
            schema: { example: 'application/json', type: 'string' },
            style: 'simple',
          },
          example: 'application/json',
        }),
    }),
  },
  responses: {
    200: {
      description: 'Requested plans',
      content: {
        'application/json': { schema: z.array(StorePlanSchema) },
        'text/json': { schema: z.array(StorePlanSchema) },
        'text/plain': { schema: z.array(StorePlanSchema) },
      },
    },
  },
})

export const getApiRnsPvtPlansIdRoute = createRoute({
  method: 'get',
  path: '/api/rns/pvt/plans/{id}',
  tags: ['Plans'],
  summary: 'Get plan details',
  description: 'This endpoint retrieves a specific plan by its ID.',
  request: {
    params: z.object({
      id: z
        .string()
        .nullable()
        .openapi({
          param: {
            description: 'Id from the desired plan',
            in: 'path',
            name: 'id',
            required: true,
            schema: { nullable: true, type: 'string' },
          },
        }),
    }),
    headers: z.object({
      'Content-Type': z
        .string()
        .openapi({
          param: {
            description: 'Type of the content being sent.',
            in: 'header',
            name: 'Content-Type',
            required: true,
            schema: { example: 'application/json', type: 'string' },
            style: 'simple',
          },
          example: 'application/json',
        }),
      Accept: z
        .string()
        .openapi({
          param: {
            description:
              'HTTP Client Negotiation Accept Header. Indicates the types of responses the client can understand.',
            in: 'header',
            name: 'Accept',
            required: true,
            schema: { example: 'application/json', type: 'string' },
            style: 'simple',
          },
          example: 'application/json',
        }),
    }),
  },
  responses: {
    200: {
      description: 'Requested plan',
      content: {
        'application/json': { schema: StorePlanSchema },
        'text/json': { schema: StorePlanSchema },
        'text/plain': { schema: StorePlanSchema },
      },
    },
  },
})

export const getApiRnsPvtReportsRoute = createRoute({
  method: 'get',
  path: '/api/rns/pvt/reports',
  tags: ['Reports'],
  summary: 'List report templates',
  description: 'List all report templates available.',
  request: {
    headers: z.object({
      'Content-Type': z
        .string()
        .openapi({
          param: {
            description: 'Type of the content being sent.',
            in: 'header',
            name: 'Content-Type',
            required: true,
            schema: { example: 'application/json', type: 'string' },
            style: 'simple',
          },
          example: 'application/json',
        }),
      Accept: z
        .string()
        .openapi({
          param: {
            description:
              'HTTP Client Negotiation Accept Header. Indicates the types of responses the client can understand.',
            in: 'header',
            name: 'Accept',
            required: true,
            schema: { example: 'application/json', type: 'string' },
            style: 'simple',
          },
          example: 'application/json',
        }),
    }),
  },
  responses: {
    200: {
      description: 'Requested report templates',
      content: {
        'application/json': { schema: z.array(SubscriptionReportSchema) },
        'text/json': { schema: z.array(SubscriptionReportSchema) },
        'text/plain': { schema: z.array(SubscriptionReportSchema) },
      },
    },
  },
})

export const postApiRnsPvtReportsReportNameDocumentsRoute = createRoute({
  method: 'post',
  path: '/api/rns/pvt/reports/{reportName}/documents',
  tags: ['Reports'],
  summary: 'Generate report',
  description:
    'This endpoint creates a new report in the format of a CSV file and sends it via email. You can generate one of the following reports: \n\n - subscriptionsWithStatus \n\n - subscriptionsScheduledBetweenDate \n\n - subscriptionsUpdatedBetweenDate \n\n - subscriptionsCreatedBetweenDate \n\n - executionsBetweenDate',
  request: {
    params: z.object({
      reportName: z
        .string()
        .nullable()
        .openapi({
          param: {
            description:
              'Name of the type of report in wish to generate. The following values are accepted: \n\n - `subscriptionsWithStatus` \n\n - `subscriptionsScheduledBetweenDate` \n\n - `subscriptionsUpdatedBetweenDate` \n\n - `subscriptionsCreatedBetweenDate` \n\n - `executionsBetweenDate`',
            in: 'path',
            name: 'reportName',
            required: true,
            schema: { nullable: true, type: 'string' },
          },
        }),
    }),
    query: z.object({
      email: z
        .string()
        .default('receiver@email.com')
        .exactOptional()
        .openapi({
          param: {
            description: 'The report is sent to the email in this field.',
            in: 'query',
            name: 'email',
            schema: { default: 'receiver@email.com', nullable: false, type: 'string' },
            required: false,
          },
        }),
      beginDate: z
        .string()
        .default('2022-09-01')
        .exactOptional()
        .openapi({
          param: {
            description:
              'Start date of the report with the format `yyyy-mm-dd`. This field is required for any type of report.',
            in: 'query',
            name: 'beginDate',
            schema: { default: '2022-09-01', type: 'string' },
            required: false,
          },
        }),
      endDate: z
        .string()
        .default('2022-10-01')
        .exactOptional()
        .openapi({
          param: {
            description:
              'End date of the report with the format `yyyy-mm-dd`. This field is required for any type of report.',
            in: 'query',
            name: 'endDate',
            schema: { default: '2022-10-01', type: 'string' },
            required: false,
          },
        }),
    }),
    headers: z.object({
      'Content-Type': z
        .string()
        .openapi({
          param: {
            description: 'Type of the content being sent.',
            in: 'header',
            name: 'Content-Type',
            required: true,
            schema: { example: 'application/json', type: 'string' },
            style: 'simple',
          },
          example: 'application/json',
        }),
      Accept: z
        .string()
        .openapi({
          param: {
            description:
              'HTTP Client Negotiation Accept Header. Indicates the types of responses the client can understand.',
            in: 'header',
            name: 'Accept',
            required: true,
            schema: { example: 'application/json', type: 'string' },
            style: 'simple',
          },
          example: 'application/json',
        }),
    }),
  },
  responses: {
    200: {
      description: 'Requested report',
      content: {
        'application/json': { schema: ReportResponseSchema },
        'text/json': { schema: ReportResponseSchema },
        'text/plain': { schema: ReportResponseSchema },
      },
    },
  },
})

export const getApiRnsPvtReportsReportNameDocumentsDocumentIdRoute = createRoute({
  method: 'get',
  path: '/api/rns/pvt/reports/{reportName}/documents/{documentId}',
  tags: ['Reports'],
  summary: 'Get report document details',
  description: 'Retrieve a specific report document by its Id.',
  request: {
    params: z.object({
      reportName: z
        .string()
        .nullable()
        .openapi({
          param: {
            description: 'Name of the report',
            in: 'path',
            name: 'reportName',
            required: true,
            schema: { nullable: true, type: 'string' },
          },
        }),
      documentId: z
        .string()
        .nullable()
        .openapi({
          param: {
            description: 'Id from the desired report document',
            in: 'path',
            name: 'documentId',
            required: true,
            schema: { nullable: true, type: 'string' },
          },
        }),
    }),
    headers: z.object({
      'Content-Type': z
        .string()
        .openapi({
          param: {
            description: 'Type of the content being sent.',
            in: 'header',
            name: 'Content-Type',
            required: true,
            schema: { example: 'application/json', type: 'string' },
            style: 'simple',
          },
          example: 'application/json',
        }),
      Accept: z
        .string()
        .openapi({
          param: {
            description:
              'HTTP Client Negotiation Accept Header. Indicates the types of responses the client can understand.',
            in: 'header',
            name: 'Accept',
            required: true,
            schema: { example: 'application/json', type: 'string' },
            style: 'simple',
          },
          example: 'application/json',
        }),
    }),
  },
  responses: {
    200: {
      description: 'Requested report document',
      content: {
        'application/json': { schema: ReportResponseSchema },
        'text/json': { schema: ReportResponseSchema },
        'text/plain': { schema: ReportResponseSchema },
      },
    },
  },
})

export const getApiRnsSettingsRoute = createRoute({
  method: 'get',
  path: '/api/rns/settings',
  tags: ['Settings'],
  summary: 'Get Subscription Settings',
  description: 'List the details of the settings of a given subscription.',
  operationId: 'GetSettings',
  request: {
    headers: z.object({
      'Content-Type': z
        .string()
        .default('application/json')
        .openapi({
          param: {
            description: 'Type of the content being sent.',
            in: 'header',
            name: 'Content-Type',
            required: true,
            schema: { default: 'application/json', type: 'string' },
            style: 'simple',
          },
        }),
      Accept: z
        .string()
        .default('application/json')
        .openapi({
          param: {
            description:
              'HTTP Client Negotiation Accept Header. Indicates the types of responses the client can understand.',
            in: 'header',
            name: 'Accept',
            required: true,
            schema: { default: 'application/json', type: 'string' },
            style: 'simple',
          },
        }),
    }),
  },
  responses: {
    200: { description: 'OK', content: { 'application/json': { schema: SettingsSchema } } },
  },
})

export const postApiRnsSettingsRoute = createRoute({
  method: 'post',
  path: '/api/rns/settings',
  tags: ['Settings'],
  summary: 'Edit Subscriptions settings',
  description: 'Edits Subscriptions settings in your store.',
  operationId: 'EditSettings',
  request: {
    headers: z.object({
      'Content-Type': z
        .string()
        .default('application/json')
        .openapi({
          param: {
            description: 'Type of the content being sent.',
            in: 'header',
            name: 'Content-Type',
            required: true,
            schema: { default: 'application/json', type: 'string' },
            style: 'simple',
          },
        }),
      Accept: z
        .string()
        .default('application/json')
        .openapi({
          param: {
            description:
              'HTTP Client Negotiation Accept Header. Indicates the types of responses the client can understand.',
            in: 'header',
            name: 'Accept',
            required: true,
            schema: { default: 'application/json', type: 'string' },
            style: 'simple',
          },
        }),
    }),
    body: {
      description: 'Request body',
      content: { 'application/json': { schema: SettingsSchema } },
      required: true,
    },
  },
  responses: {
    200: { description: 'OK', content: { 'application/json': { schema: SettingsSchema } } },
  },
})
