import { createRoute, z } from '@hono/zod-openapi'

const BasicPerfSampleSeriesSchema = z
  .object({
    perfMetricType: z
      .enum(['perfMetricTypeUnspecified', 'memory', 'cpu', 'network', 'graphics'])
      .exactOptional(),
    perfUnit: z
      .enum([
        'perfUnitUnspecified',
        'kibibyte',
        'percent',
        'bytesPerSecond',
        'framesPerSecond',
        'byte',
      ])
      .exactOptional(),
    sampleSeriesLabel: z
      .enum([
        'sampleSeriesTypeUnspecified',
        'memoryRssPrivate',
        'memoryRssShared',
        'memoryRssTotal',
        'memoryTotal',
        'cpuUser',
        'cpuKernel',
        'cpuTotal',
        'ntBytesTransferred',
        'ntBytesReceived',
        'networkSent',
        'networkReceived',
        'graphicsFrameRate',
      ])
      .exactOptional(),
  })
  .openapi({
    description: 'Encapsulates the metadata for basic sample series represented by a line chart',
    required: [],
  })
  .openapi('BasicPerfSampleSeries')

type PerfSampleSeriesType = {
  basicPerfSampleSeries?: z.infer<typeof BasicPerfSampleSeriesSchema>
  executionId?: string
  historyId?: string
  projectId?: string
  sampleSeriesId?: string
  stepId?: string
}

const TimestampSchema = z
  .object({
    nanos: z
      .int32()
      .exactOptional()
      .openapi({
        description:
          'Non-negative fractions of a second at nanosecond resolution. Negative second values with fractions must still have non-negative nanos values that count forward in time. Must be from 0 to 999,999,999 inclusive.',
      }),
    seconds: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Represents seconds of UTC time since Unix epoch 1970-01-01T00:00:00Z. Must be from 0001-01-01T00:00:00Z to 9999-12-31T23:59:59Z inclusive.',
      }),
  })
  .openapi({
    description:
      'A Timestamp represents a point in time independent of any time zone or local calendar, encoded as a count of seconds and fractions of seconds at nanosecond resolution. The count is relative to an epoch at UTC midnight on January 1, 1970, in the proleptic Gregorian calendar which extends the Gregorian calendar backwards to year one. All minutes are 60 seconds long. Leap seconds are "smeared" so that no leap second table is needed for interpretation, using a [24-hour linear smear](https://developers.google.com/time/smear). The range is from 0001-01-01T00:00:00Z to 9999-12-31T23:59:59.999999999Z. By restricting to that range, we ensure that we can convert to and from [RFC 3339](https://www.ietf.org/rfc/rfc3339.txt) date strings.',
    required: [],
  })
  .openapi('Timestamp')

const DurationSchema = z
  .object({
    nanos: z
      .int32()
      .exactOptional()
      .openapi({
        description:
          'Signed fractions of a second at nanosecond resolution of the span of time. Durations less than one second are represented with a 0 `seconds` field and a positive or negative `nanos` field. For durations of one second or more, a non-zero value for the `nanos` field must be of the same sign as the `seconds` field. Must be from -999,999,999 to +999,999,999 inclusive.',
      }),
    seconds: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Signed seconds of the span of time. Must be from -315,576,000,000 to +315,576,000,000 inclusive. Note: these bounds are computed from: 60 sec/min * 60 min/hr * 24 hr/day * 365.25 days/year * 10000 years',
      }),
  })
  .openapi({
    description:
      ' A Duration represents a signed, fixed-length span of time represented as a count of seconds and fractions of seconds at nanosecond resolution. It is independent of any calendar and concepts like "day" or "month". It is related to Timestamp in that the difference between two Timestamp values is a Duration and it can be added or subtracted from a Timestamp. Range is approximately +-10,000 years.',
    required: [],
  })
  .openapi('Duration')

const StepDimensionValueEntrySchema = z
  .object({ key: z.string().exactOptional(), value: z.string().exactOptional() })
  .openapi({ required: [] })
  .openapi('StepDimensionValueEntry')

const StepLabelsEntrySchema = z
  .object({ key: z.string().exactOptional(), value: z.string().exactOptional() })
  .openapi({ required: [] })
  .openapi('StepLabelsEntry')

const IndividualOutcomeSchema = z
  .object({
    multistepNumber: z
      .int32()
      .exactOptional()
      .openapi({
        description:
          'Unique int given to each step. Ranges from 0(inclusive) to total number of steps(exclusive). The primary step is 0.',
      }),
    outcomeSummary: z
      .enum(['unset', 'success', 'failure', 'inconclusive', 'skipped', 'flaky'])
      .exactOptional(),
    runDuration: DurationSchema.exactOptional().openapi({
      description: 'How long it took for this step to run.',
    }),
    stepId: z.string().exactOptional(),
  })
  .openapi({
    description:
      'Step Id and outcome of each individual step that was run as a group with other steps with the same configuration.',
    required: [],
  })
  .openapi('IndividualOutcome')

const PrimaryStepSchema = z
  .object({
    individualOutcome: z
      .array(IndividualOutcomeSchema)
      .exactOptional()
      .openapi({ description: 'Step Id and outcome of each individual step.' }),
    rollUp: z
      .enum(['unset', 'success', 'failure', 'inconclusive', 'skipped', 'flaky'])
      .exactOptional()
      .openapi({
        description:
          'Rollup test status of multiple steps that were run with the same configuration as a group.',
      }),
  })
  .openapi({
    description:
      'Stores rollup test status of multiple steps that were run as a group and outcome of each individual step.',
    required: [],
  })
  .openapi('PrimaryStep')

const MultiStepSchema = z
  .object({
    multistepNumber: z
      .int32()
      .exactOptional()
      .openapi({
        description:
          'Unique int given to each step. Ranges from 0(inclusive) to total number of steps(exclusive). The primary step is 0.',
      }),
    primaryStep: PrimaryStepSchema.exactOptional().openapi({
      description: 'Present if it is a primary (original) step.',
    }),
    primaryStepId: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Step Id of the primary (original) step, which might be this step.',
      }),
  })
  .openapi({
    description: 'Details when multiple steps are run with the same configuration as a group.',
    required: [],
  })
  .openapi('MultiStep')

const FailureDetailSchema = z
  .object({
    crashed: z
      .boolean()
      .exactOptional()
      .openapi({
        description: 'If the failure was severe because the system (app) under test crashed.',
      }),
    deviceOutOfMemory: z
      .boolean()
      .exactOptional()
      .openapi({
        description: 'If the device ran out of memory during a test, causing the test to crash.',
      }),
    failedRoboscript: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'If the Roboscript failed to complete successfully, e.g., because a Roboscript action or assertion failed or a Roboscript action could not be matched during the entire crawl.',
      }),
    notInstalled: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'If an app is not installed and thus no test can be run with the app. This might be caused by trying to run a test on an unsupported platform.',
      }),
    otherNativeCrash: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'If a native process (including any other than the app) crashed.' }),
    timedOut: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'If the test overran some time limit, and that is why it failed.' }),
    unableToCrawl: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'If the robo was unable to crawl the app; perhaps because the app did not start.',
      }),
  })
  .openapi({ description: 'Details for an outcome with a FAILURE outcome summary.', required: [] })
  .openapi('FailureDetail')

const InconclusiveDetailSchema = z
  .object({
    abortedByUser: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'If the end user aborted the test execution before a pass or fail could be determined. For example, the user pressed ctrl-c which sent a kill signal to the test runner while the test was running.',
      }),
    hasErrorLogs: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'If results are being provided to the user in certain cases of infrastructure failures',
      }),
    infrastructureFailure: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'If the test runner could not determine success or failure because the test depends on a component other than the system under test which failed. For example, a mobile test requires provisioning a device where the test executes, and that provisioning can fail.',
      }),
  })
  .openapi({
    description: 'Details for an outcome with an INCONCLUSIVE outcome summary.',
    required: [],
  })
  .openapi('InconclusiveDetail')

const SkippedDetailSchema = z
  .object({
    incompatibleAppVersion: z
      .boolean()
      .exactOptional()
      .openapi({ description: "If the App doesn't support the specific API level." }),
    incompatibleArchitecture: z
      .boolean()
      .exactOptional()
      .openapi({
        description: "If the App doesn't run on the specific architecture, for example, x86.",
      }),
    incompatibleDevice: z
      .boolean()
      .exactOptional()
      .openapi({
        description: "If the requested OS version doesn't run on the specific device model.",
      }),
  })
  .openapi({ description: 'Details for an outcome with a SKIPPED outcome summary.', required: [] })
  .openapi('SkippedDetail')

const SuccessDetailSchema = z
  .object({
    otherNativeCrash: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'If a native process other than the app crashed.' }),
  })
  .openapi({
    description: 'Details for an outcome with a SUCCESS outcome summary. LINT.IfChange',
    required: [],
  })
  .openapi('SuccessDetail')

const OutcomeSchema = z
  .object({
    failureDetail: FailureDetailSchema.exactOptional().openapi({
      description:
        'More information about a FAILURE outcome. Returns INVALID_ARGUMENT if this field is set but the summary is not FAILURE. Optional',
    }),
    inconclusiveDetail: InconclusiveDetailSchema.exactOptional().openapi({
      description:
        'More information about an INCONCLUSIVE outcome. Returns INVALID_ARGUMENT if this field is set but the summary is not INCONCLUSIVE. Optional',
    }),
    skippedDetail: SkippedDetailSchema.exactOptional().openapi({
      description:
        'More information about a SKIPPED outcome. Returns INVALID_ARGUMENT if this field is set but the summary is not SKIPPED. Optional',
    }),
    successDetail: SuccessDetailSchema.exactOptional().openapi({
      description:
        'More information about a SUCCESS outcome. Returns INVALID_ARGUMENT if this field is set but the summary is not SUCCESS. Optional',
    }),
    summary: z
      .enum(['unset', 'success', 'failure', 'inconclusive', 'skipped', 'flaky'])
      .exactOptional()
      .openapi({ description: 'The simplest way to interpret a result. Required' }),
  })
  .openapi({
    description: 'Interprets a result so that humans and machines can act on it.',
    required: [],
  })
  .openapi('Outcome')

const StackTraceSchema = z
  .object({
    exception: z
      .string()
      .exactOptional()
      .openapi({ description: 'The stack trace message. Required' }),
  })
  .openapi({ description: 'A stacktrace.', required: [] })
  .openapi('StackTrace')

const AnySchema = z
  .object({
    typeUrl: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'A URL/resource name that uniquely identifies the type of the serialized protocol buffer message. This string must contain at least one "/" character. The last segment of the URL\'s path must represent the fully qualified name of the type (as in `path/google.protobuf.Duration`). The name should be in a canonical form (e.g., leading "." is not accepted). In practice, teams usually precompile into the binary all types that they expect it to use in the context of Any. However, for URLs which use the scheme `http`, `https`, or no scheme, one can optionally set up a type server that maps type URLs to message definitions as follows: * If no scheme is provided, `https` is assumed. * An HTTP GET on the URL must yield a google.protobuf.Type value in binary format, or produce an error. * Applications are allowed to cache lookup results based on the URL, or have them precompiled into a binary to avoid any lookup. Therefore, binary compatibility needs to be preserved on changes to types. (Use versioned type names to manage breaking changes.) Note: this functionality is not currently available in the official protobuf release, and it is not used for type URLs beginning with type.googleapis.com. Schemes other than `http`, `https` (or the empty scheme) might be used with implementation specific semantics.',
      }),
    value: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Must be a valid serialized protocol buffer of the above specified type.',
      }),
  })
  .openapi({
    description:
      ' `Any` contains an arbitrary serialized protocol buffer message along with a URL that describes the type of the serialized message. Protobuf library provides support to pack/unpack Any values in the form of utility functions or additional generated methods of the Any type. Example 1: Pack and unpack a message in C++. Foo foo = ...; Any any; any.PackFrom(foo); ... if (any.UnpackTo(&foo)) { ... } Example 2: Pack and unpack a message in Java. Foo foo = ...; Any any = Any.pack(foo); ... if (any.is(Foo.class)) { foo = any.unpack(Foo.class); } Example 3: Pack and unpack a message in Python. foo = Foo(...) any = Any() any.Pack(foo) ... if any.Is(Foo.DESCRIPTOR): any.Unpack(foo) ... Example 4: Pack and unpack a message in Go foo := &pb.Foo{...} any, err := ptypes.MarshalAny(foo) ... foo := &pb.Foo{} if err := ptypes.UnmarshalAny(any, foo); err != nil { ... } The pack methods provided by protobuf library will by default use \'type.googleapis.com/full.type.name\' as the type URL and the unpack methods only use the fully qualified type name after the last \'/\' in the type URL, for example "foo.bar.com/x/y.z" will yield type name "y.z". # JSON The JSON representation of an `Any` value uses the regular representation of the deserialized, embedded message, with an additional field `@type` which contains the type URL. Example: package google.profile; message Person { string first_name = 1; string last_name = 2; } { "@type": "type.googleapis.com/google.profile.Person", "firstName": , "lastName": } If the embedded message type is well-known and has a custom JSON representation, that representation will be embedded adding a field `value` which holds the custom JSON in addition to the `@type` field. Example (for message google.protobuf.Duration): { "@type": "type.googleapis.com/google.protobuf.Duration", "value": "1.212s" }',
    required: [],
  })
  .openapi('Any')

const TestIssueSchema = z
  .object({
    category: z
      .enum(['unspecifiedCategory', 'common', 'robo'])
      .exactOptional()
      .openapi({ description: 'Category of issue. Required.' }),
    errorMessage: z
      .string()
      .exactOptional()
      .openapi({ description: 'A brief human-readable message describing the issue. Required.' }),
    severity: z
      .enum(['unspecifiedSeverity', 'info', 'suggestion', 'warning', 'severe'])
      .exactOptional()
      .openapi({ description: 'Severity of issue. Required.' }),
    stackTrace: StackTraceSchema.exactOptional().openapi({
      description: 'Deprecated in favor of stack trace fields inside specific warnings.',
    }),
    type: z
      .enum([
        'unspecifiedType',
        'fatalException',
        'nativeCrash',
        'anr',
        'unusedRoboDirective',
        'compatibleWithOrchestrator',
        'launcherActivityNotFound',
        'startActivityNotFound',
        'incompleteRoboScriptExecution',
        'completeRoboScriptExecution',
        'failedToInstall',
        'availableDeepLinks',
        'nonSdkApiUsageViolation',
        'nonSdkApiUsageReport',
        'encounteredNonAndroidUiWidgetScreen',
        'encounteredLoginScreen',
        'performedGoogleLogin',
        'iosException',
        'iosCrash',
        'performedMonkeyActions',
        'usedRoboDirective',
        'usedRoboIgnoreDirective',
        'insufficientCoverage',
        'inAppPurchases',
        'crashDialogError',
        'uiElementsTooDeep',
        'blankScreen',
        'overlappingUiElements',
        'unityException',
        'deviceOutOfMemory',
        'logcatCollectionError',
        'detectedAppSplashScreen',
      ])
      .exactOptional()
      .openapi({ description: 'Type of issue. Required.' }),
    warning: AnySchema.exactOptional().openapi({
      description:
        'Warning message with additional details of the issue. Should always be a message from com.google.devtools.toolresults.v1.warnings',
    }),
  })
  .openapi({ description: 'An issue detected occurring during a test execution.', required: [] })
  .openapi('TestIssue')

const FileReferenceSchema = z
  .object({
    fileUri: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The URI of a file stored in Google Cloud Storage. For example: http://storage.googleapis.com/mybucket/path/to/test.xml or in gsutil format: gs://mybucket/path/to/test.xml with version-specific info, gs://mybucket/path/to/test.xml#1360383693690000 An INVALID_ARGUMENT error will be returned if the URI format is not supported. - In response: always set - In create/update request: always set',
      }),
  })
  .openapi({ description: 'A reference to a file.', required: [] })
  .openapi('FileReference')

