type Labels = { [x: string]: unknown }
type FloatSample = { metric: Labels; value: (number | string)[] }
type HistogramValue = { count: string; sum: string; buckets?: (number | string)[][] | undefined }
type HistogramSample = { metric: Labels; histogram: (number | HistogramValue)[] }
type QueryStats = {
  timings?:
    | {
        evalTotalTime?: number | undefined
        resultSortTime?: number | undefined
        queryPreparationTime?: number | undefined
        innerEvalTime?: number | undefined
        execQueueTime?: number | undefined
        execTotalTime?: number | undefined
      }
    | undefined
  samples?:
    | {
        totalQueryableSamples?: number | undefined
        peakSamples?: number | undefined
        totalQueryableSamplesPerStep?: number[][] | undefined
        seriesTouched?: bigint | undefined
        samplesRead?: number | undefined
        samplesReadPerStep?: number[][] | undefined
      }
    | undefined
}
type CostEstimate = { seriesTouched: bigint; samplesRead: bigint }
type ActualCost = { seriesTouched: bigint; samplesRead: bigint; peakSamples?: bigint | undefined }
type QueryCostComparison = { estimated: CostEstimate; actual: ActualCost }
type FloatSeries = { metric: Labels; values: (number | string)[][] }
type HistogramSeries = { metric: Labels; histograms: (number | HistogramValue)[][] }
type QueryData =
  | {
      resultType: 'vector'
      result: (FloatSample | HistogramSample)[]
      stats?: QueryStats | undefined
      cost?: QueryCostComparison | undefined
    }
  | {
      resultType: 'matrix'
      result: (FloatSeries | HistogramSeries)[]
      stats?: QueryStats | undefined
      cost?: QueryCostComparison | undefined
    }
  | {
      resultType: 'scalar'
      result: (number | string)[]
      stats?: QueryStats | undefined
      cost?: QueryCostComparison | undefined
    }
  | {
      resultType: 'string'
      result: string[]
      stats?: QueryStats | undefined
      cost?: QueryCostComparison | undefined
    }
