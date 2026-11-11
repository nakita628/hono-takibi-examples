import { createRoute, z } from '@hono/zod-openapi'

const TrueSuccessResponse = {
  description: 'OK',
  content: {
    'application/json': {
      schema: z.object({ success: z.boolean().exactOptional() }).openapi({ required: [] }),
      examples: { Success: { value: { success: true } } },
    },
  },
}

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

const PermissionErrorResponse = {
  description: 'Forbidden',
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
        'Permission Error': {
          value: {
            success: false,
            error: 'User does not have the permissions required for this action',
            errorType: 'error-forbidden',
          },
        },
      },
    },
  },
}

const StartendErrorResponse = {
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
            error: "must have required property 'start' [error-invalid-params]",
            errorType: 'error-invalid-params',
          },
        },
        'Example 2': {
          value: { success: false, error: 'The "start" query parameter must be a valid date.' },
        },
        'Example 3': {
          value: {
            success: false,
            error: "must have required property 'end' [error-invalid-params]",
            errorType: 'error-invalid-params',
          },
        },
        'Example 4': {
          value: { success: false, error: 'The "end" query parameter must be a valid date.' },
        },
      },
    },
  },
}

const StartParamsSchema = z
  .string()
  .openapi({
    param: {
      name: 'start',
      in: 'query',
      description: 'The start date.',
      required: true,
      schema: { type: 'string' },
      example: '2020-09-10T23:59:22.345Z',
    },
  })

const EndParamsSchema = z
  .string()
  .openapi({
    param: {
      name: 'end',
      in: 'query',
      description: 'The end date.',
      required: true,
      schema: { type: 'string' },
      example: '2020-09-09T00:11:22.345Z',
    },
  })

const DepartmentIdParamsSchema = z
  .string()
  .exactOptional()
  .openapi({
    param: {
      name: 'departmentId',
      in: 'query',
      description: 'The department ID. ',
      required: false,
      schema: { type: 'string' },
    },
  })

const AuthTokenParamsSchema = z
  .string()
  .openapi({
    param: {
      name: 'X-Auth-Token',
      in: 'header',
      description: 'The `authToken` of the authenticated user.',
      required: true,
      schema: { type: 'string' },
      example: 'RScctEHSmLGZGywfIhWyRpyofhKOiMoUIpimhvheU3f',
    },
  })

const UserIdParamsSchema = z
  .string()
  .openapi({
    param: {
      name: 'X-User-Id',
      in: 'header',
      description: 'The `userId` of the authenticated user.',
      required: true,
      schema: { type: 'string' },
      example: 'rbAXPnMktTFbNpwtJ',
    },
  })

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
      required: false,
      schema: { type: 'integer' },
      example: 50,
      description:
        'Number of items to "skip" in the query, i.e. requests return count items, skipping the first offset items. Refer to the [official documentation](https://developer.rocket.chat/apidocs/query-parameters#pagination) to learn more.',
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
      required: false,
      schema: { type: 'integer' },
      example: 25,
      description:
        'The number of items to return. Refer to the [official documentation](https://developer.rocket.chat/apidocs/query-parameters#pagination) to learn more.',
    },
  })

const SortParamsSchema = ((schema) =>
  z.union([schema, z.preprocess((val) => (val === 'null' ? null : val), schema)]))(z.any())
  .exactOptional()
  .openapi({
    param: {
      name: 'sort',
      in: 'query',
      required: false,
      schema: { format: 'object' },
      description:
        'List of fields to order by, and in which direction. JSON object, with properties listed in desired order, with values of 1 for ascending, or -1 for descending. For example, sort = `{"value": -1, "_id": 1}`. Refer to the [official documentation](https://developer.rocket.chat/apidocs/query-parameters#pagination) to learn more.',
    },
  })

export const getApiV1LivechatUsersTypeRoute = createRoute({
  method: 'get',
  path: '/api/v1/livechat/users/{type}',
  tags: ['Omnichannel Users'],
  summary: 'Get List of Agents or Managers',
  description:
    '* If the `type` is `manager`, permission required: `view-livechat-manager`.\n* If the `type` is `agent`, permission required: at least one of `transfer-livechat-guest` or `edit-omnichannel-contact`.\n\n### Changelog\n| Version      | Description |\n| ---------------- | ------------|\n|2.2.0             | Added support to pagination       |\n|0.42.0            | Added       |',
  operationId: 'get-api-v1-livechat-users-type',
  request: {
    headers: z.object({ 'X-Auth-Token': AuthTokenParamsSchema, 'X-User-Id': UserIdParamsSchema }),
    query: z.object({
      offset: OffsetParamsSchema,
      count: CountParamsSchema,
      sort: SortParamsSchema,
      onlyAvailable: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            name: 'onlyAvailable',
            in: 'query',
            schema: { type: 'boolean' },
            description:
              'When set to `true`, it only list agents whose [livechat status](https://docs.rocket.chat/docs/omnichannel-users#edit-agent) (`statusLivechat`) is `available`.',
            example: true,
            required: false,
          },
        }),
      showIdleAgents: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            name: 'showIdleAgents',
            in: 'query',
            schema: { type: 'boolean' },
            description:
              'When set to `false`, offline agents will be excluded from the response. This filter does not apply to bots. All bot agents will be returned in the response.',
            example: false,
            required: false,
          },
        }),
      excludeId: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'excludeId',
            in: 'query',
            schema: { type: 'string' },
            example: 'Ahgfwk9sasYEsMjwX',
            description: 'The ID of a specific agent to exclude from the list.',
            required: false,
          },
        }),
      text: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'text',
            in: 'query',
            schema: { type: 'string' },
            description: 'Enter the text you want to filter the search result with.',
            example: true,
            required: false,
          },
        }),
    }),
    params: z.object({
      type: z
        .string()
        .openapi({
          param: {
            name: 'type',
            in: 'path',
            description:
              'The type of user that you want to register. The value can either be `agent` or `manager`.',
            required: true,
            schema: { type: 'string' },
            example: 'agent',
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
              users: z
                .array(
                  z
                    .object({
                      _id: z.string().exactOptional(),
                      username: z.string().exactOptional(),
                      status: z.string().exactOptional(),
                      statusLivechat: z.string().exactOptional(),
                      name: z.string().exactOptional(),
                      emails: z
                        .array(
                          z
                            .object({
                              address: z.string().exactOptional(),
                              verified: z.boolean().exactOptional(),
                            })
                            .openapi({ required: [] }),
                        )
                        .exactOptional(),
                      livechat: z.string().exactOptional(),
                      departments: z.array(z.string()).exactOptional(),
                    })
                    .openapi({ required: [] }),
                )
                .exactOptional(),
            })
            .openapi({ required: [] }),
          examples: {
            'Success Example': {
              value: {
                users: [
                  {
                    _id: 'XLzGrYF9L2miSpPHP',
                    username: 'dialog.bot',
                    status: 'offline',
                    statusLivechat: 'not-available',
                    name: 'Dialog Bot',
                    emails: [{ address: 'dialog.bot@test.com', verified: true }],
                    livechat: null,
                    departments: [],
                  },
                  {
                    _id: 'rbAXPnMktTFbNpwtJ',
                    username: 'john.doe',
                    status: 'offline',
                    statusLivechat: 'available',
                    name: 'John Doe',
                    emails: [{ address: 'john.doe@gmail.com', verified: true }],
                    livechat: { maxNumberSimultaneousChat: '' },
                    departments: ['64181a0728384134ed600dcc'],
                  },
                  {
                    _id: 'hFDuCPam7sWziWFYa',
                    username: 'hookdeck.write',
                    status: 'offline',
                    statusLivechat: 'not-available',
                    name: 'Hookdeck Write',
                    emails: [{ address: 'hookdeckwrite@gmail.com', verified: true }],
                    livechat: null,
                    departments: [],
                  },
                  {
                    _id: 'stjxrXYBWy3EcDugH',
                    username: 'rocket.agent',
                    status: 'offline',
                    statusLivechat: 'not-available',
                    name: 'Rocket Agent',
                    emails: [{ address: 'rocket.agent@rocket.chat', verified: false }],
                    livechat: { maxNumberSimultaneousChat: '' },
                    departments: ['64181a0728384134ed600dcc'],
                  },
                ],
              },
            },
          },
        },
      },
    },
    401: AuthorizationErrorResponse,
    403: PermissionErrorResponse,
  },
})

export const postApiV1LivechatUsersTypeRoute = createRoute({
  method: 'post',
  path: '/api/v1/livechat/users/{type}',
  tags: ['Omnichannel Users'],
  summary: 'Register New Agent or Manager',
  description:
    "Register a new <a href='https://docs.rocket.chat/use-rocket.chat/omnichannel/agents' target='_blank'>agent</a> or <a href='https://docs.rocket.chat/use-rocket.chat/omnichannel/managers' target='_blank'>manager</a>.\nPermission required:\n* If the `type` is `agent`: `manage-livechat-agents`.\n* If the `type` is `manager`: `manage-livechat-managers`.\n\nRequests without the required permission return a `403` response.\n\n### Changelog\n| Version      | Description |\n| ------------ | ------------|\n|8.9.0         | Required `manage-livechat-agents` for agents and `manage-livechat-managers` for managers. |\n|0.42.0        | Added       |",
  operationId: 'post-api-v1-livechat-users-:type',
  request: {
    headers: z.object({ 'X-Auth-Token': AuthTokenParamsSchema, 'X-User-Id': UserIdParamsSchema }),
    params: z.object({
      type: z
        .string()
        .openapi({
          param: {
            name: 'type',
            in: 'path',
            description:
              'The type of user that you want to register. The value can either be `agent` or `manager`.',
            required: true,
            schema: { type: 'string' },
            example: 'agent',
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              username: z
                .string()
                .openapi({ description: 'The user name that you want to register.' }),
            })
            .openapi({ required: ['username'] }),
          examples: { 'Example 1': { value: { username: 'john.doe' } } },
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
            .object({
              user: z
                .object({ _id: z.string().exactOptional(), username: z.string().exactOptional() })
                .exactOptional()
                .openapi({ required: [] }),
              success: z.boolean().exactOptional(),
            })
            .openapi({ required: [] }),
          examples: {
            'Success Example': {
              value: { user: { _id: 'SQafHvoFPuB57NmBD', username: 'john.doe' }, success: true },
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
                error: "must have required property 'username' [error-invalid-params]",
                errorType: 'error-invalid-params',
              },
            },
          },
        },
      },
    },
    401: AuthorizationErrorResponse,
    403: {
      description: 'Forbidden',
      content: {
        'application/json': {
          schema: z
            .object({ success: z.boolean().exactOptional(), error: z.string().exactOptional() })
            .openapi({ required: [] }),
          examples: { 'Example 1': { value: { success: false, error: 'forbidden' } } },
        },
      },
    },
  },
})

export const getApiV1LivechatUsersTypeIdRoute = createRoute({
  method: 'get',
  path: '/api/v1/livechat/users/{type}/{_id}',
  tags: ['Omnichannel Users'],
  summary: 'Get Agent or Manager Information',
  description:
    'Get information about a particular agent or a manager.\nPermission required: `view-livechat-manager`\n\n### Changelog\n| Version      | Description |\n| ---------------- | ------------|\n|0.42.0            | Added       |',
  operationId: 'get-api-v1-livechat-users-type-_id',
  request: {
    headers: z.object({ 'X-Auth-Token': AuthTokenParamsSchema, 'X-User-Id': UserIdParamsSchema }),
    params: z.object({
      type: z
        .string()
        .openapi({
          param: {
            name: 'type',
            in: 'path',
            description: 'The type of user. The value can either be `agent` or `manager`.',
            required: true,
            schema: { type: 'string' },
          },
        }),
      _id: z
        .string()
        .openapi({
          param: {
            name: '_id',
            in: 'path',
            description: 'The user ID.',
            required: true,
            schema: { type: 'string' },
            example: 'SQafHvoFPuB57NmBD',
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
              user: z
                .object({
                  _id: z.string().exactOptional(),
                  username: z.string().exactOptional(),
                  name: z.string().exactOptional(),
                  status: z.string().exactOptional(),
                  statusLivechat: z.string().exactOptional(),
                  emails: z
                    .array(
                      z
                        .object({
                          address: z.string().exactOptional(),
                          verified: z.string().exactOptional(),
                        })
                        .openapi({ required: [] }),
                    )
                    .exactOptional(),
                  livechat: z
                    .object({ maxNumberSimultaneousChat: z.string().exactOptional() })
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
                user: {
                  _id: 'SQafHvoFPuB57NmBD',
                  username: 'john.doe',
                  name: 'John Doe',
                  status: 'offline',
                  statusLivechat: 'available',
                  emails: [{ address: 'john.doe@test.com', verified: 'true' }],
                  livechat: { maxNumberSimultaneousChat: '' },
                },
                success: true,
              },
            },
          },
        },
      },
    },
    401: AuthorizationErrorResponse,
    403: PermissionErrorResponse,
  },
})

export const deleteApiV1LivechatUsersTypeIdRoute = createRoute({
  method: 'delete',
  path: '/api/v1/livechat/users/{type}/{_id}',
  tags: ['Omnichannel Users'],
  summary: 'Remove Agent or Manager',
  description:
    'Remove a user as an agent or a manager.\nPermission required:\n* If the `type` is `agent`: `manage-livechat-agents`.\n* If the `type` is `manager`: `manage-livechat-managers`.\n\nRequests without the required permission return a `403` response.\n\n### Changelog\n| Version      | Description |\n| ---------------- | ------------|\n|8.9.0             | Required `manage-livechat-agents` for agents and `manage-livechat-managers` for managers. |\n|0.42.0            | Added       |',
  operationId: 'delete-api-v1-livechat-users-type-_id',
  request: {
    headers: z.object({ 'X-Auth-Token': AuthTokenParamsSchema, 'X-User-Id': UserIdParamsSchema }),
    params: z.object({
      type: z
        .string()
        .openapi({
          param: {
            name: 'type',
            in: 'path',
            description: 'The type of user. The value can either be `agent` or `manager`.',
            required: true,
            schema: { type: 'string' },
          },
        }),
      _id: z
        .string()
        .openapi({
          param: {
            name: '_id',
            in: 'path',
            description: 'The user ID.',
            required: true,
            schema: { type: 'string' },
            example: 'SQafHvoFPuB57NmBD',
          },
        }),
    }),
  },
  responses: {
    200: TrueSuccessResponse,
    401: AuthorizationErrorResponse,
    403: {
      description: 'Forbidden',
      content: {
        'application/json': {
          schema: z
            .object({ success: z.boolean().exactOptional(), error: z.string().exactOptional() })
            .openapi({ required: [] }),
          examples: { 'Example 1': { value: { success: false, error: 'forbidden' } } },
        },
      },
    },
  },
})

export const getApiV1LivechatAgentInfoRidTokenRoute = createRoute({
  method: 'get',
  path: '/api/v1/livechat/agent.info/{rid}/{token}',
  tags: ['Omnichannel Agents'],
  summary: 'Get Agent Information',
  description:
    'Get the Livechat agent data according to the path variables. To get the `rid` and `token` values, call the <a href="https://developer.rocket.chat/apidocs/get-rooms" target="_blank">Get Rooms</a> endpoint to retrieve the details of all rooms.',
  operationId: 'get-api-v1-livechat-agent',
  request: {
    params: z.object({
      rid: z
        .string()
        .openapi({
          param: {
            name: 'rid',
            in: 'path',
            description: 'The room ID.',
            required: true,
            schema: { type: 'string' },
            example: 'zRAeTszXor8CCPceB',
          },
        }),
      token: z
        .string()
        .openapi({
          param: {
            name: 'token',
            in: 'path',
            description: 'The visitor token.',
            required: true,
            schema: { type: 'string' },
            example: 'iNKE8a6k6cjbqWhWd',
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
              agent: z
                .object({
                  _id: z.string().exactOptional(),
                  emails: z
                    .array(
                      z
                        .object({
                          address: z.string().exactOptional(),
                          verified: z.boolean().exactOptional(),
                        })
                        .openapi({ required: [] }),
                    )
                    .exactOptional(),
                  status: z.string().exactOptional(),
                  name: z.string().exactOptional(),
                  username: z.string().exactOptional(),
                  livechat: z
                    .object({ maxNumberSimultaneousChat: z.string().exactOptional() })
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
                agent: {
                  _id: 'XycfA5CetCPuEjqxw',
                  emails: [{ address: 'agent@rocket.chat', verified: true }],
                  status: 'online',
                  name: 'testAgent',
                  username: 'test.agent',
                  livechat: { maxNumberSimultaneousChat: '5' },
                },
                success: true,
              },
            },
          },
        },
      },
    },
  },
})

export const getApiV1LivechatAgentNextTokenRoute = createRoute({
  method: 'get',
  path: '/api/v1/livechat/agent.next/{token}',
  tags: ['Omnichannel Agents'],
  summary: 'Get Next Agent Information',
  description:
    'Get information about the next available agent for an incoming conversation. This endpoint returns the available agents who have not been assigned to any chat yet. To get the `token` value, call the <a href="https://developer.rocket.chat/apidocs/get-rooms" target="_blank">Get Rooms</a> endpoint to retrieve the details of all rooms.',
  operationId: 'get-api-v1-livechat-agent.next',
  request: {
    params: z.object({
      token: z
        .string()
        .openapi({
          param: {
            name: 'token',
            in: 'path',
            description: 'The visitor token.',
            required: true,
            schema: { type: 'string' },
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
              agent: z
                .object({
                  _id: z.string().exactOptional(),
                  emails: z
                    .array(
                      z
                        .object({
                          address: z.string().exactOptional(),
                          verified: z.boolean().exactOptional(),
                        })
                        .openapi({ required: [] }),
                    )
                    .exactOptional(),
                  name: z.string().exactOptional(),
                  username: z.string().exactOptional(),
                })
                .exactOptional()
                .openapi({ required: [] }),
              success: z.boolean().exactOptional(),
            })
            .openapi({ required: [] }),
          examples: {
            'Success Example': {
              value: {
                agent: {
                  _id: '7Gm3PoFCJWTCJ68XR',
                  emails: [{ address: 'agent@rocket.chat', verified: true }],
                  name: 'Livechat Agent',
                  username: 'livechat.agent',
                },
                success: true,
              },
            },
          },
        },
      },
    },
  },
})

export const postApiV1LivechatAgentsSaveInfoRoute = createRoute({
  method: 'post',
  path: '/api/v1/livechat/agents.saveInfo',
  tags: ['Omnichannel Agents'],
  summary: 'Update Agent Info',
  description:
    "Update an Omnichannel agent's information. Permission required: `manage-livechat-agents`.\n\n### Changelog\n| Version      | Description |\n| ---------------- | ------------|\n|7.11.0            | Added       |",
  operationId: 'post-api-v1-livechat-agents.saveInfo',
  request: {
    headers: z.object({ 'X-Auth-Token': AuthTokenParamsSchema, 'X-User-Id': UserIdParamsSchema }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              agentId: z.string().openapi({ description: "Enter the agent's ID." }),
              agentData: z
                .looseObject({})
                .openapi({ description: 'Enter the agent data that you want to update.' }),
              agentDepartments: z
                .array(z.string())
                .openapi({
                  description:
                    "Enter the agent's departments. You can leave it as an empty string if you don't want to add any departments.",
                }),
            })
            .openapi({ required: ['agentId', 'agentData', 'agentDepartments'] }),
          examples: {
            'Example 1': {
              value: { agentId: '4zqiF9BSWmBTe6yvt', agentData: {}, agentDepartments: [''] },
            },
          },
        },
      },
    },
  },
  responses: { 200: TrueSuccessResponse, 401: AuthorizationErrorResponse },
})

export const postApiV1LivechatAgentStatusRoute = createRoute({
  method: 'post',
  path: '/api/v1/livechat/agent.status',
  tags: ['Omnichannel Agents'],
  summary: 'Update Agent Status',
  description:
    "Update the agent's livechat status. If the agent is available, using this endpoint will set the status as unavailable, and vice versa. Permission required: `view-l-room`. \nIf you want to update the status of another agent, you need the `manage-livechat-agents` permission. If you have configured business hours, the agent status cannot be updated outside of business hours.",
  operationId: 'post-api-v1-livechat-agent.status',
  request: {
    headers: z.object({ 'X-Auth-Token': AuthTokenParamsSchema, 'X-User-Id': UserIdParamsSchema }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              agentId: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    'Enter this parameter if you want to update the livechat status of another agent. If this parameter is not provided, the agent that is calling the endpoint will be updated.',
                  example: 'J6Q87AnWP5aNc9xhx',
                }),
            })
            .openapi({ required: [] }),
          examples: { 'Example 1': { value: { agentId: 'J6Q87AnWP5aNc9xhx' } } },
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
            .object({ status: z.string().exactOptional(), success: z.boolean().exactOptional() })
            .openapi({ required: [] }),
          examples: { 'Example 1': { value: { status: 'not-available', success: true } } },
        },
      },
    },
    401: AuthorizationErrorResponse,
  },
})

export const getApiV1OmnichannelContactRoute = createRoute({
  method: 'get',
  path: '/api/v1/omnichannel/contact',
  tags: ['Omnichannel Contacts'],
  summary: 'Get Omnichannel Contact',
  description:
    "> **Note:** This endpoint will be replaced. Refer to the [new API documentation](https://developer.rocket.chat/apidocs/get-omnichannel-contact) for updated usage and features.\n\nGet an Omnichannel contact by ID.\nPermission required: `view-l-room`.\n\nThe response does not include the contact's visitor `token`.\n\n### Changelog\n| Version | Description |\n| ------- | ----------- |\n| 8.9.0   | Removed the visitor `token` from the response. |",
  operationId: 'get-api-v1-omnichannel-contact',
  request: {
    headers: z.object({ 'X-Auth-Token': AuthTokenParamsSchema, 'X-User-Id': UserIdParamsSchema }),
    query: z.object({
      contactId: z
        .string()
        .openapi({
          param: {
            name: 'contactId',
            in: 'query',
            required: true,
            description: 'The contact ID.',
            schema: { type: 'string' },
            example: '62fbed6d337291dc9a68ff89',
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
              contact: z
                .object({
                  _id: z.string().exactOptional(),
                  username: z.string().exactOptional(),
                  status: z.string().exactOptional(),
                  ts: z.string().exactOptional(),
                  _updatedAt: z.string().exactOptional(),
                  department: z.string().exactOptional(),
                  name: z.string().exactOptional(),
                  visitorEmails: z
                    .array(
                      z.object({ address: z.string().exactOptional() }).openapi({ required: [] }),
                    )
                    .exactOptional(),
                  phone: z
                    .array(
                      z
                        .object({ phoneNumber: z.string().exactOptional() })
                        .openapi({ required: [] }),
                    )
                    .exactOptional(),
                  livechatData: z.looseObject({}).exactOptional(),
                })
                .nullable()
                .exactOptional()
                .openapi({ required: [] }),
              success: z.boolean().exactOptional(),
            })
            .openapi({ required: [] }),
          examples: {
            'Success Example': {
              value: {
                contact: {
                  _id: '62fbed6d337291dc9a68ff89',
                  username: 'guest-16',
                  status: 'online',
                  ts: '2022-08-16T19:18:05.380Z',
                  _updatedAt: '2022-08-23T17:58:37.254Z',
                  name: 'Kev',
                  visitorEmails: [{ address: 'email@rocket.chat' }],
                },
                success: true,
              },
            },
          },
        },
      },
    },
    401: AuthorizationErrorResponse,
    403: PermissionErrorResponse,
  },
})

export const postApiV1OmnichannelContactRoute = createRoute({
  method: 'post',
  path: '/api/v1/omnichannel/contact',
  tags: ['Omnichannel Contacts'],
  summary: 'Register or Update Omnichannel Contact',
  description:
    '> **Note:** This endpoint will be replaced. Refer to the new API documentation for [registering](https://developer.rocket.chat/apidocs/register-omnichannel-contacts) and [updating](https://developer.rocket.chat/apidocs/update-omnichannel-contact) contact for updated usage and features.\n\nRegister a guest user as a new omnichannel contact.\nPermission required: `view-l-room`',
  operationId: 'post-api-v1-omnichannel-contact',
  request: {
    headers: z.object({ 'X-Auth-Token': AuthTokenParamsSchema, 'X-User-Id': UserIdParamsSchema }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              token: z
                .string()
                .openapi({
                  description:
                    'The contact token. Enter a random unique string as the value. Use this same token to update the contact.',
                }),
              name: z.string().openapi({ description: 'The contact name.' }),
              email: z.string().exactOptional().openapi({ description: 'The contact email.' }),
              phone: z
                .string()
                .exactOptional()
                .openapi({ description: 'The contact phone number.' }),
              contactManager: z
                .object({ username: z.string().exactOptional() })
                .exactOptional()
                .openapi({ description: "The contact manager's user name.", required: [] }),
            })
            .openapi({ required: ['token', 'name'] }),
          examples: {
            'Example 1': {
              value: {
                token: '434lxd7iss8yh8c4m80wh',
                name: 'Chris',
                email: 'chris@gmail.com',
                phone: '+91123456788',
                contactManager: { username: 'kim.jane' },
              },
            },
          },
        },
      },
    },
  },
  responses: {
    200: {
      description: 'OK\nTo update a contact, use the contact token created in the response.',
      content: {
        'application/json': {
          schema: z
            .object({ contact: z.string().exactOptional(), success: z.boolean().exactOptional() })
            .openapi({ required: [] }),
          examples: {
            'Success Example': { value: { contact: '7ipCD6NDtkkRDCiNM', success: true } },
          },
        },
      },
    },
    400: {
      description: 'Bad Request',
      content: {
        'application/json': {
          schema: z
            .object({ success: z.boolean().exactOptional(), error: z.string().exactOptional() })
            .openapi({ required: [] }),
          examples: {
            'Example 1': { value: { success: false, error: "Match error: Missing key 'token'" } },
          },
        },
      },
    },
    401: AuthorizationErrorResponse,
    403: PermissionErrorResponse,
  },
})

export const getApiV1OmnichannelContactSearchRoute = createRoute({
  method: 'get',
  path: '/api/v1/omnichannel/contact.search',
  tags: ['Omnichannel Contacts'],
  summary: 'Search Contacts',
  description:
    "> **Note:** This endpoint will be replaced. Refer to the [new API documentation](https://developer.rocket.chat/apidocs/search-omnichannel-contacts) for updated usage and features.\n\nFind contacts by name, email, phone number, or any custom field values stored in the database.\nPermission required: `view-l-room`.\n* Encode values having characters like @,+, /and * to avoid breaking the endpoint.\n* To find contacts using custom fields, use the custom query parameter. The custom query parameter must be encoded by <a href=\"https://developer.mozilla.org/en-US/docs/Web/API/URLSearchParams\" target=\"_blank\">URLSearchParams</a>.\nFor example, to search contacts with premium subscription, the request is as follows:\n```\ncurl --location --globoff 'http://localhost:3000/api/v1/omnichannel/contact.search?custom={%20%22Subscription%22%3A%20%22premium%22%20}' \\\n--header 'X-Auth-Token: b5BKhblglC5OU0AfB_Tl9dKmOb0zXUvWK-nhNT_aE8V' \\\n--header 'X-User-Id: CkCPNcvsvCDfmWLqC'\n```\n\nThe response does not include the contact's visitor `token`.\n\n### Changelog\n| Version | Description |\n| ------- | ----------- |\n| 8.9.0   | Removed the visitor `token` from the response. |",
  operationId: 'get-api-v1-contact.search',
  request: {
    headers: z.object({ 'X-Auth-Token': AuthTokenParamsSchema, 'X-User-Id': UserIdParamsSchema }),
    query: z.object({
      email: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'email',
            in: 'query',
            description: "The contact's email address.",
            schema: { type: 'string' },
            required: false,
          },
        }),
      phone: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'phone',
            in: 'query',
            description: "The contact's phone number.",
            schema: { type: 'string' },
            example: '+1367895436',
            required: false,
          },
        }),
      custom: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'custom',
            in: 'query',
            description: 'The defined custom fields.',
            schema: { type: 'string' },
            example: 'fieldName=value',
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
              contact: z
                .object({
                  _id: z.string().exactOptional(),
                  username: z.string().exactOptional(),
                  status: z.string().exactOptional(),
                  ts: z.string().exactOptional(),
                  _updatedAt: z.string().exactOptional(),
                  department: z.string().exactOptional(),
                  name: z.string().exactOptional(),
                  visitorEmails: z
                    .array(
                      z.object({ address: z.string().exactOptional() }).openapi({ required: [] }),
                    )
                    .exactOptional(),
                  lastChat: z
                    .object({ _id: z.string().exactOptional(), ts: z.string().exactOptional() })
                    .exactOptional()
                    .openapi({ required: [] }),
                  livechatData: z
                    .object({ hobby: z.string().exactOptional() })
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
                contact: {
                  _id: '62fbed6d337291dc9a68ff89',
                  username: 'guest-16',
                  status: 'online',
                  ts: '2022-08-16T19:18:05.380Z',
                  _updatedAt: '2022-08-23T17:58:37.254Z',
                  department: 'MgzoccgEFHZ856i97',
                  name: 'Kev',
                  visitorEmails: [{ address: 'email@rocket.chat' }],
                  lastChat: { _id: 'CT5bru2WjJ2EsmGbH', ts: '2022-08-16T19:24:35.916Z' },
                  livechatData: { hobby: 'gaming' },
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
            .object({ success: z.boolean().exactOptional(), error: z.string().exactOptional() })
            .openapi({ required: [] }),
          examples: { 'Example 1': { value: { success: false, error: 'error-invalid-params' } } },
        },
      },
    },
    401: AuthorizationErrorResponse,
    403: PermissionErrorResponse,
  },
})

export const postApiV1OmnichannelContactsRoute = createRoute({
  method: 'post',
  path: '/api/v1/omnichannel/contacts',
  tags: ['Omnichannel Contacts'],
  summary: 'Register Omnichannel Contacts',
  description:
    'Register a new omnichannel contact.\nPermission required: `create-livechat-contact`\n\n### Changelog\n| Version      | Description |\n| ---------------- | ------------|\n|6.1.0             | Added       |',
  operationId: 'post-api-v1-omnichannel-contacts',
  request: {
    headers: z.object({ 'X-Auth-Token': AuthTokenParamsSchema, 'X-User-Id': UserIdParamsSchema }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              name: z.string().openapi({ description: "The contact's name." }),
              phones: z
                .array(z.string())
                .openapi({ description: "An array of the contact's phone number(s)." }),
              emails: z
                .array(z.string())
                .openapi({ description: "An array of the contact's email address(es)." }),
              customFields: z
                .looseObject({})
                .exactOptional()
                .openapi({ description: 'The custom fields.' }),
              contactManager: z
                .string()
                .exactOptional()
                .openapi({ description: "The contact manager's ID." }),
            })
            .openapi({ required: ['name', 'phones', 'emails'] }),
          examples: {
            'Example 1': {
              value: {
                name: 'John',
                phones: ['+123456789'],
                emails: ['email@example.com'],
                customFileds: {},
                contactManager: '67dfghjkjhgfdce31dd9bdae',
              },
            },
            'Example 2': {
              value: { name: 'John', phones: ['+123456789'], emails: ['email@example.com'] },
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
          schema: z
            .object({ contactId: z.string().exactOptional(), success: z.boolean().exactOptional() })
            .openapi({ required: [] }),
          examples: {
            'Example 1': { value: { contactId: '674eeb4343725ce31dd9bdae', success: true } },
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
                error: "must have required property 'emails' [error-invalid-params]",
                errorType: 'error-invalid-params',
              },
            },
            'Example 2': { value: { success: false, error: 'error-contact-manager-not-found' } },
          },
        },
      },
    },
    401: AuthorizationErrorResponse,
    403: PermissionErrorResponse,
  },
})

export const postApiV1OmnichannelContactsUpdateRoute = createRoute({
  method: 'post',
  path: '/api/v1/omnichannel/contacts.update',
  tags: ['Omnichannel Contacts'],
  summary: 'Update Omnichannel Contact',
  description:
    'Update omnichannel contact. Permission required: `update-livechat-contact`.\n\n### Changelog\n| Version      | Description |\n| ---------------- | ------------|\n|6.1.0             | Added       |',
  operationId: 'post-api-v1-omnichannel-contacts.update',
  request: {
    headers: z.object({ 'X-Auth-Token': AuthTokenParamsSchema, 'X-User-Id': UserIdParamsSchema }),
    body: {
      content: {
        'application/json': {
          schema: z.looseObject({}),
          examples: {
            'Example 1': {
              value: {
                contactId: '67487f45e98719b7908d0f29',
                name: 'John',
                phones: ['+123456789'],
                emails: ['email@example.com'],
                contactManager: '9sLvmAcQk4EAGdi6e',
                customFields: {},
                wipeConflicts: false,
              },
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
          schema: z
            .object({
              contact: z
                .object({
                  _id: z.string().exactOptional(),
                  createdAt: z.string().exactOptional(),
                  name: z.string().exactOptional(),
                  emails: z
                    .array(
                      z.object({ address: z.string().exactOptional() }).openapi({ required: [] }),
                    )
                    .exactOptional(),
                  phones: z
                    .array(
                      z
                        .object({ phoneNumber: z.string().exactOptional() })
                        .openapi({ required: [] }),
                    )
                    .exactOptional(),
                  channels: z
                    .array(
                      z
                        .object({
                          name: z.string().exactOptional(),
                          visitor: z
                            .object({
                              visitorId: z.string().exactOptional(),
                              source: z
                                .object({ type: z.string().exactOptional() })
                                .exactOptional()
                                .openapi({ required: [] }),
                            })
                            .exactOptional()
                            .openapi({ required: [] }),
                          blocked: z.boolean().exactOptional(),
                          verified: z.boolean().exactOptional(),
                          details: z
                            .object({
                              type: z.string().exactOptional(),
                              destination: z.string().exactOptional(),
                            })
                            .exactOptional()
                            .openapi({ required: [] }),
                          lastChat: z
                            .object({
                              _id: z.string().exactOptional(),
                              ts: z.string().exactOptional(),
                            })
                            .exactOptional()
                            .openapi({ required: [] }),
                        })
                        .openapi({ required: [] }),
                    )
                    .exactOptional(),
                  customFields: z.looseObject({}).exactOptional(),
                  unknown: z.boolean().exactOptional(),
                  preRegistration: z.boolean().exactOptional(),
                  _updatedAt: z.string().exactOptional(),
                  conflictingFields: z.array(z.looseObject({})).exactOptional(),
                  lastChat: z
                    .object({ _id: z.string().exactOptional(), ts: z.string().exactOptional() })
                    .exactOptional()
                    .openapi({ required: [] }),
                  contactManager: z.string().exactOptional(),
                })
                .exactOptional()
                .openapi({ required: [] }),
              success: z.boolean().exactOptional(),
            })
            .openapi({ required: [] }),
          examples: {
            'Example 1': {
              value: {
                contact: {
                  _id: '67487f45e98719b7908d0f29',
                  createdAt: '2024-11-28T14:33:41.487Z',
                  name: 'John',
                  emails: [{ address: 'email@example.com' }],
                  phones: [{ phoneNumber: '+123383883838' }],
                  channels: [
                    {
                      name: 'widget',
                      visitor: {
                        visitorId: '67499b2243725ce31dd57fc7',
                        source: { type: 'widget' },
                      },
                      blocked: false,
                      verified: false,
                      details: { type: 'widget', destination: 'example.com' },
                      lastChat: { _id: 'bC5x3zmBdgtmA4m3W', ts: '2024-11-29T10:44:55.016Z' },
                    },
                  ],
                  customFields: {},
                  unknown: false,
                  preRegistration: false,
                  _updatedAt: '2024-11-29T13:31:43.595Z',
                  conflictingFields: [],
                  lastChat: { _id: 'bC5x3zmBdgtmA4m3W', ts: '2024-11-29T10:44:55.016Z' },
                  contactManager: '9sLvmAcQk4EAGdi6e',
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
                error: "must have required property 'emails' [error-invalid-params]",
                errorType: 'error-invalid-params',
              },
            },
            'Example 2': { value: { success: false, error: 'error-contact-manager-not-found' } },
          },
        },
      },
    },
    401: AuthorizationErrorResponse,
    403: PermissionErrorResponse,
  },
})

export const postApiV1OmnichannelContactsConflictsRoute = createRoute({
  method: 'post',
  path: '/api/v1/omnichannel/contacts.conflicts',
  tags: ['Omnichannel Contacts'],
  summary: 'Resolve Contact Conflicts',
  description:
    "Use this endpoint to resolve conflicts in a contact's details.\n\nThis endpoint works only when a contact has conflicts.\nConflicts can occur when a verified contact uses another channel to communicate with you. \nFor example, a contact's details (phone number, email address, custom fields) were saved when they \naccessed the Livechat widget.\nNext time, they use WhatsApp and they provide different details.\nBy default, the values are overwritten. \nIf you choose to flag conflicts, the conflicting detail will be displayed and you can decide the values to keep.\nYou can flag conflicts in custom fields using the [custom fields endpoints](https://developer.rocket.chat/apidocs/send-custom-field-value) or the [Set Custom Field method](https://developer.rocket.chat/apidocs/livechatwidget-api)\nfrom the livechat widget API.\n\nPermission required: `update-livechat-contact`\n\n### Changelog\n| Version      | Description | \n| ---------------- | ------------|\n|7.7.0             | Added       |",
  operationId: 'post-api-v1-omnichannel-contacts.conflicts',
  request: {
    headers: z.object({ 'X-Auth-Token': AuthTokenParamsSchema, 'X-User-Id': UserIdParamsSchema }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              contactId: z.string().openapi({ description: "The contact's ID." }),
              name: z.string().exactOptional().openapi({ description: "The contact's name." }),
              customFields: z
                .object({ field1: z.string().exactOptional(), field2: z.string().exactOptional() })
                .exactOptional()
                .openapi({
                  description: 'You can enter custom fields if you have created any.',
                  required: [],
                }),
              contactManager: z
                .string()
                .exactOptional()
                .openapi({ description: "The contact's assigned agent or manager." }),
              wipeConflicts: z
                .boolean()
                .exactOptional()
                .openapi({
                  description: 'To overwrite the old data with the new details, enter `true`.',
                }),
            })
            .openapi({ required: ['contactId'] }),
          examples: {
            'Example 1': {
              value: {
                contactId: '68135a22e384b3ad127c7dbc',
                name: 'John Doe',
                customFields: { field1: 'field1', field2: 'field2' },
                contactManager: 'test.agent',
                wipeConflicts: false,
              },
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
          schema: z
            .object({
              result: z
                .object({
                  _id: z.string().exactOptional(),
                  createdAt: z.string().exactOptional(),
                  name: z.string().exactOptional(),
                  channels: z
                    .array(
                      z
                        .object({
                          name: z.string().exactOptional(),
                          visitor: z
                            .object({
                              visitorId: z.string().exactOptional(),
                              source: z
                                .object({ type: z.string().exactOptional() })
                                .exactOptional()
                                .openapi({ required: [] }),
                            })
                            .exactOptional()
                            .openapi({ required: [] }),
                          blocked: z.boolean().exactOptional(),
                          verified: z.boolean().exactOptional(),
                          details: z
                            .object({
                              type: z.string().exactOptional(),
                              destination: z.string().exactOptional(),
                            })
                            .exactOptional()
                            .openapi({ required: [] }),
                          lastChat: z
                            .object({
                              _id: z.string().exactOptional(),
                              ts: z.string().exactOptional(),
                            })
                            .exactOptional()
                            .openapi({ required: [] }),
                          field: z.string().exactOptional(),
                          value: z.string().exactOptional(),
                          verifiedAt: z.string().exactOptional(),
                        })
                        .openapi({ required: [] }),
                    )
                    .exactOptional(),
                  customFields: z
                    .object({
                      field1: z.string().exactOptional(),
                      field2: z.string().exactOptional(),
                    })
                    .exactOptional()
                    .openapi({ required: [] }),
                  unknown: z.boolean().exactOptional(),
                  preRegistration: z.boolean().exactOptional(),
                  _updatedAt: z.string().exactOptional(),
                  lastChat: z
                    .object({ _id: z.string().exactOptional(), ts: z.string().exactOptional() })
                    .exactOptional()
                    .openapi({ required: [] }),
                  activity: z.array(z.string()).exactOptional(),
                  emails: z
                    .array(
                      z.object({ address: z.string().exactOptional() }).openapi({ required: [] }),
                    )
                    .exactOptional(),
                  phones: z.array(z.looseObject({})).exactOptional(),
                  conflictingFields: z.array(z.looseObject({})).exactOptional(),
                })
                .exactOptional()
                .openapi({ required: [] }),
              success: z.boolean().exactOptional(),
            })
            .openapi({ required: [] }),
          examples: {
            'Example 1': {
              value: {
                result: {
                  _id: '68341efdd387e3d7509267fb',
                  createdAt: '2025-05-26T07:57:49.616Z',
                  name: 'Jane Doe',
                  channels: [
                    {
                      name: 'widget',
                      visitor: {
                        visitorId: '68341ef9d387e3d7509267fa',
                        source: { type: 'widget' },
                      },
                      blocked: false,
                      verified: true,
                      details: { type: 'widget', destination: 'writing-demo.dev.rocket.chat' },
                      lastChat: { _id: 'cz5uyBRyKPfoWHBat', ts: '2025-05-26T07:57:49.661Z' },
                      field: 'email',
                      value: 'jane.doe@email.com',
                      verifiedAt: '2025-05-26T07:58:26.895Z',
                    },
                  ],
                  customFields: { field1: 'field1', field2: 'field2' },
                  unknown: false,
                  preRegistration: false,
                  _updatedAt: '2025-05-26T11:35:31.241Z',
                  lastChat: { _id: 'cz5uyBRyKPfoWHBat', ts: '2025-05-26T07:57:49.661Z' },
                  activity: ['2025-05'],
                  emails: [{ address: 'jane.doe@email.com' }],
                  phones: [],
                  conflictingFields: [],
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
                error: "must have required property 'contactId' [error-invalid-params]",
                errorType: 'error-invalid-params',
              },
            },
            'Example 2': { value: { success: false, error: 'error-contact-has-no-conflicts' } },
          },
        },
      },
    },
    401: AuthorizationErrorResponse,
    403: PermissionErrorResponse,
  },
})

export const getApiV1OmnichannelContactsGetRoute = createRoute({
  method: 'get',
  path: '/api/v1/omnichannel/contacts.get',
  tags: ['Omnichannel Contacts'],
  summary: 'Get Omnichannel Contact',
  description:
    'Retrieve a single omnichannel contact by its unique `contactId`.\n\nRequired permission: `view-livechat-contact`.\n',
  operationId: 'get-api-v1-omnichannel-contacts.get',
  request: {
    headers: z.object({ 'X-Auth-Token': AuthTokenParamsSchema, 'X-User-Id': UserIdParamsSchema }),
    query: z.object({
      contactId: z
        .string()
        .openapi({
          param: {
            name: 'contactId',
            in: 'query',
            description: "The contact's unique ID.",
            required: true,
            schema: { type: 'string', example: '673c76df47a6c9b89dd263d8' },
          },
          example: '673c76df47a6c9b89dd263d8',
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
              contact: z
                .object({
                  _id: z.string().exactOptional(),
                  createdAt: z.string().exactOptional(),
                  name: z.string().exactOptional(),
                  channels: z
                    .array(
                      z
                        .object({
                          name: z.string().exactOptional(),
                          visitor: z
                            .object({
                              visitorId: z.string().exactOptional(),
                              source: z
                                .object({ type: z.string().exactOptional() })
                                .exactOptional()
                                .openapi({ required: [] }),
                            })
                            .exactOptional()
                            .openapi({ required: [] }),
                          blocked: z.boolean().exactOptional(),
                          verified: z.boolean().exactOptional(),
                          details: z
                            .object({
                              type: z.string().exactOptional(),
                              destination: z.string().exactOptional(),
                            })
                            .exactOptional()
                            .openapi({ required: [] }),
                          lastChat: z
                            .object({
                              _id: z.string().exactOptional(),
                              ts: z.string().exactOptional(),
                            })
                            .exactOptional()
                            .openapi({ required: [] }),
                          field: z.string().exactOptional(),
                          value: z.string().exactOptional(),
                          verifiedAt: z.string().exactOptional(),
                        })
                        .openapi({ required: [] }),
                    )
                    .exactOptional(),
                  customFields: z
                    .object({
                      'social-number': z.string().exactOptional(),
                      address: z.string().exactOptional(),
                      'zip-code': z.string().exactOptional(),
                    })
                    .exactOptional()
                    .openapi({ required: [] }),
                  unknown: z.boolean().exactOptional(),
                  _updatedAt: z.string().exactOptional(),
                  lastChat: z
                    .object({ _id: z.string().exactOptional(), ts: z.string().exactOptional() })
                    .exactOptional()
                    .openapi({ required: [] }),
                  conflictingFields: z.array(z.looseObject({})).exactOptional(),
                  emails: z
                    .array(
                      z.object({ address: z.string().exactOptional() }).openapi({ required: [] }),
                    )
                    .exactOptional(),
                  contactManager: z.string().exactOptional(),
                  phones: z.array(z.looseObject({})).exactOptional(),
                })
                .exactOptional()
                .openapi({ required: [] }),
              success: z.boolean().exactOptional(),
            })
            .openapi({ required: [] }),
          examples: {
            Example: {
              value: {
                contact: {
                  _id: '673c76df47a6c9b89dd263d8',
                  createdAt: '2024-11-19T11:30:39.710Z',
                  name: 'John Doe',
                  channels: [
                    {
                      name: 'widget',
                      visitor: {
                        visitorId: '673c76df1e2e6feb77939c70',
                        source: { type: 'widget' },
                      },
                      blocked: false,
                      verified: true,
                      details: { type: 'widget', destination: 'example.com' },
                      lastChat: { _id: 'ixnGsLNT8rTL9eYY3', ts: '2024-11-19T11:30:39.724Z' },
                      field: 'email',
                      value: 'mail@example.com',
                      verifiedAt: '2024-11-19T11:31:58.997Z',
                    },
                  ],
                  customFields: {
                    'social-number': '123456-12345',
                    address: 'P.O. Box 123 3456 Home Rd. Somewhere in the world',
                    'zip-code': '123456-099',
                  },
                  unknown: false,
                  _updatedAt: '2024-11-19T11:33:55.424Z',
                  lastChat: { _id: 'ixnGsLNT8rTL9eYY3', ts: '2024-11-19T11:30:39.724Z' },
                  conflictingFields: [],
                  emails: [{ address: 'mail@example.com' }],
                  contactManager: 'cbTgcixmLxYSdFmmZ',
                  phones: [],
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
            'Required Parameter': {
              value: {
                success: false,
                error: "error: must have required property 'contactId' [error-invalid-params]",
                errorType: 'error-invalid-params',
              },
            },
            'Empty contact': {
              value: {
                success: false,
                error: 'must pass "isNotEmpty" keyword validation [error-invalid-params]',
                errorType: 'error-invalid-params',
              },
            },
          },
        },
      },
    },
    401: AuthorizationErrorResponse,
    403: PermissionErrorResponse,
  },
})

export const getApiV1OmnichannelContactsSearchRoute = createRoute({
  method: 'get',
  path: '/api/v1/omnichannel/contacts.search',
  tags: ['Omnichannel Contacts'],
  summary: 'Search Omnichannel Contacts',
  description:
    'Retrieve a list of omnichannel contacts based on search criteria like name, email or phone number.\nPermission required: `view-livechat-contact`.\n\n**Note**: Ensure to URL-encode special characters such as `@`, `+`, `/`, and `*` in query parameters to prevent issues with the endpoint. For example, encode email addresses as `mail%40example.com` instead of `mail@example.com`.',
  operationId: 'get-api-v1-omnichannel-contacts.search',
  request: {
    headers: z.object({ 'X-Auth-Token': AuthTokenParamsSchema, 'X-User-Id': UserIdParamsSchema }),
    query: z.object({
      offset: OffsetParamsSchema,
      count: CountParamsSchema,
      sort: SortParamsSchema,
      searchText: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            schema: { type: 'string', example: 'John' },
            in: 'query',
            name: 'searchText',
            description: 'Text to search for in contact details.',
            required: false,
          },
          example: 'John',
        }),
      unknown: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            schema: { type: 'boolean', example: false },
            in: 'query',
            name: 'unknown',
            description: "Filter by contact's unknown status.",
            required: false,
          },
          example: false,
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
              contacts: z
                .array(
                  z
                    .object({
                      _id: z.string().exactOptional(),
                      createdAt: z.string().exactOptional(),
                      name: z.string().exactOptional(),
                      emails: z
                        .array(
                          z
                            .object({ address: z.string().exactOptional() })
                            .openapi({ required: [] }),
                        )
                        .exactOptional(),
                      phones: z.array(z.looseObject({})).exactOptional(),
                      channels: z
                        .array(
                          z
                            .object({
                              name: z.string().exactOptional(),
                              visitor: z
                                .object({
                                  visitorId: z.string().exactOptional(),
                                  source: z
                                    .object({ type: z.string().exactOptional() })
                                    .exactOptional()
                                    .openapi({ required: [] }),
                                })
                                .exactOptional()
                                .openapi({ required: [] }),
                              blocked: z.boolean().exactOptional(),
                              verified: z.boolean().exactOptional(),
                              details: z
                                .object({
                                  type: z.string().exactOptional(),
                                  destination: z.string().exactOptional(),
                                })
                                .exactOptional()
                                .openapi({ required: [] }),
                              lastChat: z
                                .object({
                                  _id: z.string().exactOptional(),
                                  ts: z.string().exactOptional(),
                                })
                                .exactOptional()
                                .openapi({ required: [] }),
                            })
                            .openapi({ required: [] }),
                        )
                        .exactOptional(),
                      customFields: z
                        .object({ 'social-number': z.string().exactOptional() })
                        .exactOptional()
                        .openapi({ required: [] }),
                      unknown: z.boolean().exactOptional(),
                      _updatedAt: z.string().exactOptional(),
                      conflictingFields: z.array(z.looseObject({})).exactOptional(),
                      lastChat: z
                        .object({ _id: z.string().exactOptional(), ts: z.string().exactOptional() })
                        .exactOptional()
                        .openapi({ required: [] }),
                      contactManager: z
                        .object({
                          _id: z.string().exactOptional(),
                          name: z.string().exactOptional(),
                          username: z.string().exactOptional(),
                        })
                        .exactOptional()
                        .openapi({ required: [] }),
                    })
                    .openapi({ required: [] }),
                )
                .exactOptional(),
              count: z.int().exactOptional(),
              offset: z.int().exactOptional(),
              total: z.int().exactOptional(),
              success: z.boolean().exactOptional(),
            })
            .openapi({ required: [] }),
          examples: {
            'Example 1': {
              value: {
                contacts: [
                  {
                    _id: '673be1711e2e6feb77939a7b',
                    createdAt: '2024-11-19T00:53:05.468Z',
                    name: 'Boris Doe',
                    emails: [{ address: 'boris@doe.com' }],
                    phones: [],
                    channels: [
                      {
                        name: 'widget',
                        visitor: {
                          visitorId: '673be2101e2e6feb77939a7f',
                          source: { type: 'widget' },
                        },
                        blocked: false,
                        verified: false,
                        details: { type: 'widget', destination: 'example.com' },
                        lastChat: { _id: 'NMee5zFPv62N7RAhh', ts: '2024-11-19T00:55:46.723Z' },
                      },
                    ],
                    customFields: { 'social-number': '45600-00' },
                    unknown: false,
                    _updatedAt: '2024-11-19T00:56:43.140Z',
                    conflictingFields: [],
                    lastChat: { _id: 'NMee5zFPv62N7RAhh', ts: '2024-11-19T00:55:46.723Z' },
                    contactManager: { _id: 'mAwAgmNndK7SHnQ89', name: 'Jane', username: 'Jane' },
                  },
                ],
                count: 1,
                offset: 0,
                total: 1,
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
                error: 'must be number [error-invalid-params]',
                errorType: 'error-invalid-params',
              },
            },
            'Example 2': {
              value: {
                success: false,
                error: 'must be boolean [error-invalid-params]',
                errorType: 'error-invalid-params',
              },
            },
          },
        },
      },
    },
    401: AuthorizationErrorResponse,
    403: PermissionErrorResponse,
  },
})

export const getApiV1OmnichannelContactsChannelsRoute = createRoute({
  method: 'get',
  path: '/api/v1/omnichannel/contacts.channels',
  tags: ['Omnichannel Contacts'],
  summary: 'Get channels grouped by contact name',
  description:
    'Get channels grouped by contact name.\nPermission required: `view-livechat-contact`.\n\n### Changelog\n| Version      | Description |\n| ---------------- | ------------|\n|6.1.0             | Added       |',
  operationId: 'get-api-v1-omnichannel-contacts.channels',
  request: {
    headers: z.object({ 'X-Auth-Token': AuthTokenParamsSchema, 'X-User-Id': UserIdParamsSchema }),
    query: z.object({
      contactId: z
        .string()
        .openapi({
          param: {
            schema: { type: 'string', example: '673653b997f0fbcd657f0ebf' },
            in: 'query',
            name: 'contactId',
            required: true,
            description: "The contact's ID.",
          },
          example: '673653b997f0fbcd657f0ebf',
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
              channels: z
                .array(
                  z
                    .object({
                      name: z.string().exactOptional(),
                      visitor: z
                        .object({
                          visitorId: z.string().exactOptional(),
                          source: z
                            .object({ type: z.string().exactOptional() })
                            .exactOptional()
                            .openapi({ required: [] }),
                        })
                        .exactOptional()
                        .openapi({ required: [] }),
                      blocked: z.boolean().exactOptional(),
                      verified: z.boolean().exactOptional(),
                      details: z
                        .object({
                          type: z.string().exactOptional(),
                          destination: z.string().exactOptional(),
                        })
                        .exactOptional()
                        .openapi({ required: [] }),
                      lastChat: z
                        .object({ _id: z.string().exactOptional(), ts: z.string().exactOptional() })
                        .exactOptional()
                        .openapi({ required: [] }),
                      field: z.string().exactOptional(),
                      value: z.string().exactOptional(),
                      verifiedAt: z.string().exactOptional(),
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
                channels: [
                  {
                    name: 'widget',
                    visitor: { visitorId: '234567987655weygcbg', source: { type: 'widget' } },
                    blocked: false,
                    verified: true,
                    details: { type: 'widget', destination: 'example.com' },
                    lastChat: { _id: 'sdfgjhgfdfeG', ts: '2024-11-22T14:53:36.500Z' },
                    field: 'email',
                    value: 'example@mail.com',
                    verifiedAt: '2024-11-22T14:55:21.354Z',
                  },
                ],
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
            'Bad Request Example': {
              value: {
                success: false,
                error: "must have required property 'contactId' [error-invalid-params]",
                errorType: 'error-invalid-params',
              },
            },
          },
        },
      },
    },
    401: {
      description: 'Unauthorized',
      content: {
        'application/json': {
          schema: z
            .object({ success: z.boolean().exactOptional(), error: z.string().exactOptional() })
            .openapi({ required: [] }),
          examples: {
            'Unauthorized Example ': {
              value: { success: false, error: 'You must be logged in to do this.' },
            },
          },
        },
      },
    },
  },
})

export const getApiV1OmnichannelContactsHistoryRoute = createRoute({
  method: 'get',
  path: '/api/v1/omnichannel/contacts.history',
  tags: ['Omnichannel Contacts'],
  summary: 'Get Contact History',
  description:
    "Get contact's history. Permission required: `view-livechat-contact-history`.\n\n### Changelog\n| Version      | Description |\n| ---------------- | ------------|\n|9.0.0   | The `403` response returns `errorType: error-forbidden`.       |\n|6.1.0             | Added       |",
  operationId: 'get-api-v1-omnichannel-contacts.history',
  request: {
    headers: z.object({ 'X-Auth-Token': AuthTokenParamsSchema, 'X-User-Id': UserIdParamsSchema }),
    query: z.object({
      offset: OffsetParamsSchema,
      count: CountParamsSchema,
      sort: SortParamsSchema,
      contactId: z
        .string()
        .openapi({
          param: {
            schema: { type: 'string', example: '673653b997f0fbcd657f0ebf' },
            in: 'query',
            name: 'contactId',
            required: true,
            description: "The contact's ID.",
          },
          example: '673653b997f0fbcd657f0ebf',
        }),
      source: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            schema: { type: 'string', example: 'widget' },
            in: 'query',
            name: 'source',
            description: "The source of the contact's interaction with your organization.",
            required: false,
          },
          example: 'widget',
        }),
    }),
  },
  responses: {
    200: TrueSuccessResponse,
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
                error: "must have required property 'contactId' [error-invalid-params]",
                errorType: 'error-invalid-params',
              },
            },
          },
        },
      },
    },
    401: AuthorizationErrorResponse,
    403: {
      description: 'Forbidden',
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
                error: 'User does not have the permissions required for this action',
                errorType: 'error-forbidden',
              },
            },
          },
        },
      },
    },
  },
})

export const getApiV1OmnichannelContactsCheckExistenceRoute = createRoute({
  method: 'get',
  path: '/api/v1/omnichannel/contacts.checkExistence',
  tags: ['Omnichannel Contacts'],
  summary: 'Check Contacts Existence',
  description:
    'This identifies whether a contact is already registered using a given query parameter such as `email` or `phone` or `contactId`.\n**Note**: You must provide only one of the parameters in the request.\n\n**Required permission**: `view-livechat-contact`.\n\n### Changelog\n| Version      | Description |\n| ---------------- | ------------|\n|7.2.0             | Added       |',
  operationId: 'get-api-v1-omnichannel-contacts.checkExistence',
  request: {
    headers: z.object({ 'X-Auth-Token': AuthTokenParamsSchema, 'X-User-Id': UserIdParamsSchema }),
    query: z.object({
      contactId: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'contactId',
            in: 'query',
            description: "The contact's unique ID.",
            required: false,
            schema: { type: 'string', example: '673c76df47a6c9b89dd263d8' },
          },
          example: '673c76df47a6c9b89dd263d8',
        }),
      email: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            schema: { type: 'string', example: 'example@mail.com' },
            in: 'query',
            name: 'email',
            description: "The omnichannel contact's email address.",
            required: false,
          },
          example: 'example@mail.com',
        }),
      phone: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            schema: { type: 'string', example: '01234567843' },
            in: 'query',
            name: 'phone',
            description: 'Phone number of the omnichannel contact.',
            required: false,
          },
          example: '01234567843',
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': {
          schema: z
            .object({ exists: z.boolean().exactOptional(), success: z.boolean().exactOptional() })
            .openapi({ required: [] }),
          examples: {
            'Contact found': { value: { exists: true, success: true } },
            'contact not found': { value: { exists: false, success: true } },
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
            'Error from missing query parameters': {
              value: {
                success: false,
                error:
                  "must have required property 'contactId'\n must have required property 'email'\n must have required property 'phone'\n must match exactly one schema in oneOf [error-invalid-params]",
                errorType: 'error-invalid-params',
              },
            },
          },
        },
      },
    },
  },
})

export const postApiV1OmnichannelContactsBlockRoute = createRoute({
  method: 'post',
  path: '/api/v1/omnichannel/contacts.block',
  tags: ['Omnichannel Contacts'],
  summary: 'Block Omnichannel Contact',
  description:
    '<div style="text-align: center; margin: 1rem 0 1rem 0;"><img src="https://raw.githubusercontent.com/RocketChat/Rocket.Chat-Open-API/main/images/Enterprise%20tag.svg" alt="Enterprise" style="display: block; margin: auto"></div>\n\nUse this endpoint to block an Omnichannel on a specific channel. Permission required: `block-livechat-contact`',
  operationId: 'post-api-v1-omnichannel-contacts.block',
  request: {
    headers: z.object({ 'X-Auth-Token': AuthTokenParamsSchema, 'X-User-Id': UserIdParamsSchema }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              visitor: z
                .object({
                  visitorId: z
                    .string()
                    .openapi({
                      description:
                        "Enter the visitor ID of the contact that you want to block. To get the visitor ID, you can use the <a href='https://developer.rocket.chat/apidocs/search-omnichannel-contacts' target='_blank'>Search Omnichannel Contacts</a> endpoint.",
                      example: '68f0d2c201e202fefed83672',
                    }),
                  source: z
                    .object({
                      type: z
                        .string()
                        .openapi({
                          description:
                            'Enter the type of channel from which you want to block the contact.',
                          example: 'widget',
                        }),
                    })
                    .openapi({
                      required: ['type'],
                      description:
                        "The source object contains the channels from which you want to block the contact. To get the room types, you can use the <a href='https://developer.rocket.chat/apidocs/view-omnichannel-room-sources' target='_blank'>View Omnichannel Room Sources</a> endpoint.",
                    }),
                })
                .openapi({
                  required: ['visitorId', 'source'],
                  description:
                    'The visitor object contains the details of the contact that you want to block.',
                }),
            })
            .openapi({ required: ['visitor'] }),
          examples: {
            'Example 1': {
              value: {
                visitor: { visitorId: '68f0d2c201e202fefed83672', source: { type: 'widget' } },
              },
            },
          },
        },
      },
    },
  },
  responses: {
    200: TrueSuccessResponse,
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
                error: "must have required property 'visitor' [error-invalid-params]",
                errorType: 'error-invalid-params',
              },
            },
            'Example 2': { value: { success: false, error: 'error-contact-not-found' } },
          },
        },
      },
    },
    401: AuthorizationErrorResponse,
  },
})

export const postApiV1OmnichannelContactsUnblockRoute = createRoute({
  method: 'post',
  path: '/api/v1/omnichannel/contacts.unblock',
  tags: ['Omnichannel Contacts'],
  summary: 'Unblock Omnichannel Contact',
  description:
    '<div style="text-align: center; margin: 1rem 0 1rem 0;"><img src="https://raw.githubusercontent.com/RocketChat/Rocket.Chat-Open-API/main/images/Enterprise%20tag.svg" alt="Enterprise" style="display: block; margin: auto"></div>\n\nUse this endpoint to unblock an Omnichannel on a specific channel. Permission required: `unblock-livechat-contact`',
  operationId: 'post-api-v1-omnichannel-contacts.unblock',
  request: {
    headers: z.object({ 'X-Auth-Token': AuthTokenParamsSchema, 'X-User-Id': UserIdParamsSchema }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              visitor: z
                .object({
                  visitorId: z
                    .string()
                    .openapi({
                      description: 'Enter the visitor ID of the contact that you want to unblock.',
                      example: '68f0d2c201e202fefed83672',
                    }),
                  source: z
                    .object({
                      type: z
                        .string()
                        .openapi({
                          description:
                            'Enter the type of channel from which you want to unblock the contact.',
                          example: 'widget',
                        }),
                    })
                    .openapi({
                      required: ['type'],
                      description:
                        'The source object contains the channels from which you want to unblock the contact.',
                    }),
                })
                .openapi({
                  required: ['visitorId', 'source'],
                  description:
                    'The visitor object contains the details of the contact that you want to unblock.',
                }),
            })
            .openapi({ required: ['visitor'] }),
          examples: {
            'Example 1': {
              value: {
                visitor: { visitorId: '68f0d2c201e202fefed83672', source: { type: 'widget' } },
              },
            },
          },
        },
      },
    },
  },
  responses: {
    200: TrueSuccessResponse,
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
                error: "must have required property 'visitor' [error-invalid-params]",
                errorType: 'error-invalid-params',
              },
            },
            'Example 2': { value: { success: false, error: 'error-contact-not-found' } },
          },
        },
      },
    },
    401: AuthorizationErrorResponse,
  },
})

export const getApiV1LivechatAnalyticsAgentOverviewRoute = createRoute({
  method: 'get',
  path: '/api/v1/livechat/analytics/agent-overview',
  tags: ['Omnichannel Statistics'],
  summary: 'Get Agent Analytics Overview',
  description:
    'Get the analytics overview for the agents in your workspace.\nPermission required: `view-livechat-manager`\n\n### Changelog\n| Version      | Description |\n| ---------------- | ------------|\n|6.4.0             | Added       |',
  operationId: 'get-api-v1-livechat-analytics-agent-overview',
  request: {
    headers: z.object({ 'X-Auth-Token': AuthTokenParamsSchema, 'X-User-Id': UserIdParamsSchema }),
    query: z.object({
      name: z
        .string()
        .openapi({
          param: {
            name: 'name',
            in: 'query',
            description:
              'The data that you want to get. The available options are:\n* `Total_conversations`\n* `Avg_chat_duration`\n* `Total_messages`\n* `Avg_first_response_time`\n* `Best_first_response_time`\n* `Avg_response_time`\n* `Avg_reaction_time`',
            required: true,
            schema: { type: 'string' },
          },
        }),
      from: z
        .string()
        .openapi({
          param: {
            name: 'from',
            in: 'query',
            description: 'The start date',
            required: true,
            schema: { type: 'string' },
            example: '2019-05-22T12:11:45.392Z',
          },
        }),
      to: z
        .string()
        .openapi({
          param: {
            name: 'to',
            in: 'query',
            description: 'The end date',
            required: true,
            schema: { type: 'string' },
            example: '2023-05-22T12:11:45.392Z',
          },
        }),
      departmentId: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'departmentId',
            in: 'query',
            description: 'The department ID to return results for.',
            schema: { type: 'string' },
            example: 'The department ID to return results for.',
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
              head: z
                .array(z.object({ name: z.string().exactOptional() }).openapi({ required: [] }))
                .exactOptional(),
              data: z
                .array(
                  z
                    .object({ name: z.string().exactOptional(), value: z.string().exactOptional() })
                    .openapi({ required: [] }),
                )
                .exactOptional(),
              success: z.boolean().exactOptional(),
            })
            .openapi({ required: [] }),
          examples: {
            'Success Example': {
              value: {
                head: [{ name: 'Agent' }, { name: 'Total_messages' }],
                data: [
                  { name: 'kim', value: '25' },
                  { name: 'jane', value: '50' },
                  { name: 'baek', value: '44' },
                ],
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
                error: "must have required property 'from' [error-invalid-params]",
                errorType: 'error-invalid-params',
              },
            },
            'Example 3': {
              value: {
                success: false,
                error: "must have required property 'to' [error-invalid-params]",
                errorType: 'error-invalid-params',
              },
            },
          },
        },
      },
    },
    401: AuthorizationErrorResponse,
    403: PermissionErrorResponse,
  },
})

export const getApiV1LivechatAnalyticsOverviewRoute = createRoute({
  method: 'get',
  path: '/api/v1/livechat/analytics/overview',
  tags: ['Omnichannel Statistics'],
  summary: 'Get Analytics Overview',
  description:
    'Get the overview of omnichannel analytics in your workspace.\nPermission required: `view-livechat-manager`\n\n### Changelog\n| Version      | Description |\n| ---------------- | ------------|\n|6.4.0             | Added       |',
  operationId: 'get-api-v1-livechat-analytics-overview',
  request: {
    headers: z.object({ 'X-Auth-Token': AuthTokenParamsSchema, 'X-User-Id': UserIdParamsSchema }),
    query: z.object({
      name: z
        .string()
        .openapi({
          param: {
            name: 'name',
            in: 'query',
            description:
              'The data that you want to get. The available options are: `Productivity`, `Conversations`',
            required: true,
            schema: { type: 'string' },
            example: 'Conversations',
          },
        }),
      from: z
        .string()
        .openapi({
          param: {
            name: 'from',
            in: 'query',
            description: 'The start date',
            required: true,
            schema: { type: 'string' },
            example: '2019-05-22T12:11:45.392Z',
          },
        }),
      to: z
        .string()
        .openapi({
          param: {
            name: 'to',
            in: 'query',
            description: 'The end date',
            required: true,
            schema: { type: 'string' },
            example: '2023-05-22T12:11:45.392Z',
          },
        }),
      departmentId: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'departmentId',
            in: 'query',
            description: 'The department ID to return results for.',
            schema: { type: 'string' },
            example: 'jsi9w0oakusss',
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
          schema: z.array(
            z
              .object({
                title: z.string().exactOptional(),
                value: z.xor([z.string(), z.int()]).exactOptional(),
              })
              .openapi({ required: [] }),
          ),
          examples: {
            'Success Example': {
              value: [
                { title: 'Total_conversations', value: 1086 },
                { title: 'Open_conversations', value: 119 },
                { title: 'On_Hold_conversations', value: 1 },
                { title: 'Total_messages', value: 4892 },
                { title: 'Busiest_day', value: 'Tuesday' },
                { title: 'Conversations_per_day', value: '0.74' },
                { title: 'Busiest_time', value: '7AM- 8AM' },
              ],
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
                error: "must have required property 'from' [error-invalid-params]",
                errorType: 'error-invalid-params',
              },
            },
            'Example 3': {
              value: {
                success: false,
                error: "must have required property 'to' [error-invalid-params]",
                errorType: 'error-invalid-params',
              },
            },
          },
        },
      },
    },
    401: AuthorizationErrorResponse,
    403: PermissionErrorResponse,
  },
})

export const getApiV1LivechatConfigRoute = createRoute({
  method: 'get',
  path: '/api/v1/livechat/config',
  tags: ['Livechat'],
  summary: 'Get Livechat Configurations',
  description:
    'Get Livechat widget configuration information and additional visitor data.\n\n### Changelog\n| Version      | Description |\n| ---------------- | ------------|\n|0.70.0             | Added       |',
  operationId: 'get-api-v1-livechat-config',
  request: {
    query: z.object({
      token: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'token',
            in: 'query',
            description: 'The visitor token.',
            schema: { type: 'string' },
            required: false,
          },
        }),
      department: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'department',
            in: 'query',
            description: "The visitor's department.",
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
              config: z
                .object({
                  enabled: z.boolean().exactOptional(),
                  settings: z
                    .object({
                      registrationForm: z.boolean().exactOptional(),
                      allowSwitchingDepartments: z.boolean().exactOptional(),
                      nameFieldRegistrationForm: z.boolean().exactOptional(),
                      emailFieldRegistrationForm: z.boolean().exactOptional(),
                      displayOfflineForm: z.boolean().exactOptional(),
                      videoCall: z.boolean().exactOptional(),
                      fileUpload: z.boolean().exactOptional(),
                      language: z.string().exactOptional(),
                      transcript: z.boolean().exactOptional(),
                      historyMonitorType: z.string().exactOptional(),
                      forceAcceptDataProcessingConsent: z.boolean().exactOptional(),
                      showConnecting: z.boolean().exactOptional(),
                      agentHiddenInfo: z.boolean().exactOptional(),
                      clearLocalStorageWhenChatEnded: z.boolean().exactOptional(),
                      limitTextLength: z.boolean().exactOptional(),
                    })
                    .exactOptional()
                    .openapi({ required: [] }),
                  theme: z
                    .object({
                      title: z.string().exactOptional(),
                      color: z.string().exactOptional(),
                      offlineTitle: z.string().exactOptional(),
                      offlineColor: z.string().exactOptional(),
                      actionLinks: z
                        .array(
                          z
                            .object({
                              icon: z.string().exactOptional(),
                              i18nLabel: z.string().exactOptional(),
                              method_id: z.string().exactOptional(),
                              params: z.string().exactOptional(),
                            })
                            .openapi({ required: [] }),
                        )
                        .exactOptional(),
                    })
                    .exactOptional()
                    .openapi({ required: [] }),
                  messages: z
                    .object({
                      offlineMessage: z.string().exactOptional(),
                      offlineSuccessMessage: z.string().exactOptional(),
                      offlineUnavailableMessage: z.string().exactOptional(),
                      conversationFinishedMessage: z.string().exactOptional(),
                      transcriptMessage: z.string().exactOptional(),
                    })
                    .exactOptional()
                    .openapi({ required: [] }),
                  survey: z
                    .object({
                      items: z.array(z.string()).exactOptional(),
                      values: z.array(z.string()).exactOptional(),
                    })
                    .exactOptional()
                    .openapi({ required: [] }),
                  departments: z
                    .array(
                      z
                        .object({
                          _id: z.string().exactOptional(),
                          name: z.string().exactOptional(),
                          showOnRegistration: z.boolean().exactOptional(),
                          showOnOfflineForm: z.boolean().exactOptional(),
                          departmentsAllowedToForward: z.array(z.string()).exactOptional(),
                        })
                        .openapi({ required: [] }),
                    )
                    .exactOptional(),
                  online: z.boolean().exactOptional(),
                  guest: z
                    .object({
                      _id: z.string().exactOptional(),
                      username: z.string().exactOptional(),
                      token: z.string().exactOptional(),
                      name: z.string().exactOptional(),
                    })
                    .exactOptional()
                    .openapi({ required: [] }),
                  room: z
                    .object({
                      _id: z.string().exactOptional(),
                      servedBy: z
                        .object({
                          _id: z.string().exactOptional(),
                          username: z.string().exactOptional(),
                        })
                        .exactOptional()
                        .openapi({ required: [] }),
                      open: z.boolean().exactOptional(),
                    })
                    .exactOptional()
                    .openapi({ required: [] }),
                  agent: z
                    .object({
                      _id: z.string().exactOptional(),
                      emails: z
                        .array(
                          z
                            .object({
                              address: z.string().exactOptional(),
                              verified: z.boolean().exactOptional(),
                            })
                            .openapi({ required: [] }),
                        )
                        .exactOptional(),
                      name: z.string().exactOptional(),
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
                config: {
                  enabled: true,
                  settings: {
                    registrationForm: true,
                    allowSwitchingDepartments: false,
                    nameFieldRegistrationForm: true,
                    emailFieldRegistrationForm: true,
                    displayOfflineForm: true,
                    videoCall: false,
                    fileUpload: true,
                    language: '',
                    transcript: false,
                    historyMonitorType: 'url',
                    forceAcceptDataProcessingConsent: false,
                    showConnecting: true,
                    agentHiddenInfo: false,
                    clearLocalStorageWhenChatEnded: false,
                    limitTextLength: false,
                  },
                  theme: {
                    title: 'Rocket.Chat',
                    color: '#C1272D',
                    offlineTitle: 'Leave a message',
                    offlineColor: '#666666',
                    actionLinks: [
                      {
                        icon: 'icon-videocam',
                        i18nLabel: 'Accept',
                        method_id: 'createLivechatCall',
                        params: '',
                      },
                      {
                        icon: 'icon-cancel',
                        i18nLabel: 'Decline',
                        method_id: 'denyLivechatCall',
                        params: '',
                      },
                    ],
                  },
                  messages: {
                    offlineMessage: '',
                    offlineSuccessMessage: '',
                    offlineUnavailableMessage: '',
                    conversationFinishedMessage: '',
                    transcriptMessage: '',
                  },
                  survey: {
                    items: [
                      'satisfaction',
                      'agentKnowledge',
                      'agentResposiveness',
                      'agentFriendliness',
                    ],
                    values: ['1', '2', '3', '4', '5'],
                  },
                  departments: [
                    {
                      _id: '652882d8a2f73c7460e18dc4',
                      name: 'Support',
                      showOnRegistration: false,
                      showOnOfflineForm: false,
                      departmentsAllowedToForward: [],
                    },
                    {
                      _id: '64181a0728384134ed600dcc',
                      name: 'Lost',
                      showOnRegistration: false,
                      showOnOfflineForm: false,
                      departmentsAllowedToForward: [],
                    },
                  ],
                  online: true,
                  guest: {
                    _id: '2KNu66RPCwxA4ncy7',
                    username: 'guest-3',
                    token: 'iNKE8a6k6cjbqWhWd',
                    name: 'Livechat Visitor',
                  },
                  room: {
                    _id: 'zRAeTszXor8CCPceB',
                    servedBy: { _id: '7Gm3PoFCJWTCJ68XR', username: 'livechat.agent' },
                    open: true,
                  },
                  agent: {
                    _id: '7Gm3PoFCJWTCJ68XR',
                    emails: [{ address: 'agent@rocket.chat', verified: true }],
                    name: 'Livechat Agent',
                    username: 'livechat.agent',
                  },
                },
                success: true,
              },
            },
          },
        },
      },
    },
  },
})

export const getApiV1LivechatRoomsRoute = createRoute({
  method: 'get',
  path: '/api/v1/livechat/rooms',
  tags: ['Omnichannel Rooms'],
  summary: 'Get List of Omnichannel Rooms',
  description:
    "Retrieves a list of Omnichannel rooms. You can use the available query parameters to filter the response.\nAt least one of the following permissions is required:\n* `view-livechat-rooms`\n* `view-l-room`\n\n### Changelog\n| Version      | Description |\n| ---------------- | ------------|\n|9.0.0   | Removed the `fields` and `query` parameters.       |\n|7.0.0             | Remove support of filtering by agent's username |\n|2.4.0             | Added support to the parameter `roomName`|\n|2.0.0             | Added       |",
  operationId: 'get-api-v1-livechat-rooms',
  request: {
    headers: z.object({ 'X-Auth-Token': AuthTokenParamsSchema, 'X-User-Id': UserIdParamsSchema }),
    query: z.object({
      agents: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.string()),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'agents',
            in: 'query',
            description: 'A list of agent IDs.',
            schema: { type: 'array', items: { type: 'string' } },
            example: "['b32h3b2hhwb25d']",
            required: false,
          },
        }),
      departmentId: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'departmentId',
            in: 'query',
            description:
              'The department ID. You can also enter multiple IDs as an array of string values.',
            schema: { type: 'string' },
            example: 'AkzpHAvZpdnuchw2a',
            required: false,
          },
        }),
      open: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            name: 'open',
            in: 'query',
            description: 'If it should filter by open/closed rooms.',
            schema: { type: 'boolean' },
            example: true,
            required: false,
          },
        }),
      createdAt: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'createdAt',
            in: 'query',
            description:
              'An object representing when the room was created (can also be filtered only with `start` or `end`).',
            schema: { type: 'string' },
            example: '{"start": "2018-01-26T00:11:22.345Z", "end": "2018-01-26T00:11:22.345Z"}',
            required: false,
          },
        }),
      closedAt: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'closedAt',
            in: 'query',
            description:
              'An object representing when the room was closed (can also be filtered only with `start` or `end`).',
            schema: { type: 'string' },
            example: '{"start": "2018-01-26T00:11:22.345Z", "end": "2018-01-26T00:11:22.345Z"}',
            required: false,
          },
        }),
      tags: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'tags',
            in: 'query',
            description: 'A list of tags.',
            schema: { type: 'string' },
            example: "['rocket', 'chat']",
            required: false,
          },
        }),
      customFields: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'customFields',
            in: 'query',
            description:
              'An object with custom fields to be filtered (previously created and populated at custom fields endpoints)',
            schema: { type: 'string' },
            example: '{"docId": "aobEdbYhXfu5hkeqG"}',
            required: false,
          },
        }),
      roomName: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'roomName',
            in: 'query',
            description: "The room's name.",
            schema: { type: 'string' },
            example: 'room-name',
            required: false,
          },
        }),
      onhold: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            schema: { type: 'boolean' },
            in: 'query',
            name: 'onhold',
            description: 'Whether you want to include rooms that are on hold or not.',
            required: false,
          },
        }),
      queued: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            schema: { type: 'string' },
            in: 'query',
            name: 'queued',
            description: 'Whether you want to include queued rooms or not.',
            required: false,
          },
        }),
      units: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.string()),
        )
        .exactOptional()
        .openapi({
          param: {
            schema: { type: 'array', items: { type: 'string' } },
            example: "['b32h3b2hhwb25d', 'b32h3b2aaaa']",
            in: 'query',
            name: 'units',
            description: 'Enter the unit IDs you want to include as an array of string values.',
            required: false,
          },
        }),
      offset: OffsetParamsSchema,
      count: CountParamsSchema,
      sort: SortParamsSchema,
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': {
          schema: z
            .object({
              rooms: z
                .array(
                  z
                    .object({
                      _id: z.string().exactOptional(),
                      msgs: z.int().exactOptional(),
                      usersCount: z.int().exactOptional(),
                      lm: z.string().exactOptional(),
                      fname: z.string().exactOptional(),
                      t: z.string().exactOptional(),
                      ts: z.string().exactOptional(),
                      v: z
                        .object({
                          _id: z.string().exactOptional(),
                          username: z.string().exactOptional(),
                          token: z.string().exactOptional(),
                          status: z.string().exactOptional(),
                        })
                        .exactOptional()
                        .openapi({ required: [] }),
                      servedBy: z
                        .object({
                          _id: z.string().exactOptional(),
                          username: z.string().exactOptional(),
                          ts: z.string().exactOptional(),
                        })
                        .exactOptional()
                        .openapi({ required: [] }),
                      cl: z.boolean().exactOptional(),
                      open: z.boolean().exactOptional(),
                      waitingResponse: z.boolean().exactOptional(),
                      departmentId: z.string().exactOptional(),
                      _updatedAt: z.string().exactOptional(),
                      lastMessage: z
                        .object({
                          _id: z.string().exactOptional(),
                          rid: z.string().exactOptional(),
                          msg: z.string().exactOptional(),
                          token: z.string().exactOptional(),
                          alias: z.string().exactOptional(),
                          ts: z.string().exactOptional(),
                          u: z
                            .object({
                              _id: z.string().exactOptional(),
                              username: z.string().exactOptional(),
                              name: z.string().exactOptional(),
                            })
                            .exactOptional()
                            .openapi({ required: [] }),
                          _updatedAt: z.string().exactOptional(),
                          mentions: z.array(z.looseObject({})).exactOptional(),
                          channels: z.array(z.looseObject({})).exactOptional(),
                          newRoom: z.boolean().exactOptional(),
                          showConnecting: z.boolean().exactOptional(),
                        })
                        .exactOptional()
                        .openapi({ required: [] }),
                      metrics: z
                        .object({
                          v: z
                            .object({ lq: z.string().exactOptional() })
                            .exactOptional()
                            .openapi({ required: [] }),
                        })
                        .exactOptional()
                        .openapi({ required: [] }),
                      livechatData: z
                        .object({ docId: z.string().exactOptional() })
                        .exactOptional()
                        .openapi({ required: [] }),
                      tags: z.array(z.string()).exactOptional(),
                      name: z.string().exactOptional(),
                    })
                    .openapi({ required: [] }),
                )
                .exactOptional(),
              count: z.int().exactOptional(),
              offset: z.int().exactOptional(),
              total: z.int().exactOptional(),
              success: z.boolean().exactOptional(),
            })
            .openapi({ required: [] }),
          examples: {
            'Success Example': {
              value: {
                rooms: [
                  {
                    _id: '9dQMveZhqxiDgCM3B',
                    msgs: 1,
                    usersCount: 1,
                    lm: '2019-08-09T20:18:02.350Z',
                    fname: 'Marcos Defendi',
                    t: 'l',
                    ts: '2019-08-09T20:18:02.108Z',
                    v: {
                      _id: 'xh45w4y7oPW5SiMJu',
                      username: 'guest-4',
                      token: 'xn5hdkyptei11m07f3me',
                      status: 'online',
                    },
                    servedBy: {
                      _id: '3kyWm8PsmwhC7xgwg',
                      username: 'marcos',
                      ts: '2019-08-09T20:18:02.109Z',
                    },
                    cl: false,
                    open: true,
                    waitingResponse: true,
                    departmentId: 'xnmXQmytuvxp2TuSC',
                    _updatedAt: '2019-08-09T20:19:34.856Z',
                    lastMessage: {
                      _id: 'TBEz7zSCBaKsfyrzc',
                      rid: '9dQMveZhqxiDgCM3B',
                      msg: 'Hello',
                      token: 'xn5hdkyptei11m07f3me',
                      alias: 'Marcos Defendi',
                      ts: '2019-08-09T20:18:02.350Z',
                      u: { _id: 'xh45w4y7oPW5SiMJu', username: 'guest-4', name: 'Marcos Defendi' },
                      _updatedAt: '2019-08-09T20:18:02.383Z',
                      mentions: [],
                      channels: [],
                      newRoom: false,
                      showConnecting: false,
                    },
                    metrics: { v: { lq: '2019-08-09T20:18:02.350Z' } },
                    livechatData: { docId: '0310584343112' },
                    tags: ['rocket', 'chat'],
                    name: 'Marcos Defendi',
                  },
                ],
                count: 1,
                offset: 1,
                total: 7,
                success: true,
              },
            },
          },
        },
      },
    },
    401: AuthorizationErrorResponse,
    403: PermissionErrorResponse,
  },
})

export const getApiV1LivechatRoomRoute = createRoute({
  method: 'get',
  path: '/api/v1/livechat/room',
  tags: ['Omnichannel Rooms'],
  summary: 'Get or Create Omnichannel Rooms',
  description:
    "Get the data of an existing room of a visitor. If a room doesn't exist for the visitor, a new room is created.",
  operationId: 'get-api-v1-livechat-room',
  request: {
    query: z.object({
      token: z
        .string()
        .openapi({
          param: {
            name: 'token',
            in: 'query',
            description: 'The visitor token.',
            required: true,
            schema: { type: 'string' },
            example: 'iNKE8a6k6cjbqWhWd',
          },
        }),
      rid: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'rid',
            in: 'query',
            description: 'The room ID.',
            schema: { type: 'string' },
            example: 'kCJDd5peKiZnGJLPq',
            required: false,
          },
        }),
      agentId: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'agentId',
            in: 'query',
            description: 'The agent ID.',
            schema: { type: 'string' },
            example: 'XycfA5CetCPuEjqxw',
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
              room: z
                .object({
                  _id: z.string().exactOptional(),
                  fname: z.string().exactOptional(),
                  t: z.string().exactOptional(),
                  v: z
                    .object({
                      _id: z.string().exactOptional(),
                      username: z.string().exactOptional(),
                      token: z.string().exactOptional(),
                      status: z.string().exactOptional(),
                      lastMessageTs: z.string().exactOptional(),
                    })
                    .exactOptional()
                    .openapi({ required: [] }),
                  departmentId: z.string().exactOptional(),
                  default: z.boolean().exactOptional(),
                  ro: z.boolean().exactOptional(),
                  sysMes: z.boolean().exactOptional(),
                  open: z.boolean().exactOptional(),
                  msgs: z.int().exactOptional(),
                  ts: z.string().exactOptional(),
                  _updatedAt: z.string().exactOptional(),
                  lm: z.string().exactOptional(),
                  customFields: z
                    .object({ salesforceCrmContactId: z.string().exactOptional() })
                    .exactOptional()
                    .openapi({ required: [] }),
                  usersCount: z.int().exactOptional(),
                  cl: z.boolean().exactOptional(),
                  departmentAncestors: z.array(z.string()).exactOptional(),
                  lastMessage: z
                    .object({
                      _id: z.string().exactOptional(),
                      rid: z.string().exactOptional(),
                      msg: z.string().exactOptional(),
                      token: z.string().exactOptional(),
                      alias: z.string().exactOptional(),
                      ts: z.string().exactOptional(),
                      u: z
                        .object({
                          _id: z.string().exactOptional(),
                          username: z.string().exactOptional(),
                          name: z.string().exactOptional(),
                        })
                        .exactOptional()
                        .openapi({ required: [] }),
                      _updatedAt: z.string().exactOptional(),
                      urls: z.array(z.looseObject({})).exactOptional(),
                      mentions: z.array(z.looseObject({})).exactOptional(),
                      channels: z.array(z.looseObject({})).exactOptional(),
                      md: z
                        .array(
                          z
                            .object({
                              type: z.string().exactOptional(),
                              value: z
                                .array(
                                  z
                                    .object({
                                      type: z.string().exactOptional(),
                                      value: z.string().exactOptional(),
                                    })
                                    .openapi({ required: [] }),
                                )
                                .exactOptional(),
                            })
                            .openapi({ required: [] }),
                        )
                        .exactOptional(),
                      newRoom: z.boolean().exactOptional(),
                      showConnecting: z.boolean().exactOptional(),
                    })
                    .exactOptional()
                    .openapi({ required: [] }),
                  metrics: z
                    .object({
                      reaction: z
                        .object({
                          fd: z.string().exactOptional(),
                          ft: z.number().exactOptional(),
                          tt: z.number().exactOptional(),
                        })
                        .exactOptional()
                        .openapi({ required: [] }),
                      response: z
                        .object({
                          avg: z.number().exactOptional(),
                          fd: z.string().exactOptional(),
                          ft: z.number().exactOptional(),
                          total: z.int().exactOptional(),
                          tt: z.number().exactOptional(),
                        })
                        .exactOptional()
                        .openapi({ required: [] }),
                      v: z
                        .object({ lq: z.string().exactOptional() })
                        .exactOptional()
                        .openapi({ required: [] }),
                      servedBy: z
                        .object({ lr: z.string().exactOptional() })
                        .exactOptional()
                        .openapi({ required: [] }),
                    })
                    .exactOptional()
                    .openapi({ required: [] }),
                  servedBy: z
                    .object({
                      _id: z.string().exactOptional(),
                      username: z.string().exactOptional(),
                      ts: z.string().exactOptional(),
                    })
                    .exactOptional()
                    .openapi({ required: [] }),
                  waitingResponse: z.boolean().exactOptional(),
                })
                .exactOptional()
                .openapi({ required: [] }),
              newRoom: z.boolean().exactOptional(),
              success: z.boolean().exactOptional(),
            })
            .openapi({ required: [] }),
          examples: {
            'Success Example': {
              value: {
                room: {
                  _id: 'kCJDd5peKiZnGJLPq',
                  fname: 'Mary',
                  t: 'l',
                  v: {
                    _id: '47Dajwh9DjpnTAugW',
                    username: 'guest-165',
                    token: '8s7e9ony6ctl27e1qf8kue',
                    status: 'offline',
                    lastMessageTs: '2021-07-09T20:20:58.755Z',
                  },
                  departmentId: 'CAJioQNAvLnYWTy8i',
                  default: false,
                  ro: false,
                  sysMes: true,
                  open: true,
                  msgs: 7,
                  ts: '2021-07-09T20:12:19.795Z',
                  _updatedAt: '2021-07-09T20:21:07.334Z',
                  lm: '2021-07-09T20:20:58.755Z',
                  customFields: { salesforceCrmContactId: '0032y000009mtOIAAY' },
                  usersCount: 2,
                  cl: false,
                  departmentAncestors: ['sriw2wmP2Zz2pPrre'],
                  lastMessage: {
                    _id: 'SgrsSm3HNGrG5xTmk',
                    rid: 'kCJDd5peKiZnGJLPq',
                    msg: 'd',
                    token: '8s7e9ony6ctl27e1qf8kue',
                    alias: 'Mary',
                    ts: '2021-07-09T20:20:58.755Z',
                    u: { _id: '47Dajwh9DjpnTAugW', username: 'guest-165', name: 'Mary' },
                    _updatedAt: '2021-07-09T20:20:58.896Z',
                    urls: [],
                    mentions: [],
                    channels: [],
                    md: [{ type: 'PARAGRAPH', value: [{ type: 'PLAIN_TEXT', value: 'd' }] }],
                    newRoom: false,
                    showConnecting: true,
                  },
                  metrics: {
                    reaction: { fd: '2021-07-09T20:19:53.243Z', ft: 23.821, tt: 24.006 },
                    response: {
                      avg: 226.4365,
                      fd: '2021-07-09T20:19:53.243Z',
                      ft: 452.688,
                      total: 2,
                      tt: 452.873,
                    },
                    v: { lq: '2021-07-09T20:20:58.755Z' },
                    servedBy: { lr: '2021-07-09T20:19:53.077Z' },
                  },
                  servedBy: {
                    _id: 'XycfA5CetCPuEjqxw',
                    username: 'jane.doe',
                    ts: '2021-07-09T20:19:29.422Z',
                  },
                  waitingResponse: true,
                },
                newRoom: false,
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
            .object({ success: z.boolean().exactOptional(), error: z.string().exactOptional() })
            .openapi({ required: [] }),
          examples: {
            'Example 1': { value: { success: false, error: "Match error: Missing key 'token'" } },
          },
        },
      },
    },
  },
})

export const postApiV1LivechatRoomCloseRoute = createRoute({
  method: 'post',
  path: '/api/v1/livechat/room.close',
  tags: ['Omnichannel Rooms'],
  summary: 'Close Omnichannel Room by Visitor',
  description: 'If you are a visitor, use this endpoint to close the room.',
  operationId: 'post-api-v1-livechat-room.close',
  request: {
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              rid: z
                .string()
                .openapi({ description: 'The room ID.', example: 'XFzMqgn33DcsQkpJp' }),
              token: z
                .string()
                .openapi({ description: 'The visitor token.', example: 'iNKE8a6k6cjbqWhWd' }),
            })
            .openapi({ required: ['rid', 'token'] }),
          examples: {
            'Example 1': { value: { rid: 'XFzMqgn33DcsQkpJp', token: 'iNKE8a6k6cjbqWhWd' } },
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
              rid: z.string().exactOptional(),
              comment: z.string().exactOptional(),
              success: z.boolean().exactOptional(),
            })
            .openapi({ required: [] }),
          examples: {
            'Success Example': {
              value: { rid: 'XFzMqgn33DcsQkpJp', comment: 'Closed by visitor', success: true },
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
                error: "must have required property 'token' [error-invalid-params]",
                errorType: 'error-invalid-params',
              },
            },
            'Example 2': {
              value: {
                success: false,
                error: "must have required property 'rid' [error-invalid-params]",
                errorType: 'error-invalid-params',
              },
            },
          },
        },
      },
    },
  },
})

export const postApiV1LivechatRoomCloseByUserRoute = createRoute({
  method: 'post',
  path: '/api/v1/livechat/room.closeByUser',
  tags: ['Omnichannel Rooms'],
  summary: 'Close Omnichannel Room',
  description:
    'If you are an Omnichannel user (agent, manager), use this endpoint to close the room.',
  operationId: 'post-api-v1-livechat-room.closeByUser',
  request: {
    headers: z.object({ 'X-Auth-Token': AuthTokenParamsSchema, 'X-User-Id': UserIdParamsSchema }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              rid: z
                .string()
                .openapi({ description: 'Enter the room ID.', example: '8ceKgWvo5qT5TrCRN' }),
              comment: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    'Add a description for closing the room. It is required when the [`Request comment when closing conversation`](https://docs.rocket.chat/docs/omnichannel-admins-guide) setting is enabled.',
                }),
              forceClose: z
                .boolean()
                .exactOptional()
                .openapi({
                  description:
                    'Use this parameter to forcefully close a room. Before using this parameter, make sure to enable the [`Force Close Conversation API`](https://docs.rocket.chat/v1/docs/omnichannel-admins-guide#api) setting in **Manage > Workspace > Settings > Omnichannel > API**. Exercise caution when using this parameter and reserve it for situations involving misconfigured rooms.',
                }),
              tags: z
                .array(z.string())
                .exactOptional()
                .openapi({ description: 'Add [tags](https://docs.rocket.chat/docs/tags).' }),
              generateTranscriptPdf: z
                .boolean()
                .exactOptional()
                .openapi({
                  description: 'Enter whether you want to generate a conversation transcript PDF.',
                }),
              transcriptEmail: z
                .object({
                  sendToVisitor: z
                    .boolean()
                    .exactOptional()
                    .openapi({
                      description: 'Enter whether you want to send the transcript to the visitor.',
                    }),
                  requestData: z
                    .object({
                      email: z
                        .string()
                        .exactOptional()
                        .openapi({
                          description:
                            "Enter the visitor's email ID to whom you want to send the transcript.",
                        }),
                      subject: z
                        .string()
                        .exactOptional()
                        .openapi({ description: 'Enter a subject for the email.' }),
                    })
                    .exactOptional()
                    .openapi({ required: [] }),
                })
                .exactOptional()
                .openapi({ required: [] }),
            })
            .openapi({ required: ['rid'] }),
          examples: {
            Example: {
              value: {
                rid: '8ceKgWvo5qT5TrCRN',
                comment: 'close via API',
                tags: ['abc', 'abc'],
                transcriptEmail: {
                  sendToVisitor: true,
                  requestData: { email: 'test@example.com', subject: 'transcript' },
                },
              },
            },
          },
        },
      },
    },
  },
  responses: {
    200: TrueSuccessResponse,
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
            'Invalid parameter': {
              value: {
                success: false,
                error: "must have required property 'rid' [error-invalid-params]",
                errorType: 'error-invalid-params',
              },
            },
            'Room already closed': {
              value: { success: false, error: 'error-room-already-closed' },
            },
          },
        },
      },
    },
    401: AuthorizationErrorResponse,
  },
})

export const getApiV1LivechatRoomJoinRoute = createRoute({
  method: 'get',
  path: '/api/v1/livechat/room.join',
  tags: ['Omnichannel Rooms'],
  summary: 'Join Omnichannel Room',
  description:
    'Call this endpoint to join an Omnichannel room.\nPermission required: `view-l-room`',
  operationId: 'get-api-v1-livechat-room.join',
  request: {
    headers: z.object({ 'X-Auth-Token': AuthTokenParamsSchema, 'X-User-Id': UserIdParamsSchema }),
    query: z.object({
      roomId: z
        .string()
        .openapi({
          param: {
            name: 'roomId',
            in: 'query',
            description: 'The room ID that you want to join.',
            required: true,
            schema: { type: 'string' },
            example: 'gMMeBpWyLeowCrzBv',
          },
        }),
    }),
  },
  responses: {
    200: TrueSuccessResponse,
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
                error: "must have required property 'roomId' [error-invalid-params]",
                errorType: 'error-invalid-params',
              },
            },
            'Example 2': { value: { success: false, error: 'error-invalid-room' } },
          },
        },
      },
    },
    401: AuthorizationErrorResponse,
    403: PermissionErrorResponse,
  },
})

export const postApiV1LivechatRoomSaveInfoRoute = createRoute({
  method: 'post',
  path: '/api/v1/livechat/room.saveInfo',
  tags: ['Omnichannel Rooms'],
  summary: 'Update Omnichannel Room',
  description:
    'Edit an Omnichannel room. Update the topic, tags, and other details.\nPermission required: `view-l-room`\n\n### Changelog\n| Version      | Description |\n| ---------------- | ------------|\n|5.3.0            | Added       |',
  operationId: 'post-api-v1-livechat-room.saveInfo',
  request: {
    headers: z.object({ 'X-Auth-Token': AuthTokenParamsSchema, 'X-User-Id': UserIdParamsSchema }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              guestData: z
                .object({
                  _id: z.string().openapi({ description: 'The guest ID.' }),
                  name: z
                    .string()
                    .exactOptional()
                    .openapi({ description: 'The name  of the guest.' }),
                  email: z
                    .string()
                    .exactOptional()
                    .openapi({ description: 'The email of the guest.' }),
                  phone: z
                    .string()
                    .exactOptional()
                    .openapi({ description: 'The contact of the guest. ' }),
                  livechatData: z
                    .looseObject({})
                    .exactOptional()
                    .openapi({ description: 'Custom fields information.' }),
                })
                .exactOptional()
                .openapi({ required: ['_id'] }),
              roomData: z
                .object({
                  _id: z.string().openapi({ description: 'The room ID.' }),
                  topic: z
                    .string()
                    .exactOptional()
                    .openapi({ description: 'The topic of the room.' }),
                  tags: z
                    .array(z.string())
                    .exactOptional()
                    .openapi({ description: 'An array of tags to be associated with the room.' }),
                  priorityId: z
                    .string()
                    .exactOptional()
                    .openapi({ description: 'The priority ID of the room.' }),
                  slaId: z
                    .string()
                    .exactOptional()
                    .openapi({ description: 'The SLA priority ID of the room.' }),
                  livechatData: z
                    .looseObject({})
                    .exactOptional()
                    .openapi({ description: 'Custom fields information.' }),
                })
                .exactOptional()
                .openapi({ required: ['_id'] }),
            })
            .openapi({ required: [] }),
          examples: {
            'Example 1': {
              value: {
                guestData: { _id: 'rbAXPnMktTFbNpwtJ' },
                roomData: { _id: 'nf52k8bpJ8y7oHmwk', topic: 'Hmm', tags: ['testtags'] },
              },
            },
          },
        },
      },
    },
  },
  responses: {
    200: TrueSuccessResponse,
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
                error: "must have required property 'guestData' [error-invalid-params]",
                errorType: 'error-invalid-params',
              },
            },
            'Example 2': {
              value: {
                success: false,
                error: "must have required property 'roomData' [error-invalid-params]",
                errorType: 'error-invalid-params',
              },
            },
          },
        },
      },
    },
    401: AuthorizationErrorResponse,
    403: PermissionErrorResponse,
  },
})

export const postApiV1LivechatRoomForwardRoute = createRoute({
  method: 'post',
  path: '/api/v1/livechat/room.forward',
  tags: ['Omnichannel Rooms'],
  summary: 'Forward Omnichannel Room',
  description:
    'Use this endpoint to transfer  a chat to another department or agent. When transfering the chat to another department, you can also specify a default agent in that department to receive the chat if  an [auto-assignment routing algorithm](https://docs.rocket.chat/docs/queue-types-routing-algorithm) is enabled.\n\n### Changelog\n| Version | Description  |\n| ------- |--------------|\n| 7.10.0  | Added support for selecting a default agent when transferring chat to another department.         |',
  operationId: 'post-api-v1-livechat-room.forward',
  request: {
    headers: z.object({ 'X-Auth-Token': AuthTokenParamsSchema, 'X-User-Id': UserIdParamsSchema }),
    body: {
      description: '',
      content: {
        'application/json': {
          schema: z
            .object({
              roomId: z.string().openapi({ description: 'The room ID.' }),
              userId: z.string().exactOptional().openapi({ description: 'The new agent ID.' }),
              departmentId: z
                .string()
                .exactOptional()
                .openapi({ description: 'The new department ID.' }),
            })
            .openapi({ required: ['roomId'] }),
          examples: {
            Example: { value: { roomId: 'XFzMqgn33DcsQkpJp', userId: 'iNKE8a6k6cjbqWhWd' } },
          },
        },
      },
    },
  },
  responses: {
    200: TrueSuccessResponse,
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
            Example: {
              value: {
                success: false,
                error: "must have required property 'roomId' [error-invalid-params]",
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

export const getApiV1LivechatTransferHistoryRidRoute = createRoute({
  method: 'get',
  path: '/api/v1/livechat/transfer.history/{rid}',
  tags: ['Omnichannel Rooms'],
  summary: 'Get Department Transfer History',
  description:
    'Retrieve the conversation transfer history from one department to another.\nPermission required: `view-livechat-rooms`',
  operationId: 'get-api-v1-livechat-transfer.history-:rid',
  request: {
    params: z.object({
      rid: z
        .string()
        .openapi({
          param: {
            name: 'rid',
            in: 'path',
            description: 'The room ID',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      count: CountParamsSchema,
      offset: OffsetParamsSchema,
      sort: SortParamsSchema,
    }),
    headers: z.object({ 'X-Auth-Token': AuthTokenParamsSchema, 'X-User-Id': UserIdParamsSchema }),
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': {
          schema: z
            .object({
              history: z.array(z.looseObject({})).exactOptional(),
              count: z.int().exactOptional(),
              offset: z.int().exactOptional(),
              data: z
                .object({
                  history: z
                    .array(
                      z
                        .object({
                          transferredBy: z
                            .object({
                              _id: z.string().exactOptional(),
                              username: z.string().exactOptional(),
                              name: z.string().exactOptional(),
                              type: z.string().exactOptional(),
                            })
                            .exactOptional()
                            .openapi({ required: [] }),
                          ts: z.string().exactOptional(),
                          scope: z.string().exactOptional(),
                          previousDepartment: z.string().exactOptional(),
                          nextDepartment: z
                            .object({
                              _id: z.string().exactOptional(),
                              name: z.string().exactOptional(),
                            })
                            .exactOptional()
                            .openapi({ required: [] }),
                        })
                        .openapi({ required: [] }),
                    )
                    .exactOptional(),
                  count: z.int().exactOptional(),
                  offset: z.int().exactOptional(),
                  total: z.int().exactOptional(),
                  success: z.boolean().exactOptional(),
                })
                .exactOptional()
                .openapi({ required: [] }),
              total: z.int().exactOptional(),
              success: z.boolean().exactOptional(),
            })
            .openapi({ required: [] }),
          examples: {
            'Success Example': {
              value: {
                history: [{}],
                count: 0,
                offset: 0,
                data: {
                  history: [
                    {
                      transferredBy: {
                        _id: 'string',
                        username: 'string',
                        name: 'string',
                        type: 'string',
                      },
                      ts: 'string',
                      scope: 'string',
                      previousDepartment: 'string',
                      nextDepartment: { _id: 'string', name: 'string' },
                    },
                  ],
                  count: 0,
                  offset: 0,
                  total: 0,
                  success: true,
                },
                total: 0,
                success: true,
              },
            },
          },
        },
      },
    },
    401: AuthorizationErrorResponse,
    403: PermissionErrorResponse,
  },
})

export const postApiV1LivechatRoomSurveyRoute = createRoute({
  method: 'post',
  path: '/api/v1/livechat/room.survey',
  tags: ['Omnichannel Rooms'],
  summary: 'Survey Omnichannel Room',
  description: 'Provide feedback on an Omnichannel room.',
  operationId: 'post-api-v1-livechat-room.survey',
  request: {
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              rid: z.string().openapi({ description: 'The room ID.' }),
              token: z.string().openapi({ description: 'The visitor token.' }),
              data: z
                .array(
                  z
                    .object({ name: z.string().exactOptional(), value: z.string().exactOptional() })
                    .openapi({ required: [] }),
                )
                .openapi({
                  description: 'An array of object with `name` and `value` to provide feedback.',
                }),
            })
            .openapi({ required: ['rid', 'token', 'data'] }),
          examples: {
            'Example 1': {
              value: {
                rid: 'gMMeBpWyLeowCrzBv',
                token: 'd4a8338e5a7d98b6750b4f839431b34a3f4813b2c43f7d89597948f21f607bb4',
                data: [{ name: 'additionalFeedback', value: 'Thankszzzzz' }],
              },
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
          schema: z
            .object({
              rid: z.string().exactOptional(),
              data: z
                .object({ additionalFeedback: z.string().exactOptional() })
                .exactOptional()
                .openapi({ required: [] }),
              success: z.boolean().exactOptional(),
            })
            .openapi({ required: [] }),
          examples: {
            'Success Example': {
              value: {
                rid: 'gMMeBpWyLeowCrzBv',
                data: { additionalFeedback: 'Thankszzzzz' },
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
                error: "must have required property 'token' [error-invalid-params]",
                errorType: 'error-invalid-params',
              },
            },
          },
        },
      },
    },
  },
})

export const postApiV1LivechatRoomOnHoldRoute = createRoute({
  method: 'post',
  path: '/api/v1/livechat/room.onHold',
  tags: ['Omnichannel Rooms'],
  summary: 'Put Omnichannel Room on Hold',
  description:
    '<div style="text-align: center; margin: 1rem 0 1rem 0;"><img src="https://raw.githubusercontent.com/RocketChat/Rocket.Chat-Open-API/main/images/Enterprise%20tag.svg" alt="Enterprise" style="display: block; margin: auto"></div>\n\nPut an active conversation on hold.',
  operationId: 'post-api-v1-livechat-room.onHold',
  request: {
    headers: z.object({ 'X-User-Id': UserIdParamsSchema, 'X-Auth-Token': AuthTokenParamsSchema }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({ roomId: z.string().openapi({ description: 'Active Omnichannel room ID.' }) })
            .openapi({ required: ['roomId'] }),
          examples: { 'Example 1': { value: { roomId: 'Z7223PfNPwH7ihQPh' } } },
        },
      },
    },
  },
  responses: {
    200: TrueSuccessResponse,
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
                error: "must have required property 'roomId' [error-invalid-params]",
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

export const postApiV1LivechatUploadRidRoute = createRoute({
  method: 'post',
  path: '/api/v1/livechat/upload/{rid}',
  tags: ['Omnichannel Rooms'],
  summary: 'Upload Files to Room',
  description: 'Upload files to an Omnichannel room.',
  operationId: 'post-api-v1-livechat-upload',
  request: {
    headers: z.object({
      'x-visitor-token': z
        .string()
        .openapi({
          param: {
            name: 'x-visitor-token',
            in: 'header',
            description: 'The visitor token',
            required: true,
            schema: { type: 'string' },
            example: 'iNKE8a6k6cjyPyOyI',
          },
        }),
    }),
    params: z.object({
      rid: z
        .string()
        .openapi({
          param: {
            name: 'rid',
            in: 'path',
            description: 'The room ID.',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      content: {
        'multipart/form-data': {
          schema: z
            .object({
              file: z.string().openapi({ description: 'The file to be uploaded.' }),
              description: z
                .string()
                .exactOptional()
                .openapi({ description: 'The file description.' }),
            })
            .openapi({ required: ['file'] }),
          examples: {
            'Example 1': {
              value: {
                file: '/home/rodriq/Desktop/cod.png',
                description: 'image file description here',
              },
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
          schema: z
            .object({
              _id: z.string().exactOptional(),
              rid: z.string().exactOptional(),
              msg: z.string().exactOptional(),
              token: z.string().exactOptional(),
              file: z
                .object({
                  _id: z.string().exactOptional(),
                  name: z.string().exactOptional(),
                  type: z.string().exactOptional(),
                })
                .exactOptional()
                .openapi({ required: [] }),
              attachments: z
                .array(
                  z
                    .object({
                      ts: z.string().exactOptional(),
                      title: z.string().exactOptional(),
                      title_link: z.string().exactOptional(),
                      title_link_download: z.boolean().exactOptional(),
                      image_dimensions: z
                        .object({ width: z.int().exactOptional(), height: z.int().exactOptional() })
                        .exactOptional()
                        .openapi({ required: [] }),
                      image_preview: z.string().exactOptional(),
                      image_url: z.string().exactOptional(),
                      image_type: z.string().exactOptional(),
                      image_size: z.int().exactOptional(),
                      type: z.string().exactOptional(),
                      description: z.string().exactOptional(),
                      descriptionMd: z
                        .array(
                          z
                            .object({
                              type: z.string().exactOptional(),
                              value: z
                                .array(
                                  z
                                    .object({
                                      type: z.string().exactOptional(),
                                      value: z.string().exactOptional(),
                                    })
                                    .openapi({ required: [] }),
                                )
                                .exactOptional(),
                            })
                            .openapi({ required: [] }),
                        )
                        .exactOptional(),
                    })
                    .openapi({ required: [] }),
                )
                .exactOptional(),
              alias: z.string().exactOptional(),
              ts: z.string().exactOptional(),
              u: z
                .object({
                  _id: z.string().exactOptional(),
                  username: z.string().exactOptional(),
                  name: z.string().exactOptional(),
                })
                .exactOptional()
                .openapi({ required: [] }),
              _updatedAt: z.string().exactOptional(),
              urls: z.array(z.looseObject({})).exactOptional(),
              mentions: z.array(z.looseObject({})).exactOptional(),
              channels: z.array(z.looseObject({})).exactOptional(),
              newRoom: z.boolean().exactOptional(),
              showConnecting: z.boolean().exactOptional(),
              success: z.boolean().exactOptional(),
            })
            .openapi({ required: [] }),
          examples: {
            'Success Example': {
              value: {
                _id: 'CeswhhAKTQMsnEbc8',
                rid: 'cbjQCtywHbuTYzmLx',
                msg: '',
                token: '932a1c3019aeeaa9b687bb04b979d',
                file: { _id: 'uredcLri4GdehDQnD', name: 'globe.png', type: 'image/png' },
                attachments: [
                  {
                    ts: '1970-01-01T00:00:00.000Z',
                    title: 'globe.png',
                    title_link: '/file-upload/uredcLri4GdehDQnD/globe.png',
                    title_link_download: true,
                    image_dimensions: { width: 1746, height: 1624 },
                    image_preview:
                      '/9j/2wBDAAYEBQYFBAYGzMKHSdwCQf2EhyBetVviuOVGrulRJ9NsHpQPgQH/9k=',
                    image_url: '/file-upload/uredcLri4GdehDQnD/globe.png',
                    image_type: 'image/png',
                    image_size: 562975,
                    type: 'file',
                    description: 'Here is the file',
                    descriptionMd: [
                      {
                        type: 'PARAGRAPH',
                        value: [{ type: 'PLAIN_TEXT', value: 'Here is the file' }],
                      },
                    ],
                  },
                ],
                alias: 'James',
                ts: '2023-03-21T16:21:39.131Z',
                u: { _id: '6410766605957d866e0fcf37', username: 'guest-3', name: 'James' },
                _updatedAt: '2023-03-21T16:21:39.173Z',
                urls: [],
                mentions: [],
                channels: [],
                newRoom: false,
                showConnecting: false,
                success: true,
              },
            },
          },
        },
      },
    },
    403: {
      description: 'Forbidden',
      content: {
        'application/json': {
          schema: z
            .object({ success: z.boolean().exactOptional(), error: z.string().exactOptional() })
            .openapi({ required: [] }),
          examples: { 'Example 1': { value: { success: false, error: 'forbidden' } } },
        },
      },
    },
  },
})

export const postApiV1LivechatRoomRidPriorityRoute = createRoute({
  method: 'post',
  path: '/api/v1/livechat/room/{rid}/priority',
  tags: ['Omnichannel Rooms'],
  summary: 'Set Omnichannel Room Priority',
  description:
    '<div style="text-align: center; margin: 1rem 0 1rem 0;"><img src="https://raw.githubusercontent.com/RocketChat/Rocket.Chat-Open-API/main/images/Enterprise%20tag.svg" alt="Enterprise" style="display: block; margin: auto"></div>\n\nSet the priority of an Omnichannel room.\n\nPermission required: `view-l-room`\n\n### Changelog\n| Version | Description  |\n| ------- |--------------|\n| 6.0.0  | Added         |',
  operationId: 'post-api-v1-livechat-room-rid-priority',
  request: {
    headers: z.object({ 'X-Auth-Token': AuthTokenParamsSchema, 'X-User-Id': UserIdParamsSchema }),
    params: z.object({
      rid: z
        .string()
        .openapi({
          param: {
            name: 'rid',
            in: 'path',
            description: 'The room ID.',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              priorityId: z.string().openapi({ description: 'The ID of the priority to set.' }),
            })
            .openapi({ required: ['priorityId'] }),
          examples: { 'Example 1': { value: { priorityId: '64007cc2fa0ed7dd905092e6' } } },
        },
      },
    },
  },
  responses: {
    200: TrueSuccessResponse,
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
                error: "must have required property 'priorityId' [error-invalid-params]",
                errorType: 'error-invalid-params',
              },
            },
          },
        },
      },
    },
    401: AuthorizationErrorResponse,
    403: PermissionErrorResponse,
  },
})

export const deleteApiV1LivechatRoomRidPriorityRoute = createRoute({
  method: 'delete',
  path: '/api/v1/livechat/room/{rid}/priority',
  tags: ['Omnichannel Rooms'],
  summary: 'Remove Omnichannel Room Priority',
  description:
    '<div style="text-align: center; margin: 1rem 0 1rem 0;"><img src="https://raw.githubusercontent.com/RocketChat/Rocket.Chat-Open-API/main/images/Enterprise%20tag.svg" alt="Enterprise" style="display: block; margin: auto"></div>\n\nRemove the priority set to an Omnichannel room.\n\nPermission required: `view-l-room`\n\n### Changelog\n| Version | Description  |\n| ------- |--------------|\n| 6.0.0  | Added         |',
  operationId: 'delete-api-v1-livechat-room-rid-priority',
  request: {
    headers: z.object({ 'X-Auth-Token': AuthTokenParamsSchema, 'X-User-Id': UserIdParamsSchema }),
    params: z.object({
      rid: z
        .string()
        .openapi({
          param: {
            name: 'rid',
            in: 'path',
            description: 'The room ID.',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: TrueSuccessResponse,
    401: AuthorizationErrorResponse,
    403: PermissionErrorResponse,
  },
})

export const postApiV1LivechatRoomsRemoveAllClosedRoomsRoute = createRoute({
  method: 'post',
  path: '/api/v1/livechat/rooms.removeAllClosedRooms',
  tags: ['Omnichannel Rooms'],
  summary: 'Remove Closed Omnichannel Rooms',
  description:
    'Use this endpoint to remove closed Omnichannel rooms. \n\nPermission required: `remove-closed-livechat-rooms`. (On the workspace UI, go to **Manage** > **Workspace** > **Permissions**. Search for the `Remove All Closed Omnichannel Rooms` permission. By default, livechat managers and monitors have this permission.)\n\n### Changelog\n| Version      | Description |\n| ---------------- | ------------|\n|9.0.0   | The `403` response returns `errorType: error-forbidden`.       |\n|7.11.0            | Added       |',
  operationId: 'post-api-v1-livechat-rooms.removeAllClosedRooms',
  request: {
    headers: z.object({ 'X-Auth-Token': AuthTokenParamsSchema, 'X-User-Id': UserIdParamsSchema }),
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': {
          schema: z
            .object({ removedRooms: z.int().exactOptional(), success: z.boolean().exactOptional() })
            .openapi({
              'x-examples': { 'Example 1': { removedRooms: 19, success: true } },
              required: [],
            }),
          examples: { 'Example 1': { value: { removedRooms: 19, success: true } } },
        },
      },
    },
    401: AuthorizationErrorResponse,
    403: {
      description: 'Forbidden',
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
                error: 'User does not have the permissions required for this action',
                errorType: 'error-forbidden',
              },
            },
          },
        },
      },
    },
  },
})

export const postApiV1LivechatRoomsDeleteRoute = createRoute({
  method: 'post',
  path: '/api/v1/livechat/rooms.delete',
  tags: ['Omnichannel Rooms'],
  summary: 'Remove a Closed Omnichannel Room',
  description:
    'Use this endpoint to delete a specific closed Omnichannel room from the workspace. Permission required: `remove-closed-livechat-room`\n\n### Changelog\n| Version      | Description |\n| ---------------- | ------------|\n|7.12.0            | Added       |',
  operationId: 'post-api-v1-livechat-rooms.delete',
  request: {
    headers: z.object({ 'X-Auth-Token': AuthTokenParamsSchema, 'X-User-Id': UserIdParamsSchema }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              roomId: z
                .string()
                .openapi({
                  description: 'Enter the ID of the closed livechat room that you want to delete.',
                  example: 'nXHYnNu38qKRRtZDi',
                }),
            })
            .openapi({ required: ['roomId'] }),
          examples: { 'Example 1': { value: { roomId: 'nXHYnNu38qKRRtZDi' } } },
        },
      },
    },
  },
  responses: {
    200: TrueSuccessResponse,
    400: {
      description: 'Bad Request',
      content: {
        'application/json': {
          schema: z
            .object({
              success: z.boolean().exactOptional(),
              errorType: z.string().exactOptional(),
              error: z.string().exactOptional(),
            })
            .openapi({ required: [] }),
          examples: {
            'Example 1': {
              value: {
                success: false,
                errorType: 'error-invalid-params',
                error: "must have required property 'roomId'",
              },
            },
          },
        },
      },
    },
    401: AuthorizationErrorResponse,
  },
})

export const postApiV1LivechatRoomResumeOnHoldRoute = createRoute({
  method: 'post',
  path: '/api/v1/livechat/room.resumeOnHold',
  tags: ['Omnichannel Rooms'],
  summary: 'Resume Room On-Hold',
  description:
    '<div style="text-align: center; margin: 1rem 0 1rem 0;"><img src="https://raw.githubusercontent.com/RocketChat/Rocket.Chat-Open-API/main/images/Enterprise%20tag.svg" alt="Enterprise" style="display: block; margin: auto"></div>\n\nUse this endpoint to resume a room that was on-hold. Permission required: `view-l-room`',
  operationId: 'post-api-v1-livechat-room.resumeOnHold',
  request: {
    headers: z.object({ 'X-Auth-Token': AuthTokenParamsSchema, 'X-User-Id': UserIdParamsSchema }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              roomId: z
                .string()
                .openapi({
                  description: 'Enter the Omnichannel room ID that you want to resume.',
                  example: 'dCBiZX3XPWyPsa6pt',
                }),
            })
            .openapi({ required: ['roomId'] }),
          examples: { 'Example 1': { value: { roomId: 'dCBiZX3XPWyPsa6pt' } } },
        },
      },
    },
  },
  responses: {
    200: TrueSuccessResponse,
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
                error: "must have required property 'roomId' [error-invalid-params]",
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

export const getApiV1LivechatRoomsFiltersRoute = createRoute({
  method: 'get',
  path: '/api/v1/livechat/rooms/filters',
  tags: ['Omnichannel Rooms'],
  summary: 'View Omnichannel Room Sources',
  description:
    'Use this endpoint to view the sources of the Omnichannel rooms, for example, an app or the Livechat widget. Permission required: `view-l-room`',
  operationId: 'get-api-v1-livechat-rooms-filters',
  request: {
    headers: z.object({ 'X-Auth-Token': AuthTokenParamsSchema, 'X-User-Id': UserIdParamsSchema }),
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': {
          schema: z
            .object({
              filters: z
                .array(
                  z
                    .object({
                      type: z.string().exactOptional(),
                      id: z.string().exactOptional(),
                      alias: z.string().exactOptional(),
                      sidebarIcon: z.string().exactOptional(),
                      defaultIcon: z.string().exactOptional(),
                    })
                    .openapi({ required: [] }),
                )
                .exactOptional(),
              success: z.boolean().exactOptional(),
            })
            .openapi({ required: [] }),
          examples: {
            'Example 1': {
              value: {
                filters: [
                  {},
                  {
                    type: 'app',
                    id: '5e3dadaa-e774-40d8-b3a4-b93b91747168',
                    alias: 'WhatsApp Cloud',
                    sidebarIcon: 'whatsapp',
                    defaultIcon: 'whatsapp',
                  },
                  {
                    type: 'app',
                    id: '99ecc706-ca5a-4b8f-bbaf-c28de243f1db',
                    alias: 'WhatsApp Sandbox',
                    sidebarIcon: 'whatsapp',
                    defaultIcon: 'whatsapp',
                  },
                  {
                    type: 'app',
                    id: 'fc96e832-5472-49e4-aace-1521a7ebeaa6',
                    alias: 'Telegram',
                    sidebarIcon: 'telegram',
                    defaultIcon: 'telegram',
                  },
                  { type: 'sms' },
                  { type: 'widget' },
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

export const postApiV1LivechatVisitorDepartmentTransferRoute = createRoute({
  method: 'post',
  path: '/api/v1/livechat/visitor/department.transfer',
  tags: ['Omnichannel Rooms'],
  summary: 'Visitor Transfer Room',
  description:
    'This endpoint can be used by visitors to transfer an ongoing chat to another department.',
  operationId: 'post-api-v1-livechat-visitor-department.transfer',
  request: {
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              token: z
                .string()
                .openapi({
                  description: 'Enter the visitor token.',
                  example: '2c9035b72dec31be7e9ccbb3cbd9952394ea41c1517b76c528d403c00a3fccf9',
                }),
              rid: z
                .string()
                .openapi({ description: 'Enter the room ID.', example: 'dCBiZX3XPWyPsa6pt' }),
              department: z
                .string()
                .openapi({
                  description: 'Enter the department ID to which you want to transfer the chat.',
                  example: '68304887113ac52640bc1ca6',
                }),
            })
            .openapi({ required: ['token', 'rid', 'department'] }),
          examples: {
            'Example 1': {
              value: {
                token: '2c9035b72dec31be7e9ccbb3cbd9952394ea41c1517b76c528d403c00a3fccf9',
                rid: 'dCBiZX3XPWyPsa6pt',
                department: '68304887113ac52640bc1ca6',
              },
            },
          },
        },
      },
    },
  },
  responses: {
    200: TrueSuccessResponse,
    400: {
      description: 'Bad Request',
      content: {
        'application/json': {
          schema: z
            .object({
              success: z.boolean().exactOptional(),
              errorType: z.string().exactOptional(),
              error: z.string().exactOptional(),
            })
            .openapi({ required: [] }),
          examples: {
            'Example 1': {
              value: {
                success: false,
                errorType: 'error-invalid-params',
                error: "must have required property 'token'",
              },
            },
          },
        },
      },
    },
  },
})

export const getApiV1LivechatDepartmentRoute = createRoute({
  method: 'get',
  path: '/api/v1/livechat/department',
  tags: ['Omnichannel Departments'],
  summary: 'Get List of Departments',
  description:
    'Get a list of the departments.\nAt least one of the following permissions is required:\n* `view-livechat-departments`\n* `view-l-room`\n\n### Changelog\n| Version      | Description |\n| ---------------- | ------------|\n|9.0.0   | Removed the `query` parameter.       |\n|2.2.0             | Added support to pagination    |\n|0.42.0            | Added       |',
  operationId: 'get-api-v1-livechat-department',
  request: {
    headers: z.object({ 'X-Auth-Token': AuthTokenParamsSchema, 'X-User-Id': UserIdParamsSchema }),
    query: z.object({
      text: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'text',
            in: 'query',
            description: 'Filter the result with any text.',
            schema: { type: 'string' },
            example: 'fin',
            required: false,
          },
        }),
      enabled: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            name: 'enabled',
            in: 'query',
            description:
              'Filter the result to only show enabled departments. The value can be boolean true or false.',
            schema: { type: 'boolean' },
            example: true,
            required: false,
          },
        }),
      showArchived: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            name: 'showArchived',
            in: 'query',
            description:
              'You can include the archived departments in the result. The value can be boolean true or false.',
            schema: { type: 'boolean' },
            example: true,
            required: false,
          },
        }),
      onlyMyDepartments: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            name: 'onlyMyDepartments',
            in: 'query',
            description:
              'This parameter is for users with managers or admin roles. It only displays the departments that you are an agent of.',
            schema: { type: 'boolean' },
            example: true,
            required: false,
          },
        }),
      excludeDepartmentId: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'excludeDepartmentId',
            in: 'query',
            description: 'The department ID that you want to exclude from the result.',
            schema: { type: 'string' },
            example: '64181a0728384134ed600dcc',
            required: false,
          },
        }),
      offset: OffsetParamsSchema,
      count: CountParamsSchema,
      sort: SortParamsSchema,
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': {
          schema: z
            .object({
              departments: z
                .array(
                  z
                    .object({
                      _id: z.string().exactOptional(),
                      enabled: z.boolean().exactOptional(),
                      name: z.string().exactOptional(),
                      description: z.string().exactOptional(),
                      showOnRegistration: z.boolean().exactOptional(),
                      showOnOfflineForm: z.boolean().exactOptional(),
                      requestTagBeforeClosingChat: z.boolean().exactOptional(),
                      email: z.string().exactOptional(),
                      chatClosingTags: z.array(z.looseObject({})).exactOptional(),
                      offlineMessageChannelName: z.string().exactOptional(),
                      abandonedRoomsCloseCustomMessage: z.string().exactOptional(),
                      waitingQueueMessage: z.string().exactOptional(),
                      departmentsAllowedToForward: z.array(z.looseObject({})).exactOptional(),
                      fallbackForwardDepartment: z.string().exactOptional(),
                      _updatedAt: z.string().exactOptional(),
                      numAgents: z.int().exactOptional(),
                      type: z.string().exactOptional(),
                      businessHourId: z.string().exactOptional(),
                    })
                    .openapi({ required: [] }),
                )
                .exactOptional(),
              count: z.int().exactOptional(),
              offset: z.int().exactOptional(),
              total: z.int().exactOptional(),
              success: z.boolean().exactOptional(),
            })
            .openapi({ required: [] }),
          examples: {
            'Success Example': {
              value: {
                departments: [
                  {
                    _id: '64181a0728384134ed600dcc',
                    enabled: true,
                    name: 'Support',
                    description: '',
                    showOnRegistration: false,
                    showOnOfflineForm: false,
                    requestTagBeforeClosingChat: false,
                    email: 'kim.jane@rocketchat.com',
                    chatClosingTags: [],
                    offlineMessageChannelName: 'Livestream',
                    abandonedRoomsCloseCustomMessage: '',
                    waitingQueueMessage: '',
                    departmentsAllowedToForward: [],
                    fallbackForwardDepartment: '',
                    _updatedAt: '2023-10-13T13:03:58.406Z',
                    numAgents: 4,
                    type: 'd',
                  },
                  {
                    _id: '649230d479f5c6e276cf4a12',
                    enabled: false,
                    name: 'Finance',
                    description: '',
                    showOnRegistration: false,
                    showOnOfflineForm: false,
                    requestTagBeforeClosingChat: false,
                    email: 'test@gmail.com',
                    chatClosingTags: [],
                    offlineMessageChannelName: '',
                    abandonedRoomsCloseCustomMessage: '',
                    waitingQueueMessage: '',
                    departmentsAllowedToForward: [],
                    fallbackForwardDepartment: '',
                    type: 'd',
                    _updatedAt: '2023-10-13T13:03:58.426Z',
                    numAgents: 3,
                    businessHourId: '650dc9cfa2f73c7460e18bea',
                  },
                ],
                count: 2,
                offset: 0,
                total: 2,
                success: true,
              },
            },
          },
        },
      },
    },
    401: AuthorizationErrorResponse,
    403: PermissionErrorResponse,
  },
})

export const postApiV1LivechatDepartmentRoute = createRoute({
  method: 'post',
  path: '/api/v1/livechat/department',
  tags: ['Omnichannel Departments'],
  summary: 'Register New Department',
  description:
    'Permission required: `manage-livechat-departments`\n\n### Changelog\n| Version      | Description |\n| ---------------- | ------------|\n|1.0.0           | New fields for department updated |\n|0.42.0          | Added       |',
  operationId: 'post-api-v1-livechat-department',
  request: {
    headers: z.object({ 'X-Auth-Token': AuthTokenParamsSchema, 'X-User-Id': UserIdParamsSchema }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              department: z
                .object({
                  enabled: z
                    .boolean()
                    .openapi({
                      description:
                        'Whether you want to enable the department. The value can be boolean true or false.',
                    }),
                  showOnRegistration: z
                    .boolean()
                    .openapi({
                      description:
                        'You can let visitors choose the department they want to talk to. The option will appear to your customer in the Livechat widget. The value can be boolean true or false.',
                    }),
                  name: z
                    .string()
                    .openapi({ description: 'The name of the department you are creating.' }),
                  email: z
                    .string()
                    .openapi({ description: 'The email ID associated with the department.' }),
                  showOnOfflineForm: z
                    .boolean()
                    .openapi({
                      description:
                        'If you want your department to be displayed during off-business hours. The value can be boolean true or false.',
                    }),
                  description: z
                    .string()
                    .exactOptional()
                    .openapi({ description: 'A description of your department.' }),
                })
                .openapi({
                  description: 'The object which takes the department details.',
                  required: ['enabled', 'showOnRegistration', 'name', 'email', 'showOnOfflineForm'],
                }),
              agents: z
                .array(
                  z
                    .object({
                      agentId: z
                        .string()
                        .exactOptional()
                        .openapi({
                          description: 'The agent ID that you want to assign to the department.',
                        }),
                      order: z
                        .int()
                        .exactOptional()
                        .openapi({
                          description:
                            'Determines agent priority when multiple agents have the same chat count. Agents with lower order values are assigned chats before others.',
                        }),
                    })
                    .openapi({ required: [] }),
                )
                .exactOptional()
                .openapi({
                  description:
                    'The object with the agent details that you want to add to the department.',
                }),
              departmentUnit: z
                .object({
                  _id: z
                    .string()
                    .exactOptional()
                    .openapi({ description: 'The id of the unit to assign the department.' }),
                })
                .exactOptional()
                .openapi({
                  description:
                    'Assign the department to a [unit](https://docs.rocket.chat/docs/units).\n\n**Guidelines for assigning departments to a unit**\n- Permission required: `manage-livechat-departments`\n- If the user making the request is a [monitor](https://docs.rocket.chat/docs/monitors), they must be a supervisor of the specified unit.\n- If the user is not a monitor (such as an admin or [manager](https://docs.rocket.chat/docs/managers)), any unit can be associated to the department',
                  required: [],
                }),
            })
            .openapi({ required: ['department'] }),
          examples: {
            Example: {
              value: {
                department: {
                  enabled: false,
                  showOnRegistration: true,
                  name: 'new from api',
                  email: 'john@doe.com',
                  showOnOfflineForm: true,
                },
                agents: [{ agentId: 'SQafHvoFPuB57NmBD' }],
                departmentUnit: { _id: '66f46dc59a0766c20712d698' },
              },
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
          schema: z
            .object({
              department: z
                .object({
                  enabled: z.boolean().exactOptional(),
                  name: z.string().exactOptional(),
                  numAgents: z.int().exactOptional(),
                  showOnRegistration: z.boolean().exactOptional(),
                  _updatedAt: z.string().exactOptional(),
                  _id: z.string().exactOptional(),
                })
                .exactOptional()
                .openapi({ required: [] }),
              agents: z
                .array(
                  z
                    .object({
                      agentId: z.string().exactOptional(),
                      count: z.int().exactOptional(),
                      order: z.int().exactOptional(),
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
                department: {
                  enabled: false,
                  name: 'new from api',
                  numAgents: 1,
                  showOnRegistration: true,
                  _updatedAt: '2016-12-13T17:22:19.109Z',
                  _id: 'iTfLCX3qqwKgf5uqg',
                },
                agents: [{ agentId: 'SQafHvoFPuB57NmBD', count: 0, order: 0 }],
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
                error: "must have required property 'department' [error-invalid-params]",
                errorType: 'error-invalid-params',
              },
            },
            'Example 2': {
              value: {
                success: false,
                error: "must have required property 'name' [error-invalid-params]",
                errorType: 'error-invalid-params',
              },
            },
          },
        },
      },
    },
    401: AuthorizationErrorResponse,
    403: PermissionErrorResponse,
  },
})

export const getApiV1LivechatDepartmentIdRoute = createRoute({
  method: 'get',
  path: '/api/v1/livechat/department/{_id}',
  tags: ['Omnichannel Departments'],
  summary: 'Get Department Information',
  description:
    'Get information about a specific department using the department ID.\nAt least one of the following permissions is required:\n* `view-livechat-departments`\n* `view-l-room`\n\n### Changelog\n| Version      | Description |\n| ---------------- | ------------|\n|2.2.0             | Added `includeAgents` query parameter|\n|0.42.0            | Added       |',
  operationId: 'get-api-v1-livechat-department-:_id',
  request: {
    headers: z.object({ 'X-Auth-Token': AuthTokenParamsSchema, 'X-User-Id': UserIdParamsSchema }),
    query: z.object({
      includeAgents: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            name: 'includeAgents',
            in: 'query',
            description:
              'If agents should be included in the result. By default, the value is true and the list of agents is returned. The agents field will only be returned if the user has the `view-livechat-departments` permission.',
            schema: { type: 'boolean' },
            example: true,
            required: false,
          },
        }),
    }),
    params: z.object({
      _id: z
        .string()
        .openapi({
          param: {
            name: '_id',
            in: 'path',
            description: 'The department ID.',
            required: true,
            schema: { type: 'string' },
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
              department: z
                .object({
                  _id: z.string().exactOptional(),
                  enabled: z.boolean().exactOptional(),
                  name: z.string().exactOptional(),
                  description: z.string().exactOptional(),
                  numAgents: z.int().exactOptional(),
                  showOnRegistration: z.boolean().exactOptional(),
                  _updatedAt: z.string().exactOptional(),
                })
                .exactOptional()
                .openapi({ required: [] }),
              agents: z
                .array(
                  z
                    .object({
                      _id: z.string().exactOptional(),
                      agentId: z.string().exactOptional(),
                      departmentId: z.string().exactOptional(),
                      username: z.string().exactOptional(),
                      count: z.int().exactOptional(),
                      order: z.int().exactOptional(),
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
                department: {
                  _id: 'iTfLCX3qqwKgf5uqg',
                  enabled: false,
                  name: 'new from api',
                  description: 'creating a department',
                  numAgents: 1,
                  showOnRegistration: true,
                  _updatedAt: '2016-12-13T17:22:19.109Z',
                },
                agents: [
                  {
                    _id: 'DDjZbhTF74n3NBuWK',
                    agentId: 'SQafHvoFPuB57NmBD',
                    departmentId: 'iTfLCX3qqwKgf5uqg',
                    username: 'john.doe',
                    count: 0,
                    order: 0,
                    _updatedAt: '2016-12-13T17:22:19.169Z',
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
    403: PermissionErrorResponse,
  },
})

export const putApiV1LivechatDepartmentIdRoute = createRoute({
  method: 'put',
  path: '/api/v1/livechat/department/{_id}',
  tags: ['Omnichannel Departments'],
  summary: 'Update Department',
  description:
    'Update the details of a specific department.\nPermissions required:\n* `manage-livechat-departments`\n* To add agents: `add-livechat-department-agents`\n\n### Changelog\n| Version      | Description |\n| ---------------- | ------------|\n|0.42.0            | Added       |',
  operationId: 'put-api-v1-livechat-department-_id',
  request: {
    headers: z.object({ 'X-Auth-Token': AuthTokenParamsSchema, 'X-User-Id': UserIdParamsSchema }),
    params: z.object({
      _id: z
        .string()
        .openapi({
          param: {
            name: '_id',
            in: 'path',
            description: 'The department ID.',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              department: z
                .object({
                  enabled: z
                    .boolean()
                    .openapi({
                      description:
                        'Whether you want to enable the department. The value can be boolean true or false.',
                    }),
                  showOnRegistration: z
                    .boolean()
                    .openapi({
                      description:
                        'You can let visitors choose the department they want to talk to. The option will appear to your customer in the Livechat widget.\nThe value can be boolean true or false.',
                    }),
                  name: z
                    .string()
                    .openapi({ description: 'The name of the department you are creating.' }),
                  email: z
                    .string()
                    .openapi({ description: 'The email ID associated with the department.' }),
                  showOnOfflineForm: z
                    .boolean()
                    .openapi({
                      description:
                        'If you want your department to be displayed during off-business hours. The value can be boolean true or false.',
                    }),
                  description: z
                    .string()
                    .exactOptional()
                    .openapi({ description: 'A description of your department.' }),
                })
                .openapi({
                  description: 'The object which takes the department details.',
                  required: ['enabled', 'showOnRegistration', 'name', 'email', 'showOnOfflineForm'],
                }),
              agents: z
                .array(
                  z
                    .object({
                      agentId: z
                        .string()
                        .exactOptional()
                        .openapi({
                          description: 'The agent ID that you want to assign to the department.',
                        }),
                      count: z.string().exactOptional(),
                      order: z.string().exactOptional(),
                    })
                    .openapi({ required: [] }),
                )
                .exactOptional(),
              departmentUnit: z
                .object({
                  _id: z
                    .string()
                    .exactOptional()
                    .openapi({ description: 'The id of the unit to assign the department.' }),
                })
                .exactOptional()
                .openapi({
                  description:
                    'Assign the department to a [unit](https://docs.rocket.chat/docs/units).\n\n**Guidelines for assigning departments to a unit**\n- Permission required: `manage-livechat-departments`\n- If the user making the request is a [monitor](https://docs.rocket.chat/docs/monitors), they must be a supervisor of the specified unit.\n- If the user is not a monitor (such as an admin or [manager](https://docs.rocket.chat/docs/managers)), any unit can be associated to the department.\n- Providing an empty object `({})`, undefined `({ _id: undefined})`, or null `({ _id: null})` for this parameter removes the department from the associated unit.',
                  required: [],
                }),
            })
            .openapi({ required: ['department'] }),
          examples: {
            Example: {
              value: {
                department: {
                  enabled: true,
                  name: 'new from api - live',
                  showOnRegistration: true,
                  email: 'test@test.com',
                  showOnOfflineForm: false,
                },
                agents: [{ agentId: 'SQafHvoFPuB57NmBD', username: 'john.doe' }],
                departmentUnit: { _id: '66f46dc59a0766c20712d698' },
              },
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
          schema: z
            .object({
              department: z
                .object({
                  _id: z.string().exactOptional(),
                  enabled: z.boolean().exactOptional(),
                  name: z.string().exactOptional(),
                  description: z.string().exactOptional(),
                  numAgents: z.int().exactOptional(),
                  showOnRegistration: z.boolean().exactOptional(),
                  _updatedAt: z.string().exactOptional(),
                })
                .exactOptional()
                .openapi({ required: [] }),
              agents: z
                .array(
                  z
                    .object({
                      _id: z.string().exactOptional(),
                      agentId: z.string().exactOptional(),
                      departmentId: z.string().exactOptional(),
                      username: z.string().exactOptional(),
                      count: z.int().exactOptional(),
                      order: z.int().exactOptional(),
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
                department: {
                  _id: 'iTfLCX3qqwKgf5uqg',
                  enabled: true,
                  name: 'new from api - live',
                  description: 'update api',
                  numAgents: 1,
                  showOnRegistration: true,
                  _updatedAt: '2016-12-13T17:30:02.643Z',
                },
                agents: [
                  {
                    _id: 'DDjZbhTF74n3NBuWK',
                    agentId: 'SQafHvoFPuB57NmBD',
                    departmentId: 'iTfLCX3qqwKgf5uqg',
                    username: 'john.doe',
                    count: 0,
                    order: 0,
                    _updatedAt: '2016-12-13T17:30:02.656Z',
                  },
                ],
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
                error: "must have required property 'department' [error-invalid-params]",
                errorType: 'error-invalid-params',
              },
            },
            'Example 2': {
              value: {
                success: false,
                error: "must have required property 'name' [error-invalid-params]",
                errorType: 'error-invalid-params',
              },
            },
          },
        },
      },
    },
    401: AuthorizationErrorResponse,
    403: PermissionErrorResponse,
  },
})

export const deleteApiV1LivechatDepartmentIdRoute = createRoute({
  method: 'delete',
  path: '/api/v1/livechat/department/{_id}',
  tags: ['Omnichannel Departments'],
  summary: 'Remove Department',
  description:
    'At least one of the following permissions is required:\n* `manage-livechat-departments`\n* `remove-livechat-department`\n\n### Changelog\n| Version      | Description |\n| ---------------- | ------------|\n|0.42.0            | Added       |',
  operationId: 'delete-api-v1-livechat-department-_id',
  request: {
    headers: z.object({ 'X-Auth-Token': AuthTokenParamsSchema, 'X-User-Id': UserIdParamsSchema }),
    params: z.object({
      _id: z
        .string()
        .openapi({
          param: {
            name: '_id',
            in: 'path',
            description: 'The department ID.',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: TrueSuccessResponse,
    401: AuthorizationErrorResponse,
    403: PermissionErrorResponse,
  },
})

export const getApiV1LivechatDepartmentAutocompleteRoute = createRoute({
  method: 'get',
  path: '/api/v1/livechat/department.autocomplete',
  tags: ['Omnichannel Departments'],
  summary: 'Autocomplete Department',
  description:
    'Search for departments by name.\n\nAt least one of the following permissions is required:\n  * `view-livechat-departments`\n  * `view-l-room`\n\n\n### Changelog\n| Version | Description |\n| ------- | ----------- |\n|9.0.0   | Removed the `conditions` field from the `selector` parameter.       |\n| 8.8.0   | Deprecated the `conditions` field in the `selector` parameter. |',
  operationId: 'get-api-v1-livechat-department.autocomplete',
  request: {
    headers: z.object({ 'X-Auth-Token': AuthTokenParamsSchema, 'X-User-Id': UserIdParamsSchema }),
    query: z.object({
      selector: z
        .string()
        .openapi({
          param: {
            name: 'selector',
            in: 'query',
            description:
              'A JSON string containing the search `term` and an optional array of department IDs to exclude in `exceptions`.',
            required: true,
            schema: { type: 'string' },
            example: '{"exceptions":["departmentId"],"term":"test"}',
          },
        }),
      onlyMyDepartments: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            name: 'onlyMyDepartments',
            in: 'query',
            description:
              'Only displays the departments that you are assigned to. The value can be boolean `true` or `false`',
            schema: { type: 'boolean' },
            required: false,
          },
        }),
      showArchived: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            name: 'showArchived',
            in: 'query',
            description:
              'The result includes archived departments. The value can be Boolean `true` or `false`.',
            schema: { type: 'boolean' },
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
              items: z
                .array(
                  z
                    .object({ _id: z.string().exactOptional(), name: z.string().exactOptional() })
                    .openapi({ required: [] }),
                )
                .exactOptional(),
              success: z.boolean().exactOptional(),
            })
            .openapi({ required: [] }),
          examples: {
            'Success Example': {
              value: {
                items: [
                  { _id: '64f0c2a1b3d4e5f6a7b8c9d0', name: 'Sales' },
                  { _id: '64f0c2a1b3d4e5f6a7b8c9d1', name: 'Support' },
                ],
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
            .object({ success: z.boolean().exactOptional(), error: z.string().exactOptional() })
            .openapi({ required: [] }),
          examples: {
            'Example 1': { value: { success: false, error: "The 'selector' param is required" } },
          },
        },
      },
    },
    401: AuthorizationErrorResponse,
  },
})

export const getApiV1LivechatDepartmentIdAgentsRoute = createRoute({
  method: 'get',
  path: '/api/v1/livechat/department/{_id}/agents',
  tags: ['Omnichannel Departments'],
  summary: 'Get Agents of Department',
  description:
    'Get the agents of a specific department. At least one of the following permissions is required:\n  * `view-livechat-departments`\n  * `view-l-room`',
  operationId: 'get-api-v1-livechat-department-:_id-agents',
  request: {
    headers: z.object({ 'X-Auth-Token': AuthTokenParamsSchema, 'X-User-Id': UserIdParamsSchema }),
    params: z.object({
      _id: z
        .string()
        .openapi({
          param: {
            name: '_id',
            in: 'path',
            description: 'The department ID.',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      offset: OffsetParamsSchema,
      count: CountParamsSchema,
      sort: SortParamsSchema,
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': {
          schema: z
            .object({
              agents: z
                .array(
                  z
                    .object({
                      _id: z.string().exactOptional(),
                      agentId: z.string().exactOptional(),
                      departmentId: z.string().exactOptional(),
                      _updatedAt: z.string().exactOptional(),
                      count: z.int().exactOptional(),
                      departmentEnabled: z.boolean().exactOptional(),
                      order: z.int().exactOptional(),
                      username: z.string().exactOptional(),
                    })
                    .openapi({ required: [] }),
                )
                .exactOptional(),
              count: z.int().exactOptional(),
              offset: z.int().exactOptional(),
              total: z.int().exactOptional(),
              success: z.boolean().exactOptional(),
            })
            .openapi({ required: [] }),
          examples: {
            'Success Example': {
              value: {
                agents: [
                  {
                    _id: 'SWugWdHhcTX4G2NAP',
                    agentId: 'rocket.cat',
                    departmentId: 'BiqbQav59HD2LzXEY',
                    _updatedAt: '2021-07-14T14:58:01.013Z',
                    count: 17,
                    departmentEnabled: true,
                    order: 0,
                    username: 'rocket.cat',
                  },
                ],
                count: 1,
                offset: 0,
                total: 1,
                success: true,
              },
            },
          },
        },
      },
    },
    401: AuthorizationErrorResponse,
    403: PermissionErrorResponse,
  },
})

export const postApiV1LivechatDepartmentIdAgentsRoute = createRoute({
  method: 'post',
  path: '/api/v1/livechat/department/{_id}/agents',
  tags: ['Omnichannel Departments'],
  summary: 'Update Agents of Department',
  description:
    'Update the agents of a specific department. At least one of the following permissions is required:\n  * `add-livechat-department-agents`\n  * `manage-livechat-departments`',
  operationId: 'post-api-v1-livechat-department-_id-agents',
  request: {
    headers: z.object({ 'X-Auth-Token': AuthTokenParamsSchema, 'X-User-Id': UserIdParamsSchema }),
    params: z.object({
      _id: z
        .string()
        .openapi({
          param: {
            name: '_id',
            in: 'path',
            description: 'The department ID.',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              upsert: z
                .array(
                  z
                    .object({
                      agentId: z.string().openapi({ description: 'The agent ID.' }),
                      username: z.string().openapi({ description: 'The user name of the agent.' }),
                    })
                    .openapi({ required: ['agentId', 'username'] }),
                )
                .openapi({ description: 'The object that contains the agent details.' }),
              remove: z
                .array(z.looseObject({}))
                .openapi({
                  description:
                    'The object containing the details of the agent that you want to remove.',
                }),
            })
            .openapi({ required: ['upsert', 'remove'] }),
          examples: {
            'Example 1': {
              value: {
                upsert: [{ agentId: '6529401b024dde05d3f1cd85', username: 'kim' }],
                remove: [],
              },
            },
          },
        },
      },
    },
  },
  responses: {
    200: TrueSuccessResponse,
    401: AuthorizationErrorResponse,
    403: PermissionErrorResponse,
  },
})

export const getApiV1LivechatDepartmentListByIdsRoute = createRoute({
  method: 'get',
  path: '/api/v1/livechat/department.listByIds',
  tags: ['Omnichannel Departments'],
  summary: 'Get Departments by ID',
  description:
    'Get a list of departments by department IDs. At least one of the following permissions is required:\n  * `view-livechat-departments`\n  * `view-l-room`\n\n### Changelog\n| Version      | Description |\n| ---------------- | ------------|\n|9.0.0   | Removed the `fields` parameter.       |',
  operationId: 'get-api-v1-livechat-department.listByIds',
  request: {
    headers: z.object({ 'X-Auth-Token': AuthTokenParamsSchema, 'X-User-Id': UserIdParamsSchema }),
    query: z.object({
      ids: z
        .string()
        .openapi({
          param: {
            name: 'ids',
            in: 'query',
            description: 'The department ID.',
            required: true,
            schema: { type: 'string' },
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
              departments: z
                .array(
                  z
                    .object({
                      _id: z.string().exactOptional(),
                      enabled: z.boolean().exactOptional(),
                      name: z.string().exactOptional(),
                      description: z.string().exactOptional(),
                      showOnRegistration: z.boolean().exactOptional(),
                      showOnOfflineForm: z.boolean().exactOptional(),
                      requestTagBeforeClosingChat: z.boolean().exactOptional(),
                      email: z.string().exactOptional(),
                      chatClosingTags: z.array(z.looseObject({})).exactOptional(),
                      offlineMessageChannelName: z.string().exactOptional(),
                      abandonedRoomsCloseCustomMessage: z.string().exactOptional(),
                      waitingQueueMessage: z.string().exactOptional(),
                      departmentsAllowedToForward: z.string().exactOptional(),
                      _updatedAt: z.string().exactOptional(),
                      numAgents: z.int().exactOptional(),
                      ancestors: z.array(z.string()).exactOptional(),
                      maxNumberSimultaneousChat: z.string().exactOptional(),
                      type: z.string().exactOptional(),
                      visitorInactivityTimeoutInSeconds: z.string().exactOptional(),
                      parentId: z.string().exactOptional(),
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
                departments: [
                  {
                    _id: '4LCeYmCHHnQ3EDBgf',
                    enabled: true,
                    name: 'Chatbot Sales',
                    description: '',
                    showOnRegistration: false,
                    showOnOfflineForm: false,
                    requestTagBeforeClosingChat: false,
                    email: 'chatbotSales@g.c',
                    chatClosingTags: [],
                    offlineMessageChannelName: '',
                    abandonedRoomsCloseCustomMessage: '',
                    waitingQueueMessage: '',
                    departmentsAllowedToForward: '',
                    _updatedAt: '2021-07-15T15:11:16.856Z',
                    numAgents: 4,
                    ancestors: [],
                  },
                  {
                    _id: 'CAJioQNAvLnYWTy8i',
                    enabled: true,
                    name: 'Support',
                    description: '',
                    showOnRegistration: true,
                    showOnOfflineForm: true,
                    requestTagBeforeClosingChat: false,
                    email: 'mary@rocket.chat',
                    maxNumberSimultaneousChat: '',
                    waitingQueueMessage: '',
                    type: 'd',
                    numAgents: 28,
                    _updatedAt: '2021-07-21T23:54:35.574Z',
                    ancestors: ['sriw2wmP2Zz2pPrre'],
                    chatClosingTags: [],
                    abandonedRoomsCloseCustomMessage: '',
                    departmentsAllowedToForward: '',
                    offlineMessageChannelName: '',
                    visitorInactivityTimeoutInSeconds: '10',
                    parentId: 'sriw2wmP2Zz2pPrre',
                  },
                  {
                    _id: 'mHcx4rbi7htAmCCR5',
                    enabled: true,
                    name: 'Chatbot Support',
                    description: '',
                    showOnRegistration: false,
                    showOnOfflineForm: false,
                    requestTagBeforeClosingChat: false,
                    email: 'chatbotSupport@g.c',
                    chatClosingTags: [],
                    offlineMessageChannelName: '',
                    abandonedRoomsCloseCustomMessage: '',
                    waitingQueueMessage: '',
                    departmentsAllowedToForward: '',
                    _updatedAt: '2021-06-28T22:10:01.371Z',
                    numAgents: 3,
                    ancestors: ['sriw2wmP2Zz2pPrre'],
                    parentId: 'sriw2wmP2Zz2pPrre',
                  },
                ],
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
            .object({ success: z.boolean().exactOptional(), error: z.string().exactOptional() })
            .openapi({ required: [] }),
          examples: {
            'Example 1': { value: { success: false, error: "The 'ids' param is required" } },
            'Example 2': { value: { success: false, error: "The 'ids' param must be an array" } },
          },
        },
      },
    },
    401: AuthorizationErrorResponse,
    403: PermissionErrorResponse,
  },
})

export const getApiV1LivechatAnalyticsDepartmentsAmountOfChatsRoute = createRoute({
  method: 'get',
  path: '/api/v1/livechat/analytics/departments/amount-of-chats',
  tags: ['Omnichannel Departments'],
  summary: 'Get Number of Chats',
  description:
    '<div style="text-align: center; margin: 1rem 0 1rem 0;"><img src="https://raw.githubusercontent.com/RocketChat/Rocket.Chat-Open-API/main/images/Enterprise%20tag.svg" alt="Enterprise" style="display: block; margin: auto;"></div>\n\nGives the number of chat rooms by department. Permission required: `view-livechat-manager`',
  operationId: 'get-api-v1-livechat-analytics-departments-amount-of-chats',
  request: {
    headers: z.object({ 'X-Auth-Token': AuthTokenParamsSchema, 'X-User-Id': UserIdParamsSchema }),
    query: z.object({
      offset: OffsetParamsSchema,
      count: CountParamsSchema,
      start: StartParamsSchema,
      end: EndParamsSchema,
      answered: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            schema: { type: 'boolean' },
            in: 'query',
            name: 'answered',
            description: 'Whether the chats are answered or not.',
            required: false,
          },
        }),
      departmentId: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            schema: { type: 'string', example: '64181a0728384134ed600dcc' },
            in: 'query',
            name: 'departmentId',
            description: 'Enter the department ID for which you want the number of chats.',
            required: false,
          },
          example: '64181a0728384134ed600dcc',
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
              departments: z
                .array(
                  z
                    .object({ rooms: z.int().exactOptional(), _id: z.string().exactOptional() })
                    .openapi({ required: [] }),
                )
                .exactOptional(),
              count: z.int().exactOptional(),
              offset: z.int().exactOptional(),
              total: z.int().exactOptional(),
              success: z.boolean().exactOptional(),
            })
            .openapi({ required: [] }),
          examples: {
            'Success Example': {
              value: {
                departments: [
                  { rooms: 13, _id: 'NJaMpSvZFZ4NAXm3j' },
                  { rooms: 10, _id: '8MGLTfaKLCbE9CqR8' },
                  { rooms: 4, _id: 'MpAiP9PMyHwBcmALx' },
                  { rooms: 51, _id: 'Yi87Ju7eTHiZQ7CJt' },
                ],
                count: 4,
                offset: 0,
                total: 11,
                success: true,
              },
            },
          },
        },
      },
    },
    400: StartendErrorResponse,
    401: AuthorizationErrorResponse,
    403: PermissionErrorResponse,
  },
})

export const getApiV1LivechatAnalyticsDepartmentsAverageServiceTimeRoute = createRoute({
  method: 'get',
  path: '/api/v1/livechat/analytics/departments/average-service-time',
  tags: ['Omnichannel Departments'],
  summary: 'Get Average Service Time',
  description:
    '<div style="text-align: center; margin: 1rem 0 1rem 0;"><img src="https://raw.githubusercontent.com/RocketChat/Rocket.Chat-Open-API/main/images/Enterprise%20tag.svg" alt="Enterprise" style="display: block; margin: auto;"></div>\n\nReturns average service time (in seconds) for chats by department. Permission required: `view-livechat-manager`',
  operationId: 'get-api-v1-livechat-analytics-departments-average-service-time',
  request: {
    headers: z.object({ 'X-Auth-Token': AuthTokenParamsSchema, 'X-User-Id': UserIdParamsSchema }),
    query: z.object({
      start: StartParamsSchema,
      end: EndParamsSchema,
      offset: OffsetParamsSchema,
      count: CountParamsSchema,
      departmentId: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            schema: { type: 'string' },
            example: 'CAJioQNAvLnYWTy8i',
            in: 'query',
            name: 'departmentId',
            description: 'Enter the department ID for which you want the average service time.',
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
              departments: z
                .array(
                  z
                    .object({
                      _id: z.string().exactOptional(),
                      averageServiceTimeInSeconds: z.int().exactOptional(),
                    })
                    .openapi({ required: [] }),
                )
                .exactOptional(),
              count: z.int().exactOptional(),
              offset: z.int().exactOptional(),
              total: z.int().exactOptional(),
              success: z.boolean().exactOptional(),
            })
            .openapi({ required: [] }),
          examples: {
            'Success Example': {
              value: {
                departments: [
                  { _id: 'sLYp3ry7CRizaP3rJ', averageServiceTimeInSeconds: 2941 },
                  { _id: 'BiqbQav59HD2LzXEY', averageServiceTimeInSeconds: 5831 },
                  { _id: '8MGLTfaKLCbE9CqR8', averageServiceTimeInSeconds: 1635 },
                ],
                count: 8,
                offset: 0,
                total: 8,
                success: true,
              },
            },
          },
        },
      },
    },
    400: StartendErrorResponse,
    401: AuthorizationErrorResponse,
    403: PermissionErrorResponse,
  },
})

export const getApiV1LivechatAnalyticsDepartmentsAverageChatDurationTimeRoute = createRoute({
  method: 'get',
  path: '/api/v1/livechat/analytics/departments/average-chat-duration-time',
  tags: ['Omnichannel Departments'],
  summary: 'Get Average Chat Duration',
  description:
    '<div style="text-align: center; margin: 1rem 0 1rem 0;"><img src="https://raw.githubusercontent.com/RocketChat/Rocket.Chat-Open-API/main/images/Enterprise%20tag.svg" alt="Enterprise" style="display: block; margin: auto;"></div>\n\nReturns the average chat duration of each department. Permission required: `view-livechat-manager`',
  operationId: 'get-api-v1-livechat-analytics-departments-average-chat-duration-time',
  request: {
    headers: z.object({ 'X-Auth-Token': AuthTokenParamsSchema, 'X-User-Id': UserIdParamsSchema }),
    query: z.object({
      start: StartParamsSchema,
      end: EndParamsSchema,
      offset: OffsetParamsSchema,
      count: CountParamsSchema,
      departmentId: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            schema: { type: 'string' },
            example: '64cf6c6feb07a913d946f34d',
            in: 'query',
            name: 'departmentId',
            description: 'Enter the department ID for which you want the average chat duration.',
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
              departments: z
                .array(
                  z
                    .object({
                      _id: z.string().exactOptional(),
                      averageChatDurationTimeInSeconds: z.int().exactOptional(),
                    })
                    .openapi({ required: [] }),
                )
                .exactOptional(),
              count: z.int().exactOptional(),
              offset: z.int().exactOptional(),
              total: z.int().exactOptional(),
              success: z.boolean().exactOptional(),
            })
            .openapi({ required: [] }),
          examples: {
            'Success Example': {
              value: {
                departments: [
                  { _id: '64cf6c6feb07a913d946f34d', averageChatDurationTimeInSeconds: 3314449 },
                  { _id: '64181a0728384134ed600dcc', averageChatDurationTimeInSeconds: 174296 },
                ],
                count: 2,
                offset: 0,
                total: 3,
                success: true,
              },
            },
          },
        },
      },
    },
    400: StartendErrorResponse,
    401: AuthorizationErrorResponse,
    403: PermissionErrorResponse,
  },
})

export const getApiV1LivechatAnalyticsDepartmentsTotalServiceTimeRoute = createRoute({
  method: 'get',
  path: '/api/v1/livechat/analytics/departments/total-service-time',
  tags: ['Omnichannel Departments'],
  summary: 'Get Total Service Time',
  description:
    '<div style="text-align: center; margin: 1rem 0 1rem 0;"><img src="https://raw.githubusercontent.com/RocketChat/Rocket.Chat-Open-API/main/images/Enterprise%20tag.svg" alt="Enterprise" style="display: block; margin: auto;"></div>\n\nGives the total service time (in seconds) by department. Permission required: `view-livechat-manager`',
  operationId: 'get-api-v1-livechat-analytics-departments-total-service-time',
  request: {
    headers: z.object({ 'X-Auth-Token': AuthTokenParamsSchema, 'X-User-Id': UserIdParamsSchema }),
    query: z.object({
      start: StartParamsSchema,
      end: EndParamsSchema,
      offset: OffsetParamsSchema,
      count: CountParamsSchema,
      departmentId: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            schema: { type: 'string' },
            example: '64cf6c6feb07a913d946f34d',
            in: 'query',
            name: 'departmentId',
            description: 'Enter the department ID for which you want the total service time.',
            required: false,
          },
        }),
    }),
  },
  responses: {
    206: {
      description: 'OK',
      content: {
        'application/json': {
          schema: z
            .object({
              departments: z
                .array(
                  z
                    .object({
                      _id: z.string().exactOptional(),
                      chats: z.int().exactOptional(),
                      serviceTimeDuration: z.int().exactOptional(),
                    })
                    .openapi({ required: [] }),
                )
                .exactOptional(),
              count: z.int().exactOptional(),
              offset: z.int().exactOptional(),
              total: z.int().exactOptional(),
              success: z.boolean().exactOptional(),
            })
            .openapi({ required: [] }),
          examples: {
            'Success Example': {
              value: {
                departments: [
                  { _id: '64181a0728384134ed600dcc', chats: 5, serviceTimeDuration: 268684 },
                  { _id: '64cf6c6feb07a913d946f34d', chats: 1, serviceTimeDuration: 2461 },
                ],
                count: 2,
                offset: 0,
                total: 2,
                success: true,
              },
            },
          },
        },
      },
    },
    400: StartendErrorResponse,
    401: AuthorizationErrorResponse,
    403: PermissionErrorResponse,
  },
})

export const getApiV1LivechatAnalyticsDepartmentsAverageWaitingTimeRoute = createRoute({
  method: 'get',
  path: '/api/v1/livechat/analytics/departments/average-waiting-time',
  tags: ['Omnichannel Departments'],
  summary: 'Get Average Waiting Time',
  description:
    '<div style="text-align: center; margin: 1rem 0 1rem 0;"><img src="https://raw.githubusercontent.com/RocketChat/Rocket.Chat-Open-API/main/images/Enterprise%20tag.svg" alt="Enterprise" style="display: block; margin: auto;"></div>\n\nGives the average visitor waiting time (in seconds) by department. Permission required: `view-livechat-manager`',
  operationId: 'get-api-v1-livechat-analytics-departments-average-waiting-time',
  request: {
    headers: z.object({ 'X-Auth-Token': AuthTokenParamsSchema, 'X-User-Id': UserIdParamsSchema }),
    query: z.object({
      start: StartParamsSchema,
      end: EndParamsSchema,
      offset: OffsetParamsSchema,
      count: CountParamsSchema,
      departmentId: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            schema: { type: 'string' },
            example: '64181a0728384134ed600dcc',
            in: 'query',
            name: 'departmentId',
            description: 'Enter the department ID for which you want the average waiting time.',
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
              departments: z
                .array(
                  z
                    .object({
                      _id: z.string().exactOptional(),
                      averageWaitingTimeInSeconds: z.int().exactOptional(),
                    })
                    .openapi({ required: [] }),
                )
                .exactOptional(),
              count: z.int().exactOptional(),
              offset: z.int().exactOptional(),
              total: z.int().exactOptional(),
              success: z.boolean().exactOptional(),
            })
            .openapi({ required: [] }),
          examples: {
            'Success Example': {
              value: {
                departments: [
                  { _id: '64181a0728384134ed600dcc', averageWaitingTimeInSeconds: 199 },
                  { _id: '649230d479f5c6e276cf4a12', averageWaitingTimeInSeconds: 521 },
                ],
                count: 2,
                offset: 0,
                total: 2,
                success: true,
              },
            },
          },
        },
      },
    },
    400: StartendErrorResponse,
    401: AuthorizationErrorResponse,
    403: PermissionErrorResponse,
  },
})

export const getApiV1LivechatAnalyticsDepartmentsTotalTransferredChatsRoute = createRoute({
  method: 'get',
  path: '/api/v1/livechat/analytics/departments/total-transferred-chats',
  tags: ['Omnichannel Departments'],
  summary: 'Get Total Transferred Chats',
  description:
    '<div style="text-align: center; margin: 1rem 0 1rem 0;"><img src="https://raw.githubusercontent.com/RocketChat/Rocket.Chat-Open-API/main/images/Enterprise%20tag.svg" alt="Enterprise" style="display: block; margin: auto;"></div>\n\nGives the total number of transferred chats by department. Permission required: `view-livechat-manager`',
  operationId: 'get-api-v1-livechat-analytics-departments-total-transferred-chats',
  request: {
    headers: z.object({ 'X-Auth-Token': AuthTokenParamsSchema, 'X-User-Id': UserIdParamsSchema }),
    query: z.object({
      start: StartParamsSchema,
      end: EndParamsSchema,
      offset: OffsetParamsSchema,
      count: CountParamsSchema,
      departmentId: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            schema: { type: 'string' },
            example: 'GgYvrkAF63aeQmsh4',
            in: 'query',
            name: 'departmentId',
            description: 'Enter the department ID for which you want the total transferred chats.',
            required: false,
          },
        }),
    }),
  },
  responses: {
    206: {
      description: 'OK',
      content: {
        'application/json': {
          schema: z
            .object({
              departments: z
                .array(
                  z
                    .object({
                      numberOfTransferredRooms: z.int().exactOptional(),
                      _id: z.string().exactOptional(),
                    })
                    .openapi({ required: [] }),
                )
                .exactOptional(),
              count: z.int().exactOptional(),
              offset: z.int().exactOptional(),
              total: z.int().exactOptional(),
              success: z.boolean().exactOptional(),
            })
            .openapi({ required: [] }),
          examples: {
            'Success Example': {
              value: {
                departments: [
                  { numberOfTransferredRooms: 6, _id: 'BiqbQav59HD2LzXEY' },
                  { numberOfTransferredRooms: 27, _id: 'CAJioQNAvLnYWTy8i' },
                  { numberOfTransferredRooms: 1, _id: '8MGLTfaKLCbE9CqR8' },
                ],
                count: 3,
                offset: 0,
                total: 3,
                success: true,
              },
            },
          },
        },
      },
    },
    400: StartendErrorResponse,
    401: AuthorizationErrorResponse,
    403: PermissionErrorResponse,
  },
})

export const getApiV1LivechatAnalyticsDepartmentsTotalAbandonedChatsRoute = createRoute({
  method: 'get',
  path: '/api/v1/livechat/analytics/departments/total-abandoned-chats',
  tags: ['Omnichannel Departments'],
  summary: 'Get Total Abandoned Chats',
  description:
    '<div style="text-align: center; margin: 1rem 0 1rem 0;"><img src="https://raw.githubusercontent.com/RocketChat/Rocket.Chat-Open-API/main/images/Enterprise%20tag.svg" alt="Enterprise" style="display: block; margin: auto;"></div>\n\nGives the total number of abandoned chats (rooms) by department. Permission required: `view-livechat-manager`',
  operationId: 'get-api-v1-livechat-analytics-departments-total-abandoned-chats',
  request: {
    headers: z.object({ 'X-Auth-Token': AuthTokenParamsSchema, 'X-User-Id': UserIdParamsSchema }),
    query: z.object({
      start: StartParamsSchema,
      end: EndParamsSchema,
      offset: OffsetParamsSchema,
      count: CountParamsSchema,
      departmentId: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            schema: { type: 'string' },
            example: '4LCeYmCHHnQ3EDBgf',
            in: 'query',
            name: 'departmentId',
            description: 'Enter the department ID for which you want the total abandoned chats.',
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
              departments: z
                .array(
                  z
                    .object({
                      abandonedRooms: z.int().exactOptional(),
                      _id: z.string().exactOptional(),
                    })
                    .openapi({ required: [] }),
                )
                .exactOptional(),
              count: z.int().exactOptional(),
              offset: z.int().exactOptional(),
              total: z.int().exactOptional(),
              success: z.boolean().exactOptional(),
            })
            .openapi({ required: [] }),
          examples: {
            'Success Example': {
              value: {
                departments: [
                  { abandonedRooms: 3, _id: '4LCeYmCHHnQ3EDBgf' },
                  { abandonedRooms: 1, _id: '8MGLTfaKLCbE9CqR8' },
                  { abandonedRooms: 1, _id: 'Yi87Ju7eTHiZQ7CJt' },
                  { abandonedRooms: 77, _id: 'GgYvrkAF63aeQmsh4' },
                  { abandonedRooms: 12, _id: 'sLYp3ry7CRizaP3rJ' },
                  { abandonedRooms: 12, _id: 'BiqbQav59HD2LzXEY' },
                  { abandonedRooms: 6, _id: 'CAJioQNAvLnYWTy8i' },
                ],
                count: 7,
                offset: 0,
                total: 7,
                success: true,
              },
            },
          },
        },
      },
    },
    400: StartendErrorResponse,
    401: AuthorizationErrorResponse,
    403: PermissionErrorResponse,
  },
})

export const getApiV1LivechatAnalyticsDepartmentsPercentageAbandonedChatsRoute = createRoute({
  method: 'get',
  path: '/api/v1/livechat/analytics/departments/percentage-abandoned-chats',
  tags: ['Omnichannel Departments'],
  summary: 'Get Percentage of Abandoned Chats',
  description:
    '<div style="text-align: center; margin: 1rem 0 1rem 0;"><img src="https://raw.githubusercontent.com/RocketChat/Rocket.Chat-Open-API/main/images/Enterprise%20tag.svg" alt="Enterprise" style="display: block; margin: auto;"></div>\n\nGives the percentage of abandoned chats per department. Permission required: `view-livechat-manager`',
  operationId: 'get-api-v1-livechat-analytics-departments-percentage-abandoned-chats',
  request: {
    headers: z.object({ 'X-Auth-Token': AuthTokenParamsSchema, 'X-User-Id': UserIdParamsSchema }),
    query: z.object({
      start: StartParamsSchema,
      end: EndParamsSchema,
      offset: OffsetParamsSchema,
      count: CountParamsSchema,
      departmentId: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            schema: { type: 'string' },
            example: '64cf6c6feb07a913d946f34d',
            in: 'query',
            name: 'departmentId',
            description:
              'Enter the department ID for which you want the percentage of abandoned chats.',
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
              departments: z
                .array(
                  z
                    .object({
                      _id: z.string().exactOptional(),
                      percentageOfAbandonedChats: z.int().exactOptional(),
                    })
                    .openapi({ required: [] }),
                )
                .exactOptional(),
              count: z.int().exactOptional(),
              offset: z.int().exactOptional(),
              total: z.int().exactOptional(),
              success: z.boolean().exactOptional(),
            })
            .openapi({ required: [] }),
          examples: {
            'Success Example': {
              value: {
                departments: [
                  { _id: '64cf6c6feb07a913d946f34d', percentageOfAbandonedChats: 0 },
                  { _id: '649230d479f5c6e276cf4a12', percentageOfAbandonedChats: 0 },
                  { _id: '64181a0728384134ed600dcc', percentageOfAbandonedChats: 11 },
                ],
                count: 3,
                offset: 0,
                total: 3,
                success: true,
              },
            },
          },
        },
      },
    },
    400: StartendErrorResponse,
    401: AuthorizationErrorResponse,
    403: PermissionErrorResponse,
  },
})

export const getApiV1LivechatDepartmentsArchivedRoute = createRoute({
  method: 'get',
  path: '/api/v1/livechat/departments/archived',
  tags: ['Omnichannel Departments'],
  summary: 'Get Archived Departments',
  description:
    'Get the list of archived departments in the workspace. Any of the following permissions is required: \n * `view-livechat-departments`\n * `view-l-room`',
  operationId: 'get-api-v1-livechat-departments-archived',
  request: {
    headers: z.object({ 'X-Auth-Token': AuthTokenParamsSchema, 'X-User-Id': UserIdParamsSchema }),
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': {
          schema: z
            .object({
              departments: z
                .array(
                  z
                    .object({
                      _id: z.string().exactOptional(),
                      enabled: z.boolean().exactOptional(),
                      showOnRegistration: z.boolean().exactOptional(),
                      name: z.string().exactOptional(),
                      email: z.string().exactOptional(),
                      showOnOfflineForm: z.boolean().exactOptional(),
                      type: z.string().exactOptional(),
                      _updatedAt: z.string().exactOptional(),
                      abandonedRoomsCloseCustomMessage: z.string().exactOptional(),
                      allowReceiveForwardOffline: z.boolean().exactOptional(),
                      chatClosingTags: z.array(z.looseObject({})).exactOptional(),
                      departmentsAllowedToForward: z.array(z.looseObject({})).exactOptional(),
                      description: z.string().exactOptional(),
                      fallbackForwardDepartment: z.string().exactOptional(),
                      offlineMessageChannelName: z.string().exactOptional(),
                      requestTagBeforeClosingChat: z.boolean().exactOptional(),
                      waitingQueueMessage: z.string().exactOptional(),
                      numAgents: z.int().exactOptional(),
                      ancestors: z.array(z.string()).exactOptional(),
                      parentId: z.string().exactOptional(),
                      archived: z.boolean().exactOptional(),
                    })
                    .openapi({ required: [] }),
                )
                .exactOptional(),
              count: z.int().exactOptional(),
              offset: z.int().exactOptional(),
              total: z.int().exactOptional(),
              success: z.boolean().exactOptional(),
            })
            .openapi({ required: [] }),
          examples: {
            'Example 1': {
              value: {
                departments: [
                  {
                    _id: '66fa9f5d6ea9eba859b650b6',
                    enabled: false,
                    showOnRegistration: true,
                    name: 'gfyh88',
                    email: 'john@doe.com',
                    showOnOfflineForm: true,
                    type: 'd',
                    _updatedAt: '2025-03-28T11:17:22.654Z',
                    abandonedRoomsCloseCustomMessage: '',
                    allowReceiveForwardOffline: true,
                    chatClosingTags: [],
                    departmentsAllowedToForward: [],
                    description: '',
                    fallbackForwardDepartment: '',
                    offlineMessageChannelName: '',
                    requestTagBeforeClosingChat: false,
                    waitingQueueMessage: '',
                    numAgents: 0,
                    ancestors: ['67b84af9382738a951e6f3b8'],
                    parentId: '67b84af9382738a951e6f3b8',
                    archived: true,
                  },
                  {
                    _id: '66a7680360ab9acca6a57fad',
                    enabled: false,
                    name: 'test-dept',
                    description: '',
                    showOnRegistration: false,
                    showOnOfflineForm: false,
                    requestTagBeforeClosingChat: false,
                    email: 'test-dept@example.com',
                    chatClosingTags: [],
                    offlineMessageChannelName: '',
                    abandonedRoomsCloseCustomMessage: '',
                    waitingQueueMessage: '',
                    departmentsAllowedToForward: [],
                    fallbackForwardDepartment: '',
                    allowReceiveForwardOffline: false,
                    type: 'd',
                    _updatedAt: '2025-04-02T11:28:31.651Z',
                    numAgents: 0,
                    archived: true,
                  },
                ],
                count: 2,
                offset: 0,
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

export const postApiV1LivechatDepartmentIdArchiveRoute = createRoute({
  method: 'post',
  path: '/api/v1/livechat/department/{_id}/archive',
  tags: ['Omnichannel Departments'],
  summary: 'Archive a Department',
  description:
    "Use this endpoint to archive a department. If a department is no longer needed but you want to retain it for future use, you can archive it.\n\nArchiving a department also disables it and removes it from the list of departments. To view archived departments, use the <a href='https://developer.rocket.chat/apidocs/get-archived-departments' target='_blank'>Get Archived Departments</a> endpoint.\n\nPermission required: `manage-livechat-departments`",
  operationId: 'post-api-v1-livechat-department-archive-_id',
  request: {
    params: z.object({
      _id: z
        .string()
        .openapi({
          param: {
            schema: { type: 'string', example: '693fc4b0ddfe6ceaf280f7f6' },
            name: '_id',
            in: 'path',
            required: true,
            description: 'Enter the department ID that you want to archive.',
          },
          example: '693fc4b0ddfe6ceaf280f7f6',
        }),
    }),
    headers: z.object({ 'X-Auth-Token': AuthTokenParamsSchema, 'X-User-Id': UserIdParamsSchema }),
  },
  responses: {
    200: TrueSuccessResponse,
    400: {
      description: 'Bad Request',
      content: {
        'application/json': {
          schema: z
            .object({ success: z.boolean().exactOptional(), error: z.string().exactOptional() })
            .openapi({ required: [] }),
          examples: {
            'Department Not Found': { value: { success: false, error: 'department-not-found' } },
          },
        },
      },
    },
    401: AuthorizationErrorResponse,
    403: PermissionErrorResponse,
  },
})

export const postApiV1LivechatDepartmentIdUnarchiveRoute = createRoute({
  method: 'post',
  path: '/api/v1/livechat/department/{_id}/unarchive',
  tags: ['Omnichannel Departments'],
  summary: 'Unarchive a Department',
  description:
    "Use this endpoint to unarchive a department. The department returns to the list of departments, but it stays disabled because archiving a department also disables it. To enable the department again, use the <a href='https://developer.rocket.chat/apidocs/update-department' target='_blank'>Update Department</a> endpoint and set `enabled` to `true`.\n\nPermission required: `manage-livechat-departments`",
  operationId: 'post-api-v1-livechat-department-unarchive-_id',
  request: {
    params: z.object({
      _id: z
        .string()
        .openapi({
          param: {
            schema: { type: 'string', example: '693fc4b0ddfe6ceaf280f7f6' },
            name: '_id',
            in: 'path',
            required: true,
            description: 'Enter the department ID that you want to unarchive.',
          },
          example: '693fc4b0ddfe6ceaf280f7f6',
        }),
    }),
    headers: z.object({ 'X-Auth-Token': AuthTokenParamsSchema, 'X-User-Id': UserIdParamsSchema }),
  },
  responses: {
    200: TrueSuccessResponse,
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
            'Department Not Found': {
              value: {
                success: false,
                error: '[department-not-found]',
                errorType: 'department-not-found',
              },
            },
          },
        },
      },
    },
    401: AuthorizationErrorResponse,
    403: PermissionErrorResponse,
  },
})

export const getApiV1LivechatDepartmentIsDepartmentCreationAvailableRoute = createRoute({
  method: 'get',
  path: '/api/v1/livechat/department/isDepartmentCreationAvailable',
  tags: ['Omnichannel Departments'],
  summary: 'Check Department Creation',
  description:
    'Use this endpoint to check whether departments can be created on the workspace. Workspaces on the Premium plans have no limit to the number of departments that can be created. On Community workspaces, only one department can be created.\n\nAny of the following permissions is required:\n * `view-livechat-departments`\n * `manage-livechat-departments`',
  operationId: 'get-api-v1-livechat-department-isDepartmentCreationAvailable',
  request: {
    headers: z.object({ 'X-Auth-Token': AuthTokenParamsSchema, 'X-User-Id': UserIdParamsSchema }),
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': {
          schema: z
            .object({
              isDepartmentCreationAvailable: z.boolean().exactOptional(),
              success: z.boolean().exactOptional(),
            })
            .openapi({ required: [] }),
          examples: {
            'Example 1': { value: { isDepartmentCreationAvailable: true, success: true } },
            'If a department already exists in Community workspaces': {
              value: { isDepartmentCreationAvailable: false, success: true },
            },
          },
        },
      },
    },
    401: AuthorizationErrorResponse,
  },
})

export const postApiV1LivechatCustomFieldsSaveRoute = createRoute({
  method: 'post',
  path: '/api/v1/livechat/custom-fields.save',
  tags: ['Omnichannel Custom Fields'],
  summary: 'Create Omnichannel Custom Field',
  description:
    "Create a new Omnichannel custom field or update an existing custom field. You can refer to the <a href='https://docs.rocket.chat/docs/omnichannel-custom-fields' target='_blank'>Omnichannel Custom Fields</a> user guide for details.\n\nPermission required: `view-livechat-manager`\n\n### Changelog\n| Version      | Description |\n| ---------------- | ------------|\n|9.0.0   | The `403` response returns `errorType: error-forbidden`.       |\n|7.11.0            | Added       |",
  operationId: 'post-api-v1-livechat-custom-fields.save',
  request: {
    headers: z.object({ 'X-Auth-Token': AuthTokenParamsSchema, 'X-User-Id': UserIdParamsSchema }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              customFieldId: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    'If you want to update an existing custom field, enter the `field` value.',
                  example: 'address',
                }),
              customFieldData: z
                .object({
                  field: z
                    .string()
                    .exactOptional()
                    .openapi({ description: 'Enter a value for the field.', example: 'address' }),
                  label: z
                    .string()
                    .exactOptional()
                    .openapi({
                      description: 'Enter a label for the field.',
                      example: 'address-line',
                    }),
                  visibility: z
                    .string()
                    .exactOptional()
                    .openapi({
                      description:
                        'The only options are `hidden` or `visible`. When visible, the custom field is displayed in the contact or room info for agents.',
                    }),
                  scope: z
                    .string()
                    .exactOptional()
                    .openapi({
                      description:
                        'Set the scope of the custom field. The options are: `visitor` and `room`.\r\nRefer to the user guide for details.',
                      example: 'visitor',
                    }),
                  type: z
                    .string()
                    .exactOptional()
                    .openapi({
                      description:
                        'Set the input type of this field. The options are: `input` and `select`.',
                      example: 'input',
                    }),
                  searchable: z
                    .boolean()
                    .exactOptional()
                    .openapi({
                      description:
                        'Set whether or not searching in the Omnichannel Contact Center can be done with the custom field.',
                    }),
                  regexp: z
                    .string()
                    .exactOptional()
                    .openapi({
                      description:
                        'Validate the values entered for the custom field using regular expressions. For example, [a-z]. This means that the custom field only accepts lowercase letters. Any other characters will display an error message.',
                      example: '[a-z]',
                    }),
                  required: z
                    .boolean()
                    .exactOptional()
                    .openapi({ description: 'Set whether or not this field should be mandatory.' }),
                  defaultValue: z
                    .string()
                    .exactOptional()
                    .openapi({
                      description: 'Enter a default value for the field.',
                      example: 'default',
                    }),
                  options: z
                    .string()
                    .exactOptional()
                    .openapi({
                      description:
                        'If the field `type` is `select`, enter the options that users can select. The values must be comma-separated.',
                      example: 'optionA, optionB',
                    }),
                  public: z
                    .boolean()
                    .exactOptional()
                    .openapi({
                      description:
                        'If enabled, the custom field will be displayed in external applications, such as Livechat.',
                    }),
                })
                .openapi({
                  description: 'In this object, provide the custom field data.',
                  required: [],
                }),
            })
            .openapi({ required: ['customFieldData'] }),
          examples: {
            'Example 1': {
              value: {
                customFieldData: {
                  field: 'new1',
                  label: 'new11',
                  visibility: true,
                  scope: 'visitor',
                  type: 'select',
                  searchable: true,
                  regexp: '',
                  required: false,
                  defaultValue: '',
                  options: 'optionA, optionB',
                  public: true,
                },
              },
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
          schema: z
            .object({
              customField: z
                .object({
                  label: z.string().exactOptional(),
                  scope: z.string().exactOptional(),
                  visibility: z.string().exactOptional(),
                  type: z.string().exactOptional(),
                  searchable: z.boolean().exactOptional(),
                  regexp: z.string().exactOptional(),
                  required: z.boolean().exactOptional(),
                  defaultValue: z.string().exactOptional(),
                  options: z.string().exactOptional(),
                  public: z.boolean().exactOptional(),
                  _updatedAt: z.string().exactOptional(),
                })
                .exactOptional()
                .openapi({ required: [] }),
              success: z.boolean().exactOptional(),
            })
            .openapi({ required: [] }),
          examples: {
            Example: {
              value: {
                customField: {
                  label: 'address11',
                  scope: 'visitor',
                  visibility: 'hidden',
                  type: 'input',
                  searchable: true,
                  regexp: '',
                  required: false,
                  defaultValue: '',
                  options: '',
                  public: true,
                  _updatedAt: '2025-10-06T06:52:40.102Z',
                },
                success: true,
              },
            },
          },
        },
      },
    },
    401: AuthorizationErrorResponse,
    403: {
      description: 'Forbidden',
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
            Example: {
              value: {
                success: false,
                error: 'User does not have the permissions required for this action',
                errorType: 'error-forbidden',
              },
            },
          },
        },
      },
    },
  },
})

export const postApiV1LivechatCustomFieldRoute = createRoute({
  method: 'post',
  path: '/api/v1/livechat/custom.field',
  tags: ['Omnichannel Custom Fields'],
  summary: 'Send Custom Field Value',
  description:
    'Send the value for a custom field.\n\n### Changelog\n| Version      | Description |\n| ---------------- | ------------|\n|0.70.0            | Added       |',
  operationId: 'post-api-v1-livechat-custom.field',
  request: {
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              token: z.string().openapi({ description: 'The visitor token.' }),
              key: z.string().openapi({ description: 'The custom field.' }),
              value: z
                .string()
                .openapi({ description: 'The value you want to set for the custom field.' }),
              overwrite: z
                .boolean()
                .openapi({ description: 'Overwrite the value of the custom field.' }),
            })
            .openapi({ required: ['token', 'key', 'value', 'overwrite'] }),
          examples: {
            'Example 1': {
              value: {
                token: 'iNKE8a6k6cjbqWhWd',
                key: 'address',
                value: 'Rocket.Chat Avenue',
                overwrite: true,
              },
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
          schema: z
            .object({
              field: z
                .object({
                  key: z.string().exactOptional(),
                  value: z.string().exactOptional(),
                  overwrite: z.boolean().exactOptional(),
                })
                .exactOptional()
                .openapi({ required: [] }),
              success: z.boolean().exactOptional(),
            })
            .openapi({ required: [] }),
          examples: {
            'Success Example': {
              value: {
                field: { key: 'address', value: 'Rocket.Chat Avenue', overwrite: true },
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
                error: "must have required property 'token' [error-invalid-params]",
                errorType: 'error-invalid-params',
              },
            },
            'Example 2': {
              value: {
                success: false,
                error: "must have required property 'key' [error-invalid-params]",
                errorType: 'error-invalid-params',
              },
            },
          },
        },
      },
    },
  },
})

export const postApiV1LivechatCustomFieldsRoute = createRoute({
  method: 'post',
  path: '/api/v1/livechat/custom.fields',
  tags: ['Omnichannel Custom Fields'],
  summary: 'Send Array of Custom Field Values',
  description:
    'Send an array of values for different custom fields.\n\n### Changelog\n| Version      | Description |\n| ---------------- | ------------|\n|0.70.0            | Added       |',
  operationId: 'post-api-v1-livechat-custom.fields',
  request: {
    body: {
      description: '',
      content: {
        'application/json': {
          schema: z
            .object({
              token: z.string().openapi({ description: 'The visitor token.' }),
              customFields: z
                .array(
                  z
                    .object({
                      key: z.string().openapi({ description: 'The custom field.' }),
                      value: z
                        .string()
                        .openapi({
                          description: 'The value you want to set for the custom field.',
                        }),
                      overwrite: z
                        .boolean()
                        .openapi({ description: 'Overwrite the value of the custom field.' }),
                    })
                    .openapi({ required: ['key', 'value', 'overwrite'] }),
                )
                .openapi({
                  description: 'The object in which you must enter the custom field information.',
                }),
            })
            .openapi({ required: ['token', 'customFields'] }),
          examples: {
            'Example 1': {
              value: {
                token: 'iNKE8a6k6cjbqWhWd',
                customFields: [{ key: 'address', value: 'Rocket.Chat Avenue', overwrite: true }],
              },
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
          schema: z
            .object({
              fields: z
                .array(
                  z
                    .object({
                      Key: z.string().exactOptional(),
                      value: z.string().exactOptional(),
                      overwrite: z.boolean().exactOptional(),
                    })
                    .openapi({ required: [] }),
                )
                .exactOptional(),
              success: z.boolean().exactOptional(),
            })
            .openapi({ 'x-examples': null, required: [] }),
          examples: {
            'Success Example': {
              value: {
                fields: [{ Key: 'address', value: 'Rocket.Chat Avenue', overwrite: true }],
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
                error: "must have required property 'token' [error-invalid-params]",
                errorType: 'error-invalid-params',
              },
            },
            'Example 2': {
              value: {
                success: false,
                error: "must have required property 'key' [error-invalid-params]",
                errorType: 'error-invalid-params',
              },
            },
          },
        },
      },
    },
  },
})

export const getApiV1LivechatCustomFields2Route = createRoute({
  method: 'get',
  path: '/api/v1/livechat/custom-fields',
  tags: ['Omnichannel Custom Fields'],
  summary: 'Get Omnichannel Custom Fields',
  description:
    'Get a list of the Omnichannel custom fields.\nPermission required: `view-l-room`\n\n### Changelog\n| Version      | Description |\n| ---------------- | ------------|\n|2.2.0             | Added       |',
  operationId: 'get-api-v1-livechat-custom-fields',
  request: {
    headers: z.object({ 'X-Auth-Token': AuthTokenParamsSchema, 'X-User-Id': UserIdParamsSchema }),
    query: z.object({
      offset: OffsetParamsSchema,
      count: CountParamsSchema,
      sort: SortParamsSchema,
      text: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            schema: { type: 'string' },
            in: 'query',
            name: 'text',
            description: 'Enter the text to filter the search result.',
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
              customFields: z
                .array(
                  z
                    .object({
                      _id: z.string().exactOptional(),
                      label: z.string().exactOptional(),
                      scope: z.string().exactOptional(),
                      visibility: z.string().exactOptional(),
                      regexp: z.string().exactOptional(),
                      searchable: z.boolean().exactOptional(),
                      type: z.string().exactOptional(),
                      required: z.boolean().exactOptional(),
                      defaultValue: z.string().exactOptional(),
                      options: z.string().exactOptional(),
                      public: z.boolean().exactOptional(),
                      _updatedAt: z.string().exactOptional(),
                      id: z.string().exactOptional(),
                    })
                    .openapi({ required: [] }),
                )
                .exactOptional(),
              count: z.int().exactOptional(),
              offset: z.int().exactOptional(),
              total: z.int().exactOptional(),
              success: z.boolean().exactOptional(),
            })
            .openapi({ required: [] }),
          examples: {
            'Success Example': {
              value: {
                customFields: [
                  {
                    _id: 'address',
                    label: 'address',
                    scope: 'visitor',
                    visibility: 'visible',
                    regexp: '',
                    searchable: true,
                    type: 'input',
                    required: false,
                    defaultValue: '',
                    options: '',
                    public: true,
                    _updatedAt: '2023-10-30T13:43:09.408Z',
                    id: 'address',
                  },
                ],
                count: 1,
                offset: 0,
                total: 1,
                success: true,
              },
            },
          },
        },
      },
    },
    401: AuthorizationErrorResponse,
    403: PermissionErrorResponse,
  },
})

export const getApiV1LivechatCustomFieldsIdRoute = createRoute({
  method: 'get',
  path: '/api/v1/livechat/custom-fields/{_id}',
  tags: ['Omnichannel Custom Fields'],
  summary: 'Get Custom Field Information',
  description:
    'Get details about a specific custom field.\nPermission required: `view-l-room`\n\n### Changelog\n| Version      | Description |\n| ---------------- | ------------|\n|2.4.0             | Added       |',
  operationId: 'get-api-v1-livechat-custom-fields-_id',
  request: {
    headers: z.object({ 'X-Auth-Token': AuthTokenParamsSchema, 'X-User-Id': UserIdParamsSchema }),
    params: z.object({
      _id: z
        .string()
        .openapi({
          param: {
            name: '_id',
            in: 'path',
            description: 'The custom field ID.',
            required: true,
            schema: { type: 'string' },
            example: 'address',
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
              customField: z
                .object({
                  _id: z.string().exactOptional(),
                  label: z.string().exactOptional(),
                  scope: z.string().exactOptional(),
                  visibility: z.string().exactOptional(),
                  regexp: z.string().exactOptional(),
                  searchable: z.boolean().exactOptional(),
                  type: z.string().exactOptional(),
                  required: z.boolean().exactOptional(),
                  defaultValue: z.string().exactOptional(),
                  options: z.string().exactOptional(),
                  public: z.boolean().exactOptional(),
                  _updatedAt: z.string().exactOptional(),
                  id: z.string().exactOptional(),
                })
                .exactOptional()
                .openapi({ required: [] }),
              success: z.boolean().exactOptional(),
            })
            .openapi({ required: [] }),
          examples: {
            'Success Example': {
              value: {
                customField: {
                  _id: 'address',
                  label: 'address',
                  scope: 'visitor',
                  visibility: 'visible',
                  regexp: '',
                  searchable: true,
                  type: 'input',
                  required: false,
                  defaultValue: '',
                  options: '',
                  public: true,
                  _updatedAt: '2023-10-30T13:43:09.408Z',
                  id: 'address',
                },
                success: true,
              },
            },
          },
        },
      },
    },
    401: AuthorizationErrorResponse,
    403: PermissionErrorResponse,
  },
})

export const postApiV1LivechatCustomFieldsDeleteRoute = createRoute({
  method: 'post',
  path: '/api/v1/livechat/custom-fields.delete',
  tags: ['Omnichannel Custom Fields'],
  summary: 'Delete Omnichannel Custom Field',
  description:
    'Delete an Omnichannel custom field entry. Permission required: `view-livechat-manager`. (On the workspace UI, go to **Manage** > **Workspace** > **Permissions**. Search for the `View Omnichannel Manager` permission. By default, livechat managers and agents have this permission.)\n\n### Changelog\n| Version      | Description |\n| ---------------- | ------------|\n|9.0.0   | The `403` response returns `errorType: error-forbidden`.       |\n|7.11.0            | Added       |',
  operationId: 'post-api-v1-livechat-custom-fields.delete',
  request: {
    headers: z.object({ 'X-Auth-Token': AuthTokenParamsSchema, 'X-User-Id': UserIdParamsSchema }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              customFieldId: z
                .string()
                .openapi({
                  description: 'Enter the custom field name that you want to delete.',
                  example: 'class',
                }),
            })
            .openapi({ required: ['customFieldId'] }),
          examples: { 'Example 1': { value: { customFieldId: 'class' } } },
        },
      },
    },
  },
  responses: {
    200: TrueSuccessResponse,
    400: {
      description: 'Bad Request',
      content: {
        'application/json': {
          schema: z
            .object({
              success: z.boolean().exactOptional(),
              errorType: z.string().exactOptional(),
              error: z.string().exactOptional(),
            })
            .openapi({ required: [] }),
          examples: {
            'Example 1': {
              value: {
                success: false,
                errorType: 'error-invalid-params',
                error: "must have required property 'customFieldId'",
              },
            },
          },
        },
      },
    },
    401: AuthorizationErrorResponse,
    403: {
      description: 'Forbidden',
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
                error: 'User does not have the permissions required for this action',
                errorType: 'error-forbidden',
              },
            },
          },
        },
      },
      headers: z.object({}),
    },
  },
})

export const postApiV1LivechatPageVisitedRoute = createRoute({
  method: 'post',
  path: '/api/v1/livechat/page.visited',
  tags: ['Livechat Page Visited'],
  summary: 'Send Visitor Navigation History',
  description: 'Retrieves the pages your visitor navigated on your website.',
  operationId: 'post-api-v1-livechat-page.visited',
  request: {
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              token: z.string().openapi({ description: 'Enter the visitor token.' }),
              rid: z.string().exactOptional().openapi({ description: 'Enter the room ID.' }),
              pageInfo: z
                .object({
                  change: z.string(),
                  title: z.string(),
                  location: z.object({ href: z.string() }).openapi({ required: ['href'] }),
                })
                .openapi({
                  required: ['change', 'title', 'location'],
                  description: 'Enter the page information',
                }),
            })
            .openapi({ required: ['token', 'pageInfo'] }),
          examples: {
            'Example 1': {
              value: {
                token: 'iNKE8a6k6cjbqWhWd',
                rid: 'vp3D9H8ud6HYvRpvq',
                pageInfo: {
                  change: 'url',
                  title: '',
                  location: {
                    href: 'http://localhost:3000/packages/rocketchat_livechat/assets/demo.html#page-4',
                  },
                },
              },
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
          schema: z
            .object({
              page: z
                .object({
                  msg: z.string().exactOptional(),
                  navigation: z
                    .object({
                      page: z
                        .object({
                          change: z.string().exactOptional(),
                          title: z.string().exactOptional(),
                          location: z
                            .object({ href: z.string().exactOptional() })
                            .exactOptional()
                            .openapi({ required: [] }),
                        })
                        .exactOptional()
                        .openapi({ required: [] }),
                      token: z.string().exactOptional(),
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
                page: {
                  msg: ' - file:///C:/Users/xyz/livechat/helloWorld.html',
                  navigation: {
                    page: {
                      change: 'url',
                      title: '',
                      location: { href: 'file:///C:/Users/xyz/livechat/helloWorld.html' },
                    },
                    token: '38cc8c765bf77e943f6e4319c5891f6c40d8538ce83473c8987562ea1d762d04',
                  },
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
                error: "must have required property 'token' [error-invalid-params]",
                errorType: 'error-invalid-params',
              },
            },
            'Example 2': {
              value: {
                success: false,
                error: "must have required property 'pageInfo' [error-invalid-params]",
                errorType: 'error-invalid-params',
              },
            },
          },
        },
      },
    },
  },
})

export const postApiV1LivechatTranscriptRoute = createRoute({
  method: 'post',
  path: '/api/v1/livechat/transcript',
  tags: ['Omnichannel Transcript'],
  summary: 'Request Omnichannel Transcript',
  description:
    'The endpoint is used by visitors to request a transcript of their chat to be sent to their email once the conversation ends. The room must be closed before you can send a transcript.\n\nYou can also request transcripts for older conversations given that you know the older token and room ID.\n\n### Changelog\n| Version      | Description |\n| ---------------- | ------------|\n|0.70.0             | Added       |',
  operationId: 'post-api-v1-livechat-transcript',
  request: {
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              rid: z.string().openapi({ description: 'The room ID.' }),
              token: z.string().openapi({ description: 'The visitor token.' }),
              email: z
                .string()
                .openapi({
                  description: "The visitor's email ID where the transcript should be sent.",
                }),
            })
            .openapi({ required: ['rid', 'token', 'email'] }),
          examples: {
            'Example 1': {
              value: {
                rid: 'XFzMqgn33DcsQkpJp',
                token: 'iNKE8a6k6cjbqWhWd',
                email: 'visitor@rocket.chat',
              },
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
          schema: z
            .object({ message: z.string().exactOptional(), success: z.boolean().exactOptional() })
            .openapi({ required: [] }),
          examples: {
            'Success Example': { value: { message: 'Livechat transcript sent', success: true } },
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
                error: "must have required property 'rid' [error-invalid-params]",
                errorType: 'error-invalid-params',
              },
            },
            'Example 2': {
              value: {
                success: false,
                error: "must have required property 'token' [error-invalid-params]",
                errorType: 'error-invalid-params',
              },
            },
          },
        },
      },
    },
  },
})

export const postApiV1LivechatTranscriptRidRoute = createRoute({
  method: 'post',
  path: '/api/v1/livechat/transcript/{rid}',
  tags: ['Omnichannel Transcript'],
  summary: 'Send Omnichannel Transcript',
  description:
    'This endpoint is used by agents and managers to schedule an email transcript to be sent once the chat is closed.\nPermission required: `send-omnichannel-chat-transcript`\nThe room must be opened.\n\n### Changelog\n| Version      | Description |\n| ---------------- | ------------|\n|6.4.0            | Added       |',
  operationId: 'post-api-v1-livechat-transcript-:rid',
  request: {
    headers: z.object({ 'X-Auth-Token': AuthTokenParamsSchema, 'X-User-Id': UserIdParamsSchema }),
    params: z.object({
      rid: z
        .string()
        .openapi({
          param: {
            name: 'rid',
            in: 'path',
            description: 'The room ID.',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              email: z
                .string()
                .openapi({ description: 'The email address where the transcript should be sent.' }),
              subject: z.string().openapi({ description: 'The subject of the email.' }),
            })
            .openapi({ required: ['email', 'subject'] }),
          examples: {
            'Example 1': { value: { email: 'email@test.com', subject: 'Livechat Transcript' } },
          },
        },
      },
    },
  },
  responses: {
    200: TrueSuccessResponse,
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
                error: "must have required property 'email' [error-invalid-params]",
                errorType: 'error-invalid-params',
              },
            },
            'Example 2': {
              value: {
                success: false,
                error: "must have required property 'subject' [error-invalid-params]",
                errorType: 'error-invalid-params',
              },
            },
          },
        },
      },
    },
    401: AuthorizationErrorResponse,
    403: PermissionErrorResponse,
  },
})

export const deleteApiV1LivechatTranscriptRidRoute = createRoute({
  method: 'delete',
  path: '/api/v1/livechat/transcript/{rid}',
  tags: ['Omnichannel Transcript'],
  summary: 'Delete Omnichannel Transcript',
  description:
    "This endpoint is used to cancel any transcript requests for an open room, meaning that the chat transcript won't be sent after the chat is closed. You can not use Send Omnichannel Transcript endpoint twice at a time. You must delete the previous request with this endpoint before requesting again.\nPermission required: `send-omnichannel-chat-transcript`\n\n### Changelog\n| Version      | Description |\n| ---------------- | ------------|\n|6.4.0            | Added       |",
  operationId: 'delete-api-v1-livechat-transcript-rid',
  request: {
    headers: z.object({ 'X-User-Id': UserIdParamsSchema, 'X-Auth-Token': AuthTokenParamsSchema }),
    params: z.object({
      rid: z
        .string()
        .openapi({
          param: {
            name: 'rid',
            in: 'path',
            description: 'The room ID.',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: TrueSuccessResponse,
    401: AuthorizationErrorResponse,
    403: PermissionErrorResponse,
  },
})

export const postApiV1OmnichannelRidRequestTranscriptRoute = createRoute({
  method: 'post',
  path: '/api/v1/omnichannel/{rid}/request-transcript',
  tags: ['Omnichannel Transcript'],
  summary: 'Request PDF Transcript',
  description:
    '<div style="text-align: center; margin: 1rem 0 1rem 0;"><img src="https://raw.githubusercontent.com/RocketChat/Rocket.Chat-Open-API/main/images/Enterprise%20tag.svg" alt="Enterprise" style="display: block; margin: auto;"></div>\n\n<a href="https://docs.rocket.chat/docs/omnichannel-conversations#conversation-transcript" target="_blank">Request a PDF transcript</a> for an Omnichannel conversation. The conversation must be closed before it can be exported.\n\nPermission required: `request-pdf-transcript`.\nOmnichannel <a href="https://docs.rocket.chat/docs/managers" target="_blank">managers</a> and <a href="https://docs.rocket.chat/docs/agents" target="_blank">agents</a> have this permission by default.\n\n### Changelog\n| Version      | Description |\n| ---------------- | ------------|\n|6.0.0            | Added       |',
  operationId: 'post-api-v1-omnichannel-rid-request-transcript',
  request: {
    params: z.object({
      rid: z
        .string()
        .openapi({
          param: {
            name: 'rid',
            in: 'path',
            description: 'The room ID.',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    headers: z.object({ 'X-Auth-Token': AuthTokenParamsSchema, 'X-User-Id': UserIdParamsSchema }),
  },
  responses: {
    200: TrueSuccessResponse,
    401: AuthorizationErrorResponse,
    403: PermissionErrorResponse,
  },
})

export const getApiV1LivechatAgentsAgentIdDepartmentsRoute = createRoute({
  method: 'get',
  path: '/api/v1/livechat/agents/{agentId}/departments',
  tags: ['Omnichannel Agent Stats'],
  summary: 'Get Agent Departments',
  description:
    'Returns the departments associated with an agent.\nPermission required: `view-l-room`',
  operationId: 'get-api-v1-livechat-agents-agentId-departments',
  request: {
    headers: z.object({ 'X-Auth-Token': AuthTokenParamsSchema, 'X-User-Id': UserIdParamsSchema }),
    params: z.object({
      agentId: z
        .string()
        .openapi({
          param: {
            name: 'agentId',
            in: 'path',
            description: 'The agent ID.',
            required: true,
            schema: { type: 'string' },
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
              departments: z
                .array(
                  z
                    .object({
                      _id: z.string().exactOptional(),
                      agentId: z.string().exactOptional(),
                      departmentId: z.string().exactOptional(),
                      _updatedAt: z.string().exactOptional(),
                      count: z.int().exactOptional(),
                      departmentEnabled: z.boolean().exactOptional(),
                      order: z.int().exactOptional(),
                      username: z.string().exactOptional(),
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
                departments: [
                  {
                    _id: 'R34ZLL6wxDuk4S29G',
                    agentId: 'XycfA5CetCPuEjqxw',
                    departmentId: 'CAJioQNAvLnYWTy8i',
                    _updatedAt: '2021-06-29T16:09:12.897Z',
                    count: 0,
                    departmentEnabled: true,
                    order: 0,
                    username: 'kim.baek',
                  },
                  {
                    _id: '4TnnwbRsBY2upkzjp',
                    agentId: 'XycfA5CetCPuEjqxw',
                    departmentId: 'GgYvrkAF63aeQmsh4',
                    _updatedAt: '2021-06-29T16:09:12.918Z',
                    count: 0,
                    departmentEnabled: true,
                    order: 0,
                    username: 'kim.baek',
                  },
                  {
                    _id: 'wJTwJsAxRcZ8nc9sB',
                    agentId: 'XycfA5CetCPuEjqxw',
                    departmentId: 'Yi87Ju7eTHiZQ7CJt',
                    _updatedAt: '2021-06-29T16:09:12.937Z',
                    count: 0,
                    departmentEnabled: false,
                    order: 0,
                    username: 'kim.baek',
                  },
                  {
                    _id: 'ccjbvLEREZ6vwjBFk',
                    agentId: 'XycfA5CetCPuEjqxw',
                    departmentId: 'sLYp3ry7CRizaP3rJ',
                    _updatedAt: '2021-06-29T16:09:12.956Z',
                    count: 0,
                    departmentEnabled: false,
                    order: 0,
                    username: 'kim.baek',
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

export const getApiV1LivechatAnalyticsAgentsAverageServiceTimeRoute = createRoute({
  method: 'get',
  path: '/api/v1/livechat/analytics/agents/average-service-time',
  tags: ['Omnichannel Agent Stats'],
  summary: 'Get Agent Average Service Time',
  description:
    '<div style="text-align: center; margin: 1rem 0 1rem 0;"><img src="https://raw.githubusercontent.com/RocketChat/Rocket.Chat-Open-API/main/images/Enterprise%20tag.svg" alt="Enterprise" style="display: block; margin: auto;"></div>\n\nGives the average service time (in seconds) for each agent.\nPermission required: `view-livechat-manager`',
  operationId: 'get-api-v1-livechat-analytics-agents-average-service-time',
  request: {
    headers: z.object({ 'X-Auth-Token': AuthTokenParamsSchema, 'X-User-Id': UserIdParamsSchema }),
    query: z.object({
      start: StartParamsSchema,
      end: EndParamsSchema,
      count: CountParamsSchema,
      offset: OffsetParamsSchema,
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': {
          schema: z
            .object({
              agents: z
                .array(
                  z
                    .object({
                      _id: z.string().exactOptional(),
                      username: z.string().exactOptional(),
                      averageServiceTimeInSeconds: z.int().exactOptional(),
                    })
                    .openapi({ required: [] }),
                )
                .exactOptional(),
              count: z.int().exactOptional(),
              offset: z.int().exactOptional(),
              total: z.int().exactOptional(),
              success: z.boolean().exactOptional(),
            })
            .openapi({ required: [] }),
          examples: {
            'Success Example': {
              value: {
                agents: [
                  {
                    _id: 'rbAXPnMktTFbNpwtJ',
                    username: 'kim.jane',
                    averageServiceTimeInSeconds: 1106183,
                  },
                  {
                    _id: 'CkCPNcvsvCDfmWLqC',
                    username: 'byu.baek',
                    averageServiceTimeInSeconds: 2059,
                  },
                  {
                    _id: 'CkCPNcvsvCDfmWLqC',
                    username: 'doe.john',
                    averageServiceTimeInSeconds: 83303,
                  },
                ],
                count: 3,
                offset: 0,
                total: 3,
                success: true,
              },
            },
          },
        },
      },
    },
    400: StartendErrorResponse,
    401: AuthorizationErrorResponse,
    403: PermissionErrorResponse,
  },
})

export const getApiV1LivechatAnalyticsAgentsTotalServiceTimeRoute = createRoute({
  method: 'get',
  path: '/api/v1/livechat/analytics/agents/total-service-time',
  tags: ['Omnichannel Agent Stats'],
  summary: 'Get Agent Total Service Time',
  description:
    '<div style="text-align: center; margin: 1rem 0 1rem 0;"><img src="https://raw.githubusercontent.com/RocketChat/Rocket.Chat-Open-API/main/images/Enterprise%20tag.svg" alt="Enterprise" style="display: block; margin: auto;"></div>\n\nGives the total service time sorted by agent.\nPermission required: `view-livechat-manager`\n\n**Service time** means how long time the agent is online and available. It does not mean how long time the agent was busy answering chats.',
  operationId: 'get-api-v1-livechat-analytics-agents-total-service-time',
  request: {
    headers: z.object({ 'X-Auth-Token': AuthTokenParamsSchema, 'X-User-Id': UserIdParamsSchema }),
    query: z.object({
      start: StartParamsSchema,
      end: EndParamsSchema,
      offset: OffsetParamsSchema,
      count: CountParamsSchema,
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': {
          schema: z
            .object({
              agents: z
                .array(
                  z
                    .object({
                      chats: z.int().exactOptional(),
                      _id: z.string().exactOptional(),
                      username: z.string().exactOptional(),
                      serviceTimeDuration: z.int().exactOptional(),
                    })
                    .openapi({ required: [] }),
                )
                .exactOptional(),
              count: z.int().exactOptional(),
              offset: z.int().exactOptional(),
              total: z.int().exactOptional(),
              success: z.boolean().exactOptional(),
            })
            .openapi({ required: [] }),
          examples: {
            'Success Example': {
              value: {
                agents: [
                  {
                    chats: 3,
                    _id: 'rbAXPnMktTFbNpwtJ',
                    username: 'kim.baeko',
                    serviceTimeDuration: 331,
                  },
                  {
                    chats: 4,
                    _id: 'CkCPNcvsvCDfmWLqC',
                    username: 'han.jun',
                    serviceTimeDuration: 823,
                  },
                  {
                    chats: 4,
                    _id: 'CkCPNcvsvCDfmWLqC',
                    username: 'doe.john',
                    serviceTimeDuration: 333,
                  },
                ],
                count: 3,
                offset: 0,
                total: 3,
                success: true,
              },
            },
          },
        },
      },
    },
    400: StartendErrorResponse,
    401: AuthorizationErrorResponse,
    403: PermissionErrorResponse,
  },
})

export const getApiV1LivechatAnalyticsAgentsAvailableForServiceHistoryRoute = createRoute({
  method: 'get',
  path: '/api/v1/livechat/analytics/agents/available-for-service-history',
  tags: ['Omnichannel Agent Stats'],
  summary: 'Get History of Agents Available for Service',
  description:
    '<div style="text-align: center; margin: 1rem 0 1rem 0;"><img src="https://raw.githubusercontent.com/RocketChat/Rocket.Chat-Open-API/main/images/Enterprise%20tag.svg" alt="Enterprise" style="display: block; margin: auto;"></div>\n\nReturn the list of agents and their available time for the provided time frame.\nPermission required: `view-livechat-manager`',
  operationId: 'get-api-v1-livechat-analytics-agents-available-for-service-history',
  request: {
    headers: z.object({ 'X-Auth-Token': AuthTokenParamsSchema, 'X-User-Id': UserIdParamsSchema }),
    query: z.object({
      start: StartParamsSchema,
      end: EndParamsSchema,
      fullReport: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            name: 'fullReport',
            in: 'query',
            description:
              'If set to true, it shares the service history which will contain more granular data such as the time of the day the agent was available.',
            schema: { type: 'boolean' },
            example: true,
            required: false,
          },
        }),
      offset: OffsetParamsSchema,
      count: CountParamsSchema,
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': {
          schema: z
            .object({
              agents: z
                .array(
                  z
                    .object({
                      serviceHistory: z
                        .array(
                          z
                            .object({
                              startedAt: z.string().exactOptional(),
                              stoppedAt: z.string().exactOptional(),
                            })
                            .openapi({ required: [] }),
                        )
                        .exactOptional(),
                      availableTimeInSeconds: z.int().exactOptional(),
                      username: z.string().exactOptional(),
                    })
                    .openapi({ required: [] }),
                )
                .exactOptional(),
              count: z.int().exactOptional(),
              offset: z.int().exactOptional(),
              total: z.int().exactOptional(),
              success: z.boolean().exactOptional(),
            })
            .openapi({ required: [] }),
          examples: {
            'Success Example': {
              value: {
                agents: [
                  {
                    serviceHistory: [
                      {
                        startedAt: '2021-11-24T08:35:49.058Z',
                        stoppedAt: '2021-11-24T08:41:32.721Z',
                      },
                      {
                        startedAt: '2021-11-24T08:51:15.623Z',
                        stoppedAt: '2021-11-24T08:53:59.707Z',
                      },
                      {
                        startedAt: '2021-11-24T08:55:45.128Z',
                        stoppedAt: '2021-11-24T08:55:45.214Z',
                      },
                      {
                        startedAt: '2021-11-24T16:56:35.486Z',
                        stoppedAt: '2021-11-24T17:05:56.611Z',
                      },
                      {
                        startedAt: '2021-11-24T17:20:26.066Z',
                        stoppedAt: '2021-11-24T18:29:59.000Z',
                      },
                    ],
                    availableTimeInSeconds: 2115334,
                    username: 'doe.john',
                  },
                  {
                    serviceHistory: [
                      {
                        startedAt: '2022-02-06T09:45:26.476Z',
                        stoppedAt: '2022-02-06T09:45:27.499Z',
                      },
                      {
                        startedAt: '2022-02-06T09:45:28.083Z',
                        stoppedAt: '2022-02-06T09:45:28.663Z',
                      },
                      {
                        startedAt: '2022-02-06T09:45:29.117Z',
                        stoppedAt: '2022-02-06T09:45:29.672Z',
                      },
                      {
                        startedAt: '2022-02-06T09:45:30.129Z',
                        stoppedAt: '2022-02-06T09:45:30.534Z',
                      },
                      {
                        startedAt: '2022-02-06T09:45:30.923Z',
                        stoppedAt: '2022-02-06T09:45:31.714Z',
                      },
                      {
                        startedAt: '2022-02-06T09:45:39.037Z',
                        stoppedAt: '2022-02-06T09:45:41.680Z',
                      },
                    ],
                    availableTimeInSeconds: 7586,
                    username: 'white.chris',
                  },
                  {
                    serviceHistory: [
                      {
                        startedAt: '2021-12-27T13:25:44.459Z',
                        stoppedAt: '2021-12-27T13:27:11.208Z',
                      },
                    ],
                    availableTimeInSeconds: 1508,
                    username: 'max.yui',
                  },
                ],
                count: 3,
                offset: 0,
                total: 3,
                success: true,
              },
            },
          },
        },
      },
    },
    400: StartendErrorResponse,
    401: AuthorizationErrorResponse,
    403: PermissionErrorResponse,
  },
})

export const getApiV1LivechatAppearanceRoute = createRoute({
  method: 'get',
  path: '/api/v1/livechat/appearance',
  tags: ['Livechat Appearance'],
  summary: 'Get Livechat Appearance',
  description:
    'Get the settings about the widget appearance.\nPermission required: `view-livechat-manager`\n\n### Changelog\n| Version      | Description |\n| ---------------- | ------------|\n|6.4.0             | Added       |',
  operationId: 'get-api-v1-livechat-appearance',
  request: {
    headers: z.object({ 'X-Auth-Token': AuthTokenParamsSchema, 'X-User-Id': UserIdParamsSchema }),
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': {
          schema: z
            .object({
              appearance: z
                .array(
                  z
                    .object({
                      _id: z.string().exactOptional(),
                      type: z.string().exactOptional(),
                      group: z.string().exactOptional(),
                      public: z.boolean().exactOptional(),
                      i18nLabel: z.string().exactOptional(),
                      packageValue: z.boolean().exactOptional(),
                      valueSource: z.string().exactOptional(),
                      hidden: z.boolean().exactOptional(),
                      blocked: z.boolean().exactOptional(),
                      sorter: z.int().exactOptional(),
                      i18nDescription: z.string().exactOptional(),
                      autocomplete: z.boolean().exactOptional(),
                      ts: z.string().exactOptional(),
                      _updatedAt: z.string().exactOptional(),
                      createdAt: z.string().exactOptional(),
                      value: z.boolean().exactOptional(),
                      secret: z.boolean().exactOptional(),
                      section: z.string().exactOptional(),
                      enterprise: z.boolean().exactOptional(),
                      requiredOnWizard: z.boolean().exactOptional(),
                      env: z.boolean().exactOptional(),
                      enableQuery: z.string().exactOptional(),
                      editor: z.string().exactOptional(),
                      packageEditor: z.string().exactOptional(),
                    })
                    .openapi({ required: [] }),
                )
                .exactOptional(),
              success: z.boolean().exactOptional(),
            })
            .openapi({ required: [] }),
          examples: {
            'Example 1': {
              value: {
                appearance: [
                  {
                    _id: 'Livechat_conversation_finished_message',
                    type: 'string',
                    group: 'Omnichannel',
                    public: true,
                    i18nLabel: 'Conversation_finished_message',
                    packageValue: '',
                    valueSource: 'packageValue',
                    hidden: false,
                    blocked: false,
                    sorter: 16,
                    i18nDescription: 'Livechat_conversation_finished_message_Description',
                    autocomplete: true,
                    ts: '2021-12-03T16:21:59.851Z',
                    _updatedAt: '2021-12-03T16:21:59.851Z',
                    createdAt: '2021-12-03T16:21:59.851Z',
                    value: 'CLOSE!!!',
                    secret: false,
                    section: 'Livechat',
                    enterprise: false,
                    requiredOnWizard: false,
                    env: false,
                    enableQuery: '{"_id":"Livechat_enabled","value":true}',
                  },
                  {
                    _id: 'Livechat_conversation_finished_text',
                    _updatedAt: '2023-02-06T17:25:35.940Z',
                    autocomplete: true,
                    blocked: false,
                    createdAt: '2021-12-03T16:21:59.861Z',
                    group: 'Omnichannel',
                    hidden: false,
                    i18nDescription: 'Livechat_conversation_finished_text_Description',
                    i18nLabel: 'Conversation_finished_text',
                    multiline: true,
                    packageValue: '',
                    public: true,
                    secret: false,
                    sorter: 17,
                    ts: '2021-12-03T16:21:59.861Z',
                    type: 'string',
                    value: 'BYE!!!',
                    valueSource: 'packageValue',
                    section: 'Livechat',
                    enterprise: false,
                    requiredOnWizard: false,
                    env: false,
                    enableQuery: '{"_id":"Livechat_enabled","value":true}',
                  },
                  {
                    _id: 'Livechat_display_offline_form',
                    type: 'boolean',
                    group: 'Omnichannel',
                    public: true,
                    section: 'Livechat',
                    i18nLabel: 'Display_offline_form',
                    packageValue: true,
                    valueSource: 'packageValue',
                    hidden: false,
                    blocked: false,
                    sorter: 4,
                    i18nDescription: 'Livechat_display_offline_form_Description',
                    ts: '2021-10-27T22:25:42.892Z',
                    _updatedAt: '2021-10-27T22:25:42.892Z',
                    createdAt: '2021-10-27T22:25:42.892Z',
                    value: true,
                    autocomplete: true,
                    secret: false,
                    enterprise: false,
                    requiredOnWizard: false,
                    env: false,
                    enableQuery: '{"_id":"Livechat_enabled","value":true}',
                  },
                  {
                    _id: 'Livechat_email_field_registration_form',
                    type: 'boolean',
                    group: 'Omnichannel',
                    public: true,
                    i18nLabel: 'Show_email_field',
                    packageValue: true,
                    valueSource: 'packageValue',
                    hidden: false,
                    blocked: false,
                    sorter: 20,
                    i18nDescription: 'Livechat_email_field_registration_form_Description',
                    autocomplete: true,
                    ts: '2021-12-03T16:21:59.926Z',
                    _updatedAt: '2021-12-03T16:21:59.926Z',
                    createdAt: '2021-12-03T16:21:59.926Z',
                    value: true,
                    secret: false,
                    section: 'Livechat',
                    enterprise: false,
                    requiredOnWizard: false,
                    env: false,
                    enableQuery: '{"_id":"Livechat_enabled","value":true}',
                  },
                  {
                    _id: 'Livechat_show_agent_info',
                    _updatedAt: '2023-08-10T13:27:26.422Z',
                    autocomplete: true,
                    blocked: false,
                    createdAt: '2021-12-03T16:21:59.833Z',
                    group: 'Omnichannel',
                    hidden: false,
                    i18nDescription: 'Livechat_show_agent_info_Description',
                    i18nLabel: 'Show_agent_info',
                    packageValue: true,
                    public: true,
                    secret: false,
                    sorter: 14,
                    ts: '2021-12-03T16:21:59.833Z',
                    type: 'boolean',
                    value: false,
                    valueSource: 'packageValue',
                    section: 'Livechat',
                    enterprise: false,
                    requiredOnWizard: false,
                    env: false,
                    enableQuery: '{"_id":"Livechat_enabled","value":true}',
                  },
                  {
                    _id: 'Livechat_title',
                    type: 'string',
                    group: 'Omnichannel',
                    public: true,
                    packageValue: 'Rocket.Chat',
                    valueSource: 'packageValue',
                    hidden: false,
                    blocked: false,
                    sorter: 0,
                    i18nLabel: 'Livechat_title',
                    i18nDescription: 'Livechat_title_Description',
                    ts: '2021-10-27T22:25:42.874Z',
                    _updatedAt: '2023-09-01T17:17:39.628Z',
                    createdAt: '2021-10-27T22:25:42.874Z',
                    value: 'Hello',
                    autocomplete: true,
                    secret: false,
                    section: 'Livechat',
                    enterprise: false,
                    requiredOnWizard: false,
                    env: false,
                    enableQuery: '{"_id":"Livechat_enabled","value":true}',
                  },
                  {
                    _id: 'Livechat_title_color',
                    type: 'color',
                    group: 'Omnichannel',
                    public: true,
                    packageValue: '#C1272D',
                    valueSource: 'packageValue',
                    hidden: false,
                    blocked: false,
                    sorter: 1,
                    i18nLabel: 'Livechat_title_color',
                    i18nDescription: 'Livechat_title_color_Description',
                    ts: '2021-10-27T22:25:42.882Z',
                    _updatedAt: '2023-03-30T12:19:01.124Z',
                    createdAt: '2021-10-27T22:25:42.882Z',
                    value: '#b427be',
                    autocomplete: true,
                    editor: 'color',
                    secret: false,
                    section: 'Livechat',
                    enterprise: false,
                    requiredOnWizard: false,
                    env: false,
                    packageEditor: 'color',
                    enableQuery: '{"_id":"Livechat_enabled","value":true}',
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
    403: PermissionErrorResponse,
  },
})

export const postApiV1LivechatAppearanceRoute = createRoute({
  method: 'post',
  path: '/api/v1/livechat/appearance',
  tags: ['Livechat Appearance'],
  summary: 'Set Livechat Appearance',
  description:
    'Update the <a href="https://docs.rocket.chat/docs/livechat-widget-appearance" target="_blank">livechat widget appearance</a> settings.\nPermission required: `view-livechat-manager`\n\n### Changelog\n| Version      | Description |\n| ---------------- | ------------|\n|6.4.0           | Added       |',
  operationId: 'post-api-v1-livechat-appearance',
  request: {
    headers: z.object({ 'X-Auth-Token': AuthTokenParamsSchema, 'X-User-Id': UserIdParamsSchema }),
    body: {
      description:
        'An array of objects containing the `_id` and `value` of the settings to be updated. See <a href="https://developer.rocket.chat/apidocs/get-livechat-appearance" target="_blank">Get LiveChat Appearance</a> example response for the `_id` of each setting.',
      content: {
        'application/json': {
          schema: z.array(
            z
              .object({ _id: z.string(), value: z.boolean() })
              .openapi({ required: ['_id', 'value'] }),
          ),
          examples: {
            'Example 1': {
              value: [
                { _id: 'Livechat_title', value: 'Hello' },
                { _id: 'Livechat_show_agent_email', value: 'false' },
                { _id: 'Livechat_show_agent_info', value: true },
                { _id: 'Livechat_title_color', value: '#b427bed' },
              ],
            },
          },
        },
      },
    },
  },
  responses: {
    200: TrueSuccessResponse,
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
                error: 'must be array [error-invalid-params]',
                errorType: 'error-invalid-params',
              },
            },
            'Example 2': { value: { success: false, error: 'invalid-setting' } },
          },
        },
      },
    },
    401: AuthorizationErrorResponse,
    403: PermissionErrorResponse,
  },
})

export const getApiV1LivechatBusinessHoursRoute = createRoute({
  method: 'get',
  path: '/api/v1/livechat/business-hours',
  tags: ['Omnichannel Business Hours'],
  summary: 'Get Business Hours',
  description:
    '<div style="text-align: center; margin: 1rem 0 1rem 0;"><img src="https://raw.githubusercontent.com/RocketChat/Rocket.Chat-Open-API/main/images/Enterprise%20tag.svg" alt="Enterprise" style="display: block; margin: auto;"></div>\n\nRetrieves all the <a href=\'https://docs.rocket.chat/docs/business-hours\' target=\'_blank\'>business hours</a> attached to a workspace.\nPermission required: `view-livechat-business-hours`',
  operationId: 'get-api-v1-livechat-business-hours',
  request: {
    headers: z.object({ 'X-Auth-Token': AuthTokenParamsSchema, 'X-User-Id': UserIdParamsSchema }),
    query: z.object({
      name: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'name',
            in: 'query',
            description: 'Name of the business hour.',
            schema: { type: 'string' },
            required: false,
          },
        }),
      offset: OffsetParamsSchema,
      count: CountParamsSchema,
      sort: SortParamsSchema,
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': {
          schema: z
            .object({
              businessHours: z
                .array(
                  z
                    .object({
                      _id: z.string().exactOptional(),
                      name: z.string().exactOptional(),
                      active: z.boolean().exactOptional(),
                      type: z.string().exactOptional(),
                      ts: z.string().exactOptional(),
                      workHours: z
                        .array(
                          z
                            .object({
                              day: z.string().exactOptional(),
                              start: z
                                .object({
                                  time: z.string().exactOptional(),
                                  utc: z
                                    .object({
                                      dayOfWeek: z.string().exactOptional(),
                                      time: z.string().exactOptional(),
                                    })
                                    .exactOptional()
                                    .openapi({ required: [] }),
                                  cron: z
                                    .object({
                                      dayOfWeek: z.string().exactOptional(),
                                      time: z.string().exactOptional(),
                                    })
                                    .exactOptional()
                                    .openapi({ required: [] }),
                                })
                                .exactOptional()
                                .openapi({ required: [] }),
                              finish: z
                                .object({
                                  time: z.string().exactOptional(),
                                  utc: z
                                    .object({
                                      dayOfWeek: z.string().exactOptional(),
                                      time: z.string().exactOptional(),
                                    })
                                    .exactOptional()
                                    .openapi({ required: [] }),
                                  cron: z
                                    .object({
                                      dayOfWeek: z.string().exactOptional(),
                                      time: z.string().exactOptional(),
                                    })
                                    .exactOptional()
                                    .openapi({ required: [] }),
                                })
                                .exactOptional()
                                .openapi({ required: [] }),
                              open: z.boolean().exactOptional(),
                            })
                            .openapi({ required: [] }),
                        )
                        .exactOptional(),
                      timezone: z
                        .object({
                          name: z.string().exactOptional(),
                          utc: z.string().exactOptional(),
                        })
                        .exactOptional()
                        .openapi({ required: [] }),
                      _updatedAt: z.string().exactOptional(),
                      departmentsToApplyBusinessHour: z.string().exactOptional(),
                    })
                    .openapi({ required: [] }),
                )
                .exactOptional(),
              count: z.int().exactOptional(),
              offset: z.int().exactOptional(),
              total: z.int().exactOptional(),
              success: z.boolean().exactOptional(),
            })
            .openapi({ required: [] }),
          examples: {
            'Example 1': {
              value: {
                businessHours: [
                  {
                    _id: '5eeed2c5ffea9759d3a0e5ac',
                    name: '',
                    active: true,
                    type: 'default',
                    ts: '2020-06-21T03:24:02.252Z',
                    workHours: [
                      {
                        day: 'Monday',
                        start: {
                          time: '08:00',
                          utc: { dayOfWeek: 'Monday', time: '08:00' },
                          cron: { dayOfWeek: 'Monday', time: '08:00' },
                        },
                        finish: {
                          time: '21:06',
                          utc: { dayOfWeek: 'Monday', time: '21:06' },
                          cron: { dayOfWeek: 'Monday', time: '21:06' },
                        },
                        open: true,
                      },
                      {
                        day: 'Tuesday',
                        start: {
                          time: '08:00',
                          utc: { dayOfWeek: 'Tuesday', time: '08:00' },
                          cron: { dayOfWeek: 'Tuesday', time: '08:00' },
                        },
                        finish: {
                          time: '10:00',
                          utc: { dayOfWeek: 'Tuesday', time: '10:00' },
                          cron: { dayOfWeek: 'Tuesday', time: '10:00' },
                        },
                        open: true,
                      },
                      {
                        day: 'Wednesday',
                        start: {
                          time: '08:00',
                          utc: { dayOfWeek: 'Wednesday', time: '08:00' },
                          cron: { dayOfWeek: 'Wednesday', time: '08:00' },
                        },
                        finish: {
                          time: '21:00',
                          utc: { dayOfWeek: 'Wednesday', time: '21:00' },
                          cron: { dayOfWeek: 'Wednesday', time: '21:00' },
                        },
                        open: true,
                      },
                      {
                        day: 'Thursday',
                        start: {
                          time: '01:00',
                          utc: { dayOfWeek: 'Thursday', time: '01:00' },
                          cron: { dayOfWeek: 'Thursday', time: '01:00' },
                        },
                        finish: {
                          time: '23:00',
                          utc: { dayOfWeek: 'Thursday', time: '23:00' },
                          cron: { dayOfWeek: 'Thursday', time: '23:00' },
                        },
                        open: true,
                      },
                      {
                        day: 'Friday',
                        start: {
                          time: '10:00',
                          utc: { dayOfWeek: 'Friday', time: '10:00' },
                          cron: { dayOfWeek: 'Friday', time: '10:00' },
                        },
                        finish: {
                          time: '22:00',
                          utc: { dayOfWeek: 'Friday', time: '22:00' },
                          cron: { dayOfWeek: 'Friday', time: '22:00' },
                        },
                        open: true,
                      },
                      {
                        day: 'Saturday',
                        start: {
                          time: '08:00',
                          utc: { dayOfWeek: 'Saturday', time: '08:00' },
                          cron: { dayOfWeek: 'Saturday', time: '08:00' },
                        },
                        finish: {
                          time: '20:00',
                          utc: { dayOfWeek: 'Saturday', time: '20:00' },
                          cron: { dayOfWeek: 'Saturday', time: '20:00' },
                        },
                        open: false,
                      },
                      {
                        day: 'Sunday',
                        start: {
                          time: '08:00',
                          utc: { dayOfWeek: 'Sunday', time: '08:00' },
                          cron: { dayOfWeek: 'Sunday', time: '08:00' },
                        },
                        finish: {
                          time: '20:00',
                          utc: { dayOfWeek: 'Sunday', time: '20:00' },
                          cron: { dayOfWeek: 'Sunday', time: '20:00' },
                        },
                        open: false,
                      },
                    ],
                    timezone: { name: 'Africa/Abidjan', utc: '0' },
                    _updatedAt: '2022-12-05T17:12:11.585Z',
                    departmentsToApplyBusinessHour: '',
                  },
                  {
                    _id: '62b1f74aa98c5b539adc912c',
                    ts: '2022-06-21T16:52:26.386Z',
                    name: 'indian support time ',
                    workHours: [
                      {
                        day: 'Monday',
                        start: {
                          time: '10:00',
                          utc: { dayOfWeek: 'Monday', time: '04:30' },
                          cron: { dayOfWeek: 'Monday', time: '04:30' },
                        },
                        finish: {
                          time: '12:00',
                          utc: { dayOfWeek: 'Monday', time: '06:30' },
                          cron: { dayOfWeek: 'Monday', time: '06:30' },
                        },
                        open: true,
                      },
                      {
                        day: 'Tuesday',
                        start: {
                          time: '00:00',
                          utc: { dayOfWeek: 'Monday', time: '18:30' },
                          cron: { dayOfWeek: 'Monday', time: '18:30' },
                        },
                        finish: {
                          time: '23:00',
                          utc: { dayOfWeek: 'Tuesday', time: '17:30' },
                          cron: { dayOfWeek: 'Tuesday', time: '17:30' },
                        },
                        open: true,
                      },
                      {
                        day: 'Wednesday',
                        start: {
                          time: '08:00',
                          utc: { dayOfWeek: 'Wednesday', time: '02:30' },
                          cron: { dayOfWeek: 'Wednesday', time: '02:30' },
                        },
                        finish: {
                          time: '23:00',
                          utc: { dayOfWeek: 'Wednesday', time: '17:30' },
                          cron: { dayOfWeek: 'Wednesday', time: '17:30' },
                        },
                        open: true,
                      },
                      {
                        day: 'Thursday',
                        start: {
                          time: '10:00',
                          utc: { dayOfWeek: 'Thursday', time: '04:30' },
                          cron: { dayOfWeek: 'Thursday', time: '04:30' },
                        },
                        finish: {
                          time: '01:00',
                          utc: { dayOfWeek: 'Wednesday', time: '19:30' },
                          cron: { dayOfWeek: 'Wednesday', time: '19:30' },
                        },
                        open: true,
                      },
                      {
                        day: 'Friday',
                        start: {
                          time: '12:00',
                          utc: { dayOfWeek: 'Friday', time: '06:30' },
                          cron: { dayOfWeek: 'Friday', time: '06:30' },
                        },
                        finish: {
                          time: '23:50',
                          utc: { dayOfWeek: 'Friday', time: '18:20' },
                          cron: { dayOfWeek: 'Friday', time: '18:20' },
                        },
                        open: true,
                      },
                      {
                        day: 'Saturday',
                        start: {
                          time: '00:00',
                          utc: { dayOfWeek: 'Friday', time: '18:30' },
                          cron: { dayOfWeek: 'Friday', time: '18:30' },
                        },
                        finish: {
                          time: '00:00',
                          utc: { dayOfWeek: 'Friday', time: '18:30' },
                          cron: { dayOfWeek: 'Friday', time: '18:30' },
                        },
                        open: false,
                      },
                      {
                        day: 'Sunday',
                        start: {
                          time: '00:00',
                          utc: { dayOfWeek: 'Saturday', time: '18:30' },
                          cron: { dayOfWeek: 'Saturday', time: '18:30' },
                        },
                        finish: {
                          time: '00:00',
                          utc: { dayOfWeek: 'Saturday', time: '18:30' },
                          cron: { dayOfWeek: 'Saturday', time: '18:30' },
                        },
                        open: false,
                      },
                    ],
                    active: true,
                    type: 'custom',
                    timezone: { name: 'Asia/Kolkata', utc: '+05:30' },
                    _updatedAt: '2022-11-28T10:41:17.303Z',
                  },
                ],
                count: 2,
                offset: 0,
                total: 2,
                success: true,
              },
            },
          },
        },
      },
    },
    401: AuthorizationErrorResponse,
    403: PermissionErrorResponse,
  },
})

export const getApiV1LivechatBusinessHourRoute = createRoute({
  method: 'get',
  path: '/api/v1/livechat/business-hour',
  tags: ['Omnichannel Business Hours'],
  summary: 'Get Default Business Hour',
  description:
    '<div style="text-align: center; margin: 1rem 0 1rem 0;"><img src="https://raw.githubusercontent.com/RocketChat/Rocket.Chat-Open-API/main/images/Enterprise%20tag.svg" alt="Enterprise" style="display: block; margin: auto;"></div>\n\nFetches the default business hours of a workspace.\nPermission required: `view-livechat-business-hours`',
  operationId: 'get-api-v1-livechat-business-hour',
  request: {
    headers: z.object({ 'X-Auth-Token': AuthTokenParamsSchema, 'X-User-Id': UserIdParamsSchema }),
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': {
          schema: z
            .object({
              businessHour: z
                .object({
                  _id: z.string().exactOptional(),
                  name: z.string().exactOptional(),
                  active: z.boolean().exactOptional(),
                  type: z.string().exactOptional(),
                  ts: z.string().exactOptional(),
                  workHours: z
                    .array(
                      z
                        .object({
                          day: z.string().exactOptional(),
                          start: z
                            .object({
                              time: z.string().exactOptional(),
                              utc: z
                                .object({
                                  dayOfWeek: z.string().exactOptional(),
                                  time: z.string().exactOptional(),
                                })
                                .exactOptional()
                                .openapi({ required: [] }),
                              cron: z
                                .object({
                                  dayOfWeek: z.string().exactOptional(),
                                  time: z.string().exactOptional(),
                                })
                                .exactOptional()
                                .openapi({ required: [] }),
                            })
                            .exactOptional()
                            .openapi({ required: [] }),
                          finish: z
                            .object({
                              time: z.string().exactOptional(),
                              utc: z
                                .object({
                                  dayOfWeek: z.string().exactOptional(),
                                  time: z.string().exactOptional(),
                                })
                                .exactOptional()
                                .openapi({ required: [] }),
                              cron: z
                                .object({
                                  dayOfWeek: z.string().exactOptional(),
                                  time: z.string().exactOptional(),
                                })
                                .exactOptional()
                                .openapi({ required: [] }),
                            })
                            .exactOptional()
                            .openapi({ required: [] }),
                          code: z.int().exactOptional(),
                          open: z.boolean().exactOptional(),
                        })
                        .openapi({ required: [] }),
                    )
                    .exactOptional(),
                  timezone: z
                    .object({ name: z.string().exactOptional(), utc: z.string().exactOptional() })
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
                businessHour: {
                  _id: '62f14dd55026d9aac120c653',
                  name: '',
                  active: true,
                  type: 'default',
                  ts: '2022-08-08T17:54:29.441Z',
                  workHours: [
                    {
                      day: 'Monday',
                      start: {
                        time: '08:00',
                        utc: { dayOfWeek: 'Monday', time: '08:00' },
                        cron: { dayOfWeek: 'Monday', time: '08:00' },
                      },
                      finish: {
                        time: '20:00',
                        utc: { dayOfWeek: 'Monday', time: '20:00' },
                        cron: { dayOfWeek: 'Monday', time: '20:00' },
                      },
                      code: 1,
                      open: true,
                    },
                    {
                      day: 'Tuesday',
                      start: {
                        time: '08:00',
                        utc: { dayOfWeek: 'Tuesday', time: '08:00' },
                        cron: { dayOfWeek: 'Tuesday', time: '08:00' },
                      },
                      finish: {
                        time: '20:00',
                        utc: { dayOfWeek: 'Tuesday', time: '20:00' },
                        cron: { dayOfWeek: 'Tuesday', time: '20:00' },
                      },
                      code: 2,
                      open: true,
                    },
                    {
                      day: 'Wednesday',
                      start: {
                        time: '08:00',
                        utc: { dayOfWeek: 'Wednesday', time: '08:00' },
                        cron: { dayOfWeek: 'Wednesday', time: '08:00' },
                      },
                      finish: {
                        time: '20:00',
                        utc: { dayOfWeek: 'Wednesday', time: '20:00' },
                        cron: { dayOfWeek: 'Wednesday', time: '20:00' },
                      },
                      code: 3,
                      open: true,
                    },
                    {
                      day: 'Thursday',
                      start: {
                        time: '08:00',
                        utc: { dayOfWeek: 'Thursday', time: '08:00' },
                        cron: { dayOfWeek: 'Thursday', time: '08:00' },
                      },
                      finish: {
                        time: '20:00',
                        utc: { dayOfWeek: 'Thursday', time: '20:00' },
                        cron: { dayOfWeek: 'Thursday', time: '20:00' },
                      },
                      code: 4,
                      open: true,
                    },
                    {
                      day: 'Friday',
                      start: {
                        time: '08:00',
                        utc: { dayOfWeek: 'Friday', time: '08:00' },
                        cron: { dayOfWeek: 'Friday', time: '08:00' },
                      },
                      finish: {
                        time: '20:00',
                        utc: { dayOfWeek: 'Friday', time: '20:00' },
                        cron: { dayOfWeek: 'Friday', time: '20:00' },
                      },
                      code: 5,
                      open: true,
                    },
                    {
                      day: 'Saturday',
                      start: {
                        time: '08:00',
                        utc: { dayOfWeek: 'Saturday', time: '08:00' },
                        cron: { dayOfWeek: 'Saturday', time: '08:00' },
                      },
                      finish: {
                        time: '20:00',
                        utc: { dayOfWeek: 'Saturday', time: '20:00' },
                        cron: { dayOfWeek: 'Saturday', time: '20:00' },
                      },
                      code: 6,
                      open: false,
                    },
                    {
                      day: 'Sunday',
                      start: {
                        time: '08:00',
                        utc: { dayOfWeek: 'Sunday', time: '08:00' },
                        cron: { dayOfWeek: 'Sunday', time: '08:00' },
                      },
                      finish: {
                        time: '20:00',
                        utc: { dayOfWeek: 'Sunday', time: '20:00' },
                        cron: { dayOfWeek: 'Sunday', time: '20:00' },
                      },
                      code: 7,
                      open: false,
                    },
                  ],
                  timezone: { name: 'Africa/Abidjan', utc: '0' },
                  _updatedAt: '2023-01-02T18:30:31.632Z',
                },
                success: true,
              },
            },
          },
        },
      },
    },
    401: AuthorizationErrorResponse,
    403: PermissionErrorResponse,
  },
})

export const postApiV1LivechatBusinessHoursRemoveRoute = createRoute({
  method: 'post',
  path: '/api/v1/livechat/business-hours.remove',
  tags: ['Omnichannel Business Hours'],
  summary: 'Remove Business Hour',
  description: 'Remove an Omnichannel business hour. ',
  operationId: 'post-api-v1-livechat-business-hours.remove',
  request: {
    headers: z.object({ 'X-Auth-Token': AuthTokenParamsSchema, 'X-User-Id': UserIdParamsSchema }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              _id: z
                .string()
                .openapi({
                  description: 'Enter the business hour ID that you want to delete.',
                  example: '6953aca46ff48667974be88c',
                }),
              type: z
                .string()
                .openapi({
                  description:
                    'Enter the type of the business hour. It can be `default` or `custom`.',
                  example: 'default',
                }),
            })
            .openapi({ required: ['_id', 'type'] }),
          examples: { 'Example 1': { value: { _id: '6953aca46ff48667974be88c', type: 'custom' } } },
        },
      },
    },
  },
  responses: {
    200: TrueSuccessResponse,
    400: {
      description: 'Bad Request',
      content: {
        'application/json': {
          schema: z
            .object({
              success: z.boolean().exactOptional(),
              errorType: z.string().exactOptional(),
              error: z.string().exactOptional(),
            })
            .openapi({ required: [] }),
          examples: {
            'Example 1': {
              value: {
                success: false,
                errorType: 'error-invalid-params',
                error: "must have required property '_id'",
              },
            },
          },
        },
      },
    },
    401: AuthorizationErrorResponse,
  },
})

export const postApiV1LivechatBusinessHoursSaveRoute = createRoute({
  method: 'post',
  path: '/api/v1/livechat/business-hours.save',
  tags: ['Omnichannel Business Hours'],
  summary: 'Create a Business Hour',
  description: 'Use this endpoint to create a new Omnichannel business hour.',
  operationId: 'post-api-v1-livechat-business-hours.save',
  request: {
    headers: z.object({ 'X-Auth-Token': AuthTokenParamsSchema, 'X-User-Id': UserIdParamsSchema }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              name: z
                .string()
                .openapi({
                  description: 'Enter a name for the business hour.',
                  example: 'Support Business Hour',
                }),
              timezoneName: z
                .string()
                .openapi({
                  description:
                    'Enter the timezone for the business hour. You can view the list of time zones from the Business Hours settings in the workspace.',
                  example: 'Asia/Bangkok',
                }),
              daysOpen: z
                .array(z.string().openapi({ example: '["Monday", "Tuesday", "Wednesday"]' }))
                .openapi({
                  description: 'Enter the days of the week that the business hour will apply to.',
                }),
              departmentsToApplyBusinessHour: z
                .string()
                .openapi({
                  description:
                    'Enter the department ID to which the business hour must be applied.',
                  example: '68304887113ac52640bc1ca6',
                }),
              active: z
                .boolean()
                .openapi({
                  description:
                    'Enter whether or not the business hour must be active as soon as it is created.',
                }),
              type: z
                .string()
                .openapi({
                  description:
                    'Enter the type of the business hour. It can be `default` or `custom`.',
                }),
              workHours: z
                .array(
                  z
                    .object({
                      day: z
                        .string()
                        .openapi({ description: 'Enter the day of the week.', example: 'Monday' }),
                      start: z
                        .string()
                        .openapi({
                          description: 'Enter the start time of the business hour.',
                          example: '08:00:00',
                        }),
                      finish: z
                        .string()
                        .openapi({
                          description: 'Enter the end time of the business hour.',
                          example: '16:00:00',
                        }),
                      open: z
                        .boolean()
                        .default(true)
                        .openapi({
                          description:
                            'Enter whether or not this work hour is active. If you set this as `false`, the work hour will not be included in the business hour.',
                        }),
                    })
                    .openapi({ required: ['day', 'start', 'finish', 'open'] }),
                )
                .openapi({
                  description:
                    'Enter the work hours for each open day. Make sure to include the day you have added to the `daysOpen` parameter. Otherwise, it will not be included in the business hour.',
                }),
              _id: z
                .string()
                .exactOptional()
                .openapi({
                  description: 'Use this parameter to update an existing business hour.',
                  example: '668c72e86dfe572b40b90e30',
                }),
            })
            .openapi({
              required: [
                'name',
                'timezoneName',
                'daysOpen',
                'departmentsToApplyBusinessHour',
                'active',
                'type',
                'workHours',
              ],
            }),
          examples: {
            'Example 1': {
              value: {
                name: 'api-BH',
                timezoneName: 'Asia/Bangkok',
                daysOpen: ['Monday', 'Wednesday'],
                departmentsToApplyBusinessHour: 'TEST-DEPT',
                active: true,
                type: 'custom',
                workHours: [
                  { day: 'Monday', start: '08:00:00', finish: '16:00:00', open: true },
                  { day: 'Wednesday', start: '08:00:00', finish: '16:00:00', open: true },
                ],
                _id: '6953b3bc6ff48667974be88e',
              },
            },
          },
        },
      },
    },
  },
  responses: {
    200: TrueSuccessResponse,
    400: {
      description: 'Bad Request',
      content: {
        'application/json': {
          schema: z
            .object({
              success: z.boolean().exactOptional(),
              errorType: z.string().exactOptional(),
              error: z.string().exactOptional(),
            })
            .openapi({ required: [] }),
          examples: {
            'Example 1': {
              value: {
                success: false,
                errorType: 'error-invalid-params',
                error: "must have required property 'name'",
              },
            },
          },
        },
      },
    },
    401: AuthorizationErrorResponse,
  },
})

export const getApiV1LivechatAnalyticsDashboardsConversationTotalizersRoute = createRoute({
  method: 'get',
  path: '/api/v1/livechat/analytics/dashboards/conversation-totalizers',
  tags: ['Omnichannel Dashboards'],
  summary: 'Get Conversation Metrics',
  description:
    'Retrieves metrics about all conversations.\nPermission required: `view-livechat-manager`',
  operationId: 'get-api-v1-livechat-analytics-dashboards-conversation-totalizers',
  request: {
    headers: z.object({ 'X-Auth-Token': AuthTokenParamsSchema, 'X-User-Id': UserIdParamsSchema }),
    query: z.object({
      start: StartParamsSchema,
      end: EndParamsSchema,
      departmentId: DepartmentIdParamsSchema,
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': {
          schema: z
            .object({
              totalizers: z
                .array(
                  z
                    .object({ title: z.string().exactOptional(), value: z.int().exactOptional() })
                    .openapi({ required: [] }),
                )
                .exactOptional(),
              success: z.boolean().exactOptional(),
            })
            .openapi({ required: [] }),
          examples: {
            'Success Example': {
              value: {
                totalizers: [
                  { title: 'Total_conversations', value: 20 },
                  { title: 'Open_conversations', value: 2 },
                  { title: 'On_Hold_conversations', value: 0 },
                  { title: 'Total_messages', value: 51 },
                  { title: 'Total_visitors', value: 5 },
                ],
                success: true,
              },
            },
          },
        },
      },
    },
    400: StartendErrorResponse,
    401: AuthorizationErrorResponse,
    403: PermissionErrorResponse,
  },
})

export const getApiV1LivechatAnalyticsDashboardsAgentsProductivityTotalizersRoute = createRoute({
  method: 'get',
  path: '/api/v1/livechat/analytics/dashboards/agents-productivity-totalizers',
  tags: ['Omnichannel Dashboards'],
  summary: 'Get Agent Service Time Metrics',
  description: 'Permission required: `view-livechat-manager`',
  operationId: 'get-api-v1-livechat-analytics-dashboards-agents-productivity-totalizers',
  request: {
    headers: z.object({ 'X-Auth-Token': AuthTokenParamsSchema, 'X-User-Id': UserIdParamsSchema }),
    query: z.object({
      start: StartParamsSchema,
      end: EndParamsSchema,
      departmentId: DepartmentIdParamsSchema,
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': {
          schema: z
            .object({
              totalizers: z
                .array(
                  z
                    .object({
                      title: z.string().exactOptional(),
                      value: z.string().exactOptional(),
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
                totalizers: [
                  { title: 'Busiest_time', value: '9AM- 10AM' },
                  { title: 'Avg_of_available_service_time', value: '00:45:18' },
                  { title: 'Avg_of_service_time', value: '00:06:00' },
                ],
                success: true,
              },
            },
          },
        },
      },
    },
    400: StartendErrorResponse,
    401: AuthorizationErrorResponse,
    403: PermissionErrorResponse,
  },
})

export const getApiV1LivechatAnalyticsDashboardsChatsTotalizersRoute = createRoute({
  method: 'get',
  path: '/api/v1/livechat/analytics/dashboards/chats-totalizers',
  tags: ['Omnichannel Dashboards'],
  summary: 'Get Chat Metrics',
  description:
    'Retrieves information about the chats.\nPermission required: `view-livechat-manager`',
  operationId: 'get-api-v1-livechat-analytics-dashboards-chats-totalizers',
  request: {
    headers: z.object({ 'X-Auth-Token': AuthTokenParamsSchema, 'X-User-Id': UserIdParamsSchema }),
    query: z.object({
      start: StartParamsSchema,
      end: EndParamsSchema,
      departmentId: DepartmentIdParamsSchema,
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': {
          schema: z.looseObject({}),
          examples: {
            'Success Example': {
              value: {
                totalizers: [
                  { title: 'Total_abandoned_chats', value: 1 },
                  { title: 'Avg_of_abandoned_chats', value: '11%' },
                  { title: 'Avg_of_chat_duration_time', value: '01:24:56' },
                ],
                success: true,
              },
            },
          },
        },
      },
    },
    400: StartendErrorResponse,
    401: AuthorizationErrorResponse,
    403: PermissionErrorResponse,
  },
})

export const getApiV1LivechatAnalyticsDashboardsProductivityTotalizersRoute = createRoute({
  method: 'get',
  path: '/api/v1/livechat/analytics/dashboards/productivity-totalizers',
  tags: ['Omnichannel Dashboards'],
  summary: 'Get Chat Metrics by Time',
  description:
    'Retrieves the average time for Livechat conversations.\nPermission required: `view-livechat-manager`',
  operationId: 'get-api-v1-livechat-analytics-dashboards-productivity-totalizers',
  request: {
    headers: z.object({ 'X-Auth-Token': AuthTokenParamsSchema, 'X-User-Id': UserIdParamsSchema }),
    query: z.object({
      start: StartParamsSchema,
      end: EndParamsSchema,
      departmentId: DepartmentIdParamsSchema,
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': {
          schema: z
            .object({
              totalizers: z
                .array(
                  z
                    .object({
                      title: z.string().exactOptional(),
                      value: z.string().exactOptional(),
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
                totalizers: [
                  { title: 'Avg_response_time', value: '00:00:00' },
                  { title: 'Avg_first_response_time', value: '00:00:00' },
                  { title: 'Avg_reaction_time', value: '00:00:00' },
                  { title: 'Avg_of_waiting_time', value: '00:00:00' },
                ],
                success: true,
              },
            },
          },
        },
      },
    },
    400: StartendErrorResponse,
    401: AuthorizationErrorResponse,
    403: PermissionErrorResponse,
  },
})

export const getApiV1LivechatAnalyticsDashboardsChartsChatsRoute = createRoute({
  method: 'get',
  path: '/api/v1/livechat/analytics/dashboards/charts/chats',
  tags: ['Omnichannel Dashboards'],
  summary: 'Get Chats Status',
  description:
    'Retrieves the status of chats for a specific time duration.\nPermission required: `view-livechat-manager`',
  operationId: 'get-api-v1-livechat-analytics-dashboards-charts-chats',
  request: {
    headers: z.object({ 'X-Auth-Token': AuthTokenParamsSchema, 'X-User-Id': UserIdParamsSchema }),
    query: z.object({
      start: StartParamsSchema,
      end: EndParamsSchema,
      departmentId: DepartmentIdParamsSchema,
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': {
          schema: z
            .object({
              open: z.int().exactOptional(),
              closed: z.int().exactOptional(),
              queued: z.int().exactOptional(),
              onhold: z.int().exactOptional(),
              success: z.boolean().exactOptional(),
            })
            .openapi({ required: [] }),
          examples: {
            'Success Example': {
              value: { open: 2, closed: 18, queued: 0, onhold: 0, success: true },
            },
          },
        },
      },
    },
    400: StartendErrorResponse,
    401: AuthorizationErrorResponse,
    403: PermissionErrorResponse,
  },
})

export const getApiV1LivechatAnalyticsDashboardsChartsChatsPerAgentRoute = createRoute({
  method: 'get',
  path: '/api/v1/livechat/analytics/dashboards/charts/chats-per-agent',
  tags: ['Omnichannel Dashboards'],
  summary: 'Get Chat Status of Agents',
  description:
    'Retrieves the status of chats per agent for a specific time duration.\nPermission required: `view-livechat-manager`',
  operationId: 'get-api-v1-livechat-analytics-dashboards-charts-chats-per-agent',
  request: {
    headers: z.object({ 'X-Auth-Token': AuthTokenParamsSchema, 'X-User-Id': UserIdParamsSchema }),
    query: z.object({
      start: StartParamsSchema,
      end: EndParamsSchema,
      departmentId: DepartmentIdParamsSchema,
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': {
          schema: z
            .object({
              'test.cat': z
                .object({ open: z.int().exactOptional(), closed: z.int().exactOptional() })
                .exactOptional()
                .openapi({ required: [] }),
              success: z.boolean().exactOptional(),
            })
            .openapi({ required: [] }),
          examples: {
            'Success Example': {
              value: {
                'test.cat': { open: 1, closed: 4 },
                'kim.jane': { open: 1, closed: 3 },
                'lee.keith': { open: 0, closed: 4 },
                success: true,
              },
            },
          },
        },
      },
    },
    400: StartendErrorResponse,
    401: AuthorizationErrorResponse,
    403: PermissionErrorResponse,
  },
})

export const getApiV1LivechatAnalyticsDashboardsChartsAgentsStatusRoute = createRoute({
  method: 'get',
  path: '/api/v1/livechat/analytics/dashboards/charts/agents-status',
  tags: ['Omnichannel Dashboards'],
  summary: 'Get Status of Agents',
  description:
    'Retrieves the number of agents for each status.\nPermission required: `view-livechat-manager`',
  operationId: 'get-api-v1-livechat-analytics-dashboards-charts-agents-status',
  request: {
    headers: z.object({ 'X-Auth-Token': AuthTokenParamsSchema, 'X-User-Id': UserIdParamsSchema }),
    query: z.object({ departmentId: DepartmentIdParamsSchema }),
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': {
          schema: z
            .object({
              _id: z.string().exactOptional(),
              offline: z.int().exactOptional(),
              away: z.int().exactOptional(),
              busy: z.int().exactOptional(),
              available: z.int().exactOptional(),
              success: z.boolean().exactOptional(),
            })
            .openapi({ required: [] }),
          examples: {
            'Example 1': {
              value: { _id: null, offline: 78, away: 5, busy: 0, available: 3, success: true },
            },
          },
        },
      },
    },
    401: AuthorizationErrorResponse,
    403: PermissionErrorResponse,
  },
})

export const getApiV1LivechatAnalyticsDashboardsChartsChatsPerDepartmentRoute = createRoute({
  method: 'get',
  path: '/api/v1/livechat/analytics/dashboards/charts/chats-per-department',
  tags: ['Omnichannel Dashboards'],
  summary: 'Get Chats Status for Departments',
  description:
    'Retrieves the status of chats for each department.\nPermission required: `view-livechat-manager`',
  operationId: 'get-api-v1-livechat-analytics-dashboards-charts-chats-per-department',
  request: {
    headers: z.object({ 'X-Auth-Token': AuthTokenParamsSchema, 'X-User-Id': UserIdParamsSchema }),
    query: z.object({
      start: StartParamsSchema,
      end: EndParamsSchema,
      departmentId: DepartmentIdParamsSchema,
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': {
          schema: z
            .object({
              Test: z
                .object({ open: z.int().exactOptional(), closed: z.int().exactOptional() })
                .exactOptional()
                .openapi({ required: [] }),
              Sales: z
                .object({ open: z.int().exactOptional(), closed: z.int().exactOptional() })
                .exactOptional()
                .openapi({ required: [] }),
              Finance: z
                .object({ open: z.int().exactOptional(), closed: z.int().exactOptional() })
                .exactOptional()
                .openapi({ required: [] }),
              success: z.boolean().exactOptional(),
            })
            .openapi({ required: [] }),
          examples: {
            'Success Example': {
              value: {
                Test: { open: 1, closed: 0 },
                Sales: { open: 0, closed: 9 },
                Finance: { open: 0, closed: 1 },
                success: true,
              },
            },
          },
        },
      },
    },
    400: StartendErrorResponse,
    401: AuthorizationErrorResponse,
    403: PermissionErrorResponse,
  },
})

export const getApiV1LivechatAnalyticsDashboardsChartsTimingsRoute = createRoute({
  method: 'get',
  path: '/api/v1/livechat/analytics/dashboards/charts/timings',
  tags: ['Omnichannel Dashboards'],
  summary: 'Get Chat Times',
  description: 'Permission required: `view-livechat-manager`',
  operationId: 'get-api-v1-livechat-analytics-dashboards-charts-timings',
  request: {
    headers: z.object({ 'X-Auth-Token': AuthTokenParamsSchema, 'X-User-Id': UserIdParamsSchema }),
    query: z.object({
      start: StartParamsSchema,
      end: EndParamsSchema,
      departmentId: DepartmentIdParamsSchema,
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': {
          schema: z
            .object({
              response: z
                .object({ avg: z.int().exactOptional(), longest: z.int().exactOptional() })
                .exactOptional()
                .openapi({ required: [] }),
              reaction: z
                .object({ avg: z.int().exactOptional(), longest: z.int().exactOptional() })
                .exactOptional()
                .openapi({ required: [] }),
              chatDuration: z
                .object({ avg: z.int().exactOptional(), longest: z.int().exactOptional() })
                .exactOptional()
                .openapi({ required: [] }),
              success: z.boolean().exactOptional(),
            })
            .openapi({ required: [] }),
          examples: {
            'Success Example': {
              value: {
                response: { avg: 0, longest: 0 },
                reaction: { avg: 0, longest: 0 },
                chatDuration: { avg: 0, longest: 0 },
                success: true,
              },
            },
          },
        },
      },
    },
    400: StartendErrorResponse,
    401: AuthorizationErrorResponse,
    403: PermissionErrorResponse,
  },
})

export const getApiV1LivechatLivechatAnalyticsDashboardsChartsDataRoute = createRoute({
  method: 'get',
  path: '/api/v1/livechat/livechat/analytics/dashboards/charts-data',
  tags: ['Omnichannel Dashboards'],
  summary: 'Get Analytics Chart Data',
  description:
    'View the Omnichannel analytics chart data by chart name within a specific duration. On the workspace UI, you can access this feature by going to `Manage` > `Omnichannel` > `Analytics`.\n\nPermission required: `view-livechat-manager`\n\n### Changelog\n| Version      | Description |\n| ---------------- | ------------|\n|9.0.0   | The `403` response returns `errorType: error-forbidden`.       |\n|7.11.0            | Added       |',
  operationId: 'get-api-v1-livechat-livechat-analytics-dashboards-charts-data',
  request: {
    headers: z.object({ 'X-Auth-Token': AuthTokenParamsSchema, 'X-User-Id': UserIdParamsSchema }),
    query: z.object({
      start: z
        .string()
        .openapi({
          param: {
            schema: { type: 'string', example: '2025-01-01' },
            in: 'query',
            name: 'start',
            description:
              'Enter the start date from which you want to view the data. Format: YYYY-MM-DD',
            required: true,
          },
          example: '2025-01-01',
        }),
      end: z
        .string()
        .openapi({
          param: {
            schema: { type: 'string', example: '2025-10-01' },
            in: 'query',
            name: 'end',
            description:
              'Enter the end date till which you want to view the data. Format: YYYY-MM-DD',
            required: true,
          },
          example: '2025-10-01',
        }),
      chartName: z
        .string()
        .openapi({
          param: {
            schema: { type: 'string', example: 'Total_conversations' },
            in: 'query',
            name: 'chartName',
            description:
              'Enter the chart name for which you want to view the analytics. The options are: \n* `Total_conversations`\n* `Avg_chat_duration`\n* `Total_messages`\n* `Avg_first_response_time`\n* `Avg_reaction_time`\n* `Best_first_response_time`\n* `Avg_response_time`',
            required: true,
          },
          example: 'Total_conversations',
        }),
      departmentId: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            schema: { type: 'string', example: '64181a0728384134ed600dcc' },
            in: 'query',
            name: 'departmentId',
            description: 'Enter the department ID for which you want to view the analytics.',
            required: false,
          },
          example: '64181a0728384134ed600dcc',
        }),
    }),
  },
  responses: {
    200: {
      description:
        'OK\r\nIn the response, the `dataLabels` array is a list of dates within the specified date range. The `dataPoints` array refers to the chart analytics for the corresponding dates and the chart label.',
      content: {
        'application/json': {
          schema: z
            .object({
              chartLabel: z.string().exactOptional(),
              dataLabels: z.array(z.string()).exactOptional(),
              dataPoints: z.array(z.int()).exactOptional(),
              success: z.boolean().exactOptional(),
            })
            .openapi({ required: [] }),
          examples: {
            'Example 1': {
              value: {
                chartLabel: 'Total_conversations',
                dataLabels: ['10/1', '10/2', '10/3', '10/4', '10/5', '10/6'],
                dataPoints: [0, 0, 0, 0, 0, 0],
                success: true,
              },
            },
          },
        },
      },
    },
    401: AuthorizationErrorResponse,
    403: {
      description: 'Forbidden',
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
                error: 'User does not have the permissions required for this action',
                errorType: 'error-forbidden',
              },
            },
          },
        },
      },
      headers: z.object({}),
    },
  },
})

export const getApiV1LivechatInquiriesListRoute = createRoute({
  method: 'get',
  path: '/api/v1/livechat/inquiries.list',
  tags: ['Omnichannel Inquiries'],
  summary: 'Get Inquiries List',
  description:
    "Lists all open inquiries. An incoming chat that has not yet been taken by the agent is called an inquiry. After it's been taken by the agent it is referred to as room.\nPermission required: `view-livechat-manager`\n\n### Changelog\n| Version      | Description |\n| ---------------- | ------------|\n|1.2.0            | Added       |",
  operationId: 'get-api-v1-livechat-inquiries.list',
  request: {
    headers: z.object({ 'X-Auth-Token': AuthTokenParamsSchema, 'X-User-Id': UserIdParamsSchema }),
    query: z.object({
      department: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'department',
            in: 'query',
            description: 'The department ID or name.',
            schema: { type: 'string' },
            required: false,
          },
        }),
      offset: OffsetParamsSchema,
      count: CountParamsSchema,
      sort: z
        .any()
        .exactOptional()
        .openapi({
          param: {
            schema: {},
            in: 'query',
            name: 'sort',
            description:
              'Sort the inquiries in ascending (`1`) or descending (`-1`) order. The available options are:\n * `ts`: Sort by timestamp. `sort={"ts": 1}` or `sort={"ts": -1}` (newest first, default)\n * `name`: Sort by inquiry name. `sort={"name": 1}` or `sort={"name": -1}`\n * `priorityWeight`: Sort by priority of the inquiry. `sort={"priorityWeight": 1}` or `sort={"priorityWeight": -1}`\n * `estimatedWaitingTimeQueue`: Sort by the estimated waiting time in the queue. `sort={"estimatedWaitingTimeQueue": 1}` or `sort={"estimatedWaitingTimeQueue": -1}`\n * `status`: Sort by inquiry status. `sort={"status": 1}` or `sort={"status": 1}`\n * You can also use multiple options for the sort query. For example, `sort={"estimatedWaitingTimeQueue": 1, "priorityWeight": -1}`.',
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
              inquiries: z
                .array(
                  z
                    .object({
                      _id: z.string().exactOptional(),
                      rid: z.string().exactOptional(),
                      name: z.string().exactOptional(),
                      ts: z.string().exactOptional(),
                      status: z.string().exactOptional(),
                    })
                    .openapi({ required: [] }),
                )
                .exactOptional(),
              offset: z.int().exactOptional(),
              count: z.int().exactOptional(),
              total: z.int().exactOptional(),
              success: z.boolean().exactOptional(),
            })
            .openapi({ required: [] }),
          examples: {
            'Success Example': {
              value: {
                inquiries: [
                  {
                    _id: 'GpxfRo8TaPHfsnnC5',
                    rid: 'EbQjtCosHJWLQmQYT',
                    name: 'Marcos Defendi',
                    ts: '2019-06-11T19:01:57.424Z',
                    status: 'queued',
                  },
                ],
                offset: 0,
                count: 1,
                total: 1,
                success: true,
              },
            },
          },
        },
      },
    },
    401: AuthorizationErrorResponse,
    403: PermissionErrorResponse,
  },
})

export const postApiV1LivechatInquiriesTakeRoute = createRoute({
  method: 'post',
  path: '/api/v1/livechat/inquiries.take',
  tags: ['Omnichannel Inquiries'],
  summary: 'Take Inquiry',
  description:
    'Join an open inquiry.\nPermission required: `view-l-room`\n\n### Changelog\n| Version      | Description |\n| ---------------- | ------------|\n|1.2.0            | Added       |',
  operationId: 'post-api-v1-livechat-inquiries.take',
  request: {
    headers: z.object({ 'X-Auth-Token': AuthTokenParamsSchema, 'X-User-Id': UserIdParamsSchema }),
    body: {
      description: 'If the `userId` is provided, the user must have the `view-l-room` permission.',
      content: {
        'application/json': {
          schema: z
            .object({
              inquiryId: z.string().openapi({ description: 'The inquiry ID.' }),
              userId: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    "The user's (agent) ID who is taking the inquiry. The user must have `view-l-room` permission.",
                }),
            })
            .openapi({ required: ['inquiryId'] }),
          examples: { 'Example 1': { value: { inquiryId: 'ByehQjC44FwMeiLbX' } } },
        },
      },
    },
  },
  responses: {
    200: TrueSuccessResponse,
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
                error: "must have required property 'inquiryId' [error-invalid-params]",
                errorType: 'error-invalid-params',
              },
            },
          },
        },
      },
    },
    401: AuthorizationErrorResponse,
    403: PermissionErrorResponse,
  },
})

export const getApiV1LivechatInquiriesQueuedForUserRoute = createRoute({
  method: 'get',
  path: '/api/v1/livechat/inquiries.queuedForUser',
  tags: ['Omnichannel Inquiries'],
  summary: 'List Queued User Inquiries',
  description:
    'Permission required: `view-l-room`\nThe `livechat/inquiries.queued` endpoint has been removed from 7.0. Use this endpoint instead.',
  operationId: 'get-api-v1-livechat-inquiries.queuedForUser',
  request: {
    headers: z.object({ 'X-User-Id': UserIdParamsSchema, 'X-Auth-Token': AuthTokenParamsSchema }),
    query: z.object({
      department: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'department',
            in: 'query',
            description: 'The department ID or name.',
            schema: { type: 'string' },
            required: false,
          },
        }),
      offset: OffsetParamsSchema,
      count: CountParamsSchema,
      sort: SortParamsSchema,
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': {
          schema: z
            .object({
              inquiries: z
                .array(
                  z
                    .object({
                      _id: z.string().exactOptional(),
                      rid: z.string().exactOptional(),
                      name: z.string().exactOptional(),
                      ts: z.string().exactOptional(),
                      department: z.string().exactOptional(),
                      message: z.string().exactOptional(),
                      status: z.string().exactOptional(),
                      v: z
                        .object({
                          _id: z.string().exactOptional(),
                          username: z.string().exactOptional(),
                          token: z.string().exactOptional(),
                          status: z.string().exactOptional(),
                        })
                        .exactOptional()
                        .openapi({ required: [] }),
                      t: z.string().exactOptional(),
                      queueOrder: z.int().exactOptional(),
                      estimatedWaitingTimeQueue: z.int().exactOptional(),
                      estimatedServiceTimeAt: z.string().exactOptional(),
                      _updatedAt: z.string().exactOptional(),
                    })
                    .openapi({ required: [] }),
                )
                .exactOptional(),
              count: z.int().exactOptional(),
              offset: z.int().exactOptional(),
              total: z.int().exactOptional(),
              success: z.boolean().exactOptional(),
            })
            .openapi({ required: [] }),
          examples: {
            'Success Example': {
              value: {
                inquiries: [
                  {
                    _id: 'xn5sKBatdkgDfjDLC',
                    rid: '8AuphbFBSNBjeZQFs',
                    name: 'hk',
                    ts: '2021-07-22T14:28:57.987Z',
                    department: 'CAJioQNAvLnYWTy8i',
                    message: '',
                    status: 'queued',
                    v: {
                      _id: 'hPF84vuahYBZugM8L',
                      username: 'guest-535',
                      token: 'zdynf0a9vsiiiq1dlf9abf',
                      status: 'offline',
                    },
                    t: 'l',
                    queueOrder: 1,
                    estimatedWaitingTimeQueue: 0,
                    estimatedServiceTimeAt: '2021-07-22T14:28:57.987Z',
                    _updatedAt: '2021-07-22T14:37:28.470Z',
                  },
                  {
                    _id: 'g6FY2B8PNwneteRG9',
                    rid: 'iZ7XDSgcjBgczqko9',
                    name: 'dk',
                    ts: '2021-07-22T14:28:07.350Z',
                    department: 'CAJioQNAvLnYWTy8i',
                    message: '',
                    status: 'queued',
                    v: {
                      _id: 'ycwLFcaH4ey9XYYvu',
                      username: 'guest-534',
                      token: 'ili20miimhh8x33ld0b5de',
                      status: 'offline',
                    },
                    t: 'l',
                    queueOrder: 1,
                    estimatedWaitingTimeQueue: 0,
                    estimatedServiceTimeAt: '2021-07-22T14:28:07.350Z',
                    _updatedAt: '2021-07-22T14:28:24.521Z',
                  },
                ],
                count: 2,
                offset: 0,
                total: 2,
                success: true,
              },
            },
          },
        },
      },
    },
    401: AuthorizationErrorResponse,
    403: PermissionErrorResponse,
  },
})

export const getApiV1LivechatInquiriesGetOneRoute = createRoute({
  method: 'get',
  path: '/api/v1/livechat/inquiries.getOne',
  tags: ['Omnichannel Inquiries'],
  summary: 'Get Inquiry by Room',
  description:
    'Permission required: `view-l-room`\n\n### Changelog\n| Version      | Description |\n| ---------------- | ------------|\n|2.4.0            | Added       |',
  operationId: 'get-api-v1-livechat-inquiries.getOne',
  request: {
    headers: z.object({ 'X-Auth-Token': AuthTokenParamsSchema, 'X-User-Id': UserIdParamsSchema }),
    query: z.object({
      roomId: z
        .string()
        .openapi({
          param: {
            name: 'roomId',
            in: 'query',
            description: 'The room ID.',
            required: true,
            schema: { type: 'string' },
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
              inquiry: z
                .object({
                  _id: z.string().exactOptional(),
                  rid: z.string().exactOptional(),
                  name: z.string().exactOptional(),
                  ts: z.string().exactOptional(),
                  message: z.string().exactOptional(),
                  status: z.string().exactOptional(),
                  v: z
                    .object({
                      _id: z.string().exactOptional(),
                      username: z.string().exactOptional(),
                      token: z.string().exactOptional(),
                      status: z.string().exactOptional(),
                      activity: z.array(z.string()).exactOptional(),
                    })
                    .exactOptional()
                    .openapi({ required: [] }),
                  t: z.string().exactOptional(),
                  priorityWeight: z.int().exactOptional(),
                  estimatedWaitingTimeQueue: z.int().exactOptional(),
                  source: z
                    .object({ type: z.string().exactOptional() })
                    .exactOptional()
                    .openapi({ required: [] }),
                  _updatedAt: z.string().exactOptional(),
                  lastMessage: z
                    .object({
                      _id: z.string().exactOptional(),
                      rid: z.string().exactOptional(),
                      msg: z.string().exactOptional(),
                      ts: z.string().exactOptional(),
                      u: z
                        .object({
                          _id: z.string().exactOptional(),
                          username: z.string().exactOptional(),
                          name: z.string().exactOptional(),
                        })
                        .exactOptional()
                        .openapi({ required: [] }),
                      _updatedAt: z.string().exactOptional(),
                      urls: z.array(z.looseObject({})).exactOptional(),
                      mentions: z.array(z.looseObject({})).exactOptional(),
                      channels: z.array(z.looseObject({})).exactOptional(),
                      md: z
                        .array(
                          z
                            .object({
                              type: z.string().exactOptional(),
                              value: z
                                .array(
                                  z
                                    .object({
                                      type: z.string().exactOptional(),
                                      value: z.string().exactOptional(),
                                    })
                                    .openapi({ required: [] }),
                                )
                                .exactOptional(),
                            })
                            .openapi({ required: [] }),
                        )
                        .exactOptional(),
                    })
                    .exactOptional()
                    .openapi({ required: [] }),
                  takenAt: z.string().exactOptional(),
                })
                .exactOptional()
                .openapi({ required: [] }),
              success: z.boolean().exactOptional(),
            })
            .openapi({ required: [] }),
          examples: {
            'Success Example': {
              value: {
                inquiry: {
                  _id: '6560940c6a1ef5b1a2bf9324',
                  rid: 'yy8SmYKfHQ6GZdnJp',
                  name: 'kookie',
                  ts: '2023-11-24T12:16:12.370Z',
                  message: '',
                  status: 'taken',
                  v: {
                    _id: '656090576a1ef5b1a2bf919b',
                    username: 'guest-51',
                    token: '38cc8c765bf77e943f6e4319c5891f6c04',
                    status: 'online',
                    activity: ['2023-11'],
                  },
                  t: 'l',
                  priorityWeight: 99,
                  estimatedWaitingTimeQueue: 9999999,
                  source: { type: 'widget' },
                  _updatedAt: '2023-11-24T12:27:43.852Z',
                  lastMessage: {
                    _id: 'Hjwmd7bBZTiEXrywn',
                    rid: 'yy8SmYKfHQ6GZdnJp',
                    msg: 'hello',
                    ts: '2023-11-24T12:27:43.474Z',
                    u: { _id: 'CkCPNcvsvCDfmWLqC', username: 'test.cat', name: 'testCat' },
                    _updatedAt: '2023-11-24T12:27:43.820Z',
                    urls: [],
                    mentions: [],
                    channels: [],
                    md: [{ type: 'PARAGRAPH', value: [{ type: 'PLAIN_TEXT', value: 'hello' }] }],
                  },
                  takenAt: '2023-11-24T12:18:19.012Z',
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
                error: "must have required property 'roomId' [error-invalid-params]",
                errorType: 'error-invalid-params',
              },
            },
          },
        },
      },
    },
    401: AuthorizationErrorResponse,
    403: PermissionErrorResponse,
  },
})

export const putApiV1LivechatInquirySetSLARoute = createRoute({
  method: 'put',
  path: '/api/v1/livechat/inquiry.setSLA',
  tags: ['Omnichannel Inquiries'],
  summary: 'Set SLA Policy to Inquiry',
  description:
    '<div style="text-align: center; margin: 1rem 0 1rem 0;"><img src="https://raw.githubusercontent.com/RocketChat/Rocket.Chat-Open-API/main/images/Enterprise%20tag.svg" alt="Enterprise" style="display: block; margin: auto;"></div>\n\nSet <a href="https://docs.rocket.chat/docs/sla-policies" target="_blank">SLA policy</a> to an inquiry. You can only set the policy for an inquiry that has not been taken by an agent.\n\nAt least one of the following permissions is required:\n* `view-l-room`\n* `manage-livechat-sla`\n\n### Changelog\n| Version | Description  |\n| ------- |--------------|\n| 5.0.0  | Added         |',
  operationId: 'put-api-v1-livechat-inquiry.setSLA',
  request: {
    headers: z.object({ 'X-Auth-Token': AuthTokenParamsSchema, 'X-User-Id': UserIdParamsSchema }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              roomId: z.string().openapi({ description: 'The room ID.' }),
              sla: z.string().openapi({ description: 'Name or ID of the SLA policy.' }),
            })
            .openapi({ required: ['roomId', 'sla'] }),
          examples: {
            'Example 1': {
              value: { roomId: 'ZDYMFPpvnXgptmzMs', sla: '6417f67528384134ed600dc6' },
            },
          },
        },
      },
    },
  },
  responses: {
    200: TrueSuccessResponse,
    400: {
      description: 'Bad Request',
      content: {
        'application/json': {
          schema: z
            .object({ success: z.boolean().exactOptional(), error: z.string().exactOptional() })
            .openapi({ required: [] }),
          examples: {
            'Example 1': { value: { success: false, error: "The 'roomId' param is required" } },
            'Example 2': { value: { success: false, error: 'error-invalid-inquiry' } },
          },
        },
      },
      headers: z.object({}),
    },
    401: AuthorizationErrorResponse,
    403: PermissionErrorResponse,
  },
})

export const postApiV1LivechatInquiriesReturnAsInquiryRoute = createRoute({
  method: 'post',
  path: '/api/v1/livechat/inquiries.returnAsInquiry',
  tags: ['Omnichannel Inquiries'],
  summary: 'Move Chat to Inquiry',
  description:
    'This endpoint is used to move an open chat to the queue. Permission required: `view-l-room`\n\n### Changelog\n| Version      | Description |\n| ---------------- | ------------|\n|7.12.0            | Added       |',
  operationId: 'post-api-v1-livechat-inquiries.returnAsInquiry',
  request: {
    headers: z.object({ 'X-Auth-Token': AuthTokenParamsSchema, 'X-User-Id': UserIdParamsSchema }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              roomId: z
                .string()
                .openapi({
                  description: 'Enter the room ID that you want to return to the queue.',
                }),
              departmentId: z
                .string()
                .exactOptional()
                .openapi({ description: 'Enter the department ID that the chat is part of.' }),
            })
            .openapi({ required: ['roomId'] }),
          examples: {
            'Example 1': {
              value: { roomId: 'iFzJuwGtkg4KB4keW', departmentId: '66fa9ec66ea9eba859b650b3' },
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
          schema: z
            .object({ result: z.boolean().exactOptional(), success: z.boolean().exactOptional() })
            .openapi({ required: [] }),
          examples: {
            'Example 1': { value: { result: true, success: true } },
            'Inquiry already exists': { value: { result: false, success: true } },
          },
        },
      },
    },
    400: {
      description: 'Bad Request',
      content: {
        'application/json': {
          schema: z
            .object({ success: z.boolean().exactOptional(), error: z.string().exactOptional() })
            .openapi({ required: [] }),
          examples: { 'Example 1': { value: { success: false, error: 'room-closed' } } },
        },
      },
    },
    401: AuthorizationErrorResponse,
  },
})

export const getApiV1LivechatIntegrationsSettingsRoute = createRoute({
  method: 'get',
  path: '/api/v1/livechat/integrations.settings',
  tags: ['Livechat'],
  summary: 'Get Livechat Integrations',
  description:
    'Retrieves a list of integration settings.\nPermission required: `view-livechat-manager`\n### Changelog\n| Version      | Description |\n| ---------------- | ------------|\n|2.2.0             | Added       |',
  operationId: 'get-api-v1-livechat-integrations.settings',
  request: {
    headers: z.object({ 'X-Auth-Token': AuthTokenParamsSchema, 'X-User-Id': UserIdParamsSchema }),
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': {
          schema: z
            .object({
              settings: z
                .array(
                  z
                    .object({
                      _id: z.string().exactOptional(),
                      _updatedAt: z.string().exactOptional(),
                      autocomplete: z.boolean().exactOptional(),
                      blocked: z.boolean().exactOptional(),
                      createdAt: z.string().exactOptional(),
                      group: z.string().exactOptional(),
                      hidden: z.boolean().exactOptional(),
                      i18nDescription: z.string().exactOptional(),
                      i18nLabel: z.string().exactOptional(),
                      packageValue: z.string().exactOptional(),
                      secret: z.boolean().exactOptional(),
                      section: z.string().exactOptional(),
                      sorter: z.int().exactOptional(),
                      ts: z.string().exactOptional(),
                      type: z.string().exactOptional(),
                      value: z.string().exactOptional(),
                      valueSource: z.string().exactOptional(),
                      meteorSettingsValue: z.string().exactOptional(),
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
                settings: [
                  {
                    _id: 'Livechat_secret_token',
                    _updatedAt: '2019-10-17T13:56:07.285Z',
                    autocomplete: true,
                    blocked: false,
                    createdAt: '2019-10-07T18:52:20.484Z',
                    group: 'Livechat',
                    hidden: false,
                    i18nDescription: 'Livechat_secret_token_Description',
                    i18nLabel: 'Secret_token',
                    packageValue: '',
                    secret: true,
                    section: 'CRM_Integration',
                    sorter: 25,
                    ts: '2019-10-07T21:00:01.287Z',
                    type: 'string',
                    value: '',
                    valueSource: 'meteorSettingsValue',
                    meteorSettingsValue: '',
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
    403: PermissionErrorResponse,
  },
})

export const getApiV1LivechatQueueRoute = createRoute({
  method: 'get',
  path: '/api/v1/livechat/queue',
  tags: ['Livechat'],
  summary: 'Get Livechat Queue',
  description:
    'Permission required: `view-l-room`\n### Changelog\n| Version      | Description |\n| ---------------- | ------------|\n|2.4.0             | Added       |',
  operationId: 'get-api-v1-livechat-queue',
  request: {
    headers: z.object({ 'X-Auth-Token': AuthTokenParamsSchema, 'X-User-Id': UserIdParamsSchema }),
    query: z.object({
      departmentId: DepartmentIdParamsSchema,
      agentId: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'agentId',
            in: 'query',
            description: 'The agent ID.',
            schema: { type: 'string' },
            required: false,
          },
        }),
      includeOfflineAgents: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'includeOfflineAgents',
            in: 'query',
            description: 'Whether you want to include offline agents or not.',
            schema: { type: 'string' },
            required: false,
          },
        }),
      offset: OffsetParamsSchema,
      count: CountParamsSchema,
      sort: SortParamsSchema,
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': {
          schema: z
            .object({
              queue: z
                .array(
                  z
                    .object({
                      chats: z.int().exactOptional(),
                      user: z
                        .object({
                          _id: z.string().exactOptional(),
                          username: z.string().exactOptional(),
                          status: z.string().exactOptional(),
                        })
                        .exactOptional()
                        .openapi({ required: [] }),
                      department: z
                        .object({
                          _id: z.string().exactOptional(),
                          name: z.string().exactOptional(),
                        })
                        .exactOptional()
                        .openapi({ required: [] }),
                    })
                    .openapi({ required: [] }),
                )
                .exactOptional(),
              count: z.int().exactOptional(),
              offset: z.int().exactOptional(),
              total: z.int().exactOptional(),
              success: z.boolean().exactOptional(),
            })
            .openapi({ required: [] }),
          examples: {
            'Success Example': {
              value: {
                queue: [
                  {
                    chats: 1,
                    user: {
                      _id: 'CaevAPDbXN252kyXa',
                      username: 'marcos.defendi',
                      status: 'online',
                    },
                    department: { _id: '457diLwcQMmdpaTjo', name: 'Department 1' },
                  },
                  {
                    chats: 2,
                    user: {
                      _id: 'CaevAPDbXN252kyXa',
                      username: 'marcos.defendi',
                      status: 'online',
                    },
                    department: { _id: '5mt9oEtQxuMMH23Co', name: 'Department 2' },
                  },
                ],
                count: 2,
                offset: 0,
                total: 2,
                success: true,
              },
            },
          },
        },
      },
    },
    401: AuthorizationErrorResponse,
    403: PermissionErrorResponse,
  },
})

export const postApiV1LivechatSmsIncomingServiceRoute = createRoute({
  method: 'post',
  path: '/api/v1/livechat/sms-incoming/{service}',
  tags: ['Livechat'],
  summary: 'Livechat SMS Incoming (Twilio)',
  description:
    'Receive SMS.\n\n### Changelog\n| Version      | Description |\n| ---------------- | ------------|\n|0.42.0            | Added      |',
  operationId: 'post-api-v1-livechat-sms-incoming-service',
  request: {
    params: z.object({
      service: z
        .string()
        .openapi({
          param: {
            name: 'service',
            in: 'path',
            description: 'Only the server `twilio` is accepted at moment.',
            required: true,
            schema: { type: 'string' },
            example: 'twilio',
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              From: z.string().exactOptional(),
              To: z.string().exactOptional(),
              Body: z.string().exactOptional(),
              ToCountry: z.string().exactOptional(),
              ToState: z.string().exactOptional(),
              ToCity: z.string().exactOptional(),
              ToZip: z.string().exactOptional(),
              FromCountry: z.string().exactOptional(),
              FromState: z.string().exactOptional(),
              FromCity: z.string().exactOptional(),
              FromZip: z.string().exactOptional(),
            })
            .openapi({ required: [] }),
          examples: {
            'Example 1': {
              value: {
                From: '5551123456789',
                To: '5551987654321',
                Body: 'SMS message',
                ToCountry: 'Brazil',
                ToState: 'RS',
                ToCity: 'Porto Alegre',
                ToZip: '',
                FromCountry: 'Brazil',
                FromState: 'RS',
                FromCity: 'Porto Alegre',
                FromZip: '',
              },
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
        'text/plain': {
          schema: z.string().openapi({ example: '<Response></Response>' }),
          examples: { default: { value: '<Response></Response>' } },
        },
      },
    },
  },
})

export const getApiV1LivechatConfigRoutingRoute = createRoute({
  method: 'get',
  path: '/api/v1/livechat/config/routing',
  tags: ['Livechat'],
  summary: 'Get Livechat Routing Configuration',
  description:
    'This endpoint returns the livechat routing configuration. It is called automatically when logging into the application to make the Omnichannel/livechat features available in the client.\n\n### Changelog\n| Version      | Description |\n| ---------------- | ------------|\n|7.11.0            | Added       |\n           ',
  operationId: 'get-api-v1-livechat-config-routing',
  request: {
    headers: z.object({ 'X-Auth-Token': AuthTokenParamsSchema, 'X-User-Id': UserIdParamsSchema }),
  },
  responses: {
    200: {
      description:
        'OK\r\nThe parameters in the response indicate whether the specific livechat setting in the workspace is enabled or not.',
      content: {
        'application/json': {
          schema: z
            .object({
              config: z
                .object({
                  previewRoom: z.boolean().exactOptional(),
                  showConnecting: z.boolean().exactOptional(),
                  showQueue: z.boolean().exactOptional(),
                  showQueueLink: z.boolean().exactOptional(),
                  returnQueue: z.boolean().exactOptional(),
                  enableTriggerAction: z.boolean().exactOptional(),
                  autoAssignAgent: z.boolean().exactOptional(),
                })
                .exactOptional()
                .openapi({ required: [] }),
              success: z.boolean().exactOptional(),
            })
            .openapi({ required: [] }),
          examples: {
            'Example 1': {
              value: {
                config: {
                  previewRoom: false,
                  showConnecting: false,
                  showQueue: false,
                  showQueueLink: true,
                  returnQueue: false,
                  enableTriggerAction: true,
                  autoAssignAgent: true,
                },
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

export const getApiV1LivechatTriggersRoute = createRoute({
  method: 'get',
  path: '/api/v1/livechat/triggers',
  tags: ['Livechat Triggers'],
  summary: 'Get List of Livechat Triggers',
  description:
    'Permission required: `view-livechat-manager`\n### Changelog\n| Version      | Description |\n| ---------------- | ------------|\n|2.2.0             | Added       |',
  operationId: 'get-api-v1-livechat-triggers',
  request: {
    headers: z.object({ 'X-Auth-Token': AuthTokenParamsSchema, 'X-User-Id': UserIdParamsSchema }),
    query: z.object({
      offset: OffsetParamsSchema,
      count: CountParamsSchema,
      sort: SortParamsSchema,
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': {
          schema: z
            .object({
              triggers: z
                .array(
                  z
                    .object({
                      _id: z.string().exactOptional(),
                      name: z.string().exactOptional(),
                      description: z.string().exactOptional(),
                      enabled: z.boolean().exactOptional(),
                      runOnce: z.boolean().exactOptional(),
                      conditions: z
                        .array(
                          z
                            .object({
                              name: z.string().exactOptional(),
                              value: z.string().exactOptional(),
                            })
                            .openapi({ required: [] }),
                        )
                        .exactOptional(),
                      actions: z
                        .array(
                          z
                            .object({
                              name: z.string().exactOptional(),
                              params: z
                                .object({
                                  sender: z.string().exactOptional(),
                                  msg: z.string().exactOptional(),
                                })
                                .exactOptional()
                                .openapi({ required: [] }),
                            })
                            .openapi({ required: [] }),
                        )
                        .exactOptional(),
                      _updatedAt: z.string().exactOptional(),
                    })
                    .openapi({ required: [] }),
                )
                .exactOptional(),
              count: z.int().exactOptional(),
              offset: z.int().exactOptional(),
              total: z.int().exactOptional(),
              success: z.boolean().exactOptional(),
            })
            .openapi({ required: [] }),
          examples: {
            'Success Example': {
              value: {
                triggers: [
                  {
                    _id: 'Lk52shJFYyb55trw8',
                    name: 'test',
                    description: 'test',
                    enabled: true,
                    runOnce: true,
                    conditions: [{ name: 'page-url', value: '' }],
                    actions: [{ name: 'send-message', params: { sender: '', msg: '' } }],
                    _updatedAt: '2019-10-04T15:36:29.695Z',
                  },
                ],
                count: 1,
                offset: 0,
                total: 1,
                success: true,
              },
            },
          },
        },
      },
    },
    401: AuthorizationErrorResponse,
    403: PermissionErrorResponse,
  },
})

export const postApiV1LivechatTriggersRoute = createRoute({
  method: 'post',
  path: '/api/v1/livechat/triggers',
  tags: ['Livechat Triggers'],
  summary: 'Create or Update Livechat Triggers',
  description:
    'Permission required: `view-livechat-manager`\n\nSee the <a href="https://docs.rocket.chat/docs/livechat-triggers" target="_blank">Livechat Triggers</a> guide for more information.',
  operationId: 'post-api-v1-livechat-triggers',
  request: {
    headers: z.object({ 'X-Auth-Token': AuthTokenParamsSchema, 'X-User-Id': UserIdParamsSchema }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              _id: z
                .string()
                .exactOptional()
                .openapi({
                  description: 'If you want to update a trigger, enter the trigger ID.',
                  example: '65fa8f42482d68e364',
                }),
              name: z
                .string()
                .openapi({ description: 'Enter a name for the trigger.', example: 'test-trigger' }),
              description: z
                .string()
                .openapi({
                  description: 'Enter a description for the trigger.',
                  example: 'Test trigger with the endpoint.',
                }),
              enabled: z
                .boolean()
                .default(true)
                .openapi({ description: 'Whether the trigger is enabled for use or not.' }),
              runOnce: z
                .boolean()
                .default(false)
                .openapi({
                  description: 'Whether the trigger will be run only once for each visitor.',
                }),
              conditions: z
                .array(
                  z
                    .object({
                      name: z
                        .string()
                        .exactOptional()
                        .openapi({
                          description:
                            'The condition that should take place for the trigger to execute. The possible values are:\n* `time-on-site`: The amount of time a visitor is on the site.\n* `page-url`: The site URL that a visitor visits.\n* `chat-opened-by-visitor`: The chat is opened by the visitor.\n* `after-guest-registration`: The guest is registered to the chat.',
                        }),
                      value: z
                        .xor([z.number(), z.string()])
                        .exactOptional()
                        .openapi({
                          description:
                            'Enter the value of the `page-url` (string) or the `time-on-site`, in seconds (number). Otherwise, you can enter `null`.',
                        }),
                    })
                    .openapi({ required: [] }),
                )
                .openapi({ description: 'Enter the conditions for the trigger to execute.' }),
              actions: z
                .array(
                  z
                    .object({
                      name: z
                        .string()
                        .exactOptional()
                        .openapi({
                          description:
                            'The name of the trigger action that takes place. The possible values are:\r\n* `send-message`: A message is sent to the visitor.\r\n* `use-external-service`: An external service is used for the trigger action.',
                        }),
                      params: z
                        .object({
                          sender: z
                            .string()
                            .exactOptional()
                            .openapi({
                              description:
                                'The sender of the trigger action. The possible values are:\r\n* `queue`: Impersonate the next available agent in the queue.\r\n* `custom`: Use a specific agent or bot.',
                            }),
                          name: z
                            .string()
                            .exactOptional()
                            .openapi({
                              description:
                                'Enter the name of the agent or bot that you want to use, if the `sender` is `custom`.',
                            }),
                          msg: z
                            .string()
                            .exactOptional()
                            .openapi({
                              description:
                                'Enter a message for the visitor, if the action `name` is `send-message`.',
                            }),
                          serviceUrl: z
                            .string()
                            .exactOptional()
                            .openapi({
                              description:
                                'Enter the external service URL you want to use, if the action `name` is `use-external-service`.',
                              example: 'http://localhost:3000/api/vX',
                            }),
                          serviceTimeout: z
                            .number()
                            .exactOptional()
                            .openapi({
                              description:
                                'Enter the service timeout value, in seconds, if the action `name` is `use-external-service`.',
                              example: 5000,
                            }),
                          serviceFallbackMessage: z
                            .string()
                            .exactOptional()
                            .openapi({
                              description:
                                'Enter a message when the service is not accessible, if the action `name` is `use-external-service`.',
                              example: 'Were sorry, we cannot complete your request',
                            }),
                        })
                        .exactOptional()
                        .openapi({
                          description: 'Enter the parameter values for the trigger action.',
                          required: [],
                        }),
                    })
                    .openapi({ required: [] }),
                )
                .openapi({
                  description: 'The actions that take place once the trigger is executed.',
                }),
            })
            .openapi({
              required: ['name', 'description', 'enabled', 'runOnce', 'conditions', 'actions'],
            }),
          examples: {
            'Example 1': {
              value: {
                name: 'api-trigger',
                description: 'testing create trigger endpoint',
                enabled: false,
                runOnce: true,
                conditions: [{ name: 'chat-opened-by-visitor', value: 0 }],
                actions: [
                  { name: 'send-message', params: { sender: 'queue', msg: 'hello world' } },
                ],
              },
            },
          },
        },
      },
    },
  },
  responses: {
    200: TrueSuccessResponse,
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
                error: "must have required property 'description' [error-invalid-params]",
                errorType: 'error-invalid-params',
              },
            },
            'Example 2': {
              value: {
                success: false,
                error: 'must be equal to one of the allowed values [error-invalid-params]',
                errorType: 'error-invalid-params',
              },
            },
          },
        },
      },
    },
    401: AuthorizationErrorResponse,
    403: PermissionErrorResponse,
  },
})

export const getApiV1LivechatTriggersIdRoute = createRoute({
  method: 'get',
  path: '/api/v1/livechat/triggers/{_id}',
  tags: ['Livechat Triggers'],
  summary: 'Get Livechat Trigger',
  description:
    'Get the details about a specific trigger.\nPermission required: `view-livechat-manager`\n### Changelog\n| Version      | Description |\n| ---------------- | ------------|\n|2.2.0             | Added       |',
  operationId: 'get-api-v1-livechat-triggers-_id',
  request: {
    params: z.object({
      _id: z
        .string()
        .openapi({
          param: {
            name: '_id',
            in: 'path',
            description: 'The trigger ID.',
            required: true,
            schema: { type: 'string' },
            example: 'Lk52shJFYyb55trw8',
          },
        }),
    }),
    headers: z.object({ 'X-Auth-Token': AuthTokenParamsSchema, 'X-User-Id': UserIdParamsSchema }),
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': {
          schema: z
            .object({
              trigger: z
                .object({
                  _id: z.string().exactOptional(),
                  name: z.string().exactOptional(),
                  description: z.string().exactOptional(),
                  enabled: z.boolean().exactOptional(),
                  runOnce: z.boolean().exactOptional(),
                  conditions: z
                    .array(
                      z
                        .object({
                          name: z.string().exactOptional(),
                          value: z.string().exactOptional(),
                        })
                        .openapi({ required: [] }),
                    )
                    .exactOptional(),
                  actions: z
                    .array(
                      z
                        .object({
                          name: z.string().exactOptional(),
                          params: z
                            .object({
                              sender: z.string().exactOptional(),
                              msg: z.string().exactOptional(),
                            })
                            .exactOptional()
                            .openapi({ required: [] }),
                        })
                        .openapi({ required: [] }),
                    )
                    .exactOptional(),
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
                trigger: {
                  _id: 'Lk52shJFYyb55trw8',
                  name: 'test',
                  description: 'test',
                  enabled: true,
                  runOnce: true,
                  conditions: [{ name: 'page-url', value: '' }],
                  actions: [{ name: 'send-message', params: { sender: '', msg: '' } }],
                  _updatedAt: '2019-10-04T15:36:29.695Z',
                },
                success: true,
              },
            },
          },
        },
      },
    },
    401: AuthorizationErrorResponse,
    403: PermissionErrorResponse,
  },
})

export const deleteApiV1LivechatTriggersIdRoute = createRoute({
  method: 'delete',
  path: '/api/v1/livechat/triggers/{_id}',
  tags: ['Livechat Triggers'],
  summary: 'Delete a trigger',
  description: 'Permission required: `view-livechat-manager`',
  operationId: 'delete-api-v1-livechat-triggers-_id',
  request: {
    headers: z.object({ 'X-Auth-Token': AuthTokenParamsSchema, 'X-User-Id': UserIdParamsSchema }),
    params: z.object({
      _id: z
        .string()
        .openapi({
          param: {
            name: '_id',
            in: 'path',
            description: 'The trigger ID.',
            required: true,
            schema: { type: 'string' },
            example: 'Lk52shJFYyb55trw8',
          },
        }),
    }),
  },
  responses: {
    200: TrueSuccessResponse,
    401: AuthorizationErrorResponse,
    403: PermissionErrorResponse,
  },
})

export const postApiV1LivechatTriggersExternalServiceTestRoute = createRoute({
  method: 'post',
  path: '/api/v1/livechat/triggers/external-service/test',
  tags: ['Livechat Triggers'],
  summary: 'Test Trigger with External Service',
  description:
    '<div style="text-align: center; margin: 1rem 0 1rem 0;"><img src="https://raw.githubusercontent.com/RocketChat/Rocket.Chat-Open-API/main/images/Enterprise%20tag.svg" alt="Enterprise" style="display: block; margin: auto;"></div>\n\nTest your Livechat trigger setup with external service using this endpoint. Make sure that you have created the <a href=\'https://docs.rocket.chat/docs/livechat-triggers\' target=\'_blank\'>trigger</a>. Permission required: `view-livechat-manager`. Rate limit applies: 15 requests per 60000 milliseconds.',
  operationId: 'post-api-v1-livechat-triggers-external-service-test',
  request: {
    headers: z.object({ 'X-Auth-Token': AuthTokenParamsSchema, 'X-User-Id': UserIdParamsSchema }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              webhookUrl: z
                .string()
                .openapi({
                  description: 'Enter the external webhook URL.',
                  example: 'https://webhook.site/2f5df6a1-592c-4d9f-8f36-ab15ca3caf23',
                }),
              timeout: z
                .string()
                .openapi({
                  description:
                    'Enter the time in milliseconds to wait for the external service to respond before cancelling the request.',
                  example: '10000',
                }),
              fallbackMessage: z
                .string()
                .default('Request timeout')
                .openapi({ description: 'Enter the message to send after the timeout ends.' }),
            })
            .openapi({ required: ['webhookUrl', 'timeout', 'fallbackMessage'] }),
          examples: {
            'Example 1': {
              value: {
                webhookUrl: 'https://webhook.site/2f5df6a1-592c-4d9f-8f36-ab15ca3caf23',
                timeout: '10000',
                fallbackMessage: 'Request timeout',
              },
            },
          },
        },
      },
    },
  },
  responses: {
    200: {
      description:
        'OK\n\nRocket.Chat sends a request to the webhook containing a payload of the visitor metadata. The webhook returns the response as demonstrated in this example.',
      content: {
        'application/json': {
          schema: z
            .object({
              triggerId: z.string().exactOptional(),
              response: z
                .object({
                  statusCode: z.int().exactOptional(),
                  contents: z
                    .array(
                      z
                        .object({ msg: z.string().exactOptional(), order: z.int().exactOptional() })
                        .openapi({ required: [] }),
                    )
                    .exactOptional(),
                })
                .exactOptional()
                .openapi({ required: [] }),
              success: z.boolean().exactOptional(),
            })
            .openapi({ required: [] }),
          examples: {
            'Example 1': {
              value: {
                triggerId: 'test-trigger',
                response: {
                  statusCode: 200,
                  contents: [
                    {
                      msg: 'Welcome to our support center, Morgan! How can we assist you today?',
                      order: 0,
                    },
                    {
                      msg: "Feel free to ask any questions you have. We're here to help!",
                      order: 1,
                    },
                  ],
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
                error: "must have required property 'webhookUrl' [error-invalid-params]",
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

export const getApiV1LivechatMonitorsRoute = createRoute({
  method: 'get',
  path: '/api/v1/livechat/monitors',
  tags: ['Omnichannel Monitors'],
  summary: 'Get List of Monitors',
  description:
    '<div style="text-align: center; margin: 1rem 0 1rem 0;"><img src="https://raw.githubusercontent.com/RocketChat/Rocket.Chat-Open-API/main/images/Enterprise%20tag.svg" alt="Enterprise" style="display: block; margin: auto;"></div>\n\nRetrieves a list of <a href=\'https://docs.rocket.chat/docs/monitors\' target=\'_blank\'>monitors</a>.\nPermission required: `manage-livechat-monitors`',
  operationId: 'get-api-v1-livechat-monitors',
  request: {
    headers: z.object({ 'X-Auth-Token': AuthTokenParamsSchema, 'X-User-Id': UserIdParamsSchema }),
    query: z.object({
      offset: OffsetParamsSchema,
      count: CountParamsSchema,
      sort: SortParamsSchema,
      text: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            schema: { type: 'string' },
            in: 'query',
            name: 'text',
            description: 'Filter the result with the text.',
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
              monitors: z
                .array(
                  z
                    .object({
                      _id: z.string().exactOptional(),
                      username: z.string().exactOptional(),
                      emails: z
                        .array(
                          z
                            .object({
                              address: z.string().exactOptional(),
                              verified: z.boolean().exactOptional(),
                            })
                            .openapi({ required: [] }),
                        )
                        .exactOptional(),
                      status: z.string().exactOptional(),
                      name: z.string().exactOptional(),
                      statusLivechat: z.string().exactOptional(),
                    })
                    .openapi({ required: [] }),
                )
                .exactOptional(),
              count: z.int().exactOptional(),
              offset: z.int().exactOptional(),
              total: z.int().exactOptional(),
              success: z.boolean().exactOptional(),
            })
            .openapi({ required: [] }),
          examples: {
            'Success Example': {
              value: {
                monitors: [
                  {
                    _id: 'gxcJTYapi5mPxuAme',
                    username: 'Bruno',
                    emails: [{ address: '', verified: false }],
                    status: 'offline',
                    name: 'Bruno',
                    statusLivechat: 'not-available',
                  },
                  {
                    _id: 'QDHWqcubZunM8C4NR',
                    username: 'gomes',
                    emails: [{ address: '', verified: true }],
                    status: 'offline',
                    name: ' Gomes',
                    statusLivechat: 'not-available',
                  },
                ],
                count: 2,
                offset: 0,
                total: 2,
                success: true,
              },
            },
          },
        },
      },
    },
    401: AuthorizationErrorResponse,
    403: PermissionErrorResponse,
  },
})

export const getApiV1LivechatMonitorsUsernameRoute = createRoute({
  method: 'get',
  path: '/api/v1/livechat/monitors/{username}',
  tags: ['Omnichannel Monitors'],
  summary: 'Get a Monitor',
  description:
    '<div style="text-align: center; margin: 1rem 0 1rem 0;"><img src="https://raw.githubusercontent.com/RocketChat/Rocket.Chat-Open-API/main/images/Enterprise%20tag.svg" alt="Enterprise" style="display: block; margin: auto;"></div>\n\nGet details of a specific monitor.\nPermission required: `manage-livechat-monitors`',
  operationId: 'get-api-v1-livechat-monitors-username',
  request: {
    headers: z.object({ 'X-Auth-Token': AuthTokenParamsSchema, 'X-User-Id': UserIdParamsSchema }),
    params: z.object({
      username: z
        .string()
        .openapi({
          param: {
            name: 'username',
            in: 'path',
            description: 'The username of the person monitoring.',
            required: true,
            schema: { type: 'string' },
            example: '1-agent',
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
              _id: z.string().exactOptional(),
              username: z.string().exactOptional(),
              emails: z
                .array(
                  z
                    .object({
                      address: z.string().exactOptional(),
                      verified: z.boolean().exactOptional(),
                    })
                    .openapi({ required: [] }),
                )
                .exactOptional(),
              status: z.string().exactOptional(),
              name: z.string().exactOptional(),
              statusLivechat: z.string().exactOptional(),
              livechat: z
                .object({ maxNumberSimultaneousChat: z.string().exactOptional() })
                .exactOptional()
                .openapi({ required: [] }),
              success: z.boolean().exactOptional(),
            })
            .openapi({ required: [] }),
          examples: {
            'Success Example': {
              value: {
                _id: 'RSb7exHJsiKqwRjPF',
                username: '1-agent',
                emails: [{ address: '1-agent@g.c', verified: false }],
                status: 'offline',
                name: '1-agent',
                statusLivechat: 'not-available',
                livechat: { maxNumberSimultaneousChat: '4' },
                success: true,
              },
            },
          },
        },
      },
    },
    401: AuthorizationErrorResponse,
    403: PermissionErrorResponse,
  },
})

export const postApiV1LivechatMonitorsDeleteRoute = createRoute({
  method: 'post',
  path: '/api/v1/livechat/monitors.delete',
  tags: ['Omnichannel Monitors'],
  summary: 'Delete a Monitor',
  description:
    '<div style="text-align: center; margin: 1rem 0 1rem 0;"><img src="https://raw.githubusercontent.com/RocketChat/Rocket.Chat-Open-API/main/images/Enterprise%20tag.svg" alt="Enterprise" style="display: block; margin: auto;"></div>\n\nDelete an Omnichannel monitor. Permission required: `manage-livechat-monitors`',
  operationId: 'post-api-v1-livechat-monitors.delete',
  request: {
    headers: z.object({ 'X-Auth-Token': AuthTokenParamsSchema, 'X-User-Id': UserIdParamsSchema }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              username: z
                .string()
                .openapi({
                  description: 'Enter the username that you want to remove as the monitor.',
                  example: 'test.user',
                }),
            })
            .openapi({ required: ['username'] }),
          examples: { 'Example 1': { value: { username: 'test.user' } } },
        },
      },
    },
  },
  responses: {
    200: TrueSuccessResponse,
    400: {
      description: 'Bad Request',
      content: {
        'application/json': {
          schema: z
            .object({
              success: z.boolean().exactOptional(),
              errorType: z.string().exactOptional(),
              error: z.string().exactOptional(),
            })
            .openapi({ required: [] }),
          examples: {
            'Example 1': {
              value: {
                success: false,
                errorType: 'error-invalid-params',
                error: "must have required property 'username'",
              },
            },
          },
        },
      },
    },
    401: AuthorizationErrorResponse,
  },
})

export const postApiV1LivechatMonitorsCreateRoute = createRoute({
  method: 'post',
  path: '/api/v1/livechat/monitors.create',
  tags: ['Omnichannel Monitors'],
  summary: 'Create a Monitor',
  description:
    '<div style="text-align: center; margin: 1rem 0 1rem 0;"><img src="https://raw.githubusercontent.com/RocketChat/Rocket.Chat-Open-API/main/images/Enterprise%20tag.svg" alt="Enterprise" style="display: block; margin: auto;"></div>\n\nAdd a user as monitor. Permission required: `manage-livechat-monitors`',
  operationId: 'post-api-v1-livechat-monitors.create',
  request: {
    headers: z.object({ 'X-Auth-Token': AuthTokenParamsSchema, 'X-User-Id': UserIdParamsSchema }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              username: z
                .string()
                .openapi({
                  description: 'Enter the username that you want to add as monitor.',
                  example: 'test.user',
                }),
            })
            .openapi({ required: ['username'] }),
          examples: { 'Example 1': { value: { username: 'cat.kat' } } },
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
            .object({
              _id: z.string().exactOptional(),
              username: z.string().exactOptional(),
              roles: z.array(z.string()).exactOptional(),
              success: z.boolean().exactOptional(),
            })
            .openapi({ required: [] }),
          examples: {
            'Example 1': {
              value: {
                _id: 'J6Q87AnWP5aNc9xhx',
                username: 'cat.kat',
                roles: ['user', 'livechat-agent'],
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
              errorType: z.string().exactOptional(),
              error: z.string().exactOptional(),
            })
            .openapi({ required: [] }),
          examples: {
            'Example 1': {
              value: {
                success: false,
                errorType: 'error-invalid-params',
                error: "must have required property 'username'",
              },
            },
          },
        },
      },
    },
    401: AuthorizationErrorResponse,
  },
})

export const getApiV1LivechatPrioritiesRoute = createRoute({
  method: 'get',
  path: '/api/v1/livechat/priorities',
  tags: ['Omnichannel Priorities'],
  summary: 'Get List of Priorities',
  description:
    '<div style="text-align: center; margin: 1rem 0 1rem 0;"><img src="https://raw.githubusercontent.com/RocketChat/Rocket.Chat-Open-API/main/images/Enterprise%20tag.svg" alt="Enterprise" style="display: block; margin: auto;"></div>\n\nRetrieves list of existing <a href=\'https://docs.rocket.chat/docs/priorities\' target=\'_blank\'>priorities</a>. At least one of the following permissions is required:\n  * `manage-livechat-priorities`\n  * `view-l-room`\n\n### Changelog\n| Version      | Description |\n| ------------ | ------------|\n|6.0.0         | Added       |',
  operationId: 'get-api-v1-livechat-priorities',
  request: {
    headers: z.object({ 'X-Auth-Token': AuthTokenParamsSchema, 'X-User-Id': UserIdParamsSchema }),
    query: z.object({
      offset: OffsetParamsSchema,
      count: CountParamsSchema,
      sort: SortParamsSchema,
      text: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            schema: { type: 'string' },
            in: 'query',
            name: 'text',
            description: 'Filter the search result with the text.',
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
              priorities: z
                .array(
                  z
                    .object({
                      _id: z.string().exactOptional(),
                      i18n: z.string().exactOptional(),
                      sortItem: z.int().exactOptional(),
                      dirty: z.boolean().exactOptional(),
                    })
                    .openapi({ required: [] }),
                )
                .exactOptional(),
              count: z.int().exactOptional(),
              offset: z.int().exactOptional(),
              total: z.int().exactOptional(),
              success: z.boolean().exactOptional(),
            })
            .openapi({ required: [] }),
          examples: {
            'Success Example': {
              value: {
                priorities: [
                  { _id: '64007cc2fa0ed7dd905092e3', i18n: 'Lowest', sortItem: 5, dirty: false },
                  { _id: '64007cc2fa0ed7dd905092e4', i18n: 'Low', sortItem: 4, dirty: false },
                  { _id: '64007cc2fa0ed7dd905092e5', i18n: 'Medium', sortItem: 3, dirty: false },
                  { _id: '64007cc2fa0ed7dd905092e6', i18n: 'High', sortItem: 2, dirty: false },
                  { _id: '64007cc2fa0ed7dd905092e7', i18n: 'Highest', sortItem: 1, dirty: false },
                ],
                count: 5,
                offset: 0,
                total: 5,
                success: true,
              },
            },
          },
        },
      },
    },
    401: AuthorizationErrorResponse,
    403: PermissionErrorResponse,
  },
})

export const getApiV1LivechatPrioritiesPriorityIdRoute = createRoute({
  method: 'get',
  path: '/api/v1/livechat/priorities/{priorityId}',
  tags: ['Omnichannel Priorities'],
  summary: 'Get a Priority',
  description:
    '<div style="text-align: center; margin: 1rem 0 1rem 0;"><img src="https://raw.githubusercontent.com/RocketChat/Rocket.Chat-Open-API/main/images/Enterprise%20tag.svg" alt="Enterprise" style="display: block; margin: auto;"></div>\n\nGet details of a specific priority.\nAt least one of the following permissions is required:\n  * `manage-livechat-priorities`\n  * `view-l-room`\n\n### Changelog\n| Version | Description  |\n| ------- |--------------|\n| 6.0.0  | Added         |',
  operationId: 'get-api-v1-livechat-priorities-priorityId',
  request: {
    headers: z.object({ 'X-Auth-Token': AuthTokenParamsSchema, 'X-User-Id': UserIdParamsSchema }),
    params: z.object({
      priorityId: z
        .string()
        .openapi({
          param: {
            name: 'priorityId',
            in: 'path',
            description: 'The priority ID.',
            required: true,
            schema: { type: 'string' },
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
              _id: z.string().exactOptional(),
              i18n: z.string().exactOptional(),
              sortItem: z.int().exactOptional(),
              dirty: z.boolean().exactOptional(),
              success: z.boolean().exactOptional(),
            })
            .openapi({ required: [] }),
          examples: {
            'Success Example': {
              value: {
                _id: '64007cc2fa0ed7dd905092e3',
                i18n: 'Lowest',
                sortItem: 5,
                dirty: false,
                success: true,
              },
            },
          },
        },
      },
    },
    401: AuthorizationErrorResponse,
    403: PermissionErrorResponse,
  },
})

export const putApiV1LivechatPrioritiesPriorityIdRoute = createRoute({
  method: 'put',
  path: '/api/v1/livechat/priorities/{priorityId}',
  tags: ['Omnichannel Priorities'],
  summary: 'Update Priority',
  description:
    '<div style="text-align: center; margin: 1rem 0 1rem 0;"><img src="https://raw.githubusercontent.com/RocketChat/Rocket.Chat-Open-API/main/images/Enterprise%20tag.svg" alt="Enterprise" style="display: block; margin: auto;"></div>\n\nUpdate an existing priority.\nPermission required: `manage-livechat-priorities`\n\n### Changelog\n| Version      | Description |\n| ------------ | ------------|\n|6.0.0         | Added       |',
  operationId: 'put-api-v1-livechat-priorities-priorityId',
  request: {
    headers: z.object({ 'X-Auth-Token': AuthTokenParamsSchema, 'X-User-Id': UserIdParamsSchema }),
    params: z.object({
      priorityId: z
        .string()
        .openapi({
          param: {
            name: 'priorityId',
            in: 'path',
            description: 'The priority ID.',
            required: true,
            schema: { type: 'string' },
            example: '64007cc2fa0ed7dd905092e3',
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({ name: z.string().openapi({ description: 'The name of the priority.' }) })
            .openapi({ required: ['name'] }),
          examples: { 'Example 1': { value: { name: 'Very low' } } },
        },
      },
    },
  },
  responses: {
    200: TrueSuccessResponse,
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
                error: 'must match exactly one schema in oneOf [error-invalid-params]',
                errorType: 'error-invalid-params',
              },
            },
          },
        },
      },
    },
    401: AuthorizationErrorResponse,
    403: PermissionErrorResponse,
  },
})

export const getApiV1LivechatPrioritiesResetRoute = createRoute({
  method: 'get',
  path: '/api/v1/livechat/priorities.reset',
  tags: ['Omnichannel Priorities'],
  summary: 'Check Priority Reset',
  description:
    '<div style="text-align: center; margin: 1rem 0 1rem 0;"><img src="https://raw.githubusercontent.com/RocketChat/Rocket.Chat-Open-API/main/images/Enterprise%20tag.svg" alt="Enterprise" style="display: block; margin: auto;"></div>\n\nUse this endpoint to check whether or not you can reset the priorities or not. You cannot reset priorities if the values are already in the default state. Once you edit the priorities, you get the option to reset them. Permission required: `manage-livechat-priorities`',
  operationId: 'get-api-v1-livechat-priorities.reset',
  request: {
    headers: z.object({ 'X-Auth-Token': AuthTokenParamsSchema, 'X-User-Id': UserIdParamsSchema }),
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': {
          schema: z
            .object({ reset: z.boolean().exactOptional(), success: z.boolean().exactOptional() })
            .openapi({ required: [] }),
          examples: { 'Example 1': { value: { reset: true, success: true } } },
        },
      },
    },
    401: AuthorizationErrorResponse,
  },
})

export const postApiV1LivechatPrioritiesResetRoute = createRoute({
  method: 'post',
  path: '/api/v1/livechat/priorities.reset',
  tags: ['Omnichannel Priorities'],
  summary: 'Reset Priorities',
  description:
    '<div style="text-align: center; margin: 1rem 0 1rem 0;"><img src="https://raw.githubusercontent.com/RocketChat/Rocket.Chat-Open-API/main/images/Enterprise%20tag.svg" alt="Enterprise" style="display: block; margin: auto;"></div>\n\nThis endpoint resets all priorities back to default.\nPermission required: `manage-livechat-priorities`\n\n### Changelog\n| Version      | Description |\n| ------------ | ------------|\n|6.0.0         | Added       |',
  operationId: 'post-livechat-priorities.reset',
  request: {
    headers: z.object({ 'X-Auth-Token': AuthTokenParamsSchema, 'X-User-Id': UserIdParamsSchema }),
  },
  responses: {
    200: TrueSuccessResponse,
    401: AuthorizationErrorResponse,
    403: PermissionErrorResponse,
  },
})

export const getApiV1LivechatTagsRoute = createRoute({
  method: 'get',
  path: '/api/v1/livechat/tags',
  tags: ['Omnichannel Tags'],
  summary: 'Get List of Tags',
  description:
    '<div style="text-align: center; margin: 1rem 0 1rem 0;"><img src="https://raw.githubusercontent.com/RocketChat/Rocket.Chat-Open-API/main/images/Enterprise%20tag.svg" alt="Enterprise" style="display: block; margin: auto;"></div>\n\nRetrieves list of <a href=\'https://docs.rocket.chat/docs/tags\' target=\'_blank\'>tags</a>. Here are some important details to note when retrieving tags:\n- By default, only tags not linked to any department are returned.\n- To retrieve all tags in the workspace, set the `viewAll` parameter to `true`.\n- If a `department` is specified, the response includes both the tags associated with that department and those not linked to any department.\n\nAt least one of the following permissions is required:\n  * `view-l-room`\n  * `manage-livechat-tags`',
  operationId: 'get-api-v1-livechat-tags',
  request: {
    headers: z.object({ 'X-Auth-Token': AuthTokenParamsSchema, 'X-User-Id': UserIdParamsSchema }),
    query: z.object({
      offset: OffsetParamsSchema,
      count: CountParamsSchema,
      text: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            schema: { type: 'string' },
            in: 'query',
            name: 'text',
            description: 'Filter the search result with the text.',
            required: false,
          },
        }),
      department: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            schema: { type: 'string' },
            in: 'query',
            name: 'department',
            description: 'Enter the department ID.',
            required: false,
          },
        }),
      viewAll: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            schema: { type: 'boolean' },
            in: 'query',
            name: 'viewAll',
            description: 'Select whether you want to view all tags.',
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
              'Sort tags in ascending (`1`) or descending (`-1`) order. The options are:\n * `name`: Sort by tag name. `sort={"name": 1}` (default) or `sort={"name": -1}`\n * `description`: Sort by tag description. `sort={"description": 1}` or `sort={"description": -1}`\n * `numDepartments`: Sort by number of departments associated with the tag.\n * `_createdAt`: Sort by date of tag creation.\n * `_updatedAt`: Sort by the update timestamp.',
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
              tags: z
                .array(
                  z
                    .object({
                      _id: z.string().exactOptional(),
                      name: z.string().exactOptional(),
                      numDepartments: z.int().exactOptional(),
                      departments: z.array(z.string()).exactOptional(),
                      _updatedAt: z.string().exactOptional(),
                      description: z.string().exactOptional(),
                    })
                    .openapi({ required: [] }),
                )
                .exactOptional(),
              count: z.int().exactOptional(),
              offset: z.int().exactOptional(),
              total: z.int().exactOptional(),
              success: z.boolean().exactOptional(),
            })
            .openapi({ required: [] }),
          examples: {
            'Success Example': {
              value: {
                tags: [
                  {
                    _id: 'nNJntq2n6GBdR8JC4',
                    name: '331',
                    numDepartments: 2,
                    departments: ['kxL4qaa29SMpy3ZXG', 'WRY3EFGAT9Xh5NFBv'],
                    _updatedAt: '2022-11-28T07:17:31.973Z',
                    description: 'xfgh',
                  },
                  {
                    _id: 'bhA8DPhSdeBEJ2C94',
                    name: 'QA-Passed',
                    numDepartments: 0,
                    departments: [],
                    _updatedAt: '2022-08-30T12:14:54.173Z',
                  },
                  {
                    _id: 'b8mvKqZXiAw36pDqE',
                    name: 'VoIP',
                    description: 'voip test',
                    numDepartments: 0,
                    departments: [],
                    _updatedAt: '2022-03-01T06:27:43.113Z',
                  },
                  {
                    _id: 'GR6zxTM5PMHxGwud6',
                    name: 't1',
                    description: 'test1',
                    numDepartments: 1,
                    departments: ['kxL4qaa29SMpy3ZXG'],
                    _updatedAt: '2023-01-04T14:02:29.038Z',
                  },
                ],
                count: 4,
                offset: 0,
                total: 4,
                success: true,
              },
            },
          },
        },
      },
    },
    401: AuthorizationErrorResponse,
    403: PermissionErrorResponse,
  },
})

export const getApiV1LivechatTagsTagIdRoute = createRoute({
  method: 'get',
  path: '/api/v1/livechat/tags/{tagId}',
  tags: ['Omnichannel Tags'],
  summary: 'Get a Tag',
  description:
    '<div style="text-align: center; margin: 1rem 0 1rem 0;"><img src="https://raw.githubusercontent.com/RocketChat/Rocket.Chat-Open-API/main/images/Enterprise%20tag.svg" alt="Enterprise" style="display: block; margin: auto;"></div>\n\nAt least one of the following permissions is required:\n  * `view-l-room`\n  * `manage-livechat-tags`',
  operationId: 'get-api-v1-livechat-tags-tagId',
  request: {
    headers: z.object({ 'X-Auth-Token': AuthTokenParamsSchema, 'X-User-Id': UserIdParamsSchema }),
    params: z.object({
      tagId: z
        .string()
        .openapi({
          param: {
            name: 'tagId',
            in: 'path',
            description: 'The tag ID.',
            required: true,
            schema: { type: 'string' },
            example: 'pXkCRLGxD34y2FEZq',
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
              _id: z.string().exactOptional(),
              name: z.string().exactOptional(),
              numDepartments: z.int().exactOptional(),
              departments: z.array(z.string()).exactOptional(),
              _updatedAt: z.string().exactOptional(),
              description: z.string().exactOptional(),
              success: z.boolean().exactOptional(),
            })
            .openapi({ required: [] }),
          examples: {
            'Success Example': {
              value: {
                _id: 'nNJntq2n6GBdR8JC4',
                name: '331',
                numDepartments: 2,
                departments: ['kxL4qaa29SMpy3ZXG', 'WRY3EFGAT9Xh5NFBv'],
                _updatedAt: '2022-11-28T07:17:31.973Z',
                description: 'test',
                success: true,
              },
            },
          },
        },
      },
    },
    401: AuthorizationErrorResponse,
    403: PermissionErrorResponse,
    404: {
      description: 'Not Found',
      content: {
        'application/json': {
          schema: z
            .object({ success: z.boolean().exactOptional(), error: z.string().exactOptional() })
            .openapi({ required: [] }),
          examples: { 'Example 1': { value: { success: false, error: 'Tag not found' } } },
        },
      },
    },
  },
})

export const postApiV1LivechatTagsDeleteRoute = createRoute({
  method: 'post',
  path: '/api/v1/livechat/tags.delete',
  tags: ['Omnichannel Tags'],
  summary: 'Delete a tag',
  description:
    '<div style="text-align: center; margin: 1rem 0 1rem 0;"><img src="https://raw.githubusercontent.com/RocketChat/Rocket.Chat-Open-API/main/images/Enterprise%20tag.svg" alt="Enterprise" style="display: block; margin: auto;"></div>\n\nThis endpoint is used to delete an Omnichannel tag from the workspace. Permission required: `manage-livechat-tags`\n\n### Changelog\n| Version      | Description |\n| ------------ | ------------|\n|7.12.0         | Added       |',
  operationId: 'post-api-v1-livechat-tags.delete',
  request: {
    headers: z.object({ 'X-Auth-Token': AuthTokenParamsSchema, 'X-User-Id': UserIdParamsSchema }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              id: z
                .string()
                .openapi({
                  description: 'Enter the tag ID that you want to delete.',
                  example: '682223ba30c9c71254e46012',
                }),
            })
            .openapi({ required: ['id'] }),
          examples: { 'Example 1': { value: { id: '682223ba30c9c71254e46012' } } },
        },
      },
    },
  },
  responses: {
    200: TrueSuccessResponse,
    400: {
      description: 'Bad Request',
      content: {
        'application/json': {
          schema: z
            .object({ success: z.boolean().exactOptional(), error: z.string().exactOptional() })
            .openapi({ required: [] }),
          examples: { 'Example 1': { value: { success: false, error: 'Tag not found' } } },
        },
      },
    },
    401: AuthorizationErrorResponse,
  },
})

export const postApiV1LivechatTagsSaveRoute = createRoute({
  method: 'post',
  path: '/api/v1/livechat/tags.save',
  tags: ['Omnichannel Tags'],
  summary: 'Create a Tag',
  description:
    '<div style="text-align: center; margin: 1rem 0 1rem 0;"><img src="https://raw.githubusercontent.com/RocketChat/Rocket.Chat-Open-API/main/images/Enterprise%20tag.svg" alt="Enterprise" style="display: block; margin: auto"></div>\n\nUse this endpoint to create an Omnichannel tag. Permission required: `manage-livechat-tags`',
  operationId: 'post-api-v1-livechat-tags.save',
  request: {
    headers: z.object({ 'X-Auth-Token': AuthTokenParamsSchema, 'X-User-Id': UserIdParamsSchema }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              tagData: z
                .object({
                  name: z
                    .string()
                    .exactOptional()
                    .openapi({ description: 'Enter a name for the tag.', example: 'Support' }),
                  description: z
                    .string()
                    .exactOptional()
                    .openapi({
                      description: "Enter the tag's description.",
                      example: 'Tag for support team',
                    }),
                })
                .openapi({ required: [] }),
              tagDepartments: z
                .array(z.string().openapi({ example: '["68304887113ac52640bc1ca6"]' }))
                .exactOptional()
                .openapi({ description: 'Enter the department IDs that can use this tag.' }),
              _id: z
                .string()
                .exactOptional()
                .openapi({
                  description: 'Use this parameter to update an existing tag.',
                  example: '69536b596ff48667974be868',
                }),
            })
            .openapi({ required: ['tagData'] }),
          examples: {
            'Example 1': {
              value: {
                tagData: { name: 'apiTag', description: 'testing' },
                tagDepartments: ['TEST-DEPT'],
                _id: '69536b7a6ff48667974be86b',
              },
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
          schema: z
            .object({
              name: z.string().exactOptional(),
              description: z.string().exactOptional(),
              numDepartments: z.int().exactOptional(),
              departments: z.array(z.string()).exactOptional(),
              _id: z.string().exactOptional(),
              success: z.boolean().exactOptional(),
            })
            .openapi({ required: [] }),
          examples: {
            'New tag created': {
              value: {
                name: 'apiTag01',
                description: 'testing api endpoint',
                numDepartments: 1,
                departments: ['TEST-DEPT'],
                _id: '69536ca06ff48667974be86d',
                success: true,
              },
            },
            'Updated existing tag': {
              value: {
                name: 'apiTag-updated',
                description: 'testing api endpoint',
                numDepartments: 1,
                departments: ['TEST-DEPT'],
                _updatedAt: '2025-12-30T06:06:00.995Z',
                _id: '69536b7a6ff48667974be86b',
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
              errorType: z.string().exactOptional(),
              error: z.string().exactOptional(),
            })
            .openapi({ required: [] }),
          examples: {
            'Example 1': {
              value: {
                success: false,
                errorType: 'error-invalid-params',
                error: "must have required property 'tagData'",
              },
            },
          },
        },
      },
    },
    401: AuthorizationErrorResponse,
  },
})

export const getApiV1LivechatUnitsRoute = createRoute({
  method: 'get',
  path: '/api/v1/livechat/units',
  tags: ['Omnichannel Units'],
  summary: 'Get List of Units',
  description:
    '<div style="text-align: center; margin: 1rem 0 1rem 0;"><img src="https://raw.githubusercontent.com/RocketChat/Rocket.Chat-Open-API/main/images/Enterprise%20tag.svg" alt="Enterprise" style="display: block; margin: auto;"></div>\n\nPermission required: `manage-livechat-units`',
  operationId: 'get-api-v1-livechat-units',
  request: {
    headers: z.object({ 'X-Auth-Token': AuthTokenParamsSchema, 'X-User-Id': UserIdParamsSchema }),
    query: z.object({
      text: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            schema: { type: 'string' },
            in: 'query',
            name: 'text',
            description: 'Enter some text to filter the results.',
            required: false,
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
              units: z
                .array(
                  z
                    .object({
                      _id: z.string().exactOptional(),
                      name: z.string().exactOptional(),
                      visibility: z.string().exactOptional(),
                      type: z.string().exactOptional(),
                      numMonitors: z.int().exactOptional(),
                      numDepartments: z.int().exactOptional(),
                      _updatedAt: z.string().exactOptional(),
                    })
                    .openapi({ required: [] }),
                )
                .exactOptional(),
              count: z.int().exactOptional(),
              offset: z.int().exactOptional(),
              total: z.int().exactOptional(),
              success: z.boolean().exactOptional(),
            })
            .openapi({ required: [] }),
          examples: {
            'Success Example': {
              value: {
                units: [
                  {
                    _id: 'SB3Z7uuEvd3aKPjnE',
                    name: '12345',
                    visibility: 'public',
                    type: 'u',
                    numMonitors: 3,
                    numDepartments: 3,
                    _updatedAt: '2022-09-15T14:55:32.338Z',
                  },
                  {
                    _id: 'uiPBkzcau5hrWwBkG',
                    name: 'C',
                    visibility: 'public',
                    type: 'u',
                    numMonitors: 1,
                    numDepartments: 3,
                    _updatedAt: '2022-08-29T20:18:07.442Z',
                  },
                  {
                    _id: 'jsNuTwygAAWFPkt8u',
                    name: 'Mtest',
                    visibility: 'public',
                    type: 'u',
                    numMonitors: 1,
                    numDepartments: 1,
                    _updatedAt: '2022-09-15T11:44:32.103Z',
                  },
                  {
                    _id: 'LnM2rzbknjYSkkd5p',
                    name: 'Sales Unit',
                    visibility: 'public',
                    type: 'u',
                    numMonitors: 1,
                    numDepartments: 2,
                    _updatedAt: '2022-09-15T11:44:15.721Z',
                  },
                  {
                    _id: 'y6TXZeTzn4mAxDhL2',
                    name: 'TestDept1',
                    visibility: 'public',
                    type: 'u',
                    numMonitors: 4,
                    numDepartments: 1,
                    _updatedAt: '2022-08-30T09:55:19.240Z',
                  },
                  {
                    _id: 'xiAnkznAh4RSJ8DQT',
                    name: 'abc',
                    visibility: 'public',
                    type: 'u',
                    numMonitors: 1,
                    numDepartments: 3,
                    _updatedAt: '2023-01-03T10:19:58.219Z',
                  },
                  {
                    _id: 'TGjc7wN84KxQup9cF',
                    name: 'business unit test',
                    visibility: 'public',
                    type: 'u',
                    numMonitors: 3,
                    numDepartments: 1,
                    _updatedAt: '2022-11-21T11:16:01.698Z',
                  },
                ],
                count: 7,
                offset: 0,
                total: 7,
                success: true,
              },
            },
          },
        },
      },
    },
    401: AuthorizationErrorResponse,
    403: PermissionErrorResponse,
  },
})

export const postApiV1LivechatUnitsRoute = createRoute({
  method: 'post',
  path: '/api/v1/livechat/units',
  tags: ['Omnichannel Units'],
  summary: 'Create Unit',
  description:
    '<div style="text-align: center; margin: 1rem 0 1rem 0;"><img src="https://raw.githubusercontent.com/RocketChat/Rocket.Chat-Open-API/main/images/Enterprise%20tag.svg" alt="Enterprise" style="display: block; margin: auto;"></div>\n\nCreate a <a href=\'https://docs.rocket.chat/docs/units\' target=\'_blank\'>unit</a> to group departments. Permission required: `manage-livechat-units`\n### Changelog\n| Version      | Description |\n| ------------ | ------------|\n|4.2.0         | Added       |',
  operationId: 'post-api-v1-livechat-units',
  request: {
    headers: z.object({ 'X-Auth-Token': AuthTokenParamsSchema, 'X-User-Id': UserIdParamsSchema }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              unitData: z
                .object({
                  name: z
                    .string()
                    .openapi({
                      description: 'The name of the unit that you are creating.',
                      example: 'unitxx2',
                    }),
                  visibility: z
                    .string()
                    .openapi({
                      description:
                        'The visibility of the unit. For example, `public` or `private`.',
                    }),
                })
                .openapi({
                  description: 'The object containing the unit information.',
                  required: ['name', 'visibility'],
                }),
              unitMonitors: z
                .array(
                  z
                    .object({
                      monitorId: z
                        .string()
                        .openapi({
                          description: 'The monitor ID that you want to add to the unit.',
                          example: 'GT67Tv6x5p5y5xZWN',
                        }),
                      username: z
                        .string()
                        .openapi({
                          description: 'The user name of the monitor.',
                          example: 'testerio',
                        }),
                    })
                    .openapi({ required: ['monitorId', 'username'] }),
                )
                .openapi({ description: 'The object containing the unit monitors information.' }),
              unitDepartments: z
                .array(
                  z
                    .object({
                      departmentId: z
                        .string()
                        .openapi({
                          description: 'The department ID that you want to add to the unit.',
                          example: 'CgM4vfNNtj8t4QEMd',
                        }),
                    })
                    .openapi({ required: ['departmentId'] }),
                )
                .openapi({ description: 'The object containing the department information.' }),
            })
            .openapi({ required: ['unitData', 'unitMonitors', 'unitDepartments'] }),
          examples: {
            'Example 1': {
              value: {
                unitData: { name: 'unitxx2', visibility: 'public' },
                unitMonitors: [{ monitorId: 'GT67Tv6x5p5y5xZWN', username: 'testerio' }],
                unitDepartments: [{ departmentId: 'CgM4vfNNtj8t4QEMd' }],
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
              name: z.string().exactOptional(),
              visibility: z.string().exactOptional(),
              type: z.string().exactOptional(),
              numMonitors: z.int().exactOptional(),
              numDepartments: z.int().exactOptional(),
              _updatedAt: z.string().exactOptional(),
              _id: z.string().exactOptional(),
              success: z.boolean().exactOptional(),
            })
            .openapi({ required: [] }),
          examples: {
            'Success Example': {
              value: {
                name: 'unitxx2',
                visibility: 'public',
                type: 'u',
                numMonitors: 1,
                numDepartments: 1,
                _updatedAt: '2021-12-06T14:30:27.744Z',
                _id: 'o5zNtKy7BcTMgyXtm',
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
            .object({ success: z.boolean().exactOptional(), error: z.string().exactOptional() })
            .openapi({ required: [] }),
          examples: {
            'Example 1': {
              value: { success: false, error: 'Match error: Expected object, got undefined' },
            },
          },
        },
      },
    },
    401: AuthorizationErrorResponse,
    403: PermissionErrorResponse,
  },
})

export const getApiV1LivechatUnitsIdRoute = createRoute({
  method: 'get',
  path: '/api/v1/livechat/units/{id}',
  tags: ['Omnichannel Units'],
  summary: 'Get a Unit',
  description:
    '<div style="text-align: center; margin: 1rem 0 1rem 0;"><img src="https://raw.githubusercontent.com/RocketChat/Rocket.Chat-Open-API/main/images/Enterprise%20tag.svg" alt="Enterprise" style="display: block; margin: auto;"></div>\n\nGet details of a specific unit.\n\nPermission required: `manage-livechat-units`',
  operationId: 'get-api-v1-livechat-units-unitId',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            schema: { type: 'string' },
            name: 'id',
            in: 'path',
            required: true,
            description: 'The unit ID.',
          },
        }),
    }),
    headers: z.object({ 'X-Auth-Token': AuthTokenParamsSchema, 'X-User-Id': UserIdParamsSchema }),
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
              visibility: z.string().exactOptional(),
              type: z.string().exactOptional(),
              numMonitors: z.int().exactOptional(),
              numDepartments: z.int().exactOptional(),
              _updatedAt: z.string().exactOptional(),
              success: z.boolean().exactOptional(),
            })
            .openapi({ required: [] }),
          examples: {
            'Success Example': {
              value: {
                _id: 'LnM2rzbknjYSkkd5p',
                name: 'Sales Unit',
                visibility: 'public',
                type: 'u',
                numMonitors: 1,
                numDepartments: 2,
                _updatedAt: '2022-09-15T11:44:15.721Z',
                success: true,
              },
            },
          },
        },
      },
    },
    401: AuthorizationErrorResponse,
    403: PermissionErrorResponse,
  },
})

export const postApiV1LivechatUnitsIdRoute = createRoute({
  method: 'post',
  path: '/api/v1/livechat/units/{id}',
  tags: ['Omnichannel Units'],
  summary: 'Update Unit',
  description:
    '<div style="text-align: center; margin: 1rem 0 1rem 0;"><img src="https://raw.githubusercontent.com/RocketChat/Rocket.Chat-Open-API/main/images/Enterprise%20tag.svg" alt="Enterprise" style="display: block; margin: auto;"></div>\n\nPermission required: `manage-livechat-units`\n\n### Changelog\n| Version      | Description |\n| ------------ | ------------|\n|4.2.0         | Added       |',
  operationId: 'post-api-v1-livechat-units-id',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            schema: { type: 'string' },
            name: 'id',
            in: 'path',
            required: true,
            description: 'The unit ID.',
          },
        }),
    }),
    headers: z.object({ 'X-Auth-Token': AuthTokenParamsSchema, 'X-User-Id': UserIdParamsSchema }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              unitData: z
                .object({
                  name: z
                    .string()
                    .openapi({ description: 'The name of the unit that you are creating.' }),
                  visibility: z
                    .string()
                    .openapi({
                      description:
                        'The visibility of the unit. For example, `public` or `private`.',
                    }),
                })
                .openapi({
                  required: ['name', 'visibility'],
                  description: 'The object containing the unit data.',
                }),
              unitMonitors: z
                .array(
                  z
                    .object({
                      monitorId: z
                        .string()
                        .openapi({
                          description: 'The monitor ID that you want to add to the unit.',
                        }),
                      username: z
                        .string()
                        .openapi({ description: 'The user name of the monitor.' }),
                    })
                    .openapi({ required: ['monitorId', 'username'] }),
                )
                .openapi({ description: 'The object containing the unit monitors information.' }),
              unitDepartments: z
                .array(
                  z
                    .object({
                      departmentId: z
                        .string()
                        .openapi({
                          description: 'The department ID that you want to add to the unit.',
                        }),
                    })
                    .openapi({ required: ['departmentId'] }),
                )
                .openapi({ description: 'The object containing the department information.' }),
            })
            .openapi({ required: ['unitData', 'unitMonitors', 'unitDepartments'] }),
          examples: {
            'Example 1': {
              value: {
                unitData: { name: 'unitxx2', visibility: 'private' },
                unitMonitors: [{ monitorId: 'GT67Tv6x5p5y5xZWN', username: 'testerio' }],
                unitDepartments: [{ departmentId: 'CgM4vfNNtj8t4QEMd' }],
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
              name: z.string().exactOptional(),
              visibility: z.string().exactOptional(),
              type: z.string().exactOptional(),
              numMonitors: z.int().exactOptional(),
              numDepartments: z.int().exactOptional(),
              _updatedAt: z.string().exactOptional(),
              _id: z.string().exactOptional(),
              success: z.boolean().exactOptional(),
            })
            .openapi({ required: [] }),
          examples: {
            'Success Example': {
              value: {
                name: 'unitxx2',
                visibility: 'private',
                type: 'u',
                numMonitors: 1,
                numDepartments: 1,
                _updatedAt: '2021-12-06T14:40:59.478Z',
                _id: 'o5zNtKy7BcTMgyXtm',
                success: true,
              },
            },
          },
        },
      },
    },
    401: AuthorizationErrorResponse,
    403: PermissionErrorResponse,
  },
})

export const deleteApiV1LivechatUnitsIdRoute = createRoute({
  method: 'delete',
  path: '/api/v1/livechat/units/{id}',
  tags: ['Omnichannel Units'],
  summary: 'Delete a Unit',
  description:
    '<div style="text-align: center; margin: 1rem 0 1rem 0;"><img src="https://raw.githubusercontent.com/RocketChat/Rocket.Chat-Open-API/main/images/Enterprise%20tag.svg" alt="Enterprise" style="display: block; margin: auto;"></div>\n\nPermission required: `manage-livechat-units`\n\n### Changelog\n| Version      | Description |\n| ------------ | ------------|\n|4.2.0         | Added       |',
  operationId: 'delete-api-v1-livechat-units-id',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            schema: { type: 'string' },
            name: 'id',
            in: 'path',
            required: true,
            description: 'The unit ID.',
          },
        }),
    }),
    headers: z.object({ 'X-Auth-Token': AuthTokenParamsSchema, 'X-User-Id': UserIdParamsSchema }),
  },
  responses: {
    200: TrueSuccessResponse,
    401: AuthorizationErrorResponse,
    403: PermissionErrorResponse,
  },
})

export const getApiV1LivechatUnitsUnitIdMonitorsRoute = createRoute({
  method: 'get',
  path: '/api/v1/livechat/units/{unitId}/monitors',
  tags: ['Omnichannel Units'],
  summary: 'Get List of Unit Monitors',
  description:
    '<div style="text-align: center; margin: 1rem 0 1rem 0;"><img src="https://raw.githubusercontent.com/RocketChat/Rocket.Chat-Open-API/main/images/Enterprise%20tag.svg" alt="Enterprise" style="display: block; margin: auto;"></div>\n\nGet the list of monitors associated with a specific unit.\n\nPermission required: `manage-livechat-units`',
  operationId: 'get-api-v1-livechat-units-unitId-monitors',
  request: {
    params: z.object({
      unitId: z
        .string()
        .openapi({
          param: {
            schema: { type: 'string' },
            name: 'unitId',
            in: 'path',
            required: true,
            description: 'The unit ID.',
          },
        }),
    }),
    headers: z.object({ 'X-Auth-Token': AuthTokenParamsSchema, 'X-User-Id': UserIdParamsSchema }),
  },
  responses: {
    200: {
      description: '',
      content: {
        'application/json': {
          schema: z
            .object({
              monitors: z
                .array(
                  z
                    .object({
                      _id: z.string().exactOptional(),
                      monitorId: z.string().exactOptional(),
                      unitId: z.string().exactOptional(),
                      _updatedAt: z.string().exactOptional(),
                      username: z.string().exactOptional(),
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
                monitors: [
                  {
                    _id: 'Gv8rxcv4WTEDnnGiT',
                    monitorId: 'MJk4XK5QpsFWJzmSz',
                    unitId: 'TGjc7wN84KxQup9cF',
                    _updatedAt: '2022-11-21T11:16:01.708Z',
                    username: 'jjay',
                  },
                  {
                    _id: 'dvSh7G6WW6J5XykQw',
                    monitorId: 'GdyoCfHfd3um5N9vP',
                    unitId: 'TGjc7wN84KxQup9cF',
                    _updatedAt: '2022-11-21T11:16:01.718Z',
                    username: 'j.coel',
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
    403: PermissionErrorResponse,
  },
})

export const getApiV1LivechatUnitsUnitIdDepartmentsAvailableRoute = createRoute({
  method: 'get',
  path: '/api/v1/livechat/units/{unitId}/departments/available',
  tags: ['Omnichannel Units'],
  summary: 'Get Available Departments by Unit Id',
  description:
    '<div style="text-align: center; margin: 1rem 0 1rem 0;"><img src="https://raw.githubusercontent.com/RocketChat/Rocket.Chat-Open-API/main/images/Enterprise%20tag.svg" alt="Enterprise" style="display: block; margin: auto;"></div>\n\nPermission required: `manage-livechat-units`',
  operationId: 'get-api-v1-livechat-units-unitId-departments-available',
  request: {
    params: z.object({
      unitId: z
        .string()
        .openapi({
          param: {
            schema: { type: 'string' },
            name: 'unitId',
            in: 'path',
            required: true,
            description: 'The unit ID.',
          },
        }),
    }),
    headers: z.object({ 'X-Auth-Token': AuthTokenParamsSchema, 'X-User-Id': UserIdParamsSchema }),
    query: z.object({
      offset: OffsetParamsSchema,
      count: CountParamsSchema,
      text: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            schema: { type: 'string' },
            in: 'query',
            name: 'text',
            description: 'Filter the result with the text.',
            required: false,
          },
        }),
      onlyMyDepartments: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            schema: { type: 'boolean' },
            in: 'query',
            name: 'onlyMyDepartments',
            description: 'Whether you want the result for the departments that you are part of.',
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
              departments: z
                .array(
                  z
                    .object({
                      _id: z.string().exactOptional(),
                      enabled: z.boolean().exactOptional(),
                      name: z.string().exactOptional(),
                      description: z.string().exactOptional(),
                      showOnRegistration: z.boolean().exactOptional(),
                      showOnOfflineForm: z.boolean().exactOptional(),
                      requestTagBeforeClosingChat: z.boolean().exactOptional(),
                      email: z.string().exactOptional(),
                      chatClosingTags: z.array(z.looseObject({})).exactOptional(),
                      offlineMessageChannelName: z.string().exactOptional(),
                      abandonedRoomsCloseCustomMessage: z.string().exactOptional(),
                      waitingQueueMessage: z.string().exactOptional(),
                      departmentsAllowedToForward: z.array(z.looseObject({})).exactOptional(),
                      fallbackForwardDepartment: z.string().exactOptional(),
                      _updatedAt: z.string().exactOptional(),
                      numAgents: z.int().exactOptional(),
                      type: z.string().exactOptional(),
                      ancestors: z.array(z.string()).exactOptional(),
                      parentId: z.string().exactOptional(),
                    })
                    .openapi({ required: [] }),
                )
                .exactOptional(),
              count: z.int().exactOptional(),
              offset: z.int().exactOptional(),
              total: z.int().exactOptional(),
              success: z.boolean().exactOptional(),
            })
            .openapi({ required: [] }),
          examples: {
            'Success Example': {
              value: {
                departments: [
                  {
                    _id: '64181a0728384134ed600dcc',
                    enabled: false,
                    name: 'Missing Money',
                    description: '',
                    showOnRegistration: false,
                    showOnOfflineForm: false,
                    requestTagBeforeClosingChat: false,
                    email: 'test@test.com',
                    chatClosingTags: [],
                    offlineMessageChannelName: 'Livestream',
                    abandonedRoomsCloseCustomMessage: '',
                    waitingQueueMessage: '',
                    departmentsAllowedToForward: [],
                    fallbackForwardDepartment: '',
                    _updatedAt: '2023-11-29T12:48:03.843Z',
                    numAgents: 3,
                    type: 'd',
                    ancestors: ['6567236571f856761e61c9a2'],
                    parentId: '6567236571f856761e61c9a2',
                  },
                ],
                count: 1,
                offset: 0,
                total: 1,
                success: true,
              },
            },
          },
        },
      },
    },
    401: AuthorizationErrorResponse,
    403: PermissionErrorResponse,
  },
})

export const getApiV1LivechatUnitsUnitIdDepartmentsRoute = createRoute({
  method: 'get',
  path: '/api/v1/livechat/units/{unitId}/departments',
  tags: ['Omnichannel Units'],
  summary: 'Get Departments by Unit ID',
  description:
    '<div style="text-align: center; margin: 1rem 0 1rem 0;"><img src="https://raw.githubusercontent.com/RocketChat/Rocket.Chat-Open-API/main/images/Enterprise%20tag.svg" alt="Enterprise" style="display: block; margin: auto;"></div>\n\nPermission required: `manage-livechat-units`',
  operationId: 'get-api-v1-livechat-units-unitId-departments',
  request: {
    params: z.object({
      unitId: z
        .string()
        .openapi({
          param: {
            schema: { type: 'string' },
            name: 'unitId',
            in: 'path',
            required: true,
            description: 'The unit ID.',
          },
        }),
    }),
    headers: z.object({ 'X-Auth-Token': AuthTokenParamsSchema, 'X-User-Id': UserIdParamsSchema }),
    query: z.object({ offset: OffsetParamsSchema, count: CountParamsSchema }),
  },
  responses: {
    200: {
      description: '',
      content: {
        'application/json': {
          schema: z
            .object({
              departments: z
                .array(
                  z
                    .object({
                      _id: z.string().exactOptional(),
                      enabled: z.boolean().exactOptional(),
                      name: z.string().exactOptional(),
                      description: z.string().exactOptional(),
                      showOnRegistration: z.boolean().exactOptional(),
                      showOnOfflineForm: z.boolean().exactOptional(),
                      requestTagBeforeClosingChat: z.boolean().exactOptional(),
                      email: z.string().exactOptional(),
                      chatClosingTags: z.array(z.string()).exactOptional(),
                      offlineMessageChannelName: z.string().exactOptional(),
                      maxNumberSimultaneousChat: z.string().exactOptional(),
                      visitorInactivityTimeoutInSeconds: z.string().exactOptional(),
                      abandonedRoomsCloseCustomMessage: z.string().exactOptional(),
                      waitingQueueMessage: z.string().exactOptional(),
                      departmentsAllowedToForward: z.string().exactOptional(),
                      _updatedAt: z.string().exactOptional(),
                      numAgents: z.int().exactOptional(),
                      ancestors: z.array(z.string()).exactOptional(),
                      parentId: z.string().exactOptional(),
                      fallbackForwardDepartment: z.string().exactOptional(),
                    })
                    .openapi({ required: [] }),
                )
                .exactOptional(),
              count: z.int().exactOptional(),
              offset: z.int().exactOptional(),
              total: z.int().exactOptional(),
              success: z.boolean().exactOptional(),
            })
            .openapi({ required: [] }),
          examples: {
            'Success Example': {
              value: {
                departments: [
                  {
                    _id: 'MfvRXBwEWY6tTwqFh',
                    enabled: true,
                    name: 'C',
                    description: 'test dept',
                    showOnRegistration: true,
                    showOnOfflineForm: true,
                    requestTagBeforeClosingChat: true,
                    email: 'C@test.com',
                    chatClosingTags: ['please add a tag'],
                    offlineMessageChannelName: '',
                    maxNumberSimultaneousChat: '2',
                    visitorInactivityTimeoutInSeconds: '0',
                    abandonedRoomsCloseCustomMessage: 'closed',
                    waitingQueueMessage: 'please wait!',
                    departmentsAllowedToForward: '',
                    _updatedAt: '2022-12-14T14:44:51.923Z',
                    numAgents: 5,
                    ancestors: ['TGjc7wN84KxQup9cF'],
                    parentId: 'TGjc7wN84KxQup9cF',
                    fallbackForwardDepartment: 'KgCzEB2gWngKp9JF3',
                  },
                ],
                count: 1,
                offset: 0,
                total: 1,
                success: true,
              },
            },
          },
        },
      },
    },
    401: AuthorizationErrorResponse,
    403: PermissionErrorResponse,
  },
})

export const getApiV1LivechatAnalyticsDashboardsConversationsByStatusRoute = createRoute({
  method: 'get',
  path: '/api/v1/livechat/analytics/dashboards/conversations-by-status',
  tags: ['Reports'],
  summary: 'Get Conversations by Status',
  description:
    '<div style="text-align: center; margin: 1rem 0 1rem 0;"><img src="https://raw.githubusercontent.com/RocketChat/Rocket.Chat-Open-API/main/images/Enterprise%20tag.svg" alt="Enterprise" style="display: block; margin: auto;"></div>\n\nView the metrics of omnichannel conversations in your workspace during a selected time range based on their status: **Open**, **Queued**, **On Hold**, or **Closed**.\n\nPermission required: `view-livechat-reports`\n\n### Changelog\n| Version      | Description |\n| -----------  | ------------|\n|6.4.0         | Added       |',
  operationId: 'get-api-v1-livechat-analytics-dashboards-conversations-by-status',
  request: {
    headers: z.object({ 'X-Auth-Token': AuthTokenParamsSchema, 'X-User-Id': UserIdParamsSchema }),
    query: z.object({ start: StartParamsSchema, end: EndParamsSchema }),
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': {
          schema: z
            .object({
              total: z.int().exactOptional(),
              data: z
                .array(
                  z
                    .object({ label: z.string().exactOptional(), value: z.int().exactOptional() })
                    .openapi({ required: [] }),
                )
                .exactOptional(),
              success: z.boolean().exactOptional(),
            })
            .openapi({ required: [] }),
          examples: {
            'Success Example': {
              value: {
                total: 25,
                data: [
                  { label: 'Closed', value: 24 },
                  { label: 'Open', value: 1 },
                  { label: 'Queued', value: 0 },
                  { label: 'On_Hold', value: 0 },
                ],
                success: true,
              },
            },
          },
        },
      },
    },
    400: StartendErrorResponse,
    401: AuthorizationErrorResponse,
    403: PermissionErrorResponse,
  },
})

export const getApiV1LivechatAnalyticsDashboardsConversationsByDepartmentRoute = createRoute({
  method: 'get',
  path: '/api/v1/livechat/analytics/dashboards/conversations-by-department',
  tags: ['Reports'],
  summary: 'Get Conversations by Departments',
  description:
    '<div style="text-align: center; margin: 1rem 0 1rem 0;"><img src="https://raw.githubusercontent.com/RocketChat/Rocket.Chat-Open-API/main/images/Enterprise%20tag.svg" alt="Enterprise" style="display: block; margin: auto;"></div>\n\n\nView the metrics of omnichannel conversations in your workspace during a selected time range based on their departments.\n\nPermission required: `view-livechat-reports`\n\n### Changelog\n| Version      | Description |\n| -----------  | ------------|\n|6.4.0         | Added       |',
  operationId: 'get-api-v1-livechat-analytics-dashboards-conversations-by-department',
  request: {
    headers: z.object({ 'X-Auth-Token': AuthTokenParamsSchema, 'X-User-Id': UserIdParamsSchema }),
    query: z.object({ start: StartParamsSchema, end: EndParamsSchema, sort: SortParamsSchema }),
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': {
          schema: z
            .object({
              total: z.int().exactOptional(),
              data: z
                .array(
                  z
                    .object({ label: z.string().exactOptional(), value: z.int().exactOptional() })
                    .openapi({ required: [] }),
                )
                .exactOptional(),
              unspecified: z.int().exactOptional(),
              success: z.boolean().exactOptional(),
            })
            .openapi({ required: [] }),
          examples: {
            'Success Example': {
              value: {
                total: 18,
                data: [
                  { label: 'TestQueue', value: 1 },
                  { label: 'TestBH', value: 1 },
                  { label: 'Missing', value: 16 },
                ],
                unspecified: 43,
                success: true,
              },
            },
          },
        },
      },
    },
    400: StartendErrorResponse,
    401: AuthorizationErrorResponse,
    403: PermissionErrorResponse,
  },
})

export const getApiV1LivechatAnalyticsDashboardsConversationsByTagsRoute = createRoute({
  method: 'get',
  path: '/api/v1/livechat/analytics/dashboards/conversations-by-tags',
  tags: ['Reports'],
  summary: 'Get Conversations by Tags',
  description:
    '<div style="text-align: center; margin: 1rem 0 1rem 0;"><img src="https://raw.githubusercontent.com/RocketChat/Rocket.Chat-Open-API/main/images/Enterprise%20tag.svg" alt="Enterprise" style="display: block; margin: auto;"></div>\n\nView the metrics of omnichannel conversations in your workspace during a selected time range based on their tags.\n\nPermission required: `view-livechat-reports`\n\n### Changelog\n| Version      | Description |\n| ------------ | ------------|\n|6.4.0         | Added       |',
  operationId: 'get-api-v1-livechat-analytics-dashboards-conversations-by-tags',
  request: {
    headers: z.object({ 'X-Auth-Token': AuthTokenParamsSchema, 'X-User-Id': UserIdParamsSchema }),
    query: z.object({ start: StartParamsSchema, end: EndParamsSchema }),
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': {
          schema: z
            .object({
              total: z.int().exactOptional(),
              data: z
                .array(
                  z
                    .object({ label: z.string().exactOptional(), value: z.int().exactOptional() })
                    .openapi({ required: [] }),
                )
                .exactOptional(),
              unspecified: z.int().exactOptional(),
              success: z.boolean().exactOptional(),
            })
            .openapi({ required: [] }),
          examples: {
            'Success Example': {
              value: {
                total: 5,
                data: [
                  { label: 'tech', value: 1 },
                  { label: 'solved', value: 1 },
                  { label: 'self', value: 1 },
                  { label: 'testtags', value: 2 },
                ],
                unspecified: 55,
                success: true,
              },
            },
          },
        },
      },
    },
    400: StartendErrorResponse,
    401: AuthorizationErrorResponse,
    403: PermissionErrorResponse,
  },
})

export const getApiV1LivechatAnalyticsDashboardsConversationsByAgentRoute = createRoute({
  method: 'get',
  path: '/api/v1/livechat/analytics/dashboards/conversations-by-agent',
  tags: ['Reports'],
  summary: 'Get Conversation by Agents',
  description:
    '\n<div style="text-align: center; margin: 1rem 0 1rem 0;"><img src="https://raw.githubusercontent.com/RocketChat/Rocket.Chat-Open-API/main/images/Enterprise%20tag.svg" alt="Enterprise" style="display: block; margin: auto;"></div>\n\nView the metrics of omnichannel conversations in your workspace during a selected time range based on the agents in your workspace.\n\nPermission required: `view-livechat-reports`\n\n### Changelog\n| Version      | Description |\n| ------------ | ------------|\n|6.4.0         | Added       |',
  operationId: 'get-api-v1-livechat-analytics-dashboards-conversations-by-agent',
  request: {
    headers: z.object({ 'X-User-Id': UserIdParamsSchema, 'X-Auth-Token': AuthTokenParamsSchema }),
    query: z.object({ start: StartParamsSchema, end: EndParamsSchema }),
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': {
          schema: z
            .object({
              total: z.int().exactOptional(),
              data: z
                .array(
                  z
                    .object({ label: z.string().exactOptional(), value: z.int().exactOptional() })
                    .openapi({ required: [] }),
                )
                .exactOptional(),
              unspecified: z.int().exactOptional(),
              success: z.boolean().exactOptional(),
            })
            .openapi({ required: [] }),
          examples: {
            'Success Example': {
              value: {
                total: 51,
                data: [
                  { label: '9iN96PXnDK7XAYESA', value: 4 },
                  { label: 'Dialog Bot', value: 1 },
                  { label: 'Jane Kim', value: 15 },
                  { label: 'Baek Kim', value: 1 },
                  { label: 'agent5', value: 5 },
                  { label: 'Rod', value: 5 },
                  { label: 'User One', value: 6 },
                  { label: 'oDCQTTquRFJWZtFxY', value: 1 },
                  { label: 'sDNa65jXv4JaiGKQP', value: 1 },
                  { label: 'testC', value: 12 },
                ],
                unspecified: 9,
                success: true,
              },
            },
          },
        },
      },
    },
    400: StartendErrorResponse,
    401: AuthorizationErrorResponse,
    403: PermissionErrorResponse,
  },
})

export const getApiV1LivechatAnalyticsDashboardsConversationsBySourceRoute = createRoute({
  method: 'get',
  path: '/api/v1/livechat/analytics/dashboards/conversations-by-source',
  tags: ['Reports'],
  summary: 'Get Conversations By Source',
  description:
    '\n<div style="text-align: center; margin: 1rem 0 1rem 0;"><img src="https://raw.githubusercontent.com/RocketChat/Rocket.Chat-Open-API/main/images/Enterprise%20tag.svg" alt="Enterprise" style="display: block; margin: auto;"></div>\n\nUse this endpoint to view the list of sources of Omnichannel conversation during the specified time range. Permission required: `view-livechat-reports`\'',
  operationId: 'get-api-v1-livechat-analytics-dashboards-conversations-by-source',
  request: {
    headers: z.object({ 'X-Auth-Token': AuthTokenParamsSchema, 'X-User-Id': UserIdParamsSchema }),
    query: z.object({
      start: z
        .string()
        .openapi({
          param: {
            schema: { type: 'string', example: '2025-06-01' },
            in: 'query',
            name: 'start',
            description: 'Enter the start date. Format: YYYY-MM-DD',
            required: true,
          },
          example: '2025-06-01',
        }),
      end: z
        .string()
        .openapi({
          param: {
            schema: { type: 'string', example: '2025-12-01' },
            in: 'query',
            name: 'end',
            description: 'Enter the end date. Format: YYYY-MM-DD',
            required: true,
          },
          example: '2025-12-01',
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
              total: z.int().exactOptional(),
              data: z
                .array(
                  z
                    .object({ label: z.string().exactOptional(), value: z.int().exactOptional() })
                    .openapi({ required: [] }),
                )
                .exactOptional(),
              success: z.boolean().exactOptional(),
            })
            .openapi({ required: [] }),
          examples: {
            'Example 1': {
              value: {
                total: 19,
                data: [
                  { label: 'widget', value: 18 },
                  { label: 'twilio', value: 1 },
                ],
                success: true,
              },
            },
          },
        },
      },
    },
    400: StartendErrorResponse,
    401: AuthorizationErrorResponse,
  },
})

export const getApiV1LivechatSlaRoute = createRoute({
  method: 'get',
  path: '/api/v1/livechat/sla',
  tags: ['SLA Policies'],
  summary: 'Get List of SLA Policies',
  description:
    '<div style="text-align: center; margin: 1rem 0 1rem 0;"><img src="https://raw.githubusercontent.com/RocketChat/Rocket.Chat-Open-API/main/images/Enterprise%20tag.svg" alt="Enterprise" style="display: block; margin: auto;"></div>\n\n### Changelog\n| Version      | Description |\n| ------------ | ------------|\n|6.0.0         | Added       |',
  operationId: 'get-api-v1-livechat-sla',
  request: {
    headers: z.object({ 'X-Auth-Token': AuthTokenParamsSchema, 'X-User-Id': UserIdParamsSchema }),
    query: z.object({
      text: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'text',
            in: 'query',
            description: 'The text with which you want to filter the result.',
            schema: { type: 'string' },
            required: false,
          },
        }),
      count: CountParamsSchema,
      sort: SortParamsSchema,
      offset: OffsetParamsSchema,
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': {
          schema: z
            .object({
              sla: z
                .array(
                  z
                    .object({
                      _id: z.string().exactOptional(),
                      name: z.string().exactOptional(),
                      description: z.string().exactOptional(),
                      dueTimeInMinutes: z.int().exactOptional(),
                      _updatedAt: z.string().exactOptional(),
                    })
                    .openapi({ required: [] }),
                )
                .exactOptional(),
              count: z.int().exactOptional(),
              offset: z.int().exactOptional(),
              total: z.int().exactOptional(),
              success: z.boolean().exactOptional(),
            })
            .openapi({ required: [] }),
          examples: {
            'Success Example': {
              value: {
                sla: [
                  {
                    _id: '641daf3d7718f90c810429c8',
                    name: 'Minimal',
                    description: '2m UI creat',
                    dueTimeInMinutes: 2,
                    _updatedAt: '2023-03-24T14:10:05.063Z',
                  },
                  {
                    _id: '6417f67528384134ed600dc6',
                    name: 'Try',
                    description: 'Based on 1 min',
                    dueTimeInMinutes: 1,
                    _updatedAt: '2023-03-20T06:00:21.736Z',
                  },
                ],
                count: 2,
                offset: 0,
                total: 2,
                success: true,
              },
            },
          },
        },
      },
    },
    401: AuthorizationErrorResponse,
    403: PermissionErrorResponse,
  },
})

export const postApiV1LivechatSlaRoute = createRoute({
  method: 'post',
  path: '/api/v1/livechat/sla',
  tags: ['SLA Policies'],
  summary: 'Create SLA Policy',
  description:
    '<div style="text-align: center; margin: 1rem 0 1rem 0;"><img src="https://raw.githubusercontent.com/RocketChat/Rocket.Chat-Open-API/main/images/Enterprise%20tag.svg" alt="Enterprise" style="display: block; margin: auto;"></div>\n\nPermission required: `manage-livechat-sla`\n\n### Changelog\n| Version      | Description |\n| ------------ | ------------|\n|6.0.0         | Added       |',
  operationId: 'post-api-v1-livechat-sla',
  request: {
    headers: z.object({ 'X-Auth-Token': AuthTokenParamsSchema, 'X-User-Id': UserIdParamsSchema }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              name: z.string().openapi({ description: 'The name of the SLA policy.' }),
              description: z.string().openapi({ description: 'The SLA description.' }),
              dueTimeInMinutes: z.int().openapi({ description: 'The SLA due time.' }),
            })
            .openapi({ required: ['name', 'description', 'dueTimeInMinutes'] }),
          examples: {
            'Example 1': {
              value: { name: 'Optimum', description: 'OPtimum SLA', dueTimeInMinutes: 4 },
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
          schema: z
            .object({
              sla: z
                .object({
                  name: z.string().exactOptional(),
                  description: z.string().exactOptional(),
                  dueTimeInMinutes: z.int().exactOptional(),
                  _id: z.string().exactOptional(),
                })
                .exactOptional()
                .openapi({ required: [] }),
              success: z.boolean().exactOptional(),
            })
            .openapi({ required: [] }),
          examples: {
            'Success Example': {
              value: {
                sla: {
                  name: 'Optimum',
                  description: 'Optimum SLA',
                  dueTimeInMinutes: 4,
                  _id: '641db89a7718f90c810429cc',
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
                error: "must have required property 'dueTimeInMinutes' [error-invalid-params]",
                errorType: 'error-invalid-params',
              },
            },
          },
        },
      },
    },
    401: AuthorizationErrorResponse,
    403: PermissionErrorResponse,
  },
})

export const getApiV1LivechatSlaSlaIdRoute = createRoute({
  method: 'get',
  path: '/api/v1/livechat/sla/{slaId}',
  tags: ['SLA Policies'],
  summary: 'Get an SLA',
  description:
    '<div style="text-align: center; margin: 1rem 0 1rem 0;"><img src="https://raw.githubusercontent.com/RocketChat/Rocket.Chat-Open-API/main/images/Enterprise%20tag.svg" alt="Enterprise" style="display: block; margin: auto;"></div>\n\nGet details of a specific SLA policy.\n\nAt least one of the following permissions is required:\n  * `manage-livechat-sla`\n  * `view-l-room`\n\n### Changelog\n| Version      | Description |\n| ------------ | ------------|\n|6.0.0         | Added       |',
  operationId: 'get-api-v1-livechat-sla-slaId',
  request: {
    headers: z.object({ 'X-Auth-Token': AuthTokenParamsSchema, 'X-User-Id': UserIdParamsSchema }),
    params: z.object({
      slaId: z
        .string()
        .openapi({
          param: {
            name: 'slaId',
            in: 'path',
            description: 'The ID of the SLA.',
            required: true,
            schema: { type: 'string' },
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
              _id: z.string().exactOptional(),
              name: z.string().exactOptional(),
              description: z.string().exactOptional(),
              dueTimeInMinutes: z.int().exactOptional(),
              _updatedAt: z.string().exactOptional(),
              success: z.boolean().exactOptional(),
            })
            .openapi({ required: [] }),
          examples: {
            'Success Example': {
              value: {
                _id: '641daf3d7718f90c810429c8',
                name: 'Minimal',
                description: '2m UI creat',
                dueTimeInMinutes: 2,
                _updatedAt: '2023-03-24T14:10:05.063Z',
                success: true,
              },
            },
          },
        },
      },
    },
    401: AuthorizationErrorResponse,
    403: PermissionErrorResponse,
  },
})

export const putApiV1LivechatSlaSlaIdRoute = createRoute({
  method: 'put',
  path: '/api/v1/livechat/sla/{slaId}',
  tags: ['SLA Policies'],
  summary: 'Update an SLA',
  description:
    '<div style="text-align: center; margin: 1rem 0 1rem 0;"><img src="https://raw.githubusercontent.com/RocketChat/Rocket.Chat-Open-API/main/images/Enterprise%20tag.svg" alt="Enterprise" style="display: block; margin: auto;"></div>\n\n\nUpdate an existing SLA policy.\n\nPermission required: `manage-livechat-sla`\n\n### Changelog\n| Version      | Description |\n| ------------ | ------------|\n|6.0.0         | Added       |',
  operationId: 'put-api-v1-livechat-sla-slaId',
  request: {
    headers: z.object({ 'X-Auth-Token': AuthTokenParamsSchema, 'X-User-Id': UserIdParamsSchema }),
    params: z.object({
      slaId: z
        .string()
        .openapi({
          param: {
            name: 'slaId',
            in: 'path',
            description: 'The ID of the SLA.',
            required: true,
            schema: { type: 'string' },
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
              sla: z
                .object({
                  name: z.string().exactOptional(),
                  description: z.string().exactOptional(),
                  dueTimeInMinutes: z.int().exactOptional(),
                  _updatedAt: z.string().exactOptional(),
                  _id: z.string().exactOptional(),
                })
                .exactOptional()
                .openapi({ required: [] }),
              success: z.boolean().exactOptional(),
            })
            .openapi({ required: [] }),
          examples: {
            'Success Example': {
              value: {
                sla: {
                  name: 'Minimal updated',
                  description: 'Minimal SLA updated',
                  dueTimeInMinutes: 7,
                  _updatedAt: '2023-03-24T16:31:34.712Z',
                  _id: '641daf3d7718f90c810429c8',
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
                error: "must have required property 'dueTimeInMinutes' [error-invalid-params]",
                errorType: 'error-invalid-params',
              },
            },
          },
        },
      },
    },
    401: AuthorizationErrorResponse,
    403: PermissionErrorResponse,
  },
})

export const deleteApiV1LivechatSlaSlaIdRoute = createRoute({
  method: 'delete',
  path: '/api/v1/livechat/sla/{slaId}',
  tags: ['SLA Policies'],
  summary: 'Delete an SLA',
  description:
    '<div style="text-align: center; margin: 1rem 0 1rem 0;"><img src="https://raw.githubusercontent.com/RocketChat/Rocket.Chat-Open-API/main/images/Enterprise%20tag.svg" alt="Enterprise" style="display: block; margin: auto;"></div>\n\nPermission required: `manage-livechat-sla`\n\n### Changelog\n| Version      | Description |\n| ------------ | ------------|\n|6.0.0         | Added       |',
  operationId: 'delete-api-v1-livechat-sla-slaId',
  request: {
    headers: z.object({ 'X-Auth-Token': AuthTokenParamsSchema, 'X-User-Id': UserIdParamsSchema }),
    params: z.object({
      slaId: z
        .string()
        .openapi({
          param: {
            name: 'slaId',
            in: 'path',
            description: 'The ID of the SLA.',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: TrueSuccessResponse,
    401: AuthorizationErrorResponse,
    403: PermissionErrorResponse,
  },
})

export const postApiV1LivechatVisitorRoute = createRoute({
  method: 'post',
  path: '/api/v1/livechat/visitor',
  tags: ['Omnichannel Visitors'],
  summary: 'Register Livechat Visitor',
  description:
    "Register a visitor's information before creating a new Omnichannel room. You can set basic information such as name, phone, custom fields, and the initial department.\n\nThe response may include `externalIds` when the visitor has been linked to an external system by an omnichannel app. This field cannot be set through this endpoint's request body.\n\n### Changelog\n| Version | Description |\n| ------- | ----------- |\n| 8.4.0   | Added `externalIds` field to the visitor response. |",
  operationId: 'post-api-v1-livechat-visitor',
  request: {
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              visitor: z
                .object({
                  name: z.string().exactOptional().openapi({ description: "The visitor's name." }),
                  email: z
                    .string()
                    .exactOptional()
                    .openapi({ description: "The visitor's email." }),
                  department: z
                    .string()
                    .exactOptional()
                    .openapi({
                      description: 'The department that the visitor wants to register to.',
                    }),
                  token: z
                    .string()
                    .openapi({ description: 'Enter a random unique string as the visitor token.' }),
                  phone: z
                    .string()
                    .exactOptional()
                    .openapi({ description: "The visitor's phone number." }),
                  username: z
                    .string()
                    .exactOptional()
                    .openapi({ description: "The agent's username." }),
                  customFields: z
                    .array(
                      z
                        .object({
                          key: z.string().exactOptional().openapi({ example: 'address' }),
                          value: z
                            .string()
                            .exactOptional()
                            .openapi({ example: 'Rocket.Chat street' }),
                          overwrite: z.boolean().exactOptional(),
                        })
                        .openapi({ required: [] }),
                    )
                    .exactOptional()
                    .openapi({
                      description:
                        'Enter the custom field key, value, and whether you want to overwrite this information.',
                    }),
                })
                .openapi({
                  description: 'Enter the body parameters in the `visitor` object.',
                  required: ['token'],
                }),
            })
            .openapi({ required: ['visitor'] }),
          examples: {
            'Example 1': {
              value: {
                visitor: {
                  name: 'Livechat Visitor',
                  email: 'visitor@rocket.chat',
                  department: 'Support',
                  token: 'iNKE8a6k6cjbqWhWd',
                  phone: '55 51 5555-5555',
                  customFields: [{ key: 'address', value: 'Rocket.Chat street', overwrite: true }],
                },
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
              visitor: z
                .object({
                  _id: z.string().exactOptional(),
                  username: z.string().exactOptional(),
                  status: z.string().exactOptional(),
                  ts: z.string().exactOptional(),
                  _updatedAt: z.string().exactOptional(),
                  name: z.string().exactOptional(),
                  phone: z
                    .array(
                      z
                        .object({ phoneNumber: z.string().exactOptional() })
                        .openapi({ required: [] }),
                    )
                    .exactOptional(),
                  token: z.string().exactOptional(),
                  visitorEmails: z
                    .array(
                      z.object({ address: z.string().exactOptional() }).openapi({ required: [] }),
                    )
                    .exactOptional(),
                  department: z.string().exactOptional(),
                  externalIds: z
                    .array(
                      z
                        .object({
                          appId: z
                            .string()
                            .exactOptional()
                            .openapi({
                              description:
                                'ID of the omnichannel app that registered this identifier.',
                            }),
                          entityId: z
                            .string()
                            .exactOptional()
                            .openapi({
                              description: 'External identifier value (e.g. Meta BSUID).',
                            }),
                          metadata: z
                            .looseObject({})
                            .exactOptional()
                            .openapi({
                              description:
                                'Optional app-specific metadata (e.g. WhatsApp username).',
                            }),
                        })
                        .openapi({ required: [] }),
                    )
                    .exactOptional()
                    .openapi({
                      description:
                        "Channel-specific external identifiers (e.g. WhatsApp BSUID). Set by omnichannel apps via apps-engine, not through this REST endpoint's request body.",
                    }),
                })
                .exactOptional()
                .openapi({ required: [] }),
              success: z.boolean().exactOptional(),
            })
            .openapi({ required: [] }),
          examples: {
            'Success Example': {
              value: {
                visitor: {
                  _id: '6a22b1765528fa64dd29de70',
                  username: 'guest-10',
                  status: 'online',
                  ts: '2026-06-05T11:22:30.664Z',
                  _updatedAt: '2026-06-05T11:22:30.665Z',
                  name: 'Postman Test Visitor',
                  phone: [{ phoneNumber: '+15551234567' }],
                  token: 'test-token-12345',
                  visitorEmails: [{ address: 'postman-test@example.com' }],
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
            .object({ success: z.boolean().exactOptional(), error: z.string().exactOptional() })
            .openapi({ required: [] }),
          examples: {
            'Example 1': { value: { success: false, error: "Match error: Missing key 'visitor'" } },
            'Example 2': {
              value: { success: false, error: "Match error: Missing key 'token' in field visitor" },
            },
          },
        },
      },
    },
  },
})

export const getApiV1LivechatVisitorTokenRoute = createRoute({
  method: 'get',
  path: '/api/v1/livechat/visitor/{token}',
  tags: ['Omnichannel Visitors'],
  summary: 'Get Visitor Information',
  description:
    'Get the details of a specific visitor.\n\nThe response may include `externalIds` when the visitor has been linked to an external system by an omnichannel app.\n\n### Changelog\n| Version | Description |\n| ------- | ----------- |\n| 8.4.0   | Added `externalIds` field to the visitor response. |',
  operationId: 'get-api-v1-livechat-visitor-token',
  request: {
    params: z.object({
      token: z
        .string()
        .openapi({
          param: {
            schema: { type: 'string' },
            name: 'token',
            in: 'path',
            required: true,
            description: 'The visitor token.',
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
              visitor: z
                .object({
                  _id: z.string().exactOptional(),
                  username: z.string().exactOptional(),
                  _updatedAt: z.string().exactOptional(),
                  token: z.string().exactOptional(),
                  phone: z
                    .array(
                      z
                        .object({ phoneNumber: z.string().exactOptional() })
                        .openapi({ required: [] }),
                    )
                    .exactOptional(),
                  visitorEmails: z
                    .array(
                      z.object({ address: z.string().exactOptional() }).openapi({ required: [] }),
                    )
                    .exactOptional(),
                  name: z.string().exactOptional(),
                  livechatData: z
                    .object({ address: z.string().exactOptional() })
                    .exactOptional()
                    .openapi({ required: [] }),
                  externalIds: z
                    .array(
                      z
                        .object({
                          appId: z
                            .string()
                            .exactOptional()
                            .openapi({
                              description:
                                'ID of the omnichannel app that registered this identifier.',
                            }),
                          entityId: z
                            .string()
                            .exactOptional()
                            .openapi({
                              description: 'External identifier value (e.g. Meta BSUID).',
                            }),
                          metadata: z
                            .looseObject({})
                            .exactOptional()
                            .openapi({
                              description:
                                'Optional app-specific metadata (e.g. WhatsApp username).',
                            }),
                        })
                        .openapi({ required: [] }),
                    )
                    .exactOptional()
                    .openapi({
                      description:
                        "Channel-specific external identifiers (e.g. WhatsApp BSUID). Set by omnichannel apps via apps-engine, not through this REST endpoint's request body.",
                    }),
                })
                .exactOptional()
                .openapi({ required: [] }),
              success: z.boolean().exactOptional(),
            })
            .openapi({ required: [] }),
          examples: {
            'Success Example': {
              value: {
                visitor: {
                  _id: '6a22b1765528fa64dd29de70',
                  username: 'guest-10',
                  _updatedAt: '2026-06-05T11:22:30.665Z',
                  token: 'test-token-12345',
                  phone: [{ phoneNumber: '+15551234567' }],
                  visitorEmails: [{ address: 'postman-test@example.com' }],
                  name: 'Postman Test Visitor',
                },
                success: true,
              },
            },
          },
        },
      },
    },
  },
})

export const deleteApiV1LivechatVisitorTokenRoute = createRoute({
  method: 'delete',
  path: '/api/v1/livechat/visitor/{token}',
  tags: ['Omnichannel Visitors'],
  summary: 'Delete Visitor',
  operationId: 'delete-api-v1-livechat-visitor-token',
  request: {
    params: z.object({
      token: z
        .string()
        .openapi({
          param: {
            schema: { type: 'string' },
            name: 'token',
            in: 'path',
            required: true,
            description: 'The visitor token.',
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
              visitor: z
                .object({ _id: z.string().exactOptional(), ts: z.string().exactOptional() })
                .exactOptional()
                .openapi({ required: [] }),
              success: z.boolean().exactOptional(),
            })
            .openapi({ required: [] }),
          examples: {
            'Success Example': {
              value: {
                visitor: { _id: '47Dajwh9DjpnTAugW', ts: '2021-07-18T13:28:38.962Z' },
                success: true,
              },
            },
          },
        },
      },
    },
  },
})

export const getApiV1LivechatVisitorsInfoRoute = createRoute({
  method: 'get',
  path: '/api/v1/livechat/visitors.info',
  tags: ['Omnichannel Visitors'],
  summary: 'Get Visitor Information by ID',
  description:
    "Retrieve information for a Livechat visitor by ID.\n\nPermission required: `view-l-room`\n\nThe response does not include the visitor `token`. To obtain a token, register or update the visitor using <a href='https://developer.rocket.chat/apidocs/register-a-new-livechat-visitor' target='_blank'>Register a New Livechat Visitor</a>, which returns the token in the response.\n\nThe response may include `externalIds` when the visitor has been linked to an external system by an omnichannel app (e.g. WhatsApp BSUID). This field cannot be set through REST registration endpoints.\n\n### Changelog\n| Version | Description |\n| ------- | ----------- |\n| 8.5.0   | The `token` field is no longer returned in the response. Retrieve the token from the visitor registration endpoint instead. |\n| 8.4.0   | Added `externalIds` field to the visitor response. |",
  operationId: 'get-api-v1-livechat-visitor.info',
  request: {
    query: z.object({
      visitorId: z
        .string()
        .openapi({
          param: {
            schema: { type: 'string' },
            in: 'query',
            name: 'visitorId',
            description: 'The visitor ID.',
            required: true,
          },
        }),
    }),
    headers: z.object({ 'X-Auth-Token': AuthTokenParamsSchema, 'X-User-Id': UserIdParamsSchema }),
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': {
          schema: z
            .object({
              visitor: z
                .object({
                  _id: z.string().exactOptional(),
                  username: z.string().exactOptional(),
                  status: z.string().exactOptional(),
                  ts: z.string().exactOptional(),
                  _updatedAt: z.string().exactOptional(),
                  name: z.string().exactOptional(),
                  phone: z
                    .array(
                      z
                        .object({ phoneNumber: z.string().exactOptional() })
                        .openapi({ required: [] }),
                    )
                    .exactOptional(),
                  visitorEmails: z
                    .array(
                      z.object({ address: z.string().exactOptional() }).openapi({ required: [] }),
                    )
                    .exactOptional(),
                  department: z.string().exactOptional(),
                  externalIds: z
                    .array(
                      z
                        .object({
                          appId: z
                            .string()
                            .exactOptional()
                            .openapi({
                              description:
                                'ID of the omnichannel app that registered this identifier.',
                            }),
                          entityId: z
                            .string()
                            .exactOptional()
                            .openapi({
                              description: 'External identifier value (e.g. Meta BSUID).',
                            }),
                          metadata: z
                            .looseObject({})
                            .exactOptional()
                            .openapi({
                              description:
                                'Optional app-specific metadata (e.g. WhatsApp username).',
                            }),
                        })
                        .openapi({ required: [] }),
                    )
                    .exactOptional()
                    .openapi({
                      description:
                        "Channel-specific external identifiers (e.g. WhatsApp BSUID). Set by omnichannel apps via apps-engine, not through this REST endpoint's request body.",
                    }),
                })
                .exactOptional()
                .openapi({ required: [] }),
              success: z.boolean().exactOptional(),
            })
            .openapi({ required: [] }),
          examples: {
            'Success Example': {
              value: {
                visitor: {
                  _id: '6a22b1765528fa64dd29de70',
                  username: 'guest-10',
                  status: 'online',
                  ts: '2026-06-05T11:22:30.664Z',
                  _updatedAt: '2026-06-05T11:22:30.665Z',
                  name: 'Postman Test Visitor',
                  phone: [{ phoneNumber: '+15551234567' }],
                  visitorEmails: [{ address: 'postman-test@example.com' }],
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
                error: "must have required property 'visitorId' [error-invalid-params]",
                errorType: 'error-invalid-params',
              },
            },
            'Example 2': { value: { success: false, error: 'visitor-not-found' } },
          },
        },
      },
    },
    401: AuthorizationErrorResponse,
    403: PermissionErrorResponse,
  },
})

export const getApiV1LivechatVisitorTokenRoomRoute = createRoute({
  method: 'get',
  path: '/api/v1/livechat/visitor/{token}/room',
  tags: ['Omnichannel Visitors'],
  summary: 'Get Open Conversation of a Visitor',
  description: 'Retrieve open conversations associated with a particular visitor.',
  operationId: 'get-api-v1-livechat-visitor-token-room',
  request: {
    params: z.object({
      token: z
        .string()
        .openapi({
          param: {
            schema: { type: 'string' },
            name: 'token',
            in: 'path',
            required: true,
            description: 'The visitor token.',
          },
        }),
    }),
    headers: z.object({ 'X-Auth-Token': AuthTokenParamsSchema, 'X-User-Id': UserIdParamsSchema }),
  },
  responses: {
    200: {
      description: '',
      content: {
        'application/json': {
          schema: z
            .object({
              rooms: z
                .array(
                  z
                    .object({
                      _id: z.string().exactOptional(),
                      t: z.string().exactOptional(),
                      cl: z.boolean().exactOptional(),
                      servedBy: z
                        .object({
                          _id: z.string().exactOptional(),
                          username: z.string().exactOptional(),
                          ts: z.string().exactOptional(),
                        })
                        .exactOptional()
                        .openapi({ required: [] }),
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
                rooms: [
                  {
                    _id: 'D2hej3mmvkwyB4HR6',
                    t: 'l',
                    cl: false,
                    servedBy: {
                      _id: 'XycfA5CetCPuEjqxw',
                      username: 'kim.jane',
                      ts: '2021-07-18T11:50:38.822Z',
                    },
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

export const getApiV1LivechatVisitorsSearchRoute = createRoute({
  method: 'get',
  path: '/api/v1/livechat/visitors.search',
  tags: ['Omnichannel Visitors'],
  summary: 'Search Visitors by Term',
  description: 'Search Livechat visitors using a specific term.',
  operationId: 'get-api-v1-livechat-visitors-search',
  request: {
    headers: z.object({ 'X-Auth-Token': AuthTokenParamsSchema, 'X-User-Id': UserIdParamsSchema }),
    query: z.object({
      term: z
        .string()
        .openapi({
          param: {
            schema: { type: 'string' },
            in: 'query',
            name: 'term',
            description: "The visitor's name, username, email, or phone.",
            required: true,
          },
        }),
      offset: OffsetParamsSchema,
      count: CountParamsSchema,
      sort: z
        .any()
        .exactOptional()
        .openapi({
          param: {
            schema: {},
            in: 'query',
            name: 'sort',
            description:
              'Sort the results by ascending (`1`) or descending (`-1`) order. The following options are available:\n * `ts`: Sort by timestamp. For example, `sort={"ts":1}` or `sort={"ts":-1}`. By default, results are sorted in descending order of timestamp.\n * `lastChat.ts`: Last chat timestamp. For example, `sort={"lastChat.ts":1}` or `sort={"lastChat":-1}`.\n * `name`: Visitor name. For example, `sort={"name":1}` or `sort={"name":-1}`.\n * `username`: Visitor username. For example, `sort={"username":1}` or `sort={"username":-1}`.',
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
              visitors: z
                .array(
                  z
                    .object({
                      _id: z.string().exactOptional(),
                      username: z.string().exactOptional(),
                      name: z.string().exactOptional(),
                      visitorEmails: z
                        .array(
                          z
                            .object({ address: z.string().exactOptional() })
                            .openapi({ required: [] }),
                        )
                        .exactOptional(),
                      lastChat: z
                        .object({ _id: z.string().exactOptional(), ts: z.string().exactOptional() })
                        .exactOptional()
                        .openapi({ required: [] }),
                    })
                    .openapi({ required: [] }),
                )
                .exactOptional(),
              count: z.int().exactOptional(),
              offset: z.int().exactOptional(),
              total: z.int().exactOptional(),
              success: z.boolean().exactOptional(),
            })
            .openapi({ required: [] }),
          examples: {
            'Success Example': {
              value: {
                visitors: [
                  {
                    _id: '6410749f28384134ed600ce4',
                    username: 'guest-14',
                    name: 'James',
                    visitorEmails: [{ address: 'pilebe6631@kaudat.com' }],
                    lastChat: { _id: 'eJ5ZzeT2XkLtcBkMM', ts: '2023-03-14T13:21:02.239Z' },
                  },
                  {
                    _id: '63db8d4990fe6eda42ad429a',
                    username: 'guest-3',
                    name: 'James',
                    visitorEmails: [{ address: 'f.r@rocket.chat' }],
                    lastChat: { _id: '82htiMFZLCtvRFqZi', ts: '2023-02-06T12:34:53.392Z' },
                  },
                ],
                count: 2,
                offset: 0,
                total: 2,
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
                error: "must have required property 'term' [error-invalid-params]",
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

export const getApiV1LivechatVisitorsPagesVisitedRoomIdRoute = createRoute({
  method: 'get',
  path: '/api/v1/livechat/visitors.pagesVisited/{roomId}',
  tags: ['Omnichannel Visitors'],
  summary: 'Get Pages Visited by Livechat Visitor',
  operationId: 'get-api-v1-livechat-visitors.pagesVisited-roomId',
  request: {
    params: z.object({
      roomId: z
        .string()
        .openapi({
          param: {
            schema: { type: 'string' },
            name: 'roomId',
            in: 'path',
            required: true,
            description: 'The room ID.',
          },
        }),
    }),
    headers: z.object({ 'X-Auth-Token': AuthTokenParamsSchema, 'X-User-Id': UserIdParamsSchema }),
  },
  responses: {
    200: {
      description: '',
      content: {
        'application/json': {
          schema: z
            .object({
              pages: z
                .array(
                  z
                    .object({
                      _id: z.string().exactOptional(),
                      t: z.string().exactOptional(),
                      ts: z.string().exactOptional(),
                      msg: z.string().exactOptional(),
                      u: z
                        .object({
                          _id: z.string().exactOptional(),
                          username: z.string().exactOptional(),
                          name: z.string().exactOptional(),
                        })
                        .exactOptional()
                        .openapi({ required: [] }),
                      groupable: z.boolean().exactOptional(),
                      navigation: z
                        .object({
                          page: z
                            .object({
                              change: z.string().exactOptional(),
                              title: z.string().exactOptional(),
                              location: z
                                .object({ href: z.string().exactOptional() })
                                .exactOptional()
                                .openapi({ required: [] }),
                            })
                            .exactOptional()
                            .openapi({ required: [] }),
                          token: z.string().exactOptional(),
                        })
                        .exactOptional()
                        .openapi({ required: [] }),
                      expireAt: z.int().exactOptional(),
                      _updatedAt: z.string().exactOptional(),
                      rid: z.string().exactOptional(),
                    })
                    .openapi({ required: [] }),
                )
                .exactOptional(),
              count: z.int().exactOptional(),
              offset: z.int().exactOptional(),
              total: z.int().exactOptional(),
              success: z.boolean().exactOptional(),
            })
            .openapi({ required: [] }),
          examples: {
            'Success Example': {
              value: {
                pages: [
                  {
                    _id: '6523fbf5a2f73c7460e18d60',
                    t: 'livechat_navigation_history',
                    ts: '2023-10-09T13:11:17.968Z',
                    msg: 'Document - https://s3.amazonaws.com/uploads.use1.cloud.rocket.cht.html%22',
                    u: { _id: 'rocket.cat', username: 'rocket.cat', name: 'Rocket.Cat' },
                    groupable: false,
                    navigation: {
                      page: {
                        change: 'url',
                        title: 'Document',
                        location: {
                          href: 'https://s3.amazonaws.com/uploads.use1.cloud.rocket.cht.html%22',
                        },
                      },
                      token: '54fc5544030bcecda053311cb6b98920bdf953f242c12',
                    },
                    expireAt: 1699449077968,
                    _updatedAt: '2023-10-09T13:12:00.608Z',
                    rid: 'MmGnqizEa8pvc9LRg',
                  },
                ],
                count: 1,
                offset: 0,
                total: 1,
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

export const getApiV1LivechatVisitorsChatHistoryRoomRoomIdVisitorVisitorIdRoute = createRoute({
  method: 'get',
  path: '/api/v1/livechat/visitors.chatHistory/room/{roomId}/visitor/{visitorId}',
  tags: ['Omnichannel Visitors'],
  summary: 'Get Livechat Visitor Chat History',
  description:
    'Get the chat history of a Livechat visitor. The response does not include the visitor `token` in the `v` and `lastMessage` objects.\n\n### Changelog\n| Version | Description |\n| ------- | ----------- |\n| 8.9.0   | Removed the visitor `token` from `v` and `lastMessage`. |',
  operationId: 'get-api-v1-livechat-visitors.chatHistory-room-roomId-visitor-visitorId',
  request: {
    params: z.object({
      roomId: z
        .string()
        .openapi({
          param: {
            schema: { type: 'string' },
            name: 'roomId',
            in: 'path',
            required: true,
            description: 'The room ID.',
          },
        }),
      visitorId: z
        .string()
        .openapi({
          param: {
            schema: { type: 'string' },
            name: 'visitorId',
            in: 'path',
            required: true,
            description: 'The visitor ID.',
          },
        }),
    }),
    headers: z.object({ 'X-Auth-Token': AuthTokenParamsSchema, 'X-User-Id': UserIdParamsSchema }),
    query: z.object({
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
              history: z
                .array(
                  z
                    .object({
                      _id: z.string().exactOptional(),
                      msgs: z.int().exactOptional(),
                      usersCount: z.int().exactOptional(),
                      lm: z.string().exactOptional(),
                      fname: z.string().exactOptional(),
                      t: z.string().exactOptional(),
                      ts: z.string().exactOptional(),
                      departmentId: z.string().exactOptional(),
                      v: z
                        .object({
                          _id: z.string().exactOptional(),
                          username: z.string().exactOptional(),
                          status: z.string().exactOptional(),
                          lastMessageTs: z.string().exactOptional(),
                        })
                        .exactOptional()
                        .openapi({ required: [] }),
                      cl: z.boolean().exactOptional(),
                      open: z.boolean().exactOptional(),
                      _updatedAt: z.string().exactOptional(),
                      departmentAncestors: z.array(z.string()).exactOptional(),
                      lastMessage: z
                        .object({
                          _id: z.string().exactOptional(),
                          rid: z.string().exactOptional(),
                          msg: z.string().exactOptional(),
                          alias: z.string().exactOptional(),
                          ts: z.string().exactOptional(),
                          u: z
                            .object({
                              _id: z.string().exactOptional(),
                              username: z.string().exactOptional(),
                              name: z.string().exactOptional(),
                            })
                            .exactOptional()
                            .openapi({ required: [] }),
                          unread: z.boolean().exactOptional(),
                          _updatedAt: z.string().exactOptional(),
                          urls: z.array(z.looseObject({})).exactOptional(),
                          mentions: z.array(z.looseObject({})).exactOptional(),
                          channels: z.array(z.looseObject({})).exactOptional(),
                          md: z
                            .array(
                              z
                                .object({
                                  type: z.string().exactOptional(),
                                  value: z
                                    .array(
                                      z
                                        .object({
                                          type: z.string().exactOptional(),
                                          value: z.string().exactOptional(),
                                        })
                                        .openapi({ required: [] }),
                                    )
                                    .exactOptional(),
                                })
                                .openapi({ required: [] }),
                            )
                            .exactOptional(),
                          newRoom: z.boolean().exactOptional(),
                          showConnecting: z.boolean().exactOptional(),
                        })
                        .exactOptional()
                        .openapi({ required: [] }),
                      metrics: z
                        .object({
                          reaction: z
                            .object({
                              fd: z.string().exactOptional(),
                              ft: z.number().exactOptional(),
                              tt: z.number().exactOptional(),
                            })
                            .exactOptional()
                            .openapi({ required: [] }),
                          response: z
                            .object({
                              avg: z.number().exactOptional(),
                              fd: z.string().exactOptional(),
                              ft: z.number().exactOptional(),
                              total: z.int().exactOptional(),
                              tt: z.number().exactOptional(),
                            })
                            .exactOptional()
                            .openapi({ required: [] }),
                          v: z
                            .object({ lq: z.string().exactOptional() })
                            .exactOptional()
                            .openapi({ required: [] }),
                        })
                        .exactOptional()
                        .openapi({ required: [] }),
                      waitingResponse: z.boolean().exactOptional(),
                    })
                    .openapi({ required: [] }),
                )
                .exactOptional(),
              count: z.int().exactOptional(),
              offset: z.int().exactOptional(),
              total: z.int().exactOptional(),
              success: z.boolean().exactOptional(),
            })
            .openapi({ required: [] }),
          examples: {
            'Success Example': {
              value: {
                history: [
                  {
                    _id: 'hhMKhHnnbY79mGs9K',
                    msgs: 2,
                    usersCount: 1,
                    lm: '2021-07-22T17:17:04.937Z',
                    fname: 'Maria',
                    t: 'l',
                    ts: '2021-07-22T17:17:04.216Z',
                    departmentId: 'CAJioQNAvLnYWTy8i',
                    v: {
                      _id: 'QyBAKC5Wc8tcv6cco',
                      username: 'guest-537',
                      status: 'online',
                      lastMessageTs: '2021-07-22T17:17:04.937Z',
                    },
                    cl: false,
                    open: true,
                    _updatedAt: '2021-07-22T17:17:05.078Z',
                    departmentAncestors: ['sriw2wmP2Zz2pPrre'],
                    lastMessage: {
                      _id: 'YfrxZ6gmaYLpPTxFP',
                      rid: 'hhMKhHnnbY79mGs9K',
                      msg: 'hi',
                      alias: 'Maria',
                      ts: '2021-07-22T17:17:04.937Z',
                      u: { _id: 'QyBAKC5Wc8tcv6cco', username: 'guest-537', name: 'Maria' },
                      unread: true,
                      _updatedAt: '2021-07-22T17:17:05.044Z',
                      urls: [],
                      mentions: [],
                      channels: [],
                      md: [{ type: 'PARAGRAPH', value: [{ type: 'PLAIN_TEXT', value: 'hi' }] }],
                      newRoom: false,
                      showConnecting: true,
                    },
                    metrics: {
                      reaction: { fd: '2021-07-22T17:17:04.449Z', ft: 0.233, tt: 0.233 },
                      response: {
                        avg: 0.233,
                        fd: '2021-07-22T17:17:04.449Z',
                        ft: 0.233,
                        total: 1,
                        tt: 0.233,
                      },
                      v: { lq: '2021-07-22T17:17:04.937Z' },
                    },
                    waitingResponse: true,
                  },
                ],
                count: 1,
                offset: 0,
                total: 1,
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

export const getApiV1LivechatVisitorsSearchChatsRoomRoomIdVisitorVisitorIdRoute = createRoute({
  method: 'get',
  path: '/api/v1/livechat/visitors.searchChats/room/{roomId}/visitor/{visitorId}',
  tags: ['Omnichannel Visitors'],
  summary: 'Search Visitor Chat',
  description:
    'Get the Livechat chats for a visitor. Set `closedChatsOnly` to `true` to return closed chats, and `servedChatsOnly` to `true` to return chats joined by an agent.\n\nThe response omits the visitor `token` from `v` and from `closingMessage`.\n\n### Changelog\n| Version | Description |\n| ------- | ----------- |\n| 8.9.0   | Removed the visitor `token` from `v` and `closingMessage`. |',
  operationId: 'get-api-v1-livechat-visitors.searchChats-room-roomId-visitor-visitorId',
  request: {
    params: z.object({
      roomId: z
        .string()
        .openapi({
          param: {
            schema: { type: 'string' },
            name: 'roomId',
            in: 'path',
            required: true,
            description: 'The room ID.',
          },
        }),
      visitorId: z
        .string()
        .openapi({
          param: {
            schema: { type: 'string' },
            name: 'visitorId',
            in: 'path',
            required: true,
            description: 'The visitor ID.',
          },
        }),
    }),
    headers: z.object({ 'X-Auth-Token': AuthTokenParamsSchema, 'X-User-Id': UserIdParamsSchema }),
    query: z.object({
      offset: OffsetParamsSchema,
      count: CountParamsSchema,
      sort: z
        .any()
        .exactOptional()
        .openapi({
          param: {
            schema: {},
            in: 'query',
            name: 'sort',
            description:
              'Sort the events in the ascending (`1`) or descending (`-1`) order. By default, the result is sorted in descending order. The most recent chats are returned first. Enter the value as: `sort[ts]=1` or `sort[ts]=-1`. Here `ts` refers to timestamp.',
            required: false,
          },
        }),
      searchText: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            schema: { type: 'string' },
            in: 'query',
            name: 'searchText',
            description: 'Enter the text to search for within the chat.',
            required: false,
          },
        }),
      closedChatsOnly: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            schema: { type: 'string' },
            in: 'query',
            name: 'closedChatsOnly',
            description:
              'Filter the results to display only closed chats. The value can be `"true"` or `"false"`.',
            required: false,
          },
        }),
      servedChatsOnly: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            schema: { type: 'string' },
            in: 'query',
            name: 'servedChatsOnly',
            description:
              'Filter the results to display only chats that are joined by agents. The value can be `"true"` or `"false"`.',
            required: false,
          },
        }),
      source: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            schema: { type: 'string' },
            in: 'query',
            name: 'source',
            description:
              'Filter the results by the source of the chat. The value can be: `widget`, `sms`, `api`, `email`, `app`, `other`.',
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
              history: z
                .array(
                  z
                    .object({
                      _id: z.string().exactOptional(),
                      msgs: z.int().exactOptional(),
                      fname: z.string().exactOptional(),
                      ts: z.string().exactOptional(),
                      v: z
                        .object({
                          _id: z.string().exactOptional(),
                          username: z.string().exactOptional(),
                          status: z.string().exactOptional(),
                          lastMessageTs: z.string().exactOptional(),
                        })
                        .exactOptional()
                        .openapi({ required: [] }),
                    })
                    .openapi({ required: [] }),
                )
                .exactOptional(),
              count: z.int().exactOptional(),
              offset: z.int().exactOptional(),
              total: z.int().exactOptional(),
              success: z.boolean().exactOptional(),
            })
            .openapi({ required: [] }),
          examples: {
            'Success Example': {
              value: {
                history: [
                  {
                    _id: 'hhMKhHnnbY79mGs9K',
                    msgs: 2,
                    fname: 'Maria',
                    ts: '2021-07-22T17:17:04.216Z',
                    v: {
                      _id: 'QyBAKC5Wc8tcv6cco',
                      username: 'guest-537',
                      status: 'online',
                      lastMessageTs: '2021-07-22T17:17:04.937Z',
                    },
                  },
                ],
                count: 1,
                offset: 0,
                total: 1,
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

export const getApiV1LivechatVisitorsAutocompleteRoute = createRoute({
  method: 'get',
  path: '/api/v1/livechat/visitors.autocomplete',
  tags: ['Omnichannel Visitors'],
  summary: 'Autocomplete Visitors',
  description:
    'Search for visitors by name.\n\nPermission required: `view-l-room`\n\n\n### Changelog\n| Version | Description |\n| ------- | ----------- |\n|9.0.0   | Removed the `conditions` field from the `selector` parameter.       |\n| 8.8.0   | Deprecated the `conditions` field in the `selector` parameter. |',
  operationId: 'get-api-v1-livechat-visitors.autocomplete',
  request: {
    headers: z.object({ 'X-Auth-Token': AuthTokenParamsSchema, 'X-User-Id': UserIdParamsSchema }),
    query: z.object({
      selector: z
        .string()
        .openapi({
          param: {
            name: 'selector',
            in: 'query',
            description:
              'A JSON string containing the search `term` and an optional array of visitor IDs to exclude in `exceptions`.',
            required: true,
            schema: { type: 'string' },
            example: '{"exceptions":[],"term":"Jane"}',
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
              items: z
                .array(
                  z
                    .object({
                      _id: z.string().exactOptional(),
                      username: z.string().exactOptional(),
                      name: z.string().exactOptional(),
                      custom_name: z.string().exactOptional(),
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
                items: [
                  {
                    _id: '6400be90fa0ed7dd90509300',
                    username: 'guest-5',
                    name: 'Jane',
                    custom_name: 'guest-5 - An agent',
                  },
                ],
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
                error: "must have required property 'selector' [error-invalid-params]",
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

export const postApiV1LivechatVisitorStatusRoute = createRoute({
  method: 'post',
  path: '/api/v1/livechat/visitor.status',
  tags: ['Omnichannel Visitors'],
  summary: "Set Visitor's Status",
  description:
    "Update an Omnichannel visitor's status in their conversations. The new status appears on all of the visitor's conversations, including conversations waiting in the queue. The status saved on the visitor's record doesn't change.\n\n### Changelog\n| Version | Description |\n| ------- | ----------- |\n| 0.74.0  | Added       |",
  operationId: 'post-api-v1-livechat-visitors.status',
  request: {
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              token: z
                .string()
                .openapi({ description: 'The visitor token.', example: '54fc5544030bcecda0533' }),
              status: z
                .string()
                .openapi({
                  description:
                    "The visitor's new status. Use `online`, `away`, `busy`, or `offline`.",
                  example: 'busy',
                }),
            })
            .openapi({ required: ['token', 'status'] }),
          examples: { Example: { value: { token: '54fc5544030bcecda0533', status: 'busy' } } },
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
              token: z.string().exactOptional(),
              status: z.string().exactOptional(),
              success: z.boolean().exactOptional(),
            })
            .openapi({ required: [] }),
          examples: {
            'Success Example': {
              value: { token: '54fc5544030bcecda0533', status: 'busy', success: true },
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
            'Missing Token': {
              value: { success: false, error: "Match error: Missing key 'token'" },
            },
            'Missing Status': {
              value: { success: false, error: "Match error: Missing key 'status'" },
            },
            'Invalid Visitor Token': {
              value: { success: false, error: '[invalid-token]', errorType: 'invalid-token' },
            },
            'Invalid Field Type': {
              value: {
                success: false,
                error: 'Match error: Expected string, got number in field token',
              },
            },
            'Unknown Body Property': {
              value: { success: false, error: 'Match error: Unknown key in field department' },
            },
          },
        },
      },
    },
  },
})

export const getApiV1CannedResponsesRoute = createRoute({
  method: 'get',
  path: '/api/v1/canned-responses',
  tags: ['Canned Responses'],
  summary: 'List All Canned Responses',
  description:
    '<div style="text-align: center; margin: 1rem 0 1rem 0;"><img src="https://raw.githubusercontent.com/RocketChat/Rocket.Chat-Open-API/main/images/Enterprise%20tag.svg" alt="Enterprise" style="display: block; margin: auto;"></div>\n\nGet a list of all canned responses in the workspace.\n\nPermissions required:\n- `view-canned-responses`\n- `view-all-canned-responses`\n\n### Changelog\n| Version      | Description |\n| ---------------- | ------------|\n|9.0.0   | Removed the `fields` parameter.       |\n|1.0.0            | Added       |',
  operationId: 'get-api-v1-canned-responses',
  request: {
    headers: z.object({ 'X-Auth-Token': AuthTokenParamsSchema, 'X-User-Id': UserIdParamsSchema }),
    query: z.object({
      shortcut: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'shortcut',
            in: 'query',
            description: 'The shortcut to trigger the message snippet.',
            schema: { type: 'string' },
            required: false,
          },
        }),
      text: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'text',
            in: 'query',
            description: 'The message snippet.',
            schema: { type: 'string' },
            required: false,
          },
        }),
      scope: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'scope',
            in: 'query',
            description:
              'The scope of the canned response. It can either be `global`, `user`, or `department`.',
            schema: { type: 'string' },
            required: false,
          },
        }),
      tags: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'tags',
            in: 'query',
            description: 'The tags for your canned response.',
            schema: { type: 'string' },
            required: false,
          },
        }),
      departmentId: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'departmentId',
            in: 'query',
            description:
              'The department ID where the canned response belongs to. It is required if the `scope` is `department`.',
            schema: { type: 'string' },
            required: false,
          },
        }),
      offset: OffsetParamsSchema,
      count: CountParamsSchema,
      sort: SortParamsSchema,
      createdBy: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            schema: { type: 'string' },
            in: 'query',
            name: 'createdBy',
            description: 'The user ID who created the canned response.',
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
              cannedResponses: z
                .array(
                  z
                    .object({
                      _id: z.string().exactOptional(),
                      shortcut: z.string().exactOptional(),
                      text: z.string().exactOptional(),
                      scope: z.string().exactOptional(),
                      createdBy: z
                        .object({
                          _id: z.string().exactOptional(),
                          username: z.string().exactOptional(),
                        })
                        .exactOptional()
                        .openapi({ required: [] }),
                      _createdAt: z.string().exactOptional(),
                      _updatedAt: z.string().exactOptional(),
                      tags: z.array(z.string()).exactOptional(),
                    })
                    .openapi({ required: [] }),
                )
                .exactOptional(),
              count: z.int().exactOptional(),
              offset: z.int().exactOptional(),
              total: z.int().exactOptional(),
              success: z.boolean().exactOptional(),
            })
            .openapi({ required: [] }),
          examples: {
            'Success Example': {
              value: {
                cannedResponses: [
                  {
                    _id: '646c747ca8c3a3ba32d0e2e8',
                    shortcut: 'Denied',
                    text: 'This is an example',
                    scope: 'global',
                    createdBy: { _id: 'rbAXPnMktTFbNpwtJ', username: 'kim.jane' },
                    _createdAt: '2023-05-23T08:08:28.241Z',
                    _updatedAt: '2023-05-23T08:08:28.241Z',
                  },
                  {
                    _id: '646c6ed9a8c3a3ba32d0e2db',
                    shortcut: 'my-new-canned',
                    text: 'This is an example',
                    scope: 'global',
                    tags: ['failed', 'card'],
                    createdBy: { _id: 'rbAXPnMktTFbNpwtJ', username: 'doe.john' },
                    _createdAt: '2023-05-23T07:44:25.912Z',
                    _updatedAt: '2023-05-23T07:44:25.912Z',
                  },
                  {
                    _id: '646c7350a8c3a3ba32d0e2e0',
                    shortcut: 'my-new-canned-',
                    text: 'This is an example',
                    scope: 'hi',
                    tags: ['failed', 'card'],
                    createdBy: { _id: 'rbAXPnMktTFbNpwtJ', username: 'jane.mary' },
                    _createdAt: '2023-05-23T08:03:28.148Z',
                    _updatedAt: '2023-05-23T08:03:28.148Z',
                  },
                ],
                count: 3,
                offset: 0,
                total: 3,
                success: true,
              },
            },
          },
        },
      },
    },
    401: AuthorizationErrorResponse,
    403: PermissionErrorResponse,
  },
})

export const postApiV1CannedResponsesRoute = createRoute({
  method: 'post',
  path: '/api/v1/canned-responses',
  tags: ['Canned Responses'],
  summary: 'Create or Update a Canned Response',
  description:
    '<div style="text-align: center; margin: 1rem 0 1rem 0;"><img src="https://raw.githubusercontent.com/RocketChat/Rocket.Chat-Open-API/main/images/Enterprise%20tag.svg" alt="Enterprise" style="display: block; margin: auto;"></div>\n\nTo create and update <a href=\'https://docs.rocket.chat/docs/canned-responses\' target=\'_blank\'>canned responses</a>, the following permissions are required:\n* `save-canned-responses`\n* `save-all-canned-responses`\n\n### Changelog\n| Version      | Description |\n| ------------ | ------------|\n|1.0.0         | Added       |',
  operationId: 'post-api-v1-canned-responses',
  request: {
    headers: z.object({ 'X-Auth-Token': AuthTokenParamsSchema, 'X-User-Id': UserIdParamsSchema }),
    body: {
      description:
        'Note: To update a canned response, the `_id` parameter is required along with the other required parameters. This parameter is not used to create a canned response.',
      content: {
        'application/json': {
          schema: z
            .object({
              shortcut: z
                .string()
                .openapi({ description: 'The shortcut to trigger the message snippet.' }),
              text: z.string().openapi({ description: 'The message snippet.' }),
              scope: z
                .string()
                .openapi({
                  description:
                    'The scope of the canned response. It can either be global, user or department.',
                }),
              tags: z
                .array(z.string())
                .exactOptional()
                .openapi({ description: 'The tags for your canned response.' }),
              departmentId: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    'The departmentId where the canned response belongs to. It is required if the scope is department.',
                }),
              _id: z.string().exactOptional().openapi({ description: "The canned response's ID." }),
            })
            .openapi({ required: ['shortcut', 'text', 'scope'] }),
          examples: {
            'Example 1': {
              value: {
                shortcut: 'test-canned',
                text: 'This is an example test for canned response',
                scope: 'global',
                tags: ['tag1', 'tag2'],
              },
            },
          },
        },
      },
    },
  },
  responses: {
    200: TrueSuccessResponse,
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
                error: "must have required property 'shortcut' [error-invalid-params]",
                errorType: 'error-invalid-params',
              },
            },
            'Example 2': {
              value: {
                success: false,
                error: "must have required property 'scope' [error-invalid-params]",
                errorType: 'error-invalid-params',
              },
            },
            'Example 3': {
              value: {
                success: false,
                error: 'Shortcut provided already exists [error-invalid-shortcut]',
                errorType: 'error-invalid-shortcut',
                details: { method: 'saveCannedResponse' },
              },
            },
          },
        },
      },
    },
    401: AuthorizationErrorResponse,
    403: PermissionErrorResponse,
  },
})

export const getApiV1CannedResponsesGetRoute = createRoute({
  method: 'get',
  path: '/api/v1/canned-responses.get',
  tags: ['Canned Responses'],
  summary: 'Get User Canned Responses',
  description:
    '<div style="text-align: center; margin: 1rem 0 1rem 0;"><img src="https://raw.githubusercontent.com/RocketChat/Rocket.Chat-Open-API/main/images/Enterprise%20tag.svg" alt="Enterprise" style="display: block; margin: auto;"></div>\n\nGet a list of all canned responses in the workspace that belong to the current user scope.\n\nPermission required: `view-canned-responses`\n\n### Changelog\n| Version      | Description |\n| ------------ | ------------|\n|1.0.0         | Added       |',
  operationId: 'get-api-v1-canned-responses.get',
  request: {
    headers: z.object({ 'X-Auth-Token': AuthTokenParamsSchema, 'X-User-Id': UserIdParamsSchema }),
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': {
          schema: z
            .object({
              responses: z
                .array(
                  z
                    .object({
                      _id: z.string().exactOptional(),
                      shortcut: z.string().exactOptional(),
                      text: z.string().exactOptional(),
                      scope: z.string().exactOptional(),
                      departmentId: z.string().exactOptional(),
                      createdBy: z
                        .object({
                          _id: z.string().exactOptional(),
                          username: z.string().exactOptional(),
                        })
                        .exactOptional()
                        .openapi({ required: [] }),
                      _createdAt: z.string().exactOptional(),
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
                responses: [
                  {
                    _id: '6470086ba8c3a3ba32d0fb1b',
                    shortcut: 'department-checking',
                    text: 'This is check test for departmental canned response',
                    scope: 'global',
                    departmentId: '64181a0728384134ed600dcc',
                    createdBy: { _id: '2tTEqR7ZNMJ4HGGNa', username: 'testroxie' },
                    _createdAt: '2023-05-26T01:16:27.848Z',
                    _updatedAt: '2023-05-26T01:16:27.848Z',
                  },
                  {
                    _id: '647009e1a8c3a3ba32d0fb1f',
                    shortcut: 'admin-checking',
                    text: 'This is check test for departmental canned response',
                    scope: 'department',
                    departmentId: '64181a0728384134ed600dcc',
                    createdBy: { _id: 'rbAXPnMktTFbNpwtJ', username: 'kim.jane' },
                    _createdAt: '2023-05-26T01:22:41.104Z',
                    _updatedAt: '2023-05-26T01:22:41.104Z',
                  },
                  {
                    _id: '647009fba8c3a3ba32d0fb21',
                    shortcut: 'admin-checking3',
                    text: 'This is check test for departmental canned response',
                    scope: 'global',
                    departmentId: '64181a0728384134ed600dcc',
                    createdBy: { _id: 'rbAXPnMktTFbNpwtJ', username: 'doe.john' },
                    _createdAt: '2023-05-26T01:23:07.374Z',
                    _updatedAt: '2023-05-26T01:23:07.374Z',
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
    403: PermissionErrorResponse,
  },
})

export const getApiV1CannedResponsesIdRoute = createRoute({
  method: 'get',
  path: '/api/v1/canned-responses/{_id}',
  tags: ['Canned Responses'],
  summary: 'Get a Canned Response',
  description:
    '<div style="text-align: center; margin: 1rem 0 1rem 0;"><img src="https://raw.githubusercontent.com/RocketChat/Rocket.Chat-Open-API/main/images/Enterprise%20tag.svg" alt="Enterprise" style="display: block; margin: auto;"></div>\n\nGet a specific canned response.\n\nPermission required: `view-canned-responses`\n\n### Changelog\n| Version      | Description |\n| ---------------- | ------------|\n|1.0.0            | Added       |',
  operationId: 'get-api-v1-canned-responses-_id',
  request: {
    params: z.object({
      _id: z
        .string()
        .openapi({
          param: {
            schema: { type: 'string' },
            example: 'EwmbZ9nLSx7kFamYB',
            name: '_id',
            in: 'path',
            required: true,
            description: "The canned response's ID.",
          },
        }),
    }),
    headers: z.object({ 'X-Auth-Token': AuthTokenParamsSchema, 'X-User-Id': UserIdParamsSchema }),
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': {
          schema: z
            .object({
              cannedResponse: z
                .object({
                  _id: z.string().exactOptional(),
                  shortcut: z.string().exactOptional(),
                  text: z.string().exactOptional(),
                  scope: z.string().exactOptional(),
                  userId: z.string().exactOptional(),
                  createdBy: z
                    .object({
                      _id: z.string().exactOptional(),
                      username: z.string().exactOptional(),
                    })
                    .exactOptional()
                    .openapi({ required: [] }),
                  _createdAt: z.string().exactOptional(),
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
                cannedResponse: {
                  _id: 'EwmbZ9nLSx7kFamYB',
                  shortcut: 'user',
                  text: 'Meu 32423423423423423',
                  scope: 'user',
                  userId: '9L3wuBXKpbAWdfgx8',
                  createdBy: { _id: '9L3wuBXKpbAWdfgx8', username: 'rafael.ferreira' },
                  _createdAt: '2021-05-26T18:59:17.929Z',
                  _updatedAt: '2021-05-26T18:59:17.929Z',
                },
                success: true,
              },
            },
          },
        },
      },
    },
    401: AuthorizationErrorResponse,
    403: PermissionErrorResponse,
  },
})

export const deleteApiV1CannedResponsesIdRoute = createRoute({
  method: 'delete',
  path: '/api/v1/canned-responses/{_id}',
  tags: ['Canned Responses'],
  summary: 'Delete a Canned Response',
  description:
    '<div style="text-align: center; margin: 1rem 0 1rem 0;"><img src="https://raw.githubusercontent.com/RocketChat/Rocket.Chat-Open-API/main/images/Enterprise%20tag.svg" alt="Enterprise" style="display: block; margin: auto;"></div>\n\nUse this endpoint to delete a canned response. Permission required: `remove-canned-responses`\n\n### Changelog\n| Version      | Description |\n| ---------------- | ------------|\n|7.12.0            | Added       |',
  operationId: 'delete-api-v1-canned-responses-_id',
  request: {
    params: z.object({
      _id: z
        .string()
        .openapi({
          param: {
            schema: { type: 'string' },
            example: 'EwmbZ9nLSx7kFamYB',
            name: '_id',
            in: 'path',
            required: true,
            description: "The canned response's ID.",
          },
        }),
    }),
    headers: z.object({ 'X-Auth-Token': AuthTokenParamsSchema, 'X-User-Id': UserIdParamsSchema }),
  },
  responses: { 200: TrueSuccessResponse, 401: AuthorizationErrorResponse },
})

export const postApiV1LivechatMessageRoute = createRoute({
  method: 'post',
  path: '/api/v1/livechat/message',
  tags: ['Livechat Messages'],
  summary: 'Send New Livechat Message',
  description: 'Send a new message in a Livechat room.',
  operationId: 'post-api-v1-livechat-message',
  request: {
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              token: z
                .string()
                .openapi({ description: 'The visitor token.', example: 'iNKE8a6k6cjbqWhWd' }),
              rid: z
                .string()
                .openapi({ description: 'The room ID.', example: 'zRAeTszXor8CCPceB' }),
              msg: z
                .string()
                .openapi({
                  description: 'The message to send to the visitor.',
                  example: 'Hello World!',
                }),
              _id: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    'If you do not enter any value, a message ID is automatically generated. If you want to override the message ID in the database with your own, enter a random unique string.',
                  example: 'abcdje928390',
                }),
              agent: z
                .object({
                  agentId: z.string().exactOptional(),
                  username: z.string().exactOptional(),
                })
                .exactOptional()
                .openapi({
                  description:
                    'Enter the ID and the username of the agent to whom you want to send the message.',
                  required: [],
                }),
            })
            .openapi({ required: ['token', 'rid', 'msg'] }),
          examples: {
            'Example 1': {
              value: {
                token: '54fc5544030bcecda053311cb6b',
                rid: 'hGFwSKA28nRKut3pD',
                msg: 'Hello World!',
                agent: { agentId: 'CkCPNcvsvCDfmWLqC', username: 'kim.jane' },
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
              message: z
                .object({
                  _id: z.string().exactOptional(),
                  rid: z.string().exactOptional(),
                  msg: z.string().exactOptional(),
                  token: z.string().exactOptional(),
                  alias: z.string().exactOptional(),
                  ts: z.string().exactOptional(),
                  u: z
                    .object({
                      _id: z.string().exactOptional(),
                      username: z.string().exactOptional(),
                      name: z.string().exactOptional(),
                    })
                    .exactOptional()
                    .openapi({ required: [] }),
                  _updatedAt: z.string().exactOptional(),
                  urls: z.array(z.looseObject({})).exactOptional(),
                  mentions: z.array(z.looseObject({})).exactOptional(),
                  channels: z.array(z.looseObject({})).exactOptional(),
                  md: z
                    .array(
                      z
                        .object({
                          type: z.string().exactOptional(),
                          value: z
                            .array(
                              z
                                .object({
                                  type: z.string().exactOptional(),
                                  value: z.string().exactOptional(),
                                })
                                .openapi({ required: [] }),
                            )
                            .exactOptional(),
                        })
                        .openapi({ required: [] }),
                    )
                    .exactOptional(),
                })
                .exactOptional()
                .openapi({ required: [] }),
              success: z.boolean().exactOptional(),
            })
            .openapi({ required: [] }),
          examples: {
            'Success Example': {
              value: {
                message: {
                  _id: 'djsajdkscks787',
                  rid: 'hGFwSKA28nRKut3pD',
                  msg: 'Hello World!',
                  token: '54fc5544030bcecda053311cb6b98920bdf953f242c129d7b8065000b1f9b2e9',
                  alias: 'Baek',
                  ts: '2023-10-31T13:14:29.804Z',
                  u: { _id: '6523dc0ba2f73c7460e18d4d', username: 'guest-35', name: 'Baek' },
                  _updatedAt: '2023-10-31T13:14:29.960Z',
                  urls: [],
                  mentions: [],
                  channels: [],
                  md: [
                    { type: 'PARAGRAPH', value: [{ type: 'PLAIN_TEXT', value: 'Hello World!' }] },
                  ],
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
                error: "must have required property 'token' [error-invalid-params]",
                errorType: 'error-invalid-params',
              },
            },
          },
        },
      },
    },
  },
})

export const postApiV1LivechatMessagesRoute = createRoute({
  method: 'post',
  path: '/api/v1/livechat/messages',
  tags: ['Livechat Messages'],
  summary: 'Send Array of Messages',
  description: 'Send an array of messsages in a Livechat room.',
  operationId: 'post-api-v1-livechat-messages',
  request: {
    headers: z.object({ 'X-Auth-Token': AuthTokenParamsSchema, 'X-User-Id': UserIdParamsSchema }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              visitor: z
                .object({ token: z.string().exactOptional() })
                .openapi({ description: 'The vistor token.', required: [] }),
              messages: z
                .array(z.object({ msg: z.string().exactOptional() }).openapi({ required: [] }))
                .openapi({ description: 'The array of messages.' }),
            })
            .openapi({ required: ['visitor', 'messages'] }),
          examples: {
            'Example 1': {
              value: {
                visitor: { token: '54fc5544030bcecda053311cb6b98920b' },
                messages: [{ msg: 'test' }, { msg: 'hello' }],
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
              messages: z
                .array(
                  z
                    .object({
                      username: z.string().exactOptional(),
                      msg: z.string().exactOptional(),
                      ts: z.string().exactOptional(),
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
                messages: [
                  { username: 'guest-35', msg: 'test', ts: '2023-10-31T08:41:29.724Z' },
                  { username: 'guest-35', msg: 'hello', ts: '2023-10-31T08:41:29.725Z' },
                ],
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
                error: "must have required property 'visitor' [error-invalid-params]",
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

export const getApiV1LivechatMessageIdRoute = createRoute({
  method: 'get',
  path: '/api/v1/livechat/message/{_id}',
  tags: ['Livechat Messages'],
  summary: 'Get a Livechat Message',
  description: 'Retrieve specific livechat message information.',
  operationId: 'get-api-v1-livechat-message-_id',
  request: {
    params: z.object({
      _id: z
        .string()
        .openapi({
          param: {
            schema: { type: 'string' },
            example: 'ZKWP8LfGnRHQ3ozWa',
            name: '_id',
            in: 'path',
            required: true,
            description: 'The message ID that you want to update.',
          },
        }),
    }),
    query: z.object({
      token: z
        .string()
        .openapi({
          param: {
            schema: { type: 'string' },
            example: '8s7e9ony6ctl27e1qf8kue',
            in: 'query',
            name: 'token',
            description: 'The visitor token.',
            required: true,
          },
        }),
      rid: z
        .string()
        .openapi({
          param: {
            schema: { type: 'string' },
            example: 'mmqCzYgiL8fzRYfuY',
            in: 'query',
            name: 'rid',
            description: 'The room ID.',
            required: true,
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
              message: z
                .object({
                  _id: z.string().exactOptional(),
                  rid: z.string().exactOptional(),
                  msg: z.string().exactOptional(),
                  token: z.string().exactOptional(),
                  alias: z.string().exactOptional(),
                  ts: z.string().exactOptional(),
                  u: z
                    .object({
                      _id: z.string().exactOptional(),
                      username: z.string().exactOptional(),
                      name: z.string().exactOptional(),
                    })
                    .exactOptional()
                    .openapi({ required: [] }),
                  unread: z.boolean().exactOptional(),
                  _updatedAt: z.string().exactOptional(),
                  urls: z.array(z.looseObject({})).exactOptional(),
                  mentions: z.array(z.looseObject({})).exactOptional(),
                  channels: z.array(z.looseObject({})).exactOptional(),
                  md: z
                    .array(
                      z
                        .object({
                          type: z.string().exactOptional(),
                          value: z
                            .array(
                              z
                                .object({
                                  type: z.string().exactOptional(),
                                  value: z.string().exactOptional(),
                                })
                                .openapi({ required: [] }),
                            )
                            .exactOptional(),
                        })
                        .openapi({ required: [] }),
                    )
                    .exactOptional(),
                })
                .exactOptional()
                .openapi({ required: [] }),
              success: z.boolean().exactOptional(),
            })
            .openapi({ required: [] }),
          examples: {
            'Success Example': {
              value: {
                message: {
                  _id: 'AgRFdj96mbHDPrTHq',
                  rid: 'mmqCzYgiL8fzRYfuY',
                  msg: 'hi',
                  token: '8s7e9ony6ctl27e1qf8kue',
                  alias: 'Mary',
                  ts: '2021-07-13T16:20:26.672Z',
                  u: { _id: '47Dajwh9DjpnTAugW', username: 'guest-165', name: 'Mary' },
                  unread: true,
                  _updatedAt: '2021-07-13T16:20:26.776Z',
                  urls: [],
                  mentions: [],
                  channels: [],
                  md: [{ type: 'PARAGRAPH', value: [{ type: 'PLAIN_TEXT', value: 'hi' }] }],
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
                error: "must have required property 'rid' [error-invalid-params]",
                errorType: 'error-invalid-params',
              },
            },
            'Example 2': {
              value: {
                success: false,
                error: "must have required property 'token' [error-invalid-params]",
                errorType: 'error-invalid-params',
              },
            },
          },
        },
      },
    },
  },
})

export const putApiV1LivechatMessageIdRoute = createRoute({
  method: 'put',
  path: '/api/v1/livechat/message/{_id}',
  tags: ['Livechat Messages'],
  summary: 'Update Livechat Message',
  description: 'Update a specific livechat message.',
  operationId: 'put-api-v1-livechat-message-_id',
  request: {
    params: z.object({
      _id: z
        .string()
        .openapi({
          param: {
            schema: { type: 'string' },
            example: 'ZKWP8LfGnRHQ3ozWa',
            name: '_id',
            in: 'path',
            required: true,
            description: 'The message ID that you want to update.',
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              token: z
                .string()
                .exactOptional()
                .openapi({ example: 'iNKE8a6k6cjbqWhWd', description: 'The visitor token.' }),
              rid: z
                .string()
                .exactOptional()
                .openapi({ description: 'The room ID.', example: 'zRAeTszXor8CCPceB' }),
              msg: z
                .string()
                .exactOptional()
                .openapi({
                  description: 'The updated message that you want to send.',
                  example: 'editing a livechat message...',
                }),
            })
            .openapi({ required: [] }),
          examples: {
            'Example 1': {
              value: {
                token: '54fc5544030bcecda053311cb6b9892',
                rid: 'hGFwSKA28nRKut3pD',
                msg: 'editing livechat message..',
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
              message: z
                .object({
                  _id: z.string().exactOptional(),
                  msg: z.string().exactOptional(),
                  u: z
                    .object({
                      _id: z.string().exactOptional(),
                      username: z.string().exactOptional(),
                      name: z.string().exactOptional(),
                    })
                    .exactOptional()
                    .openapi({ required: [] }),
                  ls: z.string().exactOptional(),
                })
                .exactOptional()
                .openapi({ required: [] }),
              success: z.boolean().exactOptional(),
            })
            .openapi({ required: [] }),
          examples: {
            'Success Example': {
              value: {
                message: {
                  _id: 'ZKWP8LfGnRHQ3ozWa',
                  msg: 'editing livechat message..',
                  u: { _id: 'YgEoq2djbGdjjZnsL', username: 'guest-4', name: 'Livechat Visitor' },
                  ls: '2018-09-14T13:31:33.201Z',
                },
                success: true,
              },
            },
          },
        },
      },
    },
  },
})

export const deleteApiV1LivechatMessageIdRoute = createRoute({
  method: 'delete',
  path: '/api/v1/livechat/message/{_id}',
  tags: ['Livechat Messages'],
  summary: 'Delete Livechat Message',
  description:
    'Remove a specific livechat message. You can only delete your messages if the **Allow Message Deleting** setting is enabled in the Rocket.Chat workspace.\n',
  operationId: 'delete-api-v1-livechat-message-_id',
  request: {
    params: z.object({
      _id: z
        .string()
        .openapi({
          param: {
            schema: { type: 'string' },
            example: 'ZKWP8LfGnRHQ3ozWa',
            name: '_id',
            in: 'path',
            required: true,
            description: 'The message ID that you want to update.',
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              token: z.string().openapi({ description: 'The visitor token.' }),
              rid: z.string().openapi({ description: 'The room ID.' }),
            })
            .openapi({ required: ['token', 'rid'] }),
          examples: {
            'Example 1': {
              value: { token: '54fc5544030bcecda053311cb6b989', rid: 'hGFwSKA28nRKut3pD' },
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
              message: z
                .object({ _id: z.string().exactOptional(), ls: z.string().exactOptional() })
                .exactOptional()
                .openapi({ required: [] }),
              success: z.boolean().exactOptional(),
            })
            .openapi({ required: [] }),
          examples: {
            'Success Example': {
              value: {
                message: { _id: 'ZKWP8LfGnRHQ3ozWa', ls: '2018-09-14T13:31:33.279Z' },
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
                error: "must have required property 'token' [error-invalid-params]",
                errorType: 'error-invalid-params',
              },
            },
          },
        },
      },
    },
  },
})

export const getApiV1LivechatMessagesHistoryRidRoute = createRoute({
  method: 'get',
  path: '/api/v1/livechat/messages.history/{rid}',
  tags: ['Livechat Messages'],
  summary: 'Get Livechat Message History',
  description: 'Get the entire message history of a conversation.',
  operationId: 'get-api-v1-livechat-messages.history-rid',
  request: {
    params: z.object({
      rid: z
        .string()
        .openapi({
          param: {
            schema: { type: 'string' },
            name: 'rid',
            in: 'path',
            required: true,
            description: 'The room ID.',
          },
        }),
    }),
    query: z.object({
      token: z
        .string()
        .openapi({
          param: {
            schema: { type: 'string' },
            example: 'iNKE8a6k6cjbqWhWd',
            in: 'query',
            name: 'token',
            description: 'The visitor token.',
            required: true,
          },
        }),
      ls: ((schema) =>
        z.union([schema, z.preprocess((val) => (val === 'null' ? null : val), schema)]))(z.any())
        .exactOptional()
        .openapi({
          param: {
            schema: { format: 'date-time' },
            example: '2018-09-14T13:31:33.201Z',
            in: 'query',
            name: 'ls',
            description: 'The timestamp to start loading the messages.',
            required: false,
          },
        }),
      end: ((schema) =>
        z.union([schema, z.preprocess((val) => (val === 'null' ? null : val), schema)]))(z.any())
        .exactOptional()
        .openapi({
          param: {
            schema: { format: 'date-time' },
            example: '2018-09-14T14:31:33.201Z',
            in: 'query',
            name: 'end',
            description: 'Returns only messages sent before this timestamp.',
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
          z.number(),
        )
        .exactOptional()
        .openapi({
          param: {
            schema: { type: 'number' },
            example: 25,
            in: 'query',
            name: 'limit',
            description: 'The number of messages to load.',
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
              messages: z
                .array(
                  z
                    .object({
                      _id: z.string().exactOptional(),
                      rid: z.string().exactOptional(),
                      msg: z.string().exactOptional(),
                      token: z.string().exactOptional(),
                      alias: z.string().exactOptional(),
                      ls: z.string().exactOptional(),
                      u: z
                        .object({
                          _id: z.string().exactOptional(),
                          username: z.string().exactOptional(),
                          name: z.string().exactOptional(),
                        })
                        .exactOptional()
                        .openapi({ required: [] }),
                      mentions: z.array(z.looseObject({})).exactOptional(),
                      channels: z.array(z.looseObject({})).exactOptional(),
                      _updatedAt: z.string().exactOptional(),
                      editedAt: z.string().exactOptional(),
                      editedBy: z
                        .object({
                          _id: z.string().exactOptional(),
                          username: z.string().exactOptional(),
                        })
                        .exactOptional()
                        .openapi({ required: [] }),
                      urls: z.array(z.looseObject({})).exactOptional(),
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
                messages: [
                  {
                    _id: 'ZKWP8LfGnRHQ3ozWa',
                    rid: 'KuACMJ5MpN6SfAFWg',
                    msg: 'editing livechat message..',
                    token: 'iNKE8a6k6cjbqWhWd',
                    alias: 'Livechat Visitor',
                    ls: '2018-09-14T13:31:33.201Z',
                    u: { _id: 'YgEoq2djbGdjjZnsL', username: 'guest-4', name: 'Livechat Visitor' },
                    mentions: [],
                    channels: [],
                    _updatedAt: '2018-09-14T13:31:33.222Z',
                    editedAt: '2018-09-14T13:31:33.219Z',
                    editedBy: { _id: 'YgEoq2djbGdjjZnsL', username: 'guest-4' },
                    urls: [],
                  },
                ],
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
                error: "must have required property 'token' [error-invalid-params]",
                errorType: 'error-invalid-params',
              },
            },
          },
        },
      },
    },
  },
})

export const postApiV1LivechatOfflineMessageRoute = createRoute({
  method: 'post',
  path: '/api/v1/livechat/offline.message',
  tags: ['Livechat Messages'],
  summary: 'Send Offline Livechat Message',
  description:
    'Send the offline message when no agent is available to attend the omnichannel conversation.',
  operationId: 'post-api-v1-livechat-offline.message',
  request: {
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              name: z.string().openapi({ description: 'Message name.' }),
              email: z.string().openapi({ description: 'The visitor email.' }),
              message: z.string().openapi({ description: 'Message text.' }),
              department: z.string().openapi({ description: 'The department name.' }),
              host: z.string().openapi({ description: 'The username of the agent.' }),
            })
            .openapi({ required: ['name', 'email', 'message', 'department', 'host'] }),
          examples: {
            'Example 1': {
              value: {
                name: 'Livechat Visitor',
                email: 'visitor@rocket.chat',
                message: 'I need help',
                department: 'Support',
                host: 'null',
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
            .object({ message: z.string().exactOptional(), success: z.boolean().exactOptional() })
            .openapi({ required: [] }),
          examples: {
            'Success Example': {
              value: { message: 'Livechat offline message sent', success: true },
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
          },
        },
      },
    },
  },
})

export const getApiV1LivechatRidMessagesRoute = createRoute({
  method: 'get',
  path: '/api/v1/livechat/{rid}/messages',
  tags: ['Livechat Messages'],
  summary: 'Get Livechat Messages',
  description:
    'View the messages of a specific Livechat room.\n\nPermission required: `view-l-room`',
  operationId: 'get-api-v1-livechat-:rid-messages',
  request: {
    params: z.object({
      rid: z
        .string()
        .openapi({
          param: {
            name: 'rid',
            in: 'path',
            description: 'The room ID.',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    headers: z.object({ 'X-Auth-Token': AuthTokenParamsSchema, 'X-User-Id': UserIdParamsSchema }),
    query: z.object({
      offset: OffsetParamsSchema,
      count: CountParamsSchema,
      sort: SortParamsSchema,
      searchTerm: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            schema: { type: 'string' },
            in: 'query',
            name: 'searchTerm',
            description: 'Enter a term that you want to search in the messages.',
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
              messages: z
                .array(
                  z
                    .object({
                      _id: z.string().exactOptional(),
                      rid: z.string().exactOptional(),
                      ts: z.string().exactOptional(),
                      msg: z.string().exactOptional(),
                      groupable: z.boolean().exactOptional(),
                      file: z
                        .object({
                          _id: z.string().exactOptional(),
                          name: z.string().exactOptional(),
                          type: z.string().exactOptional(),
                          size: z.int().exactOptional(),
                          format: z.string().exactOptional(),
                        })
                        .exactOptional()
                        .openapi({ required: [] }),
                      files: z
                        .array(
                          z
                            .object({
                              _id: z.string().exactOptional(),
                              name: z.string().exactOptional(),
                              type: z.string().exactOptional(),
                              size: z.int().exactOptional(),
                              format: z.string().exactOptional(),
                            })
                            .openapi({ required: [] }),
                        )
                        .exactOptional(),
                      attachments: z
                        .array(
                          z
                            .object({
                              title: z.string().exactOptional(),
                              title_link: z.string().exactOptional(),
                              title_link_download: z.boolean().exactOptional(),
                              image_dimensions: z
                                .object({
                                  width: z.int().exactOptional(),
                                  height: z.int().exactOptional(),
                                })
                                .exactOptional()
                                .openapi({ required: [] }),
                              image_preview: z.string().exactOptional(),
                              image_url: z.string().exactOptional(),
                              image_type: z.string().exactOptional(),
                              image_size: z.int().exactOptional(),
                              type: z.string().exactOptional(),
                              description: z.string().exactOptional(),
                            })
                            .openapi({ required: [] }),
                        )
                        .exactOptional(),
                      u: z
                        .object({
                          _id: z.string().exactOptional(),
                          username: z.string().exactOptional(),
                          name: z.string().exactOptional(),
                        })
                        .exactOptional()
                        .openapi({ required: [] }),
                      _updatedAt: z.string().exactOptional(),
                      urls: z.array(z.looseObject({})).exactOptional(),
                      mentions: z.array(z.looseObject({})).exactOptional(),
                      channels: z.array(z.looseObject({})).exactOptional(),
                      md: z
                        .array(
                          z
                            .object({
                              type: z.string().exactOptional(),
                              value: z
                                .array(
                                  z
                                    .object({
                                      type: z.string().exactOptional(),
                                      value: z.string().exactOptional(),
                                    })
                                    .openapi({ required: [] }),
                                )
                                .exactOptional(),
                            })
                            .openapi({ required: [] }),
                        )
                        .exactOptional(),
                      token: z.string().exactOptional(),
                      alias: z.string().exactOptional(),
                    })
                    .openapi({ required: [] }),
                )
                .exactOptional(),
              offset: z.int().exactOptional(),
              count: z.int().exactOptional(),
              total: z.int().exactOptional(),
              success: z.boolean().exactOptional(),
            })
            .openapi({ required: [] }),
          examples: {
            'Example 1': {
              value: {
                messages: [
                  {
                    _id: 'hmnQoYcnSJp7c9f2v',
                    rid: 'dCBiZX3XPWyPsa6pt',
                    ts: '2025-10-16T11:17:07.068Z',
                    msg: '',
                    groupable: false,
                    file: {
                      _id: '68f0d43201e202fefed836cf',
                      name: 'video-designs (1).png',
                      type: 'image/png',
                      size: 17466,
                      format: 'png',
                    },
                    files: [
                      {
                        _id: '68f0d43201e202fefed836cf',
                        name: 'video-designs (1).png',
                        type: 'image/png',
                        size: 17466,
                        format: 'png',
                      },
                      {
                        _id: '68f0d43301e202fefed836d1',
                        name: 'thumb-video-designs (1).png',
                        type: 'image/png',
                        size: 14848,
                        format: 'png',
                      },
                    ],
                    attachments: [
                      {
                        title: 'video-designs (1).png',
                        title_link: '/file-upload/68f0d43201e202fefed836cf/video-designs%20(1).png',
                        title_link_download: true,
                        image_dimensions: { width: 480, height: 301 },
                        image_preview:
                          '/9j/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAUACADASIAAhEBAxEB/8QAGQABAAMBAQAAAAAAAAAAAAAAAAIDBAUI/8QAHRAAAgIDAAMAAAAAAAAAAAAAAQIAAwQRMQUhIv/EABUBAQEAAAAAAAAAAAAAAAAAAAAB/8QAFxEBAQEBAAAAAAAAAAAAAAAAAAERQf/aAAwDAQACEQMRAD8A8qqCzAKNk8EtbGvW4VNUwsPF17kKXNVquvVO5vt8pdZnpklvpRoHUszqXWNca5rjUKmNg6uvcqYFWIYaI6J0a/KXJnvkhvthrepgusNtrO3WOzFzhLUIiJFIiIH/2Q==',
                        image_url: '/file-upload/68f0d43301e202fefed836d1/video-designs%20(1).png',
                        image_type: 'image/png',
                        image_size: 17466,
                        type: 'file',
                        description: '',
                      },
                    ],
                    u: { _id: 'C38WSSzrGd2NCjzqJ', username: 'test.cat', name: 'Test Cat' },
                    _updatedAt: '2025-11-12T10:24:44.420Z',
                    urls: [],
                    mentions: [],
                    channels: [],
                  },
                  {
                    _id: '6j9hrchZBHwZHpsF2',
                    rid: 'dCBiZX3XPWyPsa6pt',
                    msg: 'hello',
                    ts: '2025-10-16T11:16:58.948Z',
                    u: { _id: 'C38WSSzrGd2NCjzqJ', username: 'test.cat', name: 'Test Cat' },
                    _updatedAt: '2025-11-12T10:24:44.420Z',
                    urls: [],
                    mentions: [],
                    channels: [],
                    md: [{ type: 'PARAGRAPH', value: [{ type: 'PLAIN_TEXT', value: 'hello' }] }],
                  },
                  {
                    _id: 'CfD55oXeSvvC3jmZS',
                    rid: 'dCBiZX3XPWyPsa6pt',
                    msg: 'hello',
                    token: '2c9035b72dec31be7e9ccbb3cbd9952394ea41c1517b76c528d403c00a3fccf9',
                    alias: 'swayyy',
                    ts: '2025-10-16T11:16:36.406Z',
                    u: { _id: '68f0d41001e202fefed836af', username: 'guest-49', name: 'swayyy' },
                    _updatedAt: '2025-10-16T11:16:36.447Z',
                    urls: [],
                    mentions: [],
                    channels: [],
                    md: [{ type: 'PARAGRAPH', value: [{ type: 'PLAIN_TEXT', value: 'hello' }] }],
                  },
                ],
                offset: 0,
                count: 50,
                total: 3,
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
            .object({ success: z.boolean().exactOptional(), error: z.string().exactOptional() })
            .openapi({ required: [] }),
          examples: { 'Example 1': { value: { success: false, error: 'invalid-room' } } },
        },
      },
    },
    401: AuthorizationErrorResponse,
  },
})

export const postApiV1OmnichannelIntegrationsRoute = createRoute({
  method: 'post',
  path: '/api/v1/omnichannel/integrations',
  tags: ['Omnichannel Webhooks'],
  summary: 'Set up Omnichannel webhook',
  description:
    'Set up a [webhook](https://docs.rocket.chat/docs/webhooks) to easily integrate Omnichannel with your CRM. Permission required: `view-livechat-manager`.',
  operationId: 'post-api-v1-omnichannel-integrations',
  request: {
    headers: z.object({ 'X-Auth-Token': AuthTokenParamsSchema, 'X-User-Id': UserIdParamsSchema }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              LivechatWebhookUrl: z
                .string()
                .exactOptional()
                .openapi({
                  description: 'The destination webhook URL where the data will be sent.',
                }),
              LivechatSecretToken: z
                .string()
                .exactOptional()
                .openapi({ description: 'A secret token that can be used to verify the webhook.' }),
              LivechatHttpTimeout: z
                .int()
                .exactOptional()
                .openapi({ description: 'The request timeout value' }),
              LivechatWebhookOnStart: z
                .boolean()
                .exactOptional()
                .openapi({
                  description:
                    'When set to true, data is sent to the configured webhook URL each time a new chat starts.',
                }),
              LivechatWebhookOnClose: z
                .boolean()
                .exactOptional()
                .openapi({
                  description:
                    'When set to true, data is sent to the configured webhook URL each time a chat is closed.',
                }),
              LivechatWebhookOnChatTaken: z
                .boolean()
                .exactOptional()
                .openapi({
                  description:
                    'When set to true, data is sent to the configured webhook URL each time a chat is taken.',
                }),
              LivechatWebhookOnChatQueued: z
                .boolean()
                .exactOptional()
                .openapi({
                  description:
                    'When set to true, data is sent to the configured webhook URL each time a chat is queued.',
                }),
              LivechatWebhookOnForward: z
                .boolean()
                .exactOptional()
                .openapi({
                  description:
                    'When set to true, data is sent to the configured webhook URL each time a chat is forwarded.',
                }),
              LivechatWebhookOnOfflineMsg: z
                .boolean()
                .exactOptional()
                .openapi({
                  description:
                    'When set to true, data is sent to the configured webhook URL each time offline messages are sent.',
                }),
              LivechatWebhookOnVisitorMessage: z
                .boolean()
                .exactOptional()
                .openapi({
                  description:
                    'When set to true, data is sent to the configured webhook URL each time a visitor sends a message.',
                }),
              LivechatWebhookOnAgentMessage: z
                .boolean()
                .exactOptional()
                .openapi({
                  description:
                    'When set to true, data is sent to the configured webhook URL each time an agent sends a message.',
                }),
            })
            .openapi({ required: [] }),
          examples: {
            WebhookData: {
              value: {
                LivechatWebhookUrl: 'https://webhook/d548683u3-7f38ow-48ba-ieooefa-oejiduiw',
                LivechatSecretToken: '',
                LivechatHttpTimeout: 5000,
                LivechatWebhookOnStart: true,
                LivechatWebhookOnClose: true,
                LivechatWebhookOnChatTaken: true,
                LivechatWebhookOnChatQueued: false,
                LivechatWebhookOnForward: false,
                LivechatWebhookOnOfflineMsg: true,
                LivechatWebhookOnVisitorMessage: true,
                LivechatWebhookOnAgentMessage: true,
              },
            },
          },
        },
      },
    },
  },
  responses: { 200: TrueSuccessResponse },
})

export const postApiV1LivechatWebhookTestRoute = createRoute({
  method: 'post',
  path: '/api/v1/livechat/webhook.test',
  tags: ['Omnichannel Webhooks'],
  summary: 'Test the Webhook Integration',
  description:
    'This endpoint sends sample data to test whether the [configured webhook URL](https://docs.rocket.chat/docs/webhooks) is functioning correctly. Permission required: `view-livechat-webhooks`.\n\nThe data you can expect on your webhook for this test follows this format:\n```\n{\n  "type": "LivechatSession",\n  "_id": "fasd6f5a4sd6f8a4sdf",\n  "label": "title",\n  "topic": "asiodojf",\n  "createdAt": "2024-09-18T12:22:02.975Z",\n  "lastMessageAt": "2024-09-18T12:22:02.975Z",\n  "tags": [\n    "tag1",\n    "tag2",\n    "tag3"\n  ],\n  "customFields": {\n    "productId": "123456"\n  },\n  "visitor": {\n    "_id": "",\n    "name": "visitor name",\n    "username": "visitor-username",\n    "department": "department",\n    "email": "email@address.com",\n    "phone": "192873192873",\n    "ip": "123.456.7.89",\n    "browser": "Chrome",\n    "os": "Linux",\n    "customFields": {\n      "customerId": "123456"\n    }\n  },\n  "agent": {\n    "_id": "asdf89as6df8",\n    "username": "agent.username",\n    "name": "Agent Name",\n    "email": "agent@email.com"\n  },\n  "messages": [\n    {\n      "username": "visitor-username",\n      "msg": "message content",\n      "ts": "2024-09-18T12:22:02.975Z"\n    },\n    {\n      "username": "agent.username",\n      "agentId": "asdf89as6df8",\n      "msg": "message content from agent",\n      "ts": "2024-09-18T12:22:02.975Z"\n    }\n  ]\n}\n```',
  operationId: 'post-api-v1-livechat-webhook.test',
  request: {
    headers: z.object({ 'X-Auth-Token': AuthTokenParamsSchema, 'X-User-Id': UserIdParamsSchema }),
  },
  responses: { 200: TrueSuccessResponse },
})