const TestSuiteOverviewSchema = z
  .object({
    elapsedTime: DurationSchema.exactOptional().openapi({
      description: 'Elapsed time of test suite.',
    }),
    errorCount: z
      .int32()
      .exactOptional()
      .openapi({
        description:
          'Number of test cases in error, typically set by the service by parsing the xml_source. - In create/response: always set - In update request: never',
      }),
    failureCount: z
      .int32()
      .exactOptional()
      .openapi({
        description:
          'Number of failed test cases, typically set by the service by parsing the xml_source. May also be set by the user. - In create/response: always set - In update request: never',
      }),
    flakyCount: z
      .int32()
      .exactOptional()
      .openapi({
        description:
          'Number of flaky test cases, set by the service by rolling up flaky test attempts. Present only for rollup test suite overview at environment level. A step cannot have flaky test cases.',
      }),
    name: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The name of the test suite. - In create/response: always set - In update request: never',
      }),
    skippedCount: z
      .int32()
      .exactOptional()
      .openapi({
        description:
          'Number of test cases not run, typically set by the service by parsing the xml_source. - In create/response: always set - In update request: never',
      }),
    totalCount: z
      .int32()
      .exactOptional()
      .openapi({
        description:
          'Number of test cases, typically set by the service by parsing the xml_source. - In create/response: always set - In update request: never',
      }),
    xmlSource: FileReferenceSchema.exactOptional().openapi({
      description:
        'If this test suite was parsed from XML, this is the URI where the original XML file is stored. Note: Multiple test suites can share the same xml_source Returns INVALID_ARGUMENT if the uri format is not supported. - In create/response: optional - In update request: never',
    }),
  })
  .openapi({
    description:
      'A summary of a test suite result either parsed from XML or uploaded directly by a user. Note: the API related comments are for StepService only. This message is also being used in ExecutionService in a read only mode for the corresponding step.',
    required: [],
  })
  .openapi('TestSuiteOverview')

const TestTimingSchema = z
  .object({
    testProcessDuration: DurationSchema.exactOptional().openapi({
      description:
        'How long it took to run the test process. - In response: present if previously set. - In create/update request: optional',
    }),
  })
  .openapi({ description: 'Testing timing break down to know phases.', required: [] })
  .openapi('TestTiming')

const ToolExitCodeSchema = z
  .object({
    number: z
      .int32()
      .exactOptional()
      .openapi({
        description:
          'Tool execution exit code. A value of 0 means that the execution was successful. - In response: always set - In create/update request: always set',
      }),
  })
  .openapi({ description: 'Exit code from a tool execution.', required: [] })
  .openapi('ToolExitCode')

const TestCaseReferenceSchema = z
  .object({
    className: z.string().exactOptional().openapi({ description: 'The name of the class.' }),
    name: z
      .string()
      .exactOptional()
      .openapi({ description: 'The name of the test case. Required.' }),
    testSuiteName: z
      .string()
      .exactOptional()
      .openapi({ description: 'The name of the test suite to which this test case belongs.' }),
  })
  .openapi({
    description:
      'A reference to a test case. Test case references are canonically ordered lexicographically by these three factors: * First, by test_suite_name. * Second, by class_name. * Third, by name.',
    required: [],
  })
  .openapi('TestCaseReference')

const ToolOutputReferenceSchema = z
  .object({
    creationTime: TimestampSchema.exactOptional().openapi({
      description:
        'The creation time of the file. - In response: present if set by create/update request - In create/update request: optional',
    }),
    output: FileReferenceSchema.exactOptional().openapi({
      description:
        'A FileReference to an output file. - In response: always set - In create/update request: always set',
    }),
    testCase: TestCaseReferenceSchema.exactOptional().openapi({
      description:
        'The test case to which this output file belongs. - In response: present if set by create/update request - In create/update request: optional',
    }),
  })
  .openapi({ description: 'A reference to a ToolExecution output file.', required: [] })
  .openapi('ToolOutputReference')

const ToolExecutionSchema = z
  .object({
    commandLineArguments: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description:
          'The full tokenized command line including the program name (equivalent to argv in a C program). - In response: present if set by create request - In create request: optional - In update request: never set',
      }),
    exitCode: ToolExitCodeSchema.exactOptional().openapi({
      description:
        'Tool execution exit code. This field will be set once the tool has exited. - In response: present if set by create/update request - In create request: optional - In update request: optional, a FAILED_PRECONDITION error will be returned if an exit_code is already set.',
    }),
    toolLogs: z
      .array(FileReferenceSchema)
      .exactOptional()
      .openapi({
        description:
          'References to any plain text logs output the tool execution. This field can be set before the tool has exited in order to be able to have access to a live view of the logs while the tool is running. The maximum allowed number of tool logs per step is 1000. - In response: present if set by create/update request - In create request: optional - In update request: optional, any value provided will be appended to the existing list',
      }),
    toolOutputs: z
      .array(ToolOutputReferenceSchema)
      .exactOptional()
      .openapi({
        description:
          'References to opaque files of any format output by the tool execution. The maximum allowed number of tool outputs per step is 1000. - In response: present if set by create/update request - In create request: optional - In update request: optional, any value provided will be appended to the existing list',
      }),
  })
  .openapi({
    description:
      'An execution of an arbitrary tool. It could be a test runner or a tool copying artifacts or deploying code.',
    required: [],
  })
  .openapi('ToolExecution')

const TestExecutionStepSchema = z
  .object({
    testIssues: z
      .array(TestIssueSchema)
      .exactOptional()
      .openapi({
        description:
          'Issues observed during the test execution. For example, if the mobile app under test crashed during the test, the error message and the stack trace content can be recorded here to assist debugging. - In response: present if set by create or update - In create/update request: optional',
      }),
    testSuiteOverviews: z
      .array(TestSuiteOverviewSchema)
      .exactOptional()
      .openapi({
        description:
          'List of test suite overview contents. This could be parsed from xUnit XML log by server, or uploaded directly by user. This references should only be called when test suites are fully parsed or uploaded. The maximum allowed number of test suite overviews per step is 1000. - In response: always set - In create request: optional - In update request: never (use publishXunitXmlFiles custom method instead)',
      }),
    testTiming: TestTimingSchema.exactOptional().openapi({
      description:
        'The timing break down of the test execution. - In response: present if set by create or update - In create/update request: optional',
    }),
    toolExecution: ToolExecutionSchema.exactOptional().openapi({
      description:
        'Represents the execution of the test runner. The exit code of this tool will be used to determine if the test passed. - In response: always set - In create/update request: optional',
    }),
  })
  .openapi({
    description:
      "A step that represents running tests. It accepts ant-junit xml files which will be parsed into structured test results by the service. Xml file paths are updated in order to append more files, however they can't be deleted. Users can also add test results manually by using the test_result field.",
    required: [],
  })
  .openapi('TestExecutionStep')

const ToolExecutionStepSchema = z
  .object({
    toolExecution: ToolExecutionSchema.exactOptional().openapi({
      description:
        'A Tool execution. - In response: present if set by create/update request - In create/update request: optional',
    }),
  })
  .openapi({
    description:
      'Generic tool step to be used for binaries we do not explicitly support. For example: running cp to copy artifacts from one location to another.',
    required: [],
  })
  .openapi('ToolExecutionStep')

type StepType = {
  completionTime?: z.infer<typeof TimestampSchema>
  creationTime?: z.infer<typeof TimestampSchema>
  description?: string
  deviceUsageDuration?: z.infer<typeof DurationSchema>
  dimensionValue?: z.infer<typeof StepDimensionValueEntrySchema>[]
  hasImages?: boolean
  labels?: z.infer<typeof StepLabelsEntrySchema>[]
  multiStep?: z.infer<typeof MultiStepSchema>
  name?: string
  outcome?: z.infer<typeof OutcomeSchema>
  runDuration?: z.infer<typeof DurationSchema>
  state?: 'unknownState' | 'pending' | 'inProgress' | 'complete'
  stepId?: string
  testExecutionStep?: z.infer<typeof TestExecutionStepSchema>
  toolExecutionStep?: z.infer<typeof ToolExecutionStepSchema>
}

const ANRSchema = z
  .object({
    stackTrace: StackTraceSchema.exactOptional().openapi({
      description: 'The stack trace of the ANR crash. Optional.',
    }),
  })
  .openapi({ description: 'Additional details for an ANR crash.', required: [] })
  .openapi('ANR')

const AndroidAppInfoSchema = z
  .object({
    name: z.string().exactOptional().openapi({ description: 'The name of the app. Optional' }),
    packageName: z
      .string()
      .exactOptional()
      .openapi({ description: 'The package name of the app. Required.' }),
    versionCode: z
      .string()
      .exactOptional()
      .openapi({ description: 'The internal version code of the app. Optional.' }),
    versionName: z
      .string()
      .exactOptional()
      .openapi({ description: 'The version name of the app. Optional.' }),
  })
  .openapi({ description: 'Android app information.', required: [] })
  .openapi('AndroidAppInfo')

const AndroidInstrumentationTestSchema = z
  .object({
    testPackageId: z
      .string()
      .exactOptional()
      .openapi({ description: 'The java package for the test to be executed. Required' }),
    testRunnerClass: z
      .string()
      .exactOptional()
      .openapi({ description: 'The InstrumentationTestRunner class. Required' }),
    testTargets: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description:
          'Each target must be fully qualified with the package name or class name, in one of these formats: - "package package_name" - "class package_name.class_name" - "class package_name.class_name#method_name" If empty, all targets in the module will be run.',
      }),
    useOrchestrator: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'The flag indicates whether Android Test Orchestrator will be used to run test or not.',
      }),
  })
  .openapi({
    description:
      'A test of an Android application that can control an Android component independently of its normal lifecycle. See for more information on types of Android tests.',
    required: [],
  })
  .openapi('AndroidInstrumentationTest')

const AndroidRoboTestSchema = z
  .object({
    appInitialActivity: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The initial activity that should be used to start the app. Optional',
      }),
    bootstrapPackageId: z
      .string()
      .exactOptional()
      .openapi({ description: 'The java package for the bootstrap. Optional' }),
    bootstrapRunnerClass: z
      .string()
      .exactOptional()
      .openapi({ description: 'The runner class for the bootstrap. Optional' }),
    maxDepth: z
      .int32()
      .exactOptional()
      .openapi({ description: 'The max depth of the traversal stack Robo can explore. Optional' }),
    maxSteps: z
      .int32()
      .exactOptional()
      .openapi({
        description:
          'The max number of steps/actions Robo can execute. Default is no limit (0). Optional',
      }),
  })
  .openapi({
    description:
      'A test of an android application that explores the application on a virtual or physical Android device, finding culprits and crashes as it goes.',
    required: [],
  })
  .openapi('AndroidRoboTest')

const AndroidTestLoopSchema = z
  .object({})
  .openapi({
    description:
      'Test Loops are tests that can be launched by the app itself, determining when to run by listening for an intent.',
  })
  .openapi('AndroidTestLoop')

const AndroidTestSchema = z
  .object({
    androidAppInfo: AndroidAppInfoSchema.exactOptional().openapi({
      description: 'Information about the application under test.',
    }),
    androidInstrumentationTest: AndroidInstrumentationTestSchema.exactOptional().openapi({
      description: 'An Android instrumentation test.',
    }),
    androidRoboTest: AndroidRoboTestSchema.exactOptional().openapi({
      description: 'An Android robo test.',
    }),
    androidTestLoop: AndroidTestLoopSchema.exactOptional().openapi({
      description: 'An Android test loop.',
    }),
    testTimeout: DurationSchema.exactOptional().openapi({
      description: 'Max time a test is allowed to run before it is automatically cancelled.',
    }),
  })
  .openapi({ description: 'An Android mobile test specification.', required: [] })
  .openapi('AndroidTest')

const AppStartTimeSchema = z
  .object({
    fullyDrawnTime: DurationSchema.exactOptional().openapi({
      description:
        'Optional. The time from app start to reaching the developer-reported "fully drawn" time. This is only stored if the app includes a call to Activity.reportFullyDrawn(). See https://developer.android.com/topic/performance/launch-time.html#time-full',
    }),
    initialDisplayTime: DurationSchema.exactOptional().openapi({
      description:
        'The time from app start to the first displayed activity being drawn, as reported in Logcat. See https://developer.android.com/topic/performance/launch-time.html#time-initial',
    }),
  })
  .openapi({ required: [] })
  .openapi('AppStartTime')

const AvailableDeepLinksSchema = z
  .object({})
  .openapi({ description: 'A suggestion to use deep links for a Robo run.' })
  .openapi('AvailableDeepLinks')

const PerfSampleSchema = z
  .object({
    sampleTime: TimestampSchema.exactOptional().openapi({
      description: 'Timestamp of collection.',
    }),
    value: z.float64().exactOptional().openapi({ description: 'Value observed' }),
  })
  .openapi({
    description: 'Resource representing a single performance measure or data point',
    required: [],
  })
  .openapi('PerfSample')

const BatchCreatePerfSamplesRequestSchema = z
  .object({
    perfSamples: z
      .array(PerfSampleSchema)
      .exactOptional()
      .openapi({
        description: 'The set of PerfSamples to create should not include existing timestamps',
      }),
  })
  .openapi({
    description:
      'The request must provide up to a maximum of 5000 samples to be created; a larger sample size will cause an INVALID_ARGUMENT error',
    required: [],
  })
  .openapi('BatchCreatePerfSamplesRequest')

const BatchCreatePerfSamplesResponseSchema = z
  .object({ perfSamples: z.array(PerfSampleSchema).exactOptional() })
  .openapi({ required: [] })
  .openapi('BatchCreatePerfSamplesResponse')

const BlankScreenSchema = z
  .object({
    screenId: z.string().exactOptional().openapi({ description: 'The screen id of the element' }),
  })
  .openapi({
    description:
      'A warning that Robo encountered a screen that was mostly blank; this may indicate a problem with the app.',
    required: [],
  })
  .openapi('BlankScreen')

const CPUInfoSchema = z
  .object({
    cpuProcessor: z
      .string()
      .exactOptional()
      .openapi({
        description: "description of the device processor ie '1.8 GHz hexa core 64-bit ARMv8-A'",
      }),
    cpuSpeedInGhz: z
      .float32()
      .exactOptional()
      .openapi({ description: 'the CPU clock speed in GHz' }),
    numberOfCores: z.int32().exactOptional().openapi({ description: 'the number of CPU cores' }),
  })
  .openapi({ required: [] })
  .openapi('CPUInfo')

const CrashDialogErrorSchema = z
  .object({
    crashPackage: z
      .string()
      .exactOptional()
      .openapi({ description: 'The name of the package that caused the dialog.' }),
  })
  .openapi({ description: 'Crash dialog was detected during the test execution', required: [] })
  .openapi('CrashDialogError')

const DetectedAppSplashScreenSchema = z
  .object({})
  .openapi({
    description:
      'A notification that Robo detected a splash screen provided by app (vs. Android OS splash screen).',
  })
  .openapi('DetectedAppSplashScreen')

const DeviceOutOfMemorySchema = z
  .object({})
  .openapi({ description: 'A warning that device ran out of memory' })
  .openapi('DeviceOutOfMemory')

const EncounteredLoginScreenSchema = z
  .object({
    distinctScreens: z
      .int32()
      .exactOptional()
      .openapi({ description: 'Number of encountered distinct login screens.' }),
    screenIds: z
      .array(z.string())
      .exactOptional()
      .openapi({ description: 'Subset of login screens.' }),
  })
  .openapi({ description: 'Additional details about encountered login screens.', required: [] })
  .openapi('EncounteredLoginScreen')

const EncounteredNonAndroidUiWidgetScreenSchema = z
  .object({
    distinctScreens: z
      .int32()
      .exactOptional()
      .openapi({
        description: 'Number of encountered distinct screens with non Android UI widgets.',
      }),
    screenIds: z
      .array(z.string())
      .exactOptional()
      .openapi({ description: 'Subset of screens which contain non Android UI widgets.' }),
  })
  .openapi({
    description:
      'Additional details about encountered screens with elements that are not Android UI widgets.',
    required: [],
  })
  .openapi('EncounteredNonAndroidUiWidgetScreen')

