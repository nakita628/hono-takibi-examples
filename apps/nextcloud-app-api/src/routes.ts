import { createRoute, z } from '@hono/zod-openapi'

const CapabilitiesSchema = z
  .object({
    app_api: z
      .object({
        loglevel: z
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
        version: z.string(),
      })
      .openapi({ required: ['loglevel', 'version'] }),
  })
  .openapi({ required: ['app_api'] })
  .openapi('Capabilities')

const ExAppConfigSchema = z
  .object({
    id: z
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
    appid: z.string(),
    configkey: z.string(),
    configvalue: z.string(),
    sensitive: z
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
  .openapi({ required: ['id', 'appid', 'configkey', 'configvalue', 'sensitive'] })
  .openapi('ExAppConfig')

const ExAppConfigValueSchema = z
  .object({ configkey: z.string(), configvalue: z.string() })
  .openapi({ required: ['configkey', 'configvalue'] })
  .openapi('ExAppConfigValue')

const ExAppPreferenceSchema = z
  .object({
    id: z
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
    user_id: z.string(),
    appid: z.string(),
    configkey: z.string(),
    configvalue: z.string(),
    sensitive: z
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
  .openapi({ required: ['id', 'user_id', 'appid', 'configkey', 'configvalue', 'sensitive'] })
  .openapi('ExAppPreference')

const FileActionSchema = z
  .object({
    id: z
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
    appid: z.string(),
    name: z.string(),
    display_name: z.string(),
    mime: z.string(),
    permissions: z.string(),
    order: z
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
    icon: z.string(),
    action_handler: z.string(),
    version: z.string(),
    default_action: z.string().nullable(),
  })
  .openapi({
    required: [
      'id',
      'appid',
      'name',
      'display_name',
      'mime',
      'permissions',
      'order',
      'icon',
      'action_handler',
      'version',
      'default_action',
    ],
  })
  .openapi('FileAction')

const InitialStateSchema = z
  .object({
    id: z
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
    appid: z.string(),
    type: z.string(),
    name: z.string(),
    key: z.string(),
    value: z.object({}),
  })
  .openapi({ required: ['id', 'appid', 'type', 'name', 'key', 'value'] })
  .openapi('InitialState')

const NotificationSchema = z
  .object({
    app: z.string(),
    user: z.string(),
    datetime: z.string(),
    object_type: z.string(),
    object_id: z.string(),
    subject: z.string(),
    message: z.string(),
    link: z.string(),
    icon: z.string(),
  })
  .openapi({
    required: [
      'app',
      'user',
      'datetime',
      'object_type',
      'object_id',
      'subject',
      'message',
      'link',
      'icon',
    ],
  })
  .openapi('Notification')

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

const OccCommandSchema = z
  .object({
    id: z
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
    appid: z.string(),
    name: z.string(),
    description: z.string(),
    hidden: z
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
    arguments: z.array(z.object({})),
    options: z.array(z.object({})),
    usages: z.array(z.object({})),
    execute_handler: z.string(),
  })
  .openapi({
    required: [
      'id',
      'appid',
      'name',
      'description',
      'hidden',
      'arguments',
      'options',
      'usages',
      'execute_handler',
    ],
  })
  .openapi('OccCommand')

const PublicCapabilitiesSchema = z
  .object({ app_api: z.object({ version: z.string() }).openapi({ required: ['version'] }) })
  .openapi({ required: ['app_api'] })
  .openapi('PublicCapabilities')

const ScriptSchema = z
  .object({
    id: z
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
    appid: z.string(),
    type: z.string(),
    name: z.string(),
    path: z.string(),
    after_app_id: z.string(),
  })
  .openapi({ required: ['id', 'appid', 'type', 'name', 'path', 'after_app_id'] })
  .openapi('Script')

const StyleSchema = z
  .object({
    id: z
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
    appid: z.string(),
    type: z.string(),
    name: z.string(),
    path: z.string(),
  })
  .openapi({ required: ['id', 'appid', 'type', 'name', 'path'] })
  .openapi('Style')

const TalkBotSchema = z
  .object({ id: z.string(), secret: z.string() })
  .openapi({ required: ['id', 'secret'] })
  .openapi('TalkBot')

const TaskProcessingProviderSchema = z
  .object({
    id: z
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
    app_id: z.string().nullable(),
    name: z.string().nullable(),
    display_name: z.string().nullable(),
    task_type: z.string().nullable(),
    provider: z.string().nullable(),
    custom_task_type: z.string().nullable(),
  })
  .openapi({
    required: ['id', 'app_id', 'name', 'display_name', 'task_type', 'provider', 'custom_task_type'],
  })
  .openapi('TaskProcessingProvider')

const TopMenuSchema = z
  .object({
    id: z
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
    appid: z.string(),
    name: z.string(),
    display_name: z.string(),
    icon: z.string(),
    admin_required: z
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
  .openapi({ required: ['id', 'appid', 'name', 'display_name', 'icon', 'admin_required'] })
  .openapi('TopMenu')

const BasicAuthSecurityScheme = { type: 'http', scheme: 'basic' }

const BearerAuthSecurityScheme = { type: 'http', scheme: 'bearer' }

export const postOcsV2PhpAppsAppApiApiV1LogRoute = createRoute({
  method: 'post',
  path: '/ocs/v2.php/apps/app_api/api/v1/log',
  tags: ['ocs_api'],
  summary: 'Log a message to the Nextcloud log on behalf of an ExApp',
  operationId: 'ocs_api-log',
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
              level: z
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
                  description: 'Log level (0 - debug, 1 - info, 2 - warning, 3 - error, 4 - fatal)',
                }),
              message: z.string().openapi({ description: 'Message to log' }),
            })
            .openapi({ required: ['level', 'message'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Message logged successfully',
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
    400: {
      description: 'Invalid log level',
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
  security: [{}, { bearer_auth: [] }, { basic_auth: [] }],
})

export const getOcsV2PhpAppsAppApiApiV1UsersRoute = createRoute({
  method: 'get',
  path: '/ocs/v2.php/apps/app_api/api/v1/users',
  tags: ['ocs_api'],
  summary: 'Get a list of all Nextcloud user IDs',
  operationId: 'ocs_api-getnc-users-list',
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
      description: 'Users list returned',
      content: {
        'application/json': {
          schema: z
            .object({
              ocs: z
                .object({ meta: OCSMetaSchema, data: z.array(z.string()) })
                .openapi({ required: ['meta', 'data'] }),
            })
            .openapi({ required: ['ocs'] }),
        },
      },
    },
  },
  security: [{}, { bearer_auth: [] }, { basic_auth: [] }],
})

export const putOcsV2PhpAppsAppApiAppsStatusAppIdRoute = createRoute({
  method: 'put',
  path: '/ocs/v2.php/apps/app_api/apps/status/{appId}',
  tags: ['ocs_api'],
  summary: 'Update the initialization progress of an ExApp by its appid',
  operationId: 'ocs_api-set-app-init-progress-deprecated',
  request: {
    params: z.object({
      appId: z
        .string()
        .openapi({
          param: {
            name: 'appId',
            in: 'path',
            description: 'ID of the ExApp',
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
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              progress: z
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
                  description: 'Initialization progress in percent (0-100)',
                }),
              error: z
                .string()
                .default('')
                .exactOptional()
                .openapi({ description: 'Error message in case the initialization failed' }),
            })
            .openapi({ required: ['progress'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Initialization progress updated',
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
      description: 'ExApp not found',
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
  deprecated: true,
  security: [{}, { bearer_auth: [] }, { basic_auth: [] }],
})

export const putOcsV2PhpAppsAppApiExAppStatusRoute = createRoute({
  method: 'put',
  path: '/ocs/v2.php/apps/app_api/ex-app/status',
  tags: ['ocs_api'],
  summary: 'Update the initialization progress of the calling ExApp',
  operationId: 'ocs_api-set-app-init-progress',
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
              progress: z
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
                  description: 'Initialization progress in percent (0-100)',
                }),
              error: z
                .string()
                .default('')
                .exactOptional()
                .openapi({ description: 'Error message in case the initialization failed' }),
            })
            .openapi({ required: ['progress'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Initialization progress updated',
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
      description: 'ExApp not found',
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
  security: [{}, { bearer_auth: [] }, { basic_auth: [] }],
})

export const getOcsV2PhpAppsAppApiExAppStateRoute = createRoute({
  method: 'get',
  path: '/ocs/v2.php/apps/app_api/ex-app/state',
  tags: ['ocs_api'],
  summary: 'Get the enabled state of the calling ExApp (0 for disabled, 1 for enabled)',
  description: 'Note: This endpoint is accessible even if the ExApp itself is disabled.',
  operationId: 'ocs_api-get-enabled-state',
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
  },
  responses: {
    200: {
      description: 'Enabled state returned',
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
    404: {
      description: 'ExApp not found',
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
  security: [{}, { bearer_auth: [] }, { basic_auth: [] }],
})

export const getOcsV2PhpAppsAppApiApiV1InfoNextcloudUrlAbsoluteRoute = createRoute({
  method: 'get',
  path: '/ocs/v2.php/apps/app_api/api/v1/info/nextcloud_url/absolute',
  tags: ['ocs_api'],
  summary: 'Build an absolute URL from a Nextcloud-relative URL',
  operationId: 'ocs_api-get-nextcloud-absolute-url',
  request: {
    query: z.object({
      url: z
        .string()
        .openapi({
          param: {
            name: 'url',
            in: 'query',
            description: 'Relative URL to convert into an absolute one',
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
      description: 'Absolute URL returned',
      content: {
        'application/json': {
          schema: z
            .object({
              ocs: z
                .object({
                  meta: OCSMetaSchema,
                  data: z
                    .object({ absolute_url: z.string() })
                    .openapi({ required: ['absolute_url'] }),
                })
                .openapi({ required: ['meta', 'data'] }),
            })
            .openapi({ required: ['ocs'] }),
        },
      },
    },
  },
  security: [{}, { bearer_auth: [] }, { basic_auth: [] }],
})

export const postOcsV2PhpAppsAppApiApiV1ExAppConfigRoute = createRoute({
  method: 'post',
  path: '/ocs/v2.php/apps/app_api/api/v1/ex-app/config',
  tags: ['app_config'],
  summary: 'Set a configuration value for the calling ExApp',
  operationId: 'app_config-set-app-config-value',
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
              configKey: z.string().openapi({ description: 'Configuration key' }),
              configValue: z.object({}).openapi({ description: 'Configuration value' }),
              sensitive: z
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
                .default(null)
                .exactOptional()
                .openapi({
                  type: ['integer', 'null'],
                  format: 'int64',
                  default: null,
                  description:
                    'Whether the value is sensitive and should be stored encrypted (1) or not (0)',
                }),
            })
            .openapi({ required: ['configKey', 'configValue'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Config value set',
      content: {
        'application/json': {
          schema: z
            .object({
              ocs: z
                .object({ meta: OCSMetaSchema, data: ExAppConfigSchema })
                .openapi({ required: ['meta', 'data'] }),
            })
            .openapi({ required: ['ocs'] }),
        },
      },
    },
    400: {
      description: 'Config key is empty or the value could not be set',
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
  security: [{}, { bearer_auth: [] }, { basic_auth: [] }],
})

export const deleteOcsV2PhpAppsAppApiApiV1ExAppConfigRoute = createRoute({
  method: 'delete',
  path: '/ocs/v2.php/apps/app_api/api/v1/ex-app/config',
  tags: ['app_config'],
  summary: 'Delete configuration values of the calling ExApp',
  operationId: 'app_config-delete-app-config-values',
  request: {
    query: z.object({
      'configKeys[]': z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.string()),
        )
        .openapi({
          param: {
            name: 'configKeys[]',
            in: 'query',
            description: 'Configuration keys to delete',
            required: true,
            schema: { type: 'array', items: { type: 'string' } },
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
  },
  responses: {
    200: {
      description: 'Number of deleted config values returned',
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
      description: 'Failed to delete the config values',
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
      description: 'No matching config values were found',
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
  security: [{}, { bearer_auth: [] }, { basic_auth: [] }],
})

export const postOcsV2PhpAppsAppApiApiV1ExAppConfigGetValuesRoute = createRoute({
  method: 'post',
  path: '/ocs/v2.php/apps/app_api/api/v1/ex-app/config/get-values',
  tags: ['app_config'],
  summary: 'Get configuration values of the calling ExApp',
  operationId: 'app_config-get-app-config-values',
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
              configKeys: z
                .array(z.string())
                .openapi({ description: 'Configuration keys to retrieve' }),
            })
            .openapi({ required: ['configKeys'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Config values returned',
      content: {
        'application/json': {
          schema: z
            .object({
              ocs: z
                .object({ meta: OCSMetaSchema, data: z.array(ExAppConfigValueSchema) })
                .openapi({ required: ['meta', 'data'] }),
            })
            .openapi({ required: ['ocs'] }),
        },
      },
    },
  },
  security: [{}, { bearer_auth: [] }, { basic_auth: [] }],
})

export const postOcsV2PhpAppsAppApiApiV1ExAppPreferenceRoute = createRoute({
  method: 'post',
  path: '/ocs/v2.php/apps/app_api/api/v1/ex-app/preference',
  tags: ['preferences'],
  summary: 'Set a preference value for the current user and the calling ExApp',
  operationId: 'preferences-set-user-config-value',
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
              configKey: z.string().openapi({ description: 'Preference key' }),
              configValue: z.object({}).openapi({ description: 'Preference value' }),
              sensitive: z
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
                .default(null)
                .exactOptional()
                .openapi({
                  type: ['integer', 'null'],
                  format: 'int64',
                  default: null,
                  description:
                    'Whether the value is sensitive and should be stored encrypted (1) or not (0)',
                }),
            })
            .openapi({ required: ['configKey', 'configValue'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Preference value set',
      content: {
        'application/json': {
          schema: z
            .object({
              ocs: z
                .object({ meta: OCSMetaSchema, data: ExAppPreferenceSchema })
                .openapi({ required: ['meta', 'data'] }),
            })
            .openapi({ required: ['ocs'] }),
        },
      },
    },
    400: {
      description: 'Config key is empty or the value could not be set',
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
  security: [{}, { bearer_auth: [] }, { basic_auth: [] }],
})

export const deleteOcsV2PhpAppsAppApiApiV1ExAppPreferenceRoute = createRoute({
  method: 'delete',
  path: '/ocs/v2.php/apps/app_api/api/v1/ex-app/preference',
  tags: ['preferences'],
  summary: 'Delete preference values of the current user for the calling ExApp',
  operationId: 'preferences-delete-user-config-values',
  request: {
    query: z.object({
      'configKeys[]': z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.string()),
        )
        .openapi({
          param: {
            name: 'configKeys[]',
            in: 'query',
            description: 'Preference keys to delete',
            required: true,
            schema: { type: 'array', items: { type: 'string' } },
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
  },
  responses: {
    200: {
      description: 'Number of deleted preference values returned',
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
      description: 'Failed to delete the preference values',
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
      description: 'No matching preference values were found',
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
  security: [{}, { bearer_auth: [] }, { basic_auth: [] }],
})

export const postOcsV2PhpAppsAppApiApiV1ExAppPreferenceGetValuesRoute = createRoute({
  method: 'post',
  path: '/ocs/v2.php/apps/app_api/api/v1/ex-app/preference/get-values',
  tags: ['preferences'],
  summary: 'Get preference values of the current user for the calling ExApp',
  operationId: 'preferences-get-user-config-values',
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
              configKeys: z
                .array(z.string())
                .openapi({ description: 'Preference keys to retrieve' }),
            })
            .openapi({ required: ['configKeys'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Preference values returned',
      content: {
        'application/json': {
          schema: z
            .object({
              ocs: z
                .object({ meta: OCSMetaSchema, data: z.array(ExAppConfigValueSchema) })
                .openapi({ required: ['meta', 'data'] }),
            })
            .openapi({ required: ['ocs'] }),
        },
      },
    },
  },
  security: [{}, { bearer_auth: [] }, { basic_auth: [] }],
})

export const postOcsV2PhpAppsAppApiApiV1NotificationRoute = createRoute({
  method: 'post',
  path: '/ocs/v2.php/apps/app_api/api/v1/notification',
  tags: ['notifications'],
  summary: 'Send a notification to a user on behalf of the calling ExApp',
  operationId: 'notifications-send-notification',
  request: {
    headers: z.object({
      'ex-app-id': z
        .string()
        .exactOptional()
        .openapi({
          param: { name: 'ex-app-id', in: 'header', schema: { type: 'string' }, required: false },
        }),
      'authorization-app-api': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'authorization-app-api',
            in: 'header',
            schema: { type: 'string' },
            required: false,
          },
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
              params: z
                .record(z.string(), z.object({}))
                .openapi({ description: 'Notification parameters' }),
            })
            .openapi({ required: ['params'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Notification sent',
      content: {
        'application/json': {
          schema: z
            .object({
              ocs: z
                .object({ meta: OCSMetaSchema, data: NotificationSchema })
                .openapi({ required: ['meta', 'data'] }),
            })
            .openapi({ required: ['ocs'] }),
        },
      },
    },
    404: {
      description:
        'The notifications app is not enabled, so nothing could deliver the notification',
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
  security: [{}, { bearer_auth: [] }, { basic_auth: [] }],
})

export const getOcsV2PhpAppsAppApiApiV1OccCommandRoute = createRoute({
  method: 'get',
  path: '/ocs/v2.php/apps/app_api/api/v1/occ_command',
  tags: ['occ_command'],
  summary: 'Get an occ command of the calling ExApp',
  operationId: 'occ_command-get-command',
  request: {
    query: z.object({
      name: z
        .string()
        .openapi({
          param: {
            name: 'name',
            in: 'query',
            description: 'Name of the command',
            required: true,
            schema: { type: 'string' },
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
  },
  responses: {
    200: {
      description: 'Command returned',
      content: {
        'application/json': {
          schema: z
            .object({
              ocs: z
                .object({ meta: OCSMetaSchema, data: OccCommandSchema })
                .openapi({ required: ['meta', 'data'] }),
            })
            .openapi({ required: ['ocs'] }),
        },
      },
    },
    404: {
      description: 'Command not found',
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
  security: [{}, { bearer_auth: [] }, { basic_auth: [] }],
})

export const postOcsV2PhpAppsAppApiApiV1OccCommandRoute = createRoute({
  method: 'post',
  path: '/ocs/v2.php/apps/app_api/api/v1/occ_command',
  tags: ['occ_command'],
  summary: 'Register an occ command for the calling ExApp',
  operationId: 'occ_command-register-command',
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
              name: z.string().openapi({ description: 'Name of the command' }),
              description: z.string().openapi({ description: 'Description of the command' }),
              execute_handler: z
                .string()
                .openapi({ description: 'Handler route called when the command is executed' }),
              hidden: z
                .preprocess(
                  (val) =>
                    typeof val === 'number' && Number.isSafeInteger(val)
                      ? BigInt(val)
                      : typeof val === 'string' && /^-?\d+$/.test(val)
                        ? BigInt(val)
                        : val,
                  z.int64(),
                )
                .default(0n)
                .exactOptional()
                .openapi({
                  type: 'integer',
                  format: 'int64',
                  default: 0,
                  description: 'Whether the command is hidden from the command list (1) or not (0)',
                }),
              arguments: z
                .array(z.object({}))
                .default([])
                .exactOptional()
                .openapi({ description: 'Command argument definitions' }),
              options: z
                .array(z.object({}))
                .default([])
                .exactOptional()
                .openapi({ description: 'Command option definitions' }),
              usages: z
                .array(z.object({}))
                .default([])
                .exactOptional()
                .openapi({ description: 'Example usages of the command' }),
            })
            .openapi({ required: ['name', 'description', 'execute_handler'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Command registered',
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
    400: {
      description: 'Command could not be registered',
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
  security: [{}, { bearer_auth: [] }, { basic_auth: [] }],
})

export const deleteOcsV2PhpAppsAppApiApiV1OccCommandRoute = createRoute({
  method: 'delete',
  path: '/ocs/v2.php/apps/app_api/api/v1/occ_command',
  tags: ['occ_command'],
  summary: 'Unregister an occ command of the calling ExApp',
  operationId: 'occ_command-unregister-command',
  request: {
    query: z.object({
      name: z
        .string()
        .openapi({
          param: {
            name: 'name',
            in: 'query',
            description: 'Name of the command to remove',
            required: true,
            schema: { type: 'string' },
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
  },
  responses: {
    200: {
      description: 'Command unregistered',
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
      description: 'Command not found',
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
  security: [{}, { bearer_auth: [] }, { basic_auth: [] }],
})

export const postOcsV2PhpAppsAppApiApiV1TalkBotRoute = createRoute({
  method: 'post',
  path: '/ocs/v2.php/apps/app_api/api/v1/talk_bot',
  tags: ['talk_bot'],
  summary: 'Register a Talk bot for the calling ExApp',
  operationId: 'talk_bot-register-ex-app-talk-bot',
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
              name: z.string().openapi({ description: 'Bot display name' }),
              route: z.string().openapi({ description: 'ExApp route that receives bot messages' }),
              description: z.string().openapi({ description: 'Description of the bot' }),
            })
            .openapi({ required: ['name', 'route', 'description'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Talk bot registered',
      content: {
        'application/json': {
          schema: z
            .object({
              ocs: z
                .object({ meta: OCSMetaSchema, data: TalkBotSchema })
                .openapi({ required: ['meta', 'data'] }),
            })
            .openapi({ required: ['ocs'] }),
        },
      },
    },
    400: {
      description: 'Talk bot could not be registered',
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
  security: [{}, { bearer_auth: [] }, { basic_auth: [] }],
})

export const deleteOcsV2PhpAppsAppApiApiV1TalkBotRoute = createRoute({
  method: 'delete',
  path: '/ocs/v2.php/apps/app_api/api/v1/talk_bot',
  tags: ['talk_bot'],
  summary: 'Unregister a Talk bot of the calling ExApp',
  operationId: 'talk_bot-unregister-ex-app-talk-bot',
  request: {
    query: z.object({
      route: z
        .string()
        .openapi({
          param: {
            name: 'route',
            in: 'query',
            description: 'ExApp route of the bot to remove',
            required: true,
            schema: { type: 'string' },
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
  },
  responses: {
    200: {
      description: 'Talk bot unregistered',
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
    404: {
      description: 'Talk bot could not be unregistered',
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
  security: [{}, { bearer_auth: [] }, { basic_auth: [] }],
})

export const postOcsV2PhpAppsAppApiApiV1TalkProxyAppIdRouteRoute = createRoute({
  method: 'post',
  path: '/ocs/v2.php/apps/app_api/api/v1/talk_proxy/{appId}/{route}',
  tags: ['talk_bot'],
  summary: 'Proxy a Talk chat message to the bot of a registered ExApp',
  operationId: 'talk_bot-proxy-talk-message',
  request: {
    params: z.object({
      appId: z
        .string()
        .openapi({
          param: {
            name: 'appId',
            in: 'path',
            description: 'ID of the ExApp owning the bot',
            required: true,
            schema: { type: 'string' },
          },
        }),
      route: z
        .string()
        .regex(/^.+$/)
        .openapi({
          param: {
            name: 'route',
            in: 'path',
            description: 'ExApp route that receives the message',
            required: true,
            schema: { type: 'string', pattern: '^.+$' },
          },
        }),
    }),
    headers: z.object({
      'x-nextcloud-talk-random': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'x-nextcloud-talk-random',
            in: 'header',
            schema: { type: 'string' },
            required: false,
          },
        }),
      'x-nextcloud-talk-signature': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'x-nextcloud-talk-signature',
            in: 'header',
            schema: { type: 'string' },
            required: false,
          },
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
  },
  responses: {
    200: {
      description: 'Message proxied to the ExApp bot',
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
      description: 'Invalid signature or unknown bot',
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
      description: 'The ExApp bot could not be reached',
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
  security: [{}, { bearer_auth: [] }, { basic_auth: [] }],
})

export const getOcsV2PhpAppsAppApiApiV1UiFilesActionsMenuRoute = createRoute({
  method: 'get',
  path: '/ocs/v2.php/apps/app_api/api/v1/ui/files-actions-menu',
  tags: ['ocs_ui'],
  summary: 'Get a files action menu entry of the calling ExApp',
  operationId: 'ocs_ui-get-file-action-menu',
  request: {
    query: z.object({
      name: z
        .string()
        .openapi({
          param: {
            name: 'name',
            in: 'query',
            description: 'Name of the action',
            required: true,
            schema: { type: 'string' },
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
  },
  responses: {
    200: {
      description: 'File action menu entry returned',
      content: {
        'application/json': {
          schema: z
            .object({
              ocs: z
                .object({ meta: OCSMetaSchema, data: FileActionSchema })
                .openapi({ required: ['meta', 'data'] }),
            })
            .openapi({ required: ['ocs'] }),
        },
      },
    },
    404: {
      description: 'File action menu entry not found',
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
  security: [{}, { bearer_auth: [] }, { basic_auth: [] }],
})

export const postOcsV2PhpAppsAppApiApiV1UiFilesActionsMenuRoute = createRoute({
  method: 'post',
  path: '/ocs/v2.php/apps/app_api/api/v1/ui/files-actions-menu',
  tags: ['ocs_ui'],
  summary: 'Register a files action menu entry for the calling ExApp',
  operationId: 'ocs_ui-register-file-action-menu',
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
              name: z.string().openapi({ description: 'Unique name of the action' }),
              displayName: z.string().openapi({ description: 'Human-readable display name' }),
              actionHandler: z
                .string()
                .openapi({ description: 'Handler route called when the action is triggered' }),
              icon: z
                .string()
                .default('')
                .exactOptional()
                .openapi({ description: 'Icon to display next to the action' }),
              mime: z
                .string()
                .default('file')
                .exactOptional()
                .openapi({ description: 'Mimetype the action applies to' }),
              permissions: z
                .preprocess(
                  (val) =>
                    typeof val === 'number' && Number.isSafeInteger(val)
                      ? BigInt(val)
                      : typeof val === 'string' && /^-?\d+$/.test(val)
                        ? BigInt(val)
                        : val,
                  z.int64(),
                )
                .default(31n)
                .exactOptional()
                .openapi({
                  type: 'integer',
                  format: 'int64',
                  default: 31,
                  description: 'Required permissions on the file',
                }),
              order: z
                .preprocess(
                  (val) =>
                    typeof val === 'number' && Number.isSafeInteger(val)
                      ? BigInt(val)
                      : typeof val === 'string' && /^-?\d+$/.test(val)
                        ? BigInt(val)
                        : val,
                  z.int64(),
                )
                .default(0n)
                .exactOptional()
                .openapi({
                  type: 'integer',
                  format: 'int64',
                  default: 0,
                  description: 'Ordering of the action in the menu',
                }),
            })
            .openapi({ required: ['name', 'displayName', 'actionHandler'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'File action menu entry registered',
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
    400: {
      description: 'File action menu entry could not be registered',
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
  deprecated: true,
  security: [{}, { bearer_auth: [] }, { basic_auth: [] }],
})

export const deleteOcsV2PhpAppsAppApiApiV1UiFilesActionsMenuRoute = createRoute({
  method: 'delete',
  path: '/ocs/v2.php/apps/app_api/api/v1/ui/files-actions-menu',
  tags: ['ocs_ui'],
  summary: 'Unregister a files action menu entry of the calling ExApp',
  operationId: 'ocs_ui-unregister-file-action-menu',
  request: {
    query: z.object({
      name: z
        .string()
        .openapi({
          param: {
            name: 'name',
            in: 'query',
            description: 'Name of the action to remove',
            required: true,
            schema: { type: 'string' },
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
  },
  responses: {
    200: {
      description: 'File action menu entry unregistered',
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
      description: 'File action menu entry not found',
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
  security: [{}, { bearer_auth: [] }, { basic_auth: [] }],
})

export const postOcsV2PhpAppsAppApiApiV2UiFilesActionsMenuRoute = createRoute({
  method: 'post',
  path: '/ocs/v2.php/apps/app_api/api/v2/ui/files-actions-menu',
  tags: ['ocs_ui'],
  summary: 'Register a files action menu entry (v2) for the calling ExApp',
  operationId: 'ocs_ui-register-file-action-menu-v2',
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
              name: z.string().openapi({ description: 'Unique name of the action' }),
              displayName: z.string().openapi({ description: 'Human-readable display name' }),
              actionHandler: z
                .string()
                .openapi({ description: 'Handler route called when the action is triggered' }),
              icon: z
                .string()
                .default('')
                .exactOptional()
                .openapi({ description: 'Icon to display next to the action' }),
              mime: z
                .string()
                .default('file')
                .exactOptional()
                .openapi({ description: 'Mimetype the action applies to' }),
              permissions: z
                .preprocess(
                  (val) =>
                    typeof val === 'number' && Number.isSafeInteger(val)
                      ? BigInt(val)
                      : typeof val === 'string' && /^-?\d+$/.test(val)
                        ? BigInt(val)
                        : val,
                  z.int64(),
                )
                .default(31n)
                .exactOptional()
                .openapi({
                  type: 'integer',
                  format: 'int64',
                  default: 31,
                  description: 'Required permissions on the file',
                }),
              order: z
                .preprocess(
                  (val) =>
                    typeof val === 'number' && Number.isSafeInteger(val)
                      ? BigInt(val)
                      : typeof val === 'string' && /^-?\d+$/.test(val)
                        ? BigInt(val)
                        : val,
                  z.int64(),
                )
                .default(0n)
                .exactOptional()
                .openapi({
                  type: 'integer',
                  format: 'int64',
                  default: 0,
                  description: 'Ordering of the action in the menu',
                }),
              defaultAction: z
                .string()
                .default('')
                .exactOptional()
                .openapi({
                  description:
                    "Whether this is the default action: one of '', 'default' or 'hidden'",
                }),
            })
            .openapi({ required: ['name', 'displayName', 'actionHandler'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'File action menu entry registered',
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
    400: {
      description: 'File action menu entry could not be registered or defaultAction is invalid',
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
  security: [{}, { bearer_auth: [] }, { basic_auth: [] }],
})

export const getOcsV2PhpAppsAppApiApiV1UiTopMenuRoute = createRoute({
  method: 'get',
  path: '/ocs/v2.php/apps/app_api/api/v1/ui/top-menu',
  tags: ['ocs_ui'],
  summary: 'Get a top menu entry of the calling ExApp',
  operationId: 'ocs_ui-get-ex-app-menu-entry',
  request: {
    query: z.object({
      name: z
        .string()
        .openapi({
          param: {
            name: 'name',
            in: 'query',
            description: 'Name of the menu entry',
            required: true,
            schema: { type: 'string' },
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
  },
  responses: {
    200: {
      description: 'Top menu entry returned',
      content: {
        'application/json': {
          schema: z
            .object({
              ocs: z
                .object({ meta: OCSMetaSchema, data: TopMenuSchema })
                .openapi({ required: ['meta', 'data'] }),
            })
            .openapi({ required: ['ocs'] }),
        },
      },
    },
    404: {
      description: 'Top menu entry not found',
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
  security: [{}, { bearer_auth: [] }, { basic_auth: [] }],
})

export const postOcsV2PhpAppsAppApiApiV1UiTopMenuRoute = createRoute({
  method: 'post',
  path: '/ocs/v2.php/apps/app_api/api/v1/ui/top-menu',
  tags: ['ocs_ui'],
  summary: 'Register a top menu entry for the calling ExApp',
  operationId: 'ocs_ui-register-ex-app-menu-entry',
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
              name: z.string().openapi({ description: 'Unique name of the menu entry' }),
              displayName: z.string().openapi({ description: 'Human-readable display name' }),
              icon: z
                .string()
                .default('')
                .exactOptional()
                .openapi({ description: 'Icon to display for the menu entry' }),
              adminRequired: z
                .preprocess(
                  (val) =>
                    typeof val === 'number' && Number.isSafeInteger(val)
                      ? BigInt(val)
                      : typeof val === 'string' && /^-?\d+$/.test(val)
                        ? BigInt(val)
                        : val,
                  z.int64(),
                )
                .default(0n)
                .exactOptional()
                .openapi({
                  type: 'integer',
                  format: 'int64',
                  default: 0,
                  description: 'Whether the entry is only visible to admins (1) or to everyone (0)',
                }),
            })
            .openapi({ required: ['name', 'displayName'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Top menu entry registered',
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
    400: {
      description: 'Top menu entry could not be registered',
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
  security: [{}, { bearer_auth: [] }, { basic_auth: [] }],
})

export const deleteOcsV2PhpAppsAppApiApiV1UiTopMenuRoute = createRoute({
  method: 'delete',
  path: '/ocs/v2.php/apps/app_api/api/v1/ui/top-menu',
  tags: ['ocs_ui'],
  summary: 'Unregister a top menu entry of the calling ExApp',
  operationId: 'ocs_ui-unregister-ex-app-menu-entry',
  request: {
    query: z.object({
      name: z
        .string()
        .openapi({
          param: {
            name: 'name',
            in: 'query',
            description: 'Name of the menu entry to remove',
            required: true,
            schema: { type: 'string' },
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
  },
  responses: {
    200: {
      description: 'Top menu entry unregistered',
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
      description: 'Top menu entry not found',
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
  security: [{}, { bearer_auth: [] }, { basic_auth: [] }],
})

export const getOcsV2PhpAppsAppApiApiV1UiInitialStateRoute = createRoute({
  method: 'get',
  path: '/ocs/v2.php/apps/app_api/api/v1/ui/initial-state',
  tags: ['ocs_ui'],
  summary: 'Get an initial state of the calling ExApp',
  operationId: 'ocs_ui-get-ex-app-initial-state',
  request: {
    query: z.object({
      type: z
        .string()
        .openapi({
          param: {
            name: 'type',
            in: 'query',
            description: 'Page type the initial state belongs to',
            required: true,
            schema: { type: 'string' },
          },
        }),
      name: z
        .string()
        .openapi({
          param: {
            name: 'name',
            in: 'query',
            description: 'Name of the page',
            required: true,
            schema: { type: 'string' },
          },
        }),
      key: z
        .string()
        .openapi({
          param: {
            name: 'key',
            in: 'query',
            description: 'Initial state key',
            required: true,
            schema: { type: 'string' },
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
  },
  responses: {
    200: {
      description: 'Initial state returned',
      content: {
        'application/json': {
          schema: z
            .object({
              ocs: z
                .object({ meta: OCSMetaSchema, data: InitialStateSchema })
                .openapi({ required: ['meta', 'data'] }),
            })
            .openapi({ required: ['ocs'] }),
        },
      },
    },
    404: {
      description: 'Initial state not found',
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
  security: [{}, { bearer_auth: [] }, { basic_auth: [] }],
})

export const postOcsV2PhpAppsAppApiApiV1UiInitialStateRoute = createRoute({
  method: 'post',
  path: '/ocs/v2.php/apps/app_api/api/v1/ui/initial-state',
  tags: ['ocs_ui'],
  summary: 'Set an initial state for a page of the calling ExApp',
  operationId: 'ocs_ui-set-ex-app-initial-state',
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
              type: z.string().openapi({ description: 'Page type the initial state belongs to' }),
              name: z.string().openapi({ description: 'Name of the page' }),
              key: z.string().openapi({ description: 'Initial state key' }),
              value: z
                .record(z.string(), z.object({}))
                .openapi({ description: 'Initial state value' }),
            })
            .openapi({ required: ['type', 'name', 'key', 'value'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Initial state set',
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
    400: {
      description: 'Initial state could not be set',
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
  security: [{}, { bearer_auth: [] }, { basic_auth: [] }],
})

export const deleteOcsV2PhpAppsAppApiApiV1UiInitialStateRoute = createRoute({
  method: 'delete',
  path: '/ocs/v2.php/apps/app_api/api/v1/ui/initial-state',
  tags: ['ocs_ui'],
  summary: 'Delete an initial state of the calling ExApp',
  operationId: 'ocs_ui-delete-ex-app-initial-state',
  request: {
    query: z.object({
      type: z
        .string()
        .openapi({
          param: {
            name: 'type',
            in: 'query',
            description: 'Page type the initial state belongs to',
            required: true,
            schema: { type: 'string' },
          },
        }),
      name: z
        .string()
        .openapi({
          param: {
            name: 'name',
            in: 'query',
            description: 'Name of the page',
            required: true,
            schema: { type: 'string' },
          },
        }),
      key: z
        .string()
        .openapi({
          param: {
            name: 'key',
            in: 'query',
            description: 'Initial state key',
            required: true,
            schema: { type: 'string' },
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
  },
  responses: {
    200: {
      description: 'Initial state deleted',
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
      description: 'Initial state not found',
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
  security: [{}, { bearer_auth: [] }, { basic_auth: [] }],
})

export const getOcsV2PhpAppsAppApiApiV1UiScriptRoute = createRoute({
  method: 'get',
  path: '/ocs/v2.php/apps/app_api/api/v1/ui/script',
  tags: ['ocs_ui'],
  summary: 'Get a script of the calling ExApp',
  operationId: 'ocs_ui-get-ex-app-script',
  request: {
    query: z.object({
      type: z
        .string()
        .openapi({
          param: {
            name: 'type',
            in: 'query',
            description: 'Page type the script belongs to',
            required: true,
            schema: { type: 'string' },
          },
        }),
      name: z
        .string()
        .openapi({
          param: {
            name: 'name',
            in: 'query',
            description: 'Name of the page',
            required: true,
            schema: { type: 'string' },
          },
        }),
      path: z
        .string()
        .openapi({
          param: {
            name: 'path',
            in: 'query',
            description: 'Path to the script file inside the ExApp',
            required: true,
            schema: { type: 'string' },
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
  },
  responses: {
    200: {
      description: 'Script returned',
      content: {
        'application/json': {
          schema: z
            .object({
              ocs: z
                .object({ meta: OCSMetaSchema, data: ScriptSchema })
                .openapi({ required: ['meta', 'data'] }),
            })
            .openapi({ required: ['ocs'] }),
        },
      },
    },
    404: {
      description: 'Script not found',
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
  security: [{}, { bearer_auth: [] }, { basic_auth: [] }],
})

export const postOcsV2PhpAppsAppApiApiV1UiScriptRoute = createRoute({
  method: 'post',
  path: '/ocs/v2.php/apps/app_api/api/v1/ui/script',
  tags: ['ocs_ui'],
  summary: 'Register a script for a page of the calling ExApp',
  operationId: 'ocs_ui-set-ex-app-script',
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
              type: z.string().openapi({ description: 'Page type the script belongs to' }),
              name: z.string().openapi({ description: 'Name of the page' }),
              path: z.string().openapi({ description: 'Path to the script file inside the ExApp' }),
              afterAppId: z
                .string()
                .default('')
                .exactOptional()
                .openapi({ description: 'Load the script after the script of this app' }),
            })
            .openapi({ required: ['type', 'name', 'path'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Script registered',
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
    400: {
      description: 'Script could not be set',
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
  security: [{}, { bearer_auth: [] }, { basic_auth: [] }],
})

export const deleteOcsV2PhpAppsAppApiApiV1UiScriptRoute = createRoute({
  method: 'delete',
  path: '/ocs/v2.php/apps/app_api/api/v1/ui/script',
  tags: ['ocs_ui'],
  summary: 'Delete a script of the calling ExApp',
  operationId: 'ocs_ui-delete-ex-app-script',
  request: {
    query: z.object({
      type: z
        .string()
        .openapi({
          param: {
            name: 'type',
            in: 'query',
            description: 'Page type the script belongs to',
            required: true,
            schema: { type: 'string' },
          },
        }),
      name: z
        .string()
        .openapi({
          param: {
            name: 'name',
            in: 'query',
            description: 'Name of the page',
            required: true,
            schema: { type: 'string' },
          },
        }),
      path: z
        .string()
        .openapi({
          param: {
            name: 'path',
            in: 'query',
            description: 'Path to the script file inside the ExApp',
            required: true,
            schema: { type: 'string' },
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
  },
  responses: {
    200: {
      description: 'Script deleted',
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
      description: 'Script not found',
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
  security: [{}, { bearer_auth: [] }, { basic_auth: [] }],
})

export const getOcsV2PhpAppsAppApiApiV1UiStyleRoute = createRoute({
  method: 'get',
  path: '/ocs/v2.php/apps/app_api/api/v1/ui/style',
  tags: ['ocs_ui'],
  summary: 'Get a style of the calling ExApp',
  operationId: 'ocs_ui-get-ex-app-style',
  request: {
    query: z.object({
      type: z
        .string()
        .openapi({
          param: {
            name: 'type',
            in: 'query',
            description: 'Page type the style belongs to',
            required: true,
            schema: { type: 'string' },
          },
        }),
      name: z
        .string()
        .openapi({
          param: {
            name: 'name',
            in: 'query',
            description: 'Name of the page',
            required: true,
            schema: { type: 'string' },
          },
        }),
      path: z
        .string()
        .openapi({
          param: {
            name: 'path',
            in: 'query',
            description: 'Path to the style file inside the ExApp',
            required: true,
            schema: { type: 'string' },
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
  },
  responses: {
    200: {
      description: 'Style returned',
      content: {
        'application/json': {
          schema: z
            .object({
              ocs: z
                .object({ meta: OCSMetaSchema, data: StyleSchema })
                .openapi({ required: ['meta', 'data'] }),
            })
            .openapi({ required: ['ocs'] }),
        },
      },
    },
    404: {
      description: 'Style not found',
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
  security: [{}, { bearer_auth: [] }, { basic_auth: [] }],
})

export const postOcsV2PhpAppsAppApiApiV1UiStyleRoute = createRoute({
  method: 'post',
  path: '/ocs/v2.php/apps/app_api/api/v1/ui/style',
  tags: ['ocs_ui'],
  summary: 'Register a style for a page of the calling ExApp',
  operationId: 'ocs_ui-set-ex-app-style',
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
              type: z.string().openapi({ description: 'Page type the style belongs to' }),
              name: z.string().openapi({ description: 'Name of the page' }),
              path: z.string().openapi({ description: 'Path to the style file inside the ExApp' }),
            })
            .openapi({ required: ['type', 'name', 'path'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Style registered',
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
    400: {
      description: 'Style could not be set',
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
  security: [{}, { bearer_auth: [] }, { basic_auth: [] }],
})

export const deleteOcsV2PhpAppsAppApiApiV1UiStyleRoute = createRoute({
  method: 'delete',
  path: '/ocs/v2.php/apps/app_api/api/v1/ui/style',
  tags: ['ocs_ui'],
  summary: 'Delete a style of the calling ExApp',
  operationId: 'ocs_ui-delete-ex-app-style',
  request: {
    query: z.object({
      type: z
        .string()
        .openapi({
          param: {
            name: 'type',
            in: 'query',
            description: 'Page type the style belongs to',
            required: true,
            schema: { type: 'string' },
          },
        }),
      name: z
        .string()
        .openapi({
          param: {
            name: 'name',
            in: 'query',
            description: 'Name of the page',
            required: true,
            schema: { type: 'string' },
          },
        }),
      path: z
        .string()
        .openapi({
          param: {
            name: 'path',
            in: 'query',
            description: 'Path to the style file inside the ExApp',
            required: true,
            schema: { type: 'string' },
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
  },
  responses: {
    200: {
      description: 'Style deleted',
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
      description: 'Style not found',
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
  security: [{}, { bearer_auth: [] }, { basic_auth: [] }],
})

export const getOcsV2PhpAppsAppApiApiV1UiSettingsRoute = createRoute({
  method: 'get',
  path: '/ocs/v2.php/apps/app_api/api/v1/ui/settings',
  tags: ['ocs_settings'],
  summary: 'Get a declarative settings form of the calling ExApp',
  operationId: 'ocs_settings-get-form',
  request: {
    query: z.object({
      formId: z
        .string()
        .openapi({
          param: {
            name: 'formId',
            in: 'query',
            description: 'ID of the settings form',
            required: true,
            schema: { type: 'string' },
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
  },
  responses: {
    200: {
      description: 'Settings form returned',
      content: {
        'application/json': {
          schema: z
            .object({
              ocs: z
                .object({ meta: OCSMetaSchema, data: z.record(z.string(), z.object({})) })
                .openapi({ required: ['meta', 'data'] }),
            })
            .openapi({ required: ['ocs'] }),
        },
      },
    },
    404: {
      description: 'Settings form not found',
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
  security: [{}, { bearer_auth: [] }, { basic_auth: [] }],
})

export const postOcsV2PhpAppsAppApiApiV1UiSettingsRoute = createRoute({
  method: 'post',
  path: '/ocs/v2.php/apps/app_api/api/v1/ui/settings',
  tags: ['ocs_settings'],
  summary: 'Register a declarative settings form for the calling ExApp',
  operationId: 'ocs_settings-register-form',
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
              formScheme: z
                .record(z.string(), z.object({}))
                .openapi({ description: 'Declarative settings form scheme' }),
            })
            .openapi({ required: ['formScheme'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Settings form registered',
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
    400: {
      description: 'Settings form could not be registered',
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
  security: [{}, { bearer_auth: [] }, { basic_auth: [] }],
})

export const deleteOcsV2PhpAppsAppApiApiV1UiSettingsRoute = createRoute({
  method: 'delete',
  path: '/ocs/v2.php/apps/app_api/api/v1/ui/settings',
  tags: ['ocs_settings'],
  summary: 'Unregister a declarative settings form of the calling ExApp',
  operationId: 'ocs_settings-unregister-form',
  request: {
    query: z.object({
      formId: z
        .string()
        .openapi({
          param: {
            name: 'formId',
            in: 'query',
            description: 'ID of the settings form to remove',
            required: true,
            schema: { type: 'string' },
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
  },
  responses: {
    200: {
      description: 'Settings form unregistered',
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
      description: 'Settings form not found',
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
  security: [{}, { bearer_auth: [] }, { basic_auth: [] }],
})

export const getOcsV2PhpAppsAppApiApiV1AiProviderTaskProcessingRoute = createRoute({
  method: 'get',
  path: '/ocs/v2.php/apps/app_api/api/v1/ai_provider/task_processing',
  tags: ['task_processing'],
  summary: 'Get a Task Processing provider of the calling ExApp',
  operationId: 'task_processing-get-provider',
  request: {
    query: z.object({
      name: z
        .string()
        .openapi({
          param: {
            name: 'name',
            in: 'query',
            description: 'Name of the provider',
            required: true,
            schema: { type: 'string' },
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
  },
  responses: {
    200: {
      description: 'Provider returned',
      content: {
        'application/json': {
          schema: z
            .object({
              ocs: z
                .object({ meta: OCSMetaSchema, data: TaskProcessingProviderSchema })
                .openapi({ required: ['meta', 'data'] }),
            })
            .openapi({ required: ['ocs'] }),
        },
      },
    },
    404: {
      description: 'Provider not found',
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
  security: [{}, { bearer_auth: [] }, { basic_auth: [] }],
})

export const postOcsV2PhpAppsAppApiApiV1AiProviderTaskProcessingRoute = createRoute({
  method: 'post',
  path: '/ocs/v2.php/apps/app_api/api/v1/ai_provider/task_processing',
  tags: ['task_processing'],
  summary: 'Register a Task Processing provider for the calling ExApp',
  operationId: 'task_processing-register-provider',
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
              provider: z
                .record(z.string(), z.object({}))
                .openapi({ description: 'Task Processing provider definition' }),
              customTaskType: z
                .record(z.string(), z.object({}))
                .nullable()
                .exactOptional()
                .openapi({ description: 'Custom task type definition, or null' }),
            })
            .openapi({ required: ['provider'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Provider registered',
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
    400: {
      description: 'Provider could not be registered',
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
  security: [{}, { bearer_auth: [] }, { basic_auth: [] }],
})

export const deleteOcsV2PhpAppsAppApiApiV1AiProviderTaskProcessingRoute = createRoute({
  method: 'delete',
  path: '/ocs/v2.php/apps/app_api/api/v1/ai_provider/task_processing',
  tags: ['task_processing'],
  summary: 'Unregister a Task Processing provider of the calling ExApp',
  operationId: 'task_processing-unregister-provider',
  request: {
    query: z.object({
      name: z
        .string()
        .openapi({
          param: {
            name: 'name',
            in: 'query',
            description: 'Name of the provider to remove',
            required: true,
            schema: { type: 'string' },
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
  },
  responses: {
    200: {
      description: 'Provider unregistered',
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
      description: 'Provider not found',
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
  security: [{}, { bearer_auth: [] }, { basic_auth: [] }],
})

export const postOcsV2PhpAppsAppApiApiV1SetupCheckRoute = createRoute({
  method: 'post',
  path: '/ocs/v2.php/apps/app_api/api/v1/setup_check',
  tags: ['setup_check'],
  summary: 'Opt the calling ExApp in to setup checks',
  description:
    'The ExApp is identified from the authenticated `ex-app-id` header, so it can only ever opt itself in. Its live results are then fetched from the ExApp\'s `/setup_checks` endpoint by a background job and surfaced in the admin "Security & setup warnings" panel.',
  operationId: 'setup_check-register-checks',
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
  },
  responses: {
    200: {
      description: 'ExApp opted in to setup checks',
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
  security: [{}, { bearer_auth: [] }, { basic_auth: [] }],
})

export const deleteOcsV2PhpAppsAppApiApiV1SetupCheckRoute = createRoute({
  method: 'delete',
  path: '/ocs/v2.php/apps/app_api/api/v1/setup_check',
  tags: ['setup_check'],
  summary: 'Opt the calling ExApp out of setup checks',
  operationId: 'setup_check-unregister-checks',
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
  },
  responses: {
    200: {
      description: 'ExApp opted out of setup checks',
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
  security: [{}, { bearer_auth: [] }, { basic_auth: [] }],
})
