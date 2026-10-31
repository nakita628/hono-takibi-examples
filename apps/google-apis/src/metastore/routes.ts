import { createRoute, z } from '@hono/zod-openapi'

const AlterMetadataResourceLocationRequestSchema = z
  .object({
    locationUri: z
      .string()
      .exactOptional()
      .openapi({ description: 'Required. The new location URI for the metadata resource.' }),
    resourceName: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Required. The relative metadata resource name in the following format.databases/{database_id} or databases/{database_id}/tables/{table_id} or databases/{database_id}/tables/{table_id}/partitions/{partition_id}',
      }),
  })
  .openapi({
    description: 'Request message for DataprocMetastore.AlterMetadataResourceLocation.',
    required: [],
  })
  .openapi('AlterMetadataResourceLocationRequest')

const AlterMetadataResourceLocationResponseSchema = z
  .object({})
  .openapi({ description: 'Response message for DataprocMetastore.AlterMetadataResourceLocation.' })
  .openapi('AlterMetadataResourceLocationResponse')

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
          'Specifies a service that will be enabled for audit logging. For example, storage.googleapis.com, cloudsql.googleapis.com. allServices is a special value that covers all services.',
      }),
  })
  .openapi({
    description:
      'Specifies the audit configuration for a service. The configuration determines which permission types are logged, and what identities, if any, are exempted from logging. An AuditConfig must have one or more AuditLogConfigs.If there are AuditConfigs for both allServices and a specific service, the union of the two AuditConfigs is used for that service: the log_types specified in each AuditConfig are enabled, and the exempted_members in each AuditLogConfig are exempted.Example Policy with multiple AuditConfigs: { "audit_configs": [ { "service": "allServices", "audit_log_configs": [ { "log_type": "DATA_READ", "exempted_members": [ "user:jose@example.com" ] }, { "log_type": "DATA_WRITE" }, { "log_type": "ADMIN_READ" } ] }, { "service": "sampleservice.googleapis.com", "audit_log_configs": [ { "log_type": "DATA_READ" }, { "log_type": "DATA_WRITE", "exempted_members": [ "user:aliya@example.com" ] } ] } ] } For sampleservice, this policy enables DATA_READ, DATA_WRITE and ADMIN_READ logging. It also exempts jose@example.com from DATA_READ logging, and aliya@example.com from DATA_WRITE logging.',
    required: [],
  })
  .openapi('AuditConfig')

const ConsumerSchema = z
  .object({
    endpointUri: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Output only. The URI of the endpoint used to access the metastore service.',
        readOnly: true,
      }),
    subnetwork: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "Immutable. The subnetwork of the customer project from which an IP address is reserved and used as the Dataproc Metastore service's endpoint. It is accessible to hosts in the subnet and to all hosts in a subnet in the same region and same network. There must be at least one IP address available in the subnet's primary range. The subnet is specified in the following form:projects/{project_number}/regions/{region_id}/subnetworks/{subnetwork_id}",
      }),
  })
  .openapi({
    description: "Contains information of the customer's network configurations.",
    required: [],
  })
  .openapi('Consumer')

const NetworkConfigSchema = z
  .object({
    consumers: z
      .array(ConsumerSchema)
      .exactOptional()
      .openapi({
        description:
          'Immutable. The consumer-side network configuration for the Dataproc Metastore instance.',
      }),
    customRoutesEnabled: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          "Enables custom routes to be imported and exported for the Dataproc Metastore service's peered VPC network.",
      }),
  })
  .openapi({
    description: 'Network configuration for the Dataproc Metastore service.',
    required: [],
  })
  .openapi('NetworkConfig')

const AuxiliaryVersionConfigSchema = z
  .object({
    configOverrides: z
      .record(z.string(), z.string())
      .exactOptional()
      .openapi({
        description:
          "A mapping of Hive metastore configuration key-value pairs to apply to the auxiliary Hive metastore (configured in hive-site.xml) in addition to the primary version's overrides. If keys are present in both the auxiliary version's overrides and the primary version's overrides, the value from the auxiliary version's overrides takes precedence.",
      }),
    networkConfig: NetworkConfigSchema.exactOptional().openapi({
      description:
        'Output only. The network configuration contains the endpoint URI(s) of the auxiliary Hive metastore service.',
      readOnly: true,
    }),
    version: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "The Hive metastore version of the auxiliary service. It must be less than the primary Hive metastore service's version.",
      }),
  })
  .openapi({
    description: 'Configuration information for the auxiliary service versions.',
    required: [],
  })
  .openapi('AuxiliaryVersionConfig')

const BackendMetastoreSchema = z
  .object({
    metastoreType: z
      .enum(['METASTORE_TYPE_UNSPECIFIED', 'DATAPLEX', 'BIGQUERY', 'DATAPROC_METASTORE'])
      .exactOptional()
      .openapi({ description: 'The type of the backend metastore.' }),
    name: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The relative resource name of the metastore that is being federated. The formats of the relative resource names for the currently supported metastores are listed below: BigQuery projects/{project_id} Dataproc Metastore projects/{project_id}/locations/{location}/services/{service_id}',
      }),
  })
  .openapi({ description: 'Represents a backend metastore for the federation.', required: [] })
  .openapi('BackendMetastore')

const EncryptionConfigSchema = z
  .object({
    kmsKey: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The fully qualified customer provided Cloud KMS key name to use for customer data encryption, in the following form:projects/{project_number}/locations/{location_id}/keyRings/{key_ring_id}/cryptoKeys/{crypto_key_id}.',
      }),
  })
  .openapi({ description: 'Encryption settings for the service.', required: [] })
  .openapi('EncryptionConfig')

const SecretSchema = z
  .object({
    cloudSecret: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The relative resource name of a Secret Manager secret version, in the following form:projects/{project_number}/secrets/{secret_id}/versions/{version_id}.',
      }),
  })
  .openapi({ description: 'A securely stored value.', required: [] })
  .openapi('Secret')

const KerberosConfigSchema = z
  .object({
    keytab: SecretSchema.exactOptional().openapi({
      description:
        'A Kerberos keytab file that can be used to authenticate a service principal with a Kerberos Key Distribution Center (KDC).',
    }),
    krb5ConfigGcsUri: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'A Cloud Storage URI that specifies the path to a krb5.conf file. It is of the form gs://{bucket_name}/path/to/krb5.conf, although the file does not need to be named krb5.conf explicitly.',
      }),
    principal: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'A Kerberos principal that exists in the both the keytab the KDC to authenticate as. A typical principal is of the form primary/instance@REALM, but there is no exact format.',
      }),
  })
  .openapi({ description: 'Configuration information for a Kerberos principal.', required: [] })
  .openapi('KerberosConfig')

const HiveMetastoreConfigSchema = z
  .object({
    auxiliaryVersions: z
      .record(z.string(), AuxiliaryVersionConfigSchema)
      .exactOptional()
      .openapi({
        description:
          "A mapping of Hive metastore version to the auxiliary version configuration. When specified, a secondary Hive metastore service is created along with the primary service. All auxiliary versions must be less than the service's primary version. The key is the auxiliary service name and it must match the regular expression a-z?. This means that the first character must be a lowercase letter, and all the following characters must be hyphens, lowercase letters, or digits, except the last character, which cannot be a hyphen.",
      }),
    configOverrides: z
      .record(z.string(), z.string())
      .exactOptional()
      .openapi({
        description:
          "A mapping of Hive metastore configuration key-value pairs to apply to the Hive metastore (configured in hive-site.xml). The mappings override system defaults (some keys cannot be overridden). These overrides are also applied to auxiliary versions and can be further customized in the auxiliary version's AuxiliaryVersionConfig.",
      }),
    endpointProtocol: z
      .enum(['ENDPOINT_PROTOCOL_UNSPECIFIED', 'THRIFT', 'GRPC'])
      .exactOptional()
      .openapi({
        description:
          'The protocol to use for the metastore service endpoint. If unspecified, defaults to THRIFT.',
      }),
    kerberosConfig: KerberosConfigSchema.exactOptional().openapi({
      description:
        "Information used to configure the Hive metastore service as a service principal in a Kerberos realm. To disable Kerberos, use the UpdateService method and specify this field's path (hive_metastore_config.kerberos_config) in the request's update_mask while omitting this field from the request's service.",
    }),
    version: z
      .string()
      .exactOptional()
      .openapi({ description: 'Immutable. The Hive metastore schema version.' }),
  })
  .openapi({
    description:
      'Specifies configuration information specific to running Hive metastore software as the metastore service.',
    required: [],
  })
  .openapi('HiveMetastoreConfig')

