import { createRoute, z } from '@hono/zod-openapi'

const IntersectionSchema: z.ZodType<IntersectionType> = z
  .lazy(() =>
    z
      .object({
        rules: z
          .array(GcRuleSchema)
          .exactOptional()
          .openapi({
            description: 'Only delete cells which would be deleted by every element of `rules`.',
          }),
      })
      .openapi({
        description: 'A GcRule which deletes cells matching all of the given rules.',
        required: [],
      }),
  )
  .openapi('Intersection')

const UnionSchema: z.ZodType<UnionType> = z
  .lazy(() =>
    z
      .object({
        rules: z
          .array(GcRuleSchema)
          .exactOptional()
          .openapi({
            description: 'Delete cells which would be deleted by any element of `rules`.',
          }),
      })
      .openapi({
        description: 'A GcRule which deletes cells matching any of the given rules.',
        required: [],
      }),
  )
  .openapi('Union')

type GcRuleType = {
  intersection?: z.infer<typeof IntersectionSchema>
  maxAge?: string
  maxNumVersions?: number
  union?: z.infer<typeof UnionSchema>
}

const GcRuleSchema: z.ZodType<GcRuleType> = z
  .lazy(() =>
    z
      .object({
        intersection: IntersectionSchema.exactOptional().openapi({
          description: 'Delete cells that would be deleted by every nested rule.',
        }),
        maxAge: z
          .string()
          .exactOptional()
          .openapi({
            description:
              'Delete cells in a column older than the given age. Values must be at least one millisecond, and will be truncated to microsecond granularity.',
          }),
        maxNumVersions: z
          .int32()
          .exactOptional()
          .openapi({ description: 'Delete all cells in a column except the most recent N.' }),
        union: UnionSchema.exactOptional().openapi({
          description: 'Delete cells that would be deleted by any nested rule.',
        }),
      })
      .openapi({
        description: 'Rule for determining which cells to delete during garbage collection.',
        required: [],
      }),
  )
  .openapi('GcRule')

type IntersectionType = { rules?: z.infer<typeof GcRuleSchema>[] }

type UnionType = { rules?: z.infer<typeof GcRuleSchema>[] }

const MultiClusterRoutingUseAnySchema = z
  .object({
    clusterIds: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description:
          'The set of clusters to route to. The order is ignored; clusters will be tried in order of distance. If left empty, all clusters are eligible.',
      }),
  })
  .openapi({
    description:
      'Read/write requests are routed to the nearest cluster in the instance, and will fail over to the nearest cluster that is available in the event of transient errors or delays. Clusters in a region are considered equidistant. Choosing this option sacrifices read-your-writes consistency to improve availability.',
    required: [],
  })
  .openapi('MultiClusterRoutingUseAny')

const SingleClusterRoutingSchema = z
  .object({
    allowTransactionalWrites: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Whether or not `CheckAndMutateRow` and `ReadModifyWriteRow` requests are allowed by this app profile. It is unsafe to send these requests to the same table/row/column in multiple clusters.',
      }),
    clusterId: z
      .string()
      .exactOptional()
      .openapi({ description: 'The cluster to which read/write requests should be routed.' }),
  })
  .openapi({
    description:
      'Unconditionally routes all read/write requests to a specific cluster. This option preserves read-your-writes consistency but does not improve availability.',
    required: [],
  })
  .openapi('SingleClusterRouting')

const AppProfileSchema = z
  .object({
    description: z
      .string()
      .exactOptional()
      .openapi({ description: 'Long form description of the use case for this AppProfile.' }),
    etag: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Strongly validated etag for optimistic concurrency control. Preserve the value returned from `GetAppProfile` when calling `UpdateAppProfile` to fail the request if there has been a modification in the mean time. The `update_mask` of the request need not include `etag` for this protection to apply. See [Wikipedia](https://en.wikipedia.org/wiki/HTTP_ETag) and [RFC 7232](https://tools.ietf.org/html/rfc7232#section-2.3) for more details.',
      }),
    multiClusterRoutingUseAny: MultiClusterRoutingUseAnySchema.exactOptional().openapi({
      description: 'Use a multi-cluster routing policy.',
    }),
    name: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The unique name of the app profile. Values are of the form `projects/{project}/instances/{instance}/appProfiles/_a-zA-Z0-9*`.',
      }),
    singleClusterRouting: SingleClusterRoutingSchema.exactOptional().openapi({
      description: 'Use a single-cluster routing policy.',
    }),
  })
  .openapi({
    description:
      'A configuration object describing how Cloud Bigtable should treat traffic from a particular end user application.',
    required: [],
  })
  .openapi('AppProfile')

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

const AutoscalingLimitsSchema = z
  .object({
    maxServeNodes: z
      .int32()
      .exactOptional()
      .openapi({ description: 'Required. Maximum number of nodes to scale up to.' }),
    minServeNodes: z
      .int32()
      .exactOptional()
      .openapi({ description: 'Required. Minimum number of nodes to scale down to.' }),
  })
  .openapi({
    description: 'Limits for the number of nodes a Cluster can autoscale up/down to.',
    required: [],
  })
  .openapi('AutoscalingLimits')

const AutoscalingTargetsSchema = z
  .object({
    cpuUtilizationPercent: z
      .int32()
      .exactOptional()
      .openapi({
        description:
          'The cpu utilization that the Autoscaler should be trying to achieve. This number is on a scale from 0 (no utilization) to 100 (total utilization), and is limited between 10 and 80, otherwise it will return INVALID_ARGUMENT error.',
      }),
    storageUtilizationGibPerNode: z
      .int32()
      .exactOptional()
      .openapi({
        description:
          'The storage utilization that the Autoscaler should be trying to achieve. This number is limited between 2560 (2.5TiB) and 5120 (5TiB) for a SSD cluster and between 8192 (8TiB) and 16384 (16TiB) for an HDD cluster, otherwise it will return INVALID_ARGUMENT error. If this value is set to 0, it will be treated as if it were set to the default value: 2560 for SSD, 8192 for HDD.',
      }),
  })
  .openapi({
    description: 'The Autoscaling targets for a Cluster. These determine the recommended nodes.',
    required: [],
  })
  .openapi('AutoscalingTargets')

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

const EncryptionInfoSchema = z
  .object({
    encryptionStatus: StatusSchema.exactOptional().openapi({
      description:
        'Output only. The status of encrypt/decrypt calls on underlying data for this resource. Regardless of status, the existing data is always encrypted at rest.',
      readOnly: true,
    }),
    encryptionType: z
      .enum([
        'ENCRYPTION_TYPE_UNSPECIFIED',
        'GOOGLE_DEFAULT_ENCRYPTION',
        'CUSTOMER_MANAGED_ENCRYPTION',
      ])
      .exactOptional()
      .openapi({
        description: 'Output only. The type of encryption used to protect this resource.',
        readOnly: true,
      }),
    kmsKeyVersion: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Output only. The version of the Cloud KMS key specified in the parent cluster that is in use for the data underlying this table.',
        readOnly: true,
      }),
  })
  .openapi({
    description:
      'Encryption information for a given resource. If this resource is protected with customer managed encryption, the in-use Cloud Key Management Service (Cloud KMS) key version is specified along with its status.',
    required: [],
  })
  .openapi('EncryptionInfo')

const BackupSchema = z
  .object({
    encryptionInfo: EncryptionInfoSchema.exactOptional().openapi({
      description: 'Output only. The encryption information for the backup.',
      readOnly: true,
    }),
    endTime: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Output only. `end_time` is the time that the backup was finished. The row data in the backup will be no newer than this timestamp.',
        readOnly: true,
      }),
    expireTime: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Required. The expiration time of the backup, with microseconds granularity that must be at least 6 hours and at most 30 days from the time the request is received. Once the `expire_time` has passed, Cloud Bigtable will delete the backup and free the resources used by the backup.',
      }),
    name: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'A globally unique identifier for the backup which cannot be changed. Values are of the form `projects/{project}/instances/{instance}/clusters/{cluster}/ backups/_a-zA-Z0-9*` The final segment of the name must be between 1 and 50 characters in length. The backup is stored in the cluster identified by the prefix of the backup name of the form `projects/{project}/instances/{instance}/clusters/{cluster}`.',
      }),
    sizeBytes: z
      .string()
      .exactOptional()
      .openapi({ description: 'Output only. Size of the backup in bytes.', readOnly: true }),
    sourceBackup: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Output only. Name of the backup from which this backup was copied. If a backup is not created by copying a backup, this field will be empty. Values are of the form: projects//instances//backups/.',
        readOnly: true,
      }),
    sourceTable: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Required. Immutable. Name of the table from which this backup was created. This needs to be in the same instance as the backup. Values are of the form `projects/{project}/instances/{instance}/tables/{source_table}`.',
      }),
    startTime: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Output only. `start_time` is the time that the backup was started (i.e. approximately the time the CreateBackup request is received). The row data in this backup will be no older than this timestamp.',
        readOnly: true,
      }),
    state: z
      .enum(['STATE_UNSPECIFIED', 'CREATING', 'READY'])
      .exactOptional()
      .openapi({ description: 'Output only. The current state of the backup.', readOnly: true }),
  })
  .openapi({ description: 'A backup of a Cloud Bigtable table.', required: [] })
  .openapi('Backup')

const BackupInfoSchema = z
  .object({
    backup: z
      .string()
      .exactOptional()
      .openapi({ description: 'Output only. Name of the backup.', readOnly: true }),
    endTime: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Output only. This time that the backup was finished. Row data in the backup will be no newer than this timestamp.',
        readOnly: true,
      }),
    sourceBackup: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Output only. Name of the backup from which this backup was copied. If a backup is not created by copying a backup, this field will be empty. Values are of the form: projects//instances//backups/.',
        readOnly: true,
      }),
    sourceTable: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Output only. Name of the table the backup was created from.',
        readOnly: true,
      }),
    startTime: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Output only. The time that the backup was started. Row data in the backup will be no older than this timestamp.',
        readOnly: true,
      }),
  })
  .openapi({ description: 'Information about a backup.', required: [] })
  .openapi('BackupInfo')

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

const CheckConsistencyRequestSchema = z
  .object({
    consistencyToken: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Required. The token created using GenerateConsistencyToken for the Table.',
      }),
  })
  .openapi({
    description: 'Request message for google.bigtable.admin.v2.BigtableTableAdmin.CheckConsistency',
    required: [],
  })
  .openapi('CheckConsistencyRequest')

