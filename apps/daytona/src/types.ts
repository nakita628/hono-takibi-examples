type Announcement = { text: string; learnMoreUrl?: string | undefined }
type DaytonaConfiguration = {
  version: string
  posthog?: { apiKey: string; host: string } | undefined
  oidc: { issuer: string; clientId: string; audience: string }
  linkedAccountsEnabled: boolean
  announcements: { [x: string]: Announcement }
  pylonAppId?: string | undefined
  proxyTemplateUrl: string
  proxyToolboxUrl: string
  defaultSnapshot: string
  dashboardUrl: string
  maxAutoArchiveInterval: number
  maintananceMode: boolean
  environment: string
  billingApiUrl?: string | undefined
  analyticsApiUrl?: string | undefined
  sshGatewayCommand?: string | undefined
  sshGatewayPublicKey?: string | undefined
  rateLimit?:
    | {
        failedAuth?: { ttl?: number | undefined; limit?: number | undefined } | undefined
        authenticated?: { ttl?: number | undefined; limit?: number | undefined } | undefined
        sandboxCreate?: { ttl?: number | undefined; limit?: number | undefined } | undefined
        sandboxLifecycle?: { ttl?: number | undefined; limit?: number | undefined } | undefined
      }
    | undefined
}
type ApiKeyList = {
  name: string
  value: string
  createdAt: string
  permissions: (
    | 'write:registries'
    | 'delete:registries'
    | 'write:snapshots'
    | 'delete:snapshots'
    | 'write:sandboxes'
    | 'delete:sandboxes'
    | 'read:volumes'
    | 'write:volumes'
    | 'delete:volumes'
    | 'write:regions'
    | 'delete:regions'
    | 'read:runners'
    | 'write:runners'
    | 'delete:runners'
    | 'read:audit_logs'
  )[]
  lastUsedAt: string | null
  expiresAt: string | null
  userId: string
}
type CreateApiKey = {
  name: string
  permissions: (
    | 'write:registries'
    | 'delete:registries'
    | 'write:snapshots'
    | 'delete:snapshots'
    | 'write:sandboxes'
    | 'delete:sandboxes'
    | 'read:volumes'
    | 'write:volumes'
    | 'delete:volumes'
    | 'write:regions'
    | 'delete:regions'
    | 'read:runners'
    | 'write:runners'
    | 'delete:runners'
    | 'read:audit_logs'
  )[]
  expiresAt?: (string | null) | undefined
}
type ApiKeyResponse = {
  name: string
  value: string
  createdAt: string
  permissions: (
    | 'write:registries'
    | 'delete:registries'
    | 'write:snapshots'
    | 'delete:snapshots'
    | 'write:sandboxes'
    | 'delete:sandboxes'
    | 'read:volumes'
    | 'write:volumes'
    | 'delete:volumes'
    | 'write:regions'
    | 'delete:regions'
    | 'read:runners'
    | 'write:runners'
    | 'delete:runners'
    | 'read:audit_logs'
  )[]
  expiresAt: string | null
}
type OrganizationRole = {
  id: string
  name: string
  description: string
  permissions: (
    | 'write:registries'
    | 'delete:registries'
    | 'write:snapshots'
    | 'delete:snapshots'
    | 'write:sandboxes'
    | 'delete:sandboxes'
    | 'read:volumes'
    | 'write:volumes'
    | 'delete:volumes'
    | 'write:regions'
    | 'delete:regions'
    | 'read:runners'
    | 'write:runners'
    | 'delete:runners'
    | 'read:audit_logs'
  )[]
  isGlobal: boolean
  createdAt: string
  updatedAt: string
}
type OrganizationInvitation = {
  id: string
  email: string
  invitedBy: string
  organizationId: string
  organizationName: string
  expiresAt: string
  status: 'pending' | 'accepted' | 'declined' | 'cancelled'
  role: 'owner' | 'member'
  assignedRoles: OrganizationRole[]
  createdAt: string
  updatedAt: string
}
type Organization = {
  id: string
  name: string
  createdBy: string
  personal: boolean
  createdAt: string
  updatedAt: string
  suspended: boolean
  suspendedAt: string
  suspensionReason: string
  suspendedUntil: string
  suspensionCleanupGracePeriodHours: number
  maxCpuPerSandbox: number
  maxMemoryPerSandbox: number
  maxDiskPerSandbox: number
  snapshotDeactivationTimeoutMinutes: number
  sandboxLimitedNetworkEgress: boolean
  defaultRegionId?: string | undefined
  authenticatedRateLimit: number | null
  sandboxCreateRateLimit: number | null
  sandboxLifecycleRateLimit: number | null
  experimentalConfig: { [x: string]: unknown }
  otelConfig: { endpoint: string; headers?: ({ [x: string]: string } | null) | undefined }
  authenticatedRateLimitTtlSeconds: number | null
  sandboxCreateRateLimitTtlSeconds: number | null
  sandboxLifecycleRateLimitTtlSeconds: number | null
}
type CreateOrganization = { name: string; defaultRegionId: string }
type UpdateOrganizationDefaultRegion = { defaultRegionId: string }
type GpuType = 'H100' | 'RTX-PRO-6000'
type RegionUsageOverview = {
  regionId: string
  sandboxClass: {}
  totalCpuQuota: number
  currentCpuUsage: number
  totalMemoryQuota: number
  currentMemoryUsage: number
  totalDiskQuota: number
  currentDiskUsage: number
  totalGpuQuota: number
  currentGpuUsage: number
  allowedGpuTypes?: GpuType[] | undefined
  maxCpuPerSandbox: number | null
  maxMemoryPerSandbox: number | null
  maxDiskPerSandbox: number | null
  maxDiskPerNonEphemeralSandbox: number | null
  maxCpuPerGpuSandbox: number | null
  maxMemoryPerGpuSandbox: number | null
  maxDiskPerGpuSandbox: number | null
}
type OrganizationUsageOverview = {
  regionUsage: RegionUsageOverview[]
  totalSnapshotQuota: number
  currentSnapshotUsage: number
  totalVolumeQuota: number
  currentVolumeUsage: number
}
type UpdateOrganizationQuota = {
  maxCpuPerSandbox: number | null
  maxMemoryPerSandbox: number | null
  maxDiskPerSandbox: number | null
  snapshotQuota: number | null
  maxSnapshotSize: number | null
  volumeQuota: number | null
  authenticatedRateLimit: number | null
  sandboxCreateRateLimit: number | null
  sandboxLifecycleRateLimit: number | null
  authenticatedRateLimitTtlSeconds: number | null
  sandboxCreateRateLimitTtlSeconds: number | null
  sandboxLifecycleRateLimitTtlSeconds: number | null
  snapshotDeactivationTimeoutMinutes: number | null
}
type UpdateOrganizationRegionQuota = {
  sandboxClass?: {} | undefined
  totalCpuQuota: number | null
  totalMemoryQuota: number | null
  totalDiskQuota: number | null
  totalGpuQuota: number | null
  allowedGpuTypes?: (GpuType[] | null) | undefined
  maxCpuPerSandbox?: (number | null) | undefined
  maxMemoryPerSandbox?: (number | null) | undefined
  maxDiskPerSandbox?: (number | null) | undefined
  maxDiskPerNonEphemeralSandbox?: (number | null) | undefined
  maxCpuPerGpuSandbox?: (number | null) | undefined
  maxMemoryPerGpuSandbox?: (number | null) | undefined
  maxDiskPerGpuSandbox?: (number | null) | undefined
}
type OrganizationSuspension = {
  reason: string
  until: string
  suspensionCleanupGracePeriodHours?: number | undefined
}
type OtelConfig = { endpoint: string; headers?: ({ [x: string]: string } | null) | undefined }
type OrganizationSandboxDefaultLimitedNetworkEgress = {
  sandboxDefaultLimitedNetworkEgress: boolean
}
type CreateOrganizationRole = {
  name: string
  description: string
  permissions: (
    | 'write:registries'
    | 'delete:registries'
    | 'write:snapshots'
    | 'delete:snapshots'
    | 'write:sandboxes'
    | 'delete:sandboxes'
    | 'read:volumes'
    | 'write:volumes'
    | 'delete:volumes'
    | 'write:regions'
    | 'delete:regions'
    | 'read:runners'
    | 'write:runners'
    | 'delete:runners'
    | 'read:audit_logs'
  )[]
}
type UpdateOrganizationRole = {
  name: string
  description: string
  permissions: (
    | 'write:registries'
    | 'delete:registries'
    | 'write:snapshots'
    | 'delete:snapshots'
    | 'write:sandboxes'
    | 'delete:sandboxes'
    | 'read:volumes'
    | 'write:volumes'
    | 'delete:volumes'
    | 'write:regions'
    | 'delete:regions'
    | 'read:runners'
    | 'write:runners'
    | 'delete:runners'
    | 'read:audit_logs'
  )[]
}
type OrganizationUser = {
  userId: string
  organizationId: string
  name: string
  email: string
  role: 'owner' | 'member'
  assignedRoles: OrganizationRole[]
  createdAt: string
  updatedAt: string
}
type UpdateOrganizationMemberAccess = { role: 'owner' | 'member'; assignedRoleIds: string[] }
type CreateOrganizationInvitation = {
  email: string
  role: 'owner' | 'member'
  assignedRoleIds: string[]
  expiresAt?: string | undefined
}
type UpdateOrganizationInvitation = {
  role: 'owner' | 'member'
  assignedRoleIds: string[]
  expiresAt?: string | undefined
}
type Region = {
  id: string
  name: string
  organizationId?: (string | null) | undefined
  regionType: {}
  createdAt: string
  updatedAt: string
  proxyUrl?: (string | null) | undefined
  sshGatewayUrl?: (string | null) | undefined
  snapshotManagerUrl?: (string | null) | undefined
}
type CreateRegion = {
  name: string
  proxyUrl?: (string | null) | undefined
  sshGatewayUrl?: (string | null) | undefined
  snapshotManagerUrl?: (string | null) | undefined
}
type CreateRegionResponse = {
  id: string
  proxyApiKey?: (string | null) | undefined
  sshGatewayApiKey?: (string | null) | undefined
  snapshotManagerUsername?: (string | null) | undefined
  snapshotManagerPassword?: (string | null) | undefined
}
type UpdateRegion = {
  proxyUrl?: (string | null) | undefined
  sshGatewayUrl?: (string | null) | undefined
  snapshotManagerUrl?: (string | null) | undefined
}
type RegenerateApiKeyResponse = { apiKey: string }
type SnapshotManagerCredentials = { username: string; password: string }
type UserPublicKey = { key: string; name: string }
type User = {
  id: string
  name: string
  email: string
  publicKeys: UserPublicKey[]
  createdAt: string
}
type AccountProvider = { name: string; displayName: string }
type CreateLinkedAccount = { provider: string; userId: string }
type SandboxState =
  | 'creating'
  | 'restoring'
  | 'destroyed'
  | 'destroying'
  | 'started'
  | 'stopped'
  | 'starting'
  | 'stopping'
  | 'error'
  | 'build_failed'
  | 'pending_build'
  | 'building_snapshot'
  | 'unknown'
  | 'pulling_snapshot'
  | 'archived'
  | 'archiving'
  | 'resizing'
  | 'snapshotting'
  | 'forking'
  | 'pausing'
  | 'paused'
  | 'resuming'
