type WhoamiOrganization = { organizationId: string; organizationName: string }
type WhoamiUser = {
  actorType: 'user'
  userId: string
  email: string
  name: string
  organizations: WhoamiOrganization[]
}
type WhoamiApiKey = { actorType: 'apiKey'; keyId: string; name: string; organizationId: string }
type Whoami = WhoamiUser | WhoamiApiKey
type OrganizationPrivateEndpoint = {
  id?: string | undefined
  description?: string | undefined
  cloudProvider?: 'gcp' | 'aws' | 'azure' | undefined
  region?:
    | 'ap-northeast-1'
    | 'ap-northeast-2'
    | 'ap-south-1'
    | 'ap-southeast-1'
    | 'ap-southeast-2'
    | 'ca-central-1'
    | 'eu-central-1'
    | 'eu-west-1'
    | 'eu-west-2'
    | 'il-central-1'
    | 'us-east-1'
    | 'us-east-2'
    | 'us-west-2'
    | 'us-east1'
    | 'us-central1'
    | 'europe-west2'
    | 'europe-west4'
    | 'asia-southeast1'
    | 'asia-northeast1'
    | 'eastus'
    | 'eastus2'
    | 'westus3'
    | 'germanywestcentral'
    | 'centralus'
    | undefined
}
type ByocConfig = {
  id?: string | undefined
  state?: string | undefined
  accountId?: string | undefined
  accountName?: string | undefined
  regionId?:
    | 'ap-northeast-1'
    | 'ap-northeast-2'
    | 'ap-south-1'
    | 'ap-southeast-1'
    | 'ap-southeast-2'
    | 'ca-central-1'
    | 'eu-central-1'
    | 'eu-west-1'
    | 'eu-west-2'
    | 'il-central-1'
    | 'us-east-1'
    | 'us-east-2'
    | 'us-west-2'
    | 'us-east1'
    | 'us-central1'
    | 'europe-west2'
    | 'europe-west4'
    | 'asia-southeast1'
    | 'asia-northeast1'
    | 'eastus'
    | 'eastus2'
    | 'westus3'
    | 'germanywestcentral'
    | 'centralus'
    | undefined
  cloudProvider?: 'gcp' | 'aws' | 'azure' | undefined
  displayName?: string | undefined
  accessModel?: string | undefined
}
type OrganizationCapabilities = { snapshots?: boolean | undefined }
type Organization = {
  id?: string | undefined
  createdAt?: string | undefined
  name?: string | undefined
  privateEndpoints?: OrganizationPrivateEndpoint[] | undefined
  byocConfig?: ByocConfig[] | undefined
  enableCoreDumps?: boolean | undefined
  capabilities?: OrganizationCapabilities | undefined
  knowledgeBasedAiSupportEnabled?: boolean | undefined
  aiDataUseForProductImprovementEnabled?: boolean | undefined
}
type OrganizationPatchPrivateEndpoint = {
  id?: string | undefined
  description?: string | undefined
  cloudProvider?: 'gcp' | 'aws' | 'azure' | undefined
  region?:
    | 'ap-northeast-1'
    | 'ap-northeast-2'
    | 'ap-south-1'
    | 'ap-southeast-1'
    | 'ap-southeast-2'
    | 'ca-central-1'
    | 'eu-central-1'
    | 'eu-west-1'
    | 'eu-west-2'
    | 'il-central-1'
    | 'us-east-1'
    | 'us-east-2'
    | 'us-west-2'
    | 'us-east1'
    | 'us-central1'
    | 'europe-west2'
    | 'europe-west4'
    | 'asia-southeast1'
    | 'asia-northeast1'
    | 'eastus'
    | 'eastus2'
    | 'westus3'
    | 'germanywestcentral'
    | 'centralus'
    | undefined
}
type OrganizationPrivateEndpointsPatch = {
  add?: OrganizationPatchPrivateEndpoint[] | undefined
  remove?: OrganizationPatchPrivateEndpoint[] | undefined
}
type OrganizationPatchRequest = {
  name?: string | undefined
  privateEndpoints?: OrganizationPrivateEndpointsPatch | undefined
  enableCoreDumps?: boolean | undefined
}
type PrometheusDiscoveryLabels = {
  __scheme__?: string | undefined
  __metrics_path__?: string | undefined
  __param_filtered_metrics?: string | undefined
  clickhouse_org_id?: string | undefined
  clickhouse_service_id?: string | undefined
  clickhouse_discovery_service_name?: string | undefined
  __meta_clickhouse_region?: string | undefined
  __meta_clickhouse_provider?: string | undefined
}
type PrometheusDiscoveryTargetGroup = {
  targets?: string[] | undefined
  labels?: PrometheusDiscoveryLabels | undefined
}
type RBACPolicyTags = {
  grants?: string[] | undefined
  roleV2?: 'sql-console-readonly' | 'sql-console-admin' | undefined
}
type RBACPolicy = {
  id?: string | undefined
  roleId?: string | undefined
  tenantId?: string | undefined
  allowDeny?: 'ALLOW' | 'DENY' | undefined
  permissions?: string[] | undefined
  resources?: string[] | undefined
  tags?: RBACPolicyTags | undefined
}
type RBACRole = {
  id?: string | undefined
  tenantId?: string | undefined
  ownerId?: string | undefined
  name?: string | undefined
  type?: 'system' | 'custom' | undefined
  actors?: string[] | undefined
  policies?: RBACPolicy[] | undefined
  createdAt?: string | undefined
  updatedAt?: string | undefined
}
type RBACPolicyCreateRequest = {
  allowDeny: 'ALLOW' | 'DENY'
  permissions: string[]
  resources: string[]
  tags?: RBACPolicyTags | undefined
}
type RoleCreateRequest = { name: string; actors: string[]; policies: RBACPolicyCreateRequest[] }
type RoleUpdateRequest = {
  name?: string | undefined
  actors?: string[] | undefined
  policies?: RBACPolicyCreateRequest[] | undefined
}
type OrganizationQuota = {
  quotaCode:
    | 'services-per-organization'
    | 'postgres-services-per-organization'
    | 'replicas-per-warehouse'
    | 'api-keys-per-organization'
  name: string
  description: string
  scope: 'organization' | 'warehouse'
  value: number
  usage?: number | undefined
  adjustable: boolean
}
type ServiceProfile = {
  profile?: string | undefined
  cpuCores?: number | undefined
  memoryGi?: number | undefined
}
type PublicPreview = {
  id: string
  name: string
  description: string
  docsUrl: string
  enabled: boolean
  canToggle: boolean
}
type PublicPreviewPatchRequest = { enabled: boolean }
type ServiceEndpoint = {
  protocol?: 'https' | 'nativesecure' | 'mysql' | undefined
  host?: string | undefined
  port?: number | undefined
  username?: (string | null) | undefined
}
type IpAccessListEntry = { source?: string | undefined; description?: string | undefined }
type ResourceTagsV1 = { key: string; value?: string | undefined }
type ScalingScheduleEntry = {
  id: string
  name: string
  weekdays: number[]
  startHourUtc: number
  endHourUtc: number
  autoscalingMode: 'vertical' | 'horizontal'
  minReplicaMemoryGb?: number | undefined
  maxReplicaMemoryGb?: number | undefined
  minReplicas?: number | undefined
  maxReplicas?: number | undefined
  idleScaling?: boolean | undefined
  idleTimeoutMinutes?: number | undefined
  isActiveNow: boolean
}
type ScalingScheduleBaseConfig = {
  autoscalingMode?: 'vertical' | 'horizontal' | undefined
  minReplicaMemoryGb?: number | undefined
  maxReplicaMemoryGb?: number | undefined
  minReplicas?: number | undefined
  maxReplicas?: number | undefined
  idleScaling?: boolean | undefined
  idleTimeoutMinutes?: number | undefined
}
type ScalingSchedule = {
  entries: ScalingScheduleEntry[]
  baseConfig: ScalingScheduleBaseConfig
  activeEntryId?: string | undefined
}
type CurrentScaling = {
  effectiveAutoscalingMode?: 'vertical' | 'horizontal' | undefined
  effectiveMinReplicaMemoryGb?: number | undefined
  effectiveMaxReplicaMemoryGb?: number | undefined
  effectiveMinReplicas?: number | undefined
  effectiveMaxReplicas?: number | undefined
  effectiveIdleScaling?: boolean | undefined
  effectiveIdleTimeoutMinutes?: number | undefined
  activeEntryId?: string | undefined
}
type Service = {
  id?: string | undefined
  name?: string | undefined
  provider?: 'aws' | 'gcp' | 'azure' | undefined
  region?:
    | 'ap-northeast-1'
    | 'ap-northeast-2'
    | 'ap-south-1'
    | 'ap-southeast-1'
    | 'ap-southeast-2'
    | 'ca-central-1'
    | 'eu-central-1'
    | 'eu-west-1'
    | 'eu-west-2'
    | 'il-central-1'
    | 'us-east-1'
    | 'us-east-2'
    | 'us-west-2'
    | 'us-east1'
    | 'us-central1'
    | 'europe-west2'
    | 'europe-west4'
    | 'asia-southeast1'
    | 'asia-northeast1'
    | 'eastus'
    | 'eastus2'
    | 'westus3'
    | 'germanywestcentral'
    | 'centralus'
    | undefined
  state?:
    | 'starting'
    | 'stopping'
    | 'terminating'
    | 'softdeleting'
    | 'awaking'
    | 'partially_running'
    | 'provisioning'
    | 'running'
    | 'stopped'
    | 'terminated'
    | 'softdeleted'
    | 'degraded'
    | 'failed'
    | 'idle'
    | undefined
  clickhouseVersion?: string | undefined
  endpoints?: ServiceEndpoint[] | undefined
  tier?:
    | 'development'
    | 'production'
    | 'dedicated_high_mem'
    | 'dedicated_high_cpu'
    | 'dedicated_standard'
    | 'dedicated_standard_n2d_standard_4'
    | 'dedicated_standard_n2d_standard_8'
    | 'dedicated_standard_n2d_standard_32'
    | 'dedicated_standard_n2d_standard_128'
    | 'dedicated_standard_n2d_standard_32_16SSD'
    | 'dedicated_standard_n2d_standard_64_24SSD'
    | undefined
  minTotalMemoryGb?: number | undefined
  maxTotalMemoryGb?: number | undefined
  minReplicaMemoryGb?: number | undefined
  maxReplicaMemoryGb?: number | undefined
  numReplicas?: number | undefined
  minReplicas?: number | undefined
  maxReplicas?: number | undefined
  autoscalingMode: 'vertical' | 'horizontal'
  replicaMemoryGb?: number | undefined
  idleScaling?: boolean | undefined
  idleTimeoutMinutes?: number | undefined
  ipAccessList?: IpAccessListEntry[] | undefined
  createdAt?: string | undefined
  encryptionKey?: string | undefined
  encryptionAssumedRoleIdentifier?: string | undefined
  iamRole?: string | undefined
  privateEndpointIds?: string[] | undefined
  availablePrivateEndpointIds?: string[] | undefined
  dataWarehouseId?: string | undefined
  isPrimary?: boolean | undefined
  isReadonly?: boolean | undefined
  releaseChannel?: 'slow' | 'default' | 'fast' | undefined
  byocId?: string | undefined
  hasTransparentDataEncryption?: boolean | undefined
  profile?: string | undefined
  transparentDataEncryptionKeyId?: string | undefined
  encryptionRoleId?: string | undefined
  complianceType?: 'hipaa' | 'pci' | undefined
  tags?: ResourceTagsV1[] | undefined
  enableCoreDumps?: boolean | undefined
  deletionProtection?: boolean | undefined
  scalingSchedule?: ScalingSchedule | undefined
  currentScaling: CurrentScaling
}
type BackupEncryptionConfig = { [x: string]: unknown }
type ServiceEndpointChange = { protocol?: 'mysql' | undefined; enabled?: boolean | undefined }
type ServicePostRequest = {
  name: string
  provider: 'aws' | 'gcp' | 'azure'
  region:
    | 'ap-northeast-1'
    | 'ap-northeast-2'
    | 'ap-south-1'
    | 'ap-southeast-1'
    | 'ap-southeast-2'
    | 'ca-central-1'
    | 'eu-central-1'
    | 'eu-west-1'
    | 'eu-west-2'
    | 'il-central-1'
    | 'us-east-1'
    | 'us-east-2'
    | 'us-west-2'
    | 'us-east1'
    | 'us-central1'
    | 'europe-west2'
    | 'europe-west4'
    | 'asia-southeast1'
    | 'asia-northeast1'
    | 'eastus'
    | 'eastus2'
    | 'westus3'
    | 'germanywestcentral'
    | 'centralus'
  tier?: 'development' | 'production' | undefined
  ipAccessList: IpAccessListEntry[]
  minTotalMemoryGb?: number | undefined
  maxTotalMemoryGb?: number | undefined
  autoscalingMode?: 'vertical' | 'horizontal' | undefined
  minReplicaMemoryGb?: number | undefined
  maxReplicaMemoryGb?: number | undefined
  numReplicas?: number | undefined
  minReplicas?: number | undefined
  maxReplicas?: number | undefined
  idleScaling?: boolean | undefined
  idleTimeoutMinutes?: number | undefined
  isReadonly?: boolean | undefined
  dataWarehouseId?: string | undefined
  backupId?: string | undefined
  backupEncryptionConfig?: BackupEncryptionConfig | undefined
  privateEndpointIds?: string[] | undefined
  privatePreviewTermsChecked?: boolean | undefined
  releaseChannel?: 'slow' | 'default' | 'fast' | undefined
  byocId?: string | undefined
  hasTransparentDataEncryption?: boolean | undefined
  endpoints?: ServiceEndpointChange[] | undefined
  profile?: string | undefined
  complianceType?: 'hipaa' | 'pci' | undefined
  tags?: ResourceTagsV1[] | undefined
  enableCoreDumps?: boolean | undefined
  deletionProtection?: boolean | undefined
}
type ServicePostResponse = { service?: Service | undefined; password?: string | undefined }
type IpAccessListPatch = {
  add?: IpAccessListEntry[] | undefined
  remove?: IpAccessListEntry[] | undefined
}
type InstancePrivateEndpointsPatch = { add?: string[] | undefined; remove?: string[] | undefined }
type InstanceTagsPatch = {
  add?: ResourceTagsV1[] | undefined
  remove?: ResourceTagsV1[] | undefined
}
type ServicePatchRequest = {
  name?: string | undefined
  ipAccessList?: IpAccessListPatch | undefined
  privateEndpointIds?: InstancePrivateEndpointsPatch | undefined
  releaseChannel?: 'slow' | 'default' | 'fast' | undefined
  endpoints?: ServiceEndpointChange[] | undefined
  transparentDataEncryptionKeyId?: string | undefined
  tags?: InstanceTagsPatch | undefined
  enableCoreDumps?: boolean | undefined
  deletionProtection?: boolean | undefined
}
type PrivateEndpointConfig = {
  endpointServiceId?: string | undefined
  privateDnsHostname?: string | undefined
}
type ServiceQueryAPIEndpoint = {
  id?: string | undefined
  openApiKeys?: string[] | undefined
  roles?: ('sql_console_read_only' | 'sql_console_admin')[] | undefined
  allowedOrigins?: string | undefined
}
type InstanceServiceQueryApiEndpointsPostRequest = {
  roles: ('sql_console_read_only' | 'sql_console_admin')[]
  openApiKeys: string[]
  allowedOrigins?: string | undefined
}
type ServiceStatePatchRequest = { command: 'start' | 'stop' | 'awake' }
type ServiceScalingPatchRequest = {
  minTotalMemoryGb?: number | undefined
  maxTotalMemoryGb?: number | undefined
  numReplicas?: number | undefined
  idleScaling?: boolean | undefined
  idleTimeoutMinutes?: number | undefined
}
type ServiceReplicaScalingPatchRequest = {
  minReplicaMemoryGb?: number | undefined
  maxReplicaMemoryGb?: number | undefined
  autoscalingMode?: 'vertical' | 'horizontal' | undefined
  numReplicas?: number | undefined
  minReplicas?: number | undefined
  maxReplicas?: number | undefined
  idleScaling?: boolean | undefined
  idleTimeoutMinutes?: number | undefined
  profile?: string | undefined
}
type ServiceScalingPatchResponse = {
  id?: string | undefined
  name?: string | undefined
  provider?: 'aws' | 'gcp' | 'azure' | undefined
  region?:
    | 'ap-northeast-1'
    | 'ap-northeast-2'
    | 'ap-south-1'
    | 'ap-southeast-1'
    | 'ap-southeast-2'
    | 'ca-central-1'
    | 'eu-central-1'
    | 'eu-west-1'
    | 'eu-west-2'
    | 'il-central-1'
    | 'us-east-1'
    | 'us-east-2'
    | 'us-west-2'
    | 'us-east1'
    | 'us-central1'
    | 'europe-west2'
    | 'europe-west4'
    | 'asia-southeast1'
    | 'asia-northeast1'
    | 'eastus'
    | 'eastus2'
    | 'westus3'
    | 'germanywestcentral'
    | 'centralus'
    | undefined
  state?:
    | 'starting'
    | 'stopping'
    | 'terminating'
    | 'softdeleting'
    | 'awaking'
    | 'partially_running'
    | 'provisioning'
    | 'running'
    | 'stopped'
    | 'terminated'
    | 'softdeleted'
    | 'degraded'
    | 'failed'
    | 'idle'
    | undefined
  clickhouseVersion?: string | undefined
  endpoints?: ServiceEndpoint[] | undefined
  tier?:
    | 'development'
    | 'production'
    | 'dedicated_high_mem'
    | 'dedicated_high_cpu'
    | 'dedicated_standard'
    | 'dedicated_standard_n2d_standard_4'
    | 'dedicated_standard_n2d_standard_8'
    | 'dedicated_standard_n2d_standard_32'
    | 'dedicated_standard_n2d_standard_128'
    | 'dedicated_standard_n2d_standard_32_16SSD'
    | 'dedicated_standard_n2d_standard_64_24SSD'
    | undefined
  minTotalMemoryGb?: number | undefined
  maxTotalMemoryGb?: number | undefined
  minReplicaMemoryGb?: number | undefined
  maxReplicaMemoryGb?: number | undefined
  numReplicas?: number | undefined
  minReplicas?: number | undefined
  maxReplicas?: number | undefined
  autoscalingMode: 'vertical' | 'horizontal'
  replicaMemoryGb?: number | undefined
  idleScaling?: boolean | undefined
  idleTimeoutMinutes?: number | undefined
  ipAccessList?: IpAccessListEntry[] | undefined
  createdAt?: string | undefined
  encryptionKey?: string | undefined
  encryptionAssumedRoleIdentifier?: string | undefined
  iamRole?: string | undefined
  privateEndpointIds?: string[] | undefined
  availablePrivateEndpointIds?: string[] | undefined
  dataWarehouseId?: string | undefined
  isPrimary?: boolean | undefined
  isReadonly?: boolean | undefined
  releaseChannel?: 'slow' | 'default' | 'fast' | undefined
  byocId?: string | undefined
  hasTransparentDataEncryption?: boolean | undefined
  profile?: string | undefined
  transparentDataEncryptionKeyId?: string | undefined
  encryptionRoleId?: string | undefined
  complianceType?: 'hipaa' | 'pci' | undefined
  tags?: ResourceTagsV1[] | undefined
  enableCoreDumps?: boolean | undefined
  deletionProtection?: boolean | undefined
  scalingSchedule?: ScalingSchedule | undefined
  currentScaling: CurrentScaling
}
type ServicePasswordPatchRequest = {
  newPasswordHash?: string | undefined
  newDoubleSha1Hash?: string | undefined
}
type ServicePasswordPatchResponse = { password?: string | undefined }
type ServicPrivateEndpointePostRequest = { id: string; description?: string | undefined }
type InstancePrivateEndpoint = {
  id?: string | undefined
  description?: string | undefined
  cloudProvider?: 'gcp' | 'aws' | 'azure' | undefined
  region?:
    | 'ap-northeast-1'
    | 'ap-northeast-2'
    | 'ap-south-1'
    | 'ap-southeast-1'
    | 'ap-southeast-2'
    | 'ca-central-1'
    | 'eu-central-1'
    | 'eu-west-1'
    | 'eu-west-2'
    | 'il-central-1'
    | 'us-east-1'
    | 'us-east-2'
    | 'us-west-2'
    | 'us-east1'
    | 'us-central1'
    | 'europe-west2'
    | 'europe-west4'
    | 'asia-southeast1'
    | 'asia-northeast1'
    | 'eastus'
    | 'eastus2'
    | 'westus3'
    | 'germanywestcentral'
    | 'centralus'
    | undefined
}
type ScalingScheduleEntryRequest = {
  name: string
  weekdays: number[]
  startHourUtc: number
  endHourUtc: number
  autoscalingMode?: 'vertical' | 'horizontal' | undefined
  minReplicaMemoryGb?: number | undefined
  maxReplicaMemoryGb?: number | undefined
  numReplicas?: number | undefined
  minReplicas?: number | undefined
  maxReplicas?: number | undefined
  idleScaling?: boolean | undefined
  idleTimeoutMinutes?: number | undefined
}
type ScalingSchedulePostRequest = { entries: ScalingScheduleEntryRequest[] }
type UpgradeWindow = { weekday: number; startHourUtc: 0 | 6 | 12 | 18; duration: 6 }
type UpgradeWindowPutRequest = { weekday: number; startHourUtc: 0 | 6 | 12 | 18 }
type JwtProvider = {
  name: string
  issuer: string
  audience: string
  jwksUrl: string
  rolesClaim?: string | undefined
}
type JwtProviderPostRequest = {
  name: string
  issuer: string
  audience: string
  jwksUrl: string
  rolesClaim?: string | undefined
}
type JwtProviderPutRequest = {
  issuer: string
  audience: string
  jwksUrl: string
  rolesClaim?: string | undefined
}
type ServiceClickhouseSettingValue = string | number
type ServiceClickhouseSetting = {
  name?: string | undefined
  value?: ServiceClickhouseSettingValue | undefined
}
type ServiceClickhouseSettingsList = { settings?: ServiceClickhouseSetting[] | undefined }
type ServiceClickhouseSettingsMap = { [x: string]: ServiceClickhouseSettingValue }
type ServiceClickhouseSettingsPatchRequest = { settings: ServiceClickhouseSettingsMap }
type ServiceClickhouseSettingWarning = { name?: string | undefined; message?: string | undefined }
type ServiceClickhouseSettingsPatchResponse = {
  settings?: ServiceClickhouseSettingsMap | undefined
  warnings?: ServiceClickhouseSettingWarning[] | undefined
}
type ServiceClickhouseSettingSchemaEntry = {
  name?: string | undefined
  type?: string | undefined
  description?: string | undefined
  enum?: number[] | undefined
  warning?: string | undefined
  deprecationNotice?: string | undefined
  example?: string | undefined
}
type ServiceClickhouseSettingsSchema = {
  settings?: ServiceClickhouseSettingSchemaEntry[] | undefined
}
type ServiceClickhouseSettingDeleteResponse = {
  warnings?: ServiceClickhouseSettingWarning[] | undefined
}
type AwsBackupBucketProperties = {
  bucketProvider?: 'AWS' | undefined
  bucketPath?: string | undefined
  iamRoleArn?: string | undefined
  iamRoleSessionName?: string | undefined
  iamRoleExternalId?: string | undefined
}
type GcpBackupBucketProperties = {
  bucketProvider?: 'GCP' | undefined
  bucketPath?: string | undefined
  accessKeyId?: string | undefined
}
type AzureBackupBucketProperties = {
  bucketProvider?: 'AZURE' | undefined
  containerName?: string | undefined
}
type Backup = {
  id?: string | undefined
  status?: 'done' | 'error' | 'in_progress' | undefined
  serviceId?: string | undefined
  startedAt?: string | undefined
  finishedAt?: string | undefined
  sizeInBytes?: number | undefined
  durationInSeconds?: number | undefined
  type?: 'full' | 'incremental' | undefined
  backupName?: string | undefined
  bucket?:
    | AwsBackupBucketProperties
    | GcpBackupBucketProperties
    | AzureBackupBucketProperties
    | undefined
}
type Snapshot = {
  id?: string | undefined
  status?: 'done' | 'error' | 'in_progress' | 'throttled' | undefined
  serviceId?: string | undefined
  startedAt?: string | undefined
  finishedAt?: string | undefined
  sizeInBytes?: number | undefined
  durationInSeconds?: number | undefined
  type?: 'full' | undefined
  backupName?: string | undefined
  bucket?:
    | AwsBackupBucketProperties
    | GcpBackupBucketProperties
    | AzureBackupBucketProperties
    | undefined
}
type BackupConfiguration = {
  backupPeriodInHours?: number | undefined
  backupRetentionPeriodInHours?: number | undefined
  backupStartTime?: string | undefined
}
type BackupConfigurationPatchRequest = {
  backupPeriodInHours?: (number | null) | undefined
  backupRetentionPeriodInHours?: (number | null) | undefined
  backupStartTime?: (string | null) | undefined
}
type SnapshotConfiguration = {
  enabled?: boolean | undefined
  gap?: number | undefined
  timeFrame?: number | undefined
}
type SnapshotConfigurationPatchRequest = {
  enabled?: boolean | undefined
  gap?: number | undefined
  timeFrame?: number | undefined
}
type ReplicaAwareRouting = { httpEnabled: boolean; nativeEnabled: boolean }
type ReplicaAwareRoutingPatchRequest = {
  httpEnabled?: boolean | undefined
  nativeEnabled?: boolean | undefined
}
type AwsBackupBucket = {
  id?: string | undefined
  bucketProvider?: 'AWS' | undefined
  bucketPath?: string | undefined
  iamRoleArn?: string | undefined
  iamRoleSessionName?: string | undefined
  iamRoleExternalId?: string | undefined
}
type GcpBackupBucket = {
  id?: string | undefined
  bucketProvider?: 'GCP' | undefined
  bucketPath?: string | undefined
  accessKeyId?: string | undefined
}
type AzureBackupBucket = {
  id?: string | undefined
  bucketProvider?: 'AZURE' | undefined
  containerName?: string | undefined
}
type BackupBucket = AwsBackupBucket | GcpBackupBucket | AzureBackupBucket
type AwsBackupBucketPostRequestV1 = {
  bucketProvider?: 'AWS' | undefined
  bucketPath?: string | undefined
  iamRoleArn?: string | undefined
  iamRoleSessionName?: string | undefined
  iamRoleExternalId?: string | undefined
}
type GcpBackupBucketPostRequestV1 = {
  bucketProvider?: 'GCP' | undefined
  bucketPath?: string | undefined
  accessKeyId?: string | undefined
  secretAccessKey?: string | undefined
}
type AzureBackupBucketPostRequestV1 = {
  bucketProvider?: 'AZURE' | undefined
  containerName?: string | undefined
  connectionString?: string | undefined
}
type BackupBucketPostRequest =
  | AwsBackupBucketPostRequestV1
  | GcpBackupBucketPostRequestV1
  | AzureBackupBucketPostRequestV1
type AwsBackupBucketPatchRequestV1 = {
  bucketProvider?: 'AWS' | undefined
  bucketPath?: string | undefined
  iamRoleArn?: string | undefined
  iamRoleSessionName?: (string | null) | undefined
  iamRoleExternalId?: (string | null) | undefined
}
type GcpBackupBucketPatchRequestV1 = {
  bucketProvider?: 'GCP' | undefined
  bucketPath?: string | undefined
  accessKeyId?: string | undefined
  secretAccessKey?: string | undefined
}
type AzureBackupBucketPatchRequestV1 = {
  bucketProvider?: 'AZURE' | undefined
  containerName?: string | undefined
  connectionString?: string | undefined
}
type BackupBucketPatchRequest =
  | AwsBackupBucketPatchRequestV1
  | GcpBackupBucketPatchRequestV1
  | AzureBackupBucketPatchRequestV1
type AssignedRole = {
  roleId?: string | undefined
  roleName?: string | undefined
  roleType?: 'system' | 'custom' | undefined
}
type ApiKey = {
  id?: string | undefined
  name?: string | undefined
  state?: 'enabled' | 'disabled' | undefined
  roles?: ('admin' | 'developer' | 'query_endpoints')[] | undefined
  assignedRoles?: AssignedRole[] | undefined
  keySuffix?: string | undefined
  createdAt?: string | undefined
  expireAt?: (string | null) | undefined
  usedAt?: string | undefined
  ipAccessList?: IpAccessListEntry[] | undefined
}
type ApiKeyHashData = {
  keyIdHash?: string | undefined
  keyIdSuffix?: string | undefined
  keySecretHash?: string | undefined
}
type ApiKeyPostRequest = {
  name: string
  expireAt?: (string | null) | undefined
  state?: 'enabled' | 'disabled' | undefined
  hashData?: ApiKeyHashData | undefined
  roles?: ('admin' | 'developer' | 'query_endpoints')[] | undefined
  assignedRoleIds?: string[] | undefined
  ipAccessList?: IpAccessListEntry[] | undefined
}
type ApiKeyPostResponse = {
  key?: ApiKey | undefined
  keyId?: string | undefined
  keySecret?: string | undefined
}
type ApiKeyPatchRequest = {
  name?: string | undefined
  roles?: ('admin' | 'developer' | 'query_endpoints')[] | undefined
  assignedRoleIds?: string[] | undefined
  expireAt?: (string | null) | undefined
  state?: 'enabled' | 'disabled' | undefined
  ipAccessList?: IpAccessListEntry[] | undefined
}
type Member = {
  userId?: string | undefined
  name?: string | undefined
  email?: string | undefined
  role?: 'admin' | 'developer' | undefined
  joinedAt?: string | undefined
  assignedRoles?: AssignedRole[] | undefined
}
type MemberPatchRequest = {
  role?: 'admin' | 'developer' | undefined
  assignedRoleIds?: string[] | undefined
}
type Invitation = {
  role?: 'admin' | 'developer' | undefined
  id?: string | undefined
  email?: string | undefined
  createdAt?: string | undefined
  expireAt?: string | undefined
  assignedRoles?: AssignedRole[] | undefined
}
type InvitationPostRequest = {
  email: string
  role?: 'admin' | 'developer' | undefined
  assignedRoleIds?: string[] | undefined
}
type Activity = {
  id?: string | undefined
  createdAt?: string | undefined
  type?: string | undefined
  actorType?: 'user' | 'support' | 'system' | 'api' | undefined
  actorId?: string | undefined
  actorDetails?: string | undefined
  actorIpAddress?: string | undefined
  organizationId?: string | undefined
  serviceId?: string | undefined
  userAgent?: string | undefined
  targetKeyId?: string | undefined
  keyUpdateType?:
    | 'created'
    | 'deleted'
    | 'name-changed'
    | 'role-changed'
    | 'state-changed'
    | 'date-changed'
    | 'ip-access-list-changed'
    | 'org-role-changed'
    | 'default-service-role-changed'
    | 'service-role-changed'
    | 'roles-v2-changed'
    | undefined
  targetRoleIds?: string[] | undefined
  targetRoleNames?: string[] | undefined
  targetActorIds?: string[] | undefined
  targetResourceIds?: string[] | undefined
  deletionProtectionBypassed?: boolean | undefined
}
type Notification = {
  id: string
  type: string
  severity: string
  resourceType: string
  resourceId: string
  resourceName?: string | undefined
  createdAt: string
  title: string
  description: string
}
type NotificationType = {
  name: string
  title: string
  description?: string | undefined
  category: string
  severity: 'info' | 'warning' | 'critical'
  resourceType: string
  isConfigurable: boolean
  isAvailable: boolean
}
type NotificationSetting = {
  type: string
  resourceType: string
  resourceId: string
  channelType: string
  effect: string
}
type NotificationSettingRule = {
  effect: string
  notifications: string[]
  resources: string[]
  channels?: string[] | undefined
}
type MemberNotificationSettingsPatchRequest = { rules: NotificationSettingRule[] }
type MemberNotificationSettingsPatchResponse = { settings: NotificationSetting[] }
type UsageCostMetrics = {
  storageCHC?: number | undefined
  backupCHC?: number | undefined
  computeCHC?: number | undefined
  dataTransferCHC?: number | undefined
  initialLoadCHC?: number | undefined
  publicDataTransferCHC?: number | undefined
  interRegionTier1DataTransferCHC?: number | undefined
  interRegionTier2DataTransferCHC?: number | undefined
  interRegionTier3DataTransferCHC?: number | undefined
  interRegionTier4DataTransferCHC?: number | undefined
}
type UsageCostRecord = {
  dataWarehouseId?: string | undefined
  serviceId?: (string | null) | undefined
  date?: string | undefined
  entityType?: 'datawarehouse' | 'service' | 'clickpipe' | undefined
  entityId?: string | undefined
  entityName?: string | undefined
  metrics?: UsageCostMetrics | undefined
  totalCHC?: number | undefined
  locked?: boolean | undefined
}
type UsageCost = { grandTotalCHC?: number | undefined; costs?: UsageCostRecord[] | undefined }
type InferenceUsageCostMetric = {
  metric?: string | undefined
  tokensMillions?: number | undefined
  pricePerMillionTokensCHC?: number | undefined
  totalCHC?: number | undefined
}
type InferenceUsageCostRecord = {
  date?: string | undefined
  provider?: string | undefined
  model?: string | undefined
  modelName?: string | undefined
  metrics?: InferenceUsageCostMetric[] | undefined
  totalCHC?: number | undefined
  locked?: boolean | undefined
}
type InferenceUsageCost = {
  grandTotalCHC?: number | undefined
  costs?: InferenceUsageCostRecord[] | undefined
}
type ActiveBalance = {
  id?: string | undefined
  remainingPrepaidCredits?: number | undefined
  totalAmount?: number | undefined
  amountSpent?: number | undefined
  startDate?: string | undefined
  expirationDate?: string | undefined
}
type ActiveBalances = {
  totalRemainingPrepaidCredits?: number | undefined
  prepaidBalances?: ActiveBalance[] | undefined
}
type CreditBalance = {
  id?: string | undefined
  type?: 'prepaid' | 'trial' | undefined
  remainingCredits?: number | undefined
  totalAmount?: number | undefined
  amountSpent?: number | undefined
  startDate?: string | undefined
  expirationDate?: string | undefined
}
type CreditBalances = {
  totalRemainingCredits?: number | undefined
  balances?: CreditBalance[] | undefined
}
type ClickPipeScaling = {
  replicas?: number | undefined
  concurrency?: number | undefined
  replicaCpuMillicores?: number | undefined
  replicaMemoryGb?: number | undefined
}
type ClickPipeKafkaOffset = {
  strategy?: 'from_beginning' | 'from_latest' | 'from_timestamp' | undefined
  timestamp?: (string | null) | undefined
}
type ClickPipeKafkaConfluentSchemaRegistry = {
  type?: 'confluent' | undefined
  url: string
  authentication?: string | undefined
  caCertificate?: (string | null) | undefined
  tokenUrl?: (string | null) | undefined
  scope?: (string | null) | undefined
  audience?: (string | null) | undefined
}
type ClickPipeKafkaGlueSchemaRegistry = {
  type: 'glue'
  glueRegion: string
  glueRegistryName: string
  glueRoleArn?: string | undefined
}
type ClickPipeKafkaSchemaRegistry =
  | ClickPipeKafkaConfluentSchemaRegistry
  | ClickPipeKafkaGlueSchemaRegistry
