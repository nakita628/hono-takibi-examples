import { createRoute, z } from '@hono/zod-openapi'

const DateRangeSchema = z
  .object({
    from: z
      .string()
      .openapi({
        description: 'Indicates the date and time when the fixed price will start to be valid.',
      }),
    to: z
      .string()
      .openapi({
        description:
          'Indicates the date and time from which the fixed price will no longer be valid.',
      }),
  })
  .openapi({
    description: 'Trade Policy Fixed Price Validity Period Object.',
    example: { from: '2017-12-07T14:30:00Z', to: '2017-12-30T14:30:00Z' },
    required: ['from', 'to'],
    title: 'dateRange',
  })
  .openapi('DateRange')

const FixedPriceSchema = z
  .object({
    dateRange: DateRangeSchema.exactOptional(),
    listPrice: z.number().nullable().openapi({ description: 'Trade Policy List Price Value.' }),
    minQuantity: z
      .int32()
      .openapi({ description: 'Trade Policy Fixed Price Minimum Item Quantity.' }),
    tradePolicyId: z.string().openapi({ description: 'Trade Policy ID.' }),
    value: z.number().openapi({ description: 'Trade Policy Fixed Price Value.' }),
  })
  .openapi({
    example: {
      dateRange: { from: '2017-12-07T14:30:00Z', to: '2017-12-30T14:30:00Z' },
      listPrice: null,
      minQuantity: 1,
      tradePolicyId: '9',
      value: 300,
    },
    required: ['tradePolicyId', 'value', 'listPrice', 'minQuantity'],
    title: 'FixedPrice',
  })
  .openapi('FixedPrice')

const GetcomputedpriceSchema = z
  .object({
    costPrice: z.number().exactOptional().openapi({ description: 'Cost price.' }),
    listPrice: z
      .int32()
      .openapi({ description: 'Trade Policy List Price, also known as "from" price.' }),
    priceValidUntil: z
      .string()
      .openapi({
        description:
          'Date until when the computed price will be valid, due to price scheduling. If no price scheduling applies, this will be set a year from the current time.',
      }),
    sellingPrice: z
      .number()
      .openapi({
        description:
          'Computed Price before applying coupons, promotions and taxes. This price may change before reaching the shelf.',
      }),
    tradePolicyId: z.string().openapi({ description: 'Trade Policy ID.' }),
  })
  .openapi({
    example: {
      costPrice: 76.92,
      listPrice: 30,
      priceValidUntil: '2018-12-20T18:12:14Z',
      sellingPrice: 18.9,
      tradePolicyId: '1',
    },
    required: ['tradePolicyId', 'listPrice', 'sellingPrice', 'priceValidUntil'],
    title: 'Get Computed Price response',
  })
  .openapi('Getcomputedprice')

const GetpriceSchema = z
  .object({
    basePrice: z.int32().openapi({ description: "SKU's reference price." }),
    costPrice: z.int32().openapi({ description: "SKU's cost price." }),
    fixedPrices: z
      .array(FixedPriceSchema)
      .openapi({
        description:
          'The fixed price is a price that overlaps all other existing price configurations of a price table.',
      }),
    itemId: z.string().openapi({ description: 'SKU ID.' }),
    listPrice: z.int32().openapi({ description: 'Suggested retail price for the SKU.' }),
    markup: z.int32().openapi({ description: "Desired profit margin with the SKU's sale." }),
  })
  .openapi({
    example: {
      basePrice: 250,
      costPrice: 10,
      fixedPrices: [
        { listPrice: null, minQuantity: 1, tradePolicyId: '1', value: 666.66 },
        { listPrice: null, minQuantity: 1, tradePolicyId: '9', value: 4500 },
        {
          dateRange: { from: '2017-12-07T14:30:00Z', to: '2017-12-30T14:30:00Z' },
          listPrice: null,
          minQuantity: 1,
          tradePolicyId: '9',
          value: 600,
        },
        {
          dateRange: { from: '2017-12-20T14:30:00Z', to: '2017-12-22T14:30:00Z' },
          listPrice: null,
          minQuantity: 1,
          tradePolicyId: '9',
          value: 5555.55,
        },
        {
          dateRange: { from: '2017-12-06T15:00:00Z', to: '2017-12-14T15:00:00Z' },
          listPrice: null,
          minQuantity: 1,
          tradePolicyId: '9',
          value: 555.55,
        },
        { listPrice: null, minQuantity: 1, tradePolicyId: '10', value: 5555.55 },
        { listPrice: null, minQuantity: 1, tradePolicyId: '18', value: 555.55 },
      ],
      itemId: '1234512354',
      listPrice: 300,
      markup: 2400,
    },
    required: ['itemId', 'listPrice', 'costPrice', 'markup', 'basePrice', 'fixedPrices'],
    title: 'Get Price response',
  })
  .openapi('Getprice')

