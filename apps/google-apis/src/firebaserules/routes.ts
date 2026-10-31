import { createRoute, z } from '@hono/zod-openapi'

const SourcePositionSchema = z
  .object({
    column: z
      .int32()
      .exactOptional()
      .openapi({
        description: 'First column on the source line associated with the source fragment.',
      }),
    currentOffset: z
      .int32()
      .exactOptional()
      .openapi({ description: 'Start position relative to the beginning of the file.' }),
    endOffset: z
      .int32()
      .exactOptional()
      .openapi({ description: 'End position relative to the beginning of the file.' }),
    fileName: z.string().exactOptional().openapi({ description: 'Name of the `File`.' }),
    line: z
      .int32()
      .exactOptional()
      .openapi({ description: 'Line number of the source fragment. 1-based.' }),
  })
  .openapi({
    description:
      'Position in the `Source` content including its line, column number, and an index of the `File` in the `Source` message. Used for debug purposes.',
    required: [],
  })
  .openapi('SourcePosition')

const ValueCountSchema = z
  .object({
    count: z
      .int32()
      .exactOptional()
      .openapi({ description: 'The amount of times that expression returned.' }),
    value: z.any().exactOptional().openapi({ description: 'The return value of the expression' }),
  })
  .openapi({
    description:
      'Tuple for how many times an Expression was evaluated to a particular ExpressionValue.',
    required: [],
  })
  .openapi('ValueCount')

type ExpressionReportType = {
  children?: ExpressionReportType[]
  sourcePosition?: z.infer<typeof SourcePositionSchema>
  values?: z.infer<typeof ValueCountSchema>[]
}

const EmptySchema = z
  .object({})
  .openapi({
    description:
      'A generic empty message that you can re-use to avoid defining duplicated empty messages in your APIs. A typical example is to use it as the request or the response type of an API method. For instance: service Foo { rpc Bar(google.protobuf.Empty) returns (google.protobuf.Empty); }',
  })
  .openapi('Empty')

const ArgSchema = z
  .object({
    anyValue: EmptySchema.exactOptional().openapi({
      description: 'Argument matches any value provided.',
    }),
    exactValue: z
      .any()
      .exactOptional()
      .openapi({ description: 'Argument exactly matches value provided.' }),
  })
  .openapi({ description: 'Arg matchers for the mock function.', required: [] })
  .openapi('Arg')

const ExpressionReportSchema: z.ZodType<ExpressionReportType> = z
  .lazy(() =>
    z
      .object({
        children: z
          .array(ExpressionReportSchema)
          .exactOptional()
          .openapi({ description: 'Subexpressions' }),
        sourcePosition: SourcePositionSchema.exactOptional().openapi({
          description: 'Position of expression in original rules source.',
        }),
        values: z
          .array(ValueCountSchema)
          .exactOptional()
          .openapi({ description: 'Values that this expression evaluated to when encountered.' }),
      })
      .openapi({
        description:
          'Describes where in a file an expression is found and what it was evaluated to over the course of its use.',
        required: [],
      }),
  )
  .openapi('ExpressionReport')

const FileSchema = z
  .object({
    content: z.string().exactOptional().openapi({ description: 'Required. Textual Content.' }),
    fingerprint: z
      .string()
      .exactOptional()
      .openapi({ description: 'Fingerprint (e.g. github sha) associated with the `File`.' }),
    name: z.string().exactOptional().openapi({ description: 'Required. File name.' }),
  })
  .openapi({ description: '`File` containing source content.', required: [] })
  .openapi('File')

const FunctionCallSchema = z
  .object({
    args: z
      .array(z.any())
      .exactOptional()
      .openapi({ description: 'The arguments that were provided to the function.' }),
    function: z.string().exactOptional().openapi({ description: 'Name of the function invoked.' }),
  })
  .openapi({
    description:
      'Represents a service-defined function call that was invoked during test execution.',
    required: [],
  })
  .openapi('FunctionCall')