const MaintenanceWindowSchema = z
  .object({
    dayOfWeek: z
      .enum([
        'DAY_OF_WEEK_UNSPECIFIED',
        'MONDAY',
        'TUESDAY',
        'WEDNESDAY',
        'THURSDAY',
        'FRIDAY',
        'SATURDAY',
        'SUNDAY',
      ])
      .exactOptional()
      .openapi({ description: 'The day of week, when the window starts.' }),
    hourOfDay: z
      .int32()
      .exactOptional()
      .openapi({ description: 'The hour of day (0-23) when the window starts.' }),
  })
  .openapi({
    description:
      'Maintenance window. This specifies when Dataproc Metastore may perform system maintenance operation to the service.',
    required: [],
  })
  .openapi('MaintenanceWindow')

const DataCatalogConfigSchema = z
  .object({
    enabled: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Defines whether the metastore metadata should be synced to Data Catalog. The default value is to disable syncing metastore metadata to Data Catalog.',
      }),
  })
  .openapi({
    description:
      'Specifies how metastore metadata should be integrated with the Data Catalog service.',
    required: [],
  })
  .openapi('DataCatalogConfig')

const LakeSchema = z
  .object({
    name: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The Lake resource name. Example: projects/{project_number}/locations/{location_id}/lakes/{lake_id}',
      }),
  })
  .openapi({ description: 'Represents a Lake resource', required: [] })
  .openapi('Lake')

const DataplexConfigSchema = z
  .object({
    lakeResources: z
      .record(z.string(), LakeSchema)
      .exactOptional()
      .openapi({
        description:
          'A reference to the Lake resources that this metastore service is attached to. The key is the lake resource name. Example: projects/{project_number}/locations/{location_id}/lakes/{lake_id}.',
      }),
  })
  .openapi({
    description: 'Specifies how metastore metadata should be integrated with the Dataplex service.',
    required: [],
  })
  .openapi('DataplexConfig')

const MetadataIntegrationSchema = z
  .object({
    dataCatalogConfig: DataCatalogConfigSchema.exactOptional().openapi({
      description: 'The integration config for the Data Catalog service.',
    }),
    dataplexConfig: DataplexConfigSchema.exactOptional().openapi({
      description: 'The integration config for the Dataplex service.',
    }),
  })
  .openapi({
    description: 'Specifies how metastore metadata should be integrated with external services.',
    required: [],
  })
  .openapi('MetadataIntegration')

const MetadataExportSchema = z
  .object({
    databaseDumpType: z
      .enum(['TYPE_UNSPECIFIED', 'MYSQL', 'AVRO'])
      .exactOptional()
      .openapi({ description: 'Output only. The type of the database dump.', readOnly: true }),
    destinationGcsUri: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Output only. A Cloud Storage URI of a folder that metadata are exported to, in the form of gs:////, where is automatically generated.',
        readOnly: true,
      }),
    endTime: z
      .string()
      .exactOptional()
      .openapi({ description: 'Output only. The time when the export ended.', readOnly: true }),
    startTime: z
      .string()
      .exactOptional()
      .openapi({ description: 'Output only. The time when the export started.', readOnly: true }),
    state: z
      .enum(['STATE_UNSPECIFIED', 'RUNNING', 'SUCCEEDED', 'FAILED', 'CANCELLED'])
      .exactOptional()
      .openapi({ description: 'Output only. The current state of the export.', readOnly: true }),
  })
  .openapi({ description: 'The details of a metadata export operation.', required: [] })
  .openapi('MetadataExport')

const RestoreSchema = z
  .object({
    backup: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Output only. The relative resource name of the metastore service backup to restore from, in the following form:projects/{project_id}/locations/{location_id}/services/{service_id}/backups/{backup_id}.',
        readOnly: true,
      }),
    details: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Output only. The restore details containing the revision of the service to be restored to, in format of JSON.',
        readOnly: true,
      }),
    endTime: z
      .string()
      .exactOptional()
      .openapi({ description: 'Output only. The time when the restore ended.', readOnly: true }),
    startTime: z
      .string()
      .exactOptional()
      .openapi({ description: 'Output only. The time when the restore started.', readOnly: true }),
    state: z
      .enum(['STATE_UNSPECIFIED', 'RUNNING', 'SUCCEEDED', 'FAILED', 'CANCELLED'])
      .exactOptional()
      .openapi({ description: 'Output only. The current state of the restore.', readOnly: true }),
    type: z
      .enum(['RESTORE_TYPE_UNSPECIFIED', 'FULL', 'METADATA_ONLY'])
      .exactOptional()
      .openapi({ description: 'Output only. The type of restore.', readOnly: true }),
  })
  .openapi({ description: 'The details of a metadata restore operation.', required: [] })
  .openapi('Restore')

const MetadataManagementActivitySchema = z
  .object({
    metadataExports: z
      .array(MetadataExportSchema)
      .exactOptional()
      .openapi({
        description: 'Output only. The latest metadata exports of the metastore service.',
        readOnly: true,
      }),
    restores: z
      .array(RestoreSchema)
      .exactOptional()
      .openapi({
        description: 'Output only. The latest restores of the metastore service.',
        readOnly: true,
      }),
  })
  .openapi({
    description: 'The metadata management activities of the metastore service.',
    required: [],
  })
  .openapi('MetadataManagementActivity')

const ScalingConfigSchema = z
  .object({
    instanceSize: z
      .enum(['INSTANCE_SIZE_UNSPECIFIED', 'EXTRA_SMALL', 'SMALL', 'MEDIUM', 'LARGE', 'EXTRA_LARGE'])
      .exactOptional()
      .openapi({
        description:
          'An enum of readable instance sizes, with each instance size mapping to a float value (e.g. InstanceSize.EXTRA_SMALL = scaling_factor(0.1))',
      }),
    scalingFactor: z
      .float32()
      .exactOptional()
      .openapi({
        description:
          'Scaling factor, increments of 0.1 for values less than 1.0, and increments of 1.0 for values greater than 1.0.',
      }),
  })
  .openapi({
    description: 'Represents the scaling configuration of a metastore service.',
    required: [],
  })
  .openapi('ScalingConfig')

const TelemetryConfigSchema = z
  .object({
    logFormat: z
      .enum(['LOG_FORMAT_UNSPECIFIED', 'LEGACY', 'JSON'])
      .exactOptional()
      .openapi({ description: "The output format of the Dataproc Metastore service's logs." }),
  })
  .openapi({
    description: 'Telemetry Configuration for the Dataproc Metastore service.',
    required: [],
  })
  .openapi('TelemetryConfig')

