type AttemptNumber = number
type JobId = bigint
type AttemptStats = {
  bytesEmitted?: bigint | undefined
  estimatedBytes?: bigint | undefined
  estimatedRecords?: bigint | undefined
  recordsCommitted?: bigint | undefined
  recordsEmitted?: bigint | undefined
  stateMessagesEmitted?: bigint | undefined
}
type AttemptStreamStats = {
  stats: AttemptStats
  streamName: string
  streamNamespace?: string | undefined
}
type SaveStatsRequestBody = {
  attemptNumber: AttemptNumber
  jobId: JobId
  stats: AttemptStats
  streamStats?: AttemptStreamStats[] | undefined
}
type InternalOperationResult = { succeeded: boolean }
type DestinationConfiguration = { [x: string]: unknown }
type SourceConfiguration = { [x: string]: unknown }
type ConnectionId = string
type StateBlob = { [x: string]: unknown }
type StreamDescriptor = { name: string; namespace?: string | undefined }
type StreamState = { streamDescriptor: StreamDescriptor; streamState?: StateBlob | undefined }
type GlobalState = { shared_state?: StateBlob | undefined; streamStates: StreamState[] }
type ConnectionStateType = 'global' | 'stream' | 'legacy' | 'not_set'
type ConnectionState = {
  connectionId: ConnectionId
  globalState?: GlobalState | undefined
  state?: StateBlob | undefined
  stateType: ConnectionStateType
  streamState?: StreamState[] | undefined
}
type AttemptSyncConfig = {
  destinationConfiguration: DestinationConfiguration
  sourceConfiguration: SourceConfiguration
  state?: ConnectionState | undefined
}
type SaveAttemptSyncConfigRequestBody = {
  attemptNumber: AttemptNumber
  jobId: JobId
  syncConfig: AttemptSyncConfig
}
type WorkflowId = string
type SetWorkflowInAttemptRequestBody = {
  attemptNumber: AttemptNumber
  jobId: JobId
  processingTaskQueue?: string | undefined
  workflowId: WorkflowId
}
type DestinationId = string
type Geography = 'auto' | 'us' | 'eu'
type NamespaceDefinitionType = 'source' | 'destination' | 'customformat'
type NonBreakingChangesPreference = 'ignore' | 'disable'
type OperationId = string
type ResourceRequirements = {
  cpu_limit?: string | undefined
  cpu_request?: string | undefined
  memory_limit?: string | undefined
  memory_request?: string | undefined
}
type ConnectionSchedule = {
  timeUnit: 'minutes' | 'hours' | 'days' | 'weeks' | 'months'
  units: bigint
}
type ConnectionScheduleData = {
  basicSchedule?:
    | { timeUnit: 'minutes' | 'hours' | 'days' | 'weeks' | 'months'; units: bigint }
    | undefined
  cron?: { cronExpression: string; cronTimeZone: string } | undefined
}
type ConnectionScheduleType = 'manual' | 'basic' | 'cron'
type SourceId = string
type ConnectionStatus = 'active' | 'inactive' | 'deprecated'
type DestinationSyncMode = 'append' | 'overwrite' | 'append_dedup'
type SelectedFieldInfo = { fieldPath?: string[] | undefined }
type SyncMode = 'full_refresh' | 'incremental'
type AirbyteStreamConfiguration = {
  aliasName?: string | undefined
  cursorField?: string[] | undefined
  destinationSyncMode: DestinationSyncMode
  fieldSelectionEnabled?: boolean | undefined
  primaryKey?: string[][] | undefined
  selected?: boolean | undefined
  selectedFields?: SelectedFieldInfo[] | undefined
  suggested?: boolean | undefined
  syncMode: SyncMode
}
type StreamJsonSchema = { [x: string]: unknown }
type AirbyteStream = {
  defaultCursorField?: string[] | undefined
  jsonSchema?: StreamJsonSchema | undefined
  name: string
  namespace?: string | undefined
  sourceDefinedCursor?: boolean | undefined
  sourceDefinedPrimaryKey?: string[][] | undefined
  supportedSyncModes?: SyncMode[] | undefined
}
type AirbyteStreamAndConfiguration = {
  config?: AirbyteStreamConfiguration | undefined
  stream?: AirbyteStream | undefined
}
type AirbyteCatalog = { streams: AirbyteStreamAndConfiguration[] }
type ConnectionCreate = {
  destinationId: DestinationId
  geography?: Geography | undefined
  name?: string | undefined
  namespaceDefinition?: NamespaceDefinitionType | undefined
  namespaceFormat?: string | undefined
  nonBreakingChangesPreference?: NonBreakingChangesPreference | undefined
  notifySchemaChanges?: boolean | undefined
  operationIds?: OperationId[] | undefined
  prefix?: string | undefined
  resourceRequirements?: ResourceRequirements | undefined
  schedule?: ConnectionSchedule | undefined
  scheduleData?: ConnectionScheduleData | undefined
  scheduleType?: ConnectionScheduleType | undefined
  sourceCatalogId?: string | undefined
  sourceId: SourceId
  status: ConnectionStatus
  syncCatalog?: AirbyteCatalog | undefined
}
type ConnectionRead = {
  breakingChange: boolean
  connectionId: ConnectionId
  destinationId: DestinationId
  geography?: Geography | undefined
  name: string
  namespaceDefinition?: NamespaceDefinitionType | undefined
  namespaceFormat?: string | undefined
  nonBreakingChangesPreference?: NonBreakingChangesPreference | undefined
  notifySchemaChanges?: boolean | undefined
  operationIds?: OperationId[] | undefined
  prefix?: string | undefined
  resourceRequirements?: ResourceRequirements | undefined
  schedule?: ConnectionSchedule | undefined
  scheduleData?: ConnectionScheduleData | undefined
  scheduleType?: ConnectionScheduleType | undefined
  sourceCatalogId?: string | undefined
  sourceId: SourceId
  status: ConnectionStatus
  syncCatalog: AirbyteCatalog
}
type InvalidInputProperty = {
  invalidValue?: string | undefined
  message?: string | undefined
  propertyPath: string
}
type InvalidInputExceptionInfo = {
  exceptionClassName?: string | undefined
  exceptionStack?: string[] | undefined
  message: string
  validationErrors: InvalidInputProperty[]
}
type ConnectionIdRequestBody = { connectionId: ConnectionId }
type NotFoundKnownExceptionInfo = {
  exceptionClassName?: string | undefined
  exceptionStack?: string[] | undefined
  id?: string | undefined
  message: string
  rootCauseExceptionClassName?: string | undefined
  rootCauseExceptionStack?: string[] | undefined
}
type WorkspaceId = string
type WorkspaceIdRequestBody = { workspaceId: WorkspaceId }
type ConnectionReadList = { connections: ConnectionRead[] }
type AttemptFailureOrigin =
  | 'source'
  | 'destination'
  | 'replication'
  | 'persistence'
  | 'normalization'
  | 'dbt'
  | 'airbyte_platform'
  | 'unknown'
type AttemptFailureType = 'config_error' | 'system_error' | 'manual_cancellation' | 'refresh_schema'
type AttemptFailureReason = {
  externalMessage?: string | undefined
  failureOrigin?: AttemptFailureOrigin | undefined
  failureType?: AttemptFailureType | undefined
  internalMessage?: string | undefined
  retryable?: boolean | undefined
  stacktrace?: string | undefined
  timestamp: bigint
}
type AttemptFailureSummary = {
  failures: AttemptFailureReason[]
  partialSuccess?: boolean | undefined
}
type AttemptStatus = 'running' | 'failed' | 'succeeded'
type AttemptRead = {
  bytesSynced?: bigint | undefined
  createdAt: bigint
  endedAt?: bigint | undefined
  failureSummary?: AttemptFailureSummary | undefined
  id: bigint
  recordsSynced?: bigint | undefined
  status: AttemptStatus
  streamStats?: AttemptStreamStats[] | undefined
  totalStats?: AttemptStats | undefined
  updatedAt: bigint
}
type LogRead = { logLines: string[] }
type AttemptInfoRead = { attempt: AttemptRead; logs: LogRead }
type JobConfigType =
  | 'check_connection_source'
  | 'check_connection_destination'
  | 'discover_schema'
  | 'get_spec'
  | 'sync'
  | 'reset_connection'