const PricingConfigurationSchema = z
  .object({
    blockAccount: z
      .boolean()
      .exactOptional()
      .openapi({
        description: 'Defines if access to the Pricing APIs is blocked for external requests.',
        example: false,
      }),
    blockedRoutes: z
      .array(z.string().openapi({ description: 'Blocked route.' }))
      .nullable()
      .exactOptional()
      .openapi({ description: 'Array with all blocked routes.' }),
    defaultMarkup: z.int32().openapi({ description: 'Account default markup.', example: 2 }),
    hasMigrated: z
      .boolean()
      .openapi({
        description: 'Defines if the account has migrated to Pricing V2.',
        example: true,
      }),
    hasOptionalBasePrice: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Defines if optional base price is allowed.', example: false }),
    hasPriceInheritance: z
      .boolean()
      .exactOptional()
      .openapi({
        deprecated: true,
        description: 'Deprecated. Use the `priceInheritance` field instead.',
      }),
    migrationStatus: z
      .string()
      .exactOptional()
      .openapi({ description: 'Pricing V2 migration status.', example: 'Completed' }),
    minimumMarkups: z
      .record(z.string(), z.int32())
      .openapi({ description: 'Account minimum markup.' }),
    priceInheritance: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Condition of price inheritance from its parent account. This field can have three possible values: `never` if the store should never inherit prices, `nonexistent` if the store should only inherit prices in case of nonexistent prices for a given product, or `always` if the store should always inherit prices, regardless of its own prices.',
        example: 'nonexistent',
      }),
    priceTableLimit: z
      .int()
      .nullable()
      .exactOptional()
      .openapi({ description: 'Price Table Limit.', example: 100 }),
    priceTableSelectionStrategy: z
      .string()
      .default('first')
      .exactOptional()
      .openapi({
        description:
          'The strategy used to get prices when there is more than one option. Possible values: `first`, `highest`, `lowest`. Default: `first`.',
        example: 'highest',
      }),
    priceVariation: z
      .object({
        lowerLimit: z
          .int()
          .nullable()
          .exactOptional()
          .openapi({ description: 'Lower variation limit.', example: 1 }),
        upperLimit: z
          .int()
          .nullable()
          .exactOptional()
          .openapi({ description: 'Upper variation limit.', example: 10 }),
      })
      .exactOptional()
      .openapi({ description: 'Price Variation object.', required: [] }),
    sellersToOverride: z
      .array(z.any())
      .exactOptional()
      .openapi({ description: 'Overrides prices from sellers.' }),
    tradePolicyConfigs: z
      .array(
        z
          .object({
            minimumMarkup: z
              .int()
              .exactOptional()
              .openapi({ description: 'Trade Policy Minimum Markup.', example: 80 }),
            rulesShouldAffectListPrice: z
              .boolean()
              .exactOptional()
              .openapi({
                description: 'Defines if the Price Rule should affect the list price too.',
                example: false,
              }),
            tradePolicyId: z
              .string()
              .exactOptional()
              .openapi({ description: 'Trade Policy ID.', example: 'b2c' }),
          })
          .openapi({ required: [] }),
      )
      .exactOptional()
      .openapi({ description: 'Trade Policy Configurations array.' }),
  })
  .openapi({
    example: {
      blockAccount: false,
      blockedRoutes: null,
      defaultMarkup: 100,
      hasMigrated: true,
      hasOptionalBasePrice: false,
      hasPriceInheritance: false,
      migrationStatus: 'Completed',
      minimumMarkups: { '1': 100, '2': 90 },
      priceInheritance: 'never',
      priceTableLimit: null,
      priceTableSelectionStrategy: 'first',
      priceVariation: { lowerLimit: null, upperLimit: null },
      sellersToOverride: [],
      tradePolicyConfigs: [],
    },
    required: ['hasMigrated', 'defaultMarkup', 'minimumMarkups'],
    title: 'Pricing Configuration response',
  })
  .openapi('PricingConfiguration')

const AppKeySecurityScheme = { in: 'header', name: 'X-VTEX-API-AppKey', type: 'apiKey' }

const AppTokenSecurityScheme = { in: 'header', name: 'X-VTEX-API-AppToken', type: 'apiKey' }

export const getPricingConfigRoute = createRoute({
  method: 'get',
  path: '/pricing/config',
  tags: ['Pricing Configuration'],
  summary: 'Get Pricing Configuration',
  description:
    'Retrieves Pricing Configuration.\r\n## Response body example\r\n\r\n```json\r\n{\r\n    "hasMigrated": true,\r\n    "migrationStatus": "Completed",\r\n    "defaultMarkup": 100,\r\n    "priceVariation": {\r\n        "upperLimit": null,\r\n        "lowerLimit": null\r\n    },\r\n    "minimumMarkups": {\r\n        "1": 100,\r\n        "2": 90\r\n    },\r\n    "tradePolicyConfigs": [],\r\n    "sellersToOverride": [],\r\n    "hasPriceInheritance": false,\r\n    "priceInheritance": "never",\r\n    "hasOptionalBasePrice": false,\r\n    "blockAccount": false,\r\n    "blockedRoutes": null,\r\n    "priceTableSelectionStrategy": "first",\r\n    "priceTableLimit": null\r\n}\r\n```',
  operationId: 'GetPricingConfig',
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
        .openapi({
          param: {
            description:
              'HTTP Client Negotiation _Accept_ Header. Indicates the types of responses the client can understand.',
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
        'application/json; charset=utf-8': {
          schema: PricingConfigurationSchema,
          example: {
            blockAccount: false,
            blockedRoutes: null,
            defaultMarkup: 100,
            hasMigrated: true,
            hasOptionalBasePrice: false,
            hasPriceInheritance: false,
            migrationStatus: 'Completed',
            minimumMarkups: { '1': 100, '2': 90 },
            priceInheritance: 'never',
            priceTableLimit: null,
            priceTableSelectionStrategy: 'first',
            priceVariation: { lowerLimit: null, upperLimit: null },
            sellersToOverride: [],
            tradePolicyConfigs: [],
          },
        },
      },
      headers: z.object({
        'Access-Control-Allow-Credentials': z
          .string()
          .exactOptional()
          .openapi({ example: 'true', param: { required: false } }),
        'Access-Control-Allow-Origin': z
          .string()
          .exactOptional()
          .openapi({ example: '*', param: { required: false } }),
        Connection: z
          .string()
          .exactOptional()
          .openapi({ example: 'keep-alive', param: { required: false } }),
        'Content-Encoding': z
          .string()
          .exactOptional()
          .openapi({ example: 'gzip', param: { required: false } }),
        'Content-Length': z
          .string()
          .exactOptional()
          .openapi({ example: '118', param: { required: false } }),
        Date: z
          .string()
          .exactOptional()
          .openapi({ example: 'Tue, 21 Feb 2017 16:11:39 GMT', param: { required: false } }),
        Server: z
          .string()
          .exactOptional()
          .openapi({ example: 'nginx', param: { required: false } }),
        'X-CDNIgnore': z
          .string()
          .exactOptional()
          .openapi({ example: '1', param: { required: false } }),
        'X-Powered-by-VTEX-Janus-Edge': z
          .string()
          .exactOptional()
          .openapi({ example: 'v1.35.3', param: { required: false } }),
        'X-Track': z
          .string()
          .exactOptional()
          .openapi({ example: 'stable', param: { required: false } }),
        'X-VTEX-Janus-Router-Backend-App': z
          .string()
          .exactOptional()
          .openapi({ example: 'pricing-v3.21.12', param: { required: false } }),
      }),
    },
  },
  servers: [
    {
      url: 'https://api.vtex.com/{account}/pricing',
      variables: { account: { default: 'DefaultParameterValue' } },
    },
  ],
})