const ResultSchema = z
  .object({
    undefined: EmptySchema.exactOptional().openapi({
      description: 'The result is undefined, meaning the result could not be computed.',
    }),
    value: z
      .any()
      .exactOptional()
      .openapi({
        description:
          'The result is an actual value. The type of the value must match that of the type declared by the service.',
      }),
  })
  .openapi({
    description: 'Possible result values from the function mock invocation.',
    required: [],
  })
  .openapi('Result')

const FunctionMockSchema = z
  .object({
    args: z
      .array(ArgSchema)
      .exactOptional()
      .openapi({
        description:
          'The list of `Arg` values to match. The order in which the arguments are provided is the order in which they must appear in the function invocation.',
      }),
    function: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The name of the function. The function name must match one provided by a service declaration.',
      }),
    result: ResultSchema.exactOptional().openapi({
      description: 'The mock result of the function call.',
    }),
  })
  .openapi({
    description:
      'Mock function definition. Mocks must refer to a function declared by the target service. The type of the function args and result will be inferred at test time. If either the arg or result values are not compatible with function type declaration, the request will be considered invalid. More than one `FunctionMock` may be provided for a given function name so long as the `Arg` matchers are distinct. There may be only one function for a given overload where all `Arg` values are `Arg.any_value`.',
    required: [],
  })
  .openapi('FunctionMock')

const GetReleaseExecutableResponseSchema = z
  .object({
    executable: z
      .string()
      .exactOptional()
      .openapi({ description: 'Executable view of the `Ruleset` referenced by the `Release`.' }),
    executableVersion: z
      .enum([
        'RELEASE_EXECUTABLE_VERSION_UNSPECIFIED',
        'FIREBASE_RULES_EXECUTABLE_V1',
        'FIREBASE_RULES_EXECUTABLE_V2',
      ])
      .exactOptional()
      .openapi({ description: 'The Rules runtime version of the executable.' }),
    language: z
      .enum(['LANGUAGE_UNSPECIFIED', 'FIREBASE_RULES', 'EVENT_FLOW_TRIGGERS'])
      .exactOptional()
      .openapi({ description: '`Language` used to generate the executable bytes.' }),
    rulesetName: z
      .string()
      .exactOptional()
      .openapi({ description: '`Ruleset` name associated with the `Release` executable.' }),
    syncTime: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Optional, indicates the freshness of the result. The response is guaranteed to be the latest within an interval up to the sync_time (inclusive).',
      }),
    updateTime: z
      .string()
      .exactOptional()
      .openapi({ description: 'Timestamp for the most recent `Release.update_time`.' }),
  })
  .openapi({
    description: 'The response for FirebaseRulesService.GetReleaseExecutable',
    required: [],
  })
  .openapi('GetReleaseExecutableResponse')

const IssueSchema = z
  .object({
    description: z.string().exactOptional().openapi({ description: 'Short error description.' }),
    severity: z
      .enum(['SEVERITY_UNSPECIFIED', 'DEPRECATION', 'WARNING', 'ERROR'])
      .exactOptional()
      .openapi({ description: 'The severity of the issue.' }),
    sourcePosition: SourcePositionSchema.exactOptional().openapi({
      description: 'Position of the issue in the `Source`.',
    }),
  })
  .openapi({
    description: 'Issues include warnings, errors, and deprecation notices.',
    required: [],
  })
  .openapi('Issue')

const ReleaseSchema = z
  .object({
    createTime: z
      .string()
      .exactOptional()
      .openapi({ description: 'Output only. Time the release was created.', readOnly: true }),
    name: z
      .string()
      .exactOptional()
      .openapi({ description: 'Required. Format: `projects/{project_id}/releases/{release_id}`' }),
    rulesetName: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Required. Name of the `Ruleset` referred to by this `Release`. The `Ruleset` must exist for the `Release` to be created.',
      }),
    updateTime: z
      .string()
      .exactOptional()
      .openapi({ description: 'Output only. Time the release was updated.', readOnly: true }),
  })
  .openapi({
    description:
      '`Release` is a named reference to a `Ruleset`. Once a `Release` refers to a `Ruleset`, rules-enabled services will be able to enforce the `Ruleset`.',
    required: [],
  })
  .openapi('Release')

