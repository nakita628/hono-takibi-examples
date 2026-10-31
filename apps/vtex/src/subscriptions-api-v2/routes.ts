import { createRoute, z } from '@hono/zod-openapi'

const SkuSchema = z
  .object({
    detailUrl: z.string(),
    id: z.string(),
    imageUrl: z.string(),
    name: z.string(),
    nameComplete: z.string(),
    productName: z.string(),
  })
  .openapi({
    example: {
      detailUrl: 'string',
      id: 'string',
      imageUrl: 'string',
      name: 'string',
      nameComplete: 'string',
      productName: 'string',
    },
    required: ['id', 'name', 'productName', 'imageUrl', 'detailUrl', 'nameComplete'],
    title: 'Sku',
  })
  .openapi('Sku')

const AdditemsubscriptionGroupIdRequestSchema = z
  .object({
    endpoint: z.string(),
    priceAtSubscriptionDate: z.int32(),
    quantity: z.int32(),
    sellingPrice: z.int32(),
    sku: SkuSchema,
  })
  .openapi({
    example: {
      endpoint: 'string',
      priceAtSubscriptionDate: 0,
      quantity: 0,
      sellingPrice: 0,
      sku: {
        detailUrl: 'string',
        id: 'string',
        imageUrl: 'string',
        name: 'string',
        nameComplete: 'string',
        productName: 'string',
      },
    },
    required: ['sku', 'quantity', 'priceAtSubscriptionDate', 'sellingPrice', 'endpoint'],
    title: 'Additemsubscription-groupIdRequest',
  })
  .openapi('AdditemsubscriptionGroupIdRequest')

const AdditionalComponentSchema = z
  .object({
    longName: z.string(),
    shortName: z.string(),
    types: z.array(z.string()).openapi({ description: '' }),
  })
  .openapi({
    example: { longName: 'string', shortName: 'string', types: ['string'] },
    required: ['longName', 'shortName', 'types'],
    title: 'AdditionalComponent',
  })
  .openapi('AdditionalComponent')

const FrequencySchema = z
  .object({ interval: z.int32(), periodicity: z.string() })
  .openapi({
    example: { interval: 0, periodicity: 'string' },
    required: ['periodicity', 'interval'],
    title: 'Frequency',
  })
  .openapi('Frequency')

const InsertAddressesbygroupIdRequestSchema = z
  .object({
    additionalComponents: z.array(AdditionalComponentSchema).openapi({ description: '' }),
    addressId: z.string(),
    addressName: z.string(),
    addressType: z.string(),
    city: z.string(),
    complement: z.string(),
    country: z.string(),
    formattedAddress: z.string(),
    geoCoordinate: z.array(z.int32()).openapi({ description: '' }),
    neighborhood: z.string(),
    number: z.string(),
    postalCode: z.string(),
    receiverName: z.string(),
    reference: z.string(),
    state: z.string(),
    street: z.string(),
  })
  .openapi({
    example: {
      additionalComponents: [{ longName: 'string', shortName: 'string', types: ['string'] }],
      addressId: 'string',
      addressName: 'string',
      addressType: 'string',
      city: 'string',
      complement: 'string',
      country: 'string',
      formattedAddress: 'string',
      geoCoordinate: [0],
      neighborhood: 'string',
      number: 'string',
      postalCode: 'string',
      receiverName: 'string',
      reference: 'string',
      state: 'string',
      street: 'string',
    },
    required: [
      'addressId',
      'street',
      'number',
      'complement',
      'neighborhood',
      'city',
      'state',
      'country',
      'postalCode',
      'reference',
      'formattedAddress',
      'additionalComponents',
      'geoCoordinate',
      'receiverName',
      'addressType',
      'addressName',
    ],
    title: 'InsertAddressesbygroupIdRequest',
  })
  .openapi('InsertAddressesbygroupIdRequest')

const InsertAddressesforSubscriptionRequestSchema = z
  .object({
    additionalComponents: z.string().nullable(),
    addressId: z.string(),
    addressName: z.string(),
    addressType: z.string(),
    city: z.string(),
    complement: z.string().nullable(),
    country: z.string(),
    formattedAddress: z.string().nullable(),
    geoCoordinate: z.string().nullable(),
    neighborhood: z.string(),
    number: z.string(),
    postalCode: z.string(),
    receiverName: z.string(),
    reference: z.string().nullable(),
    state: z.string(),
    street: z.string(),
  })
  .openapi({
    example: {
      additionalComponents: null,
      addressId: '1234567890',
      addressName: 'xt5353818181nhshs',
      addressType: 'residential',
      city: 'Rio de Janeiro',
      complement: null,
      country: 'BRA',
      formattedAddress: null,
      geoCoordinate: null,
      neighborhood: 'Barra da Tijuca',
      number: '1',
      postalCode: '22204-004',
      receiverName: 'Fulano',
      reference: null,
      state: 'RJ',
      street: 'Avenida do Estado',
    },
    required: [
      'addressId',
      'street',
      'number',
      'complement',
      'neighborhood',
      'city',
      'state',
      'country',
      'postalCode',
      'reference',
      'formattedAddress',
      'additionalComponents',
      'geoCoordinate',
      'receiverName',
      'addressType',
      'addressName',
    ],
    title: 'InsertAddressesforSubscriptionRequest',
  })
  .openapi('InsertAddressesforSubscriptionRequest')

const ItemSchema = z
  .object({
    endpoint: z.string(),
    priceAtSubscriptionDate: z.int32(),
    quantity: z.int32(),
    sellingPrice: z.int32(),
    sku: SkuSchema,
  })
  .openapi({
    example: {
      endpoint: 'string',
      priceAtSubscriptionDate: 0,
      quantity: 0,
      sellingPrice: 0,
      sku: {
        detailUrl: 'string',
        id: 'string',
        imageUrl: 'string',
        name: 'string',
        nameComplete: 'string',
        productName: 'string',
      },
    },
    required: ['sku', 'quantity', 'priceAtSubscriptionDate', 'sellingPrice', 'endpoint'],
    title: 'Item',
  })
  .openapi('Item')

