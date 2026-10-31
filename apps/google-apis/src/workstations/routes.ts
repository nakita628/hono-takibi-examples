import { createRoute, z } from '@hono/zod-openapi'

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

const CancelOperationRequestSchema = z
  .object({})
  .openapi({ description: 'The request message for Operations.CancelOperation.' })
  .openapi('CancelOperationRequest')

const ContainerSchema = z
  .object({
    args: z
      .array(z.string())
      .exactOptional()
      .openapi({ description: 'Arguments passed to the entrypoint.' }),
    command: z
      .array(z.string())
      .exactOptional()
      .openapi({ description: 'If set, overrides the default ENTRYPOINT specified by the image.' }),
    env: z
      .record(z.string(), z.string())
      .exactOptional()
      .openapi({ description: 'Environment variables passed to the container.' }),
    image: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "Docker image defining the container. This image must be accessible by the config's service account.",
      }),
    runAsUser: z
      .int32()
      .exactOptional()
      .openapi({
        description: 'If set, overrides the USER specified in the image with the given uid.',
      }),
    workingDir: z
      .string()
      .exactOptional()
      .openapi({ description: 'If set, overrides the default DIR specified by the image.' }),
  })
  .openapi({ description: 'A Docker container.', required: [] })
  .openapi('Container')

const CustomerEncryptionKeySchema = z
  .object({
    kmsKey: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Immutable. The name of the Google Cloud KMS encryption key. For example, `projects/PROJECT_ID/locations/REGION/keyRings/KEY_RING/cryptoKeys/KEY_NAME`.',
      }),
    kmsKeyServiceAccount: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Immutable. The service account to use with the specified KMS key. We recommend that you use a separate service account and follow KMS best practices. For more information, see [Separation of duties](https://cloud.google.com/kms/docs/separation-of-duties) and `gcloud kms keys add-iam-policy-binding` [`--member`](https://cloud.google.com/sdk/gcloud/reference/kms/keys/add-iam-policy-binding#--member).',
      }),
  })
  .openapi({
    description:
      'A customer-managed encryption key for the Compute Engine resources of this workstation configuration.',
    required: [],
  })
  .openapi('CustomerEncryptionKey')

const GceConfidentialInstanceConfigSchema = z
  .object({
    enableConfidentialCompute: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Whether the instance has confidential compute enabled.' }),
  })
  .openapi({
    description: 'A set of Compute Engine Confidential VM instance options.',
    required: [],
  })
  .openapi('GceConfidentialInstanceConfig')

const GceShieldedInstanceConfigSchema = z
  .object({
    enableIntegrityMonitoring: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Whether the instance has integrity monitoring enabled.' }),
    enableSecureBoot: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Whether the instance has Secure Boot enabled.' }),
    enableVtpm: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Whether the instance has the vTPM enabled.' }),
  })
  .openapi({ description: 'A set of Compute Engine Shielded instance options.', required: [] })
  .openapi('GceShieldedInstanceConfig')

const GceInstanceSchema = z
  .object({
    bootDiskSizeGb: z
      .int32()
      .exactOptional()
      .openapi({ description: 'Size of the boot disk in GB. Defaults to 50.' }),
    confidentialInstanceConfig: GceConfidentialInstanceConfigSchema.exactOptional().openapi({
      description: 'A set of Compute Engine Confidential VM instance options.',
    }),
    disablePublicIpAddresses: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Whether instances have no public IP address.' }),
    machineType: z
      .string()
      .exactOptional()
      .openapi({ description: 'The name of a Compute Engine machine type.' }),
    poolSize: z
      .int32()
      .exactOptional()
      .openapi({ description: 'Number of instances to pool for faster workstation starup.' }),
    serviceAccount: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Email address of the service account that will be used on VM instances used to support this config. If not set, VMs will run with a Google-managed service account. This service account must have permission to pull the specified container image, otherwise the image must be publicly accessible.',
      }),
    shieldedInstanceConfig: GceShieldedInstanceConfigSchema.exactOptional().openapi({
      description: 'A set of Compute Engine Shielded instance options.',
    }),
    tags: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description: 'Network tags to add to the Compute Engine machines backing the Workstations.',
      }),
  })
  .openapi({ description: 'A runtime using a Compute Engine instance.', required: [] })
  .openapi('GceInstance')

