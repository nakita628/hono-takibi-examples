type FusionSearchStreamSelector = {
  source_id?: (string | null) | undefined
  namespace?: (string | null) | undefined
  stream_name: string
  fields?: (string[] | null) | undefined
}
type FusionSearchRequest = {
  type: 'keyword' | 'semantic' | 'hybrid'
  prompt: string
  limit?: number | undefined
  max_context_chars?: (number | null) | undefined
  min_similarity?: (number | null) | undefined
  max_similarity_diff?: (number | null) | undefined
  lookback_s?: (number | null) | undefined
  streams?: (FusionSearchStreamSelector[] | null) | undefined
  destination_id?: (string | null) | undefined
}
type FusionSearchHit = {
  source_id: string
  stream_name: string
  entity_id: string
  entity_data: { [x: string]: unknown }
  score: number
  context: string | null
}
type FusionSearchSegmentVersion = { segment_id: string; serving_version: bigint | null }
type FusionSearchIndexMetadata = {
  index_id?: string | undefined
  segment_versions?: FusionSearchSegmentVersion[] | undefined
  source_id: string
  destination_id: string
  namespace?: (string | null) | undefined
  stream_name: string
  index_name: string
  error: string | null
  search_time_ms: bigint
}
type FusionSearchResponse = {
  hits: FusionSearchHit[]
  metadata: FusionSearchIndexMetadata[]
  response_time_ms: bigint
}
type FusionSearchStatusGaps = { count: bigint; stuck: bigint; oldest_at: string | null }
type FusionSearchStatusIndex = {
  index_id?: string | undefined
  segment_versions?: FusionSearchSegmentVersion[] | undefined
  type: 'keyword' | 'semantic'
  name: string | null
  indexed_records: bigint
  physical_rows: bigint
  optimized_physical_rows: bigint
  updated_at: string | null
  status: 'backfilling' | 'updating' | 'optimizing' | 'truncating' | 'idle'
  storage_size_mb: number
  stats_error?: (string | null) | undefined
  gaps?: FusionSearchStatusGaps | undefined
  publication_held?: { since: string; reason: string | null } | undefined
  held_records?: bigint | undefined
  segments?: bigint | undefined
}
type FusionSearchStatusStream = {
  namespace?: (string | null) | undefined
  name: string
  needs_backfill?: boolean | undefined
  backfill: {
    backfill_start_time: string | null
    expected_total_records: bigint
    collected_records: bigint
    indexed_records: bigint
    started_at: string | null
    completed_at: string | null
    failed_at?: (string | null) | undefined
    cancelled_at?: (string | null) | undefined
    status: 'starting' | 'running' | 'finalizing' | 'complete' | 'failed' | 'cancelled'
    error_code?: (string | null) | undefined
    error?: (string | null) | undefined
  }
  indexes: FusionSearchStatusIndex[]
  gaps?: { count: bigint; stuck: bigint; oldest_at: string | null } | undefined
}
type FusionSearchStatusSource = {
  source_id: string
  destination_id: string
  connection_id: string
  needs_backfill?: boolean | undefined
  streams: FusionSearchStatusStream[]
  gaps?: { count: bigint; stuck: bigint; oldest_at: string | null } | undefined
}
type FusionSearchStatusDestination = { destination_id: string; needs_backfill: boolean }
type FusionSearchStatusResponse = {
  sources: FusionSearchStatusSource[]
  destinations?: FusionSearchStatusDestination[] | undefined
}
type FusionSourceEnablementCreate = { enable_agent_access: boolean; enable_indexing: boolean }
type ActorType = 'source' | 'destination'
type FusionSourceEnablementRead = {
  organizationId: string
  workspaceId: string
  actorId: string
  actorType: ActorType
  enable_agent_access: boolean
  enable_indexing: boolean
}
type FusionSourceEnablementState = { enable_agent_access: boolean; enable_indexing: boolean }
type FusionSourceEnablementUpdate = {
  enable_agent_access: boolean
  enable_indexing: boolean
  expectedState: FusionSourceEnablementState
}
type FusionDestinationEnablementCreate = {
  enable_agent_access: boolean
  enable_indexing: boolean
  enable_backfill: boolean
  backfill_start_time?: (string | null) | undefined
}
type FusionDestinationEnablementRead = {
  organizationId: string
  workspaceId: string
  actorId: string
  actorType: ActorType
  enable_agent_access: boolean
  enable_indexing: boolean
  enable_backfill: boolean
  backfill_start_time?: (string | null) | undefined
}
type FusionDestinationEnablementState = {
  enable_agent_access: boolean
  enable_indexing: boolean
  enable_backfill: boolean
  backfill_start_time?: (string | null) | undefined
}
type FusionDestinationEnablementUpdate = {
  enable_agent_access: boolean
  enable_indexing: boolean
  enable_backfill: boolean
  backfill_start_time?: (string | null) | undefined
  expectedState: FusionDestinationEnablementState
}
type FusionConnectionEnablementCreate = { enable_indexing: boolean }
type FusionConnectionEnablementRead = {
  organizationId: string
  workspaceId: string
  connectionId: string
  enable_indexing: boolean
}
type FusionConnectionEnablementState = { enable_indexing: boolean }
type FusionConnectionEnablementUpdate = {
  enable_indexing: boolean
  expectedState: FusionConnectionEnablementState
}
type FusionEnablementResolveRequest = {
  organizationId: string
  workspaceId: string
  connectionId: string
  sourceId: string
  destinationId: string
  dataplaneGroupId: string
  workloadId: string
}
type FusionEnablementResolveResponse = {
  destinationEnvironment: { [x: string]: string }
  injectAwsBootstrapCredentials: boolean
  reason: 'rollout_disabled' | 'not_enabled' | 'enabled'
}
type FusionConnectionBackfillRequest = {
  streams?: string[] | undefined
  start_time?: (string | null) | undefined
}
type FusionConnectionBackfillRun = {
  id: string
  stream_name: string
  connection_id?: (string | null) | undefined
  source_id: string
  destination_id?: (string | null) | undefined
  workspace_id: string
  requested_at?: (string | null) | undefined
  started_at?: (string | null) | undefined
  completed_at?: (string | null) | undefined
  failed_at?: (string | null) | undefined
  cancel_requested_at?: (string | null) | undefined
  cancelled_at?: (string | null) | undefined
  expected_total_rows?: (bigint | null) | undefined
  error?: (string | null) | undefined
}
type FusionConnectionBackfillStreamOutcome = {
  stream_name: string
  outcome: 'requested' | 'running' | 'failed'
  run_id?: (string | null) | undefined
  backfill: FusionConnectionBackfillRun
}
type FusionConnectionBackfillResponse = { streams: FusionConnectionBackfillStreamOutcome[] }
type NotificationType = 'slack' | 'customerio'
type SlackNotificationConfiguration = { webhook: string }
type CustomerioNotificationConfiguration = { [x: string]: unknown }
type Notification = {
  notificationType: NotificationType
  sendOnSuccess: boolean
  sendOnFailure: boolean
  slackConfiguration?: SlackNotificationConfiguration | undefined
  customerioConfiguration?: CustomerioNotificationConfiguration | undefined
}
type NotificationItem = {
  notificationType?: NotificationType[] | undefined
  slackConfiguration?: SlackNotificationConfiguration | undefined
  customerioConfiguration?: CustomerioNotificationConfiguration | undefined
}
type NotificationSettings = {
  sendOnSuccess?: NotificationItem | undefined
  sendOnFailure?: NotificationItem | undefined
  sendOnSyncDisabled?: NotificationItem | undefined
  sendOnSyncDisabledWarning?: NotificationItem | undefined
  sendOnConnectionUpdate?: NotificationItem | undefined
  sendOnConnectionUpdateActionRequired?: NotificationItem | undefined
  sendOnBreakingChangeWarning?: NotificationItem | undefined
  sendOnBreakingChangeSyncsDisabled?: NotificationItem | undefined
  sendOnConnectionSyncQueued?: NotificationItem | undefined
}
type WebhookConfigWrite = {
  id?: string | undefined
  name?: string | undefined
  authToken?: string | undefined
  validationUrl?: string | undefined
  customDbtHost?: string | undefined
}
type OrganizationId = string
type WorkspaceCreate = {
  email?: string | undefined
  anonymousDataCollection?: boolean | undefined
  name: string
  news?: boolean | undefined
  securityUpdates?: boolean | undefined
  notifications?: Notification[] | undefined
  notificationSettings?: NotificationSettings | undefined
  displaySetupWizard?: boolean | undefined
  dataplaneGroupId?: string | undefined
  webhookConfigs?: WebhookConfigWrite[] | undefined
  organizationId: OrganizationId
}
type WorkspaceId = string
type CustomerId = string
type WebhookConfigRead = {
  id: string
  name?: string | undefined
  customDbtHost?: string | undefined
}
type Limit = { current: bigint; max?: bigint | undefined }
type WorkspaceLimits = { sources: Limit; destinations: Limit; activeConnections: Limit }
type WorkspaceRead = {
  workspaceId: WorkspaceId
  customerId: CustomerId
  email?: string | undefined
  name: string
  slug: string
  initialSetupComplete: boolean
  displaySetupWizard?: boolean | undefined
  anonymousDataCollection?: boolean | undefined
  news?: boolean | undefined
  securityUpdates?: boolean | undefined
  notifications?: Notification[] | undefined
  notificationSettings?: NotificationSettings | undefined
  firstCompletedSync?: boolean | undefined
  feedbackDone?: boolean | undefined
  dataplaneGroupId?: string | undefined
  webhookConfigs?: WebhookConfigRead[] | undefined
  organizationId: OrganizationId
  tombstone?: boolean | undefined
  workspaceLimits?: WorkspaceLimits | undefined
}
type InvalidInputProperty = {
  propertyPath: string
  invalidValue?: string | undefined
  message?: string | undefined
}
type InvalidInputExceptionInfo = {
  message: string
  exceptionClassName?: string | undefined
  exceptionStack?: string[] | undefined
  validationErrors: InvalidInputProperty[]
}
type WorkspaceCreateWithId = {
  id: string
  email?: string | undefined
  anonymousDataCollection?: boolean | undefined
  name: string
  news?: boolean | undefined
  securityUpdates?: boolean | undefined
  notifications?: Notification[] | undefined
  notificationSettings?: NotificationSettings | undefined
  displaySetupWizard?: boolean | undefined
  dataplaneGroupId?: string | undefined
  webhookConfigs?: WebhookConfigWrite[] | undefined
  organizationId?: OrganizationId | undefined
}
type WorkspaceIdRequestBody = { workspaceId: WorkspaceId; includeTombstone?: boolean | undefined }
type NotFoundKnownExceptionInfo = {
  id?: string | undefined
  message?: string | undefined
  exceptionClassName?: string | undefined
  exceptionStack?: string[] | undefined
  rootCauseExceptionClassName?: string | undefined
  rootCauseExceptionStack?: string[] | undefined
  errorId?: string | undefined
}
type Pagination = { pageSize?: number | undefined; rowOffset?: number | undefined }
type ListResourcesForWorkspacesRequestBody = {
  workspaceIds: WorkspaceId[]
  includeDeleted?: boolean | undefined
  pagination: Pagination
  nameContains?: string | undefined
}
type WorkspaceReadList = { workspaces: WorkspaceRead[]; total_workspace_count?: bigint | undefined }
type ListWorkspacesInOrganizationRequestBody = {
  organizationId: string
  pagination?: Pagination | undefined
  nameContains?: string | undefined
}
type ListWorkspacesByUserRequestBody = {
  userId: string
  pagination?: Pagination | undefined
  nameContains?: string | undefined
}
type WorkspaceGetDbtJobsRequest = { workspaceId: WorkspaceId; dbtConfigId: string }
type DbtCloudJobInfo = { accountId: bigint; jobId: bigint; jobName: string }
type WorkspaceGetDbtJobsResponse = { availableDbtJobs: DbtCloudJobInfo[] }
type SlugRequestBody = { slug: string }
type ConnectionId = string
type ConnectionIdRequestBody = { connectionId: ConnectionId }
type OrganizationOnboardingStatus =
  | 'survey'
  | 'choose_method'
  | 'create_source'
  | 'create_destination'
  | 'create_connection'
  | 'run_first_sync'
  | 'completed'
  | 'skipped'
type OrganizationInfoRead = {
  organizationId: string
  organizationName: string
  sso: boolean
  scim: boolean
  billing?:
    | {
        subscriptionStatus?: 'pre_subscription' | 'unsubscribed' | 'subscribed' | undefined
        paymentStatus: 'uninitialized' | 'okay' | 'grace_period' | 'disabled' | 'locked' | 'manual'
        accountType?: 'free' | 'internal' | undefined
        gracePeriodEndsAt?: bigint | undefined
      }
    | undefined
  organizationPlanId?: string | undefined
  onboardingStatus?: OrganizationOnboardingStatus | undefined
}
type EmailNotificationConfig = { enabled?: boolean | undefined }
type WebhookNotificationConfig = { enabled?: boolean | undefined; url?: string | undefined }
type NotificationConfig = {
  email?: EmailNotificationConfig | undefined
  webhook?: WebhookNotificationConfig | undefined
}
type NotificationsConfig = {
  failure?: NotificationConfig | undefined
  success?: NotificationConfig | undefined
  connectionUpdate?: NotificationConfig | undefined
  connectionUpdateActionRequired?: NotificationConfig | undefined
  syncDisabled?: NotificationConfig | undefined
  syncDisabledWarning?: NotificationConfig | undefined
}
type WorkspaceUpdate = {
  workspaceId: WorkspaceId
  name?: string | undefined
  email?: string | undefined
  initialSetupComplete?: boolean | undefined
  displaySetupWizard?: boolean | undefined
  anonymousDataCollection?: boolean | undefined
  news?: boolean | undefined
  securityUpdates?: boolean | undefined
  notifications?: Notification[] | undefined
  notificationSettings?: NotificationSettings | undefined
  notificationsConfig?: NotificationsConfig | undefined
  dataplaneGroupId?: string | undefined
  webhookConfigs?: (WebhookConfigWrite[] | null) | undefined
}
type WorkspaceUpdateName = { workspaceId: WorkspaceId; name: string }
type WorkspaceUpdateOrganization = { workspaceId: WorkspaceId; organizationId: OrganizationId }
type ConsumptionTimeWindow = 'lastMonth' | 'lastSixMonths' | 'lastYear'
type WorkspaceUsageRequestBody = { workspaceId: WorkspaceId; timeWindow: ConsumptionTimeWindow }
type NamespaceDefinitionType = 'source' | 'destination' | 'customformat'
type SourceId = string
type DestinationId = string
type OperationId = string
type StreamJsonSchema = { [x: string]: unknown }
type SyncMode = 'full_refresh' | 'incremental'
type AirbyteStream = {
  name: string
  jsonSchema?: StreamJsonSchema | undefined
  supportedSyncModes?: SyncMode[] | undefined
  sourceDefinedCursor?: boolean | undefined
  defaultCursorField?: string[] | undefined
  sourceDefinedPrimaryKey?: string[][] | undefined
  namespace?: string | undefined
  isResumable?: boolean | undefined
  isFileBased?: boolean | undefined
}
type DestinationSyncMode =
  | 'append'
  | 'overwrite'
  | 'append_dedup'
  | 'overwrite_dedup'
  | 'update'
  | 'soft_delete'
type SelectedFieldInfo = { fieldPath?: string[] | undefined }
type SelectedFields = SelectedFieldInfo[]
type StreamMapperType =
  | 'hashing'
  | 'field-renaming'
  | 'row-filtering'
  | 'encryption'
  | 'field-filtering'
type HashingMapperConfiguration = {
  fieldNameSuffix: string
  method: 'MD2' | 'MD5' | 'SHA-1' | 'SHA-224' | 'SHA-256' | 'SHA-384' | 'SHA-512'
  targetField: string
}
type FieldFilteringMapperConfiguration = { targetField: string }
type FieldRenamingMapperConfiguration = { newFieldName: string; originalFieldName: string }
type RowFilteringOperationType = 'EQUAL' | 'NOT'
type RowFilteringOperationEqual = {
  comparisonValue: string
  fieldName: string
  type: RowFilteringOperationType
}
type RowFilteringOperationNot = {
  conditions: RowFilteringOperation[]
  type: RowFilteringOperationType
}
type RowFilteringOperation = RowFilteringOperationEqual | RowFilteringOperationNot
type RowFilteringMapperConfiguration = { conditions: RowFilteringOperation }
type EncryptionMapperAlgorithm = 'RSA' | 'AES'
type EncryptionMapperRSAConfiguration = {
  algorithm: EncryptionMapperAlgorithm
  fieldNameSuffix: string
  publicKey: string
  targetField: string
}
type EncryptionMapperAESConfiguration = {
  algorithm: EncryptionMapperAlgorithm
  fieldNameSuffix: string
  key: string
  mode: 'CBC' | 'CFB' | 'OFB' | 'CTR' | 'GCM' | 'ECB'
  padding: 'NoPadding' | 'PKCS5Padding'
  targetField: string
}
type EncryptionMapperConfiguration =
  | EncryptionMapperRSAConfiguration
  | EncryptionMapperAESConfiguration
type MapperConfiguration =
  | HashingMapperConfiguration
  | FieldFilteringMapperConfiguration
  | FieldRenamingMapperConfiguration
  | RowFilteringMapperConfiguration
  | EncryptionMapperConfiguration
type ConfiguredStreamMapper = {
  id?: string | undefined
  type: StreamMapperType
  mapperConfiguration: MapperConfiguration
}
type AirbyteStreamConfiguration = {
  syncMode: SyncMode
  cursorField?: string[] | undefined
  destinationSyncMode: DestinationSyncMode
  namespace?: string | undefined
  primaryKey?: string[][] | undefined
  aliasName?: string | undefined
  selected?: boolean | undefined
  suggested?: boolean | undefined
  destinationObjectName?: string | undefined
  includeFiles?: boolean | undefined
  fieldSelectionEnabled?: boolean | undefined
  selectedFields?: SelectedFields | undefined
  hashedFields?: SelectedFields | undefined
  mappers?: ConfiguredStreamMapper[] | undefined
  minimumGenerationId?: bigint | undefined
  generationId?: bigint | undefined
  syncId?: bigint | undefined
}
type AirbyteStreamAndConfiguration = {
  stream?: AirbyteStream | undefined
  config?: AirbyteStreamConfiguration | undefined
}
type AirbyteCatalog = { streams: AirbyteStreamAndConfiguration[] }
type ConnectionSchedule = {
  units: bigint
  timeUnit: 'minutes' | 'hours' | 'days' | 'weeks' | 'months'
}
type ConnectionScheduleType = 'manual' | 'basic' | 'cron'
type ConnectionScheduleData = {
  basicSchedule?:
    | { timeUnit: 'minutes' | 'hours' | 'days' | 'weeks' | 'months'; units: bigint }
    | undefined
  cron?: { cronExpression: string; cronTimeZone: string } | undefined
}
type ConnectionStatus = 'active' | 'inactive' | 'deprecated' | 'locked'
type ResourceRequirements = {
  cpu_request?: string | undefined
  cpu_limit?: string | undefined
  memory_request?: string | undefined
  memory_limit?: string | undefined
  ephemeral_storage_request?: string | undefined
  ephemeral_storage_limit?: string | undefined
}
type NonBreakingChangesPreference = 'ignore' | 'disable' | 'propagate_columns' | 'propagate_fully'
type SchemaChangeBackfillPreference = 'enabled' | 'disabled'
type TagId = string
type Tag = { tagId: TagId; workspaceId: WorkspaceId; name: string; color: string }
type ConnectionRead = {
  connectionId: ConnectionId
  name: string
  namespaceDefinition?: NamespaceDefinitionType | undefined
  namespaceFormat?: string | undefined
  prefix?: string | undefined
  sourceId: SourceId
  destinationId: DestinationId
  operationIds?: OperationId[] | undefined
  syncCatalog: AirbyteCatalog
  schedule?: ConnectionSchedule | undefined
  scheduleType?: ConnectionScheduleType | undefined
  scheduleData?: ConnectionScheduleData | undefined
  status: ConnectionStatus
  statusReason?: (string | null) | undefined
  resourceRequirements?: ResourceRequirements | undefined
  sourceCatalogId?: string | undefined
  destinationCatalogId?: string | undefined
  breakingChange: boolean
  notifySchemaChanges?: boolean | undefined
  notifySchemaChangesByEmail?: boolean | undefined
  nonBreakingChangesPreference?: NonBreakingChangesPreference | undefined
  created_at?: bigint | undefined
  backfillPreference?: SchemaChangeBackfillPreference | undefined
  workspaceId?: WorkspaceId | undefined
  dataplaneGroupId?: string | undefined
  tags?: Tag[] | undefined
  onDemandEnabled?: boolean | undefined
  enableIndexing?: boolean | undefined
}
type SourceDefinitionId = string
type SourceConfiguration = { [x: string]: unknown }
type DeadlineAction = 'auto_upgrade' | 'disable'
type ActorDefinitionBreakingChange = {
  version: string
  message: string
  upgradeDeadline: string
  migrationDocumentationUrl: string
  deadlineAction?: DeadlineAction | undefined
}
type ActorDefinitionVersionBreakingChanges = {
  upcomingBreakingChanges: ActorDefinitionBreakingChange[]
  minUpgradeDeadline: string
  deadlineAction?: DeadlineAction | undefined
}
type SupportState = 'supported' | 'unsupported' | 'deprecated'
type ActorStatus = 'active' | 'inactive'
type JobType =
  | 'get_spec'
  | 'check_connection'
  | 'discover_schema'
  | 'sync'
  | 'reset_connection'
  | 'connection_updater'
  | 'replicate'
type JobTypeResourceLimit = { jobType: JobType; resourceRequirements: ResourceRequirements }
type ScopedResourceRequirements = {
  default?: ResourceRequirements | undefined
  jobSpecific?: JobTypeResourceLimit[] | undefined
}
type SourceRead = {
  sourceDefinitionId: SourceDefinitionId
  sourceId: SourceId
  workspaceId: WorkspaceId
  connectionConfiguration: SourceConfiguration
  name: string
  sourceName: string
  icon?: string | undefined
  isVersionOverrideApplied?: boolean | undefined
  isEntitled?: boolean | undefined
  breakingChanges?: ActorDefinitionVersionBreakingChanges | undefined
  supportState?: SupportState | undefined
  status?: ActorStatus | undefined
  createdAt: bigint
  isDraft?: boolean | undefined
  resourceAllocation?: ScopedResourceRequirements | undefined
  numConnections?: number | undefined
  lastSync?: bigint | undefined
  connectionJobStatuses?: { [x: string]: number } | undefined
}
type SupportLevel = 'community' | 'certified' | 'archived' | 'none'
type ReleaseStage = 'alpha' | 'beta' | 'generally_available' | 'custom'
type ISO8601DateTime = string
type SourceDefinitionRead = {
  sourceDefinitionId: SourceDefinitionId
  name: string
  dockerRepository: string
  dockerImageTag: string
  documentationUrl?: string | undefined
  icon?: string | undefined
  protocolVersion?: string | undefined
  custom?: boolean | undefined
  enterprise?: boolean | undefined
  supportLevel?: SupportLevel | undefined
  releaseStage?: ReleaseStage | undefined
  releaseDate?: string | undefined
  sourceType?: 'api' | 'file' | 'database' | 'custom' | undefined
  resourceRequirements?: ScopedResourceRequirements | undefined
  maxSecondsBetweenMessages?: bigint | undefined
  lastPublished?: ISO8601DateTime | undefined
  cdkVersion?: string | undefined
  metrics?: { [x: string]: unknown } | undefined
  language?: string | undefined
}
type DestinationDefinitionId = string
type DestinationConfiguration = { [x: string]: unknown }
type DestinationRead = {
  destinationDefinitionId: DestinationDefinitionId
  destinationId: DestinationId
  workspaceId: WorkspaceId
  connectionConfiguration: DestinationConfiguration
  name: string
  destinationName: string
  icon?: string | undefined
  isVersionOverrideApplied?: boolean | undefined
  isEntitled?: boolean | undefined
  breakingChanges?: ActorDefinitionVersionBreakingChanges | undefined
  supportState?: SupportState | undefined
  status?: ActorStatus | undefined
  createdAt: bigint
  isDraft?: boolean | undefined
  resourceAllocation?: ScopedResourceRequirements | undefined
  numConnections?: number | undefined
  lastSync?: bigint | undefined
  connectionJobStatuses?: { [x: string]: number } | undefined
}
type DestinationDefinitionRead = {
  destinationDefinitionId: DestinationDefinitionId
  name: string
  dockerRepository: string
  dockerImageTag: string
  documentationUrl: string
  icon?: string | undefined
  protocolVersion?: string | undefined
  custom?: boolean | undefined
  enterprise?: boolean | undefined
  supportLevel?: SupportLevel | undefined
  releaseStage?: ReleaseStage | undefined
  releaseDate?: string | undefined
  resourceRequirements?: ScopedResourceRequirements | undefined
  lastPublished?: ISO8601DateTime | undefined
  cdkVersion?: string | undefined
  metrics?: { [x: string]: unknown } | undefined
  language?: string | undefined
  supportsDataActivation?: boolean | undefined
}
type TimeframeUsage = { timeframeStart: string; timeframeEnd: string; quantity: number }
type UsageBucket = { free: TimeframeUsage[]; regular: TimeframeUsage[]; internal: TimeframeUsage[] }
type ConnectionUsageRead = {
  connection: ConnectionRead
  source: SourceRead
  sourceDefinition: SourceDefinitionRead
  destination: DestinationRead
  destinationDefinition: DestinationDefinitionRead
  usage: UsageBucket
}
type WorkspaceUsageRead = { data: ConnectionUsageRead[] }
type WorkspaceDataWorkerAvailabilityRequestBody = {
  workspaceId: WorkspaceId
  organizationId: OrganizationId
}
type WorkspaceDataWorkerAvailabilityRead = {
  workspaceId: WorkspaceId
  organizationId: OrganizationId
  outOfDataWorkers: boolean
  enforcementEnabled: boolean
  currentDataWorkers: number
  committedDataWorkers: number
}
type WorkspaceGiveFeedback = { workspaceId: WorkspaceId }
type NotificationRead = { status: 'succeeded' | 'failed'; message?: string | undefined }
type NotificationTrigger =
  | 'sync_success'
  | 'sync_failure'
  | 'sync_disabled'
  | 'sync_disabled_warning'
  | 'connection_update'
  | 'connection_update_action_required'
  | 'breaking_change_warning'
  | 'breaking_change_syncs_disabled'
  | 'connection_sync_queued'
type NotificationWebhookConfigValidationRequestBody = {
  slackConfiguration: SlackNotificationConfiguration
  notificationTrigger?: NotificationTrigger | undefined
}
type SourceDefinitionUpdate = {
  name?: string | undefined
  sourceDefinitionId: SourceDefinitionId
  dockerImageTag: string
  resourceRequirements?: ScopedResourceRequirements | undefined
  workspaceId: WorkspaceId
}
type SourceDefinitionReadList = { sourceDefinitions: SourceDefinitionRead[] }
type SourceDefinitionIdRequestBody = { sourceDefinitionId: SourceDefinitionId }
type PrivateSourceDefinitionRead = { sourceDefinition: SourceDefinitionRead; granted: boolean }
type PrivateSourceDefinitionReadList = { sourceDefinitions: PrivateSourceDefinitionRead[] }
type WorkspaceIdActorDefinitionRequestBody = {
  workspaceId: WorkspaceId
  includeTombstone?: boolean | undefined
  filterByUsed?: boolean | undefined
}
type EnterpriseConnectorStub = {
  id: string
  definitionId?: string | undefined
  name: string
  url: string
  icon: string
  label?: string | undefined
  type?: string | undefined
}
type EnterpriseConnectorStubsReadList = { enterpriseConnectorStubs: EnterpriseConnectorStub[] }
type ScopeId = string
type ScopeType = 'workspace' | 'organization'
type SourceDefinitionSpecification = { [x: string]: unknown }
type SourceDefinitionCreate = {
  name: string
  dockerRepository: string
  dockerImageTag: string
  documentationUrl: string
  icon?: string | undefined
  resourceRequirements?: ScopedResourceRequirements | undefined
  connectorSpecification?: SourceDefinitionSpecification | undefined
}
type CustomSourceDefinitionCreate = {
  workspaceId?: WorkspaceId | undefined
  scopeId?: ScopeId | undefined
  scopeType?: ScopeType | undefined
  sourceDefinition: SourceDefinitionCreate
}
type SourceDefinitionIdWithWorkspaceId = {
  sourceDefinitionId: SourceDefinitionId
  workspaceId: WorkspaceId
}
type ActorDefinitionId = string
type ActorDefinitionIdWithScope = {
  actorDefinitionId: ActorDefinitionId
  scopeId: ScopeId
  scopeType: ScopeType
}
type SourceIdRequestBody = { sourceId: SourceId }
type ConnectorIPCOptions = { [x: string]: unknown }
type ActorDefinitionVersionRead = {
  dockerRepository: string
  dockerImageTag: string
  supportsRefreshes: boolean
  isVersionOverrideApplied: boolean
  supportLevel?: SupportLevel | undefined
  supportState: SupportState
  breakingChanges?: ActorDefinitionVersionBreakingChanges | undefined
  lastPublished?: ISO8601DateTime | undefined
  cdkVersion?: string | undefined
  supportsFileTransfer: boolean
  supportsDataActivation: boolean
  connectorIPCOptions?: ConnectorIPCOptions | undefined
}
type OAuthConfiguration = { [x: string]: unknown }
type OAuthConfigSpecification = {
  oauthUserInputFromConnectorConfigSpecification?: OAuthConfiguration | undefined
  completeOAuthOutputSpecification?: OAuthConfiguration | undefined
  completeOAuthServerInputSpecification?: OAuthConfiguration | undefined
  completeOAuthServerOutputSpecification?: OAuthConfiguration | undefined
}
type AdvancedAuth = {
  authFlowType?: 'oauth2.0' | 'oauth1.0' | undefined
  predicateKey?: string[] | undefined
  predicateValue?: string | undefined
  oauthConfigSpecification?: OAuthConfigSpecification | undefined
}
type JobConfigType =
  | 'check_connection_source'
  | 'check_connection_destination'
  | 'discover_schema'
  | 'get_spec'
  | 'sync'
  | 'reset_connection'
  | 'refresh'
  | 'clear'
type LogFormatType = 'formatted' | 'structured'
type LogLevel = 'debug' | 'error' | 'info' | 'trace' | 'warn'
type LogSource = 'destination' | 'source' | 'platform' | 'replication-orchestrator'
type LogCaller = {
  className?: string | undefined
  methodName?: string | undefined
  lineNumber?: number | undefined
  threadName?: string | undefined
}
type LogEvent = {
  timestamp: bigint
  message: string
  level: LogLevel
  logSource: LogSource
  caller?: LogCaller | undefined
  stackTrace?: string | undefined
}
type LogEvents = { events: LogEvent[]; version?: string | undefined }
type LogRead = { logLines: string[] }
type FailureOrigin =
  | 'source'
  | 'destination'
  | 'replication'
  | 'persistence'
  | 'airbyte_platform'
  | 'normalization'
  | 'dbt'
  | 'unknown'
type FailureType =
  | 'config_error'
  | 'system_error'
  | 'manual_cancellation'
  | 'refresh_schema'
  | 'heartbeat_timeout'
  | 'destination_timeout'
  | 'transient_error'