const PropertiesSchema = z
  .object({ additionalProp1: z.string(), additionalProp2: z.string(), additionalProp3: z.string() })
  .openapi({
    example: { additionalProp1: 'string', additionalProp2: 'string', additionalProp3: 'string' },
    required: ['additionalProp1', 'additionalProp2', 'additionalProp3'],
    title: 'Properties',
  })
  .openapi('Properties')

const MetadatumSchema = z
  .object({ name: z.string(), properties: PropertiesSchema })
  .openapi({
    example: {
      name: 'string',
      properties: {
        additionalProp1: 'string',
        additionalProp2: 'string',
        additionalProp3: 'string',
      },
    },
    required: ['name', 'properties'],
    title: 'Metadatum',
  })
  .openapi('Metadatum')

const Item1Schema = z
  .object({
    SubscriptionId: z.string(),
    createdAt: z.string(),
    cycleCount: z.int32(),
    endpoint: z.string(),
    isSkipped: z.boolean(),
    lastUpdate: z.string(),
    metadata: z.array(MetadatumSchema).openapi({ description: '' }),
    originalItemIndex: z.int32(),
    originalOrderId: z.string(),
    priceAtSubscriptionDate: z.int32(),
    quantity: z.int32(),
    sellingPrice: z.int32(),
    sku: SkuSchema,
    status: z.string(),
  })
  .openapi({
    example: {
      SubscriptionId: 'string',
      createdAt: '2019-06-20T18:27:41.23Z',
      cycleCount: 0,
      endpoint: 'string',
      isSkipped: true,
      lastUpdate: '2019-06-20T18:27:41.23Z',
      metadata: [
        {
          name: 'string',
          properties: {
            additionalProp1: 'string',
            additionalProp2: 'string',
            additionalProp3: 'string',
          },
        },
      ],
      originalItemIndex: 0,
      originalOrderId: 'string',
      priceAtSubscriptionDate: 0,
      quantity: 0,
      sellingPrice: 0,
      sku: {
        detailUrl: 'string',
        id: 'string',
        imageUrl: 'string',
        name: 'string',
        nameComplete: 'string',
        productName: 'string',
      },
      status: 'ACTIVE',
    },
    required: [
      'sku',
      'quantity',
      'endpoint',
      'priceAtSubscriptionDate',
      'sellingPrice',
      'SubscriptionId',
      'cycleCount',
      'status',
      'createdAt',
      'lastUpdate',
      'originalOrderId',
      'originalItemIndex',
      'metadata',
      'isSkipped',
    ],
    title: 'Item1',
  })
  .openapi('Item1')

const PaymentMethodSchema = z
  .object({ paymentAccountId: z.string(), paymentSystem: z.string() })
  .openapi({
    example: { paymentAccountId: 'string', paymentSystem: 'string' },
    required: ['paymentSystem', 'paymentAccountId'],
    title: 'PaymentMethod',
  })
  .openapi('PaymentMethod')

const ValiditySchema = z
  .object({ begin: z.string(), end: z.string() })
  .openapi({
    example: { begin: '2019-07-04T14:40:30.819Z', end: '2019-07-04T14:40:30.819Z' },
    required: ['begin', 'end'],
    title: 'Validity',
  })
  .openapi('Validity')

const PlanSchema = z
  .object({ frequency: FrequencySchema, type: z.string(), validity: ValiditySchema })
  .openapi({
    example: {
      frequency: { interval: 0, periodicity: 'string' },
      type: 'string',
      validity: { begin: '2019-07-04T14:40:30.819Z', end: '2019-07-04T14:40:30.819Z' },
    },
    required: ['frequency', 'validity', 'type'],
    title: 'Plan',
  })
  .openapi('Plan')

const PurchaseSettingsSchema = z
  .object({
    currencyCode: z.string(),
    paymentMethod: PaymentMethodSchema,
    purchaseDay: z.string(),
    salesChannel: z.string(),
    selectedSla: z.string(),
    seller: z.string(),
  })
  .openapi({
    example: {
      currencyCode: 'string',
      paymentMethod: { paymentAccountId: 'string', paymentSystem: 'string' },
      purchaseDay: 'string',
      salesChannel: 'string',
      selectedSla: 'string',
      seller: 'string',
    },
    required: [
      'purchaseDay',
      'paymentMethod',
      'seller',
      'salesChannel',
      'selectedSla',
      'currencyCode',
    ],
    title: 'PurchaseSettings',
  })
  .openapi('PurchaseSettings')

const ShippingAddressSchema = z
  .object({
    additionalComponents: z.array(AdditionalComponentSchema).openapi({ description: '' }),
    addressId: z.string(),
    addressName: z.string(),
    addressType: z.string(),
    city: z.string(),
    complement: z.string(),
    country: z.string(),
    formattedAddress: z.string(),
    geoCoordinate: z.array(z.int32()).openapi({ description: '' }),
    neighborhood: z.string(),
    number: z.string(),
    postalCode: z.string(),
    receiverName: z.string(),
    reference: z.string(),
    state: z.string(),
    street: z.string(),
  })
  .openapi({
    example: {
      additionalComponents: [{ longName: 'string', shortName: 'string', types: ['string'] }],
      addressId: 'string',
      addressName: 'string',
      addressType: 'string',
      city: 'string',
      complement: 'string',
      country: 'string',
      formattedAddress: 'string',
      geoCoordinate: [0],
      neighborhood: 'string',
      number: 'string',
      postalCode: 'string',
      receiverName: 'string',
      reference: 'string',
      state: 'string',
      street: 'string',
    },
    required: [
      'addressId',
      'street',
      'number',
      'complement',
      'neighborhood',
      'city',
      'state',
      'country',
      'postalCode',
      'reference',
      'formattedAddress',
      'additionalComponents',
      'geoCoordinate',
      'receiverName',
      'addressType',
      'addressName',
    ],
    title: 'ShippingAddress',
  })
  .openapi('ShippingAddress')

