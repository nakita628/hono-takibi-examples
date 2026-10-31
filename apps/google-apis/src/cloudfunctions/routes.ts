import { createRoute, z } from '@hono/zod-openapi'

const RepoSourceSchema = z
  .object({
    branchName: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Regex matching branches to build. The syntax of the regular expressions accepted is the syntax accepted by RE2 and described at https://github.com/google/re2/wiki/Syntax',
      }),
    commitSha: z.string().exactOptional().openapi({ description: 'Explicit commit SHA to build.' }),
    dir: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "Directory, relative to the source root, in which to run the build. This must be a relative path. If a step's `dir` is specified and is an absolute path, this value is ignored for that step's execution. eg. helloworld (no leading slash allowed)",
      }),
    projectId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'ID of the project that owns the Cloud Source Repository. If omitted, the project ID requesting the build is assumed.',
      }),
    repoName: z
      .string()
      .exactOptional()
      .openapi({ description: 'Name of the Cloud Source Repository.' }),
    tagName: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Regex matching tags to build. The syntax of the regular expressions accepted is the syntax accepted by RE2 and described at https://github.com/google/re2/wiki/Syntax',
      }),
  })
  .openapi({
    description: 'Location of the source in a Google Cloud Source Repository.',
    required: [],
  })
  .openapi('RepoSource')

const StorageSourceSchema = z
  .object({
    bucket: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Google Cloud Storage bucket containing the source (see [Bucket Name Requirements](https://cloud.google.com/storage/docs/bucket-naming#requirements)).',
      }),
    generation: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Google Cloud Storage generation for the object. If the generation is omitted, the latest generation will be used.',
      }),
    object: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Google Cloud Storage object containing the source. This object must be a gzipped archive file (`.tar.gz`) containing source to build.',
      }),
  })
  .openapi({
    description: 'Location of the source in an archive file in Google Cloud Storage.',
    required: [],
  })
  .openapi('StorageSource')

type SourceType = {
  gitUri?: string
  repoSource?: z.infer<typeof RepoSourceSchema>
  storageSource?: z.infer<typeof StorageSourceSchema>
}

const AbortFunctionUpgradeRequestSchema = z
  .object({})
  .openapi({ description: 'Request for the `AbortFunctionUpgrade` method.' })
  .openapi('AbortFunctionUpgradeRequest')

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

const AutomaticUpdatePolicySchema = z
  .object({})
  .openapi({
    description:
      'Security patches are applied automatically to the runtime without requiring the function to be redeployed.',
  })
  .openapi('AutomaticUpdatePolicy')

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
          'Specifies the principals requesting access for a Google Cloud resource. `members` can have the following values: * `allUsers`: A special identifier that represents anyone who is on the internet; with or without a Google account. * `allAuthenticatedUsers`: A special identifier that represents anyone who is authenticated with a Google account or a service account. Does not include identities that come from external identity providers (IdPs) through identity federation. * `user:{emailid}`: An email address that represents a specific Google account. For example, `alice@example.com` . * `serviceAccount:{emailid}`: An email address that represents a Google service account. For example, `my-other-app@appspot.gserviceaccount.com`. * `serviceAccount:{projectid}.svc.id.goog[{namespace}/{kubernetes-sa}]`: An identifier for a [Kubernetes service account](https://cloud.google.com/kubernetes-engine/docs/how-to/kubernetes-service-accounts). For example, `my-project.svc.id.goog[my-namespace/my-kubernetes-sa]`. * `group:{emailid}`: An email address that represents a Google group. For example, `admins@example.com`. * `domain:{domain}`: The G Suite domain (primary) that represents all the users of that domain. For example, `google.com` or `example.com`. * `principal://iam.googleapis.com/locations/global/workforcePools/{pool_id}/subject/{subject_attribute_value}`: A single identity in a workforce identity pool. * `principalSet://iam.googleapis.com/locations/global/workforcePools/{pool_id}/group/{group_id}`: All workforce identities in a group. * `principalSet://iam.googleapis.com/locations/global/workforcePools/{pool_id}/attribute.{attribute_name}/{attribute_value}`: All workforce identities with a specific attribute value. * `principalSet://iam.googleapis.com/locations/global/workforcePools/{pool_id}/*`: All identities in a workforce identity pool. * `principal://iam.googleapis.com/projects/{project_number}/locations/global/workloadIdentityPools/{pool_id}/subject/{subject_attribute_value}`: A single identity in a workload identity pool. * `principalSet://iam.googleapis.com/projects/{project_number}/locations/global/workloadIdentityPools/{pool_id}/group/{group_id}`: A workload identity pool group. * `principalSet://iam.googleapis.com/projects/{project_number}/locations/global/workloadIdentityPools/{pool_id}/attribute.{attribute_name}/{attribute_value}`: All identities in a workload identity pool with a certain attribute. * `principalSet://iam.googleapis.com/projects/{project_number}/locations/global/workloadIdentityPools/{pool_id}/*`: All identities in a workload identity pool. * `deleted:user:{emailid}?uid={uniqueid}`: An email address (plus unique identifier) representing a user that has been recently deleted. For example, `alice@example.com?uid=123456789012345678901`. If the user is recovered, this value reverts to `user:{emailid}` and the recovered user retains the role in the binding. * `deleted:serviceAccount:{emailid}?uid={uniqueid}`: An email address (plus unique identifier) representing a service account that has been recently deleted. For example, `my-other-app@appspot.gserviceaccount.com?uid=123456789012345678901`. If the service account is undeleted, this value reverts to `serviceAccount:{emailid}` and the undeleted service account retains the role in the binding. * `deleted:group:{emailid}?uid={uniqueid}`: An email address (plus unique identifier) representing a Google group that has been recently deleted. For example, `admins@example.com?uid=123456789012345678901`. If the group is recovered, this value reverts to `group:{emailid}` and the recovered group retains the role in the binding. * `deleted:principal://iam.googleapis.com/locations/global/workforcePools/{pool_id}/subject/{subject_attribute_value}`: Deleted single identity in a workforce identity pool. For example, `deleted:principal://iam.googleapis.com/locations/global/workforcePools/my-pool-id/subject/my-subject-attribute-value`.',
      }),
    role: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Role that is assigned to the list of `members`, or principals. For example, `roles/viewer`, `roles/editor`, or `roles/owner`. For an overview of the IAM roles and permissions, see the [IAM documentation](https://cloud.google.com/iam/docs/roles-overview). For a list of the available pre-defined roles, see [here](https://cloud.google.com/iam/docs/understanding-roles).',
      }),
  })
  .openapi({ description: 'Associates `members`, or principals, with a `role`.', required: [] })
  .openapi('Binding')

const OnDeployUpdatePolicySchema = z
  .object({
    runtimeVersion: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Output only. contains the runtime version which was used during latest function deployment.',
        readOnly: true,
      }),
  })
  .openapi({
    description: 'Security patches are only applied when a function is redeployed.',
    required: [],
  })
  .openapi('OnDeployUpdatePolicy')

const SourceSchema: z.ZodType<SourceType> = z
  .lazy(() =>
    z
      .object({
        gitUri: z
          .string()
          .exactOptional()
          .openapi({
            description:
              'If provided, get the source from GitHub repository. This option is valid only for GCF 1st Gen function. Example: https://github.com///blob//',
          }),
        repoSource: RepoSourceSchema.exactOptional().openapi({
          description:
            'If provided, get the source from this location in a Cloud Source Repository.',
        }),
        storageSource: StorageSourceSchema.exactOptional().openapi({
          description: 'If provided, get the source from this location in Google Cloud Storage.',
        }),
      })
      .openapi({ description: 'The location of the function source code.', required: [] }),
  )
  .openapi('Source')

