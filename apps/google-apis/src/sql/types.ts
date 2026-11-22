type Flag = {
  allowedIntValues?: string[] | undefined
  allowedStringValues?: string[] | undefined
  appliesTo?:
    | (
        | 'SQL_DATABASE_VERSION_UNSPECIFIED'
        | 'MYSQL_5_1'
        | 'MYSQL_5_5'
        | 'MYSQL_5_6'
        | 'MYSQL_5_7'
        | 'SQLSERVER_2017_STANDARD'
        | 'SQLSERVER_2017_ENTERPRISE'
        | 'SQLSERVER_2017_EXPRESS'
        | 'SQLSERVER_2017_WEB'
        | 'POSTGRES_9_6'
        | 'POSTGRES_10'
        | 'POSTGRES_11'
        | 'POSTGRES_12'
        | 'POSTGRES_13'
        | 'POSTGRES_14'
        | 'MYSQL_8_0'
        | 'MYSQL_8_0_18'
        | 'MYSQL_8_0_26'
        | 'MYSQL_8_0_27'
        | 'MYSQL_8_0_28'
        | 'MYSQL_8_0_29'
        | 'MYSQL_8_0_30'
        | 'MYSQL_8_0_31'
        | 'MYSQL_8_0_32'
        | 'MYSQL_8_0_33'
        | 'MYSQL_8_0_34'
        | 'MYSQL_8_0_35'
        | 'MYSQL_8_0_36'
        | 'SQLSERVER_2019_STANDARD'
        | 'SQLSERVER_2019_ENTERPRISE'
        | 'SQLSERVER_2019_EXPRESS'
        | 'SQLSERVER_2019_WEB'
      )[]
    | undefined
  inBeta?: boolean | undefined
  kind?: string | undefined
  maxValue?: string | undefined
  minValue?: string | undefined
  name?: string | undefined
  requiresRestart?: boolean | undefined
  type?:
    | 'SQL_FLAG_TYPE_UNSPECIFIED'
    | 'BOOLEAN'
    | 'STRING'
    | 'INTEGER'
    | 'NONE'
    | 'MYSQL_TIMEZONE_OFFSET'
    | 'FLOAT'
    | 'REPEATED_STRING'
    | undefined
}
type FlagsListResponse = { items?: Flag[] | undefined; kind?: string | undefined }
type DiskEncryptionConfiguration = { kind?: string | undefined; kmsKeyName?: string | undefined }
type DiskEncryptionStatus = { kind?: string | undefined; kmsKeyVersionName?: string | undefined }
type IpMapping = {
  ipAddress?: string | undefined
  timeToRetire?: string | undefined
  type?:
    | 'SQL_IP_ADDRESS_TYPE_UNSPECIFIED'
    | 'PRIMARY'
    | 'OUTGOING'
    | 'PRIVATE'
    | 'MIGRATED_1ST_GEN'
    | undefined
}
type InstanceReference = {
  name?: string | undefined
  project?: string | undefined
  region?: string | undefined
}
type OnPremisesConfiguration = {
  caCertificate?: string | undefined
  clientCertificate?: string | undefined
  clientKey?: string | undefined
  dumpFilePath?: string | undefined
  hostPort?: string | undefined
  kind?: string | undefined
  password?: string | undefined
  sourceInstance?: InstanceReference | undefined
  username?: string | undefined
}
type SqlOutOfDiskReport = {
  sqlMinRecommendedIncreaseSizeGb?: number | undefined
  sqlOutOfDiskState?: 'SQL_OUT_OF_DISK_STATE_UNSPECIFIED' | 'NORMAL' | 'SOFT_SHUTDOWN' | undefined
}
type MySqlReplicaConfiguration = {
  caCertificate?: string | undefined
  clientCertificate?: string | undefined
  clientKey?: string | undefined
  connectRetryInterval?: number | undefined
  dumpFilePath?: string | undefined
  kind?: string | undefined
  masterHeartbeatPeriod?: string | undefined
  password?: string | undefined
  sslCipher?: string | undefined
  username?: string | undefined
  verifyServerCertificate?: boolean | undefined
}
type ReplicaConfiguration = {
  failoverTarget?: boolean | undefined
  kind?: string | undefined
  mysqlReplicaConfiguration?: MySqlReplicaConfiguration | undefined
}
type SqlScheduledMaintenance = {
  canDefer?: boolean | undefined
  canReschedule?: boolean | undefined
  scheduleDeadlineTime?: string | undefined
  startTime?: string | undefined
}
type SslCert = {
  cert?: string | undefined
  certSerialNumber?: string | undefined
  commonName?: string | undefined
  createTime?: string | undefined
  expirationTime?: string | undefined
  instance?: string | undefined
  kind?: string | undefined
  selfLink?: string | undefined
  sha1Fingerprint?: string | undefined
}
type SqlActiveDirectoryConfig = { domain?: string | undefined; kind?: string | undefined }
type AdvancedMachineFeatures = { threadsPerCore?: number | undefined }
type BackupRetentionSettings = {
  retainedBackups?: number | undefined
  retentionUnit?: 'RETENTION_UNIT_UNSPECIFIED' | 'COUNT' | undefined
}
type BackupConfiguration = {
  backupRetentionSettings?: BackupRetentionSettings | undefined
  binaryLogEnabled?: boolean | undefined
  enabled?: boolean | undefined
  kind?: string | undefined
  location?: string | undefined
  pointInTimeRecoveryEnabled?: boolean | undefined
  replicationLogArchivingEnabled?: boolean | undefined
  startTime?: string | undefined
  transactionLogRetentionDays?: number | undefined
}
type DatabaseFlags = { name?: string | undefined; value?: string | undefined }
type DenyMaintenancePeriod = {
  endDate?: string | undefined
  startDate?: string | undefined
  time?: string | undefined
}
type InsightsConfig = {
  queryInsightsEnabled?: boolean | undefined
  queryPlansPerMinute?: number | undefined
  queryStringLength?: number | undefined
  recordApplicationTags?: boolean | undefined
  recordClientAddress?: boolean | undefined
}
type AclEntry = {
  expirationTime?: string | undefined
  kind?: string | undefined
  name?: string | undefined
  value?: string | undefined
}
type IpConfiguration = {
  allocatedIpRange?: string | undefined
  authorizedNetworks?: AclEntry[] | undefined
  enablePrivatePathForGoogleCloudServices?: boolean | undefined
  ipv4Enabled?: boolean | undefined
  privateNetwork?: string | undefined
  requireSsl?: boolean | undefined
}
type LocationPreference = {
  followGaeApplication?: string | undefined
  kind?: string | undefined
  secondaryZone?: string | undefined
  zone?: string | undefined
}
type MaintenanceWindow = {
  day?: number | undefined
  hour?: number | undefined
  kind?: string | undefined
  updateTrack?: 'SQL_UPDATE_TRACK_UNSPECIFIED' | 'canary' | 'stable' | undefined
}
type PasswordValidationPolicy = {
  complexity?: 'COMPLEXITY_UNSPECIFIED' | 'COMPLEXITY_DEFAULT' | undefined
  disallowUsernameSubstring?: boolean | undefined
  enablePasswordPolicy?: boolean | undefined
  minLength?: number | undefined
  passwordChangeInterval?: string | undefined
  reuseInterval?: number | undefined
}
type SqlServerAuditConfig = {
  bucket?: string | undefined
  kind?: string | undefined
  retentionInterval?: string | undefined
  uploadInterval?: string | undefined
}
type Settings = {
  activationPolicy?:
    | 'SQL_ACTIVATION_POLICY_UNSPECIFIED'
    | 'ALWAYS'
    | 'NEVER'
    | 'ON_DEMAND'
    | undefined
  activeDirectoryConfig?: SqlActiveDirectoryConfig | undefined
  advancedMachineFeatures?: AdvancedMachineFeatures | undefined
  authorizedGaeApplications?: string[] | undefined
  availabilityType?: 'SQL_AVAILABILITY_TYPE_UNSPECIFIED' | 'ZONAL' | 'REGIONAL' | undefined
  backupConfiguration?: BackupConfiguration | undefined
  collation?: string | undefined
  connectorEnforcement?:
    | 'CONNECTOR_ENFORCEMENT_UNSPECIFIED'
    | 'NOT_REQUIRED'
    | 'REQUIRED'
    | undefined
  crashSafeReplicationEnabled?: boolean | undefined
  dataDiskSizeGb?: string | undefined
  dataDiskType?:
    | 'SQL_DATA_DISK_TYPE_UNSPECIFIED'
    | 'PD_SSD'
    | 'PD_HDD'
    | 'OBSOLETE_LOCAL_SSD'
    | undefined
  databaseFlags?: DatabaseFlags[] | undefined
  databaseReplicationEnabled?: boolean | undefined
  deletionProtectionEnabled?: boolean | undefined
  denyMaintenancePeriods?: DenyMaintenancePeriod[] | undefined
  insightsConfig?: InsightsConfig | undefined
  ipConfiguration?: IpConfiguration | undefined
  kind?: string | undefined
  locationPreference?: LocationPreference | undefined
  maintenanceWindow?: MaintenanceWindow | undefined
  passwordValidationPolicy?: PasswordValidationPolicy | undefined
  pricingPlan?: 'SQL_PRICING_PLAN_UNSPECIFIED' | 'PACKAGE' | 'PER_USE' | undefined
  replicationType?: 'SQL_REPLICATION_TYPE_UNSPECIFIED' | 'SYNCHRONOUS' | 'ASYNCHRONOUS' | undefined
  settingsVersion?: string | undefined
  sqlServerAuditConfig?: SqlServerAuditConfig | undefined
  storageAutoResize?: boolean | undefined
  storageAutoResizeLimit?: string | undefined
  tier?: string | undefined
  timeZone?: string | undefined
  userLabels?: { [x: string]: string } | undefined
}
type DatabaseInstance = {
  availableMaintenanceVersions?: string[] | undefined
  backendType?: 'SQL_BACKEND_TYPE_UNSPECIFIED' | 'FIRST_GEN' | 'SECOND_GEN' | 'EXTERNAL' | undefined
  connectionName?: string | undefined
  createTime?: string | undefined
  currentDiskSize?: string | undefined
  databaseInstalledVersion?: string | undefined
  databaseVersion?:
    | 'SQL_DATABASE_VERSION_UNSPECIFIED'
    | 'MYSQL_5_1'
    | 'MYSQL_5_5'
    | 'MYSQL_5_6'
    | 'MYSQL_5_7'
    | 'SQLSERVER_2017_STANDARD'
    | 'SQLSERVER_2017_ENTERPRISE'
    | 'SQLSERVER_2017_EXPRESS'
    | 'SQLSERVER_2017_WEB'
    | 'POSTGRES_9_6'
    | 'POSTGRES_10'
    | 'POSTGRES_11'
    | 'POSTGRES_12'
    | 'POSTGRES_13'
    | 'POSTGRES_14'
    | 'MYSQL_8_0'
    | 'MYSQL_8_0_18'
    | 'MYSQL_8_0_26'
    | 'MYSQL_8_0_27'
    | 'MYSQL_8_0_28'
    | 'MYSQL_8_0_29'
    | 'MYSQL_8_0_30'
    | 'MYSQL_8_0_31'
    | 'MYSQL_8_0_32'
    | 'MYSQL_8_0_33'
    | 'MYSQL_8_0_34'
    | 'MYSQL_8_0_35'
    | 'MYSQL_8_0_36'
    | 'SQLSERVER_2019_STANDARD'
    | 'SQLSERVER_2019_ENTERPRISE'
    | 'SQLSERVER_2019_EXPRESS'
    | 'SQLSERVER_2019_WEB'
    | undefined
  diskEncryptionConfiguration?: DiskEncryptionConfiguration | undefined
  diskEncryptionStatus?: DiskEncryptionStatus | undefined
  etag?: string | undefined
  failoverReplica?: { available?: boolean | undefined; name?: string | undefined } | undefined
  gceZone?: string | undefined
  instanceType?:
    | 'SQL_INSTANCE_TYPE_UNSPECIFIED'
    | 'CLOUD_SQL_INSTANCE'
    | 'ON_PREMISES_INSTANCE'
    | 'READ_REPLICA_INSTANCE'
    | undefined
  ipAddresses?: IpMapping[] | undefined
  ipv6Address?: string | undefined
  kind?: string | undefined
  maintenanceVersion?: string | undefined
  masterInstanceName?: string | undefined
  maxDiskSize?: string | undefined
  name?: string | undefined
  onPremisesConfiguration?: OnPremisesConfiguration | undefined
  outOfDiskReport?: SqlOutOfDiskReport | undefined
  project?: string | undefined
  region?: string | undefined
  replicaConfiguration?: ReplicaConfiguration | undefined
  replicaNames?: string[] | undefined
  rootPassword?: string | undefined
  satisfiesPzs?: boolean | undefined
  scheduledMaintenance?: SqlScheduledMaintenance | undefined
  secondaryGceZone?: string | undefined
  selfLink?: string | undefined
  serverCaCert?: SslCert | undefined
  serviceAccountEmailAddress?: string | undefined
  settings?: Settings | undefined
  state?:
    | 'SQL_INSTANCE_STATE_UNSPECIFIED'
    | 'RUNNABLE'
    | 'SUSPENDED'
    | 'PENDING_DELETE'
    | 'PENDING_CREATE'
    | 'MAINTENANCE'
    | 'FAILED'
    | 'ONLINE_MAINTENANCE'
    | undefined
  suspensionReason?:
    | (
        | 'SQL_SUSPENSION_REASON_UNSPECIFIED'
        | 'BILLING_ISSUE'
        | 'LEGAL_ISSUE'
        | 'OPERATIONAL_ISSUE'
        | 'KMS_KEY_ISSUE'
      )[]
    | undefined
}
type ApiWarning = {
  code?:
    | 'SQL_API_WARNING_CODE_UNSPECIFIED'
    | 'REGION_UNREACHABLE'
    | 'MAX_RESULTS_EXCEEDS_LIMIT'
    | undefined
  message?: string | undefined
  region?: string | undefined
}
type InstancesListResponse = {
  items?: DatabaseInstance[] | undefined
  kind?: string | undefined
  nextPageToken?: string | undefined
  warnings?: ApiWarning[] | undefined
}
type BackupContext = { backupId?: string | undefined; kind?: string | undefined }
type OperationError = {
  code?: string | undefined
  kind?: string | undefined
  message?: string | undefined
}
type OperationErrors = { errors?: OperationError[] | undefined; kind?: string | undefined }
type ExportContext = {
  bakExportOptions?: { stripeCount?: number | undefined; striped?: boolean | undefined } | undefined
  csvExportOptions?:
    | {
        escapeCharacter?: string | undefined
        fieldsTerminatedBy?: string | undefined
        linesTerminatedBy?: string | undefined
        quoteCharacter?: string | undefined
        selectQuery?: string | undefined
      }
    | undefined
  databases?: string[] | undefined
  fileType?: 'SQL_FILE_TYPE_UNSPECIFIED' | 'SQL' | 'CSV' | 'BAK' | undefined
  kind?: string | undefined
  offload?: boolean | undefined
  sqlExportOptions?:
    | {
        mysqlExportOptions?: { masterData?: number | undefined } | undefined
        schemaOnly?: boolean | undefined
        tables?: string[] | undefined
      }
    | undefined
  uri?: string | undefined
}
type ImportContext = {
  bakImportOptions?:
    | {
        encryptionOptions?:
          | {
              certPath?: string | undefined
              pvkPassword?: string | undefined
              pvkPath?: string | undefined
            }
          | undefined
        striped?: boolean | undefined
      }
    | undefined
  csvImportOptions?:
    | {
        columns?: string[] | undefined
        escapeCharacter?: string | undefined
        fieldsTerminatedBy?: string | undefined
        linesTerminatedBy?: string | undefined
        quoteCharacter?: string | undefined
        table?: string | undefined
      }
    | undefined
  database?: string | undefined
  fileType?: 'SQL_FILE_TYPE_UNSPECIFIED' | 'SQL' | 'CSV' | 'BAK' | undefined
  importUser?: string | undefined
  kind?: string | undefined
  uri?: string | undefined
}
type Operation = {
  backupContext?: BackupContext | undefined
  endTime?: string | undefined
  error?: OperationErrors | undefined
  exportContext?: ExportContext | undefined
  importContext?: ImportContext | undefined
  insertTime?: string | undefined
  kind?: string | undefined
  name?: string | undefined
  operationType?:
    | 'SQL_OPERATION_TYPE_UNSPECIFIED'
    | 'IMPORT'
    | 'EXPORT'
    | 'CREATE'
    | 'UPDATE'
    | 'DELETE'
    | 'RESTART'
    | 'BACKUP'
    | 'SNAPSHOT'
    | 'BACKUP_VOLUME'
    | 'DELETE_VOLUME'
    | 'RESTORE_VOLUME'
    | 'INJECT_USER'
    | 'CLONE'
    | 'STOP_REPLICA'
    | 'START_REPLICA'
    | 'PROMOTE_REPLICA'
    | 'CREATE_REPLICA'
    | 'CREATE_USER'
    | 'DELETE_USER'
    | 'UPDATE_USER'
    | 'CREATE_DATABASE'
    | 'DELETE_DATABASE'
    | 'UPDATE_DATABASE'
    | 'FAILOVER'
    | 'DELETE_BACKUP'
    | 'RECREATE_REPLICA'
    | 'TRUNCATE_LOG'
    | 'DEMOTE_MASTER'
    | 'MAINTENANCE'
    | 'ENABLE_PRIVATE_IP'
    | 'DEFER_MAINTENANCE'
    | 'CREATE_CLONE'
    | 'RESCHEDULE_MAINTENANCE'
    | 'START_EXTERNAL_SYNC'
    | 'LOG_CLEANUP'
    | 'AUTO_RESTART'
    | 'REENCRYPT'
    | undefined
  selfLink?: string | undefined
  startTime?: string | undefined
  status?: 'SQL_OPERATION_STATUS_UNSPECIFIED' | 'PENDING' | 'RUNNING' | 'DONE' | undefined
  targetId?: string | undefined
  targetLink?: string | undefined
  targetProject?: string | undefined
  user?: string | undefined
}
type BackupRun = {
  backupKind?: 'SQL_BACKUP_KIND_UNSPECIFIED' | 'SNAPSHOT' | 'PHYSICAL' | undefined
  description?: string | undefined
  diskEncryptionConfiguration?: DiskEncryptionConfiguration | undefined
  diskEncryptionStatus?: DiskEncryptionStatus | undefined
  endTime?: string | undefined
  enqueuedTime?: string | undefined
  error?: OperationError | undefined
  id?: string | undefined
  instance?: string | undefined
  kind?: string | undefined
  location?: string | undefined
  selfLink?: string | undefined
  startTime?: string | undefined
  status?:
    | 'SQL_BACKUP_RUN_STATUS_UNSPECIFIED'
    | 'ENQUEUED'
    | 'OVERDUE'
    | 'RUNNING'
    | 'FAILED'
    | 'SUCCESSFUL'
    | 'SKIPPED'
    | 'DELETION_PENDING'
    | 'DELETION_FAILED'
    | 'DELETED'
    | undefined
  timeZone?: string | undefined
  type?: 'SQL_BACKUP_RUN_TYPE_UNSPECIFIED' | 'AUTOMATED' | 'ON_DEMAND' | undefined
  windowStartTime?: string | undefined
}
type BackupRunsListResponse = {
  items?: BackupRun[] | undefined
  kind?: string | undefined
  nextPageToken?: string | undefined
}
type BinLogCoordinates = {
  binLogFileName?: string | undefined
  binLogPosition?: string | undefined
  kind?: string | undefined
}
type CloneContext = {
  allocatedIpRange?: string | undefined
  binLogCoordinates?: BinLogCoordinates | undefined
  databaseNames?: string[] | undefined
  destinationInstanceName?: string | undefined
  kind?: string | undefined
  pitrTimestampMs?: string | undefined
  pointInTime?: string | undefined
}
type InstancesCloneRequest = { cloneContext?: CloneContext | undefined }
type ConnectSettings = {
  backendType?: 'SQL_BACKEND_TYPE_UNSPECIFIED' | 'FIRST_GEN' | 'SECOND_GEN' | 'EXTERNAL' | undefined
  databaseVersion?:
    | 'SQL_DATABASE_VERSION_UNSPECIFIED'
    | 'MYSQL_5_1'
    | 'MYSQL_5_5'
    | 'MYSQL_5_6'
    | 'MYSQL_5_7'
    | 'SQLSERVER_2017_STANDARD'
    | 'SQLSERVER_2017_ENTERPRISE'
    | 'SQLSERVER_2017_EXPRESS'
    | 'SQLSERVER_2017_WEB'
    | 'POSTGRES_9_6'
    | 'POSTGRES_10'
    | 'POSTGRES_11'
    | 'POSTGRES_12'
    | 'POSTGRES_13'
    | 'POSTGRES_14'
    | 'MYSQL_8_0'
    | 'MYSQL_8_0_18'
    | 'MYSQL_8_0_26'
    | 'MYSQL_8_0_27'
    | 'MYSQL_8_0_28'
    | 'MYSQL_8_0_29'
    | 'MYSQL_8_0_30'
    | 'MYSQL_8_0_31'
    | 'MYSQL_8_0_32'
    | 'MYSQL_8_0_33'
    | 'MYSQL_8_0_34'
    | 'MYSQL_8_0_35'
    | 'MYSQL_8_0_36'
    | 'SQLSERVER_2019_STANDARD'
    | 'SQLSERVER_2019_ENTERPRISE'
    | 'SQLSERVER_2019_EXPRESS'
    | 'SQLSERVER_2019_WEB'
    | undefined
  ipAddresses?: IpMapping[] | undefined
  kind?: string | undefined
  region?: string | undefined
  serverCaCert?: SslCert | undefined
}
type SslCertsCreateEphemeralRequest = {
  access_token?: string | undefined
  public_key?: string | undefined
}
type SqlServerDatabaseDetails = {
  compatibilityLevel?: number | undefined
  recoveryModel?: string | undefined
}
type Database = {
  charset?: string | undefined
  collation?: string | undefined
  etag?: string | undefined
  instance?: string | undefined
  kind?: string | undefined
  name?: string | undefined
  project?: string | undefined
  selfLink?: string | undefined
  sqlserverDatabaseDetails?: SqlServerDatabaseDetails | undefined
}
type DatabasesListResponse = { items?: Database[] | undefined; kind?: string | undefined }
type DemoteMasterMySqlReplicaConfiguration = {
  caCertificate?: string | undefined
  clientCertificate?: string | undefined
  clientKey?: string | undefined
  kind?: string | undefined
  password?: string | undefined
  username?: string | undefined
}
type DemoteMasterConfiguration = {
  kind?: string | undefined
  mysqlReplicaConfiguration?: DemoteMasterMySqlReplicaConfiguration | undefined
}
type DemoteMasterContext = {
  kind?: string | undefined
  masterInstanceName?: string | undefined
  replicaConfiguration?: DemoteMasterConfiguration | undefined
  skipReplicationSetup?: boolean | undefined
  verifyGtidConsistency?: boolean | undefined
}
type InstancesDemoteMasterRequest = { demoteMasterContext?: DemoteMasterContext | undefined }
type InstancesExportRequest = { exportContext?: ExportContext | undefined }
type FailoverContext = { kind?: string | undefined; settingsVersion?: string | undefined }
type InstancesFailoverRequest = { failoverContext?: FailoverContext | undefined }
type SqlInstancesGetDiskShrinkConfigResponse = {
  kind?: string | undefined
  minimalTargetSizeGb?: string | undefined
}
type InstancesImportRequest = { importContext?: ImportContext | undefined }
type InstancesListServerCasResponse = {
  activeVersion?: string | undefined
  certs?: SslCert[] | undefined
  kind?: string | undefined
}
type PerformDiskShrinkContext = { targetSizeGb?: string | undefined }
type Reschedule = {
  rescheduleType?:
    | 'RESCHEDULE_TYPE_UNSPECIFIED'
    | 'IMMEDIATE'
    | 'NEXT_AVAILABLE_WINDOW'
    | 'SPECIFIC_TIME'
    | undefined
  scheduleTime?: string | undefined
}
type SqlInstancesRescheduleMaintenanceRequestBody = { reschedule?: Reschedule | undefined }
type SqlInstancesResetReplicaSizeRequest = { [x: string]: unknown }
type RestoreBackupContext = {
  backupRunId?: string | undefined
  instanceId?: string | undefined
  kind?: string | undefined
  project?: string | undefined
}
type InstancesRestoreBackupRequest = { restoreBackupContext?: RestoreBackupContext | undefined }
type RotateServerCaContext = { kind?: string | undefined; nextVersion?: string | undefined }
type InstancesRotateServerCaRequest = { rotateServerCaContext?: RotateServerCaContext | undefined }
type SslCertsListResponse = { items?: SslCert[] | undefined; kind?: string | undefined }
type SslCertsInsertRequest = { commonName?: string | undefined }
type SslCertDetail = { certInfo?: SslCert | undefined; certPrivateKey?: string | undefined }
type SslCertsInsertResponse = {
  clientCert?: SslCertDetail | undefined
  kind?: string | undefined
  operation?: Operation | undefined
  serverCaCert?: SslCert | undefined
}
type SyncFlags = { name?: string | undefined; value?: string | undefined }
type MySqlSyncConfig = { initialSyncFlags?: SyncFlags[] | undefined }
type SqlInstancesStartExternalSyncRequest = {
  mysqlSyncConfig?: MySqlSyncConfig | undefined
  skipVerification?: boolean | undefined
  syncMode?: 'EXTERNAL_SYNC_MODE_UNSPECIFIED' | 'ONLINE' | 'OFFLINE' | undefined
}
type TruncateLogContext = { kind?: string | undefined; logType?: string | undefined }
type InstancesTruncateLogRequest = { truncateLogContext?: TruncateLogContext | undefined }
type PasswordStatus = { locked?: boolean | undefined; passwordExpirationTime?: string | undefined }
type UserPasswordValidationPolicy = {
  allowedFailedAttempts?: number | undefined
  enableFailedAttemptsCheck?: boolean | undefined
  enablePasswordVerification?: boolean | undefined
  passwordExpirationDuration?: string | undefined
  status?: PasswordStatus | undefined
}
type SqlServerUserDetails = { disabled?: boolean | undefined; serverRoles?: string[] | undefined }
type User = {
  dualPasswordType?:
    | 'DUAL_PASSWORD_TYPE_UNSPECIFIED'
    | 'NO_MODIFY_DUAL_PASSWORD'
    | 'NO_DUAL_PASSWORD'
    | 'DUAL_PASSWORD'
    | undefined
  etag?: string | undefined
  host?: string | undefined
  instance?: string | undefined
  kind?: string | undefined
  name?: string | undefined
  password?: string | undefined
  passwordPolicy?: UserPasswordValidationPolicy | undefined
  project?: string | undefined
  sqlserverUserDetails?: SqlServerUserDetails | undefined
  type?: 'BUILT_IN' | 'CLOUD_IAM_USER' | 'CLOUD_IAM_SERVICE_ACCOUNT' | undefined
}
type UsersListResponse = {
  items?: User[] | undefined
  kind?: string | undefined
  nextPageToken?: string | undefined
}
type SqlInstancesVerifyExternalSyncSettingsRequest = {
  mysqlSyncConfig?: MySqlSyncConfig | undefined
  syncMode?: 'EXTERNAL_SYNC_MODE_UNSPECIFIED' | 'ONLINE' | 'OFFLINE' | undefined
  verifyConnectionOnly?: boolean | undefined
  verifyReplicationOnly?: boolean | undefined
}
type SqlExternalSyncSettingError = {
  detail?: string | undefined
  kind?: string | undefined
  type?:
    | 'SQL_EXTERNAL_SYNC_SETTING_ERROR_TYPE_UNSPECIFIED'
    | 'CONNECTION_FAILURE'
    | 'BINLOG_NOT_ENABLED'
    | 'INCOMPATIBLE_DATABASE_VERSION'
    | 'REPLICA_ALREADY_SETUP'
    | 'INSUFFICIENT_PRIVILEGE'
    | 'UNSUPPORTED_MIGRATION_TYPE'
    | 'NO_PGLOGICAL_INSTALLED'
    | 'PGLOGICAL_NODE_ALREADY_EXISTS'
    | 'INVALID_WAL_LEVEL'
    | 'INVALID_SHARED_PRELOAD_LIBRARY'
    | 'INSUFFICIENT_MAX_REPLICATION_SLOTS'
    | 'INSUFFICIENT_MAX_WAL_SENDERS'
    | 'INSUFFICIENT_MAX_WORKER_PROCESSES'
    | 'UNSUPPORTED_EXTENSIONS'
    | 'INVALID_RDS_LOGICAL_REPLICATION'
    | 'INVALID_LOGGING_SETUP'
    | 'INVALID_DB_PARAM'
    | 'UNSUPPORTED_GTID_MODE'
    | 'SQLSERVER_AGENT_NOT_RUNNING'
    | 'UNSUPPORTED_TABLE_DEFINITION'
    | 'UNSUPPORTED_DEFINER'
    | 'SQLSERVER_SERVERNAME_MISMATCH'
    | 'PRIMARY_ALREADY_SETUP'
    | 'UNSUPPORTED_BINLOG_FORMAT'
    | 'BINLOG_RETENTION_SETTING'
    | 'UNSUPPORTED_STORAGE_ENGINE'
    | 'LIMITED_SUPPORT_TABLES'
    | 'EXISTING_DATA_IN_REPLICA'
    | undefined
}
type SqlInstancesVerifyExternalSyncSettingsResponse = {
  errors?: SqlExternalSyncSettingError[] | undefined
  kind?: string | undefined
  warnings?: SqlExternalSyncSettingError[] | undefined
}
type GenerateEphemeralCertRequest = {
  access_token?: string | undefined
  public_key?: string | undefined
  readTime?: string | undefined
  validDuration?: string | undefined
}
type GenerateEphemeralCertResponse = { ephemeralCert?: SslCert | undefined }
type OperationsListResponse = {
  items?: Operation[] | undefined
  kind?: string | undefined
  nextPageToken?: string | undefined
}
type Tier = {
  DiskQuota?: string | undefined
  RAM?: string | undefined
  kind?: string | undefined
  region?: string[] | undefined
  tier?: string | undefined
}
type TiersListResponse = { items?: Tier[] | undefined; kind?: string | undefined }
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/sql/v1beta4/flags': {
      $get: {
        input: {
          query: {
            databaseVersion?: string | undefined
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
        output: FlagsListResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/sql/v1beta4/projects/:project/instances': {
      $get: {
        input: { param: { project: string } } & {
          query: {
            filter?: string | undefined
            maxResults?: number | undefined
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
        output: InstancesListResponse
        outputFormat: 'json'
        status: 200
      }
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
        } & { json: DatabaseInstance }
        output: Operation
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/sql/v1beta4/projects/:project/instances/:instance': {
      $delete: {
        input: { param: { project: string; instance: string } } & {
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
        output: Operation
        outputFormat: 'json'
        status: 200
      }
      $get: {
        input: { param: { project: string; instance: string } } & {
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
        output: DatabaseInstance
        outputFormat: 'json'
        status: 200
      }
      $patch: {
        input: { param: { project: string; instance: string } } & {
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
        } & { json: DatabaseInstance }
        output: Operation
        outputFormat: 'json'
        status: 200
      }
      $put: {
        input: { param: { project: string; instance: string } } & {
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
        } & { json: DatabaseInstance }
        output: Operation
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/sql/v1beta4/projects/:project/instances/:instance/addServerCa': {
      $post: {
        input: { param: { project: string; instance: string } } & {
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
        output: Operation
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/sql/v1beta4/projects/:project/instances/:instance/backupRuns': {
      $get: {
        input: { param: { project: string; instance: string } } & {
          query: {
            maxResults?: number | undefined
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
        output: BackupRunsListResponse
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: { param: { project: string; instance: string } } & {
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
        } & { json: BackupRun }
        output: Operation
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/sql/v1beta4/projects/:project/instances/:instance/backupRuns/:id': {
      $delete: {
        input: { param: { project: string; instance: string; id: string } } & {
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
        output: Operation
        outputFormat: 'json'
        status: 200
      }
      $get: {
        input: { param: { project: string; instance: string; id: string } } & {
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
        output: BackupRun
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/sql/v1beta4/projects/:project/instances/:instance/clone': {
      $post: {
        input: { param: { project: string; instance: string } } & {
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
        } & { json: InstancesCloneRequest }
        output: Operation
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/sql/v1beta4/projects/:project/instances/:instance/connectSettings': {
      $get: {
        input: { param: { project: string; instance: string } } & {
          query: {
            readTime?: string | undefined
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
        output: ConnectSettings
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/sql/v1beta4/projects/:project/instances/:instance/createEphemeral': {
      $post: {
        input: { param: { project: string; instance: string } } & {
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
        } & { json: SslCertsCreateEphemeralRequest }
        output: SslCert
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/sql/v1beta4/projects/:project/instances/:instance/databases': {
      $get: {
        input: { param: { project: string; instance: string } } & {
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
        output: DatabasesListResponse
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: { param: { project: string; instance: string } } & {
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
        } & { json: Database }
        output: Operation
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/sql/v1beta4/projects/:project/instances/:instance/databases/:database': {
      $delete: {
        input: { param: { project: string; instance: string; database: string } } & {
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
        output: Operation
        outputFormat: 'json'
        status: 200
      }
      $get: {
        input: { param: { project: string; instance: string; database: string } } & {
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
        output: Database
        outputFormat: 'json'
        status: 200
      }
      $patch: {
        input: { param: { project: string; instance: string; database: string } } & {
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
        } & { json: Database }
        output: Operation
        outputFormat: 'json'
        status: 200
      }
      $put: {
        input: { param: { project: string; instance: string; database: string } } & {
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
        } & { json: Database }
        output: Operation
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/sql/v1beta4/projects/:project/instances/:instance/demoteMaster': {
      $post: {
        input: { param: { project: string; instance: string } } & {
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
        } & { json: InstancesDemoteMasterRequest }
        output: Operation
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/sql/v1beta4/projects/:project/instances/:instance/export': {
      $post: {
        input: { param: { project: string; instance: string } } & {
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
        } & { json: InstancesExportRequest }
        output: Operation
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/sql/v1beta4/projects/:project/instances/:instance/failover': {
      $post: {
        input: { param: { project: string; instance: string } } & {
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
        } & { json: InstancesFailoverRequest }
        output: Operation
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/sql/v1beta4/projects/:project/instances/:instance/getDiskShrinkConfig': {
      $get: {
        input: { param: { project: string; instance: string } } & {
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
        output: SqlInstancesGetDiskShrinkConfigResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/sql/v1beta4/projects/:project/instances/:instance/import': {
      $post: {
        input: { param: { project: string; instance: string } } & {
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
        } & { json: InstancesImportRequest }
        output: Operation
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/sql/v1beta4/projects/:project/instances/:instance/listServerCas': {
      $get: {
        input: { param: { project: string; instance: string } } & {
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
        output: InstancesListServerCasResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/sql/v1beta4/projects/:project/instances/:instance/performDiskShrink': {
      $post: {
        input: { param: { project: string; instance: string } } & {
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
        } & { json: PerformDiskShrinkContext }
        output: Operation
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/sql/v1beta4/projects/:project/instances/:instance/promoteReplica': {
      $post: {
        input: { param: { project: string; instance: string } } & {
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
        output: Operation
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/sql/v1beta4/projects/:project/instances/:instance/rescheduleMaintenance': {
      $post: {
        input: { param: { project: string; instance: string } } & {
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
        } & { json: SqlInstancesRescheduleMaintenanceRequestBody }
        output: Operation
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/sql/v1beta4/projects/:project/instances/:instance/resetReplicaSize': {
      $post: {
        input: { param: { project: string; instance: string } } & {
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
        } & { json: SqlInstancesResetReplicaSizeRequest }
        output: Operation
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/sql/v1beta4/projects/:project/instances/:instance/resetSslConfig': {
      $post: {
        input: { param: { project: string; instance: string } } & {
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
        output: Operation
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/sql/v1beta4/projects/:project/instances/:instance/restart': {
      $post: {
        input: { param: { project: string; instance: string } } & {
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
        output: Operation
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/sql/v1beta4/projects/:project/instances/:instance/restoreBackup': {
      $post: {
        input: { param: { project: string; instance: string } } & {
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
        } & { json: InstancesRestoreBackupRequest }
        output: Operation
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/sql/v1beta4/projects/:project/instances/:instance/rotateServerCa': {
      $post: {
        input: { param: { project: string; instance: string } } & {
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
        } & { json: InstancesRotateServerCaRequest }
        output: Operation
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/sql/v1beta4/projects/:project/instances/:instance/sslCerts': {
      $get: {
        input: { param: { project: string; instance: string } } & {
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
        output: SslCertsListResponse
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: { param: { project: string; instance: string } } & {
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
        } & { json: SslCertsInsertRequest }
        output: SslCertsInsertResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/sql/v1beta4/projects/:project/instances/:instance/sslCerts/:sha1Fingerprint': {
      $delete: {
        input: { param: { project: string; instance: string; sha1Fingerprint: string } } & {
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
        output: Operation
        outputFormat: 'json'
        status: 200
      }
      $get: {
        input: { param: { project: string; instance: string; sha1Fingerprint: string } } & {
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
        output: SslCert
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/sql/v1beta4/projects/:project/instances/:instance/startExternalSync': {
      $post: {
        input: { param: { project: string; instance: string } } & {
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
        } & { json: SqlInstancesStartExternalSyncRequest }
        output: Operation
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/sql/v1beta4/projects/:project/instances/:instance/startReplica': {
      $post: {
        input: { param: { project: string; instance: string } } & {
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
        output: Operation
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/sql/v1beta4/projects/:project/instances/:instance/stopReplica': {
      $post: {
        input: { param: { project: string; instance: string } } & {
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
        output: Operation
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/sql/v1beta4/projects/:project/instances/:instance/truncateLog': {
      $post: {
        input: { param: { project: string; instance: string } } & {
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
        } & { json: InstancesTruncateLogRequest }
        output: Operation
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/sql/v1beta4/projects/:project/instances/:instance/users': {
      $delete: {
        input: { param: { project: string; instance: string } } & {
          query: {
            host?: string | undefined
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
        }
        output: Operation
        outputFormat: 'json'
        status: 200
      }
      $get: {
        input: { param: { project: string; instance: string } } & {
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
        output: UsersListResponse
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: { param: { project: string; instance: string } } & {
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
        } & { json: User }
        output: Operation
        outputFormat: 'json'
        status: 200
      }
      $put: {
        input: { param: { project: string; instance: string } } & {
          query: {
            host?: string | undefined
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
        } & { json: User }
        output: Operation
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/sql/v1beta4/projects/:project/instances/:instance/users/:name': {
      $get: {
        input: { param: { project: string; instance: string; name: string } } & {
          query: {
            host?: string | undefined
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
        output: User
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/sql/v1beta4/projects/:project/instances/:instance/verifyExternalSyncSettings': {
      $post: {
        input: { param: { project: string; instance: string } } & {
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
        } & { json: SqlInstancesVerifyExternalSyncSettingsRequest }
        output: SqlInstancesVerifyExternalSyncSettingsResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/sql/v1beta4/projects/:project/instances/:instance:generateEphemeralCert': {
      $post: {
        input: { param: { project: string; instance: string } } & {
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
        } & { json: GenerateEphemeralCertRequest }
        output: GenerateEphemeralCertResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/sql/v1beta4/projects/:project/operations': {
      $get: {
        input: { param: { project: string } } & {
          query: {
            instance?: string | undefined
            maxResults?: number | undefined
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
        output: OperationsListResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/sql/v1beta4/projects/:project/operations/:operation': {
      $get: {
        input: { param: { project: string; operation: string } } & {
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
        output: Operation
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/sql/v1beta4/projects/:project/tiers': {
      $get: {
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
        }
        output: TiersListResponse
        outputFormat: 'json'
        status: 200
      }
    }
  },
  '/'
>
export default routes
