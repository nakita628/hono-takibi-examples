import { createRoute, z } from '@hono/zod-openapi'

const AppKeySecurityScheme = { in: 'header', name: 'X-VTEX-API-AppKey', type: 'apiKey' }

const AppTokenSecurityScheme = { in: 'header', name: 'X-VTEX-API-AppToken', type: 'apiKey' }

export const getCatalogPvtSkusellersSkuIdRoute = createRoute({
  method: 'get',
  path: '/catalog/pvt/skusellers/{skuId}',
  tags: ['SKU Bindings'],
  summary: 'Get SKU Bindings by SKU ID',
  description:
    'Retrieves SKU Bindings details by SKU ID.\r\n\r\n## Response body example\r\n\r\n```json\r\n[\r\n    {\r\n        "Id": 48,\r\n        "SellerId": "cosmetics1",\r\n        "StockKeepingUnitId": 1,\r\n        "SellerSkuId": "42",\r\n        "IsActive": true,\r\n        "LastUpdateDate": "2020-10-21T19:13:00.657",\r\n        "SalesPolicy": 0\r\n    }\r\n]\r\n```',
  operationId: 'GetbySkuId',
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
      skuId: z
        .string()
        .openapi({
          param: {
            description: "SKU's unique identifier in the marketplace.",
            in: 'path',
            name: 'skuId',
            required: true,
            schema: { example: '1', type: 'string' },
            style: 'simple',
          },
          example: '1',
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
                  Id: z.int32().exactOptional().openapi({ description: 'SKU Binding ID.' }),
                  IsActive: z
                    .boolean()
                    .exactOptional()
                    .openapi({ description: 'Defines if the SKU binding is active.' }),
                  LastUpdateDate: z
                    .string()
                    .exactOptional()
                    .openapi({
                      description:
                        'Date when the SKU binding was updated for the last time, in UTC format.',
                    }),
                  SalesPolicy: z
                    .int32()
                    .exactOptional()
                    .openapi({ description: 'Sales policy ID.' }),
                  SellerId: z
                    .string()
                    .exactOptional()
                    .openapi({
                      description:
                        'ID that identifies the seller in the marketplace. It can be the same as the seller name or a unique number. Check the **Sellers management** section in the Admin to get the correct ID.',
                    }),
                  SellerSkuId: z
                    .string()
                    .exactOptional()
                    .openapi({ description: 'SKU seller ID.' }),
                  StockKeepingUnitId: z
                    .int32()
                    .exactOptional()
                    .openapi({ description: 'SKU ID in the VTEX marketplace.' }),
                })
                .openapi({
                  description: 'Object with information about an SKU Binding.',
                  example: [
                    {
                      Id: 48,
                      IsActive: true,
                      LastUpdateDate: '2020-10-21T19:13:00.657',
                      SalesPolicy: 0,
                      SellerId: 'cosmetics1',
                      SellerSkuId: '42',
                      StockKeepingUnitId: 1,
                    },
                  ],
                  required: [],
                }),
            )
            .openapi({
              description: 'Array containing objects with information about each SKU Binding.',
            }),
        },
      },
    },
  },
})

export const postSkuBindingPvtSkusellerActivateSellerIdSkuSellerIdRoute = createRoute({
  method: 'post',
  path: '/sku-binding/pvt/skuseller/activate/{sellerId}/{skuSellerId}',
  tags: ['SKU Bindings'],
  summary: 'Activate SKU Binding',
  description:
    'Changes the status of an SKU Binding to active, setting `isActive` to `true`.\r\n\r\n > ℹ This path is an updated version of `/api/catalog_system/pvt/skuseller/activate/{sellerId}/{skuSellerId}`.',
  operationId: 'ActivateSKUBinding',
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
      sellerId: z
        .string()
        .openapi({
          param: {
            description:
              'ID that identifies the seller in the marketplace. It can be the same as the seller name or a unique number. Check the **Sellers management** section in the Admin to get the correct ID.',
            in: 'path',
            name: 'sellerId',
            required: true,
            schema: { example: 'vtxkfj7352', type: 'string' },
            style: 'simple',
          },
          example: 'vtxkfj7352',
        }),
      skuSellerId: z
        .string()
        .openapi({
          param: {
            description: "SKU ID in the seller's store.",
            in: 'path',
            name: 'skuSellerId',
            required: true,
            schema: { example: '71', type: 'string' },
            style: 'simple',
          },
          example: '71',
        }),
    }),
  },
  responses: { 200: { description: 'OK' } },
})

