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
type Workstation = {
  annotations?: { [x: string]: string } | undefined
  createTime?: string | undefined
  deleteTime?: string | undefined
  displayName?: string | undefined
  env?: { [x: string]: string } | undefined
  etag?: string | undefined
  host?: string | undefined
  labels?: { [x: string]: string } | undefined
  name?: string | undefined
  reconciling?: boolean | undefined
  state?:
    | 'STATE_UNSPECIFIED'
    | 'STATE_STARTING'
    | 'STATE_RUNNING'
    | 'STATE_STOPPING'
    | 'STATE_STOPPED'
    | undefined
  uid?: string | undefined
  updateTime?: string | undefined
}
type ListOperationsResponse = {
  nextPageToken?: string | undefined
  operations?: Operation[] | undefined
}
type CancelOperationRequest = { [x: string]: unknown }
type GoogleProtobufEmpty = { [x: string]: unknown }
type StartWorkstationRequest = { etag?: string | undefined; validateOnly?: boolean | undefined }
type StopWorkstationRequest = { etag?: string | undefined; validateOnly?: boolean | undefined }
type PrivateClusterConfig = {
  allowedProjects?: string[] | undefined
  clusterHostname?: string | undefined
  enablePrivateEndpoint?: boolean | undefined
  serviceAttachmentUri?: string | undefined
}
type WorkstationCluster = {
  annotations?: { [x: string]: string } | undefined
  conditions?: Status[] | undefined
  controlPlaneIp?: string | undefined
  createTime?: string | undefined
  degraded?: boolean | undefined
  deleteTime?: string | undefined
  displayName?: string | undefined
  etag?: string | undefined
  labels?: { [x: string]: string } | undefined
  name?: string | undefined
  network?: string | undefined
  privateClusterConfig?: PrivateClusterConfig | undefined
  reconciling?: boolean | undefined
  subnetwork?: string | undefined
  uid?: string | undefined
  updateTime?: string | undefined
}
type ListWorkstationClustersResponse = {
  nextPageToken?: string | undefined
  unreachable?: string[] | undefined
  workstationClusters?: WorkstationCluster[] | undefined
}
type Container = {
  args?: string[] | undefined
  command?: string[] | undefined
  env?: { [x: string]: string } | undefined
  image?: string | undefined
  runAsUser?: number | undefined
  workingDir?: string | undefined
}
type CustomerEncryptionKey = {
  kmsKey?: string | undefined
  kmsKeyServiceAccount?: string | undefined
}
type GceConfidentialInstanceConfig = { enableConfidentialCompute?: boolean | undefined }
type GceShieldedInstanceConfig = {
  enableIntegrityMonitoring?: boolean | undefined
  enableSecureBoot?: boolean | undefined
  enableVtpm?: boolean | undefined
}
type GceInstance = {
  bootDiskSizeGb?: number | undefined
  confidentialInstanceConfig?: GceConfidentialInstanceConfig | undefined
  disablePublicIpAddresses?: boolean | undefined
  machineType?: string | undefined
  poolSize?: number | undefined
  serviceAccount?: string | undefined
  shieldedInstanceConfig?: GceShieldedInstanceConfig | undefined
  tags?: string[] | undefined
}
type Host = { gceInstance?: GceInstance | undefined }
type GceRegionalPersistentDisk = {
  diskType?: string | undefined
  fsType?: string | undefined
  reclaimPolicy?: 'RECLAIM_POLICY_UNSPECIFIED' | 'DELETE' | 'RETAIN' | undefined
  sizeGb?: number | undefined
  sourceSnapshot?: string | undefined
}
type PersistentDirectory = {
  gcePd?: GceRegionalPersistentDisk | undefined
  mountPath?: string | undefined
}
type WorkstationConfig = {
  annotations?: { [x: string]: string } | undefined
  conditions?: Status[] | undefined
  container?: Container | undefined
  createTime?: string | undefined
  degraded?: boolean | undefined
  deleteTime?: string | undefined
  displayName?: string | undefined
  enableAuditAgent?: boolean | undefined
  encryptionKey?: CustomerEncryptionKey | undefined
  etag?: string | undefined
  host?: Host | undefined
  idleTimeout?: string | undefined
  labels?: { [x: string]: string } | undefined
  name?: string | undefined
  persistentDirectories?: PersistentDirectory[] | undefined
  reconciling?: boolean | undefined
  runningTimeout?: string | undefined
  uid?: string | undefined
  updateTime?: string | undefined
}
type ListWorkstationConfigsResponse = {
  nextPageToken?: string | undefined
  unreachable?: string[] | undefined
  workstationConfigs?: WorkstationConfig[] | undefined
}
type ListUsableWorkstationConfigsResponse = {
  nextPageToken?: string | undefined
  unreachable?: string[] | undefined
  workstationConfigs?: WorkstationConfig[] | undefined
}
type ListWorkstationsResponse = {
  nextPageToken?: string | undefined
  unreachable?: string[] | undefined
  workstations?: Workstation[] | undefined
}
type ListUsableWorkstationsResponse = {
  nextPageToken?: string | undefined
  unreachable?: string[] | undefined
  workstations?: Workstation[] | undefined
}
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
type GenerateAccessTokenRequest = { expireTime?: string | undefined; ttl?: string | undefined }
type GenerateAccessTokenResponse = {
  accessToken?: string | undefined
  expireTime?: string | undefined
}
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/v1beta/:name': {
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
        output: Operation
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
        output: Workstation
        outputFormat: 'json'
        status: 200
      }
      $patch: {
        input: { param: { name: string } } & {
          query: {
            allowMissing?: boolean | undefined
            updateMask?: string | undefined
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
        } & { json: Workstation }
        output: Operation
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1beta/:name/operations': {
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
    '/v1beta/:name:cancel': {
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
        output: GoogleProtobufEmpty
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1beta/:name:start': {
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
        } & { json: StartWorkstationRequest }
        output: Operation
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1beta/:name:stop': {
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
        } & { json: StopWorkstationRequest }
        output: Operation
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1beta/:parent/workstationClusters': {
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
        output: ListWorkstationClustersResponse
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: { param: { parent: string } } & {
          query: {
            validateOnly?: boolean | undefined
            workstationClusterId?: string | undefined
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
        } & { json: WorkstationCluster }
        output: Operation
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1beta/:parent/workstationConfigs': {
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
        output: ListWorkstationConfigsResponse
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: { param: { parent: string } } & {
          query: {
            validateOnly?: boolean | undefined
            workstationConfigId?: string | undefined
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
        } & { json: WorkstationConfig }
        output: Operation
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1beta/:parent/workstationConfigs:listUsable': {
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
        output: ListUsableWorkstationConfigsResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1beta/:parent/workstations': {
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
        output: ListWorkstationsResponse
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: { param: { parent: string } } & {
          query: {
            validateOnly?: boolean | undefined
            workstationId?: string | undefined
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
        } & { json: Workstation }
        output: Operation
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1beta/:parent/workstations:listUsable': {
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
        output: ListUsableWorkstationsResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1beta/:resource:getIamPolicy': {
      $get: {
        input: { param: { resource: string } } & {
          query: {
            'options.requestedPolicyVersion'?: number | undefined
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
        output: Policy
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1beta/:resource:setIamPolicy': {
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
    '/v1beta/:resource:testIamPermissions': {
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
    '/v1beta/:workstation:generateAccessToken': {
      $post: {
        input: { param: { workstation: string } } & {
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
        } & { json: GenerateAccessTokenRequest }
        output: GenerateAccessTokenResponse
        outputFormat: 'json'
        status: 200
      }
    }
  },
  '/'
>
export default routes
