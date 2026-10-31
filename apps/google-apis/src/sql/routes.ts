import { createRoute, z } from '@hono/zod-openapi'

const MySqlReplicaConfigurationSchema = z
  .object({
    caCertificate: z
      .string()
      .exactOptional()
      .openapi({ description: "PEM representation of the trusted CA's x509 certificate." }),
    clientCertificate: z
      .string()
      .exactOptional()
      .openapi({ description: "PEM representation of the replica's x509 certificate." }),
    clientKey: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "PEM representation of the replica's private key. The corresponsing public key is encoded in the client's certificate.",
      }),
    connectRetryInterval: z
      .int32()
      .exactOptional()
      .openapi({
        description: "Seconds to wait between connect retries. MySQL's default is 60 seconds.",
      }),
    dumpFilePath: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Path to a SQL dump file in Google Cloud Storage from which the replica instance is to be created. The URI is in the form gs://bucketName/fileName. Compressed gzip files (.gz) are also supported. Dumps have the binlog co-ordinates from which replication begins. This can be accomplished by setting --master-data to 1 when using mysqldump.',
      }),
    kind: z
      .string()
      .exactOptional()
      .openapi({ description: 'This is always `sql#mysqlReplicaConfiguration`.' }),
    masterHeartbeatPeriod: z
      .string()
      .exactOptional()
      .openapi({ description: 'Interval in milliseconds between replication heartbeats.' }),
    password: z
      .string()
      .exactOptional()
      .openapi({ description: 'The password for the replication connection.' }),
    sslCipher: z
      .string()
      .exactOptional()
      .openapi({ description: 'A list of permissible ciphers to use for SSL encryption.' }),
    username: z
      .string()
      .exactOptional()
      .openapi({ description: 'The username for the replication connection.' }),
    verifyServerCertificate: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          "Whether or not to check the primary instance's Common Name value in the certificate that it sends during the SSL handshake.",
      }),
  })
  .openapi({ description: 'Read-replica configuration specific to MySQL databases.', required: [] })
  .openapi('MySqlReplicaConfiguration')

type ReplicaConfigurationType = {
  failoverTarget?: boolean
  kind?: string
  mysqlReplicaConfiguration?: z.infer<typeof MySqlReplicaConfigurationSchema>
}

const AclEntrySchema = z
  .object({
    expirationTime: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The time when this access control entry expires in [RFC 3339](https://tools.ietf.org/html/rfc3339) format, for example `2012-11-15T16:19:00.094Z`.',
      }),
    kind: z.string().exactOptional().openapi({ description: 'This is always `sql#aclEntry`.' }),
    name: z
      .string()
      .exactOptional()
      .openapi({ description: 'Optional. A label to identify this entry.' }),
    value: z
      .string()
      .exactOptional()
      .openapi({ description: 'The allowlisted value for the access control list.' }),
  })
  .openapi({ description: 'An entry for an Access Control list.', required: [] })
  .openapi('AclEntry')

const AdvancedMachineFeaturesSchema = z
  .object({
    threadsPerCore: z
      .int32()
      .exactOptional()
      .openapi({ description: 'The number of threads per physical core.' }),
  })
  .openapi({
    description: 'Specifies options for controlling advanced machine features.',
    required: [],
  })
  .openapi('AdvancedMachineFeatures')

const ApiWarningSchema = z
  .object({
    code: z
      .enum(['SQL_API_WARNING_CODE_UNSPECIFIED', 'REGION_UNREACHABLE', 'MAX_RESULTS_EXCEEDS_LIMIT'])
      .exactOptional()
      .openapi({ description: 'Code to uniquely identify the warning type.' }),
    message: z.string().exactOptional().openapi({ description: 'The warning message.' }),
    region: z
      .string()
      .exactOptional()
      .openapi({ description: 'The region name for REGION_UNREACHABLE warning.' }),
  })
  .openapi({ description: 'An Admin API warning message.', required: [] })
  .openapi('ApiWarning')

const BackupRetentionSettingsSchema = z
  .object({
    retainedBackups: z
      .int32()
      .exactOptional()
      .openapi({
        description:
          "Depending on the value of retention_unit, this is used to determine if a backup needs to be deleted. If retention_unit is 'COUNT', we will retain this many backups.",
      }),
    retentionUnit: z
      .enum(['RETENTION_UNIT_UNSPECIFIED', 'COUNT'])
      .exactOptional()
      .openapi({ description: "The unit that 'retained_backups' represents." }),
  })
  .openapi({
    description:
      'We currently only support backup retention by specifying the number of backups we will retain.',
    required: [],
  })
  .openapi('BackupRetentionSettings')

const BackupConfigurationSchema = z
  .object({
    backupRetentionSettings: BackupRetentionSettingsSchema.exactOptional().openapi({
      description: 'Backup retention settings.',
    }),
    binaryLogEnabled: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          '(MySQL only) Whether binary log is enabled. If backup configuration is disabled, binarylog must be disabled as well.',
      }),
    enabled: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Whether this configuration is enabled.' }),
    kind: z
      .string()
      .exactOptional()
      .openapi({ description: 'This is always `sql#backupConfiguration`.' }),
    location: z.string().exactOptional().openapi({ description: 'Location of the backup' }),
    pointInTimeRecoveryEnabled: z
      .boolean()
      .exactOptional()
      .openapi({ description: '(Postgres only) Whether point in time recovery is enabled.' }),
    replicationLogArchivingEnabled: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Reserved for future use.' }),
    startTime: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Start time for the daily backup configuration in UTC timezone in the 24 hour format - `HH:MM`.',
      }),
    transactionLogRetentionDays: z
      .int32()
      .exactOptional()
      .openapi({
        description:
          'The number of days of transaction logs we retain for point in time restore, from 1-7.',
      }),
  })
  .openapi({ description: 'Database instance backup configuration.', required: [] })
  .openapi('BackupConfiguration')

const BackupContextSchema = z
  .object({
    backupId: z.string().exactOptional().openapi({ description: 'The identifier of the backup.' }),
    kind: z
      .string()
      .exactOptional()
      .openapi({ description: 'This is always `sql#backupContext`.' }),
  })
  .openapi({ description: 'Backup context.', required: [] })
  .openapi('BackupContext')

const DiskEncryptionConfigurationSchema = z
  .object({
    kind: z
      .string()
      .exactOptional()
      .openapi({ description: 'This is always `sql#diskEncryptionConfiguration`.' }),
    kmsKeyName: z
      .string()
      .exactOptional()
      .openapi({ description: 'Resource name of KMS key for disk encryption' }),
  })
  .openapi({ description: 'Disk encryption configuration for an instance.', required: [] })
  .openapi('DiskEncryptionConfiguration')

const DiskEncryptionStatusSchema = z
  .object({
    kind: z
      .string()
      .exactOptional()
      .openapi({ description: 'This is always `sql#diskEncryptionStatus`.' }),
    kmsKeyVersionName: z
      .string()
      .exactOptional()
      .openapi({ description: 'KMS key version used to encrypt the Cloud SQL instance resource' }),
  })
  .openapi({ description: 'Disk encryption status for an instance.', required: [] })
  .openapi('DiskEncryptionStatus')

const OperationErrorSchema = z
  .object({
    code: z
      .string()
      .exactOptional()
      .openapi({ description: 'Identifies the specific error that occurred.' }),
    kind: z
      .string()
      .exactOptional()
      .openapi({ description: 'This is always `sql#operationError`.' }),
    message: z
      .string()
      .exactOptional()
      .openapi({ description: 'Additional information about the error encountered.' }),
  })
  .openapi({ description: 'Database instance operation error.', required: [] })
  .openapi('OperationError')

const BackupRunSchema = z
  .object({
    backupKind: z
      .enum(['SQL_BACKUP_KIND_UNSPECIFIED', 'SNAPSHOT', 'PHYSICAL'])
      .exactOptional()
      .openapi({ description: 'Specifies the kind of backup, PHYSICAL or DEFAULT_SNAPSHOT.' }),
    description: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The description of this run, only applicable to on-demand backups.',
      }),
    diskEncryptionConfiguration: DiskEncryptionConfigurationSchema.exactOptional().openapi({
      description: 'Encryption configuration specific to a backup.',
    }),
    diskEncryptionStatus: DiskEncryptionStatusSchema.exactOptional().openapi({
      description: 'Encryption status specific to a backup.',
    }),
    endTime: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The time the backup operation completed in UTC timezone in [RFC 3339](https://tools.ietf.org/html/rfc3339) format, for example `2012-11-15T16:19:00.094Z`.',
      }),
    enqueuedTime: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The time the run was enqueued in UTC timezone in [RFC 3339](https://tools.ietf.org/html/rfc3339) format, for example `2012-11-15T16:19:00.094Z`.',
      }),
    error: OperationErrorSchema.exactOptional().openapi({
      description:
        'Information about why the backup operation failed. This is only present if the run has the FAILED status.',
    }),
    id: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The identifier for this backup run. Unique only for a specific Cloud SQL instance.',
      }),
    instance: z.string().exactOptional().openapi({ description: 'Name of the database instance.' }),
    kind: z.string().exactOptional().openapi({ description: 'This is always `sql#backupRun`.' }),
    location: z.string().exactOptional().openapi({ description: 'Location of the backups.' }),
    selfLink: z.string().exactOptional().openapi({ description: 'The URI of this resource.' }),
    startTime: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The time the backup operation actually started in UTC timezone in [RFC 3339](https://tools.ietf.org/html/rfc3339) format, for example `2012-11-15T16:19:00.094Z`.',
      }),
    status: z
      .enum([
        'SQL_BACKUP_RUN_STATUS_UNSPECIFIED',
        'ENQUEUED',
        'OVERDUE',
        'RUNNING',
        'FAILED',
        'SUCCESSFUL',
        'SKIPPED',
        'DELETION_PENDING',
        'DELETION_FAILED',
        'DELETED',
      ])
      .exactOptional()
      .openapi({ description: 'The status of this run.' }),
    timeZone: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Backup time zone to prevent restores to an instance with a different time zone. Now relevant only for SQL Server.',
      }),
    type: z
      .enum(['SQL_BACKUP_RUN_TYPE_UNSPECIFIED', 'AUTOMATED', 'ON_DEMAND'])
      .exactOptional()
      .openapi({
        description:
          'The type of this run; can be either "AUTOMATED" or "ON_DEMAND" or "FINAL". This field defaults to "ON_DEMAND" and is ignored, when specified for insert requests.',
      }),
    windowStartTime: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The start time of the backup window during which this the backup was attempted in [RFC 3339](https://tools.ietf.org/html/rfc3339) format, for example `2012-11-15T16:19:00.094Z`.',
      }),
  })
  .openapi({ description: 'A BackupRun resource.', required: [] })
  .openapi('BackupRun')

const BackupRunsListResponseSchema = z
  .object({
    items: z
      .array(BackupRunSchema)
      .exactOptional()
      .openapi({
        description: 'A list of backup runs in reverse chronological order of the enqueued time.',
      }),
    kind: z
      .string()
      .exactOptional()
      .openapi({ description: 'This is always `sql#backupRunsList`.' }),
    nextPageToken: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The continuation token, used to page through large result sets. Provide this value in a subsequent request to return the next page of results.',
      }),
  })
  .openapi({ description: 'Backup run list results.', required: [] })
  .openapi('BackupRunsListResponse')

const BinLogCoordinatesSchema = z
  .object({
    binLogFileName: z
      .string()
      .exactOptional()
      .openapi({ description: 'Name of the binary log file for a Cloud SQL instance.' }),
    binLogPosition: z
      .string()
      .exactOptional()
      .openapi({ description: 'Position (offset) within the binary log file.' }),
    kind: z
      .string()
      .exactOptional()
      .openapi({ description: 'This is always `sql#binLogCoordinates`.' }),
  })
  .openapi({ description: 'Binary log coordinates.', required: [] })
  .openapi('BinLogCoordinates')

const CloneContextSchema = z
  .object({
    allocatedIpRange: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The name of the allocated ip range for the private ip Cloud SQL instance. For example: "google-managed-services-default". If set, the cloned instance ip will be created in the allocated range. The range name must comply with [RFC 1035](https://tools.ietf.org/html/rfc1035). Specifically, the name must be 1-63 characters long and match the regular expression [a-z]([-a-z0-9]*[a-z0-9])?. Reserved for future use.',
      }),
    binLogCoordinates: BinLogCoordinatesSchema.exactOptional().openapi({
      description:
        'Binary log coordinates, if specified, identify the position up to which the source instance is cloned. If not specified, the source instance is cloned up to the most recent binary log coordinates.',
    }),
    databaseNames: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description:
          '(SQL Server only) Clone only the specified databases from the source instance. Clone all databases if empty.',
      }),
    destinationInstanceName: z
      .string()
      .exactOptional()
      .openapi({ description: 'Name of the Cloud SQL instance to be created as a clone.' }),
    kind: z.string().exactOptional().openapi({ description: 'This is always `sql#cloneContext`.' }),
    pitrTimestampMs: z
      .string()
      .exactOptional()
      .openapi({ description: 'Reserved for future use.' }),
    pointInTime: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Timestamp, if specified, identifies the time to which the source instance is cloned.',
      }),
  })
  .openapi({ description: 'Database instance clone context.', required: [] })
  .openapi('CloneContext')

const IpMappingSchema = z
  .object({
    ipAddress: z.string().exactOptional().openapi({ description: 'The IP address assigned.' }),
    timeToRetire: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The due time for this IP to be retired in [RFC 3339](https://tools.ietf.org/html/rfc3339) format, for example `2012-11-15T16:19:00.094Z`. This field is only available when the IP is scheduled to be retired.',
      }),
    type: z
      .enum([
        'SQL_IP_ADDRESS_TYPE_UNSPECIFIED',
        'PRIMARY',
        'OUTGOING',
        'PRIVATE',
        'MIGRATED_1ST_GEN',
      ])
      .exactOptional()
      .openapi({
        description:
          'The type of this IP address. A `PRIMARY` address is a public address that can accept incoming connections. A `PRIVATE` address is a private address that can accept incoming connections. An `OUTGOING` address is the source address of connections originating from the instance, if supported.',
      }),
  })
  .openapi({ description: 'Database instance IP Mapping.', required: [] })
  .openapi('IpMapping')

const SslCertSchema = z
  .object({
    cert: z.string().exactOptional().openapi({ description: 'PEM representation.' }),
    certSerialNumber: z
      .string()
      .exactOptional()
      .openapi({ description: 'Serial number, as extracted from the certificate.' }),
    commonName: z
      .string()
      .exactOptional()
      .openapi({ description: 'User supplied name. Constrained to [a-zA-Z.-_ ]+.' }),
    createTime: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The time when the certificate was created in [RFC 3339](https://tools.ietf.org/html/rfc3339) format, for example `2012-11-15T16:19:00.094Z`.',
      }),
    expirationTime: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The time when the certificate expires in [RFC 3339](https://tools.ietf.org/html/rfc3339) format, for example `2012-11-15T16:19:00.094Z`.',
      }),
    instance: z.string().exactOptional().openapi({ description: 'Name of the database instance.' }),
    kind: z.string().exactOptional().openapi({ description: 'This is always `sql#sslCert`.' }),
    selfLink: z.string().exactOptional().openapi({ description: 'The URI of this resource.' }),
    sha1Fingerprint: z.string().exactOptional().openapi({ description: 'Sha1 Fingerprint.' }),
  })
  .openapi({ description: 'SslCerts Resource', required: [] })
  .openapi('SslCert')

const ConnectSettingsSchema = z
  .object({
    backendType: z
      .enum(['SQL_BACKEND_TYPE_UNSPECIFIED', 'FIRST_GEN', 'SECOND_GEN', 'EXTERNAL'])
      .exactOptional()
      .openapi({
        description:
          '`SECOND_GEN`: Cloud SQL database instance. `EXTERNAL`: A database server that is not managed by Google. This property is read-only; use the `tier` property in the `settings` object to determine the database type.',
      }),
    databaseVersion: z
      .enum([
        'SQL_DATABASE_VERSION_UNSPECIFIED',
        'MYSQL_5_1',
        'MYSQL_5_5',
        'MYSQL_5_6',
        'MYSQL_5_7',
        'SQLSERVER_2017_STANDARD',
        'SQLSERVER_2017_ENTERPRISE',
        'SQLSERVER_2017_EXPRESS',
        'SQLSERVER_2017_WEB',
        'POSTGRES_9_6',
        'POSTGRES_10',
        'POSTGRES_11',
        'POSTGRES_12',
        'POSTGRES_13',
        'POSTGRES_14',
        'MYSQL_8_0',
        'MYSQL_8_0_18',
        'MYSQL_8_0_26',
        'MYSQL_8_0_27',
        'MYSQL_8_0_28',
        'MYSQL_8_0_29',
        'MYSQL_8_0_30',
        'MYSQL_8_0_31',
        'MYSQL_8_0_32',
        'MYSQL_8_0_33',
        'MYSQL_8_0_34',
        'MYSQL_8_0_35',
        'MYSQL_8_0_36',
        'SQLSERVER_2019_STANDARD',
        'SQLSERVER_2019_ENTERPRISE',
        'SQLSERVER_2019_EXPRESS',
        'SQLSERVER_2019_WEB',
      ])
      .exactOptional()
      .openapi({
        description:
          'The database engine type and version. The `databaseVersion` field cannot be changed after instance creation. MySQL instances: `MYSQL_8_0`, `MYSQL_5_7` (default), or `MYSQL_5_6`. PostgreSQL instances: `POSTGRES_9_6`, `POSTGRES_10`, `POSTGRES_11` or `POSTGRES_12` (default), `POSTGRES_13`, or `POSTGRES_14`. SQL Server instances: `SQLSERVER_2017_STANDARD` (default), `SQLSERVER_2017_ENTERPRISE`, `SQLSERVER_2017_EXPRESS`, `SQLSERVER_2017_WEB`, `SQLSERVER_2019_STANDARD`, `SQLSERVER_2019_ENTERPRISE`, `SQLSERVER_2019_EXPRESS`, or `SQLSERVER_2019_WEB`.',
      }),
    ipAddresses: z
      .array(IpMappingSchema)
      .exactOptional()
      .openapi({ description: 'The assigned IP addresses for the instance.' }),
    kind: z
      .string()
      .exactOptional()
      .openapi({ description: 'This is always `sql#connectSettings`.' }),
    region: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The cloud region for the instance. e.g. `us-central1`, `europe-west1`. The region cannot be changed after instance creation.',
      }),
    serverCaCert: SslCertSchema.exactOptional().openapi({ description: 'SSL configuration.' }),
  })
  .openapi({ description: 'Connect settings retrieval response.', required: [] })
  .openapi('ConnectSettings')