type StreamDescriptor = { name: string; namespace?: string | undefined }
type FailureReason = {
  failureOrigin?: FailureOrigin | undefined
  failureType?: FailureType | undefined
  externalMessage?: string | undefined
  internalMessage?: string | undefined
  stacktrace?: string | undefined
  retryable?: boolean | undefined
  timestamp: bigint
  fromTraceMessage?: boolean | undefined
  streamDescriptor?: StreamDescriptor | undefined
}
type SynchronousJobRead = {
  id: string
  configType: JobConfigType
  configId?: string | undefined
  createdAt: bigint
  endedAt: bigint
  succeeded: boolean
  connectorConfigurationUpdated?: boolean | undefined
  logType?: LogFormatType | undefined
  logs?: LogEvents | LogRead | undefined
  failureReason?: FailureReason | undefined
}
type SourceDefinitionSpecificationRead = {
  sourceDefinitionId: SourceDefinitionId
  documentationUrl?: string | undefined
  connectionSpecification?: SourceDefinitionSpecification | undefined
  advancedAuth?: AdvancedAuth | undefined
  advancedAuthGlobalCredentialsAvailable?: boolean | undefined
  jobInfo: SynchronousJobRead
}
type ResolveActorDefinitionVersionRequestBody = {
  actorDefinitionId: ActorDefinitionId
  actorType: ActorType
  dockerImageTag: string
}
type ActorDefinitionVersionId = string
type ResolveActorDefinitionVersionResponse = {
  versionId: ActorDefinitionVersionId
  dockerRepository: string
  dockerImageTag: string
  supportRefreshes: boolean
  supportFileTransfer: boolean
  supportDataActivation: boolean
  connectorIPCOptions?: ConnectorIPCOptions | undefined
}
type GetActorDefinitionVersionDefaultRequestBody = { actorDefinitionId: ActorDefinitionId }
type ActorDefinitionSpec = {
  name: string
  dockerRepository: string
  dockerImageTag: string
  documentationUrl: string
  icon?: string | undefined
  resourceRequirements?: ScopedResourceRequirements | undefined
}
type ActorUpdateRequest = {
  actorType: ActorType
  actorDefinitionId?: string | undefined
  imageName: string
  imageTag: string
}
type ActorDefinitionMetadata = {
  name?: string | undefined
  icon?: string | undefined
  documentationUrl?: string | undefined
  resourceRequirements?: ScopedResourceRequirements | undefined
}
type ActorDefinitionFinishRequest = {
  actorUpdateRequest: ActorUpdateRequest
  metadata: ActorDefinitionMetadata
  commandId?: string | undefined
  workspaceId: string
}
type DeclarativeManifest = { [x: string]: unknown }
type ManifestVersion = bigint
type DeclarativeSourceManifest = {
  description: string
  manifest: DeclarativeManifest
  spec: SourceDefinitionSpecification
  version: ManifestVersion
}
type DeclarativeSourceDefinitionCreateManifestRequestBody = {
  workspaceId: WorkspaceId
  sourceDefinitionId: SourceDefinitionId
  setAsActiveManifest: boolean
  declarativeManifest: DeclarativeSourceManifest
  componentsFileContent?: string | undefined
}
type UpdateActiveManifestRequestBody = {
  workspaceId: WorkspaceId
  sourceDefinitionId: SourceDefinitionId
  version: ManifestVersion
}
type ListDeclarativeManifestsRequestBody = {
  workspaceId: WorkspaceId
  sourceDefinitionId: SourceDefinitionId
}
type DeclarativeManifestVersionRead = { version: bigint; isActive: boolean; description: string }
type DeclarativeManifestsReadList = { manifestVersions: DeclarativeManifestVersionRead[] }
type NullableActorDefinitionVersionId = string | null
type ConnectorBuilderProjectDetails = {
  name: string
  draftManifest?: DeclarativeManifest | undefined
  yamlManifest?: string | undefined
  componentsFileContent?: string | undefined
  baseActorDefinitionVersionId?: NullableActorDefinitionVersionId | undefined
  contributionPullRequestUrl?: (string | null) | undefined
  contributionActorDefinitionId?: (string | null) | undefined
}
type ConnectorBuilderProjectWithWorkspaceId = {
  workspaceId: WorkspaceId
  builderProject: ConnectorBuilderProjectDetails
}
type ConnectorBuilderProjectId = string
type ConnectorBuilderProjectIdWithWorkspaceId = {
  workspaceId: WorkspaceId
  builderProjectId: ConnectorBuilderProjectId
  version?: ManifestVersion | undefined
}
type ConnectorBuilderPublishRequestBody = {
  workspaceId: WorkspaceId
  builderProjectId: ConnectorBuilderProjectId
  name: string
  initialDeclarativeManifest: DeclarativeSourceManifest
  componentsFileContent?: string | undefined
}
type SourceDefinitionIdBody = { sourceDefinitionId: SourceDefinitionId }
type DeclarativeManifestRequestBody = { manifest: DeclarativeManifest }
type DeclarativeManifestBaseImageRead = { baseImage?: string | undefined }
type ExistingConnectorBuilderProjectWithWorkspaceId = {
  workspaceId: WorkspaceId
  builderProjectId: ConnectorBuilderProjectId
  builderProject: ConnectorBuilderProjectDetails
}
type BaseActorDefinitionVersionInfo = {
  name: string
  dockerRepository: string
  dockerImageTag: string
  actorDefinitionId: ActorDefinitionId
  icon?: string | undefined
  documentationUrl?: string | undefined
}
type ContributionInfo = { pullRequestUrl: string; actorDefinitionId: ActorDefinitionId }
type ConnectorBuilderProjectDetailsRead = {
  name: string
  builderProjectId: ConnectorBuilderProjectId
  sourceDefinitionId?: SourceDefinitionId | undefined
  activeDeclarativeManifestVersion?: ManifestVersion | undefined
  hasDraft: boolean
  updatedAt?: bigint | undefined
  baseActorDefinitionVersionInfo?: BaseActorDefinitionVersionInfo | undefined
  contributionInfo?: ContributionInfo | undefined
  componentsFileContent?: string | undefined
}
type ConnectorBuilderProjectReadList = { projects: ConnectorBuilderProjectDetailsRead[] }
type DeclarativeManifestRead = {
  manifest?: DeclarativeManifest | undefined
  isDraft?: boolean | undefined
  version?: ManifestVersion | undefined
  description?: string | undefined
}
type ConnectorBuilderProjectTestingValues = { [x: string]: unknown }
type ConnectorBuilderProjectRead = {
  builderProject: ConnectorBuilderProjectDetailsRead
  declarativeManifest?: DeclarativeManifestRead | undefined
  testingValues?: ConnectorBuilderProjectTestingValues | undefined
}
type BuilderProjectForDefinitionRequestBody = {
  actorDefinitionId: ActorDefinitionId
  workspaceId: WorkspaceId
}
type BuilderProjectForDefinitionResponse = {
  builderProjectId?: (string | null) | undefined
  workspaceId?: (string | null) | undefined
}
type ConnectorBuilderProjectTestingValuesUpdate = {
  workspaceId: WorkspaceId
  builderProjectId: ConnectorBuilderProjectId
  spec: SourceDefinitionSpecification
  testingValues: ConnectorBuilderProjectTestingValues
}
type ConnectorBuilderProjectStreamReadRequestBody = {
  workspaceId: WorkspaceId
  builderProjectId: ConnectorBuilderProjectId
  manifest: DeclarativeManifest
  streamName: string
  customComponentsCode?: string | undefined
  formGeneratedManifest?: boolean | undefined
  recordLimit?: number | undefined
  pageLimit?: number | undefined
  sliceLimit?: number | undefined
  state?: { [x: string]: unknown }[] | undefined
}
type ConnectorBuilderHttpRequest = {
  url: string
  parameters?: { [x: string]: unknown } | undefined
  body?: string | undefined
  headers?: { [x: string]: unknown } | undefined
  http_method: 'GET' | 'POST' | 'PUT' | 'PATCH'
}
type ConnectorBuilderHttpResponse = {
  status: number
  body?: string | undefined
  headers?: { [x: string]: unknown } | undefined
}
type ConnectorBuilderAuxiliaryRequest = {
  description: string
  request: ConnectorBuilderHttpRequest
  response: ConnectorBuilderHttpResponse
  title: string
  type:
    | 'HTTP'
    | 'AUTH'
    | 'PARENT_STREAM'
    | 'ASYNC_CREATE'
    | 'ASYNC_POLL'
    | 'ASYNC_ABORT'
    | 'ASYNC_DELETE'
}
type ConnectorBuilderProjectStreamRead = {
  logs: {
    message: string
    level: 'INFO' | 'WARN' | 'ERROR' | 'FATAL'
    internal_message?: string | undefined
    stacktrace?: string | undefined
  }[]
  slices: {
    pages: {
      records: { [x: string]: unknown }[]
      request?: ConnectorBuilderHttpRequest | undefined
      response?: ConnectorBuilderHttpResponse | undefined
    }[]
    slice_descriptor?: { [x: string]: unknown } | undefined
    state?: { [x: string]: unknown }[] | undefined
    auxiliary_requests?: ConnectorBuilderAuxiliaryRequest[] | undefined
  }[]
  test_read_limit_reached: boolean
  auxiliary_requests?: ConnectorBuilderAuxiliaryRequest[] | undefined
  inferred_schema?: { [x: string]: unknown } | undefined
  inferred_datetime_formats?: { [x: string]: unknown } | undefined
  latest_config_update?: ConnectorBuilderProjectTestingValues | undefined
}
type ConnectorBuilderProjectFullResolveRequestBody = {
  workspaceId?: WorkspaceId | undefined
  builderProjectId?: ConnectorBuilderProjectId | undefined
  streamLimit?: number | undefined
  manifest: DeclarativeManifest
}
type ConnectorBuilderResolvedManifest = { manifest: { [x: string]: unknown } }
type KnownExceptionInfo = {
  message?: string | undefined
  exceptionClassName?: string | undefined
  exceptionStack?: string[] | undefined
  rootCauseExceptionClassName?: string | undefined
  rootCauseExceptionStack?: string[] | undefined
  details?: { [x: string]: unknown } | undefined
  errorId?: string | undefined
}
type ConnectorBuilderProjectResolveRequestBody = {
  workspaceId?: WorkspaceId | undefined
  builderProjectId?: ConnectorBuilderProjectId | undefined
  manifest: DeclarativeManifest
}
type ConnectorBuilderCapabilities = { customCodeExecution: boolean }
type ConnectorBuilderProjectForkRequestBody = {
  workspaceId: WorkspaceId
  baseActorDefinitionId: SourceDefinitionId
}
type CheckContributionRequestBody = { connector_image_name: string }
type CheckContributionRead = {
  connector_name?: string | undefined
  connector_description?: string | undefined
  github_url?: string | undefined
  connector_exists: boolean
}
type GenerateContributionRequestBody = {
  name: string
  connector_image_name: string
  connector_description: string
  github_token: string
  manifest_yaml: string
  custom_components?: string | undefined
  base_image: string
  contribution_description: string
}
type GenerateContributionResponse = { pull_request_url: string; actor_definition_id: string }
type AssistV1ProcessRequestBody = { [x: string]: unknown }
type AssistV1Process = { [x: string]: unknown }
type ActorId = string
type ConnectorDocumentationRequestBody = {
  actorType: ActorType
  actorDefinitionId: ActorDefinitionId
  workspaceId: WorkspaceId
  actorId?: ActorId | undefined
}
type ConnectorDocumentationRead = { doc: string }
type SourceCreate = {
  sourceDefinitionId: SourceDefinitionId
  connectionConfiguration: SourceConfiguration
  workspaceId: WorkspaceId
  name: string
  secretId?: string | undefined
  resourceAllocation?: ScopedResourceRequirements | undefined
  createAsDraft?: boolean | undefined
}
type SourceUpdate = {
  sourceId: SourceId
  connectionConfiguration: SourceConfiguration
  name: string
  secretId?: string | undefined
  resourceAllocation?: ScopedResourceRequirements | undefined
}
type PartialSourceUpdate = {
  sourceId: SourceId
  connectionConfiguration?: SourceConfiguration | undefined
  name?: string | undefined
  secretId?: string | undefined
  resourceAllocation?: ScopedResourceRequirements | undefined
}
type ActorListSortKey =
  | 'actorName_asc'
  | 'actorName_desc'
  | 'actorDefinitionName_asc'
  | 'actorDefinitionName_desc'
  | 'lastSync_asc'
  | 'lastSync_desc'
type ActorListFilters = { states?: ActorStatus[] | undefined; searchTerm?: string | undefined }
type ActorListCursorPaginatedRequestBody = {
  workspaceId: WorkspaceId
  cursor?: ConnectionId | undefined
  sortKey?: ActorListSortKey | undefined
  filters?: ActorListFilters | undefined
  pageSize?: number | undefined
}
type SourceReadList = {
  sources: SourceRead[]
  page_size?: number | undefined
  num_connections?: number | undefined
}
type SourceIdWithSecretCoordinatesRequestBody = {
  sourceId: SourceId
  includeSecretCoordinates?: boolean | undefined
}
type SourceMetadata = { workspaceName: string }
type SourceReadWithMetadata = {
  sourceDefinitionId: SourceDefinitionId
  sourceId: SourceId
  workspaceId: WorkspaceId
  connectionConfiguration: SourceConfiguration
  name: string
  sourceName: string
  icon?: string | undefined
  isVersionOverrideApplied?: boolean | undefined
  isEntitled?: boolean | undefined
  breakingChanges?: ActorDefinitionVersionBreakingChanges | undefined
  supportState?: SupportState | undefined
  status?: ActorStatus | undefined
  createdAt: bigint
  isDraft?: boolean | undefined
  resourceAllocation?: ScopedResourceRequirements | undefined
  numConnections?: number | undefined
  lastSync?: bigint | undefined
  connectionJobStatuses?: { [x: string]: number } | undefined
  metadata: SourceMetadata
}
type ActorCatalogWithUpdatedAt = {
  updatedAt?: bigint | undefined
  catalog?: { [x: string]: unknown } | undefined
}
type SourceSearch = {
  sourceDefinitionId?: SourceDefinitionId | undefined
  sourceId?: SourceId | undefined
  workspaceId?: WorkspaceId | undefined
  connectionConfiguration?: SourceConfiguration | undefined
  name?: string | undefined
  sourceName?: string | undefined
}
type SkillDocsResponse = { [x: string]: unknown }
type SourceExecuteProblem = {
  status: number
  type: string
  title: string
  detail: string
  documentationUrl?: (string | null) | undefined
  data?: ({ [x: string]: unknown } | null) | undefined
}
type DestinationExecuteParams = { [x: string]: unknown }
type DestinationExecuteRequest = {
  entity: string
  action: string
  params?: DestinationExecuteParams | undefined
  select_fields?: (string[] | null) | undefined
  exclude_fields?: (string[] | null) | undefined
  skip_truncation?: boolean | undefined
  intent?: (string | null) | undefined
}
type DestinationExecuteData = { [x: string]: unknown } | null
type DestinationExecuteMeta = { [x: string]: unknown }
type DestinationExecuteResponse = {
  data: DestinationExecuteData
  meta?: DestinationExecuteMeta | undefined
}
type SourceExecuteParams = { [x: string]: unknown }
type SourceExecuteRequest = {
  entity: string
  action: string
  params?: SourceExecuteParams | undefined
  select_fields?: (string[] | null) | undefined
  exclude_fields?: (string[] | null) | undefined
  skip_truncation?: boolean | undefined
  intent?: (string | null) | undefined
}
type SourceExecuteData = { [x: string]: unknown } | null
type SourceExecuteMeta = { [x: string]: unknown }
type SourceExecuteResponse = { data: SourceExecuteData; meta?: SourceExecuteMeta | undefined }
type CheckConnectionRead = {
  status?: 'succeeded' | 'failed' | undefined
  message?: string | undefined
  jobInfo: SynchronousJobRead
}
type WorkloadPriority = 'high' | 'default'
type SourceDiscoverSchemaRequestBody = {
  sourceId: SourceId
  connectionId?: string | undefined
  disable_cache?: boolean | undefined
  priority?: WorkloadPriority | undefined
}
type FieldName = string[]
type FieldSchema = { [x: string]: unknown }
type FieldAdd = { schema?: FieldSchema | undefined }
type FieldRemove = { schema?: FieldSchema | undefined }
type FieldSchemaUpdate = { oldSchema: FieldSchema; newSchema: FieldSchema }
type FieldTransform = {
  transformType: 'add_field' | 'remove_field' | 'update_field_schema'
  fieldName: FieldName
  breaking: boolean
  addField?: FieldAdd | undefined
  removeField?: FieldRemove | undefined
  updateFieldSchema?: FieldSchemaUpdate | undefined
}
type StreamAttributePrimaryKeyUpdate = {
  oldPrimaryKey?: FieldName[] | undefined
  newPrimaryKey?: FieldName[] | undefined
}
type StreamAttributeTransform = {
  transformType: 'update_primary_key'
  breaking: boolean
  updatePrimaryKey?: StreamAttributePrimaryKeyUpdate | undefined
}
type StreamTransform = {
  transformType: 'add_stream' | 'remove_stream' | 'update_stream'
  streamDescriptor: StreamDescriptor
  updateStream?:
    | { fieldTransforms: FieldTransform[]; streamAttributeTransforms: StreamAttributeTransform[] }
    | undefined
}
type CatalogDiff = { transforms: StreamTransform[] }
type SourceDiscoverSchemaRead = {
  catalog?: AirbyteCatalog | undefined
  jobInfo?: SynchronousJobRead | undefined
  catalogId?: string | undefined
  catalogDiff?: CatalogDiff | undefined
  breakingChange?: boolean | undefined
  connectionStatus?: ConnectionStatus | undefined
}
type SourceAutoPropagateChange = {
  catalog: AirbyteCatalog
  catalogId: string
  sourceId: string
  workspaceId: string
}
type SourceDiscoverSchemaWriteRequestBody = {
  catalog: AirbyteCatalog
  sourceId?: SourceId | undefined
  connectorVersion?: string | undefined
  configurationHash?: string | undefined
}
type DiscoverCatalogResult = { catalogId: string }
type DestinationOperation = {
  objectName: string
  syncMode: DestinationSyncMode
  schema: StreamJsonSchema
  matchingKeys?: FieldName[] | undefined
}
type DestinationCatalog = { operations: DestinationOperation[] }
type DestinationDiscoverSchemaWriteRequestBody = {
  catalog: DestinationCatalog
  destinationId?: DestinationId | undefined
  connectorVersion?: string | undefined
  configurationHash?: string | undefined
}
type DestinationDefinitionUpdate = {
  name?: string | undefined
  destinationDefinitionId: DestinationDefinitionId
  dockerImageTag: string
  resourceRequirements?: ScopedResourceRequirements | undefined
  workspaceId: WorkspaceId
}
type DestinationDefinitionReadList = { destinationDefinitions: DestinationDefinitionRead[] }
type DestinationDefinitionIdRequestBody = { destinationDefinitionId: DestinationDefinitionId }
type PrivateDestinationDefinitionRead = {
  destinationDefinition: DestinationDefinitionRead
  granted: boolean
}
type PrivateDestinationDefinitionReadList = {
  destinationDefinitions: PrivateDestinationDefinitionRead[]
}
type DestinationDefinitionSpecification = { [x: string]: unknown }
type DestinationDefinitionCreate = {
  name: string
  dockerRepository: string
  dockerImageTag: string
  documentationUrl: string
  icon?: string | undefined
  resourceRequirements?: ScopedResourceRequirements | undefined
  connectorSpecification?: DestinationDefinitionSpecification | undefined
}
type CustomDestinationDefinitionCreate = {
  workspaceId?: WorkspaceId | undefined
  destinationDefinition: DestinationDefinitionCreate
  scopeId?: ScopeId | undefined
  scopeType?: ScopeType | undefined
}
type DestinationDefinitionIdWithWorkspaceId = {
  destinationDefinitionId: DestinationDefinitionId
  workspaceId: WorkspaceId
}
type DestinationIdRequestBody = { destinationId: DestinationId }
type DestinationDefinitionSpecificationRead = {
  destinationDefinitionId: DestinationDefinitionId
  documentationUrl?: string | undefined
  connectionSpecification?: DestinationDefinitionSpecification | undefined
  advancedAuth?: AdvancedAuth | undefined
  advancedAuthGlobalCredentialsAvailable?: boolean | undefined
  jobInfo: SynchronousJobRead
  supportedDestinationSyncModes?: DestinationSyncMode[] | undefined
}
type DestinationCreate = {
  workspaceId: WorkspaceId
  name: string
  destinationDefinitionId: DestinationDefinitionId
  connectionConfiguration: DestinationConfiguration
  resourceAllocation?: ScopedResourceRequirements | undefined
  createAsDraft?: boolean | undefined
}
type DestinationUpdate = {
  destinationId: DestinationId
  connectionConfiguration: DestinationConfiguration
  name: string
  resourceAllocation?: ScopedResourceRequirements | undefined
}
type PartialDestinationUpdate = {
  destinationId?: DestinationId | undefined
  connectionConfiguration?: DestinationConfiguration | undefined
  name?: string | undefined
  resourceAllocation?: ScopedResourceRequirements | undefined
}
type DestinationReadList = {
  destinations: DestinationRead[]
  page_size?: number | undefined
  num_connections?: number | undefined
}
type DestinationDiscoverSchemaRequestBody = {
  destinationId: DestinationId
  disableCache?: boolean | undefined
}
type DestinationDiscoverRead = { catalog: DestinationCatalog; catalogId: string }
type DestinationSearch = {
  destinationDefinitionId?: DestinationDefinitionId | undefined
  destinationId?: DestinationId | undefined
  workspaceId?: WorkspaceId | undefined
  connectionConfiguration?: DestinationConfiguration | undefined
  name?: string | undefined
  destinationName?: string | undefined
}
type ConnectionCreate = {
  name?: string | undefined
  namespaceDefinition?: NamespaceDefinitionType | undefined
  namespaceFormat?: string | undefined
  prefix?: string | undefined
  sourceId: SourceId
  destinationId: DestinationId
  operationIds?: OperationId[] | undefined
  syncCatalog?: AirbyteCatalog | undefined
  schedule?: ConnectionSchedule | undefined
  scheduleType?: ConnectionScheduleType | undefined
  scheduleData?: ConnectionScheduleData | undefined
  status: ConnectionStatus
  resourceRequirements?: ResourceRequirements | undefined
  sourceCatalogId?: string | undefined
  destinationCatalogId?: string | undefined
  dataplaneGroupId?: string | undefined
  notifySchemaChanges?: boolean | undefined
  notifySchemaChangesByEmail?: boolean | undefined
  nonBreakingChangesPreference?: NonBreakingChangesPreference | undefined
  backfillPreference?: SchemaChangeBackfillPreference | undefined
  tags?: Tag[] | undefined
  onDemandEnabled?: boolean | undefined
  enableIndexing?: boolean | undefined
}
type ConnectionUpdate = {
  connectionId: ConnectionId
  namespaceDefinition?: NamespaceDefinitionType | undefined
  namespaceFormat?: string | undefined
  name?: string | undefined
  prefix?: string | undefined
  operationIds?: (OperationId[] | null) | undefined
  syncCatalog?: AirbyteCatalog | undefined
  schedule?: ConnectionSchedule | undefined
  scheduleType?: ConnectionScheduleType | undefined
  scheduleData?: ConnectionScheduleData | undefined
  status?: ConnectionStatus | undefined
  resourceRequirements?: ResourceRequirements | undefined
  sourceCatalogId?: string | undefined
  destinationCatalogId?: string | undefined
  dataplaneGroupId?: string | undefined
  notifySchemaChanges?: boolean | undefined
  notifySchemaChangesByEmail?: boolean | undefined
  nonBreakingChangesPreference?: NonBreakingChangesPreference | undefined
  backfillPreference?: SchemaChangeBackfillPreference | undefined
  breakingChange?: boolean | undefined
  tags?: (Tag[] | null) | undefined
  onDemandEnabled?: boolean | undefined
  enableIndexing?: boolean | undefined
}
type ConnectionUpdateWithReason = {
  connectionUpdate: ConnectionUpdate
  updateReason?: string | undefined
  autoUpdate?: boolean | undefined
}
type ConnectionReadList = { connections: ConnectionRead[] }
type ListConnectionsForWorkspacesRequestBody = {
  workspaceIds: WorkspaceId[]
  userId: string
  pagination?: Pagination | undefined
  includeDeleted?: boolean | undefined
  tagIds?: TagId[] | undefined
}
type ConnectionStatusesRequestBody = { connectionIds: ConnectionId[] }
type ConnectionSyncStatus =
  | 'running'
  | 'queued'
  | 'failed'
  | 'paused'
  | 'pending'
  | 'incomplete'
  | 'synced'
type JobId = bigint
type JobStatus =
  | 'pending'
  | 'queued'
  | 'running'
  | 'incomplete'
  | 'failed'
  | 'succeeded'
  | 'cancelled'
type ResetConfig = { streamsToReset?: StreamDescriptor[] | undefined }
type JobRefreshConfig = { streamsToRefresh?: StreamDescriptor[] | undefined }
type JobAggregatedStats = {
  recordsEmitted: bigint
  bytesEmitted: bigint
  recordsCommitted: bigint
  bytesCommitted: bigint
  recordsRejected: bigint
}
type StreamStats = {
  streamName: string
  streamNamespace?: string | undefined
  recordsEmitted: bigint
  bytesEmitted: bigint
  recordsCommitted: bigint
  bytesCommitted: bigint
  recordsRejected: bigint
  wasBackfilled?: boolean | undefined
  wasResumed?: boolean | undefined
}
type StreamAggregatedStats = StreamStats[]
type JobRead = {
  id: JobId
  configType: JobConfigType
  configId: string
  enabledStreams?: StreamDescriptor[] | undefined
  createdAt: bigint
  updatedAt: bigint
  startedAt?: bigint | undefined
  status: JobStatus
  resetConfig?: ResetConfig | undefined
  refreshConfig?: JobRefreshConfig | undefined
  aggregatedStats?: JobAggregatedStats | undefined
  streamAggregatedStats?: StreamAggregatedStats | undefined
}
type AttemptNumber = number
type ConnectionStatusRead = {
  connectionId: ConnectionId
  connectionSyncStatus: ConnectionSyncStatus
  scheduleData?: ConnectionScheduleData | undefined
  lastSuccessfulSync?: bigint | undefined
  activeJob?: JobRead | undefined
  lastSyncJobId?: JobId | undefined
  lastSyncAttemptNumber?: AttemptNumber | undefined
  lastSyncJobCreatedAt?: bigint | undefined
  failureReason?: FailureReason | undefined
}
type ConnectionStatusesRead = ConnectionStatusRead[]
type StreamSyncProgressReadItem = {
  streamName: string
  streamNamespace?: string | undefined
  recordsEmitted?: bigint | undefined
  bytesEmitted?: bigint | undefined
  recordsCommitted?: bigint | undefined
  bytesCommitted?: bigint | undefined
  recordsRejected?: bigint | undefined
  configType: JobConfigType
}
type ConnectionSyncProgressRead = {
  connectionId: string
  jobId?: bigint | undefined
  streams: StreamSyncProgressReadItem[]
  recordsEmitted?: bigint | undefined
  recordsCommitted?: bigint | undefined
  recordsRejected?: bigint | undefined
  bytesEmitted?: bigint | undefined
  bytesCommitted?: bigint | undefined
  syncStartedAt?: bigint | undefined
  configType?: JobConfigType | undefined
}
type ConnectionUptimeHistoryRequestBody = {
  connectionId: ConnectionId
  numberOfJobs?: number | undefined
}
type ConnectionSyncResultRead = {
  status: JobStatus
  streamName: string
  streamNamespace?: string | undefined
}
type JobSyncResultRead = {
  jobId: JobId
  jobCreatedAt: bigint
  jobUpdatedAt: bigint
  streamStatuses: ConnectionSyncResultRead[]
  configType: JobConfigType
  recordsEmitted: bigint
  recordsCommitted: bigint
  bytesEmitted: bigint
  bytesCommitted: bigint
  recordsRejected: bigint
}
type ConnectionUptimeHistoryRead = JobSyncResultRead[]
type ConnectionDataHistoryRequestBody = { connectionId: ConnectionId; numberOfJobs: number }
type ConnectionStreamHistoryRequestBody = { connectionId: ConnectionId; timezone: string }
type ConnectionStreamHistoryReadItem = {
  timestamp: number
  streamName: string
  streamNamespace: string
  recordsCommitted: bigint
}
type ConnectionStreamHistoryRead = ConnectionStreamHistoryReadItem[]
type ConnectionEventId = string
type ConnectionEventIdRequestBody = {
  connectionEventId: ConnectionEventId
  connectionId: ConnectionId
}
type ConnectionEventType =
  | 'SYNC_STARTED'
  | 'SYNC_SUCCEEDED'
  | 'SYNC_INCOMPLETE'
  | 'SYNC_FAILED'
  | 'SYNC_CANCELLED'
  | 'REFRESH_STARTED'
  | 'REFRESH_SUCCEEDED'
  | 'REFRESH_INCOMPLETE'
  | 'REFRESH_FAILED'
  | 'REFRESH_CANCELLED'
  | 'CLEAR_STARTED'
  | 'CLEAR_SUCCEEDED'
  | 'CLEAR_INCOMPLETE'
  | 'CLEAR_FAILED'
  | 'CLEAR_CANCELLED'
  | 'CONNECTION_SETTINGS_UPDATE'
  | 'CONNECTION_ENABLED'
  | 'CONNECTION_DISABLED'
  | 'SCHEMA_UPDATE'
  | 'SCHEMA_CONFIG_UPDATE'
  | 'CONNECTOR_UPDATE'
  | 'UNKNOWN'
type UserReadInConnectionEvent = {
  id?: string | undefined
  email?: string | undefined
  name?: string | undefined
  isDeleted: boolean
}
type ConnectionEventWithDetails = {
  id: ConnectionEventId
  connectionId: ConnectionId
  eventType: ConnectionEventType
  summary: { [x: string]: unknown }
  details?: { [x: string]: unknown } | undefined
  createdAt?: bigint | undefined
  user?: UserReadInConnectionEvent | undefined
}
type ConnectionEventsRequestBody = {
  connectionId: ConnectionId
  eventTypes?: ConnectionEventType[] | undefined
  pagination?: Pagination | undefined
  createdAtStart?: string | undefined
  createdAtEnd?: string | undefined
}
type ConnectionEvent = {
  id: ConnectionEventId
  connectionId: ConnectionId
  eventType: ConnectionEventType
  summary: { [x: string]: unknown }
  createdAt?: bigint | undefined
  user?: UserReadInConnectionEvent | undefined
}
type ConnectionEventList = { events: ConnectionEvent[] }
type ConnectionEventsListMinimalRequestBody = {
  workspaceId: WorkspaceId
  eventTypes: ConnectionEventType[]
  createdAtStart: string
  createdAtEnd: string
}
type ConnectionEventMinimal = {
  eventId: ConnectionEventId
  connectionName: string
  connectionId: ConnectionId
  createdAt: ISO8601DateTime
  eventType: ConnectionEventType
}
type ConnectionEventListMinimal = { events: ConnectionEventMinimal[] }
type ConnectionEventsBackfillRequestBody = {
  connectionId: ConnectionId
  createdAtStart: string
  createdAtEnd: string
}
type JobIdRequestBody = { id: JobId }
type ConnectionLastJobPerStreamRequestBody = { connectionId: ConnectionId }
type ConnectionLastJobPerStreamReadItem = {
  streamName: string
  streamNamespace?: string | undefined
  jobId: JobId
  configType: JobConfigType
  jobStatus: JobStatus
  recordsCommitted?: bigint | undefined
  bytesCommitted?: bigint | undefined
  startedAt?: bigint | undefined
  endedAt: bigint
}
type ConnectionLastJobPerStreamRead = ConnectionLastJobPerStreamReadItem[]
type ConnectionAndJobIdRequestBody = { connectionId: ConnectionId; jobId: JobId }
type ActorDefinitionRequestBody = { actorDefinitionId: ActorDefinitionId; actorType: ActorType }
type ConnectionAutoPropagateSchemaChange = {
  catalog: AirbyteCatalog
  catalogId: string
  connectionId: string
  workspaceId: string
}
type ConnectionAutoPropagateResult = { propagatedDiff?: CatalogDiff | undefined }
type PostprocessDiscoveredCatalogRequestBody = { catalogId: string; connectionId: string }
type PostprocessDiscoveredCatalogResult = { appliedDiff?: CatalogDiff | undefined }
type ConnectionContextRead = {
  connectionId?: string | undefined
  sourceId?: string | undefined
  destinationId?: string | undefined
  sourceDefinitionId?: string | undefined
  destinationDefinitionId?: string | undefined
  workspaceId?: string | undefined
  organizationId?: string | undefined
}
type ConnectionStateType = 'global' | 'stream' | 'legacy' | 'not_set'
type StateBlob = { [x: string]: unknown }
type StreamState = { streamDescriptor: StreamDescriptor; streamState?: StateBlob | undefined }
type GlobalState = { shared_state?: StateBlob | undefined; streamStates: StreamState[] }
type ConnectionState = {
  stateType: ConnectionStateType
  connectionId: ConnectionId
  state?: StateBlob | undefined
  streamState?: StreamState[] | undefined
  globalState?: GlobalState | undefined
}
type ConnectionStateCreateOrUpdate = {
  connectionId: ConnectionId
  connectionState: ConnectionState
}
type ConnectionSearch = {
  connectionId?: ConnectionId | undefined
  name?: string | undefined
  namespaceDefinition?: NamespaceDefinitionType | undefined
  namespaceFormat?: string | undefined
  prefix?: string | undefined
  sourceId?: SourceId | undefined
  destinationId?: DestinationId | undefined
  schedule?: ConnectionSchedule | undefined
  scheduleType?: ConnectionScheduleType | undefined
  scheduleData?: ConnectionScheduleData | undefined
  status?: ConnectionStatus | undefined
  source?: SourceSearch | undefined
  destination?: DestinationSearch | undefined
}
type AttemptStatus = 'running' | 'failed' | 'succeeded'
type AttemptStats = {
  recordsEmitted?: bigint | undefined
  bytesEmitted?: bigint | undefined
  stateMessagesEmitted?: bigint | undefined
  bytesCommitted?: bigint | undefined
  recordsCommitted?: bigint | undefined
  recordsRejected?: bigint | undefined
  estimatedRecords?: bigint | undefined
  estimatedBytes?: bigint | undefined
  additionalStats?: { [x: string]: number } | undefined
}
type AttemptStreamStats = {
  streamName: string
  streamNamespace?: string | undefined
  stats: AttemptStats
}
type AttemptFailureSummary = { failures: FailureReason[]; partialSuccess?: boolean | undefined }
type AttemptRead = {
  id: bigint
  status: AttemptStatus
  createdAt: bigint
  updatedAt: bigint
  endedAt?: bigint | undefined
  bytesSynced?: bigint | undefined
  recordsSynced?: bigint | undefined
  totalStats?: AttemptStats | undefined
  streamStats?: AttemptStreamStats[] | undefined
  failureSummary?: AttemptFailureSummary | undefined
}
type AttemptInfoRead = {
  attempt: AttemptRead
  logType?: LogFormatType | undefined
  logs?: LogEvents | LogRead | undefined
}
type JobInfoRead = { job: JobRead; attempts: AttemptInfoRead[] }
type InternalOperationResult = { succeeded: boolean }
type ConnectionStream = { streamName: string; streamNamespace?: string | undefined }
type ConnectionStreamRequestBody = { connectionId: ConnectionId; streams: ConnectionStream[] }
type RefreshMode = 'Truncate' | 'Merge'
type ConnectionStreamRefreshRequestBody = {
  connectionId: ConnectionId
  refreshMode: RefreshMode
  streams?: ConnectionStream[] | undefined
}
type JobReadResponse = { job?: JobRead | undefined }
type OperatorType = 'normalization' | 'dbt' | 'webhook'
type OperatorWebhook = {
  webhookConfigId?: string | undefined
  webhookType?: 'dbtCloud' | undefined
  dbtCloud?: { accountId: bigint; jobId: bigint } | undefined
  executionUrl?: string | undefined
  executionBody?: string | undefined
}
type OperatorConfiguration = { operatorType: OperatorType; webhook?: OperatorWebhook | undefined }
type CheckOperationRead = { status: 'succeeded' | 'failed'; message?: string | undefined }
type OperationCreate = {
  workspaceId: WorkspaceId
  name: string
  operatorConfiguration: OperatorConfiguration
}
type OperationRead = {
  workspaceId: WorkspaceId
  operationId: OperationId
  name: string
  operatorConfiguration: OperatorConfiguration
}
type OperationUpdate = {
  operationId: OperationId
  name: string
  operatorConfiguration: OperatorConfiguration
}
type OperationReadList = { operations: OperationRead[] }
type OperationIdRequestBody = { operationId: OperationId }
type SourceCoreConfig = {
  sourceId?: SourceId | undefined
  sourceDefinitionId: SourceDefinitionId
  connectionConfiguration: SourceConfiguration
  workspaceId: WorkspaceId
}
type DestinationCoreConfig = {
  destinationId?: DestinationId | undefined
  destinationDefinitionId: DestinationDefinitionId
  connectionConfiguration: DestinationConfiguration
  workspaceId: WorkspaceId
}
type SetInstancewideSourceOauthParamsRequestBody = {
  sourceDefinitionId: SourceDefinitionId
  params: { [x: string]: unknown }
}
type OAuthInputConfiguration = OAuthConfiguration
type SourceOauthConsentRequest = {
  sourceDefinitionId: SourceDefinitionId
  workspaceId: WorkspaceId
  redirectUrl: string
  oAuthInputConfiguration?: OAuthInputConfiguration | undefined
  sourceId?: SourceId | undefined
  requestedScopes?: string[] | undefined
  requestedOptionalScopes?: string[] | undefined
}
type OAuthConsentRead = { consentUrl: string }
type EmbeddedSourceOauthConsentRequest = {
  sourceDefinitionId: SourceDefinitionId
  workspaceId: WorkspaceId
  redirectUrl: string
  sourceId?: SourceId | undefined
}
type BuilderProjectOauthConsentRequest = {
  builderProjectId: ConnectorBuilderProjectId
  workspaceId: WorkspaceId
  redirectUrl: string
  oAuthInputConfiguration?: OAuthInputConfiguration | undefined
}
type CompleteSourceOauthRequest = {
  sourceDefinitionId: SourceDefinitionId
  workspaceId: WorkspaceId
  redirectUrl?: string | undefined
  queryParams?: { [x: string]: unknown } | undefined
  oAuthInputConfiguration?: OAuthInputConfiguration | undefined
  returnSecretCoordinate?: boolean | undefined
  sourceId?: SourceId | undefined
  requestedScopes?: string[] | undefined
  requestedOptionalScopes?: string[] | undefined
}
type CompleteOAuthResponse = {
  request_succeeded: boolean
  request_error?: string | undefined
  auth_payload: { [x: string]: unknown }
}
type CompleteConnectorBuilderProjectOauthRequest = {
  builderProjectId: ConnectorBuilderProjectId
  workspaceId: WorkspaceId
  queryParams?: { [x: string]: unknown } | undefined
  redirectUrl?: string | undefined
}
type RevokeSourceOauthTokensRequest = {
  workspaceId: WorkspaceId
  sourceId: SourceId
  sourceDefinitionId: SourceDefinitionId
}
type SourceOAuthScopesRequest = { sourceDefinitionId: SourceDefinitionId; workspaceId: WorkspaceId }
type OAuthScopeItem = { scope: string }
type SourceOAuthScopesRead = {
  scopes: OAuthScopeItem[]
  optionalScopes: OAuthScopeItem[]
  scopeJoinStrategy: 'space' | 'comma' | 'plus'
}
type DestinationOauthConsentRequest = {
  destinationDefinitionId: DestinationDefinitionId
  workspaceId: WorkspaceId
  redirectUrl: string
  oAuthInputConfiguration?: OAuthInputConfiguration | undefined
  destinationId?: DestinationId | undefined
}
type CompleteDestinationOAuthRequest = {
  destinationDefinitionId: DestinationDefinitionId
  workspaceId: WorkspaceId
  redirectUrl?: string | undefined
  queryParams?: { [x: string]: unknown } | undefined
  oAuthInputConfiguration?: OAuthInputConfiguration | undefined
  destinationId?: DestinationId | undefined
}
type SetInstancewideDestinationOauthParamsRequestBody = {
  destinationDefinitionId: DestinationDefinitionId
  params: { [x: string]: unknown }
}
type WebBackendCheckUpdatesRead = { destinationDefinitions: number; sourceDefinitions: number }
type WebBackendValidateMappersRequestBody = {
  connectionId: ConnectionId
  streamDescriptor: StreamDescriptor
  mappers: ConfiguredStreamMapper[]
}
type FieldSpec = {
  name: string
  isSelectedPrimaryKey: boolean
  isSelectedCursor: boolean
  type:
    | 'STRING'
    | 'BOOLEAN'
    | 'DATE'
    | 'TIMESTAMP_WITHOUT_TIMEZONE'
    | 'TIMESTAMP_WITH_TIMEZONE'
    | 'TIME_WITHOUT_TIMEZONE'
    | 'TIME_WITH_TIMEZONE'
    | 'INTEGER'
    | 'NUMBER'
    | 'ARRAY'
    | 'OBJECT'
    | 'MULTI'
    | 'UNKNOWN'
}
type MapperValidationErrorType =
  | 'MISSING_MAPPER'
  | 'INVALID_MAPPER_CONFIG'
  | 'FIELD_NOT_FOUND'
  | 'FIELD_ALREADY_EXISTS'
