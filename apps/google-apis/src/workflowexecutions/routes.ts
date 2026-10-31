import { createRoute, z } from '@hono/zod-openapi'

const CancelExecutionRequestSchema = z
  .object({})
  .openapi({ description: 'Request for the CancelExecution method.' })
  .openapi('CancelExecutionRequest')

const PositionSchema = z
  .object({
    column: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The source code column position (of the line) the current instruction was generated from.',
      }),
    length: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The number of bytes of source code making up this stack trace element.',
      }),
    line: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The source code line number the current instruction was generated from.',
      }),
  })
  .openapi({
    description:
      'Position contains source position information about the stack trace element such as line number, column number and length of the code block in bytes.',
    required: [],
  })
  .openapi('Position')

const StackTraceElementSchema = z
  .object({
    position: PositionSchema.exactOptional().openapi({
      description: 'The source position information of the stack trace element.',
    }),
    routine: z
      .string()
      .exactOptional()
      .openapi({ description: 'The routine where the error occurred.' }),
    step: z.string().exactOptional().openapi({ description: 'The step the error occurred at.' }),
  })
  .openapi({ description: 'A single stack element (frame) where an error occurred.', required: [] })
  .openapi('StackTraceElement')

const StackTraceSchema = z
  .object({
    elements: z
      .array(StackTraceElementSchema)
      .exactOptional()
      .openapi({ description: 'An array of stack elements.' }),
  })
  .openapi({
    description: 'A collection of stack elements (frames) where an error occurred.',
    required: [],
  })
  .openapi('StackTrace')

const ErrorSchema = z
  .object({
    context: z
      .string()
      .exactOptional()
      .openapi({ description: 'Human-readable stack trace string.' }),
    payload: z
      .string()
      .exactOptional()
      .openapi({ description: 'Error message and data returned represented as a JSON string.' }),
    stackTrace: StackTraceSchema.exactOptional().openapi({
      description: 'Stack trace with detailed information of where error was generated.',
    }),
  })
  .openapi({
    description: 'Error describes why the execution was abnormally terminated.',
    required: [],
  })
  .openapi('Error')

const StepSchema = z
  .object({
    routine: z
      .string()
      .exactOptional()
      .openapi({ description: 'Name of a routine within the workflow.' }),
    step: z.string().exactOptional().openapi({ description: 'Name of a step within the routine.' }),
  })
  .openapi({
    description: 'Represents a step of the workflow this execution is running.',
    required: [],
  })
  .openapi('Step')

const StatusSchema = z
  .object({
    currentSteps: z
      .array(StepSchema)
      .exactOptional()
      .openapi({
        description:
          'A list of currently executing or last executed step names for the workflow execution currently running. If the workflow has succeeded or failed, this is the last attempted or executed step. Presently, if the current step is inside a subworkflow, the list only includes that step. In the future, the list will contain items for each step in the call stack, starting with the outermost step in the `main` subworkflow, and ending with the most deeply nested step.',
      }),
  })
  .openapi({ description: 'Represents the current status of this execution.', required: [] })
  .openapi('Status')