type SandboxClass = 'linux-vm' | 'container' | 'android' | 'windows'
type SandboxListSortField =
  | 'name'
  | 'cpu'
  | 'memoryGib'
  | 'diskGib'
  | 'lastActivityAt'
  | 'createdAt'
type SandboxListSortDirection = 'asc' | 'desc'
type SandboxListItem = {
  id: string
  organizationId: string
  name: string
  target: string
  runnerId?: string | undefined
  sandboxClass?: {} | undefined
  state?: {} | undefined
  desiredState?: {} | undefined
  snapshot?: string | undefined
  user: string
  errorReason?: string | undefined
  recoverable?: boolean | undefined
  public: boolean
  cpu: number
  gpu: number
  gpuType?: {} | undefined
  memory: number
  disk: number
  labels: { [x: string]: string }
  backupState?: 'None' | 'Pending' | 'InProgress' | 'Completed' | 'Error' | undefined
  autoStopInterval?: number | undefined
  autoArchiveInterval?: number | undefined
  autoDeleteInterval?: number | undefined
  createdAt?: string | undefined
  updatedAt?: string | undefined
  lastActivityAt?: string | undefined
  daemonVersion?: string | undefined
  toolboxProxyUrl: string
}
type ListSandboxesResponse = { items: SandboxListItem[]; nextCursor: string | null }
type SandboxVolume = { volumeId: string; mountPath: string; subpath?: string | undefined }
type CreateSandbox = {
  name?: string | undefined
  snapshot?: string | undefined
  user?: string | undefined
  env?: { [x: string]: string } | undefined
  labels?: { [x: string]: string } | undefined
  public?: boolean | undefined
  networkBlockAll?: boolean | undefined
  networkAllowList?: string | undefined
  domainAllowList?: string | undefined
  target?: string | undefined
  cpu?: number | undefined
  gpu?: number | undefined
  gpuType?: GpuType[] | undefined
  memory?: number | undefined
  disk?: number | undefined
  autoStopInterval?: number | undefined
  autoArchiveInterval?: number | undefined
  autoDeleteInterval?: number | undefined
  volumes?: SandboxVolume[] | undefined
  buildInfo?: { dockerfileContent: string; contextHashes?: string[] | undefined } | undefined
  linkedSandbox?: string | undefined
}
type Sandbox = {
  id: string
  organizationId: string
  name: string
  snapshot?: string | undefined
  user: string
  env: { [x: string]: string }
  labels: { [x: string]: string }
  public: boolean
  networkBlockAll: boolean
  networkAllowList?: string | undefined
  domainAllowList?: string | undefined
  target: string
  cpu: number
  gpu: number
  gpuType?: {} | undefined
  memory: number
  disk: number
  state?: {} | undefined
  desiredState?: {} | undefined
  errorReason?: string | undefined
  recoverable?: boolean | undefined
  backupState?: 'None' | 'Pending' | 'InProgress' | 'Completed' | 'Error' | undefined
  backupCreatedAt?: string | undefined
  autoStopInterval?: number | undefined
  autoArchiveInterval?: number | undefined
  autoDeleteInterval?: number | undefined
  volumes?: SandboxVolume[] | undefined
  buildInfo?:
    | {
        dockerfileContent?: string | undefined
        contextHashes?: string[] | undefined
        createdAt: string
        updatedAt: string
        snapshotRef: string
      }
    | undefined
  createdAt?: string | undefined
  updatedAt?: string | undefined
  lastActivityAt?: string | undefined
  sandboxClass?: 'linux-vm' | 'container' | 'android' | 'windows' | undefined
  daemonVersion?: string | undefined
  runnerId?: string | undefined
  linkedSandboxId?: string | undefined
  toolboxProxyUrl: string
}
type PaginatedSandboxesDeprecated = {
  items: Sandbox[]
  total: number
  page: number
  totalPages: number
}
type ResizeSandbox = {
  cpu?: number | undefined
  memory?: number | undefined
  disk?: number | undefined
}
type SandboxLabels = { labels: { [x: string]: string } }
type UpdateSandboxStateDto = {
  state:
    | 'creating'
    | 'restoring'
    | 'destroyed'
    | 'destroying'
    | 'started'
    | 'stopped'
    | 'starting'
    | 'stopping'
    | 'error'
    | 'build_failed'
    | 'pending_build'
    | 'building_snapshot'
    | 'unknown'
    | 'pulling_snapshot'
    | 'archived'
    | 'archiving'
    | 'resizing'
    | 'snapshotting'
    | 'forking'
    | 'pausing'
    | 'paused'
    | 'resuming'
  errorReason?: string | undefined
  recoverable?: boolean | undefined
}
type CreateSandboxSnapshot = { name: string; includeMemory?: boolean | undefined }
type ForkSandbox = { name?: string | undefined }
type UpdateSandboxNetworkSettings = {
  networkBlockAll?: boolean | undefined
  networkAllowList?: string | undefined
  domainAllowList?: string | undefined
}
type PortPreviewUrl = { sandboxId: string; url: string; token: string }
type SignedPortPreviewUrl = { sandboxId: string; port: number; token: string; url: string }
type Url = { url: string }
type SshAccessDto = {
  id: string
  sandboxId: string
  token: string
  expiresAt: string
  createdAt: string
  updatedAt: string
  sshCommand: string
}
type SshAccessValidationDto = { valid: boolean; sandboxId: string }
type ToolboxProxyUrl = { url: string }
type RegionQuota = {
  organizationId: string
  regionId: string
  sandboxClass: {}
  totalCpuQuota: number
  totalMemoryQuota: number
  totalDiskQuota: number
  totalGpuQuota: number
  allowedGpuTypes?: GpuType[] | undefined
  maxCpuPerSandbox: number | null
  maxMemoryPerSandbox: number | null
  maxDiskPerSandbox: number | null
  maxDiskPerNonEphemeralSandbox: number | null
  maxCpuPerGpuSandbox: number | null
  maxMemoryPerGpuSandbox: number | null
  maxDiskPerGpuSandbox: number | null
}
type Runner = {
  id: string
  domain?: string | undefined
  apiUrl?: string | undefined
  proxyUrl?: string | undefined
  cpu: number
  memory: number
  disk: number
  gpu?: number | undefined
  gpuType?: string | undefined
  sandboxClass?: {} | undefined
  currentCpuUsagePercentage?: number | undefined
  currentMemoryUsagePercentage?: number | undefined
  currentDiskUsagePercentage?: number | undefined
  currentAllocatedCpu?: number | undefined
  currentAllocatedMemoryGiB?: number | undefined
  currentAllocatedDiskGiB?: number | undefined
  currentSnapshotCount?: number | undefined
  currentStartedSandboxes?: number | undefined
  availabilityScore?: number | undefined
  region: string
  name: string
  state: {}
  lastChecked?: string | undefined
  unschedulable: boolean
  tags: string[]
  createdAt: string
  updatedAt: string
  version: string
  apiVersion: string
  runnerClass: {}
  appVersion?: string | undefined
}
type CreateRunner = { regionId: string; name: string; tags?: string[] | undefined }
type CreateRunnerResponse = { id: string; apiKey: string }
type RunnerFull = {
  id: string
  domain?: string | undefined
  apiUrl?: string | undefined
  proxyUrl?: string | undefined
  cpu: number
  memory: number
  disk: number
  gpu?: number | undefined
  gpuType?: string | undefined
  sandboxClass?: {} | undefined
  currentCpuUsagePercentage?: number | undefined
  currentMemoryUsagePercentage?: number | undefined
  currentDiskUsagePercentage?: number | undefined
  currentAllocatedCpu?: number | undefined
  currentAllocatedMemoryGiB?: number | undefined
  currentAllocatedDiskGiB?: number | undefined
  currentSnapshotCount?: number | undefined
  currentStartedSandboxes?: number | undefined
  availabilityScore?: number | undefined
  region: string
  name: string
  state: {}
  lastChecked?: string | undefined
  unschedulable: boolean
  tags: string[]
  createdAt: string
  updatedAt: string
  version: string
  apiVersion: string
  runnerClass: {}
  appVersion?: string | undefined
  apiKey: string
  regionType?: {} | undefined
}
type RunnerSnapshotDto = {
  runnerSnapshotId: string
  runnerId: string
  runnerDomain?: string | undefined
}
type RunnerServiceHealth = {
  serviceName: string
  healthy: boolean
  errorReason?: string | undefined
}
type RunnerHealthcheck = {
  metrics?:
    | {
        currentCpuLoadAverage: number
        currentCpuUsagePercentage: number
        currentMemoryUsagePercentage: number
        currentDiskUsagePercentage: number
        currentAllocatedCpu: number
        currentAllocatedMemoryGiB: number
        currentAllocatedDiskGiB: number
        currentSnapshotCount: number
        currentStartedSandboxes: number
        cpu: number
        memoryGiB: number
        diskGiB: number
        gpu?: number | undefined
        gpuType?: string | undefined
      }
    | undefined
  serviceHealth?: RunnerServiceHealth[] | undefined
  domain?: string | undefined
  proxyUrl?: string | undefined
  apiUrl?: string | undefined
  appVersion: string
}
type ProjectDirResponse = { dir?: string | undefined }
type UserHomeDirResponse = { dir?: string | undefined }
type WorkDirResponse = { dir?: string | undefined }
type FileInfo = {
  name: string
  isDir: boolean
  size: number
  modTime: string
  mode: string
  permissions: string
  owner: string
  group: string
}
type DownloadFiles = { paths: string[] }
type Match = { file: string; line: number; content: string }
type ReplaceRequest = { files: string[]; pattern: string; newValue: string }
type ReplaceResult = {
  file?: string | undefined
  success?: boolean | undefined
  error?: string | undefined
}
type SearchFilesResponse = { files: string[] }
type UploadFileDeprecatedRequest = { file?: File | undefined }
type UploadFile = { file: File; path: string }
type GitAddRequest = { path: string; files: string[] }
type GitDeleteBranchRequest = { path: string; name: string }
type ListBranchResponse = { branches: string[] }
type GitBranchRequest = { path: string; name: string }
type GitCloneRequest = {
  url: string
  path: string
  username?: string | undefined
  password?: string | undefined
  branch?: string | undefined
  commit_id?: string | undefined
}
type GitCommitRequest = {
  path: string
  message: string
  author: string
  email: string
  allow_empty?: boolean | undefined
}
type GitCommitResponse = { hash: string }
type GitCommitInfo = {
  hash: string
  message: string
  author: string
  email: string
  timestamp: string
}
type GitRepoRequest = { path: string; username?: string | undefined; password?: string | undefined }
type GitCheckoutRequest = { path: string; branch: string }
type FileStatus = { name: string; staging: string; worktree: string; extra: string }
type GitStatus = {
  currentBranch: string
  fileStatus: FileStatus[]
  ahead?: number | undefined
  behind?: number | undefined
  branchPublished?: boolean | undefined
}
type ExecuteRequest = { command: string; cwd?: string | undefined; timeout?: number | undefined }
type ExecuteResponse = { exitCode: number; result: string }
type Command = { id: string; command: string; exitCode?: number | undefined }
type Session = { sessionId: string; commands: Command[] | null }
type CreateSessionRequest = { sessionId: string }
type SessionExecuteRequest = {
  command: string
  runAsync?: boolean | undefined
  async?: boolean | undefined
}
type SessionExecuteResponse = {
  cmdId?: string | undefined
  output?: string | undefined
  exitCode?: number | undefined
}
type PtySessionInfo = {
  id: string
  cwd: string
  envs: { [x: string]: unknown }
  cols: number
  rows: number
  createdAt: string
  active: boolean
  lazyStart: boolean
}
type PtyListResponse = { sessions: PtySessionInfo[] }
type PtyCreateRequest = {
  id: string
  cwd?: string | undefined
  envs?: { [x: string]: unknown } | undefined
  cols?: number | undefined
  rows?: number | undefined
  lazyStart?: boolean | undefined
}
type PtyCreateResponse = { sessionId: string }
type PtyResizeRequest = { cols: number; rows: number }
type Position = { line: number; character: number }
type CompletionContext = { triggerKind: number; triggerCharacter?: string | undefined }
type LspCompletionParams = {
  languageId: string
  pathToProject: string
  uri: string
  position: Position
  context?: CompletionContext | undefined
}
type CompletionItem = {
  label: string
  kind?: number | undefined
  detail?: string | undefined
  documentation?: { [x: string]: unknown } | undefined
  sortText?: string | undefined
  filterText?: string | undefined
  insertText?: string | undefined
}
type CompletionList = { isIncomplete: boolean; items: CompletionItem[] }
type LspDocumentRequest = { languageId: string; pathToProject: string; uri: string }
type Range = { start: Position; end: Position }
type LspLocation = { range: Range; uri: string }
type LspSymbol = { kind: number; location: LspLocation; name: string }
type LspServerRequest = { languageId: string; pathToProject: string }
type ComputerUseStartResponse = { message: string; status: { [x: string]: unknown } }
type ComputerUseStopResponse = { message: string; status: { [x: string]: unknown } }
type ComputerUseStatusResponse = { status: 'active' | 'partial' | 'inactive' | 'error' }
type ProcessStatusResponse = { processName: string; running: boolean }
type ProcessRestartResponse = { message: string; processName: string }
type ProcessLogsResponse = { processName: string; logs: string }
type ProcessErrorsResponse = { processName: string; errors: string }
type MousePosition = { x: number; y: number }
type MouseMoveRequest = { x: number; y: number }
type MouseMoveResponse = { x: number; y: number }
type MouseClickRequest = {
  x: number
  y: number
  button?: string | undefined
  double?: boolean | undefined
}
type MouseClickResponse = { x: number; y: number }
type MouseDragRequest = {
  startX: number
  startY: number
  endX: number
  endY: number
  button?: string | undefined
}
type MouseDragResponse = { x: number; y: number }
type MouseScrollRequest = { x: number; y: number; direction: string; amount?: number | undefined }
type MouseScrollResponse = { success: boolean }
type KeyboardTypeRequest = { text: string; delay?: number | undefined }
type KeyboardPressRequest = { key: string; modifiers?: string[] | undefined }
type KeyboardHotkeyRequest = { keys: string }
type ScreenshotResponse = {
  screenshot: string
  cursorPosition?: { [x: string]: unknown } | undefined
  sizeBytes?: number | undefined
}
type RegionScreenshotResponse = {
  screenshot: string
  cursorPosition?: { [x: string]: unknown } | undefined
  sizeBytes?: number | undefined
}
type CompressedScreenshotResponse = {
  screenshot: string
  cursorPosition?: { [x: string]: unknown } | undefined
  sizeBytes?: number | undefined
}
type DisplayInfoResponse = { displays: { [x: string]: unknown }[] }
type WindowsResponse = { windows: { [x: string]: unknown }[]; count: number }
type SnapshotDto = {
  id: string
  organizationId?: string | undefined
  general: boolean
  name: string
  imageName?: string | undefined
  state: {}
  size: number | null
  entrypoint: string[] | null
  cpu: number
  gpu: number
  gpuType?: {} | undefined
  mem: number
  disk: number
  errorReason: string | null
  createdAt: string
  updatedAt: string
  lastUsedAt: string | null
  buildInfo?:
    | {
        dockerfileContent?: string | undefined
        contextHashes?: string[] | undefined
        createdAt: string
        updatedAt: string
        snapshotRef: string
      }
    | undefined
  regionIds?: string[] | undefined
  initialRunnerId?: string | undefined
  ref?: string | undefined
  sandboxClass?: 'linux-vm' | 'container' | 'android' | 'windows' | undefined
}
type PaginatedSnapshots = { items: SnapshotDto[]; total: number; page: number; totalPages: number }
type CreateSnapshot = {
  name: string
  imageName?: string | undefined
  entrypoint?: string[] | undefined
  cpu?: number | undefined
  gpu?: number | undefined
  gpuType?: GpuType[] | undefined
  memory?: number | undefined
  disk?: number | undefined
  buildInfo?: { dockerfileContent: string; contextHashes?: string[] | undefined } | undefined
  regionId?: string | undefined
  sandboxClass?: {} | undefined
}
type VolumeDto = {
  id: string
  name: string
  organizationId: string
  state: {}
  createdAt: string
  updatedAt: string
  lastUsedAt?: (string | null) | undefined
  errorReason: string | null
}
type CreateVolume = { name: string }
type JobStatus = 'PENDING' | 'IN_PROGRESS' | 'COMPLETED' | 'FAILED'
type Job = {
  id: string
  type: {}
  status: {}
  resourceType: 'SANDBOX' | 'SNAPSHOT' | 'BACKUP'
  resourceId: string
  payload?: string | undefined
  traceContext?: { [x: string]: unknown } | undefined
  errorMessage?: string | undefined
  createdAt: string
  updatedAt?: string | undefined
}
type PaginatedJobs = { items: Job[]; total: number; page: number; totalPages: number }
type PollJobsResponse = { jobs: Job[] }
type UpdateJobStatus = {
  status: {}
  errorMessage?: string | undefined
  resultMetadata?: string | undefined
}
type DockerRegistry = {
  id: string
  name: string
  url: string
  username: string
  project: string
  registryType: 'internal' | 'organization' | 'transient' | 'backup'
  createdAt: string
  updatedAt: string
}
type CreateDockerRegistry = {
  name: string
  url: string
  username: string
  password: string
  project?: string | undefined
}
type RegistryPushAccessDto = {
  username: string
  secret: string
  registryUrl: string
  registryId: string
  project: string
  expiresAt: string
}
type UpdateDockerRegistry = {
  name: string
  url: string
  username: string
  password?: string | undefined
  project?: string | undefined
}
type AdminCreateRunner = {
  regionId: string
  name: string
  tags?: string[] | undefined
  apiKey: string
  apiVersion: string
  domain?: string | undefined
  apiUrl?: string | undefined
  proxyUrl?: string | undefined
  cpu?: number | undefined
  memoryGiB?: number | undefined
  diskGiB?: number | undefined
}
type CreateOrganizationQuota = {
  totalCpuQuota?: number | undefined
  totalMemoryQuota?: number | undefined
  totalDiskQuota?: number | undefined
  maxCpuPerSandbox?: number | undefined
  maxMemoryPerSandbox?: number | undefined
  maxDiskPerSandbox?: number | undefined
  snapshotQuota?: number | undefined
  maxSnapshotSize?: number | undefined
  volumeQuota?: number | undefined
}
type CreateUser = {
  id: string
  name: string
  email?: string | undefined
  personalOrganizationQuota?: CreateOrganizationQuota | undefined
  personalOrganizationDefaultRegionId?: string | undefined
  role?: 'admin' | 'user' | undefined
  emailVerified?: boolean | undefined
}
type SendWebhookDto = {
  eventType: {}
  payload: { [x: string]: unknown }
  eventId?: string | undefined
}
type AdminGetWebhookStatus_200Response = { enabled?: boolean | undefined }
type SetSnapshotGeneralStatusDto = { general: boolean }
type AuditLog = {
  id: string
  actorId: string
  actorEmail: string
  actorApiKeyPrefix?: string | undefined
  actorApiKeySuffix?: string | undefined
  organizationId?: string | undefined
  action: string
  targetType?: string | undefined
  targetId?: string | undefined
  statusCode?: number | undefined
  errorMessage?: string | undefined
  ipAddress?: string | undefined
  userAgent?: string | undefined
  source?: string | undefined
  metadata?: { [x: string]: unknown } | undefined
  createdAt: string
}
type PaginatedAuditLogs = {
  items: AuditLog[]
  total: number
  page: number
  totalPages: number
  nextToken?: string | undefined
}
type CreateOrganizationRegionQuota = {
  sandboxClass: {}
  totalCpuQuota: number
  totalMemoryQuota: number
  totalDiskQuota: number
  totalGpuQuota: number
  allowedGpuTypes?: (GpuType[] | null) | undefined
  maxCpuPerSandbox?: (number | null) | undefined
  maxMemoryPerSandbox?: (number | null) | undefined
  maxDiskPerSandbox?: (number | null) | undefined
  maxDiskPerNonEphemeralSandbox?: (number | null) | undefined
  maxCpuPerGpuSandbox?: (number | null) | undefined
  maxMemoryPerGpuSandbox?: (number | null) | undefined
  maxDiskPerGpuSandbox?: (number | null) | undefined
}
type WebhookAppPortalAccess = { token: string; url: string }
type WebhookInitializationStatus = {
  organizationId: string
  svixApplicationId: string | null
  lastError: string | null
  retryCount: number
  createdAt: string
  updatedAt: string
}
type StorageAccessDto = {
  accessKey: string
  secret: string
  sessionToken: string
  storageUrl: string
  organizationId: string
  bucket: string
}
type HealthControllerCheck_200ResponseInfoValue = { status: string }
type HealthControllerCheck_200Response = {
  status?: string | undefined
  info?: ({ [x: string]: HealthControllerCheck_200ResponseInfoValue } | null) | undefined
  error?: ({ [x: string]: HealthControllerCheck_200ResponseInfoValue } | null) | undefined
  details?: { [x: string]: HealthControllerCheck_200ResponseInfoValue } | undefined
}
type HealthControllerCheck_503Response = {
  status?: string | undefined
  info?: ({ [x: string]: HealthControllerCheck_200ResponseInfoValue } | null) | undefined
  error?: ({ [x: string]: HealthControllerCheck_200ResponseInfoValue } | null) | undefined
  details?: { [x: string]: HealthControllerCheck_200ResponseInfoValue } | undefined
}
type LogEntry = {
  timestamp: string
  body: string
  severityText: string
  severityNumber?: number | undefined
  serviceName: string
  resourceAttributes: { [x: string]: string }
  logAttributes: { [x: string]: string }
  traceId?: string | undefined
  spanId?: string | undefined
}
type PaginatedLogs = { items: LogEntry[]; total: number; page: number; totalPages: number }
type TraceSummary = {
  traceId: string
  rootSpanName: string
  startTime: string
  endTime: string
  durationMs: number
  spanCount: number
  statusCode?: string | undefined
}
type PaginatedTraces = { items: TraceSummary[]; total: number; page: number; totalPages: number }
type TraceSpan = {
  traceId: string
  spanId: string
  parentSpanId?: string | undefined
  spanName: string
  timestamp: string
  durationNs: number
  spanAttributes: { [x: string]: string }
  statusCode?: string | undefined
  statusMessage?: string | undefined
}
type MetricDataPoint = { timestamp: string; value: number }
type MetricSeries = { metricName: string; dataPoints: MetricDataPoint[] }
type MetricsResponse = { series: MetricSeries[] }
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/config': {
      $get: { input: {}; output: DaytonaConfiguration; outputFormat: 'json'; status: 200 }
    }
  } & {
    '/api-keys': {
      $get:
        | {
            input: { header: { 'X-Daytona-Organization-ID'?: string | undefined } }
            output: ApiKeyList[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { header: { 'X-Daytona-Organization-ID'?: string | undefined } }
            output: {}
            outputFormat: string
            status: 500
          }
      $post: {
        input: { header: { 'X-Daytona-Organization-ID'?: string | undefined } } & {
          json: CreateApiKey
        }
        output: ApiKeyResponse
        outputFormat: 'json'
        status: 201
      }
    }
  } & {
    '/api-keys/current': {
      $get: {
        input: { header: { 'X-Daytona-Organization-ID'?: string | undefined } }
        output: ApiKeyList
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api-keys/:name': {
      $delete: {
        input: { param: { name: string } } & {
          header: { 'X-Daytona-Organization-ID'?: string | undefined }
        }
        output: {}
        outputFormat: string
        status: 204
      }
      $get: {
        input: { param: { name: string } } & {
          header: { 'X-Daytona-Organization-ID'?: string | undefined }
        }
        output: ApiKeyList
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api-keys/:userId/:name': {
      $delete: {
        input: { param: { userId: string; name: string } } & {
          header: { 'X-Daytona-Organization-ID'?: string | undefined }
        }
        output: {}
        outputFormat: string
        status: 204
      }
    }
  } & {
    '/organizations/invitations': {
      $get: { input: {}; output: OrganizationInvitation[]; outputFormat: 'json'; status: 200 }
    }
  } & {
    '/organizations/invitations/count': {
      $get: { input: {}; output: number; outputFormat: 'json'; status: 200 }
    }
  } & {
    '/organizations/invitations/:invitationId/accept': {
      $post: {
        input: { param: { invitationId: string } }
        output: OrganizationInvitation
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/organizations/invitations/:invitationId/decline': {
      $post: {
        input: { param: { invitationId: string } }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/organizations': {
      $get: { input: {}; output: Organization[]; outputFormat: 'json'; status: 200 }
      $post: {
        input: { json: CreateOrganization }
        output: Organization
        outputFormat: 'json'
        status: 201
      }
    }
  } & {
    '/organizations/:organizationId/default-region': {
      $patch: {
        input: { param: { organizationId: string } } & { json: UpdateOrganizationDefaultRegion }
        output: {}
        outputFormat: string
        status: 204
      }
    }
  } & {
    '/organizations/:organizationId': {
      $delete: {
        input: { param: { organizationId: string } }
        output: {}
        outputFormat: string
        status: 204
      }
      $get: {
        input: { param: { organizationId: string } }
        output: Organization
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/organizations/:organizationId/usage': {
      $get: {
        input: { param: { organizationId: string } }
        output: OrganizationUsageOverview
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/organizations/:organizationId/quota': {
      $patch: {
        input: { param: { organizationId: string } } & { json: UpdateOrganizationQuota }
        output: {}
        outputFormat: string
        status: 204
      }
    }
  } & {
    '/organizations/:organizationId/quota/:regionId': {
      $patch: {
        input: { param: { organizationId: string; regionId: string } } & {
          json: UpdateOrganizationRegionQuota
        }
        output: {}
        outputFormat: string
        status: 204
      }
    }
  } & {
    '/organizations/:organizationId/leave': {
      $post: {
        input: { param: { organizationId: string } }
        output: {}
        outputFormat: string
        status: 204
      }
    }
  } & {
    '/organizations/:organizationId/suspend': {
      $post: {
        input: { param: { organizationId: string } } & { json: OrganizationSuspension }
        output: {}
        outputFormat: string
        status: 204
      }
    }
  } & {
    '/organizations/:organizationId/unsuspend': {
      $post: {
        input: { param: { organizationId: string } }
        output: {}
        outputFormat: string
        status: 204
      }
    }
  } & {
    '/organizations/otel-config/by-sandbox-auth-token/:authToken': {
      $get: {
        input: { param: { authToken: string } }
        output: OtelConfig
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/organizations/:organizationId/otel-config': {
      $delete: {
        input: { param: { organizationId: string } }
        output: {}
        outputFormat: string
        status: 204
      }
      $get: {
        input: { param: { organizationId: string } }
        output: OtelConfig
        outputFormat: 'json'
        status: 200
      }
      $put: {
        input: { param: { organizationId: string } } & { json: OtelConfig }
        output: {}
        outputFormat: string
        status: 204
      }
    }
  } & {
    '/organizations/:organizationId/sandbox-default-limited-network-egress': {
      $post: {
        input: { param: { organizationId: string } } & {
          json: OrganizationSandboxDefaultLimitedNetworkEgress
        }
        output: {}
        outputFormat: string
        status: 204
      }
    }
  } & {
    '/organizations/:organizationId/experimental-config': {
      $put: {
        input: { param: { organizationId: string } } & { json: { [x: string]: unknown } }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/organizations/:organizationId/roles': {
      $get: {
        input: { param: { organizationId: string } }
        output: OrganizationRole[]
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: { param: { organizationId: string } } & { json: CreateOrganizationRole }
        output: OrganizationRole
        outputFormat: 'json'
        status: 201
      }
    }
  } & {
    '/organizations/:organizationId/roles/:roleId': {
      $delete: {
        input: { param: { organizationId: string; roleId: string } }
        output: {}
        outputFormat: string
        status: 204
      }
      $put: {
        input: { param: { organizationId: string; roleId: string } } & {
          json: UpdateOrganizationRole
        }
        output: OrganizationRole
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/organizations/:organizationId/users': {
      $get: {
        input: { param: { organizationId: string } }
        output: OrganizationUser[]
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/organizations/:organizationId/users/:userId/access': {
      $post: {
        input: { param: { organizationId: string; userId: string } } & {
          json: UpdateOrganizationMemberAccess
        }
        output: OrganizationUser
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/organizations/:organizationId/users/:userId': {
      $delete: {
        input: { param: { organizationId: string; userId: string } }
        output: {}
        outputFormat: string
        status: 204
      }
    }
  } & {
    '/organizations/:organizationId/invitations': {
      $get: {
        input: { param: { organizationId: string } }
        output: OrganizationInvitation[]
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: { param: { organizationId: string } } & { json: CreateOrganizationInvitation }
        output: OrganizationInvitation
        outputFormat: 'json'
        status: 201
      }
    }
  } & {
    '/organizations/:organizationId/invitations/:invitationId': {
      $put: {
        input: { param: { organizationId: string; invitationId: string } } & {
          json: UpdateOrganizationInvitation
        }
        output: OrganizationInvitation
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/organizations/:organizationId/invitations/:invitationId/cancel': {
      $post: {
        input: { param: { organizationId: string; invitationId: string } }
        output: {}
        outputFormat: string
        status: 204
      }
    }
  } & {
    '/regions': {
      $get: {
        input: { header: { 'X-Daytona-Organization-ID'?: string | undefined } }
        output: Region[]
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: { header: { 'X-Daytona-Organization-ID'?: string | undefined } } & {
          json: CreateRegion
        }
        output: CreateRegionResponse
        outputFormat: 'json'
        status: 201
      }
    }
  } & {
    '/regions/:id': {
      $delete: {
        input: { param: { id: string } } & {
          header: { 'X-Daytona-Organization-ID'?: string | undefined }
        }
        output: {}
        outputFormat: string
        status: 204
      }
      $get: {
        input: { param: { id: string } } & {
          header: { 'X-Daytona-Organization-ID'?: string | undefined }
        }
        output: Region
        outputFormat: 'json'
        status: 200
      }
      $patch: {
        input: { param: { id: string } } & {
          header: { 'X-Daytona-Organization-ID'?: string | undefined }
        } & { json: UpdateRegion }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/regions/:id/regenerate-proxy-api-key': {
      $post: {
        input: { param: { id: string } } & {
          header: { 'X-Daytona-Organization-ID'?: string | undefined }
        }
        output: RegenerateApiKeyResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/regions/:id/regenerate-ssh-gateway-api-key': {
      $post: {
        input: { param: { id: string } } & {
          header: { 'X-Daytona-Organization-ID'?: string | undefined }
        }
        output: RegenerateApiKeyResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/regions/:id/regenerate-snapshot-manager-credentials': {
      $post: {
        input: { param: { id: string } } & {
          header: { 'X-Daytona-Organization-ID'?: string | undefined }
        }
        output: SnapshotManagerCredentials
        outputFormat: 'json'
        status: 200
      }
    }
  } & { '/users/me': { $get: { input: {}; output: User; outputFormat: 'json'; status: 200 } } } & {
    '/users/account-providers': {
      $get: { input: {}; output: AccountProvider[]; outputFormat: 'json'; status: 200 }
    }
  } & {
    '/users/linked-accounts': {
      $post: { input: { json: CreateLinkedAccount }; output: {}; outputFormat: string; status: 204 }
    }
  } & {
    '/users/linked-accounts/:provider/:providerUserId': {
      $delete: {
        input: { param: { provider: string; providerUserId: string } }
        output: {}
        outputFormat: string
        status: 204
      }
    }
  } & {
    '/users/mfa/sms/enroll': {
      $post: { input: {}; output: string; outputFormat: 'json'; status: 200 }
    }
  } & {
    '/shared-regions': { $get: { input: {}; output: Region[]; outputFormat: 'json'; status: 200 } }
  } & {
    '/sandbox': {
      $get: {
        input: {
          query: {
            cursor?: string | undefined
            limit?: number | undefined
            id?: string | undefined
            name?: string | undefined
            labels?: string | undefined
            includeErroredDeleted?: boolean | undefined
            states?: SandboxState[] | undefined
            snapshots?: string[] | undefined
            regionIds?: string[] | undefined
            sandboxClasses?: SandboxClass[] | undefined
            minCpu?: number | undefined
            maxCpu?: number | undefined
            minMemoryGiB?: number | undefined
            maxMemoryGiB?: number | undefined
            minDiskGiB?: number | undefined
            maxDiskGiB?: number | undefined
            isPublic?: boolean | undefined
            isRecoverable?: boolean | undefined
            createdAtAfter?: string | undefined
            createdAtBefore?: string | undefined
            lastEventAfter?: string | undefined
            lastEventBefore?: string | undefined
            sort?: SandboxListSortField | undefined
            order?: SandboxListSortDirection | undefined
          }
        } & { header: { 'X-Daytona-Organization-ID'?: string | undefined } }
        output: ListSandboxesResponse
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: { header: { 'X-Daytona-Organization-ID'?: string | undefined } } & {
          json: CreateSandbox
        }
        output: Sandbox
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/sandbox/paginated': {
      $get: {
        input: {
          query: {
            page?: number | undefined
            limit?: number | undefined
            id?: string | undefined
            name?: string | undefined
            labels?: string | undefined
            includeErroredDeleted?: boolean | undefined
            states?:
              | (
                  | 'creating'
                  | 'restoring'
                  | 'destroying'
                  | 'started'
                  | 'stopped'
                  | 'starting'
                  | 'stopping'
                  | 'error'
                  | 'build_failed'
                  | 'pending_build'
                  | 'building_snapshot'
                  | 'unknown'
                  | 'pulling_snapshot'
                  | 'archived'
                  | 'archiving'
                  | 'resizing'
                  | 'snapshotting'
                  | 'forking'
                  | 'pausing'
                  | 'paused'
                  | 'resuming'
                )[]
              | undefined
            snapshots?: string[] | undefined
            regions?: string[] | undefined
            minCpu?: number | undefined
            maxCpu?: number | undefined
            minMemoryGiB?: number | undefined
            maxMemoryGiB?: number | undefined
            minDiskGiB?: number | undefined
            maxDiskGiB?: number | undefined
            lastEventAfter?: string | undefined
            lastEventBefore?: string | undefined
            sort?:
              | 'id'
              | 'name'
              | 'state'
              | 'snapshot'
              | 'region'
              | 'updatedAt'
              | 'createdAt'
              | 'lastActivityAt'
              | undefined
            order?: 'asc' | 'desc' | undefined
          }
        } & { header: { 'X-Daytona-Organization-ID'?: string | undefined } }
        output: PaginatedSandboxesDeprecated
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/sandbox/for-runner': {
      $get: {
        input: {
          query: { states?: string | undefined; skipReconcilingSandboxes?: boolean | undefined }
        } & { header: { 'X-Daytona-Organization-ID'?: string | undefined } }
        output: Sandbox[]
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/sandbox/:sandboxIdOrName': {
      $delete: {
        input: { param: { sandboxIdOrName: string } } & {
          header: { 'X-Daytona-Organization-ID'?: string | undefined }
        }
        output: Sandbox
        outputFormat: 'json'
        status: 200
      }
      $get: {
        input: { param: { sandboxIdOrName: string } } & {
          query: { verbose?: boolean | undefined }
        } & { header: { 'X-Daytona-Organization-ID'?: string | undefined } }
        output: Sandbox
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/sandbox/:sandboxIdOrName/recover': {
      $post: {
        input: { param: { sandboxIdOrName: string } } & {
          query: { skipStart?: boolean | undefined }
        } & { header: { 'X-Daytona-Organization-ID'?: string | undefined } }
        output: Sandbox
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/sandbox/:sandboxIdOrName/start': {
      $post: {
        input: { param: { sandboxIdOrName: string } } & {
          header: { 'X-Daytona-Organization-ID'?: string | undefined }
        }
        output: Sandbox
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/sandbox/:sandboxIdOrName/stop': {
      $post: {
        input: { param: { sandboxIdOrName: string } } & {
          query: { force?: boolean | undefined }
        } & { header: { 'X-Daytona-Organization-ID'?: string | undefined } }
        output: Sandbox
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/sandbox/:sandboxIdOrName/pause': {
      $post: {
        input: { param: { sandboxIdOrName: string } } & {
          header: { 'X-Daytona-Organization-ID'?: string | undefined }
        }
        output: Sandbox
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/sandbox/:sandboxIdOrName/resize': {
      $post: {
        input: { param: { sandboxIdOrName: string } } & {
          header: { 'X-Daytona-Organization-ID'?: string | undefined }
        } & { json: ResizeSandbox }
        output: Sandbox
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/sandbox/:sandboxIdOrName/labels': {
      $put: {
        input: { param: { sandboxIdOrName: string } } & {
          header: { 'X-Daytona-Organization-ID'?: string | undefined }
        } & { json: SandboxLabels }
        output: SandboxLabels
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/sandbox/:sandboxId/state': {
      $put: {
        input: { param: { sandboxId: string } } & {
          header: { 'X-Daytona-Organization-ID'?: string | undefined }
        } & { json: UpdateSandboxStateDto }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/sandbox/:sandboxIdOrName/backup': {
      $post: {
        input: { param: { sandboxIdOrName: string } } & {
          header: { 'X-Daytona-Organization-ID'?: string | undefined }
        }
        output: Sandbox
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/sandbox/:sandboxIdOrName/snapshot': {
      $post: {
        input: { param: { sandboxIdOrName: string } } & {
          header: { 'X-Daytona-Organization-ID'?: string | undefined }
        } & { json: CreateSandboxSnapshot }
        output: Sandbox
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/sandbox/:sandboxIdOrName/fork': {
      $post: {
        input: { param: { sandboxIdOrName: string } } & {
          header: { 'X-Daytona-Organization-ID'?: string | undefined }
        } & { json: ForkSandbox }
        output: Sandbox
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/sandbox/:sandboxIdOrName/forks': {
      $get: {
        input: { param: { sandboxIdOrName: string } } & {
          query: { includeDestroyed?: boolean | undefined }
        } & { header: { 'X-Daytona-Organization-ID'?: string | undefined } }
        output: Sandbox[]
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/sandbox/:sandboxIdOrName/parent': {
      $get: {
        input: { param: { sandboxIdOrName: string } } & {
          header: { 'X-Daytona-Organization-ID'?: string | undefined }
        }
        output: Sandbox
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/sandbox/:sandboxIdOrName/ancestors': {
      $get: {
        input: { param: { sandboxIdOrName: string } } & {
          header: { 'X-Daytona-Organization-ID'?: string | undefined }
        }
        output: Sandbox[]
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/sandbox/:sandboxIdOrName/public/:isPublic': {
      $post: {
        input: { param: { sandboxIdOrName: string; isPublic: boolean } } & {
          header: { 'X-Daytona-Organization-ID'?: string | undefined }
        }
        output: Sandbox
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/sandbox/:sandboxId/last-activity': {
      $post: {
        input: { param: { sandboxId: string } } & {
          header: { 'X-Daytona-Organization-ID'?: string | undefined }
        }
        output: {}
        outputFormat: string
        status: 201
      }
    }
  } & {
    '/sandbox/:sandboxIdOrName/autostop/:interval': {
      $post: {
        input: { param: { sandboxIdOrName: string; interval: number } } & {
          header: { 'X-Daytona-Organization-ID'?: string | undefined }
        }
        output: Sandbox
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/sandbox/:sandboxIdOrName/autoarchive/:interval': {
      $post: {
        input: { param: { sandboxIdOrName: string; interval: number } } & {
          header: { 'X-Daytona-Organization-ID'?: string | undefined }
        }
        output: Sandbox
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/sandbox/:sandboxIdOrName/autodelete/:interval': {
      $post: {
        input: { param: { sandboxIdOrName: string; interval: number } } & {
          header: { 'X-Daytona-Organization-ID'?: string | undefined }
        }
        output: Sandbox
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/sandbox/:sandboxIdOrName/network-settings': {
      $post: {
        input: { param: { sandboxIdOrName: string } } & {
          header: { 'X-Daytona-Organization-ID'?: string | undefined }
        } & { json: UpdateSandboxNetworkSettings }
        output: Sandbox
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/sandbox/:sandboxIdOrName/archive': {
      $post: {
        input: { param: { sandboxIdOrName: string } } & {
          header: { 'X-Daytona-Organization-ID'?: string | undefined }
        }
        output: Sandbox
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/sandbox/:sandboxIdOrName/ports/:port/preview-url': {
      $get: {
        input: { param: { sandboxIdOrName: string; port: number } } & {
          header: { 'X-Daytona-Organization-ID'?: string | undefined }
        }
        output: PortPreviewUrl
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/sandbox/:sandboxIdOrName/ports/:port/signed-preview-url': {
      $get: {
        input: { param: { sandboxIdOrName: string; port: number } } & {
          query: { expiresInSeconds?: number | undefined }
        } & { header: { 'X-Daytona-Organization-ID'?: string | undefined } }
        output: SignedPortPreviewUrl
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/sandbox/:sandboxIdOrName/ports/:port/signed-preview-url/:token/expire': {
      $post: {
        input: { param: { sandboxIdOrName: string; port: number; token: string } } & {
          header: { 'X-Daytona-Organization-ID'?: string | undefined }
        }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/sandbox/:sandboxIdOrName/build-logs': {
      $get: {
        input: { param: { sandboxIdOrName: string } } & {
          query: { follow?: boolean | undefined }
        } & { header: { 'X-Daytona-Organization-ID'?: string | undefined } }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/sandbox/:sandboxIdOrName/build-logs-url': {
      $get: {
        input: { param: { sandboxIdOrName: string } } & {
          header: { 'X-Daytona-Organization-ID'?: string | undefined }
        }
        output: Url
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/sandbox/:sandboxIdOrName/ssh-access': {
      $delete: {
        input: { param: { sandboxIdOrName: string } } & {
          query: { token?: string | undefined }
        } & { header: { 'X-Daytona-Organization-ID'?: string | undefined } }
        output: Sandbox
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: { param: { sandboxIdOrName: string } } & {
          query: { expiresInMinutes?: number | undefined }
        } & { header: { 'X-Daytona-Organization-ID'?: string | undefined } }
        output: SshAccessDto
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/sandbox/ssh-access/validate': {
      $get: {
        input: { query: { token: string } } & {
          header: { 'X-Daytona-Organization-ID'?: string | undefined }
        }
        output: SshAccessValidationDto
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/sandbox/:sandboxId/toolbox-proxy-url': {
      $get: {
        input: { param: { sandboxId: string } } & {
          header: { 'X-Daytona-Organization-ID'?: string | undefined }
        }
        output: ToolboxProxyUrl
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/sandbox/:sandboxId/organization': {
      $get: {
        input: { param: { sandboxId: string } } & {
          header: { 'X-Daytona-Organization-ID'?: string | undefined }
        }
        output: Organization
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/sandbox/:sandboxId/region-quota': {
      $get: {
        input: { param: { sandboxId: string } } & {
          header: { 'X-Daytona-Organization-ID'?: string | undefined }
        }
        output: RegionQuota
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/runners': {
      $get: {
        input: { query: { regionId?: string | undefined } } & {
          header: { 'X-Daytona-Organization-ID'?: string | undefined }
        }
        output: Runner[]
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: { header: { 'X-Daytona-Organization-ID'?: string | undefined } } & {
          json: CreateRunner
        }
        output: CreateRunnerResponse
        outputFormat: 'json'
        status: 201
      }
    }
  } & {
    '/runners/me': { $get: { input: {}; output: RunnerFull; outputFormat: 'json'; status: 200 } }
  } & {
    '/runners/by-sandbox/:sandboxId': {
      $get: {
        input: { param: { sandboxId: string } }
        output: RunnerFull
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/runners/by-snapshot-ref': {
      $get: {
        input: { query: { ref: string } }
        output: RunnerSnapshotDto[]
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/runners/:id': {
      $delete: {
        input: { param: { id: string } } & {
          header: { 'X-Daytona-Organization-ID'?: string | undefined }
        }
        output: {}
        outputFormat: string
        status: 204
      }
      $get: {
        input: { param: { id: string } } & {
          header: { 'X-Daytona-Organization-ID'?: string | undefined }
        }
        output: Runner
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/runners/:id/full': {
      $get: {
        input: { param: { id: string } }
        output: RunnerFull
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/runners/:id/scheduling': {
      $patch: {
        input: { param: { id: string } } & {
          header: { 'X-Daytona-Organization-ID'?: string | undefined }
        }
        output: Runner
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/runners/:id/draining': {
      $patch: {
        input: { param: { id: string } } & {
          header: { 'X-Daytona-Organization-ID'?: string | undefined }
        }
        output: Runner
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/runners/healthcheck': {
      $post: { input: { json: RunnerHealthcheck }; output: {}; outputFormat: string; status: 200 }
    }
  } & {
    '/toolbox/:sandboxId/toolbox/project-dir': {
      $get: {
        input: { param: { sandboxId: string } } & {
          header: { 'X-Daytona-Organization-ID'?: string | undefined }
        }
        output: ProjectDirResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/toolbox/:sandboxId/toolbox/user-home-dir': {
      $get: {
        input: { param: { sandboxId: string } } & {
          header: { 'X-Daytona-Organization-ID'?: string | undefined }
        }
        output: UserHomeDirResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/toolbox/:sandboxId/toolbox/work-dir': {
      $get: {
        input: { param: { sandboxId: string } } & {
          header: { 'X-Daytona-Organization-ID'?: string | undefined }
        }
        output: WorkDirResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/toolbox/:sandboxId/toolbox/files': {
      $delete: {
        input: { param: { sandboxId: string } } & {
          query: { recursive?: boolean | undefined; path: string }
        } & { header: { 'X-Daytona-Organization-ID'?: string | undefined } }
        output: {}
        outputFormat: string
        status: 200
      }
      $get: {
        input: { param: { sandboxId: string } } & { query: { path?: string | undefined } } & {
          header: { 'X-Daytona-Organization-ID'?: string | undefined }
        }
        output: FileInfo[]
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/toolbox/:sandboxId/toolbox/files/download': {
      $get: {
        input: { param: { sandboxId: string } } & { query: { path: string } } & {
          header: { 'X-Daytona-Organization-ID'?: string | undefined }
        }
        output: File
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/toolbox/:sandboxId/toolbox/files/bulk-download': {
      $post: {
        input: { param: { sandboxId: string } } & {
          header: { 'X-Daytona-Organization-ID'?: string | undefined }
        } & { json: DownloadFiles }
        output: File
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/toolbox/:sandboxId/toolbox/files/find': {
      $get: {
        input: { param: { sandboxId: string } } & { query: { path: string; pattern: string } } & {
          header: { 'X-Daytona-Organization-ID'?: string | undefined }
        }
        output: Match[]
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/toolbox/:sandboxId/toolbox/files/folder': {
      $post: {
        input: { param: { sandboxId: string } } & { query: { path: string; mode: string } } & {
          header: { 'X-Daytona-Organization-ID'?: string | undefined }
        }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/toolbox/:sandboxId/toolbox/files/info': {
      $get: {
        input: { param: { sandboxId: string } } & { query: { path: string } } & {
          header: { 'X-Daytona-Organization-ID'?: string | undefined }
        }
        output: FileInfo
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/toolbox/:sandboxId/toolbox/files/move': {
      $post: {
        input: { param: { sandboxId: string } } & {
          query: { source: string; destination: string }
        } & { header: { 'X-Daytona-Organization-ID'?: string | undefined } }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/toolbox/:sandboxId/toolbox/files/permissions': {
      $post: {
        input: { param: { sandboxId: string } } & {
          query: {
            path: string
            owner?: string | undefined
            group?: string | undefined
            mode?: string | undefined
          }
        } & { header: { 'X-Daytona-Organization-ID'?: string | undefined } }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/toolbox/:sandboxId/toolbox/files/replace': {
      $post: {
        input: { param: { sandboxId: string } } & {
          header: { 'X-Daytona-Organization-ID'?: string | undefined }
        } & { json: ReplaceRequest }
        output: ReplaceResult[]
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/toolbox/:sandboxId/toolbox/files/search': {
      $get: {
        input: { param: { sandboxId: string } } & { query: { path: string; pattern: string } } & {
          header: { 'X-Daytona-Organization-ID'?: string | undefined }
        }
        output: SearchFilesResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/toolbox/:sandboxId/toolbox/files/upload': {
      $post: {
        input: { param: { sandboxId: string } } & { query: { path: string } } & {
          header: { 'X-Daytona-Organization-ID'?: string | undefined }
        } & { form: UploadFileDeprecatedRequest }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/toolbox/:sandboxId/toolbox/files/bulk-upload': {
      $post: {
        input: { param: { sandboxId: string } } & {
          header: { 'X-Daytona-Organization-ID'?: string | undefined }
        } & { form: UploadFile[] }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/toolbox/:sandboxId/toolbox/git/add': {
      $post: {
        input: { param: { sandboxId: string } } & {
          header: { 'X-Daytona-Organization-ID'?: string | undefined }
        } & { json: GitAddRequest }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/toolbox/:sandboxId/toolbox/git/branches': {
      $delete: {
        input: { param: { sandboxId: string } } & {
          header: { 'X-Daytona-Organization-ID'?: string | undefined }
        } & { json: GitDeleteBranchRequest }
        output: {}
        outputFormat: string
        status: 200
      }
      $get: {
        input: { param: { sandboxId: string } } & { query: { path: string } } & {
          header: { 'X-Daytona-Organization-ID'?: string | undefined }
        }
        output: ListBranchResponse
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: { param: { sandboxId: string } } & {
          header: { 'X-Daytona-Organization-ID'?: string | undefined }
        } & { json: GitBranchRequest }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/toolbox/:sandboxId/toolbox/git/clone': {
      $post: {
        input: { param: { sandboxId: string } } & {
          header: { 'X-Daytona-Organization-ID'?: string | undefined }
        } & { json: GitCloneRequest }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/toolbox/:sandboxId/toolbox/git/commit': {
      $post: {
        input: { param: { sandboxId: string } } & {
          header: { 'X-Daytona-Organization-ID'?: string | undefined }
        } & { json: GitCommitRequest }
        output: GitCommitResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/toolbox/:sandboxId/toolbox/git/history': {
      $get: {
        input: { param: { sandboxId: string } } & { query: { path: string } } & {
          header: { 'X-Daytona-Organization-ID'?: string | undefined }
        }
        output: GitCommitInfo[]
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/toolbox/:sandboxId/toolbox/git/pull': {
      $post: {
        input: { param: { sandboxId: string } } & {
          header: { 'X-Daytona-Organization-ID'?: string | undefined }
        } & { json: GitRepoRequest }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/toolbox/:sandboxId/toolbox/git/push': {
      $post: {
        input: { param: { sandboxId: string } } & {
          header: { 'X-Daytona-Organization-ID'?: string | undefined }
        } & { json: GitRepoRequest }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/toolbox/:sandboxId/toolbox/git/checkout': {
      $post: {
        input: { param: { sandboxId: string } } & {
          header: { 'X-Daytona-Organization-ID'?: string | undefined }
        } & { json: GitCheckoutRequest }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/toolbox/:sandboxId/toolbox/git/status': {
      $get: {
        input: { param: { sandboxId: string } } & { query: { path: string } } & {
          header: { 'X-Daytona-Organization-ID'?: string | undefined }
        }
        output: GitStatus
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/toolbox/:sandboxId/toolbox/process/execute': {
      $post: {
        input: { param: { sandboxId: string } } & {
          header: { 'X-Daytona-Organization-ID'?: string | undefined }
        } & { json: ExecuteRequest }
        output: ExecuteResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/toolbox/:sandboxId/toolbox/process/session': {
      $get: {
        input: { param: { sandboxId: string } } & {
          header: { 'X-Daytona-Organization-ID'?: string | undefined }
        }
        output: Session[]
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: { param: { sandboxId: string } } & {
          header: { 'X-Daytona-Organization-ID'?: string | undefined }
        } & { json: CreateSessionRequest }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/toolbox/:sandboxId/toolbox/process/session/:sessionId': {
      $delete: {
        input: { param: { sandboxId: string; sessionId: string } } & {
          header: { 'X-Daytona-Organization-ID'?: string | undefined }
        }
        output: {}
        outputFormat: string
        status: 200
      }
      $get: {
        input: { param: { sandboxId: string; sessionId: string } } & {
          header: { 'X-Daytona-Organization-ID'?: string | undefined }
        }
        output: Session
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/toolbox/:sandboxId/toolbox/process/session/:sessionId/exec': {
      $post:
        | {
            input: { param: { sandboxId: string; sessionId: string } } & {
              header: { 'X-Daytona-Organization-ID'?: string | undefined }
            } & { json: SessionExecuteRequest }
            output: SessionExecuteResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { sandboxId: string; sessionId: string } } & {
              header: { 'X-Daytona-Organization-ID'?: string | undefined }
            } & { json: SessionExecuteRequest }
            output: SessionExecuteResponse
            outputFormat: 'json'
            status: 202
          }
    }
  } & {
    '/toolbox/:sandboxId/toolbox/process/session/:sessionId/command/:commandId': {
      $get: {
        input: { param: { sandboxId: string; sessionId: string; commandId: string } } & {
          header: { 'X-Daytona-Organization-ID'?: string | undefined }
        }
        output: Command
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/toolbox/:sandboxId/toolbox/process/session/:sessionId/command/:commandId/logs': {
      $get: {
        input: { param: { sandboxId: string; sessionId: string; commandId: string } } & {
          query: { follow?: boolean | undefined }
        } & { header: { 'X-Daytona-Organization-ID'?: string | undefined } }
        output: string
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/toolbox/:sandboxId/toolbox/process/pty': {
      $get: {
        input: { param: { sandboxId: string } } & {
          header: { 'X-Daytona-Organization-ID'?: string | undefined }
        }
        output: PtyListResponse
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: { param: { sandboxId: string } } & {
          header: { 'X-Daytona-Organization-ID'?: string | undefined }
        } & { json: PtyCreateRequest }
        output: PtyCreateResponse
        outputFormat: 'json'
        status: 201
      }
    }
  } & {
    '/toolbox/:sandboxId/toolbox/process/pty/:sessionId': {
      $delete: {
        input: { param: { sandboxId: string; sessionId: string } } & {
          header: { 'X-Daytona-Organization-ID'?: string | undefined }
        }
        output: {}
        outputFormat: string
        status: 200
      }
      $get: {
        input: { param: { sandboxId: string; sessionId: string } } & {
          header: { 'X-Daytona-Organization-ID'?: string | undefined }
        }
        output: PtySessionInfo
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/toolbox/:sandboxId/toolbox/process/pty/:sessionId/resize': {
      $post: {
        input: { param: { sandboxId: string; sessionId: string } } & {
          header: { 'X-Daytona-Organization-ID'?: string | undefined }
        } & { json: PtyResizeRequest }
        output: PtySessionInfo
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/toolbox/:sandboxId/toolbox/lsp/completions': {
      $post: {
        input: { param: { sandboxId: string } } & {
          header: { 'X-Daytona-Organization-ID'?: string | undefined }
        } & { json: LspCompletionParams }
        output: CompletionList
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/toolbox/:sandboxId/toolbox/lsp/did-close': {
      $post: {
        input: { param: { sandboxId: string } } & {
          header: { 'X-Daytona-Organization-ID'?: string | undefined }
        } & { json: LspDocumentRequest }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/toolbox/:sandboxId/toolbox/lsp/did-open': {
      $post: {
        input: { param: { sandboxId: string } } & {
          header: { 'X-Daytona-Organization-ID'?: string | undefined }
        } & { json: LspDocumentRequest }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/toolbox/:sandboxId/toolbox/lsp/document-symbols': {
      $get: {
        input: { param: { sandboxId: string } } & {
          query: { languageId: string; pathToProject: string; uri: string }
        } & { header: { 'X-Daytona-Organization-ID'?: string | undefined } }
        output: LspSymbol[]
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/toolbox/:sandboxId/toolbox/lsp/start': {
      $post: {
        input: { param: { sandboxId: string } } & {
          header: { 'X-Daytona-Organization-ID'?: string | undefined }
        } & { json: LspServerRequest }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/toolbox/:sandboxId/toolbox/lsp/stop': {
      $post: {
        input: { param: { sandboxId: string } } & {
          header: { 'X-Daytona-Organization-ID'?: string | undefined }
        } & { json: LspServerRequest }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/toolbox/:sandboxId/toolbox/lsp/workspace-symbols': {
      $get: {
        input: { param: { sandboxId: string } } & {
          query: { languageId: string; pathToProject: string; query: string }
        } & { header: { 'X-Daytona-Organization-ID'?: string | undefined } }
        output: LspSymbol[]
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/toolbox/:sandboxId/toolbox/computeruse/start': {
      $post: {
        input: { param: { sandboxId: string } } & {
          header: { 'X-Daytona-Organization-ID'?: string | undefined }
        }
        output: ComputerUseStartResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/toolbox/:sandboxId/toolbox/computeruse/stop': {
      $post: {
        input: { param: { sandboxId: string } } & {
          header: { 'X-Daytona-Organization-ID'?: string | undefined }
        }
        output: ComputerUseStopResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/toolbox/:sandboxId/toolbox/computeruse/status': {
      $get: {
        input: { param: { sandboxId: string } } & {
          header: { 'X-Daytona-Organization-ID'?: string | undefined }
        }
        output: ComputerUseStatusResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/toolbox/:sandboxId/toolbox/computeruse/process/:processName/status': {
      $get: {
        input: { param: { processName: string; sandboxId: string } } & {
          header: { 'X-Daytona-Organization-ID'?: string | undefined }
        }
        output: ProcessStatusResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/toolbox/:sandboxId/toolbox/computeruse/process/:processName/restart': {
      $post: {
        input: { param: { processName: string; sandboxId: string } } & {
          header: { 'X-Daytona-Organization-ID'?: string | undefined }
        }
        output: ProcessRestartResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/toolbox/:sandboxId/toolbox/computeruse/process/:processName/logs': {
      $get: {
        input: { param: { processName: string; sandboxId: string } } & {
          header: { 'X-Daytona-Organization-ID'?: string | undefined }
        }
        output: ProcessLogsResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/toolbox/:sandboxId/toolbox/computeruse/process/:processName/errors': {
      $get: {
        input: { param: { processName: string; sandboxId: string } } & {
          header: { 'X-Daytona-Organization-ID'?: string | undefined }
        }
        output: ProcessErrorsResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/toolbox/:sandboxId/toolbox/computeruse/mouse/position': {
      $get: {
        input: { param: { sandboxId: string } } & {
          header: { 'X-Daytona-Organization-ID'?: string | undefined }
        }
        output: MousePosition
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/toolbox/:sandboxId/toolbox/computeruse/mouse/move': {
      $post: {
        input: { param: { sandboxId: string } } & {
          header: { 'X-Daytona-Organization-ID'?: string | undefined }
        } & { json: MouseMoveRequest }
        output: MouseMoveResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/toolbox/:sandboxId/toolbox/computeruse/mouse/click': {
      $post: {
        input: { param: { sandboxId: string } } & {
          header: { 'X-Daytona-Organization-ID'?: string | undefined }
        } & { json: MouseClickRequest }
        output: MouseClickResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/toolbox/:sandboxId/toolbox/computeruse/mouse/drag': {
      $post: {
        input: { param: { sandboxId: string } } & {
          header: { 'X-Daytona-Organization-ID'?: string | undefined }
        } & { json: MouseDragRequest }
        output: MouseDragResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/toolbox/:sandboxId/toolbox/computeruse/mouse/scroll': {
      $post: {
        input: { param: { sandboxId: string } } & {
          header: { 'X-Daytona-Organization-ID'?: string | undefined }
        } & { json: MouseScrollRequest }
        output: MouseScrollResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/toolbox/:sandboxId/toolbox/computeruse/keyboard/type': {
      $post: {
        input: { param: { sandboxId: string } } & {
          header: { 'X-Daytona-Organization-ID'?: string | undefined }
        } & { json: KeyboardTypeRequest }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/toolbox/:sandboxId/toolbox/computeruse/keyboard/key': {
      $post: {
        input: { param: { sandboxId: string } } & {
          header: { 'X-Daytona-Organization-ID'?: string | undefined }
        } & { json: KeyboardPressRequest }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/toolbox/:sandboxId/toolbox/computeruse/keyboard/hotkey': {
      $post: {
        input: { param: { sandboxId: string } } & {
          header: { 'X-Daytona-Organization-ID'?: string | undefined }
        } & { json: KeyboardHotkeyRequest }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/toolbox/:sandboxId/toolbox/computeruse/screenshot': {
      $get: {
        input: { param: { sandboxId: string } } & {
          query: { show_cursor?: boolean | undefined }
        } & { header: { 'X-Daytona-Organization-ID'?: string | undefined } }
        output: ScreenshotResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/toolbox/:sandboxId/toolbox/computeruse/screenshot/region': {
      $get: {
        input: { param: { sandboxId: string } } & {
          query: {
            show_cursor?: boolean | undefined
            height: number
            width: number
            y: number
            x: number
          }
        } & { header: { 'X-Daytona-Organization-ID'?: string | undefined } }
        output: RegionScreenshotResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/toolbox/:sandboxId/toolbox/computeruse/screenshot/compressed': {
      $get: {
        input: { param: { sandboxId: string } } & {
          query: {
            scale?: number | undefined
            quality?: number | undefined
            format?: string | undefined
            show_cursor?: boolean | undefined
          }
        } & { header: { 'X-Daytona-Organization-ID'?: string | undefined } }
        output: CompressedScreenshotResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/toolbox/:sandboxId/toolbox/computeruse/screenshot/region/compressed': {
      $get: {
        input: { param: { sandboxId: string } } & {
          query: {
            scale?: number | undefined
            quality?: number | undefined
            format?: string | undefined
            show_cursor?: boolean | undefined
            height: number
            width: number
            y: number
            x: number
          }
        } & { header: { 'X-Daytona-Organization-ID'?: string | undefined } }
        output: CompressedScreenshotResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/toolbox/:sandboxId/toolbox/computeruse/display/info': {
      $get: {
        input: { param: { sandboxId: string } } & {
          header: { 'X-Daytona-Organization-ID'?: string | undefined }
        }
        output: DisplayInfoResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/toolbox/:sandboxId/toolbox/computeruse/display/windows': {
      $get: {
        input: { param: { sandboxId: string } } & {
          header: { 'X-Daytona-Organization-ID'?: string | undefined }
        }
        output: WindowsResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/snapshots': {
      $get: {
        input: {
          query: {
            page?: number | undefined
            limit?: number | undefined
            name?: string | undefined
            sort?: 'name' | 'state' | 'lastUsedAt' | 'createdAt' | undefined
            order?: 'asc' | 'desc' | undefined
          }
        } & { header: { 'X-Daytona-Organization-ID'?: string | undefined } }
        output: PaginatedSnapshots
        outputFormat: 'json'
        status: 200
      }
      $post:
        | {
            input: { header: { 'X-Daytona-Organization-ID'?: string | undefined } } & {
              json: CreateSnapshot
            }
            output: SnapshotDto
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { header: { 'X-Daytona-Organization-ID'?: string | undefined } } & {
              json: CreateSnapshot
            }
            output: {}
            outputFormat: string
            status: 400
          }
    }
  } & {
    '/snapshots/:id': {
      $delete: {
        input: { param: { id: string } } & {
          header: { 'X-Daytona-Organization-ID'?: string | undefined }
        }
        output: {}
        outputFormat: string
        status: 200
      }
      $get:
        | {
            input: { param: { id: string } } & {
              header: { 'X-Daytona-Organization-ID'?: string | undefined }
            }
            output: SnapshotDto
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & {
              header: { 'X-Daytona-Organization-ID'?: string | undefined }
            }
            output: {}
            outputFormat: string
            status: 404
          }
    }
  } & {
    '/snapshots/:id/build-logs': {
      $get: {
        input: { param: { id: string } } & { query: { follow?: boolean | undefined } } & {
          header: { 'X-Daytona-Organization-ID'?: string | undefined }
        }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/snapshots/:id/build-logs-url': {
      $get: {
        input: { param: { id: string } } & {
          header: { 'X-Daytona-Organization-ID'?: string | undefined }
        }
        output: Url
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/snapshots/:id/activate': {
      $post:
        | {
            input: { param: { id: string } } & {
              header: { 'X-Daytona-Organization-ID'?: string | undefined }
            }
            output: SnapshotDto
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & {
              header: { 'X-Daytona-Organization-ID'?: string | undefined }
            }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { id: string } } & {
              header: { 'X-Daytona-Organization-ID'?: string | undefined }
            }
            output: {}
            outputFormat: string
            status: 404
          }
    }
  } & {
    '/snapshots/:id/deactivate': {
      $post: {
        input: { param: { id: string } } & {
          header: { 'X-Daytona-Organization-ID'?: string | undefined }
        }
        output: {}
        outputFormat: string
        status: 204
      }
    }
  } & {
    '/preview/:sandboxId/public': {
      $get: {
        input: { param: { sandboxId: string } }
        output: boolean
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/preview/:sandboxId/validate/:authToken': {
      $get: {
        input: { param: { sandboxId: string; authToken: string } }
        output: boolean
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/preview/:sandboxId/access': {
      $get: {
        input: { param: { sandboxId: string } }
        output: boolean
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/preview/:signedPreviewToken/:port/sandbox-id': {
      $get: {
        input: { param: { signedPreviewToken: string; port: number } }
        output: string
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/volumes': {
      $get: {
        input: { query: { includeDeleted?: boolean | undefined } } & {
          header: { 'X-Daytona-Organization-ID'?: string | undefined }
        }
        output: VolumeDto[]
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: { header: { 'X-Daytona-Organization-ID'?: string | undefined } } & {
          json: CreateVolume
        }
        output: VolumeDto
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/volumes/:volumeId': {
      $delete:
        | {
            input: { param: { volumeId: string } } & {
              header: { 'X-Daytona-Organization-ID'?: string | undefined }
            }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { param: { volumeId: string } } & {
              header: { 'X-Daytona-Organization-ID'?: string | undefined }
            }
            output: {}
            outputFormat: string
            status: 409
          }
      $get: {
        input: { param: { volumeId: string } } & {
          header: { 'X-Daytona-Organization-ID'?: string | undefined }
        }
        output: VolumeDto
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/volumes/by-name/:name': {
      $get: {
        input: { param: { name: string } } & {
          header: { 'X-Daytona-Organization-ID'?: string | undefined }
        }
        output: VolumeDto
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/jobs': {
      $get: {
        input: {
          query: {
            page?: number | undefined
            limit?: number | undefined
            status?: JobStatus | undefined
            offset?: number | undefined
          }
        }
        output: PaginatedJobs
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/jobs/poll': {
      $get: {
        input: { query: { timeout?: number | undefined; limit?: number | undefined } }
        output: PollJobsResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/jobs/:jobId': {
      $get: { input: { param: { jobId: string } }; output: Job; outputFormat: 'json'; status: 200 }
    }
  } & {
    '/jobs/:jobId/status': {
      $post: {
        input: { param: { jobId: string } } & { json: UpdateJobStatus }
        output: Job
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/docker-registry': {
      $get: {
        input: { header: { 'X-Daytona-Organization-ID'?: string | undefined } }
        output: DockerRegistry[]
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: { header: { 'X-Daytona-Organization-ID'?: string | undefined } } & {
          json: CreateDockerRegistry
        }
        output: DockerRegistry
        outputFormat: 'json'
        status: 201
      }
    }
  } & {
    '/docker-registry/registry-push-access': {
      $get: {
        input: { query: { regionId?: string | undefined } } & {
          header: { 'X-Daytona-Organization-ID'?: string | undefined }
        }
        output: RegistryPushAccessDto
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/docker-registry/:id': {
      $delete: {
        input: { param: { id: string } } & {
          header: { 'X-Daytona-Organization-ID'?: string | undefined }
        }
        output: {}
        outputFormat: string
        status: 204
      }
      $get: {
        input: { param: { id: string } } & {
          header: { 'X-Daytona-Organization-ID'?: string | undefined }
        }
        output: DockerRegistry
        outputFormat: 'json'
        status: 200
      }
      $patch: {
        input: { param: { id: string } } & {
          header: { 'X-Daytona-Organization-ID'?: string | undefined }
        } & { json: UpdateDockerRegistry }
        output: DockerRegistry
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/admin/runners': {
      $get: {
        input: { query: { regionId?: string | undefined } }
        output: RunnerFull[]
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: { json: AdminCreateRunner }
        output: CreateRunnerResponse
        outputFormat: 'json'
        status: 201
      }
    }
  } & {
    '/admin/runners/:id': {
      $delete: { input: { param: { id: string } }; output: {}; outputFormat: string; status: 204 }
      $get: {
        input: { param: { id: string } }
        output: RunnerFull
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/admin/runners/:id/scheduling': {
      $patch: { input: { param: { id: string } }; output: {}; outputFormat: string; status: 204 }
    }
  } & {
    '/admin/sandbox/:sandboxId/recover': {
      $post: {
        input: { param: { sandboxId: string } }
        output: Sandbox
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/admin/users': {
      $get: { input: {}; output: {}; outputFormat: string; status: 200 }
      $post: { input: { json: CreateUser }; output: {}; outputFormat: string; status: 201 }
    }
  } & {
    '/admin/users/:id/regenerate-key-pair': {
      $post: { input: { param: { id: string } }; output: {}; outputFormat: string; status: 201 }
    }
  } & {
    '/admin/users/:id': {
      $get: { input: { param: { id: string } }; output: User; outputFormat: 'json'; status: 200 }
    }
  } & {
    '/admin/webhooks/organizations/:organizationId/send': {
      $post: {
        input: { param: { organizationId: string } } & { json: SendWebhookDto }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/admin/webhooks/organizations/:organizationId/messages/:messageId/attempts': {
      $get: {
        input: { param: { organizationId: string; messageId: string } }
        output: { [x: string]: unknown }[]
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/admin/webhooks/status': {
      $get: {
        input: {}
        output: AdminGetWebhookStatus_200Response
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/admin/webhooks/organizations/:organizationId/initialize': {
      $post:
        | {
            input: { param: { organizationId: string } }
            output: {}
            outputFormat: string
            status: 201
          }
        | {
            input: { param: { organizationId: string } }
            output: {}
            outputFormat: string
            status: 404
          }
    }
  } & {
    '/admin/docker-registry/:id/set-default': {
      $post: {
        input: { param: { id: string } }
        output: DockerRegistry
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/admin/snapshots/can-cleanup-image': {
      $get: {
        input: { query: { imageName: string } }
        output: boolean
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/admin/snapshots/:id/general': {
      $patch: {
        input: { param: { id: string } } & { json: SetSnapshotGeneralStatusDto }
        output: SnapshotDto
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/admin/audit': {
      $get: {
        input: {
          query: {
            page?: number | undefined
            limit?: number | undefined
            from?: string | undefined
            to?: string | undefined
            nextToken?: string | undefined
          }
        }
        output: PaginatedAuditLogs
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/admin/organizations/:organizationId/quota/:regionId': {
      $patch: {
        input: { param: { organizationId: string; regionId: string } } & {
          json: UpdateOrganizationRegionQuota
        }
        output: {}
        outputFormat: string
        status: 204
      }
      $post: {
        input: { param: { organizationId: string; regionId: string } } & {
          json: CreateOrganizationRegionQuota
        }
        output: RegionQuota
        outputFormat: 'json'
        status: 201
      }
    }
  } & {
    '/admin/organizations/:organizationId/quota/:regionId/:sandboxClass': {
      $delete: {
        input: { param: { organizationId: string; regionId: string; sandboxClass: SandboxClass } }
        output: {}
        outputFormat: string
        status: 204
      }
      $get: {
        input: { param: { organizationId: string; regionId: string; sandboxClass: SandboxClass } }
        output: RegionQuota
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/webhooks/organizations/:organizationId/app-portal-access': {
      $post: {
        input: { param: { organizationId: string } } & {
          header: { 'X-Daytona-Organization-ID'?: string | undefined }
        }
        output: WebhookAppPortalAccess
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/webhooks/organizations/:organizationId/initialization-status': {
      $get:
        | {
            input: { param: { organizationId: string } } & {
              header: { 'X-Daytona-Organization-ID'?: string | undefined }
            }
            output: WebhookInitializationStatus
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { organizationId: string } } & {
              header: { 'X-Daytona-Organization-ID'?: string | undefined }
            }
            output: {}
            outputFormat: string
            status: 404
          }
    }
  } & {
    '/webhooks/organizations/:organizationId/initialize': {
      $post: {
        input: { param: { organizationId: string } } & {
          header: { 'X-Daytona-Organization-ID'?: string | undefined }
        }
        output: WebhookInitializationStatus
        outputFormat: 'json'
        status: 201
      }
    }
  } & {
    '/webhooks/organizations/:organizationId/refresh-endpoints': {
      $post:
        | {
            input: { param: { organizationId: string } } & {
              header: { 'X-Daytona-Organization-ID'?: string | undefined }
            }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { organizationId: string } } & {
              header: { 'X-Daytona-Organization-ID'?: string | undefined }
            }
            output: {}
            outputFormat: string
            status: 404
          }
    }
  } & {
    '/audit/organizations/:organizationId': {
      $get: {
        input: { param: { organizationId: string } } & {
          query: {
            page?: number | undefined
            limit?: number | undefined
            from?: string | undefined
            to?: string | undefined
            nextToken?: string | undefined
          }
        }
        output: PaginatedAuditLogs
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/object-storage/push-access': {
      $get: {
        input: { header: { 'X-Daytona-Organization-ID'?: string | undefined } }
        output: StorageAccessDto
        outputFormat: 'json'
        status: 200
      }
    }
  } & { '/health': { $get: { input: {}; output: {}; outputFormat: string; status: 200 } } } & {
    '/health/ready': {
      $get:
        | {
            input: {}
            output: HealthControllerCheck_200Response
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {}
            output: HealthControllerCheck_503Response
            outputFormat: 'json'
            status: 503
          }
    }
  } & {
    '/sandbox/:sandboxId/telemetry/logs': {
      $get: {
        input: { param: { sandboxId: string } } & {
          query: {
            from: string
            to: string
            page?: number | undefined
            limit?: number | undefined
            severities?: string[] | undefined
            search?: string | undefined
          }
        } & { header: { 'X-Daytona-Organization-ID'?: string | undefined } }
        output: PaginatedLogs
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/sandbox/:sandboxId/telemetry/traces': {
      $get: {
        input: { param: { sandboxId: string } } & {
          query: { from: string; to: string; page?: number | undefined; limit?: number | undefined }
        } & { header: { 'X-Daytona-Organization-ID'?: string | undefined } }
        output: PaginatedTraces
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/sandbox/:sandboxId/telemetry/traces/:traceId': {
      $get: {
        input: { param: { sandboxId: string; traceId: string } } & {
          header: { 'X-Daytona-Organization-ID'?: string | undefined }
        }
        output: TraceSpan[]
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/sandbox/:sandboxId/telemetry/metrics': {
      $get: {
        input: { param: { sandboxId: string } } & {
          query: { from: string; to: string; metricNames?: string[] | undefined }
        } & { header: { 'X-Daytona-Organization-ID'?: string | undefined } }
        output: MetricsResponse
        outputFormat: 'json'
        status: 200
      }
    }
  },
  '/'
>
export default routes
