type SelfLinks = { rel?: string | undefined }
type ResourceMeta = {
  name: string
  displayName?: string | undefined
  description?: string | undefined
  kind?: string | undefined
  uid?: string | undefined
  tags?: string[] | undefined
  ref?: string | undefined
  links?: SelfLinks | undefined
  createTime?: string | undefined
  updateTime?: string | undefined
}
type AlertRuleStatus = {
  alertsCount?: number | undefined
  status?: 'ok' | 'ongoing' | undefined
  lastStartedTimestamp?: string | undefined
  lastExpiredTimestamp?: string | undefined
  lastCheckedTimestamp?: string | undefined
}
type AlertRule = {
  metadata: ResourceMeta
  userEmail?: string | undefined
  metric: string
  aggregation?: string | undefined
  filter?: string | undefined
  groupBy?: string | undefined
  threshold: number
  operator: 'ge' | 'le'
  period: string
  notificationType?: 'email' | undefined
  emailAddresses?: string[] | undefined
  mute?: boolean | undefined
  status?: AlertRuleStatus | undefined
}
type ErrorDetail = { description: string }
type ErrorModel = { message: string; code: number; details?: ErrorDetail[] | undefined }
type Alert = {
  uid: string
  dimensions: { [x: string]: string }
  startedTimestamp: string
  startedValue: number
  lastCheckedTimestamp: string
  lastCheckedValue: number
}
type NamedLinks = {
  rel?: string | undefined
  name?: string | undefined
  displayName?: string | undefined
}
type ResourceRef = { ref: string; links?: NamedLinks | undefined }
type MetricDescription = {
  name?: string | undefined
  description?: string | undefined
  unit?: string | undefined
  aggregations?: ('AVG' | 'COUNT' | 'SUM' | 'MAX' | 'MIN')[] | undefined
  type?: 'counter' | 'gauge' | 'incremental' | undefined
  categories?: string[] | undefined
  dimensions?: ResourceRef[] | undefined
}
type MetricDescriptionRecord = { metadata: ResourceMeta; currentStatus: MetricDescription }
type ListMetricsDescriptionsResponse = { items?: MetricDescriptionRecord[] | undefined }
type DimensionDescription = {
  name?: string | undefined
  description?: string | undefined
  type?: 'string' | 'int' | 'list' | undefined
  metrics?: ResourceRef[] | undefined
}
type DimensionDescriptionRecord = { metadata: ResourceMeta; currentStatus: DimensionDescription }
type ListDimensionsDescriptionsResponse = { items?: DimensionDescriptionRecord[] | undefined }
type Time = string
type PaginationLinks = { next?: SelfLinks | undefined; prev?: SelfLinks | undefined }
type MetadataPagination = {
  pageToken: string
  links?: PaginationLinks | undefined
  total?: number | undefined
}
type Metadata = { pagination?: MetadataPagination | undefined }
type Event = {
  timestamp?: string | undefined
  id?: string | undefined
  message?: string | undefined
  count?: number | undefined
  category?: string | undefined
  level?: 'DEBUG' | 'INFO' | 'WARNING' | 'ERROR' | 'CRITICAL' | undefined
  hostname?: string | undefined
  alias?: string | undefined
  status?: string | undefined
  error?: string | undefined
  local_id?: string | undefined
  root_uuid?: string | undefined
  tags?: string[] | undefined
  instance?: string | undefined
  location?: string | undefined
  correlationId?: string | undefined
  'http.request_endpoint'?: string | undefined
  'http.request_method'?: string | undefined
  user?: string | undefined
  environment?: string | undefined
  app?: string | undefined
  component?: string | undefined
  gateway?: string | undefined
  request_outcome?: 'REJECTED' | 'PASSED' | undefined
  request_outcome_reason?:
    | 'SECURITY_WAF_OK'
    | 'SECURITY_WAF_VIOLATION'
    | 'SECURITY_WAF_FLAGGED'
    | 'SECURITY_WAF_BYPASS'
    | 'SECURITY_NGINX_VIOLATION'
    | 'SECURITY_WAF_VIOLATION_TRANSPARENT'
    | undefined
  'http.response_code'?: number | undefined
  'http.hostname'?: string | undefined
  'http.remote_addr'?: string | undefined
  'http.remote_port'?: number | undefined
  'http.server_addr'?: string | undefined
  'http.server_port'?: number | undefined
  'http.request'?: string | undefined
  'waf.support_id'?: string | undefined
  'waf.signature_ids'?: string | undefined
  'waf.policy'?: string | undefined
  'waf.attack_types'?: string | undefined
  'waf.violation_rating'?:
    | 'RISK_COULD_NOT_BE_DETERMINED'
    | 'POSSIBLE_ATTACK'
    | 'MOST_LIKELY_ATTACK'
    | undefined
  'waf.signature_names'?: string | undefined
  'waf.is_truncated'?: string | undefined
  'waf.signature_cves'?: string | undefined
  'waf.sub_violations'?: string | undefined
  'waf.violations'?: string | undefined
  'waf.x_forwarded_for_header_value'?: string | undefined
  'waf.bot_anomalies'?: string | undefined
  'waf.bot_category'?: string | undefined
  'waf.bot_client_class'?: string | undefined
  'waf.bot_signature_name'?: string | undefined
  'waf.enforced_bot_anomalies'?: string | undefined
  action_type?: string | undefined
  action_outcome?: string | undefined
  'auth_provider.name'?: string | undefined
  'auth_provider.type'?: string | undefined
  resource_name?: string | undefined
  big_ip_address?: string | undefined
  workload_health_state?: string | undefined
}
type EventQueryResult = { Metadata?: Metadata | undefined; items?: Event[] | undefined }
type ForwarderStream = {
  outputFormat: 'SPLUNK' | 'DATADOG' | 'SYSLOG' | 'OTLP'
  inputDataType: 'METRICS' | 'EVENTS'
  selector: string
}
type DesiredState = {
  integrationRef: ResourceRef
  collectorType: 'DATADOG' | 'SPLUNK' | 'SYSLOG'
  streams: ForwarderStream[]
}
type ConfigStateTally = {
  isConfigured?: boolean | undefined
  isConfiguring?: boolean | undefined
  isError?: boolean | undefined
  isDeleting?: boolean | undefined
  total?: number | undefined
  configured?: number | undefined
  configuring?: number | undefined
  error?: number | undefined
  deleting?: number | undefined
}
type ConfigCondition = { type?: string | undefined; message?: string | undefined }
type ConfigState = {
  selfConfigState?: ConfigStateTally | undefined
  childrenConfigState?: ConfigStateTally | undefined
  conditions?: ConfigCondition[] | undefined
}
type CurrentStatus = {
  state: ConfigState
  integrationRef: ResourceRef
  collectorType: 'DATADOG' | 'SPLUNK' | 'SYSLOG' | 'OTLP_HTTP' | 'OTLP_GRPC'
  streams: ForwarderStream[]
}
type Forwarder = {
  metadata: ResourceMeta
  desiredState: DesiredState
  currentStatus?: CurrentStatus | undefined
}
type ForwarderListResponse = { items?: Forwarder[] | undefined }
type MetricQueryMetadata = {
  startTime?: string | undefined
  endTime?: string | undefined
  resolution?: string | undefined
}
type Series = {
  dimensions?: { [x: string]: string } | undefined
  timestamps?: string[] | undefined
  values?: number[] | undefined
}
type Metric = {
  name?: string | undefined
  aggr?: 'AVG' | 'COUNT' | 'SUM' | 'MAX' | 'MIN' | 'RATE' | undefined
  series?: Series[] | undefined
}
type MetricResponseMetadata = { warning?: string | undefined }
type MetricQueryResult = {
  queryMetadata?: MetricQueryMetadata | undefined
  metrics?: Metric[] | undefined
  responseMetadata?: MetricResponseMetadata | undefined
}
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/analytics/alerts/rules': {
      $get:
        | { input: {}; output: AlertRule[]; outputFormat: 'json'; status: 200 }
        | { input: {}; output: ErrorModel; outputFormat: 'json'; status: 400 }
        | { input: {}; output: ErrorModel; outputFormat: 'json'; status: 500 }
      $post:
        | { input: { json: AlertRule }; output: AlertRule; outputFormat: 'json'; status: 201 }
        | { input: { json: AlertRule }; output: ErrorModel; outputFormat: 'json'; status: 400 }
        | { input: { json: AlertRule }; output: ErrorModel; outputFormat: 'json'; status: 409 }
        | { input: { json: AlertRule }; output: ErrorModel; outputFormat: 'json'; status: 500 }
    }
  } & {
    '/analytics/alerts/rules/:alertRuleName': {
      $get:
        | {
            input: { param: { alertRuleName: string } }
            output: AlertRule
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { alertRuleName: string } }
            output: ErrorModel
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { alertRuleName: string } }
            output: ErrorModel
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { alertRuleName: string } }
            output: ErrorModel
            outputFormat: 'json'
            status: 500
          }
      $put:
        | {
            input: { param: { alertRuleName: string } } & { json: AlertRule }
            output: AlertRule
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { alertRuleName: string } } & { json: AlertRule }
            output: AlertRule
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { param: { alertRuleName: string } } & { json: AlertRule }
            output: ErrorModel
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { alertRuleName: string } } & { json: AlertRule }
            output: ErrorModel
            outputFormat: 'json'
            status: 500
          }
      $delete:
        | {
            input: { param: { alertRuleName: string } }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { alertRuleName: string } }
            output: ErrorModel
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { alertRuleName: string } }
            output: ErrorModel
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { alertRuleName: string } }
            output: ErrorModel
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/analytics/alerts/rules/:alertRuleName/alerts': {
      $get:
        | {
            input: { param: { alertRuleName: string } }
            output: Alert[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { alertRuleName: string } }
            output: ErrorModel
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { alertRuleName: string } }
            output: ErrorModel
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { alertRuleName: string } }
            output: ErrorModel
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/analytics/alerts/rules/:alertRuleName/alerts/:alertId': {
      $get:
        | {
            input: { param: { alertRuleName: string; alertId: string } }
            output: Alert
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { alertRuleName: string; alertId: string } }
            output: ErrorModel
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { alertRuleName: string; alertId: string } }
            output: ErrorModel
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { alertRuleName: string; alertId: string } }
            output: ErrorModel
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/analytics/catalogs/metrics': {
      $get: {
        input: {}
        output: ListMetricsDescriptionsResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/analytics/catalogs/metrics/:metricName': {
      $get:
        | {
            input: { param: { metricName: string } }
            output: MetricDescriptionRecord
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { metricName: string } }
            output: ErrorModel
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { metricName: string } }
            output: ErrorModel
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/analytics/catalogs/dimensions': {
      $get: {
        input: {}
        output: ListDimensionsDescriptionsResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/analytics/catalogs/dimensions/:dimensionName': {
      $get:
        | {
            input: { param: { dimensionName: string } }
            output: DimensionDescriptionRecord
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { dimensionName: string } }
            output: ErrorModel
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { dimensionName: string } }
            output: ErrorModel
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/analytics/events': {
      $get:
        | {
            input: {
              query: {
                startTime?: Time | undefined
                endTime?: Time | undefined
                filter?: string | undefined
                orderBy?: string | undefined
                page?: number | undefined
                pageToken?: string | undefined
                pageSize?: number | undefined
                includeTotal?: boolean | undefined
              }
            }
            output: EventQueryResult
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                startTime?: Time | undefined
                endTime?: Time | undefined
                filter?: string | undefined
                orderBy?: string | undefined
                page?: number | undefined
                pageToken?: string | undefined
                pageSize?: number | undefined
                includeTotal?: boolean | undefined
              }
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/analytics/events/:id': {
      $get:
        | { input: { param: { id: string } }; output: Event; outputFormat: 'json'; status: 200 }
        | {
            input: { param: { id: string } }
            output: ErrorModel
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/analytics/forwarders': {
      $post:
        | { input: { json: Forwarder }; output: Forwarder; outputFormat: 'json'; status: 202 }
        | { input: { json: Forwarder }; output: ErrorModel; outputFormat: 'json'; status: 400 }
        | { input: { json: Forwarder }; output: ErrorModel; outputFormat: 'json'; status: 401 }
        | { input: { json: Forwarder }; output: ErrorModel; outputFormat: 'json'; status: 403 }
        | { input: { json: Forwarder }; output: ErrorModel; outputFormat: 'json'; status: 409 }
        | { input: { json: Forwarder }; output: ErrorModel; outputFormat: 'json'; status: 500 }
      $get:
        | { input: {}; output: ForwarderListResponse; outputFormat: 'json'; status: 200 }
        | { input: {}; output: ErrorModel; outputFormat: 'json'; status: 401 }
        | { input: {}; output: ErrorModel; outputFormat: 'json'; status: 403 }
        | { input: {}; output: ErrorModel; outputFormat: 'json'; status: 500 }
    }
  } & {
    '/analytics/forwarders/:forwarderName': {
      $get:
        | {
            input: { param: { forwarderName: string } }
            output: Forwarder
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { forwarderName: string } }
            output: ErrorModel
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { forwarderName: string } }
            output: ErrorModel
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { forwarderName: string } }
            output: ErrorModel
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { forwarderName: string } }
            output: ErrorModel
            outputFormat: 'json'
            status: 500
          }
      $put:
        | {
            input: { param: { forwarderName: string } } & { json: Forwarder }
            output: Forwarder
            outputFormat: 'json'
            status: 202
          }
        | {
            input: { param: { forwarderName: string } } & { json: Forwarder }
            output: ErrorModel
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { forwarderName: string } } & { json: Forwarder }
            output: ErrorModel
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { forwarderName: string } } & { json: Forwarder }
            output: ErrorModel
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { forwarderName: string } } & { json: Forwarder }
            output: ErrorModel
            outputFormat: 'json'
            status: 500
          }
      $delete:
        | {
            input: { param: { forwarderName: string } }
            output: Forwarder
            outputFormat: 'json'
            status: 202
          }
        | {
            input: { param: { forwarderName: string } }
            output: ErrorModel
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { forwarderName: string } }
            output: ErrorModel
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { forwarderName: string } }
            output: ErrorModel
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { forwarderName: string } }
            output: ErrorModel
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/analytics/metrics': {
      $get:
        | {
            input: {
              query: {
                names: string
                startTime?: Time | undefined
                endTime?: Time | undefined
                resolution?: string | undefined
                filter?: string | undefined
                groupBy?: string | undefined
                seriesLimit?: number | undefined
                orderSeriesBy?: string | undefined
                dimensions?: string | undefined
              }
            }
            output: MetricQueryResult
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                names: string
                startTime?: Time | undefined
                endTime?: Time | undefined
                resolution?: string | undefined
                filter?: string | undefined
                groupBy?: string | undefined
                seriesLimit?: number | undefined
                orderSeriesBy?: string | undefined
                dimensions?: string | undefined
              }
            }
            output: ErrorModel
            outputFormat: 'json'
            status: 400
          }
    }
  },
  '/'
>
export default routes
