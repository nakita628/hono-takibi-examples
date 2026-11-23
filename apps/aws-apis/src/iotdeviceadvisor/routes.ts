import { createRoute, z } from '@hono/zod-openapi'

const UUIDSchema = z.string().min(12).max(36).openapi('UUID')

const SuiteDefinitionVersionSchema = z.string().min(2).max(255).openapi('SuiteDefinitionVersion')

const AmazonResourceNameSchema = z.string().min(20).max(2048).openapi('AmazonResourceName')

const DeviceUnderTestSchema = z
  .object({
    thingArn: AmazonResourceNameSchema.exactOptional().openapi({
      description: 'Lists devices thing ARN.',
    }),
    certificateArn: AmazonResourceNameSchema.exactOptional().openapi({
      description: 'Lists devices certificate ARN.',
    }),
  })
  .openapi({
    description: 'Information of a test device. A thing ARN or a certificate ARN is required.',
    required: [],
  })
  .openapi('DeviceUnderTest')

const SelectedTestListSchema = z.array(UUIDSchema).min(0).max(100).openapi('SelectedTestList')

const ParallelRunSchema = z.boolean().openapi('ParallelRun')

const SuiteRunConfigurationSchema = z
  .object({
    primaryDevice: DeviceUnderTestSchema.openapi({
      description:
        'Sets the primary device for the test suite run. This requires a thing ARN or a certificate ARN.',
    }),
    selectedTestList: SelectedTestListSchema.exactOptional().openapi({
      description: 'Sets test case list.',
    }),
    parallelRun: ParallelRunSchema.exactOptional().openapi({
      description: 'TRUE if multiple test suites run in parallel.',
    }),
  })
  .openapi({ required: ['primaryDevice'], description: 'Gets suite run configuration.' })
  .openapi('SuiteRunConfiguration')

const GroupNameSchema = z.string().openapi('GroupName')

const TestCaseDefinitionNameSchema = z.string().openapi('TestCaseDefinitionName')

const StatusSchema = z
  .enum([
    'PASS',
    'FAIL',
    'CANCELED',
    'PENDING',
    'RUNNING',
    'STOPPING',
    'STOPPED',
    'PASS_WITH_WARNINGS',
    'ERROR',
  ])
  .openapi('Status')

const TimestampSchema = z.iso.datetime({ offset: true }).openapi('Timestamp')

const LogUrlSchema = z.string().openapi('LogUrl')

const WarningsSchema = z.string().openapi('Warnings')

const FailureSchema = z.string().openapi('Failure')

const TestCaseScenarioIdSchema = z.string().openapi('TestCaseScenarioId')

const TestCaseScenarioTypeSchema = z.enum(['Advanced', 'Basic']).openapi('TestCaseScenarioType')

const TestCaseScenarioStatusSchema = z
  .enum([
    'PASS',
    'FAIL',
    'CANCELED',
    'PENDING',
    'RUNNING',
    'STOPPING',
    'STOPPED',
    'PASS_WITH_WARNINGS',
    'ERROR',
  ])
  .openapi('TestCaseScenarioStatus')

const SystemMessageSchema = z.string().openapi('SystemMessage')

const TestCaseScenarioSchema = z
  .object({
    testCaseScenarioId: TestCaseScenarioIdSchema.exactOptional().openapi({
      description: 'Provides test case scenario ID.',
    }),
    testCaseScenarioType: TestCaseScenarioTypeSchema.exactOptional().openapi({
      description:
        '<p>Provides test case scenario type. Type is one of the following:</p> <ul> <li> <p>Advanced</p> </li> <li> <p>Basic</p> </li> </ul>',
    }),
    status: TestCaseScenarioStatusSchema.exactOptional().openapi({
      description:
        '<p>Provides the test case scenario status. Status is one of the following:</p> <ul> <li> <p> <code>PASS</code>: Test passed.</p> </li> <li> <p> <code>FAIL</code>: Test failed.</p> </li> <li> <p> <code>PENDING</code>: Test has not started running but is scheduled.</p> </li> <li> <p> <code>RUNNING</code>: Test is running.</p> </li> <li> <p> <code>STOPPING</code>: Test is performing cleanup steps. You will see this status only if you stop a suite run.</p> </li> <li> <p> <code>STOPPED</code> Test is stopped. You will see this status only if you stop a suite run.</p> </li> <li> <p> <code>PASS_WITH_WARNINGS</code>: Test passed with warnings.</p> </li> <li> <p> <code>ERORR</code>: Test faced an error when running due to an internal issue.</p> </li> </ul>',
    }),
    failure: FailureSchema.exactOptional().openapi({
      description: 'Provides test case scenario failure result.',
    }),
    systemMessage: SystemMessageSchema.exactOptional().openapi({ description: ' ' }),
  })
  .openapi({ description: 'Provides test case scenario.', required: [] })
  .openapi('TestCaseScenario')

const TestCaseScenariosListSchema = z.array(TestCaseScenarioSchema).openapi('TestCaseScenariosList')