const ListReleasesResponseSchema = z
  .object({
    nextPageToken: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The pagination token to retrieve the next page of results. If the value is empty, no further results remain.',
      }),
    releases: z
      .array(ReleaseSchema)
      .exactOptional()
      .openapi({ description: 'List of `Release` instances.' }),
  })
  .openapi({ description: 'The response for FirebaseRulesService.ListReleases.', required: [] })
  .openapi('ListReleasesResponse')

const MetadataSchema = z
  .object({
    services: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description:
          'Services that this ruleset has declarations for (e.g., "cloud.firestore"). There may be 0+ of these.',
      }),
  })
  .openapi({ description: 'Metadata for a Ruleset.', required: [] })
  .openapi('Metadata')

const SourceSchema = z
  .object({
    files: z
      .array(FileSchema)
      .exactOptional()
      .openapi({ description: 'Required. `File` set constituting the `Source` bundle.' }),
  })
  .openapi({
    description: '`Source` is one or more `File` messages comprising a logical set of rules.',
    required: [],
  })
  .openapi('Source')

const RulesetSchema = z
  .object({
    createTime: z
      .string()
      .exactOptional()
      .openapi({ description: 'Output only. Time the `Ruleset` was created.', readOnly: true }),
    metadata: MetadataSchema.exactOptional().openapi({
      description: 'Output only. The metadata for this ruleset.',
      readOnly: true,
    }),
    name: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Output only. Name of the `Ruleset`. The ruleset_id is auto generated by the service. Format: `projects/{project_id}/rulesets/{ruleset_id}`',
        readOnly: true,
      }),
    source: SourceSchema.exactOptional().openapi({
      description: 'Required. `Source` for the `Ruleset`.',
    }),
  })
  .openapi({
    description:
      '`Ruleset` is an immutable copy of `Source` with a globally unique identifier and a creation time.',
    required: [],
  })
  .openapi('Ruleset')

const ListRulesetsResponseSchema = z
  .object({
    nextPageToken: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The pagination token to retrieve the next page of results. If the value is empty, no further results remain.',
      }),
    rulesets: z
      .array(RulesetSchema)
      .exactOptional()
      .openapi({ description: 'List of `Ruleset` instances.' }),
  })
  .openapi({ description: 'The response for FirebaseRulesService.ListRulesets.', required: [] })
  .openapi('ListRulesetsResponse')

const TestCaseSchema = z
  .object({
    expectation: z
      .enum(['EXPECTATION_UNSPECIFIED', 'ALLOW', 'DENY'])
      .exactOptional()
      .openapi({ description: 'Test expectation.' }),
    expressionReportLevel: z
      .enum(['LEVEL_UNSPECIFIED', 'NONE', 'FULL', 'VISITED'])
      .exactOptional()
      .openapi({ description: 'Specifies what should be included in the response.' }),
    functionMocks: z
      .array(FunctionMockSchema)
      .exactOptional()
      .openapi({
        description:
          'Optional function mocks for service-defined functions. If not set, any service defined function is expected to return an error, which may or may not influence the test outcome.',
      }),
    pathEncoding: z
      .enum(['ENCODING_UNSPECIFIED', 'URL_ENCODED', 'PLAIN'])
      .exactOptional()
      .openapi({
        description: 'Specifies whether paths (such as request.path) are encoded and how.',
      }),
    request: z
      .any()
      .exactOptional()
      .openapi({
        description:
          'Request context. The exact format of the request context is service-dependent. See the appropriate service documentation for information about the supported fields and types on the request. Minimally, all services support the following fields and types: Request field | Type ---------------|----------------- auth.uid | `string` auth.token | `map` headers | `map` method | `string` params | `map` path | `string` time | `google.protobuf.Timestamp` If the request value is not well-formed for the service, the request will be rejected as an invalid argument.',
      }),
    resource: z
      .any()
      .exactOptional()
      .openapi({
        description:
          'Optional resource value as it appears in persistent storage before the request is fulfilled. The resource type depends on the `request.path` value.',
      }),
  })
  .openapi({
    description:
      '`TestCase` messages provide the request context and an expectation as to whether the given context will be allowed or denied. Test cases may specify the `request`, `resource`, and `function_mocks` to mock a function call to a service-provided function. The `request` object represents context present at request-time. The `resource` is the value of the target resource as it appears in persistent storage before the request is executed.',
    required: [],
  })
  .openapi('TestCase')

