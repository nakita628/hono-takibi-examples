import { createRoute, z } from '@hono/zod-openapi'

const JsonValueSchema: z.ZodType<JsonValueType> = z
  .lazy(() =>
    z
      .xor([JsonObjectSchema, JsonArraySchema, JsonPrimitiveSchema])
      .openapi({ description: 'A type representing all allowed JSON values.' }),
  )
  .openapi('JsonValue')

type JsonArrayType = z.infer<typeof JsonValueSchema>[]

type JsonObjectType = { [key: string]: unknown }

type JsonPrimitiveType = boolean | number | string | ({ [key: string]: unknown } | null)

const JsonObjectSchema: z.ZodType<JsonObjectType> = z
  .record(z.string(), z.any())
  .openapi({ description: 'A type representing all allowed JSON object values.' })
  .openapi('JsonObject')

const JsonArraySchema: z.ZodType<JsonArrayType> = z
  .lazy(() =>
    z
      .array(JsonValueSchema)
      .openapi({ description: 'A type representing all allowed JSON array values.' }),
  )
  .openapi('JsonArray')

const JsonPrimitiveSchema: z.ZodType<JsonPrimitiveType> = z
  .xor([z.boolean(), z.number(), z.string(), z.null().nullable()])
  .openapi({ description: 'A type representing all allowed JSON primitive values.' })
  .openapi('JsonPrimitive')

type JsonValueType =
  | z.infer<typeof JsonObjectSchema>
  | z.infer<typeof JsonArraySchema>
  | z.infer<typeof JsonPrimitiveSchema>

const ActionExampleSchema = z
  .object({ description: z.string(), example: z.string() })
  .openapi({ required: ['description', 'example'], description: 'A single action example' })
  .openapi('ActionExample')

const ActionSchema = z
  .object({
    id: z.string(),
    description: z.string().exactOptional(),
    examples: z.array(ActionExampleSchema).exactOptional(),
    schema: z
      .object({ input: JsonObjectSchema.exactOptional(), output: JsonObjectSchema.exactOptional() })
      .exactOptional()
      .openapi({ required: [] }),
  })
  .openapi({
    required: ['id'],
    description:
      'The response shape for a single action in the `listActions` call to the `scaffolder-backend`',
  })
  .openapi('Action')

const TaskStatusSchema = z
  .enum(['cancelled', 'completed', 'failed', 'open', 'processing', 'skipped'])
  .openapi({ description: 'The status of each step of the Task' })
  .openapi('TaskStatus')

const SerializedFileSchema = z
  .object({
    path: z.string(),
    content: z.string(),
    executable: z.boolean().exactOptional(),
    symlink: z.boolean().exactOptional(),
  })
  .openapi({ required: ['path', 'content'] })
  .openapi('SerializedFile')

const DryRunResultSchema = z
  .object({
    log: z.array(
      z
        .object({
          body: JsonObjectSchema.and(
            z
              .object({
                message: z.string(),
                status: TaskStatusSchema.exactOptional(),
                stepId: z.string().exactOptional(),
              })
              .openapi({ required: ['message'] }),
          ),
        })
        .openapi({ required: ['body'] }),
    ),
    directoryContents: z.array(SerializedFileSchema),
    output: JsonObjectSchema,
  })
  .openapi({ required: ['log', 'directoryContents', 'output'] })
  .openapi('DryRunResult')

const ErrorSchema = z
  .object({
    error: z
      .object({
        name: z.string(),
        message: z.string(),
        stack: z.string().exactOptional(),
        code: z.string().exactOptional(),
      })
      .openapi({ required: ['name', 'message'] }),
    request: z
      .object({ method: z.string(), url: z.string() })
      .exactOptional()
      .openapi({ required: ['method', 'url'] }),
    response: z.object({ statusCode: z.number() }).openapi({ required: ['statusCode'] }),
  })
  .catchall(z.any())
  .openapi({ required: ['error', 'response'] })
  .openapi('Error')

const ListActionsResponseSchema = z
  .array(ActionSchema)
  .openapi({
    description: 'The response shape for the `listActions` call to the `scaffolder-backend`',
  })
  .openapi('ListActionsResponse')

