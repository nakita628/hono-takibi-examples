import { createRoute, z } from '@hono/zod-openapi'

const ParamSchema = z
  .object({ name: z.string(), value: z.string() })
  .openapi({
    example: { name: 'Seller@CatalogSystem', value: '1' },
    required: ['name', 'value'],
    title: 'Param',
  })
  .openapi('Param')

const ItemSchema = z
  .object({
    id: z.string(),
    index: z.int32(),
    isGift: z.boolean(),
    logisticsInfos: z.array(z.string()).openapi({ description: '' }),
    measurementUnit: z.string(),
    params: z.array(ParamSchema).openapi({ description: '' }),
    priceSheet: z.array(z.string()).openapi({ description: '' }),
    priceTags: z.array(z.string()).openapi({ description: '' }),
    productSpecifications: z.array(z.string()).openapi({ description: '' }),
    quantity: z.int32(),
    sellerId: z.string(),
    unitMultiplier: z.int32(),
  })
  .openapi({
    example: {
      id: '160',
      index: 0,
      isGift: false,
      logisticsInfos: [],
      measurementUnit: 'un',
      params: [
        { name: 'Seller@CatalogSystem', value: '1' },
        { name: 'product@CatalogSystem', value: '94' },
      ],
      priceSheet: [],
      priceTags: [],
      productSpecifications: [],
      quantity: 3,
      sellerId: '1',
      unitMultiplier: 1,
    },
    required: [
      'index',
      'id',
      'quantity',
      'isGift',
      'measurementUnit',
      'unitMultiplier',
      'priceTags',
      'params',
      'priceSheet',
      'logisticsInfos',
      'sellerId',
      'productSpecifications',
    ],
    title: 'Item',
  })
  .openapi('Item')

const CalculatediscountsandtaxesBundlesRequestSchema = z
  .object({
    isShoppingCart: z.boolean(),
    items: z.array(ItemSchema).openapi({ description: '' }),
    origin: z.string(),
    params: z.array(ParamSchema).openapi({ description: '' }),
    profileId: z.string(),
    salesChannel: z.string(),
  })
  .openapi({
    example: {
      isShoppingCart: true,
      origin: 'Marketplace',
      params: [
        { name: 'product@CatalogSystem', value: '2662' },
        { name: 'couponCode@Marketing', value: 'coupon' },
      ],
      profileId: 'aa',
      salesChannel: '1',
    },
    required: ['isShoppingCart', 'origin', 'salesChannel', 'profileId', 'items', 'params'],
    title: 'Calculatediscountsandtaxes(Bundles)Request',
  })
  .openapi('CalculatediscountsandtaxesBundlesRequest')

const GetPromotionsSchema = z
  .array(
    z
      .object({
        Campaigns: z
          .array(
            z
              .string()
              .openapi({ description: 'Campaign Audience.', example: 'Campaign Audience example' }),
          )
          .exactOptional()
          .openapi({ description: 'Array with campaign audiences that activate this promotion.' }),
        activateGiftsMultiplier: z
          .boolean()
          .exactOptional()
          .openapi({
            description: 'If set as `true`, it activates gifts Multiplier.',
            example: false,
          }),
        areSalesChannelIdsExclusive: z
          .boolean()
          .exactOptional()
          .openapi({
            description:
              'If set to `false`, this promotion will be applied to any trade policies present on the `idsSalesChannel` field. If set to `true`, trade policies present on that field will make this promotion not to be applied.',
          }),
        beginDate: z
          .string()
          .exactOptional()
          .openapi({ description: 'Promotion Begin Date (UTC).' }),
        description: z
          .string()
          .exactOptional()
          .openapi({ description: 'Promotion internal description.' }),
        endDate: z.string().exactOptional().openapi({ description: 'Promotion End Date (UTC).' }),
        hasMaxPricePerItem: z
          .boolean()
          .exactOptional()
          .openapi({ description: 'Defines if there is a maximum price per item.' }),
        idCalculatorConfiguration: z
          .string()
          .exactOptional()
          .openapi({ description: 'Promotion ID.' }),
        idsSalesChannel: z
          .array(z.string().openapi({ description: 'Trade Policy ID.' }))
          .exactOptional()
          .openapi({ description: 'List of Trade Policies that activate this promotion.' }),
        isActive: z
          .boolean()
          .exactOptional()
          .openapi({
            description:
              'If set as `true` the promotion is activated. If set as `false` the promotion is deactivated.',
          }),
        isArchived: z
          .boolean()
          .exactOptional()
          .openapi({
            description:
              'If set as `true` the Promotion is archived. If set as `false` the Promotion is not archived.',
          }),
        isTax: z.boolean().exactOptional().openapi({ description: 'Defines if it is a tax.' }),
        lastModifiedUtc: z
          .string()
          .exactOptional()
          .openapi({ description: 'Date and time when the promotion was last modified (UTC).' }),
        maxUsage: z
          .number()
          .exactOptional()
          .openapi({ description: 'Defines how many times the promotion can be used.' }),
        name: z.string().exactOptional().openapi({ description: 'Promotion Name.' }),
        percentualTax: z
          .number()
          .exactOptional()
          .openapi({ description: 'Percentual tax applied.' }),
        scope: z
          .object({
            allCatalog: z
              .boolean()
              .exactOptional()
              .openapi({
                description:
                  'Determines if the promotion applies to all products in the Catalog (`true`) or not (`false`).',
                example: false,
              }),
            brands: z
              .number()
              .exactOptional()
              .openapi({
                description: 'Quantity of brands which activate or deactivate the promotion.',
                example: 1,
              }),
            brandsAreInclusive: z
              .boolean()
              .exactOptional()
              .openapi({
                description:
                  'If set to `true`, this promotion will be applied to any brand present on the `brands` field. If set to `false`, brands present on that field will make this promotion not to be applied.',
                example: true,
              }),
            categories: z
              .number()
              .exactOptional()
              .openapi({
                description: 'Quantity of categories which activate or deactivate the promotion.',
                example: 1,
              }),
            categoriesAreInclusive: z
              .boolean()
              .exactOptional()
              .openapi({
                description:
                  'If set to `true`, this promotion will be applied to any category present on the `categories` field. If set to `false`, categories present on that field will make this promotion not to be applied.',
                example: true,
              }),
            collections: z
              .number()
              .exactOptional()
              .openapi({
                description: 'Quantity of collections which activate or deactivate the promotion.',
                example: 1,
              }),
            collectionsAreInclusive: z
              .boolean()
              .exactOptional()
              .openapi({
                description:
                  'If set to `true`, this promotion will be applied to any collection present on the `collections` field. If set to `false`, collections present on that field will make this promotion not to be applied.',
                example: true,
              }),
            products: z
              .number()
              .exactOptional()
              .openapi({
                description: 'Quantity of products which activate or deactivate the promotion.',
                example: 1,
              }),
            productsAreInclusive: z
              .boolean()
              .exactOptional()
              .openapi({
                description:
                  'If set to `true`, this promotion will be applied to any product present on the `products` field. If set to `false`, products present on that field will make this promotion not to be applied.',
                example: true,
              }),
            sellers: z
              .number()
              .exactOptional()
              .openapi({
                description: 'Quantity of sellers which activate or deactivate the promotion.',
                example: 0,
              }),
            sellersAreInclusive: z
              .boolean()
              .exactOptional()
              .openapi({
                description:
                  'If set to `true`, this promotion will be applied to any seller present on the `sellers` field. If set to `false`, sellers present on that field will make this promotion not to be applied.',
                example: false,
              }),
            skus: z
              .number()
              .exactOptional()
              .openapi({
                description: 'Quantity of SKUs which activate or deactivate the promotion.',
                example: 1,
              }),
            skusAreInclusive: z
              .boolean()
              .exactOptional()
              .openapi({
                description:
                  'If set to `true`, this promotion will be applied to any SKU present on the `skus` field. If set to `false`, SKUs present on that field will make this promotion not to be applied.',
                example: true,
              }),
          })
          .exactOptional()
          .openapi({ description: 'Scope of the promotion.', required: [] }),
        status: z.string().exactOptional().openapi({ description: 'Status of the promotion.' }),
        type: z
          .string()
          .exactOptional()
          .openapi({ description: 'Defines the type of promotion.', title: 'type' }),
        utmCampain: z.string().exactOptional().openapi({ description: 'utmCampaign code.' }),
        utmSource: z.string().exactOptional().openapi({ description: 'utmSource code.' }),
        utmiCampaign: z.string().exactOptional().openapi({ description: 'utmiCampaign code.' }),
      })
      .openapi({ description: 'Object with information about a promotion.', required: [] }),
  )
  .openapi({ description: 'Array with promotions.', title: 'items' })
  .openapi('GetPromotions')

const GetTaxesSchema = z
  .array(
    z
      .object({
        Campaigns: z
          .array(
            z
              .string()
              .openapi({ description: 'Campaign Audience.', example: 'Campaign Audience example' }),
          )
          .exactOptional()
          .openapi({ description: 'Array with campaign audiences that activate this tax.' }),
        activateGiftsMultiplier: z
          .boolean()
          .exactOptional()
          .openapi({
            description: 'If set as `true`, it activates gifts Multiplier.',
            example: false,
          }),
        areSalesChannelIdsExclusive: z
          .boolean()
          .exactOptional()
          .openapi({
            description:
              'If set to `false`, this tax will be applied to any trade policies present on the `idsSalesChannel` field. If set to `true`, trade policies present on that field will make this tax not to be applied.',
          }),
        beginDate: z.string().exactOptional().openapi({ description: 'Tax start date (UTC).' }),
        description: z
          .string()
          .exactOptional()
          .openapi({ description: 'Tax internal description.' }),
        endDate: z.string().exactOptional().openapi({ description: 'Tax end date (UTC).' }),
        hasMaxPricePerItem: z
          .boolean()
          .exactOptional()
          .openapi({ description: 'Defines if there is a maximum price per item.' }),
        idCalculatorConfiguration: z.string().exactOptional().openapi({ description: 'Tax ID.' }),
        idsSalesChannel: z
          .array(z.string().openapi({ description: 'Trade Policy ID.' }))
          .exactOptional()
          .openapi({ description: 'List of Trade Policies that activate this tax.' }),
        isActive: z
          .boolean()
          .exactOptional()
          .openapi({
            description:
              'If set as `true` the tax is activated. If set as `false` the tax is deactivated.',
          }),
        isArchived: z
          .boolean()
          .exactOptional()
          .openapi({
            description:
              'If set as `true` the tax is archived. If set as `false` the tax is not archived.',
          }),
        isTax: z.boolean().exactOptional().openapi({ description: 'Defines if it is a tax.' }),
        lastModifiedUtc: z
          .string()
          .exactOptional()
          .openapi({ description: 'Date and time when the tax was last modified (UTC).' }),
        maxUsage: z
          .number()
          .exactOptional()
          .openapi({ description: 'Defines how many times the tax can be used.' }),
        name: z.string().exactOptional().openapi({ description: 'Tax name.' }),
        percentualTax: z
          .number()
          .exactOptional()
          .openapi({ description: 'Percentual tax applied.' }),
        scope: z
          .object({
            allCatalog: z
              .boolean()
              .exactOptional()
              .openapi({
                description:
                  'Determines if the tax applies to all products in the Catalog (`true`) or not (`false`).',
                example: false,
              }),
            brands: z
              .number()
              .exactOptional()
              .openapi({
                description: 'Quantity of brands which activate or deactivate the tax.',
                example: 1,
              }),
            brandsAreInclusive: z
              .boolean()
              .exactOptional()
              .openapi({
                description:
                  'If set to `true`, this tax will be applied to any brand present on the `brands` field. If set to `false`, brands present on that field will make this tax not to be applied.',
                example: true,
              }),
            categories: z
              .number()
              .exactOptional()
              .openapi({
                description: 'Quantity of categories which activate or deactivate the tax.',
                example: 1,
              }),
            categoriesAreInclusive: z
              .boolean()
              .exactOptional()
              .openapi({
                description:
                  'If set to `true`, this tax will be applied to any category present on the `categories` field. If set to `false`, categories present on that field will make this tax not to be applied.',
                example: true,
              }),
            collections: z
              .number()
              .exactOptional()
              .openapi({
                description: 'Quantity of collections which activate or deactivate the tax.',
                example: 1,
              }),
            collectionsAreInclusive: z
              .boolean()
              .exactOptional()
              .openapi({
                description:
                  'If set to `true`, this tax will be applied to any collection present on the `collections` field. If set to `false`, collections present on that field will make this tax not to be applied.',
                example: true,
              }),
            products: z
              .number()
              .exactOptional()
              .openapi({
                description: 'Quantity of products which activate or deactivate the tax.',
                example: 1,
              }),
            productsAreInclusive: z
              .boolean()
              .exactOptional()
              .openapi({
                description:
                  'If set to `true`, this tax will be applied to any product present on the `products` field. If set to `false`, products present on that field will make this tax not to be applied.',
                example: true,
              }),
            sellers: z
              .number()
              .exactOptional()
              .openapi({
                description: 'Quantity of sellers which activate or deactivate the tax.',
                example: 0,
              }),
            sellersAreInclusive: z
              .boolean()
              .exactOptional()
              .openapi({
                description:
                  'If set to `true`, this tax will be applied to any seller present on the `sellers` field. If set to `false`, sellers present on that field will make this tax not to be applied.',
                example: false,
              }),
            skus: z
              .number()
              .exactOptional()
              .openapi({
                description: 'Quantity of SKUs which activate or deactivate the tax.',
                example: 1,
              }),
            skusAreInclusive: z
              .boolean()
              .exactOptional()
              .openapi({
                description:
                  'If set to `true`, this tax will be applied to any SKU present on the `skus` field. If set to `false`, SKUs present on that field will make this tax not to be applied.',
                example: true,
              }),
          })
          .exactOptional()
          .openapi({ description: 'Scope of the tax.', required: [] }),
        status: z.string().exactOptional().openapi({ description: 'Status of the tax.' }),
        type: z
          .string()
          .exactOptional()
          .openapi({ description: 'Defines the type of tax.', title: 'type' }),
        utmCampain: z.string().exactOptional().openapi({ description: 'utmCampaign code.' }),
        utmSource: z.string().exactOptional().openapi({ description: 'utmSource code.' }),
        utmiCampaign: z.string().exactOptional().openapi({ description: 'utmiCampaign code.' }),
      })
      .openapi({ description: 'Object with information about a tax.', required: [] }),
  )
  .openapi({ description: 'Array with taxes.', title: 'items' })
  .openapi('GetTaxes')

const PricebycontextRequestSchema = z
  .object({
    id: z.int32(),
    itemId: z.int32(),
    salesChannel: z.int32(),
    sellerId: z.string(),
    validFrom: z.string(),
    validTo: z.string(),
  })
  .openapi({
    example: {
      id: 6324,
      itemId: 2390148,
      salesChannel: 1,
      sellerId: '1',
      validFrom: '1900-01-01T00:00:00',
      validTo: '4000-01-01T00:00:00',
    },
    required: ['id', 'itemId', 'salesChannel', 'sellerId', 'validFrom', 'validTo'],
    title: 'PricebycontextRequest',
  })
  .openapi('PricebycontextRequest')

const SavepriceRequestSchema = z
  .object({
    itemId: z.int32(),
    listPrice: z.int32(),
    price: z.int32(),
    salesChannel: z.int32(),
    sellerId: z.int32(),
    validFrom: z.string(),
    validTo: z.string(),
  })
  .openapi({
    example: {
      itemId: 2390148,
      listPrice: 1,
      price: 1,
      salesChannel: 1,
      sellerId: 1,
      validFrom: '2016-01-01T02:00:00Z',
      validTo: '2017-01-01T02:00:00Z',
    },
    required: ['itemId', 'salesChannel', 'sellerId', 'price', 'listPrice', 'validFrom', 'validTo'],
    title: 'SavepriceRequest',
  })
  .openapi('SavepriceRequest')

const UsagenotificationRequestSchema = z
  .object({
    accountId: z.string(),
    calculatorIds: z.array(z.string()).openapi({ description: '' }),
    coupon: z.string(),
    itemsCount: z.int32(),
    orderId: z.string(),
    profileId: z.string(),
    used: z.boolean(),
  })
  .openapi({
    example: {
      accountId: 'ffffffff-gggg-hhhh-iiii-jjjjjjjjjjjj',
      calculatorIds: ['discount_basetestqa_1'],
      coupon: 'cupom',
      itemsCount: 4,
      orderId: 'vbbbbbb-1',
      profileId: 'aaaaaaaa-bbbb-cccc-dddd-eeeeeeeeeeee',
      used: true,
    },
    required: [
      'orderId',
      'profileId',
      'accountId',
      'calculatorIds',
      'used',
      'coupon',
      'itemsCount',
    ],
    title: 'UsagenotificationRequest',
  })
  .openapi('UsagenotificationRequest')

const ZipCodeRangeSchema = z
  .object({ inclusive: z.boolean() })
  .openapi({ example: { inclusive: true }, required: ['inclusive'], title: 'ZipCodeRange' })
  .openapi('ZipCodeRange')

const AppKeySecurityScheme = { in: 'header', name: 'X-VTEX-API-AppKey', type: 'apiKey' }

const AppTokenSecurityScheme = { in: 'header', name: 'X-VTEX-API-AppToken', type: 'apiKey' }

export const postApiRnbPubNotificationsRoute = createRoute({
  method: 'post',
  path: '/api/rnb/pub/notifications',
  tags: ['Notifications'],
  summary: 'Usage notification',
  description: 'Usage notification',
  operationId: 'Usagenotification',
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
      description: '',
      content: {
        'application/json': {
          schema: UsagenotificationRequestSchema,
          example: {
            accountId: 'ffffffff-gggg-hhhh-iiii-jjjjjjjjjjjj',
            calculatorIds: ['discount_basetestqa_1'],
            coupon: 'cupom',
            itemsCount: 4,
            orderId: 'vbbbbbb-1',
            profileId: 'aaaaaaaa-bbbb-cccc-dddd-eeeeeeeeeeee',
            used: true,
          },
        },
      },
      required: true,
    },
  },
  responses: { 200: { description: 'OK' } },
  servers: [
    {
      url: 'http://example.com/.{environment}.com.br/api/rnb',
      variables: { environment: { default: 'exampleParameterValue' } },
    },
  ],
})

export const getApiRnbPvtArchiveBenefitsCalculatorConfigurationRoute = createRoute({
  method: 'get',
  path: '/api/rnb/pvt/archive/benefits/calculatorConfiguration',
  tags: ['Promotions and Taxes'],
  summary: 'List Archived Promotions',
  description: 'Lists all archived promotions.',
  operationId: 'GetArchivedPromotions',
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
    200: {
      description: 'OK',
      content: {
        'application/json': {
          schema: z
            .object({ items: GetPromotionsSchema.exactOptional() })
            .openapi({ description: 'Response object.', title: '', required: [] }),
          example: {
            items: [
              {
                Campaigns: [],
                activateGiftsMultiplier: false,
                areSalesChannelIdsExclusive: false,
                beginDate: '2021-04-15T03:00:00Z',
                description: '',
                endDate: '2021-04-16T02:30:00Z',
                hasMaxPricePerItem: false,
                idCalculatorConfiguration: '05558233-b415-4f2e-9822-ebdb3918623b',
                idsSalesChannel: [],
                isActive: false,
                isArchived: true,
                isTax: false,
                lastModifiedUtc: '2021-04-30T17:56:29.7157634Z',
                maxUsage: 0,
                name: 'Promoção Progressiva',
                percentualTax: 0,
                scope: {
                  allCatalog: true,
                  brands: 0,
                  brandsAreInclusive: true,
                  categories: 0,
                  categoriesAreInclusive: true,
                  collections: 0,
                  collectionsAreInclusive: true,
                  products: 0,
                  productsAreInclusive: true,
                  sellers: 0,
                  sellersAreInclusive: true,
                  skus: 0,
                  skusAreInclusive: true,
                },
                status: 'inactive',
                type: 'progressive',
                utmCampain: '',
                utmSource: '',
                utmiCampaign: '',
              },
            ],
          },
        },
      },
    },
  },
})

export const postApiRnbPvtArchiveCalculatorConfigurationIdCalculatorConfigurationRoute =
  createRoute({
    method: 'post',
    path: '/api/rnb/pvt/archive/calculatorConfiguration/{idCalculatorConfiguration}',
    tags: ['Promotions and Taxes'],
    summary: 'Archive Promotion or Tax',
    description: 'Archives a Promotion or Tax by its ID.',
    operationId: 'ArchivePromotion',
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
        idCalculatorConfiguration: z
          .string()
          .openapi({
            param: {
              description: 'Promotion ID or tax ID.',
              in: 'path',
              name: 'idCalculatorConfiguration',
              required: true,
              schema: { example: 'd8a1cd2e-b667-4054-b3ae-b79124c7218e', type: 'string' },
              style: 'simple',
            },
            example: 'd8a1cd2e-b667-4054-b3ae-b79124c7218e',
          }),
      }),
    },
    responses: { 204: { description: 'No Content' } },
  })