const CheckConsistencyResponseSchema = z
  .object({
    consistent: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'True only if the token is consistent. A token is consistent if replication has caught up with the restrictions specified in the request.',
      }),
  })
  .openapi({
    description:
      'Response message for google.bigtable.admin.v2.BigtableTableAdmin.CheckConsistency',
    required: [],
  })
  .openapi('CheckConsistencyResponse')

const ClusterAutoscalingConfigSchema = z
  .object({
    autoscalingLimits: AutoscalingLimitsSchema.exactOptional().openapi({
      description: 'Required. Autoscaling limits for this cluster.',
    }),
    autoscalingTargets: AutoscalingTargetsSchema.exactOptional().openapi({
      description: 'Required. Autoscaling targets for this cluster.',
    }),
  })
  .openapi({ description: 'Autoscaling config for a cluster.', required: [] })
  .openapi('ClusterAutoscalingConfig')

const ClusterConfigSchema = z
  .object({
    clusterAutoscalingConfig: ClusterAutoscalingConfigSchema.exactOptional().openapi({
      description: 'Autoscaling configuration for this cluster.',
    }),
  })
  .openapi({ description: 'Configuration for a cluster.', required: [] })
  .openapi('ClusterConfig')

const EncryptionConfigSchema = z
  .object({
    kmsKeyName: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Describes the Cloud KMS encryption key that will be used to protect the destination Bigtable cluster. The requirements for this key are: 1) The Cloud Bigtable service account associated with the project that contains this cluster must be granted the `cloudkms.cryptoKeyEncrypterDecrypter` role on the CMEK key. 2) Only regional keys can be used and the region of the CMEK key must match the region of the cluster. Values are of the form `projects/{project}/locations/{location}/keyRings/{keyring}/cryptoKeys/{key}`',
      }),
  })
  .openapi({
    description: 'Cloud Key Management Service (Cloud KMS) settings for a CMEK-protected cluster.',
    required: [],
  })
  .openapi('EncryptionConfig')

const ClusterSchema = z
  .object({
    clusterConfig: ClusterConfigSchema.exactOptional().openapi({
      description: 'Configuration for this cluster.',
    }),
    defaultStorageType: z
      .enum(['STORAGE_TYPE_UNSPECIFIED', 'SSD', 'HDD'])
      .exactOptional()
      .openapi({
        description:
          "Immutable. The type of storage used by this cluster to serve its parent instance's tables, unless explicitly overridden.",
      }),
    encryptionConfig: EncryptionConfigSchema.exactOptional().openapi({
      description: 'Immutable. The encryption configuration for CMEK-protected clusters.',
    }),
    location: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "Immutable. The location where this cluster's nodes and storage reside. For best performance, clients should be located as close as possible to this cluster. Currently only zones are supported, so values should be of the form `projects/{project}/locations/{zone}`.",
      }),
    name: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The unique name of the cluster. Values are of the form `projects/{project}/instances/{instance}/clusters/a-z*`.',
      }),
    serveNodes: z
      .int32()
      .exactOptional()
      .openapi({
        description:
          'The number of nodes allocated to this cluster. More nodes enable higher throughput and more consistent performance.',
      }),
    state: z
      .enum(['STATE_NOT_KNOWN', 'READY', 'CREATING', 'RESIZING', 'DISABLED'])
      .exactOptional()
      .openapi({ description: 'Output only. The current state of the cluster.', readOnly: true }),
  })
  .openapi({
    description:
      'A resizable group of nodes in a particular cloud location, capable of serving all Tables in the parent Instance.',
    required: [],
  })
  .openapi('Cluster')

const ClusterStateSchema = z
  .object({
    encryptionInfo: z
      .array(EncryptionInfoSchema)
      .exactOptional()
      .openapi({
        description:
          'Output only. The encryption information for the table in this cluster. If the encryption key protecting this resource is customer managed, then its version can be rotated in Cloud Key Management Service (Cloud KMS). The primary version of the key and its status will be reflected here when changes propagate from Cloud KMS.',
        readOnly: true,
      }),
    replicationState: z
      .enum([
        'STATE_NOT_KNOWN',
        'INITIALIZING',
        'PLANNED_MAINTENANCE',
        'UNPLANNED_MAINTENANCE',
        'READY',
        'READY_OPTIMIZING',
      ])
      .exactOptional()
      .openapi({
        description: 'Output only. The state of replication for the table in this cluster.',
        readOnly: true,
      }),
  })
  .openapi({ description: "The state of a table's data in a particular cluster.", required: [] })
  .openapi('ClusterState')

const ColumnFamilyStatsSchema = z
  .object({
    averageCellsPerColumn: z
      .float64()
      .exactOptional()
      .openapi({
        description:
          'How many cells are present per column qualifier in this column family, averaged over all rows containing any column in the column family. e.g. For column family "family" in a table with 3 rows: * A row with 3 cells in "family:col" and 1 cell in "other:col" (3 cells / 1 column in "family") * A row with 1 cell in "family:col", 7 cells in "family:other_col", and 7 cells in "other:data" (8 cells / 2 columns in "family") * A row with 3 cells in "other:col" (0 columns in "family", "family" not present) would report (3 + 8 + 0)/(1 + 2 + 0) = 3.66 in this field.',
      }),
    averageColumnsPerRow: z
      .float64()
      .exactOptional()
      .openapi({
        description:
          'How many column qualifiers are present in this column family, averaged over all rows in the table. e.g. For column family "family" in a table with 3 rows: * A row with cells in "family:col" and "other:col" (1 column in "family") * A row with cells in "family:col", "family:other_col", and "other:data" (2 columns in "family") * A row with cells in "other:col" (0 columns in "family", "family" not present) would report (1 + 2 + 0)/3 = 1.5 in this field.',
      }),
    logicalDataBytes: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'How much space the data in the column family occupies. This is roughly how many bytes would be needed to read the contents of the entire column family (e.g. by streaming all contents out).',
      }),
  })
  .openapi({
    description:
      'Approximate statistics related to a single column family within a table. This information may change rapidly, interpreting these values at a point in time may already preset out-of-date information. Everything below is approximate, unless otherwise specified.',
    required: [],
  })
  .openapi('ColumnFamilyStats')

const ColumnFamilySchema = z
  .object({
    gcRule: GcRuleSchema.exactOptional().openapi({
      description:
        "Garbage collection rule specified as a protobuf. Must serialize to at most 500 bytes. NOTE: Garbage collection executes opportunistically in the background, and so it's possible for reads to return a cell even if it matches the active GC expression for its family.",
    }),
    stats: ColumnFamilyStatsSchema.exactOptional().openapi({
      description:
        'Only available with STATS_VIEW, this includes summary statistics about column family contents. For statistics over an entire table, see TableStats above.',
    }),
  })
  .openapi({
    description: 'A set of columns within a table which share a common configuration.',
    required: [],
  })
  .openapi('ColumnFamily')

const OperationProgressSchema = z
  .object({
    endTime: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'If set, the time at which this operation failed or was completed successfully.',
      }),
    progressPercent: z
      .int32()
      .exactOptional()
      .openapi({
        description: 'Percent completion of the operation. Values are between 0 and 100 inclusive.',
      }),
    startTime: z
      .string()
      .exactOptional()
      .openapi({ description: 'Time the request was received.' }),
  })
  .openapi({
    description:
      'Encapsulates progress related information for a Cloud Bigtable long running operation.',
    required: [],
  })
  .openapi('OperationProgress')

const CopyBackupMetadataSchema = z
  .object({
    name: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The name of the backup being created through the copy operation. Values are of the form `projects//instances//clusters//backups/`.',
      }),
    progress: OperationProgressSchema.exactOptional().openapi({
      description: 'The progress of the CopyBackup operation.',
    }),
    sourceBackupInfo: BackupInfoSchema.exactOptional().openapi({
      description: 'Information about the source backup that is being copied from.',
    }),
  })
  .openapi({
    description: 'Metadata type for the google.longrunning.Operation returned by CopyBackup.',
    required: [],
  })
  .openapi('CopyBackupMetadata')

const CopyBackupRequestSchema = z
  .object({
    backupId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Required. The id of the new backup. The `backup_id` along with `parent` are combined as {parent}/backups/{backup_id} to create the full backup name, of the form: `projects/{project}/instances/{instance}/clusters/{cluster}/backups/{backup_id}`. This string must be between 1 and 50 characters in length and match the regex _a-zA-Z0-9*.',
      }),
    expireTime: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Required. Required. The expiration time of the copied backup with microsecond granularity that must be at least 6 hours and at most 30 days from the time the request is received. Once the `expire_time` has passed, Cloud Bigtable will delete the backup and free the resources used by the backup.',
      }),
    sourceBackup: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Required. The source backup to be copied from. The source backup needs to be in READY state for it to be copied. Copying a copied backup is not allowed. Once CopyBackup is in progress, the source backup cannot be deleted or cleaned up on expiration until CopyBackup is finished. Values are of the form: `projects//instances//clusters//backups/`.',
      }),
  })
  .openapi({ description: 'The request for CopyBackup.', required: [] })
  .openapi('CopyBackupRequest')

const CreateBackupMetadataSchema = z
  .object({
    endTime: z
      .string()
      .exactOptional()
      .openapi({
        description: 'If set, the time at which this operation finished or was cancelled.',
      }),
    name: z
      .string()
      .exactOptional()
      .openapi({ description: 'The name of the backup being created.' }),
    sourceTable: z
      .string()
      .exactOptional()
      .openapi({ description: 'The name of the table the backup is created from.' }),
    startTime: z
      .string()
      .exactOptional()
      .openapi({ description: 'The time at which this operation started.' }),
  })
  .openapi({
    description: 'Metadata type for the operation returned by CreateBackup.',
    required: [],
  })
  .openapi('CreateBackupMetadata')

const CreateClusterRequestSchema = z
  .object({
    cluster: ClusterSchema.exactOptional().openapi({
      description:
        'Required. The cluster to be created. Fields marked `OutputOnly` must be left blank.',
    }),
    clusterId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Required. The ID to be used when referring to the new cluster within its instance, e.g., just `mycluster` rather than `projects/myproject/instances/myinstance/clusters/mycluster`.',
      }),
    parent: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Required. The unique name of the instance in which to create the new cluster. Values are of the form `projects/{project}/instances/{instance}`.',
      }),
  })
  .openapi({
    description: 'Request message for BigtableInstanceAdmin.CreateCluster.',
    required: [],
  })
  .openapi('CreateClusterRequest')

