type HealthCheck = {
  checkIntervalSec?: number | undefined
  description?: string | undefined
  healthyThreshold?: number | undefined
  host?: string | undefined
  name?: string | undefined
  path?: string | undefined
  port?: number | undefined
  timeoutSec?: number | undefined
  unhealthyThreshold?: number | undefined
}
type Label = { key?: string | undefined; value?: string | undefined }
type EnvVariable = {
  hidden?: boolean | undefined
  name?: string | undefined
  value?: string | undefined
}
type Action = {
  commands?: string[] | undefined
  envVariables?: EnvVariable[] | undefined
  timeoutMilliSeconds?: number | undefined
}
type DiskAttachment = { deviceName?: string | undefined; index?: number | undefined }
type ExistingDisk = { attachment?: DiskAttachment | undefined; source?: string | undefined }
type NewDiskInitializeParams = {
  diskSizeGb?: string | undefined
  diskType?: string | undefined
  sourceImage?: string | undefined
}
type NewDisk = {
  attachment?: DiskAttachment | undefined
  autoDelete?: boolean | undefined
  boot?: boolean | undefined
  initializeParams?: NewDiskInitializeParams | undefined
}
type MetadataItem = { key?: string | undefined; value?: string | undefined }
type Metadata = { fingerPrint?: string | undefined; items?: MetadataItem[] | undefined }
type AccessConfig = {
  name?: string | undefined
  natIp?: string | undefined
  type?: string | undefined
}
type NetworkInterface = {
  accessConfigs?: AccessConfig[] | undefined
  network?: string | undefined
  networkIp?: string | undefined
}
type ServiceAccount = { email?: string | undefined; scopes?: string[] | undefined }
type Tag = { fingerPrint?: string | undefined; items?: string[] | undefined }
type VmParams = {
  baseInstanceName?: string | undefined
  canIpForward?: boolean | undefined
  description?: string | undefined
  disksToAttach?: ExistingDisk[] | undefined
  disksToCreate?: NewDisk[] | undefined
  machineType?: string | undefined
  metadata?: Metadata | undefined
  networkInterfaces?: NetworkInterface[] | undefined
  onHostMaintenance?: string | undefined
  serviceAccounts?: ServiceAccount[] | undefined
  tags?: Tag | undefined
}
type Template = {
  action?: Action | undefined
  healthChecks?: HealthCheck[] | undefined
  version?: string | undefined
  vmParams?: VmParams | undefined
}
type Pool = {
  autoRestart?: boolean | undefined
  baseInstanceName?: string | undefined
  currentNumReplicas?: number | undefined
  description?: string | undefined
  healthChecks?: HealthCheck[] | undefined
  initialNumReplicas?: number | undefined
  labels?: Label[] | undefined
  name?: string | undefined
  numReplicas?: number | undefined
  resourceViews?: string[] | undefined
  selfLink?: string | undefined
  targetPool?: string | undefined
  targetPools?: string[] | undefined
  template?: Template | undefined
  type?: string | undefined
}
type PoolsListResponse = { nextPageToken?: string | undefined; resources?: Pool[] | undefined }
type PoolsDeleteRequest = { abandonInstances?: string[] | undefined }
type ReplicaStatus = {
  details?: string | undefined
  state?: string | undefined
  templateVersion?: string | undefined
  vmLink?: string | undefined
  vmStartTime?: string | undefined
}
type Replica = {
  name?: string | undefined
  selfLink?: string | undefined
  status?: ReplicaStatus | undefined
}
type ReplicasListResponse = {
  nextPageToken?: string | undefined
  resources?: Replica[] | undefined
}
type ReplicasDeleteRequest = { abandonInstance?: boolean | undefined }
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/:projectName/zones/:zone/pools': {
      $get: {
        input: { param: { projectName: string; zone: string } } & {
          query: {
            maxResults?: number | undefined
            pageToken?: string | undefined
            alt?: 'json' | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            userIp?: string | undefined
          }
        }
        output: PoolsListResponse
        outputFormat: 'text'
        status: 200
      }
      $post: {
        input: { param: { projectName: string; zone: string } } & {
          query: {
            alt?: 'json' | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            userIp?: string | undefined
          }
        } & { json: Pool }
        output: Pool
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/:projectName/zones/:zone/pools/:poolName': {
      $get: {
        input: { param: { projectName: string; zone: string; poolName: string } } & {
          query: {
            alt?: 'json' | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            userIp?: string | undefined
          }
        }
        output: Pool
        outputFormat: 'text'
        status: 200
      }
      $post: {
        input: { param: { projectName: string; zone: string; poolName: string } } & {
          query: {
            alt?: 'json' | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            userIp?: string | undefined
          }
        } & { json: PoolsDeleteRequest }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/:projectName/zones/:zone/pools/:poolName/replicas': {
      $get: {
        input: { param: { projectName: string; zone: string; poolName: string } } & {
          query: {
            maxResults?: number | undefined
            pageToken?: string | undefined
            alt?: 'json' | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            userIp?: string | undefined
          }
        }
        output: ReplicasListResponse
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/:projectName/zones/:zone/pools/:poolName/replicas/:replicaName': {
      $get: {
        input: {
          param: { projectName: string; zone: string; poolName: string; replicaName: string }
        } & {
          query: {
            alt?: 'json' | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            userIp?: string | undefined
          }
        }
        output: Replica
        outputFormat: 'text'
        status: 200
      }
      $post: {
        input: {
          param: { projectName: string; zone: string; poolName: string; replicaName: string }
        } & {
          query: {
            alt?: 'json' | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            userIp?: string | undefined
          }
        } & { json: ReplicasDeleteRequest }
        output: Replica
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/:projectName/zones/:zone/pools/:poolName/replicas/:replicaName/restart': {
      $post: {
        input: {
          param: { projectName: string; zone: string; poolName: string; replicaName: string }
        } & {
          query: {
            alt?: 'json' | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            userIp?: string | undefined
          }
        }
        output: Replica
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/:projectName/zones/:zone/pools/:poolName/resize': {
      $post: {
        input: { param: { projectName: string; zone: string; poolName: string } } & {
          query: {
            numReplicas?: number | undefined
            alt?: 'json' | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            userIp?: string | undefined
          }
        }
        output: Pool
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/:projectName/zones/:zone/pools/:poolName/updateTemplate': {
      $post: {
        input: { param: { projectName: string; zone: string; poolName: string } } & {
          query: {
            alt?: 'json' | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            userIp?: string | undefined
          }
        } & { json: Template }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  },
  '/'
>
export default routes
