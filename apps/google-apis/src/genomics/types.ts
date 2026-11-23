type Secret = { cipherText?: string | undefined; keyName?: string | undefined }
type Mount = {
  disk?: string | undefined
  path?: string | undefined
  readOnly?: boolean | undefined
}
type Action = {
  commands?: string[] | undefined
  credentials?: Secret | undefined
  encryptedEnvironment?: Secret | undefined
  entrypoint?: string | undefined
  environment?: { [x: string]: string } | undefined
  flags?:
    | (
        | 'FLAG_UNSPECIFIED'
        | 'IGNORE_EXIT_STATUS'
        | 'RUN_IN_BACKGROUND'
        | 'ALWAYS_RUN'
        | 'ENABLE_FUSE'
        | 'PUBLISH_EXPOSED_PORTS'
        | 'DISABLE_IMAGE_PREFETCH'
        | 'DISABLE_STANDARD_ERROR_CAPTURE'
        | 'BLOCK_EXTERNAL_NETWORK'
      )[]
    | undefined
  imageUri?: string | undefined
  labels?: { [x: string]: string } | undefined
  mounts?: Mount[] | undefined
  name?: string | undefined
  pidNamespace?: string | undefined
  portMappings?: { [x: string]: number } | undefined
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
  name?: string | undefined
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
  projectId?: string | undefined
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
type Empty = { [x: string]: unknown }
type TimestampedEvent = {
  data?: { [x: string]: { [x: string]: unknown } } | undefined
  timestamp?: string | undefined
}
type DiskStatus = { freeSpaceBytes?: string | undefined; totalSpaceBytes?: string | undefined }
type WorkerStatus = {
  attachedDisks?: { [x: string]: DiskStatus } | undefined
  bootDisk?: DiskStatus | undefined
  freeRamBytes?: string | undefined
  totalRamBytes?: string | undefined
  uptimeSeconds?: string | undefined
}
type CheckInRequest = {
  deadlineExpired?: Empty | undefined
  event?: { [x: string]: { [x: string]: unknown } } | undefined
  events?: TimestampedEvent[] | undefined
  result?: Status | undefined
  sosReport?: string | undefined
  workerStatus?: WorkerStatus | undefined
}
type CheckInResponse = {
  deadline?: string | undefined
  features?: { [x: string]: { [x: string]: unknown } } | undefined
  metadata?: { [x: string]: { [x: string]: unknown } } | undefined
}
type ListOperationsResponse = {
  nextPageToken?: string | undefined
  operations?: Operation[] | undefined
}
type CancelOperationRequest = { [x: string]: unknown }
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/v2alpha1/pipelines:run': {
      $post: {
        input: {
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
  } & {
    '/v2alpha1/workers/:id:checkIn': {
      $post: {
        input: { param: { id: string } } & {
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
        } & { json: CheckInRequest }
        output: CheckInResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v2alpha1/:id:checkIn': {
      $post: {
        input: { param: { id: string } } & {
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
        } & { json: CheckInRequest }
        output: CheckInResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v2alpha1/:name': {
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
    '/v2alpha1/:name:cancel': {
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
  },
  '/'
>
export default routes