type ClickPipeKafkaSource = {
  type?:
    | 'kafka'
    | 'redpanda'
    | 'msk'
    | 'gcmk'
    | 'confluent'
    | 'warpstream'
    | 'azureeventhub'
    | 'dokafka'
    | undefined
  format?: 'JSONEachRow' | 'Avro' | 'AvroConfluent' | 'Protobuf' | undefined
  brokers?: string | undefined
  topics?: string | undefined
  consumerGroup?: (string | null) | undefined
  authentication?:
    | 'PLAIN'
    | 'SCRAM-SHA-256'
    | 'SCRAM-SHA-512'
    | 'IAM_ROLE'
    | 'IAM_USER'
    | 'MUTUAL_TLS'
    | 'SERVICE_ACCOUNT_WORKLOAD_IDENTITY'
    | undefined
  iamRole?: (string | null) | undefined
  offset?: ClickPipeKafkaOffset | ({ [x: string]: unknown } | null) | undefined
  schemaRegistry?: ClickPipeKafkaSchemaRegistry | ({ [x: string]: unknown } | null) | undefined
  caCertificate?: (string | null) | undefined
  reversePrivateEndpointIds?: string[] | undefined
  exactlyOnce?: (boolean | null) | undefined
  tombstoneMode?: 'delete' | 'soft_delete' | undefined
}
type ClickPipeObjectStorageSource = {
  type?:
    | 's3'
    | 'gcs'
    | 'dospaces'
    | 'azureblobstorage'
    | 'cloudflarer2'
    | 'ovhobjectstorage'
    | undefined
  format?:
    | 'JSONEachRow'
    | 'JSONAsObject'
    | 'CSV'
    | 'CSVWithNames'
    | 'TabSeparated'
    | 'TabSeparatedWithNames'
    | 'Parquet'
    | 'Avro'
    | undefined
  url?: string | undefined
  delimiter?: (string | null) | undefined
  skipFirstLines?: number | undefined
  compression?:
    | 'none'
    | 'gzip'
    | 'gz'
    | 'brotli'
    | 'br'
    | 'xz'
    | 'LZMA'
    | 'zstd'
    | 'auto'
    | undefined
  isContinuous?: (boolean | null) | undefined
  queueUrl?: (string | null) | undefined
  skipInitialLoad?: (boolean | null) | undefined
  startAfter?: (string | null) | undefined
  authentication?:
    | 'IAM_ROLE'
    | 'IAM_USER'
    | 'CONNECTION_STRING'
    | 'SERVICE_ACCOUNT'
    | 'SERVICE_ACCOUNT_WORKLOAD_IDENTITY'
    | undefined
  iamRole?: (string | null) | undefined
  connectionString?: (string | null) | undefined
  path?: (string | null) | undefined
  azureContainerName?: (string | null) | undefined
}
type ClickPipeKinesisSchemaRegistry = {
  type: 'glue'
  glueRegion: string
  glueRegistryName: string
  glueRoleArn?: (string | null) | undefined
}
type ClickPipeKinesisSource = {
  format?: 'JSONEachRow' | 'Avro' | 'AvroConfluent' | 'Protobuf' | undefined
  streamName?: string | undefined
  region?: string | undefined
  useEnhancedFanOut?: (boolean | null) | undefined
  iteratorType?: 'TRIM_HORIZON' | 'LATEST' | 'AT_TIMESTAMP' | undefined
  timestamp?: (number | null) | undefined
  authentication?: 'IAM_ROLE' | 'IAM_USER' | undefined
  iamRole?: (string | null) | undefined
  schemaRegistry?: ClickPipeKinesisSchemaRegistry | ({ [x: string]: unknown } | null) | undefined
}
type ClickPipePubSubSource = {
  format: 'JSONEachRow' | 'Avro' | 'Protobuf'
  projectId: string
  topic: string
  authentication: 'SERVICE_ACCOUNT' | 'SERVICE_ACCOUNT_WORKLOAD_IDENTITY'
  seekType: 'latest' | 'earliest' | 'timestamp'
  seekTimestamp?: (string | null) | undefined
  filter?: (string | null) | undefined
  enableOrdering?: (boolean | null) | undefined
  ackDeadline?: (number | null) | undefined
}
type ClickPipePostgresPipeSettings = {
  syncIntervalSeconds?: number | undefined
  pullBatchSize?: number | undefined
  publicationName?: string | undefined
  replicationMode?: 'cdc' | 'snapshot' | 'cdc_only' | undefined
  replicationSlotName?: string | undefined
  allowNullableColumns?: boolean | undefined
  initialLoadParallelism?: number | undefined
  snapshotNumRowsPerPartition?: number | undefined
  snapshotNumberOfParallelTables?: number | undefined
  enableFailoverSlots?: boolean | undefined
  deleteOnMerge?: boolean | undefined
  useJsonNativeFormat?: boolean | undefined
}
type ClickPipePostgresPipeTableMapping = {
  sourceSchemaName?: string | undefined
  sourceTable?: string | undefined
  targetTable?: string | undefined
  excludedColumns?: string[] | undefined
  useCustomSortingKey?: boolean | undefined
  sortingKeys?: string[] | undefined
  tableEngine?: 'MergeTree' | 'ReplacingMergeTree' | 'Null' | undefined
  partitionKey?: string | undefined
  partitionByExpr?: string | undefined
}
type ClickPipePostgresSource = {
  type?:
    | 'postgres'
    | 'supabase'
    | 'neon'
    | 'alloydb'
    | 'planetscale'
    | 'rdspostgres'
    | 'aurorapostgres'
    | 'cloudsqlpostgres'
    | 'azurepostgres'
    | 'crunchybridge'
    | 'tigerdata'
    | undefined
  host?: string | undefined
  port?: number | undefined
  database?: string | undefined
  authentication?: 'basic' | 'IAM_ROLE' | 'SERVICE_ACCOUNT_WORKLOAD_IDENTITY' | undefined
  iamRole?: string | undefined
  tlsHost?: string | undefined
  caCertificate?: string | undefined
  disableTls?: boolean | undefined
  skipCertVerification?: boolean | undefined
  settings?: ClickPipePostgresPipeSettings | undefined
  tableMappings?: ClickPipePostgresPipeTableMapping[] | undefined
}
type ClickPipeMySQLPipeSettings = {
  syncIntervalSeconds?: number | undefined
  pullBatchSize?: number | undefined
  replicationMode: 'cdc' | 'snapshot' | 'cdc_only'
  replicationMechanism?: 'GTID' | 'FILE_POS' | undefined
  useCompression?: boolean | undefined
  allowNullableColumns?: boolean | undefined
  initialLoadParallelism?: number | undefined
  snapshotNumRowsPerPartition?: number | undefined
  snapshotNumberOfParallelTables?: number | undefined
  deleteOnMerge?: boolean | undefined
  useJsonNativeFormat?: boolean | undefined
}
type ClickPipeMySQLPipeTableMapping = {
  sourceSchemaName: string
  sourceTable: string
  targetTable: string
  excludedColumns?: string[] | undefined
  useCustomSortingKey?: boolean | undefined
  sortingKeys?: string[] | undefined
  tableEngine?: 'MergeTree' | 'ReplacingMergeTree' | 'Null' | undefined
  partitionKey?: string | undefined
  partitionByExpr?: string | undefined
}
type ClickPipeMySQLSource = {
  type?:
    | 'mysql'
    | 'rdsmysql'
    | 'auroramysql'
    | 'cloudsqlmysql'
    | 'mariadb'
    | 'rdsmariadb'
    | undefined
  host: string
  port: number
  authentication?: 'basic' | 'IAM_ROLE' | 'SERVICE_ACCOUNT_WORKLOAD_IDENTITY' | undefined
  iamRole?: string | undefined
  tlsHost?: string | undefined
  caCertificate?: string | undefined
  disableTls?: boolean | undefined
  skipCertVerification?: boolean | undefined
  serverId?: number | undefined
  settings: ClickPipeMySQLPipeSettings
  tableMappings: ClickPipeMySQLPipeTableMapping[]
}
type ClickPipeBigQueryPipeSettings = {
  replicationMode: string
  replicationMethod?: string | undefined
  syncIntervalSeconds?: number | undefined
  queryCdcPullSyncParallelism?: number | undefined
  syncDelaySeconds?: number | undefined
  pullWindowSizeSeconds?: number | undefined
  syncCron?: string | undefined
  allowNullableColumns?: boolean | undefined
  initialLoadParallelism?: number | undefined
  snapshotNumRowsPerPartition?: number | undefined
  snapshotNumberOfParallelTables?: number | undefined
}
type ClickPipeBigQueryPipeTableMapping = {
  sourceDatasetName: string
  sourceTable: string
  targetTable: string
  excludedColumns?: string[] | undefined
  useCustomSortingKey?: boolean | undefined
  sortingKeys?: string[] | undefined
  tableEngine?: 'MergeTree' | 'ReplacingMergeTree' | 'Null' | undefined
  queryCdcWatermarkColumn?: string | undefined
  eventsFunction?: string | undefined
}
type ClickPipeBigQueryServiceAccountSource = {
  snapshotStagingPath: string
  settings: ClickPipeBigQueryPipeSettings
  tableMappings: ClickPipeBigQueryPipeTableMapping[]
  authentication: 'SERVICE_ACCOUNT'
  projectId?: string | undefined
}
type ClickPipeBigQueryWorkloadIdentitySource = {
  snapshotStagingPath: string
  settings: ClickPipeBigQueryPipeSettings
  tableMappings: ClickPipeBigQueryPipeTableMapping[]
  authentication: 'SERVICE_ACCOUNT_WORKLOAD_IDENTITY'
  projectId?: string | undefined
}
type ClickPipeBigQuerySource =
  | ClickPipeBigQueryServiceAccountSource
  | ClickPipeBigQueryWorkloadIdentitySource
type ClickPipeMongoDBPipeSettings = {
  syncIntervalSeconds?: number | undefined
  pullBatchSize?: number | undefined
  replicationMode: 'cdc' | 'snapshot' | 'cdc_only'
  initialLoadParallelism?: number | undefined
  snapshotNumRowsPerPartition?: number | undefined
  snapshotNumberOfParallelTables?: number | undefined
  deleteOnMerge?: boolean | undefined
  useJsonNativeFormat?: boolean | undefined
}
type ClickPipeMongoDBPipeColumn = { name: string; type: string }
type ClickPipeMongoDBStructuredIngestion = {
  enabled: boolean
  dropUnexpectedValues?: boolean | undefined
  columns?: ClickPipeMongoDBPipeColumn[] | undefined
  excludedColumns?: string[] | undefined
  sortingKeys?: string[] | undefined
  partitionByExpr?: string | undefined
}
type ClickPipeMongoDBTableConfig = { persistDeletedDocuments?: boolean | undefined }
type ClickPipeMongoDBPipeTableMapping = {
  sourceDatabaseName: string
  sourceCollection: string
  targetTable: string
  tableEngine?: 'MergeTree' | 'ReplacingMergeTree' | 'Null' | undefined
  structuredIngestion?: ClickPipeMongoDBStructuredIngestion | undefined
  mongoConfig?: ClickPipeMongoDBTableConfig | undefined
}
type ClickPipeMongoDBSource = {
  uri: string
  readPreference: 'primary' | 'primaryPreferred' | 'secondary' | 'secondaryPreferred' | 'nearest'
  tlsHost?: string | undefined
  disableTls?: boolean | undefined
  skipCertVerification?: boolean | undefined
  caCertificate?: string | undefined
  settings?: ClickPipeMongoDBPipeSettings | undefined
  tableMappings?: ClickPipeMongoDBPipeTableMapping[] | undefined
}
type ClickPipeSource = {
  kafka?: ClickPipeKafkaSource | ({ [x: string]: unknown } | null) | undefined
  objectStorage?: ClickPipeObjectStorageSource | ({ [x: string]: unknown } | null) | undefined
  kinesis?: ClickPipeKinesisSource | ({ [x: string]: unknown } | null) | undefined
  pubsub?: ClickPipePubSubSource | ({ [x: string]: unknown } | null) | undefined
  postgres?: ClickPipePostgresSource | ({ [x: string]: unknown } | null) | undefined
  mysql?: ClickPipeMySQLSource | ({ [x: string]: unknown } | null) | undefined
  bigquery?: ClickPipeBigQuerySource | ({ [x: string]: unknown } | null) | undefined
  mongodb?: ClickPipeMongoDBSource | ({ [x: string]: unknown } | null) | undefined
}
type ClickPipeDestinationTableEngine = {
  type?: 'MergeTree' | 'ReplacingMergeTree' | 'SummingMergeTree' | 'Null' | undefined
  versionColumnId?: (string | null) | undefined
  columnIds?: string[] | undefined
}
type ClickPipeDestinationTableDefinition = {
  engine?: ClickPipeDestinationTableEngine | undefined
  sortingKey?: string[] | undefined
  partitionBy?: string | undefined
  primaryKey?: string | undefined
  ttl?: string | undefined
}
type ClickPipeDestinationColumn = { name?: string | undefined; type?: string | undefined }
type ClickPipeDestination = {
  database?: string | undefined
  table?: string | undefined
  managedTable?: boolean | undefined
  tableDefinition?: ClickPipeDestinationTableDefinition | undefined
  columns?: ClickPipeDestinationColumn[] | undefined
}
type ClickPipeFieldMapping = {
  sourceField?: string | undefined
  destinationField?: string | undefined
}
type ClickPipeSettings = {
  streaming_max_insert_wait_ms?: (number | null) | undefined
  object_storage_concurrency?: (number | null) | undefined
  object_storage_polling_interval_ms?: (number | null) | undefined
  object_storage_max_insert_bytes?: (number | null) | undefined
  object_storage_max_file_count?: (number | null) | undefined
  object_storage_max_file_size?: number | undefined
  clickhouse_max_threads?: (number | null) | undefined
  clickhouse_max_insert_threads?: (number | null) | undefined
  clickhouse_min_insert_block_size_bytes?: (number | null) | undefined
  clickhouse_max_download_threads?: (number | null) | undefined
  clickhouse_parallel_distributed_insert_select?: (number | null) | undefined
  kafka_read_committed?: boolean | undefined
  object_storage_use_cluster_function?: (boolean | null) | undefined
  clickhouse_parallel_view_processing?: (boolean | null) | undefined
}
type ClickPipe = {
  id?: string | undefined
  serviceId?: string | undefined
  name?: string | undefined
  state?:
    | 'Unknown'
    | 'Provisioning'
    | 'Running'
    | 'Degraded'
    | 'Stopping'
    | 'Stopped'
    | 'Failed'
    | 'Completed'
    | 'InternalError'
    | 'Setup'
    | 'Snapshot'
    | 'Paused'
    | 'Pausing'
    | 'Modifying'
    | 'Resync'
    | undefined
  scaling?: ClickPipeScaling | undefined
  source?: ClickPipeSource | undefined
  destination?: ClickPipeDestination | undefined
  fieldMappings?: ClickPipeFieldMapping[] | undefined
  settings?: ClickPipeSettings | undefined
  createdAt?: string | undefined
  updatedAt?: string | undefined
}
type ClickPipeKafkaSchemaRegistryCredentials = { username: string; password: string }
type ClickPipeKafkaSchemaRegistryClientCredentials = { clientId: string; clientSecret: string }
type ClickPipeMutateKafkaConfluentSchemaRegistry = {
  type?: 'confluent' | undefined
  url: string
  authentication: string
  caCertificate?: (string | null) | undefined
  tokenUrl?: (string | null) | undefined
  scope?: (string | null) | undefined
  audience?: (string | null) | undefined
  credentials:
    | ClickPipeKafkaSchemaRegistryCredentials
    | ClickPipeKafkaSchemaRegistryClientCredentials
}
type ClickPipeMutateKafkaSchemaRegistry =
  | ClickPipeMutateKafkaConfluentSchemaRegistry
  | ClickPipeKafkaGlueSchemaRegistry
type PLAIN = { username?: string | undefined; password?: string | undefined }
type MskIamUser = { accessKeyId?: string | undefined; secretKey?: string | undefined }
type AzureEventHub = { connectionString?: string | undefined }
type MutualTLS = { certificate?: string | undefined; privateKey?: string | undefined }
type ClickPipePostKafkaSource = {
  type:
    | 'kafka'
    | 'redpanda'
    | 'msk'
    | 'gcmk'
    | 'confluent'
    | 'warpstream'
    | 'azureeventhub'
    | 'dokafka'
  format: 'JSONEachRow' | 'Avro' | 'AvroConfluent' | 'Protobuf'
  brokers: string
  topics: string
  consumerGroup?: (string | null) | undefined
  authentication:
    | 'PLAIN'
    | 'SCRAM-SHA-256'
    | 'SCRAM-SHA-512'
    | 'IAM_ROLE'
    | 'IAM_USER'
    | 'MUTUAL_TLS'
    | 'SERVICE_ACCOUNT_WORKLOAD_IDENTITY'
  iamRole?: (string | null) | undefined
  offset?: ClickPipeKafkaOffset | ({ [x: string]: unknown } | null) | undefined
  schemaRegistry?:
    | ClickPipeMutateKafkaSchemaRegistry
    | ({ [x: string]: unknown } | null)
    | undefined
  caCertificate?: (string | null) | undefined
  reversePrivateEndpointIds?: string[] | undefined
  exactlyOnce?: (boolean | null) | undefined
  tombstoneMode?: 'delete' | 'soft_delete' | undefined
  credentials?: PLAIN | MskIamUser | AzureEventHub | MutualTLS | undefined
  protobufSchema?: string | undefined
}
type ClickPipePostObjectStorageSource = {
  type?:
    | 's3'
    | 'gcs'
    | 'dospaces'
    | 'azureblobstorage'
    | 'cloudflarer2'
    | 'ovhobjectstorage'
    | undefined
  format?:
    | 'JSONEachRow'
    | 'JSONAsObject'
    | 'CSV'
    | 'CSVWithNames'
    | 'TabSeparated'
    | 'TabSeparatedWithNames'
    | 'Parquet'
    | 'Avro'
    | undefined
  url?: string | undefined
  delimiter?: (string | null) | undefined
  skipFirstLines?: number | undefined
  compression?:
    | 'none'
    | 'gzip'
    | 'gz'
    | 'brotli'
    | 'br'
    | 'xz'
    | 'LZMA'
    | 'zstd'
    | 'auto'
    | undefined
  isContinuous?: (boolean | null) | undefined
  queueUrl?: (string | null) | undefined
  skipInitialLoad?: (boolean | null) | undefined
  startAfter?: (string | null) | undefined
  authentication?:
    | 'IAM_ROLE'
    | 'IAM_USER'
    | 'CONNECTION_STRING'
    | 'SERVICE_ACCOUNT'
    | 'SERVICE_ACCOUNT_WORKLOAD_IDENTITY'
    | undefined
  iamRole?: (string | null) | undefined
  connectionString?: (string | null) | undefined
  path?: (string | null) | undefined
  azureContainerName?: (string | null) | undefined
  accessKey?: MskIamUser | ({ [x: string]: unknown } | null) | undefined
  serviceAccountKey?: (string | null) | undefined
}
type ClickPipePostKinesisSource = {
  format?: 'JSONEachRow' | 'Avro' | 'AvroConfluent' | 'Protobuf' | undefined
  streamName?: string | undefined
  region?: string | undefined
  useEnhancedFanOut?: (boolean | null) | undefined
  iteratorType?: 'TRIM_HORIZON' | 'LATEST' | 'AT_TIMESTAMP' | undefined
  timestamp?: (number | null) | undefined
  authentication?: 'IAM_ROLE' | 'IAM_USER' | undefined
  iamRole?: (string | null) | undefined
  schemaRegistry?: ClickPipeKinesisSchemaRegistry | ({ [x: string]: unknown } | null) | undefined
  accessKey?: MskIamUser | ({ [x: string]: unknown } | null) | undefined
  protobufSchema?: string | undefined
}
type ServiceAccount = { serviceAccountFile: string }
type ClickPipePostPubSubServiceAccountSource = {
  format: 'JSONEachRow' | 'Avro' | 'Protobuf'
  projectId: string
  topic: string
  authentication: 'SERVICE_ACCOUNT'
  seekType: 'latest' | 'earliest' | 'timestamp'
  seekTimestamp?: (string | null) | undefined
  filter?: (string | null) | undefined
  enableOrdering?: (boolean | null) | undefined
  ackDeadline?: (number | null) | undefined
  serviceAccountKey: ServiceAccount
}
type ClickPipePostPubSubWorkloadIdentitySource = {
  format: 'JSONEachRow' | 'Avro' | 'Protobuf'
  projectId: string
  topic: string
  authentication: 'SERVICE_ACCOUNT_WORKLOAD_IDENTITY'
  seekType: 'latest' | 'earliest' | 'timestamp'
  seekTimestamp?: (string | null) | undefined
  filter?: (string | null) | undefined
  enableOrdering?: (boolean | null) | undefined
  ackDeadline?: (number | null) | undefined
}
type ClickPipePostPubSubSource =
  | ClickPipePostPubSubServiceAccountSource
  | ClickPipePostPubSubWorkloadIdentitySource
type ClickPipeMutatePostgresSource = {
  type?:
    | 'postgres'
    | 'supabase'
    | 'neon'
    | 'alloydb'
    | 'planetscale'
    | 'rdspostgres'
    | 'aurorapostgres'
    | 'cloudsqlpostgres'
    | 'azurepostgres'
    | 'crunchybridge'
    | 'tigerdata'
    | undefined
  credentials?: PLAIN | undefined
  host?: string | undefined
  port?: number | undefined
  database?: string | undefined
  settings?: ClickPipePostgresPipeSettings | undefined
  authentication?: 'basic' | 'IAM_ROLE' | 'SERVICE_ACCOUNT_WORKLOAD_IDENTITY' | undefined
  iamRole?: string | undefined
  tlsHost?: string | undefined
  caCertificate?: string | undefined
  disableTls?: boolean | undefined
  skipCertVerification?: boolean | undefined
  tableMappings?: ClickPipePostgresPipeTableMapping[] | undefined
}
type ClickPipeMutateMySQLSource = {
  type?:
    | 'mysql'
    | 'rdsmysql'
    | 'auroramysql'
    | 'cloudsqlmysql'
    | 'mariadb'
    | 'rdsmariadb'
    | undefined
  credentials?: PLAIN | undefined
  host: string
  port: number
  settings: ClickPipeMySQLPipeSettings
  authentication?: 'basic' | 'IAM_ROLE' | 'SERVICE_ACCOUNT_WORKLOAD_IDENTITY' | undefined
  iamRole?: string | undefined
  tlsHost?: string | undefined
  caCertificate?: string | undefined
  disableTls?: boolean | undefined
  skipCertVerification?: boolean | undefined
  serverId?: number | undefined
  tableMappings: ClickPipeMySQLPipeTableMapping[]
}
type ClickPipePostBigQueryServiceAccountSource = {
  snapshotStagingPath: string
  settings: ClickPipeBigQueryPipeSettings
  tableMappings: ClickPipeBigQueryPipeTableMapping[]
  authentication?: 'SERVICE_ACCOUNT' | undefined
  projectId?: string | undefined
  credentials: ServiceAccount
}
type ClickPipePostBigQueryWorkloadIdentitySource = {
  snapshotStagingPath: string
  settings: ClickPipeBigQueryPipeSettings
  tableMappings: ClickPipeBigQueryPipeTableMapping[]
  authentication: 'SERVICE_ACCOUNT_WORKLOAD_IDENTITY'
  projectId: string
}
type ClickPipeMutateBigQuerySource =
  | ClickPipePostBigQueryServiceAccountSource
  | ClickPipePostBigQueryWorkloadIdentitySource
type ClickPipeMutateMongoDBSource = {
  credentials?: PLAIN | undefined
  uri: string
  readPreference: 'primary' | 'primaryPreferred' | 'secondary' | 'secondaryPreferred' | 'nearest'
  tlsHost?: string | undefined
  disableTls?: boolean | undefined
  skipCertVerification?: boolean | undefined
  caCertificate?: string | undefined
  settings: ClickPipeMongoDBPipeSettings
  tableMappings: ClickPipeMongoDBPipeTableMapping[]
}
type ClickPipePostSource = {
  kafka?: ClickPipePostKafkaSource | undefined
  objectStorage?: ClickPipePostObjectStorageSource | undefined
  kinesis?: ClickPipePostKinesisSource | undefined
  pubsub?: ClickPipePostPubSubSource | undefined
  postgres?: ClickPipeMutatePostgresSource | undefined
  mysql?: ClickPipeMutateMySQLSource | undefined
  bigquery?: ClickPipeMutateBigQuerySource | undefined
  mongodb?: ClickPipeMutateMongoDBSource | undefined
  validateSamples?: boolean | undefined
}
type ClickPipeMutateDestination = {
  database: string
  table?: string | undefined
  managedTable?: boolean | undefined
  tableDefinition?: ClickPipeDestinationTableDefinition | undefined
  columns?: ClickPipeDestinationColumn[] | undefined
  roles?: string[] | undefined
}
type ClickPipeSettingsPutRequest = {
  streaming_max_insert_wait_ms?: number | undefined
  object_storage_concurrency?: number | undefined
  object_storage_polling_interval_ms?: number | undefined
  object_storage_max_insert_bytes?: number | undefined
  object_storage_max_file_count?: number | undefined
  object_storage_max_file_size?: number | undefined
  clickhouse_max_threads?: number | undefined
  clickhouse_max_insert_threads?: number | undefined
  clickhouse_min_insert_block_size_bytes?: number | undefined
  clickhouse_max_download_threads?: number | undefined
  clickhouse_parallel_distributed_insert_select?: number | undefined
  kafka_read_committed?: boolean | undefined
  object_storage_use_cluster_function?: boolean | undefined
  clickhouse_parallel_view_processing?: boolean | undefined
}
type ClickPipePostRequest = {
  name: string
  source: ClickPipePostSource
  destination: ClickPipeMutateDestination
  fieldMappings?: ClickPipeFieldMapping[] | undefined
  scaling?: ClickPipeScaling | undefined
  settings?: ClickPipeSettingsPutRequest | undefined
  startPaused?: boolean | undefined
}
type ClickPipesGcpWorkloadIdentityContext = {
  supported?: boolean | undefined
  ready?: (boolean | null) | undefined
  principal?: (string | null) | undefined
}
type ClickPipesServiceContext = {
  gcpWorkloadIdentity?: ClickPipesGcpWorkloadIdentityContext | undefined
}
type ClickPipePatchKafkaSource = {
  authentication?:
    | 'PLAIN'
    | 'SCRAM-SHA-256'
    | 'SCRAM-SHA-512'
    | 'IAM_ROLE'
    | 'IAM_USER'
    | 'MUTUAL_TLS'
    | 'SERVICE_ACCOUNT_WORKLOAD_IDENTITY'
    | undefined
  iamRole?: (string | null) | undefined
  caCertificate?: (string | null) | undefined
  reversePrivateEndpointIds?: string[] | undefined
  credentials?: PLAIN | MskIamUser | AzureEventHub | MutualTLS | undefined
}
type ClickPipePatchObjectStorageSource = {
  skipInitialLoad?: (boolean | null) | undefined
  startAfter?: (string | null) | undefined
  authentication?:
    | 'IAM_ROLE'
    | 'IAM_USER'
    | 'CONNECTION_STRING'
    | 'SERVICE_ACCOUNT'
    | 'SERVICE_ACCOUNT_WORKLOAD_IDENTITY'
    | undefined
  iamRole?: (string | null) | undefined
  connectionString?: (string | null) | undefined
  path?: (string | null) | undefined
  azureContainerName?: (string | null) | undefined
  accessKey?: MskIamUser | ({ [x: string]: unknown } | null) | undefined
  serviceAccountKey?: (string | null) | undefined
}
type ClickPipePatchKinesisSource = {
  authentication?: 'IAM_ROLE' | 'IAM_USER' | undefined
  iamRole?: (string | null) | undefined
  accessKey?: MskIamUser | ({ [x: string]: unknown } | null) | undefined
}
type ClickPipePatchPubSubSource = {
  authentication: 'SERVICE_ACCOUNT' | 'SERVICE_ACCOUNT_WORKLOAD_IDENTITY'
  ackDeadline?: (number | null) | undefined
  serviceAccountKey?: ServiceAccount | ({ [x: string]: unknown } | null) | undefined
}
type ClickPipePatchPostgresPipeSettings = {
  syncIntervalSeconds?: (number | null) | undefined
  pullBatchSize?: (number | null) | undefined
}
type ClickPipePatchPostgresPipeRemoveTableMapping = {
  sourceSchemaName?: (string | null) | undefined
  sourceTable?: (string | null) | undefined
  targetTable?: (string | null) | undefined
  tableEngine?: 'MergeTree' | 'ReplacingMergeTree' | 'Null' | undefined
  partitionKey?: (string | null) | undefined
  partitionByExpr?: (string | null) | undefined
}
type ClickPipePatchPostgresSource = {
  credentials?: PLAIN | undefined
  host?: (string | null) | undefined
  port?: (number | null) | undefined
  database?: (string | null) | undefined
  tlsHost?: (string | null) | undefined
  caCertificate?: (string | null) | undefined
  disableTls?: (boolean | null) | undefined
  skipCertVerification?: (boolean | null) | undefined
  settings?: ClickPipePatchPostgresPipeSettings | undefined
  tableMappingsToAdd?: ClickPipePostgresPipeTableMapping[] | undefined
  tableMappingsToRemove?: ClickPipePatchPostgresPipeRemoveTableMapping[] | undefined
}
type ClickPipePatchMySQLPipeSettings = {
  syncIntervalSeconds?: (number | null) | undefined
  pullBatchSize?: (number | null) | undefined
  useCompression?: (boolean | null) | undefined
}
type ClickPipePatchMySQLPipeRemoveTableMapping = {
  sourceSchemaName: string | null
  sourceTable: string | null
  targetTable: string | null
  tableEngine?: 'MergeTree' | 'ReplacingMergeTree' | 'Null' | undefined
  partitionKey?: (string | null) | undefined
  partitionByExpr?: (string | null) | undefined
}
type ClickPipePatchMySQLSource = {
  credentials?: PLAIN | undefined
  host: string | null
  port: number | null
  authentication?: 'basic' | 'IAM_ROLE' | 'SERVICE_ACCOUNT_WORKLOAD_IDENTITY' | undefined
  iamRole?: (string | null) | undefined
  tlsHost?: (string | null) | undefined
  caCertificate?: (string | null) | undefined
  disableTls?: (boolean | null) | undefined
  skipCertVerification?: (boolean | null) | undefined
  serverId?: (number | null) | undefined
  settings?: ClickPipePatchMySQLPipeSettings | undefined
  tableMappingsToAdd?: ClickPipeMySQLPipeTableMapping[] | undefined
  tableMappingsToRemove?: ClickPipePatchMySQLPipeRemoveTableMapping[] | undefined
}
type ClickPipePatchMongoDBPipeSettings = {
  syncIntervalSeconds?: (number | null) | undefined
  pullBatchSize?: (number | null) | undefined
}
type ClickPipePatchMongoDBPipeRemoveTableMapping = {
  sourceDatabaseName: string | null
  sourceCollection: string | null
  targetTable: string | null
  tableEngine?: 'MergeTree' | 'ReplacingMergeTree' | 'Null' | undefined
}
type ClickPipePatchMongoDBSource = {
  credentials?: PLAIN | undefined
  uri: string | null
  readPreference: 'primary' | 'primaryPreferred' | 'secondary' | 'secondaryPreferred' | 'nearest'
  tlsHost?: (string | null) | undefined
  disableTls?: (boolean | null) | undefined
  skipCertVerification?: (boolean | null) | undefined
  caCertificate?: (string | null) | undefined
  settings?: ClickPipePatchMongoDBPipeSettings | undefined
  tableMappingsToAdd?: ClickPipeMongoDBPipeTableMapping[] | undefined
  tableMappingsToRemove?: ClickPipePatchMongoDBPipeRemoveTableMapping[] | undefined
}
type ClickPipePatchSource = {
  kafka?: ClickPipePatchKafkaSource | undefined
  objectStorage?: ClickPipePatchObjectStorageSource | undefined
  kinesis?: ClickPipePatchKinesisSource | undefined
  pubsub?: ClickPipePatchPubSubSource | undefined
  postgres?: ClickPipePatchPostgresSource | undefined
  mysql?: ClickPipePatchMySQLSource | undefined
  mongodb?: ClickPipePatchMongoDBSource | undefined
  validateSamples?: boolean | undefined
}
type ClickPipePatchDestination = { columns?: ClickPipeDestinationColumn[] | undefined }
type ClickPipePatchRequest = {
  name?: string | undefined
  source?: ClickPipePatchSource | undefined
  destination?: ClickPipePatchDestination | undefined
  fieldMappings?: ClickPipeFieldMapping[] | undefined
  settings?: ClickPipeSettingsPutRequest | undefined
}
type ClickPipeSchemaDiscoverySource = {
  kafka?: ClickPipePostKafkaSource | undefined
  kinesis?: ClickPipePostKinesisSource | undefined
  pubsub?: ClickPipePostPubSubSource | undefined
  objectStorage?: ClickPipePostObjectStorageSource | undefined
}
type ClickPipeSchemaDiscoveryRequest = { source: ClickPipeSchemaDiscoverySource }
type ClickPipeSchemaDiscoveryField = {
  name?: string | undefined
  type?: string | undefined
  optional?: (boolean | null) | undefined
  isVirtual?: (boolean | null) | undefined
  isVirtualDisabledDefault?: (boolean | null) | undefined
}
type ClickPipeSchemaDiscoveryMeta = { [x: string]: string }
type ClickPipeSchemaDiscoveryResponse = {
  fields?: ClickPipeSchemaDiscoveryField[] | undefined
  meta?: ClickPipeSchemaDiscoveryMeta | ({ [x: string]: unknown } | null) | undefined
}
type ClickPipeScalingPatchRequest = {
  replicas?: number | undefined
  concurrency?: number | undefined
  replicaCpuMillicores?: number | undefined
  replicaMemoryGb?: number | undefined
}
type ClickPipeStatePatchRequest = { command: 'start' | 'stop' | 'resync' }
type ClickPipesCdcScaling = {
  replicaCpuMillicores?: number | undefined
  replicaMemoryGb?: number | undefined
}
type ClickPipesCdcScalingPatchRequest = {
  replicaCpuMillicores?: number | undefined
  replicaMemoryGb?: number | undefined
}
type ClickStackNumberFormat = {
  output?:
    | 'currency'
    | 'percent'
    | 'byte'
    | 'time'
    | 'number'
    | 'data_rate'
    | 'throughput'
    | 'duration'
    | undefined
  mantissa?: number | undefined
  thousandSeparated?: boolean | undefined
  average?: boolean | undefined
  decimalBytes?: boolean | undefined
  factor?: number | undefined
  currencySymbol?: string | undefined
  numericUnit?:
    | 'bytes_iec'
    | 'bytes_si'
    | 'bits_iec'
    | 'bits_si'
    | 'kibibytes'
    | 'kilobytes'
    | 'mebibytes'
    | 'megabytes'
    | 'gibibytes'
    | 'gigabytes'
    | 'tebibytes'
    | 'terabytes'
    | 'pebibytes'
    | 'petabytes'
    | 'packets_sec'
    | 'bytes_sec_iec'
    | 'bytes_sec_si'
    | 'bits_sec_iec'
    | 'bits_sec_si'
    | 'kibibytes_sec'
    | 'kibibits_sec'
    | 'kilobytes_sec'
    | 'kilobits_sec'
    | 'mebibytes_sec'
    | 'mebibits_sec'
    | 'megabytes_sec'
    | 'megabits_sec'
    | 'gibibytes_sec'
    | 'gibibits_sec'
    | 'gigabytes_sec'
    | 'gigabits_sec'
    | 'tebibytes_sec'
    | 'tebibits_sec'
    | 'terabytes_sec'
    | 'terabits_sec'
    | 'pebibytes_sec'
    | 'pebibits_sec'
    | 'petabytes_sec'
    | 'petabits_sec'
    | 'cps'
    | 'ops'
    | 'rps'
    | 'reads_sec'
    | 'wps'
    | 'iops'
    | 'cpm'
    | 'opm'
    | 'rpm_reads'
    | 'wpm'
    | undefined
  unit?: string | undefined
}
type ClickStackSelectItem = {
  aggFn:
    | 'avg'
    | 'count'
    | 'count_distinct'
    | 'last_value'
    | 'max'
    | 'min'
    | 'quantile'
    | 'sum'
    | 'any'
    | 'none'
  valueExpression?: string | undefined
  alias?: string | undefined
  level?: number | undefined
  where?: string | undefined
  whereLanguage?: 'sql' | 'lucene' | undefined
  metricName?: string | undefined
  metricType?: 'sum' | 'gauge' | 'histogram' | 'summary' | 'exponential histogram' | undefined
  periodAggFn?: 'delta' | undefined
  numberFormat?: ClickStackNumberFormat | undefined
}
type ClickStackFormula = {
  expression: string
  alias?: string | undefined
  numberFormat?: ClickStackNumberFormat | undefined
}
type ClickStackLineBuilderChartConfig = {
  displayType: 'line'
  sourceId: string
  select: ClickStackSelectItem[]
  groupBy?: string | undefined
  asRatio?: boolean | undefined
  alignDateRangeToGranularity?: boolean | undefined
  fillNulls?: boolean | undefined
  fitYAxisToData?: boolean | undefined
  lineInterpolation?: 'smooth' | 'linear' | 'step' | undefined
  numberFormat?: ClickStackNumberFormat | undefined
  compareToPreviousPeriod?: boolean | undefined
  seriesLimit?: number | undefined
  formulas?: ClickStackFormula[] | undefined
  showOperandSeries?: boolean | undefined
}
type ClickStackLineRawSqlChartConfig = {
  configType: 'sql'
  connectionId: string
  sqlTemplate: string
  sourceId?: string | undefined
  numberFormat?: ClickStackNumberFormat | undefined
  displayType: 'line'
  compareToPreviousPeriod?: boolean | undefined
  fillNulls?: boolean | undefined
  alignDateRangeToGranularity?: boolean | undefined
  fitYAxisToData?: boolean | undefined
  lineInterpolation?: 'smooth' | 'linear' | 'step' | undefined
}
type ClickStackPromqlRangeExpression = { expression: string; alias?: string | undefined }
type ClickStackLinePromqlChartConfig = {
  configType: 'promql'
  sourceId: string
  granularity?: string | undefined
  numberFormat?: ClickStackNumberFormat | undefined
  expressions: ClickStackPromqlRangeExpression[]
  legendTemplate?: string | undefined
  fillNulls?: boolean | undefined
  alignDateRangeToGranularity?: boolean | undefined
  seriesLimit?: number | undefined
  displayType: 'line'
  compareToPreviousPeriod?: boolean | undefined
  lineInterpolation?: 'smooth' | 'linear' | 'step' | undefined
}
type ClickStackLineChartConfig =
  | ClickStackLineBuilderChartConfig
  | ClickStackLineRawSqlChartConfig
  | ClickStackLinePromqlChartConfig