const SqlServerDatabaseDetailsSchema = z
  .object({
    compatibilityLevel: z
      .int32()
      .exactOptional()
      .openapi({
        description: 'The version of SQL Server with which the database is to be made compatible',
      }),
    recoveryModel: z
      .string()
      .exactOptional()
      .openapi({ description: 'The recovery model of a SQL Server database' }),
  })
  .openapi({
    description: 'Represents a Sql Server database on the Cloud SQL instance.',
    required: [],
  })
  .openapi('SqlServerDatabaseDetails')

const DatabaseSchema = z
  .object({
    charset: z.string().exactOptional().openapi({ description: 'The Cloud SQL charset value.' }),
    collation: z
      .string()
      .exactOptional()
      .openapi({ description: 'The Cloud SQL collation value.' }),
    etag: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'This field is deprecated and will be removed from a future version of the API.',
      }),
    instance: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The name of the Cloud SQL instance. This does not include the project ID.',
      }),
    kind: z.string().exactOptional().openapi({ description: 'This is always `sql#database`.' }),
    name: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The name of the database in the Cloud SQL instance. This does not include the project ID or instance name.',
      }),
    project: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The project ID of the project containing the Cloud SQL database. The Google apps domain is prefixed if applicable.',
      }),
    selfLink: z.string().exactOptional().openapi({ description: 'The URI of this resource.' }),
    sqlserverDatabaseDetails: SqlServerDatabaseDetailsSchema.exactOptional(),
  })
  .openapi({ description: 'Represents a SQL database on the Cloud SQL instance.', required: [] })
  .openapi('Database')

const DatabaseFlagsSchema = z
  .object({
    name: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The name of the flag. These flags are passed at instance startup, so include both server options and system variables. Flags are specified with underscores, not hyphens. For more information, see [Configuring Database Flags](https://cloud.google.com/sql/docs/mysql/flags) in the Cloud SQL documentation.',
      }),
    value: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "The value of the flag. Boolean flags are set to `on` for true and `off` for false. This field must be omitted if the flag doesn't take a value.",
      }),
  })
  .openapi({ description: 'Database flags for Cloud SQL instances.', required: [] })
  .openapi('DatabaseFlags')

const InstanceReferenceSchema = z
  .object({
    name: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The name of the Cloud SQL instance being referenced. This does not include the project ID.',
      }),
    project: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The project ID of the Cloud SQL instance being referenced. The default is the same project ID as the instance references it.',
      }),
    region: z
      .string()
      .exactOptional()
      .openapi({ description: 'The region of the Cloud SQL instance being referenced.' }),
  })
  .openapi({ description: 'Reference to another Cloud SQL instance.', required: [] })
  .openapi('InstanceReference')

const OnPremisesConfigurationSchema = z
  .object({
    caCertificate: z
      .string()
      .exactOptional()
      .openapi({ description: "PEM representation of the trusted CA's x509 certificate." }),
    clientCertificate: z
      .string()
      .exactOptional()
      .openapi({ description: "PEM representation of the replica's x509 certificate." }),
    clientKey: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "PEM representation of the replica's private key. The corresponsing public key is encoded in the client's certificate.",
      }),
    dumpFilePath: z
      .string()
      .exactOptional()
      .openapi({ description: 'The dump file to create the Cloud SQL replica.' }),
    hostPort: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The host and port of the on-premises instance in host:port format',
      }),
    kind: z
      .string()
      .exactOptional()
      .openapi({ description: 'This is always `sql#onPremisesConfiguration`.' }),
    password: z
      .string()
      .exactOptional()
      .openapi({ description: 'The password for connecting to on-premises instance.' }),
    sourceInstance: InstanceReferenceSchema.exactOptional().openapi({
      description: 'The reference to Cloud SQL instance if the source is Cloud SQL.',
    }),
    username: z
      .string()
      .exactOptional()
      .openapi({ description: 'The username for connecting to on-premises instance.' }),
  })
  .openapi({ description: 'On-premises instance configuration.', required: [] })
  .openapi('OnPremisesConfiguration')

const SqlOutOfDiskReportSchema = z
  .object({
    sqlMinRecommendedIncreaseSizeGb: z
      .int32()
      .exactOptional()
      .openapi({
        description:
          'The minimum recommended increase size in GigaBytes This field is consumed by the frontend * Writers: * the proactive database wellness job for OOD. * Readers:',
      }),
    sqlOutOfDiskState: z
      .enum(['SQL_OUT_OF_DISK_STATE_UNSPECIFIED', 'NORMAL', 'SOFT_SHUTDOWN'])
      .exactOptional()
      .openapi({
        description:
          'This field represents the state generated by the proactive database wellness job for OutOfDisk issues. * Writers: * the proactive database wellness job for OOD. * Readers: * the proactive database wellness job',
      }),
  })
  .openapi({
    description: 'This message wraps up the information written by out-of-disk detection job.',
    required: [],
  })
  .openapi('SqlOutOfDiskReport')

const ReplicaConfigurationSchema: z.ZodType<ReplicaConfigurationType> = z
  .lazy(() =>
    z
      .object({
        failoverTarget: z
          .boolean()
          .exactOptional()
          .openapi({
            description:
              'Specifies if the replica is the failover target. If the field is set to `true` the replica will be designated as a failover replica. In case the primary instance fails, the replica instance will be promoted as the new primary instance. Only one replica can be specified as failover target, and the replica has to be in different zone with the primary instance.',
          }),
        kind: z
          .string()
          .exactOptional()
          .openapi({ description: 'This is always `sql#replicaConfiguration`.' }),
        mysqlReplicaConfiguration: MySqlReplicaConfigurationSchema.exactOptional().openapi({
          description:
            'MySQL specific configuration when replicating from a MySQL on-premises primary instance. Replication configuration information such as the username, password, certificates, and keys are not stored in the instance metadata. The configuration information is used only to set up the replication connection and is stored by MySQL in a file named `master.info` in the data directory.',
        }),
      })
      .openapi({
        description: 'Read-replica configuration for connecting to the primary instance.',
        required: [],
      }),
  )
  .openapi('ReplicaConfiguration')

const SqlScheduledMaintenanceSchema = z
  .object({
    canDefer: z.boolean().exactOptional(),
    canReschedule: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'If the scheduled maintenance can be rescheduled.' }),
    scheduleDeadlineTime: z
      .string()
      .exactOptional()
      .openapi({ description: 'Maintenance cannot be rescheduled to start beyond this deadline.' }),
    startTime: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The start time of any upcoming scheduled maintenance for this instance.',
      }),
  })
  .openapi({ description: 'Any scheduled maintenance for this instance.', required: [] })
  .openapi('SqlScheduledMaintenance')

const SqlActiveDirectoryConfigSchema = z
  .object({
    domain: z
      .string()
      .exactOptional()
      .openapi({ description: 'The name of the domain (e.g., mydomain.com).' }),
    kind: z
      .string()
      .exactOptional()
      .openapi({ description: 'This is always sql#activeDirectoryConfig.' }),
  })
  .openapi({
    description: 'Active Directory configuration, relevant only for Cloud SQL for SQL Server.',
    required: [],
  })
  .openapi('SqlActiveDirectoryConfig')

const DenyMaintenancePeriodSchema = z
  .object({
    endDate: z
      .string()
      .exactOptional()
      .openapi({
        description:
          '"deny maintenance period" end date. If the year of the end date is empty, the year of the start date also must be empty. In this case, it means the deny maintenance period recurs every year. The date is in format yyyy-mm-dd i.e., 2020-11-01, or mm-dd, i.e., 11-01',
      }),
    startDate: z
      .string()
      .exactOptional()
      .openapi({
        description:
          '"deny maintenance period" start date. If the year of the start date is empty, the year of the end date also must be empty. In this case, it means the deny maintenance period recurs every year. The date is in format yyyy-mm-dd i.e., 2020-11-01, or mm-dd, i.e., 11-01',
      }),
    time: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Time in UTC when the "deny maintenance period" starts on start_date and ends on end_date. The time is in format: HH:mm:SS, i.e., 00:00:00',
      }),
  })
  .openapi({
    description:
      'Deny Maintenance Periods. This specifies a date range during when all CSA rollout will be denied.',
    required: [],
  })
  .openapi('DenyMaintenancePeriod')

const InsightsConfigSchema = z
  .object({
    queryInsightsEnabled: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Whether Query Insights feature is enabled.' }),
    queryPlansPerMinute: z
      .int32()
      .exactOptional()
      .openapi({
        description:
          'Number of query execution plans captured by Insights per minute for all queries combined. Default is 5.',
      }),
    queryStringLength: z
      .int32()
      .exactOptional()
      .openapi({
        description:
          'Maximum query length stored in bytes. Default value: 1024 bytes. Range: 256-4500 bytes. Query length more than this field value will be truncated to this value. When unset, query length will be the default value. Changing query length will restart the database.',
      }),
    recordApplicationTags: z
      .boolean()
      .exactOptional()
      .openapi({
        description: 'Whether Query Insights will record application tags from query when enabled.',
      }),
    recordClientAddress: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Whether Query Insights will record client address when enabled.' }),
  })
  .openapi({
    description:
      'Insights configuration. This specifies when Cloud SQL Insights feature is enabled and optional configuration.',
    required: [],
  })
  .openapi('InsightsConfig')

const IpConfigurationSchema = z
  .object({
    allocatedIpRange: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The name of the allocated ip range for the private ip Cloud SQL instance. For example: "google-managed-services-default". If set, the instance ip will be created in the allocated range. The range name must comply with [RFC 1035](https://tools.ietf.org/html/rfc1035). Specifically, the name must be 1-63 characters long and match the regular expression `[a-z]([-a-z0-9]*[a-z0-9])?.`',
      }),
    authorizedNetworks: z
      .array(AclEntrySchema)
      .exactOptional()
      .openapi({
        description:
          "The list of external networks that are allowed to connect to the instance using the IP. In 'CIDR' notation, also known as 'slash' notation (for example: `157.197.200.0/24`).",
      }),
    enablePrivatePathForGoogleCloudServices: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Controls connectivity to private IP instances from Google services, such as BigQuery.',
      }),
    ipv4Enabled: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Whether the instance is assigned a public IP address or not.' }),
    privateNetwork: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The resource link for the VPC network from which the Cloud SQL instance is accessible for private IP. For example, `/projects/myProject/global/networks/default`. This setting can be updated, but it cannot be removed after it is set.',
      }),
    requireSsl: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Whether SSL connections over IP are enforced or not.' }),
  })
  .openapi({ description: 'IP Management configuration.', required: [] })
  .openapi('IpConfiguration')

const LocationPreferenceSchema = z
  .object({
    followGaeApplication: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The App Engine application to follow, it must be in the same region as the Cloud SQL instance. WARNING: Changing this might restart the instance.',
      }),
    kind: z
      .string()
      .exactOptional()
      .openapi({ description: 'This is always `sql#locationPreference`.' }),
    secondaryZone: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The preferred Compute Engine zone for the secondary/failover (for example: us-central1-a, us-central1-b, etc.).',
      }),
    zone: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The preferred Compute Engine zone (for example: us-central1-a, us-central1-b, etc.). WARNING: Changing this might restart the instance.',
      }),
  })
  .openapi({
    description:
      'Preferred location. This specifies where a Cloud SQL instance is located. Note that if the preferred location is not available, the instance will be located as close as possible within the region. Only one location may be specified.',
    required: [],
  })
  .openapi('LocationPreference')

const MaintenanceWindowSchema = z
  .object({
    day: z
      .int32()
      .exactOptional()
      .openapi({ description: 'day of week (1-7), starting on Monday.' }),
    hour: z.int32().exactOptional().openapi({ description: 'hour of day - 0 to 23.' }),
    kind: z
      .string()
      .exactOptional()
      .openapi({ description: 'This is always `sql#maintenanceWindow`.' }),
    updateTrack: z
      .enum(['SQL_UPDATE_TRACK_UNSPECIFIED', 'canary', 'stable'])
      .exactOptional()
      .openapi({
        description:
          'Maintenance timing setting: `canary` (Earlier) or `stable` (Later). [Learn more](https://cloud.google.com/sql/docs/mysql/instance-settings#maintenance-timing-2ndgen).',
      }),
  })
  .openapi({
    description:
      'Maintenance window. This specifies when a Cloud SQL instance is restarted for system maintenance purposes.',
    required: [],
  })
  .openapi('MaintenanceWindow')

const PasswordValidationPolicySchema = z
  .object({
    complexity: z
      .enum(['COMPLEXITY_UNSPECIFIED', 'COMPLEXITY_DEFAULT'])
      .exactOptional()
      .openapi({ description: 'The complexity of the password.' }),
    disallowUsernameSubstring: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Disallow username as a part of the password.' }),
    enablePasswordPolicy: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Whether the password policy is enabled or not.' }),
    minLength: z
      .int32()
      .exactOptional()
      .openapi({ description: 'Minimum number of characters allowed.' }),
    passwordChangeInterval: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Minimum interval after which the password can be changed. This flag is only supported for PostgreSQL.',
      }),
    reuseInterval: z
      .int32()
      .exactOptional()
      .openapi({ description: 'Number of previous passwords that cannot be reused.' }),
  })
  .openapi({ description: 'Database instance local user password validation policy', required: [] })
  .openapi('PasswordValidationPolicy')

const SqlServerAuditConfigSchema = z
  .object({
    bucket: z
      .string()
      .exactOptional()
      .openapi({ description: 'The name of the destination bucket (e.g., gs://mybucket).' }),
    kind: z
      .string()
      .exactOptional()
      .openapi({ description: 'This is always sql#sqlServerAuditConfig' }),
    retentionInterval: z
      .string()
      .exactOptional()
      .openapi({ description: 'How long to keep generated audit files.' }),
    uploadInterval: z
      .string()
      .exactOptional()
      .openapi({ description: 'How often to upload generated audit files.' }),
  })
  .openapi({ description: 'SQL Server specific audit configuration.', required: [] })
  .openapi('SqlServerAuditConfig')

const SettingsSchema = z
  .object({
    activationPolicy: z
      .enum(['SQL_ACTIVATION_POLICY_UNSPECIFIED', 'ALWAYS', 'NEVER', 'ON_DEMAND'])
      .exactOptional()
      .openapi({
        description:
          'The activation policy specifies when the instance is activated; it is applicable only when the instance state is RUNNABLE. Valid values: * `ALWAYS`: The instance is on, and remains so even in the absence of connection requests. * `NEVER`: The instance is off; it is not activated, even if a connection request arrives.',
      }),
    activeDirectoryConfig: SqlActiveDirectoryConfigSchema.exactOptional().openapi({
      description: 'Active Directory configuration, relevant only for Cloud SQL for SQL Server.',
    }),
    advancedMachineFeatures: AdvancedMachineFeaturesSchema.exactOptional().openapi({
      description:
        'Specifies advance machine configuration for the instance relevant only for SQL Server.',
    }),
    authorizedGaeApplications: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description:
          'The App Engine app IDs that can access this instance. (Deprecated) Applied to First Generation instances only.',
      }),
    availabilityType: z
      .enum(['SQL_AVAILABILITY_TYPE_UNSPECIFIED', 'ZONAL', 'REGIONAL'])
      .exactOptional()
      .openapi({
        description:
          'Availability type. Potential values: * `ZONAL`: The instance serves data from only one zone. Outages in that zone affect data accessibility. * `REGIONAL`: The instance can serve data from more than one zone in a region (it is highly available)./ For more information, see [Overview of the High Availability Configuration](https://cloud.google.com/sql/docs/mysql/high-availability).',
      }),
    backupConfiguration: BackupConfigurationSchema.exactOptional().openapi({
      description: 'The daily backup configuration for the instance.',
    }),
    collation: z
      .string()
      .exactOptional()
      .openapi({ description: 'The name of server Instance collation.' }),
    connectorEnforcement: z
      .enum(['CONNECTOR_ENFORCEMENT_UNSPECIFIED', 'NOT_REQUIRED', 'REQUIRED'])
      .exactOptional()
      .openapi({
        description:
          'Specifies if connections must use Cloud SQL connectors. Option values include the following: `NOT_REQUIRED` (Cloud SQL instances can be connected without Cloud SQL Connectors) and `REQUIRED` (Only allow connections that use Cloud SQL Connectors) Note that using REQUIRED disables all existing authorized networks. If this field is not specified when creating a new instance, NOT_REQUIRED is used. If this field is not specified when patching or updating an existing instance, it is left unchanged in the instance.',
      }),
    crashSafeReplicationEnabled: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Configuration specific to read replica instances. Indicates whether database flags for crash-safe replication are enabled. This property was only applicable to First Generation instances.',
      }),
    dataDiskSizeGb: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The size of data disk, in GB. The data disk size minimum is 10GB.',
      }),
    dataDiskType: z
      .enum(['SQL_DATA_DISK_TYPE_UNSPECIFIED', 'PD_SSD', 'PD_HDD', 'OBSOLETE_LOCAL_SSD'])
      .exactOptional()
      .openapi({
        description:
          'The type of data disk: `PD_SSD` (default) or `PD_HDD`. Not used for First Generation instances.',
      }),
    databaseFlags: z
      .array(DatabaseFlagsSchema)
      .exactOptional()
      .openapi({ description: 'The database flags passed to the instance at startup.' }),
    databaseReplicationEnabled: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Configuration specific to read replica instances. Indicates whether replication is enabled or not. WARNING: Changing this restarts the instance.',
      }),
    deletionProtectionEnabled: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Configuration to protect against accidental instance deletion.' }),
    denyMaintenancePeriods: z
      .array(DenyMaintenancePeriodSchema)
      .exactOptional()
      .openapi({ description: 'Deny maintenance periods' }),
    insightsConfig: InsightsConfigSchema.exactOptional().openapi({
      description: 'Insights configuration, for now relevant only for Postgres.',
    }),
    ipConfiguration: IpConfigurationSchema.exactOptional().openapi({
      description:
        'The settings for IP Management. This allows to enable or disable the instance IP and manage which external networks can connect to the instance. The IPv4 address cannot be disabled for Second Generation instances.',
    }),
    kind: z.string().exactOptional().openapi({ description: 'This is always `sql#settings`.' }),
    locationPreference: LocationPreferenceSchema.exactOptional().openapi({
      description:
        'The location preference settings. This allows the instance to be located as near as possible to either an App Engine app or Compute Engine zone for better performance. App Engine co-location was only applicable to First Generation instances.',
    }),
    maintenanceWindow: MaintenanceWindowSchema.exactOptional().openapi({
      description:
        'The maintenance window for this instance. This specifies when the instance can be restarted for maintenance purposes.',
    }),
    passwordValidationPolicy: PasswordValidationPolicySchema.exactOptional().openapi({
      description: 'The local user password validation policy of the instance.',
    }),
    pricingPlan: z
      .enum(['SQL_PRICING_PLAN_UNSPECIFIED', 'PACKAGE', 'PER_USE'])
      .exactOptional()
      .openapi({
        description:
          'The pricing plan for this instance. This can be either `PER_USE` or `PACKAGE`. Only `PER_USE` is supported for Second Generation instances.',
      }),
    replicationType: z
      .enum(['SQL_REPLICATION_TYPE_UNSPECIFIED', 'SYNCHRONOUS', 'ASYNCHRONOUS'])
      .exactOptional()
      .openapi({
        description:
          'The type of replication this instance uses. This can be either `ASYNCHRONOUS` or `SYNCHRONOUS`. (Deprecated) This property was only applicable to First Generation instances.',
      }),
    settingsVersion: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The version of instance settings. This is a required field for update method to make sure concurrent updates are handled properly. During update, use the most recent settingsVersion value for this instance and do not try to update this value.',
      }),
    sqlServerAuditConfig: SqlServerAuditConfigSchema.exactOptional().openapi({
      description: 'SQL Server specific audit configuration.',
    }),
    storageAutoResize: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Configuration to increase storage size automatically. The default value is true.',
      }),
    storageAutoResizeLimit: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The maximum size to which storage capacity can be automatically increased. The default value is 0, which specifies that there is no limit.',
      }),
    tier: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The tier (or machine type) for this instance, for example `db-custom-1-3840`. WARNING: Changing this restarts the instance.',
      }),
    timeZone: z
      .string()
      .exactOptional()
      .openapi({ description: 'Server timezone, relevant only for Cloud SQL for SQL Server.' }),
    userLabels: z
      .record(z.string(), z.string())
      .exactOptional()
      .openapi({
        description:
          'User-provided labels, represented as a dictionary where each label is a single key value pair.',
      }),
  })
  .openapi({ description: 'Database instance settings.', required: [] })
  .openapi('Settings')