const TestCaseRunSchema = z
  .object({
    testCaseRunId: UUIDSchema.exactOptional().openapi({
      description: 'Provides the test case run ID.',
    }),
    testCaseDefinitionId: UUIDSchema.exactOptional().openapi({
      description: 'Provides the test case run definition ID.',
    }),
    testCaseDefinitionName: TestCaseDefinitionNameSchema.exactOptional().openapi({
      description: 'Provides the test case run definition name.',
    }),
    status: StatusSchema.exactOptional().openapi({
      description:
        '<p>Provides the test case run status. Status is one of the following:</p> <ul> <li> <p> <code>PASS</code>: Test passed.</p> </li> <li> <p> <code>FAIL</code>: Test failed.</p> </li> <li> <p> <code>PENDING</code>: Test has not started running but is scheduled.</p> </li> <li> <p> <code>RUNNING</code>: Test is running.</p> </li> <li> <p> <code>STOPPING</code>: Test is performing cleanup steps. You will see this status only if you stop a suite run.</p> </li> <li> <p> <code>STOPPED</code> Test is stopped. You will see this status only if you stop a suite run.</p> </li> <li> <p> <code>PASS_WITH_WARNINGS</code>: Test passed with warnings.</p> </li> <li> <p> <code>ERORR</code>: Test faced an error when running due to an internal issue.</p> </li> </ul>',
    }),
    startTime: TimestampSchema.exactOptional().openapi({
      description: 'Provides test case run start time.',
    }),
    endTime: TimestampSchema.exactOptional().openapi({
      description: 'Provides test case run end time.',
    }),
    logUrl: LogUrlSchema.exactOptional().openapi({
      description: 'Provides test case run log URL.',
    }),
    warnings: WarningsSchema.exactOptional().openapi({
      description: 'Provides test case run warnings.',
    }),
    failure: FailureSchema.exactOptional().openapi({
      description: 'Provides test case run failure result.',
    }),
    testScenarios: TestCaseScenariosListSchema.exactOptional().openapi({
      description: ' Provides the test scenarios for the test case run. ',
    }),
  })
  .openapi({ description: 'Provides the test case run.', required: [] })
  .openapi('TestCaseRun')

const TestCaseRunsSchema = z
  .array(TestCaseRunSchema)
  .openapi({ description: 'Tests under each group result.' })
  .openapi('TestCaseRuns')

const GroupResultSchema = z
  .object({
    groupId: UUIDSchema.exactOptional().openapi({ description: 'Group result ID.' }),
    groupName: GroupNameSchema.exactOptional().openapi({ description: 'Group Result Name.' }),
    tests: TestCaseRunsSchema.exactOptional().openapi({ description: 'Tests under Group Result.' }),
  })
  .openapi({ description: 'Show Group Result.', required: [] })
  .openapi('GroupResult')

const GroupResultListSchema = z
  .array(GroupResultSchema)
  .openapi({ description: 'Group Result list.' })
  .openapi('GroupResultList')

const TestResultSchema = z
  .object({
    groups: GroupResultListSchema.exactOptional().openapi({
      description: 'Show each group of test results.',
    }),
  })
  .openapi({ description: 'Show each group result.', required: [] })
  .openapi('TestResult')

const SuiteRunStatusSchema = z
  .enum([
    'PASS',
    'FAIL',
    'CANCELED',
    'PENDING',
    'RUNNING',
    'STOPPING',
    'STOPPED',
    'PASS_WITH_WARNINGS',
    'ERROR',
  ])
  .openapi('SuiteRunStatus')

const ErrorReasonSchema = z.string().openapi('ErrorReason')

const String256Schema = z.string().min(1).max(256).openapi('String256')

const TagMapSchema = z
  .record(z.string(), String256Schema)
  .refine((val) => Object.keys(val).length >= 0)
  .refine((val) => Object.keys(val).length <= 50)
  .openapi('TagMap')

type GetSuiteRunResponseType = {
  suiteDefinitionId?: z.infer<typeof UUIDSchema>
  suiteDefinitionVersion?: z.infer<typeof SuiteDefinitionVersionSchema>
  suiteRunId?: z.infer<typeof UUIDSchema>
  suiteRunArn?: z.infer<typeof AmazonResourceNameSchema>
  suiteRunConfiguration?: z.infer<typeof SuiteRunConfigurationSchema>
  testResult?: z.infer<typeof TestResultSchema>
  startTime?: z.infer<typeof TimestampSchema>
  endTime?: z.infer<typeof TimestampSchema>
  status?: z.infer<typeof SuiteRunStatusSchema>
  errorReason?: z.infer<typeof ErrorReasonSchema>
  tags?: z.infer<typeof TagMapSchema>
}

const SuiteDefinitionNameSchema = z.string().min(1).max(256).openapi('SuiteDefinitionName')

const CreateSuiteDefinitionResponseSchema = z
  .object({
    suiteDefinitionId: UUIDSchema.exactOptional().openapi({
      description: 'The UUID of the test suite created.',
    }),
    suiteDefinitionArn: AmazonResourceNameSchema.exactOptional().openapi({
      description: 'The Amazon Resource Name (ARN) of the test suite.',
    }),
    suiteDefinitionName: SuiteDefinitionNameSchema.exactOptional().openapi({
      description: 'The suite definition name of the test suite. This is a required parameter.',
    }),
    createdAt: TimestampSchema.exactOptional().openapi({
      description: 'The timestamp of when the test suite was created.',
    }),
  })
  .openapi({ required: [] })
  .openapi('CreateSuiteDefinitionResponse')

const DeviceUnderTestListSchema = z
  .array(DeviceUnderTestSchema)
  .min(0)
  .max(2)
  .openapi('DeviceUnderTestList')

const IntendedForQualificationBooleanSchema = z.boolean().openapi('IntendedForQualificationBoolean')

const IsLongDurationTestBooleanSchema = z.boolean().openapi('IsLongDurationTestBoolean')

const RootGroupSchema = z.string().min(1).max(2048).openapi('RootGroup')

const ProtocolSchema = z.enum(['MqttV3_1_1', 'MqttV5']).openapi('Protocol')

const ValidationExceptionSchema = z.any().openapi('ValidationException')

const InternalServerExceptionSchema = z.any().openapi('InternalServerException')

const DeleteSuiteDefinitionResponseSchema = z
  .looseObject({})
  .openapi('DeleteSuiteDefinitionResponse')

const EndpointSchema = z.string().min(45).max(75).openapi('Endpoint')

const GetEndpointResponseSchema = z
  .object({
    endpoint: EndpointSchema.exactOptional().openapi({
      description: 'The response of an Device Advisor endpoint.',
    }),
  })
  .openapi({ required: [] })
  .openapi('GetEndpointResponse')

const ResourceNotFoundExceptionSchema = z.any().openapi('ResourceNotFoundException')