export const getSkuBindingPvtSkusellerAdminRoute = createRoute({
  method: 'get',
  path: '/sku-binding/pvt/skuseller/admin',
  tags: ['SKU Bindings'],
  summary: 'Get SKU Bindings information',
  description:
    'Retrieves SKU Bindings administrative information using optional query params `sellerId`, `skuId`, `sellerSkuId` and `IsActive` to filter results and `size` to restrict the amount of results. \r\n\r\n > ℹ This path is an updated version of `/api/catalog_system/pvt/skuseller/admin`.\r\n\r\n## Response body example\r\n\r\n```json\r\n[\r\n    {\r\n        "IsPersisted": true,\r\n        "IsRemoved": false,\r\n        "SkuSellerId": 1,\r\n        "UpdateDate": "2019-12-04T01:56:00.673Z",\r\n        "RequestedUpdateDate": null,\r\n        "SellerStockKeepingUnitId": "12",\r\n        "SellerId": "cosmetics1",\r\n        "StockKeepingUnitId": 25,\r\n        "IsActive": true\r\n    }\r\n]\r\n```',
  operationId: 'Getpagedadmin',
  request: {
    query: z.object({
      sellerId: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'ID that identifies the seller in the marketplace. It can be the same as the seller name or a unique number. Check the **Sellers management** section in the Admin to get the correct ID.',
            explode: true,
            in: 'query',
            name: 'sellerId',
            required: false,
            schema: { example: 'vtxkfj7352', type: 'string' },
            style: 'form',
          },
          example: 'vtxkfj7352',
        }),
      skuId: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: "SKU's unique identifier in the marketplace.",
            explode: true,
            in: 'query',
            name: 'skuId',
            required: false,
            schema: { example: '1', type: 'string' },
            style: 'form',
          },
          example: '1',
        }),
      sellerSkuId: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: "SKU ID in the seller's store.",
            explode: true,
            in: 'query',
            name: 'sellerSkuId',
            required: false,
            schema: { example: '71', type: 'string' },
            style: 'form',
          },
          example: '71',
        }),
      isActive: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            description: 'Defines if the SKU binding is active.',
            explode: true,
            in: 'query',
            name: 'isActive',
            required: false,
            schema: { example: true, type: 'boolean' },
            style: 'form',
          },
          example: true,
        }),
      size: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Amount of results.',
            explode: true,
            in: 'query',
            name: 'size',
            required: false,
            schema: { example: '1', type: 'string' },
            style: 'form',
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
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': {
          schema: z
            .object({
              IsActive: z
                .boolean()
                .exactOptional()
                .openapi({ description: 'Defines if the SKU binding is active.' }),
              IsPersisted: z
                .boolean()
                .exactOptional()
                .openapi({ description: 'Defines if the seller is persisted.' }),
              IsRemoved: z
                .boolean()
                .exactOptional()
                .openapi({ description: 'Defines if the seller is removed.' }),
              RequestedUpdateDate: z
                .string()
                .nullable()
                .exactOptional()
                .openapi({
                  description:
                    'Date when an SKU binding update was requested for the last time, in UTC format.',
                }),
              SellerId: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    'ID that identifies the seller in the marketplace. It can be the same as the seller name or a unique number. Check the **Sellers management** section in the Admin to get the correct ID.',
                }),
              SellerStockKeepingUnitId: z
                .string()
                .exactOptional()
                .openapi({ description: "SKU ID in the seller's store." }),
              SkuSellerId: z.int32().exactOptional().openapi({ description: 'SKU Binding ID.' }),
              StockKeepingUnitId: z
                .int32()
                .exactOptional()
                .openapi({ description: 'SKU ID in the VTEX marketplace.' }),
              UpdateDate: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    'Date when the SKU binding was updated for the last time, in UTC format.',
                }),
            })
            .openapi({
              example: [
                {
                  IsActive: true,
                  IsPersisted: true,
                  IsRemoved: false,
                  RequestedUpdateDate: null,
                  SellerId: 'vtxkfj7352',
                  SellerStockKeepingUnitId: '71',
                  SkuSellerId: 102,
                  StockKeepingUnitId: 1,
                  UpdateDate: '2021-04-12T20:06:59.413Z',
                },
              ],
              required: [],
            }),
        },
      },
    },
  },
})

