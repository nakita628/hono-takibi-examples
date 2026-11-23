type Empty = { [x: string]: unknown }
type Location = {
  displayName?: string | undefined
  labels?: { [x: string]: string } | undefined
  locationId?: string | undefined
  metadata?: { [x: string]: { [x: string]: unknown } } | undefined
  name?: string | undefined
}
type Status = {
  code?: number | undefined
  details?: { [x: string]: { [x: string]: unknown } }[] | undefined
  message?: string | undefined
}
type EncryptionInfo = {
  encryptionStatus?: Status | undefined
  encryptionType?:
    | 'ENCRYPTION_TYPE_UNSPECIFIED'
    | 'GOOGLE_DEFAULT_ENCRYPTION'
    | 'CUSTOMER_MANAGED_ENCRYPTION'
    | undefined
  kmsKeyVersion?: string | undefined
}
type ClusterState = {
  encryptionInfo?: EncryptionInfo[] | undefined
  replicationState?:
    | 'STATE_NOT_KNOWN'
    | 'INITIALIZING'
    | 'PLANNED_MAINTENANCE'
    | 'UNPLANNED_MAINTENANCE'
    | 'READY'
    | 'READY_OPTIMIZING'
    | undefined
}
type Intersection = { rules?: GcRule[] | undefined }
type Union = { rules?: GcRule[] | undefined }
type GcRule = {
  intersection?: Intersection | undefined
  maxAge?: string | undefined
  maxNumVersions?: number | undefined
  union?: Union | undefined
}
type ColumnFamilyStats = {
  averageCellsPerColumn?: number | undefined
  averageColumnsPerRow?: number | undefined
  logicalDataBytes?: string | undefined
}
type ColumnFamily = { gcRule?: GcRule | undefined; stats?: ColumnFamilyStats | undefined }
type BackupInfo = {
  backup?: string | undefined
  endTime?: string | undefined
  sourceBackup?: string | undefined
  sourceTable?: string | undefined
  startTime?: string | undefined
}
type RestoreInfo = {
  backupInfo?: BackupInfo | undefined
  sourceType?: 'RESTORE_SOURCE_TYPE_UNSPECIFIED' | 'BACKUP' | undefined
}
type TableStats = {
  averageCellsPerColumn?: number | undefined
  averageColumnsPerRow?: number | undefined
  logicalDataBytes?: string | undefined
  rowCount?: string | undefined
}
type Table = {
  clusterStates?: { [x: string]: ClusterState } | undefined
  columnFamilies?: { [x: string]: ColumnFamily } | undefined
  deletionProtection?: boolean | undefined
  granularity?: 'TIMESTAMP_GRANULARITY_UNSPECIFIED' | 'MILLIS' | undefined
  name?: string | undefined
  restoreInfo?: RestoreInfo | undefined
  stats?: TableStats | undefined
}
type Operation = {
  done?: boolean | undefined
  error?: Status | undefined
  metadata?: { [x: string]: { [x: string]: unknown } } | undefined
  name?: string | undefined
  response?: { [x: string]: { [x: string]: unknown } } | undefined
}
type AutoscalingLimits = { maxServeNodes?: number | undefined; minServeNodes?: number | undefined }
type AutoscalingTargets = {
  cpuUtilizationPercent?: number | undefined
  storageUtilizationGibPerNode?: number | undefined
}
type ClusterAutoscalingConfig = {
  autoscalingLimits?: AutoscalingLimits | undefined
  autoscalingTargets?: AutoscalingTargets | undefined
}
type ClusterConfig = { clusterAutoscalingConfig?: ClusterAutoscalingConfig | undefined }
type EncryptionConfig = { kmsKeyName?: string | undefined }
type Cluster = {
  clusterConfig?: ClusterConfig | undefined
  defaultStorageType?: 'STORAGE_TYPE_UNSPECIFIED' | 'SSD' | 'HDD' | undefined
  encryptionConfig?: EncryptionConfig | undefined
  location?: string | undefined
  name?: string | undefined
  serveNodes?: number | undefined
  state?: 'STATE_NOT_KNOWN' | 'READY' | 'CREATING' | 'RESIZING' | 'DISABLED' | undefined
}
type ListLocationsResponse = {
  locations?: Location[] | undefined
  nextPageToken?: string | undefined
}
type ListOperationsResponse = {
  nextPageToken?: string | undefined
  operations?: Operation[] | undefined
}
type CheckConsistencyRequest = { consistencyToken?: string | undefined }
type CheckConsistencyResponse = { consistent?: boolean | undefined }
type DropRowRangeRequest = {
  deleteAllDataFromTable?: boolean | undefined
  rowKeyPrefix?: string | undefined
}
type GenerateConsistencyTokenRequest = { [x: string]: unknown }
type GenerateConsistencyTokenResponse = { consistencyToken?: string | undefined }
type Modification = {
  create?: ColumnFamily | undefined
  drop?: boolean | undefined
  id?: string | undefined
  update?: ColumnFamily | undefined
}
type ModifyColumnFamiliesRequest = { modifications?: Modification[] | undefined }
type UndeleteTableRequest = { [x: string]: unknown }
type MultiClusterRoutingUseAny = { clusterIds?: string[] | undefined }
type SingleClusterRouting = {
  allowTransactionalWrites?: boolean | undefined
  clusterId?: string | undefined
}
type AppProfile = {
  description?: string | undefined
  etag?: string | undefined
  multiClusterRoutingUseAny?: MultiClusterRoutingUseAny | undefined
  name?: string | undefined
  singleClusterRouting?: SingleClusterRouting | undefined
}
type ListAppProfilesResponse = {
  appProfiles?: AppProfile[] | undefined
  failedLocations?: string[] | undefined
  nextPageToken?: string | undefined
}
type Backup = {
  encryptionInfo?: EncryptionInfo | undefined
  endTime?: string | undefined
  expireTime?: string | undefined
  name?: string | undefined
  sizeBytes?: string | undefined
  sourceBackup?: string | undefined
  sourceTable?: string | undefined
  startTime?: string | undefined
  state?: 'STATE_UNSPECIFIED' | 'CREATING' | 'READY' | undefined
}
type ListBackupsResponse = { backups?: Backup[] | undefined; nextPageToken?: string | undefined }
type CopyBackupRequest = {
  backupId?: string | undefined
  expireTime?: string | undefined
  sourceBackup?: string | undefined
}
type ListClustersResponse = {
  clusters?: Cluster[] | undefined
  failedLocations?: string[] | undefined
  nextPageToken?: string | undefined
}
type HotTablet = {
  endKey?: string | undefined
  endTime?: string | undefined
  name?: string | undefined
  nodeCpuUsagePercent?: number | undefined
  startKey?: string | undefined
  startTime?: string | undefined
  tableName?: string | undefined
}
type ListHotTabletsResponse = {
  hotTablets?: HotTablet[] | undefined
  nextPageToken?: string | undefined
}
type Instance = {
  createTime?: string | undefined
  displayName?: string | undefined
  labels?: { [x: string]: string } | undefined
  name?: string | undefined
  satisfiesPzs?: boolean | undefined
  state?: 'STATE_NOT_KNOWN' | 'READY' | 'CREATING' | undefined
  type?: 'TYPE_UNSPECIFIED' | 'PRODUCTION' | 'DEVELOPMENT' | undefined
}
type ListInstancesResponse = {
  failedLocations?: string[] | undefined
  instances?: Instance[] | undefined
  nextPageToken?: string | undefined
}
type CreateInstanceRequest = {
  clusters?: { [x: string]: Cluster } | undefined
  instance?: Instance | undefined
  instanceId?: string | undefined
  parent?: string | undefined
}
type ListTablesResponse = { nextPageToken?: string | undefined; tables?: Table[] | undefined }
type Split = { key?: string | undefined }
type CreateTableRequest = {
  initialSplits?: Split[] | undefined
  table?: Table | undefined
  tableId?: string | undefined
}
type RestoreTableRequest = { backup?: string | undefined; tableId?: string | undefined }
type GetPolicyOptions = { requestedPolicyVersion?: number | undefined }
type GetIamPolicyRequest = { options?: GetPolicyOptions | undefined }
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
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/v2/:name': {
      $delete: {
        input: { param: { name: string } } & {
          query: {
            ignoreWarnings?: boolean | undefined
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
            view?:
              | 'VIEW_UNSPECIFIED'
              | 'NAME_ONLY'
              | 'SCHEMA_VIEW'
              | 'REPLICATION_VIEW'
              | 'ENCRYPTION_VIEW'
              | 'STATS_VIEW'
              | 'FULL'
              | undefined
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
        output: Location
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
        } & { json: Table }
        output: Operation
        outputFormat: 'json'
        status: 200
      }
      $put: {
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
        } & { json: Cluster }
        output: Operation
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v2/:name/locations': {
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
        output: ListOperationsResponse
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
        }
        output: Empty
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v2/:name:checkConsistency': {
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
        } & { json: CheckConsistencyRequest }
        output: CheckConsistencyResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v2/:name:dropRowRange': {
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
        } & { json: DropRowRangeRequest }
        output: Empty
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v2/:name:generateConsistencyToken': {
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
        } & { json: GenerateConsistencyTokenRequest }
        output: GenerateConsistencyTokenResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v2/:name:modifyColumnFamilies': {
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
        } & { json: ModifyColumnFamiliesRequest }
        output: Table
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v2/:name:undelete': {
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
        } & { json: UndeleteTableRequest }
        output: Operation
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v2/:parent/appProfiles': {
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
        output: ListAppProfilesResponse
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: { param: { parent: string } } & {
          query: {
            appProfileId?: string | undefined
            ignoreWarnings?: boolean | undefined
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
        } & { json: AppProfile }
        output: AppProfile
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v2/:parent/backups': {
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
        output: ListBackupsResponse
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: { param: { parent: string } } & {
          query: {
            backupId?: string | undefined
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
    '/v2/:parent/backups:copy': {
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
    '/v2/:parent/clusters': {
      $get: {
        input: { param: { parent: string } } & {
          query: {
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
        output: ListClustersResponse
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: { param: { parent: string } } & {
          query: {
            clusterId?: string | undefined
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
        } & { json: Cluster }
        output: Operation
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v2/:parent/hotTablets': {
      $get: {
        input: { param: { parent: string } } & {
          query: {
            endTime?: string | undefined
            pageSize?: number | undefined
            pageToken?: string | undefined
            startTime?: string | undefined
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
        output: ListHotTabletsResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v2/:parent/instances': {
      $get: {
        input: { param: { parent: string } } & {
          query: {
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
    '/v2/:parent/tables': {
      $get: {
        input: { param: { parent: string } } & {
          query: {
            pageSize?: number | undefined
            pageToken?: string | undefined
            view?:
              | 'VIEW_UNSPECIFIED'
              | 'NAME_ONLY'
              | 'SCHEMA_VIEW'
              | 'REPLICATION_VIEW'
              | 'ENCRYPTION_VIEW'
              | 'STATS_VIEW'
              | 'FULL'
              | undefined
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
        output: ListTablesResponse
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
        } & { json: CreateTableRequest }
        output: Table
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v2/:parent/tables:restore': {
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
        } & { json: RestoreTableRequest }
        output: Operation
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v2/:resource:getIamPolicy': {
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
        } & { json: SetIamPolicyRequest }
        output: Policy
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
        } & { json: TestIamPermissionsRequest }
        output: TestIamPermissionsResponse
        outputFormat: 'json'
        status: 200
      }
    }
  },
  '/'
>
export default routes