const VisitedExpressionSchema = z
  .object({
    sourcePosition: SourcePositionSchema.exactOptional().openapi({
      description: 'Position in the `Source` or `Ruleset` where an expression was visited.',
    }),
    value: z
      .any()
      .exactOptional()
      .openapi({ description: 'The evaluated value for the visited expression, e.g. true/false' }),
  })
  .openapi({
    description: 'Store the position and access outcome for an expression visited in rules.',
    required: [],
  })
  .openapi('VisitedExpression')

const TestResultSchema = z
  .object({
    debugMessages: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description:
          'Debug messages related to test execution issues encountered during evaluation. Debug messages may be related to too many or too few invocations of function mocks or to runtime errors that occur during evaluation. For example: ```Unable to read variable [name: "resource"]```',
      }),
    errorPosition: SourcePositionSchema.exactOptional().openapi({
      description:
        'Position in the `Source` or `Ruleset` where the principle runtime error occurs. Evaluation of an expression may result in an error. Rules are deny by default, so a `DENY` expectation when an error is generated is valid. When there is a `DENY` with an error, the `SourcePosition` is returned. E.g. `error_position { line: 19 column: 37 }`',
    }),
    expressionReports: z
      .array(ExpressionReportSchema)
      .exactOptional()
      .openapi({
        description:
          'The mapping from expression in the ruleset AST to the values they were evaluated to. Partially-nested to mirror AST structure. Note that this field is actually tracking expressions and not permission statements in contrast to the "visited_expressions" field above. Literal expressions are omitted.',
      }),
    functionCalls: z
      .array(FunctionCallSchema)
      .exactOptional()
      .openapi({
        description:
          'The set of function calls made to service-defined methods. Function calls are included in the order in which they are encountered during evaluation, are provided for both mocked and unmocked functions, and included on the response regardless of the test `state`.',
      }),
    state: z
      .enum(['STATE_UNSPECIFIED', 'SUCCESS', 'FAILURE'])
      .exactOptional()
      .openapi({ description: 'State of the test.' }),
    visitedExpressions: z
      .array(VisitedExpressionSchema)
      .exactOptional()
      .openapi({
        description:
          'The set of visited permission expressions for a given test. This returns the positions and evaluation results of all visited permission expressions which were relevant to the test case, e.g. ``` match /path { allow read if: } ``` For a detailed report of the intermediate evaluation states, see the `expression_reports` field',
      }),
  })
  .openapi({
    description:
      'Test result message containing the state of the test as well as a description and source position for test failures.',
    required: [],
  })
  .openapi('TestResult')

const TestSuiteSchema = z
  .object({
    testCases: z
      .array(TestCaseSchema)
      .exactOptional()
      .openapi({ description: 'Collection of test cases associated with the `TestSuite`.' }),
  })
  .openapi({
    description:
      '`TestSuite` is a collection of `TestCase` instances that validate the logical correctness of a `Ruleset`. The `TestSuite` may be referenced in-line within a `TestRuleset` invocation or as part of a `Release` object as a pre-release check.',
    required: [],
  })
  .openapi('TestSuite')

const TestRulesetRequestSchema = z
  .object({
    source: SourceSchema.exactOptional().openapi({
      description:
        'Optional `Source` to be checked for correctness. This field must not be set when the resource name refers to a `Ruleset`.',
    }),
    testSuite: TestSuiteSchema.exactOptional().openapi({
      description:
        'The tests to execute against the `Source`. When `Source` is provided inline, the test cases will only be run if the `Source` is syntactically and semantically valid. Inline `TestSuite` to run.',
    }),
  })
  .openapi({ description: 'The request for FirebaseRulesService.TestRuleset.', required: [] })
  .openapi('TestRulesetRequest')