const TableProgressSchema = z
  .object({
    estimatedCopiedBytes: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "Estimate of the number of bytes copied so far for this table. This will eventually reach 'estimated_size_bytes' unless the table copy is CANCELLED.",
      }),
    estimatedSizeBytes: z
      .string()
      .exactOptional()
      .openapi({ description: 'Estimate of the size of the table to be copied.' }),
    state: z
      .enum(['STATE_UNSPECIFIED', 'PENDING', 'COPYING', 'COMPLETED', 'CANCELLED'])
      .exactOptional(),
  })
  .openapi({
    description: "Progress info for copying a table's data to the new cluster.",
    required: [],
  })
  .openapi('TableProgress')

const CreateClusterMetadataSchema = z
  .object({
    finishTime: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The time at which the operation failed or was completed successfully.',
      }),
    originalRequest: CreateClusterRequestSchema.exactOptional().openapi({
      description: 'The request that prompted the initiation of this CreateCluster operation.',
    }),
    requestTime: z
      .string()
      .exactOptional()
      .openapi({ description: 'The time at which the original request was received.' }),
    tables: z
      .record(z.string(), TableProgressSchema)
      .exactOptional()
      .openapi({
        description:
          "Keys: the full `name` of each table that existed in the instance when CreateCluster was first called, i.e. `projects//instances//tables/`. Any table added to the instance by a later API call will be created in the new cluster by that API call, not this one. Values: information on how much of a table's data has been copied to the newly-created cluster so far.",
      }),
  })
  .openapi({
    description: 'The metadata for the Operation returned by CreateCluster.',
    required: [],
  })
  .openapi('CreateClusterMetadata')

const InstanceSchema = z
  .object({
    createTime: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Output only. A commit timestamp representing when this Instance was created. For instances created before this field was added (August 2021), this value is `seconds: 0, nanos: 1`.',
        readOnly: true,
      }),
    displayName: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Required. The descriptive name for this instance as it appears in UIs. Can be changed at any time, but should be kept globally unique to avoid confusion.',
      }),
    labels: z
      .record(z.string(), z.string())
      .exactOptional()
      .openapi({
        description:
          "Labels are a flexible and lightweight mechanism for organizing cloud resources into groups that reflect a customer's organizational needs and deployment strategies. They can be used to filter resources and aggregate metrics. * Label keys must be between 1 and 63 characters long and must conform to the regular expression: `\\p{Ll}\\p{Lo}{0,62}`. * Label values must be between 0 and 63 characters long and must conform to the regular expression: `[\\p{Ll}\\p{Lo}\\p{N}_-]{0,63}`. * No more than 64 labels can be associated with a given resource. * Keys and values must both be under 128 bytes.",
      }),
    name: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The unique name of the instance. Values are of the form `projects/{project}/instances/a-z+[a-z0-9]`.',
      }),
    satisfiesPzs: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Output only. Reserved for future use.', readOnly: true }),
    state: z
      .enum(['STATE_NOT_KNOWN', 'READY', 'CREATING'])
      .exactOptional()
      .openapi({ description: 'Output only. The current state of the instance.', readOnly: true }),
    type: z
      .enum(['TYPE_UNSPECIFIED', 'PRODUCTION', 'DEVELOPMENT'])
      .exactOptional()
      .openapi({ description: 'The type of the instance. Defaults to `PRODUCTION`.' }),
  })
  .openapi({
    description:
      'A collection of Bigtable Tables and the resources that serve them. All tables in an instance are served from all Clusters in the instance.',
    required: [],
  })
  .openapi('Instance')

const CreateInstanceRequestSchema = z
  .object({
    clusters: z
      .record(z.string(), ClusterSchema)
      .exactOptional()
      .openapi({
        description:
          'Required. The clusters to be created within the instance, mapped by desired cluster ID, e.g., just `mycluster` rather than `projects/myproject/instances/myinstance/clusters/mycluster`. Fields marked `OutputOnly` must be left blank.',
      }),
    instance: InstanceSchema.exactOptional().openapi({
      description:
        'Required. The instance to create. Fields marked `OutputOnly` must be left blank.',
    }),
    instanceId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Required. The ID to be used when referring to the new instance within its project, e.g., just `myinstance` rather than `projects/myproject/instances/myinstance`.',
      }),
    parent: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Required. The unique name of the project in which to create the new instance. Values are of the form `projects/{project}`.',
      }),
  })
  .openapi({
    description: 'Request message for BigtableInstanceAdmin.CreateInstance.',
    required: [],
  })
  .openapi('CreateInstanceRequest')

const CreateInstanceMetadataSchema = z
  .object({
    finishTime: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The time at which the operation failed or was completed successfully.',
      }),
    originalRequest: CreateInstanceRequestSchema.exactOptional().openapi({
      description: 'The request that prompted the initiation of this CreateInstance operation.',
    }),
    requestTime: z
      .string()
      .exactOptional()
      .openapi({ description: 'The time at which the original request was received.' }),
  })
  .openapi({
    description: 'The metadata for the Operation returned by CreateInstance.',
    required: [],
  })
  .openapi('CreateInstanceMetadata')

const SplitSchema = z
  .object({
    key: z
      .string()
      .exactOptional()
      .openapi({ description: 'Row key to use as an initial tablet boundary.' }),
  })
  .openapi({ description: 'An initial split point for a newly created table.', required: [] })
  .openapi('Split')

const RestoreInfoSchema = z
  .object({
    backupInfo: BackupInfoSchema.exactOptional().openapi({
      description:
        'Information about the backup used to restore the table. The backup may no longer exist.',
    }),
    sourceType: z
      .enum(['RESTORE_SOURCE_TYPE_UNSPECIFIED', 'BACKUP'])
      .exactOptional()
      .openapi({ description: 'The type of the restore source.' }),
  })
  .openapi({ description: 'Information about a table restore.', required: [] })
  .openapi('RestoreInfo')

const TableStatsSchema = z
  .object({
    averageCellsPerColumn: z
      .float64()
      .exactOptional()
      .openapi({
        description:
          'How many cells are present per column (column family, column qualifier) combinations, averaged over all columns in all rows in the table. e.g. A table with 2 rows: * A row with 3 cells in "family:col" and 1 cell in "other:col" (4 cells / 2 columns) * A row with 1 cell in "family:col", 7 cells in "family:other_col", and 7 cells in "other:data" (15 cells / 3 columns) would report (4 + 15)/(2 + 3) = 3.8 in this field.',
      }),
    averageColumnsPerRow: z
      .float64()
      .exactOptional()
      .openapi({
        description:
          'How many (column family, column qualifier) combinations are present per row in the table, averaged over all rows in the table. e.g. A table with 2 rows: * A row with cells in "family:col" and "other:col" (2 distinct columns) * A row with cells in "family:col", "family:other_col", and "other:data" (3 distinct columns) would report (2 + 3)/2 = 2.5 in this field.',
      }),
    logicalDataBytes: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'This is roughly how many bytes would be needed to read the entire table (e.g. by streaming all contents out).',
      }),
    rowCount: z
      .string()
      .exactOptional()
      .openapi({ description: 'How many rows are in the table.' }),
  })
  .openapi({
    description:
      'Approximate statistics related to a table. These statistics are calculated infrequently, while simultaneously, data in the table can change rapidly. Thus the values reported here (e.g. row count) are very likely out-of date, even the instant they are received in this API. Thus, only treat these values as approximate. IMPORTANT: Everything below is approximate, unless otherwise specified.',
    required: [],
  })
  .openapi('TableStats')

const TableSchema = z
  .object({
    clusterStates: z
      .record(z.string(), ClusterStateSchema)
      .exactOptional()
      .openapi({
        description:
          'Output only. Map from cluster ID to per-cluster table state. If it could not be determined whether or not the table has data in a particular cluster (for example, if its zone is unavailable), then there will be an entry for the cluster with UNKNOWN `replication_status`. Views: `REPLICATION_VIEW`, `ENCRYPTION_VIEW`, `FULL`',
        readOnly: true,
      }),
    columnFamilies: z
      .record(z.string(), ColumnFamilySchema)
      .exactOptional()
      .openapi({
        description:
          'The column families configured for this table, mapped by column family ID. Views: `SCHEMA_VIEW`, `STATS_VIEW`, `FULL`',
      }),
    deletionProtection: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Set to true to make the table protected against data loss. i.e. deleting the following resources through Admin APIs are prohibited: * The table. * The column families in the table. * The instance containing the table. Note one can still delete the data stored in the table through Data APIs.',
      }),
    granularity: z
      .enum(['TIMESTAMP_GRANULARITY_UNSPECIFIED', 'MILLIS'])
      .exactOptional()
      .openapi({
        description:
          'Immutable. The granularity (i.e. `MILLIS`) at which timestamps are stored in this table. Timestamps not matching the granularity will be rejected. If unspecified at creation time, the value will be set to `MILLIS`. Views: `SCHEMA_VIEW`, `FULL`.',
      }),
    name: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The unique name of the table. Values are of the form `projects/{project}/instances/{instance}/tables/_a-zA-Z0-9*`. Views: `NAME_ONLY`, `SCHEMA_VIEW`, `REPLICATION_VIEW`, `STATS_VIEW`, `FULL`',
      }),
    restoreInfo: RestoreInfoSchema.exactOptional().openapi({
      description:
        'Output only. If this table was restored from another data source (e.g. a backup), this field will be populated with information about the restore.',
      readOnly: true,
    }),
    stats: TableStatsSchema.exactOptional().openapi({
      description:
        'Only available with STATS_VIEW, this includes summary statistics about the entire table contents. For statistics about a specific column family, see ColumnFamilyStats in the mapped ColumnFamily collection above.',
    }),
  })
  .openapi({
    description:
      'A collection of user data indexed by row, column, and timestamp. Each table is served using the resources of its parent cluster.',
    required: [],
  })
  .openapi('Table')

