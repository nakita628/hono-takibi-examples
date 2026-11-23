type AuthAuthenticatePayload = { Password: string; Username: string }
type AuthAuthenticateResponse = { jwt?: string | undefined }
type AuthOauthPayload = { Code?: string | undefined }
type BackupBackupPayload = { Password?: string | undefined }
type GittypesRepoConfig = {
  Authentication?:
    | {
        AuthorizationType?: number | undefined
        GitCredentialID?: number | undefined
        Password?: string | undefined
        Provider?: number | undefined
        Username?: string | undefined
      }
    | undefined
  ConfigFilePath?: string | undefined
  ConfigHash?: string | undefined
  ReferenceName?: string | undefined
  TLSSkipVerify?: boolean | undefined
  URL?: string | undefined
}
type PortainerResourceAccessLevel = 0 | 1
type PortainerTeamResourceAccess = {
  AccessLevel?: PortainerResourceAccessLevel | undefined
  TeamId?: number | undefined
}
type PortainerUserResourceAccess = {
  AccessLevel?: PortainerResourceAccessLevel | undefined
  UserId?: number | undefined
}
type PortainerResourceControl = {
  AccessLevel?: PortainerResourceAccessLevel | undefined
  AdministratorsOnly?: boolean | undefined
  Id?: number | undefined
  OwnerId?: number | undefined
  Public?: boolean | undefined
  ResourceId?: string | undefined
  SubResourceIds?: string[] | undefined
  System?: boolean | undefined
  TeamAccesses?: PortainerTeamResourceAccess[] | undefined
  Type?: {} | undefined
  UserAccesses?: PortainerUserResourceAccess[] | undefined
}
type PortainerCustomTemplateVariableDefinition = {
  defaultValue?: string | undefined
  description?: string | undefined
  label?: string | undefined
  name?: string | undefined
}
type PortainerSourceStatus = 0 | 1 | 2
type PortainerArtifactFile = {
  hash?: string | undefined
  path?: string | undefined
  pathError?: string | undefined
  pathStatus?: PortainerSourceStatus | undefined
  ref?: string | undefined
  refError?: string | undefined
  refStatus?: PortainerSourceStatus | undefined
  sourceId?: number | undefined
}
type PortainerArtifact = {
  edgeGroups?: number[] | undefined
  edgeStackId?: number | undefined
  envGroups?: number[] | undefined
  envIds?: number[] | undefined
  files?: PortainerArtifactFile[] | undefined
  stackId?: number | undefined
}
type PortainerCustomTemplate = {
  CreatedByUserId?: number | undefined
  Description?: string | undefined
  EdgeTemplate?: boolean | undefined
  EntryPoint?: string | undefined
  GitConfig?: GittypesRepoConfig | undefined
  Id?: number | undefined
  IsComposeFormat?: boolean | undefined
  Logo?: string | undefined
  Note?: string | undefined
  Platform?: {} | undefined
  ProjectPath?: string | undefined
  ResourceControl?: PortainerResourceControl | undefined
  Title?: string | undefined
  Type?: {} | undefined
  Variables?: PortainerCustomTemplateVariableDefinition[] | undefined
  artifact?: PortainerArtifact | undefined
}
type CustomtemplatesCustomTemplateUpdatePayload = {
  ComposeFilePathInRepository?: string | undefined
  Description: string
  EdgeTemplate?: boolean | undefined
  FileContent: string
  IsComposeFormat?: boolean | undefined
  Logo?: string | undefined
  Note?: string | undefined
  Platform?: {} | undefined
  RepositoryAuthentication?: boolean | undefined
  RepositoryPassword?: string | undefined
  RepositoryReferenceName?: string | undefined
  RepositoryURL?: string | undefined
  RepositoryUsername?: string | undefined
  SourceID?: number | undefined
  TLSSkipVerify?: boolean | undefined
  Title: string
  Type: {}
  Variables?: PortainerCustomTemplateVariableDefinition[] | undefined
}
type CustomtemplatesFileResponse = { FileContent?: string | undefined }
type CustomtemplatesCustomTemplateFromGitRepositoryPayload = {
  ComposeFilePathInRepository?: string | undefined
  Description: string
  EdgeTemplate?: boolean | undefined
  IsComposeFormat?: boolean | undefined
  Logo?: string | undefined
  Note?: string | undefined
  Platform?: {} | undefined
  RepositoryAuthentication?: boolean | undefined
  RepositoryPassword?: string | undefined
  RepositoryReferenceName?: string | undefined
  RepositoryURL?: string | undefined
  RepositoryUsername?: string | undefined
  SourceID: number
  TLSSkipVerify?: boolean | undefined
  Title: string
  Type: {}
  Variables?: PortainerCustomTemplateVariableDefinition[] | undefined
}
type CustomtemplatesCustomTemplateFromFileContentPayload = {
  Description: string
  EdgeTemplate?: boolean | undefined
  FileContent: string
  Logo?: string | undefined
  Note?: string | undefined
  Platform?: {} | undefined
  Title: string
  Type: {}
  Variables?: PortainerCustomTemplateVariableDefinition[] | undefined
}
type ContainersContainerGpusResponse = { gpus?: string | undefined }
type StatsContainerStats = {
  healthy?: number | undefined
  running?: number | undefined
  stopped?: number | undefined
  total?: number | undefined
  unhealthy?: number | undefined
}
type DockerImagesCounters = { size?: number | undefined; total?: number | undefined }
type DockerDashboardResponse = {
  containers?: StatsContainerStats | undefined
  images?: DockerImagesCounters | undefined
  networks?: number | undefined
  services?: number | undefined
  stacks?: number | undefined
  volumes?: number | undefined
}
type ImagesImageResponse = {
  created?: number | undefined
  id?: string | undefined
  nodeName?: string | undefined
  size?: number | undefined
  tags?: string[] | undefined
  used?: boolean | undefined
}
type PortainerEndpointType = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7
type EdgegroupsDecoratedEdgeGroup = {
  Dynamic?: boolean | undefined
  EndpointIds?: number | undefined
  EndpointTypes?: PortainerEndpointType[] | undefined
  Endpoints?: number[] | undefined
  HasEdgeJob?: boolean | undefined
  HasEdgeStack?: boolean | undefined
  Id?: number | undefined
  Name?: string | undefined
  PartialMatch?: boolean | undefined
  TagIds?: number[] | undefined
  TrustedEndpoints?: number[] | undefined
}
type EdgegroupsEdgeGroupCreatePayload = {
  Dynamic?: boolean | undefined
  Endpoints?: number[] | undefined
  Name?: string | undefined
  PartialMatch?: boolean | undefined
  TagIDs?: number[] | undefined
}
type RoarRoarPortainerEndpointID = { [x: string]: unknown }
type PortainerEdgeGroup = {
  Dynamic?: boolean | undefined
  EndpointIds?: RoarRoarPortainerEndpointID | undefined
  Endpoints?: number[] | undefined
  Id?: number | undefined
  Name?: string | undefined
  PartialMatch?: boolean | undefined
  TagIds?: number[] | undefined
}
type EdgegroupsEdgeGroupUpdatePayload = {
  Dynamic?: boolean | undefined
  Endpoints?: number[] | undefined
  Name?: string | undefined
  PartialMatch?: boolean | undefined
  TagIDs?: number[] | undefined
}
type PortainerEdgeJobLogsStatus = 0 | 1 | 2 | 3
type PortainerEdgeJobEndpointMeta = {
  CollectLogs?: boolean | undefined
  LogsStatus?: PortainerEdgeJobLogsStatus | undefined
}
type PortainerEdgeJob = {
  Created?: number | undefined
  CronExpression?: string | undefined
  EdgeGroups?: number[] | undefined
  Endpoints?: { [x: string]: PortainerEdgeJobEndpointMeta } | undefined
  GroupLogsCollection?: { [x: string]: PortainerEdgeJobEndpointMeta } | undefined
  Id?: number | undefined
  Name?: string | undefined
  Recurring?: boolean | undefined
  ScriptPath?: string | undefined
  Version?: number | undefined
}
type EdgejobsEdgeJobUpdatePayload = {
  CronExpression?: string | undefined
  EdgeGroups?: number[] | undefined
  Endpoints?: number[] | undefined
  FileContent?: string | undefined
  Name?: string | undefined
  Recurring?: boolean | undefined
}
type EdgejobsEdgeJobFileResponse = { FileContent?: string | undefined }
type EdgejobsTaskContainer = {
  EndpointId?: number | undefined
  EndpointName?: string | undefined
  Id?: string | undefined
  LogsStatus?: PortainerEdgeJobLogsStatus | undefined
}
type EdgejobsFileResponse = { FileContent?: string | undefined }
type EdgejobsEdgeJobCreateFromFileContentPayload = {
  CronExpression?: string | undefined
  EdgeGroups?: number[] | undefined
  Endpoints?: number[] | undefined
  FileContent?: string | undefined
  Name?: string | undefined
  Recurring?: boolean | undefined
}
type PortainerEdgeStackDeploymentType = 0 | 1
type PortainerEdgeStackStatusType = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13
type PortainerEdgeStackDeploymentStatus = {
  Error?: string | undefined
  RollbackTo?: number | undefined
  Time?: bigint | undefined
  Type?: PortainerEdgeStackStatusType | undefined
  Version?: number | undefined
}
type PortainerEdgeStackStatus = {
  DeploymentInfo?:
    | {
        AdditionalFiles?: string[] | undefined
        ConfigFilePath?: string | undefined
        ConfigHash?: string | undefined
        FileVersion?: number | undefined
        ReferenceName?: string | undefined
        RepositoryURL?: string | undefined
        SourceID?: number | undefined
        Version?: number | undefined
      }
    | undefined
  Details?:
    | {
        Acknowledged?: boolean | undefined
        Error?: boolean | undefined
        ImagesPulled?: boolean | undefined
        Ok?: boolean | undefined
        Pending?: boolean | undefined
        RemoteUpdateSuccess?: boolean | undefined
        Remove?: boolean | undefined
      }
    | undefined
  EndpointID?: number | undefined
  Error?: string | undefined
  ReadyRePullImage?: boolean | undefined
  Status?: PortainerEdgeStackDeploymentStatus[] | undefined
  Type?: {} | undefined
}
type PortainerEdgeStack = {
  CreatedBy?: string | undefined
  CreatedByUserId?: string | undefined
  CreationDate?: number | undefined
  DeploymentType?: PortainerEdgeStackDeploymentType | undefined
  EdgeGroups?: number[] | undefined
  EntryPoint?: string | undefined
  Id?: number | undefined
  ManifestPath?: string | undefined
  Name?: string | undefined
  NumDeployments?: number | undefined
  ProjectPath?: string | undefined
  Status?: { [x: string]: PortainerEdgeStackStatus } | undefined
  UseManifestNamespaces?: boolean | undefined
  Version?: number | undefined
}
type EdgestacksUpdateEdgeStackPayload = {
  DeploymentType?: PortainerEdgeStackDeploymentType | undefined
  EdgeGroups?: number[] | undefined
  StackFileContent?: string | undefined
  UpdateVersion?: boolean | undefined
  UseManifestNamespaces?: boolean | undefined
}
type EdgestacksStackFileResponse = { StackFileContent?: string | undefined }
type EdgestacksUpdateStatusPayload = {
  EndpointID?: number | undefined
  Error?: string | undefined
  Status?: PortainerEdgeStackStatusType | undefined
  Time?: bigint | undefined
  Version?: number | undefined
}
type EdgestacksEdgeStackFromGitRepositoryPayload = {
  DeploymentType?: {} | undefined
  EdgeGroups: number[]
  FilePathInRepository?: string | undefined
  Name: string
  Registries?: number[] | undefined
  RepositoryAuthentication?: boolean | undefined
  RepositoryPassword?: string | undefined
  RepositoryReferenceName?: string | undefined
  RepositoryURL?: string | undefined
  RepositoryUsername?: string | undefined
  SourceID?: number | undefined
  TLSSkipVerify?: boolean | undefined
  UseManifestNamespaces?: boolean | undefined
}
type EdgestacksEdgeStackFromStringPayload = {
  DeploymentType?: {} | undefined
  EdgeGroups?: number[] | undefined
  Name: string
  Registries?: number[] | undefined
  StackFileContent: string
  UseManifestNamespaces?: boolean | undefined
}
type PortainerAccessPolicy = { Namespaces?: string[] | undefined; RoleId: number }
type PortainerTeamAccessPolicies = { [x: string]: PortainerAccessPolicy }
type EndpointgroupsEndpointGroupTypeInfo = {
  Docker: number
  Kubernetes: number
  Mixed: boolean
  Podman: number
}
type PortainerUserAccessPolicies = { [x: string]: PortainerAccessPolicy }
type EndpointgroupsEndpointGroupResponse = {
  Description: string
  Id: number
  Name: string
  TagIds?: number[] | undefined
  TeamAccessPolicies?: PortainerTeamAccessPolicies | undefined
  Total?: number | undefined
  TypeInfo?: EndpointgroupsEndpointGroupTypeInfo | undefined
  UserAccessPolicies?: PortainerUserAccessPolicies | undefined
}
type EndpointgroupsEndpointGroupCreatePayload = {
  AssociatedEndpoints?: number[] | undefined
  Description?: string | undefined
  Name: string
  TagIDs?: number[] | undefined
}
type PortainerEndpointGroup = {
  Description: string
  Id: number
  Name: string
  TagIds?: number[] | undefined
  TeamAccessPolicies?: PortainerTeamAccessPolicies | undefined
  UserAccessPolicies?: PortainerUserAccessPolicies | undefined
}
type EndpointgroupsEndpointGroupUpdatePayload = {
  AssociatedEndpoints?: number[] | undefined
  Description?: string | undefined
  Name?: string | undefined
  TagIDs?: number[] | undefined
  TeamAccessPolicies?: PortainerTeamAccessPolicies | undefined
  UserAccessPolicies?: PortainerUserAccessPolicies | undefined
}
type EndpointsEndpointDeleteRequest = {
  deleteCluster?: boolean | undefined
  id?: number | undefined
}
type EndpointsEndpointDeleteBatchPayload = {
  endpoints?: EndpointsEndpointDeleteRequest[] | undefined
}
type EndpointsEndpointDeleteBatchPartialResponse = {
  deleted?: number[] | undefined
  errors?: number[] | undefined
}
type PortainerEnvironmentAgentData = { Version?: string | undefined }
type PortainerAzureCredentials = {
  ApplicationID: string
  AuthenticationKey: string
  TenantID: string
}
type PortainerEnvironmentEdgeSettings = {
  AsyncMode: boolean
  CommandInterval: number
  PingInterval: number
  SnapshotInterval: number
}
type PortainerPair = { name: string; value: string }
type PortainerKubernetesIngressClassConfig = {
  Blocked?: boolean | undefined
  BlockedNamespaces?: string[] | undefined
  Name: string
  Type: string
}
type PortainerKubernetesStorageClassConfig = {
  AccessModes?: string[] | undefined
  AllowVolumeExpansion: boolean
  Name: string
  Provisioner: string
}
type PortainerKubernetesConfiguration = {
  AllowNoneIngressClass: boolean
  EnableResourceOverCommit?: boolean | undefined
  IngressAvailabilityPerNamespace: boolean
  IngressClasses?: PortainerKubernetesIngressClassConfig[] | undefined
  ResourceOverCommitPercentage?: number | undefined
  RestrictDefaultNamespace?: boolean | undefined
  StorageClasses?: PortainerKubernetesStorageClassConfig[] | undefined
  UseLoadBalancer?: boolean | undefined
  UseServerMetrics?: boolean | undefined
}
type PortainerKubernetesFlags = {
  GPUOperator?: boolean | undefined
  IsServerIngressClassDetected: boolean
  IsServerMetricsDetected: boolean
  IsServerStorageDetected: boolean
}
type PortainerDiagnosticsData = {
  DNS?: { [x: string]: string } | undefined
  Log?: string | undefined
  Proxy?: { [x: string]: string } | undefined
  Telnet?: { [x: string]: string } | undefined
}
type PortainerPerformanceMetrics = {
  CPUUsage?: number | undefined
  DiskUsage?: number | undefined
  MemoryUsage?: number | undefined
  NetworkUsage?: number | undefined
}
type PortainerKubernetesSnapshot = {
  ClusterType?: string | undefined
  DiagnosticsData?: PortainerDiagnosticsData | undefined
  GPUNodeCount?: number | undefined
  KubernetesVersion: string
  NodeCount: number
  PerformanceMetrics?: PortainerPerformanceMetrics | undefined
  Time: number
  TotalCPU: number
  TotalGPU?: { [x: string]: bigint } | undefined
  TotalMemory: number
}
type PortainerDockerSnapshotRaw = { [x: string]: unknown }
type PortainerDockerSnapshot = {
  ContainerCount: number
  DiagnosticsData?: PortainerDiagnosticsData | undefined
  DockerSnapshotRaw?: PortainerDockerSnapshotRaw | undefined
  DockerVersion: string
  GpuUseAll: boolean
  GpuUseList?: string[] | undefined
  HealthyContainerCount: number
  ImageCount: number
  IsPodman: boolean
  NodeCount: number
  PerformanceMetrics?: PortainerPerformanceMetrics | undefined
  RunningContainerCount: number
  ServiceCount: number
  StackCount: number
  StoppedContainerCount: number
  Swarm: boolean
  Time: number
  TotalCPU: number
  TotalMemory: number
  UnhealthyContainerCount: number
  VolumeCount: number
}
type PortainerTLSConfiguration = {
  TLS: boolean
  TLSCACert?: string | undefined
  TLSCert?: string | undefined
  TLSKey?: string | undefined
  TLSSkipVerify: boolean
}
type PortainerEndpoint = {
  Agent: PortainerEnvironmentAgentData
  AzureCredentials?: PortainerAzureCredentials | undefined
  ComposeSyntaxMaxVersion: string
  ContainerEngine: string
  Edge: PortainerEnvironmentEdgeSettings
  EdgeCheckinInterval: number
  EdgeID?: string | undefined
  EdgeKey: string
  EnableGPUManagement?: boolean | undefined
  Gpus?: PortainerPair[] | undefined
  GroupId: number
  Heartbeat?: boolean | undefined
  Id: number
  Kubernetes: {
    Configuration: PortainerKubernetesConfiguration
    Flags: PortainerKubernetesFlags
    Snapshots?: PortainerKubernetesSnapshot[] | undefined
  }
  LastCheckInDate: number
  Name: string
  PublicURL: string
  SecuritySettings: {
    allowBindMountsForRegularUsers: boolean
    allowContainerCapabilitiesForRegularUsers: boolean
    allowDeviceMappingForRegularUsers: boolean
    allowHostNamespaceForRegularUsers: boolean
    allowPrivilegedModeForRegularUsers: boolean
    allowSecurityOptForRegularUsers: boolean
    allowStackManagementForRegularUsers: boolean
    allowSysctlSettingForRegularUsers: boolean
    allowVolumeBrowserForRegularUsers: boolean
    enableHostManagementFeatures: boolean
  }
  Snapshots?: PortainerDockerSnapshot[] | undefined
  Status?: {} | undefined
  TLSConfig: PortainerTLSConfiguration
  TagIds?: number[] | undefined
  TeamAccessPolicies?: {} | undefined
  Type: {}
  URL: string
  UserAccessPolicies?: {} | undefined
  UserTrusted?: boolean | undefined
}
type EndpointsEndpointUpdatePayload = {
  AzureApplicationID?: string | undefined
  AzureAuthenticationKey?: string | undefined
  AzureTenantID?: string | undefined
  EdgeCheckinInterval?: number | undefined
  Gpus?: PortainerPair[] | undefined
  GroupID?: number | undefined
  Kubernetes?:
    | {
        Configuration: PortainerKubernetesConfiguration
        Flags: PortainerKubernetesFlags
        Snapshots?: PortainerKubernetesSnapshot[] | undefined
      }
    | undefined
  Name?: string | undefined
  PublicURL?: string | undefined
  Status?: number | undefined
  TLS?: boolean | undefined
  TLSSkipClientVerify?: boolean | undefined
  TLSSkipVerify?: boolean | undefined
  TagIDs?: number[] | undefined
  TeamAccessPolicies?: PortainerTeamAccessPolicies | undefined
  URL?: string | undefined
  UserAccessPolicies?: PortainerUserAccessPolicies | undefined
}
type EndpointsDockerhubStatusResponse = {
  limit?: number | undefined
  remaining?: number | undefined
}
type EdgeDeployerOptionsPayload = {
  ForceRecreate?: boolean | undefined
  Prune?: boolean | undefined
  RemoveVolumes?: boolean | undefined
}
type FilesystemDirEntry = {
  Content?: string | undefined
  IsFile?: boolean | undefined
  Name?: string | undefined
  Permissions?: number | undefined
}
type EdgeRegistryCredentials = {
  Secret?: string | undefined
  ServerURL?: string | undefined
  Username?: string | undefined
}
type EdgeStackPayload = {
  AlwaysCloneGitRepoForRelativePath?: boolean | undefined
  CreatedBy?: string | undefined
  CreatedByUserId?: string | undefined
  DeployerOptionsPayload?: EdgeDeployerOptionsPayload | undefined
  DirEntries?: FilesystemDirEntry[] | undefined
  EdgeUpdateID?: number | undefined
  EntryFileName?: string | undefined
  EnvVars?: PortainerPair[] | undefined
  FilesystemPath?: string | undefined
  ForceUpdate?: boolean | undefined
  HelmConfig?:
    | {
        Atomic?: boolean | undefined
        ChartName?: string | undefined
        ChartPath?: string | undefined
        ChartURL?: string | undefined
        ChartVersion?: string | undefined
        Namespace?: string | undefined
        Timeout?: string | undefined
        ValuesFiles?: string[] | undefined
        ValuesInline?: string | undefined
      }
    | undefined
  ID?: number | undefined
  Name?: string | undefined
  Namespace?: string | undefined
  PrePullImage?: boolean | undefined
  RePullImage?: boolean | undefined
  ReadyRePullImage?: boolean | undefined
  RegistryCredentials?: EdgeRegistryCredentials[] | undefined
  RetryDeploy?: boolean | undefined
  RetryPeriod?: number | undefined
  RollbackTo?: number | undefined
  StackFileContent?: string | undefined
  SupportPerDeviceConfigs?: boolean | undefined
  SupportRelativePath?: boolean | undefined
  Version?: number | undefined
}
type EndpointedgeEdgeJobResponse = {
  CollectLogs?: boolean | undefined
  CronExpression?: string | undefined
  Id?: number | undefined
  Script?: string | undefined
  Version?: number | undefined
}
type EndpointedgeStackStatusResponse = { ID?: number | undefined; Version?: number | undefined }
type EndpointedgeEndpointEdgeStatusInspectResponse = {
  checkin?: number | undefined
  credentials?: string | undefined
  port?: number | undefined
  schedules?: EndpointedgeEdgeJobResponse[] | undefined
  stacks?: EndpointedgeStackStatusResponse[] | undefined
  status?: string | undefined
}
type EndpointsForceUpdateServicePayload = {
  PullImage?: boolean | undefined
  ServiceID?: string | undefined
}
type SwarmServiceUpdateResponse = { Warnings?: string[] | undefined }
type ReleaseReleaseElement = {
  appVersion?: string | undefined
  chart?: string | undefined
  name?: string | undefined
  namespace?: string | undefined
  revision?: string | undefined
  status?: string | undefined
  updated?: string | undefined
}
type HelmInstallChartPayload = {
  atomic?: boolean | undefined
  chart?: string | undefined
  name?: string | undefined
  namespace?: string | undefined
  repo?: string | undefined
  values?: string | undefined
  version?: string | undefined
}
type ReleaseFile = { data?: number[] | undefined; name?: string | undefined }
type ReleaseDependency = {
  alias?: string | undefined
  condition?: string | undefined
  enabled?: boolean | undefined
  'import-values'?: { [x: string]: unknown }[] | undefined
  name?: string | undefined
  repository?: string | undefined
  tags?: string[] | undefined
  version?: string | undefined
}
type ReleaseMaintainer = {
  email?: string | undefined
  name?: string | undefined
  url?: string | undefined
}
type GithubComPortainerPortainerPkgLibhelmReleaseHook = {
  delete_policies?: string[] | undefined
  events?: string[] | undefined
  kind?: string | undefined
  last_run?:
    | {
        completed_at?: string | undefined
        phase?: string | undefined
        started_at?: string | undefined
      }
    | undefined
  manifest?: string | undefined
  name?: string | undefined
  path?: string | undefined
  weight?: number | undefined
}
type UnstructuredUnstructured = { Object?: { [x: string]: unknown } | undefined }
type ReleaseRelease = {
  appVersion?: string | undefined
  chart?:
    | {
        files?: ReleaseFile[] | undefined
        lock?:
          | {
              dependencies?: ReleaseDependency[] | undefined
              digest?: string | undefined
              generated?: string | undefined
            }
          | undefined
        metadata?:
          | {
              annotations?: { [x: string]: string } | undefined
              apiVersion?: string | undefined
              appVersion?: string | undefined
              condition?: string | undefined
              dependencies?: ReleaseDependency[] | undefined
              deprecated?: boolean | undefined
              description?: string | undefined
              home?: string | undefined
              icon?: string | undefined
              keywords?: string[] | undefined
              kubeVersion?: string | undefined
              maintainers?: ReleaseMaintainer[] | undefined
              name?: string | undefined
              sources?: string[] | undefined
              tags?: string | undefined
              type?: string | undefined
              version?: string | undefined
            }
          | undefined
        schema?: number[] | undefined
        templates?: ReleaseFile[] | undefined
        values?: { [x: string]: { [x: string]: unknown } } | undefined
      }
    | undefined
  chartReference?:
    | {
        chartPath?: string | undefined
        registryID?: number | undefined
        repoURL?: string | undefined
      }
    | undefined
  config?: { [x: string]: { [x: string]: unknown } } | undefined
  hooks?: GithubComPortainerPortainerPkgLibhelmReleaseHook[] | undefined
  info?:
    | {
        deleted?: string | undefined
        description?: string | undefined
        first_deployed?: string | undefined
        last_deployed?: string | undefined
        notes?: string | undefined
        resources?: UnstructuredUnstructured[] | undefined
        status?: string | undefined
      }
    | undefined
  manifest?: string | undefined
  name?: string | undefined
  namespace?: string | undefined
  stackID?: number | undefined
  values?:
    | { computedValues?: string | undefined; userSuppliedValues?: string | undefined }
    | undefined
  version?: number | undefined
}
type PortainerEcrData = { Region?: string | undefined }
type PortainerGithubRegistryData = {
  OrganisationName?: string | undefined
  UseOrganisation?: boolean | undefined
}
type PortainerGitlabRegistryData = {
  InstanceURL?: string | undefined
  ProjectId?: number | undefined
  ProjectPath?: string | undefined
}
type PortainerRegistryType = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8
type PortainerRegistryManagementConfiguration = {
  AccessToken?: string | undefined
  AccessTokenExpiry?: number | undefined
  Authentication?: boolean | undefined
  Ecr?: PortainerEcrData | undefined
  Password?: string | undefined
  TLSConfig?: PortainerTLSConfiguration | undefined
  Type?: PortainerRegistryType | undefined
  Username?: string | undefined
}
type PortainerQuayRegistryData = {
  OrganisationName?: string | undefined
  UseOrganisation?: boolean | undefined
}
type PortainerRegistryAccessPolicies = {
  Namespaces?: string[] | undefined
  TeamAccessPolicies?: PortainerTeamAccessPolicies | undefined
  UserAccessPolicies?: {} | undefined
}
type PortainerRegistryAccesses = { [x: string]: PortainerRegistryAccessPolicies }
type PortainerRegistry = {
  AccessToken?: string | undefined
  AccessTokenExpiry?: number | undefined
  Authentication?: boolean | undefined
  AuthorizedTeams?: number[] | undefined
  AuthorizedUsers?: number[] | undefined
  BaseURL?: string | undefined
  Ecr?: PortainerEcrData | undefined
  Github?: PortainerGithubRegistryData | undefined
  Gitlab?: PortainerGitlabRegistryData | undefined
  Id?: number | undefined
  ManagementConfiguration?: PortainerRegistryManagementConfiguration | undefined
  Name?: string | undefined
  Password?: string | undefined
  Quay?: PortainerQuayRegistryData | undefined
  RegistryAccesses?: PortainerRegistryAccesses | undefined
  TeamAccessPolicies?: {} | undefined
  Type?: {} | undefined
  URL?: string | undefined
  UserAccessPolicies?: {} | undefined
  Username?: string | undefined
}
type EndpointsRegistryAccessPayload = {
  Namespaces?: string[] | undefined
  TeamAccessPolicies?: PortainerTeamAccessPolicies | undefined
  UserAccessPolicies?: PortainerUserAccessPolicies | undefined
}
type EndpointsEndpointSettingsUpdatePayload = {
  allowBindMountsForRegularUsers?: boolean | undefined
  allowContainerCapabilitiesForRegularUsers?: boolean | undefined
  allowDeviceMappingForRegularUsers?: boolean | undefined
  allowHostNamespaceForRegularUsers?: boolean | undefined
  allowPrivilegedModeForRegularUsers?: boolean | undefined
  allowSecurityOptForRegularUsers?: boolean | undefined
  allowStackManagementForRegularUsers?: boolean | undefined
  allowSysctlSettingForRegularUsers?: boolean | undefined
  allowVolumeBrowserForRegularUsers?: boolean | undefined
  enableGPUManagement?: boolean | undefined
  enableHostManagementFeatures?: boolean | undefined
  gpus?: PortainerPair[] | undefined
}
type EndpointsEndpointCreateGlobalKeyResponse = { endpointID?: number | undefined }
type EndpointsEndpointUpdateRelationsPayload = {
  Relations?:
    | {
        [x: string]: {
          EdgeGroups?: number[] | undefined
          Group?: number | undefined
          Tags?: number[] | undefined
        }
      }
    | undefined
}
type EndpointsGroupCount = {
  count?: number | undefined
  groupID?: number | undefined
  groupName?: string | undefined
}
type EndpointsHealthCounts = {
  down?: number | undefined
  heartbeat?: number | undefined
  outdated?: number | undefined
  up?: number | undefined
}
type EndpointsPlatformCounts = {
  azure?: number | undefined
  docker?: number | undefined
  kubernetes?: number | undefined
  podman?: number | undefined
}
type EndpointsEnvironmentSummaryCountsResponse = {
  byGroup?: EndpointsGroupCount[] | undefined
  byHealth?: EndpointsHealthCounts | undefined
  byPlatformType?: EndpointsPlatformCounts | undefined
  down?: number | undefined
  outdated?: number | undefined
  total?: number | undefined
  unassigned?: number | undefined
  up?: number | undefined
}
type GitopsRepositoryFilePreviewPayload = {
  password?: string | undefined
  reference?: string | undefined
  repository?: string | undefined
  sourceID?: number | undefined
  targetFile?: string | undefined
  tlsSkipVerify?: boolean | undefined
  username?: string | undefined
}
type GitopsFileResponse = { FileContent?: string | undefined }
type WorkflowsStatus = 'healthy' | 'syncing' | 'error' | 'paused' | 'unknown'
type SourcesSourceType = 'git' | 'helm' | 'oci'
type SourcesSource = {
  environments?: number | undefined
  error?: string | undefined
  id: number
  interval?: string | undefined
  lastSync?: number | undefined
  name: string
  status: WorkflowsStatus
  type: SourcesSourceType
  url: string
  usedBy?: number | undefined
}
type SourcesSourceAccess = {
  public?: boolean | undefined
  teams?: number[] | undefined
  users?: number[] | undefined
}
type SourcesGitAuthInfo = { username?: string | undefined }
type SourcesConnectionInfo = {
  authentication?: SourcesGitAuthInfo | undefined
  tlsSkipVerify?: boolean | undefined
}
type SourcesSourceDetail = {
  access?: SourcesSourceAccess | undefined
  connection: SourcesConnectionInfo
  error?: string | undefined
  id: number
  interval?: string | undefined
  lastSync?: number | undefined
  name: string
  status: WorkflowsStatus
  type: SourcesSourceType
  url: string
}
type SourcesGitAuthenticationUpdatePayload = {
  password?: string | undefined
  username?: string | undefined
}
type SourcesGitSourceUpdatePayload = {
  authentication?: SourcesGitAuthenticationUpdatePayload | undefined
  interval?: string | undefined
  name?: string | undefined
  tlsSkipVerify?: boolean | undefined
  url?: string | undefined
}
type GittypesGitAuthentication = {
  AuthorizationType?: number | undefined
  GitCredentialID?: number | undefined
  Password?: string | undefined
  Provider?: number | undefined
  Username?: string | undefined
}
type GittypesGitSource = {
  Authentication?: GittypesGitAuthentication | undefined
  TLSSkipVerify?: boolean | undefined
  URL?: string | undefined
}
type PortainerHelmConfig = {
  Atomic?: boolean | undefined
  ChartName?: string | undefined
  ChartPath?: string | undefined
  ChartURL?: string | undefined
  ChartVersion?: string | undefined
  Namespace?: string | undefined
  Timeout?: string | undefined
  ValuesFiles?: string[] | undefined
  ValuesInline?: string | undefined
}
type PortainerSource = {
  administratorsOnly?: boolean | undefined
  git?: GittypesGitSource | undefined
  helm?: PortainerHelmConfig | undefined
  id?: number | undefined
  interval?: string | undefined
  lastSync?: number | undefined
  name?: string | undefined
  ownerID?: number | undefined
  public?: boolean | undefined
  registry?: PortainerRegistry | undefined
  status?: PortainerSourceStatus | undefined
  statusError?: string | undefined
  teamAccesses?: number[] | undefined
  type?: {} | undefined
  userAccesses?: number[] | undefined
}
type SourcesSourceAccessUpdatePayload = {
  public?: boolean | undefined
  teams?: number[] | undefined
  users?: number[] | undefined
}
type SourcesConnectionTestResult = { error?: string | undefined; success?: boolean | undefined }
type WorkflowsDeploymentPlatform = 'dockerStandalone' | 'dockerSwarm' | 'kubernetes'
type WorkflowsWorkflowPhaseStatus = {
  error?: string | undefined
  status?: WorkflowsStatus | undefined
}
type WorkflowsWorkflowStatusObject = {
  artifact?: WorkflowsWorkflowPhaseStatus | undefined
  source?: WorkflowsWorkflowPhaseStatus | undefined
  target?: WorkflowsWorkflowPhaseStatus | undefined
}
type WorkflowsTarget = {
  edgeGroupIds?: number[] | undefined
  endpointId?: number | undefined
  groupStatus?: { [x: string]: WorkflowsStatus } | undefined
  namespace?: string | undefined
  resolvedEndpointIds?: number[] | undefined
}
type WorkflowsType = 'stack' | 'edgeStack'
type SourcesWorkflow = {
  creationDate?: number | undefined
  gitConfig?: GittypesRepoConfig | undefined
  id: number
  lastSyncDate?: number | undefined
  name: string
  platform: WorkflowsDeploymentPlatform
  sourceId?: number | undefined
  status: WorkflowsWorkflowStatusObject
  target: WorkflowsTarget
  type: WorkflowsType
}
type SourcesGitAuthenticationPayload = {
  password?: string | undefined
  username?: string | undefined
}
type SourcesGitSourceCreatePayload = {
  administratorsOnly?: boolean | undefined
  authentication?: SourcesGitAuthenticationPayload | undefined
  interval?: string | undefined
  name?: string | undefined
  public?: boolean | undefined
  teamAccesses?: number[] | undefined
  tlsSkipVerify?: boolean | undefined
  url: string
  userAccesses?: number[] | undefined
}
type WorkflowsStatusSummary = {
  error?: number | undefined
  healthy?: number | undefined
  paused?: number | undefined
  syncing?: number | undefined
  unknown?: number | undefined
}
type PortainerAutoUpdateSettings = {
  ForcePullImage?: boolean | undefined
  ForceUpdate?: boolean | undefined
  Interval?: string | undefined
  JobID?: string | undefined
  Webhook?: string | undefined
}
type SourcesStatus = 'unknown' | 'healthy' | 'error'
type WorkflowsArtifactFileDetail = {
  hash?: string | undefined
  path?: string | undefined
  pathError?: string | undefined
  pathStatus?: SourcesStatus | undefined
  ref?: string | undefined
  refError?: string | undefined
  refStatus?: SourcesStatus | undefined
  sourceId?: number | undefined
}
type WorkflowsArtifactDetail = {
  autoUpdate?: PortainerAutoUpdateSettings | undefined
  creationDate?: number | undefined
  files?: WorkflowsArtifactFileDetail[] | undefined
  id: number
  lastSyncDate?: number | undefined
  name: string
  platform?: WorkflowsDeploymentPlatform | undefined
  status?: WorkflowsWorkflowStatusObject | undefined
  target?: WorkflowsTarget | undefined
  type: WorkflowsType
}
type WorkflowsWorkflow = {
  artifacts?: WorkflowsArtifactDetail[] | undefined
  creationDate?: number | undefined
  id: number
  lastSyncDate?: number | undefined
  name: string
  status: WorkflowsWorkflowStatusObject
}
type KubernetesConfiguration = {
  ConfigurationOwner?: string | undefined
  Data?: { [x: string]: { [x: string]: unknown } } | undefined
  Kind?: string | undefined
}
type KubernetesCustomResourceMetadata = {
  apiVersion?: string | undefined
  kind?: string | undefined
  name?: string | undefined
  plural?: string | undefined
  scope?: string | undefined
}
type KubernetesMetadata = {
  annotations?: { [x: string]: string } | undefined
  labels?: { [x: string]: string } | undefined
}
type KubernetesK8sApplicationResource = {
  CpuLimit?: number | undefined
  CpuRequest?: number | undefined
  MemoryLimit?: number | undefined
  MemoryRequest?: number | undefined
}
type KubernetesPod = {
  ContainerName?: string | undefined
  CreationDate?: string | undefined
  Image?: string | undefined
  ImagePullPolicy?: string | undefined
  Name?: string | undefined
  NodeName?: string | undefined
  PodIP?: string | undefined
  Resource?: KubernetesK8sApplicationResource | undefined
  Status?: string | undefined
  Uid?: string | undefined
}
type KubernetesTLSInfo = { hosts?: string[] | undefined }
type KubernetesIngressRule = {
  Host?: string | undefined
  IP?: string | undefined
  Path?: string | undefined
  TLS?: KubernetesTLSInfo[] | undefined
}
type KubernetesPublishedPort = {
  IngressRules?: KubernetesIngressRule[] | undefined
  Port?: number | undefined
}
type KubernetesK8sApplication = {
  Annotations?: { [x: string]: string } | undefined
  ApplicationOwner?: string | undefined
  ApplicationType?: string | undefined
  Configurations?: KubernetesConfiguration[] | undefined
  Containers?: { [x: string]: unknown }[] | undefined
  CreationDate?: string | undefined
  CustomResourceMetadata?: KubernetesCustomResourceMetadata | undefined
  DeploymentType?: string | undefined
  Id?: string | undefined
  Image?: string | undefined
  Kind?: string | undefined
  Labels?: { [x: string]: string } | undefined
  LoadBalancerIPAddress?: string | undefined
  MatchLabels?: { [x: string]: string } | undefined
  Metadata?: KubernetesMetadata | undefined
  Name?: string | undefined
  Namespace?: string | undefined
  Pods?: KubernetesPod[] | undefined
  PublishedPorts?: KubernetesPublishedPort[] | undefined
  Resource?: KubernetesK8sApplicationResource | undefined
  ResourcePool?: string | undefined
  RunningPodsCount?: number | undefined
  ServiceId?: string | undefined
  ServiceName?: string | undefined
  ServiceType?: string | undefined
  StackId?: string | undefined
  StackKind?: string | undefined
  StackName?: string | undefined
  Status?: string | undefined
  TotalPodsCount?: number | undefined
  Uid?: string | undefined
}
type V1RoleRef = {
  apiGroup?: string | undefined
  kind?: string | undefined
  name?: string | undefined
}
type K8sIoApiRbacV1Subject = {
  apiGroup?: string | undefined
  kind?: string | undefined
  name?: string | undefined
  namespace?: string | undefined
}
type KubernetesK8sClusterRoleBinding = {
  creationDate?: string | undefined
  isSystem?: boolean | undefined
  name?: string | undefined
  namespace?: string | undefined
  roleRef?: V1RoleRef | undefined
  subjects?: K8sIoApiRbacV1Subject[] | undefined
  uid?: string | undefined
}
type KubernetesK8sClusterRole = {
  creationDate?: string | undefined
  isSystem?: boolean | undefined
  name?: string | undefined
  uid?: string | undefined
}
type KubernetesK8sConfigurationOwnerResource = {
  Id?: string | undefined
  Name?: string | undefined
  ResourceKind?: string | undefined
}
type KubernetesK8sConfigMap = {
  Annotations?: { [x: string]: string } | undefined
  ConfigurationOwner?: string | undefined
  ConfigurationOwnerId?: string | undefined
  ConfigurationOwners?: KubernetesK8sConfigurationOwnerResource[] | undefined
  CreationDate?: string | undefined
  Data?: { [x: string]: string } | undefined
  IsUsed?: boolean | undefined
  Labels?: { [x: string]: string } | undefined
  Name?: string | undefined
  Namespace?: string | undefined
  UID?: string | undefined
}
type V1EnvVar = {
  name?: string | undefined
  value?: string | undefined
  valueFrom?:
    | {
        configMapKeyRef?:
          | { key?: string | undefined; name?: string | undefined; optional?: boolean | undefined }
          | undefined
        fieldRef?: { apiVersion?: string | undefined; fieldPath?: string | undefined } | undefined
        fileKeyRef?:
          | {
              key?: string | undefined
              optional?: boolean | undefined
              path?: string | undefined
              volumeName?: string | undefined
            }
          | undefined
        resourceFieldRef?:
          | {
              containerName?: string | undefined
              divisor?:
                | { Format?: 'DecimalExponent' | 'BinarySI' | 'DecimalSI' | undefined }
                | undefined
              resource?: string | undefined
            }
          | undefined
        secretKeyRef?:
          | { key?: string | undefined; name?: string | undefined; optional?: boolean | undefined }
          | undefined
      }
    | undefined
}
type V1EnvFromSource = {
  configMapRef?: { name?: string | undefined; optional?: boolean | undefined } | undefined
  prefix?: string | undefined
  secretRef?: { name?: string | undefined; optional?: boolean | undefined } | undefined
}
type K8sIoApiCoreV1HTTPHeader = { name?: string | undefined; value?: string | undefined }
type IntstrType = 0n | 1n
type V1ContainerPort = {
  containerPort?: number | undefined
  hostIP?: string | undefined
  hostPort?: number | undefined
  name?: string | undefined
  protocol?: {} | undefined
}
type V1ContainerResizePolicy = { resourceName?: {} | undefined; restartPolicy?: {} | undefined }
type K8sIoApiCoreV1ResourceClaim = { name?: string | undefined; request?: string | undefined }
type V1ContainerRestartRule = {
  action?: {} | undefined
  exitCodes?: { operator?: {} | undefined; values?: number[] | undefined } | undefined
}
type V1VolumeDevice = { devicePath?: string | undefined; name?: string | undefined }
type V1VolumeMount = {
  mountPath?: string | undefined
  mountPropagation?: {} | undefined
  name?: string | undefined
  readOnly?: boolean | undefined
  recursiveReadOnly?: {} | undefined
  subPath?: string | undefined
  subPathExpr?: string | undefined
}
type V1Container = {
  args?: string[] | undefined
  command?: string[] | undefined
  env?: V1EnvVar[] | undefined
  envFrom?: V1EnvFromSource[] | undefined
  image?: string | undefined
  imagePullPolicy?: {} | undefined
  lifecycle?:
    | {
        postStart?:
          | {
              exec?: { command?: string[] | undefined } | undefined
              httpGet?:
                | {
                    host?: string | undefined
                    httpHeaders?: K8sIoApiCoreV1HTTPHeader[] | undefined
                    path?: string | undefined
                    port?:
                      | {
                          IntVal?: number | undefined
                          StrVal?: string | undefined
                          Type?: IntstrType | undefined
                        }
                      | undefined
                    scheme?: {} | undefined
                  }
                | undefined
              sleep?: { seconds?: number | undefined } | undefined
              tcpSocket?:
                | {
                    host?: string | undefined
                    port?:
                      | {
                          IntVal?: number | undefined
                          StrVal?: string | undefined
                          Type?: IntstrType | undefined
                        }
                      | undefined
                  }
                | undefined
            }
          | undefined
        preStop?:
          | {
              exec?: { command?: string[] | undefined } | undefined
              httpGet?:
                | {
                    host?: string | undefined
                    httpHeaders?: K8sIoApiCoreV1HTTPHeader[] | undefined
                    path?: string | undefined
                    port?:
                      | {
                          IntVal?: number | undefined
                          StrVal?: string | undefined
                          Type?: IntstrType | undefined
                        }
                      | undefined
                    scheme?: {} | undefined
                  }
                | undefined
              sleep?: { seconds?: number | undefined } | undefined
              tcpSocket?:
                | {
                    host?: string | undefined
                    port?:
                      | {
                          IntVal?: number | undefined
                          StrVal?: string | undefined
                          Type?: IntstrType | undefined
                        }
                      | undefined
                  }
                | undefined
            }
          | undefined
        stopSignal?: {} | undefined
      }
    | undefined
  livenessProbe?:
    | {
        exec?: { command?: string[] | undefined } | undefined
        failureThreshold?: number | undefined
        grpc?: { port?: number | undefined; service?: string | undefined } | undefined
        httpGet?:
          | {
              host?: string | undefined
              httpHeaders?: K8sIoApiCoreV1HTTPHeader[] | undefined
              path?: string | undefined
              port?:
                | {
                    IntVal?: number | undefined
                    StrVal?: string | undefined
                    Type?: IntstrType | undefined
                  }
                | undefined
              scheme?: {} | undefined
            }
          | undefined
        initialDelaySeconds?: number | undefined
        periodSeconds?: number | undefined
        successThreshold?: number | undefined
        tcpSocket?:
          | {
              host?: string | undefined
              port?:
                | {
                    IntVal?: number | undefined
                    StrVal?: string | undefined
                    Type?: IntstrType | undefined
                  }
                | undefined
            }
          | undefined
        terminationGracePeriodSeconds?: number | undefined
        timeoutSeconds?: number | undefined
      }
    | undefined
  name?: string | undefined
  ports?: V1ContainerPort[] | undefined
  readinessProbe?:
    | {
        exec?: { command?: string[] | undefined } | undefined
        failureThreshold?: number | undefined
        grpc?: { port?: number | undefined; service?: string | undefined } | undefined
        httpGet?:
          | {
              host?: string | undefined
              httpHeaders?: K8sIoApiCoreV1HTTPHeader[] | undefined
              path?: string | undefined
              port?:
                | {
                    IntVal?: number | undefined
                    StrVal?: string | undefined
                    Type?: IntstrType | undefined
                  }
                | undefined
              scheme?: {} | undefined
            }
          | undefined
        initialDelaySeconds?: number | undefined
        periodSeconds?: number | undefined
        successThreshold?: number | undefined
        tcpSocket?:
          | {
              host?: string | undefined
              port?:
                | {
                    IntVal?: number | undefined
                    StrVal?: string | undefined
                    Type?: IntstrType | undefined
                  }
                | undefined
            }
          | undefined
        terminationGracePeriodSeconds?: number | undefined
        timeoutSeconds?: number | undefined
      }
    | undefined
  resizePolicy?: V1ContainerResizePolicy[] | undefined
  resources?:
    | {
        claims?: K8sIoApiCoreV1ResourceClaim[] | undefined
        limits?: {} | undefined
        requests?: {} | undefined
      }
    | undefined
  restartPolicy?: {} | undefined
  restartPolicyRules?: V1ContainerRestartRule[] | undefined
  securityContext?:
    | {
        allowPrivilegeEscalation?: boolean | undefined
        appArmorProfile?:
          | { localhostProfile?: string | undefined; type?: {} | undefined }
          | undefined
        capabilities?: { add?: string[] | undefined; drop?: string[] | undefined } | undefined
        privileged?: boolean | undefined
        procMount?: {} | undefined
        readOnlyRootFilesystem?: boolean | undefined
        runAsGroup?: number | undefined
        runAsNonRoot?: boolean | undefined
        runAsUser?: number | undefined
        seLinuxOptions?:
          | {
              level?: string | undefined
              role?: string | undefined
              type?: string | undefined
              user?: string | undefined
            }
          | undefined
        seccompProfile?:
          | { localhostProfile?: string | undefined; type?: {} | undefined }
          | undefined
        windowsOptions?:
          | {
              gmsaCredentialSpec?: string | undefined
              gmsaCredentialSpecName?: string | undefined
              hostProcess?: boolean | undefined
              runAsUserName?: string | undefined
            }
          | undefined
      }
    | undefined
  startupProbe?:
    | {
        exec?: { command?: string[] | undefined } | undefined
        failureThreshold?: number | undefined
        grpc?: { port?: number | undefined; service?: string | undefined } | undefined
        httpGet?:
          | {
              host?: string | undefined
              httpHeaders?: K8sIoApiCoreV1HTTPHeader[] | undefined
              path?: string | undefined
              port?:
                | {
                    IntVal?: number | undefined
                    StrVal?: string | undefined
                    Type?: IntstrType | undefined
                  }
                | undefined
              scheme?: {} | undefined
            }
          | undefined
        initialDelaySeconds?: number | undefined
        periodSeconds?: number | undefined
        successThreshold?: number | undefined
        tcpSocket?:
          | {
              host?: string | undefined
              port?:
                | {
                    IntVal?: number | undefined
                    StrVal?: string | undefined
                    Type?: IntstrType | undefined
                  }
                | undefined
            }
          | undefined
        terminationGracePeriodSeconds?: number | undefined
        timeoutSeconds?: number | undefined
      }
    | undefined
  stdin?: boolean | undefined
  stdinOnce?: boolean | undefined
  terminationMessagePath?: string | undefined
  terminationMessagePolicy?: {} | undefined
  tty?: boolean | undefined
  volumeDevices?: V1VolumeDevice[] | undefined
  volumeMounts?: V1VolumeMount[] | undefined
  workingDir?: string | undefined
}
type KubernetesK8sJob = {
  BackoffLimit?: number | undefined
  Command?: string | undefined
  Completions?: number | undefined
  Container?: V1Container | undefined
  Duration?: string | undefined
  FailedReason?: string | undefined
  FinishTime?: string | undefined
  Id?: string | undefined
  IsSystem?: boolean | undefined
  Name?: string | undefined
  Namespace?: string | undefined
  PodName?: string | undefined
  StartTime?: string | undefined
  Status?: string | undefined
}
type KubernetesK8sCronJob = {
  Command?: string | undefined
  Id?: string | undefined
  IsSystem?: boolean | undefined
  Jobs?: KubernetesK8sJob[] | undefined
  Name?: string | undefined
  Namespace?: string | undefined
  Schedule?: string | undefined
  Suspend?: boolean | undefined
  Timezone?: string | undefined
}
type KubernetesK8sCronJobDeleteRequests = { [x: string]: string[] }
type KubernetesK8sDashboard = {
  applicationsCount?: number | undefined
  configMapsCount?: number | undefined
  ingressesCount?: number | undefined
  namespacesCount?: number | undefined
  secretsCount?: number | undefined
  servicesCount?: number | undefined
  volumesCount?: number | undefined
}
type V1ManagedFieldsEntry = {
  apiVersion?: string | undefined
  fieldsType?: string | undefined
  fieldsV1?: {} | undefined
  manager?: string | undefined
  operation?: {} | undefined
  subresource?: string | undefined
  time?: string | undefined
}
type V1OwnerReference = {
  apiVersion?: string | undefined
  blockOwnerDeletion?: boolean | undefined
  controller?: boolean | undefined
  kind?: string | undefined
  name?: string | undefined
  uid?: string | undefined
}
type V1LabelSelectorRequirement = {
  key?: string | undefined
  operator?: {} | undefined
  values?: string[] | undefined
}
type V1NodeSelectorRequirement = {
  key?: string | undefined
  operator?: {} | undefined
  values?: string[] | undefined
}
type V1PreferredSchedulingTerm = {
  preference?:
    | {
        matchExpressions?: V1NodeSelectorRequirement[] | undefined
        matchFields?: V1NodeSelectorRequirement[] | undefined
      }
    | undefined
  weight?: number | undefined
}
type V1NodeSelectorTerm = {
  matchExpressions?: V1NodeSelectorRequirement[] | undefined
  matchFields?: V1NodeSelectorRequirement[] | undefined
}
type V1WeightedPodAffinityTerm = {
  podAffinityTerm?:
    | {
        labelSelector?:
          | {
              matchExpressions?: V1LabelSelectorRequirement[] | undefined
              matchLabels?: { [x: string]: string } | undefined
            }
          | undefined
        matchLabelKeys?: string[] | undefined
        mismatchLabelKeys?: string[] | undefined
        namespaceSelector?:
          | {
              matchExpressions?: V1LabelSelectorRequirement[] | undefined
              matchLabels?: { [x: string]: string } | undefined
            }
          | undefined
        namespaces?: string[] | undefined
        topologyKey?: string | undefined
      }
    | undefined
  weight?: number | undefined
}
type V1PodAffinityTerm = {
  labelSelector?:
    | {
        matchExpressions?: V1LabelSelectorRequirement[] | undefined
        matchLabels?: { [x: string]: string } | undefined
      }
    | undefined
  matchLabelKeys?: string[] | undefined
  mismatchLabelKeys?: string[] | undefined
  namespaceSelector?:
    | {
        matchExpressions?: V1LabelSelectorRequirement[] | undefined
        matchLabels?: { [x: string]: string } | undefined
      }
    | undefined
  namespaces?: string[] | undefined
  topologyKey?: string | undefined
}
type V1PodDNSConfigOption = { name?: string | undefined; value?: string | undefined }
type V1EphemeralContainer = {
  args?: string[] | undefined
  command?: string[] | undefined
  env?: V1EnvVar[] | undefined
  envFrom?: V1EnvFromSource[] | undefined
  image?: string | undefined
  imagePullPolicy?: {} | undefined
  lifecycle?:
    | {
        postStart?:
          | {
              exec?: { command?: string[] | undefined } | undefined
              httpGet?:
                | {
                    host?: string | undefined
                    httpHeaders?: K8sIoApiCoreV1HTTPHeader[] | undefined
                    path?: string | undefined
                    port?:
                      | {
                          IntVal?: number | undefined
                          StrVal?: string | undefined
                          Type?: IntstrType | undefined
                        }
                      | undefined
                    scheme?: {} | undefined
                  }
                | undefined
              sleep?: { seconds?: number | undefined } | undefined
              tcpSocket?:
                | {
                    host?: string | undefined
                    port?:
                      | {
                          IntVal?: number | undefined
                          StrVal?: string | undefined
                          Type?: IntstrType | undefined
                        }
                      | undefined
                  }
                | undefined
            }
          | undefined
        preStop?:
          | {
              exec?: { command?: string[] | undefined } | undefined
              httpGet?:
                | {
                    host?: string | undefined
                    httpHeaders?: K8sIoApiCoreV1HTTPHeader[] | undefined
                    path?: string | undefined
                    port?:
                      | {
                          IntVal?: number | undefined
                          StrVal?: string | undefined
                          Type?: IntstrType | undefined
                        }
                      | undefined
                    scheme?: {} | undefined
                  }
                | undefined
              sleep?: { seconds?: number | undefined } | undefined
              tcpSocket?:
                | {
                    host?: string | undefined
                    port?:
                      | {
                          IntVal?: number | undefined
                          StrVal?: string | undefined
                          Type?: IntstrType | undefined
                        }
                      | undefined
                  }
                | undefined
            }
          | undefined
        stopSignal?: {} | undefined
      }
    | undefined
  livenessProbe?:
    | {
        exec?: { command?: string[] | undefined } | undefined
        failureThreshold?: number | undefined
        grpc?: { port?: number | undefined; service?: string | undefined } | undefined
        httpGet?:
          | {
              host?: string | undefined
              httpHeaders?: K8sIoApiCoreV1HTTPHeader[] | undefined
              path?: string | undefined
              port?:
                | {
                    IntVal?: number | undefined
                    StrVal?: string | undefined
                    Type?: IntstrType | undefined
                  }
                | undefined
              scheme?: {} | undefined
            }
          | undefined
        initialDelaySeconds?: number | undefined
        periodSeconds?: number | undefined
        successThreshold?: number | undefined
        tcpSocket?:
          | {
              host?: string | undefined
              port?:
                | {
                    IntVal?: number | undefined
                    StrVal?: string | undefined
                    Type?: IntstrType | undefined
                  }
                | undefined
            }
          | undefined
        terminationGracePeriodSeconds?: number | undefined
        timeoutSeconds?: number | undefined
      }
    | undefined
  name?: string | undefined
  ports?: V1ContainerPort[] | undefined
  readinessProbe?:
    | {
        exec?: { command?: string[] | undefined } | undefined
        failureThreshold?: number | undefined
        grpc?: { port?: number | undefined; service?: string | undefined } | undefined
        httpGet?:
          | {
              host?: string | undefined
              httpHeaders?: K8sIoApiCoreV1HTTPHeader[] | undefined
              path?: string | undefined
              port?:
                | {
                    IntVal?: number | undefined
                    StrVal?: string | undefined
                    Type?: IntstrType | undefined
                  }
                | undefined
              scheme?: {} | undefined
            }
          | undefined
        initialDelaySeconds?: number | undefined
        periodSeconds?: number | undefined
        successThreshold?: number | undefined
        tcpSocket?:
          | {
              host?: string | undefined
              port?:
                | {
                    IntVal?: number | undefined
                    StrVal?: string | undefined
                    Type?: IntstrType | undefined
                  }
                | undefined
            }
          | undefined
        terminationGracePeriodSeconds?: number | undefined
        timeoutSeconds?: number | undefined
      }
    | undefined
  resizePolicy?: V1ContainerResizePolicy[] | undefined
  resources?:
    | {
        claims?: K8sIoApiCoreV1ResourceClaim[] | undefined
        limits?: {} | undefined
        requests?: {} | undefined
      }
    | undefined
  restartPolicy?: {} | undefined
  restartPolicyRules?: V1ContainerRestartRule[] | undefined
  securityContext?:
    | {
        allowPrivilegeEscalation?: boolean | undefined
        appArmorProfile?:
          | { localhostProfile?: string | undefined; type?: {} | undefined }
          | undefined
        capabilities?: { add?: string[] | undefined; drop?: string[] | undefined } | undefined
        privileged?: boolean | undefined
        procMount?: {} | undefined
        readOnlyRootFilesystem?: boolean | undefined
        runAsGroup?: number | undefined
        runAsNonRoot?: boolean | undefined
        runAsUser?: number | undefined
        seLinuxOptions?:
          | {
              level?: string | undefined
              role?: string | undefined
              type?: string | undefined
              user?: string | undefined
            }
          | undefined
        seccompProfile?:
          | { localhostProfile?: string | undefined; type?: {} | undefined }
          | undefined
        windowsOptions?:
          | {
              gmsaCredentialSpec?: string | undefined
              gmsaCredentialSpecName?: string | undefined
              hostProcess?: boolean | undefined
              runAsUserName?: string | undefined
            }
          | undefined
      }
    | undefined
  startupProbe?:
    | {
        exec?: { command?: string[] | undefined } | undefined
        failureThreshold?: number | undefined
        grpc?: { port?: number | undefined; service?: string | undefined } | undefined
        httpGet?:
          | {
              host?: string | undefined
              httpHeaders?: K8sIoApiCoreV1HTTPHeader[] | undefined
              path?: string | undefined
              port?:
                | {
                    IntVal?: number | undefined
                    StrVal?: string | undefined
                    Type?: IntstrType | undefined
                  }
                | undefined
              scheme?: {} | undefined
            }
          | undefined
        initialDelaySeconds?: number | undefined
        periodSeconds?: number | undefined
        successThreshold?: number | undefined
        tcpSocket?:
          | {
              host?: string | undefined
              port?:
                | {
                    IntVal?: number | undefined
                    StrVal?: string | undefined
                    Type?: IntstrType | undefined
                  }
                | undefined
            }
          | undefined
        terminationGracePeriodSeconds?: number | undefined
        timeoutSeconds?: number | undefined
      }
    | undefined
  stdin?: boolean | undefined
  stdinOnce?: boolean | undefined
  targetContainerName?: string | undefined
  terminationMessagePath?: string | undefined
  terminationMessagePolicy?: {} | undefined
  tty?: boolean | undefined
  volumeDevices?: V1VolumeDevice[] | undefined
  volumeMounts?: V1VolumeMount[] | undefined
  workingDir?: string | undefined
}
type V1HostAlias = { hostnames?: string[] | undefined; ip?: string | undefined }
type K8sIoApiCoreV1LocalObjectReference = { name?: string | undefined }
type V1PodReadinessGate = { conditionType?: {} | undefined }
type V1PodResourceClaim = {
  name?: string | undefined
  resourceClaimName?: string | undefined
  resourceClaimTemplateName?: string | undefined
}
type V1PodSchedulingGate = { name?: string | undefined }
type V1Sysctl = { name?: string | undefined; value?: string | undefined }
type V1Toleration = {
  effect?: {} | undefined
  key?: string | undefined
  operator?: {} | undefined
  tolerationSeconds?: number | undefined
  value?: string | undefined
}
type V1TopologySpreadConstraint = {
  labelSelector?:
    | {
        matchExpressions?: V1LabelSelectorRequirement[] | undefined
        matchLabels?: { [x: string]: string } | undefined
      }
    | undefined
  matchLabelKeys?: string[] | undefined
  maxSkew?: number | undefined
  minDomains?: number | undefined
  nodeAffinityPolicy?: {} | undefined
  nodeTaintsPolicy?: {} | undefined
  topologyKey?: string | undefined
  whenUnsatisfiable?: {} | undefined
}
type V1KeyToPath = {
  key?: string | undefined
  mode?: number | undefined
  path?: string | undefined
}
type V1DownwardAPIVolumeFile = {
  fieldRef?: { apiVersion?: string | undefined; fieldPath?: string | undefined } | undefined
  mode?: number | undefined
  path?: string | undefined
  resourceFieldRef?:
    | {
        containerName?: string | undefined
        divisor?: { Format?: 'DecimalExponent' | 'BinarySI' | 'DecimalSI' | undefined } | undefined
        resource?: string | undefined
      }
    | undefined
}
type V1PersistentVolumeAccessMode =
  | 'ReadWriteOnce'
  | 'ReadOnlyMany'
  | 'ReadWriteMany'
  | 'ReadWriteOncePod'
