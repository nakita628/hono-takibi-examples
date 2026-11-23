type GoogleRpcStatus = {
  code?: number | undefined
  details?: { [x: string]: { [x: string]: unknown } }[] | undefined
  message?: string | undefined
}
type GoogleLongrunningOperation = {
  done?: boolean | undefined
  error?: GoogleRpcStatus | undefined
  metadata?: { [x: string]: { [x: string]: unknown } } | undefined
  name?: string | undefined
  response?: { [x: string]: { [x: string]: unknown } } | undefined
}
type GoogleDevtoolsRemotebuildexecutionAdminV1alphaAutoscale = {
  maxSize?: string | undefined
  minSize?: string | undefined
}
type GoogleDevtoolsRemotebuildexecutionAdminV1alphaAcceleratorConfig = {
  acceleratorCount?: string | undefined
  acceleratorType?: string | undefined
}
type GoogleDevtoolsRemotebuildexecutionAdminV1alphaWorkerConfig = {
  accelerator?: GoogleDevtoolsRemotebuildexecutionAdminV1alphaAcceleratorConfig | undefined
  diskSizeGb?: string | undefined
  diskType?: string | undefined
  labels?: { [x: string]: string } | undefined
  machineType?: string | undefined
  maxConcurrentActions?: string | undefined
  minCpuPlatform?: string | undefined
  networkAccess?: string | undefined
  reserved?: boolean | undefined
  soleTenantNodeType?: string | undefined
  vmImage?: string | undefined
}
type GoogleDevtoolsRemotebuildexecutionAdminV1alphaWorkerPool = {
  autoscale?: GoogleDevtoolsRemotebuildexecutionAdminV1alphaAutoscale | undefined
  channel?: string | undefined
  hostOs?: string | undefined
  name?: string | undefined
  state?:
    | 'STATE_UNSPECIFIED'
    | 'CREATING'
    | 'RUNNING'
    | 'UPDATING'
    | 'DELETING'
    | 'INACTIVE'
    | undefined
  workerConfig?: GoogleDevtoolsRemotebuildexecutionAdminV1alphaWorkerConfig | undefined
  workerCount?: string | undefined
}
type GoogleDevtoolsRemotebuildexecutionAdminV1alphaUpdateWorkerPoolRequest = {
  updateMask?: string | undefined
  workerPool?: GoogleDevtoolsRemotebuildexecutionAdminV1alphaWorkerPool | undefined
}
type GoogleDevtoolsRemotebuildexecutionAdminV1alphaTestNotifyInstanceRequest = {
  [x: string]: unknown
}
type GoogleProtobufEmpty = { [x: string]: unknown }
type GoogleDevtoolsRemotebuildexecutionAdminV1alphaFeaturePolicyFeature = {
  allowedValues?: string[] | undefined
  policy?: 'POLICY_UNSPECIFIED' | 'ALLOWED' | 'FORBIDDEN' | 'RESTRICTED' | undefined
}
type GoogleDevtoolsRemotebuildexecutionAdminV1alphaFeaturePolicy = {
  actionHermeticity?:
    | 'ACTION_HERMETICITY_UNSPECIFIED'
    | 'ACTION_HERMETICITY_OFF'
    | 'ACTION_HERMETICITY_ENFORCED'
    | 'ACTION_HERMETICITY_BEST_EFFORT'
    | undefined
  actionIsolation?:
    | 'ACTION_ISOLATION_UNSPECIFIED'
    | 'ACTION_ISOLATION_OFF'
    | 'ACTION_ISOLATION_ENFORCED'
    | undefined
  containerImageSources?:
    | GoogleDevtoolsRemotebuildexecutionAdminV1alphaFeaturePolicyFeature
    | undefined
  dockerAddCapabilities?:
    | GoogleDevtoolsRemotebuildexecutionAdminV1alphaFeaturePolicyFeature
    | undefined
  dockerChrootPath?: GoogleDevtoolsRemotebuildexecutionAdminV1alphaFeaturePolicyFeature | undefined
  dockerNetwork?: GoogleDevtoolsRemotebuildexecutionAdminV1alphaFeaturePolicyFeature | undefined
  dockerPrivileged?: GoogleDevtoolsRemotebuildexecutionAdminV1alphaFeaturePolicyFeature | undefined
  dockerRunAsContainerProvidedUser?:
    | GoogleDevtoolsRemotebuildexecutionAdminV1alphaFeaturePolicyFeature
    | undefined
  dockerRunAsRoot?: GoogleDevtoolsRemotebuildexecutionAdminV1alphaFeaturePolicyFeature | undefined
  dockerRuntime?: GoogleDevtoolsRemotebuildexecutionAdminV1alphaFeaturePolicyFeature | undefined
  dockerSiblingContainers?:
    | GoogleDevtoolsRemotebuildexecutionAdminV1alphaFeaturePolicyFeature
    | undefined
  linuxExecution?:
    | 'LINUX_EXECUTION_UNSPECIFIED'
    | 'LINUX_EXECUTION_FORBIDDEN'
    | 'LINUX_EXECUTION_UNRESTRICTED'
    | 'LINUX_EXECUTION_HARDENED_GVISOR'
    | 'LINUX_EXECUTION_HARDENED_GVISOR_OR_TERMINAL'
    | undefined
  linuxIsolation?: 'LINUX_ISOLATION_UNSPECIFIED' | 'GVISOR' | 'OFF' | undefined
  macExecution?: 'MAC_EXECUTION_UNSPECIFIED' | 'MAC_EXECUTION_FORBIDDEN' | undefined
  vmVerification?:
    | 'VM_VERIFICATION_UNSPECIFIED'
    | 'VM_VERIFICATION_GCP_TOKEN'
    | 'VM_VERIFICATION_OFF'
    | undefined
  windowsExecution?:
    | 'WINDOWS_EXECUTION_UNSPECIFIED'
    | 'WINDOWS_EXECUTION_FORBIDDEN'
    | 'WINDOWS_EXECUTION_UNRESTRICTED'
    | 'WINDOWS_EXECUTION_TERMINAL'
    | undefined
}
type GoogleDevtoolsRemotebuildexecutionAdminV1alphaSchedulerNotificationConfig = {
  topic?: string | undefined
}
type GoogleDevtoolsRemotebuildexecutionAdminV1alphaInstance = {
  featurePolicy?: GoogleDevtoolsRemotebuildexecutionAdminV1alphaFeaturePolicy | undefined
  location?: string | undefined
  loggingEnabled?: boolean | undefined
  name?: string | undefined
  schedulerNotificationConfig?:
    | GoogleDevtoolsRemotebuildexecutionAdminV1alphaSchedulerNotificationConfig
    | undefined
  state?: 'STATE_UNSPECIFIED' | 'CREATING' | 'RUNNING' | 'INACTIVE' | undefined
}
type GoogleDevtoolsRemotebuildexecutionAdminV1alphaListInstancesResponse = {
  instances?: GoogleDevtoolsRemotebuildexecutionAdminV1alphaInstance[] | undefined
  unreachable?: string[] | undefined
}
type GoogleDevtoolsRemotebuildexecutionAdminV1alphaCreateInstanceRequest = {
  instance?: GoogleDevtoolsRemotebuildexecutionAdminV1alphaInstance | undefined
  instanceId?: string | undefined
  parent?: string | undefined
}
type GoogleDevtoolsRemotebuildexecutionAdminV1alphaListWorkerPoolsResponse = {
  workerPools?: GoogleDevtoolsRemotebuildexecutionAdminV1alphaWorkerPool[] | undefined
}
type GoogleDevtoolsRemotebuildexecutionAdminV1alphaCreateWorkerPoolRequest = {
  parent?: string | undefined
  poolId?: string | undefined
  workerPool?: GoogleDevtoolsRemotebuildexecutionAdminV1alphaWorkerPool | undefined
}
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/v1alpha/:name': {
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
        output: GoogleLongrunningOperation
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
        output: GoogleLongrunningOperation
        outputFormat: 'json'
        status: 200
      }
      $patch: {
        input: { param: { name: string } } & {
          query: {
            loggingEnabled?: boolean | undefined
            name1?: string | undefined
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
        } & { json: GoogleDevtoolsRemotebuildexecutionAdminV1alphaUpdateWorkerPoolRequest }
        output: GoogleLongrunningOperation
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1alpha/:name:testNotify': {
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
        } & { json: GoogleDevtoolsRemotebuildexecutionAdminV1alphaTestNotifyInstanceRequest }
        output: GoogleProtobufEmpty
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1alpha/:parent/instances': {
      $get: {
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
        }
        output: GoogleDevtoolsRemotebuildexecutionAdminV1alphaListInstancesResponse
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
        } & { json: GoogleDevtoolsRemotebuildexecutionAdminV1alphaCreateInstanceRequest }
        output: GoogleLongrunningOperation
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1alpha/:parent/workerpools': {
      $get: {
        input: { param: { parent: string } } & {
          query: {
            filter?: string | undefined
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
        output: GoogleDevtoolsRemotebuildexecutionAdminV1alphaListWorkerPoolsResponse
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
        } & { json: GoogleDevtoolsRemotebuildexecutionAdminV1alphaCreateWorkerPoolRequest }
        output: GoogleLongrunningOperation
        outputFormat: 'json'
        status: 200
      }
    }
  },
  '/'
>
export default routes