const TestRulesetResponseSchema = z
  .object({
    issues: z
      .array(IssueSchema)
      .exactOptional()
      .openapi({
        description:
          'Syntactic and semantic `Source` issues of varying severity. Issues of `ERROR` severity will prevent tests from executing.',
      }),
    testResults: z
      .array(TestResultSchema)
      .exactOptional()
      .openapi({
        description:
          'The set of test results given the test cases in the `TestSuite`. The results will appear in the same order as the test cases appear in the `TestSuite`.',
      }),
  })
  .openapi({ description: 'The response for FirebaseRulesService.TestRuleset.', required: [] })
  .openapi('TestRulesetResponse')

const UpdateReleaseRequestSchema = z
  .object({
    release: ReleaseSchema.exactOptional().openapi({
      description: 'Required. `Release` to update.',
    }),
    updateMask: z
      .string()
      .exactOptional()
      .openapi({ description: 'Specifies which fields to update.' }),
  })
  .openapi({ description: 'The request for FirebaseRulesService.UpdateRelease.', required: [] })
  .openapi('UpdateReleaseRequest')

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
        'https://www.googleapis.com/auth/firebase':
          'View and administer all your Firebase data and settings',
        'https://www.googleapis.com/auth/firebase.readonly':
          'View all your Firebase data and settings',
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
        'https://www.googleapis.com/auth/firebase':
          'View and administer all your Firebase data and settings',
        'https://www.googleapis.com/auth/firebase.readonly':
          'View all your Firebase data and settings',
      },
      tokenUrl: 'https://accounts.google.com/o/oauth2/token',
    },
  },
  type: 'oauth2',
}

export const getV1NameRoute = createRoute({
  method: 'get',
  path: '/v1/{name}',
  tags: ['projects'],
  description: 'Get a `Ruleset` by name including the full `Source` contents.',
  operationId: 'firebaserules.projects.rulesets.get',
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
              'Required. Resource name for the ruleset to get. Format: `projects/{project_id}/rulesets/{ruleset_id}`',
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
      content: { 'application/json': { schema: RulesetSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/firebase'],
      Oauth2c: ['https://www.googleapis.com/auth/firebase'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/firebase.readonly'],
      Oauth2c: ['https://www.googleapis.com/auth/firebase.readonly'],
    },
  ],
})

export const deleteV1NameRoute = createRoute({
  method: 'delete',
  path: '/v1/{name}',
  tags: ['projects'],
  description:
    'Delete a `Ruleset` by resource name. If the `Ruleset` is referenced by a `Release` the operation will fail.',
  operationId: 'firebaserules.projects.rulesets.delete',
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
              'Required. Resource name for the ruleset to delete. Format: `projects/{project_id}/rulesets/{ruleset_id}`',
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
      content: { 'application/json': { schema: EmptySchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/firebase'],
      Oauth2c: ['https://www.googleapis.com/auth/firebase'],
    },
  ],
})

export const patchV1NameRoute = createRoute({
  method: 'patch',
  path: '/v1/{name}',
  tags: ['projects'],
  description:
    'Update a `Release` via PATCH. Only updates to `ruleset_name` will be honored. `Release` rename is not supported. To create a `Release` use the CreateRelease method.',
  operationId: 'firebaserules.projects.releases.patch',
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
              'Required. Resource name for the project which owns this `Release`. Format: `projects/{project_id}`',
            in: 'path',
            name: 'name',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: UpdateReleaseRequestSchema } } },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: ReleaseSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/firebase'],
      Oauth2c: ['https://www.googleapis.com/auth/firebase'],
    },
  ],
})

