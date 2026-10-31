import { createRoute, z } from '@hono/zod-openapi'

const GoogleAppsScriptTypeAddOnEntryPointSchema = z
  .object({
    addOnType: z
      .enum(['UNKNOWN_ADDON_TYPE', 'GMAIL', 'DATA_STUDIO'])
      .exactOptional()
      .openapi({ description: "The add-on's required list of supported container types." }),
    description: z
      .string()
      .exactOptional()
      .openapi({ description: "The add-on's optional description." }),
    helpUrl: z.string().exactOptional().openapi({ description: "The add-on's optional help URL." }),
    postInstallTipUrl: z
      .string()
      .exactOptional()
      .openapi({ description: "The add-on's required post install tip URL." }),
    reportIssueUrl: z
      .string()
      .exactOptional()
      .openapi({ description: "The add-on's optional report issue URL." }),
    title: z.string().exactOptional().openapi({ description: "The add-on's required title." }),
  })
  .openapi({ description: 'An add-on entry point.', required: [] })
  .openapi('GoogleAppsScriptTypeAddOnEntryPoint')

const GoogleAppsScriptTypeExecutionApiConfigSchema = z
  .object({
    access: z
      .enum(['UNKNOWN_ACCESS', 'MYSELF', 'DOMAIN', 'ANYONE', 'ANYONE_ANONYMOUS'])
      .exactOptional()
      .openapi({ description: 'Who has permission to run the API executable.' }),
  })
  .openapi({ description: 'API executable entry point configuration.', required: [] })
  .openapi('GoogleAppsScriptTypeExecutionApiConfig')

const GoogleAppsScriptTypeExecutionApiEntryPointSchema = z
  .object({
    entryPointConfig: GoogleAppsScriptTypeExecutionApiConfigSchema.exactOptional().openapi({
      description: "The entry point's configuration.",
    }),
  })
  .openapi({ description: 'An API executable entry point.', required: [] })
  .openapi('GoogleAppsScriptTypeExecutionApiEntryPoint')

const GoogleAppsScriptTypeWebAppConfigSchema = z
  .object({
    access: z
      .enum(['UNKNOWN_ACCESS', 'MYSELF', 'DOMAIN', 'ANYONE', 'ANYONE_ANONYMOUS'])
      .exactOptional()
      .openapi({ description: 'Who has permission to run the web app.' }),
    executeAs: z
      .enum(['UNKNOWN_EXECUTE_AS', 'USER_ACCESSING', 'USER_DEPLOYING'])
      .exactOptional()
      .openapi({ description: 'Who to execute the web app as.' }),
  })
  .openapi({ description: 'Web app entry point configuration.', required: [] })
  .openapi('GoogleAppsScriptTypeWebAppConfig')

const GoogleAppsScriptTypeWebAppEntryPointSchema = z
  .object({
    entryPointConfig: GoogleAppsScriptTypeWebAppConfigSchema.exactOptional().openapi({
      description: "The entry point's configuration.",
    }),
    url: z.string().exactOptional().openapi({ description: 'The URL for the web application.' }),
  })
  .openapi({ description: 'A web application entry point.', required: [] })
  .openapi('GoogleAppsScriptTypeWebAppEntryPoint')

type EntryPointType = {
  addOn?: z.infer<typeof GoogleAppsScriptTypeAddOnEntryPointSchema>
  entryPointType?: 'ENTRY_POINT_TYPE_UNSPECIFIED' | 'WEB_APP' | 'EXECUTION_API' | 'ADD_ON'
  executionApi?: z.infer<typeof GoogleAppsScriptTypeExecutionApiEntryPointSchema>
  webApp?: z.infer<typeof GoogleAppsScriptTypeWebAppEntryPointSchema>
}

const ValueSchema: z.ZodType<ValueType> = z
  .lazy(() =>
    z
      .object({
        boolValue: z
          .boolean()
          .exactOptional()
          .openapi({ description: 'Represents a boolean value.' }),
        bytesValue: z
          .string()
          .exactOptional()
          .openapi({ description: 'Represents raw byte values.' }),
        dateValue: z
          .string()
          .exactOptional()
          .openapi({ description: 'Represents a date in ms since the epoch.' }),
        listValue: ListValueSchema.exactOptional().openapi({
          description: 'Represents a repeated `Value`.',
        }),
        nullValue: z
          .literal('NULL_VALUE')
          .exactOptional()
          .openapi({ description: 'Represents a null value.' }),
        numberValue: z
          .float64()
          .exactOptional()
          .openapi({ description: 'Represents a double value.' }),
        protoValue: z
          .record(
            z.string(),
            z
              .any()
              .openapi({
                description: 'Properties of the object. Contains field @type with type URL.',
              }),
          )
          .exactOptional()
          .openapi({ description: 'Represents a structured proto value.' }),
        stringValue: z
          .string()
          .exactOptional()
          .openapi({ description: 'Represents a string value.' }),
        structValue: StructSchema.exactOptional().openapi({
          description: 'Represents a structured value.',
        }),
      })
      .openapi({
        description:
          '`Value` represents a dynamically typed value which is the outcome of an executed script.',
        required: [],
      }),
  )
  .openapi('Value')

type ListValueType = { values?: z.infer<typeof ValueSchema>[] }

type StructType = { fields?: { [key: string]: z.infer<typeof ValueSchema> } }

const ListValueSchema: z.ZodType<ListValueType> = z
  .lazy(() =>
    z
      .object({
        values: z
          .array(ValueSchema)
          .exactOptional()
          .openapi({ description: 'Repeated field of dynamically typed values.' }),
      })
      .openapi({
        description: '`ListValue` is a wrapper around a repeated field of values.',
        required: [],
      }),
  )
  .openapi('ListValue')

const StructSchema: z.ZodType<StructType> = z
  .lazy(() =>
    z
      .object({
        fields: z
          .record(z.string(), ValueSchema)
          .exactOptional()
          .openapi({ description: 'Unordered map of dynamically typed values.' }),
      })
      .openapi({
        description:
          '`Struct` represents a structured data value, consisting of fields which map to dynamically typed values.',
        required: [],
      }),
  )
  .openapi('Struct')

type ValueType = {
  boolValue?: boolean
  bytesValue?: string
  dateValue?: string
  listValue?: z.infer<typeof ListValueSchema>
  nullValue?: 'NULL_VALUE'
  numberValue?: number
  protoValue?: { [key: string]: { [key: string]: unknown } }
  stringValue?: string
  structValue?: z.infer<typeof StructSchema>
}