const GceRegionalPersistentDiskSchema = z
  .object({
    diskType: z
      .string()
      .exactOptional()
      .openapi({ description: 'Type of the disk to use. Defaults to pd-standard.' }),
    fsType: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Type of file system that the disk should be formatted with. The workstation image must support this file system type. Must be empty if source_snapshot is set. Defaults to ext4.',
      }),
    reclaimPolicy: z
      .enum(['RECLAIM_POLICY_UNSPECIFIED', 'DELETE', 'RETAIN'])
      .exactOptional()
      .openapi({
        description:
          'What should happen to the disk after the workstation is deleted. Defaults to DELETE.',
      }),
    sizeGb: z
      .int32()
      .exactOptional()
      .openapi({
        description:
          'Size of the disk in GB. Must be empty if source_snapshot is set. Defaults to 200.',
      }),
    sourceSnapshot: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Name of the snapshot to use as the source for the disk. If set, size_gb and fs_type must be empty.',
      }),
  })
  .openapi({
    description: 'A PersistentDirectory backed by a Compute Engine regional persistent disk.',
    required: [],
  })
  .openapi('GceRegionalPersistentDisk')

const GenerateAccessTokenRequestSchema = z
  .object({
    expireTime: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "Desired expiration time of the access token. This value must be at most 24 hours in the future. If a value is not specified, the token's expiration time will be set to a default value of 1 hour in the future.",
      }),
    ttl: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "Desired lifetime duration of the access token. This value must be at most 24 hours. If a value is not specified, the token's lifetime will be set to a default value of 1 hour.",
      }),
  })
  .openapi({ description: 'Request message for GenerateAccessToken.', required: [] })
  .openapi('GenerateAccessTokenRequest')

const GenerateAccessTokenResponseSchema = z
  .object({
    accessToken: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "The generated bearer access token. To use this token, include it in an Authorization header of an HTTP request sent to the associated workstation's hostname, for example, `Authorization: Bearer `.",
      }),
    expireTime: z
      .string()
      .exactOptional()
      .openapi({ description: 'Time at which the generated token will expire.' }),
  })
  .openapi({ description: 'Response message for GenerateAccessToken.', required: [] })
  .openapi('GenerateAccessTokenResponse')

const GoogleProtobufEmptySchema = z
  .object({})
  .openapi({
    description:
      'A generic empty message that you can re-use to avoid defining duplicated empty messages in your APIs. A typical example is to use it as the request or the response type of an API method. For instance: service Foo { rpc Bar(google.protobuf.Empty) returns (google.protobuf.Empty); }',
  })
  .openapi('GoogleProtobufEmpty')

const HostSchema = z
  .object({
    gceInstance: GceInstanceSchema.exactOptional().openapi({
      description: 'Specifies a Compute Engine instance as the host.',
    }),
  })
  .openapi({ description: 'Runtime host for a workstation.', required: [] })
  .openapi('Host')

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

const PersistentDirectorySchema = z
  .object({
    gcePd: GceRegionalPersistentDiskSchema.exactOptional().openapi({
      description: 'A PersistentDirectory backed by a Compute Engine persistent disk.',
    }),
    mountPath: z
      .string()
      .exactOptional()
      .openapi({ description: 'Location of this directory in the running workstation.' }),
  })
  .openapi({ description: 'A directory to persist across workstation sessions.', required: [] })
  .openapi('PersistentDirectory')