const ExecutionSchema = z
  .object({
    argument: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Input parameters of the execution represented as a JSON string. The size limit is 32KB. *Note*: If you are using the REST API directly to run your workflow, you must escape any JSON string value of `argument`. Example: `\'{"argument":"{\\"firstName\\":\\"FIRST\\",\\"lastName\\":\\"LAST\\"}"}\'`',
      }),
    callLogLevel: z
      .enum(['CALL_LOG_LEVEL_UNSPECIFIED', 'LOG_ALL_CALLS', 'LOG_ERRORS_ONLY'])
      .exactOptional()
      .openapi({ description: 'The call logging level associated to this execution.' }),
    endTime: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Output only. Marks the end of execution, successful or not.',
        readOnly: true,
      }),
    error: ErrorSchema.exactOptional().openapi({
      description:
        "Output only. The error which caused the execution to finish prematurely. The value is only present if the execution's state is `FAILED` or `CANCELLED`.",
      readOnly: true,
    }),
    name: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Output only. The resource name of the execution. Format: projects/{project}/locations/{location}/workflows/{workflow}/executions/{execution}',
        readOnly: true,
      }),
    result: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "Output only. Output of the execution represented as a JSON string. The value can only be present if the execution's state is `SUCCEEDED`.",
        readOnly: true,
      }),
    startTime: z
      .string()
      .exactOptional()
      .openapi({ description: 'Output only. Marks the beginning of execution.', readOnly: true }),
    state: z
      .enum(['STATE_UNSPECIFIED', 'ACTIVE', 'SUCCEEDED', 'FAILED', 'CANCELLED'])
      .exactOptional()
      .openapi({ description: 'Output only. Current state of the execution.', readOnly: true }),
    status: StatusSchema.exactOptional().openapi({
      description:
        'Output only. Status tracks the current steps and progress data of this execution.',
      readOnly: true,
    }),
    workflowRevisionId: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Output only. Revision of the workflow this execution is using.',
        readOnly: true,
      }),
  })
  .openapi({
    description:
      'A running instance of a [Workflow](/workflows/docs/reference/rest/v1beta/projects.locations.workflows).',
    required: [],
  })
  .openapi('Execution')

const ListExecutionsResponseSchema = z
  .object({
    executions: z
      .array(ExecutionSchema)
      .exactOptional()
      .openapi({ description: 'The executions which match the request.' }),
    nextPageToken: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'A token, which can be sent as `page_token` to retrieve the next page. If this field is omitted, there are no subsequent pages.',
      }),
  })
  .openapi({ description: 'Response for the ListExecutions method.', required: [] })
  .openapi('ListExecutionsResponse')

const XgafvParamsSchema = z
  .enum(['1', '2'])
  .exactOptional()
  .openapi({
    param: {
      description: 'V1 error format.',
      in: 'query',
      name: '$.xgafv',
      schema: { enum: ['1', '2'], type: 'string' },
      required: false,
    },
  })

const AccessTokenParamsSchema = z
  .string()
  .exactOptional()
  .openapi({
    param: {
      description: 'OAuth access token.',
      in: 'query',
      name: 'access_token',
      schema: { type: 'string' },
      required: false,
    },
  })

const AltParamsSchema = z
  .enum(['json', 'media', 'proto'])
  .exactOptional()
  .openapi({
    param: {
      description: 'Data format for response.',
      in: 'query',
      name: 'alt',
      schema: { enum: ['json', 'media', 'proto'], type: 'string' },
      required: false,
    },
  })

const CallbackParamsSchema = z
  .string()
  .exactOptional()
  .openapi({
    param: {
      description: 'JSONP',
      in: 'query',
      name: 'callback',
      schema: { type: 'string' },
      required: false,
    },
  })

const FieldsParamsSchema = z
  .string()
  .exactOptional()
  .openapi({
    param: {
      description: 'Selector specifying which fields to include in a partial response.',
      in: 'query',
      name: 'fields',
      schema: { type: 'string' },
      required: false,
    },
  })

const KeyParamsSchema = z
  .string()
  .exactOptional()
  .openapi({
    param: {
      description:
        'API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.',
      in: 'query',
      name: 'key',
      schema: { type: 'string' },
      required: false,
    },
  })

const OauthTokenParamsSchema = z
  .string()
  .exactOptional()
  .openapi({
    param: {
      description: 'OAuth 2.0 token for the current user.',
      in: 'query',
      name: 'oauth_token',
      schema: { type: 'string' },
      required: false,
    },
  })

const PrettyPrintParamsSchema = z
  .stringbool()
  .exactOptional()
  .openapi({
    param: {
      description: 'Returns response with indentations and line breaks.',
      in: 'query',
      name: 'prettyPrint',
      schema: { type: 'boolean' },
      required: false,
    },
  })

const QuotaUserParamsSchema = z
  .string()
  .exactOptional()
  .openapi({
    param: {
      description:
        'Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.',
      in: 'query',
      name: 'quotaUser',
      schema: { type: 'string' },
      required: false,
    },
  })