export const postSkuBindingPvtSkusellerChangenotificationSellerIdSellerSkuIdRoute = createRoute({
  method: 'post',
  path: '/sku-binding/pvt/skuseller/changenotification/{sellerId}/{sellerSkuId}',
  tags: ['SKU Bindings'],
  summary: 'Change Notification with Seller ID and Seller SKU ID',
  description:
    "The seller is responsible for suggesting new SKUs to be sold in the VTEX marketplace and also for informing the marketplace about changes in their SKUs that already exist in the marketplace. Both actions start with a catalog notification, which is made by this request.\n\nWith this notification, the seller is telling the marketplace that something has changed about a specific SKU, like price or inventory, or that this is a new SKU that the seller would like to offer to the marketplace.\n\nThere are two information expected by the marketplace in this request: the `sellerId`, which identifies the seller, and the `sellerSkuId`, which identifies the binding of the seller with the SKU.\n\nBoth information are passed through the request URL. The body of the request should be empty.\r\n > ℹ This path is an updated version of `/api/catalog_system/pvt/skuseller/changenotification/{sellerId}/{sellerSkuId}`.\r\n\r\n## Example\r\n\r\nLet's say your seller has the ID `123` in the marketplace and you want to inform the marketplace that has been a change in the SKU with ID `700`.\r\n\r\nIn this case, you would have to replace the `sellerId` parameter with the value `123` and the `skuId` parameter with the value `700`. The URL of the request would be the following.\r\n\r\n```\r\nhttps://{{accountName}}.vtexcommercestable.com.br/api/sku-binding/pvt/skuseller/changenotification/123/700\r\n```\r\n\r\n## Response codes\r\n\r\nThe following response codes are possible for this request.\r\n* 200: the SKU whose ID was informed in the URL already exists in the marketplace and was found. The marketplace can now proceed with a fulfillment simulation in order to get updated information about this SKU's inventory and price.\r\n* 403: Failure in the authentication.\r\n* 404: the SKU was not found in the marketplace. The body of the response, in this case, should follow this format: \"Seller StockKeepingUnit `{{skuId}}` not found for this seller id `{{sellerId}}`. This means that the seller can now proceed with sending an offer to the marketplace in order to suggest that this SKU is sold there.\r\n* 429: Failure due to too many requests.",
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
      sellerId: z
        .string()
        .openapi({
          param: {
            description:
              'ID that identifies the seller in the marketplace. It can be the same as the seller name or a unique number. Check the **Sellers management** section in the Admin to get the correct ID.',
            in: 'path',
            name: 'sellerId',
            required: true,
            schema: { example: '101', type: 'string' },
            style: 'simple',
          },
          example: '101',
        }),
      sellerSkuId: z
        .string()
        .openapi({
          param: {
            description: 'ID of the binding of the seller with the SKU.',
            in: 'path',
            name: 'sellerSkuId',
            required: true,
            schema: { example: '1', type: 'string' },
            style: 'simple',
          },
          example: '1',
        }),
    }),
  },
  responses: {
    200: { description: 'OK' },
    400: { description: 'Bad Request' },
    403: { description: 'Forbidden' },
    404: { description: 'Not found' },
    429: { description: 'Too many requests' },
  },
})