const WorkstationConfigSchema = z
  .object({
    annotations: z
      .record(z.string(), z.string())
      .exactOptional()
      .openapi({ description: 'Client-specified annotations.' }),
    conditions: z
      .array(StatusSchema)
      .exactOptional()
      .openapi({
        description: 'Output only. Status conditions describing the current resource state.',
        readOnly: true,
      }),
    container: ContainerSchema.exactOptional().openapi({
      description:
        'Container that will be run for each workstation using this configuration when that workstation is started.',
    }),
    createTime: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Output only. Time when this resource was created.',
        readOnly: true,
      }),
    degraded: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Output only. Whether this resource is in degraded mode, in which case it may require user action to restore full functionality. Details can be found in the `conditions` field.',
        readOnly: true,
      }),
    deleteTime: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Output only. Time when this resource was soft-deleted.',
        readOnly: true,
      }),
    displayName: z
      .string()
      .exactOptional()
      .openapi({ description: 'Human-readable name for this resource.' }),
    enableAuditAgent: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Whether to enable linux auditd logging on the workstation. When enabled, a service account must also be specified that has logging.buckets.write permission on the project. Operating system audit logging is distinct from [Cloud Audit Logs](https://cloud.google.com/workstations/docs/audit-logging).',
      }),
    encryptionKey: CustomerEncryptionKeySchema.exactOptional().openapi({
      description:
        'Immutable. Encrypts resources of this workstation configuration using a customer-managed encryption key. If specified, the boot disk of the Compute Engine instance and the persistent disk are encrypted using this encryption key. If this field is not set, the disks are encrypted using a generated key. Customer-managed encryption keys do not protect disk metadata. If the customer-managed encryption key is rotated, when the workstation instance is stopped, the system attempts to recreate the persistent disk with the new version of the key. Be sure to keep older versions of the key until the persistent disk is recreated. Otherwise, data on the persistent disk will be lost. If the encryption key is revoked, the workstation session will automatically be stopped within 7 hours. Immutable after workstation config is created.',
    }),
    etag: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Checksum computed by the server. May be sent on update and delete requests to ensure that the client has an up-to-date value before proceeding.',
      }),
    host: HostSchema.exactOptional().openapi({ description: 'Runtime host for the workstation.' }),
    idleTimeout: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "How long to wait before automatically stopping an instance that hasn't received any user traffic. A value of 0 indicates that this instance should never time out due to idleness. Defaults to 20 minutes.",
      }),
    labels: z
      .record(z.string(), z.string())
      .exactOptional()
      .openapi({
        description:
          'Client-specified labels that are applied to the resource and that are also propagated to the underlying Compute Engine resources.',
      }),
    name: z.string().exactOptional().openapi({ description: 'Full name of this resource.' }),
    persistentDirectories: z
      .array(PersistentDirectorySchema)
      .exactOptional()
      .openapi({ description: 'Directories to persist across workstation sessions.' }),
    reconciling: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Output only. Indicates whether this resource is currently being updated to match its intended state.',
        readOnly: true,
      }),
    runningTimeout: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'How long to wait before automatically stopping a workstation after it started. A value of 0 indicates that workstations using this configuration should never time out. Must be greater than 0 and less than 24 hours if encryption_key is set. Defaults to 12 hours.',
      }),
    uid: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Output only. A system-assigned unique identified for this resource.',
        readOnly: true,
      }),
    updateTime: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Output only. Time when this resource was most recently updated.',
        readOnly: true,
      }),
  })
  .openapi({
    description:
      'A set of configuration options describing how a workstation will be run. Workstation configurations are intended to be shared across multiple workstations.',
    required: [],
  })
  .openapi('WorkstationConfig')

const ListUsableWorkstationConfigsResponseSchema = z
  .object({
    nextPageToken: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Token to retrieve the next page of results, or empty if there are no more results in the list.',
      }),
    unreachable: z
      .array(z.string())
      .exactOptional()
      .openapi({ description: 'Unreachable resources.' }),
    workstationConfigs: z
      .array(WorkstationConfigSchema)
      .exactOptional()
      .openapi({ description: 'The requested configs.' }),
  })
  .openapi({ description: 'Response message for ListUsableWorkstationConfigs.', required: [] })
  .openapi('ListUsableWorkstationConfigsResponse')

