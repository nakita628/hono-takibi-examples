type MonitoredProject = { createTime?: string | undefined; name?: string | undefined }
type MetricsScope = {
  createTime?: string | undefined
  monitoredProjects?: MonitoredProject[] | undefined
  name?: string | undefined
  updateTime?: string | undefined
}
type ListMetricsScopesByMonitoredProjectResponse = { metricsScopes?: MetricsScope[] | undefined }
type Empty = { [x: string]: unknown }
type AlertChart = { name?: string | undefined }
type CollapsibleGroup = { collapsed?: boolean | undefined }
type ErrorReportingPanel = {
  projectNames?: string[] | undefined
  services?: string[] | undefined
  versions?: string[] | undefined
}
type MonitoredResource = { labels?: { [x: string]: string } | undefined; type?: string | undefined }
type IncidentList = {
  monitoredResources?: MonitoredResource[] | undefined
  policyNames?: string[] | undefined
}
type LogsPanel = { filter?: string | undefined; resourceNames?: string[] | undefined }
type Dimension = {
  column?: string | undefined
  columnType?: string | undefined
  floatBinSize?: number | undefined
  maxBinCount?: number | undefined
  numericBinSize?: number | undefined
  sortColumn?: string | undefined
  sortOrder?:
    | 'SORT_ORDER_UNSPECIFIED'
    | 'SORT_ORDER_NONE'
    | 'SORT_ORDER_ASCENDING'
    | 'SORT_ORDER_DESCENDING'
    | undefined
  timeBinSize?: string | undefined
}
type Parameter = { doubleValue?: number | undefined; intValue?: string | undefined }
type AggregationFunction = { parameters?: Parameter[] | undefined; type?: string | undefined }
type Measure = {
  aggregationFunction?: AggregationFunction | undefined
  column?: string | undefined
}
type OpsAnalyticsQuery = { sql?: string | undefined }
type Aggregation = {
  alignmentPeriod?: string | undefined
  crossSeriesReducer?:
    | 'REDUCE_NONE'
    | 'REDUCE_MEAN'
    | 'REDUCE_MIN'
    | 'REDUCE_MAX'
    | 'REDUCE_SUM'
    | 'REDUCE_STDDEV'
    | 'REDUCE_COUNT'
    | 'REDUCE_COUNT_TRUE'
    | 'REDUCE_COUNT_FALSE'
    | 'REDUCE_FRACTION_TRUE'
    | 'REDUCE_PERCENTILE_99'
    | 'REDUCE_PERCENTILE_95'
    | 'REDUCE_PERCENTILE_50'
    | 'REDUCE_PERCENTILE_05'
    | undefined
  groupByFields?: string[] | undefined
  perSeriesAligner?:
    | 'ALIGN_NONE'
    | 'ALIGN_DELTA'
    | 'ALIGN_RATE'
    | 'ALIGN_INTERPOLATE'
    | 'ALIGN_NEXT_OLDER'
    | 'ALIGN_MIN'
    | 'ALIGN_MAX'
    | 'ALIGN_MEAN'
    | 'ALIGN_COUNT'
    | 'ALIGN_SUM'
    | 'ALIGN_STDDEV'
    | 'ALIGN_COUNT_TRUE'
    | 'ALIGN_COUNT_FALSE'
    | 'ALIGN_FRACTION_TRUE'
    | 'ALIGN_PERCENTILE_99'
    | 'ALIGN_PERCENTILE_95'
    | 'ALIGN_PERCENTILE_50'
    | 'ALIGN_PERCENTILE_05'
    | 'ALIGN_PERCENT_CHANGE'
    | undefined
}
type Interval = { endTime?: string | undefined; startTime?: string | undefined }
type PickTimeSeriesFilter = {
  direction?: 'DIRECTION_UNSPECIFIED' | 'TOP' | 'BOTTOM' | undefined
  interval?: Interval | undefined
  numTimeSeries?: number | undefined
  rankingMethod?:
    | 'METHOD_UNSPECIFIED'
    | 'METHOD_MEAN'
    | 'METHOD_MAX'
    | 'METHOD_MIN'
    | 'METHOD_SUM'
    | 'METHOD_LATEST'
    | undefined
}
type StatisticalTimeSeriesFilter = {
  numTimeSeries?: number | undefined
  rankingMethod?: 'METHOD_UNSPECIFIED' | 'METHOD_CLUSTER_OUTLIER' | undefined
}
type TimeSeriesFilter = {
  aggregation?: Aggregation | undefined
  filter?: string | undefined
  pickTimeSeriesFilter?: PickTimeSeriesFilter | undefined
  secondaryAggregation?: Aggregation | undefined
  statisticalTimeSeriesFilter?: StatisticalTimeSeriesFilter | undefined
}
type RatioPart = { aggregation?: Aggregation | undefined; filter?: string | undefined }
type TimeSeriesFilterRatio = {
  denominator?: RatioPart | undefined
  numerator?: RatioPart | undefined
  pickTimeSeriesFilter?: PickTimeSeriesFilter | undefined
  secondaryAggregation?: Aggregation | undefined
  statisticalTimeSeriesFilter?: StatisticalTimeSeriesFilter | undefined
}
type TimeSeriesQuery = {
  opsAnalyticsQuery?: OpsAnalyticsQuery | undefined
  outputFullDuration?: boolean | undefined
  prometheusQuery?: string | undefined
  timeSeriesFilter?: TimeSeriesFilter | undefined
  timeSeriesFilterRatio?: TimeSeriesFilterRatio | undefined
  timeSeriesQueryLanguage?: string | undefined
  unitOverride?: string | undefined
}
type PieChartDataSet = {
  dimensions?: Dimension[] | undefined
  measures?: Measure[] | undefined
  minAlignmentPeriod?: string | undefined
  sliceNameTemplate?: string | undefined
  timeSeriesQuery?: TimeSeriesQuery | undefined
}
type PieChart = {
  chartType?: 'PIE_CHART_TYPE_UNSPECIFIED' | 'PIE' | 'DONUT' | undefined
  dataSets?: PieChartDataSet[] | undefined
  showLabels?: boolean | undefined
}
type GaugeView = { lowerBound?: number | undefined; upperBound?: number | undefined }
type SparkChartView = {
  minAlignmentPeriod?: string | undefined
  sparkChartType?: 'SPARK_CHART_TYPE_UNSPECIFIED' | 'SPARK_LINE' | 'SPARK_BAR' | undefined
}
type Threshold = {
  color?: 'COLOR_UNSPECIFIED' | 'YELLOW' | 'RED' | undefined
  direction?: 'DIRECTION_UNSPECIFIED' | 'ABOVE' | 'BELOW' | undefined
  label?: string | undefined
  targetAxis?: 'TARGET_AXIS_UNSPECIFIED' | 'Y1' | 'Y2' | undefined
  value?: number | undefined
}
type Scorecard = {
  blankView?: Empty | undefined
  gaugeView?: GaugeView | undefined
  sparkChartView?: SparkChartView | undefined
  thresholds?: Threshold[] | undefined
  timeSeriesQuery?: TimeSeriesQuery | undefined
}
type SectionHeader = { dividerBelow?: boolean | undefined; subtitle?: string | undefined }
type SingleViewGroup = { [x: string]: unknown }
type TextStyle = {
  backgroundColor?: string | undefined
  fontSize?:
    | 'FONT_SIZE_UNSPECIFIED'
    | 'FS_EXTRA_SMALL'
    | 'FS_SMALL'
    | 'FS_MEDIUM'
    | 'FS_LARGE'
    | 'FS_EXTRA_LARGE'
    | undefined
  horizontalAlignment?:
    | 'HORIZONTAL_ALIGNMENT_UNSPECIFIED'
    | 'H_LEFT'
    | 'H_CENTER'
    | 'H_RIGHT'
    | undefined
  padding?:
    | 'PADDING_SIZE_UNSPECIFIED'
    | 'P_EXTRA_SMALL'
    | 'P_SMALL'
    | 'P_MEDIUM'
    | 'P_LARGE'
    | 'P_EXTRA_LARGE'
    | undefined
  pointerLocation?:
    | 'POINTER_LOCATION_UNSPECIFIED'
    | 'PL_TOP'
    | 'PL_RIGHT'
    | 'PL_BOTTOM'
    | 'PL_LEFT'
    | 'PL_TOP_LEFT'
    | 'PL_TOP_RIGHT'
    | 'PL_RIGHT_TOP'
    | 'PL_RIGHT_BOTTOM'
    | 'PL_BOTTOM_RIGHT'
    | 'PL_BOTTOM_LEFT'
    | 'PL_LEFT_BOTTOM'
    | 'PL_LEFT_TOP'
    | undefined
  textColor?: string | undefined
  verticalAlignment?:
    | 'VERTICAL_ALIGNMENT_UNSPECIFIED'
    | 'V_TOP'
    | 'V_CENTER'
    | 'V_BOTTOM'
    | undefined
}
type Text = {
  content?: string | undefined
  format?: 'FORMAT_UNSPECIFIED' | 'MARKDOWN' | 'RAW' | undefined
  style?: TextStyle | undefined
}
type ColumnSettings = { column?: string | undefined; visible?: boolean | undefined }
type TableDisplayOptions = { shownColumns?: string[] | undefined }
type TableDataSet = {
  minAlignmentPeriod?: string | undefined
  tableDisplayOptions?: TableDisplayOptions | undefined
  tableTemplate?: string | undefined
  timeSeriesQuery?: TimeSeriesQuery | undefined
}
type TimeSeriesTable = {
  columnSettings?: ColumnSettings[] | undefined
  dataSets?: TableDataSet[] | undefined
  metricVisualization?: 'METRIC_VISUALIZATION_UNSPECIFIED' | 'NUMBER' | 'BAR' | undefined
}
type ChartOptions = {
  displayHorizontal?: boolean | undefined
  mode?: 'MODE_UNSPECIFIED' | 'COLOR' | 'X_RAY' | 'STATS' | undefined
}
type Breakdown = {
  aggregationFunction?: AggregationFunction | undefined
  column?: string | undefined
  limit?: number | undefined
  sortOrder?:
    | 'SORT_ORDER_UNSPECIFIED'
    | 'SORT_ORDER_NONE'
    | 'SORT_ORDER_ASCENDING'
    | 'SORT_ORDER_DESCENDING'
    | undefined
}
type DataSet = {
  breakdowns?: Breakdown[] | undefined
  dimensions?: Dimension[] | undefined
  legendTemplate?: string | undefined
  measures?: Measure[] | undefined
  minAlignmentPeriod?: string | undefined
  plotType?:
    | 'PLOT_TYPE_UNSPECIFIED'
    | 'LINE'
    | 'STACKED_AREA'
    | 'STACKED_BAR'
    | 'HEATMAP'
    | undefined
  targetAxis?: 'TARGET_AXIS_UNSPECIFIED' | 'Y1' | 'Y2' | undefined
  timeSeriesQuery?: TimeSeriesQuery | undefined
}
type Axis = {
  label?: string | undefined
  scale?: 'SCALE_UNSPECIFIED' | 'LINEAR' | 'LOG10' | undefined
}
type XyChart = {
  chartOptions?: ChartOptions | undefined
  dataSets?: DataSet[] | undefined
  thresholds?: Threshold[] | undefined
  timeshiftDuration?: string | undefined
  xAxis?: Axis | undefined
  y2Axis?: Axis | undefined
  yAxis?: Axis | undefined
}
type Widget = {
  alertChart?: AlertChart | undefined
  blank?: Empty | undefined
  collapsibleGroup?: CollapsibleGroup | undefined
  errorReportingPanel?: ErrorReportingPanel | undefined
  id?: string | undefined
  incidentList?: IncidentList | undefined
  logsPanel?: LogsPanel | undefined
  pieChart?: PieChart | undefined
  scorecard?: Scorecard | undefined
  sectionHeader?: SectionHeader | undefined
  singleViewGroup?: SingleViewGroup | undefined
  text?: Text | undefined
  timeSeriesTable?: TimeSeriesTable | undefined
  title?: string | undefined
  xyChart?: XyChart | undefined
}
type Column = { weight?: string | undefined; widgets?: Widget[] | undefined }
type ColumnLayout = { columns?: Column[] | undefined }
type DashboardFilter = {
  filterType?:
    | 'FILTER_TYPE_UNSPECIFIED'
    | 'RESOURCE_LABEL'
    | 'METRIC_LABEL'
    | 'USER_METADATA_LABEL'
    | 'SYSTEM_METADATA_LABEL'
    | 'GROUP'
    | undefined
  labelKey?: string | undefined
  stringValue?: string | undefined
  templateVariable?: string | undefined
}
type GridLayout = { columns?: string | undefined; widgets?: Widget[] | undefined }
type Tile = {
  height?: number | undefined
  widget?: Widget | undefined
  width?: number | undefined
  xPos?: number | undefined
  yPos?: number | undefined
}
type MosaicLayout = { columns?: number | undefined; tiles?: Tile[] | undefined }
type Row = { weight?: string | undefined; widgets?: Widget[] | undefined }
type RowLayout = { rows?: Row[] | undefined }
type Dashboard = {
  columnLayout?: ColumnLayout | undefined
  dashboardFilters?: DashboardFilter[] | undefined
  displayName?: string | undefined
  etag?: string | undefined
  gridLayout?: GridLayout | undefined
  labels?: { [x: string]: string } | undefined
  mosaicLayout?: MosaicLayout | undefined
  name?: string | undefined
  rowLayout?: RowLayout | undefined
}
type HttpBody = {
  contentType?: string | undefined
  data?: string | undefined
  extensions?: { [x: string]: { [x: string]: unknown } }[] | undefined
}
type QueryLabelsRequest = {
  end?: string | undefined
  match?: string | undefined
  start?: string | undefined
}
type QueryInstantRequest = {
  query?: string | undefined
  time?: string | undefined
  timeout?: string | undefined
}
type QueryExemplarsRequest = {
  end?: string | undefined
  query?: string | undefined
  start?: string | undefined
}
type QueryRangeRequest = {
  end?: string | undefined
  query?: string | undefined
  start?: string | undefined
  step?: string | undefined
  timeout?: string | undefined
}
type QuerySeriesRequest = { end?: string | undefined; start?: string | undefined }
type ListDashboardsResponse = {
  dashboards?: Dashboard[] | undefined
  nextPageToken?: string | undefined
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
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/v1/locations/global/metricsScopes:listMetricsScopesByMonitoredProject': {
      $get: {
        input: {
          query: {
            monitoredResourceContainer?: string | undefined
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
        output: ListMetricsScopesByMonitoredProjectResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/:name': {
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
        output: Dashboard
        outputFormat: 'json'
        status: 200
      }
      $patch: {
        input: { param: { name: string } } & {
          query: {
            validateOnly?: boolean | undefined
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
        } & { json: Dashboard }
        output: Dashboard
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/:name/location/:location/prometheus/api/v1/label/:label/values': {
      $get: {
        input: { param: { name: string; location: string; label: string } } & {
          query: {
            end?: string | undefined
            match?: string | undefined
            start?: string | undefined
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
        output: HttpBody
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/:name/location/:location/prometheus/api/v1/labels': {
      $post: {
        input: { param: { name: string; location: string } } & {
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
        } & { json: QueryLabelsRequest }
        output: HttpBody
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/:name/location/:location/prometheus/api/v1/metadata': {
      $get: {
        input: { param: { name: string; location: string } } & {
          query: {
            limit?: string | undefined
            metric?: string | undefined
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
        output: HttpBody
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/:name/location/:location/prometheus/api/v1/query': {
      $post: {
        input: { param: { name: string; location: string } } & {
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
        } & { json: QueryInstantRequest }
        output: HttpBody
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/:name/location/:location/prometheus/api/v1/query_exemplars': {
      $post: {
        input: { param: { name: string; location: string } } & {
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
        } & { json: QueryExemplarsRequest }
        output: HttpBody
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/:name/location/:location/prometheus/api/v1/query_range': {
      $post: {
        input: { param: { name: string; location: string } } & {
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
        } & { json: QueryRangeRequest }
        output: HttpBody
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/:name/location/:location/prometheus/api/v1/series': {
      $post: {
        input: { param: { name: string; location: string } } & {
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
        } & { json: QuerySeriesRequest }
        output: HttpBody
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/:parent/dashboards': {
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
        output: ListDashboardsResponse
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: { param: { parent: string } } & {
          query: {
            validateOnly?: boolean | undefined
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
        } & { json: Dashboard }
        output: Dashboard
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/:parent/projects': {
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
        } & { json: MonitoredProject }
        output: Operation
        outputFormat: 'json'
        status: 200
      }
    }
  },
  '/'
>
export default routes
