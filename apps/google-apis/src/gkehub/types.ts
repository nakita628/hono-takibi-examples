type Empty = { [x: string]: unknown }
type GoogleRpcStatus = {
  code?: number | undefined
  details?: { [x: string]: { [x: string]: unknown } }[] | undefined
  message?: string | undefined
}
type Operation = {
  done?: boolean | undefined
  error?: GoogleRpcStatus | undefined
  metadata?: { [x: string]: { [x: string]: unknown } } | undefined
  name?: string | undefined
  response?: { [x: string]: { [x: string]: unknown } } | undefined
}
type Authority = {
  identityProvider?: string | undefined
  issuer?: string | undefined
  oidcJwks?: string | undefined
  workloadIdentityPool?: string | undefined
}
type ApplianceCluster = { resourceLink?: string | undefined }
type EdgeCluster = { resourceLink?: string | undefined }
type GkeCluster = { clusterMissing?: boolean | undefined; resourceLink?: string | undefined }
type KubernetesMetadata = {
  kubernetesApiServerVersion?: string | undefined
  memoryMb?: number | undefined
  nodeCount?: number | undefined
  nodeProviderId?: string | undefined
  updateTime?: string | undefined
  vcpuCount?: number | undefined
}
type ResourceManifest = { clusterScoped?: boolean | undefined; manifest?: string | undefined }
type ResourceOptions = {
  connectVersion?: string | undefined
  k8sVersion?: string | undefined
  v1beta1Crd?: boolean | undefined
}
type KubernetesResource = {
  connectResources?: ResourceManifest[] | undefined
  membershipCrManifest?: string | undefined
  membershipResources?: ResourceManifest[] | undefined
  resourceOptions?: ResourceOptions | undefined
}
type MultiCloudCluster = { clusterMissing?: boolean | undefined; resourceLink?: string | undefined }
type OnPremCluster = {
  adminCluster?: boolean | undefined
  clusterMissing?: boolean | undefined
  clusterType?:
    | 'CLUSTERTYPE_UNSPECIFIED'
    | 'BOOTSTRAP'
    | 'HYBRID'
    | 'STANDALONE'
    | 'USER'
    | undefined
  resourceLink?: string | undefined
}
type MembershipEndpoint = {
  applianceCluster?: ApplianceCluster | undefined
  edgeCluster?: EdgeCluster | undefined
  gkeCluster?: GkeCluster | undefined
  kubernetesMetadata?: KubernetesMetadata | undefined
  kubernetesResource?: KubernetesResource | undefined
  multiCloudCluster?: MultiCloudCluster | undefined
  onPremCluster?: OnPremCluster | undefined
}
type MonitoringConfig = {
  cluster?: string | undefined
  clusterHash?: string | undefined
  kubernetesMetricsPrefix?: string | undefined
  location?: string | undefined
  projectId?: string | undefined
}
type MembershipState = {
  code?:
    | 'CODE_UNSPECIFIED'
    | 'CREATING'
    | 'READY'
    | 'DELETING'
    | 'UPDATING'
    | 'SERVICE_UPDATING'
    | undefined
  description?: string | undefined
  updateTime?: string | undefined
}
type Membership = {
  authority?: Authority | undefined
  createTime?: string | undefined
  deleteTime?: string | undefined
  description?: string | undefined
  endpoint?: MembershipEndpoint | undefined
  externalId?: string | undefined
  infrastructureType?: 'INFRASTRUCTURE_TYPE_UNSPECIFIED' | 'ON_PREM' | 'MULTI_CLOUD' | undefined
  labels?: { [x: string]: string } | undefined
  lastConnectionTime?: string | undefined
  monitoringConfig?: MonitoringConfig | undefined
  name?: string | undefined
  state?: MembershipState | undefined
  uniqueId?: string | undefined
  updateTime?: string | undefined
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
type TypeMeta = { apiVersion?: string | undefined; kind?: string | undefined }
type ConnectAgentResource = { manifest?: string | undefined; type?: TypeMeta | undefined }
type GenerateConnectManifestResponse = { manifest?: ConnectAgentResource[] | undefined }
type GenerateExclusivityManifestResponse = {
  crManifest?: string | undefined
  crdManifest?: string | undefined
}
type ListMembershipsResponse = {
  nextPageToken?: string | undefined
  resources?: Membership[] | undefined
  unreachable?: string[] | undefined
}
type ValidateExclusivityResponse = { status?: GoogleRpcStatus | undefined }
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
    '/v1beta1/:name': {
      $delete: {
        input: { param: { name: string } } & {
          query: {
            force?: boolean | undefined
            requestId?: string | undefined
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
            requestId?: string | undefined
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
        } & { json: Membership }
        output: Operation
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1beta1/:name/locations': {
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
    '/v1beta1/:name/operations': {
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
    '/v1beta1/:name:cancel': {
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
    '/v1beta1/:name:generateConnectManifest': {
      $get: {
        input: { param: { name: string } } & {
          query: {
            'connectAgent.name'?: string | undefined
            'connectAgent.namespace'?: string | undefined
            'connectAgent.proxy'?: string | undefined
            imagePullSecretContent?: string | undefined
            isUpgrade?: boolean | undefined
            registry?: string | undefined
            version?: string | undefined
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
        output: GenerateConnectManifestResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1beta1/:name:generateExclusivityManifest': {
      $get: {
        input: { param: { name: string } } & {
          query: {
            crManifest?: string | undefined
            crdManifest?: string | undefined
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
        output: GenerateExclusivityManifestResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1beta1/:parent/memberships': {
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
        output: ListMembershipsResponse
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: { param: { parent: string } } & {
          query: {
            membershipId?: string | undefined
            requestId?: string | undefined
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
        } & { json: Membership }
        output: Operation
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1beta1/:parent/memberships:validateExclusivity': {
      $get: {
        input: { param: { parent: string } } & {
          query: {
            crManifest?: string | undefined
            intendedMembership?: string | undefined
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
        output: ValidateExclusivityResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1beta1/:resource:getIamPolicy': {
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
    '/v1beta1/:resource:setIamPolicy': {
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
    '/v1beta1/:resource:testIamPermissions': {
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