type V1VolumeProjection = {
  clusterTrustBundle?:
    | {
        labelSelector?:
          | {
              matchExpressions?: V1LabelSelectorRequirement[] | undefined
              matchLabels?: { [x: string]: string } | undefined
            }
          | undefined
        name?: string | undefined
        optional?: boolean | undefined
        path?: string | undefined
        signerName?: string | undefined
      }
    | undefined
  configMap?:
    | {
        items?: V1KeyToPath[] | undefined
        name?: string | undefined
        optional?: boolean | undefined
      }
    | undefined
  downwardAPI?: { items?: V1DownwardAPIVolumeFile[] | undefined } | undefined
  podCertificate?:
    | {
        certificateChainPath?: string | undefined
        credentialBundlePath?: string | undefined
        keyPath?: string | undefined
        keyType?: string | undefined
        maxExpirationSeconds?: number | undefined
        signerName?: string | undefined
        userAnnotations?: { [x: string]: string } | undefined
      }
    | undefined
  secret?:
    | {
        items?: V1KeyToPath[] | undefined
        name?: string | undefined
        optional?: boolean | undefined
      }
    | undefined
  serviceAccountToken?:
    | {
        audience?: string | undefined
        expirationSeconds?: number | undefined
        path?: string | undefined
      }
    | undefined
}
type V1Volume = {
  awsElasticBlockStore?:
    | {
        fsType?: string | undefined
        partition?: number | undefined
        readOnly?: boolean | undefined
        volumeID?: string | undefined
      }
    | undefined
  azureDisk?:
    | {
        cachingMode?: {} | undefined
        diskName?: string | undefined
        diskURI?: string | undefined
        fsType?: string | undefined
        kind?: {} | undefined
        readOnly?: boolean | undefined
      }
    | undefined
  azureFile?:
    | {
        readOnly?: boolean | undefined
        secretName?: string | undefined
        shareName?: string | undefined
      }
    | undefined
  cephfs?:
    | {
        monitors?: string[] | undefined
        path?: string | undefined
        readOnly?: boolean | undefined
        secretFile?: string | undefined
        secretRef?: { name?: string | undefined } | undefined
        user?: string | undefined
      }
    | undefined
  cinder?:
    | {
        fsType?: string | undefined
        readOnly?: boolean | undefined
        secretRef?: { name?: string | undefined } | undefined
        volumeID?: string | undefined
      }
    | undefined
  configMap?:
    | {
        defaultMode?: number | undefined
        items?: V1KeyToPath[] | undefined
        name?: string | undefined
        optional?: boolean | undefined
      }
    | undefined
  csi?:
    | {
        driver?: string | undefined
        fsType?: string | undefined
        nodePublishSecretRef?: { name?: string | undefined } | undefined
        readOnly?: boolean | undefined
        volumeAttributes?: { [x: string]: string } | undefined
      }
    | undefined
  downwardAPI?:
    | { defaultMode?: number | undefined; items?: V1DownwardAPIVolumeFile[] | undefined }
    | undefined
  emptyDir?:
    | {
        medium?: {} | undefined
        sizeLimit?:
          | { Format?: 'DecimalExponent' | 'BinarySI' | 'DecimalSI' | undefined }
          | undefined
      }
    | undefined
  ephemeral?:
    | {
        volumeClaimTemplate?:
          | {
              metadata?:
                | {
                    annotations?: { [x: string]: string } | undefined
                    creationTimestamp?: string | undefined
                    deletionGracePeriodSeconds?: number | undefined
                    deletionTimestamp?: string | undefined
                    finalizers?: string[] | undefined
                    generateName?: string | undefined
                    generation?: number | undefined
                    labels?: { [x: string]: string } | undefined
                    managedFields?: V1ManagedFieldsEntry[] | undefined
                    name?: string | undefined
                    namespace?: string | undefined
                    ownerReferences?: V1OwnerReference[] | undefined
                    resourceVersion?: string | undefined
                    selfLink?: string | undefined
                    uid?: string | undefined
                  }
                | undefined
              spec?:
                | {
                    accessModes?: V1PersistentVolumeAccessMode[] | undefined
                    dataSource?:
                      | {
                          apiGroup?: string | undefined
                          kind?: string | undefined
                          name?: string | undefined
                        }
                      | undefined
                    dataSourceRef?:
                      | {
                          apiGroup?: string | undefined
                          kind?: string | undefined
                          name?: string | undefined
                          namespace?: string | undefined
                        }
                      | undefined
                    resources?: { limits?: {} | undefined; requests?: {} | undefined } | undefined
                    selector?:
                      | {
                          matchExpressions?: V1LabelSelectorRequirement[] | undefined
                          matchLabels?: { [x: string]: string } | undefined
                        }
                      | undefined
                    storageClassName?: string | undefined
                    volumeAttributesClassName?: string | undefined
                    volumeMode?: {} | undefined
                    volumeName?: string | undefined
                  }
                | undefined
            }
          | undefined
      }
    | undefined
  fc?:
    | {
        fsType?: string | undefined
        lun?: number | undefined
        readOnly?: boolean | undefined
        targetWWNs?: string[] | undefined
        wwids?: string[] | undefined
      }
    | undefined
  flexVolume?:
    | {
        driver?: string | undefined
        fsType?: string | undefined
        options?: { [x: string]: string } | undefined
        readOnly?: boolean | undefined
        secretRef?: { name?: string | undefined } | undefined
      }
    | undefined
  flocker?: { datasetName?: string | undefined; datasetUUID?: string | undefined } | undefined
  gcePersistentDisk?:
    | {
        fsType?: string | undefined
        partition?: number | undefined
        pdName?: string | undefined
        readOnly?: boolean | undefined
      }
    | undefined
  gitRepo?:
    | {
        directory?: string | undefined
        repository?: string | undefined
        revision?: string | undefined
      }
    | undefined
  glusterfs?:
    | { endpoints?: string | undefined; path?: string | undefined; readOnly?: boolean | undefined }
    | undefined
  hostPath?: { path?: string | undefined; type?: {} | undefined } | undefined
  image?: { pullPolicy?: {} | undefined; reference?: string | undefined } | undefined
  iscsi?:
    | {
        chapAuthDiscovery?: boolean | undefined
        chapAuthSession?: boolean | undefined
        fsType?: string | undefined
        initiatorName?: string | undefined
        iqn?: string | undefined
        iscsiInterface?: string | undefined
        lun?: number | undefined
        portals?: string[] | undefined
        readOnly?: boolean | undefined
        secretRef?: { name?: string | undefined } | undefined
        targetPortal?: string | undefined
      }
    | undefined
  name?: string | undefined
  nfs?:
    | { path?: string | undefined; readOnly?: boolean | undefined; server?: string | undefined }
    | undefined
  persistentVolumeClaim?:
    | { claimName?: string | undefined; readOnly?: boolean | undefined }
    | undefined
  photonPersistentDisk?: { fsType?: string | undefined; pdID?: string | undefined } | undefined
  portworxVolume?:
    | { fsType?: string | undefined; readOnly?: boolean | undefined; volumeID?: string | undefined }
    | undefined
  projected?:
    | { defaultMode?: number | undefined; sources?: V1VolumeProjection[] | undefined }
    | undefined
  quobyte?:
    | {
        group?: string | undefined
        readOnly?: boolean | undefined
        registry?: string | undefined
        tenant?: string | undefined
        user?: string | undefined
        volume?: string | undefined
      }
    | undefined
  rbd?:
    | {
        fsType?: string | undefined
        image?: string | undefined
        keyring?: string | undefined
        monitors?: string[] | undefined
        pool?: string | undefined
        readOnly?: boolean | undefined
        secretRef?: { name?: string | undefined } | undefined
        user?: string | undefined
      }
    | undefined
  scaleIO?:
    | {
        fsType?: string | undefined
        gateway?: string | undefined
        protectionDomain?: string | undefined
        readOnly?: boolean | undefined
        secretRef?: { name?: string | undefined } | undefined
        sslEnabled?: boolean | undefined
        storageMode?: string | undefined
        storagePool?: string | undefined
        system?: string | undefined
        volumeName?: string | undefined
      }
    | undefined
  secret?:
    | {
        defaultMode?: number | undefined
        items?: V1KeyToPath[] | undefined
        optional?: boolean | undefined
        secretName?: string | undefined
      }
    | undefined
  storageos?:
    | {
        fsType?: string | undefined
        readOnly?: boolean | undefined
        secretRef?: { name?: string | undefined } | undefined
        volumeName?: string | undefined
        volumeNamespace?: string | undefined
      }
    | undefined
  vsphereVolume?:
    | {
        fsType?: string | undefined
        storagePolicyID?: string | undefined
        storagePolicyName?: string | undefined
        volumePath?: string | undefined
      }
    | undefined
}
type V1DeploymentCondition = {
  lastTransitionTime?: string | undefined
  lastUpdateTime?: string | undefined
  message?: string | undefined
  reason?: string | undefined
  status?: {} | undefined
  type?: {} | undefined
}
type V1Deployment = {
  apiVersion?: string | undefined
  kind?: string | undefined
  metadata?:
    | {
        annotations?: { [x: string]: string } | undefined
        creationTimestamp?: string | undefined
        deletionGracePeriodSeconds?: number | undefined
        deletionTimestamp?: string | undefined
        finalizers?: string[] | undefined
        generateName?: string | undefined
        generation?: number | undefined
        labels?: { [x: string]: string } | undefined
        managedFields?: V1ManagedFieldsEntry[] | undefined
        name?: string | undefined
        namespace?: string | undefined
        ownerReferences?: V1OwnerReference[] | undefined
        resourceVersion?: string | undefined
        selfLink?: string | undefined
        uid?: string | undefined
      }
    | undefined
  spec?:
    | {
        minReadySeconds?: number | undefined
        paused?: boolean | undefined
        progressDeadlineSeconds?: number | undefined
        replicas?: number | undefined
        revisionHistoryLimit?: number | undefined
        selector?:
          | {
              matchExpressions?: V1LabelSelectorRequirement[] | undefined
              matchLabels?: { [x: string]: string } | undefined
            }
          | undefined
        strategy?:
          | {
              rollingUpdate?:
                | {
                    maxSurge?:
                      | {
                          IntVal?: number | undefined
                          StrVal?: string | undefined
                          Type?: IntstrType | undefined
                        }
                      | undefined
                    maxUnavailable?:
                      | {
                          IntVal?: number | undefined
                          StrVal?: string | undefined
                          Type?: IntstrType | undefined
                        }
                      | undefined
                  }
                | undefined
              type?: {} | undefined
            }
          | undefined
        template?:
          | {
              metadata?:
                | {
                    annotations?: { [x: string]: string } | undefined
                    creationTimestamp?: string | undefined
                    deletionGracePeriodSeconds?: number | undefined
                    deletionTimestamp?: string | undefined
                    finalizers?: string[] | undefined
                    generateName?: string | undefined
                    generation?: number | undefined
                    labels?: { [x: string]: string } | undefined
                    managedFields?: V1ManagedFieldsEntry[] | undefined
                    name?: string | undefined
                    namespace?: string | undefined
                    ownerReferences?: V1OwnerReference[] | undefined
                    resourceVersion?: string | undefined
                    selfLink?: string | undefined
                    uid?: string | undefined
                  }
                | undefined
              spec?:
                | {
                    activeDeadlineSeconds?: number | undefined
                    affinity?:
                      | {
                          nodeAffinity?:
                            | {
                                preferredDuringSchedulingIgnoredDuringExecution?:
                                  | V1PreferredSchedulingTerm[]
                                  | undefined
                                requiredDuringSchedulingIgnoredDuringExecution?:
                                  | { nodeSelectorTerms?: V1NodeSelectorTerm[] | undefined }
                                  | undefined
                              }
                            | undefined
                          podAffinity?:
                            | {
                                preferredDuringSchedulingIgnoredDuringExecution?:
                                  | V1WeightedPodAffinityTerm[]
                                  | undefined
                                requiredDuringSchedulingIgnoredDuringExecution?:
                                  | V1PodAffinityTerm[]
                                  | undefined
                              }
                            | undefined
                          podAntiAffinity?:
                            | {
                                preferredDuringSchedulingIgnoredDuringExecution?:
                                  | V1WeightedPodAffinityTerm[]
                                  | undefined
                                requiredDuringSchedulingIgnoredDuringExecution?:
                                  | V1PodAffinityTerm[]
                                  | undefined
                              }
                            | undefined
                        }
                      | undefined
                    automountServiceAccountToken?: boolean | undefined
                    containers?: V1Container[] | undefined
                    dnsConfig?:
                      | {
                          nameservers?: string[] | undefined
                          options?: V1PodDNSConfigOption[] | undefined
                          searches?: string[] | undefined
                        }
                      | undefined
                    dnsPolicy?: {} | undefined
                    enableServiceLinks?: boolean | undefined
                    ephemeralContainers?: V1EphemeralContainer[] | undefined
                    hostAliases?: V1HostAlias[] | undefined
                    hostIPC?: boolean | undefined
                    hostNetwork?: boolean | undefined
                    hostPID?: boolean | undefined
                    hostUsers?: boolean | undefined
                    hostname?: string | undefined
                    hostnameOverride?: string | undefined
                    imagePullSecrets?: K8sIoApiCoreV1LocalObjectReference[] | undefined
                    initContainers?: V1Container[] | undefined
                    nodeName?: string | undefined
                    nodeSelector?: { [x: string]: string } | undefined
                    os?: { name?: {} | undefined } | undefined
                    overhead?: {} | undefined
                    preemptionPolicy?: {} | undefined
                    priority?: number | undefined
                    priorityClassName?: string | undefined
                    readinessGates?: V1PodReadinessGate[] | undefined
                    resourceClaims?: V1PodResourceClaim[] | undefined
                    resources?:
                      | {
                          claims?: K8sIoApiCoreV1ResourceClaim[] | undefined
                          limits?: {} | undefined
                          requests?: {} | undefined
                        }
                      | undefined
                    restartPolicy?: {} | undefined
                    runtimeClassName?: string | undefined
                    schedulerName?: string | undefined
                    schedulingGates?: V1PodSchedulingGate[] | undefined
                    securityContext?:
                      | {
                          appArmorProfile?:
                            | { localhostProfile?: string | undefined; type?: {} | undefined }
                            | undefined
                          fsGroup?: number | undefined
                          fsGroupChangePolicy?: {} | undefined
                          runAsGroup?: number | undefined
                          runAsNonRoot?: boolean | undefined
                          runAsUser?: number | undefined
                          seLinuxChangePolicy?: {} | undefined
                          seLinuxOptions?:
                            | {
                                level?: string | undefined
                                role?: string | undefined
                                type?: string | undefined
                                user?: string | undefined
                              }
                            | undefined
                          seccompProfile?:
                            | { localhostProfile?: string | undefined; type?: {} | undefined }
                            | undefined
                          supplementalGroups?: number[] | undefined
                          supplementalGroupsPolicy?: {} | undefined
                          sysctls?: V1Sysctl[] | undefined
                          windowsOptions?:
                            | {
                                gmsaCredentialSpec?: string | undefined
                                gmsaCredentialSpecName?: string | undefined
                                hostProcess?: boolean | undefined
                                runAsUserName?: string | undefined
                              }
                            | undefined
                        }
                      | undefined
                    serviceAccount?: string | undefined
                    serviceAccountName?: string | undefined
                    setHostnameAsFQDN?: boolean | undefined
                    shareProcessNamespace?: boolean | undefined
                    subdomain?: string | undefined
                    terminationGracePeriodSeconds?: number | undefined
                    tolerations?: V1Toleration[] | undefined
                    topologySpreadConstraints?: V1TopologySpreadConstraint[] | undefined
                    volumes?: V1Volume[] | undefined
                    workloadRef?:
                      | {
                          name?: string | undefined
                          podGroup?: string | undefined
                          podGroupReplicaKey?: string | undefined
                        }
                      | undefined
                  }
                | undefined
            }
          | undefined
      }
    | undefined
  status?:
    | {
        availableReplicas?: number | undefined
        collisionCount?: number | undefined
        conditions?: V1DeploymentCondition[] | undefined
        observedGeneration?: number | undefined
        readyReplicas?: number | undefined
        replicas?: number | undefined
        terminatingReplicas?: number | undefined
        unavailableReplicas?: number | undefined
        updatedReplicas?: number | undefined
      }
    | undefined
}
type KubernetesKubernetesDeploymentListResponse = {
  apiVersion?: string | undefined
  items?: V1Deployment[] | undefined
  kind?: string | undefined
  metadata?:
    | {
        continue?: string | undefined
        remainingItemCount?: number | undefined
        resourceVersion?: string | undefined
        selfLink?: string | undefined
      }
    | undefined
}
type KubernetesDescribeResourceResponse = { describe?: string | undefined }
type KubernetesK8sEventInvolvedObject = {
  kind?: string | undefined
  name?: string | undefined
  namespace?: string | undefined
  uid?: string | undefined
}
type KubernetesK8sEvent = {
  count?: number | undefined
  eventTime?: string | undefined
  firstTimestamp?: string | undefined
  involvedObject?: KubernetesK8sEventInvolvedObject | undefined
  kind?: string | undefined
  lastTimestamp?: string | undefined
  message?: string | undefined
  name?: string | undefined
  namespace?: string | undefined
  reason?: string | undefined
  type?: string | undefined
  uid?: string | undefined
}
type KubernetesK8sIngressClass = {
  Annotations?: { [x: string]: string } | undefined
  Controller?: string | undefined
  IsDefault?: boolean | undefined
  Name?: string | undefined
}
type KubernetesK8sIngressController = {
  Availability?: boolean | undefined
  ClassName?: string | undefined
  Name?: string | undefined
  New?: boolean | undefined
  Type?: string | undefined
  Used?: boolean | undefined
}
type KubernetesK8sIngressPath = {
  HasService?: boolean | undefined
  Host?: string | undefined
  IngressName?: string | undefined
  Path?: string | undefined
  PathType?: string | undefined
  Port?: number | undefined
  PortName?: string | undefined
  ServiceName?: string | undefined
}
type KubernetesK8sIngressTLS = { Hosts?: string[] | undefined; SecretName?: string | undefined }
type KubernetesK8sIngressInfo = {
  Annotations?: { [x: string]: string } | undefined
  ClassName?: string | undefined
  CreationDate?: string | undefined
  Hosts?: string[] | undefined
  Labels?: { [x: string]: string } | undefined
  Name?: string | undefined
  Namespace?: string | undefined
  Paths?: KubernetesK8sIngressPath[] | undefined
  TLS?: KubernetesK8sIngressTLS[] | undefined
  Type?: string | undefined
  UID?: string | undefined
}
type KubernetesK8sIngressDeleteRequests = { [x: string]: string[] }
type KubernetesK8sJobDeleteRequests = { [x: string]: string[] }
type KubernetesManifestDryRunPayload = {
  manifests?: string[] | undefined
  namespace?: string | undefined
}
type KubernetesManifestDryRunResult = {
  documentIndex?: number | undefined
  kind?: string | undefined
  message?: string | undefined
  name?: string | undefined
  namespace?: string | undefined
  status?: string | undefined
}
type KubernetesManifestDryRunResponse = { results?: KubernetesManifestDryRunResult[] | undefined }
type PortainerK8sNodeLimits = { CPU?: number | undefined; Memory?: number | undefined }
type PortainerK8sNodesLimits = { [x: string]: PortainerK8sNodeLimits }
type V1beta1NodeMetrics = {
  apiVersion?: string | undefined
  kind?: string | undefined
  metadata?:
    | {
        annotations?: { [x: string]: string } | undefined
        creationTimestamp?: string | undefined
        deletionGracePeriodSeconds?: number | undefined
        deletionTimestamp?: string | undefined
        finalizers?: string[] | undefined
        generateName?: string | undefined
        generation?: number | undefined
        labels?: { [x: string]: string } | undefined
        managedFields?: V1ManagedFieldsEntry[] | undefined
        name?: string | undefined
        namespace?: string | undefined
        ownerReferences?: V1OwnerReference[] | undefined
        resourceVersion?: string | undefined
        selfLink?: string | undefined
        uid?: string | undefined
      }
    | undefined
  timestamp?: string | undefined
  usage?: {} | undefined
  window?: string | undefined
}
type V1beta1NodeMetricsList = {
  apiVersion?: string | undefined
  items?: V1beta1NodeMetrics[] | undefined
  kind?: string | undefined
  metadata?:
    | {
        continue?: string | undefined
        remainingItemCount?: number | undefined
        resourceVersion?: string | undefined
        selfLink?: string | undefined
      }
    | undefined
}
type V1beta1ContainerMetrics = { name?: string | undefined; usage?: {} | undefined }
type V1beta1PodMetrics = {
  apiVersion?: string | undefined
  containers?: V1beta1ContainerMetrics[] | undefined
  kind?: string | undefined
  metadata?:
    | {
        annotations?: { [x: string]: string } | undefined
        creationTimestamp?: string | undefined
        deletionGracePeriodSeconds?: number | undefined
        deletionTimestamp?: string | undefined
        finalizers?: string[] | undefined
        generateName?: string | undefined
        generation?: number | undefined
        labels?: { [x: string]: string } | undefined
        managedFields?: V1ManagedFieldsEntry[] | undefined
        name?: string | undefined
        namespace?: string | undefined
        ownerReferences?: V1OwnerReference[] | undefined
        resourceVersion?: string | undefined
        selfLink?: string | undefined
        uid?: string | undefined
      }
    | undefined
  timestamp?: string | undefined
  window?: string | undefined
}
type V1beta1PodMetricsList = {
  apiVersion?: string | undefined
  items?: V1beta1PodMetrics[] | undefined
  kind?: string | undefined
  metadata?:
    | {
        continue?: string | undefined
        remainingItemCount?: number | undefined
        resourceVersion?: string | undefined
        selfLink?: string | undefined
      }
    | undefined
}
type V1ScopedResourceSelectorRequirement = {
  operator?: {} | undefined
  scopeName?: {} | undefined
  values?: string[] | undefined
}
type V1ResourceQuotaScope =
  | 'Terminating'
  | 'NotTerminating'
  | 'BestEffort'
  | 'NotBestEffort'
  | 'PriorityClass'
  | 'CrossNamespacePodAffinity'
  | 'VolumeAttributesClass'