const UpdateSubscriptionbygroupIdRequestSchema = z
  .object({
    isSkipped: z.boolean(),
    item: z.array(Item1Schema).openapi({ description: '' }),
    metadata: z.array(MetadatumSchema).openapi({ description: '' }),
    plan: PlanSchema,
    purchaseSettings: PurchaseSettingsSchema,
    shippingAddress: ShippingAddressSchema,
    status: z.string(),
  })
  .openapi({
    example: {
      isSkipped: true,
      item: [
        {
          SubscriptionId: 'string',
          createdAt: '2019-06-20T18:27:41.23Z',
          cycleCount: 0,
          endpoint: 'string',
          isSkipped: true,
          lastUpdate: '2019-06-20T18:27:41.23Z',
          metadata: [
            {
              name: 'string',
              properties: {
                additionalProp1: 'string',
                additionalProp2: 'string',
                additionalProp3: 'string',
              },
            },
          ],
          originalItemIndex: 0,
          originalOrderId: 'string',
          priceAtSubscriptionDate: 0,
          quantity: 0,
          sellingPrice: 0,
          sku: {
            detailUrl: 'string',
            id: 'string',
            imageUrl: 'string',
            name: 'string',
            nameComplete: 'string',
            productName: 'string',
          },
          status: 'ACTIVE',
        },
      ],
      metadata: [
        {
          name: 'string',
          properties: {
            additionalProp1: 'string',
            additionalProp2: 'string',
            additionalProp3: 'string',
          },
        },
      ],
      plan: {
        frequency: { interval: 0, periodicity: 'string' },
        type: 'string',
        validity: { begin: '2019-06-20T18:27:41.23Z', end: '2019-06-20T18:27:41.23Z' },
      },
      purchaseSettings: {
        currencyCode: 'string',
        paymentMethod: { paymentAccountId: 'string', paymentSystem: 'string' },
        purchaseDay: 'string',
        salesChannel: 'string',
        selectedSla: 'string',
        seller: 'string',
      },
      shippingAddress: {
        additionalComponents: [{ longName: 'string', shortName: 'string', types: ['string'] }],
        addressId: 'string',
        addressName: 'string',
        addressType: 'string',
        city: 'string',
        complement: 'string',
        country: 'string',
        formattedAddress: 'string',
        geoCoordinate: [0],
        neighborhood: 'string',
        number: 'string',
        postalCode: 'string',
        receiverName: 'string',
        reference: 'string',
        state: 'string',
        street: 'string',
      },
      status: 'string',
    },
    required: [
      'item',
      'plan',
      'purchaseSettings',
      'shippingAddress',
      'status',
      'isSkipped',
      'metadata',
    ],
    title: 'UpdateSubscriptionbygroupIdRequest',
  })
  .openapi('UpdateSubscriptionbygroupIdRequest')