const SerializedTaskSchema = z
  .object({
    id: z.string(),
    spec: z.object({}),
    status: TaskStatusSchema,
    createdAt: z.string(),
    lastHeartbeatAt: z.string().exactOptional(),
    createdBy: z.string().exactOptional(),
  })
  .openapi({ required: ['id', 'spec', 'status', 'createdAt'], description: 'SerializedTask' })
  .openapi('SerializedTask')

const ListTasksResponseSchema = z
  .object({ tasks: z.array(SerializedTaskSchema), totalTasks: z.number().exactOptional() })
  .openapi({
    required: ['tasks'],
    description: 'The response shape for the `listTasks` call to the `scaffolder-backend`',
  })
  .openapi('ListTasksResponse')

const ScaffolderUsageExampleSchema = z
  .object({
    description: z.string().exactOptional(),
    example: z.string(),
    notes: z.string().exactOptional(),
  })
  .openapi({ required: ['example'], description: 'A single scaffolder usage example' })
  .openapi('ScaffolderUsageExample')

const TemplateFilterSchema = z
  .object({
    description: z.string().exactOptional(),
    schema: z
      .object({
        input: JsonObjectSchema.exactOptional(),
        arguments: z.array(JsonObjectSchema).exactOptional(),
        output: JsonObjectSchema.exactOptional(),
      })
      .exactOptional()
      .openapi({ required: [] }),
    examples: z.array(ScaffolderUsageExampleSchema).exactOptional(),
  })
  .openapi({
    description:
      'The response shape for a single filter in the `listTemplatingExtensions` call to the `scaffolder-backend`',
    required: [],
  })
  .openapi('TemplateFilter')

const TemplateGlobalFunctionSchema = z
  .object({
    description: z.string().exactOptional(),
    schema: z
      .object({
        arguments: z.array(JsonObjectSchema).exactOptional(),
        output: JsonObjectSchema.exactOptional(),
      })
      .exactOptional()
      .openapi({ required: [] }),
    examples: z.array(ScaffolderUsageExampleSchema).exactOptional(),
  })
  .openapi({
    description:
      'The response shape for a single global function in the `listTemplatingExtensions` call to the `scaffolder-backend`',
    required: [],
  })
  .openapi('TemplateGlobalFunction')

const TemplateGlobalValueSchema = z
  .object({
    description: z.string().exactOptional(),
    value: z.union([z.object({}), z.null().nullable()]),
  })
  .openapi({
    required: ['value'],
    description:
      'The response shape for a single global value in the `listTemplatingExtensions` call to the `scaffolder-backend`',
  })
  .openapi('TemplateGlobalValue')

const ListTemplatingExtensionsResponseSchema = z
  .object({
    filters: z.record(z.string(), TemplateFilterSchema),
    globals: z
      .object({
        functions: z.record(z.string(), TemplateGlobalFunctionSchema),
        values: z.record(z.string(), TemplateGlobalValueSchema),
      })
      .openapi({ required: ['functions', 'values'] }),
  })
  .openapi({
    required: ['filters', 'globals'],
    description:
      'The response shape for the `listTemplatingExtensions` call to the `scaffolder-backend`',
  })
  .openapi('ListTemplatingExtensionsResponse')

const ScaffolderScaffoldOptionsSchema = z
  .object({
    templateRef: z.string(),
    values: z.record(z.string(), z.any()),
    secrets: z.record(z.string(), z.string()).exactOptional(),
  })
  .openapi({
    required: ['templateRef', 'values'],
    description: 'The input options to the `scaffold` method of the `ScaffolderClient`.',
  })
  .openapi('ScaffolderScaffoldOptions')

const TaskEventTypeSchema = z
  .enum(['cancelled', 'completion', 'log', 'recovered'])
  .openapi({ description: 'TaskEventType' })
  .openapi('TaskEventType')

const SerializedTaskEventSchema = z
  .object({
    id: z.int(),
    isTaskRecoverable: z.boolean().exactOptional(),
    taskId: z.string(),
    body: JsonObjectSchema.and(
      z
        .object({
          message: z.string(),
          status: TaskStatusSchema.exactOptional(),
          stepId: z.string().exactOptional(),
        })
        .openapi({ required: ['message'] }),
    ),
    type: TaskEventTypeSchema,
    createdAt: z.string(),
  })
  .openapi({
    required: ['id', 'taskId', 'body', 'type', 'createdAt'],
    description: 'SerializedTaskEvent',
  })
  .openapi('SerializedTaskEvent')