const GoogleAppsScriptTypeFunctionSchema = z
  .object({
    name: z
      .string()
      .exactOptional()
      .openapi({ description: 'The function name in the script project.' }),
    parameters: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description: 'The ordered list of parameter names of the function in the script project.',
      }),
  })
  .openapi({ description: 'Represents a function in a script project.', required: [] })
  .openapi('GoogleAppsScriptTypeFunction')

const GoogleAppsScriptTypeFunctionSetSchema = z
  .object({
    values: z
      .array(GoogleAppsScriptTypeFunctionSchema)
      .exactOptional()
      .openapi({ description: 'A list of functions composing the set.' }),
  })
  .openapi({ description: 'A set of functions. No duplicates are permitted.', required: [] })
  .openapi('GoogleAppsScriptTypeFunctionSet')

const GoogleAppsScriptTypeUserSchema = z
  .object({
    domain: z.string().exactOptional().openapi({ description: "The user's domain." }),
    email: z
      .string()
      .exactOptional()
      .openapi({ description: "The user's identifying email address." }),
    name: z.string().exactOptional().openapi({ description: "The user's display name." }),
    photoUrl: z.string().exactOptional().openapi({ description: "The user's photo." }),
  })
  .openapi({ description: 'A simple user profile resource.', required: [] })
  .openapi('GoogleAppsScriptTypeUser')

const FileSchema = z
  .object({
    createTime: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Creation date timestamp. This read-only field is only visible to users who have WRITER permission for the script project.',
      }),
    functionSet: GoogleAppsScriptTypeFunctionSetSchema.exactOptional().openapi({
      description: 'The defined set of functions in the script file, if any.',
    }),
    lastModifyUser: GoogleAppsScriptTypeUserSchema.exactOptional().openapi({
      description:
        'The user who modified the file most recently. This read-only field is only visible to users who have WRITER permission for the script project.',
    }),
    name: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The name of the file. The file extension is not part of the file name, which can be identified from the type field.',
      }),
    source: z.string().exactOptional().openapi({ description: 'The file content.' }),
    type: z
      .enum(['ENUM_TYPE_UNSPECIFIED', 'SERVER_JS', 'HTML', 'JSON'])
      .exactOptional()
      .openapi({ description: 'The type of the file.' }),
    updateTime: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Last modified date timestamp. This read-only field is only visible to users who have WRITER permission for the script project.',
      }),
  })
  .openapi({
    description:
      'An individual file within a script project. A file is a third-party source code created by one or more developers. It can be a server-side JS code, HTML, or a configuration file. Each script project can contain multiple files.',
    required: [],
  })
  .openapi('File')

const ContentSchema = z
  .object({
    files: z
      .array(FileSchema)
      .exactOptional()
      .openapi({
        description:
          'The list of script project files. One of the files is a script manifest; it must be named "appsscript", must have type of JSON, and include the manifest configurations for the project.',
      }),
    scriptId: z.string().exactOptional().openapi({ description: "The script project's Drive ID." }),
  })
  .openapi({ description: 'The Content resource.', required: [] })
  .openapi('Content')

const CreateProjectRequestSchema = z
  .object({
    parentId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The Drive ID of a parent file that the created script project is bound to. This is usually the ID of a Google Doc, Google Sheet, Google Form, or Google Slides file. If not set, a standalone script project is created.',
      }),
    title: z.string().exactOptional().openapi({ description: 'The title for the project.' }),
  })
  .openapi({
    description: 'Request to create a script project. Request to create a script project.',
    required: [],
  })
  .openapi('CreateProjectRequest')

const DeploymentConfigSchema = z
  .object({
    description: z
      .string()
      .exactOptional()
      .openapi({ description: 'The description for this deployment.' }),
    manifestFileName: z
      .string()
      .exactOptional()
      .openapi({ description: 'The manifest file name for this deployment.' }),
    scriptId: z.string().exactOptional().openapi({ description: "The script project's Drive ID." }),
    versionNumber: z
      .int32()
      .exactOptional()
      .openapi({ description: 'The version number on which this deployment is based.' }),
  })
  .openapi({ description: 'Metadata the defines how a deployment is configured.', required: [] })
  .openapi('DeploymentConfig')

const EntryPointSchema: z.ZodType<EntryPointType> = z
  .lazy(() =>
    z
      .object({
        addOn: GoogleAppsScriptTypeAddOnEntryPointSchema.exactOptional().openapi({
          description: 'Add-on properties.',
        }),
        entryPointType: z
          .enum(['ENTRY_POINT_TYPE_UNSPECIFIED', 'WEB_APP', 'EXECUTION_API', 'ADD_ON'])
          .exactOptional()
          .openapi({ description: 'The type of the entry point.' }),
        executionApi: GoogleAppsScriptTypeExecutionApiEntryPointSchema.exactOptional().openapi({
          description: 'An entry point specification for Apps Script API execution calls.',
        }),
        webApp: GoogleAppsScriptTypeWebAppEntryPointSchema.exactOptional().openapi({
          description: 'An entry point specification for web apps.',
        }),
      })
      .openapi({
        description: 'A configuration that defines how a deployment is accessed externally.',
        required: [],
      }),
  )
  .openapi('EntryPoint')

const DeploymentSchema = z
  .object({
    deploymentConfig: DeploymentConfigSchema.exactOptional().openapi({
      description: 'The deployment configuration.',
    }),
    deploymentId: z
      .string()
      .exactOptional()
      .openapi({ description: 'The deployment ID for this deployment.' }),
    entryPoints: z
      .array(EntryPointSchema)
      .exactOptional()
      .openapi({ description: "The deployment's entry points." }),
    updateTime: z
      .string()
      .exactOptional()
      .openapi({ description: 'Last modified date time stamp.' }),
  })
  .openapi({ description: 'Representation of a single script deployment.', required: [] })
  .openapi('Deployment')

const EmptySchema = z
  .object({})
  .openapi({
    description:
      'A generic empty message that you can re-use to avoid defining duplicated empty messages in your APIs. A typical example is to use it as the request or the response type of an API method. For instance: service Foo { rpc Bar(google.protobuf.Empty) returns (google.protobuf.Empty); }',
  })
  .openapi('Empty')

const ScriptExecutionResultSchema = z
  .object({
    returnValue: ValueSchema.exactOptional().openapi({
      description: 'The returned value of the execution.',
    }),
  })
  .openapi({ description: 'The result of an execution.', required: [] })
  .openapi('ScriptExecutionResult')

const ExecuteStreamResponseSchema = z
  .object({
    result: ScriptExecutionResultSchema.exactOptional().openapi({
      description: 'The result of the execution.',
    }),
  })
  .openapi({
    description: 'The response for executing or debugging a function in an Apps Script project.',
    required: [],
  })
  .openapi('ExecuteStreamResponse')

