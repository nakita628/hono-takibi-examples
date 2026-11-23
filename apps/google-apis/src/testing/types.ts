type FileReference = { gcsPath?: string | undefined }
type IntentFilter = {
  actionNames?: string[] | undefined
  categoryNames?: string[] | undefined
  mimeType?: string | undefined
}
type Metadata = { name?: string | undefined; value?: string | undefined }
type UsesFeature = { isRequired?: boolean | undefined; name?: string | undefined }
type ApkManifest = {
  applicationLabel?: string | undefined
  intentFilters?: IntentFilter[] | undefined
  maxSdkVersion?: number | undefined
  metadata?: Metadata[] | undefined
  minSdkVersion?: number | undefined
  packageName?: string | undefined
  targetSdkVersion?: number | undefined
  usesFeature?: UsesFeature[] | undefined
  usesPermission?: string[] | undefined
  versionCode?: string | undefined
  versionName?: string | undefined
}
type ApkDetail = { apkManifest?: ApkManifest | undefined }
type GetApkDetailsResponse = { apkDetail?: ApkDetail | undefined }
type ClientInfoDetail = { key?: string | undefined; value?: string | undefined }
type ClientInfo = { clientInfoDetails?: ClientInfoDetail[] | undefined; name?: string | undefined }
type AndroidDevice = {
  androidModelId?: string | undefined
  androidVersionId?: string | undefined
  locale?: string | undefined
  orientation?: string | undefined
}
type AndroidDeviceList = { androidDevices?: AndroidDevice[] | undefined }
type AndroidMatrix = {
  androidModelIds?: string[] | undefined
  androidVersionIds?: string[] | undefined
  locales?: string[] | undefined
  orientations?: string[] | undefined
}
type IosDevice = {
  iosModelId?: string | undefined
  iosVersionId?: string | undefined
  locale?: string | undefined
  orientation?: string | undefined
}
type IosDeviceList = { iosDevices?: IosDevice[] | undefined }
type EnvironmentMatrix = {
  androidDeviceList?: AndroidDeviceList | undefined
  androidMatrix?: AndroidMatrix | undefined
  iosDeviceList?: IosDeviceList | undefined
}
type GoogleCloudStorage = { gcsPath?: string | undefined }
type ToolResultsExecution = {
  executionId?: string | undefined
  historyId?: string | undefined
  projectId?: string | undefined
}
type ToolResultsHistory = { historyId?: string | undefined; projectId?: string | undefined }
type ResultStorage = {
  googleCloudStorage?: GoogleCloudStorage | undefined
  resultsUrl?: string | undefined
  toolResultsExecution?: ToolResultsExecution | undefined
  toolResultsHistory?: ToolResultsHistory | undefined
}
type Environment = { androidDevice?: AndroidDevice | undefined; iosDevice?: IosDevice | undefined }
type TestTargetsForShard = { testTargets?: string[] | undefined }
type Shard = {
  numShards?: number | undefined
  shardIndex?: number | undefined
  testTargetsForShard?: TestTargetsForShard | undefined
}
type TestDetails = { errorMessage?: string | undefined; progressMessages?: string[] | undefined }
type AppBundle = { bundleLocation?: FileReference | undefined }
type ManualSharding = { testTargetsForShard?: TestTargetsForShard[] | undefined }
type UniformSharding = { numShards?: number | undefined }
type ShardingOption = {
  manualSharding?: ManualSharding | undefined
  uniformSharding?: UniformSharding | undefined
}
type AndroidInstrumentationTest = {
  appApk?: FileReference | undefined
  appBundle?: AppBundle | undefined
  appPackageId?: string | undefined
  orchestratorOption?:
    | 'ORCHESTRATOR_OPTION_UNSPECIFIED'
    | 'USE_ORCHESTRATOR'
    | 'DO_NOT_USE_ORCHESTRATOR'
    | undefined
  shardingOption?: ShardingOption | undefined
  testApk?: FileReference | undefined
  testPackageId?: string | undefined
  testRunnerClass?: string | undefined
  testTargets?: string[] | undefined
}
type RoboDirective = {
  actionType?: 'ACTION_TYPE_UNSPECIFIED' | 'SINGLE_CLICK' | 'ENTER_TEXT' | 'IGNORE' | undefined
  inputText?: string | undefined
  resourceName?: string | undefined
}
type LauncherActivityIntent = { [x: string]: unknown }
type StartActivityIntent = {
  action?: string | undefined
  categories?: string[] | undefined
  uri?: string | undefined
}
type RoboStartingIntent = {
  launcherActivity?: LauncherActivityIntent | undefined
  startActivity?: StartActivityIntent | undefined
  timeout?: string | undefined
}
type AndroidRoboTest = {
  appApk?: FileReference | undefined
  appBundle?: AppBundle | undefined
  appInitialActivity?: string | undefined
  appPackageId?: string | undefined
  maxDepth?: number | undefined
  maxSteps?: number | undefined
  roboDirectives?: RoboDirective[] | undefined
  roboMode?: 'ROBO_MODE_UNSPECIFIED' | 'ROBO_VERSION_1' | 'ROBO_VERSION_2' | undefined
  roboScript?: FileReference | undefined
  startingIntents?: RoboStartingIntent[] | undefined
}
type AndroidTestLoop = {
  appApk?: FileReference | undefined
  appBundle?: AppBundle | undefined
  appPackageId?: string | undefined
  scenarioLabels?: string[] | undefined
  scenarios?: number[] | undefined
}
type IosTestLoop = {
  appBundleId?: string | undefined
  appIpa?: FileReference | undefined
  scenarios?: number[] | undefined
}
type IosDeviceFile = {
  bundleId?: string | undefined
  content?: FileReference | undefined
  devicePath?: string | undefined
}
type IosTestSetup = {
  additionalIpas?: FileReference[] | undefined
  networkProfile?: string | undefined
  pullDirectories?: IosDeviceFile[] | undefined
  pushFiles?: IosDeviceFile[] | undefined
}
type IosXcTest = {
  appBundleId?: string | undefined
  testSpecialEntitlements?: boolean | undefined
  testsZip?: FileReference | undefined
  xcodeVersion?: string | undefined
  xctestrun?: FileReference | undefined
}
type GoogleAuto = { [x: string]: unknown }
type Account = { googleAuto?: GoogleAuto | undefined }
type Apk = { location?: FileReference | undefined; packageName?: string | undefined }
type EnvironmentVariable = { key?: string | undefined; value?: string | undefined }
type ObbFile = { obb?: FileReference | undefined; obbFileName?: string | undefined }
type RegularFile = { content?: FileReference | undefined; devicePath?: string | undefined }
type DeviceFile = { obbFile?: ObbFile | undefined; regularFile?: RegularFile | undefined }
type SystraceSetup = { durationSeconds?: number | undefined }
type TestSetup = {
  account?: Account | undefined
  additionalApks?: Apk[] | undefined
  directoriesToPull?: string[] | undefined
  dontAutograntPermissions?: boolean | undefined
  environmentVariables?: EnvironmentVariable[] | undefined
  filesToPush?: DeviceFile[] | undefined
  networkProfile?: string | undefined
  systrace?: SystraceSetup | undefined
}
type TestSpecification = {
  androidInstrumentationTest?: AndroidInstrumentationTest | undefined
  androidRoboTest?: AndroidRoboTest | undefined
  androidTestLoop?: AndroidTestLoop | undefined
  disablePerformanceMetrics?: boolean | undefined
  disableVideoRecording?: boolean | undefined
  iosTestLoop?: IosTestLoop | undefined
  iosTestSetup?: IosTestSetup | undefined
  iosXcTest?: IosXcTest | undefined
  testSetup?: TestSetup | undefined
  testTimeout?: string | undefined
}
type ToolResultsStep = {
  executionId?: string | undefined
  historyId?: string | undefined
  projectId?: string | undefined
  stepId?: string | undefined
}
type TestExecution = {
  environment?: Environment | undefined
  id?: string | undefined
  matrixId?: string | undefined
  projectId?: string | undefined
  shard?: Shard | undefined
  state?:
    | 'TEST_STATE_UNSPECIFIED'
    | 'VALIDATING'
    | 'PENDING'
    | 'RUNNING'
    | 'FINISHED'
    | 'ERROR'
    | 'UNSUPPORTED_ENVIRONMENT'
    | 'INCOMPATIBLE_ENVIRONMENT'
    | 'INCOMPATIBLE_ARCHITECTURE'
    | 'CANCELLED'
    | 'INVALID'
    | undefined
  testDetails?: TestDetails | undefined
  testSpecification?: TestSpecification | undefined
  timestamp?: string | undefined
  toolResultsStep?: ToolResultsStep | undefined
}
type TestMatrix = {
  clientInfo?: ClientInfo | undefined
  environmentMatrix?: EnvironmentMatrix | undefined
  failFast?: boolean | undefined
  flakyTestAttempts?: number | undefined
  invalidMatrixDetails?:
    | 'INVALID_MATRIX_DETAILS_UNSPECIFIED'
    | 'DETAILS_UNAVAILABLE'
    | 'MALFORMED_APK'
    | 'MALFORMED_TEST_APK'
    | 'NO_MANIFEST'
    | 'NO_PACKAGE_NAME'
    | 'INVALID_PACKAGE_NAME'
    | 'TEST_SAME_AS_APP'
    | 'NO_INSTRUMENTATION'
    | 'NO_SIGNATURE'
    | 'INSTRUMENTATION_ORCHESTRATOR_INCOMPATIBLE'
    | 'NO_TEST_RUNNER_CLASS'
    | 'NO_LAUNCHER_ACTIVITY'
    | 'FORBIDDEN_PERMISSIONS'
    | 'INVALID_ROBO_DIRECTIVES'
    | 'INVALID_RESOURCE_NAME'
    | 'INVALID_DIRECTIVE_ACTION'
    | 'TEST_LOOP_INTENT_FILTER_NOT_FOUND'
    | 'SCENARIO_LABEL_NOT_DECLARED'
    | 'SCENARIO_LABEL_MALFORMED'
    | 'SCENARIO_NOT_DECLARED'
    | 'DEVICE_ADMIN_RECEIVER'
    | 'MALFORMED_XC_TEST_ZIP'
    | 'BUILT_FOR_IOS_SIMULATOR'
    | 'NO_TESTS_IN_XC_TEST_ZIP'
    | 'USE_DESTINATION_ARTIFACTS'
    | 'TEST_NOT_APP_HOSTED'
    | 'PLIST_CANNOT_BE_PARSED'
    | 'TEST_ONLY_APK'
    | 'MALFORMED_IPA'
    | 'MISSING_URL_SCHEME'
    | 'MALFORMED_APP_BUNDLE'
    | 'NO_CODE_APK'
    | 'INVALID_INPUT_APK'
    | 'INVALID_APK_PREVIEW_SDK'
    | 'MATRIX_TOO_LARGE'
    | 'TEST_QUOTA_EXCEEDED'
    | 'SERVICE_NOT_ACTIVATED'
    | 'UNKNOWN_PERMISSION_ERROR'
    | undefined
  outcomeSummary?:
    | 'OUTCOME_SUMMARY_UNSPECIFIED'
    | 'SUCCESS'
    | 'FAILURE'
    | 'INCONCLUSIVE'
    | 'SKIPPED'
    | undefined
  projectId?: string | undefined
  resultStorage?: ResultStorage | undefined
  state?:
    | 'TEST_STATE_UNSPECIFIED'
    | 'VALIDATING'
    | 'PENDING'
    | 'RUNNING'
    | 'FINISHED'
    | 'ERROR'
    | 'UNSUPPORTED_ENVIRONMENT'
    | 'INCOMPATIBLE_ENVIRONMENT'
    | 'INCOMPATIBLE_ARCHITECTURE'
    | 'CANCELLED'
    | 'INVALID'
    | undefined
  testExecutions?: TestExecution[] | undefined
  testMatrixId?: string | undefined
  testSpecification?: TestSpecification | undefined
  timestamp?: string | undefined
}
type CancelTestMatrixResponse = {
  testState?:
    | 'TEST_STATE_UNSPECIFIED'
    | 'VALIDATING'
    | 'PENDING'
    | 'RUNNING'
    | 'FINISHED'
    | 'ERROR'
    | 'UNSUPPORTED_ENVIRONMENT'
    | 'INCOMPATIBLE_ENVIRONMENT'
    | 'INCOMPATIBLE_ARCHITECTURE'
    | 'CANCELLED'
    | 'INVALID'
    | undefined
}
type PerAndroidVersionInfo = {
  deviceCapacity?:
    | 'DEVICE_CAPACITY_UNSPECIFIED'
    | 'DEVICE_CAPACITY_HIGH'
    | 'DEVICE_CAPACITY_MEDIUM'
    | 'DEVICE_CAPACITY_LOW'
    | 'DEVICE_CAPACITY_NONE'
    | undefined
  versionId?: string | undefined
}
type AndroidModel = {
  brand?: string | undefined
  codename?: string | undefined
  form?: 'DEVICE_FORM_UNSPECIFIED' | 'VIRTUAL' | 'PHYSICAL' | 'EMULATOR' | undefined
  formFactor?: 'DEVICE_FORM_FACTOR_UNSPECIFIED' | 'PHONE' | 'TABLET' | 'WEARABLE' | undefined
  id?: string | undefined
  lowFpsVideoRecording?: boolean | undefined
  manufacturer?: string | undefined
  name?: string | undefined
  perVersionInfo?: PerAndroidVersionInfo[] | undefined
  screenDensity?: number | undefined
  screenX?: number | undefined
  screenY?: number | undefined
  supportedAbis?: string[] | undefined
  supportedVersionIds?: string[] | undefined
  tags?: string[] | undefined
  thumbnailUrl?: string | undefined
}
type Locale = {
  id?: string | undefined
  name?: string | undefined
  region?: string | undefined
  tags?: string[] | undefined
}
type Orientation = {
  id?: string | undefined
  name?: string | undefined
  tags?: string[] | undefined
}
type AndroidRuntimeConfiguration = {
  locales?: Locale[] | undefined
  orientations?: Orientation[] | undefined
}
type Distribution = { marketShare?: number | undefined; measurementTime?: string | undefined }
type Date = { day?: number | undefined; month?: number | undefined; year?: number | undefined }
type AndroidVersion = {
  apiLevel?: number | undefined
  codeName?: string | undefined
  distribution?: Distribution | undefined
  id?: string | undefined
  releaseDate?: Date | undefined
  tags?: string[] | undefined
  versionString?: string | undefined
}
type AndroidDeviceCatalog = {
  models?: AndroidModel[] | undefined
  runtimeConfiguration?: AndroidRuntimeConfiguration | undefined
  versions?: AndroidVersion[] | undefined
}
type DeviceIpBlock = {
  addedDate?: Date | undefined
  block?: string | undefined
  form?: 'DEVICE_FORM_UNSPECIFIED' | 'VIRTUAL' | 'PHYSICAL' | 'EMULATOR' | undefined
}
type DeviceIpBlockCatalog = { ipBlocks?: DeviceIpBlock[] | undefined }
type PerIosVersionInfo = {
  deviceCapacity?:
    | 'DEVICE_CAPACITY_UNSPECIFIED'
    | 'DEVICE_CAPACITY_HIGH'
    | 'DEVICE_CAPACITY_MEDIUM'
    | 'DEVICE_CAPACITY_LOW'
    | 'DEVICE_CAPACITY_NONE'
    | undefined
  versionId?: string | undefined
}
type IosModel = {
  deviceCapabilities?: string[] | undefined
  formFactor?: 'DEVICE_FORM_FACTOR_UNSPECIFIED' | 'PHONE' | 'TABLET' | 'WEARABLE' | undefined
  id?: string | undefined
  name?: string | undefined
  perVersionInfo?: PerIosVersionInfo[] | undefined
  screenDensity?: number | undefined
  screenX?: number | undefined
  screenY?: number | undefined
  supportedVersionIds?: string[] | undefined
  tags?: string[] | undefined
}
type IosRuntimeConfiguration = {
  locales?: Locale[] | undefined
  orientations?: Orientation[] | undefined
}
type IosVersion = {
  id?: string | undefined
  majorVersion?: number | undefined
  minorVersion?: number | undefined
  supportedXcodeVersionIds?: string[] | undefined
  tags?: string[] | undefined
}
type XcodeVersion = { tags?: string[] | undefined; version?: string | undefined }
type IosDeviceCatalog = {
  models?: IosModel[] | undefined
  runtimeConfiguration?: IosRuntimeConfiguration | undefined
  versions?: IosVersion[] | undefined
  xcodeVersions?: XcodeVersion[] | undefined
}
type TrafficRule = {
  bandwidth?: number | undefined
  burst?: number | undefined
  delay?: string | undefined
  packetDuplicationRatio?: number | undefined
  packetLossRatio?: number | undefined
}
type NetworkConfiguration = {
  downRule?: TrafficRule | undefined
  id?: string | undefined
  upRule?: TrafficRule | undefined
}
type NetworkConfigurationCatalog = { configurations?: NetworkConfiguration[] | undefined }
type ProvidedSoftwareCatalog = {
  androidxOrchestratorVersion?: string | undefined
  orchestratorVersion?: string | undefined
}
type TestEnvironmentCatalog = {
  androidDeviceCatalog?: AndroidDeviceCatalog | undefined
  deviceIpBlockCatalog?: DeviceIpBlockCatalog | undefined
  iosDeviceCatalog?: IosDeviceCatalog | undefined
  networkConfigurationCatalog?: NetworkConfigurationCatalog | undefined
  softwareCatalog?: ProvidedSoftwareCatalog | undefined
}
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/v1/applicationDetailService/getApkDetails': {
      $post: {
        input: {
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
        } & { json: FileReference }
        output: GetApkDetailsResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/projects/:projectId/testMatrices': {
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
        } & { json: TestMatrix }
        output: TestMatrix
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/projects/:projectId/testMatrices/:testMatrixId': {
      $get: {
        input: { param: { projectId: string; testMatrixId: string } } & {
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
        output: TestMatrix
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/projects/:projectId/testMatrices/:testMatrixId:cancel': {
      $post: {
        input: { param: { projectId: string; testMatrixId: string } } & {
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
        output: CancelTestMatrixResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/testEnvironmentCatalog/:environmentType': {
      $get: {
        input: {
          param: {
            environmentType:
              | 'ENVIRONMENT_TYPE_UNSPECIFIED'
              | 'ANDROID'
              | 'IOS'
              | 'NETWORK_CONFIGURATION'
              | 'PROVIDED_SOFTWARE'
              | 'DEVICE_IP_BLOCKS'
          }
        } & {
          query: {
            projectId?: string | undefined
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
        output: TestEnvironmentCatalog
        outputFormat: 'json'
        status: 200
      }
    }
  },
  '/'
>
export default routes