const TaskSecretsSchema = z
  .record(z.string(), z.string())
  .and(z.object({ backstageToken: z.string().exactOptional() }).openapi({ required: [] }))
  .openapi({ description: 'TaskSecrets' })
  .openapi('TaskSecrets')

const TemplateParameterSchemaSchema = z
  .object({
    title: z.string(),
    description: z.string().exactOptional(),
    steps: z.array(
      z
        .object({
          title: z.string(),
          description: z.string().exactOptional(),
          schema: z.object({}),
        })
        .openapi({ required: ['title', 'schema'] }),
    ),
  })
  .catchall(z.any())
  .openapi({
    required: ['title', 'steps'],
    description:
      'The shape of each entry of parameters which gets rendered\nas a separate step in the wizard input',
  })
  .openapi('TemplateParameterSchema')

const ValidationErrorSchema = z
  .object({
    path: z.array(z.xor([z.string(), z.int()])),
    property: z.string(),
    message: z.string(),
    instance: z.object({}),
    name: z.string(),
    argument: z.xor([z.boolean(), z.number(), z.object({}), z.string()]),
    stack: z.string(),
  })
  .catchall(z.any())
  .openapi({
    required: ['path', 'property', 'message', 'schema', 'instance', 'name', 'argument', 'stack'],
  })
  .openapi('ValidationError')

const ErrorResponseResponse = {
  description: 'An error response from the backend.',
  content: { 'application/json; charset=utf-8': { schema: ErrorSchema } },
}

const CreatedByParamsSchema = z
  .preprocess((val) => (val === undefined || Array.isArray(val) ? val : [val]), z.array(z.string()))
  .exactOptional()
  .openapi({
    param: {
      name: 'createdBy',
      in: 'query',
      description: 'Created by',
      required: false,
      allowReserved: true,
      schema: { type: 'array', items: { type: 'string' } },
    },
  })

const EventsAfterParamsSchema = z
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
      name: 'after',
      in: 'query',
      description: 'Offset event ID to stream events after.',
      required: false,
      allowReserved: true,
      schema: { type: 'integer' },
    },
  })

const KindParamsSchema = z
  .string()
  .openapi({ param: { name: 'kind', in: 'path', required: true, schema: { type: 'string' } } })

