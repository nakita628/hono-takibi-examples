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
type ListOperationsResponse = {
  nextPageToken?: string | undefined
  operations?: Operation[] | undefined
}
type QuotaOverride = {
  adminOverrideAncestor?: string | undefined
  dimensions?: { [x: string]: string } | undefined
  metric?: string | undefined
  name?: string | undefined
  overrideValue?: string | undefined
  unit?: string | undefined
}
type QuotaBucket = {
  adminOverride?: QuotaOverride | undefined
  consumerOverride?: QuotaOverride | undefined
  defaultLimit?: string | undefined
  dimensions?: { [x: string]: string } | undefined
  effectiveLimit?: string | undefined
  producerOverride?: QuotaOverride | undefined
}
type ConsumerQuotaLimit = {
  allowsAdminOverrides?: boolean | undefined
  isPrecise?: boolean | undefined
  metric?: string | undefined
  name?: string | undefined
  quotaBuckets?: QuotaBucket[] | undefined
  supportedLocations?: string[] | undefined
  unit?: string | undefined
}
type DisableServiceRequest = { [x: string]: unknown }
type EnableServiceRequest = { [x: string]: unknown }
type ListAdminOverridesResponse = {
  nextPageToken?: string | undefined
  overrides?: QuotaOverride[] | undefined
}
type ListConsumerOverridesResponse = {
  nextPageToken?: string | undefined
  overrides?: QuotaOverride[] | undefined
}
type ConsumerQuotaMetric = {
  consumerQuotaLimits?: ConsumerQuotaLimit[] | undefined
  descendantConsumerQuotaLimits?: ConsumerQuotaLimit[] | undefined
  displayName?: string | undefined
  metric?: string | undefined
  name?: string | undefined
  unit?: string | undefined
}
type ListConsumerQuotaMetricsResponse = {
  metrics?: ConsumerQuotaMetric[] | undefined
  nextPageToken?: string | undefined
}
type OverrideInlineSource = { overrides?: QuotaOverride[] | undefined }
type ImportAdminOverridesRequest = {
  force?: boolean | undefined
  forceOnly?:
    | (
        | 'QUOTA_SAFETY_CHECK_UNSPECIFIED'
        | 'LIMIT_DECREASE_BELOW_USAGE'
        | 'LIMIT_DECREASE_PERCENTAGE_TOO_HIGH'
      )[]
    | undefined
  inlineSource?: OverrideInlineSource | undefined
}
type ImportConsumerOverridesRequest = {
  force?: boolean | undefined
  forceOnly?:
    | (
        | 'QUOTA_SAFETY_CHECK_UNSPECIFIED'
        | 'LIMIT_DECREASE_BELOW_USAGE'
        | 'LIMIT_DECREASE_PERCENTAGE_TOO_HIGH'
      )[]
    | undefined
  inlineSource?: OverrideInlineSource | undefined
}
type Option = {
  name?: string | undefined
  value?: { [x: string]: { [x: string]: unknown } } | undefined
}
type Method = {
  name?: string | undefined
  options?: Option[] | undefined
  requestStreaming?: boolean | undefined
  requestTypeUrl?: string | undefined
  responseStreaming?: boolean | undefined
  responseTypeUrl?: string | undefined
  syntax?: 'SYNTAX_PROTO2' | 'SYNTAX_PROTO3' | 'SYNTAX_EDITIONS' | undefined
}
type Mixin = { name?: string | undefined; root?: string | undefined }
type SourceContext = { fileName?: string | undefined }
type Api = {
  methods?: Method[] | undefined
  mixins?: Mixin[] | undefined
  name?: string | undefined
  options?: Option[] | undefined
  sourceContext?: SourceContext | undefined
  syntax?: 'SYNTAX_PROTO2' | 'SYNTAX_PROTO3' | 'SYNTAX_EDITIONS' | undefined
  version?: string | undefined
}
type JwtLocation = {
  cookie?: string | undefined
  header?: string | undefined
  query?: string | undefined
  valuePrefix?: string | undefined
}
type AuthProvider = {
  audiences?: string | undefined
  authorizationUrl?: string | undefined
  id?: string | undefined
  issuer?: string | undefined
  jwksUri?: string | undefined
  jwtLocations?: JwtLocation[] | undefined
}
type OAuthRequirements = { canonicalScopes?: string | undefined }
type AuthRequirement = { audiences?: string | undefined; providerId?: string | undefined }
type AuthenticationRule = {
  allowWithoutCredential?: boolean | undefined
  oauth?: OAuthRequirements | undefined
  requirements?: AuthRequirement[] | undefined
  selector?: string | undefined
}
type Authentication = {
  providers?: AuthProvider[] | undefined
  rules?: AuthenticationRule[] | undefined
}
type Page = {
  content?: string | undefined
  name?: string | undefined
  subpages?: Page[] | undefined
}
type DocumentationRule = {
  deprecationDescription?: string | undefined
  description?: string | undefined
  selector?: string | undefined
}
type Documentation = {
  documentationRootUrl?: string | undefined
  overview?: string | undefined
  pages?: Page[] | undefined
  rules?: DocumentationRule[] | undefined
  serviceRootUrl?: string | undefined
  summary?: string | undefined
}
type Endpoint = {
  aliases?: string[] | undefined
  allowCors?: boolean | undefined
  name?: string | undefined
  target?: string | undefined
}
type LabelDescriptor = {
  description?: string | undefined
  key?: string | undefined
  valueType?: 'STRING' | 'BOOL' | 'INT64' | undefined
}
type MonitoredResourceDescriptor = {
  description?: string | undefined
  displayName?: string | undefined
  labels?: LabelDescriptor[] | undefined
  launchStage?:
    | 'LAUNCH_STAGE_UNSPECIFIED'
    | 'UNIMPLEMENTED'
    | 'PRELAUNCH'
    | 'EARLY_ACCESS'
    | 'ALPHA'
    | 'BETA'
    | 'GA'
    | 'DEPRECATED'
    | undefined
  name?: string | undefined
  type?: string | undefined
}
type MonitoringDestination = {
  metrics?: string[] | undefined
  monitoredResource?: string | undefined
}
type Monitoring = {
  consumerDestinations?: MonitoringDestination[] | undefined
  producerDestinations?: MonitoringDestination[] | undefined
}
type QuotaLimit = {
  defaultLimit?: string | undefined
  description?: string | undefined
  displayName?: string | undefined
  duration?: string | undefined
  freeTier?: string | undefined
  maxLimit?: string | undefined
  metric?: string | undefined
  name?: string | undefined
  unit?: string | undefined
  values?: { [x: string]: string } | undefined
}
type MetricRule = {
  metricCosts?: { [x: string]: string } | undefined
  selector?: string | undefined
}
type Quota = { limits?: QuotaLimit[] | undefined; metricRules?: MetricRule[] | undefined }
type UsageRule = {
  allowUnregisteredCalls?: boolean | undefined
  selector?: string | undefined
  skipServiceControl?: boolean | undefined
}
type Usage = {
  producerNotificationChannel?: string | undefined
  requirements?: string[] | undefined
  rules?: UsageRule[] | undefined
}
type ServiceConfig = {
  apis?: Api[] | undefined
  authentication?: Authentication | undefined
  documentation?: Documentation | undefined
  endpoints?: Endpoint[] | undefined
  monitoredResources?: MonitoredResourceDescriptor[] | undefined
  monitoring?: Monitoring | undefined
  name?: string | undefined
  quota?: Quota | undefined
  title?: string | undefined
  usage?: Usage | undefined
}
type Service = {
  config?: ServiceConfig | undefined
  name?: string | undefined
  parent?: string | undefined
  state?: 'STATE_UNSPECIFIED' | 'DISABLED' | 'ENABLED' | undefined
}
type ListServicesResponse = { nextPageToken?: string | undefined; services?: Service[] | undefined }
type BatchEnableServicesRequest = { serviceIds?: string[] | undefined }
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/v1beta1/operations': {
      $get: {
        input: {
          query: {
            filter?: string | undefined
            name?: string | undefined
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
    '/v1beta1/:name': {
      $delete: {
        input: { param: { name: string } } & {
          query: {
            force?: boolean | undefined
            forceOnly?:
              | (
                  | 'QUOTA_SAFETY_CHECK_UNSPECIFIED'
                  | 'LIMIT_DECREASE_BELOW_USAGE'
                  | 'LIMIT_DECREASE_PERCENTAGE_TOO_HIGH'
                )[]
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
        }
        output: Operation
        outputFormat: 'json'
        status: 200
      }
      $get: {
        input: { param: { name: string } } & {
          query: {
            view?: 'QUOTA_VIEW_UNSPECIFIED' | 'BASIC' | 'FULL' | undefined
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
        output: ConsumerQuotaLimit
        outputFormat: 'json'
        status: 200
      }
      $patch: {
        input: { param: { name: string } } & {
          query: {
            force?: boolean | undefined
            forceOnly?:
              | (
                  | 'QUOTA_SAFETY_CHECK_UNSPECIFIED'
                  | 'LIMIT_DECREASE_BELOW_USAGE'
                  | 'LIMIT_DECREASE_PERCENTAGE_TOO_HIGH'
                )[]
              | undefined
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
        } & { json: QuotaOverride }
        output: Operation
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1beta1/:name:disable': {
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
        } & { json: DisableServiceRequest }
        output: Operation
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1beta1/:name:enable': {
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
        } & { json: EnableServiceRequest }
        output: Operation
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1beta1/:parent/adminOverrides': {
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
        output: ListAdminOverridesResponse
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: { param: { parent: string } } & {
          query: {
            force?: boolean | undefined
            forceOnly?:
              | (
                  | 'QUOTA_SAFETY_CHECK_UNSPECIFIED'
                  | 'LIMIT_DECREASE_BELOW_USAGE'
                  | 'LIMIT_DECREASE_PERCENTAGE_TOO_HIGH'
                )[]
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
        } & { json: QuotaOverride }
        output: Operation
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1beta1/:parent/consumerOverrides': {
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
        output: ListConsumerOverridesResponse
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: { param: { parent: string } } & {
          query: {
            force?: boolean | undefined
            forceOnly?:
              | (
                  | 'QUOTA_SAFETY_CHECK_UNSPECIFIED'
                  | 'LIMIT_DECREASE_BELOW_USAGE'
                  | 'LIMIT_DECREASE_PERCENTAGE_TOO_HIGH'
                )[]
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
        } & { json: QuotaOverride }
        output: Operation
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1beta1/:parent/consumerQuotaMetrics': {
      $get: {
        input: { param: { parent: string } } & {
          query: {
            pageSize?: number | undefined
            pageToken?: string | undefined
            view?: 'QUOTA_VIEW_UNSPECIFIED' | 'BASIC' | 'FULL' | undefined
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
        output: ListConsumerQuotaMetricsResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1beta1/:parent/consumerQuotaMetrics:importAdminOverrides': {
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
        } & { json: ImportAdminOverridesRequest }
        output: Operation
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1beta1/:parent/consumerQuotaMetrics:importConsumerOverrides': {
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
        } & { json: ImportConsumerOverridesRequest }
        output: Operation
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1beta1/:parent/services': {
      $get: {
        input: { param: { parent: string } } & {
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
        output: ListServicesResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1beta1/:parent/services:batchEnable': {
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
        } & { json: BatchEnableServicesRequest }
        output: Operation
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1beta1/:parent:generateServiceIdentity': {
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