const EnvironmentDimensionValueEntrySchema = z
  .object({ key: z.string().exactOptional(), value: z.string().exactOptional() })
  .openapi({ required: [] })
  .openapi('EnvironmentDimensionValueEntry')

const MergedResultSchema = z
  .object({
    outcome: OutcomeSchema.exactOptional().openapi({ description: 'Outcome of the resource' }),
    state: z
      .enum(['unknownState', 'pending', 'inProgress', 'complete'])
      .exactOptional()
      .openapi({ description: 'State of the resource' }),
    testSuiteOverviews: z
      .array(TestSuiteOverviewSchema)
      .exactOptional()
      .openapi({
        description:
          'The combined and rolled-up result of each test suite that was run as part of this environment. Combining: When the test cases from a suite are run in different steps (sharding), the results are added back together in one overview. (e.g., if shard1 has 2 failures and shard2 has 1 failure than the overview failure_count = 3). Rollup: When test cases from the same suite are run multiple times (flaky), the results are combined (e.g., if testcase1.run1 fails, testcase1.run2 passes, and both testcase2.run1 and testcase2.run2 fail then the overview flaky_count = 1 and failure_count = 1).',
      }),
  })
  .openapi({
    description:
      'Merged test result for environment. If the environment has only one step (no reruns or shards), then the merged result is the same as the step result. If the environment has multiple shards and/or reruns, then the results of shards and reruns that belong to the same environment are merged into one environment result.',
    required: [],
  })
  .openapi('MergedResult')

const ResultsStorageSchema = z
  .object({
    resultsStoragePath: FileReferenceSchema.exactOptional().openapi({
      description: 'The root directory for test results.',
    }),
    xunitXmlFile: FileReferenceSchema.exactOptional().openapi({
      description: 'The path to the Xunit XML file.',
    }),
  })
  .openapi({ description: 'The storage for test results.', required: [] })
  .openapi('ResultsStorage')

const StepSummarySchema = z
  .object({})
  .openapi({ description: 'Lightweight summary of a step within this execution.' })
  .openapi('StepSummary')

const ShardSummarySchema = z
  .object({
    runs: z
      .array(StepSummarySchema)
      .exactOptional()
      .openapi({
        description:
          'Summaries of the steps belonging to the shard. With flaky_test_attempts enabled from TestExecutionService, more than one run (Step) can present. And the runs will be sorted by multistep_number.',
      }),
    shardResult: MergedResultSchema.exactOptional().openapi({
      description: 'Merged result of the shard.',
    }),
  })
  .openapi({ description: 'Result summary for a shard in an environment.', required: [] })
  .openapi('ShardSummary')

const EnvironmentSchema = z
  .object({
    completionTime: TimestampSchema.exactOptional().openapi({
      description:
        'Output only. The time when the Environment status was set to complete. This value will be set automatically when state transitions to COMPLETE.',
    }),
    creationTime: TimestampSchema.exactOptional().openapi({
      description: 'Output only. The time when the Environment was created.',
    }),
    dimensionValue: z
      .array(EnvironmentDimensionValueEntrySchema)
      .exactOptional()
      .openapi({
        description:
          'Dimension values describing the environment. Dimension values always consist of "Model", "Version", "Locale", and "Orientation". - In response: always set - In create request: always set - In update request: never set',
      }),
    displayName: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'A short human-readable name to display in the UI. Maximum of 100 characters. For example: Nexus 5, API 27.',
      }),
    environmentId: z
      .string()
      .exactOptional()
      .openapi({ description: 'Output only. An Environment id.' }),
    environmentResult: MergedResultSchema.exactOptional().openapi({
      description: 'Merged result of the environment.',
    }),
    executionId: z
      .string()
      .exactOptional()
      .openapi({ description: 'Output only. An Execution id.' }),
    historyId: z.string().exactOptional().openapi({ description: 'Output only. A History id.' }),
    projectId: z.string().exactOptional().openapi({ description: 'Output only. A Project id.' }),
    resultsStorage: ResultsStorageSchema.exactOptional().openapi({
      description: 'The location where output files are stored in the user bucket.',
    }),
    shardSummaries: z
      .array(ShardSummarySchema)
      .exactOptional()
      .openapi({
        description:
          'Output only. Summaries of shards. Only one shard will present unless sharding feature is enabled in TestExecutionService.',
      }),
  })
  .openapi({
    description:
      'An Environment represents the set of test runs (Steps) from the parent Execution that are configured with the same set of dimensions (Model, Version, Locale, and Orientation). Multiple such runs occur particularly because of features like sharding (splitting up a test suite to run in parallel across devices) and reruns (running a test multiple times to check for different outcomes).',
    required: [],
  })
  .openapi('Environment')

const MatrixDimensionDefinitionSchema = z
  .object({})
  .openapi({ description: 'One dimension of the matrix of different runs of a step.' })
  .openapi('MatrixDimensionDefinition')

const IosAppInfoSchema = z
  .object({
    name: z.string().exactOptional().openapi({ description: 'The name of the app. Required' }),
  })
  .openapi({ description: 'iOS app information', required: [] })
  .openapi('IosAppInfo')

const IosRoboTestSchema = z
  .object({})
  .openapi({ description: 'A Robo test for an iOS application.' })
  .openapi('IosRoboTest')

const IosTestLoopSchema = z
  .object({
    bundleId: z.string().exactOptional().openapi({ description: 'Bundle ID of the app.' }),
  })
  .openapi({ description: 'A game loop test of an iOS application.', required: [] })
  .openapi('IosTestLoop')

const IosXcTestSchema = z
  .object({
    bundleId: z.string().exactOptional().openapi({ description: 'Bundle ID of the app.' }),
    xcodeVersion: z
      .string()
      .exactOptional()
      .openapi({ description: 'Xcode version that the test was run with.' }),
  })
  .openapi({
    description: 'A test of an iOS application that uses the XCTest framework.',
    required: [],
  })
  .openapi('IosXcTest')

const IosTestSchema = z
  .object({
    iosAppInfo: IosAppInfoSchema.exactOptional().openapi({
      description: 'Information about the application under test.',
    }),
    iosRoboTest: IosRoboTestSchema.exactOptional().openapi({ description: 'An iOS Robo test.' }),
    iosTestLoop: IosTestLoopSchema.exactOptional().openapi({ description: 'An iOS test loop.' }),
    iosXcTest: IosXcTestSchema.exactOptional().openapi({ description: 'An iOS XCTest.' }),
    testTimeout: DurationSchema.exactOptional().openapi({
      description: 'Max time a test is allowed to run before it is automatically cancelled.',
    }),
  })
  .openapi({ description: 'A iOS mobile test specification', required: [] })
  .openapi('IosTest')

const SpecificationSchema = z
  .object({
    androidTest: AndroidTestSchema.exactOptional().openapi({
      description: 'An Android mobile test execution specification.',
    }),
    iosTest: IosTestSchema.exactOptional().openapi({
      description: 'An iOS mobile test execution specification.',
    }),
  })
  .openapi({ description: 'The details about how to run the execution.', required: [] })
  .openapi('Specification')

const ExecutionSchema = z
  .object({
    completionTime: TimestampSchema.exactOptional().openapi({
      description:
        'The time when the Execution status transitioned to COMPLETE. This value will be set automatically when state transitions to COMPLETE. - In response: set if the execution state is COMPLETE. - In create/update request: never set',
    }),
    creationTime: TimestampSchema.exactOptional().openapi({
      description:
        'The time when the Execution was created. This value will be set automatically when CreateExecution is called. - In response: always set - In create/update request: never set',
    }),
    dimensionDefinitions: z
      .array(MatrixDimensionDefinitionSchema)
      .exactOptional()
      .openapi({
        description:
          'The dimensions along which different steps in this execution may vary. This must remain fixed over the life of the execution. Returns INVALID_ARGUMENT if this field is set in an update request. Returns INVALID_ARGUMENT if the same name occurs in more than one dimension_definition. Returns INVALID_ARGUMENT if the size of the list is over 100. - In response: present if set by create - In create request: optional - In update request: never set',
      }),
    executionId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'A unique identifier within a History for this Execution. Returns INVALID_ARGUMENT if this field is set or overwritten by the caller. - In response always set - In create/update request: never set',
      }),
    outcome: OutcomeSchema.exactOptional().openapi({
      description:
        'Classify the result, for example into SUCCESS or FAILURE - In response: present if set by create/update request - In create/update request: optional',
    }),
    specification: SpecificationSchema.exactOptional().openapi({
      description:
        'Lightweight information about execution request. - In response: present if set by create - In create: optional - In update: optional',
    }),
    state: z
      .enum(['unknownState', 'pending', 'inProgress', 'complete'])
      .exactOptional()
      .openapi({
        description:
          'The initial state is IN_PROGRESS. The only legal state transitions is from IN_PROGRESS to COMPLETE. A PRECONDITION_FAILED will be returned if an invalid transition is requested. The state can only be set to COMPLETE once. A FAILED_PRECONDITION will be returned if the state is set to COMPLETE multiple times. If the state is set to COMPLETE, all the in-progress steps within the execution will be set as COMPLETE. If the outcome of the step is not set, the outcome will be set to INCONCLUSIVE. - In response always set - In create/update request: optional',
      }),
    testExecutionMatrixId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'TestExecution Matrix ID that the TestExecutionService uses. - In response: present if set by create - In create: optional - In update: never set',
      }),
  })
  .openapi({
    description:
      'An Execution represents a collection of Steps. For instance, it could represent: - a mobile test executed across a range of device configurations - a jenkins job with a build step followed by a test step The maximum size of an execution message is 1 MiB. An Execution can be updated until its state is set to COMPLETE at which point it becomes immutable. Next tag: 17',
    required: [],
  })
  .openapi('Execution')

const FailedToInstallSchema = z
  .object({})
  .openapi({ description: 'Failed to install the APK.' })
  .openapi('FailedToInstall')

const FatalExceptionSchema = z
  .object({
    stackTrace: StackTraceSchema.exactOptional().openapi({
      description: 'The stack trace of the fatal exception. Optional.',
    }),
  })
  .openapi({ description: 'Additional details for a fatal exception.', required: [] })
  .openapi('FatalException')

const GraphicsStatsBucketSchema = z
  .object({
    frameCount: z
      .string()
      .exactOptional()
      .openapi({ description: 'Number of frames in the bucket.' }),
    renderMillis: z
      .string()
      .exactOptional()
      .openapi({ description: 'Lower bound of render time in milliseconds.' }),
  })
  .openapi({ required: [] })
  .openapi('GraphicsStatsBucket')

const GraphicsStatsSchema = z
  .object({
    buckets: z
      .array(GraphicsStatsBucketSchema)
      .exactOptional()
      .openapi({
        description:
          'Histogram of frame render times. There should be 154 buckets ranging from [5ms, 6ms) to [4950ms, infinity)',
      }),
    highInputLatencyCount: z
      .string()
      .exactOptional()
      .openapi({ description: 'Total "high input latency" events.' }),
    jankyFrames: z
      .string()
      .exactOptional()
      .openapi({ description: 'Total frames with slow render time. Should be <= total_frames.' }),
    missedVsyncCount: z
      .string()
      .exactOptional()
      .openapi({ description: 'Total "missed vsync" events.' }),
    p50Millis: z
      .string()
      .exactOptional()
      .openapi({ description: '50th percentile frame render time in milliseconds.' }),
    p90Millis: z
      .string()
      .exactOptional()
      .openapi({ description: '90th percentile frame render time in milliseconds.' }),
    p95Millis: z
      .string()
      .exactOptional()
      .openapi({ description: '95th percentile frame render time in milliseconds.' }),
    p99Millis: z
      .string()
      .exactOptional()
      .openapi({ description: '99th percentile frame render time in milliseconds.' }),
    slowBitmapUploadCount: z
      .string()
      .exactOptional()
      .openapi({ description: 'Total "slow bitmap upload" events.' }),
    slowDrawCount: z.string().exactOptional().openapi({ description: 'Total "slow draw" events.' }),
    slowUiThreadCount: z
      .string()
      .exactOptional()
      .openapi({ description: 'Total "slow UI thread" events.' }),
    totalFrames: z
      .string()
      .exactOptional()
      .openapi({ description: 'Total frames rendered by package.' }),
  })
  .openapi({
    description:
      "Graphics statistics for the App. The information is collected from 'adb shell dumpsys graphicsstats'. For more info see: https://developer.android.com/training/testing/performance.html Statistics will only be present for API 23+.",
    required: [],
  })
  .openapi('GraphicsStats')

const HistorySchema = z
  .object({
    displayName: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'A short human-readable (plain text) name to display in the UI. Maximum of 100 characters. - In response: present if set during create. - In create request: optional',
      }),
    historyId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'A unique identifier within a project for this History. Returns INVALID_ARGUMENT if this field is set or overwritten by the caller. - In response always set - In create request: never set',
      }),
    name: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'A name to uniquely identify a history within a project. Maximum of 200 characters. - In response always set - In create request: always set',
      }),
    testPlatform: z
      .enum(['unknownPlatform', 'android', 'ios'])
      .exactOptional()
      .openapi({
        description:
          'The platform of the test history. - In response: always set. Returns the platform of the last execution if unknown.',
      }),
  })
  .openapi({
    description:
      'A History represents a sorted list of Executions ordered by the start_timestamp_millis field (descending). It can be used to group all the Executions of a continuous build. Note that the ordering only operates on one-dimension. If a repository has multiple branches, it means that multiple histories will need to be used in order to order Executions per branch.',
    required: [],
  })
  .openapi('History')

const StatusSchema = z
  .object({
    code: z
      .int32()
      .exactOptional()
      .openapi({
        description: 'The status code, which should be an enum value of google.rpc.Code.',
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
          'A list of messages that carry the error details. There is a common set of message types for APIs to use.',
      }),
    message: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'A developer-facing error message, which should be in English. Any user-facing error message should be localized and sent in the google.rpc.Status.details field, or localized by the client.',
      }),
  })
  .openapi({
    description:
      'The `Status` type defines a logical error model that is suitable for different programming environments, including REST APIs and RPC APIs. It is used by [gRPC](https://github.com/grpc). Each `Status` message contains three pieces of data: error code, error message, and error details. You can find out more about this error model and how to work with it in the [API Design Guide](https://cloud.google.com/apis/design/errors).',
    required: [],
  })
  .openapi('Status')

const ThumbnailSchema = z
  .object({
    contentType: z
      .string()
      .exactOptional()
      .openapi({ description: 'The thumbnail\'s content type, i.e. "image/png". Always set.' }),
    data: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The thumbnail file itself. That is, the bytes here are precisely the bytes that make up the thumbnail file; they can be served as an image as-is (with the appropriate content type.) Always set.',
      }),
    heightPx: z
      .int32()
      .exactOptional()
      .openapi({ description: 'The height of the thumbnail, in pixels. Always set.' }),
    widthPx: z
      .int32()
      .exactOptional()
      .openapi({ description: 'The width of the thumbnail, in pixels. Always set.' }),
  })
  .openapi({ description: 'A single thumbnail, with its size and format.', required: [] })
  .openapi('Thumbnail')

const ImageSchema = z
  .object({
    error: StatusSchema.exactOptional().openapi({
      description: 'An error explaining why the thumbnail could not be rendered.',
    }),
    sourceImage: ToolOutputReferenceSchema.exactOptional().openapi({
      description:
        'A reference to the full-size, original image. This is the same as the tool_outputs entry for the image under its Step. Always set.',
    }),
    stepId: z
      .string()
      .exactOptional()
      .openapi({ description: 'The step to which the image is attached. Always set.' }),
    thumbnail: ThumbnailSchema.exactOptional().openapi({ description: 'The thumbnail.' }),
  })
  .openapi({
    description: 'An image, with a link to the main image and a thumbnail.',
    required: [],
  })
  .openapi('Image')