export const getV1NameReleasesRoute = createRoute({
  method: 'get',
  path: '/v1/{name}/releases',
  tags: ['projects'],
  description:
    'List the `Release` values for a project. This list may optionally be filtered by `Release` name, `Ruleset` name, `TestSuite` name, or any combination thereof.',
  operationId: 'firebaserules.projects.releases.list',
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
      filter: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              "`Release` filter. The list method supports filters with restrictions on the `Release.name`, and `Release.ruleset_name`. Example 1: A filter of 'name=prod*' might return `Release`s with names within 'projects/foo' prefixed with 'prod': Name -> Ruleset Name: * projects/foo/releases/prod -> projects/foo/rulesets/uuid1234 * projects/foo/releases/prod/v1 -> projects/foo/rulesets/uuid1234 * projects/foo/releases/prod/v2 -> projects/foo/rulesets/uuid8888 Example 2: A filter of `name=prod* ruleset_name=uuid1234` would return only `Release` instances for 'projects/foo' with names prefixed with 'prod' referring to the same `Ruleset` name of 'uuid1234': Name -> Ruleset Name: * projects/foo/releases/prod -> projects/foo/rulesets/1234 * projects/foo/releases/prod/v1 -> projects/foo/rulesets/1234 In the examples, the filter parameters refer to the search filters are relative to the project. Fully qualified prefixed may also be used.",
            in: 'query',
            name: 'filter',
            schema: { type: 'string' },
            required: false,
          },
        }),
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
              'Page size to load. Maximum of 100. Defaults to 10. Note: `page_size` is just a hint and the service may choose to load fewer than `page_size` results due to the size of the output. To traverse all of the releases, the caller should iterate until the `page_token` on the response is empty.',
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
            description: 'Next page token for the next batch of `Release` instances.',
            in: 'query',
            name: 'pageToken',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
    params: z.object({
      name: z
        .string()
        .openapi({
          param: {
            description: 'Required. Resource name for the project. Format: `projects/{project_id}`',
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
      content: { 'application/json': { schema: ListReleasesResponseSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/firebase'],
      Oauth2c: ['https://www.googleapis.com/auth/firebase'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/firebase.readonly'],
      Oauth2c: ['https://www.googleapis.com/auth/firebase.readonly'],
    },
  ],
})

export const postV1NameReleasesRoute = createRoute({
  method: 'post',
  path: '/v1/{name}/releases',
  tags: ['projects'],
  description:
    "Create a `Release`. Release names should reflect the developer's deployment practices. For example, the release name may include the environment name, application name, application version, or any other name meaningful to the developer. Once a `Release` refers to a `Ruleset`, the rules can be enforced by Firebase Rules-enabled services. More than one `Release` may be 'live' concurrently. Consider the following three `Release` names for `projects/foo` and the `Ruleset` to which they refer. Release Name -> Ruleset Name * projects/foo/releases/prod -> projects/foo/rulesets/uuid123 * projects/foo/releases/prod/beta -> projects/foo/rulesets/uuid123 * projects/foo/releases/prod/v23 -> projects/foo/rulesets/uuid456 The relationships reflect a `Ruleset` rollout in progress. The `prod` and `prod/beta` releases refer to the same `Ruleset`. However, `prod/v23` refers to a new `Ruleset`. The `Ruleset` reference for a `Release` may be updated using the UpdateRelease method.",
  operationId: 'firebaserules.projects.releases.create',
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
              'Required. Resource name for the project which owns this `Release`. Format: `projects/{project_id}`',
            in: 'path',
            name: 'name',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: ReleaseSchema } } },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: ReleaseSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/firebase'],
      Oauth2c: ['https://www.googleapis.com/auth/firebase'],
    },
  ],
})

export const getV1NameRulesetsRoute = createRoute({
  method: 'get',
  path: '/v1/{name}/rulesets',
  tags: ['projects'],
  description:
    'List `Ruleset` metadata only and optionally filter the results by `Ruleset` name. The full `Source` contents of a `Ruleset` may be retrieved with GetRuleset.',
  operationId: 'firebaserules.projects.rulesets.list',
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
      filter: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              '`Ruleset` filter. The list method supports filters with restrictions on `Ruleset.name`. Filters on `Ruleset.create_time` should use the `date` function which parses strings that conform to the RFC 3339 date/time specifications. Example: `create_time > date("2017-01-01T00:00:00Z") AND name=UUID-*`',
            in: 'query',
            name: 'filter',
            schema: { type: 'string' },
            required: false,
          },
        }),
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
              'Page size to load. Maximum of 100. Defaults to 10. Note: `page_size` is just a hint and the service may choose to load less than `page_size` due to the size of the output. To traverse all of the releases, caller should iterate until the `page_token` is empty.',
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
            description: 'Next page token for loading the next batch of `Ruleset` instances.',
            in: 'query',
            name: 'pageToken',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
    params: z.object({
      name: z
        .string()
        .openapi({
          param: {
            description: 'Required. Resource name for the project. Format: `projects/{project_id}`',
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
      content: { 'application/json': { schema: ListRulesetsResponseSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/firebase'],
      Oauth2c: ['https://www.googleapis.com/auth/firebase'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/firebase.readonly'],
      Oauth2c: ['https://www.googleapis.com/auth/firebase.readonly'],
    },
  ],
})

export const postV1NameRulesetsRoute = createRoute({
  method: 'post',
  path: '/v1/{name}/rulesets',
  tags: ['projects'],
  description:
    'Create a `Ruleset` from `Source`. The `Ruleset` is given a unique generated name which is returned to the caller. `Source` containing syntactic or semantics errors will result in an error response indicating the first error encountered. For a detailed view of `Source` issues, use TestRuleset.',
  operationId: 'firebaserules.projects.rulesets.create',
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
              'Required. Resource name for Project which owns this `Ruleset`. Format: `projects/{project_id}`',
            in: 'path',
            name: 'name',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: RulesetSchema } } },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: RulesetSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/firebase'],
      Oauth2c: ['https://www.googleapis.com/auth/firebase'],
    },
  ],
})