type ResetConfig = { streamsToReset?: StreamDescriptor[] | undefined }
type JobStatus = 'pending' | 'running' | 'incomplete' | 'failed' | 'succeeded' | 'cancelled'
type JobRead = {
  configId: string
  configType: JobConfigType
  createdAt: bigint
  id: JobId
  resetConfig?: ResetConfig | undefined
  startedAt?: bigint | undefined
  status: JobStatus
  updatedAt: bigint
}
type JobInfoRead = { attempts: AttemptInfoRead[]; job: JobRead }
type DestinationDefinitionId = string
type DestinationSearch = {
  connectionConfiguration?: DestinationConfiguration | undefined
  destinationDefinitionId?: DestinationDefinitionId | undefined
  destinationId?: DestinationId | undefined
  destinationName?: string | undefined
  name?: string | undefined
  workspaceId?: WorkspaceId | undefined
}
type SourceDefinitionId = string
type SourceSearch = {
  connectionConfiguration?: SourceConfiguration | undefined
  name?: string | undefined
  sourceDefinitionId?: SourceDefinitionId | undefined
  sourceId?: SourceId | undefined
  sourceName?: string | undefined
  workspaceId?: WorkspaceId | undefined
}
type ConnectionSearch = {
  connectionId?: ConnectionId | undefined
  destination?: DestinationSearch | undefined
  destinationId?: DestinationId | undefined
  name?: string | undefined
  namespaceDefinition?: NamespaceDefinitionType | undefined
  namespaceFormat?: string | undefined
  prefix?: string | undefined
  schedule?: ConnectionSchedule | undefined
  scheduleData?: ConnectionScheduleData | undefined
  scheduleType?: ConnectionScheduleType | undefined
  source?: SourceSearch | undefined
  sourceId?: SourceId | undefined
  status?: ConnectionStatus | undefined
}
type ConnectionUpdate = {
  breakingChange?: boolean | undefined
  connectionId: ConnectionId
  geography?: Geography | undefined
  name?: string | undefined
  namespaceDefinition?: NamespaceDefinitionType | undefined
  namespaceFormat?: string | undefined
  nonBreakingChangesPreference?: NonBreakingChangesPreference | undefined
  notifySchemaChanges?: boolean | undefined
  operationIds?: OperationId[] | undefined
  prefix?: string | undefined
  resourceRequirements?: ResourceRequirements | undefined
  schedule?: ConnectionSchedule | undefined
  scheduleData?: ConnectionScheduleData | undefined
  scheduleType?: ConnectionScheduleType | undefined
  sourceCatalogId?: string | undefined
  status?: ConnectionStatus | undefined
  syncCatalog?: AirbyteCatalog | undefined
}
type DestinationDefinitionIdWithWorkspaceId = {
  destinationDefinitionId: DestinationDefinitionId
  workspaceId: WorkspaceId
}
type OAuthConfiguration = { [x: string]: unknown }
type OAuthConfigSpecification = {
  completeOAuthOutputSpecification?: OAuthConfiguration | undefined
  completeOAuthServerInputSpecification?: OAuthConfiguration | undefined
  completeOAuthServerOutputSpecification?: OAuthConfiguration | undefined
  oauthUserInputFromConnectorConfigSpecification?: OAuthConfiguration | undefined
}
type AdvancedAuth = {
  authFlowType?: 'oauth2.0' | 'oauth1.0' | undefined
  oauthConfigSpecification?: OAuthConfigSpecification | undefined
  predicateKey?: string[] | undefined
  predicateValue?: string | undefined
}
type OAuth2Specification = {
  oauthFlowInitParameters: string[][]
  oauthFlowOutputParameters: string[][]
  rootObject: { [x: string]: unknown }[]
}
type AuthSpecification = {
  auth_type?: 'oauth2.0' | undefined
  oauth2Specification?: OAuth2Specification | undefined
}
type DestinationDefinitionSpecification = { [x: string]: unknown }
type SynchronousJobRead = {
  configId?: string | undefined
  configType: JobConfigType
  connectorConfigurationUpdated?: boolean | undefined
  createdAt: bigint
  endedAt: bigint
  id: string
  logs?: LogRead | undefined
  succeeded: boolean
}
type DestinationDefinitionSpecificationRead = {
  advancedAuth?: AdvancedAuth | undefined
  authSpecification?: AuthSpecification | undefined
  connectionSpecification?: DestinationDefinitionSpecification | undefined
  destinationDefinitionId: DestinationDefinitionId
  documentationUrl?: string | undefined
  jobInfo: SynchronousJobRead
  supportedDestinationSyncModes?: DestinationSyncMode[] | undefined
}
type JobType =
  | 'get_spec'
  | 'check_connection'
  | 'discover_schema'
  | 'sync'
  | 'reset_connection'
  | 'connection_updater'
  | 'replicate'