const WorkstationSchema = z
  .object({
    annotations: z
      .record(z.string(), z.string())
      .exactOptional()
      .openapi({ description: 'Client-specified annotations.' }),
    createTime: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Output only. Time when this resource was created.',
        readOnly: true,
      }),
    deleteTime: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Output only. Time when this resource was soft-deleted.',
        readOnly: true,
      }),
    displayName: z
      .string()
      .exactOptional()
      .openapi({ description: 'Human-readable name for this resource.' }),
    env: z
      .record(z.string(), z.string())
      .exactOptional()
      .openapi({ description: 'Environment variables passed to the workstation container.' }),
    etag: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Checksum computed by the server. May be sent on update and delete requests to ensure that the client has an up-to-date value before proceeding.',
      }),
    host: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Output only. Host to which clients can send HTTPS traffic that will be received by the workstation. Authorized traffic will be received to the workstation as HTTP on port 80. To send traffic to a different port, clients may prefix the host with the destination port in the format `{port}-{host}`.',
        readOnly: true,
      }),
    labels: z
      .record(z.string(), z.string())
      .exactOptional()
      .openapi({
        description:
          'Client-specified labels that are applied to the resource and that are also propagated to the underlying Compute Engine resources.',
      }),
    name: z.string().exactOptional().openapi({ description: 'Full name of this resource.' }),
    reconciling: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Output only. Indicates whether this resource is currently being updated to match its intended state.',
        readOnly: true,
      }),
    state: z
      .enum([
        'STATE_UNSPECIFIED',
        'STATE_STARTING',
        'STATE_RUNNING',
        'STATE_STOPPING',
        'STATE_STOPPED',
      ])
      .exactOptional()
      .openapi({ description: 'Output only. Current state of the workstation.', readOnly: true }),
    uid: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Output only. A system-assigned unique identified for this resource.',
        readOnly: true,
      }),
    updateTime: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Output only. Time when this resource was most recently updated.',
        readOnly: true,
      }),
  })
  .openapi({
    description: 'A single instance of a developer workstation with its own persistent storage.',
    required: [],
  })
  .openapi('Workstation')

const ListUsableWorkstationsResponseSchema = z
  .object({
    nextPageToken: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Token to retrieve the next page of results, or empty if there are no more results in the list.',
      }),
    unreachable: z
      .array(z.string())
      .exactOptional()
      .openapi({ description: 'Unreachable resources.' }),
    workstations: z
      .array(WorkstationSchema)
      .exactOptional()
      .openapi({ description: 'The requested workstations.' }),
  })
  .openapi({ description: 'Response message for ListUsableWorkstations.', required: [] })
  .openapi('ListUsableWorkstationsResponse')

const PrivateClusterConfigSchema = z
  .object({
    allowedProjects: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description:
          "Additional projects that are allowed to attach to the workstation cluster's service attachment. By default, the workstation cluster's project and the VPC host project (if different) are allowed.",
      }),
    clusterHostname: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Output only. Hostname for the workstation cluster. This field will be populated only when private endpoint is enabled. To access workstations in the cluster, create a new DNS zone mapping this domain name to an internal IP address and a forwarding rule mapping that address to the service attachment.',
        readOnly: true,
      }),
    enablePrivateEndpoint: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Immutable. Whether Workstations endpoint is private.' }),
    serviceAttachmentUri: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Output only. Service attachment URI for the workstation cluster. The service attachemnt is created when private endpoint is enabled. To access workstations in the cluster, configure access to the managed service using [Private Service Connect](https://cloud.google.com/vpc/docs/configure-private-service-connect-services).',
        readOnly: true,
      }),
  })
  .openapi({ description: 'Configuration options for private clusters.', required: [] })
  .openapi('PrivateClusterConfig')