const SuiteDefinitionConfigurationSchema = z
  .object({
    suiteDefinitionName: SuiteDefinitionNameSchema.openapi({
      description: 'Gets the suite definition name. This is a required parameter.',
    }),
    devices: DeviceUnderTestListSchema.exactOptional().openapi({
      description: 'Gets the devices configured.',
    }),
    intendedForQualification: IntendedForQualificationBooleanSchema.exactOptional().openapi({
      description: 'Gets the tests intended for qualification in a suite.',
    }),
    isLongDurationTest: IsLongDurationTestBooleanSchema.exactOptional().openapi({
      description: 'Verifies if the test suite is a long duration test.',
    }),
    rootGroup: RootGroupSchema.openapi({
      description: 'Gets the test suite root group. This is a required parameter.',
    }),
    devicePermissionRoleArn: AmazonResourceNameSchema.openapi({
      description: 'Gets the device permission ARN. This is a required parameter.',
    }),
    protocol: ProtocolSchema.exactOptional().openapi({
      description: 'Sets the MQTT protocol that is configured in the suite definition.',
    }),
  })
  .openapi({
    required: ['suiteDefinitionName', 'rootGroup', 'devicePermissionRoleArn'],
    description: 'Gets the suite definition configuration.',
  })
  .openapi('SuiteDefinitionConfiguration')

const GetSuiteDefinitionResponseSchema = z
  .object({
    suiteDefinitionId: UUIDSchema.exactOptional().openapi({
      description: 'Suite definition ID of the suite definition.',
    }),
    suiteDefinitionArn: AmazonResourceNameSchema.exactOptional().openapi({
      description: 'The ARN of the suite definition.',
    }),
    suiteDefinitionVersion: SuiteDefinitionVersionSchema.exactOptional().openapi({
      description: 'Suite definition version of the suite definition.',
    }),
    latestVersion: SuiteDefinitionVersionSchema.exactOptional().openapi({
      description: 'Latest suite definition version of the suite definition.',
    }),
    suiteDefinitionConfiguration: SuiteDefinitionConfigurationSchema.exactOptional().openapi({
      description: 'Suite configuration of the suite definition.',
    }),
    createdAt: TimestampSchema.exactOptional().openapi({
      description: 'Date (in Unix epoch time) when the suite definition was created.',
    }),
    lastModifiedAt: TimestampSchema.exactOptional().openapi({
      description: 'Date (in Unix epoch time) when the suite definition was last modified.',
    }),
    tags: TagMapSchema.exactOptional().openapi({
      description: 'Tags attached to the suite definition.',
    }),
  })
  .openapi({ required: [] })
  .openapi('GetSuiteDefinitionResponse')

const GetSuiteRunResponseSchema: z.ZodType<GetSuiteRunResponseType> = z
  .object({
    suiteDefinitionId: UUIDSchema.exactOptional().openapi({
      description: 'Suite definition ID for the test suite run.',
    }),
    suiteDefinitionVersion: SuiteDefinitionVersionSchema.exactOptional().openapi({
      description: 'Suite definition version for the test suite run.',
    }),
    suiteRunId: UUIDSchema.exactOptional().openapi({
      description: 'Suite run ID for the test suite run.',
    }),
    suiteRunArn: AmazonResourceNameSchema.exactOptional().openapi({
      description: 'The ARN of the suite run.',
    }),
    suiteRunConfiguration: SuiteRunConfigurationSchema.exactOptional().openapi({
      description: 'Suite run configuration for the test suite run.',
    }),
    testResult: TestResultSchema.exactOptional().openapi({
      description: 'Test results for the test suite run.',
    }),
    startTime: TimestampSchema.exactOptional().openapi({
      description: 'Date (in Unix epoch time) when the test suite run started.',
    }),
    endTime: TimestampSchema.exactOptional().openapi({
      description: 'Date (in Unix epoch time) when the test suite run ended.',
    }),
    status: SuiteRunStatusSchema.exactOptional().openapi({
      description: 'Status for the test suite run.',
    }),
    errorReason: ErrorReasonSchema.exactOptional().openapi({
      description: 'Error reason for any test suite run failure.',
    }),
    tags: TagMapSchema.exactOptional().openapi({
      description: 'The tags attached to the suite run.',
    }),
  })
  .openapi({ required: [] })
  .openapi('GetSuiteRunResponse')

const QualificationReportDownloadUrlSchema = z.string().openapi('QualificationReportDownloadUrl')

const GetSuiteRunReportResponseSchema = z
  .object({
    qualificationReportDownloadUrl: QualificationReportDownloadUrlSchema.exactOptional().openapi({
      description: 'Download URL of the qualification report.',
    }),
  })
  .openapi({ required: [] })
  .openapi('GetSuiteRunReportResponse')

const SuiteDefinitionInformationSchema = z
  .object({
    suiteDefinitionId: UUIDSchema.exactOptional().openapi({
      description: 'Suite definition ID of the test suite.',
    }),
    suiteDefinitionName: SuiteDefinitionNameSchema.exactOptional().openapi({
      description: 'Suite name of the test suite.',
    }),
    defaultDevices: DeviceUnderTestListSchema.exactOptional().openapi({
      description: 'Specifies the devices that are under test for the test suite.',
    }),
    intendedForQualification: IntendedForQualificationBooleanSchema.exactOptional().openapi({
      description: 'Specifies if the test suite is intended for qualification.',
    }),
    isLongDurationTest: IsLongDurationTestBooleanSchema.exactOptional().openapi({
      description: 'Verifies if the test suite is a long duration test.',
    }),
    protocol: ProtocolSchema.exactOptional().openapi({
      description: 'Gets the MQTT protocol that is configured in the suite definition.',
    }),
    createdAt: TimestampSchema.exactOptional().openapi({
      description: 'Date (in Unix epoch time) when the test suite was created.',
    }),
  })
  .openapi({ description: 'Information about the suite definition.', required: [] })
  .openapi('SuiteDefinitionInformation')