export const getApiRnbPvtArchiveCouponCouponCodeRoute = createRoute({
  method: 'get',
  path: '/api/rnb/pvt/archive/coupon/{couponCode}',
  tags: ['Coupons'],
  summary: 'Get archived coupon by coupon code',
  description: 'Retrieves a specific archived coupon by its coupon code.',
  operationId: 'Getarchivedbycouponcode',
  request: {
    headers: z.object({
      'Content-Type': z
        .string()
        .default('application/json')
        .openapi({
          param: {
            description: 'Describes the type of the content being sent.',
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
      couponCode: z
        .string()
        .openapi({
          param: {
            description: 'Coupon Code',
            in: 'path',
            name: 'couponCode',
            required: true,
            schema: { example: 'promo10', type: 'string' },
            style: 'simple',
          },
          example: 'promo10',
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': {
          schema: z
            .object({
              couponCode: z.string().exactOptional().openapi({ description: 'Coupon code.' }),
              expirationIntervalPerUse: z
                .string()
                .exactOptional()
                .openapi({ description: 'Coupon expiration interval per use.' }),
              isArchived: z
                .boolean()
                .exactOptional()
                .openapi({
                  description: 'Defines if the coupon is archived (`true`) or not (`false`).',
                }),
              lastModifiedUtc: z
                .string()
                .exactOptional()
                .openapi({
                  description: 'Date and time of the last update of the coupon in UTC format.',
                }),
              maxItemsPerClient: z
                .int()
                .exactOptional()
                .openapi({
                  description: 'Maximum items per client that the coupon can be applied.',
                }),
              utmCampaign: z
                .string()
                .exactOptional()
                .openapi({ description: 'UTM campaign code.' }),
              utmSource: z.string().exactOptional().openapi({ description: 'UTM source code.' }),
            })
            .openapi({ title: '', required: [] }),
          example: {
            couponCode: 'test',
            expirationIntervalPerUse: '00:00:00',
            isArchived: true,
            lastModifiedUtc: '2021-11-10T14:24:39.3683694Z',
            maxItemsPerClient: 10,
            utmSource: 'coupon3',
          },
        },
      },
    },
  },
})

export const postApiRnbPvtArchiveCouponCouponCodeRoute = createRoute({
  method: 'post',
  path: '/api/rnb/pvt/archive/coupon/{couponCode}',
  tags: ['Coupons'],
  summary: 'Archive coupon by coupon code',
  description: 'Archives a specifc coupon by its coupon code.',
  operationId: 'Archivebycouponcode',
  request: {
    headers: z.object({
      'Content-Type': z
        .string()
        .default('application/json')
        .openapi({
          param: {
            description: 'Describes the type of the content being sent.',
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
      couponCode: z
        .string()
        .openapi({
          param: {
            description: 'Coupon Code',
            in: 'path',
            name: 'couponCode',
            required: true,
            schema: { example: 'test', type: 'string' },
            style: 'simple',
          },
          example: 'test',
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': {
          schema: z
            .string()
            .openapi({ description: 'Coupon code of the archived coupon.', title: 'couponCode' }),
          example: 'promo10',
        },
      },
    },
  },
})

export const getApiRnbPvtArchiveTaxesCalculatorConfigurationRoute = createRoute({
  method: 'get',
  path: '/api/rnb/pvt/archive/taxes/calculatorConfiguration',
  tags: ['Promotions and Taxes'],
  summary: 'List Archived Taxes',
  description: 'Lists all archived taxes.',
  operationId: 'GetArchivedTaxes',
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
    200: {
      description: 'OK',
      content: {
        'application/json': {
          schema: z
            .object({ items: GetTaxesSchema.exactOptional() })
            .openapi({ description: 'Response object.', title: '', required: [] }),
          example: {
            items: [
              {
                Campaigns: [],
                activateGiftsMultiplier: false,
                areSalesChannelIdsExclusive: false,
                beginDate: '2022-05-09T03:00:00Z',
                description: 'My description',
                endDate: '2022-06-01T02:30:00Z',
                hasMaxPricePerItem: false,
                idCalculatorConfiguration: '90f4affc-fea0-424c-a7a7-c69aec7bbdc8',
                idsSalesChannel: ['1'],
                isActive: false,
                isArchived: true,
                isTax: true,
                lastModifiedUtc: '2022-05-16T19:43:06.1801742Z',
                maxUsage: 0,
                name: 'Test Tax',
                percentualTax: 10,
                scope: {
                  allCatalog: false,
                  brands: 1,
                  brandsAreInclusive: true,
                  categories: 1,
                  categoriesAreInclusive: true,
                  collections: 1,
                  collectionsAreInclusive: true,
                  products: 1,
                  productsAreInclusive: true,
                  sellers: 0,
                  sellersAreInclusive: false,
                  skus: 1,
                  skusAreInclusive: true,
                },
                status: 'inactive',
                type: 'tax',
                utmCampain: '',
                utmSource: '',
                utmiCampaign: '',
              },
            ],
          },
        },
      },
    },
  },
})

export const getApiRnbPvtBenefitsCalculatorconfigurationRoute = createRoute({
  method: 'get',
  path: '/api/rnb/pvt/benefits/calculatorconfiguration',
  tags: ['Promotions and Taxes'],
  summary: 'Get All Promotions',
  description:
    "Retrieves all promotions from an account. \r\n\r\n> 📘 Onboarding guide \r\n>\r\n> Check the new [Promotions onboarding guide](https://developers.vtex.com/vtex-rest-api/docs/promotions-overview). We created this guide to improve the onboarding experience for developers at VTEX. It assembles all documentation on our Developer Portal about the Promotions and is organized by focusing on the developer's journey.\r\n\r\n",
  operationId: 'GetAllBenefits',
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
    200: {
      description: 'OK',
      content: {
        'application/json': {
          schema: z
            .object({
              archivedItems: z
                .array(z.string().openapi({ description: 'Archived item.' }))
                .exactOptional()
                .openapi({ description: 'Archived items.' }),
              disabledItems: z
                .array(z.any())
                .exactOptional()
                .openapi({ description: 'Disabled items.' }),
              items: GetPromotionsSchema.exactOptional(),
              limitConfiguration: z
                .object({
                  activesCount: z.int().exactOptional().openapi({ description: 'Actives count.' }),
                  limit: z.int().exactOptional().openapi({ description: 'Limit.' }),
                })
                .exactOptional()
                .openapi({ description: 'Limit configuration.', required: [] }),
              limitConfigurationMaxPrice: z
                .object({
                  activesCount: z.int().exactOptional().openapi({ description: 'Actives count.' }),
                  limit: z.int().exactOptional().openapi({ description: 'Limit.' }),
                })
                .exactOptional()
                .openapi({ description: 'Limit configuration max price.', required: [] }),
            })
            .openapi({ title: '', required: [] }),
          example: {
            archivedItems: [],
            disabledItems: [],
            items: [
              {
                Campaigns: [],
                activateGiftsMultiplier: false,
                areSalesChannelIdsExclusive: false,
                beginDate: '2020-05-01T18:47:15.89Z',
                conditionsIds: ['372e1868-2c0e-4437-be45-1ef8c9cab735'],
                description: 'Promotion for Social Seller',
                hasMaxPricePerItem: false,
                idCalculatorConfiguration: 'd8a1cd2e-b667-4054-b3ae-b79124c7218e',
                idsSalesChannel: [],
                isActive: true,
                isArchived: false,
                isTax: false,
                lastModifiedUtc: '2021-09-17T18:13:16.2896414Z',
                maxUsage: 0,
                name: 'Promoção Social Seller',
                percentualTax: 0,
                scope: {
                  allCatalog: true,
                  brands: 0,
                  brandsAreInclusive: false,
                  categories: 0,
                  categoriesAreInclusive: false,
                  collections: 0,
                  collectionsAreInclusive: false,
                  products: 0,
                  productsAreInclusive: false,
                  sellers: 0,
                  sellersAreInclusive: false,
                  skus: 0,
                  skusAreInclusive: true,
                },
                status: 'active',
                type: 'regular',
                utmCampain: 'georgeTest',
                utmSource: 'georgeSource',
                utmiCampaign: '',
              },
              {
                Campaigns: [],
                activateGiftsMultiplier: false,
                areSalesChannelIdsExclusive: false,
                beginDate: '2009-12-31T02:00:00Z',
                description: '',
                hasMaxPricePerItem: false,
                idCalculatorConfiguration: '7c946926-7815-4446-9428-83bd577a9135',
                idsSalesChannel: [],
                isActive: true,
                isArchived: false,
                isTax: false,
                lastModifiedUtc: '2021-11-12T16:58:30.2553053Z',
                maxUsage: 0,
                name: 'Progressive Discount',
                percentualTax: 0,
                scope: {
                  allCatalog: true,
                  brands: 0,
                  brandsAreInclusive: true,
                  categories: 0,
                  categoriesAreInclusive: true,
                  collections: 0,
                  collectionsAreInclusive: true,
                  products: 0,
                  productsAreInclusive: true,
                  sellers: 0,
                  sellersAreInclusive: true,
                  skus: 0,
                  skusAreInclusive: true,
                },
                status: 'active',
                type: 'progressive',
                utmCampain: '',
                utmSource: '',
                utmiCampaign: '',
              },
            ],
            limitConfiguration: { activesCount: 4, limit: 100 },
            limitConfigurationMaxPrice: { activesCount: 0, limit: 10 },
          },
        },
      },
    },
  },
})

export const postApiRnbPvtCalculatorconfigurationRoute = createRoute({
  method: 'post',
  path: '/api/rnb/pvt/calculatorconfiguration',
  tags: ['Promotions and Taxes'],
  summary: 'Create or Update Promotion or Tax',
  description:
    'Creates or updates a specific Promotion by its Promotion ID or a specific Tax by its Tax ID.',
  operationId: 'CreateOrUpdateCalculatorConfiguration',
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
      description: '',
      content: {
        'application/json': {
          schema: z
            .object({
              absoluteShippingDiscountValue: z
                .number()
                .exactOptional()
                .openapi({ description: 'Maximum shipping value.', example: 0 }),
              accumulateWithManualPrice: z
                .boolean()
                .exactOptional()
                .openapi({
                  description:
                    'Allows the promotion to apply to products whose prices have been manually added by a call-center operator.',
                  example: false,
                }),
              activateGiftsMultiplier: z
                .boolean()
                .exactOptional()
                .openapi({
                  description: 'If set as `true`, it activates gifts Multiplier.',
                  example: false,
                }),
              activeDaysOfWeek: z
                .array(
                  z
                    .string()
                    .openapi({
                      description: 'Day of the week that the Promotion or Tax will be valid.',
                      example: 'Monday',
                    }),
                )
                .exactOptional()
                .openapi({
                  description: 'Defines which days of the week the Promotion or Tax will applied.',
                }),
              affiliates: z
                .array(
                  z
                    .object({
                      id: z
                        .string()
                        .exactOptional()
                        .openapi({ description: 'Affiliate ID.', example: '1' }),
                      name: z
                        .string()
                        .exactOptional()
                        .openapi({ description: 'Affiliate Name.', example: 'Amazon' }),
                    })
                    .openapi({
                      description: 'Object with information of the affiliate.',
                      required: [],
                    }),
                )
                .exactOptional()
                .openapi({
                  description:
                    'Marketplace order identifier. The discount will apply to selected affiliates.',
                }),
              applyToAllShippings: z
                .boolean()
                .exactOptional()
                .openapi({
                  description: 'Promotion or Tax will be applied to all kind of shipping.',
                  example: false,
                }),
              areSalesChannelIdsExclusive: z
                .boolean()
                .exactOptional()
                .openapi({
                  description:
                    'If set to `false`, this Promotion or Tax will be applied to any trade policies present on the `idsSalesChannel` field. If set to `true`, trade policies present on that field will make this Promotion or Tax not to be applied.',
                  example: false,
                }),
              beginDateUtc: z
                .string()
                .exactOptional()
                .openapi({
                  description: 'Promotion or Tax Begin Date (UTC).',
                  example: '2020-05-01T18:47:15.89Z',
                }),
              brands: z
                .array(
                  z
                    .object({
                      id: z
                        .string()
                        .exactOptional()
                        .openapi({ description: 'Brand ID.', example: '1' }),
                      name: z
                        .string()
                        .exactOptional()
                        .openapi({ description: 'Brand Name.', example: 'Brand (1)' }),
                    })
                    .openapi({
                      description: 'Object with information of the brand.',
                      required: [],
                    }),
                )
                .exactOptional()
                .openapi({
                  description:
                    'Object composed by the brands that will activate or deactivate the Promotion or Tax.',
                }),
              brandsAreInclusive: z
                .boolean()
                .exactOptional()
                .openapi({
                  description:
                    'If set to `true`, this Promotion or Tax will be applied to any brand present on the `brands` field. If set to `false`, brands present on that field will make this Promotion or Tax not to be applied.',
                  example: true,
                }),
              campaigns: z
                .array(z.any())
                .exactOptional()
                .openapi({
                  description: 'Campaign Audiences that activate this Promotion or Tax.',
                  example: ['Campaign Audience test'],
                }),
              cardIssuers: z.array(z.any()).exactOptional().openapi({ deprecated: true }),
              categories: z
                .array(
                  z
                    .object({
                      id: z
                        .string()
                        .exactOptional()
                        .openapi({ description: 'Category ID.', example: '1' }),
                      name: z
                        .string()
                        .exactOptional()
                        .openapi({ description: 'Category Name.', example: 'Vinhos Tintos (1)' }),
                    })
                    .openapi({
                      description: 'Object with information of the category.',
                      required: [],
                    }),
                )
                .exactOptional()
                .openapi({
                  description:
                    'Object composed by the categories that will activate or deactivate the Promotion or Tax.',
                }),
              categoriesAreInclusive: z
                .boolean()
                .exactOptional()
                .openapi({
                  description:
                    'If set to `true`, this Promotion or Tax will be applied to any category present on the `categories` field. If set to `false`, categories present on that field will make this Promotion or Tax not to be applied.',
                  example: true,
                }),
              clusterExpressions: z
                .array(
                  z
                    .string()
                    .openapi({ description: 'Cluster expression.', example: 'birthday=true' }),
                )
                .exactOptional()
                .openapi({ description: 'An expression to use with clusters.' }),
              collections: z
                .array(
                  z
                    .object({
                      id: z
                        .string()
                        .exactOptional()
                        .openapi({ description: 'Collection ID.', example: '1' }),
                      name: z
                        .string()
                        .exactOptional()
                        .openapi({ description: 'Collection Name.', example: 'Collection (1)' }),
                    })
                    .openapi({
                      description: 'Object with information of the collection.',
                      required: [],
                    }),
                )
                .exactOptional()
                .openapi({
                  description:
                    'Object composed by the collections that will activate or deactivate the Promotion or Tax.',
                }),
              collections1BuyTogether: z
                .array(z.string().openapi({ description: 'Collection ID.', example: '1' }))
                .exactOptional()
                .openapi({
                  description:
                    'Collections that will generate the Promotion, type **Buy Together**, **More for less**, **Progressive Discount**, **Buy One Get One**.',
                }),
              collections2BuyTogether: z
                .array(z.any())
                .exactOptional()
                .openapi({ deprecated: true }),
              collectionsIsInclusive: z
                .boolean()
                .exactOptional()
                .openapi({
                  description:
                    'If set to `true`, this Promotion or Tax will be applied to any collection present on the `collections` field. If set to `false`, collections present on that field will make this Promotion or Tax not to be applied.',
                  example: false,
                }),
              compareListPriceAndPrice: z
                .boolean()
                .exactOptional()
                .openapi({
                  description: 'If the **List Price** and **Price** are the same.',
                  example: false,
                }),
              conditionsIds: z
                .array(z.string().openapi({ description: 'Condition ID.', example: '1' }))
                .exactOptional()
                .openapi({ description: 'Array with conditions IDs.' }),
              coupon: z.array(z.any()).exactOptional().openapi({ deprecated: true }),
              cumulative: z
                .boolean()
                .exactOptional()
                .openapi({
                  description:
                    'Defines if a Promotion or Tax can accumulate with another one. (`true`) or not (`false`).',
                  example: false,
                }),
              daysAgoOfPurchases: z
                .int()
                .exactOptional()
                .openapi({
                  description: 'Number of days that are considered to add the purchase history.',
                  example: 0,
                }),
              description: z
                .string()
                .exactOptional()
                .openapi({
                  description: 'Internal description of the Promotion or Tax.',
                  example: 'Description of the promotion.',
                }),
              disableDeal: z.boolean().exactOptional().openapi({ deprecated: true }),
              discountType: z
                .string()
                .exactOptional()
                .openapi({
                  description: 'The type of discount that will apply to the promotion.',
                  example: 'percentual',
                }),
              enableBuyTogetherPerSku: z
                .boolean()
                .exactOptional()
                .openapi({ description: 'Enable **Buy Together** per SKU.', example: false }),
              endDateUtc: z
                .string()
                .exactOptional()
                .openapi({
                  description: 'Promotion or Tax End Date (UTC).',
                  example: '2020-05-01T18:47:15.89Z',
                }),
              firstBuyIsProfileOptimistic: z
                .boolean()
                .exactOptional()
                .openapi({
                  description: 'Applies the discount even if the user is not logged.',
                  example: false,
                }),
              giftListTypes: z
                .array(z.string().openapi({ description: 'Gift List Type.', example: 'Gift SKU' }))
                .exactOptional()
                .openapi({ description: 'Gifts List Type.' }),
              idCalculatorConfiguration: z
                .string()
                .exactOptional()
                .openapi({
                  description: 'Promotion ID or Tax ID.',
                  example: 'ba087fa9-8587-44b3-8ef1-ade8d053e9e9',
                }),
              idSeller: z
                .string()
                .exactOptional()
                .openapi({ description: 'Seller Name.', example: '1' }),
              idSellerIsInclusive: z
                .boolean()
                .exactOptional()
                .openapi({
                  description:
                    'If set to `true`, this Promotion or Tax will be applied to any seller present on the `idSeller` field. If set to `false`, sellers present on that field will make this Promotion or Tax not to be applied.',
                  example: false,
                }),
              idsSalesChannel: z
                .array(
                  z.string().openapi({ description: 'Trade Policy ID.', example: 'Principal' }),
                )
                .exactOptional()
                .openapi({
                  description: 'List of Trade Policies that activate this Promotion or Tax.',
                }),
              installment: z.int().exactOptional().openapi({ deprecated: true }),
              isActive: z
                .boolean()
                .exactOptional()
                .openapi({
                  description:
                    'If set as `true` the Promotion or Tax is activated. If set as `false` the Promotion or Tax is deactivated.',
                  example: true,
                }),
              isArchived: z
                .boolean()
                .exactOptional()
                .openapi({
                  description:
                    'If set as `true` the Promotion or Tax is archived. If set as `false` the Promotion or Tax is not archived.',
                  example: false,
                }),
              isDifferentListPriceAndPrice: z
                .boolean()
                .exactOptional()
                .openapi({
                  description:
                    'Applies the Promotion or Tax only if the list price and price is different.',
                  example: false,
                }),
              isFeatured: z
                .boolean()
                .exactOptional()
                .openapi({
                  description:
                    "Insert a flag with the promotion name used in the product's window display and page.",
                  example: true,
                }),
              isFirstBuy: z
                .boolean()
                .exactOptional()
                .openapi({
                  description: "Applies the discount only if it's a first buy.",
                  example: false,
                }),
              isMinMaxInstallments: z
                .boolean()
                .exactOptional()
                .openapi({
                  description:
                    'Set if the Promotion or Tax will be applied considering a minimum and maximum values for installments.',
                  example: false,
                }),
              isSlaSelected: z
                .boolean()
                .exactOptional()
                .openapi({
                  description:
                    'Applies selected discount only when one of the defined shipping method is selected by the customer.',
                  example: false,
                }),
              itemMaxPrice: z
                .number()
                .exactOptional()
                .openapi({ description: 'Maximum price of the item.', example: 0 }),
              itemMinPrice: z
                .number()
                .exactOptional()
                .openapi({ description: 'Minimum price of the item.', example: 0 }),
              lastModified: z
                .string()
                .exactOptional()
                .openapi({
                  description: 'Date when the Promotion or Tax was last modified.',
                  example: '2021-02-23T20:58:38.7963862Z',
                }),
              listSku1BuyTogether: z
                .array(z.any())
                .exactOptional()
                .openapi({
                  description: 'SKU first list for the promotion **Buy Together**.',
                  example: ['SKU'],
                }),
              listSku2BuyTogether: z
                .array(z.any())
                .exactOptional()
                .openapi({
                  description: 'SKU second list for the promotion **Buy Together**.',
                  example: ['SKU'],
                }),
              marketingTags: z
                .array(
                  z
                    .string()
                    .openapi({ description: 'Promotion or Tax Marketing tag.', example: 'MKT1' }),
                )
                .exactOptional()
                .openapi({ description: 'Promotion or Tax Marketing tags.' }),
              marketingTagsAreNotInclusive: z
                .boolean()
                .exactOptional()
                .openapi({
                  description:
                    'If set to `false`, this Promotion or Tax will be applied to any marketing tag present on the `marketingTags` field. If set to `true`, marketing tags present on that field will make this Promotion or Tax not to be applied.',
                  example: false,
                }),
              maxInstallment: z
                .int()
                .exactOptional()
                .openapi({ description: 'Maximum value for installment.', example: 0 }),
              maxNumberOfAffectedItems: z
                .int()
                .exactOptional()
                .openapi({
                  description: 'The maximum number of affected items for a promotion.',
                  example: 0,
                }),
              maxNumberOfAffectedItemsGroupKey: z
                .string()
                .exactOptional()
                .openapi({
                  description: 'The maximum number of affected items by group key for a promotion.',
                  example: 'perCart',
                }),
              maxPricesPerItems: z.array(z.any()).exactOptional().openapi({ deprecated: true }),
              maxUsage: z
                .int()
                .exactOptional()
                .openapi({
                  description: 'Defines how many times the Promotion or Tax can be used.',
                  example: 0,
                }),
              maxUsagePerClient: z
                .int()
                .exactOptional()
                .openapi({
                  description: 'Defines if the promotion can be used multiple times per client.',
                  example: 0,
                }),
              maximumUnitPriceDiscount: z
                .number()
                .exactOptional()
                .openapi({
                  description:
                    'The maximum price for each item of the purchase will be the price set up.',
                  example: 0,
                }),
              merchants: z.array(z.any()).exactOptional().openapi({ deprecated: true }),
              minInstallment: z
                .int()
                .exactOptional()
                .openapi({ description: 'Minimum value for installment.', example: 0 }),
              minimumQuantityBuyTogether: z
                .int()
                .exactOptional()
                .openapi({
                  description: 'Minimum quantity for **Buy Together** promotion.',
                  example: 0,
                }),
              multipleUsePerClient: z
                .boolean()
                .exactOptional()
                .openapi({
                  description: 'Defines if the promotion can be used multiple times per client.',
                  example: false,
                }),
              name: z
                .string()
                .exactOptional()
                .openapi({
                  description: 'Promotion name or Tax name.',
                  example: 'Promoção Social Seller',
                }),
              newOffset: z
                .number()
                .exactOptional()
                .openapi({ description: 'New time offset from UTC in seconds.', example: -3 }),
              nominalDiscountValue: z
                .number()
                .exactOptional()
                .openapi({
                  description: 'Exact discount to be applied for the total purchase value.',
                  example: 0,
                }),
              nominalRewardValue: z
                .number()
                .exactOptional()
                .openapi({ description: 'Nominal value for rewards program.', example: 0 }),
              nominalShippingDiscountValue: z
                .number()
                .exactOptional()
                .openapi({
                  description: 'Exact discount to be applied for the shipping value.',
                  example: 0,
                }),
              nominalTax: z
                .number()
                .exactOptional()
                .openapi({ description: 'Nominal Tax.', example: 0 }),
              offset: z
                .int()
                .exactOptional()
                .openapi({ description: 'Time offset from UTC in seconds.', example: -3 }),
              orderStatusRewardValue: z
                .string()
                .exactOptional()
                .openapi({ description: 'Order status reward value.', example: 'invoiced' }),
              origin: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    'Origin of the Promotion or Tax, `marketplace` or `Fulfillment`.  Read [Difference between orders with marketplace and fulfillment sources](https://help.vtex.com/en/tutorial/what-are-orders-with-marketplace-source-and-orders-with-fulfillment-source--6eVYrmUAwMOeKICU2KuG06) for more information.',
                  example: 'marketplace',
                }),
              paymentsMethods: z
                .array(
                  z
                    .object({
                      id: z
                        .string()
                        .exactOptional()
                        .openapi({ description: 'Payment Method ID.', example: '2' }),
                      name: z
                        .string()
                        .exactOptional()
                        .openapi({ description: 'Payment Method Name.', example: 'Visa (2)' }),
                    })
                    .openapi({
                      description: 'Object with information of the Payment Method.',
                      required: [],
                    }),
                )
                .exactOptional()
                .openapi({
                  description:
                    'Array composed by all the Payments Methods that activate this Promotion or Tax.',
                }),
              paymentsRules: z.array(z.any()).exactOptional().openapi({ deprecated: true }),
              percentualDiscountValue: z
                .number()
                .exactOptional()
                .openapi({
                  description: 'Percentage discount to be applied for total purchase value.',
                  example: 10,
                }),
              percentualDiscountValueList: z
                .array(
                  z.number().openapi({ description: 'Percentual discount value.', example: 10 }),
                )
                .exactOptional()
                .openapi({ description: 'Percentual discount value list.' }),
              percentualDiscountValueList1: z
                .number()
                .exactOptional()
                .openapi({
                  description:
                    'Valid discounts for the SKUs in `listSku1BuyTogether`, discount list used for Buy Together Promotions.',
                  example: 0,
                }),
              percentualDiscountValueList2: z
                .number()
                .exactOptional()
                .openapi({
                  description: 'Equivalent to `percentualDiscountValueList1`.',
                  example: 0,
                }),
              percentualRewardValue: z
                .number()
                .exactOptional()
                .openapi({ description: 'Percentage value for rewards program.', example: 0 }),
              percentualShippingDiscountValue: z
                .number()
                .exactOptional()
                .openapi({
                  description: 'Percentage discount to be applied for shipping value.',
                  example: 0,
                }),
              percentualTax: z
                .number()
                .exactOptional()
                .openapi({ description: 'Percentual Tax over purchase total value.', example: 0 }),
              products: z
                .array(
                  z
                    .object({
                      id: z
                        .string()
                        .exactOptional()
                        .openapi({ description: 'Product ID.', example: '1' }),
                      name: z
                        .string()
                        .exactOptional()
                        .openapi({ description: 'Product Name.', example: 'Vinho (1)' }),
                    })
                    .openapi({
                      description: 'Object with information of the product.',
                      required: [],
                    }),
                )
                .exactOptional()
                .openapi({
                  description:
                    'Object composed by the products that will activate or deactivate the Promotion or Tax.',
                }),
              productsAreInclusive: z
                .boolean()
                .exactOptional()
                .openapi({
                  description:
                    'If set to `true`, this Promotion or Tax will be applied to any product present on the `products` field. If set to `false`, products present on that field will make this Promotion or Tax not to be applied.',
                  example: true,
                }),
              productsSpecifications: z
                .array(z.any())
                .exactOptional()
                .openapi({ deprecated: true }),
              quantityToAffectBuyTogether: z
                .int()
                .exactOptional()
                .openapi({
                  description: 'Quantity to affect **Buy Together** promotion.',
                  example: 0,
                }),
              rebatePercentualDiscountValue: z
                .number()
                .exactOptional()
                .openapi({ description: 'Percentual Shipping Discount Value.', example: 0 }),
              restrictionsBins: z
                .array(z.string().openapi({ description: "Card's BIN.", example: '1234' }))
                .exactOptional()
                .openapi({
                  description: "The discount will be granted if the card's BIN is given.",
                }),
              shippingPercentualTax: z
                .number()
                .exactOptional()
                .openapi({
                  description: 'Shipping Percentual Tax over purchase total value.',
                  example: 0,
                }),
              shouldDistributeDiscountAmongMatchedItems: z
                .boolean()
                .exactOptional()
                .openapi({
                  description: 'Should distribute discount among matched items.',
                  example: false,
                }),
              skus: z
                .array(
                  z
                    .object({
                      id: z
                        .string()
                        .exactOptional()
                        .openapi({ description: 'SKU ID.', example: '1' }),
                      name: z
                        .string()
                        .exactOptional()
                        .openapi({ description: 'SKU Name.', example: 'Vinho tinto (1)' }),
                    })
                    .openapi({ description: 'Object with information of the SKU.', required: [] }),
                )
                .exactOptional()
                .openapi({
                  description:
                    'Object composed by the SKUs that will activate or deactivate the Promotion or Tax.',
                }),
              skusAreInclusive: z
                .boolean()
                .exactOptional()
                .openapi({
                  description:
                    'If set to `true`, this Promotion or Tax will be applied to any SKU present on the `skus` field. If set to `false`, SKUs present on that field will make this Promotion or Tax not to be applied.',
                  example: true,
                }),
              skusGift: z
                .object({
                  gifts: z
                    .array(z.any())
                    .exactOptional()
                    .openapi({ description: 'Array with SKU Gifts IDs.', example: ['SKU'] }),
                  quantitySelectable: z
                    .int()
                    .exactOptional()
                    .openapi({ description: 'Quantity of SKU Gifts.', example: 0 }),
                })
                .exactOptional()
                .openapi({
                  description:
                    'SKU Gift Object. Total discount on the product value set as a gift.',
                  required: [],
                }),
              slasIds: z
                .array(z.string().openapi({ description: 'Shipping method.', example: 'Express' }))
                .exactOptional()
                .openapi({
                  description:
                    'The discount will be granted if the shipping method is the same as the one given.',
                }),
              stores: z.array(z.any()).exactOptional().openapi({ deprecated: true }),
              storesAreInclusive: z.boolean().exactOptional().openapi({ deprecated: true }),
              totalValueCeling: z
                .number()
                .exactOptional()
                .openapi({
                  description: 'Maximum chart value to activate the Promotion or Tax.',
                  example: 0,
                }),
              totalValueFloor: z
                .number()
                .exactOptional()
                .openapi({
                  description: 'Minimum chart value to activate the Promotion or Tax.',
                  example: 0,
                }),
              totalValueIncludeAllItems: z.boolean().exactOptional().openapi({ deprecated: true }),
              totalValueMode: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    'Defines if products that already are receiving a promotion will be considered on the chart total value. There are three options available: `IncludeMatchedItems`, `ExcludeMatchedItems`, `AllItems`.',
                  example: 'IncludeMatchedItems',
                }),
              totalValuePurchase: z
                .number()
                .exactOptional()
                .openapi({
                  description:
                    'Total value a client must have in past orders to activate the Promotion or Tax.',
                  example: 0,
                }),
              type: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    'Defines what is the type of the promotion or indicates if it is a tax. Possible values: `regular` ([Regular Promotion](https://help.vtex.com/tutorial/regular-promotion--tutorials_327)), `combo` ([Buy Together](https://help.vtex.com/en/tutorial/buy-together--tutorials_323)), `forThePriceOf` ([More for Less](https://help.vtex.com/en/tutorial/creating-a-more-for-less-promotion--tutorials_325)), `progressive` ([Progressive Discount](https://help.vtex.com/en/tutorial/progressive-discount--tutorials_324)), `buyAndWin` ([Buy One Get One](https://help.vtex.com/en/tutorial/buy-one-get-one--tutorials_322)), `maxPricePerItem` (Deprecated), `campaign` ([Campaign Promotion](https://help.vtex.com/en/tutorial/campaign-promotion--1ChYXhK2AQGuS6wAqS8Ume)), `tax` (Tax), `multipleEffects` (Multiple Effects).',
                  example: 'regular',
                }),
              useNewProgressiveAlgorithm: z
                .boolean()
                .exactOptional()
                .openapi({ description: 'Use new progressive algorithm.', example: false }),
              utmCampaign: z
                .string()
                .exactOptional()
                .openapi({ description: 'Coupon utmCampaign code.', example: 'testSource' }),
              utmSource: z
                .string()
                .exactOptional()
                .openapi({ description: 'Coupon utmSource code.', example: 'testSource' }),
              zipCodeRanges: z
                .array(
                  z
                    .object({
                      inclusive: z
                        .boolean()
                        .exactOptional()
                        .openapi({
                          description: 'Defines if the zip code applies the promotion.',
                          example: false,
                        }),
                    })
                    .openapi({ description: 'Zip code that applies the promotion.', required: [] }),
                )
                .exactOptional()
                .openapi({ description: 'Range of the zip code that applies the promotion.' }),
            })
            .openapi({ required: [] }),
          example: {
            absoluteShippingDiscountValue: 0,
            accumulateWithManualPrice: false,
            activateGiftsMultiplier: false,
            activeDaysOfWeek: [],
            affiliates: [],
            applyToAllShippings: false,
            areSalesChannelIdsExclusive: false,
            beginDateUtc: '2020-05-01T18:47:15.89Z',
            brands: [],
            brandsAreInclusive: false,
            campaigns: [],
            cardIssuers: [],
            categories: [],
            categoriesAreInclusive: false,
            clusterExpressions: [],
            collections: [],
            collections1BuyTogether: [],
            collections2BuyTogether: [],
            collectionsIsInclusive: false,
            compareListPriceAndPrice: false,
            conditionsIds: ['372e1868-2c0e-4437-be45-1ef8c9cab735'],
            coupon: [],
            cumulative: false,
            daysAgoOfPurchases: 0,
            description: 'Promotion for Social Seller',
            disableDeal: false,
            discountType: 'percentual',
            enableBuyTogetherPerSku: false,
            firstBuyIsProfileOptimistic: false,
            giftListTypes: [],
            idCalculatorConfiguration: 'd8a1cd2e-b667-4054-b3ae-b79124c7218e',
            idSellerIsInclusive: false,
            idsSalesChannel: [],
            installment: 0,
            isActive: true,
            isArchived: false,
            isDifferentListPriceAndPrice: false,
            isFeatured: false,
            isFirstBuy: false,
            isMinMaxInstallments: false,
            isSlaSelected: false,
            itemMaxPrice: 0,
            itemMinPrice: 0,
            lastModified: '2021-09-17T18:13:16.2896414Z',
            listSku1BuyTogether: [],
            listSku2BuyTogether: [],
            marketingTags: [],
            marketingTagsAreNotInclusive: false,
            maxInstallment: 0,
            maxNumberOfAffectedItems: 0,
            maxNumberOfAffectedItemsGroupKey: 'perCart',
            maxPricesPerItems: [],
            maxUsage: 0,
            maxUsagePerClient: 0,
            maximumUnitPriceDiscount: 0,
            merchants: [],
            minInstallment: 0,
            minimumQuantityBuyTogether: 0,
            multipleUsePerClient: false,
            name: 'Promoção Social Seller',
            newOffset: -3,
            nominalDiscountValue: 0,
            nominalRewardValue: 0,
            nominalShippingDiscountValue: 0,
            nominalTax: 0,
            offset: -3,
            orderStatusRewardValue: 'invoiced',
            origin: 'marketplace',
            paymentsMethods: [],
            paymentsRules: [],
            percentualDiscountValue: 10,
            percentualDiscountValueList: [],
            percentualDiscountValueList1: 0,
            percentualDiscountValueList2: 0,
            percentualRewardValue: 0,
            percentualShippingDiscountValue: 0,
            percentualTax: 0,
            products: [],
            productsAreInclusive: false,
            productsSpecifications: [],
            quantityToAffectBuyTogether: 0,
            rebatePercentualDiscountValue: 0,
            restrictionsBins: [],
            shippingPercentualTax: 0,
            shouldDistributeDiscountAmongMatchedItems: false,
            skus: [],
            skusAreInclusive: true,
            skusGift: { quantitySelectable: 0 },
            slasIds: [],
            stores: [],
            storesAreInclusive: false,
            totalValueCeling: 0,
            totalValueFloor: 0,
            totalValueIncludeAllItems: false,
            totalValueMode: 'IncludeMatchedItems',
            totalValuePurchase: 0,
            type: 'regular',
            useNewProgressiveAlgorithm: false,
            utmCampaign: 'georgeTest',
            utmSource: 'georgeSource',
            zipCodeRanges: [],
          },
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': {
          schema: z
            .object({
              absoluteShippingDiscountValue: z
                .number()
                .exactOptional()
                .openapi({ description: 'Maximum shipping value.' }),
              accumulateWithManualPrice: z
                .boolean()
                .exactOptional()
                .openapi({
                  description:
                    'Allows the promotion to apply to products whose prices have been manually added by a call-center operator.',
                }),
              activateGiftsMultiplier: z
                .boolean()
                .exactOptional()
                .openapi({ description: 'If set as `true`, it activates gifts Multiplier.' }),
              activeDaysOfWeek: z
                .array(
                  z
                    .string()
                    .openapi({ description: 'Day of the week that the promotion will be valid.' }),
                )
                .exactOptional()
                .openapi({
                  description: 'Defines which days of the week the promotion will applied.',
                }),
              affiliates: z
                .array(
                  z
                    .object({
                      id: z.string().exactOptional().openapi({ description: 'Affiliate ID.' }),
                      name: z.string().exactOptional().openapi({ description: 'Affiliate Name.' }),
                    })
                    .openapi({
                      description: 'Object with information of the affiliate.',
                      required: [],
                    }),
                )
                .exactOptional()
                .openapi({
                  description:
                    'Marketplace order identifier. The discount will apply to selected affiliates.',
                }),
              applyToAllShippings: z
                .boolean()
                .exactOptional()
                .openapi({ description: 'Promotion will be applied to all kind of shipping.' }),
              areSalesChannelIdsExclusive: z
                .boolean()
                .exactOptional()
                .openapi({
                  description:
                    'If set to `false`, this promotion will be applied to any trade policies present on the `idsSalesChannel` field. If set to `true`, trade policies present on that field will make this promotion not to be applied.',
                }),
              beginDateUtc: z
                .string()
                .exactOptional()
                .openapi({ description: 'Promotion Begin Date (UTC).' }),
              brands: z
                .array(
                  z
                    .object({
                      id: z.string().exactOptional().openapi({ description: 'Brand ID.' }),
                      name: z.string().exactOptional().openapi({ description: 'Brand Name.' }),
                    })
                    .openapi({
                      description: 'Object with information of the brand.',
                      required: [],
                    }),
                )
                .exactOptional()
                .openapi({
                  description:
                    'Object composed by the brands that will activate or deactivate the promotion.',
                }),
              brandsAreInclusive: z
                .boolean()
                .exactOptional()
                .openapi({
                  description:
                    'If set to `true`, this promotion will be applied to any brand present on the `brands` field. If set to `false`, brands present on that field will make this promotion not to be applied.',
                }),
              campaigns: z
                .array(z.any())
                .exactOptional()
                .openapi({ description: 'Campaign Audiences that activate this promotion.' }),
              cardIssuers: z.array(z.any()).exactOptional().openapi({ deprecated: true }),
              categories: z
                .array(
                  z
                    .object({
                      id: z.string().exactOptional().openapi({ description: 'Category ID.' }),
                      name: z.string().exactOptional().openapi({ description: 'Category Name.' }),
                    })
                    .openapi({
                      description: 'Object with information of the category.',
                      required: [],
                    }),
                )
                .exactOptional()
                .openapi({
                  description:
                    'Object composed by the categories that will activate or deactivate the promotion.',
                }),
              categoriesAreInclusive: z
                .boolean()
                .exactOptional()
                .openapi({
                  description:
                    'If set to `true`, this promotion will be applied to any category present on the `categories` field. If set to `false`, categories present on that field will make this promotion not to be applied.',
                }),
              clusterExpressions: z
                .array(z.string().openapi({ description: 'Cluster expression.' }))
                .exactOptional()
                .openapi({ description: 'An expression to use with clusters.' }),
              collections: z
                .array(
                  z
                    .object({
                      id: z.string().exactOptional().openapi({ description: 'Collection ID.' }),
                      name: z.string().exactOptional().openapi({ description: 'Collection Name.' }),
                    })
                    .openapi({
                      description: 'Object with information of the collection.',
                      required: [],
                    }),
                )
                .exactOptional()
                .openapi({
                  description:
                    'Object composed by the collections that will activate or deactivate the promotion.',
                }),
              collections1BuyTogether: z
                .array(z.string().openapi({ description: 'Collection ID.' }))
                .exactOptional()
                .openapi({
                  description:
                    'Collections that will generate the promotion, type **Buy Together**, **More for less**, **Progressive Discount**, **Buy One Get One**.',
                }),
              collections2BuyTogether: z
                .array(z.any())
                .exactOptional()
                .openapi({ deprecated: true }),
              collectionsIsInclusive: z
                .boolean()
                .exactOptional()
                .openapi({
                  description:
                    'If set to `true`, this promotion will be applied to any collection present on the `collections` field. If set to `false`, collections present on that field will make this promotion not to be applied.',
                }),
              compareListPriceAndPrice: z
                .boolean()
                .exactOptional()
                .openapi({ description: 'If the **List Price** and **Price** are the same.' }),
              conditionsIds: z
                .array(z.string().openapi({ description: 'Condition ID.' }))
                .exactOptional()
                .openapi({ description: 'Array with conditions IDs.' }),
              coupon: z.array(z.any()).exactOptional().openapi({ deprecated: true }),
              cumulative: z
                .boolean()
                .exactOptional()
                .openapi({
                  description:
                    'Defines if a promotion can accumulate with another one. (`true`) or not (`false`).',
                }),
              daysAgoOfPurchases: z
                .int()
                .exactOptional()
                .openapi({
                  description: 'Number of days that are considered to add the purchase history.',
                }),
              description: z
                .string()
                .exactOptional()
                .openapi({ description: 'Promotion internal description.' }),
              disableDeal: z.boolean().exactOptional().openapi({ deprecated: true }),
              discountType: z
                .string()
                .exactOptional()
                .openapi({ description: 'The type of discount that will apply to the promotion.' }),
              enableBuyTogetherPerSku: z
                .boolean()
                .exactOptional()
                .openapi({ description: 'Enable **Buy Together** per SKU.' }),
              endDateUtc: z
                .string()
                .exactOptional()
                .openapi({ description: 'Promotion End Date (UTC).' }),
              firstBuyIsProfileOptimistic: z
                .boolean()
                .exactOptional()
                .openapi({ description: 'Applies the discount even if the user is not logged.' }),
              giftListTypes: z
                .array(z.string().openapi({ description: 'Gift List Type.' }))
                .exactOptional()
                .openapi({ description: 'Gifts List Type.' }),
              idCalculatorConfiguration: z
                .string()
                .exactOptional()
                .openapi({ description: 'Promotion ID.' }),
              idSeller: z.string().exactOptional().openapi({ description: 'Seller Name.' }),
              idSellerIsInclusive: z
                .boolean()
                .exactOptional()
                .openapi({
                  description:
                    'If set to `true`, this promotion will be applied to any seller present on the `idSeller` field. If set to `false`, sellers present on that field will make this promotion not to be applied.',
                }),
              idsSalesChannel: z
                .array(z.string().openapi({ description: 'Trade Policy ID.' }))
                .exactOptional()
                .openapi({ description: 'List of Trade Policies that activate this promotion.' }),
              installment: z.int().exactOptional().openapi({ deprecated: true }),
              isActive: z
                .boolean()
                .exactOptional()
                .openapi({
                  description:
                    'If set as `true` the Promotion is activated. If set as `false` the Promotion is deactivated.',
                }),
              isArchived: z
                .boolean()
                .exactOptional()
                .openapi({
                  description:
                    'If set as `true` the Promotion is archived. If set as `false` the Promotion is not archived.',
                }),
              isDifferentListPriceAndPrice: z
                .boolean()
                .exactOptional()
                .openapi({
                  description:
                    'Applies the promotion only if the list price and price is different.',
                }),
              isFeatured: z
                .boolean()
                .exactOptional()
                .openapi({
                  description:
                    "Insert a flag with the promotion name used in the product's window display and page.",
                }),
              isFirstBuy: z
                .boolean()
                .exactOptional()
                .openapi({ description: "Applies the discount only if it's a first buy." }),
              isMinMaxInstallments: z
                .boolean()
                .exactOptional()
                .openapi({
                  description:
                    'Set if the promotion will be applied considering a minimum and maximum values for installments.',
                }),
              isSlaSelected: z
                .boolean()
                .exactOptional()
                .openapi({
                  description:
                    'Applies selected discount only when one of the defined shipping method is selected by the customer.',
                }),
              itemMaxPrice: z
                .number()
                .exactOptional()
                .openapi({ description: 'Maximum price of the item.' }),
              itemMinPrice: z
                .number()
                .exactOptional()
                .openapi({ description: 'Minimum price of the item.' }),
              lastModified: z
                .string()
                .exactOptional()
                .openapi({ description: 'When the Promotion was last modified.' }),
              listSku1BuyTogether: z
                .array(z.any())
                .exactOptional()
                .openapi({ description: 'SKU first list for the promotion **Buy Together**.' }),
              listSku2BuyTogether: z
                .array(z.any())
                .exactOptional()
                .openapi({ description: 'SKU second list for the promotion **Buy Together**.' }),
              marketingTags: z
                .array(z.string().openapi({ description: 'Promotion Marketing tag.' }))
                .exactOptional()
                .openapi({ description: 'Promotion Marketing tags.' }),
              marketingTagsAreNotInclusive: z
                .boolean()
                .exactOptional()
                .openapi({
                  description:
                    'If set to `false`, this promotion will be applied to any marketing tag present on the `marketingTags` field. If set to `true`, marketing tags present on that field will make this promotion not to be applied.',
                }),
              maxInstallment: z
                .int()
                .exactOptional()
                .openapi({ description: 'Maximum value for installment.' }),
              maxNumberOfAffectedItems: z
                .int()
                .exactOptional()
                .openapi({ description: 'The maximum number of affected items for a promotion.' }),
              maxNumberOfAffectedItemsGroupKey: z
                .string()
                .exactOptional()
                .openapi({
                  description: 'The maximum number of affected items by group key for a promotion.',
                }),
              maxPricesPerItems: z.array(z.any()).exactOptional().openapi({ deprecated: true }),
              maxUsage: z
                .int()
                .exactOptional()
                .openapi({ description: 'Defines how many times the promotion can be used.' }),
              maxUsagePerClient: z
                .int()
                .exactOptional()
                .openapi({
                  description: 'Defines if the promotion can be used multiple times per client.',
                }),
              maximumUnitPriceDiscount: z
                .number()
                .exactOptional()
                .openapi({
                  description:
                    'The maximum price for each item of the purchase will be the price set up.',
                }),
              merchants: z.array(z.any()).exactOptional().openapi({ deprecated: true }),
              minInstallment: z
                .int()
                .exactOptional()
                .openapi({ description: 'Minimum value for installment.' }),
              minimumQuantityBuyTogether: z
                .int()
                .exactOptional()
                .openapi({ description: 'Minimum quantity for **Buy Together** promotion.' }),
              multipleUsePerClient: z
                .boolean()
                .exactOptional()
                .openapi({
                  description: 'Defines if the promotion can be used multiple times per client.',
                }),
              name: z.string().exactOptional().openapi({ description: 'Promotion Name.' }),
              newOffset: z
                .number()
                .exactOptional()
                .openapi({ description: 'New time offset from UTC in seconds.' }),
              nominalDiscountValue: z
                .number()
                .exactOptional()
                .openapi({
                  description: 'Exact discount to be applied for the total purchase value.',
                }),
              nominalRewardValue: z
                .number()
                .exactOptional()
                .openapi({ description: 'Nominal value for rewards program.' }),
              nominalShippingDiscountValue: z
                .number()
                .exactOptional()
                .openapi({ description: 'Exact discount to be applied for the shipping value.' }),
              nominalTax: z.number().exactOptional().openapi({ description: 'Nominal Tax.' }),
              offset: z
                .int()
                .exactOptional()
                .openapi({ description: 'Time offset from UTC in seconds.' }),
              orderStatusRewardValue: z
                .string()
                .exactOptional()
                .openapi({ description: 'Order status reward value.' }),
              origin: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    'Origin of the promotion, `marketplace` or `Fulfillment`.  Read [Difference between orders with marketplace and fulfillment sources](https://help.vtex.com/en/tutorial/what-are-orders-with-marketplace-source-and-orders-with-fulfillment-source--6eVYrmUAwMOeKICU2KuG06) for more information.',
                }),
              paymentsMethods: z
                .array(
                  z
                    .object({
                      id: z.string().exactOptional().openapi({ description: 'Payment Method ID.' }),
                      name: z
                        .string()
                        .exactOptional()
                        .openapi({ description: 'Payment Method Name.' }),
                    })
                    .openapi({
                      description: 'Object with information of the Payment Method.',
                      required: [],
                    }),
                )
                .exactOptional()
                .openapi({ description: 'Array composed by all the Payments Methods.' }),
              paymentsRules: z.array(z.any()).exactOptional().openapi({ deprecated: true }),
              percentualDiscountValue: z
                .number()
                .exactOptional()
                .openapi({
                  description: 'Percentage discount to be applied for total purchase value.',
                }),
              percentualDiscountValueList: z
                .array(z.number().openapi({ description: 'Percentual discount value.' }))
                .exactOptional()
                .openapi({ description: 'Percentual discount value list.' }),
              percentualDiscountValueList1: z
                .number()
                .exactOptional()
                .openapi({
                  description:
                    'Valid discounts for the SKUs in `listSku1BuyTogether`, discount list used for Buy Together Promotions.',
                }),
              percentualDiscountValueList2: z
                .number()
                .exactOptional()
                .openapi({ description: 'Equivalent to `percentualDiscountValueList1`.' }),
              percentualRewardValue: z
                .number()
                .exactOptional()
                .openapi({ description: 'Percentage value for rewards program.' }),
              percentualShippingDiscountValue: z
                .number()
                .exactOptional()
                .openapi({ description: 'Percentage discount to be applied for shipping value.' }),
              percentualTax: z
                .number()
                .exactOptional()
                .openapi({ description: 'Percentual Tax over purchase total value.' }),
              products: z
                .array(
                  z
                    .object({
                      id: z.string().exactOptional().openapi({ description: 'Product ID.' }),
                      name: z.string().exactOptional().openapi({ description: 'Product Name.' }),
                    })
                    .openapi({
                      description: 'Object with information of the product.',
                      required: [],
                    }),
                )
                .exactOptional()
                .openapi({
                  description:
                    'Object composed by the products that will activate or deactivate the promotion.',
                }),
              productsAreInclusive: z
                .boolean()
                .exactOptional()
                .openapi({
                  description:
                    'If set to `true`, this promotion will be applied to any product present on the `products` field. If set to `false`, products present on that field will make this promotion not to be applied.',
                }),
              productsSpecifications: z
                .array(z.any())
                .exactOptional()
                .openapi({ deprecated: true }),
              quantityToAffectBuyTogether: z
                .int()
                .exactOptional()
                .openapi({ description: 'Quantity to affect **Buy Together** promotion.' }),
              rebatePercentualDiscountValue: z
                .number()
                .exactOptional()
                .openapi({ description: 'Percentual Shipping Discount Value.' }),
              restrictionsBins: z
                .array(z.string().openapi({ description: "Card's BIN." }))
                .exactOptional()
                .openapi({
                  description: "The discount will be granted if the card's BIN is given.",
                }),
              shippingPercentualTax: z
                .number()
                .exactOptional()
                .openapi({ description: 'Shipping Percentual Tax over purchase total value.' }),
              shouldDistributeDiscountAmongMatchedItems: z
                .boolean()
                .exactOptional()
                .openapi({ description: 'Should distribute discount among matched items.' }),
              skus: z
                .array(
                  z
                    .object({
                      id: z.string().exactOptional().openapi({ description: 'SKU ID.' }),
                      name: z.string().exactOptional().openapi({ description: 'SKU Name.' }),
                    })
                    .openapi({ description: 'Object with information of the SKU.', required: [] }),
                )
                .exactOptional()
                .openapi({
                  description:
                    'Object composed by the SKUs that will activate or deactivate the promotion.',
                }),
              skusAreInclusive: z
                .boolean()
                .exactOptional()
                .openapi({
                  description:
                    'If set to `true`, this promotion will be applied to any SKU present on the `skus` field. If set to `false`, SKUs present on that field will make this promotion not to be applied.',
                }),
              skusGift: z
                .object({
                  gifts: z
                    .int()
                    .exactOptional()
                    .openapi({ description: 'Array with SKU Gifts IDs.' }),
                  quantitySelectable: z
                    .int()
                    .exactOptional()
                    .openapi({ description: 'Quantity of SKU Gifts.' }),
                })
                .exactOptional()
                .openapi({
                  description:
                    'SKU Gift Object. Total discount on the product value set as a gift.',
                  required: [],
                }),
              slasIds: z
                .array(z.string().openapi({ description: 'Shipping method.' }))
                .exactOptional()
                .openapi({
                  description:
                    'The discount will be granted if the shipping method is the same as the one given.',
                }),
              stores: z.array(z.any()).exactOptional().openapi({ deprecated: true }),
              storesAreInclusive: z.boolean().exactOptional().openapi({ deprecated: true }),
              totalValueCeling: z
                .number()
                .exactOptional()
                .openapi({ description: 'Maximum chart value to activate the promotion.' }),
              totalValueFloor: z
                .number()
                .exactOptional()
                .openapi({ description: 'Minimum chart value to activate the promotion.' }),
              totalValueIncludeAllItems: z.boolean().exactOptional().openapi({ deprecated: true }),
              totalValueMode: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    'Defines if products that already are receiving a promotion will be considered on the chart total value. There are three options available: `IncludeMatchedItems`, `ExcludeMatchedItems`, `AllItems`.',
                }),
              totalValuePurchase: z
                .number()
                .exactOptional()
                .openapi({
                  description:
                    'Total value a client must have in past orders to active the promotion.',
                }),
              type: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    'Defines what is the type of the promotion or indicates if it is a tax. Possible values: `regular` ([Regular Promotion](https://help.vtex.com/tutorial/regular-promotion--tutorials_327)), `combo` ([Buy Together](https://help.vtex.com/en/tutorial/buy-together--tutorials_323)), `forThePriceOf` ([More for Less](https://help.vtex.com/en/tutorial/creating-a-more-for-less-promotion--tutorials_325)), `progressive` ([Progressive Discount](https://help.vtex.com/en/tutorial/progressive-discount--tutorials_324)), `buyAndWin` ([Buy One Get One](https://help.vtex.com/en/tutorial/buy-one-get-one--tutorials_322)), `maxPricePerItem` (Deprecated), `campaign` ([Campaign Promotion](https://help.vtex.com/en/tutorial/campaign-promotion--1ChYXhK2AQGuS6wAqS8Ume)), `tax` (Tax), `multipleEffects` (Multiple Effects).',
                }),
              useNewProgressiveAlgorithm: z
                .boolean()
                .exactOptional()
                .openapi({ description: 'Use new progressive algorithm.' }),
              utmCampaign: z
                .string()
                .exactOptional()
                .openapi({ description: 'Coupon utmCampaign code.' }),
              utmSource: z
                .string()
                .exactOptional()
                .openapi({ description: 'Coupon utmSource code.' }),
              zipCodeRanges: z
                .array(z.any())
                .exactOptional()
                .openapi({ description: 'Range of the zip code that applies the promotion.' }),
            })
            .openapi({ required: [] }),
          example: {
            absoluteShippingDiscountValue: 0,
            accumulateWithManualPrice: false,
            activateGiftsMultiplier: false,
            activeDaysOfWeek: [],
            affiliates: [],
            applyToAllShippings: false,
            areSalesChannelIdsExclusive: false,
            beginDateUtc: '2020-05-01T18:47:15.89Z',
            brands: [],
            brandsAreInclusive: false,
            campaigns: [],
            cardIssuers: [],
            categories: [],
            categoriesAreInclusive: false,
            clusterExpressions: [],
            collections: [],
            collections1BuyTogether: [],
            collections2BuyTogether: [],
            collectionsIsInclusive: false,
            compareListPriceAndPrice: false,
            conditionsIds: ['372e1868-2c0e-4437-be45-1ef8c9cab735'],
            coupon: [],
            cumulative: false,
            daysAgoOfPurchases: 0,
            disableDeal: false,
            discountType: 'percentual',
            enableBuyTogetherPerSku: false,
            firstBuyIsProfileOptimistic: false,
            giftListTypes: [],
            idCalculatorConfiguration: 'd8a1cd2e-b667-4054-b3ae-b79124c7218e',
            idSellerIsInclusive: false,
            idsSalesChannel: [],
            installment: 0,
            isActive: true,
            isArchived: false,
            isDifferentListPriceAndPrice: false,
            isFeatured: false,
            isFirstBuy: false,
            isMinMaxInstallments: false,
            isSlaSelected: false,
            itemMaxPrice: 0,
            itemMinPrice: 0,
            lastModified: '2021-02-23T20:58:38.7963862Z',
            listSku1BuyTogether: [],
            listSku2BuyTogether: [],
            marketingTags: [],
            marketingTagsAreNotInclusive: false,
            maxInstallment: 0,
            maxNumberOfAffectedItems: 0,
            maxNumberOfAffectedItemsGroupKey: 'perCart',
            maxPricesPerItems: [],
            maxUsage: 0,
            maxUsagePerClient: 0,
            maximumUnitPriceDiscount: 0,
            merchants: [],
            minInstallment: 0,
            minimumQuantityBuyTogether: 0,
            multipleUsePerClient: false,
            name: 'Promoção Social Seller',
            newOffset: -3,
            nominalDiscountValue: 0,
            nominalRewardValue: 0,
            nominalShippingDiscountValue: 0,
            nominalTax: 0,
            offset: -3,
            orderStatusRewardValue: 'invoiced',
            origin: 'marketplace',
            paymentsMethods: [
              { id: '202', name: 'Dinheiro (202)' },
              { id: '2', name: 'Visa (2)' },
            ],
            paymentsRules: [],
            percentualDiscountValue: 10,
            percentualDiscountValueList: [],
            percentualDiscountValueList1: 0,
            percentualDiscountValueList2: 0,
            percentualRewardValue: 0,
            percentualShippingDiscountValue: 0,
            percentualTax: 0,
            products: [],
            productsAreInclusive: false,
            productsSpecifications: [],
            quantityToAffectBuyTogether: 0,
            rebatePercentualDiscountValue: 0,
            restrictionsBins: [],
            shippingPercentualTax: 0,
            shouldDistributeDiscountAmongMatchedItems: false,
            skus: [],
            skusAreInclusive: true,
            skusGift: { quantitySelectable: 0 },
            slasIds: [],
            stores: [],
            storesAreInclusive: false,
            totalValueCeling: 0,
            totalValueFloor: 0,
            totalValueIncludeAllItems: false,
            totalValueMode: 'IncludeMatchedItems',
            totalValuePurchase: 0,
            type: 'regular',
            useNewProgressiveAlgorithm: false,
            utmCampaign: 'georgeTest',
            utmSource: 'georgeSource',
            zipCodeRanges: [],
          },
        },
      },
    },
  },
})