const CreateTableRequestSchema = z
  .object({
    initialSplits: z
      .array(SplitSchema)
      .exactOptional()
      .openapi({
        description:
          'The optional list of row keys that will be used to initially split the table into several tablets (tablets are similar to HBase regions). Given two split keys, `s1` and `s2`, three tablets will be created, spanning the key ranges: `[, s1), [s1, s2), [s2, )`. Example: * Row keys := `["a", "apple", "custom", "customer_1", "customer_2",` `"other", "zz"]` * initial_split_keys := `["apple", "customer_1", "customer_2", "other"]` * Key assignment: - Tablet 1 `[, apple) => {"a"}.` - Tablet 2 `[apple, customer_1) => {"apple", "custom"}.` - Tablet 3 `[customer_1, customer_2) => {"customer_1"}.` - Tablet 4 `[customer_2, other) => {"customer_2"}.` - Tablet 5 `[other, ) => {"other", "zz"}.`',
      }),
    table: TableSchema.exactOptional().openapi({ description: 'Required. The Table to create.' }),
    tableId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Required. The name by which the new table should be referred to within the parent instance, e.g., `foobar` rather than `{parent}/tables/foobar`. Maximum 50 characters.',
      }),
  })
  .openapi({
    description: 'Request message for google.bigtable.admin.v2.BigtableTableAdmin.CreateTable',
    required: [],
  })
  .openapi('CreateTableRequest')

const DropRowRangeRequestSchema = z
  .object({
    deleteAllDataFromTable: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Delete all rows in the table. Setting this to false is a no-op.' }),
    rowKeyPrefix: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Delete all rows that start with this row key prefix. Prefix cannot be zero length.',
      }),
  })
  .openapi({
    description: 'Request message for google.bigtable.admin.v2.BigtableTableAdmin.DropRowRange',
    required: [],
  })
  .openapi('DropRowRangeRequest')

const EmptySchema = z
  .object({})
  .openapi({
    description:
      'A generic empty message that you can re-use to avoid defining duplicated empty messages in your APIs. A typical example is to use it as the request or the response type of an API method. For instance: service Foo { rpc Bar(google.protobuf.Empty) returns (google.protobuf.Empty); }',
  })
  .openapi('Empty')

const GenerateConsistencyTokenRequestSchema = z
  .object({})
  .openapi({
    description:
      'Request message for google.bigtable.admin.v2.BigtableTableAdmin.GenerateConsistencyToken',
  })
  .openapi('GenerateConsistencyTokenRequest')

const GenerateConsistencyTokenResponseSchema = z
  .object({
    consistencyToken: z
      .string()
      .exactOptional()
      .openapi({ description: 'The generated consistency token.' }),
  })
  .openapi({
    description:
      'Response message for google.bigtable.admin.v2.BigtableTableAdmin.GenerateConsistencyToken',
    required: [],
  })
  .openapi('GenerateConsistencyTokenResponse')

const GetPolicyOptionsSchema = z
  .object({
    requestedPolicyVersion: z
      .int32()
      .exactOptional()
      .openapi({
        description:
          'Optional. The maximum policy version that will be used to format the policy. Valid values are 0, 1, and 3. Requests specifying an invalid value will be rejected. Requests for policies with any conditional role bindings must specify version 3. Policies with no conditional role bindings may specify any valid value or leave the field unset. The policy in the response might use the policy version that you specified, or it might use a lower policy version. For example, if you specify version 3, but the policy has no conditional role bindings, the response uses version 1. To learn which resources support conditions in their IAM policies, see the [IAM documentation](https://cloud.google.com/iam/help/conditions/resource-policies).',
      }),
  })
  .openapi({ description: 'Encapsulates settings provided to GetIamPolicy.', required: [] })
  .openapi('GetPolicyOptions')

const GetIamPolicyRequestSchema = z
  .object({
    options: GetPolicyOptionsSchema.exactOptional().openapi({
      description:
        'OPTIONAL: A `GetPolicyOptions` object for specifying options to `GetIamPolicy`.',
    }),
  })
  .openapi({ description: 'Request message for `GetIamPolicy` method.', required: [] })
  .openapi('GetIamPolicyRequest')

const HotTabletSchema = z
  .object({
    endKey: z.string().exactOptional().openapi({ description: 'Tablet End Key (inclusive).' }),
    endTime: z
      .string()
      .exactOptional()
      .openapi({ description: 'Output only. The end time of the hot tablet.', readOnly: true }),
    name: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The unique name of the hot tablet. Values are of the form `projects/{project}/instances/{instance}/clusters/{cluster}/hotTablets/[a-zA-Z0-9_-]*`.',
      }),
    nodeCpuUsagePercent: z
      .float32()
      .exactOptional()
      .openapi({
        description:
          'Output only. The average CPU usage spent by a node on this tablet over the start_time to end_time time range. The percentage is the amount of CPU used by the node to serve the tablet, from 0% (tablet was not interacted with) to 100% (the node spent all cycles serving the hot tablet).',
        readOnly: true,
      }),
    startKey: z.string().exactOptional().openapi({ description: 'Tablet Start Key (inclusive).' }),
    startTime: z
      .string()
      .exactOptional()
      .openapi({ description: 'Output only. The start time of the hot tablet.', readOnly: true }),
    tableName: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Name of the table that contains the tablet. Values are of the form `projects/{project}/instances/{instance}/tables/_a-zA-Z0-9*`.',
      }),
  })
  .openapi({
    description:
      'A tablet is a defined by a start and end key and is explained in https://cloud.google.com/bigtable/docs/overview#architecture and https://cloud.google.com/bigtable/docs/performance#optimization. A Hot tablet is a tablet that exhibits high average cpu usage during the time interval from start time to end time.',
    required: [],
  })
  .openapi('HotTablet')

const ListAppProfilesResponseSchema = z
  .object({
    appProfiles: z
      .array(AppProfileSchema)
      .exactOptional()
      .openapi({ description: 'The list of requested app profiles.' }),
    failedLocations: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description:
          'Locations from which AppProfile information could not be retrieved, due to an outage or some other transient condition. AppProfiles from these locations may be missing from `app_profiles`. Values are of the form `projects//locations/`',
      }),
    nextPageToken: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Set if not all app profiles could be returned in a single response. Pass this value to `page_token` in another request to get the next page of results.',
      }),
  })
  .openapi({
    description: 'Response message for BigtableInstanceAdmin.ListAppProfiles.',
    required: [],
  })
  .openapi('ListAppProfilesResponse')

const ListBackupsResponseSchema = z
  .object({
    backups: z
      .array(BackupSchema)
      .exactOptional()
      .openapi({ description: 'The list of matching backups.' }),
    nextPageToken: z
      .string()
      .exactOptional()
      .openapi({
        description:
          '`next_page_token` can be sent in a subsequent ListBackups call to fetch more of the matching backups.',
      }),
  })
  .openapi({ description: 'The response for ListBackups.', required: [] })
  .openapi('ListBackupsResponse')

const ListClustersResponseSchema = z
  .object({
    clusters: z
      .array(ClusterSchema)
      .exactOptional()
      .openapi({ description: 'The list of requested clusters.' }),
    failedLocations: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description:
          'Locations from which Cluster information could not be retrieved, due to an outage or some other transient condition. Clusters from these locations may be missing from `clusters`, or may only have partial information returned. Values are of the form `projects//locations/`',
      }),
    nextPageToken: z
      .string()
      .exactOptional()
      .openapi({ description: 'DEPRECATED: This field is unused and ignored.' }),
  })
  .openapi({
    description: 'Response message for BigtableInstanceAdmin.ListClusters.',
    required: [],
  })
  .openapi('ListClustersResponse')

const ListHotTabletsResponseSchema = z
  .object({
    hotTablets: z
      .array(HotTabletSchema)
      .exactOptional()
      .openapi({
        description:
          'List of hot tablets in the tables of the requested cluster that fall within the requested time range. Hot tablets are ordered by node cpu usage percent. If there are multiple hot tablets that correspond to the same tablet within a 15-minute interval, only the hot tablet with the highest node cpu usage will be included in the response.',
      }),
    nextPageToken: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Set if not all hot tablets could be returned in a single response. Pass this value to `page_token` in another request to get the next page of results.',
      }),
  })
  .openapi({
    description: 'Response message for BigtableInstanceAdmin.ListHotTablets.',
    required: [],
  })
  .openapi('ListHotTabletsResponse')

const ListInstancesResponseSchema = z
  .object({
    failedLocations: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description:
          'Locations from which Instance information could not be retrieved, due to an outage or some other transient condition. Instances whose Clusters are all in one of the failed locations may be missing from `instances`, and Instances with at least one Cluster in a failed location may only have partial information returned. Values are of the form `projects//locations/`',
      }),
    instances: z
      .array(InstanceSchema)
      .exactOptional()
      .openapi({ description: 'The list of requested instances.' }),
    nextPageToken: z
      .string()
      .exactOptional()
      .openapi({ description: 'DEPRECATED: This field is unused and ignored.' }),
  })
  .openapi({
    description: 'Response message for BigtableInstanceAdmin.ListInstances.',
    required: [],
  })
  .openapi('ListInstancesResponse')

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

const ListTablesResponseSchema = z
  .object({
    nextPageToken: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Set if not all tables could be returned in a single response. Pass this value to `page_token` in another request to get the next page of results.',
      }),
    tables: z
      .array(TableSchema)
      .exactOptional()
      .openapi({ description: 'The tables present in the requested instance.' }),
  })
  .openapi({
    description: 'Response message for google.bigtable.admin.v2.BigtableTableAdmin.ListTables',
    required: [],
  })
  .openapi('ListTablesResponse')

const ModificationSchema = z
  .object({
    create: ColumnFamilySchema.exactOptional().openapi({
      description:
        'Create a new column family with the specified schema, or fail if one already exists with the given ID.',
    }),
    drop: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Drop (delete) the column family with the given ID, or fail if no such family exists.',
      }),
    id: z
      .string()
      .exactOptional()
      .openapi({ description: 'The ID of the column family to be modified.' }),
    update: ColumnFamilySchema.exactOptional().openapi({
      description:
        'Update an existing column family to the specified schema, or fail if no column family exists with the given ID.',
    }),
  })
  .openapi({
    description: 'A create, update, or delete of a particular column family.',
    required: [],
  })
  .openapi('Modification')

const ModifyColumnFamiliesRequestSchema = z
  .object({
    modifications: z
      .array(ModificationSchema)
      .exactOptional()
      .openapi({
        description:
          "Required. Modifications to be atomically applied to the specified table's families. Entries are applied in order, meaning that earlier modifications can be masked by later ones (in the case of repeated updates to the same family, for example).",
      }),
  })
  .openapi({
    description:
      'Request message for google.bigtable.admin.v2.BigtableTableAdmin.ModifyColumnFamilies',
    required: [],
  })
  .openapi('ModifyColumnFamiliesRequest')