type JobTypeResourceLimit = { jobType: JobType; resourceRequirements: ResourceRequirements }
type ActorDefinitionResourceRequirements = {
  default?: ResourceRequirements | undefined
  jobSpecific?: JobTypeResourceLimit[] | undefined
}
type DestinationDefinitionCreate = {
  dockerImageTag: string
  dockerRepository: string
  documentationUrl: string
  icon?: string | undefined
  name: string
  resourceRequirements?: ActorDefinitionResourceRequirements | undefined
}
type CustomDestinationDefinitionCreate = {
  destinationDefinition: DestinationDefinitionCreate
  workspaceId: WorkspaceId
}
type NormalizationDestinationDefinitionConfig = {
  normalizationIntegrationType?: string | undefined
  normalizationRepository?: string | undefined
  normalizationTag?: string | undefined
  supported: boolean
}
type ReleaseStage = 'alpha' | 'beta' | 'generally_available' | 'custom'
type DestinationDefinitionRead = {
  destinationDefinitionId: DestinationDefinitionId
  dockerImageTag: string
  dockerRepository: string
  documentationUrl: string
  icon?: string | undefined
  name: string
  normalizationConfig: NormalizationDestinationDefinitionConfig
  protocolVersion?: string | undefined
  releaseDate?: string | undefined
  releaseStage?: ReleaseStage | undefined
  resourceRequirements?: ActorDefinitionResourceRequirements | undefined
  supportsDbt: boolean
}
type DestinationDefinitionIdRequestBody = { destinationDefinitionId: DestinationDefinitionId }
type PrivateDestinationDefinitionRead = {
  destinationDefinition: DestinationDefinitionRead
  granted: boolean
}
type DestinationDefinitionReadList = { destinationDefinitions: DestinationDefinitionRead[] }
type PrivateDestinationDefinitionReadList = {
  destinationDefinitions: PrivateDestinationDefinitionRead[]
}
type DestinationDefinitionUpdate = {
  destinationDefinitionId: DestinationDefinitionId
  dockerImageTag?: string | undefined
  resourceRequirements?: ActorDefinitionResourceRequirements | undefined
}
type CompleteDestinationOAuthRequest = {
  destinationDefinitionId: DestinationDefinitionId
  destinationId?: DestinationId | undefined
  oAuthInputConfiguration?: OAuthConfiguration | undefined
  queryParams?: { [x: string]: unknown } | undefined
  redirectUrl?: string | undefined
  workspaceId: WorkspaceId
}
type CompleteOAuthResponse = { [x: string]: unknown }
type DestinationOauthConsentRequest = {
  destinationDefinitionId: DestinationDefinitionId
  destinationId?: DestinationId | undefined
  oAuthInputConfiguration?: OAuthConfiguration | undefined
  redirectUrl: string
  workspaceId: WorkspaceId
}
type OAuthConsentRead = { consentUrl: string }
type SetInstancewideDestinationOauthParamsRequestBody = {
  destinationDefinitionId: DestinationDefinitionId
  params: { [x: string]: unknown }
}
type KnownExceptionInfo = {
  exceptionClassName?: string | undefined
  exceptionStack?: string[] | undefined
  message: string
  rootCauseExceptionClassName?: string | undefined
  rootCauseExceptionStack?: string[] | undefined
}
type DestinationIdRequestBody = { destinationId: DestinationId }
type CheckConnectionRead = {
  jobInfo: SynchronousJobRead
  message?: string | undefined
  status: 'succeeded' | 'failed'
}
type DestinationUpdate = {
  connectionConfiguration: DestinationConfiguration
  destinationId: DestinationId
  name: string
}
type DestinationCloneConfiguration = {
  connectionConfiguration?: DestinationConfiguration | undefined
  name?: string | undefined
}
type DestinationCloneRequestBody = {
  destinationCloneId: DestinationId
  destinationConfiguration?: DestinationCloneConfiguration | undefined
}
type DestinationRead = {
  connectionConfiguration: DestinationConfiguration
  destinationDefinitionId: DestinationDefinitionId
  destinationId: DestinationId
  destinationName: string
  icon?: string | undefined
  name: string
  workspaceId: WorkspaceId
}
type DestinationCreate = {
  connectionConfiguration: DestinationConfiguration
  destinationDefinitionId: DestinationDefinitionId
  name: string
  workspaceId: WorkspaceId
}
type DestinationReadList = { destinations: DestinationRead[] }
type HealthCheckRead = { available: boolean }
type JobIdRequestBody = { id: JobId }
type SourceDefinitionRead = {
  dockerImageTag: string
  dockerRepository: string
  documentationUrl?: string | undefined
  icon?: string | undefined
  name: string
  protocolVersion?: string | undefined
  releaseDate?: string | undefined
  releaseStage?: ReleaseStage | undefined
  resourceRequirements?: ActorDefinitionResourceRequirements | undefined
  sourceDefinitionId: SourceDefinitionId
  sourceType?: 'api' | 'file' | 'database' | 'custom' | undefined
}
type JobDebugRead = {
  airbyteVersion: string
  configId: string
  configType: JobConfigType
  destinationDefinition: DestinationDefinitionRead
  id: JobId
  sourceDefinition: SourceDefinitionRead
  status: JobStatus
}
type WorkflowStateRead = { running: boolean }
type JobDebugInfoRead = {
  attempts: AttemptInfoRead[]
  job: JobDebugRead
  workflowState?: WorkflowStateRead | undefined
}
type JobOptionalRead = { job?: JobRead | undefined }
type JobInfoLightRead = { job: JobRead }
type AttemptNormalizationStatusRead = {
  attemptNumber?: AttemptNumber | undefined
  hasNormalizationFailed?: boolean | undefined
  hasRecordsCommitted?: boolean | undefined
  recordsCommitted?: bigint | undefined
}
type AttemptNormalizationStatusReadList = {
  attemptNormalizationStatuses?: AttemptNormalizationStatusRead[] | undefined
}
type Pagination = { pageSize?: number | undefined; rowOffset?: number | undefined }
type JobListRequestBody = {
  configId: string
  configTypes: JobConfigType[]
  includingJobId?: JobId | undefined
  pagination?: Pagination | undefined
}
type JobWithAttemptsRead = { attempts?: AttemptRead[] | undefined; job?: JobRead | undefined }
type JobReadList = { jobs: JobWithAttemptsRead[]; totalJobCount: bigint }
type LogType = 'server' | 'scheduler'
type LogsRequestBody = { logType: LogType }
type CustomerioNotificationConfiguration = { [x: string]: unknown }
type NotificationType = 'slack' | 'customerio'
type SlackNotificationConfiguration = { webhook: string }
type Notification = {
  customerioConfiguration?: CustomerioNotificationConfiguration | undefined
  notificationType: NotificationType
  sendOnFailure: boolean
  sendOnSuccess: boolean
  slackConfiguration?: SlackNotificationConfiguration | undefined
}
type NotificationRead = { message?: string | undefined; status: 'succeeded' | 'failed' }
type OperatorDbt = {
  dbtArguments?: string | undefined
  dockerImage?: string | undefined
  gitRepoBranch?: string | undefined
  gitRepoUrl: string
}
type OperatorNormalization = { option?: 'basic' | undefined }
type OperatorType = 'normalization' | 'dbt' | 'webhook'
type OperatorWebhook = {
  dbtCloud?: { accountId: number; jobId: number } | undefined
  executionBody?: string | undefined
  executionUrl?: string | undefined
  webhookConfigId?: string | undefined
  webhookType?: 'dbtCloud' | undefined
}
type OperatorConfiguration = {
  dbt?: OperatorDbt | undefined
  normalization?: OperatorNormalization | undefined
  operatorType: OperatorType
  webhook?: OperatorWebhook | undefined
}
type CheckOperationRead = { message?: string | undefined; status: 'succeeded' | 'failed' }
type OperationCreate = {
  name: string
  operatorConfiguration: OperatorConfiguration
  workspaceId: WorkspaceId
}
type OperationRead = {
  name: string
  operationId: OperationId
  operatorConfiguration: OperatorConfiguration
  workspaceId: WorkspaceId
}
type OperationIdRequestBody = { operationId: OperationId }
type OperationReadList = { operations: OperationRead[] }
type OperationUpdate = {
  name: string
  operationId: OperationId
  operatorConfiguration: OperatorConfiguration
}
type DestinationCoreConfig = {
  connectionConfiguration: DestinationConfiguration
  destinationDefinitionId: DestinationDefinitionId
  destinationId?: DestinationId | undefined
  workspaceId: WorkspaceId
}
type SourceCoreConfig = {
  connectionConfiguration: SourceConfiguration
  sourceDefinitionId: SourceDefinitionId
  sourceId?: SourceId | undefined
  workspaceId: WorkspaceId
}
type FieldSchema = { [x: string]: unknown }
type FieldAdd = { schema?: FieldSchema | undefined }
type FieldName = string[]
type FieldRemove = { schema?: FieldSchema | undefined }
type FieldSchemaUpdate = { newSchema: FieldSchema; oldSchema: FieldSchema }
type FieldTransform = {
  addField?: FieldAdd | undefined
  breaking: boolean
  fieldName: FieldName
  removeField?: FieldRemove | undefined
  transformType: 'add_field' | 'remove_field' | 'update_field_schema'
  updateFieldSchema?: FieldSchemaUpdate | undefined
}
type StreamTransform = {
  streamDescriptor: StreamDescriptor
  transformType: 'add_stream' | 'remove_stream' | 'update_stream'
  updateStream?: FieldTransform[] | undefined
}
type CatalogDiff = { transforms: StreamTransform[] }
type SourceDiscoverSchemaRead = {
  breakingChange?: boolean | undefined
  catalog?: AirbyteCatalog | undefined
  catalogDiff?: CatalogDiff | undefined
  catalogId?: string | undefined
  connectionStatus?: ConnectionStatus | undefined
  jobInfo: SynchronousJobRead
}
type SourceDefinitionIdWithWorkspaceId = {
  sourceDefinitionId: SourceDefinitionId
  workspaceId: WorkspaceId
}
type SourceDefinitionSpecification = { [x: string]: unknown }
type SourceDefinitionSpecificationRead = {
  advancedAuth?: AdvancedAuth | undefined
  authSpecification?: AuthSpecification | undefined
  connectionSpecification?: SourceDefinitionSpecification | undefined
  documentationUrl?: string | undefined
  jobInfo: SynchronousJobRead
  sourceDefinitionId: SourceDefinitionId
}
type SourceDefinitionCreate = {
  dockerImageTag: string
  dockerRepository: string
  documentationUrl: string
  icon?: string | undefined
  name: string
  resourceRequirements?: ActorDefinitionResourceRequirements | undefined
}
type CustomSourceDefinitionCreate = {
  sourceDefinition: SourceDefinitionCreate
  workspaceId: WorkspaceId
}
type SourceDefinitionIdRequestBody = { sourceDefinitionId: SourceDefinitionId }
type PrivateSourceDefinitionRead = { granted: boolean; sourceDefinition: SourceDefinitionRead }
type SourceDefinitionReadList = { sourceDefinitions: SourceDefinitionRead[] }
type PrivateSourceDefinitionReadList = { sourceDefinitions: PrivateSourceDefinitionRead[] }
type SourceDefinitionUpdate = {
  dockerImageTag: string
  resourceRequirements?: ActorDefinitionResourceRequirements | undefined
  sourceDefinitionId: SourceDefinitionId
}
type CompleteSourceOauthRequest = {
  oAuthInputConfiguration?: OAuthConfiguration | undefined
  queryParams?: { [x: string]: unknown } | undefined
  redirectUrl?: string | undefined
  sourceDefinitionId: SourceDefinitionId
  sourceId?: SourceId | undefined
  workspaceId: WorkspaceId
}
type SourceOauthConsentRequest = {
  oAuthInputConfiguration?: OAuthConfiguration | undefined
  redirectUrl: string
  sourceDefinitionId: SourceDefinitionId
  sourceId?: SourceId | undefined
  workspaceId: WorkspaceId
}
type SetInstancewideSourceOauthParamsRequestBody = {
  params: { [x: string]: unknown }
  sourceDefinitionId: SourceDefinitionId
}
type SourceIdRequestBody = { sourceId: SourceId }
type SourceUpdate = {
  connectionConfiguration: SourceConfiguration
  name: string
  sourceId: SourceId
}
type SourceCloneConfiguration = {
  connectionConfiguration?: SourceConfiguration | undefined
  name?: string | undefined
}
type SourceCloneRequestBody = {
  sourceCloneId: SourceId
  sourceConfiguration?: SourceCloneConfiguration | undefined
}
type SourceRead = {
  connectionConfiguration: SourceConfiguration
  icon?: string | undefined
  name: string
  sourceDefinitionId: SourceDefinitionId
  sourceId: SourceId
  sourceName: string
  workspaceId: WorkspaceId
}
type SourceCreate = {
  connectionConfiguration: SourceConfiguration
  name: string
  sourceDefinitionId: SourceDefinitionId
  workspaceId: WorkspaceId
}
type SourceDiscoverSchemaRequestBody = {
  connectionId?: string | undefined
  disable_cache?: boolean | undefined
  notifySchemaChange?: boolean | undefined
  sourceId: SourceId
}
type SourceReadList = { sources: SourceRead[] }
type ActorCatalogWithUpdatedAt = {
  catalog?: { [x: string]: unknown } | undefined
  updatedAt?: bigint | undefined
}
type SourceDiscoverSchemaWriteRequestBody = {
  catalog: AirbyteCatalog
  configurationHash?: string | undefined
  connectorVersion?: string | undefined
  sourceId?: SourceId | undefined
}
type DiscoverCatalogResult = { catalogId: string }
type ConnectionStateCreateOrUpdate = {
  connectionId: ConnectionId
  connectionState: ConnectionState
}
type WebBackendCheckUpdatesRead = { destinationDefinitions: number; sourceDefinitions: number }
type WebBackendConnectionCreate = {
  destinationId: DestinationId
  geography?: Geography | undefined
  name?: string | undefined
  namespaceDefinition?: NamespaceDefinitionType | undefined
  namespaceFormat?: string | undefined
  nonBreakingChangesPreference?: NonBreakingChangesPreference | undefined
  operationIds?: OperationId[] | undefined
  operations?: OperationCreate[] | undefined
  prefix?: string | undefined
  resourceRequirements?: ResourceRequirements | undefined
  schedule?: ConnectionSchedule | undefined
  scheduleData?: ConnectionScheduleData | undefined
  scheduleType?: ConnectionScheduleType | undefined
  sourceCatalogId?: string | undefined
  sourceId: SourceId
  status: ConnectionStatus
  syncCatalog?: AirbyteCatalog | undefined
}
type JobCreatedAt = bigint
type SchemaChange = 'no_change' | 'non_breaking' | 'breaking'
type WebBackendConnectionRead = {
  catalogDiff?: CatalogDiff | undefined
  catalogId?: string | undefined
  connectionId: ConnectionId
  destination: DestinationRead
  destinationId: DestinationId
  geography?: Geography | undefined
  isSyncing: boolean
  latestSyncJobCreatedAt?: JobCreatedAt | undefined
  latestSyncJobStatus?: JobStatus | undefined
  name: string
  namespaceDefinition?: NamespaceDefinitionType | undefined
  namespaceFormat?: string | undefined
  nonBreakingChangesPreference: NonBreakingChangesPreference
  notifySchemaChanges: boolean
  operationIds?: OperationId[] | undefined
  operations?: OperationRead[] | undefined
  prefix?: string | undefined
  resourceRequirements?: ResourceRequirements | undefined
  schedule?: ConnectionSchedule | undefined
  scheduleData?: ConnectionScheduleData | undefined
  scheduleType?: ConnectionScheduleType | undefined
  schemaChange: SchemaChange
  source: SourceRead
  sourceId: SourceId
  status: ConnectionStatus
  syncCatalog: AirbyteCatalog
}
type WebBackendConnectionRequestBody = {
  connectionId: ConnectionId
  withRefreshedCatalog?: boolean | undefined
}
type WebBackendConnectionListRequestBody = {
  destinationId?: DestinationId[] | undefined
  sourceId?: SourceId[] | undefined
  workspaceId: WorkspaceId
}
type DestinationSnippetRead = {
  destinationDefinitionId: DestinationDefinitionId
  destinationId: DestinationId
  destinationName: string
  icon?: string | undefined
  name: string
}
type SourceSnippetRead = {
  icon?: string | undefined
  name: string
  sourceDefinitionId: SourceDefinitionId
  sourceId: SourceId
  sourceName: string
}
type WebBackendConnectionListItem = {
  connectionId: ConnectionId
  destination: DestinationSnippetRead
  isSyncing: boolean
  latestSyncJobCreatedAt?: JobCreatedAt | undefined
  latestSyncJobStatus?: JobStatus | undefined
  name: string
  scheduleData?: ConnectionScheduleData | undefined
  scheduleType?: ConnectionScheduleType | undefined
  schemaChange: SchemaChange
  source: SourceSnippetRead
  status: ConnectionStatus
}
type WebBackendConnectionReadList = { connections: WebBackendConnectionListItem[] }
type WebBackendOperationCreateOrUpdate = {
  name: string
  operationId?: OperationId | undefined
  operatorConfiguration: OperatorConfiguration
  workspaceId: WorkspaceId
}
type WebBackendConnectionUpdate = {
  connectionId: ConnectionId
  geography?: Geography | undefined
  name?: string | undefined
  namespaceDefinition?: NamespaceDefinitionType | undefined
  namespaceFormat?: string | undefined
  nonBreakingChangesPreference?: NonBreakingChangesPreference | undefined
  notifySchemaChanges?: boolean | undefined
  operations?: WebBackendOperationCreateOrUpdate[] | undefined
  prefix?: string | undefined
  resourceRequirements?: ResourceRequirements | undefined
  schedule?: ConnectionSchedule | undefined
  scheduleData?: ConnectionScheduleData | undefined
  scheduleType?: ConnectionScheduleType | undefined
  skipReset?: boolean | undefined
  sourceCatalogId?: string | undefined
  status?: ConnectionStatus | undefined
  syncCatalog?: AirbyteCatalog | undefined
}
type WebBackendGeographiesListResult = { geographies: Geography[] }
type WebBackendWorkspaceState = { workspaceId: WorkspaceId }
type WebBackendWorkspaceStateResult = {
  hasConnections: boolean
  hasDestinations: boolean
  hasSources: boolean
}
type WebhookConfigWrite = {
  authToken?: string | undefined
  name?: string | undefined
  validationUrl?: string | undefined
}
type WorkspaceCreate = {
  anonymousDataCollection?: boolean | undefined
  defaultGeography?: Geography | undefined
  displaySetupWizard?: boolean | undefined
  email?: string | undefined
  name: string
  news?: boolean | undefined
  notifications?: Notification[] | undefined
  securityUpdates?: boolean | undefined
  webhookConfigs?: WebhookConfigWrite[] | undefined
}
type CustomerId = string
type WebhookConfigRead = { id: string; name?: string | undefined }
type WorkspaceRead = {
  anonymousDataCollection?: boolean | undefined
  customerId: CustomerId
  defaultGeography?: Geography | undefined
  displaySetupWizard?: boolean | undefined
  email?: string | undefined
  feedbackDone?: boolean | undefined
  firstCompletedSync?: boolean | undefined
  initialSetupComplete: boolean
  name: string
  news?: boolean | undefined
  notifications?: Notification[] | undefined
  securityUpdates?: boolean | undefined
  slug: string
  webhookConfigs?: WebhookConfigRead[] | undefined
  workspaceId: WorkspaceId
}
type SlugRequestBody = { slug: string }
type WorkspaceReadList = { workspaces: WorkspaceRead[] }
type WorkspaceGiveFeedback = { workspaceId: WorkspaceId }
type WorkspaceUpdate = {
  anonymousDataCollection?: boolean | undefined
  defaultGeography?: Geography | undefined
  displaySetupWizard?: boolean | undefined
  email?: string | undefined
  initialSetupComplete?: boolean | undefined
  news?: boolean | undefined
  notifications?: Notification[] | undefined
  securityUpdates?: boolean | undefined
  webhookConfigs?: WebhookConfigWrite[] | undefined
  workspaceId: WorkspaceId
}
type WorkspaceUpdateName = { name: string; workspaceId: WorkspaceId }
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/v1/attempt/save_stats': {
      $post: {
        input: { json: SaveStatsRequestBody }
        output: InternalOperationResult
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/attempt/save_sync_config': {
      $post: {
        input: { json: SaveAttemptSyncConfigRequestBody }
        output: InternalOperationResult
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/attempt/set_workflow_in_attempt': {
      $post: {
        input: { json: SetWorkflowInAttemptRequestBody }
        output: InternalOperationResult
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/connections/create': {
      $post:
        | {
            input: { json: ConnectionCreate }
            output: ConnectionRead
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: ConnectionCreate }
            output: InvalidInputExceptionInfo
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/v1/connections/delete': {
      $post:
        | {
            input: { json: ConnectionIdRequestBody }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { json: ConnectionIdRequestBody }
            output: NotFoundKnownExceptionInfo
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { json: ConnectionIdRequestBody }
            output: InvalidInputExceptionInfo
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/v1/connections/get': {
      $post:
        | {
            input: { json: ConnectionIdRequestBody }
            output: ConnectionRead
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: ConnectionIdRequestBody }
            output: NotFoundKnownExceptionInfo
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { json: ConnectionIdRequestBody }
            output: InvalidInputExceptionInfo
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/v1/connections/list': {
      $post:
        | {
            input: { json: WorkspaceIdRequestBody }
            output: ConnectionReadList
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: WorkspaceIdRequestBody }
            output: NotFoundKnownExceptionInfo
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { json: WorkspaceIdRequestBody }
            output: InvalidInputExceptionInfo
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/v1/connections/list_all': {
      $post:
        | {
            input: { json: WorkspaceIdRequestBody }
            output: ConnectionReadList
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: WorkspaceIdRequestBody }
            output: NotFoundKnownExceptionInfo
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { json: WorkspaceIdRequestBody }
            output: InvalidInputExceptionInfo
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/v1/connections/reset': {
      $post:
        | {
            input: { json: ConnectionIdRequestBody }
            output: JobInfoRead
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: ConnectionIdRequestBody }
            output: NotFoundKnownExceptionInfo
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { json: ConnectionIdRequestBody }
            output: InvalidInputExceptionInfo
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/v1/connections/search': {
      $post:
        | {
            input: { json: ConnectionSearch }
            output: ConnectionReadList
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: ConnectionSearch }
            output: InvalidInputExceptionInfo
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/v1/connections/sync': {
      $post:
        | {
            input: { json: ConnectionIdRequestBody }
            output: JobInfoRead
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: ConnectionIdRequestBody }
            output: NotFoundKnownExceptionInfo
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { json: ConnectionIdRequestBody }
            output: InvalidInputExceptionInfo
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/v1/connections/update': {
      $post:
        | {
            input: { json: ConnectionUpdate }
            output: ConnectionRead
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: ConnectionUpdate }
            output: InvalidInputExceptionInfo
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/v1/destination_definition_specifications/get': {
      $post:
        | {
            input: { json: DestinationDefinitionIdWithWorkspaceId }
            output: DestinationDefinitionSpecificationRead
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: DestinationDefinitionIdWithWorkspaceId }
            output: NotFoundKnownExceptionInfo
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { json: DestinationDefinitionIdWithWorkspaceId }
            output: InvalidInputExceptionInfo
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/v1/destination_definitions/create_custom': {
      $post:
        | {
            input: { json: CustomDestinationDefinitionCreate }
            output: DestinationDefinitionRead
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: CustomDestinationDefinitionCreate }
            output: InvalidInputExceptionInfo
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/v1/destination_definitions/delete': {
      $post:
        | {
            input: { json: DestinationDefinitionIdRequestBody }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { json: DestinationDefinitionIdRequestBody }
            output: NotFoundKnownExceptionInfo
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { json: DestinationDefinitionIdRequestBody }
            output: InvalidInputExceptionInfo
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/v1/destination_definitions/get': {
      $post:
        | {
            input: { json: DestinationDefinitionIdRequestBody }
            output: DestinationDefinitionRead
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: DestinationDefinitionIdRequestBody }
            output: NotFoundKnownExceptionInfo
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { json: DestinationDefinitionIdRequestBody }
            output: InvalidInputExceptionInfo
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/v1/destination_definitions/get_for_workspace': {
      $post:
        | {
            input: { json: DestinationDefinitionIdWithWorkspaceId }
            output: DestinationDefinitionRead
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: DestinationDefinitionIdWithWorkspaceId }
            output: NotFoundKnownExceptionInfo
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { json: DestinationDefinitionIdWithWorkspaceId }
            output: InvalidInputExceptionInfo
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/v1/destination_definitions/grant_definition': {
      $post:
        | {
            input: { json: DestinationDefinitionIdWithWorkspaceId }
            output: PrivateDestinationDefinitionRead
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: DestinationDefinitionIdWithWorkspaceId }
            output: NotFoundKnownExceptionInfo
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { json: DestinationDefinitionIdWithWorkspaceId }
            output: InvalidInputExceptionInfo
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/v1/destination_definitions/list': {
      $post: { input: {}; output: DestinationDefinitionReadList; outputFormat: 'json'; status: 200 }
    }
  } & {
    '/v1/destination_definitions/list_for_workspace': {
      $post: {
        input: { json: WorkspaceIdRequestBody }
        output: DestinationDefinitionReadList
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/destination_definitions/list_latest': {
      $post: { input: {}; output: DestinationDefinitionReadList; outputFormat: 'json'; status: 200 }
    }
  } & {
    '/v1/destination_definitions/list_private': {
      $post: {
        input: { json: WorkspaceIdRequestBody }
        output: PrivateDestinationDefinitionReadList
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/destination_definitions/revoke_definition': {
      $post:
        | {
            input: { json: DestinationDefinitionIdWithWorkspaceId }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { json: DestinationDefinitionIdWithWorkspaceId }
            output: NotFoundKnownExceptionInfo
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { json: DestinationDefinitionIdWithWorkspaceId }
            output: InvalidInputExceptionInfo
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/v1/destination_definitions/update': {
      $post:
        | {
            input: { json: DestinationDefinitionUpdate }
            output: DestinationDefinitionRead
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: DestinationDefinitionUpdate }
            output: NotFoundKnownExceptionInfo
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { json: DestinationDefinitionUpdate }
            output: InvalidInputExceptionInfo
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/v1/destination_oauths/complete_oauth': {
      $post:
        | {
            input: { json: CompleteDestinationOAuthRequest }
            output: CompleteOAuthResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: CompleteDestinationOAuthRequest }
            output: NotFoundKnownExceptionInfo
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { json: CompleteDestinationOAuthRequest }
            output: InvalidInputExceptionInfo
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/v1/destination_oauths/get_consent_url': {
      $post:
        | {
            input: { json: DestinationOauthConsentRequest }
            output: OAuthConsentRead
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: DestinationOauthConsentRequest }
            output: NotFoundKnownExceptionInfo
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { json: DestinationOauthConsentRequest }
            output: InvalidInputExceptionInfo
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/v1/destination_oauths/oauth_params/create': {
      $post:
        | {
            input: { json: SetInstancewideDestinationOauthParamsRequestBody }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { json: SetInstancewideDestinationOauthParamsRequestBody }
            output: KnownExceptionInfo
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { json: SetInstancewideDestinationOauthParamsRequestBody }
            output: NotFoundKnownExceptionInfo
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/v1/destinations/check_connection': {
      $post:
        | {
            input: { json: DestinationIdRequestBody }
            output: CheckConnectionRead
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: DestinationIdRequestBody }
            output: NotFoundKnownExceptionInfo
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { json: DestinationIdRequestBody }
            output: InvalidInputExceptionInfo
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/v1/destinations/check_connection_for_update': {
      $post:
        | {
            input: { json: DestinationUpdate }
            output: CheckConnectionRead
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: DestinationUpdate }
            output: NotFoundKnownExceptionInfo
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { json: DestinationUpdate }
            output: InvalidInputExceptionInfo
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/v1/destinations/clone': {
      $post:
        | {
            input: { json: DestinationCloneRequestBody }
            output: DestinationRead
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: DestinationCloneRequestBody }
            output: NotFoundKnownExceptionInfo
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { json: DestinationCloneRequestBody }
            output: InvalidInputExceptionInfo
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/v1/destinations/create': {
      $post:
        | {
            input: { json: DestinationCreate }
            output: DestinationRead
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: DestinationCreate }
            output: InvalidInputExceptionInfo
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/v1/destinations/delete': {
      $post:
        | {
            input: { json: DestinationIdRequestBody }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { json: DestinationIdRequestBody }
            output: NotFoundKnownExceptionInfo
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { json: DestinationIdRequestBody }
            output: InvalidInputExceptionInfo
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/v1/destinations/get': {
      $post:
        | {
            input: { json: DestinationIdRequestBody }
            output: DestinationRead
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: DestinationIdRequestBody }
            output: NotFoundKnownExceptionInfo
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { json: DestinationIdRequestBody }
            output: InvalidInputExceptionInfo
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/v1/destinations/list': {
      $post:
        | {
            input: { json: WorkspaceIdRequestBody }
            output: DestinationReadList
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: WorkspaceIdRequestBody }
            output: NotFoundKnownExceptionInfo
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { json: WorkspaceIdRequestBody }
            output: InvalidInputExceptionInfo
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/v1/destinations/search': {
      $post:
        | {
            input: { json: DestinationSearch }
            output: DestinationReadList
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: DestinationSearch }
            output: InvalidInputExceptionInfo
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/v1/destinations/update': {
      $post:
        | {
            input: { json: DestinationUpdate }
            output: DestinationRead
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: DestinationUpdate }
            output: InvalidInputExceptionInfo
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/v1/health': {
      $get: { input: {}; output: HealthCheckRead; outputFormat: 'json'; status: 200 }
    }
  } & {
    '/v1/jobs/cancel': {
      $post:
        | {
            input: { json: JobIdRequestBody }
            output: JobInfoRead
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: JobIdRequestBody }
            output: NotFoundKnownExceptionInfo
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { json: JobIdRequestBody }
            output: InvalidInputExceptionInfo
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/v1/jobs/get': {
      $post:
        | {
            input: { json: JobIdRequestBody }
            output: JobInfoRead
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: JobIdRequestBody }
            output: NotFoundKnownExceptionInfo
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { json: JobIdRequestBody }
            output: InvalidInputExceptionInfo
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/v1/jobs/get_debug_info': {
      $post:
        | {
            input: { json: JobIdRequestBody }
            output: JobDebugInfoRead
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: JobIdRequestBody }
            output: NotFoundKnownExceptionInfo
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { json: JobIdRequestBody }
            output: InvalidInputExceptionInfo
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/v1/jobs/get_last_replication_job': {
      $post:
        | {
            input: { json: ConnectionIdRequestBody }
            output: JobOptionalRead
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: ConnectionIdRequestBody }
            output: NotFoundKnownExceptionInfo
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { json: ConnectionIdRequestBody }
            output: InvalidInputExceptionInfo
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/v1/jobs/get_light': {
      $post:
        | {
            input: { json: JobIdRequestBody }
            output: JobInfoLightRead
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: JobIdRequestBody }
            output: NotFoundKnownExceptionInfo
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { json: JobIdRequestBody }
            output: InvalidInputExceptionInfo
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/v1/jobs/get_normalization_status': {
      $post: {
        input: { json: JobIdRequestBody }
        output: AttemptNormalizationStatusReadList
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/jobs/list': {
      $post:
        | {
            input: { json: JobListRequestBody }
            output: JobReadList
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: JobListRequestBody }
            output: NotFoundKnownExceptionInfo
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { json: JobListRequestBody }
            output: InvalidInputExceptionInfo
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/v1/logs/get': {
      $post:
        | { input: { json: LogsRequestBody }; output: File; outputFormat: 'text'; status: 200 }
        | {
            input: { json: LogsRequestBody }
            output: NotFoundKnownExceptionInfo
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { json: LogsRequestBody }
            output: InvalidInputExceptionInfo
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/v1/notifications/try': {
      $post:
        | {
            input: { json: Notification }
            output: NotificationRead
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: Notification }
            output: NotFoundKnownExceptionInfo
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { json: Notification }
            output: InvalidInputExceptionInfo
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/v1/openapi': { $get: { input: {}; output: File; outputFormat: 'text'; status: 200 } }
  } & {
    '/v1/operations/check': {
      $post:
        | {
            input: { json: OperatorConfiguration }
            output: CheckOperationRead
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: OperatorConfiguration }
            output: InvalidInputExceptionInfo
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/v1/operations/create': {
      $post:
        | {
            input: { json: OperationCreate }
            output: OperationRead
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: OperationCreate }
            output: InvalidInputExceptionInfo
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/v1/operations/delete': {
      $post:
        | { input: { json: OperationIdRequestBody }; output: {}; outputFormat: string; status: 204 }
        | {
            input: { json: OperationIdRequestBody }
            output: NotFoundKnownExceptionInfo
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { json: OperationIdRequestBody }
            output: InvalidInputExceptionInfo
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/v1/operations/get': {
      $post:
        | {
            input: { json: OperationIdRequestBody }
            output: OperationRead
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: OperationIdRequestBody }
            output: NotFoundKnownExceptionInfo
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { json: OperationIdRequestBody }
            output: InvalidInputExceptionInfo
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/v1/operations/list': {
      $post:
        | {
            input: { json: ConnectionIdRequestBody }
            output: OperationReadList
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: ConnectionIdRequestBody }
            output: NotFoundKnownExceptionInfo
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { json: ConnectionIdRequestBody }
            output: InvalidInputExceptionInfo
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/v1/operations/update': {
      $post:
        | {
            input: { json: OperationUpdate }
            output: OperationRead
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: OperationUpdate }
            output: InvalidInputExceptionInfo
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/v1/scheduler/destinations/check_connection': {
      $post:
        | {
            input: { json: DestinationCoreConfig }
            output: CheckConnectionRead
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: DestinationCoreConfig }
            output: InvalidInputExceptionInfo
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/v1/scheduler/sources/check_connection': {
      $post:
        | {
            input: { json: SourceCoreConfig }
            output: CheckConnectionRead
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: SourceCoreConfig }
            output: InvalidInputExceptionInfo
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/v1/scheduler/sources/discover_schema': {
      $post:
        | {
            input: { json: SourceCoreConfig }
            output: SourceDiscoverSchemaRead
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: SourceCoreConfig }
            output: InvalidInputExceptionInfo
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/v1/source_definition_specifications/get': {
      $post:
        | {
            input: { json: SourceDefinitionIdWithWorkspaceId }
            output: SourceDefinitionSpecificationRead
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: SourceDefinitionIdWithWorkspaceId }
            output: NotFoundKnownExceptionInfo
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { json: SourceDefinitionIdWithWorkspaceId }
            output: InvalidInputExceptionInfo
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/v1/source_definitions/create_custom': {
      $post:
        | {
            input: { json: CustomSourceDefinitionCreate }
            output: SourceDefinitionRead
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: CustomSourceDefinitionCreate }
            output: InvalidInputExceptionInfo
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/v1/source_definitions/delete': {
      $post:
        | {
            input: { json: SourceDefinitionIdRequestBody }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { json: SourceDefinitionIdRequestBody }
            output: NotFoundKnownExceptionInfo
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { json: SourceDefinitionIdRequestBody }
            output: InvalidInputExceptionInfo
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/v1/source_definitions/get': {
      $post:
        | {
            input: { json: SourceDefinitionIdRequestBody }
            output: SourceDefinitionRead
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: SourceDefinitionIdRequestBody }
            output: NotFoundKnownExceptionInfo
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { json: SourceDefinitionIdRequestBody }
            output: InvalidInputExceptionInfo
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/v1/source_definitions/get_for_workspace': {
      $post:
        | {
            input: { json: SourceDefinitionIdWithWorkspaceId }
            output: SourceDefinitionRead
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: SourceDefinitionIdWithWorkspaceId }
            output: NotFoundKnownExceptionInfo
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { json: SourceDefinitionIdWithWorkspaceId }
            output: InvalidInputExceptionInfo
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/v1/source_definitions/grant_definition': {
      $post:
        | {
            input: { json: SourceDefinitionIdWithWorkspaceId }
            output: PrivateSourceDefinitionRead
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: SourceDefinitionIdWithWorkspaceId }
            output: NotFoundKnownExceptionInfo
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { json: SourceDefinitionIdWithWorkspaceId }
            output: InvalidInputExceptionInfo
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/v1/source_definitions/list': {
      $post: { input: {}; output: SourceDefinitionReadList; outputFormat: 'json'; status: 200 }
    }
  } & {
    '/v1/source_definitions/list_for_workspace': {
      $post: {
        input: { json: WorkspaceIdRequestBody }
        output: SourceDefinitionReadList
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/source_definitions/list_latest': {
      $post: { input: {}; output: SourceDefinitionReadList; outputFormat: 'json'; status: 200 }
    }
  } & {
    '/v1/source_definitions/list_private': {
      $post: {
        input: { json: WorkspaceIdRequestBody }
        output: PrivateSourceDefinitionReadList
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/source_definitions/revoke_definition': {
      $post:
        | {
            input: { json: SourceDefinitionIdWithWorkspaceId }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { json: SourceDefinitionIdWithWorkspaceId }
            output: NotFoundKnownExceptionInfo
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { json: SourceDefinitionIdWithWorkspaceId }
            output: InvalidInputExceptionInfo
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/v1/source_definitions/update': {
      $post:
        | {
            input: { json: SourceDefinitionUpdate }
            output: SourceDefinitionRead
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: SourceDefinitionUpdate }
            output: NotFoundKnownExceptionInfo
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { json: SourceDefinitionUpdate }
            output: InvalidInputExceptionInfo
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/v1/source_oauths/complete_oauth': {
      $post:
        | {
            input: { json: CompleteSourceOauthRequest }
            output: CompleteOAuthResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: CompleteSourceOauthRequest }
            output: NotFoundKnownExceptionInfo
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { json: CompleteSourceOauthRequest }
            output: InvalidInputExceptionInfo
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/v1/source_oauths/get_consent_url': {
      $post:
        | {
            input: { json: SourceOauthConsentRequest }
            output: OAuthConsentRead
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: SourceOauthConsentRequest }
            output: NotFoundKnownExceptionInfo
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { json: SourceOauthConsentRequest }
            output: InvalidInputExceptionInfo
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/v1/source_oauths/oauth_params/create': {
      $post:
        | {
            input: { json: SetInstancewideSourceOauthParamsRequestBody }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { json: SetInstancewideSourceOauthParamsRequestBody }
            output: KnownExceptionInfo
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { json: SetInstancewideSourceOauthParamsRequestBody }
            output: NotFoundKnownExceptionInfo
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/v1/sources/check_connection': {
      $post:
        | {
            input: { json: SourceIdRequestBody }
            output: CheckConnectionRead
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: SourceIdRequestBody }
            output: NotFoundKnownExceptionInfo
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { json: SourceIdRequestBody }
            output: InvalidInputExceptionInfo
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/v1/sources/check_connection_for_update': {
      $post:
        | {
            input: { json: SourceUpdate }
            output: CheckConnectionRead
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: SourceUpdate }
            output: NotFoundKnownExceptionInfo
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { json: SourceUpdate }
            output: InvalidInputExceptionInfo
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/v1/sources/clone': {
      $post:
        | {
            input: { json: SourceCloneRequestBody }
            output: SourceRead
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: SourceCloneRequestBody }
            output: NotFoundKnownExceptionInfo
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { json: SourceCloneRequestBody }
            output: InvalidInputExceptionInfo
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/v1/sources/create': {
      $post:
        | { input: { json: SourceCreate }; output: SourceRead; outputFormat: 'json'; status: 200 }
        | {
            input: { json: SourceCreate }
            output: InvalidInputExceptionInfo
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/v1/sources/delete': {
      $post:
        | { input: { json: SourceIdRequestBody }; output: {}; outputFormat: string; status: 204 }
        | {
            input: { json: SourceIdRequestBody }
            output: NotFoundKnownExceptionInfo
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { json: SourceIdRequestBody }
            output: InvalidInputExceptionInfo
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/v1/sources/discover_schema': {
      $post:
        | {
            input: { json: SourceDiscoverSchemaRequestBody }
            output: SourceDiscoverSchemaRead
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: SourceDiscoverSchemaRequestBody }
            output: NotFoundKnownExceptionInfo
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { json: SourceDiscoverSchemaRequestBody }
            output: InvalidInputExceptionInfo
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/v1/sources/get': {
      $post:
        | {
            input: { json: SourceIdRequestBody }
            output: SourceRead
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: SourceIdRequestBody }
            output: NotFoundKnownExceptionInfo
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { json: SourceIdRequestBody }
            output: InvalidInputExceptionInfo
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/v1/sources/list': {
      $post:
        | {
            input: { json: WorkspaceIdRequestBody }
            output: SourceReadList
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: WorkspaceIdRequestBody }
            output: NotFoundKnownExceptionInfo
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { json: WorkspaceIdRequestBody }
            output: InvalidInputExceptionInfo
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/v1/sources/most_recent_source_actor_catalog': {
      $post:
        | {
            input: { json: SourceIdRequestBody }
            output: ActorCatalogWithUpdatedAt
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: SourceIdRequestBody }
            output: NotFoundKnownExceptionInfo
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { json: SourceIdRequestBody }
            output: InvalidInputExceptionInfo
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/v1/sources/search': {
      $post:
        | {
            input: { json: SourceSearch }
            output: SourceReadList
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: SourceSearch }
            output: InvalidInputExceptionInfo
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/v1/sources/update': {
      $post:
        | { input: { json: SourceUpdate }; output: SourceRead; outputFormat: 'json'; status: 200 }
        | {
            input: { json: SourceUpdate }
            output: NotFoundKnownExceptionInfo
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { json: SourceUpdate }
            output: InvalidInputExceptionInfo
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/v1/sources/write_discover_catalog_result': {
      $post: {
        input: { json: SourceDiscoverSchemaWriteRequestBody }
        output: DiscoverCatalogResult
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/state/create_or_update': {
      $post:
        | {
            input: { json: ConnectionStateCreateOrUpdate }
            output: ConnectionState
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: ConnectionStateCreateOrUpdate }
            output: NotFoundKnownExceptionInfo
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { json: ConnectionStateCreateOrUpdate }
            output: InvalidInputExceptionInfo
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/v1/state/get': {
      $post:
        | {
            input: { json: ConnectionIdRequestBody }
            output: ConnectionState
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: ConnectionIdRequestBody }
            output: NotFoundKnownExceptionInfo
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { json: ConnectionIdRequestBody }
            output: InvalidInputExceptionInfo
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/v1/web_backend/check_updates': {
      $post: { input: {}; output: WebBackendCheckUpdatesRead; outputFormat: 'json'; status: 200 }
    }
  } & {
    '/v1/web_backend/connections/create': {
      $post:
        | {
            input: { json: WebBackendConnectionCreate }
            output: WebBackendConnectionRead
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: WebBackendConnectionCreate }
            output: InvalidInputExceptionInfo
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/v1/web_backend/connections/get': {
      $post:
        | {
            input: { json: WebBackendConnectionRequestBody }
            output: WebBackendConnectionRead
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: WebBackendConnectionRequestBody }
            output: NotFoundKnownExceptionInfo
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { json: WebBackendConnectionRequestBody }
            output: InvalidInputExceptionInfo
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/v1/web_backend/connections/list': {
      $post:
        | {
            input: { json: WebBackendConnectionListRequestBody }
            output: WebBackendConnectionReadList
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: WebBackendConnectionListRequestBody }
            output: NotFoundKnownExceptionInfo
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { json: WebBackendConnectionListRequestBody }
            output: InvalidInputExceptionInfo
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/v1/web_backend/connections/update': {
      $post:
        | {
            input: { json: WebBackendConnectionUpdate }
            output: WebBackendConnectionRead
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: WebBackendConnectionUpdate }
            output: InvalidInputExceptionInfo
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/v1/web_backend/geographies/list': {
      $post: {
        input: {}
        output: WebBackendGeographiesListResult
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/web_backend/state/get_type': {
      $post:
        | {
            input: { json: ConnectionIdRequestBody }
            output: ConnectionStateType
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: ConnectionIdRequestBody }
            output: NotFoundKnownExceptionInfo
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { json: ConnectionIdRequestBody }
            output: InvalidInputExceptionInfo
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/v1/web_backend/workspace/state': {
      $post:
        | {
            input: { json: WebBackendWorkspaceState }
            output: WebBackendWorkspaceStateResult
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: WebBackendWorkspaceState }
            output: NotFoundKnownExceptionInfo
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { json: WebBackendWorkspaceState }
            output: InvalidInputExceptionInfo
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/v1/workspaces/create': {
      $post:
        | {
            input: { json: WorkspaceCreate }
            output: WorkspaceRead
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: WorkspaceCreate }
            output: InvalidInputExceptionInfo
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/v1/workspaces/delete': {
      $post:
        | { input: { json: WorkspaceIdRequestBody }; output: {}; outputFormat: string; status: 204 }
        | {
            input: { json: WorkspaceIdRequestBody }
            output: NotFoundKnownExceptionInfo
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { json: WorkspaceIdRequestBody }
            output: InvalidInputExceptionInfo
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/v1/workspaces/get': {
      $post:
        | {
            input: { json: WorkspaceIdRequestBody }
            output: WorkspaceRead
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: WorkspaceIdRequestBody }
            output: NotFoundKnownExceptionInfo
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { json: WorkspaceIdRequestBody }
            output: InvalidInputExceptionInfo
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/v1/workspaces/get_by_connection_id': {
      $post:
        | {
            input: { json: ConnectionIdRequestBody }
            output: WorkspaceRead
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: ConnectionIdRequestBody }
            output: NotFoundKnownExceptionInfo
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { json: ConnectionIdRequestBody }
            output: InvalidInputExceptionInfo
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/v1/workspaces/get_by_slug': {
      $post:
        | {
            input: { json: SlugRequestBody }
            output: WorkspaceRead
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: SlugRequestBody }
            output: NotFoundKnownExceptionInfo
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { json: SlugRequestBody }
            output: InvalidInputExceptionInfo
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/v1/workspaces/list': {
      $post: { input: {}; output: WorkspaceReadList; outputFormat: 'json'; status: 200 }
    }
  } & {
    '/v1/workspaces/tag_feedback_status_as_done': {
      $post:
        | { input: { json: WorkspaceGiveFeedback }; output: {}; outputFormat: string; status: 204 }
        | {
            input: { json: WorkspaceGiveFeedback }
            output: NotFoundKnownExceptionInfo
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/v1/workspaces/update': {
      $post:
        | {
            input: { json: WorkspaceUpdate }
            output: WorkspaceRead
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: WorkspaceUpdate }
            output: NotFoundKnownExceptionInfo
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { json: WorkspaceUpdate }
            output: InvalidInputExceptionInfo
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/v1/workspaces/update_name': {
      $post:
        | {
            input: { json: WorkspaceUpdateName }
            output: WorkspaceRead
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: WorkspaceUpdateName }
            output: NotFoundKnownExceptionInfo
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { json: WorkspaceUpdateName }
            output: InvalidInputExceptionInfo
            outputFormat: 'json'
            status: 422
          }
    }
  },
  '/'
>
export default routes