export const getApiRnbPvtCalculatorconfigurationIdCalculatorConfigurationRoute = createRoute({
  method: 'get',
  path: '/api/rnb/pvt/calculatorconfiguration/{idCalculatorConfiguration}',
  tags: ['Promotions and Taxes'],
  summary: 'Get Promotion or Tax by ID',
  description:
    'Retrieves a specific promotion by its Promotion ID or a specific tax by its Tax ID.',
  operationId: 'GetCalculatorConfigurationById',
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
      idCalculatorConfiguration: z
        .string()
        .openapi({
          param: {
            description: 'Promotion ID or tax ID.',
            in: 'path',
            name: 'idCalculatorConfiguration',
            required: true,
            schema: { example: 'd8a1cd2e-b667-4054-b3ae-b79124c7218e', type: 'string' },
            style: 'simple',
          },
          example: 'd8a1cd2e-b667-4054-b3ae-b79124c7218e',
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        Promotion: {
          schema: z
            .object({
              absoluteShippingDiscountValue: z
                .number()
                .exactOptional()
                .openapi({ description: 'Maximum value for the shipping.' }),
              accumulateWithManualPrice: z
                .boolean()
                .exactOptional()
                .openapi({
                  description:
                    'Allows the promotion to apply to products whose prices have been manually added by a call center operator.',
                }),
              activateGiftsMultiplier: z
                .boolean()
                .exactOptional()
                .openapi({ description: 'If set as `true`, it activates gifts Multiplier.' }),
              activeDaysOfWeek: z
                .array(
                  z
                    .string()
                    .openapi({ description: 'Day of the week that the promotion will be valid.' }),
                )
                .exactOptional()
                .openapi({
                  description: 'Defines which days of the week the promotion will applied.',
                }),
              affiliates: z
                .array(
                  z
                    .object({
                      id: z.string().exactOptional().openapi({ description: 'Affiliate ID.' }),
                      name: z.string().exactOptional().openapi({ description: 'Affiliate Name.' }),
                    })
                    .openapi({
                      description: 'Object with information of the affiliate.',
                      required: [],
                    }),
                )
                .exactOptional()
                .openapi({
                  description:
                    'Marketplace order identifier. The discount will apply to selected affiliates.',
                }),
              applyToAllShippings: z
                .boolean()
                .exactOptional()
                .openapi({ description: 'Promotion will be applied to all kind of shipping.' }),
              areSalesChannelIdsExclusive: z
                .boolean()
                .exactOptional()
                .openapi({
                  description:
                    'If set to `false`, this promotion will be applied to any trade policies present on the `idsSalesChannel` field. If set to `true`, trade policies present on that field will make this promotion not to be applied.',
                }),
              beginDateUtc: z
                .string()
                .exactOptional()
                .openapi({ description: 'Promotion Begin Date (UTC).' }),
              brands: z
                .array(
                  z
                    .object({
                      id: z.string().exactOptional().openapi({ description: 'Brand ID.' }),
                      name: z.string().exactOptional().openapi({ description: 'Brand Name.' }),
                    })
                    .openapi({
                      description: 'Object with information of the brand.',
                      required: [],
                    }),
                )
                .exactOptional()
                .openapi({
                  description:
                    'Object composed by the brands that will activate or deactivate the promotion.',
                }),
              brandsAreInclusive: z
                .boolean()
                .exactOptional()
                .openapi({
                  description:
                    'If set to `true`, this promotion will be applied to any brand present on the `brands` field. If set to `false`, brands present on that field will make this promotion not to be applied.',
                }),
              campaigns: z
                .array(z.any())
                .exactOptional()
                .openapi({ description: 'Campaign Audiences that activate this promotion.' }),
              cardIssuers: z.array(z.any()).exactOptional().openapi({ deprecated: true }),
              categories: z
                .array(
                  z
                    .object({
                      id: z.string().exactOptional().openapi({ description: 'Category ID.' }),
                      name: z.string().exactOptional().openapi({ description: 'Category Name.' }),
                    })
                    .openapi({
                      description: 'Object with information of the category.',
                      required: [],
                    }),
                )
                .exactOptional()
                .openapi({
                  description:
                    'Object composed by the categories that will activate or deactivate the promotion.',
                }),
              categoriesAreInclusive: z
                .boolean()
                .exactOptional()
                .openapi({
                  description:
                    'If set to `true`, this promotion will be applied to any category present on the `categories` field. If set to `false`, categories present on that field will make this promotion not to be applied.',
                }),
              clusterExpressions: z
                .array(z.string().openapi({ description: 'Cluster expression.' }))
                .exactOptional()
                .openapi({ description: 'An expression to use with clusters.' }),
              collections: z
                .array(
                  z
                    .object({
                      id: z.string().exactOptional().openapi({ description: 'Collection ID.' }),
                      name: z.string().exactOptional().openapi({ description: 'Collection Name.' }),
                    })
                    .openapi({
                      description: 'Object with information of the collection.',
                      required: [],
                    }),
                )
                .exactOptional()
                .openapi({
                  description:
                    'Array composed by the collections that will be activated or deactivated the promotion.',
                }),
              collections1BuyTogether: z
                .array(z.string().openapi({ description: 'Collection ID.' }))
                .exactOptional()
                .openapi({
                  description:
                    'Collections that will generate the promotion, type **Buy Together**, **More for less**, **Progressive Discount**, **Buy One Get One**.',
                }),
              collections2BuyTogether: z
                .array(z.any())
                .exactOptional()
                .openapi({ deprecated: true }),
              collectionsIsInclusive: z
                .boolean()
                .exactOptional()
                .openapi({
                  description:
                    'If set to `true`, this promotion will be applied to any collection present on the `collections` field. If set to `false`, collections present on that field will make this promotion not to be applied.',
                }),
              compareListPriceAndPrice: z
                .boolean()
                .exactOptional()
                .openapi({ description: 'If the **List Price** and **Price** are the same.' }),
              conditionsIds: z
                .array(z.string().openapi({ description: 'Condition ID.' }))
                .exactOptional()
                .openapi({ description: 'Array with conditions IDs.' }),
              coupon: z.array(z.any()).exactOptional().openapi({ deprecated: true }),
              cumulative: z
                .boolean()
                .exactOptional()
                .openapi({
                  description:
                    'Defines if a promotion can accumulate with another one. (`true`) or not (`false`).',
                }),
              daysAgoOfPurchases: z
                .int()
                .exactOptional()
                .openapi({
                  description: 'Number of days that are considered to add the purchase history.',
                }),
              description: z
                .string()
                .exactOptional()
                .openapi({ description: 'Promotion internal description.' }),
              disableDeal: z.boolean().exactOptional().openapi({ deprecated: true }),
              discountType: z
                .string()
                .exactOptional()
                .openapi({ description: 'The type of discount that will apply to the promotion.' }),
              enableBuyTogetherPerSku: z
                .boolean()
                .exactOptional()
                .openapi({ description: 'Enable **Buy Together** per SKU.' }),
              endDateUtc: z
                .string()
                .exactOptional()
                .openapi({ description: 'Promotion End Date (UTC).' }),
              firstBuyIsProfileOptimistic: z
                .boolean()
                .exactOptional()
                .openapi({ description: 'Applies the discount even if the user is not logged.' }),
              giftListTypes: z
                .array(z.string().openapi({ description: 'Gift List Type.' }))
                .exactOptional()
                .openapi({ description: 'Gifts List Type.' }),
              idCalculatorConfiguration: z
                .string()
                .exactOptional()
                .openapi({ description: 'Promotion ID.' }),
              idSeller: z.string().exactOptional().openapi({ description: 'Seller Name.' }),
              idSellerIsInclusive: z
                .boolean()
                .exactOptional()
                .openapi({
                  description:
                    'If set to `true`, this promotion will be applied to any seller present on the idSeller field. If set to `false`, sellers present on that field will make this promotion not to be applied.',
                }),
              idsSalesChannel: z
                .array(z.string().openapi({ description: 'Trade Policy ID.' }))
                .exactOptional()
                .openapi({ description: 'List of Trade Policies that activate this promotion.' }),
              installment: z.int().exactOptional().openapi({ deprecated: true }),
              isActive: z
                .boolean()
                .exactOptional()
                .openapi({
                  description:
                    'If set as `true` the Promotion is activated. If set as `false` the Promotion is deactivated.',
                }),
              isArchived: z
                .boolean()
                .exactOptional()
                .openapi({
                  description:
                    'If set as `true` the Promotion is archived. If set as `false` the Promotion is not archived.',
                }),
              isDifferentListPriceAndPrice: z
                .boolean()
                .exactOptional()
                .openapi({
                  description:
                    'Applies the promotion only if the list price and price is different.',
                }),
              isFeatured: z
                .boolean()
                .exactOptional()
                .openapi({
                  description:
                    "Insert a flag with the promotion name used in the product's window display and page.",
                }),
              isFirstBuy: z
                .boolean()
                .exactOptional()
                .openapi({ description: "Applies the discount only if it's a first buy." }),
              isMinMaxInstallments: z
                .boolean()
                .exactOptional()
                .openapi({
                  description:
                    'Set if the promotion will be applied considering a minimum and maximum values for installments.',
                }),
              isSlaSelected: z
                .boolean()
                .exactOptional()
                .openapi({
                  description:
                    'Applies selected discount only when one of the defined shipping method is selected by the customer.',
                }),
              itemMaxPrice: z
                .number()
                .exactOptional()
                .openapi({ description: 'Maximum price of the item.' }),
              itemMinPrice: z
                .number()
                .exactOptional()
                .openapi({ description: 'Minimum price of the item.' }),
              lastModified: z
                .string()
                .exactOptional()
                .openapi({ description: 'When the Promotion was last modified.' }),
              listSku1BuyTogether: z
                .array(z.any())
                .exactOptional()
                .openapi({ description: 'SKU first list for the promotion **Buy Together**.' }),
              listSku2BuyTogether: z
                .array(z.any())
                .exactOptional()
                .openapi({ description: 'SKU second list for the promotion **Buy Together**.' }),
              marketingTags: z
                .array(z.string().openapi({ description: 'Promotion Marketing tag.' }))
                .exactOptional()
                .openapi({ description: 'Promotion Marketing tags.' }),
              marketingTagsAreNotInclusive: z
                .boolean()
                .exactOptional()
                .openapi({
                  description:
                    'If set to `false`, this promotion will be applied to any marketing tag present on the `marketingTags` field. If set to `true`, marketing tags present on that field will make this promotion not to be applied.',
                }),
              maxInstallment: z
                .int()
                .exactOptional()
                .openapi({ description: 'Maximum value for installment.' }),
              maxNumberOfAffectedItems: z
                .int()
                .exactOptional()
                .openapi({ description: 'The maximum number of affected items for a promotion.' }),
              maxNumberOfAffectedItemsGroupKey: z
                .string()
                .exactOptional()
                .openapi({
                  description: 'The maximum number of affected items by group key for a promotion.',
                }),
              maxPricesPerItems: z.array(z.any()).exactOptional().openapi({ deprecated: true }),
              maxUsage: z
                .int()
                .exactOptional()
                .openapi({ description: 'Defines how many times the promotion can be used.' }),
              maxUsagePerClient: z
                .int()
                .exactOptional()
                .openapi({
                  description: 'Defines if the promotion can be used multiple times per client.',
                }),
              maximumUnitPriceDiscount: z
                .number()
                .exactOptional()
                .openapi({
                  description:
                    'The maximum price for each item of the purchase will be the price set up.',
                }),
              merchants: z.array(z.any()).exactOptional().openapi({ deprecated: true }),
              minInstallment: z
                .int()
                .exactOptional()
                .openapi({ description: 'Minimum value for installment.' }),
              minimumQuantityBuyTogether: z
                .int()
                .exactOptional()
                .openapi({ description: 'Minimum quantity for **Buy Together** promotion.' }),
              multipleSkusCause: z
                .record(z.string(), z.string().openapi({ description: 'SKU ID.' }))
                .exactOptional()
                .openapi({
                  description:
                    'Object composed by a list of SKUs on a Multiple Effects promotion. Structure: `"{SkuId}": {PercentageDiscount}`. There is a limit of 400 SKUs for this type of promotion.',
                }),
              multipleUsePerClient: z
                .boolean()
                .exactOptional()
                .openapi({
                  description: 'Defines if the promotion can be used multiple times per client.',
                }),
              name: z.string().exactOptional().openapi({ description: 'Promotion Name.' }),
              newOffset: z
                .number()
                .exactOptional()
                .openapi({ description: 'New time offset from UTC in seconds.' }),
              nominalDiscountValue: z
                .number()
                .exactOptional()
                .openapi({
                  description: 'Exact discount to be applied for the total purchase value.',
                }),
              nominalRewardValue: z
                .number()
                .exactOptional()
                .openapi({ description: 'Nominal value for rewards program.' }),
              nominalShippingDiscountValue: z
                .number()
                .exactOptional()
                .openapi({ description: 'Exact discount to be applied for the shipping value.' }),
              nominalTax: z.number().exactOptional().openapi({ description: 'Nominal Tax.' }),
              offset: z
                .int()
                .exactOptional()
                .openapi({ description: 'Time offset from UTC in seconds.' }),
              orderStatusRewardValue: z
                .string()
                .exactOptional()
                .openapi({ description: 'Order status reward value.' }),
              origin: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    'Origin of the promotion, `marketplace` or `Fulfillment`. Read [Difference between orders with marketplace and fulfillment sources](https://help.vtex.com/en/tutorial/what-are-orders-with-marketplace-source-and-orders-with-fulfillment-source--6eVYrmUAwMOeKICU2KuG06) for more information.',
                }),
              paymentsMethods: z
                .array(
                  z
                    .object({
                      id: z.string().exactOptional().openapi({ description: 'Payment Method ID.' }),
                      name: z
                        .string()
                        .exactOptional()
                        .openapi({ description: 'Payment Method Name.' }),
                    })
                    .openapi({
                      description: 'Object with information of the Payment Method.',
                      required: [],
                    }),
                )
                .exactOptional()
                .openapi({ description: 'Array composed by all the Payments Methods.' }),
              paymentsRules: z.array(z.any()).exactOptional().openapi({ deprecated: true }),
              percentualDiscountValue: z
                .number()
                .exactOptional()
                .openapi({
                  description: 'Percentage discount to be applied for total purchase value.',
                }),
              percentualDiscountValueList: z
                .array(z.number().openapi({ description: 'Percentual discount value.' }))
                .exactOptional()
                .openapi({ description: 'Percentual discount value list.' }),
              percentualDiscountValueList1: z
                .number()
                .exactOptional()
                .openapi({
                  description:
                    'Valid discounts for the SKUs in `listSku1BuyTogether`, discount list used for Buy Together Promotions.',
                }),
              percentualDiscountValueList2: z
                .number()
                .exactOptional()
                .openapi({ description: 'Equivalent to `percentualDiscountValueList1`.' }),
              percentualRewardValue: z
                .number()
                .exactOptional()
                .openapi({ description: 'Percentage value for rewards program.' }),
              percentualShippingDiscountValue: z
                .number()
                .exactOptional()
                .openapi({ description: 'Percentage discount to be applied for shipping value.' }),
              percentualTax: z
                .number()
                .exactOptional()
                .openapi({ description: 'Percentual Tax over purchase total value.' }),
              products: z
                .array(
                  z
                    .object({
                      id: z.string().exactOptional().openapi({ description: 'Product ID.' }),
                      name: z.string().exactOptional().openapi({ description: 'Product Name.' }),
                    })
                    .openapi({
                      description: 'Object with information of the product.',
                      required: [],
                    }),
                )
                .exactOptional()
                .openapi({
                  description:
                    'Object composed by the products that will activate or deactivate the promotion.',
                }),
              productsAreInclusive: z
                .boolean()
                .exactOptional()
                .openapi({
                  description:
                    'If set to `true`, this promotion will be applied to any product present on the `products` field. If set to `false`, products present on that field will make this promotion not to be applied.',
                }),
              productsSpecifications: z
                .array(z.any())
                .exactOptional()
                .openapi({ deprecated: true }),
              quantityToAffectBuyTogether: z
                .int()
                .exactOptional()
                .openapi({ description: 'Quantity to affect **Buy Together** promotion.' }),
              rebatePercentualDiscountValue: z
                .number()
                .exactOptional()
                .openapi({ description: 'Percentual Shipping Discount Value.' }),
              restrictionsBins: z
                .array(z.string().openapi({ description: "Card's BIN." }))
                .exactOptional()
                .openapi({
                  description: "The discount will be granted if the card's BIN is given.",
                }),
              shippingPercentualTax: z
                .number()
                .exactOptional()
                .openapi({ description: 'Shipping Percentual Tax over purchase total value.' }),
              shouldDistributeDiscountAmongMatchedItems: z
                .boolean()
                .exactOptional()
                .openapi({ description: 'Should distribute discount among matched items.' }),
              skus: z
                .array(
                  z
                    .object({
                      id: z.string().exactOptional().openapi({ description: 'SKU ID.' }),
                      name: z.string().exactOptional().openapi({ description: 'SKU Name.' }),
                    })
                    .openapi({ description: 'Object with information of the SKU.', required: [] }),
                )
                .exactOptional()
                .openapi({
                  description:
                    'Object composed by the SKUs that will activate or deactivate the promotion.',
                }),
              skusAreInclusive: z
                .boolean()
                .exactOptional()
                .openapi({
                  description:
                    'If set to `true`, this promotion will be applied to any SKU present on the `skus` field. If set to `false`, SKUs present on that field will make this promotion not to be applied.',
                }),
              skusGift: z
                .object({
                  gifts: z
                    .int()
                    .exactOptional()
                    .openapi({ description: 'Array with SKU Gifts IDs.' }),
                  quantitySelectable: z
                    .int()
                    .exactOptional()
                    .openapi({ description: 'Quantity of SKU Gifts.' }),
                })
                .exactOptional()
                .openapi({
                  description:
                    'SKU Gift Object. Total discount on the product value set as a gift.',
                  required: [],
                }),
              slasIds: z
                .array(z.string().openapi({ description: 'Shipping method.' }))
                .exactOptional()
                .openapi({
                  description:
                    'The discount will be granted if the shipping method is the same as the one given.',
                }),
              stores: z.array(z.any()).exactOptional().openapi({ deprecated: true }),
              storesAreInclusive: z.boolean().exactOptional().openapi({ deprecated: true }),
              totalValueCeling: z
                .number()
                .exactOptional()
                .openapi({ description: 'Maximum chart value to activate the promotion.' }),
              totalValueFloor: z
                .number()
                .exactOptional()
                .openapi({ description: 'Minimum chart value to activate the promotion.' }),
              totalValueIncludeAllItems: z.boolean().exactOptional().openapi({ deprecated: true }),
              totalValueMode: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    'If products that already are receiving a promotion, will be considered on the chart total value. There are three options available: `IncludeMatchedItems`, `ExcludeMatchedItems`, `AllItems`.',
                }),
              totalValuePurchase: z
                .number()
                .exactOptional()
                .openapi({
                  description:
                    'Total value a client must have in past orders to active the promotion.',
                }),
              type: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    'Defines what is the type of the promotion or indicates if it is a tax. Possible values: `regular` ([Regular Promotion](https://help.vtex.com/tutorial/regular-promotion--tutorials_327)), `combo` ([Buy Together](https://help.vtex.com/en/tutorial/buy-together--tutorials_323)), `forThePriceOf` ([More for Less](https://help.vtex.com/en/tutorial/creating-a-more-for-less-promotion--tutorials_325)), `progressive` ([Progressive Discount](https://help.vtex.com/en/tutorial/progressive-discount--tutorials_324)), `buyAndWin` ([Buy One Get One](https://help.vtex.com/en/tutorial/buy-one-get-one--tutorials_322)), `maxPricePerItem` (Deprecated), `campaign` ([Campaign Promotion](https://help.vtex.com/en/tutorial/campaign-promotion--1ChYXhK2AQGuS6wAqS8Ume)), `tax` (Tax), `multipleEffects` (Multiple Effects).',
                }),
              useNewProgressiveAlgorithm: z
                .boolean()
                .exactOptional()
                .openapi({ description: 'Use new progressive algorithm.' }),
              utmCampaign: z
                .string()
                .exactOptional()
                .openapi({ description: 'Coupon utmCampaign code.' }),
              utmSource: z
                .string()
                .exactOptional()
                .openapi({ description: 'Coupon utmSource code.' }),
              zipCodeRanges: z
                .array(
                  z
                    .object({
                      inclusive: z
                        .boolean()
                        .exactOptional()
                        .openapi({
                          description:
                            'Defines if the zip code range is included in the promotion.',
                        }),
                      zipCodeFrom: z
                        .string()
                        .exactOptional()
                        .openapi({ description: 'Initial Zip Code.' }),
                      zipCodeTo: z
                        .string()
                        .exactOptional()
                        .openapi({ description: 'Final Zip Code.' }),
                    })
                    .openapi({ title: '', required: [] }),
                )
                .exactOptional()
                .openapi({ description: 'Range of the zip code that applies the promotion.' }),
            })
            .openapi({ required: [] }),
          example: {
            absoluteShippingDiscountValue: 0,
            accumulateWithManualPrice: false,
            activateGiftsMultiplier: false,
            activeDaysOfWeek: [],
            affiliates: [],
            applyToAllShippings: false,
            areSalesChannelIdsExclusive: false,
            beginDateUtc: '2020-05-01T18:47:15.89Z',
            brands: [],
            brandsAreInclusive: false,
            campaigns: [],
            cardIssuers: [],
            categories: [],
            categoriesAreInclusive: false,
            clusterExpressions: [],
            collections: [],
            collections1BuyTogether: [],
            collections2BuyTogether: [],
            collectionsIsInclusive: false,
            compareListPriceAndPrice: false,
            conditionsIds: ['372e1868-2c0e-4437-be45-1ef8c9cab735'],
            coupon: [],
            cumulative: false,
            daysAgoOfPurchases: 0,
            disableDeal: false,
            discountType: 'percentual',
            enableBuyTogetherPerSku: false,
            firstBuyIsProfileOptimistic: false,
            giftListTypes: [],
            idCalculatorConfiguration: 'd8a1cd2e-b667-4054-b3ae-b79124c7218e',
            idSellerIsInclusive: false,
            idsSalesChannel: [],
            installment: 0,
            isActive: true,
            isArchived: false,
            isDifferentListPriceAndPrice: false,
            isFeatured: false,
            isFirstBuy: false,
            isMinMaxInstallments: false,
            isSlaSelected: false,
            itemMaxPrice: 0,
            itemMinPrice: 0,
            lastModified: '2021-02-23T20:58:38.7963862Z',
            listSku1BuyTogether: [],
            listSku2BuyTogether: [],
            marketingTags: [],
            marketingTagsAreNotInclusive: false,
            maxInstallment: 0,
            maxNumberOfAffectedItems: 0,
            maxNumberOfAffectedItemsGroupKey: 'perCart',
            maxPricesPerItems: [],
            maxUsage: 0,
            maxUsagePerClient: 0,
            maximumUnitPriceDiscount: 0,
            merchants: [],
            minInstallment: 0,
            minimumQuantityBuyTogether: 0,
            multipleUsePerClient: false,
            name: 'Promoção Social Seller',
            newOffset: -3,
            nominalDiscountValue: 0,
            nominalRewardValue: 0,
            nominalShippingDiscountValue: 0,
            nominalTax: 0,
            offset: -3,
            orderStatusRewardValue: 'invoiced',
            origin: 'marketplace',
            paymentsMethods: [
              { id: '202', name: 'Dinheiro (202)' },
              { id: '2', name: 'Visa (2)' },
            ],
            paymentsRules: [],
            percentualDiscountValue: 10,
            percentualDiscountValueList: [],
            percentualDiscountValueList1: 0,
            percentualDiscountValueList2: 0,
            percentualRewardValue: 0,
            percentualShippingDiscountValue: 0,
            percentualTax: 0,
            products: [],
            productsAreInclusive: false,
            productsSpecifications: [],
            quantityToAffectBuyTogether: 0,
            rebatePercentualDiscountValue: 0,
            restrictionsBins: [],
            shippingPercentualTax: 0,
            shouldDistributeDiscountAmongMatchedItems: false,
            skus: [],
            skusAreInclusive: true,
            skusGift: { quantitySelectable: 0 },
            slasIds: [],
            stores: [],
            storesAreInclusive: false,
            totalValueCeling: 0,
            totalValueFloor: 0,
            totalValueIncludeAllItems: false,
            totalValueMode: 'IncludeMatchedItems',
            totalValuePurchase: 0,
            type: 'regular',
            useNewProgressiveAlgorithm: false,
            utmCampaign: 'georgeTest',
            utmSource: 'georgeSource',
            zipCodeRanges: [],
          },
        },
        Tax: {
          schema: z
            .object({
              absoluteShippingDiscountValue: z
                .number()
                .exactOptional()
                .openapi({ description: 'Maximum value for the shipping.' }),
              activateGiftsMultiplier: z
                .boolean()
                .exactOptional()
                .openapi({ description: 'If set as `true`, it activates gifts Multiplier.' }),
              activeDaysOfWeek: z
                .array(
                  z
                    .string()
                    .openapi({ description: 'Day of the week that the Tax will be valid.' }),
                )
                .exactOptional()
                .openapi({
                  description: 'Defines days of the week in which the Tax will applied.',
                }),
              affiliates: z
                .array(
                  z
                    .object({
                      id: z.string().exactOptional().openapi({ description: 'Affiliate ID.' }),
                      name: z.string().exactOptional().openapi({ description: 'Affiliate Name.' }),
                    })
                    .openapi({
                      description: 'Object with information of the affiliate.',
                      required: [],
                    }),
                )
                .exactOptional()
                .openapi({
                  description:
                    'Marketplace order identifier. The discount will apply to selected affiliates.',
                }),
              applyToAllShippings: z
                .boolean()
                .exactOptional()
                .openapi({ description: 'Tax will be applied to all kind of shipping.' }),
              areSalesChannelIdsExclusive: z
                .boolean()
                .exactOptional()
                .openapi({
                  description:
                    'If set to `false`, this Tax will be applied to any trade policies present on the `idsSalesChannel` field. If set to `true`, trade policies present on that field will make this Tax not to be applied.',
                }),
              beginDateUtc: z
                .string()
                .exactOptional()
                .openapi({ description: 'Tax Begin Date (UTC).' }),
              brands: z
                .array(
                  z
                    .object({
                      id: z.string().exactOptional().openapi({ description: 'Brand ID.' }),
                      name: z.string().exactOptional().openapi({ description: 'Brand Name.' }),
                    })
                    .openapi({
                      description: 'Object with information of the brand.',
                      required: [],
                    }),
                )
                .exactOptional()
                .openapi({
                  description:
                    'Object composed by the brands that will activate or deactivate the Tax.',
                }),
              brandsAreInclusive: z
                .boolean()
                .exactOptional()
                .openapi({
                  description:
                    'If set to `true`, this Tax will be applied to any brand present on the `brands` field. If set to `false`, brands present on that field will make this Tax not to be applied.',
                }),
              campaigns: z
                .array(
                  z
                    .string()
                    .openapi({
                      description: 'Campaign Audience.',
                      example: 'Campaign Audience example',
                    }),
                )
                .exactOptional()
                .openapi({ description: 'Campaign Audiences that activate this Tax.' }),
              cardIssuers: z.array(z.any()).exactOptional().openapi({ deprecated: true }),
              categories: z
                .array(
                  z
                    .object({
                      id: z.string().exactOptional().openapi({ description: 'Category ID.' }),
                      name: z.string().exactOptional().openapi({ description: 'Category Name.' }),
                    })
                    .openapi({
                      description: 'Object with information of the category.',
                      required: [],
                    }),
                )
                .exactOptional()
                .openapi({
                  description:
                    'Object composed by the categories that will activate or deactivate the Tax.',
                }),
              categoriesAreInclusive: z
                .boolean()
                .exactOptional()
                .openapi({
                  description:
                    'If set to `true`, this Tax will be applied to any category present on the `categories` field. If set to `false`, categories present on that field will make this Tax not to be applied.',
                }),
              clusterExpressions: z
                .array(z.string().openapi({ description: 'Cluster expression.' }))
                .exactOptional()
                .openapi({ description: 'An expression to use with clusters.' }),
              collections: z
                .array(
                  z
                    .object({
                      id: z.string().exactOptional().openapi({ description: 'Collection ID.' }),
                      name: z.string().exactOptional().openapi({ description: 'Collection Name.' }),
                    })
                    .openapi({
                      description: 'Object with information of the collection.',
                      required: [],
                    }),
                )
                .exactOptional()
                .openapi({
                  description:
                    'Array composed by the collections that will be activated or deactivated the Tax.',
                }),
              collections1BuyTogether: z
                .array(z.string().openapi({ description: 'Collection ID.' }))
                .exactOptional()
                .openapi({
                  description:
                    'Collections that will generate the Tax, type **Buy Together**, **More for less**, **Progressive Discount**, **Buy One Get One**.',
                }),
              collections2BuyTogether: z
                .array(z.any())
                .exactOptional()
                .openapi({ deprecated: true }),
              collectionsIsInclusive: z
                .boolean()
                .exactOptional()
                .openapi({
                  description:
                    'If set to `true`, this Tax will be applied to any collection present on the `collections` field. If set to `false`, collections present on that field will make this Tax not be applied.',
                }),
              compareListPriceAndPrice: z
                .boolean()
                .exactOptional()
                .openapi({ description: 'If the **List Price** and **Price** are the same.' }),
              coupon: z.array(z.any()).exactOptional().openapi({ deprecated: true }),
              cumulative: z
                .boolean()
                .exactOptional()
                .openapi({
                  description:
                    'Defines if a Tax can accumulate with another one. (`true`) or not (`false`).',
                }),
              daysAgoOfPurchases: z
                .int()
                .exactOptional()
                .openapi({
                  description: 'Number of days that are considered to add the purchase history.',
                }),
              description: z
                .string()
                .exactOptional()
                .openapi({ description: 'Tax internal description.' }),
              disableDeal: z.boolean().exactOptional().openapi({ deprecated: true }),
              enableBuyTogetherPerSku: z
                .boolean()
                .exactOptional()
                .openapi({ description: 'Enable **Buy Together** per SKU.' }),
              endDateUtc: z
                .string()
                .exactOptional()
                .openapi({ description: 'Tax End Date (UTC).' }),
              firstBuyIsProfileOptimistic: z
                .boolean()
                .exactOptional()
                .openapi({ description: 'Applies the Tax even if the user is not logged.' }),
              giftListTypes: z
                .array(z.string().openapi({ description: 'Gift List Type.' }))
                .exactOptional()
                .openapi({ description: 'Gifts List Type.' }),
              idCalculatorConfiguration: z
                .string()
                .exactOptional()
                .openapi({ description: 'Tax ID.' }),
              idSeller: z.string().exactOptional().openapi({ description: 'Seller Name.' }),
              idSellerIsInclusive: z
                .boolean()
                .exactOptional()
                .openapi({
                  description:
                    'If set to `true`, this Tax will be applied to any seller present on the idSeller field. If set to `false`, sellers present on that field will make this Tax not to be applied.',
                }),
              idsSalesChannel: z
                .array(z.string().openapi({ description: 'Trade Policy ID.' }))
                .exactOptional()
                .openapi({ description: 'List of Trade Policies that activate this Tax.' }),
              installment: z.int().exactOptional().openapi({ deprecated: true }),
              isActive: z
                .boolean()
                .exactOptional()
                .openapi({
                  description:
                    'If set as `true` the Tax is activated. If set as `false` the Tax is deactivated.',
                }),
              isArchived: z
                .boolean()
                .exactOptional()
                .openapi({
                  description:
                    'If set as `true` the Tax is archived. If set as `false` the Tax is not archived.',
                }),
              isDifferentListPriceAndPrice: z
                .boolean()
                .exactOptional()
                .openapi({
                  description: 'Applies the Tax only if the list price and price is different.',
                }),
              isFeatured: z
                .boolean()
                .exactOptional()
                .openapi({
                  description:
                    "Insert a flag with the Tax name used in the product's window display and page.",
                }),
              isFirstBuy: z
                .boolean()
                .exactOptional()
                .openapi({ description: "Applies the Tax only if it's a first buy." }),
              isMinMaxInstallments: z
                .boolean()
                .exactOptional()
                .openapi({
                  description:
                    'Set if the Tax will be applied considering a minimum and maximum values for installments.',
                }),
              isSlaSelected: z
                .boolean()
                .exactOptional()
                .openapi({
                  description:
                    'Applies the Tax only when one of the defined shipping method is selected by the customer.',
                }),
              itemMaxPrice: z
                .number()
                .exactOptional()
                .openapi({ description: 'Maximum price of the item.' }),
              itemMinPrice: z
                .number()
                .exactOptional()
                .openapi({ description: 'Minimum price of the item.' }),
              lastModified: z
                .string()
                .exactOptional()
                .openapi({ description: 'When the Tax was last modified.' }),
              listSku1BuyTogether: z
                .array(z.int().openapi({ description: 'SKU ID.', example: 1 }))
                .exactOptional()
                .openapi({ description: 'SKU first list for the promotion **Buy Together**.' }),
              listSku2BuyTogether: z
                .array(z.int().openapi({ description: 'SKU ID.', example: 1 }))
                .exactOptional()
                .openapi({ description: 'SKU second list for the promotion **Buy Together**.' }),
              marketingTags: z
                .array(z.string().openapi({ description: 'Promotion Marketing tag.' }))
                .exactOptional()
                .openapi({ description: 'Tax Marketing tags.' }),
              marketingTagsAreNotInclusive: z
                .boolean()
                .exactOptional()
                .openapi({
                  description:
                    'If set to `false`, this Tax will be applied to any marketing tag present on the `marketingTags` field. If set to `true`, marketing tags present on that field will make this Tax not to be applied.',
                }),
              maxInstallment: z
                .int()
                .exactOptional()
                .openapi({ description: 'Maximum value for installment.' }),
              maxNumberOfAffectedItems: z
                .int()
                .exactOptional()
                .openapi({ description: 'The maximum number of affected items for a promotion.' }),
              maxNumberOfAffectedItemsGroupKey: z
                .string()
                .exactOptional()
                .openapi({
                  description: 'The maximum number of affected items by group key for a promotion.',
                }),
              maxPricesPerItems: z.array(z.any()).exactOptional().openapi({ deprecated: true }),
              maxUsage: z
                .int()
                .exactOptional()
                .openapi({ description: 'Defines how many times the Tax can be applied.' }),
              maxUsagePerClient: z
                .int()
                .exactOptional()
                .openapi({
                  description:
                    'Defines the maximum amount of times the Tax can be applied per client.',
                }),
              maximumUnitPriceDiscount: z
                .number()
                .exactOptional()
                .openapi({
                  description:
                    'The maximum price for each item of the purchase will be the price set up.',
                }),
              merchants: z.array(z.any()).exactOptional().openapi({ deprecated: true }),
              minInstallment: z
                .int()
                .exactOptional()
                .openapi({ description: 'Minimum value for installment.' }),
              minimumQuantityBuyTogether: z
                .int()
                .exactOptional()
                .openapi({ description: 'Minimum quantity for **Buy Together** promotion.' }),
              multipleUsePerClient: z
                .boolean()
                .exactOptional()
                .openapi({
                  description: 'Defines if the Tax can be applied multiple times per client.',
                }),
              name: z.string().exactOptional().openapi({ description: 'Tax Name.' }),
              newOffset: z
                .number()
                .exactOptional()
                .openapi({ description: 'New time offset from UTC in seconds.' }),
              nominalDiscountValue: z
                .number()
                .exactOptional()
                .openapi({
                  description: 'Exact discount to be applied for the total purchase value.',
                }),
              nominalRewardValue: z
                .number()
                .exactOptional()
                .openapi({ description: 'Nominal value for rewards program.' }),
              nominalShippingDiscountValue: z
                .number()
                .exactOptional()
                .openapi({ description: 'Exact discount to be applied for the shipping value.' }),
              nominalTax: z.number().exactOptional().openapi({ description: 'Nominal Tax.' }),
              offset: z
                .int()
                .exactOptional()
                .openapi({ description: 'Time offset from UTC in seconds.' }),
              orderStatusRewardValue: z
                .string()
                .exactOptional()
                .openapi({ description: 'Order status reward value.' }),
              origin: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    'Origin of the Tax, `marketplace` or `Fulfillment`.  Read [Difference between orders with marketplace and fulfillment sources](https://help.vtex.com/en/tutorial/what-are-orders-with-marketplace-source-and-orders-with-fulfillment-source--6eVYrmUAwMOeKICU2KuG06) for more information.',
                }),
              paymentsMethods: z
                .array(
                  z
                    .object({
                      id: z.string().exactOptional().openapi({ description: 'Payment Method ID.' }),
                      name: z
                        .string()
                        .exactOptional()
                        .openapi({ description: 'Payment Method Name.' }),
                    })
                    .openapi({
                      description: 'Object with information of the Payment Method.',
                      required: [],
                    }),
                )
                .exactOptional()
                .openapi({ description: 'Array composed by all the Payments Methods.' }),
              paymentsRules: z.array(z.any()).exactOptional().openapi({ deprecated: true }),
              percentualDiscountValue: z
                .number()
                .exactOptional()
                .openapi({
                  description: 'Percentage discount to be applied for total purchase value.',
                }),
              percentualDiscountValueList: z
                .array(z.number().openapi({ description: 'Percentual discount value.' }))
                .exactOptional()
                .openapi({ description: 'Percentual discount value list.' }),
              percentualDiscountValueList1: z
                .number()
                .exactOptional()
                .openapi({
                  description:
                    'Valid discounts for the SKUs in `listSku1BuyTogether`, discount list used for Buy Together Promotions.',
                }),
              percentualDiscountValueList2: z
                .number()
                .exactOptional()
                .openapi({ description: 'Equivalent to `percentualDiscountValueList1`.' }),
              percentualRewardValue: z
                .number()
                .exactOptional()
                .openapi({ description: 'Percentage value for rewards program.' }),
              percentualShippingDiscountValue: z
                .number()
                .exactOptional()
                .openapi({ description: 'Percentage discount to be applied for shipping value.' }),
              percentualTax: z
                .number()
                .exactOptional()
                .openapi({ description: 'Percentual Tax over purchase total value.' }),
              products: z
                .array(
                  z
                    .object({
                      id: z.string().exactOptional().openapi({ description: 'Product ID.' }),
                      name: z.string().exactOptional().openapi({ description: 'Product Name.' }),
                    })
                    .openapi({
                      description: 'Object with information of the product.',
                      required: [],
                    }),
                )
                .exactOptional()
                .openapi({
                  description:
                    'Array composed by the products that will activate or deactivate the Tax.',
                }),
              productsAreInclusive: z
                .boolean()
                .exactOptional()
                .openapi({
                  description:
                    'If set to `true`, this Tax will be applied to any product present on the `products` field. If set to `false`, products present on that field will make this Tax not to be applied.',
                }),
              productsSpecifications: z
                .array(z.any())
                .exactOptional()
                .openapi({ deprecated: true }),
              quantityToAffectBuyTogether: z
                .int()
                .exactOptional()
                .openapi({ description: 'Quantity to affect **Buy Together** promotion.' }),
              rebatePercentualDiscountValue: z
                .number()
                .exactOptional()
                .openapi({ description: 'Percentual Shipping Discount Value.' }),
              restrictionsBins: z
                .array(z.string().openapi({ description: "Card's BIN." }))
                .exactOptional()
                .openapi({ description: "The Tax will be applied if the card's BIN is given." }),
              shippingPercentualTax: z
                .number()
                .exactOptional()
                .openapi({ description: 'Shipping Percentual Tax over purchase total value.' }),
              shouldDistributeDiscountAmongMatchedItems: z
                .boolean()
                .exactOptional()
                .openapi({ description: 'Should distribute the Tax among matched items.' }),
              skus: z
                .array(
                  z
                    .object({
                      id: z.string().exactOptional().openapi({ description: 'SKU ID.' }),
                      name: z.string().exactOptional().openapi({ description: 'SKU Name.' }),
                    })
                    .openapi({ description: 'Object with information of the SKU.', required: [] }),
                )
                .exactOptional()
                .openapi({
                  description:
                    'Array composed by the SKUs that will activate or deactivate the Tax.',
                }),
              skusAreInclusive: z
                .boolean()
                .exactOptional()
                .openapi({
                  description:
                    'If set to `true`, this Tax will be applied to any SKU present on the `skus` field. If set to `false`, SKUs present on that field will make this Tax not to be applied.',
                }),
              skusGift: z
                .object({
                  gifts: z
                    .int()
                    .exactOptional()
                    .openapi({ description: 'Array with SKU Gifts IDs.' }),
                  quantitySelectable: z
                    .int()
                    .exactOptional()
                    .openapi({ description: 'Quantity of SKU Gifts.' }),
                })
                .exactOptional()
                .openapi({
                  description:
                    'SKU Gift Object. Total discount on the product value set as a gift.',
                  required: [],
                }),
              slasIds: z
                .array(z.string().openapi({ description: 'Shipping method.' }))
                .exactOptional()
                .openapi({
                  description:
                    'The Tax will be applied if the shipping method is the same as the one given.',
                }),
              stores: z.array(z.any()).exactOptional().openapi({ deprecated: true }),
              storesAreInclusive: z.boolean().exactOptional().openapi({ deprecated: true }),
              totalValueCeling: z
                .number()
                .exactOptional()
                .openapi({ description: 'Maximum chart value to activate the Tax.' }),
              totalValueFloor: z
                .number()
                .exactOptional()
                .openapi({ description: 'Minimum chart value to activate the Tax.' }),
              totalValueIncludeAllItems: z.boolean().exactOptional().openapi({ deprecated: true }),
              totalValueMode: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    "If products that are already receiving a Tax will be considered on the cart's total value. There are three options available: `IncludeMatchedItems`, `ExcludeMatchedItems`, `AllItems`.",
                }),
              totalValuePurchase: z
                .number()
                .exactOptional()
                .openapi({
                  description: 'Total value a client must have in past orders to activate the Tax.',
                }),
              type: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    'Defines what is the type of the promotion or indicates if it is a tax. Possible values: `regular` ([Regular Promotion](https://help.vtex.com/tutorial/regular-promotion--tutorials_327)), `combo` ([Buy Together](https://help.vtex.com/en/tutorial/buy-together--tutorials_323)), `forThePriceOf` ([More for Less](https://help.vtex.com/en/tutorial/creating-a-more-for-less-promotion--tutorials_325)), `progressive` ([Progressive Discount](https://help.vtex.com/en/tutorial/progressive-discount--tutorials_324)), `buyAndWin` ([Buy One Get One](https://help.vtex.com/en/tutorial/buy-one-get-one--tutorials_322)), `maxPricePerItem` (Deprecated), `campaign` ([Campaign Promotion](https://help.vtex.com/en/tutorial/campaign-promotion--1ChYXhK2AQGuS6wAqS8Ume)), `tax` (Tax), `multipleEffects` (Multiple Effects).',
                }),
              useNewProgressiveAlgorithm: z
                .boolean()
                .exactOptional()
                .openapi({ description: 'Use new progressive algorithm.' }),
              zipCodeRanges: z
                .array(
                  z
                    .object({
                      inclusive: z
                        .boolean()
                        .exactOptional()
                        .openapi({
                          description: 'Defines if the zip code range is included in the Tax.',
                        }),
                      zipCodeFrom: z
                        .string()
                        .exactOptional()
                        .openapi({ description: 'Initial Zip Code.' }),
                      zipCodeTo: z
                        .string()
                        .exactOptional()
                        .openapi({ description: 'Final Zip Code.' }),
                    })
                    .openapi({ title: '', required: [] }),
                )
                .exactOptional()
                .openapi({ description: 'Range of the zip code that activate the Tax.' }),
            })
            .openapi({ title: '', required: [] }),
          example: {
            absoluteShippingDiscountValue: 0,
            activateGiftsMultiplier: false,
            activeDaysOfWeek: [],
            affiliates: [],
            applyToAllShippings: false,
            areSalesChannelIdsExclusive: false,
            beginDateUtc: '2022-05-09T03:00:00Z',
            brands: [{ id: '2000000', name: 'VALDIE&CO (2000000)' }],
            brandsAreInclusive: true,
            campaigns: [],
            cardIssuers: [],
            categories: [{ id: '2', name: 'Computers (2)' }],
            categoriesAreInclusive: true,
            clusterExpressions: [],
            collections: [{ id: '137', name: 'Best Sellers (137)' }],
            collections1BuyTogether: [],
            collections2BuyTogether: [],
            collectionsIsInclusive: true,
            compareListPriceAndPrice: false,
            coupon: [],
            cumulative: false,
            daysAgoOfPurchases: 0,
            description: 'Tax applied by the government',
            disableDeal: false,
            enableBuyTogetherPerSku: false,
            endDateUtc: '2022-06-01T02:30:00Z',
            firstBuyIsProfileOptimistic: false,
            giftListTypes: [],
            idCalculatorConfiguration: '90f4affc-fea0-424c-a7a7-c69aec7bbdc8',
            idSellerIsInclusive: false,
            idsSalesChannel: [],
            installment: 0,
            isActive: true,
            isArchived: false,
            isDifferentListPriceAndPrice: false,
            isFeatured: false,
            isFirstBuy: false,
            isMinMaxInstallments: false,
            isSlaSelected: false,
            itemMaxPrice: 0,
            itemMinPrice: 0,
            lastModified: '2022-05-12T20:09:03.6623908Z',
            listSku1BuyTogether: [],
            listSku2BuyTogether: [],
            marketingTags: ['hello-world'],
            marketingTagsAreNotInclusive: false,
            maxInstallment: 0,
            maxNumberOfAffectedItems: 0,
            maxNumberOfAffectedItemsGroupKey: 'perCart',
            maxPricesPerItems: [],
            maxUsage: 0,
            maxUsagePerClient: 0,
            maximumUnitPriceDiscount: 0,
            merchants: [],
            minInstallment: 0,
            minimumQuantityBuyTogether: 0,
            multipleUsePerClient: false,
            name: 'Government Tax',
            newOffset: 0,
            nominalDiscountValue: 0,
            nominalRewardValue: 0,
            nominalShippingDiscountValue: 0,
            nominalTax: 0,
            offset: 0,
            orderStatusRewardValue: 'invoiced',
            origin: 'Fulfillment',
            paymentsMethods: [{ id: '45', name: 'Venda Direta Credito (45)' }],
            paymentsRules: [],
            percentualDiscountValue: 0,
            percentualDiscountValueList: [],
            percentualDiscountValueList1: 0,
            percentualDiscountValueList2: 0,
            percentualRewardValue: 0,
            percentualShippingDiscountValue: 0,
            percentualTax: 10,
            products: [{ id: '1', name: 'Seaweed Strengthening Masks - Pre Order! (Produto 1)' }],
            productsAreInclusive: true,
            productsSpecifications: [],
            quantityToAffectBuyTogether: 0,
            rebatePercentualDiscountValue: 0,
            restrictionsBins: [],
            shippingPercentualTax: 0,
            shouldDistributeDiscountAmongMatchedItems: false,
            skus: [{ id: '1', name: '50 ml (SKU 1)' }],
            skusAreInclusive: true,
            skusGift: { quantitySelectable: 0 },
            slasIds: [],
            stores: [],
            storesAreInclusive: false,
            totalValueCeling: 0,
            totalValueFloor: 0,
            totalValueIncludeAllItems: false,
            totalValueMode: 'IncludeMatchedItems',
            totalValuePurchase: 123,
            type: 'tax',
            useNewProgressiveAlgorithm: false,
            zipCodeRanges: [],
          },
        },
      },
    },
  },
})

