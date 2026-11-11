import { createRoute, z } from '@hono/zod-openapi'

const AuthorizationErrorResponse = {
  description: 'Unauthorized',
  content: {
    'application/json': {
      schema: z
        .object({ success: z.boolean().exactOptional(), error: z.string().exactOptional() })
        .openapi({ required: [] }),
      examples: {
        'Authorization Error': {
          value: { success: false, error: 'You must be logged in to do this.' },
        },
      },
    },
  },
}

const OffsetParamsSchema = z
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
      name: 'offset',
      in: 'query',
      description:
        'Number of items to "skip" in the query, i.e. requests return count items, skipping the first offset items. Refer to the [official documentation](https://developer.rocket.chat/apidocs/query-parameters#pagination) to learn more.',
      required: false,
      schema: { type: 'integer' },
      example: 50,
    },
  })

const CountParamsSchema = z
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
      name: 'count',
      in: 'query',
      description:
        'The number of items to return. Refer to the [official documentation](https://developer.rocket.chat/apidocs/query-parameters#pagination) to learn more.',
      required: false,
      schema: { type: 'integer' },
      example: 50,
    },
  })

const SortParamsSchema = z
  .any()
  .exactOptional()
  .openapi({
    param: {
      name: 'sort',
      in: 'query',
      description:
        'List of fields to order by, and in which direction. This is a JSON object, with properties listed in desired order, with values of 1 for ascending, or -1 for descending. For example, `{"value": -1, "_id": 1}`. Refer to the [official documentation](https://developer.rocket.chat/apidocs/query-parameters#pagination) to learn more.',
      required: false,
      schema: {},
    },
  })

const XAuthTokenParamsSchema = z
  .string()
  .openapi({
    param: {
      name: 'X-Auth-Token',
      in: 'header',
      description: 'The authorization token of the user.',
      required: true,
      schema: { type: 'string' },
      example: '9HqLlyZOugD_0YdwAJF8V47U3QHXSq',
    },
  })

const XUserIdParamsSchema = z
  .string()
  .openapi({
    param: {
      name: 'X-User-Id',
      in: 'header',
      description: 'The user ID of the user.',
      required: true,
      schema: { type: 'string' },
      example: 'aobEdbYhXfu5hkeqG',
    },
  })

export const postApiV1IntegrationsCreateRoute = createRoute({
  method: 'post',
  path: '/api/v1/integrations.create',
  tags: ['Integration'],
  summary: 'Create Integration',
  description:
    "Use this endpoint to create an incoming or outgoing integration. For details, see <a href='https://docs.rocket.chat/docs/integrations' target='_blank'>Integrations</a>.\n\nFrom Rocket.Chat 9.0.0, scripts are stored and run as written, without Babel. Existing scripts keep their transpiled version until they're edited and saved on Rocket.Chat 9.0.0 or later. See <a href='https://docs.rocket.chat/docs/integrations#script-compatibility' target='_blank'>Script compatibility</a> for the script patterns that must be updated.\n\nPermissions required to create incoming integrations:\n* `manage-incoming-integrations`\n* `manage-own-incoming-integrations`\n\nPermissions required to create outgoing integrations:\n* `manage-outgoing-integrations`\n* `manage-own-outgoing-integrations`\n### Changelog\n| Version      | Description |\n| ---------------- | ------------|\n|9.0.0            | Removed `skipTranspile`.       |\n|8.4.0            | Added `skipTranspile` field to opt-out of Babel transpilation |\n|1.1.0            | Separate permissions in incoming and outgoing.       |\n|0.49.0            | Added       |",
  operationId: 'post-api-v1-integrations-create',
  request: {
    headers: z.object({ 'X-Auth-Token': XAuthTokenParamsSchema, 'X-User-Id': XUserIdParamsSchema }),
    body: {
      description: '',
      content: {
        'application/json': {
          schema: z
            .object({
              type: z
                .string()
                .openapi({
                  description:
                    'The type of integration to create. The possible values are:\r\n* `webhook-incoming`\r\n* `webhook-outgoing`',
                }),
              username: z
                .string()
                .openapi({ description: 'The username to post this the messages as.' }),
              channel: z
                .string()
                .openapi({
                  description:
                    'The channel, group, or @username. The value can also be `all_public_channels`, `all_private_groups`, or `all_direct_messages`. Comma separated for more than one.',
                  example: '#general',
                }),
              scriptEnabled: z
                .boolean()
                .openapi({ description: 'Whether the script should be enabled.' }),
              script: z
                .string()
                .exactOptional()
                .openapi({
                  description: 'The script that is triggered when this integration is triggered.',
                }),
              name: z.string().openapi({ description: 'The name of the integration.' }),
              enabled: z
                .boolean()
                .openapi({ description: 'Whether this integration should be enabled or not.' }),
              alias: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    'The alias which should be applied to messages when this integration is processed.',
                }),
              avatar: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    'The logo to apply to the messages that this integration sends. For example, http://res.guggy.com/logo_128.png',
                }),
              emoji: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    'The emoji which should be displayed as the avatar for messages from this integration.',
                  example: ':ghost:',
                }),
              event: z
                .string()
                .openapi({
                  description:
                    '**Required for outgoing integrations.**\n\nThe type of event can be any of the following: \n* `sendMessage`\n* `fileUploaded`\n* `roomArchived`\n* `roomCreated`\n* `roomJoined`\n* `roomLeft`\n* `userCreated`',
                }),
              urls: z
                .array(z.string())
                .openapi({
                  description:
                    '**Required for outgoing integrations.**\n\nThe urls to call whenever this integration is triggered.',
                }),
              triggerWords: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    'This is an outgoing integration parameter.\nSpecific words, separated by commas, that should trigger this integration.',
                }),
              token: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    'This is an outgoing integration parameter.\nIf your integration requires a special token from the server (API key), use this parameter.',
                }),
            })
            .openapi({
              required: [
                'type',
                'username',
                'channel',
                'scriptEnabled',
                'name',
                'enabled',
                'event',
                'urls',
              ],
            }),
          examples: {
            'Incoming integration example': {
              value: {
                type: 'webhook-incoming',
                username: 'test.cat',
                channel: '#general',
                scriptEnabled: true,
                name: 'test.cat',
                enabled: true,
              },
            },
            'Outgoing integration example': {
              value: {
                type: 'webhook-outgoing',
                username: 'test.cat',
                channel: '#general',
                scriptEnabled: true,
                name: 'test.cat',
                enabled: true,
                event: 'sendMessage',
                urls: ['https://text2gif.guggy.com/guggify'],
              },
            },
          },
        },
      },
    },
  },
  responses: {
    200: {
      description: '',
      content: {
        'application/json': {
          schema: z
            .object({
              integration: z
                .object({
                  type: z.string().exactOptional(),
                  username: z.string().exactOptional(),
                  channel: z.array(z.string()).exactOptional(),
                  scriptEnabled: z.boolean().exactOptional(),
                  name: z.string().exactOptional(),
                  enabled: z.boolean().exactOptional(),
                  scriptEngine: z.string().exactOptional(),
                  overrideDestinationChannelEnabled: z.boolean().exactOptional(),
                  token: z.string().exactOptional(),
                  userId: z.string().exactOptional(),
                  _createdAt: z.string().exactOptional(),
                  _createdBy: z
                    .object({
                      _id: z.string().exactOptional(),
                      username: z.string().exactOptional(),
                    })
                    .exactOptional()
                    .openapi({ required: [] }),
                  _id: z.string().exactOptional(),
                })
                .exactOptional()
                .openapi({ required: [] }),
              success: z.boolean().exactOptional(),
            })
            .openapi({ required: [] }),
          examples: {
            'Incoming integration example': {
              value: {
                integration: {
                  type: 'webhook-incoming',
                  username: 'test.cat',
                  channel: ['#general'],
                  scriptEnabled: true,
                  name: 'test.cat',
                  enabled: true,
                  scriptEngine: 'isolated-vm',
                  overrideDestinationChannelEnabled: false,
                  token: 'XuHp73MccmCvJ9m3fKdQK6HKW9tjhBcbTKKHCSSLsv7qn4fk',
                  userId: 'CkCPNcvsvCDfmWLqC',
                  _createdAt: '2024-01-10T14:12:07.739Z',
                  _createdBy: { _id: 'CkCPNcvsvCDfmWLqC', username: 'test.cat' },
                  _id: '659ea5b72dd9f928ada3e43e',
                },
                success: true,
              },
            },
            'Outgoing integration example': {
              value: {
                integration: {
                  type: 'webhook-outgoing',
                  username: 'test.cat',
                  channel: ['#general'],
                  scriptEnabled: true,
                  name: 'test.cat',
                  enabled: true,
                  event: 'sendMessage',
                  urls: ['https://text2gif.guggy.com/guggify'],
                  scriptEngine: 'isolated-vm',
                  userId: 'CkCPNcvsvCDfmWLqC',
                  _createdAt: '2024-01-10T14:12:52.201Z',
                  _createdBy: { _id: 'CkCPNcvsvCDfmWLqC', username: 'test.cat' },
                  _id: '659ea5e42dd9f928ada3e451',
                },
                success: true,
              },
            },
          },
        },
      },
    },
    400: {
      description: 'Bad Request',
      content: {
        'application/json': {
          schema: z
            .object({
              success: z.boolean().exactOptional(),
              error: z.string().exactOptional(),
              errorType: z.string().exactOptional(),
            })
            .openapi({ required: [] }),
          examples: {
            'Example 1': {
              value: {
                success: false,
                error:
                  "must have required property 'type'\n must have required property 'type'\n must match exactly one schema in oneOf [error-invalid-params]",
                errorType: 'error-invalid-params',
              },
            },
            'Example 2': {
              value: {
                success: false,
                error:
                  "must have required property 'username'\n must have required property 'username'\n must match exactly one schema in oneOf [error-invalid-params]",
                errorType: 'error-invalid-params',
              },
            },
          },
        },
      },
    },
    401: AuthorizationErrorResponse,
  },
})