const ScriptStackTraceElementSchema = z
  .object({
    function: z
      .string()
      .exactOptional()
      .openapi({ description: 'The name of the function that failed.' }),
    lineNumber: z
      .int32()
      .exactOptional()
      .openapi({ description: 'The line number where the script failed.' }),
  })
  .openapi({
    description: 'A stack trace through the script that shows where the execution failed.',
    required: [],
  })
  .openapi('ScriptStackTraceElement')

const ExecutionErrorSchema = z
  .object({
    errorMessage: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "The error message thrown by Apps Script, usually localized into the user's language.",
      }),
    errorType: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The error type, for example `TypeError` or `ReferenceError`. If the error type is unavailable, this field is not included.',
      }),
    scriptStackTraceElements: z
      .array(ScriptStackTraceElementSchema)
      .exactOptional()
      .openapi({
        description:
          'An array of objects that provide a stack trace through the script to show where the execution failed, with the deepest call first.',
      }),
  })
  .openapi({
    description:
      "An object that provides information about the nature of an error resulting from an attempted execution of a script function using the Apps Script API. If a run call succeeds but the script function (or Apps Script itself) throws an exception, the response body's error field contains a Status object. The `Status` object's `details` field contains an array with a single one of these `ExecutionError` objects.",
    required: [],
  })
  .openapi('ExecutionError')

const ExecutionRequestSchema = z
  .object({
    devMode: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'If `true` and the user is an owner of the script, the script runs at the most recently saved version rather than the version deployed for use with the Apps Script API. Optional; default is `false`.',
      }),
    function: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The name of the function to execute in the given script. The name does not include parentheses or parameters. It can reference a function in an included library such as `Library.libFunction1`.',
      }),
    parameters: z
      .array(z.any())
      .exactOptional()
      .openapi({
        description:
          'The parameters to be passed to the function being executed. The object type for each parameter should match the expected type in Apps Script. Parameters cannot be Apps Script-specific object types (such as a `Document` or a `Calendar`); they can only be primitive types such as `string`, `number`, `array`, `object`, or `boolean`. Optional.',
      }),
    sessionState: z
      .string()
      .exactOptional()
      .openapi({
        description:
          '*Deprecated*. For use with Android add-ons only. An ID that represents the user\'s current session in the Android app for Google Docs or Sheets, included as extra data in the [Intent](https://developer.android.com/guide/components/intents-filters.html) that launches the add-on. When an Android add-on is run with a session state, it gains the privileges of a [bound](https://developers.google.com/apps-script/guides/bound) script—that is, it can access information like the user\'s current cursor position (in Docs) or selected cell (in Sheets). To retrieve the state, call `Intent.getStringExtra("com.google.android.apps.docs.addons.SessionState")`. Optional.',
      }),
  })
  .openapi({
    description:
      'A request to run the function in a script. The script is identified by the specified `script_id`. Executing a function on a script returns results based on the implementation of the script.',
    required: [],
  })
  .openapi('ExecutionRequest')

const ExecutionResponseSchema = z
  .object({
    result: z
      .any()
      .exactOptional()
      .openapi({
        description:
          'The return value of the script function. The type matches the object type returned in Apps Script. Functions called using the Apps Script API cannot return Apps Script-specific objects (such as a `Document` or a `Calendar`); they can only return primitive types such as a `string`, `number`, `array`, `object`, or `boolean`.',
      }),
  })
  .openapi({
    description:
      "An object that provides the return value of a function executed using the Apps Script API. If the script function returns successfully, the response body's response field contains this `ExecutionResponse` object.",
    required: [],
  })
  .openapi('ExecutionResponse')

const GoogleAppsScriptTypeProcessSchema = z
  .object({
    duration: z
      .string()
      .exactOptional()
      .openapi({ description: 'Duration the execution spent executing.' }),
    functionName: z
      .string()
      .exactOptional()
      .openapi({ description: 'Name of the function the started the execution.' }),
    processStatus: z
      .enum([
        'PROCESS_STATUS_UNSPECIFIED',
        'RUNNING',
        'PAUSED',
        'COMPLETED',
        'CANCELED',
        'FAILED',
        'TIMED_OUT',
        'UNKNOWN',
        'DELAYED',
      ])
      .exactOptional()
      .openapi({ description: 'The executions status.' }),
    processType: z
      .enum([
        'PROCESS_TYPE_UNSPECIFIED',
        'ADD_ON',
        'EXECUTION_API',
        'TIME_DRIVEN',
        'TRIGGER',
        'WEBAPP',
        'EDITOR',
        'SIMPLE_TRIGGER',
        'MENU',
        'BATCH_TASK',
      ])
      .exactOptional()
      .openapi({ description: 'The executions type.' }),
    projectName: z
      .string()
      .exactOptional()
      .openapi({ description: 'Name of the script being executed.' }),
    startTime: z.string().exactOptional().openapi({ description: 'Time the execution started.' }),
    userAccessLevel: z
      .enum(['USER_ACCESS_LEVEL_UNSPECIFIED', 'NONE', 'READ', 'WRITE', 'OWNER'])
      .exactOptional()
      .openapi({ description: 'The executing users access level to the script.' }),
  })
  .openapi({
    description:
      'Representation of a single script process execution that was started from the script editor, a trigger, an application, or using the Apps Script API. This is distinct from the `Operation` resource, which only represents executions started via the Apps Script API.',
    required: [],
  })
  .openapi('GoogleAppsScriptTypeProcess')

const ListDeploymentsResponseSchema = z
  .object({
    deployments: z
      .array(DeploymentSchema)
      .exactOptional()
      .openapi({ description: 'The list of deployments.' }),
    nextPageToken: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The token that can be used in the next call to get the next page of results.',
      }),
  })
  .openapi({
    description: 'Response with the list of deployments for the specified Apps Script project.',
    required: [],
  })
  .openapi('ListDeploymentsResponse')

const ListScriptProcessesResponseSchema = z
  .object({
    nextPageToken: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Token for the next page of results. If empty, there are no more pages remaining.',
      }),
    processes: z
      .array(GoogleAppsScriptTypeProcessSchema)
      .exactOptional()
      .openapi({ description: 'List of processes matching request parameters.' }),
  })
  .openapi({ description: 'Response with the list of Process resources.', required: [] })
  .openapi('ListScriptProcessesResponse')

const ListUserProcessesResponseSchema = z
  .object({
    nextPageToken: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Token for the next page of results. If empty, there are no more pages remaining.',
      }),
    processes: z
      .array(GoogleAppsScriptTypeProcessSchema)
      .exactOptional()
      .openapi({ description: 'List of processes matching request parameters.' }),
  })
  .openapi({ description: 'Response with the list of Process resources.', required: [] })
  .openapi('ListUserProcessesResponse')