const SourceProvenanceSchema = z
  .object({
    gitUri: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "A copy of the build's `source.git_uri`, if exists, with any commits resolved.",
      }),
    resolvedRepoSource: RepoSourceSchema.exactOptional().openapi({
      description:
        "A copy of the build's `source.repo_source`, if exists, with any revisions resolved.",
    }),
    resolvedStorageSource: StorageSourceSchema.exactOptional().openapi({
      description:
        "A copy of the build's `source.storage_source`, if exists, with any generations resolved.",
    }),
  })
  .openapi({
    description:
      'Provenance of the source. Ways to find the original source, or verify that some source was used for this build.',
    required: [],
  })
  .openapi('SourceProvenance')

const BuildConfigSchema = z
  .object({
    automaticUpdatePolicy: AutomaticUpdatePolicySchema.exactOptional(),
    build: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Output only. The Cloud Build name of the latest successful deployment of the function.',
        readOnly: true,
      }),
    dockerRegistry: z
      .enum(['DOCKER_REGISTRY_UNSPECIFIED', 'CONTAINER_REGISTRY', 'ARTIFACT_REGISTRY'])
      .exactOptional()
      .openapi({
        description:
          'Docker Registry to use for this deployment. This configuration is only applicable to 1st Gen functions, 2nd Gen functions can only use Artifact Registry. If `docker_repository` field is specified, this field will be automatically set as `ARTIFACT_REGISTRY`. If unspecified, it currently defaults to `CONTAINER_REGISTRY`. This field may be overridden by the backend for eligible deployments.',
      }),
    dockerRepository: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "Repository in Artifact Registry to which the function docker image will be pushed after it is built by Cloud Build. If specified by user, it is created and managed by user with a customer managed encryption key. Otherwise, GCF will create and use a repository named 'gcf-artifacts' for every deployed region. It must match the pattern `projects/{project}/locations/{location}/repositories/{repository}`. Cross-project repositories are not supported. Cross-location repositories are not supported. Repository format must be 'DOCKER'.",
      }),
    entryPoint: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The name of the function (as defined in source code) that will be executed. Defaults to the resource name suffix, if not specified. For backward compatibility, if function with given name is not found, then the system will try to use function named "function". For Node.js this is name of a function exported by the module specified in `source_location`.',
      }),
    environmentVariables: z
      .record(z.string(), z.string())
      .exactOptional()
      .openapi({ description: 'User-provided build-time environment variables for the function' }),
    onDeployUpdatePolicy: OnDeployUpdatePolicySchema.exactOptional(),
    runtime: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The runtime in which to run the function. Required when deploying a new function, optional when updating an existing function. For a complete list of possible choices, see the [`gcloud` command reference](https://cloud.google.com/sdk/gcloud/reference/functions/deploy#--runtime).',
      }),
    serviceAccount: z
      .string()
      .exactOptional()
      .openapi({ description: '[Preview] Service account to be used for building the container' }),
    source: SourceSchema.exactOptional().openapi({
      description: 'The location of the function source code.',
    }),
    sourceProvenance: SourceProvenanceSchema.exactOptional().openapi({
      description: 'Output only. A permanent fixed identifier for source.',
      readOnly: true,
    }),
    sourceToken: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'An identifier for Firebase function sources. Disclaimer: This field is only supported for Firebase function deployments.',
      }),
    workerPool: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Name of the Cloud Build Custom Worker Pool that should be used to build the function. The format of this field is `projects/{project}/locations/{region}/workerPools/{workerPool}` where {project} and {region} are the project id and region respectively where the worker pool is defined and {workerPool} is the short name of the worker pool. If the project id is not the same as the function, then the Cloud Functions Service Agent (service-@gcf-admin-robot.iam.gserviceaccount.com) must be granted the role Cloud Build Custom Workers Builder (roles/cloudbuild.customworkers.builder) in the project.',
      }),
  })
  .openapi({
    description:
      'Describes the Build step of the function that builds a container from the given source.',
    required: [],
  })
  .openapi('BuildConfig')

const CommitFunctionUpgradeRequestSchema = z
  .object({})
  .openapi({ description: 'Request for the `CommitFunctionUpgrade` method.' })
  .openapi('CommitFunctionUpgradeRequest')

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

const EventFilterSchema = z
  .object({
    attribute: z
      .string()
      .exactOptional()
      .openapi({ description: 'Required. The name of a CloudEvents attribute.' }),
    operator: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Optional. The operator used for matching the events with the value of the filter. If not specified, only events that have an exact key-value pair specified in the filter are matched. The only allowed value is `match-path-pattern`.',
      }),
    value: z
      .string()
      .exactOptional()
      .openapi({ description: 'Required. The value for the attribute.' }),
  })
  .openapi({
    description: 'Filters events based on exact matches on the CloudEvents attributes.',
    required: [],
  })
  .openapi('EventFilter')

const EventTriggerSchema = z
  .object({
    channel: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Optional. The name of the channel associated with the trigger in `projects/{project}/locations/{location}/channels/{channel}` format. You must provide a channel to receive events from Eventarc SaaS partners.',
      }),
    eventFilters: z
      .array(EventFilterSchema)
      .exactOptional()
      .openapi({ description: 'Criteria used to filter events.' }),
    eventType: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Required. The type of event to observe. For example: `google.cloud.audit.log.v1.written` or `google.cloud.pubsub.topic.v1.messagePublished`.',
      }),
    pubsubTopic: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Optional. The name of a Pub/Sub topic in the same project that will be used as the transport topic for the event delivery. Format: `projects/{project}/topics/{topic}`. This is only valid for events of type `google.cloud.pubsub.topic.v1.messagePublished`. The topic provided here will not be deleted at function deletion.',
      }),
    retryPolicy: z
      .enum(['RETRY_POLICY_UNSPECIFIED', 'RETRY_POLICY_DO_NOT_RETRY', 'RETRY_POLICY_RETRY'])
      .exactOptional()
      .openapi({
        description:
          'Optional. If unset, then defaults to ignoring failures (i.e. not retrying them).',
      }),
    service: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Optional. The hostname of the service that 1st Gen function should be observed. If no string is provided, the default service implementing the API will be used. For example, `storage.googleapis.com` is the default for all event types in the `google.storage` namespace. The field is only applicable to 1st Gen functions.',
      }),
    serviceAccountEmail: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "Optional. The email of the trigger's service account. The service account must have permission to invoke Cloud Run services, the permission is `run.routes.invoke`. If empty, defaults to the Compute Engine default service account: `{project_number}-compute@developer.gserviceaccount.com`.",
      }),
    trigger: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Output only. The resource name of the Eventarc trigger. The format of this field is `projects/{project}/locations/{region}/triggers/{trigger}`.',
        readOnly: true,
      }),
    triggerRegion: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The region that the trigger will be in. The trigger will only receive events originating in this region. It can be the same region as the function, a different region or multi-region, or the global region. If not provided, defaults to the same region as the function.',
      }),
  })
  .openapi({
    description: 'Describes EventTrigger, used to request events to be sent from another service.',
    required: [],
  })
  .openapi('EventTrigger')

const SecretEnvVarSchema = z
  .object({
    key: z.string().exactOptional().openapi({ description: 'Name of the environment variable.' }),
    projectId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Project identifier (preferably project number but can also be the project ID) of the project that contains the secret. If not set, it is assumed that the secret is in the same project as the function.',
      }),
    secret: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Name of the secret in secret manager (not the full resource name).',
      }),
    version: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "Version of the secret (version number or the string 'latest'). It is recommended to use a numeric version for secret environment variables as any updates to the secret value is not reflected until new instances start.",
      }),
  })
  .openapi({
    description:
      'Configuration for a secret environment variable. It has the information necessary to fetch the secret value from secret manager and expose it as an environment variable.',
    required: [],
  })
  .openapi('SecretEnvVar')

