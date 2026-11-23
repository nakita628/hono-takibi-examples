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
type GoogleCloudRunV2Condition = {
  executionReason?:
    | 'EXECUTION_REASON_UNDEFINED'
    | 'JOB_STATUS_SERVICE_POLLING_ERROR'
    | 'NON_ZERO_EXIT_CODE'
    | 'CANCELLED'
    | 'CANCELLING'
    | 'DELETED'
    | undefined
  lastTransitionTime?: string | undefined
  message?: string | undefined
  reason?:
    | 'COMMON_REASON_UNDEFINED'
    | 'UNKNOWN'
    | 'REVISION_FAILED'
    | 'PROGRESS_DEADLINE_EXCEEDED'
    | 'CONTAINER_MISSING'
    | 'CONTAINER_PERMISSION_DENIED'
    | 'CONTAINER_IMAGE_UNAUTHORIZED'
    | 'CONTAINER_IMAGE_AUTHORIZATION_CHECK_FAILED'
    | 'ENCRYPTION_KEY_PERMISSION_DENIED'
    | 'ENCRYPTION_KEY_CHECK_FAILED'
    | 'SECRETS_ACCESS_CHECK_FAILED'
    | 'WAITING_FOR_OPERATION'
    | 'IMMEDIATE_RETRY'
    | 'POSTPONED_RETRY'
    | 'INTERNAL'
    | undefined
  revisionReason?:
    | 'REVISION_REASON_UNDEFINED'
    | 'PENDING'
    | 'RESERVE'
    | 'RETIRED'
    | 'RETIRING'
    | 'RECREATING'
    | 'HEALTH_CHECK_CONTAINER_ERROR'
    | 'CUSTOMIZED_PATH_RESPONSE_PENDING'
    | 'MIN_INSTANCES_NOT_PROVISIONED'
    | 'ACTIVE_REVISION_LIMIT_REACHED'
    | 'NO_DEPLOYMENT'
    | 'HEALTH_CHECK_SKIPPED'
    | 'MIN_INSTANCES_WARMING'
    | undefined
  severity?: 'SEVERITY_UNSPECIFIED' | 'ERROR' | 'WARNING' | 'INFO' | undefined
  state?:
    | 'STATE_UNSPECIFIED'
    | 'CONDITION_PENDING'
    | 'CONDITION_RECONCILING'
    | 'CONDITION_FAILED'
    | 'CONDITION_SUCCEEDED'
    | undefined
  type?: string | undefined
}
type GoogleCloudRunV2SecretKeySelector = {
  secret?: string | undefined
  version?: string | undefined
}
type GoogleCloudRunV2EnvVarSource = { secretKeyRef?: GoogleCloudRunV2SecretKeySelector | undefined }
type GoogleCloudRunV2EnvVar = {
  name?: string | undefined
  value?: string | undefined
  valueSource?: GoogleCloudRunV2EnvVarSource | undefined
}
type GoogleCloudRunV2GRPCAction = { port?: number | undefined; service?: string | undefined }
type GoogleCloudRunV2HTTPHeader = { name?: string | undefined; value?: string | undefined }
type GoogleCloudRunV2HTTPGetAction = {
  httpHeaders?: GoogleCloudRunV2HTTPHeader[] | undefined
  path?: string | undefined
  port?: number | undefined
}
type GoogleCloudRunV2TCPSocketAction = { port?: number | undefined }
type GoogleCloudRunV2Probe = {
  failureThreshold?: number | undefined
  grpc?: GoogleCloudRunV2GRPCAction | undefined
  httpGet?: GoogleCloudRunV2HTTPGetAction | undefined
  initialDelaySeconds?: number | undefined
  periodSeconds?: number | undefined
  tcpSocket?: GoogleCloudRunV2TCPSocketAction | undefined
  timeoutSeconds?: number | undefined
}
type GoogleCloudRunV2ContainerPort = {
  containerPort?: number | undefined
  name?: string | undefined
}
type GoogleCloudRunV2ResourceRequirements = {
  cpuIdle?: boolean | undefined
  limits?: { [x: string]: string } | undefined
  startupCpuBoost?: boolean | undefined
}
type GoogleCloudRunV2VolumeMount = { mountPath?: string | undefined; name?: string | undefined }
type GoogleCloudRunV2Container = {
  args?: string[] | undefined
  command?: string[] | undefined
  dependsOn?: string[] | undefined
  env?: GoogleCloudRunV2EnvVar[] | undefined
  image?: string | undefined
  livenessProbe?: GoogleCloudRunV2Probe | undefined
  name?: string | undefined
  ports?: GoogleCloudRunV2ContainerPort[] | undefined
  resources?: GoogleCloudRunV2ResourceRequirements | undefined
  startupProbe?: GoogleCloudRunV2Probe | undefined
  volumeMounts?: GoogleCloudRunV2VolumeMount[] | undefined
  workingDir?: string | undefined
}
type GoogleCloudRunV2RevisionScaling = {
  maxInstanceCount?: number | undefined
  minInstanceCount?: number | undefined
}
type GoogleCloudRunV2RevisionScalingStatus = { desiredMinInstanceCount?: number | undefined }
type GoogleCloudRunV2CloudSqlInstance = { instances?: string[] | undefined }
type GoogleCloudRunV2EmptyDirVolumeSource = {
  medium?: 'MEDIUM_UNSPECIFIED' | 'MEMORY' | undefined
  sizeLimit?: string | undefined
}
type GoogleCloudRunV2GCSVolumeSource = {
  bucket?: string | undefined
  readOnly?: boolean | undefined
}
type GoogleCloudRunV2NFSVolumeSource = {
  path?: string | undefined
  readOnly?: boolean | undefined
  server?: string | undefined
}
type GoogleCloudRunV2VersionToPath = {
  mode?: number | undefined
  path?: string | undefined
  version?: string | undefined
}
type GoogleCloudRunV2SecretVolumeSource = {
  defaultMode?: number | undefined
  items?: GoogleCloudRunV2VersionToPath[] | undefined
  secret?: string | undefined
}
type GoogleCloudRunV2Volume = {
  cloudSqlInstance?: GoogleCloudRunV2CloudSqlInstance | undefined
  emptyDir?: GoogleCloudRunV2EmptyDirVolumeSource | undefined
  gcs?: GoogleCloudRunV2GCSVolumeSource | undefined
  name?: string | undefined
  nfs?: GoogleCloudRunV2NFSVolumeSource | undefined
  secret?: GoogleCloudRunV2SecretVolumeSource | undefined
}
type GoogleCloudRunV2NetworkInterface = {
  network?: string | undefined
  subnetwork?: string | undefined
  tags?: string[] | undefined
}
type GoogleCloudRunV2VpcAccess = {
  connector?: string | undefined
  egress?: 'VPC_EGRESS_UNSPECIFIED' | 'ALL_TRAFFIC' | 'PRIVATE_RANGES_ONLY' | undefined
  networkInterfaces?: GoogleCloudRunV2NetworkInterface[] | undefined
}
type GoogleCloudRunV2Revision = {
  annotations?: { [x: string]: string } | undefined
  conditions?: GoogleCloudRunV2Condition[] | undefined
  containers?: GoogleCloudRunV2Container[] | undefined
  createTime?: string | undefined
  deleteTime?: string | undefined
  encryptionKey?: string | undefined
  encryptionKeyRevocationAction?:
    | 'ENCRYPTION_KEY_REVOCATION_ACTION_UNSPECIFIED'
    | 'PREVENT_NEW'
    | 'SHUTDOWN'
    | undefined
  encryptionKeyShutdownDuration?: string | undefined
  etag?: string | undefined
  executionEnvironment?:
    | 'EXECUTION_ENVIRONMENT_UNSPECIFIED'
    | 'EXECUTION_ENVIRONMENT_GEN1'
    | 'EXECUTION_ENVIRONMENT_GEN2'
    | undefined
  expireTime?: string | undefined
  generation?: string | undefined
  labels?: { [x: string]: string } | undefined
  launchStage?:
    | 'LAUNCH_STAGE_UNSPECIFIED'
    | 'UNIMPLEMENTED'
    | 'PRELAUNCH'
    | 'EARLY_ACCESS'
    | 'ALPHA'
    | 'BETA'
    | 'GA'
    | 'DEPRECATED'
    | undefined
  logUri?: string | undefined
  maxInstanceRequestConcurrency?: number | undefined
  name?: string | undefined
  observedGeneration?: string | undefined
  reconciling?: boolean | undefined
  satisfiesPzs?: boolean | undefined
  scaling?: GoogleCloudRunV2RevisionScaling | undefined
  scalingStatus?: GoogleCloudRunV2RevisionScalingStatus | undefined
  service?: string | undefined
  serviceAccount?: string | undefined
  sessionAffinity?: boolean | undefined
  timeout?: string | undefined
  uid?: string | undefined
  updateTime?: string | undefined
  volumes?: GoogleCloudRunV2Volume[] | undefined
  vpcAccess?: GoogleCloudRunV2VpcAccess | undefined
}
type GoogleCloudRunV2BinaryAuthorization = {
  breakglassJustification?: string | undefined
  useDefault?: boolean | undefined
}
type GoogleCloudRunV2ServiceScaling = { minInstanceCount?: number | undefined }
type GoogleCloudRunV2RevisionTemplate = {
  annotations?: { [x: string]: string } | undefined
  containers?: GoogleCloudRunV2Container[] | undefined
  encryptionKey?: string | undefined
  executionEnvironment?:
    | 'EXECUTION_ENVIRONMENT_UNSPECIFIED'
    | 'EXECUTION_ENVIRONMENT_GEN1'
    | 'EXECUTION_ENVIRONMENT_GEN2'
    | undefined
  healthCheckDisabled?: boolean | undefined
  labels?: { [x: string]: string } | undefined
  maxInstanceRequestConcurrency?: number | undefined
  revision?: string | undefined
  scaling?: GoogleCloudRunV2RevisionScaling | undefined
  serviceAccount?: string | undefined
  sessionAffinity?: boolean | undefined
  timeout?: string | undefined
  volumes?: GoogleCloudRunV2Volume[] | undefined
  vpcAccess?: GoogleCloudRunV2VpcAccess | undefined
}
type GoogleCloudRunV2TrafficTarget = {
  percent?: number | undefined
  revision?: string | undefined
  tag?: string | undefined
  type?:
    | 'TRAFFIC_TARGET_ALLOCATION_TYPE_UNSPECIFIED'
    | 'TRAFFIC_TARGET_ALLOCATION_TYPE_LATEST'
    | 'TRAFFIC_TARGET_ALLOCATION_TYPE_REVISION'
    | undefined
}
type GoogleCloudRunV2TrafficTargetStatus = {
  percent?: number | undefined
  revision?: string | undefined
  tag?: string | undefined
  type?:
    | 'TRAFFIC_TARGET_ALLOCATION_TYPE_UNSPECIFIED'
    | 'TRAFFIC_TARGET_ALLOCATION_TYPE_LATEST'
    | 'TRAFFIC_TARGET_ALLOCATION_TYPE_REVISION'
    | undefined
  uri?: string | undefined
}
type GoogleCloudRunV2Service = {
  annotations?: { [x: string]: string } | undefined
  binaryAuthorization?: GoogleCloudRunV2BinaryAuthorization | undefined
  client?: string | undefined
  clientVersion?: string | undefined
  conditions?: GoogleCloudRunV2Condition[] | undefined
  createTime?: string | undefined
  creator?: string | undefined
  customAudiences?: string[] | undefined
  defaultUriDisabled?: boolean | undefined
  deleteTime?: string | undefined
  description?: string | undefined
  etag?: string | undefined
  expireTime?: string | undefined
  generation?: string | undefined
  ingress?:
    | 'INGRESS_TRAFFIC_UNSPECIFIED'
    | 'INGRESS_TRAFFIC_ALL'
    | 'INGRESS_TRAFFIC_INTERNAL_ONLY'
    | 'INGRESS_TRAFFIC_INTERNAL_LOAD_BALANCER'
    | undefined
  labels?: { [x: string]: string } | undefined
  lastModifier?: string | undefined
  latestCreatedRevision?: string | undefined
  latestReadyRevision?: string | undefined
  launchStage?:
    | 'LAUNCH_STAGE_UNSPECIFIED'
    | 'UNIMPLEMENTED'
    | 'PRELAUNCH'
    | 'EARLY_ACCESS'
    | 'ALPHA'
    | 'BETA'
    | 'GA'
    | 'DEPRECATED'
    | undefined
  name?: string | undefined
  observedGeneration?: string | undefined
  reconciling?: boolean | undefined
  satisfiesPzs?: boolean | undefined
  scaling?: GoogleCloudRunV2ServiceScaling | undefined
  template?: GoogleCloudRunV2RevisionTemplate | undefined
  terminalCondition?: GoogleCloudRunV2Condition | undefined
  traffic?: GoogleCloudRunV2TrafficTarget[] | undefined
  trafficStatuses?: GoogleCloudRunV2TrafficTargetStatus[] | undefined
  uid?: string | undefined
  updateTime?: string | undefined
  uri?: string | undefined
}
type GoogleLongrunningListOperationsResponse = {
  nextPageToken?: string | undefined
  operations?: GoogleLongrunningOperation[] | undefined
}
type GoogleCloudRunV2CancelExecutionRequest = {
  etag?: string | undefined
  validateOnly?: boolean | undefined
}
type GoogleCloudRunV2ContainerOverride = {
  args?: string[] | undefined
  clearArgs?: boolean | undefined
  env?: GoogleCloudRunV2EnvVar[] | undefined
  name?: string | undefined
}
type GoogleCloudRunV2Overrides = {
  containerOverrides?: GoogleCloudRunV2ContainerOverride[] | undefined
  taskCount?: number | undefined
  timeout?: string | undefined
}
type GoogleCloudRunV2RunJobRequest = {
  etag?: string | undefined
  overrides?: GoogleCloudRunV2Overrides | undefined
  validateOnly?: boolean | undefined
}
type GoogleLongrunningWaitOperationRequest = { timeout?: string | undefined }
type GoogleCloudRunV2TaskTemplate = {
  containers?: GoogleCloudRunV2Container[] | undefined
  encryptionKey?: string | undefined
  executionEnvironment?:
    | 'EXECUTION_ENVIRONMENT_UNSPECIFIED'
    | 'EXECUTION_ENVIRONMENT_GEN1'
    | 'EXECUTION_ENVIRONMENT_GEN2'
    | undefined
  maxRetries?: number | undefined
  serviceAccount?: string | undefined
  timeout?: string | undefined
  volumes?: GoogleCloudRunV2Volume[] | undefined
  vpcAccess?: GoogleCloudRunV2VpcAccess | undefined
}
type GoogleCloudRunV2Execution = {
  annotations?: { [x: string]: string } | undefined
  cancelledCount?: number | undefined
  completionTime?: string | undefined
  conditions?: GoogleCloudRunV2Condition[] | undefined
  createTime?: string | undefined
  deleteTime?: string | undefined
  etag?: string | undefined
  expireTime?: string | undefined
  failedCount?: number | undefined
  generation?: string | undefined
  job?: string | undefined
  labels?: { [x: string]: string } | undefined
  launchStage?:
    | 'LAUNCH_STAGE_UNSPECIFIED'
    | 'UNIMPLEMENTED'
    | 'PRELAUNCH'
    | 'EARLY_ACCESS'
    | 'ALPHA'
    | 'BETA'
    | 'GA'
    | 'DEPRECATED'
    | undefined
  logUri?: string | undefined
  name?: string | undefined
  observedGeneration?: string | undefined
  parallelism?: number | undefined
  reconciling?: boolean | undefined
  retriedCount?: number | undefined
  runningCount?: number | undefined
  satisfiesPzs?: boolean | undefined
  startTime?: string | undefined
  succeededCount?: number | undefined
  taskCount?: number | undefined
  template?: GoogleCloudRunV2TaskTemplate | undefined
  uid?: string | undefined
  updateTime?: string | undefined
}
type GoogleCloudRunV2ListExecutionsResponse = {
  executions?: GoogleCloudRunV2Execution[] | undefined
  nextPageToken?: string | undefined
}
type GoogleCloudRunV2ExecutionReference = {
  completionTime?: string | undefined
  createTime?: string | undefined
  name?: string | undefined
}
type GoogleCloudRunV2ExecutionTemplate = {
  annotations?: { [x: string]: string } | undefined
  labels?: { [x: string]: string } | undefined
  parallelism?: number | undefined
  taskCount?: number | undefined
  template?: GoogleCloudRunV2TaskTemplate | undefined
}
type GoogleCloudRunV2Job = {
  annotations?: { [x: string]: string } | undefined
  binaryAuthorization?: GoogleCloudRunV2BinaryAuthorization | undefined
  client?: string | undefined
  clientVersion?: string | undefined
  conditions?: GoogleCloudRunV2Condition[] | undefined
  createTime?: string | undefined
  creator?: string | undefined
  deleteTime?: string | undefined
  etag?: string | undefined
  executionCount?: number | undefined
  expireTime?: string | undefined
  generation?: string | undefined
  labels?: { [x: string]: string } | undefined
  lastModifier?: string | undefined
  latestCreatedExecution?: GoogleCloudRunV2ExecutionReference | undefined
  launchStage?:
    | 'LAUNCH_STAGE_UNSPECIFIED'
    | 'UNIMPLEMENTED'
    | 'PRELAUNCH'
    | 'EARLY_ACCESS'
    | 'ALPHA'
    | 'BETA'
    | 'GA'
    | 'DEPRECATED'
    | undefined
  name?: string | undefined
  observedGeneration?: string | undefined
  reconciling?: boolean | undefined
  satisfiesPzs?: boolean | undefined
  template?: GoogleCloudRunV2ExecutionTemplate | undefined
  terminalCondition?: GoogleCloudRunV2Condition | undefined
  uid?: string | undefined
  updateTime?: string | undefined
}
type GoogleCloudRunV2ListJobsResponse = {
  jobs?: GoogleCloudRunV2Job[] | undefined
  nextPageToken?: string | undefined
}
type GoogleCloudRunV2ListRevisionsResponse = {
  nextPageToken?: string | undefined
  revisions?: GoogleCloudRunV2Revision[] | undefined
}
type GoogleCloudRunV2ListServicesResponse = {
  nextPageToken?: string | undefined
  services?: GoogleCloudRunV2Service[] | undefined
}
type GoogleCloudRunV2TaskAttemptResult = {
  exitCode?: number | undefined
  status?: GoogleRpcStatus | undefined
}
type GoogleCloudRunV2Task = {
  annotations?: { [x: string]: string } | undefined
  completionTime?: string | undefined
  conditions?: GoogleCloudRunV2Condition[] | undefined
  containers?: GoogleCloudRunV2Container[] | undefined
  createTime?: string | undefined
  deleteTime?: string | undefined
  encryptionKey?: string | undefined
  etag?: string | undefined
  execution?: string | undefined
  executionEnvironment?:
    | 'EXECUTION_ENVIRONMENT_UNSPECIFIED'
    | 'EXECUTION_ENVIRONMENT_GEN1'
    | 'EXECUTION_ENVIRONMENT_GEN2'
    | undefined
  expireTime?: string | undefined
  generation?: string | undefined
  index?: number | undefined
  job?: string | undefined
  labels?: { [x: string]: string } | undefined
  lastAttemptResult?: GoogleCloudRunV2TaskAttemptResult | undefined
  logUri?: string | undefined
  maxRetries?: number | undefined
  name?: string | undefined
  observedGeneration?: string | undefined
  reconciling?: boolean | undefined
  retried?: number | undefined
  satisfiesPzs?: boolean | undefined
  scheduledTime?: string | undefined
  serviceAccount?: string | undefined
  startTime?: string | undefined
  timeout?: string | undefined
  uid?: string | undefined
  updateTime?: string | undefined
  volumes?: GoogleCloudRunV2Volume[] | undefined
  vpcAccess?: GoogleCloudRunV2VpcAccess | undefined
}
type GoogleCloudRunV2ListTasksResponse = {
  nextPageToken?: string | undefined
  tasks?: GoogleCloudRunV2Task[] | undefined
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
    '/v2/:name': {
      $delete: {
        input: { param: { name: string } } & {
          query: {
            etag?: string | undefined
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
        }
        output: GoogleLongrunningOperation
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
        output: GoogleCloudRunV2Revision
        outputFormat: 'json'
        status: 200
      }
      $patch: {
        input: { param: { name: string } } & {
          query: {
            allowMissing?: boolean | undefined
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
        } & { json: GoogleCloudRunV2Service }
        output: GoogleLongrunningOperation
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v2/:name/operations': {
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
    '/v2/:name:cancel': {
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
        } & { json: GoogleCloudRunV2CancelExecutionRequest }
        output: GoogleLongrunningOperation
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v2/:name:run': {
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
        } & { json: GoogleCloudRunV2RunJobRequest }
        output: GoogleLongrunningOperation
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v2/:name:wait': {
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
        } & { json: GoogleLongrunningWaitOperationRequest }
        output: GoogleLongrunningOperation
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v2/:parent/executions': {
      $get: {
        input: { param: { parent: string } } & {
          query: {
            pageSize?: number | undefined
            pageToken?: string | undefined
            showDeleted?: boolean | undefined
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
        output: GoogleCloudRunV2ListExecutionsResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v2/:parent/jobs': {
      $get: {
        input: { param: { parent: string } } & {
          query: {
            pageSize?: number | undefined
            pageToken?: string | undefined
            showDeleted?: boolean | undefined
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
        output: GoogleCloudRunV2ListJobsResponse
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: { param: { parent: string } } & {
          query: {
            jobId?: string | undefined
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
        } & { json: GoogleCloudRunV2Job }
        output: GoogleLongrunningOperation
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v2/:parent/revisions': {
      $get: {
        input: { param: { parent: string } } & {
          query: {
            pageSize?: number | undefined
            pageToken?: string | undefined
            showDeleted?: boolean | undefined
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
        output: GoogleCloudRunV2ListRevisionsResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v2/:parent/services': {
      $get: {
        input: { param: { parent: string } } & {
          query: {
            pageSize?: number | undefined
            pageToken?: string | undefined
            showDeleted?: boolean | undefined
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
        output: GoogleCloudRunV2ListServicesResponse
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: { param: { parent: string } } & {
          query: {
            serviceId?: string | undefined
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
        } & { json: GoogleCloudRunV2Service }
        output: GoogleLongrunningOperation
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v2/:parent/tasks': {
      $get: {
        input: { param: { parent: string } } & {
          query: {
            pageSize?: number | undefined
            pageToken?: string | undefined
            showDeleted?: boolean | undefined
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
        output: GoogleCloudRunV2ListTasksResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v2/:resource:getIamPolicy': {
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
    '/v2/:resource:setIamPolicy': {
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
    '/v2/:resource:testIamPermissions': {
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