export const getApiV1IntegrationsGetRoute = createRoute({
  method: 'get',
  path: '/api/v1/integrations.get',
  tags: ['Integration'],
  summary: 'Get Integration',
  description:
    'Get the information of a specific incoming or outgoing integration.\n\nPermissions required:\n* `manage-incoming-integrations`\n* `manage-own-incoming-integrations`\n* `manage-outgoing-integrations`\n* `manage-own-outgoing-integrations`\n\n### Changelog\n| Version      | Description |\n| ---------------- | ------------|\n|2.4.0            | Added       |',
  operationId: 'get-api-v1-integrations-get',
  request: {
    headers: z.object({ 'X-Auth-Token': XAuthTokenParamsSchema, 'X-User-Id': XUserIdParamsSchema }),
    query: z.object({
      integrationId: z
        .string()
        .openapi({
          param: {
            name: 'integrationId',
            in: 'query',
            description: 'The integration ID.',
            required: true,
            schema: { type: 'string' },
            example: 'ByehQjC44FwMeiLbX',
          },
        }),
      createdBy: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'createdBy',
            in: 'query',
            description: 'The user ID who created the integration.',
            schema: { type: 'string' },
            example: 'fn5u45ui34fvb',
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: '',
      content: {
        'application/json': {
          schema: z
            .object({
              integration: z
                .object({
                  _id: z.string().exactOptional(),
                  type: z.string().exactOptional(),
                  username: z.string().exactOptional(),
                  channel: z.array(z.string()).exactOptional(),
                  scriptEnabled: z.boolean().exactOptional(),
                  name: z.string().exactOptional(),
                  enabled: z.boolean().exactOptional(),
                  event: z.string().exactOptional(),
                  urls: z.array(z.string()).exactOptional(),
                  scriptEngine: z.string().exactOptional(),
                  userId: z.string().exactOptional(),
                  _createdAt: z.string().exactOptional(),
                  _createdBy: z
                    .object({
                      _id: z.string().exactOptional(),
                      username: z.string().exactOptional(),
                    })
                    .exactOptional()
                    .openapi({ required: [] }),
                  _updatedAt: z.string().exactOptional(),
                })
                .exactOptional()
                .openapi({ required: [] }),
              success: z.boolean().exactOptional(),
            })
            .openapi({ required: [] }),
          examples: {
            'Success Example': {
              value: {
                integration: {
                  _id: '659ea5e42dd9f928ada3e451',
                  type: 'webhook-outgoing',
                  username: 'test.cat',
                  channel: ['#general'],
                  scriptEnabled: true,
                  name: 'test.cat',
                  enabled: true,
                  event: 'sendMessage',
                  urls: ['https://text2gif.guggy.com/guggify'],
                  scriptEngine: 'isolated-vm',
                  userId: 'CkCPNcvsvCDfmWLqC',
                  _createdAt: '2024-01-10T14:12:52.201Z',
                  _createdBy: { _id: 'CkCPNcvsvCDfmWLqC', username: 'test.cat' },
                  _updatedAt: '2024-01-10T14:12:52.203Z',
                },
                success: true,
              },
            },
          },
        },
      },
    },
    400: {
      description: 'Bad Request',
      content: {
        'application/json': {
          schema: z
            .object({
              success: z.boolean().exactOptional(),
              error: z.string().exactOptional(),
              errorType: z.string().exactOptional(),
            })
            .openapi({ required: [] }),
          examples: {
            'Example 1': {
              value: {
                success: false,
                error: "must have required property 'integrationId' [error-invalid-params]",
                errorType: 'error-invalid-params',
              },
            },
            'Example 2': { value: { success: false, error: 'The integration does not exists.' } },
          },
        },
      },
    },
    401: AuthorizationErrorResponse,
  },
})

export const getApiV1IntegrationsHistoryRoute = createRoute({
  method: 'get',
  path: '/api/v1/integrations.history',
  tags: ['Integration'],
  summary: 'Get Integration History',
  description:
    'Any of the following permissions is required:\n * `manage-incoming-integrations`\n * `manage-own-incoming-integrations`\n * `manage-outgoing-integrations`\n * `manage-own-outgoing-integrations`\n \n The endpoint returns the integration history based on the user permissions.\n ### Changelog\n |Version      | Description | \n | ---------------- | ------------|\n |9.0.0            | Removed the `fields` and `query` parameters.       |\n |1.1.0            | Separate permissions in incoming and outgoing.       |\n |0.53.0            | Added       |',
  operationId: 'get-api-v1-integrations-history',
  request: {
    headers: z.object({ 'X-Auth-Token': XAuthTokenParamsSchema, 'X-User-Id': XUserIdParamsSchema }),
    query: z.object({
      id: z
        .string()
        .openapi({
          param: {
            name: 'id',
            in: 'query',
            description: 'The integration ID.',
            required: true,
            schema: { type: 'string' },
            example: 'nvdQuJQ6tE9HRFBzd',
          },
        }),
      offset: OffsetParamsSchema,
      count: CountParamsSchema,
      sort: SortParamsSchema,
    }),
  },
  responses: {
    200: {
      description: '',
      content: {
        'application/json': {
          schema: z
            .object({
              history: z.array(z.looseObject({})).exactOptional(),
              offset: z.int().exactOptional(),
              items: z.int().exactOptional(),
              total: z.int().exactOptional(),
              success: z.boolean().exactOptional(),
            })
            .openapi({ required: [] }),
          examples: {
            'Example 1': { value: { history: [], offset: 0, items: 0, total: 0, success: true } },
          },
        },
      },
    },
    400: {
      description: 'Bad Request',
      content: {
        'application/json': {
          schema: z
            .object({
              success: z.boolean().exactOptional(),
              error: z.string().exactOptional(),
              errorType: z.string().exactOptional(),
            })
            .openapi({ required: [] }),
          examples: {
            'Example 1': {
              value: {
                success: false,
                error: "must have required property 'id' [error-invalid-params]",
                errorType: 'error-invalid-params',
              },
            },
          },
        },
      },
    },
    401: AuthorizationErrorResponse,
  },
})

export const postApiV1IntegrationsClearHistoryRoute = createRoute({
  method: 'post',
  path: '/api/v1/integrations.clearHistory',
  tags: ['Integration'],
  summary: 'Clear Integration History',
  description:
    "Clear the history of an outgoing <a href='https://docs.rocket.chat/docs/integrations' target='_blank'>integration</a>. \n\nAny of the following permissions is required:\n  * `manage-outgoing-integrations`\n  * `manage-own-outgoing-integrations` (clears history only for integrations created by the calling user)\n\n### Changelog\n|Version      | Description |\n| ---------------- | ------------|\n|8.7.0            | Added       |",
  operationId: 'post-api-v1-integrations.clearHistory',
  request: {
    headers: z.object({ 'X-Auth-Token': XAuthTokenParamsSchema, 'X-User-Id': XUserIdParamsSchema }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              integrationId: z
                .string()
                .openapi({
                  description: 'The ID of the integration whose history you want to clear.',
                  example: 'nvdQuJQ6tE9HRFBzd',
                }),
            })
            .openapi({ required: ['integrationId'] }),
          examples: { Example: { value: { integrationId: 'nvdQuJQ6tE9HRFBzd' } } },
        },
      },
    },
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': {
          schema: z.object({ success: z.boolean().exactOptional() }).openapi({ required: [] }),
          examples: { 'Success Example': { value: { success: true } } },
        },
      },
    },
    400: {
      description: 'Bad Request',
      content: {
        'application/json': {
          schema: z
            .object({
              success: z.boolean().exactOptional(),
              error: z.string().exactOptional(),
              errorType: z.string().exactOptional(),
            })
            .openapi({ required: [] }),
          examples: {
            'Invalid Parameter': {
              value: {
                success: false,
                error: "must have required property 'integrationId' [error-invalid-params]",
                errorType: 'error-invalid-params',
              },
            },
            'Invalid Integration': {
              value: {
                success: false,
                error: 'Invalid integration [error-invalid-integration]',
                errorType: 'error-invalid-integration',
              },
            },
            'Not Authorized for this Integration': {
              value: {
                success: false,
                error: 'Unauthorized [not_authorized]',
                errorType: 'not_authorized',
              },
            },
          },
        },
      },
    },
    401: AuthorizationErrorResponse,
  },
})

