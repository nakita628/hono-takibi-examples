type ConnectProtocolVersion = 1
type ConnectTimeoutHeader = number
type QuerierV1AnalyzeQueryRequest = {
  start?: bigint | string | undefined
  end?: bigint | string | undefined
  query?: string | undefined
}
type QuerierV1QueryScope = {
  componentType?: string | undefined
  componentCount?: bigint | string | undefined
  blockCount?: bigint | string | undefined
  seriesCount?: bigint | string | undefined
  profileCount?: bigint | string | undefined
  sampleCount?: bigint | string | undefined
  indexBytes?: bigint | string | undefined
  profileBytes?: bigint | string | undefined
  symbolBytes?: bigint | string | undefined
}
type QuerierV1QueryImpact = {
  totalBytesInTimeRange?: bigint | string | undefined
  totalQueriedSeries?: bigint | string | undefined
  deduplicationNeeded?: boolean | undefined
}
type QuerierV1AnalyzeQueryResponse = {
  queryScopes?: QuerierV1QueryScope[] | undefined
  queryImpact?: QuerierV1QueryImpact | undefined
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
type QuerierV1ProfileFormat =
  | 'PROFILE_FORMAT_UNSPECIFIED'
  | 'PROFILE_FORMAT_FLAMEGRAPH'
  | 'PROFILE_FORMAT_TREE'
  | 'PROFILE_FORMAT_DOT'
  | 'PROFILE_FORMAT_PPROF'
type TypesV1Location = { name?: string | undefined }
type TypesV1GoPGO = { keepLocations?: number | undefined; aggregateCallees?: boolean | undefined }
type TypesV1StackTraceSelector = {
  callSite?: TypesV1Location[] | undefined
  goPgo?: TypesV1GoPGO | undefined
}
type QuerierV1AsyncQueryType = 'ASYNC_QUERY_TYPE_DISABLED' | 'ASYNC_QUERY_TYPE_FORCE'
type QuerierV1AsyncQueryRequest = {
  requestId?: string | undefined
  type?: QuerierV1AsyncQueryType | undefined
}
type QuerierV1SelectMergeStacktracesRequest = {
  profileTypeID?: string | undefined
  labelSelector?: string | undefined
  start?: bigint | string | undefined
  end?: bigint | string | undefined
  maxNodes?: (bigint | string | null) | undefined
  format?: QuerierV1ProfileFormat | undefined
  stackTraceSelector?: TypesV1StackTraceSelector | undefined
  profileIdSelector?: string[] | undefined
  async?: QuerierV1AsyncQueryRequest | undefined
  traceIdSelector?: string[] | undefined
  spanSelector?: string[] | undefined
}
type QuerierV1DiffRequest = {
  left?: QuerierV1SelectMergeStacktracesRequest | undefined
  right?: QuerierV1SelectMergeStacktracesRequest | undefined
}
type QuerierV1Level = { values?: (bigint | string)[] | undefined }
type QuerierV1FlameGraphDiff = {
  names?: string[] | undefined
  levels?: QuerierV1Level[] | undefined
  total?: bigint | string | undefined
  maxSelf?: bigint | string | undefined
  leftTicks?: bigint | string | undefined
  rightTicks?: bigint | string | undefined
}
type QuerierV1DiffResponse = { flamegraph?: QuerierV1FlameGraphDiff | undefined }
type TypesV1GetProfileStatsRequest = {}
type TypesV1GetProfileStatsResponse = {
  dataIngested?: boolean | undefined
  oldestProfileTime?: bigint | string | undefined
  newestProfileTime?: bigint | string | undefined
}
type TypesV1LabelNamesRequest = {
  matchers?: string[] | undefined
  start?: bigint | string | undefined
  end?: bigint | string | undefined
}
type TypesV1LabelNamesResponse = { names?: string[] | undefined }
type TypesV1LabelValuesRequest = {
  name?: string | undefined
  matchers?: string[] | undefined
  start?: bigint | string | undefined
  end?: bigint | string | undefined
}
type TypesV1LabelValuesResponse = { names?: string[] | undefined }
type QuerierV1ProfileTypesRequest = {
  start?: bigint | string | undefined
  end?: bigint | string | undefined
}
type TypesV1ProfileType = {
  ID?: string | undefined
  name?: string | undefined
  sampleType?: string | undefined
  sampleUnit?: string | undefined
  periodType?: string | undefined
  periodUnit?: string | undefined
}
type QuerierV1ProfileTypesResponse = { profileTypes?: TypesV1ProfileType[] | undefined }
type QuerierV1AnomalyType =
  | 'ANOMALY_TYPE_UNSPECIFIED'
  | 'ANOMALY_TYPE_STACKTRACE'
  | 'ANOMALY_TYPE_TIME_SERIES'
type QuerierV1AnomalyTimeSeriesRequest = {
  groupBy?: string[] | undefined
  step?: number | undefined
  limit?: (bigint | string | null) | undefined
}
type QuerierV1QueryAnomaliesRequest = {
  profileTypeID?: string | undefined
  labelSelector?: string | undefined
  start?: bigint | string | undefined
  end?: bigint | string | undefined
  anomalyTypes?: QuerierV1AnomalyType[] | undefined
  timeSeries?: QuerierV1AnomalyTimeSeriesRequest | undefined
}
type TypesV1LabelPair = { name?: string | undefined; value?: string | undefined }
type QuerierV1StacktraceAnomaly = {
  profileId?: string | undefined
  timestamp?: bigint | string | undefined
  labels?: TypesV1LabelPair[] | undefined
  score?: number | undefined
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
type QuerierV1QueryAnomaliesResponse = {
  stacktraceAnomalies?: QuerierV1StacktraceAnomaly[] | undefined
  timeSeriesAnomalies?: QuerierV1TimeSeriesAnomaly[] | undefined
}
type QuerierV1HeatmapQueryType =
  | 'HEATMAP_QUERY_TYPE_UNSPECIFIED'
  | 'HEATMAP_QUERY_TYPE_INDIVIDUAL'
  | 'HEATMAP_QUERY_TYPE_SPAN'
type TypesV1ExemplarType =
  | 'EXEMPLAR_TYPE_UNSPECIFIED'
  | 'EXEMPLAR_TYPE_NONE'
  | 'EXEMPLAR_TYPE_INDIVIDUAL'
  | 'EXEMPLAR_TYPE_SPAN'
type QuerierV1SelectHeatmapRequest = {
  profileTypeID?: string | undefined
  labelSelector?: string | undefined
  start?: bigint | string | undefined
  end?: bigint | string | undefined
  step?: number | undefined
  groupBy?: string[] | undefined
  queryType?: QuerierV1HeatmapQueryType | undefined
  exemplarType?: TypesV1ExemplarType | undefined
  limit?: (bigint | string | null) | undefined
}
type TypesV1Exemplar = {
  timestamp?: bigint | string | undefined
  profileId?: string | undefined
  spanId?: string | undefined
  value?: bigint | string | undefined
  labels?: TypesV1LabelPair[] | undefined
  traceId?: string | undefined
}
type TypesV1HeatmapSlot = {
  timestamp?: bigint | string | undefined
  yMin?: number[] | undefined
  counts?: number[] | undefined
  exemplars?: TypesV1Exemplar[] | undefined
}
type TypesV1HeatmapSeries = {
  labels?: TypesV1LabelPair[] | undefined
  slots?: TypesV1HeatmapSlot[] | undefined
}
type QuerierV1SelectHeatmapResponse = { series?: TypesV1HeatmapSeries[] | undefined }
type QuerierV1SelectMergeProfileRequest = {
  profileTypeID?: string | undefined
  labelSelector?: string | undefined
  start?: bigint | string | undefined
  end?: bigint | string | undefined
  maxNodes?: (bigint | string | null) | undefined
  stackTraceSelector?: TypesV1StackTraceSelector | undefined
  profileIdSelector?: string[] | undefined
  traceIdSelector?: string[] | undefined
}
type GoogleV1ValueType = { type?: bigint | string | undefined; unit?: bigint | string | undefined }
type GoogleV1Label = {
  key?: bigint | string | undefined
  str?: bigint | string | undefined
  num?: bigint | string | undefined
  numUnit?: bigint | string | undefined
}
type GoogleV1Sample = {
  locationId?: (bigint | string)[] | undefined
  value?: (bigint | string)[] | undefined
  label?: GoogleV1Label[] | undefined
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
type GoogleV1Profile = {
  sampleType?: GoogleV1ValueType[] | undefined
  sample?: GoogleV1Sample[] | undefined
  mapping?: GoogleV1Mapping[] | undefined
  location?: GoogleV1Location[] | undefined
  function?: GoogleV1Function[] | undefined
  stringTable?: string[] | undefined
  dropFrames?: bigint | string | undefined
  keepFrames?: bigint | string | undefined
  timeNanos?: bigint | string | undefined
  durationNanos?: bigint | string | undefined
  periodType?: GoogleV1ValueType | undefined
  period?: bigint | string | undefined
  comment?: (bigint | string)[] | undefined
  defaultSampleType?: bigint | string | undefined
}
type QuerierV1SelectMergeSpanProfileRequest = {
  profileTypeID?: string | undefined
  labelSelector?: string | undefined
  spanSelector?: string[] | undefined
  start?: bigint | string | undefined
  end?: bigint | string | undefined
  maxNodes?: (bigint | string | null) | undefined
  format?: QuerierV1ProfileFormat | undefined
}
type QuerierV1FlameGraph = {
  names?: string[] | undefined
  levels?: QuerierV1Level[] | undefined
  total?: bigint | string | undefined
  maxSelf?: bigint | string | undefined
}
type QuerierV1SelectMergeSpanProfileResponse = {
  flamegraph?: QuerierV1FlameGraph | undefined
  tree?: string | undefined
}
type QuerierV1AsyncQueryStatus =
  | 'ASYNC_QUERY_STATUS_UNKNOWN'
  | 'ASYNC_QUERY_STATUS_IN_PROGRESS'
  | 'ASYNC_QUERY_STATUS_SUCCESS'
  | 'ASYNC_QUERY_STATUS_FAILURE'
type QuerierV1AsyncQueryResponse = {
  requestId?: string | undefined
  status?: QuerierV1AsyncQueryStatus | undefined
  errorMessage?: string | undefined
}
type QuerierV1PprofProfile = { profile?: GoogleV1Profile | undefined }
type QuerierV1SelectMergeStacktracesResponse = {
  flamegraph?: QuerierV1FlameGraph | undefined
  tree?: string | undefined
  dot?: string | undefined
  async?: QuerierV1AsyncQueryResponse | undefined
  pprof?: QuerierV1PprofProfile | undefined
}
type TypesV1TimeSeriesAggregationType =
  | 'TIME_SERIES_AGGREGATION_TYPE_SUM'
  | 'TIME_SERIES_AGGREGATION_TYPE_AVERAGE'
type QuerierV1SelectSeriesRequest = {
  profileTypeID?: string | undefined
  labelSelector?: string | undefined
  start?: bigint | string | undefined
  end?: bigint | string | undefined
  groupBy?: string[] | undefined
  step?: number | undefined
  aggregation?: TypesV1TimeSeriesAggregationType | undefined
  stackTraceSelector?: TypesV1StackTraceSelector | undefined
  limit?: (bigint | string | null) | undefined
  exemplarType?: TypesV1ExemplarType | undefined
}
type TypesV1ProfileAnnotation = { key?: string | undefined; value?: string | undefined }
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
type QuerierV1SelectSeriesResponse = { series?: TypesV1Series[] | undefined }
type QuerierV1SeriesRequest = {
  matchers?: string[] | undefined
  labelNames?: string[] | undefined
  start?: bigint | string | undefined
  end?: bigint | string | undefined
}
type TypesV1Labels = { labels?: TypesV1LabelPair[] | undefined }
type QuerierV1SeriesResponse = { labelsSet?: TypesV1Labels[] | undefined }
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/querier.v1.QuerierService/AnalyzeQuery': {
      $post:
        | {
            input: {
              header: {
                'Connect-Protocol-Version': ConnectProtocolVersion
                'Connect-Timeout-Ms'?: ConnectTimeoutHeader | undefined
              }
            } & { json: QuerierV1AnalyzeQueryRequest }
            output: QuerierV1AnalyzeQueryResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              header: {
                'Connect-Protocol-Version': ConnectProtocolVersion
                'Connect-Timeout-Ms'?: ConnectTimeoutHeader | undefined
              }
            } & { json: QuerierV1AnalyzeQueryRequest }
            output: ConnectError
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/querier.v1.QuerierService/Diff': {
      $post:
        | {
            input: {
              header: {
                'Connect-Protocol-Version': ConnectProtocolVersion
                'Connect-Timeout-Ms'?: ConnectTimeoutHeader | undefined
              }
            } & { json: QuerierV1DiffRequest }
            output: QuerierV1DiffResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              header: {
                'Connect-Protocol-Version': ConnectProtocolVersion
                'Connect-Timeout-Ms'?: ConnectTimeoutHeader | undefined
              }
            } & { json: QuerierV1DiffRequest }
            output: ConnectError
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/querier.v1.QuerierService/GetProfileStats': {
      $post:
        | {
            input: {
              header: {
                'Connect-Protocol-Version': ConnectProtocolVersion
                'Connect-Timeout-Ms'?: ConnectTimeoutHeader | undefined
              }
            } & { json: TypesV1GetProfileStatsRequest }
            output: TypesV1GetProfileStatsResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              header: {
                'Connect-Protocol-Version': ConnectProtocolVersion
                'Connect-Timeout-Ms'?: ConnectTimeoutHeader | undefined
              }
            } & { json: TypesV1GetProfileStatsRequest }
            output: ConnectError
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/querier.v1.QuerierService/LabelNames': {
      $post:
        | {
            input: {
              header: {
                'Connect-Protocol-Version': ConnectProtocolVersion
                'Connect-Timeout-Ms'?: ConnectTimeoutHeader | undefined
              }
            } & { json: TypesV1LabelNamesRequest }
            output: TypesV1LabelNamesResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              header: {
                'Connect-Protocol-Version': ConnectProtocolVersion
                'Connect-Timeout-Ms'?: ConnectTimeoutHeader | undefined
              }
            } & { json: TypesV1LabelNamesRequest }
            output: ConnectError
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/querier.v1.QuerierService/LabelValues': {
      $post:
        | {
            input: {
              header: {
                'Connect-Protocol-Version': ConnectProtocolVersion
                'Connect-Timeout-Ms'?: ConnectTimeoutHeader | undefined
              }
            } & { json: TypesV1LabelValuesRequest }
            output: TypesV1LabelValuesResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              header: {
                'Connect-Protocol-Version': ConnectProtocolVersion
                'Connect-Timeout-Ms'?: ConnectTimeoutHeader | undefined
              }
            } & { json: TypesV1LabelValuesRequest }
            output: ConnectError
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/querier.v1.QuerierService/ProfileTypes': {
      $post:
        | {
            input: {
              header: {
                'Connect-Protocol-Version': ConnectProtocolVersion
                'Connect-Timeout-Ms'?: ConnectTimeoutHeader | undefined
              }
            } & { json: QuerierV1ProfileTypesRequest }
            output: QuerierV1ProfileTypesResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              header: {
                'Connect-Protocol-Version': ConnectProtocolVersion
                'Connect-Timeout-Ms'?: ConnectTimeoutHeader | undefined
              }
            } & { json: QuerierV1ProfileTypesRequest }
            output: ConnectError
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/querier.v1.QuerierService/QueryAnomalies': {
      $post:
        | {
            input: {
              header: {
                'Connect-Protocol-Version': ConnectProtocolVersion
                'Connect-Timeout-Ms'?: ConnectTimeoutHeader | undefined
              }
            } & { json: QuerierV1QueryAnomaliesRequest }
            output: QuerierV1QueryAnomaliesResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              header: {
                'Connect-Protocol-Version': ConnectProtocolVersion
                'Connect-Timeout-Ms'?: ConnectTimeoutHeader | undefined
              }
            } & { json: QuerierV1QueryAnomaliesRequest }
            output: ConnectError
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/querier.v1.QuerierService/SelectHeatmap': {
      $post:
        | {
            input: {
              header: {
                'Connect-Protocol-Version': ConnectProtocolVersion
                'Connect-Timeout-Ms'?: ConnectTimeoutHeader | undefined
              }
            } & { json: QuerierV1SelectHeatmapRequest }
            output: QuerierV1SelectHeatmapResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              header: {
                'Connect-Protocol-Version': ConnectProtocolVersion
                'Connect-Timeout-Ms'?: ConnectTimeoutHeader | undefined
              }
            } & { json: QuerierV1SelectHeatmapRequest }
            output: ConnectError
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/querier.v1.QuerierService/SelectMergeProfile': {
      $post:
        | {
            input: {
              header: {
                'Connect-Protocol-Version': ConnectProtocolVersion
                'Connect-Timeout-Ms'?: ConnectTimeoutHeader | undefined
              }
            } & { json: QuerierV1SelectMergeProfileRequest }
            output: GoogleV1Profile
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              header: {
                'Connect-Protocol-Version': ConnectProtocolVersion
                'Connect-Timeout-Ms'?: ConnectTimeoutHeader | undefined
              }
            } & { json: QuerierV1SelectMergeProfileRequest }
            output: ConnectError
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/querier.v1.QuerierService/SelectMergeSpanProfile': {
      $post:
        | {
            input: {
              header: {
                'Connect-Protocol-Version': ConnectProtocolVersion
                'Connect-Timeout-Ms'?: ConnectTimeoutHeader | undefined
              }
            } & { json: QuerierV1SelectMergeSpanProfileRequest }
            output: QuerierV1SelectMergeSpanProfileResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              header: {
                'Connect-Protocol-Version': ConnectProtocolVersion
                'Connect-Timeout-Ms'?: ConnectTimeoutHeader | undefined
              }
            } & { json: QuerierV1SelectMergeSpanProfileRequest }
            output: ConnectError
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/querier.v1.QuerierService/SelectMergeStacktraces': {
      $post:
        | {
            input: {
              header: {
                'Connect-Protocol-Version': ConnectProtocolVersion
                'Connect-Timeout-Ms'?: ConnectTimeoutHeader | undefined
              }
            } & { json: QuerierV1SelectMergeStacktracesRequest }
            output: QuerierV1SelectMergeStacktracesResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              header: {
                'Connect-Protocol-Version': ConnectProtocolVersion
                'Connect-Timeout-Ms'?: ConnectTimeoutHeader | undefined
              }
            } & { json: QuerierV1SelectMergeStacktracesRequest }
            output: ConnectError
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/querier.v1.QuerierService/SelectSeries': {
      $post:
        | {
            input: {
              header: {
                'Connect-Protocol-Version': ConnectProtocolVersion
                'Connect-Timeout-Ms'?: ConnectTimeoutHeader | undefined
              }
            } & { json: QuerierV1SelectSeriesRequest }
            output: QuerierV1SelectSeriesResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              header: {
                'Connect-Protocol-Version': ConnectProtocolVersion
                'Connect-Timeout-Ms'?: ConnectTimeoutHeader | undefined
              }
            } & { json: QuerierV1SelectSeriesRequest }
            output: ConnectError
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/querier.v1.QuerierService/Series': {
      $post:
        | {
            input: {
              header: {
                'Connect-Protocol-Version': ConnectProtocolVersion
                'Connect-Timeout-Ms'?: ConnectTimeoutHeader | undefined
              }
            } & { json: QuerierV1SeriesRequest }
            output: QuerierV1SeriesResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              header: {
                'Connect-Protocol-Version': ConnectProtocolVersion
                'Connect-Timeout-Ms'?: ConnectTimeoutHeader | undefined
              }
            } & { json: QuerierV1SeriesRequest }
            output: ConnectError
            outputFormat: 'json'
            status: 200
          }
    }
  },
  '/'
>
export default routes