const SuiteDefinitionInformationListSchema = z
  .array(SuiteDefinitionInformationSchema)
  .openapi('SuiteDefinitionInformationList')

const TokenSchema = z.string().max(2000).openapi('Token')

const ListSuiteDefinitionsResponseSchema = z
  .object({
    suiteDefinitionInformationList: SuiteDefinitionInformationListSchema.exactOptional().openapi({
      description:
        'An array of objects that provide summaries of information about the suite definitions in the list.',
    }),
    nextToken: TokenSchema.exactOptional().openapi({
      description: 'A token used to get the next set of results.',
    }),
  })
  .openapi({ required: [] })
  .openapi('ListSuiteDefinitionsResponse')

const SuiteRunResultCountSchema = z.int().min(0).max(500).openapi('SuiteRunResultCount')

const SuiteRunInformationSchema = z
  .object({
    suiteDefinitionId: UUIDSchema.exactOptional().openapi({
      description: 'Suite definition ID of the suite run.',
    }),
    suiteDefinitionVersion: SuiteDefinitionVersionSchema.exactOptional().openapi({
      description: 'Suite definition version of the suite run.',
    }),
    suiteDefinitionName: SuiteDefinitionNameSchema.exactOptional().openapi({
      description: 'Suite definition name of the suite run.',
    }),
    suiteRunId: UUIDSchema.exactOptional().openapi({
      description: 'Suite run ID of the suite run.',
    }),
    createdAt: TimestampSchema.exactOptional().openapi({
      description: 'Date (in Unix epoch time) when the suite run was created.',
    }),
    startedAt: TimestampSchema.exactOptional().openapi({
      description: 'Date (in Unix epoch time) when the suite run was started.',
    }),
    endAt: TimestampSchema.exactOptional().openapi({
      description: 'Date (in Unix epoch time) when the suite run ended.',
    }),
    status: SuiteRunStatusSchema.exactOptional().openapi({
      description: 'Status of the suite run.',
    }),
    passed: SuiteRunResultCountSchema.exactOptional().openapi({
      description: 'Number of test cases that passed in the suite run.',
    }),
    failed: SuiteRunResultCountSchema.exactOptional().openapi({
      description: 'Number of test cases that failed in the suite run.',
    }),
  })
  .openapi({
    description:
      '<p>Information about the suite run.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">SuiteRunInformation</a> action.</p>',
    required: [],
  })
  .openapi('SuiteRunInformation')

const SuiteRunsListSchema = z.array(SuiteRunInformationSchema).openapi('SuiteRunsList')

const ListSuiteRunsResponseSchema = z
  .object({
    suiteRunsList: SuiteRunsListSchema.exactOptional().openapi({
      description:
        'An array of objects that provide summaries of information about the suite runs in the list.',
    }),
    nextToken: TokenSchema.exactOptional().openapi({
      description: 'A token to retrieve the next set of results.',
    }),
  })
  .openapi({ required: [] })
  .openapi('ListSuiteRunsResponse')

const ListTagsForResourceResponseSchema = z
  .object({
    tags: TagMapSchema.exactOptional().openapi({
      description: 'The tags attached to the IoT Device Advisor resource.',
    }),
  })
  .openapi({ required: [] })
  .openapi('ListTagsForResourceResponse')

const StartSuiteRunResponseSchema = z
  .object({
    suiteRunId: UUIDSchema.exactOptional().openapi({
      description: 'Suite Run ID of the started suite run.',
    }),
    suiteRunArn: AmazonResourceNameSchema.exactOptional().openapi({
      description: 'Amazon Resource Name (ARN) of the started suite run.',
    }),
    createdAt: TimestampSchema.exactOptional().openapi({
      description: 'Starts a Device Advisor test suite run based on suite create time.',
    }),
    endpoint: EndpointSchema.exactOptional().openapi({
      description: 'The response of an Device Advisor test endpoint.',
    }),
  })
  .openapi({ required: [] })
  .openapi('StartSuiteRunResponse')

const ConflictExceptionSchema = z.any().openapi('ConflictException')

const StopSuiteRunResponseSchema = z.looseObject({}).openapi('StopSuiteRunResponse')

const TagResourceResponseSchema = z.looseObject({}).openapi('TagResourceResponse')

const UntagResourceResponseSchema = z.looseObject({}).openapi('UntagResourceResponse')

const String128Schema = z.string().min(1).max(128).openapi('String128')

const UpdateSuiteDefinitionResponseSchema = z
  .object({
    suiteDefinitionId: UUIDSchema.exactOptional().openapi({
      description: 'Suite definition ID of the updated test suite.',
    }),
    suiteDefinitionArn: AmazonResourceNameSchema.exactOptional().openapi({
      description: 'Amazon Resource Name (ARN) of the updated test suite.',
    }),
    suiteDefinitionName: SuiteDefinitionNameSchema.exactOptional().openapi({
      description: 'Updates the suite definition name. This is a required parameter.',
    }),
    suiteDefinitionVersion: SuiteDefinitionVersionSchema.exactOptional().openapi({
      description: 'Suite definition version of the updated test suite.',
    }),
    createdAt: TimestampSchema.exactOptional().openapi({
      description: 'Timestamp of when the test suite was created.',
    }),
    lastUpdatedAt: TimestampSchema.exactOptional().openapi({
      description: 'Timestamp of when the test suite was updated.',
    }),
  })
  .openapi({ required: [] })
  .openapi('UpdateSuiteDefinitionResponse')

const CreateSuiteDefinitionRequestSchema = z
  .object({
    suiteDefinitionConfiguration: SuiteDefinitionConfigurationSchema.openapi({
      description: 'Creates a Device Advisor test suite with suite definition configuration.',
    }),
    tags: TagMapSchema.exactOptional().openapi({
      description: 'The tags to be attached to the suite definition.',
    }),
  })
  .openapi({ required: ['suiteDefinitionConfiguration'], title: 'CreateSuiteDefinitionRequest' })
  .openapi('CreateSuiteDefinitionRequest')