export const postApiV1IntegrationsReplayOutgoingRoute = createRoute({
  method: 'post',
  path: '/api/v1/integrations.replayOutgoing',
  tags: ['Integration'],
  summary: 'Replay Outgoing Integration',
  description:
    "Replay a history entry of an outgoing <a href='https://docs.rocket.chat/docs/integrations' target='_blank'>integration</a>, triggering the integration again with the recorded data. \n\nAny of the following permissions is required:\n  * `manage-outgoing-integrations`\n  * `manage-own-outgoing-integrations` (replays only integrations created by the calling user)\n\n### Changelog\n|Version      | Description |\n| ---------------- | ------------|\n|8.7.0            | Added       |",
  operationId: 'post-api-v1-integrations.replayOutgoing',
  request: {
    headers: z.object({ 'X-Auth-Token': XAuthTokenParamsSchema, 'X-User-Id': XUserIdParamsSchema }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              integrationId: z
                .string()
                .openapi({
                  description: 'The ID of the outgoing integration.',
                  example: 'nvdQuJQ6tE9HRFBzd',
                }),
              historyId: z
                .string()
                .openapi({
                  description:
                    "The ID of the integration history to replay. Use the <a href='https://developer.rocket.chat/apidocs/get-integration-history' target='_blank'>Get Integration History</a> endpoint to list history entries.",
                  example: '8G2GfBz3prSampleId',
                }),
            })
            .openapi({ required: ['integrationId', 'historyId'] }),
          examples: {
            Example: {
              value: { integrationId: 'nvdQuJQ6tE9HRFBzd', historyId: '8G2GfBz3prSampleId' },
            },
          },
        },
      },
    },
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': {
          schema: z.object({ success: z.boolean().exactOptional() }).openapi({ required: [] }),
          examples: { Success: { value: { success: true } } },
        },
      },
    },
    400: {
      description: 'Bad Request',
      content: {
        'application/json': {
          schema: z
            .object({
              success: z.boolean().exactOptional(),
              error: z.string().exactOptional(),
              errorType: z.string().exactOptional(),
            })
            .openapi({ required: [] }),
          examples: {
            'Invalid Parameter': {
              value: {
                success: false,
                errorType: 'error-invalid-params',
                error: "must have required property 'historyId'",
              },
            },
            'Invalid Integration': {
              value: {
                success: false,
                error: 'Invalid integration [error-invalid-integration]',
                errorType: 'error-invalid-integration',
                details: { method: 'replayOutgoingIntegration' },
              },
            },
            'Invalid Integration History': {
              value: {
                success: false,
                error: 'Invalid Integration History [error-invalid-integration-history]',
                errorType: 'error-invalid-integration-history',
                details: { method: 'replayOutgoingIntegration' },
              },
            },
          },
        },
      },
    },
    401: AuthorizationErrorResponse,
  },
})