const LimitParamsSchema = z
  .preprocess(
    (val) =>
      typeof val === 'string' &&
      /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
      (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
        ? Number(val)
        : val,
    z.int().min(0),
  )
  .exactOptional()
  .openapi({
    param: {
      name: 'limit',
      in: 'query',
      description: 'Number of records to return in the response.',
      required: false,
      allowReserved: true,
      schema: { type: 'integer', minimum: 0 },
    },
  })

const NamespaceParamsSchema = z
  .string()
  .openapi({ param: { name: 'namespace', in: 'path', required: true, schema: { type: 'string' } } })

const NameParamsSchema = z
  .string()
  .openapi({ param: { name: 'name', in: 'path', required: true, schema: { type: 'string' } } })

const OffsetParamsSchema = z
  .preprocess(
    (val) =>
      typeof val === 'string' &&
      /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
      (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
        ? Number(val)
        : val,
    z.int().min(0),
  )
  .exactOptional()
  .openapi({
    param: {
      name: 'offset',
      in: 'query',
      description: 'Number of records to skip in the query page.',
      required: false,
      allowReserved: true,
      schema: { type: 'integer', minimum: 0 },
    },
  })

const OrderParamsSchema = z
  .preprocess((val) => (val === undefined || Array.isArray(val) ? val : [val]), z.array(z.string()))
  .exactOptional()
  .openapi({
    param: {
      name: 'order',
      in: 'query',
      description: 'Order',
      required: false,
      allowReserved: true,
      schema: { type: 'array', items: { type: 'string' } },
    },
  })

const StatusParamsSchema = z
  .preprocess((val) => (val === undefined || Array.isArray(val) ? val : [val]), z.array(z.string()))
  .exactOptional()
  .openapi({
    param: {
      name: 'status',
      in: 'query',
      description: 'Status',
      required: false,
      allowReserved: true,
      schema: { type: 'array', items: { type: 'string' } },
    },
  })

const TaskIdParamsSchema = z
  .string()
  .openapi({ param: { name: 'taskId', in: 'path', required: true, schema: { type: 'string' } } })

const JWTSecurityScheme = { type: 'http', scheme: 'bearer', bearerFormat: 'JWT' }

export const getV2TemplatesNamespaceKindNameParameterSchemaRoute = createRoute({
  method: 'get',
  path: '/v2/templates/{namespace}/{kind}/{name}/parameter-schema',
  tags: ['Templates'],
  description: 'Get template parameter schema.',
  operationId: 'GetTemplateParameterSchema',
  request: {
    params: z.object({
      namespace: NamespaceParamsSchema,
      kind: KindParamsSchema,
      name: NameParamsSchema,
    }),
  },
  responses: {
    200: {
      description: 'Ok',
      content: { 'application/json': { schema: TemplateParameterSchemaSchema } },
    },
    400: ErrorResponseResponse,
    default: ErrorResponseResponse,
  },
  security: [{}, { JWT: [] }],
})

export const getV2ActionsRoute = createRoute({
  method: 'get',
  path: '/v2/actions',
  tags: ['Actions'],
  description: 'Returns a list of all installed actions.',
  operationId: 'ListActions',
  responses: {
    200: {
      description: 'Ok',
      content: { 'application/json': { schema: ListActionsResponseSchema } },
    },
  },
  security: [{}, { JWT: [] }],
})

export const getV2TasksRoute = createRoute({
  method: 'get',
  path: '/v2/tasks',
  tags: ['Tasks'],
  description: 'Returns a list of tasks, filtering by ownership and/or status if given.',
  operationId: 'ListTasks',
  request: {
    query: z.object({
      createdBy: CreatedByParamsSchema,
      limit: LimitParamsSchema,
      offset: OffsetParamsSchema,
      order: OrderParamsSchema,
      status: StatusParamsSchema,
    }),
  },
  responses: {
    200: {
      description: 'Ok',
      content: { 'application/json': { schema: ListTasksResponseSchema } },
    },
    400: ErrorResponseResponse,
  },
  security: [{}, { JWT: [] }],
})

export const postV2TasksRoute = createRoute({
  method: 'post',
  path: '/v2/tasks',
  tags: ['Tasks'],
  description:
    'Executes the scaffolding of a component, given a template and its\nparameter values.',
  operationId: 'Scaffold',
  request: {
    body: {
      content: { 'application/json': { schema: ScaffolderScaffoldOptionsSchema } },
      required: true,
    },
  },
  responses: {
    201: {
      description: 'Created',
      content: {
        'application/json': { schema: z.object({ id: z.string() }).openapi({ required: ['id'] }) },
      },
    },
    400: {
      description: 'Validation errors.',
      content: {
        'application/json': {
          schema: z
            .object({ errors: z.array(ValidationErrorSchema) })
            .openapi({ required: ['errors'] }),
        },
      },
    },
  },
  security: [{}, { JWT: [] }],
})

export const getV2TasksTaskIdRoute = createRoute({
  method: 'get',
  path: '/v2/tasks/{taskId}',
  tags: ['Tasks'],
  description: 'Get a task by ID.',
  operationId: 'GetTask',
  request: { params: z.object({ taskId: TaskIdParamsSchema }) },
  responses: {
    200: { description: 'Ok', content: { 'application/json': { schema: SerializedTaskSchema } } },
    403: ErrorResponseResponse,
  },
  security: [{}, { JWT: [] }],
})

export const postV2TasksTaskIdCancelRoute = createRoute({
  method: 'post',
  path: '/v2/tasks/{taskId}/cancel',
  tags: ['Tasks'],
  description: 'Sends a signal to a task broker to cancel the running task by taskId.',
  operationId: 'CancelTask',
  request: { params: z.object({ taskId: TaskIdParamsSchema }) },
  responses: {
    200: {
      description: 'Ok',
      content: {
        'application/json': {
          schema: z.object({ status: TaskStatusSchema.exactOptional() }).openapi({ required: [] }),
        },
      },
    },
  },
  security: [{}, { JWT: [] }],
})

export const postV2TasksTaskIdRetryRoute = createRoute({
  method: 'post',
  path: '/v2/tasks/{taskId}/retry',
  tags: ['Tasks'],
  description: 'Starts the task again from the point where it failed.',
  operationId: 'Retry',
  request: {
    params: z.object({ taskId: TaskIdParamsSchema }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({ secrets: z.record(z.string(), z.string()).exactOptional() })
            .openapi({ required: [] }),
        },
      },
    },
  },
  responses: {
    201: {
      description: 'Ok',
      content: {
        'application/json': { schema: z.object({ id: z.string() }).openapi({ required: ['id'] }) },
      },
    },
    400: {
      description: 'Validation errors.',
      content: {
        'application/json': {
          schema: z
            .object({ errors: z.array(ValidationErrorSchema) })
            .openapi({ required: ['errors'] }),
        },
      },
    },
    409: ErrorResponseResponse,
  },
  security: [{}, { JWT: [] }],
})