const DeleteSuiteDefinitionRequestSchema = z
  .looseObject({})
  .openapi({ title: 'DeleteSuiteDefinitionRequest' })
  .openapi('DeleteSuiteDefinitionRequest')

const GetEndpointRequestSchema = z
  .looseObject({})
  .openapi({ title: 'GetEndpointRequest' })
  .openapi('GetEndpointRequest')

const GetSuiteDefinitionRequestSchema = z
  .looseObject({})
  .openapi({ title: 'GetSuiteDefinitionRequest' })
  .openapi('GetSuiteDefinitionRequest')

const GetSuiteRunReportRequestSchema = z
  .looseObject({})
  .openapi({ title: 'GetSuiteRunReportRequest' })
  .openapi('GetSuiteRunReportRequest')

const GetSuiteRunRequestSchema = z
  .looseObject({})
  .openapi({ title: 'GetSuiteRunRequest' })
  .openapi('GetSuiteRunRequest')

const MaxResultsSchema = z.int().min(1).max(50).openapi('MaxResults')

const ListSuiteDefinitionsRequestSchema = z
  .looseObject({})
  .openapi({ title: 'ListSuiteDefinitionsRequest' })
  .openapi('ListSuiteDefinitionsRequest')

const ListSuiteRunsRequestSchema = z
  .looseObject({})
  .openapi({ title: 'ListSuiteRunsRequest' })
  .openapi('ListSuiteRunsRequest')

const ListTagsForResourceRequestSchema = z
  .looseObject({})
  .openapi({ title: 'ListTagsForResourceRequest' })
  .openapi('ListTagsForResourceRequest')

const StartSuiteRunRequestSchema = z
  .object({
    suiteDefinitionVersion: SuiteDefinitionVersionSchema.exactOptional().openapi({
      description: 'Suite definition version of the test suite.',
    }),
    suiteRunConfiguration: SuiteRunConfigurationSchema.openapi({
      description: 'Suite run configuration.',
    }),
    tags: TagMapSchema.exactOptional().openapi({
      description: 'The tags to be attached to the suite run.',
    }),
  })
  .openapi({ required: ['suiteRunConfiguration'], title: 'StartSuiteRunRequest' })
  .openapi('StartSuiteRunRequest')

const StopSuiteRunRequestSchema = z
  .looseObject({})
  .openapi({ title: 'StopSuiteRunRequest' })
  .openapi('StopSuiteRunRequest')

const TagKeyListSchema = z.array(String128Schema).min(0).max(50).openapi('TagKeyList')

const TagResourceRequestSchema = z
  .object({
    tags: TagMapSchema.openapi({
      description: 'The tags to be attached to the IoT Device Advisor resource.',
    }),
  })
  .openapi({ required: ['tags'], title: 'TagResourceRequest' })
  .openapi('TagResourceRequest')

const UntagResourceRequestSchema = z
  .looseObject({})
  .openapi({ title: 'UntagResourceRequest' })
  .openapi('UntagResourceRequest')

const UpdateSuiteDefinitionRequestSchema = z
  .object({
    suiteDefinitionConfiguration: SuiteDefinitionConfigurationSchema.openapi({
      description: 'Updates a Device Advisor test suite with suite definition configuration.',
    }),
  })
  .openapi({ required: ['suiteDefinitionConfiguration'], title: 'UpdateSuiteDefinitionRequest' })
  .openapi('UpdateSuiteDefinitionRequest')

const XAmzContentSha256ParamsSchema = z
  .string()
  .exactOptional()
  .openapi({
    param: {
      name: 'X-Amz-Content-Sha256',
      in: 'header',
      schema: { type: 'string' },
      required: false,
    },
  })

const XAmzDateParamsSchema = z
  .string()
  .exactOptional()
  .openapi({
    param: { name: 'X-Amz-Date', in: 'header', schema: { type: 'string' }, required: false },
  })

const XAmzAlgorithmParamsSchema = z
  .string()
  .exactOptional()
  .openapi({
    param: { name: 'X-Amz-Algorithm', in: 'header', schema: { type: 'string' }, required: false },
  })

const XAmzCredentialParamsSchema = z
  .string()
  .exactOptional()
  .openapi({
    param: { name: 'X-Amz-Credential', in: 'header', schema: { type: 'string' }, required: false },
  })

const XAmzSecurityTokenParamsSchema = z
  .string()
  .exactOptional()
  .openapi({
    param: {
      name: 'X-Amz-Security-Token',
      in: 'header',
      schema: { type: 'string' },
      required: false,
    },
  })

const XAmzSignatureParamsSchema = z
  .string()
  .exactOptional()
  .openapi({
    param: { name: 'X-Amz-Signature', in: 'header', schema: { type: 'string' }, required: false },
  })

const XAmzSignedHeadersParamsSchema = z
  .string()
  .exactOptional()
  .openapi({
    param: {
      name: 'X-Amz-SignedHeaders',
      in: 'header',
      schema: { type: 'string' },
      required: false,
    },
  })

const HmacSecurityScheme = {
  type: 'apiKey',
  name: 'Authorization',
  in: 'header',
  description: 'Amazon Signature authorization v4',
  'x-amazon-apigateway-authtype': 'awsSigv4',
}

export const getSuiteDefinitionsRoute = createRoute({
  method: 'get',
  path: '/suiteDefinitions',
  description:
    '<p>Lists the Device Advisor test suites you have created.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">ListSuiteDefinitions</a> action.</p>',
  operationId: 'ListSuiteDefinitions',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
    }),
    query: z.object({
      maxResults: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int().min(1).max(50),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'maxResults',
            in: 'query',
            required: false,
            description: 'The maximum number of results to return at once.',
            schema: { type: 'integer', minimum: 1, maximum: 50 },
          },
        }),
      nextToken: z
        .string()
        .max(2000)
        .exactOptional()
        .openapi({
          param: {
            name: 'nextToken',
            in: 'query',
            required: false,
            description: 'A token used to get the next set of results.',
            schema: { type: 'string', maxLength: 2000 },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: ListSuiteDefinitionsResponseSchema } },
    },
    480: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
    481: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
  },
})