export const getPricingMigrationRoute = createRoute({
  method: 'get',
  path: '/pricing/migration',
  tags: ['Pricing Configuration'],
  summary: 'Get Pricing v2 Status',
  description:
    'Retrieves Pricing v2 Status. \r\n## Response body example\r\n\r\n```json\r\n{\r\n    "isActive": true,\r\n    "hasMigrated": true\r\n}\r\n```',
  operationId: 'GetPricingv2Status',
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
        .openapi({
          param: {
            description:
              'HTTP Client Negotiation _Accept_ Header. Indicates the types of responses the client can understand.',
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
        'application/json; charset=utf-8': {
          schema: z
            .object({
              hasMigrated: z
                .boolean()
                .exactOptional()
                .openapi({
                  description: 'Defines if the account has migrated to Pricing V2.',
                  example: true,
                }),
              isActive: z
                .boolean()
                .exactOptional()
                .openapi({ description: 'Defines if the account is active.', example: true }),
            })
            .openapi({ required: [] }),
          example: { hasMigrated: true, isActive: true },
        },
      },
      headers: z.object({
        'Access-Control-Allow-Credentials': z
          .string()
          .exactOptional()
          .openapi({ example: 'true', param: { required: false } }),
        'Access-Control-Allow-Origin': z
          .string()
          .exactOptional()
          .openapi({ example: '*', param: { required: false } }),
        Connection: z
          .string()
          .exactOptional()
          .openapi({ example: 'keep-alive', param: { required: false } }),
        'Content-Encoding': z
          .string()
          .exactOptional()
          .openapi({ example: 'gzip', param: { required: false } }),
        'Content-Length': z
          .string()
          .exactOptional()
          .openapi({ example: '52', param: { required: false } }),
        Date: z
          .string()
          .exactOptional()
          .openapi({ example: 'Tue, 21 Feb 2017 16:13:39 GMT', param: { required: false } }),
        Server: z
          .string()
          .exactOptional()
          .openapi({ example: 'nginx', param: { required: false } }),
        'X-CDNIgnore': z
          .string()
          .exactOptional()
          .openapi({ example: '1', param: { required: false } }),
        'X-Powered-by-VTEX-Janus-Edge': z
          .string()
          .exactOptional()
          .openapi({ example: 'v1.35.3', param: { required: false } }),
        'X-Track': z
          .string()
          .exactOptional()
          .openapi({ example: 'stable', param: { required: false } }),
        'X-VTEX-Janus-Router-Backend-App': z
          .string()
          .exactOptional()
          .openapi({ example: 'pricing-v3.21.12', param: { required: false } }),
      }),
    },
  },
  servers: [
    {
      url: 'https://api.vtex.com/{account}/pricing',
      variables: { account: { default: 'DefaultParameterValue' } },
    },
  ],
})

export const getPricingPipelineCatalogRoute = createRoute({
  method: 'get',
  path: '/pricing/pipeline/catalog',
  tags: ['Price Tables'],
  summary: 'Get all price tables and their rules',
  description:
    'This method will retrieve all price tables and their rules.\r\n\r\n## Response body example\r\n\r\n```json\r\n[\r\n    {\r\n        "tradePolicyId": "2",\r\n        "rules": [\r\n            {\r\n                "id": 0,\r\n                "context": {\r\n                    "categories": {},\r\n                    "brands": {},\r\n                    "stockStatuses": null,\r\n                    "internalCategories": null,\r\n                    "markupRange": null,\r\n                    "dateRange": null\r\n                },\r\n                "percentualModifier": 20\r\n            }\r\n        ]\r\n    },\r\n    {\r\n        "tradePolicyId": "b2c",\r\n        "rules": [\r\n            {\r\n                "id": 0,\r\n                "context": {\r\n                    "categories": {},\r\n                    "brands": {\r\n                        "2000009": "Whiskas"\r\n                    },\r\n                    "stockStatuses": null,\r\n                    "internalCategories": null,\r\n                    "markupRange": null,\r\n                    "dateRange": null\r\n                },\r\n                "percentualModifier": 15\r\n            }\r\n        ]\r\n    }\r\n]\r\n```',
  operationId: 'getallpricetablesandrules',
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
        .openapi({
          param: {
            description:
              'HTTP Client Negotiation _Accept_ Header. Indicates the types of responses the client can understand.',
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
        'application/json': {
          schema: z
            .array(
              z
                .object({
                  percentualModifier: z
                    .int()
                    .exactOptional()
                    .openapi({ description: 'Percentual modifier.' }),
                  rules: z
                    .array(
                      z
                        .object({
                          context: z
                            .object({
                              brands: z
                                .record(
                                  z.string(),
                                  z.string().openapi({ description: 'Brand ID.' }),
                                )
                                .exactOptional()
                                .openapi({
                                  description:
                                    'Brands that an item should have to be eligible for the rule. Format: key: `brandId`, value: `brandName`.',
                                }),
                              categories: z
                                .record(
                                  z.string(),
                                  z.string().openapi({ description: 'Category ID.' }),
                                )
                                .exactOptional()
                                .openapi({
                                  description:
                                    'Categories that an item should have to be eligible for the rule. Format: key: `categoryId`, value: `categoryName`.',
                                }),
                              dateRange: z
                                .object({
                                  from: z
                                    .string()
                                    .exactOptional()
                                    .openapi({
                                      description:
                                        'Date when rule will be activated. Date format: `RFC3339`.',
                                    }),
                                  to: z
                                    .string()
                                    .exactOptional()
                                    .openapi({
                                      description:
                                        'Date when the rule will be deactivated. Date format: `RFC3339`.',
                                    }),
                                })
                                .nullable()
                                .exactOptional()
                                .openapi({
                                  description: 'The rule will be active during this time range.',
                                  required: [],
                                }),
                              internalCategories: z
                                .looseObject({})
                                .nullable()
                                .exactOptional()
                                .openapi({ description: 'Internal Categories.' }),
                              markupRange: z
                                .object({
                                  from: z
                                    .int()
                                    .exactOptional()
                                    .openapi({
                                      description:
                                        'Item markup should be greater than or equal to this value.',
                                    }),
                                  to: z
                                    .int()
                                    .exactOptional()
                                    .openapi({
                                      description:
                                        'Item markup should be less than or equal to this value.',
                                    }),
                                })
                                .nullable()
                                .exactOptional()
                                .openapi({
                                  description:
                                    "For an item to be eligible to the rule, it's markup should be in this Markup Range.",
                                  required: [],
                                }),
                              stockStatuses: z
                                .looseObject({})
                                .nullable()
                                .exactOptional()
                                .openapi({ description: 'Stock statuses.' }),
                            })
                            .exactOptional()
                            .openapi({
                              description:
                                'Rule Context is a group of filters to be checked at an item level when applying the rule. If all those filters check out, the rule will be applied for that item, unless there is a fixed price for that item.',
                              required: [],
                            }),
                          id: z.number().exactOptional().openapi({ description: 'Rule ID.' }),
                        })
                        .openapi({
                          description: 'Object containing a price table rule.',
                          required: [],
                        }),
                    )
                    .exactOptional()
                    .openapi({ description: 'Array of rules for the price table.' }),
                  tradePolicyId: z
                    .string()
                    .exactOptional()
                    .openapi({ description: 'Trade Policy ID (Price Table ID).' }),
                })
                .openapi({ required: [] }),
            )
            .openapi({ title: '' }),
          example: [
            {
              rules: [
                {
                  context: {
                    brands: {},
                    categories: {},
                    dateRange: null,
                    internalCategories: null,
                    markupRange: null,
                    stockStatuses: null,
                  },
                  id: 0,
                  percentualModifier: 20,
                },
              ],
              tradePolicyId: '2',
            },
            {
              rules: [
                {
                  context: {
                    brands: { '2000009': 'Whiskas' },
                    categories: {},
                    dateRange: null,
                    internalCategories: null,
                    markupRange: null,
                    stockStatuses: null,
                  },
                  id: 0,
                  percentualModifier: 15,
                },
              ],
              tradePolicyId: 'b2c',
            },
          ],
        },
      },
    },
  },
  servers: [
    {
      url: 'https://api.vtex.com/{account}/pricing',
      variables: { account: { default: 'DefaultParameterValue' } },
    },
  ],
})

