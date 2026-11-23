type Empty = { [x: string]: unknown }
type GetDatabaseDdlResponse = {
  protoDescriptors?: string | undefined
  statements?: string[] | undefined
}
type UpdateDatabaseDdlRequest = {
  operationId?: string | undefined
  protoDescriptors?: string | undefined
  statements?: string[] | undefined
}
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
type Session = {
  approximateLastUseTime?: string | undefined
  createTime?: string | undefined
  creatorRole?: string | undefined
  labels?: { [x: string]: string } | undefined
  name?: string | undefined
}
type ListSessionsResponse = { nextPageToken?: string | undefined; sessions?: Session[] | undefined }
type CreateSessionRequest = { session?: Session | undefined }
type BatchCreateSessionsRequest = {
  sessionCount?: number | undefined
  sessionTemplate?: Session | undefined
}
type BatchCreateSessionsResponse = { session?: Session[] | undefined }
type ListOperationsResponse = {
  nextPageToken?: string | undefined
  operations?: Operation[] | undefined
}
type EncryptionConfig = { kmsKeyName?: string | undefined }
type EncryptionInfo = {
  encryptionStatus?: Status | undefined
  encryptionType?:
    | 'TYPE_UNSPECIFIED'
    | 'GOOGLE_DEFAULT_ENCRYPTION'
    | 'CUSTOMER_MANAGED_ENCRYPTION'
    | undefined
  kmsKeyVersion?: string | undefined
}
type BackupInfo = {
  backup?: string | undefined
  createTime?: string | undefined
  sourceDatabase?: string | undefined
  versionTime?: string | undefined
}
type RestoreInfo = {
  backupInfo?: BackupInfo | undefined
  sourceType?: 'TYPE_UNSPECIFIED' | 'BACKUP' | undefined
}
type Database = {
  createTime?: string | undefined
  databaseDialect?:
    | 'DATABASE_DIALECT_UNSPECIFIED'
    | 'GOOGLE_STANDARD_SQL'
    | 'POSTGRESQL'
    | undefined
  defaultLeader?: string | undefined
  earliestVersionTime?: string | undefined
  enableDropProtection?: boolean | undefined
  encryptionConfig?: EncryptionConfig | undefined
  encryptionInfo?: EncryptionInfo[] | undefined
  name?: string | undefined
  reconciling?: boolean | undefined
  restoreInfo?: RestoreInfo | undefined
  state?: 'STATE_UNSPECIFIED' | 'CREATING' | 'READY' | 'READY_OPTIMIZING' | undefined
  versionRetentionPeriod?: string | undefined
}
type LocalizedString = {
  args?: { [x: string]: string } | undefined
  message?: string | undefined
  token?: string | undefined
}
type DiagnosticMessage = {
  info?: LocalizedString | undefined
  metric?: LocalizedString | undefined
  metricSpecific?: boolean | undefined
  severity?: 'SEVERITY_UNSPECIFIED' | 'INFO' | 'WARNING' | 'ERROR' | 'FATAL' | undefined
  shortMessage?: LocalizedString | undefined
}
type DerivedMetric = {
  denominator?: LocalizedString | undefined
  numerator?: LocalizedString | undefined
}
type IndexedHotKey = { sparseHotKeys?: { [x: string]: number } | undefined }
type ContextValue = {
  label?: LocalizedString | undefined
  severity?: 'SEVERITY_UNSPECIFIED' | 'INFO' | 'WARNING' | 'ERROR' | 'FATAL' | undefined
  unit?: string | undefined
  value?: number | undefined
}
type KeyRangeInfo = {
  contextValues?: ContextValue[] | undefined
  endKeyIndex?: number | undefined
  info?: LocalizedString | undefined
  keysCount?: string | undefined
  metric?: LocalizedString | undefined
  startKeyIndex?: number | undefined
  timeOffset?: string | undefined
  unit?: LocalizedString | undefined
  value?: number | undefined
}
type KeyRangeInfos = { infos?: KeyRangeInfo[] | undefined; totalSize?: number | undefined }
type IndexedKeyRangeInfos = { keyRangeInfos?: { [x: string]: KeyRangeInfos } | undefined }
type MetricMatrixRow = { cols?: number[] | undefined }
type MetricMatrix = { rows?: MetricMatrixRow[] | undefined }
type Metric = {
  aggregation?: 'AGGREGATION_UNSPECIFIED' | 'MAX' | 'SUM' | undefined
  category?: LocalizedString | undefined
  derived?: DerivedMetric | undefined
  displayLabel?: LocalizedString | undefined
  hasNonzeroData?: boolean | undefined
  hotValue?: number | undefined
  indexedHotKeys?: { [x: string]: IndexedHotKey } | undefined
  indexedKeyRangeInfos?: { [x: string]: IndexedKeyRangeInfos } | undefined
  info?: LocalizedString | undefined
  matrix?: MetricMatrix | undefined
  unit?: LocalizedString | undefined
  visible?: boolean | undefined
}
type PrefixNode = {
  dataSourceNode?: boolean | undefined
  depth?: number | undefined
  endIndex?: number | undefined
  startIndex?: number | undefined
  word?: string | undefined
}
type VisualizationData = {
  dataSourceEndToken?: string | undefined
  dataSourceSeparatorToken?: string | undefined
  diagnosticMessages?: DiagnosticMessage[] | undefined
  endKeyStrings?: string[] | undefined
  hasPii?: boolean | undefined
  indexedKeys?: string[] | undefined
  keySeparator?: string | undefined
  keyUnit?: 'KEY_UNIT_UNSPECIFIED' | 'KEY' | 'CHUNK' | undefined
  metrics?: Metric[] | undefined
  prefixNodes?: PrefixNode[] | undefined
}
type ScanData = {
  data?: VisualizationData | undefined
  endTime?: string | undefined
  startTime?: string | undefined
}
type Scan = {
  details?: { [x: string]: { [x: string]: unknown } } | undefined
  endTime?: string | undefined
  name?: string | undefined
  scanData?: ScanData | undefined
  startTime?: string | undefined
}
type ListScansResponse = { nextPageToken?: string | undefined; scans?: Scan[] | undefined }
type ListBackupOperationsResponse = {
  nextPageToken?: string | undefined
  operations?: Operation[] | undefined
}
type Backup = {
  createTime?: string | undefined
  database?: string | undefined
  databaseDialect?:
    | 'DATABASE_DIALECT_UNSPECIFIED'
    | 'GOOGLE_STANDARD_SQL'
    | 'POSTGRESQL'
    | undefined
  encryptionInfo?: EncryptionInfo | undefined
  expireTime?: string | undefined
  maxExpireTime?: string | undefined
  name?: string | undefined
  referencingBackups?: string[] | undefined
  referencingDatabases?: string[] | undefined
  sizeBytes?: string | undefined
  state?: 'STATE_UNSPECIFIED' | 'CREATING' | 'READY' | undefined
  versionTime?: string | undefined
}
type ListBackupsResponse = { backups?: Backup[] | undefined; nextPageToken?: string | undefined }
type CopyBackupEncryptionConfig = {
  encryptionType?:
    | 'ENCRYPTION_TYPE_UNSPECIFIED'
    | 'USE_CONFIG_DEFAULT_OR_BACKUP_ENCRYPTION'
    | 'GOOGLE_DEFAULT_ENCRYPTION'
    | 'CUSTOMER_MANAGED_ENCRYPTION'
    | undefined
  kmsKeyName?: string | undefined
}
type CopyBackupRequest = {
  backupId?: string | undefined
  encryptionConfig?: CopyBackupEncryptionConfig | undefined
  expireTime?: string | undefined
  sourceBackup?: string | undefined
}
type ListDatabaseOperationsResponse = {
  nextPageToken?: string | undefined
  operations?: Operation[] | undefined
}
type DatabaseRole = { name?: string | undefined }
type ListDatabaseRolesResponse = {
  databaseRoles?: DatabaseRole[] | undefined
  nextPageToken?: string | undefined
}
type ListDatabasesResponse = {
  databases?: Database[] | undefined
  nextPageToken?: string | undefined
}
type CreateDatabaseRequest = {
  createStatement?: string | undefined
  databaseDialect?:
    | 'DATABASE_DIALECT_UNSPECIFIED'
    | 'GOOGLE_STANDARD_SQL'
    | 'POSTGRESQL'
    | undefined
  encryptionConfig?: EncryptionConfig | undefined
  extraStatements?: string[] | undefined
  protoDescriptors?: string | undefined
}
type RestoreDatabaseEncryptionConfig = {
  encryptionType?:
    | 'ENCRYPTION_TYPE_UNSPECIFIED'
    | 'USE_CONFIG_DEFAULT_OR_BACKUP_ENCRYPTION'
    | 'GOOGLE_DEFAULT_ENCRYPTION'
    | 'CUSTOMER_MANAGED_ENCRYPTION'
    | undefined
  kmsKeyName?: string | undefined
}
type RestoreDatabaseRequest = {
  backup?: string | undefined
  databaseId?: string | undefined
  encryptionConfig?: RestoreDatabaseEncryptionConfig | undefined
}
type ListInstanceConfigOperationsResponse = {
  nextPageToken?: string | undefined
  operations?: Operation[] | undefined
}
type ReplicaInfo = {
  defaultLeaderLocation?: boolean | undefined
  location?: string | undefined
  type?: 'TYPE_UNSPECIFIED' | 'READ_WRITE' | 'READ_ONLY' | 'WITNESS' | undefined
}
type InstanceConfig = {
  baseConfig?: string | undefined
  configType?: 'TYPE_UNSPECIFIED' | 'GOOGLE_MANAGED' | 'USER_MANAGED' | undefined
  displayName?: string | undefined
  etag?: string | undefined
  freeInstanceAvailability?:
    | 'FREE_INSTANCE_AVAILABILITY_UNSPECIFIED'
    | 'AVAILABLE'
    | 'UNSUPPORTED'
    | 'DISABLED'
    | 'QUOTA_EXCEEDED'
    | undefined
  labels?: { [x: string]: string } | undefined
  leaderOptions?: string[] | undefined
  name?: string | undefined
  optionalReplicas?: ReplicaInfo[] | undefined
  reconciling?: boolean | undefined
  replicas?: ReplicaInfo[] | undefined
  state?: 'STATE_UNSPECIFIED' | 'CREATING' | 'READY' | undefined
}
type ListInstanceConfigsResponse = {
  instanceConfigs?: InstanceConfig[] | undefined
  nextPageToken?: string | undefined
}
type CreateInstanceConfigRequest = {
  instanceConfig?: InstanceConfig | undefined
  instanceConfigId?: string | undefined
  validateOnly?: boolean | undefined
}
type FreeInstanceMetadata = {
  expireBehavior?:
    | 'EXPIRE_BEHAVIOR_UNSPECIFIED'
    | 'FREE_TO_PROVISIONED'
    | 'REMOVE_AFTER_GRACE_PERIOD'
    | undefined
  expireTime?: string | undefined
  upgradeTime?: string | undefined
}
type Instance = {
  config?: string | undefined
  createTime?: string | undefined
  displayName?: string | undefined
  endpointUris?: string[] | undefined
  freeInstanceMetadata?: FreeInstanceMetadata | undefined
  instanceType?: 'INSTANCE_TYPE_UNSPECIFIED' | 'PROVISIONED' | 'FREE_INSTANCE' | undefined
  labels?: { [x: string]: string } | undefined
  name?: string | undefined
  nodeCount?: number | undefined
  processingUnits?: number | undefined
  state?: 'STATE_UNSPECIFIED' | 'CREATING' | 'READY' | undefined
  updateTime?: string | undefined
}
type ListInstancesResponse = {
  instances?: Instance[] | undefined
  nextPageToken?: string | undefined
  unreachable?: string[] | undefined
}
type CreateInstanceRequest = { instance?: Instance | undefined; instanceId?: string | undefined }
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
type PartitionedDml = { [x: string]: unknown }
type ReadOnly = {
  exactStaleness?: string | undefined
  maxStaleness?: string | undefined
  minReadTimestamp?: string | undefined
  readTimestamp?: string | undefined
  returnReadTimestamp?: boolean | undefined
  strong?: boolean | undefined
}
type ReadWrite = {
  readLockMode?: 'READ_LOCK_MODE_UNSPECIFIED' | 'PESSIMISTIC' | 'OPTIMISTIC' | undefined
}
type TransactionOptions = {
  partitionedDml?: PartitionedDml | undefined
  readOnly?: ReadOnly | undefined
  readWrite?: ReadWrite | undefined
}
type RequestOptions = {
  priority?:
    | 'PRIORITY_UNSPECIFIED'
    | 'PRIORITY_LOW'
    | 'PRIORITY_MEDIUM'
    | 'PRIORITY_HIGH'
    | undefined
  requestTag?: string | undefined
  transactionTag?: string | undefined
}
type BeginTransactionRequest = {
  options?: TransactionOptions | undefined
  requestOptions?: RequestOptions | undefined
}
type Transaction = { id?: string | undefined; readTimestamp?: string | undefined }
type KeyRange = {
  endClosed?: { [x: string]: unknown }[] | undefined
  endOpen?: { [x: string]: unknown }[] | undefined
  startClosed?: { [x: string]: unknown }[] | undefined
  startOpen?: { [x: string]: unknown }[] | undefined
}
type KeySet = {
  all?: boolean | undefined
  keys?: { [x: string]: unknown }[][] | undefined
  ranges?: KeyRange[] | undefined
}
type Delete = { keySet?: KeySet | undefined; table?: string | undefined }
type Write = {
  columns?: string[] | undefined
  table?: string | undefined
  values?: { [x: string]: unknown }[][] | undefined
}
type Mutation = {
  delete?: Delete | undefined
  insert?: Write | undefined
  insertOrUpdate?: Write | undefined
  replace?: Write | undefined
  update?: Write | undefined
}
type CommitRequest = {
  mutations?: Mutation[] | undefined
  requestOptions?: RequestOptions | undefined
  returnCommitStats?: boolean | undefined
  singleUseTransaction?: TransactionOptions | undefined
  transactionId?: string | undefined
}
type CommitStats = { mutationCount?: string | undefined }
type CommitResponse = {
  commitStats?: CommitStats | undefined
  commitTimestamp?: string | undefined
}
type Field = { name?: string | undefined; type?: Type | undefined }
type StructType = { fields?: Field[] | undefined }
type Type = {
  arrayElementType?: Type | undefined
  code?:
    | 'TYPE_CODE_UNSPECIFIED'
    | 'BOOL'
    | 'INT64'
    | 'FLOAT64'
    | 'TIMESTAMP'
    | 'DATE'
    | 'STRING'
    | 'BYTES'
    | 'ARRAY'
    | 'STRUCT'
    | 'NUMERIC'
    | 'JSON'
    | 'PROTO'
    | 'ENUM'
    | undefined
  protoTypeFqn?: string | undefined
  structType?: StructType | undefined
  typeAnnotation?: 'TYPE_ANNOTATION_CODE_UNSPECIFIED' | 'PG_NUMERIC' | 'PG_JSONB' | undefined
}
type Statement = {
  paramTypes?: { [x: string]: Type } | undefined
  params?: { [x: string]: { [x: string]: unknown } } | undefined
  sql?: string | undefined
}
type TransactionSelector = {
  begin?: TransactionOptions | undefined
  id?: string | undefined
  singleUse?: TransactionOptions | undefined
}
type ExecuteBatchDmlRequest = {
  requestOptions?: RequestOptions | undefined
  seqno?: string | undefined
  statements?: Statement[] | undefined
  transaction?: TransactionSelector | undefined
}
type ResultSetMetadata = {
  rowType?: StructType | undefined
  transaction?: Transaction | undefined
  undeclaredParameters?: StructType | undefined
}
type ChildLink = {
  childIndex?: number | undefined
  type?: string | undefined
  variable?: string | undefined
}
type ShortRepresentation = {
  description?: string | undefined
  subqueries?: { [x: string]: number } | undefined
}
type PlanNode = {
  childLinks?: ChildLink[] | undefined
  displayName?: string | undefined
  executionStats?: { [x: string]: { [x: string]: unknown } } | undefined
  index?: number | undefined
  kind?: 'KIND_UNSPECIFIED' | 'RELATIONAL' | 'SCALAR' | undefined
  metadata?: { [x: string]: { [x: string]: unknown } } | undefined
  shortRepresentation?: ShortRepresentation | undefined
}
type QueryPlan = { planNodes?: PlanNode[] | undefined }
type ResultSetStats = {
  queryPlan?: QueryPlan | undefined
  queryStats?: { [x: string]: { [x: string]: unknown } } | undefined
  rowCountExact?: string | undefined
  rowCountLowerBound?: string | undefined
}
type ResultSet = {
  metadata?: ResultSetMetadata | undefined
  rows?: { [x: string]: unknown }[][] | undefined
  stats?: ResultSetStats | undefined
}
type ExecuteBatchDmlResponse = { resultSets?: ResultSet[] | undefined; status?: Status | undefined }
type QueryOptions = {
  optimizerStatisticsPackage?: string | undefined
  optimizerVersion?: string | undefined
}
type ExecuteSqlRequest = {
  dataBoostEnabled?: boolean | undefined
  paramTypes?: { [x: string]: Type } | undefined
  params?: { [x: string]: { [x: string]: unknown } } | undefined
  partitionToken?: string | undefined
  queryMode?: 'NORMAL' | 'PLAN' | 'PROFILE' | undefined
  queryOptions?: QueryOptions | undefined
  requestOptions?: RequestOptions | undefined
  resumeToken?: string | undefined
  seqno?: string | undefined
  sql?: string | undefined
  transaction?: TransactionSelector | undefined
}
type PartialResultSet = {
  chunkedValue?: boolean | undefined
  metadata?: ResultSetMetadata | undefined
  resumeToken?: string | undefined
  stats?: ResultSetStats | undefined
  values?: { [x: string]: unknown }[] | undefined
}
type PartitionOptions = {
  maxPartitions?: string | undefined
  partitionSizeBytes?: string | undefined
}
type PartitionQueryRequest = {
  paramTypes?: { [x: string]: Type } | undefined
  params?: { [x: string]: { [x: string]: unknown } } | undefined
  partitionOptions?: PartitionOptions | undefined
  sql?: string | undefined
  transaction?: TransactionSelector | undefined
}
type Partition = { partitionToken?: string | undefined }
type PartitionResponse = {
  partitions?: Partition[] | undefined
  transaction?: Transaction | undefined
}
type PartitionReadRequest = {
  columns?: string[] | undefined
  index?: string | undefined
  keySet?: KeySet | undefined
  partitionOptions?: PartitionOptions | undefined
  table?: string | undefined
  transaction?: TransactionSelector | undefined
}
type ReadRequest = {
  columns?: string[] | undefined
  dataBoostEnabled?: boolean | undefined
  index?: string | undefined
  keySet?: KeySet | undefined
  limit?: string | undefined
  partitionToken?: string | undefined
  requestOptions?: RequestOptions | undefined
  resumeToken?: string | undefined
  table?: string | undefined
  transaction?: TransactionSelector | undefined
}
type RollbackRequest = { transactionId?: string | undefined }
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/v1/:database': {
      $delete: {
        input: { param: { database: string } } & {
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
    '/v1/:database/ddl': {
      $get: {
        input: { param: { database: string } } & {
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
        output: GetDatabaseDdlResponse
        outputFormat: 'json'
        status: 200
      }
      $patch: {
        input: { param: { database: string } } & {
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
        } & { json: UpdateDatabaseDdlRequest }
        output: Operation
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/:database/sessions': {
      $get: {
        input: { param: { database: string } } & {
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
        output: ListSessionsResponse
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: { param: { database: string } } & {
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
        } & { json: CreateSessionRequest }
        output: Session
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/:database/sessions:batchCreate': {
      $post: {
        input: { param: { database: string } } & {
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
        } & { json: BatchCreateSessionsRequest }
        output: BatchCreateSessionsResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/:name': {
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
        output: Empty
        outputFormat: 'json'
        status: 200
      }
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
      $patch: {
        input: { param: { name: string } } & {
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
        } & { json: Database }
        output: Operation
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/:name/scans': {
      $get: {
        input: { param: { name: string } } & {
          query: {
            endTime?: string | undefined
            startTime?: string | undefined
            view?: 'VIEW_UNSPECIFIED' | 'SUMMARY' | 'FULL' | undefined
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
        output: Scan
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
    '/v1/:parent': {
      $get: {
        input: { param: { parent: string } } & {
          query: {
            filter?: string | undefined
            pageSize?: number | undefined
            pageToken?: string | undefined
            view?: 'VIEW_UNSPECIFIED' | 'SUMMARY' | 'FULL' | undefined
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
        output: ListScansResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/:parent/backupOperations': {
      $get: {
        input: { param: { parent: string } } & {
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
        output: ListBackupOperationsResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/:parent/backups': {
      $get: {
        input: { param: { parent: string } } & {
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
        output: ListBackupsResponse
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: { param: { parent: string } } & {
          query: {
            backupId?: string | undefined
            'encryptionConfig.encryptionType'?:
              | 'ENCRYPTION_TYPE_UNSPECIFIED'
              | 'USE_DATABASE_ENCRYPTION'
              | 'GOOGLE_DEFAULT_ENCRYPTION'
              | 'CUSTOMER_MANAGED_ENCRYPTION'
              | undefined
            'encryptionConfig.kmsKeyName'?: string | undefined
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
        } & { json: Backup }
        output: Operation
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/:parent/backups:copy': {
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
        } & { json: CopyBackupRequest }
        output: Operation
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/:parent/databaseOperations': {
      $get: {
        input: { param: { parent: string } } & {
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
        output: ListDatabaseOperationsResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/:parent/databaseRoles': {
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
        output: ListDatabaseRolesResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/:parent/databases': {
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
        output: ListDatabasesResponse
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
        } & { json: CreateDatabaseRequest }
        output: Operation
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/:parent/databases:restore': {
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
        } & { json: RestoreDatabaseRequest }
        output: Operation
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/:parent/instanceConfigOperations': {
      $get: {
        input: { param: { parent: string } } & {
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
        output: ListInstanceConfigOperationsResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/:parent/instanceConfigs': {
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
        output: ListInstanceConfigsResponse
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
        } & { json: CreateInstanceConfigRequest }
        output: Operation
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/:parent/instances': {
      $get: {
        input: { param: { parent: string } } & {
          query: {
            filter?: string | undefined
            instanceDeadline?: string | undefined
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
        output: ListInstancesResponse
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
        } & { json: CreateInstanceRequest }
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
  } & {
    '/v1/:session:beginTransaction': {
      $post: {
        input: { param: { session: string } } & {
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
        } & { json: BeginTransactionRequest }
        output: Transaction
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/:session:commit': {
      $post: {
        input: { param: { session: string } } & {
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
        } & { json: CommitRequest }
        output: CommitResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/:session:executeBatchDml': {
      $post: {
        input: { param: { session: string } } & {
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
        } & { json: ExecuteBatchDmlRequest }
        output: ExecuteBatchDmlResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/:session:executeSql': {
      $post: {
        input: { param: { session: string } } & {
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
        } & { json: ExecuteSqlRequest }
        output: ResultSet
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/:session:executeStreamingSql': {
      $post: {
        input: { param: { session: string } } & {
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
        } & { json: ExecuteSqlRequest }
        output: PartialResultSet
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/:session:partitionQuery': {
      $post: {
        input: { param: { session: string } } & {
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
        } & { json: PartitionQueryRequest }
        output: PartitionResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/:session:partitionRead': {
      $post: {
        input: { param: { session: string } } & {
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
        } & { json: PartitionReadRequest }
        output: PartitionResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/:session:read': {
      $post: {
        input: { param: { session: string } } & {
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
        } & { json: ReadRequest }
        output: ResultSet
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/:session:rollback': {
      $post: {
        input: { param: { session: string } } & {
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
        } & { json: RollbackRequest }
        output: Empty
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/:session:streamingRead': {
      $post: {
        input: { param: { session: string } } & {
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
        } & { json: ReadRequest }
        output: PartialResultSet
        outputFormat: 'json'
        status: 200
      }
    }
  },
  '/'
>
export default routes
