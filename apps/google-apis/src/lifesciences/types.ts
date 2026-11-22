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
type CancelOperationRequest = { [x: string]: unknown }
type Empty = { [x: string]: unknown }
type Secret = { cipherText?: string | undefined; keyName?: string | undefined }
type Mount = {
  disk?: string | undefined
  path?: string | undefined
  readOnly?: boolean | undefined
}
type Action = {
  alwaysRun?: boolean | undefined
  blockExternalNetwork?: boolean | undefined
  commands?: string[] | undefined
  containerName?: string | undefined
  credentials?: Secret | undefined
  disableImagePrefetch?: boolean | undefined
  disableStandardErrorCapture?: boolean | undefined
  enableFuse?: boolean | undefined
  encryptedEnvironment?: Secret | undefined
  entrypoint?: string | undefined
  environment?: { [x: string]: string } | undefined
  ignoreExitStatus?: boolean | undefined
  imageUri?: string | undefined
  labels?: { [x: string]: string } | undefined
  mounts?: Mount[] | undefined
  pidNamespace?: string | undefined
  portMappings?: { [x: string]: number } | undefined
  publishExposedPorts?: boolean | undefined
  runInBackground?: boolean | undefined
  timeout?: string | undefined
}
type Accelerator = { count?: string | undefined; type?: string | undefined }
type Disk = {
  name?: string | undefined
  sizeGb?: number | undefined
  sourceImage?: string | undefined
  type?: string | undefined
}
type Network = {
  network?: string | undefined
  subnetwork?: string | undefined
  usePrivateAddress?: boolean | undefined
}
type ServiceAccount = { email?: string | undefined; scopes?: string[] | undefined }
type ExistingDisk = { disk?: string | undefined }
type NFSMount = { target?: string | undefined }
type PersistentDisk = {
  sizeGb?: number | undefined
  sourceImage?: string | undefined
  type?: string | undefined
}
type Volume = {
  existingDisk?: ExistingDisk | undefined
  nfsMount?: NFSMount | undefined
  persistentDisk?: PersistentDisk | undefined
  volume?: string | undefined
}
type VirtualMachine = {
  accelerators?: Accelerator[] | undefined
  bootDiskSizeGb?: number | undefined
  bootImage?: string | undefined
  cpuPlatform?: string | undefined
  disks?: Disk[] | undefined
  dockerCacheImages?: string[] | undefined
  enableStackdriverMonitoring?: boolean | undefined
  labels?: { [x: string]: string } | undefined
  machineType?: string | undefined
  network?: Network | undefined
  nvidiaDriverVersion?: string | undefined
  preemptible?: boolean | undefined
  reservation?: string | undefined
  serviceAccount?: ServiceAccount | undefined
  volumes?: Volume[] | undefined
}
type Resources = {
  regions?: string[] | undefined
  virtualMachine?: VirtualMachine | undefined
  zones?: string[] | undefined
}
type Pipeline = {
  actions?: Action[] | undefined
  encryptedEnvironment?: Secret | undefined
  environment?: { [x: string]: string } | undefined
  resources?: Resources | undefined
  timeout?: string | undefined
}
type RunPipelineRequest = {
  labels?: { [x: string]: string } | undefined
  pipeline?: Pipeline | undefined
  pubSubTopic?: string | undefined
}
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/v2beta/:name': {
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
    }
  } & {
    '/v2beta/:name/locations': {
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
    '/v2beta/:name/operations': {
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
    '/v2beta/:name:cancel': {
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
    '/v2beta/:parent/pipelines:run': {
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
        } & { json: RunPipelineRequest }
        output: Operation
        outputFormat: 'json'
        status: 200
      }
    }
  },
  '/'
>
export default routes
