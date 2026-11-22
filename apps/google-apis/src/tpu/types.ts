type Empty = { [x: string]: unknown }
type RuntimeVersion = { name?: string | undefined; version?: string | undefined }
type AcceleratorConfig = {
  topology?: string | undefined
  type?: 'TYPE_UNSPECIFIED' | 'V2' | 'V3' | 'V4' | undefined
}
type AttachedDisk = {
  mode?: 'DISK_MODE_UNSPECIFIED' | 'READ_WRITE' | 'READ_ONLY' | undefined
  sourceDisk?: string | undefined
}
type NetworkConfig = {
  canIpForward?: boolean | undefined
  enableExternalIps?: boolean | undefined
  network?: string | undefined
  subnetwork?: string | undefined
}
type AccessConfig = { externalIp?: string | undefined }
type NetworkEndpoint = {
  accessConfig?: AccessConfig | undefined
  ipAddress?: string | undefined
  port?: number | undefined
}
type SchedulingConfig = { preemptible?: boolean | undefined; reserved?: boolean | undefined }
type ServiceAccount = { email?: string | undefined; scope?: string[] | undefined }
type ShieldedInstanceConfig = { enableSecureBoot?: boolean | undefined }
type Symptom = {
  createTime?: string | undefined
  details?: string | undefined
  symptomType?:
    | 'SYMPTOM_TYPE_UNSPECIFIED'
    | 'LOW_MEMORY'
    | 'OUT_OF_MEMORY'
    | 'EXECUTE_TIMED_OUT'
    | 'MESH_BUILD_FAIL'
    | 'HBM_OUT_OF_MEMORY'
    | 'PROJECT_ABUSE'
    | undefined
  workerId?: string | undefined
}
type Node = {
  acceleratorConfig?: AcceleratorConfig | undefined
  acceleratorType?: string | undefined
  apiVersion?: 'API_VERSION_UNSPECIFIED' | 'V1_ALPHA1' | 'V1' | 'V2_ALPHA1' | 'V2' | undefined
  cidrBlock?: string | undefined
  createTime?: string | undefined
  dataDisks?: AttachedDisk[] | undefined
  description?: string | undefined
  health?:
    | 'HEALTH_UNSPECIFIED'
    | 'HEALTHY'
    | 'TIMEOUT'
    | 'UNHEALTHY_TENSORFLOW'
    | 'UNHEALTHY_MAINTENANCE'
    | undefined
  healthDescription?: string | undefined
  id?: string | undefined
  labels?: { [x: string]: string } | undefined
  metadata?: { [x: string]: string } | undefined
  name?: string | undefined
  networkConfig?: NetworkConfig | undefined
  networkEndpoints?: NetworkEndpoint[] | undefined
  runtimeVersion?: string | undefined
  schedulingConfig?: SchedulingConfig | undefined
  serviceAccount?: ServiceAccount | undefined
  shieldedInstanceConfig?: ShieldedInstanceConfig | undefined
  state?:
    | 'STATE_UNSPECIFIED'
    | 'CREATING'
    | 'READY'
    | 'RESTARTING'
    | 'REIMAGING'
    | 'DELETING'
    | 'REPAIRING'
    | 'STOPPED'
    | 'STOPPING'
    | 'STARTING'
    | 'PREEMPTED'
    | 'TERMINATED'
    | 'HIDING'
    | 'HIDDEN'
    | 'UNHIDING'
    | undefined
  symptoms?: Symptom[] | undefined
  tags?: string[] | undefined
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
type GetGuestAttributesRequest = {
  queryPath?: string | undefined
  workerIds?: string[] | undefined
}
type GuestAttributesEntry = {
  key?: string | undefined
  namespace?: string | undefined
  value?: string | undefined
}
type GuestAttributesValue = { items?: GuestAttributesEntry[] | undefined }
type GuestAttributes = {
  queryPath?: string | undefined
  queryValue?: GuestAttributesValue | undefined
}
type GetGuestAttributesResponse = { guestAttributes?: GuestAttributes[] | undefined }
type StartNodeRequest = { [x: string]: unknown }
type StopNodeRequest = { [x: string]: unknown }
type AcceleratorType = {
  acceleratorConfigs?: AcceleratorConfig[] | undefined
  name?: string | undefined
  type?: string | undefined
}
type ListAcceleratorTypesResponse = {
  acceleratorTypes?: AcceleratorType[] | undefined
  nextPageToken?: string | undefined
  unreachable?: string[] | undefined
}
type ListNodesResponse = {
  nextPageToken?: string | undefined
  nodes?: Node[] | undefined
  unreachable?: string[] | undefined
}
type ListRuntimeVersionsResponse = {
  nextPageToken?: string | undefined
  runtimeVersions?: RuntimeVersion[] | undefined
  unreachable?: string[] | undefined
}
type GenerateServiceIdentityRequest = { [x: string]: unknown }
type ServiceIdentity = { email?: string | undefined }
type GenerateServiceIdentityResponse = { identity?: ServiceIdentity | undefined }
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/v2/:name': {
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
        output: RuntimeVersion
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
        } & { json: Node }
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
    '/v2/:name:getGuestAttributes': {
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
        } & { json: GetGuestAttributesRequest }
        output: GetGuestAttributesResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v2/:name:start': {
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
        } & { json: StartNodeRequest }
        output: Operation
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v2/:name:stop': {
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
        } & { json: StopNodeRequest }
        output: Operation
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v2/:parent/acceleratorTypes': {
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
        output: ListAcceleratorTypesResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v2/:parent/nodes': {
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
        output: ListNodesResponse
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: { param: { parent: string } } & {
          query: {
            nodeId?: string | undefined
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
        } & { json: Node }
        output: Operation
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v2/:parent/runtimeVersions': {
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
        output: ListRuntimeVersionsResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v2/:parent:generateServiceIdentity': {
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
        } & { json: GenerateServiceIdentityRequest }
        output: GenerateServiceIdentityResponse
        outputFormat: 'json'
        status: 200
      }
    }
  },
  '/'
>
export default routes
