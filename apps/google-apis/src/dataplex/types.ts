type Empty = { [x: string]: unknown }
type GoogleRpcStatus = {
  code?: number | undefined
  details?: { [x: string]: { [x: string]: unknown } }[] | undefined
  message?: string | undefined
}
type GoogleLongrunningOperation = {
  done?: boolean | undefined
  error?: GoogleRpcStatus | undefined
  metadata?: { [x: string]: { [x: string]: unknown } } | undefined
  name?: string | undefined
  response?: { [x: string]: { [x: string]: unknown } } | undefined
}
type GoogleCloudDataplexV1AssetDiscoverySpecCsvOptions = {
  delimiter?: string | undefined
  disableTypeInference?: boolean | undefined
  encoding?: string | undefined
  headerRows?: number | undefined
}
type GoogleCloudDataplexV1AssetDiscoverySpecJsonOptions = {
  disableTypeInference?: boolean | undefined
  encoding?: string | undefined
}
type GoogleCloudDataplexV1AssetDiscoverySpec = {
  csvOptions?: GoogleCloudDataplexV1AssetDiscoverySpecCsvOptions | undefined
  enabled?: boolean | undefined
  excludePatterns?: string[] | undefined
  includePatterns?: string[] | undefined
  jsonOptions?: GoogleCloudDataplexV1AssetDiscoverySpecJsonOptions | undefined
  schedule?: string | undefined
}
type GoogleCloudDataplexV1AssetDiscoveryStatusStats = {
  dataItems?: string | undefined
  dataSize?: string | undefined
  filesets?: string | undefined
  tables?: string | undefined
}
type GoogleCloudDataplexV1AssetDiscoveryStatus = {
  lastRunDuration?: string | undefined
  lastRunTime?: string | undefined
  message?: string | undefined
  state?: 'STATE_UNSPECIFIED' | 'SCHEDULED' | 'IN_PROGRESS' | 'PAUSED' | 'DISABLED' | undefined
  stats?: GoogleCloudDataplexV1AssetDiscoveryStatusStats | undefined
  updateTime?: string | undefined
}
type GoogleCloudDataplexV1AssetResourceSpec = {
  name?: string | undefined
  readAccessMode?: 'ACCESS_MODE_UNSPECIFIED' | 'DIRECT' | 'MANAGED' | undefined
  type?: 'TYPE_UNSPECIFIED' | 'STORAGE_BUCKET' | 'BIGQUERY_DATASET' | undefined
}
type GoogleCloudDataplexV1AssetResourceStatus = {
  managedAccessIdentity?: string | undefined
  message?: string | undefined
  state?: 'STATE_UNSPECIFIED' | 'READY' | 'ERROR' | undefined
  updateTime?: string | undefined
}
type GoogleCloudDataplexV1AssetSecurityStatus = {
  message?: string | undefined
  state?: 'STATE_UNSPECIFIED' | 'READY' | 'APPLYING' | 'ERROR' | undefined
  updateTime?: string | undefined
}
type GoogleCloudDataplexV1Asset = {
  createTime?: string | undefined
  description?: string | undefined
  discoverySpec?: GoogleCloudDataplexV1AssetDiscoverySpec | undefined
  discoveryStatus?: GoogleCloudDataplexV1AssetDiscoveryStatus | undefined
  displayName?: string | undefined
  labels?: { [x: string]: string } | undefined
  name?: string | undefined
  resourceSpec?: GoogleCloudDataplexV1AssetResourceSpec | undefined
  resourceStatus?: GoogleCloudDataplexV1AssetResourceStatus | undefined
  securityStatus?: GoogleCloudDataplexV1AssetSecurityStatus | undefined
  state?: 'STATE_UNSPECIFIED' | 'ACTIVE' | 'CREATING' | 'DELETING' | 'ACTION_REQUIRED' | undefined
  uid?: string | undefined
  updateTime?: string | undefined
}
type GoogleCloudDataplexV1StorageAccess = {
  read?: 'ACCESS_MODE_UNSPECIFIED' | 'DIRECT' | 'MANAGED' | undefined
}
type GoogleCloudDataplexV1EntityCompatibilityStatusCompatibility = {
  compatible?: boolean | undefined
  reason?: string | undefined
}
type GoogleCloudDataplexV1EntityCompatibilityStatus = {
  bigquery?: GoogleCloudDataplexV1EntityCompatibilityStatusCompatibility | undefined
  hiveMetastore?: GoogleCloudDataplexV1EntityCompatibilityStatusCompatibility | undefined
}
type GoogleCloudDataplexV1StorageFormatCsvOptions = {
  delimiter?: string | undefined
  encoding?: string | undefined
  headerRows?: number | undefined
  quote?: string | undefined
}
type GoogleCloudDataplexV1StorageFormatIcebergOptions = { metadataLocation?: string | undefined }
type GoogleCloudDataplexV1StorageFormatJsonOptions = { encoding?: string | undefined }
type GoogleCloudDataplexV1StorageFormat = {
  compressionFormat?: 'COMPRESSION_FORMAT_UNSPECIFIED' | 'GZIP' | 'BZIP2' | undefined
  csv?: GoogleCloudDataplexV1StorageFormatCsvOptions | undefined
  format?:
    | 'FORMAT_UNSPECIFIED'
    | 'PARQUET'
    | 'AVRO'
    | 'ORC'
    | 'CSV'
    | 'JSON'
    | 'IMAGE'
    | 'AUDIO'
    | 'VIDEO'
    | 'TEXT'
    | 'TFRECORD'
    | 'OTHER'
    | 'UNKNOWN'
    | undefined
  iceberg?: GoogleCloudDataplexV1StorageFormatIcebergOptions | undefined
  json?: GoogleCloudDataplexV1StorageFormatJsonOptions | undefined
  mimeType?: string | undefined
}
type GoogleCloudDataplexV1SchemaSchemaField = {
  description?: string | undefined
  fields?: GoogleCloudDataplexV1SchemaSchemaField[] | undefined
  mode?: 'MODE_UNSPECIFIED' | 'REQUIRED' | 'NULLABLE' | 'REPEATED' | undefined
  name?: string | undefined
  type?:
    | 'TYPE_UNSPECIFIED'
    | 'BOOLEAN'
    | 'BYTE'
    | 'INT16'
    | 'INT32'
    | 'INT64'
    | 'FLOAT'
    | 'DOUBLE'
    | 'DECIMAL'
    | 'STRING'
    | 'BINARY'
    | 'TIMESTAMP'
    | 'DATE'
    | 'TIME'
    | 'RECORD'
    | 'NULL'
    | undefined
}
type GoogleCloudDataplexV1SchemaPartitionField = {
  name?: string | undefined
  type?:
    | 'TYPE_UNSPECIFIED'
    | 'BOOLEAN'
    | 'BYTE'
    | 'INT16'
    | 'INT32'
    | 'INT64'
    | 'FLOAT'
    | 'DOUBLE'
    | 'DECIMAL'
    | 'STRING'
    | 'BINARY'
    | 'TIMESTAMP'
    | 'DATE'
    | 'TIME'
    | 'RECORD'
    | 'NULL'
    | undefined
}
type GoogleCloudDataplexV1Schema = {
  fields?: GoogleCloudDataplexV1SchemaSchemaField[] | undefined
  partitionFields?: GoogleCloudDataplexV1SchemaPartitionField[] | undefined
  partitionStyle?: 'PARTITION_STYLE_UNSPECIFIED' | 'HIVE_COMPATIBLE' | undefined
  userManaged?: boolean | undefined
}
type GoogleCloudDataplexV1Entity = {
  access?: GoogleCloudDataplexV1StorageAccess | undefined
  asset?: string | undefined
  catalogEntry?: string | undefined
  compatibility?: GoogleCloudDataplexV1EntityCompatibilityStatus | undefined
  createTime?: string | undefined
  dataPath?: string | undefined
  dataPathPattern?: string | undefined
  description?: string | undefined
  displayName?: string | undefined
  etag?: string | undefined
  format?: GoogleCloudDataplexV1StorageFormat | undefined
  id?: string | undefined
  name?: string | undefined
  schema?: GoogleCloudDataplexV1Schema | undefined
  system?: 'STORAGE_SYSTEM_UNSPECIFIED' | 'CLOUD_STORAGE' | 'BIGQUERY' | undefined
  type?: 'TYPE_UNSPECIFIED' | 'TABLE' | 'FILESET' | undefined
  uid?: string | undefined
  updateTime?: string | undefined
}
type GoogleCloudLocationLocation = {
  displayName?: string | undefined
  labels?: { [x: string]: string } | undefined
  locationId?: string | undefined
  metadata?: { [x: string]: { [x: string]: unknown } } | undefined
  name?: string | undefined
}
type GoogleCloudLocationListLocationsResponse = {
  locations?: GoogleCloudLocationLocation[] | undefined
  nextPageToken?: string | undefined
}
type GoogleLongrunningListOperationsResponse = {
  nextPageToken?: string | undefined
  operations?: GoogleLongrunningOperation[] | undefined
}
type GoogleLongrunningCancelOperationRequest = { [x: string]: unknown }
type GoogleCloudDataplexV1RunTaskRequest = { [x: string]: unknown }
type GoogleCloudDataplexV1Job = {
  endTime?: string | undefined
  message?: string | undefined
  name?: string | undefined
  retryCount?: number | undefined
  service?: 'SERVICE_UNSPECIFIED' | 'DATAPROC' | undefined
  serviceJob?: string | undefined
  startTime?: string | undefined
  state?:
    | 'STATE_UNSPECIFIED'
    | 'RUNNING'
    | 'CANCELLING'
    | 'CANCELLED'
    | 'SUCCEEDED'
    | 'FAILED'
    | 'ABORTED'
    | undefined
  uid?: string | undefined
}
type GoogleCloudDataplexV1RunTaskResponse = { job?: GoogleCloudDataplexV1Job | undefined }
type GoogleCloudDataplexV1ActionFailedSecurityPolicyApply = { asset?: string | undefined }
type GoogleCloudDataplexV1ActionIncompatibleDataSchema = {
  existingSchema?: string | undefined
  newSchema?: string | undefined
  sampledDataLocations?: string[] | undefined
  schemaChange?: 'SCHEMA_CHANGE_UNSPECIFIED' | 'INCOMPATIBLE' | 'MODIFIED' | undefined
  table?: string | undefined
}
type GoogleCloudDataplexV1ActionInvalidDataFormat = {
  expectedFormat?: string | undefined
  newFormat?: string | undefined
  sampledDataLocations?: string[] | undefined
}
type GoogleCloudDataplexV1ActionInvalidDataOrganization = { [x: string]: unknown }
type GoogleCloudDataplexV1ActionInvalidDataPartition = {
  expectedStructure?:
    | 'PARTITION_STRUCTURE_UNSPECIFIED'
    | 'CONSISTENT_KEYS'
    | 'HIVE_STYLE_KEYS'
    | undefined
}
type GoogleCloudDataplexV1ActionMissingData = { [x: string]: unknown }
type GoogleCloudDataplexV1ActionMissingResource = { [x: string]: unknown }
type GoogleCloudDataplexV1ActionUnauthorizedResource = { [x: string]: unknown }
type GoogleCloudDataplexV1Action = {
  asset?: string | undefined
  category?:
    | 'CATEGORY_UNSPECIFIED'
    | 'RESOURCE_MANAGEMENT'
    | 'SECURITY_POLICY'
    | 'DATA_DISCOVERY'
    | undefined
  dataLocations?: string[] | undefined
  detectTime?: string | undefined
  failedSecurityPolicyApply?: GoogleCloudDataplexV1ActionFailedSecurityPolicyApply | undefined
  incompatibleDataSchema?: GoogleCloudDataplexV1ActionIncompatibleDataSchema | undefined
  invalidDataFormat?: GoogleCloudDataplexV1ActionInvalidDataFormat | undefined
  invalidDataOrganization?: GoogleCloudDataplexV1ActionInvalidDataOrganization | undefined
  invalidDataPartition?: GoogleCloudDataplexV1ActionInvalidDataPartition | undefined
  issue?: string | undefined
  lake?: string | undefined
  missingData?: GoogleCloudDataplexV1ActionMissingData | undefined
  missingResource?: GoogleCloudDataplexV1ActionMissingResource | undefined
  name?: string | undefined
  unauthorizedResource?: GoogleCloudDataplexV1ActionUnauthorizedResource | undefined
  zone?: string | undefined
}
type GoogleCloudDataplexV1ListActionsResponse = {
  actions?: GoogleCloudDataplexV1Action[] | undefined
  nextPageToken?: string | undefined
}
type GoogleCloudDataplexV1ListAssetsResponse = {
  assets?: GoogleCloudDataplexV1Asset[] | undefined
  nextPageToken?: string | undefined
}
type GoogleCloudDataplexV1DataAccessSpec = { readers?: string[] | undefined }
type GoogleCloudDataplexV1ResourceAccessSpec = {
  owners?: string[] | undefined
  readers?: string[] | undefined
  writers?: string[] | undefined
}
type GoogleCloudDataplexV1DataAttribute = {
  attributeCount?: number | undefined
  createTime?: string | undefined
  dataAccessSpec?: GoogleCloudDataplexV1DataAccessSpec | undefined
  description?: string | undefined
  displayName?: string | undefined
  etag?: string | undefined
  labels?: { [x: string]: string } | undefined
  name?: string | undefined
  parentId?: string | undefined
  resourceAccessSpec?: GoogleCloudDataplexV1ResourceAccessSpec | undefined
  uid?: string | undefined
  updateTime?: string | undefined
}
type GoogleCloudDataplexV1ListDataAttributesResponse = {
  dataAttributes?: GoogleCloudDataplexV1DataAttribute[] | undefined
  nextPageToken?: string | undefined
  unreachableLocations?: string[] | undefined
}
type GoogleCloudDataplexV1ContentNotebook = {
  kernelType?: 'KERNEL_TYPE_UNSPECIFIED' | 'PYTHON3' | undefined
}
type GoogleCloudDataplexV1ContentSqlScript = {
  engine?: 'QUERY_ENGINE_UNSPECIFIED' | 'SPARK' | undefined
}
type GoogleCloudDataplexV1Content = {
  createTime?: string | undefined
  dataText?: string | undefined
  description?: string | undefined
  labels?: { [x: string]: string } | undefined
  name?: string | undefined
  notebook?: GoogleCloudDataplexV1ContentNotebook | undefined
  path?: string | undefined
  sqlScript?: GoogleCloudDataplexV1ContentSqlScript | undefined
  uid?: string | undefined
  updateTime?: string | undefined
}
type GoogleCloudDataplexV1ListContentResponse = {
  content?: GoogleCloudDataplexV1Content[] | undefined
  nextPageToken?: string | undefined
}
type GoogleCloudDataplexV1DataAttributeBindingPath = {
  attributes?: string[] | undefined
  name?: string | undefined
}
type GoogleCloudDataplexV1DataAttributeBinding = {
  attributes?: string[] | undefined
  createTime?: string | undefined
  description?: string | undefined
  displayName?: string | undefined
  etag?: string | undefined
  labels?: { [x: string]: string } | undefined
  name?: string | undefined
  paths?: GoogleCloudDataplexV1DataAttributeBindingPath[] | undefined
  resource?: string | undefined
  uid?: string | undefined
  updateTime?: string | undefined
}
type GoogleCloudDataplexV1ListDataAttributeBindingsResponse = {
  dataAttributeBindings?: GoogleCloudDataplexV1DataAttributeBinding[] | undefined
  nextPageToken?: string | undefined
  unreachableLocations?: string[] | undefined
}
type GoogleCloudDataplexV1DataSource = {
  entity?: string | undefined
  resource?: string | undefined
}
type GoogleCloudDataplexV1DataProfileResultProfileFieldProfileInfoDoubleFieldInfo = {
  average?: number | undefined
  max?: number | undefined
  min?: number | undefined
  quartiles?: number[] | undefined
  standardDeviation?: number | undefined
}
type GoogleCloudDataplexV1DataProfileResultProfileFieldProfileInfoIntegerFieldInfo = {
  average?: number | undefined
  max?: string | undefined
  min?: string | undefined
  quartiles?: string[] | undefined
  standardDeviation?: number | undefined
}
type GoogleCloudDataplexV1DataProfileResultProfileFieldProfileInfoStringFieldInfo = {
  averageLength?: number | undefined
  maxLength?: string | undefined
  minLength?: string | undefined
}
type GoogleCloudDataplexV1DataProfileResultProfileFieldProfileInfoTopNValue = {
  count?: string | undefined
  value?: string | undefined
}
type GoogleCloudDataplexV1DataProfileResultProfileFieldProfileInfo = {
  distinctRatio?: number | undefined
  doubleProfile?:
    | GoogleCloudDataplexV1DataProfileResultProfileFieldProfileInfoDoubleFieldInfo
    | undefined
  integerProfile?:
    | GoogleCloudDataplexV1DataProfileResultProfileFieldProfileInfoIntegerFieldInfo
    | undefined
  nullRatio?: number | undefined
  stringProfile?:
    | GoogleCloudDataplexV1DataProfileResultProfileFieldProfileInfoStringFieldInfo
    | undefined
  topNValues?: GoogleCloudDataplexV1DataProfileResultProfileFieldProfileInfoTopNValue[] | undefined
}
type GoogleCloudDataplexV1DataProfileResultProfileField = {
  mode?: string | undefined
  name?: string | undefined
  profile?: GoogleCloudDataplexV1DataProfileResultProfileFieldProfileInfo | undefined
  type?: string | undefined
}
type GoogleCloudDataplexV1DataProfileResultProfile = {
  fields?: GoogleCloudDataplexV1DataProfileResultProfileField[] | undefined
}
type GoogleCloudDataplexV1ScannedDataIncrementalField = {
  end?: string | undefined
  field?: string | undefined
  start?: string | undefined
}
type GoogleCloudDataplexV1ScannedData = {
  incrementalField?: GoogleCloudDataplexV1ScannedDataIncrementalField | undefined
}
type GoogleCloudDataplexV1DataProfileResult = {
  profile?: GoogleCloudDataplexV1DataProfileResultProfile | undefined
  rowCount?: string | undefined
  scannedData?: GoogleCloudDataplexV1ScannedData | undefined
}
type GoogleCloudDataplexV1DataProfileSpec = { [x: string]: unknown }
type GoogleCloudDataplexV1DataQualityDimensionResult = { passed?: boolean | undefined }
type GoogleCloudDataplexV1DataQualityRuleNonNullExpectation = { [x: string]: unknown }
type GoogleCloudDataplexV1DataQualityRuleRangeExpectation = {
  maxValue?: string | undefined
  minValue?: string | undefined
  strictMaxEnabled?: boolean | undefined
  strictMinEnabled?: boolean | undefined
}
type GoogleCloudDataplexV1DataQualityRuleRegexExpectation = { regex?: string | undefined }
type GoogleCloudDataplexV1DataQualityRuleRowConditionExpectation = {
  sqlExpression?: string | undefined
}
type GoogleCloudDataplexV1DataQualityRuleSetExpectation = { values?: string[] | undefined }
type GoogleCloudDataplexV1DataQualityRuleStatisticRangeExpectation = {
  maxValue?: string | undefined
  minValue?: string | undefined
  statistic?: 'STATISTIC_UNDEFINED' | 'MEAN' | 'MIN' | 'MAX' | undefined
  strictMaxEnabled?: boolean | undefined
  strictMinEnabled?: boolean | undefined
}
type GoogleCloudDataplexV1DataQualityRuleTableConditionExpectation = {
  sqlExpression?: string | undefined
}
type GoogleCloudDataplexV1DataQualityRuleUniquenessExpectation = { [x: string]: unknown }
type GoogleCloudDataplexV1DataQualityRule = {
  column?: string | undefined
  dimension?: string | undefined
  ignoreNull?: boolean | undefined
  nonNullExpectation?: GoogleCloudDataplexV1DataQualityRuleNonNullExpectation | undefined
  rangeExpectation?: GoogleCloudDataplexV1DataQualityRuleRangeExpectation | undefined
  regexExpectation?: GoogleCloudDataplexV1DataQualityRuleRegexExpectation | undefined
  rowConditionExpectation?: GoogleCloudDataplexV1DataQualityRuleRowConditionExpectation | undefined
  setExpectation?: GoogleCloudDataplexV1DataQualityRuleSetExpectation | undefined
  statisticRangeExpectation?:
    | GoogleCloudDataplexV1DataQualityRuleStatisticRangeExpectation
    | undefined
  tableConditionExpectation?:
    | GoogleCloudDataplexV1DataQualityRuleTableConditionExpectation
    | undefined
  threshold?: number | undefined
  uniquenessExpectation?: GoogleCloudDataplexV1DataQualityRuleUniquenessExpectation | undefined
}
type GoogleCloudDataplexV1DataQualityRuleResult = {
  evaluatedCount?: string | undefined
  failingRowsQuery?: string | undefined
  nullCount?: string | undefined
  passRatio?: number | undefined
  passed?: boolean | undefined
  passedCount?: string | undefined
  rule?: GoogleCloudDataplexV1DataQualityRule | undefined
}
type GoogleCloudDataplexV1DataQualityResult = {
  dimensions?: GoogleCloudDataplexV1DataQualityDimensionResult[] | undefined
  passed?: boolean | undefined
  rowCount?: string | undefined
  rules?: GoogleCloudDataplexV1DataQualityRuleResult[] | undefined
  scannedData?: GoogleCloudDataplexV1ScannedData | undefined
}
type GoogleCloudDataplexV1DataQualitySpec = {
  rules?: GoogleCloudDataplexV1DataQualityRule[] | undefined
}
type GoogleCloudDataplexV1TriggerOnDemand = { [x: string]: unknown }
type GoogleCloudDataplexV1TriggerSchedule = { cron?: string | undefined }
type GoogleCloudDataplexV1Trigger = {
  onDemand?: GoogleCloudDataplexV1TriggerOnDemand | undefined
  schedule?: GoogleCloudDataplexV1TriggerSchedule | undefined
}
type GoogleCloudDataplexV1DataScanExecutionSpec = {
  field?: string | undefined
  trigger?: GoogleCloudDataplexV1Trigger | undefined
}
type GoogleCloudDataplexV1DataScanExecutionStatus = {
  latestJobEndTime?: string | undefined
  latestJobStartTime?: string | undefined
}
type GoogleCloudDataplexV1DataScan = {
  createTime?: string | undefined
  data?: GoogleCloudDataplexV1DataSource | undefined
  dataProfileResult?: GoogleCloudDataplexV1DataProfileResult | undefined
  dataProfileSpec?: GoogleCloudDataplexV1DataProfileSpec | undefined
  dataQualityResult?: GoogleCloudDataplexV1DataQualityResult | undefined
  dataQualitySpec?: GoogleCloudDataplexV1DataQualitySpec | undefined
  description?: string | undefined
  displayName?: string | undefined
  executionSpec?: GoogleCloudDataplexV1DataScanExecutionSpec | undefined
  executionStatus?: GoogleCloudDataplexV1DataScanExecutionStatus | undefined
  labels?: { [x: string]: string } | undefined
  name?: string | undefined
  state?: 'STATE_UNSPECIFIED' | 'ACTIVE' | 'CREATING' | 'DELETING' | 'ACTION_REQUIRED' | undefined
  type?: 'DATA_SCAN_TYPE_UNSPECIFIED' | 'DATA_QUALITY' | 'DATA_PROFILE' | undefined
  uid?: string | undefined
  updateTime?: string | undefined
}
type GoogleCloudDataplexV1ListDataScansResponse = {
  dataScans?: GoogleCloudDataplexV1DataScan[] | undefined
  nextPageToken?: string | undefined
  unreachable?: string[] | undefined
}
type GoogleCloudDataplexV1DataTaxonomy = {
  attributeCount?: number | undefined
  createTime?: string | undefined
  description?: string | undefined
  displayName?: string | undefined
  etag?: string | undefined
  labels?: { [x: string]: string } | undefined
  name?: string | undefined
  uid?: string | undefined
  updateTime?: string | undefined
}
type GoogleCloudDataplexV1ListDataTaxonomiesResponse = {
  dataTaxonomies?: GoogleCloudDataplexV1DataTaxonomy[] | undefined
  nextPageToken?: string | undefined
  unreachableLocations?: string[] | undefined
}
type GoogleCloudDataplexV1ListEntitiesResponse = {
  entities?: GoogleCloudDataplexV1Entity[] | undefined
  nextPageToken?: string | undefined
}
type GoogleCloudDataplexV1EnvironmentEndpoints = {
  notebooks?: string | undefined
  sql?: string | undefined
}
type GoogleCloudDataplexV1EnvironmentInfrastructureSpecComputeResources = {
  diskSizeGb?: number | undefined
  maxNodeCount?: number | undefined
  nodeCount?: number | undefined
}
type GoogleCloudDataplexV1EnvironmentInfrastructureSpecOsImageRuntime = {
  imageVersion?: string | undefined
  javaLibraries?: string[] | undefined
  properties?: { [x: string]: string } | undefined
  pythonPackages?: string[] | undefined
}
type GoogleCloudDataplexV1EnvironmentInfrastructureSpec = {
  compute?: GoogleCloudDataplexV1EnvironmentInfrastructureSpecComputeResources | undefined
  osImage?: GoogleCloudDataplexV1EnvironmentInfrastructureSpecOsImageRuntime | undefined
}
type GoogleCloudDataplexV1EnvironmentSessionSpec = {
  enableFastStartup?: boolean | undefined
  maxIdleDuration?: string | undefined
}
type GoogleCloudDataplexV1EnvironmentSessionStatus = { active?: boolean | undefined }
type GoogleCloudDataplexV1Environment = {
  createTime?: string | undefined
  description?: string | undefined
  displayName?: string | undefined
  endpoints?: GoogleCloudDataplexV1EnvironmentEndpoints | undefined
  infrastructureSpec?: GoogleCloudDataplexV1EnvironmentInfrastructureSpec | undefined
  labels?: { [x: string]: string } | undefined
  name?: string | undefined
  sessionSpec?: GoogleCloudDataplexV1EnvironmentSessionSpec | undefined
  sessionStatus?: GoogleCloudDataplexV1EnvironmentSessionStatus | undefined
  state?: 'STATE_UNSPECIFIED' | 'ACTIVE' | 'CREATING' | 'DELETING' | 'ACTION_REQUIRED' | undefined
  uid?: string | undefined
  updateTime?: string | undefined
}
type GoogleCloudDataplexV1ListEnvironmentsResponse = {
  environments?: GoogleCloudDataplexV1Environment[] | undefined
  nextPageToken?: string | undefined
}
type GoogleCloudDataplexV1ListJobsResponse = {
  jobs?: GoogleCloudDataplexV1Job[] | undefined
  nextPageToken?: string | undefined
}
type GoogleCloudDataplexV1AssetStatus = {
  activeAssets?: number | undefined
  securityPolicyApplyingAssets?: number | undefined
  updateTime?: string | undefined
}
type GoogleCloudDataplexV1LakeMetastore = { service?: string | undefined }
type GoogleCloudDataplexV1LakeMetastoreStatus = {
  endpoint?: string | undefined
  message?: string | undefined
  state?: 'STATE_UNSPECIFIED' | 'NONE' | 'READY' | 'UPDATING' | 'ERROR' | undefined
  updateTime?: string | undefined
}
type GoogleCloudDataplexV1Lake = {
  assetStatus?: GoogleCloudDataplexV1AssetStatus | undefined
  createTime?: string | undefined
  description?: string | undefined
  displayName?: string | undefined
  labels?: { [x: string]: string } | undefined
  metastore?: GoogleCloudDataplexV1LakeMetastore | undefined
  metastoreStatus?: GoogleCloudDataplexV1LakeMetastoreStatus | undefined
  name?: string | undefined
  serviceAccount?: string | undefined
  state?: 'STATE_UNSPECIFIED' | 'ACTIVE' | 'CREATING' | 'DELETING' | 'ACTION_REQUIRED' | undefined
  uid?: string | undefined
  updateTime?: string | undefined
}
type GoogleCloudDataplexV1ListLakesResponse = {
  lakes?: GoogleCloudDataplexV1Lake[] | undefined
  nextPageToken?: string | undefined
  unreachableLocations?: string[] | undefined
}
type GoogleCloudDataplexV1Partition = {
  etag?: string | undefined
  location?: string | undefined
  name?: string | undefined
  values?: string[] | undefined
}
type GoogleCloudDataplexV1ListPartitionsResponse = {
  nextPageToken?: string | undefined
  partitions?: GoogleCloudDataplexV1Partition[] | undefined
}
type GoogleCloudDataplexV1Session = {
  createTime?: string | undefined
  name?: string | undefined
  state?: 'STATE_UNSPECIFIED' | 'ACTIVE' | 'CREATING' | 'DELETING' | 'ACTION_REQUIRED' | undefined
  userId?: string | undefined
}
type GoogleCloudDataplexV1ListSessionsResponse = {
  nextPageToken?: string | undefined
  sessions?: GoogleCloudDataplexV1Session[] | undefined
}
type GoogleCloudDataplexV1TaskExecutionSpec = {
  args?: { [x: string]: string } | undefined
  kmsKey?: string | undefined
  maxJobExecutionLifetime?: string | undefined
  project?: string | undefined
  serviceAccount?: string | undefined
}
type GoogleCloudDataplexV1TaskExecutionStatus = {
  latestJob?: GoogleCloudDataplexV1Job | undefined
  updateTime?: string | undefined
}
type GoogleCloudDataplexV1TaskInfrastructureSpecBatchComputeResources = {
  executorsCount?: number | undefined
  maxExecutorsCount?: number | undefined
}
type GoogleCloudDataplexV1TaskInfrastructureSpecContainerImageRuntime = {
  image?: string | undefined
  javaJars?: string[] | undefined
  properties?: { [x: string]: string } | undefined
  pythonPackages?: string[] | undefined
}
type GoogleCloudDataplexV1TaskInfrastructureSpecVpcNetwork = {
  network?: string | undefined
  networkTags?: string[] | undefined
  subNetwork?: string | undefined
}
type GoogleCloudDataplexV1TaskInfrastructureSpec = {
  batch?: GoogleCloudDataplexV1TaskInfrastructureSpecBatchComputeResources | undefined
  containerImage?: GoogleCloudDataplexV1TaskInfrastructureSpecContainerImageRuntime | undefined
  vpcNetwork?: GoogleCloudDataplexV1TaskInfrastructureSpecVpcNetwork | undefined
}
type GoogleCloudDataplexV1TaskNotebookTaskConfig = {
  archiveUris?: string[] | undefined
  fileUris?: string[] | undefined
  infrastructureSpec?: GoogleCloudDataplexV1TaskInfrastructureSpec | undefined
  notebook?: string | undefined
}
type GoogleCloudDataplexV1TaskSparkTaskConfig = {
  archiveUris?: string[] | undefined
  fileUris?: string[] | undefined
  infrastructureSpec?: GoogleCloudDataplexV1TaskInfrastructureSpec | undefined
  mainClass?: string | undefined
  mainJarFileUri?: string | undefined
  pythonScriptFile?: string | undefined
  sqlScript?: string | undefined
  sqlScriptFile?: string | undefined
}
type GoogleCloudDataplexV1TaskTriggerSpec = {
  disabled?: boolean | undefined
  maxRetries?: number | undefined
  schedule?: string | undefined
  startTime?: string | undefined
  type?: 'TYPE_UNSPECIFIED' | 'ON_DEMAND' | 'RECURRING' | undefined
}
type GoogleCloudDataplexV1Task = {
  createTime?: string | undefined
  description?: string | undefined
  displayName?: string | undefined
  executionSpec?: GoogleCloudDataplexV1TaskExecutionSpec | undefined
  executionStatus?: GoogleCloudDataplexV1TaskExecutionStatus | undefined
  labels?: { [x: string]: string } | undefined
  name?: string | undefined
  notebook?: GoogleCloudDataplexV1TaskNotebookTaskConfig | undefined
  spark?: GoogleCloudDataplexV1TaskSparkTaskConfig | undefined
  state?: 'STATE_UNSPECIFIED' | 'ACTIVE' | 'CREATING' | 'DELETING' | 'ACTION_REQUIRED' | undefined
  triggerSpec?: GoogleCloudDataplexV1TaskTriggerSpec | undefined
  uid?: string | undefined
  updateTime?: string | undefined
}
type GoogleCloudDataplexV1ListTasksResponse = {
  nextPageToken?: string | undefined
  tasks?: GoogleCloudDataplexV1Task[] | undefined
  unreachableLocations?: string[] | undefined
}
type GoogleCloudDataplexV1ZoneDiscoverySpecCsvOptions = {
  delimiter?: string | undefined
  disableTypeInference?: boolean | undefined
  encoding?: string | undefined
  headerRows?: number | undefined
}
type GoogleCloudDataplexV1ZoneDiscoverySpecJsonOptions = {
  disableTypeInference?: boolean | undefined
  encoding?: string | undefined
}
type GoogleCloudDataplexV1ZoneDiscoverySpec = {
  csvOptions?: GoogleCloudDataplexV1ZoneDiscoverySpecCsvOptions | undefined
  enabled?: boolean | undefined
  excludePatterns?: string[] | undefined
  includePatterns?: string[] | undefined
  jsonOptions?: GoogleCloudDataplexV1ZoneDiscoverySpecJsonOptions | undefined
  schedule?: string | undefined
}
type GoogleCloudDataplexV1ZoneResourceSpec = {
  locationType?: 'LOCATION_TYPE_UNSPECIFIED' | 'SINGLE_REGION' | 'MULTI_REGION' | undefined
}
type GoogleCloudDataplexV1Zone = {
  assetStatus?: GoogleCloudDataplexV1AssetStatus | undefined
  createTime?: string | undefined
  description?: string | undefined
  discoverySpec?: GoogleCloudDataplexV1ZoneDiscoverySpec | undefined
  displayName?: string | undefined
  labels?: { [x: string]: string } | undefined
  name?: string | undefined
  resourceSpec?: GoogleCloudDataplexV1ZoneResourceSpec | undefined
  state?: 'STATE_UNSPECIFIED' | 'ACTIVE' | 'CREATING' | 'DELETING' | 'ACTION_REQUIRED' | undefined
  type?: 'TYPE_UNSPECIFIED' | 'RAW' | 'CURATED' | undefined
  uid?: string | undefined
  updateTime?: string | undefined
}
type GoogleCloudDataplexV1ListZonesResponse = {
  nextPageToken?: string | undefined
  zones?: GoogleCloudDataplexV1Zone[] | undefined
}
type GoogleIamV1AuditLogConfig = {
  exemptedMembers?: string[] | undefined
  logType?: 'LOG_TYPE_UNSPECIFIED' | 'ADMIN_READ' | 'DATA_WRITE' | 'DATA_READ' | undefined
}
type GoogleIamV1AuditConfig = {
  auditLogConfigs?: GoogleIamV1AuditLogConfig[] | undefined
  service?: string | undefined
}
type GoogleTypeExpr = {
  description?: string | undefined
  expression?: string | undefined
  location?: string | undefined
  title?: string | undefined
}
type GoogleIamV1Binding = {
  condition?: GoogleTypeExpr | undefined
  members?: string[] | undefined
  role?: string | undefined
}
type GoogleIamV1Policy = {
  auditConfigs?: GoogleIamV1AuditConfig[] | undefined
  bindings?: GoogleIamV1Binding[] | undefined
  etag?: string | undefined
  version?: number | undefined
}
type GoogleIamV1SetIamPolicyRequest = {
  policy?: GoogleIamV1Policy | undefined
  updateMask?: string | undefined
}
type GoogleIamV1TestIamPermissionsRequest = { permissions?: string[] | undefined }
type GoogleIamV1TestIamPermissionsResponse = { permissions?: string[] | undefined }
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/v1/:name': {
      $delete: {
        input: { param: { name: string } } & {
          query: {
            etag?: string | undefined
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
        output: Empty
        outputFormat: 'json'
        status: 200
      }
      $get: {
        input: { param: { name: string } } & {
          query: {
            view?: 'ENTITY_VIEW_UNSPECIFIED' | 'BASIC' | 'SCHEMA' | 'FULL' | undefined
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
        output: GoogleLongrunningOperation
        outputFormat: 'json'
        status: 200
      }
      $patch: {
        input: { param: { name: string } } & {
          query: {
            updateMask?: string | undefined
            validateOnly?: boolean | undefined
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
        } & { json: GoogleCloudDataplexV1Asset }
        output: GoogleLongrunningOperation
        outputFormat: 'json'
        status: 200
      }
      $put: {
        input: { param: { name: string } } & {
          query: {
            validateOnly?: boolean | undefined
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
        } & { json: GoogleCloudDataplexV1Entity }
        output: GoogleCloudDataplexV1Entity
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/:name/locations': {
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
        output: GoogleCloudLocationListLocationsResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/:name/operations': {
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
        output: GoogleLongrunningListOperationsResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/:name:cancel': {
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
        } & { json: GoogleLongrunningCancelOperationRequest }
        output: Empty
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/:name:run': {
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
        } & { json: GoogleCloudDataplexV1RunTaskRequest }
        output: GoogleCloudDataplexV1RunTaskResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/:parent/actions': {
      $get: {
        input: { param: { parent: string } } & {
          query: {
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
        output: GoogleCloudDataplexV1ListActionsResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/:parent/assets': {
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
        output: GoogleCloudDataplexV1ListAssetsResponse
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: { param: { parent: string } } & {
          query: {
            assetId?: string | undefined
            validateOnly?: boolean | undefined
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
        } & { json: GoogleCloudDataplexV1Asset }
        output: GoogleLongrunningOperation
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/:parent/attributes': {
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
        output: GoogleCloudDataplexV1ListDataAttributesResponse
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: { param: { parent: string } } & {
          query: {
            dataAttributeId?: string | undefined
            validateOnly?: boolean | undefined
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
        } & { json: GoogleCloudDataplexV1DataAttribute }
        output: GoogleLongrunningOperation
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/:parent/content': {
      $get: {
        input: { param: { parent: string } } & {
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
        output: GoogleCloudDataplexV1ListContentResponse
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: { param: { parent: string } } & {
          query: {
            validateOnly?: boolean | undefined
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
        } & { json: GoogleCloudDataplexV1Content }
        output: GoogleCloudDataplexV1Content
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/:parent/contentitems': {
      $get: {
        input: { param: { parent: string } } & {
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
        output: GoogleCloudDataplexV1ListContentResponse
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: { param: { parent: string } } & {
          query: {
            validateOnly?: boolean | undefined
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
        } & { json: GoogleCloudDataplexV1Content }
        output: GoogleCloudDataplexV1Content
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/:parent/dataAttributeBindings': {
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
        output: GoogleCloudDataplexV1ListDataAttributeBindingsResponse
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: { param: { parent: string } } & {
          query: {
            dataAttributeBindingId?: string | undefined
            validateOnly?: boolean | undefined
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
        } & { json: GoogleCloudDataplexV1DataAttributeBinding }
        output: GoogleLongrunningOperation
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/:parent/dataScans': {
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
        output: GoogleCloudDataplexV1ListDataScansResponse
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: { param: { parent: string } } & {
          query: {
            dataScanId?: string | undefined
            validateOnly?: boolean | undefined
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
        } & { json: GoogleCloudDataplexV1DataScan }
        output: GoogleLongrunningOperation
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/:parent/dataTaxonomies': {
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
        output: GoogleCloudDataplexV1ListDataTaxonomiesResponse
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: { param: { parent: string } } & {
          query: {
            dataTaxonomyId?: string | undefined
            validateOnly?: boolean | undefined
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
        } & { json: GoogleCloudDataplexV1DataTaxonomy }
        output: GoogleLongrunningOperation
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/:parent/entities': {
      $get: {
        input: { param: { parent: string } } & {
          query: {
            filter?: string | undefined
            pageSize?: number | undefined
            pageToken?: string | undefined
            view?: 'ENTITY_VIEW_UNSPECIFIED' | 'TABLES' | 'FILESETS' | undefined
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
        output: GoogleCloudDataplexV1ListEntitiesResponse
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: { param: { parent: string } } & {
          query: {
            validateOnly?: boolean | undefined
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
        } & { json: GoogleCloudDataplexV1Entity }
        output: GoogleCloudDataplexV1Entity
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/:parent/environments': {
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
        output: GoogleCloudDataplexV1ListEnvironmentsResponse
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: { param: { parent: string } } & {
          query: {
            environmentId?: string | undefined
            validateOnly?: boolean | undefined
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
        } & { json: GoogleCloudDataplexV1Environment }
        output: GoogleLongrunningOperation
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/:parent/jobs': {
      $get: {
        input: { param: { parent: string } } & {
          query: {
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
        output: GoogleCloudDataplexV1ListJobsResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/:parent/lakes': {
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
        output: GoogleCloudDataplexV1ListLakesResponse
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: { param: { parent: string } } & {
          query: {
            lakeId?: string | undefined
            validateOnly?: boolean | undefined
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
        } & { json: GoogleCloudDataplexV1Lake }
        output: GoogleLongrunningOperation
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/:parent/partitions': {
      $get: {
        input: { param: { parent: string } } & {
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
        output: GoogleCloudDataplexV1ListPartitionsResponse
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: { param: { parent: string } } & {
          query: {
            validateOnly?: boolean | undefined
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
        } & { json: GoogleCloudDataplexV1Partition }
        output: GoogleCloudDataplexV1Partition
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/:parent/sessions': {
      $get: {
        input: { param: { parent: string } } & {
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
        output: GoogleCloudDataplexV1ListSessionsResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/:parent/tasks': {
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
        output: GoogleCloudDataplexV1ListTasksResponse
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: { param: { parent: string } } & {
          query: {
            taskId?: string | undefined
            validateOnly?: boolean | undefined
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
        } & { json: GoogleCloudDataplexV1Task }
        output: GoogleLongrunningOperation
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/:parent/zones': {
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
        output: GoogleCloudDataplexV1ListZonesResponse
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: { param: { parent: string } } & {
          query: {
            validateOnly?: boolean | undefined
            zoneId?: string | undefined
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
        } & { json: GoogleCloudDataplexV1Zone }
        output: GoogleLongrunningOperation
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/:resource:getIamPolicy': {
      $get: {
        input: { param: { resource: string } } & {
          query: {
            'options.requestedPolicyVersion'?: number | undefined
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
        output: GoogleIamV1Policy
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/:resource:setIamPolicy': {
      $post: {
        input: { param: { resource: string } } & {
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
        } & { json: GoogleIamV1SetIamPolicyRequest }
        output: GoogleIamV1Policy
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/:resource:testIamPermissions': {
      $post: {
        input: { param: { resource: string } } & {
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
        } & { json: GoogleIamV1TestIamPermissionsRequest }
        output: GoogleIamV1TestIamPermissionsResponse
        outputFormat: 'json'
        status: 200
      }
    }
  },
  '/'
>
export default routes