export const getPricingPipelineCatalogPriceTableIdRoute = createRoute({
  method: 'get',
  path: '/pricing/pipeline/catalog/{priceTableId}',
  tags: ['Price Tables'],
  summary: 'Get rules for a price table',
  description:
    'This method will retrieve the rules from a specific Price Table.\r\n\r\n## Response body example\r\n\r\n```json\r\n{\r\n    "tradePolicyId": "b2c",\r\n    "rules": [{\r\n        "id": 0,\r\n        "context": {\r\n            "categories": {},\r\n            "brands": {\r\n                "2000009": "Whiskas"\r\n            },\r\n            "stockStatuses": null,\r\n            "internalCategories": null,\r\n            "markupRange": null,\r\n            "dateRange": null\r\n        },\r\n        "percentualModifier": 15\r\n    }]\r\n}\r\n```',
  operationId: 'Getrulesforapricetable',
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
        .openapi({
          param: {
            description:
              'HTTP Client Negotiation _Accept_ Header. Indicates the types of responses the client can understand.',
            in: 'header',
            name: 'Accept',
            required: true,
            schema: { example: 'application/json', type: 'string' },
            style: 'simple',
          },
          example: 'application/json',
        }),
    }),
    params: z.object({
      priceTableId: z
        .string()
        .openapi({
          param: {
            description: 'Price Table Name.',
            in: 'path',
            name: 'priceTableId',
            required: true,
            schema: { example: 'b2c', type: 'string' },
            style: 'simple',
          },
          example: 'b2c',
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
              percentualModifier: z
                .int()
                .exactOptional()
                .openapi({ description: 'Percentual modifier.' }),
              rules: z
                .array(
                  z
                    .object({
                      context: z
                        .object({
                          brands: z
                            .record(z.string(), z.string().openapi({ description: 'Brand ID.' }))
                            .exactOptional()
                            .openapi({
                              description:
                                'Brands that an item should have to be eligible for the rule. Format: key: `brandId`, value: `brandName`.',
                            }),
                          categories: z
                            .record(z.string(), z.string().openapi({ description: 'Category ID.' }))
                            .exactOptional()
                            .openapi({
                              description:
                                'Categories that an item should have to be eligible for the rule. Format: key: `categoryId`, value: `categoryName`.',
                            }),
                          dateRange: z
                            .object({
                              from: z
                                .string()
                                .exactOptional()
                                .openapi({
                                  description:
                                    'Date when rule will be activated. Date format: `RFC3339`.',
                                }),
                              to: z
                                .string()
                                .exactOptional()
                                .openapi({
                                  description:
                                    'Date when the rule will be deactivated. Date format: `RFC3339`.',
                                }),
                            })
                            .nullable()
                            .exactOptional()
                            .openapi({
                              description: 'The rule will be active during this time range.',
                              required: [],
                            }),
                          internalCategories: z
                            .looseObject({})
                            .nullable()
                            .exactOptional()
                            .openapi({ description: 'Internal Categories.' }),
                          markupRange: z
                            .object({
                              from: z
                                .int()
                                .exactOptional()
                                .openapi({
                                  description:
                                    'Item markup should be greater than or equal to this value.',
                                }),
                              to: z
                                .int()
                                .exactOptional()
                                .openapi({
                                  description:
                                    'Item markup should be less than or equal to this value.',
                                }),
                            })
                            .nullable()
                            .exactOptional()
                            .openapi({
                              description:
                                "For an item to be eligible to the rule, it's markup should be in this Markup Range.",
                              required: [],
                            }),
                          stockStatuses: z
                            .looseObject({})
                            .nullable()
                            .exactOptional()
                            .openapi({ description: 'Stock statuses.' }),
                        })
                        .exactOptional()
                        .openapi({
                          description:
                            'Rule Context is a group of filters to be checked at an item level when applying the rule. If all those filters check out, the rule will be applied for that item, unless there is a fixed price for that item.',
                          required: [],
                        }),
                      id: z.number().exactOptional().openapi({ description: 'Rule ID.' }),
                    })
                    .openapi({
                      description: 'Object containing a price table rule.',
                      required: [],
                    }),
                )
                .exactOptional()
                .openapi({ description: 'Array of rules for the price table.' }),
              tradePolicyId: z
                .string()
                .exactOptional()
                .openapi({ description: 'Trade Policy ID (Price Table ID).' }),
            })
            .openapi({ title: '', required: [] }),
          example: {
            rules: [
              {
                context: {
                  brands: { '2000009': 'Whiskas' },
                  categories: {},
                  dateRange: null,
                  internalCategories: null,
                  markupRange: null,
                  stockStatuses: null,
                },
                id: 0,
                percentualModifier: 15,
              },
            ],
            tradePolicyId: 'b2c',
          },
        },
      },
    },
    401: { description: 'Unauthorized' },
    403: { description: 'Forbidden' },
    429: { description: 'Too many requests' },
  },
  servers: [
    {
      url: 'https://api.vtex.com/{account}/pricing',
      variables: { account: { default: 'DefaultParameterValue' } },
    },
  ],
})