export const getApiV1IntegrationsListRoute = createRoute({
  method: 'get',
  path: '/api/v1/integrations.list',
  tags: ['Integration'],
  summary: 'Get List of Integrations',
  description:
    'Any of the following permissions is required:\n* `manage-incoming-integrations`\n* `manage-own-incoming-integrations`\n* `manage-outgoing-integrations`\n* `manage-own-outgoing-integrations`\n\nThe endpoint returns the integrations based on the user permissions.\n### Changelog\n| Version      | Description | \n| ---------------- | ------------|\n|9.0.0            | Removed the `fields` and `query` parameters.       |\n|7.0.0            | Added `name` and `type` query parameters for filtering.       |\n|1.1.0            | Separate permissions in incoming and outgoing.       |\n|0.49.0            | Added       |',
  operationId: 'get-api-v1-integrations-list',
  request: {
    headers: z.object({ 'X-Auth-Token': XAuthTokenParamsSchema, 'X-User-Id': XUserIdParamsSchema }),
    query: z.object({
      offset: OffsetParamsSchema,
      count: CountParamsSchema,
      name: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'name',
            in: 'query',
            description: 'Filter list by the name of the integration.',
            schema: { type: 'string' },
            example: 'test',
            required: false,
          },
        }),
      type: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'type',
            in: 'query',
            description:
              'Filter list by the type of the integration. It can be `webhook-outgoing` or `webhook-incoming`.',
            schema: { type: 'string' },
            example: 'webhook-incoming',
            required: false,
          },
        }),
      sort: z
        .any()
        .exactOptional()
        .openapi({
          param: {
            schema: {},
            in: 'query',
            name: 'sort',
            description:
              'Sort the results in ascending (`1`) or descending order (`-1`). By default, the results are sorted in descending order of timestamp (`{"ts": -1}`). The additional options for the sort parameter are:\n * `name`: Sort by the integration name. `sort={"name": 1}` or `sort={"name": -1}`\n * `channel`: Sort by target channel. `sort={"channel": 1}` or `sort={"channel": -1}`\n * `_createdAt`: Sort by date of creation. `sort={"_createdAt": 1}` or `sort={"_createdAt": -1}`\n * `_createdBy`: Sort by user who created the integration. `sort={"_createdBy": 1}` or `sort={"_createdBy": -1}`\n * `username`: Sort by the value in the "post-as" username field. `sort={"username": 1}` or `sort={"username": -1}`\n * You can also use multiple options for one sort query. For example, `sort={"_createdAt": -1, "name": 1}`. This sorts by creation date in descending order, then by name in ascending order.',
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: '',
      content: {
        'application/json': {
          schema: z
            .object({
              integrations: z
                .array(
                  z
                    .object({
                      _id: z.string().exactOptional(),
                      enabled: z.boolean().exactOptional(),
                      username: z.string().exactOptional(),
                      alias: z.string().exactOptional(),
                      avatar: z.string().exactOptional(),
                      name: z.string().exactOptional(),
                      triggerWords: z.array(z.string()).exactOptional(),
                      urls: z.array(z.string()).exactOptional(),
                      token: z.string().exactOptional(),
                      script: z.string().exactOptional(),
                      scriptEnabled: z.boolean().exactOptional(),
                      impersonateUser: z.boolean().exactOptional(),
                      scriptCompiled: z.string().exactOptional(),
                      scriptError: z.string().exactOptional(),
                      type: z.string().exactOptional(),
                      userId: z.string().exactOptional(),
                      channel: z.array(z.looseObject({})).exactOptional(),
                      _createdAt: z.string().exactOptional(),
                      _createdBy: z
                        .object({
                          username: z.string().exactOptional(),
                          _id: z.string().exactOptional(),
                        })
                        .exactOptional()
                        .openapi({ required: [] }),
                      _updatedAt: z.string().exactOptional(),
                    })
                    .openapi({ required: [] }),
                )
                .exactOptional(),
              offset: z.int().exactOptional(),
              items: z.int().exactOptional(),
              total: z.int().exactOptional(),
              success: z.boolean().exactOptional(),
            })
            .openapi({ required: [] }),
          examples: {
            'Success Example': {
              value: {
                integrations: [
                  {
                    _id: 'WMQDChpnYTRmFre9h',
                    enabled: true,
                    username: 'rocket.cat',
                    alias: 'Guggy',
                    avatar:
                      'https://image.crisp.im/avatar/website/17651a90-e082-43f6-b308-957cea6e323c/128',
                    name: 'Guggy',
                    triggerWords: ['!guggy', 'guggy', 'gif+'],
                    urls: ['http://text2gif.guggy.com/guggify'],
                    token: 'aobEdbYhXfu5hkeqG',
                    script: '...',
                    scriptEnabled: true,
                    impersonateUser: false,
                    scriptCompiled: '...',
                    scriptError: null,
                    type: 'webhook-outgoing',
                    userId: 'rocket.cat',
                    channel: [],
                    _createdAt: '2017-01-05T17:06:05.660Z',
                    _createdBy: { username: 'graywolf336', _id: 'R4jgcQaQhvvK6K3iY' },
                    _updatedAt: '2017-01-05T17:06:05.660Z',
                  },
                  {
                    _id: '3aazpZ2WzoBP8msi9',
                    type: 'webhook-outgoing',
                    name: 'Testing via REST API',
                    enabled: false,
                    username: 'rocket.cat',
                    urls: ['http://text2gif.guggy.com/guggify'],
                    scriptEnabled: false,
                    userId: 'rocket.cat',
                    channel: [],
                    _createdAt: '2017-01-06T13:23:46.018Z',
                    _createdBy: { username: 'graywolf336', _id: 'R4jgcQaQhvvK6K3iY' },
                    _updatedAt: '2017-01-06T13:23:46.018Z',
                  },
                ],
                offset: 0,
                items: 2,
                total: 2,
                success: true,
              },
            },
          },
        },
      },
    },
    401: AuthorizationErrorResponse,
  },
})

