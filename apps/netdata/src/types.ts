type Api = number
type Agents = {
  mg?: string | undefined
  nd?: string | undefined
  nm?: string | undefined
  ai?: number | undefined
  now?: number | undefined
}[]
type Versions = {
  nodes_hard_hash?: number | undefined
  contexts_hard_hash?: number | undefined
  contexts_soft_hash?: number | undefined
  alerts_hard_hash?: number | undefined
  alerts_soft_hash?: number | undefined
}
type NodeFull = {
  mg?: string | undefined
  nd?: string | undefined
  nm?: string | undefined
  ni: number
  st: {
    ai?: number | undefined
    code?: number | undefined
    msg?: string | undefined
    ms?: number | undefined
  }
  version?: string | undefined
  hops?: number | undefined
  state?: 'reachable' | 'stale' | 'offline' | undefined
}
type Context2Basic = {
  family?: string | undefined
  priority?: number | undefined
  first_entry?: number | undefined
  last_entry?: number | undefined
  live?: boolean | undefined
}
type Contexts2 = {
  api?: Api | undefined
  agents?: Agents | undefined
  versions?: Versions | undefined
  contexts?: { [x: string]: Context2Basic } | undefined
}
type Info = {
  version?: string | undefined
  uid?: string | undefined
  mirrored_hosts?: string[] | undefined
  mirrored_hosts_status?:
    | {
        guid?: string | undefined
        reachable?: boolean | undefined
        claim_id?: (string | null) | undefined
      }[]
    | undefined
  os_name?: string | undefined
  os_id?: string | undefined
  os_id_like?: string | undefined
  os_version?: string | undefined
  os_version_id?: string | undefined
  os_detection?: string | undefined
  kernel_name?: string | undefined
  kernel_version?: string | undefined
  is_k8s_node?: boolean | undefined
  architecture?: string | undefined
  virtualization?: string | undefined
  virt_detection?: string | undefined
  container?: string | undefined
  container_detection?: string | undefined
  stream_compression?: boolean | undefined
  labels?: { app?: string | undefined } | undefined
  collectors?: { plugin?: string | undefined; module?: string | undefined }[] | undefined
  alarms?:
    | { normal?: number | undefined; warning?: number | undefined; critical?: number | undefined }
    | undefined
}
type ChartVariables = { varname1?: number | undefined; varname2?: number | undefined }
type Chart = {
  id?: string | undefined
  name?: string | undefined
  type?: string | undefined
  family?: string | undefined
  title?: string | undefined
  priority?: number | undefined
  enabled?: boolean | undefined
  units?: string | undefined
  data_url?: string | undefined
  chart_type?: 'line' | 'area' | 'stacked' | undefined
  duration?: number | undefined
  first_entry?: number | undefined
  last_entry?: number | undefined
  update_every?: number | undefined
  dimensions?: { [x: string]: { name?: string | undefined } } | undefined
  chart_variables?: { [x: string]: ChartVariables } | undefined
  green?: (number | null) | undefined
  red?: (number | null) | undefined
}
type ChartSummary = {
  hostname?: string | undefined
  version?: string | undefined
  release_channel?: string | undefined
  timezone?: string | undefined
  os?: 'macos' | 'linux' | 'freebsd' | undefined
  history?: number | undefined
  memory_mode?: string | undefined
  update_every?: number | undefined
  charts?: { [x: string]: Chart } | undefined
  charts_count?: number | undefined
  dimensions_count?: number | undefined
  alarms_count?: number | undefined
  rrd_memory_bytes?: number | undefined
}
type Context = {
  version?: string | undefined
  hub_version?: string | undefined
  family?: string | undefined
  title?: string | undefined
  priority?: number | undefined
  units?: string | undefined
  chart_type?: 'line' | 'area' | 'stacked' | undefined
  first_time_t?: number | undefined
  last_time_t?: number | undefined
  charts?: { [x: string]: unknown } | undefined
}
type ContextSummary = {
  hostname?: string | undefined
  machine_guid?: string | undefined
  node_id?: string | undefined
  claim_id?: string | undefined
  host_labels?: { [x: string]: unknown } | undefined
  context?: { [x: string]: Context } | undefined
}
type ConfigDefaultResponse = {
  status?: number | undefined
  message?: string | undefined
  data?: { [x: string]: unknown } | undefined
}
type ConfigEntity = {
  type?: string | undefined
  status?: string | undefined
  cmds?: string[] | undefined
  source_type?: string | undefined
  source?: string | undefined
  sync?: boolean | undefined
  user_disabled?: boolean | undefined
  restart_required?: boolean | undefined
  plugin_rejected?: boolean | undefined
  payload?: { available?: boolean | undefined } | undefined
  saves?: number | undefined
  created_ut?: bigint | undefined
  modified_ut?: bigint | undefined
  template?: string | undefined
}
type ConfigAttention = {
  degraded?: boolean | undefined
  restart_required?: number | undefined
  plugin_rejected?: number | undefined
  status_failed?: number | undefined
  status_incomplete?: number | undefined
}
type ConfigTree = {
  version?: number | undefined
  tree?: { [x: string]: { [x: string]: ConfigEntity } } | undefined
  attention?: ConfigAttention | undefined
}
type ConfigSchema = {
  jsonSchema?: { [x: string]: unknown } | undefined
  uiSchema?: { [x: string]: unknown } | undefined
}
type Jsonwrap2ItemsCount = {
  sl?: number | undefined
  ex?: number | undefined
  qr?: number | undefined
  fl?: number | undefined
}
type Jsonwrap2AlertsCount = {
  nm?: string | undefined
  cl?: number | undefined
  wr?: number | undefined
  cr?: number | undefined
  ot?: number | undefined
}
type Jsonwrap2Sts = {
  min?: number | undefined
  max?: number | undefined
  avg?: number | undefined
  arp?: number | undefined
  con?: number | undefined
}
type Jsonwrap2StsRaw = {
  min?: number | undefined
  max?: number | undefined
  sum?: number | undefined
  ars?: number | undefined
  vol?: number | undefined
  cnt?: number | undefined
}
type NodeWithDataStatistics = {
  mg?: string | undefined
  nd?: string | undefined
  nm?: string | undefined
  ni: number
  st: {
    ai?: number | undefined
    code?: number | undefined
    msg?: string | undefined
    ms?: number | undefined
  }
  is?: Jsonwrap2ItemsCount | undefined
  ds?: Jsonwrap2ItemsCount | undefined
  al?: Jsonwrap2AlertsCount | undefined
  sts?: Jsonwrap2Sts | Jsonwrap2StsRaw | undefined
}
type DataJson2 = {
  labels?: string[] | undefined
  point?:
    | {
        value?: number | undefined
        arp?: number | undefined
        pa?: number | undefined
        count?: number | undefined
        hidden?: { [x: string]: unknown } | undefined
      }
    | undefined
  data?: (number | number[])[] | undefined
}
type DataJson = { labels?: string[] | undefined; data?: number[] | undefined }
type DataDatatable = {
  cols?:
    | {
        id: { [x: string]: unknown }
        label: { [x: string]: unknown }
        pattern: { [x: string]: unknown }
        type: { [x: string]: unknown }
        p?: { [x: string]: unknown } | undefined
      }[]
    | undefined
  rows?: { c?: { v?: { [x: string]: unknown } | undefined }[] | undefined }[] | undefined
}
type DataCsvjsonarray = { [x: string]: unknown }[][]
type DataArray = number[]
type DataTxt = string
type DataJsonFormats1 = DataJson | DataDatatable | DataCsvjsonarray | DataArray | DataTxt
type DataJsonFormats2 = DataJson2 | DataJsonFormats1
type Jsonwrap2 = {
  api?: Api | undefined
  agents?: Agents | undefined
  versions?: Versions | undefined
  summary?:
    | {
        nodes?: NodeWithDataStatistics[] | undefined
        contexts?:
          | {
              id?: string | undefined
              is?: Jsonwrap2ItemsCount | undefined
              ds?: Jsonwrap2ItemsCount | undefined
              al?: Jsonwrap2AlertsCount | undefined
              sts?: Jsonwrap2Sts | Jsonwrap2StsRaw | undefined
            }[]
          | undefined
        instances?:
          | {
              id?: string | undefined
              nm?: string | undefined
              ni?: { [x: string]: unknown } | undefined
              ds?: Jsonwrap2ItemsCount | undefined
              al?: Jsonwrap2AlertsCount | undefined
              sts?: Jsonwrap2Sts | Jsonwrap2StsRaw | undefined
            }[]
          | undefined
        dimensions?:
          | {
              id?: string | undefined
              nm?: string | undefined
              ds?: Jsonwrap2ItemsCount | undefined
              sts?: Jsonwrap2Sts | Jsonwrap2StsRaw | undefined
            }[]
          | undefined
        labels?:
          | {
              id?: string | undefined
              ds?: Jsonwrap2ItemsCount | undefined
              sts?: Jsonwrap2Sts | Jsonwrap2StsRaw | undefined
              vl?:
                | {
                    id?: string | undefined
                    ds?: Jsonwrap2ItemsCount | undefined
                    sts?: Jsonwrap2Sts | Jsonwrap2StsRaw | undefined
                  }[]
                | undefined
            }[]
          | undefined
        alerts?: Jsonwrap2AlertsCount[] | undefined
      }
    | undefined
  totals?:
    | {
        nodes?: Jsonwrap2ItemsCount | undefined
        contexts?: Jsonwrap2ItemsCount | undefined
        instances?: Jsonwrap2ItemsCount | undefined
        dimensions?: Jsonwrap2ItemsCount | undefined
        label_keys?: Jsonwrap2ItemsCount | undefined
        label_key_values?: Jsonwrap2ItemsCount | undefined
      }
    | undefined
  functions?: string[] | undefined
  db?:
    | {
        tiers?: number | undefined
        update_every?: number | undefined
        first_entry?: number | undefined
        last_entry?: number | undefined
        per_tier?:
          | {
              tier?: number | undefined
              queries?: number | undefined
              points?: number | undefined
              update_every?: number | undefined
              first_entry?: number | undefined
              last_entry?: { [x: string]: unknown } | undefined
            }[]
          | undefined
        units?: string | string[] | undefined
        dimensions?:
          | {
              ids?: string[] | undefined
              units?: string[] | undefined
              sts?: Jsonwrap2Sts | Jsonwrap2StsRaw | undefined
            }
          | undefined
      }
    | undefined
  view?:
    | {
        title?: string | undefined
        format?: string | undefined
        options?: string[] | undefined
        time_group?: string | undefined
        after?: number | undefined
        before?: number | undefined
        cardinality?: { folded: number; cut: number } | undefined
        partial_data_trimming?:
          | {
              max_update_every?: number | undefined
              expected_after?: number | undefined
              trimmed_after?: number | undefined
            }
          | undefined
        points?: number | undefined
        units?: string | string[] | undefined
        chart_type?: 'line' | 'area' | 'stacked' | undefined
        dimensions?:
          | {
              grouped_by?:
                | (
                    | 'selected'
                    | 'dimension'
                    | 'instance'
                    | 'node'
                    | 'context'
                    | 'units'
                    | 'label:key1'
                    | 'label:key2'
                    | 'label:keyN'
                  )[]
                | undefined
              ids?: string[] | undefined
              names?: string[] | undefined
              priorities?: number[] | undefined
              aggregated?: number[] | undefined
              units?: string[] | undefined
              sts?: Jsonwrap2Sts | Jsonwrap2StsRaw | undefined
              labels?: { label_key1?: string[][] | undefined } | undefined
            }
          | undefined
        min?: number | undefined
        max?: number | undefined
      }
    | undefined
  result?: DataJsonFormats2 | undefined
  timings?: { [x: string]: unknown } | undefined
}
type Jsonwrap1 = {
  api?: number | undefined
  id?: string | undefined
  name?: string | undefined
  update_every?: number | undefined
  view_update_every?: number | undefined
  first_entry?: number | undefined
  last_entry?: number | undefined
  after?: number | undefined
  before?: number | undefined
  min?: number | undefined
  max?: number | undefined
  dimension_names?: string[] | undefined
  dimension_ids?: string[] | undefined
  latest_values?: string[] | undefined
  view_latest_values?: string[] | undefined
  dimensions?: number | undefined
  points?: number | undefined
  format?: string | undefined
  chart_variables?: { [x: string]: ChartVariables } | undefined
  result?: DataJsonFormats1 | undefined
}
type ClaimResponse = {
  success?: boolean | undefined
  message?: string | undefined
  cloud: {
    id: number
    status: 'available' | 'offline' | 'indirect' | 'online' | 'banned'
    since: bigint
    age: bigint
    url: string | null
    reason: string
    claim_id?: string | undefined
    next_check?: bigint | undefined
    next_in?: bigint | undefined
  }
  can_be_claimed?: boolean | undefined
  key_filename?: string | undefined
  cmd?: string | undefined
  help?: string | undefined
  agent: {
    mg?: string | undefined
    nd?: (string | null) | undefined
    nm?: string | undefined
    now?: bigint | undefined
  }
}
type BearerProtectionValue = string
type WeightsResultLimit = {
  limit: number
  total: number
  returned: number
  unit: 'dimensions' | 'groups'
  truncated: boolean
  summary_scope: 'all'
}
type Weights2 = {
  result_limit?: WeightsResultLimit | undefined
  correlated_dimensions?: number | undefined
  total_dimensions_count?: number | undefined
}
type WeightedDimension = number
type WeightedChart = {
  weight?: number | undefined
  dimensions?: { [x: string]: WeightedDimension } | undefined
}
type WeightedContext = {
  weight?: number | undefined
  charts?: { [x: string]: WeightedChart } | undefined
}
type Weights = {
  result_limit?: WeightsResultLimit | undefined
  after?: number | undefined
  before?: number | undefined
  duration?: number | undefined
  points?: number | undefined
  baseline_after?: number | undefined
  baseline_before?: number | undefined
  baseline_duration?: number | undefined
  baseline_points?: number | undefined
  group?: string | undefined
  method?: string | undefined
  options?: string | undefined
  correlated_dimensions?: { [x: string]: unknown } | undefined
  total_dimensions_count?: number | undefined
  statistics?:
    | {
        query_time_ms?: number | undefined
        db_queries?: number | undefined
        db_points_read?: number | undefined
        query_result_points?: number | undefined
        binary_searches?: number | undefined
      }
    | undefined
  contexts?: { [x: string]: WeightedContext } | undefined
}
type MetricCorrelations = {
  result_limit?: WeightsResultLimit | undefined
  after?: number | undefined
  before?: number | undefined
  duration?: number | undefined
  points?: number | undefined
  baseline_after?: number | undefined
  baseline_before?: number | undefined
  baseline_duration?: number | undefined
  baseline_points?: number | undefined
  group?: string | undefined
  method?: string | undefined
  options?: string | undefined
  correlated_dimensions?: { [x: string]: unknown } | undefined
  total_dimensions_count?: number | undefined
  statistics?:
    | {
        query_time_ms?: number | undefined
        db_queries?: number | undefined
        db_points_read?: number | undefined
        query_result_points?: number | undefined
        binary_searches?: number | undefined
      }
    | undefined
  correlated_charts?:
    | {
        'chart-id1'?:
          | {
              context?: string | undefined
              dimensions?:
                | { 'dimension1-name'?: number | undefined; 'dimension2-name'?: number | undefined }
                | undefined
            }
          | undefined
        'chart-id2'?:
          | {
              context?: string | undefined
              dimensions?:
                | { 'dimension1-name'?: number | undefined; 'dimension2-name'?: number | undefined }
                | undefined
            }
          | undefined
      }
    | undefined
}
type Alarms = {
  hostname?: string | undefined
  latest_alarm_log_unique_id?: number | undefined
  status?: boolean | undefined
  now?: number | undefined
  alarms?:
    | {
        'chart-name.alarm-name'?:
          | {
              id?: number | undefined
              name?: string | undefined
              chart?: string | undefined
              family?: string | undefined
              active?: boolean | undefined
              disabled?: boolean | undefined
              silenced?: boolean | undefined
              exec?: string | undefined
              recipient?: string | undefined
              source?: string | undefined
              units?: string | undefined
              info?: string | undefined
              status?: string | undefined
              last_status_change?: number | undefined
              last_updated?: number | undefined
              next_update?: number | undefined
              update_every?: number | undefined
              delay_up_duration?: number | undefined
              delay_down_duration?: number | undefined
              delay_max_duration?: number | undefined
              delay_multiplier?: number | undefined
              delay?: number | undefined
              delay_up_to_timestamp?: number | undefined
              value_string?: string | undefined
              no_clear_notification?: boolean | undefined
              lookup_dimensions?: string | undefined
              db_after?: number | undefined
              db_before?: number | undefined
              lookup_method?: string | undefined
              lookup_after?: number | undefined
              lookup_before?: number | undefined
              lookup_options?: string | undefined
              calc?: string | undefined
              calc_parsed?: string | undefined
              warn?: string | undefined
              warn_parsed?: string | undefined
              crit?: string | undefined
              crit_parsed?: string | undefined
              warn_repeat_every?: number | undefined
              crit_repeat_every?: number | undefined
              green?: string | undefined
              red?: string | undefined
              value?: number | undefined
            }
          | undefined
      }
    | undefined
}
type AlarmsValues = {
  hostname?: string | undefined
  alarms?:
    | {
        [x: string]: {
          id?: number | undefined
          value?: number | undefined
          last_updated?: number | undefined
          status?:
            | 'REMOVED'
            | 'UNDEFINED'
            | 'UNINITIALIZED'
            | 'CLEAR'
            | 'RAISED'
            | 'WARNING'
            | 'CRITICAL'
            | 'UNKNOWN'
            | undefined
        }
      }
    | undefined
}
type AlarmLogEntry = {
  hostname?: string | undefined
  unique_id?: number | undefined
  alarm_id?: number | undefined
  alarm_event_id?: number | undefined
  name?: string | undefined
  chart?: string | undefined
  family?: string | undefined
  processed?: boolean | undefined
  updated?: boolean | undefined
  exec_run?: number | undefined
  exec_failed?: boolean | undefined
  exec?: string | undefined
  recipient?: string | undefined
  exec_code?: number | undefined
  source?: string | undefined
  units?: string | undefined
  when?: number | undefined
  duration?: number | undefined
  non_clear_duration?: number | undefined
  status?: string | undefined
  old_status?: string | undefined
  delay?: number | undefined
  delay_up_to_timestamp?: number | undefined
  updated_by_id?: number | undefined
  updates_id?: number | undefined
  value_string?: string | undefined
  old_value_string?: string | undefined
  silenced?: string | undefined
  info?: string | undefined
  value?: (number | null) | undefined
  old_value?: (number | null) | undefined
}
type AlarmVariables = {
  chart?: string | undefined
  chart_name?: string | undefined
  cnart_context?: string | undefined
  family?: string | undefined
  host?: string | undefined
  chart_variables?: { [x: string]: ChartVariables } | undefined
  family_variables?: { varname1?: number | undefined; varname2?: number | undefined } | undefined
  host_variables?: { varname1?: number | undefined; varname2?: number | undefined } | undefined
}
type AclkState = {
  'aclk-available'?: string | undefined
  'aclk-version'?: number | undefined
  'protocols-supported'?: string[] | undefined
  'Agent-claimed'?: boolean | undefined
  claimed_id?: string | undefined
  online?: boolean | undefined
  'used-cloud-protocol'?: 'Old' | 'New' | undefined
}
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/api/v2/nodes': {
      $get: {
        input: {
          query: {
            scope_nodes?: string | undefined
            scope_contexts?: string | undefined
            nodes?: string | undefined
            contexts?: string | undefined
            options?:
              | (
                  | 'minify'
                  | 'debug'
                  | 'config'
                  | 'instances'
                  | 'values'
                  | 'summary'
                  | 'mcp'
                  | 'dimensions'
                  | 'labels'
                  | 'priorities'
                  | 'titles'
                  | 'rfc3339'
                )[]
              | undefined
          }
        }
        output: {
          api?: Api | undefined
          agents?: Agents | undefined
          versions?: Versions | undefined
          nodes?: NodeFull[] | undefined
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/v3/nodes': {
      $get: {
        input: {
          query: {
            scope_nodes?: string | undefined
            scope_contexts?: string | undefined
            nodes?: string | undefined
            contexts?: string | undefined
            options?:
              | (
                  | 'minify'
                  | 'debug'
                  | 'config'
                  | 'instances'
                  | 'values'
                  | 'summary'
                  | 'mcp'
                  | 'dimensions'
                  | 'labels'
                  | 'priorities'
                  | 'titles'
                  | 'rfc3339'
                )[]
              | undefined
          }
        }
        output: {
          api?: Api | undefined
          agents?: Agents | undefined
          versions?: Versions | undefined
          nodes?: NodeFull[] | undefined
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/v2/contexts': {
      $get: {
        input: {
          query: {
            scope_nodes?: string | undefined
            scope_contexts?: string | undefined
            nodes?: string | undefined
            contexts?: string | undefined
            options?:
              | (
                  | 'minify'
                  | 'debug'
                  | 'config'
                  | 'instances'
                  | 'values'
                  | 'summary'
                  | 'mcp'
                  | 'dimensions'
                  | 'labels'
                  | 'priorities'
                  | 'titles'
                  | 'rfc3339'
                )[]
              | undefined
          }
        }
        output: Contexts2
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/v3/contexts': {
      $get: {
        input: {
          query: {
            scope_nodes?: string | undefined
            scope_contexts?: string | undefined
            nodes?: string | undefined
            contexts?: string | undefined
            options?:
              | (
                  | 'minify'
                  | 'debug'
                  | 'config'
                  | 'instances'
                  | 'values'
                  | 'summary'
                  | 'mcp'
                  | 'dimensions'
                  | 'labels'
                  | 'priorities'
                  | 'titles'
                  | 'rfc3339'
                )[]
              | undefined
          }
        }
        output: Contexts2
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/v2/q': {
      $get: {
        input: {
          query: {
            q: string
            scope_nodes?: string | undefined
            scope_contexts?: string | undefined
            nodes?: string | undefined
            contexts?: string | undefined
            options?:
              | (
                  | 'minify'
                  | 'debug'
                  | 'config'
                  | 'instances'
                  | 'values'
                  | 'summary'
                  | 'mcp'
                  | 'dimensions'
                  | 'labels'
                  | 'priorities'
                  | 'titles'
                  | 'rfc3339'
                )[]
              | undefined
          }
        }
        output: Contexts2
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/v3/q': {
      $get: {
        input: {
          query: {
            q: string
            scope_nodes?: string | undefined
            scope_contexts?: string | undefined
            nodes?: string | undefined
            contexts?: string | undefined
            options?:
              | (
                  | 'minify'
                  | 'debug'
                  | 'config'
                  | 'instances'
                  | 'values'
                  | 'summary'
                  | 'mcp'
                  | 'dimensions'
                  | 'labels'
                  | 'priorities'
                  | 'titles'
                  | 'rfc3339'
                )[]
              | undefined
          }
        }
        output: Contexts2
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/v1/info': {
      $get:
        | { input: {}; output: Info; outputFormat: 'json'; status: 200 }
        | { input: {}; output: {}; outputFormat: string; status: 503 }
    }
  } & {
    '/api/v1/charts': {
      $get: { input: {}; output: ChartSummary; outputFormat: 'json'; status: 200 }
    }
  } & {
    '/api/v1/chart': {
      $get:
        | {
            input: { query: { chart?: string | undefined } }
            output: Chart
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { chart?: string | undefined } }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { query: { chart?: string | undefined } }
            output: {}
            outputFormat: string
            status: 404
          }
    }
  } & {
    '/api/v1/contexts': {
      $get: {
        input: {
          query: {
            dimensions?: string | undefined
            chart_label_key?: string | undefined
            chart_labels_filter?: string | undefined
            options?:
              | (
                  | 'full'
                  | 'all'
                  | 'charts'
                  | 'dimensions'
                  | 'labels'
                  | 'uuids'
                  | 'queue'
                  | 'flags'
                  | 'deleted'
                  | 'deepscan'
                  | 'rfc3339'
                )[]
              | undefined
            after?: number | undefined
            before?: number | undefined
          }
        }
        output: ContextSummary
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/v1/context': {
      $get:
        | {
            input: {
              query: {
                context?: string | undefined
                dimensions?: string | undefined
                chart_label_key?: string | undefined
                chart_labels_filter?: string | undefined
                options?:
                  | (
                      | 'full'
                      | 'all'
                      | 'charts'
                      | 'dimensions'
                      | 'labels'
                      | 'uuids'
                      | 'queue'
                      | 'flags'
                      | 'deleted'
                      | 'deepscan'
                      | 'rfc3339'
                    )[]
                  | undefined
                after?: number | undefined
                before?: number | undefined
              }
            }
            output: Context
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                context?: string | undefined
                dimensions?: string | undefined
                chart_label_key?: string | undefined
                chart_labels_filter?: string | undefined
                options?:
                  | (
                      | 'full'
                      | 'all'
                      | 'charts'
                      | 'dimensions'
                      | 'labels'
                      | 'uuids'
                      | 'queue'
                      | 'flags'
                      | 'deleted'
                      | 'deepscan'
                      | 'rfc3339'
                    )[]
                  | undefined
                after?: number | undefined
                before?: number | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: {
              query: {
                context?: string | undefined
                dimensions?: string | undefined
                chart_label_key?: string | undefined
                chart_labels_filter?: string | undefined
                options?:
                  | (
                      | 'full'
                      | 'all'
                      | 'charts'
                      | 'dimensions'
                      | 'labels'
                      | 'uuids'
                      | 'queue'
                      | 'flags'
                      | 'deleted'
                      | 'deepscan'
                      | 'rfc3339'
                    )[]
                  | undefined
                after?: number | undefined
                before?: number | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 404
          }
    }
  } & {
    '/api/v3/context': {
      $get:
        | {
            input: {
              query: {
                context: string
                dimensions?: string | undefined
                chart_label_key?: string | undefined
                chart_labels_filter?: string | undefined
                options?: string | undefined
                after?: bigint | undefined
                before?: bigint | undefined
              }
            }
            output: Context
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                context: string
                dimensions?: string | undefined
                chart_label_key?: string | undefined
                chart_labels_filter?: string | undefined
                options?: string | undefined
                after?: bigint | undefined
                before?: bigint | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: {
              query: {
                context: string
                dimensions?: string | undefined
                chart_label_key?: string | undefined
                chart_labels_filter?: string | undefined
                options?: string | undefined
                after?: bigint | undefined
                before?: bigint | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 404
          }
        | {
            input: {
              query: {
                context: string
                dimensions?: string | undefined
                chart_label_key?: string | undefined
                chart_labels_filter?: string | undefined
                options?: string | undefined
                after?: bigint | undefined
                before?: bigint | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 500
          }
    }
  } & {
    '/api/v1/config': {
      $get:
        | {
            input: {
              query: {
                action?: 'tree' | 'schema' | 'get' | 'enable' | 'disable' | 'restart' | undefined
                id?: string | undefined
                path?: string | undefined
                timeout?: number | undefined
              }
            }
            output: ConfigDefaultResponse | ConfigTree | ConfigSchema
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                action?: 'tree' | 'schema' | 'get' | 'enable' | 'disable' | 'restart' | undefined
                id?: string | undefined
                path?: string | undefined
                timeout?: number | undefined
              }
            }
            output: ConfigDefaultResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                action?: 'tree' | 'schema' | 'get' | 'enable' | 'disable' | 'restart' | undefined
                id?: string | undefined
                path?: string | undefined
                timeout?: number | undefined
              }
            }
            output: ConfigDefaultResponse
            outputFormat: 'json'
            status: 404
          }
      $post:
        | {
            input: {
              query: {
                action?: 'add' | 'test' | 'update' | undefined
                id?: string | undefined
                name?: string | undefined
                timeout?: number | undefined
              }
            }
            output: ConfigDefaultResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                action?: 'add' | 'test' | 'update' | undefined
                id?: string | undefined
                name?: string | undefined
                timeout?: number | undefined
              }
            }
            output: ConfigDefaultResponse
            outputFormat: 'json'
            status: 202
          }
        | {
            input: {
              query: {
                action?: 'add' | 'test' | 'update' | undefined
                id?: string | undefined
                name?: string | undefined
                timeout?: number | undefined
              }
            }
            output: ConfigDefaultResponse
            outputFormat: 'json'
            status: 299
          }
        | {
            input: {
              query: {
                action?: 'add' | 'test' | 'update' | undefined
                id?: string | undefined
                name?: string | undefined
                timeout?: number | undefined
              }
            }
            output: ConfigDefaultResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                action?: 'add' | 'test' | 'update' | undefined
                id?: string | undefined
                name?: string | undefined
                timeout?: number | undefined
              }
            }
            output: ConfigDefaultResponse
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/api/v2/data': {
      $get:
        | {
            input: {
              query: {
                group_by?:
                  | (
                      | 'dimension'
                      | 'instance'
                      | 'percentage-of-instance'
                      | 'label'
                      | 'node'
                      | 'context'
                      | 'units'
                      | 'selected'
                    )[]
                  | undefined
                group_by_label?: string | undefined
                aggregation?:
                  | 'min'
                  | 'max'
                  | 'avg'
                  | 'average'
                  | 'sum'
                  | 'percentage'
                  | 'extremes'
                  | undefined
                scope_nodes?: string | undefined
                scope_contexts?: string | undefined
                scope_instances?: string | undefined
                scope_labels?: string | undefined
                scope_dimensions?: string | undefined
                nodes?: string | undefined
                contexts?: string | undefined
                instances?: string | undefined
                labels?: string | undefined
                alerts?: string | undefined
                dimensions?: string | undefined
                after?: number | undefined
                before?: number | undefined
                points?: number | undefined
                tier?: number | undefined
                options?:
                  | (
                      | 'jsonwrap'
                      | 'raw'
                      | 'minify'
                      | 'debug'
                      | 'nonzero'
                      | 'null2zero'
                      | 'abs'
                      | 'absolute'
                      | 'display-absolute'
                      | 'flip'
                      | 'reversed'
                      | 'min2max'
                      | 'percentage'
                      | 'seconds'
                      | 'ms'
                      | 'milliseconds'
                      | 'unaligned'
                      | 'match-ids'
                      | 'match-names'
                      | 'anomaly-bit'
                      | 'jw-anomaly-rates'
                      | 'details'
                      | 'group-by-labels'
                      | 'natural-points'
                      | 'virtual-points'
                      | 'selected-tier'
                      | 'all-dimensions'
                      | 'label-quotes'
                      | 'objectrows'
                      | 'google_json'
                      | 'minimal-stats'
                      | 'minimal'
                      | 'long-json-keys'
                      | 'long-keys'
                      | 'mcp-info'
                      | 'rfc3339'
                      | 'cardinality-limit-all'
                    )[]
                  | undefined
                time_group?:
                  | 'min'
                  | 'max'
                  | 'avg'
                  | 'average'
                  | 'median'
                  | 'stddev'
                  | 'sum'
                  | 'incremental-sum'
                  | 'ses'
                  | 'des'
                  | 'cv'
                  | 'percentage-of-samples'
                  | 'countif'
                  | 'percentage-of-time'
                  | 'number-of-flaps'
                  | 'number-of-times'
                  | 'percentile'
                  | 'percentile25'
                  | 'percentile50'
                  | 'percentile75'
                  | 'percentile80'
                  | 'percentile90'
                  | 'percentile95'
                  | 'percentile97'
                  | 'percentile98'
                  | 'percentile99'
                  | 'trimmed-mean'
                  | 'trimmed-mean1'
                  | 'trimmed-mean2'
                  | 'trimmed-mean3'
                  | 'trimmed-mean5'
                  | 'trimmed-mean10'
                  | 'trimmed-mean15'
                  | 'trimmed-mean20'
                  | 'trimmed-mean25'
                  | 'trimmed-median'
                  | 'trimmed-median1'
                  | 'trimmed-median2'
                  | 'trimmed-median3'
                  | 'trimmed-median5'
                  | 'trimmed-median10'
                  | 'trimmed-median15'
                  | 'trimmed-median20'
                  | 'trimmed-median25'
                  | 'ema'
                  | 'extremes'
                  | 'latest'
                  | undefined
                time_group_options?: string | undefined
                time_resampling?: number | undefined
                format?:
                  | 'json'
                  | 'json2'
                  | 'jsonp'
                  | 'csv'
                  | 'tsv'
                  | 'tsv-excel'
                  | 'ssv'
                  | 'ssvcomma'
                  | 'datatable'
                  | 'datasource'
                  | 'html'
                  | 'markdown'
                  | 'array'
                  | 'csvjsonarray'
                  | undefined
                cardinality_limit?: bigint | undefined
                limit?: bigint | undefined
                timeout?: number | undefined
                callback?: string | undefined
                filename?: string | undefined
                tqx?: string | undefined
              }
            }
            output: Jsonwrap2 | DataJsonFormats2
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                group_by?:
                  | (
                      | 'dimension'
                      | 'instance'
                      | 'percentage-of-instance'
                      | 'label'
                      | 'node'
                      | 'context'
                      | 'units'
                      | 'selected'
                    )[]
                  | undefined
                group_by_label?: string | undefined
                aggregation?:
                  | 'min'
                  | 'max'
                  | 'avg'
                  | 'average'
                  | 'sum'
                  | 'percentage'
                  | 'extremes'
                  | undefined
                scope_nodes?: string | undefined
                scope_contexts?: string | undefined
                scope_instances?: string | undefined
                scope_labels?: string | undefined
                scope_dimensions?: string | undefined
                nodes?: string | undefined
                contexts?: string | undefined
                instances?: string | undefined
                labels?: string | undefined
                alerts?: string | undefined
                dimensions?: string | undefined
                after?: number | undefined
                before?: number | undefined
                points?: number | undefined
                tier?: number | undefined
                options?:
                  | (
                      | 'jsonwrap'
                      | 'raw'
                      | 'minify'
                      | 'debug'
                      | 'nonzero'
                      | 'null2zero'
                      | 'abs'
                      | 'absolute'
                      | 'display-absolute'
                      | 'flip'
                      | 'reversed'
                      | 'min2max'
                      | 'percentage'
                      | 'seconds'
                      | 'ms'
                      | 'milliseconds'
                      | 'unaligned'
                      | 'match-ids'
                      | 'match-names'
                      | 'anomaly-bit'
                      | 'jw-anomaly-rates'
                      | 'details'
                      | 'group-by-labels'
                      | 'natural-points'
                      | 'virtual-points'
                      | 'selected-tier'
                      | 'all-dimensions'
                      | 'label-quotes'
                      | 'objectrows'
                      | 'google_json'
                      | 'minimal-stats'
                      | 'minimal'
                      | 'long-json-keys'
                      | 'long-keys'
                      | 'mcp-info'
                      | 'rfc3339'
                      | 'cardinality-limit-all'
                    )[]
                  | undefined
                time_group?:
                  | 'min'
                  | 'max'
                  | 'avg'
                  | 'average'
                  | 'median'
                  | 'stddev'
                  | 'sum'
                  | 'incremental-sum'
                  | 'ses'
                  | 'des'
                  | 'cv'
                  | 'percentage-of-samples'
                  | 'countif'
                  | 'percentage-of-time'
                  | 'number-of-flaps'
                  | 'number-of-times'
                  | 'percentile'
                  | 'percentile25'
                  | 'percentile50'
                  | 'percentile75'
                  | 'percentile80'
                  | 'percentile90'
                  | 'percentile95'
                  | 'percentile97'
                  | 'percentile98'
                  | 'percentile99'
                  | 'trimmed-mean'
                  | 'trimmed-mean1'
                  | 'trimmed-mean2'
                  | 'trimmed-mean3'
                  | 'trimmed-mean5'
                  | 'trimmed-mean10'
                  | 'trimmed-mean15'
                  | 'trimmed-mean20'
                  | 'trimmed-mean25'
                  | 'trimmed-median'
                  | 'trimmed-median1'
                  | 'trimmed-median2'
                  | 'trimmed-median3'
                  | 'trimmed-median5'
                  | 'trimmed-median10'
                  | 'trimmed-median15'
                  | 'trimmed-median20'
                  | 'trimmed-median25'
                  | 'ema'
                  | 'extremes'
                  | 'latest'
                  | undefined
                time_group_options?: string | undefined
                time_resampling?: number | undefined
                format?:
                  | 'json'
                  | 'json2'
                  | 'jsonp'
                  | 'csv'
                  | 'tsv'
                  | 'tsv-excel'
                  | 'ssv'
                  | 'ssvcomma'
                  | 'datatable'
                  | 'datasource'
                  | 'html'
                  | 'markdown'
                  | 'array'
                  | 'csvjsonarray'
                  | undefined
                cardinality_limit?: bigint | undefined
                limit?: bigint | undefined
                timeout?: number | undefined
                callback?: string | undefined
                filename?: string | undefined
                tqx?: string | undefined
              }
            }
            output: string
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              query: {
                group_by?:
                  | (
                      | 'dimension'
                      | 'instance'
                      | 'percentage-of-instance'
                      | 'label'
                      | 'node'
                      | 'context'
                      | 'units'
                      | 'selected'
                    )[]
                  | undefined
                group_by_label?: string | undefined
                aggregation?:
                  | 'min'
                  | 'max'
                  | 'avg'
                  | 'average'
                  | 'sum'
                  | 'percentage'
                  | 'extremes'
                  | undefined
                scope_nodes?: string | undefined
                scope_contexts?: string | undefined
                scope_instances?: string | undefined
                scope_labels?: string | undefined
                scope_dimensions?: string | undefined
                nodes?: string | undefined
                contexts?: string | undefined
                instances?: string | undefined
                labels?: string | undefined
                alerts?: string | undefined
                dimensions?: string | undefined
                after?: number | undefined
                before?: number | undefined
                points?: number | undefined
                tier?: number | undefined
                options?:
                  | (
                      | 'jsonwrap'
                      | 'raw'
                      | 'minify'
                      | 'debug'
                      | 'nonzero'
                      | 'null2zero'
                      | 'abs'
                      | 'absolute'
                      | 'display-absolute'
                      | 'flip'
                      | 'reversed'
                      | 'min2max'
                      | 'percentage'
                      | 'seconds'
                      | 'ms'
                      | 'milliseconds'
                      | 'unaligned'
                      | 'match-ids'
                      | 'match-names'
                      | 'anomaly-bit'
                      | 'jw-anomaly-rates'
                      | 'details'
                      | 'group-by-labels'
                      | 'natural-points'
                      | 'virtual-points'
                      | 'selected-tier'
                      | 'all-dimensions'
                      | 'label-quotes'
                      | 'objectrows'
                      | 'google_json'
                      | 'minimal-stats'
                      | 'minimal'
                      | 'long-json-keys'
                      | 'long-keys'
                      | 'mcp-info'
                      | 'rfc3339'
                      | 'cardinality-limit-all'
                    )[]
                  | undefined
                time_group?:
                  | 'min'
                  | 'max'
                  | 'avg'
                  | 'average'
                  | 'median'
                  | 'stddev'
                  | 'sum'
                  | 'incremental-sum'
                  | 'ses'
                  | 'des'
                  | 'cv'
                  | 'percentage-of-samples'
                  | 'countif'
                  | 'percentage-of-time'
                  | 'number-of-flaps'
                  | 'number-of-times'
                  | 'percentile'
                  | 'percentile25'
                  | 'percentile50'
                  | 'percentile75'
                  | 'percentile80'
                  | 'percentile90'
                  | 'percentile95'
                  | 'percentile97'
                  | 'percentile98'
                  | 'percentile99'
                  | 'trimmed-mean'
                  | 'trimmed-mean1'
                  | 'trimmed-mean2'
                  | 'trimmed-mean3'
                  | 'trimmed-mean5'
                  | 'trimmed-mean10'
                  | 'trimmed-mean15'
                  | 'trimmed-mean20'
                  | 'trimmed-mean25'
                  | 'trimmed-median'
                  | 'trimmed-median1'
                  | 'trimmed-median2'
                  | 'trimmed-median3'
                  | 'trimmed-median5'
                  | 'trimmed-median10'
                  | 'trimmed-median15'
                  | 'trimmed-median20'
                  | 'trimmed-median25'
                  | 'ema'
                  | 'extremes'
                  | 'latest'
                  | undefined
                time_group_options?: string | undefined
                time_resampling?: number | undefined
                format?:
                  | 'json'
                  | 'json2'
                  | 'jsonp'
                  | 'csv'
                  | 'tsv'
                  | 'tsv-excel'
                  | 'ssv'
                  | 'ssvcomma'
                  | 'datatable'
                  | 'datasource'
                  | 'html'
                  | 'markdown'
                  | 'array'
                  | 'csvjsonarray'
                  | undefined
                cardinality_limit?: bigint | undefined
                limit?: bigint | undefined
                timeout?: number | undefined
                callback?: string | undefined
                filename?: string | undefined
                tqx?: string | undefined
              }
            }
            output: string
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              query: {
                group_by?:
                  | (
                      | 'dimension'
                      | 'instance'
                      | 'percentage-of-instance'
                      | 'label'
                      | 'node'
                      | 'context'
                      | 'units'
                      | 'selected'
                    )[]
                  | undefined
                group_by_label?: string | undefined
                aggregation?:
                  | 'min'
                  | 'max'
                  | 'avg'
                  | 'average'
                  | 'sum'
                  | 'percentage'
                  | 'extremes'
                  | undefined
                scope_nodes?: string | undefined
                scope_contexts?: string | undefined
                scope_instances?: string | undefined
                scope_labels?: string | undefined
                scope_dimensions?: string | undefined
                nodes?: string | undefined
                contexts?: string | undefined
                instances?: string | undefined
                labels?: string | undefined
                alerts?: string | undefined
                dimensions?: string | undefined
                after?: number | undefined
                before?: number | undefined
                points?: number | undefined
                tier?: number | undefined
                options?:
                  | (
                      | 'jsonwrap'
                      | 'raw'
                      | 'minify'
                      | 'debug'
                      | 'nonzero'
                      | 'null2zero'
                      | 'abs'
                      | 'absolute'
                      | 'display-absolute'
                      | 'flip'
                      | 'reversed'
                      | 'min2max'
                      | 'percentage'
                      | 'seconds'
                      | 'ms'
                      | 'milliseconds'
                      | 'unaligned'
                      | 'match-ids'
                      | 'match-names'
                      | 'anomaly-bit'
                      | 'jw-anomaly-rates'
                      | 'details'
                      | 'group-by-labels'
                      | 'natural-points'
                      | 'virtual-points'
                      | 'selected-tier'
                      | 'all-dimensions'
                      | 'label-quotes'
                      | 'objectrows'
                      | 'google_json'
                      | 'minimal-stats'
                      | 'minimal'
                      | 'long-json-keys'
                      | 'long-keys'
                      | 'mcp-info'
                      | 'rfc3339'
                      | 'cardinality-limit-all'
                    )[]
                  | undefined
                time_group?:
                  | 'min'
                  | 'max'
                  | 'avg'
                  | 'average'
                  | 'median'
                  | 'stddev'
                  | 'sum'
                  | 'incremental-sum'
                  | 'ses'
                  | 'des'
                  | 'cv'
                  | 'percentage-of-samples'
                  | 'countif'
                  | 'percentage-of-time'
                  | 'number-of-flaps'
                  | 'number-of-times'
                  | 'percentile'
                  | 'percentile25'
                  | 'percentile50'
                  | 'percentile75'
                  | 'percentile80'
                  | 'percentile90'
                  | 'percentile95'
                  | 'percentile97'
                  | 'percentile98'
                  | 'percentile99'
                  | 'trimmed-mean'
                  | 'trimmed-mean1'
                  | 'trimmed-mean2'
                  | 'trimmed-mean3'
                  | 'trimmed-mean5'
                  | 'trimmed-mean10'
                  | 'trimmed-mean15'
                  | 'trimmed-mean20'
                  | 'trimmed-mean25'
                  | 'trimmed-median'
                  | 'trimmed-median1'
                  | 'trimmed-median2'
                  | 'trimmed-median3'
                  | 'trimmed-median5'
                  | 'trimmed-median10'
                  | 'trimmed-median15'
                  | 'trimmed-median20'
                  | 'trimmed-median25'
                  | 'ema'
                  | 'extremes'
                  | 'latest'
                  | undefined
                time_group_options?: string | undefined
                time_resampling?: number | undefined
                format?:
                  | 'json'
                  | 'json2'
                  | 'jsonp'
                  | 'csv'
                  | 'tsv'
                  | 'tsv-excel'
                  | 'ssv'
                  | 'ssvcomma'
                  | 'datatable'
                  | 'datasource'
                  | 'html'
                  | 'markdown'
                  | 'array'
                  | 'csvjsonarray'
                  | undefined
                cardinality_limit?: bigint | undefined
                limit?: bigint | undefined
                timeout?: number | undefined
                callback?: string | undefined
                filename?: string | undefined
                tqx?: string | undefined
              }
            }
            output: string
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              query: {
                group_by?:
                  | (
                      | 'dimension'
                      | 'instance'
                      | 'percentage-of-instance'
                      | 'label'
                      | 'node'
                      | 'context'
                      | 'units'
                      | 'selected'
                    )[]
                  | undefined
                group_by_label?: string | undefined
                aggregation?:
                  | 'min'
                  | 'max'
                  | 'avg'
                  | 'average'
                  | 'sum'
                  | 'percentage'
                  | 'extremes'
                  | undefined
                scope_nodes?: string | undefined
                scope_contexts?: string | undefined
                scope_instances?: string | undefined
                scope_labels?: string | undefined
                scope_dimensions?: string | undefined
                nodes?: string | undefined
                contexts?: string | undefined
                instances?: string | undefined
                labels?: string | undefined
                alerts?: string | undefined
                dimensions?: string | undefined
                after?: number | undefined
                before?: number | undefined
                points?: number | undefined
                tier?: number | undefined
                options?:
                  | (
                      | 'jsonwrap'
                      | 'raw'
                      | 'minify'
                      | 'debug'
                      | 'nonzero'
                      | 'null2zero'
                      | 'abs'
                      | 'absolute'
                      | 'display-absolute'
                      | 'flip'
                      | 'reversed'
                      | 'min2max'
                      | 'percentage'
                      | 'seconds'
                      | 'ms'
                      | 'milliseconds'
                      | 'unaligned'
                      | 'match-ids'
                      | 'match-names'
                      | 'anomaly-bit'
                      | 'jw-anomaly-rates'
                      | 'details'
                      | 'group-by-labels'
                      | 'natural-points'
                      | 'virtual-points'
                      | 'selected-tier'
                      | 'all-dimensions'
                      | 'label-quotes'
                      | 'objectrows'
                      | 'google_json'
                      | 'minimal-stats'
                      | 'minimal'
                      | 'long-json-keys'
                      | 'long-keys'
                      | 'mcp-info'
                      | 'rfc3339'
                      | 'cardinality-limit-all'
                    )[]
                  | undefined
                time_group?:
                  | 'min'
                  | 'max'
                  | 'avg'
                  | 'average'
                  | 'median'
                  | 'stddev'
                  | 'sum'
                  | 'incremental-sum'
                  | 'ses'
                  | 'des'
                  | 'cv'
                  | 'percentage-of-samples'
                  | 'countif'
                  | 'percentage-of-time'
                  | 'number-of-flaps'
                  | 'number-of-times'
                  | 'percentile'
                  | 'percentile25'
                  | 'percentile50'
                  | 'percentile75'
                  | 'percentile80'
                  | 'percentile90'
                  | 'percentile95'
                  | 'percentile97'
                  | 'percentile98'
                  | 'percentile99'
                  | 'trimmed-mean'
                  | 'trimmed-mean1'
                  | 'trimmed-mean2'
                  | 'trimmed-mean3'
                  | 'trimmed-mean5'
                  | 'trimmed-mean10'
                  | 'trimmed-mean15'
                  | 'trimmed-mean20'
                  | 'trimmed-mean25'
                  | 'trimmed-median'
                  | 'trimmed-median1'
                  | 'trimmed-median2'
                  | 'trimmed-median3'
                  | 'trimmed-median5'
                  | 'trimmed-median10'
                  | 'trimmed-median15'
                  | 'trimmed-median20'
                  | 'trimmed-median25'
                  | 'ema'
                  | 'extremes'
                  | 'latest'
                  | undefined
                time_group_options?: string | undefined
                time_resampling?: number | undefined
                format?:
                  | 'json'
                  | 'json2'
                  | 'jsonp'
                  | 'csv'
                  | 'tsv'
                  | 'tsv-excel'
                  | 'ssv'
                  | 'ssvcomma'
                  | 'datatable'
                  | 'datasource'
                  | 'html'
                  | 'markdown'
                  | 'array'
                  | 'csvjsonarray'
                  | undefined
                cardinality_limit?: bigint | undefined
                limit?: bigint | undefined
                timeout?: number | undefined
                callback?: string | undefined
                filename?: string | undefined
                tqx?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: {
              query: {
                group_by?:
                  | (
                      | 'dimension'
                      | 'instance'
                      | 'percentage-of-instance'
                      | 'label'
                      | 'node'
                      | 'context'
                      | 'units'
                      | 'selected'
                    )[]
                  | undefined
                group_by_label?: string | undefined
                aggregation?:
                  | 'min'
                  | 'max'
                  | 'avg'
                  | 'average'
                  | 'sum'
                  | 'percentage'
                  | 'extremes'
                  | undefined
                scope_nodes?: string | undefined
                scope_contexts?: string | undefined
                scope_instances?: string | undefined
                scope_labels?: string | undefined
                scope_dimensions?: string | undefined
                nodes?: string | undefined
                contexts?: string | undefined
                instances?: string | undefined
                labels?: string | undefined
                alerts?: string | undefined
                dimensions?: string | undefined
                after?: number | undefined
                before?: number | undefined
                points?: number | undefined
                tier?: number | undefined
                options?:
                  | (
                      | 'jsonwrap'
                      | 'raw'
                      | 'minify'
                      | 'debug'
                      | 'nonzero'
                      | 'null2zero'
                      | 'abs'
                      | 'absolute'
                      | 'display-absolute'
                      | 'flip'
                      | 'reversed'
                      | 'min2max'
                      | 'percentage'
                      | 'seconds'
                      | 'ms'
                      | 'milliseconds'
                      | 'unaligned'
                      | 'match-ids'
                      | 'match-names'
                      | 'anomaly-bit'
                      | 'jw-anomaly-rates'
                      | 'details'
                      | 'group-by-labels'
                      | 'natural-points'
                      | 'virtual-points'
                      | 'selected-tier'
                      | 'all-dimensions'
                      | 'label-quotes'
                      | 'objectrows'
                      | 'google_json'
                      | 'minimal-stats'
                      | 'minimal'
                      | 'long-json-keys'
                      | 'long-keys'
                      | 'mcp-info'
                      | 'rfc3339'
                      | 'cardinality-limit-all'
                    )[]
                  | undefined
                time_group?:
                  | 'min'
                  | 'max'
                  | 'avg'
                  | 'average'
                  | 'median'
                  | 'stddev'
                  | 'sum'
                  | 'incremental-sum'
                  | 'ses'
                  | 'des'
                  | 'cv'
                  | 'percentage-of-samples'
                  | 'countif'
                  | 'percentage-of-time'
                  | 'number-of-flaps'
                  | 'number-of-times'
                  | 'percentile'
                  | 'percentile25'
                  | 'percentile50'
                  | 'percentile75'
                  | 'percentile80'
                  | 'percentile90'
                  | 'percentile95'
                  | 'percentile97'
                  | 'percentile98'
                  | 'percentile99'
                  | 'trimmed-mean'
                  | 'trimmed-mean1'
                  | 'trimmed-mean2'
                  | 'trimmed-mean3'
                  | 'trimmed-mean5'
                  | 'trimmed-mean10'
                  | 'trimmed-mean15'
                  | 'trimmed-mean20'
                  | 'trimmed-mean25'
                  | 'trimmed-median'
                  | 'trimmed-median1'
                  | 'trimmed-median2'
                  | 'trimmed-median3'
                  | 'trimmed-median5'
                  | 'trimmed-median10'
                  | 'trimmed-median15'
                  | 'trimmed-median20'
                  | 'trimmed-median25'
                  | 'ema'
                  | 'extremes'
                  | 'latest'
                  | undefined
                time_group_options?: string | undefined
                time_resampling?: number | undefined
                format?:
                  | 'json'
                  | 'json2'
                  | 'jsonp'
                  | 'csv'
                  | 'tsv'
                  | 'tsv-excel'
                  | 'ssv'
                  | 'ssvcomma'
                  | 'datatable'
                  | 'datasource'
                  | 'html'
                  | 'markdown'
                  | 'array'
                  | 'csvjsonarray'
                  | undefined
                cardinality_limit?: bigint | undefined
                limit?: bigint | undefined
                timeout?: number | undefined
                callback?: string | undefined
                filename?: string | undefined
                tqx?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 500
          }
    }
  } & {
    '/api/v3/data': {
      $get:
        | {
            input: {
              query: {
                group_by?:
                  | (
                      | 'dimension'
                      | 'instance'
                      | 'percentage-of-instance'
                      | 'label'
                      | 'node'
                      | 'context'
                      | 'units'
                      | 'selected'
                    )[]
                  | undefined
                group_by_label?: string | undefined
                aggregation?:
                  | 'min'
                  | 'max'
                  | 'avg'
                  | 'average'
                  | 'sum'
                  | 'percentage'
                  | 'extremes'
                  | undefined
                scope_nodes?: string | undefined
                scope_contexts?: string | undefined
                scope_instances?: string | undefined
                scope_labels?: string | undefined
                scope_dimensions?: string | undefined
                nodes?: string | undefined
                contexts?: string | undefined
                instances?: string | undefined
                labels?: string | undefined
                alerts?: string | undefined
                dimensions?: string | undefined
                after?: number | undefined
                before?: number | undefined
                points?: number | undefined
                tier?: number | undefined
                options?:
                  | (
                      | 'jsonwrap'
                      | 'raw'
                      | 'minify'
                      | 'debug'
                      | 'nonzero'
                      | 'null2zero'
                      | 'abs'
                      | 'absolute'
                      | 'display-absolute'
                      | 'flip'
                      | 'reversed'
                      | 'min2max'
                      | 'percentage'
                      | 'seconds'
                      | 'ms'
                      | 'milliseconds'
                      | 'unaligned'
                      | 'match-ids'
                      | 'match-names'
                      | 'anomaly-bit'
                      | 'jw-anomaly-rates'
                      | 'details'
                      | 'group-by-labels'
                      | 'natural-points'
                      | 'virtual-points'
                      | 'selected-tier'
                      | 'all-dimensions'
                      | 'label-quotes'
                      | 'objectrows'
                      | 'google_json'
                      | 'minimal-stats'
                      | 'minimal'
                      | 'long-json-keys'
                      | 'long-keys'
                      | 'mcp-info'
                      | 'rfc3339'
                      | 'cardinality-limit-all'
                    )[]
                  | undefined
                time_group?:
                  | 'min'
                  | 'max'
                  | 'avg'
                  | 'average'
                  | 'median'
                  | 'stddev'
                  | 'sum'
                  | 'incremental-sum'
                  | 'ses'
                  | 'des'
                  | 'cv'
                  | 'percentage-of-samples'
                  | 'countif'
                  | 'percentage-of-time'
                  | 'number-of-flaps'
                  | 'number-of-times'
                  | 'percentile'
                  | 'percentile25'
                  | 'percentile50'
                  | 'percentile75'
                  | 'percentile80'
                  | 'percentile90'
                  | 'percentile95'
                  | 'percentile97'
                  | 'percentile98'
                  | 'percentile99'
                  | 'trimmed-mean'
                  | 'trimmed-mean1'
                  | 'trimmed-mean2'
                  | 'trimmed-mean3'
                  | 'trimmed-mean5'
                  | 'trimmed-mean10'
                  | 'trimmed-mean15'
                  | 'trimmed-mean20'
                  | 'trimmed-mean25'
                  | 'trimmed-median'
                  | 'trimmed-median1'
                  | 'trimmed-median2'
                  | 'trimmed-median3'
                  | 'trimmed-median5'
                  | 'trimmed-median10'
                  | 'trimmed-median15'
                  | 'trimmed-median20'
                  | 'trimmed-median25'
                  | 'ema'
                  | 'extremes'
                  | 'latest'
                  | undefined
                time_group_options?: string | undefined
                time_resampling?: number | undefined
                format?:
                  | 'json'
                  | 'json2'
                  | 'jsonp'
                  | 'csv'
                  | 'tsv'
                  | 'tsv-excel'
                  | 'ssv'
                  | 'ssvcomma'
                  | 'datatable'
                  | 'datasource'
                  | 'html'
                  | 'markdown'
                  | 'array'
                  | 'csvjsonarray'
                  | undefined
                cardinality_limit?: bigint | undefined
                limit?: bigint | undefined
                timeout?: number | undefined
                callback?: string | undefined
                filename?: string | undefined
                tqx?: string | undefined
              }
            }
            output: Jsonwrap2 | DataJsonFormats2
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                group_by?:
                  | (
                      | 'dimension'
                      | 'instance'
                      | 'percentage-of-instance'
                      | 'label'
                      | 'node'
                      | 'context'
                      | 'units'
                      | 'selected'
                    )[]
                  | undefined
                group_by_label?: string | undefined
                aggregation?:
                  | 'min'
                  | 'max'
                  | 'avg'
                  | 'average'
                  | 'sum'
                  | 'percentage'
                  | 'extremes'
                  | undefined
                scope_nodes?: string | undefined
                scope_contexts?: string | undefined
                scope_instances?: string | undefined
                scope_labels?: string | undefined
                scope_dimensions?: string | undefined
                nodes?: string | undefined
                contexts?: string | undefined
                instances?: string | undefined
                labels?: string | undefined
                alerts?: string | undefined
                dimensions?: string | undefined
                after?: number | undefined
                before?: number | undefined
                points?: number | undefined
                tier?: number | undefined
                options?:
                  | (
                      | 'jsonwrap'
                      | 'raw'
                      | 'minify'
                      | 'debug'
                      | 'nonzero'
                      | 'null2zero'
                      | 'abs'
                      | 'absolute'
                      | 'display-absolute'
                      | 'flip'
                      | 'reversed'
                      | 'min2max'
                      | 'percentage'
                      | 'seconds'
                      | 'ms'
                      | 'milliseconds'
                      | 'unaligned'
                      | 'match-ids'
                      | 'match-names'
                      | 'anomaly-bit'
                      | 'jw-anomaly-rates'
                      | 'details'
                      | 'group-by-labels'
                      | 'natural-points'
                      | 'virtual-points'
                      | 'selected-tier'
                      | 'all-dimensions'
                      | 'label-quotes'
                      | 'objectrows'
                      | 'google_json'
                      | 'minimal-stats'
                      | 'minimal'
                      | 'long-json-keys'
                      | 'long-keys'
                      | 'mcp-info'
                      | 'rfc3339'
                      | 'cardinality-limit-all'
                    )[]
                  | undefined
                time_group?:
                  | 'min'
                  | 'max'
                  | 'avg'
                  | 'average'
                  | 'median'
                  | 'stddev'
                  | 'sum'
                  | 'incremental-sum'
                  | 'ses'
                  | 'des'
                  | 'cv'
                  | 'percentage-of-samples'
                  | 'countif'
                  | 'percentage-of-time'
                  | 'number-of-flaps'
                  | 'number-of-times'
                  | 'percentile'
                  | 'percentile25'
                  | 'percentile50'
                  | 'percentile75'
                  | 'percentile80'
                  | 'percentile90'
                  | 'percentile95'
                  | 'percentile97'
                  | 'percentile98'
                  | 'percentile99'
                  | 'trimmed-mean'
                  | 'trimmed-mean1'
                  | 'trimmed-mean2'
                  | 'trimmed-mean3'
                  | 'trimmed-mean5'
                  | 'trimmed-mean10'
                  | 'trimmed-mean15'
                  | 'trimmed-mean20'
                  | 'trimmed-mean25'
                  | 'trimmed-median'
                  | 'trimmed-median1'
                  | 'trimmed-median2'
                  | 'trimmed-median3'
                  | 'trimmed-median5'
                  | 'trimmed-median10'
                  | 'trimmed-median15'
                  | 'trimmed-median20'
                  | 'trimmed-median25'
                  | 'ema'
                  | 'extremes'
                  | 'latest'
                  | undefined
                time_group_options?: string | undefined
                time_resampling?: number | undefined
                format?:
                  | 'json'
                  | 'json2'
                  | 'jsonp'
                  | 'csv'
                  | 'tsv'
                  | 'tsv-excel'
                  | 'ssv'
                  | 'ssvcomma'
                  | 'datatable'
                  | 'datasource'
                  | 'html'
                  | 'markdown'
                  | 'array'
                  | 'csvjsonarray'
                  | undefined
                cardinality_limit?: bigint | undefined
                limit?: bigint | undefined
                timeout?: number | undefined
                callback?: string | undefined
                filename?: string | undefined
                tqx?: string | undefined
              }
            }
            output: string
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              query: {
                group_by?:
                  | (
                      | 'dimension'
                      | 'instance'
                      | 'percentage-of-instance'
                      | 'label'
                      | 'node'
                      | 'context'
                      | 'units'
                      | 'selected'
                    )[]
                  | undefined
                group_by_label?: string | undefined
                aggregation?:
                  | 'min'
                  | 'max'
                  | 'avg'
                  | 'average'
                  | 'sum'
                  | 'percentage'
                  | 'extremes'
                  | undefined
                scope_nodes?: string | undefined
                scope_contexts?: string | undefined
                scope_instances?: string | undefined
                scope_labels?: string | undefined
                scope_dimensions?: string | undefined
                nodes?: string | undefined
                contexts?: string | undefined
                instances?: string | undefined
                labels?: string | undefined
                alerts?: string | undefined
                dimensions?: string | undefined
                after?: number | undefined
                before?: number | undefined
                points?: number | undefined
                tier?: number | undefined
                options?:
                  | (
                      | 'jsonwrap'
                      | 'raw'
                      | 'minify'
                      | 'debug'
                      | 'nonzero'
                      | 'null2zero'
                      | 'abs'
                      | 'absolute'
                      | 'display-absolute'
                      | 'flip'
                      | 'reversed'
                      | 'min2max'
                      | 'percentage'
                      | 'seconds'
                      | 'ms'
                      | 'milliseconds'
                      | 'unaligned'
                      | 'match-ids'
                      | 'match-names'
                      | 'anomaly-bit'
                      | 'jw-anomaly-rates'
                      | 'details'
                      | 'group-by-labels'
                      | 'natural-points'
                      | 'virtual-points'
                      | 'selected-tier'
                      | 'all-dimensions'
                      | 'label-quotes'
                      | 'objectrows'
                      | 'google_json'
                      | 'minimal-stats'
                      | 'minimal'
                      | 'long-json-keys'
                      | 'long-keys'
                      | 'mcp-info'
                      | 'rfc3339'
                      | 'cardinality-limit-all'
                    )[]
                  | undefined
                time_group?:
                  | 'min'
                  | 'max'
                  | 'avg'
                  | 'average'
                  | 'median'
                  | 'stddev'
                  | 'sum'
                  | 'incremental-sum'
                  | 'ses'
                  | 'des'
                  | 'cv'
                  | 'percentage-of-samples'
                  | 'countif'
                  | 'percentage-of-time'
                  | 'number-of-flaps'
                  | 'number-of-times'
                  | 'percentile'
                  | 'percentile25'
                  | 'percentile50'
                  | 'percentile75'
                  | 'percentile80'
                  | 'percentile90'
                  | 'percentile95'
                  | 'percentile97'
                  | 'percentile98'
                  | 'percentile99'
                  | 'trimmed-mean'
                  | 'trimmed-mean1'
                  | 'trimmed-mean2'
                  | 'trimmed-mean3'
                  | 'trimmed-mean5'
                  | 'trimmed-mean10'
                  | 'trimmed-mean15'
                  | 'trimmed-mean20'
                  | 'trimmed-mean25'
                  | 'trimmed-median'
                  | 'trimmed-median1'
                  | 'trimmed-median2'
                  | 'trimmed-median3'
                  | 'trimmed-median5'
                  | 'trimmed-median10'
                  | 'trimmed-median15'
                  | 'trimmed-median20'
                  | 'trimmed-median25'
                  | 'ema'
                  | 'extremes'
                  | 'latest'
                  | undefined
                time_group_options?: string | undefined
                time_resampling?: number | undefined
                format?:
                  | 'json'
                  | 'json2'
                  | 'jsonp'
                  | 'csv'
                  | 'tsv'
                  | 'tsv-excel'
                  | 'ssv'
                  | 'ssvcomma'
                  | 'datatable'
                  | 'datasource'
                  | 'html'
                  | 'markdown'
                  | 'array'
                  | 'csvjsonarray'
                  | undefined
                cardinality_limit?: bigint | undefined
                limit?: bigint | undefined
                timeout?: number | undefined
                callback?: string | undefined
                filename?: string | undefined
                tqx?: string | undefined
              }
            }
            output: string
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              query: {
                group_by?:
                  | (
                      | 'dimension'
                      | 'instance'
                      | 'percentage-of-instance'
                      | 'label'
                      | 'node'
                      | 'context'
                      | 'units'
                      | 'selected'
                    )[]
                  | undefined
                group_by_label?: string | undefined
                aggregation?:
                  | 'min'
                  | 'max'
                  | 'avg'
                  | 'average'
                  | 'sum'
                  | 'percentage'
                  | 'extremes'
                  | undefined
                scope_nodes?: string | undefined
                scope_contexts?: string | undefined
                scope_instances?: string | undefined
                scope_labels?: string | undefined
                scope_dimensions?: string | undefined
                nodes?: string | undefined
                contexts?: string | undefined
                instances?: string | undefined
                labels?: string | undefined
                alerts?: string | undefined
                dimensions?: string | undefined
                after?: number | undefined
                before?: number | undefined
                points?: number | undefined
                tier?: number | undefined
                options?:
                  | (
                      | 'jsonwrap'
                      | 'raw'
                      | 'minify'
                      | 'debug'
                      | 'nonzero'
                      | 'null2zero'
                      | 'abs'
                      | 'absolute'
                      | 'display-absolute'
                      | 'flip'
                      | 'reversed'
                      | 'min2max'
                      | 'percentage'
                      | 'seconds'
                      | 'ms'
                      | 'milliseconds'
                      | 'unaligned'
                      | 'match-ids'
                      | 'match-names'
                      | 'anomaly-bit'
                      | 'jw-anomaly-rates'
                      | 'details'
                      | 'group-by-labels'
                      | 'natural-points'
                      | 'virtual-points'
                      | 'selected-tier'
                      | 'all-dimensions'
                      | 'label-quotes'
                      | 'objectrows'
                      | 'google_json'
                      | 'minimal-stats'
                      | 'minimal'
                      | 'long-json-keys'
                      | 'long-keys'
                      | 'mcp-info'
                      | 'rfc3339'
                      | 'cardinality-limit-all'
                    )[]
                  | undefined
                time_group?:
                  | 'min'
                  | 'max'
                  | 'avg'
                  | 'average'
                  | 'median'
                  | 'stddev'
                  | 'sum'
                  | 'incremental-sum'
                  | 'ses'
                  | 'des'
                  | 'cv'
                  | 'percentage-of-samples'
                  | 'countif'
                  | 'percentage-of-time'
                  | 'number-of-flaps'
                  | 'number-of-times'
                  | 'percentile'
                  | 'percentile25'
                  | 'percentile50'
                  | 'percentile75'
                  | 'percentile80'
                  | 'percentile90'
                  | 'percentile95'
                  | 'percentile97'
                  | 'percentile98'
                  | 'percentile99'
                  | 'trimmed-mean'
                  | 'trimmed-mean1'
                  | 'trimmed-mean2'
                  | 'trimmed-mean3'
                  | 'trimmed-mean5'
                  | 'trimmed-mean10'
                  | 'trimmed-mean15'
                  | 'trimmed-mean20'
                  | 'trimmed-mean25'
                  | 'trimmed-median'
                  | 'trimmed-median1'
                  | 'trimmed-median2'
                  | 'trimmed-median3'
                  | 'trimmed-median5'
                  | 'trimmed-median10'
                  | 'trimmed-median15'
                  | 'trimmed-median20'
                  | 'trimmed-median25'
                  | 'ema'
                  | 'extremes'
                  | 'latest'
                  | undefined
                time_group_options?: string | undefined
                time_resampling?: number | undefined
                format?:
                  | 'json'
                  | 'json2'
                  | 'jsonp'
                  | 'csv'
                  | 'tsv'
                  | 'tsv-excel'
                  | 'ssv'
                  | 'ssvcomma'
                  | 'datatable'
                  | 'datasource'
                  | 'html'
                  | 'markdown'
                  | 'array'
                  | 'csvjsonarray'
                  | undefined
                cardinality_limit?: bigint | undefined
                limit?: bigint | undefined
                timeout?: number | undefined
                callback?: string | undefined
                filename?: string | undefined
                tqx?: string | undefined
              }
            }
            output: string
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              query: {
                group_by?:
                  | (
                      | 'dimension'
                      | 'instance'
                      | 'percentage-of-instance'
                      | 'label'
                      | 'node'
                      | 'context'
                      | 'units'
                      | 'selected'
                    )[]
                  | undefined
                group_by_label?: string | undefined
                aggregation?:
                  | 'min'
                  | 'max'
                  | 'avg'
                  | 'average'
                  | 'sum'
                  | 'percentage'
                  | 'extremes'
                  | undefined
                scope_nodes?: string | undefined
                scope_contexts?: string | undefined
                scope_instances?: string | undefined
                scope_labels?: string | undefined
                scope_dimensions?: string | undefined
                nodes?: string | undefined
                contexts?: string | undefined
                instances?: string | undefined
                labels?: string | undefined
                alerts?: string | undefined
                dimensions?: string | undefined
                after?: number | undefined
                before?: number | undefined
                points?: number | undefined
                tier?: number | undefined
                options?:
                  | (
                      | 'jsonwrap'
                      | 'raw'
                      | 'minify'
                      | 'debug'
                      | 'nonzero'
                      | 'null2zero'
                      | 'abs'
                      | 'absolute'
                      | 'display-absolute'
                      | 'flip'
                      | 'reversed'
                      | 'min2max'
                      | 'percentage'
                      | 'seconds'
                      | 'ms'
                      | 'milliseconds'
                      | 'unaligned'
                      | 'match-ids'
                      | 'match-names'
                      | 'anomaly-bit'
                      | 'jw-anomaly-rates'
                      | 'details'
                      | 'group-by-labels'
                      | 'natural-points'
                      | 'virtual-points'
                      | 'selected-tier'
                      | 'all-dimensions'
                      | 'label-quotes'
                      | 'objectrows'
                      | 'google_json'
                      | 'minimal-stats'
                      | 'minimal'
                      | 'long-json-keys'
                      | 'long-keys'
                      | 'mcp-info'
                      | 'rfc3339'
                      | 'cardinality-limit-all'
                    )[]
                  | undefined
                time_group?:
                  | 'min'
                  | 'max'
                  | 'avg'
                  | 'average'
                  | 'median'
                  | 'stddev'
                  | 'sum'
                  | 'incremental-sum'
                  | 'ses'
                  | 'des'
                  | 'cv'
                  | 'percentage-of-samples'
                  | 'countif'
                  | 'percentage-of-time'
                  | 'number-of-flaps'
                  | 'number-of-times'
                  | 'percentile'
                  | 'percentile25'
                  | 'percentile50'
                  | 'percentile75'
                  | 'percentile80'
                  | 'percentile90'
                  | 'percentile95'
                  | 'percentile97'
                  | 'percentile98'
                  | 'percentile99'
                  | 'trimmed-mean'
                  | 'trimmed-mean1'
                  | 'trimmed-mean2'
                  | 'trimmed-mean3'
                  | 'trimmed-mean5'
                  | 'trimmed-mean10'
                  | 'trimmed-mean15'
                  | 'trimmed-mean20'
                  | 'trimmed-mean25'
                  | 'trimmed-median'
                  | 'trimmed-median1'
                  | 'trimmed-median2'
                  | 'trimmed-median3'
                  | 'trimmed-median5'
                  | 'trimmed-median10'
                  | 'trimmed-median15'
                  | 'trimmed-median20'
                  | 'trimmed-median25'
                  | 'ema'
                  | 'extremes'
                  | 'latest'
                  | undefined
                time_group_options?: string | undefined
                time_resampling?: number | undefined
                format?:
                  | 'json'
                  | 'json2'
                  | 'jsonp'
                  | 'csv'
                  | 'tsv'
                  | 'tsv-excel'
                  | 'ssv'
                  | 'ssvcomma'
                  | 'datatable'
                  | 'datasource'
                  | 'html'
                  | 'markdown'
                  | 'array'
                  | 'csvjsonarray'
                  | undefined
                cardinality_limit?: bigint | undefined
                limit?: bigint | undefined
                timeout?: number | undefined
                callback?: string | undefined
                filename?: string | undefined
                tqx?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: {
              query: {
                group_by?:
                  | (
                      | 'dimension'
                      | 'instance'
                      | 'percentage-of-instance'
                      | 'label'
                      | 'node'
                      | 'context'
                      | 'units'
                      | 'selected'
                    )[]
                  | undefined
                group_by_label?: string | undefined
                aggregation?:
                  | 'min'
                  | 'max'
                  | 'avg'
                  | 'average'
                  | 'sum'
                  | 'percentage'
                  | 'extremes'
                  | undefined
                scope_nodes?: string | undefined
                scope_contexts?: string | undefined
                scope_instances?: string | undefined
                scope_labels?: string | undefined
                scope_dimensions?: string | undefined
                nodes?: string | undefined
                contexts?: string | undefined
                instances?: string | undefined
                labels?: string | undefined
                alerts?: string | undefined
                dimensions?: string | undefined
                after?: number | undefined
                before?: number | undefined
                points?: number | undefined
                tier?: number | undefined
                options?:
                  | (
                      | 'jsonwrap'
                      | 'raw'
                      | 'minify'
                      | 'debug'
                      | 'nonzero'
                      | 'null2zero'
                      | 'abs'
                      | 'absolute'
                      | 'display-absolute'
                      | 'flip'
                      | 'reversed'
                      | 'min2max'
                      | 'percentage'
                      | 'seconds'
                      | 'ms'
                      | 'milliseconds'
                      | 'unaligned'
                      | 'match-ids'
                      | 'match-names'
                      | 'anomaly-bit'
                      | 'jw-anomaly-rates'
                      | 'details'
                      | 'group-by-labels'
                      | 'natural-points'
                      | 'virtual-points'
                      | 'selected-tier'
                      | 'all-dimensions'
                      | 'label-quotes'
                      | 'objectrows'
                      | 'google_json'
                      | 'minimal-stats'
                      | 'minimal'
                      | 'long-json-keys'
                      | 'long-keys'
                      | 'mcp-info'
                      | 'rfc3339'
                      | 'cardinality-limit-all'
                    )[]
                  | undefined
                time_group?:
                  | 'min'
                  | 'max'
                  | 'avg'
                  | 'average'
                  | 'median'
                  | 'stddev'
                  | 'sum'
                  | 'incremental-sum'
                  | 'ses'
                  | 'des'
                  | 'cv'
                  | 'percentage-of-samples'
                  | 'countif'
                  | 'percentage-of-time'
                  | 'number-of-flaps'
                  | 'number-of-times'
                  | 'percentile'
                  | 'percentile25'
                  | 'percentile50'
                  | 'percentile75'
                  | 'percentile80'
                  | 'percentile90'
                  | 'percentile95'
                  | 'percentile97'
                  | 'percentile98'
                  | 'percentile99'
                  | 'trimmed-mean'
                  | 'trimmed-mean1'
                  | 'trimmed-mean2'
                  | 'trimmed-mean3'
                  | 'trimmed-mean5'
                  | 'trimmed-mean10'
                  | 'trimmed-mean15'
                  | 'trimmed-mean20'
                  | 'trimmed-mean25'
                  | 'trimmed-median'
                  | 'trimmed-median1'
                  | 'trimmed-median2'
                  | 'trimmed-median3'
                  | 'trimmed-median5'
                  | 'trimmed-median10'
                  | 'trimmed-median15'
                  | 'trimmed-median20'
                  | 'trimmed-median25'
                  | 'ema'
                  | 'extremes'
                  | 'latest'
                  | undefined
                time_group_options?: string | undefined
                time_resampling?: number | undefined
                format?:
                  | 'json'
                  | 'json2'
                  | 'jsonp'
                  | 'csv'
                  | 'tsv'
                  | 'tsv-excel'
                  | 'ssv'
                  | 'ssvcomma'
                  | 'datatable'
                  | 'datasource'
                  | 'html'
                  | 'markdown'
                  | 'array'
                  | 'csvjsonarray'
                  | undefined
                cardinality_limit?: bigint | undefined
                limit?: bigint | undefined
                timeout?: number | undefined
                callback?: string | undefined
                filename?: string | undefined
                tqx?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 500
          }
    }
  } & {
    '/api/v1/data': {
      $get:
        | {
            input: {
              query: {
                chart?: string | undefined
                context?: string | undefined
                dimension?: string[] | undefined
                chart_label_key?: string | undefined
                chart_labels_filter?: string | undefined
                after?: number | undefined
                before?: number | undefined
                points?: number | undefined
                tier?: number | undefined
                options?:
                  | (
                      | 'jsonwrap'
                      | 'raw'
                      | 'minify'
                      | 'debug'
                      | 'nonzero'
                      | 'null2zero'
                      | 'abs'
                      | 'absolute'
                      | 'display-absolute'
                      | 'flip'
                      | 'reversed'
                      | 'min2max'
                      | 'percentage'
                      | 'seconds'
                      | 'ms'
                      | 'milliseconds'
                      | 'unaligned'
                      | 'match-ids'
                      | 'match-names'
                      | 'anomaly-bit'
                      | 'jw-anomaly-rates'
                      | 'details'
                      | 'group-by-labels'
                      | 'natural-points'
                      | 'virtual-points'
                      | 'selected-tier'
                      | 'all-dimensions'
                      | 'label-quotes'
                      | 'objectrows'
                      | 'google_json'
                      | 'minimal-stats'
                      | 'minimal'
                      | 'long-json-keys'
                      | 'long-keys'
                      | 'mcp-info'
                      | 'rfc3339'
                      | 'cardinality-limit-all'
                    )[]
                  | undefined
                format?:
                  | 'json'
                  | 'jsonp'
                  | 'csv'
                  | 'tsv'
                  | 'tsv-excel'
                  | 'ssv'
                  | 'ssvcomma'
                  | 'datatable'
                  | 'datasource'
                  | 'html'
                  | 'markdown'
                  | 'array'
                  | 'csvjsonarray'
                  | undefined
                group?:
                  | 'min'
                  | 'max'
                  | 'avg'
                  | 'average'
                  | 'median'
                  | 'stddev'
                  | 'sum'
                  | 'incremental-sum'
                  | 'ses'
                  | 'des'
                  | 'cv'
                  | 'percentage-of-samples'
                  | 'countif'
                  | 'percentage-of-time'
                  | 'number-of-flaps'
                  | 'number-of-times'
                  | 'percentile'
                  | 'percentile25'
                  | 'percentile50'
                  | 'percentile75'
                  | 'percentile80'
                  | 'percentile90'
                  | 'percentile95'
                  | 'percentile97'
                  | 'percentile98'
                  | 'percentile99'
                  | 'trimmed-mean'
                  | 'trimmed-mean1'
                  | 'trimmed-mean2'
                  | 'trimmed-mean3'
                  | 'trimmed-mean5'
                  | 'trimmed-mean10'
                  | 'trimmed-mean15'
                  | 'trimmed-mean20'
                  | 'trimmed-mean25'
                  | 'trimmed-median'
                  | 'trimmed-median1'
                  | 'trimmed-median2'
                  | 'trimmed-median3'
                  | 'trimmed-median5'
                  | 'trimmed-median10'
                  | 'trimmed-median15'
                  | 'trimmed-median20'
                  | 'trimmed-median25'
                  | 'ema'
                  | 'extremes'
                  | 'latest'
                  | undefined
                group_options?: string | undefined
                gtime?: number | undefined
                timeout?: number | undefined
                callback?: string | undefined
                filename?: string | undefined
                tqx?: string | undefined
              }
            }
            output: Jsonwrap1 | DataJsonFormats1
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                chart?: string | undefined
                context?: string | undefined
                dimension?: string[] | undefined
                chart_label_key?: string | undefined
                chart_labels_filter?: string | undefined
                after?: number | undefined
                before?: number | undefined
                points?: number | undefined
                tier?: number | undefined
                options?:
                  | (
                      | 'jsonwrap'
                      | 'raw'
                      | 'minify'
                      | 'debug'
                      | 'nonzero'
                      | 'null2zero'
                      | 'abs'
                      | 'absolute'
                      | 'display-absolute'
                      | 'flip'
                      | 'reversed'
                      | 'min2max'
                      | 'percentage'
                      | 'seconds'
                      | 'ms'
                      | 'milliseconds'
                      | 'unaligned'
                      | 'match-ids'
                      | 'match-names'
                      | 'anomaly-bit'
                      | 'jw-anomaly-rates'
                      | 'details'
                      | 'group-by-labels'
                      | 'natural-points'
                      | 'virtual-points'
                      | 'selected-tier'
                      | 'all-dimensions'
                      | 'label-quotes'
                      | 'objectrows'
                      | 'google_json'
                      | 'minimal-stats'
                      | 'minimal'
                      | 'long-json-keys'
                      | 'long-keys'
                      | 'mcp-info'
                      | 'rfc3339'
                      | 'cardinality-limit-all'
                    )[]
                  | undefined
                format?:
                  | 'json'
                  | 'jsonp'
                  | 'csv'
                  | 'tsv'
                  | 'tsv-excel'
                  | 'ssv'
                  | 'ssvcomma'
                  | 'datatable'
                  | 'datasource'
                  | 'html'
                  | 'markdown'
                  | 'array'
                  | 'csvjsonarray'
                  | undefined
                group?:
                  | 'min'
                  | 'max'
                  | 'avg'
                  | 'average'
                  | 'median'
                  | 'stddev'
                  | 'sum'
                  | 'incremental-sum'
                  | 'ses'
                  | 'des'
                  | 'cv'
                  | 'percentage-of-samples'
                  | 'countif'
                  | 'percentage-of-time'
                  | 'number-of-flaps'
                  | 'number-of-times'
                  | 'percentile'
                  | 'percentile25'
                  | 'percentile50'
                  | 'percentile75'
                  | 'percentile80'
                  | 'percentile90'
                  | 'percentile95'
                  | 'percentile97'
                  | 'percentile98'
                  | 'percentile99'
                  | 'trimmed-mean'
                  | 'trimmed-mean1'
                  | 'trimmed-mean2'
                  | 'trimmed-mean3'
                  | 'trimmed-mean5'
                  | 'trimmed-mean10'
                  | 'trimmed-mean15'
                  | 'trimmed-mean20'
                  | 'trimmed-mean25'
                  | 'trimmed-median'
                  | 'trimmed-median1'
                  | 'trimmed-median2'
                  | 'trimmed-median3'
                  | 'trimmed-median5'
                  | 'trimmed-median10'
                  | 'trimmed-median15'
                  | 'trimmed-median20'
                  | 'trimmed-median25'
                  | 'ema'
                  | 'extremes'
                  | 'latest'
                  | undefined
                group_options?: string | undefined
                gtime?: number | undefined
                timeout?: number | undefined
                callback?: string | undefined
                filename?: string | undefined
                tqx?: string | undefined
              }
            }
            output: string
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              query: {
                chart?: string | undefined
                context?: string | undefined
                dimension?: string[] | undefined
                chart_label_key?: string | undefined
                chart_labels_filter?: string | undefined
                after?: number | undefined
                before?: number | undefined
                points?: number | undefined
                tier?: number | undefined
                options?:
                  | (
                      | 'jsonwrap'
                      | 'raw'
                      | 'minify'
                      | 'debug'
                      | 'nonzero'
                      | 'null2zero'
                      | 'abs'
                      | 'absolute'
                      | 'display-absolute'
                      | 'flip'
                      | 'reversed'
                      | 'min2max'
                      | 'percentage'
                      | 'seconds'
                      | 'ms'
                      | 'milliseconds'
                      | 'unaligned'
                      | 'match-ids'
                      | 'match-names'
                      | 'anomaly-bit'
                      | 'jw-anomaly-rates'
                      | 'details'
                      | 'group-by-labels'
                      | 'natural-points'
                      | 'virtual-points'
                      | 'selected-tier'
                      | 'all-dimensions'
                      | 'label-quotes'
                      | 'objectrows'
                      | 'google_json'
                      | 'minimal-stats'
                      | 'minimal'
                      | 'long-json-keys'
                      | 'long-keys'
                      | 'mcp-info'
                      | 'rfc3339'
                      | 'cardinality-limit-all'
                    )[]
                  | undefined
                format?:
                  | 'json'
                  | 'jsonp'
                  | 'csv'
                  | 'tsv'
                  | 'tsv-excel'
                  | 'ssv'
                  | 'ssvcomma'
                  | 'datatable'
                  | 'datasource'
                  | 'html'
                  | 'markdown'
                  | 'array'
                  | 'csvjsonarray'
                  | undefined
                group?:
                  | 'min'
                  | 'max'
                  | 'avg'
                  | 'average'
                  | 'median'
                  | 'stddev'
                  | 'sum'
                  | 'incremental-sum'
                  | 'ses'
                  | 'des'
                  | 'cv'
                  | 'percentage-of-samples'
                  | 'countif'
                  | 'percentage-of-time'
                  | 'number-of-flaps'
                  | 'number-of-times'
                  | 'percentile'
                  | 'percentile25'
                  | 'percentile50'
                  | 'percentile75'
                  | 'percentile80'
                  | 'percentile90'
                  | 'percentile95'
                  | 'percentile97'
                  | 'percentile98'
                  | 'percentile99'
                  | 'trimmed-mean'
                  | 'trimmed-mean1'
                  | 'trimmed-mean2'
                  | 'trimmed-mean3'
                  | 'trimmed-mean5'
                  | 'trimmed-mean10'
                  | 'trimmed-mean15'
                  | 'trimmed-mean20'
                  | 'trimmed-mean25'
                  | 'trimmed-median'
                  | 'trimmed-median1'
                  | 'trimmed-median2'
                  | 'trimmed-median3'
                  | 'trimmed-median5'
                  | 'trimmed-median10'
                  | 'trimmed-median15'
                  | 'trimmed-median20'
                  | 'trimmed-median25'
                  | 'ema'
                  | 'extremes'
                  | 'latest'
                  | undefined
                group_options?: string | undefined
                gtime?: number | undefined
                timeout?: number | undefined
                callback?: string | undefined
                filename?: string | undefined
                tqx?: string | undefined
              }
            }
            output: string
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              query: {
                chart?: string | undefined
                context?: string | undefined
                dimension?: string[] | undefined
                chart_label_key?: string | undefined
                chart_labels_filter?: string | undefined
                after?: number | undefined
                before?: number | undefined
                points?: number | undefined
                tier?: number | undefined
                options?:
                  | (
                      | 'jsonwrap'
                      | 'raw'
                      | 'minify'
                      | 'debug'
                      | 'nonzero'
                      | 'null2zero'
                      | 'abs'
                      | 'absolute'
                      | 'display-absolute'
                      | 'flip'
                      | 'reversed'
                      | 'min2max'
                      | 'percentage'
                      | 'seconds'
                      | 'ms'
                      | 'milliseconds'
                      | 'unaligned'
                      | 'match-ids'
                      | 'match-names'
                      | 'anomaly-bit'
                      | 'jw-anomaly-rates'
                      | 'details'
                      | 'group-by-labels'
                      | 'natural-points'
                      | 'virtual-points'
                      | 'selected-tier'
                      | 'all-dimensions'
                      | 'label-quotes'
                      | 'objectrows'
                      | 'google_json'
                      | 'minimal-stats'
                      | 'minimal'
                      | 'long-json-keys'
                      | 'long-keys'
                      | 'mcp-info'
                      | 'rfc3339'
                      | 'cardinality-limit-all'
                    )[]
                  | undefined
                format?:
                  | 'json'
                  | 'jsonp'
                  | 'csv'
                  | 'tsv'
                  | 'tsv-excel'
                  | 'ssv'
                  | 'ssvcomma'
                  | 'datatable'
                  | 'datasource'
                  | 'html'
                  | 'markdown'
                  | 'array'
                  | 'csvjsonarray'
                  | undefined
                group?:
                  | 'min'
                  | 'max'
                  | 'avg'
                  | 'average'
                  | 'median'
                  | 'stddev'
                  | 'sum'
                  | 'incremental-sum'
                  | 'ses'
                  | 'des'
                  | 'cv'
                  | 'percentage-of-samples'
                  | 'countif'
                  | 'percentage-of-time'
                  | 'number-of-flaps'
                  | 'number-of-times'
                  | 'percentile'
                  | 'percentile25'
                  | 'percentile50'
                  | 'percentile75'
                  | 'percentile80'
                  | 'percentile90'
                  | 'percentile95'
                  | 'percentile97'
                  | 'percentile98'
                  | 'percentile99'
                  | 'trimmed-mean'
                  | 'trimmed-mean1'
                  | 'trimmed-mean2'
                  | 'trimmed-mean3'
                  | 'trimmed-mean5'
                  | 'trimmed-mean10'
                  | 'trimmed-mean15'
                  | 'trimmed-mean20'
                  | 'trimmed-mean25'
                  | 'trimmed-median'
                  | 'trimmed-median1'
                  | 'trimmed-median2'
                  | 'trimmed-median3'
                  | 'trimmed-median5'
                  | 'trimmed-median10'
                  | 'trimmed-median15'
                  | 'trimmed-median20'
                  | 'trimmed-median25'
                  | 'ema'
                  | 'extremes'
                  | 'latest'
                  | undefined
                group_options?: string | undefined
                gtime?: number | undefined
                timeout?: number | undefined
                callback?: string | undefined
                filename?: string | undefined
                tqx?: string | undefined
              }
            }
            output: string
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              query: {
                chart?: string | undefined
                context?: string | undefined
                dimension?: string[] | undefined
                chart_label_key?: string | undefined
                chart_labels_filter?: string | undefined
                after?: number | undefined
                before?: number | undefined
                points?: number | undefined
                tier?: number | undefined
                options?:
                  | (
                      | 'jsonwrap'
                      | 'raw'
                      | 'minify'
                      | 'debug'
                      | 'nonzero'
                      | 'null2zero'
                      | 'abs'
                      | 'absolute'
                      | 'display-absolute'
                      | 'flip'
                      | 'reversed'
                      | 'min2max'
                      | 'percentage'
                      | 'seconds'
                      | 'ms'
                      | 'milliseconds'
                      | 'unaligned'
                      | 'match-ids'
                      | 'match-names'
                      | 'anomaly-bit'
                      | 'jw-anomaly-rates'
                      | 'details'
                      | 'group-by-labels'
                      | 'natural-points'
                      | 'virtual-points'
                      | 'selected-tier'
                      | 'all-dimensions'
                      | 'label-quotes'
                      | 'objectrows'
                      | 'google_json'
                      | 'minimal-stats'
                      | 'minimal'
                      | 'long-json-keys'
                      | 'long-keys'
                      | 'mcp-info'
                      | 'rfc3339'
                      | 'cardinality-limit-all'
                    )[]
                  | undefined
                format?:
                  | 'json'
                  | 'jsonp'
                  | 'csv'
                  | 'tsv'
                  | 'tsv-excel'
                  | 'ssv'
                  | 'ssvcomma'
                  | 'datatable'
                  | 'datasource'
                  | 'html'
                  | 'markdown'
                  | 'array'
                  | 'csvjsonarray'
                  | undefined
                group?:
                  | 'min'
                  | 'max'
                  | 'avg'
                  | 'average'
                  | 'median'
                  | 'stddev'
                  | 'sum'
                  | 'incremental-sum'
                  | 'ses'
                  | 'des'
                  | 'cv'
                  | 'percentage-of-samples'
                  | 'countif'
                  | 'percentage-of-time'
                  | 'number-of-flaps'
                  | 'number-of-times'
                  | 'percentile'
                  | 'percentile25'
                  | 'percentile50'
                  | 'percentile75'
                  | 'percentile80'
                  | 'percentile90'
                  | 'percentile95'
                  | 'percentile97'
                  | 'percentile98'
                  | 'percentile99'
                  | 'trimmed-mean'
                  | 'trimmed-mean1'
                  | 'trimmed-mean2'
                  | 'trimmed-mean3'
                  | 'trimmed-mean5'
                  | 'trimmed-mean10'
                  | 'trimmed-mean15'
                  | 'trimmed-mean20'
                  | 'trimmed-mean25'
                  | 'trimmed-median'
                  | 'trimmed-median1'
                  | 'trimmed-median2'
                  | 'trimmed-median3'
                  | 'trimmed-median5'
                  | 'trimmed-median10'
                  | 'trimmed-median15'
                  | 'trimmed-median20'
                  | 'trimmed-median25'
                  | 'ema'
                  | 'extremes'
                  | 'latest'
                  | undefined
                group_options?: string | undefined
                gtime?: number | undefined
                timeout?: number | undefined
                callback?: string | undefined
                filename?: string | undefined
                tqx?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: {
              query: {
                chart?: string | undefined
                context?: string | undefined
                dimension?: string[] | undefined
                chart_label_key?: string | undefined
                chart_labels_filter?: string | undefined
                after?: number | undefined
                before?: number | undefined
                points?: number | undefined
                tier?: number | undefined
                options?:
                  | (
                      | 'jsonwrap'
                      | 'raw'
                      | 'minify'
                      | 'debug'
                      | 'nonzero'
                      | 'null2zero'
                      | 'abs'
                      | 'absolute'
                      | 'display-absolute'
                      | 'flip'
                      | 'reversed'
                      | 'min2max'
                      | 'percentage'
                      | 'seconds'
                      | 'ms'
                      | 'milliseconds'
                      | 'unaligned'
                      | 'match-ids'
                      | 'match-names'
                      | 'anomaly-bit'
                      | 'jw-anomaly-rates'
                      | 'details'
                      | 'group-by-labels'
                      | 'natural-points'
                      | 'virtual-points'
                      | 'selected-tier'
                      | 'all-dimensions'
                      | 'label-quotes'
                      | 'objectrows'
                      | 'google_json'
                      | 'minimal-stats'
                      | 'minimal'
                      | 'long-json-keys'
                      | 'long-keys'
                      | 'mcp-info'
                      | 'rfc3339'
                      | 'cardinality-limit-all'
                    )[]
                  | undefined
                format?:
                  | 'json'
                  | 'jsonp'
                  | 'csv'
                  | 'tsv'
                  | 'tsv-excel'
                  | 'ssv'
                  | 'ssvcomma'
                  | 'datatable'
                  | 'datasource'
                  | 'html'
                  | 'markdown'
                  | 'array'
                  | 'csvjsonarray'
                  | undefined
                group?:
                  | 'min'
                  | 'max'
                  | 'avg'
                  | 'average'
                  | 'median'
                  | 'stddev'
                  | 'sum'
                  | 'incremental-sum'
                  | 'ses'
                  | 'des'
                  | 'cv'
                  | 'percentage-of-samples'
                  | 'countif'
                  | 'percentage-of-time'
                  | 'number-of-flaps'
                  | 'number-of-times'
                  | 'percentile'
                  | 'percentile25'
                  | 'percentile50'
                  | 'percentile75'
                  | 'percentile80'
                  | 'percentile90'
                  | 'percentile95'
                  | 'percentile97'
                  | 'percentile98'
                  | 'percentile99'
                  | 'trimmed-mean'
                  | 'trimmed-mean1'
                  | 'trimmed-mean2'
                  | 'trimmed-mean3'
                  | 'trimmed-mean5'
                  | 'trimmed-mean10'
                  | 'trimmed-mean15'
                  | 'trimmed-mean20'
                  | 'trimmed-mean25'
                  | 'trimmed-median'
                  | 'trimmed-median1'
                  | 'trimmed-median2'
                  | 'trimmed-median3'
                  | 'trimmed-median5'
                  | 'trimmed-median10'
                  | 'trimmed-median15'
                  | 'trimmed-median20'
                  | 'trimmed-median25'
                  | 'ema'
                  | 'extremes'
                  | 'latest'
                  | undefined
                group_options?: string | undefined
                gtime?: number | undefined
                timeout?: number | undefined
                callback?: string | undefined
                filename?: string | undefined
                tqx?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 404
          }
        | {
            input: {
              query: {
                chart?: string | undefined
                context?: string | undefined
                dimension?: string[] | undefined
                chart_label_key?: string | undefined
                chart_labels_filter?: string | undefined
                after?: number | undefined
                before?: number | undefined
                points?: number | undefined
                tier?: number | undefined
                options?:
                  | (
                      | 'jsonwrap'
                      | 'raw'
                      | 'minify'
                      | 'debug'
                      | 'nonzero'
                      | 'null2zero'
                      | 'abs'
                      | 'absolute'
                      | 'display-absolute'
                      | 'flip'
                      | 'reversed'
                      | 'min2max'
                      | 'percentage'
                      | 'seconds'
                      | 'ms'
                      | 'milliseconds'
                      | 'unaligned'
                      | 'match-ids'
                      | 'match-names'
                      | 'anomaly-bit'
                      | 'jw-anomaly-rates'
                      | 'details'
                      | 'group-by-labels'
                      | 'natural-points'
                      | 'virtual-points'
                      | 'selected-tier'
                      | 'all-dimensions'
                      | 'label-quotes'
                      | 'objectrows'
                      | 'google_json'
                      | 'minimal-stats'
                      | 'minimal'
                      | 'long-json-keys'
                      | 'long-keys'
                      | 'mcp-info'
                      | 'rfc3339'
                      | 'cardinality-limit-all'
                    )[]
                  | undefined
                format?:
                  | 'json'
                  | 'jsonp'
                  | 'csv'
                  | 'tsv'
                  | 'tsv-excel'
                  | 'ssv'
                  | 'ssvcomma'
                  | 'datatable'
                  | 'datasource'
                  | 'html'
                  | 'markdown'
                  | 'array'
                  | 'csvjsonarray'
                  | undefined
                group?:
                  | 'min'
                  | 'max'
                  | 'avg'
                  | 'average'
                  | 'median'
                  | 'stddev'
                  | 'sum'
                  | 'incremental-sum'
                  | 'ses'
                  | 'des'
                  | 'cv'
                  | 'percentage-of-samples'
                  | 'countif'
                  | 'percentage-of-time'
                  | 'number-of-flaps'
                  | 'number-of-times'
                  | 'percentile'
                  | 'percentile25'
                  | 'percentile50'
                  | 'percentile75'
                  | 'percentile80'
                  | 'percentile90'
                  | 'percentile95'
                  | 'percentile97'
                  | 'percentile98'
                  | 'percentile99'
                  | 'trimmed-mean'
                  | 'trimmed-mean1'
                  | 'trimmed-mean2'
                  | 'trimmed-mean3'
                  | 'trimmed-mean5'
                  | 'trimmed-mean10'
                  | 'trimmed-mean15'
                  | 'trimmed-mean20'
                  | 'trimmed-mean25'
                  | 'trimmed-median'
                  | 'trimmed-median1'
                  | 'trimmed-median2'
                  | 'trimmed-median3'
                  | 'trimmed-median5'
                  | 'trimmed-median10'
                  | 'trimmed-median15'
                  | 'trimmed-median20'
                  | 'trimmed-median25'
                  | 'ema'
                  | 'extremes'
                  | 'latest'
                  | undefined
                group_options?: string | undefined
                gtime?: number | undefined
                timeout?: number | undefined
                callback?: string | undefined
                filename?: string | undefined
                tqx?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 500
          }
    }
  } & {
    '/api/v1/allmetrics': {
      $get:
        | {
            input: {
              query: {
                format: 'shell' | 'prometheus' | 'prometheus_all_hosts' | 'json'
                filter?: string | undefined
                variables?: 'yes' | 'no' | '1' | '0' | 'true' | 'false' | undefined
                timestamps?: 'yes' | 'no' | '1' | '0' | 'true' | 'false' | undefined
                names?: 'yes' | 'no' | '1' | '0' | 'true' | 'false' | undefined
                oldunits?: 'yes' | 'no' | '1' | '0' | 'true' | 'false' | undefined
                hideunits?: 'yes' | 'no' | '1' | '0' | 'true' | 'false' | undefined
                server?: string | undefined
                prefix?: string | undefined
                data?: 'as-collected' | 'average' | 'sum' | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: {
              query: {
                format: 'shell' | 'prometheus' | 'prometheus_all_hosts' | 'json'
                filter?: string | undefined
                variables?: 'yes' | 'no' | '1' | '0' | 'true' | 'false' | undefined
                timestamps?: 'yes' | 'no' | '1' | '0' | 'true' | 'false' | undefined
                names?: 'yes' | 'no' | '1' | '0' | 'true' | 'false' | undefined
                oldunits?: 'yes' | 'no' | '1' | '0' | 'true' | 'false' | undefined
                hideunits?: 'yes' | 'no' | '1' | '0' | 'true' | 'false' | undefined
                server?: string | undefined
                prefix?: string | undefined
                data?: 'as-collected' | 'average' | 'sum' | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 400
          }
    }
  } & {
    '/api/v1/badge.svg': {
      $get:
        | {
            input: {
              query: {
                chart?: string | undefined
                dimension?: string[] | undefined
                after?: number | undefined
                before?: number | undefined
                group?:
                  | 'min'
                  | 'max'
                  | 'avg'
                  | 'average'
                  | 'median'
                  | 'stddev'
                  | 'sum'
                  | 'incremental-sum'
                  | 'ses'
                  | 'des'
                  | 'cv'
                  | 'percentage-of-samples'
                  | 'countif'
                  | 'percentage-of-time'
                  | 'number-of-flaps'
                  | 'number-of-times'
                  | 'percentile'
                  | 'percentile25'
                  | 'percentile50'
                  | 'percentile75'
                  | 'percentile80'
                  | 'percentile90'
                  | 'percentile95'
                  | 'percentile97'
                  | 'percentile98'
                  | 'percentile99'
                  | 'trimmed-mean'
                  | 'trimmed-mean1'
                  | 'trimmed-mean2'
                  | 'trimmed-mean3'
                  | 'trimmed-mean5'
                  | 'trimmed-mean10'
                  | 'trimmed-mean15'
                  | 'trimmed-mean20'
                  | 'trimmed-mean25'
                  | 'trimmed-median'
                  | 'trimmed-median1'
                  | 'trimmed-median2'
                  | 'trimmed-median3'
                  | 'trimmed-median5'
                  | 'trimmed-median10'
                  | 'trimmed-median15'
                  | 'trimmed-median20'
                  | 'trimmed-median25'
                  | 'ema'
                  | 'extremes'
                  | 'latest'
                  | undefined
                options?:
                  | (
                      | 'jsonwrap'
                      | 'raw'
                      | 'minify'
                      | 'debug'
                      | 'nonzero'
                      | 'null2zero'
                      | 'abs'
                      | 'absolute'
                      | 'display-absolute'
                      | 'flip'
                      | 'reversed'
                      | 'min2max'
                      | 'percentage'
                      | 'seconds'
                      | 'ms'
                      | 'milliseconds'
                      | 'unaligned'
                      | 'match-ids'
                      | 'match-names'
                      | 'anomaly-bit'
                      | 'jw-anomaly-rates'
                      | 'details'
                      | 'group-by-labels'
                      | 'natural-points'
                      | 'virtual-points'
                      | 'selected-tier'
                      | 'all-dimensions'
                      | 'label-quotes'
                      | 'objectrows'
                      | 'google_json'
                      | 'minimal-stats'
                      | 'minimal'
                      | 'long-json-keys'
                      | 'long-keys'
                      | 'mcp-info'
                      | 'rfc3339'
                      | 'cardinality-limit-all'
                    )[]
                  | undefined
                alarm?: string | undefined
                label?: string | undefined
                units?: string | undefined
                label_color?:
                  | 'green'
                  | 'brightgreen'
                  | 'yellow'
                  | 'yellowgreen'
                  | 'orange'
                  | 'red'
                  | 'blue'
                  | 'grey'
                  | 'gray'
                  | 'lightgrey'
                  | 'lightgray'
                  | string
                  | undefined
                value_color?: string | undefined
                text_color_lbl?:
                  | 'green'
                  | 'brightgreen'
                  | 'yellow'
                  | 'yellowgreen'
                  | 'orange'
                  | 'red'
                  | 'blue'
                  | 'grey'
                  | 'gray'
                  | 'lightgrey'
                  | 'lightgray'
                  | string
                  | undefined
                text_color_val?:
                  | 'green'
                  | 'brightgreen'
                  | 'yellow'
                  | 'yellowgreen'
                  | 'orange'
                  | 'red'
                  | 'blue'
                  | 'grey'
                  | 'gray'
                  | 'lightgrey'
                  | 'lightgray'
                  | string
                  | undefined
                multiply?: number | undefined
                divide?: number | undefined
                scale?: number | undefined
                fixed_width_lbl?: number | undefined
                fixed_width_val?: number | undefined
                points?: number | undefined
                group_options?: string | undefined
                precision?: number | undefined
                refresh?: 'auto' | number | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: {
              query: {
                chart?: string | undefined
                dimension?: string[] | undefined
                after?: number | undefined
                before?: number | undefined
                group?:
                  | 'min'
                  | 'max'
                  | 'avg'
                  | 'average'
                  | 'median'
                  | 'stddev'
                  | 'sum'
                  | 'incremental-sum'
                  | 'ses'
                  | 'des'
                  | 'cv'
                  | 'percentage-of-samples'
                  | 'countif'
                  | 'percentage-of-time'
                  | 'number-of-flaps'
                  | 'number-of-times'
                  | 'percentile'
                  | 'percentile25'
                  | 'percentile50'
                  | 'percentile75'
                  | 'percentile80'
                  | 'percentile90'
                  | 'percentile95'
                  | 'percentile97'
                  | 'percentile98'
                  | 'percentile99'
                  | 'trimmed-mean'
                  | 'trimmed-mean1'
                  | 'trimmed-mean2'
                  | 'trimmed-mean3'
                  | 'trimmed-mean5'
                  | 'trimmed-mean10'
                  | 'trimmed-mean15'
                  | 'trimmed-mean20'
                  | 'trimmed-mean25'
                  | 'trimmed-median'
                  | 'trimmed-median1'
                  | 'trimmed-median2'
                  | 'trimmed-median3'
                  | 'trimmed-median5'
                  | 'trimmed-median10'
                  | 'trimmed-median15'
                  | 'trimmed-median20'
                  | 'trimmed-median25'
                  | 'ema'
                  | 'extremes'
                  | 'latest'
                  | undefined
                options?:
                  | (
                      | 'jsonwrap'
                      | 'raw'
                      | 'minify'
                      | 'debug'
                      | 'nonzero'
                      | 'null2zero'
                      | 'abs'
                      | 'absolute'
                      | 'display-absolute'
                      | 'flip'
                      | 'reversed'
                      | 'min2max'
                      | 'percentage'
                      | 'seconds'
                      | 'ms'
                      | 'milliseconds'
                      | 'unaligned'
                      | 'match-ids'
                      | 'match-names'
                      | 'anomaly-bit'
                      | 'jw-anomaly-rates'
                      | 'details'
                      | 'group-by-labels'
                      | 'natural-points'
                      | 'virtual-points'
                      | 'selected-tier'
                      | 'all-dimensions'
                      | 'label-quotes'
                      | 'objectrows'
                      | 'google_json'
                      | 'minimal-stats'
                      | 'minimal'
                      | 'long-json-keys'
                      | 'long-keys'
                      | 'mcp-info'
                      | 'rfc3339'
                      | 'cardinality-limit-all'
                    )[]
                  | undefined
                alarm?: string | undefined
                label?: string | undefined
                units?: string | undefined
                label_color?:
                  | 'green'
                  | 'brightgreen'
                  | 'yellow'
                  | 'yellowgreen'
                  | 'orange'
                  | 'red'
                  | 'blue'
                  | 'grey'
                  | 'gray'
                  | 'lightgrey'
                  | 'lightgray'
                  | string
                  | undefined
                value_color?: string | undefined
                text_color_lbl?:
                  | 'green'
                  | 'brightgreen'
                  | 'yellow'
                  | 'yellowgreen'
                  | 'orange'
                  | 'red'
                  | 'blue'
                  | 'grey'
                  | 'gray'
                  | 'lightgrey'
                  | 'lightgray'
                  | string
                  | undefined
                text_color_val?:
                  | 'green'
                  | 'brightgreen'
                  | 'yellow'
                  | 'yellowgreen'
                  | 'orange'
                  | 'red'
                  | 'blue'
                  | 'grey'
                  | 'gray'
                  | 'lightgrey'
                  | 'lightgray'
                  | string
                  | undefined
                multiply?: number | undefined
                divide?: number | undefined
                scale?: number | undefined
                fixed_width_lbl?: number | undefined
                fixed_width_val?: number | undefined
                points?: number | undefined
                group_options?: string | undefined
                precision?: number | undefined
                refresh?: 'auto' | number | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: {
              query: {
                chart?: string | undefined
                dimension?: string[] | undefined
                after?: number | undefined
                before?: number | undefined
                group?:
                  | 'min'
                  | 'max'
                  | 'avg'
                  | 'average'
                  | 'median'
                  | 'stddev'
                  | 'sum'
                  | 'incremental-sum'
                  | 'ses'
                  | 'des'
                  | 'cv'
                  | 'percentage-of-samples'
                  | 'countif'
                  | 'percentage-of-time'
                  | 'number-of-flaps'
                  | 'number-of-times'
                  | 'percentile'
                  | 'percentile25'
                  | 'percentile50'
                  | 'percentile75'
                  | 'percentile80'
                  | 'percentile90'
                  | 'percentile95'
                  | 'percentile97'
                  | 'percentile98'
                  | 'percentile99'
                  | 'trimmed-mean'
                  | 'trimmed-mean1'
                  | 'trimmed-mean2'
                  | 'trimmed-mean3'
                  | 'trimmed-mean5'
                  | 'trimmed-mean10'
                  | 'trimmed-mean15'
                  | 'trimmed-mean20'
                  | 'trimmed-mean25'
                  | 'trimmed-median'
                  | 'trimmed-median1'
                  | 'trimmed-median2'
                  | 'trimmed-median3'
                  | 'trimmed-median5'
                  | 'trimmed-median10'
                  | 'trimmed-median15'
                  | 'trimmed-median20'
                  | 'trimmed-median25'
                  | 'ema'
                  | 'extremes'
                  | 'latest'
                  | undefined
                options?:
                  | (
                      | 'jsonwrap'
                      | 'raw'
                      | 'minify'
                      | 'debug'
                      | 'nonzero'
                      | 'null2zero'
                      | 'abs'
                      | 'absolute'
                      | 'display-absolute'
                      | 'flip'
                      | 'reversed'
                      | 'min2max'
                      | 'percentage'
                      | 'seconds'
                      | 'ms'
                      | 'milliseconds'
                      | 'unaligned'
                      | 'match-ids'
                      | 'match-names'
                      | 'anomaly-bit'
                      | 'jw-anomaly-rates'
                      | 'details'
                      | 'group-by-labels'
                      | 'natural-points'
                      | 'virtual-points'
                      | 'selected-tier'
                      | 'all-dimensions'
                      | 'label-quotes'
                      | 'objectrows'
                      | 'google_json'
                      | 'minimal-stats'
                      | 'minimal'
                      | 'long-json-keys'
                      | 'long-keys'
                      | 'mcp-info'
                      | 'rfc3339'
                      | 'cardinality-limit-all'
                    )[]
                  | undefined
                alarm?: string | undefined
                label?: string | undefined
                units?: string | undefined
                label_color?:
                  | 'green'
                  | 'brightgreen'
                  | 'yellow'
                  | 'yellowgreen'
                  | 'orange'
                  | 'red'
                  | 'blue'
                  | 'grey'
                  | 'gray'
                  | 'lightgrey'
                  | 'lightgray'
                  | string
                  | undefined
                value_color?: string | undefined
                text_color_lbl?:
                  | 'green'
                  | 'brightgreen'
                  | 'yellow'
                  | 'yellowgreen'
                  | 'orange'
                  | 'red'
                  | 'blue'
                  | 'grey'
                  | 'gray'
                  | 'lightgrey'
                  | 'lightgray'
                  | string
                  | undefined
                text_color_val?:
                  | 'green'
                  | 'brightgreen'
                  | 'yellow'
                  | 'yellowgreen'
                  | 'orange'
                  | 'red'
                  | 'blue'
                  | 'grey'
                  | 'gray'
                  | 'lightgrey'
                  | 'lightgray'
                  | string
                  | undefined
                multiply?: number | undefined
                divide?: number | undefined
                scale?: number | undefined
                fixed_width_lbl?: number | undefined
                fixed_width_val?: number | undefined
                points?: number | undefined
                group_options?: string | undefined
                precision?: number | undefined
                refresh?: 'auto' | number | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 404
          }
        | {
            input: {
              query: {
                chart?: string | undefined
                dimension?: string[] | undefined
                after?: number | undefined
                before?: number | undefined
                group?:
                  | 'min'
                  | 'max'
                  | 'avg'
                  | 'average'
                  | 'median'
                  | 'stddev'
                  | 'sum'
                  | 'incremental-sum'
                  | 'ses'
                  | 'des'
                  | 'cv'
                  | 'percentage-of-samples'
                  | 'countif'
                  | 'percentage-of-time'
                  | 'number-of-flaps'
                  | 'number-of-times'
                  | 'percentile'
                  | 'percentile25'
                  | 'percentile50'
                  | 'percentile75'
                  | 'percentile80'
                  | 'percentile90'
                  | 'percentile95'
                  | 'percentile97'
                  | 'percentile98'
                  | 'percentile99'
                  | 'trimmed-mean'
                  | 'trimmed-mean1'
                  | 'trimmed-mean2'
                  | 'trimmed-mean3'
                  | 'trimmed-mean5'
                  | 'trimmed-mean10'
                  | 'trimmed-mean15'
                  | 'trimmed-mean20'
                  | 'trimmed-mean25'
                  | 'trimmed-median'
                  | 'trimmed-median1'
                  | 'trimmed-median2'
                  | 'trimmed-median3'
                  | 'trimmed-median5'
                  | 'trimmed-median10'
                  | 'trimmed-median15'
                  | 'trimmed-median20'
                  | 'trimmed-median25'
                  | 'ema'
                  | 'extremes'
                  | 'latest'
                  | undefined
                options?:
                  | (
                      | 'jsonwrap'
                      | 'raw'
                      | 'minify'
                      | 'debug'
                      | 'nonzero'
                      | 'null2zero'
                      | 'abs'
                      | 'absolute'
                      | 'display-absolute'
                      | 'flip'
                      | 'reversed'
                      | 'min2max'
                      | 'percentage'
                      | 'seconds'
                      | 'ms'
                      | 'milliseconds'
                      | 'unaligned'
                      | 'match-ids'
                      | 'match-names'
                      | 'anomaly-bit'
                      | 'jw-anomaly-rates'
                      | 'details'
                      | 'group-by-labels'
                      | 'natural-points'
                      | 'virtual-points'
                      | 'selected-tier'
                      | 'all-dimensions'
                      | 'label-quotes'
                      | 'objectrows'
                      | 'google_json'
                      | 'minimal-stats'
                      | 'minimal'
                      | 'long-json-keys'
                      | 'long-keys'
                      | 'mcp-info'
                      | 'rfc3339'
                      | 'cardinality-limit-all'
                    )[]
                  | undefined
                alarm?: string | undefined
                label?: string | undefined
                units?: string | undefined
                label_color?:
                  | 'green'
                  | 'brightgreen'
                  | 'yellow'
                  | 'yellowgreen'
                  | 'orange'
                  | 'red'
                  | 'blue'
                  | 'grey'
                  | 'gray'
                  | 'lightgrey'
                  | 'lightgray'
                  | string
                  | undefined
                value_color?: string | undefined
                text_color_lbl?:
                  | 'green'
                  | 'brightgreen'
                  | 'yellow'
                  | 'yellowgreen'
                  | 'orange'
                  | 'red'
                  | 'blue'
                  | 'grey'
                  | 'gray'
                  | 'lightgrey'
                  | 'lightgray'
                  | string
                  | undefined
                text_color_val?:
                  | 'green'
                  | 'brightgreen'
                  | 'yellow'
                  | 'yellowgreen'
                  | 'orange'
                  | 'red'
                  | 'blue'
                  | 'grey'
                  | 'gray'
                  | 'lightgrey'
                  | 'lightgray'
                  | string
                  | undefined
                multiply?: number | undefined
                divide?: number | undefined
                scale?: number | undefined
                fixed_width_lbl?: number | undefined
                fixed_width_val?: number | undefined
                points?: number | undefined
                group_options?: string | undefined
                precision?: number | undefined
                refresh?: 'auto' | number | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 500
          }
    }
  } & {
    '/api/v3/badge.svg': {
      $get:
        | {
            input: {
              query: {
                chart?: string | undefined
                dimension?: string[] | undefined
                after?: number | undefined
                before?: number | undefined
                group?:
                  | 'min'
                  | 'max'
                  | 'avg'
                  | 'average'
                  | 'median'
                  | 'stddev'
                  | 'sum'
                  | 'incremental-sum'
                  | 'ses'
                  | 'des'
                  | 'cv'
                  | 'percentage-of-samples'
                  | 'countif'
                  | 'percentage-of-time'
                  | 'number-of-flaps'
                  | 'number-of-times'
                  | 'percentile'
                  | 'percentile25'
                  | 'percentile50'
                  | 'percentile75'
                  | 'percentile80'
                  | 'percentile90'
                  | 'percentile95'
                  | 'percentile97'
                  | 'percentile98'
                  | 'percentile99'
                  | 'trimmed-mean'
                  | 'trimmed-mean1'
                  | 'trimmed-mean2'
                  | 'trimmed-mean3'
                  | 'trimmed-mean5'
                  | 'trimmed-mean10'
                  | 'trimmed-mean15'
                  | 'trimmed-mean20'
                  | 'trimmed-mean25'
                  | 'trimmed-median'
                  | 'trimmed-median1'
                  | 'trimmed-median2'
                  | 'trimmed-median3'
                  | 'trimmed-median5'
                  | 'trimmed-median10'
                  | 'trimmed-median15'
                  | 'trimmed-median20'
                  | 'trimmed-median25'
                  | 'ema'
                  | 'extremes'
                  | 'latest'
                  | undefined
                options?:
                  | (
                      | 'jsonwrap'
                      | 'raw'
                      | 'minify'
                      | 'debug'
                      | 'nonzero'
                      | 'null2zero'
                      | 'abs'
                      | 'absolute'
                      | 'display-absolute'
                      | 'flip'
                      | 'reversed'
                      | 'min2max'
                      | 'percentage'
                      | 'seconds'
                      | 'ms'
                      | 'milliseconds'
                      | 'unaligned'
                      | 'match-ids'
                      | 'match-names'
                      | 'anomaly-bit'
                      | 'jw-anomaly-rates'
                      | 'details'
                      | 'group-by-labels'
                      | 'natural-points'
                      | 'virtual-points'
                      | 'selected-tier'
                      | 'all-dimensions'
                      | 'label-quotes'
                      | 'objectrows'
                      | 'google_json'
                      | 'minimal-stats'
                      | 'minimal'
                      | 'long-json-keys'
                      | 'long-keys'
                      | 'mcp-info'
                      | 'rfc3339'
                      | 'cardinality-limit-all'
                    )[]
                  | undefined
                alarm?: string | undefined
                label?: string | undefined
                units?: string | undefined
                label_color?:
                  | 'green'
                  | 'brightgreen'
                  | 'yellow'
                  | 'yellowgreen'
                  | 'orange'
                  | 'red'
                  | 'blue'
                  | 'grey'
                  | 'gray'
                  | 'lightgrey'
                  | 'lightgray'
                  | string
                  | undefined
                value_color?: string | undefined
                text_color_lbl?:
                  | 'green'
                  | 'brightgreen'
                  | 'yellow'
                  | 'yellowgreen'
                  | 'orange'
                  | 'red'
                  | 'blue'
                  | 'grey'
                  | 'gray'
                  | 'lightgrey'
                  | 'lightgray'
                  | string
                  | undefined
                text_color_val?:
                  | 'green'
                  | 'brightgreen'
                  | 'yellow'
                  | 'yellowgreen'
                  | 'orange'
                  | 'red'
                  | 'blue'
                  | 'grey'
                  | 'gray'
                  | 'lightgrey'
                  | 'lightgray'
                  | string
                  | undefined
                multiply?: number | undefined
                divide?: number | undefined
                scale?: number | undefined
                fixed_width_lbl?: number | undefined
                fixed_width_val?: number | undefined
                points?: number | undefined
                group_options?: string | undefined
                precision?: number | undefined
                refresh?: 'auto' | number | undefined
              }
            }
            output: File
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              query: {
                chart?: string | undefined
                dimension?: string[] | undefined
                after?: number | undefined
                before?: number | undefined
                group?:
                  | 'min'
                  | 'max'
                  | 'avg'
                  | 'average'
                  | 'median'
                  | 'stddev'
                  | 'sum'
                  | 'incremental-sum'
                  | 'ses'
                  | 'des'
                  | 'cv'
                  | 'percentage-of-samples'
                  | 'countif'
                  | 'percentage-of-time'
                  | 'number-of-flaps'
                  | 'number-of-times'
                  | 'percentile'
                  | 'percentile25'
                  | 'percentile50'
                  | 'percentile75'
                  | 'percentile80'
                  | 'percentile90'
                  | 'percentile95'
                  | 'percentile97'
                  | 'percentile98'
                  | 'percentile99'
                  | 'trimmed-mean'
                  | 'trimmed-mean1'
                  | 'trimmed-mean2'
                  | 'trimmed-mean3'
                  | 'trimmed-mean5'
                  | 'trimmed-mean10'
                  | 'trimmed-mean15'
                  | 'trimmed-mean20'
                  | 'trimmed-mean25'
                  | 'trimmed-median'
                  | 'trimmed-median1'
                  | 'trimmed-median2'
                  | 'trimmed-median3'
                  | 'trimmed-median5'
                  | 'trimmed-median10'
                  | 'trimmed-median15'
                  | 'trimmed-median20'
                  | 'trimmed-median25'
                  | 'ema'
                  | 'extremes'
                  | 'latest'
                  | undefined
                options?:
                  | (
                      | 'jsonwrap'
                      | 'raw'
                      | 'minify'
                      | 'debug'
                      | 'nonzero'
                      | 'null2zero'
                      | 'abs'
                      | 'absolute'
                      | 'display-absolute'
                      | 'flip'
                      | 'reversed'
                      | 'min2max'
                      | 'percentage'
                      | 'seconds'
                      | 'ms'
                      | 'milliseconds'
                      | 'unaligned'
                      | 'match-ids'
                      | 'match-names'
                      | 'anomaly-bit'
                      | 'jw-anomaly-rates'
                      | 'details'
                      | 'group-by-labels'
                      | 'natural-points'
                      | 'virtual-points'
                      | 'selected-tier'
                      | 'all-dimensions'
                      | 'label-quotes'
                      | 'objectrows'
                      | 'google_json'
                      | 'minimal-stats'
                      | 'minimal'
                      | 'long-json-keys'
                      | 'long-keys'
                      | 'mcp-info'
                      | 'rfc3339'
                      | 'cardinality-limit-all'
                    )[]
                  | undefined
                alarm?: string | undefined
                label?: string | undefined
                units?: string | undefined
                label_color?:
                  | 'green'
                  | 'brightgreen'
                  | 'yellow'
                  | 'yellowgreen'
                  | 'orange'
                  | 'red'
                  | 'blue'
                  | 'grey'
                  | 'gray'
                  | 'lightgrey'
                  | 'lightgray'
                  | string
                  | undefined
                value_color?: string | undefined
                text_color_lbl?:
                  | 'green'
                  | 'brightgreen'
                  | 'yellow'
                  | 'yellowgreen'
                  | 'orange'
                  | 'red'
                  | 'blue'
                  | 'grey'
                  | 'gray'
                  | 'lightgrey'
                  | 'lightgray'
                  | string
                  | undefined
                text_color_val?:
                  | 'green'
                  | 'brightgreen'
                  | 'yellow'
                  | 'yellowgreen'
                  | 'orange'
                  | 'red'
                  | 'blue'
                  | 'grey'
                  | 'gray'
                  | 'lightgrey'
                  | 'lightgray'
                  | string
                  | undefined
                multiply?: number | undefined
                divide?: number | undefined
                scale?: number | undefined
                fixed_width_lbl?: number | undefined
                fixed_width_val?: number | undefined
                points?: number | undefined
                group_options?: string | undefined
                precision?: number | undefined
                refresh?: 'auto' | number | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: {
              query: {
                chart?: string | undefined
                dimension?: string[] | undefined
                after?: number | undefined
                before?: number | undefined
                group?:
                  | 'min'
                  | 'max'
                  | 'avg'
                  | 'average'
                  | 'median'
                  | 'stddev'
                  | 'sum'
                  | 'incremental-sum'
                  | 'ses'
                  | 'des'
                  | 'cv'
                  | 'percentage-of-samples'
                  | 'countif'
                  | 'percentage-of-time'
                  | 'number-of-flaps'
                  | 'number-of-times'
                  | 'percentile'
                  | 'percentile25'
                  | 'percentile50'
                  | 'percentile75'
                  | 'percentile80'
                  | 'percentile90'
                  | 'percentile95'
                  | 'percentile97'
                  | 'percentile98'
                  | 'percentile99'
                  | 'trimmed-mean'
                  | 'trimmed-mean1'
                  | 'trimmed-mean2'
                  | 'trimmed-mean3'
                  | 'trimmed-mean5'
                  | 'trimmed-mean10'
                  | 'trimmed-mean15'
                  | 'trimmed-mean20'
                  | 'trimmed-mean25'
                  | 'trimmed-median'
                  | 'trimmed-median1'
                  | 'trimmed-median2'
                  | 'trimmed-median3'
                  | 'trimmed-median5'
                  | 'trimmed-median10'
                  | 'trimmed-median15'
                  | 'trimmed-median20'
                  | 'trimmed-median25'
                  | 'ema'
                  | 'extremes'
                  | 'latest'
                  | undefined
                options?:
                  | (
                      | 'jsonwrap'
                      | 'raw'
                      | 'minify'
                      | 'debug'
                      | 'nonzero'
                      | 'null2zero'
                      | 'abs'
                      | 'absolute'
                      | 'display-absolute'
                      | 'flip'
                      | 'reversed'
                      | 'min2max'
                      | 'percentage'
                      | 'seconds'
                      | 'ms'
                      | 'milliseconds'
                      | 'unaligned'
                      | 'match-ids'
                      | 'match-names'
                      | 'anomaly-bit'
                      | 'jw-anomaly-rates'
                      | 'details'
                      | 'group-by-labels'
                      | 'natural-points'
                      | 'virtual-points'
                      | 'selected-tier'
                      | 'all-dimensions'
                      | 'label-quotes'
                      | 'objectrows'
                      | 'google_json'
                      | 'minimal-stats'
                      | 'minimal'
                      | 'long-json-keys'
                      | 'long-keys'
                      | 'mcp-info'
                      | 'rfc3339'
                      | 'cardinality-limit-all'
                    )[]
                  | undefined
                alarm?: string | undefined
                label?: string | undefined
                units?: string | undefined
                label_color?:
                  | 'green'
                  | 'brightgreen'
                  | 'yellow'
                  | 'yellowgreen'
                  | 'orange'
                  | 'red'
                  | 'blue'
                  | 'grey'
                  | 'gray'
                  | 'lightgrey'
                  | 'lightgray'
                  | string
                  | undefined
                value_color?: string | undefined
                text_color_lbl?:
                  | 'green'
                  | 'brightgreen'
                  | 'yellow'
                  | 'yellowgreen'
                  | 'orange'
                  | 'red'
                  | 'blue'
                  | 'grey'
                  | 'gray'
                  | 'lightgrey'
                  | 'lightgray'
                  | string
                  | undefined
                text_color_val?:
                  | 'green'
                  | 'brightgreen'
                  | 'yellow'
                  | 'yellowgreen'
                  | 'orange'
                  | 'red'
                  | 'blue'
                  | 'grey'
                  | 'gray'
                  | 'lightgrey'
                  | 'lightgray'
                  | string
                  | undefined
                multiply?: number | undefined
                divide?: number | undefined
                scale?: number | undefined
                fixed_width_lbl?: number | undefined
                fixed_width_val?: number | undefined
                points?: number | undefined
                group_options?: string | undefined
                precision?: number | undefined
                refresh?: 'auto' | number | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 404
          }
        | {
            input: {
              query: {
                chart?: string | undefined
                dimension?: string[] | undefined
                after?: number | undefined
                before?: number | undefined
                group?:
                  | 'min'
                  | 'max'
                  | 'avg'
                  | 'average'
                  | 'median'
                  | 'stddev'
                  | 'sum'
                  | 'incremental-sum'
                  | 'ses'
                  | 'des'
                  | 'cv'
                  | 'percentage-of-samples'
                  | 'countif'
                  | 'percentage-of-time'
                  | 'number-of-flaps'
                  | 'number-of-times'
                  | 'percentile'
                  | 'percentile25'
                  | 'percentile50'
                  | 'percentile75'
                  | 'percentile80'
                  | 'percentile90'
                  | 'percentile95'
                  | 'percentile97'
                  | 'percentile98'
                  | 'percentile99'
                  | 'trimmed-mean'
                  | 'trimmed-mean1'
                  | 'trimmed-mean2'
                  | 'trimmed-mean3'
                  | 'trimmed-mean5'
                  | 'trimmed-mean10'
                  | 'trimmed-mean15'
                  | 'trimmed-mean20'
                  | 'trimmed-mean25'
                  | 'trimmed-median'
                  | 'trimmed-median1'
                  | 'trimmed-median2'
                  | 'trimmed-median3'
                  | 'trimmed-median5'
                  | 'trimmed-median10'
                  | 'trimmed-median15'
                  | 'trimmed-median20'
                  | 'trimmed-median25'
                  | 'ema'
                  | 'extremes'
                  | 'latest'
                  | undefined
                options?:
                  | (
                      | 'jsonwrap'
                      | 'raw'
                      | 'minify'
                      | 'debug'
                      | 'nonzero'
                      | 'null2zero'
                      | 'abs'
                      | 'absolute'
                      | 'display-absolute'
                      | 'flip'
                      | 'reversed'
                      | 'min2max'
                      | 'percentage'
                      | 'seconds'
                      | 'ms'
                      | 'milliseconds'
                      | 'unaligned'
                      | 'match-ids'
                      | 'match-names'
                      | 'anomaly-bit'
                      | 'jw-anomaly-rates'
                      | 'details'
                      | 'group-by-labels'
                      | 'natural-points'
                      | 'virtual-points'
                      | 'selected-tier'
                      | 'all-dimensions'
                      | 'label-quotes'
                      | 'objectrows'
                      | 'google_json'
                      | 'minimal-stats'
                      | 'minimal'
                      | 'long-json-keys'
                      | 'long-keys'
                      | 'mcp-info'
                      | 'rfc3339'
                      | 'cardinality-limit-all'
                    )[]
                  | undefined
                alarm?: string | undefined
                label?: string | undefined
                units?: string | undefined
                label_color?:
                  | 'green'
                  | 'brightgreen'
                  | 'yellow'
                  | 'yellowgreen'
                  | 'orange'
                  | 'red'
                  | 'blue'
                  | 'grey'
                  | 'gray'
                  | 'lightgrey'
                  | 'lightgray'
                  | string
                  | undefined
                value_color?: string | undefined
                text_color_lbl?:
                  | 'green'
                  | 'brightgreen'
                  | 'yellow'
                  | 'yellowgreen'
                  | 'orange'
                  | 'red'
                  | 'blue'
                  | 'grey'
                  | 'gray'
                  | 'lightgrey'
                  | 'lightgray'
                  | string
                  | undefined
                text_color_val?:
                  | 'green'
                  | 'brightgreen'
                  | 'yellow'
                  | 'yellowgreen'
                  | 'orange'
                  | 'red'
                  | 'blue'
                  | 'grey'
                  | 'gray'
                  | 'lightgrey'
                  | 'lightgray'
                  | string
                  | undefined
                multiply?: number | undefined
                divide?: number | undefined
                scale?: number | undefined
                fixed_width_lbl?: number | undefined
                fixed_width_val?: number | undefined
                points?: number | undefined
                group_options?: string | undefined
                precision?: number | undefined
                refresh?: 'auto' | number | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 500
          }
    }
  } & {
    '/api/v3/allmetrics': {
      $get:
        | {
            input: {
              query: {
                format: 'shell' | 'prometheus' | 'prometheus_all_hosts' | 'json'
                filter?: string | undefined
                variables?: 'yes' | 'no' | '1' | '0' | 'true' | 'false' | undefined
                timestamps?: 'yes' | 'no' | '1' | '0' | 'true' | 'false' | undefined
                names?: 'yes' | 'no' | '1' | '0' | 'true' | 'false' | undefined
                oldunits?: 'yes' | 'no' | '1' | '0' | 'true' | 'false' | undefined
                hideunits?: 'yes' | 'no' | '1' | '0' | 'true' | 'false' | undefined
                server?: string | undefined
                prefix?: string | undefined
                data?: 'as-collected' | 'average' | 'sum' | undefined
              }
            }
            output: string
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              query: {
                format: 'shell' | 'prometheus' | 'prometheus_all_hosts' | 'json'
                filter?: string | undefined
                variables?: 'yes' | 'no' | '1' | '0' | 'true' | 'false' | undefined
                timestamps?: 'yes' | 'no' | '1' | '0' | 'true' | 'false' | undefined
                names?: 'yes' | 'no' | '1' | '0' | 'true' | 'false' | undefined
                oldunits?: 'yes' | 'no' | '1' | '0' | 'true' | 'false' | undefined
                hideunits?: 'yes' | 'no' | '1' | '0' | 'true' | 'false' | undefined
                server?: string | undefined
                prefix?: string | undefined
                data?: 'as-collected' | 'average' | 'sum' | undefined
              }
            }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                format: 'shell' | 'prometheus' | 'prometheus_all_hosts' | 'json'
                filter?: string | undefined
                variables?: 'yes' | 'no' | '1' | '0' | 'true' | 'false' | undefined
                timestamps?: 'yes' | 'no' | '1' | '0' | 'true' | 'false' | undefined
                names?: 'yes' | 'no' | '1' | '0' | 'true' | 'false' | undefined
                oldunits?: 'yes' | 'no' | '1' | '0' | 'true' | 'false' | undefined
                hideunits?: 'yes' | 'no' | '1' | '0' | 'true' | 'false' | undefined
                server?: string | undefined
                prefix?: string | undefined
                data?: 'as-collected' | 'average' | 'sum' | undefined
              }
            }
            output: string
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              query: {
                format: 'shell' | 'prometheus' | 'prometheus_all_hosts' | 'json'
                filter?: string | undefined
                variables?: 'yes' | 'no' | '1' | '0' | 'true' | 'false' | undefined
                timestamps?: 'yes' | 'no' | '1' | '0' | 'true' | 'false' | undefined
                names?: 'yes' | 'no' | '1' | '0' | 'true' | 'false' | undefined
                oldunits?: 'yes' | 'no' | '1' | '0' | 'true' | 'false' | undefined
                hideunits?: 'yes' | 'no' | '1' | '0' | 'true' | 'false' | undefined
                server?: string | undefined
                prefix?: string | undefined
                data?: 'as-collected' | 'average' | 'sum' | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: {
              query: {
                format: 'shell' | 'prometheus' | 'prometheus_all_hosts' | 'json'
                filter?: string | undefined
                variables?: 'yes' | 'no' | '1' | '0' | 'true' | 'false' | undefined
                timestamps?: 'yes' | 'no' | '1' | '0' | 'true' | 'false' | undefined
                names?: 'yes' | 'no' | '1' | '0' | 'true' | 'false' | undefined
                oldunits?: 'yes' | 'no' | '1' | '0' | 'true' | 'false' | undefined
                hideunits?: 'yes' | 'no' | '1' | '0' | 'true' | 'false' | undefined
                server?: string | undefined
                prefix?: string | undefined
                data?: 'as-collected' | 'average' | 'sum' | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 500
          }
    }
  } & {
    '/api/v3/alerts': {
      $get:
        | {
            input: {
              query: {
                scope_nodes?: string | undefined
                scope_contexts?: string | undefined
                nodes?: string | undefined
                contexts?: string | undefined
                alert?: string | undefined
                status?: string | undefined
                options?: string | undefined
                after?: number | undefined
                before?: number | undefined
                timeout?: bigint | undefined
                cardinality?: number | undefined
              }
            }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                scope_nodes?: string | undefined
                scope_contexts?: string | undefined
                nodes?: string | undefined
                contexts?: string | undefined
                alert?: string | undefined
                status?: string | undefined
                options?: string | undefined
                after?: number | undefined
                before?: number | undefined
                timeout?: bigint | undefined
                cardinality?: number | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: {
              query: {
                scope_nodes?: string | undefined
                scope_contexts?: string | undefined
                nodes?: string | undefined
                contexts?: string | undefined
                alert?: string | undefined
                status?: string | undefined
                options?: string | undefined
                after?: number | undefined
                before?: number | undefined
                timeout?: bigint | undefined
                cardinality?: number | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 500
          }
    }
  } & {
    '/api/v3/alert_transitions': {
      $get:
        | {
            input: {
              query: {
                scope_nodes?: string | undefined
                nodes?: string | undefined
                scope_contexts?: string | undefined
                contexts?: string | undefined
                alert?: string | undefined
                transition?: string | undefined
                last: number
                anchor_gi?: bigint | undefined
                f_status?: string | undefined
                f_type?: string | undefined
                f_role?: string | undefined
                f_class?: string | undefined
                f_component?: string | undefined
                f_node?: string | undefined
                f_alert?: string | undefined
                f_instance?: string | undefined
                f_context?: string | undefined
                after?: number | undefined
                before?: number | undefined
                timeout?: bigint | undefined
                cardinality?: number | undefined
              }
            }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                scope_nodes?: string | undefined
                nodes?: string | undefined
                scope_contexts?: string | undefined
                contexts?: string | undefined
                alert?: string | undefined
                transition?: string | undefined
                last: number
                anchor_gi?: bigint | undefined
                f_status?: string | undefined
                f_type?: string | undefined
                f_role?: string | undefined
                f_class?: string | undefined
                f_component?: string | undefined
                f_node?: string | undefined
                f_alert?: string | undefined
                f_instance?: string | undefined
                f_context?: string | undefined
                after?: number | undefined
                before?: number | undefined
                timeout?: bigint | undefined
                cardinality?: number | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: {
              query: {
                scope_nodes?: string | undefined
                nodes?: string | undefined
                scope_contexts?: string | undefined
                contexts?: string | undefined
                alert?: string | undefined
                transition?: string | undefined
                last: number
                anchor_gi?: bigint | undefined
                f_status?: string | undefined
                f_type?: string | undefined
                f_role?: string | undefined
                f_class?: string | undefined
                f_component?: string | undefined
                f_node?: string | undefined
                f_alert?: string | undefined
                f_instance?: string | undefined
                f_context?: string | undefined
                after?: number | undefined
                before?: number | undefined
                timeout?: bigint | undefined
                cardinality?: number | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 500
          }
    }
  } & {
    '/api/v3/alert_config': {
      $get:
        | {
            input: { query: { config: string } }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { config: string } }
            output: string
            outputFormat: 'text'
            status: 200
          }
        | { input: { query: { config: string } }; output: {}; outputFormat: string; status: 400 }
        | { input: { query: { config: string } }; output: {}; outputFormat: string; status: 404 }
        | { input: { query: { config: string } }; output: {}; outputFormat: string; status: 500 }
    }
  } & {
    '/api/v3/variable': {
      $get:
        | {
            input: { query: { chart: string; variable: string } }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { chart: string; variable: string } }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { query: { chart: string; variable: string } }
            output: {}
            outputFormat: string
            status: 404
          }
        | {
            input: { query: { chart: string; variable: string } }
            output: {}
            outputFormat: string
            status: 500
          }
    }
  } & {
    '/api/v3/info': {
      $get:
        | {
            input: {
              query: {
                scope_nodes?: string | undefined
                nodes?: string | undefined
                options?: string | undefined
                after?: number | undefined
                before?: number | undefined
                timeout?: bigint | undefined
                cardinality?: number | undefined
              }
            }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                scope_nodes?: string | undefined
                nodes?: string | undefined
                options?: string | undefined
                after?: number | undefined
                before?: number | undefined
                timeout?: bigint | undefined
                cardinality?: number | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: {
              query: {
                scope_nodes?: string | undefined
                nodes?: string | undefined
                options?: string | undefined
                after?: number | undefined
                before?: number | undefined
                timeout?: bigint | undefined
                cardinality?: number | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 500
          }
    }
  } & {
    '/api/v3/node_instances': {
      $get:
        | {
            input: {
              query: {
                scope_nodes?: string | undefined
                nodes?: string | undefined
                options?: string | undefined
                after?: number | undefined
                before?: number | undefined
                timeout?: bigint | undefined
                cardinality?: number | undefined
              }
            }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                scope_nodes?: string | undefined
                nodes?: string | undefined
                options?: string | undefined
                after?: number | undefined
                before?: number | undefined
                timeout?: bigint | undefined
                cardinality?: number | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: {
              query: {
                scope_nodes?: string | undefined
                nodes?: string | undefined
                options?: string | undefined
                after?: number | undefined
                before?: number | undefined
                timeout?: bigint | undefined
                cardinality?: number | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 500
          }
    }
  } & {
    '/api/v3/stream_path': {
      $get:
        | {
            input: {
              query: {
                scope_nodes?: string | undefined
                nodes?: string | undefined
                options?: string | undefined
                timeout?: number | undefined
                cardinality?: number | undefined
              }
            }
            output: {
              nodes?:
                | {
                    hostname?: string | undefined
                    machine_guid?: string | undefined
                    parent?: string | undefined
                    parent_guid?: string | undefined
                    streaming_status?: 'live' | 'stale' | 'offline' | undefined
                    path?: string[] | undefined
                  }[]
                | undefined
              omitted?: number | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                scope_nodes?: string | undefined
                nodes?: string | undefined
                options?: string | undefined
                timeout?: number | undefined
                cardinality?: number | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: {
              query: {
                scope_nodes?: string | undefined
                nodes?: string | undefined
                options?: string | undefined
                timeout?: number | undefined
                cardinality?: number | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 500
          }
        | {
            input: {
              query: {
                scope_nodes?: string | undefined
                nodes?: string | undefined
                options?: string | undefined
                timeout?: number | undefined
                cardinality?: number | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 504
          }
    }
  } & {
    '/api/v3/versions': {
      $get:
        | {
            input: {
              query: {
                scope_nodes?: string | undefined
                nodes?: string | undefined
                options?: string | undefined
                timeout?: number | undefined
                cardinality?: number | undefined
              }
            }
            output: {
              versions?:
                | {
                    hostname?: string | undefined
                    machine_guid?: string | undefined
                    version?: string | undefined
                    build_info?: string | undefined
                    commit_hash?: string | undefined
                    protocol_version?: number | undefined
                    features?: string[] | undefined
                  }[]
                | undefined
              omitted?: number | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                scope_nodes?: string | undefined
                nodes?: string | undefined
                options?: string | undefined
                timeout?: number | undefined
                cardinality?: number | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: {
              query: {
                scope_nodes?: string | undefined
                nodes?: string | undefined
                options?: string | undefined
                timeout?: number | undefined
                cardinality?: number | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 500
          }
        | {
            input: {
              query: {
                scope_nodes?: string | undefined
                nodes?: string | undefined
                options?: string | undefined
                timeout?: number | undefined
                cardinality?: number | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 504
          }
    }
  } & {
    '/api/v3/progress': {
      $get:
        | {
            input: { query: { transaction: string } }
            output: {
              transaction?: string | undefined
              status?: 'running' | 'completed' | 'failed' | 'cancelled' | undefined
              percentage?: number | undefined
              message?: string | undefined
              done?: number | undefined
              all?: number | undefined
              eta_seconds?: number | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { transaction: string } }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { query: { transaction: string } }
            output: {}
            outputFormat: string
            status: 404
          }
        | {
            input: { query: { transaction: string } }
            output: {}
            outputFormat: string
            status: 500
          }
    }
  } & {
    '/api/v3/function': {
      $get:
        | {
            input: { query: { function: string; timeout?: number | undefined } }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { function: string; timeout?: number | undefined } }
            output: string
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { query: { function: string; timeout?: number | undefined } }
            output: { transaction?: string | undefined; message?: string | undefined }
            outputFormat: 'json'
            status: 202
          }
        | {
            input: { query: { function: string; timeout?: number | undefined } }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { query: { function: string; timeout?: number | undefined } }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { query: { function: string; timeout?: number | undefined } }
            output: {}
            outputFormat: string
            status: 404
          }
        | {
            input: { query: { function: string; timeout?: number | undefined } }
            output: {}
            outputFormat: string
            status: 500
          }
        | {
            input: { query: { function: string; timeout?: number | undefined } }
            output: {}
            outputFormat: string
            status: 503
          }
        | {
            input: { query: { function: string; timeout?: number | undefined } }
            output: {}
            outputFormat: string
            status: 504
          }
      $post:
        | {
            input: { query: { function: string; timeout?: number | undefined } } & {
              json: { [x: string]: unknown } | string
            }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { function: string; timeout?: number | undefined } } & {
              json: { [x: string]: unknown } | string
            }
            output: string
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { query: { function: string; timeout?: number | undefined } } & {
              json: { [x: string]: unknown } | string
            }
            output: {}
            outputFormat: string
            status: 202
          }
        | {
            input: { query: { function: string; timeout?: number | undefined } } & {
              json: { [x: string]: unknown } | string
            }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { query: { function: string; timeout?: number | undefined } } & {
              json: { [x: string]: unknown } | string
            }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { query: { function: string; timeout?: number | undefined } } & {
              json: { [x: string]: unknown } | string
            }
            output: {}
            outputFormat: string
            status: 404
          }
        | {
            input: { query: { function: string; timeout?: number | undefined } } & {
              json: { [x: string]: unknown } | string
            }
            output: {}
            outputFormat: string
            status: 500
          }
        | {
            input: { query: { function: string; timeout?: number | undefined } } & {
              json: { [x: string]: unknown } | string
            }
            output: {}
            outputFormat: string
            status: 503
          }
        | {
            input: { query: { function: string; timeout?: number | undefined } } & {
              json: { [x: string]: unknown } | string
            }
            output: {}
            outputFormat: string
            status: 504
          }
    }
  } & {
    '/api/v3/functions': {
      $get:
        | {
            input: {
              query: {
                scope_nodes?: string | undefined
                nodes?: string | undefined
                options?: string | undefined
                timeout?: number | undefined
                cardinality?: number | undefined
              }
            }
            output: {
              nodes?:
                | {
                    hostname?: string | undefined
                    machine_guid?: string | undefined
                    functions?:
                      | {
                          name?: string | undefined
                          plugin?: string | undefined
                          description?: string | undefined
                          parameters?:
                            | {
                                name?: string | undefined
                                required?: boolean | undefined
                                description?: string | undefined
                              }[]
                            | undefined
                        }[]
                      | undefined
                  }[]
                | undefined
              omitted?: number | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                scope_nodes?: string | undefined
                nodes?: string | undefined
                options?: string | undefined
                timeout?: number | undefined
                cardinality?: number | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: {
              query: {
                scope_nodes?: string | undefined
                nodes?: string | undefined
                options?: string | undefined
                timeout?: number | undefined
                cardinality?: number | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 500
          }
        | {
            input: {
              query: {
                scope_nodes?: string | undefined
                nodes?: string | undefined
                options?: string | undefined
                timeout?: number | undefined
                cardinality?: number | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 504
          }
    }
  } & {
    '/api/v3/config': {
      $get:
        | {
            input: {
              query: {
                action?:
                  | 'tree'
                  | 'get'
                  | 'schema'
                  | 'update'
                  | 'add'
                  | 'remove'
                  | 'enable'
                  | 'disable'
                  | 'test'
                  | 'restart'
                  | 'userconfig'
                  | undefined
                path?: string | undefined
                id?: string | undefined
                name?: string | undefined
                timeout?: number | undefined
              }
            }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                action?:
                  | 'tree'
                  | 'get'
                  | 'schema'
                  | 'update'
                  | 'add'
                  | 'remove'
                  | 'enable'
                  | 'disable'
                  | 'test'
                  | 'restart'
                  | 'userconfig'
                  | undefined
                path?: string | undefined
                id?: string | undefined
                name?: string | undefined
                timeout?: number | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: {
              query: {
                action?:
                  | 'tree'
                  | 'get'
                  | 'schema'
                  | 'update'
                  | 'add'
                  | 'remove'
                  | 'enable'
                  | 'disable'
                  | 'test'
                  | 'restart'
                  | 'userconfig'
                  | undefined
                path?: string | undefined
                id?: string | undefined
                name?: string | undefined
                timeout?: number | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: {
              query: {
                action?:
                  | 'tree'
                  | 'get'
                  | 'schema'
                  | 'update'
                  | 'add'
                  | 'remove'
                  | 'enable'
                  | 'disable'
                  | 'test'
                  | 'restart'
                  | 'userconfig'
                  | undefined
                path?: string | undefined
                id?: string | undefined
                name?: string | undefined
                timeout?: number | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 404
          }
        | {
            input: {
              query: {
                action?:
                  | 'tree'
                  | 'get'
                  | 'schema'
                  | 'update'
                  | 'add'
                  | 'remove'
                  | 'enable'
                  | 'disable'
                  | 'test'
                  | 'restart'
                  | 'userconfig'
                  | undefined
                path?: string | undefined
                id?: string | undefined
                name?: string | undefined
                timeout?: number | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 500
          }
        | {
            input: {
              query: {
                action?:
                  | 'tree'
                  | 'get'
                  | 'schema'
                  | 'update'
                  | 'add'
                  | 'remove'
                  | 'enable'
                  | 'disable'
                  | 'test'
                  | 'restart'
                  | 'userconfig'
                  | undefined
                path?: string | undefined
                id?: string | undefined
                name?: string | undefined
                timeout?: number | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 504
          }
      $post:
        | {
            input: {
              query: {
                action?:
                  | 'tree'
                  | 'get'
                  | 'schema'
                  | 'update'
                  | 'add'
                  | 'remove'
                  | 'enable'
                  | 'disable'
                  | 'test'
                  | 'restart'
                  | 'userconfig'
                  | undefined
                path?: string | undefined
                id?: string | undefined
                name?: string | undefined
                timeout?: number | undefined
              }
            } & { json: { [x: string]: unknown } }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                action?:
                  | 'tree'
                  | 'get'
                  | 'schema'
                  | 'update'
                  | 'add'
                  | 'remove'
                  | 'enable'
                  | 'disable'
                  | 'test'
                  | 'restart'
                  | 'userconfig'
                  | undefined
                path?: string | undefined
                id?: string | undefined
                name?: string | undefined
                timeout?: number | undefined
              }
            } & { json: { [x: string]: unknown } }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: {
              query: {
                action?:
                  | 'tree'
                  | 'get'
                  | 'schema'
                  | 'update'
                  | 'add'
                  | 'remove'
                  | 'enable'
                  | 'disable'
                  | 'test'
                  | 'restart'
                  | 'userconfig'
                  | undefined
                path?: string | undefined
                id?: string | undefined
                name?: string | undefined
                timeout?: number | undefined
              }
            } & { json: { [x: string]: unknown } }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: {
              query: {
                action?:
                  | 'tree'
                  | 'get'
                  | 'schema'
                  | 'update'
                  | 'add'
                  | 'remove'
                  | 'enable'
                  | 'disable'
                  | 'test'
                  | 'restart'
                  | 'userconfig'
                  | undefined
                path?: string | undefined
                id?: string | undefined
                name?: string | undefined
                timeout?: number | undefined
              }
            } & { json: { [x: string]: unknown } }
            output: {}
            outputFormat: string
            status: 404
          }
        | {
            input: {
              query: {
                action?:
                  | 'tree'
                  | 'get'
                  | 'schema'
                  | 'update'
                  | 'add'
                  | 'remove'
                  | 'enable'
                  | 'disable'
                  | 'test'
                  | 'restart'
                  | 'userconfig'
                  | undefined
                path?: string | undefined
                id?: string | undefined
                name?: string | undefined
                timeout?: number | undefined
              }
            } & { json: { [x: string]: unknown } }
            output: {}
            outputFormat: string
            status: 500
          }
        | {
            input: {
              query: {
                action?:
                  | 'tree'
                  | 'get'
                  | 'schema'
                  | 'update'
                  | 'add'
                  | 'remove'
                  | 'enable'
                  | 'disable'
                  | 'test'
                  | 'restart'
                  | 'userconfig'
                  | undefined
                path?: string | undefined
                id?: string | undefined
                name?: string | undefined
                timeout?: number | undefined
              }
            } & { json: { [x: string]: unknown } }
            output: {}
            outputFormat: string
            status: 504
          }
    }
  } & {
    '/api/v3/settings': {
      $get:
        | {
            input: { query: { file?: 'default' | '' | undefined } }
            output: { version: bigint }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { file?: 'default' | '' | undefined } }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { query: { file?: 'default' | '' | undefined } }
            output: {}
            outputFormat: string
            status: 500
          }
      $put:
        | {
            input: { query: { file?: 'default' | '' | undefined } } & { json: { version: bigint } }
            output: { status?: number | undefined; errorMessage?: string | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { file?: 'default' | '' | undefined } } & { json: { version: bigint } }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { query: { file?: 'default' | '' | undefined } } & { json: { version: bigint } }
            output: { status?: number | undefined; errorMessage?: string | undefined }
            outputFormat: 'json'
            status: 409
          }
        | {
            input: { query: { file?: 'default' | '' | undefined } } & { json: { version: bigint } }
            output: {}
            outputFormat: string
            status: 413
          }
        | {
            input: { query: { file?: 'default' | '' | undefined } } & { json: { version: bigint } }
            output: {}
            outputFormat: string
            status: 500
          }
    }
  } & {
    '/api/v3/stream_info': {
      $get:
        | {
            input: { query: { machine_guid?: string | undefined } }
            output: {
              machine_guid?: string | undefined
              hostname?: string | undefined
              streaming_mode?: 'sender' | 'receiver' | 'both' | 'none' | undefined
              sender?:
                | {
                    connected?: boolean | undefined
                    parent_hostname?: string | undefined
                    uptime_seconds?: number | undefined
                    reconnects?: number | undefined
                    bytes_sent?: number | undefined
                    bytes_compressed?: number | undefined
                    compression_ratio?: number | undefined
                    buffer_used_bytes?: number | undefined
                    buffer_max_bytes?: number | undefined
                    buffer_used_percentage?: number | undefined
                    drops?: number | undefined
                  }
                | undefined
              receiver?:
                | {
                    children?:
                      | {
                          machine_guid?: string | undefined
                          hostname?: string | undefined
                          connected?: boolean | undefined
                          uptime_seconds?: number | undefined
                          bytes_received?: number | undefined
                          replication_lag_seconds?: number | undefined
                        }[]
                      | undefined
                  }
                | undefined
              protocol_version?: number | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { machine_guid?: string | undefined } }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { query: { machine_guid?: string | undefined } }
            output: {}
            outputFormat: string
            status: 404
          }
        | {
            input: { query: { machine_guid?: string | undefined } }
            output: {}
            outputFormat: string
            status: 500
          }
    }
  } & {
    '/api/v3/rtc_offer': {
      $post:
        | {
            input: { json: string }
            output: { sdp?: string | undefined; type?: 'answer' | undefined }
            outputFormat: 'json'
            status: 200
          }
        | { input: { json: string }; output: {}; outputFormat: string; status: 400 }
        | { input: { json: string }; output: {}; outputFormat: string; status: 500 }
    }
  } & {
    '/api/v3/claim': {
      $get:
        | {
            input: {
              query: {
                key?: string | undefined
                token?: string | undefined
                url?: string | undefined
                rooms?: string | undefined
              }
            }
            output: ClaimResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                key?: string | undefined
                token?: string | undefined
                url?: string | undefined
                rooms?: string | undefined
              }
            }
            output: ClaimResponse
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/api/v3/bearer_protection': {
      $get:
        | {
            input: {
              query: {
                bearer_protection?: BearerProtectionValue | undefined
                claim_id: string
                machine_guid: string
                node_id: string
              }
            }
            output: { bearer_protection?: boolean | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                bearer_protection?: BearerProtectionValue | undefined
                claim_id: string
                machine_guid: string
                node_id: string
              }
            }
            output: {}
            outputFormat: string
            status: 400
          }
    }
  } & {
    '/api/v3/bearer_get_token': {
      $get:
        | {
            input: { query: { claim_id: string; machine_guid: string; node_id: string } }
            output: {
              status?: number | undefined
              mg?: string | undefined
              bearer_protection?: boolean | undefined
              token?: string | undefined
              expiration?: bigint | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { claim_id: string; machine_guid: string; node_id: string } }
            output: {}
            outputFormat: string
            status: 400
          }
    }
  } & {
    '/api/v3/me': {
      $get: {
        input: {}
        output: {
          auth?: 'cloud' | 'bearer' | 'god' | 'none' | undefined
          cloud_account_id?: string | undefined
          client_name?: string | undefined
          access?:
            | (
                | 'registry'
                | 'dashboard'
                | 'data'
                | 'functions'
                | 'badges'
                | 'mgmt'
                | 'stream'
                | 'SSL_FORCE'
                | 'signed_id'
                | 'sensitive_data'
              )[]
            | undefined
          user_role?:
            | 'admin'
            | 'manager'
            | 'troubleshooter'
            | 'observer'
            | 'member'
            | 'billing'
            | 'none'
            | undefined
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/v2/weights': {
      $get:
        | {
            input: {
              query: {
                method?: 'ks2' | 'volume' | 'anomaly-rate' | 'value' | undefined
                scope_nodes?: string | undefined
                scope_contexts?: string | undefined
                scope_instances?: string | undefined
                scope_labels?: string | undefined
                scope_dimensions?: string | undefined
                nodes?: string | undefined
                contexts?: string | undefined
                instances?: string | undefined
                labels?: string | undefined
                alerts?: string | undefined
                dimensions?: string | undefined
                baseline_after?: number | undefined
                baseline_before?: number | undefined
                after?: number | undefined
                before?: number | undefined
                tier?: number | undefined
                points?: number | undefined
                timeout?: number | undefined
                options?:
                  | (
                      | 'jsonwrap'
                      | 'raw'
                      | 'minify'
                      | 'debug'
                      | 'nonzero'
                      | 'null2zero'
                      | 'abs'
                      | 'absolute'
                      | 'display-absolute'
                      | 'flip'
                      | 'reversed'
                      | 'min2max'
                      | 'percentage'
                      | 'seconds'
                      | 'ms'
                      | 'milliseconds'
                      | 'unaligned'
                      | 'match-ids'
                      | 'match-names'
                      | 'anomaly-bit'
                      | 'jw-anomaly-rates'
                      | 'details'
                      | 'group-by-labels'
                      | 'natural-points'
                      | 'virtual-points'
                      | 'selected-tier'
                      | 'all-dimensions'
                      | 'label-quotes'
                      | 'objectrows'
                      | 'google_json'
                      | 'minimal-stats'
                      | 'minimal'
                      | 'long-json-keys'
                      | 'long-keys'
                      | 'mcp-info'
                      | 'rfc3339'
                      | 'cardinality-limit-all'
                    )[]
                  | undefined
                time_group?:
                  | 'min'
                  | 'max'
                  | 'avg'
                  | 'average'
                  | 'median'
                  | 'stddev'
                  | 'sum'
                  | 'incremental-sum'
                  | 'ses'
                  | 'des'
                  | 'cv'
                  | 'percentage-of-samples'
                  | 'countif'
                  | 'percentage-of-time'
                  | 'number-of-flaps'
                  | 'number-of-times'
                  | 'percentile'
                  | 'percentile25'
                  | 'percentile50'
                  | 'percentile75'
                  | 'percentile80'
                  | 'percentile90'
                  | 'percentile95'
                  | 'percentile97'
                  | 'percentile98'
                  | 'percentile99'
                  | 'trimmed-mean'
                  | 'trimmed-mean1'
                  | 'trimmed-mean2'
                  | 'trimmed-mean3'
                  | 'trimmed-mean5'
                  | 'trimmed-mean10'
                  | 'trimmed-mean15'
                  | 'trimmed-mean20'
                  | 'trimmed-mean25'
                  | 'trimmed-median'
                  | 'trimmed-median1'
                  | 'trimmed-median2'
                  | 'trimmed-median3'
                  | 'trimmed-median5'
                  | 'trimmed-median10'
                  | 'trimmed-median15'
                  | 'trimmed-median20'
                  | 'trimmed-median25'
                  | 'ema'
                  | 'extremes'
                  | 'latest'
                  | undefined
                time_group_options?: string | undefined
                limit?: number | undefined
                cardinality_limit?: number | undefined
              }
            }
            output: Weights2
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                method?: 'ks2' | 'volume' | 'anomaly-rate' | 'value' | undefined
                scope_nodes?: string | undefined
                scope_contexts?: string | undefined
                scope_instances?: string | undefined
                scope_labels?: string | undefined
                scope_dimensions?: string | undefined
                nodes?: string | undefined
                contexts?: string | undefined
                instances?: string | undefined
                labels?: string | undefined
                alerts?: string | undefined
                dimensions?: string | undefined
                baseline_after?: number | undefined
                baseline_before?: number | undefined
                after?: number | undefined
                before?: number | undefined
                tier?: number | undefined
                points?: number | undefined
                timeout?: number | undefined
                options?:
                  | (
                      | 'jsonwrap'
                      | 'raw'
                      | 'minify'
                      | 'debug'
                      | 'nonzero'
                      | 'null2zero'
                      | 'abs'
                      | 'absolute'
                      | 'display-absolute'
                      | 'flip'
                      | 'reversed'
                      | 'min2max'
                      | 'percentage'
                      | 'seconds'
                      | 'ms'
                      | 'milliseconds'
                      | 'unaligned'
                      | 'match-ids'
                      | 'match-names'
                      | 'anomaly-bit'
                      | 'jw-anomaly-rates'
                      | 'details'
                      | 'group-by-labels'
                      | 'natural-points'
                      | 'virtual-points'
                      | 'selected-tier'
                      | 'all-dimensions'
                      | 'label-quotes'
                      | 'objectrows'
                      | 'google_json'
                      | 'minimal-stats'
                      | 'minimal'
                      | 'long-json-keys'
                      | 'long-keys'
                      | 'mcp-info'
                      | 'rfc3339'
                      | 'cardinality-limit-all'
                    )[]
                  | undefined
                time_group?:
                  | 'min'
                  | 'max'
                  | 'avg'
                  | 'average'
                  | 'median'
                  | 'stddev'
                  | 'sum'
                  | 'incremental-sum'
                  | 'ses'
                  | 'des'
                  | 'cv'
                  | 'percentage-of-samples'
                  | 'countif'
                  | 'percentage-of-time'
                  | 'number-of-flaps'
                  | 'number-of-times'
                  | 'percentile'
                  | 'percentile25'
                  | 'percentile50'
                  | 'percentile75'
                  | 'percentile80'
                  | 'percentile90'
                  | 'percentile95'
                  | 'percentile97'
                  | 'percentile98'
                  | 'percentile99'
                  | 'trimmed-mean'
                  | 'trimmed-mean1'
                  | 'trimmed-mean2'
                  | 'trimmed-mean3'
                  | 'trimmed-mean5'
                  | 'trimmed-mean10'
                  | 'trimmed-mean15'
                  | 'trimmed-mean20'
                  | 'trimmed-mean25'
                  | 'trimmed-median'
                  | 'trimmed-median1'
                  | 'trimmed-median2'
                  | 'trimmed-median3'
                  | 'trimmed-median5'
                  | 'trimmed-median10'
                  | 'trimmed-median15'
                  | 'trimmed-median20'
                  | 'trimmed-median25'
                  | 'ema'
                  | 'extremes'
                  | 'latest'
                  | undefined
                time_group_options?: string | undefined
                limit?: number | undefined
                cardinality_limit?: number | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: {
              query: {
                method?: 'ks2' | 'volume' | 'anomaly-rate' | 'value' | undefined
                scope_nodes?: string | undefined
                scope_contexts?: string | undefined
                scope_instances?: string | undefined
                scope_labels?: string | undefined
                scope_dimensions?: string | undefined
                nodes?: string | undefined
                contexts?: string | undefined
                instances?: string | undefined
                labels?: string | undefined
                alerts?: string | undefined
                dimensions?: string | undefined
                baseline_after?: number | undefined
                baseline_before?: number | undefined
                after?: number | undefined
                before?: number | undefined
                tier?: number | undefined
                points?: number | undefined
                timeout?: number | undefined
                options?:
                  | (
                      | 'jsonwrap'
                      | 'raw'
                      | 'minify'
                      | 'debug'
                      | 'nonzero'
                      | 'null2zero'
                      | 'abs'
                      | 'absolute'
                      | 'display-absolute'
                      | 'flip'
                      | 'reversed'
                      | 'min2max'
                      | 'percentage'
                      | 'seconds'
                      | 'ms'
                      | 'milliseconds'
                      | 'unaligned'
                      | 'match-ids'
                      | 'match-names'
                      | 'anomaly-bit'
                      | 'jw-anomaly-rates'
                      | 'details'
                      | 'group-by-labels'
                      | 'natural-points'
                      | 'virtual-points'
                      | 'selected-tier'
                      | 'all-dimensions'
                      | 'label-quotes'
                      | 'objectrows'
                      | 'google_json'
                      | 'minimal-stats'
                      | 'minimal'
                      | 'long-json-keys'
                      | 'long-keys'
                      | 'mcp-info'
                      | 'rfc3339'
                      | 'cardinality-limit-all'
                    )[]
                  | undefined
                time_group?:
                  | 'min'
                  | 'max'
                  | 'avg'
                  | 'average'
                  | 'median'
                  | 'stddev'
                  | 'sum'
                  | 'incremental-sum'
                  | 'ses'
                  | 'des'
                  | 'cv'
                  | 'percentage-of-samples'
                  | 'countif'
                  | 'percentage-of-time'
                  | 'number-of-flaps'
                  | 'number-of-times'
                  | 'percentile'
                  | 'percentile25'
                  | 'percentile50'
                  | 'percentile75'
                  | 'percentile80'
                  | 'percentile90'
                  | 'percentile95'
                  | 'percentile97'
                  | 'percentile98'
                  | 'percentile99'
                  | 'trimmed-mean'
                  | 'trimmed-mean1'
                  | 'trimmed-mean2'
                  | 'trimmed-mean3'
                  | 'trimmed-mean5'
                  | 'trimmed-mean10'
                  | 'trimmed-mean15'
                  | 'trimmed-mean20'
                  | 'trimmed-mean25'
                  | 'trimmed-median'
                  | 'trimmed-median1'
                  | 'trimmed-median2'
                  | 'trimmed-median3'
                  | 'trimmed-median5'
                  | 'trimmed-median10'
                  | 'trimmed-median15'
                  | 'trimmed-median20'
                  | 'trimmed-median25'
                  | 'ema'
                  | 'extremes'
                  | 'latest'
                  | undefined
                time_group_options?: string | undefined
                limit?: number | undefined
                cardinality_limit?: number | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: {
              query: {
                method?: 'ks2' | 'volume' | 'anomaly-rate' | 'value' | undefined
                scope_nodes?: string | undefined
                scope_contexts?: string | undefined
                scope_instances?: string | undefined
                scope_labels?: string | undefined
                scope_dimensions?: string | undefined
                nodes?: string | undefined
                contexts?: string | undefined
                instances?: string | undefined
                labels?: string | undefined
                alerts?: string | undefined
                dimensions?: string | undefined
                baseline_after?: number | undefined
                baseline_before?: number | undefined
                after?: number | undefined
                before?: number | undefined
                tier?: number | undefined
                points?: number | undefined
                timeout?: number | undefined
                options?:
                  | (
                      | 'jsonwrap'
                      | 'raw'
                      | 'minify'
                      | 'debug'
                      | 'nonzero'
                      | 'null2zero'
                      | 'abs'
                      | 'absolute'
                      | 'display-absolute'
                      | 'flip'
                      | 'reversed'
                      | 'min2max'
                      | 'percentage'
                      | 'seconds'
                      | 'ms'
                      | 'milliseconds'
                      | 'unaligned'
                      | 'match-ids'
                      | 'match-names'
                      | 'anomaly-bit'
                      | 'jw-anomaly-rates'
                      | 'details'
                      | 'group-by-labels'
                      | 'natural-points'
                      | 'virtual-points'
                      | 'selected-tier'
                      | 'all-dimensions'
                      | 'label-quotes'
                      | 'objectrows'
                      | 'google_json'
                      | 'minimal-stats'
                      | 'minimal'
                      | 'long-json-keys'
                      | 'long-keys'
                      | 'mcp-info'
                      | 'rfc3339'
                      | 'cardinality-limit-all'
                    )[]
                  | undefined
                time_group?:
                  | 'min'
                  | 'max'
                  | 'avg'
                  | 'average'
                  | 'median'
                  | 'stddev'
                  | 'sum'
                  | 'incremental-sum'
                  | 'ses'
                  | 'des'
                  | 'cv'
                  | 'percentage-of-samples'
                  | 'countif'
                  | 'percentage-of-time'
                  | 'number-of-flaps'
                  | 'number-of-times'
                  | 'percentile'
                  | 'percentile25'
                  | 'percentile50'
                  | 'percentile75'
                  | 'percentile80'
                  | 'percentile90'
                  | 'percentile95'
                  | 'percentile97'
                  | 'percentile98'
                  | 'percentile99'
                  | 'trimmed-mean'
                  | 'trimmed-mean1'
                  | 'trimmed-mean2'
                  | 'trimmed-mean3'
                  | 'trimmed-mean5'
                  | 'trimmed-mean10'
                  | 'trimmed-mean15'
                  | 'trimmed-mean20'
                  | 'trimmed-mean25'
                  | 'trimmed-median'
                  | 'trimmed-median1'
                  | 'trimmed-median2'
                  | 'trimmed-median3'
                  | 'trimmed-median5'
                  | 'trimmed-median10'
                  | 'trimmed-median15'
                  | 'trimmed-median20'
                  | 'trimmed-median25'
                  | 'ema'
                  | 'extremes'
                  | 'latest'
                  | undefined
                time_group_options?: string | undefined
                limit?: number | undefined
                cardinality_limit?: number | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 404
          }
        | {
            input: {
              query: {
                method?: 'ks2' | 'volume' | 'anomaly-rate' | 'value' | undefined
                scope_nodes?: string | undefined
                scope_contexts?: string | undefined
                scope_instances?: string | undefined
                scope_labels?: string | undefined
                scope_dimensions?: string | undefined
                nodes?: string | undefined
                contexts?: string | undefined
                instances?: string | undefined
                labels?: string | undefined
                alerts?: string | undefined
                dimensions?: string | undefined
                baseline_after?: number | undefined
                baseline_before?: number | undefined
                after?: number | undefined
                before?: number | undefined
                tier?: number | undefined
                points?: number | undefined
                timeout?: number | undefined
                options?:
                  | (
                      | 'jsonwrap'
                      | 'raw'
                      | 'minify'
                      | 'debug'
                      | 'nonzero'
                      | 'null2zero'
                      | 'abs'
                      | 'absolute'
                      | 'display-absolute'
                      | 'flip'
                      | 'reversed'
                      | 'min2max'
                      | 'percentage'
                      | 'seconds'
                      | 'ms'
                      | 'milliseconds'
                      | 'unaligned'
                      | 'match-ids'
                      | 'match-names'
                      | 'anomaly-bit'
                      | 'jw-anomaly-rates'
                      | 'details'
                      | 'group-by-labels'
                      | 'natural-points'
                      | 'virtual-points'
                      | 'selected-tier'
                      | 'all-dimensions'
                      | 'label-quotes'
                      | 'objectrows'
                      | 'google_json'
                      | 'minimal-stats'
                      | 'minimal'
                      | 'long-json-keys'
                      | 'long-keys'
                      | 'mcp-info'
                      | 'rfc3339'
                      | 'cardinality-limit-all'
                    )[]
                  | undefined
                time_group?:
                  | 'min'
                  | 'max'
                  | 'avg'
                  | 'average'
                  | 'median'
                  | 'stddev'
                  | 'sum'
                  | 'incremental-sum'
                  | 'ses'
                  | 'des'
                  | 'cv'
                  | 'percentage-of-samples'
                  | 'countif'
                  | 'percentage-of-time'
                  | 'number-of-flaps'
                  | 'number-of-times'
                  | 'percentile'
                  | 'percentile25'
                  | 'percentile50'
                  | 'percentile75'
                  | 'percentile80'
                  | 'percentile90'
                  | 'percentile95'
                  | 'percentile97'
                  | 'percentile98'
                  | 'percentile99'
                  | 'trimmed-mean'
                  | 'trimmed-mean1'
                  | 'trimmed-mean2'
                  | 'trimmed-mean3'
                  | 'trimmed-mean5'
                  | 'trimmed-mean10'
                  | 'trimmed-mean15'
                  | 'trimmed-mean20'
                  | 'trimmed-mean25'
                  | 'trimmed-median'
                  | 'trimmed-median1'
                  | 'trimmed-median2'
                  | 'trimmed-median3'
                  | 'trimmed-median5'
                  | 'trimmed-median10'
                  | 'trimmed-median15'
                  | 'trimmed-median20'
                  | 'trimmed-median25'
                  | 'ema'
                  | 'extremes'
                  | 'latest'
                  | undefined
                time_group_options?: string | undefined
                limit?: number | undefined
                cardinality_limit?: number | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 504
          }
    }
  } & {
    '/api/v2/alerts': {
      $get:
        | {
            input: {
              query: {
                scope_nodes?: string | undefined
                nodes?: string | undefined
                scope_contexts?: string | undefined
                contexts?: string | undefined
                status?: string | undefined
                alert?: string | undefined
                options?:
                  | (
                      | 'jsonwrap'
                      | 'raw'
                      | 'minify'
                      | 'debug'
                      | 'nonzero'
                      | 'null2zero'
                      | 'abs'
                      | 'absolute'
                      | 'display-absolute'
                      | 'flip'
                      | 'reversed'
                      | 'min2max'
                      | 'percentage'
                      | 'seconds'
                      | 'ms'
                      | 'milliseconds'
                      | 'unaligned'
                      | 'match-ids'
                      | 'match-names'
                      | 'anomaly-bit'
                      | 'jw-anomaly-rates'
                      | 'details'
                      | 'group-by-labels'
                      | 'natural-points'
                      | 'virtual-points'
                      | 'selected-tier'
                      | 'all-dimensions'
                      | 'label-quotes'
                      | 'objectrows'
                      | 'google_json'
                      | 'minimal-stats'
                      | 'minimal'
                      | 'long-json-keys'
                      | 'long-keys'
                      | 'mcp-info'
                      | 'rfc3339'
                      | 'cardinality-limit-all'
                    )[]
                  | undefined
                after?: number | undefined
                before?: number | undefined
                timeout?: number | undefined
                cardinality_limit?: bigint | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: {
              query: {
                scope_nodes?: string | undefined
                nodes?: string | undefined
                scope_contexts?: string | undefined
                contexts?: string | undefined
                status?: string | undefined
                alert?: string | undefined
                options?:
                  | (
                      | 'jsonwrap'
                      | 'raw'
                      | 'minify'
                      | 'debug'
                      | 'nonzero'
                      | 'null2zero'
                      | 'abs'
                      | 'absolute'
                      | 'display-absolute'
                      | 'flip'
                      | 'reversed'
                      | 'min2max'
                      | 'percentage'
                      | 'seconds'
                      | 'ms'
                      | 'milliseconds'
                      | 'unaligned'
                      | 'match-ids'
                      | 'match-names'
                      | 'anomaly-bit'
                      | 'jw-anomaly-rates'
                      | 'details'
                      | 'group-by-labels'
                      | 'natural-points'
                      | 'virtual-points'
                      | 'selected-tier'
                      | 'all-dimensions'
                      | 'label-quotes'
                      | 'objectrows'
                      | 'google_json'
                      | 'minimal-stats'
                      | 'minimal'
                      | 'long-json-keys'
                      | 'long-keys'
                      | 'mcp-info'
                      | 'rfc3339'
                      | 'cardinality-limit-all'
                    )[]
                  | undefined
                after?: number | undefined
                before?: number | undefined
                timeout?: number | undefined
                cardinality_limit?: bigint | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 400
          }
    }
  } & {
    '/api/v2/alert_transitions': {
      $get:
        | {
            input: {
              query: {
                scope_nodes?: string | undefined
                nodes?: string | undefined
                scope_contexts?: string | undefined
                contexts?: string | undefined
                alert?: string | undefined
                transition?: string | undefined
                last?: number | undefined
                anchor_gi?: bigint | undefined
                f_status?: string | undefined
                f_type?: string | undefined
                f_role?: string | undefined
                f_class?: string | undefined
                f_component?: string | undefined
                f_node?: string | undefined
                f_alert?: string | undefined
                f_instance?: string | undefined
                f_context?: string | undefined
                options?:
                  | (
                      | 'jsonwrap'
                      | 'raw'
                      | 'minify'
                      | 'debug'
                      | 'nonzero'
                      | 'null2zero'
                      | 'abs'
                      | 'absolute'
                      | 'display-absolute'
                      | 'flip'
                      | 'reversed'
                      | 'min2max'
                      | 'percentage'
                      | 'seconds'
                      | 'ms'
                      | 'milliseconds'
                      | 'unaligned'
                      | 'match-ids'
                      | 'match-names'
                      | 'anomaly-bit'
                      | 'jw-anomaly-rates'
                      | 'details'
                      | 'group-by-labels'
                      | 'natural-points'
                      | 'virtual-points'
                      | 'selected-tier'
                      | 'all-dimensions'
                      | 'label-quotes'
                      | 'objectrows'
                      | 'google_json'
                      | 'minimal-stats'
                      | 'minimal'
                      | 'long-json-keys'
                      | 'long-keys'
                      | 'mcp-info'
                      | 'rfc3339'
                      | 'cardinality-limit-all'
                    )[]
                  | undefined
                after?: number | undefined
                before?: number | undefined
                timeout?: number | undefined
                cardinality_limit?: bigint | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: {
              query: {
                scope_nodes?: string | undefined
                nodes?: string | undefined
                scope_contexts?: string | undefined
                contexts?: string | undefined
                alert?: string | undefined
                transition?: string | undefined
                last?: number | undefined
                anchor_gi?: bigint | undefined
                f_status?: string | undefined
                f_type?: string | undefined
                f_role?: string | undefined
                f_class?: string | undefined
                f_component?: string | undefined
                f_node?: string | undefined
                f_alert?: string | undefined
                f_instance?: string | undefined
                f_context?: string | undefined
                options?:
                  | (
                      | 'jsonwrap'
                      | 'raw'
                      | 'minify'
                      | 'debug'
                      | 'nonzero'
                      | 'null2zero'
                      | 'abs'
                      | 'absolute'
                      | 'display-absolute'
                      | 'flip'
                      | 'reversed'
                      | 'min2max'
                      | 'percentage'
                      | 'seconds'
                      | 'ms'
                      | 'milliseconds'
                      | 'unaligned'
                      | 'match-ids'
                      | 'match-names'
                      | 'anomaly-bit'
                      | 'jw-anomaly-rates'
                      | 'details'
                      | 'group-by-labels'
                      | 'natural-points'
                      | 'virtual-points'
                      | 'selected-tier'
                      | 'all-dimensions'
                      | 'label-quotes'
                      | 'objectrows'
                      | 'google_json'
                      | 'minimal-stats'
                      | 'minimal'
                      | 'long-json-keys'
                      | 'long-keys'
                      | 'mcp-info'
                      | 'rfc3339'
                      | 'cardinality-limit-all'
                    )[]
                  | undefined
                after?: number | undefined
                before?: number | undefined
                timeout?: number | undefined
                cardinality_limit?: bigint | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 400
          }
    }
  } & {
    '/api/v2/alert_config': {
      $get:
        | { input: { query: { config: string } }; output: {}; outputFormat: string; status: 200 }
        | { input: { query: { config: string } }; output: {}; outputFormat: string; status: 400 }
    }
  } & {
    '/api/v2/info': {
      $get:
        | {
            input: {
              query: {
                scope_nodes?: string | undefined
                nodes?: string | undefined
                options?:
                  | (
                      | 'jsonwrap'
                      | 'raw'
                      | 'minify'
                      | 'debug'
                      | 'nonzero'
                      | 'null2zero'
                      | 'abs'
                      | 'absolute'
                      | 'display-absolute'
                      | 'flip'
                      | 'reversed'
                      | 'min2max'
                      | 'percentage'
                      | 'seconds'
                      | 'ms'
                      | 'milliseconds'
                      | 'unaligned'
                      | 'match-ids'
                      | 'match-names'
                      | 'anomaly-bit'
                      | 'jw-anomaly-rates'
                      | 'details'
                      | 'group-by-labels'
                      | 'natural-points'
                      | 'virtual-points'
                      | 'selected-tier'
                      | 'all-dimensions'
                      | 'label-quotes'
                      | 'objectrows'
                      | 'google_json'
                      | 'minimal-stats'
                      | 'minimal'
                      | 'long-json-keys'
                      | 'long-keys'
                      | 'mcp-info'
                      | 'rfc3339'
                      | 'cardinality-limit-all'
                    )[]
                  | undefined
                after?: number | undefined
                before?: number | undefined
                timeout?: number | undefined
                cardinality_limit?: bigint | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: {
              query: {
                scope_nodes?: string | undefined
                nodes?: string | undefined
                options?:
                  | (
                      | 'jsonwrap'
                      | 'raw'
                      | 'minify'
                      | 'debug'
                      | 'nonzero'
                      | 'null2zero'
                      | 'abs'
                      | 'absolute'
                      | 'display-absolute'
                      | 'flip'
                      | 'reversed'
                      | 'min2max'
                      | 'percentage'
                      | 'seconds'
                      | 'ms'
                      | 'milliseconds'
                      | 'unaligned'
                      | 'match-ids'
                      | 'match-names'
                      | 'anomaly-bit'
                      | 'jw-anomaly-rates'
                      | 'details'
                      | 'group-by-labels'
                      | 'natural-points'
                      | 'virtual-points'
                      | 'selected-tier'
                      | 'all-dimensions'
                      | 'label-quotes'
                      | 'objectrows'
                      | 'google_json'
                      | 'minimal-stats'
                      | 'minimal'
                      | 'long-json-keys'
                      | 'long-keys'
                      | 'mcp-info'
                      | 'rfc3339'
                      | 'cardinality-limit-all'
                    )[]
                  | undefined
                after?: number | undefined
                before?: number | undefined
                timeout?: number | undefined
                cardinality_limit?: bigint | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 400
          }
    }
  } & {
    '/api/v2/node_instances': {
      $get:
        | {
            input: {
              query: {
                scope_nodes?: string | undefined
                nodes?: string | undefined
                options?:
                  | (
                      | 'jsonwrap'
                      | 'raw'
                      | 'minify'
                      | 'debug'
                      | 'nonzero'
                      | 'null2zero'
                      | 'abs'
                      | 'absolute'
                      | 'display-absolute'
                      | 'flip'
                      | 'reversed'
                      | 'min2max'
                      | 'percentage'
                      | 'seconds'
                      | 'ms'
                      | 'milliseconds'
                      | 'unaligned'
                      | 'match-ids'
                      | 'match-names'
                      | 'anomaly-bit'
                      | 'jw-anomaly-rates'
                      | 'details'
                      | 'group-by-labels'
                      | 'natural-points'
                      | 'virtual-points'
                      | 'selected-tier'
                      | 'all-dimensions'
                      | 'label-quotes'
                      | 'objectrows'
                      | 'google_json'
                      | 'minimal-stats'
                      | 'minimal'
                      | 'long-json-keys'
                      | 'long-keys'
                      | 'mcp-info'
                      | 'rfc3339'
                      | 'cardinality-limit-all'
                    )[]
                  | undefined
                after?: number | undefined
                before?: number | undefined
                timeout?: number | undefined
                cardinality_limit?: bigint | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: {
              query: {
                scope_nodes?: string | undefined
                nodes?: string | undefined
                options?:
                  | (
                      | 'jsonwrap'
                      | 'raw'
                      | 'minify'
                      | 'debug'
                      | 'nonzero'
                      | 'null2zero'
                      | 'abs'
                      | 'absolute'
                      | 'display-absolute'
                      | 'flip'
                      | 'reversed'
                      | 'min2max'
                      | 'percentage'
                      | 'seconds'
                      | 'ms'
                      | 'milliseconds'
                      | 'unaligned'
                      | 'match-ids'
                      | 'match-names'
                      | 'anomaly-bit'
                      | 'jw-anomaly-rates'
                      | 'details'
                      | 'group-by-labels'
                      | 'natural-points'
                      | 'virtual-points'
                      | 'selected-tier'
                      | 'all-dimensions'
                      | 'label-quotes'
                      | 'objectrows'
                      | 'google_json'
                      | 'minimal-stats'
                      | 'minimal'
                      | 'long-json-keys'
                      | 'long-keys'
                      | 'mcp-info'
                      | 'rfc3339'
                      | 'cardinality-limit-all'
                    )[]
                  | undefined
                after?: number | undefined
                before?: number | undefined
                timeout?: number | undefined
                cardinality_limit?: bigint | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 400
          }
    }
  } & {
    '/api/v2/versions': {
      $get:
        | {
            input: {
              query: {
                scope_nodes?: string | undefined
                nodes?: string | undefined
                options?:
                  | (
                      | 'jsonwrap'
                      | 'raw'
                      | 'minify'
                      | 'debug'
                      | 'nonzero'
                      | 'null2zero'
                      | 'abs'
                      | 'absolute'
                      | 'display-absolute'
                      | 'flip'
                      | 'reversed'
                      | 'min2max'
                      | 'percentage'
                      | 'seconds'
                      | 'ms'
                      | 'milliseconds'
                      | 'unaligned'
                      | 'match-ids'
                      | 'match-names'
                      | 'anomaly-bit'
                      | 'jw-anomaly-rates'
                      | 'details'
                      | 'group-by-labels'
                      | 'natural-points'
                      | 'virtual-points'
                      | 'selected-tier'
                      | 'all-dimensions'
                      | 'label-quotes'
                      | 'objectrows'
                      | 'google_json'
                      | 'minimal-stats'
                      | 'minimal'
                      | 'long-json-keys'
                      | 'long-keys'
                      | 'mcp-info'
                      | 'rfc3339'
                      | 'cardinality-limit-all'
                    )[]
                  | undefined
                timeout?: number | undefined
                cardinality_limit?: bigint | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: {
              query: {
                scope_nodes?: string | undefined
                nodes?: string | undefined
                options?:
                  | (
                      | 'jsonwrap'
                      | 'raw'
                      | 'minify'
                      | 'debug'
                      | 'nonzero'
                      | 'null2zero'
                      | 'abs'
                      | 'absolute'
                      | 'display-absolute'
                      | 'flip'
                      | 'reversed'
                      | 'min2max'
                      | 'percentage'
                      | 'seconds'
                      | 'ms'
                      | 'milliseconds'
                      | 'unaligned'
                      | 'match-ids'
                      | 'match-names'
                      | 'anomaly-bit'
                      | 'jw-anomaly-rates'
                      | 'details'
                      | 'group-by-labels'
                      | 'natural-points'
                      | 'virtual-points'
                      | 'selected-tier'
                      | 'all-dimensions'
                      | 'label-quotes'
                      | 'objectrows'
                      | 'google_json'
                      | 'minimal-stats'
                      | 'minimal'
                      | 'long-json-keys'
                      | 'long-keys'
                      | 'mcp-info'
                      | 'rfc3339'
                      | 'cardinality-limit-all'
                    )[]
                  | undefined
                timeout?: number | undefined
                cardinality_limit?: bigint | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 400
          }
    }
  } & {
    '/api/v2/progress': {
      $get:
        | {
            input: { query: { transaction: string } }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { query: { transaction: string } }
            output: {}
            outputFormat: string
            status: 400
          }
    }
  } & {
    '/api/v2/functions': {
      $get:
        | {
            input: {
              query: {
                scope_nodes?: string | undefined
                nodes?: string | undefined
                options?:
                  | (
                      | 'jsonwrap'
                      | 'raw'
                      | 'minify'
                      | 'debug'
                      | 'nonzero'
                      | 'null2zero'
                      | 'abs'
                      | 'absolute'
                      | 'display-absolute'
                      | 'flip'
                      | 'reversed'
                      | 'min2max'
                      | 'percentage'
                      | 'seconds'
                      | 'ms'
                      | 'milliseconds'
                      | 'unaligned'
                      | 'match-ids'
                      | 'match-names'
                      | 'anomaly-bit'
                      | 'jw-anomaly-rates'
                      | 'details'
                      | 'group-by-labels'
                      | 'natural-points'
                      | 'virtual-points'
                      | 'selected-tier'
                      | 'all-dimensions'
                      | 'label-quotes'
                      | 'objectrows'
                      | 'google_json'
                      | 'minimal-stats'
                      | 'minimal'
                      | 'long-json-keys'
                      | 'long-keys'
                      | 'mcp-info'
                      | 'rfc3339'
                      | 'cardinality-limit-all'
                    )[]
                  | undefined
                timeout?: number | undefined
                cardinality_limit?: bigint | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: {
              query: {
                scope_nodes?: string | undefined
                nodes?: string | undefined
                options?:
                  | (
                      | 'jsonwrap'
                      | 'raw'
                      | 'minify'
                      | 'debug'
                      | 'nonzero'
                      | 'null2zero'
                      | 'abs'
                      | 'absolute'
                      | 'display-absolute'
                      | 'flip'
                      | 'reversed'
                      | 'min2max'
                      | 'percentage'
                      | 'seconds'
                      | 'ms'
                      | 'milliseconds'
                      | 'unaligned'
                      | 'match-ids'
                      | 'match-names'
                      | 'anomaly-bit'
                      | 'jw-anomaly-rates'
                      | 'details'
                      | 'group-by-labels'
                      | 'natural-points'
                      | 'virtual-points'
                      | 'selected-tier'
                      | 'all-dimensions'
                      | 'label-quotes'
                      | 'objectrows'
                      | 'google_json'
                      | 'minimal-stats'
                      | 'minimal'
                      | 'long-json-keys'
                      | 'long-keys'
                      | 'mcp-info'
                      | 'rfc3339'
                      | 'cardinality-limit-all'
                    )[]
                  | undefined
                timeout?: number | undefined
                cardinality_limit?: bigint | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 400
          }
    }
  } & {
    '/api/v2/rtc_offer': {
      $post:
        | { input: { json: string }; output: {}; outputFormat: string; status: 200 }
        | { input: { json: string }; output: {}; outputFormat: string; status: 400 }
        | { input: { json: string }; output: {}; outputFormat: string; status: 500 }
    }
  } & {
    '/api/v2/claim': {
      $get:
        | {
            input: {
              query: {
                key?: string | undefined
                token?: string | undefined
                url?: string | undefined
                rooms?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: {
              query: {
                key?: string | undefined
                token?: string | undefined
                url?: string | undefined
                rooms?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 400
          }
    }
  } & {
    '/api/v2/bearer_protection': {
      $get:
        | {
            input: {
              query: {
                bearer_protection?: BearerProtectionValue | undefined
                claim_id: string
                machine_guid: string
                node_id: string
              }
            }
            output: { bearer_protection?: boolean | undefined }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                bearer_protection?: BearerProtectionValue | undefined
                claim_id: string
                machine_guid: string
                node_id: string
              }
            }
            output: {}
            outputFormat: string
            status: 400
          }
    }
  } & {
    '/api/v2/bearer_get_token': {
      $get:
        | {
            input: { query: { claim_id: string; machine_guid: string; node_id: string } }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { query: { claim_id: string; machine_guid: string; node_id: string } }
            output: {}
            outputFormat: string
            status: 400
          }
    }
  } & {
    '/api/v3/weights': {
      $get:
        | {
            input: {
              query: {
                method?: 'ks2' | 'volume' | 'anomaly-rate' | 'value' | undefined
                scope_nodes?: string | undefined
                scope_contexts?: string | undefined
                scope_instances?: string | undefined
                scope_labels?: string | undefined
                scope_dimensions?: string | undefined
                nodes?: string | undefined
                contexts?: string | undefined
                instances?: string | undefined
                labels?: string | undefined
                alerts?: string | undefined
                dimensions?: string | undefined
                baseline_after?: number | undefined
                baseline_before?: number | undefined
                after?: number | undefined
                before?: number | undefined
                tier?: number | undefined
                points?: number | undefined
                timeout?: number | undefined
                options?:
                  | (
                      | 'jsonwrap'
                      | 'raw'
                      | 'minify'
                      | 'debug'
                      | 'nonzero'
                      | 'null2zero'
                      | 'abs'
                      | 'absolute'
                      | 'display-absolute'
                      | 'flip'
                      | 'reversed'
                      | 'min2max'
                      | 'percentage'
                      | 'seconds'
                      | 'ms'
                      | 'milliseconds'
                      | 'unaligned'
                      | 'match-ids'
                      | 'match-names'
                      | 'anomaly-bit'
                      | 'jw-anomaly-rates'
                      | 'details'
                      | 'group-by-labels'
                      | 'natural-points'
                      | 'virtual-points'
                      | 'selected-tier'
                      | 'all-dimensions'
                      | 'label-quotes'
                      | 'objectrows'
                      | 'google_json'
                      | 'minimal-stats'
                      | 'minimal'
                      | 'long-json-keys'
                      | 'long-keys'
                      | 'mcp-info'
                      | 'rfc3339'
                      | 'cardinality-limit-all'
                    )[]
                  | undefined
                time_group?:
                  | 'min'
                  | 'max'
                  | 'avg'
                  | 'average'
                  | 'median'
                  | 'stddev'
                  | 'sum'
                  | 'incremental-sum'
                  | 'ses'
                  | 'des'
                  | 'cv'
                  | 'percentage-of-samples'
                  | 'countif'
                  | 'percentage-of-time'
                  | 'number-of-flaps'
                  | 'number-of-times'
                  | 'percentile'
                  | 'percentile25'
                  | 'percentile50'
                  | 'percentile75'
                  | 'percentile80'
                  | 'percentile90'
                  | 'percentile95'
                  | 'percentile97'
                  | 'percentile98'
                  | 'percentile99'
                  | 'trimmed-mean'
                  | 'trimmed-mean1'
                  | 'trimmed-mean2'
                  | 'trimmed-mean3'
                  | 'trimmed-mean5'
                  | 'trimmed-mean10'
                  | 'trimmed-mean15'
                  | 'trimmed-mean20'
                  | 'trimmed-mean25'
                  | 'trimmed-median'
                  | 'trimmed-median1'
                  | 'trimmed-median2'
                  | 'trimmed-median3'
                  | 'trimmed-median5'
                  | 'trimmed-median10'
                  | 'trimmed-median15'
                  | 'trimmed-median20'
                  | 'trimmed-median25'
                  | 'ema'
                  | 'extremes'
                  | 'latest'
                  | undefined
                time_group_options?: string | undefined
                limit?: number | undefined
                cardinality_limit?: number | undefined
              }
            }
            output: Weights2
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                method?: 'ks2' | 'volume' | 'anomaly-rate' | 'value' | undefined
                scope_nodes?: string | undefined
                scope_contexts?: string | undefined
                scope_instances?: string | undefined
                scope_labels?: string | undefined
                scope_dimensions?: string | undefined
                nodes?: string | undefined
                contexts?: string | undefined
                instances?: string | undefined
                labels?: string | undefined
                alerts?: string | undefined
                dimensions?: string | undefined
                baseline_after?: number | undefined
                baseline_before?: number | undefined
                after?: number | undefined
                before?: number | undefined
                tier?: number | undefined
                points?: number | undefined
                timeout?: number | undefined
                options?:
                  | (
                      | 'jsonwrap'
                      | 'raw'
                      | 'minify'
                      | 'debug'
                      | 'nonzero'
                      | 'null2zero'
                      | 'abs'
                      | 'absolute'
                      | 'display-absolute'
                      | 'flip'
                      | 'reversed'
                      | 'min2max'
                      | 'percentage'
                      | 'seconds'
                      | 'ms'
                      | 'milliseconds'
                      | 'unaligned'
                      | 'match-ids'
                      | 'match-names'
                      | 'anomaly-bit'
                      | 'jw-anomaly-rates'
                      | 'details'
                      | 'group-by-labels'
                      | 'natural-points'
                      | 'virtual-points'
                      | 'selected-tier'
                      | 'all-dimensions'
                      | 'label-quotes'
                      | 'objectrows'
                      | 'google_json'
                      | 'minimal-stats'
                      | 'minimal'
                      | 'long-json-keys'
                      | 'long-keys'
                      | 'mcp-info'
                      | 'rfc3339'
                      | 'cardinality-limit-all'
                    )[]
                  | undefined
                time_group?:
                  | 'min'
                  | 'max'
                  | 'avg'
                  | 'average'
                  | 'median'
                  | 'stddev'
                  | 'sum'
                  | 'incremental-sum'
                  | 'ses'
                  | 'des'
                  | 'cv'
                  | 'percentage-of-samples'
                  | 'countif'
                  | 'percentage-of-time'
                  | 'number-of-flaps'
                  | 'number-of-times'
                  | 'percentile'
                  | 'percentile25'
                  | 'percentile50'
                  | 'percentile75'
                  | 'percentile80'
                  | 'percentile90'
                  | 'percentile95'
                  | 'percentile97'
                  | 'percentile98'
                  | 'percentile99'
                  | 'trimmed-mean'
                  | 'trimmed-mean1'
                  | 'trimmed-mean2'
                  | 'trimmed-mean3'
                  | 'trimmed-mean5'
                  | 'trimmed-mean10'
                  | 'trimmed-mean15'
                  | 'trimmed-mean20'
                  | 'trimmed-mean25'
                  | 'trimmed-median'
                  | 'trimmed-median1'
                  | 'trimmed-median2'
                  | 'trimmed-median3'
                  | 'trimmed-median5'
                  | 'trimmed-median10'
                  | 'trimmed-median15'
                  | 'trimmed-median20'
                  | 'trimmed-median25'
                  | 'ema'
                  | 'extremes'
                  | 'latest'
                  | undefined
                time_group_options?: string | undefined
                limit?: number | undefined
                cardinality_limit?: number | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: {
              query: {
                method?: 'ks2' | 'volume' | 'anomaly-rate' | 'value' | undefined
                scope_nodes?: string | undefined
                scope_contexts?: string | undefined
                scope_instances?: string | undefined
                scope_labels?: string | undefined
                scope_dimensions?: string | undefined
                nodes?: string | undefined
                contexts?: string | undefined
                instances?: string | undefined
                labels?: string | undefined
                alerts?: string | undefined
                dimensions?: string | undefined
                baseline_after?: number | undefined
                baseline_before?: number | undefined
                after?: number | undefined
                before?: number | undefined
                tier?: number | undefined
                points?: number | undefined
                timeout?: number | undefined
                options?:
                  | (
                      | 'jsonwrap'
                      | 'raw'
                      | 'minify'
                      | 'debug'
                      | 'nonzero'
                      | 'null2zero'
                      | 'abs'
                      | 'absolute'
                      | 'display-absolute'
                      | 'flip'
                      | 'reversed'
                      | 'min2max'
                      | 'percentage'
                      | 'seconds'
                      | 'ms'
                      | 'milliseconds'
                      | 'unaligned'
                      | 'match-ids'
                      | 'match-names'
                      | 'anomaly-bit'
                      | 'jw-anomaly-rates'
                      | 'details'
                      | 'group-by-labels'
                      | 'natural-points'
                      | 'virtual-points'
                      | 'selected-tier'
                      | 'all-dimensions'
                      | 'label-quotes'
                      | 'objectrows'
                      | 'google_json'
                      | 'minimal-stats'
                      | 'minimal'
                      | 'long-json-keys'
                      | 'long-keys'
                      | 'mcp-info'
                      | 'rfc3339'
                      | 'cardinality-limit-all'
                    )[]
                  | undefined
                time_group?:
                  | 'min'
                  | 'max'
                  | 'avg'
                  | 'average'
                  | 'median'
                  | 'stddev'
                  | 'sum'
                  | 'incremental-sum'
                  | 'ses'
                  | 'des'
                  | 'cv'
                  | 'percentage-of-samples'
                  | 'countif'
                  | 'percentage-of-time'
                  | 'number-of-flaps'
                  | 'number-of-times'
                  | 'percentile'
                  | 'percentile25'
                  | 'percentile50'
                  | 'percentile75'
                  | 'percentile80'
                  | 'percentile90'
                  | 'percentile95'
                  | 'percentile97'
                  | 'percentile98'
                  | 'percentile99'
                  | 'trimmed-mean'
                  | 'trimmed-mean1'
                  | 'trimmed-mean2'
                  | 'trimmed-mean3'
                  | 'trimmed-mean5'
                  | 'trimmed-mean10'
                  | 'trimmed-mean15'
                  | 'trimmed-mean20'
                  | 'trimmed-mean25'
                  | 'trimmed-median'
                  | 'trimmed-median1'
                  | 'trimmed-median2'
                  | 'trimmed-median3'
                  | 'trimmed-median5'
                  | 'trimmed-median10'
                  | 'trimmed-median15'
                  | 'trimmed-median20'
                  | 'trimmed-median25'
                  | 'ema'
                  | 'extremes'
                  | 'latest'
                  | undefined
                time_group_options?: string | undefined
                limit?: number | undefined
                cardinality_limit?: number | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: {
              query: {
                method?: 'ks2' | 'volume' | 'anomaly-rate' | 'value' | undefined
                scope_nodes?: string | undefined
                scope_contexts?: string | undefined
                scope_instances?: string | undefined
                scope_labels?: string | undefined
                scope_dimensions?: string | undefined
                nodes?: string | undefined
                contexts?: string | undefined
                instances?: string | undefined
                labels?: string | undefined
                alerts?: string | undefined
                dimensions?: string | undefined
                baseline_after?: number | undefined
                baseline_before?: number | undefined
                after?: number | undefined
                before?: number | undefined
                tier?: number | undefined
                points?: number | undefined
                timeout?: number | undefined
                options?:
                  | (
                      | 'jsonwrap'
                      | 'raw'
                      | 'minify'
                      | 'debug'
                      | 'nonzero'
                      | 'null2zero'
                      | 'abs'
                      | 'absolute'
                      | 'display-absolute'
                      | 'flip'
                      | 'reversed'
                      | 'min2max'
                      | 'percentage'
                      | 'seconds'
                      | 'ms'
                      | 'milliseconds'
                      | 'unaligned'
                      | 'match-ids'
                      | 'match-names'
                      | 'anomaly-bit'
                      | 'jw-anomaly-rates'
                      | 'details'
                      | 'group-by-labels'
                      | 'natural-points'
                      | 'virtual-points'
                      | 'selected-tier'
                      | 'all-dimensions'
                      | 'label-quotes'
                      | 'objectrows'
                      | 'google_json'
                      | 'minimal-stats'
                      | 'minimal'
                      | 'long-json-keys'
                      | 'long-keys'
                      | 'mcp-info'
                      | 'rfc3339'
                      | 'cardinality-limit-all'
                    )[]
                  | undefined
                time_group?:
                  | 'min'
                  | 'max'
                  | 'avg'
                  | 'average'
                  | 'median'
                  | 'stddev'
                  | 'sum'
                  | 'incremental-sum'
                  | 'ses'
                  | 'des'
                  | 'cv'
                  | 'percentage-of-samples'
                  | 'countif'
                  | 'percentage-of-time'
                  | 'number-of-flaps'
                  | 'number-of-times'
                  | 'percentile'
                  | 'percentile25'
                  | 'percentile50'
                  | 'percentile75'
                  | 'percentile80'
                  | 'percentile90'
                  | 'percentile95'
                  | 'percentile97'
                  | 'percentile98'
                  | 'percentile99'
                  | 'trimmed-mean'
                  | 'trimmed-mean1'
                  | 'trimmed-mean2'
                  | 'trimmed-mean3'
                  | 'trimmed-mean5'
                  | 'trimmed-mean10'
                  | 'trimmed-mean15'
                  | 'trimmed-mean20'
                  | 'trimmed-mean25'
                  | 'trimmed-median'
                  | 'trimmed-median1'
                  | 'trimmed-median2'
                  | 'trimmed-median3'
                  | 'trimmed-median5'
                  | 'trimmed-median10'
                  | 'trimmed-median15'
                  | 'trimmed-median20'
                  | 'trimmed-median25'
                  | 'ema'
                  | 'extremes'
                  | 'latest'
                  | undefined
                time_group_options?: string | undefined
                limit?: number | undefined
                cardinality_limit?: number | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 404
          }
        | {
            input: {
              query: {
                method?: 'ks2' | 'volume' | 'anomaly-rate' | 'value' | undefined
                scope_nodes?: string | undefined
                scope_contexts?: string | undefined
                scope_instances?: string | undefined
                scope_labels?: string | undefined
                scope_dimensions?: string | undefined
                nodes?: string | undefined
                contexts?: string | undefined
                instances?: string | undefined
                labels?: string | undefined
                alerts?: string | undefined
                dimensions?: string | undefined
                baseline_after?: number | undefined
                baseline_before?: number | undefined
                after?: number | undefined
                before?: number | undefined
                tier?: number | undefined
                points?: number | undefined
                timeout?: number | undefined
                options?:
                  | (
                      | 'jsonwrap'
                      | 'raw'
                      | 'minify'
                      | 'debug'
                      | 'nonzero'
                      | 'null2zero'
                      | 'abs'
                      | 'absolute'
                      | 'display-absolute'
                      | 'flip'
                      | 'reversed'
                      | 'min2max'
                      | 'percentage'
                      | 'seconds'
                      | 'ms'
                      | 'milliseconds'
                      | 'unaligned'
                      | 'match-ids'
                      | 'match-names'
                      | 'anomaly-bit'
                      | 'jw-anomaly-rates'
                      | 'details'
                      | 'group-by-labels'
                      | 'natural-points'
                      | 'virtual-points'
                      | 'selected-tier'
                      | 'all-dimensions'
                      | 'label-quotes'
                      | 'objectrows'
                      | 'google_json'
                      | 'minimal-stats'
                      | 'minimal'
                      | 'long-json-keys'
                      | 'long-keys'
                      | 'mcp-info'
                      | 'rfc3339'
                      | 'cardinality-limit-all'
                    )[]
                  | undefined
                time_group?:
                  | 'min'
                  | 'max'
                  | 'avg'
                  | 'average'
                  | 'median'
                  | 'stddev'
                  | 'sum'
                  | 'incremental-sum'
                  | 'ses'
                  | 'des'
                  | 'cv'
                  | 'percentage-of-samples'
                  | 'countif'
                  | 'percentage-of-time'
                  | 'number-of-flaps'
                  | 'number-of-times'
                  | 'percentile'
                  | 'percentile25'
                  | 'percentile50'
                  | 'percentile75'
                  | 'percentile80'
                  | 'percentile90'
                  | 'percentile95'
                  | 'percentile97'
                  | 'percentile98'
                  | 'percentile99'
                  | 'trimmed-mean'
                  | 'trimmed-mean1'
                  | 'trimmed-mean2'
                  | 'trimmed-mean3'
                  | 'trimmed-mean5'
                  | 'trimmed-mean10'
                  | 'trimmed-mean15'
                  | 'trimmed-mean20'
                  | 'trimmed-mean25'
                  | 'trimmed-median'
                  | 'trimmed-median1'
                  | 'trimmed-median2'
                  | 'trimmed-median3'
                  | 'trimmed-median5'
                  | 'trimmed-median10'
                  | 'trimmed-median15'
                  | 'trimmed-median20'
                  | 'trimmed-median25'
                  | 'ema'
                  | 'extremes'
                  | 'latest'
                  | undefined
                time_group_options?: string | undefined
                limit?: number | undefined
                cardinality_limit?: number | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 504
          }
    }
  } & {
    '/api/v1/weights': {
      $get:
        | {
            input: {
              query: {
                method?: 'ks2' | 'volume' | 'anomaly-rate' | 'value' | undefined
                context?: string | undefined
                baseline_after?: number | undefined
                baseline_before?: number | undefined
                after?: number | undefined
                before?: number | undefined
                tier?: number | undefined
                points?: number | undefined
                timeout?: number | undefined
                options?:
                  | (
                      | 'jsonwrap'
                      | 'raw'
                      | 'minify'
                      | 'debug'
                      | 'nonzero'
                      | 'null2zero'
                      | 'abs'
                      | 'absolute'
                      | 'display-absolute'
                      | 'flip'
                      | 'reversed'
                      | 'min2max'
                      | 'percentage'
                      | 'seconds'
                      | 'ms'
                      | 'milliseconds'
                      | 'unaligned'
                      | 'match-ids'
                      | 'match-names'
                      | 'anomaly-bit'
                      | 'jw-anomaly-rates'
                      | 'details'
                      | 'group-by-labels'
                      | 'natural-points'
                      | 'virtual-points'
                      | 'selected-tier'
                      | 'all-dimensions'
                      | 'label-quotes'
                      | 'objectrows'
                      | 'google_json'
                      | 'minimal-stats'
                      | 'minimal'
                      | 'long-json-keys'
                      | 'long-keys'
                      | 'mcp-info'
                      | 'rfc3339'
                      | 'cardinality-limit-all'
                    )[]
                  | undefined
                group?:
                  | 'min'
                  | 'max'
                  | 'avg'
                  | 'average'
                  | 'median'
                  | 'stddev'
                  | 'sum'
                  | 'incremental-sum'
                  | 'ses'
                  | 'des'
                  | 'cv'
                  | 'percentage-of-samples'
                  | 'countif'
                  | 'percentage-of-time'
                  | 'number-of-flaps'
                  | 'number-of-times'
                  | 'percentile'
                  | 'percentile25'
                  | 'percentile50'
                  | 'percentile75'
                  | 'percentile80'
                  | 'percentile90'
                  | 'percentile95'
                  | 'percentile97'
                  | 'percentile98'
                  | 'percentile99'
                  | 'trimmed-mean'
                  | 'trimmed-mean1'
                  | 'trimmed-mean2'
                  | 'trimmed-mean3'
                  | 'trimmed-mean5'
                  | 'trimmed-mean10'
                  | 'trimmed-mean15'
                  | 'trimmed-mean20'
                  | 'trimmed-mean25'
                  | 'trimmed-median'
                  | 'trimmed-median1'
                  | 'trimmed-median2'
                  | 'trimmed-median3'
                  | 'trimmed-median5'
                  | 'trimmed-median10'
                  | 'trimmed-median15'
                  | 'trimmed-median20'
                  | 'trimmed-median25'
                  | 'ema'
                  | 'extremes'
                  | 'latest'
                  | undefined
                group_options?: string | undefined
                limit?: number | undefined
                cardinality_limit?: number | undefined
              }
            }
            output: Weights
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                method?: 'ks2' | 'volume' | 'anomaly-rate' | 'value' | undefined
                context?: string | undefined
                baseline_after?: number | undefined
                baseline_before?: number | undefined
                after?: number | undefined
                before?: number | undefined
                tier?: number | undefined
                points?: number | undefined
                timeout?: number | undefined
                options?:
                  | (
                      | 'jsonwrap'
                      | 'raw'
                      | 'minify'
                      | 'debug'
                      | 'nonzero'
                      | 'null2zero'
                      | 'abs'
                      | 'absolute'
                      | 'display-absolute'
                      | 'flip'
                      | 'reversed'
                      | 'min2max'
                      | 'percentage'
                      | 'seconds'
                      | 'ms'
                      | 'milliseconds'
                      | 'unaligned'
                      | 'match-ids'
                      | 'match-names'
                      | 'anomaly-bit'
                      | 'jw-anomaly-rates'
                      | 'details'
                      | 'group-by-labels'
                      | 'natural-points'
                      | 'virtual-points'
                      | 'selected-tier'
                      | 'all-dimensions'
                      | 'label-quotes'
                      | 'objectrows'
                      | 'google_json'
                      | 'minimal-stats'
                      | 'minimal'
                      | 'long-json-keys'
                      | 'long-keys'
                      | 'mcp-info'
                      | 'rfc3339'
                      | 'cardinality-limit-all'
                    )[]
                  | undefined
                group?:
                  | 'min'
                  | 'max'
                  | 'avg'
                  | 'average'
                  | 'median'
                  | 'stddev'
                  | 'sum'
                  | 'incremental-sum'
                  | 'ses'
                  | 'des'
                  | 'cv'
                  | 'percentage-of-samples'
                  | 'countif'
                  | 'percentage-of-time'
                  | 'number-of-flaps'
                  | 'number-of-times'
                  | 'percentile'
                  | 'percentile25'
                  | 'percentile50'
                  | 'percentile75'
                  | 'percentile80'
                  | 'percentile90'
                  | 'percentile95'
                  | 'percentile97'
                  | 'percentile98'
                  | 'percentile99'
                  | 'trimmed-mean'
                  | 'trimmed-mean1'
                  | 'trimmed-mean2'
                  | 'trimmed-mean3'
                  | 'trimmed-mean5'
                  | 'trimmed-mean10'
                  | 'trimmed-mean15'
                  | 'trimmed-mean20'
                  | 'trimmed-mean25'
                  | 'trimmed-median'
                  | 'trimmed-median1'
                  | 'trimmed-median2'
                  | 'trimmed-median3'
                  | 'trimmed-median5'
                  | 'trimmed-median10'
                  | 'trimmed-median15'
                  | 'trimmed-median20'
                  | 'trimmed-median25'
                  | 'ema'
                  | 'extremes'
                  | 'latest'
                  | undefined
                group_options?: string | undefined
                limit?: number | undefined
                cardinality_limit?: number | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: {
              query: {
                method?: 'ks2' | 'volume' | 'anomaly-rate' | 'value' | undefined
                context?: string | undefined
                baseline_after?: number | undefined
                baseline_before?: number | undefined
                after?: number | undefined
                before?: number | undefined
                tier?: number | undefined
                points?: number | undefined
                timeout?: number | undefined
                options?:
                  | (
                      | 'jsonwrap'
                      | 'raw'
                      | 'minify'
                      | 'debug'
                      | 'nonzero'
                      | 'null2zero'
                      | 'abs'
                      | 'absolute'
                      | 'display-absolute'
                      | 'flip'
                      | 'reversed'
                      | 'min2max'
                      | 'percentage'
                      | 'seconds'
                      | 'ms'
                      | 'milliseconds'
                      | 'unaligned'
                      | 'match-ids'
                      | 'match-names'
                      | 'anomaly-bit'
                      | 'jw-anomaly-rates'
                      | 'details'
                      | 'group-by-labels'
                      | 'natural-points'
                      | 'virtual-points'
                      | 'selected-tier'
                      | 'all-dimensions'
                      | 'label-quotes'
                      | 'objectrows'
                      | 'google_json'
                      | 'minimal-stats'
                      | 'minimal'
                      | 'long-json-keys'
                      | 'long-keys'
                      | 'mcp-info'
                      | 'rfc3339'
                      | 'cardinality-limit-all'
                    )[]
                  | undefined
                group?:
                  | 'min'
                  | 'max'
                  | 'avg'
                  | 'average'
                  | 'median'
                  | 'stddev'
                  | 'sum'
                  | 'incremental-sum'
                  | 'ses'
                  | 'des'
                  | 'cv'
                  | 'percentage-of-samples'
                  | 'countif'
                  | 'percentage-of-time'
                  | 'number-of-flaps'
                  | 'number-of-times'
                  | 'percentile'
                  | 'percentile25'
                  | 'percentile50'
                  | 'percentile75'
                  | 'percentile80'
                  | 'percentile90'
                  | 'percentile95'
                  | 'percentile97'
                  | 'percentile98'
                  | 'percentile99'
                  | 'trimmed-mean'
                  | 'trimmed-mean1'
                  | 'trimmed-mean2'
                  | 'trimmed-mean3'
                  | 'trimmed-mean5'
                  | 'trimmed-mean10'
                  | 'trimmed-mean15'
                  | 'trimmed-mean20'
                  | 'trimmed-mean25'
                  | 'trimmed-median'
                  | 'trimmed-median1'
                  | 'trimmed-median2'
                  | 'trimmed-median3'
                  | 'trimmed-median5'
                  | 'trimmed-median10'
                  | 'trimmed-median15'
                  | 'trimmed-median20'
                  | 'trimmed-median25'
                  | 'ema'
                  | 'extremes'
                  | 'latest'
                  | undefined
                group_options?: string | undefined
                limit?: number | undefined
                cardinality_limit?: number | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: {
              query: {
                method?: 'ks2' | 'volume' | 'anomaly-rate' | 'value' | undefined
                context?: string | undefined
                baseline_after?: number | undefined
                baseline_before?: number | undefined
                after?: number | undefined
                before?: number | undefined
                tier?: number | undefined
                points?: number | undefined
                timeout?: number | undefined
                options?:
                  | (
                      | 'jsonwrap'
                      | 'raw'
                      | 'minify'
                      | 'debug'
                      | 'nonzero'
                      | 'null2zero'
                      | 'abs'
                      | 'absolute'
                      | 'display-absolute'
                      | 'flip'
                      | 'reversed'
                      | 'min2max'
                      | 'percentage'
                      | 'seconds'
                      | 'ms'
                      | 'milliseconds'
                      | 'unaligned'
                      | 'match-ids'
                      | 'match-names'
                      | 'anomaly-bit'
                      | 'jw-anomaly-rates'
                      | 'details'
                      | 'group-by-labels'
                      | 'natural-points'
                      | 'virtual-points'
                      | 'selected-tier'
                      | 'all-dimensions'
                      | 'label-quotes'
                      | 'objectrows'
                      | 'google_json'
                      | 'minimal-stats'
                      | 'minimal'
                      | 'long-json-keys'
                      | 'long-keys'
                      | 'mcp-info'
                      | 'rfc3339'
                      | 'cardinality-limit-all'
                    )[]
                  | undefined
                group?:
                  | 'min'
                  | 'max'
                  | 'avg'
                  | 'average'
                  | 'median'
                  | 'stddev'
                  | 'sum'
                  | 'incremental-sum'
                  | 'ses'
                  | 'des'
                  | 'cv'
                  | 'percentage-of-samples'
                  | 'countif'
                  | 'percentage-of-time'
                  | 'number-of-flaps'
                  | 'number-of-times'
                  | 'percentile'
                  | 'percentile25'
                  | 'percentile50'
                  | 'percentile75'
                  | 'percentile80'
                  | 'percentile90'
                  | 'percentile95'
                  | 'percentile97'
                  | 'percentile98'
                  | 'percentile99'
                  | 'trimmed-mean'
                  | 'trimmed-mean1'
                  | 'trimmed-mean2'
                  | 'trimmed-mean3'
                  | 'trimmed-mean5'
                  | 'trimmed-mean10'
                  | 'trimmed-mean15'
                  | 'trimmed-mean20'
                  | 'trimmed-mean25'
                  | 'trimmed-median'
                  | 'trimmed-median1'
                  | 'trimmed-median2'
                  | 'trimmed-median3'
                  | 'trimmed-median5'
                  | 'trimmed-median10'
                  | 'trimmed-median15'
                  | 'trimmed-median20'
                  | 'trimmed-median25'
                  | 'ema'
                  | 'extremes'
                  | 'latest'
                  | undefined
                group_options?: string | undefined
                limit?: number | undefined
                cardinality_limit?: number | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 404
          }
        | {
            input: {
              query: {
                method?: 'ks2' | 'volume' | 'anomaly-rate' | 'value' | undefined
                context?: string | undefined
                baseline_after?: number | undefined
                baseline_before?: number | undefined
                after?: number | undefined
                before?: number | undefined
                tier?: number | undefined
                points?: number | undefined
                timeout?: number | undefined
                options?:
                  | (
                      | 'jsonwrap'
                      | 'raw'
                      | 'minify'
                      | 'debug'
                      | 'nonzero'
                      | 'null2zero'
                      | 'abs'
                      | 'absolute'
                      | 'display-absolute'
                      | 'flip'
                      | 'reversed'
                      | 'min2max'
                      | 'percentage'
                      | 'seconds'
                      | 'ms'
                      | 'milliseconds'
                      | 'unaligned'
                      | 'match-ids'
                      | 'match-names'
                      | 'anomaly-bit'
                      | 'jw-anomaly-rates'
                      | 'details'
                      | 'group-by-labels'
                      | 'natural-points'
                      | 'virtual-points'
                      | 'selected-tier'
                      | 'all-dimensions'
                      | 'label-quotes'
                      | 'objectrows'
                      | 'google_json'
                      | 'minimal-stats'
                      | 'minimal'
                      | 'long-json-keys'
                      | 'long-keys'
                      | 'mcp-info'
                      | 'rfc3339'
                      | 'cardinality-limit-all'
                    )[]
                  | undefined
                group?:
                  | 'min'
                  | 'max'
                  | 'avg'
                  | 'average'
                  | 'median'
                  | 'stddev'
                  | 'sum'
                  | 'incremental-sum'
                  | 'ses'
                  | 'des'
                  | 'cv'
                  | 'percentage-of-samples'
                  | 'countif'
                  | 'percentage-of-time'
                  | 'number-of-flaps'
                  | 'number-of-times'
                  | 'percentile'
                  | 'percentile25'
                  | 'percentile50'
                  | 'percentile75'
                  | 'percentile80'
                  | 'percentile90'
                  | 'percentile95'
                  | 'percentile97'
                  | 'percentile98'
                  | 'percentile99'
                  | 'trimmed-mean'
                  | 'trimmed-mean1'
                  | 'trimmed-mean2'
                  | 'trimmed-mean3'
                  | 'trimmed-mean5'
                  | 'trimmed-mean10'
                  | 'trimmed-mean15'
                  | 'trimmed-mean20'
                  | 'trimmed-mean25'
                  | 'trimmed-median'
                  | 'trimmed-median1'
                  | 'trimmed-median2'
                  | 'trimmed-median3'
                  | 'trimmed-median5'
                  | 'trimmed-median10'
                  | 'trimmed-median15'
                  | 'trimmed-median20'
                  | 'trimmed-median25'
                  | 'ema'
                  | 'extremes'
                  | 'latest'
                  | undefined
                group_options?: string | undefined
                limit?: number | undefined
                cardinality_limit?: number | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 504
          }
    }
  } & {
    '/api/v1/metric_correlations': {
      $get:
        | {
            input: {
              query: {
                method?: 'ks2' | 'volume' | 'anomaly-rate' | 'value' | undefined
                baseline_after?: number | undefined
                baseline_before?: number | undefined
                after?: number | undefined
                before?: number | undefined
                points?: number | undefined
                tier?: number | undefined
                timeout?: number | undefined
                options?:
                  | (
                      | 'jsonwrap'
                      | 'raw'
                      | 'minify'
                      | 'debug'
                      | 'nonzero'
                      | 'null2zero'
                      | 'abs'
                      | 'absolute'
                      | 'display-absolute'
                      | 'flip'
                      | 'reversed'
                      | 'min2max'
                      | 'percentage'
                      | 'seconds'
                      | 'ms'
                      | 'milliseconds'
                      | 'unaligned'
                      | 'match-ids'
                      | 'match-names'
                      | 'anomaly-bit'
                      | 'jw-anomaly-rates'
                      | 'details'
                      | 'group-by-labels'
                      | 'natural-points'
                      | 'virtual-points'
                      | 'selected-tier'
                      | 'all-dimensions'
                      | 'label-quotes'
                      | 'objectrows'
                      | 'google_json'
                      | 'minimal-stats'
                      | 'minimal'
                      | 'long-json-keys'
                      | 'long-keys'
                      | 'mcp-info'
                      | 'rfc3339'
                      | 'cardinality-limit-all'
                    )[]
                  | undefined
                group?:
                  | 'min'
                  | 'max'
                  | 'avg'
                  | 'average'
                  | 'median'
                  | 'stddev'
                  | 'sum'
                  | 'incremental-sum'
                  | 'ses'
                  | 'des'
                  | 'cv'
                  | 'percentage-of-samples'
                  | 'countif'
                  | 'percentage-of-time'
                  | 'number-of-flaps'
                  | 'number-of-times'
                  | 'percentile'
                  | 'percentile25'
                  | 'percentile50'
                  | 'percentile75'
                  | 'percentile80'
                  | 'percentile90'
                  | 'percentile95'
                  | 'percentile97'
                  | 'percentile98'
                  | 'percentile99'
                  | 'trimmed-mean'
                  | 'trimmed-mean1'
                  | 'trimmed-mean2'
                  | 'trimmed-mean3'
                  | 'trimmed-mean5'
                  | 'trimmed-mean10'
                  | 'trimmed-mean15'
                  | 'trimmed-mean20'
                  | 'trimmed-mean25'
                  | 'trimmed-median'
                  | 'trimmed-median1'
                  | 'trimmed-median2'
                  | 'trimmed-median3'
                  | 'trimmed-median5'
                  | 'trimmed-median10'
                  | 'trimmed-median15'
                  | 'trimmed-median20'
                  | 'trimmed-median25'
                  | 'ema'
                  | 'extremes'
                  | 'latest'
                  | undefined
                group_options?: string | undefined
                limit?: number | undefined
                cardinality_limit?: number | undefined
              }
            }
            output: MetricCorrelations
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                method?: 'ks2' | 'volume' | 'anomaly-rate' | 'value' | undefined
                baseline_after?: number | undefined
                baseline_before?: number | undefined
                after?: number | undefined
                before?: number | undefined
                points?: number | undefined
                tier?: number | undefined
                timeout?: number | undefined
                options?:
                  | (
                      | 'jsonwrap'
                      | 'raw'
                      | 'minify'
                      | 'debug'
                      | 'nonzero'
                      | 'null2zero'
                      | 'abs'
                      | 'absolute'
                      | 'display-absolute'
                      | 'flip'
                      | 'reversed'
                      | 'min2max'
                      | 'percentage'
                      | 'seconds'
                      | 'ms'
                      | 'milliseconds'
                      | 'unaligned'
                      | 'match-ids'
                      | 'match-names'
                      | 'anomaly-bit'
                      | 'jw-anomaly-rates'
                      | 'details'
                      | 'group-by-labels'
                      | 'natural-points'
                      | 'virtual-points'
                      | 'selected-tier'
                      | 'all-dimensions'
                      | 'label-quotes'
                      | 'objectrows'
                      | 'google_json'
                      | 'minimal-stats'
                      | 'minimal'
                      | 'long-json-keys'
                      | 'long-keys'
                      | 'mcp-info'
                      | 'rfc3339'
                      | 'cardinality-limit-all'
                    )[]
                  | undefined
                group?:
                  | 'min'
                  | 'max'
                  | 'avg'
                  | 'average'
                  | 'median'
                  | 'stddev'
                  | 'sum'
                  | 'incremental-sum'
                  | 'ses'
                  | 'des'
                  | 'cv'
                  | 'percentage-of-samples'
                  | 'countif'
                  | 'percentage-of-time'
                  | 'number-of-flaps'
                  | 'number-of-times'
                  | 'percentile'
                  | 'percentile25'
                  | 'percentile50'
                  | 'percentile75'
                  | 'percentile80'
                  | 'percentile90'
                  | 'percentile95'
                  | 'percentile97'
                  | 'percentile98'
                  | 'percentile99'
                  | 'trimmed-mean'
                  | 'trimmed-mean1'
                  | 'trimmed-mean2'
                  | 'trimmed-mean3'
                  | 'trimmed-mean5'
                  | 'trimmed-mean10'
                  | 'trimmed-mean15'
                  | 'trimmed-mean20'
                  | 'trimmed-mean25'
                  | 'trimmed-median'
                  | 'trimmed-median1'
                  | 'trimmed-median2'
                  | 'trimmed-median3'
                  | 'trimmed-median5'
                  | 'trimmed-median10'
                  | 'trimmed-median15'
                  | 'trimmed-median20'
                  | 'trimmed-median25'
                  | 'ema'
                  | 'extremes'
                  | 'latest'
                  | undefined
                group_options?: string | undefined
                limit?: number | undefined
                cardinality_limit?: number | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: {
              query: {
                method?: 'ks2' | 'volume' | 'anomaly-rate' | 'value' | undefined
                baseline_after?: number | undefined
                baseline_before?: number | undefined
                after?: number | undefined
                before?: number | undefined
                points?: number | undefined
                tier?: number | undefined
                timeout?: number | undefined
                options?:
                  | (
                      | 'jsonwrap'
                      | 'raw'
                      | 'minify'
                      | 'debug'
                      | 'nonzero'
                      | 'null2zero'
                      | 'abs'
                      | 'absolute'
                      | 'display-absolute'
                      | 'flip'
                      | 'reversed'
                      | 'min2max'
                      | 'percentage'
                      | 'seconds'
                      | 'ms'
                      | 'milliseconds'
                      | 'unaligned'
                      | 'match-ids'
                      | 'match-names'
                      | 'anomaly-bit'
                      | 'jw-anomaly-rates'
                      | 'details'
                      | 'group-by-labels'
                      | 'natural-points'
                      | 'virtual-points'
                      | 'selected-tier'
                      | 'all-dimensions'
                      | 'label-quotes'
                      | 'objectrows'
                      | 'google_json'
                      | 'minimal-stats'
                      | 'minimal'
                      | 'long-json-keys'
                      | 'long-keys'
                      | 'mcp-info'
                      | 'rfc3339'
                      | 'cardinality-limit-all'
                    )[]
                  | undefined
                group?:
                  | 'min'
                  | 'max'
                  | 'avg'
                  | 'average'
                  | 'median'
                  | 'stddev'
                  | 'sum'
                  | 'incremental-sum'
                  | 'ses'
                  | 'des'
                  | 'cv'
                  | 'percentage-of-samples'
                  | 'countif'
                  | 'percentage-of-time'
                  | 'number-of-flaps'
                  | 'number-of-times'
                  | 'percentile'
                  | 'percentile25'
                  | 'percentile50'
                  | 'percentile75'
                  | 'percentile80'
                  | 'percentile90'
                  | 'percentile95'
                  | 'percentile97'
                  | 'percentile98'
                  | 'percentile99'
                  | 'trimmed-mean'
                  | 'trimmed-mean1'
                  | 'trimmed-mean2'
                  | 'trimmed-mean3'
                  | 'trimmed-mean5'
                  | 'trimmed-mean10'
                  | 'trimmed-mean15'
                  | 'trimmed-mean20'
                  | 'trimmed-mean25'
                  | 'trimmed-median'
                  | 'trimmed-median1'
                  | 'trimmed-median2'
                  | 'trimmed-median3'
                  | 'trimmed-median5'
                  | 'trimmed-median10'
                  | 'trimmed-median15'
                  | 'trimmed-median20'
                  | 'trimmed-median25'
                  | 'ema'
                  | 'extremes'
                  | 'latest'
                  | undefined
                group_options?: string | undefined
                limit?: number | undefined
                cardinality_limit?: number | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: {
              query: {
                method?: 'ks2' | 'volume' | 'anomaly-rate' | 'value' | undefined
                baseline_after?: number | undefined
                baseline_before?: number | undefined
                after?: number | undefined
                before?: number | undefined
                points?: number | undefined
                tier?: number | undefined
                timeout?: number | undefined
                options?:
                  | (
                      | 'jsonwrap'
                      | 'raw'
                      | 'minify'
                      | 'debug'
                      | 'nonzero'
                      | 'null2zero'
                      | 'abs'
                      | 'absolute'
                      | 'display-absolute'
                      | 'flip'
                      | 'reversed'
                      | 'min2max'
                      | 'percentage'
                      | 'seconds'
                      | 'ms'
                      | 'milliseconds'
                      | 'unaligned'
                      | 'match-ids'
                      | 'match-names'
                      | 'anomaly-bit'
                      | 'jw-anomaly-rates'
                      | 'details'
                      | 'group-by-labels'
                      | 'natural-points'
                      | 'virtual-points'
                      | 'selected-tier'
                      | 'all-dimensions'
                      | 'label-quotes'
                      | 'objectrows'
                      | 'google_json'
                      | 'minimal-stats'
                      | 'minimal'
                      | 'long-json-keys'
                      | 'long-keys'
                      | 'mcp-info'
                      | 'rfc3339'
                      | 'cardinality-limit-all'
                    )[]
                  | undefined
                group?:
                  | 'min'
                  | 'max'
                  | 'avg'
                  | 'average'
                  | 'median'
                  | 'stddev'
                  | 'sum'
                  | 'incremental-sum'
                  | 'ses'
                  | 'des'
                  | 'cv'
                  | 'percentage-of-samples'
                  | 'countif'
                  | 'percentage-of-time'
                  | 'number-of-flaps'
                  | 'number-of-times'
                  | 'percentile'
                  | 'percentile25'
                  | 'percentile50'
                  | 'percentile75'
                  | 'percentile80'
                  | 'percentile90'
                  | 'percentile95'
                  | 'percentile97'
                  | 'percentile98'
                  | 'percentile99'
                  | 'trimmed-mean'
                  | 'trimmed-mean1'
                  | 'trimmed-mean2'
                  | 'trimmed-mean3'
                  | 'trimmed-mean5'
                  | 'trimmed-mean10'
                  | 'trimmed-mean15'
                  | 'trimmed-mean20'
                  | 'trimmed-mean25'
                  | 'trimmed-median'
                  | 'trimmed-median1'
                  | 'trimmed-median2'
                  | 'trimmed-median3'
                  | 'trimmed-median5'
                  | 'trimmed-median10'
                  | 'trimmed-median15'
                  | 'trimmed-median20'
                  | 'trimmed-median25'
                  | 'ema'
                  | 'extremes'
                  | 'latest'
                  | undefined
                group_options?: string | undefined
                limit?: number | undefined
                cardinality_limit?: number | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 404
          }
        | {
            input: {
              query: {
                method?: 'ks2' | 'volume' | 'anomaly-rate' | 'value' | undefined
                baseline_after?: number | undefined
                baseline_before?: number | undefined
                after?: number | undefined
                before?: number | undefined
                points?: number | undefined
                tier?: number | undefined
                timeout?: number | undefined
                options?:
                  | (
                      | 'jsonwrap'
                      | 'raw'
                      | 'minify'
                      | 'debug'
                      | 'nonzero'
                      | 'null2zero'
                      | 'abs'
                      | 'absolute'
                      | 'display-absolute'
                      | 'flip'
                      | 'reversed'
                      | 'min2max'
                      | 'percentage'
                      | 'seconds'
                      | 'ms'
                      | 'milliseconds'
                      | 'unaligned'
                      | 'match-ids'
                      | 'match-names'
                      | 'anomaly-bit'
                      | 'jw-anomaly-rates'
                      | 'details'
                      | 'group-by-labels'
                      | 'natural-points'
                      | 'virtual-points'
                      | 'selected-tier'
                      | 'all-dimensions'
                      | 'label-quotes'
                      | 'objectrows'
                      | 'google_json'
                      | 'minimal-stats'
                      | 'minimal'
                      | 'long-json-keys'
                      | 'long-keys'
                      | 'mcp-info'
                      | 'rfc3339'
                      | 'cardinality-limit-all'
                    )[]
                  | undefined
                group?:
                  | 'min'
                  | 'max'
                  | 'avg'
                  | 'average'
                  | 'median'
                  | 'stddev'
                  | 'sum'
                  | 'incremental-sum'
                  | 'ses'
                  | 'des'
                  | 'cv'
                  | 'percentage-of-samples'
                  | 'countif'
                  | 'percentage-of-time'
                  | 'number-of-flaps'
                  | 'number-of-times'
                  | 'percentile'
                  | 'percentile25'
                  | 'percentile50'
                  | 'percentile75'
                  | 'percentile80'
                  | 'percentile90'
                  | 'percentile95'
                  | 'percentile97'
                  | 'percentile98'
                  | 'percentile99'
                  | 'trimmed-mean'
                  | 'trimmed-mean1'
                  | 'trimmed-mean2'
                  | 'trimmed-mean3'
                  | 'trimmed-mean5'
                  | 'trimmed-mean10'
                  | 'trimmed-mean15'
                  | 'trimmed-mean20'
                  | 'trimmed-mean25'
                  | 'trimmed-median'
                  | 'trimmed-median1'
                  | 'trimmed-median2'
                  | 'trimmed-median3'
                  | 'trimmed-median5'
                  | 'trimmed-median10'
                  | 'trimmed-median15'
                  | 'trimmed-median20'
                  | 'trimmed-median25'
                  | 'ema'
                  | 'extremes'
                  | 'latest'
                  | undefined
                group_options?: string | undefined
                limit?: number | undefined
                cardinality_limit?: number | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 504
          }
    }
  } & {
    '/api/v1/function': {
      $get:
        | {
            input: { query: { function: string; timeout?: number | undefined } }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { query: { function: string; timeout?: number | undefined } }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { query: { function: string; timeout?: number | undefined } }
            output: {}
            outputFormat: string
            status: 404
          }
        | {
            input: { query: { function: string; timeout?: number | undefined } }
            output: {}
            outputFormat: string
            status: 500
          }
        | {
            input: { query: { function: string; timeout?: number | undefined } }
            output: {}
            outputFormat: string
            status: 503
          }
        | {
            input: { query: { function: string; timeout?: number | undefined } }
            output: {}
            outputFormat: string
            status: 504
          }
        | {
            input: { query: { function: string; timeout?: number | undefined } }
            output: {}
            outputFormat: string
            status: 591
          }
    }
  } & {
    '/api/v1/functions': { $get: { input: {}; output: {}; outputFormat: string; status: 200 } }
  } & {
    '/api/v1/alarms': {
      $get: {
        input: { query: { all?: boolean | undefined; active?: boolean | undefined } }
        output: Alarms
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/v1/alarms_values': {
      $get: {
        input: { query: { all?: boolean | undefined; active?: boolean | undefined } }
        output: AlarmsValues
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/v1/alarm_log': {
      $get: {
        input: { query: { after?: number | undefined } }
        output: AlarmLogEntry[]
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/v1/alarm_count': {
      $get:
        | {
            input: {
              query: {
                context?: string | undefined
                status?:
                  | 'REMOVED'
                  | 'UNDEFINED'
                  | 'UNINITIALIZED'
                  | 'CLEAR'
                  | 'RAISED'
                  | 'WARNING'
                  | 'CRITICAL'
                  | undefined
              }
            }
            output: number[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                context?: string | undefined
                status?:
                  | 'REMOVED'
                  | 'UNDEFINED'
                  | 'UNINITIALIZED'
                  | 'CLEAR'
                  | 'RAISED'
                  | 'WARNING'
                  | 'CRITICAL'
                  | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 500
          }
    }
  } & {
    '/api/v1/alarm_variables': {
      $get:
        | {
            input: { query: { chart: string } }
            output: AlarmVariables
            outputFormat: 'json'
            status: 200
          }
        | { input: { query: { chart: string } }; output: {}; outputFormat: string; status: 400 }
        | { input: { query: { chart: string } }; output: {}; outputFormat: string; status: 404 }
        | { input: { query: { chart: string } }; output: {}; outputFormat: string; status: 500 }
    }
  } & {
    '/api/v1/manage/health': {
      $get:
        | {
            input: {
              query: {
                cmd?:
                  | 'DISABLE ALL'
                  | 'SILENCE ALL'
                  | 'DISABLE'
                  | 'SILENCE'
                  | 'RESET'
                  | 'LIST'
                  | undefined
                alarm?: string | undefined
                chart?: string | undefined
                context?: string | undefined
                hosts?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: {
              query: {
                cmd?:
                  | 'DISABLE ALL'
                  | 'SILENCE ALL'
                  | 'DISABLE'
                  | 'SILENCE'
                  | 'RESET'
                  | 'LIST'
                  | undefined
                alarm?: string | undefined
                chart?: string | undefined
                context?: string | undefined
                hosts?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 403
          }
    }
  } & {
    '/api/v1/aclk': { $get: { input: {}; output: AclkState; outputFormat: 'json'; status: 200 } }
  } & {
    '/api/v1/variable': {
      $get:
        | {
            input: { query: { chart: string; variable: string } }
            output: number
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { query: { chart: string; variable: string } }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { query: { chart: string; variable: string } }
            output: {}
            outputFormat: string
            status: 404
          }
    }
  } & {
    '/api/v1/registry': {
      $get:
        | {
            input: {
              query: {
                action: 'hello' | 'access' | 'delete' | 'search' | 'switch'
                machine?: string | undefined
                name?: string | undefined
                url?: string | undefined
                delete_url?: string | undefined
                for?: string | undefined
                to?: string | undefined
              }
            }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                action: 'hello' | 'access' | 'delete' | 'search' | 'switch'
                machine?: string | undefined
                name?: string | undefined
                url?: string | undefined
                delete_url?: string | undefined
                for?: string | undefined
                to?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 400
          }
    }
  } & {
    '/api/v1/dbengine_stats': {
      $get:
        | {
            input: {}
            output: { [x: string]: { [x: string]: unknown } }
            outputFormat: 'json'
            status: 200
          }
        | { input: {}; output: {}; outputFormat: string; status: 404 }
        | { input: {}; output: {}; outputFormat: string; status: 503 }
    }
  } & {
    '/api/v1/ml_info': {
      $get:
        | { input: {}; output: { [x: string]: unknown }; outputFormat: 'json'; status: 200 }
        | { input: {}; output: {}; outputFormat: string; status: 503 }
    }
  },
  '/'
>
export default routes