const VersionSchema = z
  .object({
    createTime: z
      .string()
      .exactOptional()
      .openapi({ description: 'When the version was created.' }),
    description: z
      .string()
      .exactOptional()
      .openapi({ description: 'The description for this version.' }),
    scriptId: z.string().exactOptional().openapi({ description: "The script project's Drive ID." }),
    versionNumber: z
      .int32()
      .exactOptional()
      .openapi({
        description:
          'The incremental ID that is created by Apps Script when a version is created. This is system assigned number and is immutable once created.',
      }),
  })
  .openapi({
    description:
      'A resource representing a script project version. A version is a "snapshot" of a script project and is similar to a read-only branched release. When creating deployments, the version to use must be specified.',
    required: [],
  })
  .openapi('Version')

const ListVersionsResponseSchema = z
  .object({
    nextPageToken: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The token use to fetch the next page of records. if not exist in the response, that means no more versions to list.',
      }),
    versions: z
      .array(VersionSchema)
      .exactOptional()
      .openapi({ description: 'The list of versions.' }),
  })
  .openapi({
    description: 'Response with the list of the versions for the specified script project.',
    required: [],
  })
  .openapi('ListVersionsResponse')

const MetricsValueSchema = z
  .object({
    endTime: z
      .string()
      .exactOptional()
      .openapi({ description: 'Required field indicating the end time of the interval.' }),
    startTime: z
      .string()
      .exactOptional()
      .openapi({ description: 'Required field indicating the start time of the interval.' }),
    value: z
      .string()
      .exactOptional()
      .openapi({ description: 'Indicates the number of executions counted.' }),
  })
  .openapi({ description: 'Metrics value that holds number of executions counted.', required: [] })
  .openapi('MetricsValue')

const MetricsSchema = z
  .object({
    activeUsers: z
      .array(MetricsValueSchema)
      .exactOptional()
      .openapi({ description: 'Number of active users.' }),
    failedExecutions: z
      .array(MetricsValueSchema)
      .exactOptional()
      .openapi({ description: 'Number of failed executions.' }),
    totalExecutions: z
      .array(MetricsValueSchema)
      .exactOptional()
      .openapi({ description: 'Number of total executions.' }),
  })
  .openapi({
    description:
      'Resource containing usage stats for a given script, based on the supplied filter and mask present in the request.',
    required: [],
  })
  .openapi('Metrics')

const StatusSchema = z
  .object({
    code: z
      .int32()
      .exactOptional()
      .openapi({
        description:
          'The status code. For this API, this value either: - 10, indicating a `SCRIPT_TIMEOUT` error, - 3, indicating an `INVALID_ARGUMENT` error, or - 1, indicating a `CANCELLED` execution. ',
      }),
    details: z
      .array(
        z.record(
          z.string(),
          z
            .any()
            .openapi({
              description: 'Properties of the object. Contains field @type with type URL.',
            }),
        ),
      )
      .exactOptional()
      .openapi({
        description:
          'An array that contains a single ExecutionError object that provides information about the nature of the error.',
      }),
    message: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'A developer-facing error message, which is in English. Any user-facing error message is localized and sent in the details field, or localized by the client.',
      }),
  })
  .openapi({
    description:
      "If a `run` call succeeds but the script function (or Apps Script itself) throws an exception, the response body's error field contains this `Status` object.",
    required: [],
  })
  .openapi('Status')

const OperationSchema = z
  .object({
    done: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'This field indicates whether the script execution has completed. A completed execution has a populated `response` field containing the ExecutionResponse from function that was executed.',
      }),
    error: StatusSchema.exactOptional().openapi({
      description:
        "If a `run` call succeeds but the script function (or Apps Script itself) throws an exception, this field contains a Status object. The `Status` object's `details` field contains an array with a single ExecutionError object that provides information about the nature of the error.",
    }),
    response: z
      .record(
        z.string(),
        z
          .any()
          .openapi({
            description: 'Properties of the object. Contains field @type with type URL.',
          }),
      )
      .exactOptional()
      .openapi({
        description:
          "If the script function returns successfully, this field contains an ExecutionResponse object with the function's return value.",
      }),
  })
  .openapi({
    description:
      "A representation of an execution of an Apps Script function started with run. The execution response does not arrive until the function finishes executing. The maximum execution runtime is listed in the [Apps Script quotas guide](/apps-script/guides/services/quotas#current_limitations). After execution has started, it can have one of four outcomes: - If the script function returns successfully, the response field contains an ExecutionResponse object with the function's return value in the object's `result` field. - If the script function (or Apps Script itself) throws an exception, the error field contains a Status object. The `Status` object's `details` field contains an array with a single ExecutionError object that provides information about the nature of the error. - If the execution has not yet completed, the done field is `false` and the neither the `response` nor `error` fields are present. - If the `run` call itself fails (for example, because of a malformed request or an authorization error), the method returns an HTTP response code in the 4XX range with a different format for the response body. Client libraries automatically convert a 4XX response into an exception class. ",
    required: [],
  })
  .openapi('Operation')

const ProjectSchema = z
  .object({
    createTime: z.string().exactOptional().openapi({ description: 'When the script was created.' }),
    creator: GoogleAppsScriptTypeUserSchema.exactOptional().openapi({
      description: 'User who originally created the script.',
    }),
    lastModifyUser: GoogleAppsScriptTypeUserSchema.exactOptional().openapi({
      description: 'User who last modified the script.',
    }),
    parentId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "The parent's Drive ID that the script will be attached to. This is usually the ID of a Google Document or Google Sheet. This filed is optional, and if not set, a stand-alone script will be created.",
      }),
    scriptId: z.string().exactOptional().openapi({ description: "The script project's Drive ID." }),
    title: z.string().exactOptional().openapi({ description: 'The title for the project.' }),
    updateTime: z
      .string()
      .exactOptional()
      .openapi({ description: 'When the script was last updated.' }),
  })
  .openapi({ description: 'The script project resource.', required: [] })
  .openapi('Project')

