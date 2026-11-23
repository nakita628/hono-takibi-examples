type UrlDispatchRule = {
  domain?: string | undefined
  path?: string | undefined
  service?: string | undefined
}
type FeatureSettings = {
  splitHealthChecks?: boolean | undefined
  useContainerOptimizedOs?: boolean | undefined
}
type IdentityAwareProxy = {
  enabled?: boolean | undefined
  oauth2ClientId?: string | undefined
  oauth2ClientSecret?: string | undefined
  oauth2ClientSecretSha256?: string | undefined
}
type Application = {
  authDomain?: string | undefined
  codeBucket?: string | undefined
  databaseType?:
    | 'DATABASE_TYPE_UNSPECIFIED'
    | 'CLOUD_DATASTORE'
    | 'CLOUD_FIRESTORE'
    | 'CLOUD_DATASTORE_COMPATIBILITY'
    | undefined
  defaultBucket?: string | undefined
  defaultCookieExpiration?: string | undefined
  defaultHostname?: string | undefined
  dispatchRules?: UrlDispatchRule[] | undefined
  featureSettings?: FeatureSettings | undefined
  gcrDomain?: string | undefined
  iap?: IdentityAwareProxy | undefined
  id?: string | undefined
  locationId?: string | undefined
  name?: string | undefined
  serviceAccount?: string | undefined
  servingStatus?: 'UNSPECIFIED' | 'SERVING' | 'USER_DISABLED' | 'SYSTEM_DISABLED' | undefined
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
type CertificateRawData = {
  privateKey?: string | undefined
  publicCertificate?: string | undefined
}
type ManagedCertificate = {
  lastRenewalTime?: string | undefined
  status?:
    | 'MANAGEMENT_STATUS_UNSPECIFIED'
    | 'OK'
    | 'PENDING'
    | 'FAILED_RETRYING_NOT_VISIBLE'
    | 'FAILED_PERMANENT'
    | 'FAILED_RETRYING_CAA_FORBIDDEN'
    | 'FAILED_RETRYING_CAA_CHECKING'
    | undefined
}
type AuthorizedCertificate = {
  certificateRawData?: CertificateRawData | undefined
  displayName?: string | undefined
  domainMappingsCount?: number | undefined
  domainNames?: string[] | undefined
  expireTime?: string | undefined
  id?: string | undefined
  managedCertificate?: ManagedCertificate | undefined
  name?: string | undefined
  visibleDomainMappings?: string[] | undefined
}
type ListAuthorizedCertificatesResponse = {
  certificates?: AuthorizedCertificate[] | undefined
  nextPageToken?: string | undefined
}
type Empty = { [x: string]: unknown }
type AuthorizedDomain = { id?: string | undefined; name?: string | undefined }
type ListAuthorizedDomainsResponse = {
  domains?: AuthorizedDomain[] | undefined
  nextPageToken?: string | undefined
}
type ResourceRecord = {
  name?: string | undefined
  rrdata?: string | undefined
  type?: 'A' | 'AAAA' | 'CNAME' | undefined
}
type SslSettings = {
  certificateId?: string | undefined
  pendingManagedCertificateId?: string | undefined
  sslManagementType?: 'AUTOMATIC' | 'MANUAL' | undefined
}
type DomainMapping = {
  id?: string | undefined
  name?: string | undefined
  resourceRecords?: ResourceRecord[] | undefined
  sslSettings?: SslSettings | undefined
}
type ListDomainMappingsResponse = {
  domainMappings?: DomainMapping[] | undefined
  nextPageToken?: string | undefined
}
type FirewallRule = {
  action?: 'UNSPECIFIED_ACTION' | 'ALLOW' | 'DENY' | undefined
  description?: string | undefined
  priority?: number | undefined
  sourceRange?: string | undefined
}
type ListIngressRulesResponse = {
  ingressRules?: FirewallRule[] | undefined
  nextPageToken?: string | undefined
}
type BatchUpdateIngressRulesRequest = { ingressRules?: FirewallRule[] | undefined }
type BatchUpdateIngressRulesResponse = { ingressRules?: FirewallRule[] | undefined }
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
type NetworkSettings = {
  ingressTrafficAllowed?:
    | 'INGRESS_TRAFFIC_ALLOWED_UNSPECIFIED'
    | 'INGRESS_TRAFFIC_ALLOWED_ALL'
    | 'INGRESS_TRAFFIC_ALLOWED_INTERNAL_ONLY'
    | 'INGRESS_TRAFFIC_ALLOWED_INTERNAL_AND_LB'
    | undefined
}
type TrafficSplit = {
  allocations?: { [x: string]: number } | undefined
  shardBy?: 'UNSPECIFIED' | 'COOKIE' | 'IP' | 'RANDOM' | undefined
}
type Service = {
  id?: string | undefined
  labels?: { [x: string]: string } | undefined
  name?: string | undefined
  networkSettings?: NetworkSettings | undefined
  split?: TrafficSplit | undefined
}
type ListServicesResponse = { nextPageToken?: string | undefined; services?: Service[] | undefined }
type ApiConfigHandler = {
  authFailAction?:
    | 'AUTH_FAIL_ACTION_UNSPECIFIED'
    | 'AUTH_FAIL_ACTION_REDIRECT'
    | 'AUTH_FAIL_ACTION_UNAUTHORIZED'
    | undefined
  login?: 'LOGIN_UNSPECIFIED' | 'LOGIN_OPTIONAL' | 'LOGIN_ADMIN' | 'LOGIN_REQUIRED' | undefined
  script?: string | undefined
  securityLevel?:
    | 'SECURE_UNSPECIFIED'
    | 'SECURE_DEFAULT'
    | 'SECURE_NEVER'
    | 'SECURE_OPTIONAL'
    | 'SECURE_ALWAYS'
    | undefined
  url?: string | undefined
}
type CpuUtilization = {
  aggregationWindowLength?: string | undefined
  targetUtilization?: number | undefined
}
type CustomMetric = {
  filter?: string | undefined
  metricName?: string | undefined
  singleInstanceAssignment?: number | undefined
  targetType?: string | undefined
  targetUtilization?: number | undefined
}
type DiskUtilization = {
  targetReadBytesPerSecond?: number | undefined
  targetReadOpsPerSecond?: number | undefined
  targetWriteBytesPerSecond?: number | undefined
  targetWriteOpsPerSecond?: number | undefined
}
type NetworkUtilization = {
  targetReceivedBytesPerSecond?: number | undefined
  targetReceivedPacketsPerSecond?: number | undefined
  targetSentBytesPerSecond?: number | undefined
  targetSentPacketsPerSecond?: number | undefined
}
type RequestUtilization = {
  targetConcurrentRequests?: number | undefined
  targetRequestCountPerSecond?: number | undefined
}
type StandardSchedulerSettings = {
  maxInstances?: number | undefined
  minInstances?: number | undefined
  targetCpuUtilization?: number | undefined
  targetThroughputUtilization?: number | undefined
}
type AutomaticScaling = {
  coolDownPeriod?: string | undefined
  cpuUtilization?: CpuUtilization | undefined
  customMetrics?: CustomMetric[] | undefined
  diskUtilization?: DiskUtilization | undefined
  maxConcurrentRequests?: number | undefined
  maxIdleInstances?: number | undefined
  maxPendingLatency?: string | undefined
  maxTotalInstances?: number | undefined
  minIdleInstances?: number | undefined
  minPendingLatency?: string | undefined
  minTotalInstances?: number | undefined
  networkUtilization?: NetworkUtilization | undefined
  requestUtilization?: RequestUtilization | undefined
  standardSchedulerSettings?: StandardSchedulerSettings | undefined
}
type BasicScaling = { idleTimeout?: string | undefined; maxInstances?: number | undefined }
type BuildInfo = { cloudBuildId?: string | undefined }
type CloudBuildOptions = {
  appYamlPath?: string | undefined
  cloudBuildTimeout?: string | undefined
}
type ContainerInfo = { image?: string | undefined }
type FileInfo = {
  mimeType?: string | undefined
  sha1Sum?: string | undefined
  sourceUrl?: string | undefined
}
type ZipInfo = { filesCount?: number | undefined; sourceUrl?: string | undefined }
type Deployment = {
  build?: BuildInfo | undefined
  cloudBuildOptions?: CloudBuildOptions | undefined
  container?: ContainerInfo | undefined
  files?: { [x: string]: FileInfo } | undefined
  zip?: ZipInfo | undefined
}
type EndpointsApiService = {
  configId?: string | undefined
  disableTraceSampling?: boolean | undefined
  name?: string | undefined
  rolloutStrategy?: 'UNSPECIFIED_ROLLOUT_STRATEGY' | 'FIXED' | 'MANAGED' | undefined
}
type Entrypoint = { shell?: string | undefined }
type ErrorHandler = {
  errorCode?:
    | 'ERROR_CODE_UNSPECIFIED'
    | 'ERROR_CODE_DEFAULT'
    | 'ERROR_CODE_OVER_QUOTA'
    | 'ERROR_CODE_DOS_API_DENIAL'
    | 'ERROR_CODE_TIMEOUT'
    | undefined
  mimeType?: string | undefined
  staticFile?: string | undefined
}
type FlexibleRuntimeSettings = {
  operatingSystem?: string | undefined
  runtimeVersion?: string | undefined
}
type ApiEndpointHandler = { scriptPath?: string | undefined }
type ScriptHandler = { scriptPath?: string | undefined }
type StaticFilesHandler = {
  applicationReadable?: boolean | undefined
  expiration?: string | undefined
  httpHeaders?: { [x: string]: string } | undefined
  mimeType?: string | undefined
  path?: string | undefined
  requireMatchingFile?: boolean | undefined
  uploadPathRegex?: string | undefined
}
type UrlMap = {
  apiEndpoint?: ApiEndpointHandler | undefined
  authFailAction?:
    | 'AUTH_FAIL_ACTION_UNSPECIFIED'
    | 'AUTH_FAIL_ACTION_REDIRECT'
    | 'AUTH_FAIL_ACTION_UNAUTHORIZED'
    | undefined
  login?: 'LOGIN_UNSPECIFIED' | 'LOGIN_OPTIONAL' | 'LOGIN_ADMIN' | 'LOGIN_REQUIRED' | undefined
  redirectHttpResponseCode?:
    | 'REDIRECT_HTTP_RESPONSE_CODE_UNSPECIFIED'
    | 'REDIRECT_HTTP_RESPONSE_CODE_301'
    | 'REDIRECT_HTTP_RESPONSE_CODE_302'
    | 'REDIRECT_HTTP_RESPONSE_CODE_303'
    | 'REDIRECT_HTTP_RESPONSE_CODE_307'
    | undefined
  script?: ScriptHandler | undefined
  securityLevel?:
    | 'SECURE_UNSPECIFIED'
    | 'SECURE_DEFAULT'
    | 'SECURE_NEVER'
    | 'SECURE_OPTIONAL'
    | 'SECURE_ALWAYS'
    | undefined
  staticFiles?: StaticFilesHandler | undefined
  urlRegex?: string | undefined
}
type HealthCheck = {
  checkInterval?: string | undefined
  disableHealthCheck?: boolean | undefined
  healthyThreshold?: number | undefined
  host?: string | undefined
  restartThreshold?: number | undefined
  timeout?: string | undefined
  unhealthyThreshold?: number | undefined
}
type Library = { name?: string | undefined; version?: string | undefined }
type LivenessCheck = {
  checkInterval?: string | undefined
  failureThreshold?: number | undefined
  host?: string | undefined
  initialDelay?: string | undefined
  path?: string | undefined
  successThreshold?: number | undefined
  timeout?: string | undefined
}
type ManualScaling = { instances?: number | undefined }
type Network = {
  forwardedPorts?: string[] | undefined
  instanceIpMode?: 'INSTANCE_IP_MODE_UNSPECIFIED' | 'EXTERNAL' | 'INTERNAL' | undefined
  instanceTag?: string | undefined
  name?: string | undefined
  sessionAffinity?: boolean | undefined
  subnetworkName?: string | undefined
}
type ReadinessCheck = {
  appStartTimeout?: string | undefined
  checkInterval?: string | undefined
  failureThreshold?: number | undefined
  host?: string | undefined
  path?: string | undefined
  successThreshold?: number | undefined
  timeout?: string | undefined
}
type Volume = {
  name?: string | undefined
  sizeGb?: number | undefined
  volumeType?: string | undefined
}
type Resources = {
  cpu?: number | undefined
  diskGb?: number | undefined
  kmsKeyReference?: string | undefined
  memoryGb?: number | undefined
  volumes?: Volume[] | undefined
}
type VpcAccessConnector = {
  egressSetting?: 'EGRESS_SETTING_UNSPECIFIED' | 'ALL_TRAFFIC' | 'PRIVATE_IP_RANGES' | undefined
  name?: string | undefined
}
type Version = {
  apiConfig?: ApiConfigHandler | undefined
  appEngineApis?: boolean | undefined
  automaticScaling?: AutomaticScaling | undefined
  basicScaling?: BasicScaling | undefined
  betaSettings?: { [x: string]: string } | undefined
  buildEnvVariables?: { [x: string]: string } | undefined
  createTime?: string | undefined
  createdBy?: string | undefined
  defaultExpiration?: string | undefined
  deployment?: Deployment | undefined
  diskUsageBytes?: string | undefined
  endpointsApiService?: EndpointsApiService | undefined
  entrypoint?: Entrypoint | undefined
  env?: string | undefined
  envVariables?: { [x: string]: string } | undefined
  errorHandlers?: ErrorHandler[] | undefined
  flexibleRuntimeSettings?: FlexibleRuntimeSettings | undefined
  handlers?: UrlMap[] | undefined
  healthCheck?: HealthCheck | undefined
  id?: string | undefined
  inboundServices?:
    | (
        | 'INBOUND_SERVICE_UNSPECIFIED'
        | 'INBOUND_SERVICE_MAIL'
        | 'INBOUND_SERVICE_MAIL_BOUNCE'
        | 'INBOUND_SERVICE_XMPP_ERROR'
        | 'INBOUND_SERVICE_XMPP_MESSAGE'
        | 'INBOUND_SERVICE_XMPP_SUBSCRIBE'
        | 'INBOUND_SERVICE_XMPP_PRESENCE'
        | 'INBOUND_SERVICE_CHANNEL_PRESENCE'
        | 'INBOUND_SERVICE_WARMUP'
      )[]
    | undefined
  instanceClass?: string | undefined
  libraries?: Library[] | undefined
  livenessCheck?: LivenessCheck | undefined
  manualScaling?: ManualScaling | undefined
  name?: string | undefined
  network?: Network | undefined
  nobuildFilesRegex?: string | undefined
  readinessCheck?: ReadinessCheck | undefined
  resources?: Resources | undefined
  runtime?: string | undefined
  runtimeApiVersion?: string | undefined
  runtimeChannel?: string | undefined
  runtimeMainExecutablePath?: string | undefined
  serviceAccount?: string | undefined
  servingStatus?: 'SERVING_STATUS_UNSPECIFIED' | 'SERVING' | 'STOPPED' | undefined
  threadsafe?: boolean | undefined
  versionUrl?: string | undefined
  vm?: boolean | undefined
  vpcAccessConnector?: VpcAccessConnector | undefined
  zones?: string[] | undefined
}
type ListVersionsResponse = { nextPageToken?: string | undefined; versions?: Version[] | undefined }
type Instance = {
  appEngineRelease?: string | undefined
  availability?: 'UNSPECIFIED' | 'RESIDENT' | 'DYNAMIC' | undefined
  averageLatency?: number | undefined
  errors?: number | undefined
  id?: string | undefined
  memoryUsage?: string | undefined
  name?: string | undefined
  qps?: number | undefined
  requests?: number | undefined
  startTime?: string | undefined
  vmDebugEnabled?: boolean | undefined
  vmId?: string | undefined
  vmIp?: string | undefined
  vmLiveness?:
    | 'LIVENESS_STATE_UNSPECIFIED'
    | 'UNKNOWN'
    | 'HEALTHY'
    | 'UNHEALTHY'
    | 'DRAINING'
    | 'TIMEOUT'
    | undefined
  vmName?: string | undefined
  vmStatus?: string | undefined
  vmZoneName?: string | undefined
}
type ListInstancesResponse = {
  instances?: Instance[] | undefined
  nextPageToken?: string | undefined
}
type DebugInstanceRequest = { sshKey?: string | undefined }
type RepairApplicationRequest = { [x: string]: unknown }
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/v1beta/apps': {
      $post: {
        input: {
          query: {
            parent?: string | undefined
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
        } & { json: Application }
        output: Operation
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1beta/apps/:appsId': {
      $get: {
        input: { param: { appsId: string } } & {
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
        output: Application
        outputFormat: 'json'
        status: 200
      }
      $patch: {
        input: { param: { appsId: string } } & {
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
        } & { json: Application }
        output: Operation
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1beta/apps/:appsId/authorizedCertificates': {
      $get: {
        input: { param: { appsId: string } } & {
          query: {
            pageSize?: number | undefined
            pageToken?: string | undefined
            view?: 'BASIC_CERTIFICATE' | 'FULL_CERTIFICATE' | undefined
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
        output: ListAuthorizedCertificatesResponse
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: { param: { appsId: string } } & {
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
        } & { json: AuthorizedCertificate }
        output: AuthorizedCertificate
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1beta/apps/:appsId/authorizedCertificates/:authorizedCertificatesId': {
      $delete: {
        input: { param: { appsId: string; authorizedCertificatesId: string } } & {
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
        input: { param: { appsId: string; authorizedCertificatesId: string } } & {
          query: {
            view?: 'BASIC_CERTIFICATE' | 'FULL_CERTIFICATE' | undefined
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
        output: AuthorizedCertificate
        outputFormat: 'json'
        status: 200
      }
      $patch: {
        input: { param: { appsId: string; authorizedCertificatesId: string } } & {
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
        } & { json: AuthorizedCertificate }
        output: AuthorizedCertificate
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1beta/apps/:appsId/authorizedDomains': {
      $get: {
        input: { param: { appsId: string } } & {
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
        output: ListAuthorizedDomainsResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1beta/apps/:appsId/domainMappings': {
      $get: {
        input: { param: { appsId: string } } & {
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
        output: ListDomainMappingsResponse
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: { param: { appsId: string } } & {
          query: {
            overrideStrategy?:
              | 'UNSPECIFIED_DOMAIN_OVERRIDE_STRATEGY'
              | 'STRICT'
              | 'OVERRIDE'
              | undefined
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
        } & { json: DomainMapping }
        output: Operation
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1beta/apps/:appsId/domainMappings/:domainMappingsId': {
      $delete: {
        input: { param: { appsId: string; domainMappingsId: string } } & {
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
        input: { param: { appsId: string; domainMappingsId: string } } & {
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
        output: DomainMapping
        outputFormat: 'json'
        status: 200
      }
      $patch: {
        input: { param: { appsId: string; domainMappingsId: string } } & {
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
        } & { json: DomainMapping }
        output: Operation
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1beta/apps/:appsId/firewall/ingressRules': {
      $get: {
        input: { param: { appsId: string } } & {
          query: {
            matchingAddress?: string | undefined
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
        output: ListIngressRulesResponse
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: { param: { appsId: string } } & {
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
        } & { json: FirewallRule }
        output: FirewallRule
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1beta/apps/:appsId/firewall/ingressRules/:ingressRulesId': {
      $delete: {
        input: { param: { appsId: string; ingressRulesId: string } } & {
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
        input: { param: { appsId: string; ingressRulesId: string } } & {
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
        output: FirewallRule
        outputFormat: 'json'
        status: 200
      }
      $patch: {
        input: { param: { appsId: string; ingressRulesId: string } } & {
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
        } & { json: FirewallRule }
        output: FirewallRule
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1beta/apps/:appsId/firewall/ingressRules:batchUpdate': {
      $post: {
        input: { param: { appsId: string } } & {
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
        } & { json: BatchUpdateIngressRulesRequest }
        output: BatchUpdateIngressRulesResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1beta/apps/:appsId/locations': {
      $get: {
        input: { param: { appsId: string } } & {
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
    '/v1beta/apps/:appsId/locations/:locationsId': {
      $get: {
        input: { param: { appsId: string; locationsId: string } } & {
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
        output: Location
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1beta/apps/:appsId/operations': {
      $get: {
        input: { param: { appsId: string } } & {
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
    '/v1beta/apps/:appsId/operations/:operationsId': {
      $get: {
        input: { param: { appsId: string; operationsId: string } } & {
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
    '/v1beta/apps/:appsId/services': {
      $get: {
        input: { param: { appsId: string } } & {
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
        output: ListServicesResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1beta/apps/:appsId/services/:servicesId': {
      $delete: {
        input: { param: { appsId: string; servicesId: string } } & {
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
        input: { param: { appsId: string; servicesId: string } } & {
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
        output: Service
        outputFormat: 'json'
        status: 200
      }
      $patch: {
        input: { param: { appsId: string; servicesId: string } } & {
          query: {
            migrateTraffic?: boolean | undefined
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
        } & { json: Service }
        output: Operation
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1beta/apps/:appsId/services/:servicesId/versions': {
      $get: {
        input: { param: { appsId: string; servicesId: string } } & {
          query: {
            pageSize?: number | undefined
            pageToken?: string | undefined
            view?: 'BASIC' | 'FULL' | undefined
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
        output: ListVersionsResponse
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: { param: { appsId: string; servicesId: string } } & {
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
        } & { json: Version }
        output: Operation
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1beta/apps/:appsId/services/:servicesId/versions/:versionsId': {
      $delete: {
        input: { param: { appsId: string; servicesId: string; versionsId: string } } & {
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
        input: { param: { appsId: string; servicesId: string; versionsId: string } } & {
          query: {
            view?: 'BASIC' | 'FULL' | undefined
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
        output: Version
        outputFormat: 'json'
        status: 200
      }
      $patch: {
        input: { param: { appsId: string; servicesId: string; versionsId: string } } & {
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
        } & { json: Version }
        output: Operation
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1beta/apps/:appsId/services/:servicesId/versions/:versionsId/instances': {
      $get: {
        input: { param: { appsId: string; servicesId: string; versionsId: string } } & {
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
        output: ListInstancesResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1beta/apps/:appsId/services/:servicesId/versions/:versionsId/instances/:instancesId': {
      $delete: {
        input: {
          param: { appsId: string; servicesId: string; versionsId: string; instancesId: string }
        } & {
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
        input: {
          param: { appsId: string; servicesId: string; versionsId: string; instancesId: string }
        } & {
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
        output: Instance
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1beta/apps/:appsId/services/:servicesId/versions/:versionsId/instances/:instancesId:debug': {
      $post: {
        input: {
          param: { appsId: string; servicesId: string; versionsId: string; instancesId: string }
        } & {
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
        } & { json: DebugInstanceRequest }
        output: Operation
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1beta/apps/:appsId:repair': {
      $post: {
        input: { param: { appsId: string } } & {
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
        } & { json: RepairApplicationRequest }
        output: Operation
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1beta/projects/:projectsId/locations': {
      $get: {
        input: { param: { projectsId: string } } & {
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
    '/v1beta/projects/:projectsId/locations/:locationsId': {
      $get: {
        input: { param: { projectsId: string; locationsId: string } } & {
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
        output: Location
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1beta/projects/:projectsId/locations/:locationsId/applications': {
      $post: {
        input: { param: { projectsId: string; locationsId: string } } & {
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
        } & { json: Application }
        output: Operation
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1beta/projects/:projectsId/locations/:locationsId/applications/:applicationsId': {
      $get: {
        input: { param: { projectsId: string; locationsId: string; applicationsId: string } } & {
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
        output: Application
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1beta/projects/:projectsId/locations/:locationsId/applications/:applicationsId:repair': {
      $post: {
        input: { param: { projectsId: string; locationsId: string; applicationsId: string } } & {
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
        } & { json: RepairApplicationRequest }
        output: Operation
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1beta/projects/:projectsId/locations/:locationsId/operations': {
      $get: {
        input: { param: { projectsId: string; locationsId: string } } & {
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
    '/v1beta/projects/:projectsId/locations/:locationsId/operations/:operationsId': {
      $get: {
        input: { param: { projectsId: string; locationsId: string; operationsId: string } } & {
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
  },
  '/'
>
export default routes