export const putApiV1IntegrationsUpdateRoute = createRoute({
  method: 'put',
  path: '/api/v1/integrations.update',
  tags: ['Integration'],
  summary: 'Update Integration',
  description:
    "Update an existing integration.\n\nFrom Rocket.Chat 9.0.0, scripts are stored and run as written, without Babel. Existing scripts keep their transpiled version until they're edited and saved on Rocket.Chat 9.0.0 or later. See <a href='https://docs.rocket.chat/docs/integrations#script-compatibility' target='_blank'>Script compatibility</a> for the script patterns that must be updated.\n\nPermissions required:\n* `manage-incoming-integrations`\n* `manage-own-incoming-integrations`\n* `manage-outgoing-integrations`\n* `manage-own-outgoing-integrations`\n\n### Changelog\n| Version      | Description | \n| ---------------- | ------------|\n|9.0.0            | Removed `skipTranspile`.       |\n|8.4.0   | Added `skipTranspile` field to opt-out of Babel transpilation |\n|3.4.0            | Added       |",
  operationId: 'put-api-v1-integrations.update',
  request: {
    headers: z.object({ 'X-Auth-Token': XAuthTokenParamsSchema, 'X-User-Id': XUserIdParamsSchema }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              type: z
                .string()
                .openapi({
                  description:
                    'The type of integration. The possible values are:\r\n* `webhook-outgoing`\r\n* `webhook-incoming`',
                }),
              name: z.string().openapi({ description: 'The name of the integration.' }),
              enabled: z
                .boolean()
                .openapi({ description: 'Whether this integration should be enabled or not.' }),
              username: z
                .string()
                .openapi({ description: 'The username to post this the messages as.' }),
              scriptEnabled: z
                .boolean()
                .openapi({ description: 'Whether the script should be enabled.' }),
              channel: z
                .string()
                .openapi({
                  description:
                    'The channel, group, or @username. The values can also be `all_public_channels`, `all_private_groups`, or `all_direct_messages`. Comma separated for more than one.',
                }),
              integrationId: z.string().openapi({ description: 'The integration ID.' }),
              urls: z
                .array(z.string())
                .exactOptional()
                .openapi({
                  description: 'The urls to call whenever this integration is triggered.',
                }),
              event: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    'This field is required only for outgoing integrations. \r\nThe type of event can be any of these: `sendMessage`, `fileUploaded`, `roomArchived`, `roomCreated`, `roomJoined`, `roomLeft`, `userCreated`.',
                }),
              triggerWords: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    'Specific words, separated by commas, which should trigger this integration.',
                }),
              alias: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    'The alias which should be applied to messages when this integration is processed.',
                }),
              avatar: z
                .string()
                .exactOptional()
                .openapi({
                  description: 'The logo to apply to the messages that this integration sends.',
                  example: 'http://res.guggy.com/logo_128.png',
                }),
              emoji: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    'The emoji which should be displayed as the avatar for messages from this integration.',
                  example: ':ghost:',
                }),
              token: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    'If your integration requires a special token from the server (API key), use this parameter.',
                }),
              script: z
                .string()
                .exactOptional()
                .openapi({ description: 'Script triggered when this integration is triggered.' }),
              targetChannel: z
                .string()
                .exactOptional()
                .openapi({ description: 'The channel where messages will be sent to.' }),
              target_url: z
                .string()
                .exactOptional()
                .openapi({ description: 'The target url to set.' }),
            })
            .openapi({
              required: [
                'type',
                'name',
                'enabled',
                'username',
                'scriptEnabled',
                'channel',
                'integrationId',
              ],
            }),
          examples: {
            'Example 1': {
              value: {
                type: 'webhook-incoming',
                name: 'Test',
                enabled: false,
                username: 'rocket.cat',
                scriptEnabled: false,
                channel: '#test',
                integrationId: 'x3tPXa9XXRqW6Xp2M',
              },
            },
          },
        },
      },
    },
  },
  responses: {
    200: {
      description: '',
      content: {
        'application/json': {
          schema: z
            .object({
              integration: z
                .object({
                  _id: z.string().exactOptional(),
                  enabled: z.boolean().exactOptional(),
                  channel: z.array(z.string()).exactOptional(),
                  username: z.string().exactOptional(),
                  name: z.string().exactOptional(),
                  alias: z.string().exactOptional(),
                  avatarUrl: z.string().exactOptional(),
                  emoji: z.string().exactOptional(),
                  scriptEnabled: z.boolean().exactOptional(),
                  script: z.string().exactOptional(),
                  type: z.string().exactOptional(),
                  token: z.string().exactOptional(),
                  userId: z.string().exactOptional(),
                  _createdAt: z.string().exactOptional(),
                  _createdBy: z
                    .object({
                      _id: z.string().exactOptional(),
                      username: z.string().exactOptional(),
                    })
                    .exactOptional()
                    .openapi({ required: [] }),
                  _updatedAt: z.string().exactOptional(),
                  _updatedBy: z
                    .object({
                      _id: z.string().exactOptional(),
                      username: z.string().exactOptional(),
                    })
                    .exactOptional()
                    .openapi({ required: [] }),
                })
                .exactOptional()
                .openapi({ required: [] }),
              success: z.boolean().exactOptional(),
            })
            .openapi({ required: [] }),
          examples: {
            'Success Example': {
              value: {
                integration: {
                  _id: 'x3tPXa9XXRqW6Xp2M',
                  enabled: false,
                  channel: ['#test'],
                  username: 'rodriq',
                  name: 'Test',
                  alias: 'Jim',
                  avatarUrl: '',
                  emoji: ':ghost:',
                  scriptEnabled: false,
                  script:
                    'console.log("MANNNNN ---------------------------------------------------------")',
                  type: 'webhook-incoming',
                  token: 'XYsrkngRr5PBkWhCqJWk5ZfKzQoxSv4QhxkK5trSgJENwbRL',
                  userId: 'd26x6zSkaPSe5gCyy',
                  _createdAt: '2021-10-22T14:48:46.025Z',
                  _createdBy: { _id: 'd26x6zSkaPSe5gCyy', username: 'rod' },
                  _updatedAt: '2021-10-22T16:08:39.843Z',
                  _updatedBy: { _id: 'd26x6zSkaPSe5gCyy', username: 'rod' },
                },
                success: true,
              },
            },
          },
        },
      },
    },
    400: {
      description: 'Bad Request',
      content: {
        'application/json': {
          schema: z
            .object({
              success: z.boolean().exactOptional(),
              error: z.string().exactOptional(),
              errorType: z.string().exactOptional(),
            })
            .openapi({ required: [] }),
          examples: {
            'Example 1': {
              value: {
                success: false,
                error:
                  "must have required property 'type'\n must have required property 'type'\n must match exactly one schema in oneOf [error-invalid-params]",
                errorType: 'error-invalid-params',
              },
            },
            'Example 2': {
              value: {
                success: false,
                error:
                  "must have required property 'integrationId'\n must have required property 'type'\n must match exactly one schema in oneOf [error-invalid-params]",
                errorType: 'error-invalid-params',
              },
            },
            'Example 3': { value: { success: false, error: 'No integration found.' } },
          },
        },
      },
    },
    401: AuthorizationErrorResponse,
  },
})