const UpdateDeploymentRequestSchema = z
  .object({
    deploymentConfig: DeploymentConfigSchema.exactOptional().openapi({
      description: 'The deployment configuration.',
    }),
  })
  .openapi({
    description: 'Request with deployment information to update an existing deployment.',
    required: [],
  })
  .openapi('UpdateDeploymentRequest')

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
        'https://mail.google.com/':
          'Read, compose, send, and permanently delete all your email from Gmail',
        'https://www.google.com/calendar/feeds':
          'See, edit, share, and permanently delete all the calendars you can access using Google Calendar',
        'https://www.google.com/m8/feeds':
          'See, edit, download, and permanently delete your contacts',
        'https://www.googleapis.com/auth/admin.directory.group':
          'View and manage the provisioning of groups on your domain',
        'https://www.googleapis.com/auth/admin.directory.user':
          'View and manage the provisioning of users on your domain',
        'https://www.googleapis.com/auth/documents':
          'See, edit, create, and delete all your Google Docs documents',
        'https://www.googleapis.com/auth/drive':
          'See, edit, create, and delete all of your Google Drive files',
        'https://www.googleapis.com/auth/forms': 'View and manage your forms in Google Drive',
        'https://www.googleapis.com/auth/forms.currentonly':
          'View and manage forms that this application has been installed in',
        'https://www.googleapis.com/auth/groups': 'View and manage your Google Groups',
        'https://www.googleapis.com/auth/script.deployments':
          'Create and update Google Apps Script deployments',
        'https://www.googleapis.com/auth/script.deployments.readonly':
          'View Google Apps Script deployments',
        'https://www.googleapis.com/auth/script.metrics':
          "View Google Apps Script project's metrics",
        'https://www.googleapis.com/auth/script.processes': 'View Google Apps Script processes',
        'https://www.googleapis.com/auth/script.projects':
          'Create and update Google Apps Script projects',
        'https://www.googleapis.com/auth/script.projects.readonly':
          'View Google Apps Script projects',
        'https://www.googleapis.com/auth/spreadsheets':
          'See, edit, create, and delete all your Google Sheets spreadsheets',
        'https://www.googleapis.com/auth/userinfo.email':
          'See your primary Google Account email address',
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
        'https://mail.google.com/':
          'Read, compose, send, and permanently delete all your email from Gmail',
        'https://www.google.com/calendar/feeds':
          'See, edit, share, and permanently delete all the calendars you can access using Google Calendar',
        'https://www.google.com/m8/feeds':
          'See, edit, download, and permanently delete your contacts',
        'https://www.googleapis.com/auth/admin.directory.group':
          'View and manage the provisioning of groups on your domain',
        'https://www.googleapis.com/auth/admin.directory.user':
          'View and manage the provisioning of users on your domain',
        'https://www.googleapis.com/auth/documents':
          'See, edit, create, and delete all your Google Docs documents',
        'https://www.googleapis.com/auth/drive':
          'See, edit, create, and delete all of your Google Drive files',
        'https://www.googleapis.com/auth/forms': 'View and manage your forms in Google Drive',
        'https://www.googleapis.com/auth/forms.currentonly':
          'View and manage forms that this application has been installed in',
        'https://www.googleapis.com/auth/groups': 'View and manage your Google Groups',
        'https://www.googleapis.com/auth/script.deployments':
          'Create and update Google Apps Script deployments',
        'https://www.googleapis.com/auth/script.deployments.readonly':
          'View Google Apps Script deployments',
        'https://www.googleapis.com/auth/script.metrics':
          "View Google Apps Script project's metrics",
        'https://www.googleapis.com/auth/script.processes': 'View Google Apps Script processes',
        'https://www.googleapis.com/auth/script.projects':
          'Create and update Google Apps Script projects',
        'https://www.googleapis.com/auth/script.projects.readonly':
          'View Google Apps Script projects',
        'https://www.googleapis.com/auth/spreadsheets':
          'See, edit, create, and delete all your Google Sheets spreadsheets',
        'https://www.googleapis.com/auth/userinfo.email':
          'See your primary Google Account email address',
      },
      tokenUrl: 'https://accounts.google.com/o/oauth2/token',
    },
  },
  type: 'oauth2',
}

export const getV1ProcessesRoute = createRoute({
  method: 'get',
  path: '/v1/processes',
  tags: ['processes'],
  description:
    'List information about processes made by or on behalf of a user, such as process type and current status.',
  operationId: 'script.processes.list',
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
              'The maximum number of returned processes per page of results. Defaults to 50.',
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
              'The token for continuing a previous list request on the next page. This should be set to the value of `nextPageToken` from a previous response.',
            in: 'query',
            name: 'pageToken',
            schema: { type: 'string' },
            required: false,
          },
        }),
      'userProcessFilter.deploymentId': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Optional field used to limit returned processes to those originating from projects with a specific deployment ID.',
            in: 'query',
            name: 'userProcessFilter.deploymentId',
            schema: { type: 'string' },
            required: false,
          },
        }),
      'userProcessFilter.endTime': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Optional field used to limit returned processes to those that completed on or before the given timestamp.',
            in: 'query',
            name: 'userProcessFilter.endTime',
            schema: { type: 'string' },
            required: false,
          },
        }),
      'userProcessFilter.functionName': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Optional field used to limit returned processes to those originating from a script function with the given function name.',
            in: 'query',
            name: 'userProcessFilter.functionName',
            schema: { type: 'string' },
            required: false,
          },
        }),
      'userProcessFilter.projectName': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Optional field used to limit returned processes to those originating from projects with project names containing a specific string.',
            in: 'query',
            name: 'userProcessFilter.projectName',
            schema: { type: 'string' },
            required: false,
          },
        }),
      'userProcessFilter.scriptId': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Optional field used to limit returned processes to those originating from projects with a specific script ID.',
            in: 'query',
            name: 'userProcessFilter.scriptId',
            schema: { type: 'string' },
            required: false,
          },
        }),
      'userProcessFilter.startTime': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Optional field used to limit returned processes to those that were started on or after the given timestamp.',
            in: 'query',
            name: 'userProcessFilter.startTime',
            schema: { type: 'string' },
            required: false,
          },
        }),
      'userProcessFilter.statuses': z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(
            z.enum([
              'PROCESS_STATUS_UNSPECIFIED',
              'RUNNING',
              'PAUSED',
              'COMPLETED',
              'CANCELED',
              'FAILED',
              'TIMED_OUT',
              'UNKNOWN',
              'DELAYED',
            ]),
          ),
        )
        .exactOptional()
        .openapi({
          param: {
            description:
              'Optional field used to limit returned processes to those having one of the specified process statuses.',
            explode: true,
            in: 'query',
            name: 'userProcessFilter.statuses',
            schema: {
              items: {
                enum: [
                  'PROCESS_STATUS_UNSPECIFIED',
                  'RUNNING',
                  'PAUSED',
                  'COMPLETED',
                  'CANCELED',
                  'FAILED',
                  'TIMED_OUT',
                  'UNKNOWN',
                  'DELAYED',
                ],
                type: 'string',
              },
              type: 'array',
            },
            style: 'form',
            required: false,
          },
        }),
      'userProcessFilter.types': z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(
            z.enum([
              'PROCESS_TYPE_UNSPECIFIED',
              'ADD_ON',
              'EXECUTION_API',
              'TIME_DRIVEN',
              'TRIGGER',
              'WEBAPP',
              'EDITOR',
              'SIMPLE_TRIGGER',
              'MENU',
              'BATCH_TASK',
            ]),
          ),
        )
        .exactOptional()
        .openapi({
          param: {
            description:
              'Optional field used to limit returned processes to those having one of the specified process types.',
            explode: true,
            in: 'query',
            name: 'userProcessFilter.types',
            schema: {
              items: {
                enum: [
                  'PROCESS_TYPE_UNSPECIFIED',
                  'ADD_ON',
                  'EXECUTION_API',
                  'TIME_DRIVEN',
                  'TRIGGER',
                  'WEBAPP',
                  'EDITOR',
                  'SIMPLE_TRIGGER',
                  'MENU',
                  'BATCH_TASK',
                ],
                type: 'string',
              },
              type: 'array',
            },
            style: 'form',
            required: false,
          },
        }),
      'userProcessFilter.userAccessLevels': z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.enum(['USER_ACCESS_LEVEL_UNSPECIFIED', 'NONE', 'READ', 'WRITE', 'OWNER'])),
        )
        .exactOptional()
        .openapi({
          param: {
            description:
              'Optional field used to limit returned processes to those having one of the specified user access levels.',
            explode: true,
            in: 'query',
            name: 'userProcessFilter.userAccessLevels',
            schema: {
              items: {
                enum: ['USER_ACCESS_LEVEL_UNSPECIFIED', 'NONE', 'READ', 'WRITE', 'OWNER'],
                type: 'string',
              },
              type: 'array',
            },
            style: 'form',
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: ListUserProcessesResponseSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/script.processes'],
      Oauth2c: ['https://www.googleapis.com/auth/script.processes'],
    },
  ],
})