const ServiceSchema = z
  .object({
    artifactGcsUri: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Output only. A Cloud Storage URI (starting with gs://) that specifies where artifacts related to the metastore service are stored.',
        readOnly: true,
      }),
    createTime: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Output only. The time when the metastore service was created.',
        readOnly: true,
      }),
    databaseType: z
      .enum(['DATABASE_TYPE_UNSPECIFIED', 'MYSQL', 'SPANNER'])
      .exactOptional()
      .openapi({
        description: 'Immutable. The database type that the Metastore service stores its data.',
      }),
    encryptionConfig: EncryptionConfigSchema.exactOptional().openapi({
      description:
        'Immutable. Information used to configure the Dataproc Metastore service to encrypt customer data at rest. Cannot be updated.',
    }),
    endpointUri: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Output only. The URI of the endpoint used to access the metastore service.',
        readOnly: true,
      }),
    hiveMetastoreConfig: HiveMetastoreConfigSchema.exactOptional().openapi({
      description:
        'Configuration information specific to running Hive metastore software as the metastore service.',
    }),
    labels: z
      .record(z.string(), z.string())
      .exactOptional()
      .openapi({ description: 'User-defined labels for the metastore service.' }),
    maintenanceWindow: MaintenanceWindowSchema.exactOptional().openapi({
      description:
        'The one hour maintenance window of the metastore service. This specifies when the service can be restarted for maintenance purposes in UTC time. Maintenance window is not needed for services with the SPANNER database type.',
    }),
    metadataIntegration: MetadataIntegrationSchema.exactOptional().openapi({
      description:
        'The setting that defines how metastore metadata should be integrated with external services and systems.',
    }),
    metadataManagementActivity: MetadataManagementActivitySchema.exactOptional().openapi({
      description: 'Output only. The metadata management activities of the metastore service.',
      readOnly: true,
    }),
    name: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Immutable. The relative resource name of the metastore service, in the following format:projects/{project_number}/locations/{location_id}/services/{service_id}.',
      }),
    network: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Immutable. The relative resource name of the VPC network on which the instance can be accessed. It is specified in the following form:projects/{project_number}/global/networks/{network_id}.',
      }),
    networkConfig: NetworkConfigSchema.exactOptional().openapi({
      description:
        'The configuration specifying the network settings for the Dataproc Metastore service.',
    }),
    port: z
      .int32()
      .exactOptional()
      .openapi({
        description: 'The TCP port at which the metastore service is reached. Default: 9083.',
      }),
    releaseChannel: z
      .enum(['RELEASE_CHANNEL_UNSPECIFIED', 'CANARY', 'STABLE'])
      .exactOptional()
      .openapi({
        description:
          'Immutable. The release channel of the service. If unspecified, defaults to STABLE.',
      }),
    scalingConfig: ScalingConfigSchema.exactOptional().openapi({
      description: 'Scaling configuration of the metastore service.',
    }),
    state: z
      .enum([
        'STATE_UNSPECIFIED',
        'CREATING',
        'ACTIVE',
        'SUSPENDING',
        'SUSPENDED',
        'UPDATING',
        'DELETING',
        'ERROR',
      ])
      .exactOptional()
      .openapi({
        description: 'Output only. The current state of the metastore service.',
        readOnly: true,
      }),
    stateMessage: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Output only. Additional information about the current state of the metastore service, if available.',
        readOnly: true,
      }),
    telemetryConfig: TelemetryConfigSchema.exactOptional().openapi({
      description:
        'The configuration specifying telemetry settings for the Dataproc Metastore service. If unspecified defaults to JSON.',
    }),
    tier: z
      .enum(['TIER_UNSPECIFIED', 'DEVELOPER', 'ENTERPRISE'])
      .exactOptional()
      .openapi({ description: 'The tier of the service.' }),
    uid: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Output only. The globally unique resource identifier of the metastore service.',
        readOnly: true,
      }),
    updateTime: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Output only. The time when the metastore service was last updated.',
        readOnly: true,
      }),
  })
  .openapi({
    description: 'A managed metastore service that serves metadata queries.',
    required: [],
  })
  .openapi('Service')

const BackupSchema = z
  .object({
    createTime: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Output only. The time when the backup was started.',
        readOnly: true,
      }),
    description: z
      .string()
      .exactOptional()
      .openapi({ description: 'The description of the backup.' }),
    endTime: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Output only. The time when the backup finished creating.',
        readOnly: true,
      }),
    name: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Immutable. The relative resource name of the backup, in the following form:projects/{project_number}/locations/{location_id}/services/{service_id}/backups/{backup_id}',
      }),
    restoringServices: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description: 'Output only. Services that are restoring from the backup.',
        readOnly: true,
      }),
    serviceRevision: ServiceSchema.exactOptional().openapi({
      description: 'Output only. The revision of the service at the time of backup.',
      readOnly: true,
    }),
    state: z
      .enum(['STATE_UNSPECIFIED', 'CREATING', 'DELETING', 'ACTIVE', 'FAILED', 'RESTORING'])
      .exactOptional()
      .openapi({ description: 'Output only. The current state of the backup.', readOnly: true }),
  })
  .openapi({ description: 'The details of a backup resource.', required: [] })
  .openapi('Backup')

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
      'Represents a textual expression in the Common Expression Language (CEL) syntax. CEL is a C-like expression language. The syntax and semantics of CEL are documented at https://github.com/google/cel-spec.Example (Comparison): title: "Summary size limit" description: "Determines if a summary is less than 100 chars" expression: "document.summary.size() < 100" Example (Equality): title: "Requestor is owner" description: "Determines if requestor is the document owner" expression: "document.owner == request.auth.claims.email" Example (Logic): title: "Public documents" description: "Determine whether the document should be publicly visible" expression: "document.type != \'private\' && document.type != \'internal\'" Example (Data Manipulation): title: "Notification string" description: "Create a notification string with a timestamp." expression: "\'New message received at \' + string(document.create_time)" The exact variables and functions that may be referenced within an expression are determined by the service that evaluates it. See the service documentation for additional information.',
    required: [],
  })
  .openapi('Expr')

const BindingSchema = z
  .object({
    condition: ExprSchema.exactOptional().openapi({
      description:
        'The condition that is associated with this binding.If the condition evaluates to true, then this binding applies to the current request.If the condition evaluates to false, then this binding does not apply to the current request. However, a different role binding might grant the same role to one or more of the principals in this binding.To learn which resources support conditions in their IAM policies, see the IAM documentation (https://cloud.google.com/iam/help/conditions/resource-policies).',
    }),
    members: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description:
          'Specifies the principals requesting access for a Google Cloud resource. members can have the following values: allUsers: A special identifier that represents anyone who is on the internet; with or without a Google account. allAuthenticatedUsers: A special identifier that represents anyone who is authenticated with a Google account or a service account. Does not include identities that come from external identity providers (IdPs) through identity federation. user:{emailid}: An email address that represents a specific Google account. For example, alice@example.com . serviceAccount:{emailid}: An email address that represents a Google service account. For example, my-other-app@appspot.gserviceaccount.com. serviceAccount:{projectid}.svc.id.goog[{namespace}/{kubernetes-sa}]: An identifier for a Kubernetes service account (https://cloud.google.com/kubernetes-engine/docs/how-to/kubernetes-service-accounts). For example, my-project.svc.id.goog[my-namespace/my-kubernetes-sa]. group:{emailid}: An email address that represents a Google group. For example, admins@example.com. domain:{domain}: The G Suite domain (primary) that represents all the users of that domain. For example, google.com or example.com. deleted:user:{emailid}?uid={uniqueid}: An email address (plus unique identifier) representing a user that has been recently deleted. For example, alice@example.com?uid=123456789012345678901. If the user is recovered, this value reverts to user:{emailid} and the recovered user retains the role in the binding. deleted:serviceAccount:{emailid}?uid={uniqueid}: An email address (plus unique identifier) representing a service account that has been recently deleted. For example, my-other-app@appspot.gserviceaccount.com?uid=123456789012345678901. If the service account is undeleted, this value reverts to serviceAccount:{emailid} and the undeleted service account retains the role in the binding. deleted:group:{emailid}?uid={uniqueid}: An email address (plus unique identifier) representing a Google group that has been recently deleted. For example, admins@example.com?uid=123456789012345678901. If the group is recovered, this value reverts to group:{emailid} and the recovered group retains the role in the binding.',
      }),
    role: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Role that is assigned to the list of members, or principals. For example, roles/viewer, roles/editor, or roles/owner.',
      }),
  })
  .openapi({ description: 'Associates members, or principals, with a role.', required: [] })
  .openapi('Binding')

