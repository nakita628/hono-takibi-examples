type GoogleRpcStatus = {
  code?: number | undefined
  details?: { [x: string]: { [x: string]: unknown } }[] | undefined
  message?: string | undefined
}
type GoogleLongrunningOperation = {
  done?: boolean | undefined
  error?: GoogleRpcStatus | undefined
  metadata?: { [x: string]: { [x: string]: unknown } } | undefined
  name?: string | undefined
  response?: { [x: string]: { [x: string]: unknown } } | undefined
}
type GoogleCloudMlV1AcceleratorConfig = {
  count?: string | undefined
  type?:
    | 'ACCELERATOR_TYPE_UNSPECIFIED'
    | 'NVIDIA_TESLA_K80'
    | 'NVIDIA_TESLA_P100'
    | 'NVIDIA_TESLA_V100'
    | 'NVIDIA_TESLA_P4'
    | 'NVIDIA_TESLA_T4'
    | 'NVIDIA_TESLA_A100'
    | 'TPU_V2'
    | 'TPU_V3'
    | 'TPU_V2_POD'
    | 'TPU_V3_POD'
    | 'TPU_V4_POD'
    | undefined
}
type GoogleCloudMlV1MetricSpec = {
  name?: 'METRIC_NAME_UNSPECIFIED' | 'CPU_USAGE' | 'GPU_DUTY_CYCLE' | undefined
  target?: number | undefined
}
type GoogleCloudMlV1AutoScaling = {
  maxNodes?: number | undefined
  metrics?: GoogleCloudMlV1MetricSpec[] | undefined
  minNodes?: number | undefined
}
type GoogleCloudMlV1EnvVar = { name?: string | undefined; value?: string | undefined }
type GoogleCloudMlV1ContainerPort = { containerPort?: number | undefined }
type GoogleCloudMlV1ContainerSpec = {
  args?: string[] | undefined
  command?: string[] | undefined
  env?: GoogleCloudMlV1EnvVar[] | undefined
  image?: string | undefined
  ports?: GoogleCloudMlV1ContainerPort[] | undefined
}
type GoogleCloudMlV1IntegratedGradientsAttribution = { numIntegralSteps?: number | undefined }
type GoogleCloudMlV1SampledShapleyAttribution = { numPaths?: number | undefined }
type GoogleCloudMlV1XraiAttribution = { numIntegralSteps?: number | undefined }
type GoogleCloudMlV1ExplanationConfig = {
  integratedGradientsAttribution?: GoogleCloudMlV1IntegratedGradientsAttribution | undefined
  sampledShapleyAttribution?: GoogleCloudMlV1SampledShapleyAttribution | undefined
  xraiAttribution?: GoogleCloudMlV1XraiAttribution | undefined
}
type GoogleCloudMlV1ManualScaling = { nodes?: number | undefined }
type GoogleCloudMlV1RequestLoggingConfig = {
  bigqueryTableName?: string | undefined
  samplingPercentage?: number | undefined
}
type GoogleCloudMlV1RouteMap = { health?: string | undefined; predict?: string | undefined }
type GoogleCloudMlV1Version = {
  acceleratorConfig?: GoogleCloudMlV1AcceleratorConfig | undefined
  autoScaling?: GoogleCloudMlV1AutoScaling | undefined
  container?: GoogleCloudMlV1ContainerSpec | undefined
  createTime?: string | undefined
  deploymentUri?: string | undefined
  description?: string | undefined
  errorMessage?: string | undefined
  etag?: string | undefined
  explanationConfig?: GoogleCloudMlV1ExplanationConfig | undefined
  framework?: 'FRAMEWORK_UNSPECIFIED' | 'TENSORFLOW' | 'SCIKIT_LEARN' | 'XGBOOST' | undefined
  isDefault?: boolean | undefined
  labels?: { [x: string]: string } | undefined
  lastMigrationModelId?: string | undefined
  lastMigrationTime?: string | undefined
  lastUseTime?: string | undefined
  machineType?: string | undefined
  manualScaling?: GoogleCloudMlV1ManualScaling | undefined
  name?: string | undefined
  packageUris?: string[] | undefined
  predictionClass?: string | undefined
  pythonVersion?: string | undefined
  requestLoggingConfig?: GoogleCloudMlV1RequestLoggingConfig | undefined
  routes?: GoogleCloudMlV1RouteMap | undefined
  runtimeVersion?: string | undefined
  serviceAccount?: string | undefined
  state?: 'UNKNOWN' | 'READY' | 'CREATING' | 'FAILED' | 'DELETING' | 'UPDATING' | undefined
}
type GoogleLongrunningListOperationsResponse = {
  nextPageToken?: string | undefined
  operations?: GoogleLongrunningOperation[] | undefined
}
type GoogleCloudMlV1MeasurementMetric = { metric?: string | undefined; value?: number | undefined }
type GoogleCloudMlV1Measurement = {
  elapsedTime?: string | undefined
  metrics?: GoogleCloudMlV1MeasurementMetric[] | undefined
  stepCount?: string | undefined
}
type GoogleCloudMlV1AddTrialMeasurementRequest = {
  measurement?: GoogleCloudMlV1Measurement | undefined
}
type GoogleCloudMlV1TrialParameter = {
  floatValue?: number | undefined
  intValue?: string | undefined
  parameter?: string | undefined
  stringValue?: string | undefined
}
type GoogleCloudMlV1Trial = {
  clientId?: string | undefined
  endTime?: string | undefined
  finalMeasurement?: GoogleCloudMlV1Measurement | undefined
  infeasibleReason?: string | undefined
  measurements?: GoogleCloudMlV1Measurement[] | undefined
  name?: string | undefined
  parameters?: GoogleCloudMlV1TrialParameter[] | undefined
  startTime?: string | undefined
  state?: 'STATE_UNSPECIFIED' | 'REQUESTED' | 'ACTIVE' | 'COMPLETED' | 'STOPPING' | undefined
  trialInfeasible?: boolean | undefined
}
type GoogleCloudMlV1CancelJobRequest = { [x: string]: unknown }
type GoogleProtobufEmpty = { [x: string]: unknown }
type GoogleCloudMlV1CheckTrialEarlyStoppingStateRequest = { [x: string]: unknown }
type GoogleCloudMlV1CompleteTrialRequest = {
  finalMeasurement?: GoogleCloudMlV1Measurement | undefined
  infeasibleReason?: string | undefined
  trialInfeasible?: boolean | undefined
}
type GoogleApiHttpBody = {
  contentType?: string | undefined
  data?: string | undefined
  extensions?: { [x: string]: { [x: string]: unknown } }[] | undefined
}
type GoogleCloudMlV1ExplainRequest = { httpBody?: GoogleApiHttpBody | undefined }
type GoogleCloudMlV1Config = { tpuServiceAccount?: string | undefined }
type GoogleCloudMlV1GetConfigResponse = {
  config?: GoogleCloudMlV1Config | undefined
  serviceAccount?: string | undefined
  serviceAccountProject?: string | undefined
}
type GoogleCloudMlV1PredictRequest = { httpBody?: GoogleApiHttpBody | undefined }
type GoogleCloudMlV1SetDefaultVersionRequest = { [x: string]: unknown }
type GoogleCloudMlV1StopTrialRequest = { [x: string]: unknown }
type GoogleCloudMlV1PredictionInput = {
  batchSize?: string | undefined
  dataFormat?:
    | 'DATA_FORMAT_UNSPECIFIED'
    | 'JSON'
    | 'TEXT'
    | 'TF_RECORD'
    | 'TF_RECORD_GZIP'
    | 'CSV'
    | undefined
  inputPaths?: string[] | undefined
  maxWorkerCount?: string | undefined
  modelName?: string | undefined
  outputDataFormat?:
    | 'DATA_FORMAT_UNSPECIFIED'
    | 'JSON'
    | 'TEXT'
    | 'TF_RECORD'
    | 'TF_RECORD_GZIP'
    | 'CSV'
    | undefined
  outputPath?: string | undefined
  region?: string | undefined
  runtimeVersion?: string | undefined
  signatureName?: string | undefined
  uri?: string | undefined
  versionName?: string | undefined
}
type GoogleCloudMlV1PredictionOutput = {
  errorCount?: string | undefined
  nodeHours?: number | undefined
  outputPath?: string | undefined
  predictionCount?: string | undefined
}
type GoogleCloudMlV1EncryptionConfig = { kmsKeyName?: string | undefined }
type GoogleCloudMlV1DiskConfig = {
  bootDiskSizeGb?: number | undefined
  bootDiskType?: string | undefined
}
type GoogleCloudMlV1ReplicaConfig = {
  acceleratorConfig?: GoogleCloudMlV1AcceleratorConfig | undefined
  containerArgs?: string[] | undefined
  containerCommand?: string[] | undefined
  diskConfig?: GoogleCloudMlV1DiskConfig | undefined
  imageUri?: string | undefined
  tpuTfVersion?: string | undefined
}
type GoogleCloudMlV1ParameterSpec = {
  categoricalValues?: string[] | undefined
  discreteValues?: number[] | undefined
  maxValue?: number | undefined
  minValue?: number | undefined
  parameterName?: string | undefined
  scaleType?: 'NONE' | 'UNIT_LINEAR_SCALE' | 'UNIT_LOG_SCALE' | 'UNIT_REVERSE_LOG_SCALE' | undefined
  type?:
    | 'PARAMETER_TYPE_UNSPECIFIED'
    | 'DOUBLE'
    | 'INTEGER'
    | 'CATEGORICAL'
    | 'DISCRETE'
    | undefined
}
type GoogleCloudMlV1HyperparameterSpec = {
  algorithm?: 'ALGORITHM_UNSPECIFIED' | 'GRID_SEARCH' | 'RANDOM_SEARCH' | undefined
  enableTrialEarlyStopping?: boolean | undefined
  goal?: 'GOAL_TYPE_UNSPECIFIED' | 'MAXIMIZE' | 'MINIMIZE' | undefined
  hyperparameterMetricTag?: string | undefined
  maxFailedTrials?: number | undefined
  maxParallelTrials?: number | undefined
  maxTrials?: number | undefined
  params?: GoogleCloudMlV1ParameterSpec[] | undefined
  resumePreviousJobId?: string | undefined
}
type GoogleCloudMlV1Scheduling = {
  maxRunningTime?: string | undefined
  maxWaitTime?: string | undefined
  priority?: number | undefined
}
type GoogleCloudMlV1TrainingInput = {
  args?: string[] | undefined
  enableWebAccess?: boolean | undefined
  encryptionConfig?: GoogleCloudMlV1EncryptionConfig | undefined
  evaluatorConfig?: GoogleCloudMlV1ReplicaConfig | undefined
  evaluatorCount?: string | undefined
  evaluatorType?: string | undefined
  hyperparameters?: GoogleCloudMlV1HyperparameterSpec | undefined
  jobDir?: string | undefined
  masterConfig?: GoogleCloudMlV1ReplicaConfig | undefined
  masterType?: string | undefined
  network?: string | undefined
  packageUris?: string[] | undefined
  parameterServerConfig?: GoogleCloudMlV1ReplicaConfig | undefined
  parameterServerCount?: string | undefined
  parameterServerType?: string | undefined
  pythonModule?: string | undefined
  pythonVersion?: string | undefined
  region?: string | undefined
  runtimeVersion?: string | undefined
  scaleTier?:
    | 'BASIC'
    | 'STANDARD_1'
    | 'PREMIUM_1'
    | 'BASIC_GPU'
    | 'BASIC_TPU'
    | 'CUSTOM'
    | undefined
  scheduling?: GoogleCloudMlV1Scheduling | undefined
  serviceAccount?: string | undefined
  useChiefInTfConfig?: boolean | undefined
  workerConfig?: GoogleCloudMlV1ReplicaConfig | undefined
  workerCount?: string | undefined
  workerType?: string | undefined
}
type GoogleCloudMlV1BuiltInAlgorithmOutput = {
  framework?: string | undefined
  modelPath?: string | undefined
  pythonVersion?: string | undefined
  runtimeVersion?: string | undefined
}
type GoogleCloudMlV1HyperparameterOutputHyperparameterMetric = {
  objectiveValue?: number | undefined
  trainingStep?: string | undefined
}
type GoogleCloudMlV1HyperparameterOutput = {
  allMetrics?: GoogleCloudMlV1HyperparameterOutputHyperparameterMetric[] | undefined
  builtInAlgorithmOutput?: GoogleCloudMlV1BuiltInAlgorithmOutput | undefined
  endTime?: string | undefined
  finalMetric?: GoogleCloudMlV1HyperparameterOutputHyperparameterMetric | undefined
  hyperparameters?: { [x: string]: string } | undefined
  isTrialStoppedEarly?: boolean | undefined
  startTime?: string | undefined
  state?:
    | 'STATE_UNSPECIFIED'
    | 'QUEUED'
    | 'PREPARING'
    | 'RUNNING'
    | 'SUCCEEDED'
    | 'FAILED'
    | 'CANCELLING'
    | 'CANCELLED'
    | undefined
  trialId?: string | undefined
  webAccessUris?: { [x: string]: string } | undefined
}
type GoogleCloudMlV1TrainingOutput = {
  builtInAlgorithmOutput?: GoogleCloudMlV1BuiltInAlgorithmOutput | undefined
  completedTrialCount?: string | undefined
  consumedMLUnits?: number | undefined
  hyperparameterMetricTag?: string | undefined
  isBuiltInAlgorithmJob?: boolean | undefined
  isHyperparameterTuningJob?: boolean | undefined
  trials?: GoogleCloudMlV1HyperparameterOutput[] | undefined
  webAccessUris?: { [x: string]: string } | undefined
}
type GoogleCloudMlV1Job = {
  createTime?: string | undefined
  endTime?: string | undefined
  errorMessage?: string | undefined
  etag?: string | undefined
  jobId?: string | undefined
  jobPosition?: string | undefined
  labels?: { [x: string]: string } | undefined
  predictionInput?: GoogleCloudMlV1PredictionInput | undefined
  predictionOutput?: GoogleCloudMlV1PredictionOutput | undefined
  startTime?: string | undefined
  state?:
    | 'STATE_UNSPECIFIED'
    | 'QUEUED'
    | 'PREPARING'
    | 'RUNNING'
    | 'SUCCEEDED'
    | 'FAILED'
    | 'CANCELLING'
    | 'CANCELLED'
    | undefined
  trainingInput?: GoogleCloudMlV1TrainingInput | undefined
  trainingOutput?: GoogleCloudMlV1TrainingOutput | undefined
}
type GoogleCloudMlV1ListJobsResponse = {
  jobs?: GoogleCloudMlV1Job[] | undefined
  nextPageToken?: string | undefined
}
type GoogleCloudMlV1Capability = {
  availableAccelerators?:
    | (
        | 'ACCELERATOR_TYPE_UNSPECIFIED'
        | 'NVIDIA_TESLA_K80'
        | 'NVIDIA_TESLA_P100'
        | 'NVIDIA_TESLA_V100'
        | 'NVIDIA_TESLA_P4'
        | 'NVIDIA_TESLA_T4'
        | 'NVIDIA_TESLA_A100'
        | 'TPU_V2'
        | 'TPU_V3'
        | 'TPU_V2_POD'
        | 'TPU_V3_POD'
        | 'TPU_V4_POD'
      )[]
    | undefined
  type?: 'TYPE_UNSPECIFIED' | 'TRAINING' | 'BATCH_PREDICTION' | 'ONLINE_PREDICTION' | undefined
}
type GoogleCloudMlV1Location = {
  capabilities?: GoogleCloudMlV1Capability[] | undefined
  name?: string | undefined
}
type GoogleCloudMlV1ListLocationsResponse = {
  locations?: GoogleCloudMlV1Location[] | undefined
  nextPageToken?: string | undefined
}
type GoogleCloudMlV1Model = {
  defaultVersion?: GoogleCloudMlV1Version | undefined
  description?: string | undefined
  etag?: string | undefined
  labels?: { [x: string]: string } | undefined
  name?: string | undefined
  onlinePredictionConsoleLogging?: boolean | undefined
  onlinePredictionLogging?: boolean | undefined
  regions?: string[] | undefined
}
type GoogleCloudMlV1ListModelsResponse = {
  models?: GoogleCloudMlV1Model[] | undefined
  nextPageToken?: string | undefined
}
type GoogleCloudMlV1AutomatedStoppingConfigDecayCurveAutomatedStoppingConfig = {
  useElapsedTime?: boolean | undefined
}
type GoogleCloudMlV1AutomatedStoppingConfigMedianAutomatedStoppingConfig = {
  useElapsedTime?: boolean | undefined
}
type GoogleCloudMlV1AutomatedStoppingConfig = {
  decayCurveStoppingConfig?:
    | GoogleCloudMlV1AutomatedStoppingConfigDecayCurveAutomatedStoppingConfig
    | undefined
  medianAutomatedStoppingConfig?:
    | GoogleCloudMlV1AutomatedStoppingConfigMedianAutomatedStoppingConfig
    | undefined
}
type GoogleCloudMlV1StudyConfigMetricSpec = {
  goal?: 'GOAL_TYPE_UNSPECIFIED' | 'MAXIMIZE' | 'MINIMIZE' | undefined
  metric?: string | undefined
}
type GoogleCloudMlV1StudyConfigParameterSpecCategoricalValueSpec = { values?: string[] | undefined }
type GoogleCloudMlV1StudyConfigParameterSpecDiscreteValueSpec = { values?: number[] | undefined }
type GoogleCloudMlV1StudyConfigParameterSpecDoubleValueSpec = {
  maxValue?: number | undefined
  minValue?: number | undefined
}
type GoogleCloudMlV1StudyConfigParameterSpecIntegerValueSpec = {
  maxValue?: string | undefined
  minValue?: string | undefined
}
type GoogleCloudMlV1StudyConfigParameterSpecMatchingParentCategoricalValueSpec = {
  values?: string[] | undefined
}
type GoogleCloudMlV1StudyConfigParameterSpecMatchingParentDiscreteValueSpec = {
  values?: number[] | undefined
}
type GoogleCloudMlV1StudyConfigParameterSpecMatchingParentIntValueSpec = {
  values?: string[] | undefined
}
type GoogleCloudMlV1StudyConfigParameterSpec = {
  categoricalValueSpec?: GoogleCloudMlV1StudyConfigParameterSpecCategoricalValueSpec | undefined
  childParameterSpecs?: GoogleCloudMlV1StudyConfigParameterSpec[] | undefined
  discreteValueSpec?: GoogleCloudMlV1StudyConfigParameterSpecDiscreteValueSpec | undefined
  doubleValueSpec?: GoogleCloudMlV1StudyConfigParameterSpecDoubleValueSpec | undefined
  integerValueSpec?: GoogleCloudMlV1StudyConfigParameterSpecIntegerValueSpec | undefined
  parameter?: string | undefined
  parentCategoricalValues?:
    | GoogleCloudMlV1StudyConfigParameterSpecMatchingParentCategoricalValueSpec
    | undefined
  parentDiscreteValues?:
    | GoogleCloudMlV1StudyConfigParameterSpecMatchingParentDiscreteValueSpec
    | undefined
  parentIntValues?: GoogleCloudMlV1StudyConfigParameterSpecMatchingParentIntValueSpec | undefined
  scaleType?:
    | 'SCALE_TYPE_UNSPECIFIED'
    | 'UNIT_LINEAR_SCALE'
    | 'UNIT_LOG_SCALE'
    | 'UNIT_REVERSE_LOG_SCALE'
    | undefined
  type?:
    | 'PARAMETER_TYPE_UNSPECIFIED'
    | 'DOUBLE'
    | 'INTEGER'
    | 'CATEGORICAL'
    | 'DISCRETE'
    | undefined
}
type GoogleCloudMlV1StudyConfig = {
  algorithm?:
    | 'ALGORITHM_UNSPECIFIED'
    | 'GAUSSIAN_PROCESS_BANDIT'
    | 'GRID_SEARCH'
    | 'RANDOM_SEARCH'
    | undefined
  automatedStoppingConfig?: GoogleCloudMlV1AutomatedStoppingConfig | undefined
  metrics?: GoogleCloudMlV1StudyConfigMetricSpec[] | undefined
  parameters?: GoogleCloudMlV1StudyConfigParameterSpec[] | undefined
}
type GoogleCloudMlV1Study = {
  createTime?: string | undefined
  inactiveReason?: string | undefined
  name?: string | undefined
  state?: 'STATE_UNSPECIFIED' | 'ACTIVE' | 'INACTIVE' | 'COMPLETED' | undefined
  studyConfig?: GoogleCloudMlV1StudyConfig | undefined
}
type GoogleCloudMlV1ListStudiesResponse = { studies?: GoogleCloudMlV1Study[] | undefined }
type GoogleCloudMlV1ListTrialsResponse = { trials?: GoogleCloudMlV1Trial[] | undefined }
type GoogleCloudMlV1ListOptimalTrialsRequest = { [x: string]: unknown }
type GoogleCloudMlV1ListOptimalTrialsResponse = { trials?: GoogleCloudMlV1Trial[] | undefined }
type GoogleCloudMlV1SuggestTrialsRequest = {
  clientId?: string | undefined
  suggestionCount?: number | undefined
}
type GoogleCloudMlV1ListVersionsResponse = {
  nextPageToken?: string | undefined
  versions?: GoogleCloudMlV1Version[] | undefined
}
type GoogleIamV1AuditLogConfig = {
  exemptedMembers?: string[] | undefined
  logType?: 'LOG_TYPE_UNSPECIFIED' | 'ADMIN_READ' | 'DATA_WRITE' | 'DATA_READ' | undefined
}
type GoogleIamV1AuditConfig = {
  auditLogConfigs?: GoogleIamV1AuditLogConfig[] | undefined
  service?: string | undefined
}
type GoogleTypeExpr = {
  description?: string | undefined
  expression?: string | undefined
  location?: string | undefined
  title?: string | undefined
}
type GoogleIamV1Binding = {
  condition?: GoogleTypeExpr | undefined
  members?: string[] | undefined
  role?: string | undefined
}
type GoogleIamV1Policy = {
  auditConfigs?: GoogleIamV1AuditConfig[] | undefined
  bindings?: GoogleIamV1Binding[] | undefined
  etag?: string | undefined
  version?: number | undefined
}
type GoogleIamV1SetIamPolicyRequest = {
  policy?: GoogleIamV1Policy | undefined
  updateMask?: string | undefined
}
type GoogleIamV1TestIamPermissionsRequest = { permissions?: string[] | undefined }
type GoogleIamV1TestIamPermissionsResponse = { permissions?: string[] | undefined }
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/v1/:name': {
      $delete: {
        input: { param: { name: string } } & {
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
        output: GoogleLongrunningOperation
        outputFormat: 'json'
        status: 200
      }
      $get: {
        input: { param: { name: string } } & {
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
        output: GoogleLongrunningOperation
        outputFormat: 'json'
        status: 200
      }
      $patch: {
        input: { param: { name: string } } & {
          query: {
            updateMask?: string | undefined
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
        } & { json: GoogleCloudMlV1Version }
        output: GoogleLongrunningOperation
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/:name/operations': {
      $get: {
        input: { param: { name: string } } & {
          query: {
            filter?: string | undefined
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
        output: GoogleLongrunningListOperationsResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/:name:addMeasurement': {
      $post: {
        input: { param: { name: string } } & {
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
        } & { json: GoogleCloudMlV1AddTrialMeasurementRequest }
        output: GoogleCloudMlV1Trial
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/:name:cancel': {
      $post: {
        input: { param: { name: string } } & {
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
        } & { json: GoogleCloudMlV1CancelJobRequest }
        output: GoogleProtobufEmpty
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/:name:checkEarlyStoppingState': {
      $post: {
        input: { param: { name: string } } & {
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
        } & { json: GoogleCloudMlV1CheckTrialEarlyStoppingStateRequest }
        output: GoogleLongrunningOperation
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/:name:complete': {
      $post: {
        input: { param: { name: string } } & {
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
        } & { json: GoogleCloudMlV1CompleteTrialRequest }
        output: GoogleCloudMlV1Trial
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/:name:explain': {
      $post: {
        input: { param: { name: string } } & {
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
        } & { json: GoogleCloudMlV1ExplainRequest }
        output: GoogleApiHttpBody
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/:name:getConfig': {
      $get: {
        input: { param: { name: string } } & {
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
        output: GoogleCloudMlV1GetConfigResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/:name:predict': {
      $post: {
        input: { param: { name: string } } & {
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
        } & { json: GoogleCloudMlV1PredictRequest }
        output: GoogleApiHttpBody
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/:name:setDefault': {
      $post: {
        input: { param: { name: string } } & {
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
        } & { json: GoogleCloudMlV1SetDefaultVersionRequest }
        output: GoogleCloudMlV1Version
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/:name:stop': {
      $post: {
        input: { param: { name: string } } & {
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
        } & { json: GoogleCloudMlV1StopTrialRequest }
        output: GoogleCloudMlV1Trial
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/:parent/jobs': {
      $get: {
        input: { param: { parent: string } } & {
          query: {
            filter?: string | undefined
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
        output: GoogleCloudMlV1ListJobsResponse
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: { param: { parent: string } } & {
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
        } & { json: GoogleCloudMlV1Job }
        output: GoogleCloudMlV1Job
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/:parent/locations': {
      $get: {
        input: { param: { parent: string } } & {
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
        output: GoogleCloudMlV1ListLocationsResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/:parent/models': {
      $get: {
        input: { param: { parent: string } } & {
          query: {
            filter?: string | undefined
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
        output: GoogleCloudMlV1ListModelsResponse
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: { param: { parent: string } } & {
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
        } & { json: GoogleCloudMlV1Model }
        output: GoogleCloudMlV1Model
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/:parent/studies': {
      $get: {
        input: { param: { parent: string } } & {
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
        output: GoogleCloudMlV1ListStudiesResponse
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: { param: { parent: string } } & {
          query: {
            studyId?: string | undefined
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
        } & { json: GoogleCloudMlV1Study }
        output: GoogleCloudMlV1Study
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/:parent/trials': {
      $get: {
        input: { param: { parent: string } } & {
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
        output: GoogleCloudMlV1ListTrialsResponse
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: { param: { parent: string } } & {
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
        } & { json: GoogleCloudMlV1Trial }
        output: GoogleCloudMlV1Trial
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/:parent/trials:listOptimalTrials': {
      $post: {
        input: { param: { parent: string } } & {
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
        } & { json: GoogleCloudMlV1ListOptimalTrialsRequest }
        output: GoogleCloudMlV1ListOptimalTrialsResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/:parent/trials:suggest': {
      $post: {
        input: { param: { parent: string } } & {
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
        } & { json: GoogleCloudMlV1SuggestTrialsRequest }
        output: GoogleLongrunningOperation
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/:parent/versions': {
      $get: {
        input: { param: { parent: string } } & {
          query: {
            filter?: string | undefined
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
        output: GoogleCloudMlV1ListVersionsResponse
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: { param: { parent: string } } & {
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
        } & { json: GoogleCloudMlV1Version }
        output: GoogleLongrunningOperation
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/:resource:getIamPolicy': {
      $get: {
        input: { param: { resource: string } } & {
          query: {
            'options.requestedPolicyVersion'?: number | undefined
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
        output: GoogleIamV1Policy
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/:resource:setIamPolicy': {
      $post: {
        input: { param: { resource: string } } & {
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
        } & { json: GoogleIamV1SetIamPolicyRequest }
        output: GoogleIamV1Policy
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/:resource:testIamPermissions': {
      $post: {
        input: { param: { resource: string } } & {
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
        } & { json: GoogleIamV1TestIamPermissionsRequest }
        output: GoogleIamV1TestIamPermissionsResponse
        outputFormat: 'json'
        status: 200
      }
    }
  },
  '/'
>
export default routes