type MapperValidationError = { type: MapperValidationErrorType; message: string }
type MapperValidationResult = {
  id?: string | undefined
  outputFields: FieldSpec[]
  inputFields: FieldSpec[]
  validationError?: MapperValidationError | undefined
}
type WebBackendValidateMappersResponse = {
  initialFields: FieldSpec[]
  outputFields: FieldSpec[]
  mappers: MapperValidationResult[]
}
type WebBackendConnectionListSortKey =
  | 'connectionName_asc'
  | 'connectionName_desc'
  | 'sourceName_asc'
  | 'sourceName_desc'
  | 'destinationName_asc'
  | 'destinationName_desc'
  | 'lastSync_asc'
  | 'lastSync_desc'
type WebBackendConnectionListFilters = {
  sourceDefinitionIds?: SourceDefinitionId[] | undefined
  destinationDefinitionIds?: DestinationDefinitionId[] | undefined
  statuses?: ('healthy' | 'failed' | 'running' | 'paused')[] | undefined
  states?: ActorStatus[] | undefined
  tagIds?: TagId[] | undefined
  searchTerm?: string | undefined
  onDemandEnabled?: boolean | undefined
}
type WebBackendConnectionListRequestBody = {
  workspaceId: WorkspaceId
  sourceId?: SourceId[] | undefined
  destinationId?: DestinationId[] | undefined
  cursor?: ConnectionId | undefined
  sortKey?: WebBackendConnectionListSortKey | undefined
  filters?: WebBackendConnectionListFilters | undefined
  pageSize?: number | undefined
}
type SourceSnippetRead = {
  sourceId: SourceId
  name: string
  sourceDefinitionId: SourceDefinitionId
  sourceName: string
  icon?: string | undefined
}
type DestinationSnippetRead = {
  destinationId: DestinationId
  name: string
  destinationDefinitionId: DestinationDefinitionId
  destinationName: string
  icon?: string | undefined
}
type JobCreatedAt = bigint
type SchemaChange = 'no_change' | 'non_breaking' | 'breaking'
type WebBackendConnectionListItem = {
  connectionId: ConnectionId
  name: string
  scheduleType?: ConnectionScheduleType | undefined
  scheduleData?: ConnectionScheduleData | undefined
  status: ConnectionStatus
  source: SourceSnippetRead
  destination: DestinationSnippetRead
  latestSyncJobCreatedAt?: JobCreatedAt | undefined
  latestSyncJobStatus?: JobStatus | undefined
  isSyncing: boolean
  schemaChange: SchemaChange
  sourceActorDefinitionVersion: ActorDefinitionVersionRead
  destinationActorDefinitionVersion: ActorDefinitionVersionRead
  tags: Tag[]
  onDemandEnabled: boolean
}
type WebBackendConnectionReadList = {
  connections: WebBackendConnectionListItem[]
  page_size?: number | undefined
  num_connections?: number | undefined
}
type WebBackendConnectionStatusCounts = {
  running: number
  queued: number
  healthy: number
  failed: number
  paused: number
  notSynced: number
}
type WebBackendConnectionRequestBody = {
  withRefreshedCatalog?: boolean | undefined
  connectionId: ConnectionId
}
type WebBackendConnectionRead = {
  connectionId: ConnectionId
  name: string
  namespaceDefinition?: NamespaceDefinitionType | undefined
  namespaceFormat?: string | undefined
  prefix?: string | undefined
  sourceId: SourceId
  destinationId: DestinationId
  syncCatalog: AirbyteCatalog
  schedule?: ConnectionSchedule | undefined
  scheduleType?: ConnectionScheduleType | undefined
  scheduleData?: ConnectionScheduleData | undefined
  status: ConnectionStatus
  statusReason?: (string | null) | undefined
  operationIds?: OperationId[] | undefined
  source: SourceRead
  destination: DestinationRead
  operations?: OperationRead[] | undefined
  latestSyncJobCreatedAt?: JobCreatedAt | undefined
  latestSyncJobStatus?: JobStatus | undefined
  isSyncing: boolean
  resourceRequirements?: ResourceRequirements | undefined
  catalogId?: string | undefined
  destinationCatalogId?: string | undefined
  catalogDiff?: CatalogDiff | undefined
  dataplaneGroupId?: string | undefined
  schemaChange: SchemaChange
  notifySchemaChanges: boolean
  notifySchemaChangesByEmail: boolean
  nonBreakingChangesPreference: NonBreakingChangesPreference
  createdAt?: bigint | undefined
  backfillPreference?: SchemaChangeBackfillPreference | undefined
  sourceActorDefinitionVersion: ActorDefinitionVersionRead
  destinationActorDefinitionVersion: ActorDefinitionVersionRead
  tags: Tag[]
  onDemandEnabled: boolean
}
type WebBackendConnectionCreate = {
  name?: string | undefined
  namespaceDefinition?: NamespaceDefinitionType | undefined
  namespaceFormat?: string | undefined
  prefix?: string | undefined
  sourceId: SourceId
  destinationId: DestinationId
  operationIds?: OperationId[] | undefined
  syncCatalog?: AirbyteCatalog | undefined
  schedule?: ConnectionSchedule | undefined
  scheduleType?: ConnectionScheduleType | undefined
  scheduleData?: ConnectionScheduleData | undefined
  status: ConnectionStatus
  resourceRequirements?: ResourceRequirements | undefined
  operations?: OperationCreate[] | undefined
  sourceCatalogId?: string | undefined
  destinationCatalogId?: string | undefined
  dataplaneGroupId?: string | undefined
  notifySchemaChanges?: boolean | undefined
  nonBreakingChangesPreference?: NonBreakingChangesPreference | undefined
  backfillPreference?: SchemaChangeBackfillPreference | undefined
  tags?: Tag[] | undefined
  onDemandEnabled?: boolean | undefined
}
type WebBackendOperationCreateOrUpdate = {
  operationId?: OperationId | undefined
  workspaceId: WorkspaceId
  name: string
  operatorConfiguration: OperatorConfiguration
}
type WebBackendConnectionUpdate = {
  name?: string | undefined
  connectionId: ConnectionId
  namespaceDefinition?: NamespaceDefinitionType | undefined
  namespaceFormat?: string | undefined
  prefix?: string | undefined
  syncCatalog?: AirbyteCatalog | undefined
  schedule?: ConnectionSchedule | undefined
  scheduleType?: ConnectionScheduleType | undefined
  scheduleData?: ConnectionScheduleData | undefined
  status?: ConnectionStatus | undefined
  resourceRequirements?: ResourceRequirements | undefined
  skipReset?: boolean | undefined
  operations?: (WebBackendOperationCreateOrUpdate[] | null) | undefined
  sourceCatalogId?: string | undefined
  destinationCatalogId?: string | undefined
  dataplaneGroupId?: string | undefined
  notifySchemaChanges?: boolean | undefined
  notifySchemaChangesByEmail?: boolean | undefined
  nonBreakingChangesPreference?: NonBreakingChangesPreference | undefined
  backfillPreference?: SchemaChangeBackfillPreference | undefined
  tags?: (Tag[] | null) | undefined
  onDemandEnabled?: boolean | undefined
}
type WebBackendDescribeCronExpressionRequestBody = { cronExpression: string }
type WebBackendCronExpressionDescription = {
  cronExpression: string
  description: string
  nextExecutions: bigint[]
}
type WebBackendWorkspaceState = { workspaceId: WorkspaceId }
type WebBackendWorkspaceStateResult = {
  hasConnections: boolean
  hasSources: boolean
  hasDestinations: boolean
}
type WebappConfigResponse = {
  version: string
  edition: string
  datadogApplicationId?: string | undefined
  datadogClientToken?: string | undefined
  datadogSite?: string | undefined
  datadogService?: string | undefined
  datadogEnv?: string | undefined
  hockeystackApiKey?: string | undefined
  keycloakBaseUrl?: string | undefined
  launchdarklyKey?: string | undefined
  osanoKey?: string | undefined
  segmentToken?: string | undefined
  sonarApiUrl?: string | undefined
  coralAgentsApiUrl?: string | undefined
  zendeskKey?: string | undefined
  fullstoryGuidesOrgId?: string | undefined
}
type JobCreate = { connectionId: ConnectionId; isScheduled: boolean }
type JobListRequestBody = {
  configTypes: JobConfigType[]
  configId?: string | undefined
  includingJobId?: JobId | undefined
  pagination?: Pagination | undefined
  statuses?: JobStatus[] | undefined
  createdAtStart?: string | undefined
  createdAtEnd?: string | undefined
  updatedAtStart?: string | undefined
  updatedAtEnd?: string | undefined
  orderByField?: 'createdAt' | 'updatedAt' | undefined
  orderByMethod?: 'ASC' | 'DESC' | undefined
}
type JobWithAttemptsRead = { job?: JobRead | undefined; attempts?: AttemptRead[] | undefined }
type JobReadList = { jobs: JobWithAttemptsRead[]; totalJobCount: bigint }
type JobListForWorkspacesRequestBody = {
  configTypes: JobConfigType[]
  configId?: string | undefined
  workspaceIds?: WorkspaceId[] | undefined
  pagination?: Pagination | undefined
  statuses?: JobStatus[] | undefined
  createdAtStart?: string | undefined
  createdAtEnd?: string | undefined
  updatedAtStart?: string | undefined
  updatedAtEnd?: string | undefined
  orderByField?: 'createdAt' | 'updatedAt' | undefined
  orderByMethod?: 'ASC' | 'DESC' | undefined
}
type JobOptionalRead = { job?: JobRead | undefined }
type JobInfoLightRead = { job: JobRead }
type JobDebugRead = {
  id: JobId
  configType: JobConfigType
  configId: string
  status: JobStatus
  airbyteVersion: string
  sourceDefinition: SourceDefinitionRead
  destinationDefinition: DestinationDefinitionRead
}
type WorkflowStateRead = { running: boolean }
type JobDebugInfoRead = {
  job: JobDebugRead
  attempts: AttemptInfoRead[]
  workflowState?: WorkflowStateRead | undefined
}
type SyncInput = { jobId: JobId; attemptNumber: AttemptNumber }
type SyncJobInputRead = { [x: string]: unknown }
type CheckDataWorkerCapacityRead = { capacityAvailable: boolean; useOnDemandCapacity: boolean }
type JobExplainRead = { jobId: JobId; explanation: string }
type UserId = string
type UserIdRequestBody = { userId: UserId }
type UserStatus = 'invited' | 'registered' | 'disabled'
type UserRead = {
  name?: string | undefined
  userId: UserId
  defaultWorkspaceId?: WorkspaceId | undefined
  status?: UserStatus | undefined
  companyName?: string | undefined
  email: string
  news?: boolean | undefined
  metadata: { [x: string]: unknown }
  agenticEnabledAt?: string | undefined
}
type UserAuthIdRequestBody = { authUserId: string; isAgenticUser?: boolean | undefined }
type UserEmailRequestBody = { email: string }
type AuthProvider = 'airbyte' | 'google_identity_platform' | 'keycloak'
type UserGetOrCreateByAuthIdResponse = {
  userRead: UserRead
  authUserId: string
  authProvider: AuthProvider
  newUserCreated?: boolean | undefined
}
type UserUpdate = {
  name?: string | undefined
  userId: UserId
  defaultWorkspaceId?: WorkspaceId | undefined
  status?: UserStatus | undefined
  companyName?: string | undefined
  news?: boolean | undefined
  metadata?: { [x: string]: unknown } | undefined
}
type PermissionType =
  | 'instance_admin'
  | 'organization_admin'
  | 'organization_editor'
  | 'organization_runner'
  | 'organization_reader'
  | 'organization_member'
  | 'workspace_owner'
  | 'workspace_admin'
  | 'workspace_runner'
  | 'workspace_editor'
  | 'workspace_source_editor'
  | 'workspace_destination_editor'
  | 'workspace_reader'
type PermissionRead = {
  permissionId: string
  permissionType: PermissionType
  userId?: UserId | undefined
  workspaceId?: WorkspaceId | undefined
  organizationId?: OrganizationId | undefined
  groupId?: string | undefined
}
type WorkspaceUserAccessInfoRead = {
  userId: UserId
  userEmail: string
  userName: string
  workspaceId: WorkspaceId
  workspacePermission?: PermissionRead | undefined
  organizationPermission?: PermissionRead | undefined
}
type WorkspaceUserAccessInfoReadList = { usersWithAccess: WorkspaceUserAccessInfoRead[] }
type OrganizationIdRequestBody = { organizationId: string }
type OrganizationUserRead = {
  name?: string | undefined
  userId: UserId
  email: string
  permissionId: string
  permissionType: PermissionType
  organizationId: OrganizationId
}
type OrganizationUserReadList = { users: OrganizationUserRead[] }
type UserWithPermissionInfoRead = {
  name?: string | undefined
  userId?: UserId | undefined
  email?: string | undefined
  permissionId?: string | undefined
}
type UserWithPermissionInfoReadList = { users: UserWithPermissionInfoRead[] }
type PermissionCreate = {
  permissionId?: string | undefined
  permissionType: PermissionType
  userId: UserId
  workspaceId?: WorkspaceId | undefined
  organizationId?: OrganizationId | undefined
}
type PermissionIdRequestBody = { permissionId: string }
type PermissionCheckRequest = {
  permissionType: PermissionType
  userId: UserId
  workspaceId?: WorkspaceId | undefined
  organizationId?: OrganizationId | undefined
}
type PermissionCheckRead = { status: 'succeeded' | 'failed'; message?: string | undefined }
type PermissionsCheckMultipleWorkspacesRequest = {
  permissionType: PermissionType
  userId: UserId
  workspaceIds?: WorkspaceId[] | undefined
}
type PermissionUpdate = { permissionId: string; permissionType?: PermissionType | undefined }
type SecretPersistenceConfigGetRequestBody = { scopeType: ScopeType; scopeId: ScopeId }
type SecretPersistenceType = 'testing' | 'google' | 'vault' | 'aws' | 'azure'
type SecretPersistenceConfigurationJson = { [x: string]: unknown }
type SecretPersistenceConfig = {
  secretPersistenceType: SecretPersistenceType
  configuration: SecretPersistenceConfigurationJson
  scopeType: ScopeType
  scopeId: string
}
type CreateOrUpdateSecretsPersistenceConfigRequestBody = {
  secretPersistenceType: SecretPersistenceType
  configuration: { [x: string]: unknown }
  scope: ScopeType
  scopeId: string
}
type SecretStorageType =
  | 'local_testing'
  | 'google_secret_manager'
  | 'vault'
  | 'aws_secrets_manager'
  | 'azure_key_vault'
type SecretStorageCreateRequestBody = {
  descriptor: string
  secretStorageType: SecretStorageType
  scopeType: ScopeType
  scopeId: ScopeId
  config?: SecretPersistenceConfigurationJson | undefined
  isConfiguredFromEnvironment?: boolean | undefined
}
type SecretStorageId = string
type SecretStorageRead = {
  id: SecretStorageId
  descriptor?: string | undefined
  secretStorageType: SecretStorageType
  isConfiguredFromEnvironment: boolean
  scopeType: ScopeType
  scopeId: ScopeId
  config?: SecretPersistenceConfigurationJson | undefined
}
type SecretStorageListRequestBody = { scopeType: ScopeType; scopeId: ScopeId }
type SecretStorageReadList = { secretStorages: SecretStorageRead[] }
type SecretStorageIdRequestBody = { secretStorageId: SecretStorageId }
type MigrateSecretStorageRequestBody = {
  fromSecretStorageId: SecretStorageId
  toSecretStorageId: SecretStorageId
  scopeType: ScopeType
  scopeId: string
}
type PermissionDeleteUserFromWorkspaceRequestBody = { userId: UserId; workspaceId: WorkspaceId }
type PermissionReadList = { permissions: PermissionRead[] }
type HealthCheckRead = { available: boolean }
type StreamAttemptMetadata = {
  streamName: string
  streamNamespace?: string | undefined
  wasBackfilled: boolean
  wasResumed: boolean
}
type SaveStreamAttemptMetadataRequestBody = {
  jobId: JobId
  attemptNumber: AttemptNumber
  streamMetadata?: StreamAttemptMetadata[] | undefined
}
type SaveStatsRequestBody = {
  jobId: JobId
  attemptNumber: AttemptNumber
  stats: AttemptStats
  streamStats?: AttemptStreamStats[] | undefined
  connectionId?: ConnectionId | undefined
}
type AttemptSyncConfig = {
  sourceConfiguration: SourceConfiguration
  destinationConfiguration: DestinationConfiguration
  state?: ConnectionState | undefined
}
type SaveAttemptSyncConfigRequestBody = {
  jobId: JobId
  attemptNumber: AttemptNumber
  syncConfig: AttemptSyncConfig
}
type GetAttemptStatsRequestBody = { jobId: JobId; attemptNumber: AttemptNumber }
type StreamStatusJobType = 'SYNC' | 'RESET'
type StreamStatusListRequestBody = {
  attemptNumber?: AttemptNumber | undefined
  connectionId?: ConnectionId | undefined
  jobId?: JobId | undefined
  jobType?: StreamStatusJobType | undefined
  pagination: Pagination
  streamName?: string | undefined
  streamNamespace?: string | undefined
  workspaceId: WorkspaceId
}
type StreamStatusId = string
type StreamStatusIncompleteRunCause = 'FAILED' | 'CANCELED'
type StreamStatusRunState = 'PENDING' | 'RUNNING' | 'COMPLETE' | 'INCOMPLETE' | 'RATE_LIMITED'
type StreamStatusRateLimitedMetadata = { quotaReset?: bigint | undefined }
type StreamStatusRead = {
  attemptNumber: AttemptNumber
  connectionId: ConnectionId
  id: StreamStatusId
  jobId: JobId
  incompleteRunCause?: StreamStatusIncompleteRunCause | undefined
  jobType: StreamStatusJobType
  runState: StreamStatusRunState
  streamName: string
  streamNamespace?: string | undefined
  transitionedAt: bigint
  workspaceId: WorkspaceId
  metadata?: StreamStatusRateLimitedMetadata | undefined
}
type StreamStatusReadList = { streamStatuses?: StreamStatusRead[] | undefined }
type StreamStatusCreateRequestBody = {
  attemptNumber: AttemptNumber
  connectionId: ConnectionId
  jobId: JobId
  incompleteRunCause?: StreamStatusIncompleteRunCause | undefined
  jobType: StreamStatusJobType
  runState: StreamStatusRunState
  streamName: string
  streamNamespace?: string | undefined
  transitionedAt: bigint
  workspaceId: WorkspaceId
  metadata?: StreamStatusRateLimitedMetadata | undefined
}
type StreamStatusUpdateRequestBody = {
  attemptNumber: AttemptNumber
  connectionId: ConnectionId
  jobId: JobId
  incompleteRunCause?: StreamStatusIncompleteRunCause | undefined
  jobType: StreamStatusJobType
  runState: StreamStatusRunState
  streamName: string
  streamNamespace?: string | undefined
  transitionedAt: bigint
  workspaceId: WorkspaceId
  metadata?: StreamStatusRateLimitedMetadata | undefined
  id: StreamStatusId
}
type AuthConfiguration = {
  mode: 'none' | 'simple' | 'oidc'
  clientId?: string | undefined
  defaultRealm?: string | undefined
  authorizationServerUrl?: string | undefined
  audience?: string | undefined
  extraScopes?: string | undefined
}
type InstanceConfigurationResponse = {
  edition: 'community' | 'pro' | 'trial'
  version: string
  auth: AuthConfiguration
  airbyteUrl: string
  initialSetupComplete: boolean
  defaultUserId: string
  defaultOrganizationId: string
  defaultOrganizationEmail: string
  defaultWorkspaceId?: string | undefined
  trackingStrategy: 'logging' | 'segment'
}
type InstanceConfigurationSetupRequestBody = {
  email: string
  anonymousDataCollection: boolean
  initialSetupComplete: boolean
  displaySetupWizard: boolean
  userName?: string | undefined
  organizationName?: string | undefined
}
type JobRetryStateRequestBody = {
  id?: string | undefined
  connectionId: ConnectionId
  jobId: JobId
  successiveCompleteFailures: number
  totalCompleteFailures: number
  successivePartialFailures: number
  totalPartialFailures: number
}
type RetryStateRead = {
  id: string
  connectionId: ConnectionId
  jobId: JobId
  successiveCompleteFailures: number
  totalCompleteFailures: number
  successivePartialFailures: number
  totalPartialFailures: number
}
type ConnectionJobRequestBody = { connectionId: ConnectionId; jobId: JobId }
type BooleanRead = { value: boolean }
type PersistCancelJobRequestBody = {
  attemptFailureSummary: { [x: string]: unknown }
  attemptNumber: AttemptNumber
  connectionId: ConnectionId
  jobId: JobId
}
type CustomerPortalRequestBody = {
  organizationId: string
  returnUrl: string
  flow?: 'portal' | 'payment_method' | 'setup' | undefined
  plan?:
    | 'standard'
    | 'plus'
    | 'plus_40'
    | 'plus_100'
    | 'plus_250'
    | 'plus_500'
    | 'plus_1000'
    | 'plus_2000'
    | undefined
}
type CustomerPortalRead = { url: string }
type BillingBackfillUsageRequest = { jobIds: bigint[]; backfillId: string }
type BillingEvent = { [x: string]: unknown }
type InvoiceRead = {
  id: string
  number?: string | undefined
  total: bigint
  currency: string
  invoiceDate: bigint
  status: 'draft' | 'open' | 'paid' | 'void' | 'uncollectible'
  pdfUrl: string
  invoiceUrl: string
}
type ListInvoicesRead = { invoices: InvoiceRead[]; hasMore: boolean }
type AddressRead = {
  country?: string | undefined
  state?: string | undefined
  city?: string | undefined
  postalCode?: string | undefined
  line1?: string | undefined
  line2?: string | undefined
}
type PaymentMethodRead = {
  type: string
  cardBrand?: string | undefined
  cardLastDigits?: string | undefined
  cardExpireMonth?: bigint | undefined
  cardExpireYear?: bigint | undefined
}
type PaymentInformationRead = {
  customer?:
    | {
        email?: string | undefined
        customerAddress?: AddressRead | undefined
        shippingAddress?: AddressRead | undefined
        defaultPaymentMethod?: PaymentMethodRead | undefined
      }
    | undefined
}
type CreditBlockRead = { amount: number; expiryDate?: ISO8601DateTime | undefined }
type EntitlementPlanResponse = { planEnum: string; planId: string; planName: string }
type OrganizationSubscriptionInfoRead = {
  name: string
  selfServeSubscription: boolean
  cancellationDate?: ISO8601DateTime | undefined
  balanceHidden: boolean
  upcomingInvoice?: { currency: string; amount: string; invoiceDate: {} } | undefined
  credits?: { balance: number; blocks: CreditBlockRead[] } | undefined
  entitlementPlan?: EntitlementPlanResponse | undefined
  selfServePlan?:
    | 'standard'
    | 'plus_40'
    | 'plus_100'
    | 'plus_250'
    | 'plus_500'
    | 'plus_1000'
    | 'plus_2000'
    | undefined
  pendingPlanChange?:
    | {
        effectiveDate: ISO8601DateTime
        planName: string
        selfServePlan?:
          | 'standard'
          | 'plus_40'
          | 'plus_100'
          | 'plus_250'
          | 'plus_500'
          | 'plus_1000'
          | 'plus_2000'
          | undefined
      }
    | undefined
}
type OrganizationTrialStatusRead = {
  trialStatus: 'pre_trial' | 'in_trial' | 'post_trial'
  trialEndsAt?: ISO8601DateTime | undefined
}
type CancelSubscriptionRead = { subscriptionEndsAt: ISO8601DateTime }
type BillingNotificationSettingsRead = {
  organizationId: string
  configured: boolean
  recipientEmail?: (string | null) | undefined
  syncCreditThreshold: number
  invoiceAmountThreshold: number
}
type BillingNotificationSettingsUpdateRequestBody = {
  organizationId: string
  recipientEmail?: (string | null) | undefined
  syncCreditThreshold: number
  invoiceAmountThreshold: number
}
type OrganizationPaymentConfigRead = {
  organizationId: string
  paymentStatus: 'uninitialized' | 'okay' | 'grace_period' | 'disabled' | 'locked' | 'manual'
  subscriptionStatus: 'pre_subscription' | 'subscribed' | 'unsubscribed'
  paymentProviderId?: string | undefined
  gracePeriodEndAt?: ISO8601DateTime | undefined
  usageCategoryOverwrite?: 'free' | 'internal' | undefined
}
type OrganizationPaymentConfigUpdateRequestBody = {
  organizationId: string
  paymentStatus: 'uninitialized' | 'okay' | 'grace_period' | 'disabled' | 'locked' | 'manual'
  paymentProviderId?: string | undefined
  usageCategoryOverwrite?: 'free' | 'internal' | undefined
  gracePeriodEndAt?: ISO8601DateTime | undefined
  newGracePeriodReason?: string | undefined
}
type OrganizationLimits = { users?: Limit | undefined; workspaces?: Limit | undefined }
type OrganizationRead = {
  organizationId: string
  organizationName: string
  email: string
  ssoRealm?: string | undefined
  isAgentic?: boolean | undefined
  organizationLimits?: OrganizationLimits | undefined
}
type OrganizationSemanticSearchEnablementRead = {
  organizationId: string
  semanticSearchEnabled: boolean
}
type OrganizationSemanticSearchEnablementUpdateRequestBody = {
  organizationId: string
  semanticSearchEnabled: boolean
}
type OrganizationOnboardingStatusUpdateRequestBody = {
  organizationId: string
  status: OrganizationOnboardingStatus
}
type OrganizationOnboardingStatusRead = { status: OrganizationOnboardingStatus }
type OrganizationOnboardingMobileHandoffEmailRequestBody = {
  organizationId: string
  workspaceId: string
}
type OrganizationCreateRequestBody = {
  userId: string
  organizationName: string
  email: string
  isAgentic?: boolean | undefined
}
type OrganizationUpdateRequestBody = {
  organizationId: string
  organizationName?: string | undefined
  email?: string | undefined
}
type OrganizationAgenticStatusUpdateRequestBody = { organizationId: string; isAgentic: boolean }
type ListOrganizationsByUserRequestBody = {
  userId: string
  pagination?: Pagination | undefined
  nameContains?: string | undefined
}
type OrganizationReadList = { organizations: OrganizationRead[] }
type OrganizationUsageRequestBody = {
  organizationId: OrganizationId
  timeWindow: ConsumptionTimeWindow
}
type IndividualWorkspaceUsageRead = {
  workspace: { id: WorkspaceId; name: string; tombstoned: boolean }
  usage: UsageBucket
}
type OrganizationUsageRead = { data: IndividualWorkspaceUsageRead[] }
type OrganizationDataWorkerUsageRequestBody = {
  organizationId: OrganizationId
  startDate: string
  endDate: string
}
type DataWorkerUsage = { date: string; used: number }
type WorkspaceDataWorkerUsage = { id: WorkspaceId; name: string; dataWorkers: DataWorkerUsage[] }
type RegionDataWorkerUsage = { id: string; name: string; workspaces: WorkspaceDataWorkerUsage[] }
type OrganizationDataWorkerUsageRead = {
  organizationId: OrganizationId
  committedDataWorkers?: number | undefined
  regions: RegionDataWorkerUsage[]
}
type ListOrganizationSummariesRequestBody = {
  userId: UserId
  nameContains: string
  pagination: Pagination
}
type OrganizationSummary = {
  organization: OrganizationRead
  workspaces: WorkspaceRead[]
  memberCount: number
}
type ListOrganizationSummariesResponse = {
  organizationSummaries?: OrganizationSummary[] | undefined
}
type GroupRead = {
  groupId: string
  name: string
  description?: (string | null) | undefined
  organizationId: string
  memberCount: bigint
}
type GroupReadList = { groups: GroupRead[] }
type GroupIdRequestBody = { groupId: string }
type GroupCreate = { organizationId: string; name: string; description?: string | undefined }
type GroupUpdate = { groupId: string; name: string; description?: (string | null) | undefined }
type GroupMemberRead = {
  memberId: string
  groupId: string
  userId: string
  userEmail: string
  userName: string
}
type GroupMemberReadList = { members: GroupMemberRead[] }
type GroupMemberRequestBody = { groupId: string; userId: string }
type GroupPermissionRead = {
  permissionId: string
  groupId: string
  permissionType: PermissionType
  workspaceId?: (string | null) | undefined
  organizationId?: (string | null) | undefined
}
type GroupPermissionReadList = { permissions: GroupPermissionRead[] }
type PublicPermissionType =
  | 'organization_admin'
  | 'organization_editor'
  | 'organization_runner'
  | 'organization_reader'
  | 'organization_member'
  | 'workspace_admin'
  | 'workspace_editor'
  | 'workspace_source_editor'
  | 'workspace_destination_editor'
  | 'workspace_runner'
  | 'workspace_reader'