type ClickStackBarBuilderChartConfig = {
  displayType: 'stacked_bar'
  sourceId: string
  select: ClickStackSelectItem[]
  groupBy?: string | undefined
  asRatio?: boolean | undefined
  alignDateRangeToGranularity?: boolean | undefined
  fillNulls?: boolean | undefined
  numberFormat?: ClickStackNumberFormat | undefined
  seriesLimit?: number | undefined
  formulas?: ClickStackFormula[] | undefined
  showOperandSeries?: boolean | undefined
}
type ClickStackBarRawSqlChartConfig = {
  configType: 'sql'
  connectionId: string
  sqlTemplate: string
  sourceId?: string | undefined
  numberFormat?: ClickStackNumberFormat | undefined
  displayType: 'stacked_bar'
  fillNulls?: boolean | undefined
  alignDateRangeToGranularity?: boolean | undefined
}
type ClickStackBarPromqlChartConfig = {
  configType: 'promql'
  sourceId: string
  granularity?: string | undefined
  numberFormat?: ClickStackNumberFormat | undefined
  expressions: ClickStackPromqlRangeExpression[]
  legendTemplate?: string | undefined
  fillNulls?: boolean | undefined
  alignDateRangeToGranularity?: boolean | undefined
  seriesLimit?: number | undefined
  displayType: 'stacked_bar'
}
type ClickStackBarChartConfig =
  | ClickStackBarBuilderChartConfig
  | ClickStackBarRawSqlChartConfig
  | ClickStackBarPromqlChartConfig
type ClickStackStackedLineBuilderChartConfig = {
  displayType: 'stacked_line'
  sourceId: string
  select: ClickStackSelectItem[]
  groupBy?: string | undefined
  asRatio?: boolean | undefined
  alignDateRangeToGranularity?: boolean | undefined
  fillNulls?: boolean | undefined
  lineInterpolation?: 'smooth' | 'linear' | 'step' | undefined
  numberFormat?: ClickStackNumberFormat | undefined
  seriesLimit?: number | undefined
  formulas?: ClickStackFormula[] | undefined
  showOperandSeries?: boolean | undefined
}
type ClickStackStackedLineRawSqlChartConfig = {
  configType: 'sql'
  connectionId: string
  sqlTemplate: string
  sourceId?: string | undefined
  numberFormat?: ClickStackNumberFormat | undefined
  displayType: 'stacked_line'
  fillNulls?: boolean | undefined
  alignDateRangeToGranularity?: boolean | undefined
  lineInterpolation?: 'smooth' | 'linear' | 'step' | undefined
}
type ClickStackStackedLinePromqlChartConfig = {
  configType: 'promql'
  sourceId: string
  granularity?: string | undefined
  numberFormat?: ClickStackNumberFormat | undefined
  expressions: ClickStackPromqlRangeExpression[]
  legendTemplate?: string | undefined
  fillNulls?: boolean | undefined
  alignDateRangeToGranularity?: boolean | undefined
  seriesLimit?: number | undefined
  displayType: 'stacked_line'
  lineInterpolation?: 'smooth' | 'linear' | 'step' | undefined
}
type ClickStackStackedLineChartConfig =
  | ClickStackStackedLineBuilderChartConfig
  | ClickStackStackedLineRawSqlChartConfig
  | ClickStackStackedLinePromqlChartConfig
type ClickStackOnClickTargetIdVariant = { mode: 'id'; id: string }
type ClickStackOnClickTargetTemplateVariant = { mode: 'template'; template: string }
type ClickStackOnClickTarget =
  | ClickStackOnClickTargetIdVariant
  | ClickStackOnClickTargetTemplateVariant
type ClickStackOnClickFilterTemplate = {
  kind: 'expressionTemplate'
  expression: string
  template: string
}
type ClickStackOnClickSearch = {
  type: 'search'
  target: ClickStackOnClickTarget
  whereTemplate?: string | undefined
  whereLanguage?: 'sql' | 'lucene' | undefined
  filters?: ClickStackOnClickFilterTemplate[] | undefined
}
type ClickStackOnClickDashboard = {
  type: 'dashboard'
  target: ClickStackOnClickTarget
  whereTemplate?: string | undefined
  whereLanguage?: 'sql' | 'lucene' | undefined
  filters?: ClickStackOnClickFilterTemplate[] | undefined
}
type ClickStackOnClickExternal = { type: 'external'; urlTemplate: string }
type ClickStackOnClick =
  | ClickStackOnClickSearch
  | ClickStackOnClickDashboard
  | ClickStackOnClickExternal
type ClickStackTableBuilderChartConfig = {
  displayType: 'table'
  sourceId: string
  select: ClickStackSelectItem[]
  groupBy?: string | undefined
  having?: string | undefined
  orderBy?: string | undefined
  asRatio?: boolean | undefined
  numberFormat?: ClickStackNumberFormat | undefined
  groupByColumnsOnLeft?: boolean | undefined
  onClick?: ClickStackOnClick | undefined
  formulas?: ClickStackFormula[] | undefined
  showOperandSeries?: boolean | undefined
}
type ClickStackTableRawSqlChartConfig = {
  configType: 'sql'
  connectionId: string
  sqlTemplate: string
  sourceId?: string | undefined
  numberFormat?: ClickStackNumberFormat | undefined
  displayType: 'table'
  onClick?: ClickStackOnClick | undefined
}
type ClickStackPromqlInstantExpression = {
  expression: string
  alias?: string | undefined
  queryType?: 'range' | 'instant' | undefined
}
type ClickStackTablePromqlChartConfig = {
  configType: 'promql'
  sourceId: string
  granularity?: string | undefined
  numberFormat?: ClickStackNumberFormat | undefined
  displayType: 'table'
  expressions: ClickStackPromqlInstantExpression[]
}
type ClickStackTableChartConfig =
  | ClickStackTableBuilderChartConfig
  | ClickStackTableRawSqlChartConfig
  | ClickStackTablePromqlChartConfig
type ClickStackNumericColorCondition = {
  operator: 'gt' | 'gte' | 'lt' | 'lte'
  value: number
  color:
    | 'chart-blue'
    | 'chart-orange'
    | 'chart-red'
    | 'chart-cyan'
    | 'chart-green'
    | 'chart-pink'
    | 'chart-purple'
    | 'chart-light-blue'
    | 'chart-brown'
    | 'chart-gray'
    | 'chart-success'
    | 'chart-warning'
    | 'chart-error'
  label?: string | undefined
}
type ClickStackBetweenColorCondition = {
  operator: 'between'
  value: number[]
  color:
    | 'chart-blue'
    | 'chart-orange'
    | 'chart-red'
    | 'chart-cyan'
    | 'chart-green'
    | 'chart-pink'
    | 'chart-purple'
    | 'chart-light-blue'
    | 'chart-brown'
    | 'chart-gray'
    | 'chart-success'
    | 'chart-warning'
    | 'chart-error'
  label?: string | undefined
}
type ClickStackEqualityColorCondition = {
  operator: 'eq' | 'neq'
  value: number | string
  color:
    | 'chart-blue'
    | 'chart-orange'
    | 'chart-red'
    | 'chart-cyan'
    | 'chart-green'
    | 'chart-pink'
    | 'chart-purple'
    | 'chart-light-blue'
    | 'chart-brown'
    | 'chart-gray'
    | 'chart-success'
    | 'chart-warning'
    | 'chart-error'
  label?: string | undefined
}
type ClickStackNumberTileColorCondition =
  | ClickStackNumericColorCondition
  | ClickStackBetweenColorCondition
  | ClickStackEqualityColorCondition
type ClickStackBackgroundChart = {
  type: 'line' | 'area'
  color?:
    | 'chart-blue'
    | 'chart-orange'
    | 'chart-red'
    | 'chart-cyan'
    | 'chart-green'
    | 'chart-pink'
    | 'chart-purple'
    | 'chart-light-blue'
    | 'chart-brown'
    | 'chart-gray'
    | 'chart-success'
    | 'chart-warning'
    | 'chart-error'
    | undefined
}
type ClickStackNumberBuilderChartConfig = {
  displayType: 'number'
  sourceId: string
  select: ClickStackSelectItem[]
  formulas?: ClickStackFormula[] | undefined
  numberFormat?: ClickStackNumberFormat | undefined
  color?:
    | 'chart-blue'
    | 'chart-orange'
    | 'chart-red'
    | 'chart-cyan'
    | 'chart-green'
    | 'chart-pink'
    | 'chart-purple'
    | 'chart-light-blue'
    | 'chart-brown'
    | 'chart-gray'
    | 'chart-success'
    | 'chart-warning'
    | 'chart-error'
    | undefined
  colorRules?: ClickStackNumberTileColorCondition[] | undefined
  backgroundChart?: ClickStackBackgroundChart | undefined
}
type ClickStackNumberRawSqlChartConfig = {
  configType: 'sql'
  connectionId: string
  sqlTemplate: string
  sourceId?: string | undefined
  numberFormat?: ClickStackNumberFormat | undefined
  displayType: 'number'
  color?:
    | 'chart-blue'
    | 'chart-orange'
    | 'chart-red'
    | 'chart-cyan'
    | 'chart-green'
    | 'chart-pink'
    | 'chart-purple'
    | 'chart-light-blue'
    | 'chart-brown'
    | 'chart-gray'
    | 'chart-success'
    | 'chart-warning'
    | 'chart-error'
    | undefined
  colorRules?: ClickStackNumberTileColorCondition[] | undefined
}
type ClickStackPromqlReducibleExpression = {
  expression: string
  alias?: string | undefined
  queryType?: 'range' | 'instant' | undefined
  reducer?: 'lastNotNull' | 'min' | 'max' | 'mean' | 'sum' | 'count' | undefined
}
type ClickStackNumberPromqlChartConfig = {
  configType: 'promql'
  sourceId: string
  granularity?: string | undefined
  numberFormat?: ClickStackNumberFormat | undefined
  displayType: 'number'
  expressions: ClickStackPromqlReducibleExpression[]
  color?:
    | 'chart-blue'
    | 'chart-orange'
    | 'chart-red'
    | 'chart-cyan'
    | 'chart-green'
    | 'chart-pink'
    | 'chart-purple'
    | 'chart-light-blue'
    | 'chart-brown'
    | 'chart-gray'
    | 'chart-success'
    | 'chart-warning'
    | 'chart-error'
    | undefined
  colorRules?: ClickStackNumberTileColorCondition[] | undefined
  backgroundChart?: ClickStackBackgroundChart | undefined
}
type ClickStackNumberChartConfig =
  | ClickStackNumberBuilderChartConfig
  | ClickStackNumberRawSqlChartConfig
  | ClickStackNumberPromqlChartConfig
type ClickStackPieBuilderChartConfig = {
  displayType: 'pie'
  sourceId: string
  select: ClickStackSelectItem[]
  groupBy?: string | undefined
  orderBy?: string | undefined
  numberFormat?: ClickStackNumberFormat | undefined
  limit?: number | undefined
}
type ClickStackPieRawSqlChartConfig = {
  configType: 'sql'
  connectionId: string
  sqlTemplate: string
  sourceId?: string | undefined
  numberFormat?: ClickStackNumberFormat | undefined
  displayType: 'pie'
}
type ClickStackPiePromqlChartConfig = {
  configType: 'promql'
  sourceId: string
  granularity?: string | undefined
  numberFormat?: ClickStackNumberFormat | undefined
  displayType: 'pie'
  expressions: ClickStackPromqlReducibleExpression[]
  legendTemplate?: string | undefined
  limit?: number | undefined
}
type ClickStackPieChartConfig =
  | ClickStackPieBuilderChartConfig
  | ClickStackPieRawSqlChartConfig
  | ClickStackPiePromqlChartConfig
type ClickStackCategoricalBarBuilderChartConfig = {
  displayType: 'bar'
  sourceId: string
  select: ClickStackSelectItem[]
  groupBy?: string | undefined
  orderBy?: string | undefined
  numberFormat?: ClickStackNumberFormat | undefined
  limit?: number | undefined
}
type ClickStackCategoricalBarRawSqlChartConfig = {
  configType: 'sql'
  connectionId: string
  sqlTemplate: string
  sourceId?: string | undefined
  numberFormat?: ClickStackNumberFormat | undefined
  displayType: 'bar'
}
type ClickStackCategoricalBarPromqlChartConfig = {
  configType: 'promql'
  sourceId: string
  granularity?: string | undefined
  numberFormat?: ClickStackNumberFormat | undefined
  displayType: 'bar'
  expressions: ClickStackPromqlReducibleExpression[]
  legendTemplate?: string | undefined
  limit?: number | undefined
}
type ClickStackCategoricalBarChartConfig =
  | ClickStackCategoricalBarBuilderChartConfig
  | ClickStackCategoricalBarRawSqlChartConfig
  | ClickStackCategoricalBarPromqlChartConfig
type ClickStackHeatmapSelectItem = {
  valueExpression: string
  countExpression?: string | undefined
  heatmapScaleType?: 'log' | 'linear' | undefined
}
type ClickStackHeatmapDistributionChartConfig = {
  displayType: 'heatmap'
  heatmapMode?: 'distribution' | undefined
  sourceId: string
  select: ClickStackHeatmapSelectItem[]
  where?: string | undefined
  whereLanguage?: 'sql' | 'lucene' | undefined
  numberFormat?: ClickStackNumberFormat | undefined
}
type ClickStackHeatmapSeriesChartConfig = {
  displayType: 'heatmap'
  heatmapMode: 'series'
  sourceId: string
  select: ClickStackSelectItem[]
  groupBy?: string | undefined
  numberFormat?: ClickStackNumberFormat | undefined
}
type ClickStackHeatmapPromqlChartConfig = {
  configType: 'promql'
  sourceId: string
  granularity?: string | undefined
  numberFormat?: ClickStackNumberFormat | undefined
  displayType: 'heatmap'
  expressions: ClickStackPromqlRangeExpression[]
  heatmapMode?: 'distribution' | 'series' | 'histogram' | undefined
  heatmapScaleType?: 'log' | 'linear' | undefined
  legendTemplate?: string | undefined
}
type ClickStackHeatmapChartConfig =
  | ClickStackHeatmapDistributionChartConfig
  | ClickStackHeatmapSeriesChartConfig
  | ClickStackHeatmapPromqlChartConfig
type ClickStackSearchChartConfig = {
  displayType: 'search'
  sourceId: string
  select: string
  where?: string | undefined
  whereLanguage: 'sql' | 'lucene'
}
type ClickStackEventPatternsChartConfig = {
  displayType: 'event_patterns'
  sourceId: string
  select?: string | undefined
  where?: string | undefined
  whereLanguage?: 'sql' | 'lucene' | undefined
}
type ClickStackMarkdownChartConfig = { displayType: 'markdown'; markdown?: string | undefined }
type ClickStackTileConfig =
  | ClickStackLineChartConfig
  | ClickStackBarChartConfig
  | ClickStackStackedLineChartConfig
  | ClickStackTableChartConfig
  | ClickStackNumberChartConfig
  | ClickStackPieChartConfig
  | ClickStackCategoricalBarChartConfig
  | ClickStackHeatmapChartConfig
  | ClickStackSearchChartConfig
  | ClickStackEventPatternsChartConfig
  | ClickStackMarkdownChartConfig
type ClickStackTileOutput = {
  name: string
  x: number
  y: number
  w: number
  h: number
  config?: ClickStackTileConfig | undefined
  containerId?: string | undefined
  tabId?: string | undefined
  description?: string | undefined
  id: string
}
type ClickStackQueryExpressionFilter = {
  type: 'QUERY_EXPRESSION'
  name: string
  expression: string
  sourceId: string
  sourceMetricType?: 'sum' | 'gauge' | 'histogram' | 'summary' | 'exponential histogram' | undefined
  where?: string | undefined
  whereLanguage?: 'sql' | 'lucene' | undefined
  appliesToSourceIds?: string[] | undefined
  isBroadcastEnabled?: boolean | undefined
  isVariableEnabled?: boolean | undefined
  variableName?: string | undefined
  minSelections?: 0 | 1 | undefined
  isGlobalRequirement?: boolean | undefined
  maxSelections?: 1 | undefined
  id: string
}
type ClickStackStaticListFilter = {
  type: 'STATIC_LIST'
  name: string
  options: string[]
  isBroadcastEnabled?: boolean | undefined
  isVariableEnabled?: boolean | undefined
  variableName?: string | undefined
  minSelections?: 0 | 1 | undefined
  isGlobalRequirement?: boolean | undefined
  maxSelections?: 1 | undefined
  id: string
}
type ClickStackPrometheusLabelFilter = {
  type: 'PROMETHEUS_LABEL'
  name: string
  sourceId: string
  label: string
  match?: string | undefined
  isBroadcastEnabled?: boolean | undefined
  isVariableEnabled?: boolean | undefined
  variableName?: string | undefined
  minSelections?: 0 | 1 | undefined
  isGlobalRequirement?: boolean | undefined
  maxSelections?: 1 | undefined
  id: string
}
type ClickStackSourceFilter = {
  type: 'SOURCE_FILTER'
  name: string
  sourceId: string
  expression: string
  appliesToSourceIds?: string[] | undefined
  isBroadcastEnabled?: boolean | undefined
  isVariableEnabled?: boolean | undefined
  variableName: string
  minSelections?: 0 | 1 | undefined
  isGlobalRequirement?: boolean | undefined
  maxSelections?: 1 | undefined
  id: string
}
type ClickStackDataSourceFilter = {
  type: 'DATA_SOURCE'
  name: string
  variableName?: string | undefined
  isGlobalRequirement?: boolean | undefined
  minSelections?: 1 | undefined
  maxSelections?: 1 | undefined
  isBroadcastEnabled?: boolean | undefined
  isVariableEnabled?: boolean | undefined
  allowedSourceKinds: string[]
  connectionId?: string | undefined
  id: string
}
type ClickStackConnectionFilter = {
  type: 'CONNECTION'
  name: string
  variableName?: string | undefined
  isGlobalRequirement?: boolean | undefined
  minSelections?: 1 | undefined
  maxSelections?: 1 | undefined
  isBroadcastEnabled?: boolean | undefined
  isVariableEnabled?: boolean | undefined
  id: string
}
type ClickStackSqlQueryFilter = {
  type: 'SQL_QUERY'
  name: string
  connectionId: string
  sourceId?: string | undefined
  sqlTemplate: string
  isBroadcastEnabled?: boolean | undefined
  isVariableEnabled?: boolean | undefined
  variableName?: string | undefined
  minSelections?: 0 | 1 | undefined
  isGlobalRequirement?: boolean | undefined
  maxSelections?: 1 | undefined
  id: string
}
type ClickStackAdhocFilter = {
  type: 'ADHOC'
  name: string
  sourceType: string
  sources: string[]
  where?: string | undefined
  whereLanguage?: string | undefined
  appliesToSourceIds?: string[] | undefined
  isBroadcastEnabled?: boolean | undefined
  isVariableEnabled?: boolean | undefined
  variableName?: string | undefined
  id: string
}
type ClickStackFilter =
  | ClickStackQueryExpressionFilter
  | ClickStackStaticListFilter
  | ClickStackPrometheusLabelFilter
  | ClickStackSourceFilter
  | ClickStackDataSourceFilter
  | ClickStackConnectionFilter
  | ClickStackSqlQueryFilter
  | ClickStackAdhocFilter
type ClickStackSqlSavedFilterValue = { type?: 'sql' | undefined; condition: string }
type ClickStackVariableSavedFilterValue = {
  type: 'variable'
  name: string
  values: string[]
  all?: boolean | undefined
}
type ClickStackAdhocFilterCondition = { key: string; operator: string; value: string }
type ClickStackAdhocSavedFilterValue = {
  type: 'adhoc'
  name: string
  conditions: ClickStackAdhocFilterCondition[]
}
type ClickStackSavedFilterValue =
  | ClickStackSqlSavedFilterValue
  | ClickStackVariableSavedFilterValue
  | ClickStackAdhocSavedFilterValue
type ClickStackDashboardContainerTab = { id: string; title: string }
type ClickStackDashboardContainer = {
  id: string
  title: string
  collapsed: boolean
  collapsible?: boolean | undefined
  bordered?: boolean | undefined
  tabs?: ClickStackDashboardContainerTab[] | undefined
}
type ClickStackDashboardResponse = {
  id?: string | undefined
  name?: string | undefined
  tiles?: ClickStackTileOutput[] | undefined
  tags?: string[] | undefined
  filters?: ClickStackFilter[] | undefined
  savedQuery?: (string | null) | undefined
  savedQueryLanguage?: 'sql' | 'lucene' | undefined
  savedFilterValues?: ClickStackSavedFilterValue[] | undefined
  containers?: ClickStackDashboardContainer[] | undefined
}
type ClickStackTimeChartSeries = {
  type: 'time'
  sourceId: string
  aggFn:
    | 'avg'
    | 'count'
    | 'count_distinct'
    | 'last_value'
    | 'max'
    | 'min'
    | 'quantile'
    | 'sum'
    | 'any'
    | 'none'
  level?: number | undefined
  field?: string | undefined
  alias?: string | undefined
  where: string
  whereLanguage: 'sql' | 'lucene'
  groupBy: string[]
  numberFormat?: ClickStackNumberFormat | undefined
  metricDataType?: 'sum' | 'gauge' | 'histogram' | 'summary' | 'exponential histogram' | undefined
  metricName?: string | undefined
  displayType?: 'stacked_bar' | 'stacked_line' | 'line' | undefined
}
type ClickStackTableChartSeries = {
  type: 'table'
  sourceId: string
  aggFn:
    | 'avg'
    | 'count'
    | 'count_distinct'
    | 'last_value'
    | 'max'
    | 'min'
    | 'quantile'
    | 'sum'
    | 'any'
    | 'none'
  level?: number | undefined
  field?: string | undefined
  alias?: string | undefined
  where: string
  whereLanguage: 'sql' | 'lucene'
  groupBy: string[]
  sortOrder?: 'desc' | 'asc' | undefined
  numberFormat?: ClickStackNumberFormat | undefined
  metricDataType?: 'sum' | 'gauge' | 'histogram' | 'summary' | 'exponential histogram' | undefined
  metricName?: string | undefined
}
type ClickStackNumberChartSeries = {
  type: 'number'
  sourceId: string
  aggFn:
    | 'avg'
    | 'count'
    | 'count_distinct'
    | 'last_value'
    | 'max'
    | 'min'
    | 'quantile'
    | 'sum'
    | 'any'
    | 'none'
  level?: number | undefined
  field?: string | undefined
  alias?: string | undefined
  where: string
  whereLanguage: 'sql' | 'lucene'
  numberFormat?: ClickStackNumberFormat | undefined
  metricDataType?: 'sum' | 'gauge' | 'histogram' | 'summary' | 'exponential histogram' | undefined
  metricName?: string | undefined
}
type ClickStackSearchChartSeries = {
  type: 'search'
  sourceId: string
  fields: string[]
  where: string
  whereLanguage: 'sql' | 'lucene'
}
type ClickStackMarkdownChartSeries = { type: 'markdown'; content: string }
type ClickStackDashboardChartSeries =
  | ClickStackTimeChartSeries
  | ClickStackTableChartSeries
  | ClickStackNumberChartSeries
  | ClickStackSearchChartSeries
  | ClickStackMarkdownChartSeries
type ClickStackTileInput = {
  name: string
  x: number
  y: number
  w: number
  h: number
  config?: ClickStackTileConfig | undefined
  containerId?: string | undefined
  tabId?: string | undefined
  description?: string | undefined
  id?: string | undefined
  asRatio?: boolean | undefined
  series?: ClickStackDashboardChartSeries[] | undefined
}
type ClickStackQueryExpressionFilterInput = {
  type: 'QUERY_EXPRESSION'
  name: string
  expression: string
  sourceId: string
  sourceMetricType?: 'sum' | 'gauge' | 'histogram' | 'summary' | 'exponential histogram' | undefined
  where?: string | undefined
  whereLanguage?: 'sql' | 'lucene' | undefined
  appliesToSourceIds?: string[] | undefined
  isBroadcastEnabled?: boolean | undefined
  isVariableEnabled?: boolean | undefined
  variableName?: string | undefined
  minSelections?: 0 | 1 | undefined
  isGlobalRequirement?: boolean | undefined
  maxSelections?: 1 | undefined
}
type ClickStackStaticListFilterInput = {
  type: 'STATIC_LIST'
  name: string
  options: string[]
  isBroadcastEnabled?: boolean | undefined
  isVariableEnabled?: boolean | undefined
  variableName?: string | undefined
  minSelections?: 0 | 1 | undefined
  isGlobalRequirement?: boolean | undefined
  maxSelections?: 1 | undefined
}
type ClickStackPrometheusLabelFilterInput = {
  type: 'PROMETHEUS_LABEL'
  name: string
  sourceId: string
  label: string
  match?: string | undefined
  isBroadcastEnabled?: boolean | undefined
  isVariableEnabled?: boolean | undefined
  variableName?: string | undefined
  minSelections?: 0 | 1 | undefined
  isGlobalRequirement?: boolean | undefined
  maxSelections?: 1 | undefined
}
type ClickStackSourceFilterInput = {
  type: 'SOURCE_FILTER'
  name: string
  sourceId: string
  expression: string
  appliesToSourceIds?: string[] | undefined
  isBroadcastEnabled?: boolean | undefined
  isVariableEnabled?: boolean | undefined
  variableName: string
  minSelections?: 0 | 1 | undefined
  isGlobalRequirement?: boolean | undefined
  maxSelections?: 1 | undefined
}
type ClickStackDataSourceFilterInput = {
  type: 'DATA_SOURCE'
  name: string
  variableName?: string | undefined
  isGlobalRequirement?: boolean | undefined
  minSelections?: 1 | undefined
  maxSelections?: 1 | undefined
  isBroadcastEnabled?: boolean | undefined
  isVariableEnabled?: boolean | undefined
  allowedSourceKinds: string[]
  connectionId?: string | undefined
}
type ClickStackConnectionFilterInput = {
  type: 'CONNECTION'
  name: string
  variableName?: string | undefined
  isGlobalRequirement?: boolean | undefined
  minSelections?: 1 | undefined
  maxSelections?: 1 | undefined
  isBroadcastEnabled?: boolean | undefined
  isVariableEnabled?: boolean | undefined
}
type ClickStackSqlQueryFilterInput = {
  type: 'SQL_QUERY'
  name: string
  connectionId: string
  sourceId?: string | undefined
  sqlTemplate: string
  isBroadcastEnabled?: boolean | undefined
  isVariableEnabled?: boolean | undefined
  variableName?: string | undefined
  minSelections?: 0 | 1 | undefined
  isGlobalRequirement?: boolean | undefined
  maxSelections?: 1 | undefined
}
type ClickStackAdhocFilterInput = {
  type: 'ADHOC'
  name: string
  sourceType: string
  sources: string[]
  where?: string | undefined
  whereLanguage?: string | undefined
  appliesToSourceIds?: string[] | undefined
  isBroadcastEnabled?: boolean | undefined
  isVariableEnabled?: boolean | undefined
  variableName?: string | undefined
}
type ClickStackFilterInput =
  | ClickStackQueryExpressionFilterInput
  | ClickStackStaticListFilterInput
  | ClickStackPrometheusLabelFilterInput
  | ClickStackSourceFilterInput
  | ClickStackDataSourceFilterInput
  | ClickStackConnectionFilterInput
  | ClickStackSqlQueryFilterInput
  | ClickStackAdhocFilterInput
type ClickStackCreateDashboardRequest = {
  name: string
  tiles: ClickStackTileInput[]
  tags?: string[] | undefined
  filters?: ClickStackFilterInput[] | undefined
  savedQuery?: (string | null) | undefined
  savedQueryLanguage?: 'sql' | 'lucene' | undefined
  savedFilterValues?: ClickStackSavedFilterValue[] | undefined
  containers?: ClickStackDashboardContainer[] | undefined
}
type ClickStackUpdateDashboardRequest = {
  name: string
  tiles: ClickStackTileInput[]
  tags?: string[] | undefined
  filters?: ClickStackFilter[] | undefined
  savedQuery?: (string | null) | undefined
  savedQueryLanguage?: 'sql' | 'lucene' | undefined
  savedFilterValues?: ClickStackSavedFilterValue[] | undefined
  containers?: ClickStackDashboardContainer[] | undefined
}
type ClickStackValidateDashboardError = { path: string; message: string }
type ClickStackValidateDashboardResponseNormalized = { [x: string]: unknown }
type ClickStackValidateDashboardResponse = {
  valid: boolean
  errors: ClickStackValidateDashboardError[]
  normalized: ClickStackValidateDashboardResponseNormalized | ({ [x: string]: unknown } | null)
}
type ClickStackAlertLineBuilderChartConfig = {
  displayType: 'line'
  sourceId: string
  select: ClickStackSelectItem[]
  groupBy?: string | undefined
  asRatio?: boolean | undefined
  alignDateRangeToGranularity?: boolean | undefined
  fillNulls?: boolean | undefined
  fitYAxisToData?: boolean | undefined
  lineInterpolation?: 'smooth' | 'linear' | 'step' | undefined
  numberFormat?: ClickStackNumberFormat | undefined
  compareToPreviousPeriod?: boolean | undefined
  seriesLimit?: number | undefined
  formulas?: ClickStackFormula[] | undefined
  showOperandSeries?: boolean | undefined
  name?: string | undefined
  where?: string | undefined
  whereLanguage?: 'sql' | 'lucene' | undefined
}
type ClickStackAlertLineRawSqlChartConfig = {
  configType: 'sql'
  connectionId: string
  sqlTemplate: string
  sourceId?: string | undefined
  numberFormat?: ClickStackNumberFormat | undefined
  displayType: 'line'
  compareToPreviousPeriod?: boolean | undefined
  fillNulls?: boolean | undefined
  alignDateRangeToGranularity?: boolean | undefined
  fitYAxisToData?: boolean | undefined
  lineInterpolation?: 'smooth' | 'linear' | 'step' | undefined
  name?: string | undefined
  where?: string | undefined
  whereLanguage?: 'sql' | 'lucene' | undefined
}
type ClickStackAlertLinePromqlChartConfig = {
  configType: 'promql'
  sourceId: string
  granularity?: string | undefined
  numberFormat?: ClickStackNumberFormat | undefined
  expressions: ClickStackPromqlRangeExpression[]
  legendTemplate?: string | undefined
  fillNulls?: boolean | undefined
  alignDateRangeToGranularity?: boolean | undefined
  seriesLimit?: number | undefined
  displayType: 'line'
  compareToPreviousPeriod?: boolean | undefined
  lineInterpolation?: 'smooth' | 'linear' | 'step' | undefined
  name?: string | undefined
  where?: string | undefined
  whereLanguage?: 'sql' | 'lucene' | undefined
}
type ClickStackAlertLineChartConfig =
  | ClickStackAlertLineBuilderChartConfig
  | ClickStackAlertLineRawSqlChartConfig
  | ClickStackAlertLinePromqlChartConfig
type ClickStackAlertBarBuilderChartConfig = {
  displayType: 'stacked_bar'
  sourceId: string
  select: ClickStackSelectItem[]
  groupBy?: string | undefined
  asRatio?: boolean | undefined
  alignDateRangeToGranularity?: boolean | undefined
  fillNulls?: boolean | undefined
  numberFormat?: ClickStackNumberFormat | undefined
  seriesLimit?: number | undefined
  formulas?: ClickStackFormula[] | undefined
  showOperandSeries?: boolean | undefined
  name?: string | undefined
  where?: string | undefined
  whereLanguage?: 'sql' | 'lucene' | undefined
}
type ClickStackAlertBarRawSqlChartConfig = {
  configType: 'sql'
  connectionId: string
  sqlTemplate: string
  sourceId?: string | undefined
  numberFormat?: ClickStackNumberFormat | undefined
  displayType: 'stacked_bar'
  fillNulls?: boolean | undefined
  alignDateRangeToGranularity?: boolean | undefined
  name?: string | undefined
  where?: string | undefined
  whereLanguage?: 'sql' | 'lucene' | undefined
}
type ClickStackAlertBarPromqlChartConfig = {
  configType: 'promql'
  sourceId: string
  granularity?: string | undefined
  numberFormat?: ClickStackNumberFormat | undefined
  expressions: ClickStackPromqlRangeExpression[]
  legendTemplate?: string | undefined
  fillNulls?: boolean | undefined
  alignDateRangeToGranularity?: boolean | undefined
  seriesLimit?: number | undefined
  displayType: 'stacked_bar'
  name?: string | undefined
  where?: string | undefined
  whereLanguage?: 'sql' | 'lucene' | undefined
}
type ClickStackAlertBarChartConfig =
  | ClickStackAlertBarBuilderChartConfig
  | ClickStackAlertBarRawSqlChartConfig
  | ClickStackAlertBarPromqlChartConfig
type ClickStackAlertStackedLineBuilderChartConfig = {
  displayType: 'stacked_line'
  sourceId: string
  select: ClickStackSelectItem[]
  groupBy?: string | undefined
  asRatio?: boolean | undefined
  alignDateRangeToGranularity?: boolean | undefined
  fillNulls?: boolean | undefined
  lineInterpolation?: 'smooth' | 'linear' | 'step' | undefined
  numberFormat?: ClickStackNumberFormat | undefined
  seriesLimit?: number | undefined
  formulas?: ClickStackFormula[] | undefined
  showOperandSeries?: boolean | undefined
  name?: string | undefined
  where?: string | undefined
  whereLanguage?: 'sql' | 'lucene' | undefined
}
type ClickStackAlertStackedLineRawSqlChartConfig = {
  configType: 'sql'
  connectionId: string
  sqlTemplate: string
  sourceId?: string | undefined
  numberFormat?: ClickStackNumberFormat | undefined
  displayType: 'stacked_line'
  fillNulls?: boolean | undefined
  alignDateRangeToGranularity?: boolean | undefined
  lineInterpolation?: 'smooth' | 'linear' | 'step' | undefined
  name?: string | undefined
  where?: string | undefined
  whereLanguage?: 'sql' | 'lucene' | undefined
}
type ClickStackAlertStackedLinePromqlChartConfig = {
  configType: 'promql'
  sourceId: string
  granularity?: string | undefined
  numberFormat?: ClickStackNumberFormat | undefined
  expressions: ClickStackPromqlRangeExpression[]
  legendTemplate?: string | undefined
  fillNulls?: boolean | undefined
  alignDateRangeToGranularity?: boolean | undefined
  seriesLimit?: number | undefined
  displayType: 'stacked_line'
  lineInterpolation?: 'smooth' | 'linear' | 'step' | undefined
  name?: string | undefined
  where?: string | undefined
  whereLanguage?: 'sql' | 'lucene' | undefined
}
type ClickStackAlertStackedLineChartConfig =
  | ClickStackAlertStackedLineBuilderChartConfig
  | ClickStackAlertStackedLineRawSqlChartConfig
  | ClickStackAlertStackedLinePromqlChartConfig
type ClickStackAlertNumberBuilderChartConfig = {
  displayType: 'number'
  sourceId: string
  select: ClickStackSelectItem[]
  formulas?: ClickStackFormula[] | undefined
  numberFormat?: ClickStackNumberFormat | undefined
  color?:
    | 'chart-blue'
    | 'chart-orange'
    | 'chart-red'
    | 'chart-cyan'
    | 'chart-green'
    | 'chart-pink'
    | 'chart-purple'
    | 'chart-light-blue'
    | 'chart-brown'
    | 'chart-gray'
    | 'chart-success'
    | 'chart-warning'
    | 'chart-error'
    | undefined
  colorRules?: ClickStackNumberTileColorCondition[] | undefined
  backgroundChart?: ClickStackBackgroundChart | undefined
  name?: string | undefined
  where?: string | undefined
  whereLanguage?: 'sql' | 'lucene' | undefined
}
type ClickStackAlertNumberRawSqlChartConfig = {
  configType: 'sql'
  connectionId: string
  sqlTemplate: string
  sourceId?: string | undefined
  numberFormat?: ClickStackNumberFormat | undefined
  displayType: 'number'
  color?:
    | 'chart-blue'
    | 'chart-orange'
    | 'chart-red'
    | 'chart-cyan'
    | 'chart-green'
    | 'chart-pink'
    | 'chart-purple'
    | 'chart-light-blue'
    | 'chart-brown'
    | 'chart-gray'
    | 'chart-success'
    | 'chart-warning'
    | 'chart-error'
    | undefined
  colorRules?: ClickStackNumberTileColorCondition[] | undefined
  name?: string | undefined
  where?: string | undefined
  whereLanguage?: 'sql' | 'lucene' | undefined
}
type ClickStackAlertNumberPromqlChartConfig = {
  configType: 'promql'
  sourceId: string
  granularity?: string | undefined
  numberFormat?: ClickStackNumberFormat | undefined
  displayType: 'number'
  expressions: ClickStackPromqlReducibleExpression[]
  color?:
    | 'chart-blue'
    | 'chart-orange'
    | 'chart-red'
    | 'chart-cyan'
    | 'chart-green'
    | 'chart-pink'
    | 'chart-purple'
    | 'chart-light-blue'
    | 'chart-brown'
    | 'chart-gray'
    | 'chart-success'
    | 'chart-warning'
    | 'chart-error'
    | undefined
  colorRules?: ClickStackNumberTileColorCondition[] | undefined
  backgroundChart?: ClickStackBackgroundChart | undefined
  name?: string | undefined
  where?: string | undefined
  whereLanguage?: 'sql' | 'lucene' | undefined
}
type ClickStackAlertNumberChartConfig =
  | ClickStackAlertNumberBuilderChartConfig
  | ClickStackAlertNumberRawSqlChartConfig
  | ClickStackAlertNumberPromqlChartConfig