const OptimizeRestoredTableMetadataSchema = z
  .object({
    name: z
      .string()
      .exactOptional()
      .openapi({ description: 'Name of the restored table being optimized.' }),
    progress: OperationProgressSchema.exactOptional().openapi({
      description: 'The progress of the post-restore optimizations.',
    }),
  })
  .openapi({
    description:
      'Metadata type for the long-running operation used to track the progress of optimizations performed on a newly restored table. This long-running operation is automatically created by the system after the successful completion of a table restore, and cannot be cancelled.',
    required: [],
  })
  .openapi('OptimizeRestoredTableMetadata')

const PartialUpdateClusterRequestSchema = z
  .object({
    cluster: ClusterSchema.exactOptional().openapi({
      description:
        'Required. The Cluster which contains the partial updates to be applied, subject to the update_mask.',
    }),
    updateMask: z
      .string()
      .exactOptional()
      .openapi({ description: 'Required. The subset of Cluster fields which should be replaced.' }),
  })
  .openapi({
    description: 'Request message for BigtableInstanceAdmin.PartialUpdateCluster.',
    required: [],
  })
  .openapi('PartialUpdateClusterRequest')

const PartialUpdateClusterMetadataSchema = z
  .object({
    finishTime: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The time at which the operation failed or was completed successfully.',
      }),
    originalRequest: PartialUpdateClusterRequestSchema.exactOptional().openapi({
      description: 'The original request for PartialUpdateCluster.',
    }),
    requestTime: z
      .string()
      .exactOptional()
      .openapi({ description: 'The time at which the original request was received.' }),
  })
  .openapi({
    description: 'The metadata for the Operation returned by PartialUpdateCluster.',
    required: [],
  })
  .openapi('PartialUpdateClusterMetadata')

const PartialUpdateInstanceRequestSchema = z
  .object({
    instance: InstanceSchema.exactOptional().openapi({
      description: 'Required. The Instance which will (partially) replace the current value.',
    }),
    updateMask: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Required. The subset of Instance fields which should be replaced. Must be explicitly set.',
      }),
  })
  .openapi({
    description: 'Request message for BigtableInstanceAdmin.PartialUpdateInstance.',
    required: [],
  })
  .openapi('PartialUpdateInstanceRequest')

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

const RestoreTableMetadataSchema = z
  .object({
    backupInfo: BackupInfoSchema.exactOptional(),
    name: z
      .string()
      .exactOptional()
      .openapi({ description: 'Name of the table being created and restored to.' }),
    optimizeTableOperationName: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'If exists, the name of the long-running operation that will be used to track the post-restore optimization process to optimize the performance of the restored table. The metadata type of the long-running operation is OptimizeRestoreTableMetadata. The response type is Empty. This long-running operation may be automatically created by the system if applicable after the RestoreTable long-running operation completes successfully. This operation may not be created if the table is already optimized or the restore was not successful.',
      }),
    progress: OperationProgressSchema.exactOptional().openapi({
      description: 'The progress of the RestoreTable operation.',
    }),
    sourceType: z
      .enum(['RESTORE_SOURCE_TYPE_UNSPECIFIED', 'BACKUP'])
      .exactOptional()
      .openapi({ description: 'The type of the restore source.' }),
  })
  .openapi({
    description: 'Metadata type for the long-running operation returned by RestoreTable.',
    required: [],
  })
  .openapi('RestoreTableMetadata')

const RestoreTableRequestSchema = z
  .object({
    backup: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Name of the backup from which to restore. Values are of the form `projects//instances//clusters//backups/`.',
      }),
    tableId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Required. The id of the table to create and restore to. This table must not already exist. The `table_id` appended to `parent` forms the full table name of the form `projects//instances//tables/`.',
      }),
  })
  .openapi({ description: 'The request for RestoreTable.', required: [] })
  .openapi('RestoreTableRequest')

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

const UndeleteTableMetadataSchema = z
  .object({
    endTime: z
      .string()
      .exactOptional()
      .openapi({
        description: 'If set, the time at which this operation finished or was cancelled.',
      }),
    name: z
      .string()
      .exactOptional()
      .openapi({ description: 'The name of the table being restored.' }),
    startTime: z
      .string()
      .exactOptional()
      .openapi({ description: 'The time at which this operation started.' }),
  })
  .openapi({
    description:
      'Metadata type for the operation returned by google.bigtable.admin.v2.BigtableTableAdmin.UndeleteTable.',
    required: [],
  })
  .openapi('UndeleteTableMetadata')

const UndeleteTableRequestSchema = z
  .object({})
  .openapi({
    description: 'Request message for google.bigtable.admin.v2.BigtableTableAdmin.UndeleteTable',
  })
  .openapi('UndeleteTableRequest')

const UpdateAppProfileMetadataSchema = z
  .object({})
  .openapi({ description: 'The metadata for the Operation returned by UpdateAppProfile.' })
  .openapi('UpdateAppProfileMetadata')

const UpdateClusterMetadataSchema = z
  .object({
    finishTime: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The time at which the operation failed or was completed successfully.',
      }),
    originalRequest: ClusterSchema.exactOptional().openapi({
      description: 'The request that prompted the initiation of this UpdateCluster operation.',
    }),
    requestTime: z
      .string()
      .exactOptional()
      .openapi({ description: 'The time at which the original request was received.' }),
  })
  .openapi({
    description: 'The metadata for the Operation returned by UpdateCluster.',
    required: [],
  })
  .openapi('UpdateClusterMetadata')

const UpdateInstanceMetadataSchema = z
  .object({
    finishTime: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The time at which the operation failed or was completed successfully.',
      }),
    originalRequest: PartialUpdateInstanceRequestSchema.exactOptional().openapi({
      description: 'The request that prompted the initiation of this UpdateInstance operation.',
    }),
    requestTime: z
      .string()
      .exactOptional()
      .openapi({ description: 'The time at which the original request was received.' }),
  })
  .openapi({
    description: 'The metadata for the Operation returned by UpdateInstance.',
    required: [],
  })
  .openapi('UpdateInstanceMetadata')

