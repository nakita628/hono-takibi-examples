import { createRoute, z } from '@hono/zod-openapi'

const AdvanceChildRolloutJobSchema = z
  .object({})
  .openapi({ description: 'An advanceChildRollout Job.' })
  .openapi('AdvanceChildRolloutJob')

const CreateChildRolloutJobSchema = z
  .object({})
  .openapi({ description: 'A createChildRollout Job.' })
  .openapi('CreateChildRolloutJob')

const DeployJobSchema = z.object({}).openapi({ description: 'A deploy Job.' }).openapi('DeployJob')

const VerifyJobSchema = z.object({}).openapi({ description: 'A verify Job.' }).openapi('VerifyJob')

type JobType = {
  advanceChildRolloutJob?: z.infer<typeof AdvanceChildRolloutJobSchema>
  createChildRolloutJob?: z.infer<typeof CreateChildRolloutJobSchema>
  deployJob?: z.infer<typeof DeployJobSchema>
  id?: string
  jobRun?: string
  skipMessage?: string
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
  verifyJob?: z.infer<typeof VerifyJobSchema>
}

const AdvanceChildRolloutJobRunSchema = z
  .object({
    rollout: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Output only. Name of the `ChildRollout`. Format is projects/{project}/ locations/{location}/deliveryPipelines/{deliveryPipeline}/ releases/{release}/rollouts/a-z{0,62}.',
        readOnly: true,
      }),
    rolloutPhaseId: z
      .string()
      .exactOptional()
      .openapi({ description: "Output only. the ID of the ChildRollout's Phase.", readOnly: true }),
  })
  .openapi({
    description:
      'AdvanceChildRolloutJobRun contains information specific to a advanceChildRollout `JobRun`.',
    required: [],
  })
  .openapi('AdvanceChildRolloutJobRun')

const CreateChildRolloutJobRunSchema = z
  .object({
    rollout: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Output only. Name of the `ChildRollout`. Format is projects/{project}/ locations/{location}/deliveryPipelines/{deliveryPipeline}/ releases/{release}/rollouts/a-z{0,62}.',
        readOnly: true,
      }),
    rolloutPhaseId: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Output only. The ID of the childRollout Phase initiated by this JobRun.',
        readOnly: true,
      }),
  })
  .openapi({
    description:
      'CreateChildRolloutJobRun contains information specific to a createChildRollout `JobRun`.',
    required: [],
  })
  .openapi('CreateChildRolloutJobRun')

const CloudRunMetadataSchema = z
  .object({
    revision: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Output only. The Cloud Run Revision id associated with a `Rollout`.',
        readOnly: true,
      }),
    service: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Output only. The name of the Cloud Run Service that is associated with a `Rollout`. Format is projects/{project}/locations/{location}/services/{service}.',
        readOnly: true,
      }),
    serviceUrls: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description:
          'Output only. The Cloud Run Service urls that are associated with a `Rollout`.',
        readOnly: true,
      }),
  })
  .openapi({
    description: 'CloudRunMetadata contains information from a Cloud Run deployment.',
    required: [],
  })
  .openapi('CloudRunMetadata')

const DeployJobRunMetadataSchema = z
  .object({
    cloudRun: CloudRunMetadataSchema.exactOptional().openapi({
      description:
        'Output only. The name of the Cloud Run Service that is associated with a `DeployJobRun`.',
      readOnly: true,
    }),
  })
  .openapi({
    description:
      'DeployJobRunMetadata surfaces information associated with a `DeployJobRun` to the user.',
    required: [],
  })
  .openapi('DeployJobRunMetadata')

const DeployJobRunSchema = z
  .object({
    build: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Output only. The resource name of the Cloud Build `Build` object that is used to deploy. Format is projects/{project}/locations/{location}/builds/{build}.',
        readOnly: true,
      }),
    failureCause: z
      .enum([
        'FAILURE_CAUSE_UNSPECIFIED',
        'CLOUD_BUILD_UNAVAILABLE',
        'EXECUTION_FAILED',
        'DEADLINE_EXCEEDED',
        'MISSING_RESOURCES_FOR_CANARY',
        'CLOUD_BUILD_REQUEST_FAILED',
      ])
      .exactOptional()
      .openapi({
        description:
          'Output only. The reason the deploy failed. This will always be unspecified while the deploy is in progress or if it succeeded.',
        readOnly: true,
      }),
    failureMessage: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Output only. Additional information about the deploy failure, if available.',
        readOnly: true,
      }),
    metadata: DeployJobRunMetadataSchema.exactOptional().openapi({
      description: 'Output only. Metadata containing information about the deploy job run.',
      readOnly: true,
    }),
  })
  .openapi({
    description: 'DeployJobRun contains information specific to a deploy `JobRun`.',
    required: [],
  })
  .openapi('DeployJobRun')

const VerifyJobRunSchema = z
  .object({
    artifactUri: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Output only. URI of a directory containing the verify artifacts. This contains the Skaffold event log.',
        readOnly: true,
      }),
    build: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Output only. The resource name of the Cloud Build `Build` object that is used to verify. Format is projects/{project}/locations/{location}/builds/{build}.',
        readOnly: true,
      }),
    eventLogPath: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Output only. File path of the Skaffold event log relative to the artifact URI.',
        readOnly: true,
      }),
    failureCause: z
      .enum([
        'FAILURE_CAUSE_UNSPECIFIED',
        'CLOUD_BUILD_UNAVAILABLE',
        'EXECUTION_FAILED',
        'DEADLINE_EXCEEDED',
        'VERIFICATION_CONFIG_NOT_FOUND',
        'CLOUD_BUILD_REQUEST_FAILED',
      ])
      .exactOptional()
      .openapi({
        description:
          'Output only. The reason the verify failed. This will always be unspecified while the verify is in progress or if it succeeded.',
        readOnly: true,
      }),
    failureMessage: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Output only. Additional information about the verify failure, if available.',
        readOnly: true,
      }),
  })
  .openapi({
    description: 'VerifyJobRun contains information specific to a verify `JobRun`.',
    required: [],
  })
  .openapi('VerifyJobRun')

type JobRunType = {
  advanceChildRolloutJobRun?: z.infer<typeof AdvanceChildRolloutJobRunSchema>
  createChildRolloutJobRun?: z.infer<typeof CreateChildRolloutJobRunSchema>
  createTime?: string
  deployJobRun?: z.infer<typeof DeployJobRunSchema>
  endTime?: string
  etag?: string
  jobId?: string
  name?: string
  phaseId?: string
  startTime?: string
  state?:
    | 'STATE_UNSPECIFIED'
    | 'IN_PROGRESS'
    | 'SUCCEEDED'
    | 'FAILED'
    | 'TERMINATING'
    | 'TERMINATED'
  uid?: string
  verifyJobRun?: z.infer<typeof VerifyJobRunSchema>
}

type MetadataType = { cloudRun?: z.infer<typeof CloudRunMetadataSchema> }

const CloudRunRenderMetadataSchema = z
  .object({
    service: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Output only. The name of the Cloud Run Service in the rendered manifest. Format is projects/{project}/locations/{location}/services/{service}.',
        readOnly: true,
      }),
  })
  .openapi({
    description:
      'CloudRunRenderMetadata contains Cloud Run information associated with a `Release` render.',
    required: [],
  })
  .openapi('CloudRunRenderMetadata')

type RenderMetadataType = { cloudRun?: z.infer<typeof CloudRunRenderMetadataSchema> }

const AnthosClusterSchema = z
  .object({
    membership: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Membership of the GKE Hub-registered cluster to which to apply the Skaffold configuration. Format is `projects/{project}/locations/{location}/memberships/{membership_name}`.',
      }),
  })
  .openapi({ description: 'Information specifying an Anthos Cluster.', required: [] })
  .openapi('AnthosCluster')

const DefaultPoolSchema = z
  .object({
    artifactStorage: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Optional. Cloud Storage location where execution outputs should be stored. This can either be a bucket ("gs://my-bucket") or a path within a bucket ("gs://my-bucket/my-dir"). If unspecified, a default bucket located in the same region will be used.',
      }),
    serviceAccount: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Optional. Google service account to use for execution. If unspecified, the project execution service account (-compute@developer.gserviceaccount.com) will be used.',
      }),
  })
  .openapi({ description: 'Execution using the default Cloud Build pool.', required: [] })
  .openapi('DefaultPool')

const PrivatePoolSchema = z
  .object({
    artifactStorage: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Optional. Cloud Storage location where execution outputs should be stored. This can either be a bucket ("gs://my-bucket") or a path within a bucket ("gs://my-bucket/my-dir"). If unspecified, a default bucket located in the same region will be used.',
      }),
    serviceAccount: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Optional. Google service account to use for execution. If unspecified, the project execution service account (-compute@developer.gserviceaccount.com) will be used.',
      }),
    workerPool: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Required. Resource name of the Cloud Build worker pool to use. The format is `projects/{project}/locations/{location}/workerPools/{pool}`.',
      }),
  })
  .openapi({ description: 'Execution using a private Cloud Build pool.', required: [] })
  .openapi('PrivatePool')

const ExecutionConfigSchema = z
  .object({
    artifactStorage: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Optional. Cloud Storage location in which to store execution outputs. This can either be a bucket ("gs://my-bucket") or a path within a bucket ("gs://my-bucket/my-dir"). If unspecified, a default bucket located in the same region will be used.',
      }),
    defaultPool: DefaultPoolSchema.exactOptional().openapi({
      description: 'Optional. Use default Cloud Build pool.',
    }),
    executionTimeout: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Optional. Execution timeout for a Cloud Build Execution. This must be between 10m and 24h in seconds format. If unspecified, a default timeout of 1h is used.',
      }),
    privatePool: PrivatePoolSchema.exactOptional().openapi({
      description: 'Optional. Use private Cloud Build pool.',
    }),
    serviceAccount: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Optional. Google service account to use for execution. If unspecified, the project execution service account (-compute@developer.gserviceaccount.com) is used.',
      }),
    usages: z
      .array(z.enum(['EXECUTION_ENVIRONMENT_USAGE_UNSPECIFIED', 'RENDER', 'DEPLOY', 'VERIFY']))
      .exactOptional()
      .openapi({ description: 'Required. Usages when this configuration should be applied.' }),
    workerPool: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Optional. The resource name of the `WorkerPool`, with the format `projects/{project}/locations/{location}/workerPools/{worker_pool}`. If this optional field is unspecified, the default Cloud Build pool will be used.',
      }),
  })
  .openapi({
    description: 'Configuration of the environment to use when calling Skaffold.',
    required: [],
  })
  .openapi('ExecutionConfig')

