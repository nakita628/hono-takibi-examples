import { createRoute, z } from '@hono/zod-openapi'

const OCSMetaSchema = z
  .object({
    status: z.string(),
    statuscode: z.int(),
    message: z.string().exactOptional(),
    totalitems: z.string().exactOptional(),
    itemsperpage: z.string().exactOptional(),
  })
  .openapi({ required: ['status', 'statuscode'] })
  .openapi('OCSMeta')

const WebhookInfoSchema = z
  .object({
    id: z.string(),
    userId: z.string(),
    httpMethod: z.string(),
    uri: z.string(),
    event: z.string().exactOptional(),
    eventFilter: z.record(z.string(), z.object({})).exactOptional(),
    userIdFilter: z.string().exactOptional(),
    headers: z.record(z.string(), z.string()).exactOptional(),
    authMethod: z.string(),
    authData: z.record(z.string(), z.object({})).exactOptional(),
    tokenNeeded: z
      .object({
        user_ids: z.record(z.string(), z.string()).exactOptional(),
        user_roles: z.record(z.string(), z.string()).exactOptional(),
      })
      .nullable()
      .exactOptional()
      .openapi({ required: [] }),
  })
  .openapi({ required: ['id', 'userId', 'httpMethod', 'uri', 'authMethod'] })
  .openapi('WebhookInfo')

const BasicAuthSecurityScheme = { type: 'http', scheme: 'basic' }

const BearerAuthSecurityScheme = { type: 'http', scheme: 'bearer' }