const SecretVersionSchema = z
  .object({
    path: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "Relative path of the file under the mount path where the secret value for this version will be fetched and made available. For example, setting the mount_path as '/etc/secrets' and path as `secret_foo` would mount the secret value file at `/etc/secrets/secret_foo`.",
      }),
    version: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "Version of the secret (version number or the string 'latest'). It is preferable to use `latest` version with secret volumes as secret value changes are reflected immediately.",
      }),
  })
  .openapi({ description: 'Configuration for a single version.', required: [] })
  .openapi('SecretVersion')

const SecretVolumeSchema = z
  .object({
    mountPath: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The path within the container to mount the secret volume. For example, setting the mount_path as `/etc/secrets` would mount the secret value files under the `/etc/secrets` directory. This directory will also be completely shadowed and unavailable to mount any other secrets. Recommended mount path: /etc/secrets',
      }),
    projectId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Project identifier (preferably project number but can also be the project ID) of the project that contains the secret. If not set, it is assumed that the secret is in the same project as the function.',
      }),
    secret: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Name of the secret in secret manager (not the full resource name).',
      }),
    versions: z
      .array(SecretVersionSchema)
      .exactOptional()
      .openapi({
        description:
          'List of secret versions to mount for this secret. If empty, the `latest` version of the secret will be made available in a file named after the secret under the mount point.',
      }),
  })
  .openapi({
    description:
      'Configuration for a secret volume. It has the information necessary to fetch the secret value from secret manager and make it available as files mounted at the requested paths within the application container.',
    required: [],
  })
  .openapi('SecretVolume')

const ServiceConfigSchema = z
  .object({
    allTrafficOnLatestRevision: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Whether 100% of traffic is routed to the latest revision. On CreateFunction and UpdateFunction, when set to true, the revision being deployed will serve 100% of traffic, ignoring any traffic split settings, if any. On GetFunction, true will be returned if the latest revision is serving 100% of traffic.',
      }),
    availableCpu: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The number of CPUs used in a single container instance. Default value is calculated from available memory. Supports the same values as Cloud Run, see https://cloud.google.com/run/docs/reference/rest/v1/Container#resourcerequirements Example: "1" indicates 1 vCPU',
      }),
    availableMemory: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The amount of memory available for a function. Defaults to 256M. Supported units are k, M, G, Mi, Gi. If no unit is supplied the value is interpreted as bytes. See https://github.com/kubernetes/kubernetes/blob/master/staging/src/k8s.io/apimachinery/pkg/api/resource/quantity.go a full description.',
      }),
    environmentVariables: z
      .record(z.string(), z.string())
      .exactOptional()
      .openapi({
        description: 'Environment variables that shall be available during function execution.',
      }),
    ingressSettings: z
      .enum([
        'INGRESS_SETTINGS_UNSPECIFIED',
        'ALLOW_ALL',
        'ALLOW_INTERNAL_ONLY',
        'ALLOW_INTERNAL_AND_GCLB',
      ])
      .exactOptional()
      .openapi({
        description:
          'The ingress settings for the function, controlling what traffic can reach it.',
      }),
    maxInstanceCount: z
      .int32()
      .exactOptional()
      .openapi({
        description:
          'The limit on the maximum number of function instances that may coexist at a given time. In some cases, such as rapid traffic surges, Cloud Functions may, for a short period of time, create more instances than the specified max instances limit. If your function cannot tolerate this temporary behavior, you may want to factor in a safety margin and set a lower max instances value than your function can tolerate. See the [Max Instances](https://cloud.google.com/functions/docs/max-instances) Guide for more details.',
      }),
    maxInstanceRequestConcurrency: z
      .int32()
      .exactOptional()
      .openapi({
        description:
          'Sets the maximum number of concurrent requests that each instance can receive. Defaults to 1.',
      }),
    minInstanceCount: z
      .int32()
      .exactOptional()
      .openapi({
        description:
          'The limit on the minimum number of function instances that may coexist at a given time. Function instances are kept in idle state for a short period after they finished executing the request to reduce cold start time for subsequent requests. Setting a minimum instance count will ensure that the given number of instances are kept running in idle state always. This can help with cold start times when jump in incoming request count occurs after the idle instance would have been stopped in the default case.',
      }),
    revision: z
      .string()
      .exactOptional()
      .openapi({ description: 'Output only. The name of service revision.', readOnly: true }),
    secretEnvironmentVariables: z
      .array(SecretEnvVarSchema)
      .exactOptional()
      .openapi({ description: 'Secret environment variables configuration.' }),
    secretVolumes: z
      .array(SecretVolumeSchema)
      .exactOptional()
      .openapi({ description: 'Secret volumes configuration.' }),
    securityLevel: z
      .enum(['SECURITY_LEVEL_UNSPECIFIED', 'SECURE_ALWAYS', 'SECURE_OPTIONAL'])
      .exactOptional()
      .openapi({
        description:
          'Security level configure whether the function only accepts https. This configuration is only applicable to 1st Gen functions with Http trigger. By default https is optional for 1st Gen functions; 2nd Gen functions are https ONLY.',
      }),
    service: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Output only. Name of the service associated with a Function. The format of this field is `projects/{project}/locations/{region}/services/{service}`',
        readOnly: true,
      }),
    serviceAccountEmail: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "The email of the service's service account. If empty, defaults to `{project_number}-compute@developer.gserviceaccount.com`.",
      }),
    timeoutSeconds: z
      .int32()
      .exactOptional()
      .openapi({
        description:
          'The function execution timeout. Execution is considered failed and can be terminated if the function is not completed at the end of the timeout period. Defaults to 60 seconds.',
      }),
    uri: z
      .string()
      .exactOptional()
      .openapi({ description: 'Output only. URI of the Service deployed.', readOnly: true }),
    vpcConnector: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The Serverless VPC Access connector that this cloud function can connect to. The format of this field is `projects/*/locations/*/connectors/*`.',
      }),
    vpcConnectorEgressSettings: z
      .enum(['VPC_CONNECTOR_EGRESS_SETTINGS_UNSPECIFIED', 'PRIVATE_RANGES_ONLY', 'ALL_TRAFFIC'])
      .exactOptional()
      .openapi({
        description:
          'The egress settings for the connector, controlling what traffic is diverted through it.',
      }),
  })
  .openapi({
    description:
      'Describes the Service being deployed. Currently Supported : Cloud Run (fully managed).',
    required: [],
  })
  .openapi('ServiceConfig')

const GoogleCloudFunctionsV2StateMessageSchema = z
  .object({
    message: z.string().exactOptional().openapi({ description: 'The message.' }),
    severity: z
      .enum(['SEVERITY_UNSPECIFIED', 'ERROR', 'WARNING', 'INFO'])
      .exactOptional()
      .openapi({ description: 'Severity of the state message.' }),
    type: z
      .string()
      .exactOptional()
      .openapi({ description: 'One-word CamelCase type of the state message.' }),
  })
  .openapi({
    description: 'Informational messages about the state of the Cloud Function or Operation.',
    required: [],
  })
  .openapi('GoogleCloudFunctionsV2StateMessage')

