import { createRoute, z } from '@hono/zod-openapi'

const OperatorSchema = z
  .enum([
    'is',
    'in',
    'match',
    'less',
    'greater',
    'matchesIPv4',
    'matchesIPv6',
    '!is',
    '!in',
    '!match',
    '!less',
    '!greater',
    '!matchesIPv4',
    '!matchesIPv6',
  ])
  .openapi('Operator')

const CheckSchema = z
  .object({ class: z.string().min(1), value: z.string(), operator: OperatorSchema })
  .openapi({ required: ['class', 'value', 'operator'] })
  .openapi('Check')

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

const RuleSchema = z
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
    class: z.string().min(1),
    name: z.string(),
    checks: z.array(CheckSchema),
    operation: z.string(),
    entity: z.string().min(1),
    events: z.array(z.string().min(1)),
  })
  .openapi({ required: ['id', 'class', 'name', 'checks', 'operation', 'entity', 'events'] })
  .openapi('Rule')

const BasicAuthSecurityScheme = { type: 'http', scheme: 'basic' }

const BearerAuthSecurityScheme = { type: 'http', scheme: 'bearer' }

export const getOcsV2PhpAppsWorkflowengineApiV1WorkflowsGlobalRoute = createRoute({
  method: 'get',
  path: '/ocs/v2.php/apps/workflowengine/api/v1/workflows/global',
  tags: ['global_workflows'],
  summary: 'Retrieve all configured workflow rules',
  description: 'This endpoint requires admin access',
  operationId: 'global_workflows-index',
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
      description: 'List of workflows returned',
      content: {
        'application/json': {
          schema: z
            .object({
              ocs: z
                .object({ meta: OCSMetaSchema, data: z.record(z.string(), z.array(RuleSchema)) })
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

export const postOcsV2PhpAppsWorkflowengineApiV1WorkflowsGlobalRoute = createRoute({
  method: 'post',
  path: '/ocs/v2.php/apps/workflowengine/api/v1/workflows/global',
  tags: ['global_workflows'],
  summary: 'Create a workflow',
  description: 'This endpoint requires admin access\nThis endpoint requires password confirmation',
  operationId: 'global_workflows-create',
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
              class: z.string().min(1).openapi({ description: 'Operation class to execute' }),
              name: z.string().openapi({ description: 'Name of the workflow rule' }),
              checks: z
                .array(CheckSchema)
                .openapi({
                  description: 'List of conditions that need to apply for the rule to match',
                }),
              operation: z.string().openapi({ description: 'Operation class to execute on match' }),
              entity: z.string().openapi({ description: 'The matched entity' }),
              events: z
                .array(z.string().min(1))
                .openapi({
                  description: 'The list of events on which the rule should be validated',
                }),
            })
            .openapi({ required: ['class', 'name', 'checks', 'operation', 'entity', 'events'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Workflow created',
      content: {
        'application/json': {
          schema: z
            .object({
              ocs: z
                .object({ meta: OCSMetaSchema, data: RuleSchema })
                .openapi({ required: ['meta', 'data'] }),
            })
            .openapi({ required: ['ocs'] }),
        },
      },
    },
    400: {
      description: 'Thrown when a check or check value is invalid',
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

export const getOcsV2PhpAppsWorkflowengineApiV1WorkflowsGlobalIdRoute = createRoute({
  method: 'get',
  path: '/ocs/v2.php/apps/workflowengine/api/v1/workflows/global/{id}',
  tags: ['global_workflows'],
  summary: 'Retrieve a specific workflow',
  description: 'This endpoint requires admin access',
  operationId: 'global_workflows-show',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            name: 'id',
            in: 'path',
            description: 'Workflow ID to load',
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
      description: 'Workflow returned or empty array if the ID is unknown in the scope',
      content: {
        'application/json': {
          schema: z
            .object({
              ocs: z
                .object({
                  meta: OCSMetaSchema,
                  data: z.union([RuleSchema, z.array(z.any()).max(0)]),
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

export const putOcsV2PhpAppsWorkflowengineApiV1WorkflowsGlobalIdRoute = createRoute({
  method: 'put',
  path: '/ocs/v2.php/apps/workflowengine/api/v1/workflows/global/{id}',
  tags: ['global_workflows'],
  summary: 'Modify a workflow',
  description: 'This endpoint requires admin access\nThis endpoint requires password confirmation',
  operationId: 'global_workflows-update',
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
            description: 'Workflow ID to delete',
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
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              name: z.string().openapi({ description: 'Name of the workflow rule' }),
              checks: z
                .array(CheckSchema)
                .openapi({
                  description: 'List of conditions that need to apply for the rule to match',
                }),
              operation: z
                .string()
                .openapi({ description: 'Operation action to execute on match' }),
              entity: z.string().openapi({ description: 'The matched entity' }),
              events: z
                .array(z.string().min(1))
                .openapi({
                  description: 'The list of events on which the rule should be validated',
                }),
            })
            .openapi({ required: ['name', 'checks', 'operation', 'entity', 'events'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Workflow updated',
      content: {
        'application/json': {
          schema: z
            .object({
              ocs: z
                .object({ meta: OCSMetaSchema, data: RuleSchema })
                .openapi({ required: ['meta', 'data'] }),
            })
            .openapi({ required: ['ocs'] }),
        },
      },
    },
    400: {
      description: 'Thrown when a check or check value is invalid',
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
      description: 'Thrown when workflow is from a different scope',
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

export const deleteOcsV2PhpAppsWorkflowengineApiV1WorkflowsGlobalIdRoute = createRoute({
  method: 'delete',
  path: '/ocs/v2.php/apps/workflowengine/api/v1/workflows/global/{id}',
  tags: ['global_workflows'],
  summary: 'Delete a workflow',
  description: 'This endpoint requires admin access\nThis endpoint requires password confirmation',
  operationId: 'global_workflows-destroy',
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
            description: 'Workflow ID to delete',
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
      description: 'Workflow deleted',
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
      description: 'Thrown when workflow is from a different scope',
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

export const getOcsV2PhpAppsWorkflowengineApiV1WorkflowsUserRoute = createRoute({
  method: 'get',
  path: '/ocs/v2.php/apps/workflowengine/api/v1/workflows/user',
  tags: ['user_workflows'],
  summary: 'Retrieve all configured workflow rules',
  operationId: 'user_workflows-index',
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
      description: 'List of workflows returned',
      content: {
        'application/json': {
          schema: z
            .object({
              ocs: z
                .object({ meta: OCSMetaSchema, data: z.record(z.string(), z.array(RuleSchema)) })
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

export const postOcsV2PhpAppsWorkflowengineApiV1WorkflowsUserRoute = createRoute({
  method: 'post',
  path: '/ocs/v2.php/apps/workflowengine/api/v1/workflows/user',
  tags: ['user_workflows'],
  summary: 'Create a workflow',
  description: 'This endpoint requires password confirmation',
  operationId: 'user_workflows-create',
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
              class: z.string().min(1).openapi({ description: 'Operation class to execute' }),
              name: z.string().openapi({ description: 'Name of the workflow rule' }),
              checks: z
                .array(CheckSchema)
                .openapi({
                  description: 'List of conditions that need to apply for the rule to match',
                }),
              operation: z.string().openapi({ description: 'Operation class to execute on match' }),
              entity: z.string().openapi({ description: 'The matched entity' }),
              events: z
                .array(z.string().min(1))
                .openapi({
                  description: 'The list of events on which the rule should be validated',
                }),
            })
            .openapi({ required: ['class', 'name', 'checks', 'operation', 'entity', 'events'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Workflow created',
      content: {
        'application/json': {
          schema: z
            .object({
              ocs: z
                .object({ meta: OCSMetaSchema, data: RuleSchema })
                .openapi({ required: ['meta', 'data'] }),
            })
            .openapi({ required: ['ocs'] }),
        },
      },
    },
    400: {
      description: 'Thrown when a check or check value is invalid',
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

export const getOcsV2PhpAppsWorkflowengineApiV1WorkflowsUserIdRoute = createRoute({
  method: 'get',
  path: '/ocs/v2.php/apps/workflowengine/api/v1/workflows/user/{id}',
  tags: ['user_workflows'],
  summary: 'Retrieve a specific workflow',
  operationId: 'user_workflows-show',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            name: 'id',
            in: 'path',
            description: 'Workflow ID to load',
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
      description: 'Workflow returned or empty array if the ID is unknown in the scope',
      content: {
        'application/json': {
          schema: z
            .object({
              ocs: z
                .object({
                  meta: OCSMetaSchema,
                  data: z.union([RuleSchema, z.array(z.any()).max(0)]),
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

export const putOcsV2PhpAppsWorkflowengineApiV1WorkflowsUserIdRoute = createRoute({
  method: 'put',
  path: '/ocs/v2.php/apps/workflowengine/api/v1/workflows/user/{id}',
  tags: ['user_workflows'],
  summary: 'Modify a workflow',
  description: 'This endpoint requires password confirmation',
  operationId: 'user_workflows-update',
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
            description: 'Workflow ID to delete',
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
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              name: z.string().openapi({ description: 'Name of the workflow rule' }),
              checks: z
                .array(CheckSchema)
                .openapi({
                  description: 'List of conditions that need to apply for the rule to match',
                }),
              operation: z
                .string()
                .openapi({ description: 'Operation action to execute on match' }),
              entity: z.string().openapi({ description: 'The matched entity' }),
              events: z
                .array(z.string().min(1))
                .openapi({
                  description: 'The list of events on which the rule should be validated',
                }),
            })
            .openapi({ required: ['name', 'checks', 'operation', 'entity', 'events'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Workflow updated',
      content: {
        'application/json': {
          schema: z
            .object({
              ocs: z
                .object({ meta: OCSMetaSchema, data: RuleSchema })
                .openapi({ required: ['meta', 'data'] }),
            })
            .openapi({ required: ['ocs'] }),
        },
      },
    },
    400: {
      description: 'Thrown when a check or check value is invalid',
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
      description: 'Thrown when workflow is from a different scope',
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

export const deleteOcsV2PhpAppsWorkflowengineApiV1WorkflowsUserIdRoute = createRoute({
  method: 'delete',
  path: '/ocs/v2.php/apps/workflowengine/api/v1/workflows/user/{id}',
  tags: ['user_workflows'],
  summary: 'Delete a workflow',
  description: 'This endpoint requires password confirmation',
  operationId: 'user_workflows-destroy',
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
            description: 'Workflow ID to delete',
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
      description: 'Workflow deleted',
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
      description: 'Thrown when workflow is from a different scope',
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
