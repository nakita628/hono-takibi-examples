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
type TimeOfDay = {
  hours?: number | undefined
  minutes?: number | undefined
  nanos?: number | undefined
  seconds?: number | undefined
}
type WeeklyMaintenanceWindow = {
  day?:
    | 'DAY_OF_WEEK_UNSPECIFIED'
    | 'MONDAY'
    | 'TUESDAY'
    | 'WEDNESDAY'
    | 'THURSDAY'
    | 'FRIDAY'
    | 'SATURDAY'
    | 'SUNDAY'
    | undefined
  duration?: string | undefined
  startTime?: TimeOfDay | undefined
}
type MaintenancePolicy = {
  createTime?: string | undefined
  description?: string | undefined
  updateTime?: string | undefined
  weeklyMaintenanceWindow?: WeeklyMaintenanceWindow[] | undefined
}
type MaintenanceSchedule = {
  canReschedule?: boolean | undefined
  endTime?: string | undefined
  scheduleDeadlineTime?: string | undefined
  startTime?: string | undefined
}
type NodeInfo = { id?: string | undefined; zone?: string | undefined }
type PersistenceConfig = {
  persistenceMode?: 'PERSISTENCE_MODE_UNSPECIFIED' | 'DISABLED' | 'RDB' | undefined
  rdbNextSnapshotTime?: string | undefined
  rdbSnapshotPeriod?:
    | 'SNAPSHOT_PERIOD_UNSPECIFIED'
    | 'ONE_HOUR'
    | 'SIX_HOURS'
    | 'TWELVE_HOURS'
    | 'TWENTY_FOUR_HOURS'
    | undefined
  rdbSnapshotStartTime?: string | undefined
}
type TlsCertificate = {
  cert?: string | undefined
  createTime?: string | undefined
  expireTime?: string | undefined
  serialNumber?: string | undefined
  sha1Fingerprint?: string | undefined
}
type Instance = {
  alternativeLocationId?: string | undefined
  authEnabled?: boolean | undefined
  authorizedNetwork?: string | undefined
  availableMaintenanceVersions?: string[] | undefined
  connectMode?: 'CONNECT_MODE_UNSPECIFIED' | 'DIRECT_PEERING' | 'PRIVATE_SERVICE_ACCESS' | undefined
  createTime?: string | undefined
  currentLocationId?: string | undefined
  customerManagedKey?: string | undefined
  displayName?: string | undefined
  host?: string | undefined
  labels?: { [x: string]: string } | undefined
  locationId?: string | undefined
  maintenancePolicy?: MaintenancePolicy | undefined
  maintenanceSchedule?: MaintenanceSchedule | undefined
  maintenanceVersion?: string | undefined
  memorySizeGb?: number | undefined
  name?: string | undefined
  nodes?: NodeInfo[] | undefined
  persistenceConfig?: PersistenceConfig | undefined
  persistenceIamIdentity?: string | undefined
  port?: number | undefined
  readEndpoint?: string | undefined
  readEndpointPort?: number | undefined
  readReplicasMode?:
    | 'READ_REPLICAS_MODE_UNSPECIFIED'
    | 'READ_REPLICAS_DISABLED'
    | 'READ_REPLICAS_ENABLED'
    | undefined
  redisConfigs?: { [x: string]: string } | undefined
  redisVersion?: string | undefined
  replicaCount?: number | undefined
  reservedIpRange?: string | undefined
  secondaryIpRange?: string | undefined
  serverCaCerts?: TlsCertificate[] | undefined
  state?:
    | 'STATE_UNSPECIFIED'
    | 'CREATING'
    | 'READY'
    | 'UPDATING'
    | 'DELETING'
    | 'REPAIRING'
    | 'MAINTENANCE'
    | 'IMPORTING'
    | 'FAILING_OVER'
    | undefined
  statusMessage?: string | undefined
  suspensionReasons?: ('SUSPENSION_REASON_UNSPECIFIED' | 'CUSTOMER_MANAGED_KEY_ISSUE')[] | undefined
  tier?: 'TIER_UNSPECIFIED' | 'BASIC' | 'STANDARD_HA' | undefined
  transitEncryptionMode?:
    | 'TRANSIT_ENCRYPTION_MODE_UNSPECIFIED'
    | 'SERVER_AUTHENTICATION'
    | 'DISABLED'
    | undefined
}
type InstanceAuthString = { authString?: string | undefined }
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
type GcsDestination = { uri?: string | undefined }
type OutputConfig = { gcsDestination?: GcsDestination | undefined }
type ExportInstanceRequest = { outputConfig?: OutputConfig | undefined }
type FailoverInstanceRequest = {
  dataProtectionMode?:
    | 'DATA_PROTECTION_MODE_UNSPECIFIED'
    | 'LIMITED_DATA_LOSS'
    | 'FORCE_DATA_LOSS'
    | undefined
}
type GcsSource = { uri?: string | undefined }
type InputConfig = { gcsSource?: GcsSource | undefined }
type ImportInstanceRequest = { inputConfig?: InputConfig | undefined }
type RescheduleMaintenanceRequest = {
  rescheduleType?:
    | 'RESCHEDULE_TYPE_UNSPECIFIED'
    | 'IMMEDIATE'
    | 'NEXT_AVAILABLE_WINDOW'
    | 'SPECIFIC_TIME'
    | undefined
  scheduleTime?: string | undefined
}
type UpgradeInstanceRequest = { redisVersion?: string | undefined }
type ListInstancesResponse = {
  instances?: Instance[] | undefined
  nextPageToken?: string | undefined
  unreachable?: string[] | undefined
}
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/v1/:name': {
      $delete: {
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
        } & { json: Instance }
        output: Operation
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/:name/authString': {
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
        output: InstanceAuthString
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
        }
        output: Empty
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/:name:export': {
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
        } & { json: ExportInstanceRequest }
        output: Operation
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/:name:failover': {
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
        } & { json: FailoverInstanceRequest }
        output: Operation
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/:name:import': {
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
        } & { json: ImportInstanceRequest }
        output: Operation
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/:name:rescheduleMaintenance': {
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
        } & { json: RescheduleMaintenanceRequest }
        output: Operation
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/:name:upgrade': {
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
        } & { json: UpgradeInstanceRequest }
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
  },
  '/'
>
export default routes