const GkeClusterSchema = z
  .object({
    cluster: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Information specifying a GKE Cluster. Format is `projects/{project_id}/locations/{location_id}/clusters/{cluster_id}.',
      }),
    internalIp: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Optional. If true, `cluster` is accessed using the private IP address of the control plane endpoint. Otherwise, the default IP address of the control plane endpoint is used. The default IP address is the private IP address for clusters with private control-plane endpoints and the public IP address otherwise. Only specify this option when `cluster` is a [private GKE cluster](https://cloud.google.com/kubernetes-engine/docs/concepts/private-cluster-concept).',
      }),
  })
  .openapi({ description: 'Information specifying a GKE Cluster.', required: [] })
  .openapi('GkeCluster')

const MultiTargetSchema = z
  .object({
    targetIds: z
      .array(z.string())
      .exactOptional()
      .openapi({ description: 'Required. The target_ids of this multiTarget.' }),
  })
  .openapi({ description: 'Information specifying a multiTarget.', required: [] })
  .openapi('MultiTarget')

const CloudRunLocationSchema = z
  .object({
    location: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Required. The location for the Cloud Run Service. Format must be `projects/{project}/locations/{location}`.',
      }),
  })
  .openapi({
    description: 'Information specifying where to deploy a Cloud Run Service.',
    required: [],
  })
  .openapi('CloudRunLocation')

type TargetType = {
  annotations?: { [key: string]: string }
  anthosCluster?: z.infer<typeof AnthosClusterSchema>
  createTime?: string
  description?: string
  etag?: string
  executionConfigs?: z.infer<typeof ExecutionConfigSchema>[]
  gke?: z.infer<typeof GkeClusterSchema>
  labels?: { [key: string]: string }
  multiTarget?: z.infer<typeof MultiTargetSchema>
  name?: string
  requireApproval?: boolean
  run?: z.infer<typeof CloudRunLocationSchema>
  targetId?: string
  uid?: string
  updateTime?: string
}

const AbandonReleaseRequestSchema = z
  .object({})
  .openapi({ description: 'The request object used by `AbandonRelease`.' })
  .openapi('AbandonReleaseRequest')

const AbandonReleaseResponseSchema = z
  .object({})
  .openapi({ description: 'The response object for `AbandonRelease`.' })
  .openapi('AbandonReleaseResponse')

const AdvanceRolloutRequestSchema = z
  .object({
    phaseId: z
      .string()
      .exactOptional()
      .openapi({ description: 'Required. The phase ID to advance the `Rollout` to.' }),
  })
  .openapi({ description: 'The request object used by `AdvanceRollout`.', required: [] })
  .openapi('AdvanceRolloutRequest')

const AdvanceRolloutResponseSchema = z
  .object({})
  .openapi({ description: 'The response object from `AdvanceRollout`.' })
  .openapi('AdvanceRolloutResponse')

const ApproveRolloutRequestSchema = z
  .object({
    approved: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Required. True = approve; false = reject' }),
  })
  .openapi({ description: 'The request object used by `ApproveRollout`.', required: [] })
  .openapi('ApproveRolloutRequest')

const ApproveRolloutResponseSchema = z
  .object({})
  .openapi({ description: 'The response object from `ApproveRollout`.' })
  .openapi('ApproveRolloutResponse')

const AuditLogConfigSchema = z
  .object({
    exemptedMembers: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description:
          'Specifies the identities that do not cause logging for this type of permission. Follows the same format of Binding.members.',
      }),
    logType: z
      .enum(['LOG_TYPE_UNSPECIFIED', 'ADMIN_READ', 'DATA_WRITE', 'DATA_READ'])
      .exactOptional()
      .openapi({ description: 'The log type that this config enables.' }),
  })
  .openapi({
    description:
      'Provides the configuration for logging a type of permissions. Example: { "audit_log_configs": [ { "log_type": "DATA_READ", "exempted_members": [ "user:jose@example.com" ] }, { "log_type": "DATA_WRITE" } ] } This enables \'DATA_READ\' and \'DATA_WRITE\' logging, while exempting jose@example.com from DATA_READ logging.',
    required: [],
  })
  .openapi('AuditLogConfig')

const AuditConfigSchema = z
  .object({
    auditLogConfigs: z
      .array(AuditLogConfigSchema)
      .exactOptional()
      .openapi({ description: 'The configuration for logging of each type of permission.' }),
    service: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Specifies a service that will be enabled for audit logging. For example, `storage.googleapis.com`, `cloudsql.googleapis.com`. `allServices` is a special value that covers all services.',
      }),
  })
  .openapi({
    description:
      'Specifies the audit configuration for a service. The configuration determines which permission types are logged, and what identities, if any, are exempted from logging. An AuditConfig must have one or more AuditLogConfigs. If there are AuditConfigs for both `allServices` and a specific service, the union of the two AuditConfigs is used for that service: the log_types specified in each AuditConfig are enabled, and the exempted_members in each AuditLogConfig are exempted. Example Policy with multiple AuditConfigs: { "audit_configs": [ { "service": "allServices", "audit_log_configs": [ { "log_type": "DATA_READ", "exempted_members": [ "user:jose@example.com" ] }, { "log_type": "DATA_WRITE" }, { "log_type": "ADMIN_READ" } ] }, { "service": "sampleservice.googleapis.com", "audit_log_configs": [ { "log_type": "DATA_READ" }, { "log_type": "DATA_WRITE", "exempted_members": [ "user:aliya@example.com" ] } ] } ] } For sampleservice, this policy enables DATA_READ, DATA_WRITE and ADMIN_READ logging. It also exempts `jose@example.com` from DATA_READ logging, and `aliya@example.com` from DATA_WRITE logging.',
    required: [],
  })
  .openapi('AuditConfig')

const ExprSchema = z
  .object({
    description: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Optional. Description of the expression. This is a longer text which describes the expression, e.g. when hovered over it in a UI.',
      }),
    expression: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Textual representation of an expression in Common Expression Language syntax.',
      }),
    location: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Optional. String indicating the location of the expression for error reporting, e.g. a file name and a position in the file.',
      }),
    title: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Optional. Title for the expression, i.e. a short string describing its purpose. This can be used e.g. in UIs which allow to enter the expression.',
      }),
  })
  .openapi({
    description:
      'Represents a textual expression in the Common Expression Language (CEL) syntax. CEL is a C-like expression language. The syntax and semantics of CEL are documented at https://github.com/google/cel-spec. Example (Comparison): title: "Summary size limit" description: "Determines if a summary is less than 100 chars" expression: "document.summary.size() < 100" Example (Equality): title: "Requestor is owner" description: "Determines if requestor is the document owner" expression: "document.owner == request.auth.claims.email" Example (Logic): title: "Public documents" description: "Determine whether the document should be publicly visible" expression: "document.type != \'private\' && document.type != \'internal\'" Example (Data Manipulation): title: "Notification string" description: "Create a notification string with a timestamp." expression: "\'New message received at \' + string(document.create_time)" The exact variables and functions that may be referenced within an expression are determined by the service that evaluates it. See the service documentation for additional information.',
    required: [],
  })
  .openapi('Expr')

const BindingSchema = z
  .object({
    condition: ExprSchema.exactOptional().openapi({
      description:
        'The condition that is associated with this binding. If the condition evaluates to `true`, then this binding applies to the current request. If the condition evaluates to `false`, then this binding does not apply to the current request. However, a different role binding might grant the same role to one or more of the principals in this binding. To learn which resources support conditions in their IAM policies, see the [IAM documentation](https://cloud.google.com/iam/help/conditions/resource-policies).',
    }),
    members: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description:
          'Specifies the principals requesting access for a Google Cloud resource. `members` can have the following values: * `allUsers`: A special identifier that represents anyone who is on the internet; with or without a Google account. * `allAuthenticatedUsers`: A special identifier that represents anyone who is authenticated with a Google account or a service account. Does not include identities that come from external identity providers (IdPs) through identity federation. * `user:{emailid}`: An email address that represents a specific Google account. For example, `alice@example.com` . * `serviceAccount:{emailid}`: An email address that represents a Google service account. For example, `my-other-app@appspot.gserviceaccount.com`. * `serviceAccount:{projectid}.svc.id.goog[{namespace}/{kubernetes-sa}]`: An identifier for a [Kubernetes service account](https://cloud.google.com/kubernetes-engine/docs/how-to/kubernetes-service-accounts). For example, `my-project.svc.id.goog[my-namespace/my-kubernetes-sa]`. * `group:{emailid}`: An email address that represents a Google group. For example, `admins@example.com`. * `domain:{domain}`: The G Suite domain (primary) that represents all the users of that domain. For example, `google.com` or `example.com`. * `deleted:user:{emailid}?uid={uniqueid}`: An email address (plus unique identifier) representing a user that has been recently deleted. For example, `alice@example.com?uid=123456789012345678901`. If the user is recovered, this value reverts to `user:{emailid}` and the recovered user retains the role in the binding. * `deleted:serviceAccount:{emailid}?uid={uniqueid}`: An email address (plus unique identifier) representing a service account that has been recently deleted. For example, `my-other-app@appspot.gserviceaccount.com?uid=123456789012345678901`. If the service account is undeleted, this value reverts to `serviceAccount:{emailid}` and the undeleted service account retains the role in the binding. * `deleted:group:{emailid}?uid={uniqueid}`: An email address (plus unique identifier) representing a Google group that has been recently deleted. For example, `admins@example.com?uid=123456789012345678901`. If the group is recovered, this value reverts to `group:{emailid}` and the recovered group retains the role in the binding.',
      }),
    role: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Role that is assigned to the list of `members`, or principals. For example, `roles/viewer`, `roles/editor`, or `roles/owner`.',
      }),
  })
  .openapi({ description: 'Associates `members`, or principals, with a `role`.', required: [] })
  .openapi('Binding')

const BuildArtifactSchema = z
  .object({
    image: z
      .string()
      .exactOptional()
      .openapi({ description: 'Image name in Skaffold configuration.' }),
    tag: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Image tag to use. This will generally be the full path to an image, such as "gcr.io/my-project/busybox:1.2.3" or "gcr.io/my-project/busybox@sha256:abc123".',
      }),
  })
  .openapi({
    description: 'Description of an a image to use during Skaffold rendering.',
    required: [],
  })
  .openapi('BuildArtifact')

const CanaryDeploymentSchema = z
  .object({
    percentages: z
      .array(z.int32())
      .exactOptional()
      .openapi({
        description:
          'Required. The percentage based deployments that will occur as a part of a `Rollout`. List is expected in ascending order and each integer n is 0 <= n < 100.',
      }),
    verify: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Whether to run verify tests after each percentage deployment.' }),
  })
  .openapi({
    description: 'CanaryDeployment represents the canary deployment configuration',
    required: [],
  })
  .openapi('CanaryDeployment')

const PhaseConfigSchema = z
  .object({
    percentage: z
      .int32()
      .exactOptional()
      .openapi({ description: 'Required. Percentage deployment for the phase.' }),
    phaseId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Required. The ID to assign to the `Rollout` phase. This value must consist of lower-case letters, numbers, and hyphens, start with a letter and end with a letter or a number, and have a max length of 63 characters. In other words, it must match the following regex: `^[a-z]([a-z0-9-]{0,61}[a-z0-9])?$`.',
      }),
    profiles: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description:
          'Skaffold profiles to use when rendering the manifest for this phase. These are in addition to the profiles list specified in the `DeliveryPipeline` stage.',
      }),
    verify: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Whether to run verify tests after the deployment.' }),
  })
  .openapi({
    description:
      'PhaseConfig represents the configuration for a phase in the custom canary deployment.',
    required: [],
  })
  .openapi('PhaseConfig')

const CustomCanaryDeploymentSchema = z
  .object({
    phaseConfigs: z
      .array(PhaseConfigSchema)
      .exactOptional()
      .openapi({
        description:
          'Required. Configuration for each phase in the canary deployment in the order executed.',
      }),
  })
  .openapi({
    description: 'CustomCanaryDeployment represents the custom canary deployment configuration.',
    required: [],
  })
  .openapi('CustomCanaryDeployment')

const CloudRunConfigSchema = z
  .object({
    automaticTrafficControl: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          "Whether Cloud Deploy should update the traffic stanza in a Cloud Run Service on the user's behalf to facilitate traffic splitting. This is required to be true for CanaryDeployments, but optional for CustomCanaryDeployments.",
      }),
  })
  .openapi({
    description: 'CloudRunConfig contains the Cloud Run runtime configuration.',
    required: [],
  })
  .openapi('CloudRunConfig')

const GatewayServiceMeshSchema = z
  .object({
    deployment: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Required. Name of the Kubernetes Deployment whose traffic is managed by the specified HTTPRoute and Service.',
      }),
    httpRoute: z
      .string()
      .exactOptional()
      .openapi({ description: 'Required. Name of the Gateway API HTTPRoute.' }),
    service: z
      .string()
      .exactOptional()
      .openapi({ description: 'Required. Name of the Kubernetes Service.' }),
  })
  .openapi({
    description: 'Information about the Kubernetes Gateway API service mesh configuration.',
    required: [],
  })
  .openapi('GatewayServiceMesh')

const ServiceNetworkingSchema = z
  .object({
    deployment: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Required. Name of the Kubernetes Deployment whose traffic is managed by the specified Service.',
      }),
    service: z
      .string()
      .exactOptional()
      .openapi({ description: 'Required. Name of the Kubernetes Service.' }),
  })
  .openapi({
    description: 'Information about the Kubernetes Service networking configuration.',
    required: [],
  })
  .openapi('ServiceNetworking')

const KubernetesConfigSchema = z
  .object({
    gatewayServiceMesh: GatewayServiceMeshSchema.exactOptional().openapi({
      description: 'Kubernetes Gateway API service mesh configuration.',
    }),
    serviceNetworking: ServiceNetworkingSchema.exactOptional().openapi({
      description: 'Kubernetes Service networking configuration.',
    }),
  })
  .openapi({
    description: 'KubernetesConfig contains the Kubernetes runtime configuration.',
    required: [],
  })
  .openapi('KubernetesConfig')

const RuntimeConfigSchema = z
  .object({
    cloudRun: CloudRunConfigSchema.exactOptional().openapi({
      description: 'Cloud Run runtime configuration.',
    }),
    kubernetes: KubernetesConfigSchema.exactOptional().openapi({
      description: 'Kubernetes runtime configuration.',
    }),
  })
  .openapi({
    description:
      'RuntimeConfig contains the runtime specific configurations for a deployment strategy.',
    required: [],
  })
  .openapi('RuntimeConfig')

const CanarySchema = z
  .object({
    canaryDeployment: CanaryDeploymentSchema.exactOptional().openapi({
      description: 'Configures the progressive based deployment for a Target.',
    }),
    customCanaryDeployment: CustomCanaryDeploymentSchema.exactOptional().openapi({
      description:
        'Configures the progressive based deployment for a Target, but allows customizing at the phase level where a phase represents each of the percentage deployments.',
    }),
    runtimeConfig: RuntimeConfigSchema.exactOptional().openapi({
      description:
        'Optional. Runtime specific configurations for the deployment strategy. The runtime configuration is used to determine how Cloud Deploy will split traffic to enable a progressive deployment.',
    }),
  })
  .openapi({ description: 'Canary represents the canary deployment strategy.', required: [] })
  .openapi('Canary')

const CancelOperationRequestSchema = z
  .object({})
  .openapi({ description: 'The request message for Operations.CancelOperation.' })
  .openapi('CancelOperationRequest')

const CancelRolloutRequestSchema = z
  .object({})
  .openapi({ description: 'The request object used by `CancelRollout`.' })
  .openapi('CancelRolloutRequest')

const CancelRolloutResponseSchema = z
  .object({})
  .openapi({ description: 'The response object from `CancelRollout`.' })
  .openapi('CancelRolloutResponse')

const JobSchema: z.ZodType<JobType> = z
  .lazy(() =>
    z
      .object({
        advanceChildRolloutJob: AdvanceChildRolloutJobSchema.exactOptional().openapi({
          description: 'Output only. An advanceChildRollout Job.',
          readOnly: true,
        }),
        createChildRolloutJob: CreateChildRolloutJobSchema.exactOptional().openapi({
          description: 'Output only. A createChildRollout Job.',
          readOnly: true,
        }),
        deployJob: DeployJobSchema.exactOptional().openapi({
          description: 'Output only. A deploy Job.',
          readOnly: true,
        }),
        id: z
          .string()
          .exactOptional()
          .openapi({ description: 'Output only. The ID of the Job.', readOnly: true }),
        jobRun: z
          .string()
          .exactOptional()
          .openapi({
            description:
              'Output only. The name of the `JobRun` responsible for the most recent invocation of this Job.',
            readOnly: true,
          }),
        skipMessage: z
          .string()
          .exactOptional()
          .openapi({
            description:
              'Output only. Additional information on why the Job was skipped, if available.',
            readOnly: true,
          }),
        state: z
          .enum([
            'STATE_UNSPECIFIED',
            'PENDING',
            'DISABLED',
            'IN_PROGRESS',
            'SUCCEEDED',
            'FAILED',
            'ABORTED',
            'SKIPPED',
            'IGNORED',
          ])
          .exactOptional()
          .openapi({ description: 'Output only. The current state of the Job.', readOnly: true }),
        verifyJob: VerifyJobSchema.exactOptional().openapi({
          description: 'Output only. A verify Job.',
          readOnly: true,
        }),
      })
      .openapi({ description: 'Job represents an operation for a `Rollout`.', required: [] }),
  )
  .openapi('Job')

const ChildRolloutJobsSchema = z
  .object({
    advanceRolloutJobs: z
      .array(JobSchema)
      .exactOptional()
      .openapi({ description: 'Output only. List of AdvanceChildRolloutJobs', readOnly: true }),
    createRolloutJobs: z
      .array(JobSchema)
      .exactOptional()
      .openapi({ description: 'Output only. List of CreateChildRolloutJobs', readOnly: true }),
  })
  .openapi({ description: 'ChildRollouts job composition', required: [] })
  .openapi('ChildRolloutJobs')

const DateSchema = z
  .object({
    day: z
      .int32()
      .exactOptional()
      .openapi({
        description:
          "Day of a month. Must be from 1 to 31 and valid for the year and month, or 0 to specify a year by itself or a year and month where the day isn't significant.",
      }),
    month: z
      .int32()
      .exactOptional()
      .openapi({
        description:
          'Month of a year. Must be from 1 to 12, or 0 to specify a year without a month and day.',
      }),
    year: z
      .int32()
      .exactOptional()
      .openapi({
        description:
          'Year of the date. Must be from 1 to 9999, or 0 to specify a date without a year.',
      }),
  })
  .openapi({
    description:
      'Represents a whole or partial calendar date, such as a birthday. The time of day and time zone are either specified elsewhere or are insignificant. The date is relative to the Gregorian Calendar. This can represent one of the following: * A full date, with non-zero year, month, and day values. * A month and day, with a zero year (for example, an anniversary). * A year on its own, with a zero month and a zero day. * A year and month, with a zero day (for example, a credit card expiration date). Related types: * google.type.TimeOfDay * google.type.DateTime * google.protobuf.Timestamp',
    required: [],
  })
  .openapi('Date')

const SkaffoldVersionSchema = z
  .object({
    maintenanceModeTime: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The time at which this version of skaffold will enter maintenance mode.',
      }),
    supportEndDate: DateSchema.exactOptional().openapi({
      description: 'Date when this version is expected to no longer be supported.',
    }),
    supportExpirationTime: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The time at which this version of skaffold will no longer be supported.',
      }),
    version: z
      .string()
      .exactOptional()
      .openapi({ description: 'Release version number. For example, "1.20.3".' }),
  })
  .openapi({ description: 'Details of a supported Skaffold version.', required: [] })
  .openapi('SkaffoldVersion')

const ConfigSchema = z
  .object({
    defaultSkaffoldVersion: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Default Skaffold version that is assigned when a Release is created without specifying a Skaffold version.',
      }),
    name: z.string().exactOptional().openapi({ description: 'Name of the configuration.' }),
    supportedVersions: z
      .array(SkaffoldVersionSchema)
      .exactOptional()
      .openapi({ description: 'All supported versions of Skaffold.' }),
  })
  .openapi({ description: 'Service-wide configuration.', required: [] })
  .openapi('Config')

const PipelineReadyConditionSchema = z
  .object({
    status: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'True if the Pipeline is in a valid state. Otherwise at least one condition in `PipelineCondition` is in an invalid state. Iterate over those conditions and see which condition(s) has status = false to find out what is wrong with the Pipeline.',
      }),
    updateTime: z
      .string()
      .exactOptional()
      .openapi({ description: 'Last time the condition was updated.' }),
  })
  .openapi({
    description: 'PipelineReadyCondition contains information around the status of the Pipeline.',
    required: [],
  })
  .openapi('PipelineReadyCondition')

const TargetsPresentConditionSchema = z
  .object({
    missingTargets: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description:
          'The list of Target names that do not exist. For example, projects/{project_id}/locations/{location_name}/targets/{target_name}.',
      }),
    status: z
      .boolean()
      .exactOptional()
      .openapi({ description: "True if there aren't any missing Targets." }),
    updateTime: z
      .string()
      .exactOptional()
      .openapi({ description: 'Last time the condition was updated.' }),
  })
  .openapi({
    description:
      'TargetsPresentCondition contains information on any Targets defined in the Delivery Pipeline that do not actually exist.',
    required: [],
  })
  .openapi('TargetsPresentCondition')

const TargetsTypeConditionSchema = z
  .object({
    errorDetails: z
      .string()
      .exactOptional()
      .openapi({ description: 'Human readable error message.' }),
    status: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'True if the targets are all a comparable type. For example this is true if all targets are GKE clusters. This is false if some targets are Cloud Run targets and others are GKE clusters.',
      }),
  })
  .openapi({
    description:
      'TargetsTypeCondition contains information on whether the Targets defined in the Delivery Pipeline are of the same type.',
    required: [],
  })
  .openapi('TargetsTypeCondition')

const PipelineConditionSchema = z
  .object({
    pipelineReadyCondition: PipelineReadyConditionSchema.exactOptional().openapi({
      description: "Details around the Pipeline's overall status.",
    }),
    targetsPresentCondition: TargetsPresentConditionSchema.exactOptional().openapi({
      description: 'Details around targets enumerated in the pipeline.',
    }),
    targetsTypeCondition: TargetsTypeConditionSchema.exactOptional().openapi({
      description:
        'Details on the whether the targets enumerated in the pipeline are of the same type.',
    }),
  })
  .openapi({
    description: 'PipelineCondition contains all conditions relevant to a Delivery Pipeline.',
    required: [],
  })
  .openapi('PipelineCondition')

const StandardSchema = z
  .object({
    verify: z.boolean().exactOptional().openapi({ description: 'Whether to verify a deployment.' }),
  })
  .openapi({ description: 'Standard represents the standard deployment strategy.', required: [] })
  .openapi('Standard')

const StrategySchema = z
  .object({
    canary: CanarySchema.exactOptional().openapi({
      description:
        'Canary deployment strategy provides progressive percentage based deployments to a Target.',
    }),
    standard: StandardSchema.exactOptional().openapi({
      description:
        'Standard deployment strategy executes a single deploy and allows verifying the deployment.',
    }),
  })
  .openapi({ description: 'Strategy contains deployment strategy information.', required: [] })
  .openapi('Strategy')

const StageSchema = z
  .object({
    profiles: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description:
          "Skaffold profiles to use when rendering the manifest for this stage's `Target`.",
      }),
    strategy: StrategySchema.exactOptional().openapi({
      description: 'Optional. The strategy to use for a `Rollout` to this stage.',
    }),
    targetId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The target_id to which this stage points. This field refers exclusively to the last segment of a target name. For example, this field would just be `my-target` (rather than `projects/project/locations/location/targets/my-target`). The location of the `Target` is inferred to be the same as the location of the `DeliveryPipeline` that contains this `Stage`.',
      }),
  })
  .openapi({ description: 'Stage specifies a location to which to deploy.', required: [] })
  .openapi('Stage')

const SerialPipelineSchema = z
  .object({
    stages: z
      .array(StageSchema)
      .exactOptional()
      .openapi({
        description:
          'Each stage specifies configuration for a `Target`. The ordering of this list defines the promotion flow.',
      }),
  })
  .openapi({
    description: 'SerialPipeline defines a sequential set of stages for a `DeliveryPipeline`.',
    required: [],
  })
  .openapi('SerialPipeline')

const DeliveryPipelineSchema = z
  .object({
    annotations: z
      .record(z.string(), z.string())
      .exactOptional()
      .openapi({
        description:
          'User annotations. These attributes can only be set and used by the user, and not by Google Cloud Deploy.',
      }),
    condition: PipelineConditionSchema.exactOptional().openapi({
      description: 'Output only. Information around the state of the Delivery Pipeline.',
      readOnly: true,
    }),
    createTime: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Output only. Time at which the pipeline was created.',
        readOnly: true,
      }),
    description: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Description of the `DeliveryPipeline`. Max length is 255 characters.',
      }),
    etag: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'This checksum is computed by the server based on the value of other fields, and may be sent on update and delete requests to ensure the client has an up-to-date value before proceeding.',
      }),
    labels: z
      .record(z.string(), z.string())
      .exactOptional()
      .openapi({
        description:
          'Labels are attributes that can be set and used by both the user and by Google Cloud Deploy. Labels must meet the following constraints: * Keys and values can contain only lowercase letters, numeric characters, underscores, and dashes. * All characters must use UTF-8 encoding, and international characters are allowed. * Keys must start with a lowercase letter or international character. * Each resource is limited to a maximum of 64 labels. Both keys and values are additionally constrained to be <= 128 bytes.',
      }),
    name: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Optional. Name of the `DeliveryPipeline`. Format is projects/{project}/ locations/{location}/deliveryPipelines/a-z{0,62}.',
      }),
    serialPipeline: SerialPipelineSchema.exactOptional().openapi({
      description: 'SerialPipeline defines a sequential set of stages for a `DeliveryPipeline`.',
    }),
    suspended: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'When suspended, no new releases or rollouts can be created, but in-progress ones will complete.',
      }),
    uid: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Output only. Unique identifier of the `DeliveryPipeline`.',
        readOnly: true,
      }),
    updateTime: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Output only. Most recent time at which the pipeline was updated.',
        readOnly: true,
      }),
  })
  .openapi({
    description:
      'A `DeliveryPipeline` resource in the Google Cloud Deploy API. A `DeliveryPipeline` defines a pipeline through which a Skaffold configuration can progress.',
    required: [],
  })
  .openapi('DeliveryPipeline')

const DeliveryPipelineNotificationEventSchema = z
  .object({
    deliveryPipeline: z
      .string()
      .exactOptional()
      .openapi({ description: 'The name of the `Delivery Pipeline`.' }),
    message: z
      .string()
      .exactOptional()
      .openapi({ description: 'Debug message for when a notification fails to send.' }),
    type: z
      .enum(['TYPE_UNSPECIFIED', 'TYPE_PUBSUB_NOTIFICATION_FAILURE', 'TYPE_RENDER_STATUES_CHANGE'])
      .exactOptional()
      .openapi({ description: 'Type of this notification, e.g. for a Pub/Sub failure.' }),
  })
  .openapi({
    description:
      'Payload proto for "clouddeploy.googleapis.com/deliverypipeline_notification" Platform Log event that describes the failure to send delivery pipeline status change Pub/Sub notification.',
    required: [],
  })
  .openapi('DeliveryPipelineNotificationEvent')

const DeploymentJobsSchema = z
  .object({
    deployJob: JobSchema.exactOptional().openapi({
      description: 'Output only. The deploy Job. This is the first job run in the phase.',
      readOnly: true,
    }),
    verifyJob: JobSchema.exactOptional().openapi({
      description: 'Output only. The verify Job. Runs after a deploy if the deploy succeeds.',
      readOnly: true,
    }),
  })
  .openapi({ description: 'Deployment job composition.', required: [] })
  .openapi('DeploymentJobs')

const EmptySchema = z
  .object({})
  .openapi({
    description:
      'A generic empty message that you can re-use to avoid defining duplicated empty messages in your APIs. A typical example is to use it as the request or the response type of an API method. For instance: service Foo { rpc Bar(google.protobuf.Empty) returns (google.protobuf.Empty); }',
  })
  .openapi('Empty')

const IgnoreJobRequestSchema = z
  .object({
    jobId: z
      .string()
      .exactOptional()
      .openapi({ description: 'Required. The job ID for the Job to ignore.' }),
    phaseId: z
      .string()
      .exactOptional()
      .openapi({ description: 'Required. The phase ID the Job to ignore belongs to.' }),
  })
  .openapi({ description: 'The request object used by `IgnoreJob`.', required: [] })
  .openapi('IgnoreJobRequest')

const IgnoreJobResponseSchema = z
  .object({})
  .openapi({ description: 'The response object from `IgnoreJob`.' })
  .openapi('IgnoreJobResponse')

const JobRunSchema: z.ZodType<JobRunType> = z
  .lazy(() =>
    z
      .object({
        advanceChildRolloutJobRun: AdvanceChildRolloutJobRunSchema.exactOptional().openapi({
          description: 'Output only. Information specific to an advanceChildRollout `JobRun`',
          readOnly: true,
        }),
        createChildRolloutJobRun: CreateChildRolloutJobRunSchema.exactOptional().openapi({
          description: 'Output only. Information specific to a createChildRollout `JobRun`.',
          readOnly: true,
        }),
        createTime: z
          .string()
          .exactOptional()
          .openapi({
            description: 'Output only. Time at which the `JobRun` was created.',
            readOnly: true,
          }),
        deployJobRun: DeployJobRunSchema.exactOptional().openapi({
          description: 'Output only. Information specific to a deploy `JobRun`.',
          readOnly: true,
        }),
        endTime: z
          .string()
          .exactOptional()
          .openapi({
            description: 'Output only. Time at which the `JobRun` ended.',
            readOnly: true,
          }),
        etag: z
          .string()
          .exactOptional()
          .openapi({
            description:
              'Output only. This checksum is computed by the server based on the value of other fields, and may be sent on update and delete requests to ensure the client has an up-to-date value before proceeding.',
            readOnly: true,
          }),
        jobId: z
          .string()
          .exactOptional()
          .openapi({
            description: 'Output only. ID of the `Rollout` job this `JobRun` corresponds to.',
            readOnly: true,
          }),
        name: z
          .string()
          .exactOptional()
          .openapi({
            description:
              'Optional. Name of the `JobRun`. Format is projects/{project}/locations/{location}/ deliveryPipelines/{deliveryPipeline}/releases/{releases}/rollouts/ {rollouts}/jobRuns/{uuid}.',
          }),
        phaseId: z
          .string()
          .exactOptional()
          .openapi({
            description: 'Output only. ID of the `Rollout` phase this `JobRun` belongs in.',
            readOnly: true,
          }),
        startTime: z
          .string()
          .exactOptional()
          .openapi({
            description: 'Output only. Time at which the `JobRun` was started.',
            readOnly: true,
          }),
        state: z
          .enum([
            'STATE_UNSPECIFIED',
            'IN_PROGRESS',
            'SUCCEEDED',
            'FAILED',
            'TERMINATING',
            'TERMINATED',
          ])
          .exactOptional()
          .openapi({
            description: 'Output only. The current state of the `JobRun`.',
            readOnly: true,
          }),
        uid: z
          .string()
          .exactOptional()
          .openapi({
            description: 'Output only. Unique identifier of the `JobRun`.',
            readOnly: true,
          }),
        verifyJobRun: VerifyJobRunSchema.exactOptional().openapi({
          description: 'Output only. Information specific to a verify `JobRun`.',
          readOnly: true,
        }),
      })
      .openapi({
        description:
          'A `JobRun` resource in the Google Cloud Deploy API. A `JobRun` contains information of a single `Rollout` job evaluation.',
        required: [],
      }),
  )
  .openapi('JobRun')

const JobRunNotificationEventSchema = z
  .object({
    jobRun: z.string().exactOptional().openapi({ description: 'The name of the `JobRun`.' }),
    message: z
      .string()
      .exactOptional()
      .openapi({ description: 'Debug message for when a notification fails to send.' }),
    pipelineUid: z
      .string()
      .exactOptional()
      .openapi({ description: 'Unique identifier of the `DeliveryPipeline`.' }),
    releaseUid: z
      .string()
      .exactOptional()
      .openapi({ description: 'Unique identifier of the `Release`.' }),
    rolloutUid: z
      .string()
      .exactOptional()
      .openapi({ description: 'Unique identifier of the `Rollout`.' }),
    targetId: z.string().exactOptional().openapi({ description: 'ID of the `Target`.' }),
    type: z
      .enum(['TYPE_UNSPECIFIED', 'TYPE_PUBSUB_NOTIFICATION_FAILURE', 'TYPE_RENDER_STATUES_CHANGE'])
      .exactOptional()
      .openapi({ description: 'Type of this notification, e.g. for a Pub/Sub failure.' }),
  })
  .openapi({
    description:
      'Payload proto for "clouddeploy.googleapis.com/jobrun_notification" Platform Log event that describes the failure to send JobRun resource update Pub/Sub notification.',
    required: [],
  })
  .openapi('JobRunNotificationEvent')

const ListDeliveryPipelinesResponseSchema = z
  .object({
    deliveryPipelines: z
      .array(DeliveryPipelineSchema)
      .exactOptional()
      .openapi({ description: 'The `DeliveryPipeline` objects.' }),
    nextPageToken: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'A token, which can be sent as `page_token` to retrieve the next page. If this field is omitted, there are no subsequent pages.',
      }),
    unreachable: z
      .array(z.string())
      .exactOptional()
      .openapi({ description: 'Locations that could not be reached.' }),
  })
  .openapi({ description: 'The response object from `ListDeliveryPipelines`.', required: [] })
  .openapi('ListDeliveryPipelinesResponse')

const ListJobRunsResponseSchema = z
  .object({
    jobRuns: z
      .array(JobRunSchema)
      .exactOptional()
      .openapi({ description: 'The `JobRun` objects.' }),
    nextPageToken: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'A token, which can be sent as `page_token` to retrieve the next page. If this field is omitted, there are no subsequent pages.',
      }),
    unreachable: z
      .array(z.string())
      .exactOptional()
      .openapi({ description: 'Locations that could not be reached' }),
  })
  .openapi({
    description: 'ListJobRunsResponse is the response object returned by `ListJobRuns`.',
    required: [],
  })
  .openapi('ListJobRunsResponse')

const LocationSchema = z
  .object({
    displayName: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The friendly name for this location, typically a nearby city name. For example, "Tokyo".',
      }),
    labels: z
      .record(z.string(), z.string())
      .exactOptional()
      .openapi({
        description:
          'Cross-service attributes for the location. For example {"cloud.googleapis.com/region": "us-east1"}',
      }),
    locationId: z
      .string()
      .exactOptional()
      .openapi({ description: 'The canonical id for this location. For example: `"us-east1"`.' }),
    metadata: z
      .record(
        z.string(),
        z
          .any()
          .openapi({
            description: 'Properties of the object. Contains field @type with type URL.',
          }),
      )
      .exactOptional()
      .openapi({
        description:
          'Service-specific metadata. For example the available capacity at the given location.',
      }),
    name: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Resource name for the location, which may vary between implementations. For example: `"projects/example-project/locations/us-east1"`',
      }),
  })
  .openapi({
    description: 'A resource that represents Google Cloud Platform location.',
    required: [],
  })
  .openapi('Location')

const ListLocationsResponseSchema = z
  .object({
    locations: z
      .array(LocationSchema)
      .exactOptional()
      .openapi({
        description: 'A list of locations that matches the specified filter in the request.',
      }),
    nextPageToken: z
      .string()
      .exactOptional()
      .openapi({ description: 'The standard List next-page token.' }),
  })
  .openapi({ description: 'The response message for Locations.ListLocations.', required: [] })
  .openapi('ListLocationsResponse')

const StatusSchema = z
  .object({
    code: z
      .int32()
      .exactOptional()
      .openapi({
        description: 'The status code, which should be an enum value of google.rpc.Code.',
      }),
    details: z
      .array(
        z.record(
          z.string(),
          z
            .any()
            .openapi({
              description: 'Properties of the object. Contains field @type with type URL.',
            }),
        ),
      )
      .exactOptional()
      .openapi({
        description:
          'A list of messages that carry the error details. There is a common set of message types for APIs to use.',
      }),
    message: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'A developer-facing error message, which should be in English. Any user-facing error message should be localized and sent in the google.rpc.Status.details field, or localized by the client.',
      }),
  })
  .openapi({
    description:
      'The `Status` type defines a logical error model that is suitable for different programming environments, including REST APIs and RPC APIs. It is used by [gRPC](https://github.com/grpc). Each `Status` message contains three pieces of data: error code, error message, and error details. You can find out more about this error model and how to work with it in the [API Design Guide](https://cloud.google.com/apis/design/errors).',
    required: [],
  })
  .openapi('Status')

const OperationSchema = z
  .object({
    done: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'If the value is `false`, it means the operation is still in progress. If `true`, the operation is completed, and either `error` or `response` is available.',
      }),
    error: StatusSchema.exactOptional().openapi({
      description: 'The error result of the operation in case of failure or cancellation.',
    }),
    metadata: z
      .record(
        z.string(),
        z
          .any()
          .openapi({
            description: 'Properties of the object. Contains field @type with type URL.',
          }),
      )
      .exactOptional()
      .openapi({
        description:
          'Service-specific metadata associated with the operation. It typically contains progress information and common metadata such as create time. Some services might not provide such metadata. Any method that returns a long-running operation should document the metadata type, if any.',
      }),
    name: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The server-assigned name, which is only unique within the same service that originally returns it. If you use the default HTTP mapping, the `name` should be a resource name ending with `operations/{unique_id}`.',
      }),
    response: z
      .record(
        z.string(),
        z
          .any()
          .openapi({
            description: 'Properties of the object. Contains field @type with type URL.',
          }),
      )
      .exactOptional()
      .openapi({
        description:
          'The normal response of the operation in case of success. If the original method returns no data on success, such as `Delete`, the response is `google.protobuf.Empty`. If the original method is standard `Get`/`Create`/`Update`, the response should be the resource. For other methods, the response should have the type `XxxResponse`, where `Xxx` is the original method name. For example, if the original method name is `TakeSnapshot()`, the inferred response type is `TakeSnapshotResponse`.',
      }),
  })
  .openapi({
    description:
      'This resource represents a long-running operation that is the result of a network API call.',
    required: [],
  })
  .openapi('Operation')

const ListOperationsResponseSchema = z
  .object({
    nextPageToken: z
      .string()
      .exactOptional()
      .openapi({ description: 'The standard List next-page token.' }),
    operations: z
      .array(OperationSchema)
      .exactOptional()
      .openapi({
        description: 'A list of operations that matches the specified filter in the request.',
      }),
  })
  .openapi({ description: 'The response message for Operations.ListOperations.', required: [] })
  .openapi('ListOperationsResponse')

const ReleaseReadyConditionSchema = z
  .object({
    status: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'True if the Release is in a valid state. Otherwise at least one condition in `ReleaseCondition` is in an invalid state. Iterate over those conditions and see which condition(s) has status = false to find out what is wrong with the Release.',
      }),
  })
  .openapi({
    description:
      'ReleaseReadyCondition contains information around the status of the Release. If a release is not ready, you cannot create a rollout with the release.',
    required: [],
  })
  .openapi('ReleaseReadyCondition')

const SkaffoldSupportedConditionSchema = z
  .object({
    maintenanceModeTime: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "The time at which this release's version of skaffold will enter maintenance mode.",
      }),
    skaffoldSupportState: z
      .enum([
        'SKAFFOLD_SUPPORT_STATE_UNSPECIFIED',
        'SKAFFOLD_SUPPORT_STATE_SUPPORTED',
        'SKAFFOLD_SUPPORT_STATE_MAINTENANCE_MODE',
        'SKAFFOLD_SUPPORT_STATE_UNSUPPORTED',
      ])
      .exactOptional()
      .openapi({
        description: "The skaffold support state for this release's version of skaffold.",
      }),
    status: z
      .boolean()
      .exactOptional()
      .openapi({
        description: 'True if the version of skaffold used by this release is supported.',
      }),
    supportExpirationTime: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "The time at which this release's version of skaffold will no longer be supported.",
      }),
  })
  .openapi({
    description:
      "SkaffoldSupportedCondition contains information about when support for the release's version of skaffold ends.",
    required: [],
  })
  .openapi('SkaffoldSupportedCondition')

const ReleaseConditionSchema = z
  .object({
    releaseReadyCondition: ReleaseReadyConditionSchema.exactOptional().openapi({
      description: "Details around the Releases's overall status.",
    }),
    skaffoldSupportedCondition: SkaffoldSupportedConditionSchema.exactOptional().openapi({
      description: "Details around the support state of the release's skaffold version.",
    }),
  })
  .openapi({
    description: 'ReleaseCondition contains all conditions relevant to a Release.',
    required: [],
  })
  .openapi('ReleaseCondition')

const PhaseArtifactSchema = z
  .object({
    manifestPath: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Output only. File path of the rendered manifest relative to the URI.',
        readOnly: true,
      }),
    skaffoldConfigPath: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Output only. File path of the resolved Skaffold configuration relative to the URI.',
        readOnly: true,
      }),
  })
  .openapi({
    description: 'Contains the paths to the artifacts, relative to the URI, for a phase.',
    required: [],
  })
  .openapi('PhaseArtifact')

const TargetArtifactSchema = z
  .object({
    artifactUri: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Output only. URI of a directory containing the artifacts. This contains deployment configuration used by Skaffold during a rollout, and all paths are relative to this location.',
        readOnly: true,
      }),
    manifestPath: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Output only. File path of the rendered manifest relative to the URI.',
        readOnly: true,
      }),
    phaseArtifacts: z
      .record(z.string(), PhaseArtifactSchema)
      .exactOptional()
      .openapi({
        description: 'Output only. Map from the phase ID to the phase artifacts for the `Target`.',
        readOnly: true,
      }),
    skaffoldConfigPath: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Output only. File path of the resolved Skaffold configuration relative to the URI.',
        readOnly: true,
      }),
  })
  .openapi({ description: 'The artifacts produced by a target render operation.', required: [] })
  .openapi('TargetArtifact')

const RenderMetadataSchema: z.ZodType<RenderMetadataType> = z
  .lazy(() =>
    z
      .object({
        cloudRun: CloudRunRenderMetadataSchema.exactOptional().openapi({
          description: 'Output only. Metadata associated with rendering for Cloud Run.',
          readOnly: true,
        }),
      })
      .openapi({
        description: 'RenderMetadata includes information associated with a `Release` render.',
        required: [],
      }),
  )
  .openapi('RenderMetadata')

const TargetRenderSchema = z
  .object({
    failureCause: z
      .enum([
        'FAILURE_CAUSE_UNSPECIFIED',
        'CLOUD_BUILD_UNAVAILABLE',
        'EXECUTION_FAILED',
        'CLOUD_BUILD_REQUEST_FAILED',
      ])
      .exactOptional()
      .openapi({
        description:
          'Output only. Reason this render failed. This will always be unspecified while the render in progress.',
        readOnly: true,
      }),
    failureMessage: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Output only. Additional information about the render failure, if available.',
        readOnly: true,
      }),
    metadata: RenderMetadataSchema.exactOptional().openapi({
      description: 'Output only. Metadata related to the `Release` render for this Target.',
      readOnly: true,
    }),
    renderingBuild: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Output only. The resource name of the Cloud Build `Build` object that is used to render the manifest for this target. Format is `projects/{project}/locations/{location}/builds/{build}`.',
        readOnly: true,
      }),
    renderingState: z
      .enum(['TARGET_RENDER_STATE_UNSPECIFIED', 'SUCCEEDED', 'FAILED', 'IN_PROGRESS'])
      .exactOptional()
      .openapi({
        description: 'Output only. Current state of the render operation for this Target.',
        readOnly: true,
      }),
  })
  .openapi({ description: 'Details of rendering for a single target.', required: [] })
  .openapi('TargetRender')

const TargetSchema: z.ZodType<TargetType> = z
  .lazy(() =>
    z
      .object({
        annotations: z
          .record(z.string(), z.string())
          .exactOptional()
          .openapi({
            description:
              'Optional. User annotations. These attributes can only be set and used by the user, and not by Google Cloud Deploy. See https://google.aip.dev/128#annotations for more details such as format and size limitations.',
          }),
        anthosCluster: AnthosClusterSchema.exactOptional().openapi({
          description: 'Information specifying an Anthos Cluster.',
        }),
        createTime: z
          .string()
          .exactOptional()
          .openapi({
            description: 'Output only. Time at which the `Target` was created.',
            readOnly: true,
          }),
        description: z
          .string()
          .exactOptional()
          .openapi({
            description: 'Optional. Description of the `Target`. Max length is 255 characters.',
          }),
        etag: z
          .string()
          .exactOptional()
          .openapi({
            description:
              'Optional. This checksum is computed by the server based on the value of other fields, and may be sent on update and delete requests to ensure the client has an up-to-date value before proceeding.',
          }),
        executionConfigs: z
          .array(ExecutionConfigSchema)
          .exactOptional()
          .openapi({
            description:
              'Configurations for all execution that relates to this `Target`. Each `ExecutionEnvironmentUsage` value may only be used in a single configuration; using the same value multiple times is an error. When one or more configurations are specified, they must include the `RENDER` and `DEPLOY` `ExecutionEnvironmentUsage` values. When no configurations are specified, execution will use the default specified in `DefaultPool`.',
          }),
        gke: GkeClusterSchema.exactOptional().openapi({
          description: 'Information specifying a GKE Cluster.',
        }),
        labels: z
          .record(z.string(), z.string())
          .exactOptional()
          .openapi({
            description:
              'Optional. Labels are attributes that can be set and used by both the user and by Google Cloud Deploy. Labels must meet the following constraints: * Keys and values can contain only lowercase letters, numeric characters, underscores, and dashes. * All characters must use UTF-8 encoding, and international characters are allowed. * Keys must start with a lowercase letter or international character. * Each resource is limited to a maximum of 64 labels. Both keys and values are additionally constrained to be <= 128 bytes.',
          }),
        multiTarget: MultiTargetSchema.exactOptional().openapi({
          description: 'Information specifying a multiTarget.',
        }),
        name: z
          .string()
          .exactOptional()
          .openapi({
            description:
              'Optional. Name of the `Target`. Format is projects/{project}/locations/{location}/targets/a-z{0,62}.',
          }),
        requireApproval: z
          .boolean()
          .exactOptional()
          .openapi({ description: 'Optional. Whether or not the `Target` requires approval.' }),
        run: CloudRunLocationSchema.exactOptional().openapi({
          description: 'Information specifying a Cloud Run deployment target.',
        }),
        targetId: z
          .string()
          .exactOptional()
          .openapi({ description: 'Output only. Resource id of the `Target`.', readOnly: true }),
        uid: z
          .string()
          .exactOptional()
          .openapi({
            description: 'Output only. Unique identifier of the `Target`.',
            readOnly: true,
          }),
        updateTime: z
          .string()
          .exactOptional()
          .openapi({
            description: 'Output only. Most recent time at which the `Target` was updated.',
            readOnly: true,
          }),
      })
      .openapi({
        description:
          'A `Target` resource in the Google Cloud Deploy API. A `Target` defines a location to which a Skaffold configuration can be deployed.',
        required: [],
      }),
  )
  .openapi('Target')

const ReleaseSchema = z
  .object({
    abandoned: z
      .boolean()
      .exactOptional()
      .openapi({
        description: 'Output only. Indicates whether this is an abandoned release.',
        readOnly: true,
      }),
    annotations: z
      .record(z.string(), z.string())
      .exactOptional()
      .openapi({
        description:
          'User annotations. These attributes can only be set and used by the user, and not by Google Cloud Deploy. See https://google.aip.dev/128#annotations for more details such as format and size limitations.',
      }),
    buildArtifacts: z
      .array(BuildArtifactSchema)
      .exactOptional()
      .openapi({ description: 'List of artifacts to pass through to Skaffold command.' }),
    condition: ReleaseConditionSchema.exactOptional().openapi({
      description: 'Output only. Information around the state of the Release.',
      readOnly: true,
    }),
    createTime: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Output only. Time at which the `Release` was created.',
        readOnly: true,
      }),
    deliveryPipelineSnapshot: DeliveryPipelineSchema.exactOptional().openapi({
      description: 'Output only. Snapshot of the parent pipeline taken at release creation time.',
      readOnly: true,
    }),
    description: z
      .string()
      .exactOptional()
      .openapi({ description: 'Description of the `Release`. Max length is 255 characters.' }),
    etag: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'This checksum is computed by the server based on the value of other fields, and may be sent on update and delete requests to ensure the client has an up-to-date value before proceeding.',
      }),
    labels: z
      .record(z.string(), z.string())
      .exactOptional()
      .openapi({
        description:
          'Labels are attributes that can be set and used by both the user and by Google Cloud Deploy. Labels must meet the following constraints: * Keys and values can contain only lowercase letters, numeric characters, underscores, and dashes. * All characters must use UTF-8 encoding, and international characters are allowed. * Keys must start with a lowercase letter or international character. * Each resource is limited to a maximum of 64 labels. Both keys and values are additionally constrained to be <= 128 bytes.',
      }),
    name: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Optional. Name of the `Release`. Format is projects/{project}/ locations/{location}/deliveryPipelines/{deliveryPipeline}/ releases/a-z{0,62}.',
      }),
    renderEndTime: z
      .string()
      .exactOptional()
      .openapi({ description: 'Output only. Time at which the render completed.', readOnly: true }),
    renderStartTime: z
      .string()
      .exactOptional()
      .openapi({ description: 'Output only. Time at which the render began.', readOnly: true }),
    renderState: z
      .enum(['RENDER_STATE_UNSPECIFIED', 'SUCCEEDED', 'FAILED', 'IN_PROGRESS'])
      .exactOptional()
      .openapi({
        description: 'Output only. Current state of the render operation.',
        readOnly: true,
      }),
    skaffoldConfigPath: z
      .string()
      .exactOptional()
      .openapi({ description: 'Filepath of the Skaffold config inside of the config URI.' }),
    skaffoldConfigUri: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Cloud Storage URI of tar.gz archive containing Skaffold configuration.',
      }),
    skaffoldVersion: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The Skaffold version to use when operating on this release, such as "1.20.0". Not all versions are valid; Google Cloud Deploy supports a specific set of versions. If unset, the most recent supported Skaffold version will be used.',
      }),
    targetArtifacts: z
      .record(z.string(), TargetArtifactSchema)
      .exactOptional()
      .openapi({
        description:
          'Output only. Map from target ID to the target artifacts created during the render operation.',
        readOnly: true,
      }),
    targetRenders: z
      .record(z.string(), TargetRenderSchema)
      .exactOptional()
      .openapi({
        description:
          'Output only. Map from target ID to details of the render operation for that target.',
        readOnly: true,
      }),
    targetSnapshots: z
      .array(TargetSchema)
      .exactOptional()
      .openapi({
        description: 'Output only. Snapshot of the targets taken at release creation time.',
        readOnly: true,
      }),
    uid: z
      .string()
      .exactOptional()
      .openapi({ description: 'Output only. Unique identifier of the `Release`.', readOnly: true }),
  })
  .openapi({
    description:
      'A `Release` resource in the Google Cloud Deploy API. A `Release` defines a specific Skaffold configuration instance that can be deployed.',
    required: [],
  })
  .openapi('Release')

const ListReleasesResponseSchema = z
  .object({
    nextPageToken: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'A token, which can be sent as `page_token` to retrieve the next page. If this field is omitted, there are no subsequent pages.',
      }),
    releases: z
      .array(ReleaseSchema)
      .exactOptional()
      .openapi({ description: 'The `Release` objects.' }),
    unreachable: z
      .array(z.string())
      .exactOptional()
      .openapi({ description: 'Locations that could not be reached.' }),
  })
  .openapi({ description: 'The response object from `ListReleases`.', required: [] })
  .openapi('ListReleasesResponse')

const MetadataSchema: z.ZodType<MetadataType> = z
  .lazy(() =>
    z
      .object({
        cloudRun: CloudRunMetadataSchema.exactOptional().openapi({
          description:
            'Output only. The name of the Cloud Run Service that is associated with a `Rollout`.',
          readOnly: true,
        }),
      })
      .openapi({
        description: 'Metadata includes information associated with a `Rollout`.',
        required: [],
      }),
  )
  .openapi('Metadata')

const PhaseSchema = z
  .object({
    childRolloutJobs: ChildRolloutJobsSchema.exactOptional().openapi({
      description: 'Output only. ChildRollout job composition.',
      readOnly: true,
    }),
    deploymentJobs: DeploymentJobsSchema.exactOptional().openapi({
      description: 'Output only. Deployment job composition.',
      readOnly: true,
    }),
    id: z
      .string()
      .exactOptional()
      .openapi({ description: 'Output only. The ID of the Phase.', readOnly: true }),
    skipMessage: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Output only. Additional information on why the Phase was skipped, if available.',
        readOnly: true,
      }),
    state: z
      .enum([
        'STATE_UNSPECIFIED',
        'PENDING',
        'IN_PROGRESS',
        'SUCCEEDED',
        'FAILED',
        'ABORTED',
        'SKIPPED',
      ])
      .exactOptional()
      .openapi({ description: 'Output only. Current state of the Phase.', readOnly: true }),
  })
  .openapi({
    description:
      'Phase represents a collection of jobs that are logically grouped together for a `Rollout`.',
    required: [],
  })
  .openapi('Phase')

const RolloutSchema = z
  .object({
    annotations: z
      .record(z.string(), z.string())
      .exactOptional()
      .openapi({
        description:
          'User annotations. These attributes can only be set and used by the user, and not by Google Cloud Deploy. See https://google.aip.dev/128#annotations for more details such as format and size limitations.',
      }),
    approvalState: z
      .enum([
        'APPROVAL_STATE_UNSPECIFIED',
        'NEEDS_APPROVAL',
        'DOES_NOT_NEED_APPROVAL',
        'APPROVED',
        'REJECTED',
      ])
      .exactOptional()
      .openapi({ description: 'Output only. Approval state of the `Rollout`.', readOnly: true }),
    approveTime: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Output only. Time at which the `Rollout` was approved.',
        readOnly: true,
      }),
    controllerRollout: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Output only. Name of the `ControllerRollout`. Format is projects/{project}/ locations/{location}/deliveryPipelines/{deliveryPipeline}/ releases/{release}/rollouts/a-z{0,62}.',
        readOnly: true,
      }),
    createTime: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Output only. Time at which the `Rollout` was created.',
        readOnly: true,
      }),
    deployEndTime: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Output only. Time at which the `Rollout` finished deploying.',
        readOnly: true,
      }),
    deployFailureCause: z
      .enum([
        'FAILURE_CAUSE_UNSPECIFIED',
        'CLOUD_BUILD_UNAVAILABLE',
        'EXECUTION_FAILED',
        'DEADLINE_EXCEEDED',
        'RELEASE_FAILED',
        'RELEASE_ABANDONED',
        'VERIFICATION_CONFIG_NOT_FOUND',
        'CLOUD_BUILD_REQUEST_FAILED',
      ])
      .exactOptional()
      .openapi({
        description:
          'Output only. The reason this rollout failed. This will always be unspecified while the rollout is in progress.',
        readOnly: true,
      }),
    deployStartTime: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Output only. Time at which the `Rollout` started deploying.',
        readOnly: true,
      }),
    deployingBuild: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Output only. The resource name of the Cloud Build `Build` object that is used to deploy the Rollout. Format is `projects/{project}/locations/{location}/builds/{build}`.',
        readOnly: true,
      }),
    description: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Description of the `Rollout` for user purposes. Max length is 255 characters.',
      }),
    enqueueTime: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Output only. Time at which the `Rollout` was enqueued.',
        readOnly: true,
      }),
    etag: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'This checksum is computed by the server based on the value of other fields, and may be sent on update and delete requests to ensure the client has an up-to-date value before proceeding.',
      }),
    failureReason: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Output only. Additional information about the rollout failure, if available.',
        readOnly: true,
      }),
    labels: z
      .record(z.string(), z.string())
      .exactOptional()
      .openapi({
        description:
          'Labels are attributes that can be set and used by both the user and by Google Cloud Deploy. Labels must meet the following constraints: * Keys and values can contain only lowercase letters, numeric characters, underscores, and dashes. * All characters must use UTF-8 encoding, and international characters are allowed. * Keys must start with a lowercase letter or international character. * Each resource is limited to a maximum of 64 labels. Both keys and values are additionally constrained to be <= 128 bytes.',
      }),
    metadata: MetadataSchema.exactOptional().openapi({
      description: 'Output only. Metadata contains information about the rollout.',
      readOnly: true,
    }),
    name: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Optional. Name of the `Rollout`. Format is projects/{project}/ locations/{location}/deliveryPipelines/{deliveryPipeline}/ releases/{release}/rollouts/a-z{0,62}.',
      }),
    phases: z
      .array(PhaseSchema)
      .exactOptional()
      .openapi({
        description: 'Output only. The phases that represent the workflows of this `Rollout`.',
        readOnly: true,
      }),
    state: z
      .enum([
        'STATE_UNSPECIFIED',
        'SUCCEEDED',
        'FAILED',
        'IN_PROGRESS',
        'PENDING_APPROVAL',
        'APPROVAL_REJECTED',
        'PENDING',
        'PENDING_RELEASE',
        'CANCELLING',
        'CANCELLED',
        'HALTED',
      ])
      .exactOptional()
      .openapi({ description: 'Output only. Current state of the `Rollout`.', readOnly: true }),
    targetId: z
      .string()
      .exactOptional()
      .openapi({ description: 'Required. The ID of Target to which this `Rollout` is deploying.' }),
    uid: z
      .string()
      .exactOptional()
      .openapi({ description: 'Output only. Unique identifier of the `Rollout`.', readOnly: true }),
  })
  .openapi({
    description:
      'A `Rollout` resource in the Google Cloud Deploy API. A `Rollout` contains information around a specific deployment to a `Target`.',
    required: [],
  })
  .openapi('Rollout')

const ListRolloutsResponseSchema = z
  .object({
    nextPageToken: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'A token, which can be sent as `page_token` to retrieve the next page. If this field is omitted, there are no subsequent pages.',
      }),
    rollouts: z
      .array(RolloutSchema)
      .exactOptional()
      .openapi({ description: 'The `Rollout` objects.' }),
    unreachable: z
      .array(z.string())
      .exactOptional()
      .openapi({ description: 'Locations that could not be reached.' }),
  })
  .openapi({
    description: 'ListRolloutsResponse is the response object reutrned by `ListRollouts`.',
    required: [],
  })
  .openapi('ListRolloutsResponse')

const ListTargetsResponseSchema = z
  .object({
    nextPageToken: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'A token, which can be sent as `page_token` to retrieve the next page. If this field is omitted, there are no subsequent pages.',
      }),
    targets: z
      .array(TargetSchema)
      .exactOptional()
      .openapi({ description: 'The `Target` objects.' }),
    unreachable: z
      .array(z.string())
      .exactOptional()
      .openapi({ description: 'Locations that could not be reached.' }),
  })
  .openapi({ description: 'The response object from `ListTargets`.', required: [] })
  .openapi('ListTargetsResponse')

const OperationMetadataSchema = z
  .object({
    apiVersion: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Output only. API version used to start the operation.',
        readOnly: true,
      }),
    createTime: z
      .string()
      .exactOptional()
      .openapi({ description: 'Output only. The time the operation was created.', readOnly: true }),
    endTime: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Output only. The time the operation finished running.',
        readOnly: true,
      }),
    requestedCancellation: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Output only. Identifies whether the user has requested cancellation of the operation. Operations that have successfully been cancelled have Operation.error value with a google.rpc.Status.code of 1, corresponding to `Code.CANCELLED`.',
        readOnly: true,
      }),
    statusMessage: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Output only. Human-readable status of the operation, if any.',
        readOnly: true,
      }),
    target: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Output only. Server-defined resource path for the target of the operation.',
        readOnly: true,
      }),
    verb: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Output only. Name of the verb executed by the operation.',
        readOnly: true,
      }),
  })
  .openapi({ description: 'Represents the metadata of the long-running operation.', required: [] })
  .openapi('OperationMetadata')

const PolicySchema = z
  .object({
    auditConfigs: z
      .array(AuditConfigSchema)
      .exactOptional()
      .openapi({ description: 'Specifies cloud audit logging configuration for this policy.' }),
    bindings: z
      .array(BindingSchema)
      .exactOptional()
      .openapi({
        description:
          'Associates a list of `members`, or principals, with a `role`. Optionally, may specify a `condition` that determines how and when the `bindings` are applied. Each of the `bindings` must contain at least one principal. The `bindings` in a `Policy` can refer to up to 1,500 principals; up to 250 of these principals can be Google groups. Each occurrence of a principal counts towards these limits. For example, if the `bindings` grant 50 different roles to `user:alice@example.com`, and not to any other principal, then you can add another 1,450 principals to the `bindings` in the `Policy`.',
      }),
    etag: z
      .string()
      .exactOptional()
      .openapi({
        description:
          '`etag` is used for optimistic concurrency control as a way to help prevent simultaneous updates of a policy from overwriting each other. It is strongly suggested that systems make use of the `etag` in the read-modify-write cycle to perform policy updates in order to avoid race conditions: An `etag` is returned in the response to `getIamPolicy`, and systems are expected to put that etag in the request to `setIamPolicy` to ensure that their change will be applied to the same version of the policy. **Important:** If you use IAM Conditions, you must include the `etag` field whenever you call `setIamPolicy`. If you omit this field, then IAM allows you to overwrite a version `3` policy with a version `1` policy, and all of the conditions in the version `3` policy are lost.',
      }),
    version: z
      .int32()
      .exactOptional()
      .openapi({
        description:
          'Specifies the format of the policy. Valid values are `0`, `1`, and `3`. Requests that specify an invalid value are rejected. Any operation that affects conditional role bindings must specify version `3`. This requirement applies to the following operations: * Getting a policy that includes a conditional role binding * Adding a conditional role binding to a policy * Changing a conditional role binding in a policy * Removing any role binding, with or without a condition, from a policy that includes conditions **Important:** If you use IAM Conditions, you must include the `etag` field whenever you call `setIamPolicy`. If you omit this field, then IAM allows you to overwrite a version `3` policy with a version `1` policy, and all of the conditions in the version `3` policy are lost. If a policy does not include any conditions, operations on that policy may specify any valid version or leave the field unset. To learn which resources support conditions in their IAM policies, see the [IAM documentation](https://cloud.google.com/iam/help/conditions/resource-policies).',
      }),
  })
  .openapi({
    description:
      'An Identity and Access Management (IAM) policy, which specifies access controls for Google Cloud resources. A `Policy` is a collection of `bindings`. A `binding` binds one or more `members`, or principals, to a single `role`. Principals can be user accounts, service accounts, Google groups, and domains (such as G Suite). A `role` is a named list of permissions; each `role` can be an IAM predefined role or a user-created custom role. For some types of Google Cloud resources, a `binding` can also specify a `condition`, which is a logical expression that allows access to a resource only if the expression evaluates to `true`. A condition can add constraints based on attributes of the request, the resource, or both. To learn which resources support conditions in their IAM policies, see the [IAM documentation](https://cloud.google.com/iam/help/conditions/resource-policies). **JSON example:** { "bindings": [ { "role": "roles/resourcemanager.organizationAdmin", "members": [ "user:mike@example.com", "group:admins@example.com", "domain:google.com", "serviceAccount:my-project-id@appspot.gserviceaccount.com" ] }, { "role": "roles/resourcemanager.organizationViewer", "members": [ "user:eve@example.com" ], "condition": { "title": "expirable access", "description": "Does not grant access after Sep 2020", "expression": "request.time < timestamp(\'2020-10-01T00:00:00.000Z\')", } } ], "etag": "BwWWja0YfJA=", "version": 3 } **YAML example:** bindings: - members: - user:mike@example.com - group:admins@example.com - domain:google.com - serviceAccount:my-project-id@appspot.gserviceaccount.com role: roles/resourcemanager.organizationAdmin - members: - user:eve@example.com role: roles/resourcemanager.organizationViewer condition: title: expirable access description: Does not grant access after Sep 2020 expression: request.time < timestamp(\'2020-10-01T00:00:00.000Z\') etag: BwWWja0YfJA= version: 3 For a description of IAM and its features, see the [IAM documentation](https://cloud.google.com/iam/docs/).',
    required: [],
  })
  .openapi('Policy')

const ReleaseNotificationEventSchema = z
  .object({
    message: z
      .string()
      .exactOptional()
      .openapi({ description: 'Debug message for when a notification fails to send.' }),
    release: z.string().exactOptional().openapi({ description: 'The name of the `Release`.' }),
    type: z
      .enum(['TYPE_UNSPECIFIED', 'TYPE_PUBSUB_NOTIFICATION_FAILURE', 'TYPE_RENDER_STATUES_CHANGE'])
      .exactOptional()
      .openapi({ description: 'Type of this notification, e.g. for a Pub/Sub failure.' }),
  })
  .openapi({
    description:
      'Payload proto for "clouddeploy.googleapis.com/release_notification" Platform Log event that describes the failure to send release status change Pub/Sub notification.',
    required: [],
  })
  .openapi('ReleaseNotificationEvent')

const ReleaseRenderEventSchema = z
  .object({
    message: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Debug message for when a render transition occurs. Provides further details as rendering progresses through render states.',
      }),
    release: z.string().exactOptional().openapi({ description: 'The name of the `Release`.' }),
  })
  .openapi({
    description:
      'Payload proto for "clouddeploy.googleapis.com/release_render" Platform Log event that describes the render status change.',
    required: [],
  })
  .openapi('ReleaseRenderEvent')

const RetryJobRequestSchema = z
  .object({
    jobId: z
      .string()
      .exactOptional()
      .openapi({ description: 'Required. The job ID for the Job to retry.' }),
    phaseId: z
      .string()
      .exactOptional()
      .openapi({ description: 'Required. The phase ID the Job to retry belongs to.' }),
  })
  .openapi({
    description: 'RetryJobRequest is the request object used by `RetryJob`.',
    required: [],
  })
  .openapi('RetryJobRequest')

const RetryJobResponseSchema = z
  .object({})
  .openapi({ description: "The response object from 'RetryJob'." })
  .openapi('RetryJobResponse')

const RolloutNotificationEventSchema = z
  .object({
    message: z
      .string()
      .exactOptional()
      .openapi({ description: 'Debug message for when a notification fails to send.' }),
    pipelineUid: z
      .string()
      .exactOptional()
      .openapi({ description: 'Unique identifier of the `DeliveryPipeline`.' }),
    releaseUid: z
      .string()
      .exactOptional()
      .openapi({ description: 'Unique identifier of the `Release`.' }),
    rollout: z.string().exactOptional().openapi({ description: 'The name of the `Rollout`.' }),
    targetId: z
      .string()
      .exactOptional()
      .openapi({ description: 'ID of the `Target` that the rollout is deployed to.' }),
    type: z
      .enum(['TYPE_UNSPECIFIED', 'TYPE_PUBSUB_NOTIFICATION_FAILURE', 'TYPE_RENDER_STATUES_CHANGE'])
      .exactOptional()
      .openapi({ description: 'Type of this notification, e.g. for a Pub/Sub failure.' }),
  })
  .openapi({
    description:
      'Payload proto for "clouddeploy.googleapis.com/rollout_notification" Platform Log event that describes the failure to send rollout status change Pub/Sub notification.',
    required: [],
  })
  .openapi('RolloutNotificationEvent')

const SetIamPolicyRequestSchema = z
  .object({
    policy: PolicySchema.exactOptional().openapi({
      description:
        'REQUIRED: The complete policy to be applied to the `resource`. The size of the policy is limited to a few 10s of KB. An empty policy is a valid policy but certain Google Cloud services (such as Projects) might reject them.',
    }),
    updateMask: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'OPTIONAL: A FieldMask specifying which fields of the policy to modify. Only the fields in the mask will be modified. If no mask is provided, the following default mask is used: `paths: "bindings, etag"`',
      }),
  })
  .openapi({ description: 'Request message for `SetIamPolicy` method.', required: [] })
  .openapi('SetIamPolicyRequest')

const TargetNotificationEventSchema = z
  .object({
    message: z
      .string()
      .exactOptional()
      .openapi({ description: 'Debug message for when a notification fails to send.' }),
    target: z.string().exactOptional().openapi({ description: 'The name of the `Target`.' }),
    type: z
      .enum(['TYPE_UNSPECIFIED', 'TYPE_PUBSUB_NOTIFICATION_FAILURE', 'TYPE_RENDER_STATUES_CHANGE'])
      .exactOptional()
      .openapi({ description: 'Type of this notification, e.g. for a Pub/Sub failure.' }),
  })
  .openapi({
    description:
      'Payload proto for "clouddeploy.googleapis.com/target_notification" Platform Log event that describes the failure to send target status change Pub/Sub notification.',
    required: [],
  })
  .openapi('TargetNotificationEvent')

const TerminateJobRunRequestSchema = z
  .object({})
  .openapi({ description: 'The request object used by `TerminateJobRun`.' })
  .openapi('TerminateJobRunRequest')

const TerminateJobRunResponseSchema = z
  .object({})
  .openapi({ description: 'The response object from `TerminateJobRun`.' })
  .openapi('TerminateJobRunResponse')

const TestIamPermissionsRequestSchema = z
  .object({
    permissions: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description:
          'The set of permissions to check for the `resource`. Permissions with wildcards (such as `*` or `storage.*`) are not allowed. For more information see [IAM Overview](https://cloud.google.com/iam/docs/overview#permissions).',
      }),
  })
  .openapi({ description: 'Request message for `TestIamPermissions` method.', required: [] })
  .openapi('TestIamPermissionsRequest')

const TestIamPermissionsResponseSchema = z
  .object({
    permissions: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description: 'A subset of `TestPermissionsRequest.permissions` that the caller is allowed.',
      }),
  })
  .openapi({ description: 'Response message for `TestIamPermissions` method.', required: [] })
  .openapi('TestIamPermissionsResponse')

const XgafvParamsSchema = z
  .enum(['1', '2'])
  .exactOptional()
  .openapi({
    param: {
      description: 'V1 error format.',
      in: 'query',
      name: '$.xgafv',
      schema: { enum: ['1', '2'], type: 'string' },
      required: false,
    },
  })

const AccessTokenParamsSchema = z
  .string()
  .exactOptional()
  .openapi({
    param: {
      description: 'OAuth access token.',
      in: 'query',
      name: 'access_token',
      schema: { type: 'string' },
      required: false,
    },
  })

const AltParamsSchema = z
  .enum(['json', 'media', 'proto'])
  .exactOptional()
  .openapi({
    param: {
      description: 'Data format for response.',
      in: 'query',
      name: 'alt',
      schema: { enum: ['json', 'media', 'proto'], type: 'string' },
      required: false,
    },
  })

const CallbackParamsSchema = z
  .string()
  .exactOptional()
  .openapi({
    param: {
      description: 'JSONP',
      in: 'query',
      name: 'callback',
      schema: { type: 'string' },
      required: false,
    },
  })

const FieldsParamsSchema = z
  .string()
  .exactOptional()
  .openapi({
    param: {
      description: 'Selector specifying which fields to include in a partial response.',
      in: 'query',
      name: 'fields',
      schema: { type: 'string' },
      required: false,
    },
  })

const KeyParamsSchema = z
  .string()
  .exactOptional()
  .openapi({
    param: {
      description:
        'API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.',
      in: 'query',
      name: 'key',
      schema: { type: 'string' },
      required: false,
    },
  })

const OauthTokenParamsSchema = z
  .string()
  .exactOptional()
  .openapi({
    param: {
      description: 'OAuth 2.0 token for the current user.',
      in: 'query',
      name: 'oauth_token',
      schema: { type: 'string' },
      required: false,
    },
  })

const PrettyPrintParamsSchema = z
  .stringbool()
  .exactOptional()
  .openapi({
    param: {
      description: 'Returns response with indentations and line breaks.',
      in: 'query',
      name: 'prettyPrint',
      schema: { type: 'boolean' },
      required: false,
    },
  })

const QuotaUserParamsSchema = z
  .string()
  .exactOptional()
  .openapi({
    param: {
      description:
        'Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.',
      in: 'query',
      name: 'quotaUser',
      schema: { type: 'string' },
      required: false,
    },
  })

const UploadTypeParamsSchema = z
  .string()
  .exactOptional()
  .openapi({
    param: {
      description: 'Legacy upload protocol for media (e.g. "media", "multipart").',
      in: 'query',
      name: 'uploadType',
      schema: { type: 'string' },
      required: false,
    },
  })

const UploadProtocolParamsSchema = z
  .string()
  .exactOptional()
  .openapi({
    param: {
      description: 'Upload protocol for media (e.g. "raw", "multipart").',
      in: 'query',
      name: 'upload_protocol',
      schema: { type: 'string' },
      required: false,
    },
  })

const Oauth2SecurityScheme = {
  description: 'Oauth 2.0 implicit authentication',
  flows: {
    implicit: {
      authorizationUrl: 'https://accounts.google.com/o/oauth2/auth',
      scopes: {
        'https://www.googleapis.com/auth/cloud-platform':
          'See, edit, configure, and delete your Google Cloud data and see the email address for your Google Account.',
      },
    },
  },
  type: 'oauth2',
}

const Oauth2cSecurityScheme = {
  description: 'Oauth 2.0 authorizationCode authentication',
  flows: {
    authorizationCode: {
      authorizationUrl: 'https://accounts.google.com/o/oauth2/auth',
      scopes: {
        'https://www.googleapis.com/auth/cloud-platform':
          'See, edit, configure, and delete your Google Cloud data and see the email address for your Google Account.',
      },
      tokenUrl: 'https://accounts.google.com/o/oauth2/token',
    },
  },
  type: 'oauth2',
}

export const getV1NameRoute = createRoute({
  method: 'get',
  path: '/v1/{name}',
  tags: ['projects'],
  description: 'Gets details of a single Target.',
  operationId: 'clouddeploy.projects.locations.targets.get',
  request: {
    query: z.object({
      '$.xgafv': XgafvParamsSchema,
      access_token: AccessTokenParamsSchema,
      alt: AltParamsSchema,
      callback: CallbackParamsSchema,
      fields: FieldsParamsSchema,
      key: KeyParamsSchema,
      oauth_token: OauthTokenParamsSchema,
      prettyPrint: PrettyPrintParamsSchema,
      quotaUser: QuotaUserParamsSchema,
      upload_protocol: UploadProtocolParamsSchema,
      uploadType: UploadTypeParamsSchema,
    }),
    params: z.object({
      name: z
        .string()
        .openapi({
          param: {
            description:
              'Required. Name of the `Target`. Format must be projects/{project_id}/locations/{location_name}/targets/{target_name}.',
            in: 'path',
            name: 'name',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: TargetSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
  ],
})

export const deleteV1NameRoute = createRoute({
  method: 'delete',
  path: '/v1/{name}',
  tags: ['projects'],
  description: 'Deletes a single Target.',
  operationId: 'clouddeploy.projects.locations.targets.delete',
  request: {
    query: z.object({
      '$.xgafv': XgafvParamsSchema,
      access_token: AccessTokenParamsSchema,
      alt: AltParamsSchema,
      callback: CallbackParamsSchema,
      fields: FieldsParamsSchema,
      key: KeyParamsSchema,
      oauth_token: OauthTokenParamsSchema,
      prettyPrint: PrettyPrintParamsSchema,
      quotaUser: QuotaUserParamsSchema,
      upload_protocol: UploadProtocolParamsSchema,
      uploadType: UploadTypeParamsSchema,
      allowMissing: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Optional. If set to true, then deleting an already deleted or non-existing DeliveryPipeline will succeed.',
            in: 'query',
            name: 'allowMissing',
            schema: { type: 'boolean' },
            required: false,
          },
        }),
      etag: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Optional. This checksum is computed by the server based on the value of other fields, and may be sent on update and delete requests to ensure the client has an up-to-date value before proceeding.',
            in: 'query',
            name: 'etag',
            schema: { type: 'string' },
            required: false,
          },
        }),
      requestId: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Optional. A request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes after the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000).',
            in: 'query',
            name: 'requestId',
            schema: { type: 'string' },
            required: false,
          },
        }),
      validateOnly: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Optional. If set, validate the request and preview the review, but do not actually post it.',
            in: 'query',
            name: 'validateOnly',
            schema: { type: 'boolean' },
            required: false,
          },
        }),
    }),
    params: z.object({
      name: z
        .string()
        .openapi({
          param: {
            description:
              'Required. The name of the `Target` to delete. Format should be projects/{project_id}/locations/{location_name}/targets/{target_name}.',
            in: 'path',
            name: 'name',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: OperationSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
  ],
})

export const patchV1NameRoute = createRoute({
  method: 'patch',
  path: '/v1/{name}',
  tags: ['projects'],
  description: 'Updates the parameters of a single Target.',
  operationId: 'clouddeploy.projects.locations.targets.patch',
  request: {
    query: z.object({
      '$.xgafv': XgafvParamsSchema,
      access_token: AccessTokenParamsSchema,
      alt: AltParamsSchema,
      callback: CallbackParamsSchema,
      fields: FieldsParamsSchema,
      key: KeyParamsSchema,
      oauth_token: OauthTokenParamsSchema,
      prettyPrint: PrettyPrintParamsSchema,
      quotaUser: QuotaUserParamsSchema,
      upload_protocol: UploadProtocolParamsSchema,
      uploadType: UploadTypeParamsSchema,
      allowMissing: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Optional. If set to true, updating a `Target` that does not exist will result in the creation of a new `Target`.',
            in: 'query',
            name: 'allowMissing',
            schema: { type: 'boolean' },
            required: false,
          },
        }),
      requestId: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Optional. A request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes since the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000).',
            in: 'query',
            name: 'requestId',
            schema: { type: 'string' },
            required: false,
          },
        }),
      updateMask: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Required. Field mask is used to specify the fields to be overwritten in the Target resource by the update. The fields specified in the update_mask are relative to the resource, not the full request. A field will be overwritten if it is in the mask. If the user does not provide a mask then all fields will be overwritten.',
            in: 'query',
            name: 'updateMask',
            schema: { type: 'string' },
            required: false,
          },
        }),
      validateOnly: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Optional. If set to true, the request is validated and the user is provided with an expected result, but no actual change is made.',
            in: 'query',
            name: 'validateOnly',
            schema: { type: 'boolean' },
            required: false,
          },
        }),
    }),
    params: z.object({
      name: z
        .string()
        .openapi({
          param: {
            description:
              'Optional. Name of the `Target`. Format is projects/{project}/locations/{location}/targets/a-z{0,62}.',
            in: 'path',
            name: 'name',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: TargetSchema } } },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: OperationSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
  ],
})

export const getV1NameLocationsRoute = createRoute({
  method: 'get',
  path: '/v1/{name}/locations',
  tags: ['projects'],
  description: 'Lists information about the supported locations for this service.',
  operationId: 'clouddeploy.projects.locations.list',
  request: {
    query: z.object({
      '$.xgafv': XgafvParamsSchema,
      access_token: AccessTokenParamsSchema,
      alt: AltParamsSchema,
      callback: CallbackParamsSchema,
      fields: FieldsParamsSchema,
      key: KeyParamsSchema,
      oauth_token: OauthTokenParamsSchema,
      prettyPrint: PrettyPrintParamsSchema,
      quotaUser: QuotaUserParamsSchema,
      upload_protocol: UploadProtocolParamsSchema,
      uploadType: UploadTypeParamsSchema,
      filter: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'A filter to narrow down results to a preferred subset. The filtering language accepts strings like `"displayName=tokyo"`, and is documented in more detail in [AIP-160](https://google.aip.dev/160).',
            in: 'query',
            name: 'filter',
            schema: { type: 'string' },
            required: false,
          },
        }),
      pageSize: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .exactOptional()
        .openapi({
          param: {
            description:
              'The maximum number of results to return. If not set, the service selects a default.',
            in: 'query',
            name: 'pageSize',
            schema: { type: 'integer' },
            required: false,
          },
        }),
      pageToken: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'A page token received from the `next_page_token` field in the response. Send that page token to receive the subsequent page.',
            in: 'query',
            name: 'pageToken',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
    params: z.object({
      name: z
        .string()
        .openapi({
          param: {
            description: 'The resource that owns the locations collection, if applicable.',
            in: 'path',
            name: 'name',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: ListLocationsResponseSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
  ],
})

export const getV1NameOperationsRoute = createRoute({
  method: 'get',
  path: '/v1/{name}/operations',
  tags: ['projects'],
  description:
    "Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`.",
  operationId: 'clouddeploy.projects.locations.operations.list',
  request: {
    query: z.object({
      '$.xgafv': XgafvParamsSchema,
      access_token: AccessTokenParamsSchema,
      alt: AltParamsSchema,
      callback: CallbackParamsSchema,
      fields: FieldsParamsSchema,
      key: KeyParamsSchema,
      oauth_token: OauthTokenParamsSchema,
      prettyPrint: PrettyPrintParamsSchema,
      quotaUser: QuotaUserParamsSchema,
      upload_protocol: UploadProtocolParamsSchema,
      uploadType: UploadTypeParamsSchema,
      filter: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'The standard list filter.',
            in: 'query',
            name: 'filter',
            schema: { type: 'string' },
            required: false,
          },
        }),
      pageSize: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'The standard list page size.',
            in: 'query',
            name: 'pageSize',
            schema: { type: 'integer' },
            required: false,
          },
        }),
      pageToken: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'The standard list page token.',
            in: 'query',
            name: 'pageToken',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
    params: z.object({
      name: z
        .string()
        .openapi({
          param: {
            description: "The name of the operation's parent resource.",
            in: 'path',
            name: 'name',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: ListOperationsResponseSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
  ],
})

export const postV1NameAbandonRoute = createRoute({
  method: 'post',
  path: '/v1/{name}:abandon',
  tags: ['projects'],
  description: 'Abandons a Release in the Delivery Pipeline.',
  operationId: 'clouddeploy.projects.locations.deliveryPipelines.releases.abandon',
  request: {
    query: z.object({
      '$.xgafv': XgafvParamsSchema,
      access_token: AccessTokenParamsSchema,
      alt: AltParamsSchema,
      callback: CallbackParamsSchema,
      fields: FieldsParamsSchema,
      key: KeyParamsSchema,
      oauth_token: OauthTokenParamsSchema,
      prettyPrint: PrettyPrintParamsSchema,
      quotaUser: QuotaUserParamsSchema,
      upload_protocol: UploadProtocolParamsSchema,
      uploadType: UploadTypeParamsSchema,
    }),
    params: z.object({
      name: z
        .string()
        .openapi({
          param: {
            description:
              'Required. Name of the Release. Format is projects/{project}/locations/{location}/deliveryPipelines/{deliveryPipeline}/ releases/{release}.',
            in: 'path',
            name: 'name',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: AbandonReleaseRequestSchema } } },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: AbandonReleaseResponseSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
  ],
})

export const postV1NameAdvanceRoute = createRoute({
  method: 'post',
  path: '/v1/{name}:advance',
  tags: ['projects'],
  description: 'Advances a Rollout in a given project and location.',
  operationId: 'clouddeploy.projects.locations.deliveryPipelines.releases.rollouts.advance',
  request: {
    query: z.object({
      '$.xgafv': XgafvParamsSchema,
      access_token: AccessTokenParamsSchema,
      alt: AltParamsSchema,
      callback: CallbackParamsSchema,
      fields: FieldsParamsSchema,
      key: KeyParamsSchema,
      oauth_token: OauthTokenParamsSchema,
      prettyPrint: PrettyPrintParamsSchema,
      quotaUser: QuotaUserParamsSchema,
      upload_protocol: UploadProtocolParamsSchema,
      uploadType: UploadTypeParamsSchema,
    }),
    params: z.object({
      name: z
        .string()
        .openapi({
          param: {
            description:
              'Required. Name of the Rollout. Format is projects/{project}/locations/{location}/deliveryPipelines/{deliveryPipeline}/ releases/{release}/rollouts/{rollout}.',
            in: 'path',
            name: 'name',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: AdvanceRolloutRequestSchema } } },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: AdvanceRolloutResponseSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
  ],
})

export const postV1NameApproveRoute = createRoute({
  method: 'post',
  path: '/v1/{name}:approve',
  tags: ['projects'],
  description: 'Approves a Rollout.',
  operationId: 'clouddeploy.projects.locations.deliveryPipelines.releases.rollouts.approve',
  request: {
    query: z.object({
      '$.xgafv': XgafvParamsSchema,
      access_token: AccessTokenParamsSchema,
      alt: AltParamsSchema,
      callback: CallbackParamsSchema,
      fields: FieldsParamsSchema,
      key: KeyParamsSchema,
      oauth_token: OauthTokenParamsSchema,
      prettyPrint: PrettyPrintParamsSchema,
      quotaUser: QuotaUserParamsSchema,
      upload_protocol: UploadProtocolParamsSchema,
      uploadType: UploadTypeParamsSchema,
    }),
    params: z.object({
      name: z
        .string()
        .openapi({
          param: {
            description:
              'Required. Name of the Rollout. Format is projects/{project}/locations/{location}/deliveryPipelines/{deliveryPipeline}/ releases/{release}/rollouts/{rollout}.',
            in: 'path',
            name: 'name',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: ApproveRolloutRequestSchema } } },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: ApproveRolloutResponseSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
  ],
})

export const postV1NameCancelRoute = createRoute({
  method: 'post',
  path: '/v1/{name}:cancel',
  tags: ['projects'],
  description:
    "Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of 1, corresponding to `Code.CANCELLED`.",
  operationId: 'clouddeploy.projects.locations.operations.cancel',
  request: {
    query: z.object({
      '$.xgafv': XgafvParamsSchema,
      access_token: AccessTokenParamsSchema,
      alt: AltParamsSchema,
      callback: CallbackParamsSchema,
      fields: FieldsParamsSchema,
      key: KeyParamsSchema,
      oauth_token: OauthTokenParamsSchema,
      prettyPrint: PrettyPrintParamsSchema,
      quotaUser: QuotaUserParamsSchema,
      upload_protocol: UploadProtocolParamsSchema,
      uploadType: UploadTypeParamsSchema,
    }),
    params: z.object({
      name: z
        .string()
        .openapi({
          param: {
            description: 'The name of the operation resource to be cancelled.',
            in: 'path',
            name: 'name',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: CancelOperationRequestSchema } } },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: EmptySchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
  ],
})

export const postV1NameTerminateRoute = createRoute({
  method: 'post',
  path: '/v1/{name}:terminate',
  tags: ['projects'],
  description: 'Terminates a Job Run in a given project and location.',
  operationId:
    'clouddeploy.projects.locations.deliveryPipelines.releases.rollouts.jobRuns.terminate',
  request: {
    query: z.object({
      '$.xgafv': XgafvParamsSchema,
      access_token: AccessTokenParamsSchema,
      alt: AltParamsSchema,
      callback: CallbackParamsSchema,
      fields: FieldsParamsSchema,
      key: KeyParamsSchema,
      oauth_token: OauthTokenParamsSchema,
      prettyPrint: PrettyPrintParamsSchema,
      quotaUser: QuotaUserParamsSchema,
      upload_protocol: UploadProtocolParamsSchema,
      uploadType: UploadTypeParamsSchema,
    }),
    params: z.object({
      name: z
        .string()
        .openapi({
          param: {
            description:
              'Required. Name of the `JobRun`. Format must be projects/{project}/locations/{location}/deliveryPipelines/{deliveryPipeline}/ releases/{release}/rollouts/{rollout}/jobRuns/{jobRun}.',
            in: 'path',
            name: 'name',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: TerminateJobRunRequestSchema } } },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: TerminateJobRunResponseSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
  ],
})

export const getV1ParentDeliveryPipelinesRoute = createRoute({
  method: 'get',
  path: '/v1/{parent}/deliveryPipelines',
  tags: ['projects'],
  description: 'Lists DeliveryPipelines in a given project and location.',
  operationId: 'clouddeploy.projects.locations.deliveryPipelines.list',
  request: {
    query: z.object({
      '$.xgafv': XgafvParamsSchema,
      access_token: AccessTokenParamsSchema,
      alt: AltParamsSchema,
      callback: CallbackParamsSchema,
      fields: FieldsParamsSchema,
      key: KeyParamsSchema,
      oauth_token: OauthTokenParamsSchema,
      prettyPrint: PrettyPrintParamsSchema,
      quotaUser: QuotaUserParamsSchema,
      upload_protocol: UploadProtocolParamsSchema,
      uploadType: UploadTypeParamsSchema,
      filter: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Filter pipelines to be returned. See https://google.aip.dev/160 for more details.',
            in: 'query',
            name: 'filter',
            schema: { type: 'string' },
            required: false,
          },
        }),
      orderBy: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Field to sort by. See https://google.aip.dev/132#ordering for more details.',
            in: 'query',
            name: 'orderBy',
            schema: { type: 'string' },
            required: false,
          },
        }),
      pageSize: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .exactOptional()
        .openapi({
          param: {
            description:
              'The maximum number of pipelines to return. The service may return fewer than this value. If unspecified, at most 50 pipelines will be returned. The maximum value is 1000; values above 1000 will be set to 1000.',
            in: 'query',
            name: 'pageSize',
            schema: { type: 'integer' },
            required: false,
          },
        }),
      pageToken: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'A page token, received from a previous `ListDeliveryPipelines` call. Provide this to retrieve the subsequent page. When paginating, all other provided parameters match the call that provided the page token.',
            in: 'query',
            name: 'pageToken',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
    params: z.object({
      parent: z
        .string()
        .openapi({
          param: {
            description:
              'Required. The parent, which owns this collection of pipelines. Format must be projects/{project_id}/locations/{location_name}.',
            in: 'path',
            name: 'parent',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: ListDeliveryPipelinesResponseSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
  ],
})

export const postV1ParentDeliveryPipelinesRoute = createRoute({
  method: 'post',
  path: '/v1/{parent}/deliveryPipelines',
  tags: ['projects'],
  description: 'Creates a new DeliveryPipeline in a given project and location.',
  operationId: 'clouddeploy.projects.locations.deliveryPipelines.create',
  request: {
    query: z.object({
      '$.xgafv': XgafvParamsSchema,
      access_token: AccessTokenParamsSchema,
      alt: AltParamsSchema,
      callback: CallbackParamsSchema,
      fields: FieldsParamsSchema,
      key: KeyParamsSchema,
      oauth_token: OauthTokenParamsSchema,
      prettyPrint: PrettyPrintParamsSchema,
      quotaUser: QuotaUserParamsSchema,
      upload_protocol: UploadProtocolParamsSchema,
      uploadType: UploadTypeParamsSchema,
      deliveryPipelineId: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Required. ID of the `DeliveryPipeline`.',
            in: 'query',
            name: 'deliveryPipelineId',
            schema: { type: 'string' },
            required: false,
          },
        }),
      requestId: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Optional. A request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes since the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000).',
            in: 'query',
            name: 'requestId',
            schema: { type: 'string' },
            required: false,
          },
        }),
      validateOnly: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Optional. If set to true, the request is validated and the user is provided with an expected result, but no actual change is made.',
            in: 'query',
            name: 'validateOnly',
            schema: { type: 'boolean' },
            required: false,
          },
        }),
    }),
    params: z.object({
      parent: z
        .string()
        .openapi({
          param: {
            description:
              'Required. The parent collection in which the `DeliveryPipeline` should be created. Format should be projects/{project_id}/locations/{location_name}.',
            in: 'path',
            name: 'parent',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: DeliveryPipelineSchema } } },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: OperationSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
  ],
})

export const getV1ParentJobRunsRoute = createRoute({
  method: 'get',
  path: '/v1/{parent}/jobRuns',
  tags: ['projects'],
  description: 'Lists JobRuns in a given project and location.',
  operationId: 'clouddeploy.projects.locations.deliveryPipelines.releases.rollouts.jobRuns.list',
  request: {
    query: z.object({
      '$.xgafv': XgafvParamsSchema,
      access_token: AccessTokenParamsSchema,
      alt: AltParamsSchema,
      callback: CallbackParamsSchema,
      fields: FieldsParamsSchema,
      key: KeyParamsSchema,
      oauth_token: OauthTokenParamsSchema,
      prettyPrint: PrettyPrintParamsSchema,
      quotaUser: QuotaUserParamsSchema,
      upload_protocol: UploadProtocolParamsSchema,
      uploadType: UploadTypeParamsSchema,
      filter: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Optional. Filter results to be returned. See https://google.aip.dev/160 for more details.',
            in: 'query',
            name: 'filter',
            schema: { type: 'string' },
            required: false,
          },
        }),
      orderBy: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Optional. Field to sort by. See https://google.aip.dev/132#ordering for more details.',
            in: 'query',
            name: 'orderBy',
            schema: { type: 'string' },
            required: false,
          },
        }),
      pageSize: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .exactOptional()
        .openapi({
          param: {
            description:
              'Optional. The maximum number of `JobRun` objects to return. The service may return fewer than this value. If unspecified, at most 50 `JobRun` objects will be returned. The maximum value is 1000; values above 1000 will be set to 1000.',
            in: 'query',
            name: 'pageSize',
            schema: { type: 'integer' },
            required: false,
          },
        }),
      pageToken: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Optional. A page token, received from a previous `ListJobRuns` call. Provide this to retrieve the subsequent page. When paginating, all other provided parameters match the call that provided the page token.',
            in: 'query',
            name: 'pageToken',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
    params: z.object({
      parent: z
        .string()
        .openapi({
          param: {
            description: 'Required. The `Rollout` which owns this collection of `JobRun` objects.',
            in: 'path',
            name: 'parent',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: ListJobRunsResponseSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
  ],
})

export const getV1ParentReleasesRoute = createRoute({
  method: 'get',
  path: '/v1/{parent}/releases',
  tags: ['projects'],
  description: 'Lists Releases in a given project and location.',
  operationId: 'clouddeploy.projects.locations.deliveryPipelines.releases.list',
  request: {
    query: z.object({
      '$.xgafv': XgafvParamsSchema,
      access_token: AccessTokenParamsSchema,
      alt: AltParamsSchema,
      callback: CallbackParamsSchema,
      fields: FieldsParamsSchema,
      key: KeyParamsSchema,
      oauth_token: OauthTokenParamsSchema,
      prettyPrint: PrettyPrintParamsSchema,
      quotaUser: QuotaUserParamsSchema,
      upload_protocol: UploadProtocolParamsSchema,
      uploadType: UploadTypeParamsSchema,
      filter: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Optional. Filter releases to be returned. See https://google.aip.dev/160 for more details.',
            in: 'query',
            name: 'filter',
            schema: { type: 'string' },
            required: false,
          },
        }),
      orderBy: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Optional. Field to sort by. See https://google.aip.dev/132#ordering for more details.',
            in: 'query',
            name: 'orderBy',
            schema: { type: 'string' },
            required: false,
          },
        }),
      pageSize: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .exactOptional()
        .openapi({
          param: {
            description:
              'Optional. The maximum number of `Release` objects to return. The service may return fewer than this value. If unspecified, at most 50 `Release` objects will be returned. The maximum value is 1000; values above 1000 will be set to 1000.',
            in: 'query',
            name: 'pageSize',
            schema: { type: 'integer' },
            required: false,
          },
        }),
      pageToken: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Optional. A page token, received from a previous `ListReleases` call. Provide this to retrieve the subsequent page. When paginating, all other provided parameters match the call that provided the page token.',
            in: 'query',
            name: 'pageToken',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
    params: z.object({
      parent: z
        .string()
        .openapi({
          param: {
            description:
              'Required. The `DeliveryPipeline` which owns this collection of `Release` objects.',
            in: 'path',
            name: 'parent',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: ListReleasesResponseSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
  ],
})

export const postV1ParentReleasesRoute = createRoute({
  method: 'post',
  path: '/v1/{parent}/releases',
  tags: ['projects'],
  description: 'Creates a new Release in a given project and location.',
  operationId: 'clouddeploy.projects.locations.deliveryPipelines.releases.create',
  request: {
    query: z.object({
      '$.xgafv': XgafvParamsSchema,
      access_token: AccessTokenParamsSchema,
      alt: AltParamsSchema,
      callback: CallbackParamsSchema,
      fields: FieldsParamsSchema,
      key: KeyParamsSchema,
      oauth_token: OauthTokenParamsSchema,
      prettyPrint: PrettyPrintParamsSchema,
      quotaUser: QuotaUserParamsSchema,
      upload_protocol: UploadProtocolParamsSchema,
      uploadType: UploadTypeParamsSchema,
      releaseId: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Required. ID of the `Release`.',
            in: 'query',
            name: 'releaseId',
            schema: { type: 'string' },
            required: false,
          },
        }),
      requestId: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Optional. A request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes since the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000).',
            in: 'query',
            name: 'requestId',
            schema: { type: 'string' },
            required: false,
          },
        }),
      validateOnly: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Optional. If set to true, the request is validated and the user is provided with an expected result, but no actual change is made.',
            in: 'query',
            name: 'validateOnly',
            schema: { type: 'boolean' },
            required: false,
          },
        }),
    }),
    params: z.object({
      parent: z
        .string()
        .openapi({
          param: {
            description:
              'Required. The parent collection in which the `Release` should be created. Format should be projects/{project_id}/locations/{location_name}/deliveryPipelines/{pipeline_name}.',
            in: 'path',
            name: 'parent',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: ReleaseSchema } } },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: OperationSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
  ],
})