const InAppPurchasesFoundSchema = z
  .object({
    inAppPurchasesFlowsExplored: z
      .int32()
      .exactOptional()
      .openapi({
        description:
          'The total number of in-app purchases flows explored: how many times the robo tries to buy a SKU.',
      }),
    inAppPurchasesFlowsStarted: z
      .int32()
      .exactOptional()
      .openapi({ description: 'The total number of in-app purchases flows started.' }),
  })
  .openapi({
    description: 'Additional details of in-app purchases encountered during the crawl.',
    required: [],
  })
  .openapi('InAppPurchasesFound')

const InsufficientCoverageSchema = z
  .object({})
  .openapi({
    description: 'A warning that Robo did not crawl potentially important parts of the app.',
  })
  .openapi('InsufficientCoverage')

const IosAppCrashedSchema = z
  .object({
    stackTrace: StackTraceSchema.exactOptional().openapi({
      description: 'The stack trace, if one is available. Optional.',
    }),
  })
  .openapi({ description: 'Additional details for an iOS app crash.', required: [] })
  .openapi('IosAppCrashed')

const LauncherActivityNotFoundSchema = z
  .object({})
  .openapi({ description: 'Failed to find the launcher activity of an app.' })
  .openapi('LauncherActivityNotFound')

const ListEnvironmentsResponseSchema = z
  .object({
    environments: z
      .array(EnvironmentSchema)
      .exactOptional()
      .openapi({ description: 'Environments. Always set.' }),
    executionId: z.string().exactOptional().openapi({ description: 'A Execution id Always set.' }),
    historyId: z.string().exactOptional().openapi({ description: 'A History id. Always set.' }),
    nextPageToken: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'A continuation token to resume the query at the next item. Will only be set if there are more Environments to fetch.',
      }),
    projectId: z.string().exactOptional().openapi({ description: 'A Project id. Always set.' }),
  })
  .openapi({
    description: 'Response message for EnvironmentService.ListEnvironments.',
    required: [],
  })
  .openapi('ListEnvironmentsResponse')

const ListExecutionsResponseSchema = z
  .object({
    executions: z
      .array(ExecutionSchema)
      .exactOptional()
      .openapi({ description: 'Executions. Always set.' }),
    nextPageToken: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'A continuation token to resume the query at the next item. Will only be set if there are more Executions to fetch.',
      }),
  })
  .openapi({ required: [] })
  .openapi('ListExecutionsResponse')

const ListHistoriesResponseSchema = z
  .object({
    histories: z.array(HistorySchema).exactOptional().openapi({ description: 'Histories.' }),
    nextPageToken: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'A continuation token to resume the query at the next item. Will only be set if there are more histories to fetch. Tokens are valid for up to one hour from the time of the first list request. For instance, if you make a list request at 1PM and use the token from this first request 10 minutes later, the token from this second response will only be valid for 50 minutes.',
      }),
  })
  .openapi({ description: 'Response message for HistoryService.List', required: [] })
  .openapi('ListHistoriesResponse')

const PerfSampleSeriesSchema: z.ZodType<PerfSampleSeriesType> = z
  .lazy(() =>
    z
      .object({
        basicPerfSampleSeries: BasicPerfSampleSeriesSchema.exactOptional().openapi({
          description: 'Basic series represented by a line chart',
        }),
        executionId: z
          .string()
          .exactOptional()
          .openapi({ description: 'A tool results execution ID. @OutputOnly' }),
        historyId: z
          .string()
          .exactOptional()
          .openapi({ description: 'A tool results history ID. @OutputOnly' }),
        projectId: z
          .string()
          .exactOptional()
          .openapi({ description: 'The cloud project @OutputOnly' }),
        sampleSeriesId: z
          .string()
          .exactOptional()
          .openapi({ description: 'A sample series id @OutputOnly' }),
        stepId: z
          .string()
          .exactOptional()
          .openapi({ description: 'A tool results step ID. @OutputOnly' }),
      })
      .openapi({
        description: 'Resource representing a collection of performance samples (or data points)',
        required: [],
      }),
  )
  .openapi('PerfSampleSeries')

const ListPerfSampleSeriesResponseSchema = z
  .object({
    perfSampleSeries: z
      .array(PerfSampleSeriesSchema)
      .exactOptional()
      .openapi({ description: 'The resulting PerfSampleSeries sorted by id' }),
  })
  .openapi({ required: [] })
  .openapi('ListPerfSampleSeriesResponse')

const ListPerfSamplesResponseSchema = z
  .object({
    nextPageToken: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Optional, returned if result size exceeds the page size specified in the request (or the default page size, 500, if unspecified). It indicates the last sample timestamp to be used as page_token in subsequent request',
      }),
    perfSamples: z.array(PerfSampleSchema).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ListPerfSamplesResponse')

const ScreenSchema = z
  .object({
    fileReference: z
      .string()
      .exactOptional()
      .openapi({ description: 'File reference of the png file. Required.' }),
    locale: z
      .string()
      .exactOptional()
      .openapi({ description: 'Locale of the device that the screenshot was taken on. Required.' }),
    model: z
      .string()
      .exactOptional()
      .openapi({ description: 'Model of the device that the screenshot was taken on. Required.' }),
    version: z
      .string()
      .exactOptional()
      .openapi({
        description: 'OS version of the device that the screenshot was taken on. Required.',
      }),
  })
  .openapi({ required: [] })
  .openapi('Screen')

const ScreenshotClusterSchema = z
  .object({
    activity: z
      .string()
      .exactOptional()
      .openapi({
        description: 'A string that describes the activity of every screen in the cluster.',
      }),
    clusterId: z
      .string()
      .exactOptional()
      .openapi({ description: 'A unique identifier for the cluster. @OutputOnly' }),
    keyScreen: ScreenSchema.exactOptional().openapi({
      description:
        'A singular screen that represents the cluster as a whole. This screen will act as the "cover" of the entire cluster. When users look at the clusters, only the key screen from each cluster will be shown. Which screen is the key screen is determined by the ClusteringAlgorithm',
    }),
    screens: z
      .array(ScreenSchema)
      .exactOptional()
      .openapi({ description: 'Full list of screens.' }),
  })
  .openapi({ required: [] })
  .openapi('ScreenshotCluster')

const ListScreenshotClustersResponseSchema = z
  .object({
    clusters: z
      .array(ScreenshotClusterSchema)
      .exactOptional()
      .openapi({ description: 'The set of clusters associated with an execution Always set' }),
  })
  .openapi({ required: [] })
  .openapi('ListScreenshotClustersResponse')

const SafeHtmlProtoSchema = z
  .object({
    privateDoNotAccessOrElseSafeHtmlWrappedValue: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'IMPORTANT: Never set or read this field, even from tests, it is private. See documentation at the top of .proto file for programming language packages with which to create or read this message.',
      }),
  })
  .openapi({
    description:
      "IMPORTANT: It is unsafe to accept this message from an untrusted source, since it's trivial for an attacker to forge serialized messages that don't fulfill the type's safety contract -- for example, it could contain attacker controlled script. A system which receives a SafeHtmlProto implicitly trusts the producer of the SafeHtmlProto. So, it's generally safe to return this message in RPC responses, but generally unsafe to accept it in RPC requests.",
    required: [],
  })
  .openapi('SafeHtmlProto')

const RegionProtoSchema = z
  .object({
    heightPx: z
      .int32()
      .exactOptional()
      .openapi({ description: 'The height, in pixels. Always set.' }),
    leftPx: z
      .int32()
      .exactOptional()
      .openapi({ description: 'The left side of the rectangle, in pixels. Always set.' }),
    topPx: z
      .int32()
      .exactOptional()
      .openapi({ description: 'The top of the rectangle, in pixels. Always set.' }),
    widthPx: z
      .int32()
      .exactOptional()
      .openapi({ description: 'The width, in pixels. Always set.' }),
  })
  .openapi({ description: 'A rectangular region.', required: [] })
  .openapi('RegionProto')

const SuggestionProtoSchema = z
  .object({
    helpUrl: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Reference to a help center article concerning this type of suggestion. Always set.',
      }),
    longMessage: SafeHtmlProtoSchema.exactOptional().openapi({
      description:
        "Message, in the user's language, explaining the suggestion, which may contain markup. Always set.",
    }),
    priority: z
      .enum(['unknownPriority', 'error', 'warning', 'info'])
      .exactOptional()
      .openapi({ description: 'Relative importance of a suggestion. Always set.' }),
    pseudoResourceId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'A somewhat human readable identifier of the source view, if it does not have a resource_name. This is a path within the accessibility hierarchy, an element with resource name; similar to an XPath.',
      }),
    region: RegionProtoSchema.exactOptional().openapi({
      description: 'Region within the screenshot that is relevant to this suggestion. Optional.',
    }),
    resourceName: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Reference to a view element, identified by its resource name, if it has one.',
      }),
    screenId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'ID of the screen for the suggestion. It is used for getting the corresponding screenshot path. For example, screen_id "1" corresponds to "1.png" file in GCS. Always set.',
      }),
    secondaryPriority: z
      .float64()
      .exactOptional()
      .openapi({
        description:
          'Relative importance of a suggestion as compared with other suggestions that have the same priority and category. This is a meaningless value that can be used to order suggestions that are in the same category and have the same priority. The larger values have higher priority (i.e., are more important). Optional.',
      }),
    shortMessage: SafeHtmlProtoSchema.exactOptional().openapi({
      description:
        "Concise message, in the user's language, representing the suggestion, which may contain markup. Always set.",
    }),
    title: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "General title for the suggestion, in the user's language, without markup. Always set.",
      }),
  })
  .openapi({ required: [] })
  .openapi('SuggestionProto')

const SuggestionClusterProtoSchema = z
  .object({
    category: z
      .enum([
        'unknownCategory',
        'contentLabeling',
        'touchTargetSize',
        'lowContrast',
        'implementation',
      ])
      .exactOptional()
      .openapi({
        description: 'Category in which these types of suggestions should appear. Always set.',
      }),
    suggestions: z
      .array(SuggestionProtoSchema)
      .exactOptional()
      .openapi({
        description:
          'A sequence of suggestions. All of the suggestions within a cluster must have the same SuggestionPriority and belong to the same SuggestionCategory. Suggestions with the same screenshot URL should be adjacent.',
      }),
  })
  .openapi({
    description:
      "A set of similar suggestions that we suspect are closely related. This proto and most of the nested protos are branched from foxandcrown.prelaunchreport.service.SuggestionClusterProto, replacing PLR's dependencies with FTL's.",
    required: [],
  })
  .openapi('SuggestionClusterProto')

const ListStepAccessibilityClustersResponseSchema = z
  .object({
    clusters: z
      .array(SuggestionClusterProtoSchema)
      .exactOptional()
      .openapi({
        description:
          'A sequence of accessibility suggestions, grouped into clusters. Within the sequence, clusters that belong to the same SuggestionCategory should be adjacent. Within each category, clusters should be ordered by their SuggestionPriority (ERRORs first). The categories should be ordered by their highest priority cluster.',
      }),
    name: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'A full resource name of the step. For example, projects/my-project/histories/bh.1234567890abcdef/executions/ 1234567890123456789/steps/bs.1234567890abcdef Always presents.',
      }),
  })
  .openapi({
    description: 'Response message for AccessibilityService.ListStepAccessibilityClusters.',
    required: [],
  })
  .openapi('ListStepAccessibilityClustersResponse')

const ListStepThumbnailsResponseSchema = z
  .object({
    nextPageToken: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'A continuation token to resume the query at the next item. If set, indicates that there are more thumbnails to read, by calling list again with this value in the page_token field.',
      }),
    thumbnails: z
      .array(ImageSchema)
      .exactOptional()
      .openapi({
        description:
          'A list of image data. Images are returned in a deterministic order; they are ordered by these factors, in order of importance: * First, by their associated test case. Images without a test case are considered greater than images with one. * Second, by their creation time. Images without a creation time are greater than images with one. * Third, by the order in which they were added to the step (by calls to CreateStep or UpdateStep).',
      }),
  })
  .openapi({ description: 'A response containing the thumbnails in a step.', required: [] })
  .openapi('ListStepThumbnailsResponse')

const StepSchema: z.ZodType<StepType> = z
  .lazy(() =>
    z
      .object({
        completionTime: TimestampSchema.exactOptional().openapi({
          description:
            'The time when the step status was set to complete. This value will be set automatically when state transitions to COMPLETE. - In response: set if the execution state is COMPLETE. - In create/update request: never set',
        }),
        creationTime: TimestampSchema.exactOptional().openapi({
          description:
            'The time when the step was created. - In response: always set - In create/update request: never set',
        }),
        description: z
          .string()
          .exactOptional()
          .openapi({
            description:
              'A description of this tool For example: mvn clean package -D skipTests=true - In response: present if set by create/update request - In create/update request: optional',
          }),
        deviceUsageDuration: DurationSchema.exactOptional().openapi({
          description:
            "How much the device resource is used to perform the test. This is the device usage used for billing purpose, which is different from the run_duration, for example, infrastructure failure won't be charged for device usage. PRECONDITION_FAILED will be returned if one attempts to set a device_usage on a step which already has this field set. - In response: present if previously set. - In create request: optional - In update request: optional",
        }),
        dimensionValue: z
          .array(StepDimensionValueEntrySchema)
          .exactOptional()
          .openapi({
            description:
              "If the execution containing this step has any dimension_definition set, then this field allows the child to specify the values of the dimensions. The keys must exactly match the dimension_definition of the execution. For example, if the execution has `dimension_definition = ['attempt', 'device']` then a step must define values for those dimensions, eg. `dimension_value = ['attempt': '1', 'device': 'Nexus 6']` If a step does not participate in one dimension of the matrix, the value for that dimension should be empty string. For example, if one of the tests is executed by a runner which does not support retries, the step could have `dimension_value = ['attempt': '', 'device': 'Nexus 6']` If the step does not participate in any dimensions of the matrix, it may leave dimension_value unset. A PRECONDITION_FAILED will be returned if any of the keys do not exist in the dimension_definition of the execution. A PRECONDITION_FAILED will be returned if another step in this execution already has the same name and dimension_value, but differs on other data fields, for example, step field is different. A PRECONDITION_FAILED will be returned if dimension_value is set, and there is a dimension_definition in the execution which is not specified as one of the keys. - In response: present if set by create - In create request: optional - In update request: never set",
          }),
        hasImages: z
          .boolean()
          .exactOptional()
          .openapi({
            description:
              'Whether any of the outputs of this step are images whose thumbnails can be fetched with ListThumbnails. - In response: always set - In create/update request: never set',
          }),
        labels: z
          .array(StepLabelsEntrySchema)
          .exactOptional()
          .openapi({
            description:
              "Arbitrary user-supplied key/value pairs that are associated with the step. Users are responsible for managing the key namespace such that keys don't accidentally collide. An INVALID_ARGUMENT will be returned if the number of labels exceeds 100 or if the length of any of the keys or values exceeds 100 characters. - In response: always set - In create request: optional - In update request: optional; any new key/value pair will be added to the map, and any new value for an existing key will update that key's value",
          }),
        multiStep: MultiStepSchema.exactOptional().openapi({
          description:
            "Details when multiple steps are run with the same configuration as a group. These details can be used identify which group this step is part of. It also identifies the groups 'primary step' which indexes all the group members. - In response: present if previously set. - In create request: optional, set iff this step was performed more than once. - In update request: optional",
        }),
        name: z
          .string()
          .exactOptional()
          .openapi({
            description:
              'A short human-readable name to display in the UI. Maximum of 100 characters. For example: Clean build A PRECONDITION_FAILED will be returned upon creating a new step if it shares its name and dimension_value with an existing step. If two steps represent a similar action, but have different dimension values, they should share the same name. For instance, if the same set of tests is run on two different platforms, the two steps should have the same name. - In response: always set - In create request: always set - In update request: never set',
          }),
        outcome: OutcomeSchema.exactOptional().openapi({
          description:
            'Classification of the result, for example into SUCCESS or FAILURE - In response: present if set by create/update request - In create/update request: optional',
        }),
        runDuration: DurationSchema.exactOptional().openapi({
          description:
            'How long it took for this step to run. If unset, this is set to the difference between creation_time and completion_time when the step is set to the COMPLETE state. In some cases, it is appropriate to set this value separately: For instance, if a step is created, but the operation it represents is queued for a few minutes before it executes, it would be appropriate not to include the time spent queued in its run_duration. PRECONDITION_FAILED will be returned if one attempts to set a run_duration on a step which already has this field set. - In response: present if previously set; always present on COMPLETE step - In create request: optional - In update request: optional',
        }),
        state: z
          .enum(['unknownState', 'pending', 'inProgress', 'complete'])
          .exactOptional()
          .openapi({
            description:
              'The initial state is IN_PROGRESS. The only legal state transitions are * IN_PROGRESS -> COMPLETE A PRECONDITION_FAILED will be returned if an invalid transition is requested. It is valid to create Step with a state set to COMPLETE. The state can only be set to COMPLETE once. A PRECONDITION_FAILED will be returned if the state is set to COMPLETE multiple times. - In response: always set - In create/update request: optional',
          }),
        stepId: z
          .string()
          .exactOptional()
          .openapi({
            description:
              'A unique identifier within a Execution for this Step. Returns INVALID_ARGUMENT if this field is set or overwritten by the caller. - In response: always set - In create/update request: never set',
          }),
        testExecutionStep: TestExecutionStepSchema.exactOptional().openapi({
          description: 'An execution of a test runner.',
        }),
        toolExecutionStep: ToolExecutionStepSchema.exactOptional().openapi({
          description: "An execution of a tool (used for steps we don't explicitly support).",
        }),
      })
      .openapi({
        description:
          "A Step represents a single operation performed as part of Execution. A step can be used to represent the execution of a tool ( for example a test runner execution or an execution of a compiler). Steps can overlap (for instance two steps might have the same start time if some operations are done in parallel). Here is an example, let's consider that we have a continuous build is executing a test runner for each iteration. The workflow would look like: - user creates a Execution with id 1 - user creates a TestExecutionStep with id 100 for Execution 1 - user update TestExecutionStep with id 100 to add a raw xml log + the service parses the xml logs and returns a TestExecutionStep with updated TestResult(s). - user update the status of TestExecutionStep with id 100 to COMPLETE A Step can be updated until its state is set to COMPLETE at which points it becomes immutable. Next tag: 27",
        required: [],
      }),
  )
  .openapi('Step')