const UpdateTableMetadataSchema = z
  .object({
    endTime: z
      .string()
      .exactOptional()
      .openapi({
        description: 'If set, the time at which this operation finished or was canceled.',
      }),
    name: z
      .string()
      .exactOptional()
      .openapi({ description: 'The name of the table being updated.' }),
    startTime: z
      .string()
      .exactOptional()
      .openapi({ description: 'The time at which this operation started.' }),
  })
  .openapi({
    description: 'Metadata type for the operation returned by UpdateTable.',
    required: [],
  })
  .openapi('UpdateTableMetadata')

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
        'https://www.googleapis.com/auth/bigtable.admin':
          'Administer your Cloud Bigtable tables and clusters',
        'https://www.googleapis.com/auth/bigtable.admin.cluster':
          'Administer your Cloud Bigtable clusters',
        'https://www.googleapis.com/auth/bigtable.admin.instance':
          'Administer your Cloud Bigtable clusters',
        'https://www.googleapis.com/auth/bigtable.admin.table':
          'Administer your Cloud Bigtable tables',
        'https://www.googleapis.com/auth/cloud-bigtable.admin':
          'Administer your Cloud Bigtable tables and clusters',
        'https://www.googleapis.com/auth/cloud-bigtable.admin.cluster':
          'Administer your Cloud Bigtable clusters',
        'https://www.googleapis.com/auth/cloud-bigtable.admin.table':
          'Administer your Cloud Bigtable tables',
        'https://www.googleapis.com/auth/cloud-platform':
          'See, edit, configure, and delete your Google Cloud data and see the email address for your Google Account.',
        'https://www.googleapis.com/auth/cloud-platform.read-only':
          'View your data across Google Cloud services and see the email address of your Google Account',
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
        'https://www.googleapis.com/auth/bigtable.admin':
          'Administer your Cloud Bigtable tables and clusters',
        'https://www.googleapis.com/auth/bigtable.admin.cluster':
          'Administer your Cloud Bigtable clusters',
        'https://www.googleapis.com/auth/bigtable.admin.instance':
          'Administer your Cloud Bigtable clusters',
        'https://www.googleapis.com/auth/bigtable.admin.table':
          'Administer your Cloud Bigtable tables',
        'https://www.googleapis.com/auth/cloud-bigtable.admin':
          'Administer your Cloud Bigtable tables and clusters',
        'https://www.googleapis.com/auth/cloud-bigtable.admin.cluster':
          'Administer your Cloud Bigtable clusters',
        'https://www.googleapis.com/auth/cloud-bigtable.admin.table':
          'Administer your Cloud Bigtable tables',
        'https://www.googleapis.com/auth/cloud-platform':
          'See, edit, configure, and delete your Google Cloud data and see the email address for your Google Account.',
        'https://www.googleapis.com/auth/cloud-platform.read-only':
          'View your data across Google Cloud services and see the email address of your Google Account',
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
  description: 'Gets information about a location.',
  operationId: 'bigtableadmin.projects.locations.get',
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
      view: z
        .enum([
          'VIEW_UNSPECIFIED',
          'NAME_ONLY',
          'SCHEMA_VIEW',
          'REPLICATION_VIEW',
          'ENCRYPTION_VIEW',
          'STATS_VIEW',
          'FULL',
        ])
        .exactOptional()
        .openapi({
          param: {
            description:
              "The view to be applied to the returned table's fields. Defaults to `SCHEMA_VIEW` if unspecified.",
            in: 'query',
            name: 'view',
            schema: {
              enum: [
                'VIEW_UNSPECIFIED',
                'NAME_ONLY',
                'SCHEMA_VIEW',
                'REPLICATION_VIEW',
                'ENCRYPTION_VIEW',
                'STATS_VIEW',
                'FULL',
              ],
              type: 'string',
            },
            required: false,
          },
        }),
    }),
    params: z.object({
      name: z
        .string()
        .openapi({
          param: {
            description: 'Resource name for the location.',
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
      content: { 'application/json': { schema: LocationSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/bigtable.admin'],
      Oauth2c: ['https://www.googleapis.com/auth/bigtable.admin'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/bigtable.admin.cluster'],
      Oauth2c: ['https://www.googleapis.com/auth/bigtable.admin.cluster'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/bigtable.admin.instance'],
      Oauth2c: ['https://www.googleapis.com/auth/bigtable.admin.instance'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-bigtable.admin'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-bigtable.admin'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-bigtable.admin.cluster'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-bigtable.admin.cluster'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform.read-only'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform.read-only'],
    },
  ],
})

export const putV2NameRoute = createRoute({
  method: 'put',
  path: '/v2/{name}',
  tags: ['projects'],
  description:
    'Updates a cluster within an instance. Note that UpdateCluster does not support updating cluster_config.cluster_autoscaling_config. In order to update it, you must use PartialUpdateCluster.',
  operationId: 'bigtableadmin.projects.instances.clusters.update',
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
              'The unique name of the cluster. Values are of the form `projects/{project}/instances/{instance}/clusters/a-z*`.',
            in: 'path',
            name: 'name',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: ClusterSchema } } },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: OperationSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/bigtable.admin'],
      Oauth2c: ['https://www.googleapis.com/auth/bigtable.admin'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/bigtable.admin.cluster'],
      Oauth2c: ['https://www.googleapis.com/auth/bigtable.admin.cluster'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/bigtable.admin.instance'],
      Oauth2c: ['https://www.googleapis.com/auth/bigtable.admin.instance'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-bigtable.admin'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-bigtable.admin'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-bigtable.admin.cluster'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-bigtable.admin.cluster'],
    },
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
  description: 'Permanently deletes a specified table and all of its data.',
  operationId: 'bigtableadmin.projects.instances.tables.delete',
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
      ignoreWarnings: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            description: 'Required. If true, ignore safety checks when deleting the app profile.',
            in: 'query',
            name: 'ignoreWarnings',
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
              'Required. The unique name of the table to be deleted. Values are of the form `projects/{project}/instances/{instance}/tables/{table}`.',
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
      content: { 'application/json': { schema: EmptySchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/bigtable.admin'],
      Oauth2c: ['https://www.googleapis.com/auth/bigtable.admin'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/bigtable.admin.table'],
      Oauth2c: ['https://www.googleapis.com/auth/bigtable.admin.table'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-bigtable.admin'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-bigtable.admin'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-bigtable.admin.table'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-bigtable.admin.table'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
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
  description: 'Updates a specified table.',
  operationId: 'bigtableadmin.projects.instances.tables.patch',
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
              'Required. The list of fields to update. A mask specifying which fields (e.g. `change_stream_config`) in the `table` field should be updated. This mask is relative to the `table` field, not to the request message. The wildcard (*) path is currently not supported. Currently UpdateTable is only supported for the following fields: * `change_stream_config` * `change_stream_config.retention_period` * `deletion_protection` If `column_families` is set in `update_mask`, it will return an UNIMPLEMENTED error.',
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
              'The unique name of the table. Values are of the form `projects/{project}/instances/{instance}/tables/_a-zA-Z0-9*`. Views: `NAME_ONLY`, `SCHEMA_VIEW`, `REPLICATION_VIEW`, `STATS_VIEW`, `FULL`',
            in: 'path',
            name: 'name',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: TableSchema } } },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: OperationSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/bigtable.admin'],
      Oauth2c: ['https://www.googleapis.com/auth/bigtable.admin'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/bigtable.admin.table'],
      Oauth2c: ['https://www.googleapis.com/auth/bigtable.admin.table'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-bigtable.admin'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-bigtable.admin'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-bigtable.admin.table'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-bigtable.admin.table'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
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
  operationId: 'bigtableadmin.projects.locations.list',
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
      Oauth2: ['https://www.googleapis.com/auth/bigtable.admin'],
      Oauth2c: ['https://www.googleapis.com/auth/bigtable.admin'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/bigtable.admin.cluster'],
      Oauth2c: ['https://www.googleapis.com/auth/bigtable.admin.cluster'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/bigtable.admin.instance'],
      Oauth2c: ['https://www.googleapis.com/auth/bigtable.admin.instance'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-bigtable.admin'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-bigtable.admin'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-bigtable.admin.cluster'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-bigtable.admin.cluster'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform.read-only'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform.read-only'],
    },
  ],
})

export const getV2NameOperationsRoute = createRoute({
  method: 'get',
  path: '/v2/{name}/operations',
  tags: ['operations'],
  description:
    "Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`.",
  operationId: 'bigtableadmin.operations.projects.operations.list',
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
      Oauth2: ['https://www.googleapis.com/auth/bigtable.admin'],
      Oauth2c: ['https://www.googleapis.com/auth/bigtable.admin'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/bigtable.admin.cluster'],
      Oauth2c: ['https://www.googleapis.com/auth/bigtable.admin.cluster'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/bigtable.admin.instance'],
      Oauth2c: ['https://www.googleapis.com/auth/bigtable.admin.instance'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-bigtable.admin'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-bigtable.admin'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-bigtable.admin.cluster'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-bigtable.admin.cluster'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform.read-only'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform.read-only'],
    },
  ],
})

export const postV2NameCancelRoute = createRoute({
  method: 'post',
  path: '/v2/{name}:cancel',
  tags: ['operations'],
  description:
    "Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of 1, corresponding to `Code.CANCELLED`.",
  operationId: 'bigtableadmin.operations.cancel',
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
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: EmptySchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/bigtable.admin'],
      Oauth2c: ['https://www.googleapis.com/auth/bigtable.admin'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/bigtable.admin.cluster'],
      Oauth2c: ['https://www.googleapis.com/auth/bigtable.admin.cluster'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/bigtable.admin.instance'],
      Oauth2c: ['https://www.googleapis.com/auth/bigtable.admin.instance'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-bigtable.admin'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-bigtable.admin'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-bigtable.admin.cluster'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-bigtable.admin.cluster'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
  ],
})

export const postV2NameCheckConsistencyRoute = createRoute({
  method: 'post',
  path: '/v2/{name}:checkConsistency',
  tags: ['projects'],
  description:
    'Checks replication consistency based on a consistency token, that is, if replication has caught up based on the conditions specified in the token and the check request.',
  operationId: 'bigtableadmin.projects.instances.tables.checkConsistency',
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
              'Required. The unique name of the Table for which to check replication consistency. Values are of the form `projects/{project}/instances/{instance}/tables/{table}`.',
            in: 'path',
            name: 'name',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: CheckConsistencyRequestSchema } } },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: CheckConsistencyResponseSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/bigtable.admin'],
      Oauth2c: ['https://www.googleapis.com/auth/bigtable.admin'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/bigtable.admin.table'],
      Oauth2c: ['https://www.googleapis.com/auth/bigtable.admin.table'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-bigtable.admin'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-bigtable.admin'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-bigtable.admin.table'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-bigtable.admin.table'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
  ],
})

export const postV2NameDropRowRangeRoute = createRoute({
  method: 'post',
  path: '/v2/{name}:dropRowRange',
  tags: ['projects'],
  description:
    'Permanently drop/delete a row range from a specified table. The request can specify whether to delete all rows in a table, or only those that match a particular prefix.',
  operationId: 'bigtableadmin.projects.instances.tables.dropRowRange',
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
              'Required. The unique name of the table on which to drop a range of rows. Values are of the form `projects/{project}/instances/{instance}/tables/{table}`.',
            in: 'path',
            name: 'name',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: DropRowRangeRequestSchema } } },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: EmptySchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/bigtable.admin'],
      Oauth2c: ['https://www.googleapis.com/auth/bigtable.admin'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/bigtable.admin.table'],
      Oauth2c: ['https://www.googleapis.com/auth/bigtable.admin.table'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-bigtable.admin'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-bigtable.admin'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-bigtable.admin.table'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-bigtable.admin.table'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
  ],
})

export const postV2NameGenerateConsistencyTokenRoute = createRoute({
  method: 'post',
  path: '/v2/{name}:generateConsistencyToken',
  tags: ['projects'],
  description:
    'Generates a consistency token for a Table, which can be used in CheckConsistency to check whether mutations to the table that finished before this call started have been replicated. The tokens will be available for 90 days.',
  operationId: 'bigtableadmin.projects.instances.tables.generateConsistencyToken',
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
              'Required. The unique name of the Table for which to create a consistency token. Values are of the form `projects/{project}/instances/{instance}/tables/{table}`.',
            in: 'path',
            name: 'name',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: GenerateConsistencyTokenRequestSchema } } },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: GenerateConsistencyTokenResponseSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/bigtable.admin'],
      Oauth2c: ['https://www.googleapis.com/auth/bigtable.admin'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/bigtable.admin.table'],
      Oauth2c: ['https://www.googleapis.com/auth/bigtable.admin.table'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-bigtable.admin'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-bigtable.admin'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-bigtable.admin.table'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-bigtable.admin.table'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
  ],
})

export const postV2NameModifyColumnFamiliesRoute = createRoute({
  method: 'post',
  path: '/v2/{name}:modifyColumnFamilies',
  tags: ['projects'],
  description:
    'Performs a series of column family modifications on the specified table. Either all or none of the modifications will occur before this method returns, but data requests received prior to that point may see a table where only some modifications have taken effect.',
  operationId: 'bigtableadmin.projects.instances.tables.modifyColumnFamilies',
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
              'Required. The unique name of the table whose families should be modified. Values are of the form `projects/{project}/instances/{instance}/tables/{table}`.',
            in: 'path',
            name: 'name',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: ModifyColumnFamiliesRequestSchema } } },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: TableSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/bigtable.admin'],
      Oauth2c: ['https://www.googleapis.com/auth/bigtable.admin'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/bigtable.admin.table'],
      Oauth2c: ['https://www.googleapis.com/auth/bigtable.admin.table'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-bigtable.admin'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-bigtable.admin'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-bigtable.admin.table'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-bigtable.admin.table'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
  ],
})

export const postV2NameUndeleteRoute = createRoute({
  method: 'post',
  path: '/v2/{name}:undelete',
  tags: ['projects'],
  description: 'Restores a specified table which was accidentally deleted.',
  operationId: 'bigtableadmin.projects.instances.tables.undelete',
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
              'Required. The unique name of the table to be restored. Values are of the form `projects/{project}/instances/{instance}/tables/{table}`.',
            in: 'path',
            name: 'name',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: UndeleteTableRequestSchema } } },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: OperationSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/bigtable.admin'],
      Oauth2c: ['https://www.googleapis.com/auth/bigtable.admin'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/bigtable.admin.table'],
      Oauth2c: ['https://www.googleapis.com/auth/bigtable.admin.table'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-bigtable.admin'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-bigtable.admin'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-bigtable.admin.table'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-bigtable.admin.table'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
  ],
})