export const getV1ParentRolloutsRoute = createRoute({
  method: 'get',
  path: '/v1/{parent}/rollouts',
  tags: ['projects'],
  description: 'Lists Rollouts in a given project and location.',
  operationId: 'clouddeploy.projects.locations.deliveryPipelines.releases.rollouts.list',
  request: {
    query: z.object({
      '$.xgafv': XgafvParamsSchema,
      access_token: AccessTokenParamsSchema,
      alt: AltParamsSchema,
      callback: CallbackParamsSchema,
      fields: FieldsParamsSchema,
      key: KeyParamsSchema,
      oauth_token: OauthTokenParamsSchema,
      prettyPrint: PrettyPrintParamsSchema,
      quotaUser: QuotaUserParamsSchema,
      upload_protocol: UploadProtocolParamsSchema,
      uploadType: UploadTypeParamsSchema,
      filter: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Optional. Filter rollouts to be returned. See https://google.aip.dev/160 for more details.',
            in: 'query',
            name: 'filter',
            schema: { type: 'string' },
            required: false,
          },
        }),
      orderBy: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Optional. Field to sort by. See https://google.aip.dev/132#ordering for more details.',
            in: 'query',
            name: 'orderBy',
            schema: { type: 'string' },
            required: false,
          },
        }),
      pageSize: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .exactOptional()
        .openapi({
          param: {
            description:
              'Optional. The maximum number of `Rollout` objects to return. The service may return fewer than this value. If unspecified, at most 50 `Rollout` objects will be returned. The maximum value is 1000; values above 1000 will be set to 1000.',
            in: 'query',
            name: 'pageSize',
            schema: { type: 'integer' },
            required: false,
          },
        }),
      pageToken: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Optional. A page token, received from a previous `ListRollouts` call. Provide this to retrieve the subsequent page. When paginating, all other provided parameters match the call that provided the page token.',
            in: 'query',
            name: 'pageToken',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
    params: z.object({
      parent: z
        .string()
        .openapi({
          param: {
            description: 'Required. The `Release` which owns this collection of `Rollout` objects.',
            in: 'path',
            name: 'parent',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: ListRolloutsResponseSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
  ],
})

export const postV1ParentRolloutsRoute = createRoute({
  method: 'post',
  path: '/v1/{parent}/rollouts',
  tags: ['projects'],
  description: 'Creates a new Rollout in a given project and location.',
  operationId: 'clouddeploy.projects.locations.deliveryPipelines.releases.rollouts.create',
  request: {
    query: z.object({
      '$.xgafv': XgafvParamsSchema,
      access_token: AccessTokenParamsSchema,
      alt: AltParamsSchema,
      callback: CallbackParamsSchema,
      fields: FieldsParamsSchema,
      key: KeyParamsSchema,
      oauth_token: OauthTokenParamsSchema,
      prettyPrint: PrettyPrintParamsSchema,
      quotaUser: QuotaUserParamsSchema,
      upload_protocol: UploadProtocolParamsSchema,
      uploadType: UploadTypeParamsSchema,
      requestId: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Optional. A request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes since the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000).',
            in: 'query',
            name: 'requestId',
            schema: { type: 'string' },
            required: false,
          },
        }),
      rolloutId: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Required. ID of the `Rollout`.',
            in: 'query',
            name: 'rolloutId',
            schema: { type: 'string' },
            required: false,
          },
        }),
      startingPhaseId: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Optional. The starting phase ID for the `Rollout`. If empty the `Rollout` will start at the first phase.',
            in: 'query',
            name: 'startingPhaseId',
            schema: { type: 'string' },
            required: false,
          },
        }),
      validateOnly: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Optional. If set to true, the request is validated and the user is provided with an expected result, but no actual change is made.',
            in: 'query',
            name: 'validateOnly',
            schema: { type: 'boolean' },
            required: false,
          },
        }),
    }),
    params: z.object({
      parent: z
        .string()
        .openapi({
          param: {
            description:
              'Required. The parent collection in which the `Rollout` should be created. Format should be projects/{project_id}/locations/{location_name}/deliveryPipelines/{pipeline_name}/releases/{release_name}.',
            in: 'path',
            name: 'parent',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: RolloutSchema } } },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: OperationSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
  ],
})