const UpgradeInfoSchema = z
  .object({
    buildConfig: BuildConfigSchema.exactOptional().openapi({
      description:
        'Describes the Build step of the function that builds a container to prepare for 2nd gen upgrade.',
    }),
    eventTrigger: EventTriggerSchema.exactOptional().openapi({
      description:
        'Describes the Event trigger which has been setup to prepare for 2nd gen upgrade.',
    }),
    serviceConfig: ServiceConfigSchema.exactOptional().openapi({
      description:
        'Describes the Cloud Run service which has been setup to prepare for 2nd gen upgrade.',
    }),
    upgradeState: z
      .enum([
        'UPGRADE_STATE_UNSPECIFIED',
        'ELIGIBLE_FOR_2ND_GEN_UPGRADE',
        'UPGRADE_OPERATION_IN_PROGRESS',
        'SETUP_FUNCTION_UPGRADE_CONFIG_SUCCESSFUL',
        'SETUP_FUNCTION_UPGRADE_CONFIG_ERROR',
        'ABORT_FUNCTION_UPGRADE_ERROR',
        'REDIRECT_FUNCTION_UPGRADE_TRAFFIC_SUCCESSFUL',
        'REDIRECT_FUNCTION_UPGRADE_TRAFFIC_ERROR',
        'ROLLBACK_FUNCTION_UPGRADE_TRAFFIC_ERROR',
        'COMMIT_FUNCTION_UPGRADE_ERROR',
      ])
      .exactOptional()
      .openapi({ description: 'UpgradeState of the function' }),
  })
  .openapi({
    description:
      "Information related to: * A function's eligibility for 1st Gen to 2nd Gen migration * Current state of migration for function undergoing migration.",
    required: [],
  })
  .openapi('UpgradeInfo')

const FunctionSchema = z
  .object({
    buildConfig: BuildConfigSchema.exactOptional().openapi({
      description:
        'Describes the Build step of the function that builds a container from the given source.',
    }),
    createTime: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Output only. The create timestamp of a Cloud Function. This is only applicable to 2nd Gen functions.',
        readOnly: true,
      }),
    description: z
      .string()
      .exactOptional()
      .openapi({ description: 'User-provided description of a function.' }),
    environment: z
      .enum(['ENVIRONMENT_UNSPECIFIED', 'GEN_1', 'GEN_2'])
      .exactOptional()
      .openapi({ description: 'Describe whether the function is 1st Gen or 2nd Gen.' }),
    eventTrigger: EventTriggerSchema.exactOptional().openapi({
      description:
        'An Eventarc trigger managed by Google Cloud Functions that fires events in response to a condition in another service.',
    }),
    kmsKeyName: z
      .string()
      .exactOptional()
      .openapi({
        description:
          '[Preview] Resource name of a KMS crypto key (managed by the user) used to encrypt/decrypt function resources. It must match the pattern `projects/{project}/locations/{location}/keyRings/{key_ring}/cryptoKeys/{crypto_key}`.',
      }),
    labels: z
      .record(z.string(), z.string())
      .exactOptional()
      .openapi({ description: 'Labels associated with this Cloud Function.' }),
    name: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'A user-defined name of the function. Function names must be unique globally and match pattern `projects/*/locations/*/functions/*`',
      }),
    satisfiesPzs: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Output only. Reserved for future use.', readOnly: true }),
    serviceConfig: ServiceConfigSchema.exactOptional().openapi({
      description:
        'Describes the Service being deployed. Currently deploys services to Cloud Run (fully managed).',
    }),
    state: z
      .enum(['STATE_UNSPECIFIED', 'ACTIVE', 'FAILED', 'DEPLOYING', 'DELETING', 'UNKNOWN'])
      .exactOptional()
      .openapi({ description: 'Output only. State of the function.', readOnly: true }),
    stateMessages: z
      .array(GoogleCloudFunctionsV2StateMessageSchema)
      .exactOptional()
      .openapi({
        description: 'Output only. State Messages for this Cloud Function.',
        readOnly: true,
      }),
    updateTime: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Output only. The last update timestamp of a Cloud Function.',
        readOnly: true,
      }),
    upgradeInfo: UpgradeInfoSchema.exactOptional().openapi({
      description: 'Output only. UpgradeInfo for this Cloud Function',
      readOnly: true,
    }),
    url: z
      .string()
      .exactOptional()
      .openapi({ description: 'Output only. The deployed url for the function.', readOnly: true }),
  })
  .openapi({
    description:
      'Describes a Cloud Function that contains user computation executed in response to an event. It encapsulates function and trigger configurations.',
    required: [],
  })
  .openapi('Function')

const GenerateDownloadUrlRequestSchema = z
  .object({})
  .openapi({ description: 'Request of `GenerateDownloadUrl` method.' })
  .openapi('GenerateDownloadUrlRequest')

const GenerateDownloadUrlResponseSchema = z
  .object({
    downloadUrl: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The generated Google Cloud Storage signed URL that should be used for function source code download.',
      }),
  })
  .openapi({ description: 'Response of `GenerateDownloadUrl` method.', required: [] })
  .openapi('GenerateDownloadUrlResponse')

const GenerateUploadUrlRequestSchema = z
  .object({
    environment: z
      .enum(['ENVIRONMENT_UNSPECIFIED', 'GEN_1', 'GEN_2'])
      .exactOptional()
      .openapi({
        description:
          'The function environment the generated upload url will be used for. The upload url for 2nd Gen functions can also be used for 1st gen functions, but not vice versa. If not specified, 2nd generation-style upload URLs are generated.',
      }),
    kmsKeyName: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "[Preview] Resource name of a KMS crypto key (managed by the user) used to encrypt/decrypt function source code objects in intermediate Cloud Storage buckets. When you generate an upload url and upload your source code, it gets copied to an intermediate Cloud Storage bucket. The source code is then copied to a versioned directory in the sources bucket in the consumer project during the function deployment. It must match the pattern `projects/{project}/locations/{location}/keyRings/{key_ring}/cryptoKeys/{crypto_key}`. The Google Cloud Functions service account (service-{project_number}@gcf-admin-robot.iam.gserviceaccount.com) must be granted the role 'Cloud KMS CryptoKey Encrypter/Decrypter (roles/cloudkms.cryptoKeyEncrypterDecrypter)' on the Key/KeyRing/Project/Organization (least access preferred).",
      }),
  })
  .openapi({ description: 'Request of `GenerateSourceUploadUrl` method.', required: [] })
  .openapi('GenerateUploadUrlRequest')

const GenerateUploadUrlResponseSchema = z
  .object({
    storageSource: StorageSourceSchema.exactOptional().openapi({
      description:
        'The location of the source code in the upload bucket. Once the archive is uploaded using the `upload_url` use this field to set the `function.build_config.source.storage_source` during CreateFunction and UpdateFunction. Generation defaults to 0, as Cloud Storage provides a new generation only upon uploading a new object or version of an object.',
    }),
    uploadUrl: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The generated Google Cloud Storage signed URL that should be used for a function source code upload. The uploaded file should be a zip archive which contains a function.',
      }),
  })
  .openapi({ description: 'Response of `GenerateSourceUploadUrl` method.', required: [] })
  .openapi('GenerateUploadUrlResponse')

const GoogleCloudFunctionsV2LocationMetadataSchema = z
  .object({
    environments: z
      .array(z.enum(['ENVIRONMENT_UNSPECIFIED', 'GEN_1', 'GEN_2']))
      .exactOptional()
      .openapi({ description: 'The Cloud Function environments this location supports.' }),
  })
  .openapi({ description: 'Extra GCF specific location information.', required: [] })
  .openapi('GoogleCloudFunctionsV2LocationMetadata')

