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
type AutomaticUpdatePolicy = { [x: string]: unknown }
type OnDeployUpdatePolicy = { runtimeVersion?: string | undefined }
type RepoSource = {
  branchName?: string | undefined
  commitSha?: string | undefined
  dir?: string | undefined
  projectId?: string | undefined
  repoName?: string | undefined
  tagName?: string | undefined
}
type StorageSource = {
  bucket?: string | undefined
  generation?: string | undefined
  object?: string | undefined
}
type Source = {
  gitUri?: string | undefined
  repoSource?: RepoSource | undefined
  storageSource?: StorageSource | undefined
}
type SourceProvenance = {
  gitUri?: string | undefined
  resolvedRepoSource?: RepoSource | undefined
  resolvedStorageSource?: StorageSource | undefined
}
type BuildConfig = {
  automaticUpdatePolicy?: AutomaticUpdatePolicy | undefined
  build?: string | undefined
  dockerRegistry?:
    | 'DOCKER_REGISTRY_UNSPECIFIED'
    | 'CONTAINER_REGISTRY'
    | 'ARTIFACT_REGISTRY'
    | undefined
  dockerRepository?: string | undefined
  entryPoint?: string | undefined
  environmentVariables?: { [x: string]: string } | undefined
  onDeployUpdatePolicy?: OnDeployUpdatePolicy | undefined
  runtime?: string | undefined
  serviceAccount?: string | undefined
  source?: Source | undefined
  sourceProvenance?: SourceProvenance | undefined
  sourceToken?: string | undefined
  workerPool?: string | undefined
}
type EventFilter = {
  attribute?: string | undefined
  operator?: string | undefined
  value?: string | undefined
}
type EventTrigger = {
  channel?: string | undefined
  eventFilters?: EventFilter[] | undefined
  eventType?: string | undefined
  pubsubTopic?: string | undefined
  retryPolicy?:
    | 'RETRY_POLICY_UNSPECIFIED'
    | 'RETRY_POLICY_DO_NOT_RETRY'
    | 'RETRY_POLICY_RETRY'
    | undefined
  service?: string | undefined
  serviceAccountEmail?: string | undefined
  trigger?: string | undefined
  triggerRegion?: string | undefined
}
type SecretEnvVar = {
  key?: string | undefined
  projectId?: string | undefined
  secret?: string | undefined
  version?: string | undefined
}
type SecretVersion = { path?: string | undefined; version?: string | undefined }
type SecretVolume = {
  mountPath?: string | undefined
  projectId?: string | undefined
  secret?: string | undefined
  versions?: SecretVersion[] | undefined
}
type ServiceConfig = {
  allTrafficOnLatestRevision?: boolean | undefined
  availableCpu?: string | undefined
  availableMemory?: string | undefined
  environmentVariables?: { [x: string]: string } | undefined
  ingressSettings?:
    | 'INGRESS_SETTINGS_UNSPECIFIED'
    | 'ALLOW_ALL'
    | 'ALLOW_INTERNAL_ONLY'
    | 'ALLOW_INTERNAL_AND_GCLB'
    | undefined
  maxInstanceCount?: number | undefined
  maxInstanceRequestConcurrency?: number | undefined
  minInstanceCount?: number | undefined
  revision?: string | undefined
  secretEnvironmentVariables?: SecretEnvVar[] | undefined
  secretVolumes?: SecretVolume[] | undefined
  securityLevel?: 'SECURITY_LEVEL_UNSPECIFIED' | 'SECURE_ALWAYS' | 'SECURE_OPTIONAL' | undefined
  service?: string | undefined
  serviceAccountEmail?: string | undefined
  timeoutSeconds?: number | undefined
  uri?: string | undefined
  vpcConnector?: string | undefined
  vpcConnectorEgressSettings?:
    | 'VPC_CONNECTOR_EGRESS_SETTINGS_UNSPECIFIED'
    | 'PRIVATE_RANGES_ONLY'
    | 'ALL_TRAFFIC'
    | undefined
}
type GoogleCloudFunctionsV2StateMessage = {
  message?: string | undefined
  severity?: 'SEVERITY_UNSPECIFIED' | 'ERROR' | 'WARNING' | 'INFO' | undefined
  type?: string | undefined
}
type UpgradeInfo = {
  buildConfig?: BuildConfig | undefined
  eventTrigger?: EventTrigger | undefined
  serviceConfig?: ServiceConfig | undefined
  upgradeState?:
    | 'UPGRADE_STATE_UNSPECIFIED'
    | 'ELIGIBLE_FOR_2ND_GEN_UPGRADE'
    | 'UPGRADE_OPERATION_IN_PROGRESS'
    | 'SETUP_FUNCTION_UPGRADE_CONFIG_SUCCESSFUL'
    | 'SETUP_FUNCTION_UPGRADE_CONFIG_ERROR'
    | 'ABORT_FUNCTION_UPGRADE_ERROR'
    | 'REDIRECT_FUNCTION_UPGRADE_TRAFFIC_SUCCESSFUL'
    | 'REDIRECT_FUNCTION_UPGRADE_TRAFFIC_ERROR'
    | 'ROLLBACK_FUNCTION_UPGRADE_TRAFFIC_ERROR'
    | 'COMMIT_FUNCTION_UPGRADE_ERROR'
    | undefined
}
type Function = {
  buildConfig?: BuildConfig | undefined
  createTime?: string | undefined
  description?: string | undefined
  environment?: 'ENVIRONMENT_UNSPECIFIED' | 'GEN_1' | 'GEN_2' | undefined
  eventTrigger?: EventTrigger | undefined
  kmsKeyName?: string | undefined
  labels?: { [x: string]: string } | undefined
  name?: string | undefined
  satisfiesPzs?: boolean | undefined
  serviceConfig?: ServiceConfig | undefined
  state?:
    | 'STATE_UNSPECIFIED'
    | 'ACTIVE'
    | 'FAILED'
    | 'DEPLOYING'
    | 'DELETING'
    | 'UNKNOWN'
    | undefined
  stateMessages?: GoogleCloudFunctionsV2StateMessage[] | undefined
  updateTime?: string | undefined
  upgradeInfo?: UpgradeInfo | undefined
  url?: string | undefined
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
type AbortFunctionUpgradeRequest = { [x: string]: unknown }
type CommitFunctionUpgradeRequest = { [x: string]: unknown }
type GenerateDownloadUrlRequest = { [x: string]: unknown }
type GenerateDownloadUrlResponse = { downloadUrl?: string | undefined }
type RedirectFunctionUpgradeTrafficRequest = { [x: string]: unknown }
type RollbackFunctionUpgradeTrafficRequest = { [x: string]: unknown }
type SetupFunctionUpgradeConfigRequest = { [x: string]: unknown }
type ListFunctionsResponse = {
  functions?: Function[] | undefined
  nextPageToken?: string | undefined
  unreachable?: string[] | undefined
}
type GenerateUploadUrlRequest = {
  environment?: 'ENVIRONMENT_UNSPECIFIED' | 'GEN_1' | 'GEN_2' | undefined
  kmsKeyName?: string | undefined
}
type GenerateUploadUrlResponse = {
  storageSource?: StorageSource | undefined
  uploadUrl?: string | undefined
}
type Date = { day?: number | undefined; month?: number | undefined; year?: number | undefined }
type Runtime = {
  decommissionDate?: Date | undefined
  deprecationDate?: Date | undefined
  displayName?: string | undefined
  environment?: 'ENVIRONMENT_UNSPECIFIED' | 'GEN_1' | 'GEN_2' | undefined
  name?: string | undefined
  stage?:
    | 'RUNTIME_STAGE_UNSPECIFIED'
    | 'DEVELOPMENT'
    | 'ALPHA'
    | 'BETA'
    | 'GA'
    | 'DEPRECATED'
    | 'DECOMMISSIONED'
    | undefined
  warnings?: string[] | undefined
}
type ListRuntimesResponse = { runtimes?: Runtime[] | undefined }
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
        } & { json: Function }
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
    '/v2/:name:abortFunctionUpgrade': {
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
        } & { json: AbortFunctionUpgradeRequest }
        output: Operation
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v2/:name:commitFunctionUpgrade': {
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
        } & { json: CommitFunctionUpgradeRequest }
        output: Operation
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v2/:name:generateDownloadUrl': {
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
        } & { json: GenerateDownloadUrlRequest }
        output: GenerateDownloadUrlResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v2/:name:redirectFunctionUpgradeTraffic': {
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
        } & { json: RedirectFunctionUpgradeTrafficRequest }
        output: Operation
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v2/:name:rollbackFunctionUpgradeTraffic': {
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
        } & { json: RollbackFunctionUpgradeTrafficRequest }
        output: Operation
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v2/:name:setupFunctionUpgradeConfig': {
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
        } & { json: SetupFunctionUpgradeConfigRequest }
        output: Operation
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v2/:parent/functions': {
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
        output: ListFunctionsResponse
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: { param: { parent: string } } & {
          query: {
            functionId?: string | undefined
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
        } & { json: Function }
        output: Operation
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v2/:parent/functions:generateUploadUrl': {
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
        } & { json: GenerateUploadUrlRequest }
        output: GenerateUploadUrlResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v2/:parent/runtimes': {
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
        output: ListRuntimesResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v2/:resource:getIamPolicy': {
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
    '/v2/:resource:setIamPolicy': {
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
    '/v2/:resource:testIamPermissions': {
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