const UploadTypeParamsSchema = z
  .string()
  .exactOptional()
  .openapi({
    param: {
      description: 'Legacy upload protocol for media (e.g. "media", "multipart").',
      in: 'query',
      name: 'uploadType',
      schema: { type: 'string' },
      required: false,
    },
  })

const UploadProtocolParamsSchema = z
  .string()
  .exactOptional()
  .openapi({
    param: {
      description: 'Upload protocol for media (e.g. "raw", "multipart").',
      in: 'query',
      name: 'upload_protocol',
      schema: { type: 'string' },
      required: false,
    },
  })

const Oauth2SecurityScheme = {
  description: 'Oauth 2.0 implicit authentication',
  flows: {
    implicit: {
      authorizationUrl: 'https://accounts.google.com/o/oauth2/auth',
      scopes: {
        'https://www.googleapis.com/auth/cloud-platform':
          'See, edit, configure, and delete your Google Cloud data and see the email address for your Google Account.',
      },
    },
  },
  type: 'oauth2',
}

const Oauth2cSecurityScheme = {
  description: 'Oauth 2.0 authorizationCode authentication',
  flows: {
    authorizationCode: {
      authorizationUrl: 'https://accounts.google.com/o/oauth2/auth',
      scopes: {
        'https://www.googleapis.com/auth/cloud-platform':
          'See, edit, configure, and delete your Google Cloud data and see the email address for your Google Account.',
      },
      tokenUrl: 'https://accounts.google.com/o/oauth2/token',
    },
  },
  type: 'oauth2',
}

