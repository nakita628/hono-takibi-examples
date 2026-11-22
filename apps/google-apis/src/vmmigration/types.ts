type UpgradeApplianceRequest = { requestId?: string | undefined }
type Status = {
  code?: number | undefined
  details?: { [x: string]: { [x: string]: unknown } }[] | undefined
  message?: string | undefined
}
type Operation = {
  done?: boolean | undefined
  error?: Status | undefined
  metadata?: { [x: string]: { [x: string]: unknown } } | undefined
  name?: string | undefined
  response?: { [x: string]: { [x: string]: unknown } } | undefined
}
type AddGroupMigrationRequest = { migratingVm?: string | undefined }
type RemoveGroupMigrationRequest = { migratingVm?: string | undefined }
type FinalizeMigrationRequest = { [x: string]: unknown }
type PauseMigrationRequest = { [x: string]: unknown }
type ResumeMigrationRequest = { [x: string]: unknown }
type StartMigrationRequest = { [x: string]: unknown }
type TargetProject = {
  createTime?: string | undefined
  description?: string | undefined
  name?: string | undefined
  project?: string | undefined
  updateTime?: string | undefined
}
type Location = {
  displayName?: string | undefined
  labels?: { [x: string]: string } | undefined
  locationId?: string | undefined
  metadata?: { [x: string]: { [x: string]: unknown } } | undefined
  name?: string | undefined
}
type ListLocationsResponse = {
  locations?: Location[] | undefined
  nextPageToken?: string | undefined
}
type ListOperationsResponse = {
  nextPageToken?: string | undefined
  operations?: Operation[] | undefined
}
type CancelCutoverJobRequest = { [x: string]: unknown }
type AppliedLicense = {
  osLicense?: string | undefined
  type?: 'TYPE_UNSPECIFIED' | 'NONE' | 'PAYG' | 'BYOL' | undefined
}
type SchedulingNodeAffinity = {
  key?: string | undefined
  operator?: 'OPERATOR_UNSPECIFIED' | 'IN' | 'NOT_IN' | undefined
  values?: string[] | undefined
}
type ComputeScheduling = {
  automaticRestart?: boolean | undefined
  minNodeCpus?: number | undefined
  nodeAffinities?: SchedulingNodeAffinity[] | undefined
  onHostMaintenance?: 'ON_HOST_MAINTENANCE_UNSPECIFIED' | 'TERMINATE' | 'MIGRATE' | undefined
  restartType?:
    | 'RESTART_TYPE_UNSPECIFIED'
    | 'AUTOMATIC_RESTART'
    | 'NO_AUTOMATIC_RESTART'
    | undefined
}
type NetworkInterface = {
  externalIp?: string | undefined
  internalIp?: string | undefined
  network?: string | undefined
  subnetwork?: string | undefined
}
type ComputeEngineTargetDetails = {
  additionalLicenses?: string[] | undefined
  appliedLicense?: AppliedLicense | undefined
  bootOption?:
    | 'COMPUTE_ENGINE_BOOT_OPTION_UNSPECIFIED'
    | 'COMPUTE_ENGINE_BOOT_OPTION_EFI'
    | 'COMPUTE_ENGINE_BOOT_OPTION_BIOS'
    | undefined
  computeScheduling?: ComputeScheduling | undefined
  diskType?:
    | 'COMPUTE_ENGINE_DISK_TYPE_UNSPECIFIED'
    | 'COMPUTE_ENGINE_DISK_TYPE_STANDARD'
    | 'COMPUTE_ENGINE_DISK_TYPE_SSD'
    | 'COMPUTE_ENGINE_DISK_TYPE_BALANCED'
    | undefined
  hostname?: string | undefined
  labels?: { [x: string]: string } | undefined
  licenseType?:
    | 'COMPUTE_ENGINE_LICENSE_TYPE_DEFAULT'
    | 'COMPUTE_ENGINE_LICENSE_TYPE_PAYG'
    | 'COMPUTE_ENGINE_LICENSE_TYPE_BYOL'
    | undefined
  machineType?: string | undefined
  machineTypeSeries?: string | undefined
  metadata?: { [x: string]: string } | undefined
  networkInterfaces?: NetworkInterface[] | undefined
  networkTags?: string[] | undefined
  project?: string | undefined
  secureBoot?: boolean | undefined
  serviceAccount?: string | undefined
  vmName?: string | undefined
  zone?: string | undefined
}
type TargetVMDetails = {
  appliedLicense?: AppliedLicense | undefined
  bootOption?: 'BOOT_OPTION_UNSPECIFIED' | 'EFI' | 'BIOS' | undefined
  computeScheduling?: ComputeScheduling | undefined
  diskType?: 'DISK_TYPE_UNSPECIFIED' | 'STANDARD' | 'BALANCED' | 'SSD' | undefined
  externalIp?: string | undefined
  internalIp?: string | undefined
  labels?: { [x: string]: string } | undefined
  licenseType?: 'DEFAULT' | 'PAYG' | 'BYOL' | undefined
  machineType?: string | undefined
  machineTypeSeries?: string | undefined
  metadata?: { [x: string]: string } | undefined
  name?: string | undefined
  network?: string | undefined
  networkInterfaces?: NetworkInterface[] | undefined
  networkTags?: string[] | undefined
  project?: string | undefined
  secureBoot?: boolean | undefined
  serviceAccount?: string | undefined
  subnetwork?: string | undefined
  targetProject?: string | undefined
  zone?: string | undefined
}
type AdaptingOSStep = { [x: string]: unknown }
type InstantiatingMigratedVMStep = { [x: string]: unknown }
type PreparingVMDisksStep = { [x: string]: unknown }
type CloneStep = {
  adaptingOs?: AdaptingOSStep | undefined
  endTime?: string | undefined
  instantiatingMigratedVm?: InstantiatingMigratedVMStep | undefined
  preparingVmDisks?: PreparingVMDisksStep | undefined
  startTime?: string | undefined
}
type CloneJob = {
  computeEngineTargetDetails?: ComputeEngineTargetDetails | undefined
  computeEngineVmDetails?: TargetVMDetails | undefined
  createTime?: string | undefined
  endTime?: string | undefined
  error?: Status | undefined
  name?: string | undefined
  state?:
    | 'STATE_UNSPECIFIED'
    | 'PENDING'
    | 'ACTIVE'
    | 'FAILED'
    | 'SUCCEEDED'
    | 'CANCELLED'
    | 'CANCELLING'
    | 'ADAPTING_OS'
    | undefined
  stateTime?: string | undefined
  steps?: CloneStep[] | undefined
  targetDetails?: TargetVMDetails | undefined
}
type ListCloneJobsResponse = {
  cloneJobs?: CloneJob[] | undefined
  nextPageToken?: string | undefined
  unreachable?: string[] | undefined
}
type InitializingReplicationStep = { [x: string]: unknown }
type PostProcessingStep = { [x: string]: unknown }
type ReplicatingStep = {
  lastThirtyMinutesAverageBytesPerSecond?: string | undefined
  lastTwoMinutesAverageBytesPerSecond?: string | undefined
  replicatedBytes?: string | undefined
  totalBytes?: string | undefined
}
type CycleStep = {
  endTime?: string | undefined
  initializingReplication?: InitializingReplicationStep | undefined
  postProcessing?: PostProcessingStep | undefined
  replicating?: ReplicatingStep | undefined
  startTime?: string | undefined
}
type LocalizedMessage = { locale?: string | undefined; message?: string | undefined }
type Link = { description?: string | undefined; url?: string | undefined }
type MigrationWarning = {
  actionItem?: LocalizedMessage | undefined
  code?: 'WARNING_CODE_UNSPECIFIED' | 'ADAPTATION_WARNING' | undefined
  helpLinks?: Link[] | undefined
  warningMessage?: LocalizedMessage | undefined
  warningTime?: string | undefined
}
type ReplicationCycle = {
  cycleNumber?: number | undefined
  endTime?: string | undefined
  error?: Status | undefined
  name?: string | undefined
  progress?: number | undefined
  progressPercent?: number | undefined
  startTime?: string | undefined
  state?: 'STATE_UNSPECIFIED' | 'RUNNING' | 'PAUSED' | 'FAILED' | 'SUCCEEDED' | undefined
  steps?: CycleStep[] | undefined
  totalPauseDuration?: string | undefined
  warnings?: MigrationWarning[] | undefined
}
type ShuttingDownSourceVMStep = { [x: string]: unknown }
type CutoverStep = {
  endTime?: string | undefined
  finalSync?: ReplicationCycle | undefined
  instantiatingMigratedVm?: InstantiatingMigratedVMStep | undefined
  preparingVmDisks?: PreparingVMDisksStep | undefined
  previousReplicationCycle?: ReplicationCycle | undefined
  shuttingDownSourceVm?: ShuttingDownSourceVMStep | undefined
  startTime?: string | undefined
}
type CutoverJob = {
  computeEngineTargetDetails?: ComputeEngineTargetDetails | undefined
  computeEngineVmDetails?: TargetVMDetails | undefined
  createTime?: string | undefined
  endTime?: string | undefined
  error?: Status | undefined
  name?: string | undefined
  progress?: number | undefined
  progressPercent?: number | undefined
  state?:
    | 'STATE_UNSPECIFIED'
    | 'PENDING'
    | 'FAILED'
    | 'SUCCEEDED'
    | 'CANCELLED'
    | 'CANCELLING'
    | 'ACTIVE'
    | 'ADAPTING_OS'
    | undefined
  stateMessage?: string | undefined
  stateTime?: string | undefined
  steps?: CutoverStep[] | undefined
  targetDetails?: TargetVMDetails | undefined
}
type ListCutoverJobsResponse = {
  cutoverJobs?: CutoverJob[] | undefined
  nextPageToken?: string | undefined
  unreachable?: string[] | undefined
}
type ApplianceVersion = {
  critical?: boolean | undefined
  releaseNotesUri?: string | undefined
  uri?: string | undefined
  version?: string | undefined
}
type AvailableUpdates = {
  inPlaceUpdate?: ApplianceVersion | undefined
  newDeployableAppliance?: ApplianceVersion | undefined
}
type UpgradeStatus = {
  error?: Status | undefined
  previousVersion?: string | undefined
  startTime?: string | undefined
  state?: 'STATE_UNSPECIFIED' | 'RUNNING' | 'FAILED' | 'SUCCEEDED' | undefined
  version?: string | undefined
}
type DatacenterConnector = {
  applianceInfrastructureVersion?: string | undefined
  applianceSoftwareVersion?: string | undefined
  availableVersions?: AvailableUpdates | undefined
  bucket?: string | undefined
  createTime?: string | undefined
  error?: Status | undefined
  name?: string | undefined
  registrationId?: string | undefined
  serviceAccount?: string | undefined
  state?: 'STATE_UNSPECIFIED' | 'PENDING' | 'OFFLINE' | 'FAILED' | 'ACTIVE' | undefined
  stateTime?: string | undefined
  updateTime?: string | undefined
  upgradeStatus?: UpgradeStatus | undefined
  version?: string | undefined
}
type ListDatacenterConnectorsResponse = {
  datacenterConnectors?: DatacenterConnector[] | undefined
  nextPageToken?: string | undefined
  unreachable?: string[] | undefined
}
type Group = {
  createTime?: string | undefined
  description?: string | undefined
  displayName?: string | undefined
  name?: string | undefined
  updateTime?: string | undefined
}
type ListGroupsResponse = {
  groups?: Group[] | undefined
  nextPageToken?: string | undefined
  unreachable?: string[] | undefined
}
type AwsSourceVmDetails = {
  committedStorageBytes?: string | undefined
  firmware?: 'FIRMWARE_UNSPECIFIED' | 'EFI' | 'BIOS' | undefined
}
type ComputeEngineTargetDefaults = {
  additionalLicenses?: string[] | undefined
  appliedLicense?: AppliedLicense | undefined
  bootOption?:
    | 'COMPUTE_ENGINE_BOOT_OPTION_UNSPECIFIED'
    | 'COMPUTE_ENGINE_BOOT_OPTION_EFI'
    | 'COMPUTE_ENGINE_BOOT_OPTION_BIOS'
    | undefined
  computeScheduling?: ComputeScheduling | undefined
  diskType?:
    | 'COMPUTE_ENGINE_DISK_TYPE_UNSPECIFIED'
    | 'COMPUTE_ENGINE_DISK_TYPE_STANDARD'
    | 'COMPUTE_ENGINE_DISK_TYPE_SSD'
    | 'COMPUTE_ENGINE_DISK_TYPE_BALANCED'
    | undefined
  hostname?: string | undefined
  labels?: { [x: string]: string } | undefined
  licenseType?:
    | 'COMPUTE_ENGINE_LICENSE_TYPE_DEFAULT'
    | 'COMPUTE_ENGINE_LICENSE_TYPE_PAYG'
    | 'COMPUTE_ENGINE_LICENSE_TYPE_BYOL'
    | undefined
  machineType?: string | undefined
  machineTypeSeries?: string | undefined
  metadata?: { [x: string]: string } | undefined
  networkInterfaces?: NetworkInterface[] | undefined
  networkTags?: string[] | undefined
  secureBoot?: boolean | undefined
  serviceAccount?: string | undefined
  targetProject?: string | undefined
  vmName?: string | undefined
  zone?: string | undefined
}
type CutoverForecast = { estimatedCutoverJobDuration?: string | undefined }
type ReplicationSync = { lastSyncTime?: string | undefined }
type SchedulePolicy = { idleDuration?: string | undefined; skipOsAdaptation?: boolean | undefined }
type MigratingVm = {
  awsSourceVmDetails?: AwsSourceVmDetails | undefined
  computeEngineTargetDefaults?: ComputeEngineTargetDefaults | undefined
  computeEngineVmDefaults?: TargetVMDetails | undefined
  createTime?: string | undefined
  currentSyncInfo?: ReplicationCycle | undefined
  cutoverForecast?: CutoverForecast | undefined
  description?: string | undefined
  displayName?: string | undefined
  error?: Status | undefined
  group?: string | undefined
  labels?: { [x: string]: string } | undefined
  lastReplicationCycle?: ReplicationCycle | undefined
  lastSync?: ReplicationSync | undefined
  name?: string | undefined
  policy?: SchedulePolicy | undefined
  recentCloneJobs?: CloneJob[] | undefined
  recentCutoverJobs?: CutoverJob[] | undefined
  sourceVmId?: string | undefined
  state?:
    | 'STATE_UNSPECIFIED'
    | 'PENDING'
    | 'READY'
    | 'FIRST_SYNC'
    | 'ACTIVE'
    | 'CUTTING_OVER'
    | 'CUTOVER'
    | 'FINAL_SYNC'
    | 'PAUSED'
    | 'FINALIZING'
    | 'FINALIZED'
    | 'ERROR'
    | undefined
  stateTime?: string | undefined
  targetDefaults?: TargetVMDetails | undefined
  updateTime?: string | undefined
}
type ListMigratingVmsResponse = {
  migratingVms?: MigratingVm[] | undefined
  nextPageToken?: string | undefined
  unreachable?: string[] | undefined
}
type ListReplicationCyclesResponse = {
  nextPageToken?: string | undefined
  replicationCycles?: ReplicationCycle[] | undefined
  unreachable?: string[] | undefined
}
type AccessKeyCredentials = {
  accessKeyId?: string | undefined
  secretAccessKey?: string | undefined
  sessionToken?: string | undefined
}
type Tag = { key?: string | undefined; value?: string | undefined }
type AwsSourceDetails = {
  accessKeyCreds?: AccessKeyCredentials | undefined
  awsRegion?: string | undefined
  error?: Status | undefined
  inventorySecurityGroupNames?: string[] | undefined
  inventoryTagList?: Tag[] | undefined
  migrationResourcesUserTags?: { [x: string]: string } | undefined
  publicIp?: string | undefined
  state?: 'STATE_UNSPECIFIED' | 'PENDING' | 'FAILED' | 'ACTIVE' | undefined
}
type VmwareSourceDetails = {
  password?: string | undefined
  thumbprint?: string | undefined
  username?: string | undefined
  vcenterIp?: string | undefined
}
type Source = {
  aws?: AwsSourceDetails | undefined
  createTime?: string | undefined
  description?: string | undefined
  error?: Status | undefined
  labels?: { [x: string]: string } | undefined
  name?: string | undefined
  updateTime?: string | undefined
  vmware?: VmwareSourceDetails | undefined
}
type ListSourcesResponse = {
  nextPageToken?: string | undefined
  sources?: Source[] | undefined
  unreachable?: string[] | undefined
}
type ListTargetProjectsResponse = {
  nextPageToken?: string | undefined
  targetProjects?: TargetProject[] | undefined
  unreachable?: string[] | undefined
}
type VmUtilizationMetrics = {
  cpuAverage?: number | undefined
  cpuAveragePercent?: number | undefined
  cpuMax?: number | undefined
  cpuMaxPercent?: number | undefined
  diskIoRateAverage?: string | undefined
  diskIoRateAverageKbps?: string | undefined
  diskIoRateMax?: string | undefined
  diskIoRateMaxKbps?: string | undefined
  memoryAverage?: number | undefined
  memoryAveragePercent?: number | undefined
  memoryMax?: number | undefined
  memoryMaxPercent?: number | undefined
  networkThroughputAverage?: string | undefined
  networkThroughputAverageKbps?: string | undefined
  networkThroughputMax?: string | undefined
  networkThroughputMaxKbps?: string | undefined
}
type VmwareVmDetails = {
  bootOption?: 'BOOT_OPTION_UNSPECIFIED' | 'EFI' | 'BIOS' | undefined
  committedStorage?: string | undefined
  committedStorageMb?: string | undefined
  cpuCount?: number | undefined
  datacenterDescription?: string | undefined
  datacenterId?: string | undefined
  diskCount?: number | undefined
  displayName?: string | undefined
  guestDescription?: string | undefined
  memoryMb?: number | undefined
  powerState?: 'POWER_STATE_UNSPECIFIED' | 'ON' | 'OFF' | 'SUSPENDED' | undefined
  uuid?: string | undefined
  vmId?: string | undefined
}
type VmUtilizationInfo = {
  utilization?: VmUtilizationMetrics | undefined
  vmId?: string | undefined
  vmwareVmDetails?: VmwareVmDetails | undefined
}
type UtilizationReport = {
  createTime?: string | undefined
  displayName?: string | undefined
  error?: Status | undefined
  frameEndTime?: string | undefined
  name?: string | undefined
  state?: 'STATE_UNSPECIFIED' | 'CREATING' | 'SUCCEEDED' | 'FAILED' | undefined
  stateTime?: string | undefined
  timeFrame?: 'TIME_FRAME_UNSPECIFIED' | 'WEEK' | 'MONTH' | 'YEAR' | undefined
  vmCount?: number | undefined
  vms?: VmUtilizationInfo[] | undefined
  vmsCount?: number | undefined
}
type ListUtilizationReportsResponse = {
  nextPageToken?: string | undefined
  unreachable?: string[] | undefined
  utilizationReports?: UtilizationReport[] | undefined
}
type AwsSecurityGroup = { id?: string | undefined; name?: string | undefined }
type AwsVmDetails = {
  architecture?:
    | 'VM_ARCHITECTURE_UNSPECIFIED'
    | 'I386'
    | 'X86_64'
    | 'ARM64'
    | 'X86_64_MAC'
    | undefined
  bootOption?: 'BOOT_OPTION_UNSPECIFIED' | 'EFI' | 'BIOS' | undefined
  committedStorageMb?: string | undefined
  cpuCount?: number | undefined
  diskCount?: number | undefined
  displayName?: string | undefined
  instanceType?: string | undefined
  memoryMb?: number | undefined
  osDescription?: string | undefined
  powerState?: 'POWER_STATE_UNSPECIFIED' | 'ON' | 'OFF' | 'SUSPENDED' | 'PENDING' | undefined
  securityGroups?: AwsSecurityGroup[] | undefined
  sourceDescription?: string | undefined
  sourceId?: string | undefined
  tags?: { [x: string]: string } | undefined
  virtualizationType?: 'VM_VIRTUALIZATION_TYPE_UNSPECIFIED' | 'HVM' | 'PARAVIRTUAL' | undefined
  vmId?: string | undefined
  vpcId?: string | undefined
  zone?: string | undefined
}
type AwsVmsDetails = { details?: AwsVmDetails[] | undefined }
type VmwareVmsDetails = { details?: VmwareVmDetails[] | undefined }
type FetchInventoryResponse = {
  awsVms?: AwsVmsDetails | undefined
  nextPageToken?: string | undefined
  updateTime?: string | undefined
  vmwareVms?: VmwareVmsDetails | undefined
}
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/v1alpha1/:datacenterConnector:upgradeAppliance': {
      $post: {
        input: { param: { datacenterConnector: string } } & {
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
        } & { json: UpgradeApplianceRequest }
        output: Operation
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1alpha1/:group:addGroupMigration': {
      $post: {
        input: { param: { group: string } } & {
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
        } & { json: AddGroupMigrationRequest }
        output: Operation
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1alpha1/:group:removeGroupMigration': {
      $post: {
        input: { param: { group: string } } & {
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
        } & { json: RemoveGroupMigrationRequest }
        output: Operation
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1alpha1/:migratingVm:finalizeMigration': {
      $post: {
        input: { param: { migratingVm: string } } & {
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
        } & { json: FinalizeMigrationRequest }
        output: Operation
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1alpha1/:migratingVm:pauseMigration': {
      $post: {
        input: { param: { migratingVm: string } } & {
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
        } & { json: PauseMigrationRequest }
        output: Operation
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1alpha1/:migratingVm:resumeMigration': {
      $post: {
        input: { param: { migratingVm: string } } & {
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
        } & { json: ResumeMigrationRequest }
        output: Operation
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1alpha1/:migratingVm:startMigration': {
      $post: {
        input: { param: { migratingVm: string } } & {
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
        } & { json: StartMigrationRequest }
        output: Operation
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1alpha1/:name': {
      $delete: {
        input: { param: { name: string } } & {
          query: {
            requestId?: string | undefined
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
        output: Operation
        outputFormat: 'json'
        status: 200
      }
      $get: {
        input: { param: { name: string } } & {
          query: {
            view?: 'UTILIZATION_REPORT_VIEW_UNSPECIFIED' | 'BASIC' | 'FULL' | undefined
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
        output: TargetProject
        outputFormat: 'json'
        status: 200
      }
      $patch: {
        input: { param: { name: string } } & {
          query: {
            requestId?: string | undefined
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
        } & { json: TargetProject }
        output: Operation
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1alpha1/:name/locations': {
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
        output: ListLocationsResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1alpha1/:name/operations': {
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
        output: ListOperationsResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1alpha1/:name:cancel': {
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
        } & { json: CancelCutoverJobRequest }
        output: Operation
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1alpha1/:parent/cloneJobs': {
      $get: {
        input: { param: { parent: string } } & {
          query: {
            filter?: string | undefined
            orderBy?: string | undefined
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
        output: ListCloneJobsResponse
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: { param: { parent: string } } & {
          query: {
            cloneJobId?: string | undefined
            requestId?: string | undefined
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
        } & { json: CloneJob }
        output: Operation
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1alpha1/:parent/cutoverJobs': {
      $get: {
        input: { param: { parent: string } } & {
          query: {
            filter?: string | undefined
            orderBy?: string | undefined
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
        output: ListCutoverJobsResponse
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: { param: { parent: string } } & {
          query: {
            cutoverJobId?: string | undefined
            requestId?: string | undefined
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
        } & { json: CutoverJob }
        output: Operation
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1alpha1/:parent/datacenterConnectors': {
      $get: {
        input: { param: { parent: string } } & {
          query: {
            filter?: string | undefined
            orderBy?: string | undefined
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
        output: ListDatacenterConnectorsResponse
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: { param: { parent: string } } & {
          query: {
            datacenterConnectorId?: string | undefined
            requestId?: string | undefined
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
        } & { json: DatacenterConnector }
        output: Operation
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1alpha1/:parent/groups': {
      $get: {
        input: { param: { parent: string } } & {
          query: {
            filter?: string | undefined
            orderBy?: string | undefined
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
        output: ListGroupsResponse
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: { param: { parent: string } } & {
          query: {
            groupId?: string | undefined
            requestId?: string | undefined
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
        } & { json: Group }
        output: Operation
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1alpha1/:parent/migratingVms': {
      $get: {
        input: { param: { parent: string } } & {
          query: {
            filter?: string | undefined
            orderBy?: string | undefined
            pageSize?: number | undefined
            pageToken?: string | undefined
            view?:
              | 'MIGRATING_VM_VIEW_UNSPECIFIED'
              | 'MIGRATING_VM_VIEW_BASIC'
              | 'MIGRATING_VM_VIEW_FULL'
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
        output: ListMigratingVmsResponse
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: { param: { parent: string } } & {
          query: {
            migratingVmId?: string | undefined
            requestId?: string | undefined
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
        } & { json: MigratingVm }
        output: Operation
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1alpha1/:parent/replicationCycles': {
      $get: {
        input: { param: { parent: string } } & {
          query: {
            filter?: string | undefined
            orderBy?: string | undefined
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
        output: ListReplicationCyclesResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1alpha1/:parent/sources': {
      $get: {
        input: { param: { parent: string } } & {
          query: {
            filter?: string | undefined
            orderBy?: string | undefined
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
        output: ListSourcesResponse
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: { param: { parent: string } } & {
          query: {
            requestId?: string | undefined
            sourceId?: string | undefined
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
        } & { json: Source }
        output: Operation
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1alpha1/:parent/targetProjects': {
      $get: {
        input: { param: { parent: string } } & {
          query: {
            filter?: string | undefined
            orderBy?: string | undefined
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
        output: ListTargetProjectsResponse
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: { param: { parent: string } } & {
          query: {
            requestId?: string | undefined
            targetProjectId?: string | undefined
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
        } & { json: TargetProject }
        output: Operation
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1alpha1/:parent/utilizationReports': {
      $get: {
        input: { param: { parent: string } } & {
          query: {
            filter?: string | undefined
            orderBy?: string | undefined
            pageSize?: number | undefined
            pageToken?: string | undefined
            view?: 'UTILIZATION_REPORT_VIEW_UNSPECIFIED' | 'BASIC' | 'FULL' | undefined
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
        output: ListUtilizationReportsResponse
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: { param: { parent: string } } & {
          query: {
            requestId?: string | undefined
            utilizationReportId?: string | undefined
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
        } & { json: UtilizationReport }
        output: Operation
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1alpha1/:source:fetchInventory': {
      $get: {
        input: { param: { source: string } } & {
          query: {
            forceRefresh?: boolean | undefined
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
        output: FetchInventoryResponse
        outputFormat: 'json'
        status: 200
      }
    }
  },
  '/'
>
export default routes
