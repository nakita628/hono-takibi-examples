type Cursor = string
type BlueprintWithCursor = {
  blueprint: {
    id: string
    ownerId: string
    name: string
    status: 'created' | 'paused' | 'in_sync' | 'syncing' | 'error'
    autoSync: boolean
    repo: string
    branch: string
    path: string
    lastSync?: string | undefined
  }
  cursor: Cursor
}
type Error = { id?: string | undefined; message?: string | undefined; code?: string | undefined }
type TeamMemberRole =
  | 'ADMIN'
  | 'DEVELOPER'
  | 'WORKSPACE_CONTRIBUTOR'
  | 'WORKSPACE_BILLING'
  | 'WORKSPACE_VIEWER'
type TeamMember = {
  userId: string
  name: string
  email: string
  status: 'active' | 'inactive'
  role: TeamMemberRole
  mfaEnabled: boolean
}
type SyncWithCursor = {
  sync: {
    id: string
    commit: { id: string }
    startedAt?: string | undefined
    completedAt?: string | undefined
    state: 'created' | 'pending' | 'running' | 'error' | 'success'
  }
  cursor: Cursor
}
type Region = 'frankfurt' | 'oregon' | 'ohio' | 'singapore' | 'virginia'
type DedicatedIPStatus =
  | 'UNKNOWN'
  | 'CREATING'
  | 'PENDING'
  | 'RUNNING'
  | 'FAILED'
  | 'DELETING'
  | 'DELETED'
type DedicatedIP = {
  id: string
  name: string
  description: string
  ownerId: string
  region: Region
  environmentIds: string[]
  ips: string[]
  status: DedicatedIPStatus
  createdAt: string
  updatedAt?: string | undefined
}
type DedicatedIPPOST = {
  name: string
  description?: string | undefined
  ownerId: string
  region: Region
  environmentIds?: string[] | undefined
}
type DedicatedIPPATCH = {
  name?: string | undefined
  description?: string | undefined
  environmentIds?: string[] | undefined
}
type DiskWithCursor = {
  disk: {
    id: string
    name: string
    sizeGB: number
    mountPath: string
    serviceId?: string | undefined
    createdAt: string
    updatedAt: string
  }
  cursor: Cursor
}
type InstanceId = string
type DiskSnapshot = {
  createdAt?: string | undefined
  snapshotKey?: string | undefined
  instanceId?: InstanceId | undefined
}
type SnapshotRestorePOST = { snapshotKey: string; instanceId?: InstanceId | undefined }
type User = { id: string; email: string; name: string }
type CidrBlockAndDescription = { cidrBlock: string; description: string }
type Owner = {
  id: string
  name: string
  email: string
  ipAllowList?: CidrBlockAndDescription[] | undefined
  twoFactorAuthEnabled?: boolean | undefined
  type: 'user' | 'team'
}
type OwnerWithCursor = { owner?: Owner | undefined; cursor?: Cursor | undefined }
type TeamMembers = TeamMember[]
type AuditLogActor = {
  type: 'user' | 'rest_api' | 'system'
  email?: string | undefined
  id?: string | undefined
}
type AuditLog = {
  id: string
  timestamp: string
  event:
    | 'AcceptOrgInviteEvent'
    | 'AcceptTeamInviteEvent'
    | 'AddOrgMemberEvent'
    | 'ApplyBlueprintEvent'
    | 'ChangeEnvironmentProtectionEvent'
    | 'ChangeOrg2FAEnforcementEvent'
    | 'ChangeOrgAllowedLoginMethodsEvent'
    | 'ChangeOrgNameEvent'
    | 'ChangeOrgRoleEvent'
    | 'ChangeTeam2FAEnforcementEvent'
    | 'ChangeTeamAllowedLoginMethodsEvent'
    | 'ChangeTeamMemberRoleEvent'
    | 'ChangeWorkspaceDeployHandlingEvent'
    | 'ChangeWorkspacePrivacyEvent'
    | 'CreateBuildSourceEvent'
    | 'DeleteBuildSourceEvent'
    | 'UpdateBuildSourceEvent'
    | 'CreateCronJobEvent'
    | 'CreateEnvVarsEvent'
    | 'CreateEnvironmentEvent'
    | 'CreateOrgDomainEvent'
    | 'CreateOtelIntegrationEvent'
    | 'CreatePostgresEvent'
    | 'CreatePrivateLinkEvent'
    | 'CreateProjectEvent'
    | 'CreateRedisEvent'
    | 'CreateSSOConnectionEvent'
    | 'CreateSavedSearchEvent'
    | 'CreateServerDiskEvent'
    | 'CreateServerEvent'
    | 'CreateWebhookEvent'
    | 'CreateWorkspaceEvent'
    | 'DeleteCronJobEvent'
    | 'DeleteEnvGroupEvent'
    | 'DeleteEnvVarsEvent'
    | 'DeleteEnvironmentEvent'
    | 'DeleteOrgDomainEvent'
    | 'DeleteOtelIntegrationEvent'
    | 'DeletePostgresEvent'
    | 'DeletePrivateLinkEvent'
    | 'DeleteProjectEvent'
    | 'DeleteRedisEvent'
    | 'DeleteSSOConnectionEvent'
    | 'DeleteSavedSearchEvent'
    | 'DeleteServerDiskEvent'
    | 'DeleteServerEvent'
    | 'DeleteWebhookEvent'
    | 'DeleteWorkspaceEvent'
    | 'DocumentDownloadEvent'
    | 'DownloadDatabaseBackupEvent'
    | 'EnableRedisInternalAuthEvent'
    | 'InviteToOrgEvent'
    | 'InviteToTeamEvent'
    | 'JoinTeamEvent'
    | 'LinkBuildSourceEnvGroupEvent'
    | 'LoginEvent'
    | 'LogoutEvent'
    | 'MaintenanceModeEnabledEvent'
    | 'MaintenanceModeURIUpdatedEvent'
    | 'MoveEnvironmentResourceEvent'
    | 'ProvisionOrganizationSCIMToken'
    | 'RemoveOrgMemberEvent'
    | 'RemoveUserFromTeamEvent'
    | 'RestoreDiskSnapshotEvent'
    | 'ResumePostgresEvent'
    | 'ResumeServiceEvent'
    | 'RevokeOrganizationSCIMToken'
    | 'SignNDAEvent'
    | 'EndShellEvent'
    | 'StartShellEvent'
    | 'SuspendPostgresEvent'
    | 'SuspendServiceEvent'
    | 'UnlinkBuildSourceEnvGroupEvent'
    | 'UpdateEnvVarsEvent'
    | 'UpdateIPAllowListEvent'
    | 'UpdateOrgPaymentMethodEvent'
    | 'UpdateOtelIntegrationEvent'
    | 'UpdateSSOConnectionEvent'
    | 'UpdateServiceBuildSourceEvent'
    | 'UpdateServiceNameEvent'
    | 'UpdateWebhookEvent'
    | 'UpdateWorkspacePaymentMethodEvent'
    | 'VerifyOrgDomainEvent'
    | 'ViewConnectionInfoEvent'
    | 'ViewEnvVarValuesEvent'
    | 'GrantOAuthAccessEvent'
    | 'RevokeOAuthAccessEvent'
  status: 'success' | 'error'
  actor: AuditLogActor
  metadata: { [x: string]: string }
}
type AuditLogWithCursor = { cursor: Cursor; auditLog: AuditLog }
type NotificationOverrideWithCursor = {
  override: {
    serviceId: string
    previewNotificationsEnabled: 'default' | 'false' | 'true'
    notificationsToSend: 'default' | 'none' | 'failure' | 'all'
  }
  cursor: Cursor
}
type RegistryCredentialRegistry = 'GITHUB' | 'GITLAB' | 'DOCKER' | 'GOOGLE_ARTIFACT' | 'AWS_ECR'
type RegistryCredential = {
  id: string
  name: string
  registry: RegistryCredentialRegistry
  username: string
  updatedAt: string
}
type ServiceType =
  | 'static_site'
  | 'web_service'
  | 'private_service'
  | 'background_worker'
  | 'cron_job'
type ServiceRuntime = 'docker' | 'elixir' | 'go' | 'node' | 'python' | 'ruby' | 'rust' | 'image'
type AutoDeploy = 'yes' | 'no'
type BuildFilter = { paths: string[]; ignoredPaths: string[] }
type NotifySetting = 'default' | 'notify' | 'ignore'
type RegistryCredentialSummary = { id: string; name: string }
type SuspenderType =
  | 'admin'
  | 'billing'
  | 'user'
  | 'parent_service'
  | 'stuck_crashlooping'
  | 'hipaa_enablement'
  | 'unknown'
type Resource = { id: string; name: string }
type PullRequestPreviewsEnabled = 'yes' | 'no'
type Previews = { generation?: 'off' | 'manual' | 'automatic' | undefined }
type BuildPlan = 'starter' | 'performance'
type RenderSubdomainPolicy = 'enabled' | 'disabled'
type StaticSiteDetails = {
  buildCommand: string
  ipAllowList?: CidrBlockAndDescription[] | undefined
  parentServer?: Resource | undefined
  publishPath: string
  pullRequestPreviewsEnabled?: PullRequestPreviewsEnabled | undefined
  previews?: Previews | undefined
  url: string
  buildPlan: BuildPlan
  renderSubdomainPolicy?: RenderSubdomainPolicy | undefined
}
type Cache = { profile: 'no-cache' | 'origin-controlled' | 'origin-controlled-all' }
type ServiceEnv = 'docker' | 'elixir' | 'go' | 'node' | 'python' | 'ruby' | 'rust' | 'image'
type DockerDetails = {
  dockerCommand: string
  dockerContext: string
  dockerfilePath: string
  preDeployCommand?: string | undefined
  registryCredential?: RegistryCredential | undefined
}
type NativeEnvironmentDetails = {
  buildCommand: string
  startCommand: string
  preDeployCommand?: string | undefined
}
type EnvSpecificDetails = DockerDetails | NativeEnvironmentDetails
type MaintenanceMode = { enabled: boolean; uri: string }
type ServerPort = { port: number; protocol: 'TCP' | 'UDP' }
type Plan =
  | 'starter'
  | 'starter_plus'
  | 'standard'
  | 'standard_plus'
  | 'pro'
  | 'pro_plus'
  | 'pro_max'
  | 'pro_ultra'
  | 'free'
  | 'custom'
  | 'starter_legacy'
  | 'standard_legacy'
  | 'standard_plus_legacy'
  | 'pro_legacy'
  | 'pro_plus_legacy'
  | '0.5c-512mb'
  | '1c-2g'
  | '2c-4g'
  | '2c-8g'
  | '2c-16g'
  | '4c-8g'
  | '4c-16g'
  | '4c-32g'
  | '8c-16g'
  | '8c-32g'
  | '8c-64g'
  | '12c-24g'
  | '12c-48g'
  | '12c-96g'
type SshAddress = string
type MaxShutdownDelaySeconds = number
type WebServiceDetails = {
  autoscaling?:
    | {
        enabled: boolean
        min: number
        max: number
        criteria: {
          cpu: { enabled: boolean; percentage: number }
          memory: { enabled: boolean; percentage: number }
        }
      }
    | undefined
  cache?: Cache | undefined
  disk?: { id: string; name: string; sizeGB: number; mountPath: string } | undefined
  env: ServiceEnv
  envSpecificDetails: EnvSpecificDetails
  healthCheckPath: string
  ipAllowList?: CidrBlockAndDescription[] | undefined
  maintenanceMode?: MaintenanceMode | undefined
  numInstances: number
  openPorts: ServerPort[]
  parentServer?: Resource | undefined
  plan: Plan
  pullRequestPreviewsEnabled?: PullRequestPreviewsEnabled | undefined
  previews?: Previews | undefined
  region: Region
  runtime: ServiceRuntime
  sshAddress?: SshAddress | undefined
  url: string
  buildPlan: BuildPlan
  maxShutdownDelaySeconds?: MaxShutdownDelaySeconds | undefined
  renderSubdomainPolicy?: RenderSubdomainPolicy | undefined
}
type PrivateServiceDetails = {
  autoscaling?:
    | {
        enabled: boolean
        min: number
        max: number
        criteria: {
          cpu: { enabled: boolean; percentage: number }
          memory: { enabled: boolean; percentage: number }
        }
      }
    | undefined
  disk?: unknown | undefined
  env: ServiceEnv
  envSpecificDetails: EnvSpecificDetails
  numInstances: number
  openPorts: ServerPort[]
  parentServer?: Resource | undefined
  plan: Plan
  pullRequestPreviewsEnabled?: PullRequestPreviewsEnabled | undefined
  previews?: Previews | undefined
  region: Region
  runtime: ServiceRuntime
  sshAddress?: SshAddress | undefined
  url: string
  buildPlan: BuildPlan
  maxShutdownDelaySeconds?: MaxShutdownDelaySeconds | undefined
}
type BackgroundWorkerDetails = {
  autoscaling?:
    | {
        enabled: boolean
        min: number
        max: number
        criteria: {
          cpu: { enabled: boolean; percentage: number }
          memory: { enabled: boolean; percentage: number }
        }
      }
    | undefined
  disk?: unknown | undefined
  env: ServiceEnv
  envSpecificDetails: EnvSpecificDetails
  numInstances: number
  parentServer?: Resource | undefined
  plan: Plan
  pullRequestPreviewsEnabled?: PullRequestPreviewsEnabled | undefined
  previews?: Previews | undefined
  region: Region
  runtime: ServiceRuntime
  sshAddress?: SshAddress | undefined
  buildPlan: BuildPlan
  maxShutdownDelaySeconds?: MaxShutdownDelaySeconds | undefined
}
type CronJobDetails = {
  env: ServiceEnv
  envSpecificDetails: EnvSpecificDetails
  lastSuccessfulRunAt?: string | undefined
  plan: Plan
  region: Region
  runtime: ServiceRuntime
  schedule: string
  buildPlan: BuildPlan
}
type Service = {
  id: string
  buildSourceId?: string | undefined
  autoDeploy: AutoDeploy
  autoDeployTrigger?: unknown | undefined
  branch?: string | undefined
  buildFilter?: BuildFilter | undefined
  createdAt: string
  dashboardUrl: string
  environmentId?: string | undefined
  imagePath?: string | undefined
  name: string
  notifyOnFail: NotifySetting
  ownerId: string
  registryCredential?: RegistryCredentialSummary | undefined
  repo?: string | undefined
  rootDir: string
  slug: string
  suspended: 'suspended' | 'not_suspended'
  suspenders: SuspenderType[]
  type: ServiceType
  updatedAt: string
  serviceDetails:
    | StaticSiteDetails
    | WebServiceDetails
    | PrivateServiceDetails
    | BackgroundWorkerDetails
    | CronJobDetails
}
type ServiceWithCursor = { service: Service; cursor: Cursor }
type ServiceList = ServiceWithCursor[]
type Image = { ownerId: string; registryCredentialId?: string | undefined; imagePath: string }
type HeaderInput = { path: string; name: string; value: string }
type RouteType = 'redirect' | 'rewrite'
type RoutePost = {
  type: RouteType
  source: string
  destination: string
  priority?: number | undefined
}
type StaticSiteDetailsPOST = {
  buildCommand?: string | undefined
  headers?: HeaderInput[] | undefined
  publishPath?: string | undefined
  pullRequestPreviewsEnabled?: PullRequestPreviewsEnabled | undefined
  previews?: Previews | undefined
  routes?: RoutePost[] | undefined
  renderSubdomainPolicy?: RenderSubdomainPolicy | undefined
  ipAllowList?: CidrBlockAndDescription[] | undefined
}
type ServiceDisk = { name: string; mountPath: string; sizeGB?: number | undefined }
type DockerDetailsPOST = {
  dockerCommand?: string | undefined
  dockerContext?: string | undefined
  dockerfilePath?: string | undefined
  registryCredentialId?: string | undefined
}
type NativeEnvironmentDetailsPOST = { buildCommand: string; startCommand: string }
type EnvSpecificDetailsPOST = DockerDetailsPOST | NativeEnvironmentDetailsPOST
type WebServiceDetailsPOST = {
  buildSourceId?: string | undefined
  autoscaling?:
    | {
        enabled: boolean
        min: number
        max: number
        criteria: {
          cpu: { enabled: boolean; percentage: number }
          memory: { enabled: boolean; percentage: number }
        }
      }
    | undefined
  disk?: ServiceDisk | undefined
  env?: ServiceEnv | undefined
  runtime?: ServiceRuntime | undefined
  envSpecificDetails?: EnvSpecificDetailsPOST | undefined
  healthCheckPath?: string | undefined
  maintenanceMode?: MaintenanceMode | undefined
  numInstances?: number | undefined
  plan?: Plan | undefined
  preDeployCommand?: string | undefined
  pullRequestPreviewsEnabled?: PullRequestPreviewsEnabled | undefined
  previews?: Previews | undefined
  region?: Region | undefined
  maxShutdownDelaySeconds?: MaxShutdownDelaySeconds | undefined
  renderSubdomainPolicy?: RenderSubdomainPolicy | undefined
  ipAllowList?: CidrBlockAndDescription[] | undefined
}
type PaidPlan =
  | 'starter'
  | 'standard'
  | 'pro'
  | 'pro_plus'
  | 'pro_max'
  | 'pro_ultra'
  | '0.5c-512mb'
  | '1c-2g'
  | '2c-4g'
  | '2c-8g'
  | '2c-16g'
  | '4c-8g'
  | '4c-16g'
  | '4c-32g'
  | '8c-16g'
  | '8c-32g'
  | '8c-64g'
  | '12c-24g'
  | '12c-48g'
  | '12c-96g'
type PrivateServiceDetailsPOST = {
  buildSourceId?: string | undefined
  autoscaling?:
    | {
        enabled: boolean
        min: number
        max: number
        criteria: {
          cpu: { enabled: boolean; percentage: number }
          memory: { enabled: boolean; percentage: number }
        }
      }
    | undefined
  disk?: ServiceDisk | undefined
  env?: ServiceEnv | undefined
  runtime?: ServiceRuntime | undefined
  envSpecificDetails?: EnvSpecificDetailsPOST | undefined
  numInstances?: number | undefined
  plan?: PaidPlan | undefined
  preDeployCommand?: string | undefined
  pullRequestPreviewsEnabled?: PullRequestPreviewsEnabled | undefined
  previews?: Previews | undefined
  region?: Region | undefined
  maxShutdownDelaySeconds?: MaxShutdownDelaySeconds | undefined
}
type BackgroundWorkerDetailsPOST = {
  buildSourceId?: string | undefined
  autoscaling?:
    | {
        enabled: boolean
        min: number
        max: number
        criteria: {
          cpu: { enabled: boolean; percentage: number }
          memory: { enabled: boolean; percentage: number }
        }
      }
    | undefined
  disk?: ServiceDisk | undefined
  env?: ServiceEnv | undefined
  runtime?: ServiceRuntime | undefined
  envSpecificDetails?: EnvSpecificDetailsPOST | undefined
  numInstances?: number | undefined
  plan?: PaidPlan | undefined
  preDeployCommand?: string | undefined
  pullRequestPreviewsEnabled?: PullRequestPreviewsEnabled | undefined
  previews?: Previews | undefined
  region?: Region | undefined
  maxShutdownDelaySeconds?: MaxShutdownDelaySeconds | undefined
}
type CronJobDetailsPOST = {
  buildSourceId?: string | undefined
  env?: ServiceEnv | undefined
  runtime?: ServiceRuntime | undefined
  envSpecificDetails?: EnvSpecificDetails | undefined
  plan?: PaidPlan | undefined
  region?: Region | undefined
  schedule: string
}
type ServicePOST = {
  type: ServiceType
  name: string
  ownerId: string
  repo?: string | undefined
  autoDeploy?: AutoDeploy | undefined
  autoDeployTrigger?: 'commit' | 'off' | 'checksPass' | undefined
  branch?: string | undefined
  image?: Image | undefined
  buildFilter?: BuildFilter | undefined
  rootDir?: string | undefined
  envVars?: ({ key: string; value: string } | { key: string; generateValue: boolean })[] | undefined
  secretFiles?: { name: string; content: string }[] | undefined
  environmentId?: string | undefined
  serviceDetails?:
    | StaticSiteDetailsPOST
    | WebServiceDetailsPOST
    | PrivateServiceDetailsPOST
    | BackgroundWorkerDetailsPOST
    | CronJobDetailsPOST
    | undefined
}
type ServiceAndDeploy = { service?: Service | undefined; deployId?: string | undefined }
type StaticSiteDetailsPATCH = {
  buildCommand?: string | undefined
  publishPath?: string | undefined
  pullRequestPreviewsEnabled?: PullRequestPreviewsEnabled | undefined
  previews?: Previews | undefined
  renderSubdomainPolicy?: RenderSubdomainPolicy | undefined
  ipAllowList?: CidrBlockAndDescription[] | undefined
}
type DockerDetailsPATCH = {
  dockerCommand?: string | undefined
  dockerContext?: string | undefined
  dockerfilePath?: string | undefined
  registryCredentialId?: string | undefined
}
type NativeEnvironmentDetailsPATCH = {
  buildCommand?: string | undefined
  startCommand?: string | undefined
}
type EnvSpecificDetailsPATCH = DockerDetailsPATCH | NativeEnvironmentDetailsPATCH
type WebServiceDetailsPATCH = {
  envSpecificDetails?: EnvSpecificDetailsPATCH | undefined
  healthCheckPath?: string | undefined
  maintenanceMode?: MaintenanceMode | undefined
  plan?: Plan | undefined
  preDeployCommand?: string | undefined
  pullRequestPreviewsEnabled?: PullRequestPreviewsEnabled | undefined
  previews?: Previews | undefined
  runtime?: ServiceRuntime | undefined
  maxShutdownDelaySeconds?: MaxShutdownDelaySeconds | undefined
  renderSubdomainPolicy?: RenderSubdomainPolicy | undefined
  ipAllowList?: CidrBlockAndDescription[] | undefined
  cache?: Cache | undefined
}
type PrivateServiceDetailsPATCH = {
  envSpecificDetails?: EnvSpecificDetailsPATCH | undefined
  plan?: PaidPlan | undefined
  preDeployCommand?: string | undefined
  pullRequestPreviewsEnabled?: PullRequestPreviewsEnabled | undefined
  previews?: Previews | undefined
  runtime?: ServiceRuntime | undefined
  maxShutdownDelaySeconds?: MaxShutdownDelaySeconds | undefined
}
type BackgroundWorkerDetailsPATCH = {
  envSpecificDetails?: EnvSpecificDetailsPATCH | undefined
  plan?: PaidPlan | undefined
  preDeployCommand?: string | undefined
  pullRequestPreviewsEnabled?: PullRequestPreviewsEnabled | undefined
  previews?: Previews | undefined
  runtime?: ServiceRuntime | undefined
  maxShutdownDelaySeconds?: MaxShutdownDelaySeconds | undefined
}
type CronJobDetailsPATCH = {
  envSpecificDetails?: EnvSpecificDetailsPATCH | undefined
  plan?: PaidPlan | undefined
  schedule?: string | undefined
  runtime?: ServiceRuntime | undefined
}
type ServicePATCH = {
  buildSourceId?: string | undefined
  autoDeploy?: AutoDeploy | undefined
  autoDeployTrigger?: unknown | undefined
  repo?: string | undefined
  branch?: string | undefined
  image?: Image | undefined
  name?: string | undefined
  buildFilter?: BuildFilter | undefined
  rootDir?: string | undefined
  serviceDetails?:
    | StaticSiteDetailsPATCH
    | WebServiceDetailsPATCH
    | PrivateServiceDetailsPATCH
    | BackgroundWorkerDetailsPATCH
    | CronJobDetailsPATCH
    | undefined
}
type DeployStatus =
  | 'created'
  | 'queued'
  | 'build_in_progress'
  | 'update_in_progress'
  | 'live'
  | 'deactivated'
  | 'build_failed'
  | 'update_failed'
  | 'canceled'
  | 'pre_deploy_in_progress'
  | 'pre_deploy_failed'
type Deploy = {
  id: string
  buildId?: string | undefined
  commit?:
    | { id?: string | undefined; message?: string | undefined; createdAt?: string | undefined }
    | undefined
  image?:
    | {
        ref?: string | undefined
        sha?: string | undefined
        registryCredential?: string | undefined
      }
    | undefined
  status?: DeployStatus | undefined
  trigger?:
    | 'api'
    | 'blueprint_sync'
    | 'deploy_hook'
    | 'deployed_by_render'
    | 'manual'
    | 'other'
    | 'new_commit'
    | 'rollback'
    | 'service_resumed'
    | 'service_updated'
    | undefined
  startedAt?: string | undefined
  finishedAt?: string | undefined
  createdAt?: string | undefined
  updatedAt?: string | undefined
}
type DeployWithCursor = { deploy?: Deploy | undefined; cursor?: Cursor | undefined }
type DeployList = DeployWithCursor[]
type DeployMode = 'deploy_only' | 'build_and_deploy'
type EnvVar = { key: string; value: string }
type EnvVarWithCursor = { envVar: EnvVar; cursor: Cursor }
type EnvVarValue = { value: string }
type EnvVarGenerateValue = { generateValue: boolean }
type AddUpdateEnvVarInput = EnvVarValue | EnvVarGenerateValue
type SecretFile = { name: string; content: string }
type SecretFileWithCursor = { secretFile: SecretFile; cursor: Cursor }
type ServiceEventWithCursor = {
  event: {
    id: string
    timestamp: string
    serviceId: string
    type:
      | 'artifact_fetch_failed'
      | 'artifact_source_changed'
      | 'autoscaling_config_changed'
      | 'autoscaling_ended'
      | 'autoscaling_started'
      | 'branch_deleted'
      | 'build_ended'
      | 'build_started'
      | 'commit_ignored'
      | 'cron_job_run_ended'
      | 'cron_job_run_started'
      | 'deploy_ended'
      | 'deploy_started'
      | 'disk_created'
      | 'disk_updated'
      | 'disk_deleted'
      | 'disk_snapshot_restored'
      | 'service_disk_usage_high'
      | 'service_disk_usage_recovered'
      | 'image_pull_failed'
      | 'initial_deploy_hook_ended'
      | 'initial_deploy_hook_started'
      | 'instance_count_changed'
      | 'job_run_ended'
      | 'maintenance_mode_enabled'
      | 'maintenance_mode_uri_updated'
      | 'maintenance_ended'
      | 'maintenance_started'
      | 'pipeline_minutes_exhausted'
      | 'plan_changed'
      | 'pre_deploy_ended'
      | 'pre_deploy_started'
      | 'server_available'
      | 'server_failed'
      | 'server_hardware_failure'
      | 'server_restarted'
      | 'service_resumed'
      | 'service_suspended'
      | 'suspender_added'
      | 'suspender_removed'
      | 'zero_downtime_redeploy_ended'
      | 'zero_downtime_redeploy_started'
      | 'auto_deploy_disabled'
      | 'auto_deploy_enabled'
    details:
      | { buildId: string; message: string }
      | { fromBuildSourceId?: string | undefined; toBuildSourceId?: string | undefined }
      | {
          fromConfig?:
            | {
                enabled: boolean
                min: number
                max: number
                criteria: {
                  cpu: { enabled: boolean; percentage: number }
                  memory: { enabled: boolean; percentage: number }
                }
              }
            | undefined
          toConfig: {
            enabled: boolean
            min: number
            max: number
            criteria: {
              cpu: { enabled: boolean; percentage: number }
              memory: { enabled: boolean; percentage: number }
            }
          }
        }
      | { fromInstances: number; toInstances: number }
      | {
          fromInstances: number
          toInstances: number
          currentCPU?: number | undefined
          targetCPU?: number | undefined
          currentMemory?: number | undefined
          targetMemory?: number | undefined
        }
      | { deletedBranch: string; newBranch: string }
      | {
          buildId: string
          buildStatus: 'succeeded' | 'failed' | 'canceled'
          reason: {
            buildFailed?: { id: string } | undefined
            newBuild?: { id: string } | undefined
            newDeploy?: { id: string } | undefined
            failure?:
              | {
                  evicted: boolean
                  evictionReason?: string | undefined
                  nonZeroExit?: number | undefined
                  earlyExit?: boolean | undefined
                  oomKilled?: { memoryLimit: string } | undefined
                  timedOutSeconds?: bigint | undefined
                  unhealthy?: string | undefined
                  timedOutReason?: string | undefined
                }
              | undefined
          }
          status: number
        }
      | {
          buildId: string
          trigger: {
            firstBuild: boolean
            envUpdated: boolean
            manual: boolean
            user?: { id: string; email: string } | undefined
            updatedProperty?: string | undefined
            newCommit?: string | undefined
            deployedByRender: boolean
            clearCache: boolean
            rollback: boolean
            rollbackTargetDeployId?: string | undefined
          }
        }
      | { id: string; url: string }
      | {
          cronJobRunId: string
          status: 'canceled' | 'pending' | 'successful' | 'unsuccessful'
          reason?:
            | {
                evicted: boolean
                evictionReason?: string | undefined
                nonZeroExit?: number | undefined
                earlyExit?: boolean | undefined
                oomKilled?: { memoryLimit: string } | undefined
                timedOutSeconds?: bigint | undefined
                unhealthy?: string | undefined
                timedOutReason?: string | undefined
              }
            | undefined
          user?: { id: string; email: string } | undefined
        }
      | { cronJobRunId: string }
      | {
          deployId: string
          reason: {
            buildFailed?: { id: string } | undefined
            newBuild?: { id: string } | undefined
            newDeploy?: { id: string } | undefined
            failure?:
              | {
                  evicted: boolean
                  evictionReason?: string | undefined
                  nonZeroExit?: number | undefined
                  earlyExit?: boolean | undefined
                  oomKilled?: { memoryLimit: string } | undefined
                  timedOutSeconds?: bigint | undefined
                  unhealthy?: string | undefined
                  timedOutReason?: string | undefined
                }
              | undefined
          }
          deployStatus: 'succeeded' | 'failed' | 'canceled'
          status: number
          buildId?: string | undefined
        }
      | {
          deployId: string
          trigger: {
            firstBuild: boolean
            envUpdated: boolean
            manual: boolean
            user?: { id: string; email: string } | undefined
            updatedProperty?: string | undefined
            newCommit?: string | undefined
            deployedByRender: boolean
            clearCache: boolean
            rollback: boolean
            rollbackTargetDeployId?: string | undefined
          }
          buildId?: string | undefined
        }
      | { diskId: string; sizeGB: number }
      | { diskId: string; fromSizeGB: number; toSizeGB: number }
      | { diskId: string }
      | {
          diskId: string
          instanceId?: string | undefined
          snapshotCreatedAt?: string | undefined
          triggeredByUser: string | null
        }
      | {
          diskId: string
          diskName: string
          mountPath: string
          usagePercent: number
          thresholdPercent: number
        }
      | {
          diskId: string
          diskName: string
          mountPath: string
          usagePercent: number
          thresholdPercent: number
        }
      | { message: string; imageURL: string }
      | { deployId: string }
      | { deployId: string }
      | { fromInstances: number; toInstances: number }
      | {
          jobId: string
          status: 'pending' | 'running' | 'succeeded' | 'failed' | 'canceled'
          reason?:
            | {
                evicted: boolean
                evictionReason?: string | undefined
                nonZeroExit?: number | undefined
                earlyExit?: boolean | undefined
                oomKilled?: { memoryLimit: string } | undefined
                timedOutSeconds?: bigint | undefined
                unhealthy?: string | undefined
                timedOutReason?: string | undefined
              }
            | undefined
        }
      | { enabled: boolean }
      | { fromURI: string; toURI: string }
      | { [x: string]: unknown }
      | {
          trigger: {
            user?: { id: string; email: string } | undefined
            manual: boolean
            startedByRender: boolean
          }
        }
      | {
          buildId: string
          trigger: {
            firstBuild: boolean
            envUpdated: boolean
            manual: boolean
            user?: { id: string; email: string } | undefined
            updatedProperty?: string | undefined
            newCommit?: string | undefined
            deployedByRender: boolean
            clearCache: boolean
            rollback: boolean
            rollbackTargetDeployId?: string | undefined
          }
        }
      | { from: string; to: string }
      | {
          deployCommandExecutionId: string
          deployId: string
          preDeployStatus: 'succeeded' | 'failed' | 'canceled'
          reason: {
            buildFailed?: { id: string } | undefined
            newBuild?: { id: string } | undefined
            newDeploy?: { id: string } | undefined
            failure?:
              | {
                  evicted: boolean
                  evictionReason?: string | undefined
                  nonZeroExit?: number | undefined
                  earlyExit?: boolean | undefined
                  oomKilled?: { memoryLimit: string } | undefined
                  timedOutSeconds?: bigint | undefined
                  unhealthy?: string | undefined
                  timedOutReason?: string | undefined
                }
              | undefined
          }
          status: number
        }
      | { deployCommandExecutionId: string; deployId: string }
      | { [x: string]: unknown }
      | {
          instanceID?: string | undefined
          reason?:
            | {
                evicted: boolean
                evictionReason?: string | undefined
                nonZeroExit?: number | undefined
                earlyExit?: boolean | undefined
                oomKilled?: { memoryLimit: string } | undefined
                timedOutSeconds?: bigint | undefined
                unhealthy?: string | undefined
                timedOutReason?: string | undefined
              }
            | undefined
        }
      | { [x: string]: unknown }
      | { triggeredByUser: string | null }
      | { [x: string]: unknown }
      | { [x: string]: unknown }
      | { actor: string; suspendedByUser?: { id: string; email: string } | undefined }
      | { actor: string; resumedByUser?: { id: string; email: string } | undefined }
      | { [x: string]: unknown }
      | { trigger: string }
      | {
          trigger: {
            manual: boolean
            user?: { id: string; email: string } | undefined
            system: boolean
          }
        }
      | {
          trigger: {
            manual: boolean
            user?: { id: string; email: string } | undefined
            system: boolean
          }
        }
      | {
          trigger: {
            manual: boolean
            user?: { id: string; email: string } | undefined
            system: boolean
          }
        }
      | { reason: string; fromTrigger?: unknown | undefined }
      | { newTrigger?: unknown | undefined }
  }
  cursor: Cursor
}
type Header = { id: string; path: string; name: string; value: string }
type HeaderWithCursor = { header: Header; cursor: string }
type Route = { id: string; type: RouteType; source: string; destination: string; priority: number }
type RouteWithCursor = { route: Route; cursor: string }
type RoutePut = { type: RouteType; source: string; destination: string }
type RoutePatch = { priority: number }
type CustomDomain = {
  id: string
  name: string
  domainType: 'apex' | 'subdomain'
  publicSuffix: string
  redirectForName: string
  verificationStatus: 'verified' | 'unverified'
  createdAt: string
  server?: { id?: string | undefined; name?: string | undefined } | undefined
}
type CustomDomainWithCursor = { customDomain: CustomDomain; cursor: Cursor }
type PreviewInput = { imagePath: string; name?: string | undefined; plan?: Plan | undefined }
type JobWithCursor = {
  job: {
    id: string
    serviceId: string
    startCommand: string
    planId: string
    status?: 'pending' | 'running' | 'succeeded' | 'failed' | 'canceled' | undefined
    createdAt: string
    startedAt?: string | undefined
    finishedAt?: string | undefined
  }
  cursor: Cursor
}
type ServiceInstance = { id: string; createdAt: string }
type OutboundIps = {
  type: 'shared' | 'dedicated'
  dedicatedIpId?: string | undefined
  ips: string[]
}
type CronJobRun = {
  id: string
  status: 'pending' | 'successful' | 'unsuccessful' | 'canceled'
  startedAt?: string | undefined
  finishedAt?: string | undefined
  triggeredBy?: string | undefined
  canceledBy?: string | undefined
}
type DatabaseStatus =
  | 'creating'
  | 'available'
  | 'unavailable'
  | 'config_restart'
  | 'suspended'
  | 'maintenance_scheduled'
  | 'maintenance_in_progress'
  | 'recovery_failed'
  | 'recovery_in_progress'
  | 'unknown'
  | 'updating_instance'
type KeyValuePlan =
  | 'free'
  | 'starter'
  | 'standard'
  | 'pro'
  | 'pro_plus'
  | 'custom'
  | '256mb'
  | '1g'
  | '5g'
  | '10g'
  | '20g'
  | '40g'
type PersistenceMode = 'journal_snapshot' | 'snapshot' | 'off'
type KeyValueOptions = {
  maxmemoryPolicy?: string | undefined
  persistenceMode?: PersistenceMode | undefined
}
type KeyValue = {
  id: string
  createdAt: string
  updatedAt: string
  status: DatabaseStatus
  region: Region
  plan: KeyValuePlan
  name: string
  owner: Owner
  options: KeyValueOptions
  ipAllowList: CidrBlockAndDescription[]
  environmentId?: string | undefined
  version: string
  dashboardUrl: string
}
type KeyValueWithCursor = { keyValue: KeyValue; cursor: Cursor }
type MaxmemoryPolicy =
  | 'noeviction'
  | 'allkeys_lfu'
  | 'allkeys_lru'
  | 'allkeys_random'
  | 'volatile_lfu'
  | 'volatile_lru'
  | 'volatile_random'
  | 'volatile_ttl'
type KeyValuePOSTInput = {
  name: string
  ownerId: string
  plan: KeyValuePlan
  region?: Region | undefined
  environmentId?: string | undefined
  maxmemoryPolicy?: MaxmemoryPolicy | undefined
  persistenceMode?: PersistenceMode | undefined
  ipAllowList?: CidrBlockAndDescription[] | undefined
}
type KeyValueDetail = {
  id: string
  createdAt: string
  updatedAt: string
  status: DatabaseStatus
  region: Region
  plan: KeyValuePlan
  name: string
  owner: Owner
  options: KeyValueOptions
  ipAllowList: CidrBlockAndDescription[]
  environmentId?: string | undefined
  version: string
  maintenance?: unknown | undefined
}
type KeyValuePATCHInput = {
  name?: string | undefined
  plan?: KeyValuePlan | undefined
  maxmemoryPolicy?: MaxmemoryPolicy | undefined
  persistenceMode?: PersistenceMode | undefined
  ipAllowList?: CidrBlockAndDescription[] | undefined
}
type KeyValueConnectionInfo = {
  internalConnectionString: string
  externalConnectionString: string
  cliCommand: string
}
type RedisPlan =
  | 'free'
  | 'starter'
  | 'standard'
  | 'pro'
  | 'pro_plus'
  | 'custom'
  | '256mb'
  | '1g'
  | '5g'
  | '10g'
  | '20g'
  | '40g'
type RedisOptions = {
  maxmemoryPolicy?: string | undefined
  persistenceMode?: PersistenceMode | undefined
}
type Redis = {
  id: string
  createdAt: string
  updatedAt: string
  status: DatabaseStatus
  region: Region
  plan: RedisPlan
  name: string
  owner: Owner
  options: RedisOptions
  ipAllowList: CidrBlockAndDescription[]
  environmentId?: string | undefined
  version: string
  dashboardUrl: string
}
type RedisWithCursor = { redis: Redis; cursor: Cursor }
type RedisPOSTInput = {
  name: string
  ownerId: string
  plan: RedisPlan
  region?: Region | undefined
  environmentId?: string | undefined
  maxmemoryPolicy?: MaxmemoryPolicy | undefined
  persistenceMode?: PersistenceMode | undefined
  ipAllowList?: CidrBlockAndDescription[] | undefined
}
type RedisDetail = {
  id: string
  createdAt: string
  updatedAt: string
  status: DatabaseStatus
  region: Region
  plan: RedisPlan
  name: string
  owner: Owner
  options: RedisOptions
  ipAllowList: CidrBlockAndDescription[]
  environmentId?: string | undefined
  version: string
  maintenance?:
    | {
        id: string
        type: string
        scheduledAt: string
        pendingMaintenanceBy?: string | undefined
        state:
          | 'scheduled'
          | 'in_progress'
          | 'user_fix_required'
          | 'cancelled'
          | 'succeeded'
          | 'failed'
      }
    | undefined
}
type RedisPATCHInput = {
  name?: string | undefined
  plan?: RedisPlan | undefined
  maxmemoryPolicy?: MaxmemoryPolicy | undefined
  persistenceMode?: PersistenceMode | undefined
  ipAllowList?: CidrBlockAndDescription[] | undefined
}
type RedisConnectionInfo = {
  internalConnectionString: string
  externalConnectionString: string
  redisCLICommand: string
}
type ReadReplica = { id: string; name: string }
type ReadReplicas = ReadReplica[]
type DatabaseRole = 'primary' | 'replica'
type PostgresVersion = '11' | '12' | '13' | '14' | '15' | '16' | '17' | '18'
type Postgres = {
  id: string
  ipAllowList: CidrBlockAndDescription[]
  createdAt: string
  updatedAt: string
  expiresAt?: string | undefined
  databaseName: string
  databaseUser: string
  environmentId?: string | undefined
  highAvailabilityEnabled: boolean
  name: string
  owner: Owner
  plan: Plan
  diskSizeGB?: number | undefined
  primaryPostgresID?: string | undefined
  region: Region
  readReplicas: ReadReplicas
  role: DatabaseRole
  status: DatabaseStatus
  version: PostgresVersion
  suspended: 'suspended' | 'not_suspended'
  suspenders: SuspenderType[]
  dashboardUrl: string
  diskAutoscalingEnabled: boolean
  connectionPool: string
}
type PostgresWithCursor = { postgres: Postgres; cursor: Cursor }
type ReadReplicaInput = { name: string }
type ReadReplicasInput = ReadReplicaInput[]
type PostgresPOSTInput = {
  databaseName?: string | undefined
  databaseUser?: string | undefined
  datadogAPIKey?: string | undefined
  datadogSite?: string | undefined
  name: string
  enableHighAvailability?: boolean | undefined
  environmentId?: string | undefined
  ownerId: string
  plan:
    | 'free'
    | 'starter'
    | 'standard'
    | 'pro'
    | 'pro_plus'
    | 'custom'
    | 'basic_256mb'
    | 'basic_1gb'
    | 'basic_4gb'
    | 'pro_4gb'
    | 'pro_8gb'
    | 'pro_16gb'
    | 'pro_32gb'
    | 'pro_64gb'
    | 'pro_128gb'
    | 'pro_192gb'
    | 'pro_256gb'
    | 'pro_384gb'
    | 'pro_512gb'
    | 'accelerated_16gb'
    | 'accelerated_32gb'
    | 'accelerated_64gb'
    | 'accelerated_128gb'
    | 'accelerated_256gb'
    | 'accelerated_384gb'
    | 'accelerated_512gb'
    | 'accelerated_768gb'
    | 'accelerated_1024gb'
    | '0.1c-256mb'
    | '0.5c-1g'
    | '1c-2g'
    | '1c-4g'
    | '2c-4g'
    | '2c-8g'
    | '2c-16g'
    | '4c-16g'
    | '4c-32g'
    | '8c-32g'
    | '8c-64g'
    | '16c-64g'
    | '16c-128g'
    | '32c-128g'
    | '32c-256g'
    | '48c-192g'
    | '48c-384g'
    | '64c-256g'
    | '64c-512g'
    | '96c-384g'
    | '96c-768g'
    | '128c-512g'
    | '128c-1024g'
  diskSizeGB?: number | undefined
  enableDiskAutoscaling?: boolean | undefined
  connectionPool?: string | undefined
  region?: Region | undefined
  ipAllowList?: CidrBlockAndDescription[] | undefined
  readReplicas?: ReadReplicasInput | undefined
  version: PostgresVersion
}
type PostgresDetail = {
  id: string
  ipAllowList: CidrBlockAndDescription[]
  createdAt: string
  updatedAt: string
  expiresAt?: string | undefined
  dashboardUrl: string
  databaseName: string
  databaseUser: string
  environmentId?: string | undefined
  highAvailabilityEnabled: boolean
  maintenance?: unknown | undefined
  name: string
  owner: Owner
  plan: Plan
  diskSizeGB?: number | undefined
  primaryPostgresID?: string | undefined
  region: Region
  readReplicas: ReadReplicas
  role: DatabaseRole
  status: DatabaseStatus
  version: PostgresVersion
  suspended: 'suspended' | 'not_suspended'
  suspenders: SuspenderType[]
  diskAutoscalingEnabled: boolean
  connectionPool: string
}
type PostgresPATCHInput = {
  name?: string | undefined
  plan?: Plan | undefined
  diskSizeGB?: number | undefined
  enableDiskAutoscaling?: boolean | undefined
  connectionPool?: string | undefined
  enableHighAvailability?: boolean | undefined
  datadogAPIKey?: string | undefined
  datadogSite?: string | undefined
  ipAllowList?: CidrBlockAndDescription[] | undefined
  readReplicas?: ReadReplicasInput | undefined
}
type PostgresConnectionInfo = {
  password: string
  internalConnectionString: string
  externalConnectionString: string
  internalConnectionPoolString?: string | undefined
  externalConnectionPoolString?: string | undefined
  psqlCommand: string
}
type Project = {
  id: string
  createdAt: string
  updatedAt: string
  name: string
  owner: Owner
  environmentIds: string[]
}
type ProjectWithCursor = { project: Project; cursor: Cursor }
type ProtectedStatus = 'unprotected' | 'protected'
type NetworkIsolationEnabled = boolean
type ProjectPOSTEnvironmentInput = {
  name: string
  protectedStatus?: ProtectedStatus | undefined
  networkIsolationEnabled?: NetworkIsolationEnabled | undefined
  ipAllowList?: CidrBlockAndDescription[] | undefined
}
type ProjectPOSTInput = {
  name: string
  ownerId: string
  environments: ProjectPOSTEnvironmentInput[]
}
type ProjectPATCHInput = { name?: string | undefined }
type EnvironmentPOSTInput = {
  name: string
  projectId: string
  protectedStatus?: ProtectedStatus | undefined
  networkIsolationEnabled?: NetworkIsolationEnabled | undefined
  ipAllowList?: CidrBlockAndDescription[] | undefined
}
type Environment = {
  id: string
  name: string
  projectId: string
  databasesIds: string[]
  ipAllowList?: CidrBlockAndDescription[] | undefined
  redisIds: string[]
  serviceIds: string[]
  envGroupIds: string[]
  protectedStatus: ProtectedStatus
  networkIsolationEnabled: NetworkIsolationEnabled
}
type EnvironmentWithCursor = { environment: Environment; cursor: Cursor }
type EnvironmentPATCHInput = {
  name?: string | undefined
  networkIsolationEnabled?: NetworkIsolationEnabled | undefined
  protectedStatus?: ProtectedStatus | undefined
  ipAllowList?: CidrBlockAndDescription[] | undefined
}
type EnvironmentResourcesPOSTInput = { resourceIds: string[] }
type ServiceTypeShort = 'static' | 'web' | 'pserv' | 'worker' | 'cron'
type EnvGroupLink = { id: string; name: string; type: ServiceTypeShort }
type EnvGroupMeta = {
  id: string
  name: string
  ownerId: string
  createdAt: string
  updatedAt: string
  serviceLinks: EnvGroupLink[]
  environmentId?: string | undefined
}
type EnvGroupPOSTInput = {
  name: string
  ownerId: string
  envVars: ({ key: string; value: string } | { key: string; generateValue: boolean })[]
  secretFiles?: { name: string; content: string }[] | undefined
  serviceIds?: string[] | undefined
  environmentId?: string | undefined
}
type EnvGroup = {
  id: string
  name: string
  ownerId: string
  createdAt: string
  updatedAt: string
  serviceLinks: EnvGroupLink[]
  environmentId?: string | undefined
  envVars?: EnvVar[] | undefined
  secretFiles?: SecretFile[] | undefined
}
type EnvGroupPATCHInput = { name: string }
type WebhookWithCursor = {
  webhook: {
    id: string
    url: string
    name: string
    secret: string
    enabled: boolean
    eventFilter: (
      | 'artifact_fetch_failed'
      | 'artifact_source_changed'
      | 'autoscaling_config_changed'
      | 'autoscaling_ended'
      | 'autoscaling_started'
      | 'branch_deleted'
      | 'build_ended'
      | 'build_started'
      | 'commit_ignored'
      | 'cron_job_run_ended'
      | 'cron_job_run_started'
      | 'deploy_ended'
      | 'deploy_started'
      | 'disk_created'
      | 'disk_updated'
      | 'disk_deleted'
      | 'disk_snapshot_restored'
      | 'image_pull_failed'
      | 'instance_count_changed'
      | 'job_run_ended'
      | 'maintenance_mode_enabled'
      | 'maintenance_mode_uri_updated'
      | 'maintenance_ended'
      | 'maintenance_started'
      | 'pipeline_minutes_exhausted'
      | 'plan_changed'
      | 'pre_deploy_ended'
      | 'pre_deploy_started'
      | 'server_available'
      | 'server_failed'
      | 'server_hardware_failure'
      | 'server_restarted'
      | 'service_resumed'
      | 'service_suspended'
      | 'zero_downtime_redeploy_ended'
      | 'zero_downtime_redeploy_started'
      | 'edge_cache_enabled'
      | 'edge_cache_disabled'
      | 'edge_cache_purged'
      | 'auto_deploy_disabled'
      | 'auto_deploy_enabled'
      | 'postgres_available'
      | 'postgres_backup_completed'
      | 'postgres_backup_failed'
      | 'postgres_backup_started'
      | 'postgres_cluster_leader_changed'
      | 'postgres_connection_pool_changed'
      | 'postgres_connection_pool_enabled_changed'
      | 'postgres_created'
      | 'postgres_disk_size_changed'
      | 'postgres_disk_autoscaling_enabled_changed'
      | 'postgres_ha_status_changed'
      | 'postgres_restarted'
      | 'postgres_unavailable'
      | 'postgres_upgrade_failed'
      | 'postgres_upgrade_started'
      | 'postgres_upgrade_succeeded'
      | 'postgres_restore_failed'
      | 'postgres_restore_succeeded'
      | 'postgres_read_replicas_changed'
      | 'postgres_pitr_checkpoint_started'
      | 'postgres_pitr_checkpoint_failed'
      | 'postgres_pitr_checkpoint_completed'
      | 'postgres_read_replica_stale'
      | 'postgres_wal_archive_failed'
      | 'key_value_available'
      | 'key_value_config_restart'
      | 'key_value_unhealthy'
    )[]
  }
  cursor: Cursor
}
type WebhookEventWithCursor = {
  webhookEvent: {
    id: string
    eventId: string
    eventType:
      | 'artifact_fetch_failed'
      | 'artifact_source_changed'
      | 'autoscaling_config_changed'
      | 'autoscaling_ended'
      | 'autoscaling_started'
      | 'branch_deleted'
      | 'build_ended'
      | 'build_started'
      | 'commit_ignored'
      | 'cron_job_run_ended'
      | 'cron_job_run_started'
      | 'deploy_ended'
      | 'deploy_started'
      | 'disk_created'
      | 'disk_updated'
      | 'disk_deleted'
      | 'disk_snapshot_restored'
      | 'image_pull_failed'
      | 'instance_count_changed'
      | 'job_run_ended'
      | 'maintenance_mode_enabled'
      | 'maintenance_mode_uri_updated'
      | 'maintenance_ended'
      | 'maintenance_started'
      | 'pipeline_minutes_exhausted'
      | 'plan_changed'
      | 'pre_deploy_ended'
      | 'pre_deploy_started'
      | 'server_available'
      | 'server_failed'
      | 'server_hardware_failure'
      | 'server_restarted'
      | 'service_resumed'
      | 'service_suspended'
      | 'zero_downtime_redeploy_ended'
      | 'zero_downtime_redeploy_started'
      | 'edge_cache_enabled'
      | 'edge_cache_disabled'
      | 'edge_cache_purged'
      | 'auto_deploy_disabled'
      | 'auto_deploy_enabled'
      | 'postgres_available'
      | 'postgres_backup_completed'
      | 'postgres_backup_failed'
      | 'postgres_backup_started'
      | 'postgres_cluster_leader_changed'
      | 'postgres_connection_pool_changed'
      | 'postgres_connection_pool_enabled_changed'
      | 'postgres_created'
      | 'postgres_disk_size_changed'
      | 'postgres_disk_autoscaling_enabled_changed'
      | 'postgres_ha_status_changed'
      | 'postgres_restarted'
      | 'postgres_unavailable'
      | 'postgres_upgrade_failed'
      | 'postgres_upgrade_started'
      | 'postgres_upgrade_succeeded'
      | 'postgres_restore_failed'
      | 'postgres_restore_succeeded'
      | 'postgres_read_replicas_changed'
      | 'postgres_pitr_checkpoint_started'
      | 'postgres_pitr_checkpoint_failed'
      | 'postgres_pitr_checkpoint_completed'
      | 'postgres_read_replica_stale'
      | 'postgres_wal_archive_failed'
      | 'key_value_available'
      | 'key_value_config_restart'
      | 'key_value_unhealthy'
    sentAt: string
    statusCode?: number | undefined
    responseBody?: string | undefined
    error?: string | undefined
  }
  cursor: Cursor
}
type WorkflowWithCursor = {
  workflow: {
    id: string
    name: string
    ownerId: string
    createdAt: string
    updatedAt: string
    buildConfig: {
      branch?: string | undefined
      buildCommand: string
      repo: string
      rootDir?: string | undefined
      runtime: 'elixir' | 'go' | 'node' | 'python' | 'ruby'
    }
    runCommand: string
    region: 'frankfurt' | 'oregon' | 'ohio' | 'singapore' | 'virginia'
    environmentId?: string | undefined
    slug?: string | undefined
    autoDeployTrigger?: 'commit' | 'off' | 'checksPass' | undefined
    defaultVersionId?: string | undefined
  }
  cursor: Cursor
}
type WorkflowVersionWithCursor = {
  workflowVersion: {
    id: string
    workflowId: string
    name: string
    createdAt: string
    status:
      | 'created'
      | 'building'
      | 'registering'
      | 'build_failed'
      | 'registration_failed'
      | 'ready'
  }
  cursor: Cursor
}
type TaskWithCursor = {
  task: {
    id: string
    name: string
    createdAt: string
    workflowId?: string | undefined
    workflowVersionId?: string | undefined
  }
  cursor: Cursor
}
type TaskRunWithCursor = {
  taskRun: {
    id: string
    taskId: string
    status:
      | 'pending'
      | 'running'
      | 'completed'
      | 'succeeded'
      | 'failed'
      | 'canceled'
      | 'paused'
      | 'suspended'
      | 'sleeping'
    startedAt?: string | undefined
    completedAt?: string | undefined
    parentTaskRunId: string
    parentTaskAttempt?: number | undefined
    rootTaskRunId: string
    retries: number
    attempts: {
      taskRunId?: string | undefined
      attempt: number
      status:
        | 'pending'
        | 'running'
        | 'completed'
        | 'succeeded'
        | 'failed'
        | 'canceled'
        | 'paused'
        | 'suspended'
        | 'sleeping'
      enqueuedAt?: string | undefined
      startedAt: string
      completedAt?: string | undefined
    }[]
  }
  cursor: Cursor
}
type FlowWithCursor = {
  flow: {
    id: string
    name: string
    createdAt: string
    workflowId?: string | undefined
    workflowVersionId?: string | undefined
  }
  cursor: Cursor
}
type FlowRunWithCursor = {
  flowRun: {
    id: string
    flowId: string
    status:
      | 'pending'
      | 'running'
      | 'succeeded'
      | 'failed'
      | 'canceled'
      | 'paused'
      | 'suspended'
      | 'sleeping'
    startedAt?: string | undefined
    completedAt?: string | undefined
  }
  cursor: Cursor
}
type SandboxWithCursor = {
  sandbox: {
    id: string
    name?: (string | null) | undefined
    sandboxGroupId?: {} | undefined
    status:
      | 'creating'
      | 'running'
      | 'suspending'
      | 'suspended'
      | 'resuming'
      | 'errored'
      | 'terminated'
    plan: 'starter' | 'standard' | 'pro' | '1c-2g' | '2c-4g' | '4c-8g' | '8c-16g' | string
    networkPolicy: {
      type: {}
      default?: {} | undefined
      rules?: { domain: string; protocol?: 'https' | undefined }[] | undefined
    }
    region: string
    timeoutSeconds: number
    idleTimeoutSeconds: number
    createdAt: string
    terminatedAt?: (string | null) | undefined
  }
  cursor: Cursor
}
type SandboxGroupWithCursor = {
  sandboxGroup: {
    id: string
    ownerId: string
    name: string
    region: string
    isDefault: boolean
    environmentId?: (string | null) | undefined
    concurrencyLimit: number
    createdAt: string
    updatedAt: string
  }
  cursor: Cursor
}
type ExecutionWithCursor = {
  execution: {
    id: string
    sandboxId: string
    type: 'runs' | 'files'
    operation: 'sync' | 'stream' | 'upload' | 'download'
    command?: string | undefined
    userId: string
    startedAt: string
    stoppedAt?: string | undefined
    exitCode?: number | undefined
  }
  cursor: Cursor
}
type SandboxBuildWithCursor = {
  build: {
    id: string
    sandboxGroupId: string
    name: string
    source: { repository: string; image: string; reference: string }
    sourceDigest: string
    status: 'pending' | 'running' | 'succeeded' | 'failed'
    failureReason?: (string | null) | undefined
    failureCode?: (string | null) | undefined
    createdAt: string
    finishedAt?: (string | null) | undefined
  }
  cursor: Cursor
}
type SandboxSnapshotWithCursor = {
  snapshot: {
    id: string
    sandboxGroupId: string
    sourceSandboxId: {}
    name?: {} | undefined
    kind: 'filesystem' | 'runtime'
    status: 'creating' | 'available' | 'failed'
    plan: 'starter' | 'standard' | 'pro' | '1c-2g' | '2c-4g' | '4c-8g' | '8c-16g' | string
    requestedAt: string
    capturedAt?: (string | null) | undefined
    expiresAt: string
    ttlSeconds?: number | undefined
    sizeBytes?: (bigint | null) | undefined
    error?: (string | null) | undefined
  }
  cursor: Cursor
}
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/blueprints': {
      $get:
        | {
            input: {
              query: {
                ownerId?: string[] | undefined
                cursor?: string | undefined
                limit?: number | undefined
              }
            }
            output: BlueprintWithCursor[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                ownerId?: string[] | undefined
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
                ownerId?: string[] | undefined
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
                ownerId?: string[] | undefined
                cursor?: string | undefined
                limit?: number | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: {
              query: {
                ownerId?: string[] | undefined
                cursor?: string | undefined
                limit?: number | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 406
          }
        | {
            input: {
              query: {
                ownerId?: string[] | undefined
                cursor?: string | undefined
                limit?: number | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 410
          }
        | {
            input: {
              query: {
                ownerId?: string[] | undefined
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
                ownerId?: string[] | undefined
                cursor?: string | undefined
                limit?: number | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 500
          }
        | {
            input: {
              query: {
                ownerId?: string[] | undefined
                cursor?: string | undefined
                limit?: number | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 503
          }
    }
  } & {
    '/blueprints/validate': {
      $post:
        | {
            input: { form: { ownerId: string; file: File } }
            output: {
              valid: boolean
              errors?:
                | {
                    path?: string | undefined
                    error: string
                    line?: number | undefined
                    column?: number | undefined
                  }[]
                | undefined
              plan?:
                | {
                    services?: string[] | undefined
                    databases?: string[] | undefined
                    keyValue?: string[] | undefined
                    envGroups?: string[] | undefined
                    workflows?: string[] | undefined
                    totalActions?: number | undefined
                  }
                | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { form: { ownerId: string; file: File } }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { form: { ownerId: string; file: File } }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { form: { ownerId: string; file: File } }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { form: { ownerId: string; file: File } }
            output: Error
            outputFormat: 'json'
            status: 413
          }
        | {
            input: { form: { ownerId: string; file: File } }
            output: Error
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { form: { ownerId: string; file: File } }
            output: Error
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/owners/:ownerId/members/:userId': {
      $patch:
        | {
            input: { param: { ownerId: string; userId: string } } & {
              json: { role: TeamMemberRole }
            }
            output: TeamMember
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { ownerId: string; userId: string } } & {
              json: { role: TeamMemberRole }
            }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { ownerId: string; userId: string } } & {
              json: { role: TeamMemberRole }
            }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { ownerId: string; userId: string } } & {
              json: { role: TeamMemberRole }
            }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { ownerId: string; userId: string } } & {
              json: { role: TeamMemberRole }
            }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { ownerId: string; userId: string } } & {
              json: { role: TeamMemberRole }
            }
            output: Error
            outputFormat: 'json'
            status: 409
          }
        | {
            input: { param: { ownerId: string; userId: string } } & {
              json: { role: TeamMemberRole }
            }
            output: Error
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { ownerId: string; userId: string } } & {
              json: { role: TeamMemberRole }
            }
            output: Error
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { param: { ownerId: string; userId: string } } & {
              json: { role: TeamMemberRole }
            }
            output: Error
            outputFormat: 'json'
            status: 503
          }
      $delete:
        | {
            input: { param: { ownerId: string; userId: string } }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { ownerId: string; userId: string } }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { ownerId: string; userId: string } }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { ownerId: string; userId: string } }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { ownerId: string; userId: string } }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { ownerId: string; userId: string } }
            output: Error
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { ownerId: string; userId: string } }
            output: Error
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { param: { ownerId: string; userId: string } }
            output: Error
            outputFormat: 'json'
            status: 503
          }
    }
  } & {
    '/blueprints/:blueprintId': {
      $get:
        | {
            input: { param: { blueprintId: string } }
            output: {
              id: string
              ownerId: string
              name: string
              status: 'created' | 'paused' | 'in_sync' | 'syncing' | 'error'
              autoSync: boolean
              repo: string
              branch: string
              path: string
              lastSync?: string | undefined
              resources: {
                id: string
                name: string
                type:
                  | 'static_site'
                  | 'web_service'
                  | 'private_service'
                  | 'background_worker'
                  | 'cron_job'
                  | 'redis'
                  | 'key_value'
                  | 'postgres'
                  | 'environment_group'
                  | 'build_source'
                  | 'workflow'
              }[]
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { blueprintId: string } }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { blueprintId: string } }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { blueprintId: string } }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { blueprintId: string } }
            output: Error
            outputFormat: 'json'
            status: 406
          }
        | {
            input: { param: { blueprintId: string } }
            output: Error
            outputFormat: 'json'
            status: 410
          }
        | {
            input: { param: { blueprintId: string } }
            output: Error
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { blueprintId: string } }
            output: Error
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { param: { blueprintId: string } }
            output: Error
            outputFormat: 'json'
            status: 503
          }
      $patch:
        | {
            input: { param: { blueprintId: string } } & {
              json: {
                name?: string | undefined
                autoSync?: boolean | undefined
                path?: string | undefined
                branch?: string | undefined
              }
            }
            output: {
              id: string
              ownerId: string
              name: string
              status: 'created' | 'paused' | 'in_sync' | 'syncing' | 'error'
              autoSync: boolean
              repo: string
              branch: string
              path: string
              lastSync?: string | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { blueprintId: string } } & {
              json: {
                name?: string | undefined
                autoSync?: boolean | undefined
                path?: string | undefined
                branch?: string | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { blueprintId: string } } & {
              json: {
                name?: string | undefined
                autoSync?: boolean | undefined
                path?: string | undefined
                branch?: string | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { blueprintId: string } } & {
              json: {
                name?: string | undefined
                autoSync?: boolean | undefined
                path?: string | undefined
                branch?: string | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { blueprintId: string } } & {
              json: {
                name?: string | undefined
                autoSync?: boolean | undefined
                path?: string | undefined
                branch?: string | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { blueprintId: string } } & {
              json: {
                name?: string | undefined
                autoSync?: boolean | undefined
                path?: string | undefined
                branch?: string | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 406
          }
        | {
            input: { param: { blueprintId: string } } & {
              json: {
                name?: string | undefined
                autoSync?: boolean | undefined
                path?: string | undefined
                branch?: string | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 410
          }
        | {
            input: { param: { blueprintId: string } } & {
              json: {
                name?: string | undefined
                autoSync?: boolean | undefined
                path?: string | undefined
                branch?: string | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { blueprintId: string } } & {
              json: {
                name?: string | undefined
                autoSync?: boolean | undefined
                path?: string | undefined
                branch?: string | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { param: { blueprintId: string } } & {
              json: {
                name?: string | undefined
                autoSync?: boolean | undefined
                path?: string | undefined
                branch?: string | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 503
          }
      $delete:
        | {
            input: { param: { blueprintId: string } }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { blueprintId: string } }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { blueprintId: string } }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { blueprintId: string } }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { blueprintId: string } }
            output: Error
            outputFormat: 'json'
            status: 406
          }
        | {
            input: { param: { blueprintId: string } }
            output: Error
            outputFormat: 'json'
            status: 410
          }
        | {
            input: { param: { blueprintId: string } }
            output: Error
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { blueprintId: string } }
            output: Error
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { param: { blueprintId: string } }
            output: Error
            outputFormat: 'json'
            status: 503
          }
    }
  } & {
    '/blueprints/:blueprintId/syncs': {
      $get:
        | {
            input: { param: { blueprintId: string } } & {
              query: { cursor?: string | undefined; limit?: number | undefined }
            }
            output: SyncWithCursor[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { blueprintId: string } } & {
              query: { cursor?: string | undefined; limit?: number | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { blueprintId: string } } & {
              query: { cursor?: string | undefined; limit?: number | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { blueprintId: string } } & {
              query: { cursor?: string | undefined; limit?: number | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { blueprintId: string } } & {
              query: { cursor?: string | undefined; limit?: number | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 406
          }
        | {
            input: { param: { blueprintId: string } } & {
              query: { cursor?: string | undefined; limit?: number | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 410
          }
        | {
            input: { param: { blueprintId: string } } & {
              query: { cursor?: string | undefined; limit?: number | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { blueprintId: string } } & {
              query: { cursor?: string | undefined; limit?: number | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { param: { blueprintId: string } } & {
              query: { cursor?: string | undefined; limit?: number | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 503
          }
    }
  } & {
    '/dedicated-ips': {
      $get:
        | {
            input: { query: { ownerId: string; environmentId?: string | undefined } }
            output: DedicatedIP[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { ownerId: string; environmentId?: string | undefined } }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { query: { ownerId: string; environmentId?: string | undefined } }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { query: { ownerId: string; environmentId?: string | undefined } }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { query: { ownerId: string; environmentId?: string | undefined } }
            output: Error
            outputFormat: 'json'
            status: 406
          }
        | {
            input: { query: { ownerId: string; environmentId?: string | undefined } }
            output: Error
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { query: { ownerId: string; environmentId?: string | undefined } }
            output: Error
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { query: { ownerId: string; environmentId?: string | undefined } }
            output: Error
            outputFormat: 'json'
            status: 503
          }
      $post:
        | {
            input: { json: DedicatedIPPOST }
            output: DedicatedIP
            outputFormat: 'json'
            status: 201
          }
        | { input: { json: DedicatedIPPOST }; output: Error; outputFormat: 'json'; status: 400 }
        | { input: { json: DedicatedIPPOST }; output: Error; outputFormat: 'json'; status: 401 }
        | { input: { json: DedicatedIPPOST }; output: Error; outputFormat: 'json'; status: 402 }
        | { input: { json: DedicatedIPPOST }; output: Error; outputFormat: 'json'; status: 403 }
        | { input: { json: DedicatedIPPOST }; output: Error; outputFormat: 'json'; status: 406 }
        | { input: { json: DedicatedIPPOST }; output: Error; outputFormat: 'json'; status: 409 }
        | { input: { json: DedicatedIPPOST }; output: Error; outputFormat: 'json'; status: 429 }
        | { input: { json: DedicatedIPPOST }; output: Error; outputFormat: 'json'; status: 500 }
        | { input: { json: DedicatedIPPOST }; output: Error; outputFormat: 'json'; status: 503 }
    }
  } & {
    '/dedicated-ips/:dedicatedIpId': {
      $get:
        | {
            input: { param: { dedicatedIpId: string } }
            output: DedicatedIP
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { dedicatedIpId: string } }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { dedicatedIpId: string } }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { dedicatedIpId: string } }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { dedicatedIpId: string } }
            output: Error
            outputFormat: 'json'
            status: 406
          }
        | {
            input: { param: { dedicatedIpId: string } }
            output: Error
            outputFormat: 'json'
            status: 410
          }
        | {
            input: { param: { dedicatedIpId: string } }
            output: Error
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { dedicatedIpId: string } }
            output: Error
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { param: { dedicatedIpId: string } }
            output: Error
            outputFormat: 'json'
            status: 503
          }
      $patch:
        | {
            input: { param: { dedicatedIpId: string } } & { json: DedicatedIPPATCH }
            output: DedicatedIP
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { dedicatedIpId: string } } & { json: DedicatedIPPATCH }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { dedicatedIpId: string } } & { json: DedicatedIPPATCH }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { dedicatedIpId: string } } & { json: DedicatedIPPATCH }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { dedicatedIpId: string } } & { json: DedicatedIPPATCH }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { dedicatedIpId: string } } & { json: DedicatedIPPATCH }
            output: Error
            outputFormat: 'json'
            status: 406
          }
        | {
            input: { param: { dedicatedIpId: string } } & { json: DedicatedIPPATCH }
            output: Error
            outputFormat: 'json'
            status: 409
          }
        | {
            input: { param: { dedicatedIpId: string } } & { json: DedicatedIPPATCH }
            output: Error
            outputFormat: 'json'
            status: 410
          }
        | {
            input: { param: { dedicatedIpId: string } } & { json: DedicatedIPPATCH }
            output: Error
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { dedicatedIpId: string } } & { json: DedicatedIPPATCH }
            output: Error
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { param: { dedicatedIpId: string } } & { json: DedicatedIPPATCH }
            output: Error
            outputFormat: 'json'
            status: 503
          }
      $delete:
        | {
            input: { param: { dedicatedIpId: string } }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { dedicatedIpId: string } }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { dedicatedIpId: string } }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { dedicatedIpId: string } }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { dedicatedIpId: string } }
            output: Error
            outputFormat: 'json'
            status: 406
          }
        | {
            input: { param: { dedicatedIpId: string } }
            output: Error
            outputFormat: 'json'
            status: 410
          }
        | {
            input: { param: { dedicatedIpId: string } }
            output: Error
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { dedicatedIpId: string } }
            output: Error
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { param: { dedicatedIpId: string } }
            output: Error
            outputFormat: 'json'
            status: 503
          }
    }
  } & {
    '/disks': {
      $get:
        | {
            input: {
              query: {
                ownerId?: string[] | undefined
                diskId?: string[] | undefined
                name?: string[] | undefined
                createdBefore?: string | undefined
                createdAfter?: string | undefined
                updatedBefore?: string | undefined
                updatedAfter?: string | undefined
                serviceId?: string[] | undefined
                cursor?: string | undefined
                limit?: number | undefined
              }
            }
            output: DiskWithCursor[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                ownerId?: string[] | undefined
                diskId?: string[] | undefined
                name?: string[] | undefined
                createdBefore?: string | undefined
                createdAfter?: string | undefined
                updatedBefore?: string | undefined
                updatedAfter?: string | undefined
                serviceId?: string[] | undefined
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
                ownerId?: string[] | undefined
                diskId?: string[] | undefined
                name?: string[] | undefined
                createdBefore?: string | undefined
                createdAfter?: string | undefined
                updatedBefore?: string | undefined
                updatedAfter?: string | undefined
                serviceId?: string[] | undefined
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
                ownerId?: string[] | undefined
                diskId?: string[] | undefined
                name?: string[] | undefined
                createdBefore?: string | undefined
                createdAfter?: string | undefined
                updatedBefore?: string | undefined
                updatedAfter?: string | undefined
                serviceId?: string[] | undefined
                cursor?: string | undefined
                limit?: number | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: {
              query: {
                ownerId?: string[] | undefined
                diskId?: string[] | undefined
                name?: string[] | undefined
                createdBefore?: string | undefined
                createdAfter?: string | undefined
                updatedBefore?: string | undefined
                updatedAfter?: string | undefined
                serviceId?: string[] | undefined
                cursor?: string | undefined
                limit?: number | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 406
          }
        | {
            input: {
              query: {
                ownerId?: string[] | undefined
                diskId?: string[] | undefined
                name?: string[] | undefined
                createdBefore?: string | undefined
                createdAfter?: string | undefined
                updatedBefore?: string | undefined
                updatedAfter?: string | undefined
                serviceId?: string[] | undefined
                cursor?: string | undefined
                limit?: number | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 410
          }
        | {
            input: {
              query: {
                ownerId?: string[] | undefined
                diskId?: string[] | undefined
                name?: string[] | undefined
                createdBefore?: string | undefined
                createdAfter?: string | undefined
                updatedBefore?: string | undefined
                updatedAfter?: string | undefined
                serviceId?: string[] | undefined
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
                ownerId?: string[] | undefined
                diskId?: string[] | undefined
                name?: string[] | undefined
                createdBefore?: string | undefined
                createdAfter?: string | undefined
                updatedBefore?: string | undefined
                updatedAfter?: string | undefined
                serviceId?: string[] | undefined
                cursor?: string | undefined
                limit?: number | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 500
          }
        | {
            input: {
              query: {
                ownerId?: string[] | undefined
                diskId?: string[] | undefined
                name?: string[] | undefined
                createdBefore?: string | undefined
                createdAfter?: string | undefined
                updatedBefore?: string | undefined
                updatedAfter?: string | undefined
                serviceId?: string[] | undefined
                cursor?: string | undefined
                limit?: number | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 503
          }
      $post:
        | {
            input: { json: { name: string; sizeGB: number; mountPath: string; serviceId: string } }
            output: {
              id: string
              name: string
              sizeGB: number
              mountPath: string
              serviceId?: string | undefined
              createdAt: string
              updatedAt: string
            }
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { json: { name: string; sizeGB: number; mountPath: string; serviceId: string } }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { json: { name: string; sizeGB: number; mountPath: string; serviceId: string } }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { json: { name: string; sizeGB: number; mountPath: string; serviceId: string } }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { json: { name: string; sizeGB: number; mountPath: string; serviceId: string } }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { json: { name: string; sizeGB: number; mountPath: string; serviceId: string } }
            output: Error
            outputFormat: 'json'
            status: 406
          }
        | {
            input: { json: { name: string; sizeGB: number; mountPath: string; serviceId: string } }
            output: Error
            outputFormat: 'json'
            status: 410
          }
        | {
            input: { json: { name: string; sizeGB: number; mountPath: string; serviceId: string } }
            output: Error
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { json: { name: string; sizeGB: number; mountPath: string; serviceId: string } }
            output: Error
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { json: { name: string; sizeGB: number; mountPath: string; serviceId: string } }
            output: Error
            outputFormat: 'json'
            status: 503
          }
    }
  } & {
    '/disks/:diskId': {
      $get:
        | {
            input: { param: { diskId: string } }
            output: {
              id: string
              name: string
              sizeGB: number
              mountPath: string
              serviceId?: string | undefined
              createdAt: string
              updatedAt: string
            }
            outputFormat: 'json'
            status: 200
          }
        | { input: { param: { diskId: string } }; output: Error; outputFormat: 'json'; status: 401 }
        | { input: { param: { diskId: string } }; output: Error; outputFormat: 'json'; status: 403 }
        | { input: { param: { diskId: string } }; output: Error; outputFormat: 'json'; status: 404 }
        | { input: { param: { diskId: string } }; output: Error; outputFormat: 'json'; status: 406 }
        | { input: { param: { diskId: string } }; output: Error; outputFormat: 'json'; status: 410 }
        | { input: { param: { diskId: string } }; output: Error; outputFormat: 'json'; status: 429 }
        | { input: { param: { diskId: string } }; output: Error; outputFormat: 'json'; status: 500 }
        | { input: { param: { diskId: string } }; output: Error; outputFormat: 'json'; status: 503 }
      $patch:
        | {
            input: { param: { diskId: string } } & {
              json: {
                name?: string | undefined
                sizeGB?: number | undefined
                mountPath?: string | undefined
              }
            }
            output: {
              id: string
              name: string
              sizeGB: number
              mountPath: string
              serviceId?: string | undefined
              createdAt: string
              updatedAt: string
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { diskId: string } } & {
              json: {
                name?: string | undefined
                sizeGB?: number | undefined
                mountPath?: string | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { diskId: string } } & {
              json: {
                name?: string | undefined
                sizeGB?: number | undefined
                mountPath?: string | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { diskId: string } } & {
              json: {
                name?: string | undefined
                sizeGB?: number | undefined
                mountPath?: string | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { diskId: string } } & {
              json: {
                name?: string | undefined
                sizeGB?: number | undefined
                mountPath?: string | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { diskId: string } } & {
              json: {
                name?: string | undefined
                sizeGB?: number | undefined
                mountPath?: string | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 406
          }
        | {
            input: { param: { diskId: string } } & {
              json: {
                name?: string | undefined
                sizeGB?: number | undefined
                mountPath?: string | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 410
          }
        | {
            input: { param: { diskId: string } } & {
              json: {
                name?: string | undefined
                sizeGB?: number | undefined
                mountPath?: string | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { diskId: string } } & {
              json: {
                name?: string | undefined
                sizeGB?: number | undefined
                mountPath?: string | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { param: { diskId: string } } & {
              json: {
                name?: string | undefined
                sizeGB?: number | undefined
                mountPath?: string | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 503
          }
      $delete:
        | { input: { param: { diskId: string } }; output: {}; outputFormat: string; status: 204 }
        | { input: { param: { diskId: string } }; output: Error; outputFormat: 'json'; status: 401 }
        | { input: { param: { diskId: string } }; output: Error; outputFormat: 'json'; status: 403 }
        | { input: { param: { diskId: string } }; output: Error; outputFormat: 'json'; status: 404 }
        | { input: { param: { diskId: string } }; output: Error; outputFormat: 'json'; status: 406 }
        | { input: { param: { diskId: string } }; output: Error; outputFormat: 'json'; status: 410 }
        | { input: { param: { diskId: string } }; output: Error; outputFormat: 'json'; status: 429 }
        | { input: { param: { diskId: string } }; output: Error; outputFormat: 'json'; status: 500 }
        | { input: { param: { diskId: string } }; output: Error; outputFormat: 'json'; status: 503 }
    }
  } & {
    '/disks/:diskId/snapshots': {
      $get:
        | {
            input: { param: { diskId: string } }
            output: DiskSnapshot[]
            outputFormat: 'json'
            status: 201
          }
        | { input: { param: { diskId: string } }; output: Error; outputFormat: 'json'; status: 400 }
        | { input: { param: { diskId: string } }; output: Error; outputFormat: 'json'; status: 401 }
        | { input: { param: { diskId: string } }; output: Error; outputFormat: 'json'; status: 403 }
        | { input: { param: { diskId: string } }; output: Error; outputFormat: 'json'; status: 404 }
        | { input: { param: { diskId: string } }; output: Error; outputFormat: 'json'; status: 406 }
        | { input: { param: { diskId: string } }; output: Error; outputFormat: 'json'; status: 410 }
        | { input: { param: { diskId: string } }; output: Error; outputFormat: 'json'; status: 429 }
        | { input: { param: { diskId: string } }; output: Error; outputFormat: 'json'; status: 500 }
        | { input: { param: { diskId: string } }; output: Error; outputFormat: 'json'; status: 503 }
    }
  } & {
    '/disks/:diskId/snapshots/restore': {
      $post:
        | {
            input: { param: { diskId: string } } & { json: SnapshotRestorePOST }
            output: {
              id: string
              name: string
              sizeGB: number
              mountPath: string
              serviceId?: string | undefined
              createdAt: string
              updatedAt: string
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { diskId: string } } & { json: SnapshotRestorePOST }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { diskId: string } } & { json: SnapshotRestorePOST }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { diskId: string } } & { json: SnapshotRestorePOST }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { diskId: string } } & { json: SnapshotRestorePOST }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { diskId: string } } & { json: SnapshotRestorePOST }
            output: Error
            outputFormat: 'json'
            status: 406
          }
        | {
            input: { param: { diskId: string } } & { json: SnapshotRestorePOST }
            output: Error
            outputFormat: 'json'
            status: 410
          }
        | {
            input: { param: { diskId: string } } & { json: SnapshotRestorePOST }
            output: Error
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { diskId: string } } & { json: SnapshotRestorePOST }
            output: Error
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { param: { diskId: string } } & { json: SnapshotRestorePOST }
            output: Error
            outputFormat: 'json'
            status: 503
          }
    }
  } & {
    '/users': {
      $get:
        | { input: {}; output: User; outputFormat: 'json'; status: 200 }
        | { input: {}; output: Error; outputFormat: 'json'; status: 401 }
        | { input: {}; output: Error; outputFormat: 'json'; status: 406 }
        | { input: {}; output: Error; outputFormat: 'json'; status: 429 }
        | { input: {}; output: Error; outputFormat: 'json'; status: 500 }
        | { input: {}; output: Error; outputFormat: 'json'; status: 503 }
    }
  } & {
    '/owners': {
      $get:
        | {
            input: {
              query: {
                name?: string[] | undefined
                email?: string[] | undefined
                cursor?: string | undefined
                limit?: number | undefined
              }
            }
            output: OwnerWithCursor[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                name?: string[] | undefined
                email?: string[] | undefined
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
                name?: string[] | undefined
                email?: string[] | undefined
                cursor?: string | undefined
                limit?: number | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 406
          }
        | {
            input: {
              query: {
                name?: string[] | undefined
                email?: string[] | undefined
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
                name?: string[] | undefined
                email?: string[] | undefined
                cursor?: string | undefined
                limit?: number | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 500
          }
        | {
            input: {
              query: {
                name?: string[] | undefined
                email?: string[] | undefined
                cursor?: string | undefined
                limit?: number | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 503
          }
    }
  } & {
    '/owners/:ownerId': {
      $get:
        | {
            input: { param: { ownerId: string } }
            output: Owner
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { ownerId: string } }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { ownerId: string } }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { ownerId: string } }
            output: Error
            outputFormat: 'json'
            status: 406
          }
        | {
            input: { param: { ownerId: string } }
            output: Error
            outputFormat: 'json'
            status: 410
          }
        | {
            input: { param: { ownerId: string } }
            output: Error
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { ownerId: string } }
            output: Error
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { param: { ownerId: string } }
            output: Error
            outputFormat: 'json'
            status: 503
          }
    }
  } & {
    '/owners/:ownerId/members': {
      $get:
        | {
            input: { param: { ownerId: string } }
            output: TeamMembers
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { ownerId: string } }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { ownerId: string } }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { ownerId: string } }
            output: Error
            outputFormat: 'json'
            status: 406
          }
        | {
            input: { param: { ownerId: string } }
            output: Error
            outputFormat: 'json'
            status: 410
          }
        | {
            input: { param: { ownerId: string } }
            output: Error
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { ownerId: string } }
            output: Error
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { param: { ownerId: string } }
            output: Error
            outputFormat: 'json'
            status: 503
          }
    }
  } & {
    '/owners/:ownerId/audit-logs': {
      $get:
        | {
            input: { param: { ownerId: string } } & {
              query: {
                startTime?: string | undefined
                endTime?: string | undefined
                direction?: 'forward' | 'backward' | undefined
                cursor?: string | undefined
                limit?: number | undefined
              }
            }
            output: AuditLogWithCursor[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { ownerId: string } } & {
              query: {
                startTime?: string | undefined
                endTime?: string | undefined
                direction?: 'forward' | 'backward' | undefined
                cursor?: string | undefined
                limit?: number | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { ownerId: string } } & {
              query: {
                startTime?: string | undefined
                endTime?: string | undefined
                direction?: 'forward' | 'backward' | undefined
                cursor?: string | undefined
                limit?: number | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { ownerId: string } } & {
              query: {
                startTime?: string | undefined
                endTime?: string | undefined
                direction?: 'forward' | 'backward' | undefined
                cursor?: string | undefined
                limit?: number | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { ownerId: string } } & {
              query: {
                startTime?: string | undefined
                endTime?: string | undefined
                direction?: 'forward' | 'backward' | undefined
                cursor?: string | undefined
                limit?: number | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { ownerId: string } } & {
              query: {
                startTime?: string | undefined
                endTime?: string | undefined
                direction?: 'forward' | 'backward' | undefined
                cursor?: string | undefined
                limit?: number | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 406
          }
        | {
            input: { param: { ownerId: string } } & {
              query: {
                startTime?: string | undefined
                endTime?: string | undefined
                direction?: 'forward' | 'backward' | undefined
                cursor?: string | undefined
                limit?: number | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 410
          }
        | {
            input: { param: { ownerId: string } } & {
              query: {
                startTime?: string | undefined
                endTime?: string | undefined
                direction?: 'forward' | 'backward' | undefined
                cursor?: string | undefined
                limit?: number | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { ownerId: string } } & {
              query: {
                startTime?: string | undefined
                endTime?: string | undefined
                direction?: 'forward' | 'backward' | undefined
                cursor?: string | undefined
                limit?: number | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { param: { ownerId: string } } & {
              query: {
                startTime?: string | undefined
                endTime?: string | undefined
                direction?: 'forward' | 'backward' | undefined
                cursor?: string | undefined
                limit?: number | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 503
          }
    }
  } & {
    '/organizations/:orgId/audit-logs': {
      $get:
        | {
            input: { param: { orgId: string } } & {
              query: {
                startTime?: string | undefined
                endTime?: string | undefined
                direction?: 'forward' | 'backward' | undefined
                cursor?: string | undefined
                limit?: number | undefined
              }
            }
            output: AuditLogWithCursor[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { orgId: string } } & {
              query: {
                startTime?: string | undefined
                endTime?: string | undefined
                direction?: 'forward' | 'backward' | undefined
                cursor?: string | undefined
                limit?: number | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { orgId: string } } & {
              query: {
                startTime?: string | undefined
                endTime?: string | undefined
                direction?: 'forward' | 'backward' | undefined
                cursor?: string | undefined
                limit?: number | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { orgId: string } } & {
              query: {
                startTime?: string | undefined
                endTime?: string | undefined
                direction?: 'forward' | 'backward' | undefined
                cursor?: string | undefined
                limit?: number | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { orgId: string } } & {
              query: {
                startTime?: string | undefined
                endTime?: string | undefined
                direction?: 'forward' | 'backward' | undefined
                cursor?: string | undefined
                limit?: number | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { orgId: string } } & {
              query: {
                startTime?: string | undefined
                endTime?: string | undefined
                direction?: 'forward' | 'backward' | undefined
                cursor?: string | undefined
                limit?: number | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 406
          }
        | {
            input: { param: { orgId: string } } & {
              query: {
                startTime?: string | undefined
                endTime?: string | undefined
                direction?: 'forward' | 'backward' | undefined
                cursor?: string | undefined
                limit?: number | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 410
          }
        | {
            input: { param: { orgId: string } } & {
              query: {
                startTime?: string | undefined
                endTime?: string | undefined
                direction?: 'forward' | 'backward' | undefined
                cursor?: string | undefined
                limit?: number | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { orgId: string } } & {
              query: {
                startTime?: string | undefined
                endTime?: string | undefined
                direction?: 'forward' | 'backward' | undefined
                cursor?: string | undefined
                limit?: number | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { param: { orgId: string } } & {
              query: {
                startTime?: string | undefined
                endTime?: string | undefined
                direction?: 'forward' | 'backward' | undefined
                cursor?: string | undefined
                limit?: number | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 503
          }
    }
  } & {
    '/notification-settings/owners/:ownerId': {
      $get:
        | {
            input: { param: { ownerId: string } }
            output: {
              ownerId: string
              slackEnabled: boolean
              emailEnabled: boolean
              previewNotificationsEnabled: boolean
              notificationsToSend: 'none' | 'failure' | 'all'
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { ownerId: string } }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { ownerId: string } }
            output: Error
            outputFormat: 'json'
            status: 406
          }
        | {
            input: { param: { ownerId: string } }
            output: Error
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { ownerId: string } }
            output: Error
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { param: { ownerId: string } }
            output: Error
            outputFormat: 'json'
            status: 503
          }
      $patch:
        | {
            input: { param: { ownerId: string } } & {
              json: {
                emailEnabled?: boolean | undefined
                previewNotificationsEnabled?: boolean | undefined
                notificationsToSend?: 'none' | 'failure' | 'all' | undefined
              }
            }
            output: {
              ownerId: string
              slackEnabled: boolean
              emailEnabled: boolean
              previewNotificationsEnabled: boolean
              notificationsToSend: 'none' | 'failure' | 'all'
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { ownerId: string } } & {
              json: {
                emailEnabled?: boolean | undefined
                previewNotificationsEnabled?: boolean | undefined
                notificationsToSend?: 'none' | 'failure' | 'all' | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { ownerId: string } } & {
              json: {
                emailEnabled?: boolean | undefined
                previewNotificationsEnabled?: boolean | undefined
                notificationsToSend?: 'none' | 'failure' | 'all' | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 406
          }
        | {
            input: { param: { ownerId: string } } & {
              json: {
                emailEnabled?: boolean | undefined
                previewNotificationsEnabled?: boolean | undefined
                notificationsToSend?: 'none' | 'failure' | 'all' | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { ownerId: string } } & {
              json: {
                emailEnabled?: boolean | undefined
                previewNotificationsEnabled?: boolean | undefined
                notificationsToSend?: 'none' | 'failure' | 'all' | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { param: { ownerId: string } } & {
              json: {
                emailEnabled?: boolean | undefined
                previewNotificationsEnabled?: boolean | undefined
                notificationsToSend?: 'none' | 'failure' | 'all' | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 503
          }
    }
  } & {
    '/notification-settings/overrides': {
      $get:
        | {
            input: {
              query: {
                ownerId?: string[] | undefined
                serviceId?: string[] | undefined
                cursor?: string | undefined
                limit?: number | undefined
              }
            }
            output: NotificationOverrideWithCursor[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                ownerId?: string[] | undefined
                serviceId?: string[] | undefined
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
                ownerId?: string[] | undefined
                serviceId?: string[] | undefined
                cursor?: string | undefined
                limit?: number | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 406
          }
        | {
            input: {
              query: {
                ownerId?: string[] | undefined
                serviceId?: string[] | undefined
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
                ownerId?: string[] | undefined
                serviceId?: string[] | undefined
                cursor?: string | undefined
                limit?: number | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 500
          }
        | {
            input: {
              query: {
                ownerId?: string[] | undefined
                serviceId?: string[] | undefined
                cursor?: string | undefined
                limit?: number | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 503
          }
    }
  } & {
    '/notification-settings/overrides/services/:serviceId': {
      $get:
        | {
            input: { param: { serviceId: string } }
            output: {
              serviceId: string
              previewNotificationsEnabled: 'default' | 'false' | 'true'
              notificationsToSend: 'default' | 'none' | 'failure' | 'all'
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { serviceId: string } }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { serviceId: string } }
            output: Error
            outputFormat: 'json'
            status: 406
          }
        | {
            input: { param: { serviceId: string } }
            output: Error
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { serviceId: string } }
            output: Error
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { param: { serviceId: string } }
            output: Error
            outputFormat: 'json'
            status: 503
          }
      $patch:
        | {
            input: { param: { serviceId: string } } & {
              json: {
                previewNotificationsEnabled?: 'default' | 'false' | 'true' | undefined
                notificationsToSend?: 'default' | 'none' | 'failure' | 'all' | undefined
              }
            }
            output: {
              serviceId: string
              previewNotificationsEnabled: 'default' | 'false' | 'true'
              notificationsToSend: 'default' | 'none' | 'failure' | 'all'
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { serviceId: string } } & {
              json: {
                previewNotificationsEnabled?: 'default' | 'false' | 'true' | undefined
                notificationsToSend?: 'default' | 'none' | 'failure' | 'all' | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { serviceId: string } } & {
              json: {
                previewNotificationsEnabled?: 'default' | 'false' | 'true' | undefined
                notificationsToSend?: 'default' | 'none' | 'failure' | 'all' | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 406
          }
        | {
            input: { param: { serviceId: string } } & {
              json: {
                previewNotificationsEnabled?: 'default' | 'false' | 'true' | undefined
                notificationsToSend?: 'default' | 'none' | 'failure' | 'all' | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { serviceId: string } } & {
              json: {
                previewNotificationsEnabled?: 'default' | 'false' | 'true' | undefined
                notificationsToSend?: 'default' | 'none' | 'failure' | 'all' | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { param: { serviceId: string } } & {
              json: {
                previewNotificationsEnabled?: 'default' | 'false' | 'true' | undefined
                notificationsToSend?: 'default' | 'none' | 'failure' | 'all' | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 503
          }
    }
  } & {
    '/registrycredentials': {
      $get:
        | {
            input: {
              query: {
                name?: string[] | undefined
                username?: string[] | undefined
                type?: RegistryCredentialRegistry[] | undefined
                createdBefore?: string | undefined
                createdAfter?: string | undefined
                updatedBefore?: string | undefined
                updatedAfter?: string | undefined
                ownerId?: string[] | undefined
                cursor?: string | undefined
                limit?: number | undefined
              }
            }
            output: RegistryCredential[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                name?: string[] | undefined
                username?: string[] | undefined
                type?: RegistryCredentialRegistry[] | undefined
                createdBefore?: string | undefined
                createdAfter?: string | undefined
                updatedBefore?: string | undefined
                updatedAfter?: string | undefined
                ownerId?: string[] | undefined
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
                name?: string[] | undefined
                username?: string[] | undefined
                type?: RegistryCredentialRegistry[] | undefined
                createdBefore?: string | undefined
                createdAfter?: string | undefined
                updatedBefore?: string | undefined
                updatedAfter?: string | undefined
                ownerId?: string[] | undefined
                cursor?: string | undefined
                limit?: number | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 406
          }
        | {
            input: {
              query: {
                name?: string[] | undefined
                username?: string[] | undefined
                type?: RegistryCredentialRegistry[] | undefined
                createdBefore?: string | undefined
                createdAfter?: string | undefined
                updatedBefore?: string | undefined
                updatedAfter?: string | undefined
                ownerId?: string[] | undefined
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
                name?: string[] | undefined
                username?: string[] | undefined
                type?: RegistryCredentialRegistry[] | undefined
                createdBefore?: string | undefined
                createdAfter?: string | undefined
                updatedBefore?: string | undefined
                updatedAfter?: string | undefined
                ownerId?: string[] | undefined
                cursor?: string | undefined
                limit?: number | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 500
          }
        | {
            input: {
              query: {
                name?: string[] | undefined
                username?: string[] | undefined
                type?: RegistryCredentialRegistry[] | undefined
                createdBefore?: string | undefined
                createdAfter?: string | undefined
                updatedBefore?: string | undefined
                updatedAfter?: string | undefined
                ownerId?: string[] | undefined
                cursor?: string | undefined
                limit?: number | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 503
          }
      $post:
        | {
            input: {
              json: {
                registry: RegistryCredentialRegistry
                name: string
                username: string
                authToken: string
                ownerId: string
              }
            }
            output: RegistryCredential
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              json: {
                registry: RegistryCredentialRegistry
                name: string
                username: string
                authToken: string
                ownerId: string
              }
            }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              json: {
                registry: RegistryCredentialRegistry
                name: string
                username: string
                authToken: string
                ownerId: string
              }
            }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              json: {
                registry: RegistryCredentialRegistry
                name: string
                username: string
                authToken: string
                ownerId: string
              }
            }
            output: Error
            outputFormat: 'json'
            status: 402
          }
        | {
            input: {
              json: {
                registry: RegistryCredentialRegistry
                name: string
                username: string
                authToken: string
                ownerId: string
              }
            }
            output: Error
            outputFormat: 'json'
            status: 406
          }
        | {
            input: {
              json: {
                registry: RegistryCredentialRegistry
                name: string
                username: string
                authToken: string
                ownerId: string
              }
            }
            output: Error
            outputFormat: 'json'
            status: 409
          }
        | {
            input: {
              json: {
                registry: RegistryCredentialRegistry
                name: string
                username: string
                authToken: string
                ownerId: string
              }
            }
            output: Error
            outputFormat: 'json'
            status: 429
          }
        | {
            input: {
              json: {
                registry: RegistryCredentialRegistry
                name: string
                username: string
                authToken: string
                ownerId: string
              }
            }
            output: Error
            outputFormat: 'json'
            status: 500
          }
        | {
            input: {
              json: {
                registry: RegistryCredentialRegistry
                name: string
                username: string
                authToken: string
                ownerId: string
              }
            }
            output: Error
            outputFormat: 'json'
            status: 503
          }
    }
  } & {
    '/registrycredentials/:registryCredentialId': {
      $get:
        | {
            input: { param: { registryCredentialId: string } }
            output: RegistryCredential
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { registryCredentialId: string } }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { registryCredentialId: string } }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { registryCredentialId: string } }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { registryCredentialId: string } }
            output: Error
            outputFormat: 'json'
            status: 406
          }
        | {
            input: { param: { registryCredentialId: string } }
            output: Error
            outputFormat: 'json'
            status: 410
          }
        | {
            input: { param: { registryCredentialId: string } }
            output: Error
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { registryCredentialId: string } }
            output: Error
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { param: { registryCredentialId: string } }
            output: Error
            outputFormat: 'json'
            status: 503
          }
      $patch:
        | {
            input: { param: { registryCredentialId: string } } & {
              json: {
                registry: RegistryCredentialRegistry
                name: string
                username: string
                authToken: string
              }
            }
            output: RegistryCredential
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { registryCredentialId: string } } & {
              json: {
                registry: RegistryCredentialRegistry
                name: string
                username: string
                authToken: string
              }
            }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { registryCredentialId: string } } & {
              json: {
                registry: RegistryCredentialRegistry
                name: string
                username: string
                authToken: string
              }
            }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { registryCredentialId: string } } & {
              json: {
                registry: RegistryCredentialRegistry
                name: string
                username: string
                authToken: string
              }
            }
            output: Error
            outputFormat: 'json'
            status: 402
          }
        | {
            input: { param: { registryCredentialId: string } } & {
              json: {
                registry: RegistryCredentialRegistry
                name: string
                username: string
                authToken: string
              }
            }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { registryCredentialId: string } } & {
              json: {
                registry: RegistryCredentialRegistry
                name: string
                username: string
                authToken: string
              }
            }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { registryCredentialId: string } } & {
              json: {
                registry: RegistryCredentialRegistry
                name: string
                username: string
                authToken: string
              }
            }
            output: Error
            outputFormat: 'json'
            status: 406
          }
        | {
            input: { param: { registryCredentialId: string } } & {
              json: {
                registry: RegistryCredentialRegistry
                name: string
                username: string
                authToken: string
              }
            }
            output: Error
            outputFormat: 'json'
            status: 409
          }
        | {
            input: { param: { registryCredentialId: string } } & {
              json: {
                registry: RegistryCredentialRegistry
                name: string
                username: string
                authToken: string
              }
            }
            output: Error
            outputFormat: 'json'
            status: 410
          }
        | {
            input: { param: { registryCredentialId: string } } & {
              json: {
                registry: RegistryCredentialRegistry
                name: string
                username: string
                authToken: string
              }
            }
            output: Error
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { registryCredentialId: string } } & {
              json: {
                registry: RegistryCredentialRegistry
                name: string
                username: string
                authToken: string
              }
            }
            output: Error
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { param: { registryCredentialId: string } } & {
              json: {
                registry: RegistryCredentialRegistry
                name: string
                username: string
                authToken: string
              }
            }
            output: Error
            outputFormat: 'json'
            status: 503
          }
      $delete:
        | {
            input: { param: { registryCredentialId: string } }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { registryCredentialId: string } }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { registryCredentialId: string } }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { registryCredentialId: string } }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { registryCredentialId: string } }
            output: Error
            outputFormat: 'json'
            status: 406
          }
        | {
            input: { param: { registryCredentialId: string } }
            output: Error
            outputFormat: 'json'
            status: 410
          }
        | {
            input: { param: { registryCredentialId: string } }
            output: Error
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { registryCredentialId: string } }
            output: Error
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { param: { registryCredentialId: string } }
            output: Error
            outputFormat: 'json'
            status: 503
          }
    }
  } & {
    '/services': {
      $get:
        | {
            input: {
              query: {
                name?: string[] | undefined
                type?: ServiceType[] | undefined
                environmentId?: string[] | undefined
                env?: ServiceRuntime[] | undefined
                region?: Region[] | undefined
                suspended?: ('suspended' | 'not_suspended')[] | undefined
                createdBefore?: string | undefined
                createdAfter?: string | undefined
                updatedBefore?: string | undefined
                updatedAfter?: string | undefined
                ownerId?: string[] | undefined
                includePreviews?: boolean | undefined
                cursor?: string | undefined
                limit?: number | undefined
              }
            }
            output: ServiceList
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                name?: string[] | undefined
                type?: ServiceType[] | undefined
                environmentId?: string[] | undefined
                env?: ServiceRuntime[] | undefined
                region?: Region[] | undefined
                suspended?: ('suspended' | 'not_suspended')[] | undefined
                createdBefore?: string | undefined
                createdAfter?: string | undefined
                updatedBefore?: string | undefined
                updatedAfter?: string | undefined
                ownerId?: string[] | undefined
                includePreviews?: boolean | undefined
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
                name?: string[] | undefined
                type?: ServiceType[] | undefined
                environmentId?: string[] | undefined
                env?: ServiceRuntime[] | undefined
                region?: Region[] | undefined
                suspended?: ('suspended' | 'not_suspended')[] | undefined
                createdBefore?: string | undefined
                createdAfter?: string | undefined
                updatedBefore?: string | undefined
                updatedAfter?: string | undefined
                ownerId?: string[] | undefined
                includePreviews?: boolean | undefined
                cursor?: string | undefined
                limit?: number | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 406
          }
        | {
            input: {
              query: {
                name?: string[] | undefined
                type?: ServiceType[] | undefined
                environmentId?: string[] | undefined
                env?: ServiceRuntime[] | undefined
                region?: Region[] | undefined
                suspended?: ('suspended' | 'not_suspended')[] | undefined
                createdBefore?: string | undefined
                createdAfter?: string | undefined
                updatedBefore?: string | undefined
                updatedAfter?: string | undefined
                ownerId?: string[] | undefined
                includePreviews?: boolean | undefined
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
                name?: string[] | undefined
                type?: ServiceType[] | undefined
                environmentId?: string[] | undefined
                env?: ServiceRuntime[] | undefined
                region?: Region[] | undefined
                suspended?: ('suspended' | 'not_suspended')[] | undefined
                createdBefore?: string | undefined
                createdAfter?: string | undefined
                updatedBefore?: string | undefined
                updatedAfter?: string | undefined
                ownerId?: string[] | undefined
                includePreviews?: boolean | undefined
                cursor?: string | undefined
                limit?: number | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 500
          }
        | {
            input: {
              query: {
                name?: string[] | undefined
                type?: ServiceType[] | undefined
                environmentId?: string[] | undefined
                env?: ServiceRuntime[] | undefined
                region?: Region[] | undefined
                suspended?: ('suspended' | 'not_suspended')[] | undefined
                createdBefore?: string | undefined
                createdAfter?: string | undefined
                updatedBefore?: string | undefined
                updatedAfter?: string | undefined
                ownerId?: string[] | undefined
                includePreviews?: boolean | undefined
                cursor?: string | undefined
                limit?: number | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 503
          }
      $post:
        | {
            input: { json: ServicePOST }
            output: ServiceAndDeploy
            outputFormat: 'json'
            status: 201
          }
        | { input: { json: ServicePOST }; output: Error; outputFormat: 'json'; status: 400 }
        | { input: { json: ServicePOST }; output: Error; outputFormat: 'json'; status: 401 }
        | { input: { json: ServicePOST }; output: Error; outputFormat: 'json'; status: 402 }
        | { input: { json: ServicePOST }; output: Error; outputFormat: 'json'; status: 404 }
        | { input: { json: ServicePOST }; output: Error; outputFormat: 'json'; status: 406 }
        | { input: { json: ServicePOST }; output: Error; outputFormat: 'json'; status: 409 }
        | { input: { json: ServicePOST }; output: Error; outputFormat: 'json'; status: 429 }
        | { input: { json: ServicePOST }; output: Error; outputFormat: 'json'; status: 500 }
        | { input: { json: ServicePOST }; output: Error; outputFormat: 'json'; status: 503 }
    }
  } & {
    '/services/:serviceId': {
      $get:
        | {
            input: { param: { serviceId: string } }
            output: Service
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { serviceId: string } }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { serviceId: string } }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { serviceId: string } }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { serviceId: string } }
            output: Error
            outputFormat: 'json'
            status: 406
          }
        | {
            input: { param: { serviceId: string } }
            output: Error
            outputFormat: 'json'
            status: 410
          }
        | {
            input: { param: { serviceId: string } }
            output: Error
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { serviceId: string } }
            output: Error
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { param: { serviceId: string } }
            output: Error
            outputFormat: 'json'
            status: 503
          }
      $patch:
        | {
            input: { param: { serviceId: string } } & { json: ServicePATCH }
            output: Service
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { serviceId: string } } & { json: ServicePATCH }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { serviceId: string } } & { json: ServicePATCH }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { serviceId: string } } & { json: ServicePATCH }
            output: Error
            outputFormat: 'json'
            status: 402
          }
        | {
            input: { param: { serviceId: string } } & { json: ServicePATCH }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { serviceId: string } } & { json: ServicePATCH }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { serviceId: string } } & { json: ServicePATCH }
            output: Error
            outputFormat: 'json'
            status: 406
          }
        | {
            input: { param: { serviceId: string } } & { json: ServicePATCH }
            output: Error
            outputFormat: 'json'
            status: 409
          }
        | {
            input: { param: { serviceId: string } } & { json: ServicePATCH }
            output: Error
            outputFormat: 'json'
            status: 410
          }
        | {
            input: { param: { serviceId: string } } & { json: ServicePATCH }
            output: Error
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { serviceId: string } } & { json: ServicePATCH }
            output: Error
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { param: { serviceId: string } } & { json: ServicePATCH }
            output: Error
            outputFormat: 'json'
            status: 503
          }
      $delete:
        | { input: { param: { serviceId: string } }; output: {}; outputFormat: string; status: 204 }
        | {
            input: { param: { serviceId: string } }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { serviceId: string } }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { serviceId: string } }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { serviceId: string } }
            output: Error
            outputFormat: 'json'
            status: 406
          }
        | {
            input: { param: { serviceId: string } }
            output: Error
            outputFormat: 'json'
            status: 410
          }
        | {
            input: { param: { serviceId: string } }
            output: Error
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { serviceId: string } }
            output: Error
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { param: { serviceId: string } }
            output: Error
            outputFormat: 'json'
            status: 503
          }
    }
  } & {
    '/services/:serviceId/cache/purge': {
      $post:
        | { input: { param: { serviceId: string } }; output: {}; outputFormat: string; status: 202 }
        | {
            input: { param: { serviceId: string } }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { serviceId: string } }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { serviceId: string } }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { serviceId: string } }
            output: Error
            outputFormat: 'json'
            status: 406
          }
        | {
            input: { param: { serviceId: string } }
            output: Error
            outputFormat: 'json'
            status: 409
          }
        | {
            input: { param: { serviceId: string } }
            output: Error
            outputFormat: 'json'
            status: 410
          }
        | {
            input: { param: { serviceId: string } }
            output: Error
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { serviceId: string } }
            output: Error
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { param: { serviceId: string } }
            output: Error
            outputFormat: 'json'
            status: 503
          }
    }
  } & {
    '/services/:serviceId/deploys': {
      $get:
        | {
            input: { param: { serviceId: string } } & {
              query: {
                status?: DeployStatus[] | undefined
                createdBefore?: string | undefined
                createdAfter?: string | undefined
                updatedBefore?: string | undefined
                updatedAfter?: string | undefined
                finishedBefore?: string | undefined
                finishedAfter?: string | undefined
                cursor?: string | undefined
                limit?: number | undefined
              }
            }
            output: DeployList
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { serviceId: string } } & {
              query: {
                status?: DeployStatus[] | undefined
                createdBefore?: string | undefined
                createdAfter?: string | undefined
                updatedBefore?: string | undefined
                updatedAfter?: string | undefined
                finishedBefore?: string | undefined
                finishedAfter?: string | undefined
                cursor?: string | undefined
                limit?: number | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { serviceId: string } } & {
              query: {
                status?: DeployStatus[] | undefined
                createdBefore?: string | undefined
                createdAfter?: string | undefined
                updatedBefore?: string | undefined
                updatedAfter?: string | undefined
                finishedBefore?: string | undefined
                finishedAfter?: string | undefined
                cursor?: string | undefined
                limit?: number | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { serviceId: string } } & {
              query: {
                status?: DeployStatus[] | undefined
                createdBefore?: string | undefined
                createdAfter?: string | undefined
                updatedBefore?: string | undefined
                updatedAfter?: string | undefined
                finishedBefore?: string | undefined
                finishedAfter?: string | undefined
                cursor?: string | undefined
                limit?: number | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { serviceId: string } } & {
              query: {
                status?: DeployStatus[] | undefined
                createdBefore?: string | undefined
                createdAfter?: string | undefined
                updatedBefore?: string | undefined
                updatedAfter?: string | undefined
                finishedBefore?: string | undefined
                finishedAfter?: string | undefined
                cursor?: string | undefined
                limit?: number | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 406
          }
        | {
            input: { param: { serviceId: string } } & {
              query: {
                status?: DeployStatus[] | undefined
                createdBefore?: string | undefined
                createdAfter?: string | undefined
                updatedBefore?: string | undefined
                updatedAfter?: string | undefined
                finishedBefore?: string | undefined
                finishedAfter?: string | undefined
                cursor?: string | undefined
                limit?: number | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 410
          }
        | {
            input: { param: { serviceId: string } } & {
              query: {
                status?: DeployStatus[] | undefined
                createdBefore?: string | undefined
                createdAfter?: string | undefined
                updatedBefore?: string | undefined
                updatedAfter?: string | undefined
                finishedBefore?: string | undefined
                finishedAfter?: string | undefined
                cursor?: string | undefined
                limit?: number | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { serviceId: string } } & {
              query: {
                status?: DeployStatus[] | undefined
                createdBefore?: string | undefined
                createdAfter?: string | undefined
                updatedBefore?: string | undefined
                updatedAfter?: string | undefined
                finishedBefore?: string | undefined
                finishedAfter?: string | undefined
                cursor?: string | undefined
                limit?: number | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { param: { serviceId: string } } & {
              query: {
                status?: DeployStatus[] | undefined
                createdBefore?: string | undefined
                createdAfter?: string | undefined
                updatedBefore?: string | undefined
                updatedAfter?: string | undefined
                finishedBefore?: string | undefined
                finishedAfter?: string | undefined
                cursor?: string | undefined
                limit?: number | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 503
          }
      $post:
        | {
            input: { param: { serviceId: string } } & {
              json: {
                buildId?: string | undefined
                clearCache?: 'clear' | 'do_not_clear' | undefined
                commitId?: string | undefined
                imageUrl?: string | undefined
                deployMode?: DeployMode | undefined
              }
            }
            output: Deploy
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { param: { serviceId: string } } & {
              json: {
                buildId?: string | undefined
                clearCache?: 'clear' | 'do_not_clear' | undefined
                commitId?: string | undefined
                imageUrl?: string | undefined
                deployMode?: DeployMode | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 202
          }
        | {
            input: { param: { serviceId: string } } & {
              json: {
                buildId?: string | undefined
                clearCache?: 'clear' | 'do_not_clear' | undefined
                commitId?: string | undefined
                imageUrl?: string | undefined
                deployMode?: DeployMode | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { serviceId: string } } & {
              json: {
                buildId?: string | undefined
                clearCache?: 'clear' | 'do_not_clear' | undefined
                commitId?: string | undefined
                imageUrl?: string | undefined
                deployMode?: DeployMode | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { serviceId: string } } & {
              json: {
                buildId?: string | undefined
                clearCache?: 'clear' | 'do_not_clear' | undefined
                commitId?: string | undefined
                imageUrl?: string | undefined
                deployMode?: DeployMode | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { serviceId: string } } & {
              json: {
                buildId?: string | undefined
                clearCache?: 'clear' | 'do_not_clear' | undefined
                commitId?: string | undefined
                imageUrl?: string | undefined
                deployMode?: DeployMode | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 406
          }
        | {
            input: { param: { serviceId: string } } & {
              json: {
                buildId?: string | undefined
                clearCache?: 'clear' | 'do_not_clear' | undefined
                commitId?: string | undefined
                imageUrl?: string | undefined
                deployMode?: DeployMode | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 409
          }
        | {
            input: { param: { serviceId: string } } & {
              json: {
                buildId?: string | undefined
                clearCache?: 'clear' | 'do_not_clear' | undefined
                commitId?: string | undefined
                imageUrl?: string | undefined
                deployMode?: DeployMode | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 410
          }
        | {
            input: { param: { serviceId: string } } & {
              json: {
                buildId?: string | undefined
                clearCache?: 'clear' | 'do_not_clear' | undefined
                commitId?: string | undefined
                imageUrl?: string | undefined
                deployMode?: DeployMode | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { serviceId: string } } & {
              json: {
                buildId?: string | undefined
                clearCache?: 'clear' | 'do_not_clear' | undefined
                commitId?: string | undefined
                imageUrl?: string | undefined
                deployMode?: DeployMode | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { param: { serviceId: string } } & {
              json: {
                buildId?: string | undefined
                clearCache?: 'clear' | 'do_not_clear' | undefined
                commitId?: string | undefined
                imageUrl?: string | undefined
                deployMode?: DeployMode | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 503
          }
    }
  } & {
    '/services/:serviceId/deploys/:deployId': {
      $get:
        | {
            input: { param: { serviceId: string; deployId: string } }
            output: Deploy
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { serviceId: string; deployId: string } }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { serviceId: string; deployId: string } }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { serviceId: string; deployId: string } }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { serviceId: string; deployId: string } }
            output: Error
            outputFormat: 'json'
            status: 406
          }
        | {
            input: { param: { serviceId: string; deployId: string } }
            output: Error
            outputFormat: 'json'
            status: 410
          }
        | {
            input: { param: { serviceId: string; deployId: string } }
            output: Error
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { serviceId: string; deployId: string } }
            output: Error
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { param: { serviceId: string; deployId: string } }
            output: Error
            outputFormat: 'json'
            status: 503
          }
    }
  } & {
    '/services/:serviceId/deploys/:deployId/cancel': {
      $post:
        | {
            input: { param: { serviceId: string; deployId: string } }
            output: Deploy
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { serviceId: string; deployId: string } }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { serviceId: string; deployId: string } }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { serviceId: string; deployId: string } }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { serviceId: string; deployId: string } }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { serviceId: string; deployId: string } }
            output: Error
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { serviceId: string; deployId: string } }
            output: Error
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { param: { serviceId: string; deployId: string } }
            output: Error
            outputFormat: 'json'
            status: 503
          }
    }
  } & {
    '/services/:serviceId/rollback': {
      $post:
        | {
            input: { param: { serviceId: string } } & { json: { deployId: string } }
            output: Deploy
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { param: { serviceId: string } } & { json: { deployId: string } }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { serviceId: string } } & { json: { deployId: string } }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { serviceId: string } } & { json: { deployId: string } }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { serviceId: string } } & { json: { deployId: string } }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { serviceId: string } } & { json: { deployId: string } }
            output: Error
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { serviceId: string } } & { json: { deployId: string } }
            output: Error
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { param: { serviceId: string } } & { json: { deployId: string } }
            output: Error
            outputFormat: 'json'
            status: 503
          }
    }
  } & {
    '/services/:serviceId/env-vars': {
      $get:
        | {
            input: { param: { serviceId: string } } & {
              query: { cursor?: string | undefined; limit?: number | undefined }
            }
            output: EnvVarWithCursor[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { serviceId: string } } & {
              query: { cursor?: string | undefined; limit?: number | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { serviceId: string } } & {
              query: { cursor?: string | undefined; limit?: number | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { serviceId: string } } & {
              query: { cursor?: string | undefined; limit?: number | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { serviceId: string } } & {
              query: { cursor?: string | undefined; limit?: number | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 406
          }
        | {
            input: { param: { serviceId: string } } & {
              query: { cursor?: string | undefined; limit?: number | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 410
          }
        | {
            input: { param: { serviceId: string } } & {
              query: { cursor?: string | undefined; limit?: number | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { serviceId: string } } & {
              query: { cursor?: string | undefined; limit?: number | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { param: { serviceId: string } } & {
              query: { cursor?: string | undefined; limit?: number | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 503
          }
      $put:
        | {
            input: { param: { serviceId: string } } & {
              json: ({ key: string; value: string } | { key: string; generateValue: boolean })[]
            }
            output: EnvVarWithCursor[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { serviceId: string } } & {
              json: ({ key: string; value: string } | { key: string; generateValue: boolean })[]
            }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { serviceId: string } } & {
              json: ({ key: string; value: string } | { key: string; generateValue: boolean })[]
            }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { serviceId: string } } & {
              json: ({ key: string; value: string } | { key: string; generateValue: boolean })[]
            }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { serviceId: string } } & {
              json: ({ key: string; value: string } | { key: string; generateValue: boolean })[]
            }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { serviceId: string } } & {
              json: ({ key: string; value: string } | { key: string; generateValue: boolean })[]
            }
            output: Error
            outputFormat: 'json'
            status: 406
          }
        | {
            input: { param: { serviceId: string } } & {
              json: ({ key: string; value: string } | { key: string; generateValue: boolean })[]
            }
            output: Error
            outputFormat: 'json'
            status: 410
          }
        | {
            input: { param: { serviceId: string } } & {
              json: ({ key: string; value: string } | { key: string; generateValue: boolean })[]
            }
            output: Error
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { serviceId: string } } & {
              json: ({ key: string; value: string } | { key: string; generateValue: boolean })[]
            }
            output: Error
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { param: { serviceId: string } } & {
              json: ({ key: string; value: string } | { key: string; generateValue: boolean })[]
            }
            output: Error
            outputFormat: 'json'
            status: 503
          }
    }
  } & {
    '/services/:serviceId/env-vars/:envVarKey': {
      $get:
        | {
            input: { param: { serviceId: string; envVarKey: string } }
            output: EnvVar
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { serviceId: string; envVarKey: string } }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { serviceId: string; envVarKey: string } }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { serviceId: string; envVarKey: string } }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { serviceId: string; envVarKey: string } }
            output: Error
            outputFormat: 'json'
            status: 406
          }
        | {
            input: { param: { serviceId: string; envVarKey: string } }
            output: Error
            outputFormat: 'json'
            status: 410
          }
        | {
            input: { param: { serviceId: string; envVarKey: string } }
            output: Error
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { serviceId: string; envVarKey: string } }
            output: Error
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { param: { serviceId: string; envVarKey: string } }
            output: Error
            outputFormat: 'json'
            status: 503
          }
      $put:
        | {
            input: { param: { serviceId: string; envVarKey: string } } & {
              json: AddUpdateEnvVarInput
            }
            output: EnvVar
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { serviceId: string; envVarKey: string } } & {
              json: AddUpdateEnvVarInput
            }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { serviceId: string; envVarKey: string } } & {
              json: AddUpdateEnvVarInput
            }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { serviceId: string; envVarKey: string } } & {
              json: AddUpdateEnvVarInput
            }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { serviceId: string; envVarKey: string } } & {
              json: AddUpdateEnvVarInput
            }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { serviceId: string; envVarKey: string } } & {
              json: AddUpdateEnvVarInput
            }
            output: Error
            outputFormat: 'json'
            status: 406
          }
        | {
            input: { param: { serviceId: string; envVarKey: string } } & {
              json: AddUpdateEnvVarInput
            }
            output: Error
            outputFormat: 'json'
            status: 410
          }
        | {
            input: { param: { serviceId: string; envVarKey: string } } & {
              json: AddUpdateEnvVarInput
            }
            output: Error
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { serviceId: string; envVarKey: string } } & {
              json: AddUpdateEnvVarInput
            }
            output: Error
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { param: { serviceId: string; envVarKey: string } } & {
              json: AddUpdateEnvVarInput
            }
            output: Error
            outputFormat: 'json'
            status: 503
          }
      $delete:
        | {
            input: { param: { serviceId: string; envVarKey: string } }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { serviceId: string; envVarKey: string } }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { serviceId: string; envVarKey: string } }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { serviceId: string; envVarKey: string } }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { serviceId: string; envVarKey: string } }
            output: Error
            outputFormat: 'json'
            status: 406
          }
        | {
            input: { param: { serviceId: string; envVarKey: string } }
            output: Error
            outputFormat: 'json'
            status: 410
          }
        | {
            input: { param: { serviceId: string; envVarKey: string } }
            output: Error
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { serviceId: string; envVarKey: string } }
            output: Error
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { param: { serviceId: string; envVarKey: string } }
            output: Error
            outputFormat: 'json'
            status: 503
          }
    }
  } & {
    '/services/:serviceId/secret-files': {
      $get:
        | {
            input: { param: { serviceId: string } } & {
              query: { cursor?: string | undefined; limit?: number | undefined }
            }
            output: SecretFileWithCursor[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { serviceId: string } } & {
              query: { cursor?: string | undefined; limit?: number | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { serviceId: string } } & {
              query: { cursor?: string | undefined; limit?: number | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { serviceId: string } } & {
              query: { cursor?: string | undefined; limit?: number | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { serviceId: string } } & {
              query: { cursor?: string | undefined; limit?: number | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 406
          }
        | {
            input: { param: { serviceId: string } } & {
              query: { cursor?: string | undefined; limit?: number | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 410
          }
        | {
            input: { param: { serviceId: string } } & {
              query: { cursor?: string | undefined; limit?: number | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { serviceId: string } } & {
              query: { cursor?: string | undefined; limit?: number | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { param: { serviceId: string } } & {
              query: { cursor?: string | undefined; limit?: number | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 503
          }
      $put:
        | {
            input: { param: { serviceId: string } } & { json: { name: string; content: string }[] }
            output: SecretFileWithCursor[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { serviceId: string } } & { json: { name: string; content: string }[] }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { serviceId: string } } & { json: { name: string; content: string }[] }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { serviceId: string } } & { json: { name: string; content: string }[] }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { serviceId: string } } & { json: { name: string; content: string }[] }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { serviceId: string } } & { json: { name: string; content: string }[] }
            output: Error
            outputFormat: 'json'
            status: 406
          }
        | {
            input: { param: { serviceId: string } } & { json: { name: string; content: string }[] }
            output: Error
            outputFormat: 'json'
            status: 410
          }
        | {
            input: { param: { serviceId: string } } & { json: { name: string; content: string }[] }
            output: Error
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { serviceId: string } } & { json: { name: string; content: string }[] }
            output: Error
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { param: { serviceId: string } } & { json: { name: string; content: string }[] }
            output: Error
            outputFormat: 'json'
            status: 503
          }
    }
  } & {
    '/services/:serviceId/secret-files/:envVarKey': {
      $get:
        | {
            input: { param: { serviceId: string; envVarKey: string } }
            output: SecretFile
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { serviceId: string; envVarKey: string } }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { serviceId: string; envVarKey: string } }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { serviceId: string; envVarKey: string } }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { serviceId: string; envVarKey: string } }
            output: Error
            outputFormat: 'json'
            status: 406
          }
        | {
            input: { param: { serviceId: string; envVarKey: string } }
            output: Error
            outputFormat: 'json'
            status: 410
          }
        | {
            input: { param: { serviceId: string; envVarKey: string } }
            output: Error
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { serviceId: string; envVarKey: string } }
            output: Error
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { param: { serviceId: string; envVarKey: string } }
            output: Error
            outputFormat: 'json'
            status: 503
          }
      $put:
        | {
            input: { param: { serviceId: string; envVarKey: string } } & {
              json: { content?: string | undefined }
            }
            output: SecretFile
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { param: { serviceId: string; envVarKey: string } } & {
              json: { content?: string | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { serviceId: string; envVarKey: string } } & {
              json: { content?: string | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { serviceId: string; envVarKey: string } } & {
              json: { content?: string | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { serviceId: string; envVarKey: string } } & {
              json: { content?: string | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { serviceId: string; envVarKey: string } } & {
              json: { content?: string | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 406
          }
        | {
            input: { param: { serviceId: string; envVarKey: string } } & {
              json: { content?: string | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 410
          }
        | {
            input: { param: { serviceId: string; envVarKey: string } } & {
              json: { content?: string | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { serviceId: string; envVarKey: string } } & {
              json: { content?: string | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { param: { serviceId: string; envVarKey: string } } & {
              json: { content?: string | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 503
          }
      $delete:
        | {
            input: { param: { serviceId: string; envVarKey: string } }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { serviceId: string; envVarKey: string } }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { serviceId: string; envVarKey: string } }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { serviceId: string; envVarKey: string } }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { serviceId: string; envVarKey: string } }
            output: Error
            outputFormat: 'json'
            status: 406
          }
        | {
            input: { param: { serviceId: string; envVarKey: string } }
            output: Error
            outputFormat: 'json'
            status: 410
          }
        | {
            input: { param: { serviceId: string; envVarKey: string } }
            output: Error
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { serviceId: string; envVarKey: string } }
            output: Error
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { param: { serviceId: string; envVarKey: string } }
            output: Error
            outputFormat: 'json'
            status: 503
          }
    }
  } & {
    '/services/:serviceId/events': {
      $get:
        | {
            input: { param: { serviceId: string } } & {
              query: {
                type?:
                  | 'artifact_fetch_failed'
                  | 'artifact_source_changed'
                  | 'autoscaling_config_changed'
                  | 'autoscaling_ended'
                  | 'autoscaling_started'
                  | 'branch_deleted'
                  | 'build_ended'
                  | 'build_started'
                  | 'commit_ignored'
                  | 'cron_job_run_ended'
                  | 'cron_job_run_started'
                  | 'deploy_ended'
                  | 'deploy_started'
                  | 'disk_created'
                  | 'disk_updated'
                  | 'disk_deleted'
                  | 'disk_snapshot_restored'
                  | 'service_disk_usage_high'
                  | 'service_disk_usage_recovered'
                  | 'image_pull_failed'
                  | 'initial_deploy_hook_ended'
                  | 'initial_deploy_hook_started'
                  | 'instance_count_changed'
                  | 'job_run_ended'
                  | 'maintenance_mode_enabled'
                  | 'maintenance_mode_uri_updated'
                  | 'maintenance_ended'
                  | 'maintenance_started'
                  | 'pipeline_minutes_exhausted'
                  | 'plan_changed'
                  | 'pre_deploy_ended'
                  | 'pre_deploy_started'
                  | 'server_available'
                  | 'server_failed'
                  | 'server_hardware_failure'
                  | 'server_restarted'
                  | 'service_resumed'
                  | 'service_suspended'
                  | 'suspender_added'
                  | 'suspender_removed'
                  | 'zero_downtime_redeploy_ended'
                  | 'zero_downtime_redeploy_started'
                  | 'auto_deploy_disabled'
                  | 'auto_deploy_enabled'
                  | undefined
                startTime?: string | undefined
                endTime?: string | undefined
                cursor?: string | undefined
                limit?: number | undefined
              }
            }
            output: ServiceEventWithCursor[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { serviceId: string } } & {
              query: {
                type?:
                  | 'artifact_fetch_failed'
                  | 'artifact_source_changed'
                  | 'autoscaling_config_changed'
                  | 'autoscaling_ended'
                  | 'autoscaling_started'
                  | 'branch_deleted'
                  | 'build_ended'
                  | 'build_started'
                  | 'commit_ignored'
                  | 'cron_job_run_ended'
                  | 'cron_job_run_started'
                  | 'deploy_ended'
                  | 'deploy_started'
                  | 'disk_created'
                  | 'disk_updated'
                  | 'disk_deleted'
                  | 'disk_snapshot_restored'
                  | 'service_disk_usage_high'
                  | 'service_disk_usage_recovered'
                  | 'image_pull_failed'
                  | 'initial_deploy_hook_ended'
                  | 'initial_deploy_hook_started'
                  | 'instance_count_changed'
                  | 'job_run_ended'
                  | 'maintenance_mode_enabled'
                  | 'maintenance_mode_uri_updated'
                  | 'maintenance_ended'
                  | 'maintenance_started'
                  | 'pipeline_minutes_exhausted'
                  | 'plan_changed'
                  | 'pre_deploy_ended'
                  | 'pre_deploy_started'
                  | 'server_available'
                  | 'server_failed'
                  | 'server_hardware_failure'
                  | 'server_restarted'
                  | 'service_resumed'
                  | 'service_suspended'
                  | 'suspender_added'
                  | 'suspender_removed'
                  | 'zero_downtime_redeploy_ended'
                  | 'zero_downtime_redeploy_started'
                  | 'auto_deploy_disabled'
                  | 'auto_deploy_enabled'
                  | undefined
                startTime?: string | undefined
                endTime?: string | undefined
                cursor?: string | undefined
                limit?: number | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { serviceId: string } } & {
              query: {
                type?:
                  | 'artifact_fetch_failed'
                  | 'artifact_source_changed'
                  | 'autoscaling_config_changed'
                  | 'autoscaling_ended'
                  | 'autoscaling_started'
                  | 'branch_deleted'
                  | 'build_ended'
                  | 'build_started'
                  | 'commit_ignored'
                  | 'cron_job_run_ended'
                  | 'cron_job_run_started'
                  | 'deploy_ended'
                  | 'deploy_started'
                  | 'disk_created'
                  | 'disk_updated'
                  | 'disk_deleted'
                  | 'disk_snapshot_restored'
                  | 'service_disk_usage_high'
                  | 'service_disk_usage_recovered'
                  | 'image_pull_failed'
                  | 'initial_deploy_hook_ended'
                  | 'initial_deploy_hook_started'
                  | 'instance_count_changed'
                  | 'job_run_ended'
                  | 'maintenance_mode_enabled'
                  | 'maintenance_mode_uri_updated'
                  | 'maintenance_ended'
                  | 'maintenance_started'
                  | 'pipeline_minutes_exhausted'
                  | 'plan_changed'
                  | 'pre_deploy_ended'
                  | 'pre_deploy_started'
                  | 'server_available'
                  | 'server_failed'
                  | 'server_hardware_failure'
                  | 'server_restarted'
                  | 'service_resumed'
                  | 'service_suspended'
                  | 'suspender_added'
                  | 'suspender_removed'
                  | 'zero_downtime_redeploy_ended'
                  | 'zero_downtime_redeploy_started'
                  | 'auto_deploy_disabled'
                  | 'auto_deploy_enabled'
                  | undefined
                startTime?: string | undefined
                endTime?: string | undefined
                cursor?: string | undefined
                limit?: number | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { serviceId: string } } & {
              query: {
                type?:
                  | 'artifact_fetch_failed'
                  | 'artifact_source_changed'
                  | 'autoscaling_config_changed'
                  | 'autoscaling_ended'
                  | 'autoscaling_started'
                  | 'branch_deleted'
                  | 'build_ended'
                  | 'build_started'
                  | 'commit_ignored'
                  | 'cron_job_run_ended'
                  | 'cron_job_run_started'
                  | 'deploy_ended'
                  | 'deploy_started'
                  | 'disk_created'
                  | 'disk_updated'
                  | 'disk_deleted'
                  | 'disk_snapshot_restored'
                  | 'service_disk_usage_high'
                  | 'service_disk_usage_recovered'
                  | 'image_pull_failed'
                  | 'initial_deploy_hook_ended'
                  | 'initial_deploy_hook_started'
                  | 'instance_count_changed'
                  | 'job_run_ended'
                  | 'maintenance_mode_enabled'
                  | 'maintenance_mode_uri_updated'
                  | 'maintenance_ended'
                  | 'maintenance_started'
                  | 'pipeline_minutes_exhausted'
                  | 'plan_changed'
                  | 'pre_deploy_ended'
                  | 'pre_deploy_started'
                  | 'server_available'
                  | 'server_failed'
                  | 'server_hardware_failure'
                  | 'server_restarted'
                  | 'service_resumed'
                  | 'service_suspended'
                  | 'suspender_added'
                  | 'suspender_removed'
                  | 'zero_downtime_redeploy_ended'
                  | 'zero_downtime_redeploy_started'
                  | 'auto_deploy_disabled'
                  | 'auto_deploy_enabled'
                  | undefined
                startTime?: string | undefined
                endTime?: string | undefined
                cursor?: string | undefined
                limit?: number | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { serviceId: string } } & {
              query: {
                type?:
                  | 'artifact_fetch_failed'
                  | 'artifact_source_changed'
                  | 'autoscaling_config_changed'
                  | 'autoscaling_ended'
                  | 'autoscaling_started'
                  | 'branch_deleted'
                  | 'build_ended'
                  | 'build_started'
                  | 'commit_ignored'
                  | 'cron_job_run_ended'
                  | 'cron_job_run_started'
                  | 'deploy_ended'
                  | 'deploy_started'
                  | 'disk_created'
                  | 'disk_updated'
                  | 'disk_deleted'
                  | 'disk_snapshot_restored'
                  | 'service_disk_usage_high'
                  | 'service_disk_usage_recovered'
                  | 'image_pull_failed'
                  | 'initial_deploy_hook_ended'
                  | 'initial_deploy_hook_started'
                  | 'instance_count_changed'
                  | 'job_run_ended'
                  | 'maintenance_mode_enabled'
                  | 'maintenance_mode_uri_updated'
                  | 'maintenance_ended'
                  | 'maintenance_started'
                  | 'pipeline_minutes_exhausted'
                  | 'plan_changed'
                  | 'pre_deploy_ended'
                  | 'pre_deploy_started'
                  | 'server_available'
                  | 'server_failed'
                  | 'server_hardware_failure'
                  | 'server_restarted'
                  | 'service_resumed'
                  | 'service_suspended'
                  | 'suspender_added'
                  | 'suspender_removed'
                  | 'zero_downtime_redeploy_ended'
                  | 'zero_downtime_redeploy_started'
                  | 'auto_deploy_disabled'
                  | 'auto_deploy_enabled'
                  | undefined
                startTime?: string | undefined
                endTime?: string | undefined
                cursor?: string | undefined
                limit?: number | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { serviceId: string } } & {
              query: {
                type?:
                  | 'artifact_fetch_failed'
                  | 'artifact_source_changed'
                  | 'autoscaling_config_changed'
                  | 'autoscaling_ended'
                  | 'autoscaling_started'
                  | 'branch_deleted'
                  | 'build_ended'
                  | 'build_started'
                  | 'commit_ignored'
                  | 'cron_job_run_ended'
                  | 'cron_job_run_started'
                  | 'deploy_ended'
                  | 'deploy_started'
                  | 'disk_created'
                  | 'disk_updated'
                  | 'disk_deleted'
                  | 'disk_snapshot_restored'
                  | 'service_disk_usage_high'
                  | 'service_disk_usage_recovered'
                  | 'image_pull_failed'
                  | 'initial_deploy_hook_ended'
                  | 'initial_deploy_hook_started'
                  | 'instance_count_changed'
                  | 'job_run_ended'
                  | 'maintenance_mode_enabled'
                  | 'maintenance_mode_uri_updated'
                  | 'maintenance_ended'
                  | 'maintenance_started'
                  | 'pipeline_minutes_exhausted'
                  | 'plan_changed'
                  | 'pre_deploy_ended'
                  | 'pre_deploy_started'
                  | 'server_available'
                  | 'server_failed'
                  | 'server_hardware_failure'
                  | 'server_restarted'
                  | 'service_resumed'
                  | 'service_suspended'
                  | 'suspender_added'
                  | 'suspender_removed'
                  | 'zero_downtime_redeploy_ended'
                  | 'zero_downtime_redeploy_started'
                  | 'auto_deploy_disabled'
                  | 'auto_deploy_enabled'
                  | undefined
                startTime?: string | undefined
                endTime?: string | undefined
                cursor?: string | undefined
                limit?: number | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { param: { serviceId: string } } & {
              query: {
                type?:
                  | 'artifact_fetch_failed'
                  | 'artifact_source_changed'
                  | 'autoscaling_config_changed'
                  | 'autoscaling_ended'
                  | 'autoscaling_started'
                  | 'branch_deleted'
                  | 'build_ended'
                  | 'build_started'
                  | 'commit_ignored'
                  | 'cron_job_run_ended'
                  | 'cron_job_run_started'
                  | 'deploy_ended'
                  | 'deploy_started'
                  | 'disk_created'
                  | 'disk_updated'
                  | 'disk_deleted'
                  | 'disk_snapshot_restored'
                  | 'service_disk_usage_high'
                  | 'service_disk_usage_recovered'
                  | 'image_pull_failed'
                  | 'initial_deploy_hook_ended'
                  | 'initial_deploy_hook_started'
                  | 'instance_count_changed'
                  | 'job_run_ended'
                  | 'maintenance_mode_enabled'
                  | 'maintenance_mode_uri_updated'
                  | 'maintenance_ended'
                  | 'maintenance_started'
                  | 'pipeline_minutes_exhausted'
                  | 'plan_changed'
                  | 'pre_deploy_ended'
                  | 'pre_deploy_started'
                  | 'server_available'
                  | 'server_failed'
                  | 'server_hardware_failure'
                  | 'server_restarted'
                  | 'service_resumed'
                  | 'service_suspended'
                  | 'suspender_added'
                  | 'suspender_removed'
                  | 'zero_downtime_redeploy_ended'
                  | 'zero_downtime_redeploy_started'
                  | 'auto_deploy_disabled'
                  | 'auto_deploy_enabled'
                  | undefined
                startTime?: string | undefined
                endTime?: string | undefined
                cursor?: string | undefined
                limit?: number | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 503
          }
    }
  } & {
    '/services/:serviceId/headers': {
      $get:
        | {
            input: { param: { serviceId: string } } & {
              query: {
                path?: string[] | undefined
                name?: string[] | undefined
                value?: string[] | undefined
                cursor?: string | undefined
                limit?: number | undefined
              }
            }
            output: HeaderWithCursor[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { serviceId: string } } & {
              query: {
                path?: string[] | undefined
                name?: string[] | undefined
                value?: string[] | undefined
                cursor?: string | undefined
                limit?: number | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { serviceId: string } } & {
              query: {
                path?: string[] | undefined
                name?: string[] | undefined
                value?: string[] | undefined
                cursor?: string | undefined
                limit?: number | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { serviceId: string } } & {
              query: {
                path?: string[] | undefined
                name?: string[] | undefined
                value?: string[] | undefined
                cursor?: string | undefined
                limit?: number | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { serviceId: string } } & {
              query: {
                path?: string[] | undefined
                name?: string[] | undefined
                value?: string[] | undefined
                cursor?: string | undefined
                limit?: number | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 406
          }
        | {
            input: { param: { serviceId: string } } & {
              query: {
                path?: string[] | undefined
                name?: string[] | undefined
                value?: string[] | undefined
                cursor?: string | undefined
                limit?: number | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 410
          }
        | {
            input: { param: { serviceId: string } } & {
              query: {
                path?: string[] | undefined
                name?: string[] | undefined
                value?: string[] | undefined
                cursor?: string | undefined
                limit?: number | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { serviceId: string } } & {
              query: {
                path?: string[] | undefined
                name?: string[] | undefined
                value?: string[] | undefined
                cursor?: string | undefined
                limit?: number | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { param: { serviceId: string } } & {
              query: {
                path?: string[] | undefined
                name?: string[] | undefined
                value?: string[] | undefined
                cursor?: string | undefined
                limit?: number | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 503
          }
      $post:
        | {
            input: { param: { serviceId: string } } & { json: HeaderInput }
            output: { headers?: Header | undefined }
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { param: { serviceId: string } } & { json: HeaderInput }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { serviceId: string } } & { json: HeaderInput }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { serviceId: string } } & { json: HeaderInput }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { serviceId: string } } & { json: HeaderInput }
            output: Error
            outputFormat: 'json'
            status: 406
          }
        | {
            input: { param: { serviceId: string } } & { json: HeaderInput }
            output: Error
            outputFormat: 'json'
            status: 410
          }
        | {
            input: { param: { serviceId: string } } & { json: HeaderInput }
            output: Error
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { serviceId: string } } & { json: HeaderInput }
            output: Error
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { param: { serviceId: string } } & { json: HeaderInput }
            output: Error
            outputFormat: 'json'
            status: 503
          }
      $put:
        | {
            input: { param: { serviceId: string } } & { json: HeaderInput[] }
            output: Header[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { serviceId: string } } & { json: HeaderInput[] }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { serviceId: string } } & { json: HeaderInput[] }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { serviceId: string } } & { json: HeaderInput[] }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { serviceId: string } } & { json: HeaderInput[] }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { serviceId: string } } & { json: HeaderInput[] }
            output: Error
            outputFormat: 'json'
            status: 406
          }
        | {
            input: { param: { serviceId: string } } & { json: HeaderInput[] }
            output: Error
            outputFormat: 'json'
            status: 410
          }
        | {
            input: { param: { serviceId: string } } & { json: HeaderInput[] }
            output: Error
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { serviceId: string } } & { json: HeaderInput[] }
            output: Error
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { param: { serviceId: string } } & { json: HeaderInput[] }
            output: Error
            outputFormat: 'json'
            status: 503
          }
    }
  } & {
    '/services/:serviceId/headers/:headerId': {
      $delete:
        | {
            input: { param: { serviceId: string; headerId: string } }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { serviceId: string; headerId: string } }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { serviceId: string; headerId: string } }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { serviceId: string; headerId: string } }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { serviceId: string; headerId: string } }
            output: Error
            outputFormat: 'json'
            status: 406
          }
        | {
            input: { param: { serviceId: string; headerId: string } }
            output: Error
            outputFormat: 'json'
            status: 410
          }
        | {
            input: { param: { serviceId: string; headerId: string } }
            output: Error
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { serviceId: string; headerId: string } }
            output: Error
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { param: { serviceId: string; headerId: string } }
            output: Error
            outputFormat: 'json'
            status: 503
          }
    }
  } & {
    '/services/:serviceId/routes': {
      $get:
        | {
            input: { param: { serviceId: string } } & {
              query: {
                type?: ('redirect' | 'rewrite')[] | undefined
                source?: string[] | undefined
                destination?: string[] | undefined
                cursor?: string | undefined
                limit?: number | undefined
              }
            }
            output: RouteWithCursor[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { serviceId: string } } & {
              query: {
                type?: ('redirect' | 'rewrite')[] | undefined
                source?: string[] | undefined
                destination?: string[] | undefined
                cursor?: string | undefined
                limit?: number | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { serviceId: string } } & {
              query: {
                type?: ('redirect' | 'rewrite')[] | undefined
                source?: string[] | undefined
                destination?: string[] | undefined
                cursor?: string | undefined
                limit?: number | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { serviceId: string } } & {
              query: {
                type?: ('redirect' | 'rewrite')[] | undefined
                source?: string[] | undefined
                destination?: string[] | undefined
                cursor?: string | undefined
                limit?: number | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { serviceId: string } } & {
              query: {
                type?: ('redirect' | 'rewrite')[] | undefined
                source?: string[] | undefined
                destination?: string[] | undefined
                cursor?: string | undefined
                limit?: number | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 406
          }
        | {
            input: { param: { serviceId: string } } & {
              query: {
                type?: ('redirect' | 'rewrite')[] | undefined
                source?: string[] | undefined
                destination?: string[] | undefined
                cursor?: string | undefined
                limit?: number | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 410
          }
        | {
            input: { param: { serviceId: string } } & {
              query: {
                type?: ('redirect' | 'rewrite')[] | undefined
                source?: string[] | undefined
                destination?: string[] | undefined
                cursor?: string | undefined
                limit?: number | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { serviceId: string } } & {
              query: {
                type?: ('redirect' | 'rewrite')[] | undefined
                source?: string[] | undefined
                destination?: string[] | undefined
                cursor?: string | undefined
                limit?: number | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { param: { serviceId: string } } & {
              query: {
                type?: ('redirect' | 'rewrite')[] | undefined
                source?: string[] | undefined
                destination?: string[] | undefined
                cursor?: string | undefined
                limit?: number | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 503
          }
      $post:
        | {
            input: { param: { serviceId: string } } & { json: RoutePost }
            output: Route
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { param: { serviceId: string } } & { json: RoutePost }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { serviceId: string } } & { json: RoutePost }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { serviceId: string } } & { json: RoutePost }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { serviceId: string } } & { json: RoutePost }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { serviceId: string } } & { json: RoutePost }
            output: Error
            outputFormat: 'json'
            status: 406
          }
        | {
            input: { param: { serviceId: string } } & { json: RoutePost }
            output: Error
            outputFormat: 'json'
            status: 410
          }
        | {
            input: { param: { serviceId: string } } & { json: RoutePost }
            output: Error
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { serviceId: string } } & { json: RoutePost }
            output: Error
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { param: { serviceId: string } } & { json: RoutePost }
            output: Error
            outputFormat: 'json'
            status: 503
          }
      $put:
        | {
            input: { param: { serviceId: string } } & { json: RoutePut[] }
            output: Route[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { serviceId: string } } & { json: RoutePut[] }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { serviceId: string } } & { json: RoutePut[] }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { serviceId: string } } & { json: RoutePut[] }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { serviceId: string } } & { json: RoutePut[] }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { serviceId: string } } & { json: RoutePut[] }
            output: Error
            outputFormat: 'json'
            status: 406
          }
        | {
            input: { param: { serviceId: string } } & { json: RoutePut[] }
            output: Error
            outputFormat: 'json'
            status: 410
          }
        | {
            input: { param: { serviceId: string } } & { json: RoutePut[] }
            output: Error
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { serviceId: string } } & { json: RoutePut[] }
            output: Error
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { param: { serviceId: string } } & { json: RoutePut[] }
            output: Error
            outputFormat: 'json'
            status: 503
          }
    }
  } & {
    '/services/:serviceId/routes/:routeId': {
      $patch:
        | {
            input: { param: { serviceId: string; routeId: string } } & { json: RoutePatch }
            output: { headers?: Route | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { serviceId: string; routeId: string } } & { json: RoutePatch }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { serviceId: string; routeId: string } } & { json: RoutePatch }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { serviceId: string; routeId: string } } & { json: RoutePatch }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { serviceId: string; routeId: string } } & { json: RoutePatch }
            output: Error
            outputFormat: 'json'
            status: 406
          }
        | {
            input: { param: { serviceId: string; routeId: string } } & { json: RoutePatch }
            output: Error
            outputFormat: 'json'
            status: 410
          }
        | {
            input: { param: { serviceId: string; routeId: string } } & { json: RoutePatch }
            output: Error
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { serviceId: string; routeId: string } } & { json: RoutePatch }
            output: Error
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { param: { serviceId: string; routeId: string } } & { json: RoutePatch }
            output: Error
            outputFormat: 'json'
            status: 503
          }
      $delete:
        | {
            input: { param: { serviceId: string; routeId: string } }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { serviceId: string; routeId: string } }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { serviceId: string; routeId: string } }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { serviceId: string; routeId: string } }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { serviceId: string; routeId: string } }
            output: Error
            outputFormat: 'json'
            status: 406
          }
        | {
            input: { param: { serviceId: string; routeId: string } }
            output: Error
            outputFormat: 'json'
            status: 410
          }
        | {
            input: { param: { serviceId: string; routeId: string } }
            output: Error
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { serviceId: string; routeId: string } }
            output: Error
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { param: { serviceId: string; routeId: string } }
            output: Error
            outputFormat: 'json'
            status: 503
          }
    }
  } & {
    '/services/:serviceId/custom-domains': {
      $get:
        | {
            input: { param: { serviceId: string } } & {
              query: {
                cursor?: string | undefined
                limit?: number | undefined
                name?: string[] | undefined
                domainType?: 'apex' | 'subdomain' | undefined
                verificationStatus?: 'verified' | 'unverified' | undefined
                createdBefore?: string | undefined
                createdAfter?: string | undefined
              }
            }
            output: CustomDomainWithCursor[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { serviceId: string } } & {
              query: {
                cursor?: string | undefined
                limit?: number | undefined
                name?: string[] | undefined
                domainType?: 'apex' | 'subdomain' | undefined
                verificationStatus?: 'verified' | 'unverified' | undefined
                createdBefore?: string | undefined
                createdAfter?: string | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { serviceId: string } } & {
              query: {
                cursor?: string | undefined
                limit?: number | undefined
                name?: string[] | undefined
                domainType?: 'apex' | 'subdomain' | undefined
                verificationStatus?: 'verified' | 'unverified' | undefined
                createdBefore?: string | undefined
                createdAfter?: string | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { serviceId: string } } & {
              query: {
                cursor?: string | undefined
                limit?: number | undefined
                name?: string[] | undefined
                domainType?: 'apex' | 'subdomain' | undefined
                verificationStatus?: 'verified' | 'unverified' | undefined
                createdBefore?: string | undefined
                createdAfter?: string | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { serviceId: string } } & {
              query: {
                cursor?: string | undefined
                limit?: number | undefined
                name?: string[] | undefined
                domainType?: 'apex' | 'subdomain' | undefined
                verificationStatus?: 'verified' | 'unverified' | undefined
                createdBefore?: string | undefined
                createdAfter?: string | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { serviceId: string } } & {
              query: {
                cursor?: string | undefined
                limit?: number | undefined
                name?: string[] | undefined
                domainType?: 'apex' | 'subdomain' | undefined
                verificationStatus?: 'verified' | 'unverified' | undefined
                createdBefore?: string | undefined
                createdAfter?: string | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 406
          }
        | {
            input: { param: { serviceId: string } } & {
              query: {
                cursor?: string | undefined
                limit?: number | undefined
                name?: string[] | undefined
                domainType?: 'apex' | 'subdomain' | undefined
                verificationStatus?: 'verified' | 'unverified' | undefined
                createdBefore?: string | undefined
                createdAfter?: string | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 410
          }
        | {
            input: { param: { serviceId: string } } & {
              query: {
                cursor?: string | undefined
                limit?: number | undefined
                name?: string[] | undefined
                domainType?: 'apex' | 'subdomain' | undefined
                verificationStatus?: 'verified' | 'unverified' | undefined
                createdBefore?: string | undefined
                createdAfter?: string | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { serviceId: string } } & {
              query: {
                cursor?: string | undefined
                limit?: number | undefined
                name?: string[] | undefined
                domainType?: 'apex' | 'subdomain' | undefined
                verificationStatus?: 'verified' | 'unverified' | undefined
                createdBefore?: string | undefined
                createdAfter?: string | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { param: { serviceId: string } } & {
              query: {
                cursor?: string | undefined
                limit?: number | undefined
                name?: string[] | undefined
                domainType?: 'apex' | 'subdomain' | undefined
                verificationStatus?: 'verified' | 'unverified' | undefined
                createdBefore?: string | undefined
                createdAfter?: string | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 503
          }
      $post:
        | {
            input: { param: { serviceId: string } } & { json: { name: string } }
            output: CustomDomain[]
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { param: { serviceId: string } } & { json: { name: string } }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { serviceId: string } } & { json: { name: string } }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { serviceId: string } } & { json: { name: string } }
            output: Error
            outputFormat: 'json'
            status: 402
          }
        | {
            input: { param: { serviceId: string } } & { json: { name: string } }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { serviceId: string } } & { json: { name: string } }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { serviceId: string } } & { json: { name: string } }
            output: Error
            outputFormat: 'json'
            status: 406
          }
        | {
            input: { param: { serviceId: string } } & { json: { name: string } }
            output: Error
            outputFormat: 'json'
            status: 409
          }
        | {
            input: { param: { serviceId: string } } & { json: { name: string } }
            output: Error
            outputFormat: 'json'
            status: 410
          }
        | {
            input: { param: { serviceId: string } } & { json: { name: string } }
            output: Error
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { serviceId: string } } & { json: { name: string } }
            output: Error
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { param: { serviceId: string } } & { json: { name: string } }
            output: Error
            outputFormat: 'json'
            status: 503
          }
    }
  } & {
    '/services/:serviceId/custom-domains/:customDomainNameOrID': {
      $get:
        | {
            input: { param: { serviceId: string; customDomainNameOrID: string } }
            output: CustomDomain
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { serviceId: string; customDomainNameOrID: string } }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { serviceId: string; customDomainNameOrID: string } }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { serviceId: string; customDomainNameOrID: string } }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { serviceId: string; customDomainNameOrID: string } }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { serviceId: string; customDomainNameOrID: string } }
            output: Error
            outputFormat: 'json'
            status: 406
          }
        | {
            input: { param: { serviceId: string; customDomainNameOrID: string } }
            output: Error
            outputFormat: 'json'
            status: 410
          }
        | {
            input: { param: { serviceId: string; customDomainNameOrID: string } }
            output: Error
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { serviceId: string; customDomainNameOrID: string } }
            output: Error
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { param: { serviceId: string; customDomainNameOrID: string } }
            output: Error
            outputFormat: 'json'
            status: 503
          }
      $delete:
        | {
            input: { param: { serviceId: string; customDomainNameOrID: string } }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { serviceId: string; customDomainNameOrID: string } }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { serviceId: string; customDomainNameOrID: string } }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { serviceId: string; customDomainNameOrID: string } }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { serviceId: string; customDomainNameOrID: string } }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { serviceId: string; customDomainNameOrID: string } }
            output: Error
            outputFormat: 'json'
            status: 406
          }
        | {
            input: { param: { serviceId: string; customDomainNameOrID: string } }
            output: Error
            outputFormat: 'json'
            status: 410
          }
        | {
            input: { param: { serviceId: string; customDomainNameOrID: string } }
            output: Error
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { serviceId: string; customDomainNameOrID: string } }
            output: Error
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { param: { serviceId: string; customDomainNameOrID: string } }
            output: Error
            outputFormat: 'json'
            status: 503
          }
    }
  } & {
    '/services/:serviceId/custom-domains/:customDomainNameOrID/verify': {
      $post:
        | {
            input: { param: { serviceId: string; customDomainNameOrID: string } }
            output: {}
            outputFormat: string
            status: 202
          }
        | {
            input: { param: { serviceId: string; customDomainNameOrID: string } }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { serviceId: string; customDomainNameOrID: string } }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { serviceId: string; customDomainNameOrID: string } }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { serviceId: string; customDomainNameOrID: string } }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { serviceId: string; customDomainNameOrID: string } }
            output: Error
            outputFormat: 'json'
            status: 406
          }
        | {
            input: { param: { serviceId: string; customDomainNameOrID: string } }
            output: Error
            outputFormat: 'json'
            status: 410
          }
        | {
            input: { param: { serviceId: string; customDomainNameOrID: string } }
            output: Error
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { serviceId: string; customDomainNameOrID: string } }
            output: Error
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { param: { serviceId: string; customDomainNameOrID: string } }
            output: Error
            outputFormat: 'json'
            status: 503
          }
    }
  } & {
    '/services/:serviceId/suspend': {
      $post:
        | { input: { param: { serviceId: string } }; output: {}; outputFormat: string; status: 202 }
        | {
            input: { param: { serviceId: string } }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { serviceId: string } }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { serviceId: string } }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { serviceId: string } }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { serviceId: string } }
            output: Error
            outputFormat: 'json'
            status: 406
          }
        | {
            input: { param: { serviceId: string } }
            output: Error
            outputFormat: 'json'
            status: 410
          }
        | {
            input: { param: { serviceId: string } }
            output: Error
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { serviceId: string } }
            output: Error
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { param: { serviceId: string } }
            output: Error
            outputFormat: 'json'
            status: 503
          }
    }
  } & {
    '/services/:serviceId/resume': {
      $post:
        | { input: { param: { serviceId: string } }; output: {}; outputFormat: string; status: 202 }
        | {
            input: { param: { serviceId: string } }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { serviceId: string } }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { serviceId: string } }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { serviceId: string } }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { serviceId: string } }
            output: Error
            outputFormat: 'json'
            status: 406
          }
        | {
            input: { param: { serviceId: string } }
            output: Error
            outputFormat: 'json'
            status: 410
          }
        | {
            input: { param: { serviceId: string } }
            output: Error
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { serviceId: string } }
            output: Error
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { param: { serviceId: string } }
            output: Error
            outputFormat: 'json'
            status: 503
          }
    }
  } & {
    '/services/:serviceId/restart': {
      $post:
        | { input: { param: { serviceId: string } }; output: {}; outputFormat: string; status: 200 }
        | {
            input: { param: { serviceId: string } }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { serviceId: string } }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { serviceId: string } }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { serviceId: string } }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { serviceId: string } }
            output: Error
            outputFormat: 'json'
            status: 406
          }
        | {
            input: { param: { serviceId: string } }
            output: Error
            outputFormat: 'json'
            status: 410
          }
        | {
            input: { param: { serviceId: string } }
            output: Error
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { serviceId: string } }
            output: Error
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { param: { serviceId: string } }
            output: Error
            outputFormat: 'json'
            status: 503
          }
    }
  } & {
    '/services/:serviceId/scale': {
      $post:
        | {
            input: { param: { serviceId: string } } & { json: { numInstances: number } }
            output: {}
            outputFormat: string
            status: 202
          }
        | {
            input: { param: { serviceId: string } } & { json: { numInstances: number } }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { serviceId: string } } & { json: { numInstances: number } }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { serviceId: string } } & { json: { numInstances: number } }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { serviceId: string } } & { json: { numInstances: number } }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { serviceId: string } } & { json: { numInstances: number } }
            output: Error
            outputFormat: 'json'
            status: 406
          }
        | {
            input: { param: { serviceId: string } } & { json: { numInstances: number } }
            output: Error
            outputFormat: 'json'
            status: 410
          }
        | {
            input: { param: { serviceId: string } } & { json: { numInstances: number } }
            output: Error
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { serviceId: string } } & { json: { numInstances: number } }
            output: Error
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { param: { serviceId: string } } & { json: { numInstances: number } }
            output: Error
            outputFormat: 'json'
            status: 503
          }
    }
  } & {
    '/services/:serviceId/autoscaling': {
      $put:
        | {
            input: { param: { serviceId: string } } & {
              json: {
                enabled: boolean
                min: number
                max: number
                criteria: {
                  cpu: { enabled: boolean; percentage: number }
                  memory: { enabled: boolean; percentage: number }
                }
              }
            }
            output: {
              enabled: boolean
              min: number
              max: number
              criteria: {
                cpu: { enabled: boolean; percentage: number }
                memory: { enabled: boolean; percentage: number }
              }
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { serviceId: string } } & {
              json: {
                enabled: boolean
                min: number
                max: number
                criteria: {
                  cpu: { enabled: boolean; percentage: number }
                  memory: { enabled: boolean; percentage: number }
                }
              }
            }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { serviceId: string } } & {
              json: {
                enabled: boolean
                min: number
                max: number
                criteria: {
                  cpu: { enabled: boolean; percentage: number }
                  memory: { enabled: boolean; percentage: number }
                }
              }
            }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { serviceId: string } } & {
              json: {
                enabled: boolean
                min: number
                max: number
                criteria: {
                  cpu: { enabled: boolean; percentage: number }
                  memory: { enabled: boolean; percentage: number }
                }
              }
            }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { serviceId: string } } & {
              json: {
                enabled: boolean
                min: number
                max: number
                criteria: {
                  cpu: { enabled: boolean; percentage: number }
                  memory: { enabled: boolean; percentage: number }
                }
              }
            }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { serviceId: string } } & {
              json: {
                enabled: boolean
                min: number
                max: number
                criteria: {
                  cpu: { enabled: boolean; percentage: number }
                  memory: { enabled: boolean; percentage: number }
                }
              }
            }
            output: Error
            outputFormat: 'json'
            status: 406
          }
        | {
            input: { param: { serviceId: string } } & {
              json: {
                enabled: boolean
                min: number
                max: number
                criteria: {
                  cpu: { enabled: boolean; percentage: number }
                  memory: { enabled: boolean; percentage: number }
                }
              }
            }
            output: Error
            outputFormat: 'json'
            status: 410
          }
        | {
            input: { param: { serviceId: string } } & {
              json: {
                enabled: boolean
                min: number
                max: number
                criteria: {
                  cpu: { enabled: boolean; percentage: number }
                  memory: { enabled: boolean; percentage: number }
                }
              }
            }
            output: Error
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { serviceId: string } } & {
              json: {
                enabled: boolean
                min: number
                max: number
                criteria: {
                  cpu: { enabled: boolean; percentage: number }
                  memory: { enabled: boolean; percentage: number }
                }
              }
            }
            output: Error
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { param: { serviceId: string } } & {
              json: {
                enabled: boolean
                min: number
                max: number
                criteria: {
                  cpu: { enabled: boolean; percentage: number }
                  memory: { enabled: boolean; percentage: number }
                }
              }
            }
            output: Error
            outputFormat: 'json'
            status: 503
          }
      $delete:
        | { input: { param: { serviceId: string } }; output: {}; outputFormat: string; status: 204 }
        | {
            input: { param: { serviceId: string } }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { serviceId: string } }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { serviceId: string } }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { serviceId: string } }
            output: Error
            outputFormat: 'json'
            status: 406
          }
        | {
            input: { param: { serviceId: string } }
            output: Error
            outputFormat: 'json'
            status: 410
          }
        | {
            input: { param: { serviceId: string } }
            output: Error
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { serviceId: string } }
            output: Error
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { param: { serviceId: string } }
            output: Error
            outputFormat: 'json'
            status: 503
          }
    }
  } & {
    '/services/:serviceId/preview': {
      $post:
        | {
            input: { param: { serviceId: string } } & { json: PreviewInput }
            output: ServiceAndDeploy
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { serviceId: string } } & { json: PreviewInput }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { serviceId: string } } & { json: PreviewInput }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { serviceId: string } } & { json: PreviewInput }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { serviceId: string } } & { json: PreviewInput }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { serviceId: string } } & { json: PreviewInput }
            output: Error
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { serviceId: string } } & { json: PreviewInput }
            output: Error
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { param: { serviceId: string } } & { json: PreviewInput }
            output: Error
            outputFormat: 'json'
            status: 503
          }
    }
  } & {
    '/services/:serviceId/jobs': {
      $get:
        | {
            input: { param: { serviceId: string } } & {
              query: {
                cursor?: string | undefined
                limit?: number | undefined
                status?: ('pending' | 'running' | 'succeeded' | 'failed' | 'canceled')[] | undefined
                createdBefore?: string | undefined
                createdAfter?: string | undefined
                startedBefore?: string | undefined
                startedAfter?: string | undefined
                finishedBefore?: string | undefined
                finishedAfter?: string | undefined
              }
            }
            output: JobWithCursor[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { serviceId: string } } & {
              query: {
                cursor?: string | undefined
                limit?: number | undefined
                status?: ('pending' | 'running' | 'succeeded' | 'failed' | 'canceled')[] | undefined
                createdBefore?: string | undefined
                createdAfter?: string | undefined
                startedBefore?: string | undefined
                startedAfter?: string | undefined
                finishedBefore?: string | undefined
                finishedAfter?: string | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { serviceId: string } } & {
              query: {
                cursor?: string | undefined
                limit?: number | undefined
                status?: ('pending' | 'running' | 'succeeded' | 'failed' | 'canceled')[] | undefined
                createdBefore?: string | undefined
                createdAfter?: string | undefined
                startedBefore?: string | undefined
                startedAfter?: string | undefined
                finishedBefore?: string | undefined
                finishedAfter?: string | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { serviceId: string } } & {
              query: {
                cursor?: string | undefined
                limit?: number | undefined
                status?: ('pending' | 'running' | 'succeeded' | 'failed' | 'canceled')[] | undefined
                createdBefore?: string | undefined
                createdAfter?: string | undefined
                startedBefore?: string | undefined
                startedAfter?: string | undefined
                finishedBefore?: string | undefined
                finishedAfter?: string | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { serviceId: string } } & {
              query: {
                cursor?: string | undefined
                limit?: number | undefined
                status?: ('pending' | 'running' | 'succeeded' | 'failed' | 'canceled')[] | undefined
                createdBefore?: string | undefined
                createdAfter?: string | undefined
                startedBefore?: string | undefined
                startedAfter?: string | undefined
                finishedBefore?: string | undefined
                finishedAfter?: string | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { serviceId: string } } & {
              query: {
                cursor?: string | undefined
                limit?: number | undefined
                status?: ('pending' | 'running' | 'succeeded' | 'failed' | 'canceled')[] | undefined
                createdBefore?: string | undefined
                createdAfter?: string | undefined
                startedBefore?: string | undefined
                startedAfter?: string | undefined
                finishedBefore?: string | undefined
                finishedAfter?: string | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { param: { serviceId: string } } & {
              query: {
                cursor?: string | undefined
                limit?: number | undefined
                status?: ('pending' | 'running' | 'succeeded' | 'failed' | 'canceled')[] | undefined
                createdBefore?: string | undefined
                createdAfter?: string | undefined
                startedBefore?: string | undefined
                startedAfter?: string | undefined
                finishedBefore?: string | undefined
                finishedAfter?: string | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 503
          }
      $post:
        | {
            input: { param: { serviceId: string } } & {
              json: { startCommand: string; planId?: string | undefined }
            }
            output: {
              id: string
              serviceId: string
              startCommand: string
              planId: string
              status?: 'pending' | 'running' | 'succeeded' | 'failed' | 'canceled' | undefined
              createdAt: string
              startedAt?: string | undefined
              finishedAt?: string | undefined
            }
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { param: { serviceId: string } } & {
              json: { startCommand: string; planId?: string | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { serviceId: string } } & {
              json: { startCommand: string; planId?: string | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { serviceId: string } } & {
              json: { startCommand: string; planId?: string | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { serviceId: string } } & {
              json: { startCommand: string; planId?: string | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { serviceId: string } } & {
              json: { startCommand: string; planId?: string | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { param: { serviceId: string } } & {
              json: { startCommand: string; planId?: string | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 503
          }
    }
  } & {
    '/services/:serviceId/jobs/:jobId': {
      $get:
        | {
            input: { param: { serviceId: string; jobId: string } }
            output: {
              id: string
              serviceId: string
              startCommand: string
              planId: string
              status?: 'pending' | 'running' | 'succeeded' | 'failed' | 'canceled' | undefined
              createdAt: string
              startedAt?: string | undefined
              finishedAt?: string | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { serviceId: string; jobId: string } }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { serviceId: string; jobId: string } }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { serviceId: string; jobId: string } }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { serviceId: string; jobId: string } }
            output: Error
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { serviceId: string; jobId: string } }
            output: Error
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { param: { serviceId: string; jobId: string } }
            output: Error
            outputFormat: 'json'
            status: 503
          }
    }
  } & {
    '/services/:serviceId/jobs/:jobId/cancel': {
      $post:
        | {
            input: { param: { serviceId: string; jobId: string } }
            output: {
              id: string
              serviceId: string
              startCommand: string
              planId: string
              status?: 'pending' | 'running' | 'succeeded' | 'failed' | 'canceled' | undefined
              createdAt: string
              startedAt?: string | undefined
              finishedAt?: string | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { serviceId: string; jobId: string } }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { serviceId: string; jobId: string } }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { serviceId: string; jobId: string } }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { serviceId: string; jobId: string } }
            output: Error
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { serviceId: string; jobId: string } }
            output: Error
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { param: { serviceId: string; jobId: string } }
            output: Error
            outputFormat: 'json'
            status: 503
          }
    }
  } & {
    '/services/:serviceId/instances': {
      $get:
        | {
            input: { param: { serviceId: string } }
            output: ServiceInstance[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { serviceId: string } }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { serviceId: string } }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { serviceId: string } }
            output: Error
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { serviceId: string } }
            output: Error
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { param: { serviceId: string } }
            output: Error
            outputFormat: 'json'
            status: 503
          }
    }
  } & {
    '/services/:serviceId/outbound-ips': {
      $get:
        | {
            input: { param: { serviceId: string } }
            output: OutboundIps
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { serviceId: string } }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { serviceId: string } }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { serviceId: string } }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { serviceId: string } }
            output: Error
            outputFormat: 'json'
            status: 406
          }
        | {
            input: { param: { serviceId: string } }
            output: Error
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { serviceId: string } }
            output: Error
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { param: { serviceId: string } }
            output: Error
            outputFormat: 'json'
            status: 503
          }
    }
  } & {
    '/cron-jobs/:cronJobId/runs': {
      $post:
        | {
            input: { param: { cronJobId: string } }
            output: CronJobRun
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { cronJobId: string } }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { cronJobId: string } }
            output: Error
            outputFormat: 'json'
            status: 406
          }
        | {
            input: { param: { cronJobId: string } }
            output: Error
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { cronJobId: string } }
            output: Error
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { param: { cronJobId: string } }
            output: Error
            outputFormat: 'json'
            status: 503
          }
      $delete:
        | { input: { param: { cronJobId: string } }; output: {}; outputFormat: string; status: 204 }
        | {
            input: { param: { cronJobId: string } }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { cronJobId: string } }
            output: Error
            outputFormat: 'json'
            status: 406
          }
        | {
            input: { param: { cronJobId: string } }
            output: Error
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { cronJobId: string } }
            output: Error
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { param: { cronJobId: string } }
            output: Error
            outputFormat: 'json'
            status: 503
          }
    }
  } & {
    '/events/:eventId': {
      $get:
        | {
            input: { param: { eventId: string } }
            output: {
              id: string
              timestamp: string
              serviceId: string
              type:
                | 'artifact_fetch_failed'
                | 'artifact_source_changed'
                | 'autoscaling_config_changed'
                | 'autoscaling_ended'
                | 'autoscaling_started'
                | 'branch_deleted'
                | 'build_ended'
                | 'build_started'
                | 'commit_ignored'
                | 'cron_job_run_ended'
                | 'cron_job_run_started'
                | 'deploy_ended'
                | 'deploy_started'
                | 'disk_created'
                | 'disk_updated'
                | 'disk_deleted'
                | 'disk_snapshot_restored'
                | 'image_pull_failed'
                | 'instance_count_changed'
                | 'job_run_ended'
                | 'maintenance_mode_enabled'
                | 'maintenance_mode_uri_updated'
                | 'maintenance_ended'
                | 'maintenance_started'
                | 'pipeline_minutes_exhausted'
                | 'plan_changed'
                | 'pre_deploy_ended'
                | 'pre_deploy_started'
                | 'server_available'
                | 'server_failed'
                | 'server_hardware_failure'
                | 'server_restarted'
                | 'service_resumed'
                | 'service_suspended'
                | 'zero_downtime_redeploy_ended'
                | 'zero_downtime_redeploy_started'
                | 'edge_cache_enabled'
                | 'edge_cache_disabled'
                | 'edge_cache_purged'
                | 'auto_deploy_disabled'
                | 'auto_deploy_enabled'
                | 'postgres_available'
                | 'postgres_backup_completed'
                | 'postgres_backup_failed'
                | 'postgres_backup_started'
                | 'postgres_cluster_leader_changed'
                | 'postgres_connection_pool_changed'
                | 'postgres_connection_pool_enabled_changed'
                | 'postgres_created'
                | 'postgres_disk_size_changed'
                | 'postgres_disk_autoscaling_enabled_changed'
                | 'postgres_ha_status_changed'
                | 'postgres_restarted'
                | 'postgres_unavailable'
                | 'postgres_upgrade_failed'
                | 'postgres_upgrade_started'
                | 'postgres_upgrade_succeeded'
                | 'postgres_restore_failed'
                | 'postgres_restore_succeeded'
                | 'postgres_read_replicas_changed'
                | 'postgres_pitr_checkpoint_started'
                | 'postgres_pitr_checkpoint_failed'
                | 'postgres_pitr_checkpoint_completed'
                | 'postgres_read_replica_stale'
                | 'postgres_wal_archive_failed'
                | 'key_value_available'
                | 'key_value_config_restart'
                | 'key_value_unhealthy'
              details:
                | { buildId: string; message: string }
                | { fromBuildSourceId?: string | undefined; toBuildSourceId?: string | undefined }
                | {
                    fromConfig?:
                      | {
                          enabled: boolean
                          min: number
                          max: number
                          criteria: {
                            cpu: { enabled: boolean; percentage: number }
                            memory: { enabled: boolean; percentage: number }
                          }
                        }
                      | undefined
                    toConfig: {
                      enabled: boolean
                      min: number
                      max: number
                      criteria: {
                        cpu: { enabled: boolean; percentage: number }
                        memory: { enabled: boolean; percentage: number }
                      }
                    }
                  }
                | { fromInstances: number; toInstances: number }
                | {
                    fromInstances: number
                    toInstances: number
                    currentCPU?: number | undefined
                    targetCPU?: number | undefined
                    currentMemory?: number | undefined
                    targetMemory?: number | undefined
                  }
                | { deletedBranch: string; newBranch: string }
                | {
                    buildId: string
                    buildStatus: 'succeeded' | 'failed' | 'canceled'
                    reason: {
                      buildFailed?: { id: string } | undefined
                      newBuild?: { id: string } | undefined
                      newDeploy?: { id: string } | undefined
                      failure?:
                        | {
                            evicted: boolean
                            evictionReason?: string | undefined
                            nonZeroExit?: number | undefined
                            earlyExit?: boolean | undefined
                            oomKilled?: { memoryLimit: string } | undefined
                            timedOutSeconds?: bigint | undefined
                            unhealthy?: string | undefined
                            timedOutReason?: string | undefined
                          }
                        | undefined
                    }
                    status: number
                  }
                | {
                    buildId: string
                    trigger: {
                      firstBuild: boolean
                      envUpdated: boolean
                      manual: boolean
                      user?: { id: string; email: string } | undefined
                      updatedProperty?: string | undefined
                      newCommit?: string | undefined
                      deployedByRender: boolean
                      clearCache: boolean
                      rollback: boolean
                      rollbackTargetDeployId?: string | undefined
                    }
                  }
                | { id: string; url: string }
                | {
                    cronJobRunId: string
                    status: 'canceled' | 'pending' | 'successful' | 'unsuccessful'
                    reason?:
                      | {
                          evicted: boolean
                          evictionReason?: string | undefined
                          nonZeroExit?: number | undefined
                          earlyExit?: boolean | undefined
                          oomKilled?: { memoryLimit: string } | undefined
                          timedOutSeconds?: bigint | undefined
                          unhealthy?: string | undefined
                          timedOutReason?: string | undefined
                        }
                      | undefined
                    user?: { id: string; email: string } | undefined
                  }
                | { cronJobRunId: string }
                | {
                    deployId: string
                    reason: {
                      buildFailed?: { id: string } | undefined
                      newBuild?: { id: string } | undefined
                      newDeploy?: { id: string } | undefined
                      failure?:
                        | {
                            evicted: boolean
                            evictionReason?: string | undefined
                            nonZeroExit?: number | undefined
                            earlyExit?: boolean | undefined
                            oomKilled?: { memoryLimit: string } | undefined
                            timedOutSeconds?: bigint | undefined
                            unhealthy?: string | undefined
                            timedOutReason?: string | undefined
                          }
                        | undefined
                    }
                    deployStatus: 'succeeded' | 'failed' | 'canceled'
                    status: number
                    buildId?: string | undefined
                  }
                | {
                    deployId: string
                    trigger: {
                      firstBuild: boolean
                      envUpdated: boolean
                      manual: boolean
                      user?: { id: string; email: string } | undefined
                      updatedProperty?: string | undefined
                      newCommit?: string | undefined
                      deployedByRender: boolean
                      clearCache: boolean
                      rollback: boolean
                      rollbackTargetDeployId?: string | undefined
                    }
                    buildId?: string | undefined
                  }
                | { diskId: string; sizeGB: number }
                | { diskId: string; fromSizeGB: number; toSizeGB: number }
                | { diskId: string }
                | {
                    diskId: string
                    instanceId?: string | undefined
                    snapshotCreatedAt?: string | undefined
                    triggeredByUser: string | null
                  }
                | {
                    diskId: string
                    diskName: string
                    mountPath: string
                    usagePercent: number
                    thresholdPercent: number
                  }
                | {
                    diskId: string
                    diskName: string
                    mountPath: string
                    usagePercent: number
                    thresholdPercent: number
                  }
                | { message: string; imageURL: string }
                | { deployId: string }
                | { deployId: string }
                | { fromInstances: number; toInstances: number }
                | {
                    jobId: string
                    status: 'pending' | 'running' | 'succeeded' | 'failed' | 'canceled'
                    reason?:
                      | {
                          evicted: boolean
                          evictionReason?: string | undefined
                          nonZeroExit?: number | undefined
                          earlyExit?: boolean | undefined
                          oomKilled?: { memoryLimit: string } | undefined
                          timedOutSeconds?: bigint | undefined
                          unhealthy?: string | undefined
                          timedOutReason?: string | undefined
                        }
                      | undefined
                  }
                | { enabled: boolean }
                | { fromURI: string; toURI: string }
                | { [x: string]: unknown }
                | {
                    trigger: {
                      user?: { id: string; email: string } | undefined
                      manual: boolean
                      startedByRender: boolean
                    }
                  }
                | {
                    buildId: string
                    trigger: {
                      firstBuild: boolean
                      envUpdated: boolean
                      manual: boolean
                      user?: { id: string; email: string } | undefined
                      updatedProperty?: string | undefined
                      newCommit?: string | undefined
                      deployedByRender: boolean
                      clearCache: boolean
                      rollback: boolean
                      rollbackTargetDeployId?: string | undefined
                    }
                  }
                | { from: string; to: string }
                | {
                    deployCommandExecutionId: string
                    deployId: string
                    preDeployStatus: 'succeeded' | 'failed' | 'canceled'
                    reason: {
                      buildFailed?: { id: string } | undefined
                      newBuild?: { id: string } | undefined
                      newDeploy?: { id: string } | undefined
                      failure?:
                        | {
                            evicted: boolean
                            evictionReason?: string | undefined
                            nonZeroExit?: number | undefined
                            earlyExit?: boolean | undefined
                            oomKilled?: { memoryLimit: string } | undefined
                            timedOutSeconds?: bigint | undefined
                            unhealthy?: string | undefined
                            timedOutReason?: string | undefined
                          }
                        | undefined
                    }
                    status: number
                  }
                | { deployCommandExecutionId: string; deployId: string }
                | { [x: string]: unknown }
                | {
                    instanceID?: string | undefined
                    reason?:
                      | {
                          evicted: boolean
                          evictionReason?: string | undefined
                          nonZeroExit?: number | undefined
                          earlyExit?: boolean | undefined
                          oomKilled?: { memoryLimit: string } | undefined
                          timedOutSeconds?: bigint | undefined
                          unhealthy?: string | undefined
                          timedOutReason?: string | undefined
                        }
                      | undefined
                  }
                | { [x: string]: unknown }
                | { triggeredByUser: string | null }
                | { [x: string]: unknown }
                | { [x: string]: unknown }
                | { actor: string; suspendedByUser?: { id: string; email: string } | undefined }
                | { actor: string; resumedByUser?: { id: string; email: string } | undefined }
                | { [x: string]: unknown }
                | { trigger: string }
                | {
                    trigger: {
                      manual: boolean
                      user?: { id: string; email: string } | undefined
                      system: boolean
                    }
                  }
                | {
                    trigger: {
                      manual: boolean
                      user?: { id: string; email: string } | undefined
                      system: boolean
                    }
                  }
                | {
                    trigger: {
                      manual: boolean
                      user?: { id: string; email: string } | undefined
                      system: boolean
                    }
                  }
                | { reason: string; fromTrigger?: unknown | undefined }
                | { newTrigger?: unknown | undefined }
                | { [x: string]: unknown }
                | { [x: string]: unknown }
                | { [x: string]: unknown }
                | { [x: string]: unknown }
                | { leaderId?: string | undefined }
                | { user?: { id: string; email: string } | undefined; from: string; to: string }
                | { user?: { id: string; email: string } | undefined; enabled: boolean }
                | { user?: { id: string; email: string } | undefined }
                | {
                    user?: { id: string; email: string } | undefined
                    fromDiskSize: number
                    toDiskSize: number
                  }
                | { fromStatus: string; toStatus: string }
                | { fromReplicas: number; toReplicas: number }
                | { user?: { id: string; email: string } | undefined }
                | { [x: string]: unknown }
                | { fromVersion: string; toVersion: string }
                | {
                    user?: { id: string; email: string } | undefined
                    fromVersion: string
                    toVersion: string
                  }
                | { fromVersion: string; toVersion: string }
                | { [x: string]: unknown }
                | { [x: string]: unknown }
                | { [x: string]: unknown }
                | { [x: string]: unknown }
                | { [x: string]: unknown }
                | { reason: string; message: string }
                | { [x: string]: unknown }
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { eventId: string } }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { eventId: string } }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { eventId: string } }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { eventId: string } }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { eventId: string } }
            output: Error
            outputFormat: 'json'
            status: 406
          }
        | {
            input: { param: { eventId: string } }
            output: Error
            outputFormat: 'json'
            status: 410
          }
        | {
            input: { param: { eventId: string } }
            output: Error
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { eventId: string } }
            output: Error
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { param: { eventId: string } }
            output: Error
            outputFormat: 'json'
            status: 503
          }
    }
  } & {
    '/logs': {
      $get:
        | {
            input: {
              query: {
                ownerId: string
                startTime?: string | undefined
                endTime?: string | undefined
                direction?: 'forward' | 'backward' | undefined
                resource?: string[] | undefined
                project?: string | undefined
                environment?: string | undefined
                region?: string | undefined
                instance?: string[] | undefined
                host?: string[] | undefined
                statusCode?: string[] | undefined
                method?: string[] | undefined
                task?: string[] | undefined
                taskRun?: string[] | undefined
                sandbox?: string[] | undefined
                build?: string[] | undefined
                level?: string[] | undefined
                type?: string[] | undefined
                text?: string[] | undefined
                path?: string[] | undefined
                limit?: number | undefined
              }
            }
            output: {
              hasMore: boolean
              nextStartTime: string
              nextEndTime: string
              logs: {
                id: string
                message: string
                timestamp: string
                labels: {
                  name:
                    | 'resource'
                    | 'instance'
                    | 'host'
                    | 'statusCode'
                    | 'method'
                    | 'level'
                    | 'workflowService'
                    | 'workflowVeresion'
                    | 'task'
                    | 'taskRun'
                    | 'sandbox'
                    | 'build'
                    | 'type'
                    | 'text'
                    | 'path'
                    | 'blocked'
                  value: string
                }[]
              }[]
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                ownerId: string
                startTime?: string | undefined
                endTime?: string | undefined
                direction?: 'forward' | 'backward' | undefined
                resource?: string[] | undefined
                project?: string | undefined
                environment?: string | undefined
                region?: string | undefined
                instance?: string[] | undefined
                host?: string[] | undefined
                statusCode?: string[] | undefined
                method?: string[] | undefined
                task?: string[] | undefined
                taskRun?: string[] | undefined
                sandbox?: string[] | undefined
                build?: string[] | undefined
                level?: string[] | undefined
                type?: string[] | undefined
                text?: string[] | undefined
                path?: string[] | undefined
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
                ownerId: string
                startTime?: string | undefined
                endTime?: string | undefined
                direction?: 'forward' | 'backward' | undefined
                resource?: string[] | undefined
                project?: string | undefined
                environment?: string | undefined
                region?: string | undefined
                instance?: string[] | undefined
                host?: string[] | undefined
                statusCode?: string[] | undefined
                method?: string[] | undefined
                task?: string[] | undefined
                taskRun?: string[] | undefined
                sandbox?: string[] | undefined
                build?: string[] | undefined
                level?: string[] | undefined
                type?: string[] | undefined
                text?: string[] | undefined
                path?: string[] | undefined
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
                ownerId: string
                startTime?: string | undefined
                endTime?: string | undefined
                direction?: 'forward' | 'backward' | undefined
                resource?: string[] | undefined
                project?: string | undefined
                environment?: string | undefined
                region?: string | undefined
                instance?: string[] | undefined
                host?: string[] | undefined
                statusCode?: string[] | undefined
                method?: string[] | undefined
                task?: string[] | undefined
                taskRun?: string[] | undefined
                sandbox?: string[] | undefined
                build?: string[] | undefined
                level?: string[] | undefined
                type?: string[] | undefined
                text?: string[] | undefined
                path?: string[] | undefined
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
                ownerId: string
                startTime?: string | undefined
                endTime?: string | undefined
                direction?: 'forward' | 'backward' | undefined
                resource?: string[] | undefined
                project?: string | undefined
                environment?: string | undefined
                region?: string | undefined
                instance?: string[] | undefined
                host?: string[] | undefined
                statusCode?: string[] | undefined
                method?: string[] | undefined
                task?: string[] | undefined
                taskRun?: string[] | undefined
                sandbox?: string[] | undefined
                build?: string[] | undefined
                level?: string[] | undefined
                type?: string[] | undefined
                text?: string[] | undefined
                path?: string[] | undefined
                limit?: number | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: {
              query: {
                ownerId: string
                startTime?: string | undefined
                endTime?: string | undefined
                direction?: 'forward' | 'backward' | undefined
                resource?: string[] | undefined
                project?: string | undefined
                environment?: string | undefined
                region?: string | undefined
                instance?: string[] | undefined
                host?: string[] | undefined
                statusCode?: string[] | undefined
                method?: string[] | undefined
                task?: string[] | undefined
                taskRun?: string[] | undefined
                sandbox?: string[] | undefined
                build?: string[] | undefined
                level?: string[] | undefined
                type?: string[] | undefined
                text?: string[] | undefined
                path?: string[] | undefined
                limit?: number | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 406
          }
        | {
            input: {
              query: {
                ownerId: string
                startTime?: string | undefined
                endTime?: string | undefined
                direction?: 'forward' | 'backward' | undefined
                resource?: string[] | undefined
                project?: string | undefined
                environment?: string | undefined
                region?: string | undefined
                instance?: string[] | undefined
                host?: string[] | undefined
                statusCode?: string[] | undefined
                method?: string[] | undefined
                task?: string[] | undefined
                taskRun?: string[] | undefined
                sandbox?: string[] | undefined
                build?: string[] | undefined
                level?: string[] | undefined
                type?: string[] | undefined
                text?: string[] | undefined
                path?: string[] | undefined
                limit?: number | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 410
          }
        | {
            input: {
              query: {
                ownerId: string
                startTime?: string | undefined
                endTime?: string | undefined
                direction?: 'forward' | 'backward' | undefined
                resource?: string[] | undefined
                project?: string | undefined
                environment?: string | undefined
                region?: string | undefined
                instance?: string[] | undefined
                host?: string[] | undefined
                statusCode?: string[] | undefined
                method?: string[] | undefined
                task?: string[] | undefined
                taskRun?: string[] | undefined
                sandbox?: string[] | undefined
                build?: string[] | undefined
                level?: string[] | undefined
                type?: string[] | undefined
                text?: string[] | undefined
                path?: string[] | undefined
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
                ownerId: string
                startTime?: string | undefined
                endTime?: string | undefined
                direction?: 'forward' | 'backward' | undefined
                resource?: string[] | undefined
                project?: string | undefined
                environment?: string | undefined
                region?: string | undefined
                instance?: string[] | undefined
                host?: string[] | undefined
                statusCode?: string[] | undefined
                method?: string[] | undefined
                task?: string[] | undefined
                taskRun?: string[] | undefined
                sandbox?: string[] | undefined
                build?: string[] | undefined
                level?: string[] | undefined
                type?: string[] | undefined
                text?: string[] | undefined
                path?: string[] | undefined
                limit?: number | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 500
          }
        | {
            input: {
              query: {
                ownerId: string
                startTime?: string | undefined
                endTime?: string | undefined
                direction?: 'forward' | 'backward' | undefined
                resource?: string[] | undefined
                project?: string | undefined
                environment?: string | undefined
                region?: string | undefined
                instance?: string[] | undefined
                host?: string[] | undefined
                statusCode?: string[] | undefined
                method?: string[] | undefined
                task?: string[] | undefined
                taskRun?: string[] | undefined
                sandbox?: string[] | undefined
                build?: string[] | undefined
                level?: string[] | undefined
                type?: string[] | undefined
                text?: string[] | undefined
                path?: string[] | undefined
                limit?: number | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 503
          }
    }
  } & {
    '/logs/subscribe': {
      $get:
        | {
            input: {
              query: {
                ownerId: string
                startTime?: string | undefined
                endTime?: string | undefined
                direction?: 'forward' | 'backward' | undefined
                resource?: string[] | undefined
                project?: string | undefined
                environment?: string | undefined
                region?: string | undefined
                instance?: string[] | undefined
                host?: string[] | undefined
                statusCode?: string[] | undefined
                method?: string[] | undefined
                task?: string[] | undefined
                taskRun?: string[] | undefined
                sandbox?: string[] | undefined
                build?: string[] | undefined
                level?: string[] | undefined
                type?: string[] | undefined
                text?: string[] | undefined
                path?: string[] | undefined
                limit?: number | undefined
              }
            }
            output: {
              id: string
              message: string
              timestamp: string
              labels: {
                name:
                  | 'resource'
                  | 'instance'
                  | 'host'
                  | 'statusCode'
                  | 'method'
                  | 'level'
                  | 'workflowService'
                  | 'workflowVeresion'
                  | 'task'
                  | 'taskRun'
                  | 'sandbox'
                  | 'build'
                  | 'type'
                  | 'text'
                  | 'path'
                  | 'blocked'
                value: string
              }[]
            }
            outputFormat: 'json'
            status: 101
          }
        | {
            input: {
              query: {
                ownerId: string
                startTime?: string | undefined
                endTime?: string | undefined
                direction?: 'forward' | 'backward' | undefined
                resource?: string[] | undefined
                project?: string | undefined
                environment?: string | undefined
                region?: string | undefined
                instance?: string[] | undefined
                host?: string[] | undefined
                statusCode?: string[] | undefined
                method?: string[] | undefined
                task?: string[] | undefined
                taskRun?: string[] | undefined
                sandbox?: string[] | undefined
                build?: string[] | undefined
                level?: string[] | undefined
                type?: string[] | undefined
                text?: string[] | undefined
                path?: string[] | undefined
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
                ownerId: string
                startTime?: string | undefined
                endTime?: string | undefined
                direction?: 'forward' | 'backward' | undefined
                resource?: string[] | undefined
                project?: string | undefined
                environment?: string | undefined
                region?: string | undefined
                instance?: string[] | undefined
                host?: string[] | undefined
                statusCode?: string[] | undefined
                method?: string[] | undefined
                task?: string[] | undefined
                taskRun?: string[] | undefined
                sandbox?: string[] | undefined
                build?: string[] | undefined
                level?: string[] | undefined
                type?: string[] | undefined
                text?: string[] | undefined
                path?: string[] | undefined
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
                ownerId: string
                startTime?: string | undefined
                endTime?: string | undefined
                direction?: 'forward' | 'backward' | undefined
                resource?: string[] | undefined
                project?: string | undefined
                environment?: string | undefined
                region?: string | undefined
                instance?: string[] | undefined
                host?: string[] | undefined
                statusCode?: string[] | undefined
                method?: string[] | undefined
                task?: string[] | undefined
                taskRun?: string[] | undefined
                sandbox?: string[] | undefined
                build?: string[] | undefined
                level?: string[] | undefined
                type?: string[] | undefined
                text?: string[] | undefined
                path?: string[] | undefined
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
                ownerId: string
                startTime?: string | undefined
                endTime?: string | undefined
                direction?: 'forward' | 'backward' | undefined
                resource?: string[] | undefined
                project?: string | undefined
                environment?: string | undefined
                region?: string | undefined
                instance?: string[] | undefined
                host?: string[] | undefined
                statusCode?: string[] | undefined
                method?: string[] | undefined
                task?: string[] | undefined
                taskRun?: string[] | undefined
                sandbox?: string[] | undefined
                build?: string[] | undefined
                level?: string[] | undefined
                type?: string[] | undefined
                text?: string[] | undefined
                path?: string[] | undefined
                limit?: number | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: {
              query: {
                ownerId: string
                startTime?: string | undefined
                endTime?: string | undefined
                direction?: 'forward' | 'backward' | undefined
                resource?: string[] | undefined
                project?: string | undefined
                environment?: string | undefined
                region?: string | undefined
                instance?: string[] | undefined
                host?: string[] | undefined
                statusCode?: string[] | undefined
                method?: string[] | undefined
                task?: string[] | undefined
                taskRun?: string[] | undefined
                sandbox?: string[] | undefined
                build?: string[] | undefined
                level?: string[] | undefined
                type?: string[] | undefined
                text?: string[] | undefined
                path?: string[] | undefined
                limit?: number | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 406
          }
        | {
            input: {
              query: {
                ownerId: string
                startTime?: string | undefined
                endTime?: string | undefined
                direction?: 'forward' | 'backward' | undefined
                resource?: string[] | undefined
                project?: string | undefined
                environment?: string | undefined
                region?: string | undefined
                instance?: string[] | undefined
                host?: string[] | undefined
                statusCode?: string[] | undefined
                method?: string[] | undefined
                task?: string[] | undefined
                taskRun?: string[] | undefined
                sandbox?: string[] | undefined
                build?: string[] | undefined
                level?: string[] | undefined
                type?: string[] | undefined
                text?: string[] | undefined
                path?: string[] | undefined
                limit?: number | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 410
          }
        | {
            input: {
              query: {
                ownerId: string
                startTime?: string | undefined
                endTime?: string | undefined
                direction?: 'forward' | 'backward' | undefined
                resource?: string[] | undefined
                project?: string | undefined
                environment?: string | undefined
                region?: string | undefined
                instance?: string[] | undefined
                host?: string[] | undefined
                statusCode?: string[] | undefined
                method?: string[] | undefined
                task?: string[] | undefined
                taskRun?: string[] | undefined
                sandbox?: string[] | undefined
                build?: string[] | undefined
                level?: string[] | undefined
                type?: string[] | undefined
                text?: string[] | undefined
                path?: string[] | undefined
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
                ownerId: string
                startTime?: string | undefined
                endTime?: string | undefined
                direction?: 'forward' | 'backward' | undefined
                resource?: string[] | undefined
                project?: string | undefined
                environment?: string | undefined
                region?: string | undefined
                instance?: string[] | undefined
                host?: string[] | undefined
                statusCode?: string[] | undefined
                method?: string[] | undefined
                task?: string[] | undefined
                taskRun?: string[] | undefined
                sandbox?: string[] | undefined
                build?: string[] | undefined
                level?: string[] | undefined
                type?: string[] | undefined
                text?: string[] | undefined
                path?: string[] | undefined
                limit?: number | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 500
          }
        | {
            input: {
              query: {
                ownerId: string
                startTime?: string | undefined
                endTime?: string | undefined
                direction?: 'forward' | 'backward' | undefined
                resource?: string[] | undefined
                project?: string | undefined
                environment?: string | undefined
                region?: string | undefined
                instance?: string[] | undefined
                host?: string[] | undefined
                statusCode?: string[] | undefined
                method?: string[] | undefined
                task?: string[] | undefined
                taskRun?: string[] | undefined
                sandbox?: string[] | undefined
                build?: string[] | undefined
                level?: string[] | undefined
                type?: string[] | undefined
                text?: string[] | undefined
                path?: string[] | undefined
                limit?: number | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 503
          }
    }
  } & {
    '/logs/values': {
      $get:
        | {
            input: {
              query: {
                ownerId: string
                label: 'instance' | 'host' | 'statusCode' | 'method' | 'level' | 'type'
                startTime?: string | undefined
                endTime?: string | undefined
                direction?: 'forward' | 'backward' | undefined
                resource?: string[] | undefined
                project?: string | undefined
                environment?: string | undefined
                region?: string | undefined
                instance?: string[] | undefined
                host?: string[] | undefined
                statusCode?: string[] | undefined
                method?: string[] | undefined
                task?: string[] | undefined
                taskRun?: string[] | undefined
                sandbox?: string[] | undefined
                build?: string[] | undefined
                level?: string[] | undefined
                type?: string[] | undefined
                text?: string[] | undefined
                path?: string[] | undefined
                limit?: number | undefined
              }
            }
            output: string[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                ownerId: string
                label: 'instance' | 'host' | 'statusCode' | 'method' | 'level' | 'type'
                startTime?: string | undefined
                endTime?: string | undefined
                direction?: 'forward' | 'backward' | undefined
                resource?: string[] | undefined
                project?: string | undefined
                environment?: string | undefined
                region?: string | undefined
                instance?: string[] | undefined
                host?: string[] | undefined
                statusCode?: string[] | undefined
                method?: string[] | undefined
                task?: string[] | undefined
                taskRun?: string[] | undefined
                sandbox?: string[] | undefined
                build?: string[] | undefined
                level?: string[] | undefined
                type?: string[] | undefined
                text?: string[] | undefined
                path?: string[] | undefined
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
                ownerId: string
                label: 'instance' | 'host' | 'statusCode' | 'method' | 'level' | 'type'
                startTime?: string | undefined
                endTime?: string | undefined
                direction?: 'forward' | 'backward' | undefined
                resource?: string[] | undefined
                project?: string | undefined
                environment?: string | undefined
                region?: string | undefined
                instance?: string[] | undefined
                host?: string[] | undefined
                statusCode?: string[] | undefined
                method?: string[] | undefined
                task?: string[] | undefined
                taskRun?: string[] | undefined
                sandbox?: string[] | undefined
                build?: string[] | undefined
                level?: string[] | undefined
                type?: string[] | undefined
                text?: string[] | undefined
                path?: string[] | undefined
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
                ownerId: string
                label: 'instance' | 'host' | 'statusCode' | 'method' | 'level' | 'type'
                startTime?: string | undefined
                endTime?: string | undefined
                direction?: 'forward' | 'backward' | undefined
                resource?: string[] | undefined
                project?: string | undefined
                environment?: string | undefined
                region?: string | undefined
                instance?: string[] | undefined
                host?: string[] | undefined
                statusCode?: string[] | undefined
                method?: string[] | undefined
                task?: string[] | undefined
                taskRun?: string[] | undefined
                sandbox?: string[] | undefined
                build?: string[] | undefined
                level?: string[] | undefined
                type?: string[] | undefined
                text?: string[] | undefined
                path?: string[] | undefined
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
                ownerId: string
                label: 'instance' | 'host' | 'statusCode' | 'method' | 'level' | 'type'
                startTime?: string | undefined
                endTime?: string | undefined
                direction?: 'forward' | 'backward' | undefined
                resource?: string[] | undefined
                project?: string | undefined
                environment?: string | undefined
                region?: string | undefined
                instance?: string[] | undefined
                host?: string[] | undefined
                statusCode?: string[] | undefined
                method?: string[] | undefined
                task?: string[] | undefined
                taskRun?: string[] | undefined
                sandbox?: string[] | undefined
                build?: string[] | undefined
                level?: string[] | undefined
                type?: string[] | undefined
                text?: string[] | undefined
                path?: string[] | undefined
                limit?: number | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: {
              query: {
                ownerId: string
                label: 'instance' | 'host' | 'statusCode' | 'method' | 'level' | 'type'
                startTime?: string | undefined
                endTime?: string | undefined
                direction?: 'forward' | 'backward' | undefined
                resource?: string[] | undefined
                project?: string | undefined
                environment?: string | undefined
                region?: string | undefined
                instance?: string[] | undefined
                host?: string[] | undefined
                statusCode?: string[] | undefined
                method?: string[] | undefined
                task?: string[] | undefined
                taskRun?: string[] | undefined
                sandbox?: string[] | undefined
                build?: string[] | undefined
                level?: string[] | undefined
                type?: string[] | undefined
                text?: string[] | undefined
                path?: string[] | undefined
                limit?: number | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 406
          }
        | {
            input: {
              query: {
                ownerId: string
                label: 'instance' | 'host' | 'statusCode' | 'method' | 'level' | 'type'
                startTime?: string | undefined
                endTime?: string | undefined
                direction?: 'forward' | 'backward' | undefined
                resource?: string[] | undefined
                project?: string | undefined
                environment?: string | undefined
                region?: string | undefined
                instance?: string[] | undefined
                host?: string[] | undefined
                statusCode?: string[] | undefined
                method?: string[] | undefined
                task?: string[] | undefined
                taskRun?: string[] | undefined
                sandbox?: string[] | undefined
                build?: string[] | undefined
                level?: string[] | undefined
                type?: string[] | undefined
                text?: string[] | undefined
                path?: string[] | undefined
                limit?: number | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 410
          }
        | {
            input: {
              query: {
                ownerId: string
                label: 'instance' | 'host' | 'statusCode' | 'method' | 'level' | 'type'
                startTime?: string | undefined
                endTime?: string | undefined
                direction?: 'forward' | 'backward' | undefined
                resource?: string[] | undefined
                project?: string | undefined
                environment?: string | undefined
                region?: string | undefined
                instance?: string[] | undefined
                host?: string[] | undefined
                statusCode?: string[] | undefined
                method?: string[] | undefined
                task?: string[] | undefined
                taskRun?: string[] | undefined
                sandbox?: string[] | undefined
                build?: string[] | undefined
                level?: string[] | undefined
                type?: string[] | undefined
                text?: string[] | undefined
                path?: string[] | undefined
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
                ownerId: string
                label: 'instance' | 'host' | 'statusCode' | 'method' | 'level' | 'type'
                startTime?: string | undefined
                endTime?: string | undefined
                direction?: 'forward' | 'backward' | undefined
                resource?: string[] | undefined
                project?: string | undefined
                environment?: string | undefined
                region?: string | undefined
                instance?: string[] | undefined
                host?: string[] | undefined
                statusCode?: string[] | undefined
                method?: string[] | undefined
                task?: string[] | undefined
                taskRun?: string[] | undefined
                sandbox?: string[] | undefined
                build?: string[] | undefined
                level?: string[] | undefined
                type?: string[] | undefined
                text?: string[] | undefined
                path?: string[] | undefined
                limit?: number | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 500
          }
        | {
            input: {
              query: {
                ownerId: string
                label: 'instance' | 'host' | 'statusCode' | 'method' | 'level' | 'type'
                startTime?: string | undefined
                endTime?: string | undefined
                direction?: 'forward' | 'backward' | undefined
                resource?: string[] | undefined
                project?: string | undefined
                environment?: string | undefined
                region?: string | undefined
                instance?: string[] | undefined
                host?: string[] | undefined
                statusCode?: string[] | undefined
                method?: string[] | undefined
                task?: string[] | undefined
                taskRun?: string[] | undefined
                sandbox?: string[] | undefined
                build?: string[] | undefined
                level?: string[] | undefined
                type?: string[] | undefined
                text?: string[] | undefined
                path?: string[] | undefined
                limit?: number | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 503
          }
    }
  } & {
    '/logs/streams/owner/:ownerId': {
      $get:
        | {
            input: { param: { ownerId: string } }
            output: {
              ownerId?: string | undefined
              endpoint?: string | undefined
              preview?: 'send' | 'drop' | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { ownerId: string } }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { ownerId: string } }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { ownerId: string } }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { ownerId: string } }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { ownerId: string } }
            output: Error
            outputFormat: 'json'
            status: 406
          }
        | {
            input: { param: { ownerId: string } }
            output: Error
            outputFormat: 'json'
            status: 410
          }
        | {
            input: { param: { ownerId: string } }
            output: Error
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { ownerId: string } }
            output: Error
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { param: { ownerId: string } }
            output: Error
            outputFormat: 'json'
            status: 503
          }
      $put:
        | {
            input: { param: { ownerId: string } } & {
              json: {
                endpoint?: string | undefined
                token?: string | undefined
                preview: 'send' | 'drop'
              }
            }
            output: {
              ownerId?: string | undefined
              endpoint?: string | undefined
              preview?: 'send' | 'drop' | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { ownerId: string } } & {
              json: {
                endpoint?: string | undefined
                token?: string | undefined
                preview: 'send' | 'drop'
              }
            }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { ownerId: string } } & {
              json: {
                endpoint?: string | undefined
                token?: string | undefined
                preview: 'send' | 'drop'
              }
            }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { ownerId: string } } & {
              json: {
                endpoint?: string | undefined
                token?: string | undefined
                preview: 'send' | 'drop'
              }
            }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { ownerId: string } } & {
              json: {
                endpoint?: string | undefined
                token?: string | undefined
                preview: 'send' | 'drop'
              }
            }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { ownerId: string } } & {
              json: {
                endpoint?: string | undefined
                token?: string | undefined
                preview: 'send' | 'drop'
              }
            }
            output: Error
            outputFormat: 'json'
            status: 406
          }
        | {
            input: { param: { ownerId: string } } & {
              json: {
                endpoint?: string | undefined
                token?: string | undefined
                preview: 'send' | 'drop'
              }
            }
            output: Error
            outputFormat: 'json'
            status: 410
          }
        | {
            input: { param: { ownerId: string } } & {
              json: {
                endpoint?: string | undefined
                token?: string | undefined
                preview: 'send' | 'drop'
              }
            }
            output: Error
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { ownerId: string } } & {
              json: {
                endpoint?: string | undefined
                token?: string | undefined
                preview: 'send' | 'drop'
              }
            }
            output: Error
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { param: { ownerId: string } } & {
              json: {
                endpoint?: string | undefined
                token?: string | undefined
                preview: 'send' | 'drop'
              }
            }
            output: Error
            outputFormat: 'json'
            status: 503
          }
      $delete:
        | { input: { param: { ownerId: string } }; output: {}; outputFormat: string; status: 204 }
        | {
            input: { param: { ownerId: string } }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { ownerId: string } }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { ownerId: string } }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { ownerId: string } }
            output: Error
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { ownerId: string } }
            output: Error
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { param: { ownerId: string } }
            output: Error
            outputFormat: 'json'
            status: 503
          }
    }
  } & {
    '/logs/streams/resource': {
      $get:
        | {
            input: {
              query: {
                ownerId?: string[] | undefined
                logStreamId?: string[] | undefined
                resourceId?: string[] | undefined
                setting?: ('send' | 'drop')[] | undefined
                cursor?: string | undefined
                limit?: number | undefined
              }
            }
            output: {
              resourceId?: string | undefined
              endpoint?: string | undefined
              setting?: 'send' | 'drop' | undefined
            }[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                ownerId?: string[] | undefined
                logStreamId?: string[] | undefined
                resourceId?: string[] | undefined
                setting?: ('send' | 'drop')[] | undefined
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
                ownerId?: string[] | undefined
                logStreamId?: string[] | undefined
                resourceId?: string[] | undefined
                setting?: ('send' | 'drop')[] | undefined
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
                ownerId?: string[] | undefined
                logStreamId?: string[] | undefined
                resourceId?: string[] | undefined
                setting?: ('send' | 'drop')[] | undefined
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
                ownerId?: string[] | undefined
                logStreamId?: string[] | undefined
                resourceId?: string[] | undefined
                setting?: ('send' | 'drop')[] | undefined
                cursor?: string | undefined
                limit?: number | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: {
              query: {
                ownerId?: string[] | undefined
                logStreamId?: string[] | undefined
                resourceId?: string[] | undefined
                setting?: ('send' | 'drop')[] | undefined
                cursor?: string | undefined
                limit?: number | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 406
          }
        | {
            input: {
              query: {
                ownerId?: string[] | undefined
                logStreamId?: string[] | undefined
                resourceId?: string[] | undefined
                setting?: ('send' | 'drop')[] | undefined
                cursor?: string | undefined
                limit?: number | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 410
          }
        | {
            input: {
              query: {
                ownerId?: string[] | undefined
                logStreamId?: string[] | undefined
                resourceId?: string[] | undefined
                setting?: ('send' | 'drop')[] | undefined
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
                ownerId?: string[] | undefined
                logStreamId?: string[] | undefined
                resourceId?: string[] | undefined
                setting?: ('send' | 'drop')[] | undefined
                cursor?: string | undefined
                limit?: number | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 500
          }
        | {
            input: {
              query: {
                ownerId?: string[] | undefined
                logStreamId?: string[] | undefined
                resourceId?: string[] | undefined
                setting?: ('send' | 'drop')[] | undefined
                cursor?: string | undefined
                limit?: number | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 503
          }
    }
  } & {
    '/logs/streams/resource/:resourceId': {
      $get:
        | {
            input: { param: { resourceId: string } }
            output: {
              resourceId?: string | undefined
              endpoint?: string | undefined
              setting?: 'send' | 'drop' | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { resourceId: string } }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { resourceId: string } }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { resourceId: string } }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { resourceId: string } }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { resourceId: string } }
            output: Error
            outputFormat: 'json'
            status: 406
          }
        | {
            input: { param: { resourceId: string } }
            output: Error
            outputFormat: 'json'
            status: 410
          }
        | {
            input: { param: { resourceId: string } }
            output: Error
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { resourceId: string } }
            output: Error
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { param: { resourceId: string } }
            output: Error
            outputFormat: 'json'
            status: 503
          }
      $put:
        | {
            input: { param: { resourceId: string } } & {
              json: {
                endpoint?: string | undefined
                token?: string | undefined
                setting: 'send' | 'drop'
              }
            }
            output: {
              resourceId?: string | undefined
              endpoint?: string | undefined
              setting?: 'send' | 'drop' | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { resourceId: string } } & {
              json: {
                endpoint?: string | undefined
                token?: string | undefined
                setting: 'send' | 'drop'
              }
            }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { resourceId: string } } & {
              json: {
                endpoint?: string | undefined
                token?: string | undefined
                setting: 'send' | 'drop'
              }
            }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { resourceId: string } } & {
              json: {
                endpoint?: string | undefined
                token?: string | undefined
                setting: 'send' | 'drop'
              }
            }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { resourceId: string } } & {
              json: {
                endpoint?: string | undefined
                token?: string | undefined
                setting: 'send' | 'drop'
              }
            }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { resourceId: string } } & {
              json: {
                endpoint?: string | undefined
                token?: string | undefined
                setting: 'send' | 'drop'
              }
            }
            output: Error
            outputFormat: 'json'
            status: 406
          }
        | {
            input: { param: { resourceId: string } } & {
              json: {
                endpoint?: string | undefined
                token?: string | undefined
                setting: 'send' | 'drop'
              }
            }
            output: Error
            outputFormat: 'json'
            status: 410
          }
        | {
            input: { param: { resourceId: string } } & {
              json: {
                endpoint?: string | undefined
                token?: string | undefined
                setting: 'send' | 'drop'
              }
            }
            output: Error
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { resourceId: string } } & {
              json: {
                endpoint?: string | undefined
                token?: string | undefined
                setting: 'send' | 'drop'
              }
            }
            output: Error
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { param: { resourceId: string } } & {
              json: {
                endpoint?: string | undefined
                token?: string | undefined
                setting: 'send' | 'drop'
              }
            }
            output: Error
            outputFormat: 'json'
            status: 503
          }
      $delete:
        | {
            input: { param: { resourceId: string } }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { resourceId: string } }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { resourceId: string } }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { resourceId: string } }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { resourceId: string } }
            output: Error
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { resourceId: string } }
            output: Error
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { param: { resourceId: string } }
            output: Error
            outputFormat: 'json'
            status: 503
          }
    }
  } & {
    '/metrics-stream/:ownerId': {
      $get:
        | {
            input: { param: { ownerId: string } }
            output: {
              ownerId: string
              provider:
                | 'BETTER_STACK'
                | 'GRAFANA'
                | 'DATADOG'
                | 'NEW_RELIC'
                | 'HONEYCOMB'
                | 'SIGNOZ'
                | 'GROUNDCOVER'
                | 'LOGFIRE'
                | 'CUSTOM'
              url: string
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { ownerId: string } }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | { input: { param: { ownerId: string } }; output: {}; outputFormat: string; status: 404 }
        | {
            input: { param: { ownerId: string } }
            output: Error
            outputFormat: 'json'
            status: 500
          }
      $put:
        | {
            input: { param: { ownerId: string } } & {
              json: {
                provider?:
                  | 'BETTER_STACK'
                  | 'GRAFANA'
                  | 'DATADOG'
                  | 'NEW_RELIC'
                  | 'HONEYCOMB'
                  | 'SIGNOZ'
                  | 'GROUNDCOVER'
                  | 'LOGFIRE'
                  | 'CUSTOM'
                  | undefined
                url?: string | undefined
                token?: string | undefined
              }
            }
            output: {
              ownerId: string
              provider:
                | 'BETTER_STACK'
                | 'GRAFANA'
                | 'DATADOG'
                | 'NEW_RELIC'
                | 'HONEYCOMB'
                | 'SIGNOZ'
                | 'GROUNDCOVER'
                | 'LOGFIRE'
                | 'CUSTOM'
              url: string
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { ownerId: string } } & {
              json: {
                provider?:
                  | 'BETTER_STACK'
                  | 'GRAFANA'
                  | 'DATADOG'
                  | 'NEW_RELIC'
                  | 'HONEYCOMB'
                  | 'SIGNOZ'
                  | 'GROUNDCOVER'
                  | 'LOGFIRE'
                  | 'CUSTOM'
                  | undefined
                url?: string | undefined
                token?: string | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { ownerId: string } } & {
              json: {
                provider?:
                  | 'BETTER_STACK'
                  | 'GRAFANA'
                  | 'DATADOG'
                  | 'NEW_RELIC'
                  | 'HONEYCOMB'
                  | 'SIGNOZ'
                  | 'GROUNDCOVER'
                  | 'LOGFIRE'
                  | 'CUSTOM'
                  | undefined
                url?: string | undefined
                token?: string | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 500
          }
      $delete:
        | { input: { param: { ownerId: string } }; output: {}; outputFormat: string; status: 204 }
        | {
            input: { param: { ownerId: string } }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | { input: { param: { ownerId: string } }; output: {}; outputFormat: string; status: 404 }
        | {
            input: { param: { ownerId: string } }
            output: Error
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/metrics/cpu': {
      $get:
        | {
            input: {
              query: {
                startTime?: string | undefined
                endTime?: string | undefined
                resolutionSeconds?: number | undefined
                resource?: string | undefined
                service?: string | undefined
                project?: string | undefined
                environment?: string | undefined
                instance?: string | undefined
                aggregationMethod?: 'AVG' | 'MAX' | 'MIN' | undefined
                region?: string | undefined
              }
            }
            output: {
              labels: { field: string; value: string }[]
              values: { timestamp: string; value: number }[]
              unit: string
            }[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                startTime?: string | undefined
                endTime?: string | undefined
                resolutionSeconds?: number | undefined
                resource?: string | undefined
                service?: string | undefined
                project?: string | undefined
                environment?: string | undefined
                instance?: string | undefined
                aggregationMethod?: 'AVG' | 'MAX' | 'MIN' | undefined
                region?: string | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                startTime?: string | undefined
                endTime?: string | undefined
                resolutionSeconds?: number | undefined
                resource?: string | undefined
                service?: string | undefined
                project?: string | undefined
                environment?: string | undefined
                instance?: string | undefined
                aggregationMethod?: 'AVG' | 'MAX' | 'MIN' | undefined
                region?: string | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: {
              query: {
                startTime?: string | undefined
                endTime?: string | undefined
                resolutionSeconds?: number | undefined
                resource?: string | undefined
                service?: string | undefined
                project?: string | undefined
                environment?: string | undefined
                instance?: string | undefined
                aggregationMethod?: 'AVG' | 'MAX' | 'MIN' | undefined
                region?: string | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/metrics/cpu-limit': {
      $get:
        | {
            input: {
              query: {
                startTime?: string | undefined
                endTime?: string | undefined
                resolutionSeconds?: number | undefined
                resource?: string | undefined
                service?: string | undefined
                project?: string | undefined
                environment?: string | undefined
                instance?: string | undefined
                region?: string | undefined
              }
            }
            output: {
              labels: { field: string; value: string }[]
              values: { timestamp: string; value: number }[]
              unit: string
            }[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                startTime?: string | undefined
                endTime?: string | undefined
                resolutionSeconds?: number | undefined
                resource?: string | undefined
                service?: string | undefined
                project?: string | undefined
                environment?: string | undefined
                instance?: string | undefined
                region?: string | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                startTime?: string | undefined
                endTime?: string | undefined
                resolutionSeconds?: number | undefined
                resource?: string | undefined
                service?: string | undefined
                project?: string | undefined
                environment?: string | undefined
                instance?: string | undefined
                region?: string | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: {
              query: {
                startTime?: string | undefined
                endTime?: string | undefined
                resolutionSeconds?: number | undefined
                resource?: string | undefined
                service?: string | undefined
                project?: string | undefined
                environment?: string | undefined
                instance?: string | undefined
                region?: string | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/metrics/cpu-target': {
      $get:
        | {
            input: {
              query: {
                startTime?: string | undefined
                endTime?: string | undefined
                resolutionSeconds?: number | undefined
                resource?: string | undefined
                service?: string | undefined
                project?: string | undefined
                environment?: string | undefined
                instance?: string | undefined
                region?: string | undefined
              }
            }
            output: {
              labels: { field: string; value: string }[]
              values: { timestamp: string; value: number }[]
              unit: string
            }[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                startTime?: string | undefined
                endTime?: string | undefined
                resolutionSeconds?: number | undefined
                resource?: string | undefined
                service?: string | undefined
                project?: string | undefined
                environment?: string | undefined
                instance?: string | undefined
                region?: string | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                startTime?: string | undefined
                endTime?: string | undefined
                resolutionSeconds?: number | undefined
                resource?: string | undefined
                service?: string | undefined
                project?: string | undefined
                environment?: string | undefined
                instance?: string | undefined
                region?: string | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: {
              query: {
                startTime?: string | undefined
                endTime?: string | undefined
                resolutionSeconds?: number | undefined
                resource?: string | undefined
                service?: string | undefined
                project?: string | undefined
                environment?: string | undefined
                instance?: string | undefined
                region?: string | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/metrics/memory': {
      $get:
        | {
            input: {
              query: {
                startTime?: string | undefined
                endTime?: string | undefined
                resolutionSeconds?: number | undefined
                resource?: string | undefined
                service?: string | undefined
                project?: string | undefined
                environment?: string | undefined
                instance?: string | undefined
                region?: string | undefined
              }
            }
            output: {
              labels: { field: string; value: string }[]
              values: { timestamp: string; value: number }[]
              unit: string
            }[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                startTime?: string | undefined
                endTime?: string | undefined
                resolutionSeconds?: number | undefined
                resource?: string | undefined
                service?: string | undefined
                project?: string | undefined
                environment?: string | undefined
                instance?: string | undefined
                region?: string | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                startTime?: string | undefined
                endTime?: string | undefined
                resolutionSeconds?: number | undefined
                resource?: string | undefined
                service?: string | undefined
                project?: string | undefined
                environment?: string | undefined
                instance?: string | undefined
                region?: string | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: {
              query: {
                startTime?: string | undefined
                endTime?: string | undefined
                resolutionSeconds?: number | undefined
                resource?: string | undefined
                service?: string | undefined
                project?: string | undefined
                environment?: string | undefined
                instance?: string | undefined
                region?: string | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/metrics/memory-limit': {
      $get:
        | {
            input: {
              query: {
                startTime?: string | undefined
                endTime?: string | undefined
                resolutionSeconds?: number | undefined
                resource?: string | undefined
                service?: string | undefined
                project?: string | undefined
                environment?: string | undefined
                instance?: string | undefined
                region?: string | undefined
              }
            }
            output: {
              labels: { field: string; value: string }[]
              values: { timestamp: string; value: number }[]
              unit: string
            }[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                startTime?: string | undefined
                endTime?: string | undefined
                resolutionSeconds?: number | undefined
                resource?: string | undefined
                service?: string | undefined
                project?: string | undefined
                environment?: string | undefined
                instance?: string | undefined
                region?: string | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                startTime?: string | undefined
                endTime?: string | undefined
                resolutionSeconds?: number | undefined
                resource?: string | undefined
                service?: string | undefined
                project?: string | undefined
                environment?: string | undefined
                instance?: string | undefined
                region?: string | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: {
              query: {
                startTime?: string | undefined
                endTime?: string | undefined
                resolutionSeconds?: number | undefined
                resource?: string | undefined
                service?: string | undefined
                project?: string | undefined
                environment?: string | undefined
                instance?: string | undefined
                region?: string | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/metrics/memory-target': {
      $get:
        | {
            input: {
              query: {
                startTime?: string | undefined
                endTime?: string | undefined
                resolutionSeconds?: number | undefined
                resource?: string | undefined
                service?: string | undefined
                project?: string | undefined
                environment?: string | undefined
                instance?: string | undefined
                region?: string | undefined
              }
            }
            output: {
              labels: { field: string; value: string }[]
              values: { timestamp: string; value: number }[]
              unit: string
            }[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                startTime?: string | undefined
                endTime?: string | undefined
                resolutionSeconds?: number | undefined
                resource?: string | undefined
                service?: string | undefined
                project?: string | undefined
                environment?: string | undefined
                instance?: string | undefined
                region?: string | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                startTime?: string | undefined
                endTime?: string | undefined
                resolutionSeconds?: number | undefined
                resource?: string | undefined
                service?: string | undefined
                project?: string | undefined
                environment?: string | undefined
                instance?: string | undefined
                region?: string | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: {
              query: {
                startTime?: string | undefined
                endTime?: string | undefined
                resolutionSeconds?: number | undefined
                resource?: string | undefined
                service?: string | undefined
                project?: string | undefined
                environment?: string | undefined
                instance?: string | undefined
                region?: string | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/metrics/http-requests': {
      $get:
        | {
            input: {
              query: {
                startTime?: string | undefined
                endTime?: string | undefined
                resolutionSeconds?: number | undefined
                resource?: string | undefined
                service?: string | undefined
                project?: string | undefined
                environment?: string | undefined
                host?: string | undefined
                path?: string | undefined
                aggregateBy?: 'statusCode' | 'host' | undefined
                region?: string | undefined
              }
            }
            output: {
              labels: { field: string; value: string }[]
              values: { timestamp: string; value: number }[]
              unit: string
            }[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                startTime?: string | undefined
                endTime?: string | undefined
                resolutionSeconds?: number | undefined
                resource?: string | undefined
                service?: string | undefined
                project?: string | undefined
                environment?: string | undefined
                host?: string | undefined
                path?: string | undefined
                aggregateBy?: 'statusCode' | 'host' | undefined
                region?: string | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                startTime?: string | undefined
                endTime?: string | undefined
                resolutionSeconds?: number | undefined
                resource?: string | undefined
                service?: string | undefined
                project?: string | undefined
                environment?: string | undefined
                host?: string | undefined
                path?: string | undefined
                aggregateBy?: 'statusCode' | 'host' | undefined
                region?: string | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: {
              query: {
                startTime?: string | undefined
                endTime?: string | undefined
                resolutionSeconds?: number | undefined
                resource?: string | undefined
                service?: string | undefined
                project?: string | undefined
                environment?: string | undefined
                host?: string | undefined
                path?: string | undefined
                aggregateBy?: 'statusCode' | 'host' | undefined
                region?: string | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/metrics/http-latency': {
      $get:
        | {
            input: {
              query: {
                startTime?: string | undefined
                endTime?: string | undefined
                resolutionSeconds?: number | undefined
                resource?: string | undefined
                service?: string | undefined
                project?: string | undefined
                environment?: string | undefined
                host?: string | undefined
                path?: string | undefined
                quantile?: number | undefined
                region?: string | undefined
              }
            }
            output: {
              labels: { field: string; value: string }[]
              values: { timestamp: string; value: number }[]
              unit: string
            }[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                startTime?: string | undefined
                endTime?: string | undefined
                resolutionSeconds?: number | undefined
                resource?: string | undefined
                service?: string | undefined
                project?: string | undefined
                environment?: string | undefined
                host?: string | undefined
                path?: string | undefined
                quantile?: number | undefined
                region?: string | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                startTime?: string | undefined
                endTime?: string | undefined
                resolutionSeconds?: number | undefined
                resource?: string | undefined
                service?: string | undefined
                project?: string | undefined
                environment?: string | undefined
                host?: string | undefined
                path?: string | undefined
                quantile?: number | undefined
                region?: string | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: {
              query: {
                startTime?: string | undefined
                endTime?: string | undefined
                resolutionSeconds?: number | undefined
                resource?: string | undefined
                service?: string | undefined
                project?: string | undefined
                environment?: string | undefined
                host?: string | undefined
                path?: string | undefined
                quantile?: number | undefined
                region?: string | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/metrics/bandwidth': {
      $get:
        | {
            input: {
              query: {
                startTime?: string | undefined
                endTime?: string | undefined
                resource?: string | undefined
                service?: string | undefined
                project?: string | undefined
                environment?: string | undefined
                region?: string | undefined
              }
            }
            output: {
              labels: { field: string; value: string }[]
              values: { timestamp: string; value: number }[]
              unit: string
            }[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                startTime?: string | undefined
                endTime?: string | undefined
                resource?: string | undefined
                service?: string | undefined
                project?: string | undefined
                environment?: string | undefined
                region?: string | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                startTime?: string | undefined
                endTime?: string | undefined
                resource?: string | undefined
                service?: string | undefined
                project?: string | undefined
                environment?: string | undefined
                region?: string | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: {
              query: {
                startTime?: string | undefined
                endTime?: string | undefined
                resource?: string | undefined
                service?: string | undefined
                project?: string | undefined
                environment?: string | undefined
                region?: string | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/metrics/bandwidth-sources': {
      $get:
        | {
            input: {
              query: {
                startTime?: string | undefined
                endTime?: string | undefined
                resource?: string | undefined
                service?: string | undefined
                project?: string | undefined
                environment?: string | undefined
                region?: string | undefined
              }
            }
            output: {
              data?:
                | {
                    labels?:
                      | {
                          resource?: string | undefined
                          trafficSource?:
                            | 'total'
                            | 'http'
                            | 'websocket'
                            | 'nat'
                            | 'privatelink'
                            | undefined
                        }
                      | undefined
                    values?:
                      | { timestamp?: number | undefined; value?: number | undefined }[]
                      | undefined
                  }[]
                | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                startTime?: string | undefined
                endTime?: string | undefined
                resource?: string | undefined
                service?: string | undefined
                project?: string | undefined
                environment?: string | undefined
                region?: string | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                startTime?: string | undefined
                endTime?: string | undefined
                resource?: string | undefined
                service?: string | undefined
                project?: string | undefined
                environment?: string | undefined
                region?: string | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: {
              query: {
                startTime?: string | undefined
                endTime?: string | undefined
                resource?: string | undefined
                service?: string | undefined
                project?: string | undefined
                environment?: string | undefined
                region?: string | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/metrics/disk-usage': {
      $get:
        | {
            input: {
              query: {
                startTime?: string | undefined
                endTime?: string | undefined
                resolutionSeconds?: number | undefined
                resource?: string | undefined
                service?: string | undefined
                project?: string | undefined
                environment?: string | undefined
                region?: string | undefined
              }
            }
            output: {
              labels: { field: string; value: string }[]
              values: { timestamp: string; value: number }[]
              unit: string
            }[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                startTime?: string | undefined
                endTime?: string | undefined
                resolutionSeconds?: number | undefined
                resource?: string | undefined
                service?: string | undefined
                project?: string | undefined
                environment?: string | undefined
                region?: string | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                startTime?: string | undefined
                endTime?: string | undefined
                resolutionSeconds?: number | undefined
                resource?: string | undefined
                service?: string | undefined
                project?: string | undefined
                environment?: string | undefined
                region?: string | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: {
              query: {
                startTime?: string | undefined
                endTime?: string | undefined
                resolutionSeconds?: number | undefined
                resource?: string | undefined
                service?: string | undefined
                project?: string | undefined
                environment?: string | undefined
                region?: string | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/metrics/disk-capacity': {
      $get:
        | {
            input: {
              query: {
                startTime?: string | undefined
                endTime?: string | undefined
                resolutionSeconds?: number | undefined
                resource?: string | undefined
                service?: string | undefined
                project?: string | undefined
                environment?: string | undefined
                region?: string | undefined
              }
            }
            output: {
              labels: { field: string; value: string }[]
              values: { timestamp: string; value: number }[]
              unit: string
            }[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                startTime?: string | undefined
                endTime?: string | undefined
                resolutionSeconds?: number | undefined
                resource?: string | undefined
                service?: string | undefined
                project?: string | undefined
                environment?: string | undefined
                region?: string | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                startTime?: string | undefined
                endTime?: string | undefined
                resolutionSeconds?: number | undefined
                resource?: string | undefined
                service?: string | undefined
                project?: string | undefined
                environment?: string | undefined
                region?: string | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: {
              query: {
                startTime?: string | undefined
                endTime?: string | undefined
                resolutionSeconds?: number | undefined
                resource?: string | undefined
                service?: string | undefined
                project?: string | undefined
                environment?: string | undefined
                region?: string | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/metrics/instance-count': {
      $get:
        | {
            input: {
              query: {
                startTime?: string | undefined
                endTime?: string | undefined
                resolutionSeconds?: number | undefined
                resource?: string | undefined
                service?: string | undefined
                project?: string | undefined
                environment?: string | undefined
                region?: string | undefined
              }
            }
            output: {
              labels: { field: string; value: string }[]
              values: { timestamp: string; value: number }[]
              unit: string
            }[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                startTime?: string | undefined
                endTime?: string | undefined
                resolutionSeconds?: number | undefined
                resource?: string | undefined
                service?: string | undefined
                project?: string | undefined
                environment?: string | undefined
                region?: string | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                startTime?: string | undefined
                endTime?: string | undefined
                resolutionSeconds?: number | undefined
                resource?: string | undefined
                service?: string | undefined
                project?: string | undefined
                environment?: string | undefined
                region?: string | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: {
              query: {
                startTime?: string | undefined
                endTime?: string | undefined
                resolutionSeconds?: number | undefined
                resource?: string | undefined
                service?: string | undefined
                project?: string | undefined
                environment?: string | undefined
                region?: string | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/metrics/active-connections': {
      $get:
        | {
            input: {
              query: {
                startTime?: string | undefined
                endTime?: string | undefined
                resolutionSeconds?: number | undefined
                resource?: string | undefined
                project?: string | undefined
                environment?: string | undefined
                region?: string | undefined
              }
            }
            output: {
              labels: { field: string; value: string }[]
              values: { timestamp: string; value: number }[]
              unit: string
            }[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                startTime?: string | undefined
                endTime?: string | undefined
                resolutionSeconds?: number | undefined
                resource?: string | undefined
                project?: string | undefined
                environment?: string | undefined
                region?: string | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                startTime?: string | undefined
                endTime?: string | undefined
                resolutionSeconds?: number | undefined
                resource?: string | undefined
                project?: string | undefined
                environment?: string | undefined
                region?: string | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: {
              query: {
                startTime?: string | undefined
                endTime?: string | undefined
                resolutionSeconds?: number | undefined
                resource?: string | undefined
                project?: string | undefined
                environment?: string | undefined
                region?: string | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/metrics/replication-lag': {
      $get:
        | {
            input: {
              query: {
                startTime?: string | undefined
                endTime?: string | undefined
                resolutionSeconds?: number | undefined
                resource?: string | undefined
                project?: string | undefined
                environment?: string | undefined
                region?: string | undefined
              }
            }
            output: {
              labels: { field: string; value: string }[]
              values: { timestamp: string; value: number }[]
              unit: string
            }[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                startTime?: string | undefined
                endTime?: string | undefined
                resolutionSeconds?: number | undefined
                resource?: string | undefined
                project?: string | undefined
                environment?: string | undefined
                region?: string | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                startTime?: string | undefined
                endTime?: string | undefined
                resolutionSeconds?: number | undefined
                resource?: string | undefined
                project?: string | undefined
                environment?: string | undefined
                region?: string | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: {
              query: {
                startTime?: string | undefined
                endTime?: string | undefined
                resolutionSeconds?: number | undefined
                resource?: string | undefined
                project?: string | undefined
                environment?: string | undefined
                region?: string | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/metrics/filters/application': {
      $get:
        | {
            input: {
              query: {
                startTime?: string | undefined
                endTime?: string | undefined
                resolutionSeconds?: number | undefined
                resource?: string | undefined
                service?: string | undefined
                project?: string | undefined
                environment?: string | undefined
                region?: string | undefined
              }
            }
            output: { filter?: 'instance' | undefined; values?: string[] | undefined }[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                startTime?: string | undefined
                endTime?: string | undefined
                resolutionSeconds?: number | undefined
                resource?: string | undefined
                service?: string | undefined
                project?: string | undefined
                environment?: string | undefined
                region?: string | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                startTime?: string | undefined
                endTime?: string | undefined
                resolutionSeconds?: number | undefined
                resource?: string | undefined
                service?: string | undefined
                project?: string | undefined
                environment?: string | undefined
                region?: string | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: {
              query: {
                startTime?: string | undefined
                endTime?: string | undefined
                resolutionSeconds?: number | undefined
                resource?: string | undefined
                service?: string | undefined
                project?: string | undefined
                environment?: string | undefined
                region?: string | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/metrics/filters/http': {
      $get:
        | {
            input: {
              query: {
                startTime?: string | undefined
                endTime?: string | undefined
                resolutionSeconds?: number | undefined
                resource?: string | undefined
                service?: string | undefined
                project?: string | undefined
                environment?: string | undefined
                host?: string | undefined
                statusCode?: string | undefined
                region?: string | undefined
              }
            }
            output: { filter?: 'host' | 'statusCode' | undefined; values?: string[] | undefined }[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                startTime?: string | undefined
                endTime?: string | undefined
                resolutionSeconds?: number | undefined
                resource?: string | undefined
                service?: string | undefined
                project?: string | undefined
                environment?: string | undefined
                host?: string | undefined
                statusCode?: string | undefined
                region?: string | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                startTime?: string | undefined
                endTime?: string | undefined
                resolutionSeconds?: number | undefined
                resource?: string | undefined
                service?: string | undefined
                project?: string | undefined
                environment?: string | undefined
                host?: string | undefined
                statusCode?: string | undefined
                region?: string | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: {
              query: {
                startTime?: string | undefined
                endTime?: string | undefined
                resolutionSeconds?: number | undefined
                resource?: string | undefined
                service?: string | undefined
                project?: string | undefined
                environment?: string | undefined
                host?: string | undefined
                statusCode?: string | undefined
                region?: string | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/metrics/filters/path': {
      $get:
        | {
            input: {
              query: {
                startTime?: string | undefined
                endTime?: string | undefined
                resolutionSeconds?: number | undefined
                resource?: string | undefined
                service?: string | undefined
                project?: string | undefined
                environment?: string | undefined
                host?: string | undefined
                statusCode?: string | undefined
                path?: string | undefined
                region?: string | undefined
              }
            }
            output: string[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                startTime?: string | undefined
                endTime?: string | undefined
                resolutionSeconds?: number | undefined
                resource?: string | undefined
                service?: string | undefined
                project?: string | undefined
                environment?: string | undefined
                host?: string | undefined
                statusCode?: string | undefined
                path?: string | undefined
                region?: string | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                startTime?: string | undefined
                endTime?: string | undefined
                resolutionSeconds?: number | undefined
                resource?: string | undefined
                service?: string | undefined
                project?: string | undefined
                environment?: string | undefined
                host?: string | undefined
                statusCode?: string | undefined
                path?: string | undefined
                region?: string | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: {
              query: {
                startTime?: string | undefined
                endTime?: string | undefined
                resolutionSeconds?: number | undefined
                resource?: string | undefined
                service?: string | undefined
                project?: string | undefined
                environment?: string | undefined
                host?: string | undefined
                statusCode?: string | undefined
                path?: string | undefined
                region?: string | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/metrics/task-runs-queued': {
      $get:
        | {
            input: {
              query: {
                startTime?: string | undefined
                endTime?: string | undefined
                resolutionSeconds?: number | undefined
                resource?: string | undefined
              }
            }
            output: {
              labels: { field: string; value: string }[]
              values: { timestamp: string; value: number }[]
              unit: string
            }[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                startTime?: string | undefined
                endTime?: string | undefined
                resolutionSeconds?: number | undefined
                resource?: string | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                startTime?: string | undefined
                endTime?: string | undefined
                resolutionSeconds?: number | undefined
                resource?: string | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/metrics/task-runs-completed': {
      $get:
        | {
            input: {
              query: {
                startTime?: string | undefined
                endTime?: string | undefined
                resolutionSeconds?: number | undefined
                resource?: string | undefined
                state?: 'succeeded' | 'failed' | undefined
                aggregateBy?: 'state' | undefined
              }
            }
            output: {
              labels: { field: string; value: string }[]
              values: { timestamp: string; value: number }[]
              unit: string
            }[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                startTime?: string | undefined
                endTime?: string | undefined
                resolutionSeconds?: number | undefined
                resource?: string | undefined
                state?: 'succeeded' | 'failed' | undefined
                aggregateBy?: 'state' | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                startTime?: string | undefined
                endTime?: string | undefined
                resolutionSeconds?: number | undefined
                resource?: string | undefined
                state?: 'succeeded' | 'failed' | undefined
                aggregateBy?: 'state' | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/key-value': {
      $get:
        | {
            input: {
              query: {
                name?: string[] | undefined
                region?: Region[] | undefined
                createdBefore?: string | undefined
                createdAfter?: string | undefined
                updatedBefore?: string | undefined
                updatedAfter?: string | undefined
                ownerId?: string[] | undefined
                environmentId?: string[] | undefined
                cursor?: string | undefined
                limit?: number | undefined
              }
            }
            output: KeyValueWithCursor[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                name?: string[] | undefined
                region?: Region[] | undefined
                createdBefore?: string | undefined
                createdAfter?: string | undefined
                updatedBefore?: string | undefined
                updatedAfter?: string | undefined
                ownerId?: string[] | undefined
                environmentId?: string[] | undefined
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
                name?: string[] | undefined
                region?: Region[] | undefined
                createdBefore?: string | undefined
                createdAfter?: string | undefined
                updatedBefore?: string | undefined
                updatedAfter?: string | undefined
                ownerId?: string[] | undefined
                environmentId?: string[] | undefined
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
                name?: string[] | undefined
                region?: Region[] | undefined
                createdBefore?: string | undefined
                createdAfter?: string | undefined
                updatedBefore?: string | undefined
                updatedAfter?: string | undefined
                ownerId?: string[] | undefined
                environmentId?: string[] | undefined
                cursor?: string | undefined
                limit?: number | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: {
              query: {
                name?: string[] | undefined
                region?: Region[] | undefined
                createdBefore?: string | undefined
                createdAfter?: string | undefined
                updatedBefore?: string | undefined
                updatedAfter?: string | undefined
                ownerId?: string[] | undefined
                environmentId?: string[] | undefined
                cursor?: string | undefined
                limit?: number | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 409
          }
        | {
            input: {
              query: {
                name?: string[] | undefined
                region?: Region[] | undefined
                createdBefore?: string | undefined
                createdAfter?: string | undefined
                updatedBefore?: string | undefined
                updatedAfter?: string | undefined
                ownerId?: string[] | undefined
                environmentId?: string[] | undefined
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
                name?: string[] | undefined
                region?: Region[] | undefined
                createdBefore?: string | undefined
                createdAfter?: string | undefined
                updatedBefore?: string | undefined
                updatedAfter?: string | undefined
                ownerId?: string[] | undefined
                environmentId?: string[] | undefined
                cursor?: string | undefined
                limit?: number | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 500
          }
        | {
            input: {
              query: {
                name?: string[] | undefined
                region?: Region[] | undefined
                createdBefore?: string | undefined
                createdAfter?: string | undefined
                updatedBefore?: string | undefined
                updatedAfter?: string | undefined
                ownerId?: string[] | undefined
                environmentId?: string[] | undefined
                cursor?: string | undefined
                limit?: number | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 503
          }
      $post:
        | {
            input: { json: KeyValuePOSTInput }
            output: KeyValueDetail
            outputFormat: 'json'
            status: 201
          }
        | { input: { json: KeyValuePOSTInput }; output: Error; outputFormat: 'json'; status: 400 }
        | { input: { json: KeyValuePOSTInput }; output: Error; outputFormat: 'json'; status: 401 }
        | { input: { json: KeyValuePOSTInput }; output: Error; outputFormat: 'json'; status: 404 }
        | { input: { json: KeyValuePOSTInput }; output: Error; outputFormat: 'json'; status: 429 }
        | { input: { json: KeyValuePOSTInput }; output: Error; outputFormat: 'json'; status: 500 }
        | { input: { json: KeyValuePOSTInput }; output: Error; outputFormat: 'json'; status: 503 }
    }
  } & {
    '/key-value/:redisId': {
      $get:
        | {
            input: { param: { redisId: string } }
            output: KeyValueDetail
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { redisId: string } }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { redisId: string } }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { redisId: string } }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { redisId: string } }
            output: Error
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { redisId: string } }
            output: Error
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { param: { redisId: string } }
            output: Error
            outputFormat: 'json'
            status: 503
          }
      $patch:
        | {
            input: { param: { redisId: string } } & { json: KeyValuePATCHInput }
            output: KeyValueDetail
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { redisId: string } } & { json: KeyValuePATCHInput }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { redisId: string } } & { json: KeyValuePATCHInput }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { redisId: string } } & { json: KeyValuePATCHInput }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { redisId: string } } & { json: KeyValuePATCHInput }
            output: Error
            outputFormat: 'json'
            status: 409
          }
        | {
            input: { param: { redisId: string } } & { json: KeyValuePATCHInput }
            output: Error
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { redisId: string } } & { json: KeyValuePATCHInput }
            output: Error
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { param: { redisId: string } } & { json: KeyValuePATCHInput }
            output: Error
            outputFormat: 'json'
            status: 503
          }
      $delete:
        | { input: { param: { redisId: string } }; output: {}; outputFormat: string; status: 204 }
        | {
            input: { param: { redisId: string } }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { redisId: string } }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { redisId: string } }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { redisId: string } }
            output: Error
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { redisId: string } }
            output: Error
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { param: { redisId: string } }
            output: Error
            outputFormat: 'json'
            status: 503
          }
    }
  } & {
    '/key-value/:redisId/connection-info': {
      $get:
        | {
            input: { param: { redisId: string } }
            output: KeyValueConnectionInfo
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { redisId: string } }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { redisId: string } }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { redisId: string } }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { redisId: string } }
            output: Error
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { redisId: string } }
            output: Error
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { param: { redisId: string } }
            output: Error
            outputFormat: 'json'
            status: 503
          }
    }
  } & {
    '/key-value/:redisId/suspend': {
      $post:
        | { input: { param: { redisId: string } }; output: {}; outputFormat: string; status: 202 }
        | {
            input: { param: { redisId: string } }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { redisId: string } }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { redisId: string } }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { redisId: string } }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { redisId: string } }
            output: Error
            outputFormat: 'json'
            status: 406
          }
        | {
            input: { param: { redisId: string } }
            output: Error
            outputFormat: 'json'
            status: 410
          }
        | {
            input: { param: { redisId: string } }
            output: Error
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { redisId: string } }
            output: Error
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { param: { redisId: string } }
            output: Error
            outputFormat: 'json'
            status: 503
          }
    }
  } & {
    '/key-value/:redisId/resume': {
      $post:
        | { input: { param: { redisId: string } }; output: {}; outputFormat: string; status: 202 }
        | {
            input: { param: { redisId: string } }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { redisId: string } }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { redisId: string } }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { redisId: string } }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { redisId: string } }
            output: Error
            outputFormat: 'json'
            status: 406
          }
        | {
            input: { param: { redisId: string } }
            output: Error
            outputFormat: 'json'
            status: 410
          }
        | {
            input: { param: { redisId: string } }
            output: Error
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { redisId: string } }
            output: Error
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { param: { redisId: string } }
            output: Error
            outputFormat: 'json'
            status: 503
          }
    }
  } & {
    '/redis': {
      $get:
        | {
            input: {
              query: {
                name?: string[] | undefined
                region?: Region[] | undefined
                createdBefore?: string | undefined
                createdAfter?: string | undefined
                updatedBefore?: string | undefined
                updatedAfter?: string | undefined
                ownerId?: string[] | undefined
                environmentId?: string[] | undefined
                cursor?: string | undefined
                limit?: number | undefined
              }
            }
            output: RedisWithCursor[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                name?: string[] | undefined
                region?: Region[] | undefined
                createdBefore?: string | undefined
                createdAfter?: string | undefined
                updatedBefore?: string | undefined
                updatedAfter?: string | undefined
                ownerId?: string[] | undefined
                environmentId?: string[] | undefined
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
                name?: string[] | undefined
                region?: Region[] | undefined
                createdBefore?: string | undefined
                createdAfter?: string | undefined
                updatedBefore?: string | undefined
                updatedAfter?: string | undefined
                ownerId?: string[] | undefined
                environmentId?: string[] | undefined
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
                name?: string[] | undefined
                region?: Region[] | undefined
                createdBefore?: string | undefined
                createdAfter?: string | undefined
                updatedBefore?: string | undefined
                updatedAfter?: string | undefined
                ownerId?: string[] | undefined
                environmentId?: string[] | undefined
                cursor?: string | undefined
                limit?: number | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: {
              query: {
                name?: string[] | undefined
                region?: Region[] | undefined
                createdBefore?: string | undefined
                createdAfter?: string | undefined
                updatedBefore?: string | undefined
                updatedAfter?: string | undefined
                ownerId?: string[] | undefined
                environmentId?: string[] | undefined
                cursor?: string | undefined
                limit?: number | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 409
          }
        | {
            input: {
              query: {
                name?: string[] | undefined
                region?: Region[] | undefined
                createdBefore?: string | undefined
                createdAfter?: string | undefined
                updatedBefore?: string | undefined
                updatedAfter?: string | undefined
                ownerId?: string[] | undefined
                environmentId?: string[] | undefined
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
                name?: string[] | undefined
                region?: Region[] | undefined
                createdBefore?: string | undefined
                createdAfter?: string | undefined
                updatedBefore?: string | undefined
                updatedAfter?: string | undefined
                ownerId?: string[] | undefined
                environmentId?: string[] | undefined
                cursor?: string | undefined
                limit?: number | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 500
          }
        | {
            input: {
              query: {
                name?: string[] | undefined
                region?: Region[] | undefined
                createdBefore?: string | undefined
                createdAfter?: string | undefined
                updatedBefore?: string | undefined
                updatedAfter?: string | undefined
                ownerId?: string[] | undefined
                environmentId?: string[] | undefined
                cursor?: string | undefined
                limit?: number | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 503
          }
      $post:
        | {
            input: { json: RedisPOSTInput }
            output: RedisDetail
            outputFormat: 'json'
            status: 201
          }
        | { input: { json: RedisPOSTInput }; output: Error; outputFormat: 'json'; status: 400 }
        | { input: { json: RedisPOSTInput }; output: Error; outputFormat: 'json'; status: 401 }
        | { input: { json: RedisPOSTInput }; output: Error; outputFormat: 'json'; status: 404 }
        | { input: { json: RedisPOSTInput }; output: Error; outputFormat: 'json'; status: 429 }
        | { input: { json: RedisPOSTInput }; output: Error; outputFormat: 'json'; status: 500 }
        | { input: { json: RedisPOSTInput }; output: Error; outputFormat: 'json'; status: 503 }
    }
  } & {
    '/redis/:redisId': {
      $get:
        | {
            input: { param: { redisId: string } }
            output: RedisDetail
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { redisId: string } }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { redisId: string } }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { redisId: string } }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { redisId: string } }
            output: Error
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { redisId: string } }
            output: Error
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { param: { redisId: string } }
            output: Error
            outputFormat: 'json'
            status: 503
          }
      $patch:
        | {
            input: { param: { redisId: string } } & { json: RedisPATCHInput }
            output: RedisDetail
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { redisId: string } } & { json: RedisPATCHInput }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { redisId: string } } & { json: RedisPATCHInput }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { redisId: string } } & { json: RedisPATCHInput }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { redisId: string } } & { json: RedisPATCHInput }
            output: Error
            outputFormat: 'json'
            status: 409
          }
        | {
            input: { param: { redisId: string } } & { json: RedisPATCHInput }
            output: Error
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { redisId: string } } & { json: RedisPATCHInput }
            output: Error
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { param: { redisId: string } } & { json: RedisPATCHInput }
            output: Error
            outputFormat: 'json'
            status: 503
          }
      $delete:
        | { input: { param: { redisId: string } }; output: {}; outputFormat: string; status: 204 }
        | {
            input: { param: { redisId: string } }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { redisId: string } }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { redisId: string } }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { redisId: string } }
            output: Error
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { redisId: string } }
            output: Error
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { param: { redisId: string } }
            output: Error
            outputFormat: 'json'
            status: 503
          }
    }
  } & {
    '/redis/:redisId/connection-info': {
      $get:
        | {
            input: { param: { redisId: string } }
            output: RedisConnectionInfo
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { redisId: string } }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { redisId: string } }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { redisId: string } }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { redisId: string } }
            output: Error
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { redisId: string } }
            output: Error
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { param: { redisId: string } }
            output: Error
            outputFormat: 'json'
            status: 503
          }
    }
  } & {
    '/redis/:redisId/suspend': {
      $post:
        | { input: { param: { redisId: string } }; output: {}; outputFormat: string; status: 202 }
        | {
            input: { param: { redisId: string } }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { redisId: string } }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { redisId: string } }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { redisId: string } }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { redisId: string } }
            output: Error
            outputFormat: 'json'
            status: 406
          }
        | {
            input: { param: { redisId: string } }
            output: Error
            outputFormat: 'json'
            status: 410
          }
        | {
            input: { param: { redisId: string } }
            output: Error
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { redisId: string } }
            output: Error
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { param: { redisId: string } }
            output: Error
            outputFormat: 'json'
            status: 503
          }
    }
  } & {
    '/redis/:redisId/resume': {
      $post:
        | { input: { param: { redisId: string } }; output: {}; outputFormat: string; status: 202 }
        | {
            input: { param: { redisId: string } }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { redisId: string } }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { redisId: string } }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { redisId: string } }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { redisId: string } }
            output: Error
            outputFormat: 'json'
            status: 406
          }
        | {
            input: { param: { redisId: string } }
            output: Error
            outputFormat: 'json'
            status: 410
          }
        | {
            input: { param: { redisId: string } }
            output: Error
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { redisId: string } }
            output: Error
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { param: { redisId: string } }
            output: Error
            outputFormat: 'json'
            status: 503
          }
    }
  } & {
    '/postgres': {
      $get:
        | {
            input: {
              query: {
                name?: string[] | undefined
                region?: Region[] | undefined
                suspended?: ('suspended' | 'not_suspended')[] | undefined
                createdBefore?: string | undefined
                createdAfter?: string | undefined
                updatedBefore?: string | undefined
                updatedAfter?: string | undefined
                ownerId?: string[] | undefined
                environmentId?: string[] | undefined
                includeReplicas?: boolean | undefined
                cursor?: string | undefined
                limit?: number | undefined
              }
            }
            output: PostgresWithCursor[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                name?: string[] | undefined
                region?: Region[] | undefined
                suspended?: ('suspended' | 'not_suspended')[] | undefined
                createdBefore?: string | undefined
                createdAfter?: string | undefined
                updatedBefore?: string | undefined
                updatedAfter?: string | undefined
                ownerId?: string[] | undefined
                environmentId?: string[] | undefined
                includeReplicas?: boolean | undefined
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
                name?: string[] | undefined
                region?: Region[] | undefined
                suspended?: ('suspended' | 'not_suspended')[] | undefined
                createdBefore?: string | undefined
                createdAfter?: string | undefined
                updatedBefore?: string | undefined
                updatedAfter?: string | undefined
                ownerId?: string[] | undefined
                environmentId?: string[] | undefined
                includeReplicas?: boolean | undefined
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
                name?: string[] | undefined
                region?: Region[] | undefined
                suspended?: ('suspended' | 'not_suspended')[] | undefined
                createdBefore?: string | undefined
                createdAfter?: string | undefined
                updatedBefore?: string | undefined
                updatedAfter?: string | undefined
                ownerId?: string[] | undefined
                environmentId?: string[] | undefined
                includeReplicas?: boolean | undefined
                cursor?: string | undefined
                limit?: number | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: {
              query: {
                name?: string[] | undefined
                region?: Region[] | undefined
                suspended?: ('suspended' | 'not_suspended')[] | undefined
                createdBefore?: string | undefined
                createdAfter?: string | undefined
                updatedBefore?: string | undefined
                updatedAfter?: string | undefined
                ownerId?: string[] | undefined
                environmentId?: string[] | undefined
                includeReplicas?: boolean | undefined
                cursor?: string | undefined
                limit?: number | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 409
          }
        | {
            input: {
              query: {
                name?: string[] | undefined
                region?: Region[] | undefined
                suspended?: ('suspended' | 'not_suspended')[] | undefined
                createdBefore?: string | undefined
                createdAfter?: string | undefined
                updatedBefore?: string | undefined
                updatedAfter?: string | undefined
                ownerId?: string[] | undefined
                environmentId?: string[] | undefined
                includeReplicas?: boolean | undefined
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
                name?: string[] | undefined
                region?: Region[] | undefined
                suspended?: ('suspended' | 'not_suspended')[] | undefined
                createdBefore?: string | undefined
                createdAfter?: string | undefined
                updatedBefore?: string | undefined
                updatedAfter?: string | undefined
                ownerId?: string[] | undefined
                environmentId?: string[] | undefined
                includeReplicas?: boolean | undefined
                cursor?: string | undefined
                limit?: number | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 500
          }
        | {
            input: {
              query: {
                name?: string[] | undefined
                region?: Region[] | undefined
                suspended?: ('suspended' | 'not_suspended')[] | undefined
                createdBefore?: string | undefined
                createdAfter?: string | undefined
                updatedBefore?: string | undefined
                updatedAfter?: string | undefined
                ownerId?: string[] | undefined
                environmentId?: string[] | undefined
                includeReplicas?: boolean | undefined
                cursor?: string | undefined
                limit?: number | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 503
          }
      $post:
        | {
            input: { json: PostgresPOSTInput }
            output: PostgresDetail
            outputFormat: 'json'
            status: 201
          }
        | { input: { json: PostgresPOSTInput }; output: Error; outputFormat: 'json'; status: 400 }
        | { input: { json: PostgresPOSTInput }; output: Error; outputFormat: 'json'; status: 401 }
        | { input: { json: PostgresPOSTInput }; output: Error; outputFormat: 'json'; status: 404 }
        | { input: { json: PostgresPOSTInput }; output: Error; outputFormat: 'json'; status: 429 }
        | { input: { json: PostgresPOSTInput }; output: Error; outputFormat: 'json'; status: 500 }
        | { input: { json: PostgresPOSTInput }; output: Error; outputFormat: 'json'; status: 503 }
    }
  } & {
    '/postgres/:postgresId': {
      $get:
        | {
            input: { param: { postgresId: string } }
            output: PostgresDetail
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { postgresId: string } }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { postgresId: string } }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { postgresId: string } }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { postgresId: string } }
            output: Error
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { postgresId: string } }
            output: Error
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { param: { postgresId: string } }
            output: Error
            outputFormat: 'json'
            status: 503
          }
      $patch:
        | {
            input: { param: { postgresId: string } } & { json: PostgresPATCHInput }
            output: PostgresDetail
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { postgresId: string } } & { json: PostgresPATCHInput }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { postgresId: string } } & { json: PostgresPATCHInput }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { postgresId: string } } & { json: PostgresPATCHInput }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { postgresId: string } } & { json: PostgresPATCHInput }
            output: Error
            outputFormat: 'json'
            status: 409
          }
        | {
            input: { param: { postgresId: string } } & { json: PostgresPATCHInput }
            output: Error
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { postgresId: string } } & { json: PostgresPATCHInput }
            output: Error
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { param: { postgresId: string } } & { json: PostgresPATCHInput }
            output: Error
            outputFormat: 'json'
            status: 503
          }
      $delete:
        | {
            input: { param: { postgresId: string } }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { postgresId: string } }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { postgresId: string } }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { postgresId: string } }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { postgresId: string } }
            output: Error
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { postgresId: string } }
            output: Error
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { param: { postgresId: string } }
            output: Error
            outputFormat: 'json'
            status: 503
          }
    }
  } & {
    '/postgres/:postgresId/connection-info': {
      $get:
        | {
            input: { param: { postgresId: string } }
            output: PostgresConnectionInfo
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { postgresId: string } }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { postgresId: string } }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { postgresId: string } }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { postgresId: string } }
            output: Error
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { postgresId: string } }
            output: Error
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { param: { postgresId: string } }
            output: Error
            outputFormat: 'json'
            status: 503
          }
    }
  } & {
    '/postgres/:postgresId/recovery': {
      $get:
        | {
            input: { param: { postgresId: string } }
            output: {
              recoveryStatus: 'AVAILABLE' | 'BACKUP_NOT_READY' | 'NOT_AVAILABLE'
              startsAt?: string | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { postgresId: string } }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { postgresId: string } }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { postgresId: string } }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { postgresId: string } }
            output: Error
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { postgresId: string } }
            output: Error
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { param: { postgresId: string } }
            output: Error
            outputFormat: 'json'
            status: 503
          }
      $post:
        | {
            input: { param: { postgresId: string } } & {
              json: {
                restoreName?: string | undefined
                restoreTime?: string | undefined
                datadogApiKey?: string | undefined
                datadogSite?: string | undefined
                plan?: string | undefined
                environmentId?: string | undefined
              }
            }
            output: PostgresDetail
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { postgresId: string } } & {
              json: {
                restoreName?: string | undefined
                restoreTime?: string | undefined
                datadogApiKey?: string | undefined
                datadogSite?: string | undefined
                plan?: string | undefined
                environmentId?: string | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { postgresId: string } } & {
              json: {
                restoreName?: string | undefined
                restoreTime?: string | undefined
                datadogApiKey?: string | undefined
                datadogSite?: string | undefined
                plan?: string | undefined
                environmentId?: string | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { postgresId: string } } & {
              json: {
                restoreName?: string | undefined
                restoreTime?: string | undefined
                datadogApiKey?: string | undefined
                datadogSite?: string | undefined
                plan?: string | undefined
                environmentId?: string | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { postgresId: string } } & {
              json: {
                restoreName?: string | undefined
                restoreTime?: string | undefined
                datadogApiKey?: string | undefined
                datadogSite?: string | undefined
                plan?: string | undefined
                environmentId?: string | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { postgresId: string } } & {
              json: {
                restoreName?: string | undefined
                restoreTime?: string | undefined
                datadogApiKey?: string | undefined
                datadogSite?: string | undefined
                plan?: string | undefined
                environmentId?: string | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 406
          }
        | {
            input: { param: { postgresId: string } } & {
              json: {
                restoreName?: string | undefined
                restoreTime?: string | undefined
                datadogApiKey?: string | undefined
                datadogSite?: string | undefined
                plan?: string | undefined
                environmentId?: string | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 410
          }
        | {
            input: { param: { postgresId: string } } & {
              json: {
                restoreName?: string | undefined
                restoreTime?: string | undefined
                datadogApiKey?: string | undefined
                datadogSite?: string | undefined
                plan?: string | undefined
                environmentId?: string | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { postgresId: string } } & {
              json: {
                restoreName?: string | undefined
                restoreTime?: string | undefined
                datadogApiKey?: string | undefined
                datadogSite?: string | undefined
                plan?: string | undefined
                environmentId?: string | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { param: { postgresId: string } } & {
              json: {
                restoreName?: string | undefined
                restoreTime?: string | undefined
                datadogApiKey?: string | undefined
                datadogSite?: string | undefined
                plan?: string | undefined
                environmentId?: string | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 503
          }
    }
  } & {
    '/postgres/:postgresId/suspend': {
      $post:
        | {
            input: { param: { postgresId: string } }
            output: {}
            outputFormat: string
            status: 202
          }
        | {
            input: { param: { postgresId: string } }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { postgresId: string } }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { postgresId: string } }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { postgresId: string } }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { postgresId: string } }
            output: Error
            outputFormat: 'json'
            status: 406
          }
        | {
            input: { param: { postgresId: string } }
            output: Error
            outputFormat: 'json'
            status: 410
          }
        | {
            input: { param: { postgresId: string } }
            output: Error
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { postgresId: string } }
            output: Error
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { param: { postgresId: string } }
            output: Error
            outputFormat: 'json'
            status: 503
          }
    }
  } & {
    '/postgres/:postgresId/resume': {
      $post:
        | {
            input: { param: { postgresId: string } }
            output: {}
            outputFormat: string
            status: 202
          }
        | {
            input: { param: { postgresId: string } }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { postgresId: string } }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { postgresId: string } }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { postgresId: string } }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { postgresId: string } }
            output: Error
            outputFormat: 'json'
            status: 406
          }
        | {
            input: { param: { postgresId: string } }
            output: Error
            outputFormat: 'json'
            status: 410
          }
        | {
            input: { param: { postgresId: string } }
            output: Error
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { postgresId: string } }
            output: Error
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { param: { postgresId: string } }
            output: Error
            outputFormat: 'json'
            status: 503
          }
    }
  } & {
    '/postgres/:postgresId/restart': {
      $post:
        | {
            input: { param: { postgresId: string } }
            output: {}
            outputFormat: string
            status: 202
          }
        | {
            input: { param: { postgresId: string } }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { postgresId: string } }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { postgresId: string } }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { postgresId: string } }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { postgresId: string } }
            output: Error
            outputFormat: 'json'
            status: 406
          }
        | {
            input: { param: { postgresId: string } }
            output: Error
            outputFormat: 'json'
            status: 410
          }
        | {
            input: { param: { postgresId: string } }
            output: Error
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { postgresId: string } }
            output: Error
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { param: { postgresId: string } }
            output: Error
            outputFormat: 'json'
            status: 503
          }
    }
  } & {
    '/postgres/:postgresId/failover': {
      $post:
        | {
            input: { param: { postgresId: string } }
            output: {}
            outputFormat: string
            status: 202
          }
        | {
            input: { param: { postgresId: string } }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { postgresId: string } }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { postgresId: string } }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { postgresId: string } }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { postgresId: string } }
            output: Error
            outputFormat: 'json'
            status: 406
          }
        | {
            input: { param: { postgresId: string } }
            output: Error
            outputFormat: 'json'
            status: 410
          }
        | {
            input: { param: { postgresId: string } }
            output: Error
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { postgresId: string } }
            output: Error
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { param: { postgresId: string } }
            output: Error
            outputFormat: 'json'
            status: 503
          }
    }
  } & {
    '/postgres/:postgresId/export': {
      $get:
        | {
            input: { param: { postgresId: string } }
            output: { id: string; createdAt: string; url?: string | undefined }[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { postgresId: string } }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { postgresId: string } }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { postgresId: string } }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { postgresId: string } }
            output: Error
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { postgresId: string } }
            output: Error
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { param: { postgresId: string } }
            output: Error
            outputFormat: 'json'
            status: 503
          }
      $post:
        | {
            input: { param: { postgresId: string } }
            output: {}
            outputFormat: string
            status: 202
          }
        | {
            input: { param: { postgresId: string } }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { postgresId: string } }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { postgresId: string } }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { postgresId: string } }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { postgresId: string } }
            output: Error
            outputFormat: 'json'
            status: 406
          }
        | {
            input: { param: { postgresId: string } }
            output: Error
            outputFormat: 'json'
            status: 410
          }
        | {
            input: { param: { postgresId: string } }
            output: Error
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { postgresId: string } }
            output: Error
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { param: { postgresId: string } }
            output: Error
            outputFormat: 'json'
            status: 503
          }
    }
  } & {
    '/postgres/:postgresId/credentials': {
      $get:
        | {
            input: { param: { postgresId: string } }
            output: {
              username?: string | undefined
              default?: boolean | undefined
              createdAt?: string | undefined
              openConnections?: number | undefined
            }[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { postgresId: string } }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { postgresId: string } }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { postgresId: string } }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { postgresId: string } }
            output: Error
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { postgresId: string } }
            output: Error
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { param: { postgresId: string } }
            output: Error
            outputFormat: 'json'
            status: 503
          }
      $post:
        | {
            input: { param: { postgresId: string } } & { json: { username: string } }
            output: {}
            outputFormat: string
            status: 202
          }
        | {
            input: { param: { postgresId: string } } & { json: { username: string } }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { postgresId: string } } & { json: { username: string } }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { postgresId: string } } & { json: { username: string } }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { postgresId: string } } & { json: { username: string } }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { postgresId: string } } & { json: { username: string } }
            output: Error
            outputFormat: 'json'
            status: 406
          }
        | {
            input: { param: { postgresId: string } } & { json: { username: string } }
            output: Error
            outputFormat: 'json'
            status: 410
          }
        | {
            input: { param: { postgresId: string } } & { json: { username: string } }
            output: Error
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { postgresId: string } } & { json: { username: string } }
            output: Error
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { param: { postgresId: string } } & { json: { username: string } }
            output: Error
            outputFormat: 'json'
            status: 503
          }
    }
  } & {
    '/postgres/:postgresId/credentials/:username': {
      $delete:
        | {
            input: { param: { postgresId: string; username: string } }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { param: { postgresId: string; username: string } }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { postgresId: string; username: string } }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { postgresId: string; username: string } }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { postgresId: string; username: string } }
            output: Error
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { postgresId: string; username: string } }
            output: Error
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { param: { postgresId: string; username: string } }
            output: Error
            outputFormat: 'json'
            status: 503
          }
    }
  } & {
    '/postgres/:postgresId/query/processes': {
      $get:
        | {
            input: { param: { postgresId: string } }
            output: {
              processes: {
                pid?: number | undefined
                databaseName?: string | undefined
                username?: string | undefined
                applicationName?: string | undefined
                clientAddr?: string | undefined
                backendStart?: string | undefined
                queryStart?: string | undefined
                state?: string | undefined
                waitEvent?: string | undefined
                waitEventType?: string | undefined
                query?: string | undefined
                duration?: number | undefined
                isLeader?: boolean | undefined
              }[]
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { postgresId: string } }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { postgresId: string } }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { postgresId: string } }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { postgresId: string } }
            output: Error
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { postgresId: string } }
            output: Error
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { param: { postgresId: string } }
            output: Error
            outputFormat: 'json'
            status: 503
          }
    }
  } & {
    '/postgres/:postgresId/query/top-queries': {
      $get:
        | {
            input: { param: { postgresId: string } }
            output: {
              topQueries: {
                queryId?: string | undefined
                query?: string | undefined
                calls?: number | undefined
                totalTimeMs?: number | undefined
                minTimeMs?: number | undefined
                maxTimeMs?: number | undefined
                meanTimeMs?: number | undefined
                stddevTimeMs?: number | undefined
                rows?: number | undefined
                sharedBlocksHit?: number | undefined
                sharedBlocksRead?: number | undefined
                sharedBlocksDirtied?: number | undefined
                sharedBlocksWritten?: number | undefined
                localBlocksHit?: number | undefined
                localBlocksRead?: number | undefined
                localBlocksDirtied?: number | undefined
                localBlocksWritten?: number | undefined
                tempBlocksRead?: number | undefined
                tempBlocksWritten?: number | undefined
              }[]
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { postgresId: string } }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { postgresId: string } }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { postgresId: string } }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { postgresId: string } }
            output: Error
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { postgresId: string } }
            output: Error
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { param: { postgresId: string } }
            output: Error
            outputFormat: 'json'
            status: 503
          }
    }
  } & {
    '/postgres/:postgresId/query/sizes': {
      $get:
        | {
            input: { param: { postgresId: string } }
            output: {
              sizes: {
                Database?: string | undefined
                Schema?: string | undefined
                Table?: string | undefined
                Index?: string | undefined
                Bytes?: number | undefined
              }[]
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { postgresId: string } }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { postgresId: string } }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { postgresId: string } }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { postgresId: string } }
            output: Error
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { postgresId: string } }
            output: Error
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { param: { postgresId: string } }
            output: Error
            outputFormat: 'json'
            status: 503
          }
    }
  } & {
    '/postgres/:postgresId/query/table-scans': {
      $get:
        | {
            input: { param: { postgresId: string } }
            output: {
              tableScans: {
                Database?: string | undefined
                Schema?: string | undefined
                Table?: string | undefined
                Scans?: number | undefined
              }[]
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { postgresId: string } }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { postgresId: string } }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { postgresId: string } }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { postgresId: string } }
            output: Error
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { postgresId: string } }
            output: Error
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { param: { postgresId: string } }
            output: Error
            outputFormat: 'json'
            status: 503
          }
    }
  } & {
    '/projects': {
      $get:
        | {
            input: {
              query: {
                name?: string[] | undefined
                createdBefore?: string | undefined
                createdAfter?: string | undefined
                updatedBefore?: string | undefined
                updatedAfter?: string | undefined
                ownerId?: string[] | undefined
                cursor?: string | undefined
                limit?: number | undefined
              }
            }
            output: ProjectWithCursor[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                name?: string[] | undefined
                createdBefore?: string | undefined
                createdAfter?: string | undefined
                updatedBefore?: string | undefined
                updatedAfter?: string | undefined
                ownerId?: string[] | undefined
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
                name?: string[] | undefined
                createdBefore?: string | undefined
                createdAfter?: string | undefined
                updatedBefore?: string | undefined
                updatedAfter?: string | undefined
                ownerId?: string[] | undefined
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
                name?: string[] | undefined
                createdBefore?: string | undefined
                createdAfter?: string | undefined
                updatedBefore?: string | undefined
                updatedAfter?: string | undefined
                ownerId?: string[] | undefined
                cursor?: string | undefined
                limit?: number | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: {
              query: {
                name?: string[] | undefined
                createdBefore?: string | undefined
                createdAfter?: string | undefined
                updatedBefore?: string | undefined
                updatedAfter?: string | undefined
                ownerId?: string[] | undefined
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
                name?: string[] | undefined
                createdBefore?: string | undefined
                createdAfter?: string | undefined
                updatedBefore?: string | undefined
                updatedAfter?: string | undefined
                ownerId?: string[] | undefined
                cursor?: string | undefined
                limit?: number | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 500
          }
        | {
            input: {
              query: {
                name?: string[] | undefined
                createdBefore?: string | undefined
                createdAfter?: string | undefined
                updatedBefore?: string | undefined
                updatedAfter?: string | undefined
                ownerId?: string[] | undefined
                cursor?: string | undefined
                limit?: number | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 503
          }
      $post:
        | { input: { json: ProjectPOSTInput }; output: Project; outputFormat: 'json'; status: 201 }
        | { input: { json: ProjectPOSTInput }; output: Error; outputFormat: 'json'; status: 400 }
        | { input: { json: ProjectPOSTInput }; output: Error; outputFormat: 'json'; status: 401 }
        | { input: { json: ProjectPOSTInput }; output: Error; outputFormat: 'json'; status: 404 }
        | { input: { json: ProjectPOSTInput }; output: Error; outputFormat: 'json'; status: 429 }
        | { input: { json: ProjectPOSTInput }; output: Error; outputFormat: 'json'; status: 500 }
        | { input: { json: ProjectPOSTInput }; output: Error; outputFormat: 'json'; status: 503 }
    }
  } & {
    '/projects/:projectId': {
      $get:
        | {
            input: { param: { projectId: string } }
            output: Project
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { projectId: string } }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { projectId: string } }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { projectId: string } }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { projectId: string } }
            output: Error
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { projectId: string } }
            output: Error
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { param: { projectId: string } }
            output: Error
            outputFormat: 'json'
            status: 503
          }
      $patch:
        | {
            input: { param: { projectId: string } } & { json: ProjectPATCHInput }
            output: Project
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { projectId: string } } & { json: ProjectPATCHInput }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { projectId: string } } & { json: ProjectPATCHInput }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { projectId: string } } & { json: ProjectPATCHInput }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { projectId: string } } & { json: ProjectPATCHInput }
            output: Error
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { projectId: string } } & { json: ProjectPATCHInput }
            output: Error
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { param: { projectId: string } } & { json: ProjectPATCHInput }
            output: Error
            outputFormat: 'json'
            status: 503
          }
      $delete:
        | { input: { param: { projectId: string } }; output: {}; outputFormat: string; status: 204 }
        | {
            input: { param: { projectId: string } }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { projectId: string } }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { projectId: string } }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { projectId: string } }
            output: Error
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { projectId: string } }
            output: Error
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { param: { projectId: string } }
            output: Error
            outputFormat: 'json'
            status: 503
          }
    }
  } & {
    '/environments': {
      $post:
        | {
            input: { json: EnvironmentPOSTInput }
            output: Environment
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { json: EnvironmentPOSTInput }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { json: EnvironmentPOSTInput }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { json: EnvironmentPOSTInput }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { json: EnvironmentPOSTInput }
            output: Error
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { json: EnvironmentPOSTInput }
            output: Error
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { json: EnvironmentPOSTInput }
            output: Error
            outputFormat: 'json'
            status: 503
          }
      $get:
        | {
            input: {
              query: {
                name?: string[] | undefined
                projectId: string[]
                createdBefore?: string | undefined
                createdAfter?: string | undefined
                updatedBefore?: string | undefined
                updatedAfter?: string | undefined
                ownerId?: string[] | undefined
                environmentId?: string[] | undefined
                cursor?: string | undefined
                limit?: number | undefined
              }
            }
            output: EnvironmentWithCursor[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                name?: string[] | undefined
                projectId: string[]
                createdBefore?: string | undefined
                createdAfter?: string | undefined
                updatedBefore?: string | undefined
                updatedAfter?: string | undefined
                ownerId?: string[] | undefined
                environmentId?: string[] | undefined
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
                name?: string[] | undefined
                projectId: string[]
                createdBefore?: string | undefined
                createdAfter?: string | undefined
                updatedBefore?: string | undefined
                updatedAfter?: string | undefined
                ownerId?: string[] | undefined
                environmentId?: string[] | undefined
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
                name?: string[] | undefined
                projectId: string[]
                createdBefore?: string | undefined
                createdAfter?: string | undefined
                updatedBefore?: string | undefined
                updatedAfter?: string | undefined
                ownerId?: string[] | undefined
                environmentId?: string[] | undefined
                cursor?: string | undefined
                limit?: number | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: {
              query: {
                name?: string[] | undefined
                projectId: string[]
                createdBefore?: string | undefined
                createdAfter?: string | undefined
                updatedBefore?: string | undefined
                updatedAfter?: string | undefined
                ownerId?: string[] | undefined
                environmentId?: string[] | undefined
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
                name?: string[] | undefined
                projectId: string[]
                createdBefore?: string | undefined
                createdAfter?: string | undefined
                updatedBefore?: string | undefined
                updatedAfter?: string | undefined
                ownerId?: string[] | undefined
                environmentId?: string[] | undefined
                cursor?: string | undefined
                limit?: number | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 500
          }
        | {
            input: {
              query: {
                name?: string[] | undefined
                projectId: string[]
                createdBefore?: string | undefined
                createdAfter?: string | undefined
                updatedBefore?: string | undefined
                updatedAfter?: string | undefined
                ownerId?: string[] | undefined
                environmentId?: string[] | undefined
                cursor?: string | undefined
                limit?: number | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 503
          }
    }
  } & {
    '/environments/:environmentId': {
      $get:
        | {
            input: { param: { environmentId: string } }
            output: Environment
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { environmentId: string } }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { environmentId: string } }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { environmentId: string } }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { environmentId: string } }
            output: Error
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { environmentId: string } }
            output: Error
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { param: { environmentId: string } }
            output: Error
            outputFormat: 'json'
            status: 503
          }
      $patch:
        | {
            input: { param: { environmentId: string } } & { json: EnvironmentPATCHInput }
            output: Environment
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { environmentId: string } } & { json: EnvironmentPATCHInput }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { environmentId: string } } & { json: EnvironmentPATCHInput }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { environmentId: string } } & { json: EnvironmentPATCHInput }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { environmentId: string } } & { json: EnvironmentPATCHInput }
            output: Error
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { environmentId: string } } & { json: EnvironmentPATCHInput }
            output: Error
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { param: { environmentId: string } } & { json: EnvironmentPATCHInput }
            output: Error
            outputFormat: 'json'
            status: 503
          }
      $delete:
        | {
            input: { param: { environmentId: string } }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { environmentId: string } }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { environmentId: string } }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { environmentId: string } }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { environmentId: string } }
            output: Error
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { environmentId: string } }
            output: Error
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { param: { environmentId: string } }
            output: Error
            outputFormat: 'json'
            status: 503
          }
    }
  } & {
    '/environments/:environmentId/resources': {
      $post:
        | {
            input: { param: { environmentId: string } } & { json: EnvironmentResourcesPOSTInput }
            output: Environment
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { param: { environmentId: string } } & { json: EnvironmentResourcesPOSTInput }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { environmentId: string } } & { json: EnvironmentResourcesPOSTInput }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { environmentId: string } } & { json: EnvironmentResourcesPOSTInput }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { environmentId: string } } & { json: EnvironmentResourcesPOSTInput }
            output: Error
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { environmentId: string } } & { json: EnvironmentResourcesPOSTInput }
            output: Error
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { param: { environmentId: string } } & { json: EnvironmentResourcesPOSTInput }
            output: Error
            outputFormat: 'json'
            status: 503
          }
      $delete:
        | {
            input: { param: { environmentId: string } } & { query: { resourceIds: string[] } }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { environmentId: string } } & { query: { resourceIds: string[] } }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { environmentId: string } } & { query: { resourceIds: string[] } }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { environmentId: string } } & { query: { resourceIds: string[] } }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { environmentId: string } } & { query: { resourceIds: string[] } }
            output: Error
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { environmentId: string } } & { query: { resourceIds: string[] } }
            output: Error
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { param: { environmentId: string } } & { query: { resourceIds: string[] } }
            output: Error
            outputFormat: 'json'
            status: 503
          }
    }
  } & {
    '/env-groups': {
      $get:
        | {
            input: {
              query: {
                name?: string[] | undefined
                createdBefore?: string | undefined
                createdAfter?: string | undefined
                updatedBefore?: string | undefined
                updatedAfter?: string | undefined
                ownerId?: string[] | undefined
                environmentId?: string[] | undefined
                cursor?: string | undefined
                limit?: number | undefined
              }
            }
            output: EnvGroupMeta[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                name?: string[] | undefined
                createdBefore?: string | undefined
                createdAfter?: string | undefined
                updatedBefore?: string | undefined
                updatedAfter?: string | undefined
                ownerId?: string[] | undefined
                environmentId?: string[] | undefined
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
                name?: string[] | undefined
                createdBefore?: string | undefined
                createdAfter?: string | undefined
                updatedBefore?: string | undefined
                updatedAfter?: string | undefined
                ownerId?: string[] | undefined
                environmentId?: string[] | undefined
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
                name?: string[] | undefined
                createdBefore?: string | undefined
                createdAfter?: string | undefined
                updatedBefore?: string | undefined
                updatedAfter?: string | undefined
                ownerId?: string[] | undefined
                environmentId?: string[] | undefined
                cursor?: string | undefined
                limit?: number | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: {
              query: {
                name?: string[] | undefined
                createdBefore?: string | undefined
                createdAfter?: string | undefined
                updatedBefore?: string | undefined
                updatedAfter?: string | undefined
                ownerId?: string[] | undefined
                environmentId?: string[] | undefined
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
                name?: string[] | undefined
                createdBefore?: string | undefined
                createdAfter?: string | undefined
                updatedBefore?: string | undefined
                updatedAfter?: string | undefined
                ownerId?: string[] | undefined
                environmentId?: string[] | undefined
                cursor?: string | undefined
                limit?: number | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 500
          }
        | {
            input: {
              query: {
                name?: string[] | undefined
                createdBefore?: string | undefined
                createdAfter?: string | undefined
                updatedBefore?: string | undefined
                updatedAfter?: string | undefined
                ownerId?: string[] | undefined
                environmentId?: string[] | undefined
                cursor?: string | undefined
                limit?: number | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 503
          }
      $post:
        | {
            input: { json: EnvGroupPOSTInput }
            output: EnvGroup
            outputFormat: 'json'
            status: 201
          }
        | { input: { json: EnvGroupPOSTInput }; output: Error; outputFormat: 'json'; status: 400 }
        | { input: { json: EnvGroupPOSTInput }; output: Error; outputFormat: 'json'; status: 401 }
        | { input: { json: EnvGroupPOSTInput }; output: Error; outputFormat: 'json'; status: 404 }
        | { input: { json: EnvGroupPOSTInput }; output: Error; outputFormat: 'json'; status: 429 }
        | { input: { json: EnvGroupPOSTInput }; output: Error; outputFormat: 'json'; status: 500 }
        | { input: { json: EnvGroupPOSTInput }; output: Error; outputFormat: 'json'; status: 503 }
    }
  } & {
    '/env-groups/:envGroupId': {
      $get:
        | {
            input: { param: { envGroupId: string } }
            output: EnvGroup
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { envGroupId: string } }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { envGroupId: string } }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { envGroupId: string } }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { envGroupId: string } }
            output: Error
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { envGroupId: string } }
            output: Error
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { param: { envGroupId: string } }
            output: Error
            outputFormat: 'json'
            status: 503
          }
      $patch:
        | {
            input: { param: { envGroupId: string } } & { json: EnvGroupPATCHInput }
            output: EnvGroup
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { envGroupId: string } } & { json: EnvGroupPATCHInput }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { envGroupId: string } } & { json: EnvGroupPATCHInput }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { envGroupId: string } } & { json: EnvGroupPATCHInput }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { envGroupId: string } } & { json: EnvGroupPATCHInput }
            output: Error
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { envGroupId: string } } & { json: EnvGroupPATCHInput }
            output: Error
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { param: { envGroupId: string } } & { json: EnvGroupPATCHInput }
            output: Error
            outputFormat: 'json'
            status: 503
          }
      $delete:
        | {
            input: { param: { envGroupId: string } }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { envGroupId: string } }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { envGroupId: string } }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { envGroupId: string } }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { envGroupId: string } }
            output: Error
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { envGroupId: string } }
            output: Error
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { param: { envGroupId: string } }
            output: Error
            outputFormat: 'json'
            status: 503
          }
    }
  } & {
    '/env-groups/:envGroupId/services/:serviceId': {
      $post:
        | {
            input: { param: { envGroupId: string; serviceId: string } }
            output: EnvGroup
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { envGroupId: string; serviceId: string } }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { envGroupId: string; serviceId: string } }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { envGroupId: string; serviceId: string } }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { envGroupId: string; serviceId: string } }
            output: Error
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { envGroupId: string; serviceId: string } }
            output: Error
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { param: { envGroupId: string; serviceId: string } }
            output: Error
            outputFormat: 'json'
            status: 503
          }
      $delete:
        | {
            input: { param: { envGroupId: string; serviceId: string } }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { envGroupId: string; serviceId: string } }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { envGroupId: string; serviceId: string } }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { envGroupId: string; serviceId: string } }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { envGroupId: string; serviceId: string } }
            output: Error
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { envGroupId: string; serviceId: string } }
            output: Error
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { param: { envGroupId: string; serviceId: string } }
            output: Error
            outputFormat: 'json'
            status: 503
          }
    }
  } & {
    '/env-groups/:envGroupId/env-vars/:envVarKey': {
      $get:
        | {
            input: { param: { envGroupId: string; envVarKey: string } }
            output: EnvVar
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { envGroupId: string; envVarKey: string } }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { envGroupId: string; envVarKey: string } }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { envGroupId: string; envVarKey: string } }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { envGroupId: string; envVarKey: string } }
            output: Error
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { envGroupId: string; envVarKey: string } }
            output: Error
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { param: { envGroupId: string; envVarKey: string } }
            output: Error
            outputFormat: 'json'
            status: 503
          }
      $put:
        | {
            input: { param: { envGroupId: string; envVarKey: string } } & {
              json: AddUpdateEnvVarInput
            }
            output: EnvGroup
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { envGroupId: string; envVarKey: string } } & {
              json: AddUpdateEnvVarInput
            }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { envGroupId: string; envVarKey: string } } & {
              json: AddUpdateEnvVarInput
            }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { envGroupId: string; envVarKey: string } } & {
              json: AddUpdateEnvVarInput
            }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { envGroupId: string; envVarKey: string } } & {
              json: AddUpdateEnvVarInput
            }
            output: Error
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { envGroupId: string; envVarKey: string } } & {
              json: AddUpdateEnvVarInput
            }
            output: Error
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { param: { envGroupId: string; envVarKey: string } } & {
              json: AddUpdateEnvVarInput
            }
            output: Error
            outputFormat: 'json'
            status: 503
          }
      $delete:
        | {
            input: { param: { envGroupId: string; envVarKey: string } }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { envGroupId: string; envVarKey: string } }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { envGroupId: string; envVarKey: string } }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { envGroupId: string; envVarKey: string } }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { envGroupId: string; envVarKey: string } }
            output: Error
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { envGroupId: string; envVarKey: string } }
            output: Error
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { param: { envGroupId: string; envVarKey: string } }
            output: Error
            outputFormat: 'json'
            status: 503
          }
    }
  } & {
    '/env-groups/:envGroupId/secret-files/:envVarKey': {
      $get:
        | {
            input: { param: { envGroupId: string; envVarKey: string } }
            output: SecretFile
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { envGroupId: string; envVarKey: string } }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { envGroupId: string; envVarKey: string } }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { envGroupId: string; envVarKey: string } }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { envGroupId: string; envVarKey: string } }
            output: Error
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { envGroupId: string; envVarKey: string } }
            output: Error
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { param: { envGroupId: string; envVarKey: string } }
            output: Error
            outputFormat: 'json'
            status: 503
          }
      $put:
        | {
            input: { param: { envGroupId: string; envVarKey: string } } & {
              json: { content?: string | undefined }
            }
            output: EnvGroup
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { envGroupId: string; envVarKey: string } } & {
              json: { content?: string | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { envGroupId: string; envVarKey: string } } & {
              json: { content?: string | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { envGroupId: string; envVarKey: string } } & {
              json: { content?: string | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { envGroupId: string; envVarKey: string } } & {
              json: { content?: string | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { envGroupId: string; envVarKey: string } } & {
              json: { content?: string | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { param: { envGroupId: string; envVarKey: string } } & {
              json: { content?: string | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 503
          }
      $delete:
        | {
            input: { param: { envGroupId: string; envVarKey: string } }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { envGroupId: string; envVarKey: string } }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { envGroupId: string; envVarKey: string } }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { envGroupId: string; envVarKey: string } }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { envGroupId: string; envVarKey: string } }
            output: Error
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { envGroupId: string; envVarKey: string } }
            output: Error
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { param: { envGroupId: string; envVarKey: string } }
            output: Error
            outputFormat: 'json'
            status: 503
          }
    }
  } & {
    '/maintenance': {
      $get:
        | {
            input: {
              query: {
                resourceId?: string[] | undefined
                ownerId?: string[] | undefined
                state?:
                  | (
                      | 'scheduled'
                      | 'in_progress'
                      | 'user_fix_required'
                      | 'cancelled'
                      | 'succeeded'
                      | 'failed'
                    )[]
                  | undefined
              }
            }
            output: {
              id: string
              type: string
              scheduledAt: string
              pendingMaintenanceBy?: string | undefined
              state:
                | 'scheduled'
                | 'in_progress'
                | 'user_fix_required'
                | 'cancelled'
                | 'succeeded'
                | 'failed'
              resourceId: string
            }[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                resourceId?: string[] | undefined
                ownerId?: string[] | undefined
                state?:
                  | (
                      | 'scheduled'
                      | 'in_progress'
                      | 'user_fix_required'
                      | 'cancelled'
                      | 'succeeded'
                      | 'failed'
                    )[]
                  | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                resourceId?: string[] | undefined
                ownerId?: string[] | undefined
                state?:
                  | (
                      | 'scheduled'
                      | 'in_progress'
                      | 'user_fix_required'
                      | 'cancelled'
                      | 'succeeded'
                      | 'failed'
                    )[]
                  | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              query: {
                resourceId?: string[] | undefined
                ownerId?: string[] | undefined
                state?:
                  | (
                      | 'scheduled'
                      | 'in_progress'
                      | 'user_fix_required'
                      | 'cancelled'
                      | 'succeeded'
                      | 'failed'
                    )[]
                  | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: {
              query: {
                resourceId?: string[] | undefined
                ownerId?: string[] | undefined
                state?:
                  | (
                      | 'scheduled'
                      | 'in_progress'
                      | 'user_fix_required'
                      | 'cancelled'
                      | 'succeeded'
                      | 'failed'
                    )[]
                  | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 429
          }
        | {
            input: {
              query: {
                resourceId?: string[] | undefined
                ownerId?: string[] | undefined
                state?:
                  | (
                      | 'scheduled'
                      | 'in_progress'
                      | 'user_fix_required'
                      | 'cancelled'
                      | 'succeeded'
                      | 'failed'
                    )[]
                  | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 500
          }
        | {
            input: {
              query: {
                resourceId?: string[] | undefined
                ownerId?: string[] | undefined
                state?:
                  | (
                      | 'scheduled'
                      | 'in_progress'
                      | 'user_fix_required'
                      | 'cancelled'
                      | 'succeeded'
                      | 'failed'
                    )[]
                  | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 503
          }
    }
  } & {
    '/maintenance/:maintenanceRunID': {
      $get:
        | {
            input: { param: { maintenanceRunID: string } }
            output: {
              id: string
              type: string
              scheduledAt: string
              pendingMaintenanceBy?: string | undefined
              state:
                | 'scheduled'
                | 'in_progress'
                | 'user_fix_required'
                | 'cancelled'
                | 'succeeded'
                | 'failed'
              resourceId: string
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { maintenanceRunID: string } }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { maintenanceRunID: string } }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { maintenanceRunID: string } }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { maintenanceRunID: string } }
            output: Error
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { maintenanceRunID: string } }
            output: Error
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { param: { maintenanceRunID: string } }
            output: Error
            outputFormat: 'json'
            status: 503
          }
      $patch:
        | {
            input: { param: { maintenanceRunID: string } } & {
              json: { scheduledAt?: string | undefined }
            }
            output: {}
            outputFormat: string
            status: 202
          }
        | {
            input: { param: { maintenanceRunID: string } } & {
              json: { scheduledAt?: string | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { maintenanceRunID: string } } & {
              json: { scheduledAt?: string | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { maintenanceRunID: string } } & {
              json: { scheduledAt?: string | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { maintenanceRunID: string } } & {
              json: { scheduledAt?: string | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { maintenanceRunID: string } } & {
              json: { scheduledAt?: string | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { param: { maintenanceRunID: string } } & {
              json: { scheduledAt?: string | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 503
          }
    }
  } & {
    '/maintenance/:maintenanceRunID/trigger': {
      $post:
        | {
            input: { param: { maintenanceRunID: string } }
            output: {}
            outputFormat: string
            status: 202
          }
        | {
            input: { param: { maintenanceRunID: string } }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { maintenanceRunID: string } }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { maintenanceRunID: string } }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { maintenanceRunID: string } }
            output: Error
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { maintenanceRunID: string } }
            output: Error
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { param: { maintenanceRunID: string } }
            output: Error
            outputFormat: 'json'
            status: 503
          }
    }
  } & {
    '/build-sources': {
      $post:
        | {
            input: {
              json: {
                ownerId: string
                name: string
                projectId?: string | undefined
                git?:
                  | {
                      branch?: string | undefined
                      buildCommand?: string | undefined
                      buildFilter?: { paths: string[]; ignoredPaths: string[] } | undefined
                      dockerContext?: string | undefined
                      dockerfilePath?: string | undefined
                      runtime: 'docker' | 'elixir' | 'go' | 'node' | 'python' | 'ruby' | 'rust'
                      registryCredentialId?: string | undefined
                      region?:
                        | 'frankfurt'
                        | 'oregon'
                        | 'ohio'
                        | 'singapore'
                        | 'virginia'
                        | undefined
                      repoUrl?: string | undefined
                      rootDir?: string | undefined
                    }
                  | undefined
                image?:
                  | { ownerId: string; registryCredentialId?: string | undefined; imageUrl: string }
                  | undefined
                serviceIds?: string[] | undefined
                envVars?:
                  | ({ key: string; value: string } | { key: string; generateValue: boolean })[]
                  | undefined
                secretFiles?: { name: string; content: string }[] | undefined
                envGroupIds?: string[] | undefined
              }
            }
            output: {
              id: string
              name: string
              ownerId: string
              projectId?: string | undefined
              git?:
                | {
                    branch?: string | undefined
                    buildCommand?: string | undefined
                    buildFilter?: { paths: string[]; ignoredPaths: string[] } | undefined
                    dockerContext?: string | undefined
                    dockerfilePath?: string | undefined
                    runtime: 'docker' | 'elixir' | 'go' | 'node' | 'python' | 'ruby' | 'rust'
                    registryCredentialId?: string | undefined
                    region?: 'frankfurt' | 'oregon' | 'ohio' | 'singapore' | 'virginia' | undefined
                    repoUrl?: string | undefined
                    rootDir?: string | undefined
                  }
                | undefined
              image?:
                | { ownerId: string; registryCredentialId?: string | undefined; imageUrl: string }
                | undefined
              createdAt: string
              updatedAt: string
              serviceLinks: { id: string; name: string }[]
            }
            outputFormat: 'json'
            status: 201
          }
        | {
            input: {
              json: {
                ownerId: string
                name: string
                projectId?: string | undefined
                git?:
                  | {
                      branch?: string | undefined
                      buildCommand?: string | undefined
                      buildFilter?: { paths: string[]; ignoredPaths: string[] } | undefined
                      dockerContext?: string | undefined
                      dockerfilePath?: string | undefined
                      runtime: 'docker' | 'elixir' | 'go' | 'node' | 'python' | 'ruby' | 'rust'
                      registryCredentialId?: string | undefined
                      region?:
                        | 'frankfurt'
                        | 'oregon'
                        | 'ohio'
                        | 'singapore'
                        | 'virginia'
                        | undefined
                      repoUrl?: string | undefined
                      rootDir?: string | undefined
                    }
                  | undefined
                image?:
                  | { ownerId: string; registryCredentialId?: string | undefined; imageUrl: string }
                  | undefined
                serviceIds?: string[] | undefined
                envVars?:
                  | ({ key: string; value: string } | { key: string; generateValue: boolean })[]
                  | undefined
                secretFiles?: { name: string; content: string }[] | undefined
                envGroupIds?: string[] | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              json: {
                ownerId: string
                name: string
                projectId?: string | undefined
                git?:
                  | {
                      branch?: string | undefined
                      buildCommand?: string | undefined
                      buildFilter?: { paths: string[]; ignoredPaths: string[] } | undefined
                      dockerContext?: string | undefined
                      dockerfilePath?: string | undefined
                      runtime: 'docker' | 'elixir' | 'go' | 'node' | 'python' | 'ruby' | 'rust'
                      registryCredentialId?: string | undefined
                      region?:
                        | 'frankfurt'
                        | 'oregon'
                        | 'ohio'
                        | 'singapore'
                        | 'virginia'
                        | undefined
                      repoUrl?: string | undefined
                      rootDir?: string | undefined
                    }
                  | undefined
                image?:
                  | { ownerId: string; registryCredentialId?: string | undefined; imageUrl: string }
                  | undefined
                serviceIds?: string[] | undefined
                envVars?:
                  | ({ key: string; value: string } | { key: string; generateValue: boolean })[]
                  | undefined
                secretFiles?: { name: string; content: string }[] | undefined
                envGroupIds?: string[] | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              json: {
                ownerId: string
                name: string
                projectId?: string | undefined
                git?:
                  | {
                      branch?: string | undefined
                      buildCommand?: string | undefined
                      buildFilter?: { paths: string[]; ignoredPaths: string[] } | undefined
                      dockerContext?: string | undefined
                      dockerfilePath?: string | undefined
                      runtime: 'docker' | 'elixir' | 'go' | 'node' | 'python' | 'ruby' | 'rust'
                      registryCredentialId?: string | undefined
                      region?:
                        | 'frankfurt'
                        | 'oregon'
                        | 'ohio'
                        | 'singapore'
                        | 'virginia'
                        | undefined
                      repoUrl?: string | undefined
                      rootDir?: string | undefined
                    }
                  | undefined
                image?:
                  | { ownerId: string; registryCredentialId?: string | undefined; imageUrl: string }
                  | undefined
                serviceIds?: string[] | undefined
                envVars?:
                  | ({ key: string; value: string } | { key: string; generateValue: boolean })[]
                  | undefined
                secretFiles?: { name: string; content: string }[] | undefined
                envGroupIds?: string[] | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: {
              json: {
                ownerId: string
                name: string
                projectId?: string | undefined
                git?:
                  | {
                      branch?: string | undefined
                      buildCommand?: string | undefined
                      buildFilter?: { paths: string[]; ignoredPaths: string[] } | undefined
                      dockerContext?: string | undefined
                      dockerfilePath?: string | undefined
                      runtime: 'docker' | 'elixir' | 'go' | 'node' | 'python' | 'ruby' | 'rust'
                      registryCredentialId?: string | undefined
                      region?:
                        | 'frankfurt'
                        | 'oregon'
                        | 'ohio'
                        | 'singapore'
                        | 'virginia'
                        | undefined
                      repoUrl?: string | undefined
                      rootDir?: string | undefined
                    }
                  | undefined
                image?:
                  | { ownerId: string; registryCredentialId?: string | undefined; imageUrl: string }
                  | undefined
                serviceIds?: string[] | undefined
                envVars?:
                  | ({ key: string; value: string } | { key: string; generateValue: boolean })[]
                  | undefined
                secretFiles?: { name: string; content: string }[] | undefined
                envGroupIds?: string[] | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: {
              json: {
                ownerId: string
                name: string
                projectId?: string | undefined
                git?:
                  | {
                      branch?: string | undefined
                      buildCommand?: string | undefined
                      buildFilter?: { paths: string[]; ignoredPaths: string[] } | undefined
                      dockerContext?: string | undefined
                      dockerfilePath?: string | undefined
                      runtime: 'docker' | 'elixir' | 'go' | 'node' | 'python' | 'ruby' | 'rust'
                      registryCredentialId?: string | undefined
                      region?:
                        | 'frankfurt'
                        | 'oregon'
                        | 'ohio'
                        | 'singapore'
                        | 'virginia'
                        | undefined
                      repoUrl?: string | undefined
                      rootDir?: string | undefined
                    }
                  | undefined
                image?:
                  | { ownerId: string; registryCredentialId?: string | undefined; imageUrl: string }
                  | undefined
                serviceIds?: string[] | undefined
                envVars?:
                  | ({ key: string; value: string } | { key: string; generateValue: boolean })[]
                  | undefined
                secretFiles?: { name: string; content: string }[] | undefined
                envGroupIds?: string[] | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 429
          }
        | {
            input: {
              json: {
                ownerId: string
                name: string
                projectId?: string | undefined
                git?:
                  | {
                      branch?: string | undefined
                      buildCommand?: string | undefined
                      buildFilter?: { paths: string[]; ignoredPaths: string[] } | undefined
                      dockerContext?: string | undefined
                      dockerfilePath?: string | undefined
                      runtime: 'docker' | 'elixir' | 'go' | 'node' | 'python' | 'ruby' | 'rust'
                      registryCredentialId?: string | undefined
                      region?:
                        | 'frankfurt'
                        | 'oregon'
                        | 'ohio'
                        | 'singapore'
                        | 'virginia'
                        | undefined
                      repoUrl?: string | undefined
                      rootDir?: string | undefined
                    }
                  | undefined
                image?:
                  | { ownerId: string; registryCredentialId?: string | undefined; imageUrl: string }
                  | undefined
                serviceIds?: string[] | undefined
                envVars?:
                  | ({ key: string; value: string } | { key: string; generateValue: boolean })[]
                  | undefined
                secretFiles?: { name: string; content: string }[] | undefined
                envGroupIds?: string[] | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 500
          }
      $get:
        | {
            input: {
              query: {
                name?: string[] | undefined
                ownerId?: string[] | undefined
                projectId?: string | undefined
                includePreviews?: boolean | undefined
                createdBefore?: string | undefined
                createdAfter?: string | undefined
                updatedBefore?: string | undefined
                updatedAfter?: string | undefined
                cursor?: string | undefined
                limit?: number | undefined
              }
            }
            output: {
              buildSource: {
                id: string
                name: string
                ownerId: string
                projectId?: string | undefined
                git?:
                  | {
                      branch?: string | undefined
                      buildCommand?: string | undefined
                      buildFilter?: { paths: string[]; ignoredPaths: string[] } | undefined
                      dockerContext?: string | undefined
                      dockerfilePath?: string | undefined
                      runtime: 'docker' | 'elixir' | 'go' | 'node' | 'python' | 'ruby' | 'rust'
                      registryCredentialId?: string | undefined
                      region?:
                        | 'frankfurt'
                        | 'oregon'
                        | 'ohio'
                        | 'singapore'
                        | 'virginia'
                        | undefined
                      repoUrl?: string | undefined
                      rootDir?: string | undefined
                    }
                  | undefined
                image?:
                  | { ownerId: string; registryCredentialId?: string | undefined; imageUrl: string }
                  | undefined
                createdAt: string
                updatedAt: string
                serviceLinks: { id: string; name: string }[]
              }
              cursor: string
            }[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                name?: string[] | undefined
                ownerId?: string[] | undefined
                projectId?: string | undefined
                includePreviews?: boolean | undefined
                createdBefore?: string | undefined
                createdAfter?: string | undefined
                updatedBefore?: string | undefined
                updatedAfter?: string | undefined
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
                name?: string[] | undefined
                ownerId?: string[] | undefined
                projectId?: string | undefined
                includePreviews?: boolean | undefined
                createdBefore?: string | undefined
                createdAfter?: string | undefined
                updatedBefore?: string | undefined
                updatedAfter?: string | undefined
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
                name?: string[] | undefined
                ownerId?: string[] | undefined
                projectId?: string | undefined
                includePreviews?: boolean | undefined
                createdBefore?: string | undefined
                createdAfter?: string | undefined
                updatedBefore?: string | undefined
                updatedAfter?: string | undefined
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
                name?: string[] | undefined
                ownerId?: string[] | undefined
                projectId?: string | undefined
                includePreviews?: boolean | undefined
                createdBefore?: string | undefined
                createdAfter?: string | undefined
                updatedBefore?: string | undefined
                updatedAfter?: string | undefined
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
    '/build-sources/:buildSourceId': {
      $get:
        | {
            input: { param: { buildSourceId: string } }
            output: {
              id: string
              name: string
              ownerId: string
              projectId?: string | undefined
              git?:
                | {
                    branch?: string | undefined
                    buildCommand?: string | undefined
                    buildFilter?: { paths: string[]; ignoredPaths: string[] } | undefined
                    dockerContext?: string | undefined
                    dockerfilePath?: string | undefined
                    runtime: 'docker' | 'elixir' | 'go' | 'node' | 'python' | 'ruby' | 'rust'
                    registryCredentialId?: string | undefined
                    region?: 'frankfurt' | 'oregon' | 'ohio' | 'singapore' | 'virginia' | undefined
                    repoUrl?: string | undefined
                    rootDir?: string | undefined
                  }
                | undefined
              image?:
                | { ownerId: string; registryCredentialId?: string | undefined; imageUrl: string }
                | undefined
              createdAt: string
              updatedAt: string
              serviceLinks: { id: string; name: string }[]
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { buildSourceId: string } }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { buildSourceId: string } }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { buildSourceId: string } }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { buildSourceId: string } }
            output: Error
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { buildSourceId: string } }
            output: Error
            outputFormat: 'json'
            status: 500
          }
      $patch:
        | {
            input: { param: { buildSourceId: string } } & {
              json: {
                name?: string | undefined
                git?:
                  | {
                      branch?: string | undefined
                      buildCommand?: string | undefined
                      buildFilter?: { paths: string[]; ignoredPaths: string[] } | undefined
                      dockerContext?: string | undefined
                      dockerfilePath?: string | undefined
                      runtime?:
                        | 'docker'
                        | 'elixir'
                        | 'go'
                        | 'node'
                        | 'python'
                        | 'ruby'
                        | 'rust'
                        | undefined
                      registryCredentialId?: string | undefined
                      region?:
                        | 'frankfurt'
                        | 'oregon'
                        | 'ohio'
                        | 'singapore'
                        | 'virginia'
                        | undefined
                      repoUrl?: string | undefined
                      rootDir?: string | undefined
                    }
                  | undefined
                image?:
                  | { imageUrl?: string | undefined; registryCredentialId?: string | undefined }
                  | undefined
              }
            }
            output: {
              id: string
              name: string
              ownerId: string
              projectId?: string | undefined
              git?:
                | {
                    branch?: string | undefined
                    buildCommand?: string | undefined
                    buildFilter?: { paths: string[]; ignoredPaths: string[] } | undefined
                    dockerContext?: string | undefined
                    dockerfilePath?: string | undefined
                    runtime: 'docker' | 'elixir' | 'go' | 'node' | 'python' | 'ruby' | 'rust'
                    registryCredentialId?: string | undefined
                    region?: 'frankfurt' | 'oregon' | 'ohio' | 'singapore' | 'virginia' | undefined
                    repoUrl?: string | undefined
                    rootDir?: string | undefined
                  }
                | undefined
              image?:
                | { ownerId: string; registryCredentialId?: string | undefined; imageUrl: string }
                | undefined
              createdAt: string
              updatedAt: string
              serviceLinks: { id: string; name: string }[]
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { buildSourceId: string } } & {
              json: {
                name?: string | undefined
                git?:
                  | {
                      branch?: string | undefined
                      buildCommand?: string | undefined
                      buildFilter?: { paths: string[]; ignoredPaths: string[] } | undefined
                      dockerContext?: string | undefined
                      dockerfilePath?: string | undefined
                      runtime?:
                        | 'docker'
                        | 'elixir'
                        | 'go'
                        | 'node'
                        | 'python'
                        | 'ruby'
                        | 'rust'
                        | undefined
                      registryCredentialId?: string | undefined
                      region?:
                        | 'frankfurt'
                        | 'oregon'
                        | 'ohio'
                        | 'singapore'
                        | 'virginia'
                        | undefined
                      repoUrl?: string | undefined
                      rootDir?: string | undefined
                    }
                  | undefined
                image?:
                  | { imageUrl?: string | undefined; registryCredentialId?: string | undefined }
                  | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { buildSourceId: string } } & {
              json: {
                name?: string | undefined
                git?:
                  | {
                      branch?: string | undefined
                      buildCommand?: string | undefined
                      buildFilter?: { paths: string[]; ignoredPaths: string[] } | undefined
                      dockerContext?: string | undefined
                      dockerfilePath?: string | undefined
                      runtime?:
                        | 'docker'
                        | 'elixir'
                        | 'go'
                        | 'node'
                        | 'python'
                        | 'ruby'
                        | 'rust'
                        | undefined
                      registryCredentialId?: string | undefined
                      region?:
                        | 'frankfurt'
                        | 'oregon'
                        | 'ohio'
                        | 'singapore'
                        | 'virginia'
                        | undefined
                      repoUrl?: string | undefined
                      rootDir?: string | undefined
                    }
                  | undefined
                image?:
                  | { imageUrl?: string | undefined; registryCredentialId?: string | undefined }
                  | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { buildSourceId: string } } & {
              json: {
                name?: string | undefined
                git?:
                  | {
                      branch?: string | undefined
                      buildCommand?: string | undefined
                      buildFilter?: { paths: string[]; ignoredPaths: string[] } | undefined
                      dockerContext?: string | undefined
                      dockerfilePath?: string | undefined
                      runtime?:
                        | 'docker'
                        | 'elixir'
                        | 'go'
                        | 'node'
                        | 'python'
                        | 'ruby'
                        | 'rust'
                        | undefined
                      registryCredentialId?: string | undefined
                      region?:
                        | 'frankfurt'
                        | 'oregon'
                        | 'ohio'
                        | 'singapore'
                        | 'virginia'
                        | undefined
                      repoUrl?: string | undefined
                      rootDir?: string | undefined
                    }
                  | undefined
                image?:
                  | { imageUrl?: string | undefined; registryCredentialId?: string | undefined }
                  | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { buildSourceId: string } } & {
              json: {
                name?: string | undefined
                git?:
                  | {
                      branch?: string | undefined
                      buildCommand?: string | undefined
                      buildFilter?: { paths: string[]; ignoredPaths: string[] } | undefined
                      dockerContext?: string | undefined
                      dockerfilePath?: string | undefined
                      runtime?:
                        | 'docker'
                        | 'elixir'
                        | 'go'
                        | 'node'
                        | 'python'
                        | 'ruby'
                        | 'rust'
                        | undefined
                      registryCredentialId?: string | undefined
                      region?:
                        | 'frankfurt'
                        | 'oregon'
                        | 'ohio'
                        | 'singapore'
                        | 'virginia'
                        | undefined
                      repoUrl?: string | undefined
                      rootDir?: string | undefined
                    }
                  | undefined
                image?:
                  | { imageUrl?: string | undefined; registryCredentialId?: string | undefined }
                  | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { buildSourceId: string } } & {
              json: {
                name?: string | undefined
                git?:
                  | {
                      branch?: string | undefined
                      buildCommand?: string | undefined
                      buildFilter?: { paths: string[]; ignoredPaths: string[] } | undefined
                      dockerContext?: string | undefined
                      dockerfilePath?: string | undefined
                      runtime?:
                        | 'docker'
                        | 'elixir'
                        | 'go'
                        | 'node'
                        | 'python'
                        | 'ruby'
                        | 'rust'
                        | undefined
                      registryCredentialId?: string | undefined
                      region?:
                        | 'frankfurt'
                        | 'oregon'
                        | 'ohio'
                        | 'singapore'
                        | 'virginia'
                        | undefined
                      repoUrl?: string | undefined
                      rootDir?: string | undefined
                    }
                  | undefined
                image?:
                  | { imageUrl?: string | undefined; registryCredentialId?: string | undefined }
                  | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { buildSourceId: string } } & {
              json: {
                name?: string | undefined
                git?:
                  | {
                      branch?: string | undefined
                      buildCommand?: string | undefined
                      buildFilter?: { paths: string[]; ignoredPaths: string[] } | undefined
                      dockerContext?: string | undefined
                      dockerfilePath?: string | undefined
                      runtime?:
                        | 'docker'
                        | 'elixir'
                        | 'go'
                        | 'node'
                        | 'python'
                        | 'ruby'
                        | 'rust'
                        | undefined
                      registryCredentialId?: string | undefined
                      region?:
                        | 'frankfurt'
                        | 'oregon'
                        | 'ohio'
                        | 'singapore'
                        | 'virginia'
                        | undefined
                      repoUrl?: string | undefined
                      rootDir?: string | undefined
                    }
                  | undefined
                image?:
                  | { imageUrl?: string | undefined; registryCredentialId?: string | undefined }
                  | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 500
          }
      $delete:
        | {
            input: { param: { buildSourceId: string } }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { buildSourceId: string } }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { buildSourceId: string } }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { buildSourceId: string } }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { buildSourceId: string } }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { buildSourceId: string } }
            output: Error
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { buildSourceId: string } }
            output: Error
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/build-sources/:buildSourceId/builds': {
      $get:
        | {
            input: { param: { buildSourceId: string } } & {
              query: { cursor?: string | undefined; limit?: number | undefined }
            }
            output: {
              build: {
                id: string
                buildSourceId: string
                buildRun?:
                  | {
                      id: string
                      status?:
                        | 'created'
                        | 'inProgress'
                        | 'succeeded'
                        | 'failed'
                        | 'canceled'
                        | 'unknown'
                        | undefined
                      buildStartedAt?: string | undefined
                      buildFinishedAt?: string | undefined
                      runtime?:
                        | 'docker'
                        | 'elixir'
                        | 'go'
                        | 'node'
                        | 'python'
                        | 'ruby'
                        | 'rust'
                        | undefined
                      commitId?: string | undefined
                      commitUrl?: string | undefined
                    }
                  | undefined
                image?:
                  | {
                      imageVersionId?: string | undefined
                      SHA?: string | undefined
                      ref?: string | undefined
                      imageUrl?: string | undefined
                      registryCredentialId?: string | undefined
                    }
                  | undefined
                createdAt: string
                updatedAt: string
                assetsDeletedAt?: string | undefined
              }
              cursor: string
            }[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { buildSourceId: string } } & {
              query: { cursor?: string | undefined; limit?: number | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { buildSourceId: string } } & {
              query: { cursor?: string | undefined; limit?: number | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { buildSourceId: string } } & {
              query: { cursor?: string | undefined; limit?: number | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { buildSourceId: string } } & {
              query: { cursor?: string | undefined; limit?: number | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 406
          }
        | {
            input: { param: { buildSourceId: string } } & {
              query: { cursor?: string | undefined; limit?: number | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 410
          }
        | {
            input: { param: { buildSourceId: string } } & {
              query: { cursor?: string | undefined; limit?: number | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { buildSourceId: string } } & {
              query: { cursor?: string | undefined; limit?: number | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { param: { buildSourceId: string } } & {
              query: { cursor?: string | undefined; limit?: number | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 503
          }
      $post:
        | {
            input: { param: { buildSourceId: string } } & {
              json: { clearCache?: 'clear' | 'do_not_clear' | undefined }
            }
            output: {
              id: string
              buildSourceId: string
              buildRun?:
                | {
                    id: string
                    status?:
                      | 'created'
                      | 'inProgress'
                      | 'succeeded'
                      | 'failed'
                      | 'canceled'
                      | 'unknown'
                      | undefined
                    buildStartedAt?: string | undefined
                    buildFinishedAt?: string | undefined
                    runtime?:
                      | 'docker'
                      | 'elixir'
                      | 'go'
                      | 'node'
                      | 'python'
                      | 'ruby'
                      | 'rust'
                      | undefined
                    commitId?: string | undefined
                    commitUrl?: string | undefined
                  }
                | undefined
              image?:
                | {
                    imageVersionId?: string | undefined
                    SHA?: string | undefined
                    ref?: string | undefined
                    imageUrl?: string | undefined
                    registryCredentialId?: string | undefined
                  }
                | undefined
              createdAt: string
              updatedAt: string
              assetsDeletedAt?: string | undefined
            }
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { param: { buildSourceId: string } } & {
              json: { clearCache?: 'clear' | 'do_not_clear' | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { buildSourceId: string } } & {
              json: { clearCache?: 'clear' | 'do_not_clear' | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { buildSourceId: string } } & {
              json: { clearCache?: 'clear' | 'do_not_clear' | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { buildSourceId: string } } & {
              json: { clearCache?: 'clear' | 'do_not_clear' | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { buildSourceId: string } } & {
              json: { clearCache?: 'clear' | 'do_not_clear' | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { buildSourceId: string } } & {
              json: { clearCache?: 'clear' | 'do_not_clear' | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { param: { buildSourceId: string } } & {
              json: { clearCache?: 'clear' | 'do_not_clear' | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 503
          }
    }
  } & {
    '/build-sources/:buildSourceId/builds/:buildId': {
      $get:
        | {
            input: { param: { buildSourceId: string; buildId: string } }
            output: {
              id: string
              buildSourceId: string
              buildRun?:
                | {
                    id: string
                    status?:
                      | 'created'
                      | 'inProgress'
                      | 'succeeded'
                      | 'failed'
                      | 'canceled'
                      | 'unknown'
                      | undefined
                    buildStartedAt?: string | undefined
                    buildFinishedAt?: string | undefined
                    runtime?:
                      | 'docker'
                      | 'elixir'
                      | 'go'
                      | 'node'
                      | 'python'
                      | 'ruby'
                      | 'rust'
                      | undefined
                    commitId?: string | undefined
                    commitUrl?: string | undefined
                  }
                | undefined
              image?:
                | {
                    imageVersionId?: string | undefined
                    SHA?: string | undefined
                    ref?: string | undefined
                    imageUrl?: string | undefined
                    registryCredentialId?: string | undefined
                  }
                | undefined
              createdAt: string
              updatedAt: string
              assetsDeletedAt?: string | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { buildSourceId: string; buildId: string } }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { buildSourceId: string; buildId: string } }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { buildSourceId: string; buildId: string } }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { buildSourceId: string; buildId: string } }
            output: Error
            outputFormat: 'json'
            status: 406
          }
        | {
            input: { param: { buildSourceId: string; buildId: string } }
            output: Error
            outputFormat: 'json'
            status: 410
          }
        | {
            input: { param: { buildSourceId: string; buildId: string } }
            output: Error
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { buildSourceId: string; buildId: string } }
            output: Error
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { param: { buildSourceId: string; buildId: string } }
            output: Error
            outputFormat: 'json'
            status: 503
          }
    }
  } & {
    '/build-sources/:buildSourceId/env-vars': {
      $get:
        | {
            input: { param: { buildSourceId: string } } & {
              query: { cursor?: string | undefined; limit?: number | undefined }
            }
            output: EnvVarWithCursor[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { buildSourceId: string } } & {
              query: { cursor?: string | undefined; limit?: number | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { buildSourceId: string } } & {
              query: { cursor?: string | undefined; limit?: number | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { buildSourceId: string } } & {
              query: { cursor?: string | undefined; limit?: number | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { buildSourceId: string } } & {
              query: { cursor?: string | undefined; limit?: number | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 406
          }
        | {
            input: { param: { buildSourceId: string } } & {
              query: { cursor?: string | undefined; limit?: number | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 410
          }
        | {
            input: { param: { buildSourceId: string } } & {
              query: { cursor?: string | undefined; limit?: number | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { buildSourceId: string } } & {
              query: { cursor?: string | undefined; limit?: number | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { param: { buildSourceId: string } } & {
              query: { cursor?: string | undefined; limit?: number | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 503
          }
      $put:
        | {
            input: { param: { buildSourceId: string } } & {
              json: ({ key: string; value: string } | { key: string; generateValue: boolean })[]
            }
            output: EnvVarWithCursor[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { buildSourceId: string } } & {
              json: ({ key: string; value: string } | { key: string; generateValue: boolean })[]
            }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { buildSourceId: string } } & {
              json: ({ key: string; value: string } | { key: string; generateValue: boolean })[]
            }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { buildSourceId: string } } & {
              json: ({ key: string; value: string } | { key: string; generateValue: boolean })[]
            }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { buildSourceId: string } } & {
              json: ({ key: string; value: string } | { key: string; generateValue: boolean })[]
            }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { buildSourceId: string } } & {
              json: ({ key: string; value: string } | { key: string; generateValue: boolean })[]
            }
            output: Error
            outputFormat: 'json'
            status: 406
          }
        | {
            input: { param: { buildSourceId: string } } & {
              json: ({ key: string; value: string } | { key: string; generateValue: boolean })[]
            }
            output: Error
            outputFormat: 'json'
            status: 410
          }
        | {
            input: { param: { buildSourceId: string } } & {
              json: ({ key: string; value: string } | { key: string; generateValue: boolean })[]
            }
            output: Error
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { buildSourceId: string } } & {
              json: ({ key: string; value: string } | { key: string; generateValue: boolean })[]
            }
            output: Error
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { param: { buildSourceId: string } } & {
              json: ({ key: string; value: string } | { key: string; generateValue: boolean })[]
            }
            output: Error
            outputFormat: 'json'
            status: 503
          }
    }
  } & {
    '/build-sources/:buildSourceId/env-vars/:envVarKey': {
      $get:
        | {
            input: { param: { buildSourceId: string; envVarKey: string } }
            output: EnvVar
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { buildSourceId: string; envVarKey: string } }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { buildSourceId: string; envVarKey: string } }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { buildSourceId: string; envVarKey: string } }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { buildSourceId: string; envVarKey: string } }
            output: Error
            outputFormat: 'json'
            status: 406
          }
        | {
            input: { param: { buildSourceId: string; envVarKey: string } }
            output: Error
            outputFormat: 'json'
            status: 410
          }
        | {
            input: { param: { buildSourceId: string; envVarKey: string } }
            output: Error
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { buildSourceId: string; envVarKey: string } }
            output: Error
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { param: { buildSourceId: string; envVarKey: string } }
            output: Error
            outputFormat: 'json'
            status: 503
          }
      $put:
        | {
            input: { param: { buildSourceId: string; envVarKey: string } } & {
              json: AddUpdateEnvVarInput
            }
            output: EnvVar
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { buildSourceId: string; envVarKey: string } } & {
              json: AddUpdateEnvVarInput
            }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { buildSourceId: string; envVarKey: string } } & {
              json: AddUpdateEnvVarInput
            }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { buildSourceId: string; envVarKey: string } } & {
              json: AddUpdateEnvVarInput
            }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { buildSourceId: string; envVarKey: string } } & {
              json: AddUpdateEnvVarInput
            }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { buildSourceId: string; envVarKey: string } } & {
              json: AddUpdateEnvVarInput
            }
            output: Error
            outputFormat: 'json'
            status: 406
          }
        | {
            input: { param: { buildSourceId: string; envVarKey: string } } & {
              json: AddUpdateEnvVarInput
            }
            output: Error
            outputFormat: 'json'
            status: 410
          }
        | {
            input: { param: { buildSourceId: string; envVarKey: string } } & {
              json: AddUpdateEnvVarInput
            }
            output: Error
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { buildSourceId: string; envVarKey: string } } & {
              json: AddUpdateEnvVarInput
            }
            output: Error
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { param: { buildSourceId: string; envVarKey: string } } & {
              json: AddUpdateEnvVarInput
            }
            output: Error
            outputFormat: 'json'
            status: 503
          }
      $delete:
        | {
            input: { param: { buildSourceId: string; envVarKey: string } }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { buildSourceId: string; envVarKey: string } }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { buildSourceId: string; envVarKey: string } }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { buildSourceId: string; envVarKey: string } }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { buildSourceId: string; envVarKey: string } }
            output: Error
            outputFormat: 'json'
            status: 406
          }
        | {
            input: { param: { buildSourceId: string; envVarKey: string } }
            output: Error
            outputFormat: 'json'
            status: 410
          }
        | {
            input: { param: { buildSourceId: string; envVarKey: string } }
            output: Error
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { buildSourceId: string; envVarKey: string } }
            output: Error
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { param: { buildSourceId: string; envVarKey: string } }
            output: Error
            outputFormat: 'json'
            status: 503
          }
    }
  } & {
    '/build-sources/:buildSourceId/secret-files': {
      $get:
        | {
            input: { param: { buildSourceId: string } } & {
              query: { cursor?: string | undefined; limit?: number | undefined }
            }
            output: SecretFileWithCursor[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { buildSourceId: string } } & {
              query: { cursor?: string | undefined; limit?: number | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { buildSourceId: string } } & {
              query: { cursor?: string | undefined; limit?: number | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { buildSourceId: string } } & {
              query: { cursor?: string | undefined; limit?: number | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { buildSourceId: string } } & {
              query: { cursor?: string | undefined; limit?: number | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 406
          }
        | {
            input: { param: { buildSourceId: string } } & {
              query: { cursor?: string | undefined; limit?: number | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 410
          }
        | {
            input: { param: { buildSourceId: string } } & {
              query: { cursor?: string | undefined; limit?: number | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { buildSourceId: string } } & {
              query: { cursor?: string | undefined; limit?: number | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { param: { buildSourceId: string } } & {
              query: { cursor?: string | undefined; limit?: number | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 503
          }
      $put:
        | {
            input: { param: { buildSourceId: string } } & {
              json: { name: string; content: string }[]
            }
            output: SecretFileWithCursor[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { buildSourceId: string } } & {
              json: { name: string; content: string }[]
            }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { buildSourceId: string } } & {
              json: { name: string; content: string }[]
            }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { buildSourceId: string } } & {
              json: { name: string; content: string }[]
            }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { buildSourceId: string } } & {
              json: { name: string; content: string }[]
            }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { buildSourceId: string } } & {
              json: { name: string; content: string }[]
            }
            output: Error
            outputFormat: 'json'
            status: 406
          }
        | {
            input: { param: { buildSourceId: string } } & {
              json: { name: string; content: string }[]
            }
            output: Error
            outputFormat: 'json'
            status: 410
          }
        | {
            input: { param: { buildSourceId: string } } & {
              json: { name: string; content: string }[]
            }
            output: Error
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { buildSourceId: string } } & {
              json: { name: string; content: string }[]
            }
            output: Error
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { param: { buildSourceId: string } } & {
              json: { name: string; content: string }[]
            }
            output: Error
            outputFormat: 'json'
            status: 503
          }
    }
  } & {
    '/build-sources/:buildSourceId/secret-files/:envVarKey': {
      $get:
        | {
            input: { param: { buildSourceId: string; envVarKey: string } }
            output: SecretFile
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { buildSourceId: string; envVarKey: string } }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { buildSourceId: string; envVarKey: string } }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { buildSourceId: string; envVarKey: string } }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { buildSourceId: string; envVarKey: string } }
            output: Error
            outputFormat: 'json'
            status: 406
          }
        | {
            input: { param: { buildSourceId: string; envVarKey: string } }
            output: Error
            outputFormat: 'json'
            status: 410
          }
        | {
            input: { param: { buildSourceId: string; envVarKey: string } }
            output: Error
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { buildSourceId: string; envVarKey: string } }
            output: Error
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { param: { buildSourceId: string; envVarKey: string } }
            output: Error
            outputFormat: 'json'
            status: 503
          }
      $put:
        | {
            input: { param: { buildSourceId: string; envVarKey: string } } & {
              json: { content?: string | undefined }
            }
            output: SecretFile
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { param: { buildSourceId: string; envVarKey: string } } & {
              json: { content?: string | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { buildSourceId: string; envVarKey: string } } & {
              json: { content?: string | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { buildSourceId: string; envVarKey: string } } & {
              json: { content?: string | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { buildSourceId: string; envVarKey: string } } & {
              json: { content?: string | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { buildSourceId: string; envVarKey: string } } & {
              json: { content?: string | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 406
          }
        | {
            input: { param: { buildSourceId: string; envVarKey: string } } & {
              json: { content?: string | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 410
          }
        | {
            input: { param: { buildSourceId: string; envVarKey: string } } & {
              json: { content?: string | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { buildSourceId: string; envVarKey: string } } & {
              json: { content?: string | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { param: { buildSourceId: string; envVarKey: string } } & {
              json: { content?: string | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 503
          }
      $delete:
        | {
            input: { param: { buildSourceId: string; envVarKey: string } }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { buildSourceId: string; envVarKey: string } }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { buildSourceId: string; envVarKey: string } }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { buildSourceId: string; envVarKey: string } }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { buildSourceId: string; envVarKey: string } }
            output: Error
            outputFormat: 'json'
            status: 406
          }
        | {
            input: { param: { buildSourceId: string; envVarKey: string } }
            output: Error
            outputFormat: 'json'
            status: 410
          }
        | {
            input: { param: { buildSourceId: string; envVarKey: string } }
            output: Error
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { buildSourceId: string; envVarKey: string } }
            output: Error
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { param: { buildSourceId: string; envVarKey: string } }
            output: Error
            outputFormat: 'json'
            status: 503
          }
    }
  } & {
    '/build-sources/:buildSourceId/env-groups/:envGroupId': {
      $post:
        | {
            input: { param: { buildSourceId: string; envGroupId: string } }
            output: EnvGroup
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { buildSourceId: string; envGroupId: string } }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { buildSourceId: string; envGroupId: string } }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { buildSourceId: string; envGroupId: string } }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { buildSourceId: string; envGroupId: string } }
            output: Error
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { buildSourceId: string; envGroupId: string } }
            output: Error
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { param: { buildSourceId: string; envGroupId: string } }
            output: Error
            outputFormat: 'json'
            status: 503
          }
      $delete:
        | {
            input: { param: { buildSourceId: string; envGroupId: string } }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { buildSourceId: string; envGroupId: string } }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { buildSourceId: string; envGroupId: string } }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { buildSourceId: string; envGroupId: string } }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { buildSourceId: string; envGroupId: string } }
            output: Error
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { buildSourceId: string; envGroupId: string } }
            output: Error
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { param: { buildSourceId: string; envGroupId: string } }
            output: Error
            outputFormat: 'json'
            status: 503
          }
    }
  } & {
    '/webhooks': {
      $post:
        | {
            input: {
              json: {
                ownerId: string
                url: string
                name: string
                enabled: boolean
                eventFilter: (
                  | 'artifact_fetch_failed'
                  | 'artifact_source_changed'
                  | 'autoscaling_config_changed'
                  | 'autoscaling_ended'
                  | 'autoscaling_started'
                  | 'branch_deleted'
                  | 'build_ended'
                  | 'build_started'
                  | 'commit_ignored'
                  | 'cron_job_run_ended'
                  | 'cron_job_run_started'
                  | 'deploy_ended'
                  | 'deploy_started'
                  | 'disk_created'
                  | 'disk_updated'
                  | 'disk_deleted'
                  | 'disk_snapshot_restored'
                  | 'image_pull_failed'
                  | 'instance_count_changed'
                  | 'job_run_ended'
                  | 'maintenance_mode_enabled'
                  | 'maintenance_mode_uri_updated'
                  | 'maintenance_ended'
                  | 'maintenance_started'
                  | 'pipeline_minutes_exhausted'
                  | 'plan_changed'
                  | 'pre_deploy_ended'
                  | 'pre_deploy_started'
                  | 'server_available'
                  | 'server_failed'
                  | 'server_hardware_failure'
                  | 'server_restarted'
                  | 'service_resumed'
                  | 'service_suspended'
                  | 'zero_downtime_redeploy_ended'
                  | 'zero_downtime_redeploy_started'
                  | 'edge_cache_enabled'
                  | 'edge_cache_disabled'
                  | 'edge_cache_purged'
                  | 'auto_deploy_disabled'
                  | 'auto_deploy_enabled'
                  | 'postgres_available'
                  | 'postgres_backup_completed'
                  | 'postgres_backup_failed'
                  | 'postgres_backup_started'
                  | 'postgres_cluster_leader_changed'
                  | 'postgres_connection_pool_changed'
                  | 'postgres_connection_pool_enabled_changed'
                  | 'postgres_created'
                  | 'postgres_disk_size_changed'
                  | 'postgres_disk_autoscaling_enabled_changed'
                  | 'postgres_ha_status_changed'
                  | 'postgres_restarted'
                  | 'postgres_unavailable'
                  | 'postgres_upgrade_failed'
                  | 'postgres_upgrade_started'
                  | 'postgres_upgrade_succeeded'
                  | 'postgres_restore_failed'
                  | 'postgres_restore_succeeded'
                  | 'postgres_read_replicas_changed'
                  | 'postgres_pitr_checkpoint_started'
                  | 'postgres_pitr_checkpoint_failed'
                  | 'postgres_pitr_checkpoint_completed'
                  | 'postgres_read_replica_stale'
                  | 'postgres_wal_archive_failed'
                  | 'key_value_available'
                  | 'key_value_config_restart'
                  | 'key_value_unhealthy'
                )[]
              }
            }
            output: {
              id: string
              url: string
              name: string
              secret: string
              enabled: boolean
              eventFilter: (
                | 'artifact_fetch_failed'
                | 'artifact_source_changed'
                | 'autoscaling_config_changed'
                | 'autoscaling_ended'
                | 'autoscaling_started'
                | 'branch_deleted'
                | 'build_ended'
                | 'build_started'
                | 'commit_ignored'
                | 'cron_job_run_ended'
                | 'cron_job_run_started'
                | 'deploy_ended'
                | 'deploy_started'
                | 'disk_created'
                | 'disk_updated'
                | 'disk_deleted'
                | 'disk_snapshot_restored'
                | 'image_pull_failed'
                | 'instance_count_changed'
                | 'job_run_ended'
                | 'maintenance_mode_enabled'
                | 'maintenance_mode_uri_updated'
                | 'maintenance_ended'
                | 'maintenance_started'
                | 'pipeline_minutes_exhausted'
                | 'plan_changed'
                | 'pre_deploy_ended'
                | 'pre_deploy_started'
                | 'server_available'
                | 'server_failed'
                | 'server_hardware_failure'
                | 'server_restarted'
                | 'service_resumed'
                | 'service_suspended'
                | 'zero_downtime_redeploy_ended'
                | 'zero_downtime_redeploy_started'
                | 'edge_cache_enabled'
                | 'edge_cache_disabled'
                | 'edge_cache_purged'
                | 'auto_deploy_disabled'
                | 'auto_deploy_enabled'
                | 'postgres_available'
                | 'postgres_backup_completed'
                | 'postgres_backup_failed'
                | 'postgres_backup_started'
                | 'postgres_cluster_leader_changed'
                | 'postgres_connection_pool_changed'
                | 'postgres_connection_pool_enabled_changed'
                | 'postgres_created'
                | 'postgres_disk_size_changed'
                | 'postgres_disk_autoscaling_enabled_changed'
                | 'postgres_ha_status_changed'
                | 'postgres_restarted'
                | 'postgres_unavailable'
                | 'postgres_upgrade_failed'
                | 'postgres_upgrade_started'
                | 'postgres_upgrade_succeeded'
                | 'postgres_restore_failed'
                | 'postgres_restore_succeeded'
                | 'postgres_read_replicas_changed'
                | 'postgres_pitr_checkpoint_started'
                | 'postgres_pitr_checkpoint_failed'
                | 'postgres_pitr_checkpoint_completed'
                | 'postgres_read_replica_stale'
                | 'postgres_wal_archive_failed'
                | 'key_value_available'
                | 'key_value_config_restart'
                | 'key_value_unhealthy'
              )[]
            }
            outputFormat: 'json'
            status: 201
          }
        | {
            input: {
              json: {
                ownerId: string
                url: string
                name: string
                enabled: boolean
                eventFilter: (
                  | 'artifact_fetch_failed'
                  | 'artifact_source_changed'
                  | 'autoscaling_config_changed'
                  | 'autoscaling_ended'
                  | 'autoscaling_started'
                  | 'branch_deleted'
                  | 'build_ended'
                  | 'build_started'
                  | 'commit_ignored'
                  | 'cron_job_run_ended'
                  | 'cron_job_run_started'
                  | 'deploy_ended'
                  | 'deploy_started'
                  | 'disk_created'
                  | 'disk_updated'
                  | 'disk_deleted'
                  | 'disk_snapshot_restored'
                  | 'image_pull_failed'
                  | 'instance_count_changed'
                  | 'job_run_ended'
                  | 'maintenance_mode_enabled'
                  | 'maintenance_mode_uri_updated'
                  | 'maintenance_ended'
                  | 'maintenance_started'
                  | 'pipeline_minutes_exhausted'
                  | 'plan_changed'
                  | 'pre_deploy_ended'
                  | 'pre_deploy_started'
                  | 'server_available'
                  | 'server_failed'
                  | 'server_hardware_failure'
                  | 'server_restarted'
                  | 'service_resumed'
                  | 'service_suspended'
                  | 'zero_downtime_redeploy_ended'
                  | 'zero_downtime_redeploy_started'
                  | 'edge_cache_enabled'
                  | 'edge_cache_disabled'
                  | 'edge_cache_purged'
                  | 'auto_deploy_disabled'
                  | 'auto_deploy_enabled'
                  | 'postgres_available'
                  | 'postgres_backup_completed'
                  | 'postgres_backup_failed'
                  | 'postgres_backup_started'
                  | 'postgres_cluster_leader_changed'
                  | 'postgres_connection_pool_changed'
                  | 'postgres_connection_pool_enabled_changed'
                  | 'postgres_created'
                  | 'postgres_disk_size_changed'
                  | 'postgres_disk_autoscaling_enabled_changed'
                  | 'postgres_ha_status_changed'
                  | 'postgres_restarted'
                  | 'postgres_unavailable'
                  | 'postgres_upgrade_failed'
                  | 'postgres_upgrade_started'
                  | 'postgres_upgrade_succeeded'
                  | 'postgres_restore_failed'
                  | 'postgres_restore_succeeded'
                  | 'postgres_read_replicas_changed'
                  | 'postgres_pitr_checkpoint_started'
                  | 'postgres_pitr_checkpoint_failed'
                  | 'postgres_pitr_checkpoint_completed'
                  | 'postgres_read_replica_stale'
                  | 'postgres_wal_archive_failed'
                  | 'key_value_available'
                  | 'key_value_config_restart'
                  | 'key_value_unhealthy'
                )[]
              }
            }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              json: {
                ownerId: string
                url: string
                name: string
                enabled: boolean
                eventFilter: (
                  | 'artifact_fetch_failed'
                  | 'artifact_source_changed'
                  | 'autoscaling_config_changed'
                  | 'autoscaling_ended'
                  | 'autoscaling_started'
                  | 'branch_deleted'
                  | 'build_ended'
                  | 'build_started'
                  | 'commit_ignored'
                  | 'cron_job_run_ended'
                  | 'cron_job_run_started'
                  | 'deploy_ended'
                  | 'deploy_started'
                  | 'disk_created'
                  | 'disk_updated'
                  | 'disk_deleted'
                  | 'disk_snapshot_restored'
                  | 'image_pull_failed'
                  | 'instance_count_changed'
                  | 'job_run_ended'
                  | 'maintenance_mode_enabled'
                  | 'maintenance_mode_uri_updated'
                  | 'maintenance_ended'
                  | 'maintenance_started'
                  | 'pipeline_minutes_exhausted'
                  | 'plan_changed'
                  | 'pre_deploy_ended'
                  | 'pre_deploy_started'
                  | 'server_available'
                  | 'server_failed'
                  | 'server_hardware_failure'
                  | 'server_restarted'
                  | 'service_resumed'
                  | 'service_suspended'
                  | 'zero_downtime_redeploy_ended'
                  | 'zero_downtime_redeploy_started'
                  | 'edge_cache_enabled'
                  | 'edge_cache_disabled'
                  | 'edge_cache_purged'
                  | 'auto_deploy_disabled'
                  | 'auto_deploy_enabled'
                  | 'postgres_available'
                  | 'postgres_backup_completed'
                  | 'postgres_backup_failed'
                  | 'postgres_backup_started'
                  | 'postgres_cluster_leader_changed'
                  | 'postgres_connection_pool_changed'
                  | 'postgres_connection_pool_enabled_changed'
                  | 'postgres_created'
                  | 'postgres_disk_size_changed'
                  | 'postgres_disk_autoscaling_enabled_changed'
                  | 'postgres_ha_status_changed'
                  | 'postgres_restarted'
                  | 'postgres_unavailable'
                  | 'postgres_upgrade_failed'
                  | 'postgres_upgrade_started'
                  | 'postgres_upgrade_succeeded'
                  | 'postgres_restore_failed'
                  | 'postgres_restore_succeeded'
                  | 'postgres_read_replicas_changed'
                  | 'postgres_pitr_checkpoint_started'
                  | 'postgres_pitr_checkpoint_failed'
                  | 'postgres_pitr_checkpoint_completed'
                  | 'postgres_read_replica_stale'
                  | 'postgres_wal_archive_failed'
                  | 'key_value_available'
                  | 'key_value_config_restart'
                  | 'key_value_unhealthy'
                )[]
              }
            }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              json: {
                ownerId: string
                url: string
                name: string
                enabled: boolean
                eventFilter: (
                  | 'artifact_fetch_failed'
                  | 'artifact_source_changed'
                  | 'autoscaling_config_changed'
                  | 'autoscaling_ended'
                  | 'autoscaling_started'
                  | 'branch_deleted'
                  | 'build_ended'
                  | 'build_started'
                  | 'commit_ignored'
                  | 'cron_job_run_ended'
                  | 'cron_job_run_started'
                  | 'deploy_ended'
                  | 'deploy_started'
                  | 'disk_created'
                  | 'disk_updated'
                  | 'disk_deleted'
                  | 'disk_snapshot_restored'
                  | 'image_pull_failed'
                  | 'instance_count_changed'
                  | 'job_run_ended'
                  | 'maintenance_mode_enabled'
                  | 'maintenance_mode_uri_updated'
                  | 'maintenance_ended'
                  | 'maintenance_started'
                  | 'pipeline_minutes_exhausted'
                  | 'plan_changed'
                  | 'pre_deploy_ended'
                  | 'pre_deploy_started'
                  | 'server_available'
                  | 'server_failed'
                  | 'server_hardware_failure'
                  | 'server_restarted'
                  | 'service_resumed'
                  | 'service_suspended'
                  | 'zero_downtime_redeploy_ended'
                  | 'zero_downtime_redeploy_started'
                  | 'edge_cache_enabled'
                  | 'edge_cache_disabled'
                  | 'edge_cache_purged'
                  | 'auto_deploy_disabled'
                  | 'auto_deploy_enabled'
                  | 'postgres_available'
                  | 'postgres_backup_completed'
                  | 'postgres_backup_failed'
                  | 'postgres_backup_started'
                  | 'postgres_cluster_leader_changed'
                  | 'postgres_connection_pool_changed'
                  | 'postgres_connection_pool_enabled_changed'
                  | 'postgres_created'
                  | 'postgres_disk_size_changed'
                  | 'postgres_disk_autoscaling_enabled_changed'
                  | 'postgres_ha_status_changed'
                  | 'postgres_restarted'
                  | 'postgres_unavailable'
                  | 'postgres_upgrade_failed'
                  | 'postgres_upgrade_started'
                  | 'postgres_upgrade_succeeded'
                  | 'postgres_restore_failed'
                  | 'postgres_restore_succeeded'
                  | 'postgres_read_replicas_changed'
                  | 'postgres_pitr_checkpoint_started'
                  | 'postgres_pitr_checkpoint_failed'
                  | 'postgres_pitr_checkpoint_completed'
                  | 'postgres_read_replica_stale'
                  | 'postgres_wal_archive_failed'
                  | 'key_value_available'
                  | 'key_value_config_restart'
                  | 'key_value_unhealthy'
                )[]
              }
            }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: {
              json: {
                ownerId: string
                url: string
                name: string
                enabled: boolean
                eventFilter: (
                  | 'artifact_fetch_failed'
                  | 'artifact_source_changed'
                  | 'autoscaling_config_changed'
                  | 'autoscaling_ended'
                  | 'autoscaling_started'
                  | 'branch_deleted'
                  | 'build_ended'
                  | 'build_started'
                  | 'commit_ignored'
                  | 'cron_job_run_ended'
                  | 'cron_job_run_started'
                  | 'deploy_ended'
                  | 'deploy_started'
                  | 'disk_created'
                  | 'disk_updated'
                  | 'disk_deleted'
                  | 'disk_snapshot_restored'
                  | 'image_pull_failed'
                  | 'instance_count_changed'
                  | 'job_run_ended'
                  | 'maintenance_mode_enabled'
                  | 'maintenance_mode_uri_updated'
                  | 'maintenance_ended'
                  | 'maintenance_started'
                  | 'pipeline_minutes_exhausted'
                  | 'plan_changed'
                  | 'pre_deploy_ended'
                  | 'pre_deploy_started'
                  | 'server_available'
                  | 'server_failed'
                  | 'server_hardware_failure'
                  | 'server_restarted'
                  | 'service_resumed'
                  | 'service_suspended'
                  | 'zero_downtime_redeploy_ended'
                  | 'zero_downtime_redeploy_started'
                  | 'edge_cache_enabled'
                  | 'edge_cache_disabled'
                  | 'edge_cache_purged'
                  | 'auto_deploy_disabled'
                  | 'auto_deploy_enabled'
                  | 'postgres_available'
                  | 'postgres_backup_completed'
                  | 'postgres_backup_failed'
                  | 'postgres_backup_started'
                  | 'postgres_cluster_leader_changed'
                  | 'postgres_connection_pool_changed'
                  | 'postgres_connection_pool_enabled_changed'
                  | 'postgres_created'
                  | 'postgres_disk_size_changed'
                  | 'postgres_disk_autoscaling_enabled_changed'
                  | 'postgres_ha_status_changed'
                  | 'postgres_restarted'
                  | 'postgres_unavailable'
                  | 'postgres_upgrade_failed'
                  | 'postgres_upgrade_started'
                  | 'postgres_upgrade_succeeded'
                  | 'postgres_restore_failed'
                  | 'postgres_restore_succeeded'
                  | 'postgres_read_replicas_changed'
                  | 'postgres_pitr_checkpoint_started'
                  | 'postgres_pitr_checkpoint_failed'
                  | 'postgres_pitr_checkpoint_completed'
                  | 'postgres_read_replica_stale'
                  | 'postgres_wal_archive_failed'
                  | 'key_value_available'
                  | 'key_value_config_restart'
                  | 'key_value_unhealthy'
                )[]
              }
            }
            output: Error
            outputFormat: 'json'
            status: 429
          }
        | {
            input: {
              json: {
                ownerId: string
                url: string
                name: string
                enabled: boolean
                eventFilter: (
                  | 'artifact_fetch_failed'
                  | 'artifact_source_changed'
                  | 'autoscaling_config_changed'
                  | 'autoscaling_ended'
                  | 'autoscaling_started'
                  | 'branch_deleted'
                  | 'build_ended'
                  | 'build_started'
                  | 'commit_ignored'
                  | 'cron_job_run_ended'
                  | 'cron_job_run_started'
                  | 'deploy_ended'
                  | 'deploy_started'
                  | 'disk_created'
                  | 'disk_updated'
                  | 'disk_deleted'
                  | 'disk_snapshot_restored'
                  | 'image_pull_failed'
                  | 'instance_count_changed'
                  | 'job_run_ended'
                  | 'maintenance_mode_enabled'
                  | 'maintenance_mode_uri_updated'
                  | 'maintenance_ended'
                  | 'maintenance_started'
                  | 'pipeline_minutes_exhausted'
                  | 'plan_changed'
                  | 'pre_deploy_ended'
                  | 'pre_deploy_started'
                  | 'server_available'
                  | 'server_failed'
                  | 'server_hardware_failure'
                  | 'server_restarted'
                  | 'service_resumed'
                  | 'service_suspended'
                  | 'zero_downtime_redeploy_ended'
                  | 'zero_downtime_redeploy_started'
                  | 'edge_cache_enabled'
                  | 'edge_cache_disabled'
                  | 'edge_cache_purged'
                  | 'auto_deploy_disabled'
                  | 'auto_deploy_enabled'
                  | 'postgres_available'
                  | 'postgres_backup_completed'
                  | 'postgres_backup_failed'
                  | 'postgres_backup_started'
                  | 'postgres_cluster_leader_changed'
                  | 'postgres_connection_pool_changed'
                  | 'postgres_connection_pool_enabled_changed'
                  | 'postgres_created'
                  | 'postgres_disk_size_changed'
                  | 'postgres_disk_autoscaling_enabled_changed'
                  | 'postgres_ha_status_changed'
                  | 'postgres_restarted'
                  | 'postgres_unavailable'
                  | 'postgres_upgrade_failed'
                  | 'postgres_upgrade_started'
                  | 'postgres_upgrade_succeeded'
                  | 'postgres_restore_failed'
                  | 'postgres_restore_succeeded'
                  | 'postgres_read_replicas_changed'
                  | 'postgres_pitr_checkpoint_started'
                  | 'postgres_pitr_checkpoint_failed'
                  | 'postgres_pitr_checkpoint_completed'
                  | 'postgres_read_replica_stale'
                  | 'postgres_wal_archive_failed'
                  | 'key_value_available'
                  | 'key_value_config_restart'
                  | 'key_value_unhealthy'
                )[]
              }
            }
            output: Error
            outputFormat: 'json'
            status: 500
          }
        | {
            input: {
              json: {
                ownerId: string
                url: string
                name: string
                enabled: boolean
                eventFilter: (
                  | 'artifact_fetch_failed'
                  | 'artifact_source_changed'
                  | 'autoscaling_config_changed'
                  | 'autoscaling_ended'
                  | 'autoscaling_started'
                  | 'branch_deleted'
                  | 'build_ended'
                  | 'build_started'
                  | 'commit_ignored'
                  | 'cron_job_run_ended'
                  | 'cron_job_run_started'
                  | 'deploy_ended'
                  | 'deploy_started'
                  | 'disk_created'
                  | 'disk_updated'
                  | 'disk_deleted'
                  | 'disk_snapshot_restored'
                  | 'image_pull_failed'
                  | 'instance_count_changed'
                  | 'job_run_ended'
                  | 'maintenance_mode_enabled'
                  | 'maintenance_mode_uri_updated'
                  | 'maintenance_ended'
                  | 'maintenance_started'
                  | 'pipeline_minutes_exhausted'
                  | 'plan_changed'
                  | 'pre_deploy_ended'
                  | 'pre_deploy_started'
                  | 'server_available'
                  | 'server_failed'
                  | 'server_hardware_failure'
                  | 'server_restarted'
                  | 'service_resumed'
                  | 'service_suspended'
                  | 'zero_downtime_redeploy_ended'
                  | 'zero_downtime_redeploy_started'
                  | 'edge_cache_enabled'
                  | 'edge_cache_disabled'
                  | 'edge_cache_purged'
                  | 'auto_deploy_disabled'
                  | 'auto_deploy_enabled'
                  | 'postgres_available'
                  | 'postgres_backup_completed'
                  | 'postgres_backup_failed'
                  | 'postgres_backup_started'
                  | 'postgres_cluster_leader_changed'
                  | 'postgres_connection_pool_changed'
                  | 'postgres_connection_pool_enabled_changed'
                  | 'postgres_created'
                  | 'postgres_disk_size_changed'
                  | 'postgres_disk_autoscaling_enabled_changed'
                  | 'postgres_ha_status_changed'
                  | 'postgres_restarted'
                  | 'postgres_unavailable'
                  | 'postgres_upgrade_failed'
                  | 'postgres_upgrade_started'
                  | 'postgres_upgrade_succeeded'
                  | 'postgres_restore_failed'
                  | 'postgres_restore_succeeded'
                  | 'postgres_read_replicas_changed'
                  | 'postgres_pitr_checkpoint_started'
                  | 'postgres_pitr_checkpoint_failed'
                  | 'postgres_pitr_checkpoint_completed'
                  | 'postgres_read_replica_stale'
                  | 'postgres_wal_archive_failed'
                  | 'key_value_available'
                  | 'key_value_config_restart'
                  | 'key_value_unhealthy'
                )[]
              }
            }
            output: Error
            outputFormat: 'json'
            status: 503
          }
      $get:
        | {
            input: {
              query: {
                cursor?: string | undefined
                limit?: number | undefined
                ownerId?: string[] | undefined
              }
            }
            output: WebhookWithCursor[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                cursor?: string | undefined
                limit?: number | undefined
                ownerId?: string[] | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                cursor?: string | undefined
                limit?: number | undefined
                ownerId?: string[] | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              query: {
                cursor?: string | undefined
                limit?: number | undefined
                ownerId?: string[] | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: {
              query: {
                cursor?: string | undefined
                limit?: number | undefined
                ownerId?: string[] | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 429
          }
        | {
            input: {
              query: {
                cursor?: string | undefined
                limit?: number | undefined
                ownerId?: string[] | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 500
          }
        | {
            input: {
              query: {
                cursor?: string | undefined
                limit?: number | undefined
                ownerId?: string[] | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 503
          }
    }
  } & {
    '/webhooks/:webhookId': {
      $get:
        | {
            input: { param: { webhookId: string } }
            output: {
              id: string
              url: string
              name: string
              secret: string
              enabled: boolean
              eventFilter: (
                | 'artifact_fetch_failed'
                | 'artifact_source_changed'
                | 'autoscaling_config_changed'
                | 'autoscaling_ended'
                | 'autoscaling_started'
                | 'branch_deleted'
                | 'build_ended'
                | 'build_started'
                | 'commit_ignored'
                | 'cron_job_run_ended'
                | 'cron_job_run_started'
                | 'deploy_ended'
                | 'deploy_started'
                | 'disk_created'
                | 'disk_updated'
                | 'disk_deleted'
                | 'disk_snapshot_restored'
                | 'image_pull_failed'
                | 'instance_count_changed'
                | 'job_run_ended'
                | 'maintenance_mode_enabled'
                | 'maintenance_mode_uri_updated'
                | 'maintenance_ended'
                | 'maintenance_started'
                | 'pipeline_minutes_exhausted'
                | 'plan_changed'
                | 'pre_deploy_ended'
                | 'pre_deploy_started'
                | 'server_available'
                | 'server_failed'
                | 'server_hardware_failure'
                | 'server_restarted'
                | 'service_resumed'
                | 'service_suspended'
                | 'zero_downtime_redeploy_ended'
                | 'zero_downtime_redeploy_started'
                | 'edge_cache_enabled'
                | 'edge_cache_disabled'
                | 'edge_cache_purged'
                | 'auto_deploy_disabled'
                | 'auto_deploy_enabled'
                | 'postgres_available'
                | 'postgres_backup_completed'
                | 'postgres_backup_failed'
                | 'postgres_backup_started'
                | 'postgres_cluster_leader_changed'
                | 'postgres_connection_pool_changed'
                | 'postgres_connection_pool_enabled_changed'
                | 'postgres_created'
                | 'postgres_disk_size_changed'
                | 'postgres_disk_autoscaling_enabled_changed'
                | 'postgres_ha_status_changed'
                | 'postgres_restarted'
                | 'postgres_unavailable'
                | 'postgres_upgrade_failed'
                | 'postgres_upgrade_started'
                | 'postgres_upgrade_succeeded'
                | 'postgres_restore_failed'
                | 'postgres_restore_succeeded'
                | 'postgres_read_replicas_changed'
                | 'postgres_pitr_checkpoint_started'
                | 'postgres_pitr_checkpoint_failed'
                | 'postgres_pitr_checkpoint_completed'
                | 'postgres_read_replica_stale'
                | 'postgres_wal_archive_failed'
                | 'key_value_available'
                | 'key_value_config_restart'
                | 'key_value_unhealthy'
              )[]
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { webhookId: string } }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { webhookId: string } }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { webhookId: string } }
            output: Error
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { webhookId: string } }
            output: Error
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { param: { webhookId: string } }
            output: Error
            outputFormat: 'json'
            status: 503
          }
      $patch:
        | {
            input: { param: { webhookId: string } } & {
              json: {
                name?: string | undefined
                url?: string | undefined
                enabled?: boolean | undefined
                eventFilter?:
                  | (
                      | 'artifact_fetch_failed'
                      | 'artifact_source_changed'
                      | 'autoscaling_config_changed'
                      | 'autoscaling_ended'
                      | 'autoscaling_started'
                      | 'branch_deleted'
                      | 'build_ended'
                      | 'build_started'
                      | 'commit_ignored'
                      | 'cron_job_run_ended'
                      | 'cron_job_run_started'
                      | 'deploy_ended'
                      | 'deploy_started'
                      | 'disk_created'
                      | 'disk_updated'
                      | 'disk_deleted'
                      | 'disk_snapshot_restored'
                      | 'image_pull_failed'
                      | 'instance_count_changed'
                      | 'job_run_ended'
                      | 'maintenance_mode_enabled'
                      | 'maintenance_mode_uri_updated'
                      | 'maintenance_ended'
                      | 'maintenance_started'
                      | 'pipeline_minutes_exhausted'
                      | 'plan_changed'
                      | 'pre_deploy_ended'
                      | 'pre_deploy_started'
                      | 'server_available'
                      | 'server_failed'
                      | 'server_hardware_failure'
                      | 'server_restarted'
                      | 'service_resumed'
                      | 'service_suspended'
                      | 'zero_downtime_redeploy_ended'
                      | 'zero_downtime_redeploy_started'
                      | 'edge_cache_enabled'
                      | 'edge_cache_disabled'
                      | 'edge_cache_purged'
                      | 'auto_deploy_disabled'
                      | 'auto_deploy_enabled'
                      | 'postgres_available'
                      | 'postgres_backup_completed'
                      | 'postgres_backup_failed'
                      | 'postgres_backup_started'
                      | 'postgres_cluster_leader_changed'
                      | 'postgres_connection_pool_changed'
                      | 'postgres_connection_pool_enabled_changed'
                      | 'postgres_created'
                      | 'postgres_disk_size_changed'
                      | 'postgres_disk_autoscaling_enabled_changed'
                      | 'postgres_ha_status_changed'
                      | 'postgres_restarted'
                      | 'postgres_unavailable'
                      | 'postgres_upgrade_failed'
                      | 'postgres_upgrade_started'
                      | 'postgres_upgrade_succeeded'
                      | 'postgres_restore_failed'
                      | 'postgres_restore_succeeded'
                      | 'postgres_read_replicas_changed'
                      | 'postgres_pitr_checkpoint_started'
                      | 'postgres_pitr_checkpoint_failed'
                      | 'postgres_pitr_checkpoint_completed'
                      | 'postgres_read_replica_stale'
                      | 'postgres_wal_archive_failed'
                      | 'key_value_available'
                      | 'key_value_config_restart'
                      | 'key_value_unhealthy'
                    )[]
                  | undefined
              }
            }
            output: {
              id: string
              url: string
              name: string
              secret: string
              enabled: boolean
              eventFilter: (
                | 'artifact_fetch_failed'
                | 'artifact_source_changed'
                | 'autoscaling_config_changed'
                | 'autoscaling_ended'
                | 'autoscaling_started'
                | 'branch_deleted'
                | 'build_ended'
                | 'build_started'
                | 'commit_ignored'
                | 'cron_job_run_ended'
                | 'cron_job_run_started'
                | 'deploy_ended'
                | 'deploy_started'
                | 'disk_created'
                | 'disk_updated'
                | 'disk_deleted'
                | 'disk_snapshot_restored'
                | 'image_pull_failed'
                | 'instance_count_changed'
                | 'job_run_ended'
                | 'maintenance_mode_enabled'
                | 'maintenance_mode_uri_updated'
                | 'maintenance_ended'
                | 'maintenance_started'
                | 'pipeline_minutes_exhausted'
                | 'plan_changed'
                | 'pre_deploy_ended'
                | 'pre_deploy_started'
                | 'server_available'
                | 'server_failed'
                | 'server_hardware_failure'
                | 'server_restarted'
                | 'service_resumed'
                | 'service_suspended'
                | 'zero_downtime_redeploy_ended'
                | 'zero_downtime_redeploy_started'
                | 'edge_cache_enabled'
                | 'edge_cache_disabled'
                | 'edge_cache_purged'
                | 'auto_deploy_disabled'
                | 'auto_deploy_enabled'
                | 'postgres_available'
                | 'postgres_backup_completed'
                | 'postgres_backup_failed'
                | 'postgres_backup_started'
                | 'postgres_cluster_leader_changed'
                | 'postgres_connection_pool_changed'
                | 'postgres_connection_pool_enabled_changed'
                | 'postgres_created'
                | 'postgres_disk_size_changed'
                | 'postgres_disk_autoscaling_enabled_changed'
                | 'postgres_ha_status_changed'
                | 'postgres_restarted'
                | 'postgres_unavailable'
                | 'postgres_upgrade_failed'
                | 'postgres_upgrade_started'
                | 'postgres_upgrade_succeeded'
                | 'postgres_restore_failed'
                | 'postgres_restore_succeeded'
                | 'postgres_read_replicas_changed'
                | 'postgres_pitr_checkpoint_started'
                | 'postgres_pitr_checkpoint_failed'
                | 'postgres_pitr_checkpoint_completed'
                | 'postgres_read_replica_stale'
                | 'postgres_wal_archive_failed'
                | 'key_value_available'
                | 'key_value_config_restart'
                | 'key_value_unhealthy'
              )[]
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { webhookId: string } } & {
              json: {
                name?: string | undefined
                url?: string | undefined
                enabled?: boolean | undefined
                eventFilter?:
                  | (
                      | 'artifact_fetch_failed'
                      | 'artifact_source_changed'
                      | 'autoscaling_config_changed'
                      | 'autoscaling_ended'
                      | 'autoscaling_started'
                      | 'branch_deleted'
                      | 'build_ended'
                      | 'build_started'
                      | 'commit_ignored'
                      | 'cron_job_run_ended'
                      | 'cron_job_run_started'
                      | 'deploy_ended'
                      | 'deploy_started'
                      | 'disk_created'
                      | 'disk_updated'
                      | 'disk_deleted'
                      | 'disk_snapshot_restored'
                      | 'image_pull_failed'
                      | 'instance_count_changed'
                      | 'job_run_ended'
                      | 'maintenance_mode_enabled'
                      | 'maintenance_mode_uri_updated'
                      | 'maintenance_ended'
                      | 'maintenance_started'
                      | 'pipeline_minutes_exhausted'
                      | 'plan_changed'
                      | 'pre_deploy_ended'
                      | 'pre_deploy_started'
                      | 'server_available'
                      | 'server_failed'
                      | 'server_hardware_failure'
                      | 'server_restarted'
                      | 'service_resumed'
                      | 'service_suspended'
                      | 'zero_downtime_redeploy_ended'
                      | 'zero_downtime_redeploy_started'
                      | 'edge_cache_enabled'
                      | 'edge_cache_disabled'
                      | 'edge_cache_purged'
                      | 'auto_deploy_disabled'
                      | 'auto_deploy_enabled'
                      | 'postgres_available'
                      | 'postgres_backup_completed'
                      | 'postgres_backup_failed'
                      | 'postgres_backup_started'
                      | 'postgres_cluster_leader_changed'
                      | 'postgres_connection_pool_changed'
                      | 'postgres_connection_pool_enabled_changed'
                      | 'postgres_created'
                      | 'postgres_disk_size_changed'
                      | 'postgres_disk_autoscaling_enabled_changed'
                      | 'postgres_ha_status_changed'
                      | 'postgres_restarted'
                      | 'postgres_unavailable'
                      | 'postgres_upgrade_failed'
                      | 'postgres_upgrade_started'
                      | 'postgres_upgrade_succeeded'
                      | 'postgres_restore_failed'
                      | 'postgres_restore_succeeded'
                      | 'postgres_read_replicas_changed'
                      | 'postgres_pitr_checkpoint_started'
                      | 'postgres_pitr_checkpoint_failed'
                      | 'postgres_pitr_checkpoint_completed'
                      | 'postgres_read_replica_stale'
                      | 'postgres_wal_archive_failed'
                      | 'key_value_available'
                      | 'key_value_config_restart'
                      | 'key_value_unhealthy'
                    )[]
                  | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { webhookId: string } } & {
              json: {
                name?: string | undefined
                url?: string | undefined
                enabled?: boolean | undefined
                eventFilter?:
                  | (
                      | 'artifact_fetch_failed'
                      | 'artifact_source_changed'
                      | 'autoscaling_config_changed'
                      | 'autoscaling_ended'
                      | 'autoscaling_started'
                      | 'branch_deleted'
                      | 'build_ended'
                      | 'build_started'
                      | 'commit_ignored'
                      | 'cron_job_run_ended'
                      | 'cron_job_run_started'
                      | 'deploy_ended'
                      | 'deploy_started'
                      | 'disk_created'
                      | 'disk_updated'
                      | 'disk_deleted'
                      | 'disk_snapshot_restored'
                      | 'image_pull_failed'
                      | 'instance_count_changed'
                      | 'job_run_ended'
                      | 'maintenance_mode_enabled'
                      | 'maintenance_mode_uri_updated'
                      | 'maintenance_ended'
                      | 'maintenance_started'
                      | 'pipeline_minutes_exhausted'
                      | 'plan_changed'
                      | 'pre_deploy_ended'
                      | 'pre_deploy_started'
                      | 'server_available'
                      | 'server_failed'
                      | 'server_hardware_failure'
                      | 'server_restarted'
                      | 'service_resumed'
                      | 'service_suspended'
                      | 'zero_downtime_redeploy_ended'
                      | 'zero_downtime_redeploy_started'
                      | 'edge_cache_enabled'
                      | 'edge_cache_disabled'
                      | 'edge_cache_purged'
                      | 'auto_deploy_disabled'
                      | 'auto_deploy_enabled'
                      | 'postgres_available'
                      | 'postgres_backup_completed'
                      | 'postgres_backup_failed'
                      | 'postgres_backup_started'
                      | 'postgres_cluster_leader_changed'
                      | 'postgres_connection_pool_changed'
                      | 'postgres_connection_pool_enabled_changed'
                      | 'postgres_created'
                      | 'postgres_disk_size_changed'
                      | 'postgres_disk_autoscaling_enabled_changed'
                      | 'postgres_ha_status_changed'
                      | 'postgres_restarted'
                      | 'postgres_unavailable'
                      | 'postgres_upgrade_failed'
                      | 'postgres_upgrade_started'
                      | 'postgres_upgrade_succeeded'
                      | 'postgres_restore_failed'
                      | 'postgres_restore_succeeded'
                      | 'postgres_read_replicas_changed'
                      | 'postgres_pitr_checkpoint_started'
                      | 'postgres_pitr_checkpoint_failed'
                      | 'postgres_pitr_checkpoint_completed'
                      | 'postgres_read_replica_stale'
                      | 'postgres_wal_archive_failed'
                      | 'key_value_available'
                      | 'key_value_config_restart'
                      | 'key_value_unhealthy'
                    )[]
                  | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { webhookId: string } } & {
              json: {
                name?: string | undefined
                url?: string | undefined
                enabled?: boolean | undefined
                eventFilter?:
                  | (
                      | 'artifact_fetch_failed'
                      | 'artifact_source_changed'
                      | 'autoscaling_config_changed'
                      | 'autoscaling_ended'
                      | 'autoscaling_started'
                      | 'branch_deleted'
                      | 'build_ended'
                      | 'build_started'
                      | 'commit_ignored'
                      | 'cron_job_run_ended'
                      | 'cron_job_run_started'
                      | 'deploy_ended'
                      | 'deploy_started'
                      | 'disk_created'
                      | 'disk_updated'
                      | 'disk_deleted'
                      | 'disk_snapshot_restored'
                      | 'image_pull_failed'
                      | 'instance_count_changed'
                      | 'job_run_ended'
                      | 'maintenance_mode_enabled'
                      | 'maintenance_mode_uri_updated'
                      | 'maintenance_ended'
                      | 'maintenance_started'
                      | 'pipeline_minutes_exhausted'
                      | 'plan_changed'
                      | 'pre_deploy_ended'
                      | 'pre_deploy_started'
                      | 'server_available'
                      | 'server_failed'
                      | 'server_hardware_failure'
                      | 'server_restarted'
                      | 'service_resumed'
                      | 'service_suspended'
                      | 'zero_downtime_redeploy_ended'
                      | 'zero_downtime_redeploy_started'
                      | 'edge_cache_enabled'
                      | 'edge_cache_disabled'
                      | 'edge_cache_purged'
                      | 'auto_deploy_disabled'
                      | 'auto_deploy_enabled'
                      | 'postgres_available'
                      | 'postgres_backup_completed'
                      | 'postgres_backup_failed'
                      | 'postgres_backup_started'
                      | 'postgres_cluster_leader_changed'
                      | 'postgres_connection_pool_changed'
                      | 'postgres_connection_pool_enabled_changed'
                      | 'postgres_created'
                      | 'postgres_disk_size_changed'
                      | 'postgres_disk_autoscaling_enabled_changed'
                      | 'postgres_ha_status_changed'
                      | 'postgres_restarted'
                      | 'postgres_unavailable'
                      | 'postgres_upgrade_failed'
                      | 'postgres_upgrade_started'
                      | 'postgres_upgrade_succeeded'
                      | 'postgres_restore_failed'
                      | 'postgres_restore_succeeded'
                      | 'postgres_read_replicas_changed'
                      | 'postgres_pitr_checkpoint_started'
                      | 'postgres_pitr_checkpoint_failed'
                      | 'postgres_pitr_checkpoint_completed'
                      | 'postgres_read_replica_stale'
                      | 'postgres_wal_archive_failed'
                      | 'key_value_available'
                      | 'key_value_config_restart'
                      | 'key_value_unhealthy'
                    )[]
                  | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { webhookId: string } } & {
              json: {
                name?: string | undefined
                url?: string | undefined
                enabled?: boolean | undefined
                eventFilter?:
                  | (
                      | 'artifact_fetch_failed'
                      | 'artifact_source_changed'
                      | 'autoscaling_config_changed'
                      | 'autoscaling_ended'
                      | 'autoscaling_started'
                      | 'branch_deleted'
                      | 'build_ended'
                      | 'build_started'
                      | 'commit_ignored'
                      | 'cron_job_run_ended'
                      | 'cron_job_run_started'
                      | 'deploy_ended'
                      | 'deploy_started'
                      | 'disk_created'
                      | 'disk_updated'
                      | 'disk_deleted'
                      | 'disk_snapshot_restored'
                      | 'image_pull_failed'
                      | 'instance_count_changed'
                      | 'job_run_ended'
                      | 'maintenance_mode_enabled'
                      | 'maintenance_mode_uri_updated'
                      | 'maintenance_ended'
                      | 'maintenance_started'
                      | 'pipeline_minutes_exhausted'
                      | 'plan_changed'
                      | 'pre_deploy_ended'
                      | 'pre_deploy_started'
                      | 'server_available'
                      | 'server_failed'
                      | 'server_hardware_failure'
                      | 'server_restarted'
                      | 'service_resumed'
                      | 'service_suspended'
                      | 'zero_downtime_redeploy_ended'
                      | 'zero_downtime_redeploy_started'
                      | 'edge_cache_enabled'
                      | 'edge_cache_disabled'
                      | 'edge_cache_purged'
                      | 'auto_deploy_disabled'
                      | 'auto_deploy_enabled'
                      | 'postgres_available'
                      | 'postgres_backup_completed'
                      | 'postgres_backup_failed'
                      | 'postgres_backup_started'
                      | 'postgres_cluster_leader_changed'
                      | 'postgres_connection_pool_changed'
                      | 'postgres_connection_pool_enabled_changed'
                      | 'postgres_created'
                      | 'postgres_disk_size_changed'
                      | 'postgres_disk_autoscaling_enabled_changed'
                      | 'postgres_ha_status_changed'
                      | 'postgres_restarted'
                      | 'postgres_unavailable'
                      | 'postgres_upgrade_failed'
                      | 'postgres_upgrade_started'
                      | 'postgres_upgrade_succeeded'
                      | 'postgres_restore_failed'
                      | 'postgres_restore_succeeded'
                      | 'postgres_read_replicas_changed'
                      | 'postgres_pitr_checkpoint_started'
                      | 'postgres_pitr_checkpoint_failed'
                      | 'postgres_pitr_checkpoint_completed'
                      | 'postgres_read_replica_stale'
                      | 'postgres_wal_archive_failed'
                      | 'key_value_available'
                      | 'key_value_config_restart'
                      | 'key_value_unhealthy'
                    )[]
                  | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { webhookId: string } } & {
              json: {
                name?: string | undefined
                url?: string | undefined
                enabled?: boolean | undefined
                eventFilter?:
                  | (
                      | 'artifact_fetch_failed'
                      | 'artifact_source_changed'
                      | 'autoscaling_config_changed'
                      | 'autoscaling_ended'
                      | 'autoscaling_started'
                      | 'branch_deleted'
                      | 'build_ended'
                      | 'build_started'
                      | 'commit_ignored'
                      | 'cron_job_run_ended'
                      | 'cron_job_run_started'
                      | 'deploy_ended'
                      | 'deploy_started'
                      | 'disk_created'
                      | 'disk_updated'
                      | 'disk_deleted'
                      | 'disk_snapshot_restored'
                      | 'image_pull_failed'
                      | 'instance_count_changed'
                      | 'job_run_ended'
                      | 'maintenance_mode_enabled'
                      | 'maintenance_mode_uri_updated'
                      | 'maintenance_ended'
                      | 'maintenance_started'
                      | 'pipeline_minutes_exhausted'
                      | 'plan_changed'
                      | 'pre_deploy_ended'
                      | 'pre_deploy_started'
                      | 'server_available'
                      | 'server_failed'
                      | 'server_hardware_failure'
                      | 'server_restarted'
                      | 'service_resumed'
                      | 'service_suspended'
                      | 'zero_downtime_redeploy_ended'
                      | 'zero_downtime_redeploy_started'
                      | 'edge_cache_enabled'
                      | 'edge_cache_disabled'
                      | 'edge_cache_purged'
                      | 'auto_deploy_disabled'
                      | 'auto_deploy_enabled'
                      | 'postgres_available'
                      | 'postgres_backup_completed'
                      | 'postgres_backup_failed'
                      | 'postgres_backup_started'
                      | 'postgres_cluster_leader_changed'
                      | 'postgres_connection_pool_changed'
                      | 'postgres_connection_pool_enabled_changed'
                      | 'postgres_created'
                      | 'postgres_disk_size_changed'
                      | 'postgres_disk_autoscaling_enabled_changed'
                      | 'postgres_ha_status_changed'
                      | 'postgres_restarted'
                      | 'postgres_unavailable'
                      | 'postgres_upgrade_failed'
                      | 'postgres_upgrade_started'
                      | 'postgres_upgrade_succeeded'
                      | 'postgres_restore_failed'
                      | 'postgres_restore_succeeded'
                      | 'postgres_read_replicas_changed'
                      | 'postgres_pitr_checkpoint_started'
                      | 'postgres_pitr_checkpoint_failed'
                      | 'postgres_pitr_checkpoint_completed'
                      | 'postgres_read_replica_stale'
                      | 'postgres_wal_archive_failed'
                      | 'key_value_available'
                      | 'key_value_config_restart'
                      | 'key_value_unhealthy'
                    )[]
                  | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { param: { webhookId: string } } & {
              json: {
                name?: string | undefined
                url?: string | undefined
                enabled?: boolean | undefined
                eventFilter?:
                  | (
                      | 'artifact_fetch_failed'
                      | 'artifact_source_changed'
                      | 'autoscaling_config_changed'
                      | 'autoscaling_ended'
                      | 'autoscaling_started'
                      | 'branch_deleted'
                      | 'build_ended'
                      | 'build_started'
                      | 'commit_ignored'
                      | 'cron_job_run_ended'
                      | 'cron_job_run_started'
                      | 'deploy_ended'
                      | 'deploy_started'
                      | 'disk_created'
                      | 'disk_updated'
                      | 'disk_deleted'
                      | 'disk_snapshot_restored'
                      | 'image_pull_failed'
                      | 'instance_count_changed'
                      | 'job_run_ended'
                      | 'maintenance_mode_enabled'
                      | 'maintenance_mode_uri_updated'
                      | 'maintenance_ended'
                      | 'maintenance_started'
                      | 'pipeline_minutes_exhausted'
                      | 'plan_changed'
                      | 'pre_deploy_ended'
                      | 'pre_deploy_started'
                      | 'server_available'
                      | 'server_failed'
                      | 'server_hardware_failure'
                      | 'server_restarted'
                      | 'service_resumed'
                      | 'service_suspended'
                      | 'zero_downtime_redeploy_ended'
                      | 'zero_downtime_redeploy_started'
                      | 'edge_cache_enabled'
                      | 'edge_cache_disabled'
                      | 'edge_cache_purged'
                      | 'auto_deploy_disabled'
                      | 'auto_deploy_enabled'
                      | 'postgres_available'
                      | 'postgres_backup_completed'
                      | 'postgres_backup_failed'
                      | 'postgres_backup_started'
                      | 'postgres_cluster_leader_changed'
                      | 'postgres_connection_pool_changed'
                      | 'postgres_connection_pool_enabled_changed'
                      | 'postgres_created'
                      | 'postgres_disk_size_changed'
                      | 'postgres_disk_autoscaling_enabled_changed'
                      | 'postgres_ha_status_changed'
                      | 'postgres_restarted'
                      | 'postgres_unavailable'
                      | 'postgres_upgrade_failed'
                      | 'postgres_upgrade_started'
                      | 'postgres_upgrade_succeeded'
                      | 'postgres_restore_failed'
                      | 'postgres_restore_succeeded'
                      | 'postgres_read_replicas_changed'
                      | 'postgres_pitr_checkpoint_started'
                      | 'postgres_pitr_checkpoint_failed'
                      | 'postgres_pitr_checkpoint_completed'
                      | 'postgres_read_replica_stale'
                      | 'postgres_wal_archive_failed'
                      | 'key_value_available'
                      | 'key_value_config_restart'
                      | 'key_value_unhealthy'
                    )[]
                  | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 503
          }
      $delete:
        | { input: { param: { webhookId: string } }; output: {}; outputFormat: string; status: 204 }
        | {
            input: { param: { webhookId: string } }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { webhookId: string } }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { webhookId: string } }
            output: Error
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { webhookId: string } }
            output: Error
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { param: { webhookId: string } }
            output: Error
            outputFormat: 'json'
            status: 503
          }
    }
  } & {
    '/webhooks/:webhookId/events': {
      $get:
        | {
            input: { param: { webhookId: string } } & {
              query: {
                sentBefore?: string | undefined
                sentAfter?: string | undefined
                limit?: number | undefined
                cursor?: string | undefined
              }
            }
            output: WebhookEventWithCursor[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { webhookId: string } } & {
              query: {
                sentBefore?: string | undefined
                sentAfter?: string | undefined
                limit?: number | undefined
                cursor?: string | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { webhookId: string } } & {
              query: {
                sentBefore?: string | undefined
                sentAfter?: string | undefined
                limit?: number | undefined
                cursor?: string | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { webhookId: string } } & {
              query: {
                sentBefore?: string | undefined
                sentAfter?: string | undefined
                limit?: number | undefined
                cursor?: string | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { webhookId: string } } & {
              query: {
                sentBefore?: string | undefined
                sentAfter?: string | undefined
                limit?: number | undefined
                cursor?: string | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { webhookId: string } } & {
              query: {
                sentBefore?: string | undefined
                sentAfter?: string | undefined
                limit?: number | undefined
                cursor?: string | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { param: { webhookId: string } } & {
              query: {
                sentBefore?: string | undefined
                sentAfter?: string | undefined
                limit?: number | undefined
                cursor?: string | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 503
          }
    }
  } & {
    '/workflows': {
      $get:
        | {
            input: {
              query: {
                name?: string[] | undefined
                ownerId?: string[] | undefined
                workflowID?: string[] | undefined
                environmentId?: string[] | undefined
                cursor?: string | undefined
                limit?: number | undefined
              }
            }
            output: WorkflowWithCursor[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                name?: string[] | undefined
                ownerId?: string[] | undefined
                workflowID?: string[] | undefined
                environmentId?: string[] | undefined
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
                name?: string[] | undefined
                ownerId?: string[] | undefined
                workflowID?: string[] | undefined
                environmentId?: string[] | undefined
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
                name?: string[] | undefined
                ownerId?: string[] | undefined
                workflowID?: string[] | undefined
                environmentId?: string[] | undefined
                cursor?: string | undefined
                limit?: number | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: {
              query: {
                name?: string[] | undefined
                ownerId?: string[] | undefined
                workflowID?: string[] | undefined
                environmentId?: string[] | undefined
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
                name?: string[] | undefined
                ownerId?: string[] | undefined
                workflowID?: string[] | undefined
                environmentId?: string[] | undefined
                cursor?: string | undefined
                limit?: number | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 500
          }
        | {
            input: {
              query: {
                name?: string[] | undefined
                ownerId?: string[] | undefined
                workflowID?: string[] | undefined
                environmentId?: string[] | undefined
                cursor?: string | undefined
                limit?: number | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 503
          }
      $post:
        | {
            input: {
              json: {
                name: string
                ownerId: string
                buildConfig: {
                  branch?: string | undefined
                  buildCommand: string
                  repo: string
                  rootDir?: string | undefined
                  runtime: 'elixir' | 'go' | 'node' | 'python' | 'ruby'
                }
                runCommand: string
                region: 'frankfurt' | 'oregon' | 'ohio' | 'singapore' | 'virginia'
                autoDeployTrigger?: 'commit' | 'off' | 'checksPass' | undefined
                envVars?:
                  | ({ key: string; value: string } | { key: string; generateValue: boolean })[]
                  | undefined
              }
            }
            output: {
              id: string
              name: string
              ownerId: string
              createdAt: string
              updatedAt: string
              buildConfig: {
                branch?: string | undefined
                buildCommand: string
                repo: string
                rootDir?: string | undefined
                runtime: 'elixir' | 'go' | 'node' | 'python' | 'ruby'
              }
              runCommand: string
              region: 'frankfurt' | 'oregon' | 'ohio' | 'singapore' | 'virginia'
              environmentId?: string | undefined
              slug?: string | undefined
              autoDeployTrigger?: 'commit' | 'off' | 'checksPass' | undefined
              defaultVersionId?: string | undefined
            }
            outputFormat: 'json'
            status: 201
          }
        | {
            input: {
              json: {
                name: string
                ownerId: string
                buildConfig: {
                  branch?: string | undefined
                  buildCommand: string
                  repo: string
                  rootDir?: string | undefined
                  runtime: 'elixir' | 'go' | 'node' | 'python' | 'ruby'
                }
                runCommand: string
                region: 'frankfurt' | 'oregon' | 'ohio' | 'singapore' | 'virginia'
                autoDeployTrigger?: 'commit' | 'off' | 'checksPass' | undefined
                envVars?:
                  | ({ key: string; value: string } | { key: string; generateValue: boolean })[]
                  | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              json: {
                name: string
                ownerId: string
                buildConfig: {
                  branch?: string | undefined
                  buildCommand: string
                  repo: string
                  rootDir?: string | undefined
                  runtime: 'elixir' | 'go' | 'node' | 'python' | 'ruby'
                }
                runCommand: string
                region: 'frankfurt' | 'oregon' | 'ohio' | 'singapore' | 'virginia'
                autoDeployTrigger?: 'commit' | 'off' | 'checksPass' | undefined
                envVars?:
                  | ({ key: string; value: string } | { key: string; generateValue: boolean })[]
                  | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: {
              json: {
                name: string
                ownerId: string
                buildConfig: {
                  branch?: string | undefined
                  buildCommand: string
                  repo: string
                  rootDir?: string | undefined
                  runtime: 'elixir' | 'go' | 'node' | 'python' | 'ruby'
                }
                runCommand: string
                region: 'frankfurt' | 'oregon' | 'ohio' | 'singapore' | 'virginia'
                autoDeployTrigger?: 'commit' | 'off' | 'checksPass' | undefined
                envVars?:
                  | ({ key: string; value: string } | { key: string; generateValue: boolean })[]
                  | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: {
              json: {
                name: string
                ownerId: string
                buildConfig: {
                  branch?: string | undefined
                  buildCommand: string
                  repo: string
                  rootDir?: string | undefined
                  runtime: 'elixir' | 'go' | 'node' | 'python' | 'ruby'
                }
                runCommand: string
                region: 'frankfurt' | 'oregon' | 'ohio' | 'singapore' | 'virginia'
                autoDeployTrigger?: 'commit' | 'off' | 'checksPass' | undefined
                envVars?:
                  | ({ key: string; value: string } | { key: string; generateValue: boolean })[]
                  | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 429
          }
        | {
            input: {
              json: {
                name: string
                ownerId: string
                buildConfig: {
                  branch?: string | undefined
                  buildCommand: string
                  repo: string
                  rootDir?: string | undefined
                  runtime: 'elixir' | 'go' | 'node' | 'python' | 'ruby'
                }
                runCommand: string
                region: 'frankfurt' | 'oregon' | 'ohio' | 'singapore' | 'virginia'
                autoDeployTrigger?: 'commit' | 'off' | 'checksPass' | undefined
                envVars?:
                  | ({ key: string; value: string } | { key: string; generateValue: boolean })[]
                  | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 500
          }
        | {
            input: {
              json: {
                name: string
                ownerId: string
                buildConfig: {
                  branch?: string | undefined
                  buildCommand: string
                  repo: string
                  rootDir?: string | undefined
                  runtime: 'elixir' | 'go' | 'node' | 'python' | 'ruby'
                }
                runCommand: string
                region: 'frankfurt' | 'oregon' | 'ohio' | 'singapore' | 'virginia'
                autoDeployTrigger?: 'commit' | 'off' | 'checksPass' | undefined
                envVars?:
                  | ({ key: string; value: string } | { key: string; generateValue: boolean })[]
                  | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 503
          }
    }
  } & {
    '/workflows/:workflowId': {
      $get:
        | {
            input: { param: { workflowId: string } }
            output: {
              id: string
              name: string
              ownerId: string
              createdAt: string
              updatedAt: string
              buildConfig: {
                branch?: string | undefined
                buildCommand: string
                repo: string
                rootDir?: string | undefined
                runtime: 'elixir' | 'go' | 'node' | 'python' | 'ruby'
              }
              runCommand: string
              region: 'frankfurt' | 'oregon' | 'ohio' | 'singapore' | 'virginia'
              environmentId?: string | undefined
              slug?: string | undefined
              autoDeployTrigger?: 'commit' | 'off' | 'checksPass' | undefined
              defaultVersionId?: string | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { workflowId: string } }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { workflowId: string } }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { workflowId: string } }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { workflowId: string } }
            output: Error
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { workflowId: string } }
            output: Error
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { param: { workflowId: string } }
            output: Error
            outputFormat: 'json'
            status: 503
          }
      $patch:
        | {
            input: { param: { workflowId: string } } & {
              json: {
                name?: string | undefined
                buildConfig?:
                  | {
                      branch?: string | undefined
                      buildCommand?: string | undefined
                      repo?: string | undefined
                      rootDir?: string | undefined
                      runtime?: 'elixir' | 'go' | 'node' | 'python' | 'ruby' | undefined
                    }
                  | undefined
                runCommand?: string | undefined
                autoDeployTrigger?: 'commit' | 'off' | 'checksPass' | undefined
              }
            }
            output: {
              id: string
              name: string
              ownerId: string
              createdAt: string
              updatedAt: string
              buildConfig: {
                branch?: string | undefined
                buildCommand: string
                repo: string
                rootDir?: string | undefined
                runtime: 'elixir' | 'go' | 'node' | 'python' | 'ruby'
              }
              runCommand: string
              region: 'frankfurt' | 'oregon' | 'ohio' | 'singapore' | 'virginia'
              environmentId?: string | undefined
              slug?: string | undefined
              autoDeployTrigger?: 'commit' | 'off' | 'checksPass' | undefined
              defaultVersionId?: string | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { workflowId: string } } & {
              json: {
                name?: string | undefined
                buildConfig?:
                  | {
                      branch?: string | undefined
                      buildCommand?: string | undefined
                      repo?: string | undefined
                      rootDir?: string | undefined
                      runtime?: 'elixir' | 'go' | 'node' | 'python' | 'ruby' | undefined
                    }
                  | undefined
                runCommand?: string | undefined
                autoDeployTrigger?: 'commit' | 'off' | 'checksPass' | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { workflowId: string } } & {
              json: {
                name?: string | undefined
                buildConfig?:
                  | {
                      branch?: string | undefined
                      buildCommand?: string | undefined
                      repo?: string | undefined
                      rootDir?: string | undefined
                      runtime?: 'elixir' | 'go' | 'node' | 'python' | 'ruby' | undefined
                    }
                  | undefined
                runCommand?: string | undefined
                autoDeployTrigger?: 'commit' | 'off' | 'checksPass' | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { workflowId: string } } & {
              json: {
                name?: string | undefined
                buildConfig?:
                  | {
                      branch?: string | undefined
                      buildCommand?: string | undefined
                      repo?: string | undefined
                      rootDir?: string | undefined
                      runtime?: 'elixir' | 'go' | 'node' | 'python' | 'ruby' | undefined
                    }
                  | undefined
                runCommand?: string | undefined
                autoDeployTrigger?: 'commit' | 'off' | 'checksPass' | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { workflowId: string } } & {
              json: {
                name?: string | undefined
                buildConfig?:
                  | {
                      branch?: string | undefined
                      buildCommand?: string | undefined
                      repo?: string | undefined
                      rootDir?: string | undefined
                      runtime?: 'elixir' | 'go' | 'node' | 'python' | 'ruby' | undefined
                    }
                  | undefined
                runCommand?: string | undefined
                autoDeployTrigger?: 'commit' | 'off' | 'checksPass' | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { workflowId: string } } & {
              json: {
                name?: string | undefined
                buildConfig?:
                  | {
                      branch?: string | undefined
                      buildCommand?: string | undefined
                      repo?: string | undefined
                      rootDir?: string | undefined
                      runtime?: 'elixir' | 'go' | 'node' | 'python' | 'ruby' | undefined
                    }
                  | undefined
                runCommand?: string | undefined
                autoDeployTrigger?: 'commit' | 'off' | 'checksPass' | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { param: { workflowId: string } } & {
              json: {
                name?: string | undefined
                buildConfig?:
                  | {
                      branch?: string | undefined
                      buildCommand?: string | undefined
                      repo?: string | undefined
                      rootDir?: string | undefined
                      runtime?: 'elixir' | 'go' | 'node' | 'python' | 'ruby' | undefined
                    }
                  | undefined
                runCommand?: string | undefined
                autoDeployTrigger?: 'commit' | 'off' | 'checksPass' | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 503
          }
      $delete:
        | {
            input: { param: { workflowId: string } }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { workflowId: string } }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { workflowId: string } }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { workflowId: string } }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { workflowId: string } }
            output: Error
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { workflowId: string } }
            output: Error
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { param: { workflowId: string } }
            output: Error
            outputFormat: 'json'
            status: 503
          }
    }
  } & {
    '/workflowversions': {
      $get:
        | {
            input: {
              query: {
                ownerId?: string[] | undefined
                workflowID?: string[] | undefined
                workflowVersionId?: string[] | undefined
                cursor?: string | undefined
                limit?: number | undefined
              }
            }
            output: WorkflowVersionWithCursor[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                ownerId?: string[] | undefined
                workflowID?: string[] | undefined
                workflowVersionId?: string[] | undefined
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
                ownerId?: string[] | undefined
                workflowID?: string[] | undefined
                workflowVersionId?: string[] | undefined
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
                ownerId?: string[] | undefined
                workflowID?: string[] | undefined
                workflowVersionId?: string[] | undefined
                cursor?: string | undefined
                limit?: number | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: {
              query: {
                ownerId?: string[] | undefined
                workflowID?: string[] | undefined
                workflowVersionId?: string[] | undefined
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
                ownerId?: string[] | undefined
                workflowID?: string[] | undefined
                workflowVersionId?: string[] | undefined
                cursor?: string | undefined
                limit?: number | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 500
          }
        | {
            input: {
              query: {
                ownerId?: string[] | undefined
                workflowID?: string[] | undefined
                workflowVersionId?: string[] | undefined
                cursor?: string | undefined
                limit?: number | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 503
          }
      $post:
        | {
            input: { json: { workflowId: string; commit?: string | undefined } }
            output: {}
            outputFormat: string
            status: 202
          }
        | {
            input: { json: { workflowId: string; commit?: string | undefined } }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { json: { workflowId: string; commit?: string | undefined } }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { json: { workflowId: string; commit?: string | undefined } }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { json: { workflowId: string; commit?: string | undefined } }
            output: Error
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { json: { workflowId: string; commit?: string | undefined } }
            output: Error
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { json: { workflowId: string; commit?: string | undefined } }
            output: Error
            outputFormat: 'json'
            status: 503
          }
    }
  } & {
    '/workflowversions/:workflowVersionId': {
      $get:
        | {
            input: { param: { workflowVersionId: string } }
            output: {
              id: string
              workflowId: string
              name: string
              createdAt: string
              status:
                | 'created'
                | 'building'
                | 'registering'
                | 'build_failed'
                | 'registration_failed'
                | 'ready'
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { workflowVersionId: string } }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { workflowVersionId: string } }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { workflowVersionId: string } }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { workflowVersionId: string } }
            output: Error
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { workflowVersionId: string } }
            output: Error
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { param: { workflowVersionId: string } }
            output: Error
            outputFormat: 'json'
            status: 503
          }
    }
  } & {
    '/tasks': {
      $get:
        | {
            input: {
              query: {
                cursor?: string | undefined
                limit?: number | undefined
                ownerId?: string[] | undefined
                taskSlug?: string[] | undefined
                workflowVersionId?: string[] | undefined
                workflowId?: string[] | undefined
              }
            }
            output: TaskWithCursor[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                cursor?: string | undefined
                limit?: number | undefined
                ownerId?: string[] | undefined
                taskSlug?: string[] | undefined
                workflowVersionId?: string[] | undefined
                workflowId?: string[] | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              query: {
                cursor?: string | undefined
                limit?: number | undefined
                ownerId?: string[] | undefined
                taskSlug?: string[] | undefined
                workflowVersionId?: string[] | undefined
                workflowId?: string[] | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: {
              query: {
                cursor?: string | undefined
                limit?: number | undefined
                ownerId?: string[] | undefined
                taskSlug?: string[] | undefined
                workflowVersionId?: string[] | undefined
                workflowId?: string[] | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: {
              query: {
                cursor?: string | undefined
                limit?: number | undefined
                ownerId?: string[] | undefined
                taskSlug?: string[] | undefined
                workflowVersionId?: string[] | undefined
                workflowId?: string[] | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 429
          }
        | {
            input: {
              query: {
                cursor?: string | undefined
                limit?: number | undefined
                ownerId?: string[] | undefined
                taskSlug?: string[] | undefined
                workflowVersionId?: string[] | undefined
                workflowId?: string[] | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 500
          }
        | {
            input: {
              query: {
                cursor?: string | undefined
                limit?: number | undefined
                ownerId?: string[] | undefined
                taskSlug?: string[] | undefined
                workflowVersionId?: string[] | undefined
                workflowId?: string[] | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 503
          }
    }
  } & {
    '/tasks/:taskId': {
      $get:
        | {
            input: { param: { taskId: string } }
            output: {
              id: string
              name: string
              createdAt: string
              workflowId?: string | undefined
              workflowVersionId?: string | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | { input: { param: { taskId: string } }; output: Error; outputFormat: 'json'; status: 401 }
        | { input: { param: { taskId: string } }; output: Error; outputFormat: 'json'; status: 403 }
        | { input: { param: { taskId: string } }; output: Error; outputFormat: 'json'; status: 404 }
        | { input: { param: { taskId: string } }; output: Error; outputFormat: 'json'; status: 429 }
        | { input: { param: { taskId: string } }; output: Error; outputFormat: 'json'; status: 500 }
        | { input: { param: { taskId: string } }; output: Error; outputFormat: 'json'; status: 503 }
    }
  } & {
    '/task-runs': {
      $get:
        | {
            input: {
              query: {
                cursor?: string | undefined
                limit?: number | undefined
                taskSlug?: string[] | undefined
                rootTaskRunId?: string[] | undefined
                ownerId?: string[] | undefined
                workflowVersionId?: string[] | undefined
                workflowId?: string[] | undefined
              }
            }
            output: TaskRunWithCursor[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                cursor?: string | undefined
                limit?: number | undefined
                taskSlug?: string[] | undefined
                rootTaskRunId?: string[] | undefined
                ownerId?: string[] | undefined
                workflowVersionId?: string[] | undefined
                workflowId?: string[] | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                cursor?: string | undefined
                limit?: number | undefined
                taskSlug?: string[] | undefined
                rootTaskRunId?: string[] | undefined
                ownerId?: string[] | undefined
                workflowVersionId?: string[] | undefined
                workflowId?: string[] | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              query: {
                cursor?: string | undefined
                limit?: number | undefined
                taskSlug?: string[] | undefined
                rootTaskRunId?: string[] | undefined
                ownerId?: string[] | undefined
                workflowVersionId?: string[] | undefined
                workflowId?: string[] | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: {
              query: {
                cursor?: string | undefined
                limit?: number | undefined
                taskSlug?: string[] | undefined
                rootTaskRunId?: string[] | undefined
                ownerId?: string[] | undefined
                workflowVersionId?: string[] | undefined
                workflowId?: string[] | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: {
              query: {
                cursor?: string | undefined
                limit?: number | undefined
                taskSlug?: string[] | undefined
                rootTaskRunId?: string[] | undefined
                ownerId?: string[] | undefined
                workflowVersionId?: string[] | undefined
                workflowId?: string[] | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 429
          }
        | {
            input: {
              query: {
                cursor?: string | undefined
                limit?: number | undefined
                taskSlug?: string[] | undefined
                rootTaskRunId?: string[] | undefined
                ownerId?: string[] | undefined
                workflowVersionId?: string[] | undefined
                workflowId?: string[] | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 500
          }
        | {
            input: {
              query: {
                cursor?: string | undefined
                limit?: number | undefined
                taskSlug?: string[] | undefined
                rootTaskRunId?: string[] | undefined
                ownerId?: string[] | undefined
                workflowVersionId?: string[] | undefined
                workflowId?: string[] | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 503
          }
      $post:
        | {
            input: {
              json: {
                task: string
                input: { [x: string]: unknown }[] | { [x: string]: { [x: string]: unknown } }
                idempotencyKey?: string | undefined
              }
            }
            output: {
              id: string
              taskId: string
              status:
                | 'pending'
                | 'running'
                | 'completed'
                | 'succeeded'
                | 'failed'
                | 'canceled'
                | 'paused'
                | 'suspended'
                | 'sleeping'
              startedAt?: string | undefined
              completedAt?: string | undefined
              parentTaskRunId: string
              parentTaskAttempt?: number | undefined
              rootTaskRunId: string
              retries: number
              attempts: {
                taskRunId?: string | undefined
                attempt: number
                status:
                  | 'pending'
                  | 'running'
                  | 'completed'
                  | 'succeeded'
                  | 'failed'
                  | 'canceled'
                  | 'paused'
                  | 'suspended'
                  | 'sleeping'
                enqueuedAt?: string | undefined
                startedAt: string
                completedAt?: string | undefined
              }[]
            }
            outputFormat: 'json'
            status: 202
          }
        | {
            input: {
              json: {
                task: string
                input: { [x: string]: unknown }[] | { [x: string]: { [x: string]: unknown } }
                idempotencyKey?: string | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              json: {
                task: string
                input: { [x: string]: unknown }[] | { [x: string]: { [x: string]: unknown } }
                idempotencyKey?: string | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              json: {
                task: string
                input: { [x: string]: unknown }[] | { [x: string]: { [x: string]: unknown } }
                idempotencyKey?: string | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: {
              json: {
                task: string
                input: { [x: string]: unknown }[] | { [x: string]: { [x: string]: unknown } }
                idempotencyKey?: string | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: {
              json: {
                task: string
                input: { [x: string]: unknown }[] | { [x: string]: { [x: string]: unknown } }
                idempotencyKey?: string | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 429
          }
        | {
            input: {
              json: {
                task: string
                input: { [x: string]: unknown }[] | { [x: string]: { [x: string]: unknown } }
                idempotencyKey?: string | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 500
          }
        | {
            input: {
              json: {
                task: string
                input: { [x: string]: unknown }[] | { [x: string]: { [x: string]: unknown } }
                idempotencyKey?: string | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 503
          }
    }
  } & {
    '/task-runs/events': {
      $get:
        | {
            input: { query: { taskRunIds: string[] } } & {
              header: { Accept?: 'text/event-stream' | undefined }
            }
            output: string
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { query: { taskRunIds: string[] } } & {
              header: { Accept?: 'text/event-stream' | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { query: { taskRunIds: string[] } } & {
              header: { Accept?: 'text/event-stream' | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { query: { taskRunIds: string[] } } & {
              header: { Accept?: 'text/event-stream' | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { query: { taskRunIds: string[] } } & {
              header: { Accept?: 'text/event-stream' | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { query: { taskRunIds: string[] } } & {
              header: { Accept?: 'text/event-stream' | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { query: { taskRunIds: string[] } } & {
              header: { Accept?: 'text/event-stream' | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { query: { taskRunIds: string[] } } & {
              header: { Accept?: 'text/event-stream' | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 503
          }
    }
  } & {
    '/task-runs/:taskRunId': {
      $get:
        | {
            input: { param: { taskRunId: string } }
            output: {
              id: string
              taskId: string
              status:
                | 'pending'
                | 'running'
                | 'completed'
                | 'succeeded'
                | 'failed'
                | 'canceled'
                | 'paused'
                | 'suspended'
                | 'sleeping'
              results: { [x: string]: unknown }[]
              error?: string | undefined
              startedAt?: string | undefined
              completedAt?: string | undefined
              input: { [x: string]: unknown }[] | { [x: string]: { [x: string]: unknown } }
              parentTaskRunId: string
              parentTaskAttempt?: number | undefined
              rootTaskRunId: string
              retries: number
              attempts: {
                taskRunId?: string | undefined
                attempt: number
                status:
                  | 'pending'
                  | 'running'
                  | 'completed'
                  | 'succeeded'
                  | 'failed'
                  | 'canceled'
                  | 'paused'
                  | 'suspended'
                  | 'sleeping'
                enqueuedAt?: string | undefined
                startedAt: string
                completedAt?: string | undefined
                error?: string | undefined
                results?: { [x: string]: unknown }[] | undefined
              }[]
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { taskRunId: string } }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { taskRunId: string } }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { taskRunId: string } }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { taskRunId: string } }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { taskRunId: string } }
            output: Error
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { taskRunId: string } }
            output: Error
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { param: { taskRunId: string } }
            output: Error
            outputFormat: 'json'
            status: 503
          }
      $delete:
        | { input: { param: { taskRunId: string } }; output: {}; outputFormat: string; status: 204 }
        | {
            input: { param: { taskRunId: string } }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { taskRunId: string } }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { taskRunId: string } }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { taskRunId: string } }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { taskRunId: string } }
            output: Error
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { taskRunId: string } }
            output: Error
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { param: { taskRunId: string } }
            output: Error
            outputFormat: 'json'
            status: 503
          }
    }
  } & {
    '/flows': {
      $get:
        | {
            input: {
              query: {
                cursor?: string | undefined
                limit?: number | undefined
                ownerId?: string[] | undefined
                flowSlug?: string[] | undefined
                workflowVersionId?: string[] | undefined
                workflowId?: string[] | undefined
              }
            }
            output: FlowWithCursor[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                cursor?: string | undefined
                limit?: number | undefined
                ownerId?: string[] | undefined
                flowSlug?: string[] | undefined
                workflowVersionId?: string[] | undefined
                workflowId?: string[] | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                cursor?: string | undefined
                limit?: number | undefined
                ownerId?: string[] | undefined
                flowSlug?: string[] | undefined
                workflowVersionId?: string[] | undefined
                workflowId?: string[] | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              query: {
                cursor?: string | undefined
                limit?: number | undefined
                ownerId?: string[] | undefined
                flowSlug?: string[] | undefined
                workflowVersionId?: string[] | undefined
                workflowId?: string[] | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: {
              query: {
                cursor?: string | undefined
                limit?: number | undefined
                ownerId?: string[] | undefined
                flowSlug?: string[] | undefined
                workflowVersionId?: string[] | undefined
                workflowId?: string[] | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: {
              query: {
                cursor?: string | undefined
                limit?: number | undefined
                ownerId?: string[] | undefined
                flowSlug?: string[] | undefined
                workflowVersionId?: string[] | undefined
                workflowId?: string[] | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 429
          }
        | {
            input: {
              query: {
                cursor?: string | undefined
                limit?: number | undefined
                ownerId?: string[] | undefined
                flowSlug?: string[] | undefined
                workflowVersionId?: string[] | undefined
                workflowId?: string[] | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 500
          }
        | {
            input: {
              query: {
                cursor?: string | undefined
                limit?: number | undefined
                ownerId?: string[] | undefined
                flowSlug?: string[] | undefined
                workflowVersionId?: string[] | undefined
                workflowId?: string[] | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 503
          }
    }
  } & {
    '/flows/:flowId': {
      $get:
        | {
            input: { param: { flowId: string } }
            output: {
              id: string
              name: string
              createdAt: string
              workflowId?: string | undefined
              workflowVersionId?: string | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | { input: { param: { flowId: string } }; output: Error; outputFormat: 'json'; status: 401 }
        | { input: { param: { flowId: string } }; output: Error; outputFormat: 'json'; status: 403 }
        | { input: { param: { flowId: string } }; output: Error; outputFormat: 'json'; status: 404 }
        | { input: { param: { flowId: string } }; output: Error; outputFormat: 'json'; status: 429 }
        | { input: { param: { flowId: string } }; output: Error; outputFormat: 'json'; status: 500 }
        | { input: { param: { flowId: string } }; output: Error; outputFormat: 'json'; status: 503 }
    }
  } & {
    '/flow-runs': {
      $get:
        | {
            input: {
              query: {
                cursor?: string | undefined
                limit?: number | undefined
                flowSlug?: string[] | undefined
                flowId?: string[] | undefined
                status?:
                  | (
                      | 'pending'
                      | 'running'
                      | 'succeeded'
                      | 'failed'
                      | 'canceled'
                      | 'paused'
                      | 'suspended'
                      | 'sleeping'
                    )[]
                  | undefined
                ownerId?: string[] | undefined
                workflowVersionId?: string[] | undefined
                workflowId?: string[] | undefined
              }
            }
            output: FlowRunWithCursor[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                cursor?: string | undefined
                limit?: number | undefined
                flowSlug?: string[] | undefined
                flowId?: string[] | undefined
                status?:
                  | (
                      | 'pending'
                      | 'running'
                      | 'succeeded'
                      | 'failed'
                      | 'canceled'
                      | 'paused'
                      | 'suspended'
                      | 'sleeping'
                    )[]
                  | undefined
                ownerId?: string[] | undefined
                workflowVersionId?: string[] | undefined
                workflowId?: string[] | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                cursor?: string | undefined
                limit?: number | undefined
                flowSlug?: string[] | undefined
                flowId?: string[] | undefined
                status?:
                  | (
                      | 'pending'
                      | 'running'
                      | 'succeeded'
                      | 'failed'
                      | 'canceled'
                      | 'paused'
                      | 'suspended'
                      | 'sleeping'
                    )[]
                  | undefined
                ownerId?: string[] | undefined
                workflowVersionId?: string[] | undefined
                workflowId?: string[] | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              query: {
                cursor?: string | undefined
                limit?: number | undefined
                flowSlug?: string[] | undefined
                flowId?: string[] | undefined
                status?:
                  | (
                      | 'pending'
                      | 'running'
                      | 'succeeded'
                      | 'failed'
                      | 'canceled'
                      | 'paused'
                      | 'suspended'
                      | 'sleeping'
                    )[]
                  | undefined
                ownerId?: string[] | undefined
                workflowVersionId?: string[] | undefined
                workflowId?: string[] | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: {
              query: {
                cursor?: string | undefined
                limit?: number | undefined
                flowSlug?: string[] | undefined
                flowId?: string[] | undefined
                status?:
                  | (
                      | 'pending'
                      | 'running'
                      | 'succeeded'
                      | 'failed'
                      | 'canceled'
                      | 'paused'
                      | 'suspended'
                      | 'sleeping'
                    )[]
                  | undefined
                ownerId?: string[] | undefined
                workflowVersionId?: string[] | undefined
                workflowId?: string[] | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: {
              query: {
                cursor?: string | undefined
                limit?: number | undefined
                flowSlug?: string[] | undefined
                flowId?: string[] | undefined
                status?:
                  | (
                      | 'pending'
                      | 'running'
                      | 'succeeded'
                      | 'failed'
                      | 'canceled'
                      | 'paused'
                      | 'suspended'
                      | 'sleeping'
                    )[]
                  | undefined
                ownerId?: string[] | undefined
                workflowVersionId?: string[] | undefined
                workflowId?: string[] | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 429
          }
        | {
            input: {
              query: {
                cursor?: string | undefined
                limit?: number | undefined
                flowSlug?: string[] | undefined
                flowId?: string[] | undefined
                status?:
                  | (
                      | 'pending'
                      | 'running'
                      | 'succeeded'
                      | 'failed'
                      | 'canceled'
                      | 'paused'
                      | 'suspended'
                      | 'sleeping'
                    )[]
                  | undefined
                ownerId?: string[] | undefined
                workflowVersionId?: string[] | undefined
                workflowId?: string[] | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 500
          }
        | {
            input: {
              query: {
                cursor?: string | undefined
                limit?: number | undefined
                flowSlug?: string[] | undefined
                flowId?: string[] | undefined
                status?:
                  | (
                      | 'pending'
                      | 'running'
                      | 'succeeded'
                      | 'failed'
                      | 'canceled'
                      | 'paused'
                      | 'suspended'
                      | 'sleeping'
                    )[]
                  | undefined
                ownerId?: string[] | undefined
                workflowVersionId?: string[] | undefined
                workflowId?: string[] | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 503
          }
      $post:
        | {
            input: {
              json: {
                flow: string
                input: { [x: string]: unknown }[] | { [x: string]: { [x: string]: unknown } }
                idempotencyKey?: string | undefined
              }
            }
            output: {
              id: string
              flowId: string
              status:
                | 'pending'
                | 'running'
                | 'succeeded'
                | 'failed'
                | 'canceled'
                | 'paused'
                | 'suspended'
                | 'sleeping'
              startedAt?: string | undefined
              completedAt?: string | undefined
            }
            outputFormat: 'json'
            status: 202
          }
        | {
            input: {
              json: {
                flow: string
                input: { [x: string]: unknown }[] | { [x: string]: { [x: string]: unknown } }
                idempotencyKey?: string | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              json: {
                flow: string
                input: { [x: string]: unknown }[] | { [x: string]: { [x: string]: unknown } }
                idempotencyKey?: string | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              json: {
                flow: string
                input: { [x: string]: unknown }[] | { [x: string]: { [x: string]: unknown } }
                idempotencyKey?: string | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: {
              json: {
                flow: string
                input: { [x: string]: unknown }[] | { [x: string]: { [x: string]: unknown } }
                idempotencyKey?: string | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: {
              json: {
                flow: string
                input: { [x: string]: unknown }[] | { [x: string]: { [x: string]: unknown } }
                idempotencyKey?: string | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 429
          }
        | {
            input: {
              json: {
                flow: string
                input: { [x: string]: unknown }[] | { [x: string]: { [x: string]: unknown } }
                idempotencyKey?: string | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 500
          }
        | {
            input: {
              json: {
                flow: string
                input: { [x: string]: unknown }[] | { [x: string]: { [x: string]: unknown } }
                idempotencyKey?: string | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 503
          }
    }
  } & {
    '/flow-runs/:flowRunId': {
      $get:
        | {
            input: { param: { flowRunId: string } }
            output: {
              id: string
              flowId: string
              status:
                | 'pending'
                | 'running'
                | 'succeeded'
                | 'failed'
                | 'canceled'
                | 'paused'
                | 'suspended'
                | 'sleeping'
              startedAt?: string | undefined
              completedAt?: string | undefined
              input: { [x: string]: unknown }[] | { [x: string]: { [x: string]: unknown } }
              results: { [x: string]: unknown }[]
              error?: string | undefined
              errorDetails?:
                | {
                    code:
                      | 'flow_determinism_error'
                      | 'flow_step_limit_exceeded'
                      | 'flow_payload_too_large'
                      | 'flow_history_too_large'
                    message: string
                    seq?: number | undefined
                    subKey?: string | undefined
                    flowAttempt?: number | undefined
                    kind?: 'input_hash' | 'type' | 'unknown_type' | undefined
                    expected?: string | undefined
                    actual?: string | undefined
                    limit?: bigint | undefined
                    value?: bigint | undefined
                  }
                | undefined
              attempts: {
                attempt: number
                status:
                  | 'pending'
                  | 'running'
                  | 'succeeded'
                  | 'failed'
                  | 'canceled'
                  | 'paused'
                  | 'suspended'
                  | 'sleeping'
                startedAt?: string | undefined
                completedAt?: string | undefined
                error?: string | undefined
              }[]
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { flowRunId: string } }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { flowRunId: string } }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { flowRunId: string } }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { flowRunId: string } }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { flowRunId: string } }
            output: Error
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { flowRunId: string } }
            output: Error
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { param: { flowRunId: string } }
            output: Error
            outputFormat: 'json'
            status: 503
          }
      $delete:
        | { input: { param: { flowRunId: string } }; output: {}; outputFormat: string; status: 204 }
        | {
            input: { param: { flowRunId: string } }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { flowRunId: string } }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { flowRunId: string } }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { flowRunId: string } }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { flowRunId: string } }
            output: Error
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { flowRunId: string } }
            output: Error
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { param: { flowRunId: string } }
            output: Error
            outputFormat: 'json'
            status: 503
          }
    }
  } & {
    '/flow-runs/:flowRunId/steps': {
      $get:
        | {
            input: { param: { flowRunId: string } } & {
              query: { cursor?: string | undefined; limit?: number | undefined }
            }
            output: {
              steps: {
                seq: number
                stepKey: string
                name?: string | undefined
                type: 'inline' | 'detached' | 'sleep'
                status: 'running' | 'succeeded' | 'failed'
                startedAt: string
                completedAt?: string | undefined
                wakeAt?: string | undefined
                childTaskRunId?: string | undefined
              }[]
              cursor?: string | undefined
              hasMore: boolean
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { flowRunId: string } } & {
              query: { cursor?: string | undefined; limit?: number | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { flowRunId: string } } & {
              query: { cursor?: string | undefined; limit?: number | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { flowRunId: string } } & {
              query: { cursor?: string | undefined; limit?: number | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { flowRunId: string } } & {
              query: { cursor?: string | undefined; limit?: number | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { flowRunId: string } } & {
              query: { cursor?: string | undefined; limit?: number | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { flowRunId: string } } & {
              query: { cursor?: string | undefined; limit?: number | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { param: { flowRunId: string } } & {
              query: { cursor?: string | undefined; limit?: number | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 503
          }
    }
  } & {
    '/flow-runs/:flowRunId/steps/:stepSeq': {
      $get:
        | {
            input: { param: { flowRunId: string; stepSeq: number } } & {
              query: { stepKey?: string | undefined; includeAttempts?: boolean | undefined }
            }
            output: {
              failedAttempts?:
                | {
                    attempt: bigint
                    flowAttempt: bigint
                    startedAt: string
                    completedAt: string
                    retryAt?: string | undefined
                  }[]
                | undefined
              seq: number
              stepKey: string
              name?: string | undefined
              type: 'inline' | 'detached' | 'sleep'
              status: 'running' | 'succeeded' | 'failed'
              startedAt: string
              completedAt?: string | undefined
              wakeAt?: string | undefined
              childTaskRunId?: string | undefined
              input?: { [x: string]: unknown } | undefined
              result?: ({ [x: string]: unknown } | null) | undefined
              error?: string | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { flowRunId: string; stepSeq: number } } & {
              query: { stepKey?: string | undefined; includeAttempts?: boolean | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { flowRunId: string; stepSeq: number } } & {
              query: { stepKey?: string | undefined; includeAttempts?: boolean | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { flowRunId: string; stepSeq: number } } & {
              query: { stepKey?: string | undefined; includeAttempts?: boolean | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { flowRunId: string; stepSeq: number } } & {
              query: { stepKey?: string | undefined; includeAttempts?: boolean | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { flowRunId: string; stepSeq: number } } & {
              query: { stepKey?: string | undefined; includeAttempts?: boolean | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { flowRunId: string; stepSeq: number } } & {
              query: { stepKey?: string | undefined; includeAttempts?: boolean | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { param: { flowRunId: string; stepSeq: number } } & {
              query: { stepKey?: string | undefined; includeAttempts?: boolean | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 503
          }
    }
  } & {
    '/flow-runs/:flowRunId/steps/:stepSeq/attempts/:attempt': {
      $get:
        | {
            input: { param: { flowRunId: string; stepSeq: number; attempt: bigint } } & {
              query: { stepKey?: string | undefined }
            }
            output: {
              attempt: bigint
              flowAttempt: bigint
              startedAt: string
              completedAt: string
              retryAt?: string | undefined
              error: string
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { flowRunId: string; stepSeq: number; attempt: bigint } } & {
              query: { stepKey?: string | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { flowRunId: string; stepSeq: number; attempt: bigint } } & {
              query: { stepKey?: string | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { flowRunId: string; stepSeq: number; attempt: bigint } } & {
              query: { stepKey?: string | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { flowRunId: string; stepSeq: number; attempt: bigint } } & {
              query: { stepKey?: string | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { flowRunId: string; stepSeq: number; attempt: bigint } } & {
              query: { stepKey?: string | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { flowRunId: string; stepSeq: number; attempt: bigint } } & {
              query: { stepKey?: string | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { param: { flowRunId: string; stepSeq: number; attempt: bigint } } & {
              query: { stepKey?: string | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 503
          }
    }
  } & {
    '/sandboxes': {
      $post:
        | {
            input: {
              json: {
                ownerId: string
                sandboxGroupId?: {} | undefined
                name?: string | undefined
                networkPolicy?:
                  | {
                      type?: {} | undefined
                      default?: {} | undefined
                      rules?: { domain: string; protocol?: 'https' | undefined }[] | undefined
                    }
                  | undefined
                plan?:
                  | 'starter'
                  | 'standard'
                  | 'pro'
                  | '1c-2g'
                  | '2c-4g'
                  | '4c-8g'
                  | '8c-16g'
                  | string
                  | undefined
                timeoutSeconds?: number | undefined
                idleTimeoutSeconds?: number | undefined
                env?: { [x: string]: string } | undefined
                snapshotId?: {} | undefined
                snapshotName?: {} | undefined
                buildId?: {} | undefined
                buildName?: string | undefined
              }
            }
            output: {
              id: string
              name?: (string | null) | undefined
              sandboxGroupId?: {} | undefined
              status:
                | 'creating'
                | 'running'
                | 'suspending'
                | 'suspended'
                | 'resuming'
                | 'errored'
                | 'terminated'
              plan: 'starter' | 'standard' | 'pro' | '1c-2g' | '2c-4g' | '4c-8g' | '8c-16g' | string
              networkPolicy: {
                type: {}
                default?: {} | undefined
                rules?: { domain: string; protocol?: 'https' | undefined }[] | undefined
              }
              region: string
              timeoutSeconds: number
              idleTimeoutSeconds: number
              createdAt: string
              terminatedAt?: (string | null) | undefined
            }
            outputFormat: 'json'
            status: 201
          }
        | {
            input: {
              json: {
                ownerId: string
                sandboxGroupId?: {} | undefined
                name?: string | undefined
                networkPolicy?:
                  | {
                      type?: {} | undefined
                      default?: {} | undefined
                      rules?: { domain: string; protocol?: 'https' | undefined }[] | undefined
                    }
                  | undefined
                plan?:
                  | 'starter'
                  | 'standard'
                  | 'pro'
                  | '1c-2g'
                  | '2c-4g'
                  | '4c-8g'
                  | '8c-16g'
                  | string
                  | undefined
                timeoutSeconds?: number | undefined
                idleTimeoutSeconds?: number | undefined
                env?: { [x: string]: string } | undefined
                snapshotId?: {} | undefined
                snapshotName?: {} | undefined
                buildId?: {} | undefined
                buildName?: string | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              json: {
                ownerId: string
                sandboxGroupId?: {} | undefined
                name?: string | undefined
                networkPolicy?:
                  | {
                      type?: {} | undefined
                      default?: {} | undefined
                      rules?: { domain: string; protocol?: 'https' | undefined }[] | undefined
                    }
                  | undefined
                plan?:
                  | 'starter'
                  | 'standard'
                  | 'pro'
                  | '1c-2g'
                  | '2c-4g'
                  | '4c-8g'
                  | '8c-16g'
                  | string
                  | undefined
                timeoutSeconds?: number | undefined
                idleTimeoutSeconds?: number | undefined
                env?: { [x: string]: string } | undefined
                snapshotId?: {} | undefined
                snapshotName?: {} | undefined
                buildId?: {} | undefined
                buildName?: string | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              json: {
                ownerId: string
                sandboxGroupId?: {} | undefined
                name?: string | undefined
                networkPolicy?:
                  | {
                      type?: {} | undefined
                      default?: {} | undefined
                      rules?: { domain: string; protocol?: 'https' | undefined }[] | undefined
                    }
                  | undefined
                plan?:
                  | 'starter'
                  | 'standard'
                  | 'pro'
                  | '1c-2g'
                  | '2c-4g'
                  | '4c-8g'
                  | '8c-16g'
                  | string
                  | undefined
                timeoutSeconds?: number | undefined
                idleTimeoutSeconds?: number | undefined
                env?: { [x: string]: string } | undefined
                snapshotId?: {} | undefined
                snapshotName?: {} | undefined
                buildId?: {} | undefined
                buildName?: string | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: {
              json: {
                ownerId: string
                sandboxGroupId?: {} | undefined
                name?: string | undefined
                networkPolicy?:
                  | {
                      type?: {} | undefined
                      default?: {} | undefined
                      rules?: { domain: string; protocol?: 'https' | undefined }[] | undefined
                    }
                  | undefined
                plan?:
                  | 'starter'
                  | 'standard'
                  | 'pro'
                  | '1c-2g'
                  | '2c-4g'
                  | '4c-8g'
                  | '8c-16g'
                  | string
                  | undefined
                timeoutSeconds?: number | undefined
                idleTimeoutSeconds?: number | undefined
                env?: { [x: string]: string } | undefined
                snapshotId?: {} | undefined
                snapshotName?: {} | undefined
                buildId?: {} | undefined
                buildName?: string | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: {
              json: {
                ownerId: string
                sandboxGroupId?: {} | undefined
                name?: string | undefined
                networkPolicy?:
                  | {
                      type?: {} | undefined
                      default?: {} | undefined
                      rules?: { domain: string; protocol?: 'https' | undefined }[] | undefined
                    }
                  | undefined
                plan?:
                  | 'starter'
                  | 'standard'
                  | 'pro'
                  | '1c-2g'
                  | '2c-4g'
                  | '4c-8g'
                  | '8c-16g'
                  | string
                  | undefined
                timeoutSeconds?: number | undefined
                idleTimeoutSeconds?: number | undefined
                env?: { [x: string]: string } | undefined
                snapshotId?: {} | undefined
                snapshotName?: {} | undefined
                buildId?: {} | undefined
                buildName?: string | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 409
          }
        | {
            input: {
              json: {
                ownerId: string
                sandboxGroupId?: {} | undefined
                name?: string | undefined
                networkPolicy?:
                  | {
                      type?: {} | undefined
                      default?: {} | undefined
                      rules?: { domain: string; protocol?: 'https' | undefined }[] | undefined
                    }
                  | undefined
                plan?:
                  | 'starter'
                  | 'standard'
                  | 'pro'
                  | '1c-2g'
                  | '2c-4g'
                  | '4c-8g'
                  | '8c-16g'
                  | string
                  | undefined
                timeoutSeconds?: number | undefined
                idleTimeoutSeconds?: number | undefined
                env?: { [x: string]: string } | undefined
                snapshotId?: {} | undefined
                snapshotName?: {} | undefined
                buildId?: {} | undefined
                buildName?: string | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 429
          }
        | {
            input: {
              json: {
                ownerId: string
                sandboxGroupId?: {} | undefined
                name?: string | undefined
                networkPolicy?:
                  | {
                      type?: {} | undefined
                      default?: {} | undefined
                      rules?: { domain: string; protocol?: 'https' | undefined }[] | undefined
                    }
                  | undefined
                plan?:
                  | 'starter'
                  | 'standard'
                  | 'pro'
                  | '1c-2g'
                  | '2c-4g'
                  | '4c-8g'
                  | '8c-16g'
                  | string
                  | undefined
                timeoutSeconds?: number | undefined
                idleTimeoutSeconds?: number | undefined
                env?: { [x: string]: string } | undefined
                snapshotId?: {} | undefined
                snapshotName?: {} | undefined
                buildId?: {} | undefined
                buildName?: string | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 500
          }
        | {
            input: {
              json: {
                ownerId: string
                sandboxGroupId?: {} | undefined
                name?: string | undefined
                networkPolicy?:
                  | {
                      type?: {} | undefined
                      default?: {} | undefined
                      rules?: { domain: string; protocol?: 'https' | undefined }[] | undefined
                    }
                  | undefined
                plan?:
                  | 'starter'
                  | 'standard'
                  | 'pro'
                  | '1c-2g'
                  | '2c-4g'
                  | '4c-8g'
                  | '8c-16g'
                  | string
                  | undefined
                timeoutSeconds?: number | undefined
                idleTimeoutSeconds?: number | undefined
                env?: { [x: string]: string } | undefined
                snapshotId?: {} | undefined
                snapshotName?: {} | undefined
                buildId?: {} | undefined
                buildName?: string | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 503
          }
      $get:
        | {
            input: {
              query: {
                ownerId: string
                sandboxGroupId?: string | undefined
                name?: string | undefined
                cursor?: string | undefined
                limit?: number | undefined
                status?:
                  | (
                      | 'creating'
                      | 'running'
                      | 'suspending'
                      | 'suspended'
                      | 'resuming'
                      | 'errored'
                      | 'terminated'
                    )[]
                  | undefined
              }
            }
            output: SandboxWithCursor[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                ownerId: string
                sandboxGroupId?: string | undefined
                name?: string | undefined
                cursor?: string | undefined
                limit?: number | undefined
                status?:
                  | (
                      | 'creating'
                      | 'running'
                      | 'suspending'
                      | 'suspended'
                      | 'resuming'
                      | 'errored'
                      | 'terminated'
                    )[]
                  | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                ownerId: string
                sandboxGroupId?: string | undefined
                name?: string | undefined
                cursor?: string | undefined
                limit?: number | undefined
                status?:
                  | (
                      | 'creating'
                      | 'running'
                      | 'suspending'
                      | 'suspended'
                      | 'resuming'
                      | 'errored'
                      | 'terminated'
                    )[]
                  | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              query: {
                ownerId: string
                sandboxGroupId?: string | undefined
                name?: string | undefined
                cursor?: string | undefined
                limit?: number | undefined
                status?:
                  | (
                      | 'creating'
                      | 'running'
                      | 'suspending'
                      | 'suspended'
                      | 'resuming'
                      | 'errored'
                      | 'terminated'
                    )[]
                  | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: {
              query: {
                ownerId: string
                sandboxGroupId?: string | undefined
                name?: string | undefined
                cursor?: string | undefined
                limit?: number | undefined
                status?:
                  | (
                      | 'creating'
                      | 'running'
                      | 'suspending'
                      | 'suspended'
                      | 'resuming'
                      | 'errored'
                      | 'terminated'
                    )[]
                  | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: {
              query: {
                ownerId: string
                sandboxGroupId?: string | undefined
                name?: string | undefined
                cursor?: string | undefined
                limit?: number | undefined
                status?:
                  | (
                      | 'creating'
                      | 'running'
                      | 'suspending'
                      | 'suspended'
                      | 'resuming'
                      | 'errored'
                      | 'terminated'
                    )[]
                  | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 429
          }
        | {
            input: {
              query: {
                ownerId: string
                sandboxGroupId?: string | undefined
                name?: string | undefined
                cursor?: string | undefined
                limit?: number | undefined
                status?:
                  | (
                      | 'creating'
                      | 'running'
                      | 'suspending'
                      | 'suspended'
                      | 'resuming'
                      | 'errored'
                      | 'terminated'
                    )[]
                  | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 500
          }
        | {
            input: {
              query: {
                ownerId: string
                sandboxGroupId?: string | undefined
                name?: string | undefined
                cursor?: string | undefined
                limit?: number | undefined
                status?:
                  | (
                      | 'creating'
                      | 'running'
                      | 'suspending'
                      | 'suspended'
                      | 'resuming'
                      | 'errored'
                      | 'terminated'
                    )[]
                  | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 503
          }
    }
  } & {
    '/sandbox-groups': {
      $post:
        | {
            input: {
              json: {
                ownerId: string
                name: string
                region?: string | undefined
                environmentId?: string | undefined
              }
            }
            output: {
              id: string
              ownerId: string
              name: string
              region: string
              isDefault: boolean
              environmentId?: (string | null) | undefined
              concurrencyLimit: number
              createdAt: string
              updatedAt: string
            }
            outputFormat: 'json'
            status: 201
          }
        | {
            input: {
              json: {
                ownerId: string
                name: string
                region?: string | undefined
                environmentId?: string | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              json: {
                ownerId: string
                name: string
                region?: string | undefined
                environmentId?: string | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              json: {
                ownerId: string
                name: string
                region?: string | undefined
                environmentId?: string | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: {
              json: {
                ownerId: string
                name: string
                region?: string | undefined
                environmentId?: string | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: {
              json: {
                ownerId: string
                name: string
                region?: string | undefined
                environmentId?: string | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 409
          }
        | {
            input: {
              json: {
                ownerId: string
                name: string
                region?: string | undefined
                environmentId?: string | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 429
          }
        | {
            input: {
              json: {
                ownerId: string
                name: string
                region?: string | undefined
                environmentId?: string | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 500
          }
        | {
            input: {
              json: {
                ownerId: string
                name: string
                region?: string | undefined
                environmentId?: string | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 503
          }
      $get:
        | {
            input: {
              query: { ownerId: string; cursor?: string | undefined; limit?: number | undefined }
            }
            output: SandboxGroupWithCursor[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: { ownerId: string; cursor?: string | undefined; limit?: number | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: { ownerId: string; cursor?: string | undefined; limit?: number | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              query: { ownerId: string; cursor?: string | undefined; limit?: number | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: {
              query: { ownerId: string; cursor?: string | undefined; limit?: number | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: {
              query: { ownerId: string; cursor?: string | undefined; limit?: number | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 429
          }
        | {
            input: {
              query: { ownerId: string; cursor?: string | undefined; limit?: number | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 500
          }
        | {
            input: {
              query: { ownerId: string; cursor?: string | undefined; limit?: number | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 503
          }
    }
  } & {
    '/sandboxes/:sandboxId': {
      $get:
        | {
            input: { param: { sandboxId: string } } & { query: { ownerId?: string | undefined } }
            output: {
              id: string
              name?: (string | null) | undefined
              sandboxGroupId?: {} | undefined
              status:
                | 'creating'
                | 'running'
                | 'suspending'
                | 'suspended'
                | 'resuming'
                | 'errored'
                | 'terminated'
              plan: 'starter' | 'standard' | 'pro' | '1c-2g' | '2c-4g' | '4c-8g' | '8c-16g' | string
              networkPolicy: {
                type: {}
                default?: {} | undefined
                rules?: { domain: string; protocol?: 'https' | undefined }[] | undefined
              }
              region: string
              timeoutSeconds: number
              idleTimeoutSeconds: number
              createdAt: string
              terminatedAt?: (string | null) | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { sandboxId: string } } & { query: { ownerId?: string | undefined } }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { sandboxId: string } } & { query: { ownerId?: string | undefined } }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { sandboxId: string } } & { query: { ownerId?: string | undefined } }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { sandboxId: string } } & { query: { ownerId?: string | undefined } }
            output: Error
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { sandboxId: string } } & { query: { ownerId?: string | undefined } }
            output: Error
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { param: { sandboxId: string } } & { query: { ownerId?: string | undefined } }
            output: Error
            outputFormat: 'json'
            status: 503
          }
    }
  } & {
    '/sandboxes/:sandboxId/execs': {
      $get:
        | {
            input: { param: { sandboxId: string } } & {
              query: {
                ownerId?: string | undefined
                cursor?: string | undefined
                limit?: number | undefined
              }
            }
            output: ExecutionWithCursor[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { sandboxId: string } } & {
              query: {
                ownerId?: string | undefined
                cursor?: string | undefined
                limit?: number | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { sandboxId: string } } & {
              query: {
                ownerId?: string | undefined
                cursor?: string | undefined
                limit?: number | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { sandboxId: string } } & {
              query: {
                ownerId?: string | undefined
                cursor?: string | undefined
                limit?: number | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { sandboxId: string } } & {
              query: {
                ownerId?: string | undefined
                cursor?: string | undefined
                limit?: number | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { sandboxId: string } } & {
              query: {
                ownerId?: string | undefined
                cursor?: string | undefined
                limit?: number | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { sandboxId: string } } & {
              query: {
                ownerId?: string | undefined
                cursor?: string | undefined
                limit?: number | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { param: { sandboxId: string } } & {
              query: {
                ownerId?: string | undefined
                cursor?: string | undefined
                limit?: number | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 503
          }
    }
  } & {
    '/sandboxes/:sandboxId/execs/:execId': {
      $get:
        | {
            input: { param: { sandboxId: string; execId: string } } & {
              query: { ownerId?: string | undefined }
            }
            output: {
              id: string
              sandboxId: string
              type: 'runs' | 'files'
              operation: 'sync' | 'stream' | 'upload' | 'download'
              command?: string | undefined
              userId: string
              startedAt: string
              stoppedAt?: string | undefined
              exitCode?: number | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { sandboxId: string; execId: string } } & {
              query: { ownerId?: string | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { sandboxId: string; execId: string } } & {
              query: { ownerId?: string | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { sandboxId: string; execId: string } } & {
              query: { ownerId?: string | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { sandboxId: string; execId: string } } & {
              query: { ownerId?: string | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { sandboxId: string; execId: string } } & {
              query: { ownerId?: string | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { param: { sandboxId: string; execId: string } } & {
              query: { ownerId?: string | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 503
          }
    }
  } & {
    '/sandboxes/:sandboxId/terminate': {
      $post:
        | {
            input: { param: { sandboxId: string } } & { query: { ownerId?: string | undefined } }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { sandboxId: string } } & { query: { ownerId?: string | undefined } }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { sandboxId: string } } & { query: { ownerId?: string | undefined } }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { sandboxId: string } } & { query: { ownerId?: string | undefined } }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { sandboxId: string } } & { query: { ownerId?: string | undefined } }
            output: Error
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { sandboxId: string } } & { query: { ownerId?: string | undefined } }
            output: Error
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { param: { sandboxId: string } } & { query: { ownerId?: string | undefined } }
            output: Error
            outputFormat: 'json'
            status: 503
          }
    }
  } & {
    '/sandboxes/:sandboxId/suspend': {
      $post:
        | {
            input: { param: { sandboxId: string } } & { query: { ownerId?: string | undefined } }
            output: {}
            outputFormat: string
            status: 202
          }
        | {
            input: { param: { sandboxId: string } } & { query: { ownerId?: string | undefined } }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { sandboxId: string } } & { query: { ownerId?: string | undefined } }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { sandboxId: string } } & { query: { ownerId?: string | undefined } }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { sandboxId: string } } & { query: { ownerId?: string | undefined } }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { sandboxId: string } } & { query: { ownerId?: string | undefined } }
            output: Error
            outputFormat: 'json'
            status: 409
          }
        | {
            input: { param: { sandboxId: string } } & { query: { ownerId?: string | undefined } }
            output: Error
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { sandboxId: string } } & { query: { ownerId?: string | undefined } }
            output: Error
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { param: { sandboxId: string } } & { query: { ownerId?: string | undefined } }
            output: Error
            outputFormat: 'json'
            status: 503
          }
    }
  } & {
    '/sandboxes/:sandboxId/snapshots': {
      $post:
        | {
            input: { param: { sandboxId: string } } & {
              query: { ownerId?: string | undefined }
            } & {
              json: {
                kind?: {} | undefined
                name?: string | undefined
                ttlSeconds?: number | undefined
                expiresAt?: string | undefined
              }
            }
            output: {
              id: string
              sandboxGroupId: string
              sourceSandboxId: {}
              name?: {} | undefined
              kind: 'filesystem' | 'runtime'
              status: 'creating' | 'available' | 'failed'
              plan: 'starter' | 'standard' | 'pro' | '1c-2g' | '2c-4g' | '4c-8g' | '8c-16g' | string
              requestedAt: string
              capturedAt?: (string | null) | undefined
              expiresAt: string
              ttlSeconds?: number | undefined
              sizeBytes?: (bigint | null) | undefined
              error?: (string | null) | undefined
            }
            outputFormat: 'json'
            status: 202
          }
        | {
            input: { param: { sandboxId: string } } & {
              query: { ownerId?: string | undefined }
            } & {
              json: {
                kind?: {} | undefined
                name?: string | undefined
                ttlSeconds?: number | undefined
                expiresAt?: string | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { sandboxId: string } } & {
              query: { ownerId?: string | undefined }
            } & {
              json: {
                kind?: {} | undefined
                name?: string | undefined
                ttlSeconds?: number | undefined
                expiresAt?: string | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { sandboxId: string } } & {
              query: { ownerId?: string | undefined }
            } & {
              json: {
                kind?: {} | undefined
                name?: string | undefined
                ttlSeconds?: number | undefined
                expiresAt?: string | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { sandboxId: string } } & {
              query: { ownerId?: string | undefined }
            } & {
              json: {
                kind?: {} | undefined
                name?: string | undefined
                ttlSeconds?: number | undefined
                expiresAt?: string | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { sandboxId: string } } & {
              query: { ownerId?: string | undefined }
            } & {
              json: {
                kind?: {} | undefined
                name?: string | undefined
                ttlSeconds?: number | undefined
                expiresAt?: string | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 409
          }
        | {
            input: { param: { sandboxId: string } } & {
              query: { ownerId?: string | undefined }
            } & {
              json: {
                kind?: {} | undefined
                name?: string | undefined
                ttlSeconds?: number | undefined
                expiresAt?: string | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { sandboxId: string } } & {
              query: { ownerId?: string | undefined }
            } & {
              json: {
                kind?: {} | undefined
                name?: string | undefined
                ttlSeconds?: number | undefined
                expiresAt?: string | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { param: { sandboxId: string } } & {
              query: { ownerId?: string | undefined }
            } & {
              json: {
                kind?: {} | undefined
                name?: string | undefined
                ttlSeconds?: number | undefined
                expiresAt?: string | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 503
          }
    }
  } & {
    '/sandbox-groups/:sandboxGroupId': {
      $get:
        | {
            input: { param: { sandboxGroupId: string } }
            output: {
              id: string
              ownerId: string
              name: string
              region: string
              isDefault: boolean
              environmentId?: (string | null) | undefined
              concurrencyLimit: number
              createdAt: string
              updatedAt: string
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { sandboxGroupId: string } }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { sandboxGroupId: string } }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { sandboxGroupId: string } }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { sandboxGroupId: string } }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { sandboxGroupId: string } }
            output: Error
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { sandboxGroupId: string } }
            output: Error
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { param: { sandboxGroupId: string } }
            output: Error
            outputFormat: 'json'
            status: 503
          }
      $patch:
        | {
            input: { param: { sandboxGroupId: string } } & { json: { concurrencyLimit: number } }
            output: {
              id: string
              ownerId: string
              name: string
              region: string
              isDefault: boolean
              environmentId?: (string | null) | undefined
              concurrencyLimit: number
              createdAt: string
              updatedAt: string
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { sandboxGroupId: string } } & { json: { concurrencyLimit: number } }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { sandboxGroupId: string } } & { json: { concurrencyLimit: number } }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { sandboxGroupId: string } } & { json: { concurrencyLimit: number } }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { sandboxGroupId: string } } & { json: { concurrencyLimit: number } }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { sandboxGroupId: string } } & { json: { concurrencyLimit: number } }
            output: Error
            outputFormat: 'json'
            status: 409
          }
        | {
            input: { param: { sandboxGroupId: string } } & { json: { concurrencyLimit: number } }
            output: Error
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { sandboxGroupId: string } } & { json: { concurrencyLimit: number } }
            output: Error
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { param: { sandboxGroupId: string } } & { json: { concurrencyLimit: number } }
            output: Error
            outputFormat: 'json'
            status: 503
          }
    }
  } & {
    '/sandbox-groups/:sandboxGroupId/credentials': {
      $get:
        | {
            input: { param: { sandboxGroupId: string } }
            output: {
              id: string
              domain: string
              version?:
                | {
                    id: bigint
                    updatedAt: string
                    updatedBy: string
                    fingerprint: string
                    restoredFromVersionId?: bigint | undefined
                  }
                | undefined
              enabled: boolean
              methods: string[]
              paths: string[]
              injection: {
                type: 'header' | 'basic' | 'cookie' | 'query'
                name?: string | undefined
                template?: string | undefined
              }
            }[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { sandboxGroupId: string } }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { sandboxGroupId: string } }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { sandboxGroupId: string } }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { sandboxGroupId: string } }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { sandboxGroupId: string } }
            output: Error
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { sandboxGroupId: string } }
            output: Error
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { param: { sandboxGroupId: string } }
            output: Error
            outputFormat: 'json'
            status: 503
          }
      $post:
        | {
            input: { param: { sandboxGroupId: string } } & {
              json: {
                id: string
                domain: string
                value: string
                enabled?: boolean | undefined
                methods?: string[] | undefined
                paths?: string[] | undefined
                injection: {
                  type: 'header' | 'basic' | 'cookie' | 'query'
                  name?: string | undefined
                  template?: string | undefined
                }
              }
            }
            output: {
              id: string
              domain: string
              version?:
                | {
                    id: bigint
                    updatedAt: string
                    updatedBy: string
                    fingerprint: string
                    restoredFromVersionId?: bigint | undefined
                  }
                | undefined
              enabled: boolean
              methods: string[]
              paths: string[]
              injection: {
                type: 'header' | 'basic' | 'cookie' | 'query'
                name?: string | undefined
                template?: string | undefined
              }
            }
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { param: { sandboxGroupId: string } } & {
              json: {
                id: string
                domain: string
                value: string
                enabled?: boolean | undefined
                methods?: string[] | undefined
                paths?: string[] | undefined
                injection: {
                  type: 'header' | 'basic' | 'cookie' | 'query'
                  name?: string | undefined
                  template?: string | undefined
                }
              }
            }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { sandboxGroupId: string } } & {
              json: {
                id: string
                domain: string
                value: string
                enabled?: boolean | undefined
                methods?: string[] | undefined
                paths?: string[] | undefined
                injection: {
                  type: 'header' | 'basic' | 'cookie' | 'query'
                  name?: string | undefined
                  template?: string | undefined
                }
              }
            }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { sandboxGroupId: string } } & {
              json: {
                id: string
                domain: string
                value: string
                enabled?: boolean | undefined
                methods?: string[] | undefined
                paths?: string[] | undefined
                injection: {
                  type: 'header' | 'basic' | 'cookie' | 'query'
                  name?: string | undefined
                  template?: string | undefined
                }
              }
            }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { sandboxGroupId: string } } & {
              json: {
                id: string
                domain: string
                value: string
                enabled?: boolean | undefined
                methods?: string[] | undefined
                paths?: string[] | undefined
                injection: {
                  type: 'header' | 'basic' | 'cookie' | 'query'
                  name?: string | undefined
                  template?: string | undefined
                }
              }
            }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { sandboxGroupId: string } } & {
              json: {
                id: string
                domain: string
                value: string
                enabled?: boolean | undefined
                methods?: string[] | undefined
                paths?: string[] | undefined
                injection: {
                  type: 'header' | 'basic' | 'cookie' | 'query'
                  name?: string | undefined
                  template?: string | undefined
                }
              }
            }
            output: Error
            outputFormat: 'json'
            status: 409
          }
        | {
            input: { param: { sandboxGroupId: string } } & {
              json: {
                id: string
                domain: string
                value: string
                enabled?: boolean | undefined
                methods?: string[] | undefined
                paths?: string[] | undefined
                injection: {
                  type: 'header' | 'basic' | 'cookie' | 'query'
                  name?: string | undefined
                  template?: string | undefined
                }
              }
            }
            output: Error
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { sandboxGroupId: string } } & {
              json: {
                id: string
                domain: string
                value: string
                enabled?: boolean | undefined
                methods?: string[] | undefined
                paths?: string[] | undefined
                injection: {
                  type: 'header' | 'basic' | 'cookie' | 'query'
                  name?: string | undefined
                  template?: string | undefined
                }
              }
            }
            output: Error
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { param: { sandboxGroupId: string } } & {
              json: {
                id: string
                domain: string
                value: string
                enabled?: boolean | undefined
                methods?: string[] | undefined
                paths?: string[] | undefined
                injection: {
                  type: 'header' | 'basic' | 'cookie' | 'query'
                  name?: string | undefined
                  template?: string | undefined
                }
              }
            }
            output: Error
            outputFormat: 'json'
            status: 503
          }
    }
  } & {
    '/sandbox-groups/:sandboxGroupId/credentials/:credentialId': {
      $get:
        | {
            input: { param: { sandboxGroupId: string; credentialId: string } }
            output: {
              id: string
              domain: string
              version?:
                | {
                    id: bigint
                    updatedAt: string
                    updatedBy: string
                    fingerprint: string
                    restoredFromVersionId?: bigint | undefined
                  }
                | undefined
              enabled: boolean
              methods: string[]
              paths: string[]
              injection: {
                type: 'header' | 'basic' | 'cookie' | 'query'
                name?: string | undefined
                template?: string | undefined
              }
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { sandboxGroupId: string; credentialId: string } }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { sandboxGroupId: string; credentialId: string } }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { sandboxGroupId: string; credentialId: string } }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { sandboxGroupId: string; credentialId: string } }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { sandboxGroupId: string; credentialId: string } }
            output: Error
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { sandboxGroupId: string; credentialId: string } }
            output: Error
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { param: { sandboxGroupId: string; credentialId: string } }
            output: Error
            outputFormat: 'json'
            status: 503
          }
      $patch:
        | {
            input: { param: { sandboxGroupId: string; credentialId: string } } & {
              json: {
                value?: string | undefined
                domain?: string | undefined
                enabled?: boolean | undefined
                methods?: string[] | undefined
                paths?: string[] | undefined
                injection?:
                  | {
                      type: 'header' | 'basic' | 'cookie' | 'query'
                      name?: string | undefined
                      template?: string | undefined
                    }
                  | undefined
              }
            }
            output: {
              id: string
              domain: string
              version?:
                | {
                    id: bigint
                    updatedAt: string
                    updatedBy: string
                    fingerprint: string
                    restoredFromVersionId?: bigint | undefined
                  }
                | undefined
              enabled: boolean
              methods: string[]
              paths: string[]
              injection: {
                type: 'header' | 'basic' | 'cookie' | 'query'
                name?: string | undefined
                template?: string | undefined
              }
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { sandboxGroupId: string; credentialId: string } } & {
              json: {
                value?: string | undefined
                domain?: string | undefined
                enabled?: boolean | undefined
                methods?: string[] | undefined
                paths?: string[] | undefined
                injection?:
                  | {
                      type: 'header' | 'basic' | 'cookie' | 'query'
                      name?: string | undefined
                      template?: string | undefined
                    }
                  | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { sandboxGroupId: string; credentialId: string } } & {
              json: {
                value?: string | undefined
                domain?: string | undefined
                enabled?: boolean | undefined
                methods?: string[] | undefined
                paths?: string[] | undefined
                injection?:
                  | {
                      type: 'header' | 'basic' | 'cookie' | 'query'
                      name?: string | undefined
                      template?: string | undefined
                    }
                  | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { sandboxGroupId: string; credentialId: string } } & {
              json: {
                value?: string | undefined
                domain?: string | undefined
                enabled?: boolean | undefined
                methods?: string[] | undefined
                paths?: string[] | undefined
                injection?:
                  | {
                      type: 'header' | 'basic' | 'cookie' | 'query'
                      name?: string | undefined
                      template?: string | undefined
                    }
                  | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { sandboxGroupId: string; credentialId: string } } & {
              json: {
                value?: string | undefined
                domain?: string | undefined
                enabled?: boolean | undefined
                methods?: string[] | undefined
                paths?: string[] | undefined
                injection?:
                  | {
                      type: 'header' | 'basic' | 'cookie' | 'query'
                      name?: string | undefined
                      template?: string | undefined
                    }
                  | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { sandboxGroupId: string; credentialId: string } } & {
              json: {
                value?: string | undefined
                domain?: string | undefined
                enabled?: boolean | undefined
                methods?: string[] | undefined
                paths?: string[] | undefined
                injection?:
                  | {
                      type: 'header' | 'basic' | 'cookie' | 'query'
                      name?: string | undefined
                      template?: string | undefined
                    }
                  | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 409
          }
        | {
            input: { param: { sandboxGroupId: string; credentialId: string } } & {
              json: {
                value?: string | undefined
                domain?: string | undefined
                enabled?: boolean | undefined
                methods?: string[] | undefined
                paths?: string[] | undefined
                injection?:
                  | {
                      type: 'header' | 'basic' | 'cookie' | 'query'
                      name?: string | undefined
                      template?: string | undefined
                    }
                  | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { sandboxGroupId: string; credentialId: string } } & {
              json: {
                value?: string | undefined
                domain?: string | undefined
                enabled?: boolean | undefined
                methods?: string[] | undefined
                paths?: string[] | undefined
                injection?:
                  | {
                      type: 'header' | 'basic' | 'cookie' | 'query'
                      name?: string | undefined
                      template?: string | undefined
                    }
                  | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { param: { sandboxGroupId: string; credentialId: string } } & {
              json: {
                value?: string | undefined
                domain?: string | undefined
                enabled?: boolean | undefined
                methods?: string[] | undefined
                paths?: string[] | undefined
                injection?:
                  | {
                      type: 'header' | 'basic' | 'cookie' | 'query'
                      name?: string | undefined
                      template?: string | undefined
                    }
                  | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 503
          }
      $delete:
        | {
            input: { param: { sandboxGroupId: string; credentialId: string } }
            output: {}
            outputFormat: string
            status: 202
          }
        | {
            input: { param: { sandboxGroupId: string; credentialId: string } }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { sandboxGroupId: string; credentialId: string } }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { sandboxGroupId: string; credentialId: string } }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { sandboxGroupId: string; credentialId: string } }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { sandboxGroupId: string; credentialId: string } }
            output: Error
            outputFormat: 'json'
            status: 409
          }
        | {
            input: { param: { sandboxGroupId: string; credentialId: string } }
            output: Error
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { sandboxGroupId: string; credentialId: string } }
            output: Error
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { param: { sandboxGroupId: string; credentialId: string } }
            output: Error
            outputFormat: 'json'
            status: 503
          }
    }
  } & {
    '/sandbox-groups/:sandboxGroupId/credentials/:credentialId/versions': {
      $get:
        | {
            input: { param: { sandboxGroupId: string; credentialId: string } }
            output: {
              id: bigint
              updatedAt: string
              updatedBy: string
              fingerprint: string
              restoredFromVersionId?: bigint | undefined
            }[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { sandboxGroupId: string; credentialId: string } }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { sandboxGroupId: string; credentialId: string } }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { sandboxGroupId: string; credentialId: string } }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { sandboxGroupId: string; credentialId: string } }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { sandboxGroupId: string; credentialId: string } }
            output: Error
            outputFormat: 'json'
            status: 409
          }
        | {
            input: { param: { sandboxGroupId: string; credentialId: string } }
            output: Error
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { sandboxGroupId: string; credentialId: string } }
            output: Error
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { param: { sandboxGroupId: string; credentialId: string } }
            output: Error
            outputFormat: 'json'
            status: 503
          }
    }
  } & {
    '/sandbox-groups/:sandboxGroupId/credentials/:credentialId/restore': {
      $post:
        | {
            input: { param: { sandboxGroupId: string; credentialId: string } } & {
              json: { versionId: bigint }
            }
            output: {
              id: string
              domain: string
              version?:
                | {
                    id: bigint
                    updatedAt: string
                    updatedBy: string
                    fingerprint: string
                    restoredFromVersionId?: bigint | undefined
                  }
                | undefined
              enabled: boolean
              methods: string[]
              paths: string[]
              injection: {
                type: 'header' | 'basic' | 'cookie' | 'query'
                name?: string | undefined
                template?: string | undefined
              }
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { sandboxGroupId: string; credentialId: string } } & {
              json: { versionId: bigint }
            }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { sandboxGroupId: string; credentialId: string } } & {
              json: { versionId: bigint }
            }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { sandboxGroupId: string; credentialId: string } } & {
              json: { versionId: bigint }
            }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { sandboxGroupId: string; credentialId: string } } & {
              json: { versionId: bigint }
            }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { sandboxGroupId: string; credentialId: string } } & {
              json: { versionId: bigint }
            }
            output: Error
            outputFormat: 'json'
            status: 409
          }
        | {
            input: { param: { sandboxGroupId: string; credentialId: string } } & {
              json: { versionId: bigint }
            }
            output: Error
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { sandboxGroupId: string; credentialId: string } } & {
              json: { versionId: bigint }
            }
            output: Error
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { param: { sandboxGroupId: string; credentialId: string } } & {
              json: { versionId: bigint }
            }
            output: Error
            outputFormat: 'json'
            status: 503
          }
    }
  } & {
    '/sandbox-groups/:sandboxGroupId/builds': {
      $get:
        | {
            input: { param: { sandboxGroupId: string } } & {
              query: {
                cursor?: string | undefined
                limit?: number | undefined
                name?: string | undefined
                status?: ('pending' | 'running' | 'succeeded' | 'failed')[] | undefined
              }
            }
            output: SandboxBuildWithCursor[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { sandboxGroupId: string } } & {
              query: {
                cursor?: string | undefined
                limit?: number | undefined
                name?: string | undefined
                status?: ('pending' | 'running' | 'succeeded' | 'failed')[] | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { sandboxGroupId: string } } & {
              query: {
                cursor?: string | undefined
                limit?: number | undefined
                name?: string | undefined
                status?: ('pending' | 'running' | 'succeeded' | 'failed')[] | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { sandboxGroupId: string } } & {
              query: {
                cursor?: string | undefined
                limit?: number | undefined
                name?: string | undefined
                status?: ('pending' | 'running' | 'succeeded' | 'failed')[] | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { sandboxGroupId: string } } & {
              query: {
                cursor?: string | undefined
                limit?: number | undefined
                name?: string | undefined
                status?: ('pending' | 'running' | 'succeeded' | 'failed')[] | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { sandboxGroupId: string } } & {
              query: {
                cursor?: string | undefined
                limit?: number | undefined
                name?: string | undefined
                status?: ('pending' | 'running' | 'succeeded' | 'failed')[] | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { sandboxGroupId: string } } & {
              query: {
                cursor?: string | undefined
                limit?: number | undefined
                name?: string | undefined
                status?: ('pending' | 'running' | 'succeeded' | 'failed')[] | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { param: { sandboxGroupId: string } } & {
              query: {
                cursor?: string | undefined
                limit?: number | undefined
                name?: string | undefined
                status?: ('pending' | 'running' | 'succeeded' | 'failed')[] | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 503
          }
      $post:
        | {
            input: { param: { sandboxGroupId: string } } & {
              json: {
                name: string
                sourceImage: string
                registryCredential?: { username: string; password: string } | undefined
              }
            }
            output: {
              id: string
              sandboxGroupId: string
              name: string
              source: { repository: string; image: string; reference: string }
              sourceDigest: string
              status: 'pending' | 'running' | 'succeeded' | 'failed'
              failureReason?: (string | null) | undefined
              failureCode?: (string | null) | undefined
              createdAt: string
              finishedAt?: (string | null) | undefined
            }
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { param: { sandboxGroupId: string } } & {
              json: {
                name: string
                sourceImage: string
                registryCredential?: { username: string; password: string } | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { sandboxGroupId: string } } & {
              json: {
                name: string
                sourceImage: string
                registryCredential?: { username: string; password: string } | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { sandboxGroupId: string } } & {
              json: {
                name: string
                sourceImage: string
                registryCredential?: { username: string; password: string } | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { sandboxGroupId: string } } & {
              json: {
                name: string
                sourceImage: string
                registryCredential?: { username: string; password: string } | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { sandboxGroupId: string } } & {
              json: {
                name: string
                sourceImage: string
                registryCredential?: { username: string; password: string } | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 409
          }
        | {
            input: { param: { sandboxGroupId: string } } & {
              json: {
                name: string
                sourceImage: string
                registryCredential?: { username: string; password: string } | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { sandboxGroupId: string } } & {
              json: {
                name: string
                sourceImage: string
                registryCredential?: { username: string; password: string } | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { param: { sandboxGroupId: string } } & {
              json: {
                name: string
                sourceImage: string
                registryCredential?: { username: string; password: string } | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 503
          }
    }
  } & {
    '/sandbox-groups/:sandboxGroupId/builds/:buildId': {
      $get:
        | {
            input: { param: { sandboxGroupId: string; buildId: string } }
            output: {
              id: string
              sandboxGroupId: string
              name: string
              source: { repository: string; image: string; reference: string }
              sourceDigest: string
              status: 'pending' | 'running' | 'succeeded' | 'failed'
              failureReason?: (string | null) | undefined
              failureCode?: (string | null) | undefined
              createdAt: string
              finishedAt?: (string | null) | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { sandboxGroupId: string; buildId: string } }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { sandboxGroupId: string; buildId: string } }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { sandboxGroupId: string; buildId: string } }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { sandboxGroupId: string; buildId: string } }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { sandboxGroupId: string; buildId: string } }
            output: Error
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { sandboxGroupId: string; buildId: string } }
            output: Error
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { param: { sandboxGroupId: string; buildId: string } }
            output: Error
            outputFormat: 'json'
            status: 503
          }
      $delete:
        | {
            input: { param: { sandboxGroupId: string; buildId: string } }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { sandboxGroupId: string; buildId: string } }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { sandboxGroupId: string; buildId: string } }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { sandboxGroupId: string; buildId: string } }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { sandboxGroupId: string; buildId: string } }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { sandboxGroupId: string; buildId: string } }
            output: Error
            outputFormat: 'json'
            status: 409
          }
        | {
            input: { param: { sandboxGroupId: string; buildId: string } }
            output: Error
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { sandboxGroupId: string; buildId: string } }
            output: Error
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { param: { sandboxGroupId: string; buildId: string } }
            output: Error
            outputFormat: 'json'
            status: 503
          }
    }
  } & {
    '/sandbox-groups/:sandboxGroupId/snapshots': {
      $get:
        | {
            input: { param: { sandboxGroupId: string } } & {
              query: {
                ownerId: string
                name?: string | undefined
                cursor?: string | undefined
                limit?: number | undefined
                status?: ('creating' | 'available' | 'failed')[] | undefined
              }
            }
            output: SandboxSnapshotWithCursor[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { sandboxGroupId: string } } & {
              query: {
                ownerId: string
                name?: string | undefined
                cursor?: string | undefined
                limit?: number | undefined
                status?: ('creating' | 'available' | 'failed')[] | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { sandboxGroupId: string } } & {
              query: {
                ownerId: string
                name?: string | undefined
                cursor?: string | undefined
                limit?: number | undefined
                status?: ('creating' | 'available' | 'failed')[] | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { sandboxGroupId: string } } & {
              query: {
                ownerId: string
                name?: string | undefined
                cursor?: string | undefined
                limit?: number | undefined
                status?: ('creating' | 'available' | 'failed')[] | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { sandboxGroupId: string } } & {
              query: {
                ownerId: string
                name?: string | undefined
                cursor?: string | undefined
                limit?: number | undefined
                status?: ('creating' | 'available' | 'failed')[] | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { sandboxGroupId: string } } & {
              query: {
                ownerId: string
                name?: string | undefined
                cursor?: string | undefined
                limit?: number | undefined
                status?: ('creating' | 'available' | 'failed')[] | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { sandboxGroupId: string } } & {
              query: {
                ownerId: string
                name?: string | undefined
                cursor?: string | undefined
                limit?: number | undefined
                status?: ('creating' | 'available' | 'failed')[] | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { param: { sandboxGroupId: string } } & {
              query: {
                ownerId: string
                name?: string | undefined
                cursor?: string | undefined
                limit?: number | undefined
                status?: ('creating' | 'available' | 'failed')[] | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 503
          }
    }
  } & {
    '/sandbox-groups/:sandboxGroupId/snapshots/:snapshotId': {
      $get:
        | {
            input: { param: { sandboxGroupId: string; snapshotId: string } } & {
              query: { ownerId?: string | undefined }
            }
            output: {
              id: string
              sandboxGroupId: string
              sourceSandboxId: {}
              name?: {} | undefined
              kind: 'filesystem' | 'runtime'
              status: 'creating' | 'available' | 'failed'
              plan: 'starter' | 'standard' | 'pro' | '1c-2g' | '2c-4g' | '4c-8g' | '8c-16g' | string
              requestedAt: string
              capturedAt?: (string | null) | undefined
              expiresAt: string
              ttlSeconds?: number | undefined
              sizeBytes?: (bigint | null) | undefined
              error?: (string | null) | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { sandboxGroupId: string; snapshotId: string } } & {
              query: { ownerId?: string | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { sandboxGroupId: string; snapshotId: string } } & {
              query: { ownerId?: string | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { sandboxGroupId: string; snapshotId: string } } & {
              query: { ownerId?: string | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { sandboxGroupId: string; snapshotId: string } } & {
              query: { ownerId?: string | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { sandboxGroupId: string; snapshotId: string } } & {
              query: { ownerId?: string | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { sandboxGroupId: string; snapshotId: string } } & {
              query: { ownerId?: string | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { param: { sandboxGroupId: string; snapshotId: string } } & {
              query: { ownerId?: string | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 503
          }
      $delete:
        | {
            input: { param: { sandboxGroupId: string; snapshotId: string } } & {
              query: { ownerId?: string | undefined }
            }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { sandboxGroupId: string; snapshotId: string } } & {
              query: { ownerId?: string | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { sandboxGroupId: string; snapshotId: string } } & {
              query: { ownerId?: string | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { sandboxGroupId: string; snapshotId: string } } & {
              query: { ownerId?: string | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { sandboxGroupId: string; snapshotId: string } } & {
              query: { ownerId?: string | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { sandboxGroupId: string; snapshotId: string } } & {
              query: { ownerId?: string | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 409
          }
        | {
            input: { param: { sandboxGroupId: string; snapshotId: string } } & {
              query: { ownerId?: string | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { sandboxGroupId: string; snapshotId: string } } & {
              query: { ownerId?: string | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { param: { sandboxGroupId: string; snapshotId: string } } & {
              query: { ownerId?: string | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 503
          }
    }
  } & {
    '/sandboxes/:sandboxId/runs/:operation/token': {
      $post:
        | {
            input: { param: { sandboxId: string; operation: 'sync' | 'stream' } } & {
              query: { ownerId?: string | undefined }
            }
            output: {
              executionId: string
              token: string
              uri: string
              method: string
              expiresAt: string
            }
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { param: { sandboxId: string; operation: 'sync' | 'stream' } } & {
              query: { ownerId?: string | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { sandboxId: string; operation: 'sync' | 'stream' } } & {
              query: { ownerId?: string | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { sandboxId: string; operation: 'sync' | 'stream' } } & {
              query: { ownerId?: string | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { sandboxId: string; operation: 'sync' | 'stream' } } & {
              query: { ownerId?: string | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { sandboxId: string; operation: 'sync' | 'stream' } } & {
              query: { ownerId?: string | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 409
          }
        | {
            input: { param: { sandboxId: string; operation: 'sync' | 'stream' } } & {
              query: { ownerId?: string | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { sandboxId: string; operation: 'sync' | 'stream' } } & {
              query: { ownerId?: string | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { param: { sandboxId: string; operation: 'sync' | 'stream' } } & {
              query: { ownerId?: string | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 503
          }
    }
  } & {
    '/sandboxes/:sandboxId/files/:operation/token': {
      $post:
        | {
            input: { param: { sandboxId: string; operation: 'upload' | 'download' } } & {
              query: { ownerId?: string | undefined; path: string }
            }
            output: {
              executionId: string
              token: string
              uri: string
              method: string
              expiresAt: string
            }
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { param: { sandboxId: string; operation: 'upload' | 'download' } } & {
              query: { ownerId?: string | undefined; path: string }
            }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { sandboxId: string; operation: 'upload' | 'download' } } & {
              query: { ownerId?: string | undefined; path: string }
            }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { sandboxId: string; operation: 'upload' | 'download' } } & {
              query: { ownerId?: string | undefined; path: string }
            }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { sandboxId: string; operation: 'upload' | 'download' } } & {
              query: { ownerId?: string | undefined; path: string }
            }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { sandboxId: string; operation: 'upload' | 'download' } } & {
              query: { ownerId?: string | undefined; path: string }
            }
            output: Error
            outputFormat: 'json'
            status: 409
          }
        | {
            input: { param: { sandboxId: string; operation: 'upload' | 'download' } } & {
              query: { ownerId?: string | undefined; path: string }
            }
            output: Error
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { sandboxId: string; operation: 'upload' | 'download' } } & {
              query: { ownerId?: string | undefined; path: string }
            }
            output: Error
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { param: { sandboxId: string; operation: 'upload' | 'download' } } & {
              query: { ownerId?: string | undefined; path: string }
            }
            output: Error
            outputFormat: 'json'
            status: 503
          }
    }
  },
  '/'
>
export default routes
