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
type AnthosCluster = { membership?: string | undefined }
type DefaultPool = { artifactStorage?: string | undefined; serviceAccount?: string | undefined }
type PrivatePool = {
  artifactStorage?: string | undefined
  serviceAccount?: string | undefined
  workerPool?: string | undefined
}
type ExecutionConfig = {
  artifactStorage?: string | undefined
  defaultPool?: DefaultPool | undefined
  executionTimeout?: string | undefined
  privatePool?: PrivatePool | undefined
  serviceAccount?: string | undefined
  usages?:
    | ('EXECUTION_ENVIRONMENT_USAGE_UNSPECIFIED' | 'RENDER' | 'DEPLOY' | 'VERIFY')[]
    | undefined
  workerPool?: string | undefined
}
type GkeCluster = { cluster?: string | undefined; internalIp?: boolean | undefined }
type MultiTarget = { targetIds?: string[] | undefined }
type CloudRunLocation = { location?: string | undefined }
type Target = {
  annotations?: { [x: string]: string } | undefined
  anthosCluster?: AnthosCluster | undefined
  createTime?: string | undefined
  description?: string | undefined
  etag?: string | undefined
  executionConfigs?: ExecutionConfig[] | undefined
  gke?: GkeCluster | undefined
  labels?: { [x: string]: string } | undefined
  multiTarget?: MultiTarget | undefined
  name?: string | undefined
  requireApproval?: boolean | undefined
  run?: CloudRunLocation | undefined
  targetId?: string | undefined
  uid?: string | undefined
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
type AbandonReleaseRequest = { [x: string]: unknown }
type AbandonReleaseResponse = { [x: string]: unknown }
type AdvanceRolloutRequest = { phaseId?: string | undefined }
type AdvanceRolloutResponse = { [x: string]: unknown }
type ApproveRolloutRequest = { approved?: boolean | undefined }
type ApproveRolloutResponse = { [x: string]: unknown }
type CancelOperationRequest = { [x: string]: unknown }
type Empty = { [x: string]: unknown }
type TerminateJobRunRequest = { [x: string]: unknown }
type TerminateJobRunResponse = { [x: string]: unknown }
type PipelineReadyCondition = { status?: boolean | undefined; updateTime?: string | undefined }
type TargetsPresentCondition = {
  missingTargets?: string[] | undefined
  status?: boolean | undefined
  updateTime?: string | undefined
}
type TargetsTypeCondition = { errorDetails?: string | undefined; status?: boolean | undefined }
type PipelineCondition = {
  pipelineReadyCondition?: PipelineReadyCondition | undefined
  targetsPresentCondition?: TargetsPresentCondition | undefined
  targetsTypeCondition?: TargetsTypeCondition | undefined
}
type CanaryDeployment = { percentages?: number[] | undefined; verify?: boolean | undefined }
type PhaseConfig = {
  percentage?: number | undefined
  phaseId?: string | undefined
  profiles?: string[] | undefined
  verify?: boolean | undefined
}
type CustomCanaryDeployment = { phaseConfigs?: PhaseConfig[] | undefined }
type CloudRunConfig = { automaticTrafficControl?: boolean | undefined }
type GatewayServiceMesh = {
  deployment?: string | undefined
  httpRoute?: string | undefined
  service?: string | undefined
}
type ServiceNetworking = { deployment?: string | undefined; service?: string | undefined }
type KubernetesConfig = {
  gatewayServiceMesh?: GatewayServiceMesh | undefined
  serviceNetworking?: ServiceNetworking | undefined
}
type RuntimeConfig = {
  cloudRun?: CloudRunConfig | undefined
  kubernetes?: KubernetesConfig | undefined
}
type Canary = {
  canaryDeployment?: CanaryDeployment | undefined
  customCanaryDeployment?: CustomCanaryDeployment | undefined
  runtimeConfig?: RuntimeConfig | undefined
}
type Standard = { verify?: boolean | undefined }
type Strategy = { canary?: Canary | undefined; standard?: Standard | undefined }
type Stage = {
  profiles?: string[] | undefined
  strategy?: Strategy | undefined
  targetId?: string | undefined
}
type SerialPipeline = { stages?: Stage[] | undefined }
type DeliveryPipeline = {
  annotations?: { [x: string]: string } | undefined
  condition?: PipelineCondition | undefined
  createTime?: string | undefined
  description?: string | undefined
  etag?: string | undefined
  labels?: { [x: string]: string } | undefined
  name?: string | undefined
  serialPipeline?: SerialPipeline | undefined
  suspended?: boolean | undefined
  uid?: string | undefined
  updateTime?: string | undefined
}
type ListDeliveryPipelinesResponse = {
  deliveryPipelines?: DeliveryPipeline[] | undefined
  nextPageToken?: string | undefined
  unreachable?: string[] | undefined
}
type AdvanceChildRolloutJobRun = {
  rollout?: string | undefined
  rolloutPhaseId?: string | undefined
}
type CreateChildRolloutJobRun = {
  rollout?: string | undefined
  rolloutPhaseId?: string | undefined
}
type CloudRunMetadata = {
  revision?: string | undefined
  service?: string | undefined
  serviceUrls?: string[] | undefined
}
type DeployJobRunMetadata = { cloudRun?: CloudRunMetadata | undefined }
type DeployJobRun = {
  build?: string | undefined
  failureCause?:
    | 'FAILURE_CAUSE_UNSPECIFIED'
    | 'CLOUD_BUILD_UNAVAILABLE'
    | 'EXECUTION_FAILED'
    | 'DEADLINE_EXCEEDED'
    | 'MISSING_RESOURCES_FOR_CANARY'
    | 'CLOUD_BUILD_REQUEST_FAILED'
    | undefined
  failureMessage?: string | undefined
  metadata?: DeployJobRunMetadata | undefined
}
type VerifyJobRun = {
  artifactUri?: string | undefined
  build?: string | undefined
  eventLogPath?: string | undefined
  failureCause?:
    | 'FAILURE_CAUSE_UNSPECIFIED'
    | 'CLOUD_BUILD_UNAVAILABLE'
    | 'EXECUTION_FAILED'
    | 'DEADLINE_EXCEEDED'
    | 'VERIFICATION_CONFIG_NOT_FOUND'
    | 'CLOUD_BUILD_REQUEST_FAILED'
    | undefined
  failureMessage?: string | undefined
}
type JobRun = {
  advanceChildRolloutJobRun?: AdvanceChildRolloutJobRun | undefined
  createChildRolloutJobRun?: CreateChildRolloutJobRun | undefined
  createTime?: string | undefined
  deployJobRun?: DeployJobRun | undefined
  endTime?: string | undefined
  etag?: string | undefined
  jobId?: string | undefined
  name?: string | undefined
  phaseId?: string | undefined
  startTime?: string | undefined
  state?:
    | 'STATE_UNSPECIFIED'
    | 'IN_PROGRESS'
    | 'SUCCEEDED'
    | 'FAILED'
    | 'TERMINATING'
    | 'TERMINATED'
    | undefined
  uid?: string | undefined
  verifyJobRun?: VerifyJobRun | undefined
}
type ListJobRunsResponse = {
  jobRuns?: JobRun[] | undefined
  nextPageToken?: string | undefined
  unreachable?: string[] | undefined
}
type BuildArtifact = { image?: string | undefined; tag?: string | undefined }
type ReleaseReadyCondition = { status?: boolean | undefined }
type SkaffoldSupportedCondition = {
  maintenanceModeTime?: string | undefined
  skaffoldSupportState?:
    | 'SKAFFOLD_SUPPORT_STATE_UNSPECIFIED'
    | 'SKAFFOLD_SUPPORT_STATE_SUPPORTED'
    | 'SKAFFOLD_SUPPORT_STATE_MAINTENANCE_MODE'
    | 'SKAFFOLD_SUPPORT_STATE_UNSUPPORTED'
    | undefined
  status?: boolean | undefined
  supportExpirationTime?: string | undefined
}
type ReleaseCondition = {
  releaseReadyCondition?: ReleaseReadyCondition | undefined
  skaffoldSupportedCondition?: SkaffoldSupportedCondition | undefined
}
type PhaseArtifact = { manifestPath?: string | undefined; skaffoldConfigPath?: string | undefined }
type TargetArtifact = {
  artifactUri?: string | undefined
  manifestPath?: string | undefined
  phaseArtifacts?: { [x: string]: PhaseArtifact } | undefined
  skaffoldConfigPath?: string | undefined
}
type CloudRunRenderMetadata = { service?: string | undefined }
type RenderMetadata = { cloudRun?: CloudRunRenderMetadata | undefined }
type TargetRender = {
  failureCause?:
    | 'FAILURE_CAUSE_UNSPECIFIED'
    | 'CLOUD_BUILD_UNAVAILABLE'
    | 'EXECUTION_FAILED'
    | 'CLOUD_BUILD_REQUEST_FAILED'
    | undefined
  failureMessage?: string | undefined
  metadata?: RenderMetadata | undefined
  renderingBuild?: string | undefined
  renderingState?:
    | 'TARGET_RENDER_STATE_UNSPECIFIED'
    | 'SUCCEEDED'
    | 'FAILED'
    | 'IN_PROGRESS'
    | undefined
}
type Release = {
  abandoned?: boolean | undefined
  annotations?: { [x: string]: string } | undefined
  buildArtifacts?: BuildArtifact[] | undefined
  condition?: ReleaseCondition | undefined
  createTime?: string | undefined
  deliveryPipelineSnapshot?: DeliveryPipeline | undefined
  description?: string | undefined
  etag?: string | undefined
  labels?: { [x: string]: string } | undefined
  name?: string | undefined
  renderEndTime?: string | undefined
  renderStartTime?: string | undefined
  renderState?: 'RENDER_STATE_UNSPECIFIED' | 'SUCCEEDED' | 'FAILED' | 'IN_PROGRESS' | undefined
  skaffoldConfigPath?: string | undefined
  skaffoldConfigUri?: string | undefined
  skaffoldVersion?: string | undefined
  targetArtifacts?: { [x: string]: TargetArtifact } | undefined
  targetRenders?: { [x: string]: TargetRender } | undefined
  targetSnapshots?: Target[] | undefined
  uid?: string | undefined
}
type ListReleasesResponse = {
  nextPageToken?: string | undefined
  releases?: Release[] | undefined
  unreachable?: string[] | undefined
}
type Metadata = { cloudRun?: CloudRunMetadata | undefined }
type AdvanceChildRolloutJob = { [x: string]: unknown }
type CreateChildRolloutJob = { [x: string]: unknown }
type DeployJob = { [x: string]: unknown }
type VerifyJob = { [x: string]: unknown }
type Job = {
  advanceChildRolloutJob?: AdvanceChildRolloutJob | undefined
  createChildRolloutJob?: CreateChildRolloutJob | undefined
  deployJob?: DeployJob | undefined
  id?: string | undefined
  jobRun?: string | undefined
  skipMessage?: string | undefined
  state?:
    | 'STATE_UNSPECIFIED'
    | 'PENDING'
    | 'DISABLED'
    | 'IN_PROGRESS'
    | 'SUCCEEDED'
    | 'FAILED'
    | 'ABORTED'
    | 'SKIPPED'
    | 'IGNORED'
    | undefined
  verifyJob?: VerifyJob | undefined
}
type ChildRolloutJobs = {
  advanceRolloutJobs?: Job[] | undefined
  createRolloutJobs?: Job[] | undefined
}
type DeploymentJobs = { deployJob?: Job | undefined; verifyJob?: Job | undefined }
type Phase = {
  childRolloutJobs?: ChildRolloutJobs | undefined
  deploymentJobs?: DeploymentJobs | undefined
  id?: string | undefined
  skipMessage?: string | undefined
  state?:
    | 'STATE_UNSPECIFIED'
    | 'PENDING'
    | 'IN_PROGRESS'
    | 'SUCCEEDED'
    | 'FAILED'
    | 'ABORTED'
    | 'SKIPPED'
    | undefined
}
type Rollout = {
  annotations?: { [x: string]: string } | undefined
  approvalState?:
    | 'APPROVAL_STATE_UNSPECIFIED'
    | 'NEEDS_APPROVAL'
    | 'DOES_NOT_NEED_APPROVAL'
    | 'APPROVED'
    | 'REJECTED'
    | undefined
  approveTime?: string | undefined
  controllerRollout?: string | undefined
  createTime?: string | undefined
  deployEndTime?: string | undefined
  deployFailureCause?:
    | 'FAILURE_CAUSE_UNSPECIFIED'
    | 'CLOUD_BUILD_UNAVAILABLE'
    | 'EXECUTION_FAILED'
    | 'DEADLINE_EXCEEDED'
    | 'RELEASE_FAILED'
    | 'RELEASE_ABANDONED'
    | 'VERIFICATION_CONFIG_NOT_FOUND'
    | 'CLOUD_BUILD_REQUEST_FAILED'
    | undefined
  deployStartTime?: string | undefined
  deployingBuild?: string | undefined
  description?: string | undefined
  enqueueTime?: string | undefined
  etag?: string | undefined
  failureReason?: string | undefined
  labels?: { [x: string]: string } | undefined
  metadata?: Metadata | undefined
  name?: string | undefined
  phases?: Phase[] | undefined
  state?:
    | 'STATE_UNSPECIFIED'
    | 'SUCCEEDED'
    | 'FAILED'
    | 'IN_PROGRESS'
    | 'PENDING_APPROVAL'
    | 'APPROVAL_REJECTED'
    | 'PENDING'
    | 'PENDING_RELEASE'
    | 'CANCELLING'
    | 'CANCELLED'
    | 'HALTED'
    | undefined
  targetId?: string | undefined
  uid?: string | undefined
}
type ListRolloutsResponse = {
  nextPageToken?: string | undefined
  rollouts?: Rollout[] | undefined
  unreachable?: string[] | undefined
}
type ListTargetsResponse = {
  nextPageToken?: string | undefined
  targets?: Target[] | undefined
  unreachable?: string[] | undefined
}
type AuditLogConfig = {
  exemptedMembers?: string[] | undefined
  logType?: 'LOG_TYPE_UNSPECIFIED' | 'ADMIN_READ' | 'DATA_WRITE' | 'DATA_READ' | undefined
}
type AuditConfig = { auditLogConfigs?: AuditLogConfig[] | undefined; service?: string | undefined }
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
  auditConfigs?: AuditConfig[] | undefined
  bindings?: Binding[] | undefined
  etag?: string | undefined
  version?: number | undefined
}
type SetIamPolicyRequest = { policy?: Policy | undefined; updateMask?: string | undefined }
type TestIamPermissionsRequest = { permissions?: string[] | undefined }
type TestIamPermissionsResponse = { permissions?: string[] | undefined }
type IgnoreJobRequest = { jobId?: string | undefined; phaseId?: string | undefined }
type IgnoreJobResponse = { [x: string]: unknown }
type RetryJobRequest = { jobId?: string | undefined; phaseId?: string | undefined }
type RetryJobResponse = { [x: string]: unknown }
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/v1/:name': {
      $delete: {
        input: { param: { name: string } } & {
          query: {
            allowMissing?: boolean | undefined
            etag?: string | undefined
            requestId?: string | undefined
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
        output: Operation
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
        output: Target
        outputFormat: 'json'
        status: 200
      }
      $patch: {
        input: { param: { name: string } } & {
          query: {
            allowMissing?: boolean | undefined
            requestId?: string | undefined
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
        } & { json: Target }
        output: Operation
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
        output: ListLocationsResponse
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
        output: ListOperationsResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/:name:abandon': {
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
        } & { json: AbandonReleaseRequest }
        output: AbandonReleaseResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/:name:advance': {
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
        } & { json: AdvanceRolloutRequest }
        output: AdvanceRolloutResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/:name:approve': {
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
        } & { json: ApproveRolloutRequest }
        output: ApproveRolloutResponse
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
        } & { json: CancelOperationRequest }
        output: Empty
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/:name:terminate': {
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
        } & { json: TerminateJobRunRequest }
        output: TerminateJobRunResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/:parent/deliveryPipelines': {
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
        output: ListDeliveryPipelinesResponse
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: { param: { parent: string } } & {
          query: {
            deliveryPipelineId?: string | undefined
            requestId?: string | undefined
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
        } & { json: DeliveryPipeline }
        output: Operation
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/:parent/jobRuns': {
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
        output: ListJobRunsResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/:parent/releases': {
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
        output: ListReleasesResponse
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: { param: { parent: string } } & {
          query: {
            releaseId?: string | undefined
            requestId?: string | undefined
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
        } & { json: Release }
        output: Operation
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/:parent/rollouts': {
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
        output: ListRolloutsResponse
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: { param: { parent: string } } & {
          query: {
            requestId?: string | undefined
            rolloutId?: string | undefined
            startingPhaseId?: string | undefined
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
        } & { json: Rollout }
        output: Operation
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/:parent/targets': {
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
        output: ListTargetsResponse
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: { param: { parent: string } } & {
          query: {
            requestId?: string | undefined
            targetId?: string | undefined
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
        } & { json: Target }
        output: Operation
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
  } & {
    '/v1/:rollout:ignoreJob': {
      $post: {
        input: { param: { rollout: string } } & {
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
        } & { json: IgnoreJobRequest }
        output: IgnoreJobResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/:rollout:retryJob': {
      $post: {
        input: { param: { rollout: string } } & {
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
        } & { json: RetryJobRequest }
        output: RetryJobResponse
        outputFormat: 'json'
        status: 200
      }
    }
  },
  '/'
>
export default routes
