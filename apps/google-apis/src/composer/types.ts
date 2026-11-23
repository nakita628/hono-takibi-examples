type CheckUpgradeRequest = { imageVersion?: string | undefined }
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
type LoadSnapshotRequest = {
  skipAirflowOverridesSetting?: boolean | undefined
  skipEnvironmentVariablesSetting?: boolean | undefined
  skipGcsDataCopying?: boolean | undefined
  skipPypiPackagesInstallation?: boolean | undefined
  snapshotPath?: string | undefined
}
type SaveSnapshotRequest = { snapshotLocation?: string | undefined }
type Empty = { [x: string]: unknown }
type DatabaseConfig = { machineType?: string | undefined }
type EncryptionConfig = { kmsKeyName?: string | undefined }
type MaintenanceWindow = {
  endTime?: string | undefined
  recurrence?: string | undefined
  startTime?: string | undefined
}
type CidrBlock = { cidrBlock?: string | undefined; displayName?: string | undefined }
type MasterAuthorizedNetworksConfig = {
  cidrBlocks?: CidrBlock[] | undefined
  enabled?: boolean | undefined
}
type IPAllocationPolicy = {
  clusterIpv4CidrBlock?: string | undefined
  clusterSecondaryRangeName?: string | undefined
  servicesIpv4CidrBlock?: string | undefined
  servicesSecondaryRangeName?: string | undefined
  useIpAliases?: boolean | undefined
}
type NodeConfig = {
  diskSizeGb?: number | undefined
  enableIpMasqAgent?: boolean | undefined
  ipAllocationPolicy?: IPAllocationPolicy | undefined
  location?: string | undefined
  machineType?: string | undefined
  maxPodsPerNode?: number | undefined
  network?: string | undefined
  oauthScopes?: string[] | undefined
  serviceAccount?: string | undefined
  subnetwork?: string | undefined
  tags?: string[] | undefined
}
type NetworkingConfig = {
  connectionType?:
    | 'CONNECTION_TYPE_UNSPECIFIED'
    | 'VPC_PEERING'
    | 'PRIVATE_SERVICE_CONNECT'
    | undefined
}
type PrivateClusterConfig = {
  enablePrivateEndpoint?: boolean | undefined
  masterIpv4CidrBlock?: string | undefined
  masterIpv4ReservedRange?: string | undefined
}
type PrivateEnvironmentConfig = {
  cloudComposerConnectionSubnetwork?: string | undefined
  cloudComposerNetworkIpv4CidrBlock?: string | undefined
  cloudComposerNetworkIpv4ReservedRange?: string | undefined
  cloudSqlIpv4CidrBlock?: string | undefined
  enablePrivateEnvironment?: boolean | undefined
  enablePrivatelyUsedPublicIps?: boolean | undefined
  networkingConfig?: NetworkingConfig | undefined
  privateClusterConfig?: PrivateClusterConfig | undefined
  webServerIpv4CidrBlock?: string | undefined
  webServerIpv4ReservedRange?: string | undefined
}
type ScheduledSnapshotsConfig = {
  enabled?: boolean | undefined
  snapshotCreationSchedule?: string | undefined
  snapshotLocation?: string | undefined
  timeZone?: string | undefined
}
type RecoveryConfig = { scheduledSnapshotsConfig?: ScheduledSnapshotsConfig | undefined }
type CloudDataLineageIntegration = { enabled?: boolean | undefined }
type SoftwareConfig = {
  airflowConfigOverrides?: { [x: string]: string } | undefined
  cloudDataLineageIntegration?: CloudDataLineageIntegration | undefined
  envVariables?: { [x: string]: string } | undefined
  imageVersion?: string | undefined
  pypiPackages?: { [x: string]: string } | undefined
  pythonVersion?: string | undefined
  schedulerCount?: number | undefined
}
type WebServerConfig = { machineType?: string | undefined }
type AllowedIpRange = { description?: string | undefined; value?: string | undefined }
type WebServerNetworkAccessControl = { allowedIpRanges?: AllowedIpRange[] | undefined }
type SchedulerResource = {
  count?: number | undefined
  cpu?: number | undefined
  memoryGb?: number | undefined
  storageGb?: number | undefined
}
type TriggererResource = {
  count?: number | undefined
  cpu?: number | undefined
  memoryGb?: number | undefined
}
type WebServerResource = {
  cpu?: number | undefined
  memoryGb?: number | undefined
  storageGb?: number | undefined
}
type WorkerResource = {
  cpu?: number | undefined
  maxCount?: number | undefined
  memoryGb?: number | undefined
  minCount?: number | undefined
  storageGb?: number | undefined
}
type WorkloadsConfig = {
  scheduler?: SchedulerResource | undefined
  triggerer?: TriggererResource | undefined
  webServer?: WebServerResource | undefined
  worker?: WorkerResource | undefined
}
type EnvironmentConfig = {
  airflowByoidUri?: string | undefined
  airflowUri?: string | undefined
  dagGcsPrefix?: string | undefined
  databaseConfig?: DatabaseConfig | undefined
  encryptionConfig?: EncryptionConfig | undefined
  environmentSize?:
    | 'ENVIRONMENT_SIZE_UNSPECIFIED'
    | 'ENVIRONMENT_SIZE_SMALL'
    | 'ENVIRONMENT_SIZE_MEDIUM'
    | 'ENVIRONMENT_SIZE_LARGE'
    | undefined
  gkeCluster?: string | undefined
  maintenanceWindow?: MaintenanceWindow | undefined
  masterAuthorizedNetworksConfig?: MasterAuthorizedNetworksConfig | undefined
  nodeConfig?: NodeConfig | undefined
  nodeCount?: number | undefined
  privateEnvironmentConfig?: PrivateEnvironmentConfig | undefined
  recoveryConfig?: RecoveryConfig | undefined
  softwareConfig?: SoftwareConfig | undefined
  webServerConfig?: WebServerConfig | undefined
  webServerNetworkAccessControl?: WebServerNetworkAccessControl | undefined
  workloadsConfig?: WorkloadsConfig | undefined
}
type Environment = {
  config?: EnvironmentConfig | undefined
  createTime?: string | undefined
  labels?: { [x: string]: string } | undefined
  name?: string | undefined
  state?:
    | 'STATE_UNSPECIFIED'
    | 'CREATING'
    | 'RUNNING'
    | 'UPDATING'
    | 'DELETING'
    | 'ERROR'
    | undefined
  updateTime?: string | undefined
  uuid?: string | undefined
}
type ListOperationsResponse = {
  nextPageToken?: string | undefined
  operations?: Operation[] | undefined
}
type RestartWebServerRequest = { [x: string]: unknown }
type ListEnvironmentsResponse = {
  environments?: Environment[] | undefined
  nextPageToken?: string | undefined
}
type Date = { day?: number | undefined; month?: number | undefined; year?: number | undefined }
type ImageVersion = {
  creationDisabled?: boolean | undefined
  imageVersionId?: string | undefined
  isDefault?: boolean | undefined
  releaseDate?: Date | undefined
  supportedPythonVersions?: string[] | undefined
  upgradeDisabled?: boolean | undefined
}
type ListImageVersionsResponse = {
  imageVersions?: ImageVersion[] | undefined
  nextPageToken?: string | undefined
}
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/v1beta1/:environment:checkUpgrade': {
      $post: {
        input: { param: { environment: string } } & {
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
        } & { json: CheckUpgradeRequest }
        output: Operation
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1beta1/:environment:loadSnapshot': {
      $post: {
        input: { param: { environment: string } } & {
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
        } & { json: LoadSnapshotRequest }
        output: Operation
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1beta1/:environment:saveSnapshot': {
      $post: {
        input: { param: { environment: string } } & {
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
        } & { json: SaveSnapshotRequest }
        output: Operation
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1beta1/:name': {
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
        } & { json: Environment }
        output: Operation
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
    '/v1beta1/:name:restartWebServer': {
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
        } & { json: RestartWebServerRequest }
        output: Operation
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1beta1/:parent/environments': {
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
        output: ListEnvironmentsResponse
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
        } & { json: Environment }
        output: Operation
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1beta1/:parent/imageVersions': {
      $get: {
        input: { param: { parent: string } } & {
          query: {
            includePastReleases?: boolean | undefined
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
        output: ListImageVersionsResponse
        outputFormat: 'json'
        status: 200
      }
    }
  },
  '/'
>
export default routes
