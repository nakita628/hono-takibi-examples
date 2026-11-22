type Error = { code: number; error_code?: string | undefined; message: string }
type TeamMetric = {
  timestamp: string
  timestampUnix: bigint
  concurrentSandboxes: number
  sandboxStartRate: number
}
type MaxTeamMetric = { timestamp: string; timestampUnix: bigint; value: number }
type TeamStatusResponse = { isBanned: boolean; isBlocked: boolean; blockedReason: string | null }
type TeamLimits = {
  maxLengthHours: bigint
  concurrentSandboxes: bigint
  concurrentTemplateBuilds: bigint
  maxVcpu: bigint
  maxRamMb: bigint
  diskMb: bigint
  eventsTtlDays: bigint
  defaultFreeDiskSizeMb: bigint
  maxFreeDiskSizeMb: bigint
  apiTeamRpsList: bigint
  apiTeamRpsDelete: bigint
  maxSecrets: bigint
}
type TeamLimitsResponse = { limits: TeamLimits }
type CPUCount = number
type MemoryMB = number
type DiskSizeMB = number
type SandboxMetadata = { [x: string]: string }
type SandboxState = 'running' | 'paused'
type EnvdVersion = string
type EnvdUnresponsiveAtPause = boolean
type SandboxVolumeMount = { name: string; path: string }
type ListedSandbox = {
  templateID: string
  alias?: string | undefined
  sandboxID: string
  clientID: string
  startedAt: string
  endAt: string
  cpuCount: CPUCount
  memoryMB: MemoryMB
  diskSizeMB: DiskSizeMB
  metadata?: SandboxMetadata | undefined
  state: SandboxState
  envdVersion: EnvdVersion
  envdUnresponsiveAtPause?: EnvdUnresponsiveAtPause | undefined
  volumeMounts?: SandboxVolumeMount[] | undefined
}
type SandboxAutoResumeEnabled = boolean
type SandboxAutoResumeConfig = { enabled: SandboxAutoResumeEnabled }
type SandboxEgressProxyTLSConfig = {
  enabled: boolean
  serverName?: string | undefined
  caCert?: string | undefined
} | null
type SandboxEgressProxyConfig = {
  address: string
  username?: string | undefined
  password?: string | undefined
  tls?: SandboxEgressProxyTLSConfig | undefined
} | null
type SandboxNetworkTransform = { headers?: { [x: string]: string } | undefined }
type SandboxNetworkRule = { transform?: SandboxNetworkTransform | undefined }
type SandboxNetworkConfig = {
  allowPublicTraffic?: (boolean | null) | undefined
  allowOut?: string[] | undefined
  denyOut?: string[] | undefined
  dnsServers?: string[] | undefined
  egressProxy?: SandboxEgressProxyConfig | undefined
  maskRequestHost?: string | undefined
  httpsPorts?: number[] | undefined
  rules?: { [x: string]: SandboxNetworkRule[] } | undefined
}
type EnvVars = { [x: string]: string }
type Mcp = { [x: string]: { [x: string]: unknown } } | null
type SandboxIamToken = { audience: string; tokenType: string }
type SandboxIamTokens = { [x: string]: SandboxIamToken }
type SandboxIam = { tokens?: SandboxIamTokens | undefined }
type NewSandbox = {
  templateID: string
  timeout?: number | undefined
  cpuCount?: {} | undefined
  autoPause?: boolean | undefined
  autoPauseMemory?: boolean | undefined
  autoResume?: SandboxAutoResumeConfig | undefined
  secure?: boolean | undefined
  allow_internet_access?: boolean | undefined
  network?: SandboxNetworkConfig | undefined
  metadata?: SandboxMetadata | undefined
  envVars?: EnvVars | undefined
  mcp?: Mcp | undefined
  iam?: SandboxIam | undefined
  volumeMounts?: SandboxVolumeMount[] | undefined
}
type Sandbox = {
  templateID: string
  sandboxID: string
  alias?: string | undefined
  clientID: string
  envdVersion: EnvdVersion
  envdAccessToken?: string | undefined
  trafficAccessToken?: (string | null) | undefined
  domain?: (string | null) | undefined
}
type NewSandboxV2 = {
  templateID: string
  timeout?: number | undefined
  cpuCount?: {} | undefined
  autoPause?: boolean | undefined
  autoPauseMemory?: boolean | undefined
  autoResume?: SandboxAutoResumeConfig | undefined
  allow_internet_access?: boolean | undefined
  network?: SandboxNetworkConfig | undefined
  metadata?: SandboxMetadata | undefined
  envVars?: EnvVars | undefined
  mcp?: Mcp | undefined
  iam?: SandboxIam | undefined
  volumeMounts?: SandboxVolumeMount[] | undefined
}
type OrderDirection = 'asc' | 'desc'
type SandboxMetric = {
  timestamp: string
  timestampUnix: bigint
  cpuCount: number
  cpuUsedPct: number
  memUsed: bigint
  memTotal: bigint
  memCache: bigint
  diskUsed: bigint
  diskTotal: bigint
}
type SandboxesWithMetrics = { sandboxes: { [x: string]: SandboxMetric } }
type SandboxLog = { timestamp: string; line: string }
type LogLevel = 'debug' | 'info' | 'warn' | 'error'
type SandboxLogEntry = {
  timestamp: string
  message: string
  level: LogLevel
  fields: { [x: string]: string }
}
type SandboxLogs = { logs: SandboxLog[]; logEntries: SandboxLogEntry[] }
type LogsDirection = 'forward' | 'backward'
type SandboxLogsV2Response = { logs: SandboxLogEntry[] }
type SandboxOnTimeout = 'kill' | 'pause'
type SandboxLifecycle = { autoResume: boolean; onTimeout: SandboxOnTimeout }
type SandboxPauseMode = 'full' | 'filesystem'
type SandboxDetail = {
  templateID: string
  alias?: string | undefined
  sandboxID: string
  clientID: string
  startedAt: string
  endAt: string
  envdVersion: EnvdVersion
  envdUnresponsiveAtPause?: EnvdUnresponsiveAtPause | undefined
  envdAccessToken?: string | undefined
  allowInternetAccess?: (boolean | null) | undefined
  domain?: (string | null) | undefined
  cpuCount: CPUCount
  memoryMB: MemoryMB
  diskSizeMB: DiskSizeMB
  metadata?: SandboxMetadata | undefined
  state: SandboxState
  network?: SandboxNetworkConfig | undefined
  lifecycle?: SandboxLifecycle | undefined
  pauseMode?: SandboxPauseMode | undefined
  volumeMounts?: SandboxVolumeMount[] | undefined
}
type SandboxRecord = {
  templateID: string
  alias?: string | undefined
  sandboxID: string
  startedAt: string
  stoppedAt?: (string | null) | undefined
  domain?: (string | null) | undefined
  cpuCount: CPUCount
  memoryMB: MemoryMB
  diskSizeMB: DiskSizeMB
  retentionExpired: boolean
  eventsRetentionExpired: boolean
}
type SandboxPauseRequest = {
  memory?: boolean | undefined
  requireHealthyGuest?: boolean | undefined
}
type ResumedSandbox = {
  timeout?: number | undefined
  cpuCount?: {} | undefined
  autoPause?: boolean | undefined
  memory?: boolean | undefined
}
type SandboxForkRequest = { timeout?: number | undefined; count?: number | undefined }
type SandboxForkResult = { sandbox?: Sandbox | undefined; error?: Error | undefined }
type ConnectSandbox = { timeout: number; memory?: boolean | undefined }
type ConnectSandboxV2 = { timeout?: number | undefined; memory?: boolean | undefined }
type SandboxTimeoutRequest = { timeout: number }
type SandboxNetworkUpdateConfig = {
  allowOut?: string[] | undefined
  denyOut?: string[] | undefined
  dnsServers?: string[] | undefined
  egressProxy?: SandboxEgressProxyConfig | undefined
  rules?: { [x: string]: SandboxNetworkRule[] } | undefined
  allow_internet_access?: boolean | undefined
}
type SandboxRefreshRequest = { duration?: number | undefined }
type SandboxSnapshotRequest = { name?: string | undefined; memory?: boolean | undefined }
type SnapshotInfo = { snapshotID: string; names: string[] }
type MinFreeDiskMb = number
type TemplateBuildRequestV3 = {
  name?: string | undefined
  tags?: string[] | undefined
  alias?: string | undefined
  teamID?: string | undefined
  cpuCount?: CPUCount | undefined
  maxCpuCount?: {} | undefined
  memoryMB?: MemoryMB | undefined
  minFreeDiskMb?: MinFreeDiskMb | undefined
}
type TemplateRequestResponseV3 = {
  templateID: string
  buildID: string
  public: boolean
  names: string[]
  tags: string[]
  aliases: string[]
}
type TemplateBuildStatus = 'building' | 'waiting' | 'ready' | 'error'
type Template = {
  templateID: string
  buildID: string
  cpuCount: CPUCount
  maxCpuCount?: {} | undefined
  memoryMB: MemoryMB
  diskSizeMB: DiskSizeMB
  public: boolean
  aliases: string[]
  names: string[]
  createdAt: string
  updatedAt: string
  createdBy: { id: string; email: string | null }
  lastSpawnedAt: string | null
  spawnCount: bigint
  buildCount: number
  envdVersion: EnvdVersion
  buildStatus: TemplateBuildStatus
  isDefault?: boolean | undefined
  description?: string | undefined
}
type TemplateBuildFileUpload = {
  present: boolean
  url?: string | undefined
  headers?: { [x: string]: string } | undefined
}
type TemplateSearchResponse = { data: Template[]; nextCursor: string | null }
type BuildStatus = 'building' | 'failed' | 'success'
type ListedBuild = {
  id: string
  template: string
  templateId: string
  status: BuildStatus
  statusMessage: string | null
  createdAt: string
  finishedAt: string | null
  cpuCount: bigint
  memoryMB: bigint
  diskSizeMB: bigint | null
  envdVersion: string | null
}
type BuildsListResponse = { data: ListedBuild[]; nextCursor: string | null }
type BuildStatusItem = {
  id: string
  status: BuildStatus
  finishedAt: string | null
  statusMessage: string | null
}
type BuildsStatusesResponse = { buildStatuses: BuildStatusItem[] }
type BuildInfo = {
  names?: (string[] | null) | undefined
  createdAt: string
  finishedAt: string | null
  status: BuildStatus
  statusMessage: string | null
}
type TemplateBuild = {
  buildID: string
  status: TemplateBuildStatus
  createdAt: string
  updatedAt: string
  finishedAt?: string | undefined
  cpuCount: CPUCount
  maxCpuCount?: {} | undefined
  memoryMB: MemoryMB
  diskSizeMB?: DiskSizeMB | undefined
  envdVersion?: EnvdVersion | undefined
}
type TemplateWithBuilds = {
  templateID: string
  buildID: string
  cpuCount: CPUCount
  maxCpuCount?: {} | undefined
  memoryMB: MemoryMB
  diskSizeMB: DiskSizeMB
  public: boolean
  aliases: string[]
  names: string[]
  createdAt: string
  updatedAt: string
  createdBy: { id: string; email: string | null }
  lastSpawnedAt: string | null
  spawnCount: bigint
  buildCount: number
  envdVersion: EnvdVersion
  buildStatus: TemplateBuildStatus
  isDefault?: boolean | undefined
  description?: string | undefined
  builds: TemplateBuild[]
}
type TemplateUpdateRequest = { public?: boolean | undefined }
type TemplateBuildWithTags = {
  buildID: string
  status: TemplateBuildStatus
  createdAt: string
  updatedAt: string
  finishedAt?: string | undefined
  cpuCount: CPUCount
  maxCpuCount?: {} | undefined
  memoryMB: MemoryMB
  diskSizeMB?: DiskSizeMB | undefined
  envdVersion?: EnvdVersion | undefined
  tags: string[]
}
type AWSRegistry = {
  type: 'aws'
  awsAccessKeyId: string
  awsSecretAccessKey: string
  awsRegion: string
}
type GCPRegistry = { type: 'gcp'; serviceAccountJson: string }
type GeneralRegistry = { type: 'registry'; username: string; password: string }
type FromImageRegistry = AWSRegistry | GCPRegistry | GeneralRegistry
type TemplateStep = {
  type: string
  args?: string[] | undefined
  filesHash?: string | undefined
  force?: boolean | undefined
}
type TemplateBuildStartV2 = {
  fromImage?: string | undefined
  fromTemplate?: string | undefined
  fromImageRegistry?: FromImageRegistry | undefined
  force?: boolean | undefined
  steps?: TemplateStep[] | undefined
  startCmd?: string | undefined
  readyCmd?: string | undefined
}
type TemplateV2 = {
  templateID: string
  names: string[]
  public: boolean
  createdAt: string
  updatedAt: string
  createdBy: { id: string; email: string | null }
  lastSpawnedAt: string | null
  spawnCount: bigint
  buildCount: number
  isDefault: boolean
  description?: string | undefined
  buildStatus: TemplateBuildStatus
  defaultBuild?: TemplateBuild | undefined
}
type TemplateUpdateResponse = { names: string[] }
type BuildLogEntry = {
  timestamp: string
  message: string
  level: LogLevel
  step?: string | undefined
}
type BuildStatusReason = {
  message: string
  step?: string | undefined
  logEntries?: BuildLogEntry[] | undefined
}
type TemplateBuildInfo = {
  logs: string[]
  logEntries: BuildLogEntry[]
  templateID: string
  buildID: string
  status: TemplateBuildStatus
  reason?: BuildStatusReason | undefined
}
type LogsSource = 'temporary' | 'persistent'
type TemplateBuildLogsResponse = { logs: BuildLogEntry[] }
type AssignTemplateTagsRequest = { target: string; tags: string[] }
type AssignedTemplateTags = { tags: string[]; buildID: string }
type DeleteTemplateTagsRequest = { name: string; tags: string[] }
type TemplateTag = { tag: string; buildID: string; createdAt: string }
type TemplateTagAssignment = {
  assignmentId: string
  buildId: string
  assignedAt: string
  buildCreatedAt: string
  buildFinishedAt: string | null
}
type TemplateTagGroup = { tag: string; assignments: TemplateTagAssignment[]; hasMore: boolean }
type TemplateTagGroupsResponse = { tags: TemplateTagGroup[]; nextCursor: string | null }
type TemplateTagsCountResponse = { total: bigint }
type TemplateTagExistsResponse = { exists: boolean; normalizedTag: string }
type TemplateTagAssignmentsResponse = { data: TemplateTagAssignment[]; nextCursor: string | null }
type TemplateAliasResponse = { templateID: string; public: boolean }
type MachineInfo = {
  cpuFamily: string
  cpuModel: string
  cpuModelName: string
  cpuArchitecture: string
}
type NodeStatus =
  | 'ready'
  | 'draining'
  | 'connecting'
  | 'unhealthy'
  | 'standby'
  | 'shutting_down'
  | 'not_ready'