const WorkstationClusterSchema = z
  .object({
    annotations: z
      .record(z.string(), z.string())
      .exactOptional()
      .openapi({ description: 'Client-specified annotations.' }),
    conditions: z
      .array(StatusSchema)
      .exactOptional()
      .openapi({
        description: 'Output only. Status conditions describing the current resource state.',
        readOnly: true,
      }),
    controlPlaneIp: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Output only. The private IP address of the control plane for this cluster. Workstation VMs need access to this IP address to work with the service, so please ensure your firewall rules allow egress from the Workstation VMs to this address.',
        readOnly: true,
      }),
    createTime: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Output only. Time when this resource was created.',
        readOnly: true,
      }),
    degraded: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Output only. Whether this resource is in degraded mode, in which case it may require user action to restore full functionality. Details can be found in the `conditions` field.',
        readOnly: true,
      }),
    deleteTime: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Output only. Time when this resource was soft-deleted.',
        readOnly: true,
      }),
    displayName: z
      .string()
      .exactOptional()
      .openapi({ description: 'Human-readable name for this resource.' }),
    etag: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Checksum computed by the server. May be sent on update and delete requests to ensure that the client has an up-to-date value before proceeding.',
      }),
    labels: z
      .record(z.string(), z.string())
      .exactOptional()
      .openapi({
        description:
          'Client-specified labels that are applied to the resource and that are also propagated to the underlying Compute Engine resources.',
      }),
    name: z.string().exactOptional().openapi({ description: 'Full name of this resource.' }),
    network: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Immutable. Name of the Compute Engine network in which instances associated with this cluster will be created.',
      }),
    privateClusterConfig: PrivateClusterConfigSchema.exactOptional().openapi({
      description: 'Configuration for private cluster.',
    }),
    reconciling: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Output only. Indicates whether this resource is currently being updated to match its intended state.',
        readOnly: true,
      }),
    subnetwork: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Immutable. Name of the Compute Engine subnetwork in which instances associated with this cluster will be created. Must be part of the subnetwork specified for this cluster.',
      }),
    uid: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Output only. A system-assigned unique identified for this resource.',
        readOnly: true,
      }),
    updateTime: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Output only. Time when this resource was most recently updated.',
        readOnly: true,
      }),
  })
  .openapi({
    description:
      'A grouping of workstation configurations and the associated workstations in that region.',
    required: [],
  })
  .openapi('WorkstationCluster')

const ListWorkstationClustersResponseSchema = z
  .object({
    nextPageToken: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Token to retrieve the next page of results, or empty if there are no more results in the list.',
      }),
    unreachable: z
      .array(z.string())
      .exactOptional()
      .openapi({ description: 'Unreachable resources.' }),
    workstationClusters: z
      .array(WorkstationClusterSchema)
      .exactOptional()
      .openapi({ description: 'The requested workstation clusters.' }),
  })
  .openapi({ description: 'Response message for ListWorkstationClusters.', required: [] })
  .openapi('ListWorkstationClustersResponse')

const ListWorkstationConfigsResponseSchema = z
  .object({
    nextPageToken: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Token to retrieve the next page of results, or empty if there are no more results in the list.',
      }),
    unreachable: z
      .array(z.string())
      .exactOptional()
      .openapi({ description: 'Unreachable resources.' }),
    workstationConfigs: z
      .array(WorkstationConfigSchema)
      .exactOptional()
      .openapi({ description: 'The requested configs.' }),
  })
  .openapi({ description: 'Response message for ListWorkstationConfigs.', required: [] })
  .openapi('ListWorkstationConfigsResponse')

const ListWorkstationsResponseSchema = z
  .object({
    nextPageToken: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Token to retrieve the next page of results, or empty if there are no more results in the list.',
      }),
    unreachable: z
      .array(z.string())
      .exactOptional()
      .openapi({ description: 'Unreachable resources.' }),
    workstations: z
      .array(WorkstationSchema)
      .exactOptional()
      .openapi({ description: 'The requested workstations.' }),
  })
  .openapi({ description: 'Response message for ListWorkstations.', required: [] })
  .openapi('ListWorkstationsResponse')

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
      .openapi({
        description: 'Output only. Time that the operation was created.',
        readOnly: true,
      }),
    endTime: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Output only. Time that the operation finished running.',
        readOnly: true,
      }),
    requestedCancellation: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Output only. Identifies whether the user has requested cancellation of the operation.',
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
  .openapi({ description: 'Metadata for long-running operations.', required: [] })
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