export const getV2ParentAppProfilesRoute = createRoute({
  method: 'get',
  path: '/v2/{parent}/appProfiles',
  tags: ['projects'],
  description: 'Lists information about app profiles in an instance.',
  operationId: 'bigtableadmin.projects.instances.appProfiles.list',
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
            description:
              'Maximum number of results per page. A page_size of zero lets the server choose the number of items to return. A page_size which is strictly positive will return at most that many items. A negative page_size will cause an error. Following the first request, subsequent paginated calls are not required to pass a page_size. If a page_size is set in subsequent calls, it must match the page_size given in the first request.',
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
            description: 'The value of `next_page_token` returned by a previous call.',
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
              "Required. The unique name of the instance for which a list of app profiles is requested. Values are of the form `projects/{project}/instances/{instance}`. Use `{instance} = '-'` to list AppProfiles for all Instances in a project, e.g., `projects/myproject/instances/-`.",
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
      content: { 'application/json': { schema: ListAppProfilesResponseSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/bigtable.admin'],
      Oauth2c: ['https://www.googleapis.com/auth/bigtable.admin'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/bigtable.admin.cluster'],
      Oauth2c: ['https://www.googleapis.com/auth/bigtable.admin.cluster'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/bigtable.admin.instance'],
      Oauth2c: ['https://www.googleapis.com/auth/bigtable.admin.instance'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-bigtable.admin'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-bigtable.admin'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-bigtable.admin.cluster'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-bigtable.admin.cluster'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
  ],
})

export const postV2ParentAppProfilesRoute = createRoute({
  method: 'post',
  path: '/v2/{parent}/appProfiles',
  tags: ['projects'],
  description: 'Creates an app profile within an instance.',
  operationId: 'bigtableadmin.projects.instances.appProfiles.create',
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
      appProfileId: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Required. The ID to be used when referring to the new app profile within its instance, e.g., just `myprofile` rather than `projects/myproject/instances/myinstance/appProfiles/myprofile`.',
            in: 'query',
            name: 'appProfileId',
            schema: { type: 'string' },
            required: false,
          },
        }),
      ignoreWarnings: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            description: 'If true, ignore safety checks when creating the app profile.',
            in: 'query',
            name: 'ignoreWarnings',
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
              'Required. The unique name of the instance in which to create the new app profile. Values are of the form `projects/{project}/instances/{instance}`.',
            in: 'path',
            name: 'parent',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: AppProfileSchema } } },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: AppProfileSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/bigtable.admin'],
      Oauth2c: ['https://www.googleapis.com/auth/bigtable.admin'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/bigtable.admin.cluster'],
      Oauth2c: ['https://www.googleapis.com/auth/bigtable.admin.cluster'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/bigtable.admin.instance'],
      Oauth2c: ['https://www.googleapis.com/auth/bigtable.admin.instance'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-bigtable.admin'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-bigtable.admin'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-bigtable.admin.cluster'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-bigtable.admin.cluster'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
  ],
})

export const getV2ParentBackupsRoute = createRoute({
  method: 'get',
  path: '/v2/{parent}/backups',
  tags: ['projects'],
  description: 'Lists Cloud Bigtable backups. Returns both completed and pending backups.',
  operationId: 'bigtableadmin.projects.instances.clusters.backups.list',
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
              'A filter expression that filters backups listed in the response. The expression must specify the field name, a comparison operator, and the value that you want to use for filtering. The value must be a string, a number, or a boolean. The comparison operator must be <, >, <=, >=, !=, =, or :. Colon \':\' represents a HAS operator which is roughly synonymous with equality. Filter rules are case insensitive. The fields eligible for filtering are: * `name` * `source_table` * `state` * `start_time` (and values are of the format YYYY-MM-DDTHH:MM:SSZ) * `end_time` (and values are of the format YYYY-MM-DDTHH:MM:SSZ) * `expire_time` (and values are of the format YYYY-MM-DDTHH:MM:SSZ) * `size_bytes` To filter on multiple expressions, provide each separate expression within parentheses. By default, each expression is an AND expression. However, you can include AND, OR, and NOT expressions explicitly. Some examples of using filters are: * `name:"exact"` --> The backup\'s name is the string "exact". * `name:howl` --> The backup\'s name contains the string "howl". * `source_table:prod` --> The source_table\'s name contains the string "prod". * `state:CREATING` --> The backup is pending creation. * `state:READY` --> The backup is fully created and ready for use. * `(name:howl) AND (start_time < \\"2018-03-28T14:50:00Z\\")` --> The backup name contains the string "howl" and start_time of the backup is before 2018-03-28T14:50:00Z. * `size_bytes > 10000000000` --> The backup\'s size is greater than 10GB',
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
              'An expression for specifying the sort order of the results of the request. The string value should specify one or more fields in Backup. The full syntax is described at https://aip.dev/132#ordering. Fields supported are: * name * source_table * expire_time * start_time * end_time * size_bytes * state For example, "start_time". The default sorting order is ascending. To specify descending order for the field, a suffix " desc" should be appended to the field name. For example, "start_time desc". Redundant space characters in the syntax are insigificant. If order_by is empty, results will be sorted by `start_time` in descending order starting from the most recently created backup.',
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
              "Number of backups to be returned in the response. If 0 or less, defaults to the server's maximum allowed page size.",
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
              'If non-empty, `page_token` should contain a next_page_token from a previous ListBackupsResponse to the same `parent` and with the same `filter`.',
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
              "Required. The cluster to list backups from. Values are of the form `projects/{project}/instances/{instance}/clusters/{cluster}`. Use `{cluster} = '-'` to list backups for all clusters in an instance, e.g., `projects/{project}/instances/{instance}/clusters/-`.",
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
      content: { 'application/json': { schema: ListBackupsResponseSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/bigtable.admin'],
      Oauth2c: ['https://www.googleapis.com/auth/bigtable.admin'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/bigtable.admin.table'],
      Oauth2c: ['https://www.googleapis.com/auth/bigtable.admin.table'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-bigtable.admin'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-bigtable.admin'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-bigtable.admin.table'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-bigtable.admin.table'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
  ],
})

export const postV2ParentBackupsRoute = createRoute({
  method: 'post',
  path: '/v2/{parent}/backups',
  tags: ['projects'],
  description:
    'Starts creating a new Cloud Bigtable Backup. The returned backup long-running operation can be used to track creation of the backup. The metadata field type is CreateBackupMetadata. The response field type is Backup, if successful. Cancelling the returned operation will stop the creation and delete the backup.',
  operationId: 'bigtableadmin.projects.instances.clusters.backups.create',
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
      backupId: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Required. The id of the backup to be created. The `backup_id` along with the parent `parent` are combined as {parent}/backups/{backup_id} to create the full backup name, of the form: `projects/{project}/instances/{instance}/clusters/{cluster}/backups/{backup_id}`. This string must be between 1 and 50 characters in length and match the regex _a-zA-Z0-9*.',
            in: 'query',
            name: 'backupId',
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
              'Required. This must be one of the clusters in the instance in which this table is located. The backup will be stored in this cluster. Values are of the form `projects/{project}/instances/{instance}/clusters/{cluster}`.',
            in: 'path',
            name: 'parent',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: BackupSchema } } },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: OperationSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/bigtable.admin'],
      Oauth2c: ['https://www.googleapis.com/auth/bigtable.admin'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/bigtable.admin.table'],
      Oauth2c: ['https://www.googleapis.com/auth/bigtable.admin.table'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-bigtable.admin'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-bigtable.admin'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-bigtable.admin.table'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-bigtable.admin.table'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
  ],
})

export const postV2ParentBackupsCopyRoute = createRoute({
  method: 'post',
  path: '/v2/{parent}/backups:copy',
  tags: ['projects'],
  description:
    'Copy a Cloud Bigtable backup to a new backup in the destination cluster located in the destination instance and project.',
  operationId: 'bigtableadmin.projects.instances.clusters.backups.copy',
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
              'Required. The name of the destination cluster that will contain the backup copy. The cluster must already exists. Values are of the form: `projects/{project}/instances/{instance}/clusters/{cluster}`.',
            in: 'path',
            name: 'parent',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: CopyBackupRequestSchema } } },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: OperationSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/bigtable.admin'],
      Oauth2c: ['https://www.googleapis.com/auth/bigtable.admin'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/bigtable.admin.table'],
      Oauth2c: ['https://www.googleapis.com/auth/bigtable.admin.table'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-bigtable.admin'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-bigtable.admin'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-bigtable.admin.table'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-bigtable.admin.table'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
  ],
})