const CancelOperationRequestSchema = z
  .object({})
  .openapi({ description: 'The request message for Operations.CancelOperation.' })
  .openapi('CancelOperationRequest')

const DatabaseDumpSchema = z
  .object({
    databaseType: z
      .enum(['DATABASE_TYPE_UNSPECIFIED', 'MYSQL'])
      .exactOptional()
      .openapi({ description: 'The type of the database.' }),
    gcsUri: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'A Cloud Storage object or folder URI that specifies the source from which to import metadata. It must begin with gs://.',
      }),
    sourceDatabase: z
      .string()
      .exactOptional()
      .openapi({ description: 'The name of the source database.' }),
    type: z
      .enum(['TYPE_UNSPECIFIED', 'MYSQL', 'AVRO'])
      .exactOptional()
      .openapi({
        description: 'Optional. The type of the database dump. If unspecified, defaults to MYSQL.',
      }),
  })
  .openapi({
    description:
      'A specification of the location of and metadata about a database dump from a relational database management system.',
    required: [],
  })
  .openapi('DatabaseDump')

const EmptySchema = z
  .object({})
  .openapi({
    description:
      'A generic empty message that you can re-use to avoid defining duplicated empty messages in your APIs. A typical example is to use it as the request or the response type of an API method. For instance: service Foo { rpc Bar(google.protobuf.Empty) returns (google.protobuf.Empty); } ',
  })
  .openapi('Empty')

const ExportMetadataRequestSchema = z
  .object({
    databaseDumpType: z
      .enum(['TYPE_UNSPECIFIED', 'MYSQL', 'AVRO'])
      .exactOptional()
      .openapi({
        description: 'Optional. The type of the database dump. If unspecified, defaults to MYSQL.',
      }),
    destinationGcsFolder: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'A Cloud Storage URI of a folder, in the format gs:///. A sub-folder containing exported files will be created below it.',
      }),
    requestId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Optional. A request ID. Specify a unique request ID to allow the server to ignore the request if it has completed. The server will ignore subsequent requests that provide a duplicate request ID for at least 60 minutes after the first request.For example, if an initial request times out, followed by another request with the same request ID, the server ignores the second request to prevent the creation of duplicate commitments.The request ID must be a valid UUID (https://en.wikipedia.org/wiki/Universally_unique_identifier#Format). A zero UUID (00000000-0000-0000-0000-000000000000) is not supported.',
      }),
  })
  .openapi({ description: 'Request message for DataprocMetastore.ExportMetadata.', required: [] })
  .openapi('ExportMetadataRequest')

