type AssetList = { assetIds?: string[] | undefined }
type AddAssetsToGroupRequest = {
  allowExisting?: boolean | undefined
  assets?: AssetList | undefined
  requestId?: string | undefined
}
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
type RemoveAssetsFromGroupRequest = {
  allowMissing?: boolean | undefined
  assets?: AssetList | undefined
  requestId?: string | undefined
}
type Source = {
  createTime?: string | undefined
  description?: string | undefined
  displayName?: string | undefined
  isManaged?: boolean | undefined
  name?: string | undefined
  pendingFrameCount?: number | undefined
  priority?: number | undefined
  type?:
    | 'SOURCE_TYPE_UNKNOWN'
    | 'SOURCE_TYPE_UPLOAD'
    | 'SOURCE_TYPE_GUEST_OS_SCAN'
    | 'SOURCE_TYPE_INVENTORY_SCAN'
    | 'SOURCE_TYPE_CUSTOM'
    | undefined
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
type CancelOperationRequest = { [x: string]: unknown }
type Empty = { [x: string]: unknown }
type RunImportJobRequest = { requestId?: string | undefined }
type ValidateImportJobRequest = { requestId?: string | undefined }
type ComputeEngineShapeDescriptor = {
  logicalCoreCount?: number | undefined
  machineType?: string | undefined
  memoryMb?: number | undefined
  physicalCoreCount?: number | undefined
  series?: string | undefined
}
type ComputeEngineMigrationTarget = { shape?: ComputeEngineShapeDescriptor | undefined }
type FitDescriptor = {
  fitLevel?: 'FIT_LEVEL_UNSPECIFIED' | 'FIT' | 'NO_FIT' | 'REQUIRES_EFFORT' | undefined
}
type GoogleKubernetesEngineMigrationTarget = { [x: string]: unknown }
type VmwareEngineMigrationTarget = { [x: string]: unknown }
type MigrationInsight = {
  computeEngineTarget?: ComputeEngineMigrationTarget | undefined
  fit?: FitDescriptor | undefined
  gkeTarget?: GoogleKubernetesEngineMigrationTarget | undefined
  vmwareEngineTarget?: VmwareEngineMigrationTarget | undefined
}
type Insight = { migrationInsight?: MigrationInsight | undefined }
type InsightList = { insights?: Insight[] | undefined; updateTime?: string | undefined }
type DailyResourceUsageAggregationStats = {
  average?: number | undefined
  median?: number | undefined
  ninteyFifthPercentile?: number | undefined
  peak?: number | undefined
}
type DailyResourceUsageAggregationCPU = {
  utilizationPercentage?: DailyResourceUsageAggregationStats | undefined
}
type Date = { day?: number | undefined; month?: number | undefined; year?: number | undefined }
type DailyResourceUsageAggregationDisk = { iops?: DailyResourceUsageAggregationStats | undefined }
type DailyResourceUsageAggregationMemory = {
  utilizationPercentage?: DailyResourceUsageAggregationStats | undefined
}
type DailyResourceUsageAggregationNetwork = {
  egressBps?: DailyResourceUsageAggregationStats | undefined
  ingressBps?: DailyResourceUsageAggregationStats | undefined
}
type DailyResourceUsageAggregation = {
  cpu?: DailyResourceUsageAggregationCPU | undefined
  date?: Date | undefined
  disk?: DailyResourceUsageAggregationDisk | undefined
  memory?: DailyResourceUsageAggregationMemory | undefined
  network?: DailyResourceUsageAggregationNetwork | undefined
}
type AssetPerformanceData = {
  dailyResourceUsageAggregations?: DailyResourceUsageAggregation[] | undefined
}
type FstabEntry = {
  file?: string | undefined
  freq?: number | undefined
  mntops?: string | undefined
  passno?: number | undefined
  spec?: string | undefined
  vfstype?: string | undefined
}
type FstabEntryList = { entries?: FstabEntry[] | undefined }
type HostsEntry = { hostNames?: string[] | undefined; ip?: string | undefined }
type HostsEntryList = { entries?: HostsEntry[] | undefined }
type NfsExport = { exportDirectory?: string | undefined; hosts?: string[] | undefined }
type NfsExportList = { entries?: NfsExport[] | undefined }
type Selinux = { enabled?: boolean | undefined; mode?: string | undefined }
type GuestConfigDetails = {
  fstab?: FstabEntryList | undefined
  hosts?: HostsEntryList | undefined
  issue?: string | undefined
  nfsExports?: NfsExportList | undefined
  selinux?: Selinux | undefined
}
type GuestInstalledApplication = {
  name?: string | undefined
  path?: string | undefined
  time?: string | undefined
  vendor?: string | undefined
  version?: string | undefined
}
type GuestInstalledApplicationList = { entries?: GuestInstalledApplication[] | undefined }
type NetworkConnection = {
  localIpAddress?: string | undefined
  localPort?: number | undefined
  pid?: string | undefined
  processName?: string | undefined
  protocol?: string | undefined
  remoteIpAddress?: string | undefined
  remotePort?: number | undefined
  state?: string | undefined
}
type NetworkConnectionList = { entries?: NetworkConnection[] | undefined }
type TimeZone = { id?: string | undefined; version?: string | undefined }
type DateTime = {
  day?: number | undefined
  hours?: number | undefined
  minutes?: number | undefined
  month?: number | undefined
  nanos?: number | undefined
  seconds?: number | undefined
  timeZone?: TimeZone | undefined
  utcOffset?: string | undefined
  year?: number | undefined
}
type RuntimeNetworkInfo = {
  connections?: NetworkConnectionList | undefined
  netstat?: string | undefined
  netstatTime?: DateTime | undefined
}
type OpenFileDetails = {
  command?: string | undefined
  filePath?: string | undefined
  fileType?: string | undefined
  user?: string | undefined
}
type OpenFileList = { entries?: OpenFileDetails[] | undefined }
type RunningProcess = {
  attributes?: { [x: string]: string } | undefined
  cmdline?: string | undefined
  exePath?: string | undefined
  pid?: string | undefined
  user?: string | undefined
}
type RunningProcessList = { processes?: RunningProcess[] | undefined }
type RunningService = {
  cmdline?: string | undefined
  exePath?: string | undefined
  name?: string | undefined
  pid?: string | undefined
  startMode?: string | undefined
  state?: string | undefined
  status?: string | undefined
}
type RunningServiceList = { services?: RunningService[] | undefined }
type GuestRuntimeDetails = {
  domain?: string | undefined
  installedApps?: GuestInstalledApplicationList | undefined
  lastUptime?: Date | undefined
  machineName?: string | undefined
  networkInfo?: RuntimeNetworkInfo | undefined
  openFileList?: OpenFileList | undefined
  processes?: RunningProcessList | undefined
  services?: RunningServiceList | undefined
}
type GuestOsDetails = {
  config?: GuestConfigDetails | undefined
  runtime?: GuestRuntimeDetails | undefined
}
type AwsEc2PlatformDetails = {
  location?: string | undefined
  machineTypeLabel?: string | undefined
}
type AzureVmPlatformDetails = {
  location?: string | undefined
  machineTypeLabel?: string | undefined
  provisioningState?: string | undefined
}
type GenericPlatformDetails = { location?: string | undefined }
type PhysicalPlatformDetails = { location?: string | undefined }
type VmwarePlatformDetails = {
  esxVersion?: string | undefined
  osid?: string | undefined
  vcenterVersion?: string | undefined
}
type PlatformDetails = {
  awsEc2Details?: AwsEc2PlatformDetails | undefined
  azureVmDetails?: AzureVmPlatformDetails | undefined
  genericDetails?: GenericPlatformDetails | undefined
  physicalDetails?: PhysicalPlatformDetails | undefined
  vmwareDetails?: VmwarePlatformDetails | undefined
}
type BiosDetails = {
  biosManufacturer?: string | undefined
  biosName?: string | undefined
  biosReleaseDate?: string | undefined
  biosVersion?: string | undefined
  smbiosUuid?: string | undefined
}
type VirtualMachineArchitectureDetails = {
  bios?: BiosDetails | undefined
  cpuArchitecture?: string | undefined
  cpuManufacturer?: string | undefined
  cpuName?: string | undefined
  cpuSocketCount?: number | undefined
  cpuThreadCount?: number | undefined
  firmware?: string | undefined
  hyperthreading?:
    | 'HYPER_THREADING_UNSPECIFIED'
    | 'HYPER_THREADING_DISABLED'
    | 'HYPER_THREADING_ENABLED'
    | undefined
  vendor?: string | undefined
}
type DiskPartition = {
  capacityBytes?: string | undefined
  fileSystem?: string | undefined
  freeBytes?: string | undefined
  mountPoint?: string | undefined
  subPartitions?: DiskPartitionList | undefined
  type?: string | undefined
  uuid?: string | undefined
}
type DiskPartitionList = { entries?: DiskPartition[] | undefined }
type VmwareDiskConfig = {
  backingType?:
    | 'BACKING_TYPE_UNSPECIFIED'
    | 'BACKING_TYPE_FLAT_V1'
    | 'BACKING_TYPE_FLAT_V2'
    | 'BACKING_TYPE_PMEM'
    | 'BACKING_TYPE_RDM_V1'
    | 'BACKING_TYPE_RDM_V2'
    | 'BACKING_TYPE_SESPARSE'
    | 'BACKING_TYPE_SESPARSE_V1'
    | 'BACKING_TYPE_SESPARSE_V2'
    | undefined
  rdmCompatibilityMode?: string | undefined
  shared?: boolean | undefined
  vmdkDiskMode?: string | undefined
}
type DiskEntry = {
  diskLabel?: string | undefined
  diskLabelType?: string | undefined
  hwAddress?: string | undefined
  interfaceType?: string | undefined
  partitions?: DiskPartitionList | undefined
  status?: string | undefined
  totalCapacityBytes?: string | undefined
  totalFreeBytes?: string | undefined
  vmwareConfig?: VmwareDiskConfig | undefined
}
type DiskEntryList = { entries?: DiskEntry[] | undefined }
type VirtualMachineDiskDetails = {
  disks?: DiskEntryList | undefined
  hddTotalCapacityBytes?: string | undefined
  hddTotalFreeBytes?: string | undefined
  lsblkJson?: string | undefined
}
type NetworkAddress = {
  assignment?:
    | 'ADDRESS_ASSIGNMENT_UNSPECIFIED'
    | 'ADDRESS_ASSIGNMENT_STATIC'
    | 'ADDRESS_ASSIGNMENT_DHCP'
    | undefined
  bcast?: string | undefined
  fqdn?: string | undefined
  ipAddress?: string | undefined
  subnetMask?: string | undefined
}
type NetworkAddressList = { addresses?: NetworkAddress[] | undefined }
type NetworkAdapterDetails = {
  adapterType?: string | undefined
  addresses?: NetworkAddressList | undefined
  macAddress?: string | undefined
}
type NetworkAdapterList = { networkAdapters?: NetworkAdapterDetails[] | undefined }
type VirtualMachineNetworkDetails = {
  defaultGw?: string | undefined
  networkAdapters?: NetworkAdapterList | undefined
  primaryIpAddress?: string | undefined
  primaryMacAddress?: string | undefined
  publicIpAddress?: string | undefined
}
type VirtualMachineDetails = {
  coreCount?: number | undefined
  createTime?: string | undefined
  guestOs?: GuestOsDetails | undefined
  memoryMb?: number | undefined
  osFamily?:
    | 'OS_FAMILY_UNKNOWN'
    | 'OS_FAMILY_WINDOWS'
    | 'OS_FAMILY_LINUX'
    | 'OS_FAMILY_UNIX'
    | undefined
  osName?: string | undefined
  osVersion?: string | undefined
  platform?: PlatformDetails | undefined
  powerState?: string | undefined
  vcenterFolder?: string | undefined
  vcenterUrl?: string | undefined
  vcenterVmId?: string | undefined
  vmArchitecture?: VirtualMachineArchitectureDetails | undefined
  vmDisks?: VirtualMachineDiskDetails | undefined
  vmName?: string | undefined
  vmNetwork?: VirtualMachineNetworkDetails | undefined
  vmUuid?: string | undefined
}
type Asset = {
  assignedGroups?: string[] | undefined
  attributes?: { [x: string]: string } | undefined
  createTime?: string | undefined
  insightList?: InsightList | undefined
  labels?: { [x: string]: string } | undefined
  name?: string | undefined
  performanceData?: AssetPerformanceData | undefined
  sources?: string[] | undefined
  updateTime?: string | undefined
  virtualMachineDetails?: VirtualMachineDetails | undefined
}
type ListAssetsResponse = {
  assets?: Asset[] | undefined
  nextPageToken?: string | undefined
  unreachable?: string[] | undefined
}
type AggregationCount = { [x: string]: unknown }
type AggregationFrequency = { [x: string]: unknown }
type AggregationHistogram = { lowerBounds?: number[] | undefined }
type AggregationSum = { [x: string]: unknown }
type Aggregation = {
  count?: AggregationCount | undefined
  field?: string | undefined
  frequency?: AggregationFrequency | undefined
  histogram?: AggregationHistogram | undefined
  sum?: AggregationSum | undefined
}
type AggregateAssetsValuesRequest = {
  aggregations?: Aggregation[] | undefined
  filter?: string | undefined
}
type AggregationResultCount = { value?: string | undefined }
type AggregationResultFrequency = { values?: { [x: string]: string } | undefined }
type AggregationResultHistogramBucket = {
  count?: string | undefined
  lowerBound?: number | undefined
  upperBound?: number | undefined
}
type AggregationResultHistogram = { buckets?: AggregationResultHistogramBucket[] | undefined }
type AggregationResultSum = { value?: number | undefined }
type AggregationResult = {
  count?: AggregationResultCount | undefined
  field?: string | undefined
  frequency?: AggregationResultFrequency | undefined
  histogram?: AggregationResultHistogram | undefined
  sum?: AggregationResultSum | undefined
}
type AggregateAssetsValuesResponse = { results?: AggregationResult[] | undefined }
type BatchDeleteAssetsRequest = { allowMissing?: boolean | undefined; names?: string[] | undefined }
type UpdateAssetRequest = {
  asset?: Asset | undefined
  requestId?: string | undefined
  updateMask?: string | undefined
}
type BatchUpdateAssetsRequest = { requests?: UpdateAssetRequest[] | undefined }
type BatchUpdateAssetsResponse = { assets?: Asset[] | undefined }
type CpuUsageSample = { utilizedPercentage?: number | undefined }
type DiskUsageSample = { averageIops?: number | undefined }
type MemoryUsageSample = { utilizedPercentage?: number | undefined }
type NetworkUsageSample = {
  averageEgressBps?: number | undefined
  averageIngressBps?: number | undefined
}
type PerformanceSample = {
  cpu?: CpuUsageSample | undefined
  disk?: DiskUsageSample | undefined
  memory?: MemoryUsageSample | undefined
  network?: NetworkUsageSample | undefined
  sampleTime?: string | undefined
}
type AssetFrame = {
  attributes?: { [x: string]: string } | undefined
  labels?: { [x: string]: string } | undefined
  performanceSamples?: PerformanceSample[] | undefined
  reportTime?: string | undefined
  traceToken?: string | undefined
  virtualMachineDetails?: VirtualMachineDetails | undefined
}
type Frames = { framesData?: AssetFrame[] | undefined }
type ReportAssetFramesResponse = { [x: string]: unknown }
type Group = {
  createTime?: string | undefined
  description?: string | undefined
  displayName?: string | undefined
  labels?: { [x: string]: string } | undefined
  name?: string | undefined
  updateTime?: string | undefined
}
type ListGroupsResponse = {
  groups?: Group[] | undefined
  nextPageToken?: string | undefined
  unreachable?: string[] | undefined
}
type UploadFileInfo = {
  headers?: { [x: string]: string } | undefined
  signedUri?: string | undefined
  uri?: string | undefined
  uriExpirationTime?: string | undefined
}
type ImportDataFile = {
  createTime?: string | undefined
  displayName?: string | undefined
  format?:
    | 'IMPORT_JOB_FORMAT_UNSPECIFIED'
    | 'IMPORT_JOB_FORMAT_CMDB'
    | 'IMPORT_JOB_FORMAT_RVTOOLS_XLSX'
    | 'IMPORT_JOB_FORMAT_RVTOOLS_CSV'
    | 'IMPORT_JOB_FORMAT_EXPORTED_AWS_CSV'
    | 'IMPORT_JOB_FORMAT_EXPORTED_AZURE_CSV'
    | 'IMPORT_JOB_FORMAT_MANUAL_CSV'
    | undefined
  name?: string | undefined
  state?: 'STATE_UNSPECIFIED' | 'CREATING' | 'ACTIVE' | undefined
  uploadFileInfo?: UploadFileInfo | undefined
}
type ListImportDataFilesResponse = {
  importDataFiles?: ImportDataFile[] | undefined
  nextPageToken?: string | undefined
  unreachable?: string[] | undefined
}
type ImportError = {
  errorDetails?: string | undefined
  severity?: 'SEVERITY_UNSPECIFIED' | 'ERROR' | 'WARNING' | 'INFO' | undefined
}
type ImportRowError = {
  errors?: ImportError[] | undefined
  rowNumber?: number | undefined
  vmName?: string | undefined
  vmUuid?: string | undefined
}
type FileValidationReport = {
  fileErrors?: ImportError[] | undefined
  fileName?: string | undefined
  partialReport?: boolean | undefined
  rowErrors?: ImportRowError[] | undefined
}
type ValidationReport = {
  fileValidations?: FileValidationReport[] | undefined
  jobErrors?: ImportError[] | undefined
}
type ExecutionReport = {
  executionErrors?: ValidationReport | undefined
  framesReported?: number | undefined
  jobErrors?: ImportError[] | undefined
  totalRowsCount?: number | undefined
}
type GCSPayloadInfo = {
  format?:
    | 'IMPORT_JOB_FORMAT_UNSPECIFIED'
    | 'IMPORT_JOB_FORMAT_CMDB'
    | 'IMPORT_JOB_FORMAT_RVTOOLS_XLSX'
    | 'IMPORT_JOB_FORMAT_RVTOOLS_CSV'
    | 'IMPORT_JOB_FORMAT_EXPORTED_AWS_CSV'
    | 'IMPORT_JOB_FORMAT_EXPORTED_AZURE_CSV'
    | 'IMPORT_JOB_FORMAT_MANUAL_CSV'
    | undefined
  path?: string | undefined
}
type PayloadFile = { data?: string | undefined; name?: string | undefined }
type InlinePayloadInfo = {
  format?:
    | 'IMPORT_JOB_FORMAT_UNSPECIFIED'
    | 'IMPORT_JOB_FORMAT_CMDB'
    | 'IMPORT_JOB_FORMAT_RVTOOLS_XLSX'
    | 'IMPORT_JOB_FORMAT_RVTOOLS_CSV'
    | 'IMPORT_JOB_FORMAT_EXPORTED_AWS_CSV'
    | 'IMPORT_JOB_FORMAT_EXPORTED_AZURE_CSV'
    | 'IMPORT_JOB_FORMAT_MANUAL_CSV'
    | undefined
  payload?: PayloadFile[] | undefined
}
type ImportJob = {
  assetSource?: string | undefined
  completeTime?: string | undefined
  createTime?: string | undefined
  displayName?: string | undefined
  executionReport?: ExecutionReport | undefined
  gcsPayload?: GCSPayloadInfo | undefined
  inlinePayload?: InlinePayloadInfo | undefined
  labels?: { [x: string]: string } | undefined
  name?: string | undefined
  state?:
    | 'IMPORT_JOB_STATE_UNSPECIFIED'
    | 'IMPORT_JOB_STATE_PENDING'
    | 'IMPORT_JOB_STATE_RUNNING'
    | 'IMPORT_JOB_STATE_COMPLETED'
    | 'IMPORT_JOB_STATE_FAILED'
    | 'IMPORT_JOB_STATE_VALIDATING'
    | 'IMPORT_JOB_STATE_FAILED_VALIDATION'
    | 'IMPORT_JOB_STATE_READY'
    | undefined
  updateTime?: string | undefined
  validationReport?: ValidationReport | undefined
}
type ListImportJobsResponse = {
  importJobs?: ImportJob[] | undefined
  nextPageToken?: string | undefined
  unreachable?: string[] | undefined
}
type MachineSeries = { code?: string | undefined }
type MachinePreferences = { allowedMachineSeries?: MachineSeries[] | undefined }
type ComputeEnginePreferences = {
  licenseType?:
    | 'LICENSE_TYPE_UNSPECIFIED'
    | 'LICENSE_TYPE_DEFAULT'
    | 'LICENSE_TYPE_BRING_YOUR_OWN_LICENSE'
    | undefined
  machinePreferences?: MachinePreferences | undefined
  persistentDiskType?:
    | 'PERSISTENT_DISK_TYPE_UNSPECIFIED'
    | 'PERSISTENT_DISK_TYPE_STANDARD'
    | 'PERSISTENT_DISK_TYPE_BALANCED'
    | 'PERSISTENT_DISK_TYPE_SSD'
    | undefined
}
type RegionPreferences = { preferredRegions?: string[] | undefined }
type VirtualMachinePreferences = {
  commitmentPlan?:
    | 'COMMITMENT_PLAN_UNSPECIFIED'
    | 'COMMITMENT_PLAN_NONE'
    | 'COMMITMENT_PLAN_ONE_YEAR'
    | 'COMMITMENT_PLAN_THREE_YEARS'
    | undefined
  computeEnginePreferences?: ComputeEnginePreferences | undefined
  regionPreferences?: RegionPreferences | undefined
  sizingOptimizationStrategy?:
    | 'SIZING_OPTIMIZATION_STRATEGY_UNSPECIFIED'
    | 'SIZING_OPTIMIZATION_STRATEGY_SAME_AS_SOURCE'
    | 'SIZING_OPTIMIZATION_STRATEGY_MODERATE'
    | 'SIZING_OPTIMIZATION_STRATEGY_AGGRESSIVE'
    | undefined
}
type PreferenceSet = {
  createTime?: string | undefined
  description?: string | undefined
  displayName?: string | undefined
  name?: string | undefined
  updateTime?: string | undefined
  virtualMachinePreferences?: VirtualMachinePreferences | undefined
}
type ListPreferenceSetsResponse = {
  nextPageToken?: string | undefined
  preferenceSets?: PreferenceSet[] | undefined
  unreachable?: string[] | undefined
}
type ReportConfigGroupPreferenceSetAssignment = {
  group?: string | undefined
  preferenceSet?: string | undefined
}
type ReportConfig = {
  createTime?: string | undefined
  description?: string | undefined
  displayName?: string | undefined
  groupPreferencesetAssignments?: ReportConfigGroupPreferenceSetAssignment[] | undefined
  name?: string | undefined
  updateTime?: string | undefined
}
type ListReportConfigsResponse = {
  nextPageToken?: string | undefined
  reportConfigs?: ReportConfig[] | undefined
  unreachable?: string[] | undefined
}
type ReportSummaryChartDataDataPoint = { label?: string | undefined; value?: number | undefined }
type ReportSummaryChartData = { dataPoints?: ReportSummaryChartDataDataPoint[] | undefined }
type ReportSummaryHistogramChartDataBucket = {
  count?: string | undefined
  lowerBound?: string | undefined
  upperBound?: string | undefined
}
type ReportSummaryHistogramChartData = {
  buckets?: ReportSummaryHistogramChartDataBucket[] | undefined
}
type ReportSummaryUtilizationChartData = { free?: string | undefined; used?: string | undefined }
type ReportSummaryAssetAggregateStats = {
  assetAge?: ReportSummaryChartData | undefined
  coreCountHistogram?: ReportSummaryHistogramChartData | undefined
  memoryBytesHistogram?: ReportSummaryHistogramChartData | undefined
  memoryUtilization?: ReportSummaryChartData | undefined
  memoryUtilizationChart?: ReportSummaryUtilizationChartData | undefined
  operatingSystem?: ReportSummaryChartData | undefined
  storageBytesHistogram?: ReportSummaryHistogramChartData | undefined
  storageUtilization?: ReportSummaryChartData | undefined
  storageUtilizationChart?: ReportSummaryUtilizationChartData | undefined
  totalAssets?: string | undefined
  totalCores?: string | undefined
  totalMemoryBytes?: string | undefined
  totalStorageBytes?: string | undefined
}
type ReportSummaryMachineSeriesAllocation = {
  allocatedAssetCount?: string | undefined
  machineSeries?: MachineSeries | undefined
}
type ReportSummaryMachineFinding = {
  allocatedAssetCount?: string | undefined
  allocatedDiskTypes?:
    | (
        | 'PERSISTENT_DISK_TYPE_UNSPECIFIED'
        | 'PERSISTENT_DISK_TYPE_STANDARD'
        | 'PERSISTENT_DISK_TYPE_BALANCED'
        | 'PERSISTENT_DISK_TYPE_SSD'
      )[]
    | undefined
  allocatedRegions?: string[] | undefined
  machineSeriesAllocations?: ReportSummaryMachineSeriesAllocation[] | undefined
}
type Money = {
  currencyCode?: string | undefined
  nanos?: number | undefined
  units?: string | undefined
}
type ReportSummaryGroupPreferenceSetFinding = {
  description?: string | undefined
  displayName?: string | undefined
  machineFinding?: ReportSummaryMachineFinding | undefined
  machinePreferences?: VirtualMachinePreferences | undefined
  monthlyCostCompute?: Money | undefined
  monthlyCostNetworkEgress?: Money | undefined
  monthlyCostOsLicense?: Money | undefined
  monthlyCostOther?: Money | undefined
  monthlyCostStorage?: Money | undefined
  monthlyCostTotal?: Money | undefined
  preferredRegion?: string | undefined
  pricingTrack?: string | undefined
  topPriority?: string | undefined
}
type ReportSummaryGroupFinding = {
  assetAggregateStats?: ReportSummaryAssetAggregateStats | undefined
  description?: string | undefined
  displayName?: string | undefined
  overlappingAssetCount?: string | undefined
  preferenceSetFindings?: ReportSummaryGroupPreferenceSetFinding[] | undefined
}
type ReportSummary = {
  allAssetsStats?: ReportSummaryAssetAggregateStats | undefined
  groupFindings?: ReportSummaryGroupFinding[] | undefined
}
type Report = {
  createTime?: string | undefined
  description?: string | undefined
  displayName?: string | undefined
  name?: string | undefined
  state?: 'STATE_UNSPECIFIED' | 'PENDING' | 'SUCCEEDED' | 'FAILED' | undefined
  summary?: ReportSummary | undefined
  type?: 'TYPE_UNSPECIFIED' | 'TOTAL_COST_OF_OWNERSHIP' | undefined
  updateTime?: string | undefined
}
type ListReportsResponse = {
  nextPageToken?: string | undefined
  reports?: Report[] | undefined
  unreachable?: string[] | undefined
}
type ListSourcesResponse = {
  nextPageToken?: string | undefined
  sources?: Source[] | undefined
  unreachable?: string[] | undefined
}
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/v1alpha1/:group:addAssets': {
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
        } & { json: AddAssetsToGroupRequest }
        output: Operation
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1alpha1/:group:removeAssets': {
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
        } & { json: RemoveAssetsFromGroupRequest }
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
            view?:
              | 'REPORT_VIEW_UNSPECIFIED'
              | 'REPORT_VIEW_BASIC'
              | 'REPORT_VIEW_FULL'
              | 'REPORT_VIEW_STANDARD'
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
        output: Source
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
        } & { json: Source }
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
        } & { json: CancelOperationRequest }
        output: Empty
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1alpha1/:name:run': {
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
        } & { json: RunImportJobRequest }
        output: Operation
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1alpha1/:name:validate': {
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
        } & { json: ValidateImportJobRequest }
        output: Operation
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1alpha1/:parent/assets': {
      $get: {
        input: { param: { parent: string } } & {
          query: {
            filter?: string | undefined
            orderBy?: string | undefined
            pageSize?: number | undefined
            pageToken?: string | undefined
            view?:
              | 'ASSET_VIEW_UNSPECIFIED'
              | 'ASSET_VIEW_BASIC'
              | 'ASSET_VIEW_FULL'
              | 'ASSET_VIEW_STANDARD'
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
        output: ListAssetsResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1alpha1/:parent/assets:aggregateValues': {
      $post: {
        input: { param: { parent: string } } & {
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
        } & { json: AggregateAssetsValuesRequest }
        output: AggregateAssetsValuesResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1alpha1/:parent/assets:batchDelete': {
      $post: {
        input: { param: { parent: string } } & {
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
        } & { json: BatchDeleteAssetsRequest }
        output: Empty
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1alpha1/:parent/assets:batchUpdate': {
      $post: {
        input: { param: { parent: string } } & {
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
        } & { json: BatchUpdateAssetsRequest }
        output: BatchUpdateAssetsResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1alpha1/:parent/assets:reportAssetFrames': {
      $post: {
        input: { param: { parent: string } } & {
          query: {
            source?: string | undefined
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
        } & { json: Frames }
        output: ReportAssetFramesResponse
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
    '/v1alpha1/:parent/importDataFiles': {
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
        output: ListImportDataFilesResponse
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: { param: { parent: string } } & {
          query: {
            importDataFileId?: string | undefined
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
        } & { json: ImportDataFile }
        output: Operation
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1alpha1/:parent/importJobs': {
      $get: {
        input: { param: { parent: string } } & {
          query: {
            filter?: string | undefined
            orderBy?: string | undefined
            pageSize?: number | undefined
            pageToken?: string | undefined
            view?:
              | 'IMPORT_JOB_VIEW_UNSPECIFIED'
              | 'IMPORT_JOB_VIEW_BASIC'
              | 'IMPORT_JOB_VIEW_FULL'
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
        output: ListImportJobsResponse
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: { param: { parent: string } } & {
          query: {
            importJobId?: string | undefined
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
        } & { json: ImportJob }
        output: Operation
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1alpha1/:parent/preferenceSets': {
      $get: {
        input: { param: { parent: string } } & {
          query: {
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
        output: ListPreferenceSetsResponse
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: { param: { parent: string } } & {
          query: {
            preferenceSetId?: string | undefined
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
        } & { json: PreferenceSet }
        output: Operation
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1alpha1/:parent/reportConfigs': {
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
        output: ListReportConfigsResponse
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: { param: { parent: string } } & {
          query: {
            reportConfigId?: string | undefined
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
        } & { json: ReportConfig }
        output: Operation
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1alpha1/:parent/reports': {
      $get: {
        input: { param: { parent: string } } & {
          query: {
            filter?: string | undefined
            orderBy?: string | undefined
            pageSize?: number | undefined
            pageToken?: string | undefined
            view?:
              | 'REPORT_VIEW_UNSPECIFIED'
              | 'REPORT_VIEW_BASIC'
              | 'REPORT_VIEW_FULL'
              | 'REPORT_VIEW_STANDARD'
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
        output: ListReportsResponse
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: { param: { parent: string } } & {
          query: {
            reportId?: string | undefined
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
        } & { json: Report }
        output: Operation
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
  },
  '/'
>
export default routes