type ClickStackAlertChartConfig =
  | ClickStackAlertLineChartConfig
  | ClickStackAlertBarChartConfig
  | ClickStackAlertStackedLineChartConfig
  | ClickStackAlertNumberChartConfig
type ClickStackAlertChannelEmail = { type: 'webhook' | 'email'; emailRecipients: string[] }
type ClickStackAlertChannelWebhook = {
  type: 'webhook' | 'email'
  webhookId: string
  webhookService?: (string | null) | undefined
  slackChannelId?: (string | null) | undefined
  severity?: 'critical' | 'error' | 'warning' | 'info' | undefined
}
type ClickStackAlertChannel = ClickStackAlertChannelEmail | ClickStackAlertChannelWebhook
type ClickStackAlertChannels = ClickStackAlertChannel[]
type ClickStackAlertSilenced = {
  by?: (string | null) | undefined
  at?: string | undefined
  until?: string | undefined
}
type ClickStackAlertExecutionError = {
  timestamp: string
  type: 'QUERY_ERROR' | 'QUERY_TIMEOUT' | 'WEBHOOK_ERROR' | 'INVALID_ALERT' | 'UNKNOWN'
  message: string
}
type ClickStackAlertResponse = {
  dashboardId?: (string | null) | undefined
  tileId?: (string | null) | undefined
  savedSearchId?: (string | null) | undefined
  groupBy?: (string | null) | undefined
  chartConfig?: ClickStackAlertChartConfig | undefined
  threshold?: number | undefined
  thresholdMax?: (number | null) | undefined
  interval?: '30s' | '1m' | '5m' | '15m' | '30m' | '1h' | '6h' | '12h' | '1d' | undefined
  scheduleOffsetMinutes?: (number | null) | undefined
  scheduleStartAt?: (string | null) | undefined
  source?: 'saved_search' | 'tile' | 'inline' | undefined
  thresholdType?:
    | 'above'
    | 'below'
    | 'above_exclusive'
    | 'below_or_equal'
    | 'equal'
    | 'not_equal'
    | 'between'
    | 'not_between'
    | undefined
  channel?: ClickStackAlertChannel | undefined
  channels?: ClickStackAlertChannels | undefined
  name?: (string | null) | undefined
  message?: (string | null) | undefined
  note?: (string | null) | undefined
  numConsecutiveWindows?: (number | null) | undefined
  displayName: string
  tags: string[]
  id?: string | undefined
  state?: 'ALERT' | 'OK' | 'INSUFFICIENT_DATA' | 'DISABLED' | 'PENDING' | undefined
  teamId?: string | undefined
  silenced?: ClickStackAlertSilenced | ({ [x: string]: unknown } | null) | undefined
  executionErrors?: ClickStackAlertExecutionError[] | undefined
  createdAt?: (string | null) | undefined
  updatedAt?: (string | null) | undefined
}
type ClickStackCreateAlertRequest = {
  dashboardId?: (string | null) | undefined
  tileId?: (string | null) | undefined
  savedSearchId?: (string | null) | undefined
  groupBy?: (string | null) | undefined
  chartConfig?: ClickStackAlertChartConfig | undefined
  threshold: number
  thresholdMax?: (number | null) | undefined
  interval: '30s' | '1m' | '5m' | '15m' | '30m' | '1h' | '6h' | '12h' | '1d'
  scheduleOffsetMinutes?: (number | null) | undefined
  scheduleStartAt?: (string | null) | undefined
  source?: 'saved_search' | 'tile' | 'inline' | undefined
  thresholdType:
    | 'above'
    | 'below'
    | 'above_exclusive'
    | 'below_or_equal'
    | 'equal'
    | 'not_equal'
    | 'between'
    | 'not_between'
  channel?: ClickStackAlertChannel | undefined
  channels?: ClickStackAlertChannels | undefined
  name?: (string | null) | undefined
  displayName?: (string | null) | undefined
  tags?: string[] | undefined
  message?: (string | null) | undefined
  note?: (string | null) | undefined
  numConsecutiveWindows?: (number | null) | undefined
}
type ClickStackSourceFrom = { databaseName: string; tableName: string }
type ClickStackQuerySetting = { setting: string; value: string }
type ClickStackFilterSettingsColumn = {
  name: string
  label: string
  valueExpression?: (string | null) | undefined
  allowAll?: boolean | undefined
}
type ClickStackSourceFilterSettings = {
  databaseName: string
  tableName: string
  columns: ClickStackFilterSettingsColumn[]
}
type ClickStackHighlightedAttributeExpression = {
  sqlExpression: string
  luceneExpression?: (string | null) | undefined
  alias?: (string | null) | undefined
}
type ClickStackAggregatedColumn = {
  sourceColumn?: (string | null) | undefined
  aggFn: string
  mvColumn: string
}
type ClickStackMaterializedView = {
  databaseName: string
  tableName: string
  dimensionColumns: string
  minGranularity: string
  minDate?: (string | null) | undefined
  timestampColumn: string
  aggregatedColumns: ClickStackAggregatedColumn[]
}
type ClickStackLogSourceMetadataMaterializedViews = {
  keyRollupTable?: string | undefined
  kvRollupTable?: string | undefined
  granularity?: string | undefined
}
type ClickStackLogSource = {
  id?: string | undefined
  name: string
  section?: string | undefined
  disabled?: (boolean | null) | undefined
  kind: 'log'
  connection: string
  from: ClickStackSourceFrom
  querySettings?: ClickStackQuerySetting[] | undefined
  filterSettings?: ClickStackSourceFilterSettings | ({ [x: string]: unknown } | null) | undefined
  defaultTableSelectExpression: string
  timestampValueExpression: string
  serviceNameExpression?: (string | null) | undefined
  serviceVersionExpression?: (string | null) | undefined
  severityTextExpression?: (string | null) | undefined
  severityNumberExpression?: (string | null) | undefined
  bodyExpression?: (string | null) | undefined
  eventNameExpression?: (string | null) | undefined
  eventAttributesExpression?: (string | null) | undefined
  resourceAttributesExpression?: (string | null) | undefined
  displayedTimestampValueExpression?: (string | null) | undefined
  orderByExpression?: string | undefined
  metricSourceId?: (string | null) | undefined
  traceSourceId?: (string | null) | undefined
  traceIdExpression?: (string | null) | undefined
  spanIdExpression?: (string | null) | undefined
  implicitColumnExpression?: (string | null) | undefined
  knownColumnsListExpression?: (string | null) | undefined
  rowKeyExpression?: (string | null) | undefined
  useTextIndexForImplicitColumn?: 'auto' | 'enabled' | 'disabled' | undefined
  mapKeyIndexMaxParts?: (number | null) | undefined
  mapKeyIndexPartSelection?: (string | null) | undefined
  highlightedTraceAttributeExpressions?: ClickStackHighlightedAttributeExpression[] | undefined
  highlightedRowAttributeExpressions?: ClickStackHighlightedAttributeExpression[] | undefined
  materializedViews?: ClickStackMaterializedView[] | undefined
  metadataMaterializedViews?:
    | ClickStackLogSourceMetadataMaterializedViews
    | ({ [x: string]: unknown } | null)
    | undefined
}
type ClickStackTraceSourceMetadataMaterializedViews = {
  keyRollupTable?: string | undefined
  kvRollupTable?: string | undefined
  granularity?: string | undefined
}
type ClickStackTraceSource = {
  id?: string | undefined
  name: string
  section?: string | undefined
  disabled?: (boolean | null) | undefined
  kind: 'trace'
  connection: string
  from: ClickStackSourceFrom
  querySettings?: ClickStackQuerySetting[] | undefined
  filterSettings?: ClickStackSourceFilterSettings | ({ [x: string]: unknown } | null) | undefined
  defaultTableSelectExpression: string
  timestampValueExpression: string
  durationExpression: string
  durationPrecision: number
  traceIdExpression: string
  spanIdExpression: string
  parentSpanIdExpression: string
  spanNameExpression: string
  spanKindExpression: string
  logSourceId?: (string | null) | undefined
  sessionSourceId?: (string | null) | undefined
  metricSourceId?: (string | null) | undefined
  statusCodeExpression?: (string | null) | undefined
  statusMessageExpression?: (string | null) | undefined
  serviceNameExpression?: (string | null) | undefined
  serviceVersionExpression?: (string | null) | undefined
  sampleRateExpression?: string | undefined
  resourceAttributesExpression?: (string | null) | undefined
  eventAttributesExpression?: (string | null) | undefined
  spanEventsValueExpression?: (string | null) | undefined
  spanLinksValueExpression?: string | undefined
  implicitColumnExpression?: (string | null) | undefined
  knownColumnsListExpression?: (string | null) | undefined
  rowKeyExpression?: (string | null) | undefined
  useTextIndexForImplicitColumn?: 'auto' | 'enabled' | 'disabled' | undefined
  mapKeyIndexMaxParts?: (number | null) | undefined
  mapKeyIndexPartSelection?: (string | null) | undefined
  highlightedTraceAttributeExpressions?: ClickStackHighlightedAttributeExpression[] | undefined
  highlightedRowAttributeExpressions?: ClickStackHighlightedAttributeExpression[] | undefined
  displayedTimestampValueExpression?: string | undefined
  orderByExpression?: string | undefined
  materializedViews?: ClickStackMaterializedView[] | undefined
  metadataMaterializedViews?:
    | ClickStackTraceSourceMetadataMaterializedViews
    | ({ [x: string]: unknown } | null)
    | undefined
}
type ClickStackMetricSourceFrom = { databaseName: string; tableName?: (string | null) | undefined }
type ClickStackMetricTables = {
  gauge?: string | undefined
  histogram?: string | undefined
  sum?: string | undefined
  summary?: string | undefined
  'exponential histogram'?: string | undefined
}
type ClickStackMetricSource = {
  id?: string | undefined
  name: string
  section?: string | undefined
  disabled?: (boolean | null) | undefined
  kind: 'metric'
  connection: string
  from: ClickStackMetricSourceFrom
  querySettings?: ClickStackQuerySetting[] | undefined
  metricTables: ClickStackMetricTables
  timestampValueExpression: string
  resourceAttributesExpression: string
  logSourceId?: (string | null) | undefined
  minAutoGranularity?: string | undefined
}
type ClickStackSessionSource = {
  id?: string | undefined
  name: string
  section?: string | undefined
  disabled?: (boolean | null) | undefined
  kind: 'session'
  connection: string
  from: ClickStackSourceFrom
  querySettings?: ClickStackQuerySetting[] | undefined
  timestampValueExpression?: (string | null) | undefined
  traceSourceId: string
  resourceAttributesExpression?: string | undefined
}
type ClickStackPromqlSource = {
  id?: string | undefined
  name: string
  section?: string | undefined
  disabled?: (boolean | null) | undefined
  kind: 'promql'
  connection: string
  from: ClickStackSourceFrom
  querySettings?: ClickStackQuerySetting[] | undefined
  timestampValueExpression: string
  minAutoGranularity?: string | undefined
  promqlBackend?: 'auto' | 'clickhouse-http' | 'table-function' | undefined
}
type ClickStackSource =
  | ClickStackLogSource
  | ClickStackTraceSource
  | ClickStackMetricSource
  | ClickStackSessionSource
  | ClickStackPromqlSource
type ClickStackUpdateAlertRequest = {
  dashboardId?: (string | null) | undefined
  tileId?: (string | null) | undefined
  savedSearchId?: (string | null) | undefined
  groupBy?: (string | null) | undefined
  chartConfig?: ClickStackAlertChartConfig | undefined
  threshold: number
  thresholdMax?: (number | null) | undefined
  interval: '30s' | '1m' | '5m' | '15m' | '30m' | '1h' | '6h' | '12h' | '1d'
  scheduleOffsetMinutes?: (number | null) | undefined
  scheduleStartAt?: (string | null) | undefined
  source?: 'saved_search' | 'tile' | 'inline' | undefined
  thresholdType:
    | 'above'
    | 'below'
    | 'above_exclusive'
    | 'below_or_equal'
    | 'equal'
    | 'not_equal'
    | 'between'
    | 'not_between'
  channel?: ClickStackAlertChannel | undefined
  channels?: ClickStackAlertChannels | undefined
  name?: (string | null) | undefined
  displayName?: (string | null) | undefined
  tags?: string[] | undefined
  message?: (string | null) | undefined
  note?: (string | null) | undefined
  numConsecutiveWindows?: (number | null) | undefined
}
type ClickStackSilenceAlertRequest = { mutedUntil: string }
type ClickStackSlackWebhook = {
  id: string
  name: string
  service: 'slack'
  url?: string | undefined
  description?: string | undefined
  updatedAt: string
  createdAt: string
}
type ClickStackIncidentIOWebhook = {
  id: string
  name: string
  service: 'incidentio'
  url?: string | undefined
  description?: string | undefined
  updatedAt: string
  createdAt: string
}
type ClickStackGenericWebhook = {
  id: string
  name: string
  service: 'generic'
  url?: string | undefined
  description?: string | undefined
  body?: string | undefined
  updatedAt: string
  createdAt: string
}
type ClickStackSlackAPIWebhook = {
  id: string
  name: string
  service: 'slack_api'
  url?: string | undefined
  description?: string | undefined
  updatedAt: string
  createdAt: string
}
type ClickStackPagerDutyAPIWebhook = {
  id: string
  name: string
  service: 'pagerduty_api'
  url?: string | undefined
  description?: string | undefined
  updatedAt: string
  createdAt: string
}
type ClickStackWebhook =
  | ClickStackSlackWebhook
  | ClickStackIncidentIOWebhook
  | ClickStackGenericWebhook
  | ClickStackSlackAPIWebhook
  | ClickStackPagerDutyAPIWebhook
type ClickStackWebhookInputHeaders = { [x: string]: string }
type ClickStackWebhookInputQueryParams = { [x: string]: string }
type ClickStackWebhookInput = {
  name: string
  service: 'slack' | 'incidentio' | 'generic'
  url: string
  description?: string | undefined
  body?: string | undefined
  headers?: ClickStackWebhookInputHeaders | undefined
  queryParams?: ClickStackWebhookInputQueryParams | undefined
}
type ClickStackValidateWebhookResponseErrorsItem = { path: string; message: string }
type ClickStackValidateWebhookResponseNormalized = { [x: string]: unknown }
type ClickStackValidateWebhookResponse = {
  valid: boolean
  errors: ClickStackValidateWebhookResponseErrorsItem[]
  normalized: ClickStackValidateWebhookResponseNormalized | ({ [x: string]: unknown } | null)
}
type ClickStackMongoDBCASLPermissionConditions = {
  [x: string]: string | { $regex: string; $options?: string | undefined }
}
type ClickStackMongoDBCASLPermission = {
  action: 'create' | 'read' | 'update' | 'delete' | 'manage'
  subject:
    | 'Alert'
    | 'Connection'
    | 'Dashboard'
    | 'SavedSearch'
    | 'Source'
    | 'Team'
    | 'User'
    | 'Webhook'
    | 'Role'
    | 'Notebook'
    | 'SchemaMigration'
    | 'App'
    | 'all'
  fields?: string[] | undefined
  inverted?: boolean | undefined
  integration: 'mongodb'
  conditions?: ClickStackMongoDBCASLPermissionConditions | undefined
}
type ClickStackClickHouseCASLPermissionConditionsFrom = { databaseName: string; tableName: string }
type ClickStackClickHouseCASLPermissionConditions = {
  connection: string
  from: ClickStackClickHouseCASLPermissionConditionsFrom
  where: string
  whereLanguage: 'sql' | 'lucene'
}
type ClickStackClickHouseCASLPermission = {
  action: 'create' | 'read' | 'update' | 'delete' | 'manage'
  subject:
    | 'Alert'
    | 'Connection'
    | 'Dashboard'
    | 'SavedSearch'
    | 'Source'
    | 'Team'
    | 'User'
    | 'Webhook'
    | 'Role'
    | 'Notebook'
    | 'SchemaMigration'
    | 'App'
    | 'all'
  fields?: string[] | undefined
  inverted?: boolean | undefined
  integration: 'clickhouse'
  conditions?: ClickStackClickHouseCASLPermissionConditions | undefined
}
type ClickStackCASLPermission = ClickStackMongoDBCASLPermission | ClickStackClickHouseCASLPermission
type ClickStackRole = {
  id: string
  name: string
  description?: string | undefined
  permissions: ClickStackCASLPermission[]
  isPredefined: boolean
  createdAt?: string | undefined
  updatedAt?: string | undefined
}
type ClickStackCreateRoleRequest = {
  name: string
  description?: string | undefined
  permissions: ClickStackCASLPermission[]
}
type ClickStackUpdateRoleRequest = {
  name?: string | undefined
  description?: string | undefined
  permissions: ClickStackCASLPermission[]
}
type ClickStackSavedSearchFilter = { type?: 'sql' | undefined; condition: string }
type ClickStackSavedSearch = {
  id: string
  name: string
  sourceId: string
  select?: string | undefined
  where?: string | undefined
  whereLanguage?: 'lucene' | 'sql' | undefined
  orderBy?: string | undefined
  tags?: string[] | undefined
  filters?: ClickStackSavedSearchFilter[] | undefined
  teamId?: string | undefined
  createdAt?: string | undefined
  updatedAt?: string | undefined
}
type ClickStackSavedSearchInput = {
  name: string
  sourceId: string
  select?: string | undefined
  where?: string | undefined
  whereLanguage?: 'lucene' | 'sql' | undefined
  orderBy?: string | undefined
  tags?: string[] | undefined
  filters?: ClickStackSavedSearchFilter[] | undefined
}
type PgNameProperty = string
type PgProvider = 'aws' | 'gcp'
type PgRegion = string
type PgVersion = '19' | '18' | '17'
type PgSize =
  | 'c6gd.large'
  | 'c6gd.xlarge'
  | 'c6gd.2xlarge'
  | 'c6gd.4xlarge'
  | 'c6gd.8xlarge'
  | 'c6gd.16xlarge'
  | 'i7i.large'
  | 'i7i.xlarge'
  | 'i7i.2xlarge'
  | 'i7i.4xlarge'
  | 'i7i.8xlarge'
  | 'i7i.12xlarge'
  | 'i7i.16xlarge'
  | 'i7i.24xlarge'
  | 'i7ie.large'
  | 'i7ie.xlarge'
  | 'i7ie.2xlarge'
  | 'i7ie.3xlarge'
  | 'i7ie.6xlarge'
  | 'i7ie.12xlarge'
  | 'i7ie.18xlarge'
  | 'i7ie.24xlarge'
  | 'i8g.large'
  | 'i8g.xlarge'
  | 'i8g.2xlarge'
  | 'i8g.4xlarge'
  | 'i8g.8xlarge'
  | 'i8g.16xlarge'
  | 'i8g.24xlarge'
  | 'i8ge.large'
  | 'i8ge.xlarge'
  | 'i8ge.2xlarge'
  | 'i8ge.3xlarge'
  | 'i8ge.6xlarge'
  | 'i8ge.12xlarge'
  | 'i8ge.18xlarge'
  | 'i8ge.24xlarge'
  | 'm6gd.large'
  | 'm6gd.xlarge'
  | 'm6gd.2xlarge'
  | 'm6gd.4xlarge'
  | 'm6gd.8xlarge'
  | 'm6gd.16xlarge'
  | 'm6id.large'
  | 'm6id.xlarge'
  | 'm6id.2xlarge'
  | 'm6id.4xlarge'
  | 'm6id.8xlarge'
  | 'm6id.16xlarge'
  | 'm8gd.large'
  | 'm8gd.xlarge'
  | 'm8gd.2xlarge'
  | 'm8gd.4xlarge'
  | 'm8gd.8xlarge'
  | 'm8gd.16xlarge'
  | 'r6gd.medium'
  | 'r6gd.large'
  | 'r6gd.xlarge'
  | 'r6gd.2xlarge'
  | 'r6gd.4xlarge'
  | 'r6gd.8xlarge'
  | 'r6gd.12xlarge'
  | 'r6gd.16xlarge'
  | 'r6id.large'
  | 'r6id.xlarge'
  | 'r6id.2xlarge'
  | 'r6id.4xlarge'
  | 'r6id.8xlarge'
  | 'r6id.12xlarge'
  | 'r6id.16xlarge'
  | 'r6id.24xlarge'
  | 'r6id.32xlarge'
  | 'r8gd.medium'
  | 'r8gd.large'
  | 'r8gd.xlarge'
  | 'r8gd.2xlarge'
  | 'r8gd.4xlarge'
  | 'r8gd.8xlarge'
  | 'r8gd.12xlarge'
  | 'r8gd.16xlarge'
  | 'r8gd.24xlarge'
  | 'r8gd.48xlarge'
  | 'c4a-highmem-lssd-4'
  | 'c4a-highmem-lssd-8'
  | 'c4a-highmem-lssd-16'
  | 'c4a-highmem-lssd-32'
  | 'c4a-highmem-lssd-48'
  | 'c4a-highmem-lssd-64'
  | 'c4a-highmem-lssd-72'
  | 'c4a-standard-lssd-4'
  | 'c4a-standard-lssd-8'
  | 'c4a-standard-lssd-16'
  | 'c4a-standard-lssd-32'
  | 'c4a-standard-lssd-48'
  | 'c4a-standard-lssd-64'
  | 'c4a-standard-lssd-72'
  | 'c4-highmem-lssd-4'
  | 'c4-highmem-lssd-8'
  | 'c4-highmem-lssd-16'
  | 'c4-highmem-lssd-24'
  | 'c4-highmem-lssd-32'
  | 'c4-highmem-lssd-48'
  | 'c4-highmem-lssd-96'
  | 'c4-highmem-lssd-144'
  | 'c4-highmem-lssd-192'
  | 'c4-highmem-lssd-288'
  | 'c4-standard-lssd-4'
  | 'c4-standard-lssd-8'
  | 'c4-standard-lssd-16'
  | 'c4-standard-lssd-24'
  | 'c4-standard-lssd-32'
  | 'c4-standard-lssd-48'
  | 'c4-standard-lssd-96'
  | 'c4-standard-lssd-144'
  | 'c4-standard-lssd-192'
  | 'c4-standard-lssd-288'
  | 'c4d-highmem-lssd-8'
  | 'c4d-highmem-lssd-16'
  | 'c4d-highmem-lssd-32'
  | 'c4d-highmem-lssd-48'
  | 'c4d-highmem-lssd-64'
  | 'c4d-highmem-lssd-96'
  | 'c4d-highmem-lssd-192'
  | 'c4d-highmem-lssd-384'
  | 'c4d-standard-lssd-8'
  | 'c4d-standard-lssd-16'
  | 'c4d-standard-lssd-32'
  | 'c4d-standard-lssd-48'
  | 'c4d-standard-lssd-64'
  | 'c4d-standard-lssd-96'
  | 'c4d-standard-lssd-192'
  | 'c4d-standard-lssd-384'
  | 'c3-standard-lssd-4'
  | 'c3-standard-lssd-8'
  | 'c3-standard-lssd-22'
  | 'c3-standard-lssd-44'
  | 'c3-standard-lssd-88'
  | 'c3-standard-lssd-176'
  | 'c3d-highmem-lssd-8'
  | 'c3d-highmem-lssd-16'
  | 'c3d-highmem-lssd-30'
  | 'c3d-highmem-lssd-60'
  | 'c3d-highmem-lssd-90'
  | 'c3d-highmem-lssd-180'
  | 'c3d-highmem-lssd-360'
  | 'c3d-standard-lssd-8'
  | 'c3d-standard-lssd-16'
  | 'c3d-standard-lssd-30'
  | 'c3d-standard-lssd-60'
  | 'c3d-standard-lssd-90'
  | 'c3d-standard-lssd-180'
  | 'c3d-standard-lssd-360'
  | 'z3-highmem-highlssd-8'
  | 'z3-highmem-highlssd-16'
  | 'z3-highmem-highlssd-22'
  | 'z3-highmem-highlssd-32'
  | 'z3-highmem-highlssd-44'
  | 'z3-highmem-highlssd-88'
  | 'z3-highmem-standardlssd-14'
  | 'z3-highmem-standardlssd-22'
  | 'z3-highmem-standardlssd-44'
  | 'z3-highmem-standardlssd-88'
  | 'z3-highmem-standardlssd-176'
  | 'n2-highmem-2xlssd-4'
  | 'n2-highmem-2xlssd-8'
  | 'n2-highmem-2xlssd-16'
  | 'n2-highmem-2xlssd-32'
  | 'n2-highmem-2xlssd-48'
  | 'n2-highmem-2xlssd-64'
  | 'n2-highmem-2xlssd-96'
  | 'n2-standard-2xlssd-4'
  | 'n2-standard-2xlssd-8'
  | 'n2-standard-2xlssd-16'
  | 'n2-standard-2xlssd-32'
  | 'n2-standard-2xlssd-48'
  | 'n2-standard-2xlssd-64'
  | 'n2-standard-2xlssd-96'
  | 'n2-highmem-4xlssd-2'
  | 'n2-highmem-4xlssd-4'
  | 'n2-highmem-4xlssd-8'
  | 'n2-highmem-4xlssd-16'
  | 'n2-highmem-4xlssd-32'
  | 'n2-highmem-4xlssd-48'
  | 'n2-highmem-8xlssd-2'
  | 'n2-highmem-8xlssd-4'
  | 'n2-highmem-8xlssd-8'
  | 'n2-highmem-8xlssd-16'
  | 'n2-highmem-8xlssd-32'
  | 'n2-highmem-16xlssd-2'
  | 'n2-highmem-16xlssd-4'
  | 'n2-highmem-16xlssd-8'
  | 'n2-highmem-16xlssd-16'
type PgHaType = 'none' | 'async' | 'sync'
type PgStandbyCount = 0 | 1 | 2
type PgTags = ResourceTagsV1[]
type PostgresIpAccessListEntry = {
  id?: string | undefined
  source: string
  portRange: string
  description?: string | undefined
}
type PgConfig = {
  max_connections?: string | number | undefined
  default_transaction_isolation?: 'read committed' | 'repeatable read' | 'serializable' | undefined
  ssl_min_protocol_version?: 'TLSv1' | 'TLSv1.1' | 'TLSv1.2' | 'TLSv1.3' | undefined
  default_toast_compression?: 'pglz' | 'lz4' | undefined
  maintenance_work_mem?: string | number | undefined
  work_mem?: string | number | undefined
  effective_cache_size?: string | number | undefined
  random_page_cost?: string | number | undefined
  effective_io_concurrency?: string | number | undefined
  max_worker_processes?: string | number | undefined
  max_parallel_workers?: string | number | undefined
  max_parallel_workers_per_gather?: string | number | undefined
  max_parallel_maintenance_workers?: string | number | undefined
  shared_memory_percent?: string | number | undefined
  temp_buffers?: string | number | undefined
  hash_mem_multiplier?: string | number | undefined
  enable_parallel_hash?: 'on' | 'off' | undefined
  maintenance_io_concurrency?: string | number | undefined
  io_method?: 'sync' | 'worker' | 'io_uring' | undefined
  io_workers?: string | number | undefined
  io_min_workers?: string | number | undefined
  io_max_workers?: string | number | undefined
  bgwriter_delay?: string | number | undefined
  bgwriter_flush_after?: string | number | undefined
  bgwriter_lru_maxpages?: string | number | undefined
  bgwriter_lru_multiplier?: string | number | undefined
  statement_timeout?: string | number | undefined
  lock_timeout?: string | number | undefined
  idle_session_timeout?: string | number | undefined
  idle_in_transaction_session_timeout?: string | number | undefined
  transaction_timeout?: string | number | undefined
  wal_sender_timeout?: string | number | undefined
  wal_keep_size?: string | number | undefined
  min_wal_size?: string | number | undefined
  max_wal_size?: string | number | undefined
  checkpoint_timeout?: string | number | undefined
  max_slot_wal_keep_size?: string | number | undefined
  wal_compression?: 'off' | 'on' | 'lz4' | 'zstd' | undefined
  wal_buffers?: string | number | undefined
  max_replication_slots?: string | number | undefined
  max_wal_senders?: string | number | undefined
  max_logical_replication_workers?: string | number | undefined
  max_repack_replication_slots?: string | number | undefined
  max_sync_workers_per_subscription?: string | number | undefined
  logical_decoding_work_mem?: string | number | undefined
  autovacuum_max_workers?: string | number | undefined
  autovacuum_max_parallel_workers?: string | number | undefined
  autovacuum_naptime?: string | number | undefined
  autovacuum_work_mem?: string | number | undefined
  autovacuum_vacuum_scale_factor?: string | number | undefined
  autovacuum_analyze_scale_factor?: string | number | undefined
  autovacuum_vacuum_insert_scale_factor?: string | number | undefined
  autovacuum_vacuum_threshold?: string | number | undefined
  autovacuum_analyze_threshold?: string | number | undefined
  autovacuum_vacuum_insert_threshold?: string | number | undefined
  autovacuum_freeze_max_age?: string | number | undefined
  autovacuum_vacuum_cost_limit?: string | number | undefined
  autovacuum_vacuum_cost_delay?: string | number | undefined
  vacuum_cost_delay?: string | number | undefined
  log_min_duration_statement?: string | number | undefined
  log_temp_files?: string | number | undefined
  log_lock_waits?: 'on' | 'off' | undefined
  log_parameter_max_length?: string | number | undefined
  track_activity_query_size?: string | number | undefined
}
type PgBouncerConfig = { [x: string]: string }
type PostgresServicePostRequest = {
  name: PgNameProperty
  provider: PgProvider
  region: PgRegion
  postgresVersion?: PgVersion | undefined
  size: PgSize
  haType?: PgHaType | undefined
  standbyCount?: PgStandbyCount | undefined
  tags?: PgTags | undefined
  ipAccessList?: PostgresIpAccessListEntry[] | undefined
  pgConfig?: PgConfig | undefined
  pgBouncerConfig?: PgBouncerConfig | undefined
}
type PgIdProperty = string
type PgStorageSize = number
type PgStateProperty =
  | 'creating'
  | 'restarting'
  | 'running'
  | 'replaying_wal'
  | 'restoring_backup'
  | 'finalizing_restore'
  | 'unavailable'
  | 'stopped'
  | 'deleting'