const ListStepsResponseSchema = z
  .object({
    nextPageToken: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'A continuation token to resume the query at the next item. If set, indicates that there are more steps to read, by calling list again with this value in the page_token field.',
      }),
    steps: z.array(StepSchema).exactOptional().openapi({ description: 'Steps.' }),
  })
  .openapi({ description: 'Response message for StepService.List.', required: [] })
  .openapi('ListStepsResponse')

const TestCaseSchema = z
  .object({
    elapsedTime: DurationSchema.exactOptional().openapi({
      description: 'The elapsed run time of the test case. Required.',
    }),
    endTime: TimestampSchema.exactOptional().openapi({
      description: 'The end time of the test case.',
    }),
    skippedMessage: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Why the test case was skipped. Present only for skipped test case',
      }),
    stackTraces: z
      .array(StackTraceSchema)
      .exactOptional()
      .openapi({
        description:
          'The stack trace details if the test case failed or encountered an error. The maximum size of the stack traces is 100KiB, beyond which the stack track will be truncated. Zero if the test case passed.',
      }),
    startTime: TimestampSchema.exactOptional().openapi({
      description: 'The start time of the test case.',
    }),
    status: z
      .enum(['passed', 'failed', 'error', 'skipped', 'flaky'])
      .exactOptional()
      .openapi({ description: 'The status of the test case. Required.' }),
    testCaseId: z
      .string()
      .exactOptional()
      .openapi({ description: 'A unique identifier within a Step for this Test Case.' }),
    testCaseReference: TestCaseReferenceSchema.exactOptional().openapi({
      description: 'Test case reference, e.g. name, class name and test suite name. Required.',
    }),
    toolOutputs: z
      .array(ToolOutputReferenceSchema)
      .exactOptional()
      .openapi({
        description:
          'References to opaque files of any format output by the tool execution. @OutputOnly',
      }),
  })
  .openapi({ required: [] })
  .openapi('TestCase')

const ListTestCasesResponseSchema = z
  .object({
    nextPageToken: z.string().exactOptional(),
    testCases: z
      .array(TestCaseSchema)
      .exactOptional()
      .openapi({ description: 'List of test cases.' }),
  })
  .openapi({ description: 'Response message for StepService.ListTestCases.', required: [] })
  .openapi('ListTestCasesResponse')

const LogcatCollectionErrorSchema = z
  .object({})
  .openapi({ description: 'A warning that there were issues in logcat collection.' })
  .openapi('LogcatCollectionError')

const MemoryInfoSchema = z
  .object({
    memoryCapInKibibyte: z
      .string()
      .exactOptional()
      .openapi({ description: 'Maximum memory that can be allocated to the process in KiB' }),
    memoryTotalInKibibyte: z
      .string()
      .exactOptional()
      .openapi({ description: 'Total memory available on the device in KiB' }),
  })
  .openapi({ required: [] })
  .openapi('MemoryInfo')

const NativeCrashSchema = z
  .object({
    stackTrace: StackTraceSchema.exactOptional().openapi({
      description: 'The stack trace of the native crash. Optional.',
    }),
  })
  .openapi({ description: 'Additional details for a native crash.', required: [] })
  .openapi('NativeCrash')

const PendingGoogleUpdateInsightSchema = z
  .object({
    nameOfGoogleLibrary: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The name of the Google-provided library with the non-SDK API dependency.',
      }),
  })
  .openapi({
    description:
      'This insight indicates that the hidden API usage originates from a Google-provided library. Users need not take any action.',
    required: [],
  })
  .openapi('PendingGoogleUpdateInsight')

const UpgradeInsightSchema = z
  .object({
    packageName: z
      .string()
      .exactOptional()
      .openapi({ description: 'The name of the package to be upgraded.' }),
    upgradeToVersion: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The suggested version to upgrade to. Optional: In case we are not sure which version solves this problem',
      }),
  })
  .openapi({
    description:
      'This insight is a recommendation to upgrade a given library to the specified version, in order to avoid dependencies on non-SDK APIs.',
    required: [],
  })
  .openapi('UpgradeInsight')

const NonSdkApiInsightSchema = z
  .object({
    exampleTraceMessages: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description:
          'Optional sample stack traces, for which this insight applies (there should be at least one).',
      }),
    matcherId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'A unique ID, to be used for determining the effectiveness of this particular insight in the context of a matcher. (required)',
      }),
    pendingGoogleUpdateInsight: PendingGoogleUpdateInsightSchema.exactOptional().openapi({
      description:
        'An insight indicating that the hidden API usage originates from a Google-provided library.',
    }),
    upgradeInsight: UpgradeInsightSchema.exactOptional().openapi({
      description:
        'An insight indicating that the hidden API usage originates from the use of a library that needs to be upgraded.',
    }),
  })
  .openapi({ description: 'Non-SDK API insights (to address debugging solutions).', required: [] })
  .openapi('NonSdkApiInsight')

const NonSdkApiSchema = z
  .object({
    apiSignature: z
      .string()
      .exactOptional()
      .openapi({ description: 'The signature of the Non-SDK API' }),
    exampleStackTraces: z
      .array(z.string())
      .exactOptional()
      .openapi({ description: 'Example stack traces of this API being called.' }),
    insights: z
      .array(NonSdkApiInsightSchema)
      .exactOptional()
      .openapi({ description: 'Optional debugging insights for non-SDK API violations.' }),
    invocationCount: z
      .int32()
      .exactOptional()
      .openapi({
        description: 'The total number of times this API was observed to have been called.',
      }),
    list: z
      .enum([
        'NONE',
        'WHITE',
        'BLACK',
        'GREY',
        'GREY_MAX_O',
        'GREY_MAX_P',
        'GREY_MAX_Q',
        'GREY_MAX_R',
      ])
      .exactOptional()
      .openapi({ description: 'Which list this API appears on' }),
  })
  .openapi({
    description:
      'A non-sdk API and examples of it being called along with other metadata See https://developer.android.com/distribute/best-practices/develop/restrictions-non-sdk-interfaces',
    required: [],
  })
  .openapi('NonSdkApi')

const NonSdkApiUsageViolationSchema = z
  .object({
    apiSignatures: z
      .array(z.string())
      .exactOptional()
      .openapi({ description: "Signatures of a subset of those hidden API's." }),
    uniqueApis: z
      .int32()
      .exactOptional()
      .openapi({ description: "Total number of unique hidden API's accessed." }),
  })
  .openapi({ description: 'Additional details for a non-sdk API usage violation.', required: [] })
  .openapi('NonSdkApiUsageViolation')

const NonSdkApiUsageViolationReportSchema = z
  .object({
    exampleApis: z
      .array(NonSdkApiSchema)
      .exactOptional()
      .openapi({ description: 'Examples of the detected API usages.' }),
    minSdkVersion: z
      .int32()
      .exactOptional()
      .openapi({ description: 'Minimum API level required for the application to run.' }),
    targetSdkVersion: z
      .int32()
      .exactOptional()
      .openapi({
        description: 'Specifies the API Level on which the application is designed to run.',
      }),
    uniqueApis: z
      .int32()
      .exactOptional()
      .openapi({ description: "Total number of unique Non-SDK API's accessed." }),
  })
  .openapi({
    description: 'Contains a summary and examples of non-sdk API usage violations.',
    required: [],
  })
  .openapi('NonSdkApiUsageViolationReport')

const OverlappingUIElementsSchema = z
  .object({
    resourceName: z
      .array(z.string())
      .exactOptional()
      .openapi({ description: 'Resource names of the overlapping screen elements' }),
    screenId: z.string().exactOptional().openapi({ description: 'The screen id of the elements' }),
  })
  .openapi({
    description:
      'A warning that Robo encountered a screen that has overlapping clickable elements; this may indicate a potential UI issue.',
    required: [],
  })
  .openapi('OverlappingUIElements')

const PerfEnvironmentSchema = z
  .object({
    cpuInfo: CPUInfoSchema.exactOptional().openapi({ description: 'CPU related environment info' }),
    memoryInfo: MemoryInfoSchema.exactOptional().openapi({
      description: 'Memory related environment info',
    }),
  })
  .openapi({ description: 'Encapsulates performance environment info', required: [] })
  .openapi('PerfEnvironment')

const PerfMetricsSummarySchema = z
  .object({
    appStartTime: AppStartTimeSchema.exactOptional(),
    executionId: z
      .string()
      .exactOptional()
      .openapi({ description: 'A tool results execution ID. @OutputOnly' }),
    graphicsStats: GraphicsStatsSchema.exactOptional().openapi({
      description:
        'Graphics statistics for the entire run. Statistics are reset at the beginning of the run and collected at the end of the run.',
    }),
    historyId: z
      .string()
      .exactOptional()
      .openapi({ description: 'A tool results history ID. @OutputOnly' }),
    perfEnvironment: PerfEnvironmentSchema.exactOptional().openapi({
      description: 'Describes the environment in which the performance metrics were collected',
    }),
    perfMetrics: z
      .array(z.enum(['perfMetricTypeUnspecified', 'memory', 'cpu', 'network', 'graphics']))
      .exactOptional()
      .openapi({ description: 'Set of resource collected' }),
    projectId: z.string().exactOptional().openapi({ description: 'The cloud project @OutputOnly' }),
    stepId: z
      .string()
      .exactOptional()
      .openapi({ description: 'A tool results step ID. @OutputOnly' }),
  })
  .openapi({
    description: 'A summary of perf metrics collected and performance environment info',
    required: [],
  })
  .openapi('PerfMetricsSummary')

const PerformedGoogleLoginSchema = z
  .object({})
  .openapi({ description: 'A notification that Robo signed in with Google.' })
  .openapi('PerformedGoogleLogin')

const PerformedMonkeyActionsSchema = z
  .object({
    totalActions: z
      .int32()
      .exactOptional()
      .openapi({ description: 'The total number of monkey actions performed during the crawl.' }),
  })
  .openapi({ description: 'A notification that Robo performed some monkey actions.', required: [] })
  .openapi('PerformedMonkeyActions')

const ProjectSettingsSchema = z
  .object({
    defaultBucket: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The name of the Google Cloud Storage bucket to which results are written. By default, this is unset. In update request: optional In response: optional',
      }),
    name: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "The name of the project's settings. Always of the form: projects/{project-id}/settings In update request: never set In response: always set",
      }),
  })
  .openapi({ description: 'Per-project settings for the Tool Results service.', required: [] })
  .openapi('ProjectSettings')

const PublishXunitXmlFilesRequestSchema = z
  .object({
    xunitXmlFiles: z
      .array(FileReferenceSchema)
      .exactOptional()
      .openapi({
        description:
          'URI of the Xunit XML files to publish. The maximum size of the file this reference is pointing to is 50MB. Required.',
      }),
  })
  .openapi({ description: 'Request message for StepService.PublishXunitXmlFiles.', required: [] })
  .openapi('PublishXunitXmlFilesRequest')

const RoboScriptExecutionSchema = z
  .object({
    successfulActions: z
      .int32()
      .exactOptional()
      .openapi({ description: 'The number of Robo script actions executed successfully.' }),
    totalActions: z
      .int32()
      .exactOptional()
      .openapi({ description: 'The total number of actions in the Robo script.' }),
  })
  .openapi({ description: 'Execution stats for a user-provided Robo script.', required: [] })
  .openapi('RoboScriptExecution')

const StartActivityNotFoundSchema = z
  .object({ action: z.string().exactOptional(), uri: z.string().exactOptional() })
  .openapi({ description: 'User provided intent failed to resolve to an activity.', required: [] })
  .openapi('StartActivityNotFound')

const UIElementTooDeepSchema = z
  .object({
    depth: z.int32().exactOptional().openapi({ description: 'The depth of the screen element' }),
    screenId: z.string().exactOptional().openapi({ description: 'The screen id of the element' }),
    screenStateId: z
      .string()
      .exactOptional()
      .openapi({ description: 'The screen state id of the element' }),
  })
  .openapi({
    description: 'A warning that the screen hierarchy is deeper than the recommended threshold.',
    required: [],
  })
  .openapi('UIElementTooDeep')

const UnspecifiedWarningSchema = z
  .object({})
  .openapi({ description: 'Default unspecified warning.' })
  .openapi('UnspecifiedWarning')

const UnusedRoboDirectiveSchema = z
  .object({
    resourceName: z
      .string()
      .exactOptional()
      .openapi({ description: 'The name of the resource that was unused.' }),
  })
  .openapi({ description: 'Additional details of an unused robodirective.', required: [] })
  .openapi('UnusedRoboDirective')

const UsedRoboDirectiveSchema = z
  .object({
    resourceName: z
      .string()
      .exactOptional()
      .openapi({ description: 'The name of the resource that was used.' }),
  })
  .openapi({ description: 'Additional details of a used Robo directive.', required: [] })
  .openapi('UsedRoboDirective')

const UsedRoboIgnoreDirectiveSchema = z
  .object({
    resourceName: z
      .string()
      .exactOptional()
      .openapi({ description: 'The name of the resource that was ignored.' }),
  })
  .openapi({
    description:
      'Additional details of a used Robo directive with an ignore action. Note: This is a different scenario than unused directive.',
    required: [],
  })
  .openapi('UsedRoboIgnoreDirective')

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