export const postSuiteDefinitionsRoute = createRoute({
  method: 'post',
  path: '/suiteDefinitions',
  description:
    '<p>Creates a Device Advisor test suite.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">CreateSuiteDefinition</a> action.</p>',
  operationId: 'CreateSuiteDefinition',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              suiteDefinitionConfiguration: z
                .object({
                  suiteDefinitionName: SuiteDefinitionNameSchema.exactOptional().openapi({
                    description: 'Gets the suite definition name. This is a required parameter.',
                  }),
                  devices: DeviceUnderTestListSchema.exactOptional().openapi({
                    description: 'Gets the devices configured.',
                  }),
                  intendedForQualification:
                    IntendedForQualificationBooleanSchema.exactOptional().openapi({
                      description: 'Gets the tests intended for qualification in a suite.',
                    }),
                  isLongDurationTest: IsLongDurationTestBooleanSchema.exactOptional().openapi({
                    description: 'Verifies if the test suite is a long duration test.',
                  }),
                  rootGroup: RootGroupSchema.exactOptional().openapi({
                    description: 'Gets the test suite root group. This is a required parameter.',
                  }),
                  devicePermissionRoleArn: AmazonResourceNameSchema.exactOptional().openapi({
                    description: 'Gets the device permission ARN. This is a required parameter.',
                  }),
                  protocol: ProtocolSchema.exactOptional().openapi({
                    description:
                      'Sets the MQTT protocol that is configured in the suite definition.',
                  }),
                })
                .openapi({ description: 'Gets the suite definition configuration.', required: [] }),
              tags: z
                .record(z.string(), String256Schema)
                .refine((val) => Object.keys(val).length >= 0)
                .refine((val) => Object.keys(val).length <= 50)
                .exactOptional()
                .openapi({ description: 'The tags to be attached to the suite definition.' }),
            })
            .openapi({ required: ['suiteDefinitionConfiguration'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: CreateSuiteDefinitionResponseSchema } },
    },
    480: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
    481: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
  },
})

export const getSuiteDefinitionsSuiteDefinitionIdRoute = createRoute({
  method: 'get',
  path: '/suiteDefinitions/{suiteDefinitionId}',
  description:
    '<p>Gets information about a Device Advisor test suite.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">GetSuiteDefinition</a> action.</p>',
  operationId: 'GetSuiteDefinition',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
    }),
    params: z.object({
      suiteDefinitionId: z
        .string()
        .min(12)
        .max(36)
        .openapi({
          param: {
            name: 'suiteDefinitionId',
            in: 'path',
            required: true,
            description: 'Suite definition ID of the test suite to get.',
            schema: { type: 'string', minLength: 12, maxLength: 36 },
          },
        }),
    }),
    query: z.object({
      suiteDefinitionVersion: z
        .string()
        .min(2)
        .max(255)
        .exactOptional()
        .openapi({
          param: {
            name: 'suiteDefinitionVersion',
            in: 'query',
            required: false,
            description: 'Suite definition version of the test suite to get.',
            schema: { type: 'string', minLength: 2, maxLength: 255 },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: GetSuiteDefinitionResponseSchema } },
    },
    480: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
    481: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
    482: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
  },
})

export const deleteSuiteDefinitionsSuiteDefinitionIdRoute = createRoute({
  method: 'delete',
  path: '/suiteDefinitions/{suiteDefinitionId}',
  description:
    '<p>Deletes a Device Advisor test suite.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">DeleteSuiteDefinition</a> action.</p>',
  operationId: 'DeleteSuiteDefinition',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
    }),
    params: z.object({
      suiteDefinitionId: z
        .string()
        .min(12)
        .max(36)
        .openapi({
          param: {
            name: 'suiteDefinitionId',
            in: 'path',
            required: true,
            description: 'Suite definition ID of the test suite to be deleted.',
            schema: { type: 'string', minLength: 12, maxLength: 36 },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DeleteSuiteDefinitionResponseSchema } },
    },
    480: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
    481: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
  },
})

export const patchSuiteDefinitionsSuiteDefinitionIdRoute = createRoute({
  method: 'patch',
  path: '/suiteDefinitions/{suiteDefinitionId}',
  description:
    '<p>Updates a Device Advisor test suite.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">UpdateSuiteDefinition</a> action.</p>',
  operationId: 'UpdateSuiteDefinition',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
    }),
    params: z.object({
      suiteDefinitionId: z
        .string()
        .min(12)
        .max(36)
        .openapi({
          param: {
            name: 'suiteDefinitionId',
            in: 'path',
            required: true,
            description: 'Suite definition ID of the test suite to be updated.',
            schema: { type: 'string', minLength: 12, maxLength: 36 },
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              suiteDefinitionConfiguration: z
                .object({
                  suiteDefinitionName: SuiteDefinitionNameSchema.exactOptional().openapi({
                    description: 'Gets the suite definition name. This is a required parameter.',
                  }),
                  devices: DeviceUnderTestListSchema.exactOptional().openapi({
                    description: 'Gets the devices configured.',
                  }),
                  intendedForQualification:
                    IntendedForQualificationBooleanSchema.exactOptional().openapi({
                      description: 'Gets the tests intended for qualification in a suite.',
                    }),
                  isLongDurationTest: IsLongDurationTestBooleanSchema.exactOptional().openapi({
                    description: 'Verifies if the test suite is a long duration test.',
                  }),
                  rootGroup: RootGroupSchema.exactOptional().openapi({
                    description: 'Gets the test suite root group. This is a required parameter.',
                  }),
                  devicePermissionRoleArn: AmazonResourceNameSchema.exactOptional().openapi({
                    description: 'Gets the device permission ARN. This is a required parameter.',
                  }),
                  protocol: ProtocolSchema.exactOptional().openapi({
                    description:
                      'Sets the MQTT protocol that is configured in the suite definition.',
                  }),
                })
                .openapi({ description: 'Gets the suite definition configuration.', required: [] }),
            })
            .openapi({ required: ['suiteDefinitionConfiguration'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: UpdateSuiteDefinitionResponseSchema } },
    },
    480: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
    481: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
  },
})