const UpdateSubscriptionsbySubscriptionIdRequestSchema = z
  .object({
    isSkipped: z.boolean(),
    item: ItemSchema,
    metadata: z.array(MetadatumSchema).openapi({ description: '' }),
    plan: PlanSchema,
    purchaseSettings: PurchaseSettingsSchema,
    shippingAddress: ShippingAddressSchema,
    status: z.string(),
  })
  .openapi({
    example: {
      isSkipped: true,
      item: {
        endpoint: 'string',
        priceAtSubscriptionDate: 0,
        quantity: 0,
        sellingPrice: 0,
        sku: {
          detailUrl: 'string',
          id: 'string',
          imageUrl: 'string',
          name: 'string',
          nameComplete: 'string',
          productName: 'string',
        },
      },
      metadata: [
        {
          name: 'string',
          properties: {
            additionalProp1: 'string',
            additionalProp2: 'string',
            additionalProp3: 'string',
          },
        },
      ],
      plan: {
        frequency: { interval: 0, periodicity: 'string' },
        type: 'string',
        validity: { begin: '2019-07-04T14:40:30.819Z', end: '2019-07-04T14:40:30.819Z' },
      },
      purchaseSettings: {
        currencyCode: 'string',
        paymentMethod: { paymentAccountId: 'string', paymentSystem: 'string' },
        purchaseDay: 'string',
        salesChannel: 'string',
        selectedSla: 'string',
        seller: 'string',
      },
      shippingAddress: {
        additionalComponents: [{ longName: 'string', shortName: 'string', types: ['string'] }],
        addressId: 'string',
        addressName: 'string',
        addressType: 'string',
        city: 'string',
        complement: 'string',
        country: 'string',
        formattedAddress: 'string',
        geoCoordinate: [0],
        neighborhood: 'string',
        number: 'string',
        postalCode: 'string',
        receiverName: 'string',
        reference: 'string',
        state: 'string',
        street: 'string',
      },
      status: 'string',
    },
    required: [
      'item',
      'plan',
      'purchaseSettings',
      'shippingAddress',
      'status',
      'isSkipped',
      'metadata',
    ],
    title: 'UpdateSubscriptionsbySubscriptionIdRequest',
  })
  .openapi('UpdateSubscriptionsbySubscriptionIdRequest')

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
          .default('')
          .openapi({
            description:
              'Type of delivery channel. The values that are possible are: `pickup-in-point` for pickup point and `delivery` for regular delivery.',
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
    example: {
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

export const getReportReportStatusReportIdRoute = createRoute({
  method: 'get',
  path: '/report/reportStatus/{reportId}',
  tags: ['Report'],
  summary: 'Get report status by ID',
  description: "Retrieves the Subscription's report status, filtering by its reportId.",
  operationId: 'GetreportstatusbyID',
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
    params: z.object({
      reportId: z
        .string()
        .openapi({
          param: {
            description: 'Report ID.',
            in: 'path',
            name: 'reportId',
            required: true,
            schema: { type: 'string' },
            style: 'simple',
          },
        }),
    }),
  },
  responses: { 200: { description: 'OK', headers: z.object({}) } },
})

export const getReportSubscriptionsByDateRoute = createRoute({
  method: 'get',
  path: '/report/subscriptionsByDate',
  tags: ['Report'],
  summary: 'Retrieve Subscription report by date',
  description: 'Retrieves a report with the subscriptions created at the date interval requested',
  operationId: 'Requestreportbydate',
  request: {
    query: z.object({
      requesterEmail: z
        .string()
        .openapi({
          param: {
            description: 'Email that the report will be sent to',
            explode: true,
            in: 'query',
            name: 'requesterEmail',
            required: true,
            schema: { example: 'user@vtex.com.br', type: 'string' },
            style: 'form',
          },
          example: 'user@vtex.com.br',
        }),
      beginDate: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .openapi({
          param: {
            description: 'begin date of report interval, use format yyyyMMdd',
            explode: true,
            in: 'query',
            name: 'beginDate',
            required: true,
            schema: { example: 20190101, format: 'int32', type: 'integer' },
            style: 'form',
          },
          example: 20190101,
        }),
      endDate: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .openapi({
          param: {
            description: 'end date of report interval, use format yyyyMMdd',
            explode: true,
            in: 'query',
            name: 'endDate',
            required: true,
            schema: { example: 20190701, format: 'int32', type: 'integer' },
            style: 'form',
          },
          example: 20190701,
        }),
    }),
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
  responses: { 200: { description: 'OK', headers: z.object({}) } },
})

export const getReportSubscriptionsByStatusRoute = createRoute({
  method: 'get',
  path: '/report/subscriptionsByStatus',
  tags: ['Report'],
  summary: 'Retrieve Subscription report by Status',
  description:
    "Retrieves Subscriptions' reports, filtering by status. The report will be sent by email, to the address inserted in the API's path.",
  operationId: 'RequestreportbyStatus',
  request: {
    query: z.object({
      requesterEmail: z
        .string()
        .openapi({
          param: {
            description: 'Email that the report will be sent to',
            explode: true,
            in: 'query',
            name: 'requesterEmail',
            required: true,
            schema: { example: 'user@vtex.com.br', type: 'string' },
            style: 'form',
          },
          example: 'user@vtex.com.br',
        }),
      status: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .openapi({
          param: {
            description:
              'Binary OR of the following status: 1 - ACTIVE; 2 - PAUSED; 4 - CANCELED; 8 - EXPIRED',
            explode: true,
            in: 'query',
            name: 'status',
            required: true,
            schema: { example: 1, format: 'int32', type: 'integer' },
            style: 'form',
          },
          example: 1,
        }),
    }),
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
  responses: { 200: { description: 'OK', headers: z.object({}) } },
})

export const getReportSubscriptionsOrderByDateRoute = createRoute({
  method: 'get',
  path: '/report/subscriptionsOrderByDate',
  tags: ['Report'],
  summary: 'Retrieve Subscription report by order date',
  description:
    'Retrieves a report regarding the Subscriptions created during the date interval of orders.',
  operationId: 'Requestreportbyorderdate',
  request: {
    query: z.object({
      requesterEmail: z
        .string()
        .openapi({
          param: {
            description: 'Email that the report will be sent to',
            explode: true,
            in: 'query',
            name: 'requesterEmail',
            required: true,
            schema: { example: 'user@vtex.com.br', type: 'string' },
            style: 'form',
          },
          example: 'user@vtex.com.br',
        }),
      beginDate: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .openapi({
          param: {
            description: 'begin date of report interval, use format yyyyMMdd',
            explode: true,
            in: 'query',
            name: 'beginDate',
            required: true,
            schema: { example: 20190101, format: 'int32', type: 'integer' },
            style: 'form',
          },
          example: 20190101,
        }),
      endDate: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .openapi({
          param: {
            description: 'end date of report interval, use format yyyyMMdd',
            explode: true,
            in: 'query',
            name: 'endDate',
            required: true,
            schema: { example: 20190701, format: 'int32', type: 'integer' },
            style: 'form',
          },
          example: 20190701,
        }),
    }),
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
  responses: { 200: { description: 'OK', headers: z.object({}) } },
})

export const getReportSubscriptionsScheduledRoute = createRoute({
  method: 'get',
  path: '/report/subscriptionsScheduled',
  tags: ['Report'],
  summary: 'Retrieve Subscription report by schedule',
  description:
    'Retrieves a report regarding the Subscriptions scheduled to execute at the date interval requested',
  operationId: 'Requestreportbyschedule',
  request: {
    query: z.object({
      requesterEmail: z
        .string()
        .openapi({
          param: {
            description: 'Email that the report will be sent to',
            explode: true,
            in: 'query',
            name: 'requesterEmail',
            required: true,
            schema: { example: 'user@vtex.com.br', type: 'string' },
            style: 'form',
          },
          example: 'user@vtex.com.br',
        }),
      beginDate: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .openapi({
          param: {
            description: 'begin date of report interval, use format yyyyMMdd',
            explode: true,
            in: 'query',
            name: 'beginDate',
            required: true,
            schema: { example: 20190101, format: 'int32', type: 'integer' },
            style: 'form',
          },
          example: 20190101,
        }),
      endDate: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .openapi({
          param: {
            description: 'end date of report interval, use format yyyyMMdd',
            explode: true,
            in: 'query',
            name: 'endDate',
            required: true,
            schema: { example: 20190701, format: 'int32', type: 'integer' },
            style: 'form',
          },
          example: 20190701,
        }),
    }),
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
  responses: { 200: { description: 'OK', headers: z.object({}) } },
})

export const getReportSubscriptionsUpdatedRoute = createRoute({
  method: 'get',
  path: '/report/subscriptionsUpdated',
  tags: ['Report'],
  summary: 'Request report by update',
  description:
    "Retrieves a report regarding Subscriptions updated in the date interval chosen. The report will be sent by email, to the address inserted in the API's path.",
  operationId: 'Requestreportbyupdate',
  request: {
    query: z.object({
      requesterEmail: z
        .string()
        .openapi({
          param: {
            description: 'Email that the report will be sent to',
            explode: true,
            in: 'query',
            name: 'requesterEmail',
            required: true,
            schema: { example: 'user@vtex.com.br', type: 'string' },
            style: 'form',
          },
          example: 'user@vtex.com.br',
        }),
      beginDate: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .openapi({
          param: {
            description: 'begin date of report interval, use format yyyyMMdd',
            explode: true,
            in: 'query',
            name: 'beginDate',
            required: true,
            schema: { example: 20190101, format: 'int32', type: 'integer' },
            style: 'form',
          },
          example: 20190101,
        }),
      endDate: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .openapi({
          param: {
            description: 'end date of report interval, use format yyyyMMdd',
            explode: true,
            in: 'query',
            name: 'endDate',
            required: true,
            schema: { example: 20190701, format: 'int32', type: 'integer' },
            style: 'form',
          },
          example: 20190701,
        }),
    }),
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
  responses: { 200: { description: 'OK', headers: z.object({}) } },
})

export const getSettingsRoute = createRoute({
  method: 'get',
  path: '/settings',
  tags: ['Settings'],
  summary: 'Get Subscriptions Settings',
  description: 'Lists the current Subscriptions settings in your store.',
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

export const postSettingsRoute = createRoute({
  method: 'post',
  path: '/settings',
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

export const getSubscriptionsRoute = createRoute({
  method: 'get',
  path: '/subscriptions',
  tags: ['Subscriptions'],
  summary: "Retrieve customer's subscriptions",
  description:
    "Retrieves details of a given customer's subscriptions, searching by that customer's `customerId`.",
  operationId: 'Getsubscriptionstocustomer',
  request: {
    query: z.object({
      customerId: z
        .string()
        .openapi({
          param: {
            description: 'Customer ID.',
            explode: true,
            in: 'query',
            name: 'customerId',
            required: true,
            schema: { example: 'user@vtex.com.br', type: 'string' },
            style: 'form',
          },
          example: 'user@vtex.com.br',
        }),
    }),
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
  responses: { 200: { description: 'OK', headers: z.object({}) } },
})

export const getSubscriptionsGroupRoute = createRoute({
  method: 'get',
  path: '/subscriptions-group',
  tags: ['Subscription Group'],
  summary: 'List All subscription groups',
  description: 'Retrieves all subscription groups in your store.',
  operationId: 'GetAllsubscriptiongroup',
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
  responses: { 200: { description: 'OK', headers: z.object({}) } },
})

export const getSubscriptionsGroupListRoute = createRoute({
  method: 'get',
  path: '/subscriptions-group/list',
  tags: ['Subscription Group'],
  summary: 'Get subscription group list',
  description: 'Retrieves a list of Subscription groups in your store.',
  operationId: 'Getsubscriptiongrouplist',
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
  responses: { 200: { description: 'OK', headers: z.object({}) } },
})

export const getSubscriptionsGroupNextPurchaseDateStrRoute = createRoute({
  method: 'get',
  path: '/subscriptions-group/nextPurchase/{dateStr}',
  tags: ['Subscription Group'],
  summary: 'Get Next purchase',
  description: "Lists details of a given subscription group's next purchase, filtering by dateStr.",
  operationId: 'GetNextpurchase',
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
    params: z.object({
      dateStr: z
        .string()
        .openapi({
          param: {
            description:
              'Reference date that retrieves all next purchases, starting from the dateStr inserted. Must be in the format of {{yyyyMMdd}}',
            in: 'path',
            name: 'dateStr',
            required: true,
            schema: { type: 'string' },
            style: 'simple',
          },
        }),
    }),
  },
  responses: { 200: { description: 'OK', headers: z.object({}) } },
})

export const getSubscriptionsGroupSimulateGroupIdRoute = createRoute({
  method: 'get',
  path: '/subscriptions-group/simulate/{groupId}',
  tags: ['Subscription Group'],
  summary: 'Get Simulation by subscription-group',
  description: 'Retrieves Subscription simulations, filtering by groupId.',
  operationId: 'GetSimulatebysubscription-group',
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
    params: z.object({
      groupId: z
        .string()
        .openapi({
          param: {
            description: 'Group ID.',
            in: 'path',
            name: 'groupId',
            required: true,
            schema: { example: '1', type: 'string' },
            style: 'simple',
          },
          example: '1',
        }),
    }),
  },
  responses: { 200: { description: 'OK', headers: z.object({}) } },
})

export const getSubscriptionsGroupGroupIdRoute = createRoute({
  method: 'get',
  path: '/subscriptions-group/{groupId}',
  tags: ['Subscription Group'],
  summary: 'Get Subscription by groupId',
  description: 'Lists Subscription details, filtering by `groupId`.',
  operationId: 'GetSubscriptionbygroupId',
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
    params: z.object({
      groupId: z
        .string()
        .openapi({
          param: {
            description: 'Group ID.',
            in: 'path',
            name: 'groupId',
            required: true,
            schema: { example: '1', type: 'string' },
            style: 'simple',
          },
          example: '1',
        }),
    }),
  },
  responses: { 200: { description: 'OK', headers: z.object({}) } },
})

export const patchSubscriptionsGroupGroupIdRoute = createRoute({
  method: 'patch',
  path: '/subscriptions-group/{groupId}',
  tags: ['Subscription Group'],
  summary: 'Update Subscription by groupId',
  description: 'Updates a Subscription by `groupId`.',
  operationId: 'UpdateSubscriptionbygroupId',
  request: {
    params: z.object({
      groupId: z
        .string()
        .openapi({
          param: {
            description: 'Group ID.',
            in: 'path',
            name: 'groupId',
            required: true,
            schema: { example: '1', type: 'string' },
            style: 'simple',
          },
          example: '1',
        }),
    }),
    body: {
      description: '',
      content: {
        'application/json': {
          schema: UpdateSubscriptionbygroupIdRequestSchema,
          example: {
            isSkipped: true,
            item: [
              {
                SubscriptionId: 'string',
                createdAt: '2019-06-20T18:27:41.23Z',
                cycleCount: 0,
                endpoint: 'string',
                isSkipped: true,
                lastUpdate: '2019-06-20T18:27:41.23Z',
                metadata: [
                  {
                    name: 'string',
                    properties: {
                      additionalProp1: 'string',
                      additionalProp2: 'string',
                      additionalProp3: 'string',
                    },
                  },
                ],
                originalItemIndex: 0,
                originalOrderId: 'string',
                priceAtSubscriptionDate: 0,
                quantity: 0,
                sellingPrice: 0,
                sku: {
                  detailUrl: 'string',
                  id: 'string',
                  imageUrl: 'string',
                  name: 'string',
                  nameComplete: 'string',
                  productName: 'string',
                },
                status: 'ACTIVE',
              },
            ],
            metadata: [
              {
                name: 'string',
                properties: {
                  additionalProp1: 'string',
                  additionalProp2: 'string',
                  additionalProp3: 'string',
                },
              },
            ],
            plan: {
              frequency: { interval: 0, periodicity: 'string' },
              type: 'string',
              validity: { begin: '2019-06-20T18:27:41.23Z', end: '2019-06-20T18:27:41.23Z' },
            },
            purchaseSettings: {
              currencyCode: 'string',
              paymentMethod: { paymentAccountId: 'string', paymentSystem: 'string' },
              purchaseDay: 'string',
              salesChannel: 'string',
              selectedSla: 'string',
              seller: 'string',
            },
            shippingAddress: {
              additionalComponents: [
                { longName: 'string', shortName: 'string', types: ['string'] },
              ],
              addressId: 'string',
              addressName: 'string',
              addressType: 'string',
              city: 'string',
              complement: 'string',
              country: 'string',
              formattedAddress: 'string',
              geoCoordinate: [0],
              neighborhood: 'string',
              number: 'string',
              postalCode: 'string',
              receiverName: 'string',
              reference: 'string',
              state: 'string',
              street: 'string',
            },
            status: 'string',
          },
        },
      },
      required: true,
    },
  },
  responses: { 200: { description: 'OK', headers: z.object({}) } },
})

export const postSubscriptionsGroupGroupIdAdditemRoute = createRoute({
  method: 'post',
  path: '/subscriptions-group/{groupId}/additem',
  tags: ['Subscription Group'],
  summary: 'Add Subscription item by groupId',
  description: 'Adds an SKU to a given Subscription, filtering by groupId.',
  operationId: 'Additemsubscription-groupId',
  request: {
    params: z.object({
      groupId: z
        .string()
        .openapi({
          param: {
            description: 'Group ID.',
            in: 'path',
            name: 'groupId',
            required: true,
            schema: { example: '1', type: 'string' },
            style: 'simple',
          },
          example: '1',
        }),
    }),
    headers: z.object({
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
    }),
    body: {
      description: '',
      content: {
        'application/json': {
          schema: AdditemsubscriptionGroupIdRequestSchema,
          example: {
            endpoint: 'string',
            priceAtSubscriptionDate: 0,
            quantity: 0,
            sellingPrice: 0,
            sku: {
              detailUrl: 'string',
              id: 'string',
              imageUrl: 'string',
              name: 'string',
              nameComplete: 'string',
              productName: 'string',
            },
          },
        },
      },
      required: true,
    },
  },
  responses: { 200: { description: 'OK', headers: z.object({}) } },
})

export const getSubscriptionsGroupGroupIdAddressesRoute = createRoute({
  method: 'get',
  path: '/subscriptions-group/{groupId}/addresses',
  tags: ['Subscription Group'],
  summary: 'Get addresses by groupId',
  description: 'Lists addresses linked to a given Subscription group, filtering by groupId.',
  operationId: 'GetaddressesbygroupId',
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
    params: z.object({
      groupId: z
        .string()
        .openapi({
          param: {
            description: '',
            in: 'path',
            name: 'groupId',
            required: true,
            schema: { example: '', type: 'string' },
            style: 'simple',
          },
          example: '',
        }),
    }),
  },
  responses: { 200: { description: '', headers: z.object({}) } },
})

export const postSubscriptionsGroupGroupIdAddressesRoute = createRoute({
  method: 'post',
  path: '/subscriptions-group/{groupId}/addresses',
  tags: ['Subscription Group'],
  summary: 'Insert Addresses by groupId',
  description: 'Insert address information of a given Subscription group, filtering by groupId.',
  operationId: 'InsertAddressesbygroupId',
  request: {
    params: z.object({
      groupId: z
        .string()
        .openapi({
          param: {
            description: 'Group ID.',
            in: 'path',
            name: 'groupId',
            required: true,
            schema: { example: '1', type: 'string' },
            style: 'simple',
          },
          example: '1',
        }),
    }),
    headers: z.object({
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
    }),
    body: {
      description: '',
      content: {
        'application/json': {
          schema: InsertAddressesbygroupIdRequestSchema,
          example: {
            additionalComponents: [{ longName: 'string', shortName: 'string', types: ['string'] }],
            addressId: 'string',
            addressName: 'string',
            addressType: 'string',
            city: 'string',
            complement: 'string',
            country: 'string',
            formattedAddress: 'string',
            geoCoordinate: [0],
            neighborhood: 'string',
            number: 'string',
            postalCode: 'string',
            receiverName: 'string',
            reference: 'string',
            state: 'string',
            street: 'string',
          },
        },
      },
      required: true,
    },
  },
  responses: { 200: { description: 'OK', headers: z.object({}) } },
})

export const patchSubscriptionsGroupGroupIdCancelRoute = createRoute({
  method: 'patch',
  path: '/subscriptions-group/{groupId}/cancel',
  tags: ['Subscription Group'],
  summary: 'Cancel Subscription by groupId',
  description: 'Cancels Subscription by `groupId`',
  operationId: 'CancelSubscriptionbygroupId',
  request: {
    headers: z.object({
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
    }),
    params: z.object({
      groupId: z
        .string()
        .openapi({
          param: {
            description: 'Group ID.',
            in: 'path',
            name: 'groupId',
            required: true,
            schema: { example: '1', type: 'string' },
            style: 'simple',
          },
          example: '1',
        }),
    }),
  },
  responses: { 200: { description: 'OK', headers: z.object({}) } },
})

export const getSubscriptionsGroupGroupIdConfigRoute = createRoute({
  method: 'get',
  path: '/subscriptions-group/{groupId}/config',
  tags: ['Subscription Group'],
  summary: "List Subscription group's Configuration",
  description:
    "Retrieves details about a given subscription group's configuration, filtering by groupId.",
  operationId: 'GetConfigsubscriptionsgroup',
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
    params: z.object({
      groupId: z
        .string()
        .openapi({
          param: {
            description: 'Group ID.',
            in: 'path',
            name: 'groupId',
            required: true,
            schema: { example: '1', type: 'string' },
            style: 'simple',
          },
          example: '1',
        }),
    }),
  },
  responses: { 200: { description: 'OK', headers: z.object({}) } },
})

export const getSubscriptionsGroupGroupIdConversationMessageRoute = createRoute({
  method: 'get',
  path: '/subscriptions-group/{groupId}/conversation-message',
  tags: ['Subscription Group'],
  summary: 'Get Conversation Message by groupId',
  description: 'Retrieves the conversation of a given Subscription group, filtering by groupId.',
  operationId: 'GetConversationMessagebygroupId',
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
    params: z.object({
      groupId: z
        .string()
        .openapi({
          param: {
            description: 'Group ID.',
            in: 'path',
            name: 'groupId',
            required: true,
            schema: { example: '1', type: 'string' },
            style: 'simple',
          },
          example: '1',
        }),
    }),
  },
  responses: { 200: { description: 'OK', headers: z.object({}) } },
})

export const getSubscriptionsGroupGroupIdFrequencyOptionsRoute = createRoute({
  method: 'get',
  path: '/subscriptions-group/{groupId}/frequency-options',
  tags: ['Subscription Group'],
  summary: 'Get frequency options by groupId',
  description: 'Lists frequency options of a given Subscription group, filtering by groupId.',
  operationId: 'GetfrequencyoptionsbygroupId',
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
    params: z.object({
      groupId: z
        .string()
        .openapi({
          param: {
            description: 'Group ID.',
            in: 'path',
            name: 'groupId',
            required: true,
            schema: { example: '1', type: 'string' },
            style: 'simple',
          },
          example: '1',
        }),
    }),
  },
  responses: { 200: { description: 'OK', headers: z.object({}) } },
})

export const getSubscriptionsGroupGroupIdPaymentSystemsRoute = createRoute({
  method: 'get',
  path: '/subscriptions-group/{groupId}/payment-systems',
  tags: ['Subscription Group'],
  summary: 'Get payment System by groupId',
  description:
    "Retrieves payment system's information of a given Subscription group, filtering by groupId.",
  operationId: 'GetpaymentSystembygroupId',
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
    params: z.object({
      groupId: z
        .string()
        .openapi({
          param: {
            description: 'Group ID.',
            in: 'path',
            name: 'groupId',
            required: true,
            schema: { example: '1', type: 'string' },
            style: 'simple',
          },
          example: '1',
        }),
    }),
  },
  responses: { 200: { description: 'OK', headers: z.object({}) } },
})

export const getSubscriptionsGroupGroupIdWillCreateRoute = createRoute({
  method: 'get',
  path: '/subscriptions-group/{groupId}/will-create',
  tags: ['Subscription Group'],
  summary: "List 'Will create' by groupId",
  description: "Retrieves Subscription groups listed as 'will create', filtering by groupId.",
  operationId: 'GetwillcreatebygroupId',
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
    params: z.object({
      groupId: z
        .string()
        .openapi({
          param: {
            description: 'Group ID.',
            in: 'path',
            name: 'groupId',
            required: true,
            schema: { example: '1', type: 'string' },
            style: 'simple',
          },
          example: '1',
        }),
    }),
  },
  responses: { 200: { description: 'OK', headers: z.object({}) } },
})

export const postSubscriptionsGroupGroupidInstancesInstanceIdRetryRoute = createRoute({
  method: 'post',
  path: '/subscriptions-group/{groupid}/instances/{instanceId}/retry',
  tags: ['Subscription Group'],
  summary: 'Retry subscription by groupId',
  description:
    'Permits the retry of a Subscription group, via API, filtering by groupId and instanceId.',
  operationId: 'RetrysubscriptionbygroupId',
  request: {
    params: z.object({
      groupid: z
        .string()
        .openapi({
          param: {
            description: 'Group ID.',
            in: 'path',
            name: 'groupid',
            required: true,
            schema: { example: '1', type: 'string' },
            style: 'simple',
          },
          example: '1',
        }),
      instanceId: z
        .string()
        .openapi({
          param: {
            description: 'Instance ID.',
            in: 'path',
            name: 'instanceId',
            required: true,
            schema: { type: 'string' },
            style: 'simple',
          },
        }),
    }),
    headers: z.object({
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
    }),
  },
  responses: { 200: { description: 'OK', headers: z.object({}) } },
})

export const getSubscriptionsListRoute = createRoute({
  method: 'get',
  path: '/subscriptions/list',
  tags: ['Subscriptions'],
  summary: 'Get Subscription List',
  description: 'Retrieves a list of Subscriptions linked to your store.',
  operationId: 'GetSubscriptionList',
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
  responses: { 200: { description: 'OK', headers: z.object({}) } },
})

export const getSubscriptionsSubscriptionIdRoute = createRoute({
  method: 'get',
  path: '/subscriptions/{subscriptionId}',
  tags: ['Subscriptions'],
  summary: 'Retrieve subscription by ID',
  description: "Lists Subscription's details, searching by `subscriptionId`.",
  operationId: 'GetsubscriptionbyId',
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
    params: z.object({
      subscriptionId: z
        .string()
        .openapi({
          param: {
            description: 'Subscription ID.',
            in: 'path',
            name: 'subscriptionId',
            required: true,
            schema: { example: '1', type: 'string' },
            style: 'simple',
          },
          example: '1',
        }),
    }),
  },
  responses: { 200: { description: 'OK', headers: z.object({}) } },
})

export const patchSubscriptionsSubscriptionIdRoute = createRoute({
  method: 'patch',
  path: '/subscriptions/{subscriptionId}',
  tags: ['Subscriptions'],
  summary: 'Update Subscriptions by SubscriptionId',
  description:
    'Update, add or alter information of a given Subscription, filtering by `subscriptionId`.',
  operationId: 'UpdateSubscriptionsbySubscriptionId',
  request: {
    params: z.object({
      subscriptionId: z
        .string()
        .openapi({
          param: {
            description: 'Subscription ID.',
            in: 'path',
            name: 'subscriptionId',
            required: true,
            schema: { example: '1', type: 'string' },
            style: 'simple',
          },
          example: '1',
        }),
    }),
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
      description: '',
      content: {
        'application/json': {
          schema: UpdateSubscriptionsbySubscriptionIdRequestSchema,
          example: {
            isSkipped: true,
            item: {
              endpoint: 'string',
              priceAtSubscriptionDate: 0,
              quantity: 0,
              sellingPrice: 0,
              sku: {
                detailUrl: 'string',
                id: 'string',
                imageUrl: 'string',
                name: 'string',
                nameComplete: 'string',
                productName: 'string',
              },
            },
            metadata: [
              {
                name: 'string',
                properties: {
                  additionalProp1: 'string',
                  additionalProp2: 'string',
                  additionalProp3: 'string',
                },
              },
            ],
            plan: {
              frequency: { interval: 0, periodicity: 'string' },
              type: 'string',
              validity: { begin: '2019-07-04T14:40:30.819Z', end: '2019-07-04T14:40:30.819Z' },
            },
            purchaseSettings: {
              currencyCode: 'string',
              paymentMethod: { paymentAccountId: 'string', paymentSystem: 'string' },
              purchaseDay: 'string',
              salesChannel: 'string',
              selectedSla: 'string',
              seller: 'string',
            },
            shippingAddress: {
              additionalComponents: [
                { longName: 'string', shortName: 'string', types: ['string'] },
              ],
              addressId: 'string',
              addressName: 'string',
              addressType: 'string',
              city: 'string',
              complement: 'string',
              country: 'string',
              formattedAddress: 'string',
              geoCoordinate: [0],
              neighborhood: 'string',
              number: 'string',
              postalCode: 'string',
              receiverName: 'string',
              reference: 'string',
              state: 'string',
              street: 'string',
            },
            status: 'string',
          },
        },
      },
      required: true,
    },
  },
  responses: { 200: { description: 'OK', headers: z.object({}) } },
})

export const postSubscriptionsSubscriptionIdAddressesRoute = createRoute({
  method: 'post',
  path: '/subscriptions/{subscriptionId}/addresses',
  tags: ['Subscriptions'],
  summary: 'Insert Addresses for Subscription',
  description: "Inserts address's information to complement the Subscription details.",
  operationId: 'InsertAddressesforSubscription',
  request: {
    params: z.object({
      subscriptionId: z
        .string()
        .openapi({
          param: {
            description: 'Subscription ID.',
            in: 'path',
            name: 'subscriptionId',
            required: true,
            schema: { example: '1', type: 'string' },
            style: 'simple',
          },
          example: '1',
        }),
    }),
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
      description: '',
      content: {
        'application/json': {
          schema: z.array(InsertAddressesforSubscriptionRequestSchema).openapi({ description: '' }),
          example: [
            {
              additionalComponents: null,
              addressId: '1234567890',
              addressName: 'xt5353818181nhshs',
              addressType: 'residential',
              city: 'Rio de Janeiro',
              complement: null,
              country: 'BRA',
              formattedAddress: null,
              geoCoordinate: null,
              neighborhood: 'Barra da Tijuca',
              number: '1',
              postalCode: '22204-004',
              receiverName: 'Fulano',
              reference: null,
              state: 'RJ',
              street: 'Avenida do Estado',
            },
          ],
        },
      },
      required: true,
    },
  },
  responses: { 200: { description: 'OK', headers: z.object({}) } },
})

