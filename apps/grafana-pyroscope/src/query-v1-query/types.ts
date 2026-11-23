type ConnectProtocolVersion = 1
type ConnectTimeoutHeader = number
type QueryV1QueryType =
  | 'QUERY_UNSPECIFIED'
  | 'QUERY_LABEL_NAMES'
  | 'QUERY_LABEL_VALUES'
  | 'QUERY_SERIES_LABELS'
  | 'QUERY_TIME_SERIES'
  | 'QUERY_TREE'
  | 'QUERY_PPROF'
  | 'QUERY_HEATMAP'
  | 'QUERY_TIME_SERIES_COMPACT'
  | 'QUERY_PROFILE_PRESENCE'
  | 'QUERY_TIME_SERIES_ANALYSIS'
type QueryV1LabelNamesQuery = {}
type QueryV1LabelValuesQuery = { labelName?: string | undefined }
type QueryV1SeriesLabelsQuery = { labelNames?: string[] | undefined }
type TypesV1ExemplarType =
  | 'EXEMPLAR_TYPE_UNSPECIFIED'
  | 'EXEMPLAR_TYPE_NONE'
  | 'EXEMPLAR_TYPE_INDIVIDUAL'
  | 'EXEMPLAR_TYPE_SPAN'
type QueryV1TimeSeriesQuery = {
  step?: number | undefined
  groupBy?: string[] | undefined
  limit?: bigint | string | undefined
  exemplarType?: TypesV1ExemplarType | undefined
}
type TypesV1Location = { name?: string | undefined }
type TypesV1GoPGO = { keepLocations?: number | undefined; aggregateCallees?: boolean | undefined }
type TypesV1StackTraceSelector = {
  callSite?: TypesV1Location[] | undefined
  goPgo?: TypesV1GoPGO | undefined
}
type QueryV1TreeQuery = {
  maxNodes?: bigint | string | undefined
  spanSelector?: string[] | undefined
  stackTraceSelector?: TypesV1StackTraceSelector | undefined
  profileIdSelector?: string[] | undefined
  fullSymbols?: boolean | undefined
  traceIdSelector?: string[] | undefined
}
type QueryV1PprofQuery = {
  maxNodes?: bigint | string | undefined
  stackTraceSelector?: TypesV1StackTraceSelector | undefined
  profileIdSelector?: string[] | undefined
  spanSelector?: string[] | undefined
  traceIdSelector?: string[] | undefined
}
type QuerierV1HeatmapQueryType =
  | 'HEATMAP_QUERY_TYPE_UNSPECIFIED'
  | 'HEATMAP_QUERY_TYPE_INDIVIDUAL'
  | 'HEATMAP_QUERY_TYPE_SPAN'
