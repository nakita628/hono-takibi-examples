type Empty = { [x: string]: unknown }
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
type Snapshot = {
  createTime?: string | undefined
  description?: string | undefined
  filesystemUsedBytes?: string | undefined
  labels?: { [x: string]: string } | undefined
  name?: string | undefined
  state?: 'STATE_UNSPECIFIED' | 'CREATING' | 'READY' | 'DELETING' | undefined
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
type CancelOperationRequest = { [x: string]: unknown }
type RestoreInstanceRequest = { fileShare?: string | undefined; sourceBackup?: string | undefined }
type RevertInstanceRequest = { targetSnapshotId?: string | undefined }
type Backup = {
  capacityGb?: string | undefined
  createTime?: string | undefined
  description?: string | undefined
  downloadBytes?: string | undefined
  kmsKey?: string | undefined
  labels?: { [x: string]: string } | undefined
  name?: string | undefined
  satisfiesPzs?: boolean | undefined
  sourceFileShare?: string | undefined
  sourceInstance?: string | undefined
  sourceInstanceTier?:
    | 'TIER_UNSPECIFIED'
    | 'STANDARD'
    | 'PREMIUM'
    | 'BASIC_HDD'
    | 'BASIC_SSD'
    | 'HIGH_SCALE_SSD'
    | 'ENTERPRISE'
    | undefined
  state?:
    | 'STATE_UNSPECIFIED'
    | 'CREATING'
    | 'FINALIZING'
    | 'READY'
    | 'DELETING'
    | 'INVALID'
    | undefined
  storageBytes?: string | undefined
}
type ListBackupsResponse = {
  backups?: Backup[] | undefined
  nextPageToken?: string | undefined
  unreachable?: string[] | undefined
}
type NfsExportOptions = {
  accessMode?: 'ACCESS_MODE_UNSPECIFIED' | 'READ_ONLY' | 'READ_WRITE' | undefined
  anonGid?: string | undefined
  anonUid?: string | undefined
  ipRanges?: string[] | undefined
  squashMode?: 'SQUASH_MODE_UNSPECIFIED' | 'NO_ROOT_SQUASH' | 'ROOT_SQUASH' | undefined
}
type FileShareConfig = {
  capacityGb?: string | undefined
  name?: string | undefined
  nfsExportOptions?: NfsExportOptions[] | undefined
  sourceBackup?: string | undefined
}
type NetworkConfig = {
  connectMode?: 'CONNECT_MODE_UNSPECIFIED' | 'DIRECT_PEERING' | 'PRIVATE_SERVICE_ACCESS' | undefined
  ipAddresses?: string[] | undefined
  modes?: ('ADDRESS_MODE_UNSPECIFIED' | 'MODE_IPV4')[] | undefined
  network?: string | undefined
  reservedIpRange?: string | undefined
}
type Instance = {
  createTime?: string | undefined
  description?: string | undefined
  etag?: string | undefined
  fileShares?: FileShareConfig[] | undefined
  kmsKeyName?: string | undefined
  labels?: { [x: string]: string } | undefined
  name?: string | undefined
  networks?: NetworkConfig[] | undefined
  satisfiesPzs?: boolean | undefined
  state?:
    | 'STATE_UNSPECIFIED'
    | 'CREATING'
    | 'READY'
    | 'REPAIRING'
    | 'DELETING'
    | 'ERROR'
    | 'RESTORING'
    | 'SUSPENDED'
    | 'SUSPENDING'
    | 'RESUMING'
    | 'REVERTING'
    | undefined
  statusMessage?: string | undefined
  suspensionReasons?: ('SUSPENSION_REASON_UNSPECIFIED' | 'KMS_KEY_ISSUE')[] | undefined
  tier?:
    | 'TIER_UNSPECIFIED'
    | 'STANDARD'
    | 'PREMIUM'
    | 'BASIC_HDD'
    | 'BASIC_SSD'
    | 'HIGH_SCALE_SSD'
    | 'ENTERPRISE'
    | undefined
}
type ListInstancesResponse = {
  instances?: Instance[] | undefined
  nextPageToken?: string | undefined
  unreachable?: string[] | undefined
}
type ListSnapshotsResponse = {
  nextPageToken?: string | undefined
  snapshots?: Snapshot[] | undefined
}
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/v1/:name': {
      $delete: {
        input: { param: { name: string } } & {
          query: {
            force?: boolean | undefined
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
        } & { json: Snapshot }
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
            includeUnrevealedLocations?: boolean | undefined
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
    '/v1/:name:restore': {
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
        } & { json: RestoreInstanceRequest }
        output: Operation
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/:name:revert': {
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
        } & { json: RevertInstanceRequest }
        output: Operation
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
    '/v1/:parent/instances': {
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
        output: ListInstancesResponse
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: { param: { parent: string } } & {
          query: {
            instanceId?: string | undefined
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
        } & { json: Instance }
        output: Operation
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/:parent/snapshots': {
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
        output: ListSnapshotsResponse
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: { param: { parent: string } } & {
          query: {
            snapshotId?: string | undefined
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
        } & { json: Snapshot }
        output: Operation
        outputFormat: 'json'
        status: 200
      }
    }
  },
  '/'
>
export default routes
