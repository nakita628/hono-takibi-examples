type History = {
  displayName?: string | undefined
  historyId?: string | undefined
  name?: string | undefined
  testPlatform?: 'unknownPlatform' | 'android' | 'ios' | undefined
}
type ListHistoriesResponse = {
  histories?: History[] | undefined
  nextPageToken?: string | undefined
}
type Timestamp = { nanos?: number | undefined; seconds?: string | undefined }
type MatrixDimensionDefinition = { [x: string]: unknown }
type FailureDetail = {
  crashed?: boolean | undefined
  deviceOutOfMemory?: boolean | undefined
  failedRoboscript?: boolean | undefined
  notInstalled?: boolean | undefined
  otherNativeCrash?: boolean | undefined
  timedOut?: boolean | undefined
  unableToCrawl?: boolean | undefined
}
type InconclusiveDetail = {
  abortedByUser?: boolean | undefined
  hasErrorLogs?: boolean | undefined
  infrastructureFailure?: boolean | undefined
}
type SkippedDetail = {
  incompatibleAppVersion?: boolean | undefined
  incompatibleArchitecture?: boolean | undefined
  incompatibleDevice?: boolean | undefined
}
type SuccessDetail = { otherNativeCrash?: boolean | undefined }
type Outcome = {
  failureDetail?: FailureDetail | undefined
  inconclusiveDetail?: InconclusiveDetail | undefined
  skippedDetail?: SkippedDetail | undefined
  successDetail?: SuccessDetail | undefined
  summary?: 'unset' | 'success' | 'failure' | 'inconclusive' | 'skipped' | 'flaky' | undefined
}
type AndroidAppInfo = {
  name?: string | undefined
  packageName?: string | undefined
  versionCode?: string | undefined
  versionName?: string | undefined
}
type AndroidInstrumentationTest = {
  testPackageId?: string | undefined
  testRunnerClass?: string | undefined
  testTargets?: string[] | undefined
  useOrchestrator?: boolean | undefined
}
type AndroidRoboTest = {
  appInitialActivity?: string | undefined
  bootstrapPackageId?: string | undefined
  bootstrapRunnerClass?: string | undefined
  maxDepth?: number | undefined
  maxSteps?: number | undefined
}
type AndroidTestLoop = { [x: string]: unknown }
type Duration = { nanos?: number | undefined; seconds?: string | undefined }
type AndroidTest = {
  androidAppInfo?: AndroidAppInfo | undefined
  androidInstrumentationTest?: AndroidInstrumentationTest | undefined
  androidRoboTest?: AndroidRoboTest | undefined
  androidTestLoop?: AndroidTestLoop | undefined
  testTimeout?: Duration | undefined
}
type IosAppInfo = { name?: string | undefined }
type IosRoboTest = { [x: string]: unknown }
type IosTestLoop = { bundleId?: string | undefined }
type IosXcTest = { bundleId?: string | undefined; xcodeVersion?: string | undefined }
type IosTest = {
  iosAppInfo?: IosAppInfo | undefined
  iosRoboTest?: IosRoboTest | undefined
  iosTestLoop?: IosTestLoop | undefined
  iosXcTest?: IosXcTest | undefined
  testTimeout?: Duration | undefined
}
type Specification = { androidTest?: AndroidTest | undefined; iosTest?: IosTest | undefined }
type Execution = {
  completionTime?: Timestamp | undefined
  creationTime?: Timestamp | undefined
  dimensionDefinitions?: MatrixDimensionDefinition[] | undefined
  executionId?: string | undefined
  outcome?: Outcome | undefined
  specification?: Specification | undefined
  state?: 'unknownState' | 'pending' | 'inProgress' | 'complete' | undefined
  testExecutionMatrixId?: string | undefined
}
type ListExecutionsResponse = {
  executions?: Execution[] | undefined
  nextPageToken?: string | undefined
}
type Screen = {
  fileReference?: string | undefined
  locale?: string | undefined
  model?: string | undefined
  version?: string | undefined
}
type ScreenshotCluster = {
  activity?: string | undefined
  clusterId?: string | undefined
  keyScreen?: Screen | undefined
  screens?: Screen[] | undefined
}
type ListScreenshotClustersResponse = { clusters?: ScreenshotCluster[] | undefined }
type EnvironmentDimensionValueEntry = { key?: string | undefined; value?: string | undefined }
type FileReference = { fileUri?: string | undefined }
type TestSuiteOverview = {
  elapsedTime?: Duration | undefined
  errorCount?: number | undefined
  failureCount?: number | undefined
  flakyCount?: number | undefined
  name?: string | undefined
  skippedCount?: number | undefined
  totalCount?: number | undefined
  xmlSource?: FileReference | undefined
}
type MergedResult = {
  outcome?: Outcome | undefined
  state?: 'unknownState' | 'pending' | 'inProgress' | 'complete' | undefined
  testSuiteOverviews?: TestSuiteOverview[] | undefined
}
type ResultsStorage = {
  resultsStoragePath?: FileReference | undefined
  xunitXmlFile?: FileReference | undefined
}
type StepSummary = { [x: string]: unknown }
type ShardSummary = { runs?: StepSummary[] | undefined; shardResult?: MergedResult | undefined }
type Environment = {
  completionTime?: Timestamp | undefined
  creationTime?: Timestamp | undefined
  dimensionValue?: EnvironmentDimensionValueEntry[] | undefined
  displayName?: string | undefined
  environmentId?: string | undefined
  environmentResult?: MergedResult | undefined
  executionId?: string | undefined
  historyId?: string | undefined
  projectId?: string | undefined
  resultsStorage?: ResultsStorage | undefined
  shardSummaries?: ShardSummary[] | undefined
}
type ListEnvironmentsResponse = {
  environments?: Environment[] | undefined
  executionId?: string | undefined
  historyId?: string | undefined
  nextPageToken?: string | undefined
  projectId?: string | undefined
}
type StepDimensionValueEntry = { key?: string | undefined; value?: string | undefined }
type StepLabelsEntry = { key?: string | undefined; value?: string | undefined }
type IndividualOutcome = {
  multistepNumber?: number | undefined
  outcomeSummary?:
    | 'unset'
    | 'success'
    | 'failure'
    | 'inconclusive'
    | 'skipped'
    | 'flaky'
    | undefined
  runDuration?: Duration | undefined
  stepId?: string | undefined
}
type PrimaryStep = {
  individualOutcome?: IndividualOutcome[] | undefined
  rollUp?: 'unset' | 'success' | 'failure' | 'inconclusive' | 'skipped' | 'flaky' | undefined
}
type MultiStep = {
  multistepNumber?: number | undefined
  primaryStep?: PrimaryStep | undefined
  primaryStepId?: string | undefined
}
type StackTrace = { exception?: string | undefined }
type Any = { typeUrl?: string | undefined; value?: string | undefined }
type TestIssue = {
  category?: 'unspecifiedCategory' | 'common' | 'robo' | undefined
  errorMessage?: string | undefined
  severity?: 'unspecifiedSeverity' | 'info' | 'suggestion' | 'warning' | 'severe' | undefined
  stackTrace?: StackTrace | undefined
  type?:
    | 'unspecifiedType'
    | 'fatalException'
    | 'nativeCrash'
    | 'anr'
    | 'unusedRoboDirective'
    | 'compatibleWithOrchestrator'
    | 'launcherActivityNotFound'
    | 'startActivityNotFound'
    | 'incompleteRoboScriptExecution'
    | 'completeRoboScriptExecution'
    | 'failedToInstall'
    | 'availableDeepLinks'
    | 'nonSdkApiUsageViolation'
    | 'nonSdkApiUsageReport'
    | 'encounteredNonAndroidUiWidgetScreen'
    | 'encounteredLoginScreen'
    | 'performedGoogleLogin'
    | 'iosException'
    | 'iosCrash'
    | 'performedMonkeyActions'
    | 'usedRoboDirective'
    | 'usedRoboIgnoreDirective'
    | 'insufficientCoverage'
    | 'inAppPurchases'
    | 'crashDialogError'
    | 'uiElementsTooDeep'
    | 'blankScreen'
    | 'overlappingUiElements'
    | 'unityException'
    | 'deviceOutOfMemory'
    | 'logcatCollectionError'
    | 'detectedAppSplashScreen'
    | undefined
  warning?: Any | undefined
}
type TestTiming = { testProcessDuration?: Duration | undefined }
type ToolExitCode = { number?: number | undefined }
type TestCaseReference = {
  className?: string | undefined
  name?: string | undefined
  testSuiteName?: string | undefined
}
type ToolOutputReference = {
  creationTime?: Timestamp | undefined
  output?: FileReference | undefined
  testCase?: TestCaseReference | undefined
}
type ToolExecution = {
  commandLineArguments?: string[] | undefined
  exitCode?: ToolExitCode | undefined
  toolLogs?: FileReference[] | undefined
  toolOutputs?: ToolOutputReference[] | undefined
}
type TestExecutionStep = {
  testIssues?: TestIssue[] | undefined
  testSuiteOverviews?: TestSuiteOverview[] | undefined
  testTiming?: TestTiming | undefined
  toolExecution?: ToolExecution | undefined
}
type ToolExecutionStep = { toolExecution?: ToolExecution | undefined }
type Step = {
  completionTime?: Timestamp | undefined
  creationTime?: Timestamp | undefined
  description?: string | undefined
  deviceUsageDuration?: Duration | undefined
  dimensionValue?: StepDimensionValueEntry[] | undefined
  hasImages?: boolean | undefined
  labels?: StepLabelsEntry[] | undefined
  multiStep?: MultiStep | undefined
  name?: string | undefined
  outcome?: Outcome | undefined
  runDuration?: Duration | undefined
  state?: 'unknownState' | 'pending' | 'inProgress' | 'complete' | undefined
  stepId?: string | undefined
  testExecutionStep?: TestExecutionStep | undefined
  toolExecutionStep?: ToolExecutionStep | undefined
}
type ListStepsResponse = { nextPageToken?: string | undefined; steps?: Step[] | undefined }
type AppStartTime = {
  fullyDrawnTime?: Duration | undefined
  initialDisplayTime?: Duration | undefined
}
type GraphicsStatsBucket = { frameCount?: string | undefined; renderMillis?: string | undefined }
type GraphicsStats = {
  buckets?: GraphicsStatsBucket[] | undefined
  highInputLatencyCount?: string | undefined
  jankyFrames?: string | undefined
  missedVsyncCount?: string | undefined
  p50Millis?: string | undefined
  p90Millis?: string | undefined
  p95Millis?: string | undefined
  p99Millis?: string | undefined
  slowBitmapUploadCount?: string | undefined
  slowDrawCount?: string | undefined
  slowUiThreadCount?: string | undefined
  totalFrames?: string | undefined
}
type CPUInfo = {
  cpuProcessor?: string | undefined
  cpuSpeedInGhz?: number | undefined
  numberOfCores?: number | undefined
}
type MemoryInfo = {
  memoryCapInKibibyte?: string | undefined
  memoryTotalInKibibyte?: string | undefined
}
type PerfEnvironment = { cpuInfo?: CPUInfo | undefined; memoryInfo?: MemoryInfo | undefined }
type PerfMetricsSummary = {
  appStartTime?: AppStartTime | undefined
  executionId?: string | undefined
  graphicsStats?: GraphicsStats | undefined
  historyId?: string | undefined
  perfEnvironment?: PerfEnvironment | undefined
  perfMetrics?:
    | ('perfMetricTypeUnspecified' | 'memory' | 'cpu' | 'network' | 'graphics')[]
    | undefined
  projectId?: string | undefined
  stepId?: string | undefined
}
type BasicPerfSampleSeries = {
  perfMetricType?:
    | 'perfMetricTypeUnspecified'
    | 'memory'
    | 'cpu'
    | 'network'
    | 'graphics'
    | undefined
  perfUnit?:
    | 'perfUnitUnspecified'
    | 'kibibyte'
    | 'percent'
    | 'bytesPerSecond'
    | 'framesPerSecond'
    | 'byte'
    | undefined
  sampleSeriesLabel?:
    | 'sampleSeriesTypeUnspecified'
    | 'memoryRssPrivate'
    | 'memoryRssShared'
    | 'memoryRssTotal'
    | 'memoryTotal'
    | 'cpuUser'
    | 'cpuKernel'
    | 'cpuTotal'
    | 'ntBytesTransferred'
    | 'ntBytesReceived'
    | 'networkSent'
    | 'networkReceived'
    | 'graphicsFrameRate'
    | undefined
}
type PerfSampleSeries = {
  basicPerfSampleSeries?: BasicPerfSampleSeries | undefined
  executionId?: string | undefined
  historyId?: string | undefined
  projectId?: string | undefined
  sampleSeriesId?: string | undefined
  stepId?: string | undefined
}
type ListPerfSampleSeriesResponse = { perfSampleSeries?: PerfSampleSeries[] | undefined }
type PerfSample = { sampleTime?: Timestamp | undefined; value?: number | undefined }
type ListPerfSamplesResponse = {
  nextPageToken?: string | undefined
  perfSamples?: PerfSample[] | undefined
}
type BatchCreatePerfSamplesRequest = { perfSamples?: PerfSample[] | undefined }
type BatchCreatePerfSamplesResponse = { perfSamples?: PerfSample[] | undefined }
type TestCase = {
  elapsedTime?: Duration | undefined
  endTime?: Timestamp | undefined
  skippedMessage?: string | undefined
  stackTraces?: StackTrace[] | undefined
  startTime?: Timestamp | undefined
  status?: 'passed' | 'failed' | 'error' | 'skipped' | 'flaky' | undefined
  testCaseId?: string | undefined
  testCaseReference?: TestCaseReference | undefined
  toolOutputs?: ToolOutputReference[] | undefined
}
type ListTestCasesResponse = {
  nextPageToken?: string | undefined
  testCases?: TestCase[] | undefined
}
type Status = {
  code?: number | undefined
  details?: { [x: string]: { [x: string]: unknown } }[] | undefined
  message?: string | undefined
}
type Thumbnail = {
  contentType?: string | undefined
  data?: string | undefined
  heightPx?: number | undefined
  widthPx?: number | undefined
}
type Image = {
  error?: Status | undefined
  sourceImage?: ToolOutputReference | undefined
  stepId?: string | undefined
  thumbnail?: Thumbnail | undefined
}
type ListStepThumbnailsResponse = {
  nextPageToken?: string | undefined
  thumbnails?: Image[] | undefined
}
type PublishXunitXmlFilesRequest = { xunitXmlFiles?: FileReference[] | undefined }
type ProjectSettings = { defaultBucket?: string | undefined; name?: string | undefined }
type SafeHtmlProto = { privateDoNotAccessOrElseSafeHtmlWrappedValue?: string | undefined }
type RegionProto = {
  heightPx?: number | undefined
  leftPx?: number | undefined
  topPx?: number | undefined
  widthPx?: number | undefined
}
type SuggestionProto = {
  helpUrl?: string | undefined
  longMessage?: SafeHtmlProto | undefined
  priority?: 'unknownPriority' | 'error' | 'warning' | 'info' | undefined
  pseudoResourceId?: string | undefined
  region?: RegionProto | undefined
  resourceName?: string | undefined
  screenId?: string | undefined
  secondaryPriority?: number | undefined
  shortMessage?: SafeHtmlProto | undefined
  title?: string | undefined
}
type SuggestionClusterProto = {
  category?:
    | 'unknownCategory'
    | 'contentLabeling'
    | 'touchTargetSize'
    | 'lowContrast'
    | 'implementation'
    | undefined
  suggestions?: SuggestionProto[] | undefined
}
type ListStepAccessibilityClustersResponse = {
  clusters?: SuggestionClusterProto[] | undefined
  name?: string | undefined
}
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/toolresults/v1beta3/projects/:projectId/histories': {
      $get: {
        input: { param: { projectId: string } } & {
          query: {
            filterByName?: string | undefined
            pageSize?: number | undefined
            pageToken?: string | undefined
            '$.xgafv'?: '1' | '2' | undefined
            access_token?: string | undefined
            alt?: 'json' | 'media' | 'proto' | undefined
            callback?: string | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            upload_protocol?: string | undefined
            uploadType?: string | undefined
          }
        }
        output: ListHistoriesResponse
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: { param: { projectId: string } } & {
          query: {
            requestId?: string | undefined
            '$.xgafv'?: '1' | '2' | undefined
            access_token?: string | undefined
            alt?: 'json' | 'media' | 'proto' | undefined
            callback?: string | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            upload_protocol?: string | undefined
            uploadType?: string | undefined
          }
        } & { json: History }
        output: History
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/toolresults/v1beta3/projects/:projectId/histories/:historyId': {
      $get: {
        input: { param: { projectId: string; historyId: string } } & {
          query: {
            '$.xgafv'?: '1' | '2' | undefined
            access_token?: string | undefined
            alt?: 'json' | 'media' | 'proto' | undefined
            callback?: string | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            upload_protocol?: string | undefined
            uploadType?: string | undefined
          }
        }
        output: History
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/toolresults/v1beta3/projects/:projectId/histories/:historyId/executions': {
      $get: {
        input: { param: { projectId: string; historyId: string } } & {
          query: {
            pageSize?: number | undefined
            pageToken?: string | undefined
            '$.xgafv'?: '1' | '2' | undefined
            access_token?: string | undefined
            alt?: 'json' | 'media' | 'proto' | undefined
            callback?: string | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            upload_protocol?: string | undefined
            uploadType?: string | undefined
          }
        }
        output: ListExecutionsResponse
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: { param: { projectId: string; historyId: string } } & {
          query: {
            requestId?: string | undefined
            '$.xgafv'?: '1' | '2' | undefined
            access_token?: string | undefined
            alt?: 'json' | 'media' | 'proto' | undefined
            callback?: string | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            upload_protocol?: string | undefined
            uploadType?: string | undefined
          }
        } & { json: Execution }
        output: Execution
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/toolresults/v1beta3/projects/:projectId/histories/:historyId/executions/:executionId': {
      $get: {
        input: { param: { projectId: string; historyId: string; executionId: string } } & {
          query: {
            '$.xgafv'?: '1' | '2' | undefined
            access_token?: string | undefined
            alt?: 'json' | 'media' | 'proto' | undefined
            callback?: string | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            upload_protocol?: string | undefined
            uploadType?: string | undefined
          }
        }
        output: Execution
        outputFormat: 'json'
        status: 200
      }
      $patch: {
        input: { param: { projectId: string; historyId: string; executionId: string } } & {
          query: {
            requestId?: string | undefined
            '$.xgafv'?: '1' | '2' | undefined
            access_token?: string | undefined
            alt?: 'json' | 'media' | 'proto' | undefined
            callback?: string | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            upload_protocol?: string | undefined
            uploadType?: string | undefined
          }
        } & { json: Execution }
        output: Execution
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/toolresults/v1beta3/projects/:projectId/histories/:historyId/executions/:executionId/clusters': {
      $get: {
        input: { param: { projectId: string; historyId: string; executionId: string } } & {
          query: {
            '$.xgafv'?: '1' | '2' | undefined
            access_token?: string | undefined
            alt?: 'json' | 'media' | 'proto' | undefined
            callback?: string | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            upload_protocol?: string | undefined
            uploadType?: string | undefined
          }
        }
        output: ListScreenshotClustersResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/toolresults/v1beta3/projects/:projectId/histories/:historyId/executions/:executionId/clusters/:clusterId': {
      $get: {
        input: {
          param: { projectId: string; historyId: string; executionId: string; clusterId: string }
        } & {
          query: {
            '$.xgafv'?: '1' | '2' | undefined
            access_token?: string | undefined
            alt?: 'json' | 'media' | 'proto' | undefined
            callback?: string | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            upload_protocol?: string | undefined
            uploadType?: string | undefined
          }
        }
        output: ScreenshotCluster
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/toolresults/v1beta3/projects/:projectId/histories/:historyId/executions/:executionId/environments': {
      $get: {
        input: { param: { projectId: string; historyId: string; executionId: string } } & {
          query: {
            pageSize?: number | undefined
            pageToken?: string | undefined
            '$.xgafv'?: '1' | '2' | undefined
            access_token?: string | undefined
            alt?: 'json' | 'media' | 'proto' | undefined
            callback?: string | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            upload_protocol?: string | undefined
            uploadType?: string | undefined
          }
        }
        output: ListEnvironmentsResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/toolresults/v1beta3/projects/:projectId/histories/:historyId/executions/:executionId/environments/:environmentId': {
      $get: {
        input: {
          param: {
            projectId: string
            historyId: string
            executionId: string
            environmentId: string
          }
        } & {
          query: {
            '$.xgafv'?: '1' | '2' | undefined
            access_token?: string | undefined
            alt?: 'json' | 'media' | 'proto' | undefined
            callback?: string | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            upload_protocol?: string | undefined
            uploadType?: string | undefined
          }
        }
        output: Environment
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/toolresults/v1beta3/projects/:projectId/histories/:historyId/executions/:executionId/steps': {
      $get: {
        input: { param: { projectId: string; historyId: string; executionId: string } } & {
          query: {
            pageSize?: number | undefined
            pageToken?: string | undefined
            '$.xgafv'?: '1' | '2' | undefined
            access_token?: string | undefined
            alt?: 'json' | 'media' | 'proto' | undefined
            callback?: string | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            upload_protocol?: string | undefined
            uploadType?: string | undefined
          }
        }
        output: ListStepsResponse
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: { param: { projectId: string; historyId: string; executionId: string } } & {
          query: {
            requestId?: string | undefined
            '$.xgafv'?: '1' | '2' | undefined
            access_token?: string | undefined
            alt?: 'json' | 'media' | 'proto' | undefined
            callback?: string | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            upload_protocol?: string | undefined
            uploadType?: string | undefined
          }
        } & { json: Step }
        output: Step
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/toolresults/v1beta3/projects/:projectId/histories/:historyId/executions/:executionId/steps/:stepId': {
      $get: {
        input: {
          param: { projectId: string; historyId: string; executionId: string; stepId: string }
        } & {
          query: {
            '$.xgafv'?: '1' | '2' | undefined
            access_token?: string | undefined
            alt?: 'json' | 'media' | 'proto' | undefined
            callback?: string | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            upload_protocol?: string | undefined
            uploadType?: string | undefined
          }
        }
        output: Step
        outputFormat: 'json'
        status: 200
      }
      $patch: {
        input: {
          param: { projectId: string; historyId: string; executionId: string; stepId: string }
        } & {
          query: {
            requestId?: string | undefined
            '$.xgafv'?: '1' | '2' | undefined
            access_token?: string | undefined
            alt?: 'json' | 'media' | 'proto' | undefined
            callback?: string | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            upload_protocol?: string | undefined
            uploadType?: string | undefined
          }
        } & { json: Step }
        output: Step
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/toolresults/v1beta3/projects/:projectId/histories/:historyId/executions/:executionId/steps/:stepId/perfMetricsSummary': {
      $get: {
        input: {
          param: { projectId: string; historyId: string; executionId: string; stepId: string }
        } & {
          query: {
            '$.xgafv'?: '1' | '2' | undefined
            access_token?: string | undefined
            alt?: 'json' | 'media' | 'proto' | undefined
            callback?: string | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            upload_protocol?: string | undefined
            uploadType?: string | undefined
          }
        }
        output: PerfMetricsSummary
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: {
          param: { projectId: string; historyId: string; executionId: string; stepId: string }
        } & {
          query: {
            '$.xgafv'?: '1' | '2' | undefined
            access_token?: string | undefined
            alt?: 'json' | 'media' | 'proto' | undefined
            callback?: string | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            upload_protocol?: string | undefined
            uploadType?: string | undefined
          }
        } & { json: PerfMetricsSummary }
        output: PerfMetricsSummary
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/toolresults/v1beta3/projects/:projectId/histories/:historyId/executions/:executionId/steps/:stepId/perfSampleSeries': {
      $get: {
        input: {
          param: { projectId: string; historyId: string; executionId: string; stepId: string }
        } & {
          query: {
            filter?:
              | ('perfMetricTypeUnspecified' | 'memory' | 'cpu' | 'network' | 'graphics')[]
              | undefined
            '$.xgafv'?: '1' | '2' | undefined
            access_token?: string | undefined
            alt?: 'json' | 'media' | 'proto' | undefined
            callback?: string | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            upload_protocol?: string | undefined
            uploadType?: string | undefined
          }
        }
        output: ListPerfSampleSeriesResponse
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: {
          param: { projectId: string; historyId: string; executionId: string; stepId: string }
        } & {
          query: {
            '$.xgafv'?: '1' | '2' | undefined
            access_token?: string | undefined
            alt?: 'json' | 'media' | 'proto' | undefined
            callback?: string | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            upload_protocol?: string | undefined
            uploadType?: string | undefined
          }
        } & { json: PerfSampleSeries }
        output: PerfSampleSeries
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/toolresults/v1beta3/projects/:projectId/histories/:historyId/executions/:executionId/steps/:stepId/perfSampleSeries/:sampleSeriesId': {
      $get: {
        input: {
          param: {
            projectId: string
            historyId: string
            executionId: string
            stepId: string
            sampleSeriesId: string
          }
        } & {
          query: {
            '$.xgafv'?: '1' | '2' | undefined
            access_token?: string | undefined
            alt?: 'json' | 'media' | 'proto' | undefined
            callback?: string | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            upload_protocol?: string | undefined
            uploadType?: string | undefined
          }
        }
        output: PerfSampleSeries
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/toolresults/v1beta3/projects/:projectId/histories/:historyId/executions/:executionId/steps/:stepId/perfSampleSeries/:sampleSeriesId/samples': {
      $get: {
        input: {
          param: {
            projectId: string
            historyId: string
            executionId: string
            stepId: string
            sampleSeriesId: string
          }
        } & {
          query: {
            pageSize?: number | undefined
            pageToken?: string | undefined
            '$.xgafv'?: '1' | '2' | undefined
            access_token?: string | undefined
            alt?: 'json' | 'media' | 'proto' | undefined
            callback?: string | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            upload_protocol?: string | undefined
            uploadType?: string | undefined
          }
        }
        output: ListPerfSamplesResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/toolresults/v1beta3/projects/:projectId/histories/:historyId/executions/:executionId/steps/:stepId/perfSampleSeries/:sampleSeriesId/samples:batchCreate': {
      $post: {
        input: {
          param: {
            projectId: string
            historyId: string
            executionId: string
            stepId: string
            sampleSeriesId: string
          }
        } & {
          query: {
            '$.xgafv'?: '1' | '2' | undefined
            access_token?: string | undefined
            alt?: 'json' | 'media' | 'proto' | undefined
            callback?: string | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            upload_protocol?: string | undefined
            uploadType?: string | undefined
          }
        } & { json: BatchCreatePerfSamplesRequest }
        output: BatchCreatePerfSamplesResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/toolresults/v1beta3/projects/:projectId/histories/:historyId/executions/:executionId/steps/:stepId/testCases': {
      $get: {
        input: {
          param: { projectId: string; historyId: string; executionId: string; stepId: string }
        } & {
          query: {
            pageSize?: number | undefined
            pageToken?: string | undefined
            '$.xgafv'?: '1' | '2' | undefined
            access_token?: string | undefined
            alt?: 'json' | 'media' | 'proto' | undefined
            callback?: string | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            upload_protocol?: string | undefined
            uploadType?: string | undefined
          }
        }
        output: ListTestCasesResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/toolresults/v1beta3/projects/:projectId/histories/:historyId/executions/:executionId/steps/:stepId/testCases/:testCaseId': {
      $get: {
        input: {
          param: {
            projectId: string
            historyId: string
            executionId: string
            stepId: string
            testCaseId: string
          }
        } & {
          query: {
            '$.xgafv'?: '1' | '2' | undefined
            access_token?: string | undefined
            alt?: 'json' | 'media' | 'proto' | undefined
            callback?: string | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            upload_protocol?: string | undefined
            uploadType?: string | undefined
          }
        }
        output: TestCase
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/toolresults/v1beta3/projects/:projectId/histories/:historyId/executions/:executionId/steps/:stepId/thumbnails': {
      $get: {
        input: {
          param: { projectId: string; historyId: string; executionId: string; stepId: string }
        } & {
          query: {
            pageSize?: number | undefined
            pageToken?: string | undefined
            '$.xgafv'?: '1' | '2' | undefined
            access_token?: string | undefined
            alt?: 'json' | 'media' | 'proto' | undefined
            callback?: string | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            upload_protocol?: string | undefined
            uploadType?: string | undefined
          }
        }
        output: ListStepThumbnailsResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/toolresults/v1beta3/projects/:projectId/histories/:historyId/executions/:executionId/steps/:stepId:publishXunitXmlFiles': {
      $post: {
        input: {
          param: { projectId: string; historyId: string; executionId: string; stepId: string }
        } & {
          query: {
            '$.xgafv'?: '1' | '2' | undefined
            access_token?: string | undefined
            alt?: 'json' | 'media' | 'proto' | undefined
            callback?: string | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            upload_protocol?: string | undefined
            uploadType?: string | undefined
          }
        } & { json: PublishXunitXmlFilesRequest }
        output: Step
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/toolresults/v1beta3/projects/:projectId/settings': {
      $get: {
        input: { param: { projectId: string } } & {
          query: {
            '$.xgafv'?: '1' | '2' | undefined
            access_token?: string | undefined
            alt?: 'json' | 'media' | 'proto' | undefined
            callback?: string | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            upload_protocol?: string | undefined
            uploadType?: string | undefined
          }
        }
        output: ProjectSettings
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/toolresults/v1beta3/projects/:projectId:initializeSettings': {
      $post: {
        input: { param: { projectId: string } } & {
          query: {
            '$.xgafv'?: '1' | '2' | undefined
            access_token?: string | undefined
            alt?: 'json' | 'media' | 'proto' | undefined
            callback?: string | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            upload_protocol?: string | undefined
            uploadType?: string | undefined
          }
        }
        output: ProjectSettings
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/toolresults/v1beta3/:name:accessibilityClusters': {
      $get: {
        input: { param: { name: string } } & {
          query: {
            locale?: string | undefined
            '$.xgafv'?: '1' | '2' | undefined
            access_token?: string | undefined
            alt?: 'json' | 'media' | 'proto' | undefined
            callback?: string | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            upload_protocol?: string | undefined
            uploadType?: string | undefined
          }
        }
        output: ListStepAccessibilityClustersResponse
        outputFormat: 'json'
        status: 200
      }
    }
  },
  '/'
>
export default routes