export const getApiRnbPvtCampaignConfigurationRoute = createRoute({
  method: 'get',
  path: '/api/rnb/pvt/campaignConfiguration',
  tags: ['Campaign Audiences'],
  summary: 'Get all campaign audiences',
  description: 'Retrieves a list of all campaign audiences and their respective configurations.',
  operationId: 'Getcampaignaudiences',
  request: {
    headers: z.object({
      'Content-Type': z
        .string()
        .openapi({
          param: {
            description: 'Describes the type of the content being sent.',
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
    200: {
      description: 'OK',
      content: {
        'application/json': {
          schema: z
            .array(
              z
                .object({
                  beginDateUtc: z
                    .string()
                    .exactOptional()
                    .openapi({ description: 'Start date of the campaign audience in UTC format.' }),
                  endDateUtc: z
                    .string()
                    .exactOptional()
                    .openapi({ description: 'End date of the campaign audience in UTC format.' }),
                  id: z.string().exactOptional().openapi({ description: 'Campaign audience ID.' }),
                  isActive: z
                    .boolean()
                    .exactOptional()
                    .openapi({
                      description:
                        'Defines if the campaign audience is active (`true`) or not (`false`).',
                    }),
                  isAndOperator: z
                    .boolean()
                    .exactOptional()
                    .openapi({
                      description:
                        'When `true`, determines that all the `targetConfigurations` need to be valid for the campaign audience to be active. When `false`, determines that if at least one of the `targetConfigurations` is valid, the campaign audience will be active.',
                    }),
                  isArchived: z
                    .boolean()
                    .exactOptional()
                    .openapi({
                      description:
                        'Defines if the campaign audience is archived (`true`) or not (`false`).',
                    }),
                  lastModified: z
                    .object({
                      dateUtc: z
                        .string()
                        .exactOptional()
                        .openapi({ description: 'Date of the most recent update in UTC format.' }),
                      user: z
                        .string()
                        .exactOptional()
                        .openapi({
                          description:
                            'Email of the user who updated the campaign audience for the latest time.',
                        }),
                    })
                    .exactOptional()
                    .openapi({
                      description:
                        'Object with information about the most recent update of the campaign audience.',
                      required: [],
                    }),
                  name: z
                    .string()
                    .exactOptional()
                    .openapi({ description: 'Campaign audience name.' }),
                  targetConfigurations: z
                    .array(
                      z
                        .object({
                          affiliates: z
                            .array(
                              z
                                .object({
                                  id: z
                                    .string()
                                    .exactOptional()
                                    .openapi({ description: 'Affiliate ID.' }),
                                  name: z
                                    .string()
                                    .exactOptional()
                                    .openapi({ description: 'Affiliate Name.' }),
                                })
                                .openapi({
                                  description: 'Object with information of the affiliate.',
                                  required: [],
                                }),
                            )
                            .exactOptional()
                            .openapi({
                              description:
                                'Marketplace order identifier. The discount will apply to selected affiliates.',
                            }),
                          areSalesChannelIdsExclusive: z
                            .boolean()
                            .exactOptional()
                            .openapi({
                              description: 'Defines if the trade policy IDs are exclusive.',
                            }),
                          brands: z
                            .array(
                              z
                                .object({
                                  id: z
                                    .string()
                                    .exactOptional()
                                    .openapi({ description: 'Brand ID.' }),
                                  name: z
                                    .string()
                                    .exactOptional()
                                    .openapi({ description: 'Brand Name.' }),
                                })
                                .openapi({
                                  description: 'Object with information of the brand.',
                                  required: [],
                                }),
                            )
                            .exactOptional()
                            .openapi({
                              description:
                                'Object composed by the brands that will activate or deactivate the campaign audience.',
                            }),
                          brandsAreInclusive: z
                            .boolean()
                            .exactOptional()
                            .openapi({
                              description:
                                'If set to `true`, this campaign audience will be applied to any brand present on the `brands` field. If set to `false`, brands present on that field will make this campaign audience not to be applied.',
                            }),
                          campaigns: z
                            .array(z.any())
                            .exactOptional()
                            .openapi({
                              description: 'Campaign Audiences that activate this promotion.',
                            }),
                          cardIssuers: z
                            .array(z.any())
                            .exactOptional()
                            .openapi({ deprecated: true }),
                          categories: z
                            .array(
                              z
                                .object({
                                  id: z
                                    .string()
                                    .exactOptional()
                                    .openapi({ description: 'Category ID.' }),
                                  name: z
                                    .string()
                                    .exactOptional()
                                    .openapi({ description: 'Category Name.' }),
                                })
                                .openapi({
                                  description: 'Object with information of the category.',
                                  required: [],
                                }),
                            )
                            .exactOptional()
                            .openapi({
                              description:
                                'Object composed by the categories that will activate or deactivate the campaign audience.',
                            }),
                          categoriesAreInclusive: z
                            .boolean()
                            .exactOptional()
                            .openapi({
                              description:
                                'If set to `true`, this campaign audience will be applied to any category present on the `categories` field. If set to `false`, categories present on that field will make this campaign audience not to be applied.',
                            }),
                          clusterExpressions: z
                            .array(z.string().openapi({ description: 'Cluster expression.' }))
                            .exactOptional()
                            .openapi({ description: 'An expression to use with clusters.' }),
                          clusterOperator: z.string().exactOptional().openapi({ deprecated: true }),
                          collections: z
                            .array(
                              z
                                .object({
                                  id: z
                                    .string()
                                    .exactOptional()
                                    .openapi({ description: 'Collection ID.' }),
                                  name: z
                                    .string()
                                    .exactOptional()
                                    .openapi({ description: 'Collection Name.' }),
                                })
                                .openapi({
                                  description: 'Object with information of the collection.',
                                  required: [],
                                }),
                            )
                            .exactOptional()
                            .openapi({
                              description:
                                'Object composed by the collections that will activate or deactivate the campaign audience.',
                            }),
                          collections1BuyTogether: z
                            .array(z.string().openapi({ description: 'Collection ID.' }))
                            .exactOptional()
                            .openapi({
                              description:
                                'Collections that will generate the promotion, type **Buy Together**, **More for less**, **Progressive Discount**, **Buy One Get One**.',
                            }),
                          collections2BuyTogether: z
                            .array(z.any())
                            .exactOptional()
                            .openapi({ deprecated: true }),
                          collectionsIsInclusive: z
                            .boolean()
                            .exactOptional()
                            .openapi({
                              description:
                                'If set to `true`, this campaign audience will be applied to any collection present on the `collections` field. If set to `false`, collections present on that field will make this campaign audience not to be applied.',
                            }),
                          compareListPriceAndPrice: z
                            .boolean()
                            .exactOptional()
                            .openapi({
                              description: 'If the **List Price** and **Price** are the same.',
                            }),
                          coupon: z.array(z.any()).exactOptional().openapi({ deprecated: true }),
                          daysAgoOfPurchases: z
                            .int()
                            .exactOptional()
                            .openapi({
                              description:
                                'Number of days that are considered to add the purchase history.',
                            }),
                          enableBuyTogetherPerSku: z
                            .boolean()
                            .exactOptional()
                            .openapi({ description: 'Enable **Buy Together** per SKU.' }),
                          featured: z
                            .boolean()
                            .exactOptional()
                            .openapi({
                              description:
                                'Defines if the target audience is featured (`true`) or not (`false`).',
                            }),
                          firstBuyIsProfileOptimistic: z
                            .boolean()
                            .exactOptional()
                            .openapi({
                              description: 'Applies the discount even if the user is not logged.',
                            }),
                          giftListTypes: z
                            .array(z.string().openapi({ description: 'Gift List Type.' }))
                            .exactOptional()
                            .openapi({ description: 'Gifts List Type.' }),
                          id: z
                            .string()
                            .exactOptional()
                            .openapi({ description: 'Target audience ID.' }),
                          idSellerIsInclusive: z
                            .boolean()
                            .exactOptional()
                            .openapi({
                              description:
                                'Defines if at least one of the sellers must be valid to active the campaign audience.',
                            }),
                          idsSalesChannel: z
                            .array(z.string().openapi({ description: 'Trade policy ID.' }))
                            .exactOptional()
                            .openapi({
                              description:
                                'Array with all the trade policies that activate the campaign audience.',
                            }),
                          installment: z.int().exactOptional().openapi({ deprecated: true }),
                          isDifferentListPriceAndPrice: z
                            .boolean()
                            .exactOptional()
                            .openapi({
                              description:
                                'Applies the campaign audience only if the list price and price is different.',
                            }),
                          isFirstBuy: z
                            .boolean()
                            .exactOptional()
                            .openapi({
                              description: "Applies the discount only if it's a first buy.",
                            }),
                          isMinMaxInstallments: z
                            .boolean()
                            .exactOptional()
                            .openapi({
                              description:
                                'Set if the campaign audience will be applied considering a minimum and maximum values for installments.',
                            }),
                          isSlaSelected: z
                            .boolean()
                            .exactOptional()
                            .openapi({
                              description:
                                'Applies selected discount only when one of the defined shipping method is selected by the customer.',
                            }),
                          itemMaxPrice: z
                            .number()
                            .exactOptional()
                            .openapi({ description: 'Maximum price of the item.' }),
                          itemMinPrice: z
                            .number()
                            .exactOptional()
                            .openapi({ description: 'Minimum price of the item.' }),
                          listBrand1BuyTogether: z
                            .array(z.any())
                            .exactOptional()
                            .openapi({
                              description: 'Brand first list for the promotion **Buy Together.',
                            }),
                          listCategory1BuyTogether: z
                            .array(z.any())
                            .exactOptional()
                            .openapi({
                              description:
                                'Category first list for the promotion **Buy Together**.',
                            }),
                          listSku1BuyTogether: z
                            .array(z.any())
                            .exactOptional()
                            .openapi({
                              description: 'SKU first list for the promotion **Buy Together**.',
                            }),
                          listSku2BuyTogether: z
                            .array(z.any())
                            .exactOptional()
                            .openapi({
                              description: 'SKU second list for the promotion **Buy Together**.',
                            }),
                          marketingTags: z
                            .array(
                              z
                                .string()
                                .openapi({ description: 'Campaign audience marketing tags.' }),
                            )
                            .exactOptional()
                            .openapi({
                              description: "Array with all the campaign audience's marketing tags.",
                            }),
                          marketingTagsAreNotInclusive: z
                            .boolean()
                            .exactOptional()
                            .openapi({
                              description: 'Defines if marketing tags are not inclusive.',
                            }),
                          maxInstallment: z
                            .int()
                            .exactOptional()
                            .openapi({ description: 'Maximum value for installment.' }),
                          maxUsage: z
                            .int()
                            .exactOptional()
                            .openapi({
                              description:
                                'Defines how many times the campaign audience can be used.',
                            }),
                          maxUsagePerClient: z
                            .int()
                            .exactOptional()
                            .openapi({
                              description:
                                'Defines if the campaign audience can be used multiple times per client.',
                            }),
                          merchants: z.array(z.any()).exactOptional().openapi({ deprecated: true }),
                          minInstallment: z
                            .int()
                            .exactOptional()
                            .openapi({ description: 'Minimum value for installment.' }),
                          minimumQuantityBuyTogether: z
                            .int()
                            .exactOptional()
                            .openapi({
                              description: 'Minimum quantity for **Buy Together** promotion.',
                            }),
                          multipleUsePerClient: z
                            .boolean()
                            .exactOptional()
                            .openapi({
                              description:
                                'Defines if the campaign audience can be used multiple times per client.',
                            }),
                          name: z
                            .string()
                            .exactOptional()
                            .openapi({ description: 'Target audience name.' }),
                          origin: z
                            .string()
                            .exactOptional()
                            .openapi({
                              description:
                                'Shows the campaign audience origin, `Marketplace` or `Fulfillment`.  Read [Difference between orders with marketplace and fulfillment sources](https://help.vtex.com/en/tutorial/what-are-orders-with-marketplace-source-and-orders-with-fulfillment-source--6eVYrmUAwMOeKICU2KuG06) for more information.',
                            }),
                          paymentsMethods: z
                            .array(
                              z
                                .object({
                                  id: z
                                    .string()
                                    .exactOptional()
                                    .openapi({ description: 'Payment Method ID.' }),
                                  name: z
                                    .string()
                                    .exactOptional()
                                    .openapi({ description: 'Payment Method Name.' }),
                                })
                                .openapi({
                                  description: 'Object with information of the Payment Method.',
                                  required: [],
                                }),
                            )
                            .exactOptional()
                            .openapi({
                              description: 'Array composed by all the Payments Methods.',
                            }),
                          paymentsRules: z
                            .array(z.any())
                            .exactOptional()
                            .openapi({ deprecated: true }),
                          percentualDiscountValueList: z
                            .array(
                              z.number().openapi({ description: 'Percentual discount value.' }),
                            )
                            .exactOptional()
                            .openapi({ description: 'Percentual discount value list.' }),
                          products: z
                            .array(
                              z
                                .object({
                                  id: z
                                    .string()
                                    .exactOptional()
                                    .openapi({ description: 'Product ID.' }),
                                  name: z
                                    .string()
                                    .exactOptional()
                                    .openapi({ description: 'Product Name.' }),
                                })
                                .openapi({
                                  description: 'Object with information of the product.',
                                  required: [],
                                }),
                            )
                            .exactOptional()
                            .openapi({
                              description:
                                'Object composed by the products that will activate or deactivate the campaign audience.',
                            }),
                          productsAreInclusive: z
                            .boolean()
                            .exactOptional()
                            .openapi({
                              description:
                                'If set to `true`, this campaign audience will be applied to any product present on the `products` field. If set to `false`, products present on that field will make this campaign audience not to be applied.',
                            }),
                          productsSpecifications: z
                            .array(z.any())
                            .exactOptional()
                            .openapi({ deprecated: true }),
                          quantityToAffectBuyTogether: z
                            .int()
                            .exactOptional()
                            .openapi({
                              description: 'Quantity to affect **Buy Together** promotion.',
                            }),
                          restrictionsBins: z
                            .array(z.string().openapi({ description: "Card's BIN." }))
                            .exactOptional()
                            .openapi({
                              description:
                                "The discount will be granted if the card's BIN is given.",
                            }),
                          shouldDistributeDiscountAmongMatchedItems: z
                            .boolean()
                            .exactOptional()
                            .openapi({
                              description: 'Should distribute discount among matched items.',
                            }),
                          skus: z
                            .array(
                              z
                                .object({
                                  id: z
                                    .string()
                                    .exactOptional()
                                    .openapi({ description: 'SKU ID.' }),
                                  name: z
                                    .string()
                                    .exactOptional()
                                    .openapi({ description: 'SKU Name.' }),
                                })
                                .openapi({
                                  description: 'Object with information of the SKU.',
                                  required: [],
                                }),
                            )
                            .exactOptional()
                            .openapi({
                              description:
                                'Object composed by the SKUs that will activate or deactivate the campaign audience.',
                            }),
                          skusAreInclusive: z
                            .boolean()
                            .exactOptional()
                            .openapi({
                              description:
                                'If set to `true`, this campaign audience will be applied to any SKU present on the `skus` field. If set to `false`, SKUs present on that field will make this campaign audience not to be applied.',
                            }),
                          slasIds: z
                            .array(z.string().openapi({ description: 'Shipping method.' }))
                            .exactOptional()
                            .openapi({
                              description:
                                'The discount will be granted if the shipping method is the same as the one given.',
                            }),
                          stores: z.array(z.any()).exactOptional().openapi({ deprecated: true }),
                          storesAreInclusive: z
                            .boolean()
                            .exactOptional()
                            .openapi({ deprecated: true }),
                          totalValueCeling: z
                            .number()
                            .exactOptional()
                            .openapi({
                              description: 'Maximum chart value to active the campaign audience.',
                            }),
                          totalValueFloor: z
                            .number()
                            .exactOptional()
                            .openapi({
                              description: 'Minimum chart value to active the campaign audience.',
                            }),
                          totalValueIncludeAllItems: z
                            .boolean()
                            .exactOptional()
                            .openapi({ deprecated: true }),
                          totalValueMode: z
                            .string()
                            .exactOptional()
                            .openapi({
                              description: 'Total chart value to active the campaign audience.',
                            }),
                          totalValuePurchase: z
                            .number()
                            .exactOptional()
                            .openapi({
                              description:
                                'Total value a client must have in past orders to active the campaign audience.',
                            }),
                          useNewProgressiveAlgorithm: z
                            .boolean()
                            .exactOptional()
                            .openapi({ description: 'Use new progressive algorithm.' }),
                          zipCodeRanges: z
                            .array(
                              z
                                .object({
                                  inclusive: z
                                    .boolean()
                                    .exactOptional()
                                    .openapi({
                                      description:
                                        'Defines if the zip code applies the campaign audience.',
                                    }),
                                })
                                .openapi({
                                  description: 'Zip code that applies the campaign audience.',
                                  required: [],
                                }),
                            )
                            .exactOptional()
                            .openapi({
                              description:
                                'Range of the zip code that applies the campaign audience.',
                            }),
                        })
                        .openapi({
                          description: 'Object with information about the target audience.',
                          required: [],
                        }),
                    )
                    .exactOptional()
                    .openapi({
                      description:
                        'Array that contains all target audience that the campaign audience will be valid.',
                    }),
                })
                .openapi({
                  description: 'Object containing information about the campaign audience.',
                  title: '',
                  required: [],
                }),
            )
            .openapi({ description: 'Array of campaign audiences.' }),
          example: [
            {
              beginDateUtc: '2020-05-01T21:30:00Z',
              endDateUtc: '2020-05-02T01:30:00Z',
              id: 'dd270d06-1ed1-47fc-b04e-a2431121b5a4',
              isActive: true,
              isAndOperator: false,
              isArchived: false,
              lastModified: { dateUtc: '2020-05-01T21:22:01.807398Z', user: 'email@email.com' },
              name: 'Interna',
              targetConfigurations: [
                {
                  affiliates: [],
                  areSalesChannelIdsExclusive: false,
                  brands: [],
                  brandsAreInclusive: true,
                  campaigns: [],
                  cardIssuers: [],
                  categories: [],
                  categoriesAreInclusive: true,
                  clusterExpressions: [],
                  clusterOperator: 'all',
                  collections: [],
                  collections1BuyTogether: [],
                  collections2BuyTogether: [],
                  collectionsIsInclusive: true,
                  compareListPriceAndPrice: false,
                  coupon: [],
                  daysAgoOfPurchases: 0,
                  enableBuyTogetherPerSku: false,
                  featured: false,
                  firstBuyIsProfileOptimistic: false,
                  giftListTypes: [],
                  id: '77ae1e4c-a216-4b15-a4a3-ae64ec298988',
                  idSellerIsInclusive: false,
                  idsSalesChannel: [],
                  installment: 0,
                  isDifferentListPriceAndPrice: false,
                  isFirstBuy: false,
                  isMinMaxInstallments: false,
                  isSlaSelected: false,
                  itemMaxPrice: 0,
                  itemMinPrice: 0,
                  listBrand1BuyTogether: [],
                  listCategory1BuyTogether: [],
                  listSku1BuyTogether: [],
                  listSku2BuyTogether: [],
                  marketingTags: ['MKT1'],
                  marketingTagsAreNotInclusive: false,
                  maxInstallment: 0,
                  maxUsage: 0,
                  maxUsagePerClient: 0,
                  merchants: [],
                  minInstallment: 0,
                  minimumQuantityBuyTogether: 1,
                  multipleUsePerClient: false,
                  name: 'Social Sellers',
                  origin: 'Marketplace',
                  paymentsMethods: [],
                  paymentsRules: [],
                  percentualDiscountValueList: [],
                  products: [],
                  productsAreInclusive: false,
                  productsSpecifications: [],
                  quantityToAffectBuyTogether: 0,
                  restrictionsBins: [],
                  shouldDistributeDiscountAmongMatchedItems: false,
                  skus: [],
                  skusAreInclusive: true,
                  slasIds: [],
                  stores: [],
                  storesAreInclusive: false,
                  totalValueCeling: 0,
                  totalValueFloor: 0,
                  totalValueIncludeAllItems: false,
                  totalValueMode: 'IncludeMatchedItems',
                  totalValuePurchase: 0,
                  useNewProgressiveAlgorithm: false,
                  zipCodeRanges: [{ inclusive: true }],
                },
              ],
            },
          ],
        },
      },
    },
  },
})

export const postApiRnbPvtCampaignConfigurationRoute = createRoute({
  method: 'post',
  path: '/api/rnb/pvt/campaignConfiguration',
  tags: ['Campaign Audiences'],
  summary: 'Create campaign audience',
  description: 'Creates a new campaign audience.',
  operationId: 'Setcampaignconfiguration',
  request: {
    headers: z.object({
      'Content-Type': z
        .string()
        .default('application/json')
        .openapi({
          param: {
            description: 'Describes the type of the content being sent.',
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
          schema: z
            .object({
              beginDateUtc: z
                .string()
                .exactOptional()
                .openapi({
                  description: 'Start date of the campaign audience in UTC format.',
                  example: '2020-05-01T21:30:00Z',
                }),
              endDateUtc: z
                .string()
                .exactOptional()
                .openapi({
                  description: 'End date of the campaign audience in UTC format.',
                  example: '2020-05-02T01:30:00Z',
                }),
              id: z
                .string()
                .exactOptional()
                .openapi({
                  description: 'Campaign audience ID.',
                  example: 'dd270d06-1ed1-47fc-b04e-a2431121b5a4',
                }),
              isActive: z
                .boolean()
                .exactOptional()
                .openapi({
                  description:
                    'Defines if the campaign audience is active (`true`) or not (`false`).',
                  example: true,
                }),
              isAndOperator: z
                .boolean()
                .exactOptional()
                .openapi({
                  description:
                    'When `true`, determines that all the `targetConfigurations` need to be valid for the campaign audience to be active. When `false`, determines that if at least one of the `targetConfigurations` is valid, the campaign audience will be active.',
                  example: true,
                }),
              isArchived: z
                .boolean()
                .exactOptional()
                .openapi({
                  description:
                    'Defines if the campaign audience is archived (`true`) or not (`false`).',
                  example: false,
                }),
              lastModified: z
                .object({
                  dateUtc: z
                    .string()
                    .exactOptional()
                    .openapi({
                      description: 'Date of the last update in UTC format.',
                      example: '2020-05-01T21:22:01.807398Z',
                    }),
                  user: z
                    .string()
                    .exactOptional()
                    .openapi({
                      description: 'Email of the user who made the last update.',
                      example: 'email@email.com',
                    }),
                })
                .exactOptional()
                .openapi({
                  description:
                    'Object with information about the last update of the campaign audience.',
                  required: [],
                }),
              name: z
                .string()
                .exactOptional()
                .openapi({ description: 'Campaign audience name.', example: 'Interna' }),
              targetConfigurations: z
                .array(
                  z
                    .object({
                      affiliates: z
                        .array(
                          z
                            .object({
                              id: z
                                .string()
                                .exactOptional()
                                .openapi({ description: 'Affiliate ID.', example: '1' }),
                              name: z
                                .string()
                                .exactOptional()
                                .openapi({ description: 'Affiliate Name.', example: 'Amazon' }),
                            })
                            .openapi({
                              description: 'Object with information of the affiliate.',
                              required: [],
                            }),
                        )
                        .exactOptional()
                        .openapi({
                          description:
                            'Marketplace order identifier. The discount will apply to selected affiliates.',
                        }),
                      areSalesChannelIdsExclusive: z
                        .boolean()
                        .exactOptional()
                        .openapi({
                          description: 'Shows if the trade policy IDs are exclusive.',
                          example: false,
                        }),
                      brands: z
                        .array(
                          z
                            .object({
                              id: z
                                .string()
                                .exactOptional()
                                .openapi({ description: 'Brand ID.', example: '1' }),
                              name: z
                                .string()
                                .exactOptional()
                                .openapi({ description: 'Brand Name.', example: 'Brand (1)' }),
                            })
                            .openapi({
                              description: 'Object with information of the brand.',
                              required: [],
                            }),
                        )
                        .exactOptional()
                        .openapi({
                          description:
                            'Object composed by the brands that will activate or deactivate the campaign audience.',
                        }),
                      brandsAreInclusive: z
                        .boolean()
                        .exactOptional()
                        .openapi({
                          description:
                            'If set to `true`, this campaign audience will be applied to any brand present on the `brands` field. If set to `false`, brands present on that field will make this campaign audience not to be applied.',
                          example: true,
                        }),
                      campaigns: z
                        .array(z.any())
                        .exactOptional()
                        .openapi({
                          description: 'Campaign Audiences that activate this promotion.',
                          example: [],
                        }),
                      cardIssuers: z.array(z.any()).exactOptional().openapi({ deprecated: true }),
                      categories: z
                        .array(
                          z
                            .object({
                              id: z
                                .string()
                                .exactOptional()
                                .openapi({ description: 'Category ID.', example: '1' }),
                              name: z
                                .string()
                                .exactOptional()
                                .openapi({
                                  description: 'Category Name.',
                                  example: 'Vinhos Tintos (1)',
                                }),
                            })
                            .openapi({
                              description: 'Object with information of the category.',
                              required: [],
                            }),
                        )
                        .exactOptional()
                        .openapi({
                          description:
                            'Object composed by the categories that will activate or deactivate the campaign audience.',
                        }),
                      categoriesAreInclusive: z
                        .boolean()
                        .exactOptional()
                        .openapi({
                          description:
                            'If set to `true`, this campaign audience will be applied to any category present on the `categories` field. If set to `false`, categories present on that field will make this campaign audience not to be applied.',
                          example: true,
                        }),
                      clusterExpressions: z
                        .array(
                          z
                            .string()
                            .openapi({
                              description: 'Cluster expression.',
                              example: 'birthday=true',
                            }),
                        )
                        .exactOptional()
                        .openapi({ description: 'An expression to use with clusters.' }),
                      clusterOperator: z.string().exactOptional().openapi({ deprecated: true }),
                      collections: z
                        .array(
                          z
                            .object({
                              id: z
                                .string()
                                .exactOptional()
                                .openapi({ description: 'Collection ID.', example: '1' }),
                              name: z
                                .string()
                                .exactOptional()
                                .openapi({
                                  description: 'Collection Name.',
                                  example: 'Collection (1)',
                                }),
                            })
                            .openapi({
                              description: 'Object with information of the collection.',
                              required: [],
                            }),
                        )
                        .exactOptional()
                        .openapi({
                          description:
                            'Object composed by the collections that will activate or deactivate the campaign audience.',
                        }),
                      collections1BuyTogether: z
                        .array(z.string().openapi({ description: 'Collection ID.', example: '1' }))
                        .exactOptional()
                        .openapi({
                          description:
                            'Collections that will generate the promotion, type **Buy Together**, **More for less**, **Progressive Discount**, **Buy One Get One**.',
                        }),
                      collections2BuyTogether: z
                        .array(z.any())
                        .exactOptional()
                        .openapi({ deprecated: true }),
                      collectionsIsInclusive: z
                        .boolean()
                        .exactOptional()
                        .openapi({
                          description:
                            'If set to `true`, this campaign audience will be applied to any collection present on the `collections` field. If set to `false`, collections present on that field will make this campaign audience not to be applied.',
                          example: true,
                        }),
                      compareListPriceAndPrice: z
                        .boolean()
                        .exactOptional()
                        .openapi({
                          description: 'If the **List Price** and **Price** are the same.',
                          example: false,
                        }),
                      coupon: z.array(z.any()).exactOptional().openapi({ deprecated: true }),
                      daysAgoOfPurchases: z
                        .int()
                        .exactOptional()
                        .openapi({
                          description:
                            'Number of days that are considered to add the purchase history.',
                          example: 0,
                        }),
                      enableBuyTogetherPerSku: z
                        .boolean()
                        .exactOptional()
                        .openapi({
                          description: 'Enable **Buy Together** per SKU.',
                          example: false,
                        }),
                      featured: z
                        .boolean()
                        .exactOptional()
                        .openapi({
                          description:
                            'Defines if the target audience is featured (`true`) or not (`false`).',
                          example: false,
                        }),
                      firstBuyIsProfileOptimistic: z
                        .boolean()
                        .exactOptional()
                        .openapi({
                          description: 'Applies the discount even if the user is not logged.',
                          example: false,
                        }),
                      giftListTypes: z
                        .array(
                          z
                            .string()
                            .openapi({ description: 'Gift List Type.', example: 'Wishlist' }),
                        )
                        .exactOptional()
                        .openapi({ description: 'Gifts List Type.' }),
                      id: z
                        .string()
                        .exactOptional()
                        .openapi({
                          description: 'Target audience ID.',
                          example: '77ae1e4c-a216-4b15-a4a3-ae64ec298988',
                        }),
                      idSellerIsInclusive: z
                        .boolean()
                        .exactOptional()
                        .openapi({
                          description:
                            'Shows if at least one of the sellers must be valid to active the campaign audience.',
                          example: false,
                        }),
                      idsSalesChannel: z
                        .array(
                          z
                            .string()
                            .openapi({ description: 'Trade policy ID.', example: 'Principal' }),
                        )
                        .exactOptional()
                        .openapi({
                          description:
                            'Shows the trade policies that active the campaign audience.',
                        }),
                      installment: z.int().exactOptional().openapi({ deprecated: true }),
                      isDifferentListPriceAndPrice: z
                        .boolean()
                        .exactOptional()
                        .openapi({
                          description:
                            'Applies the campaign audience only if the list price and price is different.',
                          example: false,
                        }),
                      isFirstBuy: z
                        .boolean()
                        .exactOptional()
                        .openapi({
                          description: "Applies the discount only if it's a first buy.",
                          example: false,
                        }),
                      isMinMaxInstallments: z
                        .boolean()
                        .exactOptional()
                        .openapi({
                          description:
                            'Set if the campaign audience will be applied considering a minimum and maximum values for installments.',
                          example: false,
                        }),
                      isSlaSelected: z
                        .boolean()
                        .exactOptional()
                        .openapi({
                          description:
                            'Applies selected discount only when one of the defined shipping method is selected by the customer.',
                          example: false,
                        }),
                      itemMaxPrice: z
                        .number()
                        .exactOptional()
                        .openapi({ description: 'Maximum price of the item.', example: 0 }),
                      itemMinPrice: z
                        .number()
                        .exactOptional()
                        .openapi({ description: 'Minimum price of the item.', example: 0 }),
                      listBrand1BuyTogether: z
                        .array(z.any())
                        .exactOptional()
                        .openapi({
                          description: 'Brand first list for the promotion **Buy Together.',
                          example: [],
                        }),
                      listCategory1BuyTogether: z
                        .array(
                          z
                            .object({
                              id: z
                                .string()
                                .exactOptional()
                                .openapi({ description: 'Category ID.', example: '1' }),
                              name: z
                                .string()
                                .exactOptional()
                                .openapi({
                                  description: 'Category name.',
                                  example: 'Vinhos Tintos (1)',
                                }),
                            })
                            .openapi({ title: '', required: [] }),
                        )
                        .exactOptional()
                        .openapi({
                          description: 'Category first list for the promotion **Buy Together**.',
                        }),
                      listSku1BuyTogether: z
                        .array(z.any())
                        .exactOptional()
                        .openapi({
                          description: 'SKU first list for the promotion **Buy Together**.',
                          example: [],
                        }),
                      listSku2BuyTogether: z
                        .array(z.any())
                        .exactOptional()
                        .openapi({
                          description: 'SKU second list for the promotion **Buy Together**.',
                          example: [],
                        }),
                      marketingTags: z
                        .array(
                          z
                            .string()
                            .openapi({
                              description: 'Campaign audience marketing tags.',
                              example: 'MKT1',
                            }),
                        )
                        .exactOptional()
                        .openapi({
                          description: "Array with all campaign audience's marketing tags.",
                        }),
                      marketingTagsAreNotInclusive: z
                        .boolean()
                        .exactOptional()
                        .openapi({
                          description: 'Shows if marketing tags are not inclusive.',
                          example: false,
                        }),
                      maxInstallment: z
                        .int()
                        .exactOptional()
                        .openapi({ description: 'Maximum value for installment.', example: 0 }),
                      maxUsage: z
                        .int()
                        .exactOptional()
                        .openapi({
                          description: 'Defines how many times the campaign audience can be used.',
                          example: 0,
                        }),
                      maxUsagePerClient: z
                        .int()
                        .exactOptional()
                        .openapi({
                          description:
                            'Defines if the campaign audience can be used multiple times per client.',
                          example: 0,
                        }),
                      merchants: z.array(z.any()).exactOptional().openapi({ deprecated: true }),
                      minInstallment: z
                        .int()
                        .exactOptional()
                        .openapi({ description: 'Minimum value for installment.', example: 0 }),
                      minimumQuantityBuyTogether: z
                        .int()
                        .exactOptional()
                        .openapi({
                          description: 'Minimum quantity for **Buy Together** promotion.',
                          example: 1,
                        }),
                      multipleUsePerClient: z
                        .boolean()
                        .exactOptional()
                        .openapi({
                          description:
                            'Defines if the campaign audience can be used multiple times per client.',
                          example: false,
                        }),
                      name: z
                        .string()
                        .exactOptional()
                        .openapi({
                          description: 'Target audience name.',
                          example: 'Social Sellers',
                        }),
                      origin: z
                        .string()
                        .exactOptional()
                        .openapi({
                          description:
                            'Shows the campaign audience origin, `Marketplace` or `Fulfillment`.  Read [Difference between orders with marketplace and fulfillment sources](https://help.vtex.com/en/tutorial/what-are-orders-with-marketplace-source-and-orders-with-fulfillment-source--6eVYrmUAwMOeKICU2KuG06) for more information.',
                          example: 'Marketplace',
                        }),
                      paymentsMethods: z
                        .array(
                          z
                            .object({
                              id: z
                                .string()
                                .exactOptional()
                                .openapi({ description: 'Payment Method ID.', example: '2' }),
                              name: z
                                .string()
                                .exactOptional()
                                .openapi({
                                  description: 'Payment Method Name.',
                                  example: 'Visa (2)',
                                }),
                            })
                            .openapi({
                              description: 'Object with information of the Payment Method.',
                              required: [],
                            }),
                        )
                        .exactOptional()
                        .openapi({ description: 'Array composed by all the Payments Methods.' }),
                      paymentsRules: z.array(z.any()).exactOptional().openapi({ deprecated: true }),
                      percentualDiscountValueList: z
                        .array(
                          z
                            .number()
                            .openapi({ description: 'Percentual discount value.', example: 0 }),
                        )
                        .exactOptional()
                        .openapi({ description: 'Percentual discount value list.' }),
                      products: z
                        .array(
                          z
                            .object({
                              id: z
                                .string()
                                .exactOptional()
                                .openapi({ description: 'Product ID.', example: '1' }),
                              name: z
                                .string()
                                .exactOptional()
                                .openapi({ description: 'Product Name.', example: 'Vinho (1)' }),
                            })
                            .openapi({
                              description: 'Object with information of the product.',
                              required: [],
                            }),
                        )
                        .exactOptional()
                        .openapi({
                          description:
                            'Object composed by the products that will activate or deactivate the campaign audience.',
                        }),
                      productsAreInclusive: z
                        .boolean()
                        .exactOptional()
                        .openapi({
                          description:
                            'If set to `true`, this campaign audience will be applied to any product present on the `products` field. If set to `false`, products present on that field will make this campaign audience not to be applied.',
                          example: true,
                        }),
                      productsSpecifications: z
                        .array(z.any())
                        .exactOptional()
                        .openapi({ deprecated: true }),
                      quantityToAffectBuyTogether: z
                        .int()
                        .exactOptional()
                        .openapi({
                          description: 'Quantity to affect **Buy Together** promotion.',
                          example: 0,
                        }),
                      restrictionsBins: z
                        .array(z.string().openapi({ description: "Card's BIN.", example: '1234' }))
                        .exactOptional()
                        .openapi({
                          description: "The discount will be granted if the card's BIN is given.",
                        }),
                      shouldDistributeDiscountAmongMatchedItems: z
                        .boolean()
                        .exactOptional()
                        .openapi({
                          description: 'Should distribute discount among matched items.',
                          example: false,
                        }),
                      skus: z
                        .array(
                          z
                            .object({
                              id: z
                                .string()
                                .exactOptional()
                                .openapi({ description: 'SKU ID.', example: '1' }),
                              name: z
                                .string()
                                .exactOptional()
                                .openapi({ description: 'SKU Name.', example: 'Vinho tinto (1)' }),
                            })
                            .openapi({
                              description: 'Object with information of the SKU.',
                              required: [],
                            }),
                        )
                        .exactOptional()
                        .openapi({
                          description:
                            'Object composed by the SKUs that will activate or deactivate the campaign audience.',
                        }),
                      skusAreInclusive: z
                        .boolean()
                        .exactOptional()
                        .openapi({
                          description:
                            'If set to `true`, this campaign audience will be applied to any SKU present on the `skus` field. If set to `false`, SKUs present on that field will make this campaign audience not to be applied.',
                          example: true,
                        }),
                      slasIds: z
                        .array(
                          z
                            .string()
                            .openapi({ description: 'Shipping method.', example: 'Express' }),
                        )
                        .exactOptional()
                        .openapi({
                          description:
                            'The discount will be granted if the shipping method is the same as the one given.',
                        }),
                      stores: z.array(z.any()).exactOptional().openapi({ deprecated: true }),
                      storesAreInclusive: z.boolean().exactOptional().openapi({ deprecated: true }),
                      totalValueCeling: z
                        .number()
                        .exactOptional()
                        .openapi({
                          description: 'Maximum chart value to active the campaign audience.',
                          example: 0,
                        }),
                      totalValueFloor: z
                        .number()
                        .exactOptional()
                        .openapi({
                          description: 'Minimum chart value to active the campaign audience.',
                          example: 40,
                        }),
                      totalValueIncludeAllItems: z
                        .boolean()
                        .exactOptional()
                        .openapi({ deprecated: true }),
                      totalValueMode: z
                        .string()
                        .exactOptional()
                        .openapi({
                          description: 'Total chart value to active the campaign audience.',
                          example: 'IncludeMatchedItems',
                        }),
                      totalValuePurchase: z
                        .number()
                        .exactOptional()
                        .openapi({
                          description:
                            'Total value a client must have in past orders to active the campaign audience.',
                          example: 0,
                        }),
                      useNewProgressiveAlgorithm: z
                        .boolean()
                        .exactOptional()
                        .openapi({ description: 'Use new progressive algorithm.', example: false }),
                      zipCodeRanges: z
                        .array(
                          z
                            .object({
                              inclusive: z
                                .boolean()
                                .exactOptional()
                                .openapi({
                                  description:
                                    'Defines if the zip code applies the campaign audience.',
                                  example: false,
                                }),
                            })
                            .openapi({
                              description: 'Zip code that applies the campaign audience.',
                              required: [],
                            }),
                        )
                        .exactOptional()
                        .openapi({
                          description: 'Range of the zip code that applies the campaign audience.',
                        }),
                    })
                    .openapi({
                      description: 'Object with information about the target audience.',
                      required: [],
                    }),
                )
                .exactOptional()
                .openapi({
                  description:
                    'Array that contains all target audience that the campaign audience will be valid.',
                }),
            })
            .openapi({ title: '', required: [] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': {
          schema: z
            .object({
              beginDateUtc: z
                .string()
                .exactOptional()
                .openapi({ description: 'Start date of the campaign audience in UTC format.' }),
              endDateUtc: z
                .string()
                .exactOptional()
                .openapi({ description: 'End date of the campaign audience in UTC format.' }),
              id: z.string().exactOptional().openapi({ description: 'Campaign audience ID.' }),
              isActive: z
                .boolean()
                .exactOptional()
                .openapi({
                  description:
                    'Defines if the campaign audience is active (`true`) or not (`false`).',
                }),
              isAndOperator: z
                .boolean()
                .exactOptional()
                .openapi({
                  description:
                    'When `true`, determines that all the `targetConfigurations` need to be valid for the campaign audience to be active. When `false`, determines that if at least one of the `targetConfigurations` is valid, the campaign audience will be active.',
                }),
              isArchived: z
                .boolean()
                .exactOptional()
                .openapi({
                  description:
                    'Defines if the campaign audience is archived (`true`) or not (`false`).',
                }),
              lastModified: z
                .object({
                  dateUtc: z
                    .string()
                    .exactOptional()
                    .openapi({ description: 'Date of the most recent update in UTC format.' }),
                  user: z
                    .string()
                    .exactOptional()
                    .openapi({
                      description:
                        'Email of the user who updated the campaign audience for the latest time.',
                    }),
                })
                .exactOptional()
                .openapi({
                  description:
                    'Object with information about the most recent update of the campaign audience.',
                  required: [],
                }),
              name: z.string().exactOptional().openapi({ description: 'Campaign audience name.' }),
              targetConfigurations: z
                .array(
                  z
                    .object({
                      affiliates: z
                        .array(
                          z
                            .object({
                              id: z
                                .string()
                                .exactOptional()
                                .openapi({ description: 'Affiliate ID.' }),
                              name: z
                                .string()
                                .exactOptional()
                                .openapi({ description: 'Affiliate Name.' }),
                            })
                            .openapi({
                              description: 'Object with information of the affiliate.',
                              required: [],
                            }),
                        )
                        .exactOptional()
                        .openapi({
                          description:
                            'Marketplace order identifier. The discount will apply to selected affiliates.',
                        }),
                      areSalesChannelIdsExclusive: z
                        .boolean()
                        .exactOptional()
                        .openapi({ description: 'Defines if the trade policy IDs are exclusive.' }),
                      brands: z
                        .array(
                          z
                            .object({
                              id: z.string().exactOptional().openapi({ description: 'Brand ID.' }),
                              name: z
                                .string()
                                .exactOptional()
                                .openapi({ description: 'Brand Name.' }),
                            })
                            .openapi({
                              description: 'Object with information of the brand.',
                              required: [],
                            }),
                        )
                        .exactOptional()
                        .openapi({
                          description:
                            'Object composed by the brands that will activate or deactivate the campaign audience.',
                        }),
                      brandsAreInclusive: z
                        .boolean()
                        .exactOptional()
                        .openapi({
                          description:
                            'If set to `true`, this campaign audience will be applied to any brand present on the `brands` field. If set to `false`, brands present on that field will make this campaign audience not to be applied.',
                        }),
                      campaigns: z
                        .array(z.any())
                        .exactOptional()
                        .openapi({
                          description: 'Campaign Audiences that activate this promotion.',
                        }),
                      cardIssuers: z.array(z.any()).exactOptional().openapi({ deprecated: true }),
                      categories: z
                        .array(
                          z
                            .object({
                              id: z
                                .string()
                                .exactOptional()
                                .openapi({ description: 'Category ID.' }),
                              name: z
                                .string()
                                .exactOptional()
                                .openapi({ description: 'Category Name.' }),
                            })
                            .openapi({
                              description: 'Object with information of the category.',
                              required: [],
                            }),
                        )
                        .exactOptional()
                        .openapi({
                          description:
                            'Object composed by the categories that will activate or deactivate the campaign audience.',
                        }),
                      categoriesAreInclusive: z
                        .boolean()
                        .exactOptional()
                        .openapi({
                          description:
                            'If set to `true`, this campaign audience will be applied to any category present on the `categories` field. If set to `false`, categories present on that field will make this campaign audience not to be applied.',
                        }),
                      clusterExpressions: z
                        .array(z.string().openapi({ description: 'Cluster expression.' }))
                        .exactOptional()
                        .openapi({ description: 'An expression to use with clusters.' }),
                      clusterOperator: z.string().exactOptional().openapi({ deprecated: true }),
                      collections: z
                        .array(
                          z
                            .object({
                              id: z
                                .string()
                                .exactOptional()
                                .openapi({ description: 'Collection ID.' }),
                              name: z
                                .string()
                                .exactOptional()
                                .openapi({ description: 'Collection Name.' }),
                            })
                            .openapi({
                              description: 'Object with information of the collection.',
                              required: [],
                            }),
                        )
                        .exactOptional()
                        .openapi({
                          description:
                            'Object composed by the collections that will activate or deactivate the campaign audience.',
                        }),
                      collections1BuyTogether: z
                        .array(z.string().openapi({ description: 'Collection ID.' }))
                        .exactOptional()
                        .openapi({
                          description:
                            'Collections that will generate the promotion, type **Buy Together**, **More for less**, **Progressive Discount**, **Buy One Get One**.',
                        }),
                      collections2BuyTogether: z
                        .array(z.any())
                        .exactOptional()
                        .openapi({ deprecated: true }),
                      collectionsIsInclusive: z
                        .boolean()
                        .exactOptional()
                        .openapi({
                          description:
                            'If set to `true`, this campaign audience will be applied to any collection present on the `collections` field. If set to `false`, collections present on that field will make this campaign audience not to be applied.',
                        }),
                      compareListPriceAndPrice: z
                        .boolean()
                        .exactOptional()
                        .openapi({
                          description: 'If the **List Price** and **Price** are the same.',
                        }),
                      coupon: z.array(z.any()).exactOptional().openapi({ deprecated: true }),
                      daysAgoOfPurchases: z
                        .int()
                        .exactOptional()
                        .openapi({
                          description:
                            'Number of days that are considered to add the purchase history.',
                        }),
                      enableBuyTogetherPerSku: z
                        .boolean()
                        .exactOptional()
                        .openapi({ description: 'Enable **Buy Together** per SKU.' }),
                      featured: z
                        .boolean()
                        .exactOptional()
                        .openapi({
                          description:
                            'Defines if the target audience is feature (`true`) or not (`false`).',
                        }),
                      firstBuyIsProfileOptimistic: z
                        .boolean()
                        .exactOptional()
                        .openapi({
                          description: 'Applies the discount even if the user is not logged.',
                        }),
                      giftListTypes: z
                        .array(z.string().openapi({ description: 'Gift List Type.' }))
                        .exactOptional()
                        .openapi({ description: 'Gifts List Type.' }),
                      id: z
                        .string()
                        .exactOptional()
                        .openapi({ description: 'Target audience ID.' }),
                      idSellerIsInclusive: z
                        .boolean()
                        .exactOptional()
                        .openapi({
                          description:
                            'Defines if at least one of the sellers must be valid to active the campaign audience.',
                        }),
                      idsSalesChannel: z
                        .array(z.string().openapi({ description: 'Trade policy ID.' }))
                        .exactOptional()
                        .openapi({
                          description:
                            'Array with all the trade policies that activate the campaign audience.',
                        }),
                      installment: z.int().exactOptional().openapi({ deprecated: true }),
                      isDifferentListPriceAndPrice: z
                        .boolean()
                        .exactOptional()
                        .openapi({
                          description:
                            'Applies the campaign audience only if the list price and price is different.',
                        }),
                      isFirstBuy: z
                        .boolean()
                        .exactOptional()
                        .openapi({ description: "Applies the discount only if it's a first buy." }),
                      isMinMaxInstallments: z
                        .boolean()
                        .exactOptional()
                        .openapi({
                          description:
                            'Set if the campaign audience will be applied considering a minimum and maximum values for installments.',
                        }),
                      isSlaSelected: z
                        .boolean()
                        .exactOptional()
                        .openapi({
                          description:
                            'Applies selected discount only when one of the defined shipping method is selected by the customer.',
                        }),
                      itemMaxPrice: z
                        .number()
                        .exactOptional()
                        .openapi({ description: 'Maximum price of the item.' }),
                      itemMinPrice: z
                        .number()
                        .exactOptional()
                        .openapi({ description: 'Minimum price of the item.' }),
                      listBrand1BuyTogether: z
                        .array(z.any())
                        .exactOptional()
                        .openapi({
                          description: 'Brand first list for the promotion **Buy Together.',
                        }),
                      listCategory1BuyTogether: z
                        .array(z.any())
                        .exactOptional()
                        .openapi({
                          description: 'Category first list for the promotion **Buy Together**.',
                        }),
                      listSku1BuyTogether: z
                        .array(z.any())
                        .exactOptional()
                        .openapi({
                          description: 'SKU first list for the promotion **Buy Together**.',
                        }),
                      listSku2BuyTogether: z
                        .array(z.any())
                        .exactOptional()
                        .openapi({
                          description: 'SKU second list for the promotion **Buy Together**.',
                        }),
                      marketingTags: z
                        .array(
                          z.string().openapi({ description: 'Campaign audience marketing tags.' }),
                        )
                        .exactOptional()
                        .openapi({
                          description: "Array with all the campaign audience's marketing tags.",
                        }),
                      marketingTagsAreNotInclusive: z
                        .boolean()
                        .exactOptional()
                        .openapi({ description: 'Defines if marketing tags are not inclusive.' }),
                      maxInstallment: z
                        .int()
                        .exactOptional()
                        .openapi({ description: 'Maximum value for installment.' }),
                      maxUsage: z
                        .int()
                        .exactOptional()
                        .openapi({
                          description: 'Defines how many times the campaign audience can be used.',
                        }),
                      maxUsagePerClient: z
                        .int()
                        .exactOptional()
                        .openapi({
                          description:
                            'Defines if the campaign audience can be used multiple times per client.',
                        }),
                      merchants: z.array(z.any()).exactOptional().openapi({ deprecated: true }),
                      minInstallment: z
                        .int()
                        .exactOptional()
                        .openapi({ description: 'Minimum value for installment.' }),
                      minimumQuantityBuyTogether: z
                        .int()
                        .exactOptional()
                        .openapi({
                          description: 'Minimum quantity for **Buy Together** promotion.',
                        }),
                      multipleUsePerClient: z
                        .boolean()
                        .exactOptional()
                        .openapi({
                          description:
                            'Defines if the campaign audience can be used multiple times per client.',
                        }),
                      name: z
                        .string()
                        .exactOptional()
                        .openapi({ description: 'Target audience name.' }),
                      origin: z
                        .string()
                        .exactOptional()
                        .openapi({
                          description:
                            'Shows the campaign audience origin, `Marketplace` or `Fulfillment`.  Read [Difference between orders with marketplace and fulfillment sources](https://help.vtex.com/en/tutorial/what-are-orders-with-marketplace-source-and-orders-with-fulfillment-source--6eVYrmUAwMOeKICU2KuG06) for more information.',
                        }),
                      paymentsMethods: z
                        .array(
                          z
                            .object({
                              id: z
                                .string()
                                .exactOptional()
                                .openapi({ description: 'Payment Method ID.' }),
                              name: z
                                .string()
                                .exactOptional()
                                .openapi({ description: 'Payment Method Name.' }),
                            })
                            .openapi({
                              description: 'Object with information of the Payment Method.',
                              required: [],
                            }),
                        )
                        .exactOptional()
                        .openapi({ description: 'Array composed by all the Payments Methods.' }),
                      paymentsRules: z.array(z.any()).exactOptional().openapi({ deprecated: true }),
                      percentualDiscountValueList: z
                        .array(z.number().openapi({ description: 'Percentual discount value.' }))
                        .exactOptional()
                        .openapi({ description: 'Percentual discount value list.' }),
                      products: z
                        .array(
                          z
                            .object({
                              id: z
                                .string()
                                .exactOptional()
                                .openapi({ description: 'Product ID.' }),
                              name: z
                                .string()
                                .exactOptional()
                                .openapi({ description: 'Product Name.' }),
                            })
                            .openapi({
                              description: 'Object with information of the product.',
                              required: [],
                            }),
                        )
                        .exactOptional()
                        .openapi({
                          description:
                            'Object composed by the products that will activate or deactivate the campaign audience.',
                        }),
                      productsAreInclusive: z
                        .boolean()
                        .exactOptional()
                        .openapi({
                          description:
                            'If set to `true`, this campaign audience will be applied to any product present on the `products` field. If set to `false`, products present on that field will make this campaign audience not to be applied.',
                        }),
                      productsSpecifications: z
                        .array(z.any())
                        .exactOptional()
                        .openapi({ deprecated: true }),
                      quantityToAffectBuyTogether: z
                        .int()
                        .exactOptional()
                        .openapi({ description: 'Quantity to affect **Buy Together** promotion.' }),
                      restrictionsBins: z
                        .array(z.string().openapi({ description: "Card's BIN." }))
                        .exactOptional()
                        .openapi({
                          description: "The discount will be granted if the card's BIN is given.",
                        }),
                      shouldDistributeDiscountAmongMatchedItems: z
                        .boolean()
                        .exactOptional()
                        .openapi({
                          description: 'Should distribute discount among matched items.',
                        }),
                      skus: z
                        .array(
                          z
                            .object({
                              id: z.string().exactOptional().openapi({ description: 'SKU ID.' }),
                              name: z
                                .string()
                                .exactOptional()
                                .openapi({ description: 'SKU Name.' }),
                            })
                            .openapi({
                              description: 'Object with information of the SKU.',
                              required: [],
                            }),
                        )
                        .exactOptional()
                        .openapi({
                          description:
                            'Object composed by the SKUs that will activate or deactivate the campaign audience.',
                        }),
                      skusAreInclusive: z
                        .boolean()
                        .exactOptional()
                        .openapi({
                          description:
                            'If set to `true`, this campaign audience will be applied to any SKU present on the `skus` field. If set to `false`, SKUs present on that field will make this campaign audience not to be applied.',
                        }),
                      slasIds: z
                        .array(z.string().openapi({ description: 'Shipping method.' }))
                        .exactOptional()
                        .openapi({
                          description:
                            'The discount will be granted if the shipping method is the same as the one given.',
                        }),
                      stores: z.array(z.any()).exactOptional().openapi({ deprecated: true }),
                      storesAreInclusive: z.boolean().exactOptional().openapi({ deprecated: true }),
                      totalValueCeling: z
                        .number()
                        .exactOptional()
                        .openapi({
                          description: 'Maximum chart value to active the campaign audience.',
                        }),
                      totalValueFloor: z
                        .number()
                        .exactOptional()
                        .openapi({
                          description: 'Minimum chart value to active the campaign audience.',
                        }),
                      totalValueIncludeAllItems: z
                        .boolean()
                        .exactOptional()
                        .openapi({ deprecated: true }),
                      totalValueMode: z
                        .string()
                        .exactOptional()
                        .openapi({
                          description: 'Total chart value to active the campaign audience.',
                        }),
                      totalValuePurchase: z
                        .number()
                        .exactOptional()
                        .openapi({
                          description:
                            'Total value a client must have in past orders to active the campaign audience.',
                        }),
                      useNewProgressiveAlgorithm: z
                        .boolean()
                        .exactOptional()
                        .openapi({ description: 'Use new progressive algorithm.' }),
                      zipCodeRanges: z
                        .array(
                          z
                            .object({
                              inclusive: z
                                .boolean()
                                .exactOptional()
                                .openapi({
                                  description:
                                    'Defines if the zip code applies the campaign audience.',
                                }),
                            })
                            .openapi({
                              description: 'Zip code that applies the campaign audience.',
                              required: [],
                            }),
                        )
                        .exactOptional()
                        .openapi({
                          description: 'Range of the zip code that applies the campaign audience.',
                        }),
                    })
                    .openapi({
                      description: 'Object with information about the target audience.',
                      required: [],
                    }),
                )
                .exactOptional()
                .openapi({
                  description:
                    'Array that contains all target audience that the campaign audience will be valid.',
                }),
            })
            .openapi({ title: '', required: [] }),
          example: {
            beginDateUtc: '2020-05-01T21:30:00Z',
            endDateUtc: '2020-05-02T01:30:00Z',
            id: 'dd270d06-1ed1-47fc-b04e-a2431121b5a4',
            isActive: true,
            isAndOperator: false,
            isArchived: false,
            lastModified: { dateUtc: '2020-05-01T21:22:01.807398Z', user: 'email@email.com' },
            name: 'Interna',
            targetConfigurations: [
              {
                affiliates: [],
                areSalesChannelIdsExclusive: false,
                brands: [],
                brandsAreInclusive: true,
                campaigns: [],
                cardIssuers: [],
                categories: [],
                categoriesAreInclusive: true,
                clusterExpressions: [],
                collections: [],
                collections1BuyTogether: [],
                collections2BuyTogether: [],
                collectionsIsInclusive: true,
                compareListPriceAndPrice: false,
                coupon: [],
                daysAgoOfPurchases: 0,
                enableBuyTogetherPerSku: false,
                featured: false,
                firstBuyIsProfileOptimistic: false,
                giftListTypes: [],
                id: '77ae1e4c-a216-4b15-a4a3-ae64ec298988',
                idSellerIsInclusive: false,
                idsSalesChannel: [],
                installment: 0,
                isDifferentListPriceAndPrice: false,
                isFirstBuy: false,
                isMinMaxInstallments: false,
                isSlaSelected: false,
                itemMaxPrice: 0,
                itemMinPrice: 0,
                listBrand1BuyTogether: [],
                listCategory1BuyTogether: [],
                listSku1BuyTogether: [],
                listSku2BuyTogether: [],
                marketingTags: ['MKT1'],
                marketingTagsAreNotInclusive: false,
                maxInstallment: 0,
                maxUsage: 0,
                maxUsagePerClient: 0,
                merchants: [],
                minInstallment: 0,
                minimumQuantityBuyTogether: 1,
                multipleUsePerClient: false,
                name: 'Social Sellers',
                origin: 'Marketplace',
                paymentsMethods: [],
                paymentsRules: [],
                percentualDiscountValueList: [],
                products: [],
                productsAreInclusive: false,
                productsSpecifications: [],
                quantityToAffectBuyTogether: 0,
                restrictionsBins: [],
                shouldDistributeDiscountAmongMatchedItems: false,
                skus: [],
                skusAreInclusive: true,
                slasIds: [],
                stores: [],
                storesAreInclusive: false,
                totalValueCeling: 0,
                totalValueFloor: 0,
                totalValueIncludeAllItems: false,
                totalValueMode: 'IncludeMatchedItems',
                totalValuePurchase: 0,
                useNewProgressiveAlgorithm: false,
                zipCodeRanges: [{ inclusive: true }],
              },
            ],
          },
        },
      },
    },
  },
})

export const getApiRnbPvtCampaignConfigurationCampaignIdRoute = createRoute({
  method: 'get',
  path: '/api/rnb/pvt/campaignConfiguration/{campaignId}',
  tags: ['Campaign Audiences'],
  summary: 'Get campaign audience configuration',
  description:
    'Retrieves a specific campaign audience configuration by its ID. This API uses the campaign ID, not the campaign name.',
  operationId: 'Getcampaignconfiguration',
  request: {
    headers: z.object({
      'Content-Type': z
        .string()
        .default('application/json')
        .openapi({
          param: {
            description: 'Describes the type of the content being sent.',
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
      campaignId: z
        .string()
        .openapi({
          param: {
            description: 'Campaign audience unique identifier.',
            in: 'path',
            name: 'campaignId',
            required: true,
            schema: { example: 'dd270d06-1ed1-47fc-b04e-a2431121b5a4', type: 'string' },
            style: 'simple',
          },
          example: 'dd270d06-1ed1-47fc-b04e-a2431121b5a4',
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': {
          schema: z
            .object({
              beginDateUtc: z
                .string()
                .exactOptional()
                .openapi({ description: 'Start date of the campaign audience in UTC format.' }),
              endDateUtc: z
                .string()
                .exactOptional()
                .openapi({ description: 'End date of the campaign audience in UTC format.' }),
              id: z.string().exactOptional().openapi({ description: 'Campaign audience ID.' }),
              isActive: z
                .boolean()
                .exactOptional()
                .openapi({
                  description:
                    'Defines if the campaign audience is active (`true`) or not (`false`).',
                }),
              isAndOperator: z
                .boolean()
                .exactOptional()
                .openapi({
                  description:
                    'When `true`, determines that all the `targetConfigurations` need to be valid for the campaign audience to be active. When `false`, determines that if at least one of the `targetConfigurations` is valid, the campaign audience will be active.',
                }),
              isArchived: z
                .boolean()
                .exactOptional()
                .openapi({
                  description:
                    'Defines if the campaign audience is archived (`true`) or not (`false`).',
                }),
              lastModified: z
                .object({
                  dateUtc: z
                    .string()
                    .exactOptional()
                    .openapi({ description: 'Date of the most recent update in UTC format.' }),
                  user: z
                    .string()
                    .exactOptional()
                    .openapi({
                      description:
                        'Email of the user who updated the campaign audience for the latest time.',
                    }),
                })
                .exactOptional()
                .openapi({
                  description:
                    'Object with information about the most recent update of the campaign audience.',
                  required: [],
                }),
              name: z.string().exactOptional().openapi({ description: 'Campaign audience name.' }),
              targetConfigurations: z
                .array(
                  z
                    .object({
                      affiliates: z
                        .array(
                          z
                            .object({
                              id: z
                                .string()
                                .exactOptional()
                                .openapi({ description: 'Affiliate ID.' }),
                              name: z
                                .string()
                                .exactOptional()
                                .openapi({ description: 'Affiliate Name.' }),
                            })
                            .openapi({
                              description: 'Object with information of the affiliate.',
                              required: [],
                            }),
                        )
                        .exactOptional()
                        .openapi({
                          description:
                            'Marketplace order identifier. The discount will apply to selected affiliates.',
                        }),
                      areSalesChannelIdsExclusive: z
                        .boolean()
                        .exactOptional()
                        .openapi({ description: 'Defines if the trade policy IDs are exclusive.' }),
                      brands: z
                        .array(
                          z
                            .object({
                              id: z.string().exactOptional().openapi({ description: 'Brand ID.' }),
                              name: z
                                .string()
                                .exactOptional()
                                .openapi({ description: 'Brand Name.' }),
                            })
                            .openapi({
                              description: 'Object with information of the brand.',
                              required: [],
                            }),
                        )
                        .exactOptional()
                        .openapi({
                          description:
                            'Object composed by the brands that will activate or deactivate the campaign audience.',
                        }),
                      brandsAreInclusive: z
                        .boolean()
                        .exactOptional()
                        .openapi({
                          description:
                            'If set to `true`, this campaign audience will be applied to any brand present on the `brands` field. If set to `false`, brands present on that field will make this campaign audience not to be applied.',
                        }),
                      campaigns: z
                        .array(z.any())
                        .exactOptional()
                        .openapi({
                          description: 'Campaign Audiences that activate this promotion.',
                        }),
                      cardIssuers: z.array(z.any()).exactOptional().openapi({ deprecated: true }),
                      categories: z
                        .array(
                          z
                            .object({
                              id: z
                                .string()
                                .exactOptional()
                                .openapi({ description: 'Category ID.' }),
                              name: z
                                .string()
                                .exactOptional()
                                .openapi({ description: 'Category Name.' }),
                            })
                            .openapi({
                              description: 'Object with information of the category.',
                              required: [],
                            }),
                        )
                        .exactOptional()
                        .openapi({
                          description:
                            'Object composed by the categories that will activate or deactivate the campaign audience.',
                        }),
                      categoriesAreInclusive: z
                        .boolean()
                        .exactOptional()
                        .openapi({
                          description:
                            'If set to `true`, this campaign audience will be applied to any category present on the `categories` field. If set to `false`, categories present on that field will make this campaign audience not to be applied.',
                        }),
                      clusterExpressions: z
                        .array(z.string().openapi({ description: 'Cluster expression.' }))
                        .exactOptional()
                        .openapi({ description: 'An expression to use with clusters.' }),
                      collections: z
                        .array(
                          z
                            .object({
                              id: z
                                .string()
                                .exactOptional()
                                .openapi({ description: 'Collection ID.' }),
                              name: z
                                .string()
                                .exactOptional()
                                .openapi({ description: 'Collection Name.' }),
                            })
                            .openapi({
                              description: 'Object with information of the collection.',
                              required: [],
                            }),
                        )
                        .exactOptional()
                        .openapi({
                          description:
                            'Object composed by the collections that will activate or deactivate the campaign audience.',
                        }),
                      collections1BuyTogether: z
                        .array(z.string().openapi({ description: 'Collection ID.' }))
                        .exactOptional()
                        .openapi({
                          description:
                            'Collections that will generate the promotion, type **Buy Together**, **More for less**, **Progressive Discount**, **Buy One Get One**.',
                        }),
                      collections2BuyTogether: z
                        .array(z.any())
                        .exactOptional()
                        .openapi({ deprecated: true }),
                      collectionsIsInclusive: z
                        .boolean()
                        .exactOptional()
                        .openapi({
                          description:
                            'If set to `true`, this campaign audience will be applied to any collection present on the `collections` field. If set to `false`, collections present on that field will make this campaign audience not to be applied.',
                        }),
                      compareListPriceAndPrice: z
                        .boolean()
                        .exactOptional()
                        .openapi({
                          description: 'If the **List Price** and **Price** are the same.',
                        }),
                      coupon: z.array(z.any()).exactOptional().openapi({ deprecated: true }),
                      daysAgoOfPurchases: z
                        .int()
                        .exactOptional()
                        .openapi({
                          description:
                            'Number of days that are considered to add the purchase history.',
                        }),
                      enableBuyTogetherPerSku: z
                        .boolean()
                        .exactOptional()
                        .openapi({ description: 'Enable **Buy Together** per SKU.' }),
                      featured: z
                        .boolean()
                        .exactOptional()
                        .openapi({
                          description:
                            'Defines if the target audience is featured (`true`) or not (`false`).',
                        }),
                      firstBuyIsProfileOptimistic: z
                        .boolean()
                        .exactOptional()
                        .openapi({
                          description: 'Applies the discount even if the user is not logged.',
                        }),
                      giftListTypes: z
                        .array(z.string().openapi({ description: 'Gift List Type.' }))
                        .exactOptional()
                        .openapi({ description: 'Gifts List Type.' }),
                      id: z
                        .string()
                        .exactOptional()
                        .openapi({ description: 'Target audience ID.' }),
                      idSellerIsInclusive: z
                        .boolean()
                        .exactOptional()
                        .openapi({
                          description:
                            'Defines if at least one of the sellers must be valid to active the campaign audience.',
                        }),
                      idsSalesChannel: z
                        .array(z.string().openapi({ description: 'Trade policy ID.' }))
                        .exactOptional()
                        .openapi({
                          description:
                            'Array with all the trade policies that activate the campaign audience.',
                        }),
                      installment: z.int().exactOptional().openapi({ deprecated: true }),
                      isDifferentListPriceAndPrice: z
                        .boolean()
                        .exactOptional()
                        .openapi({
                          description:
                            'Applies the campaign audience only if the list price and price is different.',
                        }),
                      isFirstBuy: z
                        .boolean()
                        .exactOptional()
                        .openapi({ description: "Applies the discount only if it's a first buy." }),
                      isMinMaxInstallments: z
                        .boolean()
                        .exactOptional()
                        .openapi({
                          description:
                            'Set if the campaign audience will be applied considering a minimum and maximum values for installments.',
                        }),
                      isSlaSelected: z
                        .boolean()
                        .exactOptional()
                        .openapi({
                          description:
                            'Applies selected discount only when one of the defined shipping method is selected by the customer.',
                        }),
                      itemMaxPrice: z
                        .number()
                        .exactOptional()
                        .openapi({ description: 'Maximum price of the item.' }),
                      itemMinPrice: z
                        .number()
                        .exactOptional()
                        .openapi({ description: 'Minimum price of the item.' }),
                      listBrand1BuyTogether: z
                        .array(z.any())
                        .exactOptional()
                        .openapi({
                          description: 'Brand first list for the promotion **Buy Together.',
                        }),
                      listCategory1BuyTogether: z
                        .array(z.any())
                        .exactOptional()
                        .openapi({
                          description: 'Category first list for the promotion **Buy Together**.',
                        }),
                      listSku1BuyTogether: z
                        .array(z.any())
                        .exactOptional()
                        .openapi({
                          description: 'SKU first list for the promotion **Buy Together**.',
                        }),
                      listSku2BuyTogether: z
                        .array(z.any())
                        .exactOptional()
                        .openapi({
                          description: 'SKU second list for the promotion **Buy Together**.',
                        }),
                      marketingTags: z
                        .array(
                          z.string().openapi({ description: 'Campaign audience marketing tags.' }),
                        )
                        .exactOptional()
                        .openapi({
                          description: "Array with all the campaign audience's marketing tags.",
                        }),
                      marketingTagsAreNotInclusive: z
                        .boolean()
                        .exactOptional()
                        .openapi({ description: 'Defines if marketing tags are not inclusive.' }),
                      maxInstallment: z
                        .int()
                        .exactOptional()
                        .openapi({ description: 'Maximum value for installment.' }),
                      maxUsage: z
                        .int()
                        .exactOptional()
                        .openapi({
                          description: 'Defines how many times the campaign audience can be used.',
                        }),
                      maxUsagePerClient: z
                        .int()
                        .exactOptional()
                        .openapi({
                          description:
                            'Defines if the campaign audience can be used multiple times per client.',
                        }),
                      merchants: z.array(z.any()).exactOptional().openapi({ deprecated: true }),
                      minInstallment: z
                        .int()
                        .exactOptional()
                        .openapi({ description: 'Minimum value for installment.' }),
                      minimumQuantityBuyTogether: z
                        .int()
                        .exactOptional()
                        .openapi({
                          description: 'Minimum quantity for **Buy Together** promotion.',
                        }),
                      multipleUsePerClient: z
                        .boolean()
                        .exactOptional()
                        .openapi({
                          description:
                            'Defines if the campaign audience can be used multiple times per client.',
                        }),
                      name: z
                        .string()
                        .exactOptional()
                        .openapi({ description: 'Target audience name.' }),
                      origin: z
                        .string()
                        .exactOptional()
                        .openapi({
                          description:
                            'Shows the campaign audience origin, `Marketplace` or `Fulfillment`.  Read [Difference between orders with marketplace and fulfillment sources](https://help.vtex.com/en/tutorial/what-are-orders-with-marketplace-source-and-orders-with-fulfillment-source--6eVYrmUAwMOeKICU2KuG06) for more information.',
                        }),
                      paymentsMethods: z
                        .array(
                          z
                            .object({
                              id: z
                                .string()
                                .exactOptional()
                                .openapi({ description: 'Payment Method ID.' }),
                              name: z
                                .string()
                                .exactOptional()
                                .openapi({ description: 'Payment Method Name.' }),
                            })
                            .openapi({
                              description: 'Object with information of the Payment Method.',
                              required: [],
                            }),
                        )
                        .exactOptional()
                        .openapi({ description: 'Array composed by all the Payments Methods.' }),
                      paymentsRules: z.array(z.any()).exactOptional().openapi({ deprecated: true }),
                      percentualDiscountValueList: z
                        .array(z.number().openapi({ description: 'Percentual discount value.' }))
                        .exactOptional()
                        .openapi({ description: 'Percentual discount value list.' }),
                      products: z
                        .array(
                          z
                            .object({
                              id: z
                                .string()
                                .exactOptional()
                                .openapi({ description: 'Product ID.' }),
                              name: z
                                .string()
                                .exactOptional()
                                .openapi({ description: 'Product Name.' }),
                            })
                            .openapi({
                              description: 'Object with information of the product.',
                              required: [],
                            }),
                        )
                        .exactOptional()
                        .openapi({
                          description:
                            'Object composed by the products that will activate or deactivate the campaign audience.',
                        }),
                      productsAreInclusive: z
                        .boolean()
                        .exactOptional()
                        .openapi({
                          description:
                            'If set to `true`, this campaign audience will be applied to any product present on the `products` field. If set to `false`, products present on that field will make this campaign audience not to be applied.',
                        }),
                      productsSpecifications: z
                        .array(z.any())
                        .exactOptional()
                        .openapi({ deprecated: true }),
                      quantityToAffectBuyTogether: z
                        .int()
                        .exactOptional()
                        .openapi({ description: 'Quantity to affect **Buy Together** promotion.' }),
                      restrictionsBins: z
                        .array(z.string().openapi({ description: "Card's BIN." }))
                        .exactOptional()
                        .openapi({
                          description: "The discount will be granted if the card's BIN is given.",
                        }),
                      shouldDistributeDiscountAmongMatchedItems: z
                        .boolean()
                        .exactOptional()
                        .openapi({
                          description: 'Should distribute discount among matched items.',
                        }),
                      skus: z
                        .array(
                          z
                            .object({
                              id: z.string().exactOptional().openapi({ description: 'SKU ID.' }),
                              name: z
                                .string()
                                .exactOptional()
                                .openapi({ description: 'SKU Name.' }),
                            })
                            .openapi({
                              description: 'Object with information of the SKU.',
                              required: [],
                            }),
                        )
                        .exactOptional()
                        .openapi({
                          description:
                            'Object composed by the SKUs that will activate or deactivate the campaign audience.',
                        }),
                      skusAreInclusive: z
                        .boolean()
                        .exactOptional()
                        .openapi({
                          description:
                            'If set to `true`, this campaign audience will be applied to any SKU present on the `skus` field. If set to `false`, SKUs present on that field will make this campaign audience not to be applied.',
                        }),
                      slasIds: z
                        .array(z.string().openapi({ description: 'Shipping method.' }))
                        .exactOptional()
                        .openapi({
                          description:
                            'The discount will be granted if the shipping method is the same as the one given.',
                        }),
                      stores: z.array(z.any()).exactOptional().openapi({ deprecated: true }),
                      storesAreInclusive: z.boolean().exactOptional().openapi({ deprecated: true }),
                      totalValueCeling: z
                        .number()
                        .exactOptional()
                        .openapi({
                          description: 'Maximum chart value to active the campaign audience.',
                        }),
                      totalValueFloor: z
                        .number()
                        .exactOptional()
                        .openapi({
                          description: 'Minimum chart value to active the campaign audience.',
                        }),
                      totalValueIncludeAllItems: z
                        .boolean()
                        .exactOptional()
                        .openapi({ deprecated: true }),
                      totalValueMode: z
                        .string()
                        .exactOptional()
                        .openapi({
                          description: 'Total chart value to active the campaign audience.',
                        }),
                      totalValuePurchase: z
                        .number()
                        .exactOptional()
                        .openapi({
                          description:
                            'Total value a client must have in past orders to active the campaign audience.',
                        }),
                      useNewProgressiveAlgorithm: z
                        .boolean()
                        .exactOptional()
                        .openapi({ description: 'Use new progressive algorithm.' }),
                      zipCodeRanges: z
                        .array(
                          z
                            .object({
                              inclusive: z
                                .boolean()
                                .exactOptional()
                                .openapi({
                                  description:
                                    'Defines if the zip code applies the campaign audience.',
                                }),
                            })
                            .openapi({
                              description: 'Zip code that applies the campaign audience.',
                              required: [],
                            }),
                        )
                        .exactOptional()
                        .openapi({
                          description: 'Range of the zip code that applies the campaign audience.',
                        }),
                    })
                    .openapi({
                      description: 'Object with information about the target audience.',
                      required: [],
                    }),
                )
                .exactOptional()
                .openapi({
                  description:
                    'Array that contains all target audience that the campaign audience will be valid.',
                }),
            })
            .openapi({ title: '', required: [] }),
          example: {
            beginDateUtc: '2020-05-01T21:30:00Z',
            endDateUtc: '2020-05-02T01:30:00Z',
            id: 'dd270d06-1ed1-47fc-b04e-a2431121b5a4',
            isActive: true,
            isAndOperator: false,
            isArchived: false,
            lastModified: { dateUtc: '2020-05-01T21:22:01.807398Z', user: 'email@email.com' },
            name: 'Interna',
            targetConfigurations: [
              {
                affiliates: [],
                areSalesChannelIdsExclusive: false,
                brands: [],
                brandsAreInclusive: true,
                campaigns: [],
                cardIssuers: [],
                categories: [],
                categoriesAreInclusive: true,
                clusterExpressions: [],
                clusterOperator: 'all',
                collections: [],
                collections1BuyTogether: [],
                collections2BuyTogether: [],
                collectionsIsInclusive: true,
                compareListPriceAndPrice: false,
                coupon: [],
                daysAgoOfPurchases: 0,
                enableBuyTogetherPerSku: false,
                featured: false,
                firstBuyIsProfileOptimistic: false,
                giftListTypes: [],
                id: '77ae1e4c-a216-4b15-a4a3-ae64ec298988',
                idSellerIsInclusive: false,
                idsSalesChannel: [],
                installment: 0,
                isDifferentListPriceAndPrice: false,
                isFirstBuy: false,
                isMinMaxInstallments: false,
                isSlaSelected: false,
                itemMaxPrice: 0,
                itemMinPrice: 0,
                listBrand1BuyTogether: [],
                listCategory1BuyTogether: [],
                listSku1BuyTogether: [],
                listSku2BuyTogether: [],
                marketingTags: ['MKT1'],
                marketingTagsAreNotInclusive: false,
                maxInstallment: 0,
                maxUsage: 0,
                maxUsagePerClient: 0,
                merchants: [],
                minInstallment: 0,
                minimumQuantityBuyTogether: 1,
                multipleUsePerClient: false,
                name: 'Social Sellers',
                origin: 'Marketplace',
                paymentsMethods: [],
                paymentsRules: [],
                percentualDiscountValueList: [],
                products: [],
                productsAreInclusive: false,
                productsSpecifications: [],
                quantityToAffectBuyTogether: 0,
                restrictionsBins: [],
                shouldDistributeDiscountAmongMatchedItems: false,
                skus: [],
                skusAreInclusive: true,
                slasIds: [],
                stores: [],
                storesAreInclusive: false,
                totalValueCeling: 0,
                totalValueFloor: 0,
                totalValueIncludeAllItems: false,
                totalValueMode: 'IncludeMatchedItems',
                totalValuePurchase: 0,
                useNewProgressiveAlgorithm: false,
                zipCodeRanges: [{ inclusive: true }],
              },
            ],
          },
        },
      },
    },
  },
})

export const getApiRnbPvtCouponRoute = createRoute({
  method: 'get',
  path: '/api/rnb/pvt/coupon',
  tags: ['Coupons'],
  summary: 'Get all coupons',
  description:
    "\r\n> Check the new [Promotions onboarding guide](https://developers.vtex.com/vtex-rest-api/docs/promotions-overview). We created this guide to improve the onboarding experience for developers at VTEX. It assembles all documentation on our Developer Portal about Promotions and is organized by focusing on the developer's journey.\r\n\r\n Retrieves all coupons from an account.",
  operationId: 'Getall',
  request: {
    headers: z.object({
      'Content-Type': z
        .string()
        .default('application/json')
        .openapi({
          param: {
            description: '',
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
              'HTTP Client Negotiation Accept Header. Indicates the types of responses the client can understand',
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
    200: {
      description: 'OK',
      content: {
        'application/json': {
          schema: z
            .array(
              z
                .object({
                  couponCode: z.string().exactOptional().openapi({ description: 'Coupon code.' }),
                  expirationIntervalPerUse: z
                    .string()
                    .exactOptional()
                    .openapi({ description: 'Coupon expiration interval per use.' }),
                  isArchived: z
                    .boolean()
                    .exactOptional()
                    .openapi({
                      description: 'Defines if the coupon is archived (`true`) or not (`false`).',
                    }),
                  lastModifiedUtc: z
                    .string()
                    .exactOptional()
                    .openapi({
                      description: 'Date and time of the last update of the coupon in UTC format.',
                    }),
                  maxItemsPerClient: z
                    .int()
                    .exactOptional()
                    .openapi({
                      description: 'Maximum items per client that the coupon can be applied.',
                    }),
                  utmCampaign: z
                    .string()
                    .exactOptional()
                    .openapi({ description: 'UTM campaign code.' }),
                  utmSource: z
                    .string()
                    .exactOptional()
                    .openapi({ description: 'UTM source code.' }),
                })
                .openapi({
                  description: 'Object with information about the coupon.',
                  title: '',
                  required: [],
                }),
            )
            .openapi({ title: '' }),
          example: [
            {
              couponCode: 'test',
              expirationIntervalPerUse: '00:00:00',
              isArchived: false,
              lastModifiedUtc: '2021-11-10T14:24:39.3683694Z',
              maxItemsPerClient: 10,
              utmCampaign: 'coupon3',
              utmSource: 'coupon3',
            },
            {
              couponCode: 'test-lucian2',
              expirationIntervalPerUse: '00:00:00',
              isArchived: false,
              lastModifiedUtc: '2020-06-22T18:25:24.4583474Z',
              maxItemsPerClient: 10,
              utmSource: 'cupom3',
            },
          ],
        },
      },
    },
  },
})

export const postApiRnbPvtCouponRoute = createRoute({
  method: 'post',
  path: '/api/rnb/pvt/coupon',
  tags: ['Coupons'],
  summary: 'Update coupon',
  description: 'Updates information of a specific coupon.',
  operationId: 'Update',
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
      description: '',
      content: {
        'application/json': {
          schema: z
            .object({
              couponCode: z.string().openapi({ description: 'Coupon code.', example: 'test' }),
              expirationIntervalPerUse: z
                .string()
                .openapi({
                  description: 'Coupon expiration interval per use.',
                  example: '00:00:00',
                }),
              isArchived: z
                .boolean()
                .openapi({
                  description: 'Defines if the coupon is archived (`true`) or not (`false`).',
                  example: false,
                }),
              maxItemsPerClient: z
                .int()
                .openapi({
                  description: 'Maximum items per client that the coupon can be applied.',
                  example: 10,
                }),
              utmCampaign: z
                .string()
                .openapi({ description: 'UTM campaign code.', example: 'coupon3' }),
              utmSource: z
                .string()
                .openapi({ description: 'UTM source code.', example: 'coupon3' }),
            })
            .openapi({
              required: [
                'utmSource',
                'utmCampaign',
                'couponCode',
                'isArchived',
                'maxItemsPerClient',
                'expirationIntervalPerUse',
              ],
              title: '',
            }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': {
          schema: z
            .object({
              couponCode: z.string().exactOptional().openapi({ description: 'Coupon code.' }),
              expirationIntervalPerUse: z
                .string()
                .exactOptional()
                .openapi({ description: 'Coupon expiration interval per use.' }),
              isArchived: z
                .boolean()
                .exactOptional()
                .openapi({
                  description: 'Defines if the coupon is archived (`true`) or not (`false`).',
                }),
              lastModifiedUtc: z
                .string()
                .exactOptional()
                .openapi({
                  description: 'Date and time of the last update of the coupon in UTC format.',
                }),
              maxItemsPerClient: z
                .int()
                .exactOptional()
                .openapi({
                  description: 'Maximum items per client that the coupon can be applied.',
                }),
              utmCampaign: z
                .string()
                .exactOptional()
                .openapi({ description: 'UTM campaign code.' }),
              utmSource: z.string().exactOptional().openapi({ description: 'UTM source code.' }),
            })
            .openapi({ title: '', required: [] }),
          example: {
            couponCode: 'test',
            expirationIntervalPerUse: '00:00:00',
            isArchived: false,
            lastModifiedUtc: '2021-11-10T14:24:39.3683694Z',
            maxItemsPerClient: 10,
            utmCampaign: 'coupon3',
            utmSource: 'coupon3',
          },
        },
      },
    },
  },
})

export const postApiRnbPvtCouponIndexRoute = createRoute({
  method: 'post',
  path: '/api/rnb/pvt/coupon/',
  tags: ['Coupons'],
  summary: 'Create coupon',
  description: 'Creates a single new coupon.',
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
      content: {
        'application/json': {
          schema: z
            .object({
              couponCode: z
                .string()
                .openapi({ description: 'Coupon code.', example: 'summersale10' }),
              expirationIntervalPerUse: z
                .string()
                .openapi({
                  description: 'Coupon expiration interval per use.',
                  example: '00:00:00',
                }),
              maxItemsPerClient: z
                .int()
                .openapi({
                  description: 'Maximum items per client that the coupon can be applied.',
                  example: 10,
                }),
              utmCampaign: z
                .string()
                .exactOptional()
                .openapi({ description: 'UTM campaign code.', example: 'summer' }),
              utmSource: z.string().openapi({ description: 'UTM source code.', example: 'email' }),
            })
            .openapi({
              required: [
                'utmSource',
                'couponCode',
                'maxItemsPerClient',
                'expirationIntervalPerUse',
              ],
              title: '',
            }),
        },
      },
    },
  },
  responses: {
    201: {
      description: 'Created',
      content: {
        'application/json': {
          schema: z
            .object({
              couponCode: z.string().exactOptional().openapi({ description: 'Coupon code.' }),
              expirationIntervalPerUse: z
                .string()
                .exactOptional()
                .openapi({ description: 'Coupon expiration interval per use.' }),
              isArchived: z
                .boolean()
                .exactOptional()
                .openapi({
                  description: 'Defines if the coupon is archived (`true`) or not (`false`).',
                }),
              lastModifiedUtc: z
                .string()
                .exactOptional()
                .openapi({
                  description: 'Date and time of the last update of the coupon in UTC format.',
                }),
              maxItemsPerClient: z
                .int()
                .exactOptional()
                .openapi({
                  description: 'Maximum items per client that the coupon can be applied.',
                }),
              utmCampaign: z
                .string()
                .exactOptional()
                .openapi({ description: 'UTM campaign code.' }),
              utmSource: z.string().exactOptional().openapi({ description: 'UTM source code.' }),
            })
            .openapi({ title: '', required: [] }),
          example: {
            couponCode: 'summersale10',
            expirationIntervalPerUse: '00:00:00',
            isArchived: false,
            lastModifiedUtc: '2021-11-10T14:24:39.3683694Z',
            maxItemsPerClient: 10,
            utmCampaign: 'summer',
            utmSource: 'email',
          },
        },
      },
    },
  },
})

export const getApiRnbPvtCouponUsageCouponCodeRoute = createRoute({
  method: 'get',
  path: '/api/rnb/pvt/coupon/usage/{couponCode}',
  tags: ['Coupons'],
  summary: 'Get coupon usage',
  description: 'Retrieves information about the coupon usage.',
  operationId: 'Getusage',
  request: {
    headers: z.object({
      'Content-Type': z
        .string()
        .default('application/json')
        .openapi({
          param: {
            description: 'Describes the type of the content being sent.',
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
      couponCode: z
        .string()
        .openapi({
          param: {
            description: 'Coupon Code',
            in: 'path',
            name: 'couponCode',
            required: true,
            schema: { example: 'test', type: 'string' },
            style: 'simple',
          },
          example: 'test',
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': {
          schema: z
            .object({
              couponCode: z.string().exactOptional().openapi({ description: 'Coupon code.' }),
              hostName: z.string().exactOptional().openapi({ description: 'Name of the store.' }),
              profileUsages: z
                .object({
                  profileId: z
                    .object({
                      orderUsage: z
                        .array(
                          z
                            .object({
                              orderId: z
                                .string()
                                .exactOptional()
                                .openapi({ description: 'Order ID.' }),
                              usageDateUtc: z
                                .string()
                                .exactOptional()
                                .openapi({
                                  description:
                                    'Date and time when the coupon was used in the order in UTC format.',
                                }),
                            })
                            .openapi({
                              description:
                                'Object with information about the order that the coupon was used.',
                              required: [],
                            }),
                        )
                        .exactOptional()
                        .openapi({
                          description: 'Array with all the orders that the coupon was used.',
                        }),
                    })
                    .exactOptional()
                    .openapi({ description: 'Profile ID.', required: [] }),
                })
                .exactOptional()
                .openapi({
                  description: 'Object with information where and when the coupon was used.',
                  required: [],
                }),
            })
            .openapi({ title: '', required: [] }),
          example: {
            couponCode: 'test',
            hostName: 'account',
            profileUsages: {
              '23fa76cd-14e1-43ee-93af-0c04c9f6cfd7': {
                orderUsage: [
                  { orderId: '11636716780563-01', usageDateUtc: '2021-11-03T23:27:54.8305115Z' },
                ],
              },
            },
          },
        },
      },
    },
  },
})

export const getApiRnbPvtCouponCouponCodeRoute = createRoute({
  method: 'get',
  path: '/api/rnb/pvt/coupon/{couponCode}',
  tags: ['Coupons'],
  summary: 'Get coupon by coupon code',
  description: 'Retrieves a specific coupon by its coupon code.',
  operationId: 'Getbycouponcode',
  request: {
    headers: z.object({
      'Content-Type': z
        .string()
        .default('application/json')
        .openapi({
          param: {
            description: 'Describes the type of the content being sent.',
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
      couponCode: z
        .string()
        .openapi({
          param: {
            description: 'Coupon Code',
            in: 'path',
            name: 'couponCode',
            required: true,
            schema: { example: 'promo10', type: 'string' },
            style: 'simple',
          },
          example: 'promo10',
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': {
          schema: z
            .object({
              couponCode: z.string().exactOptional().openapi({ description: 'Coupon code.' }),
              expirationIntervalPerUse: z
                .string()
                .exactOptional()
                .openapi({ description: 'Coupon expiration interval per use.' }),
              isArchived: z
                .boolean()
                .exactOptional()
                .openapi({
                  description: 'Defines if the coupon is archived (`true`) or not (`false`).',
                }),
              lastModifiedUtc: z
                .string()
                .exactOptional()
                .openapi({
                  description: 'Date and time of the last update of the coupon in UTC format.',
                }),
              maxItemsPerClient: z
                .int()
                .exactOptional()
                .openapi({
                  description: 'Maximum items per client that the coupon can be applied.',
                }),
              utmCampaign: z
                .string()
                .exactOptional()
                .openapi({ description: 'UTM campaign code.' }),
              utmSource: z.string().exactOptional().openapi({ description: 'UTM source code.' }),
            })
            .openapi({ title: '', required: [] }),
          example: {
            couponCode: 'test',
            expirationIntervalPerUse: '00:00:00',
            isArchived: false,
            lastModifiedUtc: '2021-11-10T14:24:39.3683694Z',
            maxItemsPerClient: 10,
            utmSource: 'coupon3',
          },
        },
      },
    },
  },
})

export const postApiRnbPvtCouponsRoute = createRoute({
  method: 'post',
  path: '/api/rnb/pvt/coupons',
  tags: ['Coupons'],
  summary: 'Coupon Massive Generation',
  description: 'Generates a massive amount of coupons',
  operationId: 'MassiveGeneration',
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
    query: z.object({
      quantity: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .openapi({
          param: {
            description: 'Quantity of coupons to generate',
            explode: true,
            in: 'query',
            name: 'quantity',
            required: true,
            schema: { example: 10, type: 'integer' },
            style: 'form',
          },
          example: 10,
        }),
    }),
    body: {
      description: '',
      content: {
        'application/json': {
          schema: z
            .object({
              couponCode: z.string().openapi({ description: 'Coupon code.', example: 'ctest' }),
              expirationIntervalPerUse: z
                .string()
                .openapi({
                  description: 'Coupon expiration interval per use.',
                  example: '00:00:00',
                }),
              maxItemsPerClient: z
                .int()
                .openapi({
                  description: 'Defines if the coupon is archived (`true`) or not (`false`).',
                  example: 1,
                }),
              utmCampaign: z
                .string()
                .openapi({ description: 'UTM campaign code.', example: 'cupom3' }),
              utmSource: z.string().openapi({ description: 'UTM source code.', example: 'cupom3' }),
            })
            .openapi({
              required: [
                'utmSource',
                'utmCampaign',
                'couponCode',
                'maxItemsPerClient',
                'expirationIntervalPerUse',
              ],
              title: '',
            }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': {
          schema: z
            .array(z.string().openapi({ description: 'Coupon code.', title: 'couponCode' }))
            .openapi({ description: 'Array with the generated coupon codes.', title: '' }),
          example: [
            'ctest-7DLKU492HR4MANV',
            'ctest-QUM3U4HUGJ54301',
            'ctest-0KYBWQUKR3WXV4C',
            'ctest-971CX1N55WZSEBY',
            'ctest-9FCQ0UX80F6K4A7',
            'ctest-HWZEJ7D0D9MP3O7',
            'ctest-7PI34QVEERM8A70',
            'ctest-RT47PC2A116O9QO',
            'ctest-F4T3IQBAGQWRVW7',
            'ctest-8C3MS3U594EPQB8',
          ],
        },
      },
    },
  },
})

export const postApiRnbPvtImportCalculatorConfigurationRoute = createRoute({
  method: 'post',
  path: '/api/rnb/pvt/import/calculatorConfiguration',
  tags: ['Promotions and Taxes'],
  summary: 'Create Multiple SKU Promotion',
  description:
    'Creates a Multiple SKU Promotion. This scenario allows to create a single promotion for multiples SKUs with the Percentage Effect. \r\n> ⚠️ \r\n>\r\n> The limit of SKUs on a Multiple Effects promotion is 400.',
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
            schema: { example: 'text/csv', type: 'string' },
            style: 'simple',
          },
          example: 'text/csv',
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
      'X-VTEX-calculator-name': z
        .string()
        .openapi({
          param: {
            description: 'Promotion Name.',
            in: 'header',
            name: 'X-VTEX-calculator-name',
            required: true,
            schema: { example: 'Test', type: 'string' },
            style: 'simple',
          },
          example: 'Test',
        }),
      'X-VTEX-cumulative': z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            description: 'Defines if the Promotion is cumulative with other promotions.',
            in: 'header',
            name: 'X-VTEX-cumulative',
            required: false,
            schema: { example: false, type: 'boolean' },
            style: 'simple',
          },
          example: false,
        }),
      'X-VTEX-cluster-operator': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'This header allows implementing the Promotion in multiples client clusters. You can set the value as `all` - the Promotion will be valid to all the clusters - or `any` - the Promotion will be valid to any of the clusters.',
            in: 'header',
            name: 'X-VTEX-cluster-operator',
            required: false,
            schema: { example: 'any', type: 'string' },
            style: 'simple',
          },
          example: 'any',
        }),
      'X-VTEX-cluster-expression': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Cluster that will be included in the Promotion. To add multiple clusters, create a header for each one of them.',
            in: 'header',
            name: 'X-VTEX-cluster-expression',
            required: false,
            schema: { example: 'cluster_name=true', type: 'string' },
            style: 'simple',
          },
          example: 'cluster_name=true',
        }),
      'X-VTEX-start-date': z
        .string()
        .openapi({
          param: {
            description: 'Promotion start date.',
            in: 'header',
            name: 'X-VTEX-start-date',
            required: true,
            schema: { example: '2020-08-18T16:00:00+3:00', type: 'string' },
            style: 'simple',
          },
          example: '2020-08-18T16:00:00+3:00',
        }),
      'X-VTEX-end-date': z
        .string()
        .openapi({
          param: {
            description: 'Promotion end date.',
            in: 'header',
            name: 'X-VTEX-end-date',
            required: true,
            schema: { example: '2020-08-18T16:30:00+3:00', type: 'string' },
            style: 'simple',
          },
          example: '2020-08-18T16:30:00+3:00',
        }),
      'X-VTEX-accumulate-with-manual-prices': z
        .stringbool()
        .openapi({
          param: {
            description: 'Condition that will accumulate the Promotion with manual prices or not.',
            in: 'header',
            name: 'X-VTEX-accumulate-with-manual-prices',
            required: true,
            schema: { example: false, type: 'boolean' },
            style: 'simple',
          },
          example: false,
        }),
    }),
    body: {
      content: {
        'text/csv': {
          schema: z
            .file()
            .openapi({
              type: 'string',
              format: 'binary',
              description:
                'The file must contain the SKU ID and the percentage of the discount. The first line must have the headers `sku` and `effect`. The next lines must be the SKU ID and the percentage, without any spaces. For decimal values, use `.` as in `10.5`. This should be sent as a raw text on the request body.',
              example: 'sku,effect\r\n1,10.5',
            }),
        },
      },
    },
  },
  responses: { 200: { description: 'OK' } },
})

export const putApiRnbPvtImportCalculatorConfigurationPromotionIdRoute = createRoute({
  method: 'put',
  path: '/api/rnb/pvt/import/calculatorConfiguration/{promotionId}',
  tags: ['Promotions and Taxes'],
  summary: 'Update Multiple SKU Promotion',
  description:
    'Updates information from a Multiple SKU Promotion. This scenario allows to create a single promotion for multiples SKUs with the Percentage Effect.  \r\n> ⚠️ \r\n>\r\n> The limit of SKUs on a Multiple Effects promotion is 400.',
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
            schema: { example: 'text/csv', type: 'string' },
            style: 'simple',
          },
          example: 'text/csv',
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
      'X-VTEX-calculator-name': z
        .string()
        .openapi({
          param: {
            description: 'Promotion Name.',
            in: 'header',
            name: 'X-VTEX-calculator-name',
            required: true,
            schema: { example: 'Test', type: 'string' },
            style: 'simple',
          },
          example: 'Test',
        }),
      'X-VTEX-cumulative': z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            description: 'Defines if the Promotion is cumulative with other promotions.',
            in: 'header',
            name: 'X-VTEX-cumulative',
            required: false,
            schema: { example: false, type: 'boolean' },
            style: 'simple',
          },
          example: false,
        }),
      'X-VTEX-cluster-operator': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'This header allows implementing the Promotion in multiples client clusters. You can set the value as `all` - the Promotion will be valid to all the clusters - or `any` - the Promotion will be valid to any of the clusters.',
            in: 'header',
            name: 'X-VTEX-cluster-operator',
            required: false,
            schema: { example: 'any', type: 'string' },
            style: 'simple',
          },
          example: 'any',
        }),
      'X-VTEX-cluster-expression': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Cluster that will be included in the Promotion. To add multiple clusters, create a header for each one of them.',
            in: 'header',
            name: 'X-VTEX-cluster-expression',
            required: false,
            schema: { example: 'cluster_name=true', type: 'string' },
            style: 'simple',
          },
          example: 'cluster_name=true',
        }),
      'X-VTEX-start-date': z
        .string()
        .openapi({
          param: {
            description: 'Promotion start date.',
            in: 'header',
            name: 'X-VTEX-start-date',
            required: true,
            schema: { example: '2020-08-18T16:00:00+3:00', type: 'string' },
            style: 'simple',
          },
          example: '2020-08-18T16:00:00+3:00',
        }),
      'X-VTEX-end-date': z
        .string()
        .openapi({
          param: {
            description: 'Promotion end date.',
            in: 'header',
            name: 'X-VTEX-end-date',
            required: true,
            schema: { example: '2020-08-18T16:30:00+3:00', type: 'string' },
            style: 'simple',
          },
          example: '2020-08-18T16:30:00+3:00',
        }),
      'X-VTEX-accumulate-with-manual-prices': z
        .stringbool()
        .openapi({
          param: {
            description: 'Condition that will accumulate the Promotion with manual prices or not.',
            in: 'header',
            name: 'X-VTEX-accumulate-with-manual-prices',
            required: true,
            schema: { example: false, type: 'boolean' },
            style: 'simple',
          },
          example: false,
        }),
    }),
    params: z.object({
      promotionId: z
        .string()
        .openapi({
          param: {
            description: 'Promotion unique identifier.',
            in: 'path',
            name: 'promotionId',
            required: true,
            schema: { example: 'dc6b6f59-ec2b-4a13-8490-0d1e0c53ddf9', type: 'string' },
          },
          example: 'dc6b6f59-ec2b-4a13-8490-0d1e0c53ddf9',
        }),
    }),
    body: {
      content: {
        'text/csv': {
          schema: z
            .file()
            .openapi({
              type: 'string',
              format: 'binary',
              description:
                'The file must contain the SKU ID and the percentage of the discount. The first line must have the headers `sku` and `effect`. The next lines must be the SKU ID and the percentage, without any spaces. For decimal values, use `.` as in `10.5`. This should be sent as a raw text on the request body.',
              example: 'sku,effect\r\n1,10.5',
            }),
        },
      },
    },
  },
  responses: { 202: { description: 'Accepted' } },
})

