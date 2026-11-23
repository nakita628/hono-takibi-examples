type AutoscalingConfig = { policyUri?: string | undefined }
type AcceleratorConfig = {
  acceleratorCount?: number | undefined
  acceleratorTypeUri?: string | undefined
}
type DiskConfig = {
  bootDiskSizeGb?: number | undefined
  bootDiskType?: string | undefined
  localSsdInterface?: string | undefined
  numLocalSsds?: number | undefined
}
type InstanceReference = {
  instanceId?: string | undefined
  instanceName?: string | undefined
  publicEciesKey?: string | undefined
  publicKey?: string | undefined
}
type ManagedGroupConfig = {
  instanceGroupManagerName?: string | undefined
  instanceTemplateName?: string | undefined
}
type InstanceGroupConfig = {
  accelerators?: AcceleratorConfig[] | undefined
  diskConfig?: DiskConfig | undefined
  imageUri?: string | undefined
  instanceNames?: string[] | undefined
  instanceReferences?: InstanceReference[] | undefined
  isPreemptible?: boolean | undefined
  machineTypeUri?: string | undefined
  managedGroupConfig?: ManagedGroupConfig | undefined
  minCpuPlatform?: string | undefined
  numInstances?: number | undefined
  preemptibility?:
    | 'PREEMPTIBILITY_UNSPECIFIED'
    | 'NON_PREEMPTIBLE'
    | 'PREEMPTIBLE'
    | 'SPOT'
    | undefined
}
type NodeGroup = {
  labels?: { [x: string]: string } | undefined
  name?: string | undefined
  nodeGroupConfig?: InstanceGroupConfig | undefined
  roles?: ('ROLE_UNSPECIFIED' | 'DRIVER')[] | undefined
}
type AuxiliaryNodeGroup = { nodeGroup?: NodeGroup | undefined; nodeGroupId?: string | undefined }
type Metric = {
  metricOverrides?: string[] | undefined
  metricSource?:
    | 'METRIC_SOURCE_UNSPECIFIED'
    | 'MONITORING_AGENT_DEFAULTS'
    | 'HDFS'
    | 'SPARK'
    | 'YARN'
    | 'SPARK_HISTORY_SERVER'
    | 'HIVESERVER2'
    | 'HIVEMETASTORE'
    | undefined
}
type DataprocMetricConfig = { metrics?: Metric[] | undefined }
type EncryptionConfig = { gcePdKmsKeyName?: string | undefined; kmsKey?: string | undefined }
type EndpointConfig = {
  enableHttpPortAccess?: boolean | undefined
  httpPorts?: { [x: string]: string } | undefined
}
type ConfidentialInstanceConfig = { enableConfidentialCompute?: boolean | undefined }
type NodeGroupAffinity = { nodeGroupUri?: string | undefined }
type ReservationAffinity = {
  consumeReservationType?:
    | 'TYPE_UNSPECIFIED'
    | 'NO_RESERVATION'
    | 'ANY_RESERVATION'
    | 'SPECIFIC_RESERVATION'
    | undefined
  key?: string | undefined
  values?: string[] | undefined
}
type ShieldedInstanceConfig = {
  enableIntegrityMonitoring?: boolean | undefined
  enableSecureBoot?: boolean | undefined
  enableVtpm?: boolean | undefined
}
type GceClusterConfig = {
  confidentialInstanceConfig?: ConfidentialInstanceConfig | undefined
  internalIpOnly?: boolean | undefined
  metadata?: { [x: string]: string } | undefined
  networkUri?: string | undefined
  nodeGroupAffinity?: NodeGroupAffinity | undefined
  privateIpv6GoogleAccess?:
    | 'PRIVATE_IPV6_GOOGLE_ACCESS_UNSPECIFIED'
    | 'INHERIT_FROM_SUBNETWORK'
    | 'OUTBOUND'
    | 'BIDIRECTIONAL'
    | undefined
  reservationAffinity?: ReservationAffinity | undefined
  serviceAccount?: string | undefined
  serviceAccountScopes?: string[] | undefined
  shieldedInstanceConfig?: ShieldedInstanceConfig | undefined
  subnetworkUri?: string | undefined
  tags?: string[] | undefined
  zoneUri?: string | undefined
}
type NamespacedGkeDeploymentTarget = {
  clusterNamespace?: string | undefined
  targetGkeCluster?: string | undefined
}
type GkeNodePoolAutoscalingConfig = {
  maxNodeCount?: number | undefined
  minNodeCount?: number | undefined
}
type GkeNodePoolAcceleratorConfig = {
  acceleratorCount?: string | undefined
  acceleratorType?: string | undefined
  gpuPartitionSize?: string | undefined
}
type GkeNodeConfig = {
  accelerators?: GkeNodePoolAcceleratorConfig[] | undefined
  bootDiskKmsKey?: string | undefined
  localSsdCount?: number | undefined
  machineType?: string | undefined
  minCpuPlatform?: string | undefined
  preemptible?: boolean | undefined
  spot?: boolean | undefined
}
type GkeNodePoolConfig = {
  autoscaling?: GkeNodePoolAutoscalingConfig | undefined
  config?: GkeNodeConfig | undefined
  locations?: string[] | undefined
}
type GkeNodePoolTarget = {
  nodePool?: string | undefined
  nodePoolConfig?: GkeNodePoolConfig | undefined
  roles?:
    | ('ROLE_UNSPECIFIED' | 'DEFAULT' | 'CONTROLLER' | 'SPARK_DRIVER' | 'SPARK_EXECUTOR')[]
    | undefined
}
type GkeClusterConfig = {
  gkeClusterTarget?: string | undefined
  namespacedGkeDeploymentTarget?: NamespacedGkeDeploymentTarget | undefined
  nodePoolTarget?: GkeNodePoolTarget[] | undefined
}
type NodeInitializationAction = {
  executableFile?: string | undefined
  executionTimeout?: string | undefined
}
type LifecycleConfig = {
  autoDeleteTime?: string | undefined
  autoDeleteTtl?: string | undefined
  idleDeleteTtl?: string | undefined
  idleStartTime?: string | undefined
}
type MetastoreConfig = { dataprocMetastoreService?: string | undefined }
type IdentityConfig = { userServiceAccountMapping?: { [x: string]: string } | undefined }
type KerberosConfig = {
  crossRealmTrustAdminServer?: string | undefined
  crossRealmTrustKdc?: string | undefined
  crossRealmTrustRealm?: string | undefined
  crossRealmTrustSharedPasswordUri?: string | undefined
  enableKerberos?: boolean | undefined
  kdcDbKeyUri?: string | undefined
  keyPasswordUri?: string | undefined
  keystorePasswordUri?: string | undefined
  keystoreUri?: string | undefined
  kmsKeyUri?: string | undefined
  realm?: string | undefined
  rootPrincipalPasswordUri?: string | undefined
  tgtLifetimeHours?: number | undefined
  truststorePasswordUri?: string | undefined
  truststoreUri?: string | undefined
}
type SecurityConfig = {
  identityConfig?: IdentityConfig | undefined
  kerberosConfig?: KerberosConfig | undefined
}
type SoftwareConfig = {
  imageVersion?: string | undefined
  optionalComponents?:
    | (
        | 'COMPONENT_UNSPECIFIED'
        | 'ANACONDA'
        | 'DOCKER'
        | 'DRUID'
        | 'FLINK'
        | 'HBASE'
        | 'HIVE_WEBHCAT'
        | 'HUDI'
        | 'JUPYTER'
        | 'PRESTO'
        | 'TRINO'
        | 'RANGER'
        | 'SOLR'
        | 'ZEPPELIN'
        | 'ZOOKEEPER'
      )[]
    | undefined
  properties?: { [x: string]: string } | undefined
}
type ClusterConfig = {
  autoscalingConfig?: AutoscalingConfig | undefined
  auxiliaryNodeGroups?: AuxiliaryNodeGroup[] | undefined
  configBucket?: string | undefined
  dataprocMetricConfig?: DataprocMetricConfig | undefined
  encryptionConfig?: EncryptionConfig | undefined
  endpointConfig?: EndpointConfig | undefined
  gceClusterConfig?: GceClusterConfig | undefined
  gkeClusterConfig?: GkeClusterConfig | undefined
  initializationActions?: NodeInitializationAction[] | undefined
  lifecycleConfig?: LifecycleConfig | undefined
  masterConfig?: InstanceGroupConfig | undefined
  metastoreConfig?: MetastoreConfig | undefined
  secondaryWorkerConfig?: InstanceGroupConfig | undefined
  securityConfig?: SecurityConfig | undefined
  softwareConfig?: SoftwareConfig | undefined
  tempBucket?: string | undefined
  workerConfig?: InstanceGroupConfig | undefined
}
type ClusterMetrics = {
  hdfsMetrics?: { [x: string]: string } | undefined
  yarnMetrics?: { [x: string]: string } | undefined
}
type ClusterStatus = {
  detail?: string | undefined
  state?:
    | 'UNKNOWN'
    | 'CREATING'
    | 'RUNNING'
    | 'ERROR'
    | 'ERROR_DUE_TO_UPDATE'
    | 'DELETING'
    | 'UPDATING'
    | 'STOPPING'
    | 'STOPPED'
    | 'STARTING'
    | 'REPAIRING'
    | undefined
  stateStartTime?: string | undefined
  substate?: 'UNSPECIFIED' | 'UNHEALTHY' | 'STALE_STATUS' | undefined
}
type SparkHistoryServerConfig = { dataprocCluster?: string | undefined }
type AuxiliaryServicesConfig = {
  metastoreConfig?: MetastoreConfig | undefined
  sparkHistoryServerConfig?: SparkHistoryServerConfig | undefined
}
type KubernetesSoftwareConfig = {
  componentVersion?: { [x: string]: string } | undefined
  properties?: { [x: string]: string } | undefined
}
type KubernetesClusterConfig = {
  gkeClusterConfig?: GkeClusterConfig | undefined
  kubernetesNamespace?: string | undefined
  kubernetesSoftwareConfig?: KubernetesSoftwareConfig | undefined
}
type VirtualClusterConfig = {
  auxiliaryServicesConfig?: AuxiliaryServicesConfig | undefined
  kubernetesClusterConfig?: KubernetesClusterConfig | undefined
  stagingBucket?: string | undefined
}
type Cluster = {
  clusterName?: string | undefined
  clusterUuid?: string | undefined
  config?: ClusterConfig | undefined
  labels?: { [x: string]: string } | undefined
  metrics?: ClusterMetrics | undefined
  projectId?: string | undefined
  status?: ClusterStatus | undefined
  statusHistory?: ClusterStatus[] | undefined
  virtualClusterConfig?: VirtualClusterConfig | undefined
}
type ListClustersResponse = { clusters?: Cluster[] | undefined; nextPageToken?: string | undefined }
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
type Interval = { endTime?: string | undefined; startTime?: string | undefined }
type DiagnoseClusterRequest = {
  diagnosisInterval?: Interval | undefined
  job?: string | undefined
  jobs?: string[] | undefined
  yarnApplicationId?: string | undefined
  yarnApplicationIds?: string[] | undefined
}
type NodePool = {
  id?: string | undefined
  instanceNames?: string[] | undefined
  repairAction?: 'REPAIR_ACTION_UNSPECIFIED' | 'DELETE' | undefined
}
type RepairClusterRequest = {
  clusterUuid?: string | undefined
  gracefulDecommissionTimeout?: string | undefined
  nodePools?: NodePool[] | undefined
  parentOperationId?: string | undefined
  requestId?: string | undefined
}
type StartClusterRequest = { clusterUuid?: string | undefined; requestId?: string | undefined }
type StopClusterRequest = { clusterUuid?: string | undefined; requestId?: string | undefined }
type DriverSchedulingConfig = { memoryMb?: number | undefined; vcores?: number | undefined }
type LoggingConfig = {
  driverLogLevels?:
    | {
        [x: string]:
          | 'LEVEL_UNSPECIFIED'
          | 'ALL'
          | 'TRACE'
          | 'DEBUG'
          | 'INFO'
          | 'WARN'
          | 'ERROR'
          | 'FATAL'
          | 'OFF'
      }
    | undefined
}
type HadoopJob = {
  archiveUris?: string[] | undefined
  args?: string[] | undefined
  fileUris?: string[] | undefined
  jarFileUris?: string[] | undefined
  loggingConfig?: LoggingConfig | undefined
  mainClass?: string | undefined
  mainJarFileUri?: string | undefined
  properties?: { [x: string]: string } | undefined
}
type QueryList = { queries?: string[] | undefined }
type HiveJob = {
  continueOnFailure?: boolean | undefined
  jarFileUris?: string[] | undefined
  properties?: { [x: string]: string } | undefined
  queryFileUri?: string | undefined
  queryList?: QueryList | undefined
  scriptVariables?: { [x: string]: string } | undefined
}
type PigJob = {
  continueOnFailure?: boolean | undefined
  jarFileUris?: string[] | undefined
  loggingConfig?: LoggingConfig | undefined
  properties?: { [x: string]: string } | undefined
  queryFileUri?: string | undefined
  queryList?: QueryList | undefined
  scriptVariables?: { [x: string]: string } | undefined
}
type JobPlacement = {
  clusterLabels?: { [x: string]: string } | undefined
  clusterName?: string | undefined
  clusterUuid?: string | undefined
}
type PrestoJob = {
  clientTags?: string[] | undefined
  continueOnFailure?: boolean | undefined
  loggingConfig?: LoggingConfig | undefined
  outputFormat?: string | undefined
  properties?: { [x: string]: string } | undefined
  queryFileUri?: string | undefined
  queryList?: QueryList | undefined
}
type PySparkJob = {
  archiveUris?: string[] | undefined
  args?: string[] | undefined
  fileUris?: string[] | undefined
  jarFileUris?: string[] | undefined
  loggingConfig?: LoggingConfig | undefined
  mainPythonFileUri?: string | undefined
  properties?: { [x: string]: string } | undefined
  pythonFileUris?: string[] | undefined
}
type JobReference = { jobId?: string | undefined; projectId?: string | undefined }
type JobScheduling = {
  maxFailuresPerHour?: number | undefined
  maxFailuresTotal?: number | undefined
}
type SparkJob = {
  archiveUris?: string[] | undefined
  args?: string[] | undefined
  fileUris?: string[] | undefined
  jarFileUris?: string[] | undefined
  loggingConfig?: LoggingConfig | undefined
  mainClass?: string | undefined
  mainJarFileUri?: string | undefined
  properties?: { [x: string]: string } | undefined
}
type SparkRJob = {
  archiveUris?: string[] | undefined
  args?: string[] | undefined
  fileUris?: string[] | undefined
  loggingConfig?: LoggingConfig | undefined
  mainRFileUri?: string | undefined
  properties?: { [x: string]: string } | undefined
}
type SparkSqlJob = {
  jarFileUris?: string[] | undefined
  loggingConfig?: LoggingConfig | undefined
  properties?: { [x: string]: string } | undefined
  queryFileUri?: string | undefined
  queryList?: QueryList | undefined
  scriptVariables?: { [x: string]: string } | undefined
}
type JobStatus = {
  details?: string | undefined
  state?:
    | 'STATE_UNSPECIFIED'
    | 'PENDING'
    | 'SETUP_DONE'
    | 'RUNNING'
    | 'CANCEL_PENDING'
    | 'CANCEL_STARTED'
    | 'CANCELLED'
    | 'DONE'
    | 'ERROR'
    | 'ATTEMPT_FAILURE'
    | undefined
  stateStartTime?: string | undefined
  substate?: 'UNSPECIFIED' | 'SUBMITTED' | 'QUEUED' | 'STALE_STATUS' | undefined
}
type TrinoJob = {
  clientTags?: string[] | undefined
  continueOnFailure?: boolean | undefined
  loggingConfig?: LoggingConfig | undefined
  outputFormat?: string | undefined
  properties?: { [x: string]: string } | undefined
  queryFileUri?: string | undefined
  queryList?: QueryList | undefined
}
type YarnApplication = {
  name?: string | undefined
  progress?: number | undefined
  state?:
    | 'STATE_UNSPECIFIED'
    | 'NEW'
    | 'NEW_SAVING'
    | 'SUBMITTED'
    | 'ACCEPTED'
    | 'RUNNING'
    | 'FINISHED'
    | 'FAILED'
    | 'KILLED'
    | undefined
  trackingUrl?: string | undefined
}
type Job = {
  done?: boolean | undefined
  driverControlFilesUri?: string | undefined
  driverOutputResourceUri?: string | undefined
  driverSchedulingConfig?: DriverSchedulingConfig | undefined
  hadoopJob?: HadoopJob | undefined
  hiveJob?: HiveJob | undefined
  jobUuid?: string | undefined
  labels?: { [x: string]: string } | undefined
  pigJob?: PigJob | undefined
  placement?: JobPlacement | undefined
  prestoJob?: PrestoJob | undefined
  pysparkJob?: PySparkJob | undefined
  reference?: JobReference | undefined
  scheduling?: JobScheduling | undefined
  sparkJob?: SparkJob | undefined
  sparkRJob?: SparkRJob | undefined
  sparkSqlJob?: SparkSqlJob | undefined
  status?: JobStatus | undefined
  statusHistory?: JobStatus[] | undefined
  trinoJob?: TrinoJob | undefined
  yarnApplications?: YarnApplication[] | undefined
}
type ListJobsResponse = { jobs?: Job[] | undefined; nextPageToken?: string | undefined }
type Empty = { [x: string]: unknown }
type CancelJobRequest = { [x: string]: unknown }
type SubmitJobRequest = { job?: Job | undefined; requestId?: string | undefined }
type OrderedJob = {
  hadoopJob?: HadoopJob | undefined
  hiveJob?: HiveJob | undefined
  labels?: { [x: string]: string } | undefined
  pigJob?: PigJob | undefined
  prerequisiteStepIds?: string[] | undefined
  prestoJob?: PrestoJob | undefined
  pysparkJob?: PySparkJob | undefined
  scheduling?: JobScheduling | undefined
  sparkJob?: SparkJob | undefined
  sparkRJob?: SparkRJob | undefined
  sparkSqlJob?: SparkSqlJob | undefined
  stepId?: string | undefined
  trinoJob?: TrinoJob | undefined
}
type RegexValidation = { regexes?: string[] | undefined }
type ValueValidation = { values?: string[] | undefined }
type ParameterValidation = {
  regex?: RegexValidation | undefined
  values?: ValueValidation | undefined
}
type TemplateParameter = {
  description?: string | undefined
  fields?: string[] | undefined
  name?: string | undefined
  validation?: ParameterValidation | undefined
}
type ClusterSelector = {
  clusterLabels?: { [x: string]: string } | undefined
  zone?: string | undefined
}
type ManagedCluster = {
  clusterName?: string | undefined
  config?: ClusterConfig | undefined
  labels?: { [x: string]: string } | undefined
}
type WorkflowTemplatePlacement = {
  clusterSelector?: ClusterSelector | undefined
  managedCluster?: ManagedCluster | undefined
}
type WorkflowTemplate = {
  createTime?: string | undefined
  dagTimeout?: string | undefined
  id?: string | undefined
  jobs?: OrderedJob[] | undefined
  labels?: { [x: string]: string } | undefined
  name?: string | undefined
  parameters?: TemplateParameter[] | undefined
  placement?: WorkflowTemplatePlacement | undefined
  updateTime?: string | undefined
  version?: number | undefined
}
type InstantiateWorkflowTemplateRequest = {
  parameters?: { [x: string]: string } | undefined
  requestId?: string | undefined
  version?: number | undefined
}
type ResizeNodeGroupRequest = {
  gracefulDecommissionTimeout?: string | undefined
  requestId?: string | undefined
  size?: number | undefined
}
type SparkStandaloneAutoscalingConfig = {
  gracefulDecommissionTimeout?: string | undefined
  scaleDownFactor?: number | undefined
  scaleDownMinWorkerFraction?: number | undefined
  scaleUpFactor?: number | undefined
  scaleUpMinWorkerFraction?: number | undefined
}
type BasicYarnAutoscalingConfig = {
  gracefulDecommissionTimeout?: string | undefined
  scaleDownFactor?: number | undefined
  scaleDownMinWorkerFraction?: number | undefined
  scaleUpFactor?: number | undefined
  scaleUpMinWorkerFraction?: number | undefined
}
type BasicAutoscalingAlgorithm = {
  cooldownPeriod?: string | undefined
  sparkStandaloneConfig?: SparkStandaloneAutoscalingConfig | undefined
  yarnConfig?: BasicYarnAutoscalingConfig | undefined
}
type InstanceGroupAutoscalingPolicyConfig = {
  maxInstances?: number | undefined
  minInstances?: number | undefined
  weight?: number | undefined
}
type AutoscalingPolicy = {
  basicAlgorithm?: BasicAutoscalingAlgorithm | undefined
  id?: string | undefined
  labels?: { [x: string]: string } | undefined
  name?: string | undefined
  secondaryWorkerConfig?: InstanceGroupAutoscalingPolicyConfig | undefined
  workerConfig?: InstanceGroupAutoscalingPolicyConfig | undefined
}
type ListAutoscalingPoliciesResponse = {
  nextPageToken?: string | undefined
  policies?: AutoscalingPolicy[] | undefined
}
type ExecutionConfig = {
  idleTtl?: string | undefined
  kmsKey?: string | undefined
  networkTags?: string[] | undefined
  networkUri?: string | undefined
  serviceAccount?: string | undefined
  stagingBucket?: string | undefined
  subnetworkUri?: string | undefined
  ttl?: string | undefined
}
type PeripheralsConfig = {
  metastoreService?: string | undefined
  sparkHistoryServerConfig?: SparkHistoryServerConfig | undefined
}
type EnvironmentConfig = {
  executionConfig?: ExecutionConfig | undefined
  peripheralsConfig?: PeripheralsConfig | undefined
}
type PySparkBatch = {
  archiveUris?: string[] | undefined
  args?: string[] | undefined
  fileUris?: string[] | undefined
  jarFileUris?: string[] | undefined
  mainPythonFileUri?: string | undefined
  pythonFileUris?: string[] | undefined
}
type RuntimeConfig = {
  containerImage?: string | undefined
  properties?: { [x: string]: string } | undefined
  version?: string | undefined
}
type UsageMetrics = {
  milliDcuSeconds?: string | undefined
  shuffleStorageGbSeconds?: string | undefined
}
type UsageSnapshot = {
  milliDcu?: string | undefined
  shuffleStorageGb?: string | undefined
  snapshotTime?: string | undefined
}
type RuntimeInfo = {
  approximateUsage?: UsageMetrics | undefined
  currentUsage?: UsageSnapshot | undefined
  diagnosticOutputUri?: string | undefined
  endpoints?: { [x: string]: string } | undefined
  outputUri?: string | undefined
}
type SparkBatch = {
  archiveUris?: string[] | undefined
  args?: string[] | undefined
  fileUris?: string[] | undefined
  jarFileUris?: string[] | undefined
  mainClass?: string | undefined
  mainJarFileUri?: string | undefined
}
type SparkRBatch = {
  archiveUris?: string[] | undefined
  args?: string[] | undefined
  fileUris?: string[] | undefined
  mainRFileUri?: string | undefined
}
type SparkSqlBatch = {
  jarFileUris?: string[] | undefined
  queryFileUri?: string | undefined
  queryVariables?: { [x: string]: string } | undefined
}
type StateHistory = {
  state?:
    | 'STATE_UNSPECIFIED'
    | 'PENDING'
    | 'RUNNING'
    | 'CANCELLING'
    | 'CANCELLED'
    | 'SUCCEEDED'
    | 'FAILED'
    | undefined
  stateMessage?: string | undefined
  stateStartTime?: string | undefined
}
type Batch = {
  createTime?: string | undefined
  creator?: string | undefined
  environmentConfig?: EnvironmentConfig | undefined
  labels?: { [x: string]: string } | undefined
  name?: string | undefined
  operation?: string | undefined
  pysparkBatch?: PySparkBatch | undefined
  runtimeConfig?: RuntimeConfig | undefined
  runtimeInfo?: RuntimeInfo | undefined
  sparkBatch?: SparkBatch | undefined
  sparkRBatch?: SparkRBatch | undefined
  sparkSqlBatch?: SparkSqlBatch | undefined
  state?:
    | 'STATE_UNSPECIFIED'
    | 'PENDING'
    | 'RUNNING'
    | 'CANCELLING'
    | 'CANCELLED'
    | 'SUCCEEDED'
    | 'FAILED'
    | undefined
  stateHistory?: StateHistory[] | undefined
  stateMessage?: string | undefined
  stateTime?: string | undefined
  uuid?: string | undefined
}
type ListBatchesResponse = { batches?: Batch[] | undefined; nextPageToken?: string | undefined }
type ListWorkflowTemplatesResponse = {
  nextPageToken?: string | undefined
  templates?: WorkflowTemplate[] | undefined
}
type InjectCredentialsRequest = {
  clusterUuid?: string | undefined
  credentialsCiphertext?: string | undefined
}
type GetPolicyOptions = { requestedPolicyVersion?: number | undefined }
type GetIamPolicyRequest = { options?: GetPolicyOptions | undefined }
type Expr = {
  description?: string | undefined
  expression?: string | undefined
  location?: string | undefined
  title?: string | undefined
}
type Binding = {
  condition?: Expr | undefined
  members?: string[] | undefined
  role?: string | undefined
}
type Policy = {
  bindings?: Binding[] | undefined
  etag?: string | undefined
  version?: number | undefined
}
type SetIamPolicyRequest = { policy?: Policy | undefined }
type TestIamPermissionsRequest = { permissions?: string[] | undefined }
type TestIamPermissionsResponse = { permissions?: string[] | undefined }
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/v1/projects/:projectId/regions/:region/clusters': {
      $get: {
        input: { param: { projectId: string; region: string } } & {
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
        output: ListClustersResponse
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: { param: { projectId: string; region: string } } & {
          query: {
            actionOnFailedPrimaryWorkers?:
              | 'FAILURE_ACTION_UNSPECIFIED'
              | 'NO_ACTION'
              | 'DELETE'
              | undefined
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
        } & { json: Cluster }
        output: Operation
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/projects/:projectId/regions/:region/clusters/:clusterName': {
      $delete: {
        input: { param: { projectId: string; region: string; clusterName: string } } & {
          query: {
            clusterUuid?: string | undefined
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
        input: { param: { projectId: string; region: string; clusterName: string } } & {
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
        output: Cluster
        outputFormat: 'json'
        status: 200
      }
      $patch: {
        input: { param: { projectId: string; region: string; clusterName: string } } & {
          query: {
            gracefulDecommissionTimeout?: string | undefined
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
        } & { json: Cluster }
        output: Operation
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/projects/:projectId/regions/:region/clusters/:clusterName:diagnose': {
      $post: {
        input: { param: { projectId: string; region: string; clusterName: string } } & {
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
        } & { json: DiagnoseClusterRequest }
        output: Operation
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/projects/:projectId/regions/:region/clusters/:clusterName:repair': {
      $post: {
        input: { param: { projectId: string; region: string; clusterName: string } } & {
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
        } & { json: RepairClusterRequest }
        output: Operation
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/projects/:projectId/regions/:region/clusters/:clusterName:start': {
      $post: {
        input: { param: { projectId: string; region: string; clusterName: string } } & {
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
        } & { json: StartClusterRequest }
        output: Operation
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/projects/:projectId/regions/:region/clusters/:clusterName:stop': {
      $post: {
        input: { param: { projectId: string; region: string; clusterName: string } } & {
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
        } & { json: StopClusterRequest }
        output: Operation
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/projects/:projectId/regions/:region/jobs': {
      $get: {
        input: { param: { projectId: string; region: string } } & {
          query: {
            clusterName?: string | undefined
            filter?: string | undefined
            jobStateMatcher?: 'ALL' | 'ACTIVE' | 'NON_ACTIVE' | undefined
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
        output: ListJobsResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/projects/:projectId/regions/:region/jobs/:jobId': {
      $delete: {
        input: { param: { projectId: string; region: string; jobId: string } } & {
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
        output: Empty
        outputFormat: 'json'
        status: 200
      }
      $get: {
        input: { param: { projectId: string; region: string; jobId: string } } & {
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
        output: Job
        outputFormat: 'json'
        status: 200
      }
      $patch: {
        input: { param: { projectId: string; region: string; jobId: string } } & {
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
        } & { json: Job }
        output: Job
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/projects/:projectId/regions/:region/jobs/:jobId:cancel': {
      $post: {
        input: { param: { projectId: string; region: string; jobId: string } } & {
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
        } & { json: CancelJobRequest }
        output: Job
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/projects/:projectId/regions/:region/jobs:submit': {
      $post: {
        input: { param: { projectId: string; region: string } } & {
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
        } & { json: SubmitJobRequest }
        output: Job
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/projects/:projectId/regions/:region/jobs:submitAsOperation': {
      $post: {
        input: { param: { projectId: string; region: string } } & {
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
        } & { json: SubmitJobRequest }
        output: Operation
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/:name': {
      $delete: {
        input: { param: { name: string } } & {
          query: {
            version?: number | undefined
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
            version?: number | undefined
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
        output: WorkflowTemplate
        outputFormat: 'json'
        status: 200
      }
      $put: {
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
        } & { json: WorkflowTemplate }
        output: WorkflowTemplate
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
        }
        output: Empty
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/:name:instantiate': {
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
        } & { json: InstantiateWorkflowTemplateRequest }
        output: Operation
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/:name:resize': {
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
        } & { json: ResizeNodeGroupRequest }
        output: Operation
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/:parent/autoscalingPolicies': {
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
        output: ListAutoscalingPoliciesResponse
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
        } & { json: AutoscalingPolicy }
        output: AutoscalingPolicy
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/:parent/batches': {
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
        output: ListBatchesResponse
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: { param: { parent: string } } & {
          query: {
            batchId?: string | undefined
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
        } & { json: Batch }
        output: Operation
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/:parent/nodeGroups': {
      $post: {
        input: { param: { parent: string } } & {
          query: {
            nodeGroupId?: string | undefined
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
        } & { json: NodeGroup }
        output: Operation
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/:parent/workflowTemplates': {
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
        output: ListWorkflowTemplatesResponse
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
        } & { json: WorkflowTemplate }
        output: WorkflowTemplate
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/:parent/workflowTemplates:instantiateInline': {
      $post: {
        input: { param: { parent: string } } & {
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
        } & { json: WorkflowTemplate }
        output: Operation
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/:project/:region/:cluster:injectCredentials': {
      $post: {
        input: { param: { project: string; region: string; cluster: string } } & {
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
        } & { json: InjectCredentialsRequest }
        output: Operation
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/:resource:getIamPolicy': {
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
        } & { json: GetIamPolicyRequest }
        output: Policy
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
        } & { json: SetIamPolicyRequest }
        output: Policy
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
        } & { json: TestIamPermissionsRequest }
        output: TestIamPermissionsResponse
        outputFormat: 'json'
        status: 200
      }
    }
  },
  '/'
>
export default routes