type GroupPermissionCreate = {
  groupId: string
  permissionType: PublicPermissionType
  workspaceId?: (string | null) | undefined
  organizationId?: (string | null) | undefined
}
type GroupPermissionIdRequestBody = { groupId: string; permissionId: string }
type DomainVerificationResponse = {
  id: string
  organizationId: string
  domain: string
  verificationMethod: 'DNS_TXT' | 'LEGACY'
  status: 'PENDING' | 'VERIFIED' | 'FAILED' | 'EXPIRED'
  dnsRecordName?: (string | null) | undefined
  dnsRecordValue?: (string | null) | undefined
  attempts: number
  expiresAt?: (bigint | null) | undefined
  verifiedAt?: (bigint | null) | undefined
  lastCheckedAt?: (bigint | null) | undefined
  createdAt: bigint
}
type DomainVerificationListResponse = { domainVerifications: DomainVerificationResponse[] }
type DomainVerificationIdRequestBody = { domainVerificationId: string }
type DeploymentMetadataRead = { id: string; mode: string; version: string }
type ApplicationRead = {
  id: string
  name: string
  clientId: string
  clientSecret: string
  createdAt: bigint
}
type ApplicationReadList = { applications: ApplicationRead[] }
type ApplicationId = string
type ApplicationIdRequestBody = {
  applicationId: ApplicationId
  includeTombstone?: boolean | undefined
}
type ApplicationCreate = { name: string }
type ApplicationTokenRequest = { client_id: string; client_secret: string }
type AccessToken = { access_token: string }
type ScopedConfigurationListRequestBody = {
  config_key?: string | undefined
  origin_type?: string | undefined
}
type ScopedConfigurationRead = {
  id?: string | undefined
  value?: string | undefined
  value_name?: string | undefined
  description?: string | undefined
  reference_url?: string | undefined
  config_key?: string | undefined
  resource_id?: string | undefined
  resource_name?: string | undefined
  resource_type?: string | undefined
  scope_id?: string | undefined
  scope_type?: string | undefined
  scope_name?: string | undefined
  origin?: string | undefined
  origin_type?: string | undefined
  origin_name?: string | undefined
  created_at?: string | undefined
  updated_at?: string | undefined
  expires_at?: string | undefined
}
type ScopedConfigurationListResponse = {
  scopedConfigurations?: ScopedConfigurationRead[] | undefined
}
type ScopedConfigurationContextRequestBody = {
  config_key: string
  resource_id: string
  resource_type: string
  scope_id: string
  scope_type: string
}
type ScopedConfigurationContextResponse = {
  activeConfiguration?: ScopedConfigurationRead | undefined
  ancestorConfigurations?: ScopedConfigurationRead[] | undefined
  descendantConfigurations?: ScopedConfigurationRead[] | undefined
}
type ScopedConfigurationCreateRequestBody = {
  value: string
  description?: string | undefined
  reference_url?: string | undefined
  config_key: string
  resource_id?: string | undefined
  resource_type?: string | undefined
  scope_id: string
  scope_type: string
  origin: string
  origin_type: string
  expires_at?: string | undefined
}
type ScopedConfigurationCreateResponse = { data?: ScopedConfigurationRead | undefined }
type ScopedConfigurationReadRequestBody = { scopedConfigurationId: string }
type ScopedConfigurationReadResponse = { data?: ScopedConfigurationRead | undefined }
type ScopedConfigurationUpdateRequestBody = {
  scopedConfigurationId: string
  data: ScopedConfigurationCreateRequestBody
}
type ScopedConfigurationUpdateResponse = { data?: ScopedConfigurationRead | undefined }
type ScopedConfigurationDeleteRequestBody = { scopedConfigurationId: string }
type ScopedConfigurationDeleteResponse = { scopedConfigurationId?: string | undefined }
type ConnectorRolloutListRequestBody = {
  docker_repository?: string | undefined
  docker_image_tag: string
  actor_definition_id: string
}
type ConnectorRolloutState =
  | 'initialized'
  | 'workflow_started'
  | 'in_progress'
  | 'paused'
  | 'finalizing'
  | 'succeeded'
  | 'errored'
  | 'failed_rolled_back'
  | 'canceled'
type ConnectorRolloutStrategy = 'manual' | 'automated' | 'overridden'
type ConnectorRolloutActorSelectionInfo = {
  num_actors: number
  num_actors_eligible_or_already_pinned: number
  num_pinned_to_connector_rollout: number
}
type ConnectorRolloutActorSyncInfo = {
  actor_id: string
  num_succeeded: number
  num_failed: number
  num_connections: number
}
type CustomerTier = 'TIER_0' | 'TIER_1' | 'TIER_2' | 'ALL'
type ConnectorRolloutRead = {
  docker_repository?: string | undefined
  docker_image_tag?: string | undefined
  id: string
  workflow_run_id?: string | undefined
  actor_definition_id: string
  release_candidate_version_id: string
  initial_version_id?: string | undefined
  state: ConnectorRolloutState
  initial_rollout_pct?: number | undefined
  current_target_rollout_pct?: number | undefined
  final_target_rollout_pct?: number | undefined
  has_breaking_changes?: boolean | undefined
  max_step_wait_time_mins?: number | undefined
  updated_by?: string | undefined
  created_at?: string | undefined
  updated_at?: string | undefined
  completed_at?: string | undefined
  expires_at?: string | undefined
  error_msg?: string | undefined
  failed_reason?: string | undefined
  paused_reason?: string | undefined
  rollout_strategy?: ConnectorRolloutStrategy | undefined
  actor_selection_info?: ConnectorRolloutActorSelectionInfo | undefined
  actor_syncs?: { [x: string]: ConnectorRolloutActorSyncInfo } | undefined
  tier?: CustomerTier | undefined
  tag?: string | undefined
}
type ConnectorRolloutListResponse = { connectorRollouts?: ConnectorRolloutRead[] | undefined }
type ConnectorRolloutListByActorDefinitionIdRequestBody = { actor_definition_id: string }
type ConnectorRolloutReadRequestBody = { id: string }
type ConnectorRolloutReadResponse = { data: ConnectorRolloutRead }
type ConnectorRolloutGetActorSyncInfoRequestBody = { id: string }
type ConnectorRolloutActorSyncInfoResponse = {
  data: {
    actor_selection_info?: ConnectorRolloutActorSelectionInfo | undefined
    syncs?: { [x: string]: ConnectorRolloutActorSyncInfo } | undefined
  }
}
type ConnectorRolloutStartRequestBody = {
  id: string
  workflow_run_id: string
  rollout_strategy: ConnectorRolloutStrategy
  updated_by?: string | undefined
  migrate_pins?: boolean | undefined
}
type ConnectorRolloutStartResponse = { data: ConnectorRolloutRead }
type ConnectorRolloutRequestBody = {
  id: string
  actor_ids?: ActorId[] | undefined
  target_percentage?: number | undefined
  rollout_strategy: ConnectorRolloutStrategy
  updated_by?: string | undefined
}
type ConnectorRolloutResponse = { data: ConnectorRolloutRead }
type ConnectorRolloutUpdateStateRequestBody = {
  id?: string | undefined
  docker_repository?: string | undefined
  docker_image_tag?: string | undefined
  actor_definition_id?: string | undefined
  state: ConnectorRolloutState
  error_msg?: string | undefined
  failed_reason?: string | undefined
  paused_reason?: string | undefined
  updated_by?: string | undefined
}
type ConnectorRolloutStateTerminal = 'succeeded' | 'failed_rolled_back' | 'canceled'
type ConnectorRolloutFinalizeRequestBody = {
  id: string
  state: ConnectorRolloutStateTerminal
  error_msg?: string | undefined
  failed_reason?: string | undefined
  rollout_strategy: ConnectorRolloutStrategy
  updated_by?: string | undefined
  retain_pins_on_cancellation?: boolean | undefined
}
type ConnectorRolloutFinalizeResponse = { data: ConnectorRolloutRead }
type ConnectorRolloutTierFilter = { tier?: CustomerTier | undefined }
type ConnectorRolloutJobBypassFilter = { shouldIgnoreJobs?: boolean | undefined }
type ConnectorRolloutFilters = {
  tierFilter?: ConnectorRolloutTierFilter | undefined
  jobBypassFilter?: ConnectorRolloutJobBypassFilter | undefined
}
type ConnectorRolloutManualStartRequestBody = {
  docker_repository: string
  docker_image_tag: string
  actor_definition_id: string
  updated_by: string
  rollout_strategy: ConnectorRolloutStrategy
  initial_rollout_pct?: number | undefined
  final_target_rollout_pct?: number | undefined
  migrate_pins?: boolean | undefined
  filters?: ConnectorRolloutFilters | undefined
}
type ConnectorRolloutManualRolloutRequestBody = {
  docker_repository: string
  docker_image_tag: string
  actor_definition_id: string
  id: string
  updated_by: string
  actor_ids?: ActorId[] | undefined
  target_percentage?: number | undefined
  migrate_pins?: boolean | undefined
  filters?: ConnectorRolloutFilters | undefined
}
type ConnectorRolloutManualRolloutResponse = { status?: string | undefined }
type ConnectorRolloutManualFinalizeRequestBody = {
  docker_repository: string
  docker_image_tag: string
  actor_definition_id: string
  id: string
  updated_by: string
  state: ConnectorRolloutStateTerminal
  error_msg?: string | undefined
  failed_reason?: string | undefined
  retain_pins_on_cancellation?: boolean | undefined
}
type ConnectorRolloutManualFinalizeResponse = { status?: string | undefined }
type OrganizationIsEntitledRequestBody = { organization_id: string; feature_id: string }
type OrganizationIsEntitledResponse = {
  feature_id: string
  is_entitled: boolean
  access_denied_reason?: string | undefined
  feature_name?: string | undefined
  value?: bigint | undefined
  is_unlimited?: boolean | undefined
}
type GetEntitlementsByOrganizationIdRequestBody = { organization_id: string }
type GetEntitlementsByOrganizationIdResponse = { entitlements: OrganizationIsEntitledResponse[] }
type EntitlementPlanInfo = { plan_id: string; plan_name: string }
type ListAllEntitlementPlansResponse = { plans: EntitlementPlanInfo[] }
type UpdateOrganizationEntitlementPlanRequestBody = {
  organization_id: string
  plan_name:
    | 'CORE'
    | 'STANDARD'
    | 'STANDARD_TRIAL'
    | 'PRO'
    | 'PARTNER'
    | 'POV'
    | 'FLEX'
    | 'EMBEDDED_PAYG'
    | 'EMBEDDED_ANNUAL_COMMITMENT'
}
type UpdateOrganizationEntitlementPlanResponse = { organization_id: string; plan_name: string }
type UserInvitationCreateRequestBody = {
  invitedEmail: string
  permissionType: PermissionType
  scopeType: ScopeType
  scopeId: string
}
type UserInvitationCreateResponse = { directlyAdded?: boolean | undefined }
type UserInvitationStatus = 'pending' | 'accepted' | 'cancelled' | 'declined'
type UserInvitationRead = {
  id: string
  inviteCode: string
  inviterUserId: string
  invitedEmail: string
  scopeId: string
  scopeType: ScopeType
  permissionType: PermissionType
  status: UserInvitationStatus
  createdAt: bigint
  updatedAt: bigint
}
type UserInvitationListRequestBody = { scopeType: ScopeType; scopeId: string }
type UserInvitationAdminRead = {
  id: string
  inviterUserId: string
  invitedEmail: string
  scopeId: string
  scopeType: ScopeType
  permissionType: PermissionType
  status: UserInvitationStatus
  createdAt: bigint
  updatedAt: bigint
}
type InviteCodeRequestBody = { inviteCode: string }
type UserInvitationCancelRequestBody = { id?: string | undefined; inviteCode?: string | undefined }
type TagListRequestBody = { workspaceId: WorkspaceId }
type TagUpdateRequestBody = { tagId: TagId; workspaceId: WorkspaceId; name: string; color: string }
type TagDeleteRequestBody = { tagId: TagId; workspaceId: WorkspaceId }
type TagCreateRequestBody = { workspaceId: WorkspaceId; name: string; color: string }
type DiagnosticReportRequestBody = { organizationId: OrganizationId }
type SignalInput = { workflowType: string; workflowId: string }
type JobLogs = {
  logType: LogFormatType
  logEvents?: LogEvents | undefined
  logLines?: string[] | undefined
}
type DataplaneGroupCreateRequestBody = { organization_id: string; name: string; enabled: boolean }
type DataplaneRead = {
  name: string
  dataplane_id: string
  dataplane_group_id: string
  enabled: boolean
  created_at: string
  updated_at: string
}
type DataplaneGroupRead = {
  name: string
  dataplane_group_id: string
  organization_id: string
  enabled: boolean
  created_at: string
  updated_at: string
  dataplanes: DataplaneRead[]
}
type DataplaneGroupUpdateRequestBody = {
  dataplane_group_id: string
  name?: string | undefined
  enabled?: boolean | undefined
}
type DataplaneGroupDeleteRequestBody = { dataplane_group_id: string }
type DataplaneGroupListRequestBody = { organization_id: string }
type DataplaneGroupListResponse = { dataplaneGroups?: DataplaneGroupRead[] | undefined }
type DataWorkerAllocationListRequestBody = { organization_id: string }
type DataWorkerAllocationRead = { dataplane_group_id: string; allocated_capacity: number }
type DataWorkerAllocationListResponse = {
  organization_id: string
  total_allocated_capacity: number
  allocations: DataWorkerAllocationRead[]
}
type DataWorkerAllocationGetRequestBody = { organization_id: string; dataplane_group_id: string }
type DataWorkerReallocateRequestBody = {
  organization_id: string
  from_dataplane_group_id: string
  to_dataplane_group_id: string
  amount: number
}
type DataWorkerAddCapacityRequestBody = {
  organization_id: string
  dataplane_group_id?: string | undefined
  amount: number
}
type DataWorkerRemoveCapacityRequestBody = {
  organization_id: string
  dataplane_group_id: string
  amount: number
}
type DataplaneCreateRequestBody = {
  dataplane_group_id: string
  name: string
  enabled: boolean
  instanceScope?: boolean | undefined
}
type DataplaneCreateResponse = {
  dataplane_id: string
  region_id: string
  client_id: string
  client_secret: string
}
type DataplaneUpdateRequestBody = {
  dataplane_id: string
  name?: string | undefined
  enabled?: boolean | undefined
}
type DataplaneDeleteRequestBody = { dataplane_id: string }
type DataplaneListRequestBody = { dataplane_group_id: string }
type DataplaneListResponse = { dataplanes?: DataplaneRead[] | undefined }
type DataplaneTokenRequestBody = { client_id: string; client_secret: string }
type DataplaneDiagnosticStatus = 'PASSED' | 'FAILED' | 'UNABLE_TO_COMPLETE' | 'NOT_CONFIGURED'
type DataplaneDiagnosticResult = {
  kind: string
  target_id: string
  status: DataplaneDiagnosticStatus
  checked_at: bigint
  error_code?: string | undefined
  error_message?: string | undefined
  observation?: { [x: string]: unknown } | undefined
}
type DataplaneHeartbeatRequestBody = {
  client_id: string
  diagnostics?: DataplaneDiagnosticResult[] | undefined
}
type DataplaneHeartbeatResponse = {
  dataplane_name: string
  dataplane_id: string
  dataplane_enabled: boolean
  dataplane_group_name: string
  dataplane_group_id: string
  organization_id?: string | undefined
}
type DataplaneSecretStoragesRequestBody = { client_id: string }
type DataplaneSecretStorage = { secret_storage_id: string; scope_type: ScopeType; scope_id: string }
type DataplaneSecretStoragesResponse = { secret_storages: DataplaneSecretStorage[] }
type HeartbeatRecord = { timestamp: bigint }
type DataplaneVersionSupport = {
  status: 'SUPPORTED' | 'SUPPORT_ENDED' | 'UNKNOWN'
  published_at?: bigint | undefined
  supported_until?: bigint | undefined
}
type DataplaneHealthHistoryBucket = {
  bucket_start: bigint
  status: 'HEALTHY' | 'DEGRADED' | 'UNHEALTHY' | 'UNKNOWN'
}
type DataplaneDiagnosticKind =
  | 'SECRET_STORAGE'
  | 'STORAGE_REACHABILITY'
  | 'WORKLOAD_SCHEDULING'
  | 'AUTHENTICATION'
type DataplaneDiagnosticRead = {
  kind: DataplaneDiagnosticKind
  target_id: string
  target_name?: string | undefined
  status: DataplaneDiagnosticStatus
  checked_at: bigint
  updated_at: bigint
  error_code?: string | undefined
  error_message?: string | undefined
  observation?: { [x: string]: unknown } | undefined
}
type DataplaneHealthRead = {
  dataplane_id: string
  dataplane_name: string
  dataplane_group_id: string
  organization_id: string
  status: 'HEALTHY' | 'DEGRADED' | 'UNHEALTHY' | 'UNKNOWN'
  last_heartbeat_timestamp?: bigint | undefined
  recent_heartbeats?: HeartbeatRecord[] | undefined
  control_plane_version?: string | undefined
  dataplane_version?: string | undefined
  dataplane_version_support?: DataplaneVersionSupport | undefined
  enabled?: boolean | undefined
  health_history?: DataplaneHealthHistoryBucket[] | undefined
  diagnostics?: DataplaneDiagnosticRead[] | undefined
  unsupported_diagnostic_kinds?: DataplaneDiagnosticKind[] | undefined
}
type DataplaneHealthListResponse = { dataplanes: DataplaneHealthRead[] }
type DataplaneInitRequestBody = { client_id: string }
type DataplaneInitResponse = {
  dataplane_name: string
  dataplane_id: string
  dataplane_enabled: boolean
  dataplane_group_name: string
  dataplane_group_id: string
  organization_id?: string | undefined
}
type GetSSOConfigRequestBody = { organizationId: string }
type SSOConfigStatus = 'draft' | 'active'
type SSOConfigDefaultRole = 'organization_admin' | 'organization_editor' | 'organization_member'
type SSOConfigRead = {
  organizationId?: string | undefined
  companyIdentifier?: string | undefined
  clientId?: string | undefined
  clientSecret?: string | undefined
  emailDomains?: string[] | undefined
  status?: SSOConfigStatus | undefined
  defaultRole?: SSOConfigDefaultRole | undefined
}
type CreateSSOConfigRequestBody = {
  organizationId: string
  companyIdentifier: string
  clientId: string
  clientSecret: string
  discoveryUrl: string
  emailDomain?: string | undefined
  status: SSOConfigStatus
  defaultRole?: SSOConfigDefaultRole | undefined
}
type DeleteSSOConfigRequestBody = { organizationId: string; companyIdentifier: string }
type UpdateSSOCredentialsRequestBody = {
  organizationId: string
  clientId: string
  clientSecret: string
}
type ActivateSSOConfigRequestBody = { organizationId: string; emailDomain?: string | undefined }
type ValidateSSOTokenRequestBody = { organizationId: string; accessToken: string }
type ScimConfigStatus = 'not_configured' | 'enabled' | 'disabled'
type ScimIdpProvider = 'okta' | 'microsoft_entra_id'
type ScimConfigResponse = {
  status: ScimConfigStatus
  idpProvider?: ScimIdpProvider | undefined
  scimBaseUrl: string
  available: boolean
  createdAt?: bigint | undefined
  updatedAt?: bigint | undefined
  token?: string | undefined
}
type EnableScimRequestBody = { organizationId: string; idpProvider: ScimIdpProvider }
type AuditLogListRequestBody = {
  organizationId: string
  startTime?: string | undefined
  endTime?: string | undefined
  workspaceId?: string | undefined
  actorId?: string | undefined
  operation?: string | undefined
  success?: boolean | undefined
  searchText?: string | undefined
  pageSize?: number | undefined
  pageToken?: string | undefined
}
type AuditLogActor = {
  actorId: string
  email?: string | undefined
  ipAddress?: string | undefined
  userAgent?: string | undefined
}
type AuditLogDetails = { [x: string]: unknown }
type AuditLogRead = {
  id: string
  timestamp: bigint
  actor?: AuditLogActor | undefined
  operation: string
  request?: AuditLogDetails | undefined
  response?: AuditLogDetails | undefined
  success: boolean
  errorMessage?: string | undefined
  organizationId?: string | undefined
  workspaceId?: string | undefined
}
type AuditLogReadList = { auditLogs: AuditLogRead[]; nextPageToken?: string | undefined }
type ApplicationTokenRequestWithGrant = {
  client_id: string
  client_secret: string
  'grant-type'?: 'client_credentials' | undefined
}
type PublicAccessTokenResponse = { access_token: string; token_type: 'Bearer'; expires_in: bigint }
type JobTypeEnum = 'sync' | 'reset' | 'refresh' | 'clear'
type JobStatusEnum =
  | 'pending'
  | 'queued'
  | 'running'
  | 'incomplete'
  | 'failed'
  | 'succeeded'
  | 'cancelled'
type JobResponse = {
  jobId: bigint
  status: JobStatusEnum
  jobType: JobTypeEnum
  startTime: string
  connectionId: string
  lastUpdatedAt?: string | undefined
  duration?: string | undefined
  bytesSynced?: bigint | undefined
  rowsSynced?: bigint | undefined
}
type JobsResponse = {
  previous?: string | undefined
  next?: string | undefined
  data: JobResponse[]
}
type JobCreateRequest = { connectionId: string; jobType: JobTypeEnum }
type RegionResponse = {
  regionId: string
  name: string
  organizationId: string
  enabled: boolean
  createdAt: string
  updatedAt: string
}
type RegionsResponse = { data: RegionResponse[] }
type RegionCreateRequest = { name: string; organizationId: string; enabled?: boolean | undefined }
type RegionPatchRequest = { name?: string | undefined; enabled?: boolean | undefined }
type DataplaneResponse = {
  dataplaneId: string
  name: string
  regionId: string
  enabled: boolean
  createdAt: string
  updatedAt: string
}
type DataplanesResponse = { data: DataplaneResponse[] }
type DataplaneCreateRequest = { regionId: string; name: string; enabled?: boolean | undefined }
type DataplaneCreateResponseBody = {
  dataplaneId: string
  regionId: string
  clientId: string
  clientSecret: string
}
type DataplanePatchRequest = { name?: string | undefined; enabled?: boolean | undefined }
type ConnectorType = 'source' | 'destination'
type ConnectorDefinitionResponse = {
  id: string
  name: string
  connectorDefinitionType: ConnectorType
  version: string
}
type ConnectorDefinitionsResponse = { data: ConnectorDefinitionResponse[] }
type DeclarativeSourceDefinitionResponse = {
  id: string
  name: string
  manifest: DeclarativeManifest
  version: ManifestVersion
}
type DeclarativeSourceDefinitionsResponse = {
  previous?: string | undefined
  next?: string | undefined
  data: DeclarativeSourceDefinitionResponse[]
}
type CreateDeclarativeSourceDefinitionRequest = { name: string; manifest: DeclarativeManifest }
type UpdateDeclarativeSourceDefinitionRequest = { manifest: DeclarativeManifest }
type DefinitionResponse = {
  id: string
  name: string
  dockerRepository: string
  dockerImageTag: string
  documentationUrl?: string | undefined
}
type DefinitionsResponse = {
  previous?: string | undefined
  next?: string | undefined
  data: DefinitionResponse[]
}
type CreateDefinitionRequest = {
  name: string
  dockerRepository: string
  dockerImageTag: string
  documentationUrl?: string | undefined
}
type UpdateDefinitionRequest = { name: string; dockerImageTag: string }
type SourceResponse = {
  sourceId: string
  name: string
  sourceType: string
  definitionId: string
  workspaceId: string
  configuration: SourceConfiguration
  createdAt: bigint
  resourceAllocation?: ScopedResourceRequirements | undefined
}
type SourcesResponse = {
  previous?: string | undefined
  next?: string | undefined
  data: SourceResponse[]
}
type SourceCreateRequest = {
  name: string
  definitionId?: string | undefined
  workspaceId: string
  configuration: SourceConfiguration
  secretId?: string | undefined
  resourceAllocation?: ScopedResourceRequirements | undefined
}
type SourcePatchRequest = {
  name?: string | undefined
  workspaceId?: string | undefined
  configuration?: SourceConfiguration | undefined
  secretId?: string | undefined
  resourceAllocation?: ScopedResourceRequirements | undefined
}
type SourcePutRequest = {
  name: string
  configuration: SourceConfiguration
  resourceAllocation?: ScopedResourceRequirements | undefined
}
type DestinationResponse = {
  destinationId: string
  name: string
  destinationType: string
  definitionId: string
  workspaceId: string
  configuration: DestinationConfiguration
  createdAt: bigint
  resourceAllocation?: ScopedResourceRequirements | undefined
}
type DestinationsResponse = {
  previous?: string | undefined
  next?: string | undefined
  data: DestinationResponse[]
}
type DestinationCreateRequest = {
  name: string
  definitionId?: string | undefined
  workspaceId: string
  configuration: DestinationConfiguration
  resourceAllocation?: ScopedResourceRequirements | undefined
}
type DestinationPatchRequest = {
  name?: string | undefined
  configuration?: DestinationConfiguration | undefined
  resourceAllocation?: ScopedResourceRequirements | undefined
}
type DestinationPutRequest = {
  name: string
  configuration: DestinationConfiguration
  resourceAllocation?: ScopedResourceRequirements | undefined
}
type InitiateOauthRequest = {
  name?: string | undefined
  sourceType?: string | undefined
  redirectUrl: string
  clientType?: 'api' | 'webapp' | undefined
  workspaceId: string
  oAuthInputConfiguration?: OAuthInputConfiguration | undefined
  requestedScopes?: string[] | undefined
  requestedOptionalScopes?: string[] | undefined
}
type ConnectionSyncModeEnum =
  | 'full_refresh_overwrite'
  | 'full_refresh_overwrite_deduped'
  | 'full_refresh_append'
  | 'full_refresh_update'
  | 'full_refresh_soft_delete'
  | 'incremental_append'
  | 'incremental_deduped_history'
  | 'incremental_update'
  | 'incremental_soft_delete'
type StreamConfiguration = {
  name: string
  namespace?: string | undefined
  syncMode?: ConnectionSyncModeEnum | undefined
  cursorField?: string[] | undefined
  primaryKey?: string[][] | undefined
  includeFiles?: boolean | undefined
  destinationObjectName?: string | undefined
  selectedFields?: SelectedFields | undefined
  mappers?: ConfiguredStreamMapper[] | undefined
}
type StreamConfigurations = { streams?: StreamConfiguration[] | undefined }
type ScheduleTypeEnum = 'manual' | 'cron'
type AirbyteApiConnectionSchedule = {
  scheduleType: ScheduleTypeEnum
  cronExpression?: string | undefined
  cronTimeZone?: string | undefined
}
type NamespaceDefinitionEnum = 'source' | 'destination' | 'custom_format'
type NonBreakingSchemaUpdatesBehaviorEnum =
  | 'ignore'
  | 'disable_connection'
  | 'propagate_columns'
  | 'propagate_fully'
type ConnectionStatusEnum = 'active' | 'inactive' | 'deprecated' | 'locked'
type ConnectionCreateRequest = {
  name?: string | undefined
  sourceId: string
  destinationId: string
  configurations?: StreamConfigurations | undefined
  schedule?: AirbyteApiConnectionSchedule | undefined
  dataResidency?: string | undefined
  namespaceDefinition?: NamespaceDefinitionEnum | undefined
  namespaceFormat?: string | undefined
  prefix?: string | undefined
  nonBreakingSchemaUpdatesBehavior?: NonBreakingSchemaUpdatesBehaviorEnum | undefined
  notifySchemaChanges?: boolean | undefined
  status?: ConnectionStatusEnum | undefined
  tags?: Tag[] | undefined
}
type ScheduleTypeWithBasicEnum = 'manual' | 'cron' | 'basic'
type ConnectionScheduleResponse = {
  scheduleType: ScheduleTypeWithBasicEnum
  cronExpression?: string | undefined
  basicTiming?: string | undefined
}
type ConnectionResponse = {
  connectionId: string
  name: string
  sourceId: string
  destinationId: string
  workspaceId: string
  status: ConnectionStatusEnum
  schedule: ConnectionScheduleResponse
  nonBreakingSchemaUpdatesBehavior?: NonBreakingSchemaUpdatesBehaviorEnum | undefined
  notifySchemaChanges?: boolean | undefined
  namespaceDefinition?: NamespaceDefinitionEnum | undefined
  namespaceFormat?: string | undefined
  prefix?: string | undefined
  configurations: StreamConfigurations
  createdAt: bigint
  tags: Tag[]
  statusReason?: string | undefined
}
type ConnectionsResponse = {
  previous?: string | undefined
  next?: string | undefined
  data: ConnectionResponse[]
}
type NamespaceDefinitionEnumNoDefault = 'source' | 'destination' | 'custom_format'
type NonBreakingSchemaUpdatesBehaviorEnumNoDefault =
  | 'ignore'
  | 'disable_connection'
  | 'propagate_columns'
  | 'propagate_fully'
type ConnectionPatchRequest = {
  name?: string | undefined
  configurations?: StreamConfigurations | undefined
  schedule?: AirbyteApiConnectionSchedule | undefined
  dataResidency?: string | undefined
  namespaceDefinition?: NamespaceDefinitionEnumNoDefault | undefined
  namespaceFormat?: string | undefined
  prefix?: string | undefined
  nonBreakingSchemaUpdatesBehavior?: NonBreakingSchemaUpdatesBehaviorEnumNoDefault | undefined
  notifySchemaChanges?: boolean | undefined
  status?: ConnectionStatusEnum | undefined
  tags?: Tag[] | undefined
}
type StreamProperties = {
  streamName?: string | undefined
  syncModes?: ConnectionSyncModeEnum[] | undefined
  streamnamespace?: string | undefined
  defaultCursorField?: string[] | undefined
  sourceDefinedCursorField?: boolean | undefined
  sourceDefinedPrimaryKey?: string[][] | undefined
  propertyFields?: string[][] | undefined
}
type StreamPropertiesResponse = StreamProperties[]
type WorkspaceResponse = {
  workspaceId: string
  name: string
  dataResidency: string
  notifications: NotificationsConfig
}
type WorkspacesResponse = {
  previous?: string | undefined
  next?: string | undefined
  data: WorkspaceResponse[]
}
type WorkspaceCreateRequest = {
  name: string
  organizationId?: string | undefined
  notifications?: NotificationsConfig | undefined
  regionId?: string | undefined
}
type WorkspaceUpdateRequest = {
  name?: string | undefined
  notifications?: NotificationsConfig | undefined
  regionId?: string | undefined
}
type ActorTypeEnum = 'source' | 'destination'
type OAuthCredentialsConfiguration = { [x: string]: unknown }
type WorkspaceOAuthCredentialsRequest = {
  actorType: ActorTypeEnum
  name: string
  configuration: OAuthCredentialsConfiguration
}
type PermissionResponse = {
  permissionId: string
  permissionType: PermissionType
  userId: UserId
  workspaceId?: WorkspaceId | undefined
  organizationId?: OrganizationId | undefined
}
type PermissionUpdateRequest = { permissionType: PermissionType }
type PermissionScope = 'workspace' | 'organization' | 'none'
type PermissionResponseRead = {
  permissionId: string
  permissionType: PermissionType
  userId: UserId
  scopeId: string
  scope: PermissionScope
}
type PermissionsResponse = { data: PermissionResponseRead[] }
type PermissionCreateRequest = {
  permissionType: PublicPermissionType
  userId: UserId
  workspaceId?: WorkspaceId | undefined
  organizationId?: OrganizationId | undefined
}
type OrganizationResponse = {
  organizationId: OrganizationId
  organizationName: string
  email: string
}
type OrganizationsResponse = { data: OrganizationResponse[] }
type OrganizationOAuthCredentialsRequest = {
  actorType: ActorTypeEnum
  name: string
  configuration: OAuthCredentialsConfiguration
}
type UserResponse = { name: string; id: UserId; email: string }
type UsersResponse = { data: UserResponse[] }
type GroupResponse = {
  groupId: string
  name: string
  description?: (string | null) | undefined
  organizationId: string
  memberCount: bigint
}
type GroupsResponse = {
  data: GroupResponse[]
  next?: (string | null) | undefined
  previous?: (string | null) | undefined
}
type GroupCreateRequest = {
  name: string
  description?: (string | null) | undefined
  organizationId: string
}
type GroupUpdateRequest = { name?: string | undefined; description?: (string | null) | undefined }
type GroupMemberResponse = {
  memberId: string
  groupId: string
  userId: string
  userEmail: string
  userName: string
}
type GroupMembersResponse = {
  data: GroupMemberResponse[]
  next?: (string | null) | undefined
  previous?: (string | null) | undefined
}
type GroupMemberAddRequest = { userId: string }
type GroupPermissionResponse = {
  permissionId: string
  groupId: string
  permissionType: PermissionType
  workspaceId?: (string | null) | undefined
  organizationId?: (string | null) | undefined
}
type GroupPermissionsResponse = { data: GroupPermissionResponse[] }
type GroupPermissionCreateRequest = {
  permissionType: PermissionType
  workspaceId?: (string | null) | undefined
  organizationId?: (string | null) | undefined
}
type TagResponse = { tagId: TagId; name: string; color: string; workspaceId: WorkspaceId }
type TagsResponse = { data: TagResponse[] }
type TagCreateRequest = { name: string; color: string; workspaceId: WorkspaceId }
type TagPatchRequest = { name: string; color: string }
type EmbeddedWidgetRequest = {
  allowedOrigin: string
  externalUserId: string
  organizationId: string
}
type EmbeddedWidgetResponse = { token: string }
type EmbeddedScopedTokenRequest = { workspaceId: string }
type EmbeddedScopedTokenResponse = { token: string }
type EmbeddedOrganizationListItem = {
  organizationId: string
  organizationName: string
  permission: PermissionType
}
type EmbeddedOrganizationsList = { organizations: EmbeddedOrganizationListItem[] }
type ServiceAccountTokenRequestBody = { service_account_id: string; secret: string }
type DomainVerificationCreateRequestBody = { organizationId: string; domain: string }
type AirbyteReleaseCreateRequestBody = {
  version: string
  sourceCommit: string
  publishedAt: string
}
type AirbyteReleaseRead = { version: string; sourceCommit: string; publishedAt: string }
type EndpointPrivateLinkServiceConfig = { type: 'endpoint'; name: string; region: string }
type StoragePrivateLinkServiceConfig = { type: 'storage'; region: string; bucket: string }
type PrivateLinkServiceConfig = EndpointPrivateLinkServiceConfig | StoragePrivateLinkServiceConfig
type PrivateLinkCreateRequestBody = {
  workspaceId: WorkspaceId
  name: string
  serviceConfig: PrivateLinkServiceConfig
}
type PrivateLinkStatus =
  | 'creating'
  | 'pending_acceptance'
  | 'configuring'
  | 'available'
  | 'create_failed'
  | 'deleting'
  | 'delete_failed'
  | 'deleted'