const StartWorkstationRequestSchema = z
  .object({
    etag: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'If set, the request will be rejected if the latest version of the workstation on the server does not have this etag.',
      }),
    validateOnly: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'If set, validate the request and preview the review, but do not actually apply it.',
      }),
  })
  .openapi({ description: 'Request message for StartWorkstation.', required: [] })
  .openapi('StartWorkstationRequest')

const StopWorkstationRequestSchema = z
  .object({
    etag: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'If set, the request will be rejected if the latest version of the workstation on the server does not have this etag.',
      }),
    validateOnly: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'If set, validate the request and preview the review, but do not actually apply it.',
      }),
  })
  .openapi({ description: 'Request message for StopWorkstation.', required: [] })
  .openapi('StopWorkstationRequest')

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

export const getV1betaNameRoute = createRoute({
  method: 'get',
  path: '/v1beta/{name}',
  tags: ['projects'],
  description: 'Returns the requested workstation.',
  operationId:
    'workstations.projects.locations.workstationClusters.workstationConfigs.workstations.get',
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
            description: 'Required. Name of the requested resource.',
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
      content: { 'application/json': { schema: WorkstationSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
  ],
})

export const deleteV1betaNameRoute = createRoute({
  method: 'delete',
  path: '/v1beta/{name}',
  tags: ['projects'],
  description: 'Deletes the specified workstation.',
  operationId:
    'workstations.projects.locations.workstationClusters.workstationConfigs.workstations.delete',
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
      etag: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'If set, the request will be rejected if the latest version of the workstation on the server does not have this etag.',
            in: 'query',
            name: 'etag',
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
              'If set, validate the request and preview the review, but do not actually apply it.',
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
            description: 'Required. Name of the workstation to delete.',
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

export const patchV1betaNameRoute = createRoute({
  method: 'patch',
  path: '/v1beta/{name}',
  tags: ['projects'],
  description: 'Updates an existing workstation.',
  operationId:
    'workstations.projects.locations.workstationClusters.workstationConfigs.workstations.patch',
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
              'If set, and the config is not found, a new config will be created. In this situation, update_mask is ignored.',
            in: 'query',
            name: 'allowMissing',
            schema: { type: 'boolean' },
            required: false,
          },
        }),
      updateMask: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Required. Mask specifying which fields in the config should be updated.',
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
              'If set, validate the request and preview the review, but do not actually apply it.',
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
            description: 'Full name of this resource.',
            in: 'path',
            name: 'name',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: WorkstationSchema } } },
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

