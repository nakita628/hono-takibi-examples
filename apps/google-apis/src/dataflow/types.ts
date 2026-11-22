type WorkerHealthReport = {
  msg?: string | undefined
  pods?: { [x: string]: { [x: string]: unknown } }[] | undefined
  reportInterval?: string | undefined
  vmBrokenCode?: string | undefined
  vmIsBroken?: boolean | undefined
  vmIsHealthy?: boolean | undefined
  vmStartupTime?: string | undefined
}
type WorkerLifecycleEvent = {
  containerStartTime?: string | undefined
  event?:
    | 'UNKNOWN_EVENT'
    | 'OS_START'
    | 'CONTAINER_START'
    | 'NETWORK_UP'
    | 'STAGING_FILES_DOWNLOAD_START'
    | 'STAGING_FILES_DOWNLOAD_FINISH'
    | 'SDK_INSTALL_START'
    | 'SDK_INSTALL_FINISH'
    | undefined
  metadata?: { [x: string]: string } | undefined
}
type WorkerMessageCode = {
  code?: string | undefined
  parameters?: { [x: string]: { [x: string]: unknown } } | undefined
}
type CPUTime = {
  rate?: number | undefined
  timestamp?: string | undefined
  totalMs?: string | undefined
}
type MemInfo = {
  currentLimitBytes?: string | undefined
  currentOoms?: string | undefined
  currentRssBytes?: string | undefined
  timestamp?: string | undefined
  totalGbMs?: string | undefined
}
type ResourceUtilizationReport = {
  containers?: { [x: string]: ResourceUtilizationReport } | undefined
  cpuTime?: CPUTime[] | undefined
  memoryInfo?: MemInfo[] | undefined
}
type WorkerShutdownNotice = { reason?: string | undefined }
type WorkerThreadScalingReport = { currentThreadCount?: number | undefined }
type WorkerMessage = {
  labels?: { [x: string]: string } | undefined
  time?: string | undefined
  workerHealthReport?: WorkerHealthReport | undefined
  workerLifecycleEvent?: WorkerLifecycleEvent | undefined
  workerMessageCode?: WorkerMessageCode | undefined
  workerMetrics?: ResourceUtilizationReport | undefined
  workerShutdownNotice?: WorkerShutdownNotice | undefined
  workerThreadScalingReport?: WorkerThreadScalingReport | undefined
}
type SendWorkerMessagesRequest = {
  location?: string | undefined
  workerMessages?: WorkerMessage[] | undefined
}
type WorkerHealthReportResponse = { reportInterval?: string | undefined }
type ResourceUtilizationReportResponse = { [x: string]: unknown }
type WorkerShutdownNoticeResponse = { [x: string]: unknown }
type WorkerThreadScalingReportResponse = { recommendedThreadCount?: number | undefined }
type WorkerMessageResponse = {
  workerHealthReportResponse?: WorkerHealthReportResponse | undefined
  workerMetricsResponse?: ResourceUtilizationReportResponse | undefined
  workerShutdownNoticeResponse?: WorkerShutdownNoticeResponse | undefined
  workerThreadScalingReportResponse?: WorkerThreadScalingReportResponse | undefined
}
type SendWorkerMessagesResponse = { workerMessageResponses?: WorkerMessageResponse[] | undefined }
type FailedLocation = { name?: string | undefined }
type DebugOptions = { enableHotKeyLogging?: boolean | undefined }
type AutoscalingSettings = {
  algorithm?:
    | 'AUTOSCALING_ALGORITHM_UNKNOWN'
    | 'AUTOSCALING_ALGORITHM_NONE'
    | 'AUTOSCALING_ALGORITHM_BASIC'
    | undefined
  maxNumWorkers?: number | undefined
}
type Disk = {
  diskType?: string | undefined
  mountPoint?: string | undefined
  sizeGb?: number | undefined
}
type Package = { location?: string | undefined; name?: string | undefined }
type SdkHarnessContainerImage = {
  capabilities?: string[] | undefined
  containerImage?: string | undefined
  environmentId?: string | undefined
  useSingleCorePerContainer?: boolean | undefined
}
type WorkerSettings = {
  baseUrl?: string | undefined
  reportingEnabled?: boolean | undefined
  servicePath?: string | undefined
  shuffleServicePath?: string | undefined
  tempStoragePrefix?: string | undefined
  workerId?: string | undefined
}
type TaskRunnerSettings = {
  alsologtostderr?: boolean | undefined
  baseTaskDir?: string | undefined
  baseUrl?: string | undefined
  commandlinesFileName?: string | undefined
  continueOnException?: boolean | undefined
  dataflowApiVersion?: string | undefined
  harnessCommand?: string | undefined
  languageHint?: string | undefined
  logDir?: string | undefined
  logToSerialconsole?: boolean | undefined
  logUploadLocation?: string | undefined
  oauthScopes?: string[] | undefined
  parallelWorkerSettings?: WorkerSettings | undefined
  streamingWorkerMainClass?: string | undefined
  taskGroup?: string | undefined
  taskUser?: string | undefined
  tempStoragePrefix?: string | undefined
  vmId?: string | undefined
  workflowFileName?: string | undefined
}
type WorkerPool = {
  autoscalingSettings?: AutoscalingSettings | undefined
  dataDisks?: Disk[] | undefined
  defaultPackageSet?:
    | 'DEFAULT_PACKAGE_SET_UNKNOWN'
    | 'DEFAULT_PACKAGE_SET_NONE'
    | 'DEFAULT_PACKAGE_SET_JAVA'
    | 'DEFAULT_PACKAGE_SET_PYTHON'
    | undefined
  diskSizeGb?: number | undefined
  diskSourceImage?: string | undefined
  diskType?: string | undefined
  ipConfiguration?: 'WORKER_IP_UNSPECIFIED' | 'WORKER_IP_PUBLIC' | 'WORKER_IP_PRIVATE' | undefined
  kind?: string | undefined
  machineType?: string | undefined
  metadata?: { [x: string]: string } | undefined
  network?: string | undefined
  numThreadsPerWorker?: number | undefined
  numWorkers?: number | undefined
  onHostMaintenance?: string | undefined
  packages?: Package[] | undefined
  poolArgs?: { [x: string]: { [x: string]: unknown } } | undefined
  sdkHarnessContainerImages?: SdkHarnessContainerImage[] | undefined
  subnetwork?: string | undefined
  taskrunnerSettings?: TaskRunnerSettings | undefined
  teardownPolicy?:
    | 'TEARDOWN_POLICY_UNKNOWN'
    | 'TEARDOWN_ALWAYS'
    | 'TEARDOWN_ON_SUCCESS'
    | 'TEARDOWN_NEVER'
    | undefined
  workerHarnessContainerImage?: string | undefined
  zone?: string | undefined
}
type Environment = {
  clusterManagerApiService?: string | undefined
  dataset?: string | undefined
  debugOptions?: DebugOptions | undefined
  experiments?: string[] | undefined
  flexResourceSchedulingGoal?:
    | 'FLEXRS_UNSPECIFIED'
    | 'FLEXRS_SPEED_OPTIMIZED'
    | 'FLEXRS_COST_OPTIMIZED'
    | undefined
  internalExperiments?: { [x: string]: { [x: string]: unknown } } | undefined
  sdkPipelineOptions?: { [x: string]: { [x: string]: unknown } } | undefined
  serviceAccountEmail?: string | undefined
  serviceKmsKeyName?: string | undefined
  serviceOptions?: string[] | undefined
  shuffleMode?: 'SHUFFLE_MODE_UNSPECIFIED' | 'VM_BASED' | 'SERVICE_BASED' | undefined
  tempStoragePrefix?: string | undefined
  userAgent?: { [x: string]: { [x: string]: unknown } } | undefined
  version?: { [x: string]: { [x: string]: unknown } } | undefined
  workerPools?: WorkerPool[] | undefined
  workerRegion?: string | undefined
  workerZone?: string | undefined
}
type JobExecutionStageInfo = { stepName?: string[] | undefined }
type JobExecutionInfo = { stages?: { [x: string]: JobExecutionStageInfo } | undefined }
type BigTableIODetails = {
  instanceId?: string | undefined
  projectId?: string | undefined
  tableId?: string | undefined
}
type BigQueryIODetails = {
  dataset?: string | undefined
  projectId?: string | undefined
  query?: string | undefined
  table?: string | undefined
}
type DatastoreIODetails = { namespace?: string | undefined; projectId?: string | undefined }
type FileIODetails = { filePattern?: string | undefined }
type PubSubIODetails = { subscription?: string | undefined; topic?: string | undefined }
type SdkVersion = {
  sdkSupportStatus?: 'UNKNOWN' | 'SUPPORTED' | 'STALE' | 'DEPRECATED' | 'UNSUPPORTED' | undefined
  version?: string | undefined
  versionDisplayName?: string | undefined
}
type SpannerIODetails = {
  databaseId?: string | undefined
  instanceId?: string | undefined
  projectId?: string | undefined
}
type JobMetadata = {
  bigTableDetails?: BigTableIODetails[] | undefined
  bigqueryDetails?: BigQueryIODetails[] | undefined
  datastoreDetails?: DatastoreIODetails[] | undefined
  fileDetails?: FileIODetails[] | undefined
  pubsubDetails?: PubSubIODetails[] | undefined
  sdkVersion?: SdkVersion | undefined
  spannerDetails?: SpannerIODetails[] | undefined
  userDisplayProperties?: { [x: string]: string } | undefined
}
type DisplayData = {
  boolValue?: boolean | undefined
  durationValue?: string | undefined
  floatValue?: number | undefined
  int64Value?: string | undefined
  javaClassValue?: string | undefined
  key?: string | undefined
  label?: string | undefined
  namespace?: string | undefined
  shortStrValue?: string | undefined
  strValue?: string | undefined
  timestampValue?: string | undefined
  url?: string | undefined
}
type ComponentSource = {
  name?: string | undefined
  originalTransformOrCollection?: string | undefined
  userName?: string | undefined
}
type ComponentTransform = {
  name?: string | undefined
  originalTransform?: string | undefined
  userName?: string | undefined
}
type StageSource = {
  name?: string | undefined
  originalTransformOrCollection?: string | undefined
  sizeBytes?: string | undefined
  userName?: string | undefined
}
type ExecutionStageSummary = {
  componentSource?: ComponentSource[] | undefined
  componentTransform?: ComponentTransform[] | undefined
  id?: string | undefined
  inputSource?: StageSource[] | undefined
  kind?:
    | 'UNKNOWN_KIND'
    | 'PAR_DO_KIND'
    | 'GROUP_BY_KEY_KIND'
    | 'FLATTEN_KIND'
    | 'READ_KIND'
    | 'WRITE_KIND'
    | 'CONSTANT_KIND'
    | 'SINGLETON_KIND'
    | 'SHUFFLE_KIND'
    | undefined
  name?: string | undefined
  outputSource?: StageSource[] | undefined
  prerequisiteStage?: string[] | undefined
}
type TransformSummary = {
  displayData?: DisplayData[] | undefined
  id?: string | undefined
  inputCollectionName?: string[] | undefined
  kind?:
    | 'UNKNOWN_KIND'
    | 'PAR_DO_KIND'
    | 'GROUP_BY_KEY_KIND'
    | 'FLATTEN_KIND'
    | 'READ_KIND'
    | 'WRITE_KIND'
    | 'CONSTANT_KIND'
    | 'SINGLETON_KIND'
    | 'SHUFFLE_KIND'
    | undefined
  name?: string | undefined
  outputCollectionName?: string[] | undefined
}
type PipelineDescription = {
  displayData?: DisplayData[] | undefined
  executionPipelineStage?: ExecutionStageSummary[] | undefined
  originalPipelineTransform?: TransformSummary[] | undefined
  stepNamesHash?: string | undefined
}
type ExecutionStageState = {
  currentStateTime?: string | undefined
  executionStageName?: string | undefined
  executionStageState?:
    | 'JOB_STATE_UNKNOWN'
    | 'JOB_STATE_STOPPED'
    | 'JOB_STATE_RUNNING'
    | 'JOB_STATE_DONE'
    | 'JOB_STATE_FAILED'
    | 'JOB_STATE_CANCELLED'
    | 'JOB_STATE_UPDATED'
    | 'JOB_STATE_DRAINING'
    | 'JOB_STATE_DRAINED'
    | 'JOB_STATE_PENDING'
    | 'JOB_STATE_CANCELLING'
    | 'JOB_STATE_QUEUED'
    | 'JOB_STATE_RESOURCE_CLEANING_UP'
    | undefined
}
type Step = {
  kind?: string | undefined
  name?: string | undefined
  properties?: { [x: string]: { [x: string]: unknown } } | undefined
}
type Job = {
  clientRequestId?: string | undefined
  createTime?: string | undefined
  createdFromSnapshotId?: string | undefined
  currentState?:
    | 'JOB_STATE_UNKNOWN'
    | 'JOB_STATE_STOPPED'
    | 'JOB_STATE_RUNNING'
    | 'JOB_STATE_DONE'
    | 'JOB_STATE_FAILED'
    | 'JOB_STATE_CANCELLED'
    | 'JOB_STATE_UPDATED'
    | 'JOB_STATE_DRAINING'
    | 'JOB_STATE_DRAINED'
    | 'JOB_STATE_PENDING'
    | 'JOB_STATE_CANCELLING'
    | 'JOB_STATE_QUEUED'
    | 'JOB_STATE_RESOURCE_CLEANING_UP'
    | undefined
  currentStateTime?: string | undefined
  environment?: Environment | undefined
  executionInfo?: JobExecutionInfo | undefined
  id?: string | undefined
  jobMetadata?: JobMetadata | undefined
  labels?: { [x: string]: string } | undefined
  location?: string | undefined
  name?: string | undefined
  pipelineDescription?: PipelineDescription | undefined
  projectId?: string | undefined
  replaceJobId?: string | undefined
  replacedByJobId?: string | undefined
  requestedState?:
    | 'JOB_STATE_UNKNOWN'
    | 'JOB_STATE_STOPPED'
    | 'JOB_STATE_RUNNING'
    | 'JOB_STATE_DONE'
    | 'JOB_STATE_FAILED'
    | 'JOB_STATE_CANCELLED'
    | 'JOB_STATE_UPDATED'
    | 'JOB_STATE_DRAINING'
    | 'JOB_STATE_DRAINED'
    | 'JOB_STATE_PENDING'
    | 'JOB_STATE_CANCELLING'
    | 'JOB_STATE_QUEUED'
    | 'JOB_STATE_RESOURCE_CLEANING_UP'
    | undefined
  satisfiesPzs?: boolean | undefined
  stageStates?: ExecutionStageState[] | undefined
  startTime?: string | undefined
  steps?: Step[] | undefined
  stepsLocation?: string | undefined
  tempFiles?: string[] | undefined
  transformNameMapping?: { [x: string]: string } | undefined
  type?: 'JOB_TYPE_UNKNOWN' | 'JOB_TYPE_BATCH' | 'JOB_TYPE_STREAMING' | undefined
}
type ListJobsResponse = {
  failedLocation?: FailedLocation[] | undefined
  jobs?: Job[] | undefined
  nextPageToken?: string | undefined
}
type GetDebugConfigRequest = {
  componentId?: string | undefined
  location?: string | undefined
  workerId?: string | undefined
}
type GetDebugConfigResponse = { config?: string | undefined }
type SendDebugCaptureRequest = {
  componentId?: string | undefined
  data?: string | undefined
  dataFormat?: 'DATA_FORMAT_UNSPECIFIED' | 'RAW' | 'JSON' | 'ZLIB' | 'BROTLI' | undefined
  location?: string | undefined
  workerId?: string | undefined
}
type SendDebugCaptureResponse = { [x: string]: unknown }
type Parameter = { key?: string | undefined; value?: { [x: string]: unknown } | undefined }
type StructuredMessage = {
  messageKey?: string | undefined
  messageText?: string | undefined
  parameters?: Parameter[] | undefined
}
type AutoscalingEvent = {
  currentNumWorkers?: string | undefined
  description?: StructuredMessage | undefined
  eventType?:
    | 'TYPE_UNKNOWN'
    | 'TARGET_NUM_WORKERS_CHANGED'
    | 'CURRENT_NUM_WORKERS_CHANGED'
    | 'ACTUATION_FAILURE'
    | 'NO_CHANGE'
    | undefined
  targetNumWorkers?: string | undefined
  time?: string | undefined
  workerPool?: string | undefined
}
type JobMessage = {
  id?: string | undefined
  messageImportance?:
    | 'JOB_MESSAGE_IMPORTANCE_UNKNOWN'
    | 'JOB_MESSAGE_DEBUG'
    | 'JOB_MESSAGE_DETAILED'
    | 'JOB_MESSAGE_BASIC'
    | 'JOB_MESSAGE_WARNING'
    | 'JOB_MESSAGE_ERROR'
    | undefined
  messageText?: string | undefined
  time?: string | undefined
}
type ListJobMessagesResponse = {
  autoscalingEvents?: AutoscalingEvent[] | undefined
  jobMessages?: JobMessage[] | undefined
  nextPageToken?: string | undefined
}
type MetricStructuredName = {
  context?: { [x: string]: string } | undefined
  name?: string | undefined
  origin?: string | undefined
}
type MetricUpdate = {
  cumulative?: boolean | undefined
  distribution?: { [x: string]: unknown } | undefined
  gauge?: { [x: string]: unknown } | undefined
  internal?: { [x: string]: unknown } | undefined
  kind?: string | undefined
  meanCount?: { [x: string]: unknown } | undefined
  meanSum?: { [x: string]: unknown } | undefined
  name?: MetricStructuredName | undefined
  scalar?: { [x: string]: unknown } | undefined
  set?: { [x: string]: unknown } | undefined
  updateTime?: string | undefined
}
type JobMetrics = { metricTime?: string | undefined; metrics?: MetricUpdate[] | undefined }
type LeaseWorkItemRequest = {
  currentWorkerTime?: string | undefined
  location?: string | undefined
  requestedLeaseDuration?: string | undefined
  unifiedWorkerRequest?: { [x: string]: { [x: string]: unknown } } | undefined
  workItemTypes?: string[] | undefined
  workerCapabilities?: string[] | undefined
  workerId?: string | undefined
}
type InstructionInput = {
  outputNum?: number | undefined
  producerInstructionIndex?: number | undefined
}
type FlattenInstruction = { inputs?: InstructionInput[] | undefined }
type InstructionOutput = {
  codec?: { [x: string]: { [x: string]: unknown } } | undefined
  name?: string | undefined
  onlyCountKeyBytes?: boolean | undefined
  onlyCountValueBytes?: boolean | undefined
  originalName?: string | undefined
  systemName?: string | undefined
}
type MultiOutputInfo = { tag?: string | undefined }
type SourceMetadata = {
  estimatedSizeBytes?: string | undefined
  infinite?: boolean | undefined
  producesSortedKeys?: boolean | undefined
}
type Source = {
  baseSpecs?: { [x: string]: { [x: string]: unknown } }[] | undefined
  codec?: { [x: string]: { [x: string]: unknown } } | undefined
  doesNotNeedSplitting?: boolean | undefined
  metadata?: SourceMetadata | undefined
  spec?: { [x: string]: { [x: string]: unknown } } | undefined
}
type SideInputInfo = {
  kind?: { [x: string]: { [x: string]: unknown } } | undefined
  sources?: Source[] | undefined
  tag?: string | undefined
}
type ParDoInstruction = {
  input?: InstructionInput | undefined
  multiOutputInfos?: MultiOutputInfo[] | undefined
  numOutputs?: number | undefined
  sideInputs?: SideInputInfo[] | undefined
  userFn?: { [x: string]: { [x: string]: unknown } } | undefined
}
type PartialGroupByKeyInstruction = {
  input?: InstructionInput | undefined
  inputElementCodec?: { [x: string]: { [x: string]: unknown } } | undefined
  originalCombineValuesInputStoreName?: string | undefined
  originalCombineValuesStepName?: string | undefined
  sideInputs?: SideInputInfo[] | undefined
  valueCombiningFn?: { [x: string]: { [x: string]: unknown } } | undefined
}
type ReadInstruction = { source?: Source | undefined }
type Sink = {
  codec?: { [x: string]: { [x: string]: unknown } } | undefined
  spec?: { [x: string]: { [x: string]: unknown } } | undefined
}
type WriteInstruction = { input?: InstructionInput | undefined; sink?: Sink | undefined }
type ParallelInstruction = {
  flatten?: FlattenInstruction | undefined
  name?: string | undefined
  originalName?: string | undefined
  outputs?: InstructionOutput[] | undefined
  parDo?: ParDoInstruction | undefined
  partialGroupByKey?: PartialGroupByKeyInstruction | undefined
  read?: ReadInstruction | undefined
  systemName?: string | undefined
  write?: WriteInstruction | undefined
}
type MapTask = {
  counterPrefix?: string | undefined
  instructions?: ParallelInstruction[] | undefined
  stageName?: string | undefined
  systemName?: string | undefined
}
type SeqMapTaskOutputInfo = { sink?: Sink | undefined; tag?: string | undefined }
type SeqMapTask = {
  inputs?: SideInputInfo[] | undefined
  name?: string | undefined
  outputInfos?: SeqMapTaskOutputInfo[] | undefined
  stageName?: string | undefined
  systemName?: string | undefined
  userFn?: { [x: string]: { [x: string]: unknown } } | undefined
}
type ShellTask = { command?: string | undefined; exitCode?: number | undefined }
type SourceGetMetadataRequest = { source?: Source | undefined }
type SourceSplitOptions = {
  desiredBundleSizeBytes?: string | undefined
  desiredShardSizeBytes?: string | undefined
}
type SourceSplitRequest = { options?: SourceSplitOptions | undefined; source?: Source | undefined }
type SourceOperationRequest = {
  getMetadata?: SourceGetMetadataRequest | undefined
  name?: string | undefined
  originalName?: string | undefined
  split?: SourceSplitRequest | undefined
  stageName?: string | undefined
  systemName?: string | undefined
}
type KeyRangeDataDiskAssignment = {
  dataDisk?: string | undefined
  end?: string | undefined
  start?: string | undefined
}
type StreamingComputationRanges = {
  computationId?: string | undefined
  rangeAssignments?: KeyRangeDataDiskAssignment[] | undefined
}
type MountedDataDisk = { dataDisk?: string | undefined }
type StreamingComputationTask = {
  computationRanges?: StreamingComputationRanges[] | undefined
  dataDisks?: MountedDataDisk[] | undefined
  taskType?:
    | 'STREAMING_COMPUTATION_TASK_UNKNOWN'
    | 'STREAMING_COMPUTATION_TASK_STOP'
    | 'STREAMING_COMPUTATION_TASK_START'
    | undefined
}
type StreamingComputationConfig = {
  computationId?: string | undefined
  instructions?: ParallelInstruction[] | undefined
  stageName?: string | undefined
  systemName?: string | undefined
  transformUserNameToStateFamily?: { [x: string]: string } | undefined
}
type StreamingConfigTask = {
  commitStreamChunkSizeBytes?: string | undefined
  getDataStreamChunkSizeBytes?: string | undefined
  maxWorkItemCommitBytes?: string | undefined
  streamingComputationConfigs?: StreamingComputationConfig[] | undefined
  userStepToStateFamilyNameMap?: { [x: string]: string } | undefined
  windmillServiceEndpoint?: string | undefined
  windmillServicePort?: string | undefined
}
type StreamingApplianceSnapshotConfig = {
  importStateEndpoint?: string | undefined
  snapshotId?: string | undefined
}
type CustomSourceLocation = { stateful?: boolean | undefined }
type PubsubLocation = {
  dropLateData?: boolean | undefined
  idLabel?: string | undefined
  subscription?: string | undefined
  timestampLabel?: string | undefined
  topic?: string | undefined
  trackingSubscription?: string | undefined
  withAttributes?: boolean | undefined
}
type StreamingSideInputLocation = { stateFamily?: string | undefined; tag?: string | undefined }
type StreamingStageLocation = { streamId?: string | undefined }
type StreamLocation = {
  customSourceLocation?: CustomSourceLocation | undefined
  pubsubLocation?: PubsubLocation | undefined
  sideInputLocation?: StreamingSideInputLocation | undefined
  streamingStageLocation?: StreamingStageLocation | undefined
}
type KeyRangeLocation = {
  dataDisk?: string | undefined
  deliveryEndpoint?: string | undefined
  deprecatedPersistentDirectory?: string | undefined
  end?: string | undefined
  start?: string | undefined
}
type StateFamilyConfig = { isRead?: boolean | undefined; stateFamily?: string | undefined }
type ComputationTopology = {
  computationId?: string | undefined
  inputs?: StreamLocation[] | undefined
  keyRanges?: KeyRangeLocation[] | undefined
  outputs?: StreamLocation[] | undefined
  stateFamilies?: StateFamilyConfig[] | undefined
  systemStageName?: string | undefined
}
type DataDiskAssignment = { dataDisks?: string[] | undefined; vmInstance?: string | undefined }
type TopologyConfig = {
  computations?: ComputationTopology[] | undefined
  dataDiskAssignments?: DataDiskAssignment[] | undefined
  forwardingKeyBits?: number | undefined
  persistentStateVersion?: number | undefined
  userStageToComputationNameMap?: { [x: string]: string } | undefined
}
type StreamingSetupTask = {
  drain?: boolean | undefined
  receiveWorkPort?: number | undefined
  snapshotConfig?: StreamingApplianceSnapshotConfig | undefined
  streamingComputationTopology?: TopologyConfig | undefined
  workerHarnessPort?: number | undefined
}
type WorkItem = {
  configuration?: string | undefined
  id?: string | undefined
  initialReportIndex?: string | undefined
  jobId?: string | undefined
  leaseExpireTime?: string | undefined
  mapTask?: MapTask | undefined
  packages?: Package[] | undefined
  projectId?: string | undefined
  reportStatusInterval?: string | undefined
  seqMapTask?: SeqMapTask | undefined
  shellTask?: ShellTask | undefined
  sourceOperationTask?: SourceOperationRequest | undefined
  streamingComputationTask?: StreamingComputationTask | undefined
  streamingConfigTask?: StreamingConfigTask | undefined
  streamingSetupTask?: StreamingSetupTask | undefined
}
type LeaseWorkItemResponse = {
  unifiedWorkerResponse?: { [x: string]: { [x: string]: unknown } } | undefined
  workItems?: WorkItem[] | undefined
}
type SplitInt64 = { highBits?: number | undefined; lowBits?: number | undefined }
type Histogram = { bucketCounts?: string[] | undefined; firstBucketOffset?: number | undefined }
type DistributionUpdate = {
  count?: SplitInt64 | undefined
  histogram?: Histogram | undefined
  max?: SplitInt64 | undefined
  min?: SplitInt64 | undefined
  sum?: SplitInt64 | undefined
  sumOfSquares?: number | undefined
}
type FloatingPointList = { elements?: number[] | undefined }
type FloatingPointMean = { count?: SplitInt64 | undefined; sum?: number | undefined }
type IntegerGauge = { timestamp?: string | undefined; value?: SplitInt64 | undefined }
type IntegerList = { elements?: SplitInt64[] | undefined }
type IntegerMean = { count?: SplitInt64 | undefined; sum?: SplitInt64 | undefined }
type NameAndKind = {
  kind?:
    | 'INVALID'
    | 'SUM'
    | 'MAX'
    | 'MIN'
    | 'MEAN'
    | 'OR'
    | 'AND'
    | 'SET'
    | 'DISTRIBUTION'
    | 'LATEST_VALUE'
    | undefined
  name?: string | undefined
}
type StringList = { elements?: string[] | undefined }
type CounterMetadata = {
  description?: string | undefined
  kind?:
    | 'INVALID'
    | 'SUM'
    | 'MAX'
    | 'MIN'
    | 'MEAN'
    | 'OR'
    | 'AND'
    | 'SET'
    | 'DISTRIBUTION'
    | 'LATEST_VALUE'
    | undefined
  otherUnits?: string | undefined
  standardUnits?:
    | 'BYTES'
    | 'BYTES_PER_SEC'
    | 'MILLISECONDS'
    | 'MICROSECONDS'
    | 'NANOSECONDS'
    | 'TIMESTAMP_MSEC'
    | 'TIMESTAMP_USEC'
    | 'TIMESTAMP_NSEC'
    | undefined
}
type CounterStructuredName = {
  componentStepName?: string | undefined
  executionStepName?: string | undefined
  inputIndex?: number | undefined
  name?: string | undefined
  origin?: 'SYSTEM' | 'USER' | undefined
  originNamespace?: string | undefined
  originalRequestingStepName?: string | undefined
  originalStepName?: string | undefined
  portion?: 'ALL' | 'KEY' | 'VALUE' | undefined
  workerId?: string | undefined
}
type CounterStructuredNameAndMetadata = {
  metadata?: CounterMetadata | undefined
  name?: CounterStructuredName | undefined
}
type CounterUpdate = {
  boolean?: boolean | undefined
  cumulative?: boolean | undefined
  distribution?: DistributionUpdate | undefined
  floatingPoint?: number | undefined
  floatingPointList?: FloatingPointList | undefined
  floatingPointMean?: FloatingPointMean | undefined
  integer?: SplitInt64 | undefined
  integerGauge?: IntegerGauge | undefined
  integerList?: IntegerList | undefined
  integerMean?: IntegerMean | undefined
  internal?: { [x: string]: unknown } | undefined
  nameAndKind?: NameAndKind | undefined
  shortId?: string | undefined
  stringList?: StringList | undefined
  structuredNameAndMetadata?: CounterStructuredNameAndMetadata | undefined
}
type DerivedSource = {
  derivationMode?:
    | 'SOURCE_DERIVATION_MODE_UNKNOWN'
    | 'SOURCE_DERIVATION_MODE_INDEPENDENT'
    | 'SOURCE_DERIVATION_MODE_CHILD_OF_CURRENT'
    | 'SOURCE_DERIVATION_MODE_SIBLING_OF_CURRENT'
    | undefined
  source?: Source | undefined
}
type DynamicSourceSplit = {
  primary?: DerivedSource | undefined
  residual?: DerivedSource | undefined
}
type Status = {
  code?: number | undefined
  details?: { [x: string]: { [x: string]: unknown } }[] | undefined
  message?: string | undefined
}
type ConcatPosition = { index?: number | undefined; position?: Position | undefined }
type Position = {
  byteOffset?: string | undefined
  concatPosition?: ConcatPosition | undefined
  end?: boolean | undefined
  key?: string | undefined
  recordIndex?: string | undefined
  shufflePosition?: string | undefined
}
type ApproximateProgress = {
  percentComplete?: number | undefined
  position?: Position | undefined
  remainingTime?: string | undefined
}
type ReportedParallelism = { isInfinite?: boolean | undefined; value?: number | undefined }
type ApproximateReportedProgress = {
  consumedParallelism?: ReportedParallelism | undefined
  fractionConsumed?: number | undefined
  position?: Position | undefined
  remainingParallelism?: ReportedParallelism | undefined
}
type SourceSplitShard = {
  derivationMode?:
    | 'SOURCE_DERIVATION_MODE_UNKNOWN'
    | 'SOURCE_DERIVATION_MODE_INDEPENDENT'
    | 'SOURCE_DERIVATION_MODE_CHILD_OF_CURRENT'
    | 'SOURCE_DERIVATION_MODE_SIBLING_OF_CURRENT'
    | undefined
  source?: Source | undefined
}
type SourceFork = {
  primary?: SourceSplitShard | undefined
  primarySource?: DerivedSource | undefined
  residual?: SourceSplitShard | undefined
  residualSource?: DerivedSource | undefined
}
type SourceGetMetadataResponse = { metadata?: SourceMetadata | undefined }
type SourceSplitResponse = {
  bundles?: DerivedSource[] | undefined
  outcome?:
    | 'SOURCE_SPLIT_OUTCOME_UNKNOWN'
    | 'SOURCE_SPLIT_OUTCOME_USE_CURRENT'
    | 'SOURCE_SPLIT_OUTCOME_SPLITTING_HAPPENED'
    | undefined
  shards?: SourceSplitShard[] | undefined
}
type SourceOperationResponse = {
  getMetadata?: SourceGetMetadataResponse | undefined
  split?: SourceSplitResponse | undefined
}
type WorkItemStatus = {
  completed?: boolean | undefined
  counterUpdates?: CounterUpdate[] | undefined
  dynamicSourceSplit?: DynamicSourceSplit | undefined
  errors?: Status[] | undefined
  metricUpdates?: MetricUpdate[] | undefined
  progress?: ApproximateProgress | undefined
  reportIndex?: string | undefined
  reportedProgress?: ApproximateReportedProgress | undefined
  requestedLeaseDuration?: string | undefined
  sourceFork?: SourceFork | undefined
  sourceOperationResponse?: SourceOperationResponse | undefined
  stopPosition?: Position | undefined
  totalThrottlerWaitTimeSeconds?: number | undefined
  workItemId?: string | undefined
}
type ReportWorkItemStatusRequest = {
  currentWorkerTime?: string | undefined
  location?: string | undefined
  unifiedWorkerRequest?: { [x: string]: { [x: string]: unknown } } | undefined
  workItemStatuses?: WorkItemStatus[] | undefined
  workerId?: string | undefined
}
type HotKeyDetection = {
  hotKeyAge?: string | undefined
  systemName?: string | undefined
  userStepName?: string | undefined
}
type MetricShortId = { metricIndex?: number | undefined; shortId?: string | undefined }
type ApproximateSplitRequest = {
  fractionConsumed?: number | undefined
  fractionOfRemainder?: number | undefined
  position?: Position | undefined
}
type WorkItemServiceState = {
  completeWorkStatus?: Status | undefined
  harnessData?: { [x: string]: { [x: string]: unknown } } | undefined
  hotKeyDetection?: HotKeyDetection | undefined
  leaseExpireTime?: string | undefined
  metricShortId?: MetricShortId[] | undefined
  nextReportIndex?: string | undefined
  reportStatusInterval?: string | undefined
  splitRequest?: ApproximateSplitRequest | undefined
  suggestedStopPoint?: ApproximateProgress | undefined
  suggestedStopPosition?: Position | undefined
}
type ReportWorkItemStatusResponse = {
  unifiedWorkerResponse?: { [x: string]: { [x: string]: unknown } } | undefined
  workItemServiceStates?: WorkItemServiceState[] | undefined
}
type SnapshotJobRequest = {
  description?: string | undefined
  location?: string | undefined
  snapshotSources?: boolean | undefined
  ttl?: string | undefined
}
type PubsubSnapshotMetadata = {
  expireTime?: string | undefined
  snapshotName?: string | undefined
  topicName?: string | undefined
}
type Snapshot = {
  creationTime?: string | undefined
  description?: string | undefined
  diskSizeBytes?: string | undefined
  id?: string | undefined
  projectId?: string | undefined
  pubsubMetadata?: PubsubSnapshotMetadata[] | undefined
  region?: string | undefined
  sourceJobId?: string | undefined
  state?:
    | 'UNKNOWN_SNAPSHOT_STATE'
    | 'PENDING'
    | 'RUNNING'
    | 'READY'
    | 'FAILED'
    | 'DELETED'
    | undefined
  ttl?: string | undefined
}
type FlexTemplateRuntimeEnvironment = {
  additionalExperiments?: string[] | undefined
  additionalUserLabels?: { [x: string]: string } | undefined
  autoscalingAlgorithm?:
    | 'AUTOSCALING_ALGORITHM_UNKNOWN'
    | 'AUTOSCALING_ALGORITHM_NONE'
    | 'AUTOSCALING_ALGORITHM_BASIC'
    | undefined
  diskSizeGb?: number | undefined
  dumpHeapOnOom?: boolean | undefined
  enableLauncherVmSerialPortLogging?: boolean | undefined
  enableStreamingEngine?: boolean | undefined
  flexrsGoal?: 'FLEXRS_UNSPECIFIED' | 'FLEXRS_SPEED_OPTIMIZED' | 'FLEXRS_COST_OPTIMIZED' | undefined
  ipConfiguration?: 'WORKER_IP_UNSPECIFIED' | 'WORKER_IP_PUBLIC' | 'WORKER_IP_PRIVATE' | undefined
  kmsKeyName?: string | undefined
  launcherMachineType?: string | undefined
  machineType?: string | undefined
  maxWorkers?: number | undefined
  network?: string | undefined
  numWorkers?: number | undefined
  saveHeapDumpsToGcsPath?: string | undefined
  sdkContainerImage?: string | undefined
  serviceAccountEmail?: string | undefined
  stagingLocation?: string | undefined
  subnetwork?: string | undefined
  tempLocation?: string | undefined
  workerRegion?: string | undefined
  workerZone?: string | undefined
  zone?: string | undefined
}
type ParameterMetadata = {
  customMetadata?: { [x: string]: string } | undefined
  groupName?: string | undefined
  helpText?: string | undefined
  isOptional?: boolean | undefined
  label?: string | undefined
  name?: string | undefined
  paramType?:
    | 'DEFAULT'
    | 'TEXT'
    | 'GCS_READ_BUCKET'
    | 'GCS_WRITE_BUCKET'
    | 'GCS_READ_FILE'
    | 'GCS_WRITE_FILE'
    | 'GCS_READ_FOLDER'
    | 'GCS_WRITE_FOLDER'
    | 'PUBSUB_TOPIC'
    | 'PUBSUB_SUBSCRIPTION'
    | 'BIGQUERY_TABLE'
    | 'JAVASCRIPT_UDF_FILE'
    | undefined
  parentName?: string | undefined
  parentTriggerValues?: string[] | undefined
  regexes?: string[] | undefined
}
type TemplateMetadata = {
  description?: string | undefined
  name?: string | undefined
  parameters?: ParameterMetadata[] | undefined
}
type SDKInfo = {
  language?: 'UNKNOWN' | 'JAVA' | 'PYTHON' | 'GO' | undefined
  version?: string | undefined
}
type ContainerSpec = {
  defaultEnvironment?: FlexTemplateRuntimeEnvironment | undefined
  image?: string | undefined
  imageRepositoryCertPath?: string | undefined
  imageRepositoryPasswordSecretId?: string | undefined
  imageRepositoryUsernameSecretId?: string | undefined
  metadata?: TemplateMetadata | undefined
  sdkInfo?: SDKInfo | undefined
}
type LaunchFlexTemplateParameter = {
  containerSpec?: ContainerSpec | undefined
  containerSpecGcsPath?: string | undefined
  environment?: FlexTemplateRuntimeEnvironment | undefined
  jobName?: string | undefined
  launchOptions?: { [x: string]: string } | undefined
  parameters?: { [x: string]: string } | undefined
  transformNameMappings?: { [x: string]: string } | undefined
  update?: boolean | undefined
}
type LaunchFlexTemplateRequest = {
  launchParameter?: LaunchFlexTemplateParameter | undefined
  validateOnly?: boolean | undefined
}
type LaunchFlexTemplateResponse = { job?: Job | undefined }
type Point = { time?: string | undefined; value?: number | undefined }
type ProgressTimeseries = { currentProgress?: number | undefined; dataPoints?: Point[] | undefined }
type HotKeyInfo = {
  hotKeyAge?: string | undefined
  key?: string | undefined
  keyTruncated?: boolean | undefined
}
type HotKeyDebuggingInfo = { detectedHotKeys?: { [x: string]: HotKeyInfo } | undefined }
type StragglerDebuggingInfo = { hotKey?: HotKeyDebuggingInfo | undefined }
type StragglerInfo = {
  causes?: { [x: string]: StragglerDebuggingInfo } | undefined
  startTime?: string | undefined
}
type StreamingStragglerInfo = {
  dataWatermarkLag?: string | undefined
  endTime?: string | undefined
  startTime?: string | undefined
  systemWatermarkLag?: string | undefined
  workerName?: string | undefined
}
type Straggler = {
  batchStraggler?: StragglerInfo | undefined
  streamingStraggler?: StreamingStragglerInfo | undefined
}
type StragglerSummary = {
  recentStragglers?: Straggler[] | undefined
  stragglerCauseCount?: { [x: string]: string } | undefined
  totalStragglerCount?: string | undefined
}
type StageSummary = {
  endTime?: string | undefined
  metrics?: MetricUpdate[] | undefined
  progress?: ProgressTimeseries | undefined
  stageId?: string | undefined
  startTime?: string | undefined
  state?:
    | 'EXECUTION_STATE_UNKNOWN'
    | 'EXECUTION_STATE_NOT_STARTED'
    | 'EXECUTION_STATE_RUNNING'
    | 'EXECUTION_STATE_SUCCEEDED'
    | 'EXECUTION_STATE_FAILED'
    | 'EXECUTION_STATE_CANCELLED'
    | undefined
  stragglerSummary?: StragglerSummary | undefined
}
type JobExecutionDetails = {
  nextPageToken?: string | undefined
  stages?: StageSummary[] | undefined
}
type ListSnapshotsResponse = { snapshots?: Snapshot[] | undefined }
type WorkItemDetails = {
  attemptId?: string | undefined
  endTime?: string | undefined
  metrics?: MetricUpdate[] | undefined
  progress?: ProgressTimeseries | undefined
  startTime?: string | undefined
  state?:
    | 'EXECUTION_STATE_UNKNOWN'
    | 'EXECUTION_STATE_NOT_STARTED'
    | 'EXECUTION_STATE_RUNNING'
    | 'EXECUTION_STATE_SUCCEEDED'
    | 'EXECUTION_STATE_FAILED'
    | 'EXECUTION_STATE_CANCELLED'
    | undefined
  stragglerInfo?: StragglerInfo | undefined
  taskId?: string | undefined
}
type WorkerDetails = { workItems?: WorkItemDetails[] | undefined; workerName?: string | undefined }
type StageExecutionDetails = {
  nextPageToken?: string | undefined
  workers?: WorkerDetails[] | undefined
}
type DeleteSnapshotResponse = { [x: string]: unknown }
type RuntimeEnvironment = {
  additionalExperiments?: string[] | undefined
  additionalUserLabels?: { [x: string]: string } | undefined
  bypassTempDirValidation?: boolean | undefined
  enableStreamingEngine?: boolean | undefined
  ipConfiguration?: 'WORKER_IP_UNSPECIFIED' | 'WORKER_IP_PUBLIC' | 'WORKER_IP_PRIVATE' | undefined
  kmsKeyName?: string | undefined
  machineType?: string | undefined
  maxWorkers?: number | undefined
  network?: string | undefined
  numWorkers?: number | undefined
  serviceAccountEmail?: string | undefined
  subnetwork?: string | undefined
  tempLocation?: string | undefined
  workerRegion?: string | undefined
  workerZone?: string | undefined
  zone?: string | undefined
}
type CreateJobFromTemplateRequest = {
  environment?: RuntimeEnvironment | undefined
  gcsPath?: string | undefined
  jobName?: string | undefined
  location?: string | undefined
  parameters?: { [x: string]: string } | undefined
}
type RuntimeMetadata = {
  parameters?: ParameterMetadata[] | undefined
  sdkInfo?: SDKInfo | undefined
}
type GetTemplateResponse = {
  metadata?: TemplateMetadata | undefined
  runtimeMetadata?: RuntimeMetadata | undefined
  status?: Status | undefined
  templateType?: 'UNKNOWN' | 'LEGACY' | 'FLEX' | undefined
}
type LaunchTemplateParameters = {
  environment?: RuntimeEnvironment | undefined
  jobName?: string | undefined
  parameters?: { [x: string]: string } | undefined
  transformNameMapping?: { [x: string]: string } | undefined
  update?: boolean | undefined
}
type LaunchTemplateResponse = { job?: Job | undefined }
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/v1b3/projects/:projectId/WorkerMessages': {
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
        } & { json: SendWorkerMessagesRequest }
        output: SendWorkerMessagesResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1b3/projects/:projectId/jobs': {
      $get: {
        input: { param: { projectId: string } } & {
          query: {
            filter?: 'UNKNOWN' | 'ALL' | 'TERMINATED' | 'ACTIVE' | undefined
            location?: string | undefined
            name?: string | undefined
            pageSize?: number | undefined
            pageToken?: string | undefined
            view?:
              | 'JOB_VIEW_UNKNOWN'
              | 'JOB_VIEW_SUMMARY'
              | 'JOB_VIEW_ALL'
              | 'JOB_VIEW_DESCRIPTION'
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
        output: ListJobsResponse
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: { param: { projectId: string } } & {
          query: {
            location?: string | undefined
            replaceJobId?: string | undefined
            view?:
              | 'JOB_VIEW_UNKNOWN'
              | 'JOB_VIEW_SUMMARY'
              | 'JOB_VIEW_ALL'
              | 'JOB_VIEW_DESCRIPTION'
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
        } & { json: Job }
        output: Job
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1b3/projects/:projectId/jobs/:jobId': {
      $get: {
        input: { param: { projectId: string; jobId: string } } & {
          query: {
            location?: string | undefined
            view?:
              | 'JOB_VIEW_UNKNOWN'
              | 'JOB_VIEW_SUMMARY'
              | 'JOB_VIEW_ALL'
              | 'JOB_VIEW_DESCRIPTION'
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
        output: Job
        outputFormat: 'json'
        status: 200
      }
      $put: {
        input: { param: { projectId: string; jobId: string } } & {
          query: {
            location?: string | undefined
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
        } & { json: Job }
        output: Job
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1b3/projects/:projectId/jobs/:jobId/debug/getConfig': {
      $post: {
        input: { param: { projectId: string; jobId: string } } & {
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
        } & { json: GetDebugConfigRequest }
        output: GetDebugConfigResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1b3/projects/:projectId/jobs/:jobId/debug/sendCapture': {
      $post: {
        input: { param: { projectId: string; jobId: string } } & {
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
        } & { json: SendDebugCaptureRequest }
        output: SendDebugCaptureResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1b3/projects/:projectId/jobs/:jobId/messages': {
      $get: {
        input: { param: { projectId: string; jobId: string } } & {
          query: {
            endTime?: string | undefined
            location?: string | undefined
            minimumImportance?:
              | 'JOB_MESSAGE_IMPORTANCE_UNKNOWN'
              | 'JOB_MESSAGE_DEBUG'
              | 'JOB_MESSAGE_DETAILED'
              | 'JOB_MESSAGE_BASIC'
              | 'JOB_MESSAGE_WARNING'
              | 'JOB_MESSAGE_ERROR'
              | undefined
            pageSize?: number | undefined
            pageToken?: string | undefined
            startTime?: string | undefined
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
        output: ListJobMessagesResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1b3/projects/:projectId/jobs/:jobId/metrics': {
      $get: {
        input: { param: { projectId: string; jobId: string } } & {
          query: {
            location?: string | undefined
            startTime?: string | undefined
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
        output: JobMetrics
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1b3/projects/:projectId/jobs/:jobId/workItems:lease': {
      $post: {
        input: { param: { projectId: string; jobId: string } } & {
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
        } & { json: LeaseWorkItemRequest }
        output: LeaseWorkItemResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1b3/projects/:projectId/jobs/:jobId/workItems:reportStatus': {
      $post: {
        input: { param: { projectId: string; jobId: string } } & {
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
        } & { json: ReportWorkItemStatusRequest }
        output: ReportWorkItemStatusResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1b3/projects/:projectId/jobs/:jobId:snapshot': {
      $post: {
        input: { param: { projectId: string; jobId: string } } & {
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
        } & { json: SnapshotJobRequest }
        output: Snapshot
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1b3/projects/:projectId/jobs:aggregated': {
      $get: {
        input: { param: { projectId: string } } & {
          query: {
            filter?: 'UNKNOWN' | 'ALL' | 'TERMINATED' | 'ACTIVE' | undefined
            location?: string | undefined
            name?: string | undefined
            pageSize?: number | undefined
            pageToken?: string | undefined
            view?:
              | 'JOB_VIEW_UNKNOWN'
              | 'JOB_VIEW_SUMMARY'
              | 'JOB_VIEW_ALL'
              | 'JOB_VIEW_DESCRIPTION'
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
        output: ListJobsResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1b3/projects/:projectId/locations/:location/WorkerMessages': {
      $post: {
        input: { param: { projectId: string; location: string } } & {
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
        } & { json: SendWorkerMessagesRequest }
        output: SendWorkerMessagesResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1b3/projects/:projectId/locations/:location/flexTemplates:launch': {
      $post: {
        input: { param: { projectId: string; location: string } } & {
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
        } & { json: LaunchFlexTemplateRequest }
        output: LaunchFlexTemplateResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1b3/projects/:projectId/locations/:location/jobs': {
      $get: {
        input: { param: { projectId: string; location: string } } & {
          query: {
            filter?: 'UNKNOWN' | 'ALL' | 'TERMINATED' | 'ACTIVE' | undefined
            name?: string | undefined
            pageSize?: number | undefined
            pageToken?: string | undefined
            view?:
              | 'JOB_VIEW_UNKNOWN'
              | 'JOB_VIEW_SUMMARY'
              | 'JOB_VIEW_ALL'
              | 'JOB_VIEW_DESCRIPTION'
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
        output: ListJobsResponse
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: { param: { projectId: string; location: string } } & {
          query: {
            replaceJobId?: string | undefined
            view?:
              | 'JOB_VIEW_UNKNOWN'
              | 'JOB_VIEW_SUMMARY'
              | 'JOB_VIEW_ALL'
              | 'JOB_VIEW_DESCRIPTION'
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
        } & { json: Job }
        output: Job
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1b3/projects/:projectId/locations/:location/jobs/:jobId': {
      $get: {
        input: { param: { projectId: string; location: string; jobId: string } } & {
          query: {
            view?:
              | 'JOB_VIEW_UNKNOWN'
              | 'JOB_VIEW_SUMMARY'
              | 'JOB_VIEW_ALL'
              | 'JOB_VIEW_DESCRIPTION'
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
        output: Job
        outputFormat: 'json'
        status: 200
      }
      $put: {
        input: { param: { projectId: string; location: string; jobId: string } } & {
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
        } & { json: Job }
        output: Job
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1b3/projects/:projectId/locations/:location/jobs/:jobId/debug/getConfig': {
      $post: {
        input: { param: { projectId: string; location: string; jobId: string } } & {
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
        } & { json: GetDebugConfigRequest }
        output: GetDebugConfigResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1b3/projects/:projectId/locations/:location/jobs/:jobId/debug/sendCapture': {
      $post: {
        input: { param: { projectId: string; location: string; jobId: string } } & {
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
        } & { json: SendDebugCaptureRequest }
        output: SendDebugCaptureResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1b3/projects/:projectId/locations/:location/jobs/:jobId/executionDetails': {
      $get: {
        input: { param: { projectId: string; location: string; jobId: string } } & {
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
        output: JobExecutionDetails
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1b3/projects/:projectId/locations/:location/jobs/:jobId/messages': {
      $get: {
        input: { param: { projectId: string; location: string; jobId: string } } & {
          query: {
            endTime?: string | undefined
            minimumImportance?:
              | 'JOB_MESSAGE_IMPORTANCE_UNKNOWN'
              | 'JOB_MESSAGE_DEBUG'
              | 'JOB_MESSAGE_DETAILED'
              | 'JOB_MESSAGE_BASIC'
              | 'JOB_MESSAGE_WARNING'
              | 'JOB_MESSAGE_ERROR'
              | undefined
            pageSize?: number | undefined
            pageToken?: string | undefined
            startTime?: string | undefined
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
        output: ListJobMessagesResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1b3/projects/:projectId/locations/:location/jobs/:jobId/metrics': {
      $get: {
        input: { param: { projectId: string; location: string; jobId: string } } & {
          query: {
            startTime?: string | undefined
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
        output: JobMetrics
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1b3/projects/:projectId/locations/:location/jobs/:jobId/snapshots': {
      $get: {
        input: { param: { projectId: string; location: string; jobId: string } } & {
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
        output: ListSnapshotsResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1b3/projects/:projectId/locations/:location/jobs/:jobId/stages/:stageId/executionDetails': {
      $get: {
        input: {
          param: { projectId: string; location: string; jobId: string; stageId: string }
        } & {
          query: {
            endTime?: string | undefined
            pageSize?: number | undefined
            pageToken?: string | undefined
            startTime?: string | undefined
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
        output: StageExecutionDetails
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1b3/projects/:projectId/locations/:location/jobs/:jobId/workItems:lease': {
      $post: {
        input: { param: { projectId: string; location: string; jobId: string } } & {
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
        } & { json: LeaseWorkItemRequest }
        output: LeaseWorkItemResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1b3/projects/:projectId/locations/:location/jobs/:jobId/workItems:reportStatus': {
      $post: {
        input: { param: { projectId: string; location: string; jobId: string } } & {
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
        } & { json: ReportWorkItemStatusRequest }
        output: ReportWorkItemStatusResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1b3/projects/:projectId/locations/:location/jobs/:jobId:snapshot': {
      $post: {
        input: { param: { projectId: string; location: string; jobId: string } } & {
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
        } & { json: SnapshotJobRequest }
        output: Snapshot
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1b3/projects/:projectId/locations/:location/snapshots': {
      $get: {
        input: { param: { projectId: string; location: string } } & {
          query: {
            jobId?: string | undefined
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
        output: ListSnapshotsResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1b3/projects/:projectId/locations/:location/snapshots/:snapshotId': {
      $delete: {
        input: { param: { projectId: string; location: string; snapshotId: string } } & {
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
        output: DeleteSnapshotResponse
        outputFormat: 'json'
        status: 200
      }
      $get: {
        input: { param: { projectId: string; location: string; snapshotId: string } } & {
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
        output: Snapshot
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1b3/projects/:projectId/locations/:location/templates': {
      $post: {
        input: { param: { projectId: string; location: string } } & {
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
        } & { json: CreateJobFromTemplateRequest }
        output: Job
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1b3/projects/:projectId/locations/:location/templates:get': {
      $get: {
        input: { param: { projectId: string; location: string } } & {
          query: {
            gcsPath?: string | undefined
            view?: 'METADATA_ONLY' | undefined
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
        output: GetTemplateResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1b3/projects/:projectId/locations/:location/templates:launch': {
      $post: {
        input: { param: { projectId: string; location: string } } & {
          query: {
            'dynamicTemplate.gcsPath'?: string | undefined
            'dynamicTemplate.stagingLocation'?: string | undefined
            gcsPath?: string | undefined
            validateOnly?: boolean | undefined
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
        } & { json: LaunchTemplateParameters }
        output: LaunchTemplateResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1b3/projects/:projectId/snapshots': {
      $delete: {
        input: { param: { projectId: string } } & {
          query: {
            location?: string | undefined
            snapshotId?: string | undefined
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
        output: DeleteSnapshotResponse
        outputFormat: 'json'
        status: 200
      }
      $get: {
        input: { param: { projectId: string } } & {
          query: {
            jobId?: string | undefined
            location?: string | undefined
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
        output: ListSnapshotsResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1b3/projects/:projectId/snapshots/:snapshotId': {
      $get: {
        input: { param: { projectId: string; snapshotId: string } } & {
          query: {
            location?: string | undefined
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
        output: Snapshot
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1b3/projects/:projectId/templates': {
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
        } & { json: CreateJobFromTemplateRequest }
        output: Job
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1b3/projects/:projectId/templates:get': {
      $get: {
        input: { param: { projectId: string } } & {
          query: {
            gcsPath?: string | undefined
            location?: string | undefined
            view?: 'METADATA_ONLY' | undefined
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
        output: GetTemplateResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1b3/projects/:projectId/templates:launch': {
      $post: {
        input: { param: { projectId: string } } & {
          query: {
            'dynamicTemplate.gcsPath'?: string | undefined
            'dynamicTemplate.stagingLocation'?: string | undefined
            gcsPath?: string | undefined
            location?: string | undefined
            validateOnly?: boolean | undefined
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
        } & { json: LaunchTemplateParameters }
        output: LaunchTemplateResponse
        outputFormat: 'json'
        status: 200
      }
    }
  },
  '/'
>
export default routes