const GoogleCloudFunctionsV2StageSchema = z
  .object({
    message: z.string().exactOptional().openapi({ description: 'Message describing the Stage' }),
    name: z
      .enum([
        'NAME_UNSPECIFIED',
        'ARTIFACT_REGISTRY',
        'BUILD',
        'SERVICE',
        'TRIGGER',
        'SERVICE_ROLLBACK',
        'TRIGGER_ROLLBACK',
      ])
      .exactOptional()
      .openapi({ description: 'Name of the Stage. This will be unique for each Stage.' }),
    resource: z.string().exactOptional().openapi({ description: 'Resource of the Stage' }),
    resourceUri: z
      .string()
      .exactOptional()
      .openapi({ description: 'Link to the current Stage resource' }),
    state: z
      .enum(['STATE_UNSPECIFIED', 'NOT_STARTED', 'IN_PROGRESS', 'COMPLETE'])
      .exactOptional()
      .openapi({ description: 'Current state of the Stage' }),
    stateMessages: z
      .array(GoogleCloudFunctionsV2StateMessageSchema)
      .exactOptional()
      .openapi({ description: 'State messages from the current Stage.' }),
  })
  .openapi({ description: 'Each Stage of the deployment process', required: [] })
  .openapi('GoogleCloudFunctionsV2Stage')

const GoogleCloudFunctionsV2OperationMetadataSchema = z
  .object({
    apiVersion: z
      .string()
      .exactOptional()
      .openapi({ description: 'API version used to start the operation.' }),
    cancelRequested: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Identifies whether the user has requested cancellation of the operation. Operations that have successfully been cancelled have google.longrunning.Operation.error value with a google.rpc.Status.code of 1, corresponding to `Code.CANCELLED`.',
      }),
    createTime: z
      .string()
      .exactOptional()
      .openapi({ description: 'The time the operation was created.' }),
    endTime: z
      .string()
      .exactOptional()
      .openapi({ description: 'The time the operation finished running.' }),
    operationType: z
      .enum([
        'OPERATIONTYPE_UNSPECIFIED',
        'CREATE_FUNCTION',
        'UPDATE_FUNCTION',
        'DELETE_FUNCTION',
        'REDIRECT_FUNCTION_UPGRADE_TRAFFIC',
        'ROLLBACK_FUNCTION_UPGRADE_TRAFFIC',
        'SETUP_FUNCTION_UPGRADE_CONFIG',
        'ABORT_FUNCTION_UPGRADE',
        'COMMIT_FUNCTION_UPGRADE',
      ])
      .exactOptional()
      .openapi({ description: 'The operation type.' }),
    requestResource: z
      .record(
        z.string(),
        z
          .any()
          .openapi({
            description: 'Properties of the object. Contains field @type with type URL.',
          }),
      )
      .exactOptional()
      .openapi({ description: 'The original request that started the operation.' }),
    sourceToken: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'An identifier for Firebase function sources. Disclaimer: This field is only supported for Firebase function deployments.',
      }),
    stages: z
      .array(GoogleCloudFunctionsV2StageSchema)
      .exactOptional()
      .openapi({ description: 'Mechanism for reporting in-progress stages' }),
    statusDetail: z
      .string()
      .exactOptional()
      .openapi({ description: 'Human-readable status of the operation, if any.' }),
    target: z
      .string()
      .exactOptional()
      .openapi({ description: 'Server-defined resource path for the target of the operation.' }),
    verb: z
      .string()
      .exactOptional()
      .openapi({ description: 'Name of the verb executed by the operation.' }),
  })
  .openapi({ description: 'Represents the metadata of the long-running operation.', required: [] })
  .openapi('GoogleCloudFunctionsV2OperationMetadata')

const GoogleCloudFunctionsV2alphaLocationMetadataSchema = z
  .object({
    environments: z
      .array(z.enum(['ENVIRONMENT_UNSPECIFIED', 'GEN_1', 'GEN_2']))
      .exactOptional()
      .openapi({ description: 'The Cloud Function environments this location supports.' }),
  })
  .openapi({ description: 'Extra GCF specific location information.', required: [] })
  .openapi('GoogleCloudFunctionsV2alphaLocationMetadata')

const GoogleCloudFunctionsV2alphaStateMessageSchema = z
  .object({
    message: z.string().exactOptional().openapi({ description: 'The message.' }),
    severity: z
      .enum(['SEVERITY_UNSPECIFIED', 'ERROR', 'WARNING', 'INFO'])
      .exactOptional()
      .openapi({ description: 'Severity of the state message.' }),
    type: z
      .string()
      .exactOptional()
      .openapi({ description: 'One-word CamelCase type of the state message.' }),
  })
  .openapi({
    description: 'Informational messages about the state of the Cloud Function or Operation.',
    required: [],
  })
  .openapi('GoogleCloudFunctionsV2alphaStateMessage')

const GoogleCloudFunctionsV2alphaStageSchema = z
  .object({
    message: z.string().exactOptional().openapi({ description: 'Message describing the Stage' }),
    name: z
      .enum([
        'NAME_UNSPECIFIED',
        'ARTIFACT_REGISTRY',
        'BUILD',
        'SERVICE',
        'TRIGGER',
        'SERVICE_ROLLBACK',
        'TRIGGER_ROLLBACK',
      ])
      .exactOptional()
      .openapi({ description: 'Name of the Stage. This will be unique for each Stage.' }),
    resource: z.string().exactOptional().openapi({ description: 'Resource of the Stage' }),
    resourceUri: z
      .string()
      .exactOptional()
      .openapi({ description: 'Link to the current Stage resource' }),
    state: z
      .enum(['STATE_UNSPECIFIED', 'NOT_STARTED', 'IN_PROGRESS', 'COMPLETE'])
      .exactOptional()
      .openapi({ description: 'Current state of the Stage' }),
    stateMessages: z
      .array(GoogleCloudFunctionsV2alphaStateMessageSchema)
      .exactOptional()
      .openapi({ description: 'State messages from the current Stage.' }),
  })
  .openapi({ description: 'Each Stage of the deployment process', required: [] })
  .openapi('GoogleCloudFunctionsV2alphaStage')

const GoogleCloudFunctionsV2alphaOperationMetadataSchema = z
  .object({
    apiVersion: z
      .string()
      .exactOptional()
      .openapi({ description: 'API version used to start the operation.' }),
    cancelRequested: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Identifies whether the user has requested cancellation of the operation. Operations that have successfully been cancelled have google.longrunning.Operation.error value with a google.rpc.Status.code of 1, corresponding to `Code.CANCELLED`.',
      }),
    createTime: z
      .string()
      .exactOptional()
      .openapi({ description: 'The time the operation was created.' }),
    endTime: z
      .string()
      .exactOptional()
      .openapi({ description: 'The time the operation finished running.' }),
    operationType: z
      .enum([
        'OPERATIONTYPE_UNSPECIFIED',
        'CREATE_FUNCTION',
        'UPDATE_FUNCTION',
        'DELETE_FUNCTION',
        'REDIRECT_FUNCTION_UPGRADE_TRAFFIC',
        'ROLLBACK_FUNCTION_UPGRADE_TRAFFIC',
        'SETUP_FUNCTION_UPGRADE_CONFIG',
        'ABORT_FUNCTION_UPGRADE',
        'COMMIT_FUNCTION_UPGRADE',
      ])
      .exactOptional()
      .openapi({ description: 'The operation type.' }),
    requestResource: z
      .record(
        z.string(),
        z
          .any()
          .openapi({
            description: 'Properties of the object. Contains field @type with type URL.',
          }),
      )
      .exactOptional()
      .openapi({ description: 'The original request that started the operation.' }),
    sourceToken: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'An identifier for Firebase function sources. Disclaimer: This field is only supported for Firebase function deployments.',
      }),
    stages: z
      .array(GoogleCloudFunctionsV2alphaStageSchema)
      .exactOptional()
      .openapi({ description: 'Mechanism for reporting in-progress stages' }),
    statusDetail: z
      .string()
      .exactOptional()
      .openapi({ description: 'Human-readable status of the operation, if any.' }),
    target: z
      .string()
      .exactOptional()
      .openapi({ description: 'Server-defined resource path for the target of the operation.' }),
    verb: z
      .string()
      .exactOptional()
      .openapi({ description: 'Name of the verb executed by the operation.' }),
  })
  .openapi({ description: 'Represents the metadata of the long-running operation.', required: [] })
  .openapi('GoogleCloudFunctionsV2alphaOperationMetadata')