export const postApiRnbPvtMultipleCouponsRoute = createRoute({
  method: 'post',
  path: '/api/rnb/pvt/multiple-coupons',
  tags: ['Coupons'],
  summary: 'Create multiple coupons',
  description:
    'Creates multiple coupons with different coupon codes. This endpoint has a throttling of 60 requests per minute.',
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
      content: {
        'application/json': {
          schema: z
            .array(
              z
                .object({
                  couponConfiguration: z
                    .object({
                      couponCode: z
                        .string()
                        .openapi({
                          description: 'Coupon code.',
                          example: 'test',
                          title: 'couponCode',
                        }),
                      expirationIntervalPerUse: z
                        .string()
                        .openapi({
                          description: 'Coupon expiration interval per use.',
                          example: '00:00:00',
                          title: 'expirationIntervalPerUse',
                        }),
                      isArchived: z
                        .boolean()
                        .exactOptional()
                        .openapi({
                          description:
                            'Defines if the coupon is archived (`true`) or not (`false`).',
                          example: false,
                          title: 'isArchived',
                        }),
                      maxItemsPerClient: z
                        .int()
                        .openapi({
                          description: 'Maximum items per client that the coupon can be applied.',
                          example: 10,
                          title: 'maxItemsPerClient',
                        }),
                      utmCampaign: z
                        .string()
                        .openapi({
                          description: 'utmCampaign code.',
                          example: '',
                          title: 'utmCampaign',
                        }),
                      utmSource: z
                        .string()
                        .openapi({
                          description: 'utmSource code.',
                          example: 'coupon3',
                          title: 'utmSource',
                        }),
                    })
                    .openapi({
                      description: 'Object that contains all coupon configuration.',
                      example: {
                        couponCode: 'test',
                        expirationIntervalPerUse: '00:00:00',
                        maxItemsPerClient: 10,
                        utmCampaign: '',
                        utmSource: 'coupon3',
                      },
                      required: [
                        'utmSource',
                        'utmCampaign',
                        'couponCode',
                        'maxItemsPerClient',
                        'expirationIntervalPerUse',
                      ],
                      title: 'couponConfiguration',
                    }),
                  quantity: z
                    .int()
                    .openapi({
                      description:
                        'Quantity of coupons created. The value must be a minimum of `1` and at maximum `1000`. If the amount is `1`, the coupon code will be the value of the `couponCode` parameter. If the value is greater than `1`, the coupon code will receive a random suffix.',
                      example: 1,
                      title: 'quantity',
                    }),
                })
                .openapi({ required: ['quantity', 'couponConfiguration'] }),
            )
            .openapi({ title: '' }),
          example: [
            {
              couponConfiguration: {
                couponCode: 'promobf4',
                expirationIntervalPerUse: '00:00:00',
                isArchived: false,
                maxItemsPerClient: 10,
                utmCampaign: 'bf',
                utmSource: 'fb',
              },
              quantity: 1,
            },
          ],
        },
      },
    },
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': {
          schema: z
            .array(
              z
                .string()
                .openapi({ description: 'Coupon code.', example: 'promobf', title: 'items' }),
            )
            .openapi({ description: 'Array with the coupon codes that were created.' }),
          example: ['promobf'],
        },
      },
    },
  },
})