export const patchSubscriptionsSubscriptionIdCancelRoute = createRoute({
  method: 'patch',
  path: '/subscriptions/{subscriptionId}/cancel',
  tags: ['Subscriptions'],
  summary: 'Cancel Subscriptions by SubscriptionId',
  description:
    'Cancels all Subscriptions of a subscription group. This operation does not have a rollback. Once cancelled, it cannot be re-activated',
  operationId: 'CancelSubscriptionsbySubscriptionId',
  request: {
    headers: z.object({
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
    }),
    params: z.object({
      subscriptionId: z
        .string()
        .openapi({
          param: {
            description: 'Subscription ID.',
            in: 'path',
            name: 'subscriptionId',
            required: true,
            schema: { example: '1', type: 'string' },
            style: 'simple',
          },
          example: '1',
        }),
    }),
  },
  responses: { 200: { description: 'OK', headers: z.object({}) } },
})

export const getSubscriptionsSubscriptionIdFrequencyOptionsRoute = createRoute({
  method: 'get',
  path: '/subscriptions/{subscriptionId}/frequency-options',
  tags: ['Subscriptions'],
  summary: 'Get frequency options by subscriptionId',
  description: 'Lists frequency options for the Subscription, filtering by `subscriptionId`.',
  operationId: 'GetfrequencyoptionsbysubscriptionId',
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
    params: z.object({
      subscriptionId: z
        .string()
        .openapi({
          param: {
            description: 'Subscription ID.',
            in: 'path',
            name: 'subscriptionId',
            required: true,
            schema: { example: '1', type: 'string' },
            style: 'simple',
          },
          example: '1',
        }),
    }),
  },
  responses: { 200: { description: 'OK', headers: z.object({}) } },
})