export const getV1betaNameRoute = createRoute({
  method: 'get',
  path: '/v1beta/{name}',
  tags: ['projects'],
  description: 'Returns an execution of the given name.',
  operationId: 'workflowexecutions.projects.locations.workflows.executions.get',
  request: {
    query: z.object({
      '$.xgafv': XgafvParamsSchema,
      access_token: AccessTokenParamsSchema,
      alt: AltParamsSchema,
      callback: CallbackParamsSchema,
      fields: FieldsParamsSchema,
      key: KeyParamsSchema,
      oauth_token: OauthTokenParamsSchema,
      prettyPrint: PrettyPrintParamsSchema,
      quotaUser: QuotaUserParamsSchema,
      upload_protocol: UploadProtocolParamsSchema,
      uploadType: UploadTypeParamsSchema,
      view: z
        .enum(['EXECUTION_VIEW_UNSPECIFIED', 'BASIC', 'FULL'])
        .exactOptional()
        .openapi({
          param: {
            description:
              'Optional. A view defining which fields should be filled in the returned execution. The API will default to the FULL view.',
            in: 'query',
            name: 'view',
            schema: { enum: ['EXECUTION_VIEW_UNSPECIFIED', 'BASIC', 'FULL'], type: 'string' },
            required: false,
          },
        }),
    }),
    params: z.object({
      name: z
        .string()
        .openapi({
          param: {
            description:
              'Required. Name of the execution to be retrieved. Format: projects/{project}/locations/{location}/workflows/{workflow}/executions/{execution}',
            in: 'path',
            name: 'name',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: ExecutionSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
  ],
})

export const postV1betaNameCancelRoute = createRoute({
  method: 'post',
  path: '/v1beta/{name}:cancel',
  tags: ['projects'],
  description: 'Cancels an execution of the given name.',
  operationId: 'workflowexecutions.projects.locations.workflows.executions.cancel',
  request: {
    query: z.object({
      '$.xgafv': XgafvParamsSchema,
      access_token: AccessTokenParamsSchema,
      alt: AltParamsSchema,
      callback: CallbackParamsSchema,
      fields: FieldsParamsSchema,
      key: KeyParamsSchema,
      oauth_token: OauthTokenParamsSchema,
      prettyPrint: PrettyPrintParamsSchema,
      quotaUser: QuotaUserParamsSchema,
      upload_protocol: UploadProtocolParamsSchema,
      uploadType: UploadTypeParamsSchema,
    }),
    params: z.object({
      name: z
        .string()
        .openapi({
          param: {
            description:
              'Required. Name of the execution to be cancelled. Format: projects/{project}/locations/{location}/workflows/{workflow}/executions/{execution}',
            in: 'path',
            name: 'name',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: CancelExecutionRequestSchema } } },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: ExecutionSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
  ],
})

export const getV1betaParentExecutionsRoute = createRoute({
  method: 'get',
  path: '/v1beta/{parent}/executions',
  tags: ['projects'],
  description:
    'Returns a list of executions which belong to the workflow with the given name. The method returns executions of all workflow revisions. Returned executions are ordered by their start time (newest first).',
  operationId: 'workflowexecutions.projects.locations.workflows.executions.list',
  request: {
    query: z.object({
      '$.xgafv': XgafvParamsSchema,
      access_token: AccessTokenParamsSchema,
      alt: AltParamsSchema,
      callback: CallbackParamsSchema,
      fields: FieldsParamsSchema,
      key: KeyParamsSchema,
      oauth_token: OauthTokenParamsSchema,
      prettyPrint: PrettyPrintParamsSchema,
      quotaUser: QuotaUserParamsSchema,
      upload_protocol: UploadProtocolParamsSchema,
      uploadType: UploadTypeParamsSchema,
      pageSize: z
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
              "Maximum number of executions to return per call. Max supported value depends on the selected Execution view: it's 10000 for BASIC and 100 for FULL. The default value used if the field is not specified is 100, regardless of the selected view. Values greater than the max value will be coerced down to it.",
            in: 'query',
            name: 'pageSize',
            schema: { type: 'integer' },
            required: false,
          },
        }),
      pageToken: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'A page token, received from a previous `ListExecutions` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListExecutions` must match the call that provided the page token.',
            in: 'query',
            name: 'pageToken',
            schema: { type: 'string' },
            required: false,
          },
        }),
      view: z
        .enum(['EXECUTION_VIEW_UNSPECIFIED', 'BASIC', 'FULL'])
        .exactOptional()
        .openapi({
          param: {
            description:
              'Optional. A view defining which fields should be filled in the returned executions. The API will default to the BASIC view.',
            in: 'query',
            name: 'view',
            schema: { enum: ['EXECUTION_VIEW_UNSPECIFIED', 'BASIC', 'FULL'], type: 'string' },
            required: false,
          },
        }),
    }),
    params: z.object({
      parent: z
        .string()
        .openapi({
          param: {
            description:
              'Required. Name of the workflow for which the executions should be listed. Format: projects/{project}/locations/{location}/workflows/{workflow}',
            in: 'path',
            name: 'parent',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: ListExecutionsResponseSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
  ],
})

export const postV1betaParentExecutionsRoute = createRoute({
  method: 'post',
  path: '/v1beta/{parent}/executions',
  tags: ['projects'],
  description: 'Creates a new execution using the latest revision of the given workflow.',
  operationId: 'workflowexecutions.projects.locations.workflows.executions.create',
  request: {
    query: z.object({
      '$.xgafv': XgafvParamsSchema,
      access_token: AccessTokenParamsSchema,
      alt: AltParamsSchema,
      callback: CallbackParamsSchema,
      fields: FieldsParamsSchema,
      key: KeyParamsSchema,
      oauth_token: OauthTokenParamsSchema,
      prettyPrint: PrettyPrintParamsSchema,
      quotaUser: QuotaUserParamsSchema,
      upload_protocol: UploadProtocolParamsSchema,
      uploadType: UploadTypeParamsSchema,
    }),
    params: z.object({
      parent: z
        .string()
        .openapi({
          param: {
            description:
              'Required. Name of the workflow for which an execution should be created. Format: projects/{project}/locations/{location}/workflows/{workflow} The latest revision of the workflow will be used.',
            in: 'path',
            name: 'parent',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: ExecutionSchema } } },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: ExecutionSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
  ],
})