export const getApiRnbPvtTaxesCalculatorconfigurationRoute = createRoute({
  method: 'get',
  path: '/api/rnb/pvt/taxes/calculatorconfiguration',
  tags: ['Promotions and Taxes'],
  summary: 'Get All Taxes',
  description: 'Retrieves all taxes from an account.',
  operationId: 'GetAllTaxes',
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
    200: {
      description: 'OK',
      content: {
        'application/json': {
          schema: z
            .object({
              archivedItems: z
                .array(z.string().openapi({ description: 'Archived item.' }))
                .exactOptional()
                .openapi({ description: 'Archived items.' }),
              disabledItems: z
                .array(z.string().openapi({ description: 'Disabled item.' }))
                .exactOptional()
                .openapi({ description: 'Disabled items.' }),
              items: GetTaxesSchema.exactOptional(),
              limitConfiguration: z
                .object({
                  activesCount: z.int().exactOptional().openapi({ description: 'Actives count.' }),
                  limit: z.int().exactOptional().openapi({ description: 'Limit.' }),
                })
                .exactOptional()
                .openapi({ description: 'Limit configuration.', required: [] }),
            })
            .openapi({ title: '', required: [] }),
          example: {
            archivedItems: [],
            disabledItems: [],
            items: [
              {
                Campaigns: [],
                activateGiftsMultiplier: false,
                areSalesChannelIdsExclusive: false,
                beginDate: '2022-05-09T03:00:00Z',
                description: 'Tax applied by the government',
                endDate: '2022-06-01T02:30:00Z',
                hasMaxPricePerItem: false,
                idCalculatorConfiguration: '90f4affc-fea0-424c-a7a7-c69aec7bbdc8',
                idsSalesChannel: ['1'],
                isActive: true,
                isArchived: false,
                isTax: true,
                lastModifiedUtc: '2022-05-10T02:42:52.4493897Z',
                maxUsage: 0,
                name: 'Government Tax',
                percentualTax: 10,
                scope: {
                  allCatalog: false,
                  brands: 1,
                  brandsAreInclusive: true,
                  categories: 1,
                  categoriesAreInclusive: true,
                  collections: 1,
                  collectionsAreInclusive: true,
                  products: 1,
                  productsAreInclusive: true,
                  sellers: 0,
                  sellersAreInclusive: false,
                  skus: 1,
                  skusAreInclusive: true,
                },
                status: 'active',
                type: 'tax',
                utmCampain: '',
                utmSource: '',
                utmiCampaign: '',
              },
            ],
            limitConfiguration: { activesCount: 1, limit: 100 },
          },
        },
      },
    },
  },
})

