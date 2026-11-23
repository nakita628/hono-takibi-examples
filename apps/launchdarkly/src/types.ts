type Link = { href?: string | undefined; type?: string | undefined }
type RootResponse = { links: { [x: string]: Link } }
type RateLimitedErrorRep = { code: string; message: string }
type ObjectId = string
type MemberSummary = {
  _links: { [x: string]: Link }
  _id: string
  firstName?: string | undefined
  lastName?: string | undefined
  role: string
  email: string
}
type ActionIdentifier = string
type ActionSpecifier = string
type AccessDeniedReason = {
  resources?: string[] | undefined
  notResources?: string[] | undefined
  actions?: ActionSpecifier[] | undefined
  notActions?: ActionSpecifier[] | undefined
  effect: 'allow' | 'deny'
  role_name?: string | undefined
}
type AccessDenied = { action: ActionIdentifier; reason: AccessDeniedReason }
type AccessAllowedReason = {
  resources?: string[] | undefined
  notResources?: string[] | undefined
  actions?: ActionSpecifier[] | undefined
  notActions?: ActionSpecifier[] | undefined
  effect: 'allow' | 'deny'
  role_name?: string | undefined
}
type AccessAllowedRep = { action: ActionIdentifier; reason: AccessAllowedReason }
type Access = { denied: AccessDenied[]; allowed: AccessAllowedRep[] }
type Statement = {
  resources?: string[] | undefined
  notResources?: string[] | undefined
  actions?: ActionSpecifier[] | undefined
  notActions?: ActionSpecifier[] | undefined
  effect: 'allow' | 'deny'
}
type UnixMillis = bigint
type RelayAutoConfigRep = {
  _id: ObjectId
  _creator?: MemberSummary | undefined
  _access?: Access | undefined
  name: string
  policy: Statement[]
  fullKey?: string | undefined
  displayKey: string
  creationDate: UnixMillis
  lastModified: UnixMillis
}
type RelayAutoConfigCollectionRep = { items: RelayAutoConfigRep[] }
type UnauthorizedErrorRep = { code: string; message: string }
type ForbiddenErrorRep = { code: string; message: string }
type RelayAutoConfigPost = { name: string; policy: Statement[] }
type InvalidRequestErrorRep = { code: string; message: string }
type NotFoundErrorRep = { code: string; message: string }
type PatchOperation = { op: string; path: string; value?: { [x: string]: unknown } | undefined }
type JSONPatch = PatchOperation[]
type PatchWithComment = { patch: JSONPatch; comment?: string | undefined }
type StatusConflictErrorRep = { code: string; message: string }
type PatchFailedErrorRep = { code: string; message: string }
type FlagListingRep = {
  name: string
  key: string
  _links?: { [x: string]: Link } | undefined
  _site?: Link | undefined
}
type ApplicationFlagCollectionRep = {
  items?: FlagListingRep[] | undefined
  totalCount?: number | undefined
  _links?: { [x: string]: Link } | undefined
}
type MemberTeamSummaryRep = {
  customRoleKeys: string[]
  key: string
  _links?: { [x: string]: Link } | undefined
  name: string
}
type ApplicationMaintainerRep = {
  member?: MemberSummary | undefined
  team?: MemberTeamSummaryRep | undefined
}
type ApplicationRep = {
  flags?: ApplicationFlagCollectionRep | undefined
  _access?: Access | undefined
  _links?: { [x: string]: Link } | undefined
  _version?: number | undefined
  autoAdded: boolean
  creationDate?: UnixMillis | undefined
  description?: string | undefined
  key: string
  kind: 'browser' | 'mobile' | 'server'
  _maintainer?: ApplicationMaintainerRep | undefined
  name: string
}
type ApplicationCollectionRep = {
  _links?: { [x: string]: Link } | undefined
  items?: ApplicationRep[] | undefined
  totalCount?: number | undefined
}
type ApplicationVersionRep = {
  _access?: Access | undefined
  _links?: { [x: string]: Link } | undefined
  _version?: number | undefined
  autoAdded: boolean
  creationDate?: UnixMillis | undefined
  key: string
  name: string
  supported?: boolean | undefined
}
type ApplicationVersionsCollectionRep = {
  _links?: { [x: string]: Link } | undefined
  items?: ApplicationVersionRep[] | undefined
  totalCount?: number | undefined
}
type ApprovalRequestServiceKind = string
type ReviewResponse = {
  _id: string
  kind: 'approve' | 'decline' | 'comment'
  creationDate?: UnixMillis | undefined
  comment?: string | undefined
  memberId?: string | undefined
  serviceTokenId?: string | undefined
}
type Instruction = { [x: string]: { [x: string]: unknown } }
type Instructions = Instruction[]
type Conflict = { instruction?: Instruction | undefined; reason?: string | undefined }
type IntegrationStatus = { display: string; value: string }
type IntegrationMetadata = {
  externalId: string
  externalStatus: IntegrationStatus
  externalUrl: string
  lastChecked: UnixMillis
}
type CopiedFromEnv = { key: string; version?: number | undefined }
type CustomWorkflowStageMeta = { index?: number | undefined; name?: string | undefined }
type CustomWorkflowMeta = { name?: string | undefined; stage?: CustomWorkflowStageMeta | undefined }
type ApprovalSettings = {
  required: boolean
  bypassApprovalsForPendingChanges: boolean
  minNumApprovals: number
  canReviewOwnRequest: boolean
  canApplyDeclinedChanges: boolean
  autoApplyApprovedChanges?: boolean | undefined
  serviceKind: string
  serviceConfig: { [x: string]: { [x: string]: unknown } }
  requiredApprovalTags: string[]
  serviceKindConfigurationId?: string | undefined
}
type ClientSideAvailability = {
  usingMobileKey?: boolean | undefined
  usingEnvironmentId?: boolean | undefined
}
type Environment = {
  _links: { [x: string]: Link }
  _id: string
  key: string
  name: string
  apiKey: string
  mobileKey: string
  color: string
  defaultTtl: number
  secureMode: boolean
  _access?: Access | undefined
  defaultTrackEvents: boolean
  requireComments: boolean
  confirmChanges: boolean
  tags: string[]
  approvalSettings?: ApprovalSettings | undefined
  resourceApprovalSettings?: { [x: string]: ApprovalSettings } | undefined
  critical: boolean
}
type Environments = {
  _links?: { [x: string]: Link } | undefined
  totalCount?: number | undefined
  items: Environment[]
}
type Project = {
  _links: { [x: string]: Link }
  _id: string
  key: string
  includeInSnippetByDefault: boolean
  defaultClientSideAvailability?: ClientSideAvailability | undefined
  name: string
  _access?: Access | undefined
  tags: string[]
  defaultReleasePipelineKey?: string | undefined
  environments?: Environments | undefined
}
type Variation = {
  _id?: string | undefined
  value: { [x: string]: unknown }
  valueHash?: string | undefined
  description?: string | undefined
  name?: string | undefined
}
type CustomProperty = { name: string; value: string[] }
type CustomProperties = { [x: string]: CustomProperty }
type Defaults = { onVariation: number; offVariation: number }
type ExpandedFlagRep = {
  name: string
  kind: 'boolean' | 'multivariate'
  description?: string | undefined
  key: string
  _version: number
  creationDate: UnixMillis
  includeInSnippet?: boolean | undefined
  clientSideAvailability?: ClientSideAvailability | undefined
  variations: Variation[]
  temporary: boolean
  tags: string[]
  _links: { [x: string]: Link }
  maintainerId?: string | undefined
  _maintainer?: MemberSummary | undefined
  customProperties: CustomProperties
  archived: boolean
  archivedDate?: UnixMillis | undefined
  defaults?: Defaults | undefined
}
type AIConfigRep = { key: string; name: string }
type ExpandedExperimentRep = { key: string; name: string; _access?: Access | undefined }
type SegmentTarget = { values?: string[] | undefined; contextKind?: string | undefined }
type Operator = string
type Clause = {
  _id?: string | undefined
  attribute: string
  op: Operator
  values: { [x: string]: unknown }[]
  contextKind?: string | undefined
  negate: boolean
}
type UserSegmentRule = {
  _id?: string | undefined
  clauses: Clause[]
  weight?: number | undefined
  rolloutContextKind?: string | undefined
  bucketBy?: string | undefined
  description?: string | undefined
}
type SegmentId = string
type SegmentMetadata = {
  envId?: string | undefined
  segmentId?: SegmentId | undefined
  version?: number | undefined
  includedCount?: number | undefined
  excludedCount?: number | undefined
  lastModified?: UnixMillis | undefined
  deleted?: boolean | undefined
}
type UserSegment = {
  name: string
  description?: string | undefined
  tags: string[]
  creationDate: UnixMillis
  lastModifiedDate: UnixMillis
  key: string
  included?: string[] | undefined
  excluded?: string[] | undefined
  includedContexts?: SegmentTarget[] | undefined
  excludedContexts?: SegmentTarget[] | undefined
  _links: { [x: string]: Link }
  rules: UserSegmentRule[]
  version: number
  deleted: boolean
  _access?: Access | undefined
  _flags?: FlagListingRep[] | undefined
  unbounded?: boolean | undefined
  unboundedContextKind?: string | undefined
  generation: number
  _unboundedMetadata?: SegmentMetadata | undefined
  _external?: string | undefined
  _externalLink?: string | undefined
  _importInProgress?: boolean | undefined
}
type ExpandedResourceRep = {
  kind: string
  aiConfig?: AIConfigRep | undefined
  experiment?: ExpandedExperimentRep | undefined
  flag?: ExpandedFlagRep | undefined
  segment?: UserSegment | undefined
}
type ExpandableApprovalRequestResponse = {
  _id: string
  _version: number
  creationDate: UnixMillis
  serviceKind: ApprovalRequestServiceKind
  requestorId?: string | undefined
  description?: string | undefined
  reviewStatus: 'approved' | 'declined' | 'pending'
  allReviews: ReviewResponse[]
  notifyMemberIds: string[]
  notifyTeamKeys?: string[] | undefined
  appliedDate?: UnixMillis | undefined
  appliedByMemberId?: string | undefined
  appliedByServiceTokenId?: string | undefined
  status: 'pending' | 'completed' | 'failed' | 'scheduled'
  instructions: Instructions
  conflicts: Conflict[]
  _links: { [x: string]: { [x: string]: unknown } }
  executionDate?: UnixMillis | undefined
  operatingOnId?: string | undefined
  integrationMetadata?: IntegrationMetadata | undefined
  source?: CopiedFromEnv | undefined
  customWorkflowMetadata?: CustomWorkflowMeta | undefined
  resourceId?: string | undefined
  approvalSettings?: ApprovalSettings | undefined
  project?: Project | undefined
  environments?: Environment[] | undefined
  flag?: ExpandedFlagRep | undefined
  resource?: ExpandedResourceRep | undefined
}
type ExpandableApprovalRequestsResponse = {
  items: ExpandableApprovalRequestResponse[]
  totalCount: number
  _links: { [x: string]: Link }
}
type FormVariableConfig = { [x: string]: { [x: string]: unknown } }
type CreateApprovalRequestRequest = {
  resourceId: string
  comment?: string | undefined
  description: string
  instructions: Instructions
  notifyMemberIds?: string[] | undefined
  notifyTeamKeys?: string[] | undefined
  integrationConfig?: FormVariableConfig | undefined
}
type ApprovalRequestResponse = {
  _id: string
  _version: number
  creationDate: UnixMillis
  serviceKind: ApprovalRequestServiceKind
  requestorId?: string | undefined
  description?: string | undefined
  reviewStatus: 'approved' | 'declined' | 'pending'
  allReviews: ReviewResponse[]
  notifyMemberIds: string[]
  notifyTeamKeys?: string[] | undefined
  appliedDate?: UnixMillis | undefined
  appliedByMemberId?: string | undefined
  appliedByServiceTokenId?: string | undefined
  status: 'pending' | 'completed' | 'failed' | 'scheduled'
  instructions: Instructions
  conflicts: Conflict[]
  _links: { [x: string]: { [x: string]: unknown } }
  executionDate?: UnixMillis | undefined
  operatingOnId?: string | undefined
  integrationMetadata?: IntegrationMetadata | undefined
  source?: CopiedFromEnv | undefined
  customWorkflowMetadata?: CustomWorkflowMeta | undefined
  resourceId?: string | undefined
  approvalSettings?: ApprovalSettings | undefined
}
type ApprovalRequestPatchInput = { comment?: string | undefined; instructions: Instructions }
type FlagConfigApprovalRequestResponse = {
  _id: string
  _version: number
  creationDate: UnixMillis
  serviceKind: ApprovalRequestServiceKind
  requestorId?: string | undefined
  description?: string | undefined
  reviewStatus: 'approved' | 'declined' | 'pending'
  allReviews: ReviewResponse[]
  notifyMemberIds: string[]
  notifyTeamKeys?: string[] | undefined
  appliedDate?: UnixMillis | undefined
  appliedByMemberId?: string | undefined
  appliedByServiceTokenId?: string | undefined
  status: 'pending' | 'completed' | 'failed' | 'scheduled'
  instructions: Instructions
  conflicts: Conflict[]
  _links: { [x: string]: { [x: string]: unknown } }
  executionDate?: UnixMillis | undefined
  operatingOnId?: string | undefined
  integrationMetadata?: IntegrationMetadata | undefined
  source?: CopiedFromEnv | undefined
  customWorkflowMetadata?: CustomWorkflowMeta | undefined
}
type PostApprovalRequestApplyRequest = { comment?: string | undefined }
type PostApprovalRequestReviewRequest = {
  kind?: 'approve' | 'comment' | 'decline' | undefined
  comment?: string | undefined
}
type MethodNotAllowedErrorRep = { code: string; message: string }
type ResourceAccess = { action?: ActionIdentifier | undefined; resource?: string | undefined }
type ResourceKind = string
type RelatedFlag = { key: string }
type RelatedExperiment = { key: string }
type RelatedAIConfig = { key: string }
type SubjectDataRep = {
  _links?: { [x: string]: Link } | undefined
  name?: string | undefined
  avatarUrl?: string | undefined
}
type MemberDataRep = {
  _links?: { [x: string]: Link } | undefined
  _id?: string | undefined
  email?: string | undefined
  firstName?: string | undefined
  lastName?: string | undefined
}
type TokenSummary = {
  _links?: { [x: string]: Link } | undefined
  _id?: string | undefined
  name?: string | undefined
  ending?: string | undefined
  serviceToken?: boolean | undefined
}
type AuthorizedAppDataRep = {
  _links?: { [x: string]: Link } | undefined
  _id?: string | undefined
  isScim?: boolean | undefined
  name?: string | undefined
  iconUrl?: string | undefined
  maintainerName?: string | undefined
  isAgent?: boolean | undefined
}
type TargetResourceRep = {
  _links?: { [x: string]: Link } | undefined
  name?: string | undefined
  resources?: string[] | undefined
}
type ParentResourceRep = {
  _links?: { [x: string]: Link } | undefined
  name?: string | undefined
  resource?: string | undefined
}
type AuditLogEntryListingRep = {
  _links: { [x: string]: Link }
  _id: string
  _accountId: string
  date: UnixMillis
  accesses: ResourceAccess[]
  kind: ResourceKind
  name: string
  description: string
  shortDescription: string
  comment?: string | undefined
  relatedFlag?: RelatedFlag | undefined
  relatedExperiment?: RelatedExperiment | undefined
  relatedAIConfig?: RelatedAIConfig | undefined
  subject?: SubjectDataRep | undefined
  member?: MemberDataRep | undefined
  token?: TokenSummary | undefined
  app?: AuthorizedAppDataRep | undefined
  titleVerb?: string | undefined
  title?: string | undefined
  target?: TargetResourceRep | undefined
  parent?: ParentResourceRep | undefined
}
type AuditLogEntryListingRepCollection = {
  items: AuditLogEntryListingRep[]
  _links: { [x: string]: Link }
}
type StatementPost = {
  resources?: string[] | undefined
  notResources?: string[] | undefined
  actions?: ActionSpecifier[] | undefined
  notActions?: ActionSpecifier[] | undefined
  effect: 'allow' | 'deny'
}
type StatementPostList = StatementPost[]
type CountBucket = { timestamp: bigint; count: bigint }
type CountBucketsResult = { buckets: CountBucket[]; totalCount: bigint; bucketIntervalMs: bigint }
type AuditLogEntryRep = {
  _links: { [x: string]: Link }
  _id: string
  _accountId: string
  date: UnixMillis
  accesses: ResourceAccess[]
  kind: ResourceKind
  name: string
  description: string
  shortDescription: string
  comment?: string | undefined
  relatedFlag?: RelatedFlag | undefined
  relatedExperiment?: RelatedExperiment | undefined
  relatedAIConfig?: RelatedAIConfig | undefined
  subject?: SubjectDataRep | undefined
  member?: MemberDataRep | undefined
  token?: TokenSummary | undefined
  app?: AuthorizedAppDataRep | undefined
  titleVerb?: string | undefined
  title?: string | undefined
  target?: TargetResourceRep | undefined
  parent?: ParentResourceRep | undefined
  delta?: { [x: string]: unknown } | undefined
  triggerBody?: { [x: string]: unknown } | undefined
  merge?: { [x: string]: unknown } | undefined
  previousVersion?: { [x: string]: unknown } | undefined
  currentVersion?: { [x: string]: unknown } | undefined
  subentries?: AuditLogEntryListingRep[] | undefined
}
type CallerIdentityRep = {
  accountId?: string | undefined
  environmentId?: string | undefined
  projectId?: string | undefined
  environmentName?: string | undefined
  projectName?: string | undefined
  authKind?: string | undefined
  tokenKind?: string | undefined
  clientId?: string | undefined
  clientName?: string | undefined
  audience?: string[] | undefined
  expiresAt?: UnixMillis | undefined
  tokenName?: string | undefined
  tokenId?: string | undefined
  memberId?: string | undefined
  serviceToken?: boolean | undefined
  scopes?: string[] | undefined
}
type Extinction = {
  revision: string
  message: string
  time: UnixMillis
  flagKey: string
  projKey: string
}
type ExtinctionCollectionRep = {
  _links: { [x: string]: Link }
  items: { [x: string]: Extinction[] }
}
type HunkRep = {
  startingLineNumber: number
  lines?: string | undefined
  projKey?: string | undefined
  flagKey?: string | undefined
  aliases?: string[] | undefined
}
type ReferenceRep = { path: string; hint?: string | undefined; hunks: HunkRep[] }
type BranchRep = {
  name: string
  head: string
  updateSequenceId?: bigint | undefined
  syncTime: UnixMillis
  references?: ReferenceRep[] | undefined
  _links: { [x: string]: { [x: string]: unknown } }
}
type RepositoryRep = {
  name: string
  sourceLink?: string | undefined
  commitUrlTemplate?: string | undefined
  hunkUrlTemplate?: string | undefined
  type: 'bitbucket' | 'custom' | 'github' | 'gitlab'
  defaultBranch: string
  enabled: boolean
  version: number
  branches?: BranchRep[] | undefined
  _links: { [x: string]: { [x: string]: unknown } }
  _access?: Access | undefined
}
type RepositoryCollectionRep = { _links: { [x: string]: Link }; items: RepositoryRep[] }
type RepositoryPost = {
  name: string
  sourceLink?: string | undefined
  commitUrlTemplate?: string | undefined
  hunkUrlTemplate?: string | undefined
  type?: 'bitbucket' | 'custom' | 'github' | 'gitlab' | undefined
  defaultBranch?: string | undefined
}
type BranchCollectionRep = { _links: { [x: string]: Link }; items: BranchRep[] }
type PutBranch = {
  name: string
  head: string
  updateSequenceId?: bigint | undefined
  syncTime: UnixMillis
  references?: ReferenceRep[] | undefined
  commitTime?: UnixMillis | undefined
}
type ExtinctionListPost = Extinction[]
type StatisticsRoot = { projects?: Link[] | undefined; self?: Link | undefined }
type StatisticRep = {
  name: string
  type: 'bitbucket' | 'custom' | 'github' | 'gitlab'
  sourceLink: string
  defaultBranch: string
  enabled: boolean
  version: number
  hunkCount: number
  fileCount: number
  _links: { [x: string]: Link }
  latestCommitTime?: UnixMillis | undefined
}
type StatisticCollectionRep = {
  flags: { [x: string]: StatisticRep[] }
  _links: { [x: string]: Link }
}
type RedshiftDataExportCompletedArtifactsRep = {
  sqlSetupScript?: string | undefined
  s3BucketName?: string | undefined
}
type Destination = {
  _id?: string | undefined
  _links?: { [x: string]: Link } | undefined
  name?: string | undefined
  kind?:
    | 'google-pubsub'
    | 'kinesis'
    | 'mparticle'
    | 'segment'
    | 'azure-event-hubs'
    | 'snowflake-v2'
    | 'databricks'
    | 'bigquery'
    | 'redshift'
    | undefined
  version?: number | undefined
  config?: { [x: string]: unknown } | undefined
  on?: boolean | undefined
  createdAt?: UnixMillis | undefined
  maintainerId?: string | undefined
  _access?: Access | undefined
  completedArtifacts?: RedshiftDataExportCompletedArtifactsRep | undefined
}
type Destinations = {
  _links?: { [x: string]: Link } | undefined
  items?: Destination[] | undefined
}
type GenerateWarehouseDestinationKeyPairPostRep = {
  public_key?: string | undefined
  public_key_pkcs8?: string | undefined
}
type TrustPolicyStatement = {
  Effect?: string | undefined
  Action?: string[] | undefined
  Principal?: { [x: string]: unknown } | undefined
  Condition?: { [x: string]: unknown } | undefined
}
type TrustPolicyDetails = {
  Version?: string | undefined
  Statement?: TrustPolicyStatement[] | undefined
}
type GenerateTrustPolicyPostRep = { awsTrustPolicy?: TrustPolicyDetails | undefined }
type CompleteSetupPostBody = { publicKey?: string | undefined }
type WarehouseSetupScriptPostBody = {
  name?: string | undefined
  snowflakeHostAddress?: string | undefined
  databaseName?: string | undefined
  warehouseName?: string | undefined
  roleName?: string | undefined
  schemaName?: string | undefined
  userName?: string | undefined
  includeNetworkPolicy?: boolean | undefined
  clusterIdentifier?: string | undefined
  clusterRegion?: string | undefined
  clusterAwsAccountId?: string | undefined
  endpoint?: string | undefined
  clickHouseDatabaseName?: string | undefined
  clickHouseUserName?: string | undefined
  clickHouseS3BucketName?: string | undefined
  clickHouseIncludeHostRestriction?: boolean | undefined
  clickHouseServiceRoleArn?: string | undefined
  clickHousePassword?: string | undefined
  s3BucketName?: string | undefined
}
type WarehouseDestinationSetupScriptRep = {
  script?: string | undefined
  publicKey?: string | undefined
  publicKeyPkcs8?: string | undefined
  redshiftIAMPermissionsPolicy?: string | undefined
  redshiftIAMTrustPolicy?: string | undefined
  s3BucketName?: string | undefined
}
type DestinationPost = {
  name?: string | undefined
  kind?:
    | 'google-pubsub'
    | 'kinesis'
    | 'mparticle'
    | 'segment'
    | 'azure-event-hubs'
    | 'snowflake-v2'
    | 'databricks'
    | 'bigquery'
    | 'redshift'
    | undefined
  config?: { [x: string]: unknown } | undefined
  on?: boolean | undefined
}
type TimestampRep = {
  milliseconds?: UnixMillis | undefined
  seconds?: bigint | undefined
  rfc3339?: string | undefined
  simple?: string | undefined
}
type FlagLinkMember = {
  _links: { [x: string]: Link }
  _id: string
  firstName?: string | undefined
  lastName?: string | undefined
}
type FlagLinkRep = {
  _links: { [x: string]: Link }
  _key?: string | undefined
  _integrationKey?: string | undefined
  _id: string
  _deepLink: string
  _timestamp: TimestampRep
  title?: string | undefined
  description?: string | undefined
  _metadata?: { [x: string]: string } | undefined
  _createdAt: UnixMillis
  _member?: FlagLinkMember | undefined
}
type FlagLinkCollectionRep = { items: FlagLinkRep[]; _links: { [x: string]: Link } }
type FlagLinkPost = {
  key?: string | undefined
  integrationKey?: string | undefined
  timestamp?: UnixMillis | undefined
  deepLink?: string | undefined
  title?: string | undefined
  description?: string | undefined
  metadata?: { [x: string]: string } | undefined
}
type FeatureFlagStatus = {
  name: 'new' | 'inactive' | 'active' | 'launched'
  lastRequested?: string | undefined
  default?: { [x: string]: unknown } | undefined
}
type FeatureFlagStatusAcrossEnvironments = {
  environments: { [x: string]: FeatureFlagStatus }
  key: string
  _links: { [x: string]: Link }
}
type FlagStatusRep = {
  name: 'new' | 'inactive' | 'active' | 'launched'
  lastRequested?: string | undefined
  default?: { [x: string]: unknown } | undefined
  _links: { [x: string]: Link }
}
type FeatureFlagStatuses = { _links: { [x: string]: Link }; items?: FlagStatusRep[] | undefined }
type MaintainerTeam = { key: string; name: string; _links?: { [x: string]: Link } | undefined }
type Modification = { date?: string | undefined }
type Filter = {
  type: 'group' | 'contextAttribute' | 'eventProperty'
  attribute?: string | undefined
  op: Operator
  values: { [x: string]: unknown }[]
  contextKind?: string | undefined
  negate: boolean
}
type MetricEventDefaultRep = { disabled?: boolean | undefined; value?: number | undefined }
type MetricDataSourceRefRep = {
  key: string
  environmentKey?: string | undefined
  _name?: string | undefined
  _integrationKey?: string | undefined
}
type UrlMatcher = { [x: string]: { [x: string]: unknown } }
type UrlMatchers = UrlMatcher[]
type MetricDenominatorRep = {
  eventName?: string | undefined
  isNumeric?: boolean | undefined
  unitAggregationType?: string | undefined
  unitAggregationField?: string | undefined
  valueColumn?: string | undefined
  dataSource?: MetricDataSourceRefRep | undefined
  filters?: Filter | undefined
  windowStartOffset?: bigint | undefined
  windowEndOffset?: bigint | undefined
  winsorLowerPercentile?: number | undefined
  winsorUpperPercentile?: number | undefined
  winsorIncludeImputed?: boolean | undefined
}
type MetricListingRep = {
  experimentCount?: number | undefined
  metricGroupCount?: number | undefined
  activeExperimentCount?: number | undefined
  activeGuardedRolloutCount?: number | undefined
  _id: string
  _versionId: string
  _version?: number | undefined
  key: string
  name: string
  kind: 'pageview' | 'click' | 'custom' | 'trace'
  _attachedFlagCount?: number | undefined
  _links: { [x: string]: Link }
  _site?: Link | undefined
  _access?: Access | undefined
  tags: string[]
  _creationDate: UnixMillis
  lastModified?: Modification | undefined
  maintainerId?: string | undefined
  _maintainer?: MemberSummary | undefined
  description?: string | undefined
  category?: string | undefined
  isNumeric?: boolean | undefined
  successCriteria?: 'HigherThanBaseline' | 'LowerThanBaseline' | undefined
  unit?: string | undefined
  eventKey?: string | undefined
  randomizationUnits?: string[] | undefined
  analysisUnits?: string[] | undefined
  filters?: Filter | undefined
  unitAggregationType?: 'average' | 'sum' | 'count_distinct' | undefined
  analysisType?: 'mean' | 'percentile' | undefined
  percentileValue?: number | undefined
  eventDefault?: MetricEventDefaultRep | undefined
  dataSource: MetricDataSourceRefRep
  lastSeen?: UnixMillis | undefined
  archived?: boolean | undefined
  archivedAt?: UnixMillis | undefined
  selector?: string | undefined
  urls?: UrlMatchers | undefined
  windowStartOffset?: bigint | undefined
  windowEndOffset?: bigint | undefined
  winsorLowerPercentile?: number | undefined
  winsorUpperPercentile?: number | undefined
  winsorIncludeImputed?: boolean | undefined
  traceQuery?: string | undefined
  traceValueLocation?: string | undefined
  unitAggregationField?: string | undefined
  denominator?: MetricDenominatorRep | undefined
}
type ExperimentEnabledPeriodRep = {
  startDate?: UnixMillis | undefined
  stopDate?: UnixMillis | undefined
}
type ExperimentEnvironmentSettingRep = {
  startDate?: UnixMillis | undefined
  stopDate?: UnixMillis | undefined
  enabledPeriods?: ExperimentEnabledPeriodRep[] | undefined
}
type LegacyExperimentRep = {
  metricKey?: string | undefined
  _metric?: MetricListingRep | undefined
  environments?: string[] | undefined
  _environmentSettings?: { [x: string]: ExperimentEnvironmentSettingRep } | undefined
}
type ExperimentInfoRep = { baselineIdx: number; items: LegacyExperimentRep[] }
type FlagMigrationSettingsRep = {
  contextKind?: string | undefined
  stageCount?: number | undefined
}
type StaleFlagData = {
  readyForCodeRemoval?: boolean | undefined
  readyToArchive?: boolean | undefined
  cleanupId?: string | undefined
}
type Target = { values: string[]; variation: number; contextKind?: string | undefined }
type WeightedVariation = { variation: number; weight: number; _untracked?: boolean | undefined }
type ExperimentAllocationRep = { defaultVariation: number; canReshuffle: boolean }
type Rollout = {
  variations: WeightedVariation[]
  experimentAllocation?: ExperimentAllocationRep | undefined
  seed?: number | undefined
  bucketBy?: string | undefined
  contextKind?: string | undefined
}
type Rule = {
  _id?: string | undefined
  disabled?: boolean | undefined
  variation?: number | undefined
  rollout?: Rollout | undefined
  clauses: Clause[]
  trackEvents: boolean
  description?: string | undefined
  ref?: string | undefined
}
type VariationOrRolloutRep = { variation?: number | undefined; rollout?: Rollout | undefined }
type Prerequisite = { key: string; variation: number }
type VariationSummary = {
  rules: number
  nullRules: number
  targets: number
  contextTargets: number
  isFallthrough?: boolean | undefined
  isOff?: boolean | undefined
  rollout?: number | undefined
  bucketBy?: string | undefined
}
type AllVariationsSummary = { [x: string]: VariationSummary }
type FlagSummary = { variations: AllVariationsSummary; prerequisites: number }
type FlagConfigEvaluation = { contextKinds?: string[] | undefined }
type FlagConfigMigrationSettingsRep = { checkRatio?: number | undefined }
type FeatureFlagConfig = {
  on: boolean
  archived: boolean
  salt: string
  sel: string
  lastModified: UnixMillis
  version: number
  targets?: Target[] | undefined
  contextTargets?: Target[] | undefined
  rules?: Rule[] | undefined
  fallthrough?: VariationOrRolloutRep | undefined
  offVariation?: number | undefined
  prerequisites?: Prerequisite[] | undefined
  _site: Link
  _access?: Access | undefined
  _environmentName: string
  trackEvents: boolean
  trackEventsFallthrough: boolean
  _debugEventsUntilDate?: UnixMillis | undefined
  _summary?: FlagSummary | undefined
  evaluation?: FlagConfigEvaluation | undefined
  migrationSettings?: FlagConfigMigrationSettingsRep | undefined
}
type FeatureFlag = {
  name: string
  kind: 'boolean' | 'multivariate'
  description?: string | undefined
  key: string
  _version: number
  creationDate: UnixMillis
  includeInSnippet?: boolean | undefined
  clientSideAvailability?: ClientSideAvailability | undefined
  variations: Variation[]
  temporary: boolean
  tags: string[]
  _links: { [x: string]: Link }
  maintainerId?: string | undefined
  _maintainer?: MemberSummary | undefined
  maintainerTeamKey?: string | undefined
  _maintainerTeam?: MaintainerTeam | undefined
  goalIds?: string[] | undefined
  experiments: ExperimentInfoRep
  customProperties: CustomProperties
  archived: boolean
  archivedDate?: UnixMillis | undefined
  deprecated?: boolean | undefined
  deprecatedDate?: UnixMillis | undefined
  defaults?: Defaults | undefined
  _purpose?: string | undefined
  migrationSettings?: FlagMigrationSettingsRep | undefined
  stale?: StaleFlagData | undefined
  environments?: { [x: string]: FeatureFlagConfig } | undefined
}
type FeatureFlags = {
  items: FeatureFlag[]
  _links: { [x: string]: Link }
  totalCount?: number | undefined
  totalCountWithDifferences?: number | undefined
}
type ClientSideAvailabilityPost = { usingEnvironmentId: boolean; usingMobileKey: boolean }
type MigrationFlagStageCount = number
type MigrationSettingsPost = {
  contextKind?: string | undefined
  stageCount: MigrationFlagStageCount
}
type FlagPrerequisitePost = { key: string; variationId: string }
type FeatureFlagBody = {
  name: string
  key: string
  description?: string | undefined
  includeInSnippet?: boolean | undefined
  clientSideAvailability?: ClientSideAvailabilityPost | undefined
  variations?: Variation[] | undefined
  temporary?: boolean | undefined
  tags?: string[] | undefined
  customProperties?: CustomProperties | undefined
  defaults?: Defaults | undefined
  purpose?: 'migration' | 'holdout' | undefined
  migrationSettings?: MigrationSettingsPost | undefined
  maintainerId?: string | undefined
  maintainerTeamKey?: string | undefined
  initialPrerequisites?: FlagPrerequisitePost[] | undefined
  isFlagOn?: boolean | undefined
}
type DependentFlag = {
  name?: string | undefined
  key: string
  _links: { [x: string]: Link }
  _site: Link
}
type DependentFlagsByEnvironment = {
  items: DependentFlag[]
  _links: { [x: string]: Link }
  _site: Link
}
type FlagCopyConfigEnvironment = { key: string; currentVersion?: number | undefined }
type FlagCopyConfigPost = {
  source: FlagCopyConfigEnvironment
  target: FlagCopyConfigEnvironment
  comment?: string | undefined
  includedActions?:
    | (
        | 'updateOn'
        | 'updateRules'
        | 'updateFallthrough'
        | 'updateOffVariation'
        | 'updatePrerequisites'
        | 'updateTargets'
        | 'updateFlagConfigMigrationSettings'
      )[]
    | undefined
  excludedActions?:
    | (
        | 'updateOn'
        | 'updateRules'
        | 'updateFallthrough'
        | 'updateOffVariation'
        | 'updatePrerequisites'
        | 'updateTargets'
        | 'updateFlagConfigMigrationSettings'
      )[]
    | undefined
}
type DependentFlagEnvironment = {
  name?: string | undefined
  key: string
  _links: { [x: string]: Link }
  _site: Link
}
type MultiEnvironmentDependentFlag = {
  name?: string | undefined
  key: string
  environments: DependentFlagEnvironment[]
}
type MultiEnvironmentDependentFlags = {
  items: MultiEnvironmentDependentFlag[]
  _links: { [x: string]: Link }
  _site: Link
}
type ResourceId = {
  environmentKey?: string | undefined
  flagKey?: string | undefined
  key?: string | undefined
  kind?: ResourceKind | undefined
  projectKey?: string | undefined
}
type ExpiringTarget = {
  _id: string
  _version: number
  expirationDate: UnixMillis
  contextKind: string
  contextKey: string
  targetType?: string | undefined
  variationId?: string | undefined
  _resourceId: ResourceId
}
type ExpiringTargetGetResponse = {
  items: ExpiringTarget[]
  _links?: { [x: string]: Link } | undefined
}
type PatchFlagsRequest = { comment?: string | undefined; instructions: Instruction[] }
type ExpiringTargetError = { instructionIndex: number; message: string }
type ExpiringTargetPatchResponse = {
  items: ExpiringTarget[]
  _links?: { [x: string]: Link } | undefined
  totalInstructions?: number | undefined
  successfulInstructions?: number | undefined
  failedInstructions?: number | undefined
  errors?: ExpiringTargetError[] | undefined
}
type ResourceIDResponse = {
  kind?: string | undefined
  projectKey?: string | undefined
  environmentKey?: string | undefined
  flagKey?: string | undefined
  key?: string | undefined
}
type ExpiringUserTargetItem = {
  _id: string
  _version: number
  expirationDate: UnixMillis
  userKey: string
  targetType?: string | undefined
  variationId?: string | undefined
  _resourceId: ResourceIDResponse
}
type ExpiringUserTargetGetResponse = {
  items: ExpiringUserTargetItem[]
  _links?: { [x: string]: Link } | undefined
}
type ExpiringUserTargetPatchResponse = {
  items: ExpiringUserTargetItem[]
  _links?: { [x: string]: Link } | undefined
  totalInstructions?: number | undefined
  successfulInstructions?: number | undefined
  failedInstructions?: number | undefined
  errors?: ExpiringTargetError[] | undefined
}
type FeatureWorkflowId = string
type RecentTriggerBody = {
  timestamp?: UnixMillis | undefined
  jsonBody?: { [x: string]: { [x: string]: unknown } } | undefined
}
type TriggerWorkflowRep = {
  _id?: FeatureWorkflowId | undefined
  _version?: number | undefined
  _creationDate?: UnixMillis | undefined
  _maintainerId?: string | undefined
  _maintainer?: MemberSummary | undefined
  enabled?: boolean | undefined
  _status?: 'active' | 'inactive' | 'failed' | undefined
  _lastFailedAt?: UnixMillis | undefined
  _integrationKey?: string | undefined
  instructions?: Instructions | undefined
  _lastTriggeredAt?: UnixMillis | undefined
  _recentTriggerBodies?: RecentTriggerBody[] | undefined
  _triggerCount?: number | undefined
  triggerURL?: string | undefined
  _links?: { [x: string]: Link } | undefined
}
type TriggerWorkflowCollectionRep = {
  items?: TriggerWorkflowRep[] | undefined
  _links?: { [x: string]: Link } | undefined
}
type TriggerPost = {
  comment?: string | undefined
  instructions?: Instruction[] | undefined
  integrationKey: string
}
type FlagTriggerInput = { comment?: string | undefined; instructions?: Instruction[] | undefined }
type CompletedBy = { member?: MemberSummary | undefined; token?: TokenSummary | undefined }
type EnvironmentSummary = {
  _links: { [x: string]: Link }
  key: string
  name: string
  color: string
}
type PipelineReleaseStrategy = string
type PipelineReleaseGuardianConfiguration = {
  monitoringWindowMilliseconds: bigint
  rolloutWeight: number
  rollbackOnRegression: boolean
  randomizationUnit?: string | undefined
}
type AudienceConfiguration = {
  releaseStrategy: PipelineReleaseStrategy
  requireApproval: boolean
  notifyMemberIds?: string[] | undefined
  notifyTeamKeys?: string[] | undefined
  releaseGuardianConfiguration?: PipelineReleaseGuardianConfiguration | undefined
}
type AudienceStatus = string
type PipelineReleaseAudience = {
  _id: string
  _links?: { [x: string]: Link } | undefined
  environment?: EnvironmentSummary | undefined
  name: string
  configuration?: AudienceConfiguration | undefined
  segmentKeys?: string[] | undefined
  status?: AudienceStatus | undefined
  _ruleIds?: string[] | undefined
}
type PhaseStatus = string
type PhaseConfiguration = { [x: string]: unknown }
type PipelineReleasePhase = {
  _id: string
  _name: string
  complete: boolean
  _creationDate: UnixMillis
  _completionDate?: UnixMillis | undefined
  _completedBy?: CompletedBy | undefined
  _audiences: PipelineReleaseAudience[]
  status?: PhaseStatus | undefined
  started?: boolean | undefined
  _startedDate?: UnixMillis | undefined
  configuration?: PhaseConfiguration | undefined
}
type PipelineRelease = {
  _links?: { [x: string]: Link } | undefined
  name: string
  releasePipelineKey: string
  releasePipelineDescription: string
  phases: PipelineReleasePhase[]
  _version: number
  _releaseVariationId?: string | undefined
  _canceledAt?: UnixMillis | undefined
}
type BigSegmentStoreIntegrationCollectionLinks = { self: Link; parent?: Link | undefined }
type BigSegmentStoreIntegrationLinks = {
  self: Link
  parent: Link
  project: Link
  environment: Link
}
type StoreIntegrationError = {
  statusCode?: number | undefined
  message?: string | undefined
  timestamp?: UnixMillis | undefined
}
type BigSegmentStoreStatus = {
  available?: boolean | undefined
  potentiallyStale?: boolean | undefined
  lastSync?: UnixMillis | undefined
  lastError?: UnixMillis | undefined
  errors?: StoreIntegrationError[] | undefined
}
type BigSegmentStoreIntegration = {
  _links: BigSegmentStoreIntegrationLinks
  _id: string
  integrationKey: 'redis' | 'dynamodb'
  projectKey: string
  environmentKey: string
  config: FormVariableConfig
  on: boolean
  tags: string[]
  name: string
  version: number
  _access?: Access | undefined
  _status: BigSegmentStoreStatus
}
type BigSegmentStoreIntegrationCollection = {
  _links: BigSegmentStoreIntegrationCollectionLinks
  items: BigSegmentStoreIntegration[]
}
type IntegrationDeliveryConfigurationPost = {
  on?: boolean | undefined
  config: FormVariableConfig
  tags?: string[] | undefined
  name?: string | undefined
}
type IntegrationDeliveryConfigurationCollectionLinks = { self: Link; parent?: Link | undefined }
type IntegrationDeliveryConfigurationLinks = {
  self: Link
  parent: Link
  project: Link
  environment: Link
}
type IntegrationDeliveryConfigurationStatus = {
  available: boolean
  potentiallyStale: boolean
  lastSync?: UnixMillis | undefined
  lastError?: UnixMillis | undefined
  errors?: StoreIntegrationError[] | undefined
}
type IntegrationDeliveryConfiguration = {
  _links: IntegrationDeliveryConfigurationLinks
  _id: string
  integrationKey: string
  projectKey: string
  environmentKey: string
  config: FormVariableConfig
  on: boolean
  tags: string[]
  name: string
  version: number
  _access?: Access | undefined
  _status?: IntegrationDeliveryConfigurationStatus | undefined
}
type IntegrationDeliveryConfigurationCollection = {
  _links: IntegrationDeliveryConfigurationCollectionLinks
  items: IntegrationDeliveryConfiguration[]
}
type IntegrationDeliveryConfigurationResponse = {
  statusCode?: number | undefined
  error?: string | undefined
  timestamp?: UnixMillis | undefined
  responseBody?: string | undefined
}
type FlagImportIntegrationCollectionLinks = { self: Link; parent?: Link | undefined }
type FlagImportIntegrationLinks = { self: Link; parent: Link; project: Link }
type StatusResponse = {
  integrationId?: string | undefined
  message?: string | undefined
  statusCode?: number | undefined
  timestamp?: UnixMillis | undefined
}
type FlagImportStatus = {
  status?: 'complete' | 'importing' | 'pending' | 'failed' | 'partial' | undefined
  lastImport?: UnixMillis | undefined
  lastError?: UnixMillis | undefined
  errors?: StatusResponse[] | undefined
}
type FlagImportIntegration = {
  _links: FlagImportIntegrationLinks
  _id: string
  integrationKey: 'split' | 'unleash'
  projectKey: string
  config: FormVariableConfig
  tags: string[]
  name: string
  version: number
  _access?: Access | undefined
  _status: FlagImportStatus
}
type FlagImportIntegrationCollection = {
  _links: FlagImportIntegrationCollectionLinks
  items: FlagImportIntegration[]
}
type FlagImportConfigurationPost = {
  config: FormVariableConfig
  tags?: string[] | undefined
  name?: string | undefined
}
type HeaderItems = { name?: string | undefined; value?: string | undefined }
type HMACSignature = {
  headerName?: string | undefined
  hmacSecretFormVariableKey?: string | undefined
}
type Endpoint = {
  headers?: HeaderItems[] | undefined
  hmacSignature?: HMACSignature | undefined
  method?: string | undefined
  url?: string | undefined
}
type DynamicOptionFiltersItems = {
  attribute?: string | undefined
  variableKey?: string | undefined
}
type OptionsArray = { label?: string | undefined; value?: string | undefined }
type DynamicOptionsParser = {
  optionsItems?: OptionsArray | undefined
  optionsPath?: string | undefined
}
type DynamicOptionsSource = { key?: string | undefined; type?: string | undefined }
type DynamicOptions = {
  allowUnknownValue?: boolean | undefined
  endpoint?: Endpoint | undefined
  filters?: DynamicOptionFiltersItems[] | undefined
  parser?: DynamicOptionsParser | undefined
  source?: DynamicOptionsSource | undefined
}
type FormVariable = {
  key?: string | undefined
  name?: string | undefined
  type?: string | undefined
  description?: string | undefined
  placeholder?: string | undefined
  isOptional?: boolean | undefined
  defaultValue?: { [x: string]: unknown } | undefined
  allowedValues?: string[] | undefined
  dynamicOptions?: DynamicOptions | undefined
}
type ApprovalsCapabilityConfig = { additionalFormVariables?: FormVariable[] | undefined }
type AuditLogEventsHookCapabilityConfigRep = { statements?: Statement[] | undefined }
type CapabilityConfigRep = {
  approvals?: ApprovalsCapabilityConfig | undefined
  auditLogEventsHook?: AuditLogEventsHookCapabilityConfigRep | undefined
}
type IntegrationConfigurationsRep = {
  _links: { [x: string]: Link }
  _id: string
  name: string
  _createdAt?: UnixMillis | undefined
  _integrationKey?: string | undefined
  tags?: string[] | undefined
  enabled?: boolean | undefined
  _access?: Access | undefined
  configValues?: { [x: string]: { [x: string]: unknown } } | undefined
  capabilityConfig?: CapabilityConfigRep | undefined
  snowflakeSetupScript?: string | undefined
  redshiftSetupScripts?: string[] | undefined
  redshiftIAMPermissionsPolicy?: string | undefined
  redshiftIAMTrustPolicy?: string | undefined
  clickHouseSetupScript?: string | undefined
  _maintainerId?: string | undefined
}
type IntegrationConfigurationCollectionRep = {
  items: IntegrationConfigurationsRep[]
  _links: { [x: string]: Link }
}
type AuditLogEventsHookCapabilityConfigPost = { statements?: StatementPostList | undefined }
type CapabilityConfigPost = {
  approvals?: ApprovalsCapabilityConfig | undefined
  auditLogEventsHook?: AuditLogEventsHookCapabilityConfigPost | undefined
}
type IntegrationConfigurationPost = {
  name: string
  enabled?: boolean | undefined
  tags?: string[] | undefined
  configValues: { [x: string]: { [x: string]: unknown } }
  capabilityConfig?: CapabilityConfigPost | undefined
}
type IntegrationStatusRep = {
  statusCode?: number | undefined
  responseBody?: string | undefined
  timestamp?: UnixMillis | undefined
}
type IntegrationSubscriptionStatusRep = {
  successCount?: number | undefined
  lastSuccess?: UnixMillis | undefined
  lastError?: UnixMillis | undefined
  errorCount?: number | undefined
  errors?: IntegrationStatusRep[] | undefined
}
type Integration = {
  _links?: { [x: string]: Link } | undefined
  _id?: string | undefined
  kind?: string | undefined
  name?: string | undefined
  config?: { [x: string]: { [x: string]: unknown } } | undefined
  statements?: Statement[] | undefined
  on?: boolean | undefined
  tags?: string[] | undefined
  _access?: Access | undefined
  _status?: IntegrationSubscriptionStatusRep | undefined
  url?: string | undefined
  apiKey?: string | undefined
}
type Integrations = {
  _links?: { [x: string]: Link } | undefined
  items?: Integration[] | undefined
  key?: string | undefined
}
type SubscriptionPost = {
  name: string
  statements?: StatementPostList | undefined
  on?: boolean | undefined
  tags?: string[] | undefined
  config: { [x: string]: { [x: string]: unknown } }
  url?: string | undefined
  apiKey?: string | undefined
}
type LastSeenMetadata = { tokenId?: string | undefined }
type MemberPermissionGrantSummaryRep = {
  actionSet?: string | undefined
  actions?: string[] | undefined
  resource: string
}
type OAuthProviderKind = string
type RoleAttributeValues = string[]
type RoleAttributeMap = { [x: string]: RoleAttributeValues }
type Member = {
  _links: { [x: string]: Link }
  _id: string
  firstName?: string | undefined
  lastName?: string | undefined
  role: string
  email: string
  _pendingInvite: boolean
  _verified: boolean
  _pendingEmail?: string | undefined
  customRoles: string[]
  mfa: string
  excludedDashboards?: string[] | undefined
  _lastSeen: UnixMillis
  _lastSeenMetadata?: LastSeenMetadata | undefined
  _integrationMetadata?: IntegrationMetadata | undefined
  teams?: MemberTeamSummaryRep[] | undefined
  permissionGrants?: MemberPermissionGrantSummaryRep[] | undefined
  creationDate: UnixMillis
  oauthProviders?: OAuthProviderKind[] | undefined
  hasPassword?: boolean | undefined
  version?: number | undefined
  roleAttributes?: RoleAttributeMap | undefined
  mfaEnforced?: boolean | undefined
  mfaGracePeriodExpiresAt?: UnixMillis | undefined
}
type Members = { items: Member[]; _links: { [x: string]: Link }; totalCount?: number | undefined }
type NewMemberForm = {
  email: string
  password?: string | undefined
  firstName?: string | undefined
  lastName?: string | undefined
  role?: 'reader' | 'writer' | 'admin' | 'no_access' | undefined
  customRoles?: string[] | undefined
  teamKeys?: string[] | undefined
  roleAttributes?: RoleAttributeMap | undefined
}
type NewMemberFormListPost = NewMemberForm[]
type MembersPatchInput = { comment?: string | undefined; instructions: Instructions }
type BulkEditMembersRep = {
  members?: string[] | undefined
  errors?: { [x: string]: string }[] | undefined
}
type MemberTeamsPostInput = { teamKeys: string[] }
type MetricCollectionRep = {
  items?: MetricListingRep[] | undefined
  _links?: { [x: string]: Link } | undefined
  totalCount?: number | undefined
}
type UrlPost = {
  kind?: 'exact' | 'canonical' | 'substring' | 'regex' | undefined
  url?: string | undefined
  substring?: string | undefined
  pattern?: string | undefined
}
type EventFilter = {
  type: string
  attribute?: string | undefined
  op: Operator
  values: { [x: string]: unknown }[]
  contextKind?: string | undefined
  negate: boolean
}
type DenominatorPost = {
  eventName?: string | undefined
  isNumeric?: boolean | undefined
  dataSource?: MetricDataSourceRefRep | undefined
  unitAggregationType?: string | undefined
  unitAggregationField?: string | undefined
  valueColumn?: string | undefined
  filters?: EventFilter | undefined
  windowStartOffset?: bigint | undefined
  windowEndOffset?: bigint | undefined
  winsorLowerPercentile?: number | undefined
  winsorUpperPercentile?: number | undefined
  winsorIncludeImputed?: boolean | undefined
}
type MetricPost = {
  key: string
  name?: string | undefined
  description?: string | undefined
  kind: 'pageview' | 'click' | 'custom' | 'trace'
  selector?: string | undefined
  urls?: UrlPost[] | undefined
  isNumeric?: boolean | undefined
  unit?: string | undefined
  eventKey?: string | undefined
  successCriteria?: 'HigherThanBaseline' | 'LowerThanBaseline' | undefined
  tags?: string[] | undefined
  randomizationUnits?: string[] | undefined
  analysisUnits?: string[] | undefined
  maintainerId?: string | undefined
  unitAggregationType?: 'average' | 'sum' | 'count_distinct' | undefined
  analysisType?: string | undefined
  percentileValue?: number | undefined
  eventDefault?: MetricEventDefaultRep | undefined
  dataSource?: MetricDataSourceRefRep | undefined
  filters?: EventFilter | undefined
  windowStartOffset?: bigint | undefined
  windowEndOffset?: bigint | undefined
  winsorLowerPercentile?: number | undefined
  winsorUpperPercentile?: number | undefined
  winsorIncludeImputed?: boolean | undefined
  traceQuery?: string | undefined
  traceValueLocation?: string | undefined
  unitAggregationField?: string | undefined
  valueColumn?: string | undefined
  denominator?: DenominatorPost | undefined
}
type DependentExperimentRep = {
  key: string
  name: string
  environmentId: string
  environmentKey: string
  creationDate: UnixMillis
  archivedDate?: UnixMillis | undefined
  _links: { [x: string]: Link }
}
type DependentExperimentListRep = DependentExperimentRep[]
type DependentMetricGroupRep = {
  key: string
  name: string
  kind: 'funnel' | 'standard'
  _links: { [x: string]: Link }
}
type DependentReleasePhaseRep = {
  _id: string
  flagKey: string
  flagName: string
  flagPurpose?: string | undefined
  environmentKey: string
  environmentName: string
  status: string
  creationDate: UnixMillis
  _links: { [x: string]: Link }
}
type MetricRep = {
  experimentCount?: number | undefined
  metricGroupCount?: number | undefined
  activeExperimentCount?: number | undefined
  activeGuardedRolloutCount?: number | undefined
  _id: string
  _versionId: string
  _version?: number | undefined
  key: string
  name: string
  kind: 'pageview' | 'click' | 'custom' | 'trace'
  _attachedFlagCount?: number | undefined
  _links: { [x: string]: Link }
  _site?: Link | undefined
  _access?: Access | undefined
  tags: string[]
  _creationDate: UnixMillis
  lastModified?: Modification | undefined
  maintainerId?: string | undefined
  _maintainer?: MemberSummary | undefined
  description?: string | undefined
  category?: string | undefined
  isNumeric?: boolean | undefined
  successCriteria?: 'HigherThanBaseline' | 'LowerThanBaseline' | undefined
  unit?: string | undefined
  eventKey?: string | undefined
  randomizationUnits?: string[] | undefined
  analysisUnits?: string[] | undefined
  filters?: Filter | undefined
  unitAggregationType?: 'average' | 'sum' | 'count_distinct' | undefined
  analysisType?: 'mean' | 'percentile' | undefined
  percentileValue?: number | undefined
  eventDefault?: MetricEventDefaultRep | undefined
  dataSource: MetricDataSourceRefRep
  lastSeen?: UnixMillis | undefined
  archived?: boolean | undefined
  archivedAt?: UnixMillis | undefined
  selector?: string | undefined
  urls?: UrlMatchers | undefined
  windowStartOffset?: bigint | undefined
  windowEndOffset?: bigint | undefined
  winsorLowerPercentile?: number | undefined
  winsorUpperPercentile?: number | undefined
  winsorIncludeImputed?: boolean | undefined
  traceQuery?: string | undefined
  traceValueLocation?: string | undefined
  unitAggregationField?: string | undefined
  denominator?: MetricDenominatorRep | undefined
  experiments?: DependentExperimentListRep | undefined
  metricGroups?: DependentMetricGroupRep[] | undefined
  lastUsedInExperiment?: DependentExperimentRep | undefined
  lastUsedInGuardedRollout?: DependentReleasePhaseRep | undefined
  isActive?: boolean | undefined
  _attachedFeatures?: FlagListingRep[] | undefined
}
type Client = {
  _links: { [x: string]: Link }
  name: string
  description?: string | undefined
  _accountId: string
  _clientId: string
  _clientSecret?: string | undefined
  redirectUri: string
  _creationDate: UnixMillis
}
type ClientCollection = { _links: { [x: string]: Link }; items: Client[] }
type OauthClientPost = {
  name?: string | undefined
  redirectUri?: string | undefined
  description?: string | undefined
}
type Projects = { _links: { [x: string]: Link }; items: Project[]; totalCount?: number | undefined }
type DefaultClientSideAvailabilityPost = { usingEnvironmentId: boolean; usingMobileKey: boolean }
type SourceEnv = { key?: string | undefined; version?: number | undefined }
type EnvironmentPost = {
  name: string
  key: string
  color: string
  defaultTtl?: number | undefined
  secureMode?: boolean | undefined
  defaultTrackEvents?: boolean | undefined
  confirmChanges?: boolean | undefined
  requireComments?: boolean | undefined
  tags?: string[] | undefined
  source?: SourceEnv | undefined
  critical?: boolean | undefined
}
type NamingConvention = {
  case?: 'camelCase' | 'upperCamelCase' | 'snakeCase' | 'kebabCase' | 'constantCase' | undefined
  prefix?: string | undefined
}
type ProjectPost = {
  name: string
  key: string
  includeInSnippetByDefault?: boolean | undefined
  defaultClientSideAvailability?: DefaultClientSideAvailabilityPost | undefined
  tags?: string[] | undefined
  environments?: EnvironmentPost[] | undefined
  namingConvention?: NamingConvention | undefined
}
type ProjectRep = {
  _links: { [x: string]: Link }
  _id: string
  key: string
  includeInSnippetByDefault: boolean
  defaultClientSideAvailability?: ClientSideAvailability | undefined
  name: string
  _access?: Access | undefined
  tags: string[]
  defaultReleasePipelineKey?: string | undefined
  environments: Environment[]
}
type ContextKindEnvironmentObservation = { environmentKey: string; lastSeen: UnixMillis }
type ContextKindCreatedFrom = string
type ContextKindRep = {
  key: string
  name: string
  description: string
  version: number
  creationDate: UnixMillis
  lastModified: UnixMillis
  lastSeen?: UnixMillis | undefined
  environmentObservations?: ContextKindEnvironmentObservation[] | undefined
  createdFrom: ContextKindCreatedFrom
  hideInTargeting?: boolean | undefined
  archived?: boolean | undefined
  _links?: { [x: string]: Link } | undefined
}
type ContextKindsCollectionRep = { items: ContextKindRep[]; _links: { [x: string]: Link } }
type UpsertContextKindPayload = {
  name: string
  description?: string | undefined
  hideInTargeting?: boolean | undefined
  archived?: boolean | undefined
  version?: number | undefined
}
type UpsertResponseRep = { status?: string | undefined; _links?: { [x: string]: Link } | undefined }
type ContextAttributeName = { name: string; weight: number; redacted?: boolean | undefined }
type ContextAttributeNames = { kind: string; names: ContextAttributeName[] }
type ContextAttributeNamesCollection = { items: ContextAttributeNames[] }
type ContextAttributeValue = { name: { [x: string]: unknown }; weight: number }
type ContextAttributeValues = { kind: string; values: ContextAttributeValue[] }
type ContextAttributeValuesCollection = { items: ContextAttributeValues[] }
type ContextSearch = {
  filter?: string | undefined
  sort?: string | undefined
  limit?: number | undefined
  continuationToken?: string | undefined
}
type ContextRecord = {
  lastSeen?: string | undefined
  applicationId?: string | undefined
  context: { [x: string]: unknown }
  _links?: { [x: string]: Link } | undefined
  _access?: Access | undefined
  associatedContexts?: number | undefined
}
type Contexts = {
  _links?: { [x: string]: Link } | undefined
  totalCount?: number | undefined
  _environmentId: string
  continuationToken?: string | undefined
  items: ContextRecord[]
}
type ValuePut = { setting?: { [x: string]: unknown } | undefined; comment?: string | undefined }
type FlagRep = {
  targetingRule?: string | undefined
  targetingRuleDescription?: string | undefined
  targetingRuleClauses?: { [x: string]: unknown }[] | undefined
  flagConfigVersion?: number | undefined
  notInExperimentVariationId?: string | undefined
  _links: { [x: string]: Link }
}
type MetricInGroupRep = {
  key: string
  _versionId?: string | undefined
  name: string
  kind: 'pageview' | 'click' | 'custom' | 'trace'
  isNumeric?: boolean | undefined
  unitAggregationType?: 'sum' | 'average' | 'count_distinct' | undefined
  analysisType?: 'mean' | 'percentile' | undefined
  eventKey?: string | undefined
  analysisUnit?: string | undefined
  _links: { [x: string]: Link }
  nameInGroup?: string | undefined
  randomizationUnits?: string[] | undefined
  analysisUnits?: string[] | undefined
}
type DependentMetricOrMetricGroupRep = {
  key: string
  _versionId: string
  name: string
  kind: 'pageview' | 'click' | 'custom' | 'trace' | 'funnel' | 'standard'
  isNumeric?: boolean | undefined
  eventKey?: string | undefined
  _links: { [x: string]: Link }
  isGroup: boolean
  metrics?: MetricInGroupRep[] | undefined
  analysisType?: 'mean' | 'percentile' | undefined
  analysisUnit?: string | undefined
}
type MetricV2Rep = {
  key: string
  _versionId?: string | undefined
  name: string
  kind: 'pageview' | 'click' | 'custom' | 'trace'
  isNumeric?: boolean | undefined
  unitAggregationType?: 'sum' | 'average' | 'count_distinct' | undefined
  analysisType?: 'mean' | 'percentile' | undefined
  eventKey?: string | undefined
  analysisUnit?: string | undefined
  _links: { [x: string]: Link }
}
type DependentMetricGroupRepWithMetrics = {
  key: string
  name: string
  kind: 'funnel' | 'standard'
  _links: { [x: string]: Link }
  metrics?: MetricInGroupRep[] | undefined
}
type ParameterRep = { variationId?: string | undefined; flagKey?: string | undefined }
type TreatmentRep = {
  _id?: string | undefined
  name: string
  allocationPercent: string
  baseline?: boolean | undefined
  parameters?: ParameterRep[] | undefined
  assignmentVariantId?: string | undefined
}
type LayerSnapshotRep = {
  key: string
  name: string
  reservationPercent: number
  otherReservationPercent: number
}
type CovariateInfoRep = { id: string; fileName: string; createdAt: UnixMillis }
type IterationAssignmentDataSourceRep = {
  key: string
  name: string
  experimentId: string
  startTime?: UnixMillis | undefined
  endTime?: UnixMillis | undefined
}
type IterationRep = {
  _id?: string | undefined
  hypothesis: string
  status: 'not_started' | 'running' | 'stopped'
  createdAt: UnixMillis
  startedAt?: UnixMillis | undefined
  endedAt?: UnixMillis | undefined
  winningTreatmentId?: string | undefined
  winningReason?: string | undefined
  canReshuffleTraffic?: boolean | undefined
  flags?: { [x: string]: FlagRep } | undefined
  reallocationFrequencyMillis?: number | undefined
  version?: number | undefined
  primaryMetric?: DependentMetricOrMetricGroupRep | undefined
  primarySingleMetric?: MetricV2Rep | undefined
  primaryFunnel?: DependentMetricGroupRepWithMetrics | undefined
  randomizationUnit?: string | undefined
  attributes?: string[] | undefined
  treatments?: TreatmentRep[] | undefined
  secondaryMetrics?: MetricV2Rep[] | undefined
  metrics?: DependentMetricOrMetricGroupRep[] | undefined
  layerSnapshot?: LayerSnapshotRep | undefined
  covariateInfo?: CovariateInfoRep | undefined
  assignmentDataSource?: IterationAssignmentDataSourceRep | undefined
}
type AnalysisConfigRep = {
  bayesianThreshold?: string | undefined
  significanceThreshold?: string | undefined
  testDirection?: string | undefined
  multipleComparisonCorrectionMethod?: 'bonferroni' | 'benjamini-hochberg' | undefined
  multipleComparisonCorrectionScope?:
    | 'variations'
    | 'variations-and-metrics'
    | 'metrics'
    | undefined
  sequentialTestingEnabled?: boolean | undefined
}
type FieldAction = string
type MutableFieldsByStatusRep = {
  not_started?: { [x: string]: FieldAction[] } | undefined
  running?: { [x: string]: FieldAction[] } | undefined
  stopped?: { [x: string]: FieldAction[] } | undefined
}
type Experiment = {
  _id?: string | undefined
  key: string
  name: string
  description?: string | undefined
  _maintainerId: string
  _creationDate: UnixMillis
  environmentKey: string
  methodology?: 'bayesian' | 'frequentist' | 'export_only' | undefined
  dataSource?: 'launchdarkly' | 'snowflake' | undefined
  assignmentSourceType?:
    | 'launchdarkly'
    | 'snowflake'
    | 'databricks'
    | 'redshift'
    | 'bigquery'
    | 'clickhouse'
    | undefined
  archivedDate?: UnixMillis | undefined
  tags?: string[] | undefined
  _links: { [x: string]: Link }
  holdoutId?: string | undefined
  currentIteration?: IterationRep | undefined
  type?: string | undefined
  _access?: Access | undefined
  draftIteration?: IterationRep | undefined
  previousIterations?: IterationRep[] | undefined
  analysisConfig?: AnalysisConfigRep | undefined
  mutableFieldsByStatus?: MutableFieldsByStatusRep | undefined
}
type ExperimentCollectionRep = {
  items: Experiment[]
  total_count?: number | undefined
  _links?: { [x: string]: Link } | undefined
}
type MetricInput = {
  key: string
  isGroup?: boolean | undefined
  primary?: boolean | undefined
  analysisUnit?: string | undefined
}
type MetricsInput = MetricInput[]
type TreatmentParameterInput = { flagKey: string; variationId: string }
type TreatmentInput = {
  name: string
  baseline: boolean
  allocationPercent: string
  parameters: TreatmentParameterInput[]
  assignmentVariantId?: string | undefined
}
type TreatmentsInput = TreatmentInput[]
type FlagInput = {
  ruleId: string
  flagConfigVersion: number
  notInExperimentVariationId?: string | undefined
}
type FlagsInput = { [x: string]: FlagInput }
type AssignmentDataSourceInput = {
  key: string
  experimentId?: string | undefined
  startTime?: UnixMillis | undefined
  endTime?: UnixMillis | undefined
}
type IterationInput = {
  hypothesis: string
  canReshuffleTraffic?: boolean | undefined
  metrics: MetricsInput
  primarySingleMetricKey?: string | undefined
  primaryFunnelKey?: string | undefined
  treatments: TreatmentsInput
  flags: FlagsInput
  assignmentDataSource?: AssignmentDataSourceInput | undefined
  randomizationUnit?: string | undefined
  reallocationFrequencyMillis?: number | undefined
  covariateId?: string | undefined
  attributes?: string[] | undefined
}
type AnalysisConfigInput = {
  bayesianThreshold?: string | undefined
  significanceThreshold?: string | undefined
  testDirection?: string | undefined
  multipleComparisonCorrectionMethod?: 'bonferroni' | 'benjamini-hochberg' | undefined
  multipleComparisonCorrectionScope?:
    | 'variations'
    | 'variations-and-metrics'
    | 'metrics'
    | undefined
  sequentialTestingEnabled?: boolean | undefined
}
type ExperimentPost = {
  name: string
  description?: string | undefined
  maintainerId?: string | undefined
  key: string
  iteration: IterationInput
  holdoutId?: string | undefined
  tags?: string[] | undefined
  methodology?: 'bayesian' | 'frequentist' | 'export_only' | undefined
  analysisConfig?: AnalysisConfigInput | undefined
  dataSource?: 'launchdarkly' | 'snowflake' | undefined
  type?: 'experiment' | 'mab' | 'holdout' | undefined
}
type ExperimentPatchInput = { comment?: string | undefined; instructions: Instructions }
type ContextInstance = { [x: string]: { [x: string]: unknown } }
type ContextInstanceEvaluationReason = {
  kind: string
  ruleIndex?: number | undefined
  ruleID?: string | undefined
  prerequisiteKey?: string | undefined
  inExperiment?: boolean | undefined
  errorKind?: string | undefined
}
type ContextInstanceEvaluation = {
  name: string
  key: string
  _value: { [x: string]: unknown }
  reason?: ContextInstanceEvaluationReason | undefined
  _links: { [x: string]: Link }
}
type ContextInstanceEvaluations = {
  items: ContextInstanceEvaluation[]
  totalCount?: number | undefined
  _links: { [x: string]: Link }
}
type FollowFlagMember = {
  _links: { [x: string]: Link }
  _id: string
  firstName?: string | undefined
  lastName?: string | undefined
  role: string
  email: string
}
type FollowersPerFlag = { flagKey?: string | undefined; followers?: FollowFlagMember[] | undefined }
type FlagFollowersByProjEnvGetRep = {
  _links: { [x: string]: Link }
  items?: FollowersPerFlag[] | undefined
}
type RelatedExperimentRep = {
  key?: string | undefined
  name?: string | undefined
  environment?: string | undefined
}
type SimpleHoldoutRep = {
  _id?: string | undefined
  key?: string | undefined
  name?: string | undefined
  status?: string | undefined
  createdAt?: UnixMillis | undefined
  updatedAt?: UnixMillis | undefined
  experiments?: RelatedExperimentRep[] | undefined
}
type HoldoutsCollectionRep = {
  items?: SimpleHoldoutRep[] | undefined
  _links?: { [x: string]: Link } | undefined
  total_count?: number | undefined
}
type HoldoutPostRequest = {
  name?: string | undefined
  key?: string | undefined
  description?: string | undefined
  randomizationunit?: string | undefined
  attributes?: string[] | undefined
  holdoutamount?: string | undefined
  primarymetrickey?: string | undefined
  metrics?: MetricInput[] | undefined
  prerequisiteflagkey?: string | undefined
  maintainerId?: string | undefined
}
type HoldoutRep = {
  _id: string
  status: 'created' | 'enabled' | 'running' | 'ended'
  description?: string | undefined
  holdoutAmount: string
  createdAt: UnixMillis
  updatedAt: UnixMillis
  baseExperiment: Experiment
  experiments?: RelatedExperimentRep[] | undefined
}
type HoldoutDetailRep = {
  _id: string
  status: 'created' | 'enabled' | 'running' | 'ended'
  description?: string | undefined
  holdoutAmount: string
  isDirty?: boolean | undefined
  createdAt: UnixMillis
  updatedAt: UnixMillis
  baseExperiment: Experiment
  relatedExperiments?: Experiment[] | undefined
}
type HoldoutPatchInput = { comment?: string | undefined; instructions: Instructions }
type ContextInstanceSegmentMembership = {
  name: string
  key: string
  description: string
  unbounded: boolean
  external: string
  isMember: boolean
  isIndividuallyTargeted: boolean
  isRuleTargeted: boolean
  _links: { [x: string]: Link }
}
type ContextInstanceSegmentMemberships = {
  items: ContextInstanceSegmentMembership[]
  _links: { [x: string]: Link }
}
type RandomizationUnitRep = {
  randomizationUnit?: string | undefined
  default?: boolean | undefined
  _hidden?: boolean | undefined
  _displayName?: string | undefined
}
type RandomizationSettingsRep = {
  _projectId?: string | undefined
  _projectKey?: string | undefined
  randomizationUnits?: RandomizationUnitRep[] | undefined
  _creationDate?: UnixMillis | undefined
  _links?: { [x: string]: Link } | undefined
}
type RandomizationUnitInput = {
  randomizationUnit: string
  default?: boolean | undefined
  standardRandomizationUnit?: string | undefined
}
type RandomizationSettingsPut = { randomizationUnits: RandomizationUnitInput[] }
type BooleanDefaults = {
  trueDisplayName?: string | undefined
  falseDisplayName?: string | undefined
  trueDescription?: string | undefined
  falseDescription?: string | undefined
  onVariation?: number | undefined
  offVariation?: number | undefined
}
type FlagDefaultsRep = {
  _links?: { [x: string]: Link } | undefined
  key?: string | undefined
  tags?: string[] | undefined
  temporary?: boolean | undefined
  defaultClientSideAvailability?: ClientSideAvailability | undefined
  booleanDefaults?: BooleanDefaults | undefined
}
type BooleanFlagDefaults = {
  trueDisplayName: string
  falseDisplayName: string
  trueDescription: string
  falseDescription: string
  onVariation: number
  offVariation: number
}
type DefaultClientSideAvailability = { usingMobileKey: boolean; usingEnvironmentId: boolean }
type UpsertPayloadRep = {
  _links?: { [x: string]: Link } | undefined
  tags: string[]
  temporary: boolean
  booleanDefaults: BooleanFlagDefaults
  defaultClientSideAvailability: DefaultClientSideAvailability
}
type UpsertFlagDefaultsPayload = {
  tags: string[]
  temporary: boolean
  booleanDefaults: BooleanFlagDefaults
  defaultClientSideAvailability: DefaultClientSideAvailability
}
type FlagConfigApprovalRequestsResponse = {
  items: FlagConfigApprovalRequestResponse[]
  _links: { [x: string]: Link }
}
type CreateFlagConfigApprovalRequestRequest = {
  comment?: string | undefined
  description: string
  instructions: Instructions
  notifyMemberIds?: string[] | undefined
  notifyTeamKeys?: string[] | undefined
  executionDate?: UnixMillis | undefined
  operatingOnId?: string | undefined
  integrationConfig?: FormVariableConfig | undefined
}
type SourceFlag = { key: string; version?: number | undefined }
type CreateCopyFlagConfigApprovalRequestRequest = {
  comment?: string | undefined
  description: string
  notifyMemberIds?: string[] | undefined
  notifyTeamKeys?: string[] | undefined
  source: SourceFlag
  includedActions?:
    | (
        | 'updateOn'
        | 'updateFallthrough'
        | 'updateOffVariation'
        | 'updateRules'
        | 'updateTargets'
        | 'updatePrerequisites'
      )[]
    | undefined
  excludedActions?:
    | (
        | 'updateOn'
        | 'updateFallthrough'
        | 'updateOffVariation'
        | 'updateRules'
        | 'updateTargets'
        | 'updatePrerequisites'
      )[]
    | undefined
}
type FlagFollowersGetRep = { _links: { [x: string]: Link }; items: FollowFlagMember[] }
type FeatureFlagScheduledChange = {
  _id: FeatureWorkflowId
  _creationDate: UnixMillis
  _maintainerId: string
  _maintainerServiceTokenId?: string | undefined
  _version: number
  executionDate: UnixMillis
  instructions: Instructions
  conflicts?: { [x: string]: unknown } | undefined
  _links?: { [x: string]: Link } | undefined
}
type FeatureFlagScheduledChanges = {
  items: FeatureFlagScheduledChange[]
  _links?: { [x: string]: Link } | undefined
}
type PostFlagScheduledChangesInput = {
  comment?: string | undefined
  executionDate: UnixMillis
  instructions: Instructions
}
type FlagScheduledChangesInput = { comment?: string | undefined; instructions: Instructions }
type ConflictOutput = { stageId: string; message: string }
type ExecutionOutput = { status: string; stopDate?: UnixMillis | undefined }
type ScheduleKind = string
type DurationUnit = string
type ReviewOutput = {
  _id: string
  kind: string
  creationDate?: UnixMillis | undefined
  comment?: string | undefined
  memberId?: string | undefined
  serviceTokenId?: string | undefined
}
type ConditionOutput = {
  _id: string
  kind?: string | undefined
  _execution: ExecutionOutput
  scheduleKind?: ScheduleKind | undefined
  executionDate?: UnixMillis | undefined
  waitDuration?: number | undefined
  waitDurationUnit?: DurationUnit | undefined
  description: string
  notifyMemberIds: string[]
  allReviews: ReviewOutput[]
  reviewStatus: string
  appliedDate?: UnixMillis | undefined
  creationConfig?: FormVariableConfig | undefined
}
type ActionOutput = { kind: string; instructions: Instructions }
type StageOutput = {
  _id: string
  name?: string | undefined
  conditions: ConditionOutput[]
  action: ActionOutput
  _execution: ExecutionOutput
}
type RuleClause = {
  attribute?: string | undefined
  op?:
    | 'in'
    | 'endsWith'
    | 'startsWith'
    | 'matches'
    | 'contains'
    | 'lessThan'
    | 'lessThanOrEqual'
    | 'greaterThan'
    | 'greaterThanOrEqual'
    | 'before'
    | 'after'
    | 'segmentMatch'
    | 'semVerEqual'
    | 'semVerLessThan'
    | 'semVerGreaterThan'
    | undefined
  negate?: boolean | undefined
}
type ParameterDefault = {
  value?: { [x: string]: unknown } | undefined
  booleanVariationValue?: boolean | undefined
  ruleClause?: RuleClause | undefined
}
type WorkflowTemplateParameter = {
  _id?: ObjectId | undefined
  path?: string | undefined
  default?: ParameterDefault | undefined
  valid?: boolean | undefined
}
type WorkflowTemplateMetadata = { parameters?: WorkflowTemplateParameter[] | undefined }
type CustomWorkflowOutput = {
  _id: string
  _version: number
  _conflicts: ConflictOutput[]
  _creationDate: UnixMillis
  _maintainerId: string
  _links: { [x: string]: Link }
  name: string
  description?: string | undefined
  kind?: string | undefined
  stages?: StageOutput[] | undefined
  _execution: ExecutionOutput
  meta?: WorkflowTemplateMetadata | undefined
  templateKey?: string | undefined
}
type CustomWorkflowsListingOutput = {
  items: CustomWorkflowOutput[]
  totalCount: number
  _links: { [x: string]: Link }
}
type ConditionKind = string
type ConditionInput = {
  scheduleKind?: ScheduleKind | undefined
  executionDate?: UnixMillis | undefined
  waitDuration?: number | undefined
  waitDurationUnit?: DurationUnit | undefined
  executeNow?: boolean | undefined
  description?: string | undefined
  notifyMemberIds?: string[] | undefined
  notifyTeamKeys?: string[] | undefined
  integrationConfig?: FormVariableConfig | undefined
  kind?: ConditionKind | undefined
}
type ActionInput = { instructions?: { [x: string]: unknown } | undefined }
type StageInput = {
  name?: string | undefined
  executeConditionsInSequence?: boolean | undefined
  conditions?: ConditionInput[] | undefined
  action?: ActionInput | undefined
}
type CustomWorkflowInput = {
  maintainerId?: ObjectId | undefined
  name: string
  description?: string | undefined
  stages?: StageInput[] | undefined
  templateKey?: string | undefined
}
type FlagSempatch = { instructions: Instructions; comment?: string | undefined }
type MigrationSafetyIssueRep = {
  causingRuleId?: string | undefined
  affectedRuleIds?: string[] | undefined
  issue?: string | undefined
  oldSystemAffected?: boolean | undefined
}
type StatusServiceUnavailable = { code: string; message: string }
type CreatePipelineReleaseInput = {
  releaseVariationId?: string | undefined
  releasePipelineKey: string
}
type PipelineReleaseGuardianConfigurationInput = {
  monitoringWindowMilliseconds?: bigint | undefined
  rolloutWeight?: number | undefined
  rollbackOnRegression?: boolean | undefined
  randomizationUnit?: string | undefined
}
type PipelineReleaseAudienceConfigInput = {
  audienceId?: string | undefined
  releaseGuardianConfiguration?: PipelineReleaseGuardianConfigurationInput | undefined
  notifyMemberIds?: string[] | undefined
  notifyTeamKeys?: string[] | undefined
}
type UpdatePhaseStatusInput = {
  status?: PhaseStatus | undefined
  audiences?: PipelineReleaseAudienceConfigInput[] | undefined
}
type LayerReservationRep = { experimentKey: string; flagKey: string; reservationPercent: number }
type LayerConfigurationRep = { reservations: LayerReservationRep[] }
type LayerRep = {
  key: string
  name: string
  description: string
  createdAt: UnixMillis
  randomizationUnit?: string | undefined
  environments?: { [x: string]: LayerConfigurationRep } | undefined
}
type LayerCollectionRep = { items: LayerRep[]; totalCount: number; _links: { [x: string]: Link } }
type LayerPost = { key: string; name: string; description: string }
type LayerPatchInput = {
  comment?: string | undefined
  environmentKey?: string | undefined
  instructions: Instructions
}
type MaintainerRep = {
  key: string
  kind: 'member' | 'team'
  _member?: MemberSummary | undefined
  _team?: MemberTeamSummaryRep | undefined
}
type MetricGroupRep = {
  _id: string
  key: string
  name: string
  kind: 'funnel' | 'standard'
  description?: string | undefined
  _links: { [x: string]: Link }
  _access?: Access | undefined
  tags: string[]
  _creationDate: UnixMillis
  _lastModified: UnixMillis
  maintainer: MaintainerRep
  metrics: MetricInGroupRep[]
  _version: number
  experiments?: DependentExperimentListRep | undefined
  experimentCount?: number | undefined
  activeExperimentCount?: number | undefined
  activeGuardedRolloutCount?: number | undefined
}
type MetricGroupCollectionRep = {
  items: MetricGroupRep[]
  _links?: { [x: string]: Link } | undefined
  totalCount?: number | undefined
}
type MetricInMetricGroupInput = { key: string; nameInGroup: string }
type MetricGroupPost = {
  key: string
  name: string
  kind: 'funnel' | 'standard'
  description?: string | undefined
  maintainerId: string
  tags: string[]
  metrics: MetricInMetricGroupInput[]
}
type Audience = {
  environment?: EnvironmentSummary | undefined
  name: string
  configuration?: AudienceConfiguration | undefined
  segmentKeys?: string[] | undefined
}
type Audiences = Audience[]
type Phase = {
  id: string
  audiences: Audiences
  name: string
  configuration?: PhaseConfiguration | undefined
}
type ReleasePipeline = {
  createdAt: string
  description?: string | undefined
  key: string
  name: string
  phases: Phase[]
  tags?: string[] | undefined
  _version?: number | undefined
  _access?: Access | undefined
  isProjectDefault?: boolean | undefined
  _isLegacy?: boolean | undefined
}
type ReleasePipelineCollection = { items: ReleasePipeline[]; totalCount: number }
type AudiencePost = {
  environmentKey: string
  name: string
  segmentKeys?: string[] | undefined
  configuration?: AudienceConfiguration | undefined
}
type CreatePhaseInput = {
  audiences: AudiencePost[]
  name: string
  configuration?: PhaseConfiguration | undefined
}
type CreateReleasePipelineInput = {
  description?: string | undefined
  key: string
  name: string
  phases: CreatePhaseInput[]
  tags?: string[] | undefined
  isProjectDefault?: boolean | undefined
  isLegacy?: boolean | undefined
}
type UpdateReleasePipelineInput = {
  description?: string | undefined
  name: string
  phases: CreatePhaseInput[]
  tags?: string[] | undefined
}
type PipelineReleaseProgression = {
  _createdAt: UnixMillis
  _completedAt?: UnixMillis | undefined
  flagKey: string
  activePhaseId?: string | undefined
  activePhaseStatus?: PhaseStatus | undefined
  _links: { [x: string]: Link }
}
type PhaseInfo = { _id: string; name: string; releaseCount: number }
type PipelineReleaseProgressionCollection = {
  activeCount: number
  completedCount: number
  items: PipelineReleaseProgression[]
  phases: PhaseInfo[]
  totalCount: number
  _links: { [x: string]: Link }
}
type IpList = { addresses: string[]; outboundAddresses: string[] }
type RoleType = string
type ResourceCategory = string
type AssignedToRep = { membersCount?: number | undefined; teamsCount?: number | undefined }
type CustomRole = {
  _id: string
  _links: { [x: string]: Link }
  _access?: Access | undefined
  description?: string | undefined
  key: string
  name: string
  policy: Statement[]
  basePermissions?: RoleType | undefined
  resourceCategory?: ResourceCategory | undefined
  assignedTo?: AssignedToRep | undefined
  _presetBundleVersion?: number | undefined
  _presetStatements?: Statement[] | undefined
}
type CustomRoles = {
  _links?: { [x: string]: Link } | undefined
  items: CustomRole[]
  totalCount?: number | undefined
}
type CustomRolePost = {
  name: string
  key: string
  description?: string | undefined
  policy: StatementPostList
  basePermissions?: RoleType | undefined
  resourceCategory?: ResourceCategory | undefined
}
type UserSegments = {
  items: UserSegment[]
  _links: { [x: string]: Link }
  totalCount?: number | undefined
}
type SegmentBody = {
  name: string
  key: string
  description?: string | undefined
  tags?: string[] | undefined
  unbounded?: boolean | undefined
  unboundedContextKind?: string | undefined
}
type SegmentUserList = { add?: string[] | undefined; remove?: string[] | undefined }
type SegmentUserState = {
  included?: SegmentUserList | undefined
  excluded?: SegmentUserList | undefined
}
type BigSegmentTarget = { userKey: string; included: boolean; excluded: boolean }
type InitiatorRep = { name?: string | undefined; email?: string | undefined }
type Export = {
  id: string
  segmentKey: string
  creationTime: UnixMillis
  status: string
  sizeBytes: bigint
  size: string
  initiator: InitiatorRep
  _links: { [x: string]: Link }
}
type FileRep = { filename?: string | undefined; status?: string | undefined }
type Import = {
  id: string
  segmentKey: string
  creationTime: UnixMillis
  mode: string
  status: 'preparing' | 'pending_approval' | 'ready' | 'in_progress' | 'complete' | 'stopped'
  files?: FileRep[] | undefined
  _links: { [x: string]: Link }
}
type PatchSegmentExpiringTargetInstruction = {
  kind: 'addExpiringTarget' | 'updateExpiringTarget' | 'removeExpiringTarget'
  contextKey: string
  contextKind: string
  targetType: 'included' | 'excluded'
  value?: bigint | undefined
  version?: number | undefined
}
type PatchSegmentExpiringTargetInputRep = {
  comment?: string | undefined
  instructions: PatchSegmentExpiringTargetInstruction[]
}
type PatchSegmentInstruction = {
  kind: 'addExpireUserTargetDate' | 'updateExpireUserTargetDate' | 'removeExpireUserTargetDate'
  userKey: string
  targetType: 'included' | 'excluded'
  value?: number | undefined
  version?: number | undefined
}
type PatchSegmentRequest = { comment?: string | undefined; instructions: PatchSegmentInstruction[] }
type ProjectSummary = { _id: string; _links: { [x: string]: Link }; key: string; name: string }
type TeamProjects = { totalCount?: number | undefined; items?: ProjectSummary[] | undefined }
type TeamCustomRole = {
  key?: string | undefined
  name?: string | undefined
  projects?: TeamProjects | undefined
  appliedOn?: UnixMillis | undefined
}
type TeamCustomRoles = {
  totalCount?: number | undefined
  items?: TeamCustomRole[] | undefined
  _links?: { [x: string]: Link } | undefined
}
type TeamMembers = { totalCount?: number | undefined }
type TeamMaintainers = {
  totalCount?: number | undefined
  items?: MemberSummary[] | undefined
  _links?: { [x: string]: Link } | undefined
}
type Team = {
  description?: string | undefined
  key?: string | undefined
  name?: string | undefined
  _access?: Access | undefined
  _creationDate?: UnixMillis | undefined
  _links?: { [x: string]: Link } | undefined
  _lastModified?: UnixMillis | undefined
  _version?: number | undefined
  _idpSynced?: boolean | undefined
  roleAttributes?: RoleAttributeMap | undefined
  roles?: TeamCustomRoles | undefined
  members?: TeamMembers | undefined
  projects?: TeamProjects | undefined
  maintainers?: TeamMaintainers | undefined
}
type Teams = {
  items: Team[]
  _links?: { [x: string]: Link } | undefined
  totalCount?: number | undefined
}
type PermissionGrantInput = {
  actionSet?: 'maintainTeam' | undefined
  actions?: string[] | undefined
  memberIDs?: string[] | undefined
}
type TeamPostInput = {
  customRoleKeys?: string[] | undefined
  description?: string | undefined
  key: string
  memberIDs?: string[] | undefined
  name: string
  permissionGrants?: PermissionGrantInput[] | undefined
  roleAttributes?: RoleAttributeMap | undefined
}
type TeamsPatchInput = { comment?: string | undefined; instructions: Instructions }
type BulkEditTeamsRep = {
  memberIDs?: string[] | undefined
  teamKeys?: string[] | undefined
  errors?: { [x: string]: string }[] | undefined
}
type TeamPatchInput = { comment?: string | undefined; instructions: Instructions }
type MemberImportItem = { message?: string | undefined; status: string; value: string }
type TeamImportsRep = { items?: MemberImportItem[] | undefined }
type WorkflowTemplateOutput = {
  _id: string
  _key: string
  name?: string | undefined
  _creationDate: UnixMillis
  _ownerId: string
  _maintainerId: string
  _links: { [x: string]: Link }
  description?: string | undefined
  stages?: StageOutput[] | undefined
}
type WorkflowTemplatesListingOutputRep = { items: WorkflowTemplateOutput[] }
type CreateWorkflowTemplateInput = {
  key: string
  name?: string | undefined
  description?: string | undefined
  workflowId?: FeatureWorkflowId | undefined
  stages?: StageInput[] | undefined
  projectKey?: string | undefined
  environmentKey?: string | undefined
  flagKey?: string | undefined
}
type Token = {
  _id: ObjectId
  ownerId: ObjectId
  memberId: ObjectId
  _member?: MemberSummary | undefined
  name?: string | undefined
  description?: string | undefined
  creationDate: UnixMillis
  lastModified: UnixMillis
  customRoleIds?: ObjectId[] | undefined
  inlineRole?: Statement[] | undefined
  role?: string | undefined
  token?: string | undefined
  serviceToken?: boolean | undefined
  _links: { [x: string]: Link }
  defaultApiVersion?: number | undefined
  lastUsed?: UnixMillis | undefined
  expiry?: UnixMillis | undefined
}
type Tokens = {
  items?: Token[] | undefined
  _links?: { [x: string]: Link } | undefined
  totalCount?: number | undefined
}
type AccessTokenPost = {
  name?: string | undefined
  description?: string | undefined
  role?: 'reader' | 'writer' | 'admin' | undefined
  customRoleIds?: string[] | undefined
  inlineRole?: StatementPost[] | undefined
  serviceToken?: boolean | undefined
  defaultApiVersion?: number | undefined
  expiry?: UnixMillis | undefined
}
type SeriesMetadataRep = { [x: string]: { [x: string]: unknown } }
type SeriesTimeSliceRep = { [x: string]: bigint }
type SeriesListRep = {
  _links: { [x: string]: { [x: string]: unknown } }
  metadata: SeriesMetadataRep[]
  series: SeriesTimeSliceRep[]
}
type DataExportSeriesListRep = {
  _links: { [x: string]: { [x: string]: unknown } }
  metadata: SeriesMetadataRep[]
  series: SeriesTimeSliceRep[]
  dataThrough?: string | undefined
  delayed?: boolean | undefined
}
type DataExportProjectIdentityIncompleteErrorRep = {
  code?: string | undefined
  message?: string | undefined
}
type SdkListRep = { _links: { [x: string]: { [x: string]: unknown } }; sdks: string[] }
type SdkVersionDetailsRep = {
  name?: string | undefined
  version?: string | undefined
  type?: string | undefined
  projectId?: string | undefined
  projectKey?: string | undefined
  projectName?: string | undefined
  environmentId?: string | undefined
  environmentKey?: string | undefined
  environmentName?: string | undefined
  applicationId?: string | undefined
  ldLatestVersion?: string | undefined
  eolStatus?: string | undefined
  latestReleaseUrl?: string | undefined
  connectionType?: string | undefined
  relayVersion?: string | undefined
  relayEolStatus?: string | undefined
  relayLatestVersion?: string | undefined
  relayLatestReleaseUrl?: string | undefined
}
type SeriesTimeSliceRepFloat = { [x: string]: number }
type SeriesListRepFloat = {
  _links: { [x: string]: { [x: string]: unknown } }
  metadata: SeriesMetadataRep[]
  series: SeriesTimeSliceRepFloat[]
  projectedSeries?: SeriesTimeSliceRepFloat[] | undefined
}
type SdkVersionRep = { sdk: string; version: string }
type SdkVersionListRep = {
  _links: { [x: string]: { [x: string]: unknown } }
  sdkVersions: SdkVersionRep[]
}
type User = {
  key?: string | undefined
  secondary?: string | undefined
  ip?: string | undefined
  country?: string | undefined
  email?: string | undefined
  firstName?: string | undefined
  lastName?: string | undefined
  avatar?: string | undefined
  name?: string | undefined
  anonymous?: boolean | undefined
  custom?: { [x: string]: { [x: string]: unknown } } | undefined
  privateAttrs?: string[] | undefined
}
type UserRecord = {
  lastPing?: string | undefined
  environmentId?: ObjectId | undefined
  ownerId?: ObjectId | undefined
  user?: User | undefined
  sortValue?: { [x: string]: unknown } | undefined
  _links?: { [x: string]: Link } | undefined
  _access?: Access | undefined
}
type Users = { _links?: { [x: string]: Link } | undefined; totalCount: number; items: UserRecord[] }
type UsersRep = {
  _links?: { [x: string]: Link } | undefined
  totalCount: number
  items: UserRecord[]
}
type EvaluationReason = {
  kind: string
  ruleIndex?: number | undefined
  ruleID?: string | undefined
  prerequisiteKey?: string | undefined
  inExperiment?: boolean | undefined
  errorKind?: string | undefined
}
type UserFlagSetting = {
  _links: { [x: string]: Link }
  _value: { [x: string]: unknown }
  setting: { [x: string]: unknown }
  reason?: EvaluationReason | undefined
}
type UserFlagSettings = { items: { [x: string]: UserFlagSetting }; _links: { [x: string]: Link } }
type InstructionUserRequest = {
  kind: 'addExpireUserTargetDate' | 'updateExpireUserTargetDate' | 'removeExpireUserTargetDate'
  flagKey: string
  variationId: string
  value?: number | undefined
  version?: number | undefined
}
type PatchUsersRequest = { comment?: string | undefined; instructions: InstructionUserRequest[] }
type DateVersion = number
type VersionsRep = {
  validVersions: DateVersion[]
  latestVersion: DateVersion
  currentVersion: DateVersion
  beta?: boolean | undefined
}
type Webhook = {
  _links: { [x: string]: Link }
  _id: string
  name?: string | undefined
  url: string
  secret?: string | undefined
  hasBearerToken?: boolean | undefined
  statements?: Statement[] | undefined
  on: boolean
  tags: string[]
  _access?: Access | undefined
}
type Webhooks = { _links: { [x: string]: Link }; items: Webhook[] }
type WebhookPost = {
  name?: string | undefined
  url: string
  secret?: string | undefined
  bearerToken?: string | undefined
  statements?: StatementPostList | undefined
  sign: boolean
  on: boolean
  tags?: string[] | undefined
}
type TagsLink = { href?: string | undefined; type?: string | undefined }
type TagsCollection = {
  items: string[]
  _links: { [x: string]: TagsLink }
  totalCount?: number | undefined
}
type Error = { message: string; code: string }
type DataExportProjectRankComponentsRep = { streaming: bigint }
type DataExportProjectRankRep = {
  projectKey: string
  projectName: string
  rank: number
  usage: bigint
  components: DataExportProjectRankComponentsRep
}
type DataExportProjectRankingPageRep = {
  limit: number
  count: number
  totalCount: number
  nextCursor?: string | undefined
}
type DataExportProjectRankingScopeRep = {
  source: 'streaming'
  dimension: 'project'
  from: bigint
  to: bigint
}
type DataExportProjectRankingRep = {
  items: DataExportProjectRankRep[]
  page: DataExportProjectRankingPageRep
  scope: DataExportProjectRankingScopeRep
}
type DataExportProjectIdentityIncompleteError = {
  message: string
  code: 'data_export_project_identity_incomplete'
}
type AIConfigTargetingDefaults = { onVariation: number; offVariation: number }
type AIConfigTargetingEnvironmentTarget = {
  contextKind: string
  values: string[]
  variation: number
}
type AIConfigTargetingEnvironmentFallthroughRolloutExperimentationAllocation = {
  canReshuffle: boolean
  defaultVariation: number
  type: string
}
type AIConfigTargetingEnvironmentFallthroughRolloutVariation = {
  _untracked?: boolean | undefined
  variation: number
  weight: number
}
type AIConfigTargetingEnvironmentFallthroughRollout = {
  bucketBy?: string | undefined
  contextKind: string
  experimentAllocation?:
    | AIConfigTargetingEnvironmentFallthroughRolloutExperimentationAllocation
    | undefined
  seed?: number | undefined
  variations: AIConfigTargetingEnvironmentFallthroughRolloutVariation[]
}
type AIConfigTargetingEnvironmentFallthrough = {
  variation?: number | undefined
  rollout?: AIConfigTargetingEnvironmentFallthroughRollout | undefined
}
type AIConfigTargetingEnvironmentRuleClause = {
  attribute: string
  contextKind?: string | undefined
  id: string
  negate: boolean
  op: string
  values: { [x: string]: unknown }[]
}
type AIConfigTargetingEnvironmentRule = {
  _id: string
  disabled?: boolean | undefined
  description?: string | undefined
  clauses: AIConfigTargetingEnvironmentRuleClause[]
  variation?: number | undefined
  rollout?: AIConfigTargetingEnvironmentFallthroughRollout | undefined
  trackEvents: boolean
}
type AIConfigTargetingEnvironment = {
  contextTargets: AIConfigTargetingEnvironmentTarget[]
  enabled: boolean
  fallthrough: AIConfigTargetingEnvironmentFallthrough
  lastModified: bigint
  offVariation?: number | undefined
  rules: AIConfigTargetingEnvironmentRule[]
  targets: AIConfigTargetingEnvironmentTarget[]
  trackEvents: boolean
  trackEventsFallthrough: boolean
  _environmentName: string
  _version: number
}
type AiConfigsLink = { href?: string | undefined; type?: string | undefined }
type AiConfigsAccessDeniedReason = {
  resources?: string[] | undefined
  notResources?: string[] | undefined
  actions?: ActionSpecifier[] | undefined
  notActions?: ActionSpecifier[] | undefined
  effect: 'allow' | 'deny'
  role_name?: string | undefined
}
type AiConfigsAccessDenied = { action: string; reason: AiConfigsAccessDeniedReason }
type AiConfigsAccessAllowedReason = {
  resources?: string[] | undefined
  notResources?: string[] | undefined
  actions?: ActionSpecifier[] | undefined
  notActions?: ActionSpecifier[] | undefined
  effect: 'allow' | 'deny'
  role_name?: string | undefined
}
type AiConfigsAccessAllowedRep = { action: string; reason: AiConfigsAccessAllowedReason }
type AiConfigsAccess = { denied: AiConfigsAccessDenied[]; allowed: AiConfigsAccessAllowedRep[] }
type AiConfigsModification = { date?: string | undefined }
type AiConfigsMemberSummary = {
  _links: { [x: string]: AiConfigsLink }
  _id: string
  firstName?: string | undefined
  lastName?: string | undefined
  role: string
  email: string
}
type AiConfigsFilter = {
  type: 'group' | 'contextAttribute' | 'eventProperty'
  attribute?: string | undefined
  op: string
  values: { [x: string]: unknown }[]
  contextKind?: string | undefined
  negate: boolean
}
type AiConfigsMetricEventDefaultRep = { disabled?: boolean | undefined; value?: number | undefined }
type AiConfigsMetricDataSourceRefRep = {
  key: string
  environmentKey?: string | undefined
  _name?: string | undefined
  _integrationKey?: string | undefined
}
type AiConfigsMetricDenominatorRep = {
  eventName?: string | undefined
  isNumeric?: boolean | undefined
  unitAggregationType?: string | undefined
  unitAggregationField?: string | undefined
  valueColumn?: string | undefined
  dataSource?: AiConfigsMetricDataSourceRefRep | undefined
  filters?: AiConfigsFilter | undefined
  windowStartOffset?: bigint | undefined
  windowEndOffset?: bigint | undefined
  winsorLowerPercentile?: number | undefined
  winsorUpperPercentile?: number | undefined
  winsorIncludeImputed?: boolean | undefined
}
type AiConfigsMetricListingRep = {
  experimentCount?: number | undefined
  metricGroupCount?: number | undefined
  guardedRolloutCount?: number | undefined
  releasePolicyCount?: number | undefined
  environmentReleasePlanCount?: number | undefined
  activeExperimentCount?: number | undefined
  activeGuardedRolloutCount?: number | undefined
  _id: string
  _versionId: string
  _version?: number | undefined
  key: string
  name: string
  kind: 'pageview' | 'click' | 'custom' | 'trace'
  _attachedFlagCount?: number | undefined
  _links: { [x: string]: AiConfigsLink }
  _site?: AiConfigsLink | undefined
  _access?: AiConfigsAccess | undefined
  tags: string[]
  _creationDate: bigint
  lastModified?: AiConfigsModification | undefined
  maintainerId?: string | undefined
  _maintainer?: AiConfigsMemberSummary | undefined
  description?: string | undefined
  category?: string | undefined
  isNumeric?: boolean | undefined
  successCriteria?: 'HigherThanBaseline' | 'LowerThanBaseline' | undefined
  unit?: string | undefined
  eventKey?: string | undefined
  randomizationUnits?: string[] | undefined
  analysisUnits?: string[] | undefined
  filters?: AiConfigsFilter | undefined
  unitAggregationType?: 'average' | 'sum' | 'count_distinct' | undefined
  analysisType?: 'mean' | 'percentile' | undefined
  percentileValue?: number | undefined
  eventDefault?: AiConfigsMetricEventDefaultRep | undefined
  dataSource: AiConfigsMetricDataSourceRefRep
  lastSeen?: bigint | undefined
  archived?: boolean | undefined
  archivedAt?: bigint | undefined
  selector?: string | undefined
  urls?: UrlMatcher[] | undefined
  windowStartOffset?: bigint | undefined
  windowEndOffset?: bigint | undefined
  winsorLowerPercentile?: number | undefined
  winsorUpperPercentile?: number | undefined
  winsorIncludeImputed?: boolean | undefined
  traceQuery?: string | undefined
  traceValueLocation?: string | undefined
  unitAggregationField?: string | undefined
  denominator?: AiConfigsMetricDenominatorRep | undefined
}
type AiConfigsExperimentEnabledPeriodRep = {
  startDate?: bigint | undefined
  stopDate?: bigint | undefined
}
type AiConfigsExperimentEnvironmentSettingRep = {
  startDate?: bigint | undefined
  stopDate?: bigint | undefined
  enabledPeriods?: AiConfigsExperimentEnabledPeriodRep[] | undefined
}
type AiConfigsLegacyExperimentRep = {
  metricKey?: string | undefined
  _metric?: AiConfigsMetricListingRep | undefined
  environments?: string[] | undefined
  _environmentSettings?: { [x: string]: AiConfigsExperimentEnvironmentSettingRep } | undefined
}
type AiConfigsExperimentInfoRep = { baselineIdx: number; items: AiConfigsLegacyExperimentRep[] }
type AIConfigTargetingVariationBoolean = boolean
type AIConfigTargetingVariationJSON = { [x: string]: unknown }
type AIConfigTargetingVariationNumber = number
type AIConfigTargetingVariationString = string
type AIConfigTargetingVariationValue =
  | AIConfigTargetingVariationBoolean
  | AIConfigTargetingVariationJSON
  | AIConfigTargetingVariationNumber
  | AIConfigTargetingVariationString
type AIConfigTargetingVariation = {
  _id: string
  description: string
  name: string
  value: AIConfigTargetingVariationValue
}
type AIConfigTargeting = {
  createdAt: bigint
  defaults?: AIConfigTargetingDefaults | undefined
  environments: { [x: string]: AIConfigTargetingEnvironment }
  experiments: AiConfigsExperimentInfoRep
  key: string
  name: string
  tags: string[]
  variations: AIConfigTargetingVariation[]
  _version: number
}
type AIConfigTargetingPatch = {
  comment?: string | undefined
  environmentKey: string
  instructions: { [x: string]: unknown }[]
}
type PaginatedLinks = {
  first?: AiConfigsLink | undefined
  last?: AiConfigsLink | undefined
  next?: AiConfigsLink | undefined
  prev?: AiConfigsLink | undefined
  self: AiConfigsLink
}
type CoreLink = { href: string; type: string }
type ParentAndSelfLinks = { self: CoreLink; parent: CoreLink }
type MaintainerMember = {
  _id: string
  email: string
  firstName?: string | undefined
  lastName?: string | undefined
  role: string
}
type AiConfigsMaintainerTeam = { key: string; name: string }
type AIConfigMaintainer = MaintainerMember | AiConfigsMaintainerTeam
type ParentLink = { parent: CoreLink }
type Classifier = {
  key: string
  type: 'bool' | 'float' | 'enum'
  instructions: string
  criteria?: { [x: string]: unknown } | undefined
}
type Message = { content: string; role: string }
type VariationTool = {
  key: string
  version: number
  customParameters?: { [x: string]: unknown } | undefined
}
type VariationSkill = { key: string; version: number }
type JudgeAttachment = { judgeConfigKey: string; samplingRate: number }
type JudgeConfiguration = { judges?: JudgeAttachment[] | undefined }
type AIConfigVariation = {
  _links?: ParentLink | undefined
  color?: string | undefined
  classifiers?: Classifier[] | undefined
  comment?: string | undefined
  description?: string | undefined
  instructions?: string | undefined
  key: string
  _id: string
  messages?: Message[] | undefined
  model: { [x: string]: unknown }
  modelConfigKey?: string | undefined
  modelConfigVersion?: number | undefined
  name: string
  outputFormat?: { [x: string]: unknown } | undefined
  createdAt: bigint
  version: number
  state?: 'archived' | 'published' | undefined
  _archivedAt?: bigint | undefined
  _publishedAt?: bigint | undefined
  tools?: VariationTool[] | undefined
  skills?: VariationSkill[] | undefined
  judgeConfiguration?: JudgeConfiguration | undefined
  judgingConfigKeys?: string[] | undefined
}
type AIConfigDependency = { type: 'agent-graph'; key: string }
type AIConfig = {
  _access?: AiConfigsAccess | undefined
  _links?: ParentAndSelfLinks | undefined
  _site?: CoreLink | undefined
  description: string
  key: string
  _maintainer?: AIConfigMaintainer | undefined
  mode?: 'agent' | 'completion' | 'judge' | undefined
  name: string
  tags: string[]
  version: number
  variations: AIConfigVariation[]
  createdAt: bigint
  updatedAt: bigint
  evaluationMetricKey?: string | undefined
  evaluationMetricKeys?: string[] | undefined
  isInverted?: boolean | undefined
  defaultThreshold?: number | undefined
  dependencies?: AIConfigDependency[] | undefined
}
type AIConfigs = { _links?: PaginatedLinks | undefined; items: AIConfig[]; totalCount: number }
type VariationToolPost = { key: string; version: number }
type VariationSkillPost = { key: string; version: number }
type AIConfigVariationPost = {
  classifiers?: Classifier[] | undefined
  comment?: string | undefined
  description?: string | undefined
  instructions?: string | undefined
  key: string
  messages?: Message[] | undefined
  model?: { [x: string]: unknown } | undefined
  name: string
  modelConfigKey?: string | undefined
  modelConfigVersion?: number | undefined
  outputFormat?: { [x: string]: unknown } | undefined
  tools?: VariationToolPost[] | undefined
  toolKeys?: string[] | undefined
  skills?: VariationSkillPost[] | undefined
  judgeConfiguration?: JudgeConfiguration | undefined
}
type AIConfigPost = {
  description?: string | undefined
  key: string
  maintainerId?: string | undefined
  maintainerTeamKey?: string | undefined
  mode?: 'agent' | 'completion' | 'judge' | undefined
  name: string
  tags?: string[] | undefined
  viewKeys?: string[] | undefined
  defaultVariation?: AIConfigVariationPost | undefined
  evaluationMetricKey?: string | undefined
  isInverted?: boolean | undefined
  defaultThreshold?: number | undefined
}
type AIConfigPatch = {
  defaultVariationKey?: string | undefined
  description?: string | undefined
  maintainerId?: string | undefined
  maintainerTeamKey?: string | undefined
  name?: string | undefined
  tags?: string[] | undefined
  evaluationMetricKey?: string | undefined
  isInverted?: boolean | undefined
  defaultThreshold?: number | undefined
  clearDefaultThreshold?: boolean | undefined
}
type AIConfigVariationsResponse = { items: AIConfigVariation[]; totalCount: number }
type AIConfigVariationPatch = {
  classifiers?: Classifier[] | undefined
  comment?: string | undefined
  description?: string | undefined
  instructions?: string | undefined
  messages?: Message[] | undefined
  model?: { [x: string]: unknown } | undefined
  modelConfigKey?: string | undefined
  modelConfigVersion?: number | undefined
  name?: string | undefined
  outputFormat?: { [x: string]: unknown } | undefined
  published?: boolean | undefined
  state?: 'archived' | 'published' | undefined
  tools?: VariationToolPost[] | undefined
  toolKeys?: string[] | undefined
  skills?: VariationSkillPost[] | undefined
  judgeConfiguration?: JudgeConfiguration | undefined
}
type QuickStats = {
  activeConfigs: number
  activeExperiments: number
  averageSatisfaction7D?: (number | null) | undefined
  spendMonthToDate?: (number | null) | undefined
}
type JudgeScore = { metricKey: string; score: number; count: number }
type Metrics = {
  inputTokens?: number | undefined
  outputTokens?: number | undefined
  totalTokens?: number | undefined
  generationCount?: number | undefined
  generationSuccessCount?: number | undefined
  generationErrorCount?: number | undefined
  thumbsUp?: number | undefined
  thumbsDown?: number | undefined
  durationMs?: number | undefined
  timeToFirstTokenMs?: number | undefined
  satisfactionRating?: number | undefined
  inputCost?: number | undefined
  outputCost?: number | undefined
  judgeAccuracy?: number | undefined
  judgeRelevance?: number | undefined
  judgeToxicity?: number | undefined
  judgeScores?: JudgeScore[] | undefined
}
type MetricByVariation = { variationKey?: string | undefined; metrics?: Metrics | undefined }
type MetricsByVariation = MetricByVariation[]
type RestrictedModelsRequest = { keys: string[] }
type RestrictedModelError = { key: string; message: string; code: number }
type RestrictedModelsResponse = { successes: string[]; errors: RestrictedModelError[] }
type ModelConfig = {
  _access?: AiConfigsAccess | undefined
  _maintainer?: AIConfigMaintainer | undefined
  name: string
  key: string
  id: string
  icon?: string | undefined
  provider?: string | undefined
  global: boolean
  params?: { [x: string]: unknown } | undefined
  customParams?: { [x: string]: unknown } | undefined
  tags: string[]
  version: number
  costPerInputToken?: number | undefined
  costPerOutputToken?: number | undefined
  costPerCachedInputToken?: number | undefined
  isRestricted: boolean
  usedInCount?: number | undefined
}
type ModelConfigPost = {
  name: string
  key: string
  id: string
  maintainerId?: string | undefined
  maintainerTeamKey?: string | undefined
  icon?: string | undefined
  provider?: string | undefined
  params?: { [x: string]: unknown } | undefined
  customParams?: { [x: string]: unknown } | undefined
  tags?: string[] | undefined
  costPerInputToken?: number | undefined
  costPerOutputToken?: number | undefined
  costPerCachedInputToken?: number | undefined
}
type ModelConfigPatch = {
  id?: string | undefined
  provider?: string | undefined
  name?: string | undefined
  costPerInputToken?: number | undefined
  costPerOutputToken?: number | undefined
  costPerCachedInputToken?: number | undefined
  params?: { [x: string]: unknown } | undefined
  customParams?: { [x: string]: unknown } | undefined
  tags?: string[] | undefined
  maintainerId?: string | undefined
  maintainerTeamKey?: string | undefined
}
type ModelConfigs = {
  _links?: PaginatedLinks | undefined
  items: ModelConfig[]
  totalCount: number
}
type AITool = {
  key: string
  _access?: AiConfigsAccess | undefined
  _links?: ParentAndSelfLinks | undefined
  _site?: CoreLink | undefined
  _maintainer?: AIConfigMaintainer | undefined
  description?: string | undefined
  schema: { [x: string]: unknown }
  customParameters?: { [x: string]: unknown } | undefined
  tags?: string[] | undefined
  version: number
  createdAt: bigint
}
type AITools = { _links?: PaginatedLinks | undefined; items: AITool[]; totalCount: number }
type AIToolPost = {
  key: string
  maintainerId?: string | undefined
  maintainerTeamKey?: string | undefined
  description?: string | undefined
  schema: { [x: string]: unknown }
  customParameters?: { [x: string]: unknown } | undefined
  tags?: string[] | undefined
}
type ToolReference = {
  aiConfigKey: string
  aiConfigName: string
  variationId: string
  variationKey: string
  variationName: string
  toolVersion: number
}
type ToolSkillReference = { skillKey: string; skillVersion: number; toolVersion: number }
type ToolReferences = {
  _links?: PaginatedLinks | undefined
  resourceKey: string
  resourceType: string
  items: ToolReference[]
  totalCount: number
  skills?: ToolSkillReference[] | undefined
  skillsTotalCount?: number | undefined
}
type AIToolPatch = {
  maintainerId?: string | undefined
  maintainerTeamKey?: string | undefined
  description?: string | undefined
  schema?: { [x: string]: unknown } | undefined
  customParameters?: { [x: string]: unknown } | undefined
  tags?: string[] | undefined
}
type PromptSnippet = {
  key: string
  _access?: AiConfigsAccess | undefined
  _links?: ParentAndSelfLinks | undefined
  _site?: CoreLink | undefined
  _maintainer?: AIConfigMaintainer | undefined
  name: string
  description?: string | undefined
  text: string
  tags: string[]
  version: number
  createdAt: bigint
}
type PromptSnippets = {
  _links?: PaginatedLinks | undefined
  items: PromptSnippet[]
  totalCount: number
}
type PromptSnippetPost = {
  key: string
  name: string
  description?: string | undefined
  text: string
  maintainerId?: string | undefined
  maintainerTeamKey?: string | undefined
  tags?: string[] | undefined
}
type PromptSnippetPatch = {
  name?: string | undefined
  description?: string | undefined
  text?: string | undefined
  maintainerId?: string | undefined
  maintainerTeamKey?: string | undefined
  tags?: string[] | undefined
}
type SnippetReference = {
  aiConfigKey: string
  aiConfigName: string
  variationId: string
  variationKey: string
  variationName: string
  resourceVersion: number
}
type SnippetReferences = {
  _links?: PaginatedLinks | undefined
  resourceKey: string
  resourceType: string
  items: SnippetReference[]
  totalCount: number
}
type PinnedSkillToolRef = { key: string; version: number }
type AgentSkill = {
  key: string
  _access?: AiConfigsAccess | undefined
  _links?: ParentAndSelfLinks | undefined
  _maintainer?: AIConfigMaintainer | undefined
  name: string
  description?: string | undefined
  markdown: string
  tags: string[]
  version: number
  tools?: PinnedSkillToolRef[] | undefined
  createdAt: bigint
}
type AgentSkills = { _links?: PaginatedLinks | undefined; items: AgentSkill[]; totalCount: number }
type SkillToolRef = { key: string; version?: number | undefined }
type AgentSkillPost = {
  key: string
  name: string
  description?: string | undefined
  markdown: string
  maintainerId?: string | undefined
  maintainerTeamKey?: string | undefined
  tags?: string[] | undefined
  tools?: SkillToolRef[] | undefined
}
type AgentSkillPatch = {
  name?: string | undefined
  description?: string | undefined
  markdown?: string | undefined
  maintainerId?: string | undefined
  maintainerTeamKey?: string | undefined
  tags?: string[] | undefined
  tools?: SkillToolRef[] | undefined
}
type AgentSkillReference = {
  aiConfigKey: string
  aiConfigName: string
  variationId: string
  variationKey: string
  variationName: string
  resourceVersion: number
}
type AgentSkillReferences = {
  _links?: PaginatedLinks | undefined
  resourceKey: string
  resourceType: string
  items: AgentSkillReference[]
  totalCount: number
}
type AgentGraphMaintainer = MaintainerMember | AiConfigsMaintainerTeam
type AgentGraphEdge = {
  key: string
  sourceConfig: string
  targetConfig: string
  handoff?: { [x: string]: unknown } | undefined
}
type AgentGraph = {
  _access?: AiConfigsAccess | undefined
  _site?: CoreLink | undefined
  key: string
  name: string
  description?: string | undefined
  _maintainer?: AgentGraphMaintainer | undefined
  rootConfigKey?: string | undefined
  edges?: AgentGraphEdge[] | undefined
  createdAt: bigint
  updatedAt: bigint
}
type AgentGraphs = { _links?: PaginatedLinks | undefined; items: AgentGraph[]; totalCount: number }
type AgentGraphEdgePost = {
  key: string
  sourceConfig: string
  targetConfig: string
  handoff?: { [x: string]: unknown } | undefined
}
type AgentGraphPost = {
  key: string
  name: string
  description?: string | undefined
  maintainerId?: string | undefined
  maintainerTeamKey?: string | undefined
  rootConfigKey?: string | undefined
  edges?: AgentGraphEdgePost[] | undefined
}
type AgentGraphPatch = {
  name?: string | undefined
  description?: string | undefined
  maintainerId?: string | undefined
  maintainerTeamKey?: string | undefined
  rootConfigKey?: string | undefined
  edges?: AgentGraphEdge[] | undefined
}
type AgentOptimizationAcceptanceStatement = { statement: string; threshold: number }
type AgentOptimizationJudge = { key: string; threshold: number }
type AgentOptimization = {
  _access?: AiConfigsAccess | undefined
  _links?: ParentAndSelfLinks | undefined
  id: string
  key: string
  aiConfigKey: string
  maxAttempts: number
  modelChoices: string[]
  judgeModel: string
  variableChoices: { [x: string]: unknown }[]
  acceptanceStatements: AgentOptimizationAcceptanceStatement[]
  judges: AgentOptimizationJudge[]
  userInputOptions: string[]
  groundTruthResponses: string[]
  metricKey?: string | undefined
  tokenLimit?: number | undefined
  variationKey?: string | undefined
  label?: string | undefined
  latencyOptimization?: boolean | undefined
  tokenOptimization?: boolean | undefined
  autoCommit?: boolean | undefined
  version: number
  createdAt: bigint
}
type AgentOptimizations = {
  _links?: PaginatedLinks | undefined
  items: AgentOptimization[]
  totalCount: number
}
type AgentOptimizationPost = {
  key: string
  aiConfigKey: string
  maxAttempts: number
  modelChoices?: string[] | undefined
  judgeModel: string
  variableChoices?: { [x: string]: unknown }[] | undefined
  acceptanceStatements?: AgentOptimizationAcceptanceStatement[] | undefined
  judges?: AgentOptimizationJudge[] | undefined
  userInputOptions?: string[] | undefined
  groundTruthResponses?: string[] | undefined
  metricKey?: string | undefined
  tokenLimit?: number | undefined
  variationKey?: string | undefined
  label?: string | undefined
  latencyOptimization?: boolean | undefined
  tokenOptimization?: boolean | undefined
  autoCommit?: boolean | undefined
}
type AgentOptimizationPatch = {
  maxAttempts?: number | undefined
  modelChoices?: string[] | undefined
  judgeModel?: string | undefined
  variableChoices?: { [x: string]: unknown }[] | undefined
  acceptanceStatements?: AgentOptimizationAcceptanceStatement[] | undefined
  judges?: AgentOptimizationJudge[] | undefined
  userInputOptions?: string[] | undefined
  groundTruthResponses?: string[] | undefined
  metricKey?: string | undefined
  tokenLimit?: number | undefined
  variationKey?: string | undefined
  label?: string | undefined
  latencyOptimization?: boolean | undefined
  tokenOptimization?: boolean | undefined
  autoCommit?: boolean | undefined
}
type AgentOptimizationResultStatus = 'RUNNING' | 'PASSED' | 'FAILED' | 'ERRORED'
type AgentOptimizationResultActivity =
  | 'PENDING'
  | 'GENERATING'
  | 'EVALUATING'
  | 'GENERATING_VARIATION'
  | 'VALIDATING'
  | 'COMPLETED'
type AgentOptimizationResult = {
  _access?: AiConfigsAccess | undefined
  _links?: ParentAndSelfLinks | undefined
  id: string
  runId: string
  agentOptimizationId: string
  agentOptimizationVersion: number
  status: AgentOptimizationResultStatus
  activity: AgentOptimizationResultActivity
  iteration: number
  instructions: string
  parameters?: { [x: string]: unknown } | undefined
  userInput: string
  completionResponse?: string | undefined
  variation?: { [x: string]: unknown } | undefined
  scores?: { [x: string]: unknown } | undefined
  generationTokens?: { [x: string]: unknown } | undefined
  evaluationTokens?: { [x: string]: unknown } | undefined
  generationLatency?: number | undefined
  evaluationLatencies?: { [x: string]: unknown } | undefined
  completedAt?: bigint | undefined
  createdVariationKey?: string | undefined
  createdAt: bigint
  updatedAt: bigint
}
type AgentOptimizationResults = {
  _links?: PaginatedLinks | undefined
  items: AgentOptimizationResult[]
  totalCount?: number | undefined
}
type AgentOptimizationResultPost = {
  runId: string
  agentOptimizationVersion: number
  iteration: number
  instructions: string
  userInput: string
  parameters?: { [x: string]: unknown } | undefined
}
type AgentOptimizationRun = {
  runId: string
  optimizationKey: string
  agentOptimizationId: string
  agentOptimizationVersion: number
  status: AgentOptimizationResultStatus
  activity: AgentOptimizationResultActivity
  createdAt: bigint
  completedAt?: (bigint | null) | undefined
}
type AgentOptimizationRuns = {
  _links?: PaginatedLinks | undefined
  items: AgentOptimizationRun[]
  totalCount?: number | undefined
}
type AgentOptimizationResultPatch = {
  status?: AgentOptimizationResultStatus | undefined
  activity?: AgentOptimizationResultActivity | undefined
  completionResponse?: string | undefined
  variation?: { [x: string]: unknown } | undefined
  scores?: { [x: string]: unknown } | undefined
  generationTokens?: { [x: string]: unknown } | undefined
  evaluationTokens?: { [x: string]: unknown } | undefined
  generationLatency?: number | undefined
  evaluationLatencies?: { [x: string]: unknown } | undefined
  createdVariationKey?: string | undefined
}
type AnnouncementAccessDeniedReason = {
  resources?: string[] | undefined
  notResources?: string[] | undefined
  actions?: ActionSpecifier[] | undefined
  notActions?: ActionSpecifier[] | undefined
  effect: 'allow' | 'deny'
  role_name?: string | undefined
}
type AnnouncementAccessDenied = { action: string; reason: AnnouncementAccessDeniedReason }
type AnnouncementAccessAllowedReason = {
  resources?: string[] | undefined
  notResources?: string[] | undefined
  actions?: ActionSpecifier[] | undefined
  notActions?: ActionSpecifier[] | undefined
  effect: 'allow' | 'deny'
  role_name?: string | undefined
}
type AnnouncementAccessAllowedRep = { action: string; reason: AnnouncementAccessAllowedReason }
type AnnouncementAccessRep = {
  denied: AnnouncementAccessDenied[]
  allowed: AnnouncementAccessAllowedRep[]
}
type AnnouncementLink = { href?: string | undefined; type?: string | undefined }
type AnnouncementResponseLinks = { parent: AnnouncementLink }
type AnnouncementResponse = {
  _id: string
  isDismissible: boolean
  title: string
  message: string
  startTime: bigint
  endTime?: bigint | undefined
  severity: 'info' | 'warning' | 'critical'
  _status: 'active' | 'inactive' | 'scheduled'
  _access?: AnnouncementAccessRep | undefined
  _links: AnnouncementResponseLinks
}
type AnnouncementPaginatedLinks = {
  first?: AnnouncementLink | undefined
  last?: AnnouncementLink | undefined
  next?: AnnouncementLink | undefined
  prev?: AnnouncementLink | undefined
  self: AnnouncementLink
}
type GetAnnouncementsPublic_200Response = {
  items: AnnouncementResponse[]
  _links: AnnouncementPaginatedLinks
}
type CreateAnnouncementBody = {
  isDismissible: boolean
  title: string
  message: string
  startTime: bigint
  endTime?: bigint | undefined
  severity: 'info' | 'warning' | 'critical'
}
type AnnouncementPatchOperation = {
  op: string
  path: string
  value?: { [x: string]: unknown } | undefined
}
type AnnouncementJSONPatch = AnnouncementPatchOperation[]
type ApprovalRequestSetting = {
  required: boolean
  bypassApprovalsForPendingChanges: boolean
  minNumApprovals: number
  canReviewOwnRequest: boolean
  canApplyDeclinedChanges: boolean
  autoApplyApprovedChanges?: (boolean | null) | undefined
  serviceKind: string
  serviceConfig: { [x: string]: unknown }
  requiredApprovalTags: string[]
  serviceKindConfigurationId?: (string | null) | undefined
}
type ApprovalRequestSettingWithEnvs = {
  environments?: { [x: string]: ApprovalRequestSetting } | undefined
  _default?: ApprovalRequestSetting | undefined
  _strict?: ApprovalRequestSetting | undefined
}
type ApprovalRequestSettings = { [x: string]: ApprovalRequestSettingWithEnvs }
type ApprovalRequestSettingsPatch = {
  autoApplyApprovedChanges?: (boolean | null) | undefined
  bypassApprovalsForPendingChanges?: boolean | undefined
  canApplyDeclinedChanges?: boolean | undefined
  canReviewOwnRequest?: boolean | undefined
  environmentKey: string
  minNumApprovals?: number | undefined
  required?: boolean | undefined
  requiredApprovalTags?: string[] | undefined
  resourceKind: string
  serviceConfig?: { [x: string]: unknown } | undefined
  serviceKind?: string | undefined
  serviceKindConfigurationId?: (string | null) | undefined
}
type ViewsLink = { href?: string | undefined; type?: string | undefined }
type ViewsPaginatedLinks = {
  first?: ViewsLink | undefined
  last?: ViewsLink | undefined
  next?: ViewsLink | undefined
  prev?: ViewsLink | undefined
  self: ViewsLink
}
type ViewsAccessDeniedReason = {
  resources?: string[] | undefined
  notResources?: string[] | undefined
  actions?: ActionSpecifier[] | undefined
  notActions?: ActionSpecifier[] | undefined
  effect: 'allow' | 'deny'
  role_name?: string | undefined
}
type ViewsAccessDenied = { action: string; reason: ViewsAccessDeniedReason }
type ViewsAccessAllowedReason = {
  resources?: string[] | undefined
  notResources?: string[] | undefined
  actions?: ActionSpecifier[] | undefined
  notActions?: ActionSpecifier[] | undefined
  effect: 'allow' | 'deny'
  role_name?: string | undefined
}
type ViewsAccessAllowedRep = { action: string; reason: ViewsAccessAllowedReason }
type ViewsAccessRep = { denied: ViewsAccessDenied[]; allowed: ViewsAccessAllowedRep[] }
type ViewsMaintainerMember = {
  id: string
  email: string
  role: string
  firstName?: string | undefined
  lastName?: string | undefined
}
type ViewsMaintainerTeam = { id: string; key: string; name: string }
type Maintainer = {
  id: string
  kind: string
  maintainerMember?: ViewsMaintainerMember | undefined
  maintainerTeam?: ViewsMaintainerTeam | undefined
}
type ViewsSelfLink = { self: CoreLink }
type ExpandedDirectlyLinkedFlag = { key: string; name: string; links: ViewsSelfLink }
type ExpandedDirectlyLinkedFlags = { items: ExpandedDirectlyLinkedFlag[]; totalCount: number }
type FlagsSummary = { count: number; linkedFlags?: ExpandedDirectlyLinkedFlags | undefined }
type ExpandedDirectlyLinkedSegment = {
  key: string
  name: string
  environmentId: string
  links: ViewsSelfLink
}
type ExpandedDirectlyLinkedSegments = { items: ExpandedDirectlyLinkedSegment[]; totalCount: number }
type SegmentsSummary = {
  count: number
  linkedSegments?: ExpandedDirectlyLinkedSegments | undefined
}
type MetricsSummary = { count: number }
type AIConfigsSummary = { count: number }
type ResourceSummary = { flagCount: number; segmentCount?: number | undefined; totalCount: number }
type ViewsMemberSummary = {
  _links: { [x: string]: ViewsLink }
  _id: string
  firstName?: string | undefined
  lastName?: string | undefined
  role: string
  email: string
}
type ViewsMemberTeamSummaryRep = {
  customRoleKeys: string[]
  key: string
  _links?: { [x: string]: ViewsLink } | undefined
  name: string
}
type ExpandedFlagMaintainer = {
  key: string
  kind: 'member' | 'team'
  _member?: ViewsMemberSummary | undefined
  _team?: ViewsMemberTeamSummaryRep | undefined
}
type ExpandedFlag = {
  key: string
  name: string
  description?: string | undefined
  creationDate?: bigint | undefined
  _version?: number | undefined
  archived?: boolean | undefined
  tags?: string[] | undefined
  temporary?: boolean | undefined
  includeInSnippet?: boolean | undefined
  maintainer?: ExpandedFlagMaintainer | undefined
  _links?: ParentAndSelfLinks | undefined
}
type ExpandedLinkedFlags = { items: ExpandedFlag[]; totalCount: number }
type ExpandedSegment = {
  key: string
  name: string
  environmentId?: string | undefined
  environmentKey?: string | undefined
  description?: string | undefined
  creationDate?: bigint | undefined
  lastModifiedDate?: bigint | undefined
  deleted?: boolean | undefined
  tags?: string[] | undefined
  unbounded?: boolean | undefined
  version?: number | undefined
  generation?: number | undefined
  _links?: ParentAndSelfLinks | undefined
}
type ExpandedLinkedSegments = { items: ExpandedSegment[]; totalCount: number }
type ExpandedMetric = {
  key?: string | undefined
  name?: string | undefined
  creationDate?: bigint | undefined
  lastModified?: bigint | undefined
  isActive?: boolean | undefined
  eventKey?: string | undefined
  _id?: string | undefined
  _versionId?: string | undefined
  kind?: string | undefined
  category?: string | undefined
  description?: string | undefined
  isNumeric?: boolean | undefined
  lastSeen?: bigint | undefined
  _links?: ParentAndSelfLinks | undefined
}
type ExpandedLinkedMetrics = { items: ExpandedMetric[]; totalCount: number }
type ExpandedAIConfig = {
  key?: string | undefined
  name?: string | undefined
  tags?: string[] | undefined
  description?: string | undefined
  version?: number | undefined
  createdAt?: bigint | undefined
  updatedAt?: bigint | undefined
  flagKey?: string | undefined
  _links?: ParentAndSelfLinks | undefined
}
type ExpandedLinkedAIConfigs = { items: ExpandedAIConfig[]; totalCount: number }
type ExpandedLinkedResourcesFlags = { items: ExpandedFlag[]; totalCount: number }
type ExpandedLinkedResourcesSegments = { items: ExpandedSegment[]; totalCount: number }
type ExpandedLinkedResourcesItems = {
  flags: ExpandedLinkedResourcesFlags
  segments?: ExpandedLinkedResourcesSegments | undefined
}
type ExpandedLinkedResources = { items: ExpandedLinkedResourcesItems; totalCount: number }
type View = {
  _access?: ViewsAccessRep | undefined
  _links?: ParentAndSelfLinks | undefined
  id: string
  accountId: string
  projectId: string
  projectKey: string
  key: string
  name: string
  description: string
  _affectsSdkPayload: boolean
  generateSdkKeys?: boolean | undefined
  version: number
  tags: string[]
  createdAt: bigint
  updatedAt: bigint
  deletedAt?: bigint | undefined
  deleted: boolean
  maintainer?: Maintainer | undefined
  flagsSummary?: FlagsSummary | undefined
  segmentsSummary?: SegmentsSummary | undefined
  metricsSummary?: MetricsSummary | undefined
  aiConfigsSummary?: AIConfigsSummary | undefined
  resourceSummary?: ResourceSummary | undefined
  flagsExpanded?: ExpandedLinkedFlags | undefined
  segmentsExpanded?: ExpandedLinkedSegments | undefined
  metricsExpanded?: ExpandedLinkedMetrics | undefined
  aiConfigsExpanded?: ExpandedLinkedAIConfigs | undefined
  resourcesExpanded?: ExpandedLinkedResources | undefined
}
type Views = { _links?: ViewsPaginatedLinks | undefined; items: View[]; totalCount: number }
type ViewPost = {
  key: string
  name: string
  description?: string | undefined
  maintainerId?: string | undefined
  maintainerTeamKey?: string | undefined
  tags?: string[] | undefined
}
type ViewPatch = {
  name?: string | undefined
  description?: string | undefined
  maintainerId?: string | undefined
  maintainerTeamKey?: string | undefined
  tags?: string[] | undefined
}
type ViewLinkRequestKeys = {
  keys: string[]
  filter?: string | undefined
  comment?: string | undefined
}
type ViewLinkRequestSegmentIdentifier = { environmentId: string; segmentKey: string }
type ViewLinkRequestSegmentIdentifiers = {
  segmentIdentifiers: ViewLinkRequestSegmentIdentifier[]
  filter?: string | undefined
  environmentId?: string | undefined
  comment?: string | undefined
}
type ViewLinkRequestFilter = {
  filter: string
  environmentId?: string | undefined
  comment?: string | undefined
}
type ViewLinkRequest =
  | ViewLinkRequestKeys
  | ViewLinkRequestSegmentIdentifiers
  | ViewLinkRequestFilter
type FailedResourceLink = {
  resourceKey: string
  environmentId?: string | undefined
  resourceType: 'flag' | 'segment' | 'aiConfig'
  errorMessage: string
}
type UnlinkResourceSuccessResponse = {
  successCount: number
  failureCount: number
  failedResources?: FailedResourceLink[] | undefined
}
type ViewLinkedResourceDetails = {
  view?: View | undefined
  flag?: ExpandedFlag | undefined
  segment?: ExpandedSegment | undefined
  aiConfig?: ExpandedAIConfig | undefined
  metric?: ExpandedMetric | undefined
}
type ViewLinkedResource = {
  _links: ParentAndSelfLinks
  resourceKey: string
  environmentId?: string | undefined
  environmentKey?: string | undefined
  resourceType: 'flag' | 'segment' | 'aiConfig'
  linkedAt: bigint
  resourceDetails?: ViewLinkedResourceDetails | undefined
}
type ViewLinkedResources = {
  _links?: ViewsPaginatedLinks | undefined
  items: ViewLinkedResource[]
  totalCount: number
}
type LinkResourceSuccessResponse = {
  successCount: number
  failureCount: number
  linkedResources?: ViewLinkedResources | undefined
  failedResources?: FailedResourceLink[] | undefined
}
type ReleaseStatus = 'pending' | 'in_progress' | 'waiting' | 'completed' | 'reverted'
type ReleaseStatusReason =
  | 'waiting_regression_detected'
  | 'waiting_phase_ended'
  | 'completed_automatic'
  | 'completed_manual'
  | 'reverted_regression_detected'
  | 'reverted_manual'
  | 'reverted_discarded'
  | 'reverted_insufficient_data'
type CleanupBehavior = 'remove_rules_and_update_default_rule' | 'leave_rules_in_place'
type ReleaseType = 'progressive' | 'guarded'
type EnvironmentReleasesAccessDenied = { action: string; reason: AccessDeniedReason }
type EnvironmentReleasesAccessAllowedRep = { action: string; reason: AccessAllowedReason }
type EnvironmentReleasesAccess = {
  denied: EnvironmentReleasesAccessDenied[]
  allowed: EnvironmentReleasesAccessAllowedRep[]
}
type EnvironmentReleasesModification = { date?: string | undefined }
type EnvironmentReleasesMemberSummary = {
  _links: { [x: string]: Link }
  _id: string
  firstName?: string | undefined
  lastName?: string | undefined
  role: string
  email: string
}
type EnvironmentReleasesFilter = {
  type: 'group' | 'contextAttribute' | 'eventProperty'
  attribute?: string | undefined
  op: string
  values: { [x: string]: unknown }[]
  contextKind?: string | undefined
  negate: boolean
}
type EnvironmentReleasesMetricDenominatorRep = {
  eventName?: string | undefined
  isNumeric?: boolean | undefined
  unitAggregationType?: string | undefined
  unitAggregationField?: string | undefined
  valueColumn?: string | undefined
  dataSource?: MetricDataSourceRefRep | undefined
  filters?: EnvironmentReleasesFilter | undefined
  windowStartOffset?: bigint | undefined
  windowEndOffset?: bigint | undefined
  winsorLowerPercentile?: number | undefined
  winsorUpperPercentile?: number | undefined
  winsorIncludeImputed?: boolean | undefined
}
type ReleaseMetric = {
  metricKey: string
  metricVersionId?: string | undefined
  autoRollback: boolean
  analysisUnit?: string | undefined
  definition?:
    | {
        experimentCount?: number | undefined
        metricGroupCount?: number | undefined
        guardedRolloutCount?: number | undefined
        releasePolicyCount?: number | undefined
        environmentReleasePlanCount?: number | undefined
        activeExperimentCount?: number | undefined
        activeGuardedRolloutCount?: number | undefined
        _id: string
        _versionId: string
        _version?: number | undefined
        key: string
        name: string
        kind: 'pageview' | 'click' | 'custom' | 'trace'
        _attachedFlagCount?: number | undefined
        _links: { [x: string]: Link }
        _site?: Link | undefined
        _access?: EnvironmentReleasesAccess | undefined
        tags: string[]
        _creationDate: bigint
        lastModified?: EnvironmentReleasesModification | undefined
        maintainerId?: string | undefined
        _maintainer?: EnvironmentReleasesMemberSummary | undefined
        description?: string | undefined
        category?: string | undefined
        isNumeric?: boolean | undefined
        successCriteria?: 'HigherThanBaseline' | 'LowerThanBaseline' | undefined
        unit?: string | undefined
        eventKey?: string | undefined
        randomizationUnits?: string[] | undefined
        analysisUnits?: string[] | undefined
        filters?: EnvironmentReleasesFilter | undefined
        unitAggregationType?: 'average' | 'sum' | 'count_distinct' | undefined
        analysisType?: 'mean' | 'percentile' | undefined
        percentileValue?: number | undefined
        eventDefault?: MetricEventDefaultRep | undefined
        dataSource: MetricDataSourceRefRep
        lastSeen?: bigint | undefined
        archived?: boolean | undefined
        archivedAt?: bigint | undefined
        selector?: string | undefined
        urls?: UrlMatcher[] | undefined
        windowStartOffset?: bigint | undefined
        windowEndOffset?: bigint | undefined
        winsorLowerPercentile?: number | undefined
        winsorUpperPercentile?: number | undefined
        winsorIncludeImputed?: boolean | undefined
        traceQuery?: string | undefined
        traceValueLocation?: string | undefined
        unitAggregationField?: string | undefined
        denominator?: EnvironmentReleasesMetricDenominatorRep | undefined
      }
    | undefined
}
type ReleaseStep = {
  stepIndex: number
  allocation: number
  durationMillis: bigint
  startedAt?: bigint | undefined
  endedAt?: bigint | undefined
}
type ReleaseMetricStatus = 'ok' | 'regressed' | 'regression_dismissed'
type EnvironmentReleasePhase = {
  id: string
  phaseIndex: number
  ruleId: string | null
  description?: string | undefined
  status: ReleaseStatus
  statusReason?: ReleaseStatusReason | undefined
  steps: ReleaseStep[]
  currentStepIndex?: number | undefined
  startedAt?: bigint | undefined
  endedAt?: bigint | undefined
  metricStatuses: { [x: string]: ReleaseMetricStatus }
}
type EnvironmentReleaseAdvancementMode = 'manual' | 'automatic'
type EnvironmentReleaseLink = { href: string; type: string }
type EnvironmentRelease = {
  id: string
  status: ReleaseStatus
  statusReason?: ReleaseStatusReason | undefined
  projectKey: string
  environmentKey: string
  flagKey: string
  originalVariationId: string
  originalVariationValue: { [x: string]: unknown }
  targetVariationId: string
  targetVariationValue: { [x: string]: unknown }
  randomizationUnit: string
  cleanupBehavior: CleanupBehavior
  kind: ReleaseType
  metrics: ReleaseMetric[]
  phases: EnvironmentReleasePhase[]
  currentPhaseIndex: number | null
  advancementMode: EnvironmentReleaseAdvancementMode
  createdAt: bigint
  startedAt?: bigint | undefined
  endedAt?: bigint | undefined
  _links?: { [x: string]: EnvironmentReleaseLink } | undefined
}
type EnvironmentReleaseCollection = {
  items: EnvironmentRelease[]
  totalCount: number
  _links?: { [x: string]: EnvironmentReleaseLink } | undefined
}
type EnvironmentReleaseStepInput = { allocation: number; durationMillis: bigint }
type EnvironmentReleaseExistingRulePhaseInput = {
  ruleId: string
  steps: EnvironmentReleaseStepInput[]
}
type EnvironmentReleaseClause = {
  contextKind?: string | undefined
  attribute: string
  op: string
  values: { [x: string]: unknown }[]
  negate?: boolean | undefined
}
type EnvironmentReleaseNewRulePhaseInput = {
  clauses: EnvironmentReleaseClause[]
  description?: string | undefined
  steps: EnvironmentReleaseStepInput[]
}
type EnvironmentReleasePhaseInput =
  | EnvironmentReleaseExistingRulePhaseInput
  | EnvironmentReleaseNewRulePhaseInput
type EnvironmentReleaseMetricInput = {
  metricKey: string
  autoRollback?: boolean | undefined
  analysisUnit?: string | undefined
}
type ReleaseHealthCheckKind =
  | 'flag_evaluations_any'
  | 'flag_evaluations_with_context'
  | 'metric_events_any'
  | 'metric_events_with_context'
type StartEnvironmentReleaseRequest = {
  beforeRuleId?: string | undefined
  originalVariationId: string
  targetVariationId: string
  releasePlanKey?: string | undefined
  randomizationUnit?: string | undefined
  advancementMode?: {} | undefined
  phases?: EnvironmentReleasePhaseInput[] | undefined
  metrics?: EnvironmentReleaseMetricInput[] | undefined
  bypassHealthChecks?: ReleaseHealthCheckKind[] | undefined
  cleanupBehavior?: {} | undefined
  comment?: string | undefined
}
type ReleaseHealthCheckFailure = {
  kind: ReleaseHealthCheckKind
  metricKey?: string | undefined
  message: string
}
type StartEnvironmentReleaseBadRequest = {
  code: string
  message: string
  failingChecks?: ReleaseHealthCheckFailure[] | undefined
}
type EnvironmentReleaseResolution =
  | 'roll_forward_all_phases'
  | 'roll_forward_current_phase_and_remove_pending_phases'
  | 'roll_back_all_phases_and_remove_pending_phases'
  | 'roll_back_current_phase_and_remove_pending_phases'
type StopEnvironmentReleaseRequest = {
  resolution: EnvironmentReleaseResolution
  comment?: string | undefined
}
type EnvironmentReleasePlansLink = { href?: string | undefined; type?: string | undefined }
type EnvironmentReleasePlansPaginatedLinks = {
  first?: EnvironmentReleasePlansLink | undefined
  last?: EnvironmentReleasePlansLink | undefined
  next?: EnvironmentReleasePlansLink | undefined
  prev?: EnvironmentReleasePlansLink | undefined
  self: EnvironmentReleasePlansLink
}
type EnvironmentReleasePlanStep = {
  _id?: string | undefined
  allocation: bigint
  durationMillis: bigint
}
type EnvironmentReleasePlanClause = {
  _id?: string | undefined
  contextKind?: string | undefined
  attribute: string
  op:
    | 'in'
    | 'endsWith'
    | 'startsWith'
    | 'matches'
    | 'contains'
    | 'lessThan'
    | 'lessThanOrEqual'
    | 'greaterThan'
    | 'greaterThanOrEqual'
    | 'before'
    | 'after'
    | 'semVerEqual'
    | 'semVerLessThan'
    | 'semVerGreaterThan'
    | 'segmentMatch'
  values: { [x: string]: unknown }[]
  negate?: boolean | undefined
}
type EnvironmentReleasePlanPhase = {
  _id?: string | undefined
  description?: string | undefined
  steps: EnvironmentReleasePlanStep[]
  clauses?: EnvironmentReleasePlanClause[] | undefined
}
type EnvironmentReleasePlanMetric = { isGroup: boolean; autoRollback?: boolean | undefined }
type EnvironmentReleasePlanProgressiveReleaseRep = {
  randomizationUnit?: string | undefined
  advancementMode?: 'manual' | 'automatic' | undefined
  cleanupBehavior?: 'remove_rules_and_update_default_rule' | 'leave_rules_in_place' | undefined
  phases: EnvironmentReleasePlanPhase[]
  metrics?: { [x: string]: EnvironmentReleasePlanMetric } | undefined
}
type EnvironmentReleasePlan = {
  _id: string
  key: string
  name: string
  description?: string | undefined
  environmentKey: string
  releaseMethod: 'progressive_release'
  version: bigint
  createdAt?: bigint | undefined
  updatedAt?: bigint | undefined
  default?: boolean | undefined
  progressiveRelease: EnvironmentReleasePlanProgressiveReleaseRep
}
type EnvironmentReleasePlans = {
  _links?: EnvironmentReleasePlansPaginatedLinks | undefined
  items: EnvironmentReleasePlan[]
  totalCount: number
}
type EnvironmentReleasePlanProgressiveRelease = {
  randomizationUnit: string
  advancementMode?: 'manual' | 'automatic' | undefined
  cleanupBehavior?: 'remove_rules_and_update_default_rule' | 'leave_rules_in_place' | undefined
  phases: EnvironmentReleasePlanPhase[]
  metrics?: { [x: string]: EnvironmentReleasePlanMetric } | undefined
}
type PostEnvironmentReleasePlanRequest = {
  name: string
  key: string
  description?: string | undefined
  releaseMethod?: 'progressive_release' | undefined
  progressiveRelease: EnvironmentReleasePlanProgressiveRelease
}
type PutEnvironmentReleasePlanRequest = {
  name: string
  version?: bigint | undefined
  description?: string | undefined
  releaseMethod?: 'progressive_release' | undefined
  progressiveRelease: EnvironmentReleasePlanProgressiveRelease
}
type PutDefaultEnvironmentReleasePlanRequest = { key: string }
type MaintainerResponseMember = {
  kind: 'member'
  memberId?: string | undefined
  firstName?: string | undefined
  lastName?: string | undefined
  email?: string | undefined
}
type MaintainerResponseTeam = { kind: 'team'; key?: string | undefined; name?: string | undefined }
type MaintainerResponse = MaintainerResponseMember | MaintainerResponseTeam
type ExecutionMode = 'sequential' | 'parallel'
type TriggerType = 'flag_eval' | 'webhook' | 'manual' | 'promotion'
type FlagReleasePlanEnvironment = {
  environmentKey: string
  environmentReleasePlanKey?: string | undefined
  isImmediate?: boolean | undefined
  triggerType: TriggerType
}
type FlagReleasePlan = {
  key: string
  _id: string
  version: bigint
  createdAt: bigint
  updatedAt: bigint
  name: string
  description?: string | undefined
  maintainer?: MaintainerResponse | undefined
  executionMode?: ExecutionMode | undefined
  applicationKeys?: string[] | undefined
  default: boolean
  environments: FlagReleasePlanEnvironment[]
}
type FlagReleasePlansLink = { href?: string | undefined; type?: string | undefined }
type FlagReleasePlansPaginatedLinks = {
  first?: FlagReleasePlansLink | undefined
  last?: FlagReleasePlansLink | undefined
  next?: FlagReleasePlansLink | undefined
  prev?: FlagReleasePlansLink | undefined
  self: FlagReleasePlansLink
}
type ListFlagReleasePlansResponse = {
  items: FlagReleasePlan[]
  totalCount: number
  _links?: FlagReleasePlansPaginatedLinks | undefined
}
type FlagReleasePlansError = { message: string; code: string }
type MaintainerIdentifierMember = { kind: 'member'; memberId: string }
type MaintainerIdentifierTeam = { kind: 'team'; teamKey: string }
type MaintainerIdentifier = MaintainerIdentifierMember | MaintainerIdentifierTeam
type CreateFlagReleasePlanRequest = {
  name: string
  description?: string | undefined
  maintainer?: MaintainerIdentifier | undefined
  executionMode?: ExecutionMode | undefined
  applicationKeys?: string[] | undefined
  default?: boolean | undefined
  environments: FlagReleasePlanEnvironment[]
  key: string
}
type PutFlagReleasePlanRequest = {
  name: string
  description?: string | undefined
  maintainer?: MaintainerIdentifier | undefined
  executionMode?: ExecutionMode | undefined
  applicationKeys?: string[] | undefined
  default?: boolean | undefined
  environments: FlagReleasePlanEnvironment[]
  version?: bigint | undefined
}
type SegmentScheduledChangesLink = { href?: string | undefined; type?: string | undefined }
type SegmentScheduledChangeStatus = 'pending' | 'inFlight' | 'failed'
type SegmentInstruction = { [x: string]: unknown }
type SegmentScheduledChange = {
  _links: { [x: string]: SegmentScheduledChangesLink }
  status: SegmentScheduledChangeStatus
  _id: string
  _creationDate: bigint
  _maintainerId?: string | undefined
  _maintainerServiceTokenId?: string | undefined
  executionDate: bigint
  comment?: string | undefined
  instructions: SegmentInstruction[]
}
type SegmentScheduledChanges = {
  _links: { [x: string]: SegmentScheduledChangesLink }
  items: SegmentScheduledChange[]
}
type PostSegmentScheduledChangeInput = {
  executionDate: bigint
  comment?: string | undefined
  instructions: SegmentInstruction[]
}
type PatchSegmentScheduledChangeInput = {
  executionDate?: bigint | undefined
  comment?: string | undefined
}
type IPAllowlistSelfLink = { self: CoreLink }
type IpAllowlistEntryResponse = {
  _id: string
  ipAddress: string
  description?: string | undefined
  _createdByMemberId?: string | undefined
  _createdAt: bigint
  _updatedAt: bigint
}
type IpAllowlistResponse = {
  _links?: IPAllowlistSelfLink | undefined
  sessionAllowlistEnabled: boolean
  apiTokenAllowlistEnabled: boolean
  totalCount?: number | undefined
  entries: IpAllowlistEntryResponse[]
}
type PatchIpAllowlistConfigRequest = {
  sessionAllowlistEnabled?: boolean | undefined
  apiTokenAllowlistEnabled?: boolean | undefined
}
type CreateIpAllowlistEntryRequest = { ipAddress: string; description?: string | undefined }
type PatchIpAllowlistEntryRequest = { description: string }
type SdkKeysSelfLink = { self: CoreLink }
type SdkKeyKind = 'sdk' | 'mobile'
type SdkKeysEnvironmentSummary = {
  _links: { [x: string]: Link }
  key: string
  name: string
  color: string
}
type ViewResourceSummary = { flagCount: number; segmentCount: number }
type ViewSummary = {
  _links?: ParentAndSelfLinks | undefined
  key: string
  name: string
  resourceSummary: ViewResourceSummary
}
type SdkKeyListItem = {
  _links?: ParentAndSelfLinks | undefined
  kind: SdkKeyKind
  key: string
  name: string
  description?: string | undefined
  expiry?: bigint | undefined
  value: string
  isDefault: boolean
  _createdByMemberId?: string | undefined
  _createdAt: bigint
  _updatedAt: bigint
  _version: number
  environmentSummary?: SdkKeysEnvironmentSummary | undefined
  viewSummaries?: ViewSummary[] | undefined
}
type SdkKeys = { _links?: SdkKeysSelfLink | undefined; items: SdkKeyListItem[]; totalCount: number }
type SdkKey = {
  _links?: ParentAndSelfLinks | undefined
  kind: SdkKeyKind
  key: string
  name: string
  description?: string | undefined
  expiry?: bigint | undefined
  value: string
  isDefault: boolean
  _createdByMemberId?: string | undefined
  _createdAt: bigint
  _updatedAt: bigint
  _version: number
}
type SdkKeysForGetSdkKeys = {
  _links?: SdkKeysSelfLink | undefined
  items: SdkKey[]
  totalCount: number
}
type SdkKeyPost = {
  kind?: 'sdk' | 'mobile' | undefined
  key: string
  name: string
  description?: string | undefined
  expiry?: bigint | undefined
  viewKeys?: string[] | undefined
}
type SdkKeyPatch = {
  name?: string | undefined
  description?: string | undefined
  expiry?: bigint | undefined
}
type SdkKeyViewsPut = { viewKeys: string[] }
type SdkKeyForPutSdkKeyViews = {
  _links?: ParentAndSelfLinks | undefined
  kind: SdkKeyKind
  key: string
  name: string
  description?: string | undefined
  expiry?: bigint | undefined
  value: string
  isDefault: boolean
  _createdByMemberId?: string | undefined
  _createdAt: bigint
  _updatedAt: bigint
  _version: number
  viewSummaries?: ViewSummary[] | undefined
}
type AdaptiveTriggerResourceKind = 'flag' | 'ai-config'
type ExperimentationLink = { href?: string | undefined; type?: string | undefined }
type AdaptiveTriggersPaginatedLinks = {
  first?: ExperimentationLink | undefined
  last?: ExperimentationLink | undefined
  next?: ExperimentationLink | undefined
  prev?: ExperimentationLink | undefined
  self: ExperimentationLink
}
type ObservabilityAlertSource = { type: 'observabilityAlert'; alertId: number }
type AdaptiveTriggerInstruction = {
  kind: 'updateFallthroughVariationOrRollout' | 'updateRuleVariationOrRollout'
  variationId: string
  ruleId?: string | undefined
}
type AdaptiveTriggerTask = { instructions: AdaptiveTriggerInstruction[] }
type AdaptiveTrigger = {
  id: string
  name: string
  resourceKind: AdaptiveTriggerResourceKind
  resourceKey: string
  enabled: boolean
  triggerSource: ObservabilityAlertSource
  task: AdaptiveTriggerTask
  createdAt: bigint
  updatedAt: bigint
}
type AdaptiveTriggers = {
  _links?: AdaptiveTriggersPaginatedLinks | undefined
  items: AdaptiveTrigger[]
  totalCount: number
}
type CreateAdaptiveTriggerRequest = {
  name: string
  resourceKind: AdaptiveTriggerResourceKind
  resourceKey: string
  triggerSource: ObservabilityAlertSource
  task: AdaptiveTriggerTask
}
type UpdateAdaptiveTriggerRequest = {
  name?: string | undefined
  task?: AdaptiveTriggerTask | undefined
}
type InsightsChartMetadataCustomValues = { [x: string]: { [x: string]: unknown } }
type InsightsMetricTierDefinition = { indicator: string; description: string }
type InsightsChartMetric = {
  indicator: string
  value: number
  unit: string
  modifier: string
  tiers: InsightsMetricTierDefinition[]
}
type InsightsChartMetrics = { [x: string]: InsightsChartMetric }
type InsightsChartSeriesMetadataAxis = { unit: string }
type InsightsChartMetadata = {
  summary: InsightsChartMetadataCustomValues
  name?: string | undefined
  metrics?: InsightsChartMetrics | undefined
  xAxis: InsightsChartSeriesMetadataAxis
  yAxis: InsightsChartSeriesMetadataAxis
}
type InsightsChartBounds = { name: string; value: bigint }
type InsightsChartSeriesMetadata = {
  name: string
  count?: bigint | undefined
  bounds?: InsightsChartBounds[] | undefined
}
type InsightsChartSeriesDataPoint = {
  x: bigint
  y: bigint
  values?: { [x: string]: { [x: string]: unknown } } | undefined
}
type InsightsChartSeries = {
  metadata: InsightsChartSeriesMetadata
  data: InsightsChartSeriesDataPoint[]
}
type InsightsChart = { metadata: InsightsChartMetadata; series: InsightsChartSeries[] }
type FailureReasonRep = { attribute: string; reason: string }
type ValidationFailedErrorRep = { code: string; message: string; errors: FailureReasonRep[] }
type PostDeploymentEventInput = {
  projectKey: string
  environmentKey: string
  applicationKey: string
  applicationName?: string | undefined
  applicationKind?: 'server' | 'browser' | 'mobile' | undefined
  version: string
  versionName?: string | undefined
  eventType: 'started' | 'failed' | 'finished' | 'custom'
  eventTime?: UnixMillis | undefined
  eventMetadata?: { [x: string]: { [x: string]: unknown } } | undefined
  deploymentMetadata?: { [x: string]: { [x: string]: unknown } } | undefined
}
type DeploymentStatus = string
type DeploymentKind = string
type FlagReferenceRep = {
  projectKey: string
  flagKey: string
  referencesAdded: number
  referencesRemoved: number
}
type FlagReferenceCollectionRep = { totalCount: number; items: FlagReferenceRep[] }
type PullRequestLeadTimeRep = {
  codingDurationMs: bigint
  reviewDurationMs?: bigint | undefined
  maxWaitDurationMs?: bigint | undefined
  avgWaitDurationMs?: bigint | undefined
  maxDeployDurationMs?: bigint | undefined
  avgDeployDurationMs?: bigint | undefined
  maxTotalLeadTimeMs?: bigint | undefined
  avgTotalLeadTimeMs?: bigint | undefined
}
type PullRequestRep = {
  id: string
  externalId: string
  title: string
  status: string
  author: string
  createTime: UnixMillis
  mergeTime?: UnixMillis | undefined
  mergeCommitKey?: string | undefined
  baseCommitKey: string
  headCommitKey: string
  filesChanged: number
  linesAdded: number
  linesDeleted: number
  url: string
  deployments?: DeploymentCollectionRep | undefined
  flagReferences?: FlagReferenceCollectionRep | undefined
  leadTime?: PullRequestLeadTimeRep | undefined
}
type PullRequestCollectionRep = {
  totalCount: number
  items: PullRequestRep[]
  _links?: { [x: string]: Link } | undefined
}
type LeadTimeStagesRep = {
  codingDurationMs: bigint
  reviewDurationMs?: bigint | undefined
  waitDurationMs?: bigint | undefined
  deployDurationMs?: bigint | undefined
  totalLeadTimeMs?: bigint | undefined
}
type DeploymentRep = {
  id: string
  applicationKey: string
  applicationVersion: string
  startedAt: UnixMillis
  endedAt?: UnixMillis | undefined
  durationMs?: bigint | undefined
  status: DeploymentStatus
  kind: DeploymentKind
  active: boolean
  metadata?: { [x: string]: { [x: string]: unknown } } | undefined
  archived: boolean
  environmentKey: string
  numberOfContributors: number
  numberOfPullRequests: number
  linesAdded: bigint
  linesDeleted: bigint
  leadTime: bigint
  pullRequests?: PullRequestCollectionRep | undefined
  flagReferences?: FlagReferenceCollectionRep | undefined
  leadTimeStages?: LeadTimeStagesRep | undefined
}
type DeploymentCollectionRep = {
  totalCount: number
  items: DeploymentRep[]
  _links?: { [x: string]: Link } | undefined
}
type EventType = string
type FlagEventMemberRep = { id: string; email: string; firstName: string; lastName: string }
type ImpactReason = string
type VariationEvalSummary = {
  value?: { [x: string]: unknown } | undefined
  before?: bigint | undefined
  after?: bigint | undefined
}
type EvaluationsSummary = { variations?: VariationEvalSummary[] | undefined }
type FlagEventImpactRep = {
  size?: 'none' | 'small' | 'medium' | 'large' | undefined
  percentage?: number | undefined
  reason?: ImpactReason | undefined
  evaluationsSummary?: EvaluationsSummary | undefined
}
type IterationStatus = string
type FlagEventExperimentIteration = {
  id: string
  status: IterationStatus
  startedAt: UnixMillis
  endedAt?: UnixMillis | undefined
  _links?: { [x: string]: Link } | undefined
}
type FlagEventExperiment = {
  key: string
  name: string
  iteration: FlagEventExperimentIteration
  _links?: { [x: string]: Link } | undefined
}
type FlagEventExperimentCollection = { totalCount: number; items: FlagEventExperiment[] }
type FlagEventRep = {
  id: string
  projectId: string
  projectKey: string
  environmentId?: string | undefined
  environmentKey?: string | undefined
  flagKey: string
  eventType: EventType
  eventTime: UnixMillis
  description: string
  auditLogEntryId?: string | undefined
  member?: FlagEventMemberRep | undefined
  actions?: string[] | undefined
  impact: FlagEventImpactRep
  experiments?: FlagEventExperimentCollection | undefined
}
type FlagEventCollectionRep = {
  totalCount: number
  items: FlagEventRep[]
  _links?: { [x: string]: Link } | undefined
}
type PostInsightGroupParams = {
  name: string
  key: string
  projectKey: string
  environmentKey: string
  applicationKeys?: string[] | undefined
}
type InsightsMetricScoreIndicator = string
type InsightsMetricIndicatorRange = { min: number; max: number }
type InsightsMetricScore = {
  score: number
  aggregateOf?: string[] | undefined
  diffVsLastPeriod?: number | undefined
  indicator: InsightsMetricScoreIndicator
  indicatorRange: InsightsMetricIndicatorRange
  lastPeriod?: InsightsMetricScore | undefined
}
type InsightGroupScores = {
  overall: InsightsMetricScore
  deploymentFrequency: InsightsMetricScore
  deploymentFailureRate: InsightsMetricScore
  leadTime: InsightsMetricScore
  impactSize: InsightsMetricScore
  experimentationCoverage: InsightsMetricScore
  flagHealth: InsightsMetricScore
  velocity: InsightsMetricScore
  risk: InsightsMetricScore
  efficiency: InsightsMetricScore
  creationRatio?: InsightsMetricScore | undefined
}
type InsightPeriod = { startTime: UnixMillis; endTime: UnixMillis }
type InsightGroupCollectionScoreMetadata = { period: InsightPeriod; lastPeriod: InsightPeriod }
type InsightGroup = {
  environment?: Environment | undefined
  scores?: InsightGroupScores | undefined
  scoreMetadata?: InsightGroupCollectionScoreMetadata | undefined
  key: string
  name: string
  projectKey: string
  environmentKey: string
  applicationKeys?: string[] | undefined
  createdAt: UnixMillis
}
type InsightGroupsCountByIndicator = {
  excellent: number
  good: number
  fair: number
  needsAttention: number
  notCalculated: number
  unknown: number
  total: number
}
type InsightGroupCollectionMetadata = { countByIndicator: InsightGroupsCountByIndicator }
type InsightGroupCollection = {
  totalCount: number
  items: InsightGroup[]
  _links?: { [x: string]: Link } | undefined
  metadata?: InsightGroupCollectionMetadata | undefined
  scoreMetadata?: InsightGroupCollectionScoreMetadata | undefined
}
type InsightScores = {
  period: InsightPeriod
  lastPeriod: InsightPeriod
  scores: InsightGroupScores
  _links?: { [x: string]: Link } | undefined
}
type ProjectSummaryCollection = {
  totalCount: number
  items: ProjectSummary[]
  _links?: { [x: string]: Link } | undefined
}
type InsightsRepository = {
  _id: string
  version: number
  key: string
  type: string
  url: string
  mainBranch: string
  projects?: ProjectSummaryCollection | undefined
}
type InsightsRepositoryCollection = {
  totalCount: number
  items: InsightsRepository[]
  _links?: { [x: string]: Link } | undefined
}
type InsightsRepositoryProject = { repositoryKey: string; projectKey: string }
type InsightsRepositoryProjectMappings = { mappings: InsightsRepositoryProject[] }
type InsightsRepositoryProjectCollection = {
  totalCount: number
  items: InsightsRepositoryProject[]
  _links?: { [x: string]: Link } | undefined
}
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/api/v2': {
      $get:
        | { input: {}; output: RootResponse; outputFormat: 'json'; status: 200 }
        | { input: {}; output: RateLimitedErrorRep; outputFormat: 'json'; status: 429 }
    }
  } & {
    '/api/v2/account/relay-auto-configs': {
      $get:
        | { input: {}; output: RelayAutoConfigCollectionRep; outputFormat: 'json'; status: 200 }
        | { input: {}; output: UnauthorizedErrorRep; outputFormat: 'json'; status: 401 }
        | { input: {}; output: ForbiddenErrorRep; outputFormat: 'json'; status: 403 }
        | { input: {}; output: RateLimitedErrorRep; outputFormat: 'json'; status: 429 }
      $post:
        | {
            input: { json: RelayAutoConfigPost }
            output: RelayAutoConfigRep
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { json: RelayAutoConfigPost }
            output: InvalidRequestErrorRep
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { json: RelayAutoConfigPost }
            output: UnauthorizedErrorRep
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { json: RelayAutoConfigPost }
            output: RateLimitedErrorRep
            outputFormat: 'json'
            status: 429
          }
    }
  } & {
    '/api/v2/account/relay-auto-configs/:id': {
      $get:
        | {
            input: { param: { id: string } }
            output: RelayAutoConfigRep
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } }
            output: UnauthorizedErrorRep
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: string } }
            output: ForbiddenErrorRep
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: string } }
            output: NotFoundErrorRep
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { id: string } }
            output: RateLimitedErrorRep
            outputFormat: 'json'
            status: 429
          }
      $patch:
        | {
            input: { param: { id: string } } & { json: PatchWithComment }
            output: RelayAutoConfigRep
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & { json: PatchWithComment }
            output: InvalidRequestErrorRep
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { id: string } } & { json: PatchWithComment }
            output: UnauthorizedErrorRep
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: string } } & { json: PatchWithComment }
            output: NotFoundErrorRep
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { id: string } } & { json: PatchWithComment }
            output: StatusConflictErrorRep
            outputFormat: 'json'
            status: 409
          }
        | {
            input: { param: { id: string } } & { json: PatchWithComment }
            output: PatchFailedErrorRep
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { id: string } } & { json: PatchWithComment }
            output: RateLimitedErrorRep
            outputFormat: 'json'
            status: 429
          }
      $delete:
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 204 }
        | {
            input: { param: { id: string } }
            output: UnauthorizedErrorRep
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: string } }
            output: NotFoundErrorRep
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { id: string } }
            output: StatusConflictErrorRep
            outputFormat: 'json'
            status: 409
          }
        | {
            input: { param: { id: string } }
            output: RateLimitedErrorRep
            outputFormat: 'json'
            status: 429
          }
    }
  } & {
    '/api/v2/account/relay-auto-configs/:id/reset': {
      $post:
        | {
            input: { param: { id: string } } & { query: { expiry?: bigint | undefined } }
            output: RelayAutoConfigRep
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & { query: { expiry?: bigint | undefined } }
            output: UnauthorizedErrorRep
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: string } } & { query: { expiry?: bigint | undefined } }
            output: ForbiddenErrorRep
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: string } } & { query: { expiry?: bigint | undefined } }
            output: NotFoundErrorRep
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { id: string } } & { query: { expiry?: bigint | undefined } }
            output: RateLimitedErrorRep
            outputFormat: 'json'
            status: 429
          }
    }
  } & {
    '/api/v2/applications': {
      $get:
        | {
            input: {
              query: {
                filter?: string | undefined
                limit?: bigint | undefined
                offset?: bigint | undefined
                sort?: string | undefined
                expand?: string | undefined
              }
            }
            output: ApplicationCollectionRep
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                filter?: string | undefined
                limit?: bigint | undefined
                offset?: bigint | undefined
                sort?: string | undefined
                expand?: string | undefined
              }
            }
            output: InvalidRequestErrorRep
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                filter?: string | undefined
                limit?: bigint | undefined
                offset?: bigint | undefined
                sort?: string | undefined
                expand?: string | undefined
              }
            }
            output: UnauthorizedErrorRep
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              query: {
                filter?: string | undefined
                limit?: bigint | undefined
                offset?: bigint | undefined
                sort?: string | undefined
                expand?: string | undefined
              }
            }
            output: ForbiddenErrorRep
            outputFormat: 'json'
            status: 403
          }
        | {
            input: {
              query: {
                filter?: string | undefined
                limit?: bigint | undefined
                offset?: bigint | undefined
                sort?: string | undefined
                expand?: string | undefined
              }
            }
            output: NotFoundErrorRep
            outputFormat: 'json'
            status: 404
          }
        | {
            input: {
              query: {
                filter?: string | undefined
                limit?: bigint | undefined
                offset?: bigint | undefined
                sort?: string | undefined
                expand?: string | undefined
              }
            }
            output: RateLimitedErrorRep
            outputFormat: 'json'
            status: 429
          }
    }
  } & {
    '/api/v2/applications/:applicationKey': {
      $get:
        | {
            input: { param: { applicationKey: string } } & {
              query: { expand?: string | undefined }
            }
            output: ApplicationRep
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { applicationKey: string } } & {
              query: { expand?: string | undefined }
            }
            output: InvalidRequestErrorRep
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { applicationKey: string } } & {
              query: { expand?: string | undefined }
            }
            output: UnauthorizedErrorRep
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { applicationKey: string } } & {
              query: { expand?: string | undefined }
            }
            output: ForbiddenErrorRep
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { applicationKey: string } } & {
              query: { expand?: string | undefined }
            }
            output: NotFoundErrorRep
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { applicationKey: string } } & {
              query: { expand?: string | undefined }
            }
            output: RateLimitedErrorRep
            outputFormat: 'json'
            status: 429
          }
      $patch:
        | {
            input: { param: { applicationKey: string } } & { json: JSONPatch }
            output: ApplicationRep
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { applicationKey: string } } & { json: JSONPatch }
            output: InvalidRequestErrorRep
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { applicationKey: string } } & { json: JSONPatch }
            output: UnauthorizedErrorRep
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { applicationKey: string } } & { json: JSONPatch }
            output: ForbiddenErrorRep
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { applicationKey: string } } & { json: JSONPatch }
            output: NotFoundErrorRep
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { applicationKey: string } } & { json: JSONPatch }
            output: RateLimitedErrorRep
            outputFormat: 'json'
            status: 429
          }
      $delete:
        | {
            input: { param: { applicationKey: string } }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { applicationKey: string } }
            output: UnauthorizedErrorRep
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { applicationKey: string } }
            output: ForbiddenErrorRep
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { applicationKey: string } }
            output: NotFoundErrorRep
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { applicationKey: string } }
            output: RateLimitedErrorRep
            outputFormat: 'json'
            status: 429
          }
    }
  } & {
    '/api/v2/applications/:applicationKey/versions': {
      $get:
        | {
            input: { param: { applicationKey: string } } & {
              query: {
                filter?: string | undefined
                limit?: bigint | undefined
                offset?: bigint | undefined
                sort?: string | undefined
              }
            }
            output: ApplicationVersionsCollectionRep
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { applicationKey: string } } & {
              query: {
                filter?: string | undefined
                limit?: bigint | undefined
                offset?: bigint | undefined
                sort?: string | undefined
              }
            }
            output: InvalidRequestErrorRep
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { applicationKey: string } } & {
              query: {
                filter?: string | undefined
                limit?: bigint | undefined
                offset?: bigint | undefined
                sort?: string | undefined
              }
            }
            output: UnauthorizedErrorRep
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { applicationKey: string } } & {
              query: {
                filter?: string | undefined
                limit?: bigint | undefined
                offset?: bigint | undefined
                sort?: string | undefined
              }
            }
            output: ForbiddenErrorRep
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { applicationKey: string } } & {
              query: {
                filter?: string | undefined
                limit?: bigint | undefined
                offset?: bigint | undefined
                sort?: string | undefined
              }
            }
            output: NotFoundErrorRep
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { applicationKey: string } } & {
              query: {
                filter?: string | undefined
                limit?: bigint | undefined
                offset?: bigint | undefined
                sort?: string | undefined
              }
            }
            output: RateLimitedErrorRep
            outputFormat: 'json'
            status: 429
          }
    }
  } & {
    '/api/v2/applications/:applicationKey/versions/:versionKey': {
      $patch:
        | {
            input: { param: { applicationKey: string; versionKey: string } } & { json: JSONPatch }
            output: ApplicationVersionRep
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { applicationKey: string; versionKey: string } } & { json: JSONPatch }
            output: InvalidRequestErrorRep
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { applicationKey: string; versionKey: string } } & { json: JSONPatch }
            output: UnauthorizedErrorRep
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { applicationKey: string; versionKey: string } } & { json: JSONPatch }
            output: ForbiddenErrorRep
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { applicationKey: string; versionKey: string } } & { json: JSONPatch }
            output: NotFoundErrorRep
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { applicationKey: string; versionKey: string } } & { json: JSONPatch }
            output: RateLimitedErrorRep
            outputFormat: 'json'
            status: 429
          }
      $delete:
        | {
            input: { param: { applicationKey: string; versionKey: string } }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { applicationKey: string; versionKey: string } }
            output: UnauthorizedErrorRep
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { applicationKey: string; versionKey: string } }
            output: ForbiddenErrorRep
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { applicationKey: string; versionKey: string } }
            output: NotFoundErrorRep
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { applicationKey: string; versionKey: string } }
            output: RateLimitedErrorRep
            outputFormat: 'json'
            status: 429
          }
    }
  } & {
    '/api/v2/approval-requests': {
      $get:
        | {
            input: {
              query: {
                filter?: string | undefined
                expand?: string | undefined
                limit?: bigint | undefined
                offset?: bigint | undefined
              }
            }
            output: ExpandableApprovalRequestsResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                filter?: string | undefined
                expand?: string | undefined
                limit?: bigint | undefined
                offset?: bigint | undefined
              }
            }
            output: InvalidRequestErrorRep
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                filter?: string | undefined
                expand?: string | undefined
                limit?: bigint | undefined
                offset?: bigint | undefined
              }
            }
            output: UnauthorizedErrorRep
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              query: {
                filter?: string | undefined
                expand?: string | undefined
                limit?: bigint | undefined
                offset?: bigint | undefined
              }
            }
            output: ForbiddenErrorRep
            outputFormat: 'json'
            status: 403
          }
        | {
            input: {
              query: {
                filter?: string | undefined
                expand?: string | undefined
                limit?: bigint | undefined
                offset?: bigint | undefined
              }
            }
            output: RateLimitedErrorRep
            outputFormat: 'json'
            status: 429
          }
      $post:
        | {
            input: { json: CreateApprovalRequestRequest }
            output: ApprovalRequestResponse
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { json: CreateApprovalRequestRequest }
            output: InvalidRequestErrorRep
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { json: CreateApprovalRequestRequest }
            output: UnauthorizedErrorRep
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { json: CreateApprovalRequestRequest }
            output: ForbiddenErrorRep
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { json: CreateApprovalRequestRequest }
            output: RateLimitedErrorRep
            outputFormat: 'json'
            status: 429
          }
    }
  } & {
    '/api/v2/approval-requests/:id': {
      $get:
        | {
            input: { param: { id: string } } & { query: { expand?: string | undefined } }
            output: ExpandableApprovalRequestResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & { query: { expand?: string | undefined } }
            output: InvalidRequestErrorRep
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { id: string } } & { query: { expand?: string | undefined } }
            output: UnauthorizedErrorRep
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: string } } & { query: { expand?: string | undefined } }
            output: ForbiddenErrorRep
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: string } } & { query: { expand?: string | undefined } }
            output: NotFoundErrorRep
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { id: string } } & { query: { expand?: string | undefined } }
            output: RateLimitedErrorRep
            outputFormat: 'json'
            status: 429
          }
      $patch:
        | {
            input: { param: { id: string } } & { json: ApprovalRequestPatchInput }
            output: FlagConfigApprovalRequestResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & { json: ApprovalRequestPatchInput }
            output: UnauthorizedErrorRep
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: string } } & { json: ApprovalRequestPatchInput }
            output: ForbiddenErrorRep
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: string } } & { json: ApprovalRequestPatchInput }
            output: NotFoundErrorRep
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { id: string } } & { json: ApprovalRequestPatchInput }
            output: RateLimitedErrorRep
            outputFormat: 'json'
            status: 429
          }
      $delete:
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 204 }
        | {
            input: { param: { id: string } }
            output: UnauthorizedErrorRep
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: string } }
            output: ForbiddenErrorRep
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: string } }
            output: NotFoundErrorRep
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { id: string } }
            output: RateLimitedErrorRep
            outputFormat: 'json'
            status: 429
          }
    }
  } & {
    '/api/v2/approval-requests/:id/apply': {
      $post:
        | {
            input: { param: { id: string } } & { json: PostApprovalRequestApplyRequest }
            output: ApprovalRequestResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & { json: PostApprovalRequestApplyRequest }
            output: InvalidRequestErrorRep
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { id: string } } & { json: PostApprovalRequestApplyRequest }
            output: UnauthorizedErrorRep
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: string } } & { json: PostApprovalRequestApplyRequest }
            output: ForbiddenErrorRep
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: string } } & { json: PostApprovalRequestApplyRequest }
            output: NotFoundErrorRep
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { id: string } } & { json: PostApprovalRequestApplyRequest }
            output: RateLimitedErrorRep
            outputFormat: 'json'
            status: 429
          }
    }
  } & {
    '/api/v2/approval-requests/:id/reviews': {
      $post:
        | {
            input: { param: { id: string } } & { json: PostApprovalRequestReviewRequest }
            output: ApprovalRequestResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & { json: PostApprovalRequestReviewRequest }
            output: InvalidRequestErrorRep
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { id: string } } & { json: PostApprovalRequestReviewRequest }
            output: UnauthorizedErrorRep
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: string } } & { json: PostApprovalRequestReviewRequest }
            output: NotFoundErrorRep
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { id: string } } & { json: PostApprovalRequestReviewRequest }
            output: MethodNotAllowedErrorRep
            outputFormat: 'json'
            status: 405
          }
        | {
            input: { param: { id: string } } & { json: PostApprovalRequestReviewRequest }
            output: StatusConflictErrorRep
            outputFormat: 'json'
            status: 409
          }
        | {
            input: { param: { id: string } } & { json: PostApprovalRequestReviewRequest }
            output: RateLimitedErrorRep
            outputFormat: 'json'
            status: 429
          }
    }
  } & {
    '/api/v2/auditlog': {
      $get:
        | {
            input: {
              query: {
                before?: bigint | undefined
                after?: bigint | undefined
                q?: string | undefined
                limit?: bigint | undefined
                spec?: string | undefined
                member?: string | undefined
                token?: string | undefined
              }
            }
            output: AuditLogEntryListingRepCollection
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                before?: bigint | undefined
                after?: bigint | undefined
                q?: string | undefined
                limit?: bigint | undefined
                spec?: string | undefined
                member?: string | undefined
                token?: string | undefined
              }
            }
            output: InvalidRequestErrorRep
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                before?: bigint | undefined
                after?: bigint | undefined
                q?: string | undefined
                limit?: bigint | undefined
                spec?: string | undefined
                member?: string | undefined
                token?: string | undefined
              }
            }
            output: UnauthorizedErrorRep
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              query: {
                before?: bigint | undefined
                after?: bigint | undefined
                q?: string | undefined
                limit?: bigint | undefined
                spec?: string | undefined
                member?: string | undefined
                token?: string | undefined
              }
            }
            output: ForbiddenErrorRep
            outputFormat: 'json'
            status: 403
          }
        | {
            input: {
              query: {
                before?: bigint | undefined
                after?: bigint | undefined
                q?: string | undefined
                limit?: bigint | undefined
                spec?: string | undefined
                member?: string | undefined
                token?: string | undefined
              }
            }
            output: RateLimitedErrorRep
            outputFormat: 'json'
            status: 429
          }
      $post:
        | {
            input: {
              query: {
                before?: bigint | undefined
                after?: bigint | undefined
                q?: string | undefined
                limit?: bigint | undefined
                member?: string | undefined
                token?: string | undefined
                rollup?: bigint | undefined
              }
            } & { json: StatementPostList }
            output: AuditLogEntryListingRepCollection
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                before?: bigint | undefined
                after?: bigint | undefined
                q?: string | undefined
                limit?: bigint | undefined
                member?: string | undefined
                token?: string | undefined
                rollup?: bigint | undefined
              }
            } & { json: StatementPostList }
            output: InvalidRequestErrorRep
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                before?: bigint | undefined
                after?: bigint | undefined
                q?: string | undefined
                limit?: bigint | undefined
                member?: string | undefined
                token?: string | undefined
                rollup?: bigint | undefined
              }
            } & { json: StatementPostList }
            output: UnauthorizedErrorRep
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              query: {
                before?: bigint | undefined
                after?: bigint | undefined
                q?: string | undefined
                limit?: bigint | undefined
                member?: string | undefined
                token?: string | undefined
                rollup?: bigint | undefined
              }
            } & { json: StatementPostList }
            output: ForbiddenErrorRep
            outputFormat: 'json'
            status: 403
          }
        | {
            input: {
              query: {
                before?: bigint | undefined
                after?: bigint | undefined
                q?: string | undefined
                limit?: bigint | undefined
                member?: string | undefined
                token?: string | undefined
                rollup?: bigint | undefined
              }
            } & { json: StatementPostList }
            output: RateLimitedErrorRep
            outputFormat: 'json'
            status: 429
          }
    }
  } & {
    '/api/v2/auditlog/counts': {
      $post:
        | {
            input: {
              query: {
                before?: bigint | undefined
                after: bigint
                buckets?: bigint | undefined
                member?: string | undefined
                token?: string | undefined
              }
            } & { json: StatementPostList }
            output: CountBucketsResult
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                before?: bigint | undefined
                after: bigint
                buckets?: bigint | undefined
                member?: string | undefined
                token?: string | undefined
              }
            } & { json: StatementPostList }
            output: InvalidRequestErrorRep
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                before?: bigint | undefined
                after: bigint
                buckets?: bigint | undefined
                member?: string | undefined
                token?: string | undefined
              }
            } & { json: StatementPostList }
            output: UnauthorizedErrorRep
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              query: {
                before?: bigint | undefined
                after: bigint
                buckets?: bigint | undefined
                member?: string | undefined
                token?: string | undefined
              }
            } & { json: StatementPostList }
            output: ForbiddenErrorRep
            outputFormat: 'json'
            status: 403
          }
        | {
            input: {
              query: {
                before?: bigint | undefined
                after: bigint
                buckets?: bigint | undefined
                member?: string | undefined
                token?: string | undefined
              }
            } & { json: StatementPostList }
            output: RateLimitedErrorRep
            outputFormat: 'json'
            status: 429
          }
    }
  } & {
    '/api/v2/auditlog/:id': {
      $get:
        | {
            input: { param: { id: string } }
            output: AuditLogEntryRep
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } }
            output: UnauthorizedErrorRep
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: string } }
            output: ForbiddenErrorRep
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: string } }
            output: NotFoundErrorRep
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { id: string } }
            output: RateLimitedErrorRep
            outputFormat: 'json'
            status: 429
          }
    }
  } & {
    '/api/v2/caller-identity': {
      $get:
        | { input: {}; output: CallerIdentityRep; outputFormat: 'json'; status: 200 }
        | { input: {}; output: UnauthorizedErrorRep; outputFormat: 'json'; status: 401 }
        | { input: {}; output: RateLimitedErrorRep; outputFormat: 'json'; status: 429 }
    }
  } & {
    '/api/v2/code-refs/extinctions': {
      $get:
        | {
            input: {
              query: {
                repoName?: string | undefined
                branchName?: string | undefined
                projKey?: string | undefined
                flagKey?: string | undefined
                from?: bigint | undefined
                to?: bigint | undefined
              }
            }
            output: ExtinctionCollectionRep
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                repoName?: string | undefined
                branchName?: string | undefined
                projKey?: string | undefined
                flagKey?: string | undefined
                from?: bigint | undefined
                to?: bigint | undefined
              }
            }
            output: UnauthorizedErrorRep
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              query: {
                repoName?: string | undefined
                branchName?: string | undefined
                projKey?: string | undefined
                flagKey?: string | undefined
                from?: bigint | undefined
                to?: bigint | undefined
              }
            }
            output: ForbiddenErrorRep
            outputFormat: 'json'
            status: 403
          }
        | {
            input: {
              query: {
                repoName?: string | undefined
                branchName?: string | undefined
                projKey?: string | undefined
                flagKey?: string | undefined
                from?: bigint | undefined
                to?: bigint | undefined
              }
            }
            output: RateLimitedErrorRep
            outputFormat: 'json'
            status: 429
          }
    }
  } & {
    '/api/v2/code-refs/repositories': {
      $get:
        | {
            input: {
              query: {
                withBranches?: string | undefined
                withReferencesForDefaultBranch?: string | undefined
                projKey?: string | undefined
                flagKey?: string | undefined
              }
            }
            output: RepositoryCollectionRep
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                withBranches?: string | undefined
                withReferencesForDefaultBranch?: string | undefined
                projKey?: string | undefined
                flagKey?: string | undefined
              }
            }
            output: UnauthorizedErrorRep
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              query: {
                withBranches?: string | undefined
                withReferencesForDefaultBranch?: string | undefined
                projKey?: string | undefined
                flagKey?: string | undefined
              }
            }
            output: ForbiddenErrorRep
            outputFormat: 'json'
            status: 403
          }
        | {
            input: {
              query: {
                withBranches?: string | undefined
                withReferencesForDefaultBranch?: string | undefined
                projKey?: string | undefined
                flagKey?: string | undefined
              }
            }
            output: RateLimitedErrorRep
            outputFormat: 'json'
            status: 429
          }
      $post:
        | {
            input: { json: RepositoryPost }
            output: RepositoryRep
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: RepositoryPost }
            output: InvalidRequestErrorRep
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { json: RepositoryPost }
            output: UnauthorizedErrorRep
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { json: RepositoryPost }
            output: ForbiddenErrorRep
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { json: RepositoryPost }
            output: StatusConflictErrorRep
            outputFormat: 'json'
            status: 409
          }
        | {
            input: { json: RepositoryPost }
            output: RateLimitedErrorRep
            outputFormat: 'json'
            status: 429
          }
    }
  } & {
    '/api/v2/code-refs/repositories/:repo': {
      $get:
        | {
            input: { param: { repo: string } }
            output: RepositoryRep
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { repo: string } }
            output: InvalidRequestErrorRep
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { repo: string } }
            output: UnauthorizedErrorRep
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { repo: string } }
            output: ForbiddenErrorRep
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { repo: string } }
            output: NotFoundErrorRep
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { repo: string } }
            output: RateLimitedErrorRep
            outputFormat: 'json'
            status: 429
          }
      $patch:
        | {
            input: { param: { repo: string } } & { json: JSONPatch }
            output: RepositoryRep
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { repo: string } } & { json: JSONPatch }
            output: InvalidRequestErrorRep
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { repo: string } } & { json: JSONPatch }
            output: UnauthorizedErrorRep
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { repo: string } } & { json: JSONPatch }
            output: ForbiddenErrorRep
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { repo: string } } & { json: JSONPatch }
            output: NotFoundErrorRep
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { repo: string } } & { json: JSONPatch }
            output: RateLimitedErrorRep
            outputFormat: 'json'
            status: 429
          }
      $delete:
        | { input: { param: { repo: string } }; output: {}; outputFormat: string; status: 204 }
        | {
            input: { param: { repo: string } }
            output: InvalidRequestErrorRep
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { repo: string } }
            output: UnauthorizedErrorRep
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { repo: string } }
            output: ForbiddenErrorRep
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { repo: string } }
            output: NotFoundErrorRep
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { repo: string } }
            output: RateLimitedErrorRep
            outputFormat: 'json'
            status: 429
          }
    }
  } & {
    '/api/v2/code-refs/repositories/:repo/branch-delete-tasks': {
      $post:
        | {
            input: { param: { repo: string } } & { json: string[] }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { param: { repo: string } } & { json: string[] }
            output: InvalidRequestErrorRep
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { repo: string } } & { json: string[] }
            output: UnauthorizedErrorRep
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { repo: string } } & { json: string[] }
            output: ForbiddenErrorRep
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { repo: string } } & { json: string[] }
            output: NotFoundErrorRep
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { repo: string } } & { json: string[] }
            output: RateLimitedErrorRep
            outputFormat: 'json'
            status: 429
          }
    }
  } & {
    '/api/v2/code-refs/repositories/:repo/branches': {
      $get:
        | {
            input: { param: { repo: string } }
            output: BranchCollectionRep
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { repo: string } }
            output: InvalidRequestErrorRep
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { repo: string } }
            output: UnauthorizedErrorRep
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { repo: string } }
            output: ForbiddenErrorRep
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { repo: string } }
            output: NotFoundErrorRep
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { repo: string } }
            output: RateLimitedErrorRep
            outputFormat: 'json'
            status: 429
          }
    }
  } & {
    '/api/v2/code-refs/repositories/:repo/branches/:branch': {
      $get:
        | {
            input: { param: { repo: string; branch: string } } & {
              query: { projKey?: string | undefined; flagKey?: string | undefined }
            }
            output: BranchRep
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { repo: string; branch: string } } & {
              query: { projKey?: string | undefined; flagKey?: string | undefined }
            }
            output: InvalidRequestErrorRep
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { repo: string; branch: string } } & {
              query: { projKey?: string | undefined; flagKey?: string | undefined }
            }
            output: UnauthorizedErrorRep
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { repo: string; branch: string } } & {
              query: { projKey?: string | undefined; flagKey?: string | undefined }
            }
            output: ForbiddenErrorRep
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { repo: string; branch: string } } & {
              query: { projKey?: string | undefined; flagKey?: string | undefined }
            }
            output: NotFoundErrorRep
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { repo: string; branch: string } } & {
              query: { projKey?: string | undefined; flagKey?: string | undefined }
            }
            output: RateLimitedErrorRep
            outputFormat: 'json'
            status: 429
          }
      $put:
        | {
            input: { param: { repo: string; branch: string } } & { json: PutBranch }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { param: { repo: string; branch: string } } & { json: PutBranch }
            output: InvalidRequestErrorRep
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { repo: string; branch: string } } & { json: PutBranch }
            output: UnauthorizedErrorRep
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { repo: string; branch: string } } & { json: PutBranch }
            output: ForbiddenErrorRep
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { repo: string; branch: string } } & { json: PutBranch }
            output: NotFoundErrorRep
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { repo: string; branch: string } } & { json: PutBranch }
            output: StatusConflictErrorRep
            outputFormat: 'json'
            status: 409
          }
        | {
            input: { param: { repo: string; branch: string } } & { json: PutBranch }
            output: RateLimitedErrorRep
            outputFormat: 'json'
            status: 429
          }
    }
  } & {
    '/api/v2/code-refs/repositories/:repo/branches/:branch/extinction-events': {
      $post:
        | {
            input: { param: { repo: string; branch: string } } & { json: ExtinctionListPost }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { param: { repo: string; branch: string } } & { json: ExtinctionListPost }
            output: InvalidRequestErrorRep
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { repo: string; branch: string } } & { json: ExtinctionListPost }
            output: UnauthorizedErrorRep
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { repo: string; branch: string } } & { json: ExtinctionListPost }
            output: ForbiddenErrorRep
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { repo: string; branch: string } } & { json: ExtinctionListPost }
            output: NotFoundErrorRep
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { repo: string; branch: string } } & { json: ExtinctionListPost }
            output: RateLimitedErrorRep
            outputFormat: 'json'
            status: 429
          }
    }
  } & {
    '/api/v2/code-refs/statistics': {
      $get:
        | { input: {}; output: StatisticsRoot; outputFormat: 'json'; status: 200 }
        | { input: {}; output: UnauthorizedErrorRep; outputFormat: 'json'; status: 401 }
        | { input: {}; output: ForbiddenErrorRep; outputFormat: 'json'; status: 403 }
        | { input: {}; output: NotFoundErrorRep; outputFormat: 'json'; status: 404 }
        | { input: {}; output: RateLimitedErrorRep; outputFormat: 'json'; status: 429 }
    }
  } & {
    '/api/v2/code-refs/statistics/:projectKey': {
      $get:
        | {
            input: { param: { projectKey: string } } & { query: { flagKey?: string | undefined } }
            output: StatisticCollectionRep
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { projectKey: string } } & { query: { flagKey?: string | undefined } }
            output: UnauthorizedErrorRep
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { projectKey: string } } & { query: { flagKey?: string | undefined } }
            output: ForbiddenErrorRep
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { projectKey: string } } & { query: { flagKey?: string | undefined } }
            output: NotFoundErrorRep
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { projectKey: string } } & { query: { flagKey?: string | undefined } }
            output: RateLimitedErrorRep
            outputFormat: 'json'
            status: 429
          }
    }
  } & {
    '/api/v2/destinations': {
      $get:
        | { input: {}; output: Destinations; outputFormat: 'json'; status: 200 }
        | { input: {}; output: UnauthorizedErrorRep; outputFormat: 'json'; status: 401 }
        | { input: {}; output: ForbiddenErrorRep; outputFormat: 'json'; status: 403 }
        | { input: {}; output: RateLimitedErrorRep; outputFormat: 'json'; status: 429 }
    }
  } & {
    '/api/v2/destinations/generate-warehouse-destination-key-pair': {
      $post:
        | {
            input: {}
            output: GenerateWarehouseDestinationKeyPairPostRep
            outputFormat: 'json'
            status: 201
          }
        | { input: {}; output: InvalidRequestErrorRep; outputFormat: 'json'; status: 400 }
        | { input: {}; output: UnauthorizedErrorRep; outputFormat: 'json'; status: 401 }
        | { input: {}; output: ForbiddenErrorRep; outputFormat: 'json'; status: 403 }
        | { input: {}; output: StatusConflictErrorRep; outputFormat: 'json'; status: 409 }
        | { input: {}; output: RateLimitedErrorRep; outputFormat: 'json'; status: 429 }
    }
  } & {
    '/api/v2/destinations/projects/:projKey/environments/:envKey/generate-trust-policy': {
      $post:
        | {
            input: { param: { projKey: string; envKey: string } }
            output: GenerateTrustPolicyPostRep
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { param: { projKey: string; envKey: string } }
            output: InvalidRequestErrorRep
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { projKey: string; envKey: string } }
            output: UnauthorizedErrorRep
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { projKey: string; envKey: string } }
            output: ForbiddenErrorRep
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { projKey: string; envKey: string } }
            output: StatusConflictErrorRep
            outputFormat: 'json'
            status: 409
          }
        | {
            input: { param: { projKey: string; envKey: string } }
            output: RateLimitedErrorRep
            outputFormat: 'json'
            status: 429
          }
    }
  } & {
    '/api/v2/destinations/projects/:projKey/environments/:envKey/generate-warehouse-destination-key-pair': {
      $post:
        | {
            input: { param: { projKey: string; envKey: string } }
            output: GenerateWarehouseDestinationKeyPairPostRep
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { param: { projKey: string; envKey: string } }
            output: InvalidRequestErrorRep
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { projKey: string; envKey: string } }
            output: UnauthorizedErrorRep
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { projKey: string; envKey: string } }
            output: ForbiddenErrorRep
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { projKey: string; envKey: string } }
            output: StatusConflictErrorRep
            outputFormat: 'json'
            status: 409
          }
        | {
            input: { param: { projKey: string; envKey: string } }
            output: RateLimitedErrorRep
            outputFormat: 'json'
            status: 429
          }
    }
  } & {
    '/api/v2/destinations/projects/:projKey/environments/:envKey/kinds/:kind/complete-setup': {
      $post:
        | {
            input: { param: { projKey: string; envKey: string; kind: string } } & {
              json: CompleteSetupPostBody
            }
            output: Destination
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { param: { projKey: string; envKey: string; kind: string } } & {
              json: CompleteSetupPostBody
            }
            output: InvalidRequestErrorRep
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { projKey: string; envKey: string; kind: string } } & {
              json: CompleteSetupPostBody
            }
            output: UnauthorizedErrorRep
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { projKey: string; envKey: string; kind: string } } & {
              json: CompleteSetupPostBody
            }
            output: ForbiddenErrorRep
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { projKey: string; envKey: string; kind: string } } & {
              json: CompleteSetupPostBody
            }
            output: NotFoundErrorRep
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { projKey: string; envKey: string; kind: string } } & {
              json: CompleteSetupPostBody
            }
            output: RateLimitedErrorRep
            outputFormat: 'json'
            status: 429
          }
    }
  } & {
    '/api/v2/destinations/projects/:projKey/environments/:envKey/kinds/:kind/setup': {
      $post:
        | {
            input: { param: { projKey: string; envKey: string; kind: string } } & {
              json: WarehouseSetupScriptPostBody
            }
            output: WarehouseDestinationSetupScriptRep
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { param: { projKey: string; envKey: string; kind: string } } & {
              json: WarehouseSetupScriptPostBody
            }
            output: InvalidRequestErrorRep
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { projKey: string; envKey: string; kind: string } } & {
              json: WarehouseSetupScriptPostBody
            }
            output: UnauthorizedErrorRep
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { projKey: string; envKey: string; kind: string } } & {
              json: WarehouseSetupScriptPostBody
            }
            output: ForbiddenErrorRep
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { projKey: string; envKey: string; kind: string } } & {
              json: WarehouseSetupScriptPostBody
            }
            output: RateLimitedErrorRep
            outputFormat: 'json'
            status: 429
          }
    }
  } & {
    '/api/v2/destinations/:projectKey/:environmentKey': {
      $post:
        | {
            input: { param: { projectKey: string; environmentKey: string } } & {
              json: DestinationPost
            }
            output: Destination
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { param: { projectKey: string; environmentKey: string } } & {
              json: DestinationPost
            }
            output: InvalidRequestErrorRep
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { projectKey: string; environmentKey: string } } & {
              json: DestinationPost
            }
            output: UnauthorizedErrorRep
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { projectKey: string; environmentKey: string } } & {
              json: DestinationPost
            }
            output: ForbiddenErrorRep
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { projectKey: string; environmentKey: string } } & {
              json: DestinationPost
            }
            output: StatusConflictErrorRep
            outputFormat: 'json'
            status: 409
          }
        | {
            input: { param: { projectKey: string; environmentKey: string } } & {
              json: DestinationPost
            }
            output: RateLimitedErrorRep
            outputFormat: 'json'
            status: 429
          }
    }
  } & {
    '/api/v2/destinations/:projectKey/:environmentKey/:id': {
      $get:
        | {
            input: { param: { projectKey: string; environmentKey: string; id: string } }
            output: Destination
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { projectKey: string; environmentKey: string; id: string } }
            output: UnauthorizedErrorRep
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { projectKey: string; environmentKey: string; id: string } }
            output: ForbiddenErrorRep
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { projectKey: string; environmentKey: string; id: string } }
            output: NotFoundErrorRep
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { projectKey: string; environmentKey: string; id: string } }
            output: RateLimitedErrorRep
            outputFormat: 'json'
            status: 429
          }
      $patch:
        | {
            input: { param: { projectKey: string; environmentKey: string; id: string } } & {
              json: JSONPatch
            }
            output: Destination
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { projectKey: string; environmentKey: string; id: string } } & {
              json: JSONPatch
            }
            output: InvalidRequestErrorRep
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { projectKey: string; environmentKey: string; id: string } } & {
              json: JSONPatch
            }
            output: UnauthorizedErrorRep
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { projectKey: string; environmentKey: string; id: string } } & {
              json: JSONPatch
            }
            output: ForbiddenErrorRep
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { projectKey: string; environmentKey: string; id: string } } & {
              json: JSONPatch
            }
            output: NotFoundErrorRep
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { projectKey: string; environmentKey: string; id: string } } & {
              json: JSONPatch
            }
            output: StatusConflictErrorRep
            outputFormat: 'json'
            status: 409
          }
        | {
            input: { param: { projectKey: string; environmentKey: string; id: string } } & {
              json: JSONPatch
            }
            output: RateLimitedErrorRep
            outputFormat: 'json'
            status: 429
          }
      $delete:
        | {
            input: { param: { projectKey: string; environmentKey: string; id: string } }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { projectKey: string; environmentKey: string; id: string } }
            output: UnauthorizedErrorRep
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { projectKey: string; environmentKey: string; id: string } }
            output: ForbiddenErrorRep
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { projectKey: string; environmentKey: string; id: string } }
            output: NotFoundErrorRep
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { projectKey: string; environmentKey: string; id: string } }
            output: RateLimitedErrorRep
            outputFormat: 'json'
            status: 429
          }
    }
  } & {
    '/api/v2/flag-links/projects/:projectKey/flags/:featureFlagKey': {
      $get:
        | {
            input: { param: { projectKey: string; featureFlagKey: string } }
            output: FlagLinkCollectionRep
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { projectKey: string; featureFlagKey: string } }
            output: UnauthorizedErrorRep
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { projectKey: string; featureFlagKey: string } }
            output: ForbiddenErrorRep
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { projectKey: string; featureFlagKey: string } }
            output: RateLimitedErrorRep
            outputFormat: 'json'
            status: 429
          }
      $post:
        | {
            input: { param: { projectKey: string; featureFlagKey: string } } & {
              json: FlagLinkPost
            }
            output: FlagLinkRep
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { param: { projectKey: string; featureFlagKey: string } } & {
              json: FlagLinkPost
            }
            output: InvalidRequestErrorRep
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { projectKey: string; featureFlagKey: string } } & {
              json: FlagLinkPost
            }
            output: UnauthorizedErrorRep
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { projectKey: string; featureFlagKey: string } } & {
              json: FlagLinkPost
            }
            output: ForbiddenErrorRep
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { projectKey: string; featureFlagKey: string } } & {
              json: FlagLinkPost
            }
            output: NotFoundErrorRep
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { projectKey: string; featureFlagKey: string } } & {
              json: FlagLinkPost
            }
            output: RateLimitedErrorRep
            outputFormat: 'json'
            status: 429
          }
    }
  } & {
    '/api/v2/flag-links/projects/:projectKey/flags/:featureFlagKey/:id': {
      $patch:
        | {
            input: { param: { projectKey: string; featureFlagKey: string; id: string } } & {
              json: JSONPatch
            }
            output: FlagLinkRep
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { projectKey: string; featureFlagKey: string; id: string } } & {
              json: JSONPatch
            }
            output: InvalidRequestErrorRep
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { projectKey: string; featureFlagKey: string; id: string } } & {
              json: JSONPatch
            }
            output: UnauthorizedErrorRep
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { projectKey: string; featureFlagKey: string; id: string } } & {
              json: JSONPatch
            }
            output: ForbiddenErrorRep
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { projectKey: string; featureFlagKey: string; id: string } } & {
              json: JSONPatch
            }
            output: NotFoundErrorRep
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { projectKey: string; featureFlagKey: string; id: string } } & {
              json: JSONPatch
            }
            output: StatusConflictErrorRep
            outputFormat: 'json'
            status: 409
          }
        | {
            input: { param: { projectKey: string; featureFlagKey: string; id: string } } & {
              json: JSONPatch
            }
            output: RateLimitedErrorRep
            outputFormat: 'json'
            status: 429
          }
      $delete:
        | {
            input: { param: { projectKey: string; featureFlagKey: string; id: string } }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { projectKey: string; featureFlagKey: string; id: string } }
            output: InvalidRequestErrorRep
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { projectKey: string; featureFlagKey: string; id: string } }
            output: UnauthorizedErrorRep
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { projectKey: string; featureFlagKey: string; id: string } }
            output: ForbiddenErrorRep
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { projectKey: string; featureFlagKey: string; id: string } }
            output: NotFoundErrorRep
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { projectKey: string; featureFlagKey: string; id: string } }
            output: RateLimitedErrorRep
            outputFormat: 'json'
            status: 429
          }
    }
  } & {
    '/api/v2/flag-status/:projectKey/:featureFlagKey': {
      $get:
        | {
            input: { param: { projectKey: string; featureFlagKey: string } } & {
              query: { env?: string | undefined }
            }
            output: FeatureFlagStatusAcrossEnvironments
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { projectKey: string; featureFlagKey: string } } & {
              query: { env?: string | undefined }
            }
            output: UnauthorizedErrorRep
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { projectKey: string; featureFlagKey: string } } & {
              query: { env?: string | undefined }
            }
            output: ForbiddenErrorRep
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { projectKey: string; featureFlagKey: string } } & {
              query: { env?: string | undefined }
            }
            output: NotFoundErrorRep
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { projectKey: string; featureFlagKey: string } } & {
              query: { env?: string | undefined }
            }
            output: RateLimitedErrorRep
            outputFormat: 'json'
            status: 429
          }
    }
  } & {
    '/api/v2/flag-statuses/:projectKey/:environmentKey': {
      $get:
        | {
            input: { param: { projectKey: string; environmentKey: string } }
            output: FeatureFlagStatuses
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { projectKey: string; environmentKey: string } }
            output: UnauthorizedErrorRep
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { projectKey: string; environmentKey: string } }
            output: ForbiddenErrorRep
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { projectKey: string; environmentKey: string } }
            output: NotFoundErrorRep
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { projectKey: string; environmentKey: string } }
            output: RateLimitedErrorRep
            outputFormat: 'json'
            status: 429
          }
    }
  } & {
    '/api/v2/flag-statuses/:projectKey/:environmentKey/:featureFlagKey': {
      $get:
        | {
            input: { param: { projectKey: string; environmentKey: string; featureFlagKey: string } }
            output: FlagStatusRep
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { projectKey: string; environmentKey: string; featureFlagKey: string } }
            output: UnauthorizedErrorRep
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { projectKey: string; environmentKey: string; featureFlagKey: string } }
            output: ForbiddenErrorRep
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { projectKey: string; environmentKey: string; featureFlagKey: string } }
            output: NotFoundErrorRep
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { projectKey: string; environmentKey: string; featureFlagKey: string } }
            output: RateLimitedErrorRep
            outputFormat: 'json'
            status: 429
          }
    }
  } & {
    '/api/v2/flags/:projectKey': {
      $get:
        | {
            input: { param: { projectKey: string } } & {
              query: {
                env?: string | undefined
                tag?: string | undefined
                limit?: bigint | undefined
                offset?: bigint | undefined
                archived?: boolean | undefined
                summary?: boolean | undefined
                filter?: string | undefined
                sort?: string | undefined
                compare?: boolean | undefined
                expand?: string | undefined
              }
            }
            output: FeatureFlags
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { projectKey: string } } & {
              query: {
                env?: string | undefined
                tag?: string | undefined
                limit?: bigint | undefined
                offset?: bigint | undefined
                archived?: boolean | undefined
                summary?: boolean | undefined
                filter?: string | undefined
                sort?: string | undefined
                compare?: boolean | undefined
                expand?: string | undefined
              }
            }
            output: InvalidRequestErrorRep
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { projectKey: string } } & {
              query: {
                env?: string | undefined
                tag?: string | undefined
                limit?: bigint | undefined
                offset?: bigint | undefined
                archived?: boolean | undefined
                summary?: boolean | undefined
                filter?: string | undefined
                sort?: string | undefined
                compare?: boolean | undefined
                expand?: string | undefined
              }
            }
            output: UnauthorizedErrorRep
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { projectKey: string } } & {
              query: {
                env?: string | undefined
                tag?: string | undefined
                limit?: bigint | undefined
                offset?: bigint | undefined
                archived?: boolean | undefined
                summary?: boolean | undefined
                filter?: string | undefined
                sort?: string | undefined
                compare?: boolean | undefined
                expand?: string | undefined
              }
            }
            output: ForbiddenErrorRep
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { projectKey: string } } & {
              query: {
                env?: string | undefined
                tag?: string | undefined
                limit?: bigint | undefined
                offset?: bigint | undefined
                archived?: boolean | undefined
                summary?: boolean | undefined
                filter?: string | undefined
                sort?: string | undefined
                compare?: boolean | undefined
                expand?: string | undefined
              }
            }
            output: NotFoundErrorRep
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { projectKey: string } } & {
              query: {
                env?: string | undefined
                tag?: string | undefined
                limit?: bigint | undefined
                offset?: bigint | undefined
                archived?: boolean | undefined
                summary?: boolean | undefined
                filter?: string | undefined
                sort?: string | undefined
                compare?: boolean | undefined
                expand?: string | undefined
              }
            }
            output: RateLimitedErrorRep
            outputFormat: 'json'
            status: 429
          }
      $post:
        | {
            input: { param: { projectKey: string } } & { query: { clone?: string | undefined } } & {
              json: FeatureFlagBody
            }
            output: FeatureFlag
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { param: { projectKey: string } } & { query: { clone?: string | undefined } } & {
              json: FeatureFlagBody
            }
            output: InvalidRequestErrorRep
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { projectKey: string } } & { query: { clone?: string | undefined } } & {
              json: FeatureFlagBody
            }
            output: UnauthorizedErrorRep
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { projectKey: string } } & { query: { clone?: string | undefined } } & {
              json: FeatureFlagBody
            }
            output: StatusConflictErrorRep
            outputFormat: 'json'
            status: 409
          }
        | {
            input: { param: { projectKey: string } } & { query: { clone?: string | undefined } } & {
              json: FeatureFlagBody
            }
            output: RateLimitedErrorRep
            outputFormat: 'json'
            status: 429
          }
    }
  } & {
    '/api/v2/flags/:projectKey/:environmentKey/:featureFlagKey/dependent-flags': {
      $get:
        | {
            input: { param: { projectKey: string; environmentKey: string; featureFlagKey: string } }
            output: DependentFlagsByEnvironment
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { projectKey: string; environmentKey: string; featureFlagKey: string } }
            output: UnauthorizedErrorRep
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { projectKey: string; environmentKey: string; featureFlagKey: string } }
            output: ForbiddenErrorRep
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { projectKey: string; environmentKey: string; featureFlagKey: string } }
            output: NotFoundErrorRep
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { projectKey: string; environmentKey: string; featureFlagKey: string } }
            output: RateLimitedErrorRep
            outputFormat: 'json'
            status: 429
          }
    }
  } & {
    '/api/v2/flags/:projectKey/:featureFlagKey': {
      $get:
        | {
            input: { param: { projectKey: string; featureFlagKey: string } } & {
              query: { env?: string | undefined; expand?: string | undefined }
            }
            output: FeatureFlag
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { projectKey: string; featureFlagKey: string } } & {
              query: { env?: string | undefined; expand?: string | undefined }
            }
            output: UnauthorizedErrorRep
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { projectKey: string; featureFlagKey: string } } & {
              query: { env?: string | undefined; expand?: string | undefined }
            }
            output: ForbiddenErrorRep
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { projectKey: string; featureFlagKey: string } } & {
              query: { env?: string | undefined; expand?: string | undefined }
            }
            output: NotFoundErrorRep
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { projectKey: string; featureFlagKey: string } } & {
              query: { env?: string | undefined; expand?: string | undefined }
            }
            output: RateLimitedErrorRep
            outputFormat: 'json'
            status: 429
          }
      $patch:
        | {
            input: { param: { projectKey: string; featureFlagKey: string } } & {
              query: { ignoreConflicts?: boolean | undefined; dryRun?: boolean | undefined }
            } & { json: PatchWithComment }
            output: FeatureFlag
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { projectKey: string; featureFlagKey: string } } & {
              query: { ignoreConflicts?: boolean | undefined; dryRun?: boolean | undefined }
            } & { json: PatchWithComment }
            output: InvalidRequestErrorRep
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { projectKey: string; featureFlagKey: string } } & {
              query: { ignoreConflicts?: boolean | undefined; dryRun?: boolean | undefined }
            } & { json: PatchWithComment }
            output: UnauthorizedErrorRep
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { projectKey: string; featureFlagKey: string } } & {
              query: { ignoreConflicts?: boolean | undefined; dryRun?: boolean | undefined }
            } & { json: PatchWithComment }
            output: NotFoundErrorRep
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { projectKey: string; featureFlagKey: string } } & {
              query: { ignoreConflicts?: boolean | undefined; dryRun?: boolean | undefined }
            } & { json: PatchWithComment }
            output: MethodNotAllowedErrorRep
            outputFormat: 'json'
            status: 405
          }
        | {
            input: { param: { projectKey: string; featureFlagKey: string } } & {
              query: { ignoreConflicts?: boolean | undefined; dryRun?: boolean | undefined }
            } & { json: PatchWithComment }
            output: StatusConflictErrorRep
            outputFormat: 'json'
            status: 409
          }
        | {
            input: { param: { projectKey: string; featureFlagKey: string } } & {
              query: { ignoreConflicts?: boolean | undefined; dryRun?: boolean | undefined }
            } & { json: PatchWithComment }
            output: RateLimitedErrorRep
            outputFormat: 'json'
            status: 429
          }
      $delete:
        | {
            input: { param: { projectKey: string; featureFlagKey: string } }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { projectKey: string; featureFlagKey: string } }
            output: UnauthorizedErrorRep
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { projectKey: string; featureFlagKey: string } }
            output: NotFoundErrorRep
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { projectKey: string; featureFlagKey: string } }
            output: StatusConflictErrorRep
            outputFormat: 'json'
            status: 409
          }
        | {
            input: { param: { projectKey: string; featureFlagKey: string } }
            output: RateLimitedErrorRep
            outputFormat: 'json'
            status: 429
          }
    }
  } & {
    '/api/v2/flags/:projectKey/:featureFlagKey/copy': {
      $post:
        | {
            input: { param: { projectKey: string; featureFlagKey: string } } & {
              json: FlagCopyConfigPost
            }
            output: FeatureFlag
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { param: { projectKey: string; featureFlagKey: string } } & {
              json: FlagCopyConfigPost
            }
            output: InvalidRequestErrorRep
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { projectKey: string; featureFlagKey: string } } & {
              json: FlagCopyConfigPost
            }
            output: UnauthorizedErrorRep
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { projectKey: string; featureFlagKey: string } } & {
              json: FlagCopyConfigPost
            }
            output: MethodNotAllowedErrorRep
            outputFormat: 'json'
            status: 405
          }
        | {
            input: { param: { projectKey: string; featureFlagKey: string } } & {
              json: FlagCopyConfigPost
            }
            output: StatusConflictErrorRep
            outputFormat: 'json'
            status: 409
          }
        | {
            input: { param: { projectKey: string; featureFlagKey: string } } & {
              json: FlagCopyConfigPost
            }
            output: RateLimitedErrorRep
            outputFormat: 'json'
            status: 429
          }
    }
  } & {
    '/api/v2/flags/:projectKey/:featureFlagKey/dependent-flags': {
      $get:
        | {
            input: { param: { projectKey: string; featureFlagKey: string } }
            output: MultiEnvironmentDependentFlags
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { projectKey: string; featureFlagKey: string } }
            output: UnauthorizedErrorRep
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { projectKey: string; featureFlagKey: string } }
            output: ForbiddenErrorRep
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { projectKey: string; featureFlagKey: string } }
            output: NotFoundErrorRep
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { projectKey: string; featureFlagKey: string } }
            output: RateLimitedErrorRep
            outputFormat: 'json'
            status: 429
          }
    }
  } & {
    '/api/v2/flags/:projectKey/:featureFlagKey/expiring-targets/:environmentKey': {
      $get:
        | {
            input: { param: { projectKey: string; environmentKey: string; featureFlagKey: string } }
            output: ExpiringTargetGetResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { projectKey: string; environmentKey: string; featureFlagKey: string } }
            output: UnauthorizedErrorRep
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { projectKey: string; environmentKey: string; featureFlagKey: string } }
            output: ForbiddenErrorRep
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { projectKey: string; environmentKey: string; featureFlagKey: string } }
            output: NotFoundErrorRep
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { projectKey: string; environmentKey: string; featureFlagKey: string } }
            output: RateLimitedErrorRep
            outputFormat: 'json'
            status: 429
          }
      $patch:
        | {
            input: {
              param: { projectKey: string; environmentKey: string; featureFlagKey: string }
            } & { json: PatchFlagsRequest }
            output: ExpiringTargetPatchResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              param: { projectKey: string; environmentKey: string; featureFlagKey: string }
            } & { json: PatchFlagsRequest }
            output: InvalidRequestErrorRep
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              param: { projectKey: string; environmentKey: string; featureFlagKey: string }
            } & { json: PatchFlagsRequest }
            output: UnauthorizedErrorRep
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              param: { projectKey: string; environmentKey: string; featureFlagKey: string }
            } & { json: PatchFlagsRequest }
            output: ForbiddenErrorRep
            outputFormat: 'json'
            status: 403
          }
        | {
            input: {
              param: { projectKey: string; environmentKey: string; featureFlagKey: string }
            } & { json: PatchFlagsRequest }
            output: NotFoundErrorRep
            outputFormat: 'json'
            status: 404
          }
        | {
            input: {
              param: { projectKey: string; environmentKey: string; featureFlagKey: string }
            } & { json: PatchFlagsRequest }
            output: RateLimitedErrorRep
            outputFormat: 'json'
            status: 429
          }
    }
  } & {
    '/api/v2/flags/:projectKey/:featureFlagKey/expiring-user-targets/:environmentKey': {
      $get:
        | {
            input: { param: { projectKey: string; environmentKey: string; featureFlagKey: string } }
            output: ExpiringUserTargetGetResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { projectKey: string; environmentKey: string; featureFlagKey: string } }
            output: UnauthorizedErrorRep
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { projectKey: string; environmentKey: string; featureFlagKey: string } }
            output: ForbiddenErrorRep
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { projectKey: string; environmentKey: string; featureFlagKey: string } }
            output: NotFoundErrorRep
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { projectKey: string; environmentKey: string; featureFlagKey: string } }
            output: RateLimitedErrorRep
            outputFormat: 'json'
            status: 429
          }
      $patch:
        | {
            input: {
              param: { projectKey: string; environmentKey: string; featureFlagKey: string }
            } & { json: PatchFlagsRequest }
            output: ExpiringUserTargetPatchResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              param: { projectKey: string; environmentKey: string; featureFlagKey: string }
            } & { json: PatchFlagsRequest }
            output: InvalidRequestErrorRep
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              param: { projectKey: string; environmentKey: string; featureFlagKey: string }
            } & { json: PatchFlagsRequest }
            output: UnauthorizedErrorRep
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              param: { projectKey: string; environmentKey: string; featureFlagKey: string }
            } & { json: PatchFlagsRequest }
            output: ForbiddenErrorRep
            outputFormat: 'json'
            status: 403
          }
        | {
            input: {
              param: { projectKey: string; environmentKey: string; featureFlagKey: string }
            } & { json: PatchFlagsRequest }
            output: NotFoundErrorRep
            outputFormat: 'json'
            status: 404
          }
        | {
            input: {
              param: { projectKey: string; environmentKey: string; featureFlagKey: string }
            } & { json: PatchFlagsRequest }
            output: RateLimitedErrorRep
            outputFormat: 'json'
            status: 429
          }
    }
  } & {
    '/api/v2/flags/:projectKey/:featureFlagKey/triggers/:environmentKey': {
      $get:
        | {
            input: { param: { projectKey: string; environmentKey: string; featureFlagKey: string } }
            output: TriggerWorkflowCollectionRep
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { projectKey: string; environmentKey: string; featureFlagKey: string } }
            output: UnauthorizedErrorRep
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { projectKey: string; environmentKey: string; featureFlagKey: string } }
            output: ForbiddenErrorRep
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { projectKey: string; environmentKey: string; featureFlagKey: string } }
            output: RateLimitedErrorRep
            outputFormat: 'json'
            status: 429
          }
      $post:
        | {
            input: {
              param: { projectKey: string; environmentKey: string; featureFlagKey: string }
            } & { json: TriggerPost }
            output: TriggerWorkflowRep
            outputFormat: 'json'
            status: 201
          }
        | {
            input: {
              param: { projectKey: string; environmentKey: string; featureFlagKey: string }
            } & { json: TriggerPost }
            output: InvalidRequestErrorRep
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              param: { projectKey: string; environmentKey: string; featureFlagKey: string }
            } & { json: TriggerPost }
            output: UnauthorizedErrorRep
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              param: { projectKey: string; environmentKey: string; featureFlagKey: string }
            } & { json: TriggerPost }
            output: ForbiddenErrorRep
            outputFormat: 'json'
            status: 403
          }
        | {
            input: {
              param: { projectKey: string; environmentKey: string; featureFlagKey: string }
            } & { json: TriggerPost }
            output: NotFoundErrorRep
            outputFormat: 'json'
            status: 404
          }
        | {
            input: {
              param: { projectKey: string; environmentKey: string; featureFlagKey: string }
            } & { json: TriggerPost }
            output: MethodNotAllowedErrorRep
            outputFormat: 'json'
            status: 405
          }
        | {
            input: {
              param: { projectKey: string; environmentKey: string; featureFlagKey: string }
            } & { json: TriggerPost }
            output: RateLimitedErrorRep
            outputFormat: 'json'
            status: 429
          }
    }
  } & {
    '/api/v2/flags/:projectKey/:featureFlagKey/triggers/:environmentKey/:id': {
      $get:
        | {
            input: {
              param: {
                projectKey: string
                featureFlagKey: string
                environmentKey: string
                id: string
              }
            }
            output: TriggerWorkflowRep
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              param: {
                projectKey: string
                featureFlagKey: string
                environmentKey: string
                id: string
              }
            }
            output: UnauthorizedErrorRep
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              param: {
                projectKey: string
                featureFlagKey: string
                environmentKey: string
                id: string
              }
            }
            output: ForbiddenErrorRep
            outputFormat: 'json'
            status: 403
          }
        | {
            input: {
              param: {
                projectKey: string
                featureFlagKey: string
                environmentKey: string
                id: string
              }
            }
            output: NotFoundErrorRep
            outputFormat: 'json'
            status: 404
          }
        | {
            input: {
              param: {
                projectKey: string
                featureFlagKey: string
                environmentKey: string
                id: string
              }
            }
            output: RateLimitedErrorRep
            outputFormat: 'json'
            status: 429
          }
      $patch:
        | {
            input: {
              param: {
                projectKey: string
                environmentKey: string
                featureFlagKey: string
                id: string
              }
            } & { json: FlagTriggerInput }
            output: TriggerWorkflowRep
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              param: {
                projectKey: string
                environmentKey: string
                featureFlagKey: string
                id: string
              }
            } & { json: FlagTriggerInput }
            output: InvalidRequestErrorRep
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              param: {
                projectKey: string
                environmentKey: string
                featureFlagKey: string
                id: string
              }
            } & { json: FlagTriggerInput }
            output: UnauthorizedErrorRep
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              param: {
                projectKey: string
                environmentKey: string
                featureFlagKey: string
                id: string
              }
            } & { json: FlagTriggerInput }
            output: ForbiddenErrorRep
            outputFormat: 'json'
            status: 403
          }
        | {
            input: {
              param: {
                projectKey: string
                environmentKey: string
                featureFlagKey: string
                id: string
              }
            } & { json: FlagTriggerInput }
            output: NotFoundErrorRep
            outputFormat: 'json'
            status: 404
          }
        | {
            input: {
              param: {
                projectKey: string
                environmentKey: string
                featureFlagKey: string
                id: string
              }
            } & { json: FlagTriggerInput }
            output: MethodNotAllowedErrorRep
            outputFormat: 'json'
            status: 405
          }
        | {
            input: {
              param: {
                projectKey: string
                environmentKey: string
                featureFlagKey: string
                id: string
              }
            } & { json: FlagTriggerInput }
            output: StatusConflictErrorRep
            outputFormat: 'json'
            status: 409
          }
        | {
            input: {
              param: {
                projectKey: string
                environmentKey: string
                featureFlagKey: string
                id: string
              }
            } & { json: FlagTriggerInput }
            output: RateLimitedErrorRep
            outputFormat: 'json'
            status: 429
          }
      $delete:
        | {
            input: {
              param: {
                projectKey: string
                environmentKey: string
                featureFlagKey: string
                id: string
              }
            }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: {
              param: {
                projectKey: string
                environmentKey: string
                featureFlagKey: string
                id: string
              }
            }
            output: InvalidRequestErrorRep
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              param: {
                projectKey: string
                environmentKey: string
                featureFlagKey: string
                id: string
              }
            }
            output: UnauthorizedErrorRep
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              param: {
                projectKey: string
                environmentKey: string
                featureFlagKey: string
                id: string
              }
            }
            output: ForbiddenErrorRep
            outputFormat: 'json'
            status: 403
          }
        | {
            input: {
              param: {
                projectKey: string
                environmentKey: string
                featureFlagKey: string
                id: string
              }
            }
            output: NotFoundErrorRep
            outputFormat: 'json'
            status: 404
          }
        | {
            input: {
              param: {
                projectKey: string
                environmentKey: string
                featureFlagKey: string
                id: string
              }
            }
            output: RateLimitedErrorRep
            outputFormat: 'json'
            status: 429
          }
    }
  } & {
    '/api/v2/flags/:projectKey/:flagKey/release': {
      $get:
        | {
            input: { param: { projectKey: string; flagKey: string } }
            output: PipelineRelease
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { projectKey: string; flagKey: string } }
            output: NotFoundErrorRep
            outputFormat: 'json'
            status: 404
          }
      $patch:
        | {
            input: { param: { projectKey: string; flagKey: string } } & { json: JSONPatch }
            output: PipelineRelease
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { projectKey: string; flagKey: string } } & { json: JSONPatch }
            output: InvalidRequestErrorRep
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { projectKey: string; flagKey: string } } & { json: JSONPatch }
            output: UnauthorizedErrorRep
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { projectKey: string; flagKey: string } } & { json: JSONPatch }
            output: ForbiddenErrorRep
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { projectKey: string; flagKey: string } } & { json: JSONPatch }
            output: NotFoundErrorRep
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { projectKey: string; flagKey: string } } & { json: JSONPatch }
            output: RateLimitedErrorRep
            outputFormat: 'json'
            status: 429
          }
      $delete:
        | {
            input: { param: { projectKey: string; flagKey: string } }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { projectKey: string; flagKey: string } }
            output: ForbiddenErrorRep
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { projectKey: string; flagKey: string } }
            output: NotFoundErrorRep
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/api/v2/integration-capabilities/big-segment-store': {
      $get:
        | {
            input: {}
            output: BigSegmentStoreIntegrationCollection
            outputFormat: 'json'
            status: 200
          }
        | { input: {}; output: UnauthorizedErrorRep; outputFormat: 'json'; status: 401 }
        | { input: {}; output: ForbiddenErrorRep; outputFormat: 'json'; status: 403 }
        | { input: {}; output: NotFoundErrorRep; outputFormat: 'json'; status: 404 }
        | { input: {}; output: RateLimitedErrorRep; outputFormat: 'json'; status: 429 }
    }
  } & {
    '/api/v2/integration-capabilities/big-segment-store/:projectKey/:environmentKey/:integrationKey': {
      $post:
        | {
            input: {
              param: { projectKey: string; environmentKey: string; integrationKey: string }
            } & { json: IntegrationDeliveryConfigurationPost }
            output: BigSegmentStoreIntegration
            outputFormat: 'json'
            status: 201
          }
        | {
            input: {
              param: { projectKey: string; environmentKey: string; integrationKey: string }
            } & { json: IntegrationDeliveryConfigurationPost }
            output: InvalidRequestErrorRep
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              param: { projectKey: string; environmentKey: string; integrationKey: string }
            } & { json: IntegrationDeliveryConfigurationPost }
            output: UnauthorizedErrorRep
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              param: { projectKey: string; environmentKey: string; integrationKey: string }
            } & { json: IntegrationDeliveryConfigurationPost }
            output: ForbiddenErrorRep
            outputFormat: 'json'
            status: 403
          }
        | {
            input: {
              param: { projectKey: string; environmentKey: string; integrationKey: string }
            } & { json: IntegrationDeliveryConfigurationPost }
            output: NotFoundErrorRep
            outputFormat: 'json'
            status: 404
          }
        | {
            input: {
              param: { projectKey: string; environmentKey: string; integrationKey: string }
            } & { json: IntegrationDeliveryConfigurationPost }
            output: StatusConflictErrorRep
            outputFormat: 'json'
            status: 409
          }
        | {
            input: {
              param: { projectKey: string; environmentKey: string; integrationKey: string }
            } & { json: IntegrationDeliveryConfigurationPost }
            output: RateLimitedErrorRep
            outputFormat: 'json'
            status: 429
          }
    }
  } & {
    '/api/v2/integration-capabilities/big-segment-store/:projectKey/:environmentKey/:integrationKey/:integrationId': {
      $get:
        | {
            input: {
              param: {
                projectKey: string
                environmentKey: string
                integrationKey: string
                integrationId: string
              }
            }
            output: BigSegmentStoreIntegration
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              param: {
                projectKey: string
                environmentKey: string
                integrationKey: string
                integrationId: string
              }
            }
            output: UnauthorizedErrorRep
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              param: {
                projectKey: string
                environmentKey: string
                integrationKey: string
                integrationId: string
              }
            }
            output: ForbiddenErrorRep
            outputFormat: 'json'
            status: 403
          }
        | {
            input: {
              param: {
                projectKey: string
                environmentKey: string
                integrationKey: string
                integrationId: string
              }
            }
            output: NotFoundErrorRep
            outputFormat: 'json'
            status: 404
          }
        | {
            input: {
              param: {
                projectKey: string
                environmentKey: string
                integrationKey: string
                integrationId: string
              }
            }
            output: RateLimitedErrorRep
            outputFormat: 'json'
            status: 429
          }
      $patch:
        | {
            input: {
              param: {
                projectKey: string
                environmentKey: string
                integrationKey: string
                integrationId: string
              }
            } & { json: JSONPatch }
            output: BigSegmentStoreIntegration
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              param: {
                projectKey: string
                environmentKey: string
                integrationKey: string
                integrationId: string
              }
            } & { json: JSONPatch }
            output: InvalidRequestErrorRep
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              param: {
                projectKey: string
                environmentKey: string
                integrationKey: string
                integrationId: string
              }
            } & { json: JSONPatch }
            output: UnauthorizedErrorRep
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              param: {
                projectKey: string
                environmentKey: string
                integrationKey: string
                integrationId: string
              }
            } & { json: JSONPatch }
            output: ForbiddenErrorRep
            outputFormat: 'json'
            status: 403
          }
        | {
            input: {
              param: {
                projectKey: string
                environmentKey: string
                integrationKey: string
                integrationId: string
              }
            } & { json: JSONPatch }
            output: NotFoundErrorRep
            outputFormat: 'json'
            status: 404
          }
        | {
            input: {
              param: {
                projectKey: string
                environmentKey: string
                integrationKey: string
                integrationId: string
              }
            } & { json: JSONPatch }
            output: StatusConflictErrorRep
            outputFormat: 'json'
            status: 409
          }
        | {
            input: {
              param: {
                projectKey: string
                environmentKey: string
                integrationKey: string
                integrationId: string
              }
            } & { json: JSONPatch }
            output: RateLimitedErrorRep
            outputFormat: 'json'
            status: 429
          }
      $delete:
        | {
            input: {
              param: {
                projectKey: string
                environmentKey: string
                integrationKey: string
                integrationId: string
              }
            }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: {
              param: {
                projectKey: string
                environmentKey: string
                integrationKey: string
                integrationId: string
              }
            }
            output: UnauthorizedErrorRep
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              param: {
                projectKey: string
                environmentKey: string
                integrationKey: string
                integrationId: string
              }
            }
            output: ForbiddenErrorRep
            outputFormat: 'json'
            status: 403
          }
        | {
            input: {
              param: {
                projectKey: string
                environmentKey: string
                integrationKey: string
                integrationId: string
              }
            }
            output: NotFoundErrorRep
            outputFormat: 'json'
            status: 404
          }
        | {
            input: {
              param: {
                projectKey: string
                environmentKey: string
                integrationKey: string
                integrationId: string
              }
            }
            output: StatusConflictErrorRep
            outputFormat: 'json'
            status: 409
          }
        | {
            input: {
              param: {
                projectKey: string
                environmentKey: string
                integrationKey: string
                integrationId: string
              }
            }
            output: RateLimitedErrorRep
            outputFormat: 'json'
            status: 429
          }
    }
  } & {
    '/api/v2/integration-capabilities/featureStore': {
      $get:
        | {
            input: {}
            output: IntegrationDeliveryConfigurationCollection
            outputFormat: 'json'
            status: 200
          }
        | { input: {}; output: UnauthorizedErrorRep; outputFormat: 'json'; status: 401 }
        | { input: {}; output: ForbiddenErrorRep; outputFormat: 'json'; status: 403 }
        | { input: {}; output: NotFoundErrorRep; outputFormat: 'json'; status: 404 }
        | { input: {}; output: RateLimitedErrorRep; outputFormat: 'json'; status: 429 }
    }
  } & {
    '/api/v2/integration-capabilities/featureStore/:projectKey/:environmentKey': {
      $get:
        | {
            input: { param: { projectKey: string; environmentKey: string } }
            output: IntegrationDeliveryConfigurationCollection
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { projectKey: string; environmentKey: string } }
            output: UnauthorizedErrorRep
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { projectKey: string; environmentKey: string } }
            output: ForbiddenErrorRep
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { projectKey: string; environmentKey: string } }
            output: NotFoundErrorRep
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { projectKey: string; environmentKey: string } }
            output: RateLimitedErrorRep
            outputFormat: 'json'
            status: 429
          }
    }
  } & {
    '/api/v2/integration-capabilities/featureStore/:projectKey/:environmentKey/:integrationKey': {
      $post:
        | {
            input: {
              param: { projectKey: string; environmentKey: string; integrationKey: string }
            } & { json: IntegrationDeliveryConfigurationPost }
            output: IntegrationDeliveryConfiguration
            outputFormat: 'json'
            status: 201
          }
        | {
            input: {
              param: { projectKey: string; environmentKey: string; integrationKey: string }
            } & { json: IntegrationDeliveryConfigurationPost }
            output: InvalidRequestErrorRep
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              param: { projectKey: string; environmentKey: string; integrationKey: string }
            } & { json: IntegrationDeliveryConfigurationPost }
            output: UnauthorizedErrorRep
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              param: { projectKey: string; environmentKey: string; integrationKey: string }
            } & { json: IntegrationDeliveryConfigurationPost }
            output: ForbiddenErrorRep
            outputFormat: 'json'
            status: 403
          }
        | {
            input: {
              param: { projectKey: string; environmentKey: string; integrationKey: string }
            } & { json: IntegrationDeliveryConfigurationPost }
            output: NotFoundErrorRep
            outputFormat: 'json'
            status: 404
          }
        | {
            input: {
              param: { projectKey: string; environmentKey: string; integrationKey: string }
            } & { json: IntegrationDeliveryConfigurationPost }
            output: RateLimitedErrorRep
            outputFormat: 'json'
            status: 429
          }
    }
  } & {
    '/api/v2/integration-capabilities/featureStore/:projectKey/:environmentKey/:integrationKey/:id': {
      $get:
        | {
            input: {
              param: {
                projectKey: string
                environmentKey: string
                integrationKey: string
                id: string
              }
            }
            output: IntegrationDeliveryConfiguration
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              param: {
                projectKey: string
                environmentKey: string
                integrationKey: string
                id: string
              }
            }
            output: NotFoundErrorRep
            outputFormat: 'json'
            status: 404
          }
        | {
            input: {
              param: {
                projectKey: string
                environmentKey: string
                integrationKey: string
                id: string
              }
            }
            output: RateLimitedErrorRep
            outputFormat: 'json'
            status: 429
          }
      $patch:
        | {
            input: {
              param: {
                projectKey: string
                environmentKey: string
                integrationKey: string
                id: string
              }
            } & { json: JSONPatch }
            output: IntegrationDeliveryConfiguration
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              param: {
                projectKey: string
                environmentKey: string
                integrationKey: string
                id: string
              }
            } & { json: JSONPatch }
            output: InvalidRequestErrorRep
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              param: {
                projectKey: string
                environmentKey: string
                integrationKey: string
                id: string
              }
            } & { json: JSONPatch }
            output: UnauthorizedErrorRep
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              param: {
                projectKey: string
                environmentKey: string
                integrationKey: string
                id: string
              }
            } & { json: JSONPatch }
            output: ForbiddenErrorRep
            outputFormat: 'json'
            status: 403
          }
        | {
            input: {
              param: {
                projectKey: string
                environmentKey: string
                integrationKey: string
                id: string
              }
            } & { json: JSONPatch }
            output: NotFoundErrorRep
            outputFormat: 'json'
            status: 404
          }
        | {
            input: {
              param: {
                projectKey: string
                environmentKey: string
                integrationKey: string
                id: string
              }
            } & { json: JSONPatch }
            output: PatchFailedErrorRep
            outputFormat: 'json'
            status: 422
          }
        | {
            input: {
              param: {
                projectKey: string
                environmentKey: string
                integrationKey: string
                id: string
              }
            } & { json: JSONPatch }
            output: RateLimitedErrorRep
            outputFormat: 'json'
            status: 429
          }
      $delete:
        | {
            input: {
              param: {
                projectKey: string
                environmentKey: string
                integrationKey: string
                id: string
              }
            }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: {
              param: {
                projectKey: string
                environmentKey: string
                integrationKey: string
                id: string
              }
            }
            output: InvalidRequestErrorRep
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              param: {
                projectKey: string
                environmentKey: string
                integrationKey: string
                id: string
              }
            }
            output: UnauthorizedErrorRep
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              param: {
                projectKey: string
                environmentKey: string
                integrationKey: string
                id: string
              }
            }
            output: ForbiddenErrorRep
            outputFormat: 'json'
            status: 403
          }
        | {
            input: {
              param: {
                projectKey: string
                environmentKey: string
                integrationKey: string
                id: string
              }
            }
            output: NotFoundErrorRep
            outputFormat: 'json'
            status: 404
          }
        | {
            input: {
              param: {
                projectKey: string
                environmentKey: string
                integrationKey: string
                id: string
              }
            }
            output: RateLimitedErrorRep
            outputFormat: 'json'
            status: 429
          }
    }
  } & {
    '/api/v2/integration-capabilities/featureStore/:projectKey/:environmentKey/:integrationKey/:id/validate': {
      $post:
        | {
            input: {
              param: {
                projectKey: string
                environmentKey: string
                integrationKey: string
                id: string
              }
            }
            output: IntegrationDeliveryConfigurationResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              param: {
                projectKey: string
                environmentKey: string
                integrationKey: string
                id: string
              }
            }
            output: InvalidRequestErrorRep
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              param: {
                projectKey: string
                environmentKey: string
                integrationKey: string
                id: string
              }
            }
            output: UnauthorizedErrorRep
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              param: {
                projectKey: string
                environmentKey: string
                integrationKey: string
                id: string
              }
            }
            output: ForbiddenErrorRep
            outputFormat: 'json'
            status: 403
          }
        | {
            input: {
              param: {
                projectKey: string
                environmentKey: string
                integrationKey: string
                id: string
              }
            }
            output: NotFoundErrorRep
            outputFormat: 'json'
            status: 404
          }
        | {
            input: {
              param: {
                projectKey: string
                environmentKey: string
                integrationKey: string
                id: string
              }
            }
            output: RateLimitedErrorRep
            outputFormat: 'json'
            status: 429
          }
    }
  } & {
    '/api/v2/integration-capabilities/flag-import': {
      $get:
        | { input: {}; output: FlagImportIntegrationCollection; outputFormat: 'json'; status: 200 }
        | { input: {}; output: InvalidRequestErrorRep; outputFormat: 'json'; status: 400 }
        | { input: {}; output: UnauthorizedErrorRep; outputFormat: 'json'; status: 401 }
        | { input: {}; output: ForbiddenErrorRep; outputFormat: 'json'; status: 403 }
        | { input: {}; output: NotFoundErrorRep; outputFormat: 'json'; status: 404 }
        | { input: {}; output: StatusConflictErrorRep; outputFormat: 'json'; status: 409 }
        | { input: {}; output: RateLimitedErrorRep; outputFormat: 'json'; status: 429 }
    }
  } & {
    '/api/v2/integration-capabilities/flag-import/:projectKey/:integrationKey': {
      $post:
        | {
            input: { param: { projectKey: string; integrationKey: string } } & {
              json: FlagImportConfigurationPost
            }
            output: FlagImportIntegration
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { projectKey: string; integrationKey: string } } & {
              json: FlagImportConfigurationPost
            }
            output: InvalidRequestErrorRep
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { projectKey: string; integrationKey: string } } & {
              json: FlagImportConfigurationPost
            }
            output: UnauthorizedErrorRep
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { projectKey: string; integrationKey: string } } & {
              json: FlagImportConfigurationPost
            }
            output: ForbiddenErrorRep
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { projectKey: string; integrationKey: string } } & {
              json: FlagImportConfigurationPost
            }
            output: NotFoundErrorRep
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { projectKey: string; integrationKey: string } } & {
              json: FlagImportConfigurationPost
            }
            output: StatusConflictErrorRep
            outputFormat: 'json'
            status: 409
          }
        | {
            input: { param: { projectKey: string; integrationKey: string } } & {
              json: FlagImportConfigurationPost
            }
            output: RateLimitedErrorRep
            outputFormat: 'json'
            status: 429
          }
    }
  } & {
    '/api/v2/integration-capabilities/flag-import/:projectKey/:integrationKey/:integrationId': {
      $get:
        | {
            input: { param: { projectKey: string; integrationKey: string; integrationId: string } }
            output: FlagImportIntegration
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { projectKey: string; integrationKey: string; integrationId: string } }
            output: InvalidRequestErrorRep
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { projectKey: string; integrationKey: string; integrationId: string } }
            output: UnauthorizedErrorRep
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { projectKey: string; integrationKey: string; integrationId: string } }
            output: ForbiddenErrorRep
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { projectKey: string; integrationKey: string; integrationId: string } }
            output: NotFoundErrorRep
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { projectKey: string; integrationKey: string; integrationId: string } }
            output: StatusConflictErrorRep
            outputFormat: 'json'
            status: 409
          }
        | {
            input: { param: { projectKey: string; integrationKey: string; integrationId: string } }
            output: RateLimitedErrorRep
            outputFormat: 'json'
            status: 429
          }
      $patch:
        | {
            input: {
              param: { projectKey: string; integrationKey: string; integrationId: string }
            } & { json: JSONPatch }
            output: FlagImportIntegration
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              param: { projectKey: string; integrationKey: string; integrationId: string }
            } & { json: JSONPatch }
            output: InvalidRequestErrorRep
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              param: { projectKey: string; integrationKey: string; integrationId: string }
            } & { json: JSONPatch }
            output: UnauthorizedErrorRep
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              param: { projectKey: string; integrationKey: string; integrationId: string }
            } & { json: JSONPatch }
            output: ForbiddenErrorRep
            outputFormat: 'json'
            status: 403
          }
        | {
            input: {
              param: { projectKey: string; integrationKey: string; integrationId: string }
            } & { json: JSONPatch }
            output: NotFoundErrorRep
            outputFormat: 'json'
            status: 404
          }
        | {
            input: {
              param: { projectKey: string; integrationKey: string; integrationId: string }
            } & { json: JSONPatch }
            output: StatusConflictErrorRep
            outputFormat: 'json'
            status: 409
          }
        | {
            input: {
              param: { projectKey: string; integrationKey: string; integrationId: string }
            } & { json: JSONPatch }
            output: RateLimitedErrorRep
            outputFormat: 'json'
            status: 429
          }
      $delete:
        | {
            input: { param: { projectKey: string; integrationKey: string; integrationId: string } }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { projectKey: string; integrationKey: string; integrationId: string } }
            output: UnauthorizedErrorRep
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { projectKey: string; integrationKey: string; integrationId: string } }
            output: ForbiddenErrorRep
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { projectKey: string; integrationKey: string; integrationId: string } }
            output: NotFoundErrorRep
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { projectKey: string; integrationKey: string; integrationId: string } }
            output: StatusConflictErrorRep
            outputFormat: 'json'
            status: 409
          }
        | {
            input: { param: { projectKey: string; integrationKey: string; integrationId: string } }
            output: RateLimitedErrorRep
            outputFormat: 'json'
            status: 429
          }
    }
  } & {
    '/api/v2/integration-capabilities/flag-import/:projectKey/:integrationKey/:integrationId/trigger': {
      $post:
        | {
            input: { param: { projectKey: string; integrationKey: string; integrationId: string } }
            output: {}
            outputFormat: string
            status: 201
          }
        | {
            input: { param: { projectKey: string; integrationKey: string; integrationId: string } }
            output: InvalidRequestErrorRep
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { projectKey: string; integrationKey: string; integrationId: string } }
            output: UnauthorizedErrorRep
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { projectKey: string; integrationKey: string; integrationId: string } }
            output: ForbiddenErrorRep
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { projectKey: string; integrationKey: string; integrationId: string } }
            output: NotFoundErrorRep
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { projectKey: string; integrationKey: string; integrationId: string } }
            output: StatusConflictErrorRep
            outputFormat: 'json'
            status: 409
          }
        | {
            input: { param: { projectKey: string; integrationKey: string; integrationId: string } }
            output: RateLimitedErrorRep
            outputFormat: 'json'
            status: 429
          }
    }
  } & {
    '/api/v2/integration-configurations/keys/:integrationKey': {
      $get:
        | {
            input: { param: { integrationKey: string } } & {
              query: { includePending?: boolean | undefined }
            }
            output: IntegrationConfigurationCollectionRep
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { integrationKey: string } } & {
              query: { includePending?: boolean | undefined }
            }
            output: InvalidRequestErrorRep
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { integrationKey: string } } & {
              query: { includePending?: boolean | undefined }
            }
            output: UnauthorizedErrorRep
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { integrationKey: string } } & {
              query: { includePending?: boolean | undefined }
            }
            output: ForbiddenErrorRep
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { integrationKey: string } } & {
              query: { includePending?: boolean | undefined }
            }
            output: NotFoundErrorRep
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { integrationKey: string } } & {
              query: { includePending?: boolean | undefined }
            }
            output: RateLimitedErrorRep
            outputFormat: 'json'
            status: 429
          }
      $post:
        | {
            input: { param: { integrationKey: string } } & { json: IntegrationConfigurationPost }
            output: IntegrationConfigurationsRep
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { param: { integrationKey: string } } & { json: IntegrationConfigurationPost }
            output: InvalidRequestErrorRep
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { integrationKey: string } } & { json: IntegrationConfigurationPost }
            output: UnauthorizedErrorRep
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { integrationKey: string } } & { json: IntegrationConfigurationPost }
            output: ForbiddenErrorRep
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { integrationKey: string } } & { json: IntegrationConfigurationPost }
            output: NotFoundErrorRep
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { integrationKey: string } } & { json: IntegrationConfigurationPost }
            output: StatusConflictErrorRep
            outputFormat: 'json'
            status: 409
          }
        | {
            input: { param: { integrationKey: string } } & { json: IntegrationConfigurationPost }
            output: RateLimitedErrorRep
            outputFormat: 'json'
            status: 429
          }
    }
  } & {
    '/api/v2/integration-configurations/:integrationConfigurationId': {
      $get:
        | {
            input: { param: { integrationConfigurationId: string } }
            output: IntegrationConfigurationsRep
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { integrationConfigurationId: string } }
            output: InvalidRequestErrorRep
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { integrationConfigurationId: string } }
            output: UnauthorizedErrorRep
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { integrationConfigurationId: string } }
            output: ForbiddenErrorRep
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { integrationConfigurationId: string } }
            output: NotFoundErrorRep
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { integrationConfigurationId: string } }
            output: RateLimitedErrorRep
            outputFormat: 'json'
            status: 429
          }
      $patch:
        | {
            input: { param: { integrationConfigurationId: string } } & { json: JSONPatch }
            output: IntegrationConfigurationsRep
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { integrationConfigurationId: string } } & { json: JSONPatch }
            output: InvalidRequestErrorRep
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { integrationConfigurationId: string } } & { json: JSONPatch }
            output: ForbiddenErrorRep
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { integrationConfigurationId: string } } & { json: JSONPatch }
            output: NotFoundErrorRep
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { integrationConfigurationId: string } } & { json: JSONPatch }
            output: StatusConflictErrorRep
            outputFormat: 'json'
            status: 409
          }
        | {
            input: { param: { integrationConfigurationId: string } } & { json: JSONPatch }
            output: RateLimitedErrorRep
            outputFormat: 'json'
            status: 429
          }
      $delete:
        | {
            input: { param: { integrationConfigurationId: string } }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { integrationConfigurationId: string } }
            output: InvalidRequestErrorRep
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { integrationConfigurationId: string } }
            output: UnauthorizedErrorRep
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { integrationConfigurationId: string } }
            output: ForbiddenErrorRep
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { integrationConfigurationId: string } }
            output: NotFoundErrorRep
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { integrationConfigurationId: string } }
            output: RateLimitedErrorRep
            outputFormat: 'json'
            status: 429
          }
    }
  } & {
    '/api/v2/integrations/:integrationKey': {
      $get:
        | {
            input: { param: { integrationKey: string } }
            output: Integrations
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { integrationKey: string } }
            output: UnauthorizedErrorRep
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { integrationKey: string } }
            output: ForbiddenErrorRep
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { integrationKey: string } }
            output: NotFoundErrorRep
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { integrationKey: string } }
            output: RateLimitedErrorRep
            outputFormat: 'json'
            status: 429
          }
      $post:
        | {
            input: { param: { integrationKey: string } } & { json: SubscriptionPost }
            output: Integration
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { param: { integrationKey: string } } & { json: SubscriptionPost }
            output: InvalidRequestErrorRep
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { integrationKey: string } } & { json: SubscriptionPost }
            output: UnauthorizedErrorRep
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { integrationKey: string } } & { json: SubscriptionPost }
            output: ForbiddenErrorRep
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { integrationKey: string } } & { json: SubscriptionPost }
            output: NotFoundErrorRep
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { integrationKey: string } } & { json: SubscriptionPost }
            output: RateLimitedErrorRep
            outputFormat: 'json'
            status: 429
          }
    }
  } & {
    '/api/v2/integrations/:integrationKey/:id': {
      $get:
        | {
            input: { param: { integrationKey: string; id: string } }
            output: Integration
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { integrationKey: string; id: string } }
            output: UnauthorizedErrorRep
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { integrationKey: string; id: string } }
            output: ForbiddenErrorRep
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { integrationKey: string; id: string } }
            output: NotFoundErrorRep
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { integrationKey: string; id: string } }
            output: RateLimitedErrorRep
            outputFormat: 'json'
            status: 429
          }
      $patch:
        | {
            input: { param: { integrationKey: string; id: string } } & { json: JSONPatch }
            output: Integration
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { integrationKey: string; id: string } } & { json: JSONPatch }
            output: InvalidRequestErrorRep
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { integrationKey: string; id: string } } & { json: JSONPatch }
            output: ForbiddenErrorRep
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { integrationKey: string; id: string } } & { json: JSONPatch }
            output: NotFoundErrorRep
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { integrationKey: string; id: string } } & { json: JSONPatch }
            output: StatusConflictErrorRep
            outputFormat: 'json'
            status: 409
          }
        | {
            input: { param: { integrationKey: string; id: string } } & { json: JSONPatch }
            output: RateLimitedErrorRep
            outputFormat: 'json'
            status: 429
          }
      $delete:
        | {
            input: { param: { integrationKey: string; id: string } }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { integrationKey: string; id: string } }
            output: UnauthorizedErrorRep
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { integrationKey: string; id: string } }
            output: ForbiddenErrorRep
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { integrationKey: string; id: string } }
            output: NotFoundErrorRep
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { integrationKey: string; id: string } }
            output: RateLimitedErrorRep
            outputFormat: 'json'
            status: 429
          }
    }
  } & {
    '/api/v2/members': {
      $get:
        | {
            input: {
              query: {
                limit?: bigint | undefined
                offset?: bigint | undefined
                filter?: string | undefined
                expand?: string | undefined
                sort?: string | undefined
              }
            }
            output: Members
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                limit?: bigint | undefined
                offset?: bigint | undefined
                filter?: string | undefined
                expand?: string | undefined
                sort?: string | undefined
              }
            }
            output: UnauthorizedErrorRep
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              query: {
                limit?: bigint | undefined
                offset?: bigint | undefined
                filter?: string | undefined
                expand?: string | undefined
                sort?: string | undefined
              }
            }
            output: ForbiddenErrorRep
            outputFormat: 'json'
            status: 403
          }
        | {
            input: {
              query: {
                limit?: bigint | undefined
                offset?: bigint | undefined
                filter?: string | undefined
                expand?: string | undefined
                sort?: string | undefined
              }
            }
            output: NotFoundErrorRep
            outputFormat: 'json'
            status: 404
          }
        | {
            input: {
              query: {
                limit?: bigint | undefined
                offset?: bigint | undefined
                filter?: string | undefined
                expand?: string | undefined
                sort?: string | undefined
              }
            }
            output: RateLimitedErrorRep
            outputFormat: 'json'
            status: 429
          }
      $post:
        | {
            input: { json: NewMemberFormListPost }
            output: Members
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { json: NewMemberFormListPost }
            output: InvalidRequestErrorRep
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { json: NewMemberFormListPost }
            output: UnauthorizedErrorRep
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { json: NewMemberFormListPost }
            output: ForbiddenErrorRep
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { json: NewMemberFormListPost }
            output: StatusConflictErrorRep
            outputFormat: 'json'
            status: 409
          }
        | {
            input: { json: NewMemberFormListPost }
            output: RateLimitedErrorRep
            outputFormat: 'json'
            status: 429
          }
      $patch:
        | {
            input: { json: MembersPatchInput }
            output: BulkEditMembersRep
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: MembersPatchInput }
            output: InvalidRequestErrorRep
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { json: MembersPatchInput }
            output: UnauthorizedErrorRep
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { json: MembersPatchInput }
            output: ForbiddenErrorRep
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { json: MembersPatchInput }
            output: StatusConflictErrorRep
            outputFormat: 'json'
            status: 409
          }
        | {
            input: { json: MembersPatchInput }
            output: RateLimitedErrorRep
            outputFormat: 'json'
            status: 429
          }
    }
  } & {
    '/api/v2/members/:id': {
      $get:
        | {
            input: { param: { id: string } } & { query: { expand?: string | undefined } }
            output: Member
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & { query: { expand?: string | undefined } }
            output: UnauthorizedErrorRep
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: string } } & { query: { expand?: string | undefined } }
            output: ForbiddenErrorRep
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: string } } & { query: { expand?: string | undefined } }
            output: NotFoundErrorRep
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { id: string } } & { query: { expand?: string | undefined } }
            output: RateLimitedErrorRep
            outputFormat: 'json'
            status: 429
          }
      $patch:
        | {
            input: { param: { id: string } } & { json: JSONPatch }
            output: Member
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & { json: JSONPatch }
            output: InvalidRequestErrorRep
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { id: string } } & { json: JSONPatch }
            output: UnauthorizedErrorRep
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: string } } & { json: JSONPatch }
            output: ForbiddenErrorRep
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: string } } & { json: JSONPatch }
            output: NotFoundErrorRep
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { id: string } } & { json: JSONPatch }
            output: StatusConflictErrorRep
            outputFormat: 'json'
            status: 409
          }
        | {
            input: { param: { id: string } } & { json: JSONPatch }
            output: RateLimitedErrorRep
            outputFormat: 'json'
            status: 429
          }
      $delete:
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 204 }
        | {
            input: { param: { id: string } }
            output: UnauthorizedErrorRep
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: string } }
            output: ForbiddenErrorRep
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: string } }
            output: NotFoundErrorRep
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { id: string } }
            output: StatusConflictErrorRep
            outputFormat: 'json'
            status: 409
          }
        | {
            input: { param: { id: string } }
            output: RateLimitedErrorRep
            outputFormat: 'json'
            status: 429
          }
    }
  } & {
    '/api/v2/members/:id/teams': {
      $post:
        | {
            input: { param: { id: string } } & { json: MemberTeamsPostInput }
            output: Member
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { param: { id: string } } & { json: MemberTeamsPostInput }
            output: InvalidRequestErrorRep
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { id: string } } & { json: MemberTeamsPostInput }
            output: UnauthorizedErrorRep
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: string } } & { json: MemberTeamsPostInput }
            output: ForbiddenErrorRep
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: string } } & { json: MemberTeamsPostInput }
            output: NotFoundErrorRep
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { id: string } } & { json: MemberTeamsPostInput }
            output: StatusConflictErrorRep
            outputFormat: 'json'
            status: 409
          }
        | {
            input: { param: { id: string } } & { json: MemberTeamsPostInput }
            output: RateLimitedErrorRep
            outputFormat: 'json'
            status: 429
          }
    }
  } & {
    '/api/v2/metrics/:projectKey': {
      $get:
        | {
            input: { param: { projectKey: string } } & {
              query: {
                expand?: string | undefined
                limit?: bigint | undefined
                offset?: bigint | undefined
                sort?: string | undefined
                filter?: string | undefined
              }
            }
            output: MetricCollectionRep
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { projectKey: string } } & {
              query: {
                expand?: string | undefined
                limit?: bigint | undefined
                offset?: bigint | undefined
                sort?: string | undefined
                filter?: string | undefined
              }
            }
            output: UnauthorizedErrorRep
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { projectKey: string } } & {
              query: {
                expand?: string | undefined
                limit?: bigint | undefined
                offset?: bigint | undefined
                sort?: string | undefined
                filter?: string | undefined
              }
            }
            output: NotFoundErrorRep
            outputFormat: 'json'
            status: 404
          }
      $post:
        | {
            input: { param: { projectKey: string } } & { json: MetricPost }
            output: MetricRep
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { param: { projectKey: string } } & { json: MetricPost }
            output: InvalidRequestErrorRep
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { projectKey: string } } & { json: MetricPost }
            output: UnauthorizedErrorRep
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { projectKey: string } } & { json: MetricPost }
            output: ForbiddenErrorRep
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { projectKey: string } } & { json: MetricPost }
            output: NotFoundErrorRep
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { projectKey: string } } & { json: MetricPost }
            output: StatusConflictErrorRep
            outputFormat: 'json'
            status: 409
          }
        | {
            input: { param: { projectKey: string } } & { json: MetricPost }
            output: RateLimitedErrorRep
            outputFormat: 'json'
            status: 429
          }
    }
  } & {
    '/api/v2/metrics/:projectKey/:metricKey': {
      $get:
        | {
            input: { param: { projectKey: string; metricKey: string } } & {
              query: { expand?: string | undefined; versionId?: string | undefined }
            }
            output: MetricRep
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { projectKey: string; metricKey: string } } & {
              query: { expand?: string | undefined; versionId?: string | undefined }
            }
            output: UnauthorizedErrorRep
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { projectKey: string; metricKey: string } } & {
              query: { expand?: string | undefined; versionId?: string | undefined }
            }
            output: ForbiddenErrorRep
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { projectKey: string; metricKey: string } } & {
              query: { expand?: string | undefined; versionId?: string | undefined }
            }
            output: NotFoundErrorRep
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { projectKey: string; metricKey: string } } & {
              query: { expand?: string | undefined; versionId?: string | undefined }
            }
            output: RateLimitedErrorRep
            outputFormat: 'json'
            status: 429
          }
      $patch:
        | {
            input: { param: { projectKey: string; metricKey: string } } & { json: JSONPatch }
            output: MetricRep
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { projectKey: string; metricKey: string } } & { json: JSONPatch }
            output: InvalidRequestErrorRep
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { projectKey: string; metricKey: string } } & { json: JSONPatch }
            output: UnauthorizedErrorRep
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { projectKey: string; metricKey: string } } & { json: JSONPatch }
            output: NotFoundErrorRep
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { projectKey: string; metricKey: string } } & { json: JSONPatch }
            output: StatusConflictErrorRep
            outputFormat: 'json'
            status: 409
          }
        | {
            input: { param: { projectKey: string; metricKey: string } } & { json: JSONPatch }
            output: RateLimitedErrorRep
            outputFormat: 'json'
            status: 429
          }
      $delete:
        | {
            input: { param: { projectKey: string; metricKey: string } }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { projectKey: string; metricKey: string } }
            output: UnauthorizedErrorRep
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { projectKey: string; metricKey: string } }
            output: ForbiddenErrorRep
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { projectKey: string; metricKey: string } }
            output: NotFoundErrorRep
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { projectKey: string; metricKey: string } }
            output: RateLimitedErrorRep
            outputFormat: 'json'
            status: 429
          }
    }
  } & {
    '/api/v2/oauth/clients': {
      $get:
        | { input: {}; output: ClientCollection; outputFormat: 'json'; status: 200 }
        | { input: {}; output: InvalidRequestErrorRep; outputFormat: 'json'; status: 400 }
        | { input: {}; output: UnauthorizedErrorRep; outputFormat: 'json'; status: 401 }
        | { input: {}; output: ForbiddenErrorRep; outputFormat: 'json'; status: 403 }
      $post:
        | { input: { json: OauthClientPost }; output: Client; outputFormat: 'json'; status: 201 }
        | {
            input: { json: OauthClientPost }
            output: InvalidRequestErrorRep
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { json: OauthClientPost }
            output: UnauthorizedErrorRep
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { json: OauthClientPost }
            output: ForbiddenErrorRep
            outputFormat: 'json'
            status: 403
          }
    }
  } & {
    '/api/v2/oauth/clients/:clientId': {
      $get:
        | {
            input: { param: { clientId: string } }
            output: Client
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { clientId: string } }
            output: InvalidRequestErrorRep
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { clientId: string } }
            output: UnauthorizedErrorRep
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { clientId: string } }
            output: ForbiddenErrorRep
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { clientId: string } }
            output: NotFoundErrorRep
            outputFormat: 'json'
            status: 404
          }
      $patch:
        | {
            input: { param: { clientId: string } } & { json: JSONPatch }
            output: Client
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { clientId: string } } & { json: JSONPatch }
            output: InvalidRequestErrorRep
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { clientId: string } } & { json: JSONPatch }
            output: UnauthorizedErrorRep
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { clientId: string } } & { json: JSONPatch }
            output: ForbiddenErrorRep
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { clientId: string } } & { json: JSONPatch }
            output: NotFoundErrorRep
            outputFormat: 'json'
            status: 404
          }
      $delete:
        | { input: { param: { clientId: string } }; output: {}; outputFormat: string; status: 204 }
        | {
            input: { param: { clientId: string } }
            output: InvalidRequestErrorRep
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { clientId: string } }
            output: UnauthorizedErrorRep
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { clientId: string } }
            output: ForbiddenErrorRep
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { clientId: string } }
            output: NotFoundErrorRep
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/api/v2/openapi.json': {
      $get:
        | { input: {}; output: {}; outputFormat: string; status: 200 }
        | { input: {}; output: RateLimitedErrorRep; outputFormat: 'json'; status: 429 }
    }
  } & {
    '/api/v2/projects': {
      $get:
        | {
            input: {
              query: {
                limit?: bigint | undefined
                offset?: bigint | undefined
                filter?: string | undefined
                sort?: string | undefined
                expand?: string | undefined
              }
            }
            output: Projects
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                limit?: bigint | undefined
                offset?: bigint | undefined
                filter?: string | undefined
                sort?: string | undefined
                expand?: string | undefined
              }
            }
            output: InvalidRequestErrorRep
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                limit?: bigint | undefined
                offset?: bigint | undefined
                filter?: string | undefined
                sort?: string | undefined
                expand?: string | undefined
              }
            }
            output: UnauthorizedErrorRep
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              query: {
                limit?: bigint | undefined
                offset?: bigint | undefined
                filter?: string | undefined
                sort?: string | undefined
                expand?: string | undefined
              }
            }
            output: ForbiddenErrorRep
            outputFormat: 'json'
            status: 403
          }
        | {
            input: {
              query: {
                limit?: bigint | undefined
                offset?: bigint | undefined
                filter?: string | undefined
                sort?: string | undefined
                expand?: string | undefined
              }
            }
            output: RateLimitedErrorRep
            outputFormat: 'json'
            status: 429
          }
      $post:
        | { input: { json: ProjectPost }; output: ProjectRep; outputFormat: 'json'; status: 201 }
        | {
            input: { json: ProjectPost }
            output: InvalidRequestErrorRep
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { json: ProjectPost }
            output: UnauthorizedErrorRep
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { json: ProjectPost }
            output: ForbiddenErrorRep
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { json: ProjectPost }
            output: StatusConflictErrorRep
            outputFormat: 'json'
            status: 409
          }
        | {
            input: { json: ProjectPost }
            output: RateLimitedErrorRep
            outputFormat: 'json'
            status: 429
          }
    }
  } & {
    '/api/v2/projects/:projectKey': {
      $get:
        | {
            input: { param: { projectKey: string } } & { query: { expand?: string | undefined } }
            output: Project
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { projectKey: string } } & { query: { expand?: string | undefined } }
            output: InvalidRequestErrorRep
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { projectKey: string } } & { query: { expand?: string | undefined } }
            output: UnauthorizedErrorRep
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { projectKey: string } } & { query: { expand?: string | undefined } }
            output: ForbiddenErrorRep
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { projectKey: string } } & { query: { expand?: string | undefined } }
            output: NotFoundErrorRep
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { projectKey: string } } & { query: { expand?: string | undefined } }
            output: RateLimitedErrorRep
            outputFormat: 'json'
            status: 429
          }
      $patch:
        | {
            input: { param: { projectKey: string } } & { json: JSONPatch }
            output: ProjectRep
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { projectKey: string } } & { json: JSONPatch }
            output: InvalidRequestErrorRep
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { projectKey: string } } & { json: JSONPatch }
            output: UnauthorizedErrorRep
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { projectKey: string } } & { json: JSONPatch }
            output: ForbiddenErrorRep
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { projectKey: string } } & { json: JSONPatch }
            output: NotFoundErrorRep
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { projectKey: string } } & { json: JSONPatch }
            output: StatusConflictErrorRep
            outputFormat: 'json'
            status: 409
          }
        | {
            input: { param: { projectKey: string } } & { json: JSONPatch }
            output: RateLimitedErrorRep
            outputFormat: 'json'
            status: 429
          }
      $delete:
        | {
            input: { param: { projectKey: string } }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { projectKey: string } }
            output: InvalidRequestErrorRep
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { projectKey: string } }
            output: UnauthorizedErrorRep
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { projectKey: string } }
            output: ForbiddenErrorRep
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { projectKey: string } }
            output: NotFoundErrorRep
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { projectKey: string } }
            output: RateLimitedErrorRep
            outputFormat: 'json'
            status: 429
          }
    }
  } & {
    '/api/v2/projects/:projectKey/context-kinds': {
      $get:
        | {
            input: { param: { projectKey: string } } & { query: { expand?: string | undefined } }
            output: ContextKindsCollectionRep
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { projectKey: string } } & { query: { expand?: string | undefined } }
            output: UnauthorizedErrorRep
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { projectKey: string } } & { query: { expand?: string | undefined } }
            output: ForbiddenErrorRep
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { projectKey: string } } & { query: { expand?: string | undefined } }
            output: NotFoundErrorRep
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/api/v2/projects/:projectKey/context-kinds/:key': {
      $put:
        | {
            input: { param: { projectKey: string; key: string } } & {
              json: UpsertContextKindPayload
            }
            output: UpsertResponseRep
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { projectKey: string; key: string } } & {
              json: UpsertContextKindPayload
            }
            output: InvalidRequestErrorRep
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { projectKey: string; key: string } } & {
              json: UpsertContextKindPayload
            }
            output: UnauthorizedErrorRep
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { projectKey: string; key: string } } & {
              json: UpsertContextKindPayload
            }
            output: ForbiddenErrorRep
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { projectKey: string; key: string } } & {
              json: UpsertContextKindPayload
            }
            output: NotFoundErrorRep
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/api/v2/projects/:projectKey/environments': {
      $get:
        | {
            input: { param: { projectKey: string } } & {
              query: {
                limit?: bigint | undefined
                offset?: bigint | undefined
                filter?: string | undefined
                sort?: string | undefined
              }
            }
            output: Environments
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { projectKey: string } } & {
              query: {
                limit?: bigint | undefined
                offset?: bigint | undefined
                filter?: string | undefined
                sort?: string | undefined
              }
            }
            output: InvalidRequestErrorRep
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { projectKey: string } } & {
              query: {
                limit?: bigint | undefined
                offset?: bigint | undefined
                filter?: string | undefined
                sort?: string | undefined
              }
            }
            output: UnauthorizedErrorRep
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { projectKey: string } } & {
              query: {
                limit?: bigint | undefined
                offset?: bigint | undefined
                filter?: string | undefined
                sort?: string | undefined
              }
            }
            output: ForbiddenErrorRep
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { projectKey: string } } & {
              query: {
                limit?: bigint | undefined
                offset?: bigint | undefined
                filter?: string | undefined
                sort?: string | undefined
              }
            }
            output: NotFoundErrorRep
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { projectKey: string } } & {
              query: {
                limit?: bigint | undefined
                offset?: bigint | undefined
                filter?: string | undefined
                sort?: string | undefined
              }
            }
            output: MethodNotAllowedErrorRep
            outputFormat: 'json'
            status: 405
          }
        | {
            input: { param: { projectKey: string } } & {
              query: {
                limit?: bigint | undefined
                offset?: bigint | undefined
                filter?: string | undefined
                sort?: string | undefined
              }
            }
            output: RateLimitedErrorRep
            outputFormat: 'json'
            status: 429
          }
      $post:
        | {
            input: { param: { projectKey: string } } & { json: EnvironmentPost }
            output: Environment
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { param: { projectKey: string } } & { json: EnvironmentPost }
            output: InvalidRequestErrorRep
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { projectKey: string } } & { json: EnvironmentPost }
            output: UnauthorizedErrorRep
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { projectKey: string } } & { json: EnvironmentPost }
            output: ForbiddenErrorRep
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { projectKey: string } } & { json: EnvironmentPost }
            output: NotFoundErrorRep
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { projectKey: string } } & { json: EnvironmentPost }
            output: StatusConflictErrorRep
            outputFormat: 'json'
            status: 409
          }
        | {
            input: { param: { projectKey: string } } & { json: EnvironmentPost }
            output: RateLimitedErrorRep
            outputFormat: 'json'
            status: 429
          }
    }
  } & {
    '/api/v2/projects/:projectKey/environments/:environmentKey': {
      $get:
        | {
            input: { param: { projectKey: string; environmentKey: string } }
            output: Environment
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { projectKey: string; environmentKey: string } }
            output: UnauthorizedErrorRep
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { projectKey: string; environmentKey: string } }
            output: ForbiddenErrorRep
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { projectKey: string; environmentKey: string } }
            output: NotFoundErrorRep
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { projectKey: string; environmentKey: string } }
            output: RateLimitedErrorRep
            outputFormat: 'json'
            status: 429
          }
      $patch:
        | {
            input: { param: { projectKey: string; environmentKey: string } } & { json: JSONPatch }
            output: Environment
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { projectKey: string; environmentKey: string } } & { json: JSONPatch }
            output: InvalidRequestErrorRep
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { projectKey: string; environmentKey: string } } & { json: JSONPatch }
            output: UnauthorizedErrorRep
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { projectKey: string; environmentKey: string } } & { json: JSONPatch }
            output: NotFoundErrorRep
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { projectKey: string; environmentKey: string } } & { json: JSONPatch }
            output: StatusConflictErrorRep
            outputFormat: 'json'
            status: 409
          }
        | {
            input: { param: { projectKey: string; environmentKey: string } } & { json: JSONPatch }
            output: RateLimitedErrorRep
            outputFormat: 'json'
            status: 429
          }
      $delete:
        | {
            input: { param: { projectKey: string; environmentKey: string } }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { projectKey: string; environmentKey: string } }
            output: UnauthorizedErrorRep
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { projectKey: string; environmentKey: string } }
            output: ForbiddenErrorRep
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { projectKey: string; environmentKey: string } }
            output: NotFoundErrorRep
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { projectKey: string; environmentKey: string } }
            output: RateLimitedErrorRep
            outputFormat: 'json'
            status: 429
          }
    }
  } & {
    '/api/v2/projects/:projectKey/environments/:environmentKey/apiKey': {
      $post:
        | {
            input: { param: { projectKey: string; environmentKey: string } } & {
              query: { expiry?: bigint | undefined }
            }
            output: Environment
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { projectKey: string; environmentKey: string } } & {
              query: { expiry?: bigint | undefined }
            }
            output: InvalidRequestErrorRep
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { projectKey: string; environmentKey: string } } & {
              query: { expiry?: bigint | undefined }
            }
            output: UnauthorizedErrorRep
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { projectKey: string; environmentKey: string } } & {
              query: { expiry?: bigint | undefined }
            }
            output: ForbiddenErrorRep
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { projectKey: string; environmentKey: string } } & {
              query: { expiry?: bigint | undefined }
            }
            output: NotFoundErrorRep
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { projectKey: string; environmentKey: string } } & {
              query: { expiry?: bigint | undefined }
            }
            output: StatusConflictErrorRep
            outputFormat: 'json'
            status: 409
          }
        | {
            input: { param: { projectKey: string; environmentKey: string } } & {
              query: { expiry?: bigint | undefined }
            }
            output: RateLimitedErrorRep
            outputFormat: 'json'
            status: 429
          }
    }
  } & {
    '/api/v2/projects/:projectKey/environments/:environmentKey/context-attributes': {
      $get:
        | {
            input: { param: { projectKey: string; environmentKey: string } } & {
              query: { filter?: string | undefined; limit?: bigint | undefined }
            }
            output: ContextAttributeNamesCollection
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { projectKey: string; environmentKey: string } } & {
              query: { filter?: string | undefined; limit?: bigint | undefined }
            }
            output: InvalidRequestErrorRep
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { projectKey: string; environmentKey: string } } & {
              query: { filter?: string | undefined; limit?: bigint | undefined }
            }
            output: UnauthorizedErrorRep
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { projectKey: string; environmentKey: string } } & {
              query: { filter?: string | undefined; limit?: bigint | undefined }
            }
            output: ForbiddenErrorRep
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { projectKey: string; environmentKey: string } } & {
              query: { filter?: string | undefined; limit?: bigint | undefined }
            }
            output: RateLimitedErrorRep
            outputFormat: 'json'
            status: 429
          }
    }
  } & {
    '/api/v2/projects/:projectKey/environments/:environmentKey/context-attributes/:attributeName': {
      $get:
        | {
            input: {
              param: { projectKey: string; environmentKey: string; attributeName: string }
            } & { query: { filter?: string | undefined; limit?: bigint | undefined } }
            output: ContextAttributeValuesCollection
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              param: { projectKey: string; environmentKey: string; attributeName: string }
            } & { query: { filter?: string | undefined; limit?: bigint | undefined } }
            output: InvalidRequestErrorRep
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              param: { projectKey: string; environmentKey: string; attributeName: string }
            } & { query: { filter?: string | undefined; limit?: bigint | undefined } }
            output: UnauthorizedErrorRep
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              param: { projectKey: string; environmentKey: string; attributeName: string }
            } & { query: { filter?: string | undefined; limit?: bigint | undefined } }
            output: ForbiddenErrorRep
            outputFormat: 'json'
            status: 403
          }
        | {
            input: {
              param: { projectKey: string; environmentKey: string; attributeName: string }
            } & { query: { filter?: string | undefined; limit?: bigint | undefined } }
            output: RateLimitedErrorRep
            outputFormat: 'json'
            status: 429
          }
    }
  } & {
    '/api/v2/projects/:projectKey/environments/:environmentKey/contexts/search': {
      $post:
        | {
            input: { param: { projectKey: string; environmentKey: string } } & {
              query: {
                limit?: bigint | undefined
                continuationToken?: string | undefined
                sort?: string | undefined
                filter?: string | undefined
                includeTotalCount?: boolean | undefined
              }
            } & { json: ContextSearch }
            output: Contexts
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { projectKey: string; environmentKey: string } } & {
              query: {
                limit?: bigint | undefined
                continuationToken?: string | undefined
                sort?: string | undefined
                filter?: string | undefined
                includeTotalCount?: boolean | undefined
              }
            } & { json: ContextSearch }
            output: InvalidRequestErrorRep
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { projectKey: string; environmentKey: string } } & {
              query: {
                limit?: bigint | undefined
                continuationToken?: string | undefined
                sort?: string | undefined
                filter?: string | undefined
                includeTotalCount?: boolean | undefined
              }
            } & { json: ContextSearch }
            output: UnauthorizedErrorRep
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { projectKey: string; environmentKey: string } } & {
              query: {
                limit?: bigint | undefined
                continuationToken?: string | undefined
                sort?: string | undefined
                filter?: string | undefined
                includeTotalCount?: boolean | undefined
              }
            } & { json: ContextSearch }
            output: ForbiddenErrorRep
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { projectKey: string; environmentKey: string } } & {
              query: {
                limit?: bigint | undefined
                continuationToken?: string | undefined
                sort?: string | undefined
                filter?: string | undefined
                includeTotalCount?: boolean | undefined
              }
            } & { json: ContextSearch }
            output: RateLimitedErrorRep
            outputFormat: 'json'
            status: 429
          }
    }
  } & {
    '/api/v2/projects/:projectKey/environments/:environmentKey/contexts/:contextKind/:contextKey/flags/:featureFlagKey': {
      $put:
        | {
            input: {
              param: {
                projectKey: string
                environmentKey: string
                contextKind: string
                contextKey: string
                featureFlagKey: string
              }
            } & { json: ValuePut }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: {
              param: {
                projectKey: string
                environmentKey: string
                contextKind: string
                contextKey: string
                featureFlagKey: string
              }
            } & { json: ValuePut }
            output: InvalidRequestErrorRep
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              param: {
                projectKey: string
                environmentKey: string
                contextKind: string
                contextKey: string
                featureFlagKey: string
              }
            } & { json: ValuePut }
            output: UnauthorizedErrorRep
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              param: {
                projectKey: string
                environmentKey: string
                contextKind: string
                contextKey: string
                featureFlagKey: string
              }
            } & { json: ValuePut }
            output: ForbiddenErrorRep
            outputFormat: 'json'
            status: 403
          }
        | {
            input: {
              param: {
                projectKey: string
                environmentKey: string
                contextKind: string
                contextKey: string
                featureFlagKey: string
              }
            } & { json: ValuePut }
            output: NotFoundErrorRep
            outputFormat: 'json'
            status: 404
          }
        | {
            input: {
              param: {
                projectKey: string
                environmentKey: string
                contextKind: string
                contextKey: string
                featureFlagKey: string
              }
            } & { json: ValuePut }
            output: StatusConflictErrorRep
            outputFormat: 'json'
            status: 409
          }
        | {
            input: {
              param: {
                projectKey: string
                environmentKey: string
                contextKind: string
                contextKey: string
                featureFlagKey: string
              }
            } & { json: ValuePut }
            output: RateLimitedErrorRep
            outputFormat: 'json'
            status: 429
          }
    }
  } & {
    '/api/v2/projects/:projectKey/environments/:environmentKey/contexts/:kind/:key': {
      $get:
        | {
            input: {
              param: { projectKey: string; environmentKey: string; kind: string; key: string }
            } & {
              query: {
                limit?: bigint | undefined
                continuationToken?: string | undefined
                sort?: string | undefined
                filter?: string | undefined
                includeTotalCount?: boolean | undefined
              }
            }
            output: Contexts
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              param: { projectKey: string; environmentKey: string; kind: string; key: string }
            } & {
              query: {
                limit?: bigint | undefined
                continuationToken?: string | undefined
                sort?: string | undefined
                filter?: string | undefined
                includeTotalCount?: boolean | undefined
              }
            }
            output: InvalidRequestErrorRep
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              param: { projectKey: string; environmentKey: string; kind: string; key: string }
            } & {
              query: {
                limit?: bigint | undefined
                continuationToken?: string | undefined
                sort?: string | undefined
                filter?: string | undefined
                includeTotalCount?: boolean | undefined
              }
            }
            output: UnauthorizedErrorRep
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              param: { projectKey: string; environmentKey: string; kind: string; key: string }
            } & {
              query: {
                limit?: bigint | undefined
                continuationToken?: string | undefined
                sort?: string | undefined
                filter?: string | undefined
                includeTotalCount?: boolean | undefined
              }
            }
            output: ForbiddenErrorRep
            outputFormat: 'json'
            status: 403
          }
        | {
            input: {
              param: { projectKey: string; environmentKey: string; kind: string; key: string }
            } & {
              query: {
                limit?: bigint | undefined
                continuationToken?: string | undefined
                sort?: string | undefined
                filter?: string | undefined
                includeTotalCount?: boolean | undefined
              }
            }
            output: RateLimitedErrorRep
            outputFormat: 'json'
            status: 429
          }
    }
  } & {
    '/api/v2/projects/:projectKey/environments/:environmentKey/experiments': {
      $get:
        | {
            input: { param: { projectKey: string; environmentKey: string } } & {
              query: {
                limit?: bigint | undefined
                offset?: bigint | undefined
                filter?: string | undefined
                expand?: string | undefined
                lifecycleState?: string | undefined
              }
            }
            output: ExperimentCollectionRep
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { projectKey: string; environmentKey: string } } & {
              query: {
                limit?: bigint | undefined
                offset?: bigint | undefined
                filter?: string | undefined
                expand?: string | undefined
                lifecycleState?: string | undefined
              }
            }
            output: InvalidRequestErrorRep
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { projectKey: string; environmentKey: string } } & {
              query: {
                limit?: bigint | undefined
                offset?: bigint | undefined
                filter?: string | undefined
                expand?: string | undefined
                lifecycleState?: string | undefined
              }
            }
            output: UnauthorizedErrorRep
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { projectKey: string; environmentKey: string } } & {
              query: {
                limit?: bigint | undefined
                offset?: bigint | undefined
                filter?: string | undefined
                expand?: string | undefined
                lifecycleState?: string | undefined
              }
            }
            output: ForbiddenErrorRep
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { projectKey: string; environmentKey: string } } & {
              query: {
                limit?: bigint | undefined
                offset?: bigint | undefined
                filter?: string | undefined
                expand?: string | undefined
                lifecycleState?: string | undefined
              }
            }
            output: NotFoundErrorRep
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { projectKey: string; environmentKey: string } } & {
              query: {
                limit?: bigint | undefined
                offset?: bigint | undefined
                filter?: string | undefined
                expand?: string | undefined
                lifecycleState?: string | undefined
              }
            }
            output: MethodNotAllowedErrorRep
            outputFormat: 'json'
            status: 405
          }
        | {
            input: { param: { projectKey: string; environmentKey: string } } & {
              query: {
                limit?: bigint | undefined
                offset?: bigint | undefined
                filter?: string | undefined
                expand?: string | undefined
                lifecycleState?: string | undefined
              }
            }
            output: RateLimitedErrorRep
            outputFormat: 'json'
            status: 429
          }
      $post:
        | {
            input: { param: { projectKey: string; environmentKey: string } } & {
              json: ExperimentPost
            }
            output: Experiment
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { param: { projectKey: string; environmentKey: string } } & {
              json: ExperimentPost
            }
            output: InvalidRequestErrorRep
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { projectKey: string; environmentKey: string } } & {
              json: ExperimentPost
            }
            output: UnauthorizedErrorRep
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { projectKey: string; environmentKey: string } } & {
              json: ExperimentPost
            }
            output: ForbiddenErrorRep
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { projectKey: string; environmentKey: string } } & {
              json: ExperimentPost
            }
            output: NotFoundErrorRep
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { projectKey: string; environmentKey: string } } & {
              json: ExperimentPost
            }
            output: RateLimitedErrorRep
            outputFormat: 'json'
            status: 429
          }
    }
  } & {
    '/api/v2/projects/:projectKey/environments/:environmentKey/experiments/:experimentKey': {
      $get:
        | {
            input: {
              param: { projectKey: string; environmentKey: string; experimentKey: string }
            } & { query: { expand?: string | undefined } }
            output: Experiment
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              param: { projectKey: string; environmentKey: string; experimentKey: string }
            } & { query: { expand?: string | undefined } }
            output: InvalidRequestErrorRep
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              param: { projectKey: string; environmentKey: string; experimentKey: string }
            } & { query: { expand?: string | undefined } }
            output: UnauthorizedErrorRep
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              param: { projectKey: string; environmentKey: string; experimentKey: string }
            } & { query: { expand?: string | undefined } }
            output: ForbiddenErrorRep
            outputFormat: 'json'
            status: 403
          }
        | {
            input: {
              param: { projectKey: string; environmentKey: string; experimentKey: string }
            } & { query: { expand?: string | undefined } }
            output: NotFoundErrorRep
            outputFormat: 'json'
            status: 404
          }
        | {
            input: {
              param: { projectKey: string; environmentKey: string; experimentKey: string }
            } & { query: { expand?: string | undefined } }
            output: MethodNotAllowedErrorRep
            outputFormat: 'json'
            status: 405
          }
        | {
            input: {
              param: { projectKey: string; environmentKey: string; experimentKey: string }
            } & { query: { expand?: string | undefined } }
            output: RateLimitedErrorRep
            outputFormat: 'json'
            status: 429
          }
      $patch:
        | {
            input: {
              param: { projectKey: string; environmentKey: string; experimentKey: string }
            } & { json: ExperimentPatchInput }
            output: Experiment
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              param: { projectKey: string; environmentKey: string; experimentKey: string }
            } & { json: ExperimentPatchInput }
            output: InvalidRequestErrorRep
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              param: { projectKey: string; environmentKey: string; experimentKey: string }
            } & { json: ExperimentPatchInput }
            output: UnauthorizedErrorRep
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              param: { projectKey: string; environmentKey: string; experimentKey: string }
            } & { json: ExperimentPatchInput }
            output: ForbiddenErrorRep
            outputFormat: 'json'
            status: 403
          }
        | {
            input: {
              param: { projectKey: string; environmentKey: string; experimentKey: string }
            } & { json: ExperimentPatchInput }
            output: NotFoundErrorRep
            outputFormat: 'json'
            status: 404
          }
        | {
            input: {
              param: { projectKey: string; environmentKey: string; experimentKey: string }
            } & { json: ExperimentPatchInput }
            output: StatusConflictErrorRep
            outputFormat: 'json'
            status: 409
          }
        | {
            input: {
              param: { projectKey: string; environmentKey: string; experimentKey: string }
            } & { json: ExperimentPatchInput }
            output: PatchFailedErrorRep
            outputFormat: 'json'
            status: 422
          }
        | {
            input: {
              param: { projectKey: string; environmentKey: string; experimentKey: string }
            } & { json: ExperimentPatchInput }
            output: RateLimitedErrorRep
            outputFormat: 'json'
            status: 429
          }
    }
  } & {
    '/api/v2/projects/:projectKey/environments/:environmentKey/experiments/:experimentKey/iterations': {
      $post:
        | {
            input: {
              param: { projectKey: string; environmentKey: string; experimentKey: string }
            } & { json: IterationInput }
            output: IterationRep
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              param: { projectKey: string; environmentKey: string; experimentKey: string }
            } & { json: IterationInput }
            output: InvalidRequestErrorRep
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              param: { projectKey: string; environmentKey: string; experimentKey: string }
            } & { json: IterationInput }
            output: UnauthorizedErrorRep
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              param: { projectKey: string; environmentKey: string; experimentKey: string }
            } & { json: IterationInput }
            output: ForbiddenErrorRep
            outputFormat: 'json'
            status: 403
          }
        | {
            input: {
              param: { projectKey: string; environmentKey: string; experimentKey: string }
            } & { json: IterationInput }
            output: NotFoundErrorRep
            outputFormat: 'json'
            status: 404
          }
        | {
            input: {
              param: { projectKey: string; environmentKey: string; experimentKey: string }
            } & { json: IterationInput }
            output: RateLimitedErrorRep
            outputFormat: 'json'
            status: 429
          }
    }
  } & {
    '/api/v2/projects/:projectKey/environments/:environmentKey/flags/evaluate': {
      $post:
        | {
            input: { param: { projectKey: string; environmentKey: string } } & {
              query: {
                limit?: bigint | undefined
                offset?: bigint | undefined
                sort?: string | undefined
                filter?: string | undefined
              }
            } & { json: ContextInstance }
            output: ContextInstanceEvaluations
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { projectKey: string; environmentKey: string } } & {
              query: {
                limit?: bigint | undefined
                offset?: bigint | undefined
                sort?: string | undefined
                filter?: string | undefined
              }
            } & { json: ContextInstance }
            output: InvalidRequestErrorRep
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { projectKey: string; environmentKey: string } } & {
              query: {
                limit?: bigint | undefined
                offset?: bigint | undefined
                sort?: string | undefined
                filter?: string | undefined
              }
            } & { json: ContextInstance }
            output: UnauthorizedErrorRep
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { projectKey: string; environmentKey: string } } & {
              query: {
                limit?: bigint | undefined
                offset?: bigint | undefined
                sort?: string | undefined
                filter?: string | undefined
              }
            } & { json: ContextInstance }
            output: ForbiddenErrorRep
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { projectKey: string; environmentKey: string } } & {
              query: {
                limit?: bigint | undefined
                offset?: bigint | undefined
                sort?: string | undefined
                filter?: string | undefined
              }
            } & { json: ContextInstance }
            output: NotFoundErrorRep
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { projectKey: string; environmentKey: string } } & {
              query: {
                limit?: bigint | undefined
                offset?: bigint | undefined
                sort?: string | undefined
                filter?: string | undefined
              }
            } & { json: ContextInstance }
            output: RateLimitedErrorRep
            outputFormat: 'json'
            status: 429
          }
    }
  } & {
    '/api/v2/projects/:projectKey/environments/:environmentKey/followers': {
      $get:
        | {
            input: { param: { projectKey: string; environmentKey: string } }
            output: FlagFollowersByProjEnvGetRep
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { projectKey: string; environmentKey: string } }
            output: InvalidRequestErrorRep
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { projectKey: string; environmentKey: string } }
            output: UnauthorizedErrorRep
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { projectKey: string; environmentKey: string } }
            output: ForbiddenErrorRep
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { projectKey: string; environmentKey: string } }
            output: NotFoundErrorRep
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/api/v2/projects/:projectKey/environments/:environmentKey/holdouts': {
      $get:
        | {
            input: { param: { projectKey: string; environmentKey: string } } & {
              query: { limit?: bigint | undefined; offset?: bigint | undefined }
            }
            output: HoldoutsCollectionRep
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { projectKey: string; environmentKey: string } } & {
              query: { limit?: bigint | undefined; offset?: bigint | undefined }
            }
            output: InvalidRequestErrorRep
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { projectKey: string; environmentKey: string } } & {
              query: { limit?: bigint | undefined; offset?: bigint | undefined }
            }
            output: UnauthorizedErrorRep
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { projectKey: string; environmentKey: string } } & {
              query: { limit?: bigint | undefined; offset?: bigint | undefined }
            }
            output: ForbiddenErrorRep
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { projectKey: string; environmentKey: string } } & {
              query: { limit?: bigint | undefined; offset?: bigint | undefined }
            }
            output: RateLimitedErrorRep
            outputFormat: 'json'
            status: 429
          }
      $post:
        | {
            input: { param: { projectKey: string; environmentKey: string } } & {
              json: HoldoutPostRequest
            }
            output: HoldoutRep
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { param: { projectKey: string; environmentKey: string } } & {
              json: HoldoutPostRequest
            }
            output: InvalidRequestErrorRep
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/api/v2/projects/:projectKey/environments/:environmentKey/holdouts/id/:holdoutId': {
      $get:
        | {
            input: { param: { projectKey: string; environmentKey: string; holdoutId: string } }
            output: HoldoutRep
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { projectKey: string; environmentKey: string; holdoutId: string } }
            output: InvalidRequestErrorRep
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { projectKey: string; environmentKey: string; holdoutId: string } }
            output: UnauthorizedErrorRep
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { projectKey: string; environmentKey: string; holdoutId: string } }
            output: ForbiddenErrorRep
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { projectKey: string; environmentKey: string; holdoutId: string } }
            output: NotFoundErrorRep
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { projectKey: string; environmentKey: string; holdoutId: string } }
            output: RateLimitedErrorRep
            outputFormat: 'json'
            status: 429
          }
    }
  } & {
    '/api/v2/projects/:projectKey/environments/:environmentKey/holdouts/:holdoutKey': {
      $get:
        | {
            input: { param: { projectKey: string; environmentKey: string; holdoutKey: string } } & {
              query: { expand?: string | undefined }
            }
            output: HoldoutDetailRep
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { projectKey: string; environmentKey: string; holdoutKey: string } } & {
              query: { expand?: string | undefined }
            }
            output: InvalidRequestErrorRep
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { projectKey: string; environmentKey: string; holdoutKey: string } } & {
              query: { expand?: string | undefined }
            }
            output: UnauthorizedErrorRep
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { projectKey: string; environmentKey: string; holdoutKey: string } } & {
              query: { expand?: string | undefined }
            }
            output: ForbiddenErrorRep
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { projectKey: string; environmentKey: string; holdoutKey: string } } & {
              query: { expand?: string | undefined }
            }
            output: NotFoundErrorRep
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { projectKey: string; environmentKey: string; holdoutKey: string } } & {
              query: { expand?: string | undefined }
            }
            output: RateLimitedErrorRep
            outputFormat: 'json'
            status: 429
          }
      $patch:
        | {
            input: { param: { projectKey: string; environmentKey: string; holdoutKey: string } } & {
              json: HoldoutPatchInput
            }
            output: HoldoutRep
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { projectKey: string; environmentKey: string; holdoutKey: string } } & {
              json: HoldoutPatchInput
            }
            output: InvalidRequestErrorRep
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { projectKey: string; environmentKey: string; holdoutKey: string } } & {
              json: HoldoutPatchInput
            }
            output: UnauthorizedErrorRep
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { projectKey: string; environmentKey: string; holdoutKey: string } } & {
              json: HoldoutPatchInput
            }
            output: ForbiddenErrorRep
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { projectKey: string; environmentKey: string; holdoutKey: string } } & {
              json: HoldoutPatchInput
            }
            output: NotFoundErrorRep
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { projectKey: string; environmentKey: string; holdoutKey: string } } & {
              json: HoldoutPatchInput
            }
            output: RateLimitedErrorRep
            outputFormat: 'json'
            status: 429
          }
    }
  } & {
    '/api/v2/projects/:projectKey/environments/:environmentKey/mobileKey': {
      $post:
        | {
            input: { param: { projectKey: string; environmentKey: string } }
            output: Environment
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { projectKey: string; environmentKey: string } }
            output: InvalidRequestErrorRep
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { projectKey: string; environmentKey: string } }
            output: UnauthorizedErrorRep
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { projectKey: string; environmentKey: string } }
            output: ForbiddenErrorRep
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { projectKey: string; environmentKey: string } }
            output: NotFoundErrorRep
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { projectKey: string; environmentKey: string } }
            output: StatusConflictErrorRep
            outputFormat: 'json'
            status: 409
          }
        | {
            input: { param: { projectKey: string; environmentKey: string } }
            output: RateLimitedErrorRep
            outputFormat: 'json'
            status: 429
          }
    }
  } & {
    '/api/v2/projects/:projectKey/environments/:environmentKey/segments/evaluate': {
      $post:
        | {
            input: { param: { projectKey: string; environmentKey: string } } & {
              json: ContextInstance
            }
            output: ContextInstanceSegmentMemberships
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { projectKey: string; environmentKey: string } } & {
              json: ContextInstance
            }
            output: InvalidRequestErrorRep
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { projectKey: string; environmentKey: string } } & {
              json: ContextInstance
            }
            output: UnauthorizedErrorRep
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { projectKey: string; environmentKey: string } } & {
              json: ContextInstance
            }
            output: NotFoundErrorRep
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/api/v2/projects/:projectKey/experimentation-settings': {
      $get:
        | {
            input: { param: { projectKey: string } }
            output: RandomizationSettingsRep
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { projectKey: string } }
            output: InvalidRequestErrorRep
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { projectKey: string } }
            output: UnauthorizedErrorRep
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { projectKey: string } }
            output: ForbiddenErrorRep
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { projectKey: string } }
            output: NotFoundErrorRep
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { projectKey: string } }
            output: MethodNotAllowedErrorRep
            outputFormat: 'json'
            status: 405
          }
        | {
            input: { param: { projectKey: string } }
            output: RateLimitedErrorRep
            outputFormat: 'json'
            status: 429
          }
      $put:
        | {
            input: { param: { projectKey: string } } & { json: RandomizationSettingsPut }
            output: RandomizationSettingsRep
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { projectKey: string } } & { json: RandomizationSettingsPut }
            output: InvalidRequestErrorRep
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { projectKey: string } } & { json: RandomizationSettingsPut }
            output: UnauthorizedErrorRep
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { projectKey: string } } & { json: RandomizationSettingsPut }
            output: ForbiddenErrorRep
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { projectKey: string } } & { json: RandomizationSettingsPut }
            output: NotFoundErrorRep
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { projectKey: string } } & { json: RandomizationSettingsPut }
            output: MethodNotAllowedErrorRep
            outputFormat: 'json'
            status: 405
          }
        | {
            input: { param: { projectKey: string } } & { json: RandomizationSettingsPut }
            output: RateLimitedErrorRep
            outputFormat: 'json'
            status: 429
          }
    }
  } & {
    '/api/v2/projects/:projectKey/experiments': {
      $get:
        | {
            input: { param: { projectKey: string } } & {
              query: {
                limit?: bigint | undefined
                offset?: bigint | undefined
                filter?: string | undefined
                expand?: string | undefined
                lifecycleState?: string | undefined
              }
            }
            output: ExperimentCollectionRep
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { projectKey: string } } & {
              query: {
                limit?: bigint | undefined
                offset?: bigint | undefined
                filter?: string | undefined
                expand?: string | undefined
                lifecycleState?: string | undefined
              }
            }
            output: InvalidRequestErrorRep
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { projectKey: string } } & {
              query: {
                limit?: bigint | undefined
                offset?: bigint | undefined
                filter?: string | undefined
                expand?: string | undefined
                lifecycleState?: string | undefined
              }
            }
            output: UnauthorizedErrorRep
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { projectKey: string } } & {
              query: {
                limit?: bigint | undefined
                offset?: bigint | undefined
                filter?: string | undefined
                expand?: string | undefined
                lifecycleState?: string | undefined
              }
            }
            output: ForbiddenErrorRep
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { projectKey: string } } & {
              query: {
                limit?: bigint | undefined
                offset?: bigint | undefined
                filter?: string | undefined
                expand?: string | undefined
                lifecycleState?: string | undefined
              }
            }
            output: NotFoundErrorRep
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { projectKey: string } } & {
              query: {
                limit?: bigint | undefined
                offset?: bigint | undefined
                filter?: string | undefined
                expand?: string | undefined
                lifecycleState?: string | undefined
              }
            }
            output: MethodNotAllowedErrorRep
            outputFormat: 'json'
            status: 405
          }
        | {
            input: { param: { projectKey: string } } & {
              query: {
                limit?: bigint | undefined
                offset?: bigint | undefined
                filter?: string | undefined
                expand?: string | undefined
                lifecycleState?: string | undefined
              }
            }
            output: RateLimitedErrorRep
            outputFormat: 'json'
            status: 429
          }
    }
  } & {
    '/api/v2/projects/:projectKey/flag-defaults': {
      $get:
        | {
            input: { param: { projectKey: string } }
            output: FlagDefaultsRep
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { projectKey: string } }
            output: UnauthorizedErrorRep
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { projectKey: string } }
            output: ForbiddenErrorRep
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { projectKey: string } }
            output: NotFoundErrorRep
            outputFormat: 'json'
            status: 404
          }
      $patch:
        | {
            input: { param: { projectKey: string } } & { json: JSONPatch }
            output: UpsertPayloadRep
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { projectKey: string } } & { json: JSONPatch }
            output: InvalidRequestErrorRep
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { projectKey: string } } & { json: JSONPatch }
            output: UnauthorizedErrorRep
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { projectKey: string } } & { json: JSONPatch }
            output: ForbiddenErrorRep
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { projectKey: string } } & { json: JSONPatch }
            output: NotFoundErrorRep
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { projectKey: string } } & { json: JSONPatch }
            output: StatusConflictErrorRep
            outputFormat: 'json'
            status: 409
          }
        | {
            input: { param: { projectKey: string } } & { json: JSONPatch }
            output: RateLimitedErrorRep
            outputFormat: 'json'
            status: 429
          }
      $put:
        | {
            input: { param: { projectKey: string } } & { json: UpsertFlagDefaultsPayload }
            output: UpsertPayloadRep
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { projectKey: string } } & { json: UpsertFlagDefaultsPayload }
            output: InvalidRequestErrorRep
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { projectKey: string } } & { json: UpsertFlagDefaultsPayload }
            output: UnauthorizedErrorRep
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { projectKey: string } } & { json: UpsertFlagDefaultsPayload }
            output: ForbiddenErrorRep
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { projectKey: string } } & { json: UpsertFlagDefaultsPayload }
            output: NotFoundErrorRep
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { projectKey: string } } & { json: UpsertFlagDefaultsPayload }
            output: StatusConflictErrorRep
            outputFormat: 'json'
            status: 409
          }
        | {
            input: { param: { projectKey: string } } & { json: UpsertFlagDefaultsPayload }
            output: RateLimitedErrorRep
            outputFormat: 'json'
            status: 429
          }
    }
  } & {
    '/api/v2/projects/:projectKey/flags/:featureFlagKey/environments/:environmentKey/approval-requests': {
      $get:
        | {
            input: { param: { projectKey: string; featureFlagKey: string; environmentKey: string } }
            output: FlagConfigApprovalRequestsResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { projectKey: string; featureFlagKey: string; environmentKey: string } }
            output: UnauthorizedErrorRep
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { projectKey: string; featureFlagKey: string; environmentKey: string } }
            output: ForbiddenErrorRep
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { projectKey: string; featureFlagKey: string; environmentKey: string } }
            output: NotFoundErrorRep
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { projectKey: string; featureFlagKey: string; environmentKey: string } }
            output: RateLimitedErrorRep
            outputFormat: 'json'
            status: 429
          }
      $post:
        | {
            input: {
              param: { projectKey: string; featureFlagKey: string; environmentKey: string }
            } & { json: CreateFlagConfigApprovalRequestRequest }
            output: FlagConfigApprovalRequestResponse
            outputFormat: 'json'
            status: 201
          }
        | {
            input: {
              param: { projectKey: string; featureFlagKey: string; environmentKey: string }
            } & { json: CreateFlagConfigApprovalRequestRequest }
            output: InvalidRequestErrorRep
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              param: { projectKey: string; featureFlagKey: string; environmentKey: string }
            } & { json: CreateFlagConfigApprovalRequestRequest }
            output: UnauthorizedErrorRep
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              param: { projectKey: string; featureFlagKey: string; environmentKey: string }
            } & { json: CreateFlagConfigApprovalRequestRequest }
            output: ForbiddenErrorRep
            outputFormat: 'json'
            status: 403
          }
        | {
            input: {
              param: { projectKey: string; featureFlagKey: string; environmentKey: string }
            } & { json: CreateFlagConfigApprovalRequestRequest }
            output: RateLimitedErrorRep
            outputFormat: 'json'
            status: 429
          }
    }
  } & {
    '/api/v2/projects/:projectKey/flags/:featureFlagKey/environments/:environmentKey/approval-requests-flag-copy': {
      $post:
        | {
            input: {
              param: { projectKey: string; featureFlagKey: string; environmentKey: string }
            } & { json: CreateCopyFlagConfigApprovalRequestRequest }
            output: FlagConfigApprovalRequestResponse
            outputFormat: 'json'
            status: 201
          }
        | {
            input: {
              param: { projectKey: string; featureFlagKey: string; environmentKey: string }
            } & { json: CreateCopyFlagConfigApprovalRequestRequest }
            output: InvalidRequestErrorRep
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              param: { projectKey: string; featureFlagKey: string; environmentKey: string }
            } & { json: CreateCopyFlagConfigApprovalRequestRequest }
            output: UnauthorizedErrorRep
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              param: { projectKey: string; featureFlagKey: string; environmentKey: string }
            } & { json: CreateCopyFlagConfigApprovalRequestRequest }
            output: ForbiddenErrorRep
            outputFormat: 'json'
            status: 403
          }
        | {
            input: {
              param: { projectKey: string; featureFlagKey: string; environmentKey: string }
            } & { json: CreateCopyFlagConfigApprovalRequestRequest }
            output: StatusConflictErrorRep
            outputFormat: 'json'
            status: 409
          }
        | {
            input: {
              param: { projectKey: string; featureFlagKey: string; environmentKey: string }
            } & { json: CreateCopyFlagConfigApprovalRequestRequest }
            output: RateLimitedErrorRep
            outputFormat: 'json'
            status: 429
          }
    }
  } & {
    '/api/v2/projects/:projectKey/flags/:featureFlagKey/environments/:environmentKey/approval-requests/:id': {
      $get:
        | {
            input: {
              param: {
                projectKey: string
                featureFlagKey: string
                environmentKey: string
                id: string
              }
            }
            output: FlagConfigApprovalRequestResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              param: {
                projectKey: string
                featureFlagKey: string
                environmentKey: string
                id: string
              }
            }
            output: UnauthorizedErrorRep
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              param: {
                projectKey: string
                featureFlagKey: string
                environmentKey: string
                id: string
              }
            }
            output: ForbiddenErrorRep
            outputFormat: 'json'
            status: 403
          }
        | {
            input: {
              param: {
                projectKey: string
                featureFlagKey: string
                environmentKey: string
                id: string
              }
            }
            output: NotFoundErrorRep
            outputFormat: 'json'
            status: 404
          }
        | {
            input: {
              param: {
                projectKey: string
                featureFlagKey: string
                environmentKey: string
                id: string
              }
            }
            output: RateLimitedErrorRep
            outputFormat: 'json'
            status: 429
          }
      $patch:
        | {
            input: {
              param: {
                projectKey: string
                featureFlagKey: string
                environmentKey: string
                id: string
              }
            }
            output: FlagConfigApprovalRequestResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              param: {
                projectKey: string
                featureFlagKey: string
                environmentKey: string
                id: string
              }
            }
            output: UnauthorizedErrorRep
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              param: {
                projectKey: string
                featureFlagKey: string
                environmentKey: string
                id: string
              }
            }
            output: ForbiddenErrorRep
            outputFormat: 'json'
            status: 403
          }
        | {
            input: {
              param: {
                projectKey: string
                featureFlagKey: string
                environmentKey: string
                id: string
              }
            }
            output: NotFoundErrorRep
            outputFormat: 'json'
            status: 404
          }
        | {
            input: {
              param: {
                projectKey: string
                featureFlagKey: string
                environmentKey: string
                id: string
              }
            }
            output: RateLimitedErrorRep
            outputFormat: 'json'
            status: 429
          }
      $delete:
        | {
            input: {
              param: {
                projectKey: string
                featureFlagKey: string
                environmentKey: string
                id: string
              }
            }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: {
              param: {
                projectKey: string
                featureFlagKey: string
                environmentKey: string
                id: string
              }
            }
            output: UnauthorizedErrorRep
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              param: {
                projectKey: string
                featureFlagKey: string
                environmentKey: string
                id: string
              }
            }
            output: ForbiddenErrorRep
            outputFormat: 'json'
            status: 403
          }
        | {
            input: {
              param: {
                projectKey: string
                featureFlagKey: string
                environmentKey: string
                id: string
              }
            }
            output: NotFoundErrorRep
            outputFormat: 'json'
            status: 404
          }
        | {
            input: {
              param: {
                projectKey: string
                featureFlagKey: string
                environmentKey: string
                id: string
              }
            }
            output: RateLimitedErrorRep
            outputFormat: 'json'
            status: 429
          }
    }
  } & {
    '/api/v2/projects/:projectKey/flags/:featureFlagKey/environments/:environmentKey/approval-requests/:id/apply': {
      $post:
        | {
            input: {
              param: {
                projectKey: string
                featureFlagKey: string
                environmentKey: string
                id: string
              }
            } & { json: PostApprovalRequestApplyRequest }
            output: FlagConfigApprovalRequestResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              param: {
                projectKey: string
                featureFlagKey: string
                environmentKey: string
                id: string
              }
            } & { json: PostApprovalRequestApplyRequest }
            output: InvalidRequestErrorRep
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              param: {
                projectKey: string
                featureFlagKey: string
                environmentKey: string
                id: string
              }
            } & { json: PostApprovalRequestApplyRequest }
            output: UnauthorizedErrorRep
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              param: {
                projectKey: string
                featureFlagKey: string
                environmentKey: string
                id: string
              }
            } & { json: PostApprovalRequestApplyRequest }
            output: ForbiddenErrorRep
            outputFormat: 'json'
            status: 403
          }
        | {
            input: {
              param: {
                projectKey: string
                featureFlagKey: string
                environmentKey: string
                id: string
              }
            } & { json: PostApprovalRequestApplyRequest }
            output: NotFoundErrorRep
            outputFormat: 'json'
            status: 404
          }
        | {
            input: {
              param: {
                projectKey: string
                featureFlagKey: string
                environmentKey: string
                id: string
              }
            } & { json: PostApprovalRequestApplyRequest }
            output: RateLimitedErrorRep
            outputFormat: 'json'
            status: 429
          }
    }
  } & {
    '/api/v2/projects/:projectKey/flags/:featureFlagKey/environments/:environmentKey/approval-requests/:id/reviews': {
      $post:
        | {
            input: {
              param: {
                projectKey: string
                featureFlagKey: string
                environmentKey: string
                id: string
              }
            } & { json: PostApprovalRequestReviewRequest }
            output: FlagConfigApprovalRequestResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              param: {
                projectKey: string
                featureFlagKey: string
                environmentKey: string
                id: string
              }
            } & { json: PostApprovalRequestReviewRequest }
            output: InvalidRequestErrorRep
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              param: {
                projectKey: string
                featureFlagKey: string
                environmentKey: string
                id: string
              }
            } & { json: PostApprovalRequestReviewRequest }
            output: UnauthorizedErrorRep
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              param: {
                projectKey: string
                featureFlagKey: string
                environmentKey: string
                id: string
              }
            } & { json: PostApprovalRequestReviewRequest }
            output: ForbiddenErrorRep
            outputFormat: 'json'
            status: 403
          }
        | {
            input: {
              param: {
                projectKey: string
                featureFlagKey: string
                environmentKey: string
                id: string
              }
            } & { json: PostApprovalRequestReviewRequest }
            output: NotFoundErrorRep
            outputFormat: 'json'
            status: 404
          }
        | {
            input: {
              param: {
                projectKey: string
                featureFlagKey: string
                environmentKey: string
                id: string
              }
            } & { json: PostApprovalRequestReviewRequest }
            output: RateLimitedErrorRep
            outputFormat: 'json'
            status: 429
          }
    }
  } & {
    '/api/v2/projects/:projectKey/flags/:featureFlagKey/environments/:environmentKey/followers': {
      $get:
        | {
            input: { param: { projectKey: string; featureFlagKey: string; environmentKey: string } }
            output: FlagFollowersGetRep
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { projectKey: string; featureFlagKey: string; environmentKey: string } }
            output: InvalidRequestErrorRep
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { projectKey: string; featureFlagKey: string; environmentKey: string } }
            output: UnauthorizedErrorRep
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { projectKey: string; featureFlagKey: string; environmentKey: string } }
            output: ForbiddenErrorRep
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { projectKey: string; featureFlagKey: string; environmentKey: string } }
            output: NotFoundErrorRep
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/api/v2/projects/:projectKey/flags/:featureFlagKey/environments/:environmentKey/followers/:memberId': {
      $put:
        | {
            input: {
              param: {
                projectKey: string
                featureFlagKey: string
                environmentKey: string
                memberId: string
              }
            }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: {
              param: {
                projectKey: string
                featureFlagKey: string
                environmentKey: string
                memberId: string
              }
            }
            output: InvalidRequestErrorRep
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              param: {
                projectKey: string
                featureFlagKey: string
                environmentKey: string
                memberId: string
              }
            }
            output: UnauthorizedErrorRep
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              param: {
                projectKey: string
                featureFlagKey: string
                environmentKey: string
                memberId: string
              }
            }
            output: ForbiddenErrorRep
            outputFormat: 'json'
            status: 403
          }
        | {
            input: {
              param: {
                projectKey: string
                featureFlagKey: string
                environmentKey: string
                memberId: string
              }
            }
            output: NotFoundErrorRep
            outputFormat: 'json'
            status: 404
          }
      $delete:
        | {
            input: {
              param: {
                projectKey: string
                featureFlagKey: string
                environmentKey: string
                memberId: string
              }
            }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: {
              param: {
                projectKey: string
                featureFlagKey: string
                environmentKey: string
                memberId: string
              }
            }
            output: InvalidRequestErrorRep
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              param: {
                projectKey: string
                featureFlagKey: string
                environmentKey: string
                memberId: string
              }
            }
            output: UnauthorizedErrorRep
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              param: {
                projectKey: string
                featureFlagKey: string
                environmentKey: string
                memberId: string
              }
            }
            output: ForbiddenErrorRep
            outputFormat: 'json'
            status: 403
          }
        | {
            input: {
              param: {
                projectKey: string
                featureFlagKey: string
                environmentKey: string
                memberId: string
              }
            }
            output: NotFoundErrorRep
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/api/v2/projects/:projectKey/flags/:featureFlagKey/environments/:environmentKey/scheduled-changes': {
      $get:
        | {
            input: { param: { projectKey: string; featureFlagKey: string; environmentKey: string } }
            output: FeatureFlagScheduledChanges
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { projectKey: string; featureFlagKey: string; environmentKey: string } }
            output: InvalidRequestErrorRep
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { projectKey: string; featureFlagKey: string; environmentKey: string } }
            output: UnauthorizedErrorRep
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { projectKey: string; featureFlagKey: string; environmentKey: string } }
            output: ForbiddenErrorRep
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { projectKey: string; featureFlagKey: string; environmentKey: string } }
            output: NotFoundErrorRep
            outputFormat: 'json'
            status: 404
          }
      $post:
        | {
            input: {
              param: { projectKey: string; featureFlagKey: string; environmentKey: string }
            } & { query: { ignoreConflicts?: boolean | undefined } } & {
              json: PostFlagScheduledChangesInput
            }
            output: FeatureFlagScheduledChange
            outputFormat: 'json'
            status: 201
          }
        | {
            input: {
              param: { projectKey: string; featureFlagKey: string; environmentKey: string }
            } & { query: { ignoreConflicts?: boolean | undefined } } & {
              json: PostFlagScheduledChangesInput
            }
            output: InvalidRequestErrorRep
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              param: { projectKey: string; featureFlagKey: string; environmentKey: string }
            } & { query: { ignoreConflicts?: boolean | undefined } } & {
              json: PostFlagScheduledChangesInput
            }
            output: UnauthorizedErrorRep
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              param: { projectKey: string; featureFlagKey: string; environmentKey: string }
            } & { query: { ignoreConflicts?: boolean | undefined } } & {
              json: PostFlagScheduledChangesInput
            }
            output: ForbiddenErrorRep
            outputFormat: 'json'
            status: 403
          }
        | {
            input: {
              param: { projectKey: string; featureFlagKey: string; environmentKey: string }
            } & { query: { ignoreConflicts?: boolean | undefined } } & {
              json: PostFlagScheduledChangesInput
            }
            output: NotFoundErrorRep
            outputFormat: 'json'
            status: 404
          }
        | {
            input: {
              param: { projectKey: string; featureFlagKey: string; environmentKey: string }
            } & { query: { ignoreConflicts?: boolean | undefined } } & {
              json: PostFlagScheduledChangesInput
            }
            output: MethodNotAllowedErrorRep
            outputFormat: 'json'
            status: 405
          }
        | {
            input: {
              param: { projectKey: string; featureFlagKey: string; environmentKey: string }
            } & { query: { ignoreConflicts?: boolean | undefined } } & {
              json: PostFlagScheduledChangesInput
            }
            output: StatusConflictErrorRep
            outputFormat: 'json'
            status: 409
          }
        | {
            input: {
              param: { projectKey: string; featureFlagKey: string; environmentKey: string }
            } & { query: { ignoreConflicts?: boolean | undefined } } & {
              json: PostFlagScheduledChangesInput
            }
            output: RateLimitedErrorRep
            outputFormat: 'json'
            status: 429
          }
    }
  } & {
    '/api/v2/projects/:projectKey/flags/:featureFlagKey/environments/:environmentKey/scheduled-changes/:id': {
      $get:
        | {
            input: {
              param: {
                projectKey: string
                featureFlagKey: string
                environmentKey: string
                id: string
              }
            }
            output: FeatureFlagScheduledChange
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              param: {
                projectKey: string
                featureFlagKey: string
                environmentKey: string
                id: string
              }
            }
            output: UnauthorizedErrorRep
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              param: {
                projectKey: string
                featureFlagKey: string
                environmentKey: string
                id: string
              }
            }
            output: NotFoundErrorRep
            outputFormat: 'json'
            status: 404
          }
        | {
            input: {
              param: {
                projectKey: string
                featureFlagKey: string
                environmentKey: string
                id: string
              }
            }
            output: RateLimitedErrorRep
            outputFormat: 'json'
            status: 429
          }
      $patch:
        | {
            input: {
              param: {
                projectKey: string
                featureFlagKey: string
                environmentKey: string
                id: string
              }
            } & { query: { ignoreConflicts?: boolean | undefined } } & {
              json: FlagScheduledChangesInput
            }
            output: FeatureFlagScheduledChange
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              param: {
                projectKey: string
                featureFlagKey: string
                environmentKey: string
                id: string
              }
            } & { query: { ignoreConflicts?: boolean | undefined } } & {
              json: FlagScheduledChangesInput
            }
            output: InvalidRequestErrorRep
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              param: {
                projectKey: string
                featureFlagKey: string
                environmentKey: string
                id: string
              }
            } & { query: { ignoreConflicts?: boolean | undefined } } & {
              json: FlagScheduledChangesInput
            }
            output: UnauthorizedErrorRep
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              param: {
                projectKey: string
                featureFlagKey: string
                environmentKey: string
                id: string
              }
            } & { query: { ignoreConflicts?: boolean | undefined } } & {
              json: FlagScheduledChangesInput
            }
            output: ForbiddenErrorRep
            outputFormat: 'json'
            status: 403
          }
        | {
            input: {
              param: {
                projectKey: string
                featureFlagKey: string
                environmentKey: string
                id: string
              }
            } & { query: { ignoreConflicts?: boolean | undefined } } & {
              json: FlagScheduledChangesInput
            }
            output: NotFoundErrorRep
            outputFormat: 'json'
            status: 404
          }
        | {
            input: {
              param: {
                projectKey: string
                featureFlagKey: string
                environmentKey: string
                id: string
              }
            } & { query: { ignoreConflicts?: boolean | undefined } } & {
              json: FlagScheduledChangesInput
            }
            output: MethodNotAllowedErrorRep
            outputFormat: 'json'
            status: 405
          }
        | {
            input: {
              param: {
                projectKey: string
                featureFlagKey: string
                environmentKey: string
                id: string
              }
            } & { query: { ignoreConflicts?: boolean | undefined } } & {
              json: FlagScheduledChangesInput
            }
            output: StatusConflictErrorRep
            outputFormat: 'json'
            status: 409
          }
        | {
            input: {
              param: {
                projectKey: string
                featureFlagKey: string
                environmentKey: string
                id: string
              }
            } & { query: { ignoreConflicts?: boolean | undefined } } & {
              json: FlagScheduledChangesInput
            }
            output: RateLimitedErrorRep
            outputFormat: 'json'
            status: 429
          }
      $delete:
        | {
            input: {
              param: {
                projectKey: string
                featureFlagKey: string
                environmentKey: string
                id: string
              }
            }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: {
              param: {
                projectKey: string
                featureFlagKey: string
                environmentKey: string
                id: string
              }
            }
            output: UnauthorizedErrorRep
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              param: {
                projectKey: string
                featureFlagKey: string
                environmentKey: string
                id: string
              }
            }
            output: ForbiddenErrorRep
            outputFormat: 'json'
            status: 403
          }
        | {
            input: {
              param: {
                projectKey: string
                featureFlagKey: string
                environmentKey: string
                id: string
              }
            }
            output: NotFoundErrorRep
            outputFormat: 'json'
            status: 404
          }
        | {
            input: {
              param: {
                projectKey: string
                featureFlagKey: string
                environmentKey: string
                id: string
              }
            }
            output: MethodNotAllowedErrorRep
            outputFormat: 'json'
            status: 405
          }
        | {
            input: {
              param: {
                projectKey: string
                featureFlagKey: string
                environmentKey: string
                id: string
              }
            }
            output: StatusConflictErrorRep
            outputFormat: 'json'
            status: 409
          }
        | {
            input: {
              param: {
                projectKey: string
                featureFlagKey: string
                environmentKey: string
                id: string
              }
            }
            output: RateLimitedErrorRep
            outputFormat: 'json'
            status: 429
          }
    }
  } & {
    '/api/v2/projects/:projectKey/flags/:featureFlagKey/environments/:environmentKey/workflows': {
      $get:
        | {
            input: {
              param: { projectKey: string; featureFlagKey: string; environmentKey: string }
            } & {
              query: {
                status?: string | undefined
                sort?: string | undefined
                limit?: bigint | undefined
                offset?: bigint | undefined
              }
            }
            output: CustomWorkflowsListingOutput
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              param: { projectKey: string; featureFlagKey: string; environmentKey: string }
            } & {
              query: {
                status?: string | undefined
                sort?: string | undefined
                limit?: bigint | undefined
                offset?: bigint | undefined
              }
            }
            output: UnauthorizedErrorRep
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              param: { projectKey: string; featureFlagKey: string; environmentKey: string }
            } & {
              query: {
                status?: string | undefined
                sort?: string | undefined
                limit?: bigint | undefined
                offset?: bigint | undefined
              }
            }
            output: ForbiddenErrorRep
            outputFormat: 'json'
            status: 403
          }
        | {
            input: {
              param: { projectKey: string; featureFlagKey: string; environmentKey: string }
            } & {
              query: {
                status?: string | undefined
                sort?: string | undefined
                limit?: bigint | undefined
                offset?: bigint | undefined
              }
            }
            output: NotFoundErrorRep
            outputFormat: 'json'
            status: 404
          }
        | {
            input: {
              param: { projectKey: string; featureFlagKey: string; environmentKey: string }
            } & {
              query: {
                status?: string | undefined
                sort?: string | undefined
                limit?: bigint | undefined
                offset?: bigint | undefined
              }
            }
            output: RateLimitedErrorRep
            outputFormat: 'json'
            status: 429
          }
      $post:
        | {
            input: {
              param: { projectKey: string; featureFlagKey: string; environmentKey: string }
            } & { query: { templateKey?: string | undefined; dryRun?: boolean | undefined } } & {
              json: CustomWorkflowInput
            }
            output: CustomWorkflowOutput
            outputFormat: 'json'
            status: 201
          }
        | {
            input: {
              param: { projectKey: string; featureFlagKey: string; environmentKey: string }
            } & { query: { templateKey?: string | undefined; dryRun?: boolean | undefined } } & {
              json: CustomWorkflowInput
            }
            output: InvalidRequestErrorRep
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              param: { projectKey: string; featureFlagKey: string; environmentKey: string }
            } & { query: { templateKey?: string | undefined; dryRun?: boolean | undefined } } & {
              json: CustomWorkflowInput
            }
            output: UnauthorizedErrorRep
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              param: { projectKey: string; featureFlagKey: string; environmentKey: string }
            } & { query: { templateKey?: string | undefined; dryRun?: boolean | undefined } } & {
              json: CustomWorkflowInput
            }
            output: ForbiddenErrorRep
            outputFormat: 'json'
            status: 403
          }
        | {
            input: {
              param: { projectKey: string; featureFlagKey: string; environmentKey: string }
            } & { query: { templateKey?: string | undefined; dryRun?: boolean | undefined } } & {
              json: CustomWorkflowInput
            }
            output: NotFoundErrorRep
            outputFormat: 'json'
            status: 404
          }
        | {
            input: {
              param: { projectKey: string; featureFlagKey: string; environmentKey: string }
            } & { query: { templateKey?: string | undefined; dryRun?: boolean | undefined } } & {
              json: CustomWorkflowInput
            }
            output: RateLimitedErrorRep
            outputFormat: 'json'
            status: 429
          }
    }
  } & {
    '/api/v2/projects/:projectKey/flags/:featureFlagKey/environments/:environmentKey/workflows/:workflowId': {
      $get:
        | {
            input: {
              param: {
                projectKey: string
                featureFlagKey: string
                environmentKey: string
                workflowId: string
              }
            }
            output: CustomWorkflowOutput
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              param: {
                projectKey: string
                featureFlagKey: string
                environmentKey: string
                workflowId: string
              }
            }
            output: UnauthorizedErrorRep
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              param: {
                projectKey: string
                featureFlagKey: string
                environmentKey: string
                workflowId: string
              }
            }
            output: ForbiddenErrorRep
            outputFormat: 'json'
            status: 403
          }
        | {
            input: {
              param: {
                projectKey: string
                featureFlagKey: string
                environmentKey: string
                workflowId: string
              }
            }
            output: NotFoundErrorRep
            outputFormat: 'json'
            status: 404
          }
        | {
            input: {
              param: {
                projectKey: string
                featureFlagKey: string
                environmentKey: string
                workflowId: string
              }
            }
            output: RateLimitedErrorRep
            outputFormat: 'json'
            status: 429
          }
      $delete:
        | {
            input: {
              param: {
                projectKey: string
                featureFlagKey: string
                environmentKey: string
                workflowId: string
              }
            }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: {
              param: {
                projectKey: string
                featureFlagKey: string
                environmentKey: string
                workflowId: string
              }
            }
            output: InvalidRequestErrorRep
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              param: {
                projectKey: string
                featureFlagKey: string
                environmentKey: string
                workflowId: string
              }
            }
            output: UnauthorizedErrorRep
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              param: {
                projectKey: string
                featureFlagKey: string
                environmentKey: string
                workflowId: string
              }
            }
            output: ForbiddenErrorRep
            outputFormat: 'json'
            status: 403
          }
        | {
            input: {
              param: {
                projectKey: string
                featureFlagKey: string
                environmentKey: string
                workflowId: string
              }
            }
            output: NotFoundErrorRep
            outputFormat: 'json'
            status: 404
          }
        | {
            input: {
              param: {
                projectKey: string
                featureFlagKey: string
                environmentKey: string
                workflowId: string
              }
            }
            output: RateLimitedErrorRep
            outputFormat: 'json'
            status: 429
          }
    }
  } & {
    '/api/v2/projects/:projectKey/flags/:flagKey/environments/:environmentKey/migration-safety-issues': {
      $post:
        | {
            input: { param: { projectKey: string; flagKey: string; environmentKey: string } } & {
              json: FlagSempatch
            }
            output: MigrationSafetyIssueRep[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { projectKey: string; flagKey: string; environmentKey: string } } & {
              json: FlagSempatch
            }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { projectKey: string; flagKey: string; environmentKey: string } } & {
              json: FlagSempatch
            }
            output: InvalidRequestErrorRep
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { projectKey: string; flagKey: string; environmentKey: string } } & {
              json: FlagSempatch
            }
            output: UnauthorizedErrorRep
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { projectKey: string; flagKey: string; environmentKey: string } } & {
              json: FlagSempatch
            }
            output: ForbiddenErrorRep
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { projectKey: string; flagKey: string; environmentKey: string } } & {
              json: FlagSempatch
            }
            output: NotFoundErrorRep
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { projectKey: string; flagKey: string; environmentKey: string } } & {
              json: FlagSempatch
            }
            output: RateLimitedErrorRep
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { projectKey: string; flagKey: string; environmentKey: string } } & {
              json: FlagSempatch
            }
            output: StatusServiceUnavailable
            outputFormat: 'json'
            status: 503
          }
    }
  } & {
    '/api/v2/projects/:projectKey/flags/:flagKey/release': {
      $put:
        | {
            input: { param: { projectKey: string; flagKey: string } } & {
              json: CreatePipelineReleaseInput
            }
            output: PipelineRelease
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { projectKey: string; flagKey: string } } & {
              json: CreatePipelineReleaseInput
            }
            output: InvalidRequestErrorRep
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { projectKey: string; flagKey: string } } & {
              json: CreatePipelineReleaseInput
            }
            output: UnauthorizedErrorRep
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { projectKey: string; flagKey: string } } & {
              json: CreatePipelineReleaseInput
            }
            output: NotFoundErrorRep
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { projectKey: string; flagKey: string } } & {
              json: CreatePipelineReleaseInput
            }
            output: RateLimitedErrorRep
            outputFormat: 'json'
            status: 429
          }
    }
  } & {
    '/api/v2/projects/:projectKey/flags/:flagKey/release/phases/:phaseId': {
      $put:
        | {
            input: { param: { projectKey: string; flagKey: string; phaseId: string } } & {
              json: UpdatePhaseStatusInput
            }
            output: PipelineRelease
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { projectKey: string; flagKey: string; phaseId: string } } & {
              json: UpdatePhaseStatusInput
            }
            output: InvalidRequestErrorRep
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { projectKey: string; flagKey: string; phaseId: string } } & {
              json: UpdatePhaseStatusInput
            }
            output: UnauthorizedErrorRep
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { projectKey: string; flagKey: string; phaseId: string } } & {
              json: UpdatePhaseStatusInput
            }
            output: NotFoundErrorRep
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { projectKey: string; flagKey: string; phaseId: string } } & {
              json: UpdatePhaseStatusInput
            }
            output: RateLimitedErrorRep
            outputFormat: 'json'
            status: 429
          }
    }
  } & {
    '/api/v2/projects/:projectKey/layers': {
      $get:
        | {
            input: { param: { projectKey: string } } & { query: { filter?: string | undefined } }
            output: LayerCollectionRep
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { projectKey: string } } & { query: { filter?: string | undefined } }
            output: InvalidRequestErrorRep
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { projectKey: string } } & { query: { filter?: string | undefined } }
            output: ForbiddenErrorRep
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { projectKey: string } } & { query: { filter?: string | undefined } }
            output: NotFoundErrorRep
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { projectKey: string } } & { query: { filter?: string | undefined } }
            output: RateLimitedErrorRep
            outputFormat: 'json'
            status: 429
          }
      $post:
        | {
            input: { param: { projectKey: string } } & { json: LayerPost }
            output: LayerRep
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { param: { projectKey: string } } & { json: LayerPost }
            output: InvalidRequestErrorRep
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { projectKey: string } } & { json: LayerPost }
            output: ForbiddenErrorRep
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { projectKey: string } } & { json: LayerPost }
            output: NotFoundErrorRep
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { projectKey: string } } & { json: LayerPost }
            output: RateLimitedErrorRep
            outputFormat: 'json'
            status: 429
          }
    }
  } & {
    '/api/v2/projects/:projectKey/layers/:layerKey': {
      $patch:
        | {
            input: { param: { projectKey: string; layerKey: string } } & { json: LayerPatchInput }
            output: LayerRep
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { projectKey: string; layerKey: string } } & { json: LayerPatchInput }
            output: InvalidRequestErrorRep
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { projectKey: string; layerKey: string } } & { json: LayerPatchInput }
            output: ForbiddenErrorRep
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { projectKey: string; layerKey: string } } & { json: LayerPatchInput }
            output: NotFoundErrorRep
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { projectKey: string; layerKey: string } } & { json: LayerPatchInput }
            output: RateLimitedErrorRep
            outputFormat: 'json'
            status: 429
          }
    }
  } & {
    '/api/v2/projects/:projectKey/metric-groups': {
      $get:
        | {
            input: { param: { projectKey: string } } & {
              query: {
                filter?: string | undefined
                sort?: string | undefined
                expand?: string | undefined
                limit?: bigint | undefined
                offset?: bigint | undefined
              }
            }
            output: MetricGroupCollectionRep
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { projectKey: string } } & {
              query: {
                filter?: string | undefined
                sort?: string | undefined
                expand?: string | undefined
                limit?: bigint | undefined
                offset?: bigint | undefined
              }
            }
            output: InvalidRequestErrorRep
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { projectKey: string } } & {
              query: {
                filter?: string | undefined
                sort?: string | undefined
                expand?: string | undefined
                limit?: bigint | undefined
                offset?: bigint | undefined
              }
            }
            output: UnauthorizedErrorRep
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { projectKey: string } } & {
              query: {
                filter?: string | undefined
                sort?: string | undefined
                expand?: string | undefined
                limit?: bigint | undefined
                offset?: bigint | undefined
              }
            }
            output: ForbiddenErrorRep
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { projectKey: string } } & {
              query: {
                filter?: string | undefined
                sort?: string | undefined
                expand?: string | undefined
                limit?: bigint | undefined
                offset?: bigint | undefined
              }
            }
            output: NotFoundErrorRep
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { projectKey: string } } & {
              query: {
                filter?: string | undefined
                sort?: string | undefined
                expand?: string | undefined
                limit?: bigint | undefined
                offset?: bigint | undefined
              }
            }
            output: MethodNotAllowedErrorRep
            outputFormat: 'json'
            status: 405
          }
        | {
            input: { param: { projectKey: string } } & {
              query: {
                filter?: string | undefined
                sort?: string | undefined
                expand?: string | undefined
                limit?: bigint | undefined
                offset?: bigint | undefined
              }
            }
            output: RateLimitedErrorRep
            outputFormat: 'json'
            status: 429
          }
      $post:
        | {
            input: { param: { projectKey: string } } & { json: MetricGroupPost }
            output: MetricGroupRep
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { param: { projectKey: string } } & { json: MetricGroupPost }
            output: InvalidRequestErrorRep
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { projectKey: string } } & { json: MetricGroupPost }
            output: UnauthorizedErrorRep
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { projectKey: string } } & { json: MetricGroupPost }
            output: ForbiddenErrorRep
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { projectKey: string } } & { json: MetricGroupPost }
            output: NotFoundErrorRep
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { projectKey: string } } & { json: MetricGroupPost }
            output: MethodNotAllowedErrorRep
            outputFormat: 'json'
            status: 405
          }
        | {
            input: { param: { projectKey: string } } & { json: MetricGroupPost }
            output: RateLimitedErrorRep
            outputFormat: 'json'
            status: 429
          }
    }
  } & {
    '/api/v2/projects/:projectKey/metric-groups/:metricGroupKey': {
      $get:
        | {
            input: { param: { projectKey: string; metricGroupKey: string } } & {
              query: { expand?: string | undefined }
            }
            output: MetricGroupRep
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { projectKey: string; metricGroupKey: string } } & {
              query: { expand?: string | undefined }
            }
            output: InvalidRequestErrorRep
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { projectKey: string; metricGroupKey: string } } & {
              query: { expand?: string | undefined }
            }
            output: UnauthorizedErrorRep
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { projectKey: string; metricGroupKey: string } } & {
              query: { expand?: string | undefined }
            }
            output: ForbiddenErrorRep
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { projectKey: string; metricGroupKey: string } } & {
              query: { expand?: string | undefined }
            }
            output: NotFoundErrorRep
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { projectKey: string; metricGroupKey: string } } & {
              query: { expand?: string | undefined }
            }
            output: MethodNotAllowedErrorRep
            outputFormat: 'json'
            status: 405
          }
        | {
            input: { param: { projectKey: string; metricGroupKey: string } } & {
              query: { expand?: string | undefined }
            }
            output: RateLimitedErrorRep
            outputFormat: 'json'
            status: 429
          }
      $patch:
        | {
            input: { param: { projectKey: string; metricGroupKey: string } } & { json: JSONPatch }
            output: MetricGroupRep
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { projectKey: string; metricGroupKey: string } } & { json: JSONPatch }
            output: InvalidRequestErrorRep
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { projectKey: string; metricGroupKey: string } } & { json: JSONPatch }
            output: UnauthorizedErrorRep
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { projectKey: string; metricGroupKey: string } } & { json: JSONPatch }
            output: ForbiddenErrorRep
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { projectKey: string; metricGroupKey: string } } & { json: JSONPatch }
            output: NotFoundErrorRep
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { projectKey: string; metricGroupKey: string } } & { json: JSONPatch }
            output: MethodNotAllowedErrorRep
            outputFormat: 'json'
            status: 405
          }
        | {
            input: { param: { projectKey: string; metricGroupKey: string } } & { json: JSONPatch }
            output: RateLimitedErrorRep
            outputFormat: 'json'
            status: 429
          }
      $delete:
        | {
            input: { param: { projectKey: string; metricGroupKey: string } }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { projectKey: string; metricGroupKey: string } }
            output: InvalidRequestErrorRep
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { projectKey: string; metricGroupKey: string } }
            output: UnauthorizedErrorRep
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { projectKey: string; metricGroupKey: string } }
            output: ForbiddenErrorRep
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { projectKey: string; metricGroupKey: string } }
            output: NotFoundErrorRep
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { projectKey: string; metricGroupKey: string } }
            output: MethodNotAllowedErrorRep
            outputFormat: 'json'
            status: 405
          }
        | {
            input: { param: { projectKey: string; metricGroupKey: string } }
            output: RateLimitedErrorRep
            outputFormat: 'json'
            status: 429
          }
    }
  } & {
    '/api/v2/projects/:projectKey/release-pipelines': {
      $get:
        | {
            input: { param: { projectKey: string } } & {
              query: {
                filter?: string | undefined
                limit?: bigint | undefined
                offset?: bigint | undefined
              }
            }
            output: ReleasePipelineCollection
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { projectKey: string } } & {
              query: {
                filter?: string | undefined
                limit?: bigint | undefined
                offset?: bigint | undefined
              }
            }
            output: NotFoundErrorRep
            outputFormat: 'json'
            status: 404
          }
      $post:
        | {
            input: { param: { projectKey: string } } & { json: CreateReleasePipelineInput }
            output: ReleasePipeline
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { param: { projectKey: string } } & { json: CreateReleasePipelineInput }
            output: InvalidRequestErrorRep
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { projectKey: string } } & { json: CreateReleasePipelineInput }
            output: ForbiddenErrorRep
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { projectKey: string } } & { json: CreateReleasePipelineInput }
            output: NotFoundErrorRep
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { projectKey: string } } & { json: CreateReleasePipelineInput }
            output: StatusConflictErrorRep
            outputFormat: 'json'
            status: 409
          }
    }
  } & {
    '/api/v2/projects/:projectKey/release-pipelines/:pipelineKey': {
      $get:
        | {
            input: { param: { projectKey: string; pipelineKey: string } }
            output: ReleasePipeline
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { projectKey: string; pipelineKey: string } }
            output: NotFoundErrorRep
            outputFormat: 'json'
            status: 404
          }
      $put:
        | {
            input: { param: { projectKey: string; pipelineKey: string } } & {
              json: UpdateReleasePipelineInput
            }
            output: ReleasePipeline
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { projectKey: string; pipelineKey: string } } & {
              json: UpdateReleasePipelineInput
            }
            output: InvalidRequestErrorRep
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { projectKey: string; pipelineKey: string } } & {
              json: UpdateReleasePipelineInput
            }
            output: ForbiddenErrorRep
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { projectKey: string; pipelineKey: string } } & {
              json: UpdateReleasePipelineInput
            }
            output: NotFoundErrorRep
            outputFormat: 'json'
            status: 404
          }
      $delete:
        | {
            input: { param: { projectKey: string; pipelineKey: string } }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { projectKey: string; pipelineKey: string } }
            output: ForbiddenErrorRep
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { projectKey: string; pipelineKey: string } }
            output: NotFoundErrorRep
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/api/v2/projects/:projectKey/release-pipelines/:pipelineKey/releases': {
      $get:
        | {
            input: { param: { projectKey: string; pipelineKey: string } } & {
              query: {
                filter?: string | undefined
                limit?: bigint | undefined
                offset?: bigint | undefined
              }
            }
            output: PipelineReleaseProgressionCollection
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { projectKey: string; pipelineKey: string } } & {
              query: {
                filter?: string | undefined
                limit?: bigint | undefined
                offset?: bigint | undefined
              }
            }
            output: NotFoundErrorRep
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/api/v2/public-ip-list': {
      $get:
        | { input: {}; output: IpList; outputFormat: 'json'; status: 200 }
        | { input: {}; output: RateLimitedErrorRep; outputFormat: 'json'; status: 429 }
    }
  } & {
    '/api/v2/roles': {
      $get:
        | {
            input: { query: { limit?: bigint | undefined; offset?: bigint | undefined } }
            output: CustomRoles
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { limit?: bigint | undefined; offset?: bigint | undefined } }
            output: UnauthorizedErrorRep
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { query: { limit?: bigint | undefined; offset?: bigint | undefined } }
            output: ForbiddenErrorRep
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { query: { limit?: bigint | undefined; offset?: bigint | undefined } }
            output: RateLimitedErrorRep
            outputFormat: 'json'
            status: 429
          }
      $post:
        | { input: { json: CustomRolePost }; output: CustomRole; outputFormat: 'json'; status: 201 }
        | {
            input: { json: CustomRolePost }
            output: InvalidRequestErrorRep
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { json: CustomRolePost }
            output: UnauthorizedErrorRep
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { json: CustomRolePost }
            output: ForbiddenErrorRep
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { json: CustomRolePost }
            output: StatusConflictErrorRep
            outputFormat: 'json'
            status: 409
          }
        | {
            input: { json: CustomRolePost }
            output: RateLimitedErrorRep
            outputFormat: 'json'
            status: 429
          }
    }
  } & {
    '/api/v2/roles/:customRoleKey': {
      $get:
        | {
            input: { param: { customRoleKey: string } }
            output: CustomRole
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { customRoleKey: string } }
            output: UnauthorizedErrorRep
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { customRoleKey: string } }
            output: ForbiddenErrorRep
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { customRoleKey: string } }
            output: NotFoundErrorRep
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { customRoleKey: string } }
            output: RateLimitedErrorRep
            outputFormat: 'json'
            status: 429
          }
      $patch:
        | {
            input: { param: { customRoleKey: string } } & { json: PatchWithComment }
            output: CustomRole
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { customRoleKey: string } } & { json: PatchWithComment }
            output: InvalidRequestErrorRep
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { customRoleKey: string } } & { json: PatchWithComment }
            output: UnauthorizedErrorRep
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { customRoleKey: string } } & { json: PatchWithComment }
            output: NotFoundErrorRep
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { customRoleKey: string } } & { json: PatchWithComment }
            output: StatusConflictErrorRep
            outputFormat: 'json'
            status: 409
          }
        | {
            input: { param: { customRoleKey: string } } & { json: PatchWithComment }
            output: RateLimitedErrorRep
            outputFormat: 'json'
            status: 429
          }
      $delete:
        | {
            input: { param: { customRoleKey: string } }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { customRoleKey: string } }
            output: UnauthorizedErrorRep
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { customRoleKey: string } }
            output: NotFoundErrorRep
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { customRoleKey: string } }
            output: RateLimitedErrorRep
            outputFormat: 'json'
            status: 429
          }
    }
  } & {
    '/api/v2/segments/:projectKey/:environmentKey': {
      $get:
        | {
            input: { param: { projectKey: string; environmentKey: string } } & {
              query: {
                limit?: bigint | undefined
                offset?: bigint | undefined
                sort?: string | undefined
                filter?: string | undefined
              }
            }
            output: UserSegments
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { projectKey: string; environmentKey: string } } & {
              query: {
                limit?: bigint | undefined
                offset?: bigint | undefined
                sort?: string | undefined
                filter?: string | undefined
              }
            }
            output: UnauthorizedErrorRep
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { projectKey: string; environmentKey: string } } & {
              query: {
                limit?: bigint | undefined
                offset?: bigint | undefined
                sort?: string | undefined
                filter?: string | undefined
              }
            }
            output: NotFoundErrorRep
            outputFormat: 'json'
            status: 404
          }
      $post:
        | {
            input: { param: { projectKey: string; environmentKey: string } } & { json: SegmentBody }
            output: UserSegment
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { param: { projectKey: string; environmentKey: string } } & { json: SegmentBody }
            output: InvalidRequestErrorRep
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { projectKey: string; environmentKey: string } } & { json: SegmentBody }
            output: UnauthorizedErrorRep
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { projectKey: string; environmentKey: string } } & { json: SegmentBody }
            output: ForbiddenErrorRep
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { projectKey: string; environmentKey: string } } & { json: SegmentBody }
            output: NotFoundErrorRep
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { projectKey: string; environmentKey: string } } & { json: SegmentBody }
            output: RateLimitedErrorRep
            outputFormat: 'json'
            status: 429
          }
    }
  } & {
    '/api/v2/segments/:projectKey/:environmentKey/:segmentKey': {
      $get:
        | {
            input: { param: { projectKey: string; environmentKey: string; segmentKey: string } }
            output: UserSegment
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { projectKey: string; environmentKey: string; segmentKey: string } }
            output: UnauthorizedErrorRep
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { projectKey: string; environmentKey: string; segmentKey: string } }
            output: NotFoundErrorRep
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { projectKey: string; environmentKey: string; segmentKey: string } }
            output: RateLimitedErrorRep
            outputFormat: 'json'
            status: 429
          }
      $patch:
        | {
            input: { param: { projectKey: string; environmentKey: string; segmentKey: string } } & {
              query: { dryRun?: boolean | undefined }
            } & { json: PatchWithComment }
            output: UserSegment
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { projectKey: string; environmentKey: string; segmentKey: string } } & {
              query: { dryRun?: boolean | undefined }
            } & { json: PatchWithComment }
            output: InvalidRequestErrorRep
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { projectKey: string; environmentKey: string; segmentKey: string } } & {
              query: { dryRun?: boolean | undefined }
            } & { json: PatchWithComment }
            output: UnauthorizedErrorRep
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { projectKey: string; environmentKey: string; segmentKey: string } } & {
              query: { dryRun?: boolean | undefined }
            } & { json: PatchWithComment }
            output: ForbiddenErrorRep
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { projectKey: string; environmentKey: string; segmentKey: string } } & {
              query: { dryRun?: boolean | undefined }
            } & { json: PatchWithComment }
            output: NotFoundErrorRep
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { projectKey: string; environmentKey: string; segmentKey: string } } & {
              query: { dryRun?: boolean | undefined }
            } & { json: PatchWithComment }
            output: StatusConflictErrorRep
            outputFormat: 'json'
            status: 409
          }
        | {
            input: { param: { projectKey: string; environmentKey: string; segmentKey: string } } & {
              query: { dryRun?: boolean | undefined }
            } & { json: PatchWithComment }
            output: RateLimitedErrorRep
            outputFormat: 'json'
            status: 429
          }
      $delete:
        | {
            input: { param: { projectKey: string; environmentKey: string; segmentKey: string } }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { projectKey: string; environmentKey: string; segmentKey: string } }
            output: UnauthorizedErrorRep
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { projectKey: string; environmentKey: string; segmentKey: string } }
            output: ForbiddenErrorRep
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { projectKey: string; environmentKey: string; segmentKey: string } }
            output: NotFoundErrorRep
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { projectKey: string; environmentKey: string; segmentKey: string } }
            output: StatusConflictErrorRep
            outputFormat: 'json'
            status: 409
          }
        | {
            input: { param: { projectKey: string; environmentKey: string; segmentKey: string } }
            output: RateLimitedErrorRep
            outputFormat: 'json'
            status: 429
          }
    }
  } & {
    '/api/v2/segments/:projectKey/:environmentKey/:segmentKey/contexts': {
      $post:
        | {
            input: { param: { projectKey: string; environmentKey: string; segmentKey: string } } & {
              json: SegmentUserState
            }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { projectKey: string; environmentKey: string; segmentKey: string } } & {
              json: SegmentUserState
            }
            output: InvalidRequestErrorRep
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { projectKey: string; environmentKey: string; segmentKey: string } } & {
              json: SegmentUserState
            }
            output: UnauthorizedErrorRep
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { projectKey: string; environmentKey: string; segmentKey: string } } & {
              json: SegmentUserState
            }
            output: NotFoundErrorRep
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { projectKey: string; environmentKey: string; segmentKey: string } } & {
              json: SegmentUserState
            }
            output: RateLimitedErrorRep
            outputFormat: 'json'
            status: 429
          }
    }
  } & {
    '/api/v2/segments/:projectKey/:environmentKey/:segmentKey/contexts/:contextKey': {
      $get:
        | {
            input: {
              param: {
                projectKey: string
                environmentKey: string
                segmentKey: string
                contextKey: string
              }
            }
            output: BigSegmentTarget
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              param: {
                projectKey: string
                environmentKey: string
                segmentKey: string
                contextKey: string
              }
            }
            output: InvalidRequestErrorRep
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              param: {
                projectKey: string
                environmentKey: string
                segmentKey: string
                contextKey: string
              }
            }
            output: UnauthorizedErrorRep
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              param: {
                projectKey: string
                environmentKey: string
                segmentKey: string
                contextKey: string
              }
            }
            output: NotFoundErrorRep
            outputFormat: 'json'
            status: 404
          }
        | {
            input: {
              param: {
                projectKey: string
                environmentKey: string
                segmentKey: string
                contextKey: string
              }
            }
            output: RateLimitedErrorRep
            outputFormat: 'json'
            status: 429
          }
    }
  } & {
    '/api/v2/segments/:projectKey/:environmentKey/:segmentKey/exports': {
      $post:
        | {
            input: { param: { projectKey: string; environmentKey: string; segmentKey: string } }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { param: { projectKey: string; environmentKey: string; segmentKey: string } }
            output: InvalidRequestErrorRep
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { projectKey: string; environmentKey: string; segmentKey: string } }
            output: UnauthorizedErrorRep
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { projectKey: string; environmentKey: string; segmentKey: string } }
            output: NotFoundErrorRep
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { projectKey: string; environmentKey: string; segmentKey: string } }
            output: RateLimitedErrorRep
            outputFormat: 'json'
            status: 429
          }
    }
  } & {
    '/api/v2/segments/:projectKey/:environmentKey/:segmentKey/exports/:exportID': {
      $get:
        | {
            input: {
              param: {
                projectKey: string
                environmentKey: string
                segmentKey: string
                exportID: string
              }
            }
            output: Export
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              param: {
                projectKey: string
                environmentKey: string
                segmentKey: string
                exportID: string
              }
            }
            output: InvalidRequestErrorRep
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              param: {
                projectKey: string
                environmentKey: string
                segmentKey: string
                exportID: string
              }
            }
            output: NotFoundErrorRep
            outputFormat: 'json'
            status: 404
          }
        | {
            input: {
              param: {
                projectKey: string
                environmentKey: string
                segmentKey: string
                exportID: string
              }
            }
            output: RateLimitedErrorRep
            outputFormat: 'json'
            status: 429
          }
    }
  } & {
    '/api/v2/segments/:projectKey/:environmentKey/:segmentKey/imports': {
      $post:
        | {
            input: { param: { projectKey: string; environmentKey: string; segmentKey: string } } & {
              form: {
                file?: File | undefined
                mode?: string | undefined
                waitOnApprovals?: boolean | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { projectKey: string; environmentKey: string; segmentKey: string } } & {
              form: {
                file?: File | undefined
                mode?: string | undefined
                waitOnApprovals?: boolean | undefined
              }
            }
            output: InvalidRequestErrorRep
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { projectKey: string; environmentKey: string; segmentKey: string } } & {
              form: {
                file?: File | undefined
                mode?: string | undefined
                waitOnApprovals?: boolean | undefined
              }
            }
            output: UnauthorizedErrorRep
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { projectKey: string; environmentKey: string; segmentKey: string } } & {
              form: {
                file?: File | undefined
                mode?: string | undefined
                waitOnApprovals?: boolean | undefined
              }
            }
            output: NotFoundErrorRep
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { projectKey: string; environmentKey: string; segmentKey: string } } & {
              form: {
                file?: File | undefined
                mode?: string | undefined
                waitOnApprovals?: boolean | undefined
              }
            }
            output: StatusConflictErrorRep
            outputFormat: 'json'
            status: 409
          }
        | {
            input: { param: { projectKey: string; environmentKey: string; segmentKey: string } } & {
              form: {
                file?: File | undefined
                mode?: string | undefined
                waitOnApprovals?: boolean | undefined
              }
            }
            output: RateLimitedErrorRep
            outputFormat: 'json'
            status: 429
          }
    }
  } & {
    '/api/v2/segments/:projectKey/:environmentKey/:segmentKey/imports/:importID': {
      $get:
        | {
            input: {
              param: {
                projectKey: string
                environmentKey: string
                segmentKey: string
                importID: string
              }
            }
            output: Import
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              param: {
                projectKey: string
                environmentKey: string
                segmentKey: string
                importID: string
              }
            }
            output: InvalidRequestErrorRep
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              param: {
                projectKey: string
                environmentKey: string
                segmentKey: string
                importID: string
              }
            }
            output: NotFoundErrorRep
            outputFormat: 'json'
            status: 404
          }
        | {
            input: {
              param: {
                projectKey: string
                environmentKey: string
                segmentKey: string
                importID: string
              }
            }
            output: RateLimitedErrorRep
            outputFormat: 'json'
            status: 429
          }
    }
  } & {
    '/api/v2/segments/:projectKey/:environmentKey/:segmentKey/users': {
      $post:
        | {
            input: { param: { projectKey: string; environmentKey: string; segmentKey: string } } & {
              json: SegmentUserState
            }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { projectKey: string; environmentKey: string; segmentKey: string } } & {
              json: SegmentUserState
            }
            output: InvalidRequestErrorRep
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { projectKey: string; environmentKey: string; segmentKey: string } } & {
              json: SegmentUserState
            }
            output: UnauthorizedErrorRep
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { projectKey: string; environmentKey: string; segmentKey: string } } & {
              json: SegmentUserState
            }
            output: NotFoundErrorRep
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { projectKey: string; environmentKey: string; segmentKey: string } } & {
              json: SegmentUserState
            }
            output: RateLimitedErrorRep
            outputFormat: 'json'
            status: 429
          }
    }
  } & {
    '/api/v2/segments/:projectKey/:environmentKey/:segmentKey/users/:userKey': {
      $get:
        | {
            input: {
              param: {
                projectKey: string
                environmentKey: string
                segmentKey: string
                userKey: string
              }
            }
            output: BigSegmentTarget
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              param: {
                projectKey: string
                environmentKey: string
                segmentKey: string
                userKey: string
              }
            }
            output: InvalidRequestErrorRep
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              param: {
                projectKey: string
                environmentKey: string
                segmentKey: string
                userKey: string
              }
            }
            output: UnauthorizedErrorRep
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              param: {
                projectKey: string
                environmentKey: string
                segmentKey: string
                userKey: string
              }
            }
            output: NotFoundErrorRep
            outputFormat: 'json'
            status: 404
          }
        | {
            input: {
              param: {
                projectKey: string
                environmentKey: string
                segmentKey: string
                userKey: string
              }
            }
            output: RateLimitedErrorRep
            outputFormat: 'json'
            status: 429
          }
    }
  } & {
    '/api/v2/segments/:projectKey/:segmentKey/expiring-targets/:environmentKey': {
      $get:
        | {
            input: { param: { projectKey: string; environmentKey: string; segmentKey: string } }
            output: ExpiringTargetGetResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { projectKey: string; environmentKey: string; segmentKey: string } }
            output: UnauthorizedErrorRep
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { projectKey: string; environmentKey: string; segmentKey: string } }
            output: NotFoundErrorRep
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { projectKey: string; environmentKey: string; segmentKey: string } }
            output: RateLimitedErrorRep
            outputFormat: 'json'
            status: 429
          }
      $patch:
        | {
            input: { param: { projectKey: string; environmentKey: string; segmentKey: string } } & {
              json: PatchSegmentExpiringTargetInputRep
            }
            output: ExpiringTargetPatchResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { projectKey: string; environmentKey: string; segmentKey: string } } & {
              json: PatchSegmentExpiringTargetInputRep
            }
            output: InvalidRequestErrorRep
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { projectKey: string; environmentKey: string; segmentKey: string } } & {
              json: PatchSegmentExpiringTargetInputRep
            }
            output: UnauthorizedErrorRep
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { projectKey: string; environmentKey: string; segmentKey: string } } & {
              json: PatchSegmentExpiringTargetInputRep
            }
            output: ForbiddenErrorRep
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { projectKey: string; environmentKey: string; segmentKey: string } } & {
              json: PatchSegmentExpiringTargetInputRep
            }
            output: NotFoundErrorRep
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { projectKey: string; environmentKey: string; segmentKey: string } } & {
              json: PatchSegmentExpiringTargetInputRep
            }
            output: StatusConflictErrorRep
            outputFormat: 'json'
            status: 409
          }
        | {
            input: { param: { projectKey: string; environmentKey: string; segmentKey: string } } & {
              json: PatchSegmentExpiringTargetInputRep
            }
            output: RateLimitedErrorRep
            outputFormat: 'json'
            status: 429
          }
    }
  } & {
    '/api/v2/segments/:projectKey/:segmentKey/expiring-user-targets/:environmentKey': {
      $get:
        | {
            input: { param: { projectKey: string; environmentKey: string; segmentKey: string } }
            output: ExpiringUserTargetGetResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { projectKey: string; environmentKey: string; segmentKey: string } }
            output: UnauthorizedErrorRep
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { projectKey: string; environmentKey: string; segmentKey: string } }
            output: NotFoundErrorRep
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { projectKey: string; environmentKey: string; segmentKey: string } }
            output: RateLimitedErrorRep
            outputFormat: 'json'
            status: 429
          }
      $patch:
        | {
            input: { param: { projectKey: string; environmentKey: string; segmentKey: string } } & {
              json: PatchSegmentRequest
            }
            output: ExpiringUserTargetPatchResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { projectKey: string; environmentKey: string; segmentKey: string } } & {
              json: PatchSegmentRequest
            }
            output: InvalidRequestErrorRep
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { projectKey: string; environmentKey: string; segmentKey: string } } & {
              json: PatchSegmentRequest
            }
            output: UnauthorizedErrorRep
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { projectKey: string; environmentKey: string; segmentKey: string } } & {
              json: PatchSegmentRequest
            }
            output: ForbiddenErrorRep
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { projectKey: string; environmentKey: string; segmentKey: string } } & {
              json: PatchSegmentRequest
            }
            output: NotFoundErrorRep
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { projectKey: string; environmentKey: string; segmentKey: string } } & {
              json: PatchSegmentRequest
            }
            output: StatusConflictErrorRep
            outputFormat: 'json'
            status: 409
          }
        | {
            input: { param: { projectKey: string; environmentKey: string; segmentKey: string } } & {
              json: PatchSegmentRequest
            }
            output: RateLimitedErrorRep
            outputFormat: 'json'
            status: 429
          }
    }
  } & {
    '/api/v2/teams': {
      $get:
        | {
            input: {
              query: {
                limit?: bigint | undefined
                offset?: bigint | undefined
                filter?: string | undefined
                sort?: string | undefined
                expand?: string | undefined
              }
            }
            output: Teams
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                limit?: bigint | undefined
                offset?: bigint | undefined
                filter?: string | undefined
                sort?: string | undefined
                expand?: string | undefined
              }
            }
            output: UnauthorizedErrorRep
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              query: {
                limit?: bigint | undefined
                offset?: bigint | undefined
                filter?: string | undefined
                sort?: string | undefined
                expand?: string | undefined
              }
            }
            output: MethodNotAllowedErrorRep
            outputFormat: 'json'
            status: 405
          }
        | {
            input: {
              query: {
                limit?: bigint | undefined
                offset?: bigint | undefined
                filter?: string | undefined
                sort?: string | undefined
                expand?: string | undefined
              }
            }
            output: RateLimitedErrorRep
            outputFormat: 'json'
            status: 429
          }
      $post:
        | {
            input: { query: { expand?: string | undefined } } & { json: TeamPostInput }
            output: Team
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { query: { expand?: string | undefined } } & { json: TeamPostInput }
            output: InvalidRequestErrorRep
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { query: { expand?: string | undefined } } & { json: TeamPostInput }
            output: UnauthorizedErrorRep
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { query: { expand?: string | undefined } } & { json: TeamPostInput }
            output: MethodNotAllowedErrorRep
            outputFormat: 'json'
            status: 405
          }
        | {
            input: { query: { expand?: string | undefined } } & { json: TeamPostInput }
            output: RateLimitedErrorRep
            outputFormat: 'json'
            status: 429
          }
      $patch:
        | {
            input: { json: TeamsPatchInput }
            output: BulkEditTeamsRep
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: TeamsPatchInput }
            output: InvalidRequestErrorRep
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { json: TeamsPatchInput }
            output: UnauthorizedErrorRep
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { json: TeamsPatchInput }
            output: ForbiddenErrorRep
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { json: TeamsPatchInput }
            output: StatusConflictErrorRep
            outputFormat: 'json'
            status: 409
          }
        | {
            input: { json: TeamsPatchInput }
            output: RateLimitedErrorRep
            outputFormat: 'json'
            status: 429
          }
    }
  } & {
    '/api/v2/teams/:teamKey': {
      $get:
        | {
            input: { param: { teamKey: string } } & { query: { expand?: string | undefined } }
            output: Team
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { teamKey: string } } & { query: { expand?: string | undefined } }
            output: InvalidRequestErrorRep
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { teamKey: string } } & { query: { expand?: string | undefined } }
            output: UnauthorizedErrorRep
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { teamKey: string } } & { query: { expand?: string | undefined } }
            output: ForbiddenErrorRep
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { teamKey: string } } & { query: { expand?: string | undefined } }
            output: NotFoundErrorRep
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { teamKey: string } } & { query: { expand?: string | undefined } }
            output: MethodNotAllowedErrorRep
            outputFormat: 'json'
            status: 405
          }
        | {
            input: { param: { teamKey: string } } & { query: { expand?: string | undefined } }
            output: RateLimitedErrorRep
            outputFormat: 'json'
            status: 429
          }
      $patch:
        | {
            input: { param: { teamKey: string } } & { query: { expand?: string | undefined } } & {
              json: TeamPatchInput
            }
            output: Team
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { teamKey: string } } & { query: { expand?: string | undefined } } & {
              json: TeamPatchInput
            }
            output: InvalidRequestErrorRep
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { teamKey: string } } & { query: { expand?: string | undefined } } & {
              json: TeamPatchInput
            }
            output: UnauthorizedErrorRep
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { teamKey: string } } & { query: { expand?: string | undefined } } & {
              json: TeamPatchInput
            }
            output: NotFoundErrorRep
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { teamKey: string } } & { query: { expand?: string | undefined } } & {
              json: TeamPatchInput
            }
            output: MethodNotAllowedErrorRep
            outputFormat: 'json'
            status: 405
          }
        | {
            input: { param: { teamKey: string } } & { query: { expand?: string | undefined } } & {
              json: TeamPatchInput
            }
            output: StatusConflictErrorRep
            outputFormat: 'json'
            status: 409
          }
        | {
            input: { param: { teamKey: string } } & { query: { expand?: string | undefined } } & {
              json: TeamPatchInput
            }
            output: RateLimitedErrorRep
            outputFormat: 'json'
            status: 429
          }
      $delete:
        | { input: { param: { teamKey: string } }; output: {}; outputFormat: string; status: 204 }
        | {
            input: { param: { teamKey: string } }
            output: UnauthorizedErrorRep
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { teamKey: string } }
            output: NotFoundErrorRep
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { teamKey: string } }
            output: RateLimitedErrorRep
            outputFormat: 'json'
            status: 429
          }
    }
  } & {
    '/api/v2/teams/:teamKey/maintainers': {
      $get:
        | {
            input: { param: { teamKey: string } } & {
              query: { limit?: bigint | undefined; offset?: bigint | undefined }
            }
            output: TeamMaintainers
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { teamKey: string } } & {
              query: { limit?: bigint | undefined; offset?: bigint | undefined }
            }
            output: InvalidRequestErrorRep
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { teamKey: string } } & {
              query: { limit?: bigint | undefined; offset?: bigint | undefined }
            }
            output: UnauthorizedErrorRep
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { teamKey: string } } & {
              query: { limit?: bigint | undefined; offset?: bigint | undefined }
            }
            output: ForbiddenErrorRep
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { teamKey: string } } & {
              query: { limit?: bigint | undefined; offset?: bigint | undefined }
            }
            output: NotFoundErrorRep
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { teamKey: string } } & {
              query: { limit?: bigint | undefined; offset?: bigint | undefined }
            }
            output: MethodNotAllowedErrorRep
            outputFormat: 'json'
            status: 405
          }
        | {
            input: { param: { teamKey: string } } & {
              query: { limit?: bigint | undefined; offset?: bigint | undefined }
            }
            output: RateLimitedErrorRep
            outputFormat: 'json'
            status: 429
          }
    }
  } & {
    '/api/v2/teams/:teamKey/members': {
      $post:
        | {
            input: { param: { teamKey: string } } & { form: { file?: File | undefined } }
            output: TeamImportsRep
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { param: { teamKey: string } } & { form: { file?: File | undefined } }
            output: TeamImportsRep
            outputFormat: 'json'
            status: 207
          }
        | {
            input: { param: { teamKey: string } } & { form: { file?: File | undefined } }
            output: InvalidRequestErrorRep
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { teamKey: string } } & { form: { file?: File | undefined } }
            output: UnauthorizedErrorRep
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { teamKey: string } } & { form: { file?: File | undefined } }
            output: MethodNotAllowedErrorRep
            outputFormat: 'json'
            status: 405
          }
        | {
            input: { param: { teamKey: string } } & { form: { file?: File | undefined } }
            output: RateLimitedErrorRep
            outputFormat: 'json'
            status: 429
          }
    }
  } & {
    '/api/v2/teams/:teamKey/roles': {
      $get:
        | {
            input: { param: { teamKey: string } } & {
              query: { limit?: bigint | undefined; offset?: bigint | undefined }
            }
            output: TeamCustomRoles
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { teamKey: string } } & {
              query: { limit?: bigint | undefined; offset?: bigint | undefined }
            }
            output: InvalidRequestErrorRep
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { teamKey: string } } & {
              query: { limit?: bigint | undefined; offset?: bigint | undefined }
            }
            output: UnauthorizedErrorRep
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { teamKey: string } } & {
              query: { limit?: bigint | undefined; offset?: bigint | undefined }
            }
            output: ForbiddenErrorRep
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { teamKey: string } } & {
              query: { limit?: bigint | undefined; offset?: bigint | undefined }
            }
            output: NotFoundErrorRep
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { teamKey: string } } & {
              query: { limit?: bigint | undefined; offset?: bigint | undefined }
            }
            output: MethodNotAllowedErrorRep
            outputFormat: 'json'
            status: 405
          }
        | {
            input: { param: { teamKey: string } } & {
              query: { limit?: bigint | undefined; offset?: bigint | undefined }
            }
            output: RateLimitedErrorRep
            outputFormat: 'json'
            status: 429
          }
    }
  } & {
    '/api/v2/templates': {
      $get:
        | {
            input: { query: { summary?: boolean | undefined; search?: string | undefined } }
            output: WorkflowTemplatesListingOutputRep
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { summary?: boolean | undefined; search?: string | undefined } }
            output: UnauthorizedErrorRep
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { query: { summary?: boolean | undefined; search?: string | undefined } }
            output: NotFoundErrorRep
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { query: { summary?: boolean | undefined; search?: string | undefined } }
            output: RateLimitedErrorRep
            outputFormat: 'json'
            status: 429
          }
      $post:
        | {
            input: { json: CreateWorkflowTemplateInput }
            output: WorkflowTemplateOutput
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { json: CreateWorkflowTemplateInput }
            output: InvalidRequestErrorRep
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { json: CreateWorkflowTemplateInput }
            output: UnauthorizedErrorRep
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { json: CreateWorkflowTemplateInput }
            output: ForbiddenErrorRep
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { json: CreateWorkflowTemplateInput }
            output: RateLimitedErrorRep
            outputFormat: 'json'
            status: 429
          }
    }
  } & {
    '/api/v2/templates/:templateKey': {
      $delete:
        | {
            input: { param: { templateKey: string } }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { templateKey: string } }
            output: InvalidRequestErrorRep
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { templateKey: string } }
            output: UnauthorizedErrorRep
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { templateKey: string } }
            output: ForbiddenErrorRep
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { templateKey: string } }
            output: NotFoundErrorRep
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { templateKey: string } }
            output: RateLimitedErrorRep
            outputFormat: 'json'
            status: 429
          }
    }
  } & {
    '/api/v2/tokens': {
      $get:
        | {
            input: {
              query: {
                showAll?: boolean | undefined
                limit?: bigint | undefined
                offset?: bigint | undefined
              }
            }
            output: Tokens
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                showAll?: boolean | undefined
                limit?: bigint | undefined
                offset?: bigint | undefined
              }
            }
            output: UnauthorizedErrorRep
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              query: {
                showAll?: boolean | undefined
                limit?: bigint | undefined
                offset?: bigint | undefined
              }
            }
            output: ForbiddenErrorRep
            outputFormat: 'json'
            status: 403
          }
        | {
            input: {
              query: {
                showAll?: boolean | undefined
                limit?: bigint | undefined
                offset?: bigint | undefined
              }
            }
            output: RateLimitedErrorRep
            outputFormat: 'json'
            status: 429
          }
      $post:
        | { input: { json: AccessTokenPost }; output: Token; outputFormat: 'json'; status: 201 }
        | {
            input: { json: AccessTokenPost }
            output: InvalidRequestErrorRep
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { json: AccessTokenPost }
            output: UnauthorizedErrorRep
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { json: AccessTokenPost }
            output: ForbiddenErrorRep
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { json: AccessTokenPost }
            output: RateLimitedErrorRep
            outputFormat: 'json'
            status: 429
          }
    }
  } & {
    '/api/v2/tokens/:id': {
      $get:
        | { input: { param: { id: string } }; output: Token; outputFormat: 'json'; status: 200 }
        | {
            input: { param: { id: string } }
            output: UnauthorizedErrorRep
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: string } }
            output: ForbiddenErrorRep
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: string } }
            output: NotFoundErrorRep
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { id: string } }
            output: RateLimitedErrorRep
            outputFormat: 'json'
            status: 429
          }
      $patch:
        | {
            input: { param: { id: string } } & { json: JSONPatch }
            output: Token
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & { json: JSONPatch }
            output: InvalidRequestErrorRep
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { id: string } } & { json: JSONPatch }
            output: UnauthorizedErrorRep
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: string } } & { json: JSONPatch }
            output: ForbiddenErrorRep
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: string } } & { json: JSONPatch }
            output: NotFoundErrorRep
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { id: string } } & { json: JSONPatch }
            output: StatusConflictErrorRep
            outputFormat: 'json'
            status: 409
          }
        | {
            input: { param: { id: string } } & { json: JSONPatch }
            output: PatchFailedErrorRep
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { id: string } } & { json: JSONPatch }
            output: RateLimitedErrorRep
            outputFormat: 'json'
            status: 429
          }
      $delete:
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 204 }
        | {
            input: { param: { id: string } }
            output: UnauthorizedErrorRep
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: string } }
            output: ForbiddenErrorRep
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: string } }
            output: NotFoundErrorRep
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { id: string } }
            output: RateLimitedErrorRep
            outputFormat: 'json'
            status: 429
          }
    }
  } & {
    '/api/v2/tokens/:id/reset': {
      $post:
        | {
            input: { param: { id: string } } & { query: { expiry?: bigint | undefined } }
            output: Token
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & { query: { expiry?: bigint | undefined } }
            output: UnauthorizedErrorRep
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: string } } & { query: { expiry?: bigint | undefined } }
            output: ForbiddenErrorRep
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: string } } & { query: { expiry?: bigint | undefined } }
            output: NotFoundErrorRep
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { id: string } } & { query: { expiry?: bigint | undefined } }
            output: RateLimitedErrorRep
            outputFormat: 'json'
            status: 429
          }
    }
  } & {
    '/api/v2/usage/ai-runs': {
      $get:
        | {
            input: {
              query: {
                from?: string | undefined
                to?: string | undefined
                projectKey?: string | undefined
                environmentKey?: string | undefined
                sdkName?: string | undefined
                sdkVersion?: string | undefined
                sdkType?: string | undefined
                groupBy?: string | undefined
                aggregationType?: string | undefined
                granularity?: string | undefined
              }
            }
            output: SeriesListRep
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                from?: string | undefined
                to?: string | undefined
                projectKey?: string | undefined
                environmentKey?: string | undefined
                sdkName?: string | undefined
                sdkVersion?: string | undefined
                sdkType?: string | undefined
                groupBy?: string | undefined
                aggregationType?: string | undefined
                granularity?: string | undefined
              }
            }
            output: InvalidRequestErrorRep
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                from?: string | undefined
                to?: string | undefined
                projectKey?: string | undefined
                environmentKey?: string | undefined
                sdkName?: string | undefined
                sdkVersion?: string | undefined
                sdkType?: string | undefined
                groupBy?: string | undefined
                aggregationType?: string | undefined
                granularity?: string | undefined
              }
            }
            output: UnauthorizedErrorRep
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              query: {
                from?: string | undefined
                to?: string | undefined
                projectKey?: string | undefined
                environmentKey?: string | undefined
                sdkName?: string | undefined
                sdkVersion?: string | undefined
                sdkType?: string | undefined
                groupBy?: string | undefined
                aggregationType?: string | undefined
                granularity?: string | undefined
              }
            }
            output: ForbiddenErrorRep
            outputFormat: 'json'
            status: 403
          }
        | {
            input: {
              query: {
                from?: string | undefined
                to?: string | undefined
                projectKey?: string | undefined
                environmentKey?: string | undefined
                sdkName?: string | undefined
                sdkVersion?: string | undefined
                sdkType?: string | undefined
                groupBy?: string | undefined
                aggregationType?: string | undefined
                granularity?: string | undefined
              }
            }
            output: RateLimitedErrorRep
            outputFormat: 'json'
            status: 429
          }
        | {
            input: {
              query: {
                from?: string | undefined
                to?: string | undefined
                projectKey?: string | undefined
                environmentKey?: string | undefined
                sdkName?: string | undefined
                sdkVersion?: string | undefined
                sdkType?: string | undefined
                groupBy?: string | undefined
                aggregationType?: string | undefined
                granularity?: string | undefined
              }
            }
            output: StatusServiceUnavailable
            outputFormat: 'json'
            status: 503
          }
    }
  } & {
    '/api/v2/usage/clientside-contexts': {
      $get:
        | {
            input: {
              query: {
                from?: string | undefined
                to?: string | undefined
                projectKey?: string | undefined
                environmentKey?: string | undefined
                contextKind?: string | undefined
                sdkName?: string | undefined
                anonymous?: string | undefined
                groupBy?: string | undefined
                aggregationType?: string | undefined
                granularity?: string | undefined
              }
            }
            output: SeriesListRep
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                from?: string | undefined
                to?: string | undefined
                projectKey?: string | undefined
                environmentKey?: string | undefined
                contextKind?: string | undefined
                sdkName?: string | undefined
                anonymous?: string | undefined
                groupBy?: string | undefined
                aggregationType?: string | undefined
                granularity?: string | undefined
              }
            }
            output: InvalidRequestErrorRep
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                from?: string | undefined
                to?: string | undefined
                projectKey?: string | undefined
                environmentKey?: string | undefined
                contextKind?: string | undefined
                sdkName?: string | undefined
                anonymous?: string | undefined
                groupBy?: string | undefined
                aggregationType?: string | undefined
                granularity?: string | undefined
              }
            }
            output: UnauthorizedErrorRep
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              query: {
                from?: string | undefined
                to?: string | undefined
                projectKey?: string | undefined
                environmentKey?: string | undefined
                contextKind?: string | undefined
                sdkName?: string | undefined
                anonymous?: string | undefined
                groupBy?: string | undefined
                aggregationType?: string | undefined
                granularity?: string | undefined
              }
            }
            output: ForbiddenErrorRep
            outputFormat: 'json'
            status: 403
          }
        | {
            input: {
              query: {
                from?: string | undefined
                to?: string | undefined
                projectKey?: string | undefined
                environmentKey?: string | undefined
                contextKind?: string | undefined
                sdkName?: string | undefined
                anonymous?: string | undefined
                groupBy?: string | undefined
                aggregationType?: string | undefined
                granularity?: string | undefined
              }
            }
            output: RateLimitedErrorRep
            outputFormat: 'json'
            status: 429
          }
        | {
            input: {
              query: {
                from?: string | undefined
                to?: string | undefined
                projectKey?: string | undefined
                environmentKey?: string | undefined
                contextKind?: string | undefined
                sdkName?: string | undefined
                anonymous?: string | undefined
                groupBy?: string | undefined
                aggregationType?: string | undefined
                granularity?: string | undefined
              }
            }
            output: StatusServiceUnavailable
            outputFormat: 'json'
            status: 503
          }
    }
  } & {
    '/api/v2/usage/clientside-mau': {
      $get:
        | {
            input: {
              query: {
                from?: string | undefined
                to?: string | undefined
                projectKey?: string | undefined
                environmentKey?: string | undefined
                sdkName?: string | undefined
                anonymous?: string | undefined
                groupBy?: string | undefined
                aggregationType?: string | undefined
                granularity?: string | undefined
              }
            }
            output: SeriesListRep
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                from?: string | undefined
                to?: string | undefined
                projectKey?: string | undefined
                environmentKey?: string | undefined
                sdkName?: string | undefined
                anonymous?: string | undefined
                groupBy?: string | undefined
                aggregationType?: string | undefined
                granularity?: string | undefined
              }
            }
            output: InvalidRequestErrorRep
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                from?: string | undefined
                to?: string | undefined
                projectKey?: string | undefined
                environmentKey?: string | undefined
                sdkName?: string | undefined
                anonymous?: string | undefined
                groupBy?: string | undefined
                aggregationType?: string | undefined
                granularity?: string | undefined
              }
            }
            output: UnauthorizedErrorRep
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              query: {
                from?: string | undefined
                to?: string | undefined
                projectKey?: string | undefined
                environmentKey?: string | undefined
                sdkName?: string | undefined
                anonymous?: string | undefined
                groupBy?: string | undefined
                aggregationType?: string | undefined
                granularity?: string | undefined
              }
            }
            output: ForbiddenErrorRep
            outputFormat: 'json'
            status: 403
          }
        | {
            input: {
              query: {
                from?: string | undefined
                to?: string | undefined
                projectKey?: string | undefined
                environmentKey?: string | undefined
                sdkName?: string | undefined
                anonymous?: string | undefined
                groupBy?: string | undefined
                aggregationType?: string | undefined
                granularity?: string | undefined
              }
            }
            output: RateLimitedErrorRep
            outputFormat: 'json'
            status: 429
          }
        | {
            input: {
              query: {
                from?: string | undefined
                to?: string | undefined
                projectKey?: string | undefined
                environmentKey?: string | undefined
                sdkName?: string | undefined
                anonymous?: string | undefined
                groupBy?: string | undefined
                aggregationType?: string | undefined
                granularity?: string | undefined
              }
            }
            output: StatusServiceUnavailable
            outputFormat: 'json'
            status: 503
          }
    }
  } & {
    '/api/v2/usage/data-export-events': {
      $get:
        | {
            input: {
              query: {
                from?: string | undefined
                to?: string | undefined
                projectKey?: string | undefined
                environmentKey?: string | undefined
                eventKind?: string | undefined
                destinationKind?: string | undefined
                groupBy?: string | undefined
                aggregationType?: string | undefined
                granularity?: string | undefined
              }
            }
            output: DataExportSeriesListRep
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                from?: string | undefined
                to?: string | undefined
                projectKey?: string | undefined
                environmentKey?: string | undefined
                eventKind?: string | undefined
                destinationKind?: string | undefined
                groupBy?: string | undefined
                aggregationType?: string | undefined
                granularity?: string | undefined
              }
            }
            output: InvalidRequestErrorRep
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                from?: string | undefined
                to?: string | undefined
                projectKey?: string | undefined
                environmentKey?: string | undefined
                eventKind?: string | undefined
                destinationKind?: string | undefined
                groupBy?: string | undefined
                aggregationType?: string | undefined
                granularity?: string | undefined
              }
            }
            output: UnauthorizedErrorRep
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              query: {
                from?: string | undefined
                to?: string | undefined
                projectKey?: string | undefined
                environmentKey?: string | undefined
                eventKind?: string | undefined
                destinationKind?: string | undefined
                groupBy?: string | undefined
                aggregationType?: string | undefined
                granularity?: string | undefined
              }
            }
            output: ForbiddenErrorRep
            outputFormat: 'json'
            status: 403
          }
        | {
            input: {
              query: {
                from?: string | undefined
                to?: string | undefined
                projectKey?: string | undefined
                environmentKey?: string | undefined
                eventKind?: string | undefined
                destinationKind?: string | undefined
                groupBy?: string | undefined
                aggregationType?: string | undefined
                granularity?: string | undefined
              }
            }
            output: DataExportProjectIdentityIncompleteErrorRep
            outputFormat: 'json'
            status: 409
          }
        | {
            input: {
              query: {
                from?: string | undefined
                to?: string | undefined
                projectKey?: string | undefined
                environmentKey?: string | undefined
                eventKind?: string | undefined
                destinationKind?: string | undefined
                groupBy?: string | undefined
                aggregationType?: string | undefined
                granularity?: string | undefined
              }
            }
            output: RateLimitedErrorRep
            outputFormat: 'json'
            status: 429
          }
        | {
            input: {
              query: {
                from?: string | undefined
                to?: string | undefined
                projectKey?: string | undefined
                environmentKey?: string | undefined
                eventKind?: string | undefined
                destinationKind?: string | undefined
                groupBy?: string | undefined
                aggregationType?: string | undefined
                granularity?: string | undefined
              }
            }
            output: StatusServiceUnavailable
            outputFormat: 'json'
            status: 503
          }
    }
  } & {
    '/api/v2/usage/evaluations/:projectKey/:environmentKey/:featureFlagKey': {
      $get:
        | {
            input: {
              param: { projectKey: string; environmentKey: string; featureFlagKey: string }
            } & {
              query: { from?: string | undefined; to?: string | undefined; tz?: string | undefined }
            }
            output: SeriesListRep
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              param: { projectKey: string; environmentKey: string; featureFlagKey: string }
            } & {
              query: { from?: string | undefined; to?: string | undefined; tz?: string | undefined }
            }
            output: InvalidRequestErrorRep
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              param: { projectKey: string; environmentKey: string; featureFlagKey: string }
            } & {
              query: { from?: string | undefined; to?: string | undefined; tz?: string | undefined }
            }
            output: UnauthorizedErrorRep
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              param: { projectKey: string; environmentKey: string; featureFlagKey: string }
            } & {
              query: { from?: string | undefined; to?: string | undefined; tz?: string | undefined }
            }
            output: ForbiddenErrorRep
            outputFormat: 'json'
            status: 403
          }
        | {
            input: {
              param: { projectKey: string; environmentKey: string; featureFlagKey: string }
            } & {
              query: { from?: string | undefined; to?: string | undefined; tz?: string | undefined }
            }
            output: NotFoundErrorRep
            outputFormat: 'json'
            status: 404
          }
        | {
            input: {
              param: { projectKey: string; environmentKey: string; featureFlagKey: string }
            } & {
              query: { from?: string | undefined; to?: string | undefined; tz?: string | undefined }
            }
            output: RateLimitedErrorRep
            outputFormat: 'json'
            status: 429
          }
    }
  } & {
    '/api/v2/usage/events/:type': {
      $get:
        | {
            input: { param: { type: string } } & {
              query: { from?: string | undefined; to?: string | undefined }
            }
            output: SeriesListRep
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { type: string } } & {
              query: { from?: string | undefined; to?: string | undefined }
            }
            output: InvalidRequestErrorRep
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { type: string } } & {
              query: { from?: string | undefined; to?: string | undefined }
            }
            output: UnauthorizedErrorRep
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { type: string } } & {
              query: { from?: string | undefined; to?: string | undefined }
            }
            output: ForbiddenErrorRep
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { type: string } } & {
              query: { from?: string | undefined; to?: string | undefined }
            }
            output: NotFoundErrorRep
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { type: string } } & {
              query: { from?: string | undefined; to?: string | undefined }
            }
            output: RateLimitedErrorRep
            outputFormat: 'json'
            status: 429
          }
    }
  } & {
    '/api/v2/usage/experimentation-events': {
      $get:
        | {
            input: {
              query: {
                from?: string | undefined
                to?: string | undefined
                projectKey?: string | undefined
                environmentKey?: string | undefined
                eventKey?: string | undefined
                eventKind?: string | undefined
                groupBy?: string | undefined
                aggregationType?: string | undefined
                granularity?: string | undefined
              }
            }
            output: SeriesListRep
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                from?: string | undefined
                to?: string | undefined
                projectKey?: string | undefined
                environmentKey?: string | undefined
                eventKey?: string | undefined
                eventKind?: string | undefined
                groupBy?: string | undefined
                aggregationType?: string | undefined
                granularity?: string | undefined
              }
            }
            output: InvalidRequestErrorRep
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                from?: string | undefined
                to?: string | undefined
                projectKey?: string | undefined
                environmentKey?: string | undefined
                eventKey?: string | undefined
                eventKind?: string | undefined
                groupBy?: string | undefined
                aggregationType?: string | undefined
                granularity?: string | undefined
              }
            }
            output: UnauthorizedErrorRep
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              query: {
                from?: string | undefined
                to?: string | undefined
                projectKey?: string | undefined
                environmentKey?: string | undefined
                eventKey?: string | undefined
                eventKind?: string | undefined
                groupBy?: string | undefined
                aggregationType?: string | undefined
                granularity?: string | undefined
              }
            }
            output: ForbiddenErrorRep
            outputFormat: 'json'
            status: 403
          }
        | {
            input: {
              query: {
                from?: string | undefined
                to?: string | undefined
                projectKey?: string | undefined
                environmentKey?: string | undefined
                eventKey?: string | undefined
                eventKind?: string | undefined
                groupBy?: string | undefined
                aggregationType?: string | undefined
                granularity?: string | undefined
              }
            }
            output: RateLimitedErrorRep
            outputFormat: 'json'
            status: 429
          }
        | {
            input: {
              query: {
                from?: string | undefined
                to?: string | undefined
                projectKey?: string | undefined
                environmentKey?: string | undefined
                eventKey?: string | undefined
                eventKind?: string | undefined
                groupBy?: string | undefined
                aggregationType?: string | undefined
                granularity?: string | undefined
              }
            }
            output: StatusServiceUnavailable
            outputFormat: 'json'
            status: 503
          }
    }
  } & {
    '/api/v2/usage/experimentation-keys': {
      $get:
        | {
            input: {
              query: {
                from?: string | undefined
                to?: string | undefined
                projectKey?: string | undefined
                environmentKey?: string | undefined
                experimentId?: string | undefined
                groupBy?: string | undefined
                aggregationType?: string | undefined
                granularity?: string | undefined
              }
            }
            output: SeriesListRep
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                from?: string | undefined
                to?: string | undefined
                projectKey?: string | undefined
                environmentKey?: string | undefined
                experimentId?: string | undefined
                groupBy?: string | undefined
                aggregationType?: string | undefined
                granularity?: string | undefined
              }
            }
            output: InvalidRequestErrorRep
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                from?: string | undefined
                to?: string | undefined
                projectKey?: string | undefined
                environmentKey?: string | undefined
                experimentId?: string | undefined
                groupBy?: string | undefined
                aggregationType?: string | undefined
                granularity?: string | undefined
              }
            }
            output: UnauthorizedErrorRep
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              query: {
                from?: string | undefined
                to?: string | undefined
                projectKey?: string | undefined
                environmentKey?: string | undefined
                experimentId?: string | undefined
                groupBy?: string | undefined
                aggregationType?: string | undefined
                granularity?: string | undefined
              }
            }
            output: ForbiddenErrorRep
            outputFormat: 'json'
            status: 403
          }
        | {
            input: {
              query: {
                from?: string | undefined
                to?: string | undefined
                projectKey?: string | undefined
                environmentKey?: string | undefined
                experimentId?: string | undefined
                groupBy?: string | undefined
                aggregationType?: string | undefined
                granularity?: string | undefined
              }
            }
            output: RateLimitedErrorRep
            outputFormat: 'json'
            status: 429
          }
        | {
            input: {
              query: {
                from?: string | undefined
                to?: string | undefined
                projectKey?: string | undefined
                environmentKey?: string | undefined
                experimentId?: string | undefined
                groupBy?: string | undefined
                aggregationType?: string | undefined
                granularity?: string | undefined
              }
            }
            output: StatusServiceUnavailable
            outputFormat: 'json'
            status: 503
          }
    }
  } & {
    '/api/v2/usage/mau': {
      $get:
        | {
            input: {
              query: {
                from?: string | undefined
                to?: string | undefined
                project?: string | undefined
                environment?: string | undefined
                sdktype?: string | undefined
                sdk?: string | undefined
                anonymous?: string | undefined
                groupby?: string | undefined
                aggregationType?: string | undefined
                contextKind?: string | undefined
              }
            }
            output: SeriesListRep
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                from?: string | undefined
                to?: string | undefined
                project?: string | undefined
                environment?: string | undefined
                sdktype?: string | undefined
                sdk?: string | undefined
                anonymous?: string | undefined
                groupby?: string | undefined
                aggregationType?: string | undefined
                contextKind?: string | undefined
              }
            }
            output: InvalidRequestErrorRep
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                from?: string | undefined
                to?: string | undefined
                project?: string | undefined
                environment?: string | undefined
                sdktype?: string | undefined
                sdk?: string | undefined
                anonymous?: string | undefined
                groupby?: string | undefined
                aggregationType?: string | undefined
                contextKind?: string | undefined
              }
            }
            output: UnauthorizedErrorRep
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              query: {
                from?: string | undefined
                to?: string | undefined
                project?: string | undefined
                environment?: string | undefined
                sdktype?: string | undefined
                sdk?: string | undefined
                anonymous?: string | undefined
                groupby?: string | undefined
                aggregationType?: string | undefined
                contextKind?: string | undefined
              }
            }
            output: ForbiddenErrorRep
            outputFormat: 'json'
            status: 403
          }
        | {
            input: {
              query: {
                from?: string | undefined
                to?: string | undefined
                project?: string | undefined
                environment?: string | undefined
                sdktype?: string | undefined
                sdk?: string | undefined
                anonymous?: string | undefined
                groupby?: string | undefined
                aggregationType?: string | undefined
                contextKind?: string | undefined
              }
            }
            output: RateLimitedErrorRep
            outputFormat: 'json'
            status: 429
          }
    }
  } & {
    '/api/v2/usage/mau/bycategory': {
      $get:
        | {
            input: { query: { from?: string | undefined; to?: string | undefined } }
            output: SeriesListRep
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { from?: string | undefined; to?: string | undefined } }
            output: InvalidRequestErrorRep
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { query: { from?: string | undefined; to?: string | undefined } }
            output: UnauthorizedErrorRep
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { query: { from?: string | undefined; to?: string | undefined } }
            output: ForbiddenErrorRep
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { query: { from?: string | undefined; to?: string | undefined } }
            output: NotFoundErrorRep
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { query: { from?: string | undefined; to?: string | undefined } }
            output: RateLimitedErrorRep
            outputFormat: 'json'
            status: 429
          }
    }
  } & {
    '/api/v2/usage/mau/sdks': {
      $get:
        | {
            input: {
              query: {
                from?: string | undefined
                to?: string | undefined
                sdktype?: string | undefined
              }
            }
            output: SdkListRep
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                from?: string | undefined
                to?: string | undefined
                sdktype?: string | undefined
              }
            }
            output: InvalidRequestErrorRep
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                from?: string | undefined
                to?: string | undefined
                sdktype?: string | undefined
              }
            }
            output: UnauthorizedErrorRep
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              query: {
                from?: string | undefined
                to?: string | undefined
                sdktype?: string | undefined
              }
            }
            output: ForbiddenErrorRep
            outputFormat: 'json'
            status: 403
          }
        | {
            input: {
              query: {
                from?: string | undefined
                to?: string | undefined
                sdktype?: string | undefined
              }
            }
            output: RateLimitedErrorRep
            outputFormat: 'json'
            status: 429
          }
    }
  } & {
    '/api/v2/usage/observability/errors': {
      $get:
        | {
            input: {
              query: {
                from?: string | undefined
                to?: string | undefined
                projectKey?: string | undefined
                granularity?: string | undefined
                aggregationType?: string | undefined
              }
            }
            output: SeriesListRep
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                from?: string | undefined
                to?: string | undefined
                projectKey?: string | undefined
                granularity?: string | undefined
                aggregationType?: string | undefined
              }
            }
            output: InvalidRequestErrorRep
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                from?: string | undefined
                to?: string | undefined
                projectKey?: string | undefined
                granularity?: string | undefined
                aggregationType?: string | undefined
              }
            }
            output: UnauthorizedErrorRep
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              query: {
                from?: string | undefined
                to?: string | undefined
                projectKey?: string | undefined
                granularity?: string | undefined
                aggregationType?: string | undefined
              }
            }
            output: ForbiddenErrorRep
            outputFormat: 'json'
            status: 403
          }
        | {
            input: {
              query: {
                from?: string | undefined
                to?: string | undefined
                projectKey?: string | undefined
                granularity?: string | undefined
                aggregationType?: string | undefined
              }
            }
            output: NotFoundErrorRep
            outputFormat: 'json'
            status: 404
          }
        | {
            input: {
              query: {
                from?: string | undefined
                to?: string | undefined
                projectKey?: string | undefined
                granularity?: string | undefined
                aggregationType?: string | undefined
              }
            }
            output: RateLimitedErrorRep
            outputFormat: 'json'
            status: 429
          }
    }
  } & {
    '/api/v2/usage/observability/logs': {
      $get:
        | {
            input: {
              query: {
                from?: string | undefined
                to?: string | undefined
                projectKey?: string | undefined
                granularity?: string | undefined
                aggregationType?: string | undefined
              }
            }
            output: SeriesListRep
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                from?: string | undefined
                to?: string | undefined
                projectKey?: string | undefined
                granularity?: string | undefined
                aggregationType?: string | undefined
              }
            }
            output: InvalidRequestErrorRep
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                from?: string | undefined
                to?: string | undefined
                projectKey?: string | undefined
                granularity?: string | undefined
                aggregationType?: string | undefined
              }
            }
            output: UnauthorizedErrorRep
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              query: {
                from?: string | undefined
                to?: string | undefined
                projectKey?: string | undefined
                granularity?: string | undefined
                aggregationType?: string | undefined
              }
            }
            output: ForbiddenErrorRep
            outputFormat: 'json'
            status: 403
          }
        | {
            input: {
              query: {
                from?: string | undefined
                to?: string | undefined
                projectKey?: string | undefined
                granularity?: string | undefined
                aggregationType?: string | undefined
              }
            }
            output: NotFoundErrorRep
            outputFormat: 'json'
            status: 404
          }
        | {
            input: {
              query: {
                from?: string | undefined
                to?: string | undefined
                projectKey?: string | undefined
                granularity?: string | undefined
                aggregationType?: string | undefined
              }
            }
            output: RateLimitedErrorRep
            outputFormat: 'json'
            status: 429
          }
    }
  } & {
    '/api/v2/usage/observability/metrics': {
      $get:
        | {
            input: {
              query: {
                from?: string | undefined
                to?: string | undefined
                projectKey?: string | undefined
                granularity?: string | undefined
                aggregationType?: string | undefined
              }
            }
            output: SeriesListRep
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                from?: string | undefined
                to?: string | undefined
                projectKey?: string | undefined
                granularity?: string | undefined
                aggregationType?: string | undefined
              }
            }
            output: InvalidRequestErrorRep
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                from?: string | undefined
                to?: string | undefined
                projectKey?: string | undefined
                granularity?: string | undefined
                aggregationType?: string | undefined
              }
            }
            output: UnauthorizedErrorRep
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              query: {
                from?: string | undefined
                to?: string | undefined
                projectKey?: string | undefined
                granularity?: string | undefined
                aggregationType?: string | undefined
              }
            }
            output: ForbiddenErrorRep
            outputFormat: 'json'
            status: 403
          }
        | {
            input: {
              query: {
                from?: string | undefined
                to?: string | undefined
                projectKey?: string | undefined
                granularity?: string | undefined
                aggregationType?: string | undefined
              }
            }
            output: NotFoundErrorRep
            outputFormat: 'json'
            status: 404
          }
        | {
            input: {
              query: {
                from?: string | undefined
                to?: string | undefined
                projectKey?: string | undefined
                granularity?: string | undefined
                aggregationType?: string | undefined
              }
            }
            output: RateLimitedErrorRep
            outputFormat: 'json'
            status: 429
          }
    }
  } & {
    '/api/v2/usage/observability/sessions': {
      $get:
        | {
            input: {
              query: {
                from?: string | undefined
                to?: string | undefined
                projectKey?: string | undefined
                granularity?: string | undefined
                aggregationType?: string | undefined
              }
            }
            output: SeriesListRep
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                from?: string | undefined
                to?: string | undefined
                projectKey?: string | undefined
                granularity?: string | undefined
                aggregationType?: string | undefined
              }
            }
            output: InvalidRequestErrorRep
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                from?: string | undefined
                to?: string | undefined
                projectKey?: string | undefined
                granularity?: string | undefined
                aggregationType?: string | undefined
              }
            }
            output: UnauthorizedErrorRep
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              query: {
                from?: string | undefined
                to?: string | undefined
                projectKey?: string | undefined
                granularity?: string | undefined
                aggregationType?: string | undefined
              }
            }
            output: ForbiddenErrorRep
            outputFormat: 'json'
            status: 403
          }
        | {
            input: {
              query: {
                from?: string | undefined
                to?: string | undefined
                projectKey?: string | undefined
                granularity?: string | undefined
                aggregationType?: string | undefined
              }
            }
            output: NotFoundErrorRep
            outputFormat: 'json'
            status: 404
          }
        | {
            input: {
              query: {
                from?: string | undefined
                to?: string | undefined
                projectKey?: string | undefined
                granularity?: string | undefined
                aggregationType?: string | undefined
              }
            }
            output: RateLimitedErrorRep
            outputFormat: 'json'
            status: 429
          }
    }
  } & {
    '/api/v2/usage/observability/traces': {
      $get:
        | {
            input: {
              query: {
                from?: string | undefined
                to?: string | undefined
                projectKey?: string | undefined
                granularity?: string | undefined
                aggregationType?: string | undefined
              }
            }
            output: SeriesListRep
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                from?: string | undefined
                to?: string | undefined
                projectKey?: string | undefined
                granularity?: string | undefined
                aggregationType?: string | undefined
              }
            }
            output: InvalidRequestErrorRep
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                from?: string | undefined
                to?: string | undefined
                projectKey?: string | undefined
                granularity?: string | undefined
                aggregationType?: string | undefined
              }
            }
            output: UnauthorizedErrorRep
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              query: {
                from?: string | undefined
                to?: string | undefined
                projectKey?: string | undefined
                granularity?: string | undefined
                aggregationType?: string | undefined
              }
            }
            output: ForbiddenErrorRep
            outputFormat: 'json'
            status: 403
          }
        | {
            input: {
              query: {
                from?: string | undefined
                to?: string | undefined
                projectKey?: string | undefined
                granularity?: string | undefined
                aggregationType?: string | undefined
              }
            }
            output: NotFoundErrorRep
            outputFormat: 'json'
            status: 404
          }
        | {
            input: {
              query: {
                from?: string | undefined
                to?: string | undefined
                projectKey?: string | undefined
                granularity?: string | undefined
                aggregationType?: string | undefined
              }
            }
            output: RateLimitedErrorRep
            outputFormat: 'json'
            status: 429
          }
    }
  } & {
    '/api/v2/usage/sdk-versions/all': {
      $get:
        | {
            input: {
              query: {
                environmentId?: string | undefined
                projectId?: string | undefined
                sdkName?: string | undefined
                sdkType?: string | undefined
                sdkAppId?: string | undefined
                connectionType?: string | undefined
              }
            }
            output: SdkVersionDetailsRep[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                environmentId?: string | undefined
                projectId?: string | undefined
                sdkName?: string | undefined
                sdkType?: string | undefined
                sdkAppId?: string | undefined
                connectionType?: string | undefined
              }
            }
            output: InvalidRequestErrorRep
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                environmentId?: string | undefined
                projectId?: string | undefined
                sdkName?: string | undefined
                sdkType?: string | undefined
                sdkAppId?: string | undefined
                connectionType?: string | undefined
              }
            }
            output: UnauthorizedErrorRep
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              query: {
                environmentId?: string | undefined
                projectId?: string | undefined
                sdkName?: string | undefined
                sdkType?: string | undefined
                sdkAppId?: string | undefined
                connectionType?: string | undefined
              }
            }
            output: ForbiddenErrorRep
            outputFormat: 'json'
            status: 403
          }
        | {
            input: {
              query: {
                environmentId?: string | undefined
                projectId?: string | undefined
                sdkName?: string | undefined
                sdkType?: string | undefined
                sdkAppId?: string | undefined
                connectionType?: string | undefined
              }
            }
            output: RateLimitedErrorRep
            outputFormat: 'json'
            status: 429
          }
        | {
            input: {
              query: {
                environmentId?: string | undefined
                projectId?: string | undefined
                sdkName?: string | undefined
                sdkType?: string | undefined
                sdkAppId?: string | undefined
                connectionType?: string | undefined
              }
            }
            output: StatusServiceUnavailable
            outputFormat: 'json'
            status: 503
          }
    }
  } & {
    '/api/v2/usage/sdk-versions/details': {
      $get:
        | { input: {}; output: SdkVersionDetailsRep[]; outputFormat: 'json'; status: 200 }
        | { input: {}; output: InvalidRequestErrorRep; outputFormat: 'json'; status: 400 }
        | { input: {}; output: UnauthorizedErrorRep; outputFormat: 'json'; status: 401 }
        | { input: {}; output: ForbiddenErrorRep; outputFormat: 'json'; status: 403 }
        | { input: {}; output: RateLimitedErrorRep; outputFormat: 'json'; status: 429 }
        | { input: {}; output: StatusServiceUnavailable; outputFormat: 'json'; status: 503 }
    }
  } & {
    '/api/v2/usage/serverside-contexts': {
      $get:
        | {
            input: {
              query: {
                from?: string | undefined
                to?: string | undefined
                projectKey?: string | undefined
                environmentKey?: string | undefined
                contextKind?: string | undefined
                sdkName?: string | undefined
                anonymous?: string | undefined
                groupBy?: string | undefined
                aggregationType?: string | undefined
                granularity?: string | undefined
              }
            }
            output: SeriesListRep
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                from?: string | undefined
                to?: string | undefined
                projectKey?: string | undefined
                environmentKey?: string | undefined
                contextKind?: string | undefined
                sdkName?: string | undefined
                anonymous?: string | undefined
                groupBy?: string | undefined
                aggregationType?: string | undefined
                granularity?: string | undefined
              }
            }
            output: InvalidRequestErrorRep
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                from?: string | undefined
                to?: string | undefined
                projectKey?: string | undefined
                environmentKey?: string | undefined
                contextKind?: string | undefined
                sdkName?: string | undefined
                anonymous?: string | undefined
                groupBy?: string | undefined
                aggregationType?: string | undefined
                granularity?: string | undefined
              }
            }
            output: UnauthorizedErrorRep
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              query: {
                from?: string | undefined
                to?: string | undefined
                projectKey?: string | undefined
                environmentKey?: string | undefined
                contextKind?: string | undefined
                sdkName?: string | undefined
                anonymous?: string | undefined
                groupBy?: string | undefined
                aggregationType?: string | undefined
                granularity?: string | undefined
              }
            }
            output: ForbiddenErrorRep
            outputFormat: 'json'
            status: 403
          }
        | {
            input: {
              query: {
                from?: string | undefined
                to?: string | undefined
                projectKey?: string | undefined
                environmentKey?: string | undefined
                contextKind?: string | undefined
                sdkName?: string | undefined
                anonymous?: string | undefined
                groupBy?: string | undefined
                aggregationType?: string | undefined
                granularity?: string | undefined
              }
            }
            output: RateLimitedErrorRep
            outputFormat: 'json'
            status: 429
          }
        | {
            input: {
              query: {
                from?: string | undefined
                to?: string | undefined
                projectKey?: string | undefined
                environmentKey?: string | undefined
                contextKind?: string | undefined
                sdkName?: string | undefined
                anonymous?: string | undefined
                groupBy?: string | undefined
                aggregationType?: string | undefined
                granularity?: string | undefined
              }
            }
            output: StatusServiceUnavailable
            outputFormat: 'json'
            status: 503
          }
    }
  } & {
    '/api/v2/usage/service-connections': {
      $get:
        | {
            input: {
              query: {
                from?: string | undefined
                to?: string | undefined
                projectKey?: string | undefined
                environmentKey?: string | undefined
                connectionType?: string | undefined
                relayVersion?: string | undefined
                sdkName?: string | undefined
                sdkVersion?: string | undefined
                sdkType?: string | undefined
                sdkAppId?: string | undefined
                groupBy?: string | undefined
                aggregationType?: string | undefined
                granularity?: string | undefined
              }
            }
            output: SeriesListRepFloat
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                from?: string | undefined
                to?: string | undefined
                projectKey?: string | undefined
                environmentKey?: string | undefined
                connectionType?: string | undefined
                relayVersion?: string | undefined
                sdkName?: string | undefined
                sdkVersion?: string | undefined
                sdkType?: string | undefined
                sdkAppId?: string | undefined
                groupBy?: string | undefined
                aggregationType?: string | undefined
                granularity?: string | undefined
              }
            }
            output: InvalidRequestErrorRep
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                from?: string | undefined
                to?: string | undefined
                projectKey?: string | undefined
                environmentKey?: string | undefined
                connectionType?: string | undefined
                relayVersion?: string | undefined
                sdkName?: string | undefined
                sdkVersion?: string | undefined
                sdkType?: string | undefined
                sdkAppId?: string | undefined
                groupBy?: string | undefined
                aggregationType?: string | undefined
                granularity?: string | undefined
              }
            }
            output: UnauthorizedErrorRep
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              query: {
                from?: string | undefined
                to?: string | undefined
                projectKey?: string | undefined
                environmentKey?: string | undefined
                connectionType?: string | undefined
                relayVersion?: string | undefined
                sdkName?: string | undefined
                sdkVersion?: string | undefined
                sdkType?: string | undefined
                sdkAppId?: string | undefined
                groupBy?: string | undefined
                aggregationType?: string | undefined
                granularity?: string | undefined
              }
            }
            output: ForbiddenErrorRep
            outputFormat: 'json'
            status: 403
          }
        | {
            input: {
              query: {
                from?: string | undefined
                to?: string | undefined
                projectKey?: string | undefined
                environmentKey?: string | undefined
                connectionType?: string | undefined
                relayVersion?: string | undefined
                sdkName?: string | undefined
                sdkVersion?: string | undefined
                sdkType?: string | undefined
                sdkAppId?: string | undefined
                groupBy?: string | undefined
                aggregationType?: string | undefined
                granularity?: string | undefined
              }
            }
            output: RateLimitedErrorRep
            outputFormat: 'json'
            status: 429
          }
        | {
            input: {
              query: {
                from?: string | undefined
                to?: string | undefined
                projectKey?: string | undefined
                environmentKey?: string | undefined
                connectionType?: string | undefined
                relayVersion?: string | undefined
                sdkName?: string | undefined
                sdkVersion?: string | undefined
                sdkType?: string | undefined
                sdkAppId?: string | undefined
                groupBy?: string | undefined
                aggregationType?: string | undefined
                granularity?: string | undefined
              }
            }
            output: StatusServiceUnavailable
            outputFormat: 'json'
            status: 503
          }
    }
  } & {
    '/api/v2/usage/streams/:source': {
      $get:
        | {
            input: { param: { source: string } } & {
              query: { from?: string | undefined; to?: string | undefined; tz?: string | undefined }
            }
            output: SeriesListRep
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { source: string } } & {
              query: { from?: string | undefined; to?: string | undefined; tz?: string | undefined }
            }
            output: InvalidRequestErrorRep
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { source: string } } & {
              query: { from?: string | undefined; to?: string | undefined; tz?: string | undefined }
            }
            output: UnauthorizedErrorRep
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { source: string } } & {
              query: { from?: string | undefined; to?: string | undefined; tz?: string | undefined }
            }
            output: ForbiddenErrorRep
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { source: string } } & {
              query: { from?: string | undefined; to?: string | undefined; tz?: string | undefined }
            }
            output: NotFoundErrorRep
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { source: string } } & {
              query: { from?: string | undefined; to?: string | undefined; tz?: string | undefined }
            }
            output: RateLimitedErrorRep
            outputFormat: 'json'
            status: 429
          }
    }
  } & {
    '/api/v2/usage/streams/:source/bysdkversion': {
      $get:
        | {
            input: { param: { source: string } } & {
              query: {
                from?: string | undefined
                to?: string | undefined
                tz?: string | undefined
                sdk?: string | undefined
                version?: string | undefined
              }
            }
            output: SeriesListRep
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { source: string } } & {
              query: {
                from?: string | undefined
                to?: string | undefined
                tz?: string | undefined
                sdk?: string | undefined
                version?: string | undefined
              }
            }
            output: InvalidRequestErrorRep
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { source: string } } & {
              query: {
                from?: string | undefined
                to?: string | undefined
                tz?: string | undefined
                sdk?: string | undefined
                version?: string | undefined
              }
            }
            output: UnauthorizedErrorRep
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { source: string } } & {
              query: {
                from?: string | undefined
                to?: string | undefined
                tz?: string | undefined
                sdk?: string | undefined
                version?: string | undefined
              }
            }
            output: ForbiddenErrorRep
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { source: string } } & {
              query: {
                from?: string | undefined
                to?: string | undefined
                tz?: string | undefined
                sdk?: string | undefined
                version?: string | undefined
              }
            }
            output: NotFoundErrorRep
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { source: string } } & {
              query: {
                from?: string | undefined
                to?: string | undefined
                tz?: string | undefined
                sdk?: string | undefined
                version?: string | undefined
              }
            }
            output: RateLimitedErrorRep
            outputFormat: 'json'
            status: 429
          }
    }
  } & {
    '/api/v2/usage/streams/:source/sdkversions': {
      $get:
        | {
            input: { param: { source: string } }
            output: SdkVersionListRep
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { source: string } }
            output: UnauthorizedErrorRep
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { source: string } }
            output: ForbiddenErrorRep
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { source: string } }
            output: RateLimitedErrorRep
            outputFormat: 'json'
            status: 429
          }
    }
  } & {
    '/api/v2/usage/total-contexts': {
      $get:
        | {
            input: {
              query: {
                from?: string | undefined
                to?: string | undefined
                projectKey?: string | undefined
                environmentKey?: string | undefined
                contextKind?: string | undefined
                sdkName?: string | undefined
                sdkType?: string | undefined
                anonymous?: string | undefined
                groupBy?: string | undefined
                aggregationType?: string | undefined
                granularity?: string | undefined
              }
            }
            output: SeriesListRep
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                from?: string | undefined
                to?: string | undefined
                projectKey?: string | undefined
                environmentKey?: string | undefined
                contextKind?: string | undefined
                sdkName?: string | undefined
                sdkType?: string | undefined
                anonymous?: string | undefined
                groupBy?: string | undefined
                aggregationType?: string | undefined
                granularity?: string | undefined
              }
            }
            output: InvalidRequestErrorRep
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                from?: string | undefined
                to?: string | undefined
                projectKey?: string | undefined
                environmentKey?: string | undefined
                contextKind?: string | undefined
                sdkName?: string | undefined
                sdkType?: string | undefined
                anonymous?: string | undefined
                groupBy?: string | undefined
                aggregationType?: string | undefined
                granularity?: string | undefined
              }
            }
            output: UnauthorizedErrorRep
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              query: {
                from?: string | undefined
                to?: string | undefined
                projectKey?: string | undefined
                environmentKey?: string | undefined
                contextKind?: string | undefined
                sdkName?: string | undefined
                sdkType?: string | undefined
                anonymous?: string | undefined
                groupBy?: string | undefined
                aggregationType?: string | undefined
                granularity?: string | undefined
              }
            }
            output: ForbiddenErrorRep
            outputFormat: 'json'
            status: 403
          }
        | {
            input: {
              query: {
                from?: string | undefined
                to?: string | undefined
                projectKey?: string | undefined
                environmentKey?: string | undefined
                contextKind?: string | undefined
                sdkName?: string | undefined
                sdkType?: string | undefined
                anonymous?: string | undefined
                groupBy?: string | undefined
                aggregationType?: string | undefined
                granularity?: string | undefined
              }
            }
            output: RateLimitedErrorRep
            outputFormat: 'json'
            status: 429
          }
        | {
            input: {
              query: {
                from?: string | undefined
                to?: string | undefined
                projectKey?: string | undefined
                environmentKey?: string | undefined
                contextKind?: string | undefined
                sdkName?: string | undefined
                sdkType?: string | undefined
                anonymous?: string | undefined
                groupBy?: string | undefined
                aggregationType?: string | undefined
                granularity?: string | undefined
              }
            }
            output: StatusServiceUnavailable
            outputFormat: 'json'
            status: 503
          }
    }
  } & {
    '/api/v2/usage/total-mau': {
      $get:
        | {
            input: {
              query: {
                from?: string | undefined
                to?: string | undefined
                projectKey?: string | undefined
                environmentKey?: string | undefined
                sdkName?: string | undefined
                sdkType?: string | undefined
                anonymous?: string | undefined
                groupBy?: string | undefined
                aggregationType?: string | undefined
                granularity?: string | undefined
              }
            }
            output: SeriesListRep
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                from?: string | undefined
                to?: string | undefined
                projectKey?: string | undefined
                environmentKey?: string | undefined
                sdkName?: string | undefined
                sdkType?: string | undefined
                anonymous?: string | undefined
                groupBy?: string | undefined
                aggregationType?: string | undefined
                granularity?: string | undefined
              }
            }
            output: InvalidRequestErrorRep
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                from?: string | undefined
                to?: string | undefined
                projectKey?: string | undefined
                environmentKey?: string | undefined
                sdkName?: string | undefined
                sdkType?: string | undefined
                anonymous?: string | undefined
                groupBy?: string | undefined
                aggregationType?: string | undefined
                granularity?: string | undefined
              }
            }
            output: UnauthorizedErrorRep
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              query: {
                from?: string | undefined
                to?: string | undefined
                projectKey?: string | undefined
                environmentKey?: string | undefined
                sdkName?: string | undefined
                sdkType?: string | undefined
                anonymous?: string | undefined
                groupBy?: string | undefined
                aggregationType?: string | undefined
                granularity?: string | undefined
              }
            }
            output: ForbiddenErrorRep
            outputFormat: 'json'
            status: 403
          }
        | {
            input: {
              query: {
                from?: string | undefined
                to?: string | undefined
                projectKey?: string | undefined
                environmentKey?: string | undefined
                sdkName?: string | undefined
                sdkType?: string | undefined
                anonymous?: string | undefined
                groupBy?: string | undefined
                aggregationType?: string | undefined
                granularity?: string | undefined
              }
            }
            output: RateLimitedErrorRep
            outputFormat: 'json'
            status: 429
          }
        | {
            input: {
              query: {
                from?: string | undefined
                to?: string | undefined
                projectKey?: string | undefined
                environmentKey?: string | undefined
                sdkName?: string | undefined
                sdkType?: string | undefined
                anonymous?: string | undefined
                groupBy?: string | undefined
                aggregationType?: string | undefined
                granularity?: string | undefined
              }
            }
            output: StatusServiceUnavailable
            outputFormat: 'json'
            status: 503
          }
    }
  } & {
    '/api/v2/usage/vega-ai': {
      $get:
        | {
            input: {
              query: {
                from?: string | undefined
                to?: string | undefined
                projectKey?: string | undefined
                granularity?: string | undefined
                aggregationType?: string | undefined
              }
            }
            output: SeriesListRep
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                from?: string | undefined
                to?: string | undefined
                projectKey?: string | undefined
                granularity?: string | undefined
                aggregationType?: string | undefined
              }
            }
            output: InvalidRequestErrorRep
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                from?: string | undefined
                to?: string | undefined
                projectKey?: string | undefined
                granularity?: string | undefined
                aggregationType?: string | undefined
              }
            }
            output: UnauthorizedErrorRep
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              query: {
                from?: string | undefined
                to?: string | undefined
                projectKey?: string | undefined
                granularity?: string | undefined
                aggregationType?: string | undefined
              }
            }
            output: ForbiddenErrorRep
            outputFormat: 'json'
            status: 403
          }
        | {
            input: {
              query: {
                from?: string | undefined
                to?: string | undefined
                projectKey?: string | undefined
                granularity?: string | undefined
                aggregationType?: string | undefined
              }
            }
            output: NotFoundErrorRep
            outputFormat: 'json'
            status: 404
          }
        | {
            input: {
              query: {
                from?: string | undefined
                to?: string | undefined
                projectKey?: string | undefined
                granularity?: string | undefined
                aggregationType?: string | undefined
              }
            }
            output: RateLimitedErrorRep
            outputFormat: 'json'
            status: 429
          }
    }
  } & {
    '/api/v2/usage/warehouse-export': {
      $get:
        | {
            input: {
              query: {
                from?: string | undefined
                to?: string | undefined
                projectKey?: string | undefined
                environmentKey?: string | undefined
                destinationKind?: string | undefined
                destination?: string | undefined
                groupBy?: string | undefined
                aggregationType?: string | undefined
                granularity?: string | undefined
              }
            }
            output: DataExportSeriesListRep
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                from?: string | undefined
                to?: string | undefined
                projectKey?: string | undefined
                environmentKey?: string | undefined
                destinationKind?: string | undefined
                destination?: string | undefined
                groupBy?: string | undefined
                aggregationType?: string | undefined
                granularity?: string | undefined
              }
            }
            output: InvalidRequestErrorRep
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                from?: string | undefined
                to?: string | undefined
                projectKey?: string | undefined
                environmentKey?: string | undefined
                destinationKind?: string | undefined
                destination?: string | undefined
                groupBy?: string | undefined
                aggregationType?: string | undefined
                granularity?: string | undefined
              }
            }
            output: UnauthorizedErrorRep
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              query: {
                from?: string | undefined
                to?: string | undefined
                projectKey?: string | undefined
                environmentKey?: string | undefined
                destinationKind?: string | undefined
                destination?: string | undefined
                groupBy?: string | undefined
                aggregationType?: string | undefined
                granularity?: string | undefined
              }
            }
            output: ForbiddenErrorRep
            outputFormat: 'json'
            status: 403
          }
        | {
            input: {
              query: {
                from?: string | undefined
                to?: string | undefined
                projectKey?: string | undefined
                environmentKey?: string | undefined
                destinationKind?: string | undefined
                destination?: string | undefined
                groupBy?: string | undefined
                aggregationType?: string | undefined
                granularity?: string | undefined
              }
            }
            output: RateLimitedErrorRep
            outputFormat: 'json'
            status: 429
          }
        | {
            input: {
              query: {
                from?: string | undefined
                to?: string | undefined
                projectKey?: string | undefined
                environmentKey?: string | undefined
                destinationKind?: string | undefined
                destination?: string | undefined
                groupBy?: string | undefined
                aggregationType?: string | undefined
                granularity?: string | undefined
              }
            }
            output: StatusServiceUnavailable
            outputFormat: 'json'
            status: 503
          }
    }
  } & {
    '/api/v2/user-search/:projectKey/:environmentKey': {
      $get:
        | {
            input: { param: { projectKey: string; environmentKey: string } } & {
              query: {
                q?: string | undefined
                limit?: bigint | undefined
                searchAfter?: string | undefined
                filter?: string | undefined
              }
            }
            output: Users
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { projectKey: string; environmentKey: string } } & {
              query: {
                q?: string | undefined
                limit?: bigint | undefined
                searchAfter?: string | undefined
                filter?: string | undefined
              }
            }
            output: InvalidRequestErrorRep
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { projectKey: string; environmentKey: string } } & {
              query: {
                q?: string | undefined
                limit?: bigint | undefined
                searchAfter?: string | undefined
                filter?: string | undefined
              }
            }
            output: UnauthorizedErrorRep
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { projectKey: string; environmentKey: string } } & {
              query: {
                q?: string | undefined
                limit?: bigint | undefined
                searchAfter?: string | undefined
                filter?: string | undefined
              }
            }
            output: ForbiddenErrorRep
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { projectKey: string; environmentKey: string } } & {
              query: {
                q?: string | undefined
                limit?: bigint | undefined
                searchAfter?: string | undefined
                filter?: string | undefined
              }
            }
            output: NotFoundErrorRep
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { projectKey: string; environmentKey: string } } & {
              query: {
                q?: string | undefined
                limit?: bigint | undefined
                searchAfter?: string | undefined
                filter?: string | undefined
              }
            }
            output: RateLimitedErrorRep
            outputFormat: 'json'
            status: 429
          }
    }
  } & {
    '/api/v2/users/:projectKey/:environmentKey': {
      $get:
        | {
            input: { param: { projectKey: string; environmentKey: string } } & {
              query: { limit?: bigint | undefined; searchAfter?: string | undefined }
            }
            output: UsersRep
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { projectKey: string; environmentKey: string } } & {
              query: { limit?: bigint | undefined; searchAfter?: string | undefined }
            }
            output: InvalidRequestErrorRep
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { projectKey: string; environmentKey: string } } & {
              query: { limit?: bigint | undefined; searchAfter?: string | undefined }
            }
            output: UnauthorizedErrorRep
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { projectKey: string; environmentKey: string } } & {
              query: { limit?: bigint | undefined; searchAfter?: string | undefined }
            }
            output: ForbiddenErrorRep
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { projectKey: string; environmentKey: string } } & {
              query: { limit?: bigint | undefined; searchAfter?: string | undefined }
            }
            output: NotFoundErrorRep
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { projectKey: string; environmentKey: string } } & {
              query: { limit?: bigint | undefined; searchAfter?: string | undefined }
            }
            output: RateLimitedErrorRep
            outputFormat: 'json'
            status: 429
          }
    }
  } & {
    '/api/v2/users/:projectKey/:environmentKey/:userKey': {
      $get:
        | {
            input: { param: { projectKey: string; environmentKey: string; userKey: string } }
            output: UserRecord
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { projectKey: string; environmentKey: string; userKey: string } }
            output: InvalidRequestErrorRep
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { projectKey: string; environmentKey: string; userKey: string } }
            output: UnauthorizedErrorRep
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { projectKey: string; environmentKey: string; userKey: string } }
            output: ForbiddenErrorRep
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { projectKey: string; environmentKey: string; userKey: string } }
            output: NotFoundErrorRep
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { projectKey: string; environmentKey: string; userKey: string } }
            output: RateLimitedErrorRep
            outputFormat: 'json'
            status: 429
          }
    }
  } & {
    '/api/v2/users/:projectKey/:environmentKey/:userKey/flags': {
      $get:
        | {
            input: { param: { projectKey: string; environmentKey: string; userKey: string } }
            output: UserFlagSettings
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { projectKey: string; environmentKey: string; userKey: string } }
            output: InvalidRequestErrorRep
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { projectKey: string; environmentKey: string; userKey: string } }
            output: UnauthorizedErrorRep
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { projectKey: string; environmentKey: string; userKey: string } }
            output: ForbiddenErrorRep
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { projectKey: string; environmentKey: string; userKey: string } }
            output: NotFoundErrorRep
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { projectKey: string; environmentKey: string; userKey: string } }
            output: RateLimitedErrorRep
            outputFormat: 'json'
            status: 429
          }
    }
  } & {
    '/api/v2/users/:projectKey/:environmentKey/:userKey/flags/:featureFlagKey': {
      $get:
        | {
            input: {
              param: {
                projectKey: string
                environmentKey: string
                userKey: string
                featureFlagKey: string
              }
            }
            output: UserFlagSetting
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              param: {
                projectKey: string
                environmentKey: string
                userKey: string
                featureFlagKey: string
              }
            }
            output: InvalidRequestErrorRep
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              param: {
                projectKey: string
                environmentKey: string
                userKey: string
                featureFlagKey: string
              }
            }
            output: UnauthorizedErrorRep
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              param: {
                projectKey: string
                environmentKey: string
                userKey: string
                featureFlagKey: string
              }
            }
            output: ForbiddenErrorRep
            outputFormat: 'json'
            status: 403
          }
        | {
            input: {
              param: {
                projectKey: string
                environmentKey: string
                userKey: string
                featureFlagKey: string
              }
            }
            output: NotFoundErrorRep
            outputFormat: 'json'
            status: 404
          }
        | {
            input: {
              param: {
                projectKey: string
                environmentKey: string
                userKey: string
                featureFlagKey: string
              }
            }
            output: RateLimitedErrorRep
            outputFormat: 'json'
            status: 429
          }
      $put:
        | {
            input: {
              param: {
                projectKey: string
                environmentKey: string
                userKey: string
                featureFlagKey: string
              }
            } & { json: ValuePut }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: {
              param: {
                projectKey: string
                environmentKey: string
                userKey: string
                featureFlagKey: string
              }
            } & { json: ValuePut }
            output: InvalidRequestErrorRep
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              param: {
                projectKey: string
                environmentKey: string
                userKey: string
                featureFlagKey: string
              }
            } & { json: ValuePut }
            output: UnauthorizedErrorRep
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              param: {
                projectKey: string
                environmentKey: string
                userKey: string
                featureFlagKey: string
              }
            } & { json: ValuePut }
            output: ForbiddenErrorRep
            outputFormat: 'json'
            status: 403
          }
        | {
            input: {
              param: {
                projectKey: string
                environmentKey: string
                userKey: string
                featureFlagKey: string
              }
            } & { json: ValuePut }
            output: NotFoundErrorRep
            outputFormat: 'json'
            status: 404
          }
        | {
            input: {
              param: {
                projectKey: string
                environmentKey: string
                userKey: string
                featureFlagKey: string
              }
            } & { json: ValuePut }
            output: RateLimitedErrorRep
            outputFormat: 'json'
            status: 429
          }
    }
  } & {
    '/api/v2/users/:projectKey/:userKey/expiring-user-targets/:environmentKey': {
      $get:
        | {
            input: { param: { projectKey: string; userKey: string; environmentKey: string } }
            output: ExpiringUserTargetGetResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { projectKey: string; userKey: string; environmentKey: string } }
            output: UnauthorizedErrorRep
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { projectKey: string; userKey: string; environmentKey: string } }
            output: ForbiddenErrorRep
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { projectKey: string; userKey: string; environmentKey: string } }
            output: NotFoundErrorRep
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { projectKey: string; userKey: string; environmentKey: string } }
            output: RateLimitedErrorRep
            outputFormat: 'json'
            status: 429
          }
      $patch:
        | {
            input: { param: { projectKey: string; userKey: string; environmentKey: string } } & {
              json: PatchUsersRequest
            }
            output: ExpiringUserTargetPatchResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { projectKey: string; userKey: string; environmentKey: string } } & {
              json: PatchUsersRequest
            }
            output: InvalidRequestErrorRep
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { projectKey: string; userKey: string; environmentKey: string } } & {
              json: PatchUsersRequest
            }
            output: UnauthorizedErrorRep
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { projectKey: string; userKey: string; environmentKey: string } } & {
              json: PatchUsersRequest
            }
            output: ForbiddenErrorRep
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { projectKey: string; userKey: string; environmentKey: string } } & {
              json: PatchUsersRequest
            }
            output: NotFoundErrorRep
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { projectKey: string; userKey: string; environmentKey: string } } & {
              json: PatchUsersRequest
            }
            output: RateLimitedErrorRep
            outputFormat: 'json'
            status: 429
          }
    }
  } & {
    '/api/v2/versions': {
      $get:
        | { input: {}; output: VersionsRep; outputFormat: 'json'; status: 200 }
        | { input: {}; output: UnauthorizedErrorRep; outputFormat: 'json'; status: 401 }
        | { input: {}; output: ForbiddenErrorRep; outputFormat: 'json'; status: 403 }
        | { input: {}; output: RateLimitedErrorRep; outputFormat: 'json'; status: 429 }
    }
  } & {
    '/api/v2/webhooks': {
      $get:
        | { input: {}; output: Webhooks; outputFormat: 'json'; status: 200 }
        | { input: {}; output: UnauthorizedErrorRep; outputFormat: 'json'; status: 401 }
        | { input: {}; output: ForbiddenErrorRep; outputFormat: 'json'; status: 403 }
        | { input: {}; output: RateLimitedErrorRep; outputFormat: 'json'; status: 429 }
      $post:
        | { input: { json: WebhookPost }; output: Webhook; outputFormat: 'json'; status: 200 }
        | {
            input: { json: WebhookPost }
            output: InvalidRequestErrorRep
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { json: WebhookPost }
            output: UnauthorizedErrorRep
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { json: WebhookPost }
            output: ForbiddenErrorRep
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { json: WebhookPost }
            output: RateLimitedErrorRep
            outputFormat: 'json'
            status: 429
          }
    }
  } & {
    '/api/v2/webhooks/:id': {
      $get:
        | { input: { param: { id: string } }; output: Webhook; outputFormat: 'json'; status: 200 }
        | {
            input: { param: { id: string } }
            output: UnauthorizedErrorRep
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: string } }
            output: ForbiddenErrorRep
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: string } }
            output: NotFoundErrorRep
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { id: string } }
            output: RateLimitedErrorRep
            outputFormat: 'json'
            status: 429
          }
      $patch:
        | {
            input: { param: { id: string } } & { json: JSONPatch }
            output: Webhook
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & { json: JSONPatch }
            output: InvalidRequestErrorRep
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { id: string } } & { json: JSONPatch }
            output: UnauthorizedErrorRep
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: string } } & { json: JSONPatch }
            output: ForbiddenErrorRep
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: string } } & { json: JSONPatch }
            output: NotFoundErrorRep
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { id: string } } & { json: JSONPatch }
            output: RateLimitedErrorRep
            outputFormat: 'json'
            status: 429
          }
      $delete:
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 204 }
        | {
            input: { param: { id: string } }
            output: UnauthorizedErrorRep
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: string } }
            output: ForbiddenErrorRep
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: string } }
            output: NotFoundErrorRep
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { id: string } }
            output: RateLimitedErrorRep
            outputFormat: 'json'
            status: 429
          }
    }
  } & {
    '/api/v2/tags': {
      $get:
        | {
            input: {
              query: {
                kind?: string[] | undefined
                pre?: string | undefined
                archived?: boolean | undefined
                limit?: number | undefined
                offset?: number | undefined
                asOf?: string | undefined
              }
            }
            output: TagsCollection
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                kind?: string[] | undefined
                pre?: string | undefined
                archived?: boolean | undefined
                limit?: number | undefined
                offset?: number | undefined
                asOf?: string | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                kind?: string[] | undefined
                pre?: string | undefined
                archived?: boolean | undefined
                limit?: number | undefined
                offset?: number | undefined
                asOf?: string | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              query: {
                kind?: string[] | undefined
                pre?: string | undefined
                archived?: boolean | undefined
                limit?: number | undefined
                offset?: number | undefined
                asOf?: string | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: {
              query: {
                kind?: string[] | undefined
                pre?: string | undefined
                archived?: boolean | undefined
                limit?: number | undefined
                offset?: number | undefined
                asOf?: string | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 429
          }
        | {
            input: {
              query: {
                kind?: string[] | undefined
                pre?: string | undefined
                archived?: boolean | undefined
                limit?: number | undefined
                offset?: number | undefined
                asOf?: string | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/api/v2/usage/data-export-events/projects/ranking': {
      $get:
        | {
            input: {
              query: {
                from: bigint
                to: bigint
                source?: string | undefined
                dimension?: string | undefined
                projectKey?: string[] | undefined
                search?: string | undefined
                cursor?: string | undefined
                limit?: number | undefined
              }
            }
            output: DataExportProjectRankingRep
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                from: bigint
                to: bigint
                source?: string | undefined
                dimension?: string | undefined
                projectKey?: string[] | undefined
                search?: string | undefined
                cursor?: string | undefined
                limit?: number | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                from: bigint
                to: bigint
                source?: string | undefined
                dimension?: string | undefined
                projectKey?: string[] | undefined
                search?: string | undefined
                cursor?: string | undefined
                limit?: number | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              query: {
                from: bigint
                to: bigint
                source?: string | undefined
                dimension?: string | undefined
                projectKey?: string[] | undefined
                search?: string | undefined
                cursor?: string | undefined
                limit?: number | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: {
              query: {
                from: bigint
                to: bigint
                source?: string | undefined
                dimension?: string | undefined
                projectKey?: string[] | undefined
                search?: string | undefined
                cursor?: string | undefined
                limit?: number | undefined
              }
            }
            output: DataExportProjectIdentityIncompleteError
            outputFormat: 'json'
            status: 409
          }
        | {
            input: {
              query: {
                from: bigint
                to: bigint
                source?: string | undefined
                dimension?: string | undefined
                projectKey?: string[] | undefined
                search?: string | undefined
                cursor?: string | undefined
                limit?: number | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 429
          }
        | {
            input: {
              query: {
                from: bigint
                to: bigint
                source?: string | undefined
                dimension?: string | undefined
                projectKey?: string[] | undefined
                search?: string | undefined
                cursor?: string | undefined
                limit?: number | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/api/v2/projects/:projectKey/ai-configs/:configKey/targeting': {
      $get:
        | {
            input: { param: { projectKey: string; configKey: string } }
            output: AIConfigTargeting
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { projectKey: string; configKey: string } }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { projectKey: string; configKey: string } }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { projectKey: string; configKey: string } }
            output: Error
            outputFormat: 'json'
            status: 500
          }
      $patch:
        | {
            input: { param: { projectKey: string; configKey: string } } & {
              json: AIConfigTargetingPatch
            }
            output: AIConfigTargeting
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { projectKey: string; configKey: string } } & {
              json: AIConfigTargetingPatch
            }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { projectKey: string; configKey: string } } & {
              json: AIConfigTargetingPatch
            }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { projectKey: string; configKey: string } } & {
              json: AIConfigTargetingPatch
            }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { projectKey: string; configKey: string } } & {
              json: AIConfigTargetingPatch
            }
            output: Error
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/api/v2/projects/:projectKey/ai-configs': {
      $get:
        | {
            input: { param: { projectKey: string } } & {
              query: {
                sort?: string | undefined
                limit?: number | undefined
                offset?: number | undefined
                filter?: string | undefined
              }
            }
            output: AIConfigs
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { projectKey: string } } & {
              query: {
                sort?: string | undefined
                limit?: number | undefined
                offset?: number | undefined
                filter?: string | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { projectKey: string } } & {
              query: {
                sort?: string | undefined
                limit?: number | undefined
                offset?: number | undefined
                filter?: string | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { projectKey: string } } & {
              query: {
                sort?: string | undefined
                limit?: number | undefined
                offset?: number | undefined
                filter?: string | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { projectKey: string } } & {
              query: {
                sort?: string | undefined
                limit?: number | undefined
                offset?: number | undefined
                filter?: string | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 500
          }
      $post:
        | {
            input: { param: { projectKey: string } } & { json: AIConfigPost }
            output: AIConfig
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { param: { projectKey: string } } & { json: AIConfigPost }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { projectKey: string } } & { json: AIConfigPost }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { projectKey: string } } & { json: AIConfigPost }
            output: Error
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { projectKey: string } } & { json: AIConfigPost }
            output: Error
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/api/v2/projects/:projectKey/ai-configs/:configKey': {
      $delete:
        | {
            input: { param: { projectKey: string; configKey: string } }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { projectKey: string; configKey: string } }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { projectKey: string; configKey: string } }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { projectKey: string; configKey: string } }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { projectKey: string; configKey: string } }
            output: Error
            outputFormat: 'json'
            status: 500
          }
      $get:
        | {
            input: { param: { projectKey: string; configKey: string } }
            output: AIConfig
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { projectKey: string; configKey: string } }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { projectKey: string; configKey: string } }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { projectKey: string; configKey: string } }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { projectKey: string; configKey: string } }
            output: Error
            outputFormat: 'json'
            status: 500
          }
      $patch:
        | {
            input: { param: { projectKey: string; configKey: string } } & { json: AIConfigPatch }
            output: AIConfig
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { projectKey: string; configKey: string } } & { json: AIConfigPatch }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { projectKey: string; configKey: string } } & { json: AIConfigPatch }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { projectKey: string; configKey: string } } & { json: AIConfigPatch }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { projectKey: string; configKey: string } } & { json: AIConfigPatch }
            output: Error
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/api/v2/projects/:projectKey/ai-configs/:configKey/variations': {
      $post:
        | {
            input: { param: { projectKey: string; configKey: string } } & {
              json: AIConfigVariationPost
            }
            output: AIConfigVariation
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { param: { projectKey: string; configKey: string } } & {
              json: AIConfigVariationPost
            }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { projectKey: string; configKey: string } } & {
              json: AIConfigVariationPost
            }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { projectKey: string; configKey: string } } & {
              json: AIConfigVariationPost
            }
            output: Error
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { projectKey: string; configKey: string } } & {
              json: AIConfigVariationPost
            }
            output: Error
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/api/v2/projects/:projectKey/ai-configs/:configKey/variations/:variationKey': {
      $delete:
        | {
            input: { param: { projectKey: string; configKey: string; variationKey: string } }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { projectKey: string; configKey: string; variationKey: string } }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { projectKey: string; configKey: string; variationKey: string } }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { projectKey: string; configKey: string; variationKey: string } }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { projectKey: string; configKey: string; variationKey: string } }
            output: Error
            outputFormat: 'json'
            status: 500
          }
      $get:
        | {
            input: { param: { projectKey: string; configKey: string; variationKey: string } }
            output: AIConfigVariationsResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { projectKey: string; configKey: string; variationKey: string } }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { projectKey: string; configKey: string; variationKey: string } }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { projectKey: string; configKey: string; variationKey: string } }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { projectKey: string; configKey: string; variationKey: string } }
            output: Error
            outputFormat: 'json'
            status: 500
          }
      $patch:
        | {
            input: { param: { projectKey: string; configKey: string; variationKey: string } } & {
              json: AIConfigVariationPatch
            }
            output: AIConfigVariation
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { projectKey: string; configKey: string; variationKey: string } } & {
              json: AIConfigVariationPatch
            }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { projectKey: string; configKey: string; variationKey: string } } & {
              json: AIConfigVariationPatch
            }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { projectKey: string; configKey: string; variationKey: string } } & {
              json: AIConfigVariationPatch
            }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { projectKey: string; configKey: string; variationKey: string } } & {
              json: AIConfigVariationPatch
            }
            output: Error
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/api/v2/projects/:projectKey/ai-configs/quick-stats': {
      $get:
        | {
            input: { param: { projectKey: string } } & { query: { env: string } }
            output: QuickStats
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { projectKey: string } } & { query: { env: string } }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { projectKey: string } } & { query: { env: string } }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { projectKey: string } } & { query: { env: string } }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { projectKey: string } } & { query: { env: string } }
            output: Error
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/api/v2/projects/:projectKey/ai-configs/:configKey/metrics': {
      $get:
        | {
            input: { param: { projectKey: string; configKey: string } } & {
              query: {
                from: number
                to: number
                env: string
                contextKind?: string | undefined
                contextKey?: string | undefined
                includeShadow?: boolean | undefined
              }
            }
            output: Metrics
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { projectKey: string; configKey: string } } & {
              query: {
                from: number
                to: number
                env: string
                contextKind?: string | undefined
                contextKey?: string | undefined
                includeShadow?: boolean | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { projectKey: string; configKey: string } } & {
              query: {
                from: number
                to: number
                env: string
                contextKind?: string | undefined
                contextKey?: string | undefined
                includeShadow?: boolean | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { projectKey: string; configKey: string } } & {
              query: {
                from: number
                to: number
                env: string
                contextKind?: string | undefined
                contextKey?: string | undefined
                includeShadow?: boolean | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { projectKey: string; configKey: string } } & {
              query: {
                from: number
                to: number
                env: string
                contextKind?: string | undefined
                contextKey?: string | undefined
                includeShadow?: boolean | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/api/v2/projects/:projectKey/ai-configs/:configKey/metrics-by-variation': {
      $get:
        | {
            input: { param: { projectKey: string; configKey: string } } & {
              query: {
                from: number
                to: number
                env: string
                contextKind?: string | undefined
                contextKey?: string | undefined
                includeShadow?: boolean | undefined
              }
            }
            output: MetricsByVariation
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { projectKey: string; configKey: string } } & {
              query: {
                from: number
                to: number
                env: string
                contextKind?: string | undefined
                contextKey?: string | undefined
                includeShadow?: boolean | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { projectKey: string; configKey: string } } & {
              query: {
                from: number
                to: number
                env: string
                contextKind?: string | undefined
                contextKey?: string | undefined
                includeShadow?: boolean | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { projectKey: string; configKey: string } } & {
              query: {
                from: number
                to: number
                env: string
                contextKind?: string | undefined
                contextKey?: string | undefined
                includeShadow?: boolean | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { projectKey: string; configKey: string } } & {
              query: {
                from: number
                to: number
                env: string
                contextKind?: string | undefined
                contextKey?: string | undefined
                includeShadow?: boolean | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/api/v2/projects/:projectKey/ai-configs/model-configs/restricted': {
      $delete:
        | {
            input: { param: { projectKey: string } } & { json: RestrictedModelsRequest }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { projectKey: string } } & { json: RestrictedModelsRequest }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { projectKey: string } } & { json: RestrictedModelsRequest }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { projectKey: string } } & { json: RestrictedModelsRequest }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { projectKey: string } } & { json: RestrictedModelsRequest }
            output: Error
            outputFormat: 'json'
            status: 500
          }
      $post:
        | {
            input: { param: { projectKey: string } } & { json: RestrictedModelsRequest }
            output: RestrictedModelsResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { projectKey: string } } & { json: RestrictedModelsRequest }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { projectKey: string } } & { json: RestrictedModelsRequest }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { projectKey: string } } & { json: RestrictedModelsRequest }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { projectKey: string } } & { json: RestrictedModelsRequest }
            output: Error
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/api/v2/projects/:projectKey/ai-configs/model-configs': {
      $get:
        | {
            input: { param: { projectKey: string } } & {
              query: {
                restricted?: boolean | undefined
                sort?: string | undefined
                filter?: string | undefined
              }
            }
            output: ModelConfig[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { projectKey: string } } & {
              query: {
                restricted?: boolean | undefined
                sort?: string | undefined
                filter?: string | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { projectKey: string } } & {
              query: {
                restricted?: boolean | undefined
                sort?: string | undefined
                filter?: string | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { projectKey: string } } & {
              query: {
                restricted?: boolean | undefined
                sort?: string | undefined
                filter?: string | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { projectKey: string } } & {
              query: {
                restricted?: boolean | undefined
                sort?: string | undefined
                filter?: string | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 500
          }
      $post:
        | {
            input: { param: { projectKey: string } } & { json: ModelConfigPost }
            output: ModelConfig
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { projectKey: string } } & { json: ModelConfigPost }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { projectKey: string } } & { json: ModelConfigPost }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { projectKey: string } } & { json: ModelConfigPost }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { projectKey: string } } & { json: ModelConfigPost }
            output: Error
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/api/v2/projects/:projectKey/ai-configs/model-configs/:modelConfigKey': {
      $delete:
        | {
            input: { param: { projectKey: string; modelConfigKey: string } }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { projectKey: string; modelConfigKey: string } }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { projectKey: string; modelConfigKey: string } }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { projectKey: string; modelConfigKey: string } }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { projectKey: string; modelConfigKey: string } }
            output: Error
            outputFormat: 'json'
            status: 500
          }
      $get:
        | {
            input: { param: { projectKey: string; modelConfigKey: string } } & {
              query: { version?: number | undefined }
            }
            output: ModelConfig
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { projectKey: string; modelConfigKey: string } } & {
              query: { version?: number | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { projectKey: string; modelConfigKey: string } } & {
              query: { version?: number | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { projectKey: string; modelConfigKey: string } } & {
              query: { version?: number | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { projectKey: string; modelConfigKey: string } } & {
              query: { version?: number | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 500
          }
      $patch:
        | {
            input: { param: { projectKey: string; modelConfigKey: string } } & {
              json: ModelConfigPatch
            }
            output: ModelConfig
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { projectKey: string; modelConfigKey: string } } & {
              json: ModelConfigPatch
            }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { projectKey: string; modelConfigKey: string } } & {
              json: ModelConfigPatch
            }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { projectKey: string; modelConfigKey: string } } & {
              json: ModelConfigPatch
            }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { projectKey: string; modelConfigKey: string } } & {
              json: ModelConfigPatch
            }
            output: Error
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/api/v2/projects/:projectKey/ai-configs/model-configs/:modelConfigKey/versions': {
      $get:
        | {
            input: { param: { projectKey: string; modelConfigKey: string } } & {
              query: { limit?: number | undefined; offset?: number | undefined }
            }
            output: ModelConfigs
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { projectKey: string; modelConfigKey: string } } & {
              query: { limit?: number | undefined; offset?: number | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { projectKey: string; modelConfigKey: string } } & {
              query: { limit?: number | undefined; offset?: number | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { projectKey: string; modelConfigKey: string } } & {
              query: { limit?: number | undefined; offset?: number | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { projectKey: string; modelConfigKey: string } } & {
              query: { limit?: number | undefined; offset?: number | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/api/v2/projects/:projectKey/ai-tools': {
      $get:
        | {
            input: { param: { projectKey: string } } & {
              query: {
                sort?: string | undefined
                limit?: number | undefined
                offset?: number | undefined
                filter?: string | undefined
              }
            }
            output: AITools
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { projectKey: string } } & {
              query: {
                sort?: string | undefined
                limit?: number | undefined
                offset?: number | undefined
                filter?: string | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { projectKey: string } } & {
              query: {
                sort?: string | undefined
                limit?: number | undefined
                offset?: number | undefined
                filter?: string | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { projectKey: string } } & {
              query: {
                sort?: string | undefined
                limit?: number | undefined
                offset?: number | undefined
                filter?: string | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 500
          }
      $post:
        | {
            input: { param: { projectKey: string } } & { json: AIToolPost }
            output: AITool
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { param: { projectKey: string } } & { json: AIToolPost }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { projectKey: string } } & { json: AIToolPost }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { projectKey: string } } & { json: AIToolPost }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { projectKey: string } } & { json: AIToolPost }
            output: Error
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/api/v2/projects/:projectKey/ai-tools/:toolKey/versions': {
      $get:
        | {
            input: { param: { projectKey: string; toolKey: string } } & {
              query: {
                sort?: string | undefined
                limit?: number | undefined
                offset?: number | undefined
              }
            }
            output: AITools
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { projectKey: string; toolKey: string } } & {
              query: {
                sort?: string | undefined
                limit?: number | undefined
                offset?: number | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { projectKey: string; toolKey: string } } & {
              query: {
                sort?: string | undefined
                limit?: number | undefined
                offset?: number | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { projectKey: string; toolKey: string } } & {
              query: {
                sort?: string | undefined
                limit?: number | undefined
                offset?: number | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/api/v2/projects/:projectKey/ai-tools/:toolKey/references': {
      $get:
        | {
            input: { param: { projectKey: string; toolKey: string } } & {
              query: { limit?: number | undefined; offset?: number | undefined }
            }
            output: ToolReferences
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { projectKey: string; toolKey: string } } & {
              query: { limit?: number | undefined; offset?: number | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { projectKey: string; toolKey: string } } & {
              query: { limit?: number | undefined; offset?: number | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { projectKey: string; toolKey: string } } & {
              query: { limit?: number | undefined; offset?: number | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { projectKey: string; toolKey: string } } & {
              query: { limit?: number | undefined; offset?: number | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/api/v2/projects/:projectKey/ai-tools/:toolKey': {
      $delete:
        | {
            input: { param: { projectKey: string; toolKey: string } }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { projectKey: string; toolKey: string } }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { projectKey: string; toolKey: string } }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { projectKey: string; toolKey: string } }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { projectKey: string; toolKey: string } }
            output: Error
            outputFormat: 'json'
            status: 409
          }
        | {
            input: { param: { projectKey: string; toolKey: string } }
            output: Error
            outputFormat: 'json'
            status: 500
          }
      $get:
        | {
            input: { param: { projectKey: string; toolKey: string } }
            output: AITool
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { projectKey: string; toolKey: string } }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { projectKey: string; toolKey: string } }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { projectKey: string; toolKey: string } }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { projectKey: string; toolKey: string } }
            output: Error
            outputFormat: 'json'
            status: 500
          }
      $patch:
        | {
            input: { param: { projectKey: string; toolKey: string } } & { json: AIToolPatch }
            output: AITool
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { projectKey: string; toolKey: string } } & { json: AIToolPatch }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { projectKey: string; toolKey: string } } & { json: AIToolPatch }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { projectKey: string; toolKey: string } } & { json: AIToolPatch }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { projectKey: string; toolKey: string } } & { json: AIToolPatch }
            output: Error
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/api/v2/projects/:projectKey/ai-configs/prompt-snippets': {
      $get:
        | {
            input: { param: { projectKey: string } } & {
              query: {
                limit?: number | undefined
                offset?: number | undefined
                filter?: string | undefined
              }
            }
            output: PromptSnippets
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { projectKey: string } } & {
              query: {
                limit?: number | undefined
                offset?: number | undefined
                filter?: string | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { projectKey: string } } & {
              query: {
                limit?: number | undefined
                offset?: number | undefined
                filter?: string | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { projectKey: string } } & {
              query: {
                limit?: number | undefined
                offset?: number | undefined
                filter?: string | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { projectKey: string } } & {
              query: {
                limit?: number | undefined
                offset?: number | undefined
                filter?: string | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 500
          }
      $post:
        | {
            input: { param: { projectKey: string } } & { json: PromptSnippetPost }
            output: PromptSnippet
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { param: { projectKey: string } } & { json: PromptSnippetPost }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { projectKey: string } } & { json: PromptSnippetPost }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { projectKey: string } } & { json: PromptSnippetPost }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { projectKey: string } } & { json: PromptSnippetPost }
            output: Error
            outputFormat: 'json'
            status: 409
          }
        | {
            input: { param: { projectKey: string } } & { json: PromptSnippetPost }
            output: Error
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/api/v2/projects/:projectKey/ai-configs/prompt-snippets/:snippetKey': {
      $delete:
        | {
            input: { param: { projectKey: string; snippetKey: string } }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { projectKey: string; snippetKey: string } }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { projectKey: string; snippetKey: string } }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { projectKey: string; snippetKey: string } }
            output: Error
            outputFormat: 'json'
            status: 500
          }
      $get:
        | {
            input: { param: { projectKey: string; snippetKey: string } }
            output: PromptSnippet
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { projectKey: string; snippetKey: string } }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { projectKey: string; snippetKey: string } }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { projectKey: string; snippetKey: string } }
            output: Error
            outputFormat: 'json'
            status: 500
          }
      $patch:
        | {
            input: { param: { projectKey: string; snippetKey: string } } & {
              json: PromptSnippetPatch
            }
            output: PromptSnippet
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { projectKey: string; snippetKey: string } } & {
              json: PromptSnippetPatch
            }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { projectKey: string; snippetKey: string } } & {
              json: PromptSnippetPatch
            }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { projectKey: string; snippetKey: string } } & {
              json: PromptSnippetPatch
            }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { projectKey: string; snippetKey: string } } & {
              json: PromptSnippetPatch
            }
            output: Error
            outputFormat: 'json'
            status: 409
          }
        | {
            input: { param: { projectKey: string; snippetKey: string } } & {
              json: PromptSnippetPatch
            }
            output: Error
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/api/v2/projects/:projectKey/ai-configs/prompt-snippets/:snippetKey/references': {
      $get:
        | {
            input: { param: { projectKey: string; snippetKey: string } } & {
              query: { limit?: number | undefined; offset?: number | undefined }
            }
            output: SnippetReferences
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { projectKey: string; snippetKey: string } } & {
              query: { limit?: number | undefined; offset?: number | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { projectKey: string; snippetKey: string } } & {
              query: { limit?: number | undefined; offset?: number | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { projectKey: string; snippetKey: string } } & {
              query: { limit?: number | undefined; offset?: number | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/api/v2/projects/:projectKey/ai-configs/prompt-snippets/:snippetKey/versions': {
      $get:
        | {
            input: { param: { projectKey: string; snippetKey: string } } & {
              query: { limit?: number | undefined; offset?: number | undefined }
            }
            output: PromptSnippets
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { projectKey: string; snippetKey: string } } & {
              query: { limit?: number | undefined; offset?: number | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { projectKey: string; snippetKey: string } } & {
              query: { limit?: number | undefined; offset?: number | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { projectKey: string; snippetKey: string } } & {
              query: { limit?: number | undefined; offset?: number | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { projectKey: string; snippetKey: string } } & {
              query: { limit?: number | undefined; offset?: number | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/api/v2/projects/:projectKey/ai-configs/skills': {
      $get:
        | {
            input: { param: { projectKey: string } } & {
              query: {
                limit?: number | undefined
                offset?: number | undefined
                filter?: string | undefined
                sort?: string | undefined
              }
            }
            output: AgentSkills
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { projectKey: string } } & {
              query: {
                limit?: number | undefined
                offset?: number | undefined
                filter?: string | undefined
                sort?: string | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { projectKey: string } } & {
              query: {
                limit?: number | undefined
                offset?: number | undefined
                filter?: string | undefined
                sort?: string | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { projectKey: string } } & {
              query: {
                limit?: number | undefined
                offset?: number | undefined
                filter?: string | undefined
                sort?: string | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { projectKey: string } } & {
              query: {
                limit?: number | undefined
                offset?: number | undefined
                filter?: string | undefined
                sort?: string | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 500
          }
      $post:
        | {
            input: { param: { projectKey: string } } & { json: AgentSkillPost }
            output: AgentSkill
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { param: { projectKey: string } } & { json: AgentSkillPost }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { projectKey: string } } & { json: AgentSkillPost }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { projectKey: string } } & { json: AgentSkillPost }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { projectKey: string } } & { json: AgentSkillPost }
            output: Error
            outputFormat: 'json'
            status: 409
          }
        | {
            input: { param: { projectKey: string } } & { json: AgentSkillPost }
            output: Error
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/api/v2/projects/:projectKey/ai-configs/skills/:skillKey': {
      $delete:
        | {
            input: { param: { projectKey: string; skillKey: string } }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { projectKey: string; skillKey: string } }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { projectKey: string; skillKey: string } }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { projectKey: string; skillKey: string } }
            output: Error
            outputFormat: 'json'
            status: 409
          }
        | {
            input: { param: { projectKey: string; skillKey: string } }
            output: Error
            outputFormat: 'json'
            status: 500
          }
      $get:
        | {
            input: { param: { projectKey: string; skillKey: string } }
            output: AgentSkill
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { projectKey: string; skillKey: string } }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { projectKey: string; skillKey: string } }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { projectKey: string; skillKey: string } }
            output: Error
            outputFormat: 'json'
            status: 500
          }
      $patch:
        | {
            input: { param: { projectKey: string; skillKey: string } } & { json: AgentSkillPatch }
            output: AgentSkill
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { projectKey: string; skillKey: string } } & { json: AgentSkillPatch }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { projectKey: string; skillKey: string } } & { json: AgentSkillPatch }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { projectKey: string; skillKey: string } } & { json: AgentSkillPatch }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { projectKey: string; skillKey: string } } & { json: AgentSkillPatch }
            output: Error
            outputFormat: 'json'
            status: 409
          }
        | {
            input: { param: { projectKey: string; skillKey: string } } & { json: AgentSkillPatch }
            output: Error
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/api/v2/projects/:projectKey/ai-configs/skills/:skillKey/references': {
      $get:
        | {
            input: { param: { projectKey: string; skillKey: string } } & {
              query: { limit?: number | undefined; offset?: number | undefined }
            }
            output: AgentSkillReferences
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { projectKey: string; skillKey: string } } & {
              query: { limit?: number | undefined; offset?: number | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { projectKey: string; skillKey: string } } & {
              query: { limit?: number | undefined; offset?: number | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { projectKey: string; skillKey: string } } & {
              query: { limit?: number | undefined; offset?: number | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/api/v2/projects/:projectKey/ai-configs/skills/:skillKey/versions': {
      $get:
        | {
            input: { param: { projectKey: string; skillKey: string } } & {
              query: { limit?: number | undefined; offset?: number | undefined }
            }
            output: AgentSkills
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { projectKey: string; skillKey: string } } & {
              query: { limit?: number | undefined; offset?: number | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { projectKey: string; skillKey: string } } & {
              query: { limit?: number | undefined; offset?: number | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { projectKey: string; skillKey: string } } & {
              query: { limit?: number | undefined; offset?: number | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { projectKey: string; skillKey: string } } & {
              query: { limit?: number | undefined; offset?: number | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/api/v2/projects/:projectKey/agent-graphs': {
      $get:
        | {
            input: { param: { projectKey: string } } & {
              query: {
                limit?: number | undefined
                offset?: number | undefined
                filter?: string | undefined
              }
            } & { header: { 'LD-API-Version': 'beta' } }
            output: AgentGraphs
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { projectKey: string } } & {
              query: {
                limit?: number | undefined
                offset?: number | undefined
                filter?: string | undefined
              }
            } & { header: { 'LD-API-Version': 'beta' } }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { projectKey: string } } & {
              query: {
                limit?: number | undefined
                offset?: number | undefined
                filter?: string | undefined
              }
            } & { header: { 'LD-API-Version': 'beta' } }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { projectKey: string } } & {
              query: {
                limit?: number | undefined
                offset?: number | undefined
                filter?: string | undefined
              }
            } & { header: { 'LD-API-Version': 'beta' } }
            output: Error
            outputFormat: 'json'
            status: 500
          }
      $post:
        | {
            input: { param: { projectKey: string } } & { header: { 'LD-API-Version': 'beta' } } & {
              json: AgentGraphPost
            }
            output: AgentGraph
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { param: { projectKey: string } } & { header: { 'LD-API-Version': 'beta' } } & {
              json: AgentGraphPost
            }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { projectKey: string } } & { header: { 'LD-API-Version': 'beta' } } & {
              json: AgentGraphPost
            }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { projectKey: string } } & { header: { 'LD-API-Version': 'beta' } } & {
              json: AgentGraphPost
            }
            output: Error
            outputFormat: 'json'
            status: 413
          }
        | {
            input: { param: { projectKey: string } } & { header: { 'LD-API-Version': 'beta' } } & {
              json: AgentGraphPost
            }
            output: Error
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/api/v2/projects/:projectKey/agent-graphs/:graphKey': {
      $delete:
        | {
            input: { param: { projectKey: string; graphKey: string } } & {
              header: { 'LD-API-Version': 'beta' }
            }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { projectKey: string; graphKey: string } } & {
              header: { 'LD-API-Version': 'beta' }
            }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { projectKey: string; graphKey: string } } & {
              header: { 'LD-API-Version': 'beta' }
            }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { projectKey: string; graphKey: string } } & {
              header: { 'LD-API-Version': 'beta' }
            }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { projectKey: string; graphKey: string } } & {
              header: { 'LD-API-Version': 'beta' }
            }
            output: Error
            outputFormat: 'json'
            status: 500
          }
      $get:
        | {
            input: { param: { projectKey: string; graphKey: string } } & {
              header: { 'LD-API-Version': 'beta' }
            }
            output: AgentGraph
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { projectKey: string; graphKey: string } } & {
              header: { 'LD-API-Version': 'beta' }
            }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { projectKey: string; graphKey: string } } & {
              header: { 'LD-API-Version': 'beta' }
            }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { projectKey: string; graphKey: string } } & {
              header: { 'LD-API-Version': 'beta' }
            }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { projectKey: string; graphKey: string } } & {
              header: { 'LD-API-Version': 'beta' }
            }
            output: Error
            outputFormat: 'json'
            status: 500
          }
      $patch:
        | {
            input: { param: { projectKey: string; graphKey: string } } & {
              header: { 'LD-API-Version': 'beta' }
            } & { json: AgentGraphPatch }
            output: AgentGraph
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { projectKey: string; graphKey: string } } & {
              header: { 'LD-API-Version': 'beta' }
            } & { json: AgentGraphPatch }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { projectKey: string; graphKey: string } } & {
              header: { 'LD-API-Version': 'beta' }
            } & { json: AgentGraphPatch }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { projectKey: string; graphKey: string } } & {
              header: { 'LD-API-Version': 'beta' }
            } & { json: AgentGraphPatch }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { projectKey: string; graphKey: string } } & {
              header: { 'LD-API-Version': 'beta' }
            } & { json: AgentGraphPatch }
            output: Error
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/api/v2/projects/:projectKey/agent-optimizations': {
      $get:
        | {
            input: { param: { projectKey: string } } & {
              query: {
                limit?: number | undefined
                offset?: number | undefined
                filter?: string | undefined
              }
            }
            output: AgentOptimizations
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { projectKey: string } } & {
              query: {
                limit?: number | undefined
                offset?: number | undefined
                filter?: string | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { projectKey: string } } & {
              query: {
                limit?: number | undefined
                offset?: number | undefined
                filter?: string | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { projectKey: string } } & {
              query: {
                limit?: number | undefined
                offset?: number | undefined
                filter?: string | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { projectKey: string } } & {
              query: {
                limit?: number | undefined
                offset?: number | undefined
                filter?: string | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 500
          }
      $post:
        | {
            input: { param: { projectKey: string } } & { json: AgentOptimizationPost }
            output: AgentOptimization
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { param: { projectKey: string } } & { json: AgentOptimizationPost }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { projectKey: string } } & { json: AgentOptimizationPost }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { projectKey: string } } & { json: AgentOptimizationPost }
            output: Error
            outputFormat: 'json'
            status: 409
          }
        | {
            input: { param: { projectKey: string } } & { json: AgentOptimizationPost }
            output: Error
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/api/v2/projects/:projectKey/agent-optimizations/:optimizationKey': {
      $delete:
        | {
            input: { param: { projectKey: string; optimizationKey: string } }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { projectKey: string; optimizationKey: string } }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { projectKey: string; optimizationKey: string } }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { projectKey: string; optimizationKey: string } }
            output: Error
            outputFormat: 'json'
            status: 500
          }
      $get:
        | {
            input: { param: { projectKey: string; optimizationKey: string } }
            output: AgentOptimization
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { projectKey: string; optimizationKey: string } }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { projectKey: string; optimizationKey: string } }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { projectKey: string; optimizationKey: string } }
            output: Error
            outputFormat: 'json'
            status: 500
          }
      $patch:
        | {
            input: { param: { projectKey: string; optimizationKey: string } } & {
              json: AgentOptimizationPatch
            }
            output: AgentOptimization
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { projectKey: string; optimizationKey: string } } & {
              json: AgentOptimizationPatch
            }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { projectKey: string; optimizationKey: string } } & {
              json: AgentOptimizationPatch
            }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { projectKey: string; optimizationKey: string } } & {
              json: AgentOptimizationPatch
            }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { projectKey: string; optimizationKey: string } } & {
              json: AgentOptimizationPatch
            }
            output: Error
            outputFormat: 'json'
            status: 409
          }
        | {
            input: { param: { projectKey: string; optimizationKey: string } } & {
              json: AgentOptimizationPatch
            }
            output: Error
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/api/v2/projects/:projectKey/agent-optimizations/:optimizationKey/results': {
      $get:
        | {
            input: { param: { projectKey: string; optimizationKey: string } } & {
              query: { limit?: number | undefined; offset?: number | undefined }
            }
            output: AgentOptimizationResults
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { projectKey: string; optimizationKey: string } } & {
              query: { limit?: number | undefined; offset?: number | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { projectKey: string; optimizationKey: string } } & {
              query: { limit?: number | undefined; offset?: number | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { projectKey: string; optimizationKey: string } } & {
              query: { limit?: number | undefined; offset?: number | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 500
          }
      $post:
        | {
            input: { param: { projectKey: string; optimizationKey: string } } & {
              json: AgentOptimizationResultPost
            }
            output: AgentOptimizationResult
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { param: { projectKey: string; optimizationKey: string } } & {
              json: AgentOptimizationResultPost
            }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { projectKey: string; optimizationKey: string } } & {
              json: AgentOptimizationResultPost
            }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { projectKey: string; optimizationKey: string } } & {
              json: AgentOptimizationResultPost
            }
            output: Error
            outputFormat: 'json'
            status: 409
          }
        | {
            input: { param: { projectKey: string; optimizationKey: string } } & {
              json: AgentOptimizationResultPost
            }
            output: Error
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { projectKey: string; optimizationKey: string } } & {
              json: AgentOptimizationResultPost
            }
            output: Error
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/api/v2/projects/:projectKey/agent-optimizations/:optimizationKey/all-results': {
      $get:
        | {
            input: { param: { projectKey: string; optimizationKey: string } } & {
              query: { limit?: number | undefined; offset?: number | undefined }
            }
            output: AgentOptimizationResults
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { projectKey: string; optimizationKey: string } } & {
              query: { limit?: number | undefined; offset?: number | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { projectKey: string; optimizationKey: string } } & {
              query: { limit?: number | undefined; offset?: number | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { projectKey: string; optimizationKey: string } } & {
              query: { limit?: number | undefined; offset?: number | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/api/v2/projects/:projectKey/agent-optimizations/:optimizationKey/runs': {
      $get:
        | {
            input: { param: { projectKey: string; optimizationKey: string } } & {
              query: { limit?: number | undefined; offset?: number | undefined }
            }
            output: AgentOptimizationRuns
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { projectKey: string; optimizationKey: string } } & {
              query: { limit?: number | undefined; offset?: number | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { projectKey: string; optimizationKey: string } } & {
              query: { limit?: number | undefined; offset?: number | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { projectKey: string; optimizationKey: string } } & {
              query: { limit?: number | undefined; offset?: number | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { projectKey: string; optimizationKey: string } } & {
              query: { limit?: number | undefined; offset?: number | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/api/v2/projects/:projectKey/agent-optimizations/:optimizationKey/runs/:runId': {
      $delete:
        | {
            input: { param: { projectKey: string; optimizationKey: string; runId: string } } & {
              header: { 'LD-API-Version': 'beta' }
            }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { projectKey: string; optimizationKey: string; runId: string } } & {
              header: { 'LD-API-Version': 'beta' }
            }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { projectKey: string; optimizationKey: string; runId: string } } & {
              header: { 'LD-API-Version': 'beta' }
            }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { projectKey: string; optimizationKey: string; runId: string } } & {
              header: { 'LD-API-Version': 'beta' }
            }
            output: Error
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/api/v2/projects/:projectKey/agent-optimizations/:optimizationKey/runs/:runId/results': {
      $get:
        | {
            input: { param: { projectKey: string; optimizationKey: string; runId: string } }
            output: AgentOptimizationResults
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { projectKey: string; optimizationKey: string; runId: string } }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { projectKey: string; optimizationKey: string; runId: string } }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { projectKey: string; optimizationKey: string; runId: string } }
            output: Error
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/api/v2/projects/:projectKey/agent-optimizations/:optimizationKey/results/:resultId': {
      $patch:
        | {
            input: { param: { projectKey: string; optimizationKey: string; resultId: string } } & {
              json: AgentOptimizationResultPatch
            }
            output: AgentOptimizationResult
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { projectKey: string; optimizationKey: string; resultId: string } } & {
              json: AgentOptimizationResultPatch
            }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { projectKey: string; optimizationKey: string; resultId: string } } & {
              json: AgentOptimizationResultPatch
            }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { projectKey: string; optimizationKey: string; resultId: string } } & {
              json: AgentOptimizationResultPatch
            }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { projectKey: string; optimizationKey: string; resultId: string } } & {
              json: AgentOptimizationResultPatch
            }
            output: Error
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/api/v2/announcements': {
      $get:
        | {
            input: {
              query: {
                status?: 'active' | 'inactive' | 'scheduled' | undefined
                limit?: number | undefined
                offset?: number | undefined
              }
            }
            output: GetAnnouncementsPublic_200Response
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                status?: 'active' | 'inactive' | 'scheduled' | undefined
                limit?: number | undefined
                offset?: number | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                status?: 'active' | 'inactive' | 'scheduled' | undefined
                limit?: number | undefined
                offset?: number | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: {
              query: {
                status?: 'active' | 'inactive' | 'scheduled' | undefined
                limit?: number | undefined
                offset?: number | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: {
              query: {
                status?: 'active' | 'inactive' | 'scheduled' | undefined
                limit?: number | undefined
                offset?: number | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 429
          }
        | {
            input: {
              query: {
                status?: 'active' | 'inactive' | 'scheduled' | undefined
                limit?: number | undefined
                offset?: number | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 500
          }
      $post:
        | {
            input: { json: CreateAnnouncementBody }
            output: AnnouncementResponse
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { json: CreateAnnouncementBody }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { json: CreateAnnouncementBody }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { json: CreateAnnouncementBody }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { json: CreateAnnouncementBody }
            output: Error
            outputFormat: 'json'
            status: 409
          }
        | {
            input: { json: CreateAnnouncementBody }
            output: Error
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/api/v2/announcements/:announcementId': {
      $delete:
        | {
            input: { param: { announcementId: string } }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { announcementId: string } }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { announcementId: string } }
            output: Error
            outputFormat: 'json'
            status: 500
          }
      $patch:
        | {
            input: { param: { announcementId: string } } & { json: AnnouncementJSONPatch }
            output: AnnouncementResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { announcementId: string } } & { json: AnnouncementJSONPatch }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { announcementId: string } } & { json: AnnouncementJSONPatch }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { announcementId: string } } & { json: AnnouncementJSONPatch }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { announcementId: string } } & { json: AnnouncementJSONPatch }
            output: Error
            outputFormat: 'json'
            status: 409
          }
        | {
            input: { param: { announcementId: string } } & { json: AnnouncementJSONPatch }
            output: Error
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/api/v2/approval-requests/projects/:projectKey/settings': {
      $get:
        | {
            input: { param: { projectKey: string } } & {
              query: {
                environmentKey?: string | undefined
                resourceKind?: string | undefined
                expand?: string | undefined
              }
            } & { header: { 'LD-API-Version': 'beta' } }
            output: ApprovalRequestSettings
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { projectKey: string } } & {
              query: {
                environmentKey?: string | undefined
                resourceKind?: string | undefined
                expand?: string | undefined
              }
            } & { header: { 'LD-API-Version': 'beta' } }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { projectKey: string } } & {
              query: {
                environmentKey?: string | undefined
                resourceKind?: string | undefined
                expand?: string | undefined
              }
            } & { header: { 'LD-API-Version': 'beta' } }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { projectKey: string } } & {
              query: {
                environmentKey?: string | undefined
                resourceKind?: string | undefined
                expand?: string | undefined
              }
            } & { header: { 'LD-API-Version': 'beta' } }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { projectKey: string } } & {
              query: {
                environmentKey?: string | undefined
                resourceKind?: string | undefined
                expand?: string | undefined
              }
            } & { header: { 'LD-API-Version': 'beta' } }
            output: Error
            outputFormat: 'json'
            status: 500
          }
      $patch:
        | {
            input: { param: { projectKey: string } } & { header: { 'LD-API-Version': 'beta' } } & {
              json: ApprovalRequestSettingsPatch
            }
            output: ApprovalRequestSettings
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { projectKey: string } } & { header: { 'LD-API-Version': 'beta' } } & {
              json: ApprovalRequestSettingsPatch
            }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { projectKey: string } } & { header: { 'LD-API-Version': 'beta' } } & {
              json: ApprovalRequestSettingsPatch
            }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { projectKey: string } } & { header: { 'LD-API-Version': 'beta' } } & {
              json: ApprovalRequestSettingsPatch
            }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { projectKey: string } } & { header: { 'LD-API-Version': 'beta' } } & {
              json: ApprovalRequestSettingsPatch
            }
            output: Error
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/api/v2/projects/:projectKey/views': {
      $get:
        | {
            input: { param: { projectKey: string } } & {
              query: {
                sort?: 'key' | 'name' | 'updatedAt' | undefined
                limit?: number | undefined
                offset?: number | undefined
                filter?: string | undefined
                expand?:
                  | (
                      | 'flagsSummary'
                      | 'segmentsSummary'
                      | 'metricsSummary'
                      | 'aiConfigsSummary'
                      | 'resourceSummary'
                    )[]
                  | undefined
              }
            }
            output: Views
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { projectKey: string } } & {
              query: {
                sort?: 'key' | 'name' | 'updatedAt' | undefined
                limit?: number | undefined
                offset?: number | undefined
                filter?: string | undefined
                expand?:
                  | (
                      | 'flagsSummary'
                      | 'segmentsSummary'
                      | 'metricsSummary'
                      | 'aiConfigsSummary'
                      | 'resourceSummary'
                    )[]
                  | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { projectKey: string } } & {
              query: {
                sort?: 'key' | 'name' | 'updatedAt' | undefined
                limit?: number | undefined
                offset?: number | undefined
                filter?: string | undefined
                expand?:
                  | (
                      | 'flagsSummary'
                      | 'segmentsSummary'
                      | 'metricsSummary'
                      | 'aiConfigsSummary'
                      | 'resourceSummary'
                    )[]
                  | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { projectKey: string } } & {
              query: {
                sort?: 'key' | 'name' | 'updatedAt' | undefined
                limit?: number | undefined
                offset?: number | undefined
                filter?: string | undefined
                expand?:
                  | (
                      | 'flagsSummary'
                      | 'segmentsSummary'
                      | 'metricsSummary'
                      | 'aiConfigsSummary'
                      | 'resourceSummary'
                    )[]
                  | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { projectKey: string } } & {
              query: {
                sort?: 'key' | 'name' | 'updatedAt' | undefined
                limit?: number | undefined
                offset?: number | undefined
                filter?: string | undefined
                expand?:
                  | (
                      | 'flagsSummary'
                      | 'segmentsSummary'
                      | 'metricsSummary'
                      | 'aiConfigsSummary'
                      | 'resourceSummary'
                    )[]
                  | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 500
          }
      $post:
        | {
            input: { param: { projectKey: string } } & { json: ViewPost }
            output: View
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { projectKey: string } } & { json: ViewPost }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { projectKey: string } } & { json: ViewPost }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { projectKey: string } } & { json: ViewPost }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { projectKey: string } } & { json: ViewPost }
            output: Error
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/api/v2/projects/:projectKey/views/:viewKey': {
      $delete:
        | {
            input: { param: { projectKey: string; viewKey: string } }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { projectKey: string; viewKey: string } }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { projectKey: string; viewKey: string } }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { projectKey: string; viewKey: string } }
            output: Error
            outputFormat: 'json'
            status: 500
          }
      $get:
        | {
            input: { param: { projectKey: string; viewKey: string } } & {
              query: {
                sort?: 'key' | 'name' | 'updatedAt' | undefined
                limit?: number | undefined
                offset?: number | undefined
                filter?: string | undefined
                expand?:
                  | (
                      | 'allFlags'
                      | 'allSegments'
                      | 'allMetrics'
                      | 'allAIConfigs'
                      | 'allResources'
                      | 'maintainer'
                      | 'flagsSummary'
                      | 'segmentsSummary'
                      | 'metricsSummary'
                      | 'aiConfigsSummary'
                      | 'resourceSummary'
                    )[]
                  | undefined
              }
            }
            output: View
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { projectKey: string; viewKey: string } } & {
              query: {
                sort?: 'key' | 'name' | 'updatedAt' | undefined
                limit?: number | undefined
                offset?: number | undefined
                filter?: string | undefined
                expand?:
                  | (
                      | 'allFlags'
                      | 'allSegments'
                      | 'allMetrics'
                      | 'allAIConfigs'
                      | 'allResources'
                      | 'maintainer'
                      | 'flagsSummary'
                      | 'segmentsSummary'
                      | 'metricsSummary'
                      | 'aiConfigsSummary'
                      | 'resourceSummary'
                    )[]
                  | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { projectKey: string; viewKey: string } } & {
              query: {
                sort?: 'key' | 'name' | 'updatedAt' | undefined
                limit?: number | undefined
                offset?: number | undefined
                filter?: string | undefined
                expand?:
                  | (
                      | 'allFlags'
                      | 'allSegments'
                      | 'allMetrics'
                      | 'allAIConfigs'
                      | 'allResources'
                      | 'maintainer'
                      | 'flagsSummary'
                      | 'segmentsSummary'
                      | 'metricsSummary'
                      | 'aiConfigsSummary'
                      | 'resourceSummary'
                    )[]
                  | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { projectKey: string; viewKey: string } } & {
              query: {
                sort?: 'key' | 'name' | 'updatedAt' | undefined
                limit?: number | undefined
                offset?: number | undefined
                filter?: string | undefined
                expand?:
                  | (
                      | 'allFlags'
                      | 'allSegments'
                      | 'allMetrics'
                      | 'allAIConfigs'
                      | 'allResources'
                      | 'maintainer'
                      | 'flagsSummary'
                      | 'segmentsSummary'
                      | 'metricsSummary'
                      | 'aiConfigsSummary'
                      | 'resourceSummary'
                    )[]
                  | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { projectKey: string; viewKey: string } } & {
              query: {
                sort?: 'key' | 'name' | 'updatedAt' | undefined
                limit?: number | undefined
                offset?: number | undefined
                filter?: string | undefined
                expand?:
                  | (
                      | 'allFlags'
                      | 'allSegments'
                      | 'allMetrics'
                      | 'allAIConfigs'
                      | 'allResources'
                      | 'maintainer'
                      | 'flagsSummary'
                      | 'segmentsSummary'
                      | 'metricsSummary'
                      | 'aiConfigsSummary'
                      | 'resourceSummary'
                    )[]
                  | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 500
          }
      $patch:
        | {
            input: { param: { projectKey: string; viewKey: string } } & { json: ViewPatch }
            output: View
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { projectKey: string; viewKey: string } } & { json: ViewPatch }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { projectKey: string; viewKey: string } } & { json: ViewPatch }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { projectKey: string; viewKey: string } } & { json: ViewPatch }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { projectKey: string; viewKey: string } } & { json: ViewPatch }
            output: Error
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/api/v2/projects/:projectKey/views/:viewKey/link/:resourceType': {
      $delete:
        | {
            input: {
              param: {
                projectKey: string
                viewKey: string
                resourceType: 'flags' | 'segments' | 'aiConfigs'
              }
            } & { json: ViewLinkRequest }
            output: UnlinkResourceSuccessResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              param: {
                projectKey: string
                viewKey: string
                resourceType: 'flags' | 'segments' | 'aiConfigs'
              }
            } & { json: ViewLinkRequest }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              param: {
                projectKey: string
                viewKey: string
                resourceType: 'flags' | 'segments' | 'aiConfigs'
              }
            } & { json: ViewLinkRequest }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: {
              param: {
                projectKey: string
                viewKey: string
                resourceType: 'flags' | 'segments' | 'aiConfigs'
              }
            } & { json: ViewLinkRequest }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: {
              param: {
                projectKey: string
                viewKey: string
                resourceType: 'flags' | 'segments' | 'aiConfigs'
              }
            } & { json: ViewLinkRequest }
            output: Error
            outputFormat: 'json'
            status: 500
          }
      $post:
        | {
            input: {
              param: {
                projectKey: string
                viewKey: string
                resourceType: 'flags' | 'segments' | 'aiConfigs'
              }
            } & { json: ViewLinkRequest }
            output: LinkResourceSuccessResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              param: {
                projectKey: string
                viewKey: string
                resourceType: 'flags' | 'segments' | 'aiConfigs'
              }
            } & { json: ViewLinkRequest }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              param: {
                projectKey: string
                viewKey: string
                resourceType: 'flags' | 'segments' | 'aiConfigs'
              }
            } & { json: ViewLinkRequest }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: {
              param: {
                projectKey: string
                viewKey: string
                resourceType: 'flags' | 'segments' | 'aiConfigs'
              }
            } & { json: ViewLinkRequest }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: {
              param: {
                projectKey: string
                viewKey: string
                resourceType: 'flags' | 'segments' | 'aiConfigs'
              }
            } & { json: ViewLinkRequest }
            output: Error
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/api/v2/projects/:projectKey/views/:viewKey/linked/:resourceType': {
      $get:
        | {
            input: {
              param: {
                projectKey: string
                viewKey: string
                resourceType: 'flags' | 'segments' | 'aiConfigs'
              }
            } & {
              query: {
                limit?: number | undefined
                offset?: number | undefined
                sort?: 'linkedAt' | 'name' | undefined
                query?: string | undefined
                filter?: string | undefined
                expand?: ('maintainer' | 'resourceDetails')[] | undefined
              }
            }
            output: ViewLinkedResources
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              param: {
                projectKey: string
                viewKey: string
                resourceType: 'flags' | 'segments' | 'aiConfigs'
              }
            } & {
              query: {
                limit?: number | undefined
                offset?: number | undefined
                sort?: 'linkedAt' | 'name' | undefined
                query?: string | undefined
                filter?: string | undefined
                expand?: ('maintainer' | 'resourceDetails')[] | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              param: {
                projectKey: string
                viewKey: string
                resourceType: 'flags' | 'segments' | 'aiConfigs'
              }
            } & {
              query: {
                limit?: number | undefined
                offset?: number | undefined
                sort?: 'linkedAt' | 'name' | undefined
                query?: string | undefined
                filter?: string | undefined
                expand?: ('maintainer' | 'resourceDetails')[] | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: {
              param: {
                projectKey: string
                viewKey: string
                resourceType: 'flags' | 'segments' | 'aiConfigs'
              }
            } & {
              query: {
                limit?: number | undefined
                offset?: number | undefined
                sort?: 'linkedAt' | 'name' | undefined
                query?: string | undefined
                filter?: string | undefined
                expand?: ('maintainer' | 'resourceDetails')[] | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: {
              param: {
                projectKey: string
                viewKey: string
                resourceType: 'flags' | 'segments' | 'aiConfigs'
              }
            } & {
              query: {
                limit?: number | undefined
                offset?: number | undefined
                sort?: 'linkedAt' | 'name' | undefined
                query?: string | undefined
                filter?: string | undefined
                expand?: ('maintainer' | 'resourceDetails')[] | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/api/v2/projects/:projectKey/view-associations/:resourceType/:resourceKey': {
      $get:
        | {
            input: {
              param: {
                projectKey: string
                resourceType: 'flags' | 'segments' | 'aiConfigs'
                resourceKey: string
              }
            } & {
              query: {
                environmentId?: string | undefined
                limit?: number | undefined
                offset?: number | undefined
              }
            }
            output: Views
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              param: {
                projectKey: string
                resourceType: 'flags' | 'segments' | 'aiConfigs'
                resourceKey: string
              }
            } & {
              query: {
                environmentId?: string | undefined
                limit?: number | undefined
                offset?: number | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              param: {
                projectKey: string
                resourceType: 'flags' | 'segments' | 'aiConfigs'
                resourceKey: string
              }
            } & {
              query: {
                environmentId?: string | undefined
                limit?: number | undefined
                offset?: number | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: {
              param: {
                projectKey: string
                resourceType: 'flags' | 'segments' | 'aiConfigs'
                resourceKey: string
              }
            } & {
              query: {
                environmentId?: string | undefined
                limit?: number | undefined
                offset?: number | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: {
              param: {
                projectKey: string
                resourceType: 'flags' | 'segments' | 'aiConfigs'
                resourceKey: string
              }
            } & {
              query: {
                environmentId?: string | undefined
                limit?: number | undefined
                offset?: number | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/api/v2/projects/:projectKey/flags/:flagKey/environments/:environmentKey/releases': {
      $get:
        | {
            input: { param: { projectKey: string; flagKey: string; environmentKey: string } } & {
              query: {
                filter?: string | undefined
                limit?: number | undefined
                offset?: number | undefined
                _snapshot?: string | undefined
              }
            } & { header: { 'LD-API-Version': 'beta' } }
            output: EnvironmentReleaseCollection
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { projectKey: string; flagKey: string; environmentKey: string } } & {
              query: {
                filter?: string | undefined
                limit?: number | undefined
                offset?: number | undefined
                _snapshot?: string | undefined
              }
            } & { header: { 'LD-API-Version': 'beta' } }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { projectKey: string; flagKey: string; environmentKey: string } } & {
              query: {
                filter?: string | undefined
                limit?: number | undefined
                offset?: number | undefined
                _snapshot?: string | undefined
              }
            } & { header: { 'LD-API-Version': 'beta' } }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { projectKey: string; flagKey: string; environmentKey: string } } & {
              query: {
                filter?: string | undefined
                limit?: number | undefined
                offset?: number | undefined
                _snapshot?: string | undefined
              }
            } & { header: { 'LD-API-Version': 'beta' } }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { projectKey: string; flagKey: string; environmentKey: string } } & {
              query: {
                filter?: string | undefined
                limit?: number | undefined
                offset?: number | undefined
                _snapshot?: string | undefined
              }
            } & { header: { 'LD-API-Version': 'beta' } }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { projectKey: string; flagKey: string; environmentKey: string } } & {
              query: {
                filter?: string | undefined
                limit?: number | undefined
                offset?: number | undefined
                _snapshot?: string | undefined
              }
            } & { header: { 'LD-API-Version': 'beta' } }
            output: Error
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { projectKey: string; flagKey: string; environmentKey: string } } & {
              query: {
                filter?: string | undefined
                limit?: number | undefined
                offset?: number | undefined
                _snapshot?: string | undefined
              }
            } & { header: { 'LD-API-Version': 'beta' } }
            output: Error
            outputFormat: 'json'
            status: 500
          }
      $post:
        | {
            input: { param: { projectKey: string; flagKey: string; environmentKey: string } } & {
              header: { 'LD-API-Version': 'beta' }
            } & { json: StartEnvironmentReleaseRequest }
            output: EnvironmentRelease
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { param: { projectKey: string; flagKey: string; environmentKey: string } } & {
              header: { 'LD-API-Version': 'beta' }
            } & { json: StartEnvironmentReleaseRequest }
            output: StartEnvironmentReleaseBadRequest
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { projectKey: string; flagKey: string; environmentKey: string } } & {
              header: { 'LD-API-Version': 'beta' }
            } & { json: StartEnvironmentReleaseRequest }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { projectKey: string; flagKey: string; environmentKey: string } } & {
              header: { 'LD-API-Version': 'beta' }
            } & { json: StartEnvironmentReleaseRequest }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { projectKey: string; flagKey: string; environmentKey: string } } & {
              header: { 'LD-API-Version': 'beta' }
            } & { json: StartEnvironmentReleaseRequest }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { projectKey: string; flagKey: string; environmentKey: string } } & {
              header: { 'LD-API-Version': 'beta' }
            } & { json: StartEnvironmentReleaseRequest }
            output: Error
            outputFormat: 'json'
            status: 405
          }
        | {
            input: { param: { projectKey: string; flagKey: string; environmentKey: string } } & {
              header: { 'LD-API-Version': 'beta' }
            } & { json: StartEnvironmentReleaseRequest }
            output: Error
            outputFormat: 'json'
            status: 409
          }
        | {
            input: { param: { projectKey: string; flagKey: string; environmentKey: string } } & {
              header: { 'LD-API-Version': 'beta' }
            } & { json: StartEnvironmentReleaseRequest }
            output: Error
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { projectKey: string; flagKey: string; environmentKey: string } } & {
              header: { 'LD-API-Version': 'beta' }
            } & { json: StartEnvironmentReleaseRequest }
            output: Error
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { projectKey: string; flagKey: string; environmentKey: string } } & {
              header: { 'LD-API-Version': 'beta' }
            } & { json: StartEnvironmentReleaseRequest }
            output: Error
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/api/v2/projects/:projectKey/flags/:flagKey/environments/:environmentKey/releases/:releaseId': {
      $get:
        | {
            input: {
              param: {
                projectKey: string
                flagKey: string
                environmentKey: string
                releaseId: string
              }
            } & { query: { expand?: 'metrics'[] | undefined } } & {
              header: { 'LD-API-Version': 'beta' }
            }
            output: EnvironmentRelease
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              param: {
                projectKey: string
                flagKey: string
                environmentKey: string
                releaseId: string
              }
            } & { query: { expand?: 'metrics'[] | undefined } } & {
              header: { 'LD-API-Version': 'beta' }
            }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              param: {
                projectKey: string
                flagKey: string
                environmentKey: string
                releaseId: string
              }
            } & { query: { expand?: 'metrics'[] | undefined } } & {
              header: { 'LD-API-Version': 'beta' }
            }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              param: {
                projectKey: string
                flagKey: string
                environmentKey: string
                releaseId: string
              }
            } & { query: { expand?: 'metrics'[] | undefined } } & {
              header: { 'LD-API-Version': 'beta' }
            }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: {
              param: {
                projectKey: string
                flagKey: string
                environmentKey: string
                releaseId: string
              }
            } & { query: { expand?: 'metrics'[] | undefined } } & {
              header: { 'LD-API-Version': 'beta' }
            }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: {
              param: {
                projectKey: string
                flagKey: string
                environmentKey: string
                releaseId: string
              }
            } & { query: { expand?: 'metrics'[] | undefined } } & {
              header: { 'LD-API-Version': 'beta' }
            }
            output: Error
            outputFormat: 'json'
            status: 429
          }
        | {
            input: {
              param: {
                projectKey: string
                flagKey: string
                environmentKey: string
                releaseId: string
              }
            } & { query: { expand?: 'metrics'[] | undefined } } & {
              header: { 'LD-API-Version': 'beta' }
            }
            output: Error
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/api/v2/projects/:projectKey/flags/:flagKey/environments/:environmentKey/releases/:releaseId/stop': {
      $put:
        | {
            input: {
              param: {
                projectKey: string
                flagKey: string
                environmentKey: string
                releaseId: string
              }
            } & { header: { 'LD-API-Version': 'beta' } } & { json: StopEnvironmentReleaseRequest }
            output: EnvironmentRelease
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              param: {
                projectKey: string
                flagKey: string
                environmentKey: string
                releaseId: string
              }
            } & { header: { 'LD-API-Version': 'beta' } } & { json: StopEnvironmentReleaseRequest }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              param: {
                projectKey: string
                flagKey: string
                environmentKey: string
                releaseId: string
              }
            } & { header: { 'LD-API-Version': 'beta' } } & { json: StopEnvironmentReleaseRequest }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              param: {
                projectKey: string
                flagKey: string
                environmentKey: string
                releaseId: string
              }
            } & { header: { 'LD-API-Version': 'beta' } } & { json: StopEnvironmentReleaseRequest }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: {
              param: {
                projectKey: string
                flagKey: string
                environmentKey: string
                releaseId: string
              }
            } & { header: { 'LD-API-Version': 'beta' } } & { json: StopEnvironmentReleaseRequest }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: {
              param: {
                projectKey: string
                flagKey: string
                environmentKey: string
                releaseId: string
              }
            } & { header: { 'LD-API-Version': 'beta' } } & { json: StopEnvironmentReleaseRequest }
            output: Error
            outputFormat: 'json'
            status: 405
          }
        | {
            input: {
              param: {
                projectKey: string
                flagKey: string
                environmentKey: string
                releaseId: string
              }
            } & { header: { 'LD-API-Version': 'beta' } } & { json: StopEnvironmentReleaseRequest }
            output: Error
            outputFormat: 'json'
            status: 409
          }
        | {
            input: {
              param: {
                projectKey: string
                flagKey: string
                environmentKey: string
                releaseId: string
              }
            } & { header: { 'LD-API-Version': 'beta' } } & { json: StopEnvironmentReleaseRequest }
            output: Error
            outputFormat: 'json'
            status: 429
          }
        | {
            input: {
              param: {
                projectKey: string
                flagKey: string
                environmentKey: string
                releaseId: string
              }
            } & { header: { 'LD-API-Version': 'beta' } } & { json: StopEnvironmentReleaseRequest }
            output: Error
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/api/v2/projects/:projectKey/environments/:environmentKey/release-plans': {
      $get:
        | {
            input: { param: { projectKey: string; environmentKey: string } } & {
              query: {
                filter?: string | undefined
                limit?: number | undefined
                offset?: number | undefined
              }
            } & { header: { 'LD-API-Version': 'beta' } }
            output: EnvironmentReleasePlans
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { projectKey: string; environmentKey: string } } & {
              query: {
                filter?: string | undefined
                limit?: number | undefined
                offset?: number | undefined
              }
            } & { header: { 'LD-API-Version': 'beta' } }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { projectKey: string; environmentKey: string } } & {
              query: {
                filter?: string | undefined
                limit?: number | undefined
                offset?: number | undefined
              }
            } & { header: { 'LD-API-Version': 'beta' } }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { projectKey: string; environmentKey: string } } & {
              query: {
                filter?: string | undefined
                limit?: number | undefined
                offset?: number | undefined
              }
            } & { header: { 'LD-API-Version': 'beta' } }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { projectKey: string; environmentKey: string } } & {
              query: {
                filter?: string | undefined
                limit?: number | undefined
                offset?: number | undefined
              }
            } & { header: { 'LD-API-Version': 'beta' } }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { projectKey: string; environmentKey: string } } & {
              query: {
                filter?: string | undefined
                limit?: number | undefined
                offset?: number | undefined
              }
            } & { header: { 'LD-API-Version': 'beta' } }
            output: Error
            outputFormat: 'json'
            status: 500
          }
      $post:
        | {
            input: { param: { projectKey: string; environmentKey: string } } & {
              header: { 'LD-API-Version': 'beta' }
            } & { json: PostEnvironmentReleasePlanRequest }
            output: EnvironmentReleasePlan
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { param: { projectKey: string; environmentKey: string } } & {
              header: { 'LD-API-Version': 'beta' }
            } & { json: PostEnvironmentReleasePlanRequest }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { projectKey: string; environmentKey: string } } & {
              header: { 'LD-API-Version': 'beta' }
            } & { json: PostEnvironmentReleasePlanRequest }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { projectKey: string; environmentKey: string } } & {
              header: { 'LD-API-Version': 'beta' }
            } & { json: PostEnvironmentReleasePlanRequest }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { projectKey: string; environmentKey: string } } & {
              header: { 'LD-API-Version': 'beta' }
            } & { json: PostEnvironmentReleasePlanRequest }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { projectKey: string; environmentKey: string } } & {
              header: { 'LD-API-Version': 'beta' }
            } & { json: PostEnvironmentReleasePlanRequest }
            output: Error
            outputFormat: 'json'
            status: 409
          }
        | {
            input: { param: { projectKey: string; environmentKey: string } } & {
              header: { 'LD-API-Version': 'beta' }
            } & { json: PostEnvironmentReleasePlanRequest }
            output: Error
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/api/v2/projects/:projectKey/environments/:environmentKey/release-plans/:releasePlanKey': {
      $delete:
        | {
            input: {
              param: { projectKey: string; environmentKey: string; releasePlanKey: string }
            } & { header: { 'LD-API-Version': 'beta' } }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: {
              param: { projectKey: string; environmentKey: string; releasePlanKey: string }
            } & { header: { 'LD-API-Version': 'beta' } }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              param: { projectKey: string; environmentKey: string; releasePlanKey: string }
            } & { header: { 'LD-API-Version': 'beta' } }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              param: { projectKey: string; environmentKey: string; releasePlanKey: string }
            } & { header: { 'LD-API-Version': 'beta' } }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: {
              param: { projectKey: string; environmentKey: string; releasePlanKey: string }
            } & { header: { 'LD-API-Version': 'beta' } }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: {
              param: { projectKey: string; environmentKey: string; releasePlanKey: string }
            } & { header: { 'LD-API-Version': 'beta' } }
            output: Error
            outputFormat: 'json'
            status: 409
          }
        | {
            input: {
              param: { projectKey: string; environmentKey: string; releasePlanKey: string }
            } & { header: { 'LD-API-Version': 'beta' } }
            output: Error
            outputFormat: 'json'
            status: 500
          }
      $get:
        | {
            input: {
              param: { projectKey: string; environmentKey: string; releasePlanKey: string }
            } & { header: { 'LD-API-Version': 'beta' } }
            output: EnvironmentReleasePlan
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              param: { projectKey: string; environmentKey: string; releasePlanKey: string }
            } & { header: { 'LD-API-Version': 'beta' } }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              param: { projectKey: string; environmentKey: string; releasePlanKey: string }
            } & { header: { 'LD-API-Version': 'beta' } }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              param: { projectKey: string; environmentKey: string; releasePlanKey: string }
            } & { header: { 'LD-API-Version': 'beta' } }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: {
              param: { projectKey: string; environmentKey: string; releasePlanKey: string }
            } & { header: { 'LD-API-Version': 'beta' } }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: {
              param: { projectKey: string; environmentKey: string; releasePlanKey: string }
            } & { header: { 'LD-API-Version': 'beta' } }
            output: Error
            outputFormat: 'json'
            status: 500
          }
      $put:
        | {
            input: {
              param: { projectKey: string; environmentKey: string; releasePlanKey: string }
            } & { header: { 'LD-API-Version': 'beta' } } & {
              json: PutEnvironmentReleasePlanRequest
            }
            output: EnvironmentReleasePlan
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              param: { projectKey: string; environmentKey: string; releasePlanKey: string }
            } & { header: { 'LD-API-Version': 'beta' } } & {
              json: PutEnvironmentReleasePlanRequest
            }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              param: { projectKey: string; environmentKey: string; releasePlanKey: string }
            } & { header: { 'LD-API-Version': 'beta' } } & {
              json: PutEnvironmentReleasePlanRequest
            }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              param: { projectKey: string; environmentKey: string; releasePlanKey: string }
            } & { header: { 'LD-API-Version': 'beta' } } & {
              json: PutEnvironmentReleasePlanRequest
            }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: {
              param: { projectKey: string; environmentKey: string; releasePlanKey: string }
            } & { header: { 'LD-API-Version': 'beta' } } & {
              json: PutEnvironmentReleasePlanRequest
            }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: {
              param: { projectKey: string; environmentKey: string; releasePlanKey: string }
            } & { header: { 'LD-API-Version': 'beta' } } & {
              json: PutEnvironmentReleasePlanRequest
            }
            output: Error
            outputFormat: 'json'
            status: 409
          }
        | {
            input: {
              param: { projectKey: string; environmentKey: string; releasePlanKey: string }
            } & { header: { 'LD-API-Version': 'beta' } } & {
              json: PutEnvironmentReleasePlanRequest
            }
            output: Error
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/api/v2/projects/:projectKey/environments/:environmentKey/default-release-plan': {
      $delete:
        | {
            input: { param: { projectKey: string; environmentKey: string } } & {
              header: { 'LD-API-Version': 'beta' }
            }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { projectKey: string; environmentKey: string } } & {
              header: { 'LD-API-Version': 'beta' }
            }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { projectKey: string; environmentKey: string } } & {
              header: { 'LD-API-Version': 'beta' }
            }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { projectKey: string; environmentKey: string } } & {
              header: { 'LD-API-Version': 'beta' }
            }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { projectKey: string; environmentKey: string } } & {
              header: { 'LD-API-Version': 'beta' }
            }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { projectKey: string; environmentKey: string } } & {
              header: { 'LD-API-Version': 'beta' }
            }
            output: Error
            outputFormat: 'json'
            status: 500
          }
      $get:
        | {
            input: { param: { projectKey: string; environmentKey: string } } & {
              header: { 'LD-API-Version': 'beta' }
            }
            output: EnvironmentReleasePlan
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { projectKey: string; environmentKey: string } } & {
              header: { 'LD-API-Version': 'beta' }
            }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { projectKey: string; environmentKey: string } } & {
              header: { 'LD-API-Version': 'beta' }
            }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { projectKey: string; environmentKey: string } } & {
              header: { 'LD-API-Version': 'beta' }
            }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { projectKey: string; environmentKey: string } } & {
              header: { 'LD-API-Version': 'beta' }
            }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { projectKey: string; environmentKey: string } } & {
              header: { 'LD-API-Version': 'beta' }
            }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { projectKey: string; environmentKey: string } } & {
              header: { 'LD-API-Version': 'beta' }
            }
            output: Error
            outputFormat: 'json'
            status: 500
          }
      $put:
        | {
            input: { param: { projectKey: string; environmentKey: string } } & {
              header: { 'LD-API-Version': 'beta' }
            } & { json: PutDefaultEnvironmentReleasePlanRequest }
            output: EnvironmentReleasePlan
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { projectKey: string; environmentKey: string } } & {
              header: { 'LD-API-Version': 'beta' }
            } & { json: PutDefaultEnvironmentReleasePlanRequest }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { projectKey: string; environmentKey: string } } & {
              header: { 'LD-API-Version': 'beta' }
            } & { json: PutDefaultEnvironmentReleasePlanRequest }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { projectKey: string; environmentKey: string } } & {
              header: { 'LD-API-Version': 'beta' }
            } & { json: PutDefaultEnvironmentReleasePlanRequest }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { projectKey: string; environmentKey: string } } & {
              header: { 'LD-API-Version': 'beta' }
            } & { json: PutDefaultEnvironmentReleasePlanRequest }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { projectKey: string; environmentKey: string } } & {
              header: { 'LD-API-Version': 'beta' }
            } & { json: PutDefaultEnvironmentReleasePlanRequest }
            output: Error
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/api/v2/projects/:projectKey/flag-release-plans': {
      $get:
        | {
            input: { param: { projectKey: string } } & {
              query: { limit?: number | undefined; offset?: number | undefined }
            } & { header: { 'LD-API-Version': 'beta' } }
            output: ListFlagReleasePlansResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { projectKey: string } } & {
              query: { limit?: number | undefined; offset?: number | undefined }
            } & { header: { 'LD-API-Version': 'beta' } }
            output: FlagReleasePlansError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { projectKey: string } } & {
              query: { limit?: number | undefined; offset?: number | undefined }
            } & { header: { 'LD-API-Version': 'beta' } }
            output: FlagReleasePlansError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { projectKey: string } } & {
              query: { limit?: number | undefined; offset?: number | undefined }
            } & { header: { 'LD-API-Version': 'beta' } }
            output: FlagReleasePlansError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { projectKey: string } } & {
              query: { limit?: number | undefined; offset?: number | undefined }
            } & { header: { 'LD-API-Version': 'beta' } }
            output: FlagReleasePlansError
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { projectKey: string } } & {
              query: { limit?: number | undefined; offset?: number | undefined }
            } & { header: { 'LD-API-Version': 'beta' } }
            output: FlagReleasePlansError
            outputFormat: 'json'
            status: 500
          }
      $post:
        | {
            input: { param: { projectKey: string } } & { header: { 'LD-API-Version': 'beta' } } & {
              json: CreateFlagReleasePlanRequest
            }
            output: FlagReleasePlan
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { param: { projectKey: string } } & { header: { 'LD-API-Version': 'beta' } } & {
              json: CreateFlagReleasePlanRequest
            }
            output: FlagReleasePlansError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { projectKey: string } } & { header: { 'LD-API-Version': 'beta' } } & {
              json: CreateFlagReleasePlanRequest
            }
            output: FlagReleasePlansError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { projectKey: string } } & { header: { 'LD-API-Version': 'beta' } } & {
              json: CreateFlagReleasePlanRequest
            }
            output: FlagReleasePlansError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { projectKey: string } } & { header: { 'LD-API-Version': 'beta' } } & {
              json: CreateFlagReleasePlanRequest
            }
            output: FlagReleasePlansError
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { projectKey: string } } & { header: { 'LD-API-Version': 'beta' } } & {
              json: CreateFlagReleasePlanRequest
            }
            output: FlagReleasePlansError
            outputFormat: 'json'
            status: 409
          }
        | {
            input: { param: { projectKey: string } } & { header: { 'LD-API-Version': 'beta' } } & {
              json: CreateFlagReleasePlanRequest
            }
            output: FlagReleasePlansError
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/api/v2/projects/:projectKey/flag-release-plans/:planKey': {
      $delete:
        | {
            input: { param: { projectKey: string; planKey: string } } & {
              header: { 'LD-API-Version': 'beta' }
            }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { projectKey: string; planKey: string } } & {
              header: { 'LD-API-Version': 'beta' }
            }
            output: FlagReleasePlansError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { projectKey: string; planKey: string } } & {
              header: { 'LD-API-Version': 'beta' }
            }
            output: FlagReleasePlansError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { projectKey: string; planKey: string } } & {
              header: { 'LD-API-Version': 'beta' }
            }
            output: FlagReleasePlansError
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { projectKey: string; planKey: string } } & {
              header: { 'LD-API-Version': 'beta' }
            }
            output: FlagReleasePlansError
            outputFormat: 'json'
            status: 500
          }
      $get:
        | {
            input: { param: { projectKey: string; planKey: string } } & {
              header: { 'LD-API-Version': 'beta' }
            }
            output: FlagReleasePlan
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { projectKey: string; planKey: string } } & {
              header: { 'LD-API-Version': 'beta' }
            }
            output: FlagReleasePlansError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { projectKey: string; planKey: string } } & {
              header: { 'LD-API-Version': 'beta' }
            }
            output: FlagReleasePlansError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { projectKey: string; planKey: string } } & {
              header: { 'LD-API-Version': 'beta' }
            }
            output: FlagReleasePlansError
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { projectKey: string; planKey: string } } & {
              header: { 'LD-API-Version': 'beta' }
            }
            output: FlagReleasePlansError
            outputFormat: 'json'
            status: 500
          }
      $put:
        | {
            input: { param: { projectKey: string; planKey: string } } & {
              header: { 'LD-API-Version': 'beta' }
            } & { json: PutFlagReleasePlanRequest }
            output: FlagReleasePlan
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { projectKey: string; planKey: string } } & {
              header: { 'LD-API-Version': 'beta' }
            } & { json: PutFlagReleasePlanRequest }
            output: FlagReleasePlansError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { projectKey: string; planKey: string } } & {
              header: { 'LD-API-Version': 'beta' }
            } & { json: PutFlagReleasePlanRequest }
            output: FlagReleasePlansError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { projectKey: string; planKey: string } } & {
              header: { 'LD-API-Version': 'beta' }
            } & { json: PutFlagReleasePlanRequest }
            output: FlagReleasePlansError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { projectKey: string; planKey: string } } & {
              header: { 'LD-API-Version': 'beta' }
            } & { json: PutFlagReleasePlanRequest }
            output: FlagReleasePlansError
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { projectKey: string; planKey: string } } & {
              header: { 'LD-API-Version': 'beta' }
            } & { json: PutFlagReleasePlanRequest }
            output: FlagReleasePlansError
            outputFormat: 'json'
            status: 409
          }
        | {
            input: { param: { projectKey: string; planKey: string } } & {
              header: { 'LD-API-Version': 'beta' }
            } & { json: PutFlagReleasePlanRequest }
            output: FlagReleasePlansError
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/api/v2/segments/:projectKey/:environmentKey/:segmentKey/scheduled-changes': {
      $get:
        | {
            input: { param: { projectKey: string; environmentKey: string; segmentKey: string } }
            output: SegmentScheduledChanges
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { projectKey: string; environmentKey: string; segmentKey: string } }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { projectKey: string; environmentKey: string; segmentKey: string } }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { projectKey: string; environmentKey: string; segmentKey: string } }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { projectKey: string; environmentKey: string; segmentKey: string } }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { projectKey: string; environmentKey: string; segmentKey: string } }
            output: Error
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { projectKey: string; environmentKey: string; segmentKey: string } }
            output: Error
            outputFormat: 'json'
            status: 500
          }
      $post:
        | {
            input: { param: { projectKey: string; environmentKey: string; segmentKey: string } } & {
              json: PostSegmentScheduledChangeInput
            }
            output: SegmentScheduledChange
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { param: { projectKey: string; environmentKey: string; segmentKey: string } } & {
              json: PostSegmentScheduledChangeInput
            }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { projectKey: string; environmentKey: string; segmentKey: string } } & {
              json: PostSegmentScheduledChangeInput
            }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { projectKey: string; environmentKey: string; segmentKey: string } } & {
              json: PostSegmentScheduledChangeInput
            }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { projectKey: string; environmentKey: string; segmentKey: string } } & {
              json: PostSegmentScheduledChangeInput
            }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { projectKey: string; environmentKey: string; segmentKey: string } } & {
              json: PostSegmentScheduledChangeInput
            }
            output: Error
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { projectKey: string; environmentKey: string; segmentKey: string } } & {
              json: PostSegmentScheduledChangeInput
            }
            output: Error
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/api/v2/segments/:projectKey/:environmentKey/:segmentKey/scheduled-changes/:id': {
      $delete:
        | {
            input: {
              param: { projectKey: string; environmentKey: string; segmentKey: string; id: string }
            }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: {
              param: { projectKey: string; environmentKey: string; segmentKey: string; id: string }
            }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              param: { projectKey: string; environmentKey: string; segmentKey: string; id: string }
            }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              param: { projectKey: string; environmentKey: string; segmentKey: string; id: string }
            }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: {
              param: { projectKey: string; environmentKey: string; segmentKey: string; id: string }
            }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: {
              param: { projectKey: string; environmentKey: string; segmentKey: string; id: string }
            }
            output: Error
            outputFormat: 'json'
            status: 409
          }
        | {
            input: {
              param: { projectKey: string; environmentKey: string; segmentKey: string; id: string }
            }
            output: Error
            outputFormat: 'json'
            status: 429
          }
        | {
            input: {
              param: { projectKey: string; environmentKey: string; segmentKey: string; id: string }
            }
            output: Error
            outputFormat: 'json'
            status: 500
          }
      $get:
        | {
            input: {
              param: { projectKey: string; environmentKey: string; segmentKey: string; id: string }
            }
            output: SegmentScheduledChange
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              param: { projectKey: string; environmentKey: string; segmentKey: string; id: string }
            }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              param: { projectKey: string; environmentKey: string; segmentKey: string; id: string }
            }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              param: { projectKey: string; environmentKey: string; segmentKey: string; id: string }
            }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: {
              param: { projectKey: string; environmentKey: string; segmentKey: string; id: string }
            }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: {
              param: { projectKey: string; environmentKey: string; segmentKey: string; id: string }
            }
            output: Error
            outputFormat: 'json'
            status: 429
          }
        | {
            input: {
              param: { projectKey: string; environmentKey: string; segmentKey: string; id: string }
            }
            output: Error
            outputFormat: 'json'
            status: 500
          }
      $patch:
        | {
            input: {
              param: { projectKey: string; environmentKey: string; segmentKey: string; id: string }
            } & { json: PatchSegmentScheduledChangeInput }
            output: SegmentScheduledChange
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              param: { projectKey: string; environmentKey: string; segmentKey: string; id: string }
            } & { json: PatchSegmentScheduledChangeInput }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              param: { projectKey: string; environmentKey: string; segmentKey: string; id: string }
            } & { json: PatchSegmentScheduledChangeInput }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              param: { projectKey: string; environmentKey: string; segmentKey: string; id: string }
            } & { json: PatchSegmentScheduledChangeInput }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: {
              param: { projectKey: string; environmentKey: string; segmentKey: string; id: string }
            } & { json: PatchSegmentScheduledChangeInput }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: {
              param: { projectKey: string; environmentKey: string; segmentKey: string; id: string }
            } & { json: PatchSegmentScheduledChangeInput }
            output: Error
            outputFormat: 'json'
            status: 409
          }
        | {
            input: {
              param: { projectKey: string; environmentKey: string; segmentKey: string; id: string }
            } & { json: PatchSegmentScheduledChangeInput }
            output: Error
            outputFormat: 'json'
            status: 429
          }
        | {
            input: {
              param: { projectKey: string; environmentKey: string; segmentKey: string; id: string }
            } & { json: PatchSegmentScheduledChangeInput }
            output: Error
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/api/v2/account/ip-allowlist': {
      $get:
        | {
            input: {
              query: {
                search?: string | undefined
                limit?: number | undefined
                offset?: number | undefined
              }
            }
            output: IpAllowlistResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                search?: string | undefined
                limit?: number | undefined
                offset?: number | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              query: {
                search?: string | undefined
                limit?: number | undefined
                offset?: number | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: {
              query: {
                search?: string | undefined
                limit?: number | undefined
                offset?: number | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 500
          }
      $patch:
        | {
            input: { json: PatchIpAllowlistConfigRequest }
            output: IpAllowlistResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: PatchIpAllowlistConfigRequest }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { json: PatchIpAllowlistConfigRequest }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { json: PatchIpAllowlistConfigRequest }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { json: PatchIpAllowlistConfigRequest }
            output: Error
            outputFormat: 'json'
            status: 409
          }
        | {
            input: { json: PatchIpAllowlistConfigRequest }
            output: Error
            outputFormat: 'json'
            status: 500
          }
      $post:
        | {
            input: { json: CreateIpAllowlistEntryRequest }
            output: IpAllowlistEntryResponse
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { json: CreateIpAllowlistEntryRequest }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { json: CreateIpAllowlistEntryRequest }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { json: CreateIpAllowlistEntryRequest }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { json: CreateIpAllowlistEntryRequest }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { json: CreateIpAllowlistEntryRequest }
            output: Error
            outputFormat: 'json'
            status: 409
          }
        | {
            input: { json: CreateIpAllowlistEntryRequest }
            output: Error
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/api/v2/account/ip-allowlist/:id': {
      $delete:
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 204 }
        | { input: { param: { id: string } }; output: Error; outputFormat: 'json'; status: 400 }
        | { input: { param: { id: string } }; output: Error; outputFormat: 'json'; status: 401 }
        | { input: { param: { id: string } }; output: Error; outputFormat: 'json'; status: 403 }
        | { input: { param: { id: string } }; output: Error; outputFormat: 'json'; status: 404 }
        | { input: { param: { id: string } }; output: Error; outputFormat: 'json'; status: 409 }
        | { input: { param: { id: string } }; output: Error; outputFormat: 'json'; status: 500 }
      $patch:
        | {
            input: { param: { id: string } } & { json: PatchIpAllowlistEntryRequest }
            output: IpAllowlistEntryResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & { json: PatchIpAllowlistEntryRequest }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { id: string } } & { json: PatchIpAllowlistEntryRequest }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: string } } & { json: PatchIpAllowlistEntryRequest }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: string } } & { json: PatchIpAllowlistEntryRequest }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { id: string } } & { json: PatchIpAllowlistEntryRequest }
            output: Error
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/api/v2/projects/:projectKey/sdk-keys': {
      $get:
        | {
            input: { param: { projectKey: string } } & {
              query: {
                filter?: string | undefined
                limit?: number | undefined
                offset?: number | undefined
                expand?: string | undefined
                sort?: 'createdAt' | '-createdAt' | 'environmentKey' | undefined
              }
            } & { header: { 'LD-API-Version': 'beta' } }
            output: SdkKeys
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { projectKey: string } } & {
              query: {
                filter?: string | undefined
                limit?: number | undefined
                offset?: number | undefined
                expand?: string | undefined
                sort?: 'createdAt' | '-createdAt' | 'environmentKey' | undefined
              }
            } & { header: { 'LD-API-Version': 'beta' } }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { projectKey: string } } & {
              query: {
                filter?: string | undefined
                limit?: number | undefined
                offset?: number | undefined
                expand?: string | undefined
                sort?: 'createdAt' | '-createdAt' | 'environmentKey' | undefined
              }
            } & { header: { 'LD-API-Version': 'beta' } }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { projectKey: string } } & {
              query: {
                filter?: string | undefined
                limit?: number | undefined
                offset?: number | undefined
                expand?: string | undefined
                sort?: 'createdAt' | '-createdAt' | 'environmentKey' | undefined
              }
            } & { header: { 'LD-API-Version': 'beta' } }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { projectKey: string } } & {
              query: {
                filter?: string | undefined
                limit?: number | undefined
                offset?: number | undefined
                expand?: string | undefined
                sort?: 'createdAt' | '-createdAt' | 'environmentKey' | undefined
              }
            } & { header: { 'LD-API-Version': 'beta' } }
            output: Error
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/api/v2/projects/:projectKey/environments/:environmentKey/sdk-keys': {
      $get:
        | {
            input: { param: { projectKey: string; environmentKey: string } } & {
              query: {
                filter?: string | undefined
                limit?: number | undefined
                offset?: number | undefined
                sort?: 'createdAt' | '-createdAt' | undefined
              }
            } & { header: { 'LD-API-Version': 'beta' } }
            output: SdkKeysForGetSdkKeys
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { projectKey: string; environmentKey: string } } & {
              query: {
                filter?: string | undefined
                limit?: number | undefined
                offset?: number | undefined
                sort?: 'createdAt' | '-createdAt' | undefined
              }
            } & { header: { 'LD-API-Version': 'beta' } }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { projectKey: string; environmentKey: string } } & {
              query: {
                filter?: string | undefined
                limit?: number | undefined
                offset?: number | undefined
                sort?: 'createdAt' | '-createdAt' | undefined
              }
            } & { header: { 'LD-API-Version': 'beta' } }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { projectKey: string; environmentKey: string } } & {
              query: {
                filter?: string | undefined
                limit?: number | undefined
                offset?: number | undefined
                sort?: 'createdAt' | '-createdAt' | undefined
              }
            } & { header: { 'LD-API-Version': 'beta' } }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { projectKey: string; environmentKey: string } } & {
              query: {
                filter?: string | undefined
                limit?: number | undefined
                offset?: number | undefined
                sort?: 'createdAt' | '-createdAt' | undefined
              }
            } & { header: { 'LD-API-Version': 'beta' } }
            output: Error
            outputFormat: 'json'
            status: 500
          }
      $post:
        | {
            input: { param: { projectKey: string; environmentKey: string } } & {
              header: { 'LD-API-Version': 'beta' }
            } & { json: SdkKeyPost }
            output: SdkKey
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { param: { projectKey: string; environmentKey: string } } & {
              header: { 'LD-API-Version': 'beta' }
            } & { json: SdkKeyPost }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { projectKey: string; environmentKey: string } } & {
              header: { 'LD-API-Version': 'beta' }
            } & { json: SdkKeyPost }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { projectKey: string; environmentKey: string } } & {
              header: { 'LD-API-Version': 'beta' }
            } & { json: SdkKeyPost }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { projectKey: string; environmentKey: string } } & {
              header: { 'LD-API-Version': 'beta' }
            } & { json: SdkKeyPost }
            output: Error
            outputFormat: 'json'
            status: 409
          }
        | {
            input: { param: { projectKey: string; environmentKey: string } } & {
              header: { 'LD-API-Version': 'beta' }
            } & { json: SdkKeyPost }
            output: Error
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/api/v2/projects/:projectKey/environments/:environmentKey/sdk-keys/:sdkKeyKey': {
      $delete:
        | {
            input: { param: { projectKey: string; environmentKey: string; sdkKeyKey: string } } & {
              header: { 'LD-API-Version': 'beta' }
            }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { projectKey: string; environmentKey: string; sdkKeyKey: string } } & {
              header: { 'LD-API-Version': 'beta' }
            }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { projectKey: string; environmentKey: string; sdkKeyKey: string } } & {
              header: { 'LD-API-Version': 'beta' }
            }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { projectKey: string; environmentKey: string; sdkKeyKey: string } } & {
              header: { 'LD-API-Version': 'beta' }
            }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { projectKey: string; environmentKey: string; sdkKeyKey: string } } & {
              header: { 'LD-API-Version': 'beta' }
            }
            output: Error
            outputFormat: 'json'
            status: 409
          }
        | {
            input: { param: { projectKey: string; environmentKey: string; sdkKeyKey: string } } & {
              header: { 'LD-API-Version': 'beta' }
            }
            output: Error
            outputFormat: 'json'
            status: 500
          }
      $get:
        | {
            input: { param: { projectKey: string; environmentKey: string; sdkKeyKey: string } } & {
              header: { 'LD-API-Version': 'beta' }
            }
            output: SdkKey
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { projectKey: string; environmentKey: string; sdkKeyKey: string } } & {
              header: { 'LD-API-Version': 'beta' }
            }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { projectKey: string; environmentKey: string; sdkKeyKey: string } } & {
              header: { 'LD-API-Version': 'beta' }
            }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { projectKey: string; environmentKey: string; sdkKeyKey: string } } & {
              header: { 'LD-API-Version': 'beta' }
            }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { projectKey: string; environmentKey: string; sdkKeyKey: string } } & {
              header: { 'LD-API-Version': 'beta' }
            }
            output: Error
            outputFormat: 'json'
            status: 500
          }
      $patch:
        | {
            input: { param: { projectKey: string; environmentKey: string; sdkKeyKey: string } } & {
              query: { version?: number | undefined }
            } & { header: { 'LD-API-Version': 'beta' } } & { json: SdkKeyPatch }
            output: SdkKey
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { projectKey: string; environmentKey: string; sdkKeyKey: string } } & {
              query: { version?: number | undefined }
            } & { header: { 'LD-API-Version': 'beta' } } & { json: SdkKeyPatch }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { projectKey: string; environmentKey: string; sdkKeyKey: string } } & {
              query: { version?: number | undefined }
            } & { header: { 'LD-API-Version': 'beta' } } & { json: SdkKeyPatch }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { projectKey: string; environmentKey: string; sdkKeyKey: string } } & {
              query: { version?: number | undefined }
            } & { header: { 'LD-API-Version': 'beta' } } & { json: SdkKeyPatch }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { projectKey: string; environmentKey: string; sdkKeyKey: string } } & {
              query: { version?: number | undefined }
            } & { header: { 'LD-API-Version': 'beta' } } & { json: SdkKeyPatch }
            output: Error
            outputFormat: 'json'
            status: 409
          }
        | {
            input: { param: { projectKey: string; environmentKey: string; sdkKeyKey: string } } & {
              query: { version?: number | undefined }
            } & { header: { 'LD-API-Version': 'beta' } } & { json: SdkKeyPatch }
            output: Error
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/api/v2/projects/:projectKey/environments/:environmentKey/sdk-keys/:sdkKeyKey/views': {
      $put:
        | {
            input: { param: { projectKey: string; environmentKey: string; sdkKeyKey: string } } & {
              query: { expand?: string | undefined }
            } & { header: { 'LD-API-Version': 'beta' } } & { json: SdkKeyViewsPut }
            output: SdkKeyForPutSdkKeyViews
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { projectKey: string; environmentKey: string; sdkKeyKey: string } } & {
              query: { expand?: string | undefined }
            } & { header: { 'LD-API-Version': 'beta' } } & { json: SdkKeyViewsPut }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { projectKey: string; environmentKey: string; sdkKeyKey: string } } & {
              query: { expand?: string | undefined }
            } & { header: { 'LD-API-Version': 'beta' } } & { json: SdkKeyViewsPut }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { projectKey: string; environmentKey: string; sdkKeyKey: string } } & {
              query: { expand?: string | undefined }
            } & { header: { 'LD-API-Version': 'beta' } } & { json: SdkKeyViewsPut }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { projectKey: string; environmentKey: string; sdkKeyKey: string } } & {
              query: { expand?: string | undefined }
            } & { header: { 'LD-API-Version': 'beta' } } & { json: SdkKeyViewsPut }
            output: Error
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/api/v2/projects/:projectKey/environments/:environmentKey/adaptive-triggers': {
      $get:
        | {
            input: { param: { projectKey: string; environmentKey: string } } & {
              query: {
                resourceKind: AdaptiveTriggerResourceKind
                resourceKey: string
                limit?: number | undefined
                offset?: number | undefined
              }
            }
            output: AdaptiveTriggers
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { projectKey: string; environmentKey: string } } & {
              query: {
                resourceKind: AdaptiveTriggerResourceKind
                resourceKey: string
                limit?: number | undefined
                offset?: number | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { projectKey: string; environmentKey: string } } & {
              query: {
                resourceKind: AdaptiveTriggerResourceKind
                resourceKey: string
                limit?: number | undefined
                offset?: number | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { projectKey: string; environmentKey: string } } & {
              query: {
                resourceKind: AdaptiveTriggerResourceKind
                resourceKey: string
                limit?: number | undefined
                offset?: number | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { projectKey: string; environmentKey: string } } & {
              query: {
                resourceKind: AdaptiveTriggerResourceKind
                resourceKey: string
                limit?: number | undefined
                offset?: number | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { projectKey: string; environmentKey: string } } & {
              query: {
                resourceKind: AdaptiveTriggerResourceKind
                resourceKey: string
                limit?: number | undefined
                offset?: number | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 500
          }
      $post:
        | {
            input: { param: { projectKey: string; environmentKey: string } } & {
              json: CreateAdaptiveTriggerRequest
            }
            output: AdaptiveTrigger
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { param: { projectKey: string; environmentKey: string } } & {
              json: CreateAdaptiveTriggerRequest
            }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { projectKey: string; environmentKey: string } } & {
              json: CreateAdaptiveTriggerRequest
            }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { projectKey: string; environmentKey: string } } & {
              json: CreateAdaptiveTriggerRequest
            }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { projectKey: string; environmentKey: string } } & {
              json: CreateAdaptiveTriggerRequest
            }
            output: Error
            outputFormat: 'json'
            status: 409
          }
        | {
            input: { param: { projectKey: string; environmentKey: string } } & {
              json: CreateAdaptiveTriggerRequest
            }
            output: Error
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { projectKey: string; environmentKey: string } } & {
              json: CreateAdaptiveTriggerRequest
            }
            output: Error
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/api/v2/projects/:projectKey/environments/:environmentKey/adaptive-triggers/:triggerID': {
      $delete:
        | {
            input: { param: { projectKey: string; environmentKey: string; triggerID: string } }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { projectKey: string; environmentKey: string; triggerID: string } }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { projectKey: string; environmentKey: string; triggerID: string } }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { projectKey: string; environmentKey: string; triggerID: string } }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { projectKey: string; environmentKey: string; triggerID: string } }
            output: Error
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { projectKey: string; environmentKey: string; triggerID: string } }
            output: Error
            outputFormat: 'json'
            status: 500
          }
      $get:
        | {
            input: { param: { projectKey: string; environmentKey: string; triggerID: string } }
            output: AdaptiveTrigger
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { projectKey: string; environmentKey: string; triggerID: string } }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { projectKey: string; environmentKey: string; triggerID: string } }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { projectKey: string; environmentKey: string; triggerID: string } }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { projectKey: string; environmentKey: string; triggerID: string } }
            output: Error
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { projectKey: string; environmentKey: string; triggerID: string } }
            output: Error
            outputFormat: 'json'
            status: 500
          }
      $patch:
        | {
            input: { param: { projectKey: string; environmentKey: string; triggerID: string } } & {
              json: UpdateAdaptiveTriggerRequest
            }
            output: AdaptiveTrigger
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { projectKey: string; environmentKey: string; triggerID: string } } & {
              json: UpdateAdaptiveTriggerRequest
            }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { projectKey: string; environmentKey: string; triggerID: string } } & {
              json: UpdateAdaptiveTriggerRequest
            }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { projectKey: string; environmentKey: string; triggerID: string } } & {
              json: UpdateAdaptiveTriggerRequest
            }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { projectKey: string; environmentKey: string; triggerID: string } } & {
              json: UpdateAdaptiveTriggerRequest
            }
            output: Error
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { projectKey: string; environmentKey: string; triggerID: string } } & {
              json: UpdateAdaptiveTriggerRequest
            }
            output: Error
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/api/v2/projects/:projectKey/environments/:environmentKey/adaptive-triggers/:triggerID/enable': {
      $post:
        | {
            input: { param: { projectKey: string; environmentKey: string; triggerID: string } }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { projectKey: string; environmentKey: string; triggerID: string } }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { projectKey: string; environmentKey: string; triggerID: string } }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { projectKey: string; environmentKey: string; triggerID: string } }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { projectKey: string; environmentKey: string; triggerID: string } }
            output: Error
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { projectKey: string; environmentKey: string; triggerID: string } }
            output: Error
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/api/v2/projects/:projectKey/environments/:environmentKey/adaptive-triggers/:triggerID/disable': {
      $post:
        | {
            input: { param: { projectKey: string; environmentKey: string; triggerID: string } }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { projectKey: string; environmentKey: string; triggerID: string } }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { projectKey: string; environmentKey: string; triggerID: string } }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { projectKey: string; environmentKey: string; triggerID: string } }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { projectKey: string; environmentKey: string; triggerID: string } }
            output: Error
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { projectKey: string; environmentKey: string; triggerID: string } }
            output: Error
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/api/v2/engineering-insights/charts/deployments/frequency': {
      $get:
        | {
            input: {
              query: {
                projectKey?: string | undefined
                environmentKey?: string | undefined
                applicationKey?: string | undefined
                from?: string | undefined
                to?: string | undefined
                bucketType?: string | undefined
                bucketMs?: bigint | undefined
                groupBy?: string | undefined
                expand?: string | undefined
              }
            }
            output: InsightsChart
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                projectKey?: string | undefined
                environmentKey?: string | undefined
                applicationKey?: string | undefined
                from?: string | undefined
                to?: string | undefined
                bucketType?: string | undefined
                bucketMs?: bigint | undefined
                groupBy?: string | undefined
                expand?: string | undefined
              }
            }
            output: ValidationFailedErrorRep
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                projectKey?: string | undefined
                environmentKey?: string | undefined
                applicationKey?: string | undefined
                from?: string | undefined
                to?: string | undefined
                bucketType?: string | undefined
                bucketMs?: bigint | undefined
                groupBy?: string | undefined
                expand?: string | undefined
              }
            }
            output: UnauthorizedErrorRep
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              query: {
                projectKey?: string | undefined
                environmentKey?: string | undefined
                applicationKey?: string | undefined
                from?: string | undefined
                to?: string | undefined
                bucketType?: string | undefined
                bucketMs?: bigint | undefined
                groupBy?: string | undefined
                expand?: string | undefined
              }
            }
            output: ForbiddenErrorRep
            outputFormat: 'json'
            status: 403
          }
        | {
            input: {
              query: {
                projectKey?: string | undefined
                environmentKey?: string | undefined
                applicationKey?: string | undefined
                from?: string | undefined
                to?: string | undefined
                bucketType?: string | undefined
                bucketMs?: bigint | undefined
                groupBy?: string | undefined
                expand?: string | undefined
              }
            }
            output: NotFoundErrorRep
            outputFormat: 'json'
            status: 404
          }
        | {
            input: {
              query: {
                projectKey?: string | undefined
                environmentKey?: string | undefined
                applicationKey?: string | undefined
                from?: string | undefined
                to?: string | undefined
                bucketType?: string | undefined
                bucketMs?: bigint | undefined
                groupBy?: string | undefined
                expand?: string | undefined
              }
            }
            output: RateLimitedErrorRep
            outputFormat: 'json'
            status: 429
          }
    }
  } & {
    '/api/v2/engineering-insights/charts/flags/stale': {
      $get:
        | {
            input: {
              query: {
                projectKey: string
                environmentKey: string
                applicationKey?: string | undefined
                groupBy?: string | undefined
                maintainerId?: string | undefined
                maintainerTeamKey?: string | undefined
                expand?: string | undefined
              }
            }
            output: InsightsChart
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                projectKey: string
                environmentKey: string
                applicationKey?: string | undefined
                groupBy?: string | undefined
                maintainerId?: string | undefined
                maintainerTeamKey?: string | undefined
                expand?: string | undefined
              }
            }
            output: ValidationFailedErrorRep
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                projectKey: string
                environmentKey: string
                applicationKey?: string | undefined
                groupBy?: string | undefined
                maintainerId?: string | undefined
                maintainerTeamKey?: string | undefined
                expand?: string | undefined
              }
            }
            output: UnauthorizedErrorRep
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              query: {
                projectKey: string
                environmentKey: string
                applicationKey?: string | undefined
                groupBy?: string | undefined
                maintainerId?: string | undefined
                maintainerTeamKey?: string | undefined
                expand?: string | undefined
              }
            }
            output: ForbiddenErrorRep
            outputFormat: 'json'
            status: 403
          }
        | {
            input: {
              query: {
                projectKey: string
                environmentKey: string
                applicationKey?: string | undefined
                groupBy?: string | undefined
                maintainerId?: string | undefined
                maintainerTeamKey?: string | undefined
                expand?: string | undefined
              }
            }
            output: NotFoundErrorRep
            outputFormat: 'json'
            status: 404
          }
        | {
            input: {
              query: {
                projectKey: string
                environmentKey: string
                applicationKey?: string | undefined
                groupBy?: string | undefined
                maintainerId?: string | undefined
                maintainerTeamKey?: string | undefined
                expand?: string | undefined
              }
            }
            output: RateLimitedErrorRep
            outputFormat: 'json'
            status: 429
          }
    }
  } & {
    '/api/v2/engineering-insights/charts/flags/status': {
      $get:
        | {
            input: {
              query: {
                projectKey: string
                environmentKey: string
                applicationKey?: string | undefined
              }
            }
            output: InsightsChart
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                projectKey: string
                environmentKey: string
                applicationKey?: string | undefined
              }
            }
            output: ValidationFailedErrorRep
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                projectKey: string
                environmentKey: string
                applicationKey?: string | undefined
              }
            }
            output: UnauthorizedErrorRep
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              query: {
                projectKey: string
                environmentKey: string
                applicationKey?: string | undefined
              }
            }
            output: ForbiddenErrorRep
            outputFormat: 'json'
            status: 403
          }
        | {
            input: {
              query: {
                projectKey: string
                environmentKey: string
                applicationKey?: string | undefined
              }
            }
            output: NotFoundErrorRep
            outputFormat: 'json'
            status: 404
          }
        | {
            input: {
              query: {
                projectKey: string
                environmentKey: string
                applicationKey?: string | undefined
              }
            }
            output: RateLimitedErrorRep
            outputFormat: 'json'
            status: 429
          }
    }
  } & {
    '/api/v2/engineering-insights/charts/lead-time': {
      $get:
        | {
            input: {
              query: {
                projectKey: string
                environmentKey?: string | undefined
                applicationKey?: string | undefined
                from?: bigint | undefined
                to?: bigint | undefined
                bucketType?: string | undefined
                bucketMs?: bigint | undefined
                groupBy?: string | undefined
                expand?: string | undefined
              }
            }
            output: InsightsChart
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                projectKey: string
                environmentKey?: string | undefined
                applicationKey?: string | undefined
                from?: bigint | undefined
                to?: bigint | undefined
                bucketType?: string | undefined
                bucketMs?: bigint | undefined
                groupBy?: string | undefined
                expand?: string | undefined
              }
            }
            output: ValidationFailedErrorRep
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                projectKey: string
                environmentKey?: string | undefined
                applicationKey?: string | undefined
                from?: bigint | undefined
                to?: bigint | undefined
                bucketType?: string | undefined
                bucketMs?: bigint | undefined
                groupBy?: string | undefined
                expand?: string | undefined
              }
            }
            output: UnauthorizedErrorRep
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              query: {
                projectKey: string
                environmentKey?: string | undefined
                applicationKey?: string | undefined
                from?: bigint | undefined
                to?: bigint | undefined
                bucketType?: string | undefined
                bucketMs?: bigint | undefined
                groupBy?: string | undefined
                expand?: string | undefined
              }
            }
            output: ForbiddenErrorRep
            outputFormat: 'json'
            status: 403
          }
        | {
            input: {
              query: {
                projectKey: string
                environmentKey?: string | undefined
                applicationKey?: string | undefined
                from?: bigint | undefined
                to?: bigint | undefined
                bucketType?: string | undefined
                bucketMs?: bigint | undefined
                groupBy?: string | undefined
                expand?: string | undefined
              }
            }
            output: NotFoundErrorRep
            outputFormat: 'json'
            status: 404
          }
        | {
            input: {
              query: {
                projectKey: string
                environmentKey?: string | undefined
                applicationKey?: string | undefined
                from?: bigint | undefined
                to?: bigint | undefined
                bucketType?: string | undefined
                bucketMs?: bigint | undefined
                groupBy?: string | undefined
                expand?: string | undefined
              }
            }
            output: RateLimitedErrorRep
            outputFormat: 'json'
            status: 429
          }
    }
  } & {
    '/api/v2/engineering-insights/charts/releases/frequency': {
      $get:
        | {
            input: {
              query: {
                projectKey: string
                environmentKey: string
                applicationKey?: string | undefined
                hasExperiments?: boolean | undefined
                global?: string | undefined
                groupBy?: string | undefined
                from?: string | undefined
                to?: string | undefined
                bucketType?: string | undefined
                bucketMs?: bigint | undefined
                expand?: string | undefined
              }
            }
            output: InsightsChart
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                projectKey: string
                environmentKey: string
                applicationKey?: string | undefined
                hasExperiments?: boolean | undefined
                global?: string | undefined
                groupBy?: string | undefined
                from?: string | undefined
                to?: string | undefined
                bucketType?: string | undefined
                bucketMs?: bigint | undefined
                expand?: string | undefined
              }
            }
            output: ValidationFailedErrorRep
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                projectKey: string
                environmentKey: string
                applicationKey?: string | undefined
                hasExperiments?: boolean | undefined
                global?: string | undefined
                groupBy?: string | undefined
                from?: string | undefined
                to?: string | undefined
                bucketType?: string | undefined
                bucketMs?: bigint | undefined
                expand?: string | undefined
              }
            }
            output: UnauthorizedErrorRep
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              query: {
                projectKey: string
                environmentKey: string
                applicationKey?: string | undefined
                hasExperiments?: boolean | undefined
                global?: string | undefined
                groupBy?: string | undefined
                from?: string | undefined
                to?: string | undefined
                bucketType?: string | undefined
                bucketMs?: bigint | undefined
                expand?: string | undefined
              }
            }
            output: ForbiddenErrorRep
            outputFormat: 'json'
            status: 403
          }
        | {
            input: {
              query: {
                projectKey: string
                environmentKey: string
                applicationKey?: string | undefined
                hasExperiments?: boolean | undefined
                global?: string | undefined
                groupBy?: string | undefined
                from?: string | undefined
                to?: string | undefined
                bucketType?: string | undefined
                bucketMs?: bigint | undefined
                expand?: string | undefined
              }
            }
            output: NotFoundErrorRep
            outputFormat: 'json'
            status: 404
          }
        | {
            input: {
              query: {
                projectKey: string
                environmentKey: string
                applicationKey?: string | undefined
                hasExperiments?: boolean | undefined
                global?: string | undefined
                groupBy?: string | undefined
                from?: string | undefined
                to?: string | undefined
                bucketType?: string | undefined
                bucketMs?: bigint | undefined
                expand?: string | undefined
              }
            }
            output: RateLimitedErrorRep
            outputFormat: 'json'
            status: 429
          }
    }
  } & {
    '/api/v2/engineering-insights/deployment-events': {
      $post:
        | {
            input: { json: PostDeploymentEventInput }
            output: {}
            outputFormat: string
            status: 201
          }
        | {
            input: { json: PostDeploymentEventInput }
            output: ValidationFailedErrorRep
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { json: PostDeploymentEventInput }
            output: UnauthorizedErrorRep
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { json: PostDeploymentEventInput }
            output: ForbiddenErrorRep
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { json: PostDeploymentEventInput }
            output: NotFoundErrorRep
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { json: PostDeploymentEventInput }
            output: RateLimitedErrorRep
            outputFormat: 'json'
            status: 429
          }
    }
  } & {
    '/api/v2/engineering-insights/deployments': {
      $get:
        | {
            input: {
              query: {
                projectKey: string
                environmentKey: string
                applicationKey?: string | undefined
                limit?: bigint | undefined
                expand?: string | undefined
                from?: bigint | undefined
                to?: bigint | undefined
                after?: string | undefined
                before?: string | undefined
                kind?: string | undefined
                status?: string | undefined
              }
            }
            output: DeploymentCollectionRep
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                projectKey: string
                environmentKey: string
                applicationKey?: string | undefined
                limit?: bigint | undefined
                expand?: string | undefined
                from?: bigint | undefined
                to?: bigint | undefined
                after?: string | undefined
                before?: string | undefined
                kind?: string | undefined
                status?: string | undefined
              }
            }
            output: ValidationFailedErrorRep
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                projectKey: string
                environmentKey: string
                applicationKey?: string | undefined
                limit?: bigint | undefined
                expand?: string | undefined
                from?: bigint | undefined
                to?: bigint | undefined
                after?: string | undefined
                before?: string | undefined
                kind?: string | undefined
                status?: string | undefined
              }
            }
            output: UnauthorizedErrorRep
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              query: {
                projectKey: string
                environmentKey: string
                applicationKey?: string | undefined
                limit?: bigint | undefined
                expand?: string | undefined
                from?: bigint | undefined
                to?: bigint | undefined
                after?: string | undefined
                before?: string | undefined
                kind?: string | undefined
                status?: string | undefined
              }
            }
            output: ForbiddenErrorRep
            outputFormat: 'json'
            status: 403
          }
        | {
            input: {
              query: {
                projectKey: string
                environmentKey: string
                applicationKey?: string | undefined
                limit?: bigint | undefined
                expand?: string | undefined
                from?: bigint | undefined
                to?: bigint | undefined
                after?: string | undefined
                before?: string | undefined
                kind?: string | undefined
                status?: string | undefined
              }
            }
            output: NotFoundErrorRep
            outputFormat: 'json'
            status: 404
          }
        | {
            input: {
              query: {
                projectKey: string
                environmentKey: string
                applicationKey?: string | undefined
                limit?: bigint | undefined
                expand?: string | undefined
                from?: bigint | undefined
                to?: bigint | undefined
                after?: string | undefined
                before?: string | undefined
                kind?: string | undefined
                status?: string | undefined
              }
            }
            output: RateLimitedErrorRep
            outputFormat: 'json'
            status: 429
          }
    }
  } & {
    '/api/v2/engineering-insights/deployments/:deploymentID': {
      $get:
        | {
            input: { param: { deploymentID: string } } & { query: { expand?: string | undefined } }
            output: DeploymentRep
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { deploymentID: string } } & { query: { expand?: string | undefined } }
            output: ValidationFailedErrorRep
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { deploymentID: string } } & { query: { expand?: string | undefined } }
            output: UnauthorizedErrorRep
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { deploymentID: string } } & { query: { expand?: string | undefined } }
            output: ForbiddenErrorRep
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { deploymentID: string } } & { query: { expand?: string | undefined } }
            output: NotFoundErrorRep
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { deploymentID: string } } & { query: { expand?: string | undefined } }
            output: RateLimitedErrorRep
            outputFormat: 'json'
            status: 429
          }
      $patch:
        | {
            input: { param: { deploymentID: string } } & { json: JSONPatch }
            output: DeploymentRep
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { deploymentID: string } } & { json: JSONPatch }
            output: ValidationFailedErrorRep
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { deploymentID: string } } & { json: JSONPatch }
            output: UnauthorizedErrorRep
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { deploymentID: string } } & { json: JSONPatch }
            output: ForbiddenErrorRep
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { deploymentID: string } } & { json: JSONPatch }
            output: NotFoundErrorRep
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { deploymentID: string } } & { json: JSONPatch }
            output: RateLimitedErrorRep
            outputFormat: 'json'
            status: 429
          }
    }
  } & {
    '/api/v2/engineering-insights/flag-events': {
      $get:
        | {
            input: {
              query: {
                projectKey: string
                environmentKey: string
                applicationKey?: string | undefined
                query?: string | undefined
                impactSize?: string | undefined
                hasExperiments?: boolean | undefined
                global?: string | undefined
                expand?: string | undefined
                limit?: bigint | undefined
                from?: bigint | undefined
                to?: bigint | undefined
                after?: string | undefined
                before?: string | undefined
              }
            }
            output: FlagEventCollectionRep
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                projectKey: string
                environmentKey: string
                applicationKey?: string | undefined
                query?: string | undefined
                impactSize?: string | undefined
                hasExperiments?: boolean | undefined
                global?: string | undefined
                expand?: string | undefined
                limit?: bigint | undefined
                from?: bigint | undefined
                to?: bigint | undefined
                after?: string | undefined
                before?: string | undefined
              }
            }
            output: ValidationFailedErrorRep
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                projectKey: string
                environmentKey: string
                applicationKey?: string | undefined
                query?: string | undefined
                impactSize?: string | undefined
                hasExperiments?: boolean | undefined
                global?: string | undefined
                expand?: string | undefined
                limit?: bigint | undefined
                from?: bigint | undefined
                to?: bigint | undefined
                after?: string | undefined
                before?: string | undefined
              }
            }
            output: UnauthorizedErrorRep
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              query: {
                projectKey: string
                environmentKey: string
                applicationKey?: string | undefined
                query?: string | undefined
                impactSize?: string | undefined
                hasExperiments?: boolean | undefined
                global?: string | undefined
                expand?: string | undefined
                limit?: bigint | undefined
                from?: bigint | undefined
                to?: bigint | undefined
                after?: string | undefined
                before?: string | undefined
              }
            }
            output: ForbiddenErrorRep
            outputFormat: 'json'
            status: 403
          }
        | {
            input: {
              query: {
                projectKey: string
                environmentKey: string
                applicationKey?: string | undefined
                query?: string | undefined
                impactSize?: string | undefined
                hasExperiments?: boolean | undefined
                global?: string | undefined
                expand?: string | undefined
                limit?: bigint | undefined
                from?: bigint | undefined
                to?: bigint | undefined
                after?: string | undefined
                before?: string | undefined
              }
            }
            output: NotFoundErrorRep
            outputFormat: 'json'
            status: 404
          }
        | {
            input: {
              query: {
                projectKey: string
                environmentKey: string
                applicationKey?: string | undefined
                query?: string | undefined
                impactSize?: string | undefined
                hasExperiments?: boolean | undefined
                global?: string | undefined
                expand?: string | undefined
                limit?: bigint | undefined
                from?: bigint | undefined
                to?: bigint | undefined
                after?: string | undefined
                before?: string | undefined
              }
            }
            output: RateLimitedErrorRep
            outputFormat: 'json'
            status: 429
          }
    }
  } & {
    '/api/v2/engineering-insights/insights/group': {
      $post:
        | {
            input: { json: PostInsightGroupParams }
            output: InsightGroup
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { json: PostInsightGroupParams }
            output: ValidationFailedErrorRep
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { json: PostInsightGroupParams }
            output: UnauthorizedErrorRep
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { json: PostInsightGroupParams }
            output: ForbiddenErrorRep
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { json: PostInsightGroupParams }
            output: NotFoundErrorRep
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { json: PostInsightGroupParams }
            output: StatusConflictErrorRep
            outputFormat: 'json'
            status: 409
          }
        | {
            input: { json: PostInsightGroupParams }
            output: RateLimitedErrorRep
            outputFormat: 'json'
            status: 429
          }
    }
  } & {
    '/api/v2/engineering-insights/insights/groups': {
      $get:
        | {
            input: {
              query: {
                limit?: bigint | undefined
                offset?: bigint | undefined
                sort?: string | undefined
                query?: string | undefined
                expand?: string | undefined
              }
            }
            output: InsightGroupCollection
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                limit?: bigint | undefined
                offset?: bigint | undefined
                sort?: string | undefined
                query?: string | undefined
                expand?: string | undefined
              }
            }
            output: ValidationFailedErrorRep
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                limit?: bigint | undefined
                offset?: bigint | undefined
                sort?: string | undefined
                query?: string | undefined
                expand?: string | undefined
              }
            }
            output: UnauthorizedErrorRep
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              query: {
                limit?: bigint | undefined
                offset?: bigint | undefined
                sort?: string | undefined
                query?: string | undefined
                expand?: string | undefined
              }
            }
            output: ForbiddenErrorRep
            outputFormat: 'json'
            status: 403
          }
        | {
            input: {
              query: {
                limit?: bigint | undefined
                offset?: bigint | undefined
                sort?: string | undefined
                query?: string | undefined
                expand?: string | undefined
              }
            }
            output: RateLimitedErrorRep
            outputFormat: 'json'
            status: 429
          }
    }
  } & {
    '/api/v2/engineering-insights/insights/groups/:insightGroupKey': {
      $get:
        | {
            input: { param: { insightGroupKey: string } } & {
              query: { expand?: string | undefined }
            }
            output: InsightGroup
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { insightGroupKey: string } } & {
              query: { expand?: string | undefined }
            }
            output: ValidationFailedErrorRep
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { insightGroupKey: string } } & {
              query: { expand?: string | undefined }
            }
            output: UnauthorizedErrorRep
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { insightGroupKey: string } } & {
              query: { expand?: string | undefined }
            }
            output: ForbiddenErrorRep
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { insightGroupKey: string } } & {
              query: { expand?: string | undefined }
            }
            output: NotFoundErrorRep
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { insightGroupKey: string } } & {
              query: { expand?: string | undefined }
            }
            output: RateLimitedErrorRep
            outputFormat: 'json'
            status: 429
          }
      $patch:
        | {
            input: { param: { insightGroupKey: string } } & { json: JSONPatch }
            output: InsightGroup
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { insightGroupKey: string } } & { json: JSONPatch }
            output: ValidationFailedErrorRep
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { insightGroupKey: string } } & { json: JSONPatch }
            output: UnauthorizedErrorRep
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { insightGroupKey: string } } & { json: JSONPatch }
            output: ForbiddenErrorRep
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { insightGroupKey: string } } & { json: JSONPatch }
            output: NotFoundErrorRep
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { insightGroupKey: string } } & { json: JSONPatch }
            output: PatchFailedErrorRep
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { insightGroupKey: string } } & { json: JSONPatch }
            output: RateLimitedErrorRep
            outputFormat: 'json'
            status: 429
          }
      $delete:
        | {
            input: { param: { insightGroupKey: string } }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { insightGroupKey: string } }
            output: ValidationFailedErrorRep
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { insightGroupKey: string } }
            output: UnauthorizedErrorRep
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { insightGroupKey: string } }
            output: ForbiddenErrorRep
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { insightGroupKey: string } }
            output: NotFoundErrorRep
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { insightGroupKey: string } }
            output: RateLimitedErrorRep
            outputFormat: 'json'
            status: 429
          }
    }
  } & {
    '/api/v2/engineering-insights/insights/scores': {
      $get:
        | {
            input: {
              query: {
                projectKey: string
                environmentKey: string
                applicationKey?: string | undefined
              }
            }
            output: InsightScores
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                projectKey: string
                environmentKey: string
                applicationKey?: string | undefined
              }
            }
            output: ValidationFailedErrorRep
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                projectKey: string
                environmentKey: string
                applicationKey?: string | undefined
              }
            }
            output: UnauthorizedErrorRep
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              query: {
                projectKey: string
                environmentKey: string
                applicationKey?: string | undefined
              }
            }
            output: ForbiddenErrorRep
            outputFormat: 'json'
            status: 403
          }
        | {
            input: {
              query: {
                projectKey: string
                environmentKey: string
                applicationKey?: string | undefined
              }
            }
            output: RateLimitedErrorRep
            outputFormat: 'json'
            status: 429
          }
    }
  } & {
    '/api/v2/engineering-insights/pull-requests': {
      $get:
        | {
            input: {
              query: {
                projectKey: string
                environmentKey?: string | undefined
                applicationKey?: string | undefined
                status?: string | undefined
                query?: string | undefined
                limit?: bigint | undefined
                expand?: string | undefined
                sort?: string | undefined
                from?: string | undefined
                to?: string | undefined
                after?: string | undefined
                before?: string | undefined
              }
            }
            output: PullRequestCollectionRep
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                projectKey: string
                environmentKey?: string | undefined
                applicationKey?: string | undefined
                status?: string | undefined
                query?: string | undefined
                limit?: bigint | undefined
                expand?: string | undefined
                sort?: string | undefined
                from?: string | undefined
                to?: string | undefined
                after?: string | undefined
                before?: string | undefined
              }
            }
            output: ValidationFailedErrorRep
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                projectKey: string
                environmentKey?: string | undefined
                applicationKey?: string | undefined
                status?: string | undefined
                query?: string | undefined
                limit?: bigint | undefined
                expand?: string | undefined
                sort?: string | undefined
                from?: string | undefined
                to?: string | undefined
                after?: string | undefined
                before?: string | undefined
              }
            }
            output: UnauthorizedErrorRep
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              query: {
                projectKey: string
                environmentKey?: string | undefined
                applicationKey?: string | undefined
                status?: string | undefined
                query?: string | undefined
                limit?: bigint | undefined
                expand?: string | undefined
                sort?: string | undefined
                from?: string | undefined
                to?: string | undefined
                after?: string | undefined
                before?: string | undefined
              }
            }
            output: ForbiddenErrorRep
            outputFormat: 'json'
            status: 403
          }
        | {
            input: {
              query: {
                projectKey: string
                environmentKey?: string | undefined
                applicationKey?: string | undefined
                status?: string | undefined
                query?: string | undefined
                limit?: bigint | undefined
                expand?: string | undefined
                sort?: string | undefined
                from?: string | undefined
                to?: string | undefined
                after?: string | undefined
                before?: string | undefined
              }
            }
            output: NotFoundErrorRep
            outputFormat: 'json'
            status: 404
          }
        | {
            input: {
              query: {
                projectKey: string
                environmentKey?: string | undefined
                applicationKey?: string | undefined
                status?: string | undefined
                query?: string | undefined
                limit?: bigint | undefined
                expand?: string | undefined
                sort?: string | undefined
                from?: string | undefined
                to?: string | undefined
                after?: string | undefined
                before?: string | undefined
              }
            }
            output: RateLimitedErrorRep
            outputFormat: 'json'
            status: 429
          }
    }
  } & {
    '/api/v2/engineering-insights/repositories': {
      $get:
        | {
            input: { query: { expand?: string | undefined } }
            output: InsightsRepositoryCollection
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { expand?: string | undefined } }
            output: ValidationFailedErrorRep
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { query: { expand?: string | undefined } }
            output: UnauthorizedErrorRep
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { query: { expand?: string | undefined } }
            output: ForbiddenErrorRep
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { query: { expand?: string | undefined } }
            output: NotFoundErrorRep
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { query: { expand?: string | undefined } }
            output: RateLimitedErrorRep
            outputFormat: 'json'
            status: 429
          }
    }
  } & {
    '/api/v2/engineering-insights/repositories/projects': {
      $put:
        | {
            input: { json: InsightsRepositoryProjectMappings }
            output: InsightsRepositoryProjectCollection
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: InsightsRepositoryProjectMappings }
            output: ValidationFailedErrorRep
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { json: InsightsRepositoryProjectMappings }
            output: UnauthorizedErrorRep
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { json: InsightsRepositoryProjectMappings }
            output: ForbiddenErrorRep
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { json: InsightsRepositoryProjectMappings }
            output: NotFoundErrorRep
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { json: InsightsRepositoryProjectMappings }
            output: RateLimitedErrorRep
            outputFormat: 'json'
            status: 429
          }
    }
  } & {
    '/api/v2/engineering-insights/repositories/:repositoryKey/projects/:projectKey': {
      $delete:
        | {
            input: { param: { repositoryKey: string; projectKey: string } }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { repositoryKey: string; projectKey: string } }
            output: ValidationFailedErrorRep
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { repositoryKey: string; projectKey: string } }
            output: UnauthorizedErrorRep
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { repositoryKey: string; projectKey: string } }
            output: ForbiddenErrorRep
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { repositoryKey: string; projectKey: string } }
            output: NotFoundErrorRep
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { repositoryKey: string; projectKey: string } }
            output: RateLimitedErrorRep
            outputFormat: 'json'
            status: 429
          }
    }
  },
  '/'
>
export default routes
