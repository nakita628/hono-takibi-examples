import { createRoute, z } from '@hono/zod-openapi'

const ApiCredentialsSchema = z
  .strictObject({ key: z.guid().exactOptional(), serial: z.guid().nullable().exactOptional() })
  .openapi({ required: [] })
  .openapi('ApiCredentials')

const ApiKeySchema = z
  .strictObject({ key: z.guid().exactOptional() })
  .openapi({ required: [] })
  .openapi('ApiKey')

const CountOfSchema = z
  .strictObject({ count: z.int32().exactOptional() })
  .openapi({ required: [] })
  .openapi('CountOf')

const CurrentKeySchema = z
  .strictObject({ current: z.boolean().exactOptional() })
  .openapi({ required: [] })
  .openapi('CurrentKey')

const ExpirySchema = z
  .strictObject({
    expires: z.iso.datetime({ offset: true }).exactOptional(),
    time: z.string().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('Expiry')

const FindCredentialsSchema = z
  .strictObject({ key: z.guid().exactOptional(), serial: z.guid().exactOptional() })
  .openapi({ required: [] })
  .openapi('FindCredentials')

const KeyViewSchema = z
  .strictObject({
    action: z.string().min(1),
    callbackOnModify: z.boolean().openapi({ title: 'Callback On Modified' }),
    callbackUrl: z
      .url()
      .min(0)
      .max(800)
      .nullable()
      .exactOptional()
      .openapi({ title: 'Callback Url' }),
    commenced: z.iso.datetime({ offset: true }).min(1).openapi({ title: 'Start From' }),
    created: z.iso.datetime({ offset: true }).exactOptional(),
    current: z.boolean().exactOptional(),
    custom: z.any().nullable().exactOptional(),
    frequency: z.string().min(1),
    name: z.string().min(0).max(80).nullable().exactOptional(),
    serial: z.guid().exactOptional(),
    updated: z.iso.datetime({ offset: true }).nullable().exactOptional(),
  })
  .openapi({ required: ['commenced', 'callbackOnModify', 'frequency', 'action'] })
  .openapi('KeyView')

const ProductCreateModifySchema = z
  .strictObject({
    custom: z.any().nullable().exactOptional(),
    key: z.guid().exactOptional(),
    name: z.string().nullable().exactOptional(),
    serial: z.guid().nullable().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ProductCreateModify')

const SubscriptionViewSchema = z
  .strictObject({
    action: z.string().min(1),
    callbackOnModify: z.boolean().openapi({ title: 'Callback On Modified' }),
    callbackUrl: z
      .url()
      .min(0)
      .max(800)
      .nullable()
      .exactOptional()
      .openapi({ title: 'Callback Url' }),
    commenced: z.iso.datetime({ offset: true }).min(1).openapi({ title: 'Start From' }),
    created: z.iso.datetime({ offset: true }).exactOptional(),
    custom: z.any().nullable().exactOptional(),
    frequency: z.string().min(1),
    keys: z.array(KeyViewSchema).nullable().exactOptional(),
    name: z.string().min(0).max(80).nullable().exactOptional(),
    updated: z.iso.datetime({ offset: true }).nullable().exactOptional(),
  })
  .openapi({ required: ['commenced', 'callbackOnModify', 'frequency', 'action'] })
  .openapi('SubscriptionView')

const ProductViewSchema = z
  .strictObject({
    created: z.iso.datetime({ offset: true }).exactOptional(),
    custom: z.any().nullable().exactOptional(),
    name: z.string().min(0).max(80).nullable().exactOptional(),
    serial: z.guid().exactOptional(),
    subscriptions: z.array(SubscriptionViewSchema).nullable().exactOptional(),
    updated: z.iso.datetime({ offset: true }).nullable().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ProductView')

const SubscriptionCreateModifySchema = z
  .strictObject({
    action: z.string().min(1),
    callbackOnModify: z.boolean().nullable().exactOptional(),
    callbackUrl: z
      .url()
      .min(0)
      .max(800)
      .nullable()
      .exactOptional()
      .openapi({ title: 'Callback Url' }),
    custom: z.any().nullable().exactOptional(),
    frequency: z.string().min(1),
    key: z.guid().exactOptional(),
    name: z.string().min(0).max(80).nullable().exactOptional(),
    serial: z.guid().exactOptional(),
    startFrom: z.string().nullable().exactOptional(),
  })
  .openapi({ required: ['frequency', 'action'] })
  .openapi('SubscriptionCreateModify')

export const getV1KeysApiCurrentSerialRoute = createRoute({
  method: 'get',
  path: '/v1/KeysApi/Current/{serial}',
  tags: ['KeysApi'],
  operationId: 'KeysApi_Current',
  request: {
    params: z.object({
      serial: z
        .guid()
        .openapi({
          param: {
            in: 'path',
            name: 'serial',
            required: true,
            schema: { format: 'guid', type: 'string' },
            'x-position': 1,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: '',
      content: { 'application/json': { schema: z.xor([CurrentKeySchema]).nullable() } },
    },
  },
})

export const getV1KeysApiCustomSerialRoute = createRoute({
  method: 'get',
  path: '/v1/KeysApi/Custom/{serial}',
  tags: ['KeysApi'],
  operationId: 'KeysApi_Custom',
  request: {
    params: z.object({
      serial: z
        .guid()
        .openapi({
          param: {
            in: 'path',
            name: 'serial',
            required: true,
            schema: { format: 'guid', type: 'string' },
            'x-position': 1,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: '',
      content: {
        'application/octet-stream': {
          schema: z.file().openapi({ type: 'string', format: 'binary' }),
        },
      },
    },
  },
})

export const getV1KeysApiExpirySerialRoute = createRoute({
  method: 'get',
  path: '/v1/KeysApi/Expiry/{serial}',
  tags: ['KeysApi'],
  operationId: 'KeysApi_Expiry',
  request: {
    params: z.object({
      serial: z
        .guid()
        .openapi({
          param: {
            in: 'path',
            name: 'serial',
            required: true,
            schema: { format: 'guid', type: 'string' },
            'x-position': 1,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: '',
      content: { 'application/json': { schema: z.xor([ExpirySchema]).nullable() } },
    },
  },
})

export const getV1KeysApiFindSerialRoute = createRoute({
  method: 'get',
  path: '/v1/KeysApi/Find/{serial}',
  tags: ['KeysApi'],
  operationId: 'KeysApi_Find',
  request: {
    params: z.object({
      serial: z
        .guid()
        .openapi({
          param: {
            in: 'path',
            name: 'serial',
            required: true,
            schema: { format: 'guid', type: 'string' },
            'x-position': 1,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: '',
      content: { 'application/json': { schema: z.xor([KeyViewSchema]).nullable() } },
    },
  },
})

export const postV1ProductsApiRoute = createRoute({
  method: 'post',
  path: '/v1/ProductsApi',
  tags: ['ProductsApi'],
  operationId: 'ProductsApi_PatchProduct2',
  request: {
    body: {
      content: { 'application/json': { schema: z.xor([ProductCreateModifySchema]).nullable() } },
      required: true,
    },
  },
  responses: { 204: { description: '' } },
})

export const patchV1ProductsApiRoute = createRoute({
  method: 'patch',
  path: '/v1/ProductsApi',
  tags: ['ProductsApi'],
  operationId: 'ProductsApi_PatchProduct',
  request: {
    body: {
      content: { 'application/json': { schema: z.xor([ProductCreateModifySchema]).nullable() } },
      required: true,
    },
  },
  responses: { 204: { description: '' } },
})

export const postV1ProductsApiCountRoute = createRoute({
  method: 'post',
  path: '/v1/ProductsApi/Count',
  tags: ['ProductsApi'],
  operationId: 'ProductsApi_Count',
  request: {
    body: {
      content: { 'application/json': { schema: z.xor([ApiKeySchema]).nullable() } },
      required: true,
    },
  },
  responses: {
    200: {
      description: '',
      content: { 'application/json': { schema: z.xor([CountOfSchema]).nullable() } },
    },
  },
})

export const postV1ProductsApiFindRoute = createRoute({
  method: 'post',
  path: '/v1/ProductsApi/Find',
  tags: ['ProductsApi'],
  operationId: 'ProductsApi_Find',
  request: {
    query: z.object({
      page: z
        .preprocess(
          (val) => (val === 'null' ? null : val),
          z
            .preprocess(
              (val) =>
                typeof val === 'string' &&
                /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                  ? Number(val)
                  : val,
              z.int32(),
            )
            .nullable(),
        )
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'page',
            required: false,
            schema: { format: 'int32', nullable: true, type: 'integer' },
            'x-position': 2,
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: z.xor([FindCredentialsSchema]).nullable() } },
      required: true,
    },
  },
  responses: {
    200: {
      description: '',
      content: { 'application/json': { schema: z.xor([ProductViewSchema]).nullable() } },
    },
  },
})

export const postV1ProductsApiListRoute = createRoute({
  method: 'post',
  path: '/v1/ProductsApi/List',
  tags: ['ProductsApi'],
  operationId: 'ProductsApi_List',
  request: {
    query: z.object({
      page: z
        .preprocess(
          (val) => (val === 'null' ? null : val),
          z
            .preprocess(
              (val) =>
                typeof val === 'string' &&
                /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                  ? Number(val)
                  : val,
              z.int32(),
            )
            .nullable(),
        )
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'page',
            required: false,
            schema: { format: 'int32', nullable: true, type: 'integer' },
            'x-position': 2,
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: z.xor([ApiKeySchema]).nullable() } },
      required: true,
    },
  },
  responses: {
    200: {
      description: '',
      content: { 'application/json': { schema: z.array(ProductViewSchema).nullable() } },
    },
  },
})

export const postV1ProductsApiSaveRoute = createRoute({
  method: 'post',
  path: '/v1/ProductsApi/Save',
  tags: ['ProductsApi'],
  operationId: 'ProductsApi_Save',
  request: {
    body: {
      content: { 'application/json': { schema: z.xor([ProductCreateModifySchema]).nullable() } },
      required: true,
    },
  },
  responses: {
    201: {
      description: '',
      content: { 'application/json': { schema: z.xor([ProductViewSchema]).nullable() } },
    },
  },
})

export const postV1ProductsApiSerialRoute = createRoute({
  method: 'post',
  path: '/v1/ProductsApi/{serial}',
  tags: ['ProductsApi'],
  operationId: 'ProductsApi_DeleteProduct2',
  request: {
    headers: z.object({
      'X-Api-Key': z
        .guid()
        .openapi({
          param: {
            in: 'header',
            name: 'X-Api-Key',
            required: true,
            schema: { format: 'guid', type: 'string' },
          },
        }),
    }),
    params: z.object({
      serial: z
        .guid()
        .openapi({
          param: {
            in: 'path',
            name: 'serial',
            required: true,
            schema: { format: 'guid', type: 'string' },
            'x-position': 1,
          },
        }),
    }),
  },
  responses: { 204: { description: '' } },
})

export const deleteV1ProductsApiSerialRoute = createRoute({
  method: 'delete',
  path: '/v1/ProductsApi/{serial}',
  tags: ['ProductsApi'],
  operationId: 'ProductsApi_DeleteProduct',
  request: {
    headers: z.object({
      'X-Api-Key': z
        .guid()
        .openapi({
          param: {
            in: 'header',
            name: 'X-Api-Key',
            required: true,
            schema: { format: 'guid', type: 'string' },
          },
        }),
    }),
    params: z.object({
      serial: z
        .guid()
        .openapi({
          param: {
            in: 'path',
            name: 'serial',
            required: true,
            schema: { format: 'guid', type: 'string' },
            'x-position': 1,
          },
        }),
    }),
  },
  responses: { 204: { description: '' } },
})

export const putV1SubscriptionsApiRoute = createRoute({
  method: 'put',
  path: '/v1/SubscriptionsApi',
  tags: ['SubscriptionsApi'],
  operationId: 'SubscriptionsApi_PutSubscription',
  request: {
    body: {
      content: {
        'application/json': { schema: z.xor([SubscriptionCreateModifySchema]).nullable() },
      },
      required: true,
    },
  },
  responses: { 204: { description: '' } },
})

export const postV1SubscriptionsApiRoute = createRoute({
  method: 'post',
  path: '/v1/SubscriptionsApi',
  tags: ['SubscriptionsApi'],
  operationId: 'SubscriptionsApi_PutSubscription2',
  request: {
    body: {
      content: {
        'application/json': { schema: z.xor([SubscriptionCreateModifySchema]).nullable() },
      },
      required: true,
    },
  },
  responses: { 204: { description: '' } },
})

export const postV1SubscriptionsApiCountRoute = createRoute({
  method: 'post',
  path: '/v1/SubscriptionsApi/Count',
  tags: ['SubscriptionsApi'],
  operationId: 'SubscriptionsApi_Count',
  request: {
    body: {
      content: { 'application/json': { schema: z.xor([ApiCredentialsSchema]).nullable() } },
      required: true,
    },
  },
  responses: {
    200: {
      description: '',
      content: { 'application/json': { schema: z.xor([CountOfSchema]).nullable() } },
    },
  },
})

export const postV1SubscriptionsApiDisableRoute = createRoute({
  method: 'post',
  path: '/v1/SubscriptionsApi/Disable',
  tags: ['SubscriptionsApi'],
  operationId: 'SubscriptionsApi_Disable2',
  request: {
    body: {
      content: { 'application/json': { schema: z.xor([FindCredentialsSchema]).nullable() } },
      required: true,
    },
  },
  responses: { 204: { description: '' } },
})

export const patchV1SubscriptionsApiDisableRoute = createRoute({
  method: 'patch',
  path: '/v1/SubscriptionsApi/Disable',
  tags: ['SubscriptionsApi'],
  operationId: 'SubscriptionsApi_Disable',
  request: {
    body: {
      content: { 'application/json': { schema: z.xor([FindCredentialsSchema]).nullable() } },
      required: true,
    },
  },
  responses: { 204: { description: '' } },
})

export const postV1SubscriptionsApiEnableRoute = createRoute({
  method: 'post',
  path: '/v1/SubscriptionsApi/Enable',
  tags: ['SubscriptionsApi'],
  operationId: 'SubscriptionsApi_Enable2',
  request: {
    body: {
      content: { 'application/json': { schema: z.xor([FindCredentialsSchema]).nullable() } },
      required: true,
    },
  },
  responses: { 204: { description: '' } },
})

export const patchV1SubscriptionsApiEnableRoute = createRoute({
  method: 'patch',
  path: '/v1/SubscriptionsApi/Enable',
  tags: ['SubscriptionsApi'],
  operationId: 'SubscriptionsApi_Enable',
  request: {
    body: {
      content: { 'application/json': { schema: z.xor([FindCredentialsSchema]).nullable() } },
      required: true,
    },
  },
  responses: { 204: { description: '' } },
})

export const postV1SubscriptionsApiFindRoute = createRoute({
  method: 'post',
  path: '/v1/SubscriptionsApi/Find',
  tags: ['SubscriptionsApi'],
  operationId: 'SubscriptionsApi_Find',
  request: {
    body: {
      content: { 'application/json': { schema: z.xor([FindCredentialsSchema]).nullable() } },
      required: true,
    },
  },
  responses: {
    200: {
      description: '',
      content: { 'application/json': { schema: z.xor([SubscriptionViewSchema]).nullable() } },
    },
  },
})

export const postV1SubscriptionsApiListRoute = createRoute({
  method: 'post',
  path: '/v1/SubscriptionsApi/List',
  tags: ['SubscriptionsApi'],
  operationId: 'SubscriptionsApi_List',
  request: {
    query: z.object({
      page: z
        .preprocess(
          (val) => (val === 'null' ? null : val),
          z
            .preprocess(
              (val) =>
                typeof val === 'string' &&
                /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                  ? Number(val)
                  : val,
              z.int32(),
            )
            .nullable(),
        )
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'page',
            required: false,
            schema: { format: 'int32', nullable: true, type: 'integer' },
            'x-position': 2,
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: z.xor([FindCredentialsSchema]).nullable() } },
      required: true,
    },
  },
  responses: {
    200: {
      description: '',
      content: { 'application/json': { schema: z.array(SubscriptionViewSchema).nullable() } },
    },
  },
})

export const postV1SubscriptionsApiSaveRoute = createRoute({
  method: 'post',
  path: '/v1/SubscriptionsApi/Save',
  tags: ['SubscriptionsApi'],
  operationId: 'SubscriptionsApi_Save',
  request: {
    body: {
      content: {
        'application/json': { schema: z.xor([SubscriptionCreateModifySchema]).nullable() },
      },
      required: true,
    },
  },
  responses: {
    201: {
      description: '',
      content: { 'application/json': { schema: z.xor([KeyViewSchema]).nullable() } },
    },
  },
})

export const postV1SubscriptionsApiSerialRoute = createRoute({
  method: 'post',
  path: '/v1/SubscriptionsApi/{serial}',
  tags: ['SubscriptionsApi'],
  operationId: 'SubscriptionsApi_DeleteSubscription2',
  request: {
    headers: z.object({
      'X-Api-Key': z
        .guid()
        .openapi({
          param: {
            in: 'header',
            name: 'X-Api-Key',
            required: true,
            schema: { format: 'guid', type: 'string' },
          },
        }),
    }),
    params: z.object({
      serial: z
        .guid()
        .openapi({
          param: {
            in: 'path',
            name: 'serial',
            required: true,
            schema: { format: 'guid', type: 'string' },
            'x-position': 1,
          },
        }),
    }),
    query: z.object({
      keep: z
        .preprocess((val) => (val === 'null' ? null : val), z.stringbool().nullable())
        .openapi({
          param: {
            in: 'query',
            name: 'keep',
            required: true,
            schema: { nullable: true, type: 'boolean' },
            'x-position': 2,
          },
        }),
    }),
  },
  responses: { 204: { description: '' } },
})

export const deleteV1SubscriptionsApiSerialRoute = createRoute({
  method: 'delete',
  path: '/v1/SubscriptionsApi/{serial}',
  tags: ['SubscriptionsApi'],
  operationId: 'SubscriptionsApi_DeleteSubscription',
  request: {
    headers: z.object({
      'X-Api-Key': z
        .guid()
        .openapi({
          param: {
            in: 'header',
            name: 'X-Api-Key',
            required: true,
            schema: { format: 'guid', type: 'string' },
          },
        }),
    }),
    params: z.object({
      serial: z
        .guid()
        .openapi({
          param: {
            in: 'path',
            name: 'serial',
            required: true,
            schema: { format: 'guid', type: 'string' },
            'x-position': 1,
          },
        }),
    }),
    query: z.object({
      keep: z
        .preprocess((val) => (val === 'null' ? null : val), z.stringbool().nullable())
        .openapi({
          param: {
            in: 'query',
            name: 'keep',
            required: true,
            schema: { nullable: true, type: 'boolean' },
            'x-position': 2,
          },
        }),
    }),
  },
  responses: { 204: { description: '' } },
})