const GoogleCloudFunctionsV2betaLocationMetadataSchema = z
  .object({
    environments: z
      .array(z.enum(['ENVIRONMENT_UNSPECIFIED', 'GEN_1', 'GEN_2']))
      .exactOptional()
      .openapi({ description: 'The Cloud Function environments this location supports.' }),
  })
  .openapi({ description: 'Extra GCF specific location information.', required: [] })
  .openapi('GoogleCloudFunctionsV2betaLocationMetadata')

const GoogleCloudFunctionsV2betaStateMessageSchema = z
  .object({
    message: z.string().exactOptional().openapi({ description: 'The message.' }),
    severity: z
      .enum(['SEVERITY_UNSPECIFIED', 'ERROR', 'WARNING', 'INFO'])
      .exactOptional()
      .openapi({ description: 'Severity of the state message.' }),
    type: z
      .string()
      .exactOptional()
      .openapi({ description: 'One-word CamelCase type of the state message.' }),
  })
  .openapi({
    description: 'Informational messages about the state of the Cloud Function or Operation.',
    required: [],
  })
  .openapi('GoogleCloudFunctionsV2betaStateMessage')

const GoogleCloudFunctionsV2betaStageSchema = z
  .object({
    message: z.string().exactOptional().openapi({ description: 'Message describing the Stage' }),
    name: z
      .enum([
        'NAME_UNSPECIFIED',
        'ARTIFACT_REGISTRY',
        'BUILD',
        'SERVICE',
        'TRIGGER',
        'SERVICE_ROLLBACK',
        'TRIGGER_ROLLBACK',
      ])
      .exactOptional()
      .openapi({ description: 'Name of the Stage. This will be unique for each Stage.' }),
    resource: z.string().exactOptional().openapi({ description: 'Resource of the Stage' }),
    resourceUri: z
      .string()
      .exactOptional()
      .openapi({ description: 'Link to the current Stage resource' }),
    state: z
      .enum(['STATE_UNSPECIFIED', 'NOT_STARTED', 'IN_PROGRESS', 'COMPLETE'])
      .exactOptional()
      .openapi({ description: 'Current state of the Stage' }),
    stateMessages: z
      .array(GoogleCloudFunctionsV2betaStateMessageSchema)
      .exactOptional()
      .openapi({ description: 'State messages from the current Stage.' }),
  })
  .openapi({ description: 'Each Stage of the deployment process', required: [] })
  .openapi('GoogleCloudFunctionsV2betaStage')

const GoogleCloudFunctionsV2betaOperationMetadataSchema = z
  .object({
    apiVersion: z
      .string()
      .exactOptional()
      .openapi({ description: 'API version used to start the operation.' }),
    cancelRequested: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Identifies whether the user has requested cancellation of the operation. Operations that have successfully been cancelled have google.longrunning.Operation.error value with a google.rpc.Status.code of 1, corresponding to `Code.CANCELLED`.',
      }),
    createTime: z
      .string()
      .exactOptional()
      .openapi({ description: 'The time the operation was created.' }),
    endTime: z
      .string()
      .exactOptional()
      .openapi({ description: 'The time the operation finished running.' }),
    operationType: z
      .enum([
        'OPERATIONTYPE_UNSPECIFIED',
        'CREATE_FUNCTION',
        'UPDATE_FUNCTION',
        'DELETE_FUNCTION',
        'REDIRECT_FUNCTION_UPGRADE_TRAFFIC',
        'ROLLBACK_FUNCTION_UPGRADE_TRAFFIC',
        'SETUP_FUNCTION_UPGRADE_CONFIG',
        'ABORT_FUNCTION_UPGRADE',
        'COMMIT_FUNCTION_UPGRADE',
      ])
      .exactOptional()
      .openapi({ description: 'The operation type.' }),
    requestResource: z
      .record(
        z.string(),
        z
          .any()
          .openapi({
            description: 'Properties of the object. Contains field @type with type URL.',
          }),
      )
      .exactOptional()
      .openapi({ description: 'The original request that started the operation.' }),
    sourceToken: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'An identifier for Firebase function sources. Disclaimer: This field is only supported for Firebase function deployments.',
      }),
    stages: z
      .array(GoogleCloudFunctionsV2betaStageSchema)
      .exactOptional()
      .openapi({ description: 'Mechanism for reporting in-progress stages' }),
    statusDetail: z
      .string()
      .exactOptional()
      .openapi({ description: 'Human-readable status of the operation, if any.' }),
    target: z
      .string()
      .exactOptional()
      .openapi({ description: 'Server-defined resource path for the target of the operation.' }),
    verb: z
      .string()
      .exactOptional()
      .openapi({ description: 'Name of the verb executed by the operation.' }),
  })
  .openapi({ description: 'Represents the metadata of the long-running operation.', required: [] })
  .openapi('GoogleCloudFunctionsV2betaOperationMetadata')

const ListFunctionsResponseSchema = z
  .object({
    functions: z
      .array(FunctionSchema)
      .exactOptional()
      .openapi({ description: 'The functions that match the request.' }),
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
      .openapi({
        description:
          'Locations that could not be reached. The response does not include any functions from these locations.',
      }),
  })
  .openapi({ description: 'Response for the `ListFunctions` method.', required: [] })
  .openapi('ListFunctionsResponse')

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
  .openapi({ description: 'A resource that represents a Google Cloud location.', required: [] })
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
          'The normal, successful response of the operation. If the original method returns no data on success, such as `Delete`, the response is `google.protobuf.Empty`. If the original method is standard `Get`/`Create`/`Update`, the response should be the resource. For other methods, the response should have the type `XxxResponse`, where `Xxx` is the original method name. For example, if the original method name is `TakeSnapshot()`, the inferred response type is `TakeSnapshotResponse`.',
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

const RuntimeSchema = z
  .object({
    decommissionDate: DateSchema.exactOptional().openapi({
      description: 'Decommission date for the runtime.',
    }),
    deprecationDate: DateSchema.exactOptional().openapi({
      description: 'Deprecation date for the runtime.',
    }),
    displayName: z
      .string()
      .exactOptional()
      .openapi({ description: "The user facing name, eg 'Go 1.13', 'Node.js 12', etc." }),
    environment: z
      .enum(['ENVIRONMENT_UNSPECIFIED', 'GEN_1', 'GEN_2'])
      .exactOptional()
      .openapi({ description: 'The environment for the runtime.' }),
    name: z
      .string()
      .exactOptional()
      .openapi({ description: "The name of the runtime, e.g., 'go113', 'nodejs12', etc." }),
    stage: z
      .enum([
        'RUNTIME_STAGE_UNSPECIFIED',
        'DEVELOPMENT',
        'ALPHA',
        'BETA',
        'GA',
        'DEPRECATED',
        'DECOMMISSIONED',
      ])
      .exactOptional()
      .openapi({ description: 'The stage of life this runtime is in, e.g., BETA, GA, etc.' }),
    warnings: z
      .array(z.string())
      .exactOptional()
      .openapi({ description: 'Warning messages, e.g., a deprecation warning.' }),
  })
  .openapi({
    description:
      'Describes a runtime and any special information (e.g., deprecation status) related to it.',
    required: [],
  })
  .openapi('Runtime')

const ListRuntimesResponseSchema = z
  .object({
    runtimes: z
      .array(RuntimeSchema)
      .exactOptional()
      .openapi({ description: 'The runtimes that match the request.' }),
  })
  .openapi({ description: 'Response for the `ListRuntimes` method.', required: [] })
  .openapi('ListRuntimesResponse')