export const getV1ParentTargetsRoute = createRoute({
  method: 'get',
  path: '/v1/{parent}/targets',
  tags: ['projects'],
  description: 'Lists Targets in a given project and location.',
  operationId: 'clouddeploy.projects.locations.targets.list',
  request: {
    query: z.object({
      '$.xgafv': XgafvParamsSchema,
      access_token: AccessTokenParamsSchema,
      alt: AltParamsSchema,
      callback: CallbackParamsSchema,
      fields: FieldsParamsSchema,
      key: KeyParamsSchema,
      oauth_token: OauthTokenParamsSchema,
      prettyPrint: PrettyPrintParamsSchema,
      quotaUser: QuotaUserParamsSchema,
      upload_protocol: UploadProtocolParamsSchema,
      uploadType: UploadTypeParamsSchema,
      filter: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Optional. Filter targets to be returned. See https://google.aip.dev/160 for more details.',
            in: 'query',
            name: 'filter',
            schema: { type: 'string' },
            required: false,
          },
        }),
      orderBy: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Optional. Field to sort by. See https://google.aip.dev/132#ordering for more details.',
            in: 'query',
            name: 'orderBy',
            schema: { type: 'string' },
            required: false,
          },
        }),
      pageSize: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .exactOptional()
        .openapi({
          param: {
            description:
              'Optional. The maximum number of `Target` objects to return. The service may return fewer than this value. If unspecified, at most 50 `Target` objects will be returned. The maximum value is 1000; values above 1000 will be set to 1000.',
            in: 'query',
            name: 'pageSize',
            schema: { type: 'integer' },
            required: false,
          },
        }),
      pageToken: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Optional. A page token, received from a previous `ListTargets` call. Provide this to retrieve the subsequent page. When paginating, all other provided parameters match the call that provided the page token.',
            in: 'query',
            name: 'pageToken',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
    params: z.object({
      parent: z
        .string()
        .openapi({
          param: {
            description:
              'Required. The parent, which owns this collection of targets. Format must be projects/{project_id}/locations/{location_name}.',
            in: 'path',
            name: 'parent',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: ListTargetsResponseSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
  ],
})

export const postV1ParentTargetsRoute = createRoute({
  method: 'post',
  path: '/v1/{parent}/targets',
  tags: ['projects'],
  description: 'Creates a new Target in a given project and location.',
  operationId: 'clouddeploy.projects.locations.targets.create',
  request: {
    query: z.object({
      '$.xgafv': XgafvParamsSchema,
      access_token: AccessTokenParamsSchema,
      alt: AltParamsSchema,
      callback: CallbackParamsSchema,
      fields: FieldsParamsSchema,
      key: KeyParamsSchema,
      oauth_token: OauthTokenParamsSchema,
      prettyPrint: PrettyPrintParamsSchema,
      quotaUser: QuotaUserParamsSchema,
      upload_protocol: UploadProtocolParamsSchema,
      uploadType: UploadTypeParamsSchema,
      requestId: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Optional. A request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes since the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000).',
            in: 'query',
            name: 'requestId',
            schema: { type: 'string' },
            required: false,
          },
        }),
      targetId: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Required. ID of the `Target`.',
            in: 'query',
            name: 'targetId',
            schema: { type: 'string' },
            required: false,
          },
        }),
      validateOnly: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Optional. If set to true, the request is validated and the user is provided with an expected result, but no actual change is made.',
            in: 'query',
            name: 'validateOnly',
            schema: { type: 'boolean' },
            required: false,
          },
        }),
    }),
    params: z.object({
      parent: z
        .string()
        .openapi({
          param: {
            description:
              'Required. The parent collection in which the `Target` should be created. Format should be projects/{project_id}/locations/{location_name}.',
            in: 'path',
            name: 'parent',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: TargetSchema } } },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: OperationSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
  ],
})