export const postSkuBindingPvtSkusellerChangenotificationSkuIdRoute = createRoute({
  method: 'post',
  path: '/sku-binding/pvt/skuseller/changenotification/{skuId}',
  tags: ['SKU Bindings'],
  summary: 'Change Notification with SKU ID',
  description:
    'The seller is responsible for suggesting new SKUs to be sold in the VTEX marketplace and also for informing the marketplace about changes in their SKUs that already exist in the marketplace. Both actions start with a catalog notification, which is made by this request.\n\nWith this notification, the seller is telling the marketplace that something has changed about a specific SKU, like price or inventory, or that this is a new SKU that the seller would like to offer to the marketplace.\n\nThe body of the request should be empty.\r\n\r\n > ℹ This path is an updated version of `/api/catalog_system/pvt/skuseller/changenotification/{skuId}`.',
  operationId: 'ChangeNotification',
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
      skuId: z
        .string()
        .openapi({
          param: {
            description:
              'A string that identifies the SKU in the marketplace. This is the ID that the marketplace will use to look for the SKU whose change the seller wants to inform. If the marketplace finds this ID, it responds with status code `200`. Otherwise, it responds with status code `404`.',
            in: 'path',
            name: 'skuId',
            required: true,
            schema: { example: '10', type: 'string' },
            style: 'simple',
          },
          example: '10',
        }),
    }),
  },
  responses: {
    200: { description: 'OK' },
    400: { description: 'Bad Request' },
    403: { description: 'Forbidden' },
    404: { description: 'Not found' },
    429: { description: 'Too many requests' },
  },
})

export const postSkuBindingPvtSkusellerInactivateSellerIdSkuSellerIdRoute = createRoute({
  method: 'post',
  path: '/sku-binding/pvt/skuseller/inactivate/{sellerId}/{skuSellerId}',
  tags: ['SKU Bindings'],
  summary: 'Deactivate SKU Binding',
  description:
    'Changes the status of an SKU Binding to inactive, setting `isActive` to `false`.\r\n\r\n  > ℹ This path is an updated version of `/api/catalog_system/pvt/skuseller/inactivate/{sellerId}/{skuSellerId}`.',
  operationId: 'DeactivateSKUBinding',
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
      sellerId: z
        .string()
        .openapi({
          param: {
            description:
              'ID that identifies the seller in the marketplace. It can be the same as the seller name or a unique number. Check the **Sellers management** section in the Admin to get the correct ID.',
            in: 'path',
            name: 'sellerId',
            required: true,
            schema: { example: 'vtxkfj7352', type: 'string' },
            style: 'simple',
          },
          example: 'vtxkfj7352',
        }),
      skuSellerId: z
        .string()
        .openapi({
          param: {
            description: "SKU ID in the seller's store.",
            in: 'path',
            name: 'skuSellerId',
            required: true,
            schema: { example: '71', type: 'string' },
            style: 'simple',
          },
          example: '71',
        }),
    }),
  },
  responses: { 200: { description: 'OK' } },
})