const DatabaseInstanceSchema = z
  .object({
    availableMaintenanceVersions: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description: 'Output only. List all maintenance versions applicable on the instance',
        readOnly: true,
      }),
    backendType: z
      .enum(['SQL_BACKEND_TYPE_UNSPECIFIED', 'FIRST_GEN', 'SECOND_GEN', 'EXTERNAL'])
      .exactOptional()
      .openapi({
        description:
          'The backend type. `SECOND_GEN`: Cloud SQL database instance. `EXTERNAL`: A database server that is not managed by Google. This property is read-only; use the `tier` property in the `settings` object to determine the database type.',
      }),
    connectionName: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Connection name of the Cloud SQL instance used in connection strings.',
      }),
    createTime: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Output only. The time when the instance was created in [RFC 3339](https://tools.ietf.org/html/rfc3339) format, for example `2012-11-15T16:19:00.094Z`.',
        readOnly: true,
      }),
    currentDiskSize: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The current disk usage of the instance in bytes. This property has been deprecated. Use the "cloudsql.googleapis.com/database/disk/bytes_used" metric in Cloud Monitoring API instead. Please see [this announcement](https://groups.google.com/d/msg/google-cloud-sql-announce/I_7-F9EBhT0/BtvFtdFeAgAJ) for details.',
      }),
    databaseInstalledVersion: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Output only. Stores the current database version running on the instance including minor version such as `MYSQL_8_0_18`.',
        readOnly: true,
      }),
    databaseVersion: z
      .enum([
        'SQL_DATABASE_VERSION_UNSPECIFIED',
        'MYSQL_5_1',
        'MYSQL_5_5',
        'MYSQL_5_6',
        'MYSQL_5_7',
        'SQLSERVER_2017_STANDARD',
        'SQLSERVER_2017_ENTERPRISE',
        'SQLSERVER_2017_EXPRESS',
        'SQLSERVER_2017_WEB',
        'POSTGRES_9_6',
        'POSTGRES_10',
        'POSTGRES_11',
        'POSTGRES_12',
        'POSTGRES_13',
        'POSTGRES_14',
        'MYSQL_8_0',
        'MYSQL_8_0_18',
        'MYSQL_8_0_26',
        'MYSQL_8_0_27',
        'MYSQL_8_0_28',
        'MYSQL_8_0_29',
        'MYSQL_8_0_30',
        'MYSQL_8_0_31',
        'MYSQL_8_0_32',
        'MYSQL_8_0_33',
        'MYSQL_8_0_34',
        'MYSQL_8_0_35',
        'MYSQL_8_0_36',
        'SQLSERVER_2019_STANDARD',
        'SQLSERVER_2019_ENTERPRISE',
        'SQLSERVER_2019_EXPRESS',
        'SQLSERVER_2019_WEB',
      ])
      .exactOptional()
      .openapi({
        description:
          'The database engine type and version. The `databaseVersion` field cannot be changed after instance creation.',
      }),
    diskEncryptionConfiguration: DiskEncryptionConfigurationSchema.exactOptional().openapi({
      description: 'Disk encryption configuration specific to an instance.',
    }),
    diskEncryptionStatus: DiskEncryptionStatusSchema.exactOptional().openapi({
      description: 'Disk encryption status specific to an instance.',
    }),
    etag: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'This field is deprecated and will be removed from a future version of the API. Use the `settings.settingsVersion` field instead.',
      }),
    failoverReplica: z
      .object({
        available: z
          .boolean()
          .exactOptional()
          .openapi({
            description:
              'The availability status of the failover replica. A false status indicates that the failover replica is out of sync. The primary instance can only failover to the failover replica when the status is true.',
          }),
        name: z
          .string()
          .exactOptional()
          .openapi({
            description:
              "The name of the failover replica. If specified at instance creation, a failover replica is created for the instance. The name doesn't include the project ID.",
          }),
      })
      .exactOptional()
      .openapi({ description: 'The name and status of the failover replica.', required: [] }),
    gceZone: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The Compute Engine zone that the instance is currently serving from. This value could be different from the zone that was specified when the instance was created if the instance has failed over to its secondary zone. WARNING: Changing this might restart the instance.',
      }),
    instanceType: z
      .enum([
        'SQL_INSTANCE_TYPE_UNSPECIFIED',
        'CLOUD_SQL_INSTANCE',
        'ON_PREMISES_INSTANCE',
        'READ_REPLICA_INSTANCE',
      ])
      .exactOptional()
      .openapi({ description: 'The instance type.' }),
    ipAddresses: z
      .array(IpMappingSchema)
      .exactOptional()
      .openapi({ description: 'The assigned IP addresses for the instance.' }),
    ipv6Address: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The IPv6 address assigned to the instance. (Deprecated) This property was applicable only to First Generation instances.',
      }),
    kind: z.string().exactOptional().openapi({ description: 'This is always `sql#instance`.' }),
    maintenanceVersion: z
      .string()
      .exactOptional()
      .openapi({ description: 'The current software version on the instance.' }),
    masterInstanceName: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The name of the instance which will act as primary in the replication setup.',
      }),
    maxDiskSize: z
      .string()
      .exactOptional()
      .openapi({ description: 'The maximum disk size of the instance in bytes.' }),
    name: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Name of the Cloud SQL instance. This does not include the project ID.',
      }),
    onPremisesConfiguration: OnPremisesConfigurationSchema.exactOptional().openapi({
      description: 'Configuration specific to on-premises instances.',
    }),
    outOfDiskReport: SqlOutOfDiskReportSchema.exactOptional().openapi({
      description:
        'This field represents the report generated by the proactive database wellness job for OutOfDisk issues. * Writers: * the proactive database wellness job for OOD. * Readers: * the proactive database wellness job',
    }),
    project: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The project ID of the project containing the Cloud SQL instance. The Google apps domain is prefixed if applicable.',
      }),
    region: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The geographical region. Can be: * `us-central` (`FIRST_GEN` instances only) * `us-central1` (`SECOND_GEN` instances only) * `asia-east1` or `europe-west1`. Defaults to `us-central` or `us-central1` depending on the instance type. The region cannot be changed after instance creation.',
      }),
    replicaConfiguration: ReplicaConfigurationSchema.exactOptional().openapi({
      description: 'Configuration specific to failover replicas and read replicas.',
    }),
    replicaNames: z
      .array(z.string())
      .exactOptional()
      .openapi({ description: 'The replicas of the instance.' }),
    rootPassword: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Initial root password. Use only on creation. You must set root passwords before you can connect to PostgreSQL instances.',
      }),
    satisfiesPzs: z
      .boolean()
      .exactOptional()
      .openapi({
        description: 'The status indicating if instance satisfiesPzs. Reserved for future use.',
      }),
    scheduledMaintenance: SqlScheduledMaintenanceSchema.exactOptional().openapi({
      description: 'The start time of any upcoming scheduled maintenance for this instance.',
    }),
    secondaryGceZone: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The Compute Engine zone that the failover instance is currently serving from for a regional instance. This value could be different from the zone that was specified when the instance was created if the instance has failed over to its secondary/failover zone.',
      }),
    selfLink: z.string().exactOptional().openapi({ description: 'The URI of this resource.' }),
    serverCaCert: SslCertSchema.exactOptional().openapi({ description: 'SSL configuration.' }),
    serviceAccountEmailAddress: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The service account email address assigned to the instance. \\This property is read-only.',
      }),
    settings: SettingsSchema.exactOptional().openapi({ description: 'The user settings.' }),
    state: z
      .enum([
        'SQL_INSTANCE_STATE_UNSPECIFIED',
        'RUNNABLE',
        'SUSPENDED',
        'PENDING_DELETE',
        'PENDING_CREATE',
        'MAINTENANCE',
        'FAILED',
        'ONLINE_MAINTENANCE',
      ])
      .exactOptional()
      .openapi({ description: 'The current serving state of the Cloud SQL instance.' }),
    suspensionReason: z
      .array(
        z.enum([
          'SQL_SUSPENSION_REASON_UNSPECIFIED',
          'BILLING_ISSUE',
          'LEGAL_ISSUE',
          'OPERATIONAL_ISSUE',
          'KMS_KEY_ISSUE',
        ]),
      )
      .exactOptional()
      .openapi({
        description: 'If the instance state is SUSPENDED, the reason for the suspension.',
      }),
  })
  .openapi({ description: 'A Cloud SQL instance resource.', required: [] })
  .openapi('DatabaseInstance')

const DatabasesListResponseSchema = z
  .object({
    items: z
      .array(DatabaseSchema)
      .exactOptional()
      .openapi({ description: 'List of database resources in the instance.' }),
    kind: z
      .string()
      .exactOptional()
      .openapi({ description: 'This is always `sql#databasesList`.' }),
  })
  .openapi({ description: 'Database list response.', required: [] })
  .openapi('DatabasesListResponse')

const DemoteMasterMySqlReplicaConfigurationSchema = z
  .object({
    caCertificate: z
      .string()
      .exactOptional()
      .openapi({ description: "PEM representation of the trusted CA's x509 certificate." }),
    clientCertificate: z
      .string()
      .exactOptional()
      .openapi({ description: "PEM representation of the replica's x509 certificate." }),
    clientKey: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "PEM representation of the replica's private key. The corresponsing public key is encoded in the client's certificate. The format of the replica's private key can be either PKCS #1 or PKCS #8.",
      }),
    kind: z
      .string()
      .exactOptional()
      .openapi({ description: 'This is always `sql#demoteMasterMysqlReplicaConfiguration`.' }),
    password: z
      .string()
      .exactOptional()
      .openapi({ description: 'The password for the replication connection.' }),
    username: z
      .string()
      .exactOptional()
      .openapi({ description: 'The username for the replication connection.' }),
  })
  .openapi({ description: 'Read-replica configuration specific to MySQL databases.', required: [] })
  .openapi('DemoteMasterMySqlReplicaConfiguration')

const DemoteMasterConfigurationSchema = z
  .object({
    kind: z
      .string()
      .exactOptional()
      .openapi({ description: 'This is always `sql#demoteMasterConfiguration`.' }),
    mysqlReplicaConfiguration: DemoteMasterMySqlReplicaConfigurationSchema.exactOptional().openapi({
      description:
        'MySQL specific configuration when replicating from a MySQL on-premises primary instance. Replication configuration information such as the username, password, certificates, and keys are not stored in the instance metadata. The configuration information is used only to set up the replication connection and is stored by MySQL in a file named `master.info` in the data directory.',
    }),
  })
  .openapi({
    description: 'Read-replica configuration for connecting to the on-premises primary instance.',
    required: [],
  })
  .openapi('DemoteMasterConfiguration')

const DemoteMasterContextSchema = z
  .object({
    kind: z
      .string()
      .exactOptional()
      .openapi({ description: 'This is always `sql#demoteMasterContext`.' }),
    masterInstanceName: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The name of the instance which will act as on-premises primary instance in the replication setup.',
      }),
    replicaConfiguration: DemoteMasterConfigurationSchema.exactOptional().openapi({
      description:
        'Configuration specific to read-replicas replicating from the on-premises primary instance.',
    }),
    skipReplicationSetup: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Flag to skip replication setup on the instance.' }),
    verifyGtidConsistency: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Verify the GTID consistency for demote operation. Default value: `True`. Setting this flag to `false` enables you to bypass the GTID consistency check between on-premises primary instance and Cloud SQL instance during the demotion operation but also exposes you to the risk of future replication failures. Change the value only if you know the reason for the GTID divergence and are confident that doing so will not cause any replication issues.',
      }),
  })
  .openapi({ description: 'Database instance demote primary instance context.', required: [] })
  .openapi('DemoteMasterContext')

const ExportContextSchema = z
  .object({
    bakExportOptions: z
      .object({
        stripeCount: z
          .int32()
          .exactOptional()
          .openapi({
            description:
              'Option for specifying how many stripes to use for the export. If blank, and the value of the striped field is true, the number of stripes is automatically chosen.',
          }),
        striped: z
          .boolean()
          .exactOptional()
          .openapi({ description: 'Whether or not the export should be striped.' }),
      })
      .exactOptional()
      .openapi({ description: 'Options for exporting BAK files (SQL Server-only)', required: [] }),
    csvExportOptions: z
      .object({
        escapeCharacter: z
          .string()
          .exactOptional()
          .openapi({
            description:
              'Specifies the character that should appear before a data character that needs to be escaped.',
          }),
        fieldsTerminatedBy: z
          .string()
          .exactOptional()
          .openapi({
            description:
              'Specifies the character that separates columns within each row (line) of the file.',
          }),
        linesTerminatedBy: z
          .string()
          .exactOptional()
          .openapi({
            description:
              'This is used to separate lines. If a line does not contain all fields, the rest of the columns are set to their default values.',
          }),
        quoteCharacter: z
          .string()
          .exactOptional()
          .openapi({
            description: 'Specifies the quoting character to be used when a data value is quoted.',
          }),
        selectQuery: z
          .string()
          .exactOptional()
          .openapi({ description: 'The select query used to extract the data.' }),
      })
      .exactOptional()
      .openapi({
        description: 'Options for exporting data as CSV. `MySQL` and `PostgreSQL` instances only.',
        required: [],
      }),
    databases: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description:
          'Databases to be exported. `MySQL instances:` If `fileType` is `SQL` and no database is specified, all databases are exported, except for the `mysql` system database. If `fileType` is `CSV`, you can specify one database, either by using this property or by using the `csvExportOptions.selectQuery` property, which takes precedence over this property. `PostgreSQL instances:` You must specify one database to be exported. If `fileType` is `CSV`, this database must match the one specified in the `csvExportOptions.selectQuery` property. `SQL Server instances:` You must specify one database to be exported, and the `fileType` must be `BAK`.',
      }),
    fileType: z
      .enum(['SQL_FILE_TYPE_UNSPECIFIED', 'SQL', 'CSV', 'BAK'])
      .exactOptional()
      .openapi({ description: 'The file type for the specified uri.' }),
    kind: z
      .string()
      .exactOptional()
      .openapi({ description: 'This is always `sql#exportContext`.' }),
    offload: z.boolean().exactOptional().openapi({ description: 'Option for export offload.' }),
    sqlExportOptions: z
      .object({
        mysqlExportOptions: z
          .object({
            masterData: z
              .int32()
              .exactOptional()
              .openapi({
                description:
                  'Option to include SQL statement required to set up replication. If set to `1`, the dump file includes a CHANGE MASTER TO statement with the binary log coordinates, and --set-gtid-purged is set to ON. If set to `2`, the CHANGE MASTER TO statement is written as a SQL comment and has no effect. If set to any value other than `1`, --set-gtid-purged is set to OFF.',
              }),
          })
          .exactOptional()
          .openapi({ description: 'Options for exporting from MySQL.', required: [] }),
        schemaOnly: z.boolean().exactOptional().openapi({ description: 'Export only schemas.' }),
        tables: z
          .array(z.string())
          .exactOptional()
          .openapi({
            description:
              'Tables to export, or that were exported, from the specified database. If you specify tables, specify one and only one database. For PostgreSQL instances, you can specify only one table.',
          }),
      })
      .exactOptional()
      .openapi({ description: 'Options for exporting data as SQL statements.', required: [] }),
    uri: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The path to the file in Google Cloud Storage where the export will be stored. The URI is in the form `gs://bucketName/fileName`. If the file already exists, the request succeeds, but the operation fails. If `fileType` is `SQL` and the filename ends with .gz, the contents are compressed.',
      }),
  })
  .openapi({ description: 'Database instance export context.', required: [] })
  .openapi('ExportContext')