export const putPricingPipelineCatalogPriceTableIdRoute = createRoute({
  method: 'put',
  path: '/pricing/pipeline/catalog/{priceTableId}',
  tags: ['Price Tables'],
  summary: 'Update rules for a price table',
  description:
    'This method will update the rules from a specific Price Table. It will delete all the rules from the requested Price Table and create new rules based on the content of the request.\r\n\r\n## Request body example\r\n\r\n```json\r\n{\r\n    "rules": [\r\n          {\r\n               "id": 1,\r\n               "context": {\r\n                    "categories": {\r\n                         "Category ID": "1",\r\n                         "Category Name": "Alimentação"\r\n                    },\r\n                    "brands": {\r\n                         "Brand ID": "2000002",\r\n                         "Brand Name": "Whiskas"\r\n                    },\r\n                    "markupRange": {\r\n                         "from": 0,\r\n                         "to": 200\r\n                    },\r\n                    "dateRange": {\r\n                         "from": "2022-01-23T19:00:00.000Z",\r\n                         "to": "2023-10-26T00:00:00.000Z"\r\n                    }\r\n               },\r\n               "percentualModifier": 0\r\n          }\r\n    ]\r\n}\r\n```',
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
        .openapi({
          param: {
            description:
              'HTTP Client Negotiation _Accept_ Header. Indicates the types of responses the client can understand.',
            in: 'header',
            name: 'Accept',
            required: true,
            schema: { example: 'application/json', type: 'string' },
            style: 'simple',
          },
          example: 'application/json',
        }),
    }),
    params: z.object({
      priceTableId: z
        .string()
        .openapi({
          param: {
            description: 'Price Table Name.',
            in: 'path',
            name: 'priceTableId',
            required: true,
            schema: { type: 'string' },
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
              rules: z
                .array(
                  z
                    .object({
                      context: z
                        .object({
                          brands: z
                            .record(
                              z.string(),
                              z.string().openapi({ description: 'Brand ID.', example: '421' }),
                            )
                            .openapi({
                              description:
                                'Brands that an item should have to be eligible for the rule. Format: key: `brandId`, value: `brandName`.',
                              title: 'brands',
                            }),
                          categories: z
                            .record(
                              z.string(),
                              z.string().openapi({ description: 'Category ID.', example: '209' }),
                            )
                            .openapi({
                              description:
                                'Categories that an item should have to be eligible for the rule. Format: key: `categoryId`, value: `categoryName`.',
                              title: 'categories',
                            }),
                          dateRange: z
                            .object({
                              from: z
                                .string()
                                .openapi({
                                  description:
                                    'Date when rule will be activated. Date format: `RFC3339`.',
                                  example: '2019-10-23T19:00:00.000Z',
                                  title: 'from',
                                }),
                              to: z
                                .string()
                                .openapi({
                                  description:
                                    'Date when the rule will be deactivated. Date format: `RFC3339`.',
                                  example: '2019-10-26T00:00:00.000Z',
                                  title: 'to',
                                }),
                            })
                            .openapi({
                              description: 'The rule will be active during this time range.',
                              required: ['from', 'to'],
                              title: 'dateRange',
                            }),
                          internalCategories: z
                            .looseObject({})
                            .nullable()
                            .exactOptional()
                            .openapi({
                              description: 'Internal Categories.',
                              example: null,
                              title: 'internalCategories',
                            }),
                          markupRange: z
                            .object({
                              from: z
                                .int()
                                .openapi({
                                  description:
                                    'Item markup should be greater than or equal to this value.',
                                  example: 0,
                                  title: 'from',
                                }),
                              to: z
                                .int()
                                .openapi({
                                  description:
                                    'Item markup should be less than or equal to this value.',
                                  example: 200,
                                  title: 'to',
                                }),
                            })
                            .nullable()
                            .openapi({
                              description:
                                "For an item to be eligible to the rule, it's markup should be in this Markup Range.",
                              example: null,
                              required: ['from', 'to'],
                              title: 'markupRange',
                            }),
                          stockStatuses: z
                            .looseObject({})
                            .nullable()
                            .exactOptional()
                            .openapi({
                              description: 'Stock statuses.',
                              example: null,
                              title: 'stockStatuses',
                            }),
                        })
                        .openapi({
                          description:
                            'Rule Context is a group of filters to be checked at an item level when applying the rule. If all those filters check out, the rule will be applied for that item, unless there is a fixed price for that item.',
                          required: ['categories', 'brands', 'markupRange', 'dateRange'],
                          title: 'context',
                        }),
                      id: z.int().openapi({ description: 'Rule ID.', example: 0, title: 'id' }),
                      percentualModifier: z
                        .number()
                        .openapi({
                          description: 'Percentual modifier.',
                          example: 0,
                          title: 'percentualModifier',
                        }),
                    })
                    .openapi({
                      description: 'Object containing a price table rule.',
                      required: ['id', 'context', 'percentualModifier'],
                    }),
                )
                .openapi({ description: 'Array of rules for the price table.', title: 'rules' }),
            })
            .openapi({
              example: {
                rules: [
                  {
                    context: {
                      brands: { 'Brand ID': '2000002', 'Brand Name': 'Whiskas' },
                      categories: { 'Category ID': '1', 'Category Name': 'Alimentação' },
                      dateRange: {
                        from: '2022-01-23T19:00:00.000Z',
                        to: '2023-10-26T00:00:00.000Z',
                      },
                      markupRange: { from: 0, to: 200 },
                    },
                    id: 1,
                    percentualModifier: 0,
                  },
                ],
              },
              required: ['rules'],
            }),
        },
      },
    },
  },
  responses: { 201: { description: 'Created' } },
})

export const getPricingPricesItemIdRoute = createRoute({
  method: 'get',
  path: '/pricing/prices/{itemId}',
  tags: ['Prices and Fixed Prices'],
  summary: 'Get Price',
  description:
    'Retrieves price data given a specific SKU ID. Within the `fixedPrices` object, there might be a list of prices for specific Trade Policies and Minimium Quantities of the SKU. Fixed Prices may also be scheduled.\r\n\r\n ## Response body example\r\n\r\n```json\r\n{\r\n    "itemId": "1",\r\n    "listPrice": 50,\r\n    "costPrice": 90,\r\n    "markup": 30,\r\n    "basePrice": 117,\r\n    "fixedPrices": [\r\n        {\r\n            "tradePolicyId": "1",\r\n            "value": 50.5,\r\n            "listPrice": 50.5,\r\n            "minQuantity": 2,\r\n            "dateRange": {\r\n                "from": "2021-12-31T01:00:00Z",\r\n                "to": "2022-12-31T01:00:00Z"\r\n            }\r\n        },\r\n        {\r\n            "tradePolicyId": "2",\r\n            "value": 30,\r\n            "listPrice": 50,\r\n            "minQuantity": 2\r\n        }\r\n    ]\r\n}\r\n```',
  operationId: 'GetPrice',
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
        .openapi({
          param: {
            description:
              'HTTP Client Negotiation _Accept_ Header. Indicates the types of responses the client can understand.',
            in: 'header',
            name: 'Accept',
            required: true,
            schema: { example: 'application/json', type: 'string' },
            style: 'simple',
          },
          example: 'application/json',
        }),
    }),
    params: z.object({
      itemId: z
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
            description: 'SKU ID.',
            in: 'path',
            name: 'itemId',
            required: true,
            schema: { example: 1, type: 'integer' },
            style: 'simple',
          },
          example: 1,
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': {
          schema: GetpriceSchema,
          example: {
            basePrice: 117,
            costPrice: 90,
            fixedPrices: [
              {
                dateRange: { from: '2021-12-31T01:00:00Z', to: '2022-12-31T01:00:00Z' },
                listPrice: 50.5,
                minQuantity: 2,
                tradePolicyId: '1',
                value: 50.5,
              },
              { listPrice: 50, minQuantity: 2, tradePolicyId: '2', value: 30 },
            ],
            itemId: '1',
            listPrice: 50,
            markup: 30,
          },
        },
      },
    },
  },
})