export const postSkuBindingPvtSkusellerInsertionRoute = createRoute({
  method: 'post',
  path: '/sku-binding/pvt/skuseller/insertion',
  tags: ['SKU Bindings'],
  summary: 'Insert SKU Binding',
  description:
    "Creates an SKU Binding, associating a seller's SKU with a marketplace's SKU.\r\n\r\n > ℹ This path is an updated version of `/api/catalog_system/pvt/skuseller/insertion`.",
  operationId: 'InsertSKUBinding',
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
    body: {
      description: 'Request body',
      content: {
        'application/json': {
          schema: z
            .object({
              IsActive: z
                .boolean()
                .openapi({ description: 'Defines if the SKU binding is active.' }),
              SellerId: z
                .string()
                .openapi({
                  description:
                    'ID that identifies the seller in the marketplace. It can be the same as the seller name or a unique number. Check the **Sellers management** section in the Admin to get the correct ID.',
                }),
              SellerStockKeepingUnitId: z.string().openapi({ description: 'SKU seller ID.' }),
              StockKeepingUnitId: z.int32().openapi({ description: 'SKU ID in the marketplace.' }),
            })
            .openapi({
              required: ['StockKeepingUnitId', 'IsActive', 'SellerId', 'SellerStockKeepingUnitId'],
            }),
          example: {
            IsActive: true,
            SellerId: 'vtxkfj7352',
            SellerStockKeepingUnitId: '71',
            StockKeepingUnitId: 1,
          },
        },
      },
      required: true,
    },
  },
  responses: {
    200: { description: 'OK' },
    400: { description: 'Bad Request' },
    409: { description: 'Conflict' },
  },
})

export const getSkuBindingPvtSkusellerListBysellerIdSellerIdRoute = createRoute({
  method: 'get',
  path: '/sku-binding/pvt/skuseller/list/bysellerId/{sellerId}',
  tags: ['SKU Bindings'],
  summary: 'Get all SKU Bindings by Seller ID',
  description:
    'Retrieves a list of SKU Bindings given a specific Seller ID. \r\n\r\n > ℹ This path is an updated version of `/api/catalog_system/pvt/skuseller/list/bysellerId/{sellerId}`.\r\n\r\n## Response body example\r\n\r\n```json\r\n[\r\n    {\r\n        "SellerStockKeepingUnitId": "24",\r\n        "FreightCommissionPercentage": null,\r\n        "ProductCommissionPercentage": null,\r\n        "SellerId": "vtxkfj7352",\r\n        "StockKeepingUnitId": 121,\r\n        "IsActive": true\r\n    }\r\n]\r\n```',
  operationId: 'GetallbySellerId',
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
      sellerId: z
        .string()
        .openapi({
          param: {
            description:
              'ID that identifies the seller in the marketplace. It can be the same as the seller name or a unique number. Check the **Sellers management** section in the Admin to get the correct ID.',
            in: 'path',
            name: 'sellerId',
            required: true,
            schema: { example: 'vtxkfj7352', type: 'string' },
            style: 'simple',
          },
          example: 'vtxkfj7352',
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': {
          schema: z.array(
            z
              .object({
                FreightCommissionPercentage: z
                  .number()
                  .nullable()
                  .exactOptional()
                  .openapi({
                    description:
                      'The percentage that must be filled in as agreed between the marketplace and the seller.',
                  }),
                IsActive: z
                  .boolean()
                  .exactOptional()
                  .openapi({ description: 'Defines if the SKU binding is active.' }),
                ProductCommissionPercentage: z
                  .number()
                  .nullable()
                  .exactOptional()
                  .openapi({
                    description:
                      'The percentage that must be filled in as agreed between the marketplace and the seller. If there is no such commission, please fill in the field with the value: `0.00`.',
                  }),
                SellerId: z
                  .string()
                  .exactOptional()
                  .openapi({
                    description:
                      'ID that identifies the seller in the marketplace. It can be the same as the seller name or a unique number. Check the **Sellers management** section in the Admin to get the correct ID.',
                  }),
                SellerStockKeepingUnitId: z
                  .string()
                  .exactOptional()
                  .openapi({ description: "SKU ID in the seller's store." }),
                StockKeepingUnitId: z
                  .int32()
                  .exactOptional()
                  .openapi({ description: 'SKU ID in the marketplace.' }),
              })
              .openapi({
                example: {
                  FreightCommissionPercentage: null,
                  IsActive: true,
                  ProductCommissionPercentage: null,
                  SellerId: 'vtxkfj7352',
                  SellerStockKeepingUnitId: '24',
                  StockKeepingUnitId: 121,
                },
                required: [],
              }),
          ),
        },
      },
    },
  },
})

