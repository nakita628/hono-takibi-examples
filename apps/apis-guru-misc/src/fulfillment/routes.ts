import { createRoute, z } from '@hono/zod-openapi'

const AuthHeaderParamsSchema = z
  .string()
  .openapi({
    param: {
      description: 'OAuth 2.0 Bearer Access Token',
      in: 'header',
      name: 'Authorization',
      required: true,
      schema: { type: 'string' },
    },
  })

const ExternalSkuNameParamParamsSchema = z
  .preprocess(
    (val) =>
      val === undefined
        ? val
        : (Array.isArray(val) ? val : [val]).flatMap((item) =>
            typeof item === 'string' ? item.split(',') : [item],
          ),
    z.array(z.string()),
  )
  .exactOptional()
  .openapi({
    param: {
      description: "A CSV of sku reference names, 'skuName1' or 'skuName1,skuName2,skuName3'",
      explode: false,
      in: 'query',
      name: 'externalSkuNames',
      schema: { items: { type: 'string' }, type: 'array' },
      style: 'form',
      required: false,
    },
  })

const FromDateParamParamsSchema = z
  .string()
  .openapi({
    param: {
      description:
        'Date-time in ISO 8601 format for selecting orders after, or at, the specified time',
      in: 'query',
      name: 'fromDate',
      required: true,
      schema: { type: 'string' },
    },
  })

const HydrateParamParamsSchema = z
  .preprocess(
    (val) =>
      val === undefined
        ? val
        : (Array.isArray(val) ? val : [val]).flatMap((item) =>
            typeof item === 'string' ? item.split(',') : [item],
          ),
    z.array(z.enum(['integrator', 'lineItems', 'trackingNumbers.carrier'])),
  )
  .exactOptional()
  .openapi({
    param: {
      description:
        "Adds additional information to the response, uses a CSV format for multiple values.'",
      explode: false,
      in: 'query',
      name: 'hydrate',
      schema: {
        items: { enum: ['integrator', 'lineItems', 'trackingNumbers.carrier'], type: 'string' },
        type: 'array',
      },
      style: 'form',
      required: false,
    },
  })