const FailoverContextSchema = z
  .object({
    kind: z
      .string()
      .exactOptional()
      .openapi({ description: 'This is always `sql#failoverContext`.' }),
    settingsVersion: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "The current settings version of this instance. Request will be rejected if this version doesn't match the current settings version.",
      }),
  })
  .openapi({ description: 'Database instance failover context.', required: [] })
  .openapi('FailoverContext')

const FlagSchema = z
  .object({
    allowedIntValues: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description:
          'Use this field if only certain integers are accepted. Can be combined with min_value and max_value to add additional values.',
      }),
    allowedStringValues: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description: 'For `STRING` flags, a list of strings that the value can be set to.',
      }),
    appliesTo: z
      .array(
        z.enum([
          'SQL_DATABASE_VERSION_UNSPECIFIED',
          'MYSQL_5_1',
          'MYSQL_5_5',
          'MYSQL_5_6',
          'MYSQL_5_7',
          'SQLSERVER_2017_STANDARD',
          'SQLSERVER_2017_ENTERPRISE',
          'SQLSERVER_2017_EXPRESS',
          'SQLSERVER_2017_WEB',
          'POSTGRES_9_6',
          'POSTGRES_10',
          'POSTGRES_11',
          'POSTGRES_12',
          'POSTGRES_13',
          'POSTGRES_14',
          'MYSQL_8_0',
          'MYSQL_8_0_18',
          'MYSQL_8_0_26',
          'MYSQL_8_0_27',
          'MYSQL_8_0_28',
          'MYSQL_8_0_29',
          'MYSQL_8_0_30',
          'MYSQL_8_0_31',
          'MYSQL_8_0_32',
          'MYSQL_8_0_33',
          'MYSQL_8_0_34',
          'MYSQL_8_0_35',
          'MYSQL_8_0_36',
          'SQLSERVER_2019_STANDARD',
          'SQLSERVER_2019_ENTERPRISE',
          'SQLSERVER_2019_EXPRESS',
          'SQLSERVER_2019_WEB',
        ]),
      )
      .exactOptional()
      .openapi({
        description:
          'The database version this flag applies to. Can be MySQL instances: `MYSQL_8_0`, `MYSQL_8_0_18`, `MYSQL_8_0_26`, `MYSQL_5_7`, or `MYSQL_5_6`. PostgreSQL instances: `POSTGRES_9_6`, `POSTGRES_10`, `POSTGRES_11` or `POSTGRES_12`. SQL Server instances: `SQLSERVER_2017_STANDARD`, `SQLSERVER_2017_ENTERPRISE`, `SQLSERVER_2017_EXPRESS`, `SQLSERVER_2017_WEB`, `SQLSERVER_2019_STANDARD`, `SQLSERVER_2019_ENTERPRISE`, `SQLSERVER_2019_EXPRESS`, or `SQLSERVER_2019_WEB`. See [the complete list](/sql/docs/mysql/admin-api/rest/v1/SqlDatabaseVersion).',
      }),
    inBeta: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Whether or not the flag is considered in beta.' }),
    kind: z.string().exactOptional().openapi({ description: 'This is always `sql#flag`.' }),
    maxValue: z
      .string()
      .exactOptional()
      .openapi({ description: 'For `INTEGER` flags, the maximum allowed value.' }),
    minValue: z
      .string()
      .exactOptional()
      .openapi({ description: 'For `INTEGER` flags, the minimum allowed value.' }),
    name: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'This is the name of the flag. Flag names always use underscores, not hyphens, for example: `max_allowed_packet`',
      }),
    requiresRestart: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Indicates whether changing this flag will trigger a database restart. Only applicable to Second Generation instances.',
      }),
    type: z
      .enum([
        'SQL_FLAG_TYPE_UNSPECIFIED',
        'BOOLEAN',
        'STRING',
        'INTEGER',
        'NONE',
        'MYSQL_TIMEZONE_OFFSET',
        'FLOAT',
        'REPEATED_STRING',
      ])
      .exactOptional()
      .openapi({
        description:
          'The type of the flag. Flags are typed to being `BOOLEAN`, `STRING`, `INTEGER` or `NONE`. `NONE` is used for flags which do not take a value, such as `skip_grant_tables`.',
      }),
  })
  .openapi({ description: 'A flag resource.', required: [] })
  .openapi('Flag')

const FlagsListResponseSchema = z
  .object({
    items: z.array(FlagSchema).exactOptional().openapi({ description: 'List of flags.' }),
    kind: z.string().exactOptional().openapi({ description: 'This is always `sql#flagsList`.' }),
  })
  .openapi({ description: 'Flags list response.', required: [] })
  .openapi('FlagsListResponse')

const GenerateEphemeralCertRequestSchema = z
  .object({
    access_token: z
      .string()
      .exactOptional()
      .openapi({ description: 'Optional. Access token to include in the signed certificate.' }),
    public_key: z
      .string()
      .exactOptional()
      .openapi({ description: 'PEM encoded public key to include in the signed certificate.' }),
    readTime: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Optional. Optional snapshot read timestamp to trade freshness for performance.',
      }),
    validDuration: z
      .string()
      .exactOptional()
      .openapi({ description: 'Optional. If set, it will contain the cert valid duration.' }),
  })
  .openapi({ description: 'Ephemeral certificate creation request.', required: [] })
  .openapi('GenerateEphemeralCertRequest')

const GenerateEphemeralCertResponseSchema = z
  .object({
    ephemeralCert: SslCertSchema.exactOptional().openapi({ description: 'Generated cert' }),
  })
  .openapi({ description: 'Ephemeral certificate creation request.', required: [] })
  .openapi('GenerateEphemeralCertResponse')

const ImportContextSchema = z
  .object({
    bakImportOptions: z
      .object({
        encryptionOptions: z
          .object({
            certPath: z
              .string()
              .exactOptional()
              .openapi({
                description:
                  'Path to the Certificate (.cer) in Cloud Storage, in the form `gs://bucketName/fileName`. The instance must have write permissions to the bucket and read access to the file.',
              }),
            pvkPassword: z
              .string()
              .exactOptional()
              .openapi({ description: 'Password that encrypts the private key' }),
            pvkPath: z
              .string()
              .exactOptional()
              .openapi({
                description:
                  'Path to the Certificate Private Key (.pvk) in Cloud Storage, in the form `gs://bucketName/fileName`. The instance must have write permissions to the bucket and read access to the file.',
              }),
          })
          .exactOptional()
          .openapi({ required: [] }),
        striped: z
          .boolean()
          .exactOptional()
          .openapi({
            description:
              'Whether or not the backup set being restored is striped. Applies only to Cloud SQL for SQL Server.',
          }),
      })
      .exactOptional()
      .openapi({
        description: 'Import parameters specific to SQL Server .BAK files',
        required: [],
      }),
    csvImportOptions: z
      .object({
        columns: z
          .array(z.string())
          .exactOptional()
          .openapi({
            description:
              'The columns to which CSV data is imported. If not specified, all columns of the database table are loaded with CSV data.',
          }),
        escapeCharacter: z
          .string()
          .exactOptional()
          .openapi({
            description:
              'Specifies the character that should appear before a data character that needs to be escaped.',
          }),
        fieldsTerminatedBy: z
          .string()
          .exactOptional()
          .openapi({
            description:
              'Specifies the character that separates columns within each row (line) of the file.',
          }),
        linesTerminatedBy: z
          .string()
          .exactOptional()
          .openapi({
            description:
              'This is used to separate lines. If a line does not contain all fields, the rest of the columns are set to their default values.',
          }),
        quoteCharacter: z
          .string()
          .exactOptional()
          .openapi({
            description: 'Specifies the quoting character to be used when a data value is quoted.',
          }),
        table: z
          .string()
          .exactOptional()
          .openapi({ description: 'The table to which CSV data is imported.' }),
      })
      .exactOptional()
      .openapi({ description: 'Options for importing data as CSV.', required: [] }),
    database: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The target database for the import. If `fileType` is `SQL`, this field is required only if the import file does not specify a database, and is overridden by any database specification in the import file. If `fileType` is `CSV`, one database must be specified.',
      }),
    fileType: z
      .enum(['SQL_FILE_TYPE_UNSPECIFIED', 'SQL', 'CSV', 'BAK'])
      .exactOptional()
      .openapi({
        description:
          'The file type for the specified uri. * `SQL`: The file contains SQL statements. * `CSV`: The file contains CSV data. * `BAK`: The file contains backup data for a SQL Server instance.',
      }),
    importUser: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The PostgreSQL user for this import operation. PostgreSQL instances only.',
      }),
    kind: z
      .string()
      .exactOptional()
      .openapi({ description: 'This is always `sql#importContext`.' }),
    uri: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Path to the import file in Cloud Storage, in the form `gs://bucketName/fileName`. Compressed gzip files (.gz) are supported when `fileType` is `SQL`. The instance must have write permissions to the bucket and read access to the file.',
      }),
  })
  .openapi({ description: 'Database instance import context.', required: [] })
  .openapi('ImportContext')

const InstancesCloneRequestSchema = z
  .object({
    cloneContext: CloneContextSchema.exactOptional().openapi({
      description: 'Contains details about the clone operation.',
    }),
  })
  .openapi({ description: 'Database instance clone request.', required: [] })
  .openapi('InstancesCloneRequest')

const InstancesDemoteMasterRequestSchema = z
  .object({
    demoteMasterContext: DemoteMasterContextSchema.exactOptional().openapi({
      description: 'Contains details about the demoteMaster operation.',
    }),
  })
  .openapi({ description: 'Database demote primary instance request.', required: [] })
  .openapi('InstancesDemoteMasterRequest')

const InstancesExportRequestSchema = z
  .object({
    exportContext: ExportContextSchema.exactOptional().openapi({
      description: 'Contains details about the export operation.',
    }),
  })
  .openapi({ description: 'Database instance export request.', required: [] })
  .openapi('InstancesExportRequest')

const InstancesFailoverRequestSchema = z
  .object({
    failoverContext: FailoverContextSchema.exactOptional().openapi({
      description: 'Failover Context.',
    }),
  })
  .openapi({ description: 'Instance failover request.', required: [] })
  .openapi('InstancesFailoverRequest')

const InstancesImportRequestSchema = z
  .object({
    importContext: ImportContextSchema.exactOptional().openapi({
      description: 'Contains details about the import operation.',
    }),
  })
  .openapi({ description: 'Database instance import request.', required: [] })
  .openapi('InstancesImportRequest')

const InstancesListResponseSchema = z
  .object({
    items: z
      .array(DatabaseInstanceSchema)
      .exactOptional()
      .openapi({ description: 'List of database instance resources.' }),
    kind: z
      .string()
      .exactOptional()
      .openapi({ description: 'This is always `sql#instancesList`.' }),
    nextPageToken: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The continuation token, used to page through large result sets. Provide this value in a subsequent request to return the next page of results.',
      }),
    warnings: z
      .array(ApiWarningSchema)
      .exactOptional()
      .openapi({ description: 'List of warnings that occurred while handling the request.' }),
  })
  .openapi({ description: 'Database instances list response.', required: [] })
  .openapi('InstancesListResponse')

const InstancesListServerCasResponseSchema = z
  .object({
    activeVersion: z.string().exactOptional(),
    certs: z
      .array(SslCertSchema)
      .exactOptional()
      .openapi({ description: 'List of server CA certificates for the instance.' }),
    kind: z
      .string()
      .exactOptional()
      .openapi({ description: 'This is always `sql#instancesListServerCas`.' }),
  })
  .openapi({ description: 'Instances ListServerCas response.', required: [] })
  .openapi('InstancesListServerCasResponse')

const RestoreBackupContextSchema = z
  .object({
    backupRunId: z
      .string()
      .exactOptional()
      .openapi({ description: 'The ID of the backup run to restore from.' }),
    instanceId: z
      .string()
      .exactOptional()
      .openapi({ description: 'The ID of the instance that the backup was taken from.' }),
    kind: z
      .string()
      .exactOptional()
      .openapi({ description: 'This is always `sql#restoreBackupContext`.' }),
    project: z
      .string()
      .exactOptional()
      .openapi({ description: 'The full project ID of the source instance.' }),
  })
  .openapi({
    description:
      'Database instance restore from backup context. Backup context contains source instance id and project id.',
    required: [],
  })
  .openapi('RestoreBackupContext')

const InstancesRestoreBackupRequestSchema = z
  .object({
    restoreBackupContext: RestoreBackupContextSchema.exactOptional().openapi({
      description: 'Parameters required to perform the restore backup operation.',
    }),
  })
  .openapi({ description: 'Database instance restore backup request.', required: [] })
  .openapi('InstancesRestoreBackupRequest')

const RotateServerCaContextSchema = z
  .object({
    kind: z
      .string()
      .exactOptional()
      .openapi({ description: 'This is always `sql#rotateServerCaContext`.' }),
    nextVersion: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The fingerprint of the next version to be rotated to. If left unspecified, will be rotated to the most recently added server CA version.',
      }),
  })
  .openapi({ description: 'Instance rotate server CA context.', required: [] })
  .openapi('RotateServerCaContext')

const InstancesRotateServerCaRequestSchema = z
  .object({
    rotateServerCaContext: RotateServerCaContextSchema.exactOptional().openapi({
      description: 'Contains details about the rotate server CA operation.',
    }),
  })
  .openapi({ description: 'Rotate Server CA request.', required: [] })
  .openapi('InstancesRotateServerCaRequest')

const TruncateLogContextSchema = z
  .object({
    kind: z
      .string()
      .exactOptional()
      .openapi({ description: 'This is always `sql#truncateLogContext`.' }),
    logType: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The type of log to truncate. Valid values are `MYSQL_GENERAL_TABLE` and `MYSQL_SLOW_TABLE`.',
      }),
  })
  .openapi({ description: 'Database Instance truncate log context.', required: [] })
  .openapi('TruncateLogContext')

const InstancesTruncateLogRequestSchema = z
  .object({
    truncateLogContext: TruncateLogContextSchema.exactOptional().openapi({
      description: 'Contains details about the truncate log operation.',
    }),
  })
  .openapi({ description: 'Instance truncate log request.', required: [] })
  .openapi('InstancesTruncateLogRequest')

const SyncFlagsSchema = z
  .object({
    name: z.string().exactOptional().openapi({ description: 'The name of the flag.' }),
    value: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "The value of the flag. This field must be omitted if the flag doesn't take a value.",
      }),
  })
  .openapi({
    description:
      'Initial sync flags for certain Cloud SQL APIs. Currently used for the MySQL external server initial dump.',
    required: [],
  })
  .openapi('SyncFlags')

const MySqlSyncConfigSchema = z
  .object({
    initialSyncFlags: z
      .array(SyncFlagsSchema)
      .exactOptional()
      .openapi({ description: 'Flags to use for the initial dump.' }),
  })
  .openapi({ description: 'MySQL-specific external server sync settings.', required: [] })
  .openapi('MySqlSyncConfig')

const OperationErrorsSchema = z
  .object({
    errors: z
      .array(OperationErrorSchema)
      .exactOptional()
      .openapi({ description: 'The list of errors encountered while processing this operation.' }),
    kind: z
      .string()
      .exactOptional()
      .openapi({ description: 'This is always `sql#operationErrors`.' }),
  })
  .openapi({ description: 'Database instance operation errors list wrapper.', required: [] })
  .openapi('OperationErrors')

const OperationSchema = z
  .object({
    backupContext: BackupContextSchema.exactOptional().openapi({
      description: 'The context for backup operation, if applicable.',
    }),
    endTime: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The time this operation finished in UTC timezone in [RFC 3339](https://tools.ietf.org/html/rfc3339) format, for example `2012-11-15T16:19:00.094Z`.',
      }),
    error: OperationErrorsSchema.exactOptional().openapi({
      description:
        'If errors occurred during processing of this operation, this field will be populated.',
    }),
    exportContext: ExportContextSchema.exactOptional().openapi({
      description: 'The context for export operation, if applicable.',
    }),
    importContext: ImportContextSchema.exactOptional().openapi({
      description: 'The context for import operation, if applicable.',
    }),
    insertTime: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The time this operation was enqueued in UTC timezone in [RFC 3339](https://tools.ietf.org/html/rfc3339) format, for example `2012-11-15T16:19:00.094Z`.',
      }),
    kind: z.string().exactOptional().openapi({ description: 'This is always `sql#operation`.' }),
    name: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'An identifier that uniquely identifies the operation. You can use this identifier to retrieve the Operations resource that has information about the operation.',
      }),
    operationType: z
      .enum([
        'SQL_OPERATION_TYPE_UNSPECIFIED',
        'IMPORT',
        'EXPORT',
        'CREATE',
        'UPDATE',
        'DELETE',
        'RESTART',
        'BACKUP',
        'SNAPSHOT',
        'BACKUP_VOLUME',
        'DELETE_VOLUME',
        'RESTORE_VOLUME',
        'INJECT_USER',
        'CLONE',
        'STOP_REPLICA',
        'START_REPLICA',
        'PROMOTE_REPLICA',
        'CREATE_REPLICA',
        'CREATE_USER',
        'DELETE_USER',
        'UPDATE_USER',
        'CREATE_DATABASE',
        'DELETE_DATABASE',
        'UPDATE_DATABASE',
        'FAILOVER',
        'DELETE_BACKUP',
        'RECREATE_REPLICA',
        'TRUNCATE_LOG',
        'DEMOTE_MASTER',
        'MAINTENANCE',
        'ENABLE_PRIVATE_IP',
        'DEFER_MAINTENANCE',
        'CREATE_CLONE',
        'RESCHEDULE_MAINTENANCE',
        'START_EXTERNAL_SYNC',
        'LOG_CLEANUP',
        'AUTO_RESTART',
        'REENCRYPT',
      ])
      .exactOptional()
      .openapi({
        description:
          'The type of the operation. Valid values are: * `CREATE` * `DELETE` * `UPDATE` * `RESTART` * `IMPORT` * `EXPORT` * `BACKUP_VOLUME` * `RESTORE_VOLUME` * `CREATE_USER` * `DELETE_USER` * `CREATE_DATABASE` * `DELETE_DATABASE`',
      }),
    selfLink: z.string().exactOptional().openapi({ description: 'The URI of this resource.' }),
    startTime: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The time this operation actually started in UTC timezone in [RFC 3339](https://tools.ietf.org/html/rfc3339) format, for example `2012-11-15T16:19:00.094Z`.',
      }),
    status: z
      .enum(['SQL_OPERATION_STATUS_UNSPECIFIED', 'PENDING', 'RUNNING', 'DONE'])
      .exactOptional()
      .openapi({ description: 'The status of an operation.' }),
    targetId: z
      .string()
      .exactOptional()
      .openapi({ description: 'Name of the database instance related to this operation.' }),
    targetLink: z.string().exactOptional(),
    targetProject: z
      .string()
      .exactOptional()
      .openapi({ description: 'The project ID of the target instance related to this operation.' }),
    user: z
      .string()
      .exactOptional()
      .openapi({ description: 'The email address of the user who initiated this operation.' }),
  })
  .openapi({
    description:
      'An Operation resource. For successful operations that return an Operation resource, only the fields relevant to the operation are populated in the resource.',
    required: [],
  })
  .openapi('Operation')