export const getV1ProcessesListScriptProcessesRoute = createRoute({
  method: 'get',
  path: '/v1/processes:listScriptProcesses',
  tags: ['processes'],
  description:
    "List information about a script's executed processes, such as process type and current status.",
  operationId: 'script.processes.listScriptProcesses',
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
              'The maximum number of returned processes per page of results. Defaults to 50.',
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
              'The token for continuing a previous list request on the next page. This should be set to the value of `nextPageToken` from a previous response.',
            in: 'query',
            name: 'pageToken',
            schema: { type: 'string' },
            required: false,
          },
        }),
      scriptId: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'The script ID of the project whose processes are listed.',
            in: 'query',
            name: 'scriptId',
            schema: { type: 'string' },
            required: false,
          },
        }),
      'scriptProcessFilter.deploymentId': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Optional field used to limit returned processes to those originating from projects with a specific deployment ID.',
            in: 'query',
            name: 'scriptProcessFilter.deploymentId',
            schema: { type: 'string' },
            required: false,
          },
        }),
      'scriptProcessFilter.endTime': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Optional field used to limit returned processes to those that completed on or before the given timestamp.',
            in: 'query',
            name: 'scriptProcessFilter.endTime',
            schema: { type: 'string' },
            required: false,
          },
        }),
      'scriptProcessFilter.functionName': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Optional field used to limit returned processes to those originating from a script function with the given function name.',
            in: 'query',
            name: 'scriptProcessFilter.functionName',
            schema: { type: 'string' },
            required: false,
          },
        }),
      'scriptProcessFilter.startTime': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Optional field used to limit returned processes to those that were started on or after the given timestamp.',
            in: 'query',
            name: 'scriptProcessFilter.startTime',
            schema: { type: 'string' },
            required: false,
          },
        }),
      'scriptProcessFilter.statuses': z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(
            z.enum([
              'PROCESS_STATUS_UNSPECIFIED',
              'RUNNING',
              'PAUSED',
              'COMPLETED',
              'CANCELED',
              'FAILED',
              'TIMED_OUT',
              'UNKNOWN',
              'DELAYED',
            ]),
          ),
        )
        .exactOptional()
        .openapi({
          param: {
            description:
              'Optional field used to limit returned processes to those having one of the specified process statuses.',
            explode: true,
            in: 'query',
            name: 'scriptProcessFilter.statuses',
            schema: {
              items: {
                enum: [
                  'PROCESS_STATUS_UNSPECIFIED',
                  'RUNNING',
                  'PAUSED',
                  'COMPLETED',
                  'CANCELED',
                  'FAILED',
                  'TIMED_OUT',
                  'UNKNOWN',
                  'DELAYED',
                ],
                type: 'string',
              },
              type: 'array',
            },
            style: 'form',
            required: false,
          },
        }),
      'scriptProcessFilter.types': z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(
            z.enum([
              'PROCESS_TYPE_UNSPECIFIED',
              'ADD_ON',
              'EXECUTION_API',
              'TIME_DRIVEN',
              'TRIGGER',
              'WEBAPP',
              'EDITOR',
              'SIMPLE_TRIGGER',
              'MENU',
              'BATCH_TASK',
            ]),
          ),
        )
        .exactOptional()
        .openapi({
          param: {
            description:
              'Optional field used to limit returned processes to those having one of the specified process types.',
            explode: true,
            in: 'query',
            name: 'scriptProcessFilter.types',
            schema: {
              items: {
                enum: [
                  'PROCESS_TYPE_UNSPECIFIED',
                  'ADD_ON',
                  'EXECUTION_API',
                  'TIME_DRIVEN',
                  'TRIGGER',
                  'WEBAPP',
                  'EDITOR',
                  'SIMPLE_TRIGGER',
                  'MENU',
                  'BATCH_TASK',
                ],
                type: 'string',
              },
              type: 'array',
            },
            style: 'form',
            required: false,
          },
        }),
      'scriptProcessFilter.userAccessLevels': z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.enum(['USER_ACCESS_LEVEL_UNSPECIFIED', 'NONE', 'READ', 'WRITE', 'OWNER'])),
        )
        .exactOptional()
        .openapi({
          param: {
            description:
              'Optional field used to limit returned processes to those having one of the specified user access levels.',
            explode: true,
            in: 'query',
            name: 'scriptProcessFilter.userAccessLevels',
            schema: {
              items: {
                enum: ['USER_ACCESS_LEVEL_UNSPECIFIED', 'NONE', 'READ', 'WRITE', 'OWNER'],
                type: 'string',
              },
              type: 'array',
            },
            style: 'form',
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: ListScriptProcessesResponseSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/script.processes'],
      Oauth2c: ['https://www.googleapis.com/auth/script.processes'],
    },
  ],
})