export const postApiV1IntegrationsRemoveRoute = createRoute({
  method: 'post',
  path: '/api/v1/integrations.remove',
  tags: ['Integration'],
  summary: 'Remove Integration',
  description:
    'Remove an integration from the workspace.\n\nAny of the following permissions is required:\n* `manage-incoming-integrations`\n* `manage-own-incoming-integrations`\n* `manage-outgoing-integrations`\n* `manage-own-outgoing-integrations`\n### Changelog\n| Version      | Description |\n| ---------------- | ------------|\n|1.1.0            | Separate permissions in incoming and outgoing.       |\n|0.49.0            | Added       |',
  operationId: 'post-api-v1-integrations.remove',
  request: {
    headers: z.object({ 'X-Auth-Token': XAuthTokenParamsSchema, 'X-User-Id': XUserIdParamsSchema }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              integrationId: z.string().openapi({ description: 'The integration ID to remove.' }),
              type: z
                .string()
                .openapi({
                  description:
                    'The type of integration. The possible values are:\r\n* `webhook-outgoing`\r\n* `webhook-incoming`',
                }),
            })
            .openapi({ required: ['integrationId', 'type'] }),
          examples: {
            'Example 1': {
              value: { integrationId: 'oNLthAt9RwMw39N2B', type: 'webhook-outgoing' },
            },
          },
        },
      },
    },
  },
  responses: {
    200: {
      description: '',
      content: {
        'application/json': {
          schema: z
            .object({
              integration: z
                .object({
                  type: z.string().exactOptional(),
                  username: z.string().exactOptional(),
                  channel: z.boolean().exactOptional(),
                  scriptEnabled: z.string().exactOptional(),
                  name: z.string().exactOptional(),
                  enabled: z.string().exactOptional(),
                })
                .exactOptional()
                .openapi({ required: [] }),
            })
            .openapi({ required: [] }),
          examples: {
            'Incoming integration example': {
              value: {
                integration: {
                  type: 'webhook-incoming',
                  username: 'rocket.cat',
                  channel: false,
                  scriptEnabled: 'sendMessage',
                  name: 'sendMessage',
                  enabled: 'sendMessage',
                },
              },
            },
            'Outgoing integration example': {
              value: {
                integration: {
                  _id: 'oNLthAt9RwMw39N2B',
                  type: 'webhook-outgoing',
                  name: 'Testing via REST API',
                  enabled: false,
                  username: 'rocket.cat',
                  urls: ['http://text2gif.guggy.com/guggify'],
                  scriptEnabled: false,
                  userId: 'rocket.cat',
                  channel: [],
                  _createdAt: '2017-01-06T13:42:14.143Z',
                  _createdBy: { username: 'graywolf336', _id: 'R4jgcQaQhvvK6K3iY' },
                  _updatedAt: '2017-01-06T13:42:14.144Z',
                },
                success: true,
              },
            },
          },
        },
      },
    },
    400: {
      description: 'Bad Request',
      content: {
        'application/json': {
          schema: z
            .object({
              success: z.boolean().exactOptional(),
              error: z.string().exactOptional(),
              errorType: z.string().exactOptional(),
            })
            .openapi({ required: [] }),
          examples: {
            'Example 1': {
              value: {
                success: false,
                error:
                  "must have required property 'type'\n must have required property 'type'\n must have required property 'type'\n must match exactly one schema in oneOf [error-invalid-params]",
                errorType: 'error-invalid-params',
              },
            },
            'Example 2': {
              value: {
                success: false,
                error:
                  "must have required property 'integrationId'\n must have required property 'target_url'\n must have required property 'integrationId'\n must match exactly one schema in oneOf [error-invalid-params]",
                errorType: 'error-invalid-params',
              },
            },
            'Example 3': { value: { success: false, error: 'No integration found.' } },
          },
        },
      },
    },
    401: AuthorizationErrorResponse,
  },
})