type V1ResourceQuota = {
  apiVersion?: string | undefined
  kind?: string | undefined
  metadata?:
    | {
        annotations?: { [x: string]: string } | undefined
        creationTimestamp?: string | undefined
        deletionGracePeriodSeconds?: number | undefined
        deletionTimestamp?: string | undefined
        finalizers?: string[] | undefined
        generateName?: string | undefined
        generation?: number | undefined
        labels?: { [x: string]: string } | undefined
        managedFields?: V1ManagedFieldsEntry[] | undefined
        name?: string | undefined
        namespace?: string | undefined
        ownerReferences?: V1OwnerReference[] | undefined
        resourceVersion?: string | undefined
        selfLink?: string | undefined
        uid?: string | undefined
      }
    | undefined
  spec?:
    | {
        hard?: {} | undefined
        scopeSelector?:
          | { matchExpressions?: V1ScopedResourceSelectorRequirement[] | undefined }
          | undefined
        scopes?: V1ResourceQuotaScope[] | undefined
      }
    | undefined
  status?: { hard?: {} | undefined; used?: {} | undefined } | undefined
}
type V1NamespaceCondition = {
  lastTransitionTime?: string | undefined
  message?: string | undefined
  reason?: string | undefined
  status?: {} | undefined
  type?: {} | undefined
}
type V1NamespaceStatus = { conditions?: V1NamespaceCondition[] | undefined; phase?: {} | undefined }
type PortainerK8sNamespaceInfo = {
  Annotations?: { [x: string]: string } | undefined
  CreationDate?: string | undefined
  Id?: string | undefined
  IsDefault?: boolean | undefined
  IsSystem?: boolean | undefined
  Name?: string | undefined
  NamespaceOwner?: string | undefined
  ResourceQuota?: V1ResourceQuota | undefined
  Status?: V1NamespaceStatus | undefined
  UnhealthyEventCount?: number | undefined
}
type KubernetesK8sResourceQuota = {
  cpu?: string | undefined
  enabled?: boolean | undefined
  memory?: string | undefined
}
type KubernetesK8sNamespaceDetails = {
  Annotations?: { [x: string]: string } | undefined
  Name?: string | undefined
  Owner?: string | undefined
  ResourceQuota?: KubernetesK8sResourceQuota | undefined
}
type V1FinalizerName = 'kubernetes'
type KubernetesKubernetesCreateNamespaceResponse = {
  apiVersion?: string | undefined
  kind?: string | undefined
  metadata?:
    | {
        annotations?: { [x: string]: string } | undefined
        creationTimestamp?: string | undefined
        deletionGracePeriodSeconds?: number | undefined
        deletionTimestamp?: string | undefined
        finalizers?: string[] | undefined
        generateName?: string | undefined
        generation?: number | undefined
        labels?: { [x: string]: string } | undefined
        managedFields?: V1ManagedFieldsEntry[] | undefined
        name?: string | undefined
        namespace?: string | undefined
        ownerReferences?: V1OwnerReference[] | undefined
        resourceVersion?: string | undefined
        selfLink?: string | undefined
        uid?: string | undefined
      }
    | undefined
  spec?: { finalizers?: V1FinalizerName[] | undefined } | undefined
  status?: { conditions?: V1NamespaceCondition[] | undefined; phase?: {} | undefined } | undefined
}
type KubernetesK8sConfigMapWriteRequest = {
  Annotations?: { [x: string]: string } | undefined
  Data?: { [x: string]: string } | undefined
  Labels?: { [x: string]: string } | undefined
  Name?: string | undefined
}
type KubernetesK8sSecretKeyRef = { key?: string | undefined; name?: string | undefined }
type KubernetesK8sEnvVar = {
  name?: string | undefined
  secretRef?: KubernetesK8sSecretKeyRef | undefined
  value?: string | undefined
}
type KubernetesK8sContainerPort = {
  containerPort?: number | undefined
  name?: string | undefined
  protocol?: string | undefined
}
type KubernetesK8sResourceRequirements = {
  limits?: { [x: string]: string } | undefined
  requests?: { [x: string]: string } | undefined
}
type KubernetesK8sVolumeMount = {
  mountPath?: string | undefined
  name?: string | undefined
  readOnly?: boolean | undefined
  subPath?: string | undefined
}
type KubernetesK8sContainer = {
  args?: string[] | undefined
  command?: string[] | undefined
  env?: KubernetesK8sEnvVar[] | undefined
  envFromSecrets?: string[] | undefined
  image?: string | undefined
  imagePullPolicy?: string | undefined
  name?: string | undefined
  ports?: KubernetesK8sContainerPort[] | undefined
  resources?: KubernetesK8sResourceRequirements | undefined
  volumeMounts?: KubernetesK8sVolumeMount[] | undefined
  workingDir?: string | undefined
}
type KubernetesK8sPodVolume = { claimName?: string | undefined; name?: string | undefined }
type KubernetesK8sPodTemplate = {
  annotations?: { [x: string]: string } | undefined
  containers?: KubernetesK8sContainer[] | undefined
  labels?: { [x: string]: string } | undefined
  volumes?: KubernetesK8sPodVolume[] | undefined
}
type KubernetesK8sDeploymentWriteRequest = {
  annotations?: { [x: string]: string } | undefined
  labels?: { [x: string]: string } | undefined
  name?: string | undefined
  pod?: KubernetesK8sPodTemplate | undefined
  replicas?: number | undefined
  selector?: { [x: string]: string } | undefined
}
type KubernetesKubernetesDeploymentResponse = {
  apiVersion?: string | undefined
  kind?: string | undefined
  metadata?:
    | {
        annotations?: { [x: string]: string } | undefined
        creationTimestamp?: string | undefined
        deletionGracePeriodSeconds?: number | undefined
        deletionTimestamp?: string | undefined
        finalizers?: string[] | undefined
        generateName?: string | undefined
        generation?: number | undefined
        labels?: { [x: string]: string } | undefined
        managedFields?: V1ManagedFieldsEntry[] | undefined
        name?: string | undefined
        namespace?: string | undefined
        ownerReferences?: V1OwnerReference[] | undefined
        resourceVersion?: string | undefined
        selfLink?: string | undefined
        uid?: string | undefined
      }
    | undefined
  spec?:
    | {
        minReadySeconds?: number | undefined
        paused?: boolean | undefined
        progressDeadlineSeconds?: number | undefined
        replicas?: number | undefined
        revisionHistoryLimit?: number | undefined
        selector?:
          | {
              matchExpressions?: V1LabelSelectorRequirement[] | undefined
              matchLabels?: { [x: string]: string } | undefined
            }
          | undefined
        strategy?:
          | {
              rollingUpdate?:
                | {
                    maxSurge?:
                      | {
                          IntVal?: number | undefined
                          StrVal?: string | undefined
                          Type?: IntstrType | undefined
                        }
                      | undefined
                    maxUnavailable?:
                      | {
                          IntVal?: number | undefined
                          StrVal?: string | undefined
                          Type?: IntstrType | undefined
                        }
                      | undefined
                  }
                | undefined
              type?: {} | undefined
            }
          | undefined
        template?:
          | {
              metadata?:
                | {
                    annotations?: { [x: string]: string } | undefined
                    creationTimestamp?: string | undefined
                    deletionGracePeriodSeconds?: number | undefined
                    deletionTimestamp?: string | undefined
                    finalizers?: string[] | undefined
                    generateName?: string | undefined
                    generation?: number | undefined
                    labels?: { [x: string]: string } | undefined
                    managedFields?: V1ManagedFieldsEntry[] | undefined
                    name?: string | undefined
                    namespace?: string | undefined
                    ownerReferences?: V1OwnerReference[] | undefined
                    resourceVersion?: string | undefined
                    selfLink?: string | undefined
                    uid?: string | undefined
                  }
                | undefined
              spec?:
                | {
                    activeDeadlineSeconds?: number | undefined
                    affinity?:
                      | {
                          nodeAffinity?:
                            | {
                                preferredDuringSchedulingIgnoredDuringExecution?:
                                  | V1PreferredSchedulingTerm[]
                                  | undefined
                                requiredDuringSchedulingIgnoredDuringExecution?:
                                  | { nodeSelectorTerms?: V1NodeSelectorTerm[] | undefined }
                                  | undefined
                              }
                            | undefined
                          podAffinity?:
                            | {
                                preferredDuringSchedulingIgnoredDuringExecution?:
                                  | V1WeightedPodAffinityTerm[]
                                  | undefined
                                requiredDuringSchedulingIgnoredDuringExecution?:
                                  | V1PodAffinityTerm[]
                                  | undefined
                              }
                            | undefined
                          podAntiAffinity?:
                            | {
                                preferredDuringSchedulingIgnoredDuringExecution?:
                                  | V1WeightedPodAffinityTerm[]
                                  | undefined
                                requiredDuringSchedulingIgnoredDuringExecution?:
                                  | V1PodAffinityTerm[]
                                  | undefined
                              }
                            | undefined
                        }
                      | undefined
                    automountServiceAccountToken?: boolean | undefined
                    containers?: V1Container[] | undefined
                    dnsConfig?:
                      | {
                          nameservers?: string[] | undefined
                          options?: V1PodDNSConfigOption[] | undefined
                          searches?: string[] | undefined
                        }
                      | undefined
                    dnsPolicy?: {} | undefined
                    enableServiceLinks?: boolean | undefined
                    ephemeralContainers?: V1EphemeralContainer[] | undefined
                    hostAliases?: V1HostAlias[] | undefined
                    hostIPC?: boolean | undefined
                    hostNetwork?: boolean | undefined
                    hostPID?: boolean | undefined
                    hostUsers?: boolean | undefined
                    hostname?: string | undefined
                    hostnameOverride?: string | undefined
                    imagePullSecrets?: K8sIoApiCoreV1LocalObjectReference[] | undefined
                    initContainers?: V1Container[] | undefined
                    nodeName?: string | undefined
                    nodeSelector?: { [x: string]: string } | undefined
                    os?: { name?: {} | undefined } | undefined
                    overhead?: {} | undefined
                    preemptionPolicy?: {} | undefined
                    priority?: number | undefined
                    priorityClassName?: string | undefined
                    readinessGates?: V1PodReadinessGate[] | undefined
                    resourceClaims?: V1PodResourceClaim[] | undefined
                    resources?:
                      | {
                          claims?: K8sIoApiCoreV1ResourceClaim[] | undefined
                          limits?: {} | undefined
                          requests?: {} | undefined
                        }
                      | undefined
                    restartPolicy?: {} | undefined
                    runtimeClassName?: string | undefined
                    schedulerName?: string | undefined
                    schedulingGates?: V1PodSchedulingGate[] | undefined
                    securityContext?:
                      | {
                          appArmorProfile?:
                            | { localhostProfile?: string | undefined; type?: {} | undefined }
                            | undefined
                          fsGroup?: number | undefined
                          fsGroupChangePolicy?: {} | undefined
                          runAsGroup?: number | undefined
                          runAsNonRoot?: boolean | undefined
                          runAsUser?: number | undefined
                          seLinuxChangePolicy?: {} | undefined
                          seLinuxOptions?:
                            | {
                                level?: string | undefined
                                role?: string | undefined
                                type?: string | undefined
                                user?: string | undefined
                              }
                            | undefined
                          seccompProfile?:
                            | { localhostProfile?: string | undefined; type?: {} | undefined }
                            | undefined
                          supplementalGroups?: number[] | undefined
                          supplementalGroupsPolicy?: {} | undefined
                          sysctls?: V1Sysctl[] | undefined
                          windowsOptions?:
                            | {
                                gmsaCredentialSpec?: string | undefined
                                gmsaCredentialSpecName?: string | undefined
                                hostProcess?: boolean | undefined
                                runAsUserName?: string | undefined
                              }
                            | undefined
                        }
                      | undefined
                    serviceAccount?: string | undefined
                    serviceAccountName?: string | undefined
                    setHostnameAsFQDN?: boolean | undefined
                    shareProcessNamespace?: boolean | undefined
                    subdomain?: string | undefined
                    terminationGracePeriodSeconds?: number | undefined
                    tolerations?: V1Toleration[] | undefined
                    topologySpreadConstraints?: V1TopologySpreadConstraint[] | undefined
                    volumes?: V1Volume[] | undefined
                    workloadRef?:
                      | {
                          name?: string | undefined
                          podGroup?: string | undefined
                          podGroupReplicaKey?: string | undefined
                        }
                      | undefined
                  }
                | undefined
            }
          | undefined
      }
    | undefined
  status?:
    | {
        availableReplicas?: number | undefined
        collisionCount?: number | undefined
        conditions?: V1DeploymentCondition[] | undefined
        observedGeneration?: number | undefined
        readyReplicas?: number | undefined
        replicas?: number | undefined
        terminatingReplicas?: number | undefined
        unavailableReplicas?: number | undefined
        updatedReplicas?: number | undefined
      }
    | undefined
}
type KubernetesK8sDeploymentPatchRequest = {
  annotations?: { [x: string]: string } | undefined
  podAnnotations?: { [x: string]: string } | undefined
}
type KubernetesK8sDeploymentRollbackRequest = { revision?: number | undefined }
type KubernetesK8sDeploymentScaleRequest = { replicas?: number | undefined }
type V1PersistentVolumeClaimPhase = 'Pending' | 'Bound' | 'Lost'
type ResourceQuantity = { Format?: 'DecimalExponent' | 'BinarySI' | 'DecimalSI' | undefined }
type V1ResourceList = { [x: string]: ResourceQuantity }
type V1PersistentVolumeMode = 'Block' | 'Filesystem'
type KubernetesK8sPersistentVolumeClaim = {
  accessModes?: string[] | undefined
  allowVolumeExpansion?: boolean | undefined
  creationDate?: string | undefined
  humanReadableAccessModes?: V1PersistentVolumeAccessMode[] | undefined
  id?: string | undefined
  labels?: { [x: string]: string } | undefined
  name?: string | undefined
  namespace?: string | undefined
  owningApplications?: KubernetesK8sApplication[] | undefined
  phase?: V1PersistentVolumeClaimPhase | undefined
  resourcesRequests?: V1ResourceList | undefined
  storage?: number | undefined
  storageClass?: string | undefined
  storageRequest?: string | undefined
  volumeMode?: V1PersistentVolumeMode | undefined
  volumeName?: string | undefined
}
type KubernetesK8sPersistentVolumeClaimCreateRequest = {
  accessModes?: V1PersistentVolumeAccessMode[] | undefined
  annotations?: { [x: string]: string } | undefined
  labels?: { [x: string]: string } | undefined
  name?: string | undefined
  storage?: string | undefined
  storageClass?: string | undefined
  volumeMode?: V1PersistentVolumeMode | undefined
}
type V1PodCondition = {
  lastProbeTime?: string | undefined
  lastTransitionTime?: string | undefined
  message?: string | undefined
  observedGeneration?: number | undefined
  reason?: string | undefined
  status?: {} | undefined
  type?: {} | undefined
}
type V1ResourceHealth = { health?: {} | undefined; resourceID?: string | undefined }
type V1ResourceStatus = { name?: {} | undefined; resources?: V1ResourceHealth[] | undefined }
type V1VolumeMountStatus = {
  mountPath?: string | undefined
  name?: string | undefined
  readOnly?: boolean | undefined
  recursiveReadOnly?: {} | undefined
}
type V1ContainerStatus = {
  allocatedResources?: {} | undefined
  allocatedResourcesStatus?: V1ResourceStatus[] | undefined
  containerID?: string | undefined
  image?: string | undefined
  imageID?: string | undefined
  lastState?:
    | {
        running?: { startedAt?: string | undefined } | undefined
        terminated?:
          | {
              containerID?: string | undefined
              exitCode?: number | undefined
              finishedAt?: string | undefined
              message?: string | undefined
              reason?: string | undefined
              signal?: number | undefined
              startedAt?: string | undefined
            }
          | undefined
        waiting?: { message?: string | undefined; reason?: string | undefined } | undefined
      }
    | undefined
  name?: string | undefined
  ready?: boolean | undefined
  resources?:
    | {
        claims?: K8sIoApiCoreV1ResourceClaim[] | undefined
        limits?: {} | undefined
        requests?: {} | undefined
      }
    | undefined
  restartCount?: number | undefined
  started?: boolean | undefined
  state?:
    | {
        running?: { startedAt?: string | undefined } | undefined
        terminated?:
          | {
              containerID?: string | undefined
              exitCode?: number | undefined
              finishedAt?: string | undefined
              message?: string | undefined
              reason?: string | undefined
              signal?: number | undefined
              startedAt?: string | undefined
            }
          | undefined
        waiting?: { message?: string | undefined; reason?: string | undefined } | undefined
      }
    | undefined
  stopSignal?: {} | undefined
  user?:
    | {
        linux?:
          | {
              gid?: number | undefined
              supplementalGroups?: number[] | undefined
              uid?: number | undefined
            }
          | undefined
      }
    | undefined
  volumeMounts?: V1VolumeMountStatus[] | undefined
}
type V1ContainerExtendedResourceRequest = {
  containerName?: string | undefined
  requestName?: string | undefined
  resourceName?: string | undefined
}
type V1HostIP = { ip?: string | undefined }
type V1PodIP = { ip?: string | undefined }
type V1PodResourceClaimStatus = {
  name?: string | undefined
  resourceClaimName?: string | undefined
}
type V1Pod = {
  apiVersion?: string | undefined
  kind?: string | undefined
  metadata?:
    | {
        annotations?: { [x: string]: string } | undefined
        creationTimestamp?: string | undefined
        deletionGracePeriodSeconds?: number | undefined
        deletionTimestamp?: string | undefined
        finalizers?: string[] | undefined
        generateName?: string | undefined
        generation?: number | undefined
        labels?: { [x: string]: string } | undefined
        managedFields?: V1ManagedFieldsEntry[] | undefined
        name?: string | undefined
        namespace?: string | undefined
        ownerReferences?: V1OwnerReference[] | undefined
        resourceVersion?: string | undefined
        selfLink?: string | undefined
        uid?: string | undefined
      }
    | undefined
  spec?:
    | {
        activeDeadlineSeconds?: number | undefined
        affinity?:
          | {
              nodeAffinity?:
                | {
                    preferredDuringSchedulingIgnoredDuringExecution?:
                      | V1PreferredSchedulingTerm[]
                      | undefined
                    requiredDuringSchedulingIgnoredDuringExecution?:
                      | { nodeSelectorTerms?: V1NodeSelectorTerm[] | undefined }
                      | undefined
                  }
                | undefined
              podAffinity?:
                | {
                    preferredDuringSchedulingIgnoredDuringExecution?:
                      | V1WeightedPodAffinityTerm[]
                      | undefined
                    requiredDuringSchedulingIgnoredDuringExecution?: V1PodAffinityTerm[] | undefined
                  }
                | undefined
              podAntiAffinity?:
                | {
                    preferredDuringSchedulingIgnoredDuringExecution?:
                      | V1WeightedPodAffinityTerm[]
                      | undefined
                    requiredDuringSchedulingIgnoredDuringExecution?: V1PodAffinityTerm[] | undefined
                  }
                | undefined
            }
          | undefined
        automountServiceAccountToken?: boolean | undefined
        containers?: V1Container[] | undefined
        dnsConfig?:
          | {
              nameservers?: string[] | undefined
              options?: V1PodDNSConfigOption[] | undefined
              searches?: string[] | undefined
            }
          | undefined
        dnsPolicy?: {} | undefined
        enableServiceLinks?: boolean | undefined
        ephemeralContainers?: V1EphemeralContainer[] | undefined
        hostAliases?: V1HostAlias[] | undefined
        hostIPC?: boolean | undefined
        hostNetwork?: boolean | undefined
        hostPID?: boolean | undefined
        hostUsers?: boolean | undefined
        hostname?: string | undefined
        hostnameOverride?: string | undefined
        imagePullSecrets?: K8sIoApiCoreV1LocalObjectReference[] | undefined
        initContainers?: V1Container[] | undefined
        nodeName?: string | undefined
        nodeSelector?: { [x: string]: string } | undefined
        os?: { name?: {} | undefined } | undefined
        overhead?: {} | undefined
        preemptionPolicy?: {} | undefined
        priority?: number | undefined
        priorityClassName?: string | undefined
        readinessGates?: V1PodReadinessGate[] | undefined
        resourceClaims?: V1PodResourceClaim[] | undefined
        resources?:
          | {
              claims?: K8sIoApiCoreV1ResourceClaim[] | undefined
              limits?: {} | undefined
              requests?: {} | undefined
            }
          | undefined
        restartPolicy?: {} | undefined
        runtimeClassName?: string | undefined
        schedulerName?: string | undefined
        schedulingGates?: V1PodSchedulingGate[] | undefined
        securityContext?:
          | {
              appArmorProfile?:
                | { localhostProfile?: string | undefined; type?: {} | undefined }
                | undefined
              fsGroup?: number | undefined
              fsGroupChangePolicy?: {} | undefined
              runAsGroup?: number | undefined
              runAsNonRoot?: boolean | undefined
              runAsUser?: number | undefined
              seLinuxChangePolicy?: {} | undefined
              seLinuxOptions?:
                | {
                    level?: string | undefined
                    role?: string | undefined
                    type?: string | undefined
                    user?: string | undefined
                  }
                | undefined
              seccompProfile?:
                | { localhostProfile?: string | undefined; type?: {} | undefined }
                | undefined
              supplementalGroups?: number[] | undefined
              supplementalGroupsPolicy?: {} | undefined
              sysctls?: V1Sysctl[] | undefined
              windowsOptions?:
                | {
                    gmsaCredentialSpec?: string | undefined
                    gmsaCredentialSpecName?: string | undefined
                    hostProcess?: boolean | undefined
                    runAsUserName?: string | undefined
                  }
                | undefined
            }
          | undefined
        serviceAccount?: string | undefined
        serviceAccountName?: string | undefined
        setHostnameAsFQDN?: boolean | undefined
        shareProcessNamespace?: boolean | undefined
        subdomain?: string | undefined
        terminationGracePeriodSeconds?: number | undefined
        tolerations?: V1Toleration[] | undefined
        topologySpreadConstraints?: V1TopologySpreadConstraint[] | undefined
        volumes?: V1Volume[] | undefined
        workloadRef?:
          | {
              name?: string | undefined
              podGroup?: string | undefined
              podGroupReplicaKey?: string | undefined
            }
          | undefined
      }
    | undefined
  status?:
    | {
        allocatedResources?: {} | undefined
        conditions?: V1PodCondition[] | undefined
        containerStatuses?: V1ContainerStatus[] | undefined
        ephemeralContainerStatuses?: V1ContainerStatus[] | undefined
        extendedResourceClaimStatus?:
          | {
              requestMappings?: V1ContainerExtendedResourceRequest[] | undefined
              resourceClaimName?: string | undefined
            }
          | undefined
        hostIP?: string | undefined
        hostIPs?: V1HostIP[] | undefined
        initContainerStatuses?: V1ContainerStatus[] | undefined
        message?: string | undefined
        nominatedNodeName?: string | undefined
        observedGeneration?: number | undefined
        phase?: {} | undefined
        podIP?: string | undefined
        podIPs?: V1PodIP[] | undefined
        qosClass?: {} | undefined
        reason?: string | undefined
        resize?: {} | undefined
        resourceClaimStatuses?: V1PodResourceClaimStatus[] | undefined
        resources?:
          | {
              claims?: K8sIoApiCoreV1ResourceClaim[] | undefined
              limits?: {} | undefined
              requests?: {} | undefined
            }
          | undefined
        startTime?: string | undefined
      }
    | undefined
}
type KubernetesKubernetesPodListResponse = {
  apiVersion?: string | undefined
  items?: V1Pod[] | undefined
  kind?: string | undefined
  metadata?:
    | {
        continue?: string | undefined
        remainingItemCount?: number | undefined
        resourceVersion?: string | undefined
        selfLink?: string | undefined
      }
    | undefined
}
type V1ReplicaSetCondition = {
  lastTransitionTime?: string | undefined
  message?: string | undefined
  reason?: string | undefined
  status?: {} | undefined
  type?: {} | undefined
}
type V1ReplicaSet = {
  apiVersion?: string | undefined
  kind?: string | undefined
  metadata?:
    | {
        annotations?: { [x: string]: string } | undefined
        creationTimestamp?: string | undefined
        deletionGracePeriodSeconds?: number | undefined
        deletionTimestamp?: string | undefined
        finalizers?: string[] | undefined
        generateName?: string | undefined
        generation?: number | undefined
        labels?: { [x: string]: string } | undefined
        managedFields?: V1ManagedFieldsEntry[] | undefined
        name?: string | undefined
        namespace?: string | undefined
        ownerReferences?: V1OwnerReference[] | undefined
        resourceVersion?: string | undefined
        selfLink?: string | undefined
        uid?: string | undefined
      }
    | undefined
  spec?:
    | {
        minReadySeconds?: number | undefined
        replicas?: number | undefined
        selector?:
          | {
              matchExpressions?: V1LabelSelectorRequirement[] | undefined
              matchLabels?: { [x: string]: string } | undefined
            }
          | undefined
        template?:
          | {
              metadata?:
                | {
                    annotations?: { [x: string]: string } | undefined
                    creationTimestamp?: string | undefined
                    deletionGracePeriodSeconds?: number | undefined
                    deletionTimestamp?: string | undefined
                    finalizers?: string[] | undefined
                    generateName?: string | undefined
                    generation?: number | undefined
                    labels?: { [x: string]: string } | undefined
                    managedFields?: V1ManagedFieldsEntry[] | undefined
                    name?: string | undefined
                    namespace?: string | undefined
                    ownerReferences?: V1OwnerReference[] | undefined
                    resourceVersion?: string | undefined
                    selfLink?: string | undefined
                    uid?: string | undefined
                  }
                | undefined
              spec?:
                | {
                    activeDeadlineSeconds?: number | undefined
                    affinity?:
                      | {
                          nodeAffinity?:
                            | {
                                preferredDuringSchedulingIgnoredDuringExecution?:
                                  | V1PreferredSchedulingTerm[]
                                  | undefined
                                requiredDuringSchedulingIgnoredDuringExecution?:
                                  | { nodeSelectorTerms?: V1NodeSelectorTerm[] | undefined }
                                  | undefined
                              }
                            | undefined
                          podAffinity?:
                            | {
                                preferredDuringSchedulingIgnoredDuringExecution?:
                                  | V1WeightedPodAffinityTerm[]
                                  | undefined
                                requiredDuringSchedulingIgnoredDuringExecution?:
                                  | V1PodAffinityTerm[]
                                  | undefined
                              }
                            | undefined
                          podAntiAffinity?:
                            | {
                                preferredDuringSchedulingIgnoredDuringExecution?:
                                  | V1WeightedPodAffinityTerm[]
                                  | undefined
                                requiredDuringSchedulingIgnoredDuringExecution?:
                                  | V1PodAffinityTerm[]
                                  | undefined
                              }
                            | undefined
                        }
                      | undefined
                    automountServiceAccountToken?: boolean | undefined
                    containers?: V1Container[] | undefined
                    dnsConfig?:
                      | {
                          nameservers?: string[] | undefined
                          options?: V1PodDNSConfigOption[] | undefined
                          searches?: string[] | undefined
                        }
                      | undefined
                    dnsPolicy?: {} | undefined
                    enableServiceLinks?: boolean | undefined
                    ephemeralContainers?: V1EphemeralContainer[] | undefined
                    hostAliases?: V1HostAlias[] | undefined
                    hostIPC?: boolean | undefined
                    hostNetwork?: boolean | undefined
                    hostPID?: boolean | undefined
                    hostUsers?: boolean | undefined
                    hostname?: string | undefined
                    hostnameOverride?: string | undefined
                    imagePullSecrets?: K8sIoApiCoreV1LocalObjectReference[] | undefined
                    initContainers?: V1Container[] | undefined
                    nodeName?: string | undefined
                    nodeSelector?: { [x: string]: string } | undefined
                    os?: { name?: {} | undefined } | undefined
                    overhead?: {} | undefined
                    preemptionPolicy?: {} | undefined
                    priority?: number | undefined
                    priorityClassName?: string | undefined
                    readinessGates?: V1PodReadinessGate[] | undefined
                    resourceClaims?: V1PodResourceClaim[] | undefined
                    resources?:
                      | {
                          claims?: K8sIoApiCoreV1ResourceClaim[] | undefined
                          limits?: {} | undefined
                          requests?: {} | undefined
                        }
                      | undefined
                    restartPolicy?: {} | undefined
                    runtimeClassName?: string | undefined
                    schedulerName?: string | undefined
                    schedulingGates?: V1PodSchedulingGate[] | undefined
                    securityContext?:
                      | {
                          appArmorProfile?:
                            | { localhostProfile?: string | undefined; type?: {} | undefined }
                            | undefined
                          fsGroup?: number | undefined
                          fsGroupChangePolicy?: {} | undefined
                          runAsGroup?: number | undefined
                          runAsNonRoot?: boolean | undefined
                          runAsUser?: number | undefined
                          seLinuxChangePolicy?: {} | undefined
                          seLinuxOptions?:
                            | {
                                level?: string | undefined
                                role?: string | undefined
                                type?: string | undefined
                                user?: string | undefined
                              }
                            | undefined
                          seccompProfile?:
                            | { localhostProfile?: string | undefined; type?: {} | undefined }
                            | undefined
                          supplementalGroups?: number[] | undefined
                          supplementalGroupsPolicy?: {} | undefined
                          sysctls?: V1Sysctl[] | undefined
                          windowsOptions?:
                            | {
                                gmsaCredentialSpec?: string | undefined
                                gmsaCredentialSpecName?: string | undefined
                                hostProcess?: boolean | undefined
                                runAsUserName?: string | undefined
                              }
                            | undefined
                        }
                      | undefined
                    serviceAccount?: string | undefined
                    serviceAccountName?: string | undefined
                    setHostnameAsFQDN?: boolean | undefined
                    shareProcessNamespace?: boolean | undefined
                    subdomain?: string | undefined
                    terminationGracePeriodSeconds?: number | undefined
                    tolerations?: V1Toleration[] | undefined
                    topologySpreadConstraints?: V1TopologySpreadConstraint[] | undefined
                    volumes?: V1Volume[] | undefined
                    workloadRef?:
                      | {
                          name?: string | undefined
                          podGroup?: string | undefined
                          podGroupReplicaKey?: string | undefined
                        }
                      | undefined
                  }
                | undefined
            }
          | undefined
      }
    | undefined
  status?:
    | {
        availableReplicas?: number | undefined
        conditions?: V1ReplicaSetCondition[] | undefined
        fullyLabeledReplicas?: number | undefined
        observedGeneration?: number | undefined
        readyReplicas?: number | undefined
        replicas?: number | undefined
        terminatingReplicas?: number | undefined
      }
    | undefined
}
type KubernetesKubernetesReplicaSetListResponse = {
  apiVersion?: string | undefined
  items?: V1ReplicaSet[] | undefined
  kind?: string | undefined
  metadata?:
    | {
        continue?: string | undefined
        remainingItemCount?: number | undefined
        resourceVersion?: string | undefined
        selfLink?: string | undefined
      }
    | undefined
}
type KubernetesKubernetesResourceQuotaListResponse = {
  apiVersion?: string | undefined
  items?: V1ResourceQuota[] | undefined
  kind?: string | undefined
  metadata?:
    | {
        continue?: string | undefined
        remainingItemCount?: number | undefined
        resourceVersion?: string | undefined
        selfLink?: string | undefined
      }
    | undefined
}
type KubernetesK8sSecretWriteRequest = {
  Annotations?: { [x: string]: string } | undefined
  Data?: { [x: string]: string } | undefined
  Labels?: { [x: string]: string } | undefined
  Name?: string | undefined
  SecretType?: string | undefined
}
type KubernetesK8sSecret = {
  Annotations?: { [x: string]: string } | undefined
  ConfigurationOwner?: string | undefined
  ConfigurationOwnerId?: string | undefined
  ConfigurationOwners?: KubernetesK8sConfigurationOwnerResource[] | undefined
  CreationDate?: string | undefined
  Data?: { [x: string]: string } | undefined
  IsUsed?: boolean | undefined
  Labels?: { [x: string]: string } | undefined
  Name?: string | undefined
  Namespace?: string | undefined
  SecretType?: string | undefined
  UID?: string | undefined
}
type KubernetesK8sServiceAccount = {
  annotations?: { [x: string]: string } | undefined
  automountServiceAccountToken?: boolean | undefined
  creationDate?: string | undefined
  imagePullSecrets?: K8sIoApiCoreV1LocalObjectReference[] | undefined
  isSystem?: boolean | undefined
  labels?: { [x: string]: string } | undefined
  name?: string | undefined
  namespace?: string | undefined
  uid?: string | undefined
}
type KubernetesK8sServiceAccountImagePullSecretsUpdatePayload = {
  secretNames?: string[] | undefined
}
type KubernetesK8sServiceIngress = { Hostname?: string | undefined; IP?: string | undefined }
type KubernetesK8sServicePort = {
  Name?: string | undefined
  NodePort?: number | undefined
  Port?: number | undefined
  Protocol?: string | undefined
  TargetPort?: string | undefined
}
type KubernetesK8sServiceInfo = {
  AllocateLoadBalancerNodePorts?: boolean | undefined
  Annotations?: { [x: string]: string } | undefined
  Applications?: KubernetesK8sApplication[] | undefined
  ClusterIPs?: string[] | undefined
  CreationDate?: string | undefined
  ExternalIPs?: string[] | undefined
  ExternalName?: string | undefined
  IngressStatus?: KubernetesK8sServiceIngress[] | undefined
  Labels?: { [x: string]: string } | undefined
  Name?: string | undefined
  Namespace?: string | undefined
  Ports?: KubernetesK8sServicePort[] | undefined
  Selector?: { [x: string]: string } | undefined
  Type?: string | undefined
  UID?: string | undefined
}
type KubernetesNamespacesToggleSystemPayload = { System?: boolean | undefined }
type K8sIoApiCoreV1ObjectReference = {
  apiVersion?: string | undefined
  fieldPath?: string | undefined
  kind?: string | undefined
  name?: string | undefined
  namespace?: string | undefined
  resourceVersion?: string | undefined
  uid?: string | undefined
}
type V1CSIPersistentVolumeSource = {
  controllerExpandSecretRef?:
    | { name?: string | undefined; namespace?: string | undefined }
    | undefined
  controllerPublishSecretRef?:
    | { name?: string | undefined; namespace?: string | undefined }
    | undefined
  driver?: string | undefined
  fsType?: string | undefined
  nodeExpandSecretRef?: { name?: string | undefined; namespace?: string | undefined } | undefined
  nodePublishSecretRef?: { name?: string | undefined; namespace?: string | undefined } | undefined
  nodeStageSecretRef?: { name?: string | undefined; namespace?: string | undefined } | undefined
  readOnly?: boolean | undefined
  volumeAttributes?: { [x: string]: string } | undefined
  volumeHandle?: string | undefined
}
type V1PersistentVolumeReclaimPolicy = 'Recycle' | 'Delete' | 'Retain'
type V1PersistentVolumePhase = 'Pending' | 'Available' | 'Bound' | 'Released' | 'Failed'
type KubernetesK8sPersistentVolume = {
  accessModes?: string[] | undefined
  annotations?: { [x: string]: string } | undefined
  capacity?: V1ResourceList | undefined
  claimRef?: K8sIoApiCoreV1ObjectReference | undefined
  creationDate?: string | undefined
  csi?: V1CSIPersistentVolumeSource | undefined
  humanReadableAccessModes?: V1PersistentVolumeAccessMode[] | undefined
  labels?: { [x: string]: string } | undefined
  name?: string | undefined
  persistentVolumeReclaimPolicy?: V1PersistentVolumeReclaimPolicy | undefined
  status?: V1PersistentVolumePhase | undefined
  storageClassName?: string | undefined
  volumeMode?: V1PersistentVolumeMode | undefined
}
type KubernetesK8sStorageClass = {
  allowVolumeExpansion?: boolean | undefined
  annotations?: { [x: string]: string } | undefined
  creationDate?: string | undefined
  isDefault?: boolean | undefined
  labels?: { [x: string]: string } | undefined
  mountOptions?: string[] | undefined
  name?: string | undefined
  parameters?: { [x: string]: string } | undefined
  provisioner?: string | undefined
  reclaimPolicy?: V1PersistentVolumeReclaimPolicy | undefined
}
type KubernetesK8sVolumeInfo = {
  persistentVolume?: KubernetesK8sPersistentVolume | undefined
  persistentVolumeClaim?: KubernetesK8sPersistentVolumeClaim | undefined
  storageClass?: KubernetesK8sStorageClass | undefined
}
type V1Taint = {
  effect?: {} | undefined
  key?: string | undefined
  timeAdded?: string | undefined
  value?: string | undefined
}
type V1NodeAddress = { address?: string | undefined; type?: {} | undefined }
type V1NodeCondition = {
  lastHeartbeatTime?: string | undefined
  lastTransitionTime?: string | undefined
  message?: string | undefined
  reason?: string | undefined
  status?: {} | undefined
  type?: {} | undefined
}
type V1ContainerImage = { names?: string[] | undefined; sizeBytes?: number | undefined }
type V1NodeRuntimeHandler = {
  features?:
    | { recursiveReadOnlyMounts?: boolean | undefined; userNamespaces?: boolean | undefined }
    | undefined
  name?: string | undefined
}
type V1AttachedVolume = { devicePath?: string | undefined; name?: string | undefined }
type KubernetesKubernetesNodeResponse = {
  apiVersion?: string | undefined
  kind?: string | undefined
  metadata?:
    | {
        annotations?: { [x: string]: string } | undefined
        creationTimestamp?: string | undefined
        deletionGracePeriodSeconds?: number | undefined
        deletionTimestamp?: string | undefined
        finalizers?: string[] | undefined
        generateName?: string | undefined
        generation?: number | undefined
        labels?: { [x: string]: string } | undefined
        managedFields?: V1ManagedFieldsEntry[] | undefined
        name?: string | undefined
        namespace?: string | undefined
        ownerReferences?: V1OwnerReference[] | undefined
        resourceVersion?: string | undefined
        selfLink?: string | undefined
        uid?: string | undefined
      }
    | undefined
  spec?:
    | {
        configSource?:
          | {
              configMap?:
                | {
                    kubeletConfigKey?: string | undefined
                    name?: string | undefined
                    namespace?: string | undefined
                    resourceVersion?: string | undefined
                    uid?: string | undefined
                  }
                | undefined
            }
          | undefined
        externalID?: string | undefined
        podCIDR?: string | undefined
        podCIDRs?: string[] | undefined
        providerID?: string | undefined
        taints?: V1Taint[] | undefined
        unschedulable?: boolean | undefined
      }
    | undefined
  status?:
    | {
        addresses?: V1NodeAddress[] | undefined
        allocatable?: {} | undefined
        capacity?: {} | undefined
        conditions?: V1NodeCondition[] | undefined
        config?:
          | {
              active?:
                | {
                    configMap?:
                      | {
                          kubeletConfigKey?: string | undefined
                          name?: string | undefined
                          namespace?: string | undefined
                          resourceVersion?: string | undefined
                          uid?: string | undefined
                        }
                      | undefined
                  }
                | undefined
              assigned?:
                | {
                    configMap?:
                      | {
                          kubeletConfigKey?: string | undefined
                          name?: string | undefined
                          namespace?: string | undefined
                          resourceVersion?: string | undefined
                          uid?: string | undefined
                        }
                      | undefined
                  }
                | undefined
              error?: string | undefined
              lastKnownGood?:
                | {
                    configMap?:
                      | {
                          kubeletConfigKey?: string | undefined
                          name?: string | undefined
                          namespace?: string | undefined
                          resourceVersion?: string | undefined
                          uid?: string | undefined
                        }
                      | undefined
                  }
                | undefined
            }
          | undefined
        daemonEndpoints?:
          | { kubeletEndpoint?: { Port?: number | undefined } | undefined }
          | undefined
        declaredFeatures?: string[] | undefined
        features?: { supplementalGroupsPolicy?: boolean | undefined } | undefined
        images?: V1ContainerImage[] | undefined
        nodeInfo?:
          | {
              architecture?: string | undefined
              bootID?: string | undefined
              containerRuntimeVersion?: string | undefined
              kernelVersion?: string | undefined
              kubeProxyVersion?: string | undefined
              kubeletVersion?: string | undefined
              machineID?: string | undefined
              operatingSystem?: string | undefined
              osImage?: string | undefined
              swap?: { capacity?: number | undefined } | undefined
              systemUUID?: string | undefined
            }
          | undefined
        phase?: {} | undefined
        runtimeHandlers?: V1NodeRuntimeHandler[] | undefined
        volumesAttached?: V1AttachedVolume[] | undefined
        volumesInUse?: string[] | undefined
      }
    | undefined
}
type KubernetesDrainNodePayload = {
  DeleteEmptyDirData?: boolean | undefined
  DisableEviction?: boolean | undefined
  Force?: boolean | undefined
  GracePeriodSeconds?: number | undefined
  IgnoreDaemonSets?: boolean | undefined
  TimeoutSeconds?: number | undefined
}
type KubernetesK8sVolumeDeleteRequest = {
  name?: string | undefined
  namespace?: string | undefined
}
type KubernetesK8sPVCResizeRequest = {
  name?: string | undefined
  namespace?: string | undefined
  newSize?: string | undefined
}
type KubernetesK8sPVReclaimPolicyRequest = {
  name?: string | undefined
  reclaimPolicy?: V1PersistentVolumeReclaimPolicy | undefined
}
type KubernetesK8sRoleBindingDeleteRequests = { [x: string]: string[] }
type KubernetesK8sRoleBinding = {
  creationDate?: string | undefined
  isSystem?: boolean | undefined
  name?: string | undefined
  namespace?: string | undefined
  roleRef?: V1RoleRef | undefined
  subjects?: K8sIoApiRbacV1Subject[] | undefined
  uid?: string | undefined
}
type KubernetesK8sRole = {
  creationDate?: string | undefined
  isSystem?: boolean | undefined
  name?: string | undefined
  namespace?: string | undefined
  uid?: string | undefined
}
type KubernetesK8sRoleDeleteRequests = { [x: string]: string[] }
type KubernetesK8sServiceAccountDeleteRequests = { [x: string]: string[] }
type KubernetesK8sServiceDeleteRequests = { [x: string]: string[] }
type KubernetesKubernetesVersionResponse = {
  buildDate?: string | undefined
  compiler?: string | undefined
  emulationMajor?: string | undefined
  emulationMinor?: string | undefined
  gitCommit?: string | undefined
  gitTreeState?: string | undefined
  gitVersion?: string | undefined
  goVersion?: string | undefined
  major?: string | undefined
  minCompatibilityMajor?: string | undefined
  minCompatibilityMinor?: string | undefined
  minor?: string | undefined
  platform?: string | undefined
  supportsPodRestart?: boolean | undefined
}
type PortainerLDAPGroupSearchSettings = {
  GroupAttribute?: string | undefined
  GroupBaseDN?: string | undefined
  GroupFilter?: string | undefined
}
type PortainerLDAPSearchSettings = {
  BaseDN?: string | undefined
  Filter?: string | undefined
  UserNameAttribute?: string | undefined
}
type PortainerLDAPSettings = {
  AnonymousMode?: boolean | undefined
  AutoCreateUsers?: boolean | undefined
  GroupSearchSettings?: PortainerLDAPGroupSearchSettings[] | undefined
  Password?: string | undefined
  ReaderDN?: string | undefined
  SearchSettings?: PortainerLDAPSearchSettings[] | undefined
  StartTLS?: boolean | undefined
  TLSConfig?: PortainerTLSConfiguration | undefined
  URL?: string | undefined
}
type LdapCheckPayload = { LDAPSettings?: PortainerLDAPSettings | undefined }
type MotdMotd = {
  ContentLayout?: { [x: string]: string } | undefined
  Hash?: number[] | undefined
  Message?: string | undefined
  Style?: string | undefined
  Title?: string | undefined
}
type RegistriesRegistryCreatePayload = {
  Authentication: boolean
  BaseURL?: string | undefined
  Ecr?: { Region?: string | undefined } | undefined
  Gitlab?:
    | {
        InstanceURL?: string | undefined
        ProjectId?: number | undefined
        ProjectPath?: string | undefined
      }
    | undefined
  Name: string
  Password?: string | undefined
  Quay?:
    | { OrganisationName?: string | undefined; UseOrganisation?: boolean | undefined }
    | undefined
  TLS?: boolean | undefined
  Type: {}
  URL: string
  Username?: string | undefined
}
type RegistriesRegistryUpdatePayload = {
  Authentication: boolean
  BaseURL?: string | undefined
  Ecr?: { Region?: string | undefined } | undefined
  Name: string
  Password?: string | undefined
  Quay?:
    | { OrganisationName?: string | undefined; UseOrganisation?: boolean | undefined }
    | undefined
  RegistryAccesses?: {} | undefined
  URL: string
  Username?: string | undefined
}
type RegistriesRegistryConfigurePayload = {
  Authentication: boolean
  Password?: string | undefined
  Region?: string | undefined
  TLS?: boolean | undefined
  TLSCACertFile?: number[] | undefined
  TLSCertFile?: number[] | undefined
  TLSKeyFile?: number[] | undefined
  TLSSkipVerify?: boolean | undefined
  Username?: string | undefined
}
type RegistriesRegistryPingPayload = {
  Password?: string | undefined
  TLS?: boolean | undefined
  Type: {}
  URL: string
  Username?: string | undefined
}
type RegistriesRegistryPingResponse = {
  message?: string | undefined
  success?: boolean | undefined
}
type ResourcecontrolsResourceControlCreatePayload = {
  AdministratorsOnly?: boolean | undefined
  Public?: boolean | undefined
  ResourceID: string
  SubResourceIDs?: string[] | undefined
  Teams?: number[] | undefined
  Type: {}
  Users?: number[] | undefined
}
type ResourcecontrolsResourceControlUpdatePayload = {
  AdministratorsOnly?: boolean | undefined
  Public?: boolean | undefined
  Teams?: number[] | undefined
  Users?: number[] | undefined
}
type BackupRestorePayload = {
  FileContent?: number[] | undefined
  FileName?: string | undefined
  Password?: string | undefined
}
type PortainerRole = {
  Authorizations?: {} | undefined
  Description?: string | undefined
  Id?: number | undefined
  Name?: string | undefined
  Priority?: number | undefined
}
type PortainerEdge = {
  AsyncMode?: boolean | undefined
  CommandInterval?: number | undefined
  PingInterval?: number | undefined
  SnapshotInterval?: number | undefined
}
type PortainerInternalAuthSettings = { RequiredPasswordLength?: number | undefined }
type Oauth2AuthStyle = 0 | 1 | 2
type PortainerOAuthSettings = {
  AccessTokenURI?: string | undefined
  AuthStyle?: Oauth2AuthStyle | undefined
  AuthorizationURI?: string | undefined
  ClientID?: string | undefined
  ClientSecret?: string | undefined
  DefaultTeamID?: number | undefined
  KubeSecretKey?: number[] | undefined
  LogoutURI?: string | undefined
  OAuthAutoCreateUsers?: boolean | undefined
  RedirectURI?: string | undefined
  ResourceURI?: string | undefined
  SSO?: boolean | undefined
  Scopes?: string | undefined
  UserIdentifier?: string | undefined
}
type PortainerSettings = {
  AgentSecret?: string | undefined
  AllowBindMountsForRegularUsers?: boolean | undefined
  AllowContainerCapabilitiesForRegularUsers?: boolean | undefined
  AllowDeviceMappingForRegularUsers?: boolean | undefined
  AllowHostNamespaceForRegularUsers?: boolean | undefined
  AllowPrivilegedModeForRegularUsers?: boolean | undefined
  AllowStackManagementForRegularUsers?: boolean | undefined
  AllowVolumeBrowserForRegularUsers?: boolean | undefined
  AuthenticationMethod?: {} | undefined
  BlackListedLabels?: PortainerPair[] | undefined
  DisplayDonationHeader?: boolean | undefined
  DisplayExternalContributors?: boolean | undefined
  Edge?: PortainerEdge | undefined
  EdgeAgentCheckinInterval?: number | undefined
  EdgePortainerUrl?: string | undefined
  EnableEdgeComputeFeatures?: boolean | undefined
  EnableHostManagementFeatures?: boolean | undefined
  EnforceEdgeID?: boolean | undefined
  FeatureFlagSettings?: { [x: string]: boolean } | undefined
  ForceSecureCookies?: boolean | undefined
  GlobalDeploymentOptions?: { hideStacksFunctionality?: boolean | undefined } | undefined
  HelmRepositoryURL?: string | undefined
  InternalAuthSettings?: PortainerInternalAuthSettings | undefined
  IsDockerDesktopExtension?: boolean | undefined
  KubeconfigExpiry?: string | undefined
  KubectlShellImage?: string | undefined
  LDAPSettings?: PortainerLDAPSettings | undefined
  LogoURL?: string | undefined
  OAuthSettings?: PortainerOAuthSettings | undefined
  SnapshotInterval?: string | undefined
  TemplatesURL?: string | undefined
  TrustOnFirstConnect?: boolean | undefined
  UserSessionTimeout?: string | undefined
}
type SettingsSettingsUpdatePayload = {
  AuthenticationMethod?: number | undefined
  BlackListedLabels?: PortainerPair[] | undefined
  EdgeAgentCheckinInterval?: number | undefined
  EdgePortainerURL?: string | undefined
  EnableEdgeComputeFeatures?: boolean | undefined
  EnforceEdgeID?: boolean | undefined
  ForceSecureCookies?: boolean | undefined
  GlobalDeploymentOptions?: { hideStacksFunctionality?: boolean | undefined } | undefined
  HelmRepositoryURL?: string | undefined
  InternalAuthSettings?: PortainerInternalAuthSettings | undefined
  KubeconfigExpiry?: string | undefined
  KubectlShellImage?: string | undefined
  LDAPSettings?: PortainerLDAPSettings | undefined
  LogoURL?: string | undefined
  OAuthSettings?: PortainerOAuthSettings | undefined
  SnapshotInterval?: string | undefined
  TemplatesURL?: string | undefined
  TrustOnFirstConnect?: boolean | undefined
  UserSessionTimeout?: string | undefined
}
type SettingsPublicSettingsResponse = {
  AuthenticationMethod?: {} | undefined
  Edge?:
    | {
        CheckinInterval?: number | undefined
        CommandInterval?: number | undefined
        PingInterval?: number | undefined
        SnapshotInterval?: number | undefined
      }
    | undefined
  EnableEdgeComputeFeatures?: boolean | undefined
  Features?: { [x: string]: boolean } | undefined
  GlobalDeploymentOptions?: { hideStacksFunctionality?: boolean | undefined } | undefined
  IsDockerDesktopExtension?: boolean | undefined
  KubeconfigExpiry?: string | undefined
  LogoURL?: string | undefined
  OAuthLoginURI?: string | undefined
  OAuthLogoutURI?: string | undefined
  RequiredPasswordLength?: number | undefined
  RequiresSetupToken?: boolean | undefined
  TeamSync?: boolean | undefined
}
type PortainerSSLSettings = {
  certPath?: string | undefined
  httpEnabled?: boolean | undefined
  keyPath?: string | undefined
  selfSigned?: boolean | undefined
}
type SslSslUpdatePayload = {
  Cert?: string | undefined
  HTTPEnabled?: boolean | undefined
  Key?: string | undefined
}
type PortainerStackStatus = 0 | 1 | 2 | 3 | 4
type PortainerStackDeploymentStatus = {
  Message?: string | undefined
  Status?: PortainerStackStatus | undefined
  Time?: number | undefined
}
type PortainerStack = {
  AdditionalFiles?: string[] | undefined
  AutoUpdate?:
    | {
        ForcePullImage?: boolean | undefined
        ForceUpdate?: boolean | undefined
        Interval?: string | undefined
        JobID?: string | undefined
        Webhook?: string | undefined
      }
    | undefined
  CreatedBy?: string | undefined
  CreationDate?: number | undefined
  CurrentDeploymentInfo?:
    | {
        AdditionalFiles?: string[] | undefined
        ConfigFilePath?: string | undefined
        ConfigHash?: string | undefined
        FileVersion?: number | undefined
        ReferenceName?: string | undefined
        RepositoryURL?: string | undefined
        SourceID?: number | undefined
        Version?: number | undefined
      }
    | undefined
  DeploymentStartStatus?: {} | undefined
  DeploymentStatus?: PortainerStackDeploymentStatus[] | undefined
  EndpointId?: number | undefined
  EntryPoint?: string | undefined
  Env?: PortainerPair[] | undefined
  FromAppTemplate?: boolean | undefined
  GitConfig?:
    | {
        Authentication?:
          | {
              AuthorizationType?: number | undefined
              GitCredentialID?: number | undefined
              Password?: string | undefined
              Provider?: number | undefined
              Username?: string | undefined
            }
          | undefined
        ConfigFilePath?: string | undefined
        ConfigHash?: string | undefined
        ReferenceName?: string | undefined
        TLSSkipVerify?: boolean | undefined
        URL?: string | undefined
      }
    | undefined
  Id?: number | undefined
  Name?: string | undefined
  Namespace?: string | undefined
  Option?: { HelmAtomic?: boolean | undefined; Prune?: boolean | undefined } | undefined
  ProjectPath?: string | undefined
  ResourceControl?: PortainerResourceControl | undefined
  Status?: {} | undefined
  SwarmId?: string | undefined
  Type?: {} | undefined
  UpdateDate?: number | undefined
  UpdatedBy?: string | undefined
  WorkflowID?: number | undefined
}
type StacksStackResponse = {
  AdditionalFiles?: string[] | undefined
  AutoUpdate?:
    | {
        ForcePullImage?: boolean | undefined
        ForceUpdate?: boolean | undefined
        Interval?: string | undefined
        JobID?: string | undefined
        Webhook?: string | undefined
      }
    | undefined
  CreatedBy?: string | undefined
  CreationDate?: number | undefined
  CurrentDeploymentInfo?:
    | {
        AdditionalFiles?: string[] | undefined
        ConfigFilePath?: string | undefined
        ConfigHash?: string | undefined
        FileVersion?: number | undefined
        ReferenceName?: string | undefined
        RepositoryURL?: string | undefined
        SourceID?: number | undefined
        Version?: number | undefined
      }
    | undefined
  DeploymentStartStatus?: {} | undefined
  DeploymentStatus?: PortainerStackDeploymentStatus[] | undefined
  EndpointId?: number | undefined
  EntryPoint?: string | undefined
  Env?: PortainerPair[] | undefined
  FromAppTemplate?: boolean | undefined
  GitConfig?:
    | {
        Authentication?:
          | {
              AuthorizationType?: number | undefined
              GitCredentialID?: number | undefined
              Password?: string | undefined
              Provider?: number | undefined
              Username?: string | undefined
            }
          | undefined
        ConfigFilePath?: string | undefined
        ConfigHash?: string | undefined
        ReferenceName?: string | undefined
        TLSSkipVerify?: boolean | undefined
        URL?: string | undefined
      }
    | undefined
  GitSourceId?: number | undefined
  Id?: number | undefined
  Name?: string | undefined
  Namespace?: string | undefined
  Option?: { HelmAtomic?: boolean | undefined; Prune?: boolean | undefined } | undefined
  ProjectPath?: string | undefined
  ResourceControl?: PortainerResourceControl | undefined
  Status?: {} | undefined
  SwarmId?: string | undefined
  Type?: {} | undefined
  UpdateDate?: number | undefined
  UpdatedBy?: string | undefined
  WorkflowID?: number | undefined
}
type StacksUpdateSwarmStackPayload = {
  Env?: PortainerPair[] | undefined
  Prune?: boolean | undefined
  PullImage?: boolean | undefined
  RepullImageAndRedeploy?: boolean | undefined
  StackFileContent?: string | undefined
}
type StacksStackFileResponse = { StackFileContent?: string | undefined }
type StacksStackGitUpdatePayload = {
  AdditionalFiles?: string[] | undefined
  AutoUpdate?: PortainerAutoUpdateSettings | undefined
  ConfigFilePath?: string | undefined
  Env?: PortainerPair[] | undefined
  Prune?: boolean | undefined
  RepositoryAuthentication?: boolean | undefined
  RepositoryPassword?: string | undefined
  RepositoryReferenceName?: string | undefined
  RepositoryURL?: string | undefined
  RepositoryUsername?: string | undefined
  SourceID?: number | undefined
  TLSSkipVerify?: boolean | undefined
}
type StacksStackGitRedeployPayload = {
  Env?: PortainerPair[] | undefined
  Prune?: boolean | undefined
  PullImage?: boolean | undefined
  RepositoryAuthentication?: boolean | undefined
  RepositoryPassword?: string | undefined
  RepositoryReferenceName?: string | undefined
  RepositoryUsername?: string | undefined
  RepullImageAndRedeploy?: boolean | undefined
  StackName?: string | undefined
}
type StacksStackMigratePayload = {
  EndpointID: number
  Name?: string | undefined
  SwarmID?: string | undefined
}
type StacksKubernetesGitDeploymentPayload = {
  AdditionalFiles?: string[] | undefined
  AutoUpdate?: PortainerAutoUpdateSettings | undefined
  ComposeFormat?: boolean | undefined
  ManifestFile?: string | undefined
  Namespace?: string | undefined
  RepositoryAuthentication?: boolean | undefined
  RepositoryPassword?: string | undefined
  RepositoryReferenceName?: string | undefined
  RepositoryURL?: string | undefined
  RepositoryUsername?: string | undefined
  SourceID?: number | undefined
  StackName?: string | undefined
  TLSSkipVerify?: boolean | undefined
}
type StacksCreateKubernetesStackResponse = { Output?: string | undefined }
type StacksKubernetesStringDeploymentPayload = {
  ComposeFormat?: boolean | undefined
  FromAppTemplate?: boolean | undefined
  Namespace?: string | undefined
  StackFileContent?: string | undefined
  StackName?: string | undefined
}
type StacksKubernetesManifestURLDeploymentPayload = {
  ComposeFormat?: boolean | undefined
  ManifestURL?: string | undefined
  Namespace?: string | undefined
  StackName?: string | undefined
}
type StacksComposeStackFromGitRepositoryPayload = {
  AdditionalFiles?: string[] | undefined
  AutoUpdate?:
    | {
        ForcePullImage?: boolean | undefined
        ForceUpdate?: boolean | undefined
        Interval?: string | undefined
        JobID?: string | undefined
        Webhook?: string | undefined
      }
    | undefined
  ComposeFile?: string | undefined
  Env?: PortainerPair[] | undefined
  FromAppTemplate?: boolean | undefined
  Name: string
  RepositoryAuthentication?: boolean | undefined
  RepositoryPassword?: string | undefined
  RepositoryReferenceName?: string | undefined
  RepositoryURL?: string | undefined
  RepositoryUsername?: string | undefined
  SourceID?: number | undefined
  TLSSkipVerify?: boolean | undefined
}
type StacksComposeStackFromFileContentPayload = {
  Env?: PortainerPair[] | undefined
  FromAppTemplate?: boolean | undefined
  Name: string
  StackFileContent: string
}
type StacksSwarmStackFromGitRepositoryPayload = {
  AdditionalFiles?: string[] | undefined
  AutoUpdate?:
    | {
        ForcePullImage?: boolean | undefined
        ForceUpdate?: boolean | undefined
        Interval?: string | undefined
        JobID?: string | undefined
        Webhook?: string | undefined
      }
    | undefined
  ComposeFile?: string | undefined
  Env?: PortainerPair[] | undefined
  FromAppTemplate?: boolean | undefined
  Name: string
  RepositoryAuthentication?: boolean | undefined
  RepositoryPassword?: string | undefined
  RepositoryReferenceName?: string | undefined
  RepositoryURL?: string | undefined
  RepositoryUsername?: string | undefined
  SourceID?: number | undefined
  SwarmID: string
  TLSSkipVerify?: boolean | undefined
}
type StacksSwarmStackFromFileContentPayload = {
  Env?: PortainerPair[] | undefined
  FromAppTemplate?: boolean | undefined
  Name: string
  StackFileContent: string
  SwarmID: string
}
type SystemStatus = { InstanceID?: string | undefined; Version?: string | undefined }
type PlatformContainerPlatform =
  | 'Docker'
  | 'Docker Standalone'
  | 'Docker Swarm'
  | 'Kubernetes'
  | 'Podman'
