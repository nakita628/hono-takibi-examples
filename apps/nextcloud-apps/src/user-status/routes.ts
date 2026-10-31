import { createRoute, z } from '@hono/zod-openapi'

const CapabilitiesSchema = z
  .object({
    user_status: z
      .object({
        enabled: z.boolean(),
        restore: z.boolean(),
        supports_emoji: z.boolean(),
        supports_busy: z.boolean(),
      })
      .openapi({ required: ['enabled', 'restore', 'supports_emoji', 'supports_busy'] }),
  })
  .openapi({ required: ['user_status'] })
  .openapi('Capabilities')

const ClearAtTimeTypeSchema = z.enum(['day', 'week']).openapi('ClearAtTimeType')

const ClearAtSchema = z
  .object({
    type: z.enum(['period', 'end-of']),
    time: z.union([
      z
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
      ClearAtTimeTypeSchema,
    ]),
  })
  .openapi({ required: ['type', 'time'] })
  .openapi('ClearAt')

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

const PredefinedSchema = z
  .object({
    id: z.string(),
    icon: z.string(),
    message: z.string(),
    clearAt: ClearAtSchema.nullable(),
  })
  .openapi({ required: ['id', 'icon', 'message', 'clearAt'] })
  .openapi('Predefined')

const TypeSchema = z.enum(['online', 'away', 'dnd', 'busy', 'offline', 'invisible']).openapi('Type')

const PublicSchema = z
  .object({
    userId: z.string(),
    message: z.string().nullable(),
    icon: z.string().nullable(),
    clearAt: z
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
      .openapi({ type: ['integer', 'null'], format: 'int64' }),
    status: TypeSchema,
  })
  .openapi({ required: ['userId', 'message', 'icon', 'clearAt', 'status'] })
  .openapi('Public')

const PrivateSchema = PublicSchema.and(
  z
    .object({
      messageId: z.string().nullable(),
      messageIsPredefined: z.boolean(),
      statusIsUserDefined: z.boolean(),
    })
    .openapi({ required: ['messageId', 'messageIsPredefined', 'statusIsUserDefined'] }),
).openapi('Private')

const BasicAuthSecurityScheme = { type: 'http', scheme: 'basic' }

const BearerAuthSecurityScheme = { type: 'http', scheme: 'bearer' }