export const putPricingPricesItemIdRoute = createRoute({
  method: 'put',
  path: '/pricing/prices/{itemId}',
  tags: ['Prices and Fixed Prices'],
  summary: 'Create or Update Base Price or Fixed Prices',
  description:
    'Creates or updates an SKU Base Price or Fixed Prices. The **base price** is the basic selling price of a product, it comprises the cost price and the markup wanted in the sale of the product. The **fixed price** is an optional price of the SKU for a specific trade policy with a specific minimum quantity to be activated.\r\n\r\n <p> You may optionally set a list price. Additionally, you may set either a cost price or a markup value. By defining either one of them, the other will be calculated to conform to the formula <code>costPrice * (1 + markup) = basePrice</code>.</p> <h2>Request body example</h2>\r\n\r\n```json\r\n{\r\n    "markup": 30,\r\n    "basePrice": 100,\r\n    "listPrice": 35,\r\n    "fixedPrices": [\r\n        {\r\n            "tradePolicyId": "1",\r\n            "value": 31,\r\n            "listPrice": 32,\r\n            "minQuantity": 1,\r\n            "dateRange": {\r\n                "from": "2022-05-21T22:00:00Z",\r\n                "to": "2023-05-28T22:00:00Z"\r\n            }\r\n        },\r\n        {\r\n            "tradePolicyId": "1",\r\n            "value": 31.5,\r\n            "listPrice": 33,\r\n            "minQuantity": 2\r\n        }\r\n    ]\r\n}\r\n```',
  operationId: 'CreateUpdatePriceOrFixedPrice',
  request: {
    headers: z.object({
      Accept: z
        .string()
        .openapi({
          param: {
            description:
              'HTTP Client Negotiation _Accept_ Header. Indicates the types of responses the client can understand.',
            in: 'header',
            name: 'Accept',
            required: true,
            schema: { example: 'application/json', type: 'string' },
            style: 'simple',
          },
          example: 'application/json',
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
    params: z.object({
      itemId: z
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
            description: 'SKU unique identifier number.',
            in: 'path',
            name: 'itemId',
            required: true,
            schema: { example: 1, type: 'integer' },
            style: 'simple',
          },
          example: 1,
        }),
    }),
    body: {
      description: '',
      content: {
        'application/json': {
          schema: z
            .object({
              basePrice: z
                .number()
                .default(100)
                .openapi({
                  description:
                    'SKU selling base price. If you decide to fill only the `basePrice` item, the `markup` and `costPrice` will be automatically generated to adapt to the number inserted in `basePrice`.',
                  title: 'basePrice',
                }),
              costPrice: z
                .number()
                .default(35)
                .exactOptional()
                .openapi({
                  description:
                    'SKU selling cost price. If you decide to fill the `costPrice` item, you must also fill the `markup` and `basePrice` will be automatically generated based on both values.',
                  title: 'costPrice',
                }),
              fixedPrices: z
                .array(
                  z
                    .object({
                      dateRange: z
                        .object({
                          from: z
                            .string()
                            .openapi({
                              description: 'Start date of the price.',
                              example: '2021-12-30T22:00:00-03:00',
                              title: 'from',
                            }),
                          to: z
                            .string()
                            .openapi({
                              description: 'End date of the price.',
                              example: '2021-12-30T22:00:00-03:00',
                              title: 'to',
                            }),
                        })
                        .exactOptional()
                        .openapi({
                          description:
                            'Period of time when the fixed price will be applied to the SKU.',
                          required: ['from', 'to'],
                          title: 'dateRange',
                        }),
                      listPrice: z
                        .number()
                        .exactOptional()
                        .openapi({
                          description: 'SKU List Fixed Price.',
                          example: 50.5,
                          title: 'listPrice',
                        }),
                      minQuantity: z
                        .int()
                        .openapi({
                          description:
                            'Minimum quantity of the SKU for the fixed price to be applied.',
                          example: 2,
                          title: 'minQuantity',
                        }),
                      tradePolicyId: z
                        .string()
                        .openapi({
                          description:
                            'Trade policy name or ID that will have the fixed price configured.',
                          example: '1',
                          title: 'tradePolicyId',
                        }),
                      value: z
                        .number()
                        .openapi({
                          description: 'Fixed price value.',
                          example: 50.5,
                          title: 'value',
                        }),
                    })
                    .default([])
                    .openapi({
                      description: "Array with general information about the SKU's fixed prices.",
                      required: ['minQuantity', 'value', 'tradePolicyId'],
                      title: 'fixedPrices',
                    }),
                )
                .exactOptional(),
              listPrice: z
                .number()
                .default(50)
                .openapi({ description: "SKU's suggested selling price.", title: 'listPrice' }),
              markup: z
                .int()
                .default(30)
                .openapi({
                  description:
                    'The profit percentage that is to be obtained from the sale of that SKU. If you decide to fill the `markup` item, you must also fill the `costPrice`. The `basePrice` will be automatically generated based on both values.',
                  title: 'markup',
                }),
            })
            .openapi({ required: ['markup', 'basePrice', 'listPrice'], title: '' }),
        },
      },
    },
  },
  responses: { 200: { description: 'OK' } },
})

export const deletePricingPricesItemIdRoute = createRoute({
  method: 'delete',
  path: '/pricing/prices/{itemId}',
  tags: ['Prices and Fixed Prices'],
  summary: 'Delete Price',
  description:
    'Deletes the Base Price and all available Fixed Prices for an SKU in all trade policies.',
  operationId: 'DeletePrice',
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
              'HTTP Client Negotiation _Accept_ Header. Indicates the types of responses the client can understand.',
            in: 'header',
            name: 'Accept',
            required: true,
            schema: { default: 'application/json', type: 'string' },
            style: 'simple',
          },
        }),
    }),
    params: z.object({
      itemId: z
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
            description: 'SKU ID.',
            in: 'path',
            name: 'itemId',
            required: true,
            schema: { example: 1, type: 'integer' },
            style: 'simple',
          },
          example: 1,
        }),
    }),
  },
  responses: { 200: { description: 'OK' } },
})