export const getOcsV2PhpAppsWebhookListenersApiV1WebhooksRoute = createRoute({
  method: 'get',
  path: '/ocs/v2.php/apps/webhook_listeners/api/v1/webhooks',
  tags: ['webhooks'],
  summary: 'List registered webhooks',
  description: 'This endpoint requires admin access',
  operationId: 'webhooks-index',
  request: {
    query: z.object({
      uri: z
        .string()
        .nullable()
        .default(null)
        .exactOptional()
        .openapi({
          param: {
            name: 'uri',
            in: 'query',
            description: 'The callback URI to filter by',
            schema: { type: 'string', nullable: true, default: null },
            required: false,
          },
        }),
    }),
    headers: z.object({
      'OCS-APIRequest': z
        .stringbool()
        .default(true)
        .openapi({
          param: {
            name: 'OCS-APIRequest',
            in: 'header',
            description: 'Required to be true for the API request to pass',
            required: true,
            schema: { type: 'boolean', default: true },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Webhook registrations returned',
      content: {
        'application/json': {
          schema: z
            .object({
              ocs: z
                .object({ meta: OCSMetaSchema, data: z.array(WebhookInfoSchema) })
                .openapi({ required: ['meta', 'data'] }),
            })
            .openapi({ required: ['ocs'] }),
        },
      },
    },
    401: {
      description: 'Current user is not logged in',
      content: {
        'application/json': {
          schema: z
            .object({
              ocs: z
                .object({ meta: OCSMetaSchema, data: z.any() })
                .openapi({ required: ['meta', 'data'] }),
            })
            .openapi({ required: ['ocs'] }),
        },
      },
    },
    403: {
      description: 'Logged in account must be an admin',
      content: {
        'application/json': {
          schema: z
            .object({
              ocs: z
                .object({ meta: OCSMetaSchema, data: z.any() })
                .openapi({ required: ['meta', 'data'] }),
            })
            .openapi({ required: ['ocs'] }),
        },
      },
    },
  },
  security: [{ bearer_auth: [] }, { basic_auth: [] }],
})

export const postOcsV2PhpAppsWebhookListenersApiV1WebhooksRoute = createRoute({
  method: 'post',
  path: '/ocs/v2.php/apps/webhook_listeners/api/v1/webhooks',
  tags: ['webhooks'],
  summary: 'Register a new webhook',
  description: 'This endpoint requires admin access',
  operationId: 'webhooks-create',
  request: {
    headers: z.object({
      'ex-app-id': z
        .string()
        .exactOptional()
        .openapi({
          param: { name: 'ex-app-id', in: 'header', schema: { type: 'string' }, required: false },
        }),
      'OCS-APIRequest': z
        .stringbool()
        .default(true)
        .openapi({
          param: {
            name: 'OCS-APIRequest',
            in: 'header',
            description: 'Required to be true for the API request to pass',
            required: true,
            schema: { type: 'boolean', default: true },
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              httpMethod: z
                .string()
                .openapi({ description: 'HTTP method to use to contact the webhook' }),
              uri: z.string().openapi({ description: 'Webhook URI endpoint' }),
              event: z.string().openapi({ description: 'Event class name to listen to' }),
              eventFilter: z
                .record(z.string(), z.object({}))
                .nullable()
                .exactOptional()
                .openapi({
                  description: 'Mongo filter to apply to the serialized data to decide if firing',
                }),
              userIdFilter: z
                .string()
                .nullable()
                .exactOptional()
                .openapi({
                  description:
                    'User id to filter on. The webhook will only be called by requests from this user. Empty or null means no filtering.',
                }),
              headers: z
                .record(z.string(), z.string())
                .nullable()
                .exactOptional()
                .openapi({ description: 'Array of headers to send' }),
              authMethod: z
                .enum(['none', 'header'])
                .nullable()
                .exactOptional()
                .openapi({ description: 'Authentication method to use' }),
              authData: z
                .record(z.string(), z.object({}))
                .nullable()
                .exactOptional()
                .openapi({ description: 'Array of data for authentication' }),
              tokenNeeded: z
                .object({
                  user_ids: z.array(z.string()).exactOptional(),
                  user_roles: z.array(z.string()).exactOptional(),
                })
                .nullable()
                .default(null)
                .exactOptional()
                .openapi({
                  description:
                    'List of user ids for which to include auth tokens in the event. Has two fields: "user_ids" list of user uids for which tokens are needed, "user_roles" list of roles (users not defined by their ID but by the role they have in the webhook event) for which tokens can be included. Possible roles: "owner" for the user creating the webhook, "trigger" for the user triggering the webhook call. Requested auth tokens are valid for 1 hour after receiving them in the event call request.',
                  required: [],
                }),
            })
            .openapi({ required: ['httpMethod', 'uri', 'event'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Webhook registration returned',
      content: {
        'application/json': {
          schema: z
            .object({
              ocs: z
                .object({ meta: OCSMetaSchema, data: WebhookInfoSchema })
                .openapi({ required: ['meta', 'data'] }),
            })
            .openapi({ required: ['ocs'] }),
        },
      },
    },
    400: {
      description: 'Bad request',
      content: {
        'application/json': {
          schema: z
            .object({
              ocs: z
                .object({ meta: OCSMetaSchema, data: z.any() })
                .openapi({ required: ['meta', 'data'] }),
            })
            .openapi({ required: ['ocs'] }),
        },
      },
    },
    401: {
      description: 'Current user is not logged in',
      content: {
        'application/json': {
          schema: z
            .object({
              ocs: z
                .object({ meta: OCSMetaSchema, data: z.any() })
                .openapi({ required: ['meta', 'data'] }),
            })
            .openapi({ required: ['ocs'] }),
        },
      },
    },
    403: {
      description: 'Insufficient permissions',
      content: {
        'application/json': {
          schema: z.union([
            z
              .object({
                ocs: z
                  .object({ meta: OCSMetaSchema, data: z.any() })
                  .openapi({ required: ['meta', 'data'] }),
              })
              .openapi({ required: ['ocs'] }),
            z
              .object({
                ocs: z
                  .object({ meta: OCSMetaSchema, data: z.any() })
                  .openapi({ required: ['meta', 'data'] }),
              })
              .openapi({ required: ['ocs'] }),
          ]),
        },
      },
    },
  },
  security: [{ bearer_auth: [] }, { basic_auth: [] }],
})

export const getOcsV2PhpAppsWebhookListenersApiV1WebhooksIdRoute = createRoute({
  method: 'get',
  path: '/ocs/v2.php/apps/webhook_listeners/api/v1/webhooks/{id}',
  tags: ['webhooks'],
  summary: 'Get details on a registered webhook',
  description: 'This endpoint requires admin access',
  operationId: 'webhooks-show',
  request: {
    params: z.object({
      id: z
        .preprocess((val) => {
          if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val))
            return val
          if (/^-?\d+$/.test(val)) return BigInt(val)
          const num = Number(val)
          return Number.isSafeInteger(num) ? BigInt(num) : val
        }, z.int64())
        .openapi({
          param: {
            name: 'id',
            in: 'path',
            description: 'id of the webhook',
            required: true,
            schema: { type: 'integer', format: 'int64' },
          },
        }),
    }),
    headers: z.object({
      'OCS-APIRequest': z
        .stringbool()
        .default(true)
        .openapi({
          param: {
            name: 'OCS-APIRequest',
            in: 'header',
            description: 'Required to be true for the API request to pass',
            required: true,
            schema: { type: 'boolean', default: true },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Webhook registration returned',
      content: {
        'application/json': {
          schema: z
            .object({
              ocs: z
                .object({ meta: OCSMetaSchema, data: WebhookInfoSchema })
                .openapi({ required: ['meta', 'data'] }),
            })
            .openapi({ required: ['ocs'] }),
        },
      },
    },
    401: {
      description: 'Current user is not logged in',
      content: {
        'application/json': {
          schema: z
            .object({
              ocs: z
                .object({ meta: OCSMetaSchema, data: z.any() })
                .openapi({ required: ['meta', 'data'] }),
            })
            .openapi({ required: ['ocs'] }),
        },
      },
    },
    403: {
      description: 'Logged in account must be an admin',
      content: {
        'application/json': {
          schema: z
            .object({
              ocs: z
                .object({ meta: OCSMetaSchema, data: z.any() })
                .openapi({ required: ['meta', 'data'] }),
            })
            .openapi({ required: ['ocs'] }),
        },
      },
    },
    404: {
      description: 'Webhook not found',
      content: {
        'application/json': {
          schema: z
            .object({
              ocs: z
                .object({ meta: OCSMetaSchema, data: z.any() })
                .openapi({ required: ['meta', 'data'] }),
            })
            .openapi({ required: ['ocs'] }),
        },
      },
    },
  },
  security: [{ bearer_auth: [] }, { basic_auth: [] }],
})

export const postOcsV2PhpAppsWebhookListenersApiV1WebhooksIdRoute = createRoute({
  method: 'post',
  path: '/ocs/v2.php/apps/webhook_listeners/api/v1/webhooks/{id}',
  tags: ['webhooks'],
  summary: 'Update an existing webhook registration',
  description: 'This endpoint requires admin access',
  operationId: 'webhooks-update',
  request: {
    params: z.object({
      id: z
        .preprocess((val) => {
          if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val))
            return val
          if (/^-?\d+$/.test(val)) return BigInt(val)
          const num = Number(val)
          return Number.isSafeInteger(num) ? BigInt(num) : val
        }, z.int64())
        .openapi({
          param: {
            name: 'id',
            in: 'path',
            description: 'id of the webhook',
            required: true,
            schema: { type: 'integer', format: 'int64' },
          },
        }),
    }),
    headers: z.object({
      'ex-app-id': z
        .string()
        .exactOptional()
        .openapi({
          param: { name: 'ex-app-id', in: 'header', schema: { type: 'string' }, required: false },
        }),
      'OCS-APIRequest': z
        .stringbool()
        .default(true)
        .openapi({
          param: {
            name: 'OCS-APIRequest',
            in: 'header',
            description: 'Required to be true for the API request to pass',
            required: true,
            schema: { type: 'boolean', default: true },
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              httpMethod: z
                .string()
                .openapi({ description: 'HTTP method to use to contact the webhook' }),
              uri: z.string().openapi({ description: 'Webhook URI endpoint' }),
              event: z.string().openapi({ description: 'Event class name to listen to' }),
              eventFilter: z
                .record(z.string(), z.object({}))
                .nullable()
                .exactOptional()
                .openapi({
                  description: 'Mongo filter to apply to the serialized data to decide if firing',
                }),
              userIdFilter: z
                .string()
                .nullable()
                .exactOptional()
                .openapi({
                  description:
                    'User id to filter on. The webhook will only be called by requests from this user. Empty or null means no filtering.',
                }),
              headers: z
                .record(z.string(), z.string())
                .nullable()
                .exactOptional()
                .openapi({ description: 'Array of headers to send' }),
              authMethod: z
                .enum(['none', 'header'])
                .nullable()
                .exactOptional()
                .openapi({ description: 'Authentication method to use' }),
              authData: z
                .record(z.string(), z.object({}))
                .nullable()
                .exactOptional()
                .openapi({ description: 'Array of data for authentication' }),
              tokenNeeded: z
                .object({
                  user_ids: z.array(z.string()).exactOptional(),
                  user_roles: z.array(z.string()).exactOptional(),
                })
                .nullable()
                .default(null)
                .exactOptional()
                .openapi({
                  description:
                    'List of user ids for which to include auth tokens in the event. Has two fields: "user_ids" list of user uids for which tokens are needed, "user_roles" list of roles (users not defined by their ID but by the role they have in the webhook event) for which tokens can be included. Possible roles: "owner" for the user creating the webhook, "trigger" for the user triggering the webhook call. Requested auth tokens are valid for 1 hour after receiving them in the event call request.',
                  required: [],
                }),
            })
            .openapi({ required: ['httpMethod', 'uri', 'event'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Webhook registration returned',
      content: {
        'application/json': {
          schema: z
            .object({
              ocs: z
                .object({ meta: OCSMetaSchema, data: WebhookInfoSchema })
                .openapi({ required: ['meta', 'data'] }),
            })
            .openapi({ required: ['ocs'] }),
        },
      },
    },
    400: {
      description: 'Bad request',
      content: {
        'application/json': {
          schema: z
            .object({
              ocs: z
                .object({ meta: OCSMetaSchema, data: z.any() })
                .openapi({ required: ['meta', 'data'] }),
            })
            .openapi({ required: ['ocs'] }),
        },
      },
    },
    401: {
      description: 'Current user is not logged in',
      content: {
        'application/json': {
          schema: z
            .object({
              ocs: z
                .object({ meta: OCSMetaSchema, data: z.any() })
                .openapi({ required: ['meta', 'data'] }),
            })
            .openapi({ required: ['ocs'] }),
        },
      },
    },
    403: {
      description: 'Insufficient permissions',
      content: {
        'application/json': {
          schema: z.union([
            z
              .object({
                ocs: z
                  .object({ meta: OCSMetaSchema, data: z.any() })
                  .openapi({ required: ['meta', 'data'] }),
              })
              .openapi({ required: ['ocs'] }),
            z
              .object({
                ocs: z
                  .object({ meta: OCSMetaSchema, data: z.any() })
                  .openapi({ required: ['meta', 'data'] }),
              })
              .openapi({ required: ['ocs'] }),
          ]),
        },
      },
    },
  },
  security: [{ bearer_auth: [] }, { basic_auth: [] }],
})

export const deleteOcsV2PhpAppsWebhookListenersApiV1WebhooksIdRoute = createRoute({
  method: 'delete',
  path: '/ocs/v2.php/apps/webhook_listeners/api/v1/webhooks/{id}',
  tags: ['webhooks'],
  summary: 'Remove an existing webhook registration',
  description: 'This endpoint requires admin access',
  operationId: 'webhooks-destroy',
  request: {
    params: z.object({
      id: z
        .preprocess((val) => {
          if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val))
            return val
          if (/^-?\d+$/.test(val)) return BigInt(val)
          const num = Number(val)
          return Number.isSafeInteger(num) ? BigInt(num) : val
        }, z.int64())
        .openapi({
          param: {
            name: 'id',
            in: 'path',
            description: 'id of the webhook',
            required: true,
            schema: { type: 'integer', format: 'int64' },
          },
        }),
    }),
    headers: z.object({
      'OCS-APIRequest': z
        .stringbool()
        .default(true)
        .openapi({
          param: {
            name: 'OCS-APIRequest',
            in: 'header',
            description: 'Required to be true for the API request to pass',
            required: true,
            schema: { type: 'boolean', default: true },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Boolean returned whether something was deleted',
      content: {
        'application/json': {
          schema: z
            .object({
              ocs: z
                .object({ meta: OCSMetaSchema, data: z.boolean() })
                .openapi({ required: ['meta', 'data'] }),
            })
            .openapi({ required: ['ocs'] }),
        },
      },
    },
    400: {
      description: 'Bad request',
      content: {
        'application/json': {
          schema: z
            .object({
              ocs: z
                .object({ meta: OCSMetaSchema, data: z.any() })
                .openapi({ required: ['meta', 'data'] }),
            })
            .openapi({ required: ['ocs'] }),
        },
      },
    },
    401: {
      description: 'Current user is not logged in',
      content: {
        'application/json': {
          schema: z
            .object({
              ocs: z
                .object({ meta: OCSMetaSchema, data: z.any() })
                .openapi({ required: ['meta', 'data'] }),
            })
            .openapi({ required: ['ocs'] }),
        },
      },
    },
    403: {
      description: 'Insufficient permissions',
      content: {
        'application/json': {
          schema: z.union([
            z
              .object({
                ocs: z
                  .object({ meta: OCSMetaSchema, data: z.any() })
                  .openapi({ required: ['meta', 'data'] }),
              })
              .openapi({ required: ['ocs'] }),
            z
              .object({
                ocs: z
                  .object({ meta: OCSMetaSchema, data: z.any() })
                  .openapi({ required: ['meta', 'data'] }),
              })
              .openapi({ required: ['ocs'] }),
          ]),
        },
      },
    },
  },
  security: [{ bearer_auth: [] }, { basic_auth: [] }],
})

export const deleteOcsV2PhpAppsWebhookListenersApiV1WebhooksByappidAppidRoute = createRoute({
  method: 'delete',
  path: '/ocs/v2.php/apps/webhook_listeners/api/v1/webhooks/byappid/{appid}',
  tags: ['webhooks'],
  summary: 'Remove all existing webhook registration mapped to an AppAPI app id',
  description: 'This endpoint requires admin access',
  operationId: 'webhooks-delete-by-app-id',
  request: {
    params: z.object({
      appid: z
        .string()
        .openapi({
          param: {
            name: 'appid',
            in: 'path',
            description: 'id of the app, as in the ex-app-id for creation',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    headers: z.object({
      'OCS-APIRequest': z
        .stringbool()
        .default(true)
        .openapi({
          param: {
            name: 'OCS-APIRequest',
            in: 'header',
            description: 'Required to be true for the API request to pass',
            required: true,
            schema: { type: 'boolean', default: true },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Integer number of registrations deleted',
      content: {
        'application/json': {
          schema: z
            .object({
              ocs: z
                .object({
                  meta: OCSMetaSchema,
                  data: z
                    .preprocess(
                      (val) =>
                        typeof val === 'number' && Number.isSafeInteger(val)
                          ? BigInt(val)
                          : typeof val === 'string' && /^-?\d+$/.test(val)
                            ? BigInt(val)
                            : val,
                      z.int64(),
                    )
                    .openapi({ type: 'integer', format: 'int64' }),
                })
                .openapi({ required: ['meta', 'data'] }),
            })
            .openapi({ required: ['ocs'] }),
        },
      },
    },
    400: {
      description: 'Bad request',
      content: {
        'application/json': {
          schema: z
            .object({
              ocs: z
                .object({ meta: OCSMetaSchema, data: z.any() })
                .openapi({ required: ['meta', 'data'] }),
            })
            .openapi({ required: ['ocs'] }),
        },
      },
    },
    401: {
      description: 'Current user is not logged in',
      content: {
        'application/json': {
          schema: z
            .object({
              ocs: z
                .object({ meta: OCSMetaSchema, data: z.any() })
                .openapi({ required: ['meta', 'data'] }),
            })
            .openapi({ required: ['ocs'] }),
        },
      },
    },
    403: {
      description: 'Insufficient permissions',
      content: {
        'application/json': {
          schema: z.union([
            z
              .object({
                ocs: z
                  .object({ meta: OCSMetaSchema, data: z.any() })
                  .openapi({ required: ['meta', 'data'] }),
              })
              .openapi({ required: ['ocs'] }),
            z
              .object({
                ocs: z
                  .object({ meta: OCSMetaSchema, data: z.any() })
                  .openapi({ required: ['meta', 'data'] }),
              })
              .openapi({ required: ['ocs'] }),
          ]),
        },
      },
    },
  },
  security: [{ bearer_auth: [] }, { basic_auth: [] }],
})