export const getV1NameGetExecutableRoute = createRoute({
  method: 'get',
  path: '/v1/{name}:getExecutable',
  tags: ['projects'],
  description: 'Get the `Release` executable to use when enforcing rules.',
  operationId: 'firebaserules.projects.releases.getExecutable',
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
      executableVersion: z
        .enum([
          'RELEASE_EXECUTABLE_VERSION_UNSPECIFIED',
          'FIREBASE_RULES_EXECUTABLE_V1',
          'FIREBASE_RULES_EXECUTABLE_V2',
        ])
        .exactOptional()
        .openapi({
          param: {
            description:
              'The requested runtime executable version. Defaults to FIREBASE_RULES_EXECUTABLE_V1.',
            in: 'query',
            name: 'executableVersion',
            schema: {
              enum: [
                'RELEASE_EXECUTABLE_VERSION_UNSPECIFIED',
                'FIREBASE_RULES_EXECUTABLE_V1',
                'FIREBASE_RULES_EXECUTABLE_V2',
              ],
              type: 'string',
            },
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
              'Required. Resource name of the `Release`. Format: `projects/{project_id}/releases/{release_id}`',
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
      content: { 'application/json': { schema: GetReleaseExecutableResponseSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/firebase'],
      Oauth2c: ['https://www.googleapis.com/auth/firebase'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/firebase.readonly'],
      Oauth2c: ['https://www.googleapis.com/auth/firebase.readonly'],
    },
  ],
})

export const postV1NameTestRoute = createRoute({
  method: 'post',
  path: '/v1/{name}:test',
  tags: ['projects'],
  description:
    "Test `Source` for syntactic and semantic correctness. Issues present, if any, will be returned to the caller with a description, severity, and source location. The test method may be executed with `Source` or a `Ruleset` name. Passing `Source` is useful for unit testing new rules. Passing a `Ruleset` name is useful for regression testing an existing rule. The following is an example of `Source` that permits users to upload images to a bucket bearing their user id and matching the correct metadata: _*Example*_ // Users are allowed to subscribe and unsubscribe to the blog. service firebase.storage { match /users/{userId}/images/{imageName} { allow write: if userId == request.auth.uid && (imageName.matches('*.png$') || imageName.matches('*.jpg$')) && resource.mimeType.matches('^image/') } }",
  operationId: 'firebaserules.projects.test',
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
              'Required. Tests may either provide `source` or a `Ruleset` resource name. For tests against `source`, the resource name must refer to the project: Format: `projects/{project_id}` For tests against a `Ruleset`, this must be the `Ruleset` resource name: Format: `projects/{project_id}/rulesets/{ruleset_id}`',
            in: 'path',
            name: 'name',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: TestRulesetRequestSchema } } },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: TestRulesetResponseSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/firebase'],
      Oauth2c: ['https://www.googleapis.com/auth/firebase'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/firebase.readonly'],
      Oauth2c: ['https://www.googleapis.com/auth/firebase.readonly'],
    },
  ],
})