const FederationSchema = z
  .object({
    backendMetastores: z
      .record(z.string(), BackendMetastoreSchema)
      .exactOptional()
      .openapi({
        description:
          'A map from BackendMetastore rank to BackendMetastores from which the federation service serves metadata at query time. The map key represents the order in which BackendMetastores should be evaluated to resolve database names at query time and should be greater than or equal to zero. A BackendMetastore with a lower number will be evaluated before a BackendMetastore with a higher number.',
      }),
    createTime: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Output only. The time when the metastore federation was created.',
        readOnly: true,
      }),
    endpointUri: z
      .string()
      .exactOptional()
      .openapi({ description: 'Output only. The federation endpoint.', readOnly: true }),
    labels: z
      .record(z.string(), z.string())
      .exactOptional()
      .openapi({ description: 'User-defined labels for the metastore federation.' }),
    name: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Immutable. The relative resource name of the federation, of the form: projects/{project_number}/locations/{location_id}/federations/{federation_id}`.',
      }),
    state: z
      .enum(['STATE_UNSPECIFIED', 'CREATING', 'ACTIVE', 'UPDATING', 'DELETING', 'ERROR'])
      .exactOptional()
      .openapi({
        description: 'Output only. The current state of the federation.',
        readOnly: true,
      }),
    stateMessage: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Output only. Additional information about the current state of the metastore federation, if available.',
        readOnly: true,
      }),
    uid: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Output only. The globally unique resource identifier of the metastore federation.',
        readOnly: true,
      }),
    updateTime: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Output only. The time when the metastore federation was last updated.',
        readOnly: true,
      }),
    version: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Immutable. The Apache Hive metastore version of the federation. All backend metastore versions must be compatible with the federation version.',
      }),
  })
  .openapi({ description: 'Represents a federation of multiple backend metastores.', required: [] })
  .openapi('Federation')

const HiveMetastoreVersionSchema = z
  .object({
    isDefault: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Whether version will be chosen by the server if a metastore service is created with a HiveMetastoreConfig that omits the version.',
      }),
    version: z
      .string()
      .exactOptional()
      .openapi({ description: 'The semantic version of the Hive Metastore software.' }),
  })
  .openapi({
    description: 'A specification of a supported version of the Hive Metastore software.',
    required: [],
  })
  .openapi('HiveMetastoreVersion')

const ListBackupsResponseSchema = z
  .object({
    backups: z
      .array(BackupSchema)
      .exactOptional()
      .openapi({ description: 'The backups of the specified service.' }),
    nextPageToken: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'A token that can be sent as page_token to retrieve the next page. If this field is omitted, there are no subsequent pages.',
      }),
    unreachable: z
      .array(z.string())
      .exactOptional()
      .openapi({ description: 'Locations that could not be reached.' }),
  })
  .openapi({ description: 'Response message for DataprocMetastore.ListBackups.', required: [] })
  .openapi('ListBackupsResponse')

const ListFederationsResponseSchema = z
  .object({
    federations: z
      .array(FederationSchema)
      .exactOptional()
      .openapi({ description: 'The services in the specified location.' }),
    nextPageToken: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'A token that can be sent as page_token to retrieve the next page. If this field is omitted, there are no subsequent pages.',
      }),
    unreachable: z
      .array(z.string())
      .exactOptional()
      .openapi({ description: 'Locations that could not be reached.' }),
  })
  .openapi({ description: 'Response message for ListFederations', required: [] })
  .openapi('ListFederationsResponse')

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
          'Cross-service attributes for the location. For example {"cloud.googleapis.com/region": "us-east1"} ',
      }),
    locationId: z
      .string()
      .exactOptional()
      .openapi({ description: 'The canonical id for this location. For example: "us-east1".' }),
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
          'Resource name for the location, which may vary between implementations. For example: "projects/example-project/locations/us-east1"',
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

const MetadataImportSchema = z
  .object({
    createTime: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Output only. The time when the metadata import was started.',
        readOnly: true,
      }),
    databaseDump: DatabaseDumpSchema.exactOptional().openapi({
      description: "Immutable. A database dump from a pre-existing metastore's database.",
    }),
    description: z
      .string()
      .exactOptional()
      .openapi({ description: 'The description of the metadata import.' }),
    endTime: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Output only. The time when the metadata import finished.',
        readOnly: true,
      }),
    name: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Immutable. The relative resource name of the metadata import, of the form:projects/{project_number}/locations/{location_id}/services/{service_id}/metadataImports/{metadata_import_id}.',
      }),
    state: z
      .enum(['STATE_UNSPECIFIED', 'RUNNING', 'SUCCEEDED', 'UPDATING', 'FAILED'])
      .exactOptional()
      .openapi({
        description: 'Output only. The current state of the metadata import.',
        readOnly: true,
      }),
    updateTime: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Output only. The time when the metadata import was last updated.',
        readOnly: true,
      }),
  })
  .openapi({ description: 'A metastore resource that imports metadata.', required: [] })
  .openapi('MetadataImport')

const ListMetadataImportsResponseSchema = z
  .object({
    metadataImports: z
      .array(MetadataImportSchema)
      .exactOptional()
      .openapi({ description: 'The imports in the specified service.' }),
    nextPageToken: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'A token that can be sent as page_token to retrieve the next page. If this field is omitted, there are no subsequent pages.',
      }),
    unreachable: z
      .array(z.string())
      .exactOptional()
      .openapi({ description: 'Locations that could not be reached.' }),
  })
  .openapi({
    description: 'Response message for DataprocMetastore.ListMetadataImports.',
    required: [],
  })
  .openapi('ListMetadataImportsResponse')

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
      'The Status type defines a logical error model that is suitable for different programming environments, including REST APIs and RPC APIs. It is used by gRPC (https://github.com/grpc). Each Status message contains three pieces of data: error code, error message, and error details.You can find out more about this error model and how to work with it in the API Design Guide (https://cloud.google.com/apis/design/errors).',
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
          'If the value is false, it means the operation is still in progress. If true, the operation is completed, and either error or response is available.',
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
          'The server-assigned name, which is only unique within the same service that originally returns it. If you use the default HTTP mapping, the name should be a resource name ending with operations/{unique_id}.',
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
          'The normal response of the operation in case of success. If the original method returns no data on success, such as Delete, the response is google.protobuf.Empty. If the original method is standard Get/Create/Update, the response should be the resource. For other methods, the response should have the type XxxResponse, where Xxx is the original method name. For example, if the original method name is TakeSnapshot(), the inferred response type is TakeSnapshotResponse.',
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

const ListServicesResponseSchema = z
  .object({
    nextPageToken: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'A token that can be sent as page_token to retrieve the next page. If this field is omitted, there are no subsequent pages.',
      }),
    services: z
      .array(ServiceSchema)
      .exactOptional()
      .openapi({ description: 'The services in the specified location.' }),
    unreachable: z
      .array(z.string())
      .exactOptional()
      .openapi({ description: 'Locations that could not be reached.' }),
  })
  .openapi({ description: 'Response message for DataprocMetastore.ListServices.', required: [] })
  .openapi('ListServicesResponse')

const LocationMetadataSchema = z
  .object({
    supportedHiveMetastoreVersions: z
      .array(HiveMetastoreVersionSchema)
      .exactOptional()
      .openapi({
        description:
          'The versions of Hive Metastore that can be used when creating a new metastore service in this location. The server guarantees that exactly one HiveMetastoreVersion in the list will set is_default.',
      }),
  })
  .openapi({ description: 'Metadata about the service in a location.', required: [] })
  .openapi('LocationMetadata')

const MoveTableToDatabaseRequestSchema = z
  .object({
    dbName: z
      .string()
      .exactOptional()
      .openapi({ description: 'Required. The name of the database where the table resides.' }),
    destinationDbName: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Required. The name of the database where the table should be moved.',
      }),
    tableName: z
      .string()
      .exactOptional()
      .openapi({ description: 'Required. The name of the table to be moved.' }),
  })
  .openapi({
    description: 'Request message for DataprocMetastore.MoveTableToDatabase.',
    required: [],
  })
  .openapi('MoveTableToDatabaseRequest')

const MoveTableToDatabaseResponseSchema = z
  .object({})
  .openapi({ description: 'Response message for DataprocMetastore.MoveTableToDatabase.' })
  .openapi('MoveTableToDatabaseResponse')

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
          'Output only. Identifies whether the caller has requested cancellation of the operation. Operations that have successfully been cancelled have Operation.error value with a google.rpc.Status.code of 1, corresponding to Code.CANCELLED.',
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
  .openapi({ description: 'Represents the metadata of a long-running operation.', required: [] })
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
          'Associates a list of members, or principals, with a role. Optionally, may specify a condition that determines how and when the bindings are applied. Each of the bindings must contain at least one principal.The bindings in a Policy can refer to up to 1,500 principals; up to 250 of these principals can be Google groups. Each occurrence of a principal counts towards these limits. For example, if the bindings grant 50 different roles to user:alice@example.com, and not to any other principal, then you can add another 1,450 principals to the bindings in the Policy.',
      }),
    etag: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'etag is used for optimistic concurrency control as a way to help prevent simultaneous updates of a policy from overwriting each other. It is strongly suggested that systems make use of the etag in the read-modify-write cycle to perform policy updates in order to avoid race conditions: An etag is returned in the response to getIamPolicy, and systems are expected to put that etag in the request to setIamPolicy to ensure that their change will be applied to the same version of the policy.Important: If you use IAM Conditions, you must include the etag field whenever you call setIamPolicy. If you omit this field, then IAM allows you to overwrite a version 3 policy with a version 1 policy, and all of the conditions in the version 3 policy are lost.',
      }),
    version: z
      .int32()
      .exactOptional()
      .openapi({
        description:
          'Specifies the format of the policy.Valid values are 0, 1, and 3. Requests that specify an invalid value are rejected.Any operation that affects conditional role bindings must specify version 3. This requirement applies to the following operations: Getting a policy that includes a conditional role binding Adding a conditional role binding to a policy Changing a conditional role binding in a policy Removing any role binding, with or without a condition, from a policy that includes conditionsImportant: If you use IAM Conditions, you must include the etag field whenever you call setIamPolicy. If you omit this field, then IAM allows you to overwrite a version 3 policy with a version 1 policy, and all of the conditions in the version 3 policy are lost.If a policy does not include any conditions, operations on that policy may specify any valid version or leave the field unset.To learn which resources support conditions in their IAM policies, see the IAM documentation (https://cloud.google.com/iam/help/conditions/resource-policies).',
      }),
  })
  .openapi({
    description:
      'An Identity and Access Management (IAM) policy, which specifies access controls for Google Cloud resources.A Policy is a collection of bindings. A binding binds one or more members, or principals, to a single role. Principals can be user accounts, service accounts, Google groups, and domains (such as G Suite). A role is a named list of permissions; each role can be an IAM predefined role or a user-created custom role.For some types of Google Cloud resources, a binding can also specify a condition, which is a logical expression that allows access to a resource only if the expression evaluates to true. A condition can add constraints based on attributes of the request, the resource, or both. To learn which resources support conditions in their IAM policies, see the IAM documentation (https://cloud.google.com/iam/help/conditions/resource-policies).JSON example: { "bindings": [ { "role": "roles/resourcemanager.organizationAdmin", "members": [ "user:mike@example.com", "group:admins@example.com", "domain:google.com", "serviceAccount:my-project-id@appspot.gserviceaccount.com" ] }, { "role": "roles/resourcemanager.organizationViewer", "members": [ "user:eve@example.com" ], "condition": { "title": "expirable access", "description": "Does not grant access after Sep 2020", "expression": "request.time < timestamp(\'2020-10-01T00:00:00.000Z\')", } } ], "etag": "BwWWja0YfJA=", "version": 3 } YAML example: bindings: - members: - user:mike@example.com - group:admins@example.com - domain:google.com - serviceAccount:my-project-id@appspot.gserviceaccount.com role: roles/resourcemanager.organizationAdmin - members: - user:eve@example.com role: roles/resourcemanager.organizationViewer condition: title: expirable access description: Does not grant access after Sep 2020 expression: request.time < timestamp(\'2020-10-01T00:00:00.000Z\') etag: BwWWja0YfJA= version: 3 For a description of IAM and its features, see the IAM documentation (https://cloud.google.com/iam/docs/).',
    required: [],
  })
  .openapi('Policy')

const QueryMetadataRequestSchema = z
  .object({
    query: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Required. A read-only SQL query to execute against the metadata database. The query cannot change or mutate the data.',
      }),
  })
  .openapi({ description: 'Request message for DataprocMetastore.QueryMetadata.', required: [] })
  .openapi('QueryMetadataRequest')

const QueryMetadataResponseSchema = z
  .object({
    resultManifestUri: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The manifest URI is link to a JSON instance in Cloud Storage. This instance manifests immediately along with QueryMetadataResponse. The content of the URI is not retriable until the long-running operation query against the metadata finishes.',
      }),
  })
  .openapi({ description: 'Response message for DataprocMetastore.QueryMetadata.', required: [] })
  .openapi('QueryMetadataResponse')

const RemoveIamPolicyRequestSchema = z
  .object({
    asynchronous: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Optional. Removes IAM policy attached to database or table asynchronously when it is set. The default is false.',
      }),
  })
  .openapi({ description: 'Request message for DataprocMetastore.RemoveIamPolicy.', required: [] })
  .openapi('RemoveIamPolicyRequest')

const RemoveIamPolicyResponseSchema = z
  .object({
    success: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'True if the policy is successfully removed.' }),
  })
  .openapi({ description: 'Response message for DataprocMetastore.RemoveIamPolicy.', required: [] })
  .openapi('RemoveIamPolicyResponse')

const RestoreServiceRequestSchema = z
  .object({
    backup: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Required. The relative resource name of the metastore service backup to restore from, in the following form:projects/{project_id}/locations/{location_id}/services/{service_id}/backups/{backup_id}.',
      }),
    requestId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Optional. A request ID. Specify a unique request ID to allow the server to ignore the request if it has completed. The server will ignore subsequent requests that provide a duplicate request ID for at least 60 minutes after the first request.For example, if an initial request times out, followed by another request with the same request ID, the server ignores the second request to prevent the creation of duplicate commitments.The request ID must be a valid UUID (https://en.wikipedia.org/wiki/Universally_unique_identifier#Format). A zero UUID (00000000-0000-0000-0000-000000000000) is not supported.',
      }),
    restoreType: z
      .enum(['RESTORE_TYPE_UNSPECIFIED', 'FULL', 'METADATA_ONLY'])
      .exactOptional()
      .openapi({
        description: 'Optional. The type of restore. If unspecified, defaults to METADATA_ONLY.',
      }),
  })
  .openapi({ description: 'Request message for DataprocMetastore.Restore.', required: [] })
  .openapi('RestoreServiceRequest')

const SetIamPolicyRequestSchema = z
  .object({
    policy: PolicySchema.exactOptional().openapi({
      description:
        'REQUIRED: The complete policy to be applied to the resource. The size of the policy is limited to a few 10s of KB. An empty policy is a valid policy but certain Google Cloud services (such as Projects) might reject them.',
    }),
    updateMask: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'OPTIONAL: A FieldMask specifying which fields of the policy to modify. Only the fields in the mask will be modified. If no mask is provided, the following default mask is used:paths: "bindings, etag"',
      }),
  })
  .openapi({ description: 'Request message for SetIamPolicy method.', required: [] })
  .openapi('SetIamPolicyRequest')

const TestIamPermissionsRequestSchema = z
  .object({
    permissions: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description:
          'The set of permissions to check for the resource. Permissions with wildcards (such as * or storage.*) are not allowed. For more information see IAM Overview (https://cloud.google.com/iam/docs/overview#permissions).',
      }),
  })
  .openapi({ description: 'Request message for TestIamPermissions method.', required: [] })
  .openapi('TestIamPermissionsRequest')

const TestIamPermissionsResponseSchema = z
  .object({
    permissions: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description: 'A subset of TestPermissionsRequest.permissions that the caller is allowed.',
      }),
  })
  .openapi({ description: 'Response message for TestIamPermissions method.', required: [] })
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
  description: 'Gets details of a single import.',
  operationId: 'metastore.projects.locations.services.metadataImports.get',
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
              'Required. The relative resource name of the metadata import to retrieve, in the following form:projects/{project_number}/locations/{location_id}/services/{service_id}/metadataImports/{import_id}.',
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
      content: { 'application/json': { schema: MetadataImportSchema } },
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
  description: 'Deletes a single backup.',
  operationId: 'metastore.projects.locations.services.backups.delete',
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
              'Optional. A request ID. Specify a unique request ID to allow the server to ignore the request if it has completed. The server will ignore subsequent requests that provide a duplicate request ID for at least 60 minutes after the first request.For example, if an initial request times out, followed by another request with the same request ID, the server ignores the second request to prevent the creation of duplicate commitments.The request ID must be a valid UUID (https://en.wikipedia.org/wiki/Universally_unique_identifier#Format) A zero UUID (00000000-0000-0000-0000-000000000000) is not supported.',
            in: 'query',
            name: 'requestId',
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
              'Required. The relative resource name of the backup to delete, in the following form:projects/{project_number}/locations/{location_id}/services/{service_id}/backups/{backup_id}.',
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
  description:
    'Updates a single import. Only the description field of MetadataImport is supported to be updated.',
  operationId: 'metastore.projects.locations.services.metadataImports.patch',
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
              'Optional. A request ID. Specify a unique request ID to allow the server to ignore the request if it has completed. The server will ignore subsequent requests that provide a duplicate request ID for at least 60 minutes after the first request.For example, if an initial request times out, followed by another request with the same request ID, the server ignores the second request to prevent the creation of duplicate commitments.The request ID must be a valid UUID (https://en.wikipedia.org/wiki/Universally_unique_identifier#Format) A zero UUID (00000000-0000-0000-0000-000000000000) is not supported.',
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
              'Required. A field mask used to specify the fields to be overwritten in the metadata import resource by the update. Fields specified in the update_mask are relative to the resource (not to the full request). A field is overwritten if it is in the mask.',
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
              'Immutable. The relative resource name of the metadata import, of the form:projects/{project_number}/locations/{location_id}/services/{service_id}/metadataImports/{metadata_import_id}.',
            in: 'path',
            name: 'name',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: MetadataImportSchema } } },
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

export const getV1betaNameLocationsRoute = createRoute({
  method: 'get',
  path: '/v1beta/{name}/locations',
  tags: ['projects'],
  description: 'Lists information about the supported locations for this service.',
  operationId: 'metastore.projects.locations.list',
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
              'A filter to narrow down results to a preferred subset. The filtering language accepts strings like "displayName=tokyo", and is documented in more detail in AIP-160 (https://google.aip.dev/160).',
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
              'A page token received from the next_page_token field in the response. Send that page token to receive the subsequent page.',
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

export const getV1betaNameOperationsRoute = createRoute({
  method: 'get',
  path: '/v1beta/{name}/operations',
  tags: ['projects'],
  description:
    "Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns UNIMPLEMENTED.",
  operationId: 'metastore.projects.locations.operations.list',
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
    "Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns google.rpc.Code.UNIMPLEMENTED. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of 1, corresponding to Code.CANCELLED.",
  operationId: 'metastore.projects.locations.operations.cancel',
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

export const getV1betaParentBackupsRoute = createRoute({
  method: 'get',
  path: '/v1beta/{parent}/backups',
  tags: ['projects'],
  description: 'Lists backups in a service.',
  operationId: 'metastore.projects.locations.services.backups.list',
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
            description: 'Optional. The filter to apply to list results.',
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
              'Optional. Specify the ordering of results as described in Sorting Order (https://cloud.google.com/apis/design/design_patterns#sorting_order). If not specified, the results will be sorted in the default order.',
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
              'Optional. The maximum number of backups to return. The response may contain less than the maximum number. If unspecified, no more than 500 backups are returned. The maximum value is 1000; values above 1000 are changed to 1000.',
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
              'Optional. A page token, received from a previous DataprocMetastore.ListBackups call. Provide this token to retrieve the subsequent page.To retrieve the first page, supply an empty page token.When paginating, other parameters provided to DataprocMetastore.ListBackups must match the call that provided the page token.',
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
              'Required. The relative resource name of the service whose backups to list, in the following form:projects/{project_number}/locations/{location_id}/services/{service_id}/backups.',
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
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
  ],
})

export const postV1betaParentBackupsRoute = createRoute({
  method: 'post',
  path: '/v1beta/{parent}/backups',
  tags: ['projects'],
  description: 'Creates a new backup in a given project and location.',
  operationId: 'metastore.projects.locations.services.backups.create',
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
              "Required. The ID of the backup, which is used as the final component of the backup's name.This value must be between 1 and 64 characters long, begin with a letter, end with a letter or number, and consist of alpha-numeric ASCII characters or hyphens.",
            in: 'query',
            name: 'backupId',
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
              'Optional. A request ID. Specify a unique request ID to allow the server to ignore the request if it has completed. The server will ignore subsequent requests that provide a duplicate request ID for at least 60 minutes after the first request.For example, if an initial request times out, followed by another request with the same request ID, the server ignores the second request to prevent the creation of duplicate commitments.The request ID must be a valid UUID (https://en.wikipedia.org/wiki/Universally_unique_identifier#Format) A zero UUID (00000000-0000-0000-0000-000000000000) is not supported.',
            in: 'query',
            name: 'requestId',
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
              'Required. The relative resource name of the service in which to create a backup of the following form:projects/{project_number}/locations/{location_id}/services/{service_id}.',
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
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
  ],
})

export const getV1betaParentFederationsRoute = createRoute({
  method: 'get',
  path: '/v1beta/{parent}/federations',
  tags: ['projects'],
  description: 'Lists federations in a project and location.',
  operationId: 'metastore.projects.locations.federations.list',
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
            description: 'Optional. The filter to apply to list results.',
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
              'Optional. Specify the ordering of results as described in Sorting Order (https://cloud.google.com/apis/design/design_patterns#sorting_order). If not specified, the results will be sorted in the default order.',
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
              'Optional. The maximum number of federations to return. The response may contain less than the maximum number. If unspecified, no more than 500 services are returned. The maximum value is 1000; values above 1000 are changed to 1000.',
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
              'Optional. A page token, received from a previous ListFederationServices call. Provide this token to retrieve the subsequent page.To retrieve the first page, supply an empty page token.When paginating, other parameters provided to ListFederationServices must match the call that provided the page token.',
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
              'Required. The relative resource name of the location of metastore federations to list, in the following form: projects/{project_number}/locations/{location_id}.',
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
      content: { 'application/json': { schema: ListFederationsResponseSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
  ],
})

export const postV1betaParentFederationsRoute = createRoute({
  method: 'post',
  path: '/v1beta/{parent}/federations',
  tags: ['projects'],
  description: 'Creates a metastore federation in a project and location.',
  operationId: 'metastore.projects.locations.federations.create',
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
      federationId: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              "Required. The ID of the metastore federation, which is used as the final component of the metastore federation's name.This value must be between 2 and 63 characters long inclusive, begin with a letter, end with a letter or number, and consist of alpha-numeric ASCII characters or hyphens.",
            in: 'query',
            name: 'federationId',
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
              'Optional. A request ID. Specify a unique request ID to allow the server to ignore the request if it has completed. The server will ignore subsequent requests that provide a duplicate request ID for at least 60 minutes after the first request.For example, if an initial request times out, followed by another request with the same request ID, the server ignores the second request to prevent the creation of duplicate commitments.The request ID must be a valid UUID (https://en.wikipedia.org/wiki/Universally_unique_identifier#Format) A zero UUID (00000000-0000-0000-0000-000000000000) is not supported.',
            in: 'query',
            name: 'requestId',
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
              'Required. The relative resource name of the location in which to create a federation service, in the following form:projects/{project_number}/locations/{location_id}.',
            in: 'path',
            name: 'parent',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: FederationSchema } } },
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

export const getV1betaParentMetadataImportsRoute = createRoute({
  method: 'get',
  path: '/v1beta/{parent}/metadataImports',
  tags: ['projects'],
  description: 'Lists imports in a service.',
  operationId: 'metastore.projects.locations.services.metadataImports.list',
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
            description: 'Optional. The filter to apply to list results.',
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
              'Optional. Specify the ordering of results as described in Sorting Order (https://cloud.google.com/apis/design/design_patterns#sorting_order). If not specified, the results will be sorted in the default order.',
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
              'Optional. The maximum number of imports to return. The response may contain less than the maximum number. If unspecified, no more than 500 imports are returned. The maximum value is 1000; values above 1000 are changed to 1000.',
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
              'Optional. A page token, received from a previous DataprocMetastore.ListServices call. Provide this token to retrieve the subsequent page.To retrieve the first page, supply an empty page token.When paginating, other parameters provided to DataprocMetastore.ListServices must match the call that provided the page token.',
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
              'Required. The relative resource name of the service whose metadata imports to list, in the following form:projects/{project_number}/locations/{location_id}/services/{service_id}/metadataImports.',
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
      content: { 'application/json': { schema: ListMetadataImportsResponseSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
  ],
})

export const postV1betaParentMetadataImportsRoute = createRoute({
  method: 'post',
  path: '/v1beta/{parent}/metadataImports',
  tags: ['projects'],
  description: 'Creates a new MetadataImport in a given project and location.',
  operationId: 'metastore.projects.locations.services.metadataImports.create',
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
      metadataImportId: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              "Required. The ID of the metadata import, which is used as the final component of the metadata import's name.This value must be between 1 and 64 characters long, begin with a letter, end with a letter or number, and consist of alpha-numeric ASCII characters or hyphens.",
            in: 'query',
            name: 'metadataImportId',
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
              'Optional. A request ID. Specify a unique request ID to allow the server to ignore the request if it has completed. The server will ignore subsequent requests that provide a duplicate request ID for at least 60 minutes after the first request.For example, if an initial request times out, followed by another request with the same request ID, the server ignores the second request to prevent the creation of duplicate commitments.The request ID must be a valid UUID (https://en.wikipedia.org/wiki/Universally_unique_identifier#Format) A zero UUID (00000000-0000-0000-0000-000000000000) is not supported.',
            in: 'query',
            name: 'requestId',
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
              'Required. The relative resource name of the service in which to create a metastore import, in the following form:projects/{project_number}/locations/{location_id}/services/{service_id}.',
            in: 'path',
            name: 'parent',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: MetadataImportSchema } } },
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

export const getV1betaParentServicesRoute = createRoute({
  method: 'get',
  path: '/v1beta/{parent}/services',
  tags: ['projects'],
  description: 'Lists services in a project and location.',
  operationId: 'metastore.projects.locations.services.list',
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
            description: 'Optional. The filter to apply to list results.',
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
              'Optional. Specify the ordering of results as described in Sorting Order (https://cloud.google.com/apis/design/design_patterns#sorting_order). If not specified, the results will be sorted in the default order.',
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
              'Optional. The maximum number of services to return. The response may contain less than the maximum number. If unspecified, no more than 500 services are returned. The maximum value is 1000; values above 1000 are changed to 1000.',
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
              'Optional. A page token, received from a previous DataprocMetastore.ListServices call. Provide this token to retrieve the subsequent page.To retrieve the first page, supply an empty page token.When paginating, other parameters provided to DataprocMetastore.ListServices must match the call that provided the page token.',
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
              'Required. The relative resource name of the location of metastore services to list, in the following form:projects/{project_number}/locations/{location_id}.',
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
      content: { 'application/json': { schema: ListServicesResponseSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
  ],
})

export const postV1betaParentServicesRoute = createRoute({
  method: 'post',
  path: '/v1beta/{parent}/services',
  tags: ['projects'],
  description: 'Creates a metastore service in a project and location.',
  operationId: 'metastore.projects.locations.services.create',
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
              'Optional. A request ID. Specify a unique request ID to allow the server to ignore the request if it has completed. The server will ignore subsequent requests that provide a duplicate request ID for at least 60 minutes after the first request.For example, if an initial request times out, followed by another request with the same request ID, the server ignores the second request to prevent the creation of duplicate commitments.The request ID must be a valid UUID (https://en.wikipedia.org/wiki/Universally_unique_identifier#Format) A zero UUID (00000000-0000-0000-0000-000000000000) is not supported.',
            in: 'query',
            name: 'requestId',
            schema: { type: 'string' },
            required: false,
          },
        }),
      serviceId: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              "Required. The ID of the metastore service, which is used as the final component of the metastore service's name.This value must be between 2 and 63 characters long inclusive, begin with a letter, end with a letter or number, and consist of alpha-numeric ASCII characters or hyphens.",
            in: 'query',
            name: 'serviceId',
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
              'Required. The relative resource name of the location in which to create a metastore service, in the following form:projects/{project_number}/locations/{location_id}.',
            in: 'path',
            name: 'parent',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: ServiceSchema } } },
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

export const getV1betaResourceGetIamPolicyRoute = createRoute({
  method: 'get',
  path: '/v1beta/{resource}:getIamPolicy',
  tags: ['projects'],
  description:
    'Gets the access control policy for a resource. Returns an empty policy if the resource exists and does not have a policy set.',
  operationId: 'metastore.projects.locations.services.databases.tables.getIamPolicy',
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
              'Optional. The maximum policy version that will be used to format the policy.Valid values are 0, 1, and 3. Requests specifying an invalid value will be rejected.Requests for policies with any conditional role bindings must specify version 3. Policies with no conditional role bindings may specify any valid value or leave the field unset.The policy in the response might use the policy version that you specified, or it might use a lower policy version. For example, if you specify version 3, but the policy has no conditional role bindings, the response uses version 1.To learn which resources support conditions in their IAM policies, see the IAM documentation (https://cloud.google.com/iam/help/conditions/resource-policies).',
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
              'REQUIRED: The resource for which the policy is being requested. See Resource names (https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field.',
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

export const postV1betaResourceRemoveIamPolicyRoute = createRoute({
  method: 'post',
  path: '/v1beta/{resource}:removeIamPolicy',
  tags: ['projects'],
  description: 'Removes the attached IAM policies for a resource',
  operationId: 'metastore.projects.locations.services.removeIamPolicy',
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
              'Required. The relative resource name of the dataplane resource to remove IAM policy, in the following form:projects/{project_id}/locations/{location_id}/services/{service_id}/databases/{database_id} or projects/{project_id}/locations/{location_id}/services/{service_id}/databases/{database_id}/tables/{table_id}.',
            in: 'path',
            name: 'resource',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: RemoveIamPolicyRequestSchema } } },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: RemoveIamPolicyResponseSchema } },
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
    'Sets the access control policy on the specified resource. Replaces any existing policy.Can return NOT_FOUND, INVALID_ARGUMENT, and PERMISSION_DENIED errors.',
  operationId: 'metastore.projects.locations.services.databases.tables.setIamPolicy',
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
              'REQUIRED: The resource for which the policy is being specified. See Resource names (https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field.',
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
    'Returns permissions that a caller has on the specified resource. If the resource does not exist, this will return an empty set of permissions, not a NOT_FOUND error.Note: This operation is designed to be used for building permission-aware UIs and command-line tools, not for authorization checking. This operation may "fail open" without warning.',
  operationId: 'metastore.projects.locations.services.databases.tables.testIamPermissions',
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
              'REQUIRED: The resource for which the policy detail is being requested. See Resource names (https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field.',
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

export const postV1betaServiceAlterLocationRoute = createRoute({
  method: 'post',
  path: '/v1beta/{service}:alterLocation',
  tags: ['projects'],
  description:
    'Alter metadata resource location. The metadata resource can be a database, table, or partition. This functionality only updates the parent directory for the respective metadata resource and does not transfer any existing data to the new location.',
  operationId: 'metastore.projects.locations.services.alterLocation',
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
      service: z
        .string()
        .openapi({
          param: {
            description:
              'Required. The relative resource name of the metastore service to mutate metadata, in the following format:projects/{project_id}/locations/{location_id}/services/{service_id}.',
            in: 'path',
            name: 'service',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: AlterMetadataResourceLocationRequestSchema } },
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

export const postV1betaServiceExportMetadataRoute = createRoute({
  method: 'post',
  path: '/v1beta/{service}:exportMetadata',
  tags: ['projects'],
  description: 'Exports metadata from a service.',
  operationId: 'metastore.projects.locations.services.exportMetadata',
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
      service: z
        .string()
        .openapi({
          param: {
            description:
              'Required. The relative resource name of the metastore service to run export, in the following form:projects/{project_id}/locations/{location_id}/services/{service_id}.',
            in: 'path',
            name: 'service',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: ExportMetadataRequestSchema } } },
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

export const postV1betaServiceMoveTableToDatabaseRoute = createRoute({
  method: 'post',
  path: '/v1beta/{service}:moveTableToDatabase',
  tags: ['projects'],
  description: 'Move a table to another database.',
  operationId: 'metastore.projects.locations.services.moveTableToDatabase',
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
      service: z
        .string()
        .openapi({
          param: {
            description:
              'Required. The relative resource name of the metastore service to mutate metadata, in the following format:projects/{project_id}/locations/{location_id}/services/{service_id}.',
            in: 'path',
            name: 'service',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: MoveTableToDatabaseRequestSchema } } },
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

export const postV1betaServiceQueryMetadataRoute = createRoute({
  method: 'post',
  path: '/v1beta/{service}:queryMetadata',
  tags: ['projects'],
  description: 'Query DPMS metadata.',
  operationId: 'metastore.projects.locations.services.queryMetadata',
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
      service: z
        .string()
        .openapi({
          param: {
            description:
              'Required. The relative resource name of the metastore service to query metadata, in the following format:projects/{project_id}/locations/{location_id}/services/{service_id}.',
            in: 'path',
            name: 'service',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: QueryMetadataRequestSchema } } },
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

export const postV1betaServiceRestoreRoute = createRoute({
  method: 'post',
  path: '/v1beta/{service}:restore',
  tags: ['projects'],
  description: 'Restores a service from a backup.',
  operationId: 'metastore.projects.locations.services.restore',
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
      service: z
        .string()
        .openapi({
          param: {
            description:
              'Required. The relative resource name of the metastore service to run restore, in the following form:projects/{project_id}/locations/{location_id}/services/{service_id}.',
            in: 'path',
            name: 'service',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: RestoreServiceRequestSchema } } },
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