type QueryV1HeatmapQuery = {
  step?: number | undefined
  groupBy?: string[] | undefined
  queryType?: QuerierV1HeatmapQueryType | undefined
  limit?: bigint | string | undefined
  exemplarType?: TypesV1ExemplarType | undefined
}
type QueryV1ProfilePresenceQuery = { profileIdSelector?: string[] | undefined }
type QueryV1TimeSeriesAnalysisConfig = {
  baselineWindow?: number | undefined
  confirmationWindow?: number | undefined
  minimumSustainedPoints?: number | undefined
  minimumRelativeChange?: number | undefined
  scoreThreshold?: number | undefined
  recoveryThresholdRatio?: number | undefined
  flatnessThreshold?: number | undefined
}
type QueryV1TimeSeriesAnalysisQuery = {
  step?: number | undefined
  groupBy?: string[] | undefined
  limit?: bigint | string | undefined
  config?: QueryV1TimeSeriesAnalysisConfig | undefined
}
type QueryV1Query = {
  queryType?: QueryV1QueryType | undefined
  labelNames?: QueryV1LabelNamesQuery | undefined
  labelValues?: QueryV1LabelValuesQuery | undefined
  seriesLabels?: QueryV1SeriesLabelsQuery | undefined
  timeSeries?: QueryV1TimeSeriesQuery | undefined
  tree?: QueryV1TreeQuery | undefined
  pprof?: QueryV1PprofQuery | undefined
  heatmap?: QueryV1HeatmapQuery | undefined
  timeSeriesCompact?: QueryV1TimeSeriesQuery | undefined
  profilePresence?: QueryV1ProfilePresenceQuery | undefined
  timeSeriesAnalysis?: QueryV1TimeSeriesAnalysisQuery | undefined
}
type QueryV1QueryNodeType = 'UNKNOWN' | 'MERGE' | 'READ'
type MetastoreV1Dataset = {
  format?: number | undefined
  tenant?: number | undefined
  name?: number | undefined
  minTime?: bigint | string | undefined
  maxTime?: bigint | string | undefined
  tableOfContents?: (bigint | string)[] | undefined
  size?: bigint | string | undefined
  labels?: number[] | undefined
}
type MetastoreV1BlockMeta = {
  formatVersion?: number | undefined
  id?: string | undefined
  tenant?: number | undefined
  shard?: number | undefined
  compactionLevel?: number | undefined
  minTime?: bigint | string | undefined
  maxTime?: bigint | string | undefined
  createdBy?: number | undefined
  metadataOffset?: bigint | string | undefined
  size?: bigint | string | undefined
  datasets?: MetastoreV1Dataset[] | undefined
  stringTable?: string[] | undefined
}
type QueryV1QueryNode = {
  type?: QueryV1QueryNodeType | undefined
  children?: QueryV1QueryNode[] | undefined
  blocks?: MetastoreV1BlockMeta[] | undefined
}
type QueryV1QueryPlan = { root?: QueryV1QueryNode | undefined }
type QueryV1InvokeOptions = {
  sanitizeOnMerge?: boolean | undefined
  collectDiagnostics?: boolean | undefined
  finalize?: boolean | undefined
}
type QueryV1InvokeRequest = {
  tenant?: string[] | undefined
  startTime?: bigint | string | undefined
  endTime?: bigint | string | undefined
  labelSelector?: string | undefined
  query?: QueryV1Query[] | undefined
  queryPlan?: QueryV1QueryPlan | undefined
  options?: QueryV1InvokeOptions | undefined
}
type QueryV1ReportType =
  | 'REPORT_UNSPECIFIED'
  | 'REPORT_LABEL_NAMES'
  | 'REPORT_LABEL_VALUES'
  | 'REPORT_SERIES_LABELS'
  | 'REPORT_TIME_SERIES'
  | 'REPORT_TREE'
  | 'REPORT_PPROF'
  | 'REPORT_HEATMAP'
  | 'REPORT_TIME_SERIES_COMPACT'
  | 'REPORT_PROFILE_PRESENCE'
  | 'REPORT_TIME_SERIES_ANALYSIS'