const OperationMetadataSchema = z
  .object({
    apiVersion: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Output only. API version used to start the operation.',
        readOnly: true,
      }),
    cancelRequested: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Output only. Identifies whether the user has requested cancellation of the operation. Operations that have been cancelled successfully have Operation.error value with a google.rpc.Status.code of 1, corresponding to `Code.CANCELLED`.',
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
    statusDetail: z
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

const OperationsListResponseSchema = z
  .object({
    items: z
      .array(OperationSchema)
      .exactOptional()
      .openapi({ description: 'List of operation resources.' }),
    kind: z
      .string()
      .exactOptional()
      .openapi({ description: 'This is always `sql#operationsList`.' }),
    nextPageToken: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The continuation token, used to page through large result sets. Provide this value in a subsequent request to return the next page of results.',
      }),
  })
  .openapi({ description: 'Operations list response.', required: [] })
  .openapi('OperationsListResponse')

const PasswordStatusSchema = z
  .object({
    locked: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'If true, user does not have login privileges.' }),
    passwordExpirationTime: z
      .string()
      .exactOptional()
      .openapi({ description: 'The expiration time of the current password.' }),
  })
  .openapi({ description: 'Read-only password status.', required: [] })
  .openapi('PasswordStatus')

const PerformDiskShrinkContextSchema = z
  .object({
    targetSizeGb: z
      .string()
      .exactOptional()
      .openapi({ description: 'The target disk shrink size in GigaBytes.' }),
  })
  .openapi({ description: 'Perform disk shrink context.', required: [] })
  .openapi('PerformDiskShrinkContext')

const RescheduleSchema = z
  .object({
    rescheduleType: z
      .enum(['RESCHEDULE_TYPE_UNSPECIFIED', 'IMMEDIATE', 'NEXT_AVAILABLE_WINDOW', 'SPECIFIC_TIME'])
      .exactOptional()
      .openapi({ description: 'Required. The type of the reschedule.' }),
    scheduleTime: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Optional. Timestamp when the maintenance shall be rescheduled to if reschedule_type=SPECIFIC_TIME, in [RFC 3339](https://tools.ietf.org/html/rfc3339) format, for example `2012-11-15T16:19:00.094Z`.',
      }),
  })
  .openapi({ required: [] })
  .openapi('Reschedule')

const SqlExternalSyncSettingErrorSchema = z
  .object({
    detail: z
      .string()
      .exactOptional()
      .openapi({ description: 'Additional information about the error encountered.' }),
    kind: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Can be `sql#externalSyncSettingError` or `sql#externalSyncSettingWarning`.',
      }),
    type: z
      .enum([
        'SQL_EXTERNAL_SYNC_SETTING_ERROR_TYPE_UNSPECIFIED',
        'CONNECTION_FAILURE',
        'BINLOG_NOT_ENABLED',
        'INCOMPATIBLE_DATABASE_VERSION',
        'REPLICA_ALREADY_SETUP',
        'INSUFFICIENT_PRIVILEGE',
        'UNSUPPORTED_MIGRATION_TYPE',
        'NO_PGLOGICAL_INSTALLED',
        'PGLOGICAL_NODE_ALREADY_EXISTS',
        'INVALID_WAL_LEVEL',
        'INVALID_SHARED_PRELOAD_LIBRARY',
        'INSUFFICIENT_MAX_REPLICATION_SLOTS',
        'INSUFFICIENT_MAX_WAL_SENDERS',
        'INSUFFICIENT_MAX_WORKER_PROCESSES',
        'UNSUPPORTED_EXTENSIONS',
        'INVALID_RDS_LOGICAL_REPLICATION',
        'INVALID_LOGGING_SETUP',
        'INVALID_DB_PARAM',
        'UNSUPPORTED_GTID_MODE',
        'SQLSERVER_AGENT_NOT_RUNNING',
        'UNSUPPORTED_TABLE_DEFINITION',
        'UNSUPPORTED_DEFINER',
        'SQLSERVER_SERVERNAME_MISMATCH',
        'PRIMARY_ALREADY_SETUP',
        'UNSUPPORTED_BINLOG_FORMAT',
        'BINLOG_RETENTION_SETTING',
        'UNSUPPORTED_STORAGE_ENGINE',
        'LIMITED_SUPPORT_TABLES',
        'EXISTING_DATA_IN_REPLICA',
      ])
      .exactOptional()
      .openapi({ description: 'Identifies the specific error that occurred.' }),
  })
  .openapi({
    description: 'External primary instance migration setting error/warning.',
    required: [],
  })
  .openapi('SqlExternalSyncSettingError')

const SqlInstancesGetDiskShrinkConfigResponseSchema = z
  .object({
    kind: z
      .string()
      .exactOptional()
      .openapi({ description: 'This is always `sql#getDiskShrinkConfig`.' }),
    minimalTargetSizeGb: z
      .string()
      .exactOptional()
      .openapi({ description: 'The minimum size to which a disk can be shrunk in GigaBytes.' }),
  })
  .openapi({ description: 'Instance get disk shrink config response.', required: [] })
  .openapi('SqlInstancesGetDiskShrinkConfigResponse')

const SqlInstancesRescheduleMaintenanceRequestBodySchema = z
  .object({
    reschedule: RescheduleSchema.exactOptional().openapi({
      description: 'Required. The type of the reschedule the user wants.',
    }),
  })
  .openapi({ description: 'Reschedule options for maintenance windows.', required: [] })
  .openapi('SqlInstancesRescheduleMaintenanceRequestBody')

const SqlInstancesResetReplicaSizeRequestSchema = z
  .object({})
  .openapi({ description: 'Instance reset replica size request.' })
  .openapi('SqlInstancesResetReplicaSizeRequest')

const SqlInstancesStartExternalSyncRequestSchema = z
  .object({
    mysqlSyncConfig: MySqlSyncConfigSchema.exactOptional().openapi({
      description: 'MySQL-specific settings for start external sync.',
    }),
    skipVerification: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Whether to skip the verification step (VESS).' }),
    syncMode: z
      .enum(['EXTERNAL_SYNC_MODE_UNSPECIFIED', 'ONLINE', 'OFFLINE'])
      .exactOptional()
      .openapi({ description: 'External sync mode.' }),
  })
  .openapi({ required: [] })
  .openapi('SqlInstancesStartExternalSyncRequest')

const SqlInstancesVerifyExternalSyncSettingsRequestSchema = z
  .object({
    mysqlSyncConfig: MySqlSyncConfigSchema.exactOptional().openapi({
      description: 'Optional. MySQL-specific settings for start external sync.',
    }),
    syncMode: z
      .enum(['EXTERNAL_SYNC_MODE_UNSPECIFIED', 'ONLINE', 'OFFLINE'])
      .exactOptional()
      .openapi({ description: 'External sync mode' }),
    verifyConnectionOnly: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Flag to enable verifying connection only' }),
    verifyReplicationOnly: z
      .boolean()
      .exactOptional()
      .openapi({
        description: 'Optional. Flag to verify settings required by replication setup only',
      }),
  })
  .openapi({ required: [] })
  .openapi('SqlInstancesVerifyExternalSyncSettingsRequest')

const SqlInstancesVerifyExternalSyncSettingsResponseSchema = z
  .object({
    errors: z
      .array(SqlExternalSyncSettingErrorSchema)
      .exactOptional()
      .openapi({ description: 'List of migration violations.' }),
    kind: z
      .string()
      .exactOptional()
      .openapi({ description: 'This is always `sql#migrationSettingErrorList`.' }),
    warnings: z
      .array(SqlExternalSyncSettingErrorSchema)
      .exactOptional()
      .openapi({ description: 'List of migration warnings.' }),
  })
  .openapi({ description: 'Instance verify external sync settings response.', required: [] })
  .openapi('SqlInstancesVerifyExternalSyncSettingsResponse')

const SqlServerUserDetailsSchema = z
  .object({
    disabled: z.boolean().exactOptional().openapi({ description: 'If the user has been disabled' }),
    serverRoles: z
      .array(z.string())
      .exactOptional()
      .openapi({ description: 'The server roles for this user' }),
  })
  .openapi({ description: 'Represents a Sql Server user on the Cloud SQL instance.', required: [] })
  .openapi('SqlServerUserDetails')

const SslCertDetailSchema = z
  .object({
    certInfo: SslCertSchema.exactOptional().openapi({
      description: 'The public information about the cert.',
    }),
    certPrivateKey: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The private key for the client cert, in pem format. Keep private in order to protect your security.',
      }),
  })
  .openapi({ description: 'SslCertDetail.', required: [] })
  .openapi('SslCertDetail')

const SslCertsCreateEphemeralRequestSchema = z
  .object({
    access_token: z
      .string()
      .exactOptional()
      .openapi({ description: 'Access token to include in the signed certificate.' }),
    public_key: z
      .string()
      .exactOptional()
      .openapi({ description: 'PEM encoded public key to include in the signed certificate.' }),
  })
  .openapi({ description: 'SslCerts create ephemeral certificate request.', required: [] })
  .openapi('SslCertsCreateEphemeralRequest')

const SslCertsInsertRequestSchema = z
  .object({
    commonName: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'User supplied name. Must be a distinct name from the other certificates for this instance.',
      }),
  })
  .openapi({ description: 'SslCerts insert request.', required: [] })
  .openapi('SslCertsInsertRequest')

const SslCertsInsertResponseSchema = z
  .object({
    clientCert: SslCertDetailSchema.exactOptional().openapi({
      description: 'The new client certificate and private key.',
    }),
    kind: z
      .string()
      .exactOptional()
      .openapi({ description: 'This is always `sql#sslCertsInsert`.' }),
    operation: OperationSchema.exactOptional().openapi({
      description: 'The operation to track the ssl certs insert request.',
    }),
    serverCaCert: SslCertSchema.exactOptional().openapi({
      description:
        "The server Certificate Authority's certificate. If this is missing you can force a new one to be generated by calling resetSslConfig method on instances resource.",
    }),
  })
  .openapi({ description: 'SslCert insert response.', required: [] })
  .openapi('SslCertsInsertResponse')

const SslCertsListResponseSchema = z
  .object({
    items: z
      .array(SslCertSchema)
      .exactOptional()
      .openapi({ description: 'List of client certificates for the instance.' }),
    kind: z.string().exactOptional().openapi({ description: 'This is always `sql#sslCertsList`.' }),
  })
  .openapi({ description: 'SslCerts list response.', required: [] })
  .openapi('SslCertsListResponse')

const TierSchema = z
  .object({
    DiskQuota: z
      .string()
      .exactOptional()
      .openapi({ description: 'The maximum disk size of this tier in bytes.' }),
    RAM: z
      .string()
      .exactOptional()
      .openapi({ description: 'The maximum RAM usage of this tier in bytes.' }),
    kind: z.string().exactOptional().openapi({ description: 'This is always `sql#tier`.' }),
    region: z
      .array(z.string())
      .exactOptional()
      .openapi({ description: 'The applicable regions for this tier.' }),
    tier: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'An identifier for the machine type, for example, `db-custom-1-3840`. For related information, see [Pricing](/sql/pricing).',
      }),
  })
  .openapi({ description: 'A Google Cloud SQL service tier resource.', required: [] })
  .openapi('Tier')

const TiersListResponseSchema = z
  .object({
    items: z.array(TierSchema).exactOptional().openapi({ description: 'List of tiers.' }),
    kind: z.string().exactOptional().openapi({ description: 'This is always `sql#tiersList`.' }),
  })
  .openapi({ description: 'Tiers list response.', required: [] })
  .openapi('TiersListResponse')

const UserPasswordValidationPolicySchema = z
  .object({
    allowedFailedAttempts: z
      .int32()
      .exactOptional()
      .openapi({ description: 'Number of failed login attempts allowed before user get locked.' }),
    enableFailedAttemptsCheck: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'If true, failed login attempts check will be enabled.' }),
    enablePasswordVerification: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'If true, the user must specify the current password before changing the password. This flag is supported only for MySQL.',
      }),
    passwordExpirationDuration: z
      .string()
      .exactOptional()
      .openapi({ description: 'Expiration duration after password is updated.' }),
    status: PasswordStatusSchema.exactOptional().openapi({
      description: 'Output only. Read-only password status.',
      readOnly: true,
    }),
  })
  .openapi({ description: 'User level password validation policy.', required: [] })
  .openapi('UserPasswordValidationPolicy')

const UserSchema = z
  .object({
    dualPasswordType: z
      .enum([
        'DUAL_PASSWORD_TYPE_UNSPECIFIED',
        'NO_MODIFY_DUAL_PASSWORD',
        'NO_DUAL_PASSWORD',
        'DUAL_PASSWORD',
      ])
      .exactOptional()
      .openapi({ description: 'Dual password status for the user.' }),
    etag: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'This field is deprecated and will be removed from a future version of the API.',
      }),
    host: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "Optional. The host from which the user can connect. For `insert` operations, host defaults to an empty string. For `update` operations, host is specified as part of the request URL. The host name cannot be updated after insertion. For a MySQL instance, it's required; for a PostgreSQL or SQL Server instance, it's optional.",
      }),
    instance: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The name of the Cloud SQL instance. This does not include the project ID. Can be omitted for *update* because it is already specified on the URL.',
      }),
    kind: z.string().exactOptional().openapi({ description: 'This is always `sql#user`.' }),
    name: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The name of the user in the Cloud SQL instance. Can be omitted for `update` because it is already specified in the URL.',
      }),
    password: z.string().exactOptional().openapi({ description: 'The password for the user.' }),
    passwordPolicy: UserPasswordValidationPolicySchema.exactOptional().openapi({
      description: 'User level password validation policy.',
    }),
    project: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The project ID of the project containing the Cloud SQL database. The Google apps domain is prefixed if applicable. Can be omitted for *update* because it is already specified on the URL.',
      }),
    sqlserverUserDetails: SqlServerUserDetailsSchema.exactOptional(),
    type: z
      .enum(['BUILT_IN', 'CLOUD_IAM_USER', 'CLOUD_IAM_SERVICE_ACCOUNT'])
      .exactOptional()
      .openapi({
        description:
          "The user type. It determines the method to authenticate the user during login. The default is the database's built-in user type.",
      }),
  })
  .openapi({ description: 'A Cloud SQL user resource.', required: [] })
  .openapi('User')

const UsersListResponseSchema = z
  .object({
    items: z
      .array(UserSchema)
      .exactOptional()
      .openapi({ description: 'List of user resources in the instance.' }),
    kind: z.string().exactOptional().openapi({ description: 'This is always *sql#usersList*.' }),
    nextPageToken: z.string().exactOptional().openapi({ description: 'Unused.' }),
  })
  .openapi({ description: 'User list response.', required: [] })
  .openapi('UsersListResponse')

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
        'https://www.googleapis.com/auth/sqlservice.admin':
          'Manage your Google SQL Service instances',
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
        'https://www.googleapis.com/auth/sqlservice.admin':
          'Manage your Google SQL Service instances',
      },
      tokenUrl: 'https://accounts.google.com/o/oauth2/token',
    },
  },
  type: 'oauth2',
}

export const getSqlV1beta4FlagsRoute = createRoute({
  method: 'get',
  path: '/sql/v1beta4/flags',
  tags: ['flags'],
  description: 'Lists all available database flags for Cloud SQL instances.',
  operationId: 'sql.flags.list',
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
      databaseVersion: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Database type and version you want to retrieve flags for. By default, this method returns flags for all database types and versions.',
            in: 'query',
            name: 'databaseVersion',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: FlagsListResponseSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/sqlservice.admin'],
      Oauth2c: ['https://www.googleapis.com/auth/sqlservice.admin'],
    },
  ],
})