export const getV2ParentClustersRoute = createRoute({
  method: 'get',
  path: '/v2/{parent}/clusters',
  tags: ['projects'],
  description: 'Lists information about clusters in an instance.',
  operationId: 'bigtableadmin.projects.instances.clusters.list',
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
      pageToken: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'DEPRECATED: This field is unused and ignored.',
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
              "Required. The unique name of the instance for which a list of clusters is requested. Values are of the form `projects/{project}/instances/{instance}`. Use `{instance} = '-'` to list Clusters for all Instances in a project, e.g., `projects/myproject/instances/-`.",
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
      content: { 'application/json': { schema: ListClustersResponseSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/bigtable.admin'],
      Oauth2c: ['https://www.googleapis.com/auth/bigtable.admin'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/bigtable.admin.cluster'],
      Oauth2c: ['https://www.googleapis.com/auth/bigtable.admin.cluster'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/bigtable.admin.instance'],
      Oauth2c: ['https://www.googleapis.com/auth/bigtable.admin.instance'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-bigtable.admin'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-bigtable.admin'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-bigtable.admin.cluster'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-bigtable.admin.cluster'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform.read-only'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform.read-only'],
    },
  ],
})

export const postV2ParentClustersRoute = createRoute({
  method: 'post',
  path: '/v2/{parent}/clusters',
  tags: ['projects'],
  description:
    'Creates a cluster within an instance. Note that exactly one of Cluster.serve_nodes and Cluster.cluster_config.cluster_autoscaling_config can be set. If serve_nodes is set to non-zero, then the cluster is manually scaled. If cluster_config.cluster_autoscaling_config is non-empty, then autoscaling is enabled.',
  operationId: 'bigtableadmin.projects.instances.clusters.create',
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
      clusterId: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Required. The ID to be used when referring to the new cluster within its instance, e.g., just `mycluster` rather than `projects/myproject/instances/myinstance/clusters/mycluster`.',
            in: 'query',
            name: 'clusterId',
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
              'Required. The unique name of the instance in which to create the new cluster. Values are of the form `projects/{project}/instances/{instance}`.',
            in: 'path',
            name: 'parent',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: ClusterSchema } } },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: OperationSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/bigtable.admin'],
      Oauth2c: ['https://www.googleapis.com/auth/bigtable.admin'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/bigtable.admin.cluster'],
      Oauth2c: ['https://www.googleapis.com/auth/bigtable.admin.cluster'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/bigtable.admin.instance'],
      Oauth2c: ['https://www.googleapis.com/auth/bigtable.admin.instance'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-bigtable.admin'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-bigtable.admin'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-bigtable.admin.cluster'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-bigtable.admin.cluster'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
  ],
})

export const getV2ParentHotTabletsRoute = createRoute({
  method: 'get',
  path: '/v2/{parent}/hotTablets',
  tags: ['projects'],
  description:
    'Lists hot tablets in a cluster, within the time range provided. Hot tablets are ordered based on CPU usage.',
  operationId: 'bigtableadmin.projects.instances.clusters.hotTablets.list',
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
      endTime: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'The end time to list hot tablets.',
            in: 'query',
            name: 'endTime',
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
              'Maximum number of results per page. A page_size that is empty or zero lets the server choose the number of items to return. A page_size which is strictly positive will return at most that many items. A negative page_size will cause an error. Following the first request, subsequent paginated calls do not need a page_size field. If a page_size is set in subsequent calls, it must match the page_size given in the first request.',
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
            description: 'The value of `next_page_token` returned by a previous call.',
            in: 'query',
            name: 'pageToken',
            schema: { type: 'string' },
            required: false,
          },
        }),
      startTime: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'The start time to list hot tablets. The hot tablets in the response will have start times between the requested start time and end time. Start time defaults to Now if it is unset, and end time defaults to Now - 24 hours if it is unset. The start time should be less than the end time, and the maximum allowed time range between start time and end time is 48 hours. Start time and end time should have values between Now and Now - 14 days.',
            in: 'query',
            name: 'startTime',
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
              'Required. The cluster name to list hot tablets. Value is in the following form: `projects/{project}/instances/{instance}/clusters/{cluster}`.',
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
      content: { 'application/json': { schema: ListHotTabletsResponseSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/bigtable.admin'],
      Oauth2c: ['https://www.googleapis.com/auth/bigtable.admin'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/bigtable.admin.cluster'],
      Oauth2c: ['https://www.googleapis.com/auth/bigtable.admin.cluster'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/bigtable.admin.instance'],
      Oauth2c: ['https://www.googleapis.com/auth/bigtable.admin.instance'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-bigtable.admin'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-bigtable.admin'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-bigtable.admin.cluster'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-bigtable.admin.cluster'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
  ],
})

export const getV2ParentInstancesRoute = createRoute({
  method: 'get',
  path: '/v2/{parent}/instances',
  tags: ['projects'],
  description: 'Lists information about instances in a project.',
  operationId: 'bigtableadmin.projects.instances.list',
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
      pageToken: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'DEPRECATED: This field is unused and ignored.',
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
              'Required. The unique name of the project for which a list of instances is requested. Values are of the form `projects/{project}`.',
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
      content: { 'application/json': { schema: ListInstancesResponseSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/bigtable.admin'],
      Oauth2c: ['https://www.googleapis.com/auth/bigtable.admin'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/bigtable.admin.cluster'],
      Oauth2c: ['https://www.googleapis.com/auth/bigtable.admin.cluster'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/bigtable.admin.instance'],
      Oauth2c: ['https://www.googleapis.com/auth/bigtable.admin.instance'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-bigtable.admin'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-bigtable.admin'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-bigtable.admin.cluster'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-bigtable.admin.cluster'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform.read-only'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform.read-only'],
    },
  ],
})

export const postV2ParentInstancesRoute = createRoute({
  method: 'post',
  path: '/v2/{parent}/instances',
  tags: ['projects'],
  description:
    'Create an instance within a project. Note that exactly one of Cluster.serve_nodes and Cluster.cluster_config.cluster_autoscaling_config can be set. If serve_nodes is set to non-zero, then the cluster is manually scaled. If cluster_config.cluster_autoscaling_config is non-empty, then autoscaling is enabled.',
  operationId: 'bigtableadmin.projects.instances.create',
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
              'Required. The unique name of the project in which to create the new instance. Values are of the form `projects/{project}`.',
            in: 'path',
            name: 'parent',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: CreateInstanceRequestSchema } } },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: OperationSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/bigtable.admin'],
      Oauth2c: ['https://www.googleapis.com/auth/bigtable.admin'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/bigtable.admin.cluster'],
      Oauth2c: ['https://www.googleapis.com/auth/bigtable.admin.cluster'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/bigtable.admin.instance'],
      Oauth2c: ['https://www.googleapis.com/auth/bigtable.admin.instance'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-bigtable.admin'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-bigtable.admin'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-bigtable.admin.cluster'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-bigtable.admin.cluster'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
  ],
})

export const getV2ParentTablesRoute = createRoute({
  method: 'get',
  path: '/v2/{parent}/tables',
  tags: ['projects'],
  description: 'Lists all tables served from a specified instance.',
  operationId: 'bigtableadmin.projects.instances.tables.list',
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
            description:
              'Maximum number of results per page. A page_size of zero lets the server choose the number of items to return. A page_size which is strictly positive will return at most that many items. A negative page_size will cause an error. Following the first request, subsequent paginated calls are not required to pass a page_size. If a page_size is set in subsequent calls, it must match the page_size given in the first request.',
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
            description: 'The value of `next_page_token` returned by a previous call.',
            in: 'query',
            name: 'pageToken',
            schema: { type: 'string' },
            required: false,
          },
        }),
      view: z
        .enum([
          'VIEW_UNSPECIFIED',
          'NAME_ONLY',
          'SCHEMA_VIEW',
          'REPLICATION_VIEW',
          'ENCRYPTION_VIEW',
          'STATS_VIEW',
          'FULL',
        ])
        .exactOptional()
        .openapi({
          param: {
            description:
              "The view to be applied to the returned tables' fields. Only NAME_ONLY view (default), REPLICATION_VIEW and ENCRYPTION_VIEW are supported.",
            in: 'query',
            name: 'view',
            schema: {
              enum: [
                'VIEW_UNSPECIFIED',
                'NAME_ONLY',
                'SCHEMA_VIEW',
                'REPLICATION_VIEW',
                'ENCRYPTION_VIEW',
                'STATS_VIEW',
                'FULL',
              ],
              type: 'string',
            },
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
              'Required. The unique name of the instance for which tables should be listed. Values are of the form `projects/{project}/instances/{instance}`.',
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
      content: { 'application/json': { schema: ListTablesResponseSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/bigtable.admin'],
      Oauth2c: ['https://www.googleapis.com/auth/bigtable.admin'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/bigtable.admin.table'],
      Oauth2c: ['https://www.googleapis.com/auth/bigtable.admin.table'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-bigtable.admin'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-bigtable.admin'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-bigtable.admin.table'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-bigtable.admin.table'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform.read-only'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform.read-only'],
    },
  ],
})

export const postV2ParentTablesRoute = createRoute({
  method: 'post',
  path: '/v2/{parent}/tables',
  tags: ['projects'],
  description:
    'Creates a new table in the specified instance. The table can be created with a full set of initial column families, specified in the request.',
  operationId: 'bigtableadmin.projects.instances.tables.create',
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
              'Required. The unique name of the instance in which to create the table. Values are of the form `projects/{project}/instances/{instance}`.',
            in: 'path',
            name: 'parent',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: CreateTableRequestSchema } } },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: TableSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/bigtable.admin'],
      Oauth2c: ['https://www.googleapis.com/auth/bigtable.admin'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/bigtable.admin.table'],
      Oauth2c: ['https://www.googleapis.com/auth/bigtable.admin.table'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-bigtable.admin'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-bigtable.admin'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-bigtable.admin.table'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-bigtable.admin.table'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
  ],
})

export const postV2ParentTablesRestoreRoute = createRoute({
  method: 'post',
  path: '/v2/{parent}/tables:restore',
  tags: ['projects'],
  description:
    'Create a new table by restoring from a completed backup. The returned table long-running operation can be used to track the progress of the operation, and to cancel it. The metadata field type is RestoreTableMetadata. The response type is Table, if successful.',
  operationId: 'bigtableadmin.projects.instances.tables.restore',
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
              'Required. The name of the instance in which to create the restored table. Values are of the form `projects//instances/`.',
            in: 'path',
            name: 'parent',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: RestoreTableRequestSchema } } },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: OperationSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/bigtable.admin'],
      Oauth2c: ['https://www.googleapis.com/auth/bigtable.admin'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/bigtable.admin.table'],
      Oauth2c: ['https://www.googleapis.com/auth/bigtable.admin.table'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-bigtable.admin'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-bigtable.admin'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-bigtable.admin.table'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-bigtable.admin.table'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
  ],
})

export const postV2ResourceGetIamPolicyRoute = createRoute({
  method: 'post',
  path: '/v2/{resource}:getIamPolicy',
  tags: ['projects'],
  description:
    'Gets the access control policy for a Table resource. Returns an empty policy if the resource exists but does not have a policy set.',
  operationId: 'bigtableadmin.projects.instances.tables.getIamPolicy',
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
              'REQUIRED: The resource for which the policy is being requested. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field.',
            in: 'path',
            name: 'resource',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: GetIamPolicyRequestSchema } } },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: PolicySchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/bigtable.admin'],
      Oauth2c: ['https://www.googleapis.com/auth/bigtable.admin'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/bigtable.admin.table'],
      Oauth2c: ['https://www.googleapis.com/auth/bigtable.admin.table'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-bigtable.admin'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-bigtable.admin'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-bigtable.admin.table'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-bigtable.admin.table'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
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
  description: 'Sets the access control policy on a Table resource. Replaces any existing policy.',
  operationId: 'bigtableadmin.projects.instances.tables.setIamPolicy',
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
      Oauth2: ['https://www.googleapis.com/auth/bigtable.admin'],
      Oauth2c: ['https://www.googleapis.com/auth/bigtable.admin'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/bigtable.admin.table'],
      Oauth2c: ['https://www.googleapis.com/auth/bigtable.admin.table'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-bigtable.admin'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-bigtable.admin'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-bigtable.admin.table'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-bigtable.admin.table'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
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
  description: 'Returns permissions that the caller has on the specified table resource.',
  operationId: 'bigtableadmin.projects.instances.tables.testIamPermissions',
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
      Oauth2: ['https://www.googleapis.com/auth/bigtable.admin'],
      Oauth2c: ['https://www.googleapis.com/auth/bigtable.admin'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/bigtable.admin.table'],
      Oauth2c: ['https://www.googleapis.com/auth/bigtable.admin.table'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-bigtable.admin'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-bigtable.admin'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-bigtable.admin.table'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-bigtable.admin.table'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
  ],
})