export const postV1ProjectsRoute = createRoute({
  method: 'post',
  path: '/v1/projects',
  tags: ['projects'],
  description: 'Creates a new, empty script project with no script files and a base manifest file.',
  operationId: 'script.projects.create',
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
    body: { content: { 'application/json': { schema: CreateProjectRequestSchema } } },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: ProjectSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/script.projects'],
      Oauth2c: ['https://www.googleapis.com/auth/script.projects'],
    },
  ],
})

export const getV1ProjectsScriptIdRoute = createRoute({
  method: 'get',
  path: '/v1/projects/{scriptId}',
  tags: ['projects'],
  description: "Gets a script project's metadata.",
  operationId: 'script.projects.get',
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
      scriptId: z
        .string()
        .openapi({
          param: {
            description: "The script project's Drive ID.",
            in: 'path',
            name: 'scriptId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: ProjectSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/script.projects'],
      Oauth2c: ['https://www.googleapis.com/auth/script.projects'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/script.projects.readonly'],
      Oauth2c: ['https://www.googleapis.com/auth/script.projects.readonly'],
    },
  ],
})

export const getV1ProjectsScriptIdContentRoute = createRoute({
  method: 'get',
  path: '/v1/projects/{scriptId}/content',
  tags: ['projects'],
  description:
    'Gets the content of the script project, including the code source and metadata for each script file.',
  operationId: 'script.projects.getContent',
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
      versionNumber: z
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
              "The version number of the project to retrieve. If not provided, the project's HEAD version is returned.",
            in: 'query',
            name: 'versionNumber',
            schema: { type: 'integer' },
            required: false,
          },
        }),
    }),
    params: z.object({
      scriptId: z
        .string()
        .openapi({
          param: {
            description: "The script project's Drive ID.",
            in: 'path',
            name: 'scriptId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: ContentSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/script.projects'],
      Oauth2c: ['https://www.googleapis.com/auth/script.projects'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/script.projects.readonly'],
      Oauth2c: ['https://www.googleapis.com/auth/script.projects.readonly'],
    },
  ],
})

export const putV1ProjectsScriptIdContentRoute = createRoute({
  method: 'put',
  path: '/v1/projects/{scriptId}/content',
  tags: ['projects'],
  description:
    'Updates the content of the specified script project. This content is stored as the HEAD version, and is used when the script is executed as a trigger, in the script editor, in add-on preview mode, or as a web app or Apps Script API in development mode. This clears all the existing files in the project.',
  operationId: 'script.projects.updateContent',
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
      scriptId: z
        .string()
        .openapi({
          param: {
            description: "The script project's Drive ID.",
            in: 'path',
            name: 'scriptId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: ContentSchema } } },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: ContentSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/script.projects'],
      Oauth2c: ['https://www.googleapis.com/auth/script.projects'],
    },
  ],
})

export const getV1ProjectsScriptIdDeploymentsRoute = createRoute({
  method: 'get',
  path: '/v1/projects/{scriptId}/deployments',
  tags: ['projects'],
  description: 'Lists the deployments of an Apps Script project.',
  operationId: 'script.projects.deployments.list',
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
            description: 'The maximum number of deployments on each returned page. Defaults to 50.',
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
              'The token for continuing a previous list request on the next page. This should be set to the value of `nextPageToken` from a previous response.',
            in: 'query',
            name: 'pageToken',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
    params: z.object({
      scriptId: z
        .string()
        .openapi({
          param: {
            description: "The script project's Drive ID.",
            in: 'path',
            name: 'scriptId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: ListDeploymentsResponseSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/script.deployments'],
      Oauth2c: ['https://www.googleapis.com/auth/script.deployments'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/script.deployments.readonly'],
      Oauth2c: ['https://www.googleapis.com/auth/script.deployments.readonly'],
    },
  ],
})

export const postV1ProjectsScriptIdDeploymentsRoute = createRoute({
  method: 'post',
  path: '/v1/projects/{scriptId}/deployments',
  tags: ['projects'],
  description: 'Creates a deployment of an Apps Script project.',
  operationId: 'script.projects.deployments.create',
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
      scriptId: z
        .string()
        .openapi({
          param: {
            description: "The script project's Drive ID.",
            in: 'path',
            name: 'scriptId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: DeploymentConfigSchema } } },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: DeploymentSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/script.deployments'],
      Oauth2c: ['https://www.googleapis.com/auth/script.deployments'],
    },
  ],
})

export const getV1ProjectsScriptIdDeploymentsDeploymentIdRoute = createRoute({
  method: 'get',
  path: '/v1/projects/{scriptId}/deployments/{deploymentId}',
  tags: ['projects'],
  description: 'Gets a deployment of an Apps Script project.',
  operationId: 'script.projects.deployments.get',
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
      scriptId: z
        .string()
        .openapi({
          param: {
            description: "The script project's Drive ID.",
            in: 'path',
            name: 'scriptId',
            required: true,
            schema: { type: 'string' },
          },
        }),
      deploymentId: z
        .string()
        .openapi({
          param: {
            description: 'The deployment ID.',
            in: 'path',
            name: 'deploymentId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: DeploymentSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/script.deployments'],
      Oauth2c: ['https://www.googleapis.com/auth/script.deployments'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/script.deployments.readonly'],
      Oauth2c: ['https://www.googleapis.com/auth/script.deployments.readonly'],
    },
  ],
})

export const putV1ProjectsScriptIdDeploymentsDeploymentIdRoute = createRoute({
  method: 'put',
  path: '/v1/projects/{scriptId}/deployments/{deploymentId}',
  tags: ['projects'],
  description: 'Updates a deployment of an Apps Script project.',
  operationId: 'script.projects.deployments.update',
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
      scriptId: z
        .string()
        .openapi({
          param: {
            description: "The script project's Drive ID.",
            in: 'path',
            name: 'scriptId',
            required: true,
            schema: { type: 'string' },
          },
        }),
      deploymentId: z
        .string()
        .openapi({
          param: {
            description: 'The deployment ID for this deployment.',
            in: 'path',
            name: 'deploymentId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: UpdateDeploymentRequestSchema } } },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: DeploymentSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/script.deployments'],
      Oauth2c: ['https://www.googleapis.com/auth/script.deployments'],
    },
  ],
})

export const deleteV1ProjectsScriptIdDeploymentsDeploymentIdRoute = createRoute({
  method: 'delete',
  path: '/v1/projects/{scriptId}/deployments/{deploymentId}',
  tags: ['projects'],
  description: 'Deletes a deployment of an Apps Script project.',
  operationId: 'script.projects.deployments.delete',
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
      scriptId: z
        .string()
        .openapi({
          param: {
            description: "The script project's Drive ID.",
            in: 'path',
            name: 'scriptId',
            required: true,
            schema: { type: 'string' },
          },
        }),
      deploymentId: z
        .string()
        .openapi({
          param: {
            description: 'The deployment ID to be undeployed.',
            in: 'path',
            name: 'deploymentId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: EmptySchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/script.deployments'],
      Oauth2c: ['https://www.googleapis.com/auth/script.deployments'],
    },
  ],
})

export const getV1ProjectsScriptIdMetricsRoute = createRoute({
  method: 'get',
  path: '/v1/projects/{scriptId}/metrics',
  tags: ['projects'],
  description: 'Get metrics data for scripts, such as number of executions and active users.',
  operationId: 'script.projects.getMetrics',
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
      'metricsFilter.deploymentId': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Optional field indicating a specific deployment to retrieve metrics from.',
            in: 'query',
            name: 'metricsFilter.deploymentId',
            schema: { type: 'string' },
            required: false,
          },
        }),
      metricsGranularity: z
        .enum(['UNSPECIFIED_GRANULARITY', 'WEEKLY', 'DAILY'])
        .exactOptional()
        .openapi({
          param: {
            description: 'Required field indicating what granularity of metrics are returned.',
            in: 'query',
            name: 'metricsGranularity',
            schema: { enum: ['UNSPECIFIED_GRANULARITY', 'WEEKLY', 'DAILY'], type: 'string' },
            required: false,
          },
        }),
    }),
    params: z.object({
      scriptId: z
        .string()
        .openapi({
          param: {
            description: 'Required field indicating the script to get metrics for.',
            in: 'path',
            name: 'scriptId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: MetricsSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/script.metrics'],
      Oauth2c: ['https://www.googleapis.com/auth/script.metrics'],
    },
  ],
})

export const getV1ProjectsScriptIdVersionsRoute = createRoute({
  method: 'get',
  path: '/v1/projects/{scriptId}/versions',
  tags: ['projects'],
  description: 'List the versions of a script project.',
  operationId: 'script.projects.versions.list',
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
            description: 'The maximum number of versions on each returned page. Defaults to 50.',
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
              'The token for continuing a previous list request on the next page. This should be set to the value of `nextPageToken` from a previous response.',
            in: 'query',
            name: 'pageToken',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
    params: z.object({
      scriptId: z
        .string()
        .openapi({
          param: {
            description: "The script project's Drive ID.",
            in: 'path',
            name: 'scriptId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: ListVersionsResponseSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/script.projects'],
      Oauth2c: ['https://www.googleapis.com/auth/script.projects'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/script.projects.readonly'],
      Oauth2c: ['https://www.googleapis.com/auth/script.projects.readonly'],
    },
  ],
})

export const postV1ProjectsScriptIdVersionsRoute = createRoute({
  method: 'post',
  path: '/v1/projects/{scriptId}/versions',
  tags: ['projects'],
  description:
    'Creates a new immutable version using the current code, with a unique version number.',
  operationId: 'script.projects.versions.create',
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
      scriptId: z
        .string()
        .openapi({
          param: {
            description: "The script project's Drive ID.",
            in: 'path',
            name: 'scriptId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: VersionSchema } } },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: VersionSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/script.projects'],
      Oauth2c: ['https://www.googleapis.com/auth/script.projects'],
    },
  ],
})

export const getV1ProjectsScriptIdVersionsVersionNumberRoute = createRoute({
  method: 'get',
  path: '/v1/projects/{scriptId}/versions/{versionNumber}',
  tags: ['projects'],
  description: 'Gets a version of a script project.',
  operationId: 'script.projects.versions.get',
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
      scriptId: z
        .string()
        .openapi({
          param: {
            description: "The script project's Drive ID.",
            in: 'path',
            name: 'scriptId',
            required: true,
            schema: { type: 'string' },
          },
        }),
      versionNumber: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .openapi({
          param: {
            description: 'The version number.',
            in: 'path',
            name: 'versionNumber',
            required: true,
            schema: { type: 'integer' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: VersionSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/script.projects'],
      Oauth2c: ['https://www.googleapis.com/auth/script.projects'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/script.projects.readonly'],
      Oauth2c: ['https://www.googleapis.com/auth/script.projects.readonly'],
    },
  ],
})

export const postV1ScriptsScriptIdRunRoute = createRoute({
  method: 'post',
  path: '/v1/scripts/{scriptId}:run',
  tags: ['scripts'],
  description:
    'Runs a function in an Apps Script project. The script project must be deployed for use with the Apps Script API and the calling application must share the same Cloud Platform project. This method requires authorization with an OAuth 2.0 token that includes at least one of the scopes listed in the [Authorization](#authorization-scopes) section; script projects that do not require authorization cannot be executed through this API. To find the correct scopes to include in the authentication token, open the script project **Overview** page and scroll down to "Project OAuth Scopes." The error `403, PERMISSION_DENIED: The caller does not have permission` indicates that the Cloud Platform project used to authorize the request is not the same as the one used by the script.',
  operationId: 'script.scripts.run',
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
      scriptId: z
        .string()
        .openapi({
          param: {
            description:
              'The script ID of the script to be executed. Find the script ID on the **Project settings** page under "IDs."',
            in: 'path',
            name: 'scriptId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: ExecutionRequestSchema } } },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: OperationSchema } },
    },
  },
  security: [
    { Oauth2: ['https://mail.google.com/'], Oauth2c: ['https://mail.google.com/'] },
    {
      Oauth2: ['https://www.google.com/calendar/feeds'],
      Oauth2c: ['https://www.google.com/calendar/feeds'],
    },
    { Oauth2: ['https://www.google.com/m8/feeds'], Oauth2c: ['https://www.google.com/m8/feeds'] },
    {
      Oauth2: ['https://www.googleapis.com/auth/admin.directory.group'],
      Oauth2c: ['https://www.googleapis.com/auth/admin.directory.group'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/admin.directory.user'],
      Oauth2c: ['https://www.googleapis.com/auth/admin.directory.user'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/documents'],
      Oauth2c: ['https://www.googleapis.com/auth/documents'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/drive'],
      Oauth2c: ['https://www.googleapis.com/auth/drive'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/forms'],
      Oauth2c: ['https://www.googleapis.com/auth/forms'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/forms.currentonly'],
      Oauth2c: ['https://www.googleapis.com/auth/forms.currentonly'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/groups'],
      Oauth2c: ['https://www.googleapis.com/auth/groups'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/spreadsheets'],
      Oauth2c: ['https://www.googleapis.com/auth/spreadsheets'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/userinfo.email'],
      Oauth2c: ['https://www.googleapis.com/auth/userinfo.email'],
    },
  ],
})
