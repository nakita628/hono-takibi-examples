type ApplySoftwareUpdateRequest = { applyAll?: boolean | undefined; nodeIds?: string[] | undefined }
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
type RescheduleMaintenanceRequest = {
  rescheduleType?:
    | 'RESCHEDULE_TYPE_UNSPECIFIED'
    | 'IMMEDIATE'
    | 'NEXT_AVAILABLE_WINDOW'
    | 'SPECIFIC_TIME'
    | undefined
  scheduleTime?: string | undefined
}
type Empty = { [x: string]: unknown }
type InstanceMessage = {
  code?: 'CODE_UNSPECIFIED' | 'ZONE_DISTRIBUTION_UNBALANCED' | undefined
  message?: string | undefined
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
type GoogleCloudMemcacheV1beta2MaintenancePolicy = {
  createTime?: string | undefined
  description?: string | undefined
  updateTime?: string | undefined
  weeklyMaintenanceWindow?: WeeklyMaintenanceWindow[] | undefined
}
type MaintenanceSchedule = {
  endTime?: string | undefined
  scheduleDeadlineTime?: string | undefined
  startTime?: string | undefined
}
type MemcacheParameters = { id?: string | undefined; params?: { [x: string]: string } | undefined }
type Node = {
  host?: string | undefined
  nodeId?: string | undefined
  parameters?: MemcacheParameters | undefined
  port?: number | undefined
  state?: 'STATE_UNSPECIFIED' | 'CREATING' | 'READY' | 'DELETING' | 'UPDATING' | undefined
  updateAvailable?: boolean | undefined
  zone?: string | undefined
}
type NodeConfig = { cpuCount?: number | undefined; memorySizeMb?: number | undefined }
type Instance = {
  authorizedNetwork?: string | undefined
  createTime?: string | undefined
  discoveryEndpoint?: string | undefined
  displayName?: string | undefined
  instanceMessages?: InstanceMessage[] | undefined
  labels?: { [x: string]: string } | undefined
  maintenancePolicy?: GoogleCloudMemcacheV1beta2MaintenancePolicy | undefined
  maintenanceSchedule?: MaintenanceSchedule | undefined
  memcacheFullVersion?: string | undefined
  memcacheNodes?: Node[] | undefined
  memcacheVersion?: 'MEMCACHE_VERSION_UNSPECIFIED' | 'MEMCACHE_1_5' | undefined
  name?: string | undefined
  nodeConfig?: NodeConfig | undefined
  nodeCount?: number | undefined
  parameters?: MemcacheParameters | undefined
  state?:
    | 'STATE_UNSPECIFIED'
    | 'CREATING'
    | 'READY'
    | 'UPDATING'
    | 'DELETING'
    | 'PERFORMING_MAINTENANCE'
    | undefined
  updateAvailable?: boolean | undefined
  updateTime?: string | undefined
  zones?: string[] | undefined
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
type ApplyParametersRequest = { applyAll?: boolean | undefined; nodeIds?: string[] | undefined }
type CancelOperationRequest = { [x: string]: unknown }
type UpdateParametersRequest = {
  parameters?: MemcacheParameters | undefined
  updateMask?: string | undefined
}
type ListInstancesResponse = {
  nextPageToken?: string | undefined
  resources?: Instance[] | undefined
  unreachable?: string[] | undefined
}
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/v1beta2/:instance:applySoftwareUpdate': {
      $post: {
        input: { param: { instance: string } } & {
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
        } & { json: ApplySoftwareUpdateRequest }
        output: Operation
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1beta2/:instance:rescheduleMaintenance': {
      $post: {
        input: { param: { instance: string } } & {
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
    '/v1beta2/:name': {
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
    '/v1beta2/:name/locations': {
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
    '/v1beta2/:name/operations': {
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
    '/v1beta2/:name:applyParameters': {
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
        } & { json: ApplyParametersRequest }
        output: Operation
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1beta2/:name:cancel': {
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
    '/v1beta2/:name:updateParameters': {
      $patch: {
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
        } & { json: UpdateParametersRequest }
        output: Operation
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1beta2/:parent/instances': {
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
  },
  '/'
>
export default routes