type PgCreatedAtProperty = string
type PgIsPrimaryProperty = boolean
type PgDeletionProtectionProperty = boolean
type PostgresService = {
  name?: PgNameProperty | undefined
  provider?: PgProvider | undefined
  region?: PgRegion | undefined
  postgresVersion?: PgVersion | undefined
  size?: PgSize | undefined
  haType?: PgHaType | undefined
  standbyCount?: PgStandbyCount | undefined
  tags?: PgTags | undefined
  ipAccessList?: PostgresIpAccessListEntry[] | undefined
  id?: PgIdProperty | undefined
  storageSize?: PgStorageSize | undefined
  state?: PgStateProperty | undefined
  createdAt?: PgCreatedAtProperty | undefined
  isPrimary?: PgIsPrimaryProperty | undefined
  connectionString?: string | undefined
  username?: string | undefined
  password?: string | undefined
  hostname?: string | undefined
  deletionProtection?: PgDeletionProtectionProperty | undefined
  earliestRestoreTime?: string | undefined
}
type PostgresServiceListItem = {
  name?: PgNameProperty | undefined
  provider?: PgProvider | undefined
  region?: PgRegion | undefined
  postgresVersion?: PgVersion | undefined
  size?: PgSize | undefined
  haType?: PgHaType | undefined
  standbyCount?: PgStandbyCount | undefined
  tags?: PgTags | undefined
  id?: PgIdProperty | undefined
  state?: PgStateProperty | undefined
  createdAt?: PgCreatedAtProperty | undefined
  isPrimary?: PgIsPrimaryProperty | undefined
  deletionProtection?: PgDeletionProtectionProperty | undefined
}
type PostgresIpAccessListRuleReference = { id: string }
type PostgresIpAccessListPatch = {
  add?: PostgresIpAccessListEntry[] | undefined
  remove?: PostgresIpAccessListRuleReference[] | undefined
}
type PostgresServicePatchRequest = {
  ipAccessList?: PostgresIpAccessListPatch | undefined
  name?: PgNameProperty | undefined
  size?: PgSize | undefined
  haType?: PgHaType | undefined
  standbyCount?: PgStandbyCount | undefined
  tags?: PgTags | undefined
  deletionProtection?: PgDeletionProtectionProperty | undefined
}
type PgPitrRestoreTargetProperty = string
type PostgresServiceRestoreRequest = {
  name: PgNameProperty
  restoreTarget: PgPitrRestoreTargetProperty
  pgConfig?: PgConfig | undefined
  pgBouncerConfig?: PgBouncerConfig | undefined
  tags?: PgTags | undefined
}
type PgPassword = {}
type PostgresServiceSetPassword = { password?: PgPassword | undefined }
type PostgresServicePasswordResource = { password?: string | undefined }
type PostgresServiceSetState = { command?: 'restart' | 'promote' | 'switchover' | undefined }
type PostgresServiceReadReplicaRequest = {
  name: PgNameProperty
  pgConfig?: PgConfig | undefined
  pgBouncerConfig?: PgBouncerConfig | undefined
  tags?: PgTags | undefined
}
type PostgresInstanceConfig = { pgConfig: PgConfig; pgBouncerConfig: PgBouncerConfig }
type PostgresInstanceUpdateConfigResponse = {
  pgConfig: PgConfig
  pgBouncerConfig: PgBouncerConfig
  message?: string | undefined
}
type PostgresMetricDataPoint = { timestamp: number; value: number }
type PostgresMetricSeries = { label: string; dataPoints: PostgresMetricDataPoint[] }
type PostgresMetric = {
  key: string
  name: string
  unit: string
  description: string
  series: PostgresMetricSeries[]
}
type PostgresMetrics = { metrics: PostgresMetric[] }
type PostgresPrivateEndpointPort = { port: number; targetPort: number }
type PostgresPrivateEndpointVpcEndpoint = {
  vpcEndpointId: string
  description?: string | undefined
}
type PostgresPrivateEndpoint = {
  state: string
  endpointServiceName?: string | undefined
  endpointServiceId?: string | undefined
  privateHostname?: string | undefined
  privateDnsName?: string | undefined
  privateDnsVerificationState?: string | undefined
  ipAddressType: string
  ports: PostgresPrivateEndpointPort[]
  supportedRegions: string[]
  allowedVpcEndpoints: PostgresPrivateEndpointVpcEndpoint[]
}
type PostgresPrivateEndpointPostRequest = { supportedRegions?: string[] | undefined }
type PostgresPrivateEndpointPatchRequest = {
  allowedVpcEndpoints?: PostgresPrivateEndpointVpcEndpoint[] | undefined
  supportedRegions?: string[] | undefined
}
type PostgresBackup = { key: string; status: string; lastModified: string }
type PostgresSlowQueryPattern = {
  queryId: string
  queryText: string
  dbName: string
  dbUser: string
  dbOperation: string
  app: string
  callCount: number
  errorCount: number
  totalDurationUs: number
  avgDurationUs: number
  maxDurationUs: number
  p50DurationUs: number
  p95DurationUs: number
  p99DurationUs: number
  totalRows: number
  totalSharedBlksRead: number
  totalSharedBlksHit: number
  totalCpuTimeUs: number
  totalWalBytes: number
}
type PostgresQueryExecution = {
  timestamp: string
  queryId: string
  dbName: string
  dbUser: string
  dbOperation: string
  app: string
  queryText: string
  pid: string
  durationUs: number
  rows: number
  sharedBlksHit: number
  sharedBlksRead: number
  sharedBlksWritten: number
  sharedBlksDirtied: number
  sharedBlkReadTimeUs: number
  sharedBlkWriteTimeUs: number
  localBlksHit: number
  localBlksRead: number
  localBlksWritten: number
  localBlksDirtied: number
  tempBlksRead: number
  tempBlksWritten: number
  tempBlkReadTimeUs: number
  tempBlkWriteTimeUs: number
  walRecords: number
  walBytes: number
  walFpi: number
  cpuUserTimeUs: number
  cpuSysTimeUs: number
  jitFunctions: number
  jitGenerationTimeUs: number
  jitInliningTimeUs: number
  jitOptimizationTimeUs: number
  jitEmissionTimeUs: number
  jitDeformTimeUs: number
  parallelWorkersPlanned: number
  parallelWorkersLaunched: number
  errMessage?: string | undefined
  errSqlstate?: string | undefined
  errElevel?: number | undefined
  serverRole: string
  traceId?: string | undefined
  spanId?: string | undefined
}
type PostgresSlowQueryPatternDetail = {
  aggregate?: PostgresSlowQueryPattern | undefined
  recentExecutions: PostgresQueryExecution[]
}
type PostgresBlockingQuery = {
  database: string
  blockedQueryId: string
  blockedQuery: string
  blockedUsers: string[]
  blockedApps: string[]
  blockedPids: number[]
  lockType: string
  blockedMode: string
  blockingDatabase: string
  blockingQueryId: string
  blockingQuery: string
  blockingUsers: string[]
  blockingApps: string[]
  blockingPids: number[]
  blockingPrepared: boolean
  blockingInternal: boolean
  latestBlockingState: string
  latestBlockingXactSeconds: number | null
  latestBlockingBackendType: string
  blockingSeenWaiting: boolean
  sessions: number
  samples: number
  longestWaitSeconds: number | null
  lastSeen: string
}
type PostgresLogEntry = { timestamp: string; severity: string; body: string }
type OrganizationCloudRegionPrivateEndpointConfig = { endpointServiceId?: string | undefined }
type ByocInfrastructureTags = { [x: string]: string }
type ByocRestrictedFacts = {
  clusterName: string
  platformNodeGroup?: string | undefined
  availabilityZones?: string[] | undefined
  namespacePrefix?: string | undefined
  executorRoleArn?: string | undefined
  nodeRoleArns?: string[] | undefined
  imageMode: string
  imageRegistry?: string | undefined
  dataBucket: string
  backupBucket: string
  storageRoleArn: string
  scraperEndpoint?: string | undefined
  enableMonitoring?: boolean | undefined
  enableSnapshotController?: boolean | undefined
  enableAutoscaler?: boolean | undefined
}
type ByocInfrastructurePostRequest = {
  regionId:
    | 'ap-northeast-1'
    | 'ap-northeast-2'
    | 'ap-south-1'
    | 'ap-southeast-1'
    | 'ap-southeast-2'
    | 'ca-central-1'
    | 'eu-central-1'
    | 'eu-west-1'
    | 'eu-west-2'
    | 'il-central-1'
    | 'us-east-1'
    | 'us-east-2'
    | 'us-west-2'
    | 'us-east1'
    | 'us-central1'
    | 'europe-west2'
    | 'europe-west4'
    | 'asia-southeast1'
    | 'asia-northeast1'
    | 'eastus'
    | 'eastus2'
    | 'westus3'
    | 'germanywestcentral'
    | 'centralus'
  accountId: string
  availabilityZoneSuffixes?: ('a' | 'b' | 'c' | 'd' | 'e' | 'f')[] | undefined
  vpcCidrRange?: string | undefined
  externalId?: string | undefined
  tenantId?: string | undefined
  servicePrincipalClientId?: string | undefined
  vpcId?: string | undefined
  privateSubnetIds?: string[] | undefined
  publicSubnetIds?: string[] | undefined
  gcpPodCidrRangeNames?: string[] | undefined
  gcpSharedVpcHostProjectId?: string | undefined
  tags?: ByocInfrastructureTags | undefined
  accessModel?: string | undefined
  restrictedFacts?: ByocRestrictedFacts | undefined
  displayName?: string | undefined
}
type ByocInfrastructureValidatePostRequest = {
  regionId:
    | 'ap-northeast-1'
    | 'ap-northeast-2'
    | 'ap-south-1'
    | 'ap-southeast-1'
    | 'ap-southeast-2'
    | 'ca-central-1'
    | 'eu-central-1'
    | 'eu-west-1'
    | 'eu-west-2'
    | 'il-central-1'
    | 'us-east-1'
    | 'us-east-2'
    | 'us-west-2'
    | 'us-east1'
    | 'us-central1'
    | 'europe-west2'
    | 'europe-west4'
    | 'asia-southeast1'
    | 'asia-northeast1'
    | 'eastus'
    | 'eastus2'
    | 'westus3'
    | 'germanywestcentral'
    | 'centralus'
  accountId: string
  availabilityZoneSuffixes?: ('a' | 'b' | 'c' | 'd' | 'e' | 'f')[] | undefined
  vpcCidrRange?: string | undefined
  externalId?: string | undefined
  tenantId?: string | undefined
  servicePrincipalClientId?: string | undefined
  vpcId?: string | undefined
  privateSubnetIds?: string[] | undefined
  publicSubnetIds?: string[] | undefined
  gcpPodCidrRangeNames?: string[] | undefined
  gcpSharedVpcHostProjectId?: string | undefined
  tags?: ByocInfrastructureTags | undefined
  accessModel?: string | undefined
  restrictedFacts?: ByocRestrictedFacts | undefined
}
type ByocInfrastructureValidationCheck = {
  name?: string | undefined
  action?: string | undefined
  allowed?: boolean | undefined
  reason?: string | undefined
  group?: string | undefined
}
type ByocInfrastructureValidation = {
  cloudProvider?: 'gcp' | 'aws' | 'azure' | undefined
  allPassed?: boolean | undefined
  anyPassed?: boolean | undefined
  supported?: boolean | undefined
  checks?: ByocInfrastructureValidationCheck[] | undefined
}
type ByocInfrastructureEnrollmentTokenPostRequest = { ttlSeconds?: number | undefined }
type ByocInfrastructureEnrollmentToken = { token: string; expiresAt: string }
type ByocConnectorComponent = {
  name?: string | undefined
  state?: string | undefined
  version?: string | undefined
  lastHeartbeatAt?: string | undefined
}
type ByocConnector = {
  lastHeartbeatAt?: string | undefined
  components?: ByocConnectorComponent[] | undefined
  platformState?: string | undefined
  platformDetail?: string | undefined
}
type ByocInfrastructureDetails = {
  id?: string | undefined
  state?: string | undefined
  accountId?: string | undefined
  regionId?:
    | 'ap-northeast-1'
    | 'ap-northeast-2'
    | 'ap-south-1'
    | 'ap-southeast-1'
    | 'ap-southeast-2'
    | 'ca-central-1'
    | 'eu-central-1'
    | 'eu-west-1'
    | 'eu-west-2'
    | 'il-central-1'
    | 'us-east-1'
    | 'us-east-2'
    | 'us-west-2'
    | 'us-east1'
    | 'us-central1'
    | 'europe-west2'
    | 'europe-west4'
    | 'asia-southeast1'
    | 'asia-northeast1'
    | 'eastus'
    | 'eastus2'
    | 'westus3'
    | 'germanywestcentral'
    | 'centralus'
    | undefined
  cloudProvider?: 'gcp' | 'aws' | 'azure' | undefined
  displayName?: string | undefined
  enablePrivateLink?: boolean | undefined
  enablePrivateLoadBalancer?: boolean | undefined
  enablePublicLoadBalancer?: boolean | undefined
  vpcCidrRange?: string | undefined
  vpcAvailabilityZoneList?: string[] | undefined
  isByoVpc?: boolean | undefined
  byoVpcId?: string | undefined
  byoVpcPrivateSubnetIds?: string[] | undefined
  byoVpcPodCidrRangeNames?: string[] | undefined
  byoVpcSharedVpcHostProjectId?: string | undefined
  gcpPscSubnetId?: string | undefined
  accessModel?: string | undefined
  restrictedFacts?: ByocRestrictedFacts | undefined
  connector?: ByocConnector | undefined
}
type ByocInfrastructurePatchRequest = {
  displayName?: string | undefined
  enablePrivateLink?: boolean | undefined
  gcpPscSubnetId?: string | undefined
  enablePrivateLoadBalancer?: boolean | undefined
  enablePublicLoadBalancer?: boolean | undefined
  tags?: ByocInfrastructureTags | undefined
}
type ByocInfrastructureProgressStage = {
  name?: string | undefined
  status?: 'not_started' | 'pending' | 'waiting' | 'in_progress' | 'ready' | 'failed' | undefined
  updatedAt?: string | undefined
  message?: string | undefined
  subStages?: ByocInfrastructureProgressStage[] | undefined
}
type ByocInfrastructureProgress = {
  id?: string | undefined
  status?: 'not_started' | 'pending' | 'waiting' | 'in_progress' | 'ready' | 'failed' | undefined
  updatedAt?: string | undefined
  stages?: ByocInfrastructureProgressStage[] | undefined
}
type ByocInfrastructureTagsResponse = { tags: ByocInfrastructureTags }
type ByocInfrastructurePrivateEndpointConfig = { endpointName: string; privateDnsHostname: string }
type ByocCustomerAuthorizedAccess = {
  mode: string
  startTimestamp?: string | undefined
  durationSeconds?: number | undefined
  allowed: boolean
  windowEndTimestamp?: string | undefined
}
type ByocCustomerAuthorizedAccessPatchRequest = {
  mode: string
  startTimestamp?: string | undefined
  durationSeconds?: number | undefined
}
type CustomPrivateDnsMapping = {
  privateDnsName?: string | undefined
  targetId?: string | undefined
}
type ReversePrivateEndpointPrivateDnsMapping = {
  privateDnsName?: string | undefined
  internalDnsName?: string | undefined
}
type ReversePrivateEndpointDnsTarget = {
  id?: string | undefined
  kind?: string | undefined
  internalDnsName?: string | undefined
}
type ReversePrivateEndpoint = {
  description?: string | undefined
  type?:
    | 'VPC_ENDPOINT_SERVICE'
    | 'VPC_RESOURCE'
    | 'MSK_MULTI_VPC'
    | 'GCP_PSC_SERVICE_ATTACHMENT'
    | undefined
  vpcEndpointServiceName?: (string | null) | undefined
  vpcResourceConfigurationId?: (string | null) | undefined
  vpcResourceShareArn?: (string | null) | undefined
  mskClusterArn?: (string | null) | undefined
  mskAuthentication?: 'SASL_IAM' | 'SASL_SCRAM' | undefined
  gcpServiceAttachment?: (string | null) | undefined
  customPrivateDnsMappings?: CustomPrivateDnsMapping[] | undefined
  id?: string | undefined
  serviceId?: string | undefined
  endpointId?: string | undefined
  dnsNames?: string[] | undefined
  privateDnsNames?: string[] | undefined
  privateDnsMappings?: ReversePrivateEndpointPrivateDnsMapping[] | undefined
  dnsTargets?: ReversePrivateEndpointDnsTarget[] | undefined
  status?:
    | 'Unknown'
    | 'Provisioning'
    | 'Deleting'
    | 'Ready'
    | 'Failed'
    | 'PendingAcceptance'
    | 'Rejected'
    | 'Expired'
    | undefined
}
type CreateReversePrivateEndpoint = {
  description: string
  type: 'VPC_ENDPOINT_SERVICE' | 'VPC_RESOURCE' | 'MSK_MULTI_VPC' | 'GCP_PSC_SERVICE_ATTACHMENT'
  vpcEndpointServiceName?: string | undefined
  vpcResourceConfigurationId?: string | undefined
  vpcResourceShareArn?: string | undefined
  mskClusterArn?: string | undefined
  mskAuthentication?: 'SASL_IAM' | 'SASL_SCRAM' | undefined
  gcpServiceAttachment?: string | undefined
  customPrivateDnsMappings?: CustomPrivateDnsMapping[] | undefined
}
type UpdateReversePrivateEndpoint = {
  customPrivateDnsMappings?: CustomPrivateDnsMapping[] | undefined
}
type PublicQueryApiEndpointListItem = {
  id: string
  name: string
  database: string
  apiKeyIds: string[]
  roles: string[]
  allowedOrigins: string[]
  url: string
  ownerType: 'user' | 'queryApiEndpoint'
}
type PublicQueryApiEndpointRequest = {
  name: string
  sql: string
  database: string
  parameters?: { [x: string]: string } | undefined
  apiKeyIds: string[]
  roles: string[]
  allowedOrigins?: string[] | undefined
}
type PublicQueryApiEndpoint = {
  id: string
  name: string
  sql: string
  database: string
  parameters: { [x: string]: string }
  apiKeyIds: string[]
  roles: string[]
  allowedOrigins: string[]
  url: string
  ownerType: 'user' | 'queryApiEndpoint'
}
type PublicSavedQueryListItem = { id: string; name: string; database: string }
type PublicSavedQueryRequest = {
  name: string
  sql: string
  database: string
  parameters?: { [x: string]: string } | undefined
}
type PublicSavedQuery = {
  id: string
  name: string
  sql: string
  database: string
  parameters: { [x: string]: string }
}
type UdfUploadSession = { uploadId: string; uploadUrl: string; expiresAt: string }
type UdfArgumentOutput = { name: string; type: string }
type Udf = {
  functionName: string
  version: number
  status: 'building' | 'error' | 'ready'
  runtime: 'python3.11' | 'native'
  type: 'executable' | 'executable_pool'
  arguments: UdfArgumentOutput[]
  returnType: string
  returnName: string | ({ [x: string]: unknown } | null)
  poolSize: number | ({ [x: string]: unknown } | null)
  commandReadTimeout: number
  commandWriteTimeout: number
  maxCommandExecutionTime: number | ({ [x: string]: unknown } | null)
  memoryLimitMib: number | ({ [x: string]: unknown } | null)
  sendChunkHeader: boolean
  deterministic: boolean
  format: string
  sandboxType: 'basic' | 'netenable'
  sandboxVersion: 'v1' | 'v2' | 'v3'
  error: string | ({ [x: string]: unknown } | null)
  createdAt: string
  updatedAt: string
}
type UdfArgument = { name: string; type: string }
type UdfCreateRequest =
  | {
      uploadId: string
      runtime: 'python3.11' | 'native'
      arguments: UdfArgument[]
      returnType: string
      returnName?: string | ({ [x: string]: unknown } | null) | undefined
      commandReadTimeout?: number | undefined
      commandWriteTimeout?: number | undefined
      memoryLimitMib?: number | ({ [x: string]: unknown } | null) | undefined
      sendChunkHeader?: boolean | undefined
      deterministic?: boolean | undefined
      format?: string | undefined
      sandboxType?: 'basic' | 'netenable' | undefined
      type: 'executable'
      poolSize?: ({ [x: string]: unknown } | null) | undefined
      maxCommandExecutionTime?: number | ({ [x: string]: unknown } | null) | undefined
      functionName: string
    }
  | {
      uploadId: string
      runtime: 'python3.11' | 'native'
      arguments: UdfArgument[]
      returnType: string
      returnName?: string | ({ [x: string]: unknown } | null) | undefined
      commandReadTimeout?: number | undefined
      commandWriteTimeout?: number | undefined
      memoryLimitMib?: number | ({ [x: string]: unknown } | null) | undefined
      sendChunkHeader?: boolean | undefined
      deterministic?: boolean | undefined
      format?: string | undefined
      sandboxType?: 'basic' | 'netenable' | undefined
      type: 'executable_pool'
      poolSize?: number | undefined
      maxCommandExecutionTime?: number | undefined
      functionName: string
    }