export const getEndpointRoute = createRoute({
  method: 'get',
  path: '/endpoint',
  description: 'Gets information about an Device Advisor endpoint.',
  operationId: 'GetEndpoint',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
    }),
    query: z.object({
      thingArn: z
        .string()
        .min(20)
        .max(2048)
        .exactOptional()
        .openapi({
          param: {
            name: 'thingArn',
            in: 'query',
            required: false,
            description: 'The thing ARN of the device. This is an optional parameter.',
            schema: { type: 'string', minLength: 20, maxLength: 2048 },
          },
        }),
      certificateArn: z
        .string()
        .min(20)
        .max(2048)
        .exactOptional()
        .openapi({
          param: {
            name: 'certificateArn',
            in: 'query',
            required: false,
            description: 'The certificate ARN of the device. This is an optional parameter.',
            schema: { type: 'string', minLength: 20, maxLength: 2048 },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: GetEndpointResponseSchema } },
    },
    480: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
    481: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
    482: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
  },
})

export const getSuiteDefinitionsSuiteDefinitionIdSuiteRunsSuiteRunIdRoute = createRoute({
  method: 'get',
  path: '/suiteDefinitions/{suiteDefinitionId}/suiteRuns/{suiteRunId}',
  description:
    '<p>Gets information about a Device Advisor test suite run.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">GetSuiteRun</a> action.</p>',
  operationId: 'GetSuiteRun',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
    }),
    params: z.object({
      suiteDefinitionId: z
        .string()
        .min(12)
        .max(36)
        .openapi({
          param: {
            name: 'suiteDefinitionId',
            in: 'path',
            required: true,
            description: 'Suite definition ID for the test suite run.',
            schema: { type: 'string', minLength: 12, maxLength: 36 },
          },
        }),
      suiteRunId: z
        .string()
        .min(12)
        .max(36)
        .openapi({
          param: {
            name: 'suiteRunId',
            in: 'path',
            required: true,
            description: 'Suite run ID for the test suite run.',
            schema: { type: 'string', minLength: 12, maxLength: 36 },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: GetSuiteRunResponseSchema } },
    },
    480: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
    481: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
    482: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
  },
})

export const getSuiteDefinitionsSuiteDefinitionIdSuiteRunsSuiteRunIdReportRoute = createRoute({
  method: 'get',
  path: '/suiteDefinitions/{suiteDefinitionId}/suiteRuns/{suiteRunId}/report',
  description:
    '<p>Gets a report download link for a successful Device Advisor qualifying test suite run.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">GetSuiteRunReport</a> action.</p>',
  operationId: 'GetSuiteRunReport',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
    }),
    params: z.object({
      suiteDefinitionId: z
        .string()
        .min(12)
        .max(36)
        .openapi({
          param: {
            name: 'suiteDefinitionId',
            in: 'path',
            required: true,
            description: 'Suite definition ID of the test suite.',
            schema: { type: 'string', minLength: 12, maxLength: 36 },
          },
        }),
      suiteRunId: z
        .string()
        .min(12)
        .max(36)
        .openapi({
          param: {
            name: 'suiteRunId',
            in: 'path',
            required: true,
            description: 'Suite run ID of the test suite run.',
            schema: { type: 'string', minLength: 12, maxLength: 36 },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: GetSuiteRunReportResponseSchema } },
    },
    480: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
    481: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
    482: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
  },
})

export const getSuiteRunsRoute = createRoute({
  method: 'get',
  path: '/suiteRuns',
  description:
    '<p>Lists runs of the specified Device Advisor test suite. You can list all runs of the test suite, or the runs of a specific version of the test suite.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">ListSuiteRuns</a> action.</p>',
  operationId: 'ListSuiteRuns',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
    }),
    query: z.object({
      suiteDefinitionId: z
        .string()
        .min(12)
        .max(36)
        .exactOptional()
        .openapi({
          param: {
            name: 'suiteDefinitionId',
            in: 'query',
            required: false,
            description:
              'Lists the test suite runs of the specified test suite based on suite definition ID.',
            schema: { type: 'string', minLength: 12, maxLength: 36 },
          },
        }),
      suiteDefinitionVersion: z
        .string()
        .min(2)
        .max(255)
        .exactOptional()
        .openapi({
          param: {
            name: 'suiteDefinitionVersion',
            in: 'query',
            required: false,
            description:
              'Must be passed along with <code>suiteDefinitionId</code>. Lists the test suite runs of the specified test suite based on suite definition version.',
            schema: { type: 'string', minLength: 2, maxLength: 255 },
          },
        }),
      maxResults: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int().min(1).max(50),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'maxResults',
            in: 'query',
            required: false,
            description: 'The maximum number of results to return at once.',
            schema: { type: 'integer', minimum: 1, maximum: 50 },
          },
        }),
      nextToken: z
        .string()
        .max(2000)
        .exactOptional()
        .openapi({
          param: {
            name: 'nextToken',
            in: 'query',
            required: false,
            description: 'A token to retrieve the next set of results.',
            schema: { type: 'string', maxLength: 2000 },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: ListSuiteRunsResponseSchema } },
    },
    480: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
    481: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
  },
})