const OperationMetadataV1Schema = z
  .object({
    buildId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The Cloud Build ID of the function created or updated by an API call. This field is only populated for Create and Update operations.',
      }),
    buildName: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The Cloud Build Name of the function deployment. This field is only populated for Create and Update operations. `projects//locations//builds/`.',
      }),
    request: z
      .record(
        z.string(),
        z
          .any()
          .openapi({
            description: 'Properties of the object. Contains field @type with type URL.',
          }),
      )
      .exactOptional()
      .openapi({ description: 'The original request that started the operation.' }),
    sourceToken: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'An identifier for Firebase function sources. Disclaimer: This field is only supported for Firebase function deployments.',
      }),
    target: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Target of the operation - for example `projects/project-1/locations/region-1/functions/function-1`',
      }),
    type: z
      .enum(['OPERATION_UNSPECIFIED', 'CREATE_FUNCTION', 'UPDATE_FUNCTION', 'DELETE_FUNCTION'])
      .exactOptional()
      .openapi({ description: 'Type of operation.' }),
    updateTime: z
      .string()
      .exactOptional()
      .openapi({ description: 'The last update timestamp of the operation.' }),
    versionId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Version id of the function created or updated by an API call. This field is only populated for Create and Update operations.',
      }),
  })
  .openapi({ description: 'Metadata describing an Operation', required: [] })
  .openapi('OperationMetadataV1')

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
      'An Identity and Access Management (IAM) policy, which specifies access controls for Google Cloud resources. A `Policy` is a collection of `bindings`. A `binding` binds one or more `members`, or principals, to a single `role`. Principals can be user accounts, service accounts, Google groups, and domains (such as G Suite). A `role` is a named list of permissions; each `role` can be an IAM predefined role or a user-created custom role. For some types of Google Cloud resources, a `binding` can also specify a `condition`, which is a logical expression that allows access to a resource only if the expression evaluates to `true`. A condition can add constraints based on attributes of the request, the resource, or both. To learn which resources support conditions in their IAM policies, see the [IAM documentation](https://cloud.google.com/iam/help/conditions/resource-policies). **JSON example:** ``` { "bindings": [ { "role": "roles/resourcemanager.organizationAdmin", "members": [ "user:mike@example.com", "group:admins@example.com", "domain:google.com", "serviceAccount:my-project-id@appspot.gserviceaccount.com" ] }, { "role": "roles/resourcemanager.organizationViewer", "members": [ "user:eve@example.com" ], "condition": { "title": "expirable access", "description": "Does not grant access after Sep 2020", "expression": "request.time < timestamp(\'2020-10-01T00:00:00.000Z\')", } } ], "etag": "BwWWja0YfJA=", "version": 3 } ``` **YAML example:** ``` bindings: - members: - user:mike@example.com - group:admins@example.com - domain:google.com - serviceAccount:my-project-id@appspot.gserviceaccount.com role: roles/resourcemanager.organizationAdmin - members: - user:eve@example.com role: roles/resourcemanager.organizationViewer condition: title: expirable access description: Does not grant access after Sep 2020 expression: request.time < timestamp(\'2020-10-01T00:00:00.000Z\') etag: BwWWja0YfJA= version: 3 ``` For a description of IAM and its features, see the [IAM documentation](https://cloud.google.com/iam/docs/).',
    required: [],
  })
  .openapi('Policy')

const RedirectFunctionUpgradeTrafficRequestSchema = z
  .object({})
  .openapi({ description: 'Request for the `RedirectFunctionUpgradeTraffic` method.' })
  .openapi('RedirectFunctionUpgradeTrafficRequest')

const RollbackFunctionUpgradeTrafficRequestSchema = z
  .object({})
  .openapi({ description: 'Request for the `RollbackFunctionUpgradeTraffic` method.' })
  .openapi('RollbackFunctionUpgradeTrafficRequest')

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

const SetupFunctionUpgradeConfigRequestSchema = z
  .object({})
  .openapi({ description: 'Request for the `SetupFunctionUpgradeConfig` method.' })
  .openapi('SetupFunctionUpgradeConfigRequest')

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

export const getV2NameRoute = createRoute({
  method: 'get',
  path: '/v2/{name}',
  tags: ['projects'],
  description:
    'Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.',
  operationId: 'cloudfunctions.projects.locations.operations.get',
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
            description: 'The name of the operation resource.',
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

export const deleteV2NameRoute = createRoute({
  method: 'delete',
  path: '/v2/{name}',
  tags: ['projects'],
  description:
    'Deletes a function with the given name from the specified project. If the given function is used by some trigger, the trigger will be updated to remove this function.',
  operationId: 'cloudfunctions.projects.locations.functions.delete',
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
            description: 'Required. The name of the function which should be deleted.',
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

export const patchV2NameRoute = createRoute({
  method: 'patch',
  path: '/v2/{name}',
  tags: ['projects'],
  description: 'Updates existing function.',
  operationId: 'cloudfunctions.projects.locations.functions.patch',
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
      updateMask: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'The list of fields to be updated. If no field mask is provided, all provided fields in the request will be updated.',
            in: 'query',
            name: 'updateMask',
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
            description:
              'A user-defined name of the function. Function names must be unique globally and match pattern `projects/*/locations/*/functions/*`',
            in: 'path',
            name: 'name',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: FunctionSchema } } },
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

export const getV2NameLocationsRoute = createRoute({
  method: 'get',
  path: '/v2/{name}/locations',
  tags: ['projects'],
  description: 'Lists information about the supported locations for this service.',
  operationId: 'cloudfunctions.projects.locations.list',
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

export const getV2NameOperationsRoute = createRoute({
  method: 'get',
  path: '/v2/{name}/operations',
  tags: ['projects'],
  description:
    "Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`.",
  operationId: 'cloudfunctions.projects.locations.operations.list',
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

export const postV2NameAbortFunctionUpgradeRoute = createRoute({
  method: 'post',
  path: '/v2/{name}:abortFunctionUpgrade',
  tags: ['projects'],
  description:
    'Aborts generation upgrade process for a function with the given name from the specified project. Deletes all 2nd Gen copy related configuration and resources which were created during the upgrade process.',
  operationId: 'cloudfunctions.projects.locations.functions.abortFunctionUpgrade',
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
            description: 'Required. The name of the function for which upgrade should be aborted.',
            in: 'path',
            name: 'name',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: AbortFunctionUpgradeRequestSchema } } },
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

export const postV2NameCommitFunctionUpgradeRoute = createRoute({
  method: 'post',
  path: '/v2/{name}:commitFunctionUpgrade',
  tags: ['projects'],
  description:
    'Finalizes the upgrade after which function upgrade can not be rolled back. This is the last step of the multi step process to upgrade 1st Gen functions to 2nd Gen. Deletes all original 1st Gen related configuration and resources.',
  operationId: 'cloudfunctions.projects.locations.functions.commitFunctionUpgrade',
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
              'Required. The name of the function for which upgrade should be finalized.',
            in: 'path',
            name: 'name',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: CommitFunctionUpgradeRequestSchema } } },
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

export const postV2NameGenerateDownloadUrlRoute = createRoute({
  method: 'post',
  path: '/v2/{name}:generateDownloadUrl',
  tags: ['projects'],
  description:
    'Returns a signed URL for downloading deployed function source code. The URL is only valid for a limited period and should be used within 30 minutes of generation. For more information about the signed URL usage see: https://cloud.google.com/storage/docs/access-control/signed-urls',
  operationId: 'cloudfunctions.projects.locations.functions.generateDownloadUrl',
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
              'Required. The name of function for which source code Google Cloud Storage signed URL should be generated.',
            in: 'path',
            name: 'name',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: GenerateDownloadUrlRequestSchema } } },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: GenerateDownloadUrlResponseSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
  ],
})

export const postV2NameRedirectFunctionUpgradeTrafficRoute = createRoute({
  method: 'post',
  path: '/v2/{name}:redirectFunctionUpgradeTraffic',
  tags: ['projects'],
  description:
    'Changes the traffic target of a function from the original 1st Gen function to the 2nd Gen copy. This is the second step of the multi step process to upgrade 1st Gen functions to 2nd Gen. After this operation, all new traffic will be served by 2nd Gen copy.',
  operationId: 'cloudfunctions.projects.locations.functions.redirectFunctionUpgradeTraffic',
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
              'Required. The name of the function for which traffic target should be changed to 2nd Gen from 1st Gen.',
            in: 'path',
            name: 'name',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: RedirectFunctionUpgradeTrafficRequestSchema } },
    },
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