export const getToolresultsV1beta3ProjectsProjectIdHistoriesRoute = createRoute({
  method: 'get',
  path: '/toolresults/v1beta3/projects/{projectId}/histories',
  tags: ['projects'],
  description:
    'Lists Histories for a given Project. The histories are sorted by modification time in descending order. The history_id key will be used to order the history with the same modification time. May return any of the following canonical error codes: - PERMISSION_DENIED - if the user is not authorized to read project - INVALID_ARGUMENT - if the request is malformed - NOT_FOUND - if the History does not exist',
  operationId: 'toolresults.projects.histories.list',
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
      filterByName: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'If set, only return histories with the given name. Optional.',
            in: 'query',
            name: 'filterByName',
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
              'The maximum number of Histories to fetch. Default value: 20. The server will use this default if the field is not set or has a value of 0. Any value greater than 100 will be treated as 100. Optional.',
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
            description: 'A continuation token to resume the query at the next item. Optional.',
            in: 'query',
            name: 'pageToken',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
    params: z.object({
      projectId: z
        .string()
        .openapi({
          param: {
            description: 'A Project id. Required.',
            in: 'path',
            name: 'projectId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: ListHistoriesResponseSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
  ],
})

export const postToolresultsV1beta3ProjectsProjectIdHistoriesRoute = createRoute({
  method: 'post',
  path: '/toolresults/v1beta3/projects/{projectId}/histories',
  tags: ['projects'],
  description:
    'Creates a History. The returned History will have the id set. May return any of the following canonical error codes: - PERMISSION_DENIED - if the user is not authorized to write to project - INVALID_ARGUMENT - if the request is malformed - NOT_FOUND - if the containing project does not exist',
  operationId: 'toolresults.projects.histories.create',
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
      requestId: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'A unique request ID for server to detect duplicated requests. For example, a UUID. Optional, but strongly recommended.',
            in: 'query',
            name: 'requestId',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
    params: z.object({
      projectId: z
        .string()
        .openapi({
          param: {
            description: 'A Project id. Required.',
            in: 'path',
            name: 'projectId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: HistorySchema } } },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: HistorySchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
  ],
})

export const getToolresultsV1beta3ProjectsProjectIdHistoriesHistoryIdRoute = createRoute({
  method: 'get',
  path: '/toolresults/v1beta3/projects/{projectId}/histories/{historyId}',
  tags: ['projects'],
  description:
    'Gets a History. May return any of the following canonical error codes: - PERMISSION_DENIED - if the user is not authorized to read project - INVALID_ARGUMENT - if the request is malformed - NOT_FOUND - if the History does not exist',
  operationId: 'toolresults.projects.histories.get',
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
      projectId: z
        .string()
        .openapi({
          param: {
            description: 'A Project id. Required.',
            in: 'path',
            name: 'projectId',
            required: true,
            schema: { type: 'string' },
          },
        }),
      historyId: z
        .string()
        .openapi({
          param: {
            description: 'A History id. Required.',
            in: 'path',
            name: 'historyId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: HistorySchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
  ],
})

export const getToolresultsV1beta3ProjectsProjectIdHistoriesHistoryIdExecutionsRoute = createRoute({
  method: 'get',
  path: '/toolresults/v1beta3/projects/{projectId}/histories/{historyId}/executions',
  tags: ['projects'],
  description:
    'Lists Executions for a given History. The executions are sorted by creation_time in descending order. The execution_id key will be used to order the executions with the same creation_time. May return any of the following canonical error codes: - PERMISSION_DENIED - if the user is not authorized to read project - INVALID_ARGUMENT - if the request is malformed - NOT_FOUND - if the containing History does not exist',
  operationId: 'toolresults.projects.histories.executions.list',
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
              'The maximum number of Executions to fetch. Default value: 25. The server will use this default if the field is not set or has a value of 0. Optional.',
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
            description: 'A continuation token to resume the query at the next item. Optional.',
            in: 'query',
            name: 'pageToken',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
    params: z.object({
      projectId: z
        .string()
        .openapi({
          param: {
            description: 'A Project id. Required.',
            in: 'path',
            name: 'projectId',
            required: true,
            schema: { type: 'string' },
          },
        }),
      historyId: z
        .string()
        .openapi({
          param: {
            description: 'A History id. Required.',
            in: 'path',
            name: 'historyId',
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

export const postToolresultsV1beta3ProjectsProjectIdHistoriesHistoryIdExecutionsRoute = createRoute(
  {
    method: 'post',
    path: '/toolresults/v1beta3/projects/{projectId}/histories/{historyId}/executions',
    tags: ['projects'],
    description:
      'Creates an Execution. The returned Execution will have the id set. May return any of the following canonical error codes: - PERMISSION_DENIED - if the user is not authorized to write to project - INVALID_ARGUMENT - if the request is malformed - NOT_FOUND - if the containing History does not exist',
    operationId: 'toolresults.projects.histories.executions.create',
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
        requestId: z
          .string()
          .exactOptional()
          .openapi({
            param: {
              description:
                'A unique request ID for server to detect duplicated requests. For example, a UUID. Optional, but strongly recommended.',
              in: 'query',
              name: 'requestId',
              schema: { type: 'string' },
              required: false,
            },
          }),
      }),
      params: z.object({
        projectId: z
          .string()
          .openapi({
            param: {
              description: 'A Project id. Required.',
              in: 'path',
              name: 'projectId',
              required: true,
              schema: { type: 'string' },
            },
          }),
        historyId: z
          .string()
          .openapi({
            param: {
              description: 'A History id. Required.',
              in: 'path',
              name: 'historyId',
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
  },
)

export const getToolresultsV1beta3ProjectsProjectIdHistoriesHistoryIdExecutionsExecutionIdRoute =
  createRoute({
    method: 'get',
    path: '/toolresults/v1beta3/projects/{projectId}/histories/{historyId}/executions/{executionId}',
    tags: ['projects'],
    description:
      'Gets an Execution. May return any of the following canonical error codes: - PERMISSION_DENIED - if the user is not authorized to write to project - INVALID_ARGUMENT - if the request is malformed - NOT_FOUND - if the Execution does not exist',
    operationId: 'toolresults.projects.histories.executions.get',
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
        projectId: z
          .string()
          .openapi({
            param: {
              description: 'A Project id. Required.',
              in: 'path',
              name: 'projectId',
              required: true,
              schema: { type: 'string' },
            },
          }),
        historyId: z
          .string()
          .openapi({
            param: {
              description: 'A History id. Required.',
              in: 'path',
              name: 'historyId',
              required: true,
              schema: { type: 'string' },
            },
          }),
        executionId: z
          .string()
          .openapi({
            param: {
              description: 'An Execution id. Required.',
              in: 'path',
              name: 'executionId',
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

export const patchToolresultsV1beta3ProjectsProjectIdHistoriesHistoryIdExecutionsExecutionIdRoute =
  createRoute({
    method: 'patch',
    path: '/toolresults/v1beta3/projects/{projectId}/histories/{historyId}/executions/{executionId}',
    tags: ['projects'],
    description:
      'Updates an existing Execution with the supplied partial entity. May return any of the following canonical error codes: - PERMISSION_DENIED - if the user is not authorized to write to project - INVALID_ARGUMENT - if the request is malformed - FAILED_PRECONDITION - if the requested state transition is illegal - NOT_FOUND - if the containing History does not exist',
    operationId: 'toolresults.projects.histories.executions.patch',
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
        requestId: z
          .string()
          .exactOptional()
          .openapi({
            param: {
              description:
                'A unique request ID for server to detect duplicated requests. For example, a UUID. Optional, but strongly recommended.',
              in: 'query',
              name: 'requestId',
              schema: { type: 'string' },
              required: false,
            },
          }),
      }),
      params: z.object({
        projectId: z
          .string()
          .openapi({
            param: {
              description: 'A Project id. Required.',
              in: 'path',
              name: 'projectId',
              required: true,
              schema: { type: 'string' },
            },
          }),
        historyId: z
          .string()
          .openapi({
            param: {
              description: 'Required.',
              in: 'path',
              name: 'historyId',
              required: true,
              schema: { type: 'string' },
            },
          }),
        executionId: z
          .string()
          .openapi({
            param: {
              description: 'Required.',
              in: 'path',
              name: 'executionId',
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

export const getToolresultsV1beta3ProjectsProjectIdHistoriesHistoryIdExecutionsExecutionIdClustersRoute =
  createRoute({
    method: 'get',
    path: '/toolresults/v1beta3/projects/{projectId}/histories/{historyId}/executions/{executionId}/clusters',
    tags: ['projects'],
    description:
      'Lists Screenshot Clusters Returns the list of screenshot clusters corresponding to an execution. Screenshot clusters are created after the execution is finished. Clusters are created from a set of screenshots. Between any two screenshots, a matching score is calculated based off their metadata that determines how similar they are. Screenshots are placed in the cluster that has screens which have the highest matching scores.',
    operationId: 'toolresults.projects.histories.executions.clusters.list',
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
        projectId: z
          .string()
          .openapi({
            param: {
              description: 'A Project id. Required.',
              in: 'path',
              name: 'projectId',
              required: true,
              schema: { type: 'string' },
            },
          }),
        historyId: z
          .string()
          .openapi({
            param: {
              description: 'A History id. Required.',
              in: 'path',
              name: 'historyId',
              required: true,
              schema: { type: 'string' },
            },
          }),
        executionId: z
          .string()
          .openapi({
            param: {
              description: 'An Execution id. Required.',
              in: 'path',
              name: 'executionId',
              required: true,
              schema: { type: 'string' },
            },
          }),
      }),
    },
    responses: {
      200: {
        description: 'Successful response',
        content: { 'application/json': { schema: ListScreenshotClustersResponseSchema } },
      },
    },
    security: [
      {
        Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
        Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
      },
    ],
  })

export const getToolresultsV1beta3ProjectsProjectIdHistoriesHistoryIdExecutionsExecutionIdClustersClusterIdRoute =
  createRoute({
    method: 'get',
    path: '/toolresults/v1beta3/projects/{projectId}/histories/{historyId}/executions/{executionId}/clusters/{clusterId}',
    tags: ['projects'],
    description: 'Retrieves a single screenshot cluster by its ID',
    operationId: 'toolresults.projects.histories.executions.clusters.get',
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
        projectId: z
          .string()
          .openapi({
            param: {
              description: 'A Project id. Required.',
              in: 'path',
              name: 'projectId',
              required: true,
              schema: { type: 'string' },
            },
          }),
        historyId: z
          .string()
          .openapi({
            param: {
              description: 'A History id. Required.',
              in: 'path',
              name: 'historyId',
              required: true,
              schema: { type: 'string' },
            },
          }),
        executionId: z
          .string()
          .openapi({
            param: {
              description: 'An Execution id. Required.',
              in: 'path',
              name: 'executionId',
              required: true,
              schema: { type: 'string' },
            },
          }),
        clusterId: z
          .string()
          .openapi({
            param: {
              description: 'A Cluster id Required.',
              in: 'path',
              name: 'clusterId',
              required: true,
              schema: { type: 'string' },
            },
          }),
      }),
    },
    responses: {
      200: {
        description: 'Successful response',
        content: { 'application/json': { schema: ScreenshotClusterSchema } },
      },
    },
    security: [
      {
        Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
        Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
      },
    ],
  })

export const getToolresultsV1beta3ProjectsProjectIdHistoriesHistoryIdExecutionsExecutionIdEnvironmentsRoute =
  createRoute({
    method: 'get',
    path: '/toolresults/v1beta3/projects/{projectId}/histories/{historyId}/executions/{executionId}/environments',
    tags: ['projects'],
    description:
      'Lists Environments for a given Execution. The Environments are sorted by display name. May return any of the following canonical error codes: - PERMISSION_DENIED - if the user is not authorized to read project - INVALID_ARGUMENT - if the request is malformed - NOT_FOUND - if the containing Execution does not exist',
    operationId: 'toolresults.projects.histories.executions.environments.list',
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
                'The maximum number of Environments to fetch. Default value: 25. The server will use this default if the field is not set or has a value of 0.',
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
              description: 'A continuation token to resume the query at the next item.',
              in: 'query',
              name: 'pageToken',
              schema: { type: 'string' },
              required: false,
            },
          }),
      }),
      params: z.object({
        projectId: z
          .string()
          .openapi({
            param: {
              description: 'Required. A Project id.',
              in: 'path',
              name: 'projectId',
              required: true,
              schema: { type: 'string' },
            },
          }),
        historyId: z
          .string()
          .openapi({
            param: {
              description: 'Required. A History id.',
              in: 'path',
              name: 'historyId',
              required: true,
              schema: { type: 'string' },
            },
          }),
        executionId: z
          .string()
          .openapi({
            param: {
              description: 'Required. An Execution id.',
              in: 'path',
              name: 'executionId',
              required: true,
              schema: { type: 'string' },
            },
          }),
      }),
    },
    responses: {
      200: {
        description: 'Successful response',
        content: { 'application/json': { schema: ListEnvironmentsResponseSchema } },
      },
    },
    security: [
      {
        Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
        Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
      },
    ],
  })

export const getToolresultsV1beta3ProjectsProjectIdHistoriesHistoryIdExecutionsExecutionIdEnvironmentsEnvironmentIdRoute =
  createRoute({
    method: 'get',
    path: '/toolresults/v1beta3/projects/{projectId}/histories/{historyId}/executions/{executionId}/environments/{environmentId}',
    tags: ['projects'],
    description:
      'Gets an Environment. May return any of the following canonical error codes: - PERMISSION_DENIED - if the user is not authorized to read project - INVALID_ARGUMENT - if the request is malformed - NOT_FOUND - if the Environment does not exist',
    operationId: 'toolresults.projects.histories.executions.environments.get',
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
        projectId: z
          .string()
          .openapi({
            param: {
              description: 'Required. A Project id.',
              in: 'path',
              name: 'projectId',
              required: true,
              schema: { type: 'string' },
            },
          }),
        historyId: z
          .string()
          .openapi({
            param: {
              description: 'Required. A History id.',
              in: 'path',
              name: 'historyId',
              required: true,
              schema: { type: 'string' },
            },
          }),
        executionId: z
          .string()
          .openapi({
            param: {
              description: 'Required. An Execution id.',
              in: 'path',
              name: 'executionId',
              required: true,
              schema: { type: 'string' },
            },
          }),
        environmentId: z
          .string()
          .openapi({
            param: {
              description: 'Required. An Environment id.',
              in: 'path',
              name: 'environmentId',
              required: true,
              schema: { type: 'string' },
            },
          }),
      }),
    },
    responses: {
      200: {
        description: 'Successful response',
        content: { 'application/json': { schema: EnvironmentSchema } },
      },
    },
    security: [
      {
        Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
        Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
      },
    ],
  })

export const getToolresultsV1beta3ProjectsProjectIdHistoriesHistoryIdExecutionsExecutionIdStepsRoute =
  createRoute({
    method: 'get',
    path: '/toolresults/v1beta3/projects/{projectId}/histories/{historyId}/executions/{executionId}/steps',
    tags: ['projects'],
    description:
      'Lists Steps for a given Execution. The steps are sorted by creation_time in descending order. The step_id key will be used to order the steps with the same creation_time. May return any of the following canonical error codes: - PERMISSION_DENIED - if the user is not authorized to read project - INVALID_ARGUMENT - if the request is malformed - FAILED_PRECONDITION - if an argument in the request happens to be invalid; e.g. if an attempt is made to list the children of a nonexistent Step - NOT_FOUND - if the containing Execution does not exist',
    operationId: 'toolresults.projects.histories.executions.steps.list',
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
                'The maximum number of Steps to fetch. Default value: 25. The server will use this default if the field is not set or has a value of 0. Optional.',
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
              description: 'A continuation token to resume the query at the next item. Optional.',
              in: 'query',
              name: 'pageToken',
              schema: { type: 'string' },
              required: false,
            },
          }),
      }),
      params: z.object({
        projectId: z
          .string()
          .openapi({
            param: {
              description: 'A Project id. Required.',
              in: 'path',
              name: 'projectId',
              required: true,
              schema: { type: 'string' },
            },
          }),
        historyId: z
          .string()
          .openapi({
            param: {
              description: 'A History id. Required.',
              in: 'path',
              name: 'historyId',
              required: true,
              schema: { type: 'string' },
            },
          }),
        executionId: z
          .string()
          .openapi({
            param: {
              description: 'A Execution id. Required.',
              in: 'path',
              name: 'executionId',
              required: true,
              schema: { type: 'string' },
            },
          }),
      }),
    },
    responses: {
      200: {
        description: 'Successful response',
        content: { 'application/json': { schema: ListStepsResponseSchema } },
      },
    },
    security: [
      {
        Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
        Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
      },
    ],
  })

export const postToolresultsV1beta3ProjectsProjectIdHistoriesHistoryIdExecutionsExecutionIdStepsRoute =
  createRoute({
    method: 'post',
    path: '/toolresults/v1beta3/projects/{projectId}/histories/{historyId}/executions/{executionId}/steps',
    tags: ['projects'],
    description:
      'Creates a Step. The returned Step will have the id set. May return any of the following canonical error codes: - PERMISSION_DENIED - if the user is not authorized to write to project - INVALID_ARGUMENT - if the request is malformed - FAILED_PRECONDITION - if the step is too large (more than 10Mib) - NOT_FOUND - if the containing Execution does not exist',
    operationId: 'toolresults.projects.histories.executions.steps.create',
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
        requestId: z
          .string()
          .exactOptional()
          .openapi({
            param: {
              description:
                'A unique request ID for server to detect duplicated requests. For example, a UUID. Optional, but strongly recommended.',
              in: 'query',
              name: 'requestId',
              schema: { type: 'string' },
              required: false,
            },
          }),
      }),
      params: z.object({
        projectId: z
          .string()
          .openapi({
            param: {
              description: 'Required. A Project id.',
              in: 'path',
              name: 'projectId',
              required: true,
              schema: { type: 'string' },
            },
          }),
        historyId: z
          .string()
          .openapi({
            param: {
              description: 'Required. A History id.',
              in: 'path',
              name: 'historyId',
              required: true,
              schema: { type: 'string' },
            },
          }),
        executionId: z
          .string()
          .openapi({
            param: {
              description: 'Required. An Execution id.',
              in: 'path',
              name: 'executionId',
              required: true,
              schema: { type: 'string' },
            },
          }),
      }),
      body: { content: { 'application/json': { schema: StepSchema } } },
    },
    responses: {
      200: {
        description: 'Successful response',
        content: { 'application/json': { schema: StepSchema } },
      },
    },
    security: [
      {
        Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
        Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
      },
    ],
  })

export const getToolresultsV1beta3ProjectsProjectIdHistoriesHistoryIdExecutionsExecutionIdStepsStepIdRoute =
  createRoute({
    method: 'get',
    path: '/toolresults/v1beta3/projects/{projectId}/histories/{historyId}/executions/{executionId}/steps/{stepId}',
    tags: ['projects'],
    description:
      'Gets a Step. May return any of the following canonical error codes: - PERMISSION_DENIED - if the user is not authorized to read project - INVALID_ARGUMENT - if the request is malformed - NOT_FOUND - if the Step does not exist',
    operationId: 'toolresults.projects.histories.executions.steps.get',
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
        projectId: z
          .string()
          .openapi({
            param: {
              description: 'A Project id. Required.',
              in: 'path',
              name: 'projectId',
              required: true,
              schema: { type: 'string' },
            },
          }),
        historyId: z
          .string()
          .openapi({
            param: {
              description: 'A History id. Required.',
              in: 'path',
              name: 'historyId',
              required: true,
              schema: { type: 'string' },
            },
          }),
        executionId: z
          .string()
          .openapi({
            param: {
              description: 'A Execution id. Required.',
              in: 'path',
              name: 'executionId',
              required: true,
              schema: { type: 'string' },
            },
          }),
        stepId: z
          .string()
          .openapi({
            param: {
              description: 'A Step id. Required.',
              in: 'path',
              name: 'stepId',
              required: true,
              schema: { type: 'string' },
            },
          }),
      }),
    },
    responses: {
      200: {
        description: 'Successful response',
        content: { 'application/json': { schema: StepSchema } },
      },
    },
    security: [
      {
        Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
        Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
      },
    ],
  })

export const patchToolresultsV1beta3ProjectsProjectIdHistoriesHistoryIdExecutionsExecutionIdStepsStepIdRoute =
  createRoute({
    method: 'patch',
    path: '/toolresults/v1beta3/projects/{projectId}/histories/{historyId}/executions/{executionId}/steps/{stepId}',
    tags: ['projects'],
    description:
      'Updates an existing Step with the supplied partial entity. May return any of the following canonical error codes: - PERMISSION_DENIED - if the user is not authorized to write project - INVALID_ARGUMENT - if the request is malformed - FAILED_PRECONDITION - if the requested state transition is illegal (e.g try to upload a duplicate xml file), if the updated step is too large (more than 10Mib) - NOT_FOUND - if the containing Execution does not exist',
    operationId: 'toolresults.projects.histories.executions.steps.patch',
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
        requestId: z
          .string()
          .exactOptional()
          .openapi({
            param: {
              description:
                'A unique request ID for server to detect duplicated requests. For example, a UUID. Optional, but strongly recommended.',
              in: 'query',
              name: 'requestId',
              schema: { type: 'string' },
              required: false,
            },
          }),
      }),
      params: z.object({
        projectId: z
          .string()
          .openapi({
            param: {
              description: 'A Project id. Required.',
              in: 'path',
              name: 'projectId',
              required: true,
              schema: { type: 'string' },
            },
          }),
        historyId: z
          .string()
          .openapi({
            param: {
              description: 'A History id. Required.',
              in: 'path',
              name: 'historyId',
              required: true,
              schema: { type: 'string' },
            },
          }),
        executionId: z
          .string()
          .openapi({
            param: {
              description: 'A Execution id. Required.',
              in: 'path',
              name: 'executionId',
              required: true,
              schema: { type: 'string' },
            },
          }),
        stepId: z
          .string()
          .openapi({
            param: {
              description: 'A Step id. Required.',
              in: 'path',
              name: 'stepId',
              required: true,
              schema: { type: 'string' },
            },
          }),
      }),
      body: { content: { 'application/json': { schema: StepSchema } } },
    },
    responses: {
      200: {
        description: 'Successful response',
        content: { 'application/json': { schema: StepSchema } },
      },
    },
    security: [
      {
        Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
        Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
      },
    ],
  })