export const getPricingPricesItemIdComputedPriceTableIdRoute = createRoute({
  method: 'get',
  path: '/pricing/prices/{itemId}/computed/{priceTableId}',
  tags: ['Prices and Fixed Prices'],
  summary: 'Get Computed Price by price table or trade policy',
  description:
    'Gets the Computed Price, which is the price after all the steps in the Pricing pipeline, for an SKU in a specific price table or trade policy. \r\n\r\n## Response body example\r\n\r\n```json\r\n{\r\n    "tradePolicyId": "1",\r\n    "listPrice": 30,\r\n    "costPrice": 76.92,\r\n    "sellingPrice": 18.9,\r\n    "priceValidUntil": "2018-12-20T18:12:14Z"\r\n}\r\n```',
  operationId: 'GetComputedPricebypricetable',
  request: {
    query: z.object({
      categoryIds: z
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
            description: 'Category ID.',
            explode: true,
            in: 'query',
            name: 'categoryIds',
            required: true,
            schema: { example: 1, type: 'integer' },
            style: 'form',
          },
          example: 1,
        }),
      brandId: z
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
            description: 'Brand ID.',
            explode: true,
            in: 'query',
            name: 'brandId',
            required: true,
            schema: { example: 3, type: 'integer' },
            style: 'form',
          },
          example: 3,
        }),
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
            description: 'SKU quantity.',
            explode: true,
            in: 'query',
            name: 'quantity',
            required: true,
            schema: { example: 2, type: 'integer' },
            style: 'form',
          },
          example: 2,
        }),
    }),
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
        .openapi({
          param: {
            description:
              'HTTP Client Negotiation _Accept_ Header. Indicates the types of responses the client can understand.',
            in: 'header',
            name: 'Accept',
            required: true,
            schema: { example: 'application/json', type: 'string' },
            style: 'simple',
          },
          example: 'application/json',
        }),
    }),
    params: z.object({
      itemId: z
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
            description: 'SKU ID.',
            in: 'path',
            name: 'itemId',
            required: true,
            schema: { example: 1, type: 'integer' },
            style: 'simple',
          },
          example: 1,
        }),
      priceTableId: z
        .string()
        .openapi({
          param: {
            description: 'SKU Price Table Name.',
            in: 'path',
            name: 'priceTableId',
            required: true,
            schema: { example: 'gold', type: 'string' },
            style: 'simple',
          },
          example: 'gold',
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json; charset=utf-8': {
          schema: GetcomputedpriceSchema,
          example: {
            costPrice: 76.92,
            listPrice: 30,
            priceValidUntil: '2018-12-20T18:12:14Z',
            sellingPrice: 18.9,
            tradePolicyId: '1',
          },
        },
      },
    },
  },
  servers: [
    {
      url: 'https://api.vtex.com/{account}/pricing',
      variables: { account: { default: 'DefaultParameterValue' } },
    },
  ],
})

export const getPricingPricesItemIdFixedRoute = createRoute({
  method: 'get',
  path: '/pricing/prices/{itemId}/fixed',
  tags: ['Prices and Fixed Prices'],
  summary: 'Get Fixed Prices',
  description:
    'The **fixed price** is an optional price of the SKU for a specific trade policy with a specific minimum quantity to be activated. This method retrieves an array of Fixed Prices for an SKU in a Trade Policy with Minimum Quantities.\r\n\r\n The default value for a Minimum Quantity is `1`. This means a Fixed Price will be valid for a SKU in a Trade Policy for orders containing the specified number of Minimum Quantity or above, unless a higher Minimum Quantity is specified.\r\n\r\n Fixed prices may, optionally, be scheduled. If so, these objects will contain the `dateRange` object with `from` and `to` properties, indicating the start and end time of the scheduled fixed price in the RFC3339 timestamp format (`YYYY-MM-DDT23:59:60Z`).\r\n\r\n Note that the \'Z\', at the end, represents the UTC time (GMT+00:00). If it was in GMT-03:00, for example, it would be (`YYYY-MM-DDT23:59:60-03:00`).\r\n\r\n ## Response body example\r\n\r\n```json\r\n[\r\n    {\r\n        "tradePolicyId": "6",\r\n        "value": 20.9,\r\n        "listPrice": 22.9,\r\n        "minQuantity": 1,\r\n        "dateRange": {\r\n            "from": "2021-12-30T22:00:00-03:00",\r\n            "to": "2021-12-30T22:00:00-03:00"\r\n        }\r\n    },\r\n    {\r\n        "tradePolicyId": "1",\r\n        "value": 18.9,\r\n        "listPrice": null,\r\n        "minQuantity": 1,\r\n        "dateRange": {\r\n            "from": "2021-12-30T22:00:00-03:00",\r\n            "to": "2021-12-30T22:00:00-03:00"\r\n        }\r\n    }\r\n]\r\n```',
  operationId: 'GetFixedPrices',
  request: {
    headers: z.object({
      Accept: z
        .string()
        .openapi({
          param: {
            description:
              'HTTP Client Negotiation _Accept_ Header. Indicates the types of responses the client can understand.',
            in: 'header',
            name: 'Accept',
            required: true,
            schema: { example: 'application/json', type: 'string' },
            style: 'simple',
          },
          example: 'application/json',
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
    params: z.object({
      itemId: z
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
            description: 'SKU ID.',
            in: 'path',
            name: 'itemId',
            required: true,
            schema: { example: 1, type: 'integer' },
            style: 'simple',
          },
          example: 1,
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json; charset=utf-8': {
          schema: z.array(FixedPriceSchema),
          example: [
            {
              dateRange: { from: '2021-12-30T22:00:00-03:00', to: '2021-12-30T22:00:00-03:00' },
              listPrice: 22.9,
              minQuantity: 1,
              tradePolicyId: '6',
              value: 20.9,
            },
            {
              dateRange: { from: '2021-12-30T22:00:00-03:00', to: '2021-12-30T22:00:00-03:00' },
              listPrice: null,
              minQuantity: 1,
              tradePolicyId: '1',
              value: 18.9,
            },
          ],
        },
      },
    },
  },
})

export const getPricingPricesItemIdFixedPriceTableIdRoute = createRoute({
  method: 'get',
  path: '/pricing/prices/{itemId}/fixed/{priceTableId}',
  tags: ['Prices and Fixed Prices'],
  summary: 'Get Fixed Prices on a price table or trade policy',
  description:
    'Retrieves all Fixed Prices on a price table or trade policy. \r\n\r\n## Response body example\r\n\r\n```json\r\n[\r\n    {\r\n        "tradePolicyId": "6",\r\n        "value": 20.9,\r\n        "listPrice": 22.9,\r\n        "minQuantity": 1,\r\n        "dateRange": {\r\n            "from": "2021-12-30T22:00:00-03:00",\r\n            "to": "2021-12-30T22:00:00-04:00"\r\n        }\r\n    },\r\n    {\r\n        "tradePolicyId": "1",\r\n        "value": 18.9,\r\n        "listPrice": null,\r\n        "minQuantity": 1\r\n    }\r\n]\r\n```',
  operationId: 'GetFixedPricesonapricetable',
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
        .openapi({
          param: {
            description: '',
            in: 'header',
            name: 'Accept',
            required: true,
            schema: { example: 'application/json', type: 'string' },
            style: 'simple',
          },
          example: 'application/json',
        }),
    }),
    params: z.object({
      itemId: z
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
            description: 'SKU ID.',
            in: 'path',
            name: 'itemId',
            required: true,
            schema: { example: 1, type: 'integer' },
            style: 'simple',
          },
          example: 1,
        }),
      priceTableId: z
        .string()
        .openapi({
          param: {
            description: 'Price Table Name',
            in: 'path',
            name: 'priceTableId',
            required: true,
            schema: { example: 'gold', type: 'string' },
            style: 'simple',
          },
          example: 'gold',
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json; charset=utf-8': {
          schema: z.array(FixedPriceSchema),
          example: [
            {
              dateRange: { from: '2021-12-30T22:00:00-03:00', to: '2021-12-30T22:00:00-04:00' },
              listPrice: 22.9,
              minQuantity: 1,
              tradePolicyId: '6',
              value: 20.9,
            },
            { listPrice: null, minQuantity: 1, tradePolicyId: '1', value: 18.9 },
          ],
        },
      },
    },
  },
})