export const postApiRnbPvtUnarchiveCalculatorConfigurationIdCalculatorConfigurationRoute =
  createRoute({
    method: 'post',
    path: '/api/rnb/pvt/unarchive/calculatorConfiguration/{idCalculatorConfiguration}',
    tags: ['Promotions and Taxes'],
    summary: 'Unarchive Promotion or Tax',
    description: 'Unarchives a Promotion or Tax by its ID.',
    operationId: 'UnarchivePromotion',
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
        idCalculatorConfiguration: z
          .string()
          .openapi({
            param: {
              description: 'Promotion ID or tax ID.',
              in: 'path',
              name: 'idCalculatorConfiguration',
              required: true,
              schema: { example: 'd8a1cd2e-b667-4054-b3ae-b79124c7218e', type: 'string' },
              style: 'simple',
            },
            example: 'd8a1cd2e-b667-4054-b3ae-b79124c7218e',
          }),
      }),
    },
    responses: { 204: { description: 'No Content' } },
  })

export const postApiRnbPvtUnarchiveCouponCouponCodeRoute = createRoute({
  method: 'post',
  path: '/api/rnb/pvt/unarchive/coupon/{couponCode}',
  tags: ['Coupons'],
  summary: 'Unarchive coupon by coupon code',
  description: 'Unarchives a specifc coupon by its coupon code.',
  operationId: 'Unarchivebycouponcode',
  request: {
    headers: z.object({
      'Content-Type': z
        .string()
        .default('application/json')
        .openapi({
          param: {
            description: 'Describes the type of the content being sent.',
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
      couponCode: z
        .string()
        .openapi({
          param: {
            description: 'Coupon Code',
            in: 'path',
            name: 'couponCode',
            required: true,
            schema: { example: 'test', type: 'string' },
            style: 'simple',
          },
          example: 'test',
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': {
          schema: z.string().openapi({ description: 'Coupon code.', title: 'couponCode' }),
          example: 'test',
        },
      },
    },
  },
})

export const postPriceSheetRoute = createRoute({
  method: 'post',
  path: '/price-sheet',
  tags: ['Prices (Legacy - v1)'],
  summary: 'Save Price',
  description:
    'Save price. \n> If your account is using Pricing v2, you should avoid using these routes. Please refer directly to the [Pricing v2 API](https://documenter.getpostman.com/view/101975/vtex-pricing-api/6YsWxKT) \n\n> If you are still using Pricing v1, please [check if your store is able to migrate to take advantage of many more features](https://help.vtex.com/en/faq/how-to-migrate-a-store-to-pricing-v2)',
  operationId: 'Saveprice',
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
    query: z.object({
      an: z
        .string()
        .openapi({
          param: {
            description: '',
            explode: true,
            in: 'query',
            name: 'an',
            required: true,
            schema: { example: '{{accountName}}', type: 'string' },
            style: 'form',
          },
          example: '{{accountName}}',
        }),
    }),
    body: {
      description: '',
      content: {
        'application/json': {
          schema: z.array(SavepriceRequestSchema).openapi({ description: '' }),
          example: [
            {
              itemId: 2390148,
              listPrice: 1,
              price: 1,
              salesChannel: 1,
              sellerId: 1,
              validFrom: '2016-01-01T02:00:00Z',
              validTo: '2017-01-01T02:00:00Z',
            },
          ],
        },
      },
      required: true,
    },
  },
  responses: { 200: { description: 'OK' } },
  servers: [
    {
      url: 'https://rnb.{environment}.com.br/api/pricing/pvt',
      variables: { environment: { default: 'vtexcommercestable' } },
    },
  ],
})

export const getPriceSheetAllPagePageSizeRoute = createRoute({
  method: 'get',
  path: '/price-sheet/all/{page}/{pageSize}',
  tags: ['Prices (Legacy - v1)'],
  summary: 'Get all paged prices',
  description:
    'Get all paged prices. \n> If your account is using Pricing v2, you should avoid using these routes. Please refer directly to the [Pricing v2 API](https://documenter.getpostman.com/view/101975/vtex-pricing-api/6YsWxKT) \n\n> If you are still using Pricing v1, please [check if your store is able to migrate to take advantage of many more features](https://help.vtex.com/en/faq/how-to-migrate-a-store-to-pricing-v2)',
  operationId: 'Getallpaged',
  request: {
    headers: z.object({
      'Content-Type': z
        .string()
        .default('application/json')
        .openapi({
          param: {
            description: 'Describes the type of the content being sent.',
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
    query: z.object({
      an: z
        .string()
        .openapi({
          param: {
            description: '',
            explode: true,
            in: 'query',
            name: 'an',
            required: true,
            schema: { example: '{{accountName}}', type: 'string' },
            style: 'form',
          },
          example: '{{accountName}}',
        }),
    }),
    params: z.object({
      page: z
        .string()
        .openapi({
          param: {
            description: '',
            in: 'path',
            name: 'page',
            required: true,
            schema: { type: 'string' },
            style: 'simple',
          },
        }),
      pageSize: z
        .string()
        .openapi({
          param: {
            description: '',
            in: 'path',
            name: 'pageSize',
            required: true,
            schema: { type: 'string' },
            style: 'simple',
          },
        }),
    }),
  },
  responses: { 200: { description: 'OK' } },
  servers: [
    {
      url: 'https://rnb.{environment}.com.br/api/pricing/pvt',
      variables: { environment: { default: 'vtexcommercestable' } },
    },
  ],
})

export const postPriceSheetContextRoute = createRoute({
  method: 'post',
  path: '/price-sheet/context',
  tags: ['Prices (Legacy - v1)'],
  summary: 'Get Price by context',
  description:
    'Get price by context. \n> If your account is using Pricing v2, you should avoid using these routes. Please refer directly to the [Pricing v2 API](https://documenter.getpostman.com/view/101975/vtex-pricing-api/6YsWxKT) \n\n> If you are still using Pricing v1, please [check if your store is able to migrate to take advantage of many more features](https://help.vtex.com/en/faq/how-to-migrate-a-store-to-pricing-v2)',
  operationId: 'Pricebycontext',
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
    query: z.object({
      an: z
        .string()
        .openapi({
          param: {
            description: '',
            explode: true,
            in: 'query',
            name: 'an',
            required: true,
            schema: { example: '{{accountName}}', type: 'string' },
            style: 'form',
          },
          example: '{{accountName}}',
        }),
    }),
    body: {
      description: '',
      content: {
        'application/json': {
          schema: PricebycontextRequestSchema,
          example: {
            id: 6324,
            itemId: 2390148,
            salesChannel: 1,
            sellerId: '1',
            validFrom: '1900-01-01T00:00:00',
            validTo: '4000-01-01T00:00:00',
          },
        },
      },
      required: true,
    },
  },
  responses: { 200: { description: 'OK' } },
  servers: [
    {
      url: 'https://rnb.{environment}.com.br/api/pricing/pvt',
      variables: { environment: { default: 'vtexcommercestable' } },
    },
  ],
})

export const getPriceSheetSkuIdRoute = createRoute({
  method: 'get',
  path: '/price-sheet/{skuId}',
  tags: ['Prices (Legacy - v1)'],
  summary: 'Get Price by SKU ID',
  description:
    'Price by SKU ID              \n> If your account is using Pricing v2, you should avoid using these routes. Please refer directly to the [Pricing v2 API](https://developers.vtex.com/docs/api-reference/pricing-api)',
  operationId: 'PricebyskuId',
  request: {
    headers: z.object({
      'Content-Type': z
        .string()
        .default('application/json')
        .openapi({
          param: {
            description: 'Describes the type of the content being sent.',
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
    query: z.object({
      an: z
        .string()
        .openapi({
          param: {
            description: '',
            explode: true,
            in: 'query',
            name: 'an',
            required: true,
            schema: { example: '{{accountName}}', type: 'string' },
            style: 'form',
          },
          example: '{{accountName}}',
        }),
    }),
    params: z.object({
      skuId: z
        .string()
        .openapi({
          param: {
            description: '',
            in: 'path',
            name: 'skuId',
            required: true,
            schema: { type: 'string' },
            style: 'simple',
          },
        }),
    }),
  },
  responses: { 200: { description: 'OK' } },
  servers: [
    {
      url: 'https://rnb.{environment}.com.br/api/pricing/pvt',
      variables: { environment: { default: 'vtexcommercestable' } },
    },
  ],
})

export const deletePriceSheetSkuIdRoute = createRoute({
  method: 'delete',
  path: '/price-sheet/{skuId}',
  tags: ['Prices (Legacy - v1)'],
  summary: 'Delete Price by SKU Id',
  description:
    'Delete all prices from an SKU. \n> If your account is using Pricing v2, you should avoid using these routes. Please refer directly to the [Pricing v2 API](https://documenter.getpostman.com/view/101975/vtex-pricing-api/6YsWxKT) \n\n> If you are still using Pricing v1, please [check if your store is able to migrate to take advantage of many more features](https://help.vtex.com/en/faq/how-to-migrate-a-store-to-pricing-v2)',
  operationId: 'DeletebyskuId',
  request: {
    headers: z.object({
      'Content-Type': z
        .string()
        .default('application/json')
        .openapi({
          param: {
            description: 'Describes the type of the content being sent.',
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
    query: z.object({
      an: z
        .string()
        .openapi({
          param: {
            description: '',
            explode: true,
            in: 'query',
            name: 'an',
            required: true,
            schema: { example: '{{accountName}}', type: 'string' },
            style: 'form',
          },
          example: '{{accountName}}',
        }),
    }),
    params: z.object({
      skuId: z
        .string()
        .openapi({
          param: {
            description: '',
            in: 'path',
            name: 'skuId',
            required: true,
            schema: { type: 'string' },
            style: 'simple',
          },
        }),
    }),
  },
  responses: { 200: { description: 'OK' } },
  servers: [
    {
      url: 'https://rnb.{environment}.com.br/api/pricing/pvt',
      variables: { environment: { default: 'exampleParameterValue' } },
    },
  ],
})

export const getPriceSheetSkuIdTradePolicyRoute = createRoute({
  method: 'get',
  path: '/price-sheet/{skuId}/{tradePolicy}',
  tags: ['Prices (Legacy - v1)'],
  summary: 'Get Price by SKU ID and Trade Policy',
  description:
    'Retrieve price by SKU ID and Trade Policy. \n> If your account is using Pricing v2, you should avoid using these routes. Please refer directly to the [Pricing v2 API](https://documenter.getpostman.com/view/101975/vtex-pricing-api/6YsWxKT) \n\n> If you are still using Pricing v1, please [check if your store is able to migrate to take advantage of many more features](https://help.vtex.com/en/faq/how-to-migrate-a-store-to-pricing-v2)',
  operationId: 'PricebyskuIdandtradePolicy',
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
            description: 'Describes the type of the content being sent.',
            in: 'header',
            name: 'Content-Type',
            required: true,
            schema: { default: 'application/json', type: 'string' },
            style: 'simple',
          },
        }),
    }),
    query: z.object({
      an: z
        .string()
        .openapi({
          param: {
            description: '',
            explode: true,
            in: 'query',
            name: 'an',
            required: true,
            schema: { example: '{{accountName}}', type: 'string' },
            style: 'form',
          },
          example: '{{accountName}}',
        }),
    }),
    params: z.object({
      skuId: z
        .string()
        .openapi({
          param: {
            description: '',
            in: 'path',
            name: 'skuId',
            required: true,
            schema: { type: 'string' },
            style: 'simple',
          },
        }),
      tradePolicy: z
        .string()
        .openapi({
          param: {
            description: '',
            in: 'path',
            name: 'tradePolicy',
            required: true,
            schema: { type: 'string' },
            style: 'simple',
          },
        }),
    }),
  },
  responses: { 200: { description: 'OK' } },
  servers: [
    {
      url: 'https://rnb.{environment}.com.br/api/pricing/pvt',
      variables: { environment: { default: 'vtexcommercestable' } },
    },
  ],
})

export const postPubBundlesRoute = createRoute({
  method: 'post',
  path: '/pub/bundles',
  tags: ['Bundles'],
  summary: 'Calculate discounts and taxes (Bundles)',
  description: 'Calculate discounts and taxes',
  operationId: 'Calculatediscountsandtaxes(Bundles)',
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
      description: '',
      content: {
        'application/json': {
          schema: CalculatediscountsandtaxesBundlesRequestSchema,
          example: {
            isShoppingCart: true,
            items: [
              {
                id: '160',
                index: 0,
                isGift: false,
                logisticsInfos: [],
                measurementUnit: 'un',
                params: [
                  { name: 'Seller@CatalogSystem', value: '1' },
                  { name: 'product@CatalogSystem', value: '94' },
                ],
                priceSheet: [],
                priceTags: [],
                productSpecifications: [],
                quantity: 3,
                sellerId: '1',
                unitMultiplier: 1,
              },
            ],
            origin: 'Marketplace',
            params: [
              { name: 'product@CatalogSystem', value: '2662' },
              { name: 'couponCode@Marketing', value: 'coupon' },
            ],
            profileId: 'aa',
            salesChannel: '1',
          },
        },
      },
      required: true,
    },
  },
  responses: { 200: { description: 'OK' } },
  servers: [
    {
      url: 'http://example.com/.{environment}.com.br/api/rnb',
      variables: { environment: { default: 'vtexcommercestable' } },
    },
  ],
})