type PrivateLinkRead = {
  id: string
  workspaceId: WorkspaceId
  dataplaneGroupId: string
  dataplaneRegion?: string | undefined
  name: string
  status: PrivateLinkStatus
  serviceConfig: PrivateLinkServiceConfig
  endpointId?: string | undefined
  dnsName?: string | undefined
  scopedConfigurationId?: string | undefined
  createdAt: string
  updatedAt: string
}
type PrivateLinkListRequestBody = { workspaceId: WorkspaceId }
type PrivateLinkReadList = { privateLinks: PrivateLinkRead[] }
type PrivateLinkIdRequestBody = { privateLinkId: string; workspaceId: WorkspaceId }
type PrivateLinkInternalIdRequestBody = { privateLinkId: string }
type PrivateLinkUpdateRequestBody = {
  privateLinkId: string
  status?: PrivateLinkStatus | undefined
  endpointId?: string | undefined
  dnsName?: string | undefined
  scopedConfigurationId?: string | undefined
  clearScopedConfigurationId?: boolean | undefined
}
type PrivateLinkListByStatusRequestBody = { status: PrivateLinkStatus }
type FusionUsageWindow = {
  limit: bigint | null
  used: bigint | null
  windowStart: string
  resetsAt: string
}
type FusionUsageRead = {
  organizationId: string
  freeCapsApplicable: boolean
  day: FusionUsageWindow
  month: FusionUsageWindow
}
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/v1/sources/:sourceId/search': {
      $post:
        | {
            input: { param: { sourceId: string } } & { json: FusionSearchRequest }
            output: FusionSearchResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { sourceId: string } } & { json: FusionSearchRequest }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { sourceId: string } } & { json: FusionSearchRequest }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { sourceId: string } } & { json: FusionSearchRequest }
            output: {}
            outputFormat: string
            status: 404
          }
        | {
            input: { param: { sourceId: string } } & { json: FusionSearchRequest }
            output: {}
            outputFormat: string
            status: 409
          }
        | {
            input: { param: { sourceId: string } } & { json: FusionSearchRequest }
            output: {}
            outputFormat: string
            status: 413
          }
        | {
            input: { param: { sourceId: string } } & { json: FusionSearchRequest }
            output: {}
            outputFormat: string
            status: 422
          }
        | {
            input: { param: { sourceId: string } } & { json: FusionSearchRequest }
            output: {}
            outputFormat: string
            status: 502
          }
        | {
            input: { param: { sourceId: string } } & { json: FusionSearchRequest }
            output: {}
            outputFormat: string
            status: 503
          }
        | {
            input: { param: { sourceId: string } } & { json: FusionSearchRequest }
            output: {}
            outputFormat: string
            status: 504
          }
    }
  } & {
    '/v1/destinations/:destinationId/search': {
      $post:
        | {
            input: { param: { destinationId: string } } & { json: FusionSearchRequest }
            output: FusionSearchResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { destinationId: string } } & { json: FusionSearchRequest }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { destinationId: string } } & { json: FusionSearchRequest }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { destinationId: string } } & { json: FusionSearchRequest }
            output: {}
            outputFormat: string
            status: 404
          }
        | {
            input: { param: { destinationId: string } } & { json: FusionSearchRequest }
            output: {}
            outputFormat: string
            status: 409
          }
        | {
            input: { param: { destinationId: string } } & { json: FusionSearchRequest }
            output: {}
            outputFormat: string
            status: 413
          }
        | {
            input: { param: { destinationId: string } } & { json: FusionSearchRequest }
            output: {}
            outputFormat: string
            status: 422
          }
        | {
            input: { param: { destinationId: string } } & { json: FusionSearchRequest }
            output: {}
            outputFormat: string
            status: 502
          }
        | {
            input: { param: { destinationId: string } } & { json: FusionSearchRequest }
            output: {}
            outputFormat: string
            status: 503
          }
        | {
            input: { param: { destinationId: string } } & { json: FusionSearchRequest }
            output: {}
            outputFormat: string
            status: 504
          }
    }
  } & {
    '/v1/sources/:sourceId/search-status': {
      $get:
        | {
            input: { param: { sourceId: string } }
            output: FusionSearchStatusResponse
            outputFormat: 'json'
            status: 200
          }
        | { input: { param: { sourceId: string } }; output: {}; outputFormat: string; status: 401 }
        | { input: { param: { sourceId: string } }; output: {}; outputFormat: string; status: 403 }
        | { input: { param: { sourceId: string } }; output: {}; outputFormat: string; status: 404 }
        | { input: { param: { sourceId: string } }; output: {}; outputFormat: string; status: 409 }
        | { input: { param: { sourceId: string } }; output: {}; outputFormat: string; status: 502 }
        | { input: { param: { sourceId: string } }; output: {}; outputFormat: string; status: 503 }
        | { input: { param: { sourceId: string } }; output: {}; outputFormat: string; status: 504 }
    }
  } & {
    '/v1/destinations/:destinationId/search-status': {
      $get:
        | {
            input: { param: { destinationId: string } }
            output: FusionSearchStatusResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { destinationId: string } }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { destinationId: string } }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { destinationId: string } }
            output: {}
            outputFormat: string
            status: 404
          }
        | {
            input: { param: { destinationId: string } }
            output: {}
            outputFormat: string
            status: 409
          }
        | {
            input: { param: { destinationId: string } }
            output: {}
            outputFormat: string
            status: 502
          }
        | {
            input: { param: { destinationId: string } }
            output: {}
            outputFormat: string
            status: 503
          }
        | {
            input: { param: { destinationId: string } }
            output: {}
            outputFormat: string
            status: 504
          }
    }
  } & {
    '/v1/sources/:sourceId/enablement': {
      $post:
        | {
            input: { param: { sourceId: string } } & { json: FusionSourceEnablementCreate }
            output: FusionSourceEnablementRead
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { sourceId: string } } & { json: FusionSourceEnablementCreate }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { sourceId: string } } & { json: FusionSourceEnablementCreate }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { sourceId: string } } & { json: FusionSourceEnablementCreate }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { sourceId: string } } & { json: FusionSourceEnablementCreate }
            output: {}
            outputFormat: string
            status: 404
          }
        | {
            input: { param: { sourceId: string } } & { json: FusionSourceEnablementCreate }
            output: {}
            outputFormat: string
            status: 409
          }
      $get:
        | {
            input: { param: { sourceId: string } }
            output: FusionSourceEnablementRead
            outputFormat: 'json'
            status: 200
          }
        | { input: { param: { sourceId: string } }; output: {}; outputFormat: string; status: 400 }
        | { input: { param: { sourceId: string } }; output: {}; outputFormat: string; status: 401 }
        | { input: { param: { sourceId: string } }; output: {}; outputFormat: string; status: 403 }
        | { input: { param: { sourceId: string } }; output: {}; outputFormat: string; status: 404 }
        | { input: { param: { sourceId: string } }; output: {}; outputFormat: string; status: 409 }
      $put:
        | {
            input: { param: { sourceId: string } } & { json: FusionSourceEnablementUpdate }
            output: FusionSourceEnablementRead
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { sourceId: string } } & { json: FusionSourceEnablementUpdate }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { sourceId: string } } & { json: FusionSourceEnablementUpdate }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { sourceId: string } } & { json: FusionSourceEnablementUpdate }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { sourceId: string } } & { json: FusionSourceEnablementUpdate }
            output: {}
            outputFormat: string
            status: 404
          }
        | {
            input: { param: { sourceId: string } } & { json: FusionSourceEnablementUpdate }
            output: {}
            outputFormat: string
            status: 409
          }
      $delete:
        | {
            input: { param: { sourceId: string } }
            output: FusionSourceEnablementRead
            outputFormat: 'json'
            status: 200
          }
        | { input: { param: { sourceId: string } }; output: {}; outputFormat: string; status: 400 }
        | { input: { param: { sourceId: string } }; output: {}; outputFormat: string; status: 401 }
        | { input: { param: { sourceId: string } }; output: {}; outputFormat: string; status: 403 }
        | { input: { param: { sourceId: string } }; output: {}; outputFormat: string; status: 404 }
        | { input: { param: { sourceId: string } }; output: {}; outputFormat: string; status: 409 }
    }
  } & {
    '/v1/destinations/:destinationId/enablement': {
      $post:
        | {
            input: { param: { destinationId: string } } & {
              json: FusionDestinationEnablementCreate
            }
            output: FusionDestinationEnablementRead
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { destinationId: string } } & {
              json: FusionDestinationEnablementCreate
            }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { destinationId: string } } & {
              json: FusionDestinationEnablementCreate
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { destinationId: string } } & {
              json: FusionDestinationEnablementCreate
            }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { destinationId: string } } & {
              json: FusionDestinationEnablementCreate
            }
            output: {}
            outputFormat: string
            status: 404
          }
        | {
            input: { param: { destinationId: string } } & {
              json: FusionDestinationEnablementCreate
            }
            output: {}
            outputFormat: string
            status: 409
          }
      $get:
        | {
            input: { param: { destinationId: string } }
            output: FusionDestinationEnablementRead
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { destinationId: string } }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { destinationId: string } }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { destinationId: string } }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { destinationId: string } }
            output: {}
            outputFormat: string
            status: 404
          }
        | {
            input: { param: { destinationId: string } }
            output: {}
            outputFormat: string
            status: 409
          }
      $put:
        | {
            input: { param: { destinationId: string } } & {
              json: FusionDestinationEnablementUpdate
            }
            output: FusionDestinationEnablementRead
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { destinationId: string } } & {
              json: FusionDestinationEnablementUpdate
            }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { destinationId: string } } & {
              json: FusionDestinationEnablementUpdate
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { destinationId: string } } & {
              json: FusionDestinationEnablementUpdate
            }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { destinationId: string } } & {
              json: FusionDestinationEnablementUpdate
            }
            output: {}
            outputFormat: string
            status: 404
          }
        | {
            input: { param: { destinationId: string } } & {
              json: FusionDestinationEnablementUpdate
            }
            output: {}
            outputFormat: string
            status: 409
          }
      $delete:
        | {
            input: { param: { destinationId: string } }
            output: FusionDestinationEnablementRead
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { destinationId: string } }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { destinationId: string } }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { destinationId: string } }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { destinationId: string } }
            output: {}
            outputFormat: string
            status: 404
          }
        | {
            input: { param: { destinationId: string } }
            output: {}
            outputFormat: string
            status: 409
          }
    }
  } & {
    '/v1/connections/:connectionId/enablement': {
      $post:
        | {
            input: { param: { connectionId: string } } & { json: FusionConnectionEnablementCreate }
            output: FusionConnectionEnablementRead
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { connectionId: string } } & { json: FusionConnectionEnablementCreate }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { connectionId: string } } & { json: FusionConnectionEnablementCreate }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { connectionId: string } } & { json: FusionConnectionEnablementCreate }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { connectionId: string } } & { json: FusionConnectionEnablementCreate }
            output: {}
            outputFormat: string
            status: 404
          }
        | {
            input: { param: { connectionId: string } } & { json: FusionConnectionEnablementCreate }
            output: {}
            outputFormat: string
            status: 409
          }
      $get:
        | {
            input: { param: { connectionId: string } }
            output: FusionConnectionEnablementRead
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { connectionId: string } }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { connectionId: string } }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { connectionId: string } }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { connectionId: string } }
            output: {}
            outputFormat: string
            status: 404
          }
        | {
            input: { param: { connectionId: string } }
            output: {}
            outputFormat: string
            status: 409
          }
      $put:
        | {
            input: { param: { connectionId: string } } & { json: FusionConnectionEnablementUpdate }
            output: FusionConnectionEnablementRead
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { connectionId: string } } & { json: FusionConnectionEnablementUpdate }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { connectionId: string } } & { json: FusionConnectionEnablementUpdate }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { connectionId: string } } & { json: FusionConnectionEnablementUpdate }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { connectionId: string } } & { json: FusionConnectionEnablementUpdate }
            output: {}
            outputFormat: string
            status: 404
          }
        | {
            input: { param: { connectionId: string } } & { json: FusionConnectionEnablementUpdate }
            output: {}
            outputFormat: string
            status: 409
          }
      $delete:
        | {
            input: { param: { connectionId: string } }
            output: FusionConnectionEnablementRead
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { connectionId: string } }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { connectionId: string } }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { connectionId: string } }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { connectionId: string } }
            output: {}
            outputFormat: string
            status: 404
          }
        | {
            input: { param: { connectionId: string } }
            output: {}
            outputFormat: string
            status: 409
          }
    }
  } & {
    '/v1/connections/resolve_enablement_for_sync': {
      $post:
        | {
            input: { json: FusionEnablementResolveRequest }
            output: FusionEnablementResolveResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: FusionEnablementResolveRequest }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { json: FusionEnablementResolveRequest }
            output: {}
            outputFormat: string
            status: 404
          }
        | {
            input: { json: FusionEnablementResolveRequest }
            output: {}
            outputFormat: string
            status: 409
          }
    }
  } & {
    '/v1/connections/:connectionId/backfill': {
      $post:
        | {
            input: { param: { connectionId: string } } & { json: FusionConnectionBackfillRequest }
            output: FusionConnectionBackfillResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { connectionId: string } } & { json: FusionConnectionBackfillRequest }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { connectionId: string } } & { json: FusionConnectionBackfillRequest }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { connectionId: string } } & { json: FusionConnectionBackfillRequest }
            output: {}
            outputFormat: string
            status: 404
          }
        | {
            input: { param: { connectionId: string } } & { json: FusionConnectionBackfillRequest }
            output: {}
            outputFormat: string
            status: 409
          }
        | {
            input: { param: { connectionId: string } } & { json: FusionConnectionBackfillRequest }
            output: {}
            outputFormat: string
            status: 422
          }
        | {
            input: { param: { connectionId: string } } & { json: FusionConnectionBackfillRequest }
            output: {}
            outputFormat: string
            status: 502
          }
        | {
            input: { param: { connectionId: string } } & { json: FusionConnectionBackfillRequest }
            output: {}
            outputFormat: string
            status: 503
          }
        | {
            input: { param: { connectionId: string } } & { json: FusionConnectionBackfillRequest }
            output: {}
            outputFormat: string
            status: 504
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
    '/v1/workspaces/create_if_not_exist': {
      $post:
        | {
            input: { json: WorkspaceCreateWithId }
            output: WorkspaceRead
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: WorkspaceCreateWithId }
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
    '/v1/workspaces/list_paginated': {
      $post: {
        input: { json: ListResourcesForWorkspacesRequestBody }
        output: WorkspaceReadList
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/workspaces/list_by_organization_id': {
      $post:
        | {
            input: { json: ListWorkspacesInOrganizationRequestBody }
            output: WorkspaceReadList
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: ListWorkspacesInOrganizationRequestBody }
            output: NotFoundKnownExceptionInfo
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/v1/workspaces/list_by_user_id': {
      $post:
        | {
            input: { json: ListWorkspacesByUserRequestBody }
            output: WorkspaceReadList
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: ListWorkspacesByUserRequestBody }
            output: NotFoundKnownExceptionInfo
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/v1/workspaces/get_available_dbt_jobs': {
      $post: {
        input: { json: WorkspaceGetDbtJobsRequest }
        output: WorkspaceGetDbtJobsResponse
        outputFormat: 'json'
        status: 200
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
    '/v1/workspaces/get_by_connection_id_with_tombstone': {
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
    '/v1/workspaces/get_organization_info': {
      $post:
        | {
            input: { json: WorkspaceIdRequestBody }
            output: OrganizationInfoRead
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
  } & {
    '/v1/workspaces/update_organization': {
      $post:
        | {
            input: { json: WorkspaceUpdateOrganization }
            output: WorkspaceRead
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: WorkspaceUpdateOrganization }
            output: NotFoundKnownExceptionInfo
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { json: WorkspaceUpdateOrganization }
            output: InvalidInputExceptionInfo
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/v1/workspaces/get_usage': {
      $post:
        | {
            input: { json: WorkspaceUsageRequestBody }
            output: WorkspaceUsageRead
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: WorkspaceUsageRequestBody }
            output: NotFoundKnownExceptionInfo
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { json: WorkspaceUsageRequestBody }
            output: InvalidInputExceptionInfo
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/v1/workspaces/get_data_worker_availability': {
      $post:
        | {
            input: { json: WorkspaceDataWorkerAvailabilityRequestBody }
            output: WorkspaceDataWorkerAvailabilityRead
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: WorkspaceDataWorkerAvailabilityRequestBody }
            output: NotFoundKnownExceptionInfo
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { json: WorkspaceDataWorkerAvailabilityRequestBody }
            output: InvalidInputExceptionInfo
            outputFormat: 'json'
            status: 422
          }
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
    '/v1/notifications/try_webhook': {
      $post:
        | {
            input: { json: NotificationWebhookConfigValidationRequestBody }
            output: NotificationRead
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: NotificationWebhookConfigValidationRequestBody }
            output: NotFoundKnownExceptionInfo
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { json: NotificationWebhookConfigValidationRequestBody }
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
    '/v1/source_definitions/list': {
      $post: { input: {}; output: SourceDefinitionReadList; outputFormat: 'json'; status: 200 }
    }
  } & {
    '/v1/source_definitions/list_latest': {
      $post: { input: {}; output: SourceDefinitionReadList; outputFormat: 'json'; status: 200 }
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
    '/v1/source_definitions/list_private': {
      $post: {
        input: { json: WorkspaceIdRequestBody }
        output: PrivateSourceDefinitionReadList
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/source_definitions/list_for_workspace': {
      $post: {
        input: { json: WorkspaceIdActorDefinitionRequestBody }
        output: SourceDefinitionReadList
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/source_definitions/list_enterprise_source_stubs': {
      $post: {
        input: {}
        output: EnterpriseConnectorStubsReadList
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/source_definitions/list_enterprise_stubs_for_workspace': {
      $post: {
        input: { json: WorkspaceIdRequestBody }
        output: EnterpriseConnectorStubsReadList
        outputFormat: 'json'
        status: 200
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
    '/v1/source_definitions/get_for_scope': {
      $post:
        | {
            input: { json: ActorDefinitionIdWithScope }
            output: SourceDefinitionRead
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: ActorDefinitionIdWithScope }
            output: NotFoundKnownExceptionInfo
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { json: ActorDefinitionIdWithScope }
            output: InvalidInputExceptionInfo
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/v1/source_definitions/grant_definition': {
      $post:
        | {
            input: { json: ActorDefinitionIdWithScope }
            output: PrivateSourceDefinitionRead
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: ActorDefinitionIdWithScope }
            output: NotFoundKnownExceptionInfo
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { json: ActorDefinitionIdWithScope }
            output: InvalidInputExceptionInfo
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/v1/source_definitions/revoke_definition': {
      $post:
        | {
            input: { json: ActorDefinitionIdWithScope }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { json: ActorDefinitionIdWithScope }
            output: NotFoundKnownExceptionInfo
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { json: ActorDefinitionIdWithScope }
            output: InvalidInputExceptionInfo
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/v1/actor_definition_versions/get_for_source': {
      $post:
        | {
            input: { json: SourceIdRequestBody }
            output: ActorDefinitionVersionRead
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: SourceIdRequestBody }
            output: NotFoundKnownExceptionInfo
            outputFormat: 'json'
            status: 404
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
    '/v1/source_definition_specifications/get_for_source': {
      $post:
        | {
            input: { json: SourceIdRequestBody }
            output: SourceDefinitionSpecificationRead
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
    '/v1/actor_definition_versions/resolve': {
      $post:
        | {
            input: { json: ResolveActorDefinitionVersionRequestBody }
            output: ResolveActorDefinitionVersionResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: ResolveActorDefinitionVersionRequestBody }
            output: NotFoundKnownExceptionInfo
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/v1/actor_definition_versions/get_default': {
      $post:
        | {
            input: { json: GetActorDefinitionVersionDefaultRequestBody }
            output: ActorDefinitionVersionRead
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: GetActorDefinitionVersionDefaultRequestBody }
            output: NotFoundKnownExceptionInfo
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/v1/actor_definitions/create': {
      $post:
        | {
            input: {
              json: {
                workspaceId?: WorkspaceId | undefined
                scopeId?: ScopeId | undefined
                scopeType?: ScopeType | undefined
                actorType: ActorType
                actorDefinition: ActorDefinitionSpec
              }
            }
            output: { requestId: string }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              json: {
                workspaceId?: WorkspaceId | undefined
                scopeId?: ScopeId | undefined
                scopeType?: ScopeType | undefined
                actorType: ActorType
                actorDefinition: ActorDefinitionSpec
              }
            }
            output: InvalidInputExceptionInfo
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/v1/actor_definitions/update': {
      $post:
        | {
            input: {
              json: {
                actorDefinitionId: string
                actorType: ActorType
                name?: string | undefined
                dockerImageTag: string
                resourceRequirements?: ScopedResourceRequirements | undefined
                workspaceId: WorkspaceId
              }
            }
            output: { requestId: string }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              json: {
                actorDefinitionId: string
                actorType: ActorType
                name?: string | undefined
                dockerImageTag: string
                resourceRequirements?: ScopedResourceRequirements | undefined
                workspaceId: WorkspaceId
              }
            }
            output: NotFoundKnownExceptionInfo
            outputFormat: 'json'
            status: 404
          }
        | {
            input: {
              json: {
                actorDefinitionId: string
                actorType: ActorType
                name?: string | undefined
                dockerImageTag: string
                resourceRequirements?: ScopedResourceRequirements | undefined
                workspaceId: WorkspaceId
              }
            }
            output: InvalidInputExceptionInfo
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/v1/actor_definitions/finish': {
      $post:
        | {
            input: { json: ActorDefinitionFinishRequest }
            output: {
              actorDefinitionId?: string | undefined
              failureReason?: FailureReason | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: ActorDefinitionFinishRequest }
            output: NotFoundKnownExceptionInfo
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { json: ActorDefinitionFinishRequest }
            output: InvalidInputExceptionInfo
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/v1/actor_definitions/result': {
      $post:
        | {
            input: { json: { requestId: string } }
            output: {
              status: 'pending' | 'running' | 'succeeded' | 'failed'
              actorDefinitionId?: string | undefined
              failureReason?: FailureReason | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: { requestId: string } }
            output: NotFoundKnownExceptionInfo
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/v1/declarative_source_definitions/create_manifest': {
      $post:
        | {
            input: { json: DeclarativeSourceDefinitionCreateManifestRequestBody }
            output: {}
            outputFormat: string
            status: 201
          }
        | {
            input: { json: DeclarativeSourceDefinitionCreateManifestRequestBody }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { json: DeclarativeSourceDefinitionCreateManifestRequestBody }
            output: NotFoundKnownExceptionInfo
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { json: DeclarativeSourceDefinitionCreateManifestRequestBody }
            output: {}
            outputFormat: string
            status: 409
          }
    }
  } & {
    '/v1/declarative_source_definitions/update_active_manifest': {
      $post:
        | {
            input: { json: UpdateActiveManifestRequestBody }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { json: UpdateActiveManifestRequestBody }
            output: NotFoundKnownExceptionInfo
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/v1/declarative_source_definitions/list_manifests': {
      $post:
        | {
            input: { json: ListDeclarativeManifestsRequestBody }
            output: DeclarativeManifestsReadList
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: ListDeclarativeManifestsRequestBody }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { json: ListDeclarativeManifestsRequestBody }
            output: NotFoundKnownExceptionInfo
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/v1/connector_builder_projects/create': {
      $post: {
        input: { json: ConnectorBuilderProjectWithWorkspaceId }
        output: ConnectorBuilderProjectIdWithWorkspaceId
        outputFormat: 'json'
        status: 201
      }
    }
  } & {
    '/v1/connector_builder_projects/publish': {
      $post: {
        input: { json: ConnectorBuilderPublishRequestBody }
        output: SourceDefinitionIdBody
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/connector_builder_projects/get_base_image': {
      $post:
        | {
            input: { json: DeclarativeManifestRequestBody }
            output: DeclarativeManifestBaseImageRead
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: DeclarativeManifestRequestBody }
            output: NotFoundKnownExceptionInfo
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/v1/connector_builder_projects/update': {
      $post: {
        input: { json: ExistingConnectorBuilderProjectWithWorkspaceId }
        output: {}
        outputFormat: string
        status: 204
      }
    }
  } & {
    '/v1/connector_builder_projects/delete': {
      $post: {
        input: { json: ConnectorBuilderProjectIdWithWorkspaceId }
        output: {}
        outputFormat: string
        status: 204
      }
    }
  } & {
    '/v1/connector_builder_projects/list': {
      $post: {
        input: { json: WorkspaceIdRequestBody }
        output: ConnectorBuilderProjectReadList
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/connector_builder_projects/get_with_manifest': {
      $post: {
        input: { json: ConnectorBuilderProjectIdWithWorkspaceId }
        output: ConnectorBuilderProjectRead
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/connector_builder_projects/get_for_definition_id': {
      $post: {
        input: { json: BuilderProjectForDefinitionRequestBody }
        output: BuilderProjectForDefinitionResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/connector_builder_projects/update_testing_values': {
      $post: {
        input: { json: ConnectorBuilderProjectTestingValuesUpdate }
        output: ConnectorBuilderProjectTestingValues
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/connector_builder_projects/read_stream': {
      $post: {
        input: { json: ConnectorBuilderProjectStreamReadRequestBody }
        output: ConnectorBuilderProjectStreamRead
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/connector_builder_projects/full_resolve': {
      $post:
        | {
            input: { json: ConnectorBuilderProjectFullResolveRequestBody }
            output: ConnectorBuilderResolvedManifest
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: ConnectorBuilderProjectFullResolveRequestBody }
            output: KnownExceptionInfo
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { json: ConnectorBuilderProjectFullResolveRequestBody }
            output: InvalidInputExceptionInfo
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/v1/connector_builder_projects/resolve': {
      $post:
        | {
            input: { json: ConnectorBuilderProjectResolveRequestBody }
            output: ConnectorBuilderResolvedManifest
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: ConnectorBuilderProjectResolveRequestBody }
            output: KnownExceptionInfo
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { json: ConnectorBuilderProjectResolveRequestBody }
            output: InvalidInputExceptionInfo
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/v1/connector_builder_projects/capabilities': {
      $post: {
        input: { json: WorkspaceIdRequestBody }
        output: ConnectorBuilderCapabilities
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/connector_builder_projects/fork': {
      $post: {
        input: { json: ConnectorBuilderProjectForkRequestBody }
        output: ConnectorBuilderProjectIdWithWorkspaceId
        outputFormat: 'json'
        status: 201
      }
    }
  } & {
    '/v1/connector_builder_projects/contribute/check': {
      $post:
        | {
            input: { json: CheckContributionRequestBody }
            output: CheckContributionRead
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: CheckContributionRequestBody }
            output: KnownExceptionInfo
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { json: CheckContributionRequestBody }
            output: InvalidInputExceptionInfo
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/v1/connector_builder_projects/contribute/generate': {
      $post:
        | {
            input: { json: GenerateContributionRequestBody }
            output: GenerateContributionResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: GenerateContributionRequestBody }
            output: KnownExceptionInfo
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { json: GenerateContributionRequestBody }
            output: InvalidInputExceptionInfo
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/v1/connector_builder_assist/process': {
      $post:
        | {
            input: { json: AssistV1ProcessRequestBody }
            output: AssistV1Process
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: AssistV1ProcessRequestBody }
            output: KnownExceptionInfo
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { json: AssistV1ProcessRequestBody }
            output: InvalidInputExceptionInfo
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/v1/connector_builder_assist/warm': {
      $post:
        | {
            input: { json: AssistV1ProcessRequestBody }
            output: AssistV1Process
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: AssistV1ProcessRequestBody }
            output: KnownExceptionInfo
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { json: AssistV1ProcessRequestBody }
            output: InvalidInputExceptionInfo
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/v1/connector_documentation/get': {
      $post:
        | {
            input: { json: ConnectorDocumentationRequestBody }
            output: ConnectorDocumentationRead
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: ConnectorDocumentationRequestBody }
            output: NotFoundKnownExceptionInfo
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { json: ConnectorDocumentationRequestBody }
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
    '/v1/sources/partial_update': {
      $post:
        | {
            input: { json: PartialSourceUpdate }
            output: SourceRead
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: PartialSourceUpdate }
            output: NotFoundKnownExceptionInfo
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { json: PartialSourceUpdate }
            output: InvalidInputExceptionInfo
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/v1/sources/upgrade_version': {
      $post:
        | { input: { json: SourceIdRequestBody }; output: {}; outputFormat: string; status: 204 }
        | {
            input: { json: SourceIdRequestBody }
            output: NotFoundKnownExceptionInfo
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/v1/sources/list': {
      $post:
        | {
            input: { json: ActorListCursorPaginatedRequestBody }
            output: SourceReadList
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: ActorListCursorPaginatedRequestBody }
            output: NotFoundKnownExceptionInfo
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { json: ActorListCursorPaginatedRequestBody }
            output: InvalidInputExceptionInfo
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/v1/sources/list_paginated': {
      $post:
        | {
            input: { json: ListResourcesForWorkspacesRequestBody }
            output: SourceReadList
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: ListResourcesForWorkspacesRequestBody }
            output: NotFoundKnownExceptionInfo
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { json: ListResourcesForWorkspacesRequestBody }
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
    '/v1/sources/get_with_metadata': {
      $post:
        | {
            input: { json: SourceIdWithSecretCoordinatesRequestBody }
            output: SourceReadWithMetadata
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: SourceIdWithSecretCoordinatesRequestBody }
            output: NotFoundKnownExceptionInfo
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { json: SourceIdWithSecretCoordinatesRequestBody }
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
    '/v1/workspaces/:workspaceId/skills/docs': {
      $get:
        | {
            input: { param: { workspaceId: string } } & {
              query: { id: string; section?: string | undefined }
            }
            output: SkillDocsResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { workspaceId: string } } & {
              query: { id: string; section?: string | undefined }
            }
            output: SourceExecuteProblem
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { workspaceId: string } } & {
              query: { id: string; section?: string | undefined }
            }
            output: SourceExecuteProblem
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { workspaceId: string } } & {
              query: { id: string; section?: string | undefined }
            }
            output: SourceExecuteProblem
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { workspaceId: string } } & {
              query: { id: string; section?: string | undefined }
            }
            output: SourceExecuteProblem
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { workspaceId: string } } & {
              query: { id: string; section?: string | undefined }
            }
            output: SourceExecuteProblem
            outputFormat: 'json'
            status: 502
          }
        | {
            input: { param: { workspaceId: string } } & {
              query: { id: string; section?: string | undefined }
            }
            output: SourceExecuteProblem
            outputFormat: 'json'
            status: 503
          }
        | {
            input: { param: { workspaceId: string } } & {
              query: { id: string; section?: string | undefined }
            }
            output: SourceExecuteProblem
            outputFormat: 'json'
            status: 504
          }
    }
  } & {
    '/v1/destinations/:destinationId/execute': {
      $post:
        | {
            input: { param: { destinationId: string } } & { json: DestinationExecuteRequest }
            output: DestinationExecuteResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { destinationId: string } } & { json: DestinationExecuteRequest }
            output: SourceExecuteProblem
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { destinationId: string } } & { json: DestinationExecuteRequest }
            output: SourceExecuteProblem
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { destinationId: string } } & { json: DestinationExecuteRequest }
            output: SourceExecuteProblem
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { destinationId: string } } & { json: DestinationExecuteRequest }
            output: SourceExecuteProblem
            outputFormat: 'json'
            status: 405
          }
        | {
            input: { param: { destinationId: string } } & { json: DestinationExecuteRequest }
            output: SourceExecuteProblem
            outputFormat: 'json'
            status: 413
          }
        | {
            input: { param: { destinationId: string } } & { json: DestinationExecuteRequest }
            output: SourceExecuteProblem
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { destinationId: string } } & { json: DestinationExecuteRequest }
            output: SourceExecuteProblem
            outputFormat: 'json'
            status: 502
          }
        | {
            input: { param: { destinationId: string } } & { json: DestinationExecuteRequest }
            output: SourceExecuteProblem
            outputFormat: 'json'
            status: 503
          }
        | {
            input: { param: { destinationId: string } } & { json: DestinationExecuteRequest }
            output: SourceExecuteProblem
            outputFormat: 'json'
            status: 504
          }
    }
  } & {
    '/v1/sources/:sourceId/execute': {
      $post:
        | {
            input: { param: { sourceId: string } } & { json: SourceExecuteRequest }
            output: SourceExecuteResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { sourceId: string } } & { json: SourceExecuteRequest }
            output: SourceExecuteProblem
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { sourceId: string } } & { json: SourceExecuteRequest }
            output: SourceExecuteProblem
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { sourceId: string } } & { json: SourceExecuteRequest }
            output: SourceExecuteProblem
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { sourceId: string } } & { json: SourceExecuteRequest }
            output: SourceExecuteProblem
            outputFormat: 'json'
            status: 413
          }
        | {
            input: { param: { sourceId: string } } & { json: SourceExecuteRequest }
            output: SourceExecuteProblem
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { sourceId: string } } & { json: SourceExecuteRequest }
            output: SourceExecuteProblem
            outputFormat: 'json'
            status: 502
          }
        | {
            input: { param: { sourceId: string } } & { json: SourceExecuteRequest }
            output: SourceExecuteProblem
            outputFormat: 'json'
            status: 503
          }
        | {
            input: { param: { sourceId: string } } & { json: SourceExecuteRequest }
            output: SourceExecuteProblem
            outputFormat: 'json'
            status: 504
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
    '/v1/sources/apply_schema_changes': {
      $post:
        | {
            input: { json: SourceAutoPropagateChange }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { json: SourceAutoPropagateChange }
            output: NotFoundKnownExceptionInfo
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { json: SourceAutoPropagateChange }
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
    '/v1/destinations/write_discover_catalog_result': {
      $post: {
        input: { json: DestinationDiscoverSchemaWriteRequestBody }
        output: DiscoverCatalogResult
        outputFormat: 'json'
        status: 200
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
    '/v1/destination_definitions/list': {
      $post: { input: {}; output: DestinationDefinitionReadList; outputFormat: 'json'; status: 200 }
    }
  } & {
    '/v1/destination_definitions/list_latest': {
      $post: { input: {}; output: DestinationDefinitionReadList; outputFormat: 'json'; status: 200 }
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
    '/v1/destination_definitions/list_private': {
      $post: {
        input: { json: WorkspaceIdRequestBody }
        output: PrivateDestinationDefinitionReadList
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/destination_definitions/list_for_workspace': {
      $post: {
        input: { json: WorkspaceIdActorDefinitionRequestBody }
        output: DestinationDefinitionReadList
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/destination_definitions/list_enterprise_stubs_for_workspace': {
      $post: {
        input: { json: WorkspaceIdRequestBody }
        output: EnterpriseConnectorStubsReadList
        outputFormat: 'json'
        status: 200
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
    '/v1/destination_definitions/get_for_scope': {
      $post:
        | {
            input: { json: ActorDefinitionIdWithScope }
            output: DestinationDefinitionRead
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: ActorDefinitionIdWithScope }
            output: NotFoundKnownExceptionInfo
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { json: ActorDefinitionIdWithScope }
            output: InvalidInputExceptionInfo
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/v1/destination_definitions/grant_definition': {
      $post:
        | {
            input: { json: ActorDefinitionIdWithScope }
            output: PrivateDestinationDefinitionRead
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: ActorDefinitionIdWithScope }
            output: NotFoundKnownExceptionInfo
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { json: ActorDefinitionIdWithScope }
            output: InvalidInputExceptionInfo
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/v1/destination_definitions/revoke_definition': {
      $post:
        | {
            input: { json: ActorDefinitionIdWithScope }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { json: ActorDefinitionIdWithScope }
            output: NotFoundKnownExceptionInfo
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { json: ActorDefinitionIdWithScope }
            output: InvalidInputExceptionInfo
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/v1/actor_definition_versions/get_for_destination': {
      $post:
        | {
            input: { json: DestinationIdRequestBody }
            output: ActorDefinitionVersionRead
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: DestinationIdRequestBody }
            output: NotFoundKnownExceptionInfo
            outputFormat: 'json'
            status: 404
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
    '/v1/destination_definition_specifications/get_for_destination': {
      $post:
        | {
            input: { json: DestinationIdRequestBody }
            output: DestinationDefinitionSpecificationRead
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
    '/v1/destinations/partial_update': {
      $post:
        | {
            input: { json: PartialDestinationUpdate }
            output: DestinationRead
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: PartialDestinationUpdate }
            output: InvalidInputExceptionInfo
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/v1/destinations/upgrade_version': {
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
    }
  } & {
    '/v1/destinations/list': {
      $post:
        | {
            input: { json: ActorListCursorPaginatedRequestBody }
            output: DestinationReadList
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: ActorListCursorPaginatedRequestBody }
            output: NotFoundKnownExceptionInfo
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { json: ActorListCursorPaginatedRequestBody }
            output: InvalidInputExceptionInfo
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/v1/destinations/list_paginated': {
      $post:
        | {
            input: { json: ListResourcesForWorkspacesRequestBody }
            output: DestinationReadList
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: ListResourcesForWorkspacesRequestBody }
            output: NotFoundKnownExceptionInfo
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { json: ListResourcesForWorkspacesRequestBody }
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
    '/v1/destinations/discover_schema': {
      $post:
        | {
            input: { json: DestinationDiscoverSchemaRequestBody }
            output: DestinationDiscoverRead
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: DestinationDiscoverSchemaRequestBody }
            output: NotFoundKnownExceptionInfo
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { json: DestinationDiscoverSchemaRequestBody }
            output: InvalidInputExceptionInfo
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/v1/destinations/get_catalog_for_connection': {
      $post:
        | {
            input: { json: ConnectionIdRequestBody }
            output: DestinationDiscoverRead
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
    '/v1/connections/update_with_reason': {
      $post:
        | {
            input: { json: ConnectionUpdateWithReason }
            output: ConnectionRead
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: ConnectionUpdateWithReason }
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
    '/v1/connections/list_paginated': {
      $post:
        | {
            input: { json: ListConnectionsForWorkspacesRequestBody }
            output: ConnectionReadList
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: ListConnectionsForWorkspacesRequestBody }
            output: NotFoundKnownExceptionInfo
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { json: ListConnectionsForWorkspacesRequestBody }
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
    '/v1/connections/status': {
      $post:
        | {
            input: { json: ConnectionStatusesRequestBody }
            output: ConnectionStatusesRead
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: ConnectionStatusesRequestBody }
            output: NotFoundKnownExceptionInfo
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { json: ConnectionStatusesRequestBody }
            output: InvalidInputExceptionInfo
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/v1/connections/sync_progress': {
      $post:
        | {
            input: { json: ConnectionIdRequestBody }
            output: ConnectionSyncProgressRead
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
    '/v1/connections/history/uptime': {
      $post:
        | {
            input: { json: ConnectionUptimeHistoryRequestBody }
            output: ConnectionUptimeHistoryRead
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: ConnectionUptimeHistoryRequestBody }
            output: NotFoundKnownExceptionInfo
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { json: ConnectionUptimeHistoryRequestBody }
            output: InvalidInputExceptionInfo
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/v1/connections/history/data': {
      $post:
        | {
            input: { json: ConnectionDataHistoryRequestBody }
            output: ConnectionUptimeHistoryRead
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: ConnectionDataHistoryRequestBody }
            output: NotFoundKnownExceptionInfo
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { json: ConnectionDataHistoryRequestBody }
            output: InvalidInputExceptionInfo
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/v1/connections/stream_history': {
      $post:
        | {
            input: { json: ConnectionStreamHistoryRequestBody }
            output: ConnectionStreamHistoryRead
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: ConnectionStreamHistoryRequestBody }
            output: NotFoundKnownExceptionInfo
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { json: ConnectionStreamHistoryRequestBody }
            output: InvalidInputExceptionInfo
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/v1/connections/events/get': {
      $post:
        | {
            input: { json: ConnectionEventIdRequestBody }
            output: ConnectionEventWithDetails
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: ConnectionEventIdRequestBody }
            output: NotFoundKnownExceptionInfo
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { json: ConnectionEventIdRequestBody }
            output: InvalidInputExceptionInfo
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/v1/connections/events/list': {
      $post:
        | {
            input: { json: ConnectionEventsRequestBody }
            output: ConnectionEventList
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: ConnectionEventsRequestBody }
            output: NotFoundKnownExceptionInfo
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { json: ConnectionEventsRequestBody }
            output: InvalidInputExceptionInfo
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/v1/connections/events/list_minimal': {
      $post:
        | {
            input: { json: ConnectionEventsListMinimalRequestBody }
            output: ConnectionEventListMinimal
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: ConnectionEventsListMinimalRequestBody }
            output: NotFoundKnownExceptionInfo
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { json: ConnectionEventsListMinimalRequestBody }
            output: InvalidInputExceptionInfo
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/v1/connections/events/backfill': {
      $post:
        | {
            input: { json: ConnectionEventsBackfillRequestBody }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { json: ConnectionEventsBackfillRequestBody }
            output: NotFoundKnownExceptionInfo
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { json: ConnectionEventsBackfillRequestBody }
            output: InvalidInputExceptionInfo
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/v1/connections/events/list_for_job': {
      $post:
        | {
            input: { json: JobIdRequestBody }
            output: ConnectionEventList
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
    '/v1/connections/last_job_per_stream': {
      $post:
        | {
            input: { json: ConnectionLastJobPerStreamRequestBody }
            output: ConnectionLastJobPerStreamRead
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: ConnectionLastJobPerStreamRequestBody }
            output: NotFoundKnownExceptionInfo
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { json: ConnectionLastJobPerStreamRequestBody }
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
    '/v1/connections/getForJob': {
      $post:
        | {
            input: { json: ConnectionAndJobIdRequestBody }
            output: ConnectionRead
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: ConnectionAndJobIdRequestBody }
            output: NotFoundKnownExceptionInfo
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { json: ConnectionAndJobIdRequestBody }
            output: InvalidInputExceptionInfo
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/v1/connections/list_by_actor_definition': {
      $post:
        | {
            input: { json: ActorDefinitionRequestBody }
            output: ConnectionReadList
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: ActorDefinitionRequestBody }
            output: NotFoundKnownExceptionInfo
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { json: ActorDefinitionRequestBody }
            output: InvalidInputExceptionInfo
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/v1/connections/apply_schema_changes': {
      $post:
        | {
            input: { json: ConnectionAutoPropagateSchemaChange }
            output: ConnectionAutoPropagateResult
            outputFormat: 'json'
            status: 204
          }
        | {
            input: { json: ConnectionAutoPropagateSchemaChange }
            output: NotFoundKnownExceptionInfo
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { json: ConnectionAutoPropagateSchemaChange }
            output: InvalidInputExceptionInfo
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/v1/connections/postprocess_discovered_catalog': {
      $post:
        | {
            input: { json: PostprocessDiscoveredCatalogRequestBody }
            output: PostprocessDiscoveredCatalogResult
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: PostprocessDiscoveredCatalogRequestBody }
            output: NotFoundKnownExceptionInfo
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { json: PostprocessDiscoveredCatalogRequestBody }
            output: InvalidInputExceptionInfo
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/v1/connections/get_context': {
      $post:
        | {
            input: { json: ConnectionIdRequestBody }
            output: ConnectionContextRead
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
    '/v1/state/create_or_update_safe': {
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
        | {
            input: { json: ConnectionStateCreateOrUpdate }
            output: KnownExceptionInfo
            outputFormat: 'json'
            status: 423
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
    '/v1/connections/clear': {
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
    '/v1/connections/auto_disable': {
      $post:
        | {
            input: { json: ConnectionIdRequestBody }
            output: InternalOperationResult
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: ConnectionIdRequestBody }
            output: NotFoundKnownExceptionInfo
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/v1/connections/clear/stream': {
      $post:
        | {
            input: { json: ConnectionStreamRequestBody }
            output: JobInfoRead
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: ConnectionStreamRequestBody }
            output: NotFoundKnownExceptionInfo
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { json: ConnectionStreamRequestBody }
            output: InvalidInputExceptionInfo
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/v1/connections/reset/stream': {
      $post:
        | {
            input: { json: ConnectionStreamRequestBody }
            output: JobInfoRead
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: ConnectionStreamRequestBody }
            output: NotFoundKnownExceptionInfo
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { json: ConnectionStreamRequestBody }
            output: InvalidInputExceptionInfo
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/v1/connections/refresh': {
      $post:
        | {
            input: { json: ConnectionStreamRefreshRequestBody }
            output: JobReadResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: ConnectionStreamRefreshRequestBody }
            output: NotFoundKnownExceptionInfo
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { json: ConnectionStreamRefreshRequestBody }
            output: InvalidInputExceptionInfo
            outputFormat: 'json'
            status: 422
          }
    }
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
    '/v1/source_oauths/get_embedded_consent_url': {
      $post:
        | {
            input: { json: EmbeddedSourceOauthConsentRequest }
            output: OAuthConsentRead
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: EmbeddedSourceOauthConsentRequest }
            output: NotFoundKnownExceptionInfo
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { json: EmbeddedSourceOauthConsentRequest }
            output: InvalidInputExceptionInfo
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/v1/connector_builder_projects/get_oauth_consent_url': {
      $post:
        | {
            input: { json: BuilderProjectOauthConsentRequest }
            output: OAuthConsentRead
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: BuilderProjectOauthConsentRequest }
            output: NotFoundKnownExceptionInfo
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { json: BuilderProjectOauthConsentRequest }
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
    '/v1/connector_builder_projects/complete_oauth': {
      $post:
        | {
            input: { json: CompleteConnectorBuilderProjectOauthRequest }
            output: CompleteOAuthResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: CompleteConnectorBuilderProjectOauthRequest }
            output: NotFoundKnownExceptionInfo
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { json: CompleteConnectorBuilderProjectOauthRequest }
            output: InvalidInputExceptionInfo
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/v1/source_oauths/revoke': {
      $post:
        | {
            input: { json: RevokeSourceOauthTokensRequest }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { json: RevokeSourceOauthTokensRequest }
            output: KnownExceptionInfo
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { json: RevokeSourceOauthTokensRequest }
            output: NotFoundKnownExceptionInfo
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/v1/source_oauths/get_scopes': {
      $post:
        | {
            input: { json: SourceOAuthScopesRequest }
            output: SourceOAuthScopesRead
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: SourceOAuthScopesRequest }
            output: NotFoundKnownExceptionInfo
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { json: SourceOAuthScopesRequest }
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
    '/v1/web_backend/check_updates': {
      $post: { input: {}; output: WebBackendCheckUpdatesRead; outputFormat: 'json'; status: 200 }
    }
  } & {
    '/v1/web_backend/mappers/validate': {
      $post: {
        input: { json: WebBackendValidateMappersRequestBody }
        output: WebBackendValidateMappersResponse
        outputFormat: 'json'
        status: 200
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
    '/v1/web_backend/connections/status_counts': {
      $post:
        | {
            input: { json: WorkspaceIdRequestBody }
            output: WebBackendConnectionStatusCounts
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
    '/v1/web_backend/describe_cron_expression': {
      $post:
        | {
            input: { json: WebBackendDescribeCronExpressionRequestBody }
            output: WebBackendCronExpressionDescription
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: WebBackendDescribeCronExpressionRequestBody }
            output: InvalidInputExceptionInfo
            outputFormat: 'json'
            status: 422
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
    '/v1/web_backend/config': {
      $get:
        | { input: {}; output: WebappConfigResponse; outputFormat: 'json'; status: 200 }
        | { input: {}; output: {}; outputFormat: string; status: 401 }
    }
  } & {
    '/v1/jobs/create': {
      $post:
        | { input: { json: JobCreate }; output: JobInfoRead; outputFormat: 'json'; status: 200 }
        | {
            input: { json: JobCreate }
            output: NotFoundKnownExceptionInfo
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { json: JobCreate }
            output: InvalidInputExceptionInfo
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/v1/jobs/job_success_with_attempt_number': {
      $post: {
        input: {
          json: {
            jobId: JobId
            attemptNumber: AttemptNumber
            connectionId: ConnectionId
            standardSyncOutput?: { [x: string]: unknown } | undefined
          }
        }
        output: InternalOperationResult
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
    '/v1/jobs/list_for_workspaces': {
      $post:
        | {
            input: { json: JobListForWorkspacesRequestBody }
            output: JobReadList
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: JobListForWorkspacesRequestBody }
            output: NotFoundKnownExceptionInfo
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { json: JobListForWorkspacesRequestBody }
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
    '/v1/jobs/get_last_replication_job_with_cancel': {
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
    '/v1/jobs/get_without_logs': {
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
    '/v1/jobs/get_input': {
      $post:
        | {
            input: { json: SyncInput }
            output: SyncJobInputRead
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: SyncInput }
            output: NotFoundKnownExceptionInfo
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/v1/jobs/fail_non_terminal': {
      $post: {
        input: { json: ConnectionIdRequestBody }
        output: {}
        outputFormat: string
        status: 204
      }
    }
  } & {
    '/v1/jobs/reportJobStart': {
      $post: {
        input: { json: { jobId: JobId; connectionId: ConnectionId } }
        output: InternalOperationResult
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/jobs/setJobQueued': {
      $post: {
        input: { json: { jobId: JobId } }
        output: InternalOperationResult
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/jobs/cancelQueuedJob': {
      $post: {
        input: { json: { jobId: JobId } }
        output: InternalOperationResult
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/jobs/checkDataWorkerCapacity': {
      $post: {
        input: {
          json: { jobId: JobId; connectionId: ConnectionId; organizationId: OrganizationId }
        }
        output: CheckDataWorkerCapacityRead
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/jobs/getWebhookConfig': {
      $post: {
        input: { json: { jobId: bigint } }
        output: { value: string }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/jobs/job_failure': {
      $post: {
        input: {
          json: {
            jobId: JobId
            attemptNumber: AttemptNumber
            connectionId: ConnectionId
            reason: string
          }
        }
        output: InternalOperationResult
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/jobs/delete_stream_reset_records': {
      $post: {
        input: { json: { connectionId: ConnectionId; jobId: JobId } }
        output: {}
        outputFormat: string
        status: 204
      }
    }
  } & {
    '/v1/jobs/explain': {
      $post:
        | {
            input: { json: JobIdRequestBody }
            output: JobExplainRead
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
    '/v1/jobs/evaluate_outlier': {
      $post: {
        input: { json: JobIdRequestBody }
        output: InternalOperationResult
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/jobs/finalize': {
      $post: {
        input: { json: JobIdRequestBody }
        output: InternalOperationResult
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/users/get': {
      $post:
        | {
            input: { json: UserIdRequestBody }
            output: UserRead
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: UserIdRequestBody }
            output: NotFoundKnownExceptionInfo
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { json: UserIdRequestBody }
            output: InvalidInputExceptionInfo
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/v1/users/get_by_auth_id': {
      $post:
        | {
            input: { json: UserAuthIdRequestBody }
            output: UserRead
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: UserAuthIdRequestBody }
            output: NotFoundKnownExceptionInfo
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { json: UserAuthIdRequestBody }
            output: InvalidInputExceptionInfo
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/v1/users/get_by_email': {
      $post:
        | {
            input: { json: UserEmailRequestBody }
            output: UserRead
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: UserEmailRequestBody }
            output: NotFoundKnownExceptionInfo
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { json: UserEmailRequestBody }
            output: InvalidInputExceptionInfo
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/v1/users/get_or_create_by_auth_id': {
      $post:
        | {
            input: { json: UserAuthIdRequestBody }
            output: UserGetOrCreateByAuthIdResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: UserAuthIdRequestBody }
            output: NotFoundKnownExceptionInfo
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { json: UserAuthIdRequestBody }
            output: InvalidInputExceptionInfo
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/v1/users/update': {
      $post:
        | { input: { json: UserUpdate }; output: UserRead; outputFormat: 'json'; status: 200 }
        | {
            input: { json: UserUpdate }
            output: NotFoundKnownExceptionInfo
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { json: UserUpdate }
            output: InvalidInputExceptionInfo
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/v1/users/delete': {
      $post:
        | { input: { json: UserIdRequestBody }; output: {}; outputFormat: string; status: 204 }
        | {
            input: { json: UserIdRequestBody }
            output: NotFoundKnownExceptionInfo
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { json: UserIdRequestBody }
            output: InvalidInputExceptionInfo
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/v1/users/list_access_info_by_workspace_id': {
      $post:
        | {
            input: { json: WorkspaceIdRequestBody }
            output: WorkspaceUserAccessInfoReadList
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
    '/v1/users/list_by_organization_id': {
      $post:
        | {
            input: { json: OrganizationIdRequestBody }
            output: OrganizationUserReadList
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: OrganizationIdRequestBody }
            output: NotFoundKnownExceptionInfo
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/v1/users/list_instance_admin': {
      $post:
        | { input: {}; output: UserWithPermissionInfoReadList; outputFormat: 'json'; status: 200 }
        | { input: {}; output: NotFoundKnownExceptionInfo; outputFormat: 'json'; status: 404 }
    }
  } & {
    '/v1/permissions/create': {
      $post:
        | {
            input: { json: PermissionCreate }
            output: PermissionRead
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: PermissionCreate }
            output: KnownExceptionInfo
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/v1/permissions/get': {
      $post:
        | {
            input: { json: PermissionIdRequestBody }
            output: PermissionRead
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: PermissionIdRequestBody }
            output: KnownExceptionInfo
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { json: PermissionIdRequestBody }
            output: NotFoundKnownExceptionInfo
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { json: PermissionIdRequestBody }
            output: InvalidInputExceptionInfo
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/v1/permissions/check': {
      $post:
        | {
            input: { json: PermissionCheckRequest }
            output: PermissionCheckRead
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: PermissionCheckRequest }
            output: NotFoundKnownExceptionInfo
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { json: PermissionCheckRequest }
            output: InvalidInputExceptionInfo
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/v1/permissions/check_multiple_workspaces': {
      $post:
        | {
            input: { json: PermissionsCheckMultipleWorkspacesRequest }
            output: PermissionCheckRead
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: PermissionsCheckMultipleWorkspacesRequest }
            output: NotFoundKnownExceptionInfo
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { json: PermissionsCheckMultipleWorkspacesRequest }
            output: InvalidInputExceptionInfo
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/v1/permissions/update': {
      $post:
        | { input: { json: PermissionUpdate }; output: {}; outputFormat: string; status: 204 }
        | {
            input: { json: PermissionUpdate }
            output: KnownExceptionInfo
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { json: PermissionUpdate }
            output: NotFoundKnownExceptionInfo
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { json: PermissionUpdate }
            output: InvalidInputExceptionInfo
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/v1/secrets_persistence_config/get': {
      $post:
        | {
            input: { json: SecretPersistenceConfigGetRequestBody }
            output: SecretPersistenceConfig
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: SecretPersistenceConfigGetRequestBody }
            output: InvalidInputExceptionInfo
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/v1/secrets_persistence_config/create_or_update': {
      $post:
        | {
            input: { json: CreateOrUpdateSecretsPersistenceConfigRequestBody }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { json: CreateOrUpdateSecretsPersistenceConfigRequestBody }
            output: InvalidInputExceptionInfo
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/v1/secret_storage/create': {
      $post:
        | {
            input: { json: SecretStorageCreateRequestBody }
            output: SecretStorageRead
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: SecretStorageCreateRequestBody }
            output: InvalidInputExceptionInfo
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/v1/secret_storage/list': {
      $post:
        | {
            input: { json: SecretStorageListRequestBody }
            output: SecretStorageReadList
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: SecretStorageListRequestBody }
            output: InvalidInputExceptionInfo
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/v1/secret_storage/delete': {
      $post:
        | {
            input: { json: SecretStorageIdRequestBody }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { json: SecretStorageIdRequestBody }
            output: NotFoundKnownExceptionInfo
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { json: SecretStorageIdRequestBody }
            output: InvalidInputExceptionInfo
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/v1/secret_storage/get': {
      $post:
        | {
            input: { json: SecretStorageIdRequestBody }
            output: SecretStorageRead
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: SecretStorageIdRequestBody }
            output: NotFoundKnownExceptionInfo
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { json: SecretStorageIdRequestBody }
            output: InvalidInputExceptionInfo
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/v1/secret_storage/migrate': {
      $post:
        | {
            input: { json: MigrateSecretStorageRequestBody }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { json: MigrateSecretStorageRequestBody }
            output: NotFoundKnownExceptionInfo
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { json: MigrateSecretStorageRequestBody }
            output: InvalidInputExceptionInfo
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/v1/permissions/delete': {
      $post:
        | {
            input: { json: PermissionIdRequestBody }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { json: PermissionIdRequestBody }
            output: KnownExceptionInfo
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { json: PermissionIdRequestBody }
            output: NotFoundKnownExceptionInfo
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { json: PermissionIdRequestBody }
            output: InvalidInputExceptionInfo
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/v1/permissions/delete_user_from_workspace': {
      $post:
        | {
            input: { json: PermissionDeleteUserFromWorkspaceRequestBody }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { json: PermissionDeleteUserFromWorkspaceRequestBody }
            output: KnownExceptionInfo
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { json: PermissionDeleteUserFromWorkspaceRequestBody }
            output: NotFoundKnownExceptionInfo
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { json: PermissionDeleteUserFromWorkspaceRequestBody }
            output: InvalidInputExceptionInfo
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/v1/permissions/list_by_user': {
      $post:
        | {
            input: { json: UserIdRequestBody }
            output: PermissionReadList
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: UserIdRequestBody }
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
    '/v1/openapi': { $get: { input: {}; output: File; outputFormat: 'text'; status: 200 } }
  } & {
    '/v1/attempt/create_new_attempt_number': {
      $post: {
        input: { json: { jobId: JobId } }
        output: { attemptNumber: AttemptNumber }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/attempt/save_stream_metadata': {
      $post: {
        input: { json: SaveStreamAttemptMetadataRequestBody }
        output: InternalOperationResult
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
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
    '/v1/attempt/fail': {
      $post: {
        input: {
          json: {
            jobId: JobId
            attemptNumber: AttemptNumber
            failureSummary?: { [x: string]: unknown } | undefined
            standardSyncOutput?: { [x: string]: unknown } | undefined
          }
        }
        output: {}
        outputFormat: string
        status: 204
      }
    }
  } & {
    '/v1/attempt/get_combined_stats': {
      $post:
        | {
            input: { json: GetAttemptStatsRequestBody }
            output: AttemptStats
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: GetAttemptStatsRequestBody }
            output: NotFoundKnownExceptionInfo
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/v1/attempt/get_for_job': {
      $post:
        | {
            input: { json: GetAttemptStatsRequestBody }
            output: AttemptInfoRead
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: GetAttemptStatsRequestBody }
            output: NotFoundKnownExceptionInfo
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/v1/stream_statuses/list': {
      $post: {
        input: { json: StreamStatusListRequestBody }
        output: StreamStatusReadList
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/stream_statuses/latest_per_run_state': {
      $post: {
        input: { json: ConnectionIdRequestBody }
        output: StreamStatusReadList
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/stream_statuses/create': {
      $post: {
        input: { json: StreamStatusCreateRequestBody }
        output: StreamStatusRead
        outputFormat: 'json'
        status: 201
      }
    }
  } & {
    '/v1/stream_statuses/update': {
      $post:
        | {
            input: { json: StreamStatusUpdateRequestBody }
            output: StreamStatusRead
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: StreamStatusUpdateRequestBody }
            output: StreamStatusRead
            outputFormat: 'json'
            status: 201
          }
    }
  } & {
    '/v1/instance_configuration': {
      $get:
        | { input: {}; output: InstanceConfigurationResponse; outputFormat: 'json'; status: 200 }
        | { input: {}; output: {}; outputFormat: string; status: 401 }
    }
  } & {
    '/v1/instance_configuration/setup': {
      $post:
        | {
            input: { json: InstanceConfigurationSetupRequestBody }
            output: InstanceConfigurationResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: InstanceConfigurationSetupRequestBody }
            output: {}
            outputFormat: string
            status: 401
          }
    }
  } & {
    '/v1/jobs/retry_states/create_or_update': {
      $post: {
        input: { json: JobRetryStateRequestBody }
        output: {}
        outputFormat: string
        status: 204
      }
    }
  } & {
    '/v1/jobs/retry_states/get': {
      $post:
        | {
            input: { json: JobIdRequestBody }
            output: RetryStateRead
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: JobIdRequestBody }
            output: NotFoundKnownExceptionInfo
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/v1/jobs/did_previous_job_succeed': {
      $post: {
        input: { json: ConnectionJobRequestBody }
        output: BooleanRead
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/jobs/persist_cancellation': {
      $post: {
        input: { json: PersistCancelJobRequestBody }
        output: {}
        outputFormat: string
        status: 204
      }
    }
  } & {
    '/v1/billing/customer_portal': {
      $post: {
        input: { json: CustomerPortalRequestBody }
        output: CustomerPortalRead
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/billing/backfill_usage': {
      $post: {
        input: { json: BillingBackfillUsageRequest }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/v1/billing/handle_webhook': {
      $post:
        | { input: { json: BillingEvent }; output: {}; outputFormat: string; status: 200 }
        | { input: { json: BillingEvent }; output: {}; outputFormat: string; status: 400 }
        | { input: { json: BillingEvent }; output: {}; outputFormat: string; status: 401 }
    }
  } & {
    '/v1/billing/list_invoices': {
      $post: {
        input: { json: OrganizationIdRequestBody }
        output: ListInvoicesRead
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/billing/payment_information': {
      $post: {
        input: { json: OrganizationIdRequestBody }
        output: PaymentInformationRead
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/billing/subscription_info': {
      $post: {
        input: { json: OrganizationIdRequestBody }
        output: OrganizationSubscriptionInfoRead
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/billing/trial_status': {
      $post: {
        input: { json: OrganizationIdRequestBody }
        output: OrganizationTrialStatusRead
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/billing/cancel_subscription': {
      $post: {
        input: { json: OrganizationIdRequestBody }
        output: CancelSubscriptionRead
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/billing/unschedule_cancel_subscription': {
      $post: {
        input: { json: OrganizationIdRequestBody }
        output: {}
        outputFormat: string
        status: 204
      }
    }
  } & {
    '/v1/billing/unschedule_plan_change': {
      $post: {
        input: { json: OrganizationIdRequestBody }
        output: {}
        outputFormat: string
        status: 204
      }
    }
  } & {
    '/v1/billing/disable_delinquent_workspaces': {
      $post: { input: {}; output: {}; outputFormat: string; status: 200 }
    }
  } & {
    '/v1/billing/notification_settings/get': {
      $post:
        | {
            input: { json: OrganizationIdRequestBody }
            output: BillingNotificationSettingsRead
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: OrganizationIdRequestBody }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { json: OrganizationIdRequestBody }
            output: {}
            outputFormat: string
            status: 403
          }
    }
  } & {
    '/v1/billing/notification_settings/update': {
      $post:
        | {
            input: { json: BillingNotificationSettingsUpdateRequestBody }
            output: BillingNotificationSettingsRead
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: BillingNotificationSettingsUpdateRequestBody }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { json: BillingNotificationSettingsUpdateRequestBody }
            output: {}
            outputFormat: string
            status: 403
          }
    }
  } & {
    '/v1/organization_payment_config/:organizationId': {
      $get: {
        input: { param: { organizationId: string } }
        output: OrganizationPaymentConfigRead
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/organization_payment_config': {
      $post:
        | {
            input: { json: OrganizationPaymentConfigUpdateRequestBody }
            output: OrganizationPaymentConfigRead
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: OrganizationPaymentConfigUpdateRequestBody }
            output: {}
            outputFormat: string
            status: 404
          }
    }
  } & {
    '/v1/organization_payment_config/:organizationId/end_grace_period': {
      $post:
        | {
            input: { param: { organizationId: string } }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { organizationId: string } }
            output: {}
            outputFormat: string
            status: 404
          }
        | {
            input: { param: { organizationId: string } }
            output: {}
            outputFormat: string
            status: 409
          }
    }
  } & {
    '/v1/organizations/get': {
      $post:
        | {
            input: { json: OrganizationIdRequestBody }
            output: OrganizationRead
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: OrganizationIdRequestBody }
            output: NotFoundKnownExceptionInfo
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/v1/organizations/get_semantic_search_enablement': {
      $post:
        | {
            input: { json: OrganizationIdRequestBody }
            output: OrganizationSemanticSearchEnablementRead
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: OrganizationIdRequestBody }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { json: OrganizationIdRequestBody }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { json: OrganizationIdRequestBody }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { json: OrganizationIdRequestBody }
            output: {}
            outputFormat: string
            status: 404
          }
    }
  } & {
    '/v1/organizations/update_semantic_search_enablement': {
      $post:
        | {
            input: { json: OrganizationSemanticSearchEnablementUpdateRequestBody }
            output: OrganizationSemanticSearchEnablementRead
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: OrganizationSemanticSearchEnablementUpdateRequestBody }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { json: OrganizationSemanticSearchEnablementUpdateRequestBody }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { json: OrganizationSemanticSearchEnablementUpdateRequestBody }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { json: OrganizationSemanticSearchEnablementUpdateRequestBody }
            output: {}
            outputFormat: string
            status: 404
          }
    }
  } & {
    '/v1/organizations/onboarding/update': {
      $post:
        | {
            input: { json: OrganizationOnboardingStatusUpdateRequestBody }
            output: OrganizationOnboardingStatusRead
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: OrganizationOnboardingStatusUpdateRequestBody }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { json: OrganizationOnboardingStatusUpdateRequestBody }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { json: OrganizationOnboardingStatusUpdateRequestBody }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { json: OrganizationOnboardingStatusUpdateRequestBody }
            output: {}
            outputFormat: string
            status: 404
          }
    }
  } & {
    '/v1/organizations/onboarding/send_mobile_handoff_email': {
      $post:
        | {
            input: { json: OrganizationOnboardingMobileHandoffEmailRequestBody }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { json: OrganizationOnboardingMobileHandoffEmailRequestBody }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { json: OrganizationOnboardingMobileHandoffEmailRequestBody }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { json: OrganizationOnboardingMobileHandoffEmailRequestBody }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { json: OrganizationOnboardingMobileHandoffEmailRequestBody }
            output: {}
            outputFormat: string
            status: 404
          }
        | {
            input: { json: OrganizationOnboardingMobileHandoffEmailRequestBody }
            output: {}
            outputFormat: string
            status: 500
          }
    }
  } & {
    '/v1/organizations/create': {
      $post: {
        input: { json: OrganizationCreateRequestBody }
        output: OrganizationRead
        outputFormat: 'json'
        status: 201
      }
    }
  } & {
    '/v1/organizations/update': {
      $post:
        | {
            input: { json: OrganizationUpdateRequestBody }
            output: OrganizationRead
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: OrganizationUpdateRequestBody }
            output: NotFoundKnownExceptionInfo
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/v1/organizations/agentic_status': {
      $post:
        | {
            input: { json: OrganizationAgenticStatusUpdateRequestBody }
            output: OrganizationRead
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: OrganizationAgenticStatusUpdateRequestBody }
            output: NotFoundKnownExceptionInfo
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/v1/organizations/delete': {
      $post:
        | {
            input: { json: OrganizationIdRequestBody }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { json: OrganizationIdRequestBody }
            output: NotFoundKnownExceptionInfo
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/v1/organizations/list_by_user_id': {
      $post:
        | {
            input: { json: ListOrganizationsByUserRequestBody }
            output: OrganizationReadList
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: ListOrganizationsByUserRequestBody }
            output: NotFoundKnownExceptionInfo
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/v1/organizations/get_usage': {
      $post:
        | {
            input: { json: OrganizationUsageRequestBody }
            output: OrganizationUsageRead
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: OrganizationUsageRequestBody }
            output: NotFoundKnownExceptionInfo
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/v1/organizations/get_data_worker_usage': {
      $post:
        | {
            input: { json: OrganizationDataWorkerUsageRequestBody }
            output: OrganizationDataWorkerUsageRead
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: OrganizationDataWorkerUsageRequestBody }
            output: NotFoundKnownExceptionInfo
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/v1/organizations/list_summaries': {
      $post:
        | {
            input: { json: ListOrganizationSummariesRequestBody }
            output: ListOrganizationSummariesResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: ListOrganizationSummariesRequestBody }
            output: NotFoundKnownExceptionInfo
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { json: ListOrganizationSummariesRequestBody }
            output: InvalidInputExceptionInfo
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/v1/organizations/get_organization_info': {
      $post:
        | {
            input: { json: OrganizationIdRequestBody }
            output: OrganizationInfoRead
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: OrganizationIdRequestBody }
            output: NotFoundKnownExceptionInfo
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { json: OrganizationIdRequestBody }
            output: InvalidInputExceptionInfo
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/v1/groups/list': {
      $post:
        | {
            input: { json: OrganizationIdRequestBody }
            output: GroupReadList
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: OrganizationIdRequestBody }
            output: KnownExceptionInfo
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { json: OrganizationIdRequestBody }
            output: InvalidInputExceptionInfo
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/v1/groups/get': {
      $post:
        | {
            input: { json: GroupIdRequestBody }
            output: GroupRead
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: GroupIdRequestBody }
            output: KnownExceptionInfo
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { json: GroupIdRequestBody }
            output: NotFoundKnownExceptionInfo
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { json: GroupIdRequestBody }
            output: InvalidInputExceptionInfo
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/v1/groups/create': {
      $post:
        | { input: { json: GroupCreate }; output: GroupRead; outputFormat: 'json'; status: 200 }
        | { input: { json: GroupCreate }; output: {}; outputFormat: string; status: 400 }
        | {
            input: { json: GroupCreate }
            output: KnownExceptionInfo
            outputFormat: 'json'
            status: 403
          }
        | { input: { json: GroupCreate }; output: {}; outputFormat: string; status: 409 }
        | {
            input: { json: GroupCreate }
            output: InvalidInputExceptionInfo
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/v1/groups/update': {
      $post:
        | { input: { json: GroupUpdate }; output: GroupRead; outputFormat: 'json'; status: 200 }
        | { input: { json: GroupUpdate }; output: {}; outputFormat: string; status: 400 }
        | {
            input: { json: GroupUpdate }
            output: KnownExceptionInfo
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { json: GroupUpdate }
            output: NotFoundKnownExceptionInfo
            outputFormat: 'json'
            status: 404
          }
        | { input: { json: GroupUpdate }; output: {}; outputFormat: string; status: 409 }
        | {
            input: { json: GroupUpdate }
            output: InvalidInputExceptionInfo
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/v1/groups/delete': {
      $post:
        | { input: { json: GroupIdRequestBody }; output: {}; outputFormat: string; status: 204 }
        | {
            input: { json: GroupIdRequestBody }
            output: KnownExceptionInfo
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { json: GroupIdRequestBody }
            output: NotFoundKnownExceptionInfo
            outputFormat: 'json'
            status: 404
          }
        | { input: { json: GroupIdRequestBody }; output: {}; outputFormat: string; status: 409 }
        | {
            input: { json: GroupIdRequestBody }
            output: InvalidInputExceptionInfo
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/v1/groups/list_members': {
      $post:
        | {
            input: { json: GroupIdRequestBody }
            output: GroupMemberReadList
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: GroupIdRequestBody }
            output: KnownExceptionInfo
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { json: GroupIdRequestBody }
            output: NotFoundKnownExceptionInfo
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { json: GroupIdRequestBody }
            output: InvalidInputExceptionInfo
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/v1/groups/add_member': {
      $post:
        | {
            input: { json: GroupMemberRequestBody }
            output: GroupMemberRead
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: GroupMemberRequestBody }
            output: KnownExceptionInfo
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { json: GroupMemberRequestBody }
            output: NotFoundKnownExceptionInfo
            outputFormat: 'json'
            status: 404
          }
        | { input: { json: GroupMemberRequestBody }; output: {}; outputFormat: string; status: 409 }
        | {
            input: { json: GroupMemberRequestBody }
            output: InvalidInputExceptionInfo
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/v1/groups/remove_member': {
      $post:
        | { input: { json: GroupMemberRequestBody }; output: {}; outputFormat: string; status: 204 }
        | {
            input: { json: GroupMemberRequestBody }
            output: KnownExceptionInfo
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { json: GroupMemberRequestBody }
            output: NotFoundKnownExceptionInfo
            outputFormat: 'json'
            status: 404
          }
        | { input: { json: GroupMemberRequestBody }; output: {}; outputFormat: string; status: 409 }
        | {
            input: { json: GroupMemberRequestBody }
            output: InvalidInputExceptionInfo
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/v1/group_permissions/list': {
      $post:
        | {
            input: { json: GroupIdRequestBody }
            output: GroupPermissionReadList
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: GroupIdRequestBody }
            output: KnownExceptionInfo
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { json: GroupIdRequestBody }
            output: NotFoundKnownExceptionInfo
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { json: GroupIdRequestBody }
            output: InvalidInputExceptionInfo
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/v1/group_permissions/create': {
      $post:
        | {
            input: { json: GroupPermissionCreate }
            output: GroupPermissionRead
            outputFormat: 'json'
            status: 200
          }
        | { input: { json: GroupPermissionCreate }; output: {}; outputFormat: string; status: 400 }
        | {
            input: { json: GroupPermissionCreate }
            output: KnownExceptionInfo
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { json: GroupPermissionCreate }
            output: NotFoundKnownExceptionInfo
            outputFormat: 'json'
            status: 404
          }
        | { input: { json: GroupPermissionCreate }; output: {}; outputFormat: string; status: 409 }
        | {
            input: { json: GroupPermissionCreate }
            output: InvalidInputExceptionInfo
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/v1/group_permissions/delete': {
      $post:
        | {
            input: { json: GroupPermissionIdRequestBody }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { json: GroupPermissionIdRequestBody }
            output: KnownExceptionInfo
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { json: GroupPermissionIdRequestBody }
            output: NotFoundKnownExceptionInfo
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { json: GroupPermissionIdRequestBody }
            output: InvalidInputExceptionInfo
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/v1/domain_verifications/list_pending': {
      $post:
        | { input: {}; output: DomainVerificationListResponse; outputFormat: 'json'; status: 200 }
        | { input: {}; output: InvalidInputExceptionInfo; outputFormat: 'json'; status: 422 }
    }
  } & {
    '/v1/domain_verifications/check': {
      $post:
        | {
            input: { json: DomainVerificationIdRequestBody }
            output: DomainVerificationResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: DomainVerificationIdRequestBody }
            output: NotFoundKnownExceptionInfo
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { json: DomainVerificationIdRequestBody }
            output: InvalidInputExceptionInfo
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/v1/deployment/metadata': {
      $post:
        | { input: {}; output: DeploymentMetadataRead; outputFormat: 'json'; status: 200 }
        | { input: {}; output: NotFoundKnownExceptionInfo; outputFormat: 'json'; status: 404 }
    }
  } & {
    '/v1/applications/list': {
      $post:
        | { input: {}; output: ApplicationReadList; outputFormat: 'json'; status: 200 }
        | { input: {}; output: NotFoundKnownExceptionInfo; outputFormat: 'json'; status: 404 }
        | { input: {}; output: InvalidInputExceptionInfo; outputFormat: 'json'; status: 422 }
    }
  } & {
    '/v1/applications/delete': {
      $post:
        | {
            input: { json: ApplicationIdRequestBody }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { json: ApplicationIdRequestBody }
            output: NotFoundKnownExceptionInfo
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { json: ApplicationIdRequestBody }
            output: InvalidInputExceptionInfo
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/v1/applications/create': {
      $post:
        | {
            input: { json: ApplicationCreate }
            output: ApplicationRead
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: ApplicationCreate }
            output: InvalidInputExceptionInfo
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/v1/applications/token': {
      $post:
        | {
            input: { json: ApplicationTokenRequest }
            output: AccessToken
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: ApplicationTokenRequest }
            output: InvalidInputExceptionInfo
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/v1/scoped_configuration/list': {
      $post:
        | {
            input: { json: ScopedConfigurationListRequestBody }
            output: ScopedConfigurationListResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: ScopedConfigurationListRequestBody }
            output: InvalidInputExceptionInfo
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/v1/scoped_configuration/get_context': {
      $post:
        | {
            input: { json: ScopedConfigurationContextRequestBody }
            output: ScopedConfigurationContextResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: ScopedConfigurationContextRequestBody }
            output: InvalidInputExceptionInfo
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/v1/scoped_configuration/create': {
      $post:
        | {
            input: { json: ScopedConfigurationCreateRequestBody }
            output: ScopedConfigurationCreateResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: ScopedConfigurationCreateRequestBody }
            output: InvalidInputExceptionInfo
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/v1/scoped_configuration/get': {
      $post:
        | {
            input: { json: ScopedConfigurationReadRequestBody }
            output: ScopedConfigurationReadResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: ScopedConfigurationReadRequestBody }
            output: InvalidInputExceptionInfo
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/v1/scoped_configuration/update': {
      $post:
        | {
            input: { json: ScopedConfigurationUpdateRequestBody }
            output: ScopedConfigurationUpdateResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: ScopedConfigurationUpdateRequestBody }
            output: InvalidInputExceptionInfo
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/v1/scoped_configuration/delete': {
      $post:
        | {
            input: { json: ScopedConfigurationDeleteRequestBody }
            output: ScopedConfigurationDeleteResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: ScopedConfigurationDeleteRequestBody }
            output: InvalidInputExceptionInfo
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/v1/connector_rollout/list': {
      $post:
        | {
            input: { json: ConnectorRolloutListRequestBody }
            output: ConnectorRolloutListResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: ConnectorRolloutListRequestBody }
            output: InvalidInputExceptionInfo
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/v1/connector_rollout/list_by_actor_definition_id': {
      $post:
        | {
            input: { json: ConnectorRolloutListByActorDefinitionIdRequestBody }
            output: ConnectorRolloutListResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: ConnectorRolloutListByActorDefinitionIdRequestBody }
            output: InvalidInputExceptionInfo
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/v1/connector_rollout/list_all': {
      $post:
        | { input: {}; output: ConnectorRolloutListResponse; outputFormat: 'json'; status: 200 }
        | { input: {}; output: InvalidInputExceptionInfo; outputFormat: 'json'; status: 422 }
    }
  } & {
    '/v1/connector_rollout/get': {
      $post:
        | {
            input: { json: ConnectorRolloutReadRequestBody }
            output: ConnectorRolloutReadResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: ConnectorRolloutReadRequestBody }
            output: NotFoundKnownExceptionInfo
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { json: ConnectorRolloutReadRequestBody }
            output: InvalidInputExceptionInfo
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/v1/connector_rollout/get_actor_sync_info': {
      $post:
        | {
            input: { json: ConnectorRolloutGetActorSyncInfoRequestBody }
            output: ConnectorRolloutActorSyncInfoResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: ConnectorRolloutGetActorSyncInfoRequestBody }
            output: NotFoundKnownExceptionInfo
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { json: ConnectorRolloutGetActorSyncInfoRequestBody }
            output: InvalidInputExceptionInfo
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/v1/connector_rollout/start': {
      $post:
        | {
            input: { json: ConnectorRolloutStartRequestBody }
            output: ConnectorRolloutStartResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: ConnectorRolloutStartRequestBody }
            output: NotFoundKnownExceptionInfo
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { json: ConnectorRolloutStartRequestBody }
            output: InvalidInputExceptionInfo
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/v1/connector_rollout/rollout': {
      $post:
        | {
            input: { json: ConnectorRolloutRequestBody }
            output: ConnectorRolloutResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: ConnectorRolloutRequestBody }
            output: NotFoundKnownExceptionInfo
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { json: ConnectorRolloutRequestBody }
            output: InvalidInputExceptionInfo
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/v1/connector_rollout/update_state': {
      $post:
        | {
            input: { json: ConnectorRolloutUpdateStateRequestBody }
            output: ConnectorRolloutResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: ConnectorRolloutUpdateStateRequestBody }
            output: NotFoundKnownExceptionInfo
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { json: ConnectorRolloutUpdateStateRequestBody }
            output: InvalidInputExceptionInfo
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/v1/connector_rollout/finalize': {
      $post:
        | {
            input: { json: ConnectorRolloutFinalizeRequestBody }
            output: ConnectorRolloutFinalizeResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: ConnectorRolloutFinalizeRequestBody }
            output: NotFoundKnownExceptionInfo
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { json: ConnectorRolloutFinalizeRequestBody }
            output: InvalidInputExceptionInfo
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/v1/connector_rollout/manual_start': {
      $post:
        | {
            input: { json: ConnectorRolloutManualStartRequestBody }
            output: ConnectorRolloutStartResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: ConnectorRolloutManualStartRequestBody }
            output: NotFoundKnownExceptionInfo
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { json: ConnectorRolloutManualStartRequestBody }
            output: InvalidInputExceptionInfo
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/v1/connector_rollout/manual_rollout': {
      $post:
        | {
            input: { json: ConnectorRolloutManualRolloutRequestBody }
            output: ConnectorRolloutManualRolloutResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: ConnectorRolloutManualRolloutRequestBody }
            output: NotFoundKnownExceptionInfo
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { json: ConnectorRolloutManualRolloutRequestBody }
            output: InvalidInputExceptionInfo
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/v1/connector_rollout/manual_finalize': {
      $post:
        | {
            input: { json: ConnectorRolloutManualFinalizeRequestBody }
            output: ConnectorRolloutManualFinalizeResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: ConnectorRolloutManualFinalizeRequestBody }
            output: NotFoundKnownExceptionInfo
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { json: ConnectorRolloutManualFinalizeRequestBody }
            output: InvalidInputExceptionInfo
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/v1/connector_rollout/manual_pause': {
      $post:
        | {
            input: { json: ConnectorRolloutUpdateStateRequestBody }
            output: ConnectorRolloutResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: ConnectorRolloutUpdateStateRequestBody }
            output: NotFoundKnownExceptionInfo
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { json: ConnectorRolloutUpdateStateRequestBody }
            output: InvalidInputExceptionInfo
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/v1/entitlements/is_entitled': {
      $post:
        | {
            input: { json: OrganizationIsEntitledRequestBody }
            output: OrganizationIsEntitledResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: OrganizationIsEntitledRequestBody }
            output: NotFoundKnownExceptionInfo
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { json: OrganizationIsEntitledRequestBody }
            output: InvalidInputExceptionInfo
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/v1/entitlements/get_entitlements': {
      $post:
        | {
            input: { json: GetEntitlementsByOrganizationIdRequestBody }
            output: GetEntitlementsByOrganizationIdResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: GetEntitlementsByOrganizationIdRequestBody }
            output: NotFoundKnownExceptionInfo
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { json: GetEntitlementsByOrganizationIdRequestBody }
            output: InvalidInputExceptionInfo
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/v1/entitlements/list_plans': {
      $post:
        | { input: {}; output: ListAllEntitlementPlansResponse; outputFormat: 'json'; status: 200 }
        | { input: {}; output: NotFoundKnownExceptionInfo; outputFormat: 'json'; status: 404 }
    }
  } & {
    '/v1/entitlements/update_plan': {
      $post:
        | {
            input: { json: UpdateOrganizationEntitlementPlanRequestBody }
            output: UpdateOrganizationEntitlementPlanResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: UpdateOrganizationEntitlementPlanRequestBody }
            output: NotFoundKnownExceptionInfo
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { json: UpdateOrganizationEntitlementPlanRequestBody }
            output: InvalidInputExceptionInfo
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/v1/user_invitations/create': {
      $post: {
        input: { json: UserInvitationCreateRequestBody }
        output: UserInvitationCreateResponse
        outputFormat: 'json'
        status: 201
      }
    }
  } & {
    '/v1/user_invitations/by_code/:inviteCode': {
      $get:
        | {
            input: { param: { inviteCode: string } }
            output: UserInvitationRead
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { inviteCode: string } }
            output: NotFoundKnownExceptionInfo
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/v1/user_invitations/list_pending': {
      $post: {
        input: { json: UserInvitationListRequestBody }
        output: UserInvitationAdminRead[]
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/user_invitations/accept': {
      $post: {
        input: { json: InviteCodeRequestBody }
        output: UserInvitationRead
        outputFormat: 'json'
        status: 201
      }
    }
  } & {
    '/v1/user_invitations/decline': {
      $post: {
        input: { json: InviteCodeRequestBody }
        output: UserInvitationRead
        outputFormat: 'json'
        status: 201
      }
    }
  } & {
    '/v1/user_invitations/cancel': {
      $post: {
        input: { json: UserInvitationCancelRequestBody }
        output: UserInvitationAdminRead
        outputFormat: 'json'
        status: 201
      }
    }
  } & {
    '/v1/tags/list': {
      $post: {
        input: { json: TagListRequestBody }
        output: Tag[]
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/tags/update': {
      $post: {
        input: { json: TagUpdateRequestBody }
        output: Tag
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/tags/delete': {
      $post: {
        input: { json: TagDeleteRequestBody }
        output: Tag
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/tags/create': {
      $post: {
        input: { json: TagCreateRequestBody }
        output: Tag
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/diagnostic_tool/generate_report': {
      $post:
        | {
            input: { json: DiagnosticReportRequestBody }
            output: File
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { json: DiagnosticReportRequestBody }
            output: InvalidInputExceptionInfo
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/v1/signal': {
      $post:
        | { input: { json: SignalInput }; output: {}; outputFormat: string; status: 204 }
        | {
            input: { json: SignalInput }
            output: InvalidInputExceptionInfo
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/v1/catalogs/diff': {
      $post:
        | {
            input: {
              json: {
                current_catalog_id: string
                new_catalog_id: string
                connection_id?: string | undefined
                persist_changes?: boolean | undefined
              }
            }
            output: {
              catalog_diff: CatalogDiff
              schema_change: SchemaChange
              merged_catalog?: AirbyteCatalog | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              json: {
                current_catalog_id: string
                new_catalog_id: string
                connection_id?: string | undefined
                persist_changes?: boolean | undefined
              }
            }
            output: NotFoundKnownExceptionInfo
            outputFormat: 'json'
            status: 404
          }
        | {
            input: {
              json: {
                current_catalog_id: string
                new_catalog_id: string
                connection_id?: string | undefined
                persist_changes?: boolean | undefined
              }
            }
            output: InvalidInputExceptionInfo
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/v1/commands/run/check': {
      $post: {
        input: {
          json: {
            id: string
            workspace_id?: string | undefined
            actor_id?: string | undefined
            actor_definition_id?: string | undefined
            config?: { [x: string]: unknown } | undefined
            job_id?: string | undefined
            attempt_number?: AttemptNumber | undefined
            priority?: string | undefined
            signal_input?: string | undefined
          }
        }
        output: { id: string }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/commands/run/discover': {
      $post: {
        input: {
          json: {
            id: string
            actor_id: string
            jobId?: string | undefined
            attemptNumber?: AttemptNumber | undefined
            priority?: string | undefined
            signal_input?: string | undefined
          }
        }
        output: { id: string }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/commands/run/connect': {
      $post: {
        input: { json: { id: string; workspace_id: string; host: string; port: number } }
        output: { id: string }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/commands/run/replicate': {
      $post: {
        input: {
          json: {
            id: string
            connection_id: string
            job_id: string
            attempt_number: AttemptNumber
            applied_catalog_diff?: CatalogDiff | undefined
            signal_input?: string | undefined
          }
        }
        output: { id: string }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/commands/run/spec': {
      $post: {
        input: {
          json: {
            id: string
            workspace_id: string
            docker_image?: string | undefined
            docker_image_tag: string
            actor_definition_id?: string | undefined
            signal_input?: string | undefined
          }
        }
        output: { id: string }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/commands/output/check': {
      $post: {
        input: { json: { id: string; with_logs?: boolean | undefined } }
        output: {
          id: string
          status?: 'succeeded' | 'failed' | undefined
          connectorConfigurationUpdated?: boolean | undefined
          message?: string | undefined
          failureReason?: FailureReason | undefined
          logs?: JobLogs | undefined
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/commands/output/connect': {
      $post: {
        input: { json: { id: string } }
        output: {
          id: string
          reachable: boolean
          error_code: 'none' | 'dns_failed' | 'connection_refused' | 'timeout' | 'unknown'
          message: string
          resolved_addresses: string[]
          connect_latency_ms: bigint
          failure_reason?: FailureReason | undefined
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/commands/output/discover': {
      $post: {
        input: { json: { id: string; with_logs?: boolean | undefined } }
        output: {
          id: string
          status?: 'succeeded' | 'failed' | undefined
          catalog?: AirbyteCatalog | undefined
          catalogId?: string | undefined
          destinationCatalog?: DestinationCatalog | undefined
          catalogDiff?: CatalogDiff | undefined
          failureReason?: FailureReason | undefined
          logs?: JobLogs | undefined
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/commands/output/replicate': {
      $post: {
        input: { json: { id: string } }
        output: {
          id: string
          attempt_summary?: { [x: string]: unknown } | undefined
          failures?: FailureReason[] | undefined
          catalog?: AirbyteCatalog | undefined
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/commands/output/spec': {
      $post: {
        input: { json: { id: string; with_logs?: boolean | undefined } }
        output: {
          id: string
          status?: 'succeeded' | 'failed' | undefined
          spec?: { [x: string]: unknown } | undefined
          failureReason?: FailureReason | undefined
          logs?: JobLogs | undefined
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/commands/status': {
      $post: {
        input: { json: { id: string } }
        output: {
          id: string
          status?: 'pending' | 'running' | 'completed' | 'cancelled' | undefined
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/commands/get': {
      $post: {
        input: { json: { id: string } }
        output: {
          id: string
          workload_id: string
          command_type: string
          command_input: string
          workspace_id: string
          organization_id: string
          created_at: string
          updated_at: string
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/commands/cancel': {
      $post: {
        input: { json: { id: string } }
        output: { id: string }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/workload_output/write': {
      $post: {
        input: { json: { workloadId: string; output: string } }
        output: {}
        outputFormat: string
        status: 204
      }
    }
  } & {
    '/v1/dataplane_group/create': {
      $post:
        | {
            input: { json: DataplaneGroupCreateRequestBody }
            output: DataplaneGroupRead
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: DataplaneGroupCreateRequestBody }
            output: InvalidInputExceptionInfo
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/v1/dataplane_group/update': {
      $post:
        | {
            input: { json: DataplaneGroupUpdateRequestBody }
            output: DataplaneGroupRead
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: DataplaneGroupUpdateRequestBody }
            output: InvalidInputExceptionInfo
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/v1/dataplane_group/delete': {
      $post:
        | {
            input: { json: DataplaneGroupDeleteRequestBody }
            output: DataplaneGroupRead
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: DataplaneGroupDeleteRequestBody }
            output: InvalidInputExceptionInfo
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/v1/dataplane_group/list': {
      $post:
        | {
            input: { json: DataplaneGroupListRequestBody }
            output: DataplaneGroupListResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: DataplaneGroupListRequestBody }
            output: InvalidInputExceptionInfo
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/v1/data_worker_allocation/list': {
      $post:
        | {
            input: { json: DataWorkerAllocationListRequestBody }
            output: DataWorkerAllocationListResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: DataWorkerAllocationListRequestBody }
            output: KnownExceptionInfo
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { json: DataWorkerAllocationListRequestBody }
            output: InvalidInputExceptionInfo
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/v1/data_worker_allocation/get': {
      $post:
        | {
            input: { json: DataWorkerAllocationGetRequestBody }
            output: DataWorkerAllocationRead
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: DataWorkerAllocationGetRequestBody }
            output: KnownExceptionInfo
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { json: DataWorkerAllocationGetRequestBody }
            output: InvalidInputExceptionInfo
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/v1/data_worker_allocation/reallocate': {
      $post:
        | {
            input: { json: DataWorkerReallocateRequestBody }
            output: DataWorkerAllocationListResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: DataWorkerReallocateRequestBody }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { json: DataWorkerReallocateRequestBody }
            output: KnownExceptionInfo
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { json: DataWorkerReallocateRequestBody }
            output: {}
            outputFormat: string
            status: 409
          }
        | {
            input: { json: DataWorkerReallocateRequestBody }
            output: InvalidInputExceptionInfo
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/v1/data_worker_allocation/add_capacity': {
      $post:
        | {
            input: { json: DataWorkerAddCapacityRequestBody }
            output: DataWorkerAllocationListResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: DataWorkerAddCapacityRequestBody }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { json: DataWorkerAddCapacityRequestBody }
            output: KnownExceptionInfo
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { json: DataWorkerAddCapacityRequestBody }
            output: InvalidInputExceptionInfo
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/v1/data_worker_allocation/remove_capacity': {
      $post:
        | {
            input: { json: DataWorkerRemoveCapacityRequestBody }
            output: DataWorkerAllocationListResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: DataWorkerRemoveCapacityRequestBody }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { json: DataWorkerRemoveCapacityRequestBody }
            output: KnownExceptionInfo
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { json: DataWorkerRemoveCapacityRequestBody }
            output: InvalidInputExceptionInfo
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/v1/dataplanes/create': {
      $post:
        | {
            input: { json: DataplaneCreateRequestBody }
            output: DataplaneCreateResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: DataplaneCreateRequestBody }
            output: InvalidInputExceptionInfo
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/v1/dataplanes/update': {
      $post:
        | {
            input: { json: DataplaneUpdateRequestBody }
            output: DataplaneRead
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: DataplaneUpdateRequestBody }
            output: InvalidInputExceptionInfo
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/v1/dataplanes/delete': {
      $post:
        | {
            input: { json: DataplaneDeleteRequestBody }
            output: DataplaneRead
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: DataplaneDeleteRequestBody }
            output: InvalidInputExceptionInfo
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/v1/dataplanes/list': {
      $post:
        | {
            input: { json: DataplaneListRequestBody }
            output: DataplaneListResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: DataplaneListRequestBody }
            output: InvalidInputExceptionInfo
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/v1/dataplanes/token': {
      $post:
        | {
            input: { header: { 'X-Airbyte-Diagnostics-Dataplane-Id'?: string | undefined } } & {
              json: DataplaneTokenRequestBody
            } & { form: DataplaneTokenRequestBody }
            output: AccessToken
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { header: { 'X-Airbyte-Diagnostics-Dataplane-Id'?: string | undefined } } & {
              json: DataplaneTokenRequestBody
            } & { form: DataplaneTokenRequestBody }
            output: InvalidInputExceptionInfo
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/v1/dataplanes/heartbeat': {
      $post:
        | {
            input: { header: { 'X-Airbyte-Version'?: string | undefined } } & {
              json: DataplaneHeartbeatRequestBody
            }
            output: DataplaneHeartbeatResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { header: { 'X-Airbyte-Version'?: string | undefined } } & {
              json: DataplaneHeartbeatRequestBody
            }
            output: InvalidInputExceptionInfo
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/v1/dataplanes/secret_storages/list': {
      $post:
        | {
            input: { json: DataplaneSecretStoragesRequestBody }
            output: DataplaneSecretStoragesResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: DataplaneSecretStoragesRequestBody }
            output: InvalidInputExceptionInfo
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/v1/dataplanes/health': {
      $post:
        | {
            input: { json: OrganizationIdRequestBody }
            output: DataplaneHealthListResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: OrganizationIdRequestBody }
            output: InvalidInputExceptionInfo
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/v1/dataplanes/initialize': {
      $post:
        | {
            input: { header: { 'X-Airbyte-Version'?: string | undefined } } & {
              json: DataplaneInitRequestBody
            }
            output: DataplaneInitResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { header: { 'X-Airbyte-Version'?: string | undefined } } & {
              json: DataplaneInitRequestBody
            }
            output: InvalidInputExceptionInfo
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/v1/sso_config/get': {
      $post:
        | {
            input: { json: GetSSOConfigRequestBody }
            output: SSOConfigRead
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: GetSSOConfigRequestBody }
            output: InvalidInputExceptionInfo
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/v1/sso_config/create': {
      $post:
        | {
            input: { json: CreateSSOConfigRequestBody }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { json: CreateSSOConfigRequestBody }
            output: InvalidInputExceptionInfo
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/v1/sso_config/delete': {
      $post:
        | {
            input: { json: DeleteSSOConfigRequestBody }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { json: DeleteSSOConfigRequestBody }
            output: InvalidInputExceptionInfo
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/v1/sso_config/update_credentials': {
      $post:
        | {
            input: { json: UpdateSSOCredentialsRequestBody }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { json: UpdateSSOCredentialsRequestBody }
            output: InvalidInputExceptionInfo
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/v1/sso_config/activate': {
      $post:
        | {
            input: { json: ActivateSSOConfigRequestBody }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { json: ActivateSSOConfigRequestBody }
            output: InvalidInputExceptionInfo
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/v1/sso_config/validate_token': {
      $post:
        | {
            input: { json: ValidateSSOTokenRequestBody }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { json: ValidateSSOTokenRequestBody }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { json: ValidateSSOTokenRequestBody }
            output: InvalidInputExceptionInfo
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/v1/scim_config/get': {
      $post:
        | {
            input: { json: OrganizationIdRequestBody }
            output: ScimConfigResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: OrganizationIdRequestBody }
            output: KnownExceptionInfo
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { json: OrganizationIdRequestBody }
            output: InvalidInputExceptionInfo
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/v1/scim_config/enable': {
      $post:
        | {
            input: { json: EnableScimRequestBody }
            output: ScimConfigResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: EnableScimRequestBody }
            output: KnownExceptionInfo
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { json: EnableScimRequestBody }
            output: NotFoundKnownExceptionInfo
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { json: EnableScimRequestBody }
            output: KnownExceptionInfo
            outputFormat: 'json'
            status: 409
          }
        | {
            input: { json: EnableScimRequestBody }
            output: InvalidInputExceptionInfo
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/v1/scim_config/rotate_token': {
      $post:
        | {
            input: { json: OrganizationIdRequestBody }
            output: ScimConfigResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: OrganizationIdRequestBody }
            output: KnownExceptionInfo
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { json: OrganizationIdRequestBody }
            output: NotFoundKnownExceptionInfo
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { json: OrganizationIdRequestBody }
            output: KnownExceptionInfo
            outputFormat: 'json'
            status: 409
          }
        | {
            input: { json: OrganizationIdRequestBody }
            output: InvalidInputExceptionInfo
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/v1/scim_config/disable': {
      $post:
        | {
            input: { json: OrganizationIdRequestBody }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { json: OrganizationIdRequestBody }
            output: KnownExceptionInfo
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { json: OrganizationIdRequestBody }
            output: NotFoundKnownExceptionInfo
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { json: OrganizationIdRequestBody }
            output: InvalidInputExceptionInfo
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/v1/audit_logs/list': {
      $post:
        | {
            input: { json: AuditLogListRequestBody }
            output: AuditLogReadList
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: AuditLogListRequestBody }
            output: KnownExceptionInfo
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { json: AuditLogListRequestBody }
            output: KnownExceptionInfo
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { json: AuditLogListRequestBody }
            output: InvalidInputExceptionInfo
            outputFormat: 'json'
            status: 422
          }
    }
  } & { '/public': { $get: { input: {}; output: {}; outputFormat: string; status: 200 } } } & {
    '/public/v1/health': { $get: { input: {}; output: {}; outputFormat: string; status: 200 } }
  } & {
    '/public/v1/applications': {
      $get:
        | { input: {}; output: ApplicationReadList; outputFormat: 'json'; status: 200 }
        | { input: {}; output: {}; outputFormat: string; status: 403 }
      $post:
        | {
            input: { json: ApplicationCreate }
            output: ApplicationRead
            outputFormat: 'json'
            status: 200
          }
        | { input: { json: ApplicationCreate }; output: {}; outputFormat: string; status: 400 }
        | { input: { json: ApplicationCreate }; output: {}; outputFormat: string; status: 403 }
    }
  } & {
    '/public/v1/applications/:applicationId': {
      $get:
        | {
            input: { param: { applicationId: string } }
            output: ApplicationRead
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { applicationId: string } }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { applicationId: string } }
            output: {}
            outputFormat: string
            status: 404
          }
      $delete:
        | {
            input: { param: { applicationId: string } }
            output: ApplicationRead
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { applicationId: string } }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { applicationId: string } }
            output: {}
            outputFormat: string
            status: 404
          }
    }
  } & {
    '/public/v1/applications/token': {
      $post:
        | {
            input: { json: ApplicationTokenRequestWithGrant } & {
              form: ApplicationTokenRequestWithGrant
            }
            output: PublicAccessTokenResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: ApplicationTokenRequestWithGrant } & {
              form: ApplicationTokenRequestWithGrant
            }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { json: ApplicationTokenRequestWithGrant } & {
              form: ApplicationTokenRequestWithGrant
            }
            output: {}
            outputFormat: string
            status: 403
          }
    }
  } & {
    '/public/v1/jobs': {
      $get:
        | {
            input: {
              query: {
                connectionId?: string | undefined
                limit?: number | undefined
                offset?: number | undefined
                jobType?: JobTypeEnum | undefined
                workspaceIds?: string[] | undefined
                status?: JobStatusEnum | undefined
                createdAtStart?: string | undefined
                createdAtEnd?: string | undefined
                updatedAtStart?: string | undefined
                updatedAtEnd?: string | undefined
                orderBy?: string | undefined
              }
            }
            output: JobsResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                connectionId?: string | undefined
                limit?: number | undefined
                offset?: number | undefined
                jobType?: JobTypeEnum | undefined
                workspaceIds?: string[] | undefined
                status?: JobStatusEnum | undefined
                createdAtStart?: string | undefined
                createdAtEnd?: string | undefined
                updatedAtStart?: string | undefined
                updatedAtEnd?: string | undefined
                orderBy?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 403
          }
      $post:
        | {
            input: { json: JobCreateRequest }
            output: JobResponse
            outputFormat: 'json'
            status: 200
          }
        | { input: { json: JobCreateRequest }; output: {}; outputFormat: string; status: 400 }
        | { input: { json: JobCreateRequest }; output: {}; outputFormat: string; status: 403 }
    }
  } & {
    '/public/v1/jobs/:jobId': {
      $get:
        | {
            input: { param: { jobId: bigint } }
            output: JobResponse
            outputFormat: 'json'
            status: 200
          }
        | { input: { param: { jobId: bigint } }; output: {}; outputFormat: string; status: 403 }
        | { input: { param: { jobId: bigint } }; output: {}; outputFormat: string; status: 404 }
      $delete:
        | {
            input: { param: { jobId: bigint } }
            output: JobResponse
            outputFormat: 'json'
            status: 200
          }
        | { input: { param: { jobId: bigint } }; output: {}; outputFormat: string; status: 403 }
        | { input: { param: { jobId: bigint } }; output: {}; outputFormat: string; status: 404 }
    }
  } & {
    '/public/v1/regions': {
      $get:
        | {
            input: { query: { organizationId: string } }
            output: RegionsResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { organizationId: string } }
            output: {}
            outputFormat: string
            status: 403
          }
      $post:
        | {
            input: { json: RegionCreateRequest }
            output: RegionResponse
            outputFormat: 'json'
            status: 200
          }
        | { input: { json: RegionCreateRequest }; output: {}; outputFormat: string; status: 400 }
        | { input: { json: RegionCreateRequest }; output: {}; outputFormat: string; status: 403 }
    }
  } & {
    '/public/v1/regions/:regionId': {
      $get:
        | {
            input: { param: { regionId: string } }
            output: RegionResponse
            outputFormat: 'json'
            status: 200
          }
        | { input: { param: { regionId: string } }; output: {}; outputFormat: string; status: 403 }
        | { input: { param: { regionId: string } }; output: {}; outputFormat: string; status: 404 }
      $patch:
        | {
            input: { param: { regionId: string } } & { json: RegionPatchRequest }
            output: RegionResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { regionId: string } } & { json: RegionPatchRequest }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { regionId: string } } & { json: RegionPatchRequest }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { regionId: string } } & { json: RegionPatchRequest }
            output: {}
            outputFormat: string
            status: 404
          }
      $delete:
        | {
            input: { param: { regionId: string } }
            output: RegionResponse
            outputFormat: 'json'
            status: 200
          }
        | { input: { param: { regionId: string } }; output: {}; outputFormat: string; status: 403 }
        | { input: { param: { regionId: string } }; output: {}; outputFormat: string; status: 404 }
    }
  } & {
    '/public/v1/dataplanes': {
      $get:
        | {
            input: { query: { regionIds?: string[] | undefined } }
            output: DataplanesResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { regionIds?: string[] | undefined } }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { query: { regionIds?: string[] | undefined } }
            output: {}
            outputFormat: string
            status: 404
          }
      $post:
        | {
            input: { json: DataplaneCreateRequest }
            output: DataplaneCreateResponseBody
            outputFormat: 'json'
            status: 200
          }
        | { input: { json: DataplaneCreateRequest }; output: {}; outputFormat: string; status: 400 }
        | { input: { json: DataplaneCreateRequest }; output: {}; outputFormat: string; status: 403 }
        | { input: { json: DataplaneCreateRequest }; output: {}; outputFormat: string; status: 404 }
    }
  } & {
    '/public/v1/dataplanes/:dataplaneId': {
      $get:
        | {
            input: { param: { dataplaneId: string } }
            output: DataplaneResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { dataplaneId: string } }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { dataplaneId: string } }
            output: {}
            outputFormat: string
            status: 404
          }
      $patch:
        | {
            input: { param: { dataplaneId: string } } & { json: DataplanePatchRequest }
            output: DataplaneResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { dataplaneId: string } } & { json: DataplanePatchRequest }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { dataplaneId: string } } & { json: DataplanePatchRequest }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { dataplaneId: string } } & { json: DataplanePatchRequest }
            output: {}
            outputFormat: string
            status: 404
          }
      $delete:
        | {
            input: { param: { dataplaneId: string } }
            output: DataplaneResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { dataplaneId: string } }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { dataplaneId: string } }
            output: {}
            outputFormat: string
            status: 404
          }
    }
  } & {
    '/public/v1/connector_definitions': {
      $get:
        | {
            input: { query: { type: ConnectorType; workspaceId?: string | undefined } }
            output: ConnectorDefinitionsResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { type: ConnectorType; workspaceId?: string | undefined } }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { query: { type: ConnectorType; workspaceId?: string | undefined } }
            output: {}
            outputFormat: string
            status: 404
          }
    }
  } & {
    '/public/v1/workspaces/:workspaceId/definitions/declarative_sources': {
      $get:
        | {
            input: { param: { workspaceId: string } }
            output: DeclarativeSourceDefinitionsResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { workspaceId: string } }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { workspaceId: string } }
            output: {}
            outputFormat: string
            status: 404
          }
      $post: {
        input: { param: { workspaceId: string } } & {
          json: CreateDeclarativeSourceDefinitionRequest
        }
        output: DeclarativeSourceDefinitionResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/public/v1/workspaces/:workspaceId/definitions/declarative_sources/:definitionId': {
      $get:
        | {
            input: { param: { workspaceId: string; definitionId: string } }
            output: DeclarativeSourceDefinitionResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { workspaceId: string; definitionId: string } }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { workspaceId: string; definitionId: string } }
            output: {}
            outputFormat: string
            status: 404
          }
      $put:
        | {
            input: { param: { workspaceId: string; definitionId: string } } & {
              json: UpdateDeclarativeSourceDefinitionRequest
            }
            output: DeclarativeSourceDefinitionResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { workspaceId: string; definitionId: string } } & {
              json: UpdateDeclarativeSourceDefinitionRequest
            }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { workspaceId: string; definitionId: string } } & {
              json: UpdateDeclarativeSourceDefinitionRequest
            }
            output: {}
            outputFormat: string
            status: 404
          }
      $delete:
        | {
            input: { param: { workspaceId: string; definitionId: string } }
            output: DeclarativeSourceDefinitionResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { workspaceId: string; definitionId: string } }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { workspaceId: string; definitionId: string } }
            output: {}
            outputFormat: string
            status: 404
          }
    }
  } & {
    '/public/v1/workspaces/:workspaceId/definitions/sources': {
      $get:
        | {
            input: { param: { workspaceId: string } }
            output: DefinitionsResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { workspaceId: string } }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { workspaceId: string } }
            output: {}
            outputFormat: string
            status: 404
          }
      $post: {
        input: { param: { workspaceId: string } } & { json: CreateDefinitionRequest }
        output: DefinitionResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/public/v1/workspaces/:workspaceId/definitions/sources/:definitionId': {
      $get:
        | {
            input: { param: { workspaceId: string; definitionId: string } }
            output: DefinitionResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { workspaceId: string; definitionId: string } }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { workspaceId: string; definitionId: string } }
            output: {}
            outputFormat: string
            status: 404
          }
      $put:
        | {
            input: { param: { workspaceId: string; definitionId: string } } & {
              json: UpdateDefinitionRequest
            }
            output: DefinitionResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { workspaceId: string; definitionId: string } } & {
              json: UpdateDefinitionRequest
            }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { workspaceId: string; definitionId: string } } & {
              json: UpdateDefinitionRequest
            }
            output: {}
            outputFormat: string
            status: 404
          }
      $delete:
        | {
            input: { param: { workspaceId: string; definitionId: string } }
            output: DefinitionResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { workspaceId: string; definitionId: string } }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { workspaceId: string; definitionId: string } }
            output: {}
            outputFormat: string
            status: 404
          }
    }
  } & {
    '/public/v1/workspaces/:workspaceId/definitions/destinations': {
      $get:
        | {
            input: { param: { workspaceId: string } }
            output: DefinitionsResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { workspaceId: string } }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { workspaceId: string } }
            output: {}
            outputFormat: string
            status: 404
          }
      $post: {
        input: { param: { workspaceId: string } } & { json: CreateDefinitionRequest }
        output: DefinitionResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/public/v1/workspaces/:workspaceId/definitions/destinations/:definitionId': {
      $get:
        | {
            input: { param: { workspaceId: string; definitionId: string } }
            output: DefinitionResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { workspaceId: string; definitionId: string } }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { workspaceId: string; definitionId: string } }
            output: {}
            outputFormat: string
            status: 404
          }
      $put:
        | {
            input: { param: { workspaceId: string; definitionId: string } } & {
              json: UpdateDefinitionRequest
            }
            output: DefinitionResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { workspaceId: string; definitionId: string } } & {
              json: UpdateDefinitionRequest
            }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { workspaceId: string; definitionId: string } } & {
              json: UpdateDefinitionRequest
            }
            output: {}
            outputFormat: string
            status: 404
          }
      $delete:
        | {
            input: { param: { workspaceId: string; definitionId: string } }
            output: DefinitionResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { workspaceId: string; definitionId: string } }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { workspaceId: string; definitionId: string } }
            output: {}
            outputFormat: string
            status: 404
          }
    }
  } & {
    '/public/v1/sources': {
      $get:
        | {
            input: {
              query: {
                workspaceIds?: string[] | undefined
                includeDeleted?: boolean | undefined
                limit?: number | undefined
                offset?: number | undefined
              }
            }
            output: SourcesResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                workspaceIds?: string[] | undefined
                includeDeleted?: boolean | undefined
                limit?: number | undefined
                offset?: number | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: {
              query: {
                workspaceIds?: string[] | undefined
                includeDeleted?: boolean | undefined
                limit?: number | undefined
                offset?: number | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 404
          }
      $post:
        | {
            input: { json: SourceCreateRequest }
            output: SourceResponse
            outputFormat: 'json'
            status: 200
          }
        | { input: { json: SourceCreateRequest }; output: {}; outputFormat: string; status: 400 }
        | { input: { json: SourceCreateRequest }; output: {}; outputFormat: string; status: 403 }
    }
  } & {
    '/public/v1/sources/:sourceId': {
      $get:
        | {
            input: { param: { sourceId: string } } & {
              query: { includeSecretCoordinates?: boolean | undefined }
            }
            output: SourceResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { sourceId: string } } & {
              query: { includeSecretCoordinates?: boolean | undefined }
            }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { sourceId: string } } & {
              query: { includeSecretCoordinates?: boolean | undefined }
            }
            output: {}
            outputFormat: string
            status: 404
          }
      $patch:
        | {
            input: { param: { sourceId: string } } & { json: SourcePatchRequest }
            output: SourceResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { sourceId: string } } & { json: SourcePatchRequest }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { sourceId: string } } & { json: SourcePatchRequest }
            output: {}
            outputFormat: string
            status: 404
          }
      $put:
        | {
            input: { param: { sourceId: string } } & { json: SourcePutRequest }
            output: SourceResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { sourceId: string } } & { json: SourcePutRequest }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { sourceId: string } } & { json: SourcePutRequest }
            output: {}
            outputFormat: string
            status: 404
          }
      $delete:
        | { input: { param: { sourceId: string } }; output: {}; outputFormat: string; status: 204 }
        | { input: { param: { sourceId: string } }; output: {}; outputFormat: string; status: 403 }
        | { input: { param: { sourceId: string } }; output: {}; outputFormat: string; status: 404 }
    }
  } & {
    '/public/v1/destinations': {
      $get:
        | {
            input: {
              query: {
                workspaceIds?: string[] | undefined
                includeDeleted?: boolean | undefined
                limit?: number | undefined
                offset?: number | undefined
              }
            }
            output: DestinationsResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                workspaceIds?: string[] | undefined
                includeDeleted?: boolean | undefined
                limit?: number | undefined
                offset?: number | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: {
              query: {
                workspaceIds?: string[] | undefined
                includeDeleted?: boolean | undefined
                limit?: number | undefined
                offset?: number | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 404
          }
      $post:
        | {
            input: { json: DestinationCreateRequest }
            output: DestinationResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: DestinationCreateRequest }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { json: DestinationCreateRequest }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { json: DestinationCreateRequest }
            output: {}
            outputFormat: string
            status: 404
          }
    }
  } & {
    '/public/v1/destinations/:destinationId': {
      $get:
        | {
            input: { param: { destinationId: string } } & {
              query: { includeSecretCoordinates?: boolean | undefined }
            }
            output: DestinationResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { destinationId: string } } & {
              query: { includeSecretCoordinates?: boolean | undefined }
            }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { destinationId: string } } & {
              query: { includeSecretCoordinates?: boolean | undefined }
            }
            output: {}
            outputFormat: string
            status: 404
          }
      $delete:
        | {
            input: { param: { destinationId: string } }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { destinationId: string } }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { destinationId: string } }
            output: {}
            outputFormat: string
            status: 404
          }
      $patch:
        | {
            input: { param: { destinationId: string } } & { json: DestinationPatchRequest }
            output: DestinationResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { destinationId: string } } & { json: DestinationPatchRequest }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { destinationId: string } } & { json: DestinationPatchRequest }
            output: {}
            outputFormat: string
            status: 404
          }
      $put:
        | {
            input: { param: { destinationId: string } } & { json: DestinationPutRequest }
            output: DestinationResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { destinationId: string } } & { json: DestinationPutRequest }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { destinationId: string } } & { json: DestinationPutRequest }
            output: {}
            outputFormat: string
            status: 404
          }
    }
  } & {
    '/public/v1/oauth/callback': {
      $get: {
        input: { query: { queryParams?: { [x: string]: string } | undefined } }
        output: {}
        outputFormat: string
        status: 302
      }
    }
  } & {
    '/public/v1/sources/initiateOAuth': {
      $post:
        | { input: { json: InitiateOauthRequest }; output: {}; outputFormat: string; status: 200 }
        | { input: { json: InitiateOauthRequest }; output: {}; outputFormat: string; status: 400 }
        | { input: { json: InitiateOauthRequest }; output: {}; outputFormat: string; status: 403 }
    }
  } & {
    '/public/v1/connections': {
      $post:
        | {
            input: { json: ConnectionCreateRequest }
            output: ConnectionResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: ConnectionCreateRequest }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { json: ConnectionCreateRequest }
            output: {}
            outputFormat: string
            status: 403
          }
      $get:
        | {
            input: {
              query: {
                workspaceIds?: string[] | undefined
                tagIds?: string[] | undefined
                includeDeleted?: boolean | undefined
                limit?: number | undefined
                offset?: number | undefined
              }
            }
            output: ConnectionsResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                workspaceIds?: string[] | undefined
                tagIds?: string[] | undefined
                includeDeleted?: boolean | undefined
                limit?: number | undefined
                offset?: number | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: {
              query: {
                workspaceIds?: string[] | undefined
                tagIds?: string[] | undefined
                includeDeleted?: boolean | undefined
                limit?: number | undefined
                offset?: number | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 404
          }
    }
  } & {
    '/public/v1/connections/:connectionId': {
      $get:
        | {
            input: { param: { connectionId: string } }
            output: ConnectionResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { connectionId: string } }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { connectionId: string } }
            output: {}
            outputFormat: string
            status: 404
          }
      $patch:
        | {
            input: { param: { connectionId: string } } & { json: ConnectionPatchRequest }
            output: ConnectionResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { connectionId: string } } & { json: ConnectionPatchRequest }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { connectionId: string } } & { json: ConnectionPatchRequest }
            output: {}
            outputFormat: string
            status: 404
          }
      $delete:
        | {
            input: { param: { connectionId: string } }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { connectionId: string } }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { connectionId: string } }
            output: {}
            outputFormat: string
            status: 404
          }
    }
  } & {
    '/public/v1/streams': {
      $get:
        | {
            input: {
              query: {
                sourceId: string
                destinationId?: string | undefined
                ignoreCache?: boolean | undefined
              }
            }
            output: StreamPropertiesResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                sourceId: string
                destinationId?: string | undefined
                ignoreCache?: boolean | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: {
              query: {
                sourceId: string
                destinationId?: string | undefined
                ignoreCache?: boolean | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: {
              query: {
                sourceId: string
                destinationId?: string | undefined
                ignoreCache?: boolean | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 404
          }
    }
  } & {
    '/public/v1/workspaces': {
      $get:
        | {
            input: {
              query: {
                workspaceIds?: string[] | undefined
                includeDeleted?: boolean | undefined
                limit?: number | undefined
                offset?: number | undefined
              }
            }
            output: WorkspacesResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                workspaceIds?: string[] | undefined
                includeDeleted?: boolean | undefined
                limit?: number | undefined
                offset?: number | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: {
              query: {
                workspaceIds?: string[] | undefined
                includeDeleted?: boolean | undefined
                limit?: number | undefined
                offset?: number | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 404
          }
      $post:
        | {
            input: { json: WorkspaceCreateRequest }
            output: WorkspaceResponse
            outputFormat: 'json'
            status: 200
          }
        | { input: { json: WorkspaceCreateRequest }; output: {}; outputFormat: string; status: 400 }
        | { input: { json: WorkspaceCreateRequest }; output: {}; outputFormat: string; status: 403 }
    }
  } & {
    '/public/v1/workspaces/:workspaceId': {
      $get:
        | {
            input: { param: { workspaceId: string } }
            output: WorkspaceResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { workspaceId: string } }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { workspaceId: string } }
            output: {}
            outputFormat: string
            status: 404
          }
      $patch:
        | {
            input: { param: { workspaceId: string } } & { json: WorkspaceUpdateRequest }
            output: WorkspaceResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { workspaceId: string } } & { json: WorkspaceUpdateRequest }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { workspaceId: string } } & { json: WorkspaceUpdateRequest }
            output: {}
            outputFormat: string
            status: 403
          }
      $delete:
        | {
            input: { param: { workspaceId: string } }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { workspaceId: string } }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { workspaceId: string } }
            output: {}
            outputFormat: string
            status: 404
          }
    }
  } & {
    '/public/v1/workspaces/:workspaceId/oauthCredentials': {
      $put:
        | {
            input: { param: { workspaceId: string } } & { json: WorkspaceOAuthCredentialsRequest }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { param: { workspaceId: string } } & { json: WorkspaceOAuthCredentialsRequest }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { workspaceId: string } } & { json: WorkspaceOAuthCredentialsRequest }
            output: {}
            outputFormat: string
            status: 403
          }
    }
  } & {
    '/public/v1/workspaces/:workspaceId/oauthCredentials/:actorType/:name': {
      $delete:
        | {
            input: { param: { workspaceId: string; actorType: ActorTypeEnum; name: string } }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { workspaceId: string; actorType: ActorTypeEnum; name: string } }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { workspaceId: string; actorType: ActorTypeEnum; name: string } }
            output: {}
            outputFormat: string
            status: 403
          }
    }
  } & {
    '/public/v1/permissions/:permissionId': {
      $get:
        | {
            input: { param: { permissionId: string } }
            output: PermissionResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { permissionId: string } }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { permissionId: string } }
            output: {}
            outputFormat: string
            status: 404
          }
        | {
            input: { param: { permissionId: string } }
            output: {}
            outputFormat: string
            status: 422
          }
      $patch:
        | {
            input: { param: { permissionId: string } } & { json: PermissionUpdateRequest }
            output: PermissionResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { permissionId: string } } & { json: PermissionUpdateRequest }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { permissionId: string } } & { json: PermissionUpdateRequest }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { permissionId: string } } & { json: PermissionUpdateRequest }
            output: {}
            outputFormat: string
            status: 404
          }
        | {
            input: { param: { permissionId: string } } & { json: PermissionUpdateRequest }
            output: {}
            outputFormat: string
            status: 422
          }
      $delete:
        | {
            input: { param: { permissionId: string } }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { permissionId: string } }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { permissionId: string } }
            output: {}
            outputFormat: string
            status: 404
          }
        | {
            input: { param: { permissionId: string } }
            output: {}
            outputFormat: string
            status: 422
          }
    }
  } & {
    '/public/v1/permissions': {
      $get:
        | {
            input: { query: { userId?: string | undefined; organizationId?: string | undefined } }
            output: PermissionsResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { userId?: string | undefined; organizationId?: string | undefined } }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { query: { userId?: string | undefined; organizationId?: string | undefined } }
            output: {}
            outputFormat: string
            status: 404
          }
      $post:
        | {
            input: { json: PermissionCreateRequest }
            output: PermissionResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: PermissionCreateRequest }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { json: PermissionCreateRequest }
            output: {}
            outputFormat: string
            status: 403
          }
    }
  } & {
    '/public/v1/organizations': {
      $get:
        | { input: {}; output: OrganizationsResponse; outputFormat: 'json'; status: 200 }
        | { input: {}; output: {}; outputFormat: string; status: 403 }
        | { input: {}; output: {}; outputFormat: string; status: 404 }
    }
  } & {
    '/public/v1/organizations/:organizationId/oauthCredentials': {
      $put:
        | {
            input: { param: { organizationId: string } } & {
              json: OrganizationOAuthCredentialsRequest
            }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { param: { organizationId: string } } & {
              json: OrganizationOAuthCredentialsRequest
            }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { organizationId: string } } & {
              json: OrganizationOAuthCredentialsRequest
            }
            output: {}
            outputFormat: string
            status: 403
          }
    }
  } & {
    '/public/v1/organizations/:organizationId/oauthCredentials/:actorType/:name': {
      $delete:
        | {
            input: { param: { organizationId: string; actorType: ActorTypeEnum; name: string } }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { organizationId: string; actorType: ActorTypeEnum; name: string } }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { organizationId: string; actorType: ActorTypeEnum; name: string } }
            output: {}
            outputFormat: string
            status: 403
          }
    }
  } & {
    '/public/v1/users': {
      $get:
        | {
            input: {
              query: {
                organizationId: string
                ids?: string[] | undefined
                emails?: string[] | undefined
              }
            }
            output: UsersResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                organizationId: string
                ids?: string[] | undefined
                emails?: string[] | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: {
              query: {
                organizationId: string
                ids?: string[] | undefined
                emails?: string[] | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 404
          }
    }
  } & {
    '/public/v1/groups': {
      $get:
        | {
            input: {
              query: {
                organizationId?: string | undefined
                limit?: number | undefined
                offset?: number | undefined
              }
            }
            output: GroupsResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                organizationId?: string | undefined
                limit?: number | undefined
                offset?: number | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: {
              query: {
                organizationId?: string | undefined
                limit?: number | undefined
                offset?: number | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 404
          }
      $post:
        | {
            input: { json: GroupCreateRequest }
            output: GroupResponse
            outputFormat: 'json'
            status: 200
          }
        | { input: { json: GroupCreateRequest }; output: {}; outputFormat: string; status: 400 }
        | { input: { json: GroupCreateRequest }; output: {}; outputFormat: string; status: 403 }
        | { input: { json: GroupCreateRequest }; output: {}; outputFormat: string; status: 409 }
    }
  } & {
    '/public/v1/groups/:groupId': {
      $get:
        | {
            input: { param: { groupId: string } }
            output: GroupResponse
            outputFormat: 'json'
            status: 200
          }
        | { input: { param: { groupId: string } }; output: {}; outputFormat: string; status: 403 }
        | { input: { param: { groupId: string } }; output: {}; outputFormat: string; status: 404 }
      $patch:
        | {
            input: { param: { groupId: string } } & { json: GroupUpdateRequest }
            output: GroupResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { groupId: string } } & { json: GroupUpdateRequest }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { groupId: string } } & { json: GroupUpdateRequest }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { groupId: string } } & { json: GroupUpdateRequest }
            output: {}
            outputFormat: string
            status: 404
          }
        | {
            input: { param: { groupId: string } } & { json: GroupUpdateRequest }
            output: {}
            outputFormat: string
            status: 409
          }
      $delete:
        | { input: { param: { groupId: string } }; output: {}; outputFormat: string; status: 204 }
        | { input: { param: { groupId: string } }; output: {}; outputFormat: string; status: 403 }
        | { input: { param: { groupId: string } }; output: {}; outputFormat: string; status: 404 }
        | { input: { param: { groupId: string } }; output: {}; outputFormat: string; status: 409 }
    }
  } & {
    '/public/v1/groups/:groupId/members': {
      $get:
        | {
            input: { param: { groupId: string } } & {
              query: { limit?: number | undefined; offset?: number | undefined }
            }
            output: GroupMembersResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { groupId: string } } & {
              query: { limit?: number | undefined; offset?: number | undefined }
            }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { groupId: string } } & {
              query: { limit?: number | undefined; offset?: number | undefined }
            }
            output: {}
            outputFormat: string
            status: 404
          }
      $post:
        | {
            input: { param: { groupId: string } } & { json: GroupMemberAddRequest }
            output: GroupMemberResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { groupId: string } } & { json: GroupMemberAddRequest }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { groupId: string } } & { json: GroupMemberAddRequest }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { groupId: string } } & { json: GroupMemberAddRequest }
            output: {}
            outputFormat: string
            status: 404
          }
        | {
            input: { param: { groupId: string } } & { json: GroupMemberAddRequest }
            output: {}
            outputFormat: string
            status: 409
          }
    }
  } & {
    '/public/v1/groups/:groupId/members/:userId': {
      $delete:
        | {
            input: { param: { groupId: string; userId: string } }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { groupId: string; userId: string } }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { groupId: string; userId: string } }
            output: {}
            outputFormat: string
            status: 404
          }
        | {
            input: { param: { groupId: string; userId: string } }
            output: {}
            outputFormat: string
            status: 409
          }
    }
  } & {
    '/public/v1/groups/:groupId/permissions': {
      $get:
        | {
            input: { param: { groupId: string } }
            output: GroupPermissionsResponse
            outputFormat: 'json'
            status: 200
          }
        | { input: { param: { groupId: string } }; output: {}; outputFormat: string; status: 403 }
        | { input: { param: { groupId: string } }; output: {}; outputFormat: string; status: 404 }
      $post:
        | {
            input: { param: { groupId: string } } & { json: GroupPermissionCreateRequest }
            output: GroupPermissionResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { groupId: string } } & { json: GroupPermissionCreateRequest }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { groupId: string } } & { json: GroupPermissionCreateRequest }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { groupId: string } } & { json: GroupPermissionCreateRequest }
            output: {}
            outputFormat: string
            status: 404
          }
        | {
            input: { param: { groupId: string } } & { json: GroupPermissionCreateRequest }
            output: {}
            outputFormat: string
            status: 409
          }
    }
  } & {
    '/public/v1/groups/:groupId/permissions/:permissionId': {
      $delete:
        | {
            input: { param: { groupId: string; permissionId: string } }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { groupId: string; permissionId: string } }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { groupId: string; permissionId: string } }
            output: {}
            outputFormat: string
            status: 404
          }
    }
  } & {
    '/public/v1/tags': {
      $get:
        | {
            input: { query: { workspaceIds?: string[] | undefined } }
            output: TagsResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { workspaceIds?: string[] | undefined } }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { query: { workspaceIds?: string[] | undefined } }
            output: {}
            outputFormat: string
            status: 404
          }
      $post:
        | {
            input: { json: TagCreateRequest }
            output: TagResponse
            outputFormat: 'json'
            status: 200
          }
        | { input: { json: TagCreateRequest }; output: {}; outputFormat: string; status: 400 }
        | { input: { json: TagCreateRequest }; output: {}; outputFormat: string; status: 403 }
        | { input: { json: TagCreateRequest }; output: {}; outputFormat: string; status: 409 }
    }
  } & {
    '/public/v1/tags/:tagId': {
      $get:
        | {
            input: { param: { tagId: TagId } }
            output: TagResponse
            outputFormat: 'json'
            status: 200
          }
        | { input: { param: { tagId: TagId } }; output: {}; outputFormat: string; status: 403 }
        | { input: { param: { tagId: TagId } }; output: {}; outputFormat: string; status: 404 }
      $delete:
        | { input: { param: { tagId: TagId } }; output: {}; outputFormat: string; status: 204 }
        | { input: { param: { tagId: TagId } }; output: {}; outputFormat: string; status: 403 }
        | { input: { param: { tagId: TagId } }; output: {}; outputFormat: string; status: 404 }
      $patch:
        | {
            input: { param: { tagId: TagId } } & { json: TagPatchRequest }
            output: TagResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { tagId: TagId } } & { json: TagPatchRequest }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { tagId: TagId } } & { json: TagPatchRequest }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { tagId: TagId } } & { json: TagPatchRequest }
            output: {}
            outputFormat: string
            status: 404
          }
    }
  } & {
    '/public/v1/embedded/widget_token': {
      $post: {
        input: { json: EmbeddedWidgetRequest }
        output: EmbeddedWidgetResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/public/v1/embedded/scoped_token': {
      $post: {
        input: { json: EmbeddedScopedTokenRequest }
        output: EmbeddedScopedTokenResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/public/v1/embedded/organizations': {
      $get:
        | { input: {}; output: EmbeddedOrganizationsList; outputFormat: 'json'; status: 200 }
        | { input: {}; output: KnownExceptionInfo; outputFormat: 'json'; status: 403 }
    }
  } & {
    '/v1/service_accounts/token': {
      $post:
        | {
            input: { json: ServiceAccountTokenRequestBody } & {
              form: ServiceAccountTokenRequestBody
            }
            output: AccessToken
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: ServiceAccountTokenRequestBody } & {
              form: ServiceAccountTokenRequestBody
            }
            output: InvalidInputExceptionInfo
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/v1/domain_verifications/create': {
      $post:
        | {
            input: { json: DomainVerificationCreateRequestBody }
            output: DomainVerificationResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: DomainVerificationCreateRequestBody }
            output: InvalidInputExceptionInfo
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { json: DomainVerificationCreateRequestBody }
            output: KnownExceptionInfo
            outputFormat: 'json'
            status: 403
          }
    }
  } & {
    '/v1/domain_verifications/list': {
      $post:
        | {
            input: { json: OrganizationIdRequestBody }
            output: DomainVerificationListResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: OrganizationIdRequestBody }
            output: KnownExceptionInfo
            outputFormat: 'json'
            status: 403
          }
    }
  } & {
    '/v1/domain_verifications/delete': {
      $post:
        | {
            input: { json: DomainVerificationIdRequestBody }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { json: DomainVerificationIdRequestBody }
            output: NotFoundKnownExceptionInfo
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { json: DomainVerificationIdRequestBody }
            output: InvalidInputExceptionInfo
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/v1/domain_verifications/reset': {
      $post:
        | {
            input: { json: DomainVerificationIdRequestBody }
            output: DomainVerificationResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: DomainVerificationIdRequestBody }
            output: NotFoundKnownExceptionInfo
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { json: DomainVerificationIdRequestBody }
            output: InvalidInputExceptionInfo
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/v1/airbyte_releases/create': {
      $post:
        | {
            input: { json: AirbyteReleaseCreateRequestBody }
            output: AirbyteReleaseRead
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: AirbyteReleaseCreateRequestBody }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { json: AirbyteReleaseCreateRequestBody }
            output: KnownExceptionInfo
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { json: AirbyteReleaseCreateRequestBody }
            output: {}
            outputFormat: string
            status: 409
          }
        | {
            input: { json: AirbyteReleaseCreateRequestBody }
            output: {}
            outputFormat: string
            status: 501
          }
    }
  } & {
    '/v1/private_link/create': {
      $post:
        | {
            input: { json: PrivateLinkCreateRequestBody }
            output: PrivateLinkRead
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: PrivateLinkCreateRequestBody }
            output: NotFoundKnownExceptionInfo
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/v1/private_link/list': {
      $post:
        | {
            input: { json: PrivateLinkListRequestBody }
            output: PrivateLinkReadList
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: PrivateLinkListRequestBody }
            output: NotFoundKnownExceptionInfo
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/v1/private_link/delete': {
      $post:
        | {
            input: { json: PrivateLinkIdRequestBody }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { json: PrivateLinkIdRequestBody }
            output: NotFoundKnownExceptionInfo
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/v1/private_link/get': {
      $post:
        | {
            input: { json: PrivateLinkInternalIdRequestBody }
            output: PrivateLinkRead
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: PrivateLinkInternalIdRequestBody }
            output: NotFoundKnownExceptionInfo
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/v1/private_link/update': {
      $post:
        | {
            input: { json: PrivateLinkUpdateRequestBody }
            output: PrivateLinkRead
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: PrivateLinkUpdateRequestBody }
            output: NotFoundKnownExceptionInfo
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { json: PrivateLinkUpdateRequestBody }
            output: {}
            outputFormat: string
            status: 409
          }
    }
  } & {
    '/v1/private_link/list_by_status': {
      $post: {
        input: { json: PrivateLinkListByStatusRequestBody }
        output: PrivateLinkReadList
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/organizations/:organizationId/tool_calls/usage': {
      $get:
        | {
            input: { param: { organizationId: string } }
            output: FusionUsageRead
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { organizationId: string } }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { organizationId: string } }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { organizationId: string } }
            output: {}
            outputFormat: string
            status: 409
          }
        | {
            input: { param: { organizationId: string } }
            output: {}
            outputFormat: string
            status: 502
          }
        | {
            input: { param: { organizationId: string } }
            output: {}
            outputFormat: string
            status: 503
          }
        | {
            input: { param: { organizationId: string } }
            output: {}
            outputFormat: string
            status: 504
          }
    }
  },
  '/'
>
export default routes