export const postPricingPricesItemIdFixedPriceTableIdRoute = createRoute({
  method: 'post',
  path: '/pricing/prices/{itemId}/fixed/{priceTableId}',
  tags: ['Prices and Fixed Prices'],
  summary: 'Create or Update Fixed Prices on a price table or trade policy',
  description:
    'Creates or updates the fixed prices of an SKU for a specific price table or trade policy. You can add one or multiple fixed prices per SKU.\r\n\r\n ## Request body example\r\n\r\n```json\r\n[\r\n  {\r\n    "value": 50.5,\r\n    "listPrice": 50.5,\r\n    "minQuantity": 2,\r\n    "dateRange": {\r\n      "from": "2021-12-30T22:00:00-03:00",\r\n      "to": "2021-12-30T22:00:00-04:00"\r\n    }\r\n  }\r\n]\r\n```',
  operationId: 'createorupdatefixedpricesonpricetableortradepolicy',
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
              'HTTP Client Negotiation _Accept_ Header. Indicates the types of responses the client can understand.',
            in: 'header',
            name: 'Accept',
            required: true,
            schema: { default: 'application/json', type: 'string' },
            style: 'simple',
          },
        }),
    }),
    params: z.object({
      itemId: z
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
            description: 'SKU ID.',
            in: 'path',
            name: 'itemId',
            required: true,
            schema: { example: 1, type: 'integer' },
            style: 'simple',
          },
          example: 1,
        }),
      priceTableId: z
        .string()
        .openapi({
          param: {
            description: 'SKU **price table** name or **trade policy** ID.',
            in: 'path',
            name: 'priceTableId',
            required: true,
            schema: { example: 'priceTableA', type: 'string' },
            style: 'simple',
          },
          example: 'priceTableA',
        }),
    }),
    body: {
      description: '',
      content: {
        'application/json': {
          schema: z
            .array(
              z
                .object({
                  dateRange: z
                    .object({
                      from: z
                        .string()
                        .openapi({
                          description: 'Start date of the price.',
                          example: '2021-12-30T22:00:00-03:00',
                          title: 'from',
                        }),
                      to: z
                        .string()
                        .openapi({
                          description: 'End date of the price.',
                          example: '2021-12-30T22:00:00-04:00',
                          title: 'to',
                        }),
                    })
                    .exactOptional()
                    .openapi({
                      description:
                        'Period of time when the fixed price will be applied to the SKU.',
                      required: ['from', 'to'],
                      title: 'dateRange',
                    }),
                  listPrice: z
                    .number()
                    .exactOptional()
                    .openapi({
                      description: 'SKU List Fixed Price.',
                      example: 50.5,
                      title: 'listPrice',
                    }),
                  minQuantity: z
                    .int()
                    .openapi({
                      description: 'The minimum SKU quantity for the fixed price to be applied.',
                      example: 2,
                      title: 'minQuantity',
                    }),
                  value: z
                    .number()
                    .openapi({ description: 'Fixed price value.', example: 50.5, title: 'value' }),
                })
                .openapi({ required: ['value', 'minQuantity'] }),
            )
            .openapi({ title: '' }),
        },
      },
    },
  },
  responses: { 200: { description: 'OK' } },
})

export const deletePricingPricesItemIdFixedPriceTableIdRoute = createRoute({
  method: 'delete',
  path: '/pricing/prices/{itemId}/fixed/{priceTableId}',
  tags: ['Prices and Fixed Prices'],
  summary: 'Delete Fixed Prices on a price table or trade policy',
  description: 'Deletes all Fixed Prices of an SKU in a specific Price Table or Trade Policy.',
  operationId: 'Deletefixedpricesonapricetableortradepolicy',
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
        .openapi({
          param: {
            description:
              'HTTP Client Negotiation _Accept_ Header. Indicates the types of responses the client can understand.',
            in: 'header',
            name: 'Accept',
            required: true,
            schema: { example: 'application/json', type: 'string' },
            style: 'simple',
          },
          example: 'application/json',
        }),
    }),
    params: z.object({
      itemId: z
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
            description: 'SKU ID.',
            in: 'path',
            name: 'itemId',
            required: true,
            schema: { example: 1, type: 'integer' },
            style: 'simple',
          },
          example: 1,
        }),
      priceTableId: z
        .string()
        .openapi({
          param: {
            description: 'Price Table or Trade Policy Name.',
            in: 'path',
            name: 'priceTableId',
            required: true,
            schema: { example: 'gold', type: 'string' },
            style: 'simple',
          },
          example: 'gold',
        }),
    }),
  },
  responses: { 200: { description: 'OK' } },
})

export const getPricingTablesRoute = createRoute({
  method: 'get',
  path: '/pricing/tables',
  tags: ['Price Tables'],
  summary: 'List price tables',
  description:
    'This method will list all price tables.\r\n\r\n## Response body example\r\n\r\n```json\r\n[\r\n    "1",\r\n    "2",\r\n    "3",\r\n    "b2c",\r\n    "b2b",\r\n    "gold"\r\n]\r\n```',
  operationId: 'Listpricetables',
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
        .openapi({
          param: {
            description:
              'HTTP Client Negotiation _Accept_ Header. Indicates the types of responses the client can understand.',
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
        'application/json': {
          schema: z
            .array(z.string().openapi({ description: 'Price table name.' }))
            .openapi({ description: 'Array of price tables.' }),
          example: ['1', '2', '3', 'b2c', 'b2b', 'gold'],
        },
      },
    },
  },
  servers: [
    {
      url: 'https://api.vtex.com/{account}/pricing',
      variables: { account: { default: 'DefaultParameterValue' } },
    },
  ],
})