export const getSkuBindingPvtSkusellerPagedSelleridSellerIdRoute = createRoute({
  method: 'get',
  path: '/sku-binding/pvt/skuseller/paged/sellerid/{sellerId}',
  tags: ['SKU Bindings'],
  summary: 'Get paged SKU Bindings by Seller ID',
  description:
    'Retrieves a paged list of SKU Bindings given a specific Seller ID. \r\n\r\n > ℹ This path is an updated version of `/api/catalog_system/pvt/skuseller/paged/sellerid/{sellerId}`.\r\n\r\n## Response body example\r\n\r\n```json\r\n[\r\n    {\r\n        "SellerId": "vtxkfj7352",\r\n        "StockKeepingUnitId": 121,\r\n        "SellerStockKeepingUnitId": "24",\r\n        "IsActive": true,\r\n        "FreightCommissionPercentage": null,\r\n        "ProductCommissionPercentage": null\r\n    },\r\n    {\r\n        "SellerId": "vtxkfj7352",\r\n        "StockKeepingUnitId": 14,\r\n        "SellerStockKeepingUnitId": "60",\r\n        "IsActive": true,\r\n        "FreightCommissionPercentage": null,\r\n        "ProductCommissionPercentage": null\r\n    }\r\n]\r\n```',
  operationId: 'GetpagedbySellerId',
  request: {
    query: z.object({
      page: z
        .string()
        .openapi({
          param: {
            description: 'Page number.',
            explode: true,
            in: 'query',
            name: 'page',
            required: true,
            schema: { example: '1', type: 'string' },
            style: 'form',
          },
          example: '1',
        }),
      size: z
        .string()
        .openapi({
          param: {
            description: 'Amount of results per page.',
            explode: true,
            in: 'query',
            name: 'size',
            required: true,
            schema: { example: '2', type: 'string' },
            style: 'form',
          },
          example: '2',
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
      sellerId: z
        .string()
        .openapi({
          param: {
            description:
              'ID that identifies the seller in the marketplace. It can be the same as the seller name or a unique number. Check the **Sellers management** section in the Admin to get the correct ID.',
            in: 'path',
            name: 'sellerId',
            required: true,
            schema: { example: 'vtxkfj7352', type: 'string' },
            style: 'simple',
          },
          example: 'vtxkfj7352',
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': {
          schema: z.array(
            z
              .object({
                FreightCommissionPercentage: z
                  .number()
                  .nullable()
                  .exactOptional()
                  .openapi({
                    description:
                      'The percentage that must be filled in as agreed between the marketplace and the seller.',
                  }),
                IsActive: z
                  .boolean()
                  .exactOptional()
                  .openapi({ description: 'Defines if the SKU binding is active.' }),
                ProductCommissionPercentage: z
                  .number()
                  .nullable()
                  .exactOptional()
                  .openapi({
                    description:
                      'The percentage that must be filled in as agreed between the marketplace and the seller. If there is no such commission, please fill in the field with the value: `0.00`.',
                  }),
                SellerId: z
                  .string()
                  .exactOptional()
                  .openapi({
                    description:
                      'ID that identifies the seller in the marketplace. It can be the same as the seller name or a unique number. Check the **Sellers management** section in the Admin to get the correct ID.',
                  }),
                SellerStockKeepingUnitId: z
                  .string()
                  .exactOptional()
                  .openapi({ description: "SKU ID in the seller's store." }),
                StockKeepingUnitId: z
                  .int32()
                  .exactOptional()
                  .openapi({ description: 'SKU ID in the marketplace.' }),
              })
              .openapi({
                example: {
                  FreightCommissionPercentage: null,
                  IsActive: true,
                  ProductCommissionPercentage: null,
                  SellerId: 'vtxkfj7352',
                  SellerStockKeepingUnitId: '24',
                  StockKeepingUnitId: 121,
                },
                required: [],
              }),
          ),
          example: [
            {
              FreightCommissionPercentage: null,
              IsActive: true,
              ProductCommissionPercentage: null,
              SellerId: 'vtxkfj7352',
              SellerStockKeepingUnitId: '24',
              StockKeepingUnitId: 121,
            },
            {
              FreightCommissionPercentage: null,
              IsActive: true,
              ProductCommissionPercentage: null,
              SellerId: 'vtxkfj7352',
              SellerStockKeepingUnitId: '60',
              StockKeepingUnitId: 14,
            },
          ],
        },
      },
    },
  },
})

export const postSkuBindingPvtSkusellerRemoveSellerIdSellerSkuIdRoute = createRoute({
  method: 'post',
  path: '/sku-binding/pvt/skuseller/remove/{sellerId}/{sellerSkuId}',
  tags: ['SKU Bindings'],
  summary: "Remove a seller's SKU Binding",
  description:
    "Remove a seller's SKU binding, given the Seller ID and the SKU ID in the seller's store.\r\n\r\n  > ℹ This path is an updated version of `/api/catalog_system/pvt/skuseller/remove/{sellerId}/{sellerSkuId}`.",
  operationId: 'DeleteSKUsellerassociation',
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
      sellerId: z
        .string()
        .openapi({
          param: {
            description:
              'ID that identifies the seller in the marketplace. It can be the same as the seller name or a unique number. Check the **Sellers management** section in the Admin to get the correct ID.',
            in: 'path',
            name: 'sellerId',
            required: true,
            schema: { example: 'vtxkfj7352', type: 'string' },
            style: 'simple',
          },
          example: 'vtxkfj7352',
        }),
      sellerSkuId: z
        .string()
        .openapi({
          param: {
            description: "SKU ID in the seller's store.",
            in: 'path',
            name: 'sellerSkuId',
            required: true,
            schema: { example: '71', type: 'string' },
            style: 'simple',
          },
          example: '71',
        }),
    }),
  },
  responses: { 200: { description: 'OK' } },
})