export const getSqlV1beta4ProjectsProjectInstancesRoute = createRoute({
  method: 'get',
  path: '/sql/v1beta4/projects/{project}/instances',
  tags: ['instances'],
  description: 'Lists instances under a given project.',
  operationId: 'sql.instances.list',
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
              "A filter expression that filters resources listed in the response. The expression is in the form of field:value. For example, 'instanceType:CLOUD_SQL_INSTANCE'. Fields can be nested as needed as per their JSON representation, such as 'settings.userLabels.auto_start:true'. Multiple filter queries are space-separated. For example. 'state:RUNNABLE instanceType:CLOUD_SQL_INSTANCE'. By default, each expression is an AND expression. However, you can include AND and OR expressions explicitly.",
            in: 'query',
            name: 'filter',
            schema: { type: 'string' },
            required: false,
          },
        }),
      maxResults: z
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
              'The maximum number of instances to return. The service may return fewer than this value. If unspecified, at most 500 instances are returned. The maximum value is 1000; values above 1000 are coerced to 1000.',
            in: 'query',
            name: 'maxResults',
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
              'A previously-returned page token representing part of the larger set of results to view.',
            in: 'query',
            name: 'pageToken',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
    params: z.object({
      project: z
        .string()
        .openapi({
          param: {
            description: 'Project ID of the project for which to list Cloud SQL instances.',
            in: 'path',
            name: 'project',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: InstancesListResponseSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/sqlservice.admin'],
      Oauth2c: ['https://www.googleapis.com/auth/sqlservice.admin'],
    },
  ],
})

export const postSqlV1beta4ProjectsProjectInstancesRoute = createRoute({
  method: 'post',
  path: '/sql/v1beta4/projects/{project}/instances',
  tags: ['instances'],
  description: 'Creates a new Cloud SQL instance.',
  operationId: 'sql.instances.insert',
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
      project: z
        .string()
        .openapi({
          param: {
            description:
              'Project ID of the project to which the newly created Cloud SQL instances should belong.',
            in: 'path',
            name: 'project',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: DatabaseInstanceSchema } } },
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
    {
      Oauth2: ['https://www.googleapis.com/auth/sqlservice.admin'],
      Oauth2c: ['https://www.googleapis.com/auth/sqlservice.admin'],
    },
  ],
})

export const getSqlV1beta4ProjectsProjectInstancesInstanceRoute = createRoute({
  method: 'get',
  path: '/sql/v1beta4/projects/{project}/instances/{instance}',
  tags: ['instances'],
  description: 'Retrieves a resource containing information about a Cloud SQL instance.',
  operationId: 'sql.instances.get',
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
      project: z
        .string()
        .openapi({
          param: {
            description: 'Project ID of the project that contains the instance.',
            in: 'path',
            name: 'project',
            required: true,
            schema: { type: 'string' },
          },
        }),
      instance: z
        .string()
        .openapi({
          param: {
            description: 'Database instance ID. This does not include the project ID.',
            in: 'path',
            name: 'instance',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: DatabaseInstanceSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/sqlservice.admin'],
      Oauth2c: ['https://www.googleapis.com/auth/sqlservice.admin'],
    },
  ],
})

export const putSqlV1beta4ProjectsProjectInstancesInstanceRoute = createRoute({
  method: 'put',
  path: '/sql/v1beta4/projects/{project}/instances/{instance}',
  tags: ['instances'],
  description:
    'Updates settings of a Cloud SQL instance. Using this operation might cause your instance to restart.',
  operationId: 'sql.instances.update',
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
      project: z
        .string()
        .openapi({
          param: {
            description: 'Project ID of the project that contains the instance.',
            in: 'path',
            name: 'project',
            required: true,
            schema: { type: 'string' },
          },
        }),
      instance: z
        .string()
        .openapi({
          param: {
            description: 'Cloud SQL instance ID. This does not include the project ID.',
            in: 'path',
            name: 'instance',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: DatabaseInstanceSchema } } },
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
    {
      Oauth2: ['https://www.googleapis.com/auth/sqlservice.admin'],
      Oauth2c: ['https://www.googleapis.com/auth/sqlservice.admin'],
    },
  ],
})