export const getV1betaNameOperationsRoute = createRoute({
  method: 'get',
  path: '/v1beta/{name}/operations',
  tags: ['projects'],
  description:
    "Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`.",
  operationId: 'workstations.projects.locations.operations.list',
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

export const postV1betaNameCancelRoute = createRoute({
  method: 'post',
  path: '/v1beta/{name}:cancel',
  tags: ['projects'],
  description:
    "Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of 1, corresponding to `Code.CANCELLED`.",
  operationId: 'workstations.projects.locations.operations.cancel',
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
      content: { 'application/json': { schema: GoogleProtobufEmptySchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
  ],
})

export const postV1betaNameStartRoute = createRoute({
  method: 'post',
  path: '/v1beta/{name}:start',
  tags: ['projects'],
  description: 'Starts running a workstation so that users can connect to it.',
  operationId:
    'workstations.projects.locations.workstationClusters.workstationConfigs.workstations.start',
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
            description: 'Required. Name of the workstation to start.',
            in: 'path',
            name: 'name',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: StartWorkstationRequestSchema } } },
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

export const postV1betaNameStopRoute = createRoute({
  method: 'post',
  path: '/v1beta/{name}:stop',
  tags: ['projects'],
  description: 'Stops running a workstation, reducing costs.',
  operationId:
    'workstations.projects.locations.workstationClusters.workstationConfigs.workstations.stop',
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
            description: 'Required. Name of the workstation to stop.',
            in: 'path',
            name: 'name',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: StopWorkstationRequestSchema } } },
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

export const getV1betaParentWorkstationClustersRoute = createRoute({
  method: 'get',
  path: '/v1beta/{parent}/workstationClusters',
  tags: ['projects'],
  description: 'Returns all workstation clusters in the specified location.',
  operationId: 'workstations.projects.locations.workstationClusters.list',
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
            description: 'Maximum number of items to return.',
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
            description: 'next_page_token value returned from a previous List request, if any.',
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
            description: 'Required. Parent resource name.',
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
      content: { 'application/json': { schema: ListWorkstationClustersResponseSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
  ],
})

export const postV1betaParentWorkstationClustersRoute = createRoute({
  method: 'post',
  path: '/v1beta/{parent}/workstationClusters',
  tags: ['projects'],
  description: 'Creates a new workstation cluster.',
  operationId: 'workstations.projects.locations.workstationClusters.create',
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
      validateOnly: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            description:
              'If set, validate the request and preview the review, but do not actually apply it.',
            in: 'query',
            name: 'validateOnly',
            schema: { type: 'boolean' },
            required: false,
          },
        }),
      workstationClusterId: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Required. ID to use for the workstation cluster.',
            in: 'query',
            name: 'workstationClusterId',
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
            description: 'Required. Parent resource name.',
            in: 'path',
            name: 'parent',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: WorkstationClusterSchema } } },
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

export const getV1betaParentWorkstationConfigsRoute = createRoute({
  method: 'get',
  path: '/v1beta/{parent}/workstationConfigs',
  tags: ['projects'],
  description: 'Returns all workstation configurations in the specified cluster.',
  operationId: 'workstations.projects.locations.workstationClusters.workstationConfigs.list',
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
            description: 'Maximum number of items to return.',
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
            description: 'next_page_token value returned from a previous List request, if any.',
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
            description: 'Required. Parent resource name.',
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
      content: { 'application/json': { schema: ListWorkstationConfigsResponseSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
  ],
})

export const postV1betaParentWorkstationConfigsRoute = createRoute({
  method: 'post',
  path: '/v1beta/{parent}/workstationConfigs',
  tags: ['projects'],
  description: 'Creates a new workstation configuration.',
  operationId: 'workstations.projects.locations.workstationClusters.workstationConfigs.create',
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
      validateOnly: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            description:
              'If set, validate the request and preview the review, but do not actually apply it.',
            in: 'query',
            name: 'validateOnly',
            schema: { type: 'boolean' },
            required: false,
          },
        }),
      workstationConfigId: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Required. ID to use for the config.',
            in: 'query',
            name: 'workstationConfigId',
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
            description: 'Required. Parent resource name.',
            in: 'path',
            name: 'parent',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: WorkstationConfigSchema } } },
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