const LimitParamParamsSchema = z
  .preprocess(
    (val) =>
      typeof val === 'string' &&
      /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
      (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
        ? Number(val)
        : val,
    z.int().min(1).max(200),
  )
  .default(80)
  .exactOptional()
  .openapi({
    param: {
      description: 'The numbers of items to return',
      in: 'query',
      name: 'limit',
      schema: { default: 80, maximum: 200, minimum: 1, type: 'integer' },
      required: false,
    },
  })

const MerchantParamParamsSchema = z
  .preprocess(
    (val) =>
      val === undefined
        ? val
        : (Array.isArray(val) ? val : [val]).flatMap((item) =>
            typeof item === 'string' ? item.split(',') : [item],
          ),
    z.array(
      z.preprocess(
        (val) =>
          typeof val === 'string' &&
          /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
          (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
            ? Number(val)
            : val,
        z.int(),
      ),
    ),
  )
  .exactOptional()
  .openapi({
    param: {
      description: "A CSV of merchant id, '123' or '1,2,3'",
      explode: false,
      in: 'query',
      name: 'merchantIds',
      schema: { items: { type: 'integer' }, type: 'array' },
      style: 'form',
      required: false,
    },
  })

const PageParamParamsSchema = z
  .preprocess(
    (val) =>
      typeof val === 'string' &&
      /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
      (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
        ? Number(val)
        : val,
    z.int().min(1),
  )
  .default(1)
  .exactOptional()
  .openapi({
    param: {
      description:
        'A multiplier of the number of items (limit parameter) to skip before returning results',
      in: 'query',
      name: 'page',
      schema: { default: 1, minimum: 1, type: 'integer' },
      required: false,
    },
  })

const ToDateParamParamsSchema = z
  .string()
  .openapi({
    param: {
      description:
        'Date-time in ISO 8601 format for selecting orders before, or at, the specified time',
      in: 'query',
      name: 'toDate',
      required: true,
      schema: { type: 'string' },
    },
  })

const WarehouseParamParamsSchema = z
  .preprocess(
    (val) =>
      val === undefined
        ? val
        : (Array.isArray(val) ? val : [val]).flatMap((item) =>
            typeof item === 'string' ? item.split(',') : [item],
          ),
    z.array(
      z.preprocess(
        (val) =>
          typeof val === 'string' &&
          /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
          (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
            ? Number(val)
            : val,
        z.int(),
      ),
    ),
  )
  .exactOptional()
  .openapi({
    param: {
      description: "A CSV of warehouse id, '123' or '1,2,3'",
      explode: false,
      in: 'query',
      name: 'warehouseIds',
      schema: { items: { type: 'integer' }, type: 'array' },
      style: 'form',
      required: false,
    },
  })

const ApiKeySecurityScheme = { description: '', in: 'header', name: 'x-api-key', type: 'apiKey' }

const FdcAuthSecurityScheme = {
  flows: {
    implicit: {
      authorizationUrl: 'https://api.fulfillment.com/v2/oauth/authorize',
      scopes: { oms: 'read & write access' },
    },
    password: {
      refreshUrl: 'https://api.fulfillment.com/v2/oauth/access_token',
      scopes: { oms: 'read & write access' },
      tokenUrl: 'https://api.fulfillment.com/v2/oauth/access_token',
    },
  },
  type: 'oauth2',
}

export const getAccountingRoute = createRoute({
  method: 'get',
  path: '/accounting',
  tags: ['Accounting'],
  summary: 'List Order Accounting',
  description: 'Retrieves accounting activity during the queried timespan.',
  operationId: 'get-accounting',
  request: {
    query: z.object({
      fromDate: z
        .string()
        .openapi({
          param: {
            description:
              'Orders invoice date. Date-time in ISO 8601 format for selecting orders after, or at, the specified time',
            in: 'query',
            name: 'fromDate',
            required: true,
            schema: { type: 'string' },
          },
        }),
      toDate: z
        .string()
        .openapi({
          param: {
            description:
              'Orders invoice date. Date-time in ISO 8601 format for selecting orders before, or at, the specified time',
            in: 'query',
            name: 'toDate',
            required: true,
            schema: { type: 'string' },
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
          z.int().min(1),
        )
        .default(1)
        .exactOptional()
        .openapi({
          param: {
            description:
              'A multiplier of the number of items (limit parameter) to skip before returning results',
            in: 'query',
            name: 'page',
            schema: { default: 1, minimum: 1, type: 'integer' },
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
          z.int().min(1).max(200),
        )
        .default(80)
        .exactOptional()
        .openapi({
          param: {
            description: 'The numbers of items to return',
            in: 'query',
            name: 'limit',
            schema: { default: 80, maximum: 200, minimum: 1, type: 'integer' },
            required: false,
          },
        }),
      warehouseIds: z
        .preprocess(
          (val) =>
            val === undefined
              ? val
              : (Array.isArray(val) ? val : [val]).flatMap((item) =>
                  typeof item === 'string' ? item.split(',') : [item],
                ),
          z.array(
            z.preprocess(
              (val) =>
                typeof val === 'string' &&
                /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                  ? Number(val)
                  : val,
              z.int(),
            ),
          ),
        )
        .exactOptional()
        .openapi({
          param: {
            description: "A CSV of warehouse id, '123' or '1,2,3'",
            explode: false,
            in: 'query',
            name: 'warehouseIds',
            schema: { items: { type: 'integer' }, type: 'array' },
            style: 'form',
            required: false,
          },
        }),
      orderIds: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(
            z.preprocess(
              (val) =>
                typeof val === 'string' &&
                /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                  ? Number(val)
                  : val,
              z.int(),
            ),
          ),
        )
        .exactOptional()
        .openapi({
          param: {
            description: "A CSV of FDC order id, '123' or '1,2,3'",
            in: 'query',
            name: 'orderIds',
            schema: { items: { type: 'integer' }, type: 'array' },
            required: false,
          },
        }),
      hydrate: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.literal('items')),
        )
        .openapi({
          param: {
            description:
              'Adds additional information to the response, uses a CSV format for multiple values.',
            example: 'items',
            in: 'query',
            name: 'hydrate',
            required: true,
            schema: { items: { enum: ['items'], type: 'string' }, type: 'array' },
            style: 'form',
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Accounting',
      content: {
        'application/json': {
          schema: z
            .object({
              data: z
                .array(
                  z
                    .object({
                      fees: z
                        .object({
                          box: z.float32().exactOptional().openapi({ description: '' }),
                          envelope: z.float32().exactOptional().openapi({ description: '' }),
                          fulfillment: z.float32().exactOptional().openapi({ description: '' }),
                          insert: z.float32().exactOptional().openapi({ description: '' }),
                          kitting: z.float32().exactOptional().openapi({ description: '' }),
                          picking: z.float32().exactOptional().openapi({ description: '' }),
                          postage: z.float32().exactOptional().openapi({ description: '' }),
                          print: z.float32().exactOptional().openapi({ description: '' }),
                          total: z.float32().exactOptional().openapi({ description: '' }),
                        })
                        .exactOptional()
                        .openapi({ required: [] }),
                      itemCount: z
                        .int()
                        .exactOptional()
                        .openapi({ description: 'Total number of items accounted for' }),
                      items: z
                        .array(
                          z
                            .object({
                              id: z.int().min(1).exactOptional(),
                              name: z.string().exactOptional(),
                              quantity: z.int().min(1).exactOptional(),
                              wmsItemId: z.string().exactOptional(),
                            })
                            .openapi({ required: [] }),
                        )
                        .exactOptional(),
                      merchant: z
                        .object({
                          id: z.int().exactOptional().openapi({ description: '' }),
                          name: z
                            .string()
                            .exactOptional()
                            .openapi({ description: 'Name of the merchant' }),
                        })
                        .exactOptional()
                        .openapi({ required: [] }),
                      order: z
                        .object({
                          id: z.int().exactOptional().openapi({ description: 'FDC order id' }),
                          invoiceDate: z.iso
                            .date()
                            .exactOptional()
                            .openapi({
                              description: 'Date of the order when it was recorded by accounting.',
                            }),
                          merchantOrderId: z
                            .int()
                            .exactOptional()
                            .openapi({ description: 'Merchant order id' }),
                          recordedDate: z.iso
                            .date()
                            .exactOptional()
                            .openapi({
                              description: 'Date of the order when it was initially received.',
                            }),
                        })
                        .exactOptional()
                        .openapi({ required: [] }),
                      warehouse: z
                        .object({
                          id: z.int().exactOptional().openapi({ description: '' }),
                          shortName: z
                            .string()
                            .exactOptional()
                            .openapi({ description: 'Name of the merchant' }),
                        })
                        .exactOptional()
                        .openapi({ required: [] }),
                    })
                    .openapi({ title: 'Accounting.v2', required: [] }),
                )
                .exactOptional(),
              meta: z
                .object({
                  pagination: z
                    .object({
                      count: z
                        .int()
                        .exactOptional()
                        .openapi({
                          description:
                            'Count of records returned in response, this will be equal to or less then the limit parameter',
                        }),
                      currentPage: z
                        .int()
                        .exactOptional()
                        .openapi({
                          description:
                            'Current page of the response, this will match the page parameter',
                        }),
                      total: z
                        .int()
                        .exactOptional()
                        .openapi({ description: 'Total number of records available to request' }),
                      totalPages: z
                        .int()
                        .exactOptional()
                        .openapi({ description: 'Total number of pages available to request' }),
                    })
                    .exactOptional()
                    .openapi({ title: 'Pagination.v2', required: [] }),
                })
                .exactOptional()
                .openapi({ required: [] }),
            })
            .openapi({ title: 'AccountingArray.v2', required: [] }),
        },
      },
    },
  },
  security: [{ fdcAuth: ['oms'] }],
})

export const getInventoryRoute = createRoute({
  method: 'get',
  path: '/inventory',
  tags: ['Inventory'],
  summary: 'List of Item Inventories',
  description:
    'Retrieve inventory for one or more items. This API requires elevated permissions, please speak to your success manager.',
  operationId: 'get-inventory',
  request: {
    query: z.object({
      page: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int().min(1),
        )
        .default(1)
        .exactOptional()
        .openapi({
          param: {
            description:
              'A multiplier of the number of items (limit parameter) to skip before returning results',
            in: 'query',
            name: 'page',
            schema: { default: 1, minimum: 1, type: 'integer' },
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
          z.int().min(1).max(200),
        )
        .default(80)
        .exactOptional()
        .openapi({
          param: {
            description: 'The numbers of items to return',
            in: 'query',
            name: 'limit',
            schema: { default: 80, maximum: 200, minimum: 1, type: 'integer' },
            required: false,
          },
        }),
      merchantIds: z
        .preprocess(
          (val) =>
            val === undefined
              ? val
              : (Array.isArray(val) ? val : [val]).flatMap((item) =>
                  typeof item === 'string' ? item.split(',') : [item],
                ),
          z.array(
            z.preprocess(
              (val) =>
                typeof val === 'string' &&
                /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                  ? Number(val)
                  : val,
              z.int(),
            ),
          ),
        )
        .exactOptional()
        .openapi({
          param: {
            description: "A CSV of merchant id, '123' or '1,2,3'",
            explode: false,
            in: 'query',
            name: 'merchantIds',
            schema: { items: { type: 'integer' }, type: 'array' },
            style: 'form',
            required: false,
          },
        }),
      warehouseIds: z
        .preprocess(
          (val) =>
            val === undefined
              ? val
              : (Array.isArray(val) ? val : [val]).flatMap((item) =>
                  typeof item === 'string' ? item.split(',') : [item],
                ),
          z.array(
            z.preprocess(
              (val) =>
                typeof val === 'string' &&
                /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                  ? Number(val)
                  : val,
              z.int(),
            ),
          ),
        )
        .exactOptional()
        .openapi({
          param: {
            description: "A CSV of warehouse id, '123' or '1,2,3'",
            explode: false,
            in: 'query',
            name: 'warehouseIds',
            schema: { items: { type: 'integer' }, type: 'array' },
            style: 'form',
            required: false,
          },
        }),
      externalSkuNames: z
        .preprocess(
          (val) =>
            val === undefined
              ? val
              : (Array.isArray(val) ? val : [val]).flatMap((item) =>
                  typeof item === 'string' ? item.split(',') : [item],
                ),
          z.array(z.string()),
        )
        .exactOptional()
        .openapi({
          param: {
            description: "A CSV of sku reference names, 'skuName1' or 'skuName1,skuName2,skuName3'",
            explode: false,
            in: 'query',
            name: 'externalSkuNames',
            schema: { items: { type: 'string' }, type: 'array' },
            style: 'form',
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Found Inventory',
      content: {
        'application/json': {
          schema: z
            .object({
              data: z
                .array(
                  z
                    .object({
                      item: z
                        .object({
                          id: z
                            .int()
                            .exactOptional()
                            .openapi({ description: 'FDC ID for this Item' }),
                          skuReference: z
                            .string()
                            .exactOptional()
                            .openapi({ description: 'Sku reference name for this item' }),
                        })
                        .exactOptional()
                        .openapi({
                          description: 'Item this inventory data is based on',
                          required: [],
                        }),
                      merchant: z
                        .object({
                          name: z
                            .string()
                            .exactOptional()
                            .openapi({ description: 'Merchants name for this item' }),
                        })
                        .exactOptional()
                        .openapi({ description: 'Merchant that owns this item', required: [] }),
                      quantity: z
                        .object({
                          total: z
                            .object({
                              availableToPromise: z
                                .int()
                                .exactOptional()
                                .openapi({
                                  description:
                                    'Number of items that are available to be used in an order',
                                }),
                            })
                            .exactOptional()
                            .openapi({ required: [] }),
                        })
                        .exactOptional()
                        .openapi({ required: [] }),
                    })
                    .openapi({ title: 'ItemInventory.v2', required: [] }),
                )
                .exactOptional(),
              meta: z
                .object({
                  pagination: z
                    .object({
                      count: z
                        .int()
                        .exactOptional()
                        .openapi({
                          description:
                            'Count of records returned in response, this will be equal to or less then the limit parameter',
                        }),
                      currentPage: z
                        .int()
                        .exactOptional()
                        .openapi({
                          description:
                            'Current page of the response, this will match the page parameter',
                        }),
                      total: z
                        .int()
                        .exactOptional()
                        .openapi({ description: 'Total number of records available to request' }),
                      totalPages: z
                        .int()
                        .exactOptional()
                        .openapi({ description: 'Total number of pages available to request' }),
                    })
                    .exactOptional()
                    .openapi({ title: 'Pagination.v2', required: [] }),
                })
                .exactOptional()
                .openapi({ required: [] }),
            })
            .openapi({ title: 'ItemInventoryArray.v2', required: [] }),
        },
      },
    },
    400: {
      description: 'Bad Request',
      content: {
        'application/json': {
          schema: z
            .object({ message: z.string().exactOptional() })
            .openapi({ title: 'ErrorStandard.v2', required: [] }),
        },
      },
    },
    401: {
      description: 'Unauthorized',
      content: {
        'application/json': {
          schema: z
            .object({ message: z.string().exactOptional() })
            .openapi({ title: 'ErrorStandard.v2', required: [] }),
        },
      },
    },
    403: {
      description: 'Access Denied',
      content: {
        'application/json': {
          schema: z
            .object({ message: z.string().exactOptional() })
            .openapi({ title: 'ErrorStandard.v2', required: [] }),
        },
      },
    },
    404: {
      description: 'No Inventory Found',
      content: {
        'application/json': {
          schema: z
            .object({ message: z.string().exactOptional() })
            .openapi({ title: 'ErrorStandard.v2', required: [] }),
        },
      },
    },
  },
  security: [{ fdcAuth: ['oms'] }],
})

export const postOauthAccessTokenRoute = createRoute({
  method: 'post',
  path: '/oauth/access_token',
  tags: ['Auth'],
  summary: 'Generate an Access Token',
  description:
    'By default tokens are valid for 7 days while refresh tokens are valid for 30 days. If your `grant_type` is "password" include the `username` and `password`, if however your `grant_type` is "refresh_token" the username/password are not required, instead set the `refresh_token`',
  externalDocs: {
    description: 'More Information on Refresh Tokens',
    url: '#section/Getting-Started/Perpetuating-Access',
  },
  operationId: 'post-oauth-access_token',
  request: {
    body: {
      description: 'Get an access token',
      content: {
        'application/json': {
          schema: z
            .xor([
              z
                .object({
                  password: z.string().openapi({ description: '' }),
                  username: z.string().openapi({ description: '' }),
                })
                .openapi({ required: ['username', 'password'] })
                .and(
                  z
                    .object({
                      client_id: z
                        .string()
                        .openapi({ description: 'Id and secret provided by FDC' }),
                      client_secret: z.string(),
                      grant_type: z
                        .enum(['password', 'refresh_token'])
                        .openapi({
                          description: "Indicates how you're authenticating your request",
                        }),
                      scope: z
                        .literal('oms')
                        .default('oms')
                        .openapi({ description: 'Currently limited to Order Management System' }),
                    })
                    .openapi({
                      required: ['scope', 'grant_type', 'client_secret', 'client_id'],
                      title: 'AccessTokenRequestBase.v2',
                    }),
                )
                .openapi({ title: 'AccessTokenRequestPassword.v2' }),
              z
                .object({
                  refresh_token: z
                    .string()
                    .openapi({
                      description:
                        'You may request future tokens with the `refresh_token` from your previous `/oauth/access_token` request',
                    }),
                })
                .openapi({ required: ['refresh_token'] })
                .and(
                  z
                    .object({
                      client_id: z
                        .string()
                        .openapi({ description: 'Id and secret provided by FDC' }),
                      client_secret: z.string(),
                      grant_type: z
                        .enum(['password', 'refresh_token'])
                        .openapi({
                          description: "Indicates how you're authenticating your request",
                        }),
                      scope: z
                        .literal('oms')
                        .default('oms')
                        .openapi({ description: 'Currently limited to Order Management System' }),
                    })
                    .openapi({
                      required: ['scope', 'grant_type', 'client_secret', 'client_id'],
                      title: 'AccessTokenRequestBase.v2',
                    }),
                )
                .openapi({ title: 'AccessTokenRequestRefresh.v2' }),
            ])
            .openapi({ title: 'AccessTokenRequest.v2' }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Authorized',
      content: {
        'application/json': {
          schema: z
            .object({
              access_token: z.string().exactOptional(),
              expires_in: z.int().exactOptional(),
              refresh_token: z.string().exactOptional(),
              token_type: z.string().default('Bearer').exactOptional(),
            })
            .openapi({ title: 'AccessTokenResponse.v2', required: [] }),
        },
      },
    },
    401: {
      description: 'Unauthorized',
      content: {
        'application/json': {
          schema: z
            .object({ message: z.string().exactOptional() })
            .openapi({ title: 'ErrorStandard.v2', required: [] }),
        },
      },
    },
  },
})

export const getOrdersRoute = createRoute({
  method: 'get',
  path: '/orders',
  tags: ['Orders'],
  summary: 'List of Orders',
  description: 'Retrieve many orders at once',
  operationId: 'get-orders',
  request: {
    query: z.object({
      fromDate: FromDateParamParamsSchema,
      toDate: ToDateParamParamsSchema,
      merchantIds: MerchantParamParamsSchema,
      warehouseIds: WarehouseParamParamsSchema,
      page: PageParamParamsSchema,
      limit: LimitParamParamsSchema,
      hydrate: HydrateParamParamsSchema,
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': {
          schema: z
            .xor([
              z
                .object({
                  currentStatus: z
                    .object({
                      createdBy: z
                        .object({ id: z.int() })
                        .exactOptional()
                        .openapi({ required: ['id'], title: 'User.v2' }),
                      date: z.iso
                        .datetime({ offset: true })
                        .exactOptional()
                        .openapi({ description: 'DateTime of Status Event' }),
                      id: z.int(),
                      reason: z
                        .string()
                        .exactOptional()
                        .openapi({ description: 'Explanation for status' }),
                      status: z
                        .object({
                          actionRequiredBy: z
                            .object({
                              id: z.int().exactOptional(),
                              name: z
                                .string()
                                .exactOptional()
                                .openapi({
                                  description:
                                    'Human readable description of responsible party to resolve the issue',
                                }),
                            })
                            .exactOptional()
                            .openapi({
                              description: 'Responsibility for resolving this issue',
                              required: [],
                            }),
                          code: z
                            .string()
                            .regex(/^\d{6}$/)
                            .openapi({
                              description:
                                'Code, see [status codes](#section/Getting-Started/Status-Codes)',
                            }),
                          detail: z.string().exactOptional(),
                          detailCode: z.string().regex(/^\d{2}$/),
                          id: z
                            .int()
                            .exactOptional()
                            .openapi({ description: 'Depricated, use code instead' }),
                          isClosed: z
                            .boolean()
                            .exactOptional()
                            .openapi({
                              description: 'Depricated, does this status event close the order',
                            }),
                          name: z
                            .string()
                            .exactOptional()
                            .openapi({ description: 'Depricated, use stage/state instead' }),
                          reason: z.string().exactOptional().openapi({ description: 'Depricated' }),
                          stage: z
                            .object({
                              code: z.string().exactOptional(),
                              name: z.string().exactOptional(),
                            })
                            .openapi({ required: [] }),
                          state: z
                            .object({
                              code: z.string().exactOptional(),
                              name: z.string().exactOptional(),
                            })
                            .openapi({ required: [] }),
                        })
                        .exactOptional()
                        .openapi({
                          required: ['stage', 'state', 'detailCode', 'code'],
                          title: 'StatusType.v2',
                        }),
                    })
                    .openapi({ required: ['id'], title: 'StatusEvent.v2' }),
                  departDate: z.iso
                    .datetime({ offset: true })
                    .exactOptional()
                    .openapi({ description: 'DateTime order departed an FDC warehouse' }),
                  dispatchDate: z.iso
                    .datetime({ offset: true })
                    .exactOptional()
                    .openapi({
                      description: 'DateTime order was dispatched for fulfillment by FDC',
                    }),
                  id: z.int().openapi({ description: 'FDC ID for this order' }),
                  merchant: z
                    .object({
                      id: z.int(),
                      name: z.string().openapi({ description: 'Merchant Company Name' }),
                    })
                    .openapi({ required: ['id', 'name'], title: 'Merchant.v2' }),
                  merchantOrderId: z.string().openapi({ description: 'Merchant provided ID' }),
                  merchantShippingMethod: z
                    .string()
                    .openapi({ description: 'Requested ship method' }),
                  originalConsignee: z
                    .object({
                      address1: z.string(),
                      address2: z.string().exactOptional(),
                      addressLocality: z.string().openapi({ description: 'City' }),
                      addressRegion: z.string().openapi({ description: 'Province / State' }),
                      companyName: z.string().exactOptional(),
                      country: z
                        .string()
                        .openapi({ description: 'Ideally provide the two character ISO code' }),
                      email: z.string().exactOptional(),
                      firstName: z.string(),
                      id: z.int(),
                      iso: z
                        .object({
                          id: z.int().exactOptional(),
                          iso2: z
                            .string()
                            .regex(/[A-Z]{2}/)
                            .exactOptional()
                            .openapi({ description: 'Two character ISO code' }),
                          name: z.string().exactOptional().openapi({ description: 'Country Name' }),
                        })
                        .exactOptional()
                        .openapi({ title: 'IsoCountry.v2', required: [] }),
                      lastName: z.string(),
                      phone: z.string().exactOptional(),
                      postalCode: z.string().openapi({ description: 'Postal Code / Zip' }),
                      updatedAt: z.iso.datetime({ offset: true }).exactOptional(),
                      updatedBy: z
                        .object({ id: z.int() })
                        .exactOptional()
                        .openapi({ required: ['id'], title: 'User.v2' }),
                    })
                    .openapi({
                      description: '',
                      required: [
                        'id',
                        'country',
                        'postalCode',
                        'addressRegion',
                        'addressLocality',
                        'address1',
                        'lastName',
                        'firstName',
                      ],
                      title: 'Consignee.v2',
                    }),
                  parentOrder: z
                    .object({
                      id: z
                        .int()
                        .exactOptional()
                        .openapi({ description: 'Reference to parent `id` if order was grouped' }),
                    })
                    .exactOptional()
                    .openapi({ required: [] }),
                  purchaseOrderNum: z
                    .string()
                    .exactOptional()
                    .openapi({ description: 'Merchant provided PO#' }),
                  recordedOn: z.iso
                    .datetime({ offset: true })
                    .openapi({ description: 'DateTime order was recorded by FDC' }),
                  trackingNumbers: z
                    .array(
                      z
                        .object({
                          barcodeScanValue: z
                            .string()
                            .exactOptional()
                            .openapi({
                              deprecated: true,
                              description:
                                'The computer readable alternative to the human readable',
                            }),
                          carrier: z
                            .object({ id: z.int() })
                            .exactOptional()
                            .openapi({ required: ['id'], title: 'CarrierSimple.v2' }),
                          value: z
                            .string()
                            .exactOptional()
                            .openapi({
                              description:
                                'The human readable tracking number recipients (consignee) expect',
                            }),
                        })
                        .openapi({
                          title: 'TrackingNumber.v2',
                          'x-tags': ['Tracking'],
                          required: [],
                        }),
                    )
                    .exactOptional(),
                  validatedConsignee: z
                    .object({
                      address1: z.string(),
                      address2: z.string().exactOptional(),
                      addressLocality: z.string().openapi({ description: 'City' }),
                      addressRegion: z.string().openapi({ description: 'Province / State' }),
                      companyName: z.string().exactOptional(),
                      country: z
                        .string()
                        .openapi({ description: 'Ideally provide the two character ISO code' }),
                      email: z.string().exactOptional(),
                      firstName: z.string(),
                      id: z.int(),
                      iso: z
                        .object({
                          id: z.int().exactOptional(),
                          iso2: z
                            .string()
                            .regex(/[A-Z]{2}/)
                            .exactOptional()
                            .openapi({ description: 'Two character ISO code' }),
                          name: z.string().exactOptional().openapi({ description: 'Country Name' }),
                        })
                        .exactOptional()
                        .openapi({ title: 'IsoCountry.v2', required: [] }),
                      lastName: z.string(),
                      phone: z.string().exactOptional(),
                      postalCode: z.string().openapi({ description: 'Postal Code / Zip' }),
                      updatedAt: z.iso.datetime({ offset: true }).exactOptional(),
                      updatedBy: z
                        .object({ id: z.int() })
                        .exactOptional()
                        .openapi({ required: ['id'], title: 'User.v2' }),
                    })
                    .openapi({
                      description: '',
                      required: [
                        'id',
                        'country',
                        'postalCode',
                        'addressRegion',
                        'addressLocality',
                        'address1',
                        'lastName',
                        'firstName',
                      ],
                      title: 'Consignee.v2',
                    }),
                  warehouse: z
                    .object({ id: z.int() })
                    .exactOptional()
                    .openapi({ description: '', required: ['id'], title: 'Warehouse.v2' }),
                })
                .openapi({
                  required: [
                    'id',
                    'validatedConsignee',
                    'originalConsignee',
                    'currentStatus',
                    'merchant',
                    'recordedOn',
                    'merchantShippingMethod',
                    'merchantOrderId',
                  ],
                  title: 'OrderResponse.v2',
                }),
              z
                .object({
                  currentStatus: z
                    .object({
                      createdBy: z
                        .object({ id: z.int() })
                        .exactOptional()
                        .openapi({ required: ['id'], title: 'User.v2' }),
                      date: z.iso
                        .datetime({ offset: true })
                        .exactOptional()
                        .openapi({ description: 'DateTime of Status Event' }),
                      id: z.int(),
                      reason: z
                        .string()
                        .exactOptional()
                        .openapi({ description: 'Explanation for status' }),
                      status: z
                        .object({
                          actionRequiredBy: z
                            .object({
                              id: z.int().exactOptional(),
                              name: z
                                .string()
                                .exactOptional()
                                .openapi({
                                  description:
                                    'Human readable description of responsible party to resolve the issue',
                                }),
                            })
                            .exactOptional()
                            .openapi({
                              description: 'Responsibility for resolving this issue',
                              required: [],
                            }),
                          code: z
                            .string()
                            .regex(/^\d{6}$/)
                            .openapi({
                              description:
                                'Code, see [status codes](#section/Getting-Started/Status-Codes)',
                            }),
                          detail: z.string().exactOptional(),
                          detailCode: z.string().regex(/^\d{2}$/),
                          id: z
                            .int()
                            .exactOptional()
                            .openapi({ description: 'Depricated, use code instead' }),
                          isClosed: z
                            .boolean()
                            .exactOptional()
                            .openapi({
                              description: 'Depricated, does this status event close the order',
                            }),
                          name: z
                            .string()
                            .exactOptional()
                            .openapi({ description: 'Depricated, use stage/state instead' }),
                          reason: z.string().exactOptional().openapi({ description: 'Depricated' }),
                          stage: z
                            .object({
                              code: z.string().exactOptional(),
                              name: z.string().exactOptional(),
                            })
                            .openapi({ required: [] }),
                          state: z
                            .object({
                              code: z.string().exactOptional(),
                              name: z.string().exactOptional(),
                            })
                            .openapi({ required: [] }),
                        })
                        .exactOptional()
                        .openapi({
                          required: ['stage', 'state', 'detailCode', 'code'],
                          title: 'StatusType.v2',
                        }),
                    })
                    .openapi({ required: ['id'], title: 'StatusEvent.v2' }),
                  departDate: z.iso
                    .datetime({ offset: true })
                    .exactOptional()
                    .openapi({ description: 'DateTime order departed an FDC warehouse' }),
                  dispatchDate: z.iso
                    .datetime({ offset: true })
                    .exactOptional()
                    .openapi({
                      description: 'DateTime order was dispatched for fulfillment by FDC',
                    }),
                  id: z.int().openapi({ description: 'FDC ID for this order' }),
                  merchant: z
                    .object({
                      id: z.int(),
                      name: z.string().openapi({ description: 'Merchant Company Name' }),
                    })
                    .openapi({ required: ['id', 'name'], title: 'Merchant.v2' }),
                  merchantOrderId: z.string().openapi({ description: 'Merchant provided ID' }),
                  merchantShippingMethod: z
                    .string()
                    .openapi({ description: 'Requested ship method' }),
                  originalConsignee: z
                    .object({
                      address1: z.string(),
                      address2: z.string().exactOptional(),
                      addressLocality: z.string().openapi({ description: 'City' }),
                      addressRegion: z.string().openapi({ description: 'Province / State' }),
                      companyName: z.string().exactOptional(),
                      country: z
                        .string()
                        .openapi({ description: 'Ideally provide the two character ISO code' }),
                      email: z.string().exactOptional(),
                      firstName: z.string(),
                      id: z.int(),
                      iso: z
                        .object({
                          id: z.int().exactOptional(),
                          iso2: z
                            .string()
                            .regex(/[A-Z]{2}/)
                            .exactOptional()
                            .openapi({ description: 'Two character ISO code' }),
                          name: z.string().exactOptional().openapi({ description: 'Country Name' }),
                        })
                        .exactOptional()
                        .openapi({ title: 'IsoCountry.v2', required: [] }),
                      lastName: z.string(),
                      phone: z.string().exactOptional(),
                      postalCode: z.string().openapi({ description: 'Postal Code / Zip' }),
                      updatedAt: z.iso.datetime({ offset: true }).exactOptional(),
                      updatedBy: z
                        .object({ id: z.int() })
                        .exactOptional()
                        .openapi({ required: ['id'], title: 'User.v2' }),
                    })
                    .openapi({
                      description: '',
                      required: [
                        'id',
                        'country',
                        'postalCode',
                        'addressRegion',
                        'addressLocality',
                        'address1',
                        'lastName',
                        'firstName',
                      ],
                      title: 'Consignee.v2',
                    }),
                  parentOrder: z
                    .object({
                      id: z
                        .int()
                        .exactOptional()
                        .openapi({ description: 'Reference to parent `id` if order was grouped' }),
                    })
                    .exactOptional()
                    .openapi({ required: [] }),
                  purchaseOrderNum: z
                    .string()
                    .exactOptional()
                    .openapi({ description: 'Merchant provided PO#' }),
                  recordedOn: z.iso
                    .datetime({ offset: true })
                    .openapi({ description: 'DateTime order was recorded by FDC' }),
                  trackingNumbers: z
                    .array(
                      z
                        .object({
                          barcodeScanValue: z
                            .string()
                            .exactOptional()
                            .openapi({
                              deprecated: true,
                              description:
                                'The computer readable alternative to the human readable',
                            }),
                          carrier: z
                            .object({ id: z.int() })
                            .exactOptional()
                            .openapi({ required: ['id'], title: 'CarrierSimple.v2' }),
                          value: z
                            .string()
                            .exactOptional()
                            .openapi({
                              description:
                                'The human readable tracking number recipients (consignee) expect',
                            }),
                        })
                        .openapi({
                          title: 'TrackingNumber.v2',
                          'x-tags': ['Tracking'],
                          required: [],
                        }),
                    )
                    .exactOptional(),
                  validatedConsignee: z
                    .object({
                      address1: z.string(),
                      address2: z.string().exactOptional(),
                      addressLocality: z.string().openapi({ description: 'City' }),
                      addressRegion: z.string().openapi({ description: 'Province / State' }),
                      companyName: z.string().exactOptional(),
                      country: z
                        .string()
                        .openapi({ description: 'Ideally provide the two character ISO code' }),
                      email: z.string().exactOptional(),
                      firstName: z.string(),
                      id: z.int(),
                      iso: z
                        .object({
                          id: z.int().exactOptional(),
                          iso2: z
                            .string()
                            .regex(/[A-Z]{2}/)
                            .exactOptional()
                            .openapi({ description: 'Two character ISO code' }),
                          name: z.string().exactOptional().openapi({ description: 'Country Name' }),
                        })
                        .exactOptional()
                        .openapi({ title: 'IsoCountry.v2', required: [] }),
                      lastName: z.string(),
                      phone: z.string().exactOptional(),
                      postalCode: z.string().openapi({ description: 'Postal Code / Zip' }),
                      updatedAt: z.iso.datetime({ offset: true }).exactOptional(),
                      updatedBy: z
                        .object({ id: z.int() })
                        .exactOptional()
                        .openapi({ required: ['id'], title: 'User.v2' }),
                    })
                    .openapi({
                      description: '',
                      required: [
                        'id',
                        'country',
                        'postalCode',
                        'addressRegion',
                        'addressLocality',
                        'address1',
                        'lastName',
                        'firstName',
                      ],
                      title: 'Consignee.v2',
                    }),
                  warehouse: z
                    .object({ id: z.int() })
                    .exactOptional()
                    .openapi({ description: '', required: ['id'], title: 'Warehouse.v2' }),
                })
                .openapi({
                  required: [
                    'id',
                    'validatedConsignee',
                    'originalConsignee',
                    'currentStatus',
                    'merchant',
                    'recordedOn',
                    'merchantShippingMethod',
                    'merchantOrderId',
                  ],
                  title: 'OrderResponse.v2',
                })
                .and(
                  z
                    .object({
                      integrator: z.string().exactOptional().openapi({ description: '' }),
                      lineItems: z
                        .array(
                          z
                            .object({
                              id: z.int().exactOptional(),
                              inventoryDetails: z
                                .array(
                                  z
                                    .object({
                                      expirationDate: z.iso.date().exactOptional(),
                                      lotNum: z.string().exactOptional(),
                                      quantity: z.int().exactOptional(),
                                      serialNum: z.string().exactOptional(),
                                    })
                                    .openapi({ required: [] }),
                                )
                                .exactOptional(),
                              lineDetails: z
                                .object({
                                  description: z.string().exactOptional(),
                                  externalSku: z.string().exactOptional(),
                                  id: z.int().exactOptional(),
                                  name: z.string().exactOptional(),
                                  totalQuantity: z.int().exactOptional(),
                                })
                                .exactOptional()
                                .openapi({ required: [] }),
                              requestedSkuData: z
                                .object({
                                  declaredValue: z
                                    .string()
                                    .regex(/^[0-9.]+$/)
                                    .exactOptional(),
                                  id: z.int().exactOptional(),
                                  quantity: z.int().exactOptional(),
                                  sku: z.string().exactOptional(),
                                })
                                .exactOptional()
                                .openapi({ required: [] }),
                            })
                            .openapi({
                              description: '',
                              title: 'LineItemsResponse.v2',
                              required: [],
                            }),
                        )
                        .exactOptional(),
                      trackingNumbers: z
                        .array(
                          z
                            .object({
                              carrier: z
                                .object({
                                  canReprintPostage: z.boolean().exactOptional(),
                                  enabled: z.boolean().exactOptional(),
                                  id: z.int(),
                                  includePeripherals: z.boolean().exactOptional(),
                                  internalRatesOnly: z.boolean().exactOptional(),
                                  name: z.string(),
                                  requiresDimensions: z.boolean().exactOptional(),
                                  symbol: z.string(),
                                })
                                .exactOptional()
                                .openapi({
                                  required: ['id', 'name', 'symbol'],
                                  title: 'CarrierHydrated.v2',
                                }),
                            })
                            .openapi({ required: [] }),
                        )
                        .exactOptional(),
                    })
                    .openapi({ required: [] }),
                )
                .openapi({
                  description:
                    'Requires hydrate to be set in the request and the corresponding node will be filled.',
                  title: 'OrderResponseHydrate.v2',
                }),
            ])
            .openapi({
              description: 'Standard Order Response or a Hydrated Response',
              title: 'OrderResponseOneOf.v2',
            }),
        },
      },
    },
    404: {
      description: 'No Orders Found',
      content: {
        'application/json': {
          schema: z
            .object({ message: z.string().exactOptional() })
            .openapi({ title: 'ErrorStandard.v2', required: [] }),
        },
      },
    },
  },
  security: [{ fdcAuth: ['oms'] }],
})

export const postOrdersRoute = createRoute({
  method: 'post',
  path: '/orders',
  tags: ['Orders'],
  summary: 'New Order',
  description:
    "Error Notes&#58;\n* When `409 Conflict` is a 'Duplicate Order' the `context` will include the FDC `id`, see samples.\n",
  operationId: 'post-orders',
  request: {
    body: {
      description: 'The order to create',
      content: {
        'application/json': {
          schema: z
            .object({
              integrator: z
                .enum([
                  '1ShoppingCart',
                  '3dCart',
                  'AdobeBC',
                  'AmazonAU',
                  'AmazonEU',
                  'AmazonNA',
                  'BigCommerce',
                  'BrandBoom',
                  'BrightPearl',
                  'BuyGoods',
                  'Celery',
                  'ChannelAdvisor',
                  'Clickbank',
                  'CommerceHub',
                  'Custom',
                  'Demandware',
                  'Ebay',
                  'Ecwid',
                  'Etsy',
                  'FoxyCart',
                  'Goodsie',
                  'Infusionsoft',
                  'Konnektive',
                  'LimeLight',
                  'Linio',
                  'Linnworks',
                  'Magento',
                  'Netsuite',
                  'NewEgg',
                  'Nexternal',
                  'NuOrder',
                  'Opencart',
                  'OrderWave',
                  'osCommerce1',
                  'Overstock',
                  'PayPal',
                  'PrestaShop',
                  'Pricefalls',
                  'Quickbooks',
                  'Rakuten',
                  'Sears',
                  'Sellbrite',
                  'SellerCloud',
                  'Shipstation',
                  'Shopify',
                  'Skubana',
                  'SolidCommerce',
                  'SparkPay',
                  'SpreeCommerce',
                  'spsCommerce',
                  'StitchLabs',
                  'StoneEdge',
                  'TradeGecko',
                  'UltraCart',
                  'Volusion',
                  'VTEX',
                  'Walmart',
                  'WooCommerce',
                  'Yahoo',
                ])
                .exactOptional()
                .openapi({
                  description:
                    'Use of this property requires special permission and must be discussed with your account executive; values are restricted while custom values need to be accepted by your AE.',
                }),
              items: z.array(
                z
                  .object({
                    declaredValue: z
                      .string()
                      .regex(/^[0-9.]+$/)
                      .openapi({
                        description:
                          'Using USD, a per unit value of a single SKU. If your declaring a kit this is the sum total for a single kit. In both scenarios we will multiply the `declaredValue` against the `quantity` for customs declaration.',
                        example: '129.99',
                      }),
                    quantity: z.int().min(1),
                    sku: z.string(),
                  })
                  .openapi({ required: ['quantity', 'sku', 'declaredValue'] }),
              ),
              merchantId: z
                .int()
                .exactOptional()
                .openapi({
                  description:
                    'Necessary if you have a multitenancy account, otherwise we will associate the order with your account',
                }),
              merchantOrderId: z
                .string()
                .openapi({ description: 'Unique ID provided by the merchant' }),
              notes: z.string().exactOptional(),
              recipient: z
                .object({
                  address1: z.string().openapi({ description: 'Address Line 1' }),
                  address2: z.string().exactOptional().openapi({ description: 'Address Line 2' }),
                  addressLocality: z.string().openapi({ description: 'City' }),
                  addressRegion: z.string().openapi({ description: 'Province / State' }),
                  companyName: z.string().exactOptional(),
                  country: z
                    .string()
                    .openapi({
                      description:
                        'Country, for best results please provide the two character ISO code',
                    }),
                  email: z
                    .string()
                    .openapi({ description: 'Email, required for international shipments' }),
                  firstName: z.string(),
                  lastName: z.string(),
                  phone: z
                    .string()
                    .openapi({ description: 'Phone number, required for international shipments' }),
                  postalCode: z
                    .string()
                    .exactOptional()
                    .openapi({ description: 'Postal Code / Zip' }),
                })
                .openapi({
                  required: [
                    'country',
                    'addressRegion',
                    'addressLocality',
                    'address1',
                    'phone',
                    'lastName',
                    'firstName',
                    'email',
                  ],
                  title: 'ConsigneeNew.v2',
                }),
              shippingMethod: z
                .string()
                .openapi({
                  description:
                    'Custom for you, it will be mapped to an actual method within the OMS UI',
                  example: 'Ground',
                }),
              warehouse: z
                .object({ id: z.int().exactOptional() })
                .exactOptional()
                .openapi({
                  description:
                    'We automatically select a warehouse based on inventory availability, requested carrier and delivery schedule, and carrier cost. You may however override this process. Because this is not recommended please inform your AE prior to using so they may enable this feature.',
                  required: [],
                }),
            })
            .openapi({
              required: ['merchantOrderId', 'shippingMethod', 'recipient', 'items'],
              title: 'OrderRequest.v2',
            }),
        },
      },
      required: true,
    },
  },
  responses: {
    201: {
      description: 'Order Created',
      content: {
        'application/json': {
          schema: z
            .object({
              currentStatus: z
                .object({
                  createdBy: z
                    .object({ id: z.int() })
                    .exactOptional()
                    .openapi({ required: ['id'], title: 'User.v2' }),
                  date: z.iso
                    .datetime({ offset: true })
                    .exactOptional()
                    .openapi({ description: 'DateTime of Status Event' }),
                  id: z.int(),
                  reason: z
                    .string()
                    .exactOptional()
                    .openapi({ description: 'Explanation for status' }),
                  status: z
                    .object({
                      actionRequiredBy: z
                        .object({
                          id: z.int().exactOptional(),
                          name: z
                            .string()
                            .exactOptional()
                            .openapi({
                              description:
                                'Human readable description of responsible party to resolve the issue',
                            }),
                        })
                        .exactOptional()
                        .openapi({
                          description: 'Responsibility for resolving this issue',
                          required: [],
                        }),
                      code: z
                        .string()
                        .regex(/^\d{6}$/)
                        .openapi({
                          description:
                            'Code, see [status codes](#section/Getting-Started/Status-Codes)',
                        }),
                      detail: z.string().exactOptional(),
                      detailCode: z.string().regex(/^\d{2}$/),
                      id: z
                        .int()
                        .exactOptional()
                        .openapi({ description: 'Depricated, use code instead' }),
                      isClosed: z
                        .boolean()
                        .exactOptional()
                        .openapi({
                          description: 'Depricated, does this status event close the order',
                        }),
                      name: z
                        .string()
                        .exactOptional()
                        .openapi({ description: 'Depricated, use stage/state instead' }),
                      reason: z.string().exactOptional().openapi({ description: 'Depricated' }),
                      stage: z
                        .object({
                          code: z.string().exactOptional(),
                          name: z.string().exactOptional(),
                        })
                        .openapi({ required: [] }),
                      state: z
                        .object({
                          code: z.string().exactOptional(),
                          name: z.string().exactOptional(),
                        })
                        .openapi({ required: [] }),
                    })
                    .exactOptional()
                    .openapi({
                      required: ['stage', 'state', 'detailCode', 'code'],
                      title: 'StatusType.v2',
                    }),
                })
                .openapi({ required: ['id'], title: 'StatusEvent.v2' }),
              departDate: z.iso
                .datetime({ offset: true })
                .exactOptional()
                .openapi({ description: 'DateTime order departed an FDC warehouse' }),
              dispatchDate: z.iso
                .datetime({ offset: true })
                .exactOptional()
                .openapi({ description: 'DateTime order was dispatched for fulfillment by FDC' }),
              id: z.int().openapi({ description: 'FDC ID for this order' }),
              merchant: z
                .object({
                  id: z.int(),
                  name: z.string().openapi({ description: 'Merchant Company Name' }),
                })
                .openapi({ required: ['id', 'name'], title: 'Merchant.v2' }),
              merchantOrderId: z.string().openapi({ description: 'Merchant provided ID' }),
              merchantShippingMethod: z.string().openapi({ description: 'Requested ship method' }),
              originalConsignee: z
                .object({
                  address1: z.string(),
                  address2: z.string().exactOptional(),
                  addressLocality: z.string().openapi({ description: 'City' }),
                  addressRegion: z.string().openapi({ description: 'Province / State' }),
                  companyName: z.string().exactOptional(),
                  country: z
                    .string()
                    .openapi({ description: 'Ideally provide the two character ISO code' }),
                  email: z.string().exactOptional(),
                  firstName: z.string(),
                  id: z.int(),
                  iso: z
                    .object({
                      id: z.int().exactOptional(),
                      iso2: z
                        .string()
                        .regex(/[A-Z]{2}/)
                        .exactOptional()
                        .openapi({ description: 'Two character ISO code' }),
                      name: z.string().exactOptional().openapi({ description: 'Country Name' }),
                    })
                    .exactOptional()
                    .openapi({ title: 'IsoCountry.v2', required: [] }),
                  lastName: z.string(),
                  phone: z.string().exactOptional(),
                  postalCode: z.string().openapi({ description: 'Postal Code / Zip' }),
                  updatedAt: z.iso.datetime({ offset: true }).exactOptional(),
                  updatedBy: z
                    .object({ id: z.int() })
                    .exactOptional()
                    .openapi({ required: ['id'], title: 'User.v2' }),
                })
                .openapi({
                  description: '',
                  required: [
                    'id',
                    'country',
                    'postalCode',
                    'addressRegion',
                    'addressLocality',
                    'address1',
                    'lastName',
                    'firstName',
                  ],
                  title: 'Consignee.v2',
                }),
              parentOrder: z
                .object({
                  id: z
                    .int()
                    .exactOptional()
                    .openapi({ description: 'Reference to parent `id` if order was grouped' }),
                })
                .exactOptional()
                .openapi({ required: [] }),
              purchaseOrderNum: z
                .string()
                .exactOptional()
                .openapi({ description: 'Merchant provided PO#' }),
              recordedOn: z.iso
                .datetime({ offset: true })
                .openapi({ description: 'DateTime order was recorded by FDC' }),
              trackingNumbers: z
                .array(
                  z
                    .object({
                      barcodeScanValue: z
                        .string()
                        .exactOptional()
                        .openapi({
                          deprecated: true,
                          description: 'The computer readable alternative to the human readable',
                        }),
                      carrier: z
                        .object({ id: z.int() })
                        .exactOptional()
                        .openapi({ required: ['id'], title: 'CarrierSimple.v2' }),
                      value: z
                        .string()
                        .exactOptional()
                        .openapi({
                          description:
                            'The human readable tracking number recipients (consignee) expect',
                        }),
                    })
                    .openapi({ title: 'TrackingNumber.v2', 'x-tags': ['Tracking'], required: [] }),
                )
                .exactOptional(),
              validatedConsignee: z
                .object({
                  address1: z.string(),
                  address2: z.string().exactOptional(),
                  addressLocality: z.string().openapi({ description: 'City' }),
                  addressRegion: z.string().openapi({ description: 'Province / State' }),
                  companyName: z.string().exactOptional(),
                  country: z
                    .string()
                    .openapi({ description: 'Ideally provide the two character ISO code' }),
                  email: z.string().exactOptional(),
                  firstName: z.string(),
                  id: z.int(),
                  iso: z
                    .object({
                      id: z.int().exactOptional(),
                      iso2: z
                        .string()
                        .regex(/[A-Z]{2}/)
                        .exactOptional()
                        .openapi({ description: 'Two character ISO code' }),
                      name: z.string().exactOptional().openapi({ description: 'Country Name' }),
                    })
                    .exactOptional()
                    .openapi({ title: 'IsoCountry.v2', required: [] }),
                  lastName: z.string(),
                  phone: z.string().exactOptional(),
                  postalCode: z.string().openapi({ description: 'Postal Code / Zip' }),
                  updatedAt: z.iso.datetime({ offset: true }).exactOptional(),
                  updatedBy: z
                    .object({ id: z.int() })
                    .exactOptional()
                    .openapi({ required: ['id'], title: 'User.v2' }),
                })
                .openapi({
                  description: '',
                  required: [
                    'id',
                    'country',
                    'postalCode',
                    'addressRegion',
                    'addressLocality',
                    'address1',
                    'lastName',
                    'firstName',
                  ],
                  title: 'Consignee.v2',
                }),
              warehouse: z
                .object({ id: z.int() })
                .exactOptional()
                .openapi({ description: '', required: ['id'], title: 'Warehouse.v2' }),
            })
            .openapi({
              required: [
                'id',
                'validatedConsignee',
                'originalConsignee',
                'currentStatus',
                'merchant',
                'recordedOn',
                'merchantShippingMethod',
                'merchantOrderId',
              ],
              title: 'OrderResponse.v2',
            }),
        },
      },
    },
    400: {
      description: 'Invalid order object',
      content: {
        'application/json': {
          schema: z
            .object({ message: z.string().exactOptional() })
            .openapi({ title: 'ErrorStandard.v2', required: [] }),
        },
      },
    },
    401: { description: 'You do not have permission to create orders', content: {} },
    403: {
      description: 'Forbidden',
      content: {
        'application/json': {
          schema: z
            .object({ message: z.string().exactOptional() })
            .openapi({ title: 'ErrorStandard.v2', required: [] }),
        },
      },
    },
    409: {
      description: 'Conflict',
      content: {
        'application/json': {
          schema: z
            .object({
              context: z.array(z.object({})).exactOptional(),
              message: z.string().exactOptional(),
            })
            .openapi({ title: 'ErrorStandardWithContext.v2', required: [] }),
          examples: {
            'duplicate-order': { value: { context: { id: 123 }, message: 'Duplicate Order' } },
          },
        },
      },
    },
    422: {
      description: 'Validation Failure',
      content: {
        'application/json': {
          schema: z
            .object({
              context: z.array(z.object({})).exactOptional(),
              message: z.string().exactOptional(),
            })
            .openapi({ title: 'ErrorStandardWithContext.v2', required: [] }),
          examples: {
            'validation-failure': {
              value: { context: { id: 123 }, message: 'Validation Failure' },
            },
          },
        },
      },
    },
  },
  security: [{ fdcAuth: ['oms'] }],
})

export const getOrdersIdRoute = createRoute({
  method: 'get',
  path: '/orders/{id}',
  tags: ['Orders'],
  summary: 'Order Details',
  description:
    'For the fastest results use the FDC provided `id` however you can use your `merchantOrderId` as the `id`.',
  operationId: 'getOrder',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            description: 'The FDC order Id',
            in: 'path',
            name: 'id',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      merchantId: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .exactOptional()
        .openapi({
          param: {
            description:
              'Providing your `merchantId` indicates the `id` is your `merchantOrderId`. Although it is not necessary to provide this it will speed up your results when using your `merchantOrderId` however it will slow your results when using the FDC provided `id`',
            in: 'query',
            name: 'merchantId',
            schema: { type: 'integer' },
            required: false,
          },
        }),
      hydrate: HydrateParamParamsSchema,
    }),
  },
  responses: {
    200: {
      description: 'Order Found',
      content: {
        'application/json': {
          schema: z
            .xor([
              z
                .object({
                  currentStatus: z
                    .object({
                      createdBy: z
                        .object({ id: z.int() })
                        .exactOptional()
                        .openapi({ required: ['id'], title: 'User.v2' }),
                      date: z.iso
                        .datetime({ offset: true })
                        .exactOptional()
                        .openapi({ description: 'DateTime of Status Event' }),
                      id: z.int(),
                      reason: z
                        .string()
                        .exactOptional()
                        .openapi({ description: 'Explanation for status' }),
                      status: z
                        .object({
                          actionRequiredBy: z
                            .object({
                              id: z.int().exactOptional(),
                              name: z
                                .string()
                                .exactOptional()
                                .openapi({
                                  description:
                                    'Human readable description of responsible party to resolve the issue',
                                }),
                            })
                            .exactOptional()
                            .openapi({
                              description: 'Responsibility for resolving this issue',
                              required: [],
                            }),
                          code: z
                            .string()
                            .regex(/^\d{6}$/)
                            .openapi({
                              description:
                                'Code, see [status codes](#section/Getting-Started/Status-Codes)',
                            }),
                          detail: z.string().exactOptional(),
                          detailCode: z.string().regex(/^\d{2}$/),
                          id: z
                            .int()
                            .exactOptional()
                            .openapi({ description: 'Depricated, use code instead' }),
                          isClosed: z
                            .boolean()
                            .exactOptional()
                            .openapi({
                              description: 'Depricated, does this status event close the order',
                            }),
                          name: z
                            .string()
                            .exactOptional()
                            .openapi({ description: 'Depricated, use stage/state instead' }),
                          reason: z.string().exactOptional().openapi({ description: 'Depricated' }),
                          stage: z
                            .object({
                              code: z.string().exactOptional(),
                              name: z.string().exactOptional(),
                            })
                            .openapi({ required: [] }),
                          state: z
                            .object({
                              code: z.string().exactOptional(),
                              name: z.string().exactOptional(),
                            })
                            .openapi({ required: [] }),
                        })
                        .exactOptional()
                        .openapi({
                          required: ['stage', 'state', 'detailCode', 'code'],
                          title: 'StatusType.v2',
                        }),
                    })
                    .openapi({ required: ['id'], title: 'StatusEvent.v2' }),
                  departDate: z.iso
                    .datetime({ offset: true })
                    .exactOptional()
                    .openapi({ description: 'DateTime order departed an FDC warehouse' }),
                  dispatchDate: z.iso
                    .datetime({ offset: true })
                    .exactOptional()
                    .openapi({
                      description: 'DateTime order was dispatched for fulfillment by FDC',
                    }),
                  id: z.int().openapi({ description: 'FDC ID for this order' }),
                  merchant: z
                    .object({
                      id: z.int(),
                      name: z.string().openapi({ description: 'Merchant Company Name' }),
                    })
                    .openapi({ required: ['id', 'name'], title: 'Merchant.v2' }),
                  merchantOrderId: z.string().openapi({ description: 'Merchant provided ID' }),
                  merchantShippingMethod: z
                    .string()
                    .openapi({ description: 'Requested ship method' }),
                  originalConsignee: z
                    .object({
                      address1: z.string(),
                      address2: z.string().exactOptional(),
                      addressLocality: z.string().openapi({ description: 'City' }),
                      addressRegion: z.string().openapi({ description: 'Province / State' }),
                      companyName: z.string().exactOptional(),
                      country: z
                        .string()
                        .openapi({ description: 'Ideally provide the two character ISO code' }),
                      email: z.string().exactOptional(),
                      firstName: z.string(),
                      id: z.int(),
                      iso: z
                        .object({
                          id: z.int().exactOptional(),
                          iso2: z
                            .string()
                            .regex(/[A-Z]{2}/)
                            .exactOptional()
                            .openapi({ description: 'Two character ISO code' }),
                          name: z.string().exactOptional().openapi({ description: 'Country Name' }),
                        })
                        .exactOptional()
                        .openapi({ title: 'IsoCountry.v2', required: [] }),
                      lastName: z.string(),
                      phone: z.string().exactOptional(),
                      postalCode: z.string().openapi({ description: 'Postal Code / Zip' }),
                      updatedAt: z.iso.datetime({ offset: true }).exactOptional(),
                      updatedBy: z
                        .object({ id: z.int() })
                        .exactOptional()
                        .openapi({ required: ['id'], title: 'User.v2' }),
                    })
                    .openapi({
                      description: '',
                      required: [
                        'id',
                        'country',
                        'postalCode',
                        'addressRegion',
                        'addressLocality',
                        'address1',
                        'lastName',
                        'firstName',
                      ],
                      title: 'Consignee.v2',
                    }),
                  parentOrder: z
                    .object({
                      id: z
                        .int()
                        .exactOptional()
                        .openapi({ description: 'Reference to parent `id` if order was grouped' }),
                    })
                    .exactOptional()
                    .openapi({ required: [] }),
                  purchaseOrderNum: z
                    .string()
                    .exactOptional()
                    .openapi({ description: 'Merchant provided PO#' }),
                  recordedOn: z.iso
                    .datetime({ offset: true })
                    .openapi({ description: 'DateTime order was recorded by FDC' }),
                  trackingNumbers: z
                    .array(
                      z
                        .object({
                          barcodeScanValue: z
                            .string()
                            .exactOptional()
                            .openapi({
                              deprecated: true,
                              description:
                                'The computer readable alternative to the human readable',
                            }),
                          carrier: z
                            .object({ id: z.int() })
                            .exactOptional()
                            .openapi({ required: ['id'], title: 'CarrierSimple.v2' }),
                          value: z
                            .string()
                            .exactOptional()
                            .openapi({
                              description:
                                'The human readable tracking number recipients (consignee) expect',
                            }),
                        })
                        .openapi({
                          title: 'TrackingNumber.v2',
                          'x-tags': ['Tracking'],
                          required: [],
                        }),
                    )
                    .exactOptional(),
                  validatedConsignee: z
                    .object({
                      address1: z.string(),
                      address2: z.string().exactOptional(),
                      addressLocality: z.string().openapi({ description: 'City' }),
                      addressRegion: z.string().openapi({ description: 'Province / State' }),
                      companyName: z.string().exactOptional(),
                      country: z
                        .string()
                        .openapi({ description: 'Ideally provide the two character ISO code' }),
                      email: z.string().exactOptional(),
                      firstName: z.string(),
                      id: z.int(),
                      iso: z
                        .object({
                          id: z.int().exactOptional(),
                          iso2: z
                            .string()
                            .regex(/[A-Z]{2}/)
                            .exactOptional()
                            .openapi({ description: 'Two character ISO code' }),
                          name: z.string().exactOptional().openapi({ description: 'Country Name' }),
                        })
                        .exactOptional()
                        .openapi({ title: 'IsoCountry.v2', required: [] }),
                      lastName: z.string(),
                      phone: z.string().exactOptional(),
                      postalCode: z.string().openapi({ description: 'Postal Code / Zip' }),
                      updatedAt: z.iso.datetime({ offset: true }).exactOptional(),
                      updatedBy: z
                        .object({ id: z.int() })
                        .exactOptional()
                        .openapi({ required: ['id'], title: 'User.v2' }),
                    })
                    .openapi({
                      description: '',
                      required: [
                        'id',
                        'country',
                        'postalCode',
                        'addressRegion',
                        'addressLocality',
                        'address1',
                        'lastName',
                        'firstName',
                      ],
                      title: 'Consignee.v2',
                    }),
                  warehouse: z
                    .object({ id: z.int() })
                    .exactOptional()
                    .openapi({ description: '', required: ['id'], title: 'Warehouse.v2' }),
                })
                .openapi({
                  required: [
                    'id',
                    'validatedConsignee',
                    'originalConsignee',
                    'currentStatus',
                    'merchant',
                    'recordedOn',
                    'merchantShippingMethod',
                    'merchantOrderId',
                  ],
                  title: 'OrderResponse.v2',
                }),
              z
                .object({
                  currentStatus: z
                    .object({
                      createdBy: z
                        .object({ id: z.int() })
                        .exactOptional()
                        .openapi({ required: ['id'], title: 'User.v2' }),
                      date: z.iso
                        .datetime({ offset: true })
                        .exactOptional()
                        .openapi({ description: 'DateTime of Status Event' }),
                      id: z.int(),
                      reason: z
                        .string()
                        .exactOptional()
                        .openapi({ description: 'Explanation for status' }),
                      status: z
                        .object({
                          actionRequiredBy: z
                            .object({
                              id: z.int().exactOptional(),
                              name: z
                                .string()
                                .exactOptional()
                                .openapi({
                                  description:
                                    'Human readable description of responsible party to resolve the issue',
                                }),
                            })
                            .exactOptional()
                            .openapi({
                              description: 'Responsibility for resolving this issue',
                              required: [],
                            }),
                          code: z
                            .string()
                            .regex(/^\d{6}$/)
                            .openapi({
                              description:
                                'Code, see [status codes](#section/Getting-Started/Status-Codes)',
                            }),
                          detail: z.string().exactOptional(),
                          detailCode: z.string().regex(/^\d{2}$/),
                          id: z
                            .int()
                            .exactOptional()
                            .openapi({ description: 'Depricated, use code instead' }),
                          isClosed: z
                            .boolean()
                            .exactOptional()
                            .openapi({
                              description: 'Depricated, does this status event close the order',
                            }),
                          name: z
                            .string()
                            .exactOptional()
                            .openapi({ description: 'Depricated, use stage/state instead' }),
                          reason: z.string().exactOptional().openapi({ description: 'Depricated' }),
                          stage: z
                            .object({
                              code: z.string().exactOptional(),
                              name: z.string().exactOptional(),
                            })
                            .openapi({ required: [] }),
                          state: z
                            .object({
                              code: z.string().exactOptional(),
                              name: z.string().exactOptional(),
                            })
                            .openapi({ required: [] }),
                        })
                        .exactOptional()
                        .openapi({
                          required: ['stage', 'state', 'detailCode', 'code'],
                          title: 'StatusType.v2',
                        }),
                    })
                    .openapi({ required: ['id'], title: 'StatusEvent.v2' }),
                  departDate: z.iso
                    .datetime({ offset: true })
                    .exactOptional()
                    .openapi({ description: 'DateTime order departed an FDC warehouse' }),
                  dispatchDate: z.iso
                    .datetime({ offset: true })
                    .exactOptional()
                    .openapi({
                      description: 'DateTime order was dispatched for fulfillment by FDC',
                    }),
                  id: z.int().openapi({ description: 'FDC ID for this order' }),
                  merchant: z
                    .object({
                      id: z.int(),
                      name: z.string().openapi({ description: 'Merchant Company Name' }),
                    })
                    .openapi({ required: ['id', 'name'], title: 'Merchant.v2' }),
                  merchantOrderId: z.string().openapi({ description: 'Merchant provided ID' }),
                  merchantShippingMethod: z
                    .string()
                    .openapi({ description: 'Requested ship method' }),
                  originalConsignee: z
                    .object({
                      address1: z.string(),
                      address2: z.string().exactOptional(),
                      addressLocality: z.string().openapi({ description: 'City' }),
                      addressRegion: z.string().openapi({ description: 'Province / State' }),
                      companyName: z.string().exactOptional(),
                      country: z
                        .string()
                        .openapi({ description: 'Ideally provide the two character ISO code' }),
                      email: z.string().exactOptional(),
                      firstName: z.string(),
                      id: z.int(),
                      iso: z
                        .object({
                          id: z.int().exactOptional(),
                          iso2: z
                            .string()
                            .regex(/[A-Z]{2}/)
                            .exactOptional()
                            .openapi({ description: 'Two character ISO code' }),
                          name: z.string().exactOptional().openapi({ description: 'Country Name' }),
                        })
                        .exactOptional()
                        .openapi({ title: 'IsoCountry.v2', required: [] }),
                      lastName: z.string(),
                      phone: z.string().exactOptional(),
                      postalCode: z.string().openapi({ description: 'Postal Code / Zip' }),
                      updatedAt: z.iso.datetime({ offset: true }).exactOptional(),
                      updatedBy: z
                        .object({ id: z.int() })
                        .exactOptional()
                        .openapi({ required: ['id'], title: 'User.v2' }),
                    })
                    .openapi({
                      description: '',
                      required: [
                        'id',
                        'country',
                        'postalCode',
                        'addressRegion',
                        'addressLocality',
                        'address1',
                        'lastName',
                        'firstName',
                      ],
                      title: 'Consignee.v2',
                    }),
                  parentOrder: z
                    .object({
                      id: z
                        .int()
                        .exactOptional()
                        .openapi({ description: 'Reference to parent `id` if order was grouped' }),
                    })
                    .exactOptional()
                    .openapi({ required: [] }),
                  purchaseOrderNum: z
                    .string()
                    .exactOptional()
                    .openapi({ description: 'Merchant provided PO#' }),
                  recordedOn: z.iso
                    .datetime({ offset: true })
                    .openapi({ description: 'DateTime order was recorded by FDC' }),
                  trackingNumbers: z
                    .array(
                      z
                        .object({
                          barcodeScanValue: z
                            .string()
                            .exactOptional()
                            .openapi({
                              deprecated: true,
                              description:
                                'The computer readable alternative to the human readable',
                            }),
                          carrier: z
                            .object({ id: z.int() })
                            .exactOptional()
                            .openapi({ required: ['id'], title: 'CarrierSimple.v2' }),
                          value: z
                            .string()
                            .exactOptional()
                            .openapi({
                              description:
                                'The human readable tracking number recipients (consignee) expect',
                            }),
                        })
                        .openapi({
                          title: 'TrackingNumber.v2',
                          'x-tags': ['Tracking'],
                          required: [],
                        }),
                    )
                    .exactOptional(),
                  validatedConsignee: z
                    .object({
                      address1: z.string(),
                      address2: z.string().exactOptional(),
                      addressLocality: z.string().openapi({ description: 'City' }),
                      addressRegion: z.string().openapi({ description: 'Province / State' }),
                      companyName: z.string().exactOptional(),
                      country: z
                        .string()
                        .openapi({ description: 'Ideally provide the two character ISO code' }),
                      email: z.string().exactOptional(),
                      firstName: z.string(),
                      id: z.int(),
                      iso: z
                        .object({
                          id: z.int().exactOptional(),
                          iso2: z
                            .string()
                            .regex(/[A-Z]{2}/)
                            .exactOptional()
                            .openapi({ description: 'Two character ISO code' }),
                          name: z.string().exactOptional().openapi({ description: 'Country Name' }),
                        })
                        .exactOptional()
                        .openapi({ title: 'IsoCountry.v2', required: [] }),
                      lastName: z.string(),
                      phone: z.string().exactOptional(),
                      postalCode: z.string().openapi({ description: 'Postal Code / Zip' }),
                      updatedAt: z.iso.datetime({ offset: true }).exactOptional(),
                      updatedBy: z
                        .object({ id: z.int() })
                        .exactOptional()
                        .openapi({ required: ['id'], title: 'User.v2' }),
                    })
                    .openapi({
                      description: '',
                      required: [
                        'id',
                        'country',
                        'postalCode',
                        'addressRegion',
                        'addressLocality',
                        'address1',
                        'lastName',
                        'firstName',
                      ],
                      title: 'Consignee.v2',
                    }),
                  warehouse: z
                    .object({ id: z.int() })
                    .exactOptional()
                    .openapi({ description: '', required: ['id'], title: 'Warehouse.v2' }),
                })
                .openapi({
                  required: [
                    'id',
                    'validatedConsignee',
                    'originalConsignee',
                    'currentStatus',
                    'merchant',
                    'recordedOn',
                    'merchantShippingMethod',
                    'merchantOrderId',
                  ],
                  title: 'OrderResponse.v2',
                })
                .and(
                  z
                    .object({
                      integrator: z.string().exactOptional().openapi({ description: '' }),
                      lineItems: z
                        .array(
                          z
                            .object({
                              id: z.int().exactOptional(),
                              inventoryDetails: z
                                .array(
                                  z
                                    .object({
                                      expirationDate: z.iso.date().exactOptional(),
                                      lotNum: z.string().exactOptional(),
                                      quantity: z.int().exactOptional(),
                                      serialNum: z.string().exactOptional(),
                                    })
                                    .openapi({ required: [] }),
                                )
                                .exactOptional(),
                              lineDetails: z
                                .object({
                                  description: z.string().exactOptional(),
                                  externalSku: z.string().exactOptional(),
                                  id: z.int().exactOptional(),
                                  name: z.string().exactOptional(),
                                  totalQuantity: z.int().exactOptional(),
                                })
                                .exactOptional()
                                .openapi({ required: [] }),
                              requestedSkuData: z
                                .object({
                                  declaredValue: z
                                    .string()
                                    .regex(/^[0-9.]+$/)
                                    .exactOptional(),
                                  id: z.int().exactOptional(),
                                  quantity: z.int().exactOptional(),
                                  sku: z.string().exactOptional(),
                                })
                                .exactOptional()
                                .openapi({ required: [] }),
                            })
                            .openapi({
                              description: '',
                              title: 'LineItemsResponse.v2',
                              required: [],
                            }),
                        )
                        .exactOptional(),
                      trackingNumbers: z
                        .array(
                          z
                            .object({
                              carrier: z
                                .object({
                                  canReprintPostage: z.boolean().exactOptional(),
                                  enabled: z.boolean().exactOptional(),
                                  id: z.int(),
                                  includePeripherals: z.boolean().exactOptional(),
                                  internalRatesOnly: z.boolean().exactOptional(),
                                  name: z.string(),
                                  requiresDimensions: z.boolean().exactOptional(),
                                  symbol: z.string(),
                                })
                                .exactOptional()
                                .openapi({
                                  required: ['id', 'name', 'symbol'],
                                  title: 'CarrierHydrated.v2',
                                }),
                            })
                            .openapi({ required: [] }),
                        )
                        .exactOptional(),
                    })
                    .openapi({ required: [] }),
                )
                .openapi({
                  description:
                    'Requires hydrate to be set in the request and the corresponding node will be filled.',
                  title: 'OrderResponseHydrate.v2',
                }),
            ])
            .openapi({
              description: 'Standard Order Response or a Hydrated Response',
              title: 'OrderResponseOneOf.v2',
            }),
        },
      },
    },
    404: { description: 'Order not found', content: {} },
  },
  security: [{ fdcAuth: ['oms'] }],
})

export const deleteOrdersIdRoute = createRoute({
  method: 'delete',
  path: '/orders/{id}',
  tags: ['Orders'],
  summary: 'Cancel an Order',
  description: 'Request an order is canceled to prevent shipment.',
  operationId: 'delete-orders-id',
  request: {
    params: z.object({
      id: z
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
            description: 'ID of order that needs to be canceled',
            in: 'path',
            name: 'id',
            required: true,
            schema: { format: 'int32', type: 'integer' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Your order was successfully canceled',
      content: {
        'application/json': {
          schema: z
            .object({
              currentStatus: z
                .object({
                  createdBy: z
                    .object({ id: z.int() })
                    .exactOptional()
                    .openapi({ required: ['id'], title: 'User.v2' }),
                  date: z.iso
                    .datetime({ offset: true })
                    .exactOptional()
                    .openapi({ description: 'DateTime of Status Event' }),
                  id: z.int(),
                  reason: z
                    .string()
                    .exactOptional()
                    .openapi({ description: 'Explanation for status' }),
                  status: z
                    .object({
                      actionRequiredBy: z
                        .object({
                          id: z.int().exactOptional(),
                          name: z
                            .string()
                            .exactOptional()
                            .openapi({
                              description:
                                'Human readable description of responsible party to resolve the issue',
                            }),
                        })
                        .exactOptional()
                        .openapi({
                          description: 'Responsibility for resolving this issue',
                          required: [],
                        }),
                      code: z
                        .string()
                        .regex(/^\d{6}$/)
                        .openapi({
                          description:
                            'Code, see [status codes](#section/Getting-Started/Status-Codes)',
                        }),
                      detail: z.string().exactOptional(),
                      detailCode: z.string().regex(/^\d{2}$/),
                      id: z
                        .int()
                        .exactOptional()
                        .openapi({ description: 'Depricated, use code instead' }),
                      isClosed: z
                        .boolean()
                        .exactOptional()
                        .openapi({
                          description: 'Depricated, does this status event close the order',
                        }),
                      name: z
                        .string()
                        .exactOptional()
                        .openapi({ description: 'Depricated, use stage/state instead' }),
                      reason: z.string().exactOptional().openapi({ description: 'Depricated' }),
                      stage: z
                        .object({
                          code: z.string().exactOptional(),
                          name: z.string().exactOptional(),
                        })
                        .openapi({ required: [] }),
                      state: z
                        .object({
                          code: z.string().exactOptional(),
                          name: z.string().exactOptional(),
                        })
                        .openapi({ required: [] }),
                    })
                    .exactOptional()
                    .openapi({
                      required: ['stage', 'state', 'detailCode', 'code'],
                      title: 'StatusType.v2',
                    }),
                })
                .openapi({ required: ['id'], title: 'StatusEvent.v2' }),
              departDate: z.iso
                .datetime({ offset: true })
                .exactOptional()
                .openapi({ description: 'DateTime order departed an FDC warehouse' }),
              dispatchDate: z.iso
                .datetime({ offset: true })
                .exactOptional()
                .openapi({ description: 'DateTime order was dispatched for fulfillment by FDC' }),
              id: z.int().openapi({ description: 'FDC ID for this order' }),
              merchant: z
                .object({
                  id: z.int(),
                  name: z.string().openapi({ description: 'Merchant Company Name' }),
                })
                .openapi({ required: ['id', 'name'], title: 'Merchant.v2' }),
              merchantOrderId: z.string().openapi({ description: 'Merchant provided ID' }),
              merchantShippingMethod: z.string().openapi({ description: 'Requested ship method' }),
              originalConsignee: z
                .object({
                  address1: z.string(),
                  address2: z.string().exactOptional(),
                  addressLocality: z.string().openapi({ description: 'City' }),
                  addressRegion: z.string().openapi({ description: 'Province / State' }),
                  companyName: z.string().exactOptional(),
                  country: z
                    .string()
                    .openapi({ description: 'Ideally provide the two character ISO code' }),
                  email: z.string().exactOptional(),
                  firstName: z.string(),
                  id: z.int(),
                  iso: z
                    .object({
                      id: z.int().exactOptional(),
                      iso2: z
                        .string()
                        .regex(/[A-Z]{2}/)
                        .exactOptional()
                        .openapi({ description: 'Two character ISO code' }),
                      name: z.string().exactOptional().openapi({ description: 'Country Name' }),
                    })
                    .exactOptional()
                    .openapi({ title: 'IsoCountry.v2', required: [] }),
                  lastName: z.string(),
                  phone: z.string().exactOptional(),
                  postalCode: z.string().openapi({ description: 'Postal Code / Zip' }),
                  updatedAt: z.iso.datetime({ offset: true }).exactOptional(),
                  updatedBy: z
                    .object({ id: z.int() })
                    .exactOptional()
                    .openapi({ required: ['id'], title: 'User.v2' }),
                })
                .openapi({
                  description: '',
                  required: [
                    'id',
                    'country',
                    'postalCode',
                    'addressRegion',
                    'addressLocality',
                    'address1',
                    'lastName',
                    'firstName',
                  ],
                  title: 'Consignee.v2',
                }),
              parentOrder: z
                .object({
                  id: z
                    .int()
                    .exactOptional()
                    .openapi({ description: 'Reference to parent `id` if order was grouped' }),
                })
                .exactOptional()
                .openapi({ required: [] }),
              purchaseOrderNum: z
                .string()
                .exactOptional()
                .openapi({ description: 'Merchant provided PO#' }),
              recordedOn: z.iso
                .datetime({ offset: true })
                .openapi({ description: 'DateTime order was recorded by FDC' }),
              trackingNumbers: z
                .array(
                  z
                    .object({
                      barcodeScanValue: z
                        .string()
                        .exactOptional()
                        .openapi({
                          deprecated: true,
                          description: 'The computer readable alternative to the human readable',
                        }),
                      carrier: z
                        .object({ id: z.int() })
                        .exactOptional()
                        .openapi({ required: ['id'], title: 'CarrierSimple.v2' }),
                      value: z
                        .string()
                        .exactOptional()
                        .openapi({
                          description:
                            'The human readable tracking number recipients (consignee) expect',
                        }),
                    })
                    .openapi({ title: 'TrackingNumber.v2', 'x-tags': ['Tracking'], required: [] }),
                )
                .exactOptional(),
              validatedConsignee: z
                .object({
                  address1: z.string(),
                  address2: z.string().exactOptional(),
                  addressLocality: z.string().openapi({ description: 'City' }),
                  addressRegion: z.string().openapi({ description: 'Province / State' }),
                  companyName: z.string().exactOptional(),
                  country: z
                    .string()
                    .openapi({ description: 'Ideally provide the two character ISO code' }),
                  email: z.string().exactOptional(),
                  firstName: z.string(),
                  id: z.int(),
                  iso: z
                    .object({
                      id: z.int().exactOptional(),
                      iso2: z
                        .string()
                        .regex(/[A-Z]{2}/)
                        .exactOptional()
                        .openapi({ description: 'Two character ISO code' }),
                      name: z.string().exactOptional().openapi({ description: 'Country Name' }),
                    })
                    .exactOptional()
                    .openapi({ title: 'IsoCountry.v2', required: [] }),
                  lastName: z.string(),
                  phone: z.string().exactOptional(),
                  postalCode: z.string().openapi({ description: 'Postal Code / Zip' }),
                  updatedAt: z.iso.datetime({ offset: true }).exactOptional(),
                  updatedBy: z
                    .object({ id: z.int() })
                    .exactOptional()
                    .openapi({ required: ['id'], title: 'User.v2' }),
                })
                .openapi({
                  description: '',
                  required: [
                    'id',
                    'country',
                    'postalCode',
                    'addressRegion',
                    'addressLocality',
                    'address1',
                    'lastName',
                    'firstName',
                  ],
                  title: 'Consignee.v2',
                }),
              warehouse: z
                .object({ id: z.int() })
                .exactOptional()
                .openapi({ description: '', required: ['id'], title: 'Warehouse.v2' }),
            })
            .openapi({
              required: [
                'id',
                'validatedConsignee',
                'originalConsignee',
                'currentStatus',
                'merchant',
                'recordedOn',
                'merchantShippingMethod',
                'merchantOrderId',
              ],
              title: 'OrderResponse.v2',
            }),
        },
      },
    },
    404: { description: 'Order not found', content: {} },
    405: {
      description: 'Could not cancel your order, perhaps it already shipped',
      content: {
        'application/json': {
          schema: z
            .object({ message: z.string().exactOptional() })
            .openapi({ title: 'ErrorStandard.v2', required: [] }),
        },
      },
    },
  },
  security: [{ fdcAuth: ['oms'] }],
})

export const putOrdersIdShipRoute = createRoute({
  method: 'put',
  path: '/orders/{id}/ship',
  tags: ['Partners'],
  summary: 'Ship an Order',
  description: 'Note, this API is used to update orders and is reserved for our shipping partners.',
  operationId: 'put-orders-id-ship',
  request: {
    params: z.object({
      id: z
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
            description: 'The FDC order Id',
            in: 'path',
            name: 'id',
            required: true,
            schema: { format: 'int32', type: 'integer' },
          },
        }),
    }),
    body: {
      description: 'Shipping Details',
      content: {
        'application/json': {
          schema: z
            .object({
              trackingNumber: z.string().openapi({ description: 'Tracking number of package' }),
              weightOverride: z
                .float32()
                .exactOptional()
                .openapi({ description: 'Override predicted weight of package' }),
            })
            .openapi({ required: ['trackingNumber'], title: 'OrderShip.v2' }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Order Found',
      content: {
        'application/json': {
          schema: z
            .object({
              currentStatus: z
                .object({
                  createdBy: z
                    .object({ id: z.int() })
                    .exactOptional()
                    .openapi({ required: ['id'], title: 'User.v2' }),
                  date: z.iso
                    .datetime({ offset: true })
                    .exactOptional()
                    .openapi({ description: 'DateTime of Status Event' }),
                  id: z.int(),
                  reason: z
                    .string()
                    .exactOptional()
                    .openapi({ description: 'Explanation for status' }),
                  status: z
                    .object({
                      actionRequiredBy: z
                        .object({
                          id: z.int().exactOptional(),
                          name: z
                            .string()
                            .exactOptional()
                            .openapi({
                              description:
                                'Human readable description of responsible party to resolve the issue',
                            }),
                        })
                        .exactOptional()
                        .openapi({
                          description: 'Responsibility for resolving this issue',
                          required: [],
                        }),
                      code: z
                        .string()
                        .regex(/^\d{6}$/)
                        .openapi({
                          description:
                            'Code, see [status codes](#section/Getting-Started/Status-Codes)',
                        }),
                      detail: z.string().exactOptional(),
                      detailCode: z.string().regex(/^\d{2}$/),
                      id: z
                        .int()
                        .exactOptional()
                        .openapi({ description: 'Depricated, use code instead' }),
                      isClosed: z
                        .boolean()
                        .exactOptional()
                        .openapi({
                          description: 'Depricated, does this status event close the order',
                        }),
                      name: z
                        .string()
                        .exactOptional()
                        .openapi({ description: 'Depricated, use stage/state instead' }),
                      reason: z.string().exactOptional().openapi({ description: 'Depricated' }),
                      stage: z
                        .object({
                          code: z.string().exactOptional(),
                          name: z.string().exactOptional(),
                        })
                        .openapi({ required: [] }),
                      state: z
                        .object({
                          code: z.string().exactOptional(),
                          name: z.string().exactOptional(),
                        })
                        .openapi({ required: [] }),
                    })
                    .exactOptional()
                    .openapi({
                      required: ['stage', 'state', 'detailCode', 'code'],
                      title: 'StatusType.v2',
                    }),
                })
                .openapi({ required: ['id'], title: 'StatusEvent.v2' }),
              departDate: z.iso
                .datetime({ offset: true })
                .exactOptional()
                .openapi({ description: 'DateTime order departed an FDC warehouse' }),
              dispatchDate: z.iso
                .datetime({ offset: true })
                .exactOptional()
                .openapi({ description: 'DateTime order was dispatched for fulfillment by FDC' }),
              id: z.int().openapi({ description: 'FDC ID for this order' }),
              merchant: z
                .object({
                  id: z.int(),
                  name: z.string().openapi({ description: 'Merchant Company Name' }),
                })
                .openapi({ required: ['id', 'name'], title: 'Merchant.v2' }),
              merchantOrderId: z.string().openapi({ description: 'Merchant provided ID' }),
              merchantShippingMethod: z.string().openapi({ description: 'Requested ship method' }),
              originalConsignee: z
                .object({
                  address1: z.string(),
                  address2: z.string().exactOptional(),
                  addressLocality: z.string().openapi({ description: 'City' }),
                  addressRegion: z.string().openapi({ description: 'Province / State' }),
                  companyName: z.string().exactOptional(),
                  country: z
                    .string()
                    .openapi({ description: 'Ideally provide the two character ISO code' }),
                  email: z.string().exactOptional(),
                  firstName: z.string(),
                  id: z.int(),
                  iso: z
                    .object({
                      id: z.int().exactOptional(),
                      iso2: z
                        .string()
                        .regex(/[A-Z]{2}/)
                        .exactOptional()
                        .openapi({ description: 'Two character ISO code' }),
                      name: z.string().exactOptional().openapi({ description: 'Country Name' }),
                    })
                    .exactOptional()
                    .openapi({ title: 'IsoCountry.v2', required: [] }),
                  lastName: z.string(),
                  phone: z.string().exactOptional(),
                  postalCode: z.string().openapi({ description: 'Postal Code / Zip' }),
                  updatedAt: z.iso.datetime({ offset: true }).exactOptional(),
                  updatedBy: z
                    .object({ id: z.int() })
                    .exactOptional()
                    .openapi({ required: ['id'], title: 'User.v2' }),
                })
                .openapi({
                  description: '',
                  required: [
                    'id',
                    'country',
                    'postalCode',
                    'addressRegion',
                    'addressLocality',
                    'address1',
                    'lastName',
                    'firstName',
                  ],
                  title: 'Consignee.v2',
                }),
              parentOrder: z
                .object({
                  id: z
                    .int()
                    .exactOptional()
                    .openapi({ description: 'Reference to parent `id` if order was grouped' }),
                })
                .exactOptional()
                .openapi({ required: [] }),
              purchaseOrderNum: z
                .string()
                .exactOptional()
                .openapi({ description: 'Merchant provided PO#' }),
              recordedOn: z.iso
                .datetime({ offset: true })
                .openapi({ description: 'DateTime order was recorded by FDC' }),
              trackingNumbers: z
                .array(
                  z
                    .object({
                      barcodeScanValue: z
                        .string()
                        .exactOptional()
                        .openapi({
                          deprecated: true,
                          description: 'The computer readable alternative to the human readable',
                        }),
                      carrier: z
                        .object({ id: z.int() })
                        .exactOptional()
                        .openapi({ required: ['id'], title: 'CarrierSimple.v2' }),
                      value: z
                        .string()
                        .exactOptional()
                        .openapi({
                          description:
                            'The human readable tracking number recipients (consignee) expect',
                        }),
                    })
                    .openapi({ title: 'TrackingNumber.v2', 'x-tags': ['Tracking'], required: [] }),
                )
                .exactOptional(),
              validatedConsignee: z
                .object({
                  address1: z.string(),
                  address2: z.string().exactOptional(),
                  addressLocality: z.string().openapi({ description: 'City' }),
                  addressRegion: z.string().openapi({ description: 'Province / State' }),
                  companyName: z.string().exactOptional(),
                  country: z
                    .string()
                    .openapi({ description: 'Ideally provide the two character ISO code' }),
                  email: z.string().exactOptional(),
                  firstName: z.string(),
                  id: z.int(),
                  iso: z
                    .object({
                      id: z.int().exactOptional(),
                      iso2: z
                        .string()
                        .regex(/[A-Z]{2}/)
                        .exactOptional()
                        .openapi({ description: 'Two character ISO code' }),
                      name: z.string().exactOptional().openapi({ description: 'Country Name' }),
                    })
                    .exactOptional()
                    .openapi({ title: 'IsoCountry.v2', required: [] }),
                  lastName: z.string(),
                  phone: z.string().exactOptional(),
                  postalCode: z.string().openapi({ description: 'Postal Code / Zip' }),
                  updatedAt: z.iso.datetime({ offset: true }).exactOptional(),
                  updatedBy: z
                    .object({ id: z.int() })
                    .exactOptional()
                    .openapi({ required: ['id'], title: 'User.v2' }),
                })
                .openapi({
                  description: '',
                  required: [
                    'id',
                    'country',
                    'postalCode',
                    'addressRegion',
                    'addressLocality',
                    'address1',
                    'lastName',
                    'firstName',
                  ],
                  title: 'Consignee.v2',
                }),
              warehouse: z
                .object({ id: z.int() })
                .exactOptional()
                .openapi({ description: '', required: ['id'], title: 'Warehouse.v2' }),
            })
            .openapi({
              required: [
                'id',
                'validatedConsignee',
                'originalConsignee',
                'currentStatus',
                'merchant',
                'recordedOn',
                'merchantShippingMethod',
                'merchantOrderId',
              ],
              title: 'OrderResponse.v2',
            }),
        },
      },
    },
    404: { description: 'Order not found', content: {} },
  },
  security: [{ fdcAuth: ['oms'] }],
})

export const putOrdersIdStatusRoute = createRoute({
  method: 'put',
  path: '/orders/{id}/status',
  tags: ['Partners'],
  summary: 'Update Order Status',
  description: 'Note, this API is used to update orders and is reserved for our shipping partners.',
  operationId: 'put-orders-id-status',
  request: {
    params: z.object({
      id: z
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
            description: 'The FDC order Id',
            in: 'path',
            name: 'id',
            required: true,
            schema: { format: 'int32', type: 'integer' },
          },
        }),
    }),
    body: {
      description: 'New status event',
      content: {
        'application/json': {
          schema: z
            .object({
              reason: z.string().openapi({ description: 'Human-readable description' }),
              status: z
                .object({ code: z.string().regex(/^\d{6}$/) })
                .openapi({ required: ['code'] }),
            })
            .openapi({ required: ['reason', 'status'], title: 'StatusTypeSimple.v2' }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Order Found',
      content: {
        'application/json': {
          schema: z
            .object({
              currentStatus: z
                .object({
                  createdBy: z
                    .object({ id: z.int() })
                    .exactOptional()
                    .openapi({ required: ['id'], title: 'User.v2' }),
                  date: z.iso
                    .datetime({ offset: true })
                    .exactOptional()
                    .openapi({ description: 'DateTime of Status Event' }),
                  id: z.int(),
                  reason: z
                    .string()
                    .exactOptional()
                    .openapi({ description: 'Explanation for status' }),
                  status: z
                    .object({
                      actionRequiredBy: z
                        .object({
                          id: z.int().exactOptional(),
                          name: z
                            .string()
                            .exactOptional()
                            .openapi({
                              description:
                                'Human readable description of responsible party to resolve the issue',
                            }),
                        })
                        .exactOptional()
                        .openapi({
                          description: 'Responsibility for resolving this issue',
                          required: [],
                        }),
                      code: z
                        .string()
                        .regex(/^\d{6}$/)
                        .openapi({
                          description:
                            'Code, see [status codes](#section/Getting-Started/Status-Codes)',
                        }),
                      detail: z.string().exactOptional(),
                      detailCode: z.string().regex(/^\d{2}$/),
                      id: z
                        .int()
                        .exactOptional()
                        .openapi({ description: 'Depricated, use code instead' }),
                      isClosed: z
                        .boolean()
                        .exactOptional()
                        .openapi({
                          description: 'Depricated, does this status event close the order',
                        }),
                      name: z
                        .string()
                        .exactOptional()
                        .openapi({ description: 'Depricated, use stage/state instead' }),
                      reason: z.string().exactOptional().openapi({ description: 'Depricated' }),
                      stage: z
                        .object({
                          code: z.string().exactOptional(),
                          name: z.string().exactOptional(),
                        })
                        .openapi({ required: [] }),
                      state: z
                        .object({
                          code: z.string().exactOptional(),
                          name: z.string().exactOptional(),
                        })
                        .openapi({ required: [] }),
                    })
                    .exactOptional()
                    .openapi({
                      required: ['stage', 'state', 'detailCode', 'code'],
                      title: 'StatusType.v2',
                    }),
                })
                .openapi({ required: ['id'], title: 'StatusEvent.v2' }),
              departDate: z.iso
                .datetime({ offset: true })
                .exactOptional()
                .openapi({ description: 'DateTime order departed an FDC warehouse' }),
              dispatchDate: z.iso
                .datetime({ offset: true })
                .exactOptional()
                .openapi({ description: 'DateTime order was dispatched for fulfillment by FDC' }),
              id: z.int().openapi({ description: 'FDC ID for this order' }),
              merchant: z
                .object({
                  id: z.int(),
                  name: z.string().openapi({ description: 'Merchant Company Name' }),
                })
                .openapi({ required: ['id', 'name'], title: 'Merchant.v2' }),
              merchantOrderId: z.string().openapi({ description: 'Merchant provided ID' }),
              merchantShippingMethod: z.string().openapi({ description: 'Requested ship method' }),
              originalConsignee: z
                .object({
                  address1: z.string(),
                  address2: z.string().exactOptional(),
                  addressLocality: z.string().openapi({ description: 'City' }),
                  addressRegion: z.string().openapi({ description: 'Province / State' }),
                  companyName: z.string().exactOptional(),
                  country: z
                    .string()
                    .openapi({ description: 'Ideally provide the two character ISO code' }),
                  email: z.string().exactOptional(),
                  firstName: z.string(),
                  id: z.int(),
                  iso: z
                    .object({
                      id: z.int().exactOptional(),
                      iso2: z
                        .string()
                        .regex(/[A-Z]{2}/)
                        .exactOptional()
                        .openapi({ description: 'Two character ISO code' }),
                      name: z.string().exactOptional().openapi({ description: 'Country Name' }),
                    })
                    .exactOptional()
                    .openapi({ title: 'IsoCountry.v2', required: [] }),
                  lastName: z.string(),
                  phone: z.string().exactOptional(),
                  postalCode: z.string().openapi({ description: 'Postal Code / Zip' }),
                  updatedAt: z.iso.datetime({ offset: true }).exactOptional(),
                  updatedBy: z
                    .object({ id: z.int() })
                    .exactOptional()
                    .openapi({ required: ['id'], title: 'User.v2' }),
                })
                .openapi({
                  description: '',
                  required: [
                    'id',
                    'country',
                    'postalCode',
                    'addressRegion',
                    'addressLocality',
                    'address1',
                    'lastName',
                    'firstName',
                  ],
                  title: 'Consignee.v2',
                }),
              parentOrder: z
                .object({
                  id: z
                    .int()
                    .exactOptional()
                    .openapi({ description: 'Reference to parent `id` if order was grouped' }),
                })
                .exactOptional()
                .openapi({ required: [] }),
              purchaseOrderNum: z
                .string()
                .exactOptional()
                .openapi({ description: 'Merchant provided PO#' }),
              recordedOn: z.iso
                .datetime({ offset: true })
                .openapi({ description: 'DateTime order was recorded by FDC' }),
              trackingNumbers: z
                .array(
                  z
                    .object({
                      barcodeScanValue: z
                        .string()
                        .exactOptional()
                        .openapi({
                          deprecated: true,
                          description: 'The computer readable alternative to the human readable',
                        }),
                      carrier: z
                        .object({ id: z.int() })
                        .exactOptional()
                        .openapi({ required: ['id'], title: 'CarrierSimple.v2' }),
                      value: z
                        .string()
                        .exactOptional()
                        .openapi({
                          description:
                            'The human readable tracking number recipients (consignee) expect',
                        }),
                    })
                    .openapi({ title: 'TrackingNumber.v2', 'x-tags': ['Tracking'], required: [] }),
                )
                .exactOptional(),
              validatedConsignee: z
                .object({
                  address1: z.string(),
                  address2: z.string().exactOptional(),
                  addressLocality: z.string().openapi({ description: 'City' }),
                  addressRegion: z.string().openapi({ description: 'Province / State' }),
                  companyName: z.string().exactOptional(),
                  country: z
                    .string()
                    .openapi({ description: 'Ideally provide the two character ISO code' }),
                  email: z.string().exactOptional(),
                  firstName: z.string(),
                  id: z.int(),
                  iso: z
                    .object({
                      id: z.int().exactOptional(),
                      iso2: z
                        .string()
                        .regex(/[A-Z]{2}/)
                        .exactOptional()
                        .openapi({ description: 'Two character ISO code' }),
                      name: z.string().exactOptional().openapi({ description: 'Country Name' }),
                    })
                    .exactOptional()
                    .openapi({ title: 'IsoCountry.v2', required: [] }),
                  lastName: z.string(),
                  phone: z.string().exactOptional(),
                  postalCode: z.string().openapi({ description: 'Postal Code / Zip' }),
                  updatedAt: z.iso.datetime({ offset: true }).exactOptional(),
                  updatedBy: z
                    .object({ id: z.int() })
                    .exactOptional()
                    .openapi({ required: ['id'], title: 'User.v2' }),
                })
                .openapi({
                  description: '',
                  required: [
                    'id',
                    'country',
                    'postalCode',
                    'addressRegion',
                    'addressLocality',
                    'address1',
                    'lastName',
                    'firstName',
                  ],
                  title: 'Consignee.v2',
                }),
              warehouse: z
                .object({ id: z.int() })
                .exactOptional()
                .openapi({ description: '', required: ['id'], title: 'Warehouse.v2' }),
            })
            .openapi({
              required: [
                'id',
                'validatedConsignee',
                'originalConsignee',
                'currentStatus',
                'merchant',
                'recordedOn',
                'merchantShippingMethod',
                'merchantOrderId',
              ],
              title: 'OrderResponse.v2',
            }),
        },
      },
    },
    404: { description: 'Order not found', content: {} },
  },
  security: [{ fdcAuth: ['oms'] }],
})

export const getReturnsRoute = createRoute({
  method: 'get',
  path: '/returns',
  tags: ['Returns'],
  summary: 'List Returns',
  description:
    'Retrieves summary return activity during the queried timespan. Although return knowledge can be learned from `GET /orders/{id}` it can take an unknown amount of time for an order that is refused or undeliverable to return to an FDC facility. Instead we recommend regularly querying this API.',
  operationId: 'get-returns',
  request: {
    query: z.object({
      fromDate: z
        .string()
        .openapi({
          param: {
            description:
              'Date-time in ISO 8601 format for selecting orders after, or at, the specified time',
            in: 'query',
            name: 'fromDate',
            required: true,
            schema: { type: 'string' },
          },
        }),
      toDate: z
        .string()
        .openapi({
          param: {
            description:
              'Date-time in ISO 8601 format for selecting orders before, or at, the specified time',
            in: 'query',
            name: 'toDate',
            required: true,
            schema: { type: 'string' },
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
          z.int().min(1),
        )
        .default(1)
        .exactOptional()
        .openapi({
          param: {
            description:
              'A multiplier of the number of items (limit parameter) to skip before returning results',
            in: 'query',
            name: 'page',
            schema: { default: 1, minimum: 1, type: 'integer' },
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
          z.int().min(1).max(200),
        )
        .default(80)
        .exactOptional()
        .openapi({
          param: {
            description: 'The numbers of items to return',
            in: 'query',
            name: 'limit',
            schema: { default: 80, maximum: 200, minimum: 1, type: 'integer' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Returns',
      content: {
        'application/json': {
          schema: z
            .object({
              data: z
                .array(
                  z
                    .object({
                      comments: z.string().nullable().exactOptional(),
                      createdAt: z.iso.datetime({ offset: true }),
                      createdBy: z
                        .object({ id: z.int() })
                        .openapi({ required: ['id'], title: 'User.v2' }),
                      id: z.int(),
                      order: z
                        .object({
                          id: z.int().exactOptional(),
                          merchantId: z.int().exactOptional(),
                          merchantOrderId: z.string().exactOptional(),
                        })
                        .nullable()
                        .exactOptional()
                        .openapi({ required: [] }),
                      reason: z
                        .object({ id: z.int(), title: z.string() })
                        .openapi({ required: ['id', 'title'] }),
                      returnedBy: z.string().exactOptional(),
                      rmaItems: z
                        .array(
                          z
                            .object({
                              comments: z.string().nullable().exactOptional(),
                              id: z.int().exactOptional(),
                              item: z
                                .object({
                                  id: z.int().exactOptional(),
                                  sku: z.string().exactOptional(),
                                })
                                .exactOptional()
                                .openapi({ required: [] }),
                              nonRestockedReason: z
                                .object({
                                  id: z.int().exactOptional(),
                                  title: z.string().exactOptional(),
                                })
                                .nullable()
                                .exactOptional()
                                .openapi({ required: [] }),
                              quantityExpected: z.int().nullable().exactOptional(),
                              quantityRestocked: z.int().exactOptional(),
                              quantityReturned: z.int().exactOptional(),
                              quantityShipped: z.int().exactOptional(),
                            })
                            .openapi({ title: 'RmaItem.v2', required: [] }),
                        )
                        .exactOptional(),
                      rmaNumber: z.string().nullable().exactOptional(),
                      status: z
                        .object({ id: z.int(), title: z.string() })
                        .openapi({ required: ['id', 'title'] }),
                      updatedAt: z.iso.datetime({ offset: true }),
                      updatedBy: z
                        .object({ id: z.int() })
                        .openapi({ required: ['id'], title: 'User.v2' }),
                    })
                    .openapi({
                      required: [
                        'id',
                        'updatedBy',
                        'createdBy',
                        'status',
                        'reason',
                        'createdAt',
                        'updatedAt',
                      ],
                      title: 'Return.v2',
                    }),
                )
                .exactOptional(),
              meta: z
                .object({
                  pagination: z
                    .object({
                      count: z
                        .int()
                        .exactOptional()
                        .openapi({
                          description:
                            'Count of records returned in response, this will be equal to or less then the limit parameter',
                        }),
                      currentPage: z
                        .int()
                        .exactOptional()
                        .openapi({
                          description:
                            'Current page of the response, this will match the page parameter',
                        }),
                      total: z
                        .int()
                        .exactOptional()
                        .openapi({ description: 'Total number of records available to request' }),
                      totalPages: z
                        .int()
                        .exactOptional()
                        .openapi({ description: 'Total number of pages available to request' }),
                    })
                    .exactOptional()
                    .openapi({ title: 'Pagination.v2', required: [] }),
                })
                .exactOptional()
                .openapi({ required: [] }),
            })
            .openapi({ title: 'ReturnsArray.v2', required: [] }),
        },
      },
    },
  },
  security: [{ fdcAuth: ['oms'] }],
})

export const putReturnsRoute = createRoute({
  method: 'put',
  path: '/returns',
  tags: ['Returns'],
  summary: 'Inform us of an RMA',
  description: 'Inform FDC of an expected return.',
  operationId: 'put-returns',
  request: {
    body: {
      description: 'RMA',
      content: {
        'application/json': {
          schema: z
            .object({
              items: z.array(
                z
                  .object({
                    quantityExpected: z.int().min(1).openapi({ example: 1 }),
                    sku: z.string(),
                  })
                  .openapi({ required: ['sku', 'quantityExpected'] }),
              ),
              merchantOrderId: z.string().exactOptional(),
              recipient: z
                .object({
                  address1: z.string().openapi({ description: 'Address Line 1' }),
                  address2: z.string().exactOptional().openapi({ description: 'Address Line 2' }),
                  addressLocality: z.string().openapi({ description: 'City' }),
                  addressRegion: z.string().openapi({ description: 'Province / State' }),
                  companyName: z.string().exactOptional(),
                  country: z
                    .string()
                    .openapi({
                      description:
                        'Country, for best results please provide the two character ISO code',
                    }),
                  email: z
                    .string()
                    .openapi({ description: 'Email, required for international shipments' }),
                  firstName: z.string(),
                  lastName: z.string(),
                  phone: z
                    .string()
                    .openapi({ description: 'Phone number, required for international shipments' }),
                  postalCode: z
                    .string()
                    .exactOptional()
                    .openapi({ description: 'Postal Code / Zip' }),
                })
                .openapi({
                  required: [
                    'country',
                    'addressRegion',
                    'addressLocality',
                    'address1',
                    'phone',
                    'lastName',
                    'firstName',
                    'email',
                  ],
                  title: 'ConsigneeNew.v2',
                }),
              rmaNumber: z.string(),
            })
            .openapi({ required: ['items', 'recipient', 'rmaNumber'], title: 'RmaRequest.v2' }),
        },
      },
      required: true,
    },
  },
  responses: {
    201: {
      description: 'RMA Created',
      content: {
        'application/json': {
          schema: z
            .object({
              items: z.array(
                z
                  .object({
                    quantityExpected: z.int().min(1).openapi({ example: 1 }),
                    sku: z.string(),
                  })
                  .openapi({ required: ['sku', 'quantityExpected'] }),
              ),
              merchantOrderId: z.string().exactOptional(),
              recipient: z
                .object({
                  address1: z.string(),
                  address2: z.string().exactOptional(),
                  addressLocality: z.string().openapi({ description: 'City' }),
                  addressRegion: z.string().openapi({ description: 'Province / State' }),
                  companyName: z.string().exactOptional(),
                  country: z
                    .string()
                    .openapi({ description: 'Ideally provide the two character ISO code' }),
                  email: z.string().exactOptional(),
                  firstName: z.string(),
                  id: z.int(),
                  iso: z
                    .object({
                      id: z.int().exactOptional(),
                      iso2: z
                        .string()
                        .regex(/[A-Z]{2}/)
                        .exactOptional()
                        .openapi({ description: 'Two character ISO code' }),
                      name: z.string().exactOptional().openapi({ description: 'Country Name' }),
                    })
                    .exactOptional()
                    .openapi({ title: 'IsoCountry.v2', required: [] }),
                  lastName: z.string(),
                  phone: z.string().exactOptional(),
                  postalCode: z.string().openapi({ description: 'Postal Code / Zip' }),
                  updatedAt: z.iso.datetime({ offset: true }).exactOptional(),
                  updatedBy: z
                    .object({ id: z.int() })
                    .exactOptional()
                    .openapi({ required: ['id'], title: 'User.v2' }),
                })
                .openapi({
                  description: '',
                  required: [
                    'id',
                    'country',
                    'postalCode',
                    'addressRegion',
                    'addressLocality',
                    'address1',
                    'lastName',
                    'firstName',
                  ],
                  title: 'Consignee.v2',
                }),
              rmaNumber: z.string(),
            })
            .openapi({ required: ['items', 'recipient', 'rmaNumber'], title: 'RmaResponse.v2' }),
        },
      },
    },
    202: {
      description: 'RMA Updated',
      content: {
        'application/json': {
          schema: z
            .object({
              items: z.array(
                z
                  .object({
                    quantityExpected: z.int().min(1).openapi({ example: 1 }),
                    sku: z.string(),
                  })
                  .openapi({ required: ['sku', 'quantityExpected'] }),
              ),
              merchantOrderId: z.string().exactOptional(),
              recipient: z
                .object({
                  address1: z.string(),
                  address2: z.string().exactOptional(),
                  addressLocality: z.string().openapi({ description: 'City' }),
                  addressRegion: z.string().openapi({ description: 'Province / State' }),
                  companyName: z.string().exactOptional(),
                  country: z
                    .string()
                    .openapi({ description: 'Ideally provide the two character ISO code' }),
                  email: z.string().exactOptional(),
                  firstName: z.string(),
                  id: z.int(),
                  iso: z
                    .object({
                      id: z.int().exactOptional(),
                      iso2: z
                        .string()
                        .regex(/[A-Z]{2}/)
                        .exactOptional()
                        .openapi({ description: 'Two character ISO code' }),
                      name: z.string().exactOptional().openapi({ description: 'Country Name' }),
                    })
                    .exactOptional()
                    .openapi({ title: 'IsoCountry.v2', required: [] }),
                  lastName: z.string(),
                  phone: z.string().exactOptional(),
                  postalCode: z.string().openapi({ description: 'Postal Code / Zip' }),
                  updatedAt: z.iso.datetime({ offset: true }).exactOptional(),
                  updatedBy: z
                    .object({ id: z.int() })
                    .exactOptional()
                    .openapi({ required: ['id'], title: 'User.v2' }),
                })
                .openapi({
                  description: '',
                  required: [
                    'id',
                    'country',
                    'postalCode',
                    'addressRegion',
                    'addressLocality',
                    'address1',
                    'lastName',
                    'firstName',
                  ],
                  title: 'Consignee.v2',
                }),
              rmaNumber: z.string(),
            })
            .openapi({ required: ['items', 'recipient', 'rmaNumber'], title: 'RmaResponse.v2' }),
        },
      },
    },
    404: {
      description: 'A Component of Your Request Was Not Found',
      content: {
        'application/json': {
          schema: z
            .object({ message: z.string().exactOptional() })
            .openapi({ title: 'ErrorStandard.v2', required: [] }),
        },
      },
    },
    409: {
      description: 'RMA Already Processed',
      content: {
        'application/json': {
          schema: z
            .object({
              items: z.array(
                z
                  .object({
                    quantityExpected: z.int().min(1).openapi({ example: 1 }),
                    sku: z.string(),
                  })
                  .openapi({ required: ['sku', 'quantityExpected'] }),
              ),
              merchantOrderId: z.string().exactOptional(),
              recipient: z
                .object({
                  address1: z.string(),
                  address2: z.string().exactOptional(),
                  addressLocality: z.string().openapi({ description: 'City' }),
                  addressRegion: z.string().openapi({ description: 'Province / State' }),
                  companyName: z.string().exactOptional(),
                  country: z
                    .string()
                    .openapi({ description: 'Ideally provide the two character ISO code' }),
                  email: z.string().exactOptional(),
                  firstName: z.string(),
                  id: z.int(),
                  iso: z
                    .object({
                      id: z.int().exactOptional(),
                      iso2: z
                        .string()
                        .regex(/[A-Z]{2}/)
                        .exactOptional()
                        .openapi({ description: 'Two character ISO code' }),
                      name: z.string().exactOptional().openapi({ description: 'Country Name' }),
                    })
                    .exactOptional()
                    .openapi({ title: 'IsoCountry.v2', required: [] }),
                  lastName: z.string(),
                  phone: z.string().exactOptional(),
                  postalCode: z.string().openapi({ description: 'Postal Code / Zip' }),
                  updatedAt: z.iso.datetime({ offset: true }).exactOptional(),
                  updatedBy: z
                    .object({ id: z.int() })
                    .exactOptional()
                    .openapi({ required: ['id'], title: 'User.v2' }),
                })
                .openapi({
                  description: '',
                  required: [
                    'id',
                    'country',
                    'postalCode',
                    'addressRegion',
                    'addressLocality',
                    'address1',
                    'lastName',
                    'firstName',
                  ],
                  title: 'Consignee.v2',
                }),
              rmaNumber: z.string(),
            })
            .openapi({ required: ['items', 'recipient', 'rmaNumber'], title: 'RmaResponse.v2' }),
        },
      },
    },
  },
  security: [{ fdcAuth: ['oms'] }],
})

export const getTrackRoute = createRoute({
  method: 'get',
  path: '/track',
  tags: ['Tracking'],
  summary: 'Tracking',
  description:
    'Get uniformed tracking events for any package, this response is carrier independent. Please note, an API Key is required for throttling purposes, please contact your success manager for details.',
  operationId: 'get-track',
  request: {
    query: z.object({
      trackingNumber: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'trackingNumber',
            schema: { type: 'string' },
            required: false,
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
              destination: z
                .object({
                  bbox: z.array(z.any()).exactOptional(),
                  centerline: z
                    .object({
                      coordinates: z.xor([
                        z.array(
                          z
                            .array(z.number())
                            .openapi({
                              title: 'Coordinates.v1',
                              'x-examples': { example: [102, 0.5] },
                            }),
                        ),
                        z
                          .array(z.number())
                          .openapi({
                            title: 'Coordinates.v1',
                            'x-examples': { example: [102, 0.5] },
                          }),
                      ]),
                      type: z
                        .enum([
                          'Point',
                          'LineString',
                          'Polygon',
                          'MultiPoint',
                          'MultiLineString',
                          'MultiPolygon',
                        ])
                        .openapi({ description: 'the geometry type', example: 'Point' }),
                    })
                    .exactOptional()
                    .openapi({
                      description: 'GeoJSon geometry',
                      externalDocs: {
                        url: 'http://geojson.org/geojson-spec.html#geometry-objects',
                      },
                      required: ['type', 'coordinates'],
                      title: 'Geometry',
                      'x-tags': ['GeoJSON'],
                    }),
                  geometry: z
                    .object({
                      coordinates: z.xor([
                        z.array(
                          z
                            .array(z.number())
                            .openapi({
                              title: 'Coordinates.v1',
                              'x-examples': { example: [102, 0.5] },
                            }),
                        ),
                        z
                          .array(z.number())
                          .openapi({
                            title: 'Coordinates.v1',
                            'x-examples': { example: [102, 0.5] },
                          }),
                      ]),
                      type: z
                        .enum([
                          'Point',
                          'LineString',
                          'Polygon',
                          'MultiPoint',
                          'MultiLineString',
                          'MultiPolygon',
                        ])
                        .openapi({ description: 'the geometry type', example: 'Point' }),
                    })
                    .openapi({
                      description: 'GeoJSon geometry',
                      externalDocs: {
                        url: 'http://geojson.org/geojson-spec.html#geometry-objects',
                      },
                      required: ['type', 'coordinates'],
                      title: 'Geometry',
                      'x-tags': ['GeoJSON'],
                    }),
                  id: z.int().exactOptional(),
                  properties: z
                    .object({ name: z.string().exactOptional() })
                    .openapi({ required: [] }),
                  title: z.string().exactOptional(),
                  type: z.literal('Feature').openapi({ example: 'Feature' }),
                })
                .exactOptional()
                .openapi({
                  description: 'GeoJSon Feature',
                  externalDocs: { url: 'https://tools.ietf.org/html/rfc7946#section-3.2' },
                  required: ['type', 'properties', 'geometry'],
                  title: 'Feature',
                  'x-tags': ['GeoJSON'],
                }),
              fdcOrderId: z.int().exactOptional(),
              firstCheckedDateTime: z.iso.datetime({ offset: true }).exactOptional(),
              firstTransitEvent: z.iso.datetime({ offset: true }).exactOptional(),
              lastCheckedDateTime: z.iso.datetime({ offset: true }).exactOptional(),
              lastUpdatedDateTime: z.iso.datetime({ offset: true }).exactOptional(),
              origin: z
                .object({
                  bbox: z.array(z.any()).exactOptional(),
                  centerline: z
                    .object({
                      coordinates: z.xor([
                        z.array(
                          z
                            .array(z.number())
                            .openapi({
                              title: 'Coordinates.v1',
                              'x-examples': { example: [102, 0.5] },
                            }),
                        ),
                        z
                          .array(z.number())
                          .openapi({
                            title: 'Coordinates.v1',
                            'x-examples': { example: [102, 0.5] },
                          }),
                      ]),
                      type: z
                        .enum([
                          'Point',
                          'LineString',
                          'Polygon',
                          'MultiPoint',
                          'MultiLineString',
                          'MultiPolygon',
                        ])
                        .openapi({ description: 'the geometry type', example: 'Point' }),
                    })
                    .exactOptional()
                    .openapi({
                      description: 'GeoJSon geometry',
                      externalDocs: {
                        url: 'http://geojson.org/geojson-spec.html#geometry-objects',
                      },
                      required: ['type', 'coordinates'],
                      title: 'Geometry',
                      'x-tags': ['GeoJSON'],
                    }),
                  geometry: z
                    .object({
                      coordinates: z.xor([
                        z.array(
                          z
                            .array(z.number())
                            .openapi({
                              title: 'Coordinates.v1',
                              'x-examples': { example: [102, 0.5] },
                            }),
                        ),
                        z
                          .array(z.number())
                          .openapi({
                            title: 'Coordinates.v1',
                            'x-examples': { example: [102, 0.5] },
                          }),
                      ]),
                      type: z
                        .enum([
                          'Point',
                          'LineString',
                          'Polygon',
                          'MultiPoint',
                          'MultiLineString',
                          'MultiPolygon',
                        ])
                        .openapi({ description: 'the geometry type', example: 'Point' }),
                    })
                    .openapi({
                      description: 'GeoJSon geometry',
                      externalDocs: {
                        url: 'http://geojson.org/geojson-spec.html#geometry-objects',
                      },
                      required: ['type', 'coordinates'],
                      title: 'Geometry',
                      'x-tags': ['GeoJSON'],
                    }),
                  id: z.int().exactOptional(),
                  properties: z
                    .object({ name: z.string().exactOptional() })
                    .openapi({ required: [] }),
                  title: z.string().exactOptional(),
                  type: z.literal('Feature').openapi({ example: 'Feature' }),
                })
                .exactOptional()
                .openapi({
                  description: 'GeoJSon Feature',
                  externalDocs: { url: 'https://tools.ietf.org/html/rfc7946#section-3.2' },
                  required: ['type', 'properties', 'geometry'],
                  title: 'Feature',
                  'x-tags': ['GeoJSON'],
                }),
              status: z.string().exactOptional(),
              statusCategoryCode: z.int().exactOptional(),
              statusDateTime: z.iso.datetime({ offset: true }).exactOptional(),
              statusMessage: z.string().exactOptional(),
              trackedEvents: z
                .array(
                  z
                    .object({
                      eventCategory: z.string().exactOptional(),
                      eventCategoryCode: z.int().exactOptional(),
                      eventDateTime: z.iso.datetime({ offset: true }).exactOptional(),
                      eventLocation: z
                        .object({
                          bbox: z.array(z.any()).exactOptional(),
                          centerline: z
                            .object({
                              coordinates: z.xor([
                                z.array(
                                  z
                                    .array(z.number())
                                    .openapi({
                                      title: 'Coordinates.v1',
                                      'x-examples': { example: [102, 0.5] },
                                    }),
                                ),
                                z
                                  .array(z.number())
                                  .openapi({
                                    title: 'Coordinates.v1',
                                    'x-examples': { example: [102, 0.5] },
                                  }),
                              ]),
                              type: z
                                .enum([
                                  'Point',
                                  'LineString',
                                  'Polygon',
                                  'MultiPoint',
                                  'MultiLineString',
                                  'MultiPolygon',
                                ])
                                .openapi({ description: 'the geometry type', example: 'Point' }),
                            })
                            .exactOptional()
                            .openapi({
                              description: 'GeoJSon geometry',
                              externalDocs: {
                                url: 'http://geojson.org/geojson-spec.html#geometry-objects',
                              },
                              required: ['type', 'coordinates'],
                              title: 'Geometry',
                              'x-tags': ['GeoJSON'],
                            }),
                          geometry: z
                            .object({
                              coordinates: z.xor([
                                z.array(
                                  z
                                    .array(z.number())
                                    .openapi({
                                      title: 'Coordinates.v1',
                                      'x-examples': { example: [102, 0.5] },
                                    }),
                                ),
                                z
                                  .array(z.number())
                                  .openapi({
                                    title: 'Coordinates.v1',
                                    'x-examples': { example: [102, 0.5] },
                                  }),
                              ]),
                              type: z
                                .enum([
                                  'Point',
                                  'LineString',
                                  'Polygon',
                                  'MultiPoint',
                                  'MultiLineString',
                                  'MultiPolygon',
                                ])
                                .openapi({ description: 'the geometry type', example: 'Point' }),
                            })
                            .openapi({
                              description: 'GeoJSon geometry',
                              externalDocs: {
                                url: 'http://geojson.org/geojson-spec.html#geometry-objects',
                              },
                              required: ['type', 'coordinates'],
                              title: 'Geometry',
                              'x-tags': ['GeoJSON'],
                            }),
                          id: z.int().exactOptional(),
                          properties: z
                            .object({ name: z.string().exactOptional() })
                            .openapi({ required: [] }),
                          title: z.string().exactOptional(),
                          type: z.literal('Feature').openapi({ example: 'Feature' }),
                        })
                        .exactOptional()
                        .openapi({
                          description: 'GeoJSon Feature',
                          externalDocs: { url: 'https://tools.ietf.org/html/rfc7946#section-3.2' },
                          required: ['type', 'properties', 'geometry'],
                          title: 'Feature',
                          'x-tags': ['GeoJSON'],
                        }),
                      eventSource: z
                        .enum(['carrier', 'internal'])
                        .exactOptional()
                        .openapi({ example: 'carrier' }),
                      eventStatus: z.string().exactOptional(),
                    })
                    .openapi({
                      title: 'TrackingEvent.v2',
                      'x-examples': {
                        'example-1': {
                          eventCategory: 'Delivered',
                          eventCategoryCode: 5,
                          eventDateTime: '2018-07-31 16:15:00',
                          eventLocation: {},
                          eventStatus: 'Delivered, In/At Mailbox',
                          statusSource: 'carrier',
                        },
                      },
                      'x-tags': ['Tracking'],
                      required: [],
                    }),
                )
                .exactOptional(),
              trackingNumber: z
                .object({
                  barcodeScanValue: z
                    .string()
                    .exactOptional()
                    .openapi({
                      deprecated: true,
                      description: 'The computer readable alternative to the human readable',
                    }),
                  carrier: z
                    .object({ id: z.int() })
                    .exactOptional()
                    .openapi({ required: ['id'], title: 'CarrierSimple.v2' }),
                  value: z
                    .string()
                    .exactOptional()
                    .openapi({
                      description:
                        'The human readable tracking number recipients (consignee) expect',
                    }),
                })
                .exactOptional()
                .openapi({ title: 'TrackingNumber.v2', 'x-tags': ['Tracking'], required: [] }),
            })
            .openapi({
              description: '',
              title: 'trackingResponse',
              'x-examples': {},
              'x-tags': ['Tracking'],
              required: [],
            }),
        },
      },
    },
    404: { description: 'Not Found' },
    429: { description: 'Too Many Requests' },
  },
})

export const getUsersMeRoute = createRoute({
  method: 'get',
  path: '/users/me',
  tags: ['Users'],
  summary: 'About Me',
  description:
    "Returns the user profile of the access token's owner. This could be useful if managing multiple accounts or confirming validity of a token.",
  operationId: 'get-users-me',
  responses: {
    200: {
      description: 'User',
      content: {
        'application/json': {
          schema: z
            .object({
              apiKey: z
                .string()
                .exactOptional()
                .openapi({ deprecated: true, description: 'Depricated' }),
              contactInfo: z
                .object({
                  apiKey: z
                    .string()
                    .exactOptional()
                    .openapi({ deprecated: true, description: 'Depricated' }),
                  contactInfo: z
                    .object({
                      address1: z.string(),
                      address2: z.string().exactOptional(),
                      addressLocality: z.string().openapi({ description: 'City' }),
                      addressRegion: z.string().openapi({ description: 'Province / State' }),
                      companyName: z.string().exactOptional(),
                      country: z
                        .string()
                        .openapi({ description: 'Ideally provide the two character ISO code' }),
                      email: z.string().exactOptional(),
                      firstName: z.string(),
                      id: z.int(),
                      iso: z
                        .object({
                          id: z.int().exactOptional(),
                          iso2: z
                            .string()
                            .regex(/[A-Z]{2}/)
                            .exactOptional()
                            .openapi({ description: 'Two character ISO code' }),
                          name: z.string().exactOptional().openapi({ description: 'Country Name' }),
                        })
                        .exactOptional()
                        .openapi({ title: 'IsoCountry.v2', required: [] }),
                      lastName: z.string(),
                      phone: z.string().exactOptional(),
                      postalCode: z.string().openapi({ description: 'Postal Code / Zip' }),
                      updatedAt: z.iso.datetime({ offset: true }).exactOptional(),
                      updatedBy: z
                        .object({ id: z.int() })
                        .exactOptional()
                        .openapi({ required: ['id'], title: 'User.v2' }),
                    })
                    .exactOptional()
                    .openapi({
                      description: '',
                      required: [
                        'id',
                        'country',
                        'postalCode',
                        'addressRegion',
                        'addressLocality',
                        'address1',
                        'lastName',
                        'firstName',
                      ],
                      title: 'Consignee.v2',
                    }),
                  createDate: z.iso.datetime({ offset: true }).exactOptional(),
                  deptLeader: z.boolean().exactOptional().openapi({ deprecated: true }),
                  id: z.int(),
                  merchant: z
                    .object({ id: z.int().exactOptional() })
                    .exactOptional()
                    .openapi({ required: [] }),
                  name: z.string().exactOptional(),
                  status: z.boolean().exactOptional(),
                  updatedAt: z.iso.datetime({ offset: true }).exactOptional(),
                  updatedBy: z.iso.datetime({ offset: true }).exactOptional(),
                  username: z.string().exactOptional(),
                })
                .exactOptional()
                .openapi({ description: '', required: ['id'], title: 'UserContact.v2' }),
              createDate: z.iso.datetime({ offset: true }).exactOptional(),
              deptLeader: z.boolean().exactOptional().openapi({ deprecated: true }),
              id: z.int(),
              merchant: z
                .object({ id: z.int().exactOptional() })
                .exactOptional()
                .openapi({ required: [] }),
              name: z.string().exactOptional(),
              status: z.boolean().exactOptional(),
              updatedAt: z.iso.datetime({ offset: true }).exactOptional(),
              updatedBy: z.iso.datetime({ offset: true }).exactOptional(),
              username: z.string().exactOptional(),
            })
            .openapi({ description: '', required: ['id'], title: 'UserContact.v2' }),
        },
      },
    },
  },
  security: [{ fdcAuth: ['oms'] }],
})