export const postApiV1OauthAppsCreateRoute = createRoute({
  method: 'post',
  path: '/api/v1/oauth-apps.create',
  tags: ['OAuth Apps'],
  summary: 'Create OAuth App',
  description:
    "Create an app to log in to third-party applications. For details, you can refer to the <a href='https://docs.rocket.chat/docs/third-party-login' target='_blank'> Third-party login user guide</a>. Permission required: `manage-oauth-apps`'",
  operationId: 'post-api-v1-oauth-apps.create',
  request: {
    headers: z.object({ 'X-Auth-Token': XAuthTokenParamsSchema, 'X-User-Id': XUserIdParamsSchema }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              name: z.string().openapi({ description: 'Name of the app that you want to create.' }),
              redirectUri: z
                .string()
                .openapi({ description: 'The URL to redirect the OAuth app.' }),
              active: z
                .boolean()
                .openapi({
                  description:
                    'Whether the app will be active or not. Enter a boolean value, `true` or `false`.',
                }),
            })
            .openapi({ required: ['name', 'redirectUri', 'active'] }),
          examples: {
            'Example 1': {
              value: { name: 'test-oauth-app', redirectUri: 'https://testuri.com', active: true },
            },
          },
        },
      },
    },
  },
  responses: {
    200: {
      description: '',
      content: {
        'application/json': {
          schema: z
            .object({
              application: z
                .object({
                  name: z.string().exactOptional(),
                  redirectUri: z.string().exactOptional(),
                  active: z.boolean().exactOptional(),
                  clientId: z.string().exactOptional(),
                  clientSecret: z.string().exactOptional(),
                  _createdAt: z.string().exactOptional(),
                  _updatedAt: z.string().exactOptional(),
                  _createdBy: z
                    .object({
                      _id: z.string().exactOptional(),
                      username: z.string().exactOptional(),
                    })
                    .exactOptional()
                    .openapi({ required: [] }),
                  _id: z.string().exactOptional(),
                })
                .exactOptional()
                .openapi({ required: [] }),
              success: z.boolean().exactOptional(),
            })
            .openapi({ required: [] }),
          examples: {
            'Example 1': {
              value: {
                application: {
                  name: 'test-oauth-app',
                  redirectUri: 'https://testuri.com',
                  active: true,
                  clientId: 'bN9D5TjY8Cv8GqWfE',
                  clientSecret: 'l3HAl0lSr2VaTYZVED6EabyhNzovS8Je2JYmbjNT-V1',
                  _createdAt: '2024-01-17T13:30:41.521Z',
                  _updatedAt: '2024-01-17T13:30:41.521Z',
                  _createdBy: { _id: 'JFTcMhEAFbNPfnp49', username: 'math.bar' },
                  _id: '65a7d68142a7e12453052d56',
                },
                success: true,
              },
            },
          },
        },
      },
    },
    400: {
      description: 'Bad Request',
      content: {
        'application/json': {
          schema: z
            .object({
              success: z.boolean().exactOptional(),
              error: z.string().exactOptional(),
              errorType: z.string().exactOptional(),
            })
            .openapi({ required: [] }),
          examples: {
            'Example 1': {
              value: {
                success: false,
                error: "must have required property 'name' [error-invalid-params]",
                errorType: 'error-invalid-params',
              },
            },
            'Example 2': {
              value: {
                success: false,
                error: "must have required property 'active' [error-invalid-params]",
                errorType: 'error-invalid-params',
              },
            },
            'Example 3': {
              value: {
                success: false,
                error: "must have required property 'redirectUri' [error-invalid-params]",
                errorType: 'error-invalid-params',
              },
            },
          },
        },
      },
    },
    401: AuthorizationErrorResponse,
  },
})

export const postApiV1OauthAppsUpdateRoute = createRoute({
  method: 'post',
  path: '/api/v1/oauth-apps.update',
  tags: ['OAuth Apps'],
  summary: 'Update OAuth App',
  description: 'Update an existing app. Permission required: `manage-oauth-apps`',
  operationId: 'post-api-v1-oauth-apps.update',
  request: {
    headers: z.object({ 'X-Auth-Token': XAuthTokenParamsSchema, 'X-User-Id': XUserIdParamsSchema }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              name: z.string().openapi({ description: 'Name of the app that you want to update.' }),
              redirectUri: z
                .string()
                .openapi({ description: 'The URL to redirect the OAuth app.' }),
              active: z
                .boolean()
                .openapi({
                  description:
                    'Whether the app will be active or not. Enter a boolean value, `true` or `false`.',
                }),
              appId: z
                .string()
                .openapi({
                  description:
                    "The app ID. The app ID. This is created when you create an app. You can use the <a href='https://developer.rocket.chat/apidocs/get-list-of-oauth-apps' target='_blank'>Get List of OAuth Apps</a> endpoint to get the app ID.",
                }),
            })
            .openapi({ required: ['name', 'redirectUri', 'active', 'appId'] }),
          examples: {
            'Example 1': {
              value: { name: 'test-oauth-app', redirectUri: 'https://testuri.com', active: true },
            },
          },
        },
      },
    },
  },
  responses: {
    200: {
      description: '',
      content: {
        'application/json': {
          schema: z
            .object({
              _id: z.string().exactOptional(),
              name: z.string().exactOptional(),
              redirectUri: z.string().exactOptional(),
              active: z.boolean().exactOptional(),
              clientId: z.string().exactOptional(),
              clientSecret: z.string().exactOptional(),
              _createdAt: z.string().exactOptional(),
              _updatedAt: z.string().exactOptional(),
              _createdBy: z
                .object({ _id: z.string().exactOptional(), username: z.string().exactOptional() })
                .exactOptional()
                .openapi({ required: [] }),
              _updatedBy: z
                .object({ _id: z.string().exactOptional(), username: z.string().exactOptional() })
                .exactOptional()
                .openapi({ required: [] }),
              success: z.boolean().exactOptional(),
            })
            .openapi({ required: [] }),
          examples: {
            'Example 1': {
              value: {
                _id: '65a7d77142a7e12453052d59',
                name: 'test-oauth-app2',
                redirectUri: 'https://testuri2.com',
                active: false,
                clientId: 'fxHAgLRjP3RswMe67',
                clientSecret: 'QwIAYE1_8M02p-Js8SHZyTPg7HpJm-1ZtbjuSp8bXpP',
                _createdAt: '2024-01-17T13:34:41.445Z',
                _updatedAt: '2024-01-17T13:37:16.966Z',
                _createdBy: { _id: 'JFTcMhEAFbNPfnp49', username: 'math.bar' },
                _updatedBy: { _id: 'JFTcMhEAFbNPfnp49', username: 'math.bar' },
                success: true,
              },
            },
          },
        },
      },
    },
    400: {
      description: 'Bad Request',
      content: {
        'application/json': {
          schema: z
            .object({
              success: z.boolean().exactOptional(),
              error: z.string().exactOptional(),
              errorType: z.string().exactOptional(),
            })
            .openapi({ required: [] }),
          examples: {
            'Example 1': {
              value: {
                success: false,
                error: "must have required property 'name' [error-invalid-params]",
                errorType: 'error-invalid-params',
              },
            },
            'Example 2': {
              value: {
                success: false,
                error: "must have required property 'active' [error-invalid-params]",
                errorType: 'error-invalid-params',
              },
            },
            'Example 3': {
              value: {
                success: false,
                error: "must have required property 'redirectUri' [error-invalid-params]",
                errorType: 'error-invalid-params',
              },
            },
            'Example 4': {
              value: {
                success: false,
                error: "must have required property 'appId' [error-invalid-params]",
                errorType: 'error-invalid-params',
              },
            },
          },
        },
      },
    },
    401: AuthorizationErrorResponse,
  },
})