export const getV1betaParentWorkstationConfigsListUsableRoute = createRoute({
  method: 'get',
  path: '/v1beta/{parent}/workstationConfigs:listUsable',
  tags: ['projects'],
  description:
    'Returns all workstation configurations in the specified cluster on which the caller has the "workstations.workstation.create" permission.',
  operationId: 'workstations.projects.locations.workstationClusters.workstationConfigs.listUsable',
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
            description: 'Maximum number of items to return.',
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
            description: 'next_page_token value returned from a previous List request, if any.',
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
            description: 'Required. Parent resource name.',
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
      content: { 'application/json': { schema: ListUsableWorkstationConfigsResponseSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
  ],
})

export const getV1betaParentWorkstationsRoute = createRoute({
  method: 'get',
  path: '/v1beta/{parent}/workstations',
  tags: ['projects'],
  description: 'Returns all Workstations using the specified config.',
  operationId:
    'workstations.projects.locations.workstationClusters.workstationConfigs.workstations.list',
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
            description: 'Maximum number of items to return.',
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
            description: 'next_page_token value returned from a previous List request, if any.',
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
            description: 'Required. Parent resource name.',
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
      content: { 'application/json': { schema: ListWorkstationsResponseSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
  ],
})

export const postV1betaParentWorkstationsRoute = createRoute({
  method: 'post',
  path: '/v1beta/{parent}/workstations',
  tags: ['projects'],
  description: 'Creates a new workstation.',
  operationId:
    'workstations.projects.locations.workstationClusters.workstationConfigs.workstations.create',
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
      validateOnly: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            description:
              'If set, validate the request and preview the review, but do not actually apply it.',
            in: 'query',
            name: 'validateOnly',
            schema: { type: 'boolean' },
            required: false,
          },
        }),
      workstationId: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Required. ID to use for the workstation.',
            in: 'query',
            name: 'workstationId',
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
            description: 'Required. Parent resource name.',
            in: 'path',
            name: 'parent',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: WorkstationSchema } } },
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

export const getV1betaParentWorkstationsListUsableRoute = createRoute({
  method: 'get',
  path: '/v1beta/{parent}/workstations:listUsable',
  tags: ['projects'],
  description:
    'Returns all Workstations using the specified config on which the caller has the "workstations.workstations.use" permission.',
  operationId:
    'workstations.projects.locations.workstationClusters.workstationConfigs.workstations.listUsable',
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
            description: 'Maximum number of items to return.',
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
            description: 'next_page_token value returned from a previous List request, if any.',
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
            description: 'Required. Parent resource name.',
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
      content: { 'application/json': { schema: ListUsableWorkstationsResponseSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
  ],
})

export const getV1betaResourceGetIamPolicyRoute = createRoute({
  method: 'get',
  path: '/v1beta/{resource}:getIamPolicy',
  tags: ['projects'],
  description:
    'Gets the access control policy for a resource. Returns an empty policy if the resource exists and does not have a policy set.',
  operationId:
    'workstations.projects.locations.workstationClusters.workstationConfigs.workstations.getIamPolicy',
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

export const postV1betaResourceSetIamPolicyRoute = createRoute({
  method: 'post',
  path: '/v1beta/{resource}:setIamPolicy',
  tags: ['projects'],
  description:
    'Sets the access control policy on the specified resource. Replaces any existing policy. Can return `NOT_FOUND`, `INVALID_ARGUMENT`, and `PERMISSION_DENIED` errors.',
  operationId:
    'workstations.projects.locations.workstationClusters.workstationConfigs.workstations.setIamPolicy',
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

export const postV1betaResourceTestIamPermissionsRoute = createRoute({
  method: 'post',
  path: '/v1beta/{resource}:testIamPermissions',
  tags: ['projects'],
  description:
    'Returns permissions that a caller has on the specified resource. If the resource does not exist, this will return an empty set of permissions, not a `NOT_FOUND` error. Note: This operation is designed to be used for building permission-aware UIs and command-line tools, not for authorization checking. This operation may "fail open" without warning.',
  operationId:
    'workstations.projects.locations.workstationClusters.workstationConfigs.workstations.testIamPermissions',
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

export const postV1betaWorkstationGenerateAccessTokenRoute = createRoute({
  method: 'post',
  path: '/v1beta/{workstation}:generateAccessToken',
  tags: ['projects'],
  description:
    'Returns a short-lived credential that can be used to send authenticated and authorized traffic to a workstation.',
  operationId:
    'workstations.projects.locations.workstationClusters.workstationConfigs.workstations.generateAccessToken',
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
      workstation: z
        .string()
        .openapi({
          param: {
            description:
              'Required. Name of the workstation for which the access token should be generated.',
            in: 'path',
            name: 'workstation',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: GenerateAccessTokenRequestSchema } } },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: GenerateAccessTokenResponseSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
  ],
})