export const getV1ResourceGetIamPolicyRoute = createRoute({
  method: 'get',
  path: '/v1/{resource}:getIamPolicy',
  tags: ['projects'],
  description:
    'Gets the access control policy for a resource. Returns an empty policy if the resource exists and does not have a policy set.',
  operationId: 'clouddeploy.projects.locations.targets.getIamPolicy',
  request: {
    query: z.object({
      '$.xgafv': XgafvParamsSchema,
      access_token: AccessTokenParamsSchema,
      alt: AltParamsSchema,
      callback: CallbackParamsSchema,
      fields: FieldsParamsSchema,
      key: KeyParamsSchema,
      oauth_token: OauthTokenParamsSchema,
      prettyPrint: PrettyPrintParamsSchema,
      quotaUser: QuotaUserParamsSchema,
      upload_protocol: UploadProtocolParamsSchema,
      uploadType: UploadTypeParamsSchema,
      'options.requestedPolicyVersion': z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .exactOptional()
        .openapi({
          param: {
            description:
              'Optional. The maximum policy version that will be used to format the policy. Valid values are 0, 1, and 3. Requests specifying an invalid value will be rejected. Requests for policies with any conditional role bindings must specify version 3. Policies with no conditional role bindings may specify any valid value or leave the field unset. The policy in the response might use the policy version that you specified, or it might use a lower policy version. For example, if you specify version 3, but the policy has no conditional role bindings, the response uses version 1. To learn which resources support conditions in their IAM policies, see the [IAM documentation](https://cloud.google.com/iam/help/conditions/resource-policies).',
            in: 'query',
            name: 'options.requestedPolicyVersion',
            schema: { type: 'integer' },
            required: false,
          },
        }),
    }),
    params: z.object({
      resource: z
        .string()
        .openapi({
          param: {
            description:
              'REQUIRED: The resource for which the policy is being requested. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field.',
            in: 'path',
            name: 'resource',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: PolicySchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
  ],
})

export const postV1ResourceSetIamPolicyRoute = createRoute({
  method: 'post',
  path: '/v1/{resource}:setIamPolicy',
  tags: ['projects'],
  description:
    'Sets the access control policy on the specified resource. Replaces any existing policy. Can return `NOT_FOUND`, `INVALID_ARGUMENT`, and `PERMISSION_DENIED` errors.',
  operationId: 'clouddeploy.projects.locations.targets.setIamPolicy',
  request: {
    query: z.object({
      '$.xgafv': XgafvParamsSchema,
      access_token: AccessTokenParamsSchema,
      alt: AltParamsSchema,
      callback: CallbackParamsSchema,
      fields: FieldsParamsSchema,
      key: KeyParamsSchema,
      oauth_token: OauthTokenParamsSchema,
      prettyPrint: PrettyPrintParamsSchema,
      quotaUser: QuotaUserParamsSchema,
      upload_protocol: UploadProtocolParamsSchema,
      uploadType: UploadTypeParamsSchema,
    }),
    params: z.object({
      resource: z
        .string()
        .openapi({
          param: {
            description:
              'REQUIRED: The resource for which the policy is being specified. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field.',
            in: 'path',
            name: 'resource',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: SetIamPolicyRequestSchema } } },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: PolicySchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
  ],
})

export const postV1ResourceTestIamPermissionsRoute = createRoute({
  method: 'post',
  path: '/v1/{resource}:testIamPermissions',
  tags: ['projects'],
  description:
    'Returns permissions that a caller has on the specified resource. If the resource does not exist, this will return an empty set of permissions, not a `NOT_FOUND` error. Note: This operation is designed to be used for building permission-aware UIs and command-line tools, not for authorization checking. This operation may "fail open" without warning.',
  operationId: 'clouddeploy.projects.locations.targets.testIamPermissions',
  request: {
    query: z.object({
      '$.xgafv': XgafvParamsSchema,
      access_token: AccessTokenParamsSchema,
      alt: AltParamsSchema,
      callback: CallbackParamsSchema,
      fields: FieldsParamsSchema,
      key: KeyParamsSchema,
      oauth_token: OauthTokenParamsSchema,
      prettyPrint: PrettyPrintParamsSchema,
      quotaUser: QuotaUserParamsSchema,
      upload_protocol: UploadProtocolParamsSchema,
      uploadType: UploadTypeParamsSchema,
    }),
    params: z.object({
      resource: z
        .string()
        .openapi({
          param: {
            description:
              'REQUIRED: The resource for which the policy detail is being requested. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field.',
            in: 'path',
            name: 'resource',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: TestIamPermissionsRequestSchema } } },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: TestIamPermissionsResponseSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
  ],
})

export const postV1RolloutIgnoreJobRoute = createRoute({
  method: 'post',
  path: '/v1/{rollout}:ignoreJob',
  tags: ['projects'],
  description: 'Ignores the specified Job in a Rollout.',
  operationId: 'clouddeploy.projects.locations.deliveryPipelines.releases.rollouts.ignoreJob',
  request: {
    query: z.object({
      '$.xgafv': XgafvParamsSchema,
      access_token: AccessTokenParamsSchema,
      alt: AltParamsSchema,
      callback: CallbackParamsSchema,
      fields: FieldsParamsSchema,
      key: KeyParamsSchema,
      oauth_token: OauthTokenParamsSchema,
      prettyPrint: PrettyPrintParamsSchema,
      quotaUser: QuotaUserParamsSchema,
      upload_protocol: UploadProtocolParamsSchema,
      uploadType: UploadTypeParamsSchema,
    }),
    params: z.object({
      rollout: z
        .string()
        .openapi({
          param: {
            description:
              'Required. Name of the Rollout. Format is projects/{project}/locations/{location}/deliveryPipelines/{deliveryPipeline}/ releases/{release}/rollouts/{rollout}.',
            in: 'path',
            name: 'rollout',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: IgnoreJobRequestSchema } } },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: IgnoreJobResponseSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
  ],
})

export const postV1RolloutRetryJobRoute = createRoute({
  method: 'post',
  path: '/v1/{rollout}:retryJob',
  tags: ['projects'],
  description: 'Retries the specified Job in a Rollout.',
  operationId: 'clouddeploy.projects.locations.deliveryPipelines.releases.rollouts.retryJob',
  request: {
    query: z.object({
      '$.xgafv': XgafvParamsSchema,
      access_token: AccessTokenParamsSchema,
      alt: AltParamsSchema,
      callback: CallbackParamsSchema,
      fields: FieldsParamsSchema,
      key: KeyParamsSchema,
      oauth_token: OauthTokenParamsSchema,
      prettyPrint: PrettyPrintParamsSchema,
      quotaUser: QuotaUserParamsSchema,
      upload_protocol: UploadProtocolParamsSchema,
      uploadType: UploadTypeParamsSchema,
    }),
    params: z.object({
      rollout: z
        .string()
        .openapi({
          param: {
            description:
              'Required. Name of the Rollout. Format is projects/{project}/locations/{location}/deliveryPipelines/{deliveryPipeline}/ releases/{release}/rollouts/{rollout}.',
            in: 'path',
            name: 'rollout',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: RetryJobRequestSchema } } },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: RetryJobResponseSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
  ],
})