export const getSkuBindingPvtSkusellerSellerIdSellerSkuIdRoute = createRoute({
  method: 'get',
  path: '/sku-binding/pvt/skuseller/{sellerId}/{sellerSkuId}',
  tags: ['SKU Bindings'],
  summary: "Get details of a seller's SKU",
  description:
    'Retrieves the details of a seller\'s SKU given a seller ID and the SKU ID in the seller\'s store. \r\n\r\n > ℹ This path is an updated version of `/api/catalog_system/pvt/skuseller/{sellerId}/{sellerSkuId}`.\r\n\r\n## Response body example\r\n\r\n```json\r\n{\r\n    "IsPersisted": true,\r\n    "IsRemoved": false,\r\n    "SkuSellerId": 102,\r\n    "UpdateDate": "2021-04-12T20:06:59.413Z",\r\n    "RequestedUpdateDate": null,\r\n    "SellerStockKeepingUnitId": "71",\r\n    "SellerId": "vtxkfj7352",\r\n    "StockKeepingUnitId": 1,\r\n    "IsActive": true\r\n}\r\n```',
  operationId: 'GetSKUseller',
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
      sellerId: z
        .string()
        .openapi({
          param: {
            description:
              'ID that identifies the seller in the marketplace. It can be the same as the seller name or a unique number. Check the **Sellers management** section in the Admin to get the correct ID.',
            in: 'path',
            name: 'sellerId',
            required: true,
            schema: { example: '101', type: 'string' },
            style: 'simple',
          },
          example: '101',
        }),
      sellerSkuId: z
        .string()
        .openapi({
          param: {
            description: "SKU ID in the seller's store.",
            in: 'path',
            name: 'sellerSkuId',
            required: true,
            schema: { example: '1', type: 'string' },
            style: 'simple',
          },
          example: '1',
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
              IsActive: z
                .boolean()
                .openapi({ description: 'Defines if the SKU binding is active.' }),
              IsPersisted: z
                .boolean()
                .openapi({ description: 'Defines if the seller is persisted.' }),
              IsRemoved: z.boolean().openapi({ description: 'Defines if the seller is removed.' }),
              RequestedUpdateDate: z
                .string()
                .nullable()
                .openapi({
                  description:
                    'Date when an SKU binding update was requested for the last time, in UTC format.',
                }),
              SellerId: z
                .string()
                .openapi({
                  description:
                    'ID that identifies the seller in the marketplace. It can be the same as the seller name or a unique number. Check the **Sellers management** section in the Admin to get the correct ID.',
                }),
              SellerStockKeepingUnitId: z.string().openapi({ description: 'SKU seller ID.' }),
              SkuSellerId: z.int32().openapi({ description: "SKU ID in the seller's store." }),
              StockKeepingUnitId: z
                .int32()
                .openapi({ description: 'SKU ID in the VTEX marketplace.' }),
              UpdateDate: z
                .string()
                .openapi({
                  description:
                    'Date when the SKU binding was updated for the last time, in UTC format.',
                }),
            })
            .openapi({
              example: {
                IsActive: true,
                IsPersisted: true,
                IsRemoved: false,
                RequestedUpdateDate: null,
                SellerId: 'myseller',
                SellerStockKeepingUnitId: '502',
                SkuSellerId: 799,
                StockKeepingUnitId: 50,
                UpdateDate: '2018-10-11T04:52:42.1',
              },
              required: [
                'IsPersisted',
                'IsRemoved',
                'SkuSellerId',
                'SellerId',
                'StockKeepingUnitId',
                'SellerStockKeepingUnitId',
                'IsActive',
                'UpdateDate',
                'RequestedUpdateDate',
              ],
            }),
        },
      },
    },
  },
})