export const getApiV1OauthAppsListRoute = createRoute({
  method: 'get',
  path: '/api/v1/oauth-apps.list',
  tags: ['OAuth Apps'],
  summary: 'Get List of OAuth Apps',
  description:
    'Use this endpoint to get the list of apps. Permission required: `manage-oauth-apps`\n### Changelog\n| Version      | Description |\n| ---------------- | ------------|\n|2.4.0            | Added       |',
  operationId: 'get-api-v1-oauth-apps.list',
  request: {
    headers: z.object({ 'X-Auth-Token': XAuthTokenParamsSchema, 'X-User-Id': XUserIdParamsSchema }),
  },
  responses: {
    200: {
      description: '',
      content: {
        'application/json': {
          schema: z
            .object({
              oauthApps: z
                .array(
                  z
                    .object({
                      _id: z.string().exactOptional(),
                      name: z.string().exactOptional(),
                      active: z.boolean().exactOptional(),
                      clientId: z.string().exactOptional(),
                      clientSecret: z.string().exactOptional(),
                      redirectUri: z.string().exactOptional(),
                      _createdAt: z.string().exactOptional(),
                      _createdBy: z
                        .object({
                          _id: z.string().exactOptional(),
                          username: z.string().exactOptional(),
                        })
                        .exactOptional()
                        .openapi({ required: [] }),
                      _updatedAt: z.string().exactOptional(),
                    })
                    .openapi({ required: [] }),
                )
                .exactOptional(),
              success: z.boolean().exactOptional(),
            })
            .openapi({ required: [] }),
          examples: {
            'Success Example': {
              value: {
                oauthApps: [
                  {
                    _id: 'zapier',
                    name: 'Zapier',
                    active: true,
                    clientId: 'zapier',
                    clientSecret: 'RTK6TlndaCIolhQhZ7_KHIGOKj41RnlaOq_o-7JKwLr',
                    redirectUri: 'https://zapier.com/dashboard/auth/oauth/return/RocketChatDevAPI/',
                    _createdAt: '2019-10-17T22:55:32.787Z',
                    _createdBy: { _id: 'system', username: 'system' },
                    _updatedAt: '2019-10-17T22:55:32.787Z',
                  },
                ],
                success: true,
              },
            },
          },
        },
      },
    },
    401: AuthorizationErrorResponse,
  },
})

export const getApiV1OauthAppsGetRoute = createRoute({
  method: 'get',
  path: '/api/v1/oauth-apps.get',
  tags: ['OAuth Apps'],
  summary: 'Get OAuth App',
  description:
    'Retrieves an OAuth app by ID or client ID.\n\nPermission required: `manage-oauth-apps`. The endpoint can be accessed even without this permission, but sensitive information (such as client secrets) will be filtered out.\n\n### Changelog\n| Version      | Description |\n| ---------------- | ------------|\n|2.4.0            | Added       |',
  operationId: 'get-api-v1-oauth-apps.get',
  request: {
    headers: z.object({ 'X-Auth-Token': XAuthTokenParamsSchema, 'X-User-Id': XUserIdParamsSchema }),
    query: z.object({
      clientId: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'clientId',
            in: 'query',
            description: 'The client ID. This value is required if `_id` is not used.',
            schema: { type: 'string' },
            example: 'nkn8jk67b8b99b78',
            required: false,
          },
        }),
      _id: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: '_id',
            in: 'query',
            description: 'The app ID. This value is required if `clientId` is not used.',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: '',
      content: {
        'application/json': {
          schema: z
            .object({
              oauthApp: z
                .object({
                  _id: z.string().exactOptional(),
                  name: z.string().exactOptional(),
                  active: z.boolean().exactOptional(),
                  clientId: z.string().exactOptional(),
                  clientSecret: z.string().exactOptional(),
                  redirectUri: z.string().exactOptional(),
                  _createdAt: z.string().exactOptional(),
                  _createdBy: z
                    .object({
                      _id: z.string().exactOptional(),
                      username: z.string().exactOptional(),
                    })
                    .exactOptional()
                    .openapi({ required: [] }),
                  _updatedAt: z.string().exactOptional(),
                })
                .exactOptional()
                .openapi({ required: [] }),
              success: z.boolean().exactOptional(),
            })
            .openapi({ required: [] }),
          examples: {
            'Example 1': {
              value: {
                oauthApp: {
                  _id: 'zapier',
                  name: 'Zapier',
                  active: true,
                  clientId: 'zapier',
                  clientSecret: 'RTK6TlndaCIolhQhZ7_KHIGOKj41RnlaOq_o-7JKwLr',
                  redirectUri: 'https://zapier.com/dashboard/auth/oauth/return/RocketChatDevAPI/',
                  _createdAt: '2019-10-17T22:55:32.787Z',
                  _createdBy: { _id: 'system', username: 'system' },
                  _updatedAt: '2019-10-17T22:55:32.787Z',
                },
                success: true,
              },
            },
          },
        },
      },
    },
    400: {
      description: 'Bad Request',
      content: {
        'application/json': {
          schema: z
            .object({
              success: z.boolean().exactOptional(),
              error: z.string().exactOptional(),
              errorType: z.string().exactOptional(),
            })
            .openapi({ required: [] }),
          examples: {
            'Example 1': {
              value: {
                success: false,
                error:
                  "must have required property '_id'\n must have required property 'clientId'\n must have required property 'appId'\n must match exactly one schema in oneOf [error-invalid-params]",
                errorType: 'error-invalid-params',
              },
            },
            'Example 2': { value: { success: false, error: 'OAuth app not found.' } },
          },
        },
      },
    },
    401: AuthorizationErrorResponse,
  },
})

export const postApiV1OauthAppsDeleteRoute = createRoute({
  method: 'post',
  path: '/api/v1/oauth-apps.delete',
  tags: ['OAuth Apps'],
  summary: 'Delete OAuth App',
  description: 'Permission required: `manage-oauth-apps`',
  operationId: 'post-api-v1-oauth-apps.delete',
  request: {
    headers: z.object({ 'X-Auth-Token': XAuthTokenParamsSchema, 'X-User-Id': XUserIdParamsSchema }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              appId: z
                .string()
                .openapi({
                  description: 'The OAuth app ID that you want to delete.',
                  example: 'F7cWZ6mtSyxbCe3RJ',
                }),
            })
            .openapi({ required: ['appId'] }),
        },
      },
    },
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': {
          schema: z.object({ success: z.boolean().exactOptional() }).openapi({ required: [] }),
          examples: { Success: { value: { success: true } } },
        },
      },
    },
    400: {
      description: 'Bad Request',
      content: {
        'application/json': {
          schema: z
            .object({
              success: z.boolean().exactOptional(),
              error: z.string().exactOptional(),
              errorType: z.string().exactOptional(),
            })
            .openapi({ required: [] }),
          examples: {
            'Example 1': {
              value: {
                success: false,
                error: "must have required property 'appId' [error-invalid-params]",
                errorType: 'error-invalid-params',
              },
            },
            'Example 2': {
              value: {
                success: false,
                error: 'Application not found [error-application-not-found]',
                errorType: 'error-application-not-found',
                details: { method: 'deleteOAuthApp' },
              },
            },
          },
        },
      },
    },
    401: AuthorizationErrorResponse,
  },
})