type QueryV1LabelNamesReport = {
  query?: QueryV1LabelNamesQuery | undefined
  labelNames?: string[] | undefined
}
type QueryV1LabelValuesReport = {
  query?: QueryV1LabelValuesQuery | undefined
  labelValues?: string[] | undefined
}
type TypesV1LabelPair = { name?: string | undefined; value?: string | undefined }
type TypesV1Labels = { labels?: TypesV1LabelPair[] | undefined }
type QueryV1SeriesLabelsReport = {
  query?: QueryV1SeriesLabelsQuery | undefined
  seriesLabels?: TypesV1Labels[] | undefined
}
type TypesV1ProfileAnnotation = { key?: string | undefined; value?: string | undefined }
type TypesV1Exemplar = {
  timestamp?: bigint | string | undefined
  profileId?: string | undefined
  spanId?: string | undefined
  value?: bigint | string | undefined
  labels?: TypesV1LabelPair[] | undefined
  traceId?: string | undefined
}
type TypesV1Point = {
  value?: number | undefined
  timestamp?: bigint | string | undefined
  annotations?: TypesV1ProfileAnnotation[] | undefined
  exemplars?: TypesV1Exemplar[] | undefined
}
type TypesV1Series = {
  labels?: TypesV1LabelPair[] | undefined
  points?: TypesV1Point[] | undefined
}
type QueryV1TimeSeriesReport = {
  query?: QueryV1TimeSeriesQuery | undefined
  timeSeries?: TypesV1Series[] | undefined
}
type GoogleV1Mapping = {
  id?: bigint | string | undefined
  memoryStart?: bigint | string | undefined
  memoryLimit?: bigint | string | undefined
  fileOffset?: bigint | string | undefined
  filename?: bigint | string | undefined
  buildId?: bigint | string | undefined
  hasFunctions?: boolean | undefined
  hasFilenames?: boolean | undefined
  hasLineNumbers?: boolean | undefined
  hasInlineFrames?: boolean | undefined
}
type GoogleV1Line = { functionId?: bigint | string | undefined; line?: bigint | string | undefined }
type GoogleV1Location = {
  id?: bigint | string | undefined
  mappingId?: bigint | string | undefined
  address?: bigint | string | undefined
  line?: GoogleV1Line[] | undefined
  isFolded?: boolean | undefined
}
type GoogleV1Function = {
  id?: bigint | string | undefined
  name?: bigint | string | undefined
  systemName?: bigint | string | undefined
  filename?: bigint | string | undefined
  startLine?: bigint | string | undefined
}
type QueryV1TreeSymbols = {
  mappings?: GoogleV1Mapping[] | undefined
  locations?: GoogleV1Location[] | undefined
  functions?: GoogleV1Function[] | undefined
  strings?: string[] | undefined
  mappingHashes?: (bigint | string)[] | undefined
  locationHashes?: (bigint | string)[] | undefined
  functionHashes?: (bigint | string)[] | undefined
  stringHashes?: (bigint | string)[] | undefined
}
type QueryV1TreeReport = {
  query?: QueryV1TreeQuery | undefined
  tree?: string | undefined
  symbols?: QueryV1TreeSymbols | undefined
}
type QueryV1PprofReport = { query?: QueryV1PprofQuery | undefined; pprof?: string | undefined }
type QueryV1HeatmapPoint = {
  timestamp?: bigint | string | undefined
  profileId?: bigint | string | undefined
  spanId?: bigint | string | undefined
  value?: bigint | string | undefined
  attributeRefs?: (bigint | string)[] | undefined
  traceId?: string | undefined
}
type QueryV1HeatmapSeries = {
  attributeRefs?: (bigint | string)[] | undefined
  points?: QueryV1HeatmapPoint[] | undefined
}
type QueryV1AttributeTable = { keys?: string[] | undefined; values?: string[] | undefined }
type QueryV1HeatmapReport = {
  query?: QueryV1HeatmapQuery | undefined
  heatmapSeries?: QueryV1HeatmapSeries[] | undefined
  attributeTable?: QueryV1AttributeTable | undefined
}
type QueryV1Exemplar = {
  timestamp?: bigint | string | undefined
  profileId?: string | undefined
  spanId?: string | undefined
  value?: bigint | string | undefined
  attributeRefs?: (bigint | string)[] | undefined
}
type QueryV1Point = {
  value?: number | undefined
  timestamp?: bigint | string | undefined
  annotationRefs?: (bigint | string)[] | undefined
  exemplars?: QueryV1Exemplar[] | undefined
}
type QueryV1Series = {
  attributeRefs?: (bigint | string)[] | undefined
  points?: QueryV1Point[] | undefined
}
type QueryV1TimeSeriesCompactReport = {
  query?: QueryV1TimeSeriesQuery | undefined
  timeSeries?: QueryV1Series[] | undefined
  attributeTable?: QueryV1AttributeTable | undefined
}
type QueryV1ProfilePresenceEntry = {
  profileId?: string | undefined
  labels?: TypesV1LabelPair[] | undefined
  timestamp?: bigint | string | undefined
}
type QueryV1ProfilePresenceReport = {
  query?: QueryV1ProfilePresenceQuery | undefined
  profiles?: QueryV1ProfilePresenceEntry[] | undefined
}
type QuerierV1TimeSeriesAnomalyType =
  | 'TIME_SERIES_ANOMALY_TYPE_UNSPECIFIED'
  | 'TIME_SERIES_ANOMALY_TYPE_SPIKE'
  | 'TIME_SERIES_ANOMALY_TYPE_DROP'
  | 'TIME_SERIES_ANOMALY_TYPE_INCREASE'
  | 'TIME_SERIES_ANOMALY_TYPE_DECREASE'