export const putSkuBindingPvtSkusellerSellerIdSellerSkuIdRoute = createRoute({
  method: 'put',
  path: '/sku-binding/pvt/skuseller/{sellerId}/{sellerSkuId}',
  tags: ['SKU Bindings'],
  summary: "Bind a seller's SKU to another SKU",
  description:
    'Associates a seller\'s SKU to another marketplace SKU.\r\n\r\n > ℹ This path is an updated version of `/api/catalog_system/pvt/skuseller/{sellerId}/{sellerSkuId}`.\r\n\r\n## Request body example\r\n\r\n```json\r\n{\r\n    "StockKeepingUnitId": 1\r\n}\r\n```',
  operationId: 'Bindtoanothersku',
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
      sellerId: z
        .string()
        .openapi({
          param: {
            description:
              'ID that identifies the seller in the marketplace. It can be the same as the seller name or a unique number. Check the **Sellers management** section in the Admin to get the correct ID.',
            in: 'path',
            name: 'sellerId',
            required: true,
            schema: { example: '101', type: 'string' },
            style: 'simple',
          },
          example: '101',
        }),
      sellerSkuId: z
        .string()
        .openapi({
          param: {
            description: "SKU ID in the seller's store.",
            in: 'path',
            name: 'sellerSkuId',
            required: true,
            schema: { example: '1', type: 'string' },
            style: 'simple',
          },
          example: '1',
        }),
    }),
    body: {
      description: 'Request body',
      content: {
        'application/json': {
          schema: z
            .object({
              StockKeepingUnitId: z
                .int32()
                .openapi({ description: 'SKU ID in the marketplace.', example: 1 }),
            })
            .openapi({ required: ['StockKeepingUnitId'] }),
        },
      },
    },
  },
  responses: { 204: { description: 'No Content' } },
})