export const getToolresultsV1beta3ProjectsProjectIdHistoriesHistoryIdExecutionsExecutionIdStepsStepIdPerfMetricsSummaryRoute =
  createRoute({
    method: 'get',
    path: '/toolresults/v1beta3/projects/{projectId}/histories/{historyId}/executions/{executionId}/steps/{stepId}/perfMetricsSummary',
    tags: ['projects'],
    description:
      'Retrieves a PerfMetricsSummary. May return any of the following error code(s): - NOT_FOUND - The specified PerfMetricsSummary does not exist',
    operationId: 'toolresults.projects.histories.executions.steps.getPerfMetricsSummary',
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
        projectId: z
          .string()
          .openapi({
            param: {
              description: 'The cloud project',
              in: 'path',
              name: 'projectId',
              required: true,
              schema: { type: 'string' },
            },
          }),
        historyId: z
          .string()
          .openapi({
            param: {
              description: 'A tool results history ID.',
              in: 'path',
              name: 'historyId',
              required: true,
              schema: { type: 'string' },
            },
          }),
        executionId: z
          .string()
          .openapi({
            param: {
              description: 'A tool results execution ID.',
              in: 'path',
              name: 'executionId',
              required: true,
              schema: { type: 'string' },
            },
          }),
        stepId: z
          .string()
          .openapi({
            param: {
              description: 'A tool results step ID.',
              in: 'path',
              name: 'stepId',
              required: true,
              schema: { type: 'string' },
            },
          }),
      }),
    },
    responses: {
      200: {
        description: 'Successful response',
        content: { 'application/json': { schema: PerfMetricsSummarySchema } },
      },
    },
    security: [
      {
        Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
        Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
      },
    ],
  })

export const postToolresultsV1beta3ProjectsProjectIdHistoriesHistoryIdExecutionsExecutionIdStepsStepIdPerfMetricsSummaryRoute =
  createRoute({
    method: 'post',
    path: '/toolresults/v1beta3/projects/{projectId}/histories/{historyId}/executions/{executionId}/steps/{stepId}/perfMetricsSummary',
    tags: ['projects'],
    description:
      'Creates a PerfMetricsSummary resource. Returns the existing one if it has already been created. May return any of the following error code(s): - NOT_FOUND - The containing Step does not exist',
    operationId: 'toolresults.projects.histories.executions.steps.perfMetricsSummary.create',
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
        projectId: z
          .string()
          .openapi({
            param: {
              description: 'The cloud project',
              in: 'path',
              name: 'projectId',
              required: true,
              schema: { type: 'string' },
            },
          }),
        historyId: z
          .string()
          .openapi({
            param: {
              description: 'A tool results history ID.',
              in: 'path',
              name: 'historyId',
              required: true,
              schema: { type: 'string' },
            },
          }),
        executionId: z
          .string()
          .openapi({
            param: {
              description: 'A tool results execution ID.',
              in: 'path',
              name: 'executionId',
              required: true,
              schema: { type: 'string' },
            },
          }),
        stepId: z
          .string()
          .openapi({
            param: {
              description: 'A tool results step ID.',
              in: 'path',
              name: 'stepId',
              required: true,
              schema: { type: 'string' },
            },
          }),
      }),
      body: { content: { 'application/json': { schema: PerfMetricsSummarySchema } } },
    },
    responses: {
      200: {
        description: 'Successful response',
        content: { 'application/json': { schema: PerfMetricsSummarySchema } },
      },
    },
    security: [
      {
        Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
        Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
      },
    ],
  })

export const getToolresultsV1beta3ProjectsProjectIdHistoriesHistoryIdExecutionsExecutionIdStepsStepIdPerfSampleSeriesRoute =
  createRoute({
    method: 'get',
    path: '/toolresults/v1beta3/projects/{projectId}/histories/{historyId}/executions/{executionId}/steps/{stepId}/perfSampleSeries',
    tags: ['projects'],
    description:
      'Lists PerfSampleSeries for a given Step. The request provides an optional filter which specifies one or more PerfMetricsType to include in the result; if none returns all. The resulting PerfSampleSeries are sorted by ids. May return any of the following canonical error codes: - NOT_FOUND - The containing Step does not exist',
    operationId: 'toolresults.projects.histories.executions.steps.perfSampleSeries.list',
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
          .preprocess(
            (val) => (val === undefined || Array.isArray(val) ? val : [val]),
            z.array(z.enum(['perfMetricTypeUnspecified', 'memory', 'cpu', 'network', 'graphics'])),
          )
          .exactOptional()
          .openapi({
            param: {
              description:
                'Specify one or more PerfMetricType values such as CPU to filter the result',
              explode: true,
              in: 'query',
              name: 'filter',
              schema: {
                items: {
                  enum: ['perfMetricTypeUnspecified', 'memory', 'cpu', 'network', 'graphics'],
                  type: 'string',
                },
                type: 'array',
              },
              style: 'form',
              required: false,
            },
          }),
      }),
      params: z.object({
        projectId: z
          .string()
          .openapi({
            param: {
              description: 'The cloud project',
              in: 'path',
              name: 'projectId',
              required: true,
              schema: { type: 'string' },
            },
          }),
        historyId: z
          .string()
          .openapi({
            param: {
              description: 'A tool results history ID.',
              in: 'path',
              name: 'historyId',
              required: true,
              schema: { type: 'string' },
            },
          }),
        executionId: z
          .string()
          .openapi({
            param: {
              description: 'A tool results execution ID.',
              in: 'path',
              name: 'executionId',
              required: true,
              schema: { type: 'string' },
            },
          }),
        stepId: z
          .string()
          .openapi({
            param: {
              description: 'A tool results step ID.',
              in: 'path',
              name: 'stepId',
              required: true,
              schema: { type: 'string' },
            },
          }),
      }),
    },
    responses: {
      200: {
        description: 'Successful response',
        content: { 'application/json': { schema: ListPerfSampleSeriesResponseSchema } },
      },
    },
    security: [
      {
        Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
        Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
      },
    ],
  })

export const postToolresultsV1beta3ProjectsProjectIdHistoriesHistoryIdExecutionsExecutionIdStepsStepIdPerfSampleSeriesRoute =
  createRoute({
    method: 'post',
    path: '/toolresults/v1beta3/projects/{projectId}/histories/{historyId}/executions/{executionId}/steps/{stepId}/perfSampleSeries',
    tags: ['projects'],
    description:
      'Creates a PerfSampleSeries. May return any of the following error code(s): - ALREADY_EXISTS - PerfMetricSummary already exists for the given Step - NOT_FOUND - The containing Step does not exist',
    operationId: 'toolresults.projects.histories.executions.steps.perfSampleSeries.create',
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
        projectId: z
          .string()
          .openapi({
            param: {
              description: 'The cloud project',
              in: 'path',
              name: 'projectId',
              required: true,
              schema: { type: 'string' },
            },
          }),
        historyId: z
          .string()
          .openapi({
            param: {
              description: 'A tool results history ID.',
              in: 'path',
              name: 'historyId',
              required: true,
              schema: { type: 'string' },
            },
          }),
        executionId: z
          .string()
          .openapi({
            param: {
              description: 'A tool results execution ID.',
              in: 'path',
              name: 'executionId',
              required: true,
              schema: { type: 'string' },
            },
          }),
        stepId: z
          .string()
          .openapi({
            param: {
              description: 'A tool results step ID.',
              in: 'path',
              name: 'stepId',
              required: true,
              schema: { type: 'string' },
            },
          }),
      }),
      body: { content: { 'application/json': { schema: PerfSampleSeriesSchema } } },
    },
    responses: {
      200: {
        description: 'Successful response',
        content: { 'application/json': { schema: PerfSampleSeriesSchema } },
      },
    },
    security: [
      {
        Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
        Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
      },
    ],
  })

export const getToolresultsV1beta3ProjectsProjectIdHistoriesHistoryIdExecutionsExecutionIdStepsStepIdPerfSampleSeriesSampleSeriesIdRoute =
  createRoute({
    method: 'get',
    path: '/toolresults/v1beta3/projects/{projectId}/histories/{historyId}/executions/{executionId}/steps/{stepId}/perfSampleSeries/{sampleSeriesId}',
    tags: ['projects'],
    description:
      'Gets a PerfSampleSeries. May return any of the following error code(s): - NOT_FOUND - The specified PerfSampleSeries does not exist',
    operationId: 'toolresults.projects.histories.executions.steps.perfSampleSeries.get',
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
        projectId: z
          .string()
          .openapi({
            param: {
              description: 'The cloud project',
              in: 'path',
              name: 'projectId',
              required: true,
              schema: { type: 'string' },
            },
          }),
        historyId: z
          .string()
          .openapi({
            param: {
              description: 'A tool results history ID.',
              in: 'path',
              name: 'historyId',
              required: true,
              schema: { type: 'string' },
            },
          }),
        executionId: z
          .string()
          .openapi({
            param: {
              description: 'A tool results execution ID.',
              in: 'path',
              name: 'executionId',
              required: true,
              schema: { type: 'string' },
            },
          }),
        stepId: z
          .string()
          .openapi({
            param: {
              description: 'A tool results step ID.',
              in: 'path',
              name: 'stepId',
              required: true,
              schema: { type: 'string' },
            },
          }),
        sampleSeriesId: z
          .string()
          .openapi({
            param: {
              description: 'A sample series id',
              in: 'path',
              name: 'sampleSeriesId',
              required: true,
              schema: { type: 'string' },
            },
          }),
      }),
    },
    responses: {
      200: {
        description: 'Successful response',
        content: { 'application/json': { schema: PerfSampleSeriesSchema } },
      },
    },
    security: [
      {
        Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
        Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
      },
    ],
  })