export const getTagsResourceArnRoute = createRoute({
  method: 'get',
  path: '/tags/{resourceArn}',
  description:
    '<p>Lists the tags attached to an IoT Device Advisor resource.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">ListTagsForResource</a> action.</p>',
  operationId: 'ListTagsForResource',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
    }),
    params: z.object({
      resourceArn: z
        .string()
        .min(20)
        .max(2048)
        .openapi({
          param: {
            name: 'resourceArn',
            in: 'path',
            required: true,
            description:
              'The resource ARN of the IoT Device Advisor resource. This can be SuiteDefinition ARN or SuiteRun ARN.',
            schema: { type: 'string', minLength: 20, maxLength: 2048 },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: ListTagsForResourceResponseSchema } },
    },
    480: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
    481: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
    482: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
  },
})

export const postTagsResourceArnRoute = createRoute({
  method: 'post',
  path: '/tags/{resourceArn}',
  description:
    '<p>Adds to and modifies existing tags of an IoT Device Advisor resource.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">TagResource</a> action.</p>',
  operationId: 'TagResource',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
    }),
    params: z.object({
      resourceArn: z
        .string()
        .min(20)
        .max(2048)
        .openapi({
          param: {
            name: 'resourceArn',
            in: 'path',
            required: true,
            description:
              'The resource ARN of an IoT Device Advisor resource. This can be SuiteDefinition ARN or SuiteRun ARN.',
            schema: { type: 'string', minLength: 20, maxLength: 2048 },
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              tags: z
                .record(z.string(), String256Schema)
                .refine((val) => Object.keys(val).length >= 0)
                .refine((val) => Object.keys(val).length <= 50)
                .openapi({
                  description: 'The tags to be attached to the IoT Device Advisor resource.',
                }),
            })
            .openapi({ required: ['tags'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: TagResourceResponseSchema } },
    },
    480: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
    481: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
    482: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
  },
})

export const postSuiteDefinitionsSuiteDefinitionIdSuiteRunsRoute = createRoute({
  method: 'post',
  path: '/suiteDefinitions/{suiteDefinitionId}/suiteRuns',
  description:
    '<p>Starts a Device Advisor test suite run.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">StartSuiteRun</a> action.</p>',
  operationId: 'StartSuiteRun',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
    }),
    params: z.object({
      suiteDefinitionId: z
        .string()
        .min(12)
        .max(36)
        .openapi({
          param: {
            name: 'suiteDefinitionId',
            in: 'path',
            required: true,
            description: 'Suite definition ID of the test suite.',
            schema: { type: 'string', minLength: 12, maxLength: 36 },
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              suiteDefinitionVersion: z
                .string()
                .min(2)
                .max(255)
                .exactOptional()
                .openapi({ description: 'Suite definition version of the test suite.' }),
              suiteRunConfiguration: z
                .object({
                  primaryDevice: DeviceUnderTestSchema.exactOptional().openapi({
                    description:
                      'Sets the primary device for the test suite run. This requires a thing ARN or a certificate ARN.',
                  }),
                  selectedTestList: SelectedTestListSchema.exactOptional().openapi({
                    description: 'Sets test case list.',
                  }),
                  parallelRun: ParallelRunSchema.exactOptional().openapi({
                    description: 'TRUE if multiple test suites run in parallel.',
                  }),
                })
                .openapi({ description: 'Gets suite run configuration.', required: [] }),
              tags: z
                .record(z.string(), String256Schema)
                .refine((val) => Object.keys(val).length >= 0)
                .refine((val) => Object.keys(val).length <= 50)
                .exactOptional()
                .openapi({ description: 'The tags to be attached to the suite run.' }),
            })
            .openapi({ required: ['suiteRunConfiguration'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: StartSuiteRunResponseSchema } },
    },
    480: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
    481: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
    482: {
      description: 'ConflictException',
      content: { 'application/json': { schema: ConflictExceptionSchema } },
    },
  },
})

export const postSuiteDefinitionsSuiteDefinitionIdSuiteRunsSuiteRunIdStopRoute = createRoute({
  method: 'post',
  path: '/suiteDefinitions/{suiteDefinitionId}/suiteRuns/{suiteRunId}/stop',
  description:
    '<p>Stops a Device Advisor test suite run that is currently running.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">StopSuiteRun</a> action.</p>',
  operationId: 'StopSuiteRun',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
    }),
    params: z.object({
      suiteDefinitionId: z
        .string()
        .min(12)
        .max(36)
        .openapi({
          param: {
            name: 'suiteDefinitionId',
            in: 'path',
            required: true,
            description: 'Suite definition ID of the test suite run to be stopped.',
            schema: { type: 'string', minLength: 12, maxLength: 36 },
          },
        }),
      suiteRunId: z
        .string()
        .min(12)
        .max(36)
        .openapi({
          param: {
            name: 'suiteRunId',
            in: 'path',
            required: true,
            description: 'Suite run ID of the test suite run to be stopped.',
            schema: { type: 'string', minLength: 12, maxLength: 36 },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: StopSuiteRunResponseSchema } },
    },
    480: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
    481: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    482: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
  },
})

export const deleteTagsResourceArnTagKeysRoute = createRoute({
  method: 'delete',
  path: '/tags/{resourceArn}#tagKeys',
  description:
    '<p>Removes tags from an IoT Device Advisor resource.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">UntagResource</a> action.</p>',
  operationId: 'UntagResource',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
    }),
    params: z.object({
      resourceArn: z
        .string()
        .min(20)
        .max(2048)
        .openapi({
          param: {
            name: 'resourceArn',
            in: 'path',
            required: true,
            description:
              'The resource ARN of an IoT Device Advisor resource. This can be SuiteDefinition ARN or SuiteRun ARN.',
            schema: { type: 'string', minLength: 20, maxLength: 2048 },
          },
        }),
    }),
    query: z.object({
      tagKeys: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(String128Schema).min(0).max(50),
        )
        .openapi({
          param: {
            name: 'tagKeys',
            in: 'query',
            required: true,
            description: 'List of tag keys to remove from the IoT Device Advisor resource.',
            schema: {
              type: 'array',
              items: { $ref: '#/components/schemas/String128' },
              minItems: 0,
              maxItems: 50,
            },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: UntagResourceResponseSchema } },
    },
    480: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
    481: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
    482: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
  },
})