type SystemSystemInfoResponse = {
  agents?: number | undefined
  edgeAgents?: number | undefined
  platform?: PlatformContainerPlatform | undefined
}
type SystemNodesCountResponse = { nodes?: number | undefined }
type BuildBuildInfo = {
  BuildNumber?: string | undefined
  GitCommit?: string | undefined
  GoVersion?: string | undefined
  ImageTag?: string | undefined
  NodejsVersion?: string | undefined
  PnpmVersion?: string | undefined
  WebpackVersion?: string | undefined
}
type BuildDependenciesInfo = {
  ComposeVersion?: string | undefined
  DockerVersion?: string | undefined
  HelmVersion?: string | undefined
  KubectlVersion?: string | undefined
}
type BuildRuntimeInfo = { Env?: string[] | undefined }
type SystemVersionResponse = {
  Build?: BuildBuildInfo | undefined
  DatabaseVersion?: string | undefined
  Dependencies?: BuildDependenciesInfo | undefined
  LatestVersion?: string | undefined
  Runtime?: BuildRuntimeInfo | undefined
  ServerEdition?: string | undefined
  ServerVersion?: string | undefined
  UpdateAvailable?: boolean | undefined
  VersionSupport?: string | undefined
}
type PortainerTag = {
  EndpointGroups?: { [x: string]: boolean } | undefined
  Endpoints?: { [x: string]: boolean } | undefined
  ID?: number | undefined
  Name?: string | undefined
}
type TagsTagCreatePayload = { Name: string }
type PortainerTeamMembership = {
  Id?: number | undefined
  Role?: {} | undefined
  TeamID?: number | undefined
  UserID?: number | undefined
}
type TeammembershipsTeamMembershipCreatePayload = { Role: 1 | 2; TeamID: number; UserID: number }
type TeammembershipsTeamMembershipUpdatePayload = { Role: 1 | 2; TeamID: number; UserID: number }
type PortainerTeam = {
  DenyPortainerAccess?: boolean | undefined
  Id?: number | undefined
  Name?: string | undefined
}
type TeamsTeamCreatePayload = { Name: string; TeamLeaders?: number[] | undefined }
type TeamsTeamUpdatePayload = { Name?: string | undefined }
type PortainerTemplateEnvSelect = {
  default?: boolean | undefined
  text?: string | undefined
  value?: string | undefined
}
type PortainerTemplateEnv = {
  default?: string | undefined
  description?: string | undefined
  label?: string | undefined
  name?: string | undefined
  preset?: boolean | undefined
  select?: PortainerTemplateEnvSelect[] | undefined
}
type PortainerTemplateVolume = {
  bind?: string | undefined
  container?: string | undefined
  readonly?: boolean | undefined
}
type PortainerTemplate = {
  administrator_only?: boolean | undefined
  categories?: string[] | undefined
  command?: string | undefined
  description?: string | undefined
  env?: PortainerTemplateEnv[] | undefined
  hostname?: string | undefined
  id?: number | undefined
  image?: string | undefined
  interactive?: boolean | undefined
  labels?: PortainerPair[] | undefined
  logo?: string | undefined
  name?: string | undefined
  network?: string | undefined
  note?: string | undefined
  platform?: string | undefined
  ports?: string[] | undefined
  privileged?: boolean | undefined
  registry?: string | undefined
  repository?: { stackfile?: string | undefined; url?: string | undefined } | undefined
  restart_policy?: string | undefined
  stackFile?: string | undefined
  title?: string | undefined
  type?: {} | undefined
  volumes?: PortainerTemplateVolume[] | undefined
}
type TemplatesListResponse = {
  templates?: PortainerTemplate[] | undefined
  version?: string | undefined
}
type TemplatesFileResponse = { FileContent?: string | undefined }
type PortainerUserThemeSettings = {
  color?: 'dark' | 'light' | 'highcontrast' | 'auto' | '' | undefined
}
type PortainerUser = {
  Id: number
  Role: {}
  ThemeSettings?: PortainerUserThemeSettings | undefined
  TokenIssueAt?: number | undefined
  UseCache?: boolean | undefined
  Username: string
}
type UsersUserCreatePayload = { Password: string; Role: 1 | 2; Username: string }
type UsersThemePayload = { color?: 'dark' | 'light' | 'highcontrast' | 'auto' | undefined }
type UsersUserUpdatePayload = {
  NewPassword: string
  Password: string
  Role: 1 | 2
  Theme?: UsersThemePayload | undefined
  UseCache: boolean
  Username: string
}
type UsersAccessLocation = 'environment' | 'environmentGroup'
type UsersEffectiveAccessEntry = {
  accessLocation?: UsersAccessLocation | undefined
  endpointId?: number | undefined
  endpointName?: string | undefined
  groupId?: number | undefined
  groupName?: string | undefined
  roleId?: number | undefined
  roleName?: string | undefined
  rolePriority?: number | undefined
  teamId?: number | undefined
  teamName?: string | undefined
}
type PortainerHelmUserRepository = {
  Id?: number | undefined
  URL?: string | undefined
  UserId?: number | undefined
}
type UsersHelmUserRepositoryResponse = {
  GlobalRepository?: string | undefined
  UserRepositories?: PortainerHelmUserRepository[] | undefined
}
type UsersAddHelmRepoUrlPayload = { url?: string | undefined }
type UsersUserUpdatePasswordPayload = { NewPassword: string; Password: string }
type PortainerAPIKey = {
  dateCreated?: number | undefined
  description?: string | undefined
  digest?: string | undefined
  id?: number | undefined
  lastUsed?: number | undefined
  prefix?: string | undefined
  userId?: number | undefined
}
type UsersUserAccessTokenCreatePayload = { description: string; password: string }
type UsersAccessTokenResponse = {
  apiKey?: PortainerAPIKey | undefined
  rawAPIKey?: string | undefined
}
type UsersAdminInitPayload = { Password: string; Username: string }
type PortainerWebhook = {
  EndpointId?: number | undefined
  Id?: number | undefined
  RegistryId?: number | undefined
  ResourceId?: string | undefined
  Token?: string | undefined
  Type?: {} | undefined
}
type WebhooksWebhookCreatePayload = {
  EndpointID?: number | undefined
  RegistryID?: number | undefined
  ResourceID?: string | undefined
  WebhookType?: {} | undefined
}
type WebhooksWebhookUpdatePayload = { RegistryID?: number | undefined }
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/auth': {
      $post:
        | {
            input: { json: AuthAuthenticatePayload }
            output: AuthAuthenticateResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: AuthAuthenticatePayload }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { json: AuthAuthenticatePayload }
            output: {}
            outputFormat: string
            status: 422
          }
        | {
            input: { json: AuthAuthenticatePayload }
            output: {}
            outputFormat: string
            status: 500
          }
    }
  } & {
    '/auth/logout': {
      $post:
        | { input: {}; output: {}; outputFormat: string; status: 204 }
        | { input: {}; output: {}; outputFormat: string; status: 500 }
    }
  } & {
    '/auth/oauth/validate': {
      $post:
        | {
            input: { json: AuthOauthPayload }
            output: AuthAuthenticateResponse
            outputFormat: 'json'
            status: 200
          }
        | { input: { json: AuthOauthPayload }; output: {}; outputFormat: string; status: 400 }
        | { input: { json: AuthOauthPayload }; output: {}; outputFormat: string; status: 422 }
        | { input: { json: AuthOauthPayload }; output: {}; outputFormat: string; status: 500 }
    }
  } & {
    '/backup': {
      $post:
        | { input: { json: BackupBackupPayload }; output: {}; outputFormat: string; status: 200 }
        | { input: { json: BackupBackupPayload }; output: {}; outputFormat: string; status: 400 }
        | { input: { json: BackupBackupPayload }; output: {}; outputFormat: string; status: 500 }
    }
  } & {
    '/custom_templates': {
      $get:
        | {
            input: { query: { type: (1 | 2 | 3)[]; edge?: boolean | undefined } }
            output: PortainerCustomTemplate[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { type: (1 | 2 | 3)[]; edge?: boolean | undefined } }
            output: {}
            outputFormat: string
            status: 500
          }
    }
  } & {
    '/custom_templates/:id': {
      $delete:
        | { input: { param: { id: number } }; output: {}; outputFormat: string; status: 204 }
        | { input: { param: { id: number } }; output: {}; outputFormat: string; status: 400 }
        | { input: { param: { id: number } }; output: {}; outputFormat: string; status: 403 }
        | { input: { param: { id: number } }; output: {}; outputFormat: string; status: 404 }
        | { input: { param: { id: number } }; output: {}; outputFormat: string; status: 500 }
      $get:
        | {
            input: { param: { id: number } }
            output: PortainerCustomTemplate
            outputFormat: 'json'
            status: 200
          }
        | { input: { param: { id: number } }; output: {}; outputFormat: string; status: 400 }
        | { input: { param: { id: number } }; output: {}; outputFormat: string; status: 404 }
        | { input: { param: { id: number } }; output: {}; outputFormat: string; status: 500 }
      $put:
        | {
            input: { param: { id: number } } & { json: CustomtemplatesCustomTemplateUpdatePayload }
            output: PortainerCustomTemplate
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: number } } & { json: CustomtemplatesCustomTemplateUpdatePayload }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { id: number } } & { json: CustomtemplatesCustomTemplateUpdatePayload }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { id: number } } & { json: CustomtemplatesCustomTemplateUpdatePayload }
            output: {}
            outputFormat: string
            status: 404
          }
        | {
            input: { param: { id: number } } & { json: CustomtemplatesCustomTemplateUpdatePayload }
            output: {}
            outputFormat: string
            status: 500
          }
    }
  } & {
    '/custom_templates/:id/file': {
      $get:
        | {
            input: { param: { id: number } }
            output: CustomtemplatesFileResponse
            outputFormat: 'json'
            status: 200
          }
        | { input: { param: { id: number } }; output: {}; outputFormat: string; status: 400 }
        | { input: { param: { id: number } }; output: {}; outputFormat: string; status: 404 }
        | { input: { param: { id: number } }; output: {}; outputFormat: string; status: 500 }
    }
  } & {
    '/custom_templates/:id/git_fetch': {
      $put:
        | {
            input: { param: { id: number } }
            output: CustomtemplatesFileResponse
            outputFormat: 'json'
            status: 200
          }
        | { input: { param: { id: number } }; output: {}; outputFormat: string; status: 400 }
        | { input: { param: { id: number } }; output: {}; outputFormat: string; status: 404 }
        | { input: { param: { id: number } }; output: {}; outputFormat: string; status: 500 }
    }
  } & {
    '/custom_templates/create/file': {
      $post:
        | {
            input: {
              form: {
                Title: string
                Description: string
                Note: string
                Platform: 1 | 2
                Type: 1 | 2 | 3
                File: File
                Logo?: string | undefined
                Variables?: string | undefined
              }
            }
            output: PortainerCustomTemplate
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              form: {
                Title: string
                Description: string
                Note: string
                Platform: 1 | 2
                Type: 1 | 2 | 3
                File: File
                Logo?: string | undefined
                Variables?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: {
              form: {
                Title: string
                Description: string
                Note: string
                Platform: 1 | 2
                Type: 1 | 2 | 3
                File: File
                Logo?: string | undefined
                Variables?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 500
          }
    }
  } & {
    '/custom_templates/create/repository': {
      $post:
        | {
            input: { json: CustomtemplatesCustomTemplateFromGitRepositoryPayload }
            output: PortainerCustomTemplate
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: CustomtemplatesCustomTemplateFromGitRepositoryPayload }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { json: CustomtemplatesCustomTemplateFromGitRepositoryPayload }
            output: {}
            outputFormat: string
            status: 500
          }
    }
  } & {
    '/custom_templates/create/string': {
      $post:
        | {
            input: { json: CustomtemplatesCustomTemplateFromFileContentPayload }
            output: PortainerCustomTemplate
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: CustomtemplatesCustomTemplateFromFileContentPayload }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { json: CustomtemplatesCustomTemplateFromFileContentPayload }
            output: {}
            outputFormat: string
            status: 500
          }
    }
  } & {
    '/docker/:environmentId/containers/:containerId/gpus': {
      $get:
        | {
            input: { param: { environmentId: number; containerId: number } }
            output: ContainersContainerGpusResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { environmentId: number; containerId: number } }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { environmentId: number; containerId: number } }
            output: {}
            outputFormat: string
            status: 404
          }
        | {
            input: { param: { environmentId: number; containerId: number } }
            output: {}
            outputFormat: string
            status: 500
          }
    }
  } & {
    '/docker/:environmentId/dashboard': {
      $get:
        | {
            input: { param: { environmentId: number } }
            output: DockerDashboardResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { environmentId: number } }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { environmentId: number } }
            output: {}
            outputFormat: string
            status: 500
          }
    }
  } & {
    '/docker/:environmentId/images': {
      $get:
        | {
            input: { param: { environmentId: number } } & {
              query: { withUsage?: boolean | undefined }
            }
            output: ImagesImageResponse[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { environmentId: number } } & {
              query: { withUsage?: boolean | undefined }
            }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { environmentId: number } } & {
              query: { withUsage?: boolean | undefined }
            }
            output: {}
            outputFormat: string
            status: 500
          }
    }
  } & {
    '/edge_groups': {
      $get:
        | { input: {}; output: EdgegroupsDecoratedEdgeGroup[]; outputFormat: 'json'; status: 200 }
        | { input: {}; output: {}; outputFormat: string; status: 500 }
        | { input: {}; output: {}; outputFormat: string; status: 503 }
      $post:
        | {
            input: { json: EdgegroupsEdgeGroupCreatePayload }
            output: PortainerEdgeGroup
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: EdgegroupsEdgeGroupCreatePayload }
            output: {}
            outputFormat: string
            status: 500
          }
        | {
            input: { json: EdgegroupsEdgeGroupCreatePayload }
            output: {}
            outputFormat: string
            status: 503
          }
    }
  } & {
    '/edge_groups/:id': {
      $delete:
        | { input: { param: { id: number } }; output: {}; outputFormat: string; status: 204 }
        | { input: { param: { id: number } }; output: {}; outputFormat: string; status: 409 }
        | { input: { param: { id: number } }; output: {}; outputFormat: string; status: 500 }
        | { input: { param: { id: number } }; output: {}; outputFormat: string; status: 503 }
      $get:
        | {
            input: { param: { id: number } }
            output: PortainerEdgeGroup
            outputFormat: 'json'
            status: 200
          }
        | { input: { param: { id: number } }; output: {}; outputFormat: string; status: 500 }
        | { input: { param: { id: number } }; output: {}; outputFormat: string; status: 503 }
      $put:
        | {
            input: { param: { id: number } } & { json: EdgegroupsEdgeGroupUpdatePayload }
            output: PortainerEdgeGroup
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: number } } & { json: EdgegroupsEdgeGroupUpdatePayload }
            output: {}
            outputFormat: string
            status: 500
          }
        | {
            input: { param: { id: number } } & { json: EdgegroupsEdgeGroupUpdatePayload }
            output: {}
            outputFormat: string
            status: 503
          }
    }
  } & {
    '/edge_jobs': {
      $get:
        | { input: {}; output: PortainerEdgeJob[]; outputFormat: 'json'; status: 200 }
        | { input: {}; output: {}; outputFormat: string; status: 400 }
        | { input: {}; output: {}; outputFormat: string; status: 500 }
        | { input: {}; output: {}; outputFormat: string; status: 503 }
    }
  } & {
    '/edge_jobs/:id': {
      $delete:
        | { input: { param: { id: number } }; output: {}; outputFormat: string; status: 204 }
        | { input: { param: { id: number } }; output: {}; outputFormat: string; status: 400 }
        | { input: { param: { id: number } }; output: {}; outputFormat: string; status: 500 }
        | { input: { param: { id: number } }; output: {}; outputFormat: string; status: 503 }
      $get:
        | {
            input: { param: { id: number } }
            output: PortainerEdgeJob
            outputFormat: 'json'
            status: 200
          }
        | { input: { param: { id: number } }; output: {}; outputFormat: string; status: 400 }
        | { input: { param: { id: number } }; output: {}; outputFormat: string; status: 500 }
        | { input: { param: { id: number } }; output: {}; outputFormat: string; status: 503 }
      $put:
        | {
            input: { param: { id: number } } & { json: EdgejobsEdgeJobUpdatePayload }
            output: PortainerEdgeJob
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: number } } & { json: EdgejobsEdgeJobUpdatePayload }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { id: number } } & { json: EdgejobsEdgeJobUpdatePayload }
            output: {}
            outputFormat: string
            status: 500
          }
        | {
            input: { param: { id: number } } & { json: EdgejobsEdgeJobUpdatePayload }
            output: {}
            outputFormat: string
            status: 503
          }
    }
  } & {
    '/edge_jobs/:id/file': {
      $get:
        | {
            input: { param: { id: number } }
            output: EdgejobsEdgeJobFileResponse
            outputFormat: 'json'
            status: 200
          }
        | { input: { param: { id: number } }; output: {}; outputFormat: string; status: 400 }
        | { input: { param: { id: number } }; output: {}; outputFormat: string; status: 500 }
        | { input: { param: { id: number } }; output: {}; outputFormat: string; status: 503 }
    }
  } & {
    '/edge_jobs/:id/tasks': {
      $get:
        | {
            input: { param: { id: number } }
            output: EdgejobsTaskContainer[]
            outputFormat: 'json'
            status: 200
          }
        | { input: { param: { id: number } }; output: {}; outputFormat: string; status: 400 }
        | { input: { param: { id: number } }; output: {}; outputFormat: string; status: 500 }
        | { input: { param: { id: number } }; output: {}; outputFormat: string; status: 503 }
    }
  } & {
    '/edge_jobs/:id/tasks/:taskID/logs': {
      $delete:
        | {
            input: { param: { id: number; taskID: number } }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { id: number; taskID: number } }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { id: number; taskID: number } }
            output: {}
            outputFormat: string
            status: 500
          }
        | {
            input: { param: { id: number; taskID: number } }
            output: {}
            outputFormat: string
            status: 503
          }
      $get:
        | {
            input: { param: { id: number; taskID: number } }
            output: EdgejobsFileResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: number; taskID: number } }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { id: number; taskID: number } }
            output: {}
            outputFormat: string
            status: 500
          }
        | {
            input: { param: { id: number; taskID: number } }
            output: {}
            outputFormat: string
            status: 503
          }
      $post:
        | {
            input: { param: { id: number; taskID: number } }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { id: number; taskID: number } }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { id: number; taskID: number } }
            output: {}
            outputFormat: string
            status: 500
          }
        | {
            input: { param: { id: number; taskID: number } }
            output: {}
            outputFormat: string
            status: 503
          }
    }
  } & {
    '/edge_jobs/create/file': {
      $post:
        | {
            input: {
              form: {
                file: File
                Name: string
                CronExpression: string
                EdgeGroups: string
                Endpoints: string
                Recurring?: boolean | undefined
              }
            }
            output: PortainerEdgeGroup
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              form: {
                file: File
                Name: string
                CronExpression: string
                EdgeGroups: string
                Endpoints: string
                Recurring?: boolean | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 500
          }
        | {
            input: {
              form: {
                file: File
                Name: string
                CronExpression: string
                EdgeGroups: string
                Endpoints: string
                Recurring?: boolean | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 503
          }
    }
  } & {
    '/edge_jobs/create/string': {
      $post:
        | {
            input: { json: EdgejobsEdgeJobCreateFromFileContentPayload }
            output: PortainerEdgeGroup
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: EdgejobsEdgeJobCreateFromFileContentPayload }
            output: {}
            outputFormat: string
            status: 500
          }
        | {
            input: { json: EdgejobsEdgeJobCreateFromFileContentPayload }
            output: {}
            outputFormat: string
            status: 503
          }
    }
  } & {
    '/edge_stacks': {
      $get:
        | {
            input: { query: { summarizeStatuses?: boolean | undefined } }
            output: PortainerEdgeStack[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { summarizeStatuses?: boolean | undefined } }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { query: { summarizeStatuses?: boolean | undefined } }
            output: {}
            outputFormat: string
            status: 500
          }
        | {
            input: { query: { summarizeStatuses?: boolean | undefined } }
            output: {}
            outputFormat: string
            status: 503
          }
    }
  } & {
    '/edge_stacks/:id': {
      $delete:
        | { input: { param: { id: number } }; output: {}; outputFormat: string; status: 204 }
        | { input: { param: { id: number } }; output: {}; outputFormat: string; status: 400 }
        | { input: { param: { id: number } }; output: {}; outputFormat: string; status: 500 }
        | { input: { param: { id: number } }; output: {}; outputFormat: string; status: 503 }
      $get:
        | {
            input: { param: { id: number } }
            output: PortainerEdgeStack
            outputFormat: 'json'
            status: 200
          }
        | { input: { param: { id: number } }; output: {}; outputFormat: string; status: 400 }
        | { input: { param: { id: number } }; output: {}; outputFormat: string; status: 500 }
        | { input: { param: { id: number } }; output: {}; outputFormat: string; status: 503 }
      $put:
        | {
            input: { param: { id: number } } & { json: EdgestacksUpdateEdgeStackPayload }
            output: PortainerEdgeStack
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: number } } & { json: EdgestacksUpdateEdgeStackPayload }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { id: number } } & { json: EdgestacksUpdateEdgeStackPayload }
            output: {}
            outputFormat: string
            status: 500
          }
        | {
            input: { param: { id: number } } & { json: EdgestacksUpdateEdgeStackPayload }
            output: {}
            outputFormat: string
            status: 503
          }
    }
  } & {
    '/edge_stacks/:id/file': {
      $get:
        | {
            input: { param: { id: number } }
            output: EdgestacksStackFileResponse
            outputFormat: 'json'
            status: 200
          }
        | { input: { param: { id: number } }; output: {}; outputFormat: string; status: 400 }
        | { input: { param: { id: number } }; output: {}; outputFormat: string; status: 500 }
        | { input: { param: { id: number } }; output: {}; outputFormat: string; status: 503 }
    }
  } & {
    '/edge_stacks/:id/status': {
      $put:
        | {
            input: { param: { id: number } } & { json: EdgestacksUpdateStatusPayload }
            output: PortainerEdgeStack
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: number } } & { json: EdgestacksUpdateStatusPayload }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { id: number } } & { json: EdgestacksUpdateStatusPayload }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { id: number } } & { json: EdgestacksUpdateStatusPayload }
            output: {}
            outputFormat: string
            status: 404
          }
        | {
            input: { param: { id: number } } & { json: EdgestacksUpdateStatusPayload }
            output: {}
            outputFormat: string
            status: 500
          }
    }
  } & {
    '/edge_stacks/create/file': {
      $post:
        | {
            input: { query: { dryrun?: string | undefined } } & {
              form: {
                Name: string
                file: File
                EdgeGroups: string
                DeploymentType: number
                Registries?: string | undefined
                UseManifestNamespaces?: boolean | undefined
                PrePullImage?: boolean | undefined
                RetryDeploy?: boolean | undefined
              }
            }
            output: PortainerEdgeStack
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { dryrun?: string | undefined } } & {
              form: {
                Name: string
                file: File
                EdgeGroups: string
                DeploymentType: number
                Registries?: string | undefined
                UseManifestNamespaces?: boolean | undefined
                PrePullImage?: boolean | undefined
                RetryDeploy?: boolean | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { query: { dryrun?: string | undefined } } & {
              form: {
                Name: string
                file: File
                EdgeGroups: string
                DeploymentType: number
                Registries?: string | undefined
                UseManifestNamespaces?: boolean | undefined
                PrePullImage?: boolean | undefined
                RetryDeploy?: boolean | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 500
          }
        | {
            input: { query: { dryrun?: string | undefined } } & {
              form: {
                Name: string
                file: File
                EdgeGroups: string
                DeploymentType: number
                Registries?: string | undefined
                UseManifestNamespaces?: boolean | undefined
                PrePullImage?: boolean | undefined
                RetryDeploy?: boolean | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 503
          }
    }
  } & {
    '/edge_stacks/create/repository': {
      $post:
        | {
            input: { query: { dryrun?: string | undefined } } & {
              json: EdgestacksEdgeStackFromGitRepositoryPayload
            }
            output: PortainerEdgeStack
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { dryrun?: string | undefined } } & {
              json: EdgestacksEdgeStackFromGitRepositoryPayload
            }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { query: { dryrun?: string | undefined } } & {
              json: EdgestacksEdgeStackFromGitRepositoryPayload
            }
            output: {}
            outputFormat: string
            status: 500
          }
        | {
            input: { query: { dryrun?: string | undefined } } & {
              json: EdgestacksEdgeStackFromGitRepositoryPayload
            }
            output: {}
            outputFormat: string
            status: 503
          }
    }
  } & {
    '/edge_stacks/create/string': {
      $post:
        | {
            input: { query: { dryrun?: string | undefined } } & {
              json: EdgestacksEdgeStackFromStringPayload
            }
            output: PortainerEdgeStack
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { dryrun?: string | undefined } } & {
              json: EdgestacksEdgeStackFromStringPayload
            }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { query: { dryrun?: string | undefined } } & {
              json: EdgestacksEdgeStackFromStringPayload
            }
            output: {}
            outputFormat: string
            status: 500
          }
        | {
            input: { query: { dryrun?: string | undefined } } & {
              json: EdgestacksEdgeStackFromStringPayload
            }
            output: {}
            outputFormat: string
            status: 503
          }
    }
  } & {
    '/endpoint_groups': {
      $get:
        | {
            input: { query: { size?: boolean | undefined } }
            output: EndpointgroupsEndpointGroupResponse[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { size?: boolean | undefined } }
            output: {}
            outputFormat: string
            status: 500
          }
      $post:
        | {
            input: { json: EndpointgroupsEndpointGroupCreatePayload }
            output: PortainerEndpointGroup
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: EndpointgroupsEndpointGroupCreatePayload }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { json: EndpointgroupsEndpointGroupCreatePayload }
            output: {}
            outputFormat: string
            status: 500
          }
    }
  } & {
    '/endpoint_groups/:id': {
      $delete:
        | { input: { param: { id: number } }; output: {}; outputFormat: string; status: 204 }
        | { input: { param: { id: number } }; output: {}; outputFormat: string; status: 400 }
        | { input: { param: { id: number } }; output: {}; outputFormat: string; status: 404 }
        | { input: { param: { id: number } }; output: {}; outputFormat: string; status: 500 }
      $get:
        | {
            input: { param: { id: number } } & { query: { size?: boolean | undefined } }
            output: EndpointgroupsEndpointGroupResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: number } } & { query: { size?: boolean | undefined } }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { id: number } } & { query: { size?: boolean | undefined } }
            output: {}
            outputFormat: string
            status: 404
          }
        | {
            input: { param: { id: number } } & { query: { size?: boolean | undefined } }
            output: {}
            outputFormat: string
            status: 500
          }
      $put:
        | {
            input: { param: { id: number } } & { json: EndpointgroupsEndpointGroupUpdatePayload }
            output: PortainerEndpointGroup
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: number } } & { json: EndpointgroupsEndpointGroupUpdatePayload }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { id: number } } & { json: EndpointgroupsEndpointGroupUpdatePayload }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { id: number } } & { json: EndpointgroupsEndpointGroupUpdatePayload }
            output: {}
            outputFormat: string
            status: 404
          }
        | {
            input: { param: { id: number } } & { json: EndpointgroupsEndpointGroupUpdatePayload }
            output: {}
            outputFormat: string
            status: 500
          }
    }
  } & {
    '/endpoint_groups/:id/endpoints/:endpointId': {
      $delete:
        | {
            input: { param: { id: number; endpointId: number } }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { id: number; endpointId: number } }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { id: number; endpointId: number } }
            output: {}
            outputFormat: string
            status: 404
          }
        | {
            input: { param: { id: number; endpointId: number } }
            output: {}
            outputFormat: string
            status: 500
          }
      $put:
        | {
            input: { param: { id: number; endpointId: number } }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { id: number; endpointId: number } }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { id: number; endpointId: number } }
            output: {}
            outputFormat: string
            status: 404
          }
        | {
            input: { param: { id: number; endpointId: number } }
            output: {}
            outputFormat: string
            status: 500
          }
    }
  } & {
    '/endpoints': {
      $delete:
        | {
            input: { json: EndpointsEndpointDeleteBatchPayload }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { json: EndpointsEndpointDeleteBatchPayload }
            output: EndpointsEndpointDeleteBatchPartialResponse
            outputFormat: 'json'
            status: 207
          }
        | {
            input: { json: EndpointsEndpointDeleteBatchPayload }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { json: EndpointsEndpointDeleteBatchPayload }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { json: EndpointsEndpointDeleteBatchPayload }
            output: {}
            outputFormat: string
            status: 500
          }
      $get:
        | {
            input: {
              query: {
                start?: number | undefined
                limit?: number | undefined
                sort?:
                  | 'Name'
                  | 'Group'
                  | 'Status'
                  | 'LastCheckIn'
                  | 'EdgeID'
                  | 'PlatformType'
                  | 'Health'
                  | 'Id'
                  | undefined
                order?: string | undefined
                search?: string | undefined
                groupIds?: number[] | undefined
                status?: number[] | undefined
                types?: (0 | 1 | 2 | 3 | 4 | 5 | 6 | 7)[] | undefined
                platformTypes?: (0 | 1 | 2 | 3 | 4)[] | undefined
                outdated?: boolean | undefined
                excludeGroupIds?: number[] | undefined
                tagIds?: number[] | undefined
                tagsPartialMatch?: boolean | undefined
                endpointIds?: number[] | undefined
                excludeIds?: number[] | undefined
                agentVersions?: string[] | undefined
                edgeAsync?: boolean | undefined
                edgeDeviceUntrusted?: boolean | undefined
                edgeCheckInPassedSeconds?: number | undefined
                excludeSnapshots?: boolean | undefined
                name?: string | undefined
                edgeStackId?: number | undefined
                edgeStackStatus?:
                  | 0
                  | 1
                  | 2
                  | 3
                  | 4
                  | 5
                  | 6
                  | 7
                  | 8
                  | 9
                  | 10
                  | 11
                  | 12
                  | 13
                  | undefined
                edgeGroupIds?: number[] | undefined
                excludeEdgeGroupIds?: number[] | undefined
              }
            }
            output: PortainerEndpoint[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                start?: number | undefined
                limit?: number | undefined
                sort?:
                  | 'Name'
                  | 'Group'
                  | 'Status'
                  | 'LastCheckIn'
                  | 'EdgeID'
                  | 'PlatformType'
                  | 'Health'
                  | 'Id'
                  | undefined
                order?: string | undefined
                search?: string | undefined
                groupIds?: number[] | undefined
                status?: number[] | undefined
                types?: (0 | 1 | 2 | 3 | 4 | 5 | 6 | 7)[] | undefined
                platformTypes?: (0 | 1 | 2 | 3 | 4)[] | undefined
                outdated?: boolean | undefined
                excludeGroupIds?: number[] | undefined
                tagIds?: number[] | undefined
                tagsPartialMatch?: boolean | undefined
                endpointIds?: number[] | undefined
                excludeIds?: number[] | undefined
                agentVersions?: string[] | undefined
                edgeAsync?: boolean | undefined
                edgeDeviceUntrusted?: boolean | undefined
                edgeCheckInPassedSeconds?: number | undefined
                excludeSnapshots?: boolean | undefined
                name?: string | undefined
                edgeStackId?: number | undefined
                edgeStackStatus?:
                  | 0
                  | 1
                  | 2
                  | 3
                  | 4
                  | 5
                  | 6
                  | 7
                  | 8
                  | 9
                  | 10
                  | 11
                  | 12
                  | 13
                  | undefined
                edgeGroupIds?: number[] | undefined
                excludeEdgeGroupIds?: number[] | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 500
          }
      $post:
        | {
            input: {
              form: {
                Name: string
                EndpointCreationType: 0 | 1 | 2 | 3 | 4 | 5
                ContainerEngine?: string | undefined
                URL?: string | undefined
                PublicURL?: string | undefined
                GroupID?: number | undefined
                TLS?: boolean | undefined
                TLSSkipVerify?: boolean | undefined
                TLSSkipClientVerify?: boolean | undefined
                TLSCACertFile?: File | undefined
                TLSCertFile?: File | undefined
                TLSKeyFile?: File | undefined
                AzureApplicationID?: string | undefined
                AzureTenantID?: string | undefined
                AzureAuthenticationKey?: string | undefined
                TagIds?: string | undefined
                EdgeCheckinInterval?: number | undefined
                EdgeTunnelServerAddress?: string | undefined
                Gpus?: string | undefined
              }
            }
            output: PortainerEndpoint
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              form: {
                Name: string
                EndpointCreationType: 0 | 1 | 2 | 3 | 4 | 5
                ContainerEngine?: string | undefined
                URL?: string | undefined
                PublicURL?: string | undefined
                GroupID?: number | undefined
                TLS?: boolean | undefined
                TLSSkipVerify?: boolean | undefined
                TLSSkipClientVerify?: boolean | undefined
                TLSCACertFile?: File | undefined
                TLSCertFile?: File | undefined
                TLSKeyFile?: File | undefined
                AzureApplicationID?: string | undefined
                AzureTenantID?: string | undefined
                AzureAuthenticationKey?: string | undefined
                TagIds?: string | undefined
                EdgeCheckinInterval?: number | undefined
                EdgeTunnelServerAddress?: string | undefined
                Gpus?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: {
              form: {
                Name: string
                EndpointCreationType: 0 | 1 | 2 | 3 | 4 | 5
                ContainerEngine?: string | undefined
                URL?: string | undefined
                PublicURL?: string | undefined
                GroupID?: number | undefined
                TLS?: boolean | undefined
                TLSSkipVerify?: boolean | undefined
                TLSSkipClientVerify?: boolean | undefined
                TLSCACertFile?: File | undefined
                TLSCertFile?: File | undefined
                TLSKeyFile?: File | undefined
                AzureApplicationID?: string | undefined
                AzureTenantID?: string | undefined
                AzureAuthenticationKey?: string | undefined
                TagIds?: string | undefined
                EdgeCheckinInterval?: number | undefined
                EdgeTunnelServerAddress?: string | undefined
                Gpus?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 409
          }
        | {
            input: {
              form: {
                Name: string
                EndpointCreationType: 0 | 1 | 2 | 3 | 4 | 5
                ContainerEngine?: string | undefined
                URL?: string | undefined
                PublicURL?: string | undefined
                GroupID?: number | undefined
                TLS?: boolean | undefined
                TLSSkipVerify?: boolean | undefined
                TLSSkipClientVerify?: boolean | undefined
                TLSCACertFile?: File | undefined
                TLSCertFile?: File | undefined
                TLSKeyFile?: File | undefined
                AzureApplicationID?: string | undefined
                AzureTenantID?: string | undefined
                AzureAuthenticationKey?: string | undefined
                TagIds?: string | undefined
                EdgeCheckinInterval?: number | undefined
                EdgeTunnelServerAddress?: string | undefined
                Gpus?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 500
          }
    }
  } & {
    '/endpoints/:id': {
      $delete:
        | { input: { param: { id: number } }; output: {}; outputFormat: string; status: 204 }
        | { input: { param: { id: number } }; output: {}; outputFormat: string; status: 400 }
        | { input: { param: { id: number } }; output: {}; outputFormat: string; status: 403 }
        | { input: { param: { id: number } }; output: {}; outputFormat: string; status: 404 }
        | { input: { param: { id: number } }; output: {}; outputFormat: string; status: 500 }
      $get:
        | {
            input: { param: { id: number } } & { query: { excludeSnapshot?: boolean | undefined } }
            output: PortainerEndpoint
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: number } } & { query: { excludeSnapshot?: boolean | undefined } }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { id: number } } & { query: { excludeSnapshot?: boolean | undefined } }
            output: {}
            outputFormat: string
            status: 404
          }
        | {
            input: { param: { id: number } } & { query: { excludeSnapshot?: boolean | undefined } }
            output: {}
            outputFormat: string
            status: 500
          }
      $put:
        | {
            input: { param: { id: number } } & { json: EndpointsEndpointUpdatePayload }
            output: PortainerEndpoint
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: number } } & { json: EndpointsEndpointUpdatePayload }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { id: number } } & { json: EndpointsEndpointUpdatePayload }
            output: {}
            outputFormat: string
            status: 404
          }
        | {
            input: { param: { id: number } } & { json: EndpointsEndpointUpdatePayload }
            output: {}
            outputFormat: string
            status: 409
          }
        | {
            input: { param: { id: number } } & { json: EndpointsEndpointUpdatePayload }
            output: {}
            outputFormat: string
            status: 500
          }
    }
  } & {
    '/endpoints/:id/association': {
      $put:
        | { input: { param: { id: number } }; output: {}; outputFormat: string; status: 204 }
        | { input: { param: { id: number } }; output: {}; outputFormat: string; status: 400 }
        | { input: { param: { id: number } }; output: {}; outputFormat: string; status: 404 }
        | { input: { param: { id: number } }; output: {}; outputFormat: string; status: 500 }
    }
  } & {
    '/endpoints/:id/docker/v2/browse/put': {
      $post:
        | {
            input: { param: { id: number } } & { query: { volumeID?: string | undefined } } & {
              form: { Path: string; file: File }
            }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { id: number } } & { query: { volumeID?: string | undefined } } & {
              form: { Path: string; file: File }
            }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { id: number } } & { query: { volumeID?: string | undefined } } & {
              form: { Path: string; file: File }
            }
            output: {}
            outputFormat: string
            status: 500
          }
    }
  } & {
    '/endpoints/:id/dockerhub/:registryId': {
      $get:
        | {
            input: { param: { id: number; registryId: number } }
            output: EndpointsDockerhubStatusResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: number; registryId: number } }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { id: number; registryId: number } }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { id: number; registryId: number } }
            output: {}
            outputFormat: string
            status: 404
          }
        | {
            input: { param: { id: number; registryId: number } }
            output: {}
            outputFormat: string
            status: 500
          }
    }
  } & {
    '/endpoints/:id/edge/jobs/:jobID/logs': {
      $post:
        | {
            input: { param: { id: number; jobID: number } }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { param: { id: number; jobID: number } }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { id: number; jobID: number } }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { id: number; jobID: number } }
            output: {}
            outputFormat: string
            status: 500
          }
    }
  } & {
    '/endpoints/:id/edge/stacks/:stackId': {
      $get:
        | {
            input: { param: { id: number; stackId: number } }
            output: EdgeStackPayload
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: number; stackId: number } }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { id: number; stackId: number } }
            output: {}
            outputFormat: string
            status: 404
          }
        | {
            input: { param: { id: number; stackId: number } }
            output: {}
            outputFormat: string
            status: 500
          }
    }
  } & {
    '/endpoints/:id/edge/status': {
      $get:
        | {
            input: { param: { id: number } }
            output: EndpointedgeEndpointEdgeStatusInspectResponse
            outputFormat: 'text'
            status: 200
          }
        | { input: { param: { id: number } }; output: {}; outputFormat: string; status: 400 }
        | { input: { param: { id: number } }; output: {}; outputFormat: string; status: 403 }
        | { input: { param: { id: number } }; output: {}; outputFormat: string; status: 404 }
        | { input: { param: { id: number } }; output: {}; outputFormat: string; status: 500 }
    }
  } & {
    '/endpoints/:id/forceupdateservice': {
      $put:
        | {
            input: { param: { id: number } } & { json: EndpointsForceUpdateServicePayload }
            output: SwarmServiceUpdateResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: number } } & { json: EndpointsForceUpdateServicePayload }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { id: number } } & { json: EndpointsForceUpdateServicePayload }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { id: number } } & { json: EndpointsForceUpdateServicePayload }
            output: {}
            outputFormat: string
            status: 404
          }
        | {
            input: { param: { id: number } } & { json: EndpointsForceUpdateServicePayload }
            output: {}
            outputFormat: string
            status: 500
          }
    }
  } & {
    '/endpoints/:id/kubernetes/helm': {
      $get:
        | {
            input: { param: { id: number } } & {
              query: {
                namespace?: string | undefined
                filter?: string | undefined
                selector?: string | undefined
              }
            }
            output: ReleaseReleaseElement[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: number } } & {
              query: {
                namespace?: string | undefined
                filter?: string | undefined
                selector?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { id: number } } & {
              query: {
                namespace?: string | undefined
                filter?: string | undefined
                selector?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { id: number } } & {
              query: {
                namespace?: string | undefined
                filter?: string | undefined
                selector?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 404
          }
        | {
            input: { param: { id: number } } & {
              query: {
                namespace?: string | undefined
                filter?: string | undefined
                selector?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 500
          }
      $post:
        | {
            input: { param: { id: number } } & { query: { dryRun?: boolean | undefined } } & {
              json: HelmInstallChartPayload
            }
            output: ReleaseRelease
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { param: { id: number } } & { query: { dryRun?: boolean | undefined } } & {
              json: HelmInstallChartPayload
            }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { id: number } } & { query: { dryRun?: boolean | undefined } } & {
              json: HelmInstallChartPayload
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { id: number } } & { query: { dryRun?: boolean | undefined } } & {
              json: HelmInstallChartPayload
            }
            output: {}
            outputFormat: string
            status: 404
          }
        | {
            input: { param: { id: number } } & { query: { dryRun?: boolean | undefined } } & {
              json: HelmInstallChartPayload
            }
            output: {}
            outputFormat: string
            status: 500
          }
    }
  } & {
    '/endpoints/:id/kubernetes/helm/:release': {
      $delete:
        | {
            input: { param: { id: number; release: string } } & {
              query: { namespace?: string | undefined }
            }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { id: number; release: string } } & {
              query: { namespace?: string | undefined }
            }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { id: number; release: string } } & {
              query: { namespace?: string | undefined }
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { id: number; release: string } } & {
              query: { namespace?: string | undefined }
            }
            output: {}
            outputFormat: string
            status: 404
          }
        | {
            input: { param: { id: number; release: string } } & {
              query: { namespace?: string | undefined }
            }
            output: {}
            outputFormat: string
            status: 500
          }
      $get:
        | {
            input: { param: { id: number; release: string } } & {
              query: {
                namespace?: string | undefined
                showResources?: boolean | undefined
                revision?: number | undefined
              }
            }
            output: ReleaseRelease
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: number; release: string } } & {
              query: {
                namespace?: string | undefined
                showResources?: boolean | undefined
                revision?: number | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { id: number; release: string } } & {
              query: {
                namespace?: string | undefined
                showResources?: boolean | undefined
                revision?: number | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { id: number; release: string } } & {
              query: {
                namespace?: string | undefined
                showResources?: boolean | undefined
                revision?: number | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { id: number; release: string } } & {
              query: {
                namespace?: string | undefined
                showResources?: boolean | undefined
                revision?: number | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 404
          }
        | {
            input: { param: { id: number; release: string } } & {
              query: {
                namespace?: string | undefined
                showResources?: boolean | undefined
                revision?: number | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 500
          }
    }
  } & {
    '/endpoints/:id/kubernetes/helm/:release/history': {
      $get:
        | {
            input: { param: { id: number; release: string } } & {
              query: { namespace?: string | undefined }
            }
            output: ReleaseRelease[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: number; release: string } } & {
              query: { namespace?: string | undefined }
            }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { id: number; release: string } } & {
              query: { namespace?: string | undefined }
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { id: number; release: string } } & {
              query: { namespace?: string | undefined }
            }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { id: number; release: string } } & {
              query: { namespace?: string | undefined }
            }
            output: {}
            outputFormat: string
            status: 404
          }
        | {
            input: { param: { id: number; release: string } } & {
              query: { namespace?: string | undefined }
            }
            output: {}
            outputFormat: string
            status: 500
          }
    }
  } & {
    '/endpoints/:id/kubernetes/helm/:release/rollback': {
      $post:
        | {
            input: { param: { id: number; release: string } } & {
              query: {
                namespace?: string | undefined
                revision?: number | undefined
                wait?: boolean | undefined
                waitForJobs?: boolean | undefined
                recreate?: boolean | undefined
                force?: boolean | undefined
                timeout?: number | undefined
              }
            }
            output: ReleaseRelease
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: number; release: string } } & {
              query: {
                namespace?: string | undefined
                revision?: number | undefined
                wait?: boolean | undefined
                waitForJobs?: boolean | undefined
                recreate?: boolean | undefined
                force?: boolean | undefined
                timeout?: number | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { id: number; release: string } } & {
              query: {
                namespace?: string | undefined
                revision?: number | undefined
                wait?: boolean | undefined
                waitForJobs?: boolean | undefined
                recreate?: boolean | undefined
                force?: boolean | undefined
                timeout?: number | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { id: number; release: string } } & {
              query: {
                namespace?: string | undefined
                revision?: number | undefined
                wait?: boolean | undefined
                waitForJobs?: boolean | undefined
                recreate?: boolean | undefined
                force?: boolean | undefined
                timeout?: number | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { id: number; release: string } } & {
              query: {
                namespace?: string | undefined
                revision?: number | undefined
                wait?: boolean | undefined
                waitForJobs?: boolean | undefined
                recreate?: boolean | undefined
                force?: boolean | undefined
                timeout?: number | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 404
          }
        | {
            input: { param: { id: number; release: string } } & {
              query: {
                namespace?: string | undefined
                revision?: number | undefined
                wait?: boolean | undefined
                waitForJobs?: boolean | undefined
                recreate?: boolean | undefined
                force?: boolean | undefined
                timeout?: number | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 500
          }
    }
  } & {
    '/endpoints/:id/registries': {
      $get:
        | {
            input: { param: { id: number } } & { query: { namespace?: string | undefined } }
            output: PortainerRegistry[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: number } } & { query: { namespace?: string | undefined } }
            output: {}
            outputFormat: string
            status: 500
          }
    }
  } & {
    '/endpoints/:id/registries/:registryId': {
      $put:
        | {
            input: { param: { id: number; registryId: number } } & {
              json: EndpointsRegistryAccessPayload
            }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { id: number; registryId: number } } & {
              json: EndpointsRegistryAccessPayload
            }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { id: number; registryId: number } } & {
              json: EndpointsRegistryAccessPayload
            }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { id: number; registryId: number } } & {
              json: EndpointsRegistryAccessPayload
            }
            output: {}
            outputFormat: string
            status: 404
          }
        | {
            input: { param: { id: number; registryId: number } } & {
              json: EndpointsRegistryAccessPayload
            }
            output: {}
            outputFormat: string
            status: 500
          }
    }
  } & {
    '/endpoints/:id/settings': {
      $put:
        | {
            input: { param: { id: number } } & { json: EndpointsEndpointSettingsUpdatePayload }
            output: PortainerEndpoint
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: number } } & { json: EndpointsEndpointSettingsUpdatePayload }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { id: number } } & { json: EndpointsEndpointSettingsUpdatePayload }
            output: {}
            outputFormat: string
            status: 404
          }
        | {
            input: { param: { id: number } } & { json: EndpointsEndpointSettingsUpdatePayload }
            output: {}
            outputFormat: string
            status: 500
          }
    }
  } & {
    '/endpoints/:id/snapshot': {
      $post:
        | { input: { param: { id: number } }; output: {}; outputFormat: string; status: 204 }
        | { input: { param: { id: number } }; output: {}; outputFormat: string; status: 400 }
        | { input: { param: { id: number } }; output: {}; outputFormat: string; status: 404 }
        | { input: { param: { id: number } }; output: {}; outputFormat: string; status: 500 }
    }
  } & {
    '/endpoints/delete': {
      $post:
        | {
            input: { json: EndpointsEndpointDeleteBatchPayload }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { json: EndpointsEndpointDeleteBatchPayload }
            output: EndpointsEndpointDeleteBatchPartialResponse
            outputFormat: 'json'
            status: 207
          }
        | {
            input: { json: EndpointsEndpointDeleteBatchPayload }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { json: EndpointsEndpointDeleteBatchPayload }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { json: EndpointsEndpointDeleteBatchPayload }
            output: {}
            outputFormat: string
            status: 500
          }
    }
  } & {
    '/endpoints/global-key': {
      $post:
        | {
            input: {}
            output: EndpointsEndpointCreateGlobalKeyResponse
            outputFormat: 'text'
            status: 200
          }
        | { input: {}; output: {}; outputFormat: string; status: 400 }
        | { input: {}; output: {}; outputFormat: string; status: 500 }
    }
  } & {
    '/endpoints/relations': {
      $put:
        | {
            input: { json: EndpointsEndpointUpdateRelationsPayload }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { json: EndpointsEndpointUpdateRelationsPayload }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { json: EndpointsEndpointUpdateRelationsPayload }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { json: EndpointsEndpointUpdateRelationsPayload }
            output: {}
            outputFormat: string
            status: 404
          }
        | {
            input: { json: EndpointsEndpointUpdateRelationsPayload }
            output: {}
            outputFormat: string
            status: 500
          }
    }
  } & {
    '/endpoints/snapshot': {
      $post:
        | { input: {}; output: {}; outputFormat: string; status: 204 }
        | { input: {}; output: {}; outputFormat: string; status: 500 }
    }
  } & {
    '/endpoints/summary': {
      $get:
        | {
            input: {}
            output: EndpointsEnvironmentSummaryCountsResponse
            outputFormat: 'json'
            status: 200
          }
        | { input: {}; output: {}; outputFormat: string; status: 500 }
    }
  } & {
    '/gitops/repo/file/preview': {
      $post:
        | {
            input: { json: GitopsRepositoryFilePreviewPayload }
            output: GitopsFileResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: GitopsRepositoryFilePreviewPayload }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { json: GitopsRepositoryFilePreviewPayload }
            output: {}
            outputFormat: string
            status: 404
          }
        | {
            input: { json: GitopsRepositoryFilePreviewPayload }
            output: {}
            outputFormat: string
            status: 500
          }
    }
  } & {
    '/gitops/sources': {
      $get:
        | {
            input: {
              query: {
                search?: string | undefined
                sort?: string | undefined
                order?: string | undefined
                start?: number | undefined
                limit?: number | undefined
                status?: string | undefined
                type?: 'git' | 'helm' | 'oci' | undefined
              }
            }
            output: SourcesSource[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                search?: string | undefined
                sort?: string | undefined
                order?: string | undefined
                start?: number | undefined
                limit?: number | undefined
                status?: string | undefined
                type?: 'git' | 'helm' | 'oci' | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: {
              query: {
                search?: string | undefined
                sort?: string | undefined
                order?: string | undefined
                start?: number | undefined
                limit?: number | undefined
                status?: string | undefined
                type?: 'git' | 'helm' | 'oci' | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: {
              query: {
                search?: string | undefined
                sort?: string | undefined
                order?: string | undefined
                start?: number | undefined
                limit?: number | undefined
                status?: string | undefined
                type?: 'git' | 'helm' | 'oci' | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 500
          }
    }
  } & {
    '/gitops/sources/:id': {
      $delete:
        | { input: { param: { id: number } }; output: {}; outputFormat: string; status: 204 }
        | { input: { param: { id: number } }; output: {}; outputFormat: string; status: 400 }
        | { input: { param: { id: number } }; output: {}; outputFormat: string; status: 403 }
        | { input: { param: { id: number } }; output: {}; outputFormat: string; status: 404 }
        | { input: { param: { id: number } }; output: {}; outputFormat: string; status: 409 }
        | { input: { param: { id: number } }; output: {}; outputFormat: string; status: 500 }
      $get:
        | {
            input: { param: { id: number } }
            output: SourcesSourceDetail
            outputFormat: 'json'
            status: 200
          }
        | { input: { param: { id: number } }; output: {}; outputFormat: string; status: 400 }
        | { input: { param: { id: number } }; output: {}; outputFormat: string; status: 403 }
        | { input: { param: { id: number } }; output: {}; outputFormat: string; status: 404 }
        | { input: { param: { id: number } }; output: {}; outputFormat: string; status: 500 }
      $put:
        | {
            input: { param: { id: number } } & { json: SourcesGitSourceUpdatePayload }
            output: PortainerSource
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: number } } & { json: SourcesGitSourceUpdatePayload }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { id: number } } & { json: SourcesGitSourceUpdatePayload }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { id: number } } & { json: SourcesGitSourceUpdatePayload }
            output: {}
            outputFormat: string
            status: 404
          }
        | {
            input: { param: { id: number } } & { json: SourcesGitSourceUpdatePayload }
            output: {}
            outputFormat: string
            status: 409
          }
        | {
            input: { param: { id: number } } & { json: SourcesGitSourceUpdatePayload }
            output: {}
            outputFormat: string
            status: 500
          }
    }
  } & {
    '/gitops/sources/:id/access': {
      $put:
        | {
            input: { param: { id: number } } & { json: SourcesSourceAccessUpdatePayload }
            output: PortainerSource
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: number } } & { json: SourcesSourceAccessUpdatePayload }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { id: number } } & { json: SourcesSourceAccessUpdatePayload }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { id: number } } & { json: SourcesSourceAccessUpdatePayload }
            output: {}
            outputFormat: string
            status: 404
          }
        | {
            input: { param: { id: number } } & { json: SourcesSourceAccessUpdatePayload }
            output: {}
            outputFormat: string
            status: 500
          }
    }
  } & {
    '/gitops/sources/:id/test': {
      $post:
        | {
            input: { param: { id: number } } & { json: SourcesGitSourceUpdatePayload }
            output: SourcesConnectionTestResult
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: number } } & { json: SourcesGitSourceUpdatePayload }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { id: number } } & { json: SourcesGitSourceUpdatePayload }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { id: number } } & { json: SourcesGitSourceUpdatePayload }
            output: {}
            outputFormat: string
            status: 404
          }
        | {
            input: { param: { id: number } } & { json: SourcesGitSourceUpdatePayload }
            output: {}
            outputFormat: string
            status: 500
          }
    }
  } & {
    '/gitops/sources/:id/workflows': {
      $get:
        | {
            input: { param: { id: number } }
            output: SourcesWorkflow[]
            outputFormat: 'json'
            status: 200
          }
        | { input: { param: { id: number } }; output: {}; outputFormat: string; status: 400 }
        | { input: { param: { id: number } }; output: {}; outputFormat: string; status: 403 }
        | { input: { param: { id: number } }; output: {}; outputFormat: string; status: 404 }
        | { input: { param: { id: number } }; output: {}; outputFormat: string; status: 500 }
    }
  } & {
    '/gitops/sources/git': {
      $post:
        | {
            input: { json: SourcesGitSourceCreatePayload }
            output: PortainerSource
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { json: SourcesGitSourceCreatePayload }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { json: SourcesGitSourceCreatePayload }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { json: SourcesGitSourceCreatePayload }
            output: {}
            outputFormat: string
            status: 409
          }
        | {
            input: { json: SourcesGitSourceCreatePayload }
            output: {}
            outputFormat: string
            status: 500
          }
    }
  } & {
    '/gitops/sources/summary': {
      $get:
        | { input: {}; output: WorkflowsStatusSummary; outputFormat: 'json'; status: 200 }
        | { input: {}; output: {}; outputFormat: string; status: 403 }
        | { input: {}; output: {}; outputFormat: string; status: 500 }
    }
  } & {
    '/gitops/sources/test': {
      $post:
        | {
            input: { json: SourcesGitSourceCreatePayload }
            output: SourcesConnectionTestResult
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: SourcesGitSourceCreatePayload }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { json: SourcesGitSourceCreatePayload }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { json: SourcesGitSourceCreatePayload }
            output: {}
            outputFormat: string
            status: 500
          }
    }
  } & {
    '/gitops/workflows': {
      $get:
        | {
            input: {
              query: {
                search?: string | undefined
                sort?: 'name' | 'status' | 'creationDate' | 'lastSyncDate' | undefined
                order?: 'asc' | 'desc' | undefined
                start?: number | undefined
                limit?: number | undefined
                endpointIds?: number[] | undefined
                status?: 'healthy' | 'syncing' | 'error' | 'paused' | 'unknown' | undefined
                type?: 'stack' | undefined
                platform?: 'dockerStandalone' | 'dockerSwarm' | 'kubernetes' | undefined
              }
            }
            output: WorkflowsWorkflow[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                search?: string | undefined
                sort?: 'name' | 'status' | 'creationDate' | 'lastSyncDate' | undefined
                order?: 'asc' | 'desc' | undefined
                start?: number | undefined
                limit?: number | undefined
                endpointIds?: number[] | undefined
                status?: 'healthy' | 'syncing' | 'error' | 'paused' | 'unknown' | undefined
                type?: 'stack' | undefined
                platform?: 'dockerStandalone' | 'dockerSwarm' | 'kubernetes' | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: {
              query: {
                search?: string | undefined
                sort?: 'name' | 'status' | 'creationDate' | 'lastSyncDate' | undefined
                order?: 'asc' | 'desc' | undefined
                start?: number | undefined
                limit?: number | undefined
                endpointIds?: number[] | undefined
                status?: 'healthy' | 'syncing' | 'error' | 'paused' | 'unknown' | undefined
                type?: 'stack' | undefined
                platform?: 'dockerStandalone' | 'dockerSwarm' | 'kubernetes' | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 500
          }
    }
  } & {
    '/gitops/workflows/:id': {
      $get:
        | {
            input: { param: { id: number } }
            output: WorkflowsWorkflow
            outputFormat: 'json'
            status: 200
          }
        | { input: { param: { id: number } }; output: {}; outputFormat: string; status: 400 }
        | { input: { param: { id: number } }; output: {}; outputFormat: string; status: 404 }
        | { input: { param: { id: number } }; output: {}; outputFormat: string; status: 500 }
    }
  } & {
    '/gitops/workflows/summary': {
      $get:
        | { input: {}; output: WorkflowsStatusSummary; outputFormat: 'json'; status: 200 }
        | { input: {}; output: {}; outputFormat: string; status: 500 }
    }
  } & {
    '/kubernetes/:id/applications': {
      $get:
        | {
            input: { param: { id: number } } & { query: { namespace: string; nodeName: string } }
            output: KubernetesK8sApplication[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: number } } & { query: { namespace: string; nodeName: string } }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { id: number } } & { query: { namespace: string; nodeName: string } }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { id: number } } & { query: { namespace: string; nodeName: string } }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { id: number } } & { query: { namespace: string; nodeName: string } }
            output: {}
            outputFormat: string
            status: 404
          }
        | {
            input: { param: { id: number } } & { query: { namespace: string; nodeName: string } }
            output: {}
            outputFormat: string
            status: 500
          }
    }
  } & {
    '/kubernetes/:id/applications/count': {
      $get:
        | { input: { param: { id: number } }; output: number; outputFormat: 'json'; status: 200 }
        | { input: { param: { id: number } }; output: {}; outputFormat: string; status: 400 }
        | { input: { param: { id: number } }; output: {}; outputFormat: string; status: 401 }
        | { input: { param: { id: number } }; output: {}; outputFormat: string; status: 403 }
        | { input: { param: { id: number } }; output: {}; outputFormat: string; status: 404 }
        | { input: { param: { id: number } }; output: {}; outputFormat: string; status: 500 }
    }
  } & {
    '/kubernetes/:id/cluster_role_bindings/delete': {
      $post:
        | {
            input: { param: { id: number } } & { json: string[] }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { id: number } } & { json: string[] }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { id: number } } & { json: string[] }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { id: number } } & { json: string[] }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { id: number } } & { json: string[] }
            output: {}
            outputFormat: string
            status: 404
          }
        | {
            input: { param: { id: number } } & { json: string[] }
            output: {}
            outputFormat: string
            status: 500
          }
    }
  } & {
    '/kubernetes/:id/cluster_roles/delete': {
      $post:
        | {
            input: { param: { id: number } } & { json: string[] }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { id: number } } & { json: string[] }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { id: number } } & { json: string[] }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { id: number } } & { json: string[] }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { id: number } } & { json: string[] }
            output: {}
            outputFormat: string
            status: 404
          }
        | {
            input: { param: { id: number } } & { json: string[] }
            output: {}
            outputFormat: string
            status: 500
          }
    }
  } & {
    '/kubernetes/:id/clusterrolebindings': {
      $get:
        | {
            input: { param: { id: number } }
            output: KubernetesK8sClusterRoleBinding[]
            outputFormat: 'json'
            status: 200
          }
        | { input: { param: { id: number } }; output: {}; outputFormat: string; status: 400 }
        | { input: { param: { id: number } }; output: {}; outputFormat: string; status: 401 }
        | { input: { param: { id: number } }; output: {}; outputFormat: string; status: 403 }
        | { input: { param: { id: number } }; output: {}; outputFormat: string; status: 404 }
        | { input: { param: { id: number } }; output: {}; outputFormat: string; status: 500 }
    }
  } & {
    '/kubernetes/:id/clusterroles': {
      $get:
        | {
            input: { param: { id: number } }
            output: KubernetesK8sClusterRole[]
            outputFormat: 'json'
            status: 200
          }
        | { input: { param: { id: number } }; output: {}; outputFormat: string; status: 400 }
        | { input: { param: { id: number } }; output: {}; outputFormat: string; status: 401 }
        | { input: { param: { id: number } }; output: {}; outputFormat: string; status: 403 }
        | { input: { param: { id: number } }; output: {}; outputFormat: string; status: 404 }
        | { input: { param: { id: number } }; output: {}; outputFormat: string; status: 500 }
    }
  } & {
    '/kubernetes/:id/configmaps': {
      $get:
        | {
            input: { param: { id: number } } & { query: { isUsed: boolean } }
            output: KubernetesK8sConfigMap[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: number } } & { query: { isUsed: boolean } }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { id: number } } & { query: { isUsed: boolean } }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { id: number } } & { query: { isUsed: boolean } }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { id: number } } & { query: { isUsed: boolean } }
            output: {}
            outputFormat: string
            status: 404
          }
        | {
            input: { param: { id: number } } & { query: { isUsed: boolean } }
            output: {}
            outputFormat: string
            status: 500
          }
    }
  } & {
    '/kubernetes/:id/configmaps/count': {
      $get:
        | { input: { param: { id: number } }; output: number; outputFormat: 'json'; status: 200 }
        | { input: { param: { id: number } }; output: {}; outputFormat: string; status: 400 }
        | { input: { param: { id: number } }; output: {}; outputFormat: string; status: 401 }
        | { input: { param: { id: number } }; output: {}; outputFormat: string; status: 403 }
        | { input: { param: { id: number } }; output: {}; outputFormat: string; status: 404 }
        | { input: { param: { id: number } }; output: {}; outputFormat: string; status: 500 }
    }
  } & {
    '/kubernetes/:id/cron_jobs': {
      $get:
        | {
            input: { param: { id: number } }
            output: KubernetesK8sCronJob[]
            outputFormat: 'json'
            status: 200
          }
        | { input: { param: { id: number } }; output: {}; outputFormat: string; status: 400 }
        | { input: { param: { id: number } }; output: {}; outputFormat: string; status: 401 }
        | { input: { param: { id: number } }; output: {}; outputFormat: string; status: 403 }
        | { input: { param: { id: number } }; output: {}; outputFormat: string; status: 404 }
        | { input: { param: { id: number } }; output: {}; outputFormat: string; status: 500 }
    }
  } & {
    '/kubernetes/:id/cron_jobs/delete': {
      $post:
        | {
            input: { param: { id: number } } & { json: KubernetesK8sCronJobDeleteRequests }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { id: number } } & { json: KubernetesK8sCronJobDeleteRequests }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { id: number } } & { json: KubernetesK8sCronJobDeleteRequests }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { id: number } } & { json: KubernetesK8sCronJobDeleteRequests }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { id: number } } & { json: KubernetesK8sCronJobDeleteRequests }
            output: {}
            outputFormat: string
            status: 404
          }
        | {
            input: { param: { id: number } } & { json: KubernetesK8sCronJobDeleteRequests }
            output: {}
            outputFormat: string
            status: 500
          }
    }
  } & {
    '/kubernetes/:id/dashboard': {
      $get:
        | {
            input: { param: { id: number } }
            output: KubernetesK8sDashboard[]
            outputFormat: 'json'
            status: 200
          }
        | { input: { param: { id: number } }; output: {}; outputFormat: string; status: 400 }
        | { input: { param: { id: number } }; output: {}; outputFormat: string; status: 500 }
    }
  } & {
    '/kubernetes/:id/deployments': {
      $get:
        | {
            input: { param: { id: number } } & {
              query: { labelSelector?: string | undefined; fieldSelector?: string | undefined }
            }
            output: KubernetesKubernetesDeploymentListResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: number } } & {
              query: { labelSelector?: string | undefined; fieldSelector?: string | undefined }
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { id: number } } & {
              query: { labelSelector?: string | undefined; fieldSelector?: string | undefined }
            }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { id: number } } & {
              query: { labelSelector?: string | undefined; fieldSelector?: string | undefined }
            }
            output: {}
            outputFormat: string
            status: 500
          }
    }
  } & {
    '/kubernetes/:id/describe': {
      $get:
        | {
            input: { param: { id: number } } & {
              query: { name: string; kind: string; namespace?: string | undefined }
            }
            output: KubernetesDescribeResourceResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: number } } & {
              query: { name: string; kind: string; namespace?: string | undefined }
            }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { id: number } } & {
              query: { name: string; kind: string; namespace?: string | undefined }
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { id: number } } & {
              query: { name: string; kind: string; namespace?: string | undefined }
            }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { id: number } } & {
              query: { name: string; kind: string; namespace?: string | undefined }
            }
            output: {}
            outputFormat: string
            status: 404
          }
        | {
            input: { param: { id: number } } & {
              query: { name: string; kind: string; namespace?: string | undefined }
            }
            output: {}
            outputFormat: string
            status: 500
          }
    }
  } & {
    '/kubernetes/:id/events': {
      $get:
        | {
            input: { param: { id: number } } & { query: { resourceId?: string | undefined } }
            output: KubernetesK8sEvent[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: number } } & { query: { resourceId?: string | undefined } }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { id: number } } & { query: { resourceId?: string | undefined } }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { id: number } } & { query: { resourceId?: string | undefined } }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { id: number } } & { query: { resourceId?: string | undefined } }
            output: {}
            outputFormat: string
            status: 500
          }
    }
  } & {
    '/kubernetes/:id/ingressclasses': {
      $get:
        | {
            input: { param: { id: number } }
            output: KubernetesK8sIngressClass[]
            outputFormat: 'json'
            status: 200
          }
        | { input: { param: { id: number } }; output: {}; outputFormat: string; status: 401 }
        | { input: { param: { id: number } }; output: {}; outputFormat: string; status: 403 }
        | { input: { param: { id: number } }; output: {}; outputFormat: string; status: 500 }
    }
  } & {
    '/kubernetes/:id/ingresscontrollers': {
      $get:
        | {
            input: { param: { id: number } } & { query: { allowedOnly?: boolean | undefined } }
            output: KubernetesK8sIngressController[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: number } } & { query: { allowedOnly?: boolean | undefined } }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { id: number } } & { query: { allowedOnly?: boolean | undefined } }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { id: number } } & { query: { allowedOnly?: boolean | undefined } }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { id: number } } & { query: { allowedOnly?: boolean | undefined } }
            output: {}
            outputFormat: string
            status: 404
          }
        | {
            input: { param: { id: number } } & { query: { allowedOnly?: boolean | undefined } }
            output: {}
            outputFormat: string
            status: 500
          }
      $put:
        | {
            input: { param: { id: number } } & { json: KubernetesK8sIngressController[] }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { id: number } } & { json: KubernetesK8sIngressController[] }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { id: number } } & { json: KubernetesK8sIngressController[] }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { id: number } } & { json: KubernetesK8sIngressController[] }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { id: number } } & { json: KubernetesK8sIngressController[] }
            output: {}
            outputFormat: string
            status: 404
          }
        | {
            input: { param: { id: number } } & { json: KubernetesK8sIngressController[] }
            output: {}
            outputFormat: string
            status: 500
          }
    }
  } & {
    '/kubernetes/:id/ingresses': {
      $get:
        | {
            input: { param: { id: number } } & { query: { withServices?: boolean | undefined } }
            output: KubernetesK8sIngressInfo[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: number } } & { query: { withServices?: boolean | undefined } }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { id: number } } & { query: { withServices?: boolean | undefined } }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { id: number } } & { query: { withServices?: boolean | undefined } }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { id: number } } & { query: { withServices?: boolean | undefined } }
            output: {}
            outputFormat: string
            status: 404
          }
        | {
            input: { param: { id: number } } & { query: { withServices?: boolean | undefined } }
            output: {}
            outputFormat: string
            status: 500
          }
    }
  } & {
    '/kubernetes/:id/ingresses/count': {
      $get:
        | { input: { param: { id: number } }; output: number; outputFormat: 'json'; status: 200 }
        | { input: { param: { id: number } }; output: {}; outputFormat: string; status: 400 }
        | { input: { param: { id: number } }; output: {}; outputFormat: string; status: 401 }
        | { input: { param: { id: number } }; output: {}; outputFormat: string; status: 403 }
        | { input: { param: { id: number } }; output: {}; outputFormat: string; status: 404 }
        | { input: { param: { id: number } }; output: {}; outputFormat: string; status: 500 }
    }
  } & {
    '/kubernetes/:id/ingresses/delete': {
      $post:
        | {
            input: { param: { id: number } } & { json: KubernetesK8sIngressDeleteRequests }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { id: number } } & { json: KubernetesK8sIngressDeleteRequests }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { id: number } } & { json: KubernetesK8sIngressDeleteRequests }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { id: number } } & { json: KubernetesK8sIngressDeleteRequests }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { id: number } } & { json: KubernetesK8sIngressDeleteRequests }
            output: {}
            outputFormat: string
            status: 404
          }
        | {
            input: { param: { id: number } } & { json: KubernetesK8sIngressDeleteRequests }
            output: {}
            outputFormat: string
            status: 500
          }
    }
  } & {
    '/kubernetes/:id/jobs': {
      $get:
        | {
            input: { param: { id: number } } & {
              query: { includeCronJobChildren?: boolean | undefined }
            }
            output: KubernetesK8sJob[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: number } } & {
              query: { includeCronJobChildren?: boolean | undefined }
            }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { id: number } } & {
              query: { includeCronJobChildren?: boolean | undefined }
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { id: number } } & {
              query: { includeCronJobChildren?: boolean | undefined }
            }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { id: number } } & {
              query: { includeCronJobChildren?: boolean | undefined }
            }
            output: {}
            outputFormat: string
            status: 404
          }
        | {
            input: { param: { id: number } } & {
              query: { includeCronJobChildren?: boolean | undefined }
            }
            output: {}
            outputFormat: string
            status: 500
          }
    }
  } & {
    '/kubernetes/:id/jobs/delete': {
      $post:
        | {
            input: { param: { id: number } } & { json: KubernetesK8sJobDeleteRequests }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { id: number } } & { json: KubernetesK8sJobDeleteRequests }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { id: number } } & { json: KubernetesK8sJobDeleteRequests }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { id: number } } & { json: KubernetesK8sJobDeleteRequests }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { id: number } } & { json: KubernetesK8sJobDeleteRequests }
            output: {}
            outputFormat: string
            status: 404
          }
        | {
            input: { param: { id: number } } & { json: KubernetesK8sJobDeleteRequests }
            output: {}
            outputFormat: string
            status: 500
          }
    }
  } & {
    '/kubernetes/:id/manifests/dry_run': {
      $post:
        | {
            input: { param: { id: number } } & { json: KubernetesManifestDryRunPayload }
            output: KubernetesManifestDryRunResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: number } } & { json: KubernetesManifestDryRunPayload }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { id: number } } & { json: KubernetesManifestDryRunPayload }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { id: number } } & { json: KubernetesManifestDryRunPayload }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { id: number } } & { json: KubernetesManifestDryRunPayload }
            output: {}
            outputFormat: string
            status: 404
          }
        | {
            input: { param: { id: number } } & { json: KubernetesManifestDryRunPayload }
            output: {}
            outputFormat: string
            status: 500
          }
    }
  } & {
    '/kubernetes/:id/max_resource_limits': {
      $get:
        | {
            input: { param: { id: number } }
            output: PortainerK8sNodesLimits
            outputFormat: 'json'
            status: 200
          }
        | { input: { param: { id: number } }; output: {}; outputFormat: string; status: 400 }
        | { input: { param: { id: number } }; output: {}; outputFormat: string; status: 401 }
        | { input: { param: { id: number } }; output: {}; outputFormat: string; status: 403 }
        | { input: { param: { id: number } }; output: {}; outputFormat: string; status: 404 }
        | { input: { param: { id: number } }; output: {}; outputFormat: string; status: 500 }
    }
  } & {
    '/kubernetes/:id/metrics/applications_resources': {
      $get:
        | {
            input: { param: { id: number } } & { query: { node: string } }
            output: KubernetesK8sApplicationResource
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: number } } & { query: { node: string } }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { id: number } } & { query: { node: string } }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { id: number } } & { query: { node: string } }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { id: number } } & { query: { node: string } }
            output: {}
            outputFormat: string
            status: 404
          }
        | {
            input: { param: { id: number } } & { query: { node: string } }
            output: {}
            outputFormat: string
            status: 500
          }
    }
  } & {
    '/kubernetes/:id/metrics/nodes': {
      $get:
        | {
            input: { param: { id: number } }
            output: V1beta1NodeMetricsList
            outputFormat: 'json'
            status: 200
          }
        | { input: { param: { id: number } }; output: {}; outputFormat: string; status: 401 }
        | { input: { param: { id: number } }; output: {}; outputFormat: string; status: 500 }
    }
  } & {
    '/kubernetes/:id/metrics/nodes/:name': {
      $get:
        | {
            input: { param: { id: number; name: string } }
            output: V1beta1NodeMetrics
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: number; name: string } }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { id: number; name: string } }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { id: number; name: string } }
            output: {}
            outputFormat: string
            status: 500
          }
    }
  } & {
    '/kubernetes/:id/metrics/pods/:namespace/:name': {
      $get:
        | {
            input: { param: { id: number; namespace: string; name: string } }
            output: V1beta1PodMetrics
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: number; namespace: string; name: string } }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { id: number; namespace: string; name: string } }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { id: number; namespace: string; name: string } }
            output: {}
            outputFormat: string
            status: 500
          }
    }
  } & {
    '/kubernetes/:id/metrics/pods/namespace/:namespace': {
      $get:
        | {
            input: { param: { id: number; namespace: string } }
            output: V1beta1PodMetricsList
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: number; namespace: string } }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { id: number; namespace: string } }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { id: number; namespace: string } }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { id: number; namespace: string } }
            output: {}
            outputFormat: string
            status: 500
          }
    }
  } & {
    '/kubernetes/:id/namespaces': {
      $delete:
        | {
            input: { param: { id: number } } & { json: string[] }
            output: string
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { id: number } } & { json: string[] }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { id: number } } & { json: string[] }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { id: number } } & { json: string[] }
            output: {}
            outputFormat: string
            status: 500
          }
      $get:
        | {
            input: { param: { id: number } } & {
              query: {
                withResourceQuota?: boolean | undefined
                withUnhealthyEvents?: boolean | undefined
              }
            }
            output: PortainerK8sNamespaceInfo[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: number } } & {
              query: {
                withResourceQuota?: boolean | undefined
                withUnhealthyEvents?: boolean | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { id: number } } & {
              query: {
                withResourceQuota?: boolean | undefined
                withUnhealthyEvents?: boolean | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { id: number } } & {
              query: {
                withResourceQuota?: boolean | undefined
                withUnhealthyEvents?: boolean | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { id: number } } & {
              query: {
                withResourceQuota?: boolean | undefined
                withUnhealthyEvents?: boolean | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 404
          }
        | {
            input: { param: { id: number } } & {
              query: {
                withResourceQuota?: boolean | undefined
                withUnhealthyEvents?: boolean | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 500
          }
      $post:
        | {
            input: { param: { id: number } } & { json: KubernetesK8sNamespaceDetails }
            output: KubernetesKubernetesCreateNamespaceResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: number } } & { json: KubernetesK8sNamespaceDetails }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { id: number } } & { json: KubernetesK8sNamespaceDetails }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { id: number } } & { json: KubernetesK8sNamespaceDetails }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { id: number } } & { json: KubernetesK8sNamespaceDetails }
            output: {}
            outputFormat: string
            status: 409
          }
        | {
            input: { param: { id: number } } & { json: KubernetesK8sNamespaceDetails }
            output: {}
            outputFormat: string
            status: 500
          }
      $put:
        | {
            input: { param: { id: number; namespace: string } } & {
              json: KubernetesK8sNamespaceDetails
            }
            output: PortainerK8sNamespaceInfo
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: number; namespace: string } } & {
              json: KubernetesK8sNamespaceDetails
            }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { id: number; namespace: string } } & {
              json: KubernetesK8sNamespaceDetails
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { id: number; namespace: string } } & {
              json: KubernetesK8sNamespaceDetails
            }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { id: number; namespace: string } } & {
              json: KubernetesK8sNamespaceDetails
            }
            output: {}
            outputFormat: string
            status: 404
          }
        | {
            input: { param: { id: number; namespace: string } } & {
              json: KubernetesK8sNamespaceDetails
            }
            output: {}
            outputFormat: string
            status: 500
          }
    }
  } & {
    '/kubernetes/:id/namespaces/:namespace': {
      $get:
        | {
            input: { param: { id: number; namespace: string } } & {
              query: { withResourceQuota?: boolean | undefined }
            }
            output: PortainerK8sNamespaceInfo
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: number; namespace: string } } & {
              query: { withResourceQuota?: boolean | undefined }
            }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { id: number; namespace: string } } & {
              query: { withResourceQuota?: boolean | undefined }
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { id: number; namespace: string } } & {
              query: { withResourceQuota?: boolean | undefined }
            }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { id: number; namespace: string } } & {
              query: { withResourceQuota?: boolean | undefined }
            }
            output: {}
            outputFormat: string
            status: 404
          }
        | {
            input: { param: { id: number; namespace: string } } & {
              query: { withResourceQuota?: boolean | undefined }
            }
            output: {}
            outputFormat: string
            status: 500
          }
      $put:
        | {
            input: { param: { id: number; namespace: string } } & {
              json: KubernetesK8sNamespaceDetails
            }
            output: PortainerK8sNamespaceInfo
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: number; namespace: string } } & {
              json: KubernetesK8sNamespaceDetails
            }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { id: number; namespace: string } } & {
              json: KubernetesK8sNamespaceDetails
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { id: number; namespace: string } } & {
              json: KubernetesK8sNamespaceDetails
            }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { id: number; namespace: string } } & {
              json: KubernetesK8sNamespaceDetails
            }
            output: {}
            outputFormat: string
            status: 404
          }
        | {
            input: { param: { id: number; namespace: string } } & {
              json: KubernetesK8sNamespaceDetails
            }
            output: {}
            outputFormat: string
            status: 500
          }
    }
  } & {
    '/kubernetes/:id/namespaces/:namespace/configmaps': {
      $post:
        | {
            input: { param: { id: number; namespace: string } } & {
              json: KubernetesK8sConfigMapWriteRequest
            }
            output: KubernetesK8sConfigMap
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: number; namespace: string } } & {
              json: KubernetesK8sConfigMapWriteRequest
            }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { id: number; namespace: string } } & {
              json: KubernetesK8sConfigMapWriteRequest
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { id: number; namespace: string } } & {
              json: KubernetesK8sConfigMapWriteRequest
            }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { id: number; namespace: string } } & {
              json: KubernetesK8sConfigMapWriteRequest
            }
            output: {}
            outputFormat: string
            status: 409
          }
        | {
            input: { param: { id: number; namespace: string } } & {
              json: KubernetesK8sConfigMapWriteRequest
            }
            output: {}
            outputFormat: string
            status: 500
          }
    }
  } & {
    '/kubernetes/:id/namespaces/:namespace/configmaps/:configmap': {
      $delete:
        | {
            input: { param: { id: number; namespace: string; configmap: string } }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { id: number; namespace: string; configmap: string } }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { id: number; namespace: string; configmap: string } }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { id: number; namespace: string; configmap: string } }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { id: number; namespace: string; configmap: string } }
            output: {}
            outputFormat: string
            status: 404
          }
        | {
            input: { param: { id: number; namespace: string; configmap: string } }
            output: {}
            outputFormat: string
            status: 500
          }
      $get:
        | {
            input: { param: { id: number; namespace: string; configmap: string } }
            output: KubernetesK8sConfigMap
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: number; namespace: string; configmap: string } }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { id: number; namespace: string; configmap: string } }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { id: number; namespace: string; configmap: string } }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { id: number; namespace: string; configmap: string } }
            output: {}
            outputFormat: string
            status: 404
          }
        | {
            input: { param: { id: number; namespace: string; configmap: string } }
            output: {}
            outputFormat: string
            status: 500
          }
      $put:
        | {
            input: { param: { id: number; namespace: string; configmap: string } } & {
              json: KubernetesK8sConfigMapWriteRequest
            }
            output: KubernetesK8sConfigMap
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: number; namespace: string; configmap: string } } & {
              json: KubernetesK8sConfigMapWriteRequest
            }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { id: number; namespace: string; configmap: string } } & {
              json: KubernetesK8sConfigMapWriteRequest
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { id: number; namespace: string; configmap: string } } & {
              json: KubernetesK8sConfigMapWriteRequest
            }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { id: number; namespace: string; configmap: string } } & {
              json: KubernetesK8sConfigMapWriteRequest
            }
            output: {}
            outputFormat: string
            status: 404
          }
        | {
            input: { param: { id: number; namespace: string; configmap: string } } & {
              json: KubernetesK8sConfigMapWriteRequest
            }
            output: {}
            outputFormat: string
            status: 500
          }
    }
  } & {
    '/kubernetes/:id/namespaces/:namespace/deployments': {
      $get:
        | {
            input: { param: { id: number; namespace: string } } & {
              query: { labelSelector?: string | undefined; fieldSelector?: string | undefined }
            }
            output: KubernetesKubernetesDeploymentListResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: number; namespace: string } } & {
              query: { labelSelector?: string | undefined; fieldSelector?: string | undefined }
            }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { id: number; namespace: string } } & {
              query: { labelSelector?: string | undefined; fieldSelector?: string | undefined }
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { id: number; namespace: string } } & {
              query: { labelSelector?: string | undefined; fieldSelector?: string | undefined }
            }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { id: number; namespace: string } } & {
              query: { labelSelector?: string | undefined; fieldSelector?: string | undefined }
            }
            output: {}
            outputFormat: string
            status: 500
          }
      $post:
        | {
            input: { param: { id: number; namespace: string } } & {
              json: KubernetesK8sDeploymentWriteRequest
            }
            output: KubernetesKubernetesDeploymentResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: number; namespace: string } } & {
              json: KubernetesK8sDeploymentWriteRequest
            }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { id: number; namespace: string } } & {
              json: KubernetesK8sDeploymentWriteRequest
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { id: number; namespace: string } } & {
              json: KubernetesK8sDeploymentWriteRequest
            }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { id: number; namespace: string } } & {
              json: KubernetesK8sDeploymentWriteRequest
            }
            output: {}
            outputFormat: string
            status: 409
          }
        | {
            input: { param: { id: number; namespace: string } } & {
              json: KubernetesK8sDeploymentWriteRequest
            }
            output: {}
            outputFormat: string
            status: 500
          }
    }
  } & {
    '/kubernetes/:id/namespaces/:namespace/deployments/:name': {
      $delete:
        | {
            input: { param: { id: number; namespace: string; name: string } }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { id: number; namespace: string; name: string } }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { id: number; namespace: string; name: string } }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { id: number; namespace: string; name: string } }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { id: number; namespace: string; name: string } }
            output: {}
            outputFormat: string
            status: 404
          }
        | {
            input: { param: { id: number; namespace: string; name: string } }
            output: {}
            outputFormat: string
            status: 500
          }
      $get:
        | {
            input: { param: { id: number; namespace: string; name: string } }
            output: KubernetesKubernetesDeploymentResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: number; namespace: string; name: string } }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { id: number; namespace: string; name: string } }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { id: number; namespace: string; name: string } }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { id: number; namespace: string; name: string } }
            output: {}
            outputFormat: string
            status: 500
          }
      $patch:
        | {
            input: { param: { id: number; namespace: string; name: string } } & {
              json: KubernetesK8sDeploymentPatchRequest
            }
            output: KubernetesKubernetesDeploymentResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: number; namespace: string; name: string } } & {
              json: KubernetesK8sDeploymentPatchRequest
            }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { id: number; namespace: string; name: string } } & {
              json: KubernetesK8sDeploymentPatchRequest
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { id: number; namespace: string; name: string } } & {
              json: KubernetesK8sDeploymentPatchRequest
            }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { id: number; namespace: string; name: string } } & {
              json: KubernetesK8sDeploymentPatchRequest
            }
            output: {}
            outputFormat: string
            status: 404
          }
        | {
            input: { param: { id: number; namespace: string; name: string } } & {
              json: KubernetesK8sDeploymentPatchRequest
            }
            output: {}
            outputFormat: string
            status: 500
          }
      $put:
        | {
            input: { param: { id: number; namespace: string; name: string } } & {
              json: KubernetesK8sDeploymentWriteRequest
            }
            output: KubernetesKubernetesDeploymentResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: number; namespace: string; name: string } } & {
              json: KubernetesK8sDeploymentWriteRequest
            }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { id: number; namespace: string; name: string } } & {
              json: KubernetesK8sDeploymentWriteRequest
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { id: number; namespace: string; name: string } } & {
              json: KubernetesK8sDeploymentWriteRequest
            }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { id: number; namespace: string; name: string } } & {
              json: KubernetesK8sDeploymentWriteRequest
            }
            output: {}
            outputFormat: string
            status: 404
          }
        | {
            input: { param: { id: number; namespace: string; name: string } } & {
              json: KubernetesK8sDeploymentWriteRequest
            }
            output: {}
            outputFormat: string
            status: 409
          }
        | {
            input: { param: { id: number; namespace: string; name: string } } & {
              json: KubernetesK8sDeploymentWriteRequest
            }
            output: {}
            outputFormat: string
            status: 500
          }
    }
  } & {
    '/kubernetes/:id/namespaces/:namespace/deployments/:name/rollback': {
      $post:
        | {
            input: { param: { id: number; namespace: string; name: string } } & {
              json: KubernetesK8sDeploymentRollbackRequest
            }
            output: KubernetesKubernetesDeploymentResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: number; namespace: string; name: string } } & {
              json: KubernetesK8sDeploymentRollbackRequest
            }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { id: number; namespace: string; name: string } } & {
              json: KubernetesK8sDeploymentRollbackRequest
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { id: number; namespace: string; name: string } } & {
              json: KubernetesK8sDeploymentRollbackRequest
            }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { id: number; namespace: string; name: string } } & {
              json: KubernetesK8sDeploymentRollbackRequest
            }
            output: {}
            outputFormat: string
            status: 404
          }
        | {
            input: { param: { id: number; namespace: string; name: string } } & {
              json: KubernetesK8sDeploymentRollbackRequest
            }
            output: {}
            outputFormat: string
            status: 500
          }
    }
  } & {
    '/kubernetes/:id/namespaces/:namespace/deployments/:name/scale': {
      $put:
        | {
            input: { param: { id: number; namespace: string; name: string } } & {
              json: KubernetesK8sDeploymentScaleRequest
            }
            output: KubernetesKubernetesDeploymentResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: number; namespace: string; name: string } } & {
              json: KubernetesK8sDeploymentScaleRequest
            }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { id: number; namespace: string; name: string } } & {
              json: KubernetesK8sDeploymentScaleRequest
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { id: number; namespace: string; name: string } } & {
              json: KubernetesK8sDeploymentScaleRequest
            }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { id: number; namespace: string; name: string } } & {
              json: KubernetesK8sDeploymentScaleRequest
            }
            output: {}
            outputFormat: string
            status: 404
          }
        | {
            input: { param: { id: number; namespace: string; name: string } } & {
              json: KubernetesK8sDeploymentScaleRequest
            }
            output: {}
            outputFormat: string
            status: 500
          }
    }
  } & {
    '/kubernetes/:id/namespaces/:namespace/events': {
      $get:
        | {
            input: { param: { id: number; namespace: string } } & {
              query: { resourceId?: string | undefined }
            }
            output: KubernetesK8sEvent[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: number; namespace: string } } & {
              query: { resourceId?: string | undefined }
            }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { id: number; namespace: string } } & {
              query: { resourceId?: string | undefined }
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { id: number; namespace: string } } & {
              query: { resourceId?: string | undefined }
            }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { id: number; namespace: string } } & {
              query: { resourceId?: string | undefined }
            }
            output: {}
            outputFormat: string
            status: 500
          }
    }
  } & {
    '/kubernetes/:id/namespaces/:namespace/ingresscontrollers': {
      $get:
        | {
            input: { param: { id: number; namespace: string } }
            output: KubernetesK8sIngressController[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: number; namespace: string } }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { id: number; namespace: string } }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { id: number; namespace: string } }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { id: number; namespace: string } }
            output: {}
            outputFormat: string
            status: 404
          }
        | {
            input: { param: { id: number; namespace: string } }
            output: {}
            outputFormat: string
            status: 500
          }
      $put:
        | {
            input: { param: { id: number; namespace: string } } & {
              json: KubernetesK8sIngressController[]
            }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { id: number; namespace: string } } & {
              json: KubernetesK8sIngressController[]
            }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { id: number; namespace: string } } & {
              json: KubernetesK8sIngressController[]
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { id: number; namespace: string } } & {
              json: KubernetesK8sIngressController[]
            }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { id: number; namespace: string } } & {
              json: KubernetesK8sIngressController[]
            }
            output: {}
            outputFormat: string
            status: 404
          }
        | {
            input: { param: { id: number; namespace: string } } & {
              json: KubernetesK8sIngressController[]
            }
            output: {}
            outputFormat: string
            status: 500
          }
    }
  } & {
    '/kubernetes/:id/namespaces/:namespace/ingresses': {
      $get:
        | {
            input: { param: { id: number; namespace: string } }
            output: KubernetesK8sIngressInfo[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: number; namespace: string } }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { id: number; namespace: string } }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { id: number; namespace: string } }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { id: number; namespace: string } }
            output: {}
            outputFormat: string
            status: 404
          }
        | {
            input: { param: { id: number; namespace: string } }
            output: {}
            outputFormat: string
            status: 500
          }
      $post:
        | {
            input: { param: { id: number; namespace: string } } & { json: KubernetesK8sIngressInfo }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { id: number; namespace: string } } & { json: KubernetesK8sIngressInfo }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { id: number; namespace: string } } & { json: KubernetesK8sIngressInfo }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { id: number; namespace: string } } & { json: KubernetesK8sIngressInfo }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { id: number; namespace: string } } & { json: KubernetesK8sIngressInfo }
            output: {}
            outputFormat: string
            status: 404
          }
        | {
            input: { param: { id: number; namespace: string } } & { json: KubernetesK8sIngressInfo }
            output: {}
            outputFormat: string
            status: 409
          }
        | {
            input: { param: { id: number; namespace: string } } & { json: KubernetesK8sIngressInfo }
            output: {}
            outputFormat: string
            status: 500
          }
      $put:
        | {
            input: { param: { id: number; namespace: string } } & { json: KubernetesK8sIngressInfo }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { id: number; namespace: string } } & { json: KubernetesK8sIngressInfo }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { id: number; namespace: string } } & { json: KubernetesK8sIngressInfo }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { id: number; namespace: string } } & { json: KubernetesK8sIngressInfo }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { id: number; namespace: string } } & { json: KubernetesK8sIngressInfo }
            output: {}
            outputFormat: string
            status: 404
          }
        | {
            input: { param: { id: number; namespace: string } } & { json: KubernetesK8sIngressInfo }
            output: {}
            outputFormat: string
            status: 500
          }
    }
  } & {
    '/kubernetes/:id/namespaces/:namespace/ingresses/:ingress': {
      $get:
        | {
            input: { param: { id: number; namespace: string; ingress: string } }
            output: KubernetesK8sIngressInfo
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: number; namespace: string; ingress: string } }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { id: number; namespace: string; ingress: string } }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { id: number; namespace: string; ingress: string } }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { id: number; namespace: string; ingress: string } }
            output: {}
            outputFormat: string
            status: 404
          }
        | {
            input: { param: { id: number; namespace: string; ingress: string } }
            output: {}
            outputFormat: string
            status: 500
          }
    }
  } & {
    '/kubernetes/:id/namespaces/:namespace/persistent_volume_claims': {
      $get:
        | {
            input: { param: { id: number; namespace: string } }
            output: KubernetesK8sPersistentVolumeClaim[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: number; namespace: string } }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { id: number; namespace: string } }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { id: number; namespace: string } }
            output: {}
            outputFormat: string
            status: 500
          }
      $post:
        | {
            input: { param: { id: number; namespace: string } } & {
              json: KubernetesK8sPersistentVolumeClaimCreateRequest
            }
            output: KubernetesK8sPersistentVolumeClaim
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: number; namespace: string } } & {
              json: KubernetesK8sPersistentVolumeClaimCreateRequest
            }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { id: number; namespace: string } } & {
              json: KubernetesK8sPersistentVolumeClaimCreateRequest
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { id: number; namespace: string } } & {
              json: KubernetesK8sPersistentVolumeClaimCreateRequest
            }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { id: number; namespace: string } } & {
              json: KubernetesK8sPersistentVolumeClaimCreateRequest
            }
            output: {}
            outputFormat: string
            status: 409
          }
        | {
            input: { param: { id: number; namespace: string } } & {
              json: KubernetesK8sPersistentVolumeClaimCreateRequest
            }
            output: {}
            outputFormat: string
            status: 500
          }
    }
  } & {
    '/kubernetes/:id/namespaces/:namespace/persistent_volume_claims/:name': {
      $get:
        | {
            input: { param: { id: number; namespace: string; name: string } }
            output: KubernetesK8sPersistentVolumeClaim
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: number; namespace: string; name: string } }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { id: number; namespace: string; name: string } }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { id: number; namespace: string; name: string } }
            output: {}
            outputFormat: string
            status: 404
          }
        | {
            input: { param: { id: number; namespace: string; name: string } }
            output: {}
            outputFormat: string
            status: 500
          }
    }
  } & {
    '/kubernetes/:id/namespaces/:namespace/pods': {
      $get:
        | {
            input: { param: { id: number; namespace: string } } & {
              query: { labelSelector?: string | undefined; fieldSelector?: string | undefined }
            }
            output: KubernetesKubernetesPodListResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: number; namespace: string } } & {
              query: { labelSelector?: string | undefined; fieldSelector?: string | undefined }
            }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { id: number; namespace: string } } & {
              query: { labelSelector?: string | undefined; fieldSelector?: string | undefined }
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { id: number; namespace: string } } & {
              query: { labelSelector?: string | undefined; fieldSelector?: string | undefined }
            }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { id: number; namespace: string } } & {
              query: { labelSelector?: string | undefined; fieldSelector?: string | undefined }
            }
            output: {}
            outputFormat: string
            status: 500
          }
    }
  } & {
    '/kubernetes/:id/namespaces/:namespace/pods/:name': {
      $delete:
        | {
            input: { param: { id: number; namespace: string; name: string } }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { id: number; namespace: string; name: string } }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { id: number; namespace: string; name: string } }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { id: number; namespace: string; name: string } }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { id: number; namespace: string; name: string } }
            output: {}
            outputFormat: string
            status: 404
          }
        | {
            input: { param: { id: number; namespace: string; name: string } }
            output: {}
            outputFormat: string
            status: 500
          }
    }
  } & {
    '/kubernetes/:id/namespaces/:namespace/pods/:name/log': {
      $get:
        | {
            input: { param: { id: number; namespace: string; name: string } } & {
              query: {
                container?: string | undefined
                tailLines?: number | undefined
                sinceSeconds?: number | undefined
                timestamps?: boolean | undefined
                previous?: boolean | undefined
                follow?: boolean | undefined
              }
            }
            output: string
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { id: number; namespace: string; name: string } } & {
              query: {
                container?: string | undefined
                tailLines?: number | undefined
                sinceSeconds?: number | undefined
                timestamps?: boolean | undefined
                previous?: boolean | undefined
                follow?: boolean | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { id: number; namespace: string; name: string } } & {
              query: {
                container?: string | undefined
                tailLines?: number | undefined
                sinceSeconds?: number | undefined
                timestamps?: boolean | undefined
                previous?: boolean | undefined
                follow?: boolean | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { id: number; namespace: string; name: string } } & {
              query: {
                container?: string | undefined
                tailLines?: number | undefined
                sinceSeconds?: number | undefined
                timestamps?: boolean | undefined
                previous?: boolean | undefined
                follow?: boolean | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { id: number; namespace: string; name: string } } & {
              query: {
                container?: string | undefined
                tailLines?: number | undefined
                sinceSeconds?: number | undefined
                timestamps?: boolean | undefined
                previous?: boolean | undefined
                follow?: boolean | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 500
          }
    }
  } & {
    '/kubernetes/:id/namespaces/:namespace/pods/:name/restart': {
      $post:
        | {
            input: { param: { id: number; namespace: string; name: string } }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { id: number; namespace: string; name: string } }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { id: number; namespace: string; name: string } }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { id: number; namespace: string; name: string } }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { id: number; namespace: string; name: string } }
            output: {}
            outputFormat: string
            status: 404
          }
        | {
            input: { param: { id: number; namespace: string; name: string } }
            output: {}
            outputFormat: string
            status: 405
          }
        | {
            input: { param: { id: number; namespace: string; name: string } }
            output: {}
            outputFormat: string
            status: 500
          }
    }
  } & {
    '/kubernetes/:id/namespaces/:namespace/replicasets': {
      $get:
        | {
            input: { param: { id: number; namespace: string } } & {
              query: {
                deployment?: string | undefined
                labelSelector?: string | undefined
                fieldSelector?: string | undefined
              }
            }
            output: KubernetesKubernetesReplicaSetListResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: number; namespace: string } } & {
              query: {
                deployment?: string | undefined
                labelSelector?: string | undefined
                fieldSelector?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { id: number; namespace: string } } & {
              query: {
                deployment?: string | undefined
                labelSelector?: string | undefined
                fieldSelector?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { id: number; namespace: string } } & {
              query: {
                deployment?: string | undefined
                labelSelector?: string | undefined
                fieldSelector?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { id: number; namespace: string } } & {
              query: {
                deployment?: string | undefined
                labelSelector?: string | undefined
                fieldSelector?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 404
          }
        | {
            input: { param: { id: number; namespace: string } } & {
              query: {
                deployment?: string | undefined
                labelSelector?: string | undefined
                fieldSelector?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 500
          }
    }
  } & {
    '/kubernetes/:id/namespaces/:namespace/resource_quotas': {
      $get:
        | {
            input: { param: { id: number; namespace: string } }
            output: KubernetesKubernetesResourceQuotaListResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: number; namespace: string } }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { id: number; namespace: string } }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { id: number; namespace: string } }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { id: number; namespace: string } }
            output: {}
            outputFormat: string
            status: 500
          }
    }
  } & {
    '/kubernetes/:id/namespaces/:namespace/secrets': {
      $post:
        | {
            input: { param: { id: number; namespace: string } } & {
              json: KubernetesK8sSecretWriteRequest
            }
            output: KubernetesK8sSecret
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: number; namespace: string } } & {
              json: KubernetesK8sSecretWriteRequest
            }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { id: number; namespace: string } } & {
              json: KubernetesK8sSecretWriteRequest
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { id: number; namespace: string } } & {
              json: KubernetesK8sSecretWriteRequest
            }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { id: number; namespace: string } } & {
              json: KubernetesK8sSecretWriteRequest
            }
            output: {}
            outputFormat: string
            status: 409
          }
        | {
            input: { param: { id: number; namespace: string } } & {
              json: KubernetesK8sSecretWriteRequest
            }
            output: {}
            outputFormat: string
            status: 500
          }
    }
  } & {
    '/kubernetes/:id/namespaces/:namespace/secrets/:secret': {
      $delete:
        | {
            input: { param: { id: number; namespace: string; secret: string } }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { id: number; namespace: string; secret: string } }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { id: number; namespace: string; secret: string } }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { id: number; namespace: string; secret: string } }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { id: number; namespace: string; secret: string } }
            output: {}
            outputFormat: string
            status: 404
          }
        | {
            input: { param: { id: number; namespace: string; secret: string } }
            output: {}
            outputFormat: string
            status: 500
          }
      $get:
        | {
            input: { param: { id: number; namespace: string; secret: string } }
            output: KubernetesK8sSecret
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: number; namespace: string; secret: string } }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { id: number; namespace: string; secret: string } }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { id: number; namespace: string; secret: string } }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { id: number; namespace: string; secret: string } }
            output: {}
            outputFormat: string
            status: 404
          }
        | {
            input: { param: { id: number; namespace: string; secret: string } }
            output: {}
            outputFormat: string
            status: 500
          }
      $put:
        | {
            input: { param: { id: number; namespace: string; secret: string } } & {
              json: KubernetesK8sSecretWriteRequest
            }
            output: KubernetesK8sSecret
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: number; namespace: string; secret: string } } & {
              json: KubernetesK8sSecretWriteRequest
            }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { id: number; namespace: string; secret: string } } & {
              json: KubernetesK8sSecretWriteRequest
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { id: number; namespace: string; secret: string } } & {
              json: KubernetesK8sSecretWriteRequest
            }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { id: number; namespace: string; secret: string } } & {
              json: KubernetesK8sSecretWriteRequest
            }
            output: {}
            outputFormat: string
            status: 404
          }
        | {
            input: { param: { id: number; namespace: string; secret: string } } & {
              json: KubernetesK8sSecretWriteRequest
            }
            output: {}
            outputFormat: string
            status: 500
          }
    }
  } & {
    '/kubernetes/:id/namespaces/:namespace/service_accounts/:name': {
      $get:
        | {
            input: { param: { id: number; namespace: string; name: string } }
            output: KubernetesK8sServiceAccount
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: number; namespace: string; name: string } }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { id: number; namespace: string; name: string } }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { id: number; namespace: string; name: string } }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { id: number; namespace: string; name: string } }
            output: {}
            outputFormat: string
            status: 404
          }
        | {
            input: { param: { id: number; namespace: string; name: string } }
            output: {}
            outputFormat: string
            status: 500
          }
    }
  } & {
    '/kubernetes/:id/namespaces/:namespace/service_accounts/:name/image_pull_secrets': {
      $put:
        | {
            input: { param: { id: number; namespace: string; name: string } } & {
              json: KubernetesK8sServiceAccountImagePullSecretsUpdatePayload
            }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { id: number; namespace: string; name: string } } & {
              json: KubernetesK8sServiceAccountImagePullSecretsUpdatePayload
            }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { id: number; namespace: string; name: string } } & {
              json: KubernetesK8sServiceAccountImagePullSecretsUpdatePayload
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { id: number; namespace: string; name: string } } & {
              json: KubernetesK8sServiceAccountImagePullSecretsUpdatePayload
            }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { id: number; namespace: string; name: string } } & {
              json: KubernetesK8sServiceAccountImagePullSecretsUpdatePayload
            }
            output: {}
            outputFormat: string
            status: 404
          }
        | {
            input: { param: { id: number; namespace: string; name: string } } & {
              json: KubernetesK8sServiceAccountImagePullSecretsUpdatePayload
            }
            output: {}
            outputFormat: string
            status: 500
          }
    }
  } & {
    '/kubernetes/:id/namespaces/:namespace/services': {
      $get:
        | {
            input: { param: { id: number; namespace: string } }
            output: KubernetesK8sServiceInfo[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: number; namespace: string } }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { id: number; namespace: string } }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { id: number; namespace: string } }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { id: number; namespace: string } }
            output: {}
            outputFormat: string
            status: 404
          }
        | {
            input: { param: { id: number; namespace: string } }
            output: {}
            outputFormat: string
            status: 500
          }
      $post:
        | {
            input: { param: { id: number; namespace: string } } & { json: KubernetesK8sServiceInfo }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { id: number; namespace: string } } & { json: KubernetesK8sServiceInfo }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { id: number; namespace: string } } & { json: KubernetesK8sServiceInfo }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { id: number; namespace: string } } & { json: KubernetesK8sServiceInfo }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { id: number; namespace: string } } & { json: KubernetesK8sServiceInfo }
            output: {}
            outputFormat: string
            status: 404
          }
        | {
            input: { param: { id: number; namespace: string } } & { json: KubernetesK8sServiceInfo }
            output: {}
            outputFormat: string
            status: 500
          }
      $put:
        | {
            input: { param: { id: number; namespace: string } } & { json: KubernetesK8sServiceInfo }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { id: number; namespace: string } } & { json: KubernetesK8sServiceInfo }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { id: number; namespace: string } } & { json: KubernetesK8sServiceInfo }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { id: number; namespace: string } } & { json: KubernetesK8sServiceInfo }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { id: number; namespace: string } } & { json: KubernetesK8sServiceInfo }
            output: {}
            outputFormat: string
            status: 404
          }
        | {
            input: { param: { id: number; namespace: string } } & { json: KubernetesK8sServiceInfo }
            output: {}
            outputFormat: string
            status: 500
          }
    }
  } & {
    '/kubernetes/:id/namespaces/:namespace/system': {
      $put:
        | {
            input: { param: { id: number; namespace: string } } & {
              json: KubernetesNamespacesToggleSystemPayload
            }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { id: number; namespace: string } } & {
              json: KubernetesNamespacesToggleSystemPayload
            }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { id: number; namespace: string } } & {
              json: KubernetesNamespacesToggleSystemPayload
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { id: number; namespace: string } } & {
              json: KubernetesNamespacesToggleSystemPayload
            }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { id: number; namespace: string } } & {
              json: KubernetesNamespacesToggleSystemPayload
            }
            output: {}
            outputFormat: string
            status: 404
          }
        | {
            input: { param: { id: number; namespace: string } } & {
              json: KubernetesNamespacesToggleSystemPayload
            }
            output: {}
            outputFormat: string
            status: 500
          }
    }
  } & {
    '/kubernetes/:id/namespaces/:namespace/volumes': {
      $get:
        | {
            input: { param: { id: number; namespace: string } } & {
              query: { withApplications?: boolean | undefined }
            }
            output: { [x: string]: KubernetesK8sVolumeInfo }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: number; namespace: string } } & {
              query: { withApplications?: boolean | undefined }
            }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { id: number; namespace: string } } & {
              query: { withApplications?: boolean | undefined }
            }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { id: number; namespace: string } } & {
              query: { withApplications?: boolean | undefined }
            }
            output: {}
            outputFormat: string
            status: 500
          }
    }
  } & {
    '/kubernetes/:id/namespaces/count': {
      $get:
        | { input: { param: { id: number } }; output: number; outputFormat: 'json'; status: 200 }
        | { input: { param: { id: number } }; output: {}; outputFormat: string; status: 400 }
        | { input: { param: { id: number } }; output: {}; outputFormat: string; status: 401 }
        | { input: { param: { id: number } }; output: {}; outputFormat: string; status: 403 }
        | { input: { param: { id: number } }; output: {}; outputFormat: string; status: 404 }
        | { input: { param: { id: number } }; output: {}; outputFormat: string; status: 500 }
    }
  } & {
    '/kubernetes/:id/nodes': {
      $get:
        | {
            input: { param: { id: number } }
            output: KubernetesKubernetesNodeResponse[]
            outputFormat: 'json'
            status: 200
          }
        | { input: { param: { id: number } }; output: {}; outputFormat: string; status: 401 }
        | { input: { param: { id: number } }; output: {}; outputFormat: string; status: 403 }
        | { input: { param: { id: number } }; output: {}; outputFormat: string; status: 500 }
    }
  } & {
    '/kubernetes/:id/nodes/:name/drain': {
      $post:
        | {
            input: { param: { id: number; name: string } } & { json: KubernetesDrainNodePayload }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { id: number; name: string } } & { json: KubernetesDrainNodePayload }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { id: number; name: string } } & { json: KubernetesDrainNodePayload }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { id: number; name: string } } & { json: KubernetesDrainNodePayload }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { id: number; name: string } } & { json: KubernetesDrainNodePayload }
            output: {}
            outputFormat: string
            status: 404
          }
        | {
            input: { param: { id: number; name: string } } & { json: KubernetesDrainNodePayload }
            output: {}
            outputFormat: string
            status: 500
          }
    }
  } & {
    '/kubernetes/:id/nodes_limits': {
      $get:
        | {
            input: { param: { id: number } }
            output: PortainerK8sNodesLimits
            outputFormat: 'json'
            status: 200
          }
        | { input: { param: { id: number } }; output: {}; outputFormat: string; status: 400 }
        | { input: { param: { id: number } }; output: {}; outputFormat: string; status: 401 }
        | { input: { param: { id: number } }; output: {}; outputFormat: string; status: 403 }
        | { input: { param: { id: number } }; output: {}; outputFormat: string; status: 404 }
        | { input: { param: { id: number } }; output: {}; outputFormat: string; status: 500 }
    }
  } & {
    '/kubernetes/:id/persistent_volume_claims': {
      $get:
        | {
            input: { param: { id: number } }
            output: KubernetesK8sPersistentVolumeClaim[]
            outputFormat: 'json'
            status: 200
          }
        | { input: { param: { id: number } }; output: {}; outputFormat: string; status: 400 }
        | { input: { param: { id: number } }; output: {}; outputFormat: string; status: 403 }
        | { input: { param: { id: number } }; output: {}; outputFormat: string; status: 500 }
    }
  } & {
    '/kubernetes/:id/persistent_volume_claims/delete': {
      $post:
        | {
            input: { param: { id: number } } & { json: KubernetesK8sVolumeDeleteRequest[] }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { id: number } } & { json: KubernetesK8sVolumeDeleteRequest[] }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { id: number } } & { json: KubernetesK8sVolumeDeleteRequest[] }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { id: number } } & { json: KubernetesK8sVolumeDeleteRequest[] }
            output: {}
            outputFormat: string
            status: 500
          }
    }
  } & {
    '/kubernetes/:id/persistent_volume_claims/resize': {
      $put:
        | {
            input: { param: { id: number } } & { json: KubernetesK8sPVCResizeRequest }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { id: number } } & { json: KubernetesK8sPVCResizeRequest }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { id: number } } & { json: KubernetesK8sPVCResizeRequest }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { id: number } } & { json: KubernetesK8sPVCResizeRequest }
            output: {}
            outputFormat: string
            status: 500
          }
    }
  } & {
    '/kubernetes/:id/persistent_volumes': {
      $get:
        | {
            input: { param: { id: number } }
            output: KubernetesK8sPersistentVolume[]
            outputFormat: 'json'
            status: 200
          }
        | { input: { param: { id: number } }; output: {}; outputFormat: string; status: 400 }
        | { input: { param: { id: number } }; output: {}; outputFormat: string; status: 403 }
        | { input: { param: { id: number } }; output: {}; outputFormat: string; status: 500 }
    }
  } & {
    '/kubernetes/:id/persistent_volumes/:name': {
      $get:
        | {
            input: { param: { id: number; name: string } }
            output: KubernetesK8sPersistentVolume
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: number; name: string } }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { id: number; name: string } }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { id: number; name: string } }
            output: {}
            outputFormat: string
            status: 404
          }
        | {
            input: { param: { id: number; name: string } }
            output: {}
            outputFormat: string
            status: 500
          }
    }
  } & {
    '/kubernetes/:id/persistent_volumes/delete': {
      $post:
        | {
            input: { param: { id: number } } & { json: string[] }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { id: number } } & { json: string[] }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { id: number } } & { json: string[] }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { id: number } } & { json: string[] }
            output: {}
            outputFormat: string
            status: 500
          }
    }
  } & {
    '/kubernetes/:id/persistent_volumes/reclaim_policy': {
      $put:
        | {
            input: { param: { id: number } } & { json: KubernetesK8sPVReclaimPolicyRequest }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { id: number } } & { json: KubernetesK8sPVReclaimPolicyRequest }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { id: number } } & { json: KubernetesK8sPVReclaimPolicyRequest }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { id: number } } & { json: KubernetesK8sPVReclaimPolicyRequest }
            output: {}
            outputFormat: string
            status: 500
          }
    }
  } & {
    '/kubernetes/:id/pods': {
      $get:
        | {
            input: { param: { id: number } } & {
              query: { labelSelector?: string | undefined; fieldSelector?: string | undefined }
            }
            output: KubernetesKubernetesPodListResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: number } } & {
              query: { labelSelector?: string | undefined; fieldSelector?: string | undefined }
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { id: number } } & {
              query: { labelSelector?: string | undefined; fieldSelector?: string | undefined }
            }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { id: number } } & {
              query: { labelSelector?: string | undefined; fieldSelector?: string | undefined }
            }
            output: {}
            outputFormat: string
            status: 500
          }
    }
  } & {
    '/kubernetes/:id/rbac_enabled': {
      $get:
        | { input: { param: { id: number } }; output: boolean; outputFormat: 'json'; status: 200 }
        | { input: { param: { id: number } }; output: {}; outputFormat: string; status: 401 }
        | { input: { param: { id: number } }; output: {}; outputFormat: string; status: 403 }
        | { input: { param: { id: number } }; output: {}; outputFormat: string; status: 404 }
        | { input: { param: { id: number } }; output: {}; outputFormat: string; status: 500 }
    }
  } & {
    '/kubernetes/:id/role_bindings/delete': {
      $post:
        | {
            input: { param: { id: number } } & { json: KubernetesK8sRoleBindingDeleteRequests }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { id: number } } & { json: KubernetesK8sRoleBindingDeleteRequests }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { id: number } } & { json: KubernetesK8sRoleBindingDeleteRequests }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { id: number } } & { json: KubernetesK8sRoleBindingDeleteRequests }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { id: number } } & { json: KubernetesK8sRoleBindingDeleteRequests }
            output: {}
            outputFormat: string
            status: 404
          }
        | {
            input: { param: { id: number } } & { json: KubernetesK8sRoleBindingDeleteRequests }
            output: {}
            outputFormat: string
            status: 500
          }
    }
  } & {
    '/kubernetes/:id/rolebindings': {
      $get:
        | {
            input: { param: { id: number } }
            output: KubernetesK8sRoleBinding[]
            outputFormat: 'json'
            status: 200
          }
        | { input: { param: { id: number } }; output: {}; outputFormat: string; status: 400 }
        | { input: { param: { id: number } }; output: {}; outputFormat: string; status: 401 }
        | { input: { param: { id: number } }; output: {}; outputFormat: string; status: 403 }
        | { input: { param: { id: number } }; output: {}; outputFormat: string; status: 404 }
        | { input: { param: { id: number } }; output: {}; outputFormat: string; status: 500 }
    }
  } & {
    '/kubernetes/:id/roles': {
      $get:
        | {
            input: { param: { id: number } }
            output: KubernetesK8sRole[]
            outputFormat: 'json'
            status: 200
          }
        | { input: { param: { id: number } }; output: {}; outputFormat: string; status: 400 }
        | { input: { param: { id: number } }; output: {}; outputFormat: string; status: 401 }
        | { input: { param: { id: number } }; output: {}; outputFormat: string; status: 403 }
        | { input: { param: { id: number } }; output: {}; outputFormat: string; status: 404 }
        | { input: { param: { id: number } }; output: {}; outputFormat: string; status: 500 }
    }
  } & {
    '/kubernetes/:id/roles/delete': {
      $post:
        | {
            input: { param: { id: number } } & { json: KubernetesK8sRoleDeleteRequests }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { id: number } } & { json: KubernetesK8sRoleDeleteRequests }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { id: number } } & { json: KubernetesK8sRoleDeleteRequests }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { id: number } } & { json: KubernetesK8sRoleDeleteRequests }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { id: number } } & { json: KubernetesK8sRoleDeleteRequests }
            output: {}
            outputFormat: string
            status: 404
          }
        | {
            input: { param: { id: number } } & { json: KubernetesK8sRoleDeleteRequests }
            output: {}
            outputFormat: string
            status: 500
          }
    }
  } & {
    '/kubernetes/:id/secrets': {
      $get:
        | {
            input: { param: { id: number } } & { query: { isUsed: boolean } }
            output: KubernetesK8sSecret[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: number } } & { query: { isUsed: boolean } }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { id: number } } & { query: { isUsed: boolean } }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { id: number } } & { query: { isUsed: boolean } }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { id: number } } & { query: { isUsed: boolean } }
            output: {}
            outputFormat: string
            status: 404
          }
        | {
            input: { param: { id: number } } & { query: { isUsed: boolean } }
            output: {}
            outputFormat: string
            status: 500
          }
    }
  } & {
    '/kubernetes/:id/secrets/count': {
      $get:
        | { input: { param: { id: number } }; output: number; outputFormat: 'json'; status: 200 }
        | { input: { param: { id: number } }; output: {}; outputFormat: string; status: 400 }
        | { input: { param: { id: number } }; output: {}; outputFormat: string; status: 401 }
        | { input: { param: { id: number } }; output: {}; outputFormat: string; status: 403 }
        | { input: { param: { id: number } }; output: {}; outputFormat: string; status: 404 }
        | { input: { param: { id: number } }; output: {}; outputFormat: string; status: 500 }
    }
  } & {
    '/kubernetes/:id/service_accounts/delete': {
      $post:
        | {
            input: { param: { id: number } } & { json: KubernetesK8sServiceAccountDeleteRequests }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { id: number } } & { json: KubernetesK8sServiceAccountDeleteRequests }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { id: number } } & { json: KubernetesK8sServiceAccountDeleteRequests }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { id: number } } & { json: KubernetesK8sServiceAccountDeleteRequests }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { id: number } } & { json: KubernetesK8sServiceAccountDeleteRequests }
            output: {}
            outputFormat: string
            status: 404
          }
        | {
            input: { param: { id: number } } & { json: KubernetesK8sServiceAccountDeleteRequests }
            output: {}
            outputFormat: string
            status: 500
          }
    }
  } & {
    '/kubernetes/:id/serviceaccounts': {
      $get:
        | {
            input: { param: { id: number } }
            output: KubernetesK8sServiceAccount[]
            outputFormat: 'json'
            status: 200
          }
        | { input: { param: { id: number } }; output: {}; outputFormat: string; status: 400 }
        | { input: { param: { id: number } }; output: {}; outputFormat: string; status: 401 }
        | { input: { param: { id: number } }; output: {}; outputFormat: string; status: 403 }
        | { input: { param: { id: number } }; output: {}; outputFormat: string; status: 404 }
        | { input: { param: { id: number } }; output: {}; outputFormat: string; status: 500 }
    }
  } & {
    '/kubernetes/:id/services': {
      $get:
        | {
            input: { param: { id: number } } & { query: { withApplications?: boolean | undefined } }
            output: KubernetesK8sServiceInfo[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: number } } & { query: { withApplications?: boolean | undefined } }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { id: number } } & { query: { withApplications?: boolean | undefined } }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { id: number } } & { query: { withApplications?: boolean | undefined } }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { id: number } } & { query: { withApplications?: boolean | undefined } }
            output: {}
            outputFormat: string
            status: 404
          }
        | {
            input: { param: { id: number } } & { query: { withApplications?: boolean | undefined } }
            output: {}
            outputFormat: string
            status: 500
          }
    }
  } & {
    '/kubernetes/:id/services/count': {
      $get:
        | { input: { param: { id: number } }; output: number; outputFormat: 'json'; status: 200 }
        | { input: { param: { id: number } }; output: {}; outputFormat: string; status: 400 }
        | { input: { param: { id: number } }; output: {}; outputFormat: string; status: 401 }
        | { input: { param: { id: number } }; output: {}; outputFormat: string; status: 403 }
        | { input: { param: { id: number } }; output: {}; outputFormat: string; status: 404 }
        | { input: { param: { id: number } }; output: {}; outputFormat: string; status: 500 }
    }
  } & {
    '/kubernetes/:id/services/delete': {
      $post:
        | {
            input: { param: { id: number } } & { json: KubernetesK8sServiceDeleteRequests }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { id: number } } & { json: KubernetesK8sServiceDeleteRequests }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { id: number } } & { json: KubernetesK8sServiceDeleteRequests }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { id: number } } & { json: KubernetesK8sServiceDeleteRequests }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { id: number } } & { json: KubernetesK8sServiceDeleteRequests }
            output: {}
            outputFormat: string
            status: 404
          }
        | {
            input: { param: { id: number } } & { json: KubernetesK8sServiceDeleteRequests }
            output: {}
            outputFormat: string
            status: 500
          }
    }
  } & {
    '/kubernetes/:id/storage_classes': {
      $get:
        | {
            input: { param: { id: number } }
            output: KubernetesK8sStorageClass[]
            outputFormat: 'json'
            status: 200
          }
        | { input: { param: { id: number } }; output: {}; outputFormat: string; status: 400 }
        | { input: { param: { id: number } }; output: {}; outputFormat: string; status: 403 }
        | { input: { param: { id: number } }; output: {}; outputFormat: string; status: 500 }
    }
  } & {
    '/kubernetes/:id/storage_classes/:name': {
      $get:
        | {
            input: { param: { id: number; name: string } }
            output: KubernetesK8sStorageClass
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: number; name: string } }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { id: number; name: string } }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { id: number; name: string } }
            output: {}
            outputFormat: string
            status: 404
          }
        | {
            input: { param: { id: number; name: string } }
            output: {}
            outputFormat: string
            status: 500
          }
    }
  } & {
    '/kubernetes/:id/storage_classes/:name/default': {
      $put:
        | {
            input: { param: { id: number; name: string } }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { id: number; name: string } }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { id: number; name: string } }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { id: number; name: string } }
            output: {}
            outputFormat: string
            status: 500
          }
    }
  } & {
    '/kubernetes/:id/storage_classes/delete': {
      $post:
        | {
            input: { param: { id: number } } & { json: string[] }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { id: number } } & { json: string[] }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { id: number } } & { json: string[] }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { id: number } } & { json: string[] }
            output: {}
            outputFormat: string
            status: 500
          }
    }
  } & {
    '/kubernetes/:id/version': {
      $get:
        | {
            input: { param: { id: number } }
            output: KubernetesKubernetesVersionResponse
            outputFormat: 'json'
            status: 200
          }
        | { input: { param: { id: number } }; output: {}; outputFormat: string; status: 401 }
        | { input: { param: { id: number } }; output: {}; outputFormat: string; status: 403 }
        | { input: { param: { id: number } }; output: {}; outputFormat: string; status: 404 }
        | { input: { param: { id: number } }; output: {}; outputFormat: string; status: 500 }
    }
  } & {
    '/kubernetes/:id/volumes': {
      $get:
        | {
            input: { param: { id: number } } & { query: { withApplications?: boolean | undefined } }
            output: { [x: string]: KubernetesK8sVolumeInfo }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: number } } & { query: { withApplications?: boolean | undefined } }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { id: number } } & { query: { withApplications?: boolean | undefined } }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { id: number } } & { query: { withApplications?: boolean | undefined } }
            output: {}
            outputFormat: string
            status: 500
          }
    }
  } & {
    '/kubernetes/:id/volumes/:namespace/:volume': {
      $get:
        | {
            input: { param: { id: number; namespace: string; volume: string } }
            output: KubernetesK8sVolumeInfo
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: number; namespace: string; volume: string } }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { id: number; namespace: string; volume: string } }
            output: {}
            outputFormat: string
            status: 500
          }
    }
  } & {
    '/kubernetes/:id/volumes/count': {
      $get:
        | { input: { param: { id: number } }; output: number; outputFormat: 'json'; status: 200 }
        | { input: { param: { id: number } }; output: {}; outputFormat: string; status: 400 }
        | { input: { param: { id: number } }; output: {}; outputFormat: string; status: 403 }
        | { input: { param: { id: number } }; output: {}; outputFormat: string; status: 500 }
    }
  } & {
    '/kubernetes/config': {
      $get:
        | {
            input: { query: { ids?: number[] | undefined; excludeIds?: number[] | undefined } }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { ids?: number[] | undefined; excludeIds?: number[] | undefined } }
            output: { [x: string]: unknown }
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { query: { ids?: number[] | undefined; excludeIds?: number[] | undefined } }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { query: { ids?: number[] | undefined; excludeIds?: number[] | undefined } }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { query: { ids?: number[] | undefined; excludeIds?: number[] | undefined } }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { query: { ids?: number[] | undefined; excludeIds?: number[] | undefined } }
            output: {}
            outputFormat: string
            status: 404
          }
        | {
            input: { query: { ids?: number[] | undefined; excludeIds?: number[] | undefined } }
            output: {}
            outputFormat: string
            status: 500
          }
    }
  } & {
    '/ldap/check': {
      $post:
        | { input: { json: LdapCheckPayload }; output: {}; outputFormat: string; status: 204 }
        | { input: { json: LdapCheckPayload }; output: {}; outputFormat: string; status: 400 }
        | { input: { json: LdapCheckPayload }; output: {}; outputFormat: string; status: 500 }
    }
  } & { '/motd': { $get: { input: {}; output: MotdMotd; outputFormat: 'json'; status: 200 } } } & {
    '/registries': {
      $get:
        | { input: {}; output: PortainerRegistry[]; outputFormat: 'json'; status: 200 }
        | { input: {}; output: {}; outputFormat: string; status: 500 }
      $post:
        | {
            input: { json: RegistriesRegistryCreatePayload }
            output: PortainerRegistry
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: RegistriesRegistryCreatePayload }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { json: RegistriesRegistryCreatePayload }
            output: {}
            outputFormat: string
            status: 409
          }
        | {
            input: { json: RegistriesRegistryCreatePayload }
            output: {}
            outputFormat: string
            status: 500
          }
    }
  } & {
    '/registries/:id': {
      $delete:
        | { input: { param: { id: number } }; output: {}; outputFormat: string; status: 204 }
        | { input: { param: { id: number } }; output: {}; outputFormat: string; status: 400 }
        | { input: { param: { id: number } }; output: {}; outputFormat: string; status: 404 }
        | { input: { param: { id: number } }; output: {}; outputFormat: string; status: 500 }
      $get:
        | {
            input: { param: { id: number } }
            output: PortainerRegistry
            outputFormat: 'json'
            status: 200
          }
        | { input: { param: { id: number } }; output: {}; outputFormat: string; status: 400 }
        | { input: { param: { id: number } }; output: {}; outputFormat: string; status: 403 }
        | { input: { param: { id: number } }; output: {}; outputFormat: string; status: 404 }
        | { input: { param: { id: number } }; output: {}; outputFormat: string; status: 500 }
      $put:
        | {
            input: { param: { id: number } } & { json: RegistriesRegistryUpdatePayload }
            output: PortainerRegistry
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: number } } & { json: RegistriesRegistryUpdatePayload }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { id: number } } & { json: RegistriesRegistryUpdatePayload }
            output: {}
            outputFormat: string
            status: 404
          }
        | {
            input: { param: { id: number } } & { json: RegistriesRegistryUpdatePayload }
            output: {}
            outputFormat: string
            status: 409
          }
        | {
            input: { param: { id: number } } & { json: RegistriesRegistryUpdatePayload }
            output: {}
            outputFormat: string
            status: 500
          }
    }
  } & {
    '/registries/:id/configure': {
      $post:
        | {
            input: { param: { id: number } } & { json: RegistriesRegistryConfigurePayload }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { id: number } } & { json: RegistriesRegistryConfigurePayload }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { id: number } } & { json: RegistriesRegistryConfigurePayload }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { id: number } } & { json: RegistriesRegistryConfigurePayload }
            output: {}
            outputFormat: string
            status: 404
          }
        | {
            input: { param: { id: number } } & { json: RegistriesRegistryConfigurePayload }
            output: {}
            outputFormat: string
            status: 500
          }
    }
  } & {
    '/registries/ping': {
      $post:
        | {
            input: { json: RegistriesRegistryPingPayload }
            output: RegistriesRegistryPingResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: RegistriesRegistryPingPayload }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { json: RegistriesRegistryPingPayload }
            output: {}
            outputFormat: string
            status: 500
          }
    }
  } & {
    '/resource_controls': {
      $post:
        | {
            input: { json: ResourcecontrolsResourceControlCreatePayload }
            output: PortainerResourceControl
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: ResourcecontrolsResourceControlCreatePayload }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { json: ResourcecontrolsResourceControlCreatePayload }
            output: {}
            outputFormat: string
            status: 409
          }
        | {
            input: { json: ResourcecontrolsResourceControlCreatePayload }
            output: {}
            outputFormat: string
            status: 500
          }
    }
  } & {
    '/resource_controls/:id': {
      $delete:
        | { input: { param: { id: number } }; output: {}; outputFormat: string; status: 204 }
        | { input: { param: { id: number } }; output: {}; outputFormat: string; status: 400 }
        | { input: { param: { id: number } }; output: {}; outputFormat: string; status: 404 }
        | { input: { param: { id: number } }; output: {}; outputFormat: string; status: 500 }
      $put:
        | {
            input: { param: { id: number } } & {
              json: ResourcecontrolsResourceControlUpdatePayload
            }
            output: PortainerResourceControl
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: number } } & {
              json: ResourcecontrolsResourceControlUpdatePayload
            }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { id: number } } & {
              json: ResourcecontrolsResourceControlUpdatePayload
            }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { id: number } } & {
              json: ResourcecontrolsResourceControlUpdatePayload
            }
            output: {}
            outputFormat: string
            status: 404
          }
        | {
            input: { param: { id: number } } & {
              json: ResourcecontrolsResourceControlUpdatePayload
            }
            output: {}
            outputFormat: string
            status: 500
          }
    }
  } & {
    '/restore': {
      $post:
        | {
            input: { header: { 'X-Setup-Token'?: string | undefined } } & {
              json: BackupRestorePayload
            }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { header: { 'X-Setup-Token'?: string | undefined } } & {
              json: BackupRestorePayload
            }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { header: { 'X-Setup-Token'?: string | undefined } } & {
              json: BackupRestorePayload
            }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { header: { 'X-Setup-Token'?: string | undefined } } & {
              json: BackupRestorePayload
            }
            output: {}
            outputFormat: string
            status: 500
          }
    }
  } & {
    '/roles': {
      $get:
        | { input: {}; output: PortainerRole[]; outputFormat: 'json'; status: 200 }
        | { input: {}; output: {}; outputFormat: string; status: 500 }
    }
  } & {
    '/settings': {
      $get:
        | { input: {}; output: PortainerSettings; outputFormat: 'json'; status: 200 }
        | { input: {}; output: {}; outputFormat: string; status: 500 }
      $put:
        | {
            input: { json: SettingsSettingsUpdatePayload }
            output: PortainerSettings
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: SettingsSettingsUpdatePayload }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { json: SettingsSettingsUpdatePayload }
            output: {}
            outputFormat: string
            status: 500
          }
    }
  } & {
    '/settings/public': {
      $get:
        | { input: {}; output: SettingsPublicSettingsResponse; outputFormat: 'json'; status: 200 }
        | { input: {}; output: {}; outputFormat: string; status: 500 }
    }
  } & {
    '/ssl': {
      $get:
        | { input: {}; output: PortainerSSLSettings; outputFormat: 'json'; status: 200 }
        | { input: {}; output: {}; outputFormat: string; status: 400 }
        | { input: {}; output: {}; outputFormat: string; status: 403 }
        | { input: {}; output: {}; outputFormat: string; status: 500 }
      $put:
        | { input: { json: SslSslUpdatePayload }; output: {}; outputFormat: string; status: 204 }
        | { input: { json: SslSslUpdatePayload }; output: {}; outputFormat: string; status: 400 }
        | { input: { json: SslSslUpdatePayload }; output: {}; outputFormat: string; status: 403 }
        | { input: { json: SslSslUpdatePayload }; output: {}; outputFormat: string; status: 500 }
    }
  } & {
    '/stacks': {
      $get:
        | {
            input: { query: { filters?: string | undefined } }
            output: PortainerStack[]
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { query: { filters?: string | undefined } }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { query: { filters?: string | undefined } }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { query: { filters?: string | undefined } }
            output: {}
            outputFormat: string
            status: 500
          }
    }
  } & {
    '/stacks/:id': {
      $delete:
        | {
            input: { param: { id: number } } & {
              query: { external?: boolean | undefined; endpointId: number }
            }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { id: number } } & {
              query: { external?: boolean | undefined; endpointId: number }
            }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { id: number } } & {
              query: { external?: boolean | undefined; endpointId: number }
            }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { id: number } } & {
              query: { external?: boolean | undefined; endpointId: number }
            }
            output: {}
            outputFormat: string
            status: 404
          }
        | {
            input: { param: { id: number } } & {
              query: { external?: boolean | undefined; endpointId: number }
            }
            output: {}
            outputFormat: string
            status: 500
          }
      $get:
        | {
            input: { param: { id: number } }
            output: StacksStackResponse
            outputFormat: 'json'
            status: 200
          }
        | { input: { param: { id: number } }; output: {}; outputFormat: string; status: 400 }
        | { input: { param: { id: number } }; output: {}; outputFormat: string; status: 403 }
        | { input: { param: { id: number } }; output: {}; outputFormat: string; status: 404 }
        | { input: { param: { id: number } }; output: {}; outputFormat: string; status: 500 }
      $put:
        | {
            input: { param: { id: number } } & { query: { endpointId?: number | undefined } } & {
              json: StacksUpdateSwarmStackPayload
            }
            output: PortainerStack
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: number } } & { query: { endpointId?: number | undefined } } & {
              json: StacksUpdateSwarmStackPayload
            }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { id: number } } & { query: { endpointId?: number | undefined } } & {
              json: StacksUpdateSwarmStackPayload
            }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { id: number } } & { query: { endpointId?: number | undefined } } & {
              json: StacksUpdateSwarmStackPayload
            }
            output: {}
            outputFormat: string
            status: 404
          }
        | {
            input: { param: { id: number } } & { query: { endpointId?: number | undefined } } & {
              json: StacksUpdateSwarmStackPayload
            }
            output: {}
            outputFormat: string
            status: 409
          }
        | {
            input: { param: { id: number } } & { query: { endpointId?: number | undefined } } & {
              json: StacksUpdateSwarmStackPayload
            }
            output: {}
            outputFormat: string
            status: 500
          }
    }
  } & {
    '/stacks/:id/associate': {
      $put:
        | {
            input: { param: { id: number } } & {
              query: { endpointId: number; swarmId: number; orphanedRunning: boolean }
            }
            output: PortainerStack
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: number } } & {
              query: { endpointId: number; swarmId: number; orphanedRunning: boolean }
            }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { id: number } } & {
              query: { endpointId: number; swarmId: number; orphanedRunning: boolean }
            }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { id: number } } & {
              query: { endpointId: number; swarmId: number; orphanedRunning: boolean }
            }
            output: {}
            outputFormat: string
            status: 404
          }
        | {
            input: { param: { id: number } } & {
              query: { endpointId: number; swarmId: number; orphanedRunning: boolean }
            }
            output: {}
            outputFormat: string
            status: 500
          }
    }
  } & {
    '/stacks/:id/file': {
      $get:
        | {
            input: { param: { id: number } }
            output: StacksStackFileResponse
            outputFormat: 'json'
            status: 200
          }
        | { input: { param: { id: number } }; output: {}; outputFormat: string; status: 400 }
        | { input: { param: { id: number } }; output: {}; outputFormat: string; status: 403 }
        | { input: { param: { id: number } }; output: {}; outputFormat: string; status: 404 }
        | { input: { param: { id: number } }; output: {}; outputFormat: string; status: 409 }
        | { input: { param: { id: number } }; output: {}; outputFormat: string; status: 500 }
    }
  } & {
    '/stacks/:id/git': {
      $post:
        | {
            input: { param: { id: number } } & { query: { endpointId?: number | undefined } } & {
              json: StacksStackGitUpdatePayload
            }
            output: StacksStackResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: number } } & { query: { endpointId?: number | undefined } } & {
              json: StacksStackGitUpdatePayload
            }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { id: number } } & { query: { endpointId?: number | undefined } } & {
              json: StacksStackGitUpdatePayload
            }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { id: number } } & { query: { endpointId?: number | undefined } } & {
              json: StacksStackGitUpdatePayload
            }
            output: {}
            outputFormat: string
            status: 404
          }
        | {
            input: { param: { id: number } } & { query: { endpointId?: number | undefined } } & {
              json: StacksStackGitUpdatePayload
            }
            output: {}
            outputFormat: string
            status: 500
          }
    }
  } & {
    '/stacks/:id/git/redeploy': {
      $put:
        | {
            input: { param: { id: number } } & { query: { endpointId?: number | undefined } } & {
              json: StacksStackGitRedeployPayload
            }
            output: PortainerStack
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: number } } & { query: { endpointId?: number | undefined } } & {
              json: StacksStackGitRedeployPayload
            }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { id: number } } & { query: { endpointId?: number | undefined } } & {
              json: StacksStackGitRedeployPayload
            }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { id: number } } & { query: { endpointId?: number | undefined } } & {
              json: StacksStackGitRedeployPayload
            }
            output: {}
            outputFormat: string
            status: 404
          }
        | {
            input: { param: { id: number } } & { query: { endpointId?: number | undefined } } & {
              json: StacksStackGitRedeployPayload
            }
            output: {}
            outputFormat: string
            status: 409
          }
        | {
            input: { param: { id: number } } & { query: { endpointId?: number | undefined } } & {
              json: StacksStackGitRedeployPayload
            }
            output: {}
            outputFormat: string
            status: 500
          }
    }
  } & {
    '/stacks/:id/migrate': {
      $post:
        | {
            input: { param: { id: number } } & { query: { endpointId?: number | undefined } } & {
              json: StacksStackMigratePayload
            }
            output: PortainerStack
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: number } } & { query: { endpointId?: number | undefined } } & {
              json: StacksStackMigratePayload
            }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { id: number } } & { query: { endpointId?: number | undefined } } & {
              json: StacksStackMigratePayload
            }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { id: number } } & { query: { endpointId?: number | undefined } } & {
              json: StacksStackMigratePayload
            }
            output: {}
            outputFormat: string
            status: 404
          }
        | {
            input: { param: { id: number } } & { query: { endpointId?: number | undefined } } & {
              json: StacksStackMigratePayload
            }
            output: {}
            outputFormat: string
            status: 409
          }
        | {
            input: { param: { id: number } } & { query: { endpointId?: number | undefined } } & {
              json: StacksStackMigratePayload
            }
            output: {}
            outputFormat: string
            status: 500
          }
    }
  } & {
    '/stacks/:id/start': {
      $post:
        | {
            input: { param: { id: number } } & { query: { endpointId: number } }
            output: PortainerStack
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { id: number } } & { query: { endpointId: number } }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { id: number } } & { query: { endpointId: number } }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { id: number } } & { query: { endpointId: number } }
            output: {}
            outputFormat: string
            status: 404
          }
        | {
            input: { param: { id: number } } & { query: { endpointId: number } }
            output: {}
            outputFormat: string
            status: 409
          }
        | {
            input: { param: { id: number } } & { query: { endpointId: number } }
            output: {}
            outputFormat: string
            status: 500
          }
    }
  } & {
    '/stacks/:id/stop': {
      $post:
        | {
            input: { param: { id: number } } & { query: { endpointId: number } }
            output: PortainerStack
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { id: number } } & { query: { endpointId: number } }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { id: number } } & { query: { endpointId: number } }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { id: number } } & { query: { endpointId: number } }
            output: {}
            outputFormat: string
            status: 404
          }
        | {
            input: { param: { id: number } } & { query: { endpointId: number } }
            output: {}
            outputFormat: string
            status: 409
          }
        | {
            input: { param: { id: number } } & { query: { endpointId: number } }
            output: {}
            outputFormat: string
            status: 500
          }
    }
  } & {
    '/stacks/create/kubernetes/repository': {
      $post:
        | {
            input: { query: { endpointId: number } } & {
              json: StacksKubernetesGitDeploymentPayload
            }
            output: StacksCreateKubernetesStackResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { endpointId: number } } & {
              json: StacksKubernetesGitDeploymentPayload
            }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { query: { endpointId: number } } & {
              json: StacksKubernetesGitDeploymentPayload
            }
            output: {}
            outputFormat: string
            status: 409
          }
        | {
            input: { query: { endpointId: number } } & {
              json: StacksKubernetesGitDeploymentPayload
            }
            output: {}
            outputFormat: string
            status: 500
          }
    }
  } & {
    '/stacks/create/kubernetes/string': {
      $post:
        | {
            input: { query: { endpointId: number } } & {
              json: StacksKubernetesStringDeploymentPayload
            }
            output: StacksCreateKubernetesStackResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { endpointId: number } } & {
              json: StacksKubernetesStringDeploymentPayload
            }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { query: { endpointId: number } } & {
              json: StacksKubernetesStringDeploymentPayload
            }
            output: {}
            outputFormat: string
            status: 500
          }
    }
  } & {
    '/stacks/create/kubernetes/url': {
      $post:
        | {
            input: { query: { endpointId: number } } & {
              json: StacksKubernetesManifestURLDeploymentPayload
            }
            output: StacksCreateKubernetesStackResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { endpointId: number } } & {
              json: StacksKubernetesManifestURLDeploymentPayload
            }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { query: { endpointId: number } } & {
              json: StacksKubernetesManifestURLDeploymentPayload
            }
            output: {}
            outputFormat: string
            status: 500
          }
    }
  } & {
    '/stacks/create/standalone/file': {
      $post:
        | {
            input: { query: { endpointId: number } } & {
              form: { Name: string; Env?: string | undefined; file?: File | undefined }
            }
            output: PortainerStack
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { endpointId: number } } & {
              form: { Name: string; Env?: string | undefined; file?: File | undefined }
            }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { query: { endpointId: number } } & {
              form: { Name: string; Env?: string | undefined; file?: File | undefined }
            }
            output: {}
            outputFormat: string
            status: 500
          }
    }
  } & {
    '/stacks/create/standalone/repository': {
      $post:
        | {
            input: { query: { endpointId: number } } & {
              json: StacksComposeStackFromGitRepositoryPayload
            }
            output: PortainerStack
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { endpointId: number } } & {
              json: StacksComposeStackFromGitRepositoryPayload
            }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { query: { endpointId: number } } & {
              json: StacksComposeStackFromGitRepositoryPayload
            }
            output: {}
            outputFormat: string
            status: 409
          }
        | {
            input: { query: { endpointId: number } } & {
              json: StacksComposeStackFromGitRepositoryPayload
            }
            output: {}
            outputFormat: string
            status: 500
          }
    }
  } & {
    '/stacks/create/standalone/string': {
      $post:
        | {
            input: { query: { endpointId: number } } & {
              json: StacksComposeStackFromFileContentPayload
            }
            output: PortainerStack
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { endpointId: number } } & {
              json: StacksComposeStackFromFileContentPayload
            }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { query: { endpointId: number } } & {
              json: StacksComposeStackFromFileContentPayload
            }
            output: {}
            outputFormat: string
            status: 500
          }
    }
  } & {
    '/stacks/create/swarm/file': {
      $post:
        | {
            input: { query: { endpointId: number } } & {
              form: {
                Name?: string | undefined
                SwarmID?: string | undefined
                Env?: string | undefined
                file?: File | undefined
              }
            }
            output: PortainerStack
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { endpointId: number } } & {
              form: {
                Name?: string | undefined
                SwarmID?: string | undefined
                Env?: string | undefined
                file?: File | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { query: { endpointId: number } } & {
              form: {
                Name?: string | undefined
                SwarmID?: string | undefined
                Env?: string | undefined
                file?: File | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 500
          }
    }
  } & {
    '/stacks/create/swarm/repository': {
      $post:
        | {
            input: { query: { endpointId: number } } & {
              json: StacksSwarmStackFromGitRepositoryPayload
            }
            output: PortainerStack
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { endpointId: number } } & {
              json: StacksSwarmStackFromGitRepositoryPayload
            }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { query: { endpointId: number } } & {
              json: StacksSwarmStackFromGitRepositoryPayload
            }
            output: {}
            outputFormat: string
            status: 409
          }
        | {
            input: { query: { endpointId: number } } & {
              json: StacksSwarmStackFromGitRepositoryPayload
            }
            output: {}
            outputFormat: string
            status: 500
          }
    }
  } & {
    '/stacks/create/swarm/string': {
      $post:
        | {
            input: { query: { endpointId: number } } & {
              json: StacksSwarmStackFromFileContentPayload
            }
            output: PortainerStack
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { endpointId: number } } & {
              json: StacksSwarmStackFromFileContentPayload
            }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { query: { endpointId: number } } & {
              json: StacksSwarmStackFromFileContentPayload
            }
            output: {}
            outputFormat: string
            status: 500
          }
    }
  } & {
    '/stacks/name/:name': {
      $delete:
        | {
            input: { param: { name: string } } & {
              query: { external?: boolean | undefined; endpointId: number }
            }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { name: string } } & {
              query: { external?: boolean | undefined; endpointId: number }
            }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { name: string } } & {
              query: { external?: boolean | undefined; endpointId: number }
            }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { name: string } } & {
              query: { external?: boolean | undefined; endpointId: number }
            }
            output: {}
            outputFormat: string
            status: 404
          }
        | {
            input: { param: { name: string } } & {
              query: { external?: boolean | undefined; endpointId: number }
            }
            output: {}
            outputFormat: string
            status: 500
          }
    }
  } & {
    '/stacks/webhooks/:webhookID': {
      $post:
        | { input: { param: { webhookID: string } }; output: {}; outputFormat: string; status: 200 }
        | { input: { param: { webhookID: string } }; output: {}; outputFormat: string; status: 400 }
        | { input: { param: { webhookID: string } }; output: {}; outputFormat: string; status: 409 }
        | { input: { param: { webhookID: string } }; output: {}; outputFormat: string; status: 500 }
    }
  } & {
    '/status': { $get: { input: {}; output: SystemStatus; outputFormat: 'json'; status: 200 } }
  } & {
    '/system/info': {
      $get:
        | { input: {}; output: SystemSystemInfoResponse; outputFormat: 'json'; status: 200 }
        | { input: {}; output: {}; outputFormat: string; status: 500 }
    }
  } & {
    '/system/nodes': {
      $get:
        | { input: {}; output: SystemNodesCountResponse; outputFormat: 'json'; status: 200 }
        | { input: {}; output: {}; outputFormat: string; status: 500 }
    }
  } & {
    '/system/status': {
      $get: { input: {}; output: SystemStatus; outputFormat: 'json'; status: 200 }
    }
  } & {
    '/system/upgrade': {
      $post: { input: {}; output: SystemStatus; outputFormat: 'json'; status: 204 }
    }
  } & {
    '/system/version': {
      $get: { input: {}; output: SystemVersionResponse; outputFormat: 'json'; status: 200 }
    }
  } & {
    '/tags': {
      $get:
        | { input: {}; output: PortainerTag[]; outputFormat: 'json'; status: 200 }
        | { input: {}; output: {}; outputFormat: string; status: 500 }
      $post:
        | {
            input: { json: TagsTagCreatePayload }
            output: PortainerTag
            outputFormat: 'json'
            status: 200
          }
        | { input: { json: TagsTagCreatePayload }; output: {}; outputFormat: string; status: 409 }
        | { input: { json: TagsTagCreatePayload }; output: {}; outputFormat: string; status: 500 }
    }
  } & {
    '/tags/:id': {
      $delete:
        | { input: { param: { id: number } }; output: {}; outputFormat: string; status: 204 }
        | { input: { param: { id: number } }; output: {}; outputFormat: string; status: 400 }
        | { input: { param: { id: number } }; output: {}; outputFormat: string; status: 403 }
        | { input: { param: { id: number } }; output: {}; outputFormat: string; status: 404 }
        | { input: { param: { id: number } }; output: {}; outputFormat: string; status: 500 }
    }
  } & {
    '/team_memberships': {
      $get:
        | { input: {}; output: PortainerTeamMembership[]; outputFormat: 'json'; status: 200 }
        | { input: {}; output: {}; outputFormat: string; status: 400 }
        | { input: {}; output: {}; outputFormat: string; status: 403 }
        | { input: {}; output: {}; outputFormat: string; status: 500 }
      $post:
        | {
            input: { json: TeammembershipsTeamMembershipCreatePayload }
            output: PortainerTeamMembership
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: TeammembershipsTeamMembershipCreatePayload }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { json: TeammembershipsTeamMembershipCreatePayload }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { json: TeammembershipsTeamMembershipCreatePayload }
            output: {}
            outputFormat: string
            status: 409
          }
        | {
            input: { json: TeammembershipsTeamMembershipCreatePayload }
            output: {}
            outputFormat: string
            status: 500
          }
    }
  } & {
    '/team_memberships/:id': {
      $delete:
        | { input: { param: { id: number } }; output: {}; outputFormat: string; status: 204 }
        | { input: { param: { id: number } }; output: {}; outputFormat: string; status: 400 }
        | { input: { param: { id: number } }; output: {}; outputFormat: string; status: 403 }
        | { input: { param: { id: number } }; output: {}; outputFormat: string; status: 404 }
        | { input: { param: { id: number } }; output: {}; outputFormat: string; status: 500 }
      $put:
        | {
            input: { param: { id: number } } & { json: TeammembershipsTeamMembershipUpdatePayload }
            output: PortainerTeamMembership
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: number } } & { json: TeammembershipsTeamMembershipUpdatePayload }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { id: number } } & { json: TeammembershipsTeamMembershipUpdatePayload }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { id: number } } & { json: TeammembershipsTeamMembershipUpdatePayload }
            output: {}
            outputFormat: string
            status: 404
          }
        | {
            input: { param: { id: number } } & { json: TeammembershipsTeamMembershipUpdatePayload }
            output: {}
            outputFormat: string
            status: 500
          }
    }
  } & {
    '/teams': {
      $get:
        | {
            input: {
              query: { onlyLedTeams?: boolean | undefined; environmentId?: number | undefined }
            }
            output: PortainerTeam[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: { onlyLedTeams?: boolean | undefined; environmentId?: number | undefined }
            }
            output: {}
            outputFormat: string
            status: 500
          }
      $post:
        | {
            input: { json: TeamsTeamCreatePayload }
            output: PortainerTeam
            outputFormat: 'json'
            status: 200
          }
        | { input: { json: TeamsTeamCreatePayload }; output: {}; outputFormat: string; status: 400 }
        | { input: { json: TeamsTeamCreatePayload }; output: {}; outputFormat: string; status: 409 }
        | { input: { json: TeamsTeamCreatePayload }; output: {}; outputFormat: string; status: 500 }
    }
  } & {
    '/teams/:id': {
      $delete:
        | { input: { param: { id: number } }; output: {}; outputFormat: string; status: 204 }
        | { input: { param: { id: number } }; output: {}; outputFormat: string; status: 400 }
        | { input: { param: { id: number } }; output: {}; outputFormat: string; status: 403 }
        | { input: { param: { id: number } }; output: {}; outputFormat: string; status: 404 }
        | { input: { param: { id: number } }; output: {}; outputFormat: string; status: 500 }
      $get:
        | {
            input: { param: { id: number } }
            output: PortainerTeam
            outputFormat: 'json'
            status: 200
          }
        | { input: { param: { id: number } }; output: {}; outputFormat: string; status: 400 }
        | { input: { param: { id: number } }; output: {}; outputFormat: string; status: 403 }
        | { input: { param: { id: number } }; output: {}; outputFormat: string; status: 404 }
        | { input: { param: { id: number } }; output: {}; outputFormat: string; status: 500 }
      $put:
        | {
            input: { param: { id: number } } & { json: TeamsTeamUpdatePayload }
            output: PortainerTeam
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: number } } & { json: TeamsTeamUpdatePayload }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { id: number } } & { json: TeamsTeamUpdatePayload }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { id: number } } & { json: TeamsTeamUpdatePayload }
            output: {}
            outputFormat: string
            status: 404
          }
        | {
            input: { param: { id: number } } & { json: TeamsTeamUpdatePayload }
            output: {}
            outputFormat: string
            status: 500
          }
    }
  } & {
    '/teams/:id/memberships': {
      $get:
        | {
            input: { param: { id: number } }
            output: PortainerTeamMembership[]
            outputFormat: 'json'
            status: 200
          }
        | { input: { param: { id: number } }; output: {}; outputFormat: string; status: 400 }
        | { input: { param: { id: number } }; output: {}; outputFormat: string; status: 403 }
        | { input: { param: { id: number } }; output: {}; outputFormat: string; status: 500 }
    }
  } & {
    '/templates': {
      $get:
        | { input: {}; output: TemplatesListResponse; outputFormat: 'json'; status: 200 }
        | { input: {}; output: {}; outputFormat: string; status: 500 }
    }
  } & {
    '/templates/:id/file': {
      $post:
        | {
            input: { param: { id: number } }
            output: TemplatesFileResponse
            outputFormat: 'json'
            status: 200
          }
        | { input: { param: { id: number } }; output: {}; outputFormat: string; status: 400 }
        | { input: { param: { id: number } }; output: {}; outputFormat: string; status: 500 }
    }
  } & {
    '/templates/helm': {
      $get:
        | {
            input: {
              query: { repo: string; chart?: string | undefined; useCache?: string | undefined }
            }
            output: string
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: { repo: string; chart?: string | undefined; useCache?: string | undefined }
            }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: {
              query: { repo: string; chart?: string | undefined; useCache?: string | undefined }
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: {
              query: { repo: string; chart?: string | undefined; useCache?: string | undefined }
            }
            output: {}
            outputFormat: string
            status: 404
          }
        | {
            input: {
              query: { repo: string; chart?: string | undefined; useCache?: string | undefined }
            }
            output: {}
            outputFormat: string
            status: 500
          }
    }
  } & {
    '/templates/helm/:command': {
      $get:
        | {
            input: { param: { command: string } } & {
              query: { repo?: string | undefined; chart: string; version?: string | undefined }
            }
            output: string
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { command: string } } & {
              query: { repo?: string | undefined; chart: string; version?: string | undefined }
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { command: string } } & {
              query: { repo?: string | undefined; chart: string; version?: string | undefined }
            }
            output: {}
            outputFormat: string
            status: 404
          }
        | {
            input: { param: { command: string } } & {
              query: { repo?: string | undefined; chart: string; version?: string | undefined }
            }
            output: {}
            outputFormat: string
            status: 500
          }
    }
  } & {
    '/upload/tls/:certificate': {
      $post:
        | {
            input: { param: { certificate: 'ca' | 'cert' | 'key' } } & {
              form: { folder: string; file: File }
            }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { certificate: 'ca' | 'cert' | 'key' } } & {
              form: { folder: string; file: File }
            }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { certificate: 'ca' | 'cert' | 'key' } } & {
              form: { folder: string; file: File }
            }
            output: {}
            outputFormat: string
            status: 500
          }
    }
  } & {
    '/users': {
      $get:
        | {
            input: { query: { environmentId?: number | undefined } }
            output: PortainerUser[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { environmentId?: number | undefined } }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { query: { environmentId?: number | undefined } }
            output: {}
            outputFormat: string
            status: 500
          }
      $post:
        | {
            input: { json: UsersUserCreatePayload }
            output: PortainerUser
            outputFormat: 'json'
            status: 200
          }
        | { input: { json: UsersUserCreatePayload }; output: {}; outputFormat: string; status: 400 }
        | { input: { json: UsersUserCreatePayload }; output: {}; outputFormat: string; status: 403 }
        | { input: { json: UsersUserCreatePayload }; output: {}; outputFormat: string; status: 409 }
        | { input: { json: UsersUserCreatePayload }; output: {}; outputFormat: string; status: 500 }
    }
  } & {
    '/users/:id': {
      $delete:
        | { input: { param: { id: number } }; output: {}; outputFormat: string; status: 204 }
        | { input: { param: { id: number } }; output: {}; outputFormat: string; status: 400 }
        | { input: { param: { id: number } }; output: {}; outputFormat: string; status: 403 }
        | { input: { param: { id: number } }; output: {}; outputFormat: string; status: 404 }
        | { input: { param: { id: number } }; output: {}; outputFormat: string; status: 409 }
        | { input: { param: { id: number } }; output: {}; outputFormat: string; status: 500 }
      $get:
        | {
            input: { param: { id: number } }
            output: PortainerUser
            outputFormat: 'json'
            status: 200
          }
        | { input: { param: { id: number } }; output: {}; outputFormat: string; status: 400 }
        | { input: { param: { id: number } }; output: {}; outputFormat: string; status: 403 }
        | { input: { param: { id: number } }; output: {}; outputFormat: string; status: 404 }
        | { input: { param: { id: number } }; output: {}; outputFormat: string; status: 500 }
      $put:
        | {
            input: { param: { id: number } } & { json: UsersUserUpdatePayload }
            output: PortainerUser
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: number } } & { json: UsersUserUpdatePayload }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { id: number } } & { json: UsersUserUpdatePayload }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { id: number } } & { json: UsersUserUpdatePayload }
            output: {}
            outputFormat: string
            status: 404
          }
        | {
            input: { param: { id: number } } & { json: UsersUserUpdatePayload }
            output: {}
            outputFormat: string
            status: 409
          }
        | {
            input: { param: { id: number } } & { json: UsersUserUpdatePayload }
            output: {}
            outputFormat: string
            status: 500
          }
    }
  } & {
    '/users/:id/effective-access': {
      $get:
        | {
            input: { param: { id: number } }
            output: UsersEffectiveAccessEntry[]
            outputFormat: 'json'
            status: 200
          }
        | { input: { param: { id: number } }; output: {}; outputFormat: string; status: 400 }
        | { input: { param: { id: number } }; output: {}; outputFormat: string; status: 403 }
        | { input: { param: { id: number } }; output: {}; outputFormat: string; status: 404 }
        | { input: { param: { id: number } }; output: {}; outputFormat: string; status: 500 }
    }
  } & {
    '/users/:id/helm/repositories': {
      $get:
        | {
            input: { param: { id: number } }
            output: UsersHelmUserRepositoryResponse
            outputFormat: 'json'
            status: 200
          }
        | { input: { param: { id: number } }; output: {}; outputFormat: string; status: 400 }
        | { input: { param: { id: number } }; output: {}; outputFormat: string; status: 403 }
        | { input: { param: { id: number } }; output: {}; outputFormat: string; status: 500 }
      $post:
        | {
            input: { param: { id: number } } & { json: UsersAddHelmRepoUrlPayload }
            output: PortainerHelmUserRepository
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: number } } & { json: UsersAddHelmRepoUrlPayload }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { id: number } } & { json: UsersAddHelmRepoUrlPayload }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { id: number } } & { json: UsersAddHelmRepoUrlPayload }
            output: {}
            outputFormat: string
            status: 500
          }
    }
  } & {
    '/users/:id/helm/repositories/:repositoryID': {
      $delete:
        | {
            input: { param: { id: number; repositoryID: number } }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { id: number; repositoryID: number } }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { id: number; repositoryID: number } }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { id: number; repositoryID: number } }
            output: {}
            outputFormat: string
            status: 500
          }
    }
  } & {
    '/users/:id/memberships': {
      $get:
        | {
            input: { param: { id: number } }
            output: PortainerTeamMembership
            outputFormat: 'json'
            status: 200
          }
        | { input: { param: { id: number } }; output: {}; outputFormat: string; status: 400 }
        | { input: { param: { id: number } }; output: {}; outputFormat: string; status: 403 }
        | { input: { param: { id: number } }; output: {}; outputFormat: string; status: 500 }
    }
  } & {
    '/users/:id/passwd': {
      $put:
        | {
            input: { param: { id: number } } & { json: UsersUserUpdatePasswordPayload }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { id: number } } & { json: UsersUserUpdatePasswordPayload }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { id: number } } & { json: UsersUserUpdatePasswordPayload }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { id: number } } & { json: UsersUserUpdatePasswordPayload }
            output: {}
            outputFormat: string
            status: 404
          }
        | {
            input: { param: { id: number } } & { json: UsersUserUpdatePasswordPayload }
            output: {}
            outputFormat: string
            status: 500
          }
    }
  } & {
    '/users/:id/tokens': {
      $get:
        | {
            input: { param: { id: number } }
            output: PortainerAPIKey[]
            outputFormat: 'json'
            status: 200
          }
        | { input: { param: { id: number } }; output: {}; outputFormat: string; status: 400 }
        | { input: { param: { id: number } }; output: {}; outputFormat: string; status: 403 }
        | { input: { param: { id: number } }; output: {}; outputFormat: string; status: 404 }
        | { input: { param: { id: number } }; output: {}; outputFormat: string; status: 500 }
      $post:
        | {
            input: { param: { id: number } } & { json: UsersUserAccessTokenCreatePayload }
            output: UsersAccessTokenResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: number } } & { json: UsersUserAccessTokenCreatePayload }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { id: number } } & { json: UsersUserAccessTokenCreatePayload }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { id: number } } & { json: UsersUserAccessTokenCreatePayload }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { id: number } } & { json: UsersUserAccessTokenCreatePayload }
            output: {}
            outputFormat: string
            status: 404
          }
        | {
            input: { param: { id: number } } & { json: UsersUserAccessTokenCreatePayload }
            output: {}
            outputFormat: string
            status: 500
          }
    }
  } & {
    '/users/:id/tokens/:keyID': {
      $delete:
        | {
            input: { param: { id: number; keyID: number } }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { id: number; keyID: number } }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { id: number; keyID: number } }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { id: number; keyID: number } }
            output: {}
            outputFormat: string
            status: 404
          }
        | {
            input: { param: { id: number; keyID: number } }
            output: {}
            outputFormat: string
            status: 500
          }
    }
  } & {
    '/users/admin/check': {
      $get:
        | { input: {}; output: {}; outputFormat: string; status: 204 }
        | { input: {}; output: {}; outputFormat: string; status: 404 }
    }
  } & {
    '/users/admin/init': {
      $post:
        | {
            input: { header: { 'X-Setup-Token'?: string | undefined } } & {
              json: UsersAdminInitPayload
            }
            output: PortainerUser
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { header: { 'X-Setup-Token'?: string | undefined } } & {
              json: UsersAdminInitPayload
            }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { header: { 'X-Setup-Token'?: string | undefined } } & {
              json: UsersAdminInitPayload
            }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { header: { 'X-Setup-Token'?: string | undefined } } & {
              json: UsersAdminInitPayload
            }
            output: {}
            outputFormat: string
            status: 409
          }
        | {
            input: { header: { 'X-Setup-Token'?: string | undefined } } & {
              json: UsersAdminInitPayload
            }
            output: {}
            outputFormat: string
            status: 500
          }
    }
  } & {
    '/users/me': {
      $get:
        | { input: {}; output: PortainerUser; outputFormat: 'json'; status: 200 }
        | { input: {}; output: {}; outputFormat: string; status: 400 }
        | { input: {}; output: {}; outputFormat: string; status: 403 }
        | { input: {}; output: {}; outputFormat: string; status: 404 }
        | { input: {}; output: {}; outputFormat: string; status: 500 }
    }
  } & {
    '/webhooks': {
      $get:
        | {
            input: { query: { filters?: string | undefined } }
            output: PortainerWebhook[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { filters?: string | undefined } }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { query: { filters?: string | undefined } }
            output: {}
            outputFormat: string
            status: 500
          }
      $post:
        | {
            input: { json: WebhooksWebhookCreatePayload }
            output: PortainerWebhook
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: WebhooksWebhookCreatePayload }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { json: WebhooksWebhookCreatePayload }
            output: {}
            outputFormat: string
            status: 409
          }
        | {
            input: { json: WebhooksWebhookCreatePayload }
            output: {}
            outputFormat: string
            status: 500
          }
    }
  } & {
    '/webhooks/:id': {
      $delete:
        | { input: { param: { id: number } }; output: {}; outputFormat: string; status: 202 }
        | { input: { param: { id: number } }; output: {}; outputFormat: string; status: 400 }
        | { input: { param: { id: number } }; output: {}; outputFormat: string; status: 500 }
      $post:
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 202 }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 400 }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 500 }
      $put:
        | {
            input: { param: { id: number } } & { json: WebhooksWebhookUpdatePayload }
            output: PortainerWebhook
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: number } } & { json: WebhooksWebhookUpdatePayload }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { id: number } } & { json: WebhooksWebhookUpdatePayload }
            output: {}
            outputFormat: string
            status: 409
          }
        | {
            input: { param: { id: number } } & { json: WebhooksWebhookUpdatePayload }
            output: {}
            outputFormat: string
            status: 500
          }
    }
  } & {
    '/websocket/attach': {
      $get:
        | {
            input: { query: { endpointId: number; nodeName?: string | undefined } }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { query: { endpointId: number; nodeName?: string | undefined } }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { query: { endpointId: number; nodeName?: string | undefined } }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { query: { endpointId: number; nodeName?: string | undefined } }
            output: {}
            outputFormat: string
            status: 404
          }
        | {
            input: { query: { endpointId: number; nodeName?: string | undefined } }
            output: {}
            outputFormat: string
            status: 500
          }
    }
  } & {
    '/websocket/exec': {
      $get:
        | {
            input: { query: { endpointId: number; nodeName?: string | undefined } }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { query: { endpointId: number; nodeName?: string | undefined } }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { query: { endpointId: number; nodeName?: string | undefined } }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { query: { endpointId: number; nodeName?: string | undefined } }
            output: {}
            outputFormat: string
            status: 404
          }
        | {
            input: { query: { endpointId: number; nodeName?: string | undefined } }
            output: {}
            outputFormat: string
            status: 409
          }
        | {
            input: { query: { endpointId: number; nodeName?: string | undefined } }
            output: {}
            outputFormat: string
            status: 500
          }
    }
  } & {
    '/websocket/kubernetes-shell': {
      $get:
        | {
            input: { query: { endpointId: number } }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { query: { endpointId: number } }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { query: { endpointId: number } }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { query: { endpointId: number } }
            output: {}
            outputFormat: string
            status: 404
          }
        | {
            input: { query: { endpointId: number } }
            output: {}
            outputFormat: string
            status: 500
          }
    }
  } & {
    '/websocket/pod': {
      $get:
        | {
            input: {
              query: {
                endpointId: number
                namespace: string
                podName: string
                containerName: string
                command: string
              }
            }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: {
              query: {
                endpointId: number
                namespace: string
                podName: string
                containerName: string
                command: string
              }
            }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: {
              query: {
                endpointId: number
                namespace: string
                podName: string
                containerName: string
                command: string
              }
            }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: {
              query: {
                endpointId: number
                namespace: string
                podName: string
                containerName: string
                command: string
              }
            }
            output: {}
            outputFormat: string
            status: 404
          }
        | {
            input: {
              query: {
                endpointId: number
                namespace: string
                podName: string
                containerName: string
                command: string
              }
            }
            output: {}
            outputFormat: string
            status: 500
          }
    }
  },
  '/'
>
export default routes