type QuerierV1TimeSeriesAnomaly = {
  type?: QuerierV1TimeSeriesAnomalyType | undefined
  labels?: TypesV1LabelPair[] | undefined
  timestampStart?: bigint | string | undefined
  timestampEnd?: bigint | string | undefined
  timestampPeak?: bigint | string | undefined
  baseline?: number | undefined
  peakValue?: number | undefined
  relativeChange?: number | undefined
  score?: number | undefined
  priorityScore?: number | undefined
}
type QueryV1TimeSeriesAnalysisReport = {
  query?: QueryV1TimeSeriesAnalysisQuery | undefined
  timeSeries?: TypesV1Series[] | undefined
  events?: QuerierV1TimeSeriesAnomaly[] | undefined
}
type QueryV1Report = {
  reportType?: QueryV1ReportType | undefined
  labelNames?: QueryV1LabelNamesReport | undefined
  labelValues?: QueryV1LabelValuesReport | undefined
  seriesLabels?: QueryV1SeriesLabelsReport | undefined
  timeSeries?: QueryV1TimeSeriesReport | undefined
  tree?: QueryV1TreeReport | undefined
  pprof?: QueryV1PprofReport | undefined
  heatmap?: QueryV1HeatmapReport | undefined
  timeSeriesCompact?: QueryV1TimeSeriesCompactReport | undefined
  profilePresence?: QueryV1ProfilePresenceReport | undefined
  timeSeriesAnalysis?: QueryV1TimeSeriesAnalysisReport | undefined
}
type QueryV1BlockExecution = {
  blockId?: string | undefined
  startTimeNs?: bigint | string | undefined
  endTimeNs?: bigint | string | undefined
  datasetsProcessed?: bigint | string | undefined
  size?: bigint | string | undefined
  shard?: number | undefined
  compactionLevel?: number | undefined
}
type QueryV1ExecutionStats = {
  blocksRead?: bigint | string | undefined
  datasetsProcessed?: bigint | string | undefined
  blockExecutions?: QueryV1BlockExecution[] | undefined
  bytesFetched?: bigint | string | undefined
  processingDurationNs?: bigint | string | undefined
  backoffDurationNs?: bigint | string | undefined
  unaccountedDurationNs?: bigint | string | undefined
}
type QueryV1ExecutionNode = {
  type?: QueryV1QueryNodeType | undefined
  executor?: string | undefined
  startTimeNs?: bigint | string | undefined
  endTimeNs?: bigint | string | undefined
  children?: QueryV1ExecutionNode[] | undefined
  stats?: QueryV1ExecutionStats | undefined
  error?: string | undefined
}
type QueryV1Diagnostics = {
  queryPlan?: QueryV1QueryPlan | undefined
  executionNode?: QueryV1ExecutionNode | undefined
}
type QueryV1InvokeResponse = {
  reports?: QueryV1Report[] | undefined
  diagnostics?: QueryV1Diagnostics | undefined
}
type ConnectErrorDetailsAny = {
  type?: string | undefined
  value?: File | undefined
  debug?: { [x: string]: unknown } | undefined
}
type ConnectError = {
  code?:
    | 'canceled'
    | 'unknown'
    | 'invalid_argument'
    | 'deadline_exceeded'
    | 'not_found'
    | 'already_exists'
    | 'permission_denied'
    | 'resource_exhausted'
    | 'failed_precondition'
    | 'aborted'
    | 'out_of_range'
    | 'unimplemented'
    | 'internal'
    | 'unavailable'
    | 'data_loss'
    | 'unauthenticated'
    | undefined
  message?: string | undefined
  details?: ConnectErrorDetailsAny[] | undefined
}
type QueryV1QueryRequest = {
  startTime?: bigint | string | undefined
  endTime?: bigint | string | undefined
  labelSelector?: string | undefined
  query?: QueryV1Query[] | undefined
}
type QueryV1QueryResponse = { reports?: QueryV1Report[] | undefined }
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/query.v1.QueryBackendService/Invoke': {
      $post:
        | {
            input: {
              header: {
                'Connect-Protocol-Version': ConnectProtocolVersion
                'Connect-Timeout-Ms'?: ConnectTimeoutHeader | undefined
              }
            } & { json: QueryV1InvokeRequest }
            output: QueryV1InvokeResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              header: {
                'Connect-Protocol-Version': ConnectProtocolVersion
                'Connect-Timeout-Ms'?: ConnectTimeoutHeader | undefined
              }
            } & { json: QueryV1InvokeRequest }
            output: ConnectError
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/query.v1.QueryFrontendService/Query': {
      $post:
        | {
            input: {
              header: {
                'Connect-Protocol-Version': ConnectProtocolVersion
                'Connect-Timeout-Ms'?: ConnectTimeoutHeader | undefined
              }
            } & { json: QueryV1QueryRequest }
            output: QueryV1QueryResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              header: {
                'Connect-Protocol-Version': ConnectProtocolVersion
                'Connect-Timeout-Ms'?: ConnectTimeoutHeader | undefined
              }
            } & { json: QueryV1QueryRequest }
            output: ConnectError
            outputFormat: 'json'
            status: 200
          }
    }
  },
  '/'
>
export default routes
