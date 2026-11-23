type GoogleCloudApigeeV1AdvancedApiOpsConfig = { enabled?: boolean | undefined }
type GoogleCloudApigeeV1ApiSecurityConfig = {
  enabled?: boolean | undefined
  expiresAt?: string | undefined
}
type GoogleCloudApigeeV1ConnectorsPlatformConfig = {
  enabled?: boolean | undefined
  expiresAt?: string | undefined
}
type GoogleCloudApigeeV1IntegrationConfig = { enabled?: boolean | undefined }
type GoogleCloudApigeeV1MonetizationConfig = { enabled?: boolean | undefined }
type GoogleCloudApigeeV1AddonsConfig = {
  advancedApiOpsConfig?: GoogleCloudApigeeV1AdvancedApiOpsConfig | undefined
  apiSecurityConfig?: GoogleCloudApigeeV1ApiSecurityConfig | undefined
  connectorsPlatformConfig?: GoogleCloudApigeeV1ConnectorsPlatformConfig | undefined
  integrationConfig?: GoogleCloudApigeeV1IntegrationConfig | undefined
  monetizationConfig?: GoogleCloudApigeeV1MonetizationConfig | undefined
}
type GoogleCloudApigeeV1Property = { name?: string | undefined; value?: string | undefined }
type GoogleCloudApigeeV1Properties = { property?: GoogleCloudApigeeV1Property[] | undefined }
type GoogleCloudApigeeV1Organization = {
  addonsConfig?: GoogleCloudApigeeV1AddonsConfig | undefined
  analyticsRegion?: string | undefined
  apiConsumerDataEncryptionKeyName?: string | undefined
  apiConsumerDataLocation?: string | undefined
  apigeeProjectId?: string | undefined
  attributes?: string[] | undefined
  authorizedNetwork?: string | undefined
  billingType?: 'BILLING_TYPE_UNSPECIFIED' | 'SUBSCRIPTION' | 'EVALUATION' | 'PAYG' | undefined
  caCertificate?: string | undefined
  controlPlaneEncryptionKeyName?: string | undefined
  createdAt?: string | undefined
  customerName?: string | undefined
  description?: string | undefined
  displayName?: string | undefined
  environments?: string[] | undefined
  expiresAt?: string | undefined
  lastModifiedAt?: string | undefined
  name?: string | undefined
  portalDisabled?: boolean | undefined
  projectId?: string | undefined
  properties?: GoogleCloudApigeeV1Properties | undefined
  runtimeDatabaseEncryptionKeyName?: string | undefined
  runtimeType?: 'RUNTIME_TYPE_UNSPECIFIED' | 'CLOUD' | 'HYBRID' | undefined
  state?: 'STATE_UNSPECIFIED' | 'CREATING' | 'ACTIVE' | 'DELETING' | 'UPDATING' | undefined
  subscriptionType?: 'SUBSCRIPTION_TYPE_UNSPECIFIED' | 'PAID' | 'TRIAL' | undefined
  type?: 'TYPE_UNSPECIFIED' | 'TYPE_TRIAL' | 'TYPE_PAID' | 'TYPE_INTERNAL' | undefined
}
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
type GoogleCloudApigeeV1UpdateError = {
  code?:
    | 'OK'
    | 'CANCELLED'
    | 'UNKNOWN'
    | 'INVALID_ARGUMENT'
    | 'DEADLINE_EXCEEDED'
    | 'NOT_FOUND'
    | 'ALREADY_EXISTS'
    | 'PERMISSION_DENIED'
    | 'UNAUTHENTICATED'
    | 'RESOURCE_EXHAUSTED'
    | 'FAILED_PRECONDITION'
    | 'ABORTED'
    | 'OUT_OF_RANGE'
    | 'UNIMPLEMENTED'
    | 'INTERNAL'
    | 'UNAVAILABLE'
    | 'DATA_LOSS'
    | undefined
  message?: string | undefined
  resource?: string | undefined
  type?: string | undefined
}
type GoogleCloudApigeeV1RevisionStatus = {
  errors?: GoogleCloudApigeeV1UpdateError[] | undefined
  jsonSpec?: string | undefined
  replicas?: number | undefined
  revisionId?: string | undefined
}
type GoogleCloudApigeeV1ResourceStatus = {
  resource?: string | undefined
  revisions?: GoogleCloudApigeeV1RevisionStatus[] | undefined
  totalReplicas?: number | undefined
  uid?: string | undefined
}
type GoogleCloudApigeeV1ReportInstanceStatusRequest = {
  instanceUid?: string | undefined
  reportTime?: string | undefined
  resources?: GoogleCloudApigeeV1ResourceStatus[] | undefined
}
type GoogleCloudApigeeV1ReportInstanceStatusResponse = { [x: string]: unknown }
type GoogleCloudApigeeV1ApiResponseWrapper = {
  errorCode?: string | undefined
  message?: string | undefined
  requestId?: string | undefined
  status?: string | undefined
}
type GoogleCloudApigeeV1ApiCategoryData = {
  id?: string | undefined
  name?: string | undefined
  siteId?: string | undefined
  updateTime?: string | undefined
}
type GoogleCloudApigeeV1ApiCategory = {
  data?: GoogleCloudApigeeV1ApiCategoryData | undefined
  errorCode?: string | undefined
  message?: string | undefined
  requestId?: string | undefined
  status?: string | undefined
}
type GoogleApiHttpBody = {
  contentType?: string | undefined
  data?: string | undefined
  extensions?: { [x: string]: { [x: string]: unknown } }[] | undefined
}
type GoogleCloudApigeeV1ConfigVersion = {
  majorVersion?: number | undefined
  minorVersion?: number | undefined
}
type GoogleCloudApigeeV1ResourceFile = { name?: string | undefined; type?: string | undefined }
type GoogleCloudApigeeV1ResourceFiles = {
  resourceFile?: GoogleCloudApigeeV1ResourceFile[] | undefined
}
type GoogleCloudApigeeV1SharedFlowRevision = {
  configurationVersion?: GoogleCloudApigeeV1ConfigVersion | undefined
  contextInfo?: string | undefined
  createdAt?: string | undefined
  description?: string | undefined
  displayName?: string | undefined
  entityMetaDataAsProperties?: { [x: string]: string } | undefined
  lastModifiedAt?: string | undefined
  name?: string | undefined
  policies?: string[] | undefined
  resourceFiles?: GoogleCloudApigeeV1ResourceFiles | undefined
  resources?: string[] | undefined
  revision?: string | undefined
  sharedFlows?: string[] | undefined
  type?: string | undefined
}
type GoogleCloudApigeeV1CustomReportMetric = {
  function?: string | undefined
  name?: string | undefined
}
type GoogleCloudApigeeV1Attribute = { name?: string | undefined; value?: string | undefined }
type GoogleCloudApigeeV1ReportProperty = {
  property?: string | undefined
  value?: GoogleCloudApigeeV1Attribute[] | undefined
}
type GoogleCloudApigeeV1CustomReport = {
  chartType?: string | undefined
  comments?: string[] | undefined
  createdAt?: string | undefined
  dimensions?: string[] | undefined
  displayName?: string | undefined
  environment?: string | undefined
  filter?: string | undefined
  fromTime?: string | undefined
  lastModifiedAt?: string | undefined
  lastViewedAt?: string | undefined
  limit?: string | undefined
  metrics?: GoogleCloudApigeeV1CustomReportMetric[] | undefined
  name?: string | undefined
  offset?: string | undefined
  organization?: string | undefined
  properties?: GoogleCloudApigeeV1ReportProperty[] | undefined
  sortByCols?: string[] | undefined
  sortOrder?: string | undefined
  tags?: string[] | undefined
  timeUnit?: string | undefined
  toTime?: string | undefined
  topk?: string | undefined
}
type GoogleCloudApigeeV1Attributes = { attribute?: GoogleCloudApigeeV1Attribute[] | undefined }
type GoogleProtobufEmpty = { [x: string]: unknown }
type GoogleCloudApigeeV1InstanceDeploymentStatusDeployedRevision = {
  percentage?: number | undefined
  revision?: string | undefined
}
type GoogleCloudApigeeV1InstanceDeploymentStatusDeployedRoute = {
  basepath?: string | undefined
  envgroup?: string | undefined
  environment?: string | undefined
  percentage?: number | undefined
}
type GoogleCloudApigeeV1InstanceDeploymentStatus = {
  deployedRevisions?: GoogleCloudApigeeV1InstanceDeploymentStatusDeployedRevision[] | undefined
  deployedRoutes?: GoogleCloudApigeeV1InstanceDeploymentStatusDeployedRoute[] | undefined
  instance?: string | undefined
}
type GoogleCloudApigeeV1PodStatus = {
  appVersion?: string | undefined
  deploymentStatus?: string | undefined
  deploymentStatusTime?: string | undefined
  deploymentTime?: string | undefined
  podName?: string | undefined
  podStatus?: string | undefined
  podStatusTime?: string | undefined
  statusCode?: string | undefined
  statusCodeDetails?: string | undefined
}
type GoogleCloudApigeeV1DeploymentChangeReportRoutingDeployment = {
  apiProxy?: string | undefined
  basepath?: string | undefined
  environment?: string | undefined
  revision?: string | undefined
}
type GoogleCloudApigeeV1DeploymentChangeReportRoutingConflict = {
  conflictingDeployment?: GoogleCloudApigeeV1DeploymentChangeReportRoutingDeployment | undefined
  description?: string | undefined
  environmentGroup?: string | undefined
}
type GoogleCloudApigeeV1Deployment = {
  apiProxy?: string | undefined
  deployStartTime?: string | undefined
  environment?: string | undefined
  errors?: GoogleRpcStatus[] | undefined
  instances?: GoogleCloudApigeeV1InstanceDeploymentStatus[] | undefined
  pods?: GoogleCloudApigeeV1PodStatus[] | undefined
  revision?: string | undefined
  routeConflicts?: GoogleCloudApigeeV1DeploymentChangeReportRoutingConflict[] | undefined
  serviceAccount?: string | undefined
  state?: 'RUNTIME_STATE_UNSPECIFIED' | 'READY' | 'PROGRESSING' | 'ERROR' | undefined
}
type GoogleCloudApigeeV1DeploymentChangeReportRoutingChange = {
  description?: string | undefined
  environmentGroup?: string | undefined
  fromDeployment?: GoogleCloudApigeeV1DeploymentChangeReportRoutingDeployment | undefined
  shouldSequenceRollout?: boolean | undefined
  toDeployment?: GoogleCloudApigeeV1DeploymentChangeReportRoutingDeployment | undefined
}
type GoogleRpcPreconditionFailureViolation = {
  description?: string | undefined
  subject?: string | undefined
  type?: string | undefined
}
type GoogleRpcPreconditionFailure = {
  violations?: GoogleRpcPreconditionFailureViolation[] | undefined
}
type GoogleCloudApigeeV1DeploymentChangeReport = {
  routingChanges?: GoogleCloudApigeeV1DeploymentChangeReportRoutingChange[] | undefined
  routingConflicts?: GoogleCloudApigeeV1DeploymentChangeReportRoutingConflict[] | undefined
  validationErrors?: GoogleRpcPreconditionFailure | undefined
}
type GoogleLongrunningListOperationsResponse = {
  nextPageToken?: string | undefined
  operations?: GoogleLongrunningOperation[] | undefined
}
type GoogleCloudApigeeV1ActivateNatAddressRequest = { [x: string]: unknown }
type GoogleTypeMoney = {
  currencyCode?: string | undefined
  nanos?: number | undefined
  units?: string | undefined
}
type GoogleCloudApigeeV1AdjustDeveloperBalanceRequest = { adjustment?: GoogleTypeMoney | undefined }
type GoogleCloudApigeeV1DeveloperBalanceWallet = {
  balance?: GoogleTypeMoney | undefined
  lastCreditTime?: string | undefined
}
type GoogleCloudApigeeV1DeveloperBalance = {
  wallets?: GoogleCloudApigeeV1DeveloperBalanceWallet[] | undefined
}
type GoogleCloudApigeeV1CreditDeveloperBalanceRequest = {
  transactionAmount?: GoogleTypeMoney | undefined
  transactionId?: string | undefined
}
type GoogleCloudApigeeV1ExpireDeveloperSubscriptionRequest = { [x: string]: unknown }
type GoogleCloudApigeeV1DeveloperSubscription = {
  apiproduct?: string | undefined
  createdAt?: string | undefined
  endTime?: string | undefined
  lastModifiedAt?: string | undefined
  name?: string | undefined
  startTime?: string | undefined
}
type GoogleCloudApigeeV1GenerateDownloadUrlRequest = { [x: string]: unknown }
type GoogleCloudApigeeV1GenerateDownloadUrlResponse = { downloadUri?: string | undefined }
type GoogleCloudApigeeV1OrganizationProjectMapping = {
  location?: string | undefined
  organization?: string | undefined
  projectId?: string | undefined
  projectIds?: string[] | undefined
}
type GoogleCloudApigeeV1GetSyncAuthorizationRequest = { [x: string]: unknown }
type GoogleCloudApigeeV1SyncAuthorization = {
  etag?: string | undefined
  identities?: string[] | undefined
}
type GoogleCloudApigeeV1SecurityProfileEnvironment = {
  attachTime?: string | undefined
  environment?: string | undefined
}
type GoogleCloudApigeeV1SecurityProfileScoringConfig = {
  description?: string | undefined
  scorePath?: string | undefined
  title?: string | undefined
}
type GoogleCloudApigeeV1SecurityProfile = {
  displayName?: string | undefined
  environments?: GoogleCloudApigeeV1SecurityProfileEnvironment[] | undefined
  maxScore?: number | undefined
  minScore?: number | undefined
  name?: string | undefined
  revisionCreateTime?: string | undefined
  revisionId?: string | undefined
  revisionPublishTime?: string | undefined
  revisionUpdateTime?: string | undefined
  scoringConfigs?: GoogleCloudApigeeV1SecurityProfileScoringConfig[] | undefined
}
type GoogleCloudApigeeV1ListSecurityProfileRevisionsResponse = {
  nextPageToken?: string | undefined
  securityProfiles?: GoogleCloudApigeeV1SecurityProfile[] | undefined
}
type GoogleCloudApigeeV1MetricAggregation = {
  aggregation?:
    | 'AGGREGATION_FUNCTION_UNSPECIFIED'
    | 'AVG'
    | 'SUM'
    | 'MIN'
    | 'MAX'
    | 'COUNT_DISTINCT'
    | undefined
  name?: string | undefined
  order?: 'ORDER_UNSPECIFIED' | 'ASCENDING' | 'DESCENDING' | undefined
}
type GoogleTypeInterval = { endTime?: string | undefined; startTime?: string | undefined }
type GoogleCloudApigeeV1QueryTabularStatsRequest = {
  dimensions?: string[] | undefined
  filter?: string | undefined
  metrics?: GoogleCloudApigeeV1MetricAggregation[] | undefined
  pageSize?: number | undefined
  pageToken?: string | undefined
  timeRange?: GoogleTypeInterval | undefined
}
type GoogleCloudApigeeV1QueryTabularStatsResponse = {
  columns?: string[] | undefined
  nextPageToken?: string | undefined
  values?: { [x: string]: unknown }[][] | undefined
}
type GoogleCloudApigeeV1QueryTimeSeriesStatsRequest = {
  dimensions?: string[] | undefined
  filter?: string | undefined
  metrics?: GoogleCloudApigeeV1MetricAggregation[] | undefined
  pageSize?: number | undefined
  pageToken?: string | undefined
  timeRange?: GoogleTypeInterval | undefined
  timestampOrder?: 'ORDER_UNSPECIFIED' | 'ASCENDING' | 'DESCENDING' | undefined
  windowSize?: 'WINDOW_SIZE_UNSPECIFIED' | 'MINUTE' | 'HOUR' | 'DAY' | 'MONTH' | undefined
}
type GoogleCloudApigeeV1QueryTimeSeriesStatsResponseSequence = {
  dimensions?: { [x: string]: string } | undefined
  points?: { [x: string]: unknown }[][] | undefined
}
type GoogleCloudApigeeV1QueryTimeSeriesStatsResponse = {
  columns?: string[] | undefined
  nextPageToken?: string | undefined
  values?: GoogleCloudApigeeV1QueryTimeSeriesStatsResponseSequence[] | undefined
}
type GoogleCloudApigeeV1SetAddonsRequest = {
  addonsConfig?: GoogleCloudApigeeV1AddonsConfig | undefined
}
type GoogleCloudApigeeV1ListOrganizationsResponse = {
  organizations?: GoogleCloudApigeeV1OrganizationProjectMapping[] | undefined
}
type GoogleCloudApigeeV1CertInfo = {
  basicConstraints?: string | undefined
  expiryDate?: string | undefined
  isValid?: string | undefined
  issuer?: string | undefined
  publicKey?: string | undefined
  serialNumber?: string | undefined
  sigAlgName?: string | undefined
  subject?: string | undefined
  subjectAlternativeNames?: string[] | undefined
  validFrom?: string | undefined
  version?: number | undefined
}
type GoogleCloudApigeeV1Certificate = { certInfo?: GoogleCloudApigeeV1CertInfo[] | undefined }
type GoogleCloudApigeeV1Alias = {
  alias?: string | undefined
  certsInfo?: GoogleCloudApigeeV1Certificate | undefined
  type?: 'ALIAS_TYPE_UNSPECIFIED' | 'CERT' | 'KEY_CERT' | undefined
}
type GoogleCloudApigeeV1DatastoreConfig = {
  bucketName?: string | undefined
  datasetName?: string | undefined
  path?: string | undefined
  projectId?: string | undefined
  tablePrefix?: string | undefined
}
type GoogleCloudApigeeV1Datastore = {
  createTime?: string | undefined
  datastoreConfig?: GoogleCloudApigeeV1DatastoreConfig | undefined
  displayName?: string | undefined
  lastUpdateTime?: string | undefined
  org?: string | undefined
  self?: string | undefined
  targetType?: string | undefined
}
type GoogleCloudApigeeV1ListDatastoresResponse = {
  datastores?: GoogleCloudApigeeV1Datastore[] | undefined
}
type GoogleCloudApigeeV1TestDatastoreResponse = {
  error?: string | undefined
  state?: string | undefined
}
type GoogleCloudApigeeV1Export = {
  created?: string | undefined
  datastoreName?: string | undefined
  description?: string | undefined
  error?: string | undefined
  executionTime?: string | undefined
  name?: string | undefined
  self?: string | undefined
  state?: string | undefined
  updated?: string | undefined
}
type GoogleCloudApigeeV1ListExportsResponse = { exports?: GoogleCloudApigeeV1Export[] | undefined }
type GoogleCloudApigeeV1DateRange = { end?: string | undefined; start?: string | undefined }
type GoogleCloudApigeeV1ExportRequest = {
  csvDelimiter?: string | undefined
  datastoreName?: string | undefined
  dateRange?: GoogleCloudApigeeV1DateRange | undefined
  description?: string | undefined
  name?: string | undefined
  outputFormat?: string | undefined
}
type GoogleCloudApigeeV1ListApiCategoriesResponse = {
  data?: GoogleCloudApigeeV1ApiCategoryData[] | undefined
  errorCode?: string | undefined
  message?: string | undefined
  requestId?: string | undefined
  status?: string | undefined
}
type GoogleCloudApigeeV1GraphQLOperation = {
  operation?: string | undefined
  operationTypes?: string[] | undefined
}
type GoogleCloudApigeeV1Quota = {
  interval?: string | undefined
  limit?: string | undefined
  timeUnit?: string | undefined
}
type GoogleCloudApigeeV1GraphQLOperationConfig = {
  apiSource?: string | undefined
  attributes?: GoogleCloudApigeeV1Attribute[] | undefined
  operations?: GoogleCloudApigeeV1GraphQLOperation[] | undefined
  quota?: GoogleCloudApigeeV1Quota | undefined
}
type GoogleCloudApigeeV1GraphQLOperationGroup = {
  operationConfigType?: string | undefined
  operationConfigs?: GoogleCloudApigeeV1GraphQLOperationConfig[] | undefined
}
type GoogleCloudApigeeV1Operation = {
  methods?: string[] | undefined
  resource?: string | undefined
}
type GoogleCloudApigeeV1OperationConfig = {
  apiSource?: string | undefined
  attributes?: GoogleCloudApigeeV1Attribute[] | undefined
  operations?: GoogleCloudApigeeV1Operation[] | undefined
  quota?: GoogleCloudApigeeV1Quota | undefined
}
type GoogleCloudApigeeV1OperationGroup = {
  operationConfigType?: string | undefined
  operationConfigs?: GoogleCloudApigeeV1OperationConfig[] | undefined
}
type GoogleCloudApigeeV1ApiProduct = {
  apiResources?: string[] | undefined
  approvalType?: string | undefined
  attributes?: GoogleCloudApigeeV1Attribute[] | undefined
  createdAt?: string | undefined
  description?: string | undefined
  displayName?: string | undefined
  environments?: string[] | undefined
  graphqlOperationGroup?: GoogleCloudApigeeV1GraphQLOperationGroup | undefined
  lastModifiedAt?: string | undefined
  name?: string | undefined
  operationGroup?: GoogleCloudApigeeV1OperationGroup | undefined
  proxies?: string[] | undefined
  quota?: string | undefined
  quotaCounterScope?: 'QUOTA_COUNTER_SCOPE_UNSPECIFIED' | 'PROXY' | 'OPERATION' | undefined
  quotaInterval?: string | undefined
  quotaTimeUnit?: string | undefined
  scopes?: string[] | undefined
}
type GoogleCloudApigeeV1ListApiProductsResponse = {
  apiProduct?: GoogleCloudApigeeV1ApiProduct[] | undefined
}
type GoogleCloudApigeeV1EntityMetadata = {
  createdAt?: string | undefined
  lastModifiedAt?: string | undefined
  subType?: string | undefined
}
type GoogleCloudApigeeV1ApiProxy = {
  apiProxyType?: 'API_PROXY_TYPE_UNSPECIFIED' | 'PROGRAMMABLE' | 'CONFIGURABLE' | undefined
  labels?: { [x: string]: string } | undefined
  latestRevisionId?: string | undefined
  metaData?: GoogleCloudApigeeV1EntityMetadata | undefined
  name?: string | undefined
  readOnly?: boolean | undefined
  revision?: string[] | undefined
}
type GoogleCloudApigeeV1ListApiProxiesResponse = {
  proxies?: GoogleCloudApigeeV1ApiProxy[] | undefined
}
type GoogleCloudApigeeV1ApiProxyRevision = {
  archive?: string | undefined
  basepaths?: string[] | undefined
  configurationVersion?: GoogleCloudApigeeV1ConfigVersion | undefined
  contextInfo?: string | undefined
  createdAt?: string | undefined
  description?: string | undefined
  displayName?: string | undefined
  entityMetaDataAsProperties?: { [x: string]: string } | undefined
  integrationEndpoints?: string[] | undefined
  lastModifiedAt?: string | undefined
  name?: string | undefined
  policies?: string[] | undefined
  proxies?: string[] | undefined
  proxyEndpoints?: string[] | undefined
  resourceFiles?: GoogleCloudApigeeV1ResourceFiles | undefined
  resources?: string[] | undefined
  revision?: string | undefined
  sharedFlows?: string[] | undefined
  spec?: string | undefined
  targetEndpoints?: string[] | undefined
  targetServers?: string[] | undefined
  targets?: string[] | undefined
  teams?: string[] | undefined
  type?: string | undefined
}
type GoogleCloudApigeeV1ApiProductRef = {
  apiproduct?: string | undefined
  status?: string | undefined
}
type GoogleCloudApigeeV1Credential = {
  apiProducts?: GoogleCloudApigeeV1ApiProductRef[] | undefined
  attributes?: GoogleCloudApigeeV1Attribute[] | undefined
  consumerKey?: string | undefined
  consumerSecret?: string | undefined
  expiresAt?: string | undefined
  issuedAt?: string | undefined
  scopes?: string[] | undefined
  status?: string | undefined
}
type GoogleCloudApigeeV1DeveloperApp = {
  apiProducts?: string[] | undefined
  appFamily?: string | undefined
  appId?: string | undefined
  attributes?: GoogleCloudApigeeV1Attribute[] | undefined
  callbackUrl?: string | undefined
  createdAt?: string | undefined
  credentials?: GoogleCloudApigeeV1Credential[] | undefined
  developerId?: string | undefined
  keyExpiresIn?: string | undefined
  lastModifiedAt?: string | undefined
  name?: string | undefined
  scopes?: string[] | undefined
  status?: string | undefined
}
type GoogleCloudApigeeV1ListDeveloperAppsResponse = {
  app?: GoogleCloudApigeeV1DeveloperApp[] | undefined
}
type GoogleCloudApigeeV1ArchiveDeployment = {
  createdAt?: string | undefined
  gcsUri?: string | undefined
  labels?: { [x: string]: string } | undefined
  name?: string | undefined
  operation?: string | undefined
  updatedAt?: string | undefined
}
type GoogleCloudApigeeV1ListArchiveDeploymentsResponse = {
  archiveDeployments?: GoogleCloudApigeeV1ArchiveDeployment[] | undefined
  nextPageToken?: string | undefined
}
type GoogleCloudApigeeV1GenerateUploadUrlRequest = { [x: string]: unknown }
type GoogleCloudApigeeV1GenerateUploadUrlResponse = { uploadUri?: string | undefined }
type GoogleCloudApigeeV1InstanceAttachment = {
  createdAt?: string | undefined
  environment?: string | undefined
  name?: string | undefined
}
type GoogleCloudApigeeV1ListInstanceAttachmentsResponse = {
  attachments?: GoogleCloudApigeeV1InstanceAttachment[] | undefined
  nextPageToken?: string | undefined
}
type GoogleCloudApigeeV1CanaryEvaluationMetricLabels = {
  env?: string | undefined
  instance_id?: string | undefined
  location?: string | undefined
}
type GoogleCloudApigeeV1CanaryEvaluation = {
  control?: string | undefined
  createTime?: string | undefined
  endTime?: string | undefined
  metricLabels?: GoogleCloudApigeeV1CanaryEvaluationMetricLabels | undefined
  name?: string | undefined
  startTime?: string | undefined
  state?: 'STATE_UNSPECIFIED' | 'RUNNING' | 'SUCCEEDED' | undefined
  treatment?: string | undefined
  verdict?: 'VERDICT_UNSPECIFIED' | 'NONE' | 'FAIL' | 'PASS' | undefined
}
type GoogleCloudApigeeV1DataCollector = {
  createdAt?: string | undefined
  description?: string | undefined
  lastModifiedAt?: string | undefined
  name?: string | undefined
  type?: 'TYPE_UNSPECIFIED' | 'INTEGER' | 'FLOAT' | 'STRING' | 'BOOLEAN' | 'DATETIME' | undefined
}
type GoogleCloudApigeeV1ListDataCollectorsResponse = {
  dataCollectors?: GoogleCloudApigeeV1DataCollector[] | undefined
  nextPageToken?: string | undefined
}
type GoogleCloudApigeeV1Session = { id?: string | undefined; timestampMs?: string | undefined }
type GoogleCloudApigeeV1ListDebugSessionsResponse = {
  nextPageToken?: string | undefined
  sessions?: GoogleCloudApigeeV1Session[] | undefined
}
type GoogleCloudApigeeV1DebugSession = {
  count?: number | undefined
  createTime?: string | undefined
  filter?: string | undefined
  name?: string | undefined
  timeout?: string | undefined
  tracesize?: number | undefined
  validity?: number | undefined
}
type GoogleCloudApigeeV1ListDeploymentsResponse = {
  deployments?: GoogleCloudApigeeV1Deployment[] | undefined
}
type GoogleCloudApigeeV1Developer = {
  accessType?: string | undefined
  appFamily?: string | undefined
  apps?: string[] | undefined
  attributes?: GoogleCloudApigeeV1Attribute[] | undefined
  companies?: string[] | undefined
  createdAt?: string | undefined
  developerId?: string | undefined
  email?: string | undefined
  firstName?: string | undefined
  lastModifiedAt?: string | undefined
  lastName?: string | undefined
  organizationName?: string | undefined
  status?: string | undefined
  userName?: string | undefined
}
type GoogleCloudApigeeV1ListOfDevelopersResponse = {
  developer?: GoogleCloudApigeeV1Developer[] | undefined
}
type GoogleCloudApigeeV1EndpointAttachment = {
  connectionState?:
    | 'CONNECTION_STATE_UNSPECIFIED'
    | 'UNAVAILABLE'
    | 'PENDING'
    | 'ACCEPTED'
    | 'REJECTED'
    | 'CLOSED'
    | 'FROZEN'
    | 'NEEDS_ATTENTION'
    | undefined
  host?: string | undefined
  location?: string | undefined
  name?: string | undefined
  serviceAttachment?: string | undefined
  state?: 'STATE_UNSPECIFIED' | 'CREATING' | 'ACTIVE' | 'DELETING' | 'UPDATING' | undefined
}
type GoogleCloudApigeeV1ListEndpointAttachmentsResponse = {
  endpointAttachments?: GoogleCloudApigeeV1EndpointAttachment[] | undefined
  nextPageToken?: string | undefined
}
type GoogleCloudApigeeV1KeyValueEntry = { name?: string | undefined; value?: string | undefined }
type GoogleCloudApigeeV1ListKeyValueEntriesResponse = {
  keyValueEntries?: GoogleCloudApigeeV1KeyValueEntry[] | undefined
  nextPageToken?: string | undefined
}
type GoogleCloudApigeeV1EnvironmentGroup = {
  createdAt?: string | undefined
  hostnames?: string[] | undefined
  lastModifiedAt?: string | undefined
  name?: string | undefined
  state?: 'STATE_UNSPECIFIED' | 'CREATING' | 'ACTIVE' | 'DELETING' | 'UPDATING' | undefined
}
type GoogleCloudApigeeV1ListEnvironmentGroupsResponse = {
  environmentGroups?: GoogleCloudApigeeV1EnvironmentGroup[] | undefined
  nextPageToken?: string | undefined
}
type GoogleCloudApigeeV1SecurityProfileEnvironmentAssociation = {
  attachTime?: string | undefined
  name?: string | undefined
  securityProfileRevisionId?: string | undefined
}
type GoogleCloudApigeeV1QueryMetadata = {
  dimensions?: string[] | undefined
  endTimestamp?: string | undefined
  metrics?: string[] | undefined
  outputFormat?: string | undefined
  startTimestamp?: string | undefined
  timeUnit?: string | undefined
}
type GoogleCloudApigeeV1AsyncQueryResult = {
  expires?: string | undefined
  self?: string | undefined
}
type GoogleCloudApigeeV1AsyncQuery = {
  created?: string | undefined
  envgroupHostname?: string | undefined
  error?: string | undefined
  executionTime?: string | undefined
  name?: string | undefined
  queryParams?: GoogleCloudApigeeV1QueryMetadata | undefined
  reportDefinitionId?: string | undefined
  result?: GoogleCloudApigeeV1AsyncQueryResult | undefined
  resultFileSize?: string | undefined
  resultRows?: string | undefined
  self?: string | undefined
  state?: string | undefined
  updated?: string | undefined
}
type GoogleCloudApigeeV1ListAsyncQueriesResponse = {
  queries?: GoogleCloudApigeeV1AsyncQuery[] | undefined
}
type GoogleCloudApigeeV1QueryMetric = {
  alias?: string | undefined
  function?: string | undefined
  name?: string | undefined
  operator?: string | undefined
  value?: string | undefined
}
type GoogleCloudApigeeV1Query = {
  csvDelimiter?: string | undefined
  dimensions?: string[] | undefined
  envgroupHostname?: string | undefined
  filter?: string | undefined
  groupByTimeUnit?: string | undefined
  limit?: number | undefined
  metrics?: GoogleCloudApigeeV1QueryMetric[] | undefined
  name?: string | undefined
  outputFormat?: string | undefined
  reportDefinitionId?: string | undefined
  timeRange?: { [x: string]: unknown } | undefined
}
type GoogleCloudApigeeV1SecurityReportMetadata = {
  dimensions?: string[] | undefined
  endTimestamp?: string | undefined
  metrics?: string[] | undefined
  mimeType?: string | undefined
  startTimestamp?: string | undefined
  timeUnit?: string | undefined
}
type GoogleCloudApigeeV1SecurityReportResultMetadata = {
  expires?: string | undefined
  self?: string | undefined
}
type GoogleCloudApigeeV1SecurityReport = {
  created?: string | undefined
  displayName?: string | undefined
  envgroupHostname?: string | undefined
  error?: string | undefined
  executionTime?: string | undefined
  queryParams?: GoogleCloudApigeeV1SecurityReportMetadata | undefined
  reportDefinitionId?: string | undefined
  result?: GoogleCloudApigeeV1SecurityReportResultMetadata | undefined
  resultFileSize?: string | undefined
  resultRows?: string | undefined
  self?: string | undefined
  state?: string | undefined
  updated?: string | undefined
}
type GoogleCloudApigeeV1ListSecurityReportsResponse = {
  nextPageToken?: string | undefined
  securityReports?: GoogleCloudApigeeV1SecurityReport[] | undefined
}
type GoogleCloudApigeeV1SecurityReportQueryMetric = {
  aggregationFunction?: string | undefined
  alias?: string | undefined
  name?: string | undefined
  operator?: string | undefined
  value?: string | undefined
}
type GoogleCloudApigeeV1SecurityReportQuery = {
  csvDelimiter?: string | undefined
  dimensions?: string[] | undefined
  displayName?: string | undefined
  envgroupHostname?: string | undefined
  filter?: string | undefined
  groupByTimeUnit?: string | undefined
  limit?: number | undefined
  metrics?: GoogleCloudApigeeV1SecurityReportQueryMetric[] | undefined
  mimeType?: string | undefined
  reportDefinitionId?: string | undefined
  timeRange?: { [x: string]: unknown } | undefined
}
type GoogleCloudApigeeV1Instance = {
  consumerAcceptList?: string[] | undefined
  createdAt?: string | undefined
  description?: string | undefined
  diskEncryptionKeyName?: string | undefined
  displayName?: string | undefined
  host?: string | undefined
  ipRange?: string | undefined
  lastModifiedAt?: string | undefined
  location?: string | undefined
  name?: string | undefined
  peeringCidrRange?:
    | 'CIDR_RANGE_UNSPECIFIED'
    | 'SLASH_16'
    | 'SLASH_17'
    | 'SLASH_18'
    | 'SLASH_19'
    | 'SLASH_20'
    | 'SLASH_22'
    | 'SLASH_23'
    | undefined
  port?: string | undefined
  runtimeVersion?: string | undefined
  serviceAttachment?: string | undefined
  state?: 'STATE_UNSPECIFIED' | 'CREATING' | 'ACTIVE' | 'DELETING' | 'UPDATING' | undefined
}
type GoogleCloudApigeeV1ListInstancesResponse = {
  instances?: GoogleCloudApigeeV1Instance[] | undefined
  nextPageToken?: string | undefined
}
type GoogleCloudApigeeV1DeveloperAppKey = {
  apiProducts?: { [x: string]: unknown }[] | undefined
  attributes?: GoogleCloudApigeeV1Attribute[] | undefined
  consumerKey?: string | undefined
  consumerSecret?: string | undefined
  expiresAt?: string | undefined
  expiresInSeconds?: string | undefined
  issuedAt?: string | undefined
  scopes?: string[] | undefined
  status?: string | undefined
}
type GoogleCloudApigeeV1Keystore = { aliases?: string[] | undefined; name?: string | undefined }
type GoogleCloudApigeeV1KeyValueMap = { encrypted?: boolean | undefined; name?: string | undefined }
type GoogleCloudApigeeV1NatAddress = {
  ipAddress?: string | undefined
  name?: string | undefined
  state?: 'STATE_UNSPECIFIED' | 'CREATING' | 'RESERVED' | 'ACTIVE' | 'DELETING' | undefined
}
type GoogleCloudApigeeV1ListNatAddressesResponse = {
  natAddresses?: GoogleCloudApigeeV1NatAddress[] | undefined
  nextPageToken?: string | undefined
}
type GoogleCloudApigeeV1TraceSamplingConfig = {
  sampler?: 'SAMPLER_UNSPECIFIED' | 'OFF' | 'PROBABILITY' | undefined
  samplingRate?: number | undefined
}
type GoogleCloudApigeeV1TraceConfigOverride = {
  apiProxy?: string | undefined
  name?: string | undefined
  samplingConfig?: GoogleCloudApigeeV1TraceSamplingConfig | undefined
}
type GoogleCloudApigeeV1ListTraceConfigOverridesResponse = {
  nextPageToken?: string | undefined
  traceConfigOverrides?: GoogleCloudApigeeV1TraceConfigOverride[] | undefined
}
type GoogleCloudApigeeV1RateRange = {
  end?: string | undefined
  fee?: GoogleTypeMoney | undefined
  start?: string | undefined
}
type GoogleCloudApigeeV1RevenueShareRange = {
  end?: string | undefined
  sharePercentage?: number | undefined
  start?: string | undefined
}
type GoogleCloudApigeeV1RatePlan = {
  apiproduct?: string | undefined
  billingPeriod?: 'BILLING_PERIOD_UNSPECIFIED' | 'WEEKLY' | 'MONTHLY' | undefined
  consumptionPricingRates?: GoogleCloudApigeeV1RateRange[] | undefined
  consumptionPricingType?:
    | 'CONSUMPTION_PRICING_TYPE_UNSPECIFIED'
    | 'FIXED_PER_UNIT'
    | 'BANDED'
    | 'TIERED'
    | 'STAIRSTEP'
    | undefined
  createdAt?: string | undefined
  currencyCode?: string | undefined
  description?: string | undefined
  displayName?: string | undefined
  endTime?: string | undefined
  fixedFeeFrequency?: number | undefined
  fixedRecurringFee?: GoogleTypeMoney | undefined
  lastModifiedAt?: string | undefined
  name?: string | undefined
  paymentFundingModel?: 'PAYMENT_FUNDING_MODEL_UNSPECIFIED' | 'PREPAID' | 'POSTPAID' | undefined
  revenueShareRates?: GoogleCloudApigeeV1RevenueShareRange[] | undefined
  revenueShareType?: 'REVENUE_SHARE_TYPE_UNSPECIFIED' | 'FIXED' | 'VOLUME_BANDED' | undefined
  setupFee?: GoogleTypeMoney | undefined
  startTime?: string | undefined
  state?: 'STATE_UNSPECIFIED' | 'DRAFT' | 'PUBLISHED' | undefined
}
type GoogleCloudApigeeV1ListRatePlansResponse = {
  nextStartKey?: string | undefined
  ratePlans?: GoogleCloudApigeeV1RatePlan[] | undefined
}
type GoogleCloudApigeeV1Reference = {
  description?: string | undefined
  name?: string | undefined
  refers?: string | undefined
  resourceType?: string | undefined
}
type GoogleCloudApigeeV1ListCustomReportsResponse = {
  qualifier?: GoogleCloudApigeeV1CustomReport[] | undefined
}
type GoogleCloudApigeeV1ListEnvironmentResourcesResponse = {
  resourceFile?: GoogleCloudApigeeV1ResourceFile[] | undefined
}
type GoogleCloudApigeeV1SecurityIncident = {
  detectionTypes?: string[] | undefined
  displayName?: string | undefined
  firstDetectedTime?: string | undefined
  lastDetectedTime?: string | undefined
  name?: string | undefined
  riskLevel?: 'RISK_LEVEL_UNSPECIFIED' | 'LOW' | 'MODERATE' | 'SEVERE' | undefined
  trafficCount?: string | undefined
}
type GoogleCloudApigeeV1ListSecurityIncidentsResponse = {
  nextPageToken?: string | undefined
  securityIncidents?: GoogleCloudApigeeV1SecurityIncident[] | undefined
}
type GoogleCloudApigeeV1ListSecurityProfilesResponse = {
  nextPageToken?: string | undefined
  securityProfiles?: GoogleCloudApigeeV1SecurityProfile[] | undefined
}
type GoogleCloudApigeeV1SharedFlow = {
  latestRevisionId?: string | undefined
  metaData?: GoogleCloudApigeeV1EntityMetadata | undefined
  name?: string | undefined
  revision?: string[] | undefined
}
type GoogleCloudApigeeV1ListSharedFlowsResponse = {
  sharedFlows?: GoogleCloudApigeeV1SharedFlow[] | undefined
}
type GoogleCloudApigeeV1ListDeveloperSubscriptionsResponse = {
  developerSubscriptions?: GoogleCloudApigeeV1DeveloperSubscription[] | undefined
  nextStartKey?: string | undefined
}
type GoogleCloudApigeeV1TlsInfoCommonName = {
  value?: string | undefined
  wildcardMatch?: boolean | undefined
}
type GoogleCloudApigeeV1TlsInfo = {
  ciphers?: string[] | undefined
  clientAuthEnabled?: boolean | undefined
  commonName?: GoogleCloudApigeeV1TlsInfoCommonName | undefined
  enabled?: boolean | undefined
  ignoreValidationErrors?: boolean | undefined
  keyAlias?: string | undefined
  keyStore?: string | undefined
  protocols?: string[] | undefined
  trustStore?: string | undefined
}
type GoogleCloudApigeeV1TargetServer = {
  description?: string | undefined
  host?: string | undefined
  isEnabled?: boolean | undefined
  name?: string | undefined
  port?: number | undefined
  protocol?: 'PROTOCOL_UNSPECIFIED' | 'HTTP' | 'GRPC' | undefined
  sSLInfo?: GoogleCloudApigeeV1TlsInfo | undefined
}
type GoogleCloudApigeeV1Subscription = { name?: string | undefined }
type GoogleCloudApigeeV1ComputeEnvironmentScoresRequestFilter = { scorePath?: string | undefined }
type GoogleCloudApigeeV1ComputeEnvironmentScoresRequest = {
  filters?: GoogleCloudApigeeV1ComputeEnvironmentScoresRequestFilter[] | undefined
  pageSize?: number | undefined
  pageToken?: string | undefined
  timeRange?: GoogleTypeInterval | undefined
}
type GoogleCloudApigeeV1ScoreComponentRecommendationActionActionContext = {
  documentationLink?: string | undefined
}
type GoogleCloudApigeeV1ScoreComponentRecommendationAction = {
  actionContext?: GoogleCloudApigeeV1ScoreComponentRecommendationActionActionContext | undefined
  description?: string | undefined
}
type GoogleCloudApigeeV1ScoreComponentRecommendation = {
  actions?: GoogleCloudApigeeV1ScoreComponentRecommendationAction[] | undefined
  description?: string | undefined
  impact?: number | undefined
  title?: string | undefined
}
type GoogleCloudApigeeV1ScoreComponent = {
  calculateTime?: string | undefined
  dataCaptureTime?: string | undefined
  drilldownPaths?: string[] | undefined
  recommendations?: GoogleCloudApigeeV1ScoreComponentRecommendation[] | undefined
  score?: number | undefined
  scorePath?: string | undefined
}
type GoogleCloudApigeeV1Score = {
  component?: GoogleCloudApigeeV1ScoreComponent | undefined
  subcomponents?: GoogleCloudApigeeV1ScoreComponent[] | undefined
  timeRange?: GoogleTypeInterval | undefined
}
type GoogleCloudApigeeV1ComputeEnvironmentScoresResponse = {
  nextPageToken?: string | undefined
  scores?: GoogleCloudApigeeV1Score[] | undefined
}
type GoogleCloudApigeeV1ProvisionOrganizationRequest = {
  analyticsRegion?: string | undefined
  authorizedNetwork?: string | undefined
  runtimeLocation?: string | undefined
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
    '/v1/organizations': {
      $post: {
        input: {
          query: {
            parent?: string | undefined
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
        } & { json: GoogleCloudApigeeV1Organization }
        output: GoogleLongrunningOperation
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/:instance:reportStatus': {
      $post: {
        input: { param: { instance: string } } & {
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
        } & { json: GoogleCloudApigeeV1ReportInstanceStatusRequest }
        output: GoogleCloudApigeeV1ReportInstanceStatusResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/:name': {
      $delete: {
        input: { param: { name: string } } & {
          query: {
            retention?: 'DELETION_RETENTION_UNSPECIFIED' | 'MINIMUM' | undefined
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
        output: GoogleCloudApigeeV1ApiResponseWrapper
        outputFormat: 'json'
        status: 200
      }
      $get: {
        input: { param: { name: string } } & {
          query: {
            format?: 'INGRESS_CONFIG_VIEW_UNSPECIFIED' | 'BASIC' | 'FULL' | undefined
            envgroupHostname?: string | undefined
            filter?: string | undefined
            limit?: string | undefined
            offset?: string | undefined
            realtime?: boolean | undefined
            select?: string | undefined
            sort?: string | undefined
            sortby?: string | undefined
            timeRange?: string | undefined
            timeUnit?: string | undefined
            topk?: string | undefined
            tsAscending?: boolean | undefined
            tzo?: string | undefined
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
        output: GoogleCloudApigeeV1ApiCategory
        outputFormat: 'json'
        status: 200
      }
      $patch: {
        input: { param: { name: string } } & {
          query: {
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
        } & { json: GoogleCloudApigeeV1ApiCategoryData }
        output: GoogleCloudApigeeV1ApiCategory
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: { param: { name: string } } & {
          query: {
            validate?: boolean | undefined
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
        } & { json: GoogleApiHttpBody }
        output: GoogleCloudApigeeV1SharedFlowRevision
        outputFormat: 'json'
        status: 200
      }
      $put: {
        input: { param: { name: string } } & {
          query: {
            ignoreExpiryValidation?: boolean | undefined
            ignoreNewlineValidation?: boolean | undefined
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
        } & { json: GoogleCloudApigeeV1CustomReport }
        output: GoogleCloudApigeeV1CustomReport
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/:name/attributes': {
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
        } & { json: GoogleCloudApigeeV1Attributes }
        output: GoogleCloudApigeeV1Attributes
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/:name/certificate': {
      $get: {
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
        }
        output: GoogleApiHttpBody
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/:name/csr': {
      $get: {
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
        }
        output: GoogleApiHttpBody
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/:name/data': {
      $delete: {
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
        }
        output: GoogleProtobufEmpty
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/:name/deployments': {
      $delete: {
        input: { param: { name: string } } & {
          query: {
            sequencedRollout?: boolean | undefined
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
        output: GoogleProtobufEmpty
        outputFormat: 'json'
        status: 200
      }
      $get: {
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
        }
        output: GoogleCloudApigeeV1Deployment
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: { param: { name: string } } & {
          query: {
            override?: boolean | undefined
            serviceAccount?: string | undefined
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
        output: GoogleCloudApigeeV1Deployment
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/:name/deployments:generateDeployChangeReport': {
      $post: {
        input: { param: { name: string } } & {
          query: {
            override?: boolean | undefined
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
        output: GoogleCloudApigeeV1DeploymentChangeReport
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/:name/deployments:generateUndeployChangeReport': {
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
        }
        output: GoogleCloudApigeeV1DeploymentChangeReport
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
    '/v1/:name:activate': {
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
        } & { json: GoogleCloudApigeeV1ActivateNatAddressRequest }
        output: GoogleLongrunningOperation
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/:name:adjust': {
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
        } & { json: GoogleCloudApigeeV1AdjustDeveloperBalanceRequest }
        output: GoogleCloudApigeeV1DeveloperBalance
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/:name:credit': {
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
        } & { json: GoogleCloudApigeeV1CreditDeveloperBalanceRequest }
        output: GoogleCloudApigeeV1DeveloperBalance
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/:name:expire': {
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
        } & { json: GoogleCloudApigeeV1ExpireDeveloperSubscriptionRequest }
        output: GoogleCloudApigeeV1DeveloperSubscription
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/:name:generateDownloadUrl': {
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
        } & { json: GoogleCloudApigeeV1GenerateDownloadUrlRequest }
        output: GoogleCloudApigeeV1GenerateDownloadUrlResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/:name:getProjectMapping': {
      $get: {
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
        }
        output: GoogleCloudApigeeV1OrganizationProjectMapping
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/:name:getSyncAuthorization': {
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
        } & { json: GoogleCloudApigeeV1GetSyncAuthorizationRequest }
        output: GoogleCloudApigeeV1SyncAuthorization
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/:name:listRevisions': {
      $get: {
        input: { param: { name: string } } & {
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
        output: GoogleCloudApigeeV1ListSecurityProfileRevisionsResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/:name:setSyncAuthorization': {
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
        } & { json: GoogleCloudApigeeV1SyncAuthorization }
        output: GoogleCloudApigeeV1SyncAuthorization
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/:orgenv/securityStats:queryTabularStats': {
      $post: {
        input: { param: { orgenv: string } } & {
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
        } & { json: GoogleCloudApigeeV1QueryTabularStatsRequest }
        output: GoogleCloudApigeeV1QueryTabularStatsResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/:orgenv/securityStats:queryTimeSeriesStats': {
      $post: {
        input: { param: { orgenv: string } } & {
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
        } & { json: GoogleCloudApigeeV1QueryTimeSeriesStatsRequest }
        output: GoogleCloudApigeeV1QueryTimeSeriesStatsResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/:org:setAddons': {
      $post: {
        input: { param: { org: string } } & {
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
        } & { json: GoogleCloudApigeeV1SetAddonsRequest }
        output: GoogleLongrunningOperation
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/:parent': {
      $get: {
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
        }
        output: GoogleCloudApigeeV1ListOrganizationsResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/:parent/aliases': {
      $post: {
        input: { param: { parent: string } } & {
          query: {
            _password?: string | undefined
            alias?: string | undefined
            format?: string | undefined
            ignoreExpiryValidation?: boolean | undefined
            ignoreNewlineValidation?: boolean | undefined
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
        } & { json: GoogleApiHttpBody }
        output: GoogleCloudApigeeV1Alias
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/:parent/analytics/datastores': {
      $get: {
        input: { param: { parent: string } } & {
          query: {
            targetType?: string | undefined
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
        output: GoogleCloudApigeeV1ListDatastoresResponse
        outputFormat: 'json'
        status: 200
      }
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
        } & { json: GoogleCloudApigeeV1Datastore }
        output: GoogleCloudApigeeV1Datastore
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/:parent/analytics/datastores:test': {
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
        } & { json: GoogleCloudApigeeV1Datastore }
        output: GoogleCloudApigeeV1TestDatastoreResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/:parent/analytics/exports': {
      $get: {
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
        }
        output: GoogleCloudApigeeV1ListExportsResponse
        outputFormat: 'json'
        status: 200
      }
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
        } & { json: GoogleCloudApigeeV1ExportRequest }
        output: GoogleCloudApigeeV1Export
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/:parent/apicategories': {
      $get: {
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
        }
        output: GoogleCloudApigeeV1ListApiCategoriesResponse
        outputFormat: 'json'
        status: 200
      }
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
        } & { json: GoogleCloudApigeeV1ApiCategoryData }
        output: GoogleCloudApigeeV1ApiCategory
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/:parent/apiproducts': {
      $get: {
        input: { param: { parent: string } } & {
          query: {
            attributename?: string | undefined
            attributevalue?: string | undefined
            count?: string | undefined
            expand?: boolean | undefined
            startKey?: string | undefined
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
        output: GoogleCloudApigeeV1ListApiProductsResponse
        outputFormat: 'json'
        status: 200
      }
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
        } & { json: GoogleCloudApigeeV1ApiProduct }
        output: GoogleCloudApigeeV1ApiProduct
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/:parent/apis': {
      $get: {
        input: { param: { parent: string } } & {
          query: {
            includeMetaData?: boolean | undefined
            includeRevisions?: boolean | undefined
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
        output: GoogleCloudApigeeV1ListApiProxiesResponse
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: { param: { parent: string } } & {
          query: {
            action?: string | undefined
            name?: string | undefined
            validate?: boolean | undefined
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
        } & { json: GoogleApiHttpBody }
        output: GoogleCloudApigeeV1ApiProxyRevision
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/:parent/apps': {
      $get: {
        input: { param: { parent: string } } & {
          query: {
            count?: string | undefined
            expand?: boolean | undefined
            shallowExpand?: boolean | undefined
            startKey?: string | undefined
            includeCred?: boolean | undefined
            keyStatus?: string | undefined
            rows?: string | undefined
            status?: string | undefined
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
        output: GoogleCloudApigeeV1ListDeveloperAppsResponse
        outputFormat: 'json'
        status: 200
      }
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
        } & { json: GoogleCloudApigeeV1DeveloperApp }
        output: GoogleCloudApigeeV1DeveloperApp
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/:parent/archiveDeployments': {
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
        output: GoogleCloudApigeeV1ListArchiveDeploymentsResponse
        outputFormat: 'json'
        status: 200
      }
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
        } & { json: GoogleCloudApigeeV1ArchiveDeployment }
        output: GoogleLongrunningOperation
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/:parent/archiveDeployments:generateUploadUrl': {
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
        } & { json: GoogleCloudApigeeV1GenerateUploadUrlRequest }
        output: GoogleCloudApigeeV1GenerateUploadUrlResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/:parent/attachments': {
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
        output: GoogleCloudApigeeV1ListInstanceAttachmentsResponse
        outputFormat: 'json'
        status: 200
      }
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
        } & { json: GoogleCloudApigeeV1InstanceAttachment }
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
        output: GoogleCloudApigeeV1Attributes
        outputFormat: 'json'
        status: 200
      }
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
        } & { json: GoogleCloudApigeeV1Attributes }
        output: GoogleCloudApigeeV1Attributes
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/:parent/canaryevaluations': {
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
        } & { json: GoogleCloudApigeeV1CanaryEvaluation }
        output: GoogleLongrunningOperation
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/:parent/datacollectors': {
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
        output: GoogleCloudApigeeV1ListDataCollectorsResponse
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: { param: { parent: string } } & {
          query: {
            dataCollectorId?: string | undefined
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
        } & { json: GoogleCloudApigeeV1DataCollector }
        output: GoogleCloudApigeeV1DataCollector
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/:parent/debugsessions': {
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
        output: GoogleCloudApigeeV1ListDebugSessionsResponse
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: { param: { parent: string } } & {
          query: {
            timeout?: string | undefined
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
        } & { json: GoogleCloudApigeeV1DebugSession }
        output: GoogleCloudApigeeV1DebugSession
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/:parent/deployments': {
      $get: {
        input: { param: { parent: string } } & {
          query: {
            sharedFlows?: boolean | undefined
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
        output: GoogleCloudApigeeV1ListDeploymentsResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/:parent/developers': {
      $get: {
        input: { param: { parent: string } } & {
          query: {
            app?: string | undefined
            count?: string | undefined
            expand?: boolean | undefined
            ids?: string | undefined
            includeCompany?: boolean | undefined
            startKey?: string | undefined
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
        output: GoogleCloudApigeeV1ListOfDevelopersResponse
        outputFormat: 'json'
        status: 200
      }
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
        } & { json: GoogleCloudApigeeV1Developer }
        output: GoogleCloudApigeeV1Developer
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/:parent/endpointAttachments': {
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
        output: GoogleCloudApigeeV1ListEndpointAttachmentsResponse
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: { param: { parent: string } } & {
          query: {
            endpointAttachmentId?: string | undefined
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
        } & { json: GoogleCloudApigeeV1EndpointAttachment }
        output: GoogleLongrunningOperation
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/:parent/entries': {
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
        output: GoogleCloudApigeeV1ListKeyValueEntriesResponse
        outputFormat: 'json'
        status: 200
      }
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
        } & { json: GoogleCloudApigeeV1KeyValueEntry }
        output: GoogleCloudApigeeV1KeyValueEntry
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/:parent/envgroups': {
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
        output: GoogleCloudApigeeV1ListEnvironmentGroupsResponse
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: { param: { parent: string } } & {
          query: {
            name?: string | undefined
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
        } & { json: GoogleCloudApigeeV1EnvironmentGroup }
        output: GoogleLongrunningOperation
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/:parent/environments': {
      $post: {
        input: { param: { parent: string } } & {
          query: {
            name?: string | undefined
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
        } & { json: GoogleCloudApigeeV1SecurityProfileEnvironmentAssociation }
        output: GoogleCloudApigeeV1SecurityProfileEnvironmentAssociation
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/:parent/hostQueries': {
      $get: {
        input: { param: { parent: string } } & {
          query: {
            dataset?: string | undefined
            envgroupHostname?: string | undefined
            from?: string | undefined
            inclQueriesWithoutReport?: string | undefined
            status?: string | undefined
            submittedBy?: string | undefined
            to?: string | undefined
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
        output: GoogleCloudApigeeV1ListAsyncQueriesResponse
        outputFormat: 'json'
        status: 200
      }
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
        } & { json: GoogleCloudApigeeV1Query }
        output: GoogleCloudApigeeV1AsyncQuery
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/:parent/hostSecurityReports': {
      $get: {
        input: { param: { parent: string } } & {
          query: {
            dataset?: string | undefined
            envgroupHostname?: string | undefined
            from?: string | undefined
            pageSize?: number | undefined
            pageToken?: string | undefined
            status?: string | undefined
            submittedBy?: string | undefined
            to?: string | undefined
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
        output: GoogleCloudApigeeV1ListSecurityReportsResponse
        outputFormat: 'json'
        status: 200
      }
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
        } & { json: GoogleCloudApigeeV1SecurityReportQuery }
        output: GoogleCloudApigeeV1SecurityReport
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/:parent/instances': {
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
        output: GoogleCloudApigeeV1ListInstancesResponse
        outputFormat: 'json'
        status: 200
      }
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
        } & { json: GoogleCloudApigeeV1Instance }
        output: GoogleLongrunningOperation
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/:parent/keys': {
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
        } & { json: GoogleCloudApigeeV1DeveloperAppKey }
        output: GoogleCloudApigeeV1DeveloperAppKey
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/:parent/keys/create': {
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
        } & { json: GoogleCloudApigeeV1DeveloperAppKey }
        output: GoogleCloudApigeeV1DeveloperAppKey
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/:parent/keystores': {
      $post: {
        input: { param: { parent: string } } & {
          query: {
            name?: string | undefined
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
        } & { json: GoogleCloudApigeeV1Keystore }
        output: GoogleCloudApigeeV1Keystore
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/:parent/keyvaluemaps': {
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
        } & { json: GoogleCloudApigeeV1KeyValueMap }
        output: GoogleCloudApigeeV1KeyValueMap
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/:parent/natAddresses': {
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
        output: GoogleCloudApigeeV1ListNatAddressesResponse
        outputFormat: 'json'
        status: 200
      }
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
        } & { json: GoogleCloudApigeeV1NatAddress }
        output: GoogleLongrunningOperation
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/:parent/overrides': {
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
        output: GoogleCloudApigeeV1ListTraceConfigOverridesResponse
        outputFormat: 'json'
        status: 200
      }
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
        } & { json: GoogleCloudApigeeV1TraceConfigOverride }
        output: GoogleCloudApigeeV1TraceConfigOverride
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/:parent/queries': {
      $get: {
        input: { param: { parent: string } } & {
          query: {
            dataset?: string | undefined
            from?: string | undefined
            inclQueriesWithoutReport?: string | undefined
            status?: string | undefined
            submittedBy?: string | undefined
            to?: string | undefined
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
        output: GoogleCloudApigeeV1ListAsyncQueriesResponse
        outputFormat: 'json'
        status: 200
      }
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
        } & { json: GoogleCloudApigeeV1Query }
        output: GoogleCloudApigeeV1AsyncQuery
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/:parent/rateplans': {
      $get: {
        input: { param: { parent: string } } & {
          query: {
            count?: number | undefined
            expand?: boolean | undefined
            orderBy?: string | undefined
            startKey?: string | undefined
            state?: 'STATE_UNSPECIFIED' | 'DRAFT' | 'PUBLISHED' | undefined
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
        output: GoogleCloudApigeeV1ListRatePlansResponse
        outputFormat: 'json'
        status: 200
      }
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
        } & { json: GoogleCloudApigeeV1RatePlan }
        output: GoogleCloudApigeeV1RatePlan
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/:parent/references': {
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
        } & { json: GoogleCloudApigeeV1Reference }
        output: GoogleCloudApigeeV1Reference
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/:parent/reports': {
      $get: {
        input: { param: { parent: string } } & {
          query: {
            expand?: boolean | undefined
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
        output: GoogleCloudApigeeV1ListCustomReportsResponse
        outputFormat: 'json'
        status: 200
      }
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
        } & { json: GoogleCloudApigeeV1CustomReport }
        output: GoogleCloudApigeeV1CustomReport
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/:parent/resourcefiles': {
      $get: {
        input: { param: { parent: string } } & {
          query: {
            type?: string | undefined
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
        output: GoogleCloudApigeeV1ListEnvironmentResourcesResponse
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: { param: { parent: string } } & {
          query: {
            name?: string | undefined
            type?: string | undefined
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
        } & { json: GoogleApiHttpBody }
        output: GoogleCloudApigeeV1ResourceFile
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/:parent/resourcefiles/:type': {
      $get: {
        input: { param: { parent: string; type: string } } & {
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
        }
        output: GoogleCloudApigeeV1ListEnvironmentResourcesResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/:parent/resourcefiles/:type/:name': {
      $delete: {
        input: { param: { parent: string; type: string; name: string } } & {
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
        }
        output: GoogleCloudApigeeV1ResourceFile
        outputFormat: 'json'
        status: 200
      }
      $get: {
        input: { param: { parent: string; type: string; name: string } } & {
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
        }
        output: GoogleApiHttpBody
        outputFormat: 'json'
        status: 200
      }
      $put: {
        input: { param: { parent: string; type: string; name: string } } & {
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
        } & { json: GoogleApiHttpBody }
        output: GoogleCloudApigeeV1ResourceFile
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/:parent/securityIncidents': {
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
        output: GoogleCloudApigeeV1ListSecurityIncidentsResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/:parent/securityProfiles': {
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
        output: GoogleCloudApigeeV1ListSecurityProfilesResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/:parent/securityReports': {
      $get: {
        input: { param: { parent: string } } & {
          query: {
            dataset?: string | undefined
            from?: string | undefined
            pageSize?: number | undefined
            pageToken?: string | undefined
            status?: string | undefined
            submittedBy?: string | undefined
            to?: string | undefined
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
        output: GoogleCloudApigeeV1ListSecurityReportsResponse
        outputFormat: 'json'
        status: 200
      }
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
        } & { json: GoogleCloudApigeeV1SecurityReportQuery }
        output: GoogleCloudApigeeV1SecurityReport
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/:parent/sharedflows': {
      $get: {
        input: { param: { parent: string } } & {
          query: {
            includeMetaData?: boolean | undefined
            includeRevisions?: boolean | undefined
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
        output: GoogleCloudApigeeV1ListSharedFlowsResponse
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: { param: { parent: string } } & {
          query: {
            action?: string | undefined
            name?: string | undefined
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
        } & { json: GoogleApiHttpBody }
        output: GoogleCloudApigeeV1SharedFlowRevision
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/:parent/subscriptions': {
      $get: {
        input: { param: { parent: string } } & {
          query: {
            count?: number | undefined
            startKey?: string | undefined
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
        output: GoogleCloudApigeeV1ListDeveloperSubscriptionsResponse
        outputFormat: 'json'
        status: 200
      }
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
        } & { json: GoogleCloudApigeeV1DeveloperSubscription }
        output: GoogleCloudApigeeV1DeveloperSubscription
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/:parent/targetservers': {
      $post: {
        input: { param: { parent: string } } & {
          query: {
            name?: string | undefined
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
        } & { json: GoogleCloudApigeeV1TargetServer }
        output: GoogleCloudApigeeV1TargetServer
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/:parent:subscribe': {
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
        }
        output: GoogleCloudApigeeV1Subscription
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/:parent:unsubscribe': {
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
        } & { json: GoogleCloudApigeeV1Subscription }
        output: GoogleProtobufEmpty
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/:profileEnvironment:computeEnvironmentScores': {
      $post: {
        input: { param: { profileEnvironment: string } } & {
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
        } & { json: GoogleCloudApigeeV1ComputeEnvironmentScoresRequest }
        output: GoogleCloudApigeeV1ComputeEnvironmentScoresResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/:project:provisionOrganization': {
      $post: {
        input: { param: { project: string } } & {
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
        } & { json: GoogleCloudApigeeV1ProvisionOrganizationRequest }
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