type QueryOutputBody = {
  status: 'success' | 'error'
  data: QueryData
  warnings?: string[] | undefined
  infos?: string[] | undefined
}
type Error = { status: 'success' | 'error'; errorType: string; error: string }
type QueryPostInputBody = {
  query: string
  time?: string | undefined
  limit?: bigint | undefined
  timeout?: string | undefined
  lookback_delta?: string | undefined
  stats?: string | undefined
  cost?: boolean | undefined
  max_series?: bigint | undefined
  max_samples_read?: bigint | undefined
  max_query_duration?: string | undefined
}
type QueryRangeOutputBody = {
  status: 'success' | 'error'
  data: QueryData
  warnings?: string[] | undefined
  infos?: string[] | undefined
}
type QueryRangePostInputBody = {
  query: string
  start: string
  end: string
  step: string
  limit?: bigint | undefined
  timeout?: string | undefined
  lookback_delta?: string | undefined
  stats?: string | undefined
  cost?: boolean | undefined
  max_series?: bigint | undefined
  max_samples_read?: bigint | undefined
  max_query_duration?: string | undefined
}
type QueryCostData = { estimate: CostEstimate }
type QueryCostOutputBody = {
  status: 'success' | 'error'
  data: QueryCostData
  warnings?: string[] | undefined
  infos?: string[] | undefined
}
type QueryCostPostInputBody = {
  query: string
  time?: string | undefined
  timeout?: string | undefined
  lookback_delta?: string | undefined
  limit?: bigint | undefined
  stats?: string | undefined
  cost?: boolean | undefined
  max_series?: bigint | undefined
  max_samples_read?: bigint | undefined
  max_query_duration?: string | undefined
}
type QueryRangeCostPostInputBody = {
  query: string
  start: string
  end: string
  step: string
  timeout?: string | undefined
  lookback_delta?: string | undefined
  limit?: bigint | undefined
  stats?: string | undefined
  cost?: boolean | undefined
  max_series?: bigint | undefined
  max_samples_read?: bigint | undefined
  max_query_duration?: string | undefined
}
type QueryExemplarsOutputBody = {
  status: 'success' | 'error'
  data: { [x: string]: unknown }
  warnings?: string[] | undefined
  infos?: string[] | undefined
}
type QueryExemplarsPostInputBody = {
  query: string
  start?: string | undefined
  end?: string | undefined
}
type FormatQueryOutputBody = {
  status: 'success' | 'error'
  data: string
  warnings?: string[] | undefined
  infos?: string[] | undefined
}
type FormatQueryPostInputBody = { query: string }
type ParseQueryOutputBody = {
  status: 'success' | 'error'
  data: { [x: string]: unknown }
  warnings?: string[] | undefined
  infos?: string[] | undefined
}
type ParseQueryPostInputBody = { query: string }
type LabelsOutputBody = {
  status: 'success' | 'error'
  data: string[]
  warnings?: string[] | undefined
  infos?: string[] | undefined
}
type LabelsPostInputBody = {
  start?: string | undefined
  end?: string | undefined
  'match[]'?: string[] | undefined
  limit?: bigint | undefined
}
type LabelValuesOutputBody = {
  status: 'success' | 'error'
  data: string[]
  warnings?: string[] | undefined
  infos?: string[] | undefined
}
type SearchMetricNamesPostInputBody = {
  'match[]'?: string[] | undefined
  'search[]'?: string[] | undefined
  search_expr?: string | undefined
  fuzz_threshold?: bigint | undefined
  fuzz_alg?: 'subsequence' | 'jarowinkler' | undefined
  case_sensitive?: boolean | undefined
  sort_by?: 'alpha' | 'score' | undefined
  sort_dir?: 'asc' | 'dsc' | undefined
  include_score?: boolean | undefined
  start?: string | undefined
  end?: string | undefined
  limit?: bigint | undefined
  batch_size?: bigint | undefined
  include_metadata?: boolean | undefined
}
type SearchLabelNamesPostInputBody = {
  'match[]'?: string[] | undefined
  'search[]'?: string[] | undefined
  search_expr?: string | undefined
  fuzz_threshold?: bigint | undefined
  fuzz_alg?: 'subsequence' | 'jarowinkler' | undefined
  case_sensitive?: boolean | undefined
  sort_by?: 'alpha' | 'score' | undefined
  sort_dir?: 'asc' | 'dsc' | undefined
  include_score?: boolean | undefined
  start?: string | undefined
  end?: string | undefined
  limit?: bigint | undefined
  batch_size?: bigint | undefined
}
type SearchLabelValuesPostInputBody = {
  label: string
  'match[]'?: string[] | undefined
  'search[]'?: string[] | undefined
  search_expr?: string | undefined
  fuzz_threshold?: bigint | undefined
  fuzz_alg?: 'subsequence' | 'jarowinkler' | undefined
  case_sensitive?: boolean | undefined
  sort_by?: 'alpha' | 'score' | undefined
  sort_dir?: 'asc' | 'dsc' | undefined
  include_score?: boolean | undefined
  start?: string | undefined
  end?: string | undefined
  limit?: bigint | undefined
  batch_size?: bigint | undefined
}
type SeriesOutputBody = {
  status: 'success' | 'error'
  data: Labels[]
  warnings?: string[] | undefined
  infos?: string[] | undefined
}
type SeriesPostInputBody = {
  start?: string | undefined
  end?: string | undefined
  'match[]': string[]
  limit?: bigint | undefined
}
type Metadata = { type: string; unit: string; help: string }
type MetadataOutputBody = {
  status: 'success' | 'error'
  data: { [x: string]: Metadata[] }
  warnings?: string[] | undefined
  infos?: string[] | undefined
}
type ScrapePoolsDiscovery = { scrapePools: string[] }
type ScrapePoolsOutputBody = {
  status: 'success' | 'error'
  data: ScrapePoolsDiscovery
  warnings?: string[] | undefined
  infos?: string[] | undefined
}
type ScrapePoolConfigData = { yaml: string }
type ScrapePoolConfigOutputBody = {
  status: 'success' | 'error'
  data: ScrapePoolConfigData
  warnings?: string[] | undefined
  infos?: string[] | undefined
}
type Target = {
  discoveredLabels: Labels
  labels: Labels
  scrapePool: string
  scrapeUrl: string
  globalUrl: string
  lastError: string
  lastScrape: string
  lastScrapeDuration: number
  health: string
  scrapeInterval: string
  scrapeTimeout: string
}
type DroppedTarget = { discoveredLabels: Labels; scrapePool: string }
type TargetDiscovery = {
  activeTargets: Target[]
  droppedTargets: DroppedTarget[]
  droppedTargetCounts: { [x: string]: bigint }
}
type TargetsOutputBody = {
  status: 'success' | 'error'
  data: TargetDiscovery
  warnings?: string[] | undefined
  infos?: string[] | undefined
}
type MetricMetadata = {
  target: Labels
  metric?: string | undefined
  type: string
  help: string
  unit: string
}
type TargetMetadataOutputBody = {
  status: 'success' | 'error'
  data: MetricMetadata[]
  warnings?: string[] | undefined
  infos?: string[] | undefined
}
type Config = {
  source_labels?: string[] | undefined
  separator?: string | undefined
  regex?: string | undefined
  modulus?: bigint | undefined
  target_label?: string | undefined
  replacement?: string | undefined
  action?: string | undefined
}
type RelabelStep = { rule: Config; output: Labels; keep: boolean }
type RelabelStepsResponse = { steps: RelabelStep[] }
type TargetRelabelStepsOutputBody = {
  status: 'success' | 'error'
  data: RelabelStepsResponse
  warnings?: string[] | undefined
  infos?: string[] | undefined
}
type RuleGroup = {
  name: string
  file: string
  rules: { [x: string]: unknown }[]
  interval: number
  limit: bigint
  evaluationTime: number
  lastEvaluation: string
}
type RuleDiscovery = { groups: RuleGroup[]; groupNextToken?: string | undefined }
type RulesOutputBody = {
  status: 'success' | 'error'
  data: RuleDiscovery
  warnings?: string[] | undefined
  infos?: string[] | undefined
}
type Alert = {
  labels: Labels
  annotations: Labels
  state: string
  value: string
  activeAt?: string | undefined
  keepFiringSince?: string | undefined
}
type AlertDiscovery = { alerts: Alert[] }
type AlertsOutputBody = {
  status: 'success' | 'error'
  data: AlertDiscovery
  warnings?: string[] | undefined
  infos?: string[] | undefined
}
type AlertmanagerTarget = { url: string }
type AlertmanagerDiscovery = {
  activeAlertmanagers: AlertmanagerTarget[]
  droppedAlertmanagers: AlertmanagerTarget[]
}
type AlertmanagersOutputBody = {
  status: 'success' | 'error'
  data: AlertmanagerDiscovery
  warnings?: string[] | undefined
  infos?: string[] | undefined
}
type StatusConfigData = { yaml: string }
type StatusConfigOutputBody = {
  status: 'success' | 'error'
  data: StatusConfigData
  warnings?: string[] | undefined
  infos?: string[] | undefined
}
type RuntimeInfo = {
  startTime: string
  CWD: string
  hostname: string
  serverTime: string
  reloadConfigSuccess: boolean
  lastConfigTime: string
  corruptionCount: bigint
  goroutineCount: bigint
  GOMAXPROCS: bigint
  GOMEMLIMIT: bigint
  GOGC: string
  GODEBUG: string
  storageRetention: string
}
type StatusRuntimeInfoOutputBody = {
  status: 'success' | 'error'
  data: RuntimeInfo
  warnings?: string[] | undefined
  infos?: string[] | undefined
}
type PrometheusVersion = {
  version: string
  revision: string
  branch: string
  buildUser: string
  buildDate: string
  goVersion: string
}
type StatusBuildInfoOutputBody = {
  status: 'success' | 'error'
  data: PrometheusVersion
  warnings?: string[] | undefined
  infos?: string[] | undefined
}
type StatusFlagsOutputBody = {
  status: 'success' | 'error'
  data: { [x: string]: string }
  warnings?: string[] | undefined
  infos?: string[] | undefined
}
type HeadStats = {
  numSeries: bigint
  numLabelPairs: bigint
  chunkCount: bigint
  minTime: bigint
  maxTime: bigint
}
type TSDBStat = { name: string; value: bigint }
type TSDBStatus = {
  headStats: HeadStats
  seriesCountByMetricName: TSDBStat[]
  labelValueCountByLabelName: TSDBStat[]
  memoryInBytesByLabelName: TSDBStat[]
  seriesCountByLabelValuePair: TSDBStat[]
}
type StatusTSDBOutputBody = {
  status: 'success' | 'error'
  data: TSDBStatus
  warnings?: string[] | undefined
  infos?: string[] | undefined
}
type BlockStats = {
  numSamples?: bigint | undefined
  numSeries?: bigint | undefined
  numChunks?: bigint | undefined
  numTombstones?: bigint | undefined
  numFloatSamples?: bigint | undefined
  numHistogramSamples?: bigint | undefined
}
type BlockDesc = { ulid: string; minTime: bigint; maxTime: bigint }
type BlockMetaCompaction = {
  level: bigint
  sources?: string[] | undefined
  parents?: BlockDesc[] | undefined
  failed?: boolean | undefined
  deletable?: boolean | undefined
  hints?: string[] | undefined
}
type BlockMeta = {
  ulid: string
  minTime: bigint
  maxTime: bigint
  stats?: BlockStats | undefined
  compaction: BlockMetaCompaction
  version: bigint
}
type StatusTSDBBlocksData = { blocks: BlockMeta[] }
type StatusTSDBBlocksOutputBody = {
  status: 'success' | 'error'
  data: StatusTSDBBlocksData
  warnings?: string[] | undefined
  infos?: string[] | undefined
}
type StatusWALReplayData = { min: bigint; max: bigint; current: bigint }
type StatusWALReplayOutputBody = {
  status: 'success' | 'error'
  data: StatusWALReplayData
  warnings?: string[] | undefined
  infos?: string[] | undefined
}
type StatusSelfMetricsOutputBody = {
  status: 'success' | 'error'
  data: { [x: string]: unknown }
  warnings?: string[] | undefined
  infos?: string[] | undefined
}
type DeleteSeriesOutputBody = {
  status: 'success' | 'error'
  warnings?: string[] | undefined
  infos?: string[] | undefined
}
type CleanTombstonesOutputBody = {
  status: 'success' | 'error'
  warnings?: string[] | undefined
  infos?: string[] | undefined
}
type DataStruct = { name: string }
type SnapshotOutputBody = {
  status: 'success' | 'error'
  data: DataStruct
  warnings?: string[] | undefined
  infos?: string[] | undefined
}
type Notification = { text: string; date: string; active: boolean }
type NotificationsOutputBody = {
  status: 'success' | 'error'
  data: Notification[]
  warnings?: string[] | undefined
  infos?: string[] | undefined
}
type FeaturesOutputBody = {
  status: 'success' | 'error'
  data: { [x: string]: unknown }
  warnings?: string[] | undefined
  infos?: string[] | undefined
}
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/query': {
      $get:
        | {
            input: {
              query: {
                limit?: bigint | undefined
                time?: string | number | undefined
                query: string
                timeout?: string | number | undefined
                lookback_delta?: string | number | undefined
                stats?: string | undefined
                cost?: boolean | undefined
                max_series?: bigint | undefined
                max_samples_read?: bigint | undefined
                max_query_duration?: string | number | undefined
              }
            }
            output: QueryOutputBody
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                limit?: bigint | undefined
                time?: string | number | undefined
                query: string
                timeout?: string | number | undefined
                lookback_delta?: string | number | undefined
                stats?: string | undefined
                cost?: boolean | undefined
                max_series?: bigint | undefined
                max_samples_read?: bigint | undefined
                max_query_duration?: string | number | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 200
          }
      $post:
        | {
            input: { json: QueryPostInputBody } & { form: QueryPostInputBody }
            output: QueryOutputBody
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: QueryPostInputBody } & { form: QueryPostInputBody }
            output: Error
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/query_range': {
      $get:
        | {
            input: {
              query: {
                limit?: bigint | undefined
                start: string | number
                end: string | number
                step: string | number
                query: string
                timeout?: string | number | undefined
                lookback_delta?: string | number | undefined
                stats?: string | undefined
                cost?: boolean | undefined
                max_series?: bigint | undefined
                max_samples_read?: bigint | undefined
                max_query_duration?: string | number | undefined
              }
            }
            output: QueryRangeOutputBody
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                limit?: bigint | undefined
                start: string | number
                end: string | number
                step: string | number
                query: string
                timeout?: string | number | undefined
                lookback_delta?: string | number | undefined
                stats?: string | undefined
                cost?: boolean | undefined
                max_series?: bigint | undefined
                max_samples_read?: bigint | undefined
                max_query_duration?: string | number | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 200
          }
      $post:
        | {
            input: { json: QueryRangePostInputBody } & { form: QueryRangePostInputBody }
            output: QueryRangeOutputBody
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: QueryRangePostInputBody } & { form: QueryRangePostInputBody }
            output: Error
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/query_cost': {
      $get:
        | {
            input: {
              query: {
                time?: string | number | undefined
                query: string
                timeout?: string | number | undefined
                lookback_delta?: string | number | undefined
                limit?: bigint | undefined
                stats?: string | undefined
                cost?: boolean | undefined
                max_series?: bigint | undefined
                max_samples_read?: bigint | undefined
                max_query_duration?: string | number | undefined
              }
            }
            output: QueryCostOutputBody
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                time?: string | number | undefined
                query: string
                timeout?: string | number | undefined
                lookback_delta?: string | number | undefined
                limit?: bigint | undefined
                stats?: string | undefined
                cost?: boolean | undefined
                max_series?: bigint | undefined
                max_samples_read?: bigint | undefined
                max_query_duration?: string | number | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 200
          }
      $post:
        | {
            input: { json: QueryCostPostInputBody } & { form: QueryCostPostInputBody }
            output: QueryCostOutputBody
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: QueryCostPostInputBody } & { form: QueryCostPostInputBody }
            output: Error
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/query_range_cost': {
      $get:
        | {
            input: {
              query: {
                start: string | number
                end: string | number
                step: string | number
                query: string
                timeout?: string | number | undefined
                lookback_delta?: string | number | undefined
                limit?: bigint | undefined
                stats?: string | undefined
                cost?: boolean | undefined
                max_series?: bigint | undefined
                max_samples_read?: bigint | undefined
                max_query_duration?: string | number | undefined
              }
            }
            output: QueryCostOutputBody
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                start: string | number
                end: string | number
                step: string | number
                query: string
                timeout?: string | number | undefined
                lookback_delta?: string | number | undefined
                limit?: bigint | undefined
                stats?: string | undefined
                cost?: boolean | undefined
                max_series?: bigint | undefined
                max_samples_read?: bigint | undefined
                max_query_duration?: string | number | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 200
          }
      $post:
        | {
            input: { json: QueryRangeCostPostInputBody } & { form: QueryRangeCostPostInputBody }
            output: QueryCostOutputBody
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: QueryRangeCostPostInputBody } & { form: QueryRangeCostPostInputBody }
            output: Error
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/query_exemplars': {
      $get:
        | {
            input: {
              query: {
                start?: string | number | undefined
                end?: string | number | undefined
                query: string
              }
            }
            output: QueryExemplarsOutputBody
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                start?: string | number | undefined
                end?: string | number | undefined
                query: string
              }
            }
            output: Error
            outputFormat: 'json'
            status: 200
          }
      $post:
        | {
            input: { json: QueryExemplarsPostInputBody } & { form: QueryExemplarsPostInputBody }
            output: QueryExemplarsOutputBody
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: QueryExemplarsPostInputBody } & { form: QueryExemplarsPostInputBody }
            output: Error
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/format_query': {
      $get:
        | {
            input: { query: { query: string } }
            output: FormatQueryOutputBody
            outputFormat: 'json'
            status: 200
          }
        | { input: { query: { query: string } }; output: Error; outputFormat: 'json'; status: 200 }
      $post:
        | {
            input: { json: FormatQueryPostInputBody } & { form: FormatQueryPostInputBody }
            output: FormatQueryOutputBody
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: FormatQueryPostInputBody } & { form: FormatQueryPostInputBody }
            output: Error
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/parse_query': {
      $get:
        | {
            input: { query: { query: string } }
            output: ParseQueryOutputBody
            outputFormat: 'json'
            status: 200
          }
        | { input: { query: { query: string } }; output: Error; outputFormat: 'json'; status: 200 }
      $post:
        | {
            input: { json: ParseQueryPostInputBody } & { form: ParseQueryPostInputBody }
            output: ParseQueryOutputBody
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: ParseQueryPostInputBody } & { form: ParseQueryPostInputBody }
            output: Error
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/labels': {
      $get:
        | {
            input: {
              query: {
                start?: string | number | undefined
                end?: string | number | undefined
                'match[]'?: string[] | undefined
                limit?: bigint | undefined
              }
            }
            output: LabelsOutputBody
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                start?: string | number | undefined
                end?: string | number | undefined
                'match[]'?: string[] | undefined
                limit?: bigint | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 200
          }
      $post:
        | {
            input: { json: LabelsPostInputBody } & { form: LabelsPostInputBody }
            output: LabelsOutputBody
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: LabelsPostInputBody } & { form: LabelsPostInputBody }
            output: Error
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/label/:name/values': {
      $get:
        | {
            input: { param: { name: string } } & {
              query: {
                start?: string | number | undefined
                end?: string | number | undefined
                'match[]'?: string[] | undefined
                limit?: bigint | undefined
              }
            }
            output: LabelValuesOutputBody
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { name: string } } & {
              query: {
                start?: string | number | undefined
                end?: string | number | undefined
                'match[]'?: string[] | undefined
                limit?: bigint | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/search/metric_names': {
      $get:
        | {
            input: {
              query: {
                'match[]'?: string[] | undefined
                'search[]'?: string[] | undefined
                search_expr?: string | undefined
                fuzz_threshold?: bigint | undefined
                fuzz_alg?: 'subsequence' | 'jarowinkler' | undefined
                case_sensitive?: boolean | undefined
                sort_by?: 'alpha' | 'score' | undefined
                sort_dir?: 'asc' | 'dsc' | undefined
                include_score?: boolean | undefined
                include_metadata?: boolean | undefined
                start?: string | number | undefined
                end?: string | number | undefined
                limit?: bigint | undefined
                batch_size?: bigint | undefined
              }
            }
            output: string
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              query: {
                'match[]'?: string[] | undefined
                'search[]'?: string[] | undefined
                search_expr?: string | undefined
                fuzz_threshold?: bigint | undefined
                fuzz_alg?: 'subsequence' | 'jarowinkler' | undefined
                case_sensitive?: boolean | undefined
                sort_by?: 'alpha' | 'score' | undefined
                sort_dir?: 'asc' | 'dsc' | undefined
                include_score?: boolean | undefined
                include_metadata?: boolean | undefined
                start?: string | number | undefined
                end?: string | number | undefined
                limit?: bigint | undefined
                batch_size?: bigint | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 200
          }
      $post:
        | {
            input: { json: SearchMetricNamesPostInputBody } & {
              form: SearchMetricNamesPostInputBody
            }
            output: string
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { json: SearchMetricNamesPostInputBody } & {
              form: SearchMetricNamesPostInputBody
            }
            output: Error
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/search/label_names': {
      $get:
        | {
            input: {
              query: {
                'match[]'?: string[] | undefined
                'search[]'?: string[] | undefined
                search_expr?: string | undefined
                fuzz_threshold?: bigint | undefined
                fuzz_alg?: 'subsequence' | 'jarowinkler' | undefined
                case_sensitive?: boolean | undefined
                sort_by?: 'alpha' | 'score' | undefined
                sort_dir?: 'asc' | 'dsc' | undefined
                include_score?: boolean | undefined
                start?: string | number | undefined
                end?: string | number | undefined
                limit?: bigint | undefined
                batch_size?: bigint | undefined
              }
            }
            output: string
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              query: {
                'match[]'?: string[] | undefined
                'search[]'?: string[] | undefined
                search_expr?: string | undefined
                fuzz_threshold?: bigint | undefined
                fuzz_alg?: 'subsequence' | 'jarowinkler' | undefined
                case_sensitive?: boolean | undefined
                sort_by?: 'alpha' | 'score' | undefined
                sort_dir?: 'asc' | 'dsc' | undefined
                include_score?: boolean | undefined
                start?: string | number | undefined
                end?: string | number | undefined
                limit?: bigint | undefined
                batch_size?: bigint | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 200
          }
      $post:
        | {
            input: { json: SearchLabelNamesPostInputBody } & { form: SearchLabelNamesPostInputBody }
            output: string
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { json: SearchLabelNamesPostInputBody } & { form: SearchLabelNamesPostInputBody }
            output: Error
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/search/label_values': {
      $get:
        | {
            input: {
              query: {
                label: string
                'match[]'?: string[] | undefined
                'search[]'?: string[] | undefined
                search_expr?: string | undefined
                fuzz_threshold?: bigint | undefined
                fuzz_alg?: 'subsequence' | 'jarowinkler' | undefined
                case_sensitive?: boolean | undefined
                sort_by?: 'alpha' | 'score' | undefined
                sort_dir?: 'asc' | 'dsc' | undefined
                include_score?: boolean | undefined
                start?: string | number | undefined
                end?: string | number | undefined
                limit?: bigint | undefined
                batch_size?: bigint | undefined
              }
            }
            output: string
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              query: {
                label: string
                'match[]'?: string[] | undefined
                'search[]'?: string[] | undefined
                search_expr?: string | undefined
                fuzz_threshold?: bigint | undefined
                fuzz_alg?: 'subsequence' | 'jarowinkler' | undefined
                case_sensitive?: boolean | undefined
                sort_by?: 'alpha' | 'score' | undefined
                sort_dir?: 'asc' | 'dsc' | undefined
                include_score?: boolean | undefined
                start?: string | number | undefined
                end?: string | number | undefined
                limit?: bigint | undefined
                batch_size?: bigint | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 200
          }
      $post:
        | {
            input: { json: SearchLabelValuesPostInputBody } & {
              form: SearchLabelValuesPostInputBody
            }
            output: string
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { json: SearchLabelValuesPostInputBody } & {
              form: SearchLabelValuesPostInputBody
            }
            output: Error
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/series': {
      $get:
        | {
            input: {
              query: {
                start?: string | number | undefined
                end?: string | number | undefined
                'match[]': string[]
                limit?: bigint | undefined
              }
            }
            output: SeriesOutputBody
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                start?: string | number | undefined
                end?: string | number | undefined
                'match[]': string[]
                limit?: bigint | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 200
          }
      $post:
        | {
            input: { json: SeriesPostInputBody } & { form: SeriesPostInputBody }
            output: SeriesOutputBody
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: SeriesPostInputBody } & { form: SeriesPostInputBody }
            output: Error
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/metadata': {
      $get:
        | {
            input: {
              query: {
                limit?: bigint | undefined
                limit_per_metric?: bigint | undefined
                metric?: string | undefined
              }
            }
            output: MetadataOutputBody
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                limit?: bigint | undefined
                limit_per_metric?: bigint | undefined
                metric?: string | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/scrape_pools': {
      $get:
        | { input: {}; output: ScrapePoolsOutputBody; outputFormat: 'json'; status: 200 }
        | { input: {}; output: Error; outputFormat: 'json'; status: 200 }
    }
  } & {
    '/scrape_pools/config': {
      $get:
        | {
            input: { query: { scrapePool: string } }
            output: ScrapePoolConfigOutputBody
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { scrapePool: string } }
            output: Error
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/targets': {
      $get:
        | {
            input: { query: { scrapePool?: string | undefined; state?: string | undefined } }
            output: TargetsOutputBody
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { scrapePool?: string | undefined; state?: string | undefined } }
            output: Error
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/targets/metadata': {
      $get:
        | {
            input: {
              query: {
                match_target?: string | undefined
                metric?: string | undefined
                limit?: bigint | undefined
              }
            }
            output: TargetMetadataOutputBody
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                match_target?: string | undefined
                metric?: string | undefined
                limit?: bigint | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/targets/relabel_steps': {
      $get:
        | {
            input: { query: { scrapePool: string; labels: string } }
            output: TargetRelabelStepsOutputBody
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { scrapePool: string; labels: string } }
            output: Error
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/rules': {
      $get:
        | {
            input: {
              query: {
                type?: string | undefined
                'rule_name[]'?: string[] | undefined
                'rule_group[]'?: string[] | undefined
                'file[]'?: string[] | undefined
                'match[]'?: string[] | undefined
                exclude_alerts?: string | undefined
                group_limit?: bigint | undefined
                group_next_token?: string | undefined
              }
            }
            output: RulesOutputBody
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                type?: string | undefined
                'rule_name[]'?: string[] | undefined
                'rule_group[]'?: string[] | undefined
                'file[]'?: string[] | undefined
                'match[]'?: string[] | undefined
                exclude_alerts?: string | undefined
                group_limit?: bigint | undefined
                group_next_token?: string | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/alerts': {
      $get:
        | { input: {}; output: AlertsOutputBody; outputFormat: 'json'; status: 200 }
        | { input: {}; output: Error; outputFormat: 'json'; status: 200 }
    }
  } & {
    '/alertmanagers': {
      $get:
        | { input: {}; output: AlertmanagersOutputBody; outputFormat: 'json'; status: 200 }
        | { input: {}; output: Error; outputFormat: 'json'; status: 200 }
    }
  } & {
    '/status/config': {
      $get:
        | { input: {}; output: StatusConfigOutputBody; outputFormat: 'json'; status: 200 }
        | { input: {}; output: Error; outputFormat: 'json'; status: 200 }
    }
  } & {
    '/status/runtimeinfo': {
      $get:
        | { input: {}; output: StatusRuntimeInfoOutputBody; outputFormat: 'json'; status: 200 }
        | { input: {}; output: Error; outputFormat: 'json'; status: 200 }
    }
  } & {
    '/status/buildinfo': {
      $get:
        | { input: {}; output: StatusBuildInfoOutputBody; outputFormat: 'json'; status: 200 }
        | { input: {}; output: Error; outputFormat: 'json'; status: 200 }
    }
  } & {
    '/status/flags': {
      $get:
        | { input: {}; output: StatusFlagsOutputBody; outputFormat: 'json'; status: 200 }
        | { input: {}; output: Error; outputFormat: 'json'; status: 200 }
    }
  } & {
    '/status/tsdb': {
      $get:
        | {
            input: { query: { limit?: bigint | undefined } }
            output: StatusTSDBOutputBody
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { limit?: bigint | undefined } }
            output: Error
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/status/tsdb/blocks': {
      $get:
        | { input: {}; output: StatusTSDBBlocksOutputBody; outputFormat: 'json'; status: 200 }
        | { input: {}; output: Error; outputFormat: 'json'; status: 200 }
    }
  } & {
    '/status/walreplay': {
      $get:
        | { input: {}; output: StatusWALReplayOutputBody; outputFormat: 'json'; status: 200 }
        | { input: {}; output: Error; outputFormat: 'json'; status: 200 }
    }
  } & {
    '/status/self_metrics': {
      $get:
        | {
            input: { query: { metric_name_pattern?: string | undefined } }
            output: StatusSelfMetricsOutputBody
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { metric_name_pattern?: string | undefined } }
            output: Error
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/admin/tsdb/delete_series': {
      $put:
        | {
            input: {
              query: {
                'match[]': string[]
                start?: string | number | undefined
                end?: string | number | undefined
              }
            }
            output: DeleteSeriesOutputBody
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                'match[]': string[]
                start?: string | number | undefined
                end?: string | number | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 200
          }
      $post:
        | {
            input: {
              query: {
                'match[]': string[]
                start?: string | number | undefined
                end?: string | number | undefined
              }
            }
            output: DeleteSeriesOutputBody
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                'match[]': string[]
                start?: string | number | undefined
                end?: string | number | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/admin/tsdb/clean_tombstones': {
      $put:
        | { input: {}; output: CleanTombstonesOutputBody; outputFormat: 'json'; status: 200 }
        | { input: {}; output: Error; outputFormat: 'json'; status: 200 }
      $post:
        | { input: {}; output: CleanTombstonesOutputBody; outputFormat: 'json'; status: 200 }
        | { input: {}; output: Error; outputFormat: 'json'; status: 200 }
    }
  } & {
    '/admin/tsdb/snapshot': {
      $put:
        | {
            input: { query: { skip_head?: string | undefined } }
            output: SnapshotOutputBody
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { skip_head?: string | undefined } }
            output: Error
            outputFormat: 'json'
            status: 200
          }
      $post:
        | {
            input: { query: { skip_head?: string | undefined } }
            output: SnapshotOutputBody
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { skip_head?: string | undefined } }
            output: Error
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/read': {
      $post:
        | { input: {}; output: {}; outputFormat: string; status: 204 }
        | { input: {}; output: Error; outputFormat: 'json'; status: 200 }
    }
  } & {
    '/write': {
      $post:
        | { input: {}; output: {}; outputFormat: string; status: 204 }
        | { input: {}; output: Error; outputFormat: 'json'; status: 200 }
    }
  } & {
    '/otlp/v1/metrics': {
      $post:
        | { input: {}; output: {}; outputFormat: string; status: 204 }
        | { input: {}; output: Error; outputFormat: 'json'; status: 200 }
    }
  } & {
    '/notifications': {
      $get:
        | { input: {}; output: NotificationsOutputBody; outputFormat: 'json'; status: 200 }
        | { input: {}; output: Error; outputFormat: 'json'; status: 200 }
    }
  } & {
    '/features': {
      $get:
        | { input: {}; output: FeaturesOutputBody; outputFormat: 'json'; status: 200 }
        | { input: {}; output: Error; outputFormat: 'json'; status: 200 }
    }
  },
  '/'
>
export default routes