export const getV2TasksTaskIdEventsRoute = createRoute({
  method: 'get',
  path: '/v2/tasks/{taskId}/events',
  tags: ['Tasks'],
  description: 'Get events for a task by ID.',
  operationId: 'StreamLogsPolling',
  request: {
    query: z.object({ after: EventsAfterParamsSchema }),
    params: z.object({ taskId: TaskIdParamsSchema }),
  },
  responses: {
    200: {
      description: 'Ok',
      content: { 'application/json': { schema: z.array(SerializedTaskEventSchema) } },
    },
    403: ErrorResponseResponse,
  },
})

export const postV2DryRunRoute = createRoute({
  method: 'post',
  path: '/v2/dry-run',
  tags: ['Templates'],
  description: 'Perform a dry-run of a template',
  operationId: 'DryRun',
  request: {
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              template: z.object({}),
              values: JsonObjectSchema,
              secrets: z.record(z.string(), z.string()).exactOptional(),
              directoryContents: z.array(
                z
                  .object({
                    path: z.string().exactOptional(),
                    base64Content: z.string().exactOptional(),
                  })
                  .openapi({ required: [] }),
              ),
            })
            .openapi({ required: ['template', 'values', 'directoryContents'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Ok',
      content: {
        'application/json': {
          schema: DryRunResultSchema.and(
            z
              .object({
                steps: z.array(
                  z
                    .object({ id: z.string(), name: z.string(), action: z.string() })
                    .catchall(z.any())
                    .openapi({ required: ['id', 'name', 'action'] }),
                ),
                directoryContents: z
                  .array(
                    z
                      .object({
                        path: z.string(),
                        executable: z.boolean().exactOptional(),
                        base64Content: z.string(),
                      })
                      .openapi({ required: ['path', 'base64Content'] }),
                  )
                  .exactOptional(),
              })
              .openapi({ required: ['steps'] }),
          ),
        },
      },
    },
    400: {
      description: 'Validation errors.',
      content: {
        'application/json': {
          schema: z
            .object({ errors: z.array(ValidationErrorSchema) })
            .openapi({ required: ['errors'] }),
        },
      },
    },
  },
})

export const postV2AutocompleteProviderResourceRoute = createRoute({
  method: 'post',
  path: '/v2/autocomplete/{provider}/{resource}',
  tags: ['Autocomplete providers'],
  description: 'Perform an autocomplete for the given provider and resource.',
  operationId: 'Autocomplete',
  request: {
    params: z.object({
      provider: z
        .string()
        .openapi({
          param: { in: 'path', name: 'provider', required: true, schema: { type: 'string' } },
        }),
      resource: z
        .string()
        .openapi({
          param: { in: 'path', name: 'resource', required: true, schema: { type: 'string' } },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({ context: z.record(z.string(), z.string()), token: z.string() })
            .openapi({ required: ['context', 'token'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Ok',
      content: {
        'application/json': {
          schema: z
            .object({
              results: z.array(
                z
                  .object({ title: z.string().exactOptional(), id: z.string() })
                  .openapi({ required: ['id'] }),
              ),
            })
            .openapi({ required: ['results'] }),
        },
      },
    },
    400: {
      description: 'Unsupported provider.',
      content: {
        'application/json': {
          schema: z
            .object({ message: z.string().exactOptional(), name: z.string().exactOptional() })
            .openapi({ required: [] }),
        },
      },
    },
  },
})

export const getV2TemplatingExtensionsRoute = createRoute({
  method: 'get',
  path: '/v2/templating-extensions',
  tags: ['Templating extensions'],
  description: 'Returns a structure describing the available templating extensions.',
  operationId: 'ListTemplatingExtensions',
  responses: {
    200: {
      description: 'Ok',
      content: { 'application/json': { schema: ListTemplatingExtensionsResponseSchema } },
    },
  },
  security: [{}, { JWT: [] }],
})
