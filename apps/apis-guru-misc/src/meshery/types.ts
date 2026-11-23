type UUID = number[]
type Map = { [x: string]: { [x: string]: unknown } }
type MesheryApplication = {
  application_file?: string | undefined
  created_at?: string | undefined
  id?: UUID | undefined
  location?: Map | undefined
  name?: string | undefined
  updated_at?: string | undefined
  user_id?: string | undefined
}
type ApplicationsAPIResponse = {
  applications?: MesheryApplication[] | undefined
  page?: bigint | undefined
  page_size?: bigint | undefined
  total_count?: bigint | undefined
}
type MesheryFilter = {
  created_at?: string | undefined
  filter_file?: string | undefined
  id?: UUID | undefined
  location?: Map | undefined
  name?: string | undefined
  updated_at?: string | undefined
  user_id?: string | undefined
}
type FiltersAPIResponse = {
  filters?: MesheryFilter[] | undefined
  page?: bigint | undefined
  page_size?: bigint | undefined
  total_count?: bigint | undefined
}
type MesheryPattern = {
  created_at?: string | undefined
  id?: UUID | undefined
  location?: Map | undefined
  name?: string | undefined
  pattern_file?: string | undefined
  updated_at?: string | undefined
  user_id?: string | undefined
}
type PatternsAPIResponse = {
  page?: bigint | undefined
  page_size?: bigint | undefined
  patterns?: MesheryPattern[] | undefined
  total_count?: bigint | undefined
}
type PerformanceTestConfigClientProtocol = number
type PerformanceTestConfigClient = {
  body?: string | undefined
  connections?: number | undefined
  content_type?: string | undefined
  cookies?: { [x: string]: string } | undefined
  endpoint_urls?: string[] | undefined
  headers?: { [x: string]: string } | undefined
  internal?: boolean | undefined
  load_generator?: string | undefined
  protocol?: PerformanceTestConfigClientProtocol | undefined
  rps?: bigint | undefined
}
type PerformanceTestConfig = {
  clients?: PerformanceTestConfigClient[] | undefined
  duration?: string | undefined
  id?: string | undefined
  labels?: { [x: string]: string } | undefined
  name?: string | undefined
  smp_version?: string | undefined
}
type RunnerResults = {
  ActualDuration?: bigint | undefined
  ActualQPS?: number | undefined
  DurationHistogram?:
    | {
        Avg?: number | undefined
        Max?: number | undefined
        Min?: number | undefined
        Percentiles?: { Percentile?: number | undefined; Value?: number | undefined }[] | undefined
      }
    | undefined
  StartTime?: string | undefined
  URL?: string | undefined
  'load-generator'?: string | undefined
}
type PerformanceResult = {
  mesh?: string | undefined
  meshery_id?: UUID | undefined
  name?: string | undefined
  performance_profile?: UUID | undefined
  runner_results?: RunnerResults | undefined
  server_board_config?: { [x: string]: unknown } | undefined
  server_metrics?: { [x: string]: unknown } | undefined
  test_start_time?: string | undefined
  user_id?: UUID | undefined
}
type PerformanceResultsAPIResponse = {
  page?: bigint | undefined
  page_size?: bigint | undefined
  results?: PerformanceResult[] | undefined
  total_count?: bigint | undefined
}
type LatenciesMs = {
  Average?: number | undefined
  Max?: number | undefined
  Min?: number | undefined
  P50?: number | undefined
  P90?: number | undefined
  P99?: number | undefined
}
type PerformanceSpec = {
  ActualQPS?: number | undefined
  DetailsURI?: string | undefined
  EndTime?: string | undefined
  EnvID?: string | undefined
  Latencies?: LatenciesMs | undefined
  MeshConfigID?: string | undefined
  SMPVersion?: string | undefined
  StartTime?: string | undefined
  TestID?: string | undefined
}
type Feature = string
type Capability = { endpoint?: string | undefined; feature?: Feature | undefined }
type Capabilities = Capability[]
type GraphQLExtension = { component?: string | undefined; path?: string | undefined }
type GraphQLExtensions = GraphQLExtension[]
type Href = { external?: boolean | undefined; uri?: string | undefined }
type NavigatorExtension = {
  children?: NavigatorExtensions | undefined
  component?: string | undefined
  href?: Href | undefined
  icon?: string | undefined
  link?: boolean | undefined
  show?: boolean | undefined
  title?: string | undefined
}
type NavigatorExtensions = NavigatorExtension[]
type UserPrefsExtension = { component?: string | undefined }
type UserPrefsExtensions = UserPrefsExtension[]
type Extensions = {
  graphql?: GraphQLExtensions | undefined
  navigator?: NavigatorExtensions | undefined
  user_prefs?: UserPrefsExtensions | undefined
}
type ProviderType = string
type ProviderProperties = {
  capabilities?: Capabilities | undefined
  extensions?: Extensions | undefined
  package_url?: string | undefined
  package_version?: string | undefined
  provider_description?: string[] | undefined
  provider_name?: string | undefined
  provider_type?: ProviderType | undefined
  provider_url?: string | undefined
}
type OpCategory = number
type SupportedOperation = {
  category?: OpCategory | undefined
  key?: string | undefined
  value?: string | undefined
}
type Adapter = {
  adapter_location?: string | undefined
  git_commit_sha?: string | undefined
  name?: string | undefined
  ops?: SupportedOperation[] | undefined
  version?: string | undefined
}
type K8SNode = {
  allocatable_cpu?: string | undefined
  allocatable_memory?: string | undefined
  architecture?: string | undefined
  capacity_cpu?: string | undefined
  capacity_memory?: string | undefined
  container_runtime_version?: string | undefined
  hostname?: string | undefined
  internal_ip?: string | undefined
  kubelet_version?: string | undefined
  kubeproxy_version?: string | undefined
  operating_system?: string | undefined
  os_image?: string | undefined
}
type K8SConfig = {
  clusterConfigured?: boolean | undefined
  config?: number[] | undefined
  configuredServer?: string | undefined
  contextName?: string | undefined
  inClusterConfig?: boolean | undefined
  k8sfile?: string | undefined
  nodes?: K8SNode[] | undefined
  server_version?: string | undefined
}
type K8SContext = {
  clusterName?: string | undefined
  contextName?: string | undefined
  currentContext?: boolean | undefined
}
type Time = { [x: string]: unknown }
type FieldsV1 = { [x: string]: unknown }
type ManagedFieldsOperationType = string
type ManagedFieldsEntry = {
  apiVersion?: string | undefined
  fieldsType?: string | undefined
  fieldsV1?: FieldsV1 | undefined
  manager?: string | undefined
  operation?: ManagedFieldsOperationType | undefined
  time?: Time | undefined
}
type UID = string
type OwnerReference = {
  apiVersion?: string | undefined
  blockOwnerDeletion?: boolean | undefined
  controller?: boolean | undefined
  kind?: string | undefined
  name?: string | undefined
  uid?: UID | undefined
}
type ServiceExternalTrafficPolicyType = string
type IPFamily = string
type Protocol = string
type Type = bigint
type IntOrString = {
  IntVal?: number | undefined
  StrVal?: string | undefined
  Type?: Type | undefined
}
type ServicePort = {
  appProtocol?: string | undefined
  name?: string | undefined
  nodePort?: number | undefined
  port?: number | undefined
  protocol?: Protocol | undefined
  targetPort?: IntOrString | undefined
}
type ServiceAffinity = string
type ClientIPConfig = { timeoutSeconds?: number | undefined }
type SessionAffinityConfig = { clientIP?: ClientIPConfig | undefined }
type ServiceType = string
type ServiceSpec = {
  clusterIP?: string | undefined
  externalIPs?: string[] | undefined
  externalName?: string | undefined
  externalTrafficPolicy?: ServiceExternalTrafficPolicyType | undefined
  healthCheckNodePort?: number | undefined
  ipFamily?: IPFamily | undefined
  loadBalancerIP?: string | undefined
  loadBalancerSourceRanges?: string[] | undefined
  ports?: ServicePort[] | undefined
  publishNotReadyAddresses?: boolean | undefined
  selector?: { [x: string]: string } | undefined
  sessionAffinity?: ServiceAffinity | undefined
  sessionAffinityConfig?: SessionAffinityConfig | undefined
  topologyKeys?: string[] | undefined
  type?: ServiceType | undefined
}
type LoadBalancerIngress = { hostname?: string | undefined; ip?: string | undefined }
type LoadBalancerStatus = { ingress?: LoadBalancerIngress[] | undefined }
type ServiceStatus = { loadBalancer?: LoadBalancerStatus | undefined }
type Service = {
  annotations?: { [x: string]: string } | undefined
  apiVersion?: string | undefined
  clusterName?: string | undefined
  creationTimestamp?: Time | undefined
  deletionGracePeriodSeconds?: bigint | undefined
  deletionTimestamp?: Time | undefined
  finalizers?: string[] | undefined
  generateName?: string | undefined
  generation?: bigint | undefined
  kind?: string | undefined
  labels?: { [x: string]: string } | undefined
  managedFields?: ManagedFieldsEntry[] | undefined
  name?: string | undefined
  namespace?: string | undefined
  ownerReferences?: OwnerReference[] | undefined
  resourceVersion?: string | undefined
  selfLink?: string | undefined
  spec?: ServiceSpec | undefined
  status?: ServiceStatus | undefined
  uid?: UID | undefined
}
type AlertEvaluator = { params?: number[] | undefined; type?: string | undefined }
type AlertOperator = { type?: string | undefined }
type AlertQuery = { params?: string[] | undefined }
type AlertReducer = { params?: string[] | undefined; type?: string | undefined }
type AlertCondition = {
  evaluator?: AlertEvaluator | undefined
  operator?: AlertOperator | undefined
  query?: AlertQuery | undefined
  reducer?: AlertReducer | undefined
  type?: string | undefined
}
type AlertNotification = {
  disableResolveMessage?: boolean | undefined
  frequency?: string | undefined
  id?: bigint | undefined
  isDefault?: boolean | undefined
  name?: string | undefined
  sendReminder?: boolean | undefined
  settings?: { [x: string]: unknown } | undefined
  type?: string | undefined
  uid?: string | undefined
}
type Alert = {
  alertRuleTags?: { [x: string]: string } | undefined
  conditions?: AlertCondition[] | undefined
  executionErrorState?: string | undefined
  for?: string | undefined
  frequency?: string | undefined
  handler?: bigint | undefined
  message?: string | undefined
  name?: string | undefined
  noDataState?: string | undefined
  notifications?: AlertNotification[] | undefined
}
type Column = { text?: string | undefined; value?: string | undefined }
type FieldConfig = {
  defaults?:
    | {
        threshold?:
          | {
              mode?: string | undefined
              steps?: { color?: string | undefined; value?: string | undefined }[] | undefined
            }
          | undefined
        unit?: string | undefined
      }
    | undefined
}
type Gauge = {
  maxValue?: number | undefined
  minValue?: number | undefined
  show?: boolean | undefined
  thresholdLabels?: boolean | undefined
  thresholdMarkers?: boolean | undefined
}
type Legend = {
  alignAsTable?: boolean | undefined
  avg?: boolean | undefined
  current?: boolean | undefined
  hideEmpty?: boolean | undefined
  hideZero?: boolean | undefined
  max?: boolean | undefined
  min?: boolean | undefined
  rightSide?: boolean | undefined
  show?: boolean | undefined
  sideWidth?: bigint | undefined
  total?: boolean | undefined
  values?: boolean | undefined
}
type Link = {
  asDropdown?: boolean | undefined
  dashUri?: string | undefined
  dashboard?: string | undefined
  icon?: string | undefined
  includeVars?: boolean | undefined
  keepTime?: boolean | undefined
  params?: string | undefined
  tags?: string[] | undefined
  targetBlank?: boolean | undefined
  title?: string | undefined
  tooltip?: string | undefined
  type?: string | undefined
  url?: string | undefined
}
type MapType = { name?: string | undefined; value?: bigint | undefined }
type IntString = { Valid?: boolean | undefined; Value?: bigint | undefined }
type Options = {
  colorMode?: string | undefined
  content?: string | undefined
  displayMode?: string | undefined
  graphMode?: string | undefined
  justifyMode?: string | undefined
  mode?: string | undefined
  orientation?: string | undefined
  reduceOptions?:
    | { calcs?: string[] | undefined; fields?: string | undefined; values?: boolean | undefined }
    | undefined
  textMode?: string | undefined
}
type RangeMap = { from?: string | undefined; text?: string | undefined; to?: string | undefined }
type BoolString = { Flag?: boolean | undefined; Value?: string | undefined }
type SeriesOverride = {
  alias?: string | undefined
  bars?: boolean | undefined
  color?: string | undefined
  dashes?: boolean | undefined
  fill?: bigint | undefined
  fillBelowTo?: string | undefined
  legend?: boolean | undefined
  lines?: boolean | undefined
  linewidth?: bigint | undefined
  nullPointMode?: string | undefined
  stack?: BoolString | undefined
  transform?: string | undefined
  yaxis?: bigint | undefined
  zindex?: bigint | undefined
}
type Sort = { col?: bigint | undefined; desc?: boolean | undefined }
type SparkLine = {
  fillColor?: string | undefined
  full?: boolean | undefined
  lineColor?: string | undefined
  show?: boolean | undefined
  ymax?: number | undefined
  ymin?: number | undefined
}
type ValueMap = { op?: string | undefined; text?: string | undefined; value?: string | undefined }
type ColumnStyle = {
  alias?: string | undefined
  colorMode?: string | undefined
  colors?: string[] | undefined
  dateFormat?: string | undefined
  decimals?: bigint | undefined
  link?: boolean | undefined
  linkTargetBlank?: boolean | undefined
  linkTooltip?: string | undefined
  linkUrl?: string | undefined
  mappingType?: bigint | undefined
  pattern?: string | undefined
  thresholds?: string[] | undefined
  type?: string | undefined
  unit?: string | undefined
  valueMaps?: ValueMap[] | undefined
}
type StackdriverAlignOption = {
  label?: string | undefined
  metricKinds?: string[] | undefined
  text?: string | undefined
  value?: string | undefined
  valueTypes?: string[] | undefined
}
type StackdriverAlignOptions = {
  expanded?: boolean | undefined
  label?: string | undefined
  options?: StackdriverAlignOption[] | undefined
}
type Target = {
  alias?: string | undefined
  aliasBy?: string | undefined
  alignOptions?: StackdriverAlignOptions[] | undefined
  alignmentPeriod?: string | undefined
  bucketAggs?:
    | {
        field?: string | undefined
        id?: string | undefined
        settings?:
          | {
              interval?: string | undefined
              min_doc_count?: { [x: string]: unknown } | undefined
              order?: string | undefined
              orderBy?: string | undefined
              size?: string | undefined
            }
          | undefined
        type?: string | undefined
      }[]
    | undefined
  crossSeriesReducer?: string | undefined
  datasource?: string | undefined
  dimensions?: { [x: string]: string } | undefined
  dsType?: string | undefined
  expr?: string | undefined
  filters?: string[] | undefined
  format?: string | undefined
  group?: { params?: string[] | undefined; type?: string | undefined }[] | undefined
  groupBys?: string[] | undefined
  hide?: boolean | undefined
  instant?: boolean | undefined
  interval?: string | undefined
  intervalFactor?: bigint | undefined
  legendFormat?: string | undefined
  measurement?: string | undefined
  metricColumn?: string | undefined
  metricKind?: string | undefined
  metricName?: string | undefined
  metricType?: string | undefined
  metrics?:
    | { field?: string | undefined; id?: string | undefined; type?: string | undefined }[]
    | undefined
  namespace?: string | undefined
  perSeriesAligner?: string | undefined
  period?: string | undefined
  projectName?: string | undefined
  query?: string | undefined
  rawQuery?: boolean | undefined
  rawSql?: string | undefined
  refId?: string | undefined
  region?: string | undefined
  select?: { params?: string[] | undefined; type?: string | undefined }[][] | undefined
  statistics?: string[] | undefined
  step?: bigint | undefined
  table?: string | undefined
  target?: string | undefined
  timeColumn?: string | undefined
  timeField?: string | undefined
  valueType?: string | undefined
  where?:
    | {
        datatype?: string | undefined
        name?: string | undefined
        params?: string[] | undefined
        type?: string | undefined
      }[]
    | undefined
}
type Tooltip = {
  msResolution?: boolean | undefined
  shared?: boolean | undefined
  sort?: bigint | undefined
  value_type?: string | undefined
}
type FloatString = { Valid?: boolean | undefined; Value?: number | undefined }
type Axis = {
  decimals?: bigint | undefined
  format?: string | undefined
  label?: string | undefined
  logBase?: bigint | undefined
  max?: FloatString | undefined
  min?: FloatString | undefined
  show?: boolean | undefined
}
type Panel = {
  alert?: Alert | undefined
  aliasColors?: { [x: string]: unknown } | undefined
  bars?: boolean | undefined
  cards?: { cardPadding?: number | undefined; cardRound?: number | undefined } | undefined
  collapsed?: boolean | undefined
  color?:
    | {
        cardColor?: string | undefined
        colorScale?: string | undefined
        colorScheme?: string | undefined
        exponent?: number | undefined
        max?: number | undefined
        min?: number | undefined
        mode?: string | undefined
      }
    | undefined
  colorBackground?: boolean | undefined
  colorValue?: boolean | undefined
  colors?: string[] | undefined
  columns?: Column[] | undefined
  content?: string | undefined
  dashLength?: bigint | undefined
  dashboardTags?: string[] | undefined
  dashes?: boolean | undefined
  dataFormat?: string | undefined
  datasource?: string | undefined
  decimals?: bigint | undefined
  description?: string | undefined
  editable?: boolean | undefined
  error?: boolean | undefined
  fieldConfig?: FieldConfig | undefined
  fill?: bigint | undefined
  folderId?: bigint | undefined
  format?: string | undefined
  gauge?: Gauge | undefined
  gridPos?:
    | {
        h?: bigint | undefined
        w?: bigint | undefined
        x?: bigint | undefined
        y?: bigint | undefined
      }
    | undefined
  headings?: boolean | undefined
  height?: { [x: string]: unknown } | undefined
  hideTimeOverride?: boolean | undefined
  hideZeroBuckets?: boolean | undefined
  highlightCards?: boolean | undefined
  id?: bigint | undefined
  isNew?: boolean | undefined
  leftYAxisLabel?: string | undefined
  legend?: Legend | undefined
  limit?: bigint | undefined
  lines?: boolean | undefined
  linewidth?: bigint | undefined
  links?: Link[] | undefined
  mappingType?: bigint | undefined
  mappingTypes?: MapType[] | undefined
  maxDataPoints?: IntString | undefined
  minSpan?: number | undefined
  mode?: string | undefined
  nameFilter?: string | undefined
  nullPointMode?: string | undefined
  onlyAlertsOnDashboard?: boolean | undefined
  options?: Options | undefined
  pageSize?: bigint | undefined
  panels?: Panel[] | undefined
  percentage?: boolean | undefined
  pointradius?: number | undefined
  points?: boolean | undefined
  postfix?: string | undefined
  postfixFontSize?: string | undefined
  prefix?: string | undefined
  prefixFontSize?: string | undefined
  query?: string | undefined
  rangeMaps?: RangeMap[] | undefined
  recent?: boolean | undefined
  renderer?: string | undefined
  repeat?: string | undefined
  repeatPanelId?: bigint | undefined
  reverseYBuckets?: boolean | undefined
  rightYAxisLabel?: string | undefined
  scopedVars?:
    | {
        [x: string]: {
          selected?: boolean | undefined
          text?: string | undefined
          value?: string | undefined
        }
      }
    | undefined
  scroll?: boolean | undefined
  search?: boolean | undefined
  seriesOverrides?: SeriesOverride[] | undefined
  show?: string | undefined
  showHeader?: boolean | undefined
  sort?: Sort | undefined
  sortOrder?: bigint | undefined
  spaceLength?: bigint | undefined
  span?: number | undefined
  sparkline?: SparkLine | undefined
  stack?: boolean | undefined
  starred?: boolean | undefined
  stateFilter?: string[] | undefined
  steppedLine?: boolean | undefined
  styles?: ColumnStyle[] | undefined
  tags?: string[] | undefined
  targets?: Target[] | undefined
  thresholds?: string | undefined
  timeFrom?: string | undefined
  timeShift?: string | undefined
  title?: string | undefined
  tooltip?: Tooltip | undefined
  tooltipDecimals?: bigint | undefined
  transform?: string | undefined
  transparent?: boolean | undefined
  type?: string | undefined
  valueFontSize?: string | undefined
  valueMaps?: ValueMap[] | undefined
  valueName?: string | undefined
  'x-axis'?: boolean | undefined
  xAxis?: { show?: boolean | undefined } | undefined
  xBucketNumber?: number | undefined
  xBucketSize?: string | undefined
  xaxis?: Axis | undefined
  'y-axis'?: boolean | undefined
  yAxis?:
    | {
        decimals?: bigint | undefined
        format?: string | undefined
        logBase?: bigint | undefined
        max?: string | undefined
        min?: string | undefined
        show?: boolean | undefined
        splitFactor?: number | undefined
      }
    | undefined
  yBucketBound?: string | undefined
  yBucketNumber?: number | undefined
  yBucketSize?: number | undefined
  y_formats?: string[] | undefined
  yaxes?: Axis[] | undefined
}
type GrafanaDataSource = { id?: bigint | undefined; name?: string | undefined }
type GrafanaTemplateVars = {
  datasource?: GrafanaDataSource | undefined
  hide?: number | undefined
  name?: string | undefined
  query?: string | undefined
  value?: { [x: string]: unknown } | undefined
}
type GrafanaBoard = {
  org_id?: bigint | undefined
  panels?: Panel[] | undefined
  slug?: string | undefined
  template_vars?: GrafanaTemplateVars[] | undefined
  title?: string | undefined
  uid?: string | undefined
  uri?: string | undefined
}
type SelectedGrafanaConfig = {
  board?: GrafanaBoard | undefined
  panels?: Panel[] | undefined
  templateVars?: string[] | undefined
}
type Grafana = {
  grafanaAPIKey?: string | undefined
  grafanaURL?: string | undefined
  selectedBoardsConfigs?: SelectedGrafanaConfig[] | undefined
}
type LoadTestPreferences = {
  c?: bigint | undefined
  gen?: string | undefined
  qps?: bigint | undefined
  t?: string | undefined
}
type Prometheus = {
  prometheusURL?: string | undefined
  selectedPrometheusBoardsConfigs?: SelectedGrafanaConfig[] | undefined
}
type Preference = {
  anonymousPerfResults?: boolean | undefined
  anonymousUsageStats?: boolean | undefined
  grafana?: Grafana | undefined
  k8sConfig?: K8SConfig | undefined
  loadTestPrefs?: LoadTestPreferences | undefined
  meshAdapters?: Adapter[] | undefined
  prometheus?: Prometheus | undefined
  updated_at?: string | undefined
}
type Version = {
  build?: string | undefined
  commitsha?: string | undefined
  latest?: string | undefined
  outdated?: boolean | undefined
  release_channel?: string | undefined
}
type GrafanaConfigParams = { grafanaAPIKey?: string | undefined; grafanaURL?: string | undefined }
type StringArray = string[]
type PerformanceProfile = {
  concurrent_request?: bigint | undefined
  content_type?: string | undefined
  created_at?: Time | undefined
  duration?: string | undefined
  endpoints?: StringArray | undefined
  id?: UUID | undefined
  last_run?: Time | undefined
  load_generators?: StringArray | undefined
  name?: string | undefined
  qps?: bigint | undefined
  request_body?: string | undefined
  request_cookies?: string | undefined
  request_headers?: string | undefined
  schedule?: UUID | undefined
  service_mesh?: string | undefined
  total_results?: bigint | undefined
  updated_at?: Time | undefined
}
type PerformanceProfilesAPIResponse = {
  page?: bigint | undefined
  page_size?: bigint | undefined
  profiles?: PerformanceProfile[] | undefined
  total_count?: bigint | undefined
}
type PerformanceProfileParameters = {
  concurrent_request?: bigint | undefined
  duration?: string | undefined
  endpoints?: string[] | undefined
  load_generators?: string[] | undefined
  name?: string | undefined
  qps?: bigint | undefined
  service_mesh?: string | undefined
}
type Schedule = { cron_expression?: string | undefined; id?: UUID | undefined }
type SchedulesAPIResponse = {
  page?: bigint | undefined
  page_size?: bigint | undefined
  schedules?: Schedule[] | undefined
  total_count?: bigint | undefined
}
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/api/application/': {
      $get: { input: {}; output: ApplicationsAPIResponse; outputFormat: 'json'; status: 200 }
      $post: { input: {}; output: MesheryApplication; outputFormat: 'json'; status: 200 }
    }
  } & {
    '/api/application/deploy': {
      $delete: { input: {}; output: {}; outputFormat: string; status: 200 }
      $post: {
        input: { form: { 'Upload Yaml/Yml File'?: File | undefined } }
        output: MesheryApplication
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/application/:id': {
      $delete: { input: { param: { id: string } }; output: {}; outputFormat: string; status: 200 }
      $get: {
        input: { param: { id: string } }
        output: MesheryApplication
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/filter': {
      $get: { input: {}; output: FiltersAPIResponse; outputFormat: 'json'; status: 200 }
      $post: { input: {}; output: MesheryFilter; outputFormat: 'json'; status: 200 }
    }
  } & {
    '/api/filter/file/:id': {
      $get: {
        input: { param: { id: string } }
        output: MesheryFilter
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/filter/:id': {
      $delete: { input: { param: { id: string } }; output: {}; outputFormat: string; status: 200 }
      $get: {
        input: { param: { id: string } }
        output: MesheryFilter
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/oam/:type': {
      $get: { input: { param: { type: string } }; output: {}; outputFormat: string; status: 200 }
      $post: { input: { param: { type: string } }; output: {}; outputFormat: string; status: 200 }
    }
  } & {
    '/api/pattern': {
      $get: { input: {}; output: PatternsAPIResponse; outputFormat: 'json'; status: 200 }
      $post: { input: {}; output: MesheryPattern; outputFormat: 'json'; status: 200 }
    }
  } & {
    '/api/pattern/deploy': {
      $delete: { input: {}; output: {}; outputFormat: string; status: 200 }
      $post: {
        input: { form: { 'Upload Yaml/Yml File'?: File | undefined } }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/api/pattern/:id': {
      $delete: { input: { param: { id: string } }; output: {}; outputFormat: string; status: 200 }
      $get: {
        input: { param: { id: string } }
        output: MesheryPattern
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/perf/profile': {
      $get: {
        input: { json: PerformanceTestConfig } & { form: PerformanceTestConfig }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/api/perf/profile/result': {
      $get: { input: {}; output: PerformanceResultsAPIResponse; outputFormat: 'json'; status: 200 }
    }
  } & {
    '/api/perf/profile/result/:id': {
      $get: {
        input: { param: { id: string } }
        output: PerformanceSpec
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/provider': {
      $get: {
        input: { query: { provider?: string | undefined } }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/api/provider/capabilities': {
      $get: { input: {}; output: {}; outputFormat: string; status: 200 }
    }
  } & {
    '/api/provider/extension': {
      $get: { input: {}; output: {}; outputFormat: string; status: 200 }
    }
  } & {
    '/api/providers': {
      $get: {
        input: {}
        output: { [x: string]: ProviderProperties }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/system/adapter/manage': {
      $delete: {
        input: { query: { adapter?: string | undefined } }
        output: {}
        outputFormat: string
        status: 200
      }
      $post: {
        input: { json: string } & { form: string }
        output: Adapter[]
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/system/adapter/operation': {
      $post: {
        input: {
          query: {
            adapter?: string | undefined
            query?: string | undefined
            customBody?: string | undefined
            namespace?: string | undefined
            deleteOp?: string | undefined
          }
        }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/api/system/adapters': {
      $get: {
        input: { query: { adapter?: string | undefined } }
        output: Adapter[]
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/system/kubernetes': {
      $delete: { input: {}; output: {}; outputFormat: string; status: 200 }
      $post: { input: {}; output: K8SConfig; outputFormat: 'json'; status: 200 }
    }
  } & {
    '/api/system/kubernetes/contexts': {
      $post: { input: {}; output: K8SContext[]; outputFormat: 'json'; status: 200 }
    }
  } & {
    '/api/system/kubernetes/ping': {
      $get: { input: {}; output: {}; outputFormat: string; status: 200 }
    }
  } & {
    '/api/system/meshsync/grafana': {
      $get: { input: {}; output: { [x: string]: Service[] }; outputFormat: 'json'; status: 200 }
    }
  } & {
    '/api/system/meshsync/prometheus': {
      $get: { input: {}; output: { [x: string]: Service[] }; outputFormat: 'json'; status: 200 }
    }
  } & {
    '/api/system/sync': {
      $get: { input: {}; output: Preference; outputFormat: 'json'; status: 200 }
    }
  } & {
    '/api/system/version': {
      $get: { input: {}; output: Version; outputFormat: 'json'; status: 200 }
    }
  } & {
    '/api/telemetry/metrics/board_import': {
      $post: { input: {}; output: GrafanaBoard; outputFormat: 'json'; status: 200 }
    }
  } & {
    '/api/telemetry/metrics/boards': {
      $post: {
        input: { json: SelectedGrafanaConfig[] } & { form: SelectedGrafanaConfig[] }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/api/telemetry/metrics/config': {
      $delete: { input: {}; output: {}; outputFormat: string; status: 200 }
      $get: { input: {}; output: Prometheus; outputFormat: 'json'; status: 200 }
      $post: {
        input: { json: string } & { form: string }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/api/telemetry/metrics/grafana/boards': {
      $get: {
        input: { query: { dashboardSearch?: string | undefined } }
        output: GrafanaBoard[]
        outputFormat: 'json'
        status: 200
      }
      $post: { input: {}; output: {}; outputFormat: string; status: 200 }
    }
  } & {
    '/api/telemetry/metrics/grafana/config': {
      $delete: { input: {}; output: {}; outputFormat: string; status: 200 }
      $get: { input: {}; output: Grafana; outputFormat: 'json'; status: 200 }
      $post: {
        input: { json: GrafanaConfigParams } & { form: GrafanaConfigParams }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/api/telemetry/metrics/grafana/ping': {
      $get: { input: {}; output: {}; outputFormat: string; status: 200 }
    }
  } & {
    '/api/telemetry/metrics/grafana/query': {
      $get: { input: {}; output: {}; outputFormat: string; status: 200 }
    }
  } & {
    '/api/telemetry/metrics/grafana/scan': {
      $get: { input: {}; output: { [x: string]: Service[] }; outputFormat: 'json'; status: 200 }
    }
  } & {
    '/api/telemetry/metrics/ping': {
      $get: { input: {}; output: {}; outputFormat: string; status: 200 }
    }
  } & {
    '/api/telemetry/metrics/query': {
      $get: { input: {}; output: {}; outputFormat: string; status: 200 }
    }
  } & {
    '/api/telemetry/metrics/static-board': {
      $get: { input: {}; output: { [x: string]: GrafanaBoard }; outputFormat: 'json'; status: 200 }
    }
  } & {
    '/api/user/login': { $get: { input: {}; output: {}; outputFormat: string; status: 200 } }
  } & {
    '/api/user/logout': { $get: { input: {}; output: {}; outputFormat: string; status: 200 } }
  } & {
    '/api/user/performance/profiles': {
      $get: { input: {}; output: PerformanceProfilesAPIResponse; outputFormat: 'json'; status: 200 }
      $post: {
        input: { json: PerformanceProfileParameters } & { form: PerformanceProfileParameters }
        output: PerformanceProfile
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/user/performance/profiles/results': {
      $get: { input: {}; output: PerformanceResultsAPIResponse; outputFormat: 'json'; status: 200 }
    }
  } & {
    '/api/user/performance/profiles/:id': {
      $delete: { input: { param: { id: string } }; output: {}; outputFormat: string; status: 200 }
      $get: {
        input: { param: { id: string } }
        output: PerformanceProfile
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/user/performance/profiles/:id/results': {
      $get: {
        input: { param: { id: string } }
        output: PerformanceResultsAPIResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/user/performance/profiles/:id/run': {
      $get: { input: { param: { id: string } }; output: {}; outputFormat: string; status: 200 }
    }
  } & {
    '/api/user/prefs': {
      $get: { input: {}; output: Preference; outputFormat: 'json'; status: 200 }
      $post: { input: {}; output: Preference; outputFormat: 'json'; status: 200 }
    }
  } & {
    '/api/user/prefs/perf': {
      $delete: {
        input: { query: { uuid?: string | undefined } }
        output: {}
        outputFormat: string
        status: 200
      }
      $get: {
        input: { query: { uuid?: string | undefined } }
        output: PerformanceTestConfig
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: { json: PerformanceTestConfig } & { form: PerformanceTestConfig }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/api/user/schedules': {
      $get: { input: {}; output: SchedulesAPIResponse; outputFormat: 'json'; status: 200 }
      $post: { input: {}; output: Schedule; outputFormat: 'json'; status: 200 }
    }
  } & {
    '/api/user/schedules/:id': {
      $delete: {
        input: { param: { id: string } }
        output: SchedulesAPIResponse
        outputFormat: 'json'
        status: 200
      }
      $get: {
        input: { param: { id: string } }
        output: Schedule
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/user/token': {
      $get: { input: {}; output: {}; outputFormat: string; status: 200 }
      $post: { input: {}; output: {}; outputFormat: string; status: 200 }
    }
  } & { '/provider': { $get: { input: {}; output: {}; outputFormat: string; status: 200 } } },
  '/'
>
export default routes