export const getToolresultsV1beta3ProjectsProjectIdHistoriesHistoryIdExecutionsExecutionIdStepsStepIdPerfSampleSeriesSampleSeriesIdSamplesRoute =
  createRoute({
    method: 'get',
    path: '/toolresults/v1beta3/projects/{projectId}/histories/{historyId}/executions/{executionId}/steps/{stepId}/perfSampleSeries/{sampleSeriesId}/samples',
    tags: ['projects'],
    description:
      'Lists the Performance Samples of a given Sample Series - The list results are sorted by timestamps ascending - The default page size is 500 samples; and maximum size allowed 5000 - The response token indicates the last returned PerfSample timestamp - When the results size exceeds the page size, submit a subsequent request including the page token to return the rest of the samples up to the page limit May return any of the following canonical error codes: - OUT_OF_RANGE - The specified request page_token is out of valid range - NOT_FOUND - The containing PerfSampleSeries does not exist',
    operationId: 'toolresults.projects.histories.executions.steps.perfSampleSeries.samples.list',
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
                'The default page size is 500 samples, and the maximum size is 5000. If the page_size is greater than 5000, the effective page size will be 5000',
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
              description: 'Optional, the next_page_token returned in the previous response',
              in: 'query',
              name: 'pageToken',
              schema: { type: 'string' },
              required: false,
            },
          }),
      }),
      params: z.object({
        projectId: z
          .string()
          .openapi({
            param: {
              description: 'The cloud project',
              in: 'path',
              name: 'projectId',
              required: true,
              schema: { type: 'string' },
            },
          }),
        historyId: z
          .string()
          .openapi({
            param: {
              description: 'A tool results history ID.',
              in: 'path',
              name: 'historyId',
              required: true,
              schema: { type: 'string' },
            },
          }),
        executionId: z
          .string()
          .openapi({
            param: {
              description: 'A tool results execution ID.',
              in: 'path',
              name: 'executionId',
              required: true,
              schema: { type: 'string' },
            },
          }),
        stepId: z
          .string()
          .openapi({
            param: {
              description: 'A tool results step ID.',
              in: 'path',
              name: 'stepId',
              required: true,
              schema: { type: 'string' },
            },
          }),
        sampleSeriesId: z
          .string()
          .openapi({
            param: {
              description: 'A sample series id',
              in: 'path',
              name: 'sampleSeriesId',
              required: true,
              schema: { type: 'string' },
            },
          }),
      }),
    },
    responses: {
      200: {
        description: 'Successful response',
        content: { 'application/json': { schema: ListPerfSamplesResponseSchema } },
      },
    },
    security: [
      {
        Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
        Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
      },
    ],
  })

export const postToolresultsV1beta3ProjectsProjectIdHistoriesHistoryIdExecutionsExecutionIdStepsStepIdPerfSampleSeriesSampleSeriesIdSamplesBatchCreateRoute =
  createRoute({
    method: 'post',
    path: '/toolresults/v1beta3/projects/{projectId}/histories/{historyId}/executions/{executionId}/steps/{stepId}/perfSampleSeries/{sampleSeriesId}/samples:batchCreate',
    tags: ['projects'],
    description:
      'Creates a batch of PerfSamples - a client can submit multiple batches of Perf Samples through repeated calls to this method in order to split up a large request payload - duplicates and existing timestamp entries will be ignored. - the batch operation may partially succeed - the set of elements successfully inserted is returned in the response (omits items which already existed in the database). May return any of the following canonical error codes: - NOT_FOUND - The containing PerfSampleSeries does not exist',
    operationId:
      'toolresults.projects.histories.executions.steps.perfSampleSeries.samples.batchCreate',
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
        projectId: z
          .string()
          .openapi({
            param: {
              description: 'The cloud project',
              in: 'path',
              name: 'projectId',
              required: true,
              schema: { type: 'string' },
            },
          }),
        historyId: z
          .string()
          .openapi({
            param: {
              description: 'A tool results history ID.',
              in: 'path',
              name: 'historyId',
              required: true,
              schema: { type: 'string' },
            },
          }),
        executionId: z
          .string()
          .openapi({
            param: {
              description: 'A tool results execution ID.',
              in: 'path',
              name: 'executionId',
              required: true,
              schema: { type: 'string' },
            },
          }),
        stepId: z
          .string()
          .openapi({
            param: {
              description: 'A tool results step ID.',
              in: 'path',
              name: 'stepId',
              required: true,
              schema: { type: 'string' },
            },
          }),
        sampleSeriesId: z
          .string()
          .openapi({
            param: {
              description: 'A sample series id',
              in: 'path',
              name: 'sampleSeriesId',
              required: true,
              schema: { type: 'string' },
            },
          }),
      }),
      body: { content: { 'application/json': { schema: BatchCreatePerfSamplesRequestSchema } } },
    },
    responses: {
      200: {
        description: 'Successful response',
        content: { 'application/json': { schema: BatchCreatePerfSamplesResponseSchema } },
      },
    },
    security: [
      {
        Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
        Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
      },
    ],
  })

export const getToolresultsV1beta3ProjectsProjectIdHistoriesHistoryIdExecutionsExecutionIdStepsStepIdTestCasesRoute =
  createRoute({
    method: 'get',
    path: '/toolresults/v1beta3/projects/{projectId}/histories/{historyId}/executions/{executionId}/steps/{stepId}/testCases',
    tags: ['projects'],
    description:
      'Lists Test Cases attached to a Step. Experimental test cases API. Still in active development. May return any of the following canonical error codes: - PERMISSION_DENIED - if the user is not authorized to write to project - INVALID_ARGUMENT - if the request is malformed - NOT_FOUND - if the containing Step does not exist',
    operationId: 'toolresults.projects.histories.executions.steps.testCases.list',
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
                'The maximum number of TestCases to fetch. Default value: 100. The server will use this default if the field is not set or has a value of 0. Optional.',
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
              description: 'A continuation token to resume the query at the next item. Optional.',
              in: 'query',
              name: 'pageToken',
              schema: { type: 'string' },
              required: false,
            },
          }),
      }),
      params: z.object({
        projectId: z
          .string()
          .openapi({
            param: {
              description: 'A Project id. Required.',
              in: 'path',
              name: 'projectId',
              required: true,
              schema: { type: 'string' },
            },
          }),
        historyId: z
          .string()
          .openapi({
            param: {
              description: 'A History id. Required.',
              in: 'path',
              name: 'historyId',
              required: true,
              schema: { type: 'string' },
            },
          }),
        executionId: z
          .string()
          .openapi({
            param: {
              description: 'A Execution id Required.',
              in: 'path',
              name: 'executionId',
              required: true,
              schema: { type: 'string' },
            },
          }),
        stepId: z
          .string()
          .openapi({
            param: {
              description: 'A Step id. Note: This step must include a TestExecutionStep. Required.',
              in: 'path',
              name: 'stepId',
              required: true,
              schema: { type: 'string' },
            },
          }),
      }),
    },
    responses: {
      200: {
        description: 'Successful response',
        content: { 'application/json': { schema: ListTestCasesResponseSchema } },
      },
    },
    security: [
      {
        Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
        Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
      },
    ],
  })

export const getToolresultsV1beta3ProjectsProjectIdHistoriesHistoryIdExecutionsExecutionIdStepsStepIdTestCasesTestCaseIdRoute =
  createRoute({
    method: 'get',
    path: '/toolresults/v1beta3/projects/{projectId}/histories/{historyId}/executions/{executionId}/steps/{stepId}/testCases/{testCaseId}',
    tags: ['projects'],
    description:
      'Gets details of a Test Case for a Step. Experimental test cases API. Still in active development. May return any of the following canonical error codes: - PERMISSION_DENIED - if the user is not authorized to write to project - INVALID_ARGUMENT - if the request is malformed - NOT_FOUND - if the containing Test Case does not exist',
    operationId: 'toolresults.projects.histories.executions.steps.testCases.get',
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
        projectId: z
          .string()
          .openapi({
            param: {
              description: 'A Project id. Required.',
              in: 'path',
              name: 'projectId',
              required: true,
              schema: { type: 'string' },
            },
          }),
        historyId: z
          .string()
          .openapi({
            param: {
              description: 'A History id. Required.',
              in: 'path',
              name: 'historyId',
              required: true,
              schema: { type: 'string' },
            },
          }),
        executionId: z
          .string()
          .openapi({
            param: {
              description: 'A Execution id Required.',
              in: 'path',
              name: 'executionId',
              required: true,
              schema: { type: 'string' },
            },
          }),
        stepId: z
          .string()
          .openapi({
            param: {
              description: 'A Step id. Note: This step must include a TestExecutionStep. Required.',
              in: 'path',
              name: 'stepId',
              required: true,
              schema: { type: 'string' },
            },
          }),
        testCaseId: z
          .string()
          .openapi({
            param: {
              description: 'A Test Case id. Required.',
              in: 'path',
              name: 'testCaseId',
              required: true,
              schema: { type: 'string' },
            },
          }),
      }),
    },
    responses: {
      200: {
        description: 'Successful response',
        content: { 'application/json': { schema: TestCaseSchema } },
      },
    },
    security: [
      {
        Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
        Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
      },
    ],
  })

export const getToolresultsV1beta3ProjectsProjectIdHistoriesHistoryIdExecutionsExecutionIdStepsStepIdThumbnailsRoute =
  createRoute({
    method: 'get',
    path: '/toolresults/v1beta3/projects/{projectId}/histories/{historyId}/executions/{executionId}/steps/{stepId}/thumbnails',
    tags: ['projects'],
    description:
      'Lists thumbnails of images attached to a step. May return any of the following canonical error codes: - PERMISSION_DENIED - if the user is not authorized to read from the project, or from any of the images - INVALID_ARGUMENT - if the request is malformed - NOT_FOUND - if the step does not exist, or if any of the images do not exist',
    operationId: 'toolresults.projects.histories.executions.steps.thumbnails.list',
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
                'The maximum number of thumbnails to fetch. Default value: 50. The server will use this default if the field is not set or has a value of 0. Optional.',
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
              description: 'A continuation token to resume the query at the next item. Optional.',
              in: 'query',
              name: 'pageToken',
              schema: { type: 'string' },
              required: false,
            },
          }),
      }),
      params: z.object({
        projectId: z
          .string()
          .openapi({
            param: {
              description: 'A Project id. Required.',
              in: 'path',
              name: 'projectId',
              required: true,
              schema: { type: 'string' },
            },
          }),
        historyId: z
          .string()
          .openapi({
            param: {
              description: 'A History id. Required.',
              in: 'path',
              name: 'historyId',
              required: true,
              schema: { type: 'string' },
            },
          }),
        executionId: z
          .string()
          .openapi({
            param: {
              description: 'An Execution id. Required.',
              in: 'path',
              name: 'executionId',
              required: true,
              schema: { type: 'string' },
            },
          }),
        stepId: z
          .string()
          .openapi({
            param: {
              description: 'A Step id. Required.',
              in: 'path',
              name: 'stepId',
              required: true,
              schema: { type: 'string' },
            },
          }),
      }),
    },
    responses: {
      200: {
        description: 'Successful response',
        content: { 'application/json': { schema: ListStepThumbnailsResponseSchema } },
      },
    },
    security: [
      {
        Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
        Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
      },
    ],
  })

export const postToolresultsV1beta3ProjectsProjectIdHistoriesHistoryIdExecutionsExecutionIdStepsStepIdPublishXunitXmlFilesRoute =
  createRoute({
    method: 'post',
    path: '/toolresults/v1beta3/projects/{projectId}/histories/{historyId}/executions/{executionId}/steps/{stepId}:publishXunitXmlFiles',
    tags: ['projects'],
    description:
      'Publish xml files to an existing Step. May return any of the following canonical error codes: - PERMISSION_DENIED - if the user is not authorized to write project - INVALID_ARGUMENT - if the request is malformed - FAILED_PRECONDITION - if the requested state transition is illegal, e.g. try to upload a duplicate xml file or a file too large. - NOT_FOUND - if the containing Execution does not exist',
    operationId: 'toolresults.projects.histories.executions.steps.publishXunitXmlFiles',
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
        projectId: z
          .string()
          .openapi({
            param: {
              description: 'A Project id. Required.',
              in: 'path',
              name: 'projectId',
              required: true,
              schema: { type: 'string' },
            },
          }),
        historyId: z
          .string()
          .openapi({
            param: {
              description: 'A History id. Required.',
              in: 'path',
              name: 'historyId',
              required: true,
              schema: { type: 'string' },
            },
          }),
        executionId: z
          .string()
          .openapi({
            param: {
              description: 'A Execution id. Required.',
              in: 'path',
              name: 'executionId',
              required: true,
              schema: { type: 'string' },
            },
          }),
        stepId: z
          .string()
          .openapi({
            param: {
              description: 'A Step id. Note: This step must include a TestExecutionStep. Required.',
              in: 'path',
              name: 'stepId',
              required: true,
              schema: { type: 'string' },
            },
          }),
      }),
      body: { content: { 'application/json': { schema: PublishXunitXmlFilesRequestSchema } } },
    },
    responses: {
      200: {
        description: 'Successful response',
        content: { 'application/json': { schema: StepSchema } },
      },
    },
    security: [
      {
        Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
        Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
      },
    ],
  })

export const getToolresultsV1beta3ProjectsProjectIdSettingsRoute = createRoute({
  method: 'get',
  path: '/toolresults/v1beta3/projects/{projectId}/settings',
  tags: ['projects'],
  description:
    'Gets the Tool Results settings for a project. May return any of the following canonical error codes: - PERMISSION_DENIED - if the user is not authorized to read from project',
  operationId: 'toolresults.projects.getSettings',
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
      projectId: z
        .string()
        .openapi({
          param: {
            description: 'A Project id. Required.',
            in: 'path',
            name: 'projectId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: ProjectSettingsSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
  ],
})

export const postToolresultsV1beta3ProjectsProjectIdInitializeSettingsRoute = createRoute({
  method: 'post',
  path: '/toolresults/v1beta3/projects/{projectId}:initializeSettings',
  tags: ['projects'],
  description:
    "Creates resources for settings which have not yet been set. Currently, this creates a single resource: a Google Cloud Storage bucket, to be used as the default bucket for this project. The bucket is created in an FTL-own storage project. Except for in rare cases, calling this method in parallel from multiple clients will only create a single bucket. In order to avoid unnecessary storage charges, the bucket is configured to automatically delete objects older than 90 days. The bucket is created with the following permissions: - Owner access for owners of central storage project (FTL-owned) - Writer access for owners/editors of customer project - Reader access for viewers of customer project The default ACL on objects created in the bucket is: - Owner access for owners of central storage project - Reader access for owners/editors/viewers of customer project See Google Cloud Storage documentation for more details. If there is already a default bucket set and the project can access the bucket, this call does nothing. However, if the project doesn't have the permission to access the bucket or the bucket is deleted, a new bucket will be created. May return any canonical error codes, including the following: - PERMISSION_DENIED - if the user is not authorized to write to project - Any error code raised by Google Cloud Storage",
  operationId: 'toolresults.projects.initializeSettings',
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
      projectId: z
        .string()
        .openapi({
          param: {
            description: 'A Project id. Required.',
            in: 'path',
            name: 'projectId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: ProjectSettingsSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
  ],
})

export const getToolresultsV1beta3NameAccessibilityClustersRoute = createRoute({
  method: 'get',
  path: '/toolresults/v1beta3/{name}:accessibilityClusters',
  tags: ['projects'],
  description:
    'Lists accessibility clusters for a given Step May return any of the following canonical error codes: - PERMISSION_DENIED - if the user is not authorized to read project - INVALID_ARGUMENT - if the request is malformed - FAILED_PRECONDITION - if an argument in the request happens to be invalid; e.g. if the locale format is incorrect - NOT_FOUND - if the containing Step does not exist',
  operationId: 'toolresults.projects.histories.executions.steps.accessibilityClusters',
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
      locale: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'The accepted format is the canonical Unicode format with hyphen as a delimiter. Language must be lowercase, Language Script - Capitalized, Region - UPPERCASE. See http://www.unicode.org/reports/tr35/#Unicode_locale_identifier for details. Required.',
            in: 'query',
            name: 'locale',
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
            description:
              'A full resource name of the step. For example, projects/my-project/histories/bh.1234567890abcdef/executions/ 1234567890123456789/steps/bs.1234567890abcdef Required.',
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
      content: { 'application/json': { schema: ListStepAccessibilityClustersResponseSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
  ],
})