export const deleteSqlV1beta4ProjectsProjectInstancesInstanceRoute = createRoute({
  method: 'delete',
  path: '/sql/v1beta4/projects/{project}/instances/{instance}',
  tags: ['instances'],
  description: 'Deletes a Cloud SQL instance.',
  operationId: 'sql.instances.delete',
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
      project: z
        .string()
        .openapi({
          param: {
            description: 'Project ID of the project that contains the instance to be deleted.',
            in: 'path',
            name: 'project',
            required: true,
            schema: { type: 'string' },
          },
        }),
      instance: z
        .string()
        .openapi({
          param: {
            description: 'Cloud SQL instance ID. This does not include the project ID.',
            in: 'path',
            name: 'instance',
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
    {
      Oauth2: ['https://www.googleapis.com/auth/sqlservice.admin'],
      Oauth2c: ['https://www.googleapis.com/auth/sqlservice.admin'],
    },
  ],
})

export const patchSqlV1beta4ProjectsProjectInstancesInstanceRoute = createRoute({
  method: 'patch',
  path: '/sql/v1beta4/projects/{project}/instances/{instance}',
  tags: ['instances'],
  description:
    'Partially updates settings of a Cloud SQL instance by merging the request with the current configuration. This method supports patch semantics.',
  operationId: 'sql.instances.patch',
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
      project: z
        .string()
        .openapi({
          param: {
            description: 'Project ID of the project that contains the instance.',
            in: 'path',
            name: 'project',
            required: true,
            schema: { type: 'string' },
          },
        }),
      instance: z
        .string()
        .openapi({
          param: {
            description: 'Cloud SQL instance ID. This does not include the project ID.',
            in: 'path',
            name: 'instance',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: DatabaseInstanceSchema } } },
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
    {
      Oauth2: ['https://www.googleapis.com/auth/sqlservice.admin'],
      Oauth2c: ['https://www.googleapis.com/auth/sqlservice.admin'],
    },
  ],
})

export const postSqlV1beta4ProjectsProjectInstancesInstanceAddServerCaRoute = createRoute({
  method: 'post',
  path: '/sql/v1beta4/projects/{project}/instances/{instance}/addServerCa',
  tags: ['instances'],
  description:
    'Add a new trusted Certificate Authority (CA) version for the specified instance. Required to prepare for a certificate rotation. If a CA version was previously added but never used in a certificate rotation, this operation replaces that version. There cannot be more than one CA version waiting to be rotated in.',
  operationId: 'sql.instances.addServerCa',
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
      project: z
        .string()
        .openapi({
          param: {
            description: 'Project ID of the project that contains the instance.',
            in: 'path',
            name: 'project',
            required: true,
            schema: { type: 'string' },
          },
        }),
      instance: z
        .string()
        .openapi({
          param: {
            description: 'Cloud SQL instance ID. This does not include the project ID.',
            in: 'path',
            name: 'instance',
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
    {
      Oauth2: ['https://www.googleapis.com/auth/sqlservice.admin'],
      Oauth2c: ['https://www.googleapis.com/auth/sqlservice.admin'],
    },
  ],
})

export const getSqlV1beta4ProjectsProjectInstancesInstanceBackupRunsRoute = createRoute({
  method: 'get',
  path: '/sql/v1beta4/projects/{project}/instances/{instance}/backupRuns',
  tags: ['backupRuns'],
  description:
    'Lists all backup runs associated with the project or a given instance and configuration in the reverse chronological order of the backup initiation time.',
  operationId: 'sql.backupRuns.list',
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
      maxResults: z
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
            description: 'Maximum number of backup runs per response.',
            in: 'query',
            name: 'maxResults',
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
              'A previously-returned page token representing part of the larger set of results to view.',
            in: 'query',
            name: 'pageToken',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
    params: z.object({
      project: z
        .string()
        .openapi({
          param: {
            description: 'Project ID of the project that contains the instance.',
            in: 'path',
            name: 'project',
            required: true,
            schema: { type: 'string' },
          },
        }),
      instance: z
        .string()
        .openapi({
          param: {
            description:
              'Cloud SQL instance ID, or "-" for all instances. This does not include the project ID.',
            in: 'path',
            name: 'instance',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: BackupRunsListResponseSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/sqlservice.admin'],
      Oauth2c: ['https://www.googleapis.com/auth/sqlservice.admin'],
    },
  ],
})

export const postSqlV1beta4ProjectsProjectInstancesInstanceBackupRunsRoute = createRoute({
  method: 'post',
  path: '/sql/v1beta4/projects/{project}/instances/{instance}/backupRuns',
  tags: ['backupRuns'],
  description: 'Creates a new backup run on demand.',
  operationId: 'sql.backupRuns.insert',
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
      project: z
        .string()
        .openapi({
          param: {
            description: 'Project ID of the project that contains the instance.',
            in: 'path',
            name: 'project',
            required: true,
            schema: { type: 'string' },
          },
        }),
      instance: z
        .string()
        .openapi({
          param: {
            description: 'Cloud SQL instance ID. This does not include the project ID.',
            in: 'path',
            name: 'instance',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: BackupRunSchema } } },
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
    {
      Oauth2: ['https://www.googleapis.com/auth/sqlservice.admin'],
      Oauth2c: ['https://www.googleapis.com/auth/sqlservice.admin'],
    },
  ],
})

export const getSqlV1beta4ProjectsProjectInstancesInstanceBackupRunsIdRoute = createRoute({
  method: 'get',
  path: '/sql/v1beta4/projects/{project}/instances/{instance}/backupRuns/{id}',
  tags: ['backupRuns'],
  description: 'Retrieves a resource containing information about a backup run.',
  operationId: 'sql.backupRuns.get',
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
      project: z
        .string()
        .openapi({
          param: {
            description: 'Project ID of the project that contains the instance.',
            in: 'path',
            name: 'project',
            required: true,
            schema: { type: 'string' },
          },
        }),
      instance: z
        .string()
        .openapi({
          param: {
            description: 'Cloud SQL instance ID. This does not include the project ID.',
            in: 'path',
            name: 'instance',
            required: true,
            schema: { type: 'string' },
          },
        }),
      id: z
        .string()
        .openapi({
          param: {
            description: 'The ID of this backup run.',
            in: 'path',
            name: 'id',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: BackupRunSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/sqlservice.admin'],
      Oauth2c: ['https://www.googleapis.com/auth/sqlservice.admin'],
    },
  ],
})

export const deleteSqlV1beta4ProjectsProjectInstancesInstanceBackupRunsIdRoute = createRoute({
  method: 'delete',
  path: '/sql/v1beta4/projects/{project}/instances/{instance}/backupRuns/{id}',
  tags: ['backupRuns'],
  description: 'Deletes the backup taken by a backup run.',
  operationId: 'sql.backupRuns.delete',
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
      project: z
        .string()
        .openapi({
          param: {
            description: 'Project ID of the project that contains the instance.',
            in: 'path',
            name: 'project',
            required: true,
            schema: { type: 'string' },
          },
        }),
      instance: z
        .string()
        .openapi({
          param: {
            description: 'Cloud SQL instance ID. This does not include the project ID.',
            in: 'path',
            name: 'instance',
            required: true,
            schema: { type: 'string' },
          },
        }),
      id: z
        .string()
        .openapi({
          param: {
            description:
              'The ID of the backup run to delete. To find a backup run ID, use the [list](https://cloud.google.com/sql/docs/mysql/admin-api/rest/v1beta4/backupRuns/list) method.',
            in: 'path',
            name: 'id',
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
    {
      Oauth2: ['https://www.googleapis.com/auth/sqlservice.admin'],
      Oauth2c: ['https://www.googleapis.com/auth/sqlservice.admin'],
    },
  ],
})

export const postSqlV1beta4ProjectsProjectInstancesInstanceCloneRoute = createRoute({
  method: 'post',
  path: '/sql/v1beta4/projects/{project}/instances/{instance}/clone',
  tags: ['instances'],
  description:
    'Creates a Cloud SQL instance as a clone of the source instance. Using this operation might cause your instance to restart.',
  operationId: 'sql.instances.clone',
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
      project: z
        .string()
        .openapi({
          param: {
            description: 'Project ID of the source as well as the clone Cloud SQL instance.',
            in: 'path',
            name: 'project',
            required: true,
            schema: { type: 'string' },
          },
        }),
      instance: z
        .string()
        .openapi({
          param: {
            description:
              'The ID of the Cloud SQL instance to be cloned (source). This does not include the project ID.',
            in: 'path',
            name: 'instance',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: InstancesCloneRequestSchema } } },
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
    {
      Oauth2: ['https://www.googleapis.com/auth/sqlservice.admin'],
      Oauth2c: ['https://www.googleapis.com/auth/sqlservice.admin'],
    },
  ],
})

export const getSqlV1beta4ProjectsProjectInstancesInstanceConnectSettingsRoute = createRoute({
  method: 'get',
  path: '/sql/v1beta4/projects/{project}/instances/{instance}/connectSettings',
  tags: ['connect'],
  description: 'Retrieves connect settings about a Cloud SQL instance.',
  operationId: 'sql.connect.get',
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
      readTime: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Optional. Optional snapshot read timestamp to trade freshness for performance.',
            in: 'query',
            name: 'readTime',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
    params: z.object({
      project: z
        .string()
        .openapi({
          param: {
            description: 'Project ID of the project that contains the instance.',
            in: 'path',
            name: 'project',
            required: true,
            schema: { type: 'string' },
          },
        }),
      instance: z
        .string()
        .openapi({
          param: {
            description: 'Cloud SQL instance ID. This does not include the project ID.',
            in: 'path',
            name: 'instance',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: ConnectSettingsSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/sqlservice.admin'],
      Oauth2c: ['https://www.googleapis.com/auth/sqlservice.admin'],
    },
  ],
})

export const postSqlV1beta4ProjectsProjectInstancesInstanceCreateEphemeralRoute = createRoute({
  method: 'post',
  path: '/sql/v1beta4/projects/{project}/instances/{instance}/createEphemeral',
  tags: ['sslCerts'],
  description:
    'Generates a short-lived X509 certificate containing the provided public key and signed by a private key specific to the target instance. Users may use the certificate to authenticate as themselves when connecting to the database.',
  operationId: 'sql.sslCerts.createEphemeral',
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
      project: z
        .string()
        .openapi({
          param: {
            description: 'Project ID of the Cloud SQL project.',
            in: 'path',
            name: 'project',
            required: true,
            schema: { type: 'string' },
          },
        }),
      instance: z
        .string()
        .openapi({
          param: {
            description: 'Cloud SQL instance ID. This does not include the project ID.',
            in: 'path',
            name: 'instance',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: SslCertsCreateEphemeralRequestSchema } } },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: SslCertSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/sqlservice.admin'],
      Oauth2c: ['https://www.googleapis.com/auth/sqlservice.admin'],
    },
  ],
})

export const getSqlV1beta4ProjectsProjectInstancesInstanceDatabasesRoute = createRoute({
  method: 'get',
  path: '/sql/v1beta4/projects/{project}/instances/{instance}/databases',
  tags: ['databases'],
  description: 'Lists databases in the specified Cloud SQL instance.',
  operationId: 'sql.databases.list',
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
      project: z
        .string()
        .openapi({
          param: {
            description: 'Project ID of the project that contains the instance.',
            in: 'path',
            name: 'project',
            required: true,
            schema: { type: 'string' },
          },
        }),
      instance: z
        .string()
        .openapi({
          param: {
            description: 'Cloud SQL instance ID. This does not include the project ID.',
            in: 'path',
            name: 'instance',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: DatabasesListResponseSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/sqlservice.admin'],
      Oauth2c: ['https://www.googleapis.com/auth/sqlservice.admin'],
    },
  ],
})

export const postSqlV1beta4ProjectsProjectInstancesInstanceDatabasesRoute = createRoute({
  method: 'post',
  path: '/sql/v1beta4/projects/{project}/instances/{instance}/databases',
  tags: ['databases'],
  description:
    'Inserts a resource containing information about a database inside a Cloud SQL instance.',
  operationId: 'sql.databases.insert',
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
      project: z
        .string()
        .openapi({
          param: {
            description: 'Project ID of the project that contains the instance.',
            in: 'path',
            name: 'project',
            required: true,
            schema: { type: 'string' },
          },
        }),
      instance: z
        .string()
        .openapi({
          param: {
            description: 'Database instance ID. This does not include the project ID.',
            in: 'path',
            name: 'instance',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: DatabaseSchema } } },
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
    {
      Oauth2: ['https://www.googleapis.com/auth/sqlservice.admin'],
      Oauth2c: ['https://www.googleapis.com/auth/sqlservice.admin'],
    },
  ],
})

export const getSqlV1beta4ProjectsProjectInstancesInstanceDatabasesDatabaseRoute = createRoute({
  method: 'get',
  path: '/sql/v1beta4/projects/{project}/instances/{instance}/databases/{database}',
  tags: ['databases'],
  description:
    'Retrieves a resource containing information about a database inside a Cloud SQL instance.',
  operationId: 'sql.databases.get',
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
      project: z
        .string()
        .openapi({
          param: {
            description: 'Project ID of the project that contains the instance.',
            in: 'path',
            name: 'project',
            required: true,
            schema: { type: 'string' },
          },
        }),
      instance: z
        .string()
        .openapi({
          param: {
            description: 'Database instance ID. This does not include the project ID.',
            in: 'path',
            name: 'instance',
            required: true,
            schema: { type: 'string' },
          },
        }),
      database: z
        .string()
        .openapi({
          param: {
            description: 'Name of the database in the instance.',
            in: 'path',
            name: 'database',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: DatabaseSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/sqlservice.admin'],
      Oauth2c: ['https://www.googleapis.com/auth/sqlservice.admin'],
    },
  ],
})

export const putSqlV1beta4ProjectsProjectInstancesInstanceDatabasesDatabaseRoute = createRoute({
  method: 'put',
  path: '/sql/v1beta4/projects/{project}/instances/{instance}/databases/{database}',
  tags: ['databases'],
  description:
    'Updates a resource containing information about a database inside a Cloud SQL instance.',
  operationId: 'sql.databases.update',
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
      project: z
        .string()
        .openapi({
          param: {
            description: 'Project ID of the project that contains the instance.',
            in: 'path',
            name: 'project',
            required: true,
            schema: { type: 'string' },
          },
        }),
      instance: z
        .string()
        .openapi({
          param: {
            description: 'Database instance ID. This does not include the project ID.',
            in: 'path',
            name: 'instance',
            required: true,
            schema: { type: 'string' },
          },
        }),
      database: z
        .string()
        .openapi({
          param: {
            description: 'Name of the database to be updated in the instance.',
            in: 'path',
            name: 'database',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: DatabaseSchema } } },
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
    {
      Oauth2: ['https://www.googleapis.com/auth/sqlservice.admin'],
      Oauth2c: ['https://www.googleapis.com/auth/sqlservice.admin'],
    },
  ],
})

export const deleteSqlV1beta4ProjectsProjectInstancesInstanceDatabasesDatabaseRoute = createRoute({
  method: 'delete',
  path: '/sql/v1beta4/projects/{project}/instances/{instance}/databases/{database}',
  tags: ['databases'],
  description: 'Deletes a database from a Cloud SQL instance.',
  operationId: 'sql.databases.delete',
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
      project: z
        .string()
        .openapi({
          param: {
            description: 'Project ID of the project that contains the instance.',
            in: 'path',
            name: 'project',
            required: true,
            schema: { type: 'string' },
          },
        }),
      instance: z
        .string()
        .openapi({
          param: {
            description: 'Database instance ID. This does not include the project ID.',
            in: 'path',
            name: 'instance',
            required: true,
            schema: { type: 'string' },
          },
        }),
      database: z
        .string()
        .openapi({
          param: {
            description: 'Name of the database to be deleted in the instance.',
            in: 'path',
            name: 'database',
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
    {
      Oauth2: ['https://www.googleapis.com/auth/sqlservice.admin'],
      Oauth2c: ['https://www.googleapis.com/auth/sqlservice.admin'],
    },
  ],
})

export const patchSqlV1beta4ProjectsProjectInstancesInstanceDatabasesDatabaseRoute = createRoute({
  method: 'patch',
  path: '/sql/v1beta4/projects/{project}/instances/{instance}/databases/{database}',
  tags: ['databases'],
  description:
    'Partially updates a resource containing information about a database inside a Cloud SQL instance. This method supports patch semantics.',
  operationId: 'sql.databases.patch',
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
      project: z
        .string()
        .openapi({
          param: {
            description: 'Project ID of the project that contains the instance.',
            in: 'path',
            name: 'project',
            required: true,
            schema: { type: 'string' },
          },
        }),
      instance: z
        .string()
        .openapi({
          param: {
            description: 'Database instance ID. This does not include the project ID.',
            in: 'path',
            name: 'instance',
            required: true,
            schema: { type: 'string' },
          },
        }),
      database: z
        .string()
        .openapi({
          param: {
            description: 'Name of the database to be updated in the instance.',
            in: 'path',
            name: 'database',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: DatabaseSchema } } },
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
    {
      Oauth2: ['https://www.googleapis.com/auth/sqlservice.admin'],
      Oauth2c: ['https://www.googleapis.com/auth/sqlservice.admin'],
    },
  ],
})

export const postSqlV1beta4ProjectsProjectInstancesInstanceDemoteMasterRoute = createRoute({
  method: 'post',
  path: '/sql/v1beta4/projects/{project}/instances/{instance}/demoteMaster',
  tags: ['instances'],
  description:
    'Demotes the stand-alone instance to be a Cloud SQL read replica for an external database server.',
  operationId: 'sql.instances.demoteMaster',
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
      project: z
        .string()
        .openapi({
          param: {
            description: 'ID of the project that contains the instance.',
            in: 'path',
            name: 'project',
            required: true,
            schema: { type: 'string' },
          },
        }),
      instance: z
        .string()
        .openapi({
          param: {
            description: 'Cloud SQL instance name.',
            in: 'path',
            name: 'instance',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: InstancesDemoteMasterRequestSchema } } },
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
    {
      Oauth2: ['https://www.googleapis.com/auth/sqlservice.admin'],
      Oauth2c: ['https://www.googleapis.com/auth/sqlservice.admin'],
    },
  ],
})

export const postSqlV1beta4ProjectsProjectInstancesInstanceExportRoute = createRoute({
  method: 'post',
  path: '/sql/v1beta4/projects/{project}/instances/{instance}/export',
  tags: ['instances'],
  description:
    'Exports data from a Cloud SQL instance to a Cloud Storage bucket as a SQL dump or CSV file.',
  operationId: 'sql.instances.export',
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
      project: z
        .string()
        .openapi({
          param: {
            description: 'Project ID of the project that contains the instance to be exported.',
            in: 'path',
            name: 'project',
            required: true,
            schema: { type: 'string' },
          },
        }),
      instance: z
        .string()
        .openapi({
          param: {
            description: 'Cloud SQL instance ID. This does not include the project ID.',
            in: 'path',
            name: 'instance',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: InstancesExportRequestSchema } } },
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

export const postSqlV1beta4ProjectsProjectInstancesInstanceFailoverRoute = createRoute({
  method: 'post',
  path: '/sql/v1beta4/projects/{project}/instances/{instance}/failover',
  tags: ['instances'],
  description:
    'Initiates a manual failover of a high availability (HA) primary instance to a standby instance, which becomes the primary instance. Users are then rerouted to the new primary. For more information, see the [Overview of high availability](https://cloud.google.com/sql/docs/mysql/high-availability) page in the Cloud SQL documentation. If using Legacy HA (MySQL only), this causes the instance to failover to its failover replica instance.',
  operationId: 'sql.instances.failover',
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
      project: z
        .string()
        .openapi({
          param: {
            description: 'ID of the project that contains the read replica.',
            in: 'path',
            name: 'project',
            required: true,
            schema: { type: 'string' },
          },
        }),
      instance: z
        .string()
        .openapi({
          param: {
            description: 'Cloud SQL instance ID. This does not include the project ID.',
            in: 'path',
            name: 'instance',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: InstancesFailoverRequestSchema } } },
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
    {
      Oauth2: ['https://www.googleapis.com/auth/sqlservice.admin'],
      Oauth2c: ['https://www.googleapis.com/auth/sqlservice.admin'],
    },
  ],
})

export const getSqlV1beta4ProjectsProjectInstancesInstanceGetDiskShrinkConfigRoute = createRoute({
  method: 'get',
  path: '/sql/v1beta4/projects/{project}/instances/{instance}/getDiskShrinkConfig',
  tags: ['projects'],
  description: 'Get Disk Shrink Config for a given instance.',
  operationId: 'sql.projects.instances.getDiskShrinkConfig',
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
      project: z
        .string()
        .openapi({
          param: {
            description: 'Project ID of the project that contains the instance.',
            in: 'path',
            name: 'project',
            required: true,
            schema: { type: 'string' },
          },
        }),
      instance: z
        .string()
        .openapi({
          param: {
            description: 'Cloud SQL instance ID. This does not include the project ID.',
            in: 'path',
            name: 'instance',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: SqlInstancesGetDiskShrinkConfigResponseSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/sqlservice.admin'],
      Oauth2c: ['https://www.googleapis.com/auth/sqlservice.admin'],
    },
  ],
})

export const postSqlV1beta4ProjectsProjectInstancesInstanceImportRoute = createRoute({
  method: 'post',
  path: '/sql/v1beta4/projects/{project}/instances/{instance}/import',
  tags: ['instances'],
  description:
    'Imports data into a Cloud SQL instance from a SQL dump or CSV file in Cloud Storage.',
  operationId: 'sql.instances.import',
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
      project: z
        .string()
        .openapi({
          param: {
            description: 'Project ID of the project that contains the instance.',
            in: 'path',
            name: 'project',
            required: true,
            schema: { type: 'string' },
          },
        }),
      instance: z
        .string()
        .openapi({
          param: {
            description: 'Cloud SQL instance ID. This does not include the project ID.',
            in: 'path',
            name: 'instance',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: InstancesImportRequestSchema } } },
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

export const getSqlV1beta4ProjectsProjectInstancesInstanceListServerCasRoute = createRoute({
  method: 'get',
  path: '/sql/v1beta4/projects/{project}/instances/{instance}/listServerCas',
  tags: ['instances'],
  description:
    'Lists all of the trusted Certificate Authorities (CAs) for the specified instance. There can be up to three CAs listed: the CA that was used to sign the certificate that is currently in use, a CA that has been added but not yet used to sign a certificate, and a CA used to sign a certificate that has previously rotated out.',
  operationId: 'sql.instances.listServerCas',
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
      project: z
        .string()
        .openapi({
          param: {
            description: 'Project ID of the project that contains the instance.',
            in: 'path',
            name: 'project',
            required: true,
            schema: { type: 'string' },
          },
        }),
      instance: z
        .string()
        .openapi({
          param: {
            description: 'Cloud SQL instance ID. This does not include the project ID.',
            in: 'path',
            name: 'instance',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: InstancesListServerCasResponseSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/sqlservice.admin'],
      Oauth2c: ['https://www.googleapis.com/auth/sqlservice.admin'],
    },
  ],
})

export const postSqlV1beta4ProjectsProjectInstancesInstancePerformDiskShrinkRoute = createRoute({
  method: 'post',
  path: '/sql/v1beta4/projects/{project}/instances/{instance}/performDiskShrink',
  tags: ['projects'],
  description: 'Perform Disk Shrink on primary instance.',
  operationId: 'sql.projects.instances.performDiskShrink',
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
      project: z
        .string()
        .openapi({
          param: {
            description: 'Project ID of the project that contains the instance.',
            in: 'path',
            name: 'project',
            required: true,
            schema: { type: 'string' },
          },
        }),
      instance: z
        .string()
        .openapi({
          param: {
            description: 'Cloud SQL instance ID. This does not include the project ID.',
            in: 'path',
            name: 'instance',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: PerformDiskShrinkContextSchema } } },
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
    {
      Oauth2: ['https://www.googleapis.com/auth/sqlservice.admin'],
      Oauth2c: ['https://www.googleapis.com/auth/sqlservice.admin'],
    },
  ],
})

export const postSqlV1beta4ProjectsProjectInstancesInstancePromoteReplicaRoute = createRoute({
  method: 'post',
  path: '/sql/v1beta4/projects/{project}/instances/{instance}/promoteReplica',
  tags: ['instances'],
  description:
    'Promotes the read replica instance to be a stand-alone Cloud SQL instance. Using this operation might cause your instance to restart.',
  operationId: 'sql.instances.promoteReplica',
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
      project: z
        .string()
        .openapi({
          param: {
            description: 'ID of the project that contains the read replica.',
            in: 'path',
            name: 'project',
            required: true,
            schema: { type: 'string' },
          },
        }),
      instance: z
        .string()
        .openapi({
          param: {
            description: 'Cloud SQL read replica instance name.',
            in: 'path',
            name: 'instance',
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
    {
      Oauth2: ['https://www.googleapis.com/auth/sqlservice.admin'],
      Oauth2c: ['https://www.googleapis.com/auth/sqlservice.admin'],
    },
  ],
})

export const postSqlV1beta4ProjectsProjectInstancesInstanceRescheduleMaintenanceRoute = createRoute(
  {
    method: 'post',
    path: '/sql/v1beta4/projects/{project}/instances/{instance}/rescheduleMaintenance',
    tags: ['projects'],
    description: 'Reschedules the maintenance on the given instance.',
    operationId: 'sql.projects.instances.rescheduleMaintenance',
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
        project: z
          .string()
          .openapi({
            param: {
              description: 'ID of the project that contains the instance.',
              in: 'path',
              name: 'project',
              required: true,
              schema: { type: 'string' },
            },
          }),
        instance: z
          .string()
          .openapi({
            param: {
              description: 'Cloud SQL instance ID. This does not include the project ID.',
              in: 'path',
              name: 'instance',
              required: true,
              schema: { type: 'string' },
            },
          }),
      }),
      body: {
        content: {
          'application/json': { schema: SqlInstancesRescheduleMaintenanceRequestBodySchema },
        },
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
      {
        Oauth2: ['https://www.googleapis.com/auth/sqlservice.admin'],
        Oauth2c: ['https://www.googleapis.com/auth/sqlservice.admin'],
      },
    ],
  },
)

export const postSqlV1beta4ProjectsProjectInstancesInstanceResetReplicaSizeRoute = createRoute({
  method: 'post',
  path: '/sql/v1beta4/projects/{project}/instances/{instance}/resetReplicaSize',
  tags: ['projects'],
  description: 'Reset Replica Size to primary instance disk size.',
  operationId: 'sql.projects.instances.resetReplicaSize',
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
      project: z
        .string()
        .openapi({
          param: {
            description: 'ID of the project that contains the read replica.',
            in: 'path',
            name: 'project',
            required: true,
            schema: { type: 'string' },
          },
        }),
      instance: z
        .string()
        .openapi({
          param: {
            description: 'Cloud SQL read replica instance name.',
            in: 'path',
            name: 'instance',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: SqlInstancesResetReplicaSizeRequestSchema } },
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
    {
      Oauth2: ['https://www.googleapis.com/auth/sqlservice.admin'],
      Oauth2c: ['https://www.googleapis.com/auth/sqlservice.admin'],
    },
  ],
})

export const postSqlV1beta4ProjectsProjectInstancesInstanceResetSslConfigRoute = createRoute({
  method: 'post',
  path: '/sql/v1beta4/projects/{project}/instances/{instance}/resetSslConfig',
  tags: ['instances'],
  description:
    'Deletes all client certificates and generates a new server SSL certificate for the instance.',
  operationId: 'sql.instances.resetSslConfig',
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
      project: z
        .string()
        .openapi({
          param: {
            description: 'Project ID of the project that contains the instance.',
            in: 'path',
            name: 'project',
            required: true,
            schema: { type: 'string' },
          },
        }),
      instance: z
        .string()
        .openapi({
          param: {
            description: 'Cloud SQL instance ID. This does not include the project ID.',
            in: 'path',
            name: 'instance',
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
    {
      Oauth2: ['https://www.googleapis.com/auth/sqlservice.admin'],
      Oauth2c: ['https://www.googleapis.com/auth/sqlservice.admin'],
    },
  ],
})

export const postSqlV1beta4ProjectsProjectInstancesInstanceRestartRoute = createRoute({
  method: 'post',
  path: '/sql/v1beta4/projects/{project}/instances/{instance}/restart',
  tags: ['instances'],
  description: 'Restarts a Cloud SQL instance.',
  operationId: 'sql.instances.restart',
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
      project: z
        .string()
        .openapi({
          param: {
            description: 'Project ID of the project that contains the instance to be restarted.',
            in: 'path',
            name: 'project',
            required: true,
            schema: { type: 'string' },
          },
        }),
      instance: z
        .string()
        .openapi({
          param: {
            description: 'Cloud SQL instance ID. This does not include the project ID.',
            in: 'path',
            name: 'instance',
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
    {
      Oauth2: ['https://www.googleapis.com/auth/sqlservice.admin'],
      Oauth2c: ['https://www.googleapis.com/auth/sqlservice.admin'],
    },
  ],
})

export const postSqlV1beta4ProjectsProjectInstancesInstanceRestoreBackupRoute = createRoute({
  method: 'post',
  path: '/sql/v1beta4/projects/{project}/instances/{instance}/restoreBackup',
  tags: ['instances'],
  description:
    'Restores a backup of a Cloud SQL instance. Using this operation might cause your instance to restart.',
  operationId: 'sql.instances.restoreBackup',
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
      project: z
        .string()
        .openapi({
          param: {
            description: 'Project ID of the project that contains the instance.',
            in: 'path',
            name: 'project',
            required: true,
            schema: { type: 'string' },
          },
        }),
      instance: z
        .string()
        .openapi({
          param: {
            description: 'Cloud SQL instance ID. This does not include the project ID.',
            in: 'path',
            name: 'instance',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: InstancesRestoreBackupRequestSchema } } },
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
    {
      Oauth2: ['https://www.googleapis.com/auth/sqlservice.admin'],
      Oauth2c: ['https://www.googleapis.com/auth/sqlservice.admin'],
    },
  ],
})

export const postSqlV1beta4ProjectsProjectInstancesInstanceRotateServerCaRoute = createRoute({
  method: 'post',
  path: '/sql/v1beta4/projects/{project}/instances/{instance}/rotateServerCa',
  tags: ['instances'],
  description:
    'Rotates the server certificate to one signed by the Certificate Authority (CA) version previously added with the addServerCA method.',
  operationId: 'sql.instances.rotateServerCa',
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
      project: z
        .string()
        .openapi({
          param: {
            description: 'Project ID of the project that contains the instance.',
            in: 'path',
            name: 'project',
            required: true,
            schema: { type: 'string' },
          },
        }),
      instance: z
        .string()
        .openapi({
          param: {
            description: 'Cloud SQL instance ID. This does not include the project ID.',
            in: 'path',
            name: 'instance',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: InstancesRotateServerCaRequestSchema } } },
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
    {
      Oauth2: ['https://www.googleapis.com/auth/sqlservice.admin'],
      Oauth2c: ['https://www.googleapis.com/auth/sqlservice.admin'],
    },
  ],
})

export const getSqlV1beta4ProjectsProjectInstancesInstanceSslCertsRoute = createRoute({
  method: 'get',
  path: '/sql/v1beta4/projects/{project}/instances/{instance}/sslCerts',
  tags: ['sslCerts'],
  description: 'Lists all of the current SSL certificates for the instance.',
  operationId: 'sql.sslCerts.list',
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
      project: z
        .string()
        .openapi({
          param: {
            description: 'Project ID of the project that contains the instance.',
            in: 'path',
            name: 'project',
            required: true,
            schema: { type: 'string' },
          },
        }),
      instance: z
        .string()
        .openapi({
          param: {
            description: 'Cloud SQL instance ID. This does not include the project ID.',
            in: 'path',
            name: 'instance',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: SslCertsListResponseSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/sqlservice.admin'],
      Oauth2c: ['https://www.googleapis.com/auth/sqlservice.admin'],
    },
  ],
})

export const postSqlV1beta4ProjectsProjectInstancesInstanceSslCertsRoute = createRoute({
  method: 'post',
  path: '/sql/v1beta4/projects/{project}/instances/{instance}/sslCerts',
  tags: ['sslCerts'],
  description:
    'Creates an SSL certificate and returns it along with the private key and server certificate authority. The new certificate will not be usable until the instance is restarted.',
  operationId: 'sql.sslCerts.insert',
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
      project: z
        .string()
        .openapi({
          param: {
            description: 'Project ID of the project that contains the instance.',
            in: 'path',
            name: 'project',
            required: true,
            schema: { type: 'string' },
          },
        }),
      instance: z
        .string()
        .openapi({
          param: {
            description: 'Cloud SQL instance ID. This does not include the project ID.',
            in: 'path',
            name: 'instance',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: SslCertsInsertRequestSchema } } },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: SslCertsInsertResponseSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/sqlservice.admin'],
      Oauth2c: ['https://www.googleapis.com/auth/sqlservice.admin'],
    },
  ],
})

export const getSqlV1beta4ProjectsProjectInstancesInstanceSslCertsSha1FingerprintRoute =
  createRoute({
    method: 'get',
    path: '/sql/v1beta4/projects/{project}/instances/{instance}/sslCerts/{sha1Fingerprint}',
    tags: ['sslCerts'],
    description:
      'Retrieves a particular SSL certificate. Does not include the private key (required for usage). The private key must be saved from the response to initial creation.',
    operationId: 'sql.sslCerts.get',
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
        project: z
          .string()
          .openapi({
            param: {
              description: 'Project ID of the project that contains the instance.',
              in: 'path',
              name: 'project',
              required: true,
              schema: { type: 'string' },
            },
          }),
        instance: z
          .string()
          .openapi({
            param: {
              description: 'Cloud SQL instance ID. This does not include the project ID.',
              in: 'path',
              name: 'instance',
              required: true,
              schema: { type: 'string' },
            },
          }),
        sha1Fingerprint: z
          .string()
          .openapi({
            param: {
              description: 'Sha1 FingerPrint.',
              in: 'path',
              name: 'sha1Fingerprint',
              required: true,
              schema: { type: 'string' },
            },
          }),
      }),
    },
    responses: {
      200: {
        description: 'Successful response',
        content: { 'application/json': { schema: SslCertSchema } },
      },
    },
    security: [
      {
        Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
        Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
      },
      {
        Oauth2: ['https://www.googleapis.com/auth/sqlservice.admin'],
        Oauth2c: ['https://www.googleapis.com/auth/sqlservice.admin'],
      },
    ],
  })

export const deleteSqlV1beta4ProjectsProjectInstancesInstanceSslCertsSha1FingerprintRoute =
  createRoute({
    method: 'delete',
    path: '/sql/v1beta4/projects/{project}/instances/{instance}/sslCerts/{sha1Fingerprint}',
    tags: ['sslCerts'],
    description:
      'Deletes the SSL certificate. For First Generation instances, the certificate remains valid until the instance is restarted.',
    operationId: 'sql.sslCerts.delete',
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
        project: z
          .string()
          .openapi({
            param: {
              description: 'Project ID of the project that contains the instance.',
              in: 'path',
              name: 'project',
              required: true,
              schema: { type: 'string' },
            },
          }),
        instance: z
          .string()
          .openapi({
            param: {
              description: 'Cloud SQL instance ID. This does not include the project ID.',
              in: 'path',
              name: 'instance',
              required: true,
              schema: { type: 'string' },
            },
          }),
        sha1Fingerprint: z
          .string()
          .openapi({
            param: {
              description: 'Sha1 FingerPrint.',
              in: 'path',
              name: 'sha1Fingerprint',
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
      {
        Oauth2: ['https://www.googleapis.com/auth/sqlservice.admin'],
        Oauth2c: ['https://www.googleapis.com/auth/sqlservice.admin'],
      },
    ],
  })

export const postSqlV1beta4ProjectsProjectInstancesInstanceStartExternalSyncRoute = createRoute({
  method: 'post',
  path: '/sql/v1beta4/projects/{project}/instances/{instance}/startExternalSync',
  tags: ['projects'],
  description: 'Start External primary instance migration.',
  operationId: 'sql.projects.instances.startExternalSync',
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
      project: z
        .string()
        .openapi({
          param: {
            description: 'ID of the project that contains the instance.',
            in: 'path',
            name: 'project',
            required: true,
            schema: { type: 'string' },
          },
        }),
      instance: z
        .string()
        .openapi({
          param: {
            description: 'Cloud SQL instance ID. This does not include the project ID.',
            in: 'path',
            name: 'instance',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: SqlInstancesStartExternalSyncRequestSchema } },
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
    {
      Oauth2: ['https://www.googleapis.com/auth/sqlservice.admin'],
      Oauth2c: ['https://www.googleapis.com/auth/sqlservice.admin'],
    },
  ],
})

export const postSqlV1beta4ProjectsProjectInstancesInstanceStartReplicaRoute = createRoute({
  method: 'post',
  path: '/sql/v1beta4/projects/{project}/instances/{instance}/startReplica',
  tags: ['instances'],
  description: 'Starts the replication in the read replica instance.',
  operationId: 'sql.instances.startReplica',
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
      project: z
        .string()
        .openapi({
          param: {
            description: 'ID of the project that contains the read replica.',
            in: 'path',
            name: 'project',
            required: true,
            schema: { type: 'string' },
          },
        }),
      instance: z
        .string()
        .openapi({
          param: {
            description: 'Cloud SQL read replica instance name.',
            in: 'path',
            name: 'instance',
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
    {
      Oauth2: ['https://www.googleapis.com/auth/sqlservice.admin'],
      Oauth2c: ['https://www.googleapis.com/auth/sqlservice.admin'],
    },
  ],
})

export const postSqlV1beta4ProjectsProjectInstancesInstanceStopReplicaRoute = createRoute({
  method: 'post',
  path: '/sql/v1beta4/projects/{project}/instances/{instance}/stopReplica',
  tags: ['instances'],
  description: 'Stops the replication in the read replica instance.',
  operationId: 'sql.instances.stopReplica',
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
      project: z
        .string()
        .openapi({
          param: {
            description: 'ID of the project that contains the read replica.',
            in: 'path',
            name: 'project',
            required: true,
            schema: { type: 'string' },
          },
        }),
      instance: z
        .string()
        .openapi({
          param: {
            description: 'Cloud SQL read replica instance name.',
            in: 'path',
            name: 'instance',
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
    {
      Oauth2: ['https://www.googleapis.com/auth/sqlservice.admin'],
      Oauth2c: ['https://www.googleapis.com/auth/sqlservice.admin'],
    },
  ],
})

export const postSqlV1beta4ProjectsProjectInstancesInstanceTruncateLogRoute = createRoute({
  method: 'post',
  path: '/sql/v1beta4/projects/{project}/instances/{instance}/truncateLog',
  tags: ['instances'],
  description: 'Truncate MySQL general and slow query log tables MySQL only.',
  operationId: 'sql.instances.truncateLog',
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
      project: z
        .string()
        .openapi({
          param: {
            description: 'Project ID of the Cloud SQL project.',
            in: 'path',
            name: 'project',
            required: true,
            schema: { type: 'string' },
          },
        }),
      instance: z
        .string()
        .openapi({
          param: {
            description: 'Cloud SQL instance ID. This does not include the project ID.',
            in: 'path',
            name: 'instance',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: InstancesTruncateLogRequestSchema } } },
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
    {
      Oauth2: ['https://www.googleapis.com/auth/sqlservice.admin'],
      Oauth2c: ['https://www.googleapis.com/auth/sqlservice.admin'],
    },
  ],
})

export const getSqlV1beta4ProjectsProjectInstancesInstanceUsersRoute = createRoute({
  method: 'get',
  path: '/sql/v1beta4/projects/{project}/instances/{instance}/users',
  tags: ['users'],
  description: 'Lists users in the specified Cloud SQL instance.',
  operationId: 'sql.users.list',
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
      project: z
        .string()
        .openapi({
          param: {
            description: 'Project ID of the project that contains the instance.',
            in: 'path',
            name: 'project',
            required: true,
            schema: { type: 'string' },
          },
        }),
      instance: z
        .string()
        .openapi({
          param: {
            description: 'Database instance ID. This does not include the project ID.',
            in: 'path',
            name: 'instance',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: UsersListResponseSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/sqlservice.admin'],
      Oauth2c: ['https://www.googleapis.com/auth/sqlservice.admin'],
    },
  ],
})

export const putSqlV1beta4ProjectsProjectInstancesInstanceUsersRoute = createRoute({
  method: 'put',
  path: '/sql/v1beta4/projects/{project}/instances/{instance}/users',
  tags: ['users'],
  description: 'Updates an existing user in a Cloud SQL instance.',
  operationId: 'sql.users.update',
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
      host: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Optional. Host of the user in the instance.',
            in: 'query',
            name: 'host',
            schema: { type: 'string' },
            required: false,
          },
        }),
      name: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Name of the user in the instance.',
            in: 'query',
            name: 'name',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
    params: z.object({
      project: z
        .string()
        .openapi({
          param: {
            description: 'Project ID of the project that contains the instance.',
            in: 'path',
            name: 'project',
            required: true,
            schema: { type: 'string' },
          },
        }),
      instance: z
        .string()
        .openapi({
          param: {
            description: 'Database instance ID. This does not include the project ID.',
            in: 'path',
            name: 'instance',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: UserSchema } } },
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
    {
      Oauth2: ['https://www.googleapis.com/auth/sqlservice.admin'],
      Oauth2c: ['https://www.googleapis.com/auth/sqlservice.admin'],
    },
  ],
})

export const postSqlV1beta4ProjectsProjectInstancesInstanceUsersRoute = createRoute({
  method: 'post',
  path: '/sql/v1beta4/projects/{project}/instances/{instance}/users',
  tags: ['users'],
  description: 'Creates a new user in a Cloud SQL instance.',
  operationId: 'sql.users.insert',
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
      project: z
        .string()
        .openapi({
          param: {
            description: 'Project ID of the project that contains the instance.',
            in: 'path',
            name: 'project',
            required: true,
            schema: { type: 'string' },
          },
        }),
      instance: z
        .string()
        .openapi({
          param: {
            description: 'Database instance ID. This does not include the project ID.',
            in: 'path',
            name: 'instance',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: UserSchema } } },
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
    {
      Oauth2: ['https://www.googleapis.com/auth/sqlservice.admin'],
      Oauth2c: ['https://www.googleapis.com/auth/sqlservice.admin'],
    },
  ],
})

export const deleteSqlV1beta4ProjectsProjectInstancesInstanceUsersRoute = createRoute({
  method: 'delete',
  path: '/sql/v1beta4/projects/{project}/instances/{instance}/users',
  tags: ['users'],
  description: 'Deletes a user from a Cloud SQL instance.',
  operationId: 'sql.users.delete',
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
      host: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Host of the user in the instance.',
            in: 'query',
            name: 'host',
            schema: { type: 'string' },
            required: false,
          },
        }),
      name: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Name of the user in the instance.',
            in: 'query',
            name: 'name',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
    params: z.object({
      project: z
        .string()
        .openapi({
          param: {
            description: 'Project ID of the project that contains the instance.',
            in: 'path',
            name: 'project',
            required: true,
            schema: { type: 'string' },
          },
        }),
      instance: z
        .string()
        .openapi({
          param: {
            description: 'Database instance ID. This does not include the project ID.',
            in: 'path',
            name: 'instance',
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
    {
      Oauth2: ['https://www.googleapis.com/auth/sqlservice.admin'],
      Oauth2c: ['https://www.googleapis.com/auth/sqlservice.admin'],
    },
  ],
})

export const getSqlV1beta4ProjectsProjectInstancesInstanceUsersNameRoute = createRoute({
  method: 'get',
  path: '/sql/v1beta4/projects/{project}/instances/{instance}/users/{name}',
  tags: ['users'],
  description: 'Retrieves a resource containing information about a user.',
  operationId: 'sql.users.get',
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
      host: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Host of a user of the instance.',
            in: 'query',
            name: 'host',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
    params: z.object({
      project: z
        .string()
        .openapi({
          param: {
            description: 'Project ID of the project that contains the instance.',
            in: 'path',
            name: 'project',
            required: true,
            schema: { type: 'string' },
          },
        }),
      instance: z
        .string()
        .openapi({
          param: {
            description: 'Database instance ID. This does not include the project ID.',
            in: 'path',
            name: 'instance',
            required: true,
            schema: { type: 'string' },
          },
        }),
      name: z
        .string()
        .openapi({
          param: {
            description: 'User of the instance.',
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
      content: { 'application/json': { schema: UserSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/sqlservice.admin'],
      Oauth2c: ['https://www.googleapis.com/auth/sqlservice.admin'],
    },
  ],
})

export const postSqlV1beta4ProjectsProjectInstancesInstanceVerifyExternalSyncSettingsRoute =
  createRoute({
    method: 'post',
    path: '/sql/v1beta4/projects/{project}/instances/{instance}/verifyExternalSyncSettings',
    tags: ['projects'],
    description: 'Verify External primary instance external sync settings.',
    operationId: 'sql.projects.instances.verifyExternalSyncSettings',
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
        project: z
          .string()
          .openapi({
            param: {
              description: 'Project ID of the project that contains the instance.',
              in: 'path',
              name: 'project',
              required: true,
              schema: { type: 'string' },
            },
          }),
        instance: z
          .string()
          .openapi({
            param: {
              description: 'Cloud SQL instance ID. This does not include the project ID.',
              in: 'path',
              name: 'instance',
              required: true,
              schema: { type: 'string' },
            },
          }),
      }),
      body: {
        content: {
          'application/json': { schema: SqlInstancesVerifyExternalSyncSettingsRequestSchema },
        },
      },
    },
    responses: {
      200: {
        description: 'Successful response',
        content: {
          'application/json': { schema: SqlInstancesVerifyExternalSyncSettingsResponseSchema },
        },
      },
    },
    security: [
      {
        Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
        Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
      },
      {
        Oauth2: ['https://www.googleapis.com/auth/sqlservice.admin'],
        Oauth2c: ['https://www.googleapis.com/auth/sqlservice.admin'],
      },
    ],
  })

export const postSqlV1beta4ProjectsProjectInstancesInstanceGenerateEphemeralCertRoute = createRoute(
  {
    method: 'post',
    path: '/sql/v1beta4/projects/{project}/instances/{instance}:generateEphemeralCert',
    tags: ['connect'],
    description:
      'Generates a short-lived X509 certificate containing the provided public key and signed by a private key specific to the target instance. Users may use the certificate to authenticate as themselves when connecting to the database.',
    operationId: 'sql.connect.generateEphemeral',
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
        project: z
          .string()
          .openapi({
            param: {
              description: 'Project ID of the project that contains the instance.',
              in: 'path',
              name: 'project',
              required: true,
              schema: { type: 'string' },
            },
          }),
        instance: z
          .string()
          .openapi({
            param: {
              description: 'Cloud SQL instance ID. This does not include the project ID.',
              in: 'path',
              name: 'instance',
              required: true,
              schema: { type: 'string' },
            },
          }),
      }),
      body: { content: { 'application/json': { schema: GenerateEphemeralCertRequestSchema } } },
    },
    responses: {
      200: {
        description: 'Successful response',
        content: { 'application/json': { schema: GenerateEphemeralCertResponseSchema } },
      },
    },
    security: [
      {
        Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
        Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
      },
      {
        Oauth2: ['https://www.googleapis.com/auth/sqlservice.admin'],
        Oauth2c: ['https://www.googleapis.com/auth/sqlservice.admin'],
      },
    ],
  },
)

export const getSqlV1beta4ProjectsProjectOperationsRoute = createRoute({
  method: 'get',
  path: '/sql/v1beta4/projects/{project}/operations',
  tags: ['operations'],
  description:
    'Lists all instance operations that have been performed on the given Cloud SQL instance in the reverse chronological order of the start time.',
  operationId: 'sql.operations.list',
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
      instance: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Cloud SQL instance ID. This does not include the project ID.',
            in: 'query',
            name: 'instance',
            schema: { type: 'string' },
            required: false,
          },
        }),
      maxResults: z
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
            description: 'Maximum number of operations per response.',
            in: 'query',
            name: 'maxResults',
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
              'A previously-returned page token representing part of the larger set of results to view.',
            in: 'query',
            name: 'pageToken',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
    params: z.object({
      project: z
        .string()
        .openapi({
          param: {
            description: 'Project ID of the project that contains the instance.',
            in: 'path',
            name: 'project',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: OperationsListResponseSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/sqlservice.admin'],
      Oauth2c: ['https://www.googleapis.com/auth/sqlservice.admin'],
    },
  ],
})

export const getSqlV1beta4ProjectsProjectOperationsOperationRoute = createRoute({
  method: 'get',
  path: '/sql/v1beta4/projects/{project}/operations/{operation}',
  tags: ['operations'],
  description: 'Retrieves an instance operation that has been performed on an instance.',
  operationId: 'sql.operations.get',
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
      project: z
        .string()
        .openapi({
          param: {
            description: 'Project ID of the project that contains the instance.',
            in: 'path',
            name: 'project',
            required: true,
            schema: { type: 'string' },
          },
        }),
      operation: z
        .string()
        .openapi({
          param: {
            description: 'Instance operation ID.',
            in: 'path',
            name: 'operation',
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
    {
      Oauth2: ['https://www.googleapis.com/auth/sqlservice.admin'],
      Oauth2c: ['https://www.googleapis.com/auth/sqlservice.admin'],
    },
  ],
})

export const getSqlV1beta4ProjectsProjectTiersRoute = createRoute({
  method: 'get',
  path: '/sql/v1beta4/projects/{project}/tiers',
  tags: ['tiers'],
  description:
    'Lists all available machine types (tiers) for Cloud SQL, for example, `db-custom-1-3840`. For related information, see [Pricing](/sql/pricing).',
  operationId: 'sql.tiers.list',
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
      project: z
        .string()
        .openapi({
          param: {
            description: 'Project ID of the project for which to list tiers.',
            in: 'path',
            name: 'project',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: TiersListResponseSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/sqlservice.admin'],
      Oauth2c: ['https://www.googleapis.com/auth/sqlservice.admin'],
    },
  ],
})