type UdfAttachment = {
  functionName: string
  serviceId: string
  status: 'deployed' | 'deprovisioning' | 'error' | 'provisioning' | 'standby'
  version: number
}
type UdfVersionCreateRequest =
  | {
      uploadId: string
      runtime: 'python3.11' | 'native'
      arguments: UdfArgument[]
      returnType: string
      returnName?: string | ({ [x: string]: unknown } | null) | undefined
      commandReadTimeout?: number | undefined
      commandWriteTimeout?: number | undefined
      memoryLimitMib?: number | ({ [x: string]: unknown } | null) | undefined
      sendChunkHeader?: boolean | undefined
      deterministic?: boolean | undefined
      format?: string | undefined
      sandboxType?: 'basic' | 'netenable' | undefined
      type: 'executable'
      poolSize?: ({ [x: string]: unknown } | null) | undefined
      maxCommandExecutionTime?: number | ({ [x: string]: unknown } | null) | undefined
    }
  | {
      uploadId: string
      runtime: 'python3.11' | 'native'
      arguments: UdfArgument[]
      returnType: string
      returnName?: string | ({ [x: string]: unknown } | null) | undefined
      commandReadTimeout?: number | undefined
      commandWriteTimeout?: number | undefined
      memoryLimitMib?: number | ({ [x: string]: unknown } | null) | undefined
      sendChunkHeader?: boolean | undefined
      deterministic?: boolean | undefined
      format?: string | undefined
      sandboxType?: 'basic' | 'netenable' | undefined
      type: 'executable_pool'
      poolSize?: number | undefined
      maxCommandExecutionTime?: number | undefined
    }
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/v1/whoami': {
      $get:
        | {
            input: {}
            output: {
              status?: number | undefined
              requestId?: string | undefined
              result?: Whoami | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {}
            output: {
              status?: number | undefined
              error?: string | undefined
              requestId?: string | undefined
            }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {}
            output: {
              status?: number | undefined
              error?: string | undefined
              requestId?: string | undefined
            }
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/v1/organizations': {
      $get:
        | {
            input: { query: { limit?: number | undefined; cursor?: string | undefined } }
            output: {
              status?: number | undefined
              requestId?: string | undefined
              result?: Organization[] | undefined
              limit?: number | undefined
              nextCursor?: (string | null) | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { limit?: number | undefined; cursor?: string | undefined } }
            output: {
              status?: number | undefined
              error?: string | undefined
              requestId?: string | undefined
            }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { query: { limit?: number | undefined; cursor?: string | undefined } }
            output: {
              status?: number | undefined
              error?: string | undefined
              requestId?: string | undefined
            }
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/v1/organizations/:organizationId': {
      $get:
        | {
            input: { param: { organizationId: string } }
            output: {
              status?: number | undefined
              requestId?: string | undefined
              result?: Organization | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { organizationId: string } }
            output: {
              status?: number | undefined
              error?: string | undefined
              requestId?: string | undefined
            }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { organizationId: string } }
            output: {
              status?: number | undefined
              error?: string | undefined
              requestId?: string | undefined
            }
            outputFormat: 'json'
            status: 500
          }
      $patch:
        | {
            input: { param: { organizationId: string } } & { json: OrganizationPatchRequest }
            output: {
              status?: number | undefined
              requestId?: string | undefined
              result?: Organization | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { organizationId: string } } & { json: OrganizationPatchRequest }
            output: {
              status?: number | undefined
              error?: string | undefined
              requestId?: string | undefined
            }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { organizationId: string } } & { json: OrganizationPatchRequest }
            output: {
              status?: number | undefined
              error?: string | undefined
              requestId?: string | undefined
            }
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/v1/organizations/:organizationId/prometheus': {
      $get:
        | {
            input: { param: { organizationId: string } } & {
              query: { filtered_metrics?: string | undefined }
            }
            output: string
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { organizationId: string } } & {
              query: { filtered_metrics?: string | undefined }
            }
            output: {
              status?: number | undefined
              error?: string | undefined
              requestId?: string | undefined
            }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { organizationId: string } } & {
              query: { filtered_metrics?: string | undefined }
            }
            output: {
              status?: number | undefined
              error?: string | undefined
              requestId?: string | undefined
            }
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/v1/organizations/:organizationId/prometheus/discovery': {
      $get:
        | {
            input: { param: { organizationId: string } } & {
              query: { filtered_metrics?: string | undefined }
            }
            output: PrometheusDiscoveryTargetGroup[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { organizationId: string } } & {
              query: { filtered_metrics?: string | undefined }
            }
            output: {
              status?: number | undefined
              error?: string | undefined
              requestId?: string | undefined
            }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { organizationId: string } } & {
              query: { filtered_metrics?: string | undefined }
            }
            output: {
              status?: number | undefined
              error?: string | undefined
              requestId?: string | undefined
            }
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/v1/organizations/:organizationId/roles': {
      $get:
        | {
            input: { param: { organizationId: string } } & {
              query: { limit?: number | undefined; cursor?: string | undefined }
            }
            output: {
              status?: number | undefined
              requestId?: string | undefined
              result?: RBACRole[] | undefined
              limit?: number | undefined
              nextCursor?: (string | null) | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { organizationId: string } } & {
              query: { limit?: number | undefined; cursor?: string | undefined }
            }
            output: {
              status?: number | undefined
              error?: string | undefined
              requestId?: string | undefined
            }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { organizationId: string } } & {
              query: { limit?: number | undefined; cursor?: string | undefined }
            }
            output: {
              status?: number | undefined
              error?: string | undefined
              requestId?: string | undefined
            }
            outputFormat: 'json'
            status: 500
          }
      $post:
        | {
            input: { param: { organizationId: string } } & { json: RoleCreateRequest }
            output: {
              status?: number | undefined
              requestId?: string | undefined
              result?: RBACRole | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { organizationId: string } } & { json: RoleCreateRequest }
            output: {
              status?: number | undefined
              error?: string | undefined
              requestId?: string | undefined
            }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { organizationId: string } } & { json: RoleCreateRequest }
            output: {
              status?: number | undefined
              error?: string | undefined
              requestId?: string | undefined
            }
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/v1/organizations/:organizationId/roles/:roleId': {
      $get:
        | {
            input: { param: { organizationId: string; roleId: string } }
            output: {
              status?: number | undefined
              requestId?: string | undefined
              result?: RBACRole | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { organizationId: string; roleId: string } }
            output: {
              status?: number | undefined
              error?: string | undefined
              requestId?: string | undefined
            }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { organizationId: string; roleId: string } }
            output: {
              status?: number | undefined
              error?: string | undefined
              requestId?: string | undefined
            }
            outputFormat: 'json'
            status: 500
          }
      $patch:
        | {
            input: { param: { organizationId: string; roleId: string } } & {
              json: RoleUpdateRequest
            }
            output: {
              status?: number | undefined
              requestId?: string | undefined
              result?: RBACRole | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { organizationId: string; roleId: string } } & {
              json: RoleUpdateRequest
            }
            output: {
              status?: number | undefined
              error?: string | undefined
              requestId?: string | undefined
            }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { organizationId: string; roleId: string } } & {
              json: RoleUpdateRequest
            }
            output: {
              status?: number | undefined
              error?: string | undefined
              requestId?: string | undefined
            }
            outputFormat: 'json'
            status: 500
          }
      $delete:
        | {
            input: { param: { organizationId: string; roleId: string } }
            output: { status?: number | undefined; requestId?: string | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { organizationId: string; roleId: string } }
            output: {
              status?: number | undefined
              error?: string | undefined
              requestId?: string | undefined
            }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { organizationId: string; roleId: string } }
            output: {
              status?: number | undefined
              error?: string | undefined
              requestId?: string | undefined
            }
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/v1/organizations/:organizationId/quotas': {
      $get:
        | {
            input: { param: { organizationId: string } }
            output: {
              status?: number | undefined
              requestId?: string | undefined
              result?: OrganizationQuota[] | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { organizationId: string } }
            output: {
              status?: number | undefined
              error?: string | undefined
              requestId?: string | undefined
            }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { organizationId: string } }
            output: {
              status?: number | undefined
              error?: string | undefined
              requestId?: string | undefined
            }
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/v1/organizations/:organizationId/quotas/:quotaCode': {
      $get:
        | {
            input: { param: { organizationId: string; quotaCode: string } }
            output: {
              status?: number | undefined
              requestId?: string | undefined
              result?: OrganizationQuota | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { organizationId: string; quotaCode: string } }
            output: {
              status?: number | undefined
              error?: string | undefined
              requestId?: string | undefined
            }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { organizationId: string; quotaCode: string } }
            output: {
              status?: number | undefined
              error?: string | undefined
              requestId?: string | undefined
            }
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/v1/organizations/:organizationId/serviceProfiles': {
      $get:
        | {
            input: { param: { organizationId: string } } & {
              query: { region_id?: string | undefined; byoc_id?: string | undefined }
            }
            output: {
              status?: number | undefined
              requestId?: string | undefined
              result?: ServiceProfile[] | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { organizationId: string } } & {
              query: { region_id?: string | undefined; byoc_id?: string | undefined }
            }
            output: {
              status?: number | undefined
              error?: string | undefined
              requestId?: string | undefined
            }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { organizationId: string } } & {
              query: { region_id?: string | undefined; byoc_id?: string | undefined }
            }
            output: {
              status?: number | undefined
              error?: string | undefined
              requestId?: string | undefined
            }
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/v1/organizations/:organizationId/previews': {
      $get:
        | {
            input: { param: { organizationId: string } }
            output: {
              status?: number | undefined
              requestId?: string | undefined
              result?: PublicPreview[] | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { organizationId: string } }
            output: {
              status?: number | undefined
              error?: string | undefined
              requestId?: string | undefined
            }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { organizationId: string } }
            output: {
              status?: number | undefined
              error?: string | undefined
              requestId?: string | undefined
            }
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/v1/organizations/:organizationId/previews/:previewId': {
      $patch:
        | {
            input: { param: { organizationId: string; previewId: string } } & {
              json: PublicPreviewPatchRequest
            }
            output: {
              status?: number | undefined
              requestId?: string | undefined
              result?: PublicPreview | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { organizationId: string; previewId: string } } & {
              json: PublicPreviewPatchRequest
            }
            output: {
              status?: number | undefined
              error?: string | undefined
              requestId?: string | undefined
            }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { organizationId: string; previewId: string } } & {
              json: PublicPreviewPatchRequest
            }
            output: {
              status?: number | undefined
              error?: string | undefined
              requestId?: string | undefined
            }
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/v1/organizations/:organizationId/services': {
      $get:
        | {
            input: { param: { organizationId: string } } & {
              query: { filter?: string[] | undefined }
            }
            output: {
              status?: number | undefined
              requestId?: string | undefined
              result?: Service[] | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { organizationId: string } } & {
              query: { filter?: string[] | undefined }
            }
            output: {
              status?: number | undefined
              error?: string | undefined
              requestId?: string | undefined
            }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { organizationId: string } } & {
              query: { filter?: string[] | undefined }
            }
            output: {
              status?: number | undefined
              error?: string | undefined
              requestId?: string | undefined
            }
            outputFormat: 'json'
            status: 500
          }
      $post:
        | {
            input: { param: { organizationId: string } } & { json: ServicePostRequest }
            output: {
              status?: number | undefined
              requestId?: string | undefined
              result?: ServicePostResponse | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { organizationId: string } } & { json: ServicePostRequest }
            output: {
              status?: number | undefined
              error?: string | undefined
              requestId?: string | undefined
            }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { organizationId: string } } & { json: ServicePostRequest }
            output: {
              status?: number | undefined
              error?: string | undefined
              requestId?: string | undefined
            }
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/v1/organizations/:organizationId/services/:serviceId': {
      $get:
        | {
            input: { param: { organizationId: string; serviceId: string } }
            output: {
              status?: number | undefined
              requestId?: string | undefined
              result?: Service | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { organizationId: string; serviceId: string } }
            output: {
              status?: number | undefined
              error?: string | undefined
              requestId?: string | undefined
            }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { organizationId: string; serviceId: string } }
            output: {
              status?: number | undefined
              error?: string | undefined
              requestId?: string | undefined
            }
            outputFormat: 'json'
            status: 500
          }
      $patch:
        | {
            input: { param: { organizationId: string; serviceId: string } } & {
              json: ServicePatchRequest
            }
            output: {
              status?: number | undefined
              requestId?: string | undefined
              result?: Service | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { organizationId: string; serviceId: string } } & {
              json: ServicePatchRequest
            }
            output: {
              status?: number | undefined
              error?: string | undefined
              requestId?: string | undefined
            }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { organizationId: string; serviceId: string } } & {
              json: ServicePatchRequest
            }
            output: {
              status?: number | undefined
              error?: string | undefined
              requestId?: string | undefined
            }
            outputFormat: 'json'
            status: 500
          }
      $delete:
        | {
            input: { param: { organizationId: string; serviceId: string } }
            output: { status?: number | undefined; requestId?: string | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { organizationId: string; serviceId: string } }
            output: {
              status?: number | undefined
              error?: string | undefined
              requestId?: string | undefined
            }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { organizationId: string; serviceId: string } }
            output: {
              status?: number | undefined
              error?: string | undefined
              requestId?: string | undefined
            }
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/v1/organizations/:organizationId/services/:serviceId/privateEndpointConfig': {
      $get:
        | {
            input: { param: { organizationId: string; serviceId: string } }
            output: {
              status?: number | undefined
              requestId?: string | undefined
              result?: PrivateEndpointConfig | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { organizationId: string; serviceId: string } }
            output: {
              status?: number | undefined
              error?: string | undefined
              requestId?: string | undefined
            }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { organizationId: string; serviceId: string } }
            output: {
              status?: number | undefined
              error?: string | undefined
              requestId?: string | undefined
            }
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/v1/organizations/:organizationId/services/:serviceId/serviceQueryEndpoint': {
      $get:
        | {
            input: { param: { organizationId: string; serviceId: string } }
            output: {
              status?: number | undefined
              requestId?: string | undefined
              result?: ServiceQueryAPIEndpoint | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { organizationId: string; serviceId: string } }
            output: {
              status?: number | undefined
              error?: string | undefined
              requestId?: string | undefined
            }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { organizationId: string; serviceId: string } }
            output: {
              status?: number | undefined
              error?: string | undefined
              requestId?: string | undefined
            }
            outputFormat: 'json'
            status: 500
          }
      $delete:
        | {
            input: { param: { organizationId: string; serviceId: string } }
            output: { status?: number | undefined; requestId?: string | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { organizationId: string; serviceId: string } }
            output: {
              status?: number | undefined
              error?: string | undefined
              requestId?: string | undefined
            }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { organizationId: string; serviceId: string } }
            output: {
              status?: number | undefined
              error?: string | undefined
              requestId?: string | undefined
            }
            outputFormat: 'json'
            status: 500
          }
      $post:
        | {
            input: { param: { organizationId: string; serviceId: string } } & {
              json: InstanceServiceQueryApiEndpointsPostRequest
            }
            output: {
              status?: number | undefined
              requestId?: string | undefined
              result?: ServiceQueryAPIEndpoint | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { organizationId: string; serviceId: string } } & {
              json: InstanceServiceQueryApiEndpointsPostRequest
            }
            output: {
              status?: number | undefined
              error?: string | undefined
              requestId?: string | undefined
            }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { organizationId: string; serviceId: string } } & {
              json: InstanceServiceQueryApiEndpointsPostRequest
            }
            output: {
              status?: number | undefined
              error?: string | undefined
              requestId?: string | undefined
            }
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/v1/organizations/:organizationId/services/:serviceId/state': {
      $patch:
        | {
            input: { param: { organizationId: string; serviceId: string } } & {
              json: ServiceStatePatchRequest
            }
            output: {
              status?: number | undefined
              requestId?: string | undefined
              result?: Service | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { organizationId: string; serviceId: string } } & {
              json: ServiceStatePatchRequest
            }
            output: {
              status?: number | undefined
              error?: string | undefined
              requestId?: string | undefined
            }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { organizationId: string; serviceId: string } } & {
              json: ServiceStatePatchRequest
            }
            output: {
              status?: number | undefined
              error?: string | undefined
              requestId?: string | undefined
            }
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/v1/organizations/:organizationId/services/:serviceId/scaling': {
      $patch:
        | {
            input: { param: { organizationId: string; serviceId: string } } & {
              json: ServiceScalingPatchRequest
            }
            output: {
              status?: number | undefined
              requestId?: string | undefined
              result?: Service | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { organizationId: string; serviceId: string } } & {
              json: ServiceScalingPatchRequest
            }
            output: {
              status?: number | undefined
              error?: string | undefined
              requestId?: string | undefined
            }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { organizationId: string; serviceId: string } } & {
              json: ServiceScalingPatchRequest
            }
            output: {
              status?: number | undefined
              error?: string | undefined
              requestId?: string | undefined
            }
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/v1/organizations/:organizationId/services/:serviceId/replicaScaling': {
      $patch:
        | {
            input: { param: { organizationId: string; serviceId: string } } & {
              json: ServiceReplicaScalingPatchRequest
            }
            output: {
              status?: number | undefined
              requestId?: string | undefined
              result?: ServiceScalingPatchResponse | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { organizationId: string; serviceId: string } } & {
              json: ServiceReplicaScalingPatchRequest
            }
            output: {
              status?: number | undefined
              error?: string | undefined
              requestId?: string | undefined
            }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { organizationId: string; serviceId: string } } & {
              json: ServiceReplicaScalingPatchRequest
            }
            output: {
              status?: number | undefined
              error?: string | undefined
              requestId?: string | undefined
            }
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/v1/organizations/:organizationId/services/:serviceId/password': {
      $patch:
        | {
            input: { param: { organizationId: string; serviceId: string } } & {
              json: ServicePasswordPatchRequest
            }
            output: {
              status?: number | undefined
              requestId?: string | undefined
              result?: ServicePasswordPatchResponse | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { organizationId: string; serviceId: string } } & {
              json: ServicePasswordPatchRequest
            }
            output: {
              status?: number | undefined
              error?: string | undefined
              requestId?: string | undefined
            }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { organizationId: string; serviceId: string } } & {
              json: ServicePasswordPatchRequest
            }
            output: {
              status?: number | undefined
              error?: string | undefined
              requestId?: string | undefined
            }
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/v1/organizations/:organizationId/services/:serviceId/privateEndpoint': {
      $post:
        | {
            input: { param: { organizationId: string; serviceId: string } } & {
              json: ServicPrivateEndpointePostRequest
            }
            output: {
              status?: number | undefined
              requestId?: string | undefined
              result?: InstancePrivateEndpoint | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { organizationId: string; serviceId: string } } & {
              json: ServicPrivateEndpointePostRequest
            }
            output: {
              status?: number | undefined
              error?: string | undefined
              requestId?: string | undefined
            }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { organizationId: string; serviceId: string } } & {
              json: ServicPrivateEndpointePostRequest
            }
            output: {
              status?: number | undefined
              error?: string | undefined
              requestId?: string | undefined
            }
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/v1/organizations/:organizationId/services/:serviceId/prometheus': {
      $get:
        | {
            input: { param: { organizationId: string; serviceId: string } } & {
              query: { filtered_metrics?: string | undefined }
            }
            output: string
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { organizationId: string; serviceId: string } } & {
              query: { filtered_metrics?: string | undefined }
            }
            output: {
              status?: number | undefined
              error?: string | undefined
              requestId?: string | undefined
            }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { organizationId: string; serviceId: string } } & {
              query: { filtered_metrics?: string | undefined }
            }
            output: {
              status?: number | undefined
              error?: string | undefined
              requestId?: string | undefined
            }
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/v1/organizations/:organizationId/services/:serviceId/scalingSchedule': {
      $get:
        | {
            input: { param: { organizationId: string; serviceId: string } }
            output: {
              status?: number | undefined
              requestId?: string | undefined
              result?: ScalingSchedule | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { organizationId: string; serviceId: string } }
            output: {
              status?: number | undefined
              error?: string | undefined
              requestId?: string | undefined
            }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { organizationId: string; serviceId: string } }
            output: {
              status?: number | undefined
              error?: string | undefined
              requestId?: string | undefined
            }
            outputFormat: 'json'
            status: 500
          }
      $post:
        | {
            input: { param: { organizationId: string; serviceId: string } } & {
              json: ScalingSchedulePostRequest
            }
            output: {
              status?: number | undefined
              requestId?: string | undefined
              result?: ScalingSchedule | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { organizationId: string; serviceId: string } } & {
              json: ScalingSchedulePostRequest
            }
            output: {
              status?: number | undefined
              error?: string | undefined
              requestId?: string | undefined
            }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { organizationId: string; serviceId: string } } & {
              json: ScalingSchedulePostRequest
            }
            output: {
              status?: number | undefined
              error?: string | undefined
              requestId?: string | undefined
            }
            outputFormat: 'json'
            status: 500
          }
      $delete:
        | {
            input: { param: { organizationId: string; serviceId: string } }
            output: { status?: number | undefined; requestId?: string | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { organizationId: string; serviceId: string } }
            output: {
              status?: number | undefined
              error?: string | undefined
              requestId?: string | undefined
            }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { organizationId: string; serviceId: string } }
            output: {
              status?: number | undefined
              error?: string | undefined
              requestId?: string | undefined
            }
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/v1/organizations/:organizationId/services/:serviceId/upgradeWindow': {
      $get:
        | {
            input: { param: { organizationId: string; serviceId: string } }
            output: {
              status?: number | undefined
              requestId?: string | undefined
              result?: UpgradeWindow | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { organizationId: string; serviceId: string } }
            output: {
              status?: number | undefined
              error?: string | undefined
              requestId?: string | undefined
            }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { organizationId: string; serviceId: string } }
            output: {
              status?: number | undefined
              error?: string | undefined
              requestId?: string | undefined
            }
            outputFormat: 'json'
            status: 500
          }
      $put:
        | {
            input: { param: { organizationId: string; serviceId: string } } & {
              json: UpgradeWindowPutRequest
            }
            output: {
              status?: number | undefined
              requestId?: string | undefined
              result?: UpgradeWindow | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { organizationId: string; serviceId: string } } & {
              json: UpgradeWindowPutRequest
            }
            output: {
              status?: number | undefined
              error?: string | undefined
              requestId?: string | undefined
            }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { organizationId: string; serviceId: string } } & {
              json: UpgradeWindowPutRequest
            }
            output: {
              status?: number | undefined
              error?: string | undefined
              requestId?: string | undefined
            }
            outputFormat: 'json'
            status: 500
          }
      $delete:
        | {
            input: { param: { organizationId: string; serviceId: string } }
            output: { status?: number | undefined; requestId?: string | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { organizationId: string; serviceId: string } }
            output: {
              status?: number | undefined
              error?: string | undefined
              requestId?: string | undefined
            }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { organizationId: string; serviceId: string } }
            output: {
              status?: number | undefined
              error?: string | undefined
              requestId?: string | undefined
            }
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/v1/organizations/:organizationId/services/:serviceId/jwtProviders': {
      $get:
        | {
            input: { param: { organizationId: string; serviceId: string } }
            output: {
              status?: number | undefined
              requestId?: string | undefined
              result?: JwtProvider[] | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { organizationId: string; serviceId: string } }
            output: {
              status?: number | undefined
              error?: string | undefined
              requestId?: string | undefined
            }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { organizationId: string; serviceId: string } }
            output: {
              status?: number | undefined
              error?: string | undefined
              requestId?: string | undefined
            }
            outputFormat: 'json'
            status: 500
          }
      $post:
        | {
            input: { param: { organizationId: string; serviceId: string } } & {
              json: JwtProviderPostRequest
            }
            output: {
              status?: number | undefined
              requestId?: string | undefined
              result?: JwtProvider | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { organizationId: string; serviceId: string } } & {
              json: JwtProviderPostRequest
            }
            output: {
              status?: number | undefined
              error?: string | undefined
              requestId?: string | undefined
            }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { organizationId: string; serviceId: string } } & {
              json: JwtProviderPostRequest
            }
            output: {
              status?: number | undefined
              error?: string | undefined
              requestId?: string | undefined
            }
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/v1/organizations/:organizationId/services/:serviceId/jwtProviders/:jwtProviderName': {
      $get:
        | {
            input: { param: { organizationId: string; serviceId: string; jwtProviderName: string } }
            output: {
              status?: number | undefined
              requestId?: string | undefined
              result?: JwtProvider | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { organizationId: string; serviceId: string; jwtProviderName: string } }
            output: {
              status?: number | undefined
              error?: string | undefined
              requestId?: string | undefined
            }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { organizationId: string; serviceId: string; jwtProviderName: string } }
            output: {
              status?: number | undefined
              error?: string | undefined
              requestId?: string | undefined
            }
            outputFormat: 'json'
            status: 500
          }
      $put:
        | {
            input: {
              param: { organizationId: string; serviceId: string; jwtProviderName: string }
            } & { json: JwtProviderPutRequest }
            output: {
              status?: number | undefined
              requestId?: string | undefined
              result?: JwtProvider | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              param: { organizationId: string; serviceId: string; jwtProviderName: string }
            } & { json: JwtProviderPutRequest }
            output: {
              status?: number | undefined
              error?: string | undefined
              requestId?: string | undefined
            }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              param: { organizationId: string; serviceId: string; jwtProviderName: string }
            } & { json: JwtProviderPutRequest }
            output: {
              status?: number | undefined
              error?: string | undefined
              requestId?: string | undefined
            }
            outputFormat: 'json'
            status: 500
          }
      $delete:
        | {
            input: { param: { organizationId: string; serviceId: string; jwtProviderName: string } }
            output: { status?: number | undefined; requestId?: string | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { organizationId: string; serviceId: string; jwtProviderName: string } }
            output: {
              status?: number | undefined
              error?: string | undefined
              requestId?: string | undefined
            }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { organizationId: string; serviceId: string; jwtProviderName: string } }
            output: {
              status?: number | undefined
              error?: string | undefined
              requestId?: string | undefined
            }
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/v1/organizations/:organizationId/services/:serviceId/clickhouseSettings': {
      $get:
        | {
            input: { param: { organizationId: string; serviceId: string } }
            output: {
              status?: number | undefined
              requestId?: string | undefined
              result?: ServiceClickhouseSettingsList | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { organizationId: string; serviceId: string } }
            output: {
              status?: number | undefined
              error?: string | undefined
              requestId?: string | undefined
            }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { organizationId: string; serviceId: string } }
            output: {
              status?: number | undefined
              error?: string | undefined
              requestId?: string | undefined
            }
            outputFormat: 'json'
            status: 500
          }
      $patch:
        | {
            input: { param: { organizationId: string; serviceId: string } } & {
              json: ServiceClickhouseSettingsPatchRequest
            }
            output: {
              status?: number | undefined
              requestId?: string | undefined
              result?: ServiceClickhouseSettingsPatchResponse | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { organizationId: string; serviceId: string } } & {
              json: ServiceClickhouseSettingsPatchRequest
            }
            output: {
              status?: number | undefined
              error?: string | undefined
              requestId?: string | undefined
            }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { organizationId: string; serviceId: string } } & {
              json: ServiceClickhouseSettingsPatchRequest
            }
            output: {
              status?: number | undefined
              error?: string | undefined
              requestId?: string | undefined
            }
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/v1/organizations/:organizationId/services/:serviceId/clickhouseSettings/schema': {
      $get:
        | {
            input: { param: { organizationId: string; serviceId: string } }
            output: {
              status?: number | undefined
              requestId?: string | undefined
              result?: ServiceClickhouseSettingsSchema | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { organizationId: string; serviceId: string } }
            output: {
              status?: number | undefined
              error?: string | undefined
              requestId?: string | undefined
            }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { organizationId: string; serviceId: string } }
            output: {
              status?: number | undefined
              error?: string | undefined
              requestId?: string | undefined
            }
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/v1/organizations/:organizationId/services/:serviceId/clickhouseSettings/:settingName': {
      $get:
        | {
            input: { param: { organizationId: string; serviceId: string; settingName: string } }
            output: {
              status?: number | undefined
              requestId?: string | undefined
              result?: ServiceClickhouseSetting | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { organizationId: string; serviceId: string; settingName: string } }
            output: {
              status?: number | undefined
              error?: string | undefined
              requestId?: string | undefined
            }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { organizationId: string; serviceId: string; settingName: string } }
            output: {
              status?: number | undefined
              error?: string | undefined
              requestId?: string | undefined
            }
            outputFormat: 'json'
            status: 500
          }
      $delete:
        | {
            input: { param: { organizationId: string; serviceId: string; settingName: string } }
            output: {
              status?: number | undefined
              requestId?: string | undefined
              result?: ServiceClickhouseSettingDeleteResponse | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { organizationId: string; serviceId: string; settingName: string } }
            output: {
              status?: number | undefined
              error?: string | undefined
              requestId?: string | undefined
            }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { organizationId: string; serviceId: string; settingName: string } }
            output: {
              status?: number | undefined
              error?: string | undefined
              requestId?: string | undefined
            }
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/v1/organizations/:organizationId/services/:serviceId/backups': {
      $get:
        | {
            input: { param: { organizationId: string; serviceId: string } }
            output: {
              status?: number | undefined
              requestId?: string | undefined
              result?: Backup[] | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { organizationId: string; serviceId: string } }
            output: {
              status?: number | undefined
              error?: string | undefined
              requestId?: string | undefined
            }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { organizationId: string; serviceId: string } }
            output: {
              status?: number | undefined
              error?: string | undefined
              requestId?: string | undefined
            }
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/v1/organizations/:organizationId/services/:serviceId/backups/:backupId': {
      $get:
        | {
            input: { param: { organizationId: string; serviceId: string; backupId: string } }
            output: {
              status?: number | undefined
              requestId?: string | undefined
              result?: Backup | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { organizationId: string; serviceId: string; backupId: string } }
            output: {
              status?: number | undefined
              error?: string | undefined
              requestId?: string | undefined
            }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { organizationId: string; serviceId: string; backupId: string } }
            output: {
              status?: number | undefined
              error?: string | undefined
              requestId?: string | undefined
            }
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/v1/organizations/:organizationId/services/:serviceId/snapshots': {
      $get:
        | {
            input: { param: { organizationId: string; serviceId: string } } & {
              query: { limit?: number | undefined; cursor?: string | undefined }
            }
            output: {
              status?: number | undefined
              requestId?: string | undefined
              result?: Snapshot[] | undefined
              limit?: number | undefined
              totalCount?: (number | null) | undefined
              nextCursor?: (string | null) | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { organizationId: string; serviceId: string } } & {
              query: { limit?: number | undefined; cursor?: string | undefined }
            }
            output: {
              status?: number | undefined
              error?: string | undefined
              requestId?: string | undefined
            }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { organizationId: string; serviceId: string } } & {
              query: { limit?: number | undefined; cursor?: string | undefined }
            }
            output: {
              status?: number | undefined
              error?: string | undefined
              requestId?: string | undefined
            }
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/v1/organizations/:organizationId/services/:serviceId/snapshots/:snapshotId': {
      $get:
        | {
            input: { param: { organizationId: string; serviceId: string; snapshotId: string } }
            output: {
              status?: number | undefined
              requestId?: string | undefined
              result?: Snapshot | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { organizationId: string; serviceId: string; snapshotId: string } }
            output: {
              status?: number | undefined
              error?: string | undefined
              requestId?: string | undefined
            }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { organizationId: string; serviceId: string; snapshotId: string } }
            output: {
              status?: number | undefined
              error?: string | undefined
              requestId?: string | undefined
            }
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/v1/organizations/:organizationId/services/:serviceId/backupConfiguration': {
      $get:
        | {
            input: { param: { organizationId: string; serviceId: string } }
            output: {
              status?: number | undefined
              requestId?: string | undefined
              result?: BackupConfiguration | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { organizationId: string; serviceId: string } }
            output: {
              status?: number | undefined
              error?: string | undefined
              requestId?: string | undefined
            }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { organizationId: string; serviceId: string } }
            output: {
              status?: number | undefined
              error?: string | undefined
              requestId?: string | undefined
            }
            outputFormat: 'json'
            status: 500
          }
      $patch:
        | {
            input: { param: { organizationId: string; serviceId: string } } & {
              json: BackupConfigurationPatchRequest
            }
            output: {
              status?: number | undefined
              requestId?: string | undefined
              result?: BackupConfiguration | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { organizationId: string; serviceId: string } } & {
              json: BackupConfigurationPatchRequest
            }
            output: {
              status?: number | undefined
              error?: string | undefined
              requestId?: string | undefined
            }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { organizationId: string; serviceId: string } } & {
              json: BackupConfigurationPatchRequest
            }
            output: {
              status?: number | undefined
              error?: string | undefined
              requestId?: string | undefined
            }
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/v1/organizations/:organizationId/services/:serviceId/snapshotConfiguration': {
      $get:
        | {
            input: { param: { organizationId: string; serviceId: string } }
            output: {
              status?: number | undefined
              requestId?: string | undefined
              result?: SnapshotConfiguration | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { organizationId: string; serviceId: string } }
            output: {
              status?: number | undefined
              error?: string | undefined
              requestId?: string | undefined
            }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { organizationId: string; serviceId: string } }
            output: {
              status?: number | undefined
              error?: string | undefined
              requestId?: string | undefined
            }
            outputFormat: 'json'
            status: 500
          }
      $patch:
        | {
            input: { param: { organizationId: string; serviceId: string } } & {
              json: SnapshotConfigurationPatchRequest
            }
            output: {
              status?: number | undefined
              requestId?: string | undefined
              result?: SnapshotConfiguration | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { organizationId: string; serviceId: string } } & {
              json: SnapshotConfigurationPatchRequest
            }
            output: {
              status?: number | undefined
              error?: string | undefined
              requestId?: string | undefined
            }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { organizationId: string; serviceId: string } } & {
              json: SnapshotConfigurationPatchRequest
            }
            output: {
              status?: number | undefined
              error?: string | undefined
              requestId?: string | undefined
            }
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/v1/organizations/:organizationId/services/:serviceId/replicaAwareRouting': {
      $get:
        | {
            input: { param: { organizationId: string; serviceId: string } }
            output: {
              status?: number | undefined
              requestId?: string | undefined
              result?: ReplicaAwareRouting | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { organizationId: string; serviceId: string } }
            output: {
              status?: number | undefined
              error?: string | undefined
              requestId?: string | undefined
            }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { organizationId: string; serviceId: string } }
            output: {
              status?: number | undefined
              error?: string | undefined
              requestId?: string | undefined
            }
            outputFormat: 'json'
            status: 500
          }
      $patch:
        | {
            input: { param: { organizationId: string; serviceId: string } } & {
              json: ReplicaAwareRoutingPatchRequest
            }
            output: {
              status?: number | undefined
              requestId?: string | undefined
              result?: ReplicaAwareRouting | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { organizationId: string; serviceId: string } } & {
              json: ReplicaAwareRoutingPatchRequest
            }
            output: {
              status?: number | undefined
              error?: string | undefined
              requestId?: string | undefined
            }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { organizationId: string; serviceId: string } } & {
              json: ReplicaAwareRoutingPatchRequest
            }
            output: {
              status?: number | undefined
              error?: string | undefined
              requestId?: string | undefined
            }
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/v1/organizations/:organizationId/services/:serviceId/backupBucket': {
      $get:
        | {
            input: { param: { organizationId: string; serviceId: string } }
            output: {
              status?: number | undefined
              requestId?: string | undefined
              result?: BackupBucket | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { organizationId: string; serviceId: string } }
            output: {
              status?: number | undefined
              error?: string | undefined
              requestId?: string | undefined
            }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { organizationId: string; serviceId: string } }
            output: {
              status?: number | undefined
              error?: string | undefined
              requestId?: string | undefined
            }
            outputFormat: 'json'
            status: 500
          }
      $post:
        | {
            input: { param: { organizationId: string; serviceId: string } } & {
              json: BackupBucketPostRequest
            }
            output: {
              status?: number | undefined
              requestId?: string | undefined
              result?: BackupBucket | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { organizationId: string; serviceId: string } } & {
              json: BackupBucketPostRequest
            }
            output: {
              status?: number | undefined
              error?: string | undefined
              requestId?: string | undefined
            }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { organizationId: string; serviceId: string } } & {
              json: BackupBucketPostRequest
            }
            output: {
              status?: number | undefined
              error?: string | undefined
              requestId?: string | undefined
            }
            outputFormat: 'json'
            status: 500
          }
      $patch:
        | {
            input: { param: { organizationId: string; serviceId: string } } & {
              json: BackupBucketPatchRequest
            }
            output: {
              status?: number | undefined
              requestId?: string | undefined
              result?: BackupBucket | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { organizationId: string; serviceId: string } } & {
              json: BackupBucketPatchRequest
            }
            output: {
              status?: number | undefined
              error?: string | undefined
              requestId?: string | undefined
            }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { organizationId: string; serviceId: string } } & {
              json: BackupBucketPatchRequest
            }
            output: {
              status?: number | undefined
              error?: string | undefined
              requestId?: string | undefined
            }
            outputFormat: 'json'
            status: 500
          }
      $delete:
        | {
            input: { param: { organizationId: string; serviceId: string } }
            output: { status?: number | undefined; requestId?: string | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { organizationId: string; serviceId: string } }
            output: {
              status?: number | undefined
              error?: string | undefined
              requestId?: string | undefined
            }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { organizationId: string; serviceId: string } }
            output: {
              status?: number | undefined
              error?: string | undefined
              requestId?: string | undefined
            }
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/v1/organizations/:organizationId/keys': {
      $get:
        | {
            input: { param: { organizationId: string } } & {
              query: { limit?: number | undefined; cursor?: string | undefined }
            }
            output: {
              status?: number | undefined
              requestId?: string | undefined
              result?: ApiKey[] | undefined
              limit?: number | undefined
              totalCount?: (number | null) | undefined
              nextCursor?: (string | null) | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { organizationId: string } } & {
              query: { limit?: number | undefined; cursor?: string | undefined }
            }
            output: {
              status?: number | undefined
              error?: string | undefined
              requestId?: string | undefined
            }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { organizationId: string } } & {
              query: { limit?: number | undefined; cursor?: string | undefined }
            }
            output: {
              status?: number | undefined
              error?: string | undefined
              requestId?: string | undefined
            }
            outputFormat: 'json'
            status: 500
          }
      $post:
        | {
            input: { param: { organizationId: string } } & { json: ApiKeyPostRequest }
            output: {
              status?: number | undefined
              requestId?: string | undefined
              result?: ApiKeyPostResponse | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { organizationId: string } } & { json: ApiKeyPostRequest }
            output: {
              status?: number | undefined
              error?: string | undefined
              requestId?: string | undefined
            }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { organizationId: string } } & { json: ApiKeyPostRequest }
            output: {
              status?: number | undefined
              error?: string | undefined
              requestId?: string | undefined
            }
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/v1/organizations/:organizationId/keys/:keyId': {
      $get:
        | {
            input: { param: { organizationId: string; keyId: string } }
            output: {
              status?: number | undefined
              requestId?: string | undefined
              result?: ApiKey | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { organizationId: string; keyId: string } }
            output: {
              status?: number | undefined
              error?: string | undefined
              requestId?: string | undefined
            }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { organizationId: string; keyId: string } }
            output: {
              status?: number | undefined
              error?: string | undefined
              requestId?: string | undefined
            }
            outputFormat: 'json'
            status: 500
          }
      $patch:
        | {
            input: { param: { organizationId: string; keyId: string } } & {
              json: ApiKeyPatchRequest
            }
            output: {
              status?: number | undefined
              requestId?: string | undefined
              result?: ApiKey | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { organizationId: string; keyId: string } } & {
              json: ApiKeyPatchRequest
            }
            output: {
              status?: number | undefined
              error?: string | undefined
              requestId?: string | undefined
            }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { organizationId: string; keyId: string } } & {
              json: ApiKeyPatchRequest
            }
            output: {
              status?: number | undefined
              error?: string | undefined
              requestId?: string | undefined
            }
            outputFormat: 'json'
            status: 500
          }
      $delete:
        | {
            input: { param: { organizationId: string; keyId: string } }
            output: { status?: number | undefined; requestId?: string | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { organizationId: string; keyId: string } }
            output: {
              status?: number | undefined
              error?: string | undefined
              requestId?: string | undefined
            }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { organizationId: string; keyId: string } }
            output: {
              status?: number | undefined
              error?: string | undefined
              requestId?: string | undefined
            }
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/v1/organizations/:organizationId/members': {
      $get:
        | {
            input: { param: { organizationId: string } }
            output: {
              status?: number | undefined
              requestId?: string | undefined
              result?: Member[] | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { organizationId: string } }
            output: {
              status?: number | undefined
              error?: string | undefined
              requestId?: string | undefined
            }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { organizationId: string } }
            output: {
              status?: number | undefined
              error?: string | undefined
              requestId?: string | undefined
            }
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/v1/organizations/:organizationId/members/:userId': {
      $get:
        | {
            input: { param: { organizationId: string; userId: string } }
            output: {
              status?: number | undefined
              requestId?: string | undefined
              result?: Member | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { organizationId: string; userId: string } }
            output: {
              status?: number | undefined
              error?: string | undefined
              requestId?: string | undefined
            }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { organizationId: string; userId: string } }
            output: {
              status?: number | undefined
              error?: string | undefined
              requestId?: string | undefined
            }
            outputFormat: 'json'
            status: 500
          }
      $patch:
        | {
            input: { param: { organizationId: string; userId: string } } & {
              json: MemberPatchRequest
            }
            output: {
              status?: number | undefined
              requestId?: string | undefined
              result?: Member | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { organizationId: string; userId: string } } & {
              json: MemberPatchRequest
            }
            output: {
              status?: number | undefined
              error?: string | undefined
              requestId?: string | undefined
            }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { organizationId: string; userId: string } } & {
              json: MemberPatchRequest
            }
            output: {
              status?: number | undefined
              error?: string | undefined
              requestId?: string | undefined
            }
            outputFormat: 'json'
            status: 500
          }
      $delete:
        | {
            input: { param: { organizationId: string; userId: string } }
            output: { status?: number | undefined; requestId?: string | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { organizationId: string; userId: string } }
            output: {
              status?: number | undefined
              error?: string | undefined
              requestId?: string | undefined
            }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { organizationId: string; userId: string } }
            output: {
              status?: number | undefined
              error?: string | undefined
              requestId?: string | undefined
            }
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/v1/organizations/:organizationId/invitations': {
      $get:
        | {
            input: { param: { organizationId: string } }
            output: {
              status?: number | undefined
              requestId?: string | undefined
              result?: Invitation[] | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { organizationId: string } }
            output: {
              status?: number | undefined
              error?: string | undefined
              requestId?: string | undefined
            }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { organizationId: string } }
            output: {
              status?: number | undefined
              error?: string | undefined
              requestId?: string | undefined
            }
            outputFormat: 'json'
            status: 500
          }
      $post:
        | {
            input: { param: { organizationId: string } } & { json: InvitationPostRequest }
            output: {
              status?: number | undefined
              requestId?: string | undefined
              result?: Invitation | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { organizationId: string } } & { json: InvitationPostRequest }
            output: {
              status?: number | undefined
              error?: string | undefined
              requestId?: string | undefined
            }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { organizationId: string } } & { json: InvitationPostRequest }
            output: {
              status?: number | undefined
              error?: string | undefined
              requestId?: string | undefined
            }
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/v1/organizations/:organizationId/invitations/:invitationId': {
      $get:
        | {
            input: { param: { organizationId: string; invitationId: string } }
            output: {
              status?: number | undefined
              requestId?: string | undefined
              result?: Invitation | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { organizationId: string; invitationId: string } }
            output: {
              status?: number | undefined
              error?: string | undefined
              requestId?: string | undefined
            }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { organizationId: string; invitationId: string } }
            output: {
              status?: number | undefined
              error?: string | undefined
              requestId?: string | undefined
            }
            outputFormat: 'json'
            status: 500
          }
      $delete:
        | {
            input: { param: { organizationId: string; invitationId: string } }
            output: { status?: number | undefined; requestId?: string | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { organizationId: string; invitationId: string } }
            output: {
              status?: number | undefined
              error?: string | undefined
              requestId?: string | undefined
            }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { organizationId: string; invitationId: string } }
            output: {
              status?: number | undefined
              error?: string | undefined
              requestId?: string | undefined
            }
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/v1/organizations/:organizationId/activities': {
      $get:
        | {
            input: { param: { organizationId: string } } & {
              query: { from_date?: string | undefined; to_date?: string | undefined }
            }
            output: {
              status?: number | undefined
              requestId?: string | undefined
              result?: Activity[] | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { organizationId: string } } & {
              query: { from_date?: string | undefined; to_date?: string | undefined }
            }
            output: {
              status?: number | undefined
              error?: string | undefined
              requestId?: string | undefined
            }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { organizationId: string } } & {
              query: { from_date?: string | undefined; to_date?: string | undefined }
            }
            output: {
              status?: number | undefined
              error?: string | undefined
              requestId?: string | undefined
            }
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/v1/organizations/:organizationId/activities/:activityId': {
      $get:
        | {
            input: { param: { organizationId: string; activityId: string } }
            output: {
              status?: number | undefined
              requestId?: string | undefined
              result?: Activity | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { organizationId: string; activityId: string } }
            output: {
              status?: number | undefined
              error?: string | undefined
              requestId?: string | undefined
            }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { organizationId: string; activityId: string } }
            output: {
              status?: number | undefined
              error?: string | undefined
              requestId?: string | undefined
            }
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/v1/organizations/:organizationId/notifications': {
      $get:
        | {
            input: { param: { organizationId: string } } & {
              query: {
                limit?: number | undefined
                cursor?: string | undefined
                severity?: string | undefined
                type?: string | undefined
                resource_id?: string | undefined
                resource_type?: string | undefined
                from_date?: string | undefined
                to_date?: string | undefined
              }
            }
            output: {
              status?: number | undefined
              requestId?: string | undefined
              result?: Notification[] | undefined
              limit?: number | undefined
              nextCursor?: (string | null) | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { organizationId: string } } & {
              query: {
                limit?: number | undefined
                cursor?: string | undefined
                severity?: string | undefined
                type?: string | undefined
                resource_id?: string | undefined
                resource_type?: string | undefined
                from_date?: string | undefined
                to_date?: string | undefined
              }
            }
            output: {
              status?: number | undefined
              error?: string | undefined
              requestId?: string | undefined
            }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { organizationId: string } } & {
              query: {
                limit?: number | undefined
                cursor?: string | undefined
                severity?: string | undefined
                type?: string | undefined
                resource_id?: string | undefined
                resource_type?: string | undefined
                from_date?: string | undefined
                to_date?: string | undefined
              }
            }
            output: {
              status?: number | undefined
              error?: string | undefined
              requestId?: string | undefined
            }
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/v1/organizations/:organizationId/notificationTypes': {
      $get:
        | {
            input: { param: { organizationId: string } }
            output: {
              status?: number | undefined
              requestId?: string | undefined
              result?: NotificationType[] | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { organizationId: string } }
            output: {
              status?: number | undefined
              error?: string | undefined
              requestId?: string | undefined
            }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { organizationId: string } }
            output: {
              status?: number | undefined
              error?: string | undefined
              requestId?: string | undefined
            }
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/v1/organizations/:organizationId/members/:userId/notificationSettings': {
      $get:
        | {
            input: { param: { organizationId: string; userId: string } } & {
              query: {
                limit?: number | undefined
                cursor?: string | undefined
                type?: string | undefined
                resource_id?: string | undefined
                resource_type?: string | undefined
              }
            }
            output: {
              status?: number | undefined
              requestId?: string | undefined
              result?: NotificationSetting[] | undefined
              limit?: number | undefined
              nextCursor?: (string | null) | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { organizationId: string; userId: string } } & {
              query: {
                limit?: number | undefined
                cursor?: string | undefined
                type?: string | undefined
                resource_id?: string | undefined
                resource_type?: string | undefined
              }
            }
            output: {
              status?: number | undefined
              error?: string | undefined
              requestId?: string | undefined
            }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { organizationId: string; userId: string } } & {
              query: {
                limit?: number | undefined
                cursor?: string | undefined
                type?: string | undefined
                resource_id?: string | undefined
                resource_type?: string | undefined
              }
            }
            output: {
              status?: number | undefined
              error?: string | undefined
              requestId?: string | undefined
            }
            outputFormat: 'json'
            status: 500
          }
      $patch:
        | {
            input: { param: { organizationId: string; userId: string } } & {
              json: MemberNotificationSettingsPatchRequest
            }
            output: {
              status?: number | undefined
              requestId?: string | undefined
              result?: MemberNotificationSettingsPatchResponse | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { organizationId: string; userId: string } } & {
              json: MemberNotificationSettingsPatchRequest
            }
            output: {
              status?: number | undefined
              error?: string | undefined
              requestId?: string | undefined
            }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { organizationId: string; userId: string } } & {
              json: MemberNotificationSettingsPatchRequest
            }
            output: {
              status?: number | undefined
              error?: string | undefined
              requestId?: string | undefined
            }
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/v1/organizations/:organizationId/usageCost': {
      $get:
        | {
            input: { param: { organizationId: string } } & {
              query: { from_date: string; to_date: string; filter?: string[] | undefined }
            }
            output: {
              status?: number | undefined
              requestId?: string | undefined
              result?: UsageCost | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { organizationId: string } } & {
              query: { from_date: string; to_date: string; filter?: string[] | undefined }
            }
            output: {
              status?: number | undefined
              error?: string | undefined
              requestId?: string | undefined
            }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { organizationId: string } } & {
              query: { from_date: string; to_date: string; filter?: string[] | undefined }
            }
            output: {
              status?: number | undefined
              error?: string | undefined
              requestId?: string | undefined
            }
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/v1/organizations/:organizationId/inferenceUsageCost': {
      $get:
        | {
            input: { param: { organizationId: string } } & {
              query: { from_date: string; to_date: string }
            }
            output: {
              status?: number | undefined
              requestId?: string | undefined
              result?: InferenceUsageCost | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { organizationId: string } } & {
              query: { from_date: string; to_date: string }
            }
            output: {
              status?: number | undefined
              error?: string | undefined
              requestId?: string | undefined
            }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { organizationId: string } } & {
              query: { from_date: string; to_date: string }
            }
            output: {
              status?: number | undefined
              error?: string | undefined
              requestId?: string | undefined
            }
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/v1/organizations/:organizationId/activeBalances': {
      $get:
        | {
            input: { param: { organizationId: string } } & {
              query: { limit?: number | undefined; offset?: number | undefined }
            }
            output: {
              status?: number | undefined
              requestId?: string | undefined
              result?: ActiveBalances | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { organizationId: string } } & {
              query: { limit?: number | undefined; offset?: number | undefined }
            }
            output: {
              status?: number | undefined
              error?: string | undefined
              requestId?: string | undefined
            }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { organizationId: string } } & {
              query: { limit?: number | undefined; offset?: number | undefined }
            }
            output: {
              status?: number | undefined
              error?: string | undefined
              requestId?: string | undefined
            }
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/v1/organizations/:organizationId/creditBalances': {
      $get:
        | {
            input: { param: { organizationId: string } }
            output: {
              status?: number | undefined
              requestId?: string | undefined
              result?: CreditBalances | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { organizationId: string } }
            output: {
              status?: number | undefined
              error?: string | undefined
              requestId?: string | undefined
            }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { organizationId: string } }
            output: {
              status?: number | undefined
              error?: string | undefined
              requestId?: string | undefined
            }
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/v1/organizations/:organizationId/services/:serviceId/clickpipes': {
      $get:
        | {
            input: { param: { organizationId: string; serviceId: string } } & {
              query: { limit?: number | undefined; cursor?: string | undefined }
            }
            output: {
              status?: number | undefined
              requestId?: string | undefined
              result?: ClickPipe[] | undefined
              limit?: number | undefined
              totalCount?: (number | null) | undefined
              nextCursor?: (string | null) | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { organizationId: string; serviceId: string } } & {
              query: { limit?: number | undefined; cursor?: string | undefined }
            }
            output: {
              status?: number | undefined
              error?: string | undefined
              requestId?: string | undefined
            }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { organizationId: string; serviceId: string } } & {
              query: { limit?: number | undefined; cursor?: string | undefined }
            }
            output: {
              status?: number | undefined
              error?: string | undefined
              requestId?: string | undefined
            }
            outputFormat: 'json'
            status: 500
          }
      $post:
        | {
            input: { param: { organizationId: string; serviceId: string } } & {
              json: ClickPipePostRequest
            }
            output: {
              status?: number | undefined
              requestId?: string | undefined
              result?: ClickPipe | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { organizationId: string; serviceId: string } } & {
              json: ClickPipePostRequest
            }
            output: {
              status?: number | undefined
              error?: string | undefined
              requestId?: string | undefined
            }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { organizationId: string; serviceId: string } } & {
              json: ClickPipePostRequest
            }
            output: {
              status?: number | undefined
              error?: string | undefined
              requestId?: string | undefined
            }
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/v1/organizations/:organizationId/services/:serviceId/clickpipes/context': {
      $get:
        | {
            input: { param: { organizationId: string; serviceId: string } }
            output: {
              status?: number | undefined
              requestId?: string | undefined
              result?: ClickPipesServiceContext | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { organizationId: string; serviceId: string } }
            output: {
              status?: number | undefined
              error?: string | undefined
              requestId?: string | undefined
            }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { organizationId: string; serviceId: string } }
            output: {
              status?: number | undefined
              error?: string | undefined
              requestId?: string | undefined
            }
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/v1/organizations/:organizationId/services/:serviceId/clickpipes/:clickPipeId': {
      $get:
        | {
            input: { param: { organizationId: string; serviceId: string; clickPipeId: string } }
            output: {
              status?: number | undefined
              requestId?: string | undefined
              result?: ClickPipe | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { organizationId: string; serviceId: string; clickPipeId: string } }
            output: {
              status?: number | undefined
              error?: string | undefined
              requestId?: string | undefined
            }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { organizationId: string; serviceId: string; clickPipeId: string } }
            output: {
              status?: number | undefined
              error?: string | undefined
              requestId?: string | undefined
            }
            outputFormat: 'json'
            status: 500
          }
      $patch:
        | {
            input: { param: { organizationId: string; serviceId: string; clickPipeId: string } } & {
              json: ClickPipePatchRequest
            }
            output: {
              status?: number | undefined
              requestId?: string | undefined
              result?: ClickPipe | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { organizationId: string; serviceId: string; clickPipeId: string } } & {
              json: ClickPipePatchRequest
            }
            output: {
              status?: number | undefined
              error?: string | undefined
              requestId?: string | undefined
            }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { organizationId: string; serviceId: string; clickPipeId: string } } & {
              json: ClickPipePatchRequest
            }
            output: {
              status?: number | undefined
              error?: string | undefined
              requestId?: string | undefined
            }
            outputFormat: 'json'
            status: 500
          }
      $delete:
        | {
            input: { param: { organizationId: string; serviceId: string; clickPipeId: string } }
            output: { status?: number | undefined; requestId?: string | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { organizationId: string; serviceId: string; clickPipeId: string } }
            output: {
              status?: number | undefined
              error?: string | undefined
              requestId?: string | undefined
            }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { organizationId: string; serviceId: string; clickPipeId: string } }
            output: {
              status?: number | undefined
              error?: string | undefined
              requestId?: string | undefined
            }
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/v1/organizations/:organizationId/services/:serviceId/clickpipes/:clickPipeId/settings': {
      $get:
        | {
            input: { param: { organizationId: string; serviceId: string; clickPipeId: string } }
            output: {
              status?: number | undefined
              requestId?: string | undefined
              result?: ClickPipeSettings | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { organizationId: string; serviceId: string; clickPipeId: string } }
            output: {
              status?: number | undefined
              error?: string | undefined
              requestId?: string | undefined
            }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { organizationId: string; serviceId: string; clickPipeId: string } }
            output: {
              status?: number | undefined
              error?: string | undefined
              requestId?: string | undefined
            }
            outputFormat: 'json'
            status: 500
          }
      $put:
        | {
            input: { param: { organizationId: string; serviceId: string; clickPipeId: string } } & {
              json: ClickPipeSettingsPutRequest
            }
            output: {
              status?: number | undefined
              requestId?: string | undefined
              result?: ClickPipeSettings | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { organizationId: string; serviceId: string; clickPipeId: string } } & {
              json: ClickPipeSettingsPutRequest
            }
            output: {
              status?: number | undefined
              error?: string | undefined
              requestId?: string | undefined
            }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { organizationId: string; serviceId: string; clickPipeId: string } } & {
              json: ClickPipeSettingsPutRequest
            }
            output: {
              status?: number | undefined
              error?: string | undefined
              requestId?: string | undefined
            }
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/v1/organizations/:organizationId/services/:serviceId/clickpipes/schemaDiscovery': {
      $post:
        | {
            input: { param: { organizationId: string; serviceId: string } } & {
              json: ClickPipeSchemaDiscoveryRequest
            }
            output: {
              status?: number | undefined
              requestId?: string | undefined
              result?: ClickPipeSchemaDiscoveryResponse | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { organizationId: string; serviceId: string } } & {
              json: ClickPipeSchemaDiscoveryRequest
            }
            output: {
              status?: number | undefined
              error?: string | undefined
              requestId?: string | undefined
            }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { organizationId: string; serviceId: string } } & {
              json: ClickPipeSchemaDiscoveryRequest
            }
            output: {
              status?: number | undefined
              error?: string | undefined
              requestId?: string | undefined
            }
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/v1/organizations/:organizationId/services/:serviceId/clickpipes/:clickPipeId/scaling': {
      $patch:
        | {
            input: { param: { organizationId: string; serviceId: string; clickPipeId: string } } & {
              json: ClickPipeScalingPatchRequest
            }
            output: {
              status?: number | undefined
              requestId?: string | undefined
              result?: ClickPipe | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { organizationId: string; serviceId: string; clickPipeId: string } } & {
              json: ClickPipeScalingPatchRequest
            }
            output: {
              status?: number | undefined
              error?: string | undefined
              requestId?: string | undefined
            }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { organizationId: string; serviceId: string; clickPipeId: string } } & {
              json: ClickPipeScalingPatchRequest
            }
            output: {
              status?: number | undefined
              error?: string | undefined
              requestId?: string | undefined
            }
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/v1/organizations/:organizationId/services/:serviceId/clickpipes/:clickPipeId/state': {
      $patch:
        | {
            input: { param: { organizationId: string; serviceId: string; clickPipeId: string } } & {
              json: ClickPipeStatePatchRequest
            }
            output: {
              status?: number | undefined
              requestId?: string | undefined
              result?: ClickPipe | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { organizationId: string; serviceId: string; clickPipeId: string } } & {
              json: ClickPipeStatePatchRequest
            }
            output: {
              status?: number | undefined
              error?: string | undefined
              requestId?: string | undefined
            }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { organizationId: string; serviceId: string; clickPipeId: string } } & {
              json: ClickPipeStatePatchRequest
            }
            output: {
              status?: number | undefined
              error?: string | undefined
              requestId?: string | undefined
            }
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/v1/organizations/:organizationId/services/:serviceId/clickpipesCdcScaling': {
      $get:
        | {
            input: { param: { organizationId: string; serviceId: string } }
            output: {
              status?: number | undefined
              requestId?: string | undefined
              result?: ClickPipesCdcScaling | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { organizationId: string; serviceId: string } }
            output: {
              status?: number | undefined
              error?: string | undefined
              requestId?: string | undefined
            }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { organizationId: string; serviceId: string } }
            output: {
              status?: number | undefined
              error?: string | undefined
              requestId?: string | undefined
            }
            outputFormat: 'json'
            status: 500
          }
      $patch:
        | {
            input: { param: { organizationId: string; serviceId: string } } & {
              json: ClickPipesCdcScalingPatchRequest
            }
            output: {
              status?: number | undefined
              requestId?: string | undefined
              result?: ClickPipesCdcScaling | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { organizationId: string; serviceId: string } } & {
              json: ClickPipesCdcScalingPatchRequest
            }
            output: {
              status?: number | undefined
              error?: string | undefined
              requestId?: string | undefined
            }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { organizationId: string; serviceId: string } } & {
              json: ClickPipesCdcScalingPatchRequest
            }
            output: {
              status?: number | undefined
              error?: string | undefined
              requestId?: string | undefined
            }
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/v1/organizations/:organizationId/services/:serviceId/clickstack/dashboards': {
      $get:
        | {
            input: { param: { organizationId: string; serviceId: string } }
            output: {
              status?: number | undefined
              requestId?: string | undefined
              result?: ClickStackDashboardResponse[] | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { organizationId: string; serviceId: string } }
            output: {
              status?: number | undefined
              error?: string | undefined
              requestId?: string | undefined
            }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { organizationId: string; serviceId: string } }
            output: {
              status?: number | undefined
              error?: string | undefined
              requestId?: string | undefined
            }
            outputFormat: 'json'
            status: 500
          }
      $post:
        | {
            input: { param: { organizationId: string; serviceId: string } } & {
              json: ClickStackCreateDashboardRequest
            }
            output: {
              status?: number | undefined
              requestId?: string | undefined
              result?: ClickStackDashboardResponse | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { organizationId: string; serviceId: string } } & {
              json: ClickStackCreateDashboardRequest
            }
            output: {
              status?: number | undefined
              error?: string | undefined
              requestId?: string | undefined
            }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { organizationId: string; serviceId: string } } & {
              json: ClickStackCreateDashboardRequest
            }
            output: {
              status?: number | undefined
              error?: string | undefined
              requestId?: string | undefined
            }
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/v1/organizations/:organizationId/services/:serviceId/clickstack/dashboards/:clickStackDashboardId': {
      $get:
        | {
            input: {
              param: { organizationId: string; serviceId: string; clickStackDashboardId: string }
            }
            output: {
              status?: number | undefined
              requestId?: string | undefined
              result?: ClickStackDashboardResponse | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              param: { organizationId: string; serviceId: string; clickStackDashboardId: string }
            }
            output: {
              status?: number | undefined
              error?: string | undefined
              requestId?: string | undefined
            }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              param: { organizationId: string; serviceId: string; clickStackDashboardId: string }
            }
            output: {
              status?: number | undefined
              error?: string | undefined
              requestId?: string | undefined
            }
            outputFormat: 'json'
            status: 500
          }
      $put:
        | {
            input: {
              param: { organizationId: string; serviceId: string; clickStackDashboardId: string }
            } & { json: ClickStackUpdateDashboardRequest }
            output: {
              status?: number | undefined
              requestId?: string | undefined
              result?: ClickStackDashboardResponse | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              param: { organizationId: string; serviceId: string; clickStackDashboardId: string }
            } & { json: ClickStackUpdateDashboardRequest }
            output: {
              status?: number | undefined
              error?: string | undefined
              requestId?: string | undefined
            }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              param: { organizationId: string; serviceId: string; clickStackDashboardId: string }
            } & { json: ClickStackUpdateDashboardRequest }
            output: {
              status?: number | undefined
              error?: string | undefined
              requestId?: string | undefined
            }
            outputFormat: 'json'
            status: 500
          }
      $delete:
        | {
            input: {
              param: { organizationId: string; serviceId: string; clickStackDashboardId: string }
            }
            output: { status?: number | undefined; requestId?: string | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              param: { organizationId: string; serviceId: string; clickStackDashboardId: string }
            }
            output: {
              status?: number | undefined
              error?: string | undefined
              requestId?: string | undefined
            }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              param: { organizationId: string; serviceId: string; clickStackDashboardId: string }
            }
            output: {
              status?: number | undefined
              error?: string | undefined
              requestId?: string | undefined
            }
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/v1/organizations/:organizationId/services/:serviceId/clickstack/dashboards/validate': {
      $post:
        | {
            input: { param: { organizationId: string; serviceId: string } } & {
              json: ClickStackCreateDashboardRequest
            }
            output: {
              status?: number | undefined
              requestId?: string | undefined
              result?: ClickStackValidateDashboardResponse | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { organizationId: string; serviceId: string } } & {
              json: ClickStackCreateDashboardRequest
            }
            output: {
              status?: number | undefined
              error?: string | undefined
              requestId?: string | undefined
            }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { organizationId: string; serviceId: string } } & {
              json: ClickStackCreateDashboardRequest
            }
            output: {
              status?: number | undefined
              error?: string | undefined
              requestId?: string | undefined
            }
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/v1/organizations/:organizationId/services/:serviceId/clickstack/alerts': {
      $get:
        | {
            input: { param: { organizationId: string; serviceId: string } } & {
              query: {
                limit?: number | undefined
                offset?: number | undefined
                tag?: string[] | undefined
                search?: string | undefined
                source?: ('saved_search' | 'tile' | 'inline')[] | undefined
                state?:
                  | ('ALERT' | 'OK' | 'INSUFFICIENT_DATA' | 'DISABLED' | 'PENDING')[]
                  | undefined
              }
            }
            output: {
              status?: number | undefined
              requestId?: string | undefined
              result?: ClickStackAlertResponse[] | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { organizationId: string; serviceId: string } } & {
              query: {
                limit?: number | undefined
                offset?: number | undefined
                tag?: string[] | undefined
                search?: string | undefined
                source?: ('saved_search' | 'tile' | 'inline')[] | undefined
                state?:
                  | ('ALERT' | 'OK' | 'INSUFFICIENT_DATA' | 'DISABLED' | 'PENDING')[]
                  | undefined
              }
            }
            output: {
              status?: number | undefined
              error?: string | undefined
              requestId?: string | undefined
            }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { organizationId: string; serviceId: string } } & {
              query: {
                limit?: number | undefined
                offset?: number | undefined
                tag?: string[] | undefined
                search?: string | undefined
                source?: ('saved_search' | 'tile' | 'inline')[] | undefined
                state?:
                  | ('ALERT' | 'OK' | 'INSUFFICIENT_DATA' | 'DISABLED' | 'PENDING')[]
                  | undefined
              }
            }
            output: {
              status?: number | undefined
              error?: string | undefined
              requestId?: string | undefined
            }
            outputFormat: 'json'
            status: 500
          }
      $post:
        | {
            input: { param: { organizationId: string; serviceId: string } } & {
              json: ClickStackCreateAlertRequest
            }
            output: {
              status?: number | undefined
              requestId?: string | undefined
              result?: ClickStackAlertResponse | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { organizationId: string; serviceId: string } } & {
              json: ClickStackCreateAlertRequest
            }
            output: {
              status?: number | undefined
              error?: string | undefined
              requestId?: string | undefined
            }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { organizationId: string; serviceId: string } } & {
              json: ClickStackCreateAlertRequest
            }
            output: {
              status?: number | undefined
              error?: string | undefined
              requestId?: string | undefined
            }
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/v1/organizations/:organizationId/services/:serviceId/clickstack/sources': {
      $get:
        | {
            input: { param: { organizationId: string; serviceId: string } }
            output: {
              status?: number | undefined
              requestId?: string | undefined
              result?: ClickStackSource[] | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { organizationId: string; serviceId: string } }
            output: {
              status?: number | undefined
              error?: string | undefined
              requestId?: string | undefined
            }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { organizationId: string; serviceId: string } }
            output: {
              status?: number | undefined
              error?: string | undefined
              requestId?: string | undefined
            }
            outputFormat: 'json'
            status: 500
          }
      $post:
        | {
            input: { param: { organizationId: string; serviceId: string } } & {
              json: ClickStackSource
            }
            output: {
              status?: number | undefined
              requestId?: string | undefined
              result?: ClickStackSource | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { organizationId: string; serviceId: string } } & {
              json: ClickStackSource
            }
            output: {
              status?: number | undefined
              error?: string | undefined
              requestId?: string | undefined
            }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { organizationId: string; serviceId: string } } & {
              json: ClickStackSource
            }
            output: {
              status?: number | undefined
              error?: string | undefined
              requestId?: string | undefined
            }
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/v1/organizations/:organizationId/services/:serviceId/clickstack/sources/:clickStackSourceId': {
      $get:
        | {
            input: {
              param: { organizationId: string; serviceId: string; clickStackSourceId: string }
            }
            output: {
              status?: number | undefined
              requestId?: string | undefined
              result?: ClickStackSource | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              param: { organizationId: string; serviceId: string; clickStackSourceId: string }
            }
            output: {
              status?: number | undefined
              error?: string | undefined
              requestId?: string | undefined
            }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              param: { organizationId: string; serviceId: string; clickStackSourceId: string }
            }
            output: {
              status?: number | undefined
              error?: string | undefined
              requestId?: string | undefined
            }
            outputFormat: 'json'
            status: 500
          }
      $put:
        | {
            input: {
              param: { organizationId: string; serviceId: string; clickStackSourceId: string }
            } & { json: ClickStackSource }
            output: {
              status?: number | undefined
              requestId?: string | undefined
              result?: ClickStackSource | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              param: { organizationId: string; serviceId: string; clickStackSourceId: string }
            } & { json: ClickStackSource }
            output: {
              status?: number | undefined
              error?: string | undefined
              requestId?: string | undefined
            }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              param: { organizationId: string; serviceId: string; clickStackSourceId: string }
            } & { json: ClickStackSource }
            output: {
              status?: number | undefined
              error?: string | undefined
              requestId?: string | undefined
            }
            outputFormat: 'json'
            status: 500
          }
      $delete:
        | {
            input: {
              param: { organizationId: string; serviceId: string; clickStackSourceId: string }
            }
            output: { status?: number | undefined; requestId?: string | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              param: { organizationId: string; serviceId: string; clickStackSourceId: string }
            }
            output: {
              status?: number | undefined
              error?: string | undefined
              requestId?: string | undefined
            }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              param: { organizationId: string; serviceId: string; clickStackSourceId: string }
            }
            output: {
              status?: number | undefined
              error?: string | undefined
              requestId?: string | undefined
            }
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/v1/organizations/:organizationId/services/:serviceId/clickstack/alerts/:clickStackAlertId': {
      $get:
        | {
            input: {
              param: { organizationId: string; serviceId: string; clickStackAlertId: string }
            }
            output: {
              status?: number | undefined
              requestId?: string | undefined
              result?: ClickStackAlertResponse | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              param: { organizationId: string; serviceId: string; clickStackAlertId: string }
            }
            output: {
              status?: number | undefined
              error?: string | undefined
              requestId?: string | undefined
            }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              param: { organizationId: string; serviceId: string; clickStackAlertId: string }
            }
            output: {
              status?: number | undefined
              error?: string | undefined
              requestId?: string | undefined
            }
            outputFormat: 'json'
            status: 500
          }
      $put:
        | {
            input: {
              param: { organizationId: string; serviceId: string; clickStackAlertId: string }
            } & { json: ClickStackUpdateAlertRequest }
            output: {
              status?: number | undefined
              requestId?: string | undefined
              result?: ClickStackAlertResponse | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              param: { organizationId: string; serviceId: string; clickStackAlertId: string }
            } & { json: ClickStackUpdateAlertRequest }
            output: {
              status?: number | undefined
              error?: string | undefined
              requestId?: string | undefined
            }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              param: { organizationId: string; serviceId: string; clickStackAlertId: string }
            } & { json: ClickStackUpdateAlertRequest }
            output: {
              status?: number | undefined
              error?: string | undefined
              requestId?: string | undefined
            }
            outputFormat: 'json'
            status: 500
          }
      $delete:
        | {
            input: {
              param: { organizationId: string; serviceId: string; clickStackAlertId: string }
            }
            output: { status?: number | undefined; requestId?: string | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              param: { organizationId: string; serviceId: string; clickStackAlertId: string }
            }
            output: {
              status?: number | undefined
              error?: string | undefined
              requestId?: string | undefined
            }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              param: { organizationId: string; serviceId: string; clickStackAlertId: string }
            }
            output: {
              status?: number | undefined
              error?: string | undefined
              requestId?: string | undefined
            }
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/v1/organizations/:organizationId/services/:serviceId/clickstack/alerts/:clickStackAlertId/silenced': {
      $post:
        | {
            input: {
              param: { organizationId: string; serviceId: string; clickStackAlertId: string }
            } & { json: ClickStackSilenceAlertRequest }
            output: {
              status?: number | undefined
              requestId?: string | undefined
              result?: ClickStackAlertResponse | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              param: { organizationId: string; serviceId: string; clickStackAlertId: string }
            } & { json: ClickStackSilenceAlertRequest }
            output: {
              status?: number | undefined
              error?: string | undefined
              requestId?: string | undefined
            }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              param: { organizationId: string; serviceId: string; clickStackAlertId: string }
            } & { json: ClickStackSilenceAlertRequest }
            output: {
              status?: number | undefined
              error?: string | undefined
              requestId?: string | undefined
            }
            outputFormat: 'json'
            status: 500
          }
      $delete:
        | {
            input: {
              param: { organizationId: string; serviceId: string; clickStackAlertId: string }
            }
            output: { status?: number | undefined; requestId?: string | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              param: { organizationId: string; serviceId: string; clickStackAlertId: string }
            }
            output: {
              status?: number | undefined
              error?: string | undefined
              requestId?: string | undefined
            }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              param: { organizationId: string; serviceId: string; clickStackAlertId: string }
            }
            output: {
              status?: number | undefined
              error?: string | undefined
              requestId?: string | undefined
            }
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/v1/organizations/:organizationId/services/:serviceId/clickstack/webhooks': {
      $get:
        | {
            input: { param: { organizationId: string; serviceId: string } } & {
              query: { limit?: number | undefined; offset?: number | undefined }
            }
            output: {
              status?: number | undefined
              requestId?: string | undefined
              result?: ClickStackWebhook[] | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { organizationId: string; serviceId: string } } & {
              query: { limit?: number | undefined; offset?: number | undefined }
            }
            output: {
              status?: number | undefined
              error?: string | undefined
              requestId?: string | undefined
            }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { organizationId: string; serviceId: string } } & {
              query: { limit?: number | undefined; offset?: number | undefined }
            }
            output: {
              status?: number | undefined
              error?: string | undefined
              requestId?: string | undefined
            }
            outputFormat: 'json'
            status: 500
          }
      $post:
        | {
            input: { param: { organizationId: string; serviceId: string } } & {
              json: ClickStackWebhookInput
            }
            output: {
              status?: number | undefined
              requestId?: string | undefined
              result?: ClickStackWebhook | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { organizationId: string; serviceId: string } } & {
              json: ClickStackWebhookInput
            }
            output: {
              status?: number | undefined
              error?: string | undefined
              requestId?: string | undefined
            }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { organizationId: string; serviceId: string } } & {
              json: ClickStackWebhookInput
            }
            output: {
              status?: number | undefined
              error?: string | undefined
              requestId?: string | undefined
            }
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/v1/organizations/:organizationId/services/:serviceId/clickstack/webhooks/validate': {
      $post:
        | {
            input: { param: { organizationId: string; serviceId: string } } & {
              json: ClickStackWebhookInput
            }
            output: {
              status?: number | undefined
              requestId?: string | undefined
              result?: ClickStackValidateWebhookResponse | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { organizationId: string; serviceId: string } } & {
              json: ClickStackWebhookInput
            }
            output: {
              status?: number | undefined
              error?: string | undefined
              requestId?: string | undefined
            }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { organizationId: string; serviceId: string } } & {
              json: ClickStackWebhookInput
            }
            output: {
              status?: number | undefined
              error?: string | undefined
              requestId?: string | undefined
            }
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/v1/organizations/:organizationId/services/:serviceId/clickstack/webhooks/:clickStackWebhookId': {
      $put:
        | {
            input: {
              param: { organizationId: string; serviceId: string; clickStackWebhookId: string }
            } & { json: ClickStackWebhookInput }
            output: {
              status?: number | undefined
              requestId?: string | undefined
              result?: ClickStackWebhook | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              param: { organizationId: string; serviceId: string; clickStackWebhookId: string }
            } & { json: ClickStackWebhookInput }
            output: {
              status?: number | undefined
              error?: string | undefined
              requestId?: string | undefined
            }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              param: { organizationId: string; serviceId: string; clickStackWebhookId: string }
            } & { json: ClickStackWebhookInput }
            output: {
              status?: number | undefined
              error?: string | undefined
              requestId?: string | undefined
            }
            outputFormat: 'json'
            status: 500
          }
      $delete:
        | {
            input: {
              param: { organizationId: string; serviceId: string; clickStackWebhookId: string }
            }
            output: { status?: number | undefined; requestId?: string | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              param: { organizationId: string; serviceId: string; clickStackWebhookId: string }
            }
            output: {
              status?: number | undefined
              error?: string | undefined
              requestId?: string | undefined
            }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              param: { organizationId: string; serviceId: string; clickStackWebhookId: string }
            }
            output: {
              status?: number | undefined
              error?: string | undefined
              requestId?: string | undefined
            }
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/v1/organizations/:organizationId/services/:serviceId/clickstack/roles': {
      $get:
        | {
            input: { param: { organizationId: string; serviceId: string } }
            output: {
              status?: number | undefined
              requestId?: string | undefined
              result?: ClickStackRole[] | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { organizationId: string; serviceId: string } }
            output: {
              status?: number | undefined
              error?: string | undefined
              requestId?: string | undefined
            }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { organizationId: string; serviceId: string } }
            output: {
              status?: number | undefined
              error?: string | undefined
              requestId?: string | undefined
            }
            outputFormat: 'json'
            status: 500
          }
      $post:
        | {
            input: { param: { organizationId: string; serviceId: string } } & {
              json: ClickStackCreateRoleRequest
            }
            output: {
              status?: number | undefined
              requestId?: string | undefined
              result?: ClickStackRole | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { organizationId: string; serviceId: string } } & {
              json: ClickStackCreateRoleRequest
            }
            output: {
              status?: number | undefined
              error?: string | undefined
              requestId?: string | undefined
            }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { organizationId: string; serviceId: string } } & {
              json: ClickStackCreateRoleRequest
            }
            output: {
              status?: number | undefined
              error?: string | undefined
              requestId?: string | undefined
            }
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/v1/organizations/:organizationId/services/:serviceId/clickstack/roles/:clickStackRoleId': {
      $get:
        | {
            input: {
              param: { organizationId: string; serviceId: string; clickStackRoleId: string }
            }
            output: {
              status?: number | undefined
              requestId?: string | undefined
              result?: ClickStackRole | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              param: { organizationId: string; serviceId: string; clickStackRoleId: string }
            }
            output: {
              status?: number | undefined
              error?: string | undefined
              requestId?: string | undefined
            }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              param: { organizationId: string; serviceId: string; clickStackRoleId: string }
            }
            output: {
              status?: number | undefined
              error?: string | undefined
              requestId?: string | undefined
            }
            outputFormat: 'json'
            status: 500
          }
      $put:
        | {
            input: {
              param: { organizationId: string; serviceId: string; clickStackRoleId: string }
            } & { json: ClickStackUpdateRoleRequest }
            output: {
              status?: number | undefined
              requestId?: string | undefined
              result?: ClickStackRole | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              param: { organizationId: string; serviceId: string; clickStackRoleId: string }
            } & { json: ClickStackUpdateRoleRequest }
            output: {
              status?: number | undefined
              error?: string | undefined
              requestId?: string | undefined
            }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              param: { organizationId: string; serviceId: string; clickStackRoleId: string }
            } & { json: ClickStackUpdateRoleRequest }
            output: {
              status?: number | undefined
              error?: string | undefined
              requestId?: string | undefined
            }
            outputFormat: 'json'
            status: 500
          }
      $delete:
        | {
            input: {
              param: { organizationId: string; serviceId: string; clickStackRoleId: string }
            }
            output: { status?: number | undefined; requestId?: string | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              param: { organizationId: string; serviceId: string; clickStackRoleId: string }
            }
            output: {
              status?: number | undefined
              error?: string | undefined
              requestId?: string | undefined
            }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              param: { organizationId: string; serviceId: string; clickStackRoleId: string }
            }
            output: {
              status?: number | undefined
              error?: string | undefined
              requestId?: string | undefined
            }
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/v1/organizations/:organizationId/services/:serviceId/clickstack/saved-searches': {
      $get:
        | {
            input: { param: { organizationId: string; serviceId: string } } & {
              query: { limit?: number | undefined; offset?: number | undefined }
            }
            output: {
              status?: number | undefined
              requestId?: string | undefined
              result?: ClickStackSavedSearch[] | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { organizationId: string; serviceId: string } } & {
              query: { limit?: number | undefined; offset?: number | undefined }
            }
            output: {
              status?: number | undefined
              error?: string | undefined
              requestId?: string | undefined
            }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { organizationId: string; serviceId: string } } & {
              query: { limit?: number | undefined; offset?: number | undefined }
            }
            output: {
              status?: number | undefined
              error?: string | undefined
              requestId?: string | undefined
            }
            outputFormat: 'json'
            status: 500
          }
      $post:
        | {
            input: { param: { organizationId: string; serviceId: string } } & {
              json: ClickStackSavedSearchInput
            }
            output: {
              status?: number | undefined
              requestId?: string | undefined
              result?: ClickStackSavedSearch | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { organizationId: string; serviceId: string } } & {
              json: ClickStackSavedSearchInput
            }
            output: {
              status?: number | undefined
              error?: string | undefined
              requestId?: string | undefined
            }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { organizationId: string; serviceId: string } } & {
              json: ClickStackSavedSearchInput
            }
            output: {
              status?: number | undefined
              error?: string | undefined
              requestId?: string | undefined
            }
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/v1/organizations/:organizationId/services/:serviceId/clickstack/saved-searches/:clickStackSavedSearchId': {
      $get:
        | {
            input: {
              param: { organizationId: string; serviceId: string; clickStackSavedSearchId: string }
            }
            output: {
              status?: number | undefined
              requestId?: string | undefined
              result?: ClickStackSavedSearch | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              param: { organizationId: string; serviceId: string; clickStackSavedSearchId: string }
            }
            output: {
              status?: number | undefined
              error?: string | undefined
              requestId?: string | undefined
            }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              param: { organizationId: string; serviceId: string; clickStackSavedSearchId: string }
            }
            output: {
              status?: number | undefined
              error?: string | undefined
              requestId?: string | undefined
            }
            outputFormat: 'json'
            status: 500
          }
      $put:
        | {
            input: {
              param: { organizationId: string; serviceId: string; clickStackSavedSearchId: string }
            } & { json: ClickStackSavedSearchInput }
            output: {
              status?: number | undefined
              requestId?: string | undefined
              result?: ClickStackSavedSearch | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              param: { organizationId: string; serviceId: string; clickStackSavedSearchId: string }
            } & { json: ClickStackSavedSearchInput }
            output: {
              status?: number | undefined
              error?: string | undefined
              requestId?: string | undefined
            }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              param: { organizationId: string; serviceId: string; clickStackSavedSearchId: string }
            } & { json: ClickStackSavedSearchInput }
            output: {
              status?: number | undefined
              error?: string | undefined
              requestId?: string | undefined
            }
            outputFormat: 'json'
            status: 500
          }
      $delete:
        | {
            input: {
              param: { organizationId: string; serviceId: string; clickStackSavedSearchId: string }
            }
            output: { status?: number | undefined; requestId?: string | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              param: { organizationId: string; serviceId: string; clickStackSavedSearchId: string }
            }
            output: {
              status?: number | undefined
              error?: string | undefined
              requestId?: string | undefined
            }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              param: { organizationId: string; serviceId: string; clickStackSavedSearchId: string }
            }
            output: {
              status?: number | undefined
              error?: string | undefined
              requestId?: string | undefined
            }
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/v1/organizations/:organizationId/postgres': {
      $post:
        | {
            input: { param: { organizationId: string } } & { json: PostgresServicePostRequest }
            output: {
              status?: number | undefined
              requestId?: string | undefined
              result?: PostgresService | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { organizationId: string } } & { json: PostgresServicePostRequest }
            output: {
              status?: number | undefined
              error?: string | undefined
              requestId?: string | undefined
            }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { organizationId: string } } & { json: PostgresServicePostRequest }
            output: {
              status?: number | undefined
              error?: string | undefined
              requestId?: string | undefined
            }
            outputFormat: 'json'
            status: 500
          }
      $get:
        | {
            input: { param: { organizationId: string } }
            output: {
              status?: number | undefined
              requestId?: string | undefined
              result?: PostgresServiceListItem[] | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { organizationId: string } }
            output: {
              status?: number | undefined
              error?: string | undefined
              requestId?: string | undefined
            }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { organizationId: string } }
            output: {
              status?: number | undefined
              error?: string | undefined
              requestId?: string | undefined
            }
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/v1/organizations/:organizationId/postgres/prometheus': {
      $get:
        | {
            input: { param: { organizationId: string } }
            output: string
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { organizationId: string } }
            output: {
              status?: number | undefined
              error?: string | undefined
              requestId?: string | undefined
            }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { organizationId: string } }
            output: {
              status?: number | undefined
              error?: string | undefined
              requestId?: string | undefined
            }
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/v1/organizations/:organizationId/postgres/:postgresId': {
      $get:
        | {
            input: { param: { organizationId: string; postgresId: string } }
            output: {
              status?: number | undefined
              requestId?: string | undefined
              result?: PostgresService | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { organizationId: string; postgresId: string } }
            output: {
              status?: number | undefined
              error?: string | undefined
              requestId?: string | undefined
            }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { organizationId: string; postgresId: string } }
            output: {
              status?: number | undefined
              error?: string | undefined
              requestId?: string | undefined
            }
            outputFormat: 'json'
            status: 500
          }
      $delete:
        | {
            input: { param: { organizationId: string; postgresId: string } }
            output: { status?: number | undefined; requestId?: string | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { organizationId: string; postgresId: string } }
            output: {
              status?: number | undefined
              error?: string | undefined
              requestId?: string | undefined
            }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { organizationId: string; postgresId: string } }
            output: {
              status?: number | undefined
              error?: string | undefined
              requestId?: string | undefined
            }
            outputFormat: 'json'
            status: 500
          }
      $patch:
        | {
            input: { param: { organizationId: string; postgresId: string } } & {
              json: PostgresServicePatchRequest
            }
            output: {
              status?: number | undefined
              requestId?: string | undefined
              result?: PostgresService | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { organizationId: string; postgresId: string } } & {
              json: PostgresServicePatchRequest
            }
            output: {
              status?: number | undefined
              error?: string | undefined
              requestId?: string | undefined
            }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { organizationId: string; postgresId: string } } & {
              json: PostgresServicePatchRequest
            }
            output: {
              status?: number | undefined
              error?: string | undefined
              requestId?: string | undefined
            }
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/v1/organizations/:organizationId/postgres/:postgresId/caCertificates': {
      $get:
        | {
            input: { param: { organizationId: string; postgresId: string } }
            output: string
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { organizationId: string; postgresId: string } }
            output: {
              status?: number | undefined
              error?: string | undefined
              requestId?: string | undefined
            }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { organizationId: string; postgresId: string } }
            output: {
              status?: number | undefined
              error?: string | undefined
              requestId?: string | undefined
            }
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/v1/organizations/:organizationId/postgres/:postgresId/restoredService': {
      $post:
        | {
            input: { param: { organizationId: string; postgresId: string } } & {
              json: PostgresServiceRestoreRequest
            }
            output: {
              status?: number | undefined
              requestId?: string | undefined
              result?: PostgresService | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { organizationId: string; postgresId: string } } & {
              json: PostgresServiceRestoreRequest
            }
            output: {
              status?: number | undefined
              error?: string | undefined
              requestId?: string | undefined
            }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { organizationId: string; postgresId: string } } & {
              json: PostgresServiceRestoreRequest
            }
            output: {
              status?: number | undefined
              error?: string | undefined
              requestId?: string | undefined
            }
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/v1/organizations/:organizationId/postgres/:postgresId/password': {
      $patch:
        | {
            input: { param: { organizationId: string; postgresId: string } } & {
              json: PostgresServiceSetPassword
            }
            output: {
              status?: number | undefined
              requestId?: string | undefined
              result?: PostgresServicePasswordResource | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { organizationId: string; postgresId: string } } & {
              json: PostgresServiceSetPassword
            }
            output: {
              status?: number | undefined
              error?: string | undefined
              requestId?: string | undefined
            }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { organizationId: string; postgresId: string } } & {
              json: PostgresServiceSetPassword
            }
            output: {
              status?: number | undefined
              error?: string | undefined
              requestId?: string | undefined
            }
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/v1/organizations/:organizationId/postgres/:postgresId/state': {
      $patch:
        | {
            input: { param: { organizationId: string; postgresId: string } } & {
              json: PostgresServiceSetState
            }
            output: {
              status?: number | undefined
              requestId?: string | undefined
              result?: PostgresService | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { organizationId: string; postgresId: string } } & {
              json: PostgresServiceSetState
            }
            output: {
              status?: number | undefined
              error?: string | undefined
              requestId?: string | undefined
            }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { organizationId: string; postgresId: string } } & {
              json: PostgresServiceSetState
            }
            output: {
              status?: number | undefined
              error?: string | undefined
              requestId?: string | undefined
            }
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/v1/organizations/:organizationId/postgres/:postgresId/readReplica': {
      $post:
        | {
            input: { param: { organizationId: string; postgresId: string } } & {
              json: PostgresServiceReadReplicaRequest
            }
            output: {
              status?: number | undefined
              requestId?: string | undefined
              result?: PostgresService | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { organizationId: string; postgresId: string } } & {
              json: PostgresServiceReadReplicaRequest
            }
            output: {
              status?: number | undefined
              error?: string | undefined
              requestId?: string | undefined
            }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { organizationId: string; postgresId: string } } & {
              json: PostgresServiceReadReplicaRequest
            }
            output: {
              status?: number | undefined
              error?: string | undefined
              requestId?: string | undefined
            }
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/v1/organizations/:organizationId/postgres/:postgresId/config': {
      $get:
        | {
            input: { param: { organizationId: string; postgresId: string } }
            output: {
              status?: number | undefined
              requestId?: string | undefined
              result?: PostgresInstanceConfig | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { organizationId: string; postgresId: string } }
            output: {
              status?: number | undefined
              error?: string | undefined
              requestId?: string | undefined
            }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { organizationId: string; postgresId: string } }
            output: {
              status?: number | undefined
              error?: string | undefined
              requestId?: string | undefined
            }
            outputFormat: 'json'
            status: 500
          }
      $post:
        | {
            input: { param: { organizationId: string; postgresId: string } } & {
              json: PostgresInstanceConfig
            }
            output: {
              status?: number | undefined
              requestId?: string | undefined
              result?: PostgresInstanceUpdateConfigResponse | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { organizationId: string; postgresId: string } } & {
              json: PostgresInstanceConfig
            }
            output: {
              status?: number | undefined
              error?: string | undefined
              requestId?: string | undefined
            }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { organizationId: string; postgresId: string } } & {
              json: PostgresInstanceConfig
            }
            output: {
              status?: number | undefined
              error?: string | undefined
              requestId?: string | undefined
            }
            outputFormat: 'json'
            status: 500
          }
      $patch:
        | {
            input: { param: { organizationId: string; postgresId: string } } & {
              json: PostgresInstanceConfig
            }
            output: {
              status?: number | undefined
              requestId?: string | undefined
              result?: PostgresInstanceUpdateConfigResponse | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { organizationId: string; postgresId: string } } & {
              json: PostgresInstanceConfig
            }
            output: {
              status?: number | undefined
              error?: string | undefined
              requestId?: string | undefined
            }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { organizationId: string; postgresId: string } } & {
              json: PostgresInstanceConfig
            }
            output: {
              status?: number | undefined
              error?: string | undefined
              requestId?: string | undefined
            }
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/v1/organizations/:organizationId/postgres/:postgresId/prometheus': {
      $get:
        | {
            input: { param: { organizationId: string; postgresId: string } }
            output: string
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { organizationId: string; postgresId: string } }
            output: {
              status?: number | undefined
              error?: string | undefined
              requestId?: string | undefined
            }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { organizationId: string; postgresId: string } }
            output: {
              status?: number | undefined
              error?: string | undefined
              requestId?: string | undefined
            }
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/v1/organizations/:organizationId/postgres/:postgresId/metrics': {
      $get:
        | {
            input: { param: { organizationId: string; postgresId: string } } & {
              query: {
                from_date: string
                to_date: string
                bucket_size_seconds?: number | undefined
              }
            }
            output: {
              status?: number | undefined
              requestId?: string | undefined
              result?: PostgresMetrics | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { organizationId: string; postgresId: string } } & {
              query: {
                from_date: string
                to_date: string
                bucket_size_seconds?: number | undefined
              }
            }
            output: {
              status?: number | undefined
              error?: string | undefined
              requestId?: string | undefined
            }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { organizationId: string; postgresId: string } } & {
              query: {
                from_date: string
                to_date: string
                bucket_size_seconds?: number | undefined
              }
            }
            output: {
              status?: number | undefined
              error?: string | undefined
              requestId?: string | undefined
            }
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/v1/organizations/:organizationId/postgres/:postgresId/privateEndpoint': {
      $get:
        | {
            input: { param: { organizationId: string; postgresId: string } }
            output: {
              status?: number | undefined
              requestId?: string | undefined
              result?: PostgresPrivateEndpoint | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { organizationId: string; postgresId: string } }
            output: {
              status?: number | undefined
              error?: string | undefined
              requestId?: string | undefined
            }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { organizationId: string; postgresId: string } }
            output: {
              status?: number | undefined
              error?: string | undefined
              requestId?: string | undefined
            }
            outputFormat: 'json'
            status: 500
          }
      $post:
        | {
            input: { param: { organizationId: string; postgresId: string } } & {
              json: PostgresPrivateEndpointPostRequest
            }
            output: {
              status?: number | undefined
              requestId?: string | undefined
              result?: PostgresPrivateEndpoint | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { organizationId: string; postgresId: string } } & {
              json: PostgresPrivateEndpointPostRequest
            }
            output: {
              status?: number | undefined
              error?: string | undefined
              requestId?: string | undefined
            }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { organizationId: string; postgresId: string } } & {
              json: PostgresPrivateEndpointPostRequest
            }
            output: {
              status?: number | undefined
              error?: string | undefined
              requestId?: string | undefined
            }
            outputFormat: 'json'
            status: 500
          }
      $patch:
        | {
            input: { param: { organizationId: string; postgresId: string } } & {
              json: PostgresPrivateEndpointPatchRequest
            }
            output: {
              status?: number | undefined
              requestId?: string | undefined
              result?: PostgresPrivateEndpoint | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { organizationId: string; postgresId: string } } & {
              json: PostgresPrivateEndpointPatchRequest
            }
            output: {
              status?: number | undefined
              error?: string | undefined
              requestId?: string | undefined
            }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { organizationId: string; postgresId: string } } & {
              json: PostgresPrivateEndpointPatchRequest
            }
            output: {
              status?: number | undefined
              error?: string | undefined
              requestId?: string | undefined
            }
            outputFormat: 'json'
            status: 500
          }
      $delete:
        | {
            input: { param: { organizationId: string; postgresId: string } }
            output: { status?: number | undefined; requestId?: string | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { organizationId: string; postgresId: string } }
            output: {
              status?: number | undefined
              error?: string | undefined
              requestId?: string | undefined
            }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { organizationId: string; postgresId: string } }
            output: {
              status?: number | undefined
              error?: string | undefined
              requestId?: string | undefined
            }
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/v1/organizations/:organizationId/postgres/:postgresId/backups': {
      $get:
        | {
            input: { param: { organizationId: string; postgresId: string } } & {
              query: { limit?: number | undefined; cursor?: string | undefined }
            }
            output: {
              status?: number | undefined
              requestId?: string | undefined
              result?: PostgresBackup[] | undefined
              limit?: number | undefined
              totalCount?: (number | null) | undefined
              nextCursor?: (string | null) | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { organizationId: string; postgresId: string } } & {
              query: { limit?: number | undefined; cursor?: string | undefined }
            }
            output: {
              status?: number | undefined
              error?: string | undefined
              requestId?: string | undefined
            }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { organizationId: string; postgresId: string } } & {
              query: { limit?: number | undefined; cursor?: string | undefined }
            }
            output: {
              status?: number | undefined
              error?: string | undefined
              requestId?: string | undefined
            }
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/v1/organizations/:organizationId/postgres/:postgresId/slowQueryPatterns': {
      $get:
        | {
            input: { param: { organizationId: string; postgresId: string } } & {
              query: {
                from_date: string
                to_date: string
                db_name?: string | undefined
                db_user?: string | undefined
                db_operation?: string | undefined
                app?: string | undefined
                sort_by?:
                  | 'total_duration'
                  | 'avg_duration'
                  | 'call_count'
                  | 'total_blks_read'
                  | 'total_cpu_time'
                  | 'error_count'
                  | 'max_duration'
                  | 'p50_duration'
                  | 'p95_duration'
                  | 'p99_duration'
                  | 'total_rows'
                  | 'total_shared_blks_hit'
                  | 'total_wal_bytes'
                  | undefined
                sort_order?: 'asc' | 'desc' | undefined
                limit?: number | undefined
                offset?: number | undefined
              }
            }
            output: {
              status?: number | undefined
              requestId?: string | undefined
              result?: PostgresSlowQueryPattern[] | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { organizationId: string; postgresId: string } } & {
              query: {
                from_date: string
                to_date: string
                db_name?: string | undefined
                db_user?: string | undefined
                db_operation?: string | undefined
                app?: string | undefined
                sort_by?:
                  | 'total_duration'
                  | 'avg_duration'
                  | 'call_count'
                  | 'total_blks_read'
                  | 'total_cpu_time'
                  | 'error_count'
                  | 'max_duration'
                  | 'p50_duration'
                  | 'p95_duration'
                  | 'p99_duration'
                  | 'total_rows'
                  | 'total_shared_blks_hit'
                  | 'total_wal_bytes'
                  | undefined
                sort_order?: 'asc' | 'desc' | undefined
                limit?: number | undefined
                offset?: number | undefined
              }
            }
            output: {
              status?: number | undefined
              error?: string | undefined
              requestId?: string | undefined
            }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { organizationId: string; postgresId: string } } & {
              query: {
                from_date: string
                to_date: string
                db_name?: string | undefined
                db_user?: string | undefined
                db_operation?: string | undefined
                app?: string | undefined
                sort_by?:
                  | 'total_duration'
                  | 'avg_duration'
                  | 'call_count'
                  | 'total_blks_read'
                  | 'total_cpu_time'
                  | 'error_count'
                  | 'max_duration'
                  | 'p50_duration'
                  | 'p95_duration'
                  | 'p99_duration'
                  | 'total_rows'
                  | 'total_shared_blks_hit'
                  | 'total_wal_bytes'
                  | undefined
                sort_order?: 'asc' | 'desc' | undefined
                limit?: number | undefined
                offset?: number | undefined
              }
            }
            output: {
              status?: number | undefined
              error?: string | undefined
              requestId?: string | undefined
            }
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/v1/organizations/:organizationId/postgres/:postgresId/slowQueryPatterns/:queryId': {
      $get:
        | {
            input: { param: { organizationId: string; postgresId: string; queryId: string } } & {
              query: {
                db_name: string
                db_user: string
                db_operation: string
                app?: string | undefined
                timestamp?: string | undefined
              }
            }
            output: {
              status?: number | undefined
              requestId?: string | undefined
              result?: PostgresSlowQueryPatternDetail | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { organizationId: string; postgresId: string; queryId: string } } & {
              query: {
                db_name: string
                db_user: string
                db_operation: string
                app?: string | undefined
                timestamp?: string | undefined
              }
            }
            output: {
              status?: number | undefined
              error?: string | undefined
              requestId?: string | undefined
            }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { organizationId: string; postgresId: string; queryId: string } } & {
              query: {
                db_name: string
                db_user: string
                db_operation: string
                app?: string | undefined
                timestamp?: string | undefined
              }
            }
            output: {
              status?: number | undefined
              error?: string | undefined
              requestId?: string | undefined
            }
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/v1/organizations/:organizationId/postgres/:postgresId/blockingQueries': {
      $get:
        | {
            input: { param: { organizationId: string; postgresId: string } } & {
              query: {
                from_date: string
                to_date: string
                db_name?: string | undefined
                db_user?: string | undefined
                app?: string | undefined
                limit?: number | undefined
                offset?: number | undefined
              }
            }
            output: {
              status?: number | undefined
              requestId?: string | undefined
              result?: PostgresBlockingQuery[] | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { organizationId: string; postgresId: string } } & {
              query: {
                from_date: string
                to_date: string
                db_name?: string | undefined
                db_user?: string | undefined
                app?: string | undefined
                limit?: number | undefined
                offset?: number | undefined
              }
            }
            output: {
              status?: number | undefined
              error?: string | undefined
              requestId?: string | undefined
            }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { organizationId: string; postgresId: string } } & {
              query: {
                from_date: string
                to_date: string
                db_name?: string | undefined
                db_user?: string | undefined
                app?: string | undefined
                limit?: number | undefined
                offset?: number | undefined
              }
            }
            output: {
              status?: number | undefined
              error?: string | undefined
              requestId?: string | undefined
            }
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/v1/organizations/:organizationId/postgres/:postgresId/logs': {
      $get:
        | {
            input: { param: { organizationId: string; postgresId: string } } & {
              query: {
                from_date: string
                to_date: string
                body_contains?: string | undefined
                severity?:
                  | 'DEBUG'
                  | 'LOG'
                  | 'INFO'
                  | 'NOTICE'
                  | 'WARNING'
                  | 'ERROR'
                  | 'FATAL'
                  | 'PANIC'
                  | undefined
                sort_order?: 'asc' | 'desc' | undefined
                limit?: number | undefined
                offset?: number | undefined
              }
            }
            output: {
              status?: number | undefined
              requestId?: string | undefined
              result?: PostgresLogEntry[] | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { organizationId: string; postgresId: string } } & {
              query: {
                from_date: string
                to_date: string
                body_contains?: string | undefined
                severity?:
                  | 'DEBUG'
                  | 'LOG'
                  | 'INFO'
                  | 'NOTICE'
                  | 'WARNING'
                  | 'ERROR'
                  | 'FATAL'
                  | 'PANIC'
                  | undefined
                sort_order?: 'asc' | 'desc' | undefined
                limit?: number | undefined
                offset?: number | undefined
              }
            }
            output: {
              status?: number | undefined
              error?: string | undefined
              requestId?: string | undefined
            }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { organizationId: string; postgresId: string } } & {
              query: {
                from_date: string
                to_date: string
                body_contains?: string | undefined
                severity?:
                  | 'DEBUG'
                  | 'LOG'
                  | 'INFO'
                  | 'NOTICE'
                  | 'WARNING'
                  | 'ERROR'
                  | 'FATAL'
                  | 'PANIC'
                  | undefined
                sort_order?: 'asc' | 'desc' | undefined
                limit?: number | undefined
                offset?: number | undefined
              }
            }
            output: {
              status?: number | undefined
              error?: string | undefined
              requestId?: string | undefined
            }
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/v1/organizations/:organizationId/privateEndpointConfig': {
      $get:
        | {
            input: { param: { organizationId: string } } & {
              query: { cloud_provider: string; region_id: string }
            }
            output: {
              status?: number | undefined
              requestId?: string | undefined
              result?: OrganizationCloudRegionPrivateEndpointConfig | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { organizationId: string } } & {
              query: { cloud_provider: string; region_id: string }
            }
            output: {
              status?: number | undefined
              error?: string | undefined
              requestId?: string | undefined
            }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { organizationId: string } } & {
              query: { cloud_provider: string; region_id: string }
            }
            output: {
              status?: number | undefined
              error?: string | undefined
              requestId?: string | undefined
            }
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/v1/organizations/:organizationId/byocInfrastructure': {
      $post:
        | {
            input: { param: { organizationId: string } } & { json: ByocInfrastructurePostRequest }
            output: {
              status?: number | undefined
              requestId?: string | undefined
              result?: ByocConfig | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { organizationId: string } } & { json: ByocInfrastructurePostRequest }
            output: {
              status?: number | undefined
              error?: string | undefined
              requestId?: string | undefined
            }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { organizationId: string } } & { json: ByocInfrastructurePostRequest }
            output: {
              status?: number | undefined
              error?: string | undefined
              requestId?: string | undefined
            }
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/v1/organizations/:organizationId/byocInfrastructure/validate': {
      $post:
        | {
            input: { param: { organizationId: string } } & {
              json: ByocInfrastructureValidatePostRequest
            }
            output: {
              status?: number | undefined
              requestId?: string | undefined
              result?: ByocInfrastructureValidation | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { organizationId: string } } & {
              json: ByocInfrastructureValidatePostRequest
            }
            output: {
              status?: number | undefined
              error?: string | undefined
              requestId?: string | undefined
            }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { organizationId: string } } & {
              json: ByocInfrastructureValidatePostRequest
            }
            output: {
              status?: number | undefined
              error?: string | undefined
              requestId?: string | undefined
            }
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/v1/organizations/:organizationId/byocInfrastructure/:byocInfrastructureId/enrollmentToken': {
      $post:
        | {
            input: { param: { organizationId: string; byocInfrastructureId: string } } & {
              json: ByocInfrastructureEnrollmentTokenPostRequest
            }
            output: {
              status?: number | undefined
              requestId?: string | undefined
              result?: ByocInfrastructureEnrollmentToken | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { organizationId: string; byocInfrastructureId: string } } & {
              json: ByocInfrastructureEnrollmentTokenPostRequest
            }
            output: {
              status?: number | undefined
              error?: string | undefined
              requestId?: string | undefined
            }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { organizationId: string; byocInfrastructureId: string } } & {
              json: ByocInfrastructureEnrollmentTokenPostRequest
            }
            output: {
              status?: number | undefined
              error?: string | undefined
              requestId?: string | undefined
            }
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/v1/organizations/:organizationId/byocInfrastructure/:byocInfrastructureId': {
      $get:
        | {
            input: { param: { organizationId: string; byocInfrastructureId: string } }
            output: {
              status?: number | undefined
              requestId?: string | undefined
              result?: ByocInfrastructureDetails | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { organizationId: string; byocInfrastructureId: string } }
            output: {
              status?: number | undefined
              error?: string | undefined
              requestId?: string | undefined
            }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { organizationId: string; byocInfrastructureId: string } }
            output: {
              status?: number | undefined
              error?: string | undefined
              requestId?: string | undefined
            }
            outputFormat: 'json'
            status: 500
          }
      $delete:
        | {
            input: { param: { organizationId: string; byocInfrastructureId: string } }
            output: { status?: number | undefined; requestId?: string | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { organizationId: string; byocInfrastructureId: string } }
            output: {
              status?: number | undefined
              error?: string | undefined
              requestId?: string | undefined
            }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { organizationId: string; byocInfrastructureId: string } }
            output: {
              status?: number | undefined
              error?: string | undefined
              requestId?: string | undefined
            }
            outputFormat: 'json'
            status: 500
          }
      $patch:
        | {
            input: { param: { organizationId: string; byocInfrastructureId: string } } & {
              json: ByocInfrastructurePatchRequest
            }
            output: {
              status?: number | undefined
              requestId?: string | undefined
              result?: ByocConfig | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { organizationId: string; byocInfrastructureId: string } } & {
              json: ByocInfrastructurePatchRequest
            }
            output: {
              status?: number | undefined
              error?: string | undefined
              requestId?: string | undefined
            }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { organizationId: string; byocInfrastructureId: string } } & {
              json: ByocInfrastructurePatchRequest
            }
            output: {
              status?: number | undefined
              error?: string | undefined
              requestId?: string | undefined
            }
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/v1/organizations/:organizationId/byocInfrastructure/:byocInfrastructureId/progress': {
      $get:
        | {
            input: { param: { organizationId: string; byocInfrastructureId: string } }
            output: {
              status?: number | undefined
              requestId?: string | undefined
              result?: ByocInfrastructureProgress | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { organizationId: string; byocInfrastructureId: string } }
            output: {
              status?: number | undefined
              error?: string | undefined
              requestId?: string | undefined
            }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { organizationId: string; byocInfrastructureId: string } }
            output: {
              status?: number | undefined
              error?: string | undefined
              requestId?: string | undefined
            }
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/v1/organizations/:organizationId/byocInfrastructure/:byocInfrastructureId/tags': {
      $get:
        | {
            input: { param: { organizationId: string; byocInfrastructureId: string } }
            output: {
              status?: number | undefined
              requestId?: string | undefined
              result?: ByocInfrastructureTagsResponse | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { organizationId: string; byocInfrastructureId: string } }
            output: {
              status?: number | undefined
              error?: string | undefined
              requestId?: string | undefined
            }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { organizationId: string; byocInfrastructureId: string } }
            output: {
              status?: number | undefined
              error?: string | undefined
              requestId?: string | undefined
            }
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/v1/organizations/:organizationId/byocInfrastructure/:byocInfrastructureId/privateEndpointConfig': {
      $get:
        | {
            input: { param: { organizationId: string; byocInfrastructureId: string } }
            output: {
              status?: number | undefined
              requestId?: string | undefined
              result?: ByocInfrastructurePrivateEndpointConfig | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { organizationId: string; byocInfrastructureId: string } }
            output: {
              status?: number | undefined
              error?: string | undefined
              requestId?: string | undefined
            }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { organizationId: string; byocInfrastructureId: string } }
            output: {
              status?: number | undefined
              error?: string | undefined
              requestId?: string | undefined
            }
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/v1/organizations/:organizationId/byocInfrastructure/:byocInfrastructureId/customerAuthorizedAccess': {
      $get:
        | {
            input: { param: { organizationId: string; byocInfrastructureId: string } }
            output: {
              status?: number | undefined
              requestId?: string | undefined
              result?: ByocCustomerAuthorizedAccess | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { organizationId: string; byocInfrastructureId: string } }
            output: {
              status?: number | undefined
              error?: string | undefined
              requestId?: string | undefined
            }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { organizationId: string; byocInfrastructureId: string } }
            output: {
              status?: number | undefined
              error?: string | undefined
              requestId?: string | undefined
            }
            outputFormat: 'json'
            status: 500
          }
      $patch:
        | {
            input: { param: { organizationId: string; byocInfrastructureId: string } } & {
              json: ByocCustomerAuthorizedAccessPatchRequest
            }
            output: {
              status?: number | undefined
              requestId?: string | undefined
              result?: ByocCustomerAuthorizedAccess | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { organizationId: string; byocInfrastructureId: string } } & {
              json: ByocCustomerAuthorizedAccessPatchRequest
            }
            output: {
              status?: number | undefined
              error?: string | undefined
              requestId?: string | undefined
            }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { organizationId: string; byocInfrastructureId: string } } & {
              json: ByocCustomerAuthorizedAccessPatchRequest
            }
            output: {
              status?: number | undefined
              error?: string | undefined
              requestId?: string | undefined
            }
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/v1/organizations/:organizationId/services/:serviceId/clickpipesReversePrivateEndpoints': {
      $get:
        | {
            input: { param: { organizationId: string; serviceId: string } }
            output: {
              status?: number | undefined
              requestId?: string | undefined
              result?: ReversePrivateEndpoint[] | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { organizationId: string; serviceId: string } }
            output: {
              status?: number | undefined
              error?: string | undefined
              requestId?: string | undefined
            }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { organizationId: string; serviceId: string } }
            output: {
              status?: number | undefined
              error?: string | undefined
              requestId?: string | undefined
            }
            outputFormat: 'json'
            status: 500
          }
      $post:
        | {
            input: { param: { organizationId: string; serviceId: string } } & {
              json: CreateReversePrivateEndpoint
            }
            output: {
              status?: number | undefined
              requestId?: string | undefined
              result?: ReversePrivateEndpoint | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { organizationId: string; serviceId: string } } & {
              json: CreateReversePrivateEndpoint
            }
            output: {
              status?: number | undefined
              error?: string | undefined
              requestId?: string | undefined
            }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { organizationId: string; serviceId: string } } & {
              json: CreateReversePrivateEndpoint
            }
            output: {
              status?: number | undefined
              error?: string | undefined
              requestId?: string | undefined
            }
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/v1/organizations/:organizationId/services/:serviceId/clickpipesReversePrivateEndpoints/:reversePrivateEndpointId': {
      $get:
        | {
            input: {
              param: { organizationId: string; serviceId: string; reversePrivateEndpointId: string }
            }
            output: {
              status?: number | undefined
              requestId?: string | undefined
              result?: ReversePrivateEndpoint | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              param: { organizationId: string; serviceId: string; reversePrivateEndpointId: string }
            }
            output: {
              status?: number | undefined
              error?: string | undefined
              requestId?: string | undefined
            }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              param: { organizationId: string; serviceId: string; reversePrivateEndpointId: string }
            }
            output: {
              status?: number | undefined
              error?: string | undefined
              requestId?: string | undefined
            }
            outputFormat: 'json'
            status: 500
          }
      $delete:
        | {
            input: {
              param: { organizationId: string; serviceId: string; reversePrivateEndpointId: string }
            }
            output: { status?: number | undefined; requestId?: string | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              param: { organizationId: string; serviceId: string; reversePrivateEndpointId: string }
            }
            output: {
              status?: number | undefined
              error?: string | undefined
              requestId?: string | undefined
            }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              param: { organizationId: string; serviceId: string; reversePrivateEndpointId: string }
            }
            output: {
              status?: number | undefined
              error?: string | undefined
              requestId?: string | undefined
            }
            outputFormat: 'json'
            status: 500
          }
      $patch:
        | {
            input: {
              param: { organizationId: string; serviceId: string; reversePrivateEndpointId: string }
            } & { json: UpdateReversePrivateEndpoint }
            output: {
              status?: number | undefined
              requestId?: string | undefined
              result?: ReversePrivateEndpoint | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              param: { organizationId: string; serviceId: string; reversePrivateEndpointId: string }
            } & { json: UpdateReversePrivateEndpoint }
            output: {
              status?: number | undefined
              error?: string | undefined
              requestId?: string | undefined
            }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              param: { organizationId: string; serviceId: string; reversePrivateEndpointId: string }
            } & { json: UpdateReversePrivateEndpoint }
            output: {
              status?: number | undefined
              error?: string | undefined
              requestId?: string | undefined
            }
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/v1/organizations/:organizationId/services/:serviceId/query-api-endpoints': {
      $get:
        | {
            input: { param: { organizationId: string; serviceId: string } } & {
              query: { cursor?: string | undefined; limit?: number | undefined }
            }
            output: {
              result: PublicQueryApiEndpointListItem[]
              limit: number
              totalCount: number | ({ [x: string]: unknown } | null)
              nextCursor: string | ({ [x: string]: unknown } | null)
              status: number
              requestId: string
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { organizationId: string; serviceId: string } } & {
              query: { cursor?: string | undefined; limit?: number | undefined }
            }
            output: { error: string; status: number; requestId: string }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { organizationId: string; serviceId: string } } & {
              query: { cursor?: string | undefined; limit?: number | undefined }
            }
            output: { error: string; status: number; requestId: string }
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { organizationId: string; serviceId: string } } & {
              query: { cursor?: string | undefined; limit?: number | undefined }
            }
            output: { error: string; status: number; requestId: string }
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { organizationId: string; serviceId: string } } & {
              query: { cursor?: string | undefined; limit?: number | undefined }
            }
            output: { error: string; status: number; requestId: string }
            outputFormat: 'json'
            status: 500
          }
      $post:
        | {
            input: { param: { organizationId: string; serviceId: string } } & {
              json: PublicQueryApiEndpointRequest
            }
            output: { status: number; requestId: string; result: PublicQueryApiEndpoint }
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { param: { organizationId: string; serviceId: string } } & {
              json: PublicQueryApiEndpointRequest
            }
            output: { error: string; status: number; requestId: string }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { organizationId: string; serviceId: string } } & {
              json: PublicQueryApiEndpointRequest
            }
            output: { error: string; status: number; requestId: string }
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { organizationId: string; serviceId: string } } & {
              json: PublicQueryApiEndpointRequest
            }
            output: { error: string; status: number; requestId: string }
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { organizationId: string; serviceId: string } } & {
              json: PublicQueryApiEndpointRequest
            }
            output: { error: string; status: number; requestId: string }
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/v1/organizations/:organizationId/services/:serviceId/query-api-endpoints/:endpointId': {
      $delete:
        | {
            input: { param: { organizationId: string; serviceId: string; endpointId: string } }
            output: { status: number; requestId: string }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { organizationId: string; serviceId: string; endpointId: string } }
            output: {
              error: string
              issues?: { path: (string | number)[]; code: string; message: string }[] | undefined
              status: number
              requestId: string
            }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { organizationId: string; serviceId: string; endpointId: string } }
            output: { error: string; status: number; requestId: string }
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { organizationId: string; serviceId: string; endpointId: string } }
            output: { error: string; status: number; requestId: string }
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { organizationId: string; serviceId: string; endpointId: string } }
            output: { error: string; status: number; requestId: string }
            outputFormat: 'json'
            status: 409
          }
        | {
            input: { param: { organizationId: string; serviceId: string; endpointId: string } }
            output: { error: string; status: number; requestId: string }
            outputFormat: 'json'
            status: 500
          }
      $get:
        | {
            input: { param: { organizationId: string; serviceId: string; endpointId: string } }
            output: { status: number; requestId: string; result: PublicQueryApiEndpoint }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { organizationId: string; serviceId: string; endpointId: string } }
            output: {
              error: string
              issues?: { path: (string | number)[]; code: string; message: string }[] | undefined
              status: number
              requestId: string
            }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { organizationId: string; serviceId: string; endpointId: string } }
            output: { error: string; status: number; requestId: string }
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { organizationId: string; serviceId: string; endpointId: string } }
            output: { error: string; status: number; requestId: string }
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { organizationId: string; serviceId: string; endpointId: string } }
            output: { error: string; status: number; requestId: string }
            outputFormat: 'json'
            status: 500
          }
      $put:
        | {
            input: { param: { organizationId: string; serviceId: string; endpointId: string } } & {
              json: PublicQueryApiEndpointRequest
            }
            output: { status: number; requestId: string; result: PublicQueryApiEndpoint }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { organizationId: string; serviceId: string; endpointId: string } } & {
              json: PublicQueryApiEndpointRequest
            }
            output: { error: string; status: number; requestId: string }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { organizationId: string; serviceId: string; endpointId: string } } & {
              json: PublicQueryApiEndpointRequest
            }
            output: { error: string; status: number; requestId: string }
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { organizationId: string; serviceId: string; endpointId: string } } & {
              json: PublicQueryApiEndpointRequest
            }
            output: { error: string; status: number; requestId: string }
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { organizationId: string; serviceId: string; endpointId: string } } & {
              json: PublicQueryApiEndpointRequest
            }
            output: { error: string; status: number; requestId: string }
            outputFormat: 'json'
            status: 409
          }
        | {
            input: { param: { organizationId: string; serviceId: string; endpointId: string } } & {
              json: PublicQueryApiEndpointRequest
            }
            output: { error: string; status: number; requestId: string }
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/v1/organizations/:organizationId/services/:serviceId/saved-queries': {
      $get:
        | {
            input: { param: { organizationId: string; serviceId: string } } & {
              query: { cursor?: string | undefined; limit?: number | undefined }
            }
            output: {
              result: PublicSavedQueryListItem[]
              limit: number
              totalCount: number | ({ [x: string]: unknown } | null)
              nextCursor: string | ({ [x: string]: unknown } | null)
              status: number
              requestId: string
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { organizationId: string; serviceId: string } } & {
              query: { cursor?: string | undefined; limit?: number | undefined }
            }
            output: {
              error: string
              issues?: { path: (string | number)[]; code: string; message: string }[] | undefined
              status: number
              requestId: string
            }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { organizationId: string; serviceId: string } } & {
              query: { cursor?: string | undefined; limit?: number | undefined }
            }
            output: { error: string; status: number; requestId: string }
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { organizationId: string; serviceId: string } } & {
              query: { cursor?: string | undefined; limit?: number | undefined }
            }
            output: { error: string; status: number; requestId: string }
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { organizationId: string; serviceId: string } } & {
              query: { cursor?: string | undefined; limit?: number | undefined }
            }
            output: { error: string; status: number; requestId: string }
            outputFormat: 'json'
            status: 500
          }
      $post:
        | {
            input: { param: { organizationId: string; serviceId: string } } & {
              json: PublicSavedQueryRequest
            }
            output: { status: number; requestId: string; result: PublicSavedQuery }
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { param: { organizationId: string; serviceId: string } } & {
              json: PublicSavedQueryRequest
            }
            output: {
              error: string
              issues?: { path: (string | number)[]; code: string; message: string }[] | undefined
              status: number
              requestId: string
            }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { organizationId: string; serviceId: string } } & {
              json: PublicSavedQueryRequest
            }
            output: { error: string; status: number; requestId: string }
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { organizationId: string; serviceId: string } } & {
              json: PublicSavedQueryRequest
            }
            output: { error: string; status: number; requestId: string }
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { organizationId: string; serviceId: string } } & {
              json: PublicSavedQueryRequest
            }
            output: { error: string; status: number; requestId: string }
            outputFormat: 'json'
            status: 409
          }
        | {
            input: { param: { organizationId: string; serviceId: string } } & {
              json: PublicSavedQueryRequest
            }
            output: { error: string; status: number; requestId: string }
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/v1/organizations/:organizationId/services/:serviceId/saved-queries/:queryId': {
      $delete:
        | {
            input: { param: { organizationId: string; serviceId: string; queryId: string } }
            output: { status: number; requestId: string }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { organizationId: string; serviceId: string; queryId: string } }
            output: {
              error: string
              issues?: { path: (string | number)[]; code: string; message: string }[] | undefined
              status: number
              requestId: string
            }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { organizationId: string; serviceId: string; queryId: string } }
            output: { error: string; status: number; requestId: string }
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { organizationId: string; serviceId: string; queryId: string } }
            output: { error: string; status: number; requestId: string }
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { organizationId: string; serviceId: string; queryId: string } }
            output: { error: string; status: number; requestId: string }
            outputFormat: 'json'
            status: 409
          }
        | {
            input: { param: { organizationId: string; serviceId: string; queryId: string } }
            output: { error: string; status: number; requestId: string }
            outputFormat: 'json'
            status: 500
          }
      $get:
        | {
            input: { param: { organizationId: string; serviceId: string; queryId: string } }
            output: { status: number; requestId: string; result: PublicSavedQuery }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { organizationId: string; serviceId: string; queryId: string } }
            output: {
              error: string
              issues?: { path: (string | number)[]; code: string; message: string }[] | undefined
              status: number
              requestId: string
            }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { organizationId: string; serviceId: string; queryId: string } }
            output: { error: string; status: number; requestId: string }
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { organizationId: string; serviceId: string; queryId: string } }
            output: { error: string; status: number; requestId: string }
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { organizationId: string; serviceId: string; queryId: string } }
            output: { error: string; status: number; requestId: string }
            outputFormat: 'json'
            status: 500
          }
      $put:
        | {
            input: { param: { organizationId: string; serviceId: string; queryId: string } } & {
              json: PublicSavedQueryRequest
            }
            output: { status: number; requestId: string; result: PublicSavedQuery }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { organizationId: string; serviceId: string; queryId: string } } & {
              json: PublicSavedQueryRequest
            }
            output: {
              error: string
              issues?: { path: (string | number)[]; code: string; message: string }[] | undefined
              status: number
              requestId: string
            }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { organizationId: string; serviceId: string; queryId: string } } & {
              json: PublicSavedQueryRequest
            }
            output: { error: string; status: number; requestId: string }
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { organizationId: string; serviceId: string; queryId: string } } & {
              json: PublicSavedQueryRequest
            }
            output: { error: string; status: number; requestId: string }
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { organizationId: string; serviceId: string; queryId: string } } & {
              json: PublicSavedQueryRequest
            }
            output: { error: string; status: number; requestId: string }
            outputFormat: 'json'
            status: 409
          }
        | {
            input: { param: { organizationId: string; serviceId: string; queryId: string } } & {
              json: PublicSavedQueryRequest
            }
            output: { error: string; status: number; requestId: string }
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/v1/organizations/:organizationId/udfUploads/url': {
      $post:
        | {
            input: { param: { organizationId: string } }
            output: { status: number; requestId: string; result: UdfUploadSession }
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { param: { organizationId: string } }
            output: {
              error: string
              issues?: { path: (string | number)[]; code: string; message: string }[] | undefined
              status: number
              requestId: string
            }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { organizationId: string } }
            output: { error: string; status: number; requestId: string }
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/v1/organizations/:organizationId/udfs': {
      $get:
        | {
            input: { param: { organizationId: string } } & {
              query: { cursor?: string | undefined; limit?: number | undefined }
            }
            output: {
              result: Udf[]
              limit: number
              totalCount: number | ({ [x: string]: unknown } | null)
              nextCursor: string | ({ [x: string]: unknown } | null)
              status: number
              requestId: string
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { organizationId: string } } & {
              query: { cursor?: string | undefined; limit?: number | undefined }
            }
            output: {
              error: string
              issues?: { path: (string | number)[]; code: string; message: string }[] | undefined
              status: number
              requestId: string
            }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { organizationId: string } } & {
              query: { cursor?: string | undefined; limit?: number | undefined }
            }
            output: { error: string; status: number; requestId: string }
            outputFormat: 'json'
            status: 500
          }
      $post:
        | {
            input: { param: { organizationId: string } } & { json: UdfCreateRequest }
            output: { status: number; requestId: string; result: Udf }
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { param: { organizationId: string } } & { json: UdfCreateRequest }
            output: {
              error: string
              issues?: { path: (string | number)[]; code: string; message: string }[] | undefined
              status: number
              requestId: string
            }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { organizationId: string } } & { json: UdfCreateRequest }
            output: { error: string; status: number; requestId: string }
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { organizationId: string } } & { json: UdfCreateRequest }
            output: { error: string; status: number; requestId: string }
            outputFormat: 'json'
            status: 409
          }
        | {
            input: { param: { organizationId: string } } & { json: UdfCreateRequest }
            output: { error: string; status: number; requestId: string }
            outputFormat: 'json'
            status: 410
          }
        | {
            input: { param: { organizationId: string } } & { json: UdfCreateRequest }
            output: { error: string; status: number; requestId: string }
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/v1/organizations/:organizationId/udfs/:functionName': {
      $delete:
        | {
            input: { param: { organizationId: string; functionName: string } }
            output: { status: number; requestId: string }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { organizationId: string; functionName: string } }
            output: {
              error: string
              issues?: { path: (string | number)[]; code: string; message: string }[] | undefined
              status: number
              requestId: string
            }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { organizationId: string; functionName: string } }
            output: { error: string; status: number; requestId: string }
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { organizationId: string; functionName: string } }
            output: { error: string; status: number; requestId: string }
            outputFormat: 'json'
            status: 409
          }
        | {
            input: { param: { organizationId: string; functionName: string } }
            output: { error: string; status: number; requestId: string }
            outputFormat: 'json'
            status: 500
          }
      $get:
        | {
            input: { param: { organizationId: string; functionName: string } }
            output: { status: number; requestId: string; result: Udf }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { organizationId: string; functionName: string } }
            output: {
              error: string
              issues?: { path: (string | number)[]; code: string; message: string }[] | undefined
              status: number
              requestId: string
            }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { organizationId: string; functionName: string } }
            output: { error: string; status: number; requestId: string }
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { organizationId: string; functionName: string } }
            output: { error: string; status: number; requestId: string }
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/v1/organizations/:organizationId/udfs/:functionName/attachments': {
      $get:
        | {
            input: { param: { organizationId: string; functionName: string } } & {
              query: { cursor?: string | undefined; limit?: number | undefined }
            }
            output: {
              result: UdfAttachment[]
              limit: number
              totalCount: number | ({ [x: string]: unknown } | null)
              nextCursor: string | ({ [x: string]: unknown } | null)
              status: number
              requestId: string
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { organizationId: string; functionName: string } } & {
              query: { cursor?: string | undefined; limit?: number | undefined }
            }
            output: {
              error: string
              issues?: { path: (string | number)[]; code: string; message: string }[] | undefined
              status: number
              requestId: string
            }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { organizationId: string; functionName: string } } & {
              query: { cursor?: string | undefined; limit?: number | undefined }
            }
            output: { error: string; status: number; requestId: string }
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { organizationId: string; functionName: string } } & {
              query: { cursor?: string | undefined; limit?: number | undefined }
            }
            output: { error: string; status: number; requestId: string }
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/v1/organizations/:organizationId/udfs/:functionName/attachments/:serviceId': {
      $delete:
        | {
            input: { param: { organizationId: string; functionName: string; serviceId: string } }
            output: { status: number; requestId: string }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { organizationId: string; functionName: string; serviceId: string } }
            output: {
              error: string
              issues?: { path: (string | number)[]; code: string; message: string }[] | undefined
              status: number
              requestId: string
            }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { organizationId: string; functionName: string; serviceId: string } }
            output: { error: string; status: number; requestId: string }
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { organizationId: string; functionName: string; serviceId: string } }
            output: { error: string; status: number; requestId: string }
            outputFormat: 'json'
            status: 409
          }
        | {
            input: { param: { organizationId: string; functionName: string; serviceId: string } }
            output: { error: string; status: number; requestId: string }
            outputFormat: 'json'
            status: 500
          }
      $get:
        | {
            input: { param: { organizationId: string; functionName: string; serviceId: string } }
            output: { status: number; requestId: string; result: UdfAttachment }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { organizationId: string; functionName: string; serviceId: string } }
            output: {
              error: string
              issues?: { path: (string | number)[]; code: string; message: string }[] | undefined
              status: number
              requestId: string
            }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { organizationId: string; functionName: string; serviceId: string } }
            output: { error: string; status: number; requestId: string }
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { organizationId: string; functionName: string; serviceId: string } }
            output: { error: string; status: number; requestId: string }
            outputFormat: 'json'
            status: 500
          }
      $put:
        | {
            input: {
              param: { organizationId: string; functionName: string; serviceId: string }
            } & { json: { version?: number | undefined } }
            output: { status: number; requestId: string; result: UdfAttachment }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              param: { organizationId: string; functionName: string; serviceId: string }
            } & { json: { version?: number | undefined } }
            output: { error: string; status: number; requestId: string }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              param: { organizationId: string; functionName: string; serviceId: string }
            } & { json: { version?: number | undefined } }
            output: { error: string; status: number; requestId: string }
            outputFormat: 'json'
            status: 404
          }
        | {
            input: {
              param: { organizationId: string; functionName: string; serviceId: string }
            } & { json: { version?: number | undefined } }
            output: { error: string; status: number; requestId: string }
            outputFormat: 'json'
            status: 409
          }
        | {
            input: {
              param: { organizationId: string; functionName: string; serviceId: string }
            } & { json: { version?: number | undefined } }
            output: { error: string; status: number; requestId: string }
            outputFormat: 'json'
            status: 422
          }
        | {
            input: {
              param: { organizationId: string; functionName: string; serviceId: string }
            } & { json: { version?: number | undefined } }
            output: {
              error: string
              code: 'SERVICE_IDLE' | 'SERVICE_NOT_RUNNING' | 'SERVICE_STOPPED'
              serviceState:
                | 'starting'
                | 'stopping'
                | 'terminating'
                | 'softdeleting'
                | 'awaking'
                | 'partially_running'
                | 'provisioning'
                | 'running'
                | 'stopped'
                | 'terminated'
                | 'softdeleted'
                | 'degraded'
                | 'failed'
                | 'idle'
              canWake: boolean
              status: number
              requestId: string
            }
            outputFormat: 'json'
            status: 424
          }
        | {
            input: {
              param: { organizationId: string; functionName: string; serviceId: string }
            } & { json: { version?: number | undefined } }
            output: { error: string; status: number; requestId: string }
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/v1/organizations/:organizationId/udfs/:functionName/versions': {
      $get:
        | {
            input: { param: { organizationId: string; functionName: string } } & {
              query: { cursor?: string | undefined; limit?: number | undefined }
            }
            output: {
              result: Udf[]
              limit: number
              totalCount: number | ({ [x: string]: unknown } | null)
              nextCursor: string | ({ [x: string]: unknown } | null)
              status: number
              requestId: string
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { organizationId: string; functionName: string } } & {
              query: { cursor?: string | undefined; limit?: number | undefined }
            }
            output: {
              error: string
              issues?: { path: (string | number)[]; code: string; message: string }[] | undefined
              status: number
              requestId: string
            }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { organizationId: string; functionName: string } } & {
              query: { cursor?: string | undefined; limit?: number | undefined }
            }
            output: { error: string; status: number; requestId: string }
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { organizationId: string; functionName: string } } & {
              query: { cursor?: string | undefined; limit?: number | undefined }
            }
            output: { error: string; status: number; requestId: string }
            outputFormat: 'json'
            status: 500
          }
      $post:
        | {
            input: { param: { organizationId: string; functionName: string } } & {
              json: UdfVersionCreateRequest
            }
            output: { status: number; requestId: string; result: Udf }
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { param: { organizationId: string; functionName: string } } & {
              json: UdfVersionCreateRequest
            }
            output: {
              error: string
              issues?: { path: (string | number)[]; code: string; message: string }[] | undefined
              status: number
              requestId: string
            }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { organizationId: string; functionName: string } } & {
              json: UdfVersionCreateRequest
            }
            output: { error: string; status: number; requestId: string }
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { organizationId: string; functionName: string } } & {
              json: UdfVersionCreateRequest
            }
            output: { error: string; status: number; requestId: string }
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { organizationId: string; functionName: string } } & {
              json: UdfVersionCreateRequest
            }
            output: { error: string; status: number; requestId: string }
            outputFormat: 'json'
            status: 409
          }
        | {
            input: { param: { organizationId: string; functionName: string } } & {
              json: UdfVersionCreateRequest
            }
            output: { error: string; status: number; requestId: string }
            outputFormat: 'json'
            status: 410
          }
        | {
            input: { param: { organizationId: string; functionName: string } } & {
              json: UdfVersionCreateRequest
            }
            output: { error: string; status: number; requestId: string }
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/v1/organizations/:organizationId/udfs/:functionName/versions/:version': {
      $delete:
        | {
            input: { param: { organizationId: string; functionName: string; version: number } }
            output: { status: number; requestId: string }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { organizationId: string; functionName: string; version: number } }
            output: {
              error: string
              issues?: { path: (string | number)[]; code: string; message: string }[] | undefined
              status: number
              requestId: string
            }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { organizationId: string; functionName: string; version: number } }
            output: { error: string; status: number; requestId: string }
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { organizationId: string; functionName: string; version: number } }
            output: { error: string; status: number; requestId: string }
            outputFormat: 'json'
            status: 409
          }
        | {
            input: { param: { organizationId: string; functionName: string; version: number } }
            output: { error: string; status: number; requestId: string }
            outputFormat: 'json'
            status: 500
          }
    }
  },
  '/'
>
export default routes