type DiskMetrics = {
  mountPoint: string
  device: string
  filesystemType: string
  usedBytes: bigint
  totalBytes: bigint
}
type NodeMetrics = {
  allocatedCPU: number
  cpuPercent: number
  cpuCount: number
  allocatedMemoryBytes: bigint
  memoryUsedBytes: bigint
  memoryTotalBytes: bigint
  hugePagesTotal: bigint
  hugePagesUsed: bigint
  hugePagesReserved: bigint
  hugePageSizeBytes: bigint
  disks: DiskMetrics[]
}
type Node = {
  version: string
  commit: string
  id: string
  serviceInstanceID: string
  clusterID: string
  machineInfo: MachineInfo
  status: NodeStatus
  statusChangedAt: string
  statusOwner?: string | undefined
  capabilities?: string[] | undefined
  sandboxCount: number
  maxSandboxes: bigint
  outstandingWork: bigint
  metrics: NodeMetrics
  createSuccesses: bigint
  createFails: bigint
  sandboxStartingCount: number
}
type NodeDetail = {
  clusterID: string
  version: string
  commit: string
  id: string
  serviceInstanceID: string
  machineInfo: MachineInfo
  status: NodeStatus
  statusChangedAt: string
  statusOwner?: string | undefined
  capabilities?: string[] | undefined
  sandboxCount: number
  maxSandboxes: bigint
  outstandingWork: bigint
  metrics: NodeMetrics
  createSuccesses: bigint
  createFails: bigint
}
type NodeStatusChange = {
  clusterID?: string | undefined
  status: NodeStatus
  owner?: string | undefined
  force?: boolean | undefined
}
type NodeSandbox = {
  teamID: string
  sandboxID: string
  executionID: string
  lifecycleHoldUntil?: string | undefined
  networkMode: string
  volumesAttached: boolean
}
type NodeSandboxes = { nodeID: string; observedAt: string; items: NodeSandbox[] }
type AdminSandboxKillResult = { killedCount: number; failedCount: number }
type AdminTeamRunningSandboxCounts = { [x: string]: bigint }
type AdminSandboxState = 'running' | 'paused' | 'killed'
type AdminSandbox = { sandboxID: string; teamID: string; state: AdminSandboxState }
type AdminSandboxOverviewTeam = { id: string; name: string | null; email: string | null }
type AdminSandboxOverview = {
  sandboxId: string
  team: AdminSandboxOverviewTeam
  snapshotTemplateId: string | null
  lastPause: { kind: {}; autoPause: boolean; autoPauseKind: {} }
  latestBuild: {
    buildId: string
    templateId: string
    tag: string
    status: string
    statusGroup: {}
    clusterNodeId: string | null
    assignedAt: string
    isCurrent: boolean
    restorable: boolean
  }
  buildCount: bigint
}
type AdminSandboxBuildStatusGroup = 'pending' | 'in_progress' | 'ready' | 'failed'
type AdminSandboxBuild = {
  buildID: string
  templateID: string
  tag: string
  status: string
  statusGroup: AdminSandboxBuildStatusGroup
  clusterNodeID: string | null
  assignedAt: string
  isCurrent: boolean
  restorable: boolean
}
type AdminSandboxBuildList = {
  items: AdminSandboxBuild[]
  total: bigint
  snapshotTemplateID: string | null
}
type AdminSandboxBuildRestoreRequest = { buildID: string }
type AdminSandboxBuildRestoreResult = {
  sandboxID: string
  templateID: string
  buildID: string
  assignedAt: string
  previousBuildID: string | null
}
type AdminBuildCancelResult = { cancelledCount: number; failedCount: number }
type IdentifierMaskingDetails = {
  prefix: string
  valueLength: number
  maskedValuePrefix: string
  maskedValueSuffix: string
}
type TeamAPIKey = {
  id: string
  name: string
  mask: IdentifierMaskingDetails
  createdAt: string
  createdBy?: { id: string; email: string | null } | undefined
  lastUsed?: (string | null) | undefined
}
type NewTeamAPIKey = { name: string }
type CreatedTeamAPIKey = {
  id: string
  key: string
  mask: IdentifierMaskingDetails
  name: string
  createdAt: string
  createdBy?: { id: string; email: string | null } | undefined
  lastUsed?: (string | null) | undefined
}
type TelemetryTeamName = { name: string; clusterId?: string | undefined }
type TelemetryClusterName = { id: string; name: string; clientId?: string | undefined }
type TelemetryNames = {
  teams: { [x: string]: TelemetryTeamName }
  clusters: TelemetryClusterName[]
}
type ManagementClusterRegistrationRequest = {
  name: string
  endpoint: string
  endpoint_tls: boolean
  token: string
  sandbox_proxy_domain?: (string | null) | undefined
  auth_org_id?: (string | null) | undefined
  telemetry_client_id?: string | undefined
}
type ManagementClusterProjects = { project_ids: string[] }
type ManagementProjectUpsertRequest = {
  cluster_id?: string | undefined
  name: string
  slug: string
  email: string
}
type ManagementProject = {
  cluster_id?: string | undefined
  name: string
  slug: string
  email: string
  id: string
}
type ManagementProjectMemberIdentity = { issuer: string; subject: string }
type ManagementProjectMemberApplyRequest = {
  revision: bigint
  present: boolean
  is_default?: boolean | undefined
  role?: 'owner' | 'member' | 'viewer' | undefined
  identities?: ManagementProjectMemberIdentity[] | undefined
}
type ManagementProjectLimits = { [x: string]: unknown } | { [x: string]: unknown }
type SandboxSettings = { defaultAllowPublicTraffic?: boolean | undefined }
type ProjectSettings = { sandboxSettings: SandboxSettings }
type ManagementProjectSettingsRequest = { revision: bigint; settings: ProjectSettings }
type ManagementDecidedAt = string
type ManagementProjectBlockRequest = {
  revision: bigint
  blocked: boolean
  reason?: string | undefined
  decided_at?: ManagementDecidedAt | undefined
}
type ManagementProjectBanRequest = {
  revision: bigint
  banned: boolean
  decided_at?: ManagementDecidedAt | undefined
}
type AdminTeamListSortField = 'name' | 'email' | 'createdAt' | 'runningSandboxes'
type AdminTeamListRequest = {
  projectIds?: string[] | undefined
  search?: string | undefined
  hideBanned?: boolean | undefined
  hideBlocked?: boolean | undefined
  createdAfter?: string | undefined
  createdBefore?: string | undefined
  sortBy?: AdminTeamListSortField | undefined
  sortOrder?: {} | undefined
  limit?: number | undefined
  offset?: number | undefined
}
type AdminTeamListItem = {
  id: string
  email: string
  name: string
  isBanned: boolean
  isBlocked: boolean
  createdAt: string
  memberCount: bigint
  runningSandboxCount?: bigint | undefined
}
type AdminTeamList = { items: AdminTeamListItem[]; total: bigint }
type AdminTeamsBanRequest = { teamIDs: string[] }
type AdminTeamBanResult = {
  teamID: string
  sandboxesKilled: number
  sandboxesFailedToKill: number
  sandboxKillError?: string | undefined
  buildsCancelled: number
  buildsFailedToCancel: number
  buildCancelError?: string | undefined
}
type AdminTeamBanFailure = { teamID: string; error: string }
type AdminTeamsBanResult = {
  banned: AdminTeamBanResult[]
  notFound: string[]
  failed: AdminTeamBanFailure[]
}
type AdminTeam = {
  id: string
  email: string
  name: string
  slug: string
  createdAt: string
  isBlocked: boolean
  isBanned: boolean
  blockedReason?: (string | null) | undefined
  sandboxSchedulingLabels: string[]
  clusterId?: (string | null) | undefined
  clusterName?: (string | null) | undefined
}
type AdminTeamSchedulingLabels = { labels: string[] }
type ClusterListItem = {
  id: string
  name: string
  endpoint: string
  sandboxProxyDomain?: (string | null) | undefined
  teamCount: bigint
}
type ClusterListResponse = { items: ClusterListItem[]; total: bigint }
type AdminClusterCreateRequest = {
  cluster_id?: string | undefined
  name: string
  endpoint: string
  endpoint_tls: boolean
  token: string
  sandbox_proxy_domain?: (string | null) | undefined
  auth_org_id?: (string | null) | undefined
  telemetry_client_id?: string | undefined
}
type ClusterDetail = {
  id: string
  name: string
  endpoint: string
  endpointTls: boolean
  sandboxProxyDomain?: (string | null) | undefined
  authOrgId?: (string | null) | undefined
  deletionProtection: boolean
}
type ClusterTeamListItem = {
  id: string
  email: string
  name?: (string | null) | undefined
  slug?: (string | null) | undefined
  isBanned: boolean
  createdAt: string
}
type ClusterTeamListResponse = { items: ClusterTeamListItem[]; total: bigint }
type ClusterDetailWithTeams = {
  cluster: ClusterDetail
  teams: ClusterTeamListResponse
  teamCount: bigint
  templateCount: bigint
}
type ClusterUpdateRequest = {
  name?: string | undefined
  endpoint?: string | undefined
  endpointTls?: boolean | undefined
  sandboxProxyDomain?: (string | null) | undefined
  authOrgId?: (string | null) | undefined
  deletionProtection?: boolean | undefined
}
type ClusterTokenRotateRequest = { token: string }
type AdminTemplateTeam = { id: string; name: string; email: string }
type AdminTemplateAlias = {
  id: string
  templateID: string
  alias: string
  namespace: string | null
  isRenamable: boolean
}
type AdminTemplateAliases = {
  templateID: string
  public: boolean
  team: AdminTemplateTeam
  aliases: AdminTemplateAlias[]
}
type AdminTemplateAliasCreateRequest = { templateID: string; alias: string }
type AdminTemplateAliasDeleted = { aliasID: string; templateID: string; alias: string }
type AdminDefaultTemplateCreateRequest = {
  templateID: string
  description?: (string | null) | undefined
}
type AdminDefaultTemplate = { templateID: string; description: string | null }
type AdminDefaultTemplateUpdateRequest = { description: string | null }
type AdminTemplateLookup = {
  templateID: string
  team: AdminTemplateTeam
  names: string[]
  public: boolean
  createdAt: string
  lastSpawnedAt: string | null
  spawnCount: bigint
  isSnapshot: boolean
  snapshotSandboxID: string | null
  matchedBuildID: string | null
  builds: TemplateBuild[]
}
type UpdateTeamAPIKey = { name: string }
type Volume = { volumeID: string; name: string }
type NewVolume = { name: string }
type VolumeAndToken = { volumeID: string; name: string; token: string; domain?: string | undefined }
type SecretMetadata = { [x: string]: string }
type Secret = {
  secretID: string
  name: string
  currentVersion: bigint
  metadata: SecretMetadata
  createdAt: string
  updatedAt: string
}
type NewSecret = { name: string; value: string; metadata?: SecretMetadata | undefined }
type SecretUpdate = { value: string; metadata?: SecretMetadata | undefined }
type Rig = {
  id: string
  provider: string
  resourceID: string
  capacityDesired: number
  capacityMin?: number | undefined
  capacityMax?: number | undefined
  capacityCurrent: number
}
type RigCapacityChange = { desired: number }
type RigInstance = {
  id: string
  createdAt?: string | undefined
  transitioning: boolean
  terminating: boolean
}
type RigError = {
  timestamp: string
  code: string
  message: string
  instance?: string | undefined
  action?: string | undefined
}
type SandboxEvent = {
  id: string
  version: string
  type: string
  eventCategory?: string | undefined
  eventLabel?: string | undefined
  eventData?: ({ [x: string]: unknown } | null) | undefined
  timestamp: string
  sandboxId: string
  sandboxExecutionId: string
  sandboxTemplateId: string
  sandboxBuildId: string
  sandboxTeamId: string
}
type WebhookCreate = {
  name: string
  url: string
  events: string[]
  enabled?: boolean | undefined
  signatureSecret: string
}
type WebhookCreation = {
  id: string
  name: string
  createdAt: string
  teamId: string
  url: string
  enabled: boolean
  events: string[]
}
type WebhookDetail = {
  id: string
  teamId: string
  name: string
  createdAt: string
  url: string
  enabled: boolean
  events: string[]
}
type WebhookConfiguration = {
  enabled?: boolean | undefined
  name?: string | undefined
  url?: string | undefined
  events?: string[] | undefined
  signatureSecret?: string | undefined
}
type WebhookDelivery = {
  id: string
  teamId: string
  webhookId: string
  eventId: string
  sandboxId: string
  eventType: string
  status: 'success' | 'failed'
  durationMs: number
  requestBody: string
  requestHeaders: string
  requestUrl: string
  responseBody?: (string | null) | undefined
  responseHeaders?: (string | null) | undefined
  responseHttpStatusCode?: (number | null) | undefined
  errorClass:
    | 'http_error'
    | 'dns_error'
    | 'timeout'
    | 'transport_error'
    | 'request_error'
    | 'signature_error'
    | 'canceled'
  errorMessage?: (string | null) | undefined
  timestamp: string
}
type WebhookDeliveryGroup = {
  eventId: string
  eventType: string
  sandboxId: string
  attempts: WebhookDelivery[]
}
type WebhookDeliveriesListPayload = { data: WebhookDeliveryGroup[]; nextCursor: string | null }
type WebhookDeliveryDurationStats = { minimum: number; average: number; maximum: number }
type WebhookDeliveryStatsBucket = {
  timestamp: string
  total: bigint
  failed: bigint
  durationMs: WebhookDeliveryDurationStats
}
type WebhookDeliveryStats = {
  buckets: WebhookDeliveryStatsBucket[]
  total: bigint
  failed: bigint
  durationMs: WebhookDeliveryDurationStats
}
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/health': {
      $get:
        | { input: {}; output: string; outputFormat: 'text'; status: 200 }
        | { input: {}; output: Error; outputFormat: 'json'; status: 401 }
        | { input: {}; output: Error; outputFormat: 'json'; status: 429 }
        | { input: {}; output: string; outputFormat: 'text'; status: 503 }
    }
  } & {
    '/teams/:teamID/metrics': {
      $get:
        | {
            input: { param: { teamID: string } } & {
              query: { start?: bigint | undefined; end?: bigint | undefined }
            }
            output: TeamMetric[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { teamID: string } } & {
              query: { start?: bigint | undefined; end?: bigint | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { teamID: string } } & {
              query: { start?: bigint | undefined; end?: bigint | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { teamID: string } } & {
              query: { start?: bigint | undefined; end?: bigint | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { teamID: string } } & {
              query: { start?: bigint | undefined; end?: bigint | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { teamID: string } } & {
              query: { start?: bigint | undefined; end?: bigint | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/teams/:teamID/metrics/max': {
      $get:
        | {
            input: { param: { teamID: string } } & {
              query: {
                start?: bigint | undefined
                end?: bigint | undefined
                metric: 'concurrent_sandboxes' | 'sandbox_start_rate'
              }
            }
            output: MaxTeamMetric
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { teamID: string } } & {
              query: {
                start?: bigint | undefined
                end?: bigint | undefined
                metric: 'concurrent_sandboxes' | 'sandbox_start_rate'
              }
            }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { teamID: string } } & {
              query: {
                start?: bigint | undefined
                end?: bigint | undefined
                metric: 'concurrent_sandboxes' | 'sandbox_start_rate'
              }
            }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { teamID: string } } & {
              query: {
                start?: bigint | undefined
                end?: bigint | undefined
                metric: 'concurrent_sandboxes' | 'sandbox_start_rate'
              }
            }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { teamID: string } } & {
              query: {
                start?: bigint | undefined
                end?: bigint | undefined
                metric: 'concurrent_sandboxes' | 'sandbox_start_rate'
              }
            }
            output: Error
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { teamID: string } } & {
              query: {
                start?: bigint | undefined
                end?: bigint | undefined
                metric: 'concurrent_sandboxes' | 'sandbox_start_rate'
              }
            }
            output: Error
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/unstable/teams/:teamID/status': {
      $get:
        | {
            input: { param: { teamID: string } }
            output: TeamStatusResponse
            outputFormat: 'json'
            status: 200
          }
        | { input: { param: { teamID: string } }; output: Error; outputFormat: 'json'; status: 400 }
        | { input: { param: { teamID: string } }; output: Error; outputFormat: 'json'; status: 401 }
        | { input: { param: { teamID: string } }; output: Error; outputFormat: 'json'; status: 403 }
        | { input: { param: { teamID: string } }; output: Error; outputFormat: 'json'; status: 404 }
        | { input: { param: { teamID: string } }; output: Error; outputFormat: 'json'; status: 429 }
        | { input: { param: { teamID: string } }; output: Error; outputFormat: 'json'; status: 500 }
    }
  } & {
    '/unstable/teams/:teamID/limits': {
      $get:
        | {
            input: { param: { teamID: string } }
            output: TeamLimitsResponse
            outputFormat: 'json'
            status: 200
          }
        | { input: { param: { teamID: string } }; output: Error; outputFormat: 'json'; status: 400 }
        | { input: { param: { teamID: string } }; output: Error; outputFormat: 'json'; status: 401 }
        | { input: { param: { teamID: string } }; output: Error; outputFormat: 'json'; status: 403 }
        | { input: { param: { teamID: string } }; output: Error; outputFormat: 'json'; status: 404 }
        | { input: { param: { teamID: string } }; output: Error; outputFormat: 'json'; status: 429 }
        | { input: { param: { teamID: string } }; output: Error; outputFormat: 'json'; status: 500 }
    }
  } & {
    '/sandboxes': {
      $get:
        | {
            input: { query: { metadata?: string | undefined } }
            output: ListedSandbox[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { metadata?: string | undefined } }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { query: { metadata?: string | undefined } }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { query: { metadata?: string | undefined } }
            output: Error
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { query: { metadata?: string | undefined } }
            output: Error
            outputFormat: 'json'
            status: 500
          }
      $post:
        | { input: { json: NewSandbox }; output: Sandbox; outputFormat: 'json'; status: 201 }
        | { input: { json: NewSandbox }; output: Error; outputFormat: 'json'; status: 400 }
        | { input: { json: NewSandbox }; output: Error; outputFormat: 'json'; status: 401 }
        | { input: { json: NewSandbox }; output: Error; outputFormat: 'json'; status: 429 }
        | { input: { json: NewSandbox }; output: Error; outputFormat: 'json'; status: 500 }
        | { input: { json: NewSandbox }; output: Error; outputFormat: 'json'; status: 503 }
        | { input: { json: NewSandbox }; output: Error; outputFormat: 'json'; status: 504 }
    }
  } & {
    '/v2/sandboxes': {
      $post:
        | {
            input: { header: { 'Idempotency-Key'?: string | undefined } } & { json: NewSandboxV2 }
            output: Sandbox
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { header: { 'Idempotency-Key'?: string | undefined } } & { json: NewSandboxV2 }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { header: { 'Idempotency-Key'?: string | undefined } } & { json: NewSandboxV2 }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { header: { 'Idempotency-Key'?: string | undefined } } & { json: NewSandboxV2 }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { header: { 'Idempotency-Key'?: string | undefined } } & { json: NewSandboxV2 }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { header: { 'Idempotency-Key'?: string | undefined } } & { json: NewSandboxV2 }
            output: Error
            outputFormat: 'json'
            status: 409
          }
        | {
            input: { header: { 'Idempotency-Key'?: string | undefined } } & { json: NewSandboxV2 }
            output: Error
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { header: { 'Idempotency-Key'?: string | undefined } } & { json: NewSandboxV2 }
            output: Error
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { header: { 'Idempotency-Key'?: string | undefined } } & { json: NewSandboxV2 }
            output: Error
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { header: { 'Idempotency-Key'?: string | undefined } } & { json: NewSandboxV2 }
            output: Error
            outputFormat: 'json'
            status: 503
          }
        | {
            input: { header: { 'Idempotency-Key'?: string | undefined } } & { json: NewSandboxV2 }
            output: Error
            outputFormat: 'json'
            status: 504
          }
      $get:
        | {
            input: {
              query: {
                metadata?: string | undefined
                state?: SandboxState[] | undefined
                order?: OrderDirection | undefined
                startedAfter?: string | undefined
                template?: string | undefined
                nextToken?: string | undefined
                limit?: number | undefined
              }
            }
            output: ListedSandbox[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                metadata?: string | undefined
                state?: SandboxState[] | undefined
                order?: OrderDirection | undefined
                startedAfter?: string | undefined
                template?: string | undefined
                nextToken?: string | undefined
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
                metadata?: string | undefined
                state?: SandboxState[] | undefined
                order?: OrderDirection | undefined
                startedAfter?: string | undefined
                template?: string | undefined
                nextToken?: string | undefined
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
                metadata?: string | undefined
                state?: SandboxState[] | undefined
                order?: OrderDirection | undefined
                startedAfter?: string | undefined
                template?: string | undefined
                nextToken?: string | undefined
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
                metadata?: string | undefined
                state?: SandboxState[] | undefined
                order?: OrderDirection | undefined
                startedAfter?: string | undefined
                template?: string | undefined
                nextToken?: string | undefined
                limit?: number | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/sandboxes/metrics': {
      $get:
        | {
            input: { query: { sandbox_ids: string[] } }
            output: SandboxesWithMetrics
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { sandbox_ids: string[] } }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { query: { sandbox_ids: string[] } }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { query: { sandbox_ids: string[] } }
            output: Error
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { query: { sandbox_ids: string[] } }
            output: Error
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/sandboxes/:sandboxID/logs': {
      $get:
        | {
            input: { param: { sandboxID: string } } & {
              query: { start?: bigint | undefined; limit?: number | undefined }
            }
            output: SandboxLogs
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { sandboxID: string } } & {
              query: { start?: bigint | undefined; limit?: number | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { sandboxID: string } } & {
              query: { start?: bigint | undefined; limit?: number | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { sandboxID: string } } & {
              query: { start?: bigint | undefined; limit?: number | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { sandboxID: string } } & {
              query: { start?: bigint | undefined; limit?: number | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/v2/sandboxes/:sandboxID/logs': {
      $get:
        | {
            input: { param: { sandboxID: string } } & {
              query: {
                cursor?: bigint | undefined
                limit?: number | undefined
                direction?: LogsDirection | undefined
                level?: LogLevel | undefined
                search?: string | undefined
              }
            }
            output: SandboxLogsV2Response
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { sandboxID: string } } & {
              query: {
                cursor?: bigint | undefined
                limit?: number | undefined
                direction?: LogsDirection | undefined
                level?: LogLevel | undefined
                search?: string | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { sandboxID: string } } & {
              query: {
                cursor?: bigint | undefined
                limit?: number | undefined
                direction?: LogsDirection | undefined
                level?: LogLevel | undefined
                search?: string | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { sandboxID: string } } & {
              query: {
                cursor?: bigint | undefined
                limit?: number | undefined
                direction?: LogsDirection | undefined
                level?: LogLevel | undefined
                search?: string | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { sandboxID: string } } & {
              query: {
                cursor?: bigint | undefined
                limit?: number | undefined
                direction?: LogsDirection | undefined
                level?: LogLevel | undefined
                search?: string | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/sandboxes/:sandboxID': {
      $get:
        | {
            input: { param: { sandboxID: string } }
            output: SandboxDetail
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { sandboxID: string } }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { sandboxID: string } }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { sandboxID: string } }
            output: Error
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { sandboxID: string } }
            output: Error
            outputFormat: 'json'
            status: 500
          }
      $delete:
        | { input: { param: { sandboxID: string } }; output: {}; outputFormat: string; status: 204 }
        | {
            input: { param: { sandboxID: string } }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { sandboxID: string } }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { sandboxID: string } }
            output: Error
            outputFormat: 'json'
            status: 409
          }
        | {
            input: { param: { sandboxID: string } }
            output: Error
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { sandboxID: string } }
            output: Error
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/sandboxes/:sandboxID/metrics': {
      $get:
        | {
            input: { param: { sandboxID: string } } & {
              query: { start?: bigint | undefined; end?: bigint | undefined }
            }
            output: SandboxMetric[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { sandboxID: string } } & {
              query: { start?: bigint | undefined; end?: bigint | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { sandboxID: string } } & {
              query: { start?: bigint | undefined; end?: bigint | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { sandboxID: string } } & {
              query: { start?: bigint | undefined; end?: bigint | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { sandboxID: string } } & {
              query: { start?: bigint | undefined; end?: bigint | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { sandboxID: string } } & {
              query: { start?: bigint | undefined; end?: bigint | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/unstable/sandboxes/:sandboxID/record': {
      $get:
        | {
            input: { param: { sandboxID: string } }
            output: SandboxRecord
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { sandboxID: string } }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { sandboxID: string } }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { sandboxID: string } }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { sandboxID: string } }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { sandboxID: string } }
            output: Error
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { sandboxID: string } }
            output: Error
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/sandboxes/:sandboxID/pause': {
      $post:
        | {
            input: { param: { sandboxID: string } } & { json: SandboxPauseRequest }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { sandboxID: string } } & { json: SandboxPauseRequest }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { sandboxID: string } } & { json: SandboxPauseRequest }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { sandboxID: string } } & { json: SandboxPauseRequest }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { sandboxID: string } } & { json: SandboxPauseRequest }
            output: Error
            outputFormat: 'json'
            status: 409
          }
        | {
            input: { param: { sandboxID: string } } & { json: SandboxPauseRequest }
            output: Error
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { sandboxID: string } } & { json: SandboxPauseRequest }
            output: Error
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { param: { sandboxID: string } } & { json: SandboxPauseRequest }
            output: Error
            outputFormat: 'json'
            status: 503
          }
    }
  } & {
    '/sandboxes/:sandboxID/resume': {
      $post:
        | {
            input: { param: { sandboxID: string } } & { json: ResumedSandbox }
            output: Sandbox
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { param: { sandboxID: string } } & { json: ResumedSandbox }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { sandboxID: string } } & { json: ResumedSandbox }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { sandboxID: string } } & { json: ResumedSandbox }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { sandboxID: string } } & { json: ResumedSandbox }
            output: Error
            outputFormat: 'json'
            status: 409
          }
        | {
            input: { param: { sandboxID: string } } & { json: ResumedSandbox }
            output: Error
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { sandboxID: string } } & { json: ResumedSandbox }
            output: Error
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { param: { sandboxID: string } } & { json: ResumedSandbox }
            output: Error
            outputFormat: 'json'
            status: 503
          }
        | {
            input: { param: { sandboxID: string } } & { json: ResumedSandbox }
            output: Error
            outputFormat: 'json'
            status: 504
          }
    }
  } & {
    '/sandboxes/:sandboxID/fork': {
      $post:
        | {
            input: { param: { sandboxID: string } } & { json: SandboxForkRequest }
            output: SandboxForkResult[]
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { param: { sandboxID: string } } & { json: SandboxForkRequest }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { sandboxID: string } } & { json: SandboxForkRequest }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { sandboxID: string } } & { json: SandboxForkRequest }
            output: Error
            outputFormat: 'json'
            status: 409
          }
        | {
            input: { param: { sandboxID: string } } & { json: SandboxForkRequest }
            output: Error
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { sandboxID: string } } & { json: SandboxForkRequest }
            output: Error
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { param: { sandboxID: string } } & { json: SandboxForkRequest }
            output: Error
            outputFormat: 'json'
            status: 503
          }
    }
  } & {
    '/sandboxes/:sandboxID/connect': {
      $post:
        | {
            input: { param: { sandboxID: string } } & { json: ConnectSandbox }
            output: Sandbox
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { sandboxID: string } } & { json: ConnectSandbox }
            output: Sandbox
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { param: { sandboxID: string } } & { json: ConnectSandbox }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { sandboxID: string } } & { json: ConnectSandbox }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { sandboxID: string } } & { json: ConnectSandbox }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { sandboxID: string } } & { json: ConnectSandbox }
            output: Error
            outputFormat: 'json'
            status: 409
          }
        | {
            input: { param: { sandboxID: string } } & { json: ConnectSandbox }
            output: Error
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { sandboxID: string } } & { json: ConnectSandbox }
            output: Error
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { param: { sandboxID: string } } & { json: ConnectSandbox }
            output: Error
            outputFormat: 'json'
            status: 503
          }
        | {
            input: { param: { sandboxID: string } } & { json: ConnectSandbox }
            output: Error
            outputFormat: 'json'
            status: 504
          }
    }
  } & {
    '/v2/sandboxes/:sandboxID/connect': {
      $post:
        | {
            input: { param: { sandboxID: string } } & { json: ConnectSandboxV2 }
            output: Sandbox
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { sandboxID: string } } & { json: ConnectSandboxV2 }
            output: Sandbox
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { param: { sandboxID: string } } & { json: ConnectSandboxV2 }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { sandboxID: string } } & { json: ConnectSandboxV2 }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { sandboxID: string } } & { json: ConnectSandboxV2 }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { sandboxID: string } } & { json: ConnectSandboxV2 }
            output: Error
            outputFormat: 'json'
            status: 409
          }
        | {
            input: { param: { sandboxID: string } } & { json: ConnectSandboxV2 }
            output: Error
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { sandboxID: string } } & { json: ConnectSandboxV2 }
            output: Error
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { param: { sandboxID: string } } & { json: ConnectSandboxV2 }
            output: Error
            outputFormat: 'json'
            status: 503
          }
        | {
            input: { param: { sandboxID: string } } & { json: ConnectSandboxV2 }
            output: Error
            outputFormat: 'json'
            status: 504
          }
    }
  } & {
    '/sandboxes/:sandboxID/timeout': {
      $post:
        | {
            input: { param: { sandboxID: string } } & { json: SandboxTimeoutRequest }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { sandboxID: string } } & { json: SandboxTimeoutRequest }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { sandboxID: string } } & { json: SandboxTimeoutRequest }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { sandboxID: string } } & { json: SandboxTimeoutRequest }
            output: Error
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { sandboxID: string } } & { json: SandboxTimeoutRequest }
            output: Error
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/sandboxes/:sandboxID/network': {
      $put:
        | {
            input: { param: { sandboxID: string } } & { json: SandboxNetworkUpdateConfig }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { sandboxID: string } } & { json: SandboxNetworkUpdateConfig }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { sandboxID: string } } & { json: SandboxNetworkUpdateConfig }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { sandboxID: string } } & { json: SandboxNetworkUpdateConfig }
            output: Error
            outputFormat: 'json'
            status: 409
          }
        | {
            input: { param: { sandboxID: string } } & { json: SandboxNetworkUpdateConfig }
            output: Error
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { sandboxID: string } } & { json: SandboxNetworkUpdateConfig }
            output: Error
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/sandboxes/:sandboxID/refreshes': {
      $post:
        | {
            input: { param: { sandboxID: string } } & { json: SandboxRefreshRequest }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { sandboxID: string } } & { json: SandboxRefreshRequest }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { sandboxID: string } } & { json: SandboxRefreshRequest }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { sandboxID: string } } & { json: SandboxRefreshRequest }
            output: Error
            outputFormat: 'json'
            status: 429
          }
    }
  } & {
    '/sandboxes/:sandboxID/snapshots': {
      $post:
        | {
            input: { param: { sandboxID: string } } & {
              header: { 'Idempotency-Key'?: string | undefined }
            } & { json: SandboxSnapshotRequest }
            output: SnapshotInfo
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { param: { sandboxID: string } } & {
              header: { 'Idempotency-Key'?: string | undefined }
            } & { json: SandboxSnapshotRequest }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { sandboxID: string } } & {
              header: { 'Idempotency-Key'?: string | undefined }
            } & { json: SandboxSnapshotRequest }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { sandboxID: string } } & {
              header: { 'Idempotency-Key'?: string | undefined }
            } & { json: SandboxSnapshotRequest }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { sandboxID: string } } & {
              header: { 'Idempotency-Key'?: string | undefined }
            } & { json: SandboxSnapshotRequest }
            output: Error
            outputFormat: 'json'
            status: 409
          }
        | {
            input: { param: { sandboxID: string } } & {
              header: { 'Idempotency-Key'?: string | undefined }
            } & { json: SandboxSnapshotRequest }
            output: Error
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { sandboxID: string } } & {
              header: { 'Idempotency-Key'?: string | undefined }
            } & { json: SandboxSnapshotRequest }
            output: Error
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { sandboxID: string } } & {
              header: { 'Idempotency-Key'?: string | undefined }
            } & { json: SandboxSnapshotRequest }
            output: Error
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { param: { sandboxID: string } } & {
              header: { 'Idempotency-Key'?: string | undefined }
            } & { json: SandboxSnapshotRequest }
            output: Error
            outputFormat: 'json'
            status: 503
          }
    }
  } & {
    '/snapshots': {
      $get:
        | {
            input: {
              query: {
                sandboxID?: string | undefined
                name?: string | undefined
                limit?: number | undefined
                nextToken?: string | undefined
              }
            }
            output: SnapshotInfo[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                sandboxID?: string | undefined
                name?: string | undefined
                limit?: number | undefined
                nextToken?: string | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              query: {
                sandboxID?: string | undefined
                name?: string | undefined
                limit?: number | undefined
                nextToken?: string | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 429
          }
        | {
            input: {
              query: {
                sandboxID?: string | undefined
                name?: string | undefined
                limit?: number | undefined
                nextToken?: string | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/v3/templates': {
      $post:
        | {
            input: { header: { 'Idempotency-Key'?: string | undefined } } & {
              json: TemplateBuildRequestV3
            }
            output: TemplateRequestResponseV3
            outputFormat: 'json'
            status: 202
          }
        | {
            input: { header: { 'Idempotency-Key'?: string | undefined } } & {
              json: TemplateBuildRequestV3
            }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { header: { 'Idempotency-Key'?: string | undefined } } & {
              json: TemplateBuildRequestV3
            }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { header: { 'Idempotency-Key'?: string | undefined } } & {
              json: TemplateBuildRequestV3
            }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { header: { 'Idempotency-Key'?: string | undefined } } & {
              json: TemplateBuildRequestV3
            }
            output: Error
            outputFormat: 'json'
            status: 409
          }
        | {
            input: { header: { 'Idempotency-Key'?: string | undefined } } & {
              json: TemplateBuildRequestV3
            }
            output: Error
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { header: { 'Idempotency-Key'?: string | undefined } } & {
              json: TemplateBuildRequestV3
            }
            output: Error
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { header: { 'Idempotency-Key'?: string | undefined } } & {
              json: TemplateBuildRequestV3
            }
            output: Error
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { header: { 'Idempotency-Key'?: string | undefined } } & {
              json: TemplateBuildRequestV3
            }
            output: Error
            outputFormat: 'json'
            status: 503
          }
    }
  } & {
    '/v2/templates': {
      $get:
        | {
            input: {
              query: {
                teamID?: string | undefined
                nextToken?: string | undefined
                limit?: number | undefined
              }
            }
            output: Template[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                teamID?: string | undefined
                nextToken?: string | undefined
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
                teamID?: string | undefined
                nextToken?: string | undefined
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
                teamID?: string | undefined
                nextToken?: string | undefined
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
                teamID?: string | undefined
                nextToken?: string | undefined
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
                teamID?: string | undefined
                nextToken?: string | undefined
                limit?: number | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/templates/:templateID/files/:hash': {
      $get:
        | {
            input: { param: { templateID: string; hash: string } }
            output: TemplateBuildFileUpload
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { param: { templateID: string; hash: string } }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { templateID: string; hash: string } }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { templateID: string; hash: string } }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { templateID: string; hash: string } }
            output: Error
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { templateID: string; hash: string } }
            output: Error
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/templates': {
      $get:
        | {
            input: { query: { teamID?: string | undefined } }
            output: Template[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { teamID?: string | undefined } }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { query: { teamID?: string | undefined } }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { query: { teamID?: string | undefined } }
            output: Error
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { query: { teamID?: string | undefined } }
            output: Error
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/default-templates': {
      $get:
        | { input: {}; output: Template[]; outputFormat: 'json'; status: 200 }
        | { input: {}; output: Error; outputFormat: 'json'; status: 401 }
        | { input: {}; output: Error; outputFormat: 'json'; status: 429 }
        | { input: {}; output: Error; outputFormat: 'json'; status: 500 }
    }
  } & {
    '/unstable/templates/search': {
      $get:
        | {
            input: {
              query: {
                search?: string | undefined
                sort?:
                  | 'created_at_desc'
                  | 'created_at_asc'
                  | 'updated_at_desc'
                  | 'updated_at_asc'
                  | undefined
                public?: boolean | undefined
                limit?: number | undefined
                cursor?: string | undefined
              }
            }
            output: TemplateSearchResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                search?: string | undefined
                sort?:
                  | 'created_at_desc'
                  | 'created_at_asc'
                  | 'updated_at_desc'
                  | 'updated_at_asc'
                  | undefined
                public?: boolean | undefined
                limit?: number | undefined
                cursor?: string | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                search?: string | undefined
                sort?:
                  | 'created_at_desc'
                  | 'created_at_asc'
                  | 'updated_at_desc'
                  | 'updated_at_asc'
                  | undefined
                public?: boolean | undefined
                limit?: number | undefined
                cursor?: string | undefined
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
                sort?:
                  | 'created_at_desc'
                  | 'created_at_asc'
                  | 'updated_at_desc'
                  | 'updated_at_asc'
                  | undefined
                public?: boolean | undefined
                limit?: number | undefined
                cursor?: string | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 429
          }
        | {
            input: {
              query: {
                search?: string | undefined
                sort?:
                  | 'created_at_desc'
                  | 'created_at_asc'
                  | 'updated_at_desc'
                  | 'updated_at_asc'
                  | undefined
                public?: boolean | undefined
                limit?: number | undefined
                cursor?: string | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/unstable/builds': {
      $get:
        | {
            input: {
              query: {
                build_id_or_template?: string | undefined
                statuses?: BuildStatus[] | undefined
                limit?: number | undefined
                cursor?: string | undefined
              }
            }
            output: BuildsListResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                build_id_or_template?: string | undefined
                statuses?: BuildStatus[] | undefined
                limit?: number | undefined
                cursor?: string | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                build_id_or_template?: string | undefined
                statuses?: BuildStatus[] | undefined
                limit?: number | undefined
                cursor?: string | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              query: {
                build_id_or_template?: string | undefined
                statuses?: BuildStatus[] | undefined
                limit?: number | undefined
                cursor?: string | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: {
              query: {
                build_id_or_template?: string | undefined
                statuses?: BuildStatus[] | undefined
                limit?: number | undefined
                cursor?: string | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 429
          }
        | {
            input: {
              query: {
                build_id_or_template?: string | undefined
                statuses?: BuildStatus[] | undefined
                limit?: number | undefined
                cursor?: string | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/unstable/builds/statuses': {
      $get:
        | {
            input: { query: { build_ids: string[] } }
            output: BuildsStatusesResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { build_ids: string[] } }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { query: { build_ids: string[] } }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { query: { build_ids: string[] } }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { query: { build_ids: string[] } }
            output: Error
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { query: { build_ids: string[] } }
            output: Error
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/unstable/builds/:buildID': {
      $get:
        | {
            input: { param: { buildID: string } }
            output: BuildInfo
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { buildID: string } }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { buildID: string } }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { buildID: string } }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { buildID: string } }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { buildID: string } }
            output: Error
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { buildID: string } }
            output: Error
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/templates/:templateID': {
      $get:
        | {
            input: { param: { templateID: string } } & {
              query: { nextToken?: string | undefined; limit?: number | undefined }
            }
            output: TemplateWithBuilds
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { templateID: string } } & {
              query: { nextToken?: string | undefined; limit?: number | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { templateID: string } } & {
              query: { nextToken?: string | undefined; limit?: number | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { templateID: string } } & {
              query: { nextToken?: string | undefined; limit?: number | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 500
          }
      $delete:
        | {
            input: { param: { templateID: string } }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { templateID: string } }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { templateID: string } }
            output: Error
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { templateID: string } }
            output: Error
            outputFormat: 'json'
            status: 500
          }
      $patch:
        | {
            input: { param: { templateID: string } } & { json: TemplateUpdateRequest }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { param: { templateID: string } } & { json: TemplateUpdateRequest }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { templateID: string } } & { json: TemplateUpdateRequest }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { templateID: string } } & { json: TemplateUpdateRequest }
            output: Error
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { templateID: string } } & { json: TemplateUpdateRequest }
            output: Error
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/templates/:templateID/builds': {
      $get:
        | {
            input: { param: { templateID: string } } & {
              query: {
                nextToken?: string | undefined
                limit?: number | undefined
                statuses?: TemplateBuildStatus[] | undefined
                tags?: string[] | undefined
              }
            }
            output: TemplateBuildWithTags[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { templateID: string } } & {
              query: {
                nextToken?: string | undefined
                limit?: number | undefined
                statuses?: TemplateBuildStatus[] | undefined
                tags?: string[] | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { templateID: string } } & {
              query: {
                nextToken?: string | undefined
                limit?: number | undefined
                statuses?: TemplateBuildStatus[] | undefined
                tags?: string[] | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { templateID: string } } & {
              query: {
                nextToken?: string | undefined
                limit?: number | undefined
                statuses?: TemplateBuildStatus[] | undefined
                tags?: string[] | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { templateID: string } } & {
              query: {
                nextToken?: string | undefined
                limit?: number | undefined
                statuses?: TemplateBuildStatus[] | undefined
                tags?: string[] | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { templateID: string } } & {
              query: {
                nextToken?: string | undefined
                limit?: number | undefined
                statuses?: TemplateBuildStatus[] | undefined
                tags?: string[] | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { templateID: string } } & {
              query: {
                nextToken?: string | undefined
                limit?: number | undefined
                statuses?: TemplateBuildStatus[] | undefined
                tags?: string[] | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/v2/templates/:templateID/builds/:buildID': {
      $post:
        | {
            input: { param: { templateID: string; buildID: string } } & {
              header: { 'Idempotency-Key'?: string | undefined }
            } & { json: TemplateBuildStartV2 }
            output: {}
            outputFormat: string
            status: 202
          }
        | {
            input: { param: { templateID: string; buildID: string } } & {
              header: { 'Idempotency-Key'?: string | undefined }
            } & { json: TemplateBuildStartV2 }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { templateID: string; buildID: string } } & {
              header: { 'Idempotency-Key'?: string | undefined }
            } & { json: TemplateBuildStartV2 }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { templateID: string; buildID: string } } & {
              header: { 'Idempotency-Key'?: string | undefined }
            } & { json: TemplateBuildStartV2 }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { templateID: string; buildID: string } } & {
              header: { 'Idempotency-Key'?: string | undefined }
            } & { json: TemplateBuildStartV2 }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { templateID: string; buildID: string } } & {
              header: { 'Idempotency-Key'?: string | undefined }
            } & { json: TemplateBuildStartV2 }
            output: Error
            outputFormat: 'json'
            status: 409
          }
        | {
            input: { param: { templateID: string; buildID: string } } & {
              header: { 'Idempotency-Key'?: string | undefined }
            } & { json: TemplateBuildStartV2 }
            output: Error
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { templateID: string; buildID: string } } & {
              header: { 'Idempotency-Key'?: string | undefined }
            } & { json: TemplateBuildStartV2 }
            output: Error
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { templateID: string; buildID: string } } & {
              header: { 'Idempotency-Key'?: string | undefined }
            } & { json: TemplateBuildStartV2 }
            output: Error
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { param: { templateID: string; buildID: string } } & {
              header: { 'Idempotency-Key'?: string | undefined }
            } & { json: TemplateBuildStartV2 }
            output: Error
            outputFormat: 'json'
            status: 503
          }
    }
  } & {
    '/v2/templates/:templateID': {
      $get:
        | {
            input: { param: { templateID: string } }
            output: TemplateV2
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { templateID: string } }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { templateID: string } }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { templateID: string } }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { templateID: string } }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { templateID: string } }
            output: Error
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { templateID: string } }
            output: Error
            outputFormat: 'json'
            status: 500
          }
      $patch:
        | {
            input: { param: { templateID: string } } & { json: TemplateUpdateRequest }
            output: TemplateUpdateResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { templateID: string } } & { json: TemplateUpdateRequest }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { templateID: string } } & { json: TemplateUpdateRequest }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { templateID: string } } & { json: TemplateUpdateRequest }
            output: Error
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { templateID: string } } & { json: TemplateUpdateRequest }
            output: Error
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/templates/:templateID/builds/:buildID/status': {
      $get:
        | {
            input: { param: { templateID: string; buildID: string } } & {
              query: {
                logsOffset?: number | undefined
                limit?: number | undefined
                level?: LogLevel | undefined
              }
            }
            output: TemplateBuildInfo
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { templateID: string; buildID: string } } & {
              query: {
                logsOffset?: number | undefined
                limit?: number | undefined
                level?: LogLevel | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { templateID: string; buildID: string } } & {
              query: {
                logsOffset?: number | undefined
                limit?: number | undefined
                level?: LogLevel | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { templateID: string; buildID: string } } & {
              query: {
                logsOffset?: number | undefined
                limit?: number | undefined
                level?: LogLevel | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { templateID: string; buildID: string } } & {
              query: {
                logsOffset?: number | undefined
                limit?: number | undefined
                level?: LogLevel | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/templates/:templateID/builds/:buildID/logs': {
      $get:
        | {
            input: { param: { templateID: string; buildID: string } } & {
              query: {
                cursor?: bigint | undefined
                limit?: number | undefined
                direction?: LogsDirection | undefined
                level?: LogLevel | undefined
                source?: LogsSource | undefined
              }
            }
            output: TemplateBuildLogsResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { templateID: string; buildID: string } } & {
              query: {
                cursor?: bigint | undefined
                limit?: number | undefined
                direction?: LogsDirection | undefined
                level?: LogLevel | undefined
                source?: LogsSource | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { templateID: string; buildID: string } } & {
              query: {
                cursor?: bigint | undefined
                limit?: number | undefined
                direction?: LogsDirection | undefined
                level?: LogLevel | undefined
                source?: LogsSource | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { templateID: string; buildID: string } } & {
              query: {
                cursor?: bigint | undefined
                limit?: number | undefined
                direction?: LogsDirection | undefined
                level?: LogLevel | undefined
                source?: LogsSource | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { templateID: string; buildID: string } } & {
              query: {
                cursor?: bigint | undefined
                limit?: number | undefined
                direction?: LogsDirection | undefined
                level?: LogLevel | undefined
                source?: LogsSource | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/templates/tags': {
      $post:
        | {
            input: { header: { 'Idempotency-Key'?: string | undefined } } & {
              json: AssignTemplateTagsRequest
            }
            output: AssignedTemplateTags
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { header: { 'Idempotency-Key'?: string | undefined } } & {
              json: AssignTemplateTagsRequest
            }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { header: { 'Idempotency-Key'?: string | undefined } } & {
              json: AssignTemplateTagsRequest
            }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { header: { 'Idempotency-Key'?: string | undefined } } & {
              json: AssignTemplateTagsRequest
            }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { header: { 'Idempotency-Key'?: string | undefined } } & {
              json: AssignTemplateTagsRequest
            }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { header: { 'Idempotency-Key'?: string | undefined } } & {
              json: AssignTemplateTagsRequest
            }
            output: Error
            outputFormat: 'json'
            status: 408
          }
        | {
            input: { header: { 'Idempotency-Key'?: string | undefined } } & {
              json: AssignTemplateTagsRequest
            }
            output: Error
            outputFormat: 'json'
            status: 409
          }
        | {
            input: { header: { 'Idempotency-Key'?: string | undefined } } & {
              json: AssignTemplateTagsRequest
            }
            output: string
            outputFormat: 'text'
            status: 413
          }
        | {
            input: { header: { 'Idempotency-Key'?: string | undefined } } & {
              json: AssignTemplateTagsRequest
            }
            output: Error
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { header: { 'Idempotency-Key'?: string | undefined } } & {
              json: AssignTemplateTagsRequest
            }
            output: Error
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { header: { 'Idempotency-Key'?: string | undefined } } & {
              json: AssignTemplateTagsRequest
            }
            output: Error
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { header: { 'Idempotency-Key'?: string | undefined } } & {
              json: AssignTemplateTagsRequest
            }
            output: Error
            outputFormat: 'json'
            status: 503
          }
      $delete:
        | {
            input: { json: DeleteTemplateTagsRequest }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { json: DeleteTemplateTagsRequest }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { json: DeleteTemplateTagsRequest }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { json: DeleteTemplateTagsRequest }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { json: DeleteTemplateTagsRequest }
            output: Error
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { json: DeleteTemplateTagsRequest }
            output: Error
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/templates/:templateID/tags': {
      $get:
        | {
            input: { param: { templateID: string } }
            output: TemplateTag[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { templateID: string } }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { templateID: string } }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { templateID: string } }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { templateID: string } }
            output: Error
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { templateID: string } }
            output: Error
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/templates/:templateID/tags/groups': {
      $get:
        | {
            input: { param: { templateID: string } } & {
              query: {
                assignmentLimit?: number | undefined
                tagsLimit?: number | undefined
                tagsCursor?: string | undefined
                search?: string | undefined
                sort?: 'latest_desc' | 'latest_asc' | 'name_asc' | 'name_desc' | undefined
              }
            }
            output: TemplateTagGroupsResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { templateID: string } } & {
              query: {
                assignmentLimit?: number | undefined
                tagsLimit?: number | undefined
                tagsCursor?: string | undefined
                search?: string | undefined
                sort?: 'latest_desc' | 'latest_asc' | 'name_asc' | 'name_desc' | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { templateID: string } } & {
              query: {
                assignmentLimit?: number | undefined
                tagsLimit?: number | undefined
                tagsCursor?: string | undefined
                search?: string | undefined
                sort?: 'latest_desc' | 'latest_asc' | 'name_asc' | 'name_desc' | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { templateID: string } } & {
              query: {
                assignmentLimit?: number | undefined
                tagsLimit?: number | undefined
                tagsCursor?: string | undefined
                search?: string | undefined
                sort?: 'latest_desc' | 'latest_asc' | 'name_asc' | 'name_desc' | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { templateID: string } } & {
              query: {
                assignmentLimit?: number | undefined
                tagsLimit?: number | undefined
                tagsCursor?: string | undefined
                search?: string | undefined
                sort?: 'latest_desc' | 'latest_asc' | 'name_asc' | 'name_desc' | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { templateID: string } } & {
              query: {
                assignmentLimit?: number | undefined
                tagsLimit?: number | undefined
                tagsCursor?: string | undefined
                search?: string | undefined
                sort?: 'latest_desc' | 'latest_asc' | 'name_asc' | 'name_desc' | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { templateID: string } } & {
              query: {
                assignmentLimit?: number | undefined
                tagsLimit?: number | undefined
                tagsCursor?: string | undefined
                search?: string | undefined
                sort?: 'latest_desc' | 'latest_asc' | 'name_asc' | 'name_desc' | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/templates/:templateID/tags/count': {
      $get:
        | {
            input: { param: { templateID: string } }
            output: TemplateTagsCountResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { templateID: string } }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { templateID: string } }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { templateID: string } }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { templateID: string } }
            output: Error
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { templateID: string } }
            output: Error
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/templates/:templateID/tags/exists': {
      $get:
        | {
            input: { param: { templateID: string } } & { query: { tag: string } }
            output: TemplateTagExistsResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { templateID: string } } & { query: { tag: string } }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { templateID: string } } & { query: { tag: string } }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { templateID: string } } & { query: { tag: string } }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { templateID: string } } & { query: { tag: string } }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { templateID: string } } & { query: { tag: string } }
            output: Error
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { templateID: string } } & { query: { tag: string } }
            output: Error
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/templates/:templateID/tags/:tag/assignments': {
      $get:
        | {
            input: { param: { templateID: string; tag: string } } & {
              query: { cursor?: string | undefined; limit?: number | undefined }
            }
            output: TemplateTagAssignmentsResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { templateID: string; tag: string } } & {
              query: { cursor?: string | undefined; limit?: number | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { templateID: string; tag: string } } & {
              query: { cursor?: string | undefined; limit?: number | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { templateID: string; tag: string } } & {
              query: { cursor?: string | undefined; limit?: number | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { templateID: string; tag: string } } & {
              query: { cursor?: string | undefined; limit?: number | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { templateID: string; tag: string } } & {
              query: { cursor?: string | undefined; limit?: number | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { templateID: string; tag: string } } & {
              query: { cursor?: string | undefined; limit?: number | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/templates/aliases/:alias': {
      $get:
        | {
            input: { param: { alias: string } }
            output: TemplateAliasResponse
            outputFormat: 'json'
            status: 200
          }
        | { input: { param: { alias: string } }; output: Error; outputFormat: 'json'; status: 400 }
        | { input: { param: { alias: string } }; output: Error; outputFormat: 'json'; status: 403 }
        | { input: { param: { alias: string } }; output: Error; outputFormat: 'json'; status: 404 }
        | { input: { param: { alias: string } }; output: Error; outputFormat: 'json'; status: 429 }
        | { input: { param: { alias: string } }; output: Error; outputFormat: 'json'; status: 500 }
    }
  } & {
    '/nodes': {
      $get:
        | {
            input: { query: { clusterID?: string | undefined } }
            output: Node[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { clusterID?: string | undefined } }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { query: { clusterID?: string | undefined } }
            output: Error
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { query: { clusterID?: string | undefined } }
            output: Error
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/nodes/:nodeID': {
      $get:
        | {
            input: { param: { nodeID: string } } & { query: { clusterID?: string | undefined } }
            output: NodeDetail
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { nodeID: string } } & { query: { clusterID?: string | undefined } }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { nodeID: string } } & { query: { clusterID?: string | undefined } }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { nodeID: string } } & { query: { clusterID?: string | undefined } }
            output: Error
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { nodeID: string } } & { query: { clusterID?: string | undefined } }
            output: Error
            outputFormat: 'json'
            status: 500
          }
      $post:
        | {
            input: { param: { nodeID: string } } & { json: NodeStatusChange }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { nodeID: string } } & { json: NodeStatusChange }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { nodeID: string } } & { json: NodeStatusChange }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { nodeID: string } } & { json: NodeStatusChange }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { nodeID: string } } & { json: NodeStatusChange }
            output: Error
            outputFormat: 'json'
            status: 409
          }
        | {
            input: { param: { nodeID: string } } & { json: NodeStatusChange }
            output: Error
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { nodeID: string } } & { json: NodeStatusChange }
            output: Error
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/nodes/:nodeID/sandboxes': {
      $get:
        | {
            input: { param: { nodeID: string } } & { query: { clusterID?: string | undefined } }
            output: NodeSandboxes
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { nodeID: string } } & { query: { clusterID?: string | undefined } }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { nodeID: string } } & { query: { clusterID?: string | undefined } }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { nodeID: string } } & { query: { clusterID?: string | undefined } }
            output: Error
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { nodeID: string } } & { query: { clusterID?: string | undefined } }
            output: Error
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/admin/teams/:teamID/sandboxes/kill': {
      $post:
        | {
            input: { param: { teamID: string } }
            output: AdminSandboxKillResult
            outputFormat: 'json'
            status: 200
          }
        | { input: { param: { teamID: string } }; output: Error; outputFormat: 'json'; status: 401 }
        | { input: { param: { teamID: string } }; output: Error; outputFormat: 'json'; status: 404 }
        | { input: { param: { teamID: string } }; output: Error; outputFormat: 'json'; status: 429 }
        | { input: { param: { teamID: string } }; output: Error; outputFormat: 'json'; status: 500 }
    }
  } & {
    '/admin/sandboxes/running-counts': {
      $get:
        | { input: {}; output: AdminTeamRunningSandboxCounts; outputFormat: 'json'; status: 200 }
        | { input: {}; output: Error; outputFormat: 'json'; status: 401 }
        | { input: {}; output: Error; outputFormat: 'json'; status: 429 }
        | { input: {}; output: Error; outputFormat: 'json'; status: 500 }
    }
  } & {
    '/admin/sandboxes/:sandboxID': {
      $get:
        | {
            input: { param: { sandboxID: string } }
            output: AdminSandbox
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { sandboxID: string } }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { sandboxID: string } }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { sandboxID: string } }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { sandboxID: string } }
            output: Error
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { sandboxID: string } }
            output: Error
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/unstable/admin/sandboxes/:sandboxID/overview': {
      $get:
        | {
            input: { param: { sandboxID: string } }
            output: AdminSandboxOverview
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { sandboxID: string } }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { sandboxID: string } }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { sandboxID: string } }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { sandboxID: string } }
            output: Error
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { sandboxID: string } }
            output: Error
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/unstable/admin/sandboxes/:sandboxID/builds': {
      $get:
        | {
            input: { param: { sandboxID: string } } & {
              query: {
                statusGroup?: AdminSandboxBuildStatusGroup[] | undefined
                tag?: string | undefined
                order?: OrderDirection | undefined
                limit?: number | undefined
                offset?: number | undefined
              }
            }
            output: AdminSandboxBuildList
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { sandboxID: string } } & {
              query: {
                statusGroup?: AdminSandboxBuildStatusGroup[] | undefined
                tag?: string | undefined
                order?: OrderDirection | undefined
                limit?: number | undefined
                offset?: number | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { sandboxID: string } } & {
              query: {
                statusGroup?: AdminSandboxBuildStatusGroup[] | undefined
                tag?: string | undefined
                order?: OrderDirection | undefined
                limit?: number | undefined
                offset?: number | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { sandboxID: string } } & {
              query: {
                statusGroup?: AdminSandboxBuildStatusGroup[] | undefined
                tag?: string | undefined
                order?: OrderDirection | undefined
                limit?: number | undefined
                offset?: number | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { sandboxID: string } } & {
              query: {
                statusGroup?: AdminSandboxBuildStatusGroup[] | undefined
                tag?: string | undefined
                order?: OrderDirection | undefined
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
    '/unstable/admin/sandboxes/:sandboxID/builds/restore': {
      $post:
        | {
            input: { param: { sandboxID: string } } & { json: AdminSandboxBuildRestoreRequest }
            output: AdminSandboxBuildRestoreResult
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { sandboxID: string } } & { json: AdminSandboxBuildRestoreRequest }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { sandboxID: string } } & { json: AdminSandboxBuildRestoreRequest }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { sandboxID: string } } & { json: AdminSandboxBuildRestoreRequest }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { sandboxID: string } } & { json: AdminSandboxBuildRestoreRequest }
            output: Error
            outputFormat: 'json'
            status: 409
          }
        | {
            input: { param: { sandboxID: string } } & { json: AdminSandboxBuildRestoreRequest }
            output: Error
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { sandboxID: string } } & { json: AdminSandboxBuildRestoreRequest }
            output: Error
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/admin/teams/:teamID/builds/cancel': {
      $post:
        | {
            input: { param: { teamID: string } }
            output: AdminBuildCancelResult
            outputFormat: 'json'
            status: 200
          }
        | { input: { param: { teamID: string } }; output: Error; outputFormat: 'json'; status: 401 }
        | { input: { param: { teamID: string } }; output: Error; outputFormat: 'json'; status: 404 }
        | { input: { param: { teamID: string } }; output: Error; outputFormat: 'json'; status: 429 }
        | { input: { param: { teamID: string } }; output: Error; outputFormat: 'json'; status: 500 }
    }
  } & {
    '/admin/teams/:teamID/api-keys': {
      $get:
        | {
            input: { param: { teamID: string } }
            output: TeamAPIKey[]
            outputFormat: 'json'
            status: 200
          }
        | { input: { param: { teamID: string } }; output: Error; outputFormat: 'json'; status: 400 }
        | { input: { param: { teamID: string } }; output: Error; outputFormat: 'json'; status: 401 }
        | { input: { param: { teamID: string } }; output: Error; outputFormat: 'json'; status: 500 }
      $post:
        | {
            input: { param: { teamID: string } } & { json: NewTeamAPIKey }
            output: CreatedTeamAPIKey
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { param: { teamID: string } } & { json: NewTeamAPIKey }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { teamID: string } } & { json: NewTeamAPIKey }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { teamID: string } } & { json: NewTeamAPIKey }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { teamID: string } } & { json: NewTeamAPIKey }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { teamID: string } } & { json: NewTeamAPIKey }
            output: Error
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { teamID: string } } & { json: NewTeamAPIKey }
            output: Error
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/admin/teams/:teamID/api-keys/:apiKeyID': {
      $delete:
        | {
            input: { param: { teamID: string; apiKeyID: string } }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { teamID: string; apiKeyID: string } }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { teamID: string; apiKeyID: string } }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { teamID: string; apiKeyID: string } }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { teamID: string; apiKeyID: string } }
            output: Error
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { teamID: string; apiKeyID: string } }
            output: Error
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/unstable/management/telemetry/names': {
      $get:
        | { input: {}; output: TelemetryNames; outputFormat: 'json'; status: 200 }
        | { input: {}; output: Error; outputFormat: 'json'; status: 401 }
        | { input: {}; output: Error; outputFormat: 'json'; status: 500 }
    }
  } & {
    '/unstable/management/clusters/:clusterID': {
      $put:
        | {
            input: { param: { clusterID: string } } & { json: ManagementClusterRegistrationRequest }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { clusterID: string } } & { json: ManagementClusterRegistrationRequest }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { clusterID: string } } & { json: ManagementClusterRegistrationRequest }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { clusterID: string } } & { json: ManagementClusterRegistrationRequest }
            output: Error
            outputFormat: 'json'
            status: 409
          }
        | {
            input: { param: { clusterID: string } } & { json: ManagementClusterRegistrationRequest }
            output: Error
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { param: { clusterID: string } } & { json: ManagementClusterRegistrationRequest }
            output: Error
            outputFormat: 'json'
            status: 503
          }
      $delete:
        | { input: { param: { clusterID: string } }; output: {}; outputFormat: string; status: 204 }
        | {
            input: { param: { clusterID: string } }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { clusterID: string } }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { clusterID: string } }
            output: Error
            outputFormat: 'json'
            status: 409
          }
        | {
            input: { param: { clusterID: string } }
            output: Error
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { param: { clusterID: string } }
            output: Error
            outputFormat: 'json'
            status: 503
          }
    }
  } & {
    '/unstable/management/clusters/:clusterID/telemetry': {
      $put:
        | {
            input: { param: { clusterID: string } } & { json: { telemetry_client_id: string } }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { clusterID: string } } & { json: { telemetry_client_id: string } }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { clusterID: string } } & { json: { telemetry_client_id: string } }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { clusterID: string } } & { json: { telemetry_client_id: string } }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { clusterID: string } } & { json: { telemetry_client_id: string } }
            output: Error
            outputFormat: 'json'
            status: 409
          }
        | {
            input: { param: { clusterID: string } } & { json: { telemetry_client_id: string } }
            output: Error
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { param: { clusterID: string } } & { json: { telemetry_client_id: string } }
            output: Error
            outputFormat: 'json'
            status: 503
          }
    }
  } & {
    '/unstable/management/clusters/:clusterID/projects': {
      $get:
        | {
            input: { param: { clusterID: string } }
            output: ManagementClusterProjects
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { clusterID: string } }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { clusterID: string } }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { clusterID: string } }
            output: Error
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/unstable/management/clusters/:clusterID/deletion': {
      $put:
        | { input: { param: { clusterID: string } }; output: {}; outputFormat: string; status: 204 }
        | {
            input: { param: { clusterID: string } }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { clusterID: string } }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { clusterID: string } }
            output: Error
            outputFormat: 'json'
            status: 409
          }
        | {
            input: { param: { clusterID: string } }
            output: Error
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { param: { clusterID: string } }
            output: Error
            outputFormat: 'json'
            status: 503
          }
    }
  } & {
    '/unstable/management/clusters/:clusterID/destroy-readiness': {
      $get:
        | { input: { param: { clusterID: string } }; output: {}; outputFormat: string; status: 204 }
        | {
            input: { param: { clusterID: string } }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { clusterID: string } }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { clusterID: string } }
            output: Error
            outputFormat: 'json'
            status: 409
          }
        | {
            input: { param: { clusterID: string } }
            output: Error
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { param: { clusterID: string } }
            output: Error
            outputFormat: 'json'
            status: 503
          }
    }
  } & {
    '/unstable/management/projects/:projectID/cluster/:clusterID': {
      $put:
        | {
            input: { param: { projectID: string; clusterID: string } }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { projectID: string; clusterID: string } }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { projectID: string; clusterID: string } }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { projectID: string; clusterID: string } }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { projectID: string; clusterID: string } }
            output: Error
            outputFormat: 'json'
            status: 409
          }
        | {
            input: { param: { projectID: string; clusterID: string } }
            output: Error
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { param: { projectID: string; clusterID: string } }
            output: Error
            outputFormat: 'json'
            status: 503
          }
      $delete:
        | {
            input: { param: { projectID: string; clusterID: string } }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { projectID: string; clusterID: string } }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { projectID: string; clusterID: string } }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { projectID: string; clusterID: string } }
            output: Error
            outputFormat: 'json'
            status: 409
          }
        | {
            input: { param: { projectID: string; clusterID: string } }
            output: Error
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/unstable/management/projects/:projectID': {
      $put:
        | {
            input: { param: { projectID: string } } & { json: ManagementProjectUpsertRequest }
            output: ManagementProject
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { projectID: string } } & { json: ManagementProjectUpsertRequest }
            output: ManagementProject
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { param: { projectID: string } } & { json: ManagementProjectUpsertRequest }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { projectID: string } } & { json: ManagementProjectUpsertRequest }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { projectID: string } } & { json: ManagementProjectUpsertRequest }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { projectID: string } } & { json: ManagementProjectUpsertRequest }
            output: Error
            outputFormat: 'json'
            status: 409
          }
        | {
            input: { param: { projectID: string } } & { json: ManagementProjectUpsertRequest }
            output: Error
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { param: { projectID: string } } & { json: ManagementProjectUpsertRequest }
            output: Error
            outputFormat: 'json'
            status: 503
          }
      $delete:
        | { input: { param: { projectID: string } }; output: {}; outputFormat: string; status: 204 }
        | {
            input: { param: { projectID: string } }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { projectID: string } }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { projectID: string } }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { projectID: string } }
            output: Error
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/unstable/management/projects/:projectID/members/:userID': {
      $put:
        | {
            input: { param: { projectID: string; userID: string } } & {
              json: ManagementProjectMemberApplyRequest
            }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { projectID: string; userID: string } } & {
              json: ManagementProjectMemberApplyRequest
            }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { projectID: string; userID: string } } & {
              json: ManagementProjectMemberApplyRequest
            }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { projectID: string; userID: string } } & {
              json: ManagementProjectMemberApplyRequest
            }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { projectID: string; userID: string } } & {
              json: ManagementProjectMemberApplyRequest
            }
            output: Error
            outputFormat: 'json'
            status: 409
          }
        | {
            input: { param: { projectID: string; userID: string } } & {
              json: ManagementProjectMemberApplyRequest
            }
            output: Error
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/unstable/management/projects/:projectID/limits': {
      $put:
        | {
            input: { param: { projectID: string } } & { json: ManagementProjectLimits }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { projectID: string } } & { json: ManagementProjectLimits }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { projectID: string } } & { json: ManagementProjectLimits }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { projectID: string } } & { json: ManagementProjectLimits }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { projectID: string } } & { json: ManagementProjectLimits }
            output: Error
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/unstable/management/projects/:projectID/settings': {
      $put:
        | {
            input: { param: { projectID: string } } & { json: ManagementProjectSettingsRequest }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { projectID: string } } & { json: ManagementProjectSettingsRequest }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { projectID: string } } & { json: ManagementProjectSettingsRequest }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { projectID: string } } & { json: ManagementProjectSettingsRequest }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { projectID: string } } & { json: ManagementProjectSettingsRequest }
            output: Error
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/unstable/management/projects/:projectID/block': {
      $put:
        | {
            input: { param: { projectID: string } } & { json: ManagementProjectBlockRequest }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { projectID: string } } & { json: ManagementProjectBlockRequest }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { projectID: string } } & { json: ManagementProjectBlockRequest }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { projectID: string } } & { json: ManagementProjectBlockRequest }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { projectID: string } } & { json: ManagementProjectBlockRequest }
            output: Error
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/unstable/management/projects/:projectID/ban': {
      $put:
        | {
            input: { param: { projectID: string } } & { json: ManagementProjectBanRequest }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { projectID: string } } & { json: ManagementProjectBanRequest }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { projectID: string } } & { json: ManagementProjectBanRequest }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { projectID: string } } & { json: ManagementProjectBanRequest }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { projectID: string } } & { json: ManagementProjectBanRequest }
            output: Error
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/unstable/admin/teams/query': {
      $post:
        | {
            input: { json: AdminTeamListRequest }
            output: AdminTeamList
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: AdminTeamListRequest }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { json: AdminTeamListRequest }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { json: AdminTeamListRequest }
            output: Error
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { json: AdminTeamListRequest }
            output: Error
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/unstable/admin/teams/bans': {
      $post:
        | {
            input: { json: AdminTeamsBanRequest }
            output: AdminTeamsBanResult
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: AdminTeamsBanRequest }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { json: AdminTeamsBanRequest }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { json: AdminTeamsBanRequest }
            output: Error
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { json: AdminTeamsBanRequest }
            output: Error
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/unstable/admin/teams/:teamID': {
      $get:
        | {
            input: { param: { teamID: string } }
            output: AdminTeam
            outputFormat: 'json'
            status: 200
          }
        | { input: { param: { teamID: string } }; output: Error; outputFormat: 'json'; status: 400 }
        | { input: { param: { teamID: string } }; output: Error; outputFormat: 'json'; status: 401 }
        | { input: { param: { teamID: string } }; output: Error; outputFormat: 'json'; status: 404 }
        | { input: { param: { teamID: string } }; output: Error; outputFormat: 'json'; status: 429 }
        | { input: { param: { teamID: string } }; output: Error; outputFormat: 'json'; status: 500 }
    }
  } & {
    '/unstable/admin/teams/:teamID/scheduling-labels': {
      $put:
        | {
            input: { param: { teamID: string } } & { json: AdminTeamSchedulingLabels }
            output: AdminTeamSchedulingLabels
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { teamID: string } } & { json: AdminTeamSchedulingLabels }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { teamID: string } } & { json: AdminTeamSchedulingLabels }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { teamID: string } } & { json: AdminTeamSchedulingLabels }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { teamID: string } } & { json: AdminTeamSchedulingLabels }
            output: Error
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { teamID: string } } & { json: AdminTeamSchedulingLabels }
            output: Error
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/unstable/admin/teams/:teamID/ban': {
      $put:
        | {
            input: { param: { teamID: string } }
            output: AdminTeamBanResult
            outputFormat: 'json'
            status: 200
          }
        | { input: { param: { teamID: string } }; output: Error; outputFormat: 'json'; status: 400 }
        | { input: { param: { teamID: string } }; output: Error; outputFormat: 'json'; status: 401 }
        | { input: { param: { teamID: string } }; output: Error; outputFormat: 'json'; status: 404 }
        | { input: { param: { teamID: string } }; output: Error; outputFormat: 'json'; status: 429 }
        | { input: { param: { teamID: string } }; output: Error; outputFormat: 'json'; status: 500 }
      $delete:
        | { input: { param: { teamID: string } }; output: {}; outputFormat: string; status: 204 }
        | { input: { param: { teamID: string } }; output: Error; outputFormat: 'json'; status: 400 }
        | { input: { param: { teamID: string } }; output: Error; outputFormat: 'json'; status: 401 }
        | { input: { param: { teamID: string } }; output: Error; outputFormat: 'json'; status: 404 }
        | { input: { param: { teamID: string } }; output: Error; outputFormat: 'json'; status: 429 }
        | { input: { param: { teamID: string } }; output: Error; outputFormat: 'json'; status: 500 }
    }
  } & {
    '/unstable/admin/clusters': {
      $get:
        | {
            input: {
              query: {
                limit?: number | undefined
                offset?: number | undefined
                search?: string | undefined
                sortBy?: 'endpoint' | 'name' | 'teamCount' | undefined
                sortOrder?: 'asc' | 'desc' | undefined
              }
            }
            output: ClusterListResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                limit?: number | undefined
                offset?: number | undefined
                search?: string | undefined
                sortBy?: 'endpoint' | 'name' | 'teamCount' | undefined
                sortOrder?: 'asc' | 'desc' | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                limit?: number | undefined
                offset?: number | undefined
                search?: string | undefined
                sortBy?: 'endpoint' | 'name' | 'teamCount' | undefined
                sortOrder?: 'asc' | 'desc' | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              query: {
                limit?: number | undefined
                offset?: number | undefined
                search?: string | undefined
                sortBy?: 'endpoint' | 'name' | 'teamCount' | undefined
                sortOrder?: 'asc' | 'desc' | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 500
          }
        | {
            input: {
              query: {
                limit?: number | undefined
                offset?: number | undefined
                search?: string | undefined
                sortBy?: 'endpoint' | 'name' | 'teamCount' | undefined
                sortOrder?: 'asc' | 'desc' | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 503
          }
      $post:
        | {
            input: { json: AdminClusterCreateRequest }
            output: ClusterDetail
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { json: AdminClusterCreateRequest }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { json: AdminClusterCreateRequest }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { json: AdminClusterCreateRequest }
            output: Error
            outputFormat: 'json'
            status: 409
          }
        | {
            input: { json: AdminClusterCreateRequest }
            output: Error
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { json: AdminClusterCreateRequest }
            output: Error
            outputFormat: 'json'
            status: 503
          }
    }
  } & {
    '/unstable/admin/clusters/:clusterID': {
      $get:
        | {
            input: { param: { clusterID: string } } & {
              query: { teamsLimit?: number | undefined; teamsOffset?: number | undefined }
            }
            output: ClusterDetailWithTeams
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { clusterID: string } } & {
              query: { teamsLimit?: number | undefined; teamsOffset?: number | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { clusterID: string } } & {
              query: { teamsLimit?: number | undefined; teamsOffset?: number | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { clusterID: string } } & {
              query: { teamsLimit?: number | undefined; teamsOffset?: number | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { clusterID: string } } & {
              query: { teamsLimit?: number | undefined; teamsOffset?: number | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { param: { clusterID: string } } & {
              query: { teamsLimit?: number | undefined; teamsOffset?: number | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 503
          }
      $patch:
        | {
            input: { param: { clusterID: string } } & { json: ClusterUpdateRequest }
            output: ClusterDetail
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { clusterID: string } } & { json: ClusterUpdateRequest }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { clusterID: string } } & { json: ClusterUpdateRequest }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { clusterID: string } } & { json: ClusterUpdateRequest }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { clusterID: string } } & { json: ClusterUpdateRequest }
            output: Error
            outputFormat: 'json'
            status: 409
          }
        | {
            input: { param: { clusterID: string } } & { json: ClusterUpdateRequest }
            output: Error
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { param: { clusterID: string } } & { json: ClusterUpdateRequest }
            output: Error
            outputFormat: 'json'
            status: 503
          }
      $delete:
        | { input: { param: { clusterID: string } }; output: {}; outputFormat: string; status: 204 }
        | {
            input: { param: { clusterID: string } }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { clusterID: string } }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { clusterID: string } }
            output: Error
            outputFormat: 'json'
            status: 409
          }
        | {
            input: { param: { clusterID: string } }
            output: Error
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { param: { clusterID: string } }
            output: Error
            outputFormat: 'json'
            status: 503
          }
    }
  } & {
    '/unstable/admin/clusters/:clusterID/metadata': {
      $get:
        | {
            input: { param: { clusterID: string } }
            output: ClusterDetail
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { clusterID: string } }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { clusterID: string } }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { clusterID: string } }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { clusterID: string } }
            output: Error
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { param: { clusterID: string } }
            output: Error
            outputFormat: 'json'
            status: 503
          }
    }
  } & {
    '/unstable/admin/clusters/:clusterID/teams': {
      $get:
        | {
            input: { param: { clusterID: string } } & {
              query: {
                limit?: number | undefined
                offset?: number | undefined
                sortBy?: 'createdAt' | 'name' | undefined
                sortOrder?: 'asc' | 'desc' | undefined
              }
            }
            output: ClusterTeamListResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { clusterID: string } } & {
              query: {
                limit?: number | undefined
                offset?: number | undefined
                sortBy?: 'createdAt' | 'name' | undefined
                sortOrder?: 'asc' | 'desc' | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { clusterID: string } } & {
              query: {
                limit?: number | undefined
                offset?: number | undefined
                sortBy?: 'createdAt' | 'name' | undefined
                sortOrder?: 'asc' | 'desc' | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { clusterID: string } } & {
              query: {
                limit?: number | undefined
                offset?: number | undefined
                sortBy?: 'createdAt' | 'name' | undefined
                sortOrder?: 'asc' | 'desc' | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { clusterID: string } } & {
              query: {
                limit?: number | undefined
                offset?: number | undefined
                sortBy?: 'createdAt' | 'name' | undefined
                sortOrder?: 'asc' | 'desc' | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { param: { clusterID: string } } & {
              query: {
                limit?: number | undefined
                offset?: number | undefined
                sortBy?: 'createdAt' | 'name' | undefined
                sortOrder?: 'asc' | 'desc' | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 503
          }
    }
  } & {
    '/unstable/admin/clusters/:clusterID/token': {
      $put:
        | {
            input: { param: { clusterID: string } } & { json: ClusterTokenRotateRequest }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { clusterID: string } } & { json: ClusterTokenRotateRequest }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { clusterID: string } } & { json: ClusterTokenRotateRequest }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { clusterID: string } } & { json: ClusterTokenRotateRequest }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { clusterID: string } } & { json: ClusterTokenRotateRequest }
            output: Error
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { param: { clusterID: string } } & { json: ClusterTokenRotateRequest }
            output: Error
            outputFormat: 'json'
            status: 503
          }
    }
  } & {
    '/unstable/admin/templates/aliases': {
      $get:
        | {
            input: {
              query: { search: string; nextToken?: string | undefined; limit?: number | undefined }
            }
            output: AdminTemplateAliases[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: { search: string; nextToken?: string | undefined; limit?: number | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: { search: string; nextToken?: string | undefined; limit?: number | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              query: { search: string; nextToken?: string | undefined; limit?: number | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 500
          }
      $post:
        | {
            input: { json: AdminTemplateAliasCreateRequest }
            output: AdminTemplateAlias
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { json: AdminTemplateAliasCreateRequest }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { json: AdminTemplateAliasCreateRequest }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { json: AdminTemplateAliasCreateRequest }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { json: AdminTemplateAliasCreateRequest }
            output: Error
            outputFormat: 'json'
            status: 409
          }
        | {
            input: { json: AdminTemplateAliasCreateRequest }
            output: Error
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/unstable/admin/templates/aliases/:aliasID': {
      $delete:
        | {
            input: { param: { aliasID: string } }
            output: AdminTemplateAliasDeleted
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { aliasID: string } }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { aliasID: string } }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { aliasID: string } }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { aliasID: string } }
            output: Error
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/unstable/admin/templates/defaults': {
      $post:
        | {
            input: { json: AdminDefaultTemplateCreateRequest }
            output: AdminDefaultTemplate
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { json: AdminDefaultTemplateCreateRequest }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { json: AdminDefaultTemplateCreateRequest }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { json: AdminDefaultTemplateCreateRequest }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { json: AdminDefaultTemplateCreateRequest }
            output: Error
            outputFormat: 'json'
            status: 409
          }
        | {
            input: { json: AdminDefaultTemplateCreateRequest }
            output: Error
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/unstable/admin/templates/defaults/:templateID': {
      $patch:
        | {
            input: { param: { templateID: string } } & { json: AdminDefaultTemplateUpdateRequest }
            output: AdminDefaultTemplate
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { templateID: string } } & { json: AdminDefaultTemplateUpdateRequest }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { templateID: string } } & { json: AdminDefaultTemplateUpdateRequest }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { templateID: string } } & { json: AdminDefaultTemplateUpdateRequest }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { templateID: string } } & { json: AdminDefaultTemplateUpdateRequest }
            output: Error
            outputFormat: 'json'
            status: 500
          }
      $delete:
        | {
            input: { param: { templateID: string } }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { templateID: string } }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { templateID: string } }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { templateID: string } }
            output: Error
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/unstable/admin/templates/lookup': {
      $get:
        | {
            input: { query: { query: string } }
            output: AdminTemplateLookup
            outputFormat: 'json'
            status: 200
          }
        | { input: { query: { query: string } }; output: Error; outputFormat: 'json'; status: 400 }
        | { input: { query: { query: string } }; output: Error; outputFormat: 'json'; status: 401 }
        | { input: { query: { query: string } }; output: Error; outputFormat: 'json'; status: 404 }
        | { input: { query: { query: string } }; output: Error; outputFormat: 'json'; status: 500 }
    }
  } & {
    '/api-keys': {
      $get:
        | { input: {}; output: TeamAPIKey[]; outputFormat: 'json'; status: 200 }
        | { input: {}; output: Error; outputFormat: 'json'; status: 401 }
        | { input: {}; output: Error; outputFormat: 'json'; status: 429 }
        | { input: {}; output: Error; outputFormat: 'json'; status: 500 }
      $post:
        | {
            input: { json: NewTeamAPIKey }
            output: CreatedTeamAPIKey
            outputFormat: 'json'
            status: 201
          }
        | { input: { json: NewTeamAPIKey }; output: Error; outputFormat: 'json'; status: 401 }
        | { input: { json: NewTeamAPIKey }; output: Error; outputFormat: 'json'; status: 429 }
        | { input: { json: NewTeamAPIKey }; output: Error; outputFormat: 'json'; status: 500 }
    }
  } & {
    '/api-keys/:apiKeyID': {
      $patch:
        | {
            input: { param: { apiKeyID: string } } & { json: UpdateTeamAPIKey }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { param: { apiKeyID: string } } & { json: UpdateTeamAPIKey }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { apiKeyID: string } } & { json: UpdateTeamAPIKey }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { apiKeyID: string } } & { json: UpdateTeamAPIKey }
            output: Error
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { apiKeyID: string } } & { json: UpdateTeamAPIKey }
            output: Error
            outputFormat: 'json'
            status: 500
          }
      $delete:
        | { input: { param: { apiKeyID: string } }; output: {}; outputFormat: string; status: 204 }
        | {
            input: { param: { apiKeyID: string } }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { apiKeyID: string } }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { apiKeyID: string } }
            output: Error
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { apiKeyID: string } }
            output: Error
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/volumes': {
      $get:
        | { input: {}; output: Volume[]; outputFormat: 'json'; status: 200 }
        | { input: {}; output: Error; outputFormat: 'json'; status: 401 }
        | { input: {}; output: Error; outputFormat: 'json'; status: 429 }
        | { input: {}; output: Error; outputFormat: 'json'; status: 500 }
      $post:
        | { input: { json: NewVolume }; output: VolumeAndToken; outputFormat: 'json'; status: 201 }
        | { input: { json: NewVolume }; output: Error; outputFormat: 'json'; status: 400 }
        | { input: { json: NewVolume }; output: Error; outputFormat: 'json'; status: 401 }
        | { input: { json: NewVolume }; output: Error; outputFormat: 'json'; status: 429 }
        | { input: { json: NewVolume }; output: Error; outputFormat: 'json'; status: 500 }
    }
  } & {
    '/volumes/:volumeID': {
      $get:
        | {
            input: { param: { volumeID: string } }
            output: VolumeAndToken
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { volumeID: string } }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { volumeID: string } }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { volumeID: string } }
            output: Error
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { volumeID: string } }
            output: Error
            outputFormat: 'json'
            status: 500
          }
      $delete:
        | { input: { param: { volumeID: string } }; output: {}; outputFormat: string; status: 204 }
        | {
            input: { param: { volumeID: string } }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { volumeID: string } }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { volumeID: string } }
            output: Error
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { volumeID: string } }
            output: Error
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/secrets': {
      $get:
        | {
            input: { query: { nextToken?: string | undefined; limit?: number | undefined } }
            output: Secret[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { nextToken?: string | undefined; limit?: number | undefined } }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { query: { nextToken?: string | undefined; limit?: number | undefined } }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { query: { nextToken?: string | undefined; limit?: number | undefined } }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { query: { nextToken?: string | undefined; limit?: number | undefined } }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { query: { nextToken?: string | undefined; limit?: number | undefined } }
            output: Error
            outputFormat: 'json'
            status: 409
          }
        | {
            input: { query: { nextToken?: string | undefined; limit?: number | undefined } }
            output: Error
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { query: { nextToken?: string | undefined; limit?: number | undefined } }
            output: Error
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { query: { nextToken?: string | undefined; limit?: number | undefined } }
            output: Error
            outputFormat: 'json'
            status: 502
          }
        | {
            input: { query: { nextToken?: string | undefined; limit?: number | undefined } }
            output: Error
            outputFormat: 'json'
            status: 504
          }
      $post:
        | { input: { json: NewSecret }; output: Secret; outputFormat: 'json'; status: 201 }
        | { input: { json: NewSecret }; output: Error; outputFormat: 'json'; status: 400 }
        | { input: { json: NewSecret }; output: Error; outputFormat: 'json'; status: 401 }
        | { input: { json: NewSecret }; output: Error; outputFormat: 'json'; status: 403 }
        | { input: { json: NewSecret }; output: Error; outputFormat: 'json'; status: 404 }
        | { input: { json: NewSecret }; output: Error; outputFormat: 'json'; status: 409 }
        | { input: { json: NewSecret }; output: Error; outputFormat: 'json'; status: 429 }
        | { input: { json: NewSecret }; output: Error; outputFormat: 'json'; status: 500 }
        | { input: { json: NewSecret }; output: Error; outputFormat: 'json'; status: 502 }
        | { input: { json: NewSecret }; output: Error; outputFormat: 'json'; status: 504 }
    }
  } & {
    '/secrets/:secretID': {
      $get:
        | {
            input: { param: { secretID: string } }
            output: Secret
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { secretID: string } }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { secretID: string } }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { secretID: string } }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { secretID: string } }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { secretID: string } }
            output: Error
            outputFormat: 'json'
            status: 409
          }
        | {
            input: { param: { secretID: string } }
            output: Error
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { secretID: string } }
            output: Error
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { param: { secretID: string } }
            output: Error
            outputFormat: 'json'
            status: 502
          }
        | {
            input: { param: { secretID: string } }
            output: Error
            outputFormat: 'json'
            status: 504
          }
      $post:
        | {
            input: { param: { secretID: string } } & { json: SecretUpdate }
            output: Secret
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { secretID: string } } & { json: SecretUpdate }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { secretID: string } } & { json: SecretUpdate }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { secretID: string } } & { json: SecretUpdate }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { secretID: string } } & { json: SecretUpdate }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { secretID: string } } & { json: SecretUpdate }
            output: Error
            outputFormat: 'json'
            status: 409
          }
        | {
            input: { param: { secretID: string } } & { json: SecretUpdate }
            output: Error
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { secretID: string } } & { json: SecretUpdate }
            output: Error
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { param: { secretID: string } } & { json: SecretUpdate }
            output: Error
            outputFormat: 'json'
            status: 502
          }
        | {
            input: { param: { secretID: string } } & { json: SecretUpdate }
            output: Error
            outputFormat: 'json'
            status: 504
          }
      $delete:
        | { input: { param: { secretID: string } }; output: {}; outputFormat: string; status: 204 }
        | {
            input: { param: { secretID: string } }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { secretID: string } }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { secretID: string } }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { secretID: string } }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { secretID: string } }
            output: Error
            outputFormat: 'json'
            status: 409
          }
        | {
            input: { param: { secretID: string } }
            output: Error
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { secretID: string } }
            output: Error
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { param: { secretID: string } }
            output: Error
            outputFormat: 'json'
            status: 502
          }
        | {
            input: { param: { secretID: string } }
            output: Error
            outputFormat: 'json'
            status: 504
          }
    }
  } & {
    '/clusters/:clusterID/rigs': {
      $get:
        | {
            input: { param: { clusterID: string } }
            output: Rig[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { clusterID: string } }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { clusterID: string } }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { clusterID: string } }
            output: Error
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { clusterID: string } }
            output: Error
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { param: { clusterID: string } }
            output: Error
            outputFormat: 'json'
            status: 501
          }
    }
  } & {
    '/clusters/:clusterID/rigs/:rigID/capacity': {
      $put:
        | {
            input: { param: { clusterID: string; rigID: string } } & { json: RigCapacityChange }
            output: {}
            outputFormat: string
            status: 202
          }
        | {
            input: { param: { clusterID: string; rigID: string } } & { json: RigCapacityChange }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { clusterID: string; rigID: string } } & { json: RigCapacityChange }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { clusterID: string; rigID: string } } & { json: RigCapacityChange }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { clusterID: string; rigID: string } } & { json: RigCapacityChange }
            output: Error
            outputFormat: 'json'
            status: 409
          }
        | {
            input: { param: { clusterID: string; rigID: string } } & { json: RigCapacityChange }
            output: Error
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { clusterID: string; rigID: string } } & { json: RigCapacityChange }
            output: Error
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { param: { clusterID: string; rigID: string } } & { json: RigCapacityChange }
            output: Error
            outputFormat: 'json'
            status: 501
          }
    }
  } & {
    '/clusters/:clusterID/rigs/instances/:instanceID': {
      $delete:
        | {
            input: { param: { clusterID: string; instanceID: string } } & {
              query: { decrementDesired: boolean }
            }
            output: {}
            outputFormat: string
            status: 202
          }
        | {
            input: { param: { clusterID: string; instanceID: string } } & {
              query: { decrementDesired: boolean }
            }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { clusterID: string; instanceID: string } } & {
              query: { decrementDesired: boolean }
            }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { clusterID: string; instanceID: string } } & {
              query: { decrementDesired: boolean }
            }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { clusterID: string; instanceID: string } } & {
              query: { decrementDesired: boolean }
            }
            output: Error
            outputFormat: 'json'
            status: 409
          }
        | {
            input: { param: { clusterID: string; instanceID: string } } & {
              query: { decrementDesired: boolean }
            }
            output: Error
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { clusterID: string; instanceID: string } } & {
              query: { decrementDesired: boolean }
            }
            output: Error
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { param: { clusterID: string; instanceID: string } } & {
              query: { decrementDesired: boolean }
            }
            output: Error
            outputFormat: 'json'
            status: 501
          }
    }
  } & {
    '/clusters/:clusterID/rigs/:rigID/instances': {
      $get:
        | {
            input: { param: { clusterID: string; rigID: string } }
            output: RigInstance[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { clusterID: string; rigID: string } }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { clusterID: string; rigID: string } }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { clusterID: string; rigID: string } }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { clusterID: string; rigID: string } }
            output: Error
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { clusterID: string; rigID: string } }
            output: Error
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { param: { clusterID: string; rigID: string } }
            output: Error
            outputFormat: 'json'
            status: 501
          }
    }
  } & {
    '/clusters/:clusterID/rigs/:rigID/errors': {
      $get:
        | {
            input: { param: { clusterID: string; rigID: string } } & {
              query: { limit?: number | undefined }
            }
            output: RigError[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { clusterID: string; rigID: string } } & {
              query: { limit?: number | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { clusterID: string; rigID: string } } & {
              query: { limit?: number | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { clusterID: string; rigID: string } } & {
              query: { limit?: number | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { clusterID: string; rigID: string } } & {
              query: { limit?: number | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { clusterID: string; rigID: string } } & {
              query: { limit?: number | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { param: { clusterID: string; rigID: string } } & {
              query: { limit?: number | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 501
          }
    }
  } & {
    '/events/sandboxes/:sandboxID': {
      $get:
        | {
            input: { param: { sandboxID: string } } & {
              query: {
                offset?: number | undefined
                limit?: number | undefined
                orderAsc?: boolean | undefined
                types?: string[] | undefined
              }
            }
            output: SandboxEvent[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { sandboxID: string } } & {
              query: {
                offset?: number | undefined
                limit?: number | undefined
                orderAsc?: boolean | undefined
                types?: string[] | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { sandboxID: string } } & {
              query: {
                offset?: number | undefined
                limit?: number | undefined
                orderAsc?: boolean | undefined
                types?: string[] | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { sandboxID: string } } & {
              query: {
                offset?: number | undefined
                limit?: number | undefined
                orderAsc?: boolean | undefined
                types?: string[] | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { sandboxID: string } } & {
              query: {
                offset?: number | undefined
                limit?: number | undefined
                orderAsc?: boolean | undefined
                types?: string[] | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/events/sandboxes': {
      $get:
        | {
            input: {
              query: {
                offset?: number | undefined
                limit?: number | undefined
                orderAsc?: boolean | undefined
                types?: string[] | undefined
              }
            }
            output: SandboxEvent[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                offset?: number | undefined
                limit?: number | undefined
                orderAsc?: boolean | undefined
                types?: string[] | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                offset?: number | undefined
                limit?: number | undefined
                orderAsc?: boolean | undefined
                types?: string[] | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              query: {
                offset?: number | undefined
                limit?: number | undefined
                orderAsc?: boolean | undefined
                types?: string[] | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: {
              query: {
                offset?: number | undefined
                limit?: number | undefined
                orderAsc?: boolean | undefined
                types?: string[] | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/events/webhooks': {
      $post:
        | {
            input: { json: WebhookCreate }
            output: WebhookCreation
            outputFormat: 'json'
            status: 201
          }
        | { input: { json: WebhookCreate }; output: Error; outputFormat: 'json'; status: 400 }
        | { input: { json: WebhookCreate }; output: Error; outputFormat: 'json'; status: 401 }
        | { input: { json: WebhookCreate }; output: Error; outputFormat: 'json'; status: 404 }
        | { input: { json: WebhookCreate }; output: Error; outputFormat: 'json'; status: 500 }
      $get:
        | { input: {}; output: WebhookDetail[]; outputFormat: 'json'; status: 200 }
        | { input: {}; output: Error; outputFormat: 'json'; status: 401 }
        | { input: {}; output: Error; outputFormat: 'json'; status: 404 }
        | { input: {}; output: Error; outputFormat: 'json'; status: 500 }
    }
  } & {
    '/events/webhooks/:webhookID': {
      $get:
        | {
            input: { param: { webhookID: string } }
            output: WebhookDetail
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { webhookID: string } }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { webhookID: string } }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { webhookID: string } }
            output: Error
            outputFormat: 'json'
            status: 500
          }
      $patch:
        | {
            input: { param: { webhookID: string } } & { json: WebhookConfiguration }
            output: WebhookDetail
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { webhookID: string } } & { json: WebhookConfiguration }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { webhookID: string } } & { json: WebhookConfiguration }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { webhookID: string } } & { json: WebhookConfiguration }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { webhookID: string } } & { json: WebhookConfiguration }
            output: Error
            outputFormat: 'json'
            status: 500
          }
      $delete:
        | { input: { param: { webhookID: string } }; output: {}; outputFormat: string; status: 200 }
        | {
            input: { param: { webhookID: string } }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { webhookID: string } }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { webhookID: string } }
            output: Error
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/events/webhooks/:webhookID/deliveries': {
      $get:
        | {
            input: { param: { webhookID: string } } & {
              query: {
                cursor?: string | undefined
                limit?: number | undefined
                orderAsc?: boolean | undefined
                start?: string | undefined
                end?: string | undefined
                deliveryStatus?: ('success' | 'failed')[] | undefined
                eventType?: string[] | undefined
              }
            }
            output: WebhookDeliveriesListPayload
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { webhookID: string } } & {
              query: {
                cursor?: string | undefined
                limit?: number | undefined
                orderAsc?: boolean | undefined
                start?: string | undefined
                end?: string | undefined
                deliveryStatus?: ('success' | 'failed')[] | undefined
                eventType?: string[] | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { webhookID: string } } & {
              query: {
                cursor?: string | undefined
                limit?: number | undefined
                orderAsc?: boolean | undefined
                start?: string | undefined
                end?: string | undefined
                deliveryStatus?: ('success' | 'failed')[] | undefined
                eventType?: string[] | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { webhookID: string } } & {
              query: {
                cursor?: string | undefined
                limit?: number | undefined
                orderAsc?: boolean | undefined
                start?: string | undefined
                end?: string | undefined
                deliveryStatus?: ('success' | 'failed')[] | undefined
                eventType?: string[] | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { webhookID: string } } & {
              query: {
                cursor?: string | undefined
                limit?: number | undefined
                orderAsc?: boolean | undefined
                start?: string | undefined
                end?: string | undefined
                deliveryStatus?: ('success' | 'failed')[] | undefined
                eventType?: string[] | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/events/webhooks/:webhookID/stats': {
      $get:
        | {
            input: { param: { webhookID: string } } & {
              query: { start?: string | undefined; end?: string | undefined }
            }
            output: WebhookDeliveryStats
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { webhookID: string } } & {
              query: { start?: string | undefined; end?: string | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { webhookID: string } } & {
              query: { start?: string | undefined; end?: string | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { webhookID: string } } & {
              query: { start?: string | undefined; end?: string | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 500
          }
    }
  },
  '/'
>
export default routes