export const postV2NameRollbackFunctionUpgradeTrafficRoute = createRoute({
  method: 'post',
  path: '/v2/{name}:rollbackFunctionUpgradeTraffic',
  tags: ['projects'],
  description:
    'Reverts the traffic target of a function from the 2nd Gen copy to the original 1st Gen function. After this operation, all new traffic would be served by the 1st Gen.',
  operationId: 'cloudfunctions.projects.locations.functions.rollbackFunctionUpgradeTraffic',
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
              'Required. The name of the function for which traffic target should be changed back to 1st Gen from 2nd Gen.',
            in: 'path',
            name: 'name',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: RollbackFunctionUpgradeTrafficRequestSchema } },
    },
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

export const postV2NameSetupFunctionUpgradeConfigRoute = createRoute({
  method: 'post',
  path: '/v2/{name}:setupFunctionUpgradeConfig',
  tags: ['projects'],
  description:
    'Creates a 2nd Gen copy of the function configuration based on the 1st Gen function with the given name. This is the first step of the multi step process to upgrade 1st Gen functions to 2nd Gen. Only 2nd Gen configuration is setup as part of this request and traffic continues to be served by 1st Gen.',
  operationId: 'cloudfunctions.projects.locations.functions.setupFunctionUpgradeConfig',
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
              'Required. The name of the function which should have configuration copied for upgrade.',
            in: 'path',
            name: 'name',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: SetupFunctionUpgradeConfigRequestSchema } } },
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

export const getV2ParentFunctionsRoute = createRoute({
  method: 'get',
  path: '/v2/{parent}/functions',
  tags: ['projects'],
  description: 'Returns a list of functions that belong to the requested project.',
  operationId: 'cloudfunctions.projects.locations.functions.list',
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
              'The filter for Functions that match the filter expression, following the syntax outlined in https://google.aip.dev/160.',
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
              'The sorting order of the resources returned. Value should be a comma separated list of fields. The default sorting oder is ascending. See https://google.aip.dev/132#ordering.',
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
              'Maximum number of functions to return per call. The largest allowed page_size is 1,000, if the page_size is omitted or specified as greater than 1,000 then it will be replaced as 1,000. The size of the list response can be less than specified when used with filters.',
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
              'The value returned by the last `ListFunctionsResponse`; indicates that this is a continuation of a prior `ListFunctions` call, and that the system should return the next page of data.',
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
              'Required. The project and location from which the function should be listed, specified in the format `projects/*/locations/*` If you want to list functions in all locations, use "-" in place of a location. When listing functions in all locations, if one or more location(s) are unreachable, the response will contain functions from all reachable locations along with the names of any unreachable locations.',
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
      content: { 'application/json': { schema: ListFunctionsResponseSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
  ],
})

export const postV2ParentFunctionsRoute = createRoute({
  method: 'post',
  path: '/v2/{parent}/functions',
  tags: ['projects'],
  description:
    'Creates a new function. If a function with the given name already exists in the specified project, the long running operation will return `ALREADY_EXISTS` error.',
  operationId: 'cloudfunctions.projects.locations.functions.create',
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
      functionId: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              "The ID to use for the function, which will become the final component of the function's resource name. This value should be 4-63 characters, and valid characters are /a-z-/.",
            in: 'query',
            name: 'functionId',
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
              'Required. The project and location in which the function should be created, specified in the format `projects/*/locations/*`',
            in: 'path',
            name: 'parent',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: FunctionSchema } } },
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

export const postV2ParentFunctionsGenerateUploadUrlRoute = createRoute({
  method: 'post',
  path: '/v2/{parent}/functions:generateUploadUrl',
  tags: ['projects'],
  description:
    'Returns a signed URL for uploading a function source code. For more information about the signed URL usage see: https://cloud.google.com/storage/docs/access-control/signed-urls. Once the function source code upload is complete, the used signed URL should be provided in CreateFunction or UpdateFunction request as a reference to the function source code. When uploading source code to the generated signed URL, please follow these restrictions: * Source file type should be a zip file. * No credentials should be attached - the signed URLs provide access to the target bucket using internal service identity; if credentials were attached, the identity from the credentials would be used, but that identity does not have permissions to upload files to the URL. When making a HTTP PUT request, specify this header: * `content-type: application/zip` Do not specify this header: * `Authorization: Bearer YOUR_TOKEN`',
  operationId: 'cloudfunctions.projects.locations.functions.generateUploadUrl',
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
      parent: z
        .string()
        .openapi({
          param: {
            description:
              'Required. The project and location in which the Google Cloud Storage signed URL should be generated, specified in the format `projects/*/locations/*`.',
            in: 'path',
            name: 'parent',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: GenerateUploadUrlRequestSchema } } },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: GenerateUploadUrlResponseSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
  ],
})

export const getV2ParentRuntimesRoute = createRoute({
  method: 'get',
  path: '/v2/{parent}/runtimes',
  tags: ['projects'],
  description: 'Returns a list of runtimes that are supported for the requested project.',
  operationId: 'cloudfunctions.projects.locations.runtimes.list',
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
              'The filter for Runtimes that match the filter expression, following the syntax outlined in https://google.aip.dev/160.',
            in: 'query',
            name: 'filter',
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
              'Required. The project and location from which the runtimes should be listed, specified in the format `projects/*/locations/*`',
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
      content: { 'application/json': { schema: ListRuntimesResponseSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
  ],
})

export const getV2ResourceGetIamPolicyRoute = createRoute({
  method: 'get',
  path: '/v2/{resource}:getIamPolicy',
  tags: ['projects'],
  description:
    'Gets the access control policy for a resource. Returns an empty policy if the resource exists and does not have a policy set.',
  operationId: 'cloudfunctions.projects.locations.functions.getIamPolicy',
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

export const postV2ResourceSetIamPolicyRoute = createRoute({
  method: 'post',
  path: '/v2/{resource}:setIamPolicy',
  tags: ['projects'],
  description:
    'Sets the access control policy on the specified resource. Replaces any existing policy. Can return `NOT_FOUND`, `INVALID_ARGUMENT`, and `PERMISSION_DENIED` errors.',
  operationId: 'cloudfunctions.projects.locations.functions.setIamPolicy',
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

export const postV2ResourceTestIamPermissionsRoute = createRoute({
  method: 'post',
  path: '/v2/{resource}:testIamPermissions',
  tags: ['projects'],
  description:
    'Returns permissions that a caller has on the specified resource. If the resource does not exist, this will return an empty set of permissions, not a `NOT_FOUND` error. Note: This operation is designed to be used for building permission-aware UIs and command-line tools, not for authorization checking. This operation may "fail open" without warning.',
  operationId: 'cloudfunctions.projects.locations.functions.testIamPermissions',
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