export const putOcsV2PhpAppsUserStatusApiV1HeartbeatRoute = createRoute({
  method: 'put',
  path: '/ocs/v2.php/apps/user_status/api/v1/heartbeat',
  tags: ['heartbeat'],
  summary: 'Keep the status alive',
  operationId: 'heartbeat-heartbeat',
  request: {
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
    body: {
      content: {
        'application/json': {
          schema: z
            .object({ status: z.string().openapi({ description: 'Only online, away' }) })
            .openapi({ required: ['status'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Status successfully updated',
      content: {
        'application/json': {
          schema: z
            .object({
              ocs: z
                .object({ meta: OCSMetaSchema, data: PrivateSchema })
                .openapi({ required: ['meta', 'data'] }),
            })
            .openapi({ required: ['ocs'] }),
        },
      },
    },
    204: { description: 'User has no status to keep alive' },
    400: {
      description: 'Invalid status to update',
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
    500: {
      description: '',
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

export const getOcsV2PhpAppsUserStatusApiV1PredefinedStatusesRoute = createRoute({
  method: 'get',
  path: '/ocs/v2.php/apps/user_status/api/v1/predefined_statuses',
  tags: ['predefined_status'],
  summary: 'Get all predefined messages',
  operationId: 'predefined_status-find-all',
  request: {
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
      description: 'Predefined statuses returned',
      content: {
        'application/json': {
          schema: z
            .object({
              ocs: z
                .object({ meta: OCSMetaSchema, data: z.array(PredefinedSchema) })
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
  },
  security: [{ bearer_auth: [] }, { basic_auth: [] }],
})

export const getOcsV2PhpAppsUserStatusApiV1StatusesRoute = createRoute({
  method: 'get',
  path: '/ocs/v2.php/apps/user_status/api/v1/statuses',
  tags: ['statuses'],
  summary: 'Find statuses of users',
  description:
    'Prefer $lastId over $offset: it does not require the database to scan and discard every preceding row on every call.',
  operationId: 'statuses-find-all',
  request: {
    query: z.object({
      limit: z
        .preprocess(
          (val) => (val === 'null' ? null : val),
          z
            .preprocess((val) => {
              if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val))
                return val
              if (/^-?\d+$/.test(val)) return BigInt(val)
              const num = Number(val)
              return Number.isSafeInteger(num) ? BigInt(num) : val
            }, z.int64())
            .nullable(),
        )
        .default(null)
        .exactOptional()
        .openapi({
          param: {
            name: 'limit',
            in: 'query',
            description: 'Maximum number of statuses to find',
            schema: { type: 'integer', format: 'int64', nullable: true, default: null },
            required: false,
          },
        }),
      offset: z
        .preprocess(
          (val) => (val === 'null' ? null : val),
          z
            .preprocess((val) => {
              if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val))
                return val
              if (/^-?\d+$/.test(val)) return BigInt(val)
              const num = Number(val)
              return Number.isSafeInteger(num) ? BigInt(num) : val
            }, z.int64().min(0n))
            .nullable(),
        )
        .default(null)
        .exactOptional()
        .openapi({
          param: {
            name: 'offset',
            in: 'query',
            description: 'Offset for finding statuses',
            schema: { type: 'integer', format: 'int64', nullable: true, default: null, minimum: 0 },
            required: false,
          },
        }),
      lastId: z
        .preprocess(
          (val) => (val === 'null' ? null : val),
          z
            .preprocess((val) => {
              if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val))
                return val
              if (/^-?\d+$/.test(val)) return BigInt(val)
              const num = Number(val)
              return Number.isSafeInteger(num) ? BigInt(num) : val
            }, z.int64().min(0n))
            .nullable(),
        )
        .default(null)
        .exactOptional()
        .openapi({
          param: {
            name: 'lastId',
            in: 'query',
            description:
              'Id of the last status returned by the previous page; when given, keyset pagination is used and $offset is ignored',
            schema: { type: 'integer', format: 'int64', nullable: true, default: null, minimum: 0 },
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
      description: 'Statuses returned',
      content: {
        'application/json': {
          schema: z
            .object({
              ocs: z
                .object({ meta: OCSMetaSchema, data: z.array(PublicSchema) })
                .openapi({ required: ['meta', 'data'] }),
            })
            .openapi({ required: ['ocs'] }),
        },
      },
      headers: z.object({
        Link: {
          schema: z
            .string()
            .exactOptional()
            .openapi({ param: { required: false } }),
        },
      }),
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
  },
  security: [{ bearer_auth: [] }, { basic_auth: [] }],
})

export const getOcsV2PhpAppsUserStatusApiV1StatusesUserIdRoute = createRoute({
  method: 'get',
  path: '/ocs/v2.php/apps/user_status/api/v1/statuses/{userId}',
  tags: ['statuses'],
  summary: 'Find the status of a user',
  operationId: 'statuses-find',
  request: {
    params: z.object({
      userId: z
        .string()
        .openapi({
          param: {
            name: 'userId',
            in: 'path',
            description: 'ID of the user',
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
      description: 'Status returned',
      content: {
        'application/json': {
          schema: z
            .object({
              ocs: z
                .object({ meta: OCSMetaSchema, data: PublicSchema })
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
    404: {
      description: 'The user was not found',
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

export const getOcsV2PhpAppsUserStatusApiV1UserStatusRoute = createRoute({
  method: 'get',
  path: '/ocs/v2.php/apps/user_status/api/v1/user_status',
  tags: ['user_status'],
  summary: 'Get the status of the current user',
  operationId: 'user_status-get-status',
  request: {
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
      description: 'The status was found successfully',
      content: {
        'application/json': {
          schema: z
            .object({
              ocs: z
                .object({ meta: OCSMetaSchema, data: PrivateSchema })
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
    404: {
      description: 'The user was not found',
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

export const putOcsV2PhpAppsUserStatusApiV1UserStatusStatusRoute = createRoute({
  method: 'put',
  path: '/ocs/v2.php/apps/user_status/api/v1/user_status/status',
  tags: ['user_status'],
  summary: 'Update the status type of the current user',
  operationId: 'user_status-set-status',
  request: {
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
    body: {
      content: {
        'application/json': {
          schema: z
            .object({ statusType: z.string().openapi({ description: 'The new status type' }) })
            .openapi({ required: ['statusType'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'The status was updated successfully',
      content: {
        'application/json': {
          schema: z
            .object({
              ocs: z
                .object({ meta: OCSMetaSchema, data: PrivateSchema })
                .openapi({ required: ['meta', 'data'] }),
            })
            .openapi({ required: ['ocs'] }),
        },
      },
    },
    400: {
      description: 'The status type is invalid',
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
  },
  security: [{ bearer_auth: [] }, { basic_auth: [] }],
})

export const putOcsV2PhpAppsUserStatusApiV1UserStatusMessagePredefinedRoute = createRoute({
  method: 'put',
  path: '/ocs/v2.php/apps/user_status/api/v1/user_status/message/predefined',
  tags: ['user_status'],
  summary: 'Set the message to a predefined message for the current user',
  operationId: 'user_status-set-predefined-message',
  request: {
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
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              messageId: z.string().openapi({ description: 'ID of the predefined message' }),
              clearAt: z
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
                .openapi({
                  type: ['integer', 'null'],
                  format: 'int64',
                  description: 'When the message should be cleared',
                }),
            })
            .openapi({ required: ['messageId'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'The message was updated successfully',
      content: {
        'application/json': {
          schema: z
            .object({
              ocs: z
                .object({ meta: OCSMetaSchema, data: PrivateSchema })
                .openapi({ required: ['meta', 'data'] }),
            })
            .openapi({ required: ['ocs'] }),
        },
      },
    },
    400: {
      description: 'The clearAt or message-id is invalid',
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
  },
  security: [{ bearer_auth: [] }, { basic_auth: [] }],
})

export const putOcsV2PhpAppsUserStatusApiV1UserStatusMessageCustomRoute = createRoute({
  method: 'put',
  path: '/ocs/v2.php/apps/user_status/api/v1/user_status/message/custom',
  tags: ['user_status'],
  summary: 'Set the message to a custom message for the current user',
  operationId: 'user_status-set-custom-message',
  request: {
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
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              statusIcon: z
                .string()
                .nullable()
                .exactOptional()
                .openapi({ description: 'Icon of the status' }),
              message: z
                .string()
                .nullable()
                .exactOptional()
                .openapi({ description: 'Message of the status' }),
              clearAt: z
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
                .openapi({
                  type: ['integer', 'null'],
                  format: 'int64',
                  description: 'When the message should be cleared',
                }),
            })
            .openapi({ required: [] }),
        },
      },
    },
  },
  responses: {
    200: {
      description: 'The message was updated successfully',
      content: {
        'application/json': {
          schema: z
            .object({
              ocs: z
                .object({ meta: OCSMetaSchema, data: PrivateSchema })
                .openapi({ required: ['meta', 'data'] }),
            })
            .openapi({ required: ['ocs'] }),
        },
      },
    },
    400: {
      description: 'The clearAt or icon is invalid or the message is too long',
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
    404: {
      description: 'No status for the current user',
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

export const deleteOcsV2PhpAppsUserStatusApiV1UserStatusMessageRoute = createRoute({
  method: 'delete',
  path: '/ocs/v2.php/apps/user_status/api/v1/user_status/message',
  tags: ['user_status'],
  summary: 'Clear the message of the current user',
  operationId: 'user_status-clear-message',
  request: {
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
      description: 'Message cleared successfully',
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
  },
  security: [{ bearer_auth: [] }, { basic_auth: [] }],
})

export const deleteOcsV2PhpAppsUserStatusApiV1UserStatusRevertMessageIdRoute = createRoute({
  method: 'delete',
  path: '/ocs/v2.php/apps/user_status/api/v1/user_status/revert/{messageId}',
  tags: ['user_status'],
  summary: 'Revert the status to the previous status',
  operationId: 'user_status-revert-status',
  request: {
    params: z.object({
      messageId: z
        .string()
        .openapi({
          param: {
            name: 'messageId',
            in: 'path',
            description: 'ID of the message to delete',
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
      description: 'Status reverted',
      content: {
        'application/json': {
          schema: z
            .object({
              ocs: z
                .object({
                  meta: OCSMetaSchema,
                  data: z.union([PrivateSchema, z.array(z.any()).max(0)]),
                })
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
  },
  security: [{ bearer_auth: [] }, { basic_auth: [] }],
})
