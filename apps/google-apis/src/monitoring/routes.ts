import { createRoute, z } from '@hono/zod-openapi'

const AggregationSchema = z
  .object({
    alignmentPeriod: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The alignment_period specifies a time interval, in seconds, that is used to divide the data in all the time series into consistent blocks of time. This will be done before the per-series aligner can be applied to the data.The value must be at least 60 seconds. If a per-series aligner other than ALIGN_NONE is specified, this field is required or an error is returned. If no per-series aligner is specified, or the aligner ALIGN_NONE is specified, then this field is ignored.The maximum value of the alignment_period is 2 years, or 104 weeks.',
      }),
    crossSeriesReducer: z
      .enum([
        'REDUCE_NONE',
        'REDUCE_MEAN',
        'REDUCE_MIN',
        'REDUCE_MAX',
        'REDUCE_SUM',
        'REDUCE_STDDEV',
        'REDUCE_COUNT',
        'REDUCE_COUNT_TRUE',
        'REDUCE_COUNT_FALSE',
        'REDUCE_FRACTION_TRUE',
        'REDUCE_PERCENTILE_99',
        'REDUCE_PERCENTILE_95',
        'REDUCE_PERCENTILE_50',
        'REDUCE_PERCENTILE_05',
      ])
      .exactOptional()
      .openapi({
        description:
          'The reduction operation to be used to combine time series into a single time series, where the value of each data point in the resulting series is a function of all the already aligned values in the input time series.Not all reducer operations can be applied to all time series. The valid choices depend on the metric_kind and the value_type of the original time series. Reduction can yield a time series with a different metric_kind or value_type than the input time series.Time series data must first be aligned (see per_series_aligner) in order to perform cross-time series reduction. If cross_series_reducer is specified, then per_series_aligner must be specified, and must not be ALIGN_NONE. An alignment_period must also be specified; otherwise, an error is returned.',
      }),
    groupByFields: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description:
          'The set of fields to preserve when cross_series_reducer is specified. The group_by_fields determine how the time series are partitioned into subsets prior to applying the aggregation operation. Each subset contains time series that have the same value for each of the grouping fields. Each individual time series is a member of exactly one subset. The cross_series_reducer is applied to each subset of time series. It is not possible to reduce across different resource types, so this field implicitly contains resource.type. Fields not specified in group_by_fields are aggregated away. If group_by_fields is not specified and all the time series have the same resource type, then the time series are aggregated into a single output time series. If cross_series_reducer is not defined, this field is ignored.',
      }),
    perSeriesAligner: z
      .enum([
        'ALIGN_NONE',
        'ALIGN_DELTA',
        'ALIGN_RATE',
        'ALIGN_INTERPOLATE',
        'ALIGN_NEXT_OLDER',
        'ALIGN_MIN',
        'ALIGN_MAX',
        'ALIGN_MEAN',
        'ALIGN_COUNT',
        'ALIGN_SUM',
        'ALIGN_STDDEV',
        'ALIGN_COUNT_TRUE',
        'ALIGN_COUNT_FALSE',
        'ALIGN_FRACTION_TRUE',
        'ALIGN_PERCENTILE_99',
        'ALIGN_PERCENTILE_95',
        'ALIGN_PERCENTILE_50',
        'ALIGN_PERCENTILE_05',
        'ALIGN_PERCENT_CHANGE',
      ])
      .exactOptional()
      .openapi({
        description:
          'An Aligner describes how to bring the data points in a single time series into temporal alignment. Except for ALIGN_NONE, all alignments cause all the data points in an alignment_period to be mathematically grouped together, resulting in a single data point for each alignment_period with end timestamp at the end of the period.Not all alignment operations may be applied to all time series. The valid choices depend on the metric_kind and value_type of the original time series. Alignment can change the metric_kind or the value_type of the time series.Time series data must be aligned in order to perform cross-time series reduction. If cross_series_reducer is specified, then per_series_aligner must be specified and not equal to ALIGN_NONE and alignment_period must be specified; otherwise, an error is returned.',
      }),
  })
  .openapi({
    description:
      'Describes how to combine multiple time series to provide a different view of the data. Aggregation of time series is done in two steps. First, each time series in the set is aligned to the same time interval boundaries, then the set of time series is optionally reduced in number.Alignment consists of applying the per_series_aligner operation to each time series after its data has been divided into regular alignment_period time intervals. This process takes all of the data points in an alignment period, applies a mathematical transformation such as averaging, minimum, maximum, delta, etc., and converts them into a single data point per period.Reduction is when the aligned and transformed time series can optionally be combined, reducing the number of time series through similar mathematical transformations. Reduction involves applying a cross_series_reducer to all the time series, optionally sorting the time series into subsets with group_by_fields, and applying the reducer to each subset.The raw time series data can contain a huge amount of information from multiple sources. Alignment and reduction transforms this mass of data into a more manageable and representative collection of data, for example "the 95% latency across the average of all tasks in a cluster". This representative data can be more easily graphed and comprehended, and the individual time series data is still available for later drilldown. For more details, see Filtering and aggregation (https://cloud.google.com/monitoring/api/v3/aggregation).',
    required: [],
  })
  .openapi('Aggregation')

const IntervalSchema = z
  .object({
    endTime: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Optional. Exclusive end of the interval.If specified, a Timestamp matching this interval will have to be before the end.',
      }),
    startTime: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Optional. Inclusive start of the interval.If specified, a Timestamp matching this interval will have to be the same or after the start.',
      }),
  })
  .openapi({
    description:
      'Represents a time interval, encoded as a Timestamp start (inclusive) and a Timestamp end (exclusive).The start must be less than or equal to the end. When the start equals the end, the interval is empty (matches no time). When both start and end are unspecified, the interval matches any time.',
    required: [],
  })
  .openapi('Interval')

const PickTimeSeriesFilterSchema = z
  .object({
    direction: z
      .enum(['DIRECTION_UNSPECIFIED', 'TOP', 'BOTTOM'])
      .exactOptional()
      .openapi({
        description: 'How to use the ranking to select time series that pass through the filter.',
      }),
    interval: IntervalSchema.exactOptional().openapi({
      description: 'Select the top N streams/time series within this time interval',
    }),
    numTimeSeries: z
      .int32()
      .exactOptional()
      .openapi({ description: 'How many time series to allow to pass through the filter.' }),
    rankingMethod: z
      .enum([
        'METHOD_UNSPECIFIED',
        'METHOD_MEAN',
        'METHOD_MAX',
        'METHOD_MIN',
        'METHOD_SUM',
        'METHOD_LATEST',
      ])
      .exactOptional()
      .openapi({
        description:
          'ranking_method is applied to each time series independently to produce the value which will be used to compare the time series to other time series.',
      }),
  })
  .openapi({
    description:
      'Describes a ranking-based time series filter. Each input time series is ranked with an aligner. The filter will allow up to num_time_series time series to pass through it, selecting them based on the relative ranking.For example, if ranking_method is METHOD_MEAN,direction is BOTTOM, and num_time_series is 3, then the 3 times series with the lowest mean values will pass through the filter.',
    required: [],
  })
  .openapi('PickTimeSeriesFilter')

const StatisticalTimeSeriesFilterSchema = z
  .object({
    numTimeSeries: z
      .int32()
      .exactOptional()
      .openapi({ description: 'How many time series to output.' }),
    rankingMethod: z
      .enum(['METHOD_UNSPECIFIED', 'METHOD_CLUSTER_OUTLIER'])
      .exactOptional()
      .openapi({
        description:
          'rankingMethod is applied to a set of time series, and then the produced value for each individual time series is used to compare a given time series to others. These are methods that cannot be applied stream-by-stream, but rather require the full context of a request to evaluate time series.',
      }),
  })
  .openapi({
    description:
      'A filter that ranks streams based on their statistical relation to other streams in a request. Note: This field is deprecated and completely ignored by the API.',
    required: [],
  })
  .openapi('StatisticalTimeSeriesFilter')

type TimeSeriesFilterType = {
  aggregation?: z.infer<typeof AggregationSchema>
  filter?: string
  pickTimeSeriesFilter?: z.infer<typeof PickTimeSeriesFilterSchema>
  secondaryAggregation?: z.infer<typeof AggregationSchema>
  statisticalTimeSeriesFilter?: z.infer<typeof StatisticalTimeSeriesFilterSchema>
}

const ParameterSchema = z
  .object({
    doubleValue: z
      .float64()
      .exactOptional()
      .openapi({ description: 'A floating-point parameter value.' }),
    intValue: z.string().exactOptional().openapi({ description: 'An integer parameter value.' }),
  })
  .openapi({
    description:
      'Preview: Parameter value applied to the aggregation function. This is a preview feature and may be subject to change before final release.',
    required: [],
  })
  .openapi('Parameter')

const AggregationFunctionSchema = z
  .object({
    parameters: z
      .array(ParameterSchema)
      .exactOptional()
      .openapi({
        description:
          'Optional. Parameters applied to the aggregation function. Only used for functions that require them.',
      }),
    type: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Required. The type of aggregation function, must be one of the following: "none" - no function. "percentile" - APPROX_QUANTILES() - 1 parameter numeric value "average" - AVG() "count" - COUNT() "count-distinct" - COUNT(DISTINCT) "count-distinct-approx" - APPROX_COUNT_DISTINCT() "max" - MAX() "min" - MIN() "sum" - SUM()',
      }),
  })
  .openapi({
    description:
      'Preview: An identifier for an aggregation function. Aggregation functions are SQL functions that group or transform data from multiple points to a single point. This is a preview feature and may be subject to change before final release.',
    required: [],
  })
  .openapi('AggregationFunction')

const AlertChartSchema = z
  .object({
    name: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Required. The resource name of the alert policy. The format is: projects/[PROJECT_ID_OR_NUMBER]/alertPolicies/[ALERT_POLICY_ID] ',
      }),
  })
  .openapi({ description: 'A chart that displays alert policy data.', required: [] })
  .openapi('AlertChart')

const AxisSchema = z
  .object({
    label: z.string().exactOptional().openapi({ description: 'The label of the axis.' }),
    scale: z
      .enum(['SCALE_UNSPECIFIED', 'LINEAR', 'LOG10'])
      .exactOptional()
      .openapi({ description: 'The axis scale. By default, a linear scale is used.' }),
  })
  .openapi({ description: 'A chart axis.', required: [] })
  .openapi('Axis')

const BreakdownSchema = z
  .object({
    aggregationFunction: AggregationFunctionSchema.exactOptional().openapi({
      description:
        'Required. The Aggregation function is applied across all data in each breakdown created.',
    }),
    column: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Required. The name of the column in the dataset containing the breakdown values.',
      }),
    limit: z
      .int32()
      .exactOptional()
      .openapi({
        description:
          'Required. A limit to the number of breakdowns. If set to zero then all possible breakdowns are applied. The list of breakdowns is dependent on the value of the sort_order field.',
      }),
    sortOrder: z
      .enum([
        'SORT_ORDER_UNSPECIFIED',
        'SORT_ORDER_NONE',
        'SORT_ORDER_ASCENDING',
        'SORT_ORDER_DESCENDING',
      ])
      .exactOptional()
      .openapi({
        description: 'Required. The sort order is applied to the values of the breakdown column.',
      }),
  })
  .openapi({
    description:
      'Preview: A breakdown is an aggregation applied to the measures over a specified column. A breakdown can result in multiple series across a category for the provided measure. This is a preview feature and may be subject to change before final release.',
    required: [],
  })
  .openapi('Breakdown')

const ChartOptionsSchema = z
  .object({
    displayHorizontal: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Preview: Configures whether the charted values are shown on the horizontal or vertical axis. By default, values are represented the vertical axis. This is a preview feature and may be subject to change before final release.',
      }),
    mode: z
      .enum(['MODE_UNSPECIFIED', 'COLOR', 'X_RAY', 'STATS'])
      .exactOptional()
      .openapi({ description: 'The chart mode.' }),
  })
  .openapi({ description: 'Options to control visual rendering of a chart.', required: [] })
  .openapi('ChartOptions')

const CollapsibleGroupSchema = z
  .object({
    collapsed: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'The collapsed state of the widget on first page load.' }),
  })
  .openapi({
    description:
      'A widget that groups the other widgets. All widgets that are within the area spanned by the grouping widget are considered member widgets.',
    required: [],
  })
  .openapi('CollapsibleGroup')

const EmptySchema = z
  .object({})
  .openapi({
    description:
      'A generic empty message that you can re-use to avoid defining duplicated empty messages in your APIs. A typical example is to use it as the request or the response type of an API method. For instance: service Foo { rpc Bar(google.protobuf.Empty) returns (google.protobuf.Empty); } ',
  })
  .openapi('Empty')

const ErrorReportingPanelSchema = z
  .object({
    projectNames: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description:
          'The resource name of the Google Cloud Platform project. Written as projects/{projectID} or projects/{projectNumber}, where {projectID} and {projectNumber} can be found in the Google Cloud console (https://support.google.com/cloud/answer/6158840).Examples: projects/my-project-123, projects/5551234.',
      }),
    services: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description:
          'An identifier of the service, such as the name of the executable, job, or Google App Engine service name. This field is expected to have a low number of values that are relatively stable over time, as opposed to version, which can be changed whenever new code is deployed.Contains the service name for error reports extracted from Google App Engine logs or default if the App Engine default service is used.',
      }),
    versions: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description:
          'Represents the source code version that the developer provided, which could represent a version label or a Git SHA-1 hash, for example. For App Engine standard environment, the version is set to the version of the app.',
      }),
  })
  .openapi({ description: 'A widget that displays a list of error groups.', required: [] })
  .openapi('ErrorReportingPanel')

const MonitoredResourceSchema = z
  .object({
    labels: z
      .record(z.string(), z.string())
      .exactOptional()
      .openapi({
        description:
          'Required. Values for all of the labels listed in the associated monitored resource descriptor. For example, Compute Engine VM instances use the labels "project_id", "instance_id", and "zone".',
      }),
    type: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Required. The monitored resource type. This field must match the type field of a MonitoredResourceDescriptor object. For example, the type of a Compute Engine VM instance is gce_instance. For a list of types, see Monitoring resource types (https://cloud.google.com/monitoring/api/resources) and Logging resource types (https://cloud.google.com/logging/docs/api/v2/resource-list).',
      }),
  })
  .openapi({
    description:
      'An object representing a resource that can be used for monitoring, logging, billing, or other purposes. Examples include virtual machine instances, databases, and storage devices such as disks. The type field identifies a MonitoredResourceDescriptor object that describes the resource\'s schema. Information in the labels field identifies the actual resource and its attributes according to the schema. For example, a particular Compute Engine VM instance could be represented by the following object, because the MonitoredResourceDescriptor for "gce_instance" has labels "project_id", "instance_id" and "zone": { "type": "gce_instance", "labels": { "project_id": "my-project", "instance_id": "12345678901234", "zone": "us-central1-a" }} ',
    required: [],
  })
  .openapi('MonitoredResource')

const IncidentListSchema = z
  .object({
    monitoredResources: z
      .array(MonitoredResourceSchema)
      .exactOptional()
      .openapi({
        description:
          "Optional. The monitored resource for which incidents are listed. The resource doesn't need to be fully specified. That is, you can specify the resource type but not the values of the resource labels. The resource type and labels are used for filtering.",
      }),
    policyNames: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description:
          "Optional. A list of alert policy names to filter the incident list by. Don't include the project ID prefix in the policy name. For example, use alertPolicies/utilization.",
      }),
  })
  .openapi({ description: 'A widget that displays a list of incidents', required: [] })
  .openapi('IncidentList')

const LogsPanelSchema = z
  .object({
    filter: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'A filter that chooses which log entries to return. See Advanced Logs Queries (https://cloud.google.com/logging/docs/view/advanced-queries). Only log entries that match the filter are returned. An empty filter matches all log entries.',
      }),
    resourceNames: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description:
          'The names of logging resources to collect logs for. Currently only projects are supported. If empty, the widget will default to the host project.',
      }),
  })
  .openapi({ description: 'A widget that displays a stream of log.', required: [] })
  .openapi('LogsPanel')

const DimensionSchema = z
  .object({
    column: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Required. The name of the column in the source SQL query that is used to chart the dimension.',
      }),
    columnType: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Optional. The type of the dimension column. This is relevant only if one of the bin_size fields is set. If it is empty, the type TIMESTAMP or INT64 will be assumed based on which bin_size field is set. If populated, this should be set to one of the following types: DATE, TIME, DATETIME, TIMESTAMP, BIGNUMERIC, INT64, NUMERIC, FLOAT64.',
      }),
    floatBinSize: z
      .float64()
      .exactOptional()
      .openapi({
        description:
          'Optional. float_bin_size is used when the column type used for a dimension is a floating point numeric column.',
      }),
    maxBinCount: z
      .int32()
      .exactOptional()
      .openapi({
        description:
          'A limit to the number of bins generated. When 0 is specified, the maximum count is not enforced.',
      }),
    numericBinSize: z
      .int32()
      .exactOptional()
      .openapi({
        description:
          'numeric_bin_size is used when the column type used for a dimension is numeric or string.',
      }),
    sortColumn: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The column name to sort on for binning. This column can be the same column as this dimension or any other column used as a measure in the results. If sort_order is set to NONE, then this value is not used.',
      }),
    sortOrder: z
      .enum([
        'SORT_ORDER_UNSPECIFIED',
        'SORT_ORDER_NONE',
        'SORT_ORDER_ASCENDING',
        'SORT_ORDER_DESCENDING',
      ])
      .exactOptional()
      .openapi({ description: 'The sort order applied to the sort column.' }),
    timeBinSize: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'time_bin_size is used when the data type specified by column is a time type and the bin size is determined by a time duration. If column_type is DATE, this must be a whole value multiple of 1 day. If column_type is TIME, this must be less than or equal to 24 hours.',
      }),
  })
  .openapi({
    description:
      'A chart dimension. Dimensions are a structured label, class, or category for a set of measurements in your data.',
    required: [],
  })
  .openapi('Dimension')

const MeasureSchema = z
  .object({
    aggregationFunction: AggregationFunctionSchema.exactOptional().openapi({
      description:
        'Required. The aggregation function applied to the input column. This must not be set to "none" unless binning is disabled on the dimension. The aggregation function is used to group points on the dimension bins.',
    }),
    column: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Required. The column name within in the dataset used for the measure.',
      }),
  })
  .openapi({
    description:
      'A chart measure. Measures represent a measured property in your chart data such as rainfall in inches, number of units sold, revenue gained, etc.',
    required: [],
  })
  .openapi('Measure')

const OpsAnalyticsQuerySchema = z
  .object({
    sql: z
      .string()
      .exactOptional()
      .openapi({
        description: 'A SQL query to fetch time series, category series, or numeric series data.',
      }),
  })
  .openapi({
    description:
      'Preview: A query that produces an aggregated response and supporting data. This is a preview feature and may be subject to change before final release.',
    required: [],
  })
  .openapi('OpsAnalyticsQuery')

const TimeSeriesFilterSchema: z.ZodType<TimeSeriesFilterType> = z
  .lazy(() =>
    z
      .object({
        aggregation: AggregationSchema.exactOptional().openapi({
          description:
            'By default, the raw time series data is returned. Use this field to combine multiple time series for different views of the data.',
        }),
        filter: z
          .string()
          .exactOptional()
          .openapi({
            description:
              'Required. The monitoring filter (https://cloud.google.com/monitoring/api/v3/filters) that identifies the metric types, resources, and projects to query.',
          }),
        pickTimeSeriesFilter: PickTimeSeriesFilterSchema.exactOptional().openapi({
          description: 'Ranking based time series filter.',
        }),
        secondaryAggregation: AggregationSchema.exactOptional().openapi({
          description: 'Apply a second aggregation after aggregation is applied.',
        }),
        statisticalTimeSeriesFilter: StatisticalTimeSeriesFilterSchema.exactOptional().openapi({
          deprecated: true,
          description:
            'Statistics based time series filter. Note: This field is deprecated and completely ignored by the API.',
        }),
      })
      .openapi({
        description:
          'A filter that defines a subset of time series data that is displayed in a widget. Time series data is fetched using the ListTimeSeries (https://cloud.google.com/monitoring/api/ref_v3/rest/v3/projects.timeSeries/list) method.',
        required: [],
      }),
  )
  .openapi('TimeSeriesFilter')

const RatioPartSchema = z
  .object({
    aggregation: AggregationSchema.exactOptional().openapi({
      description:
        'By default, the raw time series data is returned. Use this field to combine multiple time series for different views of the data.',
    }),
    filter: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Required. The monitoring filter (https://cloud.google.com/monitoring/api/v3/filters) that identifies the metric types, resources, and projects to query.',
      }),
  })
  .openapi({
    description:
      'Describes a query to build the numerator or denominator of a TimeSeriesFilterRatio.',
    required: [],
  })
  .openapi('RatioPart')

const TimeSeriesFilterRatioSchema = z
  .object({
    denominator: RatioPartSchema.exactOptional().openapi({
      description: 'The denominator of the ratio.',
    }),
    numerator: RatioPartSchema.exactOptional().openapi({
      description: 'The numerator of the ratio.',
    }),
    pickTimeSeriesFilter: PickTimeSeriesFilterSchema.exactOptional().openapi({
      description: 'Ranking based time series filter.',
    }),
    secondaryAggregation: AggregationSchema.exactOptional().openapi({
      description: 'Apply a second aggregation after the ratio is computed.',
    }),
    statisticalTimeSeriesFilter: StatisticalTimeSeriesFilterSchema.exactOptional().openapi({
      deprecated: true,
      description:
        'Statistics based time series filter. Note: This field is deprecated and completely ignored by the API.',
    }),
  })
  .openapi({
    description:
      'A pair of time series filters that define a ratio computation. The output time series is the pair-wise division of each aligned element from the numerator and denominator time series.',
    required: [],
  })
  .openapi('TimeSeriesFilterRatio')

const TimeSeriesQuerySchema = z
  .object({
    opsAnalyticsQuery: OpsAnalyticsQuerySchema.exactOptional().openapi({
      description:
        'Preview: A query used to fetch a time series, category series, or numeric series with SQL. This is a preview feature and may be subject to change before final release.',
    }),
    outputFullDuration: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          "Optional. If set, Cloud Monitoring will treat the full query duration as the alignment period so that there will be only 1 output value.*Note: This could override the configured alignment period except for the cases where a series of data points are expected, like - XyChart - Scorecard's spark chart",
      }),
    prometheusQuery: z
      .string()
      .exactOptional()
      .openapi({ description: 'A query used to fetch time series with PromQL.' }),
    timeSeriesFilter: TimeSeriesFilterSchema.exactOptional().openapi({
      description: 'Filter parameters to fetch time series.',
    }),
    timeSeriesFilterRatio: TimeSeriesFilterRatioSchema.exactOptional().openapi({
      description: 'Parameters to fetch a ratio between two time series filters.',
    }),
    timeSeriesQueryLanguage: z
      .string()
      .exactOptional()
      .openapi({ description: 'A query used to fetch time series with MQL.' }),
    unitOverride: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The unit of data contained in fetched time series. If non-empty, this unit will override any unit that accompanies fetched data. The format is the same as the unit (https://cloud.google.com/monitoring/api/ref_v3/rest/v3/projects.metricDescriptors) field in MetricDescriptor.',
      }),
  })
  .openapi({
    description:
      'TimeSeriesQuery collects the set of supported methods for querying time series data from the Stackdriver metrics API.',
    required: [],
  })
  .openapi('TimeSeriesQuery')

const PieChartDataSetSchema = z
  .object({
    dimensions: z
      .array(DimensionSchema)
      .exactOptional()
      .openapi({
        description:
          'A dimension is a structured label, class, or category for a set of measurements in your data.',
      }),
    measures: z
      .array(MeasureSchema)
      .exactOptional()
      .openapi({
        description:
          'A measure is a measured value of a property in your data. For example, rainfall in inches, number of units sold, revenue gained, etc.',
      }),
    minAlignmentPeriod: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Optional. The lower bound on data point frequency for this data set, implemented by specifying the minimum alignment period to use in a time series query. For example, if the data is published once every 10 minutes, the min_alignment_period should be at least 10 minutes. It would not make sense to fetch and align data at one minute intervals.',
      }),
    sliceNameTemplate: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "Optional. A template for the name of the slice. This name will be displayed in the legend and the tooltip of the pie chart. It replaces the auto-generated names for the slices. For example, if the template is set to ${resource.labels.zone}, the zone's value will be used for the name instead of the default name.",
      }),
    timeSeriesQuery: TimeSeriesQuerySchema.exactOptional().openapi({
      description:
        'Required. The query for the PieChart. See, google.monitoring.dashboard.v1.TimeSeriesQuery.',
    }),
  })
  .openapi({ description: 'Groups a time series query definition.', required: [] })
  .openapi('PieChartDataSet')

const PieChartSchema = z
  .object({
    chartType: z
      .enum(['PIE_CHART_TYPE_UNSPECIFIED', 'PIE', 'DONUT'])
      .exactOptional()
      .openapi({ description: 'Required. Indicates the visualization type for the PieChart.' }),
    dataSets: z
      .array(PieChartDataSetSchema)
      .exactOptional()
      .openapi({ description: "Required. The queries for the chart's data." }),
    showLabels: z
      .boolean()
      .exactOptional()
      .openapi({
        description: "Optional. Indicates whether or not the pie chart should show slices' labels",
      }),
  })
  .openapi({
    description: 'A widget that displays timeseries data as a pie or a donut.',
    required: [],
  })
  .openapi('PieChart')

const GaugeViewSchema = z
  .object({
    lowerBound: z
      .float64()
      .exactOptional()
      .openapi({
        description:
          'The lower bound for this gauge chart. The value of the chart should always be greater than or equal to this.',
      }),
    upperBound: z
      .float64()
      .exactOptional()
      .openapi({
        description:
          'The upper bound for this gauge chart. The value of the chart should always be less than or equal to this.',
      }),
  })
  .openapi({
    description:
      "A gauge chart shows where the current value sits within a pre-defined range. The upper and lower bounds should define the possible range of values for the scorecard's query (inclusive).",
    required: [],
  })
  .openapi('GaugeView')

const SparkChartViewSchema = z
  .object({
    minAlignmentPeriod: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The lower bound on data point frequency in the chart implemented by specifying the minimum alignment period to use in a time series query. For example, if the data is published once every 10 minutes it would not make sense to fetch and align data at one minute intervals. This field is optional and exists only as a hint.',
      }),
    sparkChartType: z
      .enum(['SPARK_CHART_TYPE_UNSPECIFIED', 'SPARK_LINE', 'SPARK_BAR'])
      .exactOptional()
      .openapi({ description: 'Required. The type of sparkchart to show in this chartView.' }),
  })
  .openapi({
    description:
      "A sparkChart is a small chart suitable for inclusion in a table-cell or inline in text. This message contains the configuration for a sparkChart to show up on a Scorecard, showing recent trends of the scorecard's timeseries.",
    required: [],
  })
  .openapi('SparkChartView')

const ThresholdSchema = z
  .object({
    color: z
      .enum(['COLOR_UNSPECIFIED', 'YELLOW', 'RED'])
      .exactOptional()
      .openapi({
        description: 'The state color for this threshold. Color is not allowed in a XyChart.',
      }),
    direction: z
      .enum(['DIRECTION_UNSPECIFIED', 'ABOVE', 'BELOW'])
      .exactOptional()
      .openapi({
        description:
          'The direction for the current threshold. Direction is not allowed in a XyChart.',
      }),
    label: z.string().exactOptional().openapi({ description: 'A label for the threshold.' }),
    targetAxis: z
      .enum(['TARGET_AXIS_UNSPECIFIED', 'Y1', 'Y2'])
      .exactOptional()
      .openapi({
        description:
          'The target axis to use for plotting the threshold. Target axis is not allowed in a Scorecard.',
      }),
    value: z
      .float64()
      .exactOptional()
      .openapi({
        description:
          'The value of the threshold. The value should be defined in the native scale of the metric.',
      }),
  })
  .openapi({
    description: 'Defines a threshold for categorizing time series values.',
    required: [],
  })
  .openapi('Threshold')

const ScorecardSchema = z
  .object({
    blankView: EmptySchema.exactOptional().openapi({
      description:
        'Will cause the Scorecard to show only the value, with no indicator to its value relative to its thresholds.',
    }),
    gaugeView: GaugeViewSchema.exactOptional().openapi({
      description: 'Will cause the scorecard to show a gauge chart.',
    }),
    sparkChartView: SparkChartViewSchema.exactOptional().openapi({
      description: 'Will cause the scorecard to show a spark chart.',
    }),
    thresholds: z
      .array(ThresholdSchema)
      .exactOptional()
      .openapi({
        description:
          "The thresholds used to determine the state of the scorecard given the time series' current value. For an actual value x, the scorecard is in a danger state if x is less than or equal to a danger threshold that triggers below, or greater than or equal to a danger threshold that triggers above. Similarly, if x is above/below a warning threshold that triggers above/below, then the scorecard is in a warning state - unless x also puts it in a danger state. (Danger trumps warning.)As an example, consider a scorecard with the following four thresholds: { value: 90, category: 'DANGER', trigger: 'ABOVE', }, { value: 70, category: 'WARNING', trigger: 'ABOVE', }, { value: 10, category: 'DANGER', trigger: 'BELOW', }, { value: 20, category: 'WARNING', trigger: 'BELOW', } Then: values less than or equal to 10 would put the scorecard in a DANGER state, values greater than 10 but less than or equal to 20 a WARNING state, values strictly between 20 and 70 an OK state, values greater than or equal to 70 but less than 90 a WARNING state, and values greater than or equal to 90 a DANGER state.",
      }),
    timeSeriesQuery: TimeSeriesQuerySchema.exactOptional().openapi({
      description:
        'Required. Fields for querying time series data from the Stackdriver metrics API.',
    }),
  })
  .openapi({
    description:
      'A widget showing the latest value of a metric, and how this value relates to one or more thresholds.',
    required: [],
  })
  .openapi('Scorecard')

const SectionHeaderSchema = z
  .object({
    dividerBelow: z
      .boolean()
      .exactOptional()
      .openapi({
        description: 'Whether to insert a divider below the section in the table of contents',
      }),
    subtitle: z.string().exactOptional().openapi({ description: 'The subtitle of the section' }),
  })
  .openapi({
    description:
      'A widget that defines a new section header. Sections populate a table of contents and allow easier navigation of long-form content.',
    required: [],
  })
  .openapi('SectionHeader')

const SingleViewGroupSchema = z
  .object({})
  .openapi({
    description:
      'A widget that groups the other widgets by using a dropdown menu. All widgets that are within the area spanned by the grouping widget are considered member widgets.',
  })
  .openapi('SingleViewGroup')

const TextStyleSchema = z
  .object({
    backgroundColor: z
      .string()
      .exactOptional()
      .openapi({ description: 'The background color as a hex string. "#RRGGBB" or "#RGB"' }),
    fontSize: z
      .enum([
        'FONT_SIZE_UNSPECIFIED',
        'FS_EXTRA_SMALL',
        'FS_SMALL',
        'FS_MEDIUM',
        'FS_LARGE',
        'FS_EXTRA_LARGE',
      ])
      .exactOptional()
      .openapi({
        description:
          'Font sizes for both the title and content. The title will still be larger relative to the content.',
      }),
    horizontalAlignment: z
      .enum(['HORIZONTAL_ALIGNMENT_UNSPECIFIED', 'H_LEFT', 'H_CENTER', 'H_RIGHT'])
      .exactOptional()
      .openapi({ description: 'The horizontal alignment of both the title and content' }),
    padding: z
      .enum([
        'PADDING_SIZE_UNSPECIFIED',
        'P_EXTRA_SMALL',
        'P_SMALL',
        'P_MEDIUM',
        'P_LARGE',
        'P_EXTRA_LARGE',
      ])
      .exactOptional()
      .openapi({ description: 'The amount of padding around the widget' }),
    pointerLocation: z
      .enum([
        'POINTER_LOCATION_UNSPECIFIED',
        'PL_TOP',
        'PL_RIGHT',
        'PL_BOTTOM',
        'PL_LEFT',
        'PL_TOP_LEFT',
        'PL_TOP_RIGHT',
        'PL_RIGHT_TOP',
        'PL_RIGHT_BOTTOM',
        'PL_BOTTOM_RIGHT',
        'PL_BOTTOM_LEFT',
        'PL_LEFT_BOTTOM',
        'PL_LEFT_TOP',
      ])
      .exactOptional()
      .openapi({
        description: 'The pointer location for this widget (also sometimes called a "tail")',
      }),
    textColor: z
      .string()
      .exactOptional()
      .openapi({ description: 'The text color as a hex string. "#RRGGBB" or "#RGB"' }),
    verticalAlignment: z
      .enum(['VERTICAL_ALIGNMENT_UNSPECIFIED', 'V_TOP', 'V_CENTER', 'V_BOTTOM'])
      .exactOptional()
      .openapi({ description: 'The vertical alignment of both the title and content' }),
  })
  .openapi({
    description: 'Properties that determine how the title and content are styled',
    required: [],
  })
  .openapi('TextStyle')

const TextSchema = z
  .object({
    content: z
      .string()
      .exactOptional()
      .openapi({ description: 'The text content to be displayed.' }),
    format: z
      .enum(['FORMAT_UNSPECIFIED', 'MARKDOWN', 'RAW'])
      .exactOptional()
      .openapi({ description: 'How the text content is formatted.' }),
    style: TextStyleSchema.exactOptional().openapi({ description: 'How the text is styled' }),
  })
  .openapi({ description: 'A widget that displays textual content.', required: [] })
  .openapi('Text')

const ColumnSettingsSchema = z
  .object({
    column: z.string().exactOptional().openapi({ description: 'Required. The id of the column.' }),
    visible: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Required. Whether the column should be visible on page load.' }),
  })
  .openapi({ description: "The persistent settings for a table's columns.", required: [] })
  .openapi('ColumnSettings')

const TableDisplayOptionsSchema = z
  .object({
    shownColumns: z
      .array(z.string())
      .exactOptional()
      .openapi({
        deprecated: true,
        description:
          'Optional. This field is unused and has been replaced by TimeSeriesTable.column_settings',
      }),
  })
  .openapi({ description: 'Table display options that can be reused.', required: [] })
  .openapi('TableDisplayOptions')

const TableDataSetSchema = z
  .object({
    minAlignmentPeriod: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Optional. The lower bound on data point frequency for this data set, implemented by specifying the minimum alignment period to use in a time series query For example, if the data is published once every 10 minutes, the min_alignment_period should be at least 10 minutes. It would not make sense to fetch and align data at one minute intervals.',
      }),
    tableDisplayOptions: TableDisplayOptionsSchema.exactOptional().openapi({
      description: 'Optional. Table display options for configuring how the table is rendered.',
    }),
    tableTemplate: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Optional. A template string for naming TimeSeries in the resulting data set. This should be a string with interpolations of the form ${label_name}, which will resolve to the label\'s value i.e. "${resource.labels.project_id}."',
      }),
    timeSeriesQuery: TimeSeriesQuerySchema.exactOptional().openapi({
      description:
        'Required. Fields for querying time series data from the Stackdriver metrics API.',
    }),
  })
  .openapi({
    description: 'Groups a time series query definition with table options.',
    required: [],
  })
  .openapi('TableDataSet')

const TimeSeriesTableSchema = z
  .object({
    columnSettings: z
      .array(ColumnSettingsSchema)
      .exactOptional()
      .openapi({
        description: 'Optional. The list of the persistent column settings for the table.',
      }),
    dataSets: z
      .array(TableDataSetSchema)
      .exactOptional()
      .openapi({ description: 'Required. The data displayed in this table.' }),
    metricVisualization: z
      .enum(['METRIC_VISUALIZATION_UNSPECIFIED', 'NUMBER', 'BAR'])
      .exactOptional()
      .openapi({ description: 'Optional. Store rendering strategy' }),
  })
  .openapi({ description: 'A table that displays time series data.', required: [] })
  .openapi('TimeSeriesTable')

const DataSetSchema = z
  .object({
    breakdowns: z
      .array(BreakdownSchema)
      .exactOptional()
      .openapi({
        description: 'Optional. The collection of breakdowns to be applied to the dataset.',
      }),
    dimensions: z
      .array(DimensionSchema)
      .exactOptional()
      .openapi({ description: 'Optional. A collection of dimension columns.' }),
    legendTemplate: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "A template string for naming TimeSeries in the resulting data set. This should be a string with interpolations of the form ${label_name}, which will resolve to the label's value.",
      }),
    measures: z
      .array(MeasureSchema)
      .exactOptional()
      .openapi({ description: 'Optional. A collection of measures.' }),
    minAlignmentPeriod: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Optional. The lower bound on data point frequency for this data set, implemented by specifying the minimum alignment period to use in a time series query For example, if the data is published once every 10 minutes, the min_alignment_period should be at least 10 minutes. It would not make sense to fetch and align data at one minute intervals.',
      }),
    plotType: z
      .enum(['PLOT_TYPE_UNSPECIFIED', 'LINE', 'STACKED_AREA', 'STACKED_BAR', 'HEATMAP'])
      .exactOptional()
      .openapi({ description: 'How this data should be plotted on the chart.' }),
    targetAxis: z
      .enum(['TARGET_AXIS_UNSPECIFIED', 'Y1', 'Y2'])
      .exactOptional()
      .openapi({ description: 'Optional. The target axis to use for plotting the metric.' }),
    timeSeriesQuery: TimeSeriesQuerySchema.exactOptional().openapi({
      description:
        'Required. Fields for querying time series data from the Stackdriver metrics API.',
    }),
  })
  .openapi({
    description: 'Groups a time series query definition with charting options.',
    required: [],
  })
  .openapi('DataSet')

const XyChartSchema = z
  .object({
    chartOptions: ChartOptionsSchema.exactOptional().openapi({
      description: 'Display options for the chart.',
    }),
    dataSets: z
      .array(DataSetSchema)
      .exactOptional()
      .openapi({ description: 'Required. The data displayed in this chart.' }),
    thresholds: z
      .array(ThresholdSchema)
      .exactOptional()
      .openapi({ description: 'Threshold lines drawn horizontally across the chart.' }),
    timeshiftDuration: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The duration used to display a comparison chart. A comparison chart simultaneously shows values from two similar-length time periods (e.g., week-over-week metrics). The duration must be positive, and it can only be applied to charts with data sets of LINE plot type.',
      }),
    xAxis: AxisSchema.exactOptional().openapi({
      description: 'The properties applied to the x-axis.',
    }),
    y2Axis: AxisSchema.exactOptional().openapi({
      description: 'The properties applied to the y2-axis.',
    }),
    yAxis: AxisSchema.exactOptional().openapi({
      description: 'The properties applied to the y-axis.',
    }),
  })
  .openapi({
    description: 'A chart that displays data on a 2D (X and Y axes) plane.',
    required: [],
  })
  .openapi('XyChart')

const WidgetSchema = z
  .object({
    alertChart: AlertChartSchema.exactOptional().openapi({
      description: 'A chart of alert policy data.',
    }),
    blank: EmptySchema.exactOptional().openapi({ description: 'A blank space.' }),
    collapsibleGroup: CollapsibleGroupSchema.exactOptional().openapi({
      description:
        'A widget that groups the other widgets. All widgets that are within the area spanned by the grouping widget are considered member widgets.',
    }),
    errorReportingPanel: ErrorReportingPanelSchema.exactOptional().openapi({
      description: 'A widget that displays a list of error groups.',
    }),
    id: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Optional. The widget id. Ids may be made up of alphanumerics, dashes and underscores. Widget ids are optional.',
      }),
    incidentList: IncidentListSchema.exactOptional().openapi({
      description: 'A widget that shows list of incidents.',
    }),
    logsPanel: LogsPanelSchema.exactOptional().openapi({
      description: 'A widget that shows a stream of logs.',
    }),
    pieChart: PieChartSchema.exactOptional().openapi({
      description: 'A widget that displays timeseries data as a pie chart.',
    }),
    scorecard: ScorecardSchema.exactOptional().openapi({
      description: 'A scorecard summarizing time series data.',
    }),
    sectionHeader: SectionHeaderSchema.exactOptional().openapi({
      description: 'A widget that defines a section header for easier navigation of the dashboard.',
    }),
    singleViewGroup: SingleViewGroupSchema.exactOptional().openapi({
      description: 'A widget that groups the other widgets by using a dropdown menu.',
    }),
    text: TextSchema.exactOptional().openapi({
      description: 'A raw string or markdown displaying textual content.',
    }),
    timeSeriesTable: TimeSeriesTableSchema.exactOptional().openapi({
      description: 'A widget that displays time series data in a tabular format.',
    }),
    title: z
      .string()
      .exactOptional()
      .openapi({ description: 'Optional. The title of the widget.' }),
    xyChart: XyChartSchema.exactOptional().openapi({ description: 'A chart of time series data.' }),
  })
  .openapi({
    description:
      'Widget contains a single dashboard component and configuration of how to present the component in the dashboard.',
    required: [],
  })
  .openapi('Widget')

const ColumnSchema = z
  .object({
    weight: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The relative weight of this column. The column weight is used to adjust the width of columns on the screen (relative to peers). Greater the weight, greater the width of the column on the screen. If omitted, a value of 1 is used while rendering.',
      }),
    widgets: z
      .array(WidgetSchema)
      .exactOptional()
      .openapi({ description: 'The display widgets arranged vertically in this column.' }),
  })
  .openapi({ description: 'Defines the layout properties and content for a column.', required: [] })
  .openapi('Column')

const ColumnLayoutSchema = z
  .object({
    columns: z
      .array(ColumnSchema)
      .exactOptional()
      .openapi({ description: 'The columns of content to display.' }),
  })
  .openapi({
    description:
      'A simplified layout that divides the available space into vertical columns and arranges a set of widgets vertically in each column.',
    required: [],
  })
  .openapi('ColumnLayout')

const DashboardFilterSchema = z
  .object({
    filterType: z
      .enum([
        'FILTER_TYPE_UNSPECIFIED',
        'RESOURCE_LABEL',
        'METRIC_LABEL',
        'USER_METADATA_LABEL',
        'SYSTEM_METADATA_LABEL',
        'GROUP',
      ])
      .exactOptional()
      .openapi({ description: 'The specified filter type' }),
    labelKey: z
      .string()
      .exactOptional()
      .openapi({ description: 'Required. The key for the label' }),
    stringValue: z
      .string()
      .exactOptional()
      .openapi({ description: 'A variable-length string value.' }),
    templateVariable: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The placeholder text that can be referenced in a filter string or MQL query. If omitted, the dashboard filter will be applied to all relevant widgets in the dashboard.',
      }),
  })
  .openapi({
    description: 'A filter to reduce the amount of data charted in relevant widgets.',
    required: [],
  })
  .openapi('DashboardFilter')

const GridLayoutSchema = z
  .object({
    columns: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "The number of columns into which the view's width is divided. If omitted or set to zero, a system default will be used while rendering.",
      }),
    widgets: z
      .array(WidgetSchema)
      .exactOptional()
      .openapi({
        description: 'The informational elements that are arranged into the columns row-first.',
      }),
  })
  .openapi({
    description:
      'A basic layout divides the available space into vertical columns of equal width and arranges a list of widgets using a row-first strategy.',
    required: [],
  })
  .openapi('GridLayout')

const TileSchema = z
  .object({
    height: z
      .int32()
      .exactOptional()
      .openapi({
        description:
          'The height of the tile, measured in grid blocks. Tiles must have a minimum height of 1.',
      }),
    widget: WidgetSchema.exactOptional().openapi({
      description: 'The informational widget contained in the tile. For example an XyChart.',
    }),
    width: z
      .int32()
      .exactOptional()
      .openapi({
        description:
          'The width of the tile, measured in grid blocks. Tiles must have a minimum width of 1.',
      }),
    xPos: z
      .int32()
      .exactOptional()
      .openapi({
        description:
          'The zero-indexed position of the tile in grid blocks relative to the left edge of the grid. Tiles must be contained within the specified number of columns. x_pos cannot be negative.',
      }),
    yPos: z
      .int32()
      .exactOptional()
      .openapi({
        description:
          'The zero-indexed position of the tile in grid blocks relative to the top edge of the grid. y_pos cannot be negative.',
      }),
  })
  .openapi({
    description:
      'A single tile in the mosaic. The placement and size of the tile are configurable.',
    required: [],
  })
  .openapi('Tile')

const MosaicLayoutSchema = z
  .object({
    columns: z
      .int32()
      .exactOptional()
      .openapi({
        description:
          'The number of columns in the mosaic grid. The number of columns must be between 1 and 12, inclusive.',
      }),
    tiles: z.array(TileSchema).exactOptional().openapi({ description: 'The tiles to display.' }),
  })
  .openapi({
    description:
      'A mosaic layout divides the available space into a grid of blocks, and overlays the grid with tiles. Unlike GridLayout, tiles may span multiple grid blocks and can be placed at arbitrary locations in the grid.',
    required: [],
  })
  .openapi('MosaicLayout')

const RowSchema = z
  .object({
    weight: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The relative weight of this row. The row weight is used to adjust the height of rows on the screen (relative to peers). Greater the weight, greater the height of the row on the screen. If omitted, a value of 1 is used while rendering.',
      }),
    widgets: z
      .array(WidgetSchema)
      .exactOptional()
      .openapi({ description: 'The display widgets arranged horizontally in this row.' }),
  })
  .openapi({ description: 'Defines the layout properties and content for a row.', required: [] })
  .openapi('Row')

const RowLayoutSchema = z
  .object({
    rows: z
      .array(RowSchema)
      .exactOptional()
      .openapi({ description: 'The rows of content to display.' }),
  })
  .openapi({
    description:
      'A simplified layout that divides the available space into rows and arranges a set of widgets horizontally in each row.',
    required: [],
  })
  .openapi('RowLayout')

const DashboardSchema = z
  .object({
    columnLayout: ColumnLayoutSchema.exactOptional().openapi({
      description:
        'The content is divided into equally spaced columns and the widgets are arranged vertically.',
    }),
    dashboardFilters: z
      .array(DashboardFilterSchema)
      .exactOptional()
      .openapi({
        description: 'Filters to reduce the amount of data charted based on the filter criteria.',
      }),
    displayName: z
      .string()
      .exactOptional()
      .openapi({ description: 'Required. The mutable, human-readable name.' }),
    etag: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'etag is used for optimistic concurrency control as a way to help prevent simultaneous updates of a policy from overwriting each other. An etag is returned in the response to GetDashboard, and users are expected to put that etag in the request to UpdateDashboard to ensure that their change will be applied to the same version of the Dashboard configuration. The field should not be passed during dashboard creation.',
      }),
    gridLayout: GridLayoutSchema.exactOptional().openapi({
      description:
        'Content is arranged with a basic layout that re-flows a simple list of informational elements like widgets or tiles.',
    }),
    labels: z
      .record(z.string(), z.string())
      .exactOptional()
      .openapi({ description: 'Labels applied to the dashboard' }),
    mosaicLayout: MosaicLayoutSchema.exactOptional().openapi({
      description:
        'The content is arranged as a grid of tiles, with each content widget occupying one or more grid blocks.',
    }),
    name: z
      .string()
      .exactOptional()
      .openapi({ description: 'Identifier. The resource name of the dashboard.' }),
    rowLayout: RowLayoutSchema.exactOptional().openapi({
      description:
        'The content is divided into equally spaced rows and the widgets are arranged horizontally.',
    }),
  })
  .openapi({
    description:
      'A Google Stackdriver dashboard. Dashboards define the content and layout of pages in the Stackdriver web application.',
    required: [],
  })
  .openapi('Dashboard')

const DroppedLabelsSchema = z
  .object({
    label: z
      .record(z.string(), z.string())
      .exactOptional()
      .openapi({
        description: 'Map from label to its value, for all labels dropped in any aggregation.',
      }),
  })
  .openapi({
    description:
      'A set of (label, value) pairs that were removed from a Distribution time series during aggregation and then added as an attachment to a Distribution.Exemplar.The full label set for the exemplars is constructed by using the dropped pairs in combination with the label values that remain on the aggregated Distribution time series. The constructed full label set can be used to identify the specific entity, such as the instance or job, which might be contributing to a long-tail. However, with dropped labels, the storage requirements are reduced because only the aggregated distribution values for a large group of time series are stored.Note that there are no guarantees on ordering of the labels from exemplar-to-exemplar and from distribution-to-distribution in the same stream, and there may be duplicates. It is up to clients to resolve any ambiguities.',
    required: [],
  })
  .openapi('DroppedLabels')

const OptionSchema = z
  .object({
    name: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The option\'s name. For protobuf built-in options (options defined in descriptor.proto), this is the short name. For example, "map_entry". For custom options, it should be the fully-qualified name. For example, "google.api.http".',
      }),
    value: z
      .record(
        z.string(),
        z
          .any()
          .openapi({
            description: 'Properties of the object. Contains field @type with type URL.',
          }),
      )
      .exactOptional()
      .openapi({
        description:
          "The option's value packed in an Any message. If the value is a primitive, the corresponding wrapper type defined in google/protobuf/wrappers.proto should be used. If the value is an enum, it should be stored as an int32 value using the google.protobuf.Int32Value type.",
      }),
  })
  .openapi({
    description:
      'A protocol buffer option, which can be attached to a message, field, enumeration, etc.',
    required: [],
  })
  .openapi('Option')

const FieldSchema = z
  .object({
    cardinality: z
      .enum([
        'CARDINALITY_UNKNOWN',
        'CARDINALITY_OPTIONAL',
        'CARDINALITY_REQUIRED',
        'CARDINALITY_REPEATED',
      ])
      .exactOptional()
      .openapi({ description: 'The field cardinality.' }),
    defaultValue: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The string value of the default value of this field. Proto2 syntax only.',
      }),
    jsonName: z.string().exactOptional().openapi({ description: 'The field JSON name.' }),
    kind: z
      .enum([
        'TYPE_UNKNOWN',
        'TYPE_DOUBLE',
        'TYPE_FLOAT',
        'TYPE_INT64',
        'TYPE_UINT64',
        'TYPE_INT32',
        'TYPE_FIXED64',
        'TYPE_FIXED32',
        'TYPE_BOOL',
        'TYPE_STRING',
        'TYPE_GROUP',
        'TYPE_MESSAGE',
        'TYPE_BYTES',
        'TYPE_UINT32',
        'TYPE_ENUM',
        'TYPE_SFIXED32',
        'TYPE_SFIXED64',
        'TYPE_SINT32',
        'TYPE_SINT64',
      ])
      .exactOptional()
      .openapi({ description: 'The field type.' }),
    name: z.string().exactOptional().openapi({ description: 'The field name.' }),
    number: z.int32().exactOptional().openapi({ description: 'The field number.' }),
    oneofIndex: z
      .int32()
      .exactOptional()
      .openapi({
        description:
          'The index of the field type in Type.oneofs, for message or enumeration types. The first type has index 1; zero means the type is not in the list.',
      }),
    options: z
      .array(OptionSchema)
      .exactOptional()
      .openapi({ description: 'The protocol buffer options.' }),
    packed: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Whether to use alternative packed wire representation.' }),
    typeUrl: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The field type URL, without the scheme, for message or enumeration types. Example: "type.googleapis.com/google.protobuf.Timestamp".',
      }),
  })
  .openapi({ description: 'A single field of a message type.', required: [] })
  .openapi('Field')

const HttpBodySchema = z
  .object({
    contentType: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The HTTP Content-Type header value specifying the content type of the body.',
      }),
    data: z
      .string()
      .exactOptional()
      .openapi({ description: 'The HTTP request/response body as raw binary.' }),
    extensions: z
      .array(
        z.record(
          z.string(),
          z
            .any()
            .openapi({
              description: 'Properties of the object. Contains field @type with type URL.',
            }),
        ),
      )
      .exactOptional()
      .openapi({
        description:
          'Application specific response metadata. Must be set in the first response for streaming APIs.',
      }),
  })
  .openapi({
    description:
      "Message that represents an arbitrary HTTP body. It should only be used for payload formats that can't be represented as JSON, such as raw binary or an HTML page.This message can be used both in streaming and non-streaming API methods in the request as well as the response.It can be used as a top-level request field, which is convenient if one wants to extract parameters from either the URL or HTTP template into the request fields and also want access to the raw HTTP body.Example: message GetResourceRequest { // A unique request id. string request_id = 1; // The raw HTTP body is bound to this field. google.api.HttpBody http_body = 2; } service ResourceService { rpc GetResource(GetResourceRequest) returns (google.api.HttpBody); rpc UpdateResource(google.api.HttpBody) returns (google.protobuf.Empty); } Example with streaming methods: service CaldavService { rpc GetCalendar(stream google.api.HttpBody) returns (stream google.api.HttpBody); rpc UpdateCalendar(stream google.api.HttpBody) returns (stream google.api.HttpBody); } Use of this type only changes how the request and response bodies are handled, all other features will continue to work unchanged.",
    required: [],
  })
  .openapi('HttpBody')

const ListDashboardsResponseSchema = z
  .object({
    dashboards: z
      .array(DashboardSchema)
      .exactOptional()
      .openapi({ description: 'The list of requested dashboards.' }),
    nextPageToken: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'If there are more results than have been returned, then this field is set to a non-empty value. To see the additional results, use that value as page_token in the next call to this method.',
      }),
  })
  .openapi({ description: 'The ListDashboards request.', required: [] })
  .openapi('ListDashboardsResponse')

const MonitoredProjectSchema = z
  .object({
    createTime: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Output only. The time when this MonitoredProject was created.',
        readOnly: true,
      }),
    name: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Immutable. The resource name of the MonitoredProject. On input, the resource name includes the scoping project ID and monitored project ID. On output, it contains the equivalent project numbers. Example: locations/global/metricsScopes/{SCOPING_PROJECT_ID_OR_NUMBER}/projects/{MONITORED_PROJECT_ID_OR_NUMBER}',
      }),
  })
  .openapi({
    description:
      'A project being monitored (https://cloud.google.com/monitoring/settings/multiple-projects#create-multi) by a Metrics Scope.',
    required: [],
  })
  .openapi('MonitoredProject')

const MetricsScopeSchema = z
  .object({
    createTime: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Output only. The time when this Metrics Scope was created.',
        readOnly: true,
      }),
    monitoredProjects: z
      .array(MonitoredProjectSchema)
      .exactOptional()
      .openapi({
        description: 'Output only. The list of projects monitored by this Metrics Scope.',
        readOnly: true,
      }),
    name: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Immutable. The resource name of the Monitoring Metrics Scope. On input, the resource name can be specified with the scoping project ID or number. On output, the resource name is specified with the scoping project number. Example: locations/global/metricsScopes/{SCOPING_PROJECT_ID_OR_NUMBER}',
      }),
    updateTime: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Output only. The time when this Metrics Scope record was last updated.',
        readOnly: true,
      }),
  })
  .openapi({
    description:
      'Represents a Metrics Scope (https://cloud.google.com/monitoring/settings#concept-scope) in Cloud Monitoring, which specifies one or more Google projects and zero or more AWS accounts to monitor together.',
    required: [],
  })
  .openapi('MetricsScope')

const ListMetricsScopesByMonitoredProjectResponseSchema = z
  .object({
    metricsScopes: z
      .array(MetricsScopeSchema)
      .exactOptional()
      .openapi({
        description:
          'A set of all metrics scopes that the specified monitored project has been added to.',
      }),
  })
  .openapi({
    description: 'Response for the ListMetricsScopesByMonitoredProject method.',
    required: [],
  })
  .openapi('ListMetricsScopesByMonitoredProjectResponse')

const StatusSchema = z
  .object({
    code: z
      .int32()
      .exactOptional()
      .openapi({
        description: 'The status code, which should be an enum value of google.rpc.Code.',
      }),
    details: z
      .array(
        z.record(
          z.string(),
          z
            .any()
            .openapi({
              description: 'Properties of the object. Contains field @type with type URL.',
            }),
        ),
      )
      .exactOptional()
      .openapi({
        description:
          'A list of messages that carry the error details. There is a common set of message types for APIs to use.',
      }),
    message: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'A developer-facing error message, which should be in English. Any user-facing error message should be localized and sent in the google.rpc.Status.details field, or localized by the client.',
      }),
  })
  .openapi({
    description:
      'The Status type defines a logical error model that is suitable for different programming environments, including REST APIs and RPC APIs. It is used by gRPC (https://github.com/grpc). Each Status message contains three pieces of data: error code, error message, and error details.You can find out more about this error model and how to work with it in the API Design Guide (https://cloud.google.com/apis/design/errors).',
    required: [],
  })
  .openapi('Status')

const OperationSchema = z
  .object({
    done: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'If the value is false, it means the operation is still in progress. If true, the operation is completed, and either error or response is available.',
      }),
    error: StatusSchema.exactOptional().openapi({
      description: 'The error result of the operation in case of failure or cancellation.',
    }),
    metadata: z
      .record(
        z.string(),
        z
          .any()
          .openapi({
            description: 'Properties of the object. Contains field @type with type URL.',
          }),
      )
      .exactOptional()
      .openapi({
        description:
          'Service-specific metadata associated with the operation. It typically contains progress information and common metadata such as create time. Some services might not provide such metadata. Any method that returns a long-running operation should document the metadata type, if any.',
      }),
    name: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The server-assigned name, which is only unique within the same service that originally returns it. If you use the default HTTP mapping, the name should be a resource name ending with operations/{unique_id}.',
      }),
    response: z
      .record(
        z.string(),
        z
          .any()
          .openapi({
            description: 'Properties of the object. Contains field @type with type URL.',
          }),
      )
      .exactOptional()
      .openapi({
        description:
          'The normal, successful response of the operation. If the original method returns no data on success, such as Delete, the response is google.protobuf.Empty. If the original method is standard Get/Create/Update, the response should be the resource. For other methods, the response should have the type XxxResponse, where Xxx is the original method name. For example, if the original method name is TakeSnapshot(), the inferred response type is TakeSnapshotResponse.',
      }),
  })
  .openapi({
    description:
      'This resource represents a long-running operation that is the result of a network API call.',
    required: [],
  })
  .openapi('Operation')

const OperationMetadataSchema = z
  .object({
    createTime: z
      .string()
      .exactOptional()
      .openapi({ description: 'The time when the batch request was received.' }),
    state: z
      .enum(['STATE_UNSPECIFIED', 'CREATED', 'RUNNING', 'DONE', 'CANCELLED'])
      .exactOptional()
      .openapi({ description: 'Current state of the batch operation.' }),
    updateTime: z
      .string()
      .exactOptional()
      .openapi({ description: 'The time when the operation result was last updated.' }),
  })
  .openapi({
    description:
      'Contains metadata for longrunning operation for the edit Metrics Scope endpoints.',
    required: [],
  })
  .openapi('OperationMetadata')

const QueryExemplarsRequestSchema = z
  .object({
    end: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The end time to evaluate the query for. Either floating point UNIX seconds or RFC3339 formatted timestamp.',
      }),
    query: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'A PromQL query string. Query lanauge documentation: https://prometheus.io/docs/prometheus/latest/querying/basics/.',
      }),
    start: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The start time to evaluate the query for. Either floating point UNIX seconds or RFC3339 formatted timestamp.',
      }),
  })
  .openapi({
    description:
      'QueryExemplarsRequest holds all parameters of the Prometheus upstream API for querying exemplars.',
    required: [],
  })
  .openapi('QueryExemplarsRequest')

const QueryInstantRequestSchema = z
  .object({
    query: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'A PromQL query string. Query lanauge documentation: https://prometheus.io/docs/prometheus/latest/querying/basics/.',
      }),
    time: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The single point in time to evaluate the query for. Either floating point UNIX seconds or RFC3339 formatted timestamp.',
      }),
    timeout: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'An upper bound timeout for the query. Either a Prometheus duration string (https://prometheus.io/docs/prometheus/latest/querying/basics/#time-durations) or floating point seconds. This non-standard encoding must be used for compatibility with the open source API. Clients may still implement timeouts at the connection level while ignoring this field.',
      }),
  })
  .openapi({
    description:
      'QueryInstantRequest holds all parameters of the Prometheus upstream instant query API plus GCM specific parameters.',
    required: [],
  })
  .openapi('QueryInstantRequest')

const QueryLabelsRequestSchema = z
  .object({
    end: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The end time to evaluate the query for. Either floating point UNIX seconds or RFC3339 formatted timestamp.',
      }),
    match: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'A list of matchers encoded in the Prometheus label matcher format to constrain the values to series that satisfy them.',
      }),
    start: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The start time to evaluate the query for. Either floating point UNIX seconds or RFC3339 formatted timestamp.',
      }),
  })
  .openapi({
    description:
      'QueryLabelsRequest holds all parameters of the Prometheus upstream API for returning a list of label names.',
    required: [],
  })
  .openapi('QueryLabelsRequest')

const QueryRangeRequestSchema = z
  .object({
    end: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The end time to evaluate the query for. Either floating point UNIX seconds or RFC3339 formatted timestamp.',
      }),
    query: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'A PromQL query string. Query lanauge documentation: https://prometheus.io/docs/prometheus/latest/querying/basics/.',
      }),
    start: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The start time to evaluate the query for. Either floating point UNIX seconds or RFC3339 formatted timestamp.',
      }),
    step: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The resolution of query result. Either a Prometheus duration string (https://prometheus.io/docs/prometheus/latest/querying/basics/#time-durations) or floating point seconds. This non-standard encoding must be used for compatibility with the open source API. Clients may still implement timeouts at the connection level while ignoring this field.',
      }),
    timeout: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'An upper bound timeout for the query. Either a Prometheus duration string (https://prometheus.io/docs/prometheus/latest/querying/basics/#time-durations) or floating point seconds. This non-standard encoding must be used for compatibility with the open source API. Clients may still implement timeouts at the connection level while ignoring this field.',
      }),
  })
  .openapi({
    description:
      'QueryRangeRequest holds all parameters of the Prometheus upstream range query API plus GCM specific parameters.',
    required: [],
  })
  .openapi('QueryRangeRequest')

const QuerySeriesRequestSchema = z
  .object({
    end: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The end time to evaluate the query for. Either floating point UNIX seconds or RFC3339 formatted timestamp.',
      }),
    start: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The start time to evaluate the query for. Either floating point UNIX seconds or RFC3339 formatted timestamp.',
      }),
  })
  .openapi({
    description:
      'QuerySeries holds all parameters of the Prometheus upstream API for querying series.',
    required: [],
  })
  .openapi('QuerySeriesRequest')

const SourceContextSchema = z
  .object({
    fileName: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The path-qualified name of the .proto file that contained the associated protobuf element. For example: "google/protobuf/source_context.proto".',
      }),
  })
  .openapi({
    description:
      'SourceContext represents information about the source of a protobuf element, like the file in which it is defined.',
    required: [],
  })
  .openapi('SourceContext')

const SpanContextSchema = z
  .object({
    spanName: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The resource name of the span. The format is: projects/[PROJECT_ID_OR_NUMBER]/traces/[TRACE_ID]/spans/[SPAN_ID] [TRACE_ID] is a unique identifier for a trace within a project; it is a 32-character hexadecimal encoding of a 16-byte array.[SPAN_ID] is a unique identifier for a span within a trace; it is a 16-character hexadecimal encoding of an 8-byte array.',
      }),
  })
  .openapi({
    description:
      'The context of a span. This is attached to an Exemplar in Distribution values during aggregation.It contains the name of a span with format: projects/[PROJECT_ID_OR_NUMBER]/traces/[TRACE_ID]/spans/[SPAN_ID] ',
    required: [],
  })
  .openapi('SpanContext')

const TypeSchema = z
  .object({
    edition: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The source edition string, only valid when syntax is SYNTAX_EDITIONS.',
      }),
    fields: z.array(FieldSchema).exactOptional().openapi({ description: 'The list of fields.' }),
    name: z.string().exactOptional().openapi({ description: 'The fully qualified message name.' }),
    oneofs: z
      .array(z.string())
      .exactOptional()
      .openapi({ description: 'The list of types appearing in oneof definitions in this type.' }),
    options: z
      .array(OptionSchema)
      .exactOptional()
      .openapi({ description: 'The protocol buffer options.' }),
    sourceContext: SourceContextSchema.exactOptional().openapi({
      description: 'The source context.',
    }),
    syntax: z
      .enum(['SYNTAX_PROTO2', 'SYNTAX_PROTO3', 'SYNTAX_EDITIONS'])
      .exactOptional()
      .openapi({ description: 'The source syntax.' }),
  })
  .openapi({ description: 'A protocol buffer message type.', required: [] })
  .openapi('Type')

const XgafvParamsSchema = z
  .enum(['1', '2'])
  .exactOptional()
  .openapi({
    param: {
      description: 'V1 error format.',
      in: 'query',
      name: '$.xgafv',
      schema: { enum: ['1', '2'], type: 'string' },
      required: false,
    },
  })

const AccessTokenParamsSchema = z
  .string()
  .exactOptional()
  .openapi({
    param: {
      description: 'OAuth access token.',
      in: 'query',
      name: 'access_token',
      schema: { type: 'string' },
      required: false,
    },
  })

const AltParamsSchema = z
  .enum(['json', 'media', 'proto'])
  .exactOptional()
  .openapi({
    param: {
      description: 'Data format for response.',
      in: 'query',
      name: 'alt',
      schema: { enum: ['json', 'media', 'proto'], type: 'string' },
      required: false,
    },
  })

const CallbackParamsSchema = z
  .string()
  .exactOptional()
  .openapi({
    param: {
      description: 'JSONP',
      in: 'query',
      name: 'callback',
      schema: { type: 'string' },
      required: false,
    },
  })

const FieldsParamsSchema = z
  .string()
  .exactOptional()
  .openapi({
    param: {
      description: 'Selector specifying which fields to include in a partial response.',
      in: 'query',
      name: 'fields',
      schema: { type: 'string' },
      required: false,
    },
  })

const KeyParamsSchema = z
  .string()
  .exactOptional()
  .openapi({
    param: {
      description:
        'API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.',
      in: 'query',
      name: 'key',
      schema: { type: 'string' },
      required: false,
    },
  })

const OauthTokenParamsSchema = z
  .string()
  .exactOptional()
  .openapi({
    param: {
      description: 'OAuth 2.0 token for the current user.',
      in: 'query',
      name: 'oauth_token',
      schema: { type: 'string' },
      required: false,
    },
  })

const PrettyPrintParamsSchema = z
  .stringbool()
  .exactOptional()
  .openapi({
    param: {
      description: 'Returns response with indentations and line breaks.',
      in: 'query',
      name: 'prettyPrint',
      schema: { type: 'boolean' },
      required: false,
    },
  })

const QuotaUserParamsSchema = z
  .string()
  .exactOptional()
  .openapi({
    param: {
      description:
        'Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.',
      in: 'query',
      name: 'quotaUser',
      schema: { type: 'string' },
      required: false,
    },
  })

const UploadTypeParamsSchema = z
  .string()
  .exactOptional()
  .openapi({
    param: {
      description: 'Legacy upload protocol for media (e.g. "media", "multipart").',
      in: 'query',
      name: 'uploadType',
      schema: { type: 'string' },
      required: false,
    },
  })

const UploadProtocolParamsSchema = z
  .string()
  .exactOptional()
  .openapi({
    param: {
      description: 'Upload protocol for media (e.g. "raw", "multipart").',
      in: 'query',
      name: 'upload_protocol',
      schema: { type: 'string' },
      required: false,
    },
  })

const Oauth2SecurityScheme = {
  description: 'Oauth 2.0 implicit authentication',
  flows: {
    implicit: {
      authorizationUrl: 'https://accounts.google.com/o/oauth2/auth',
      scopes: {
        'https://www.googleapis.com/auth/cloud-platform':
          'See, edit, configure, and delete your Google Cloud data and see the email address for your Google Account.',
        'https://www.googleapis.com/auth/monitoring':
          'View and write monitoring data for all of your Google and third-party Cloud and API projects',
        'https://www.googleapis.com/auth/monitoring.read':
          'View monitoring data for all of your Google Cloud and third-party projects',
        'https://www.googleapis.com/auth/monitoring.write':
          'Publish metric data to your Google Cloud projects',
      },
    },
  },
  type: 'oauth2',
}

const Oauth2cSecurityScheme = {
  description: 'Oauth 2.0 authorizationCode authentication',
  flows: {
    authorizationCode: {
      authorizationUrl: 'https://accounts.google.com/o/oauth2/auth',
      scopes: {
        'https://www.googleapis.com/auth/cloud-platform':
          'See, edit, configure, and delete your Google Cloud data and see the email address for your Google Account.',
        'https://www.googleapis.com/auth/monitoring':
          'View and write monitoring data for all of your Google and third-party Cloud and API projects',
        'https://www.googleapis.com/auth/monitoring.read':
          'View monitoring data for all of your Google Cloud and third-party projects',
        'https://www.googleapis.com/auth/monitoring.write':
          'Publish metric data to your Google Cloud projects',
      },
      tokenUrl: 'https://accounts.google.com/o/oauth2/token',
    },
  },
  type: 'oauth2',
}

export const getV1LocationsGlobalMetricsScopesListMetricsScopesByMonitoredProjectRoute =
  createRoute({
    method: 'get',
    path: '/v1/locations/global/metricsScopes:listMetricsScopesByMonitoredProject',
    tags: ['locations'],
    description:
      'Returns a list of every Metrics Scope that a specific MonitoredProject has been added to. The metrics scope representing the specified monitored project will always be the first entry in the response.',
    operationId: 'monitoring.locations.global.metricsScopes.listMetricsScopesByMonitoredProject',
    request: {
      query: z.object({
        '$.xgafv': XgafvParamsSchema,
        access_token: AccessTokenParamsSchema,
        alt: AltParamsSchema,
        callback: CallbackParamsSchema,
        fields: FieldsParamsSchema,
        key: KeyParamsSchema,
        oauth_token: OauthTokenParamsSchema,
        prettyPrint: PrettyPrintParamsSchema,
        quotaUser: QuotaUserParamsSchema,
        upload_protocol: UploadProtocolParamsSchema,
        uploadType: UploadTypeParamsSchema,
        monitoredResourceContainer: z
          .string()
          .exactOptional()
          .openapi({
            param: {
              description:
                'Required. The resource name of the Monitored Project being requested. Example: projects/{MONITORED_PROJECT_ID_OR_NUMBER}',
              in: 'query',
              name: 'monitoredResourceContainer',
              schema: { type: 'string' },
              required: false,
            },
          }),
      }),
    },
    responses: {
      200: {
        description: 'Successful response',
        content: {
          'application/json': { schema: ListMetricsScopesByMonitoredProjectResponseSchema },
        },
      },
    },
    security: [
      {
        Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
        Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
      },
      {
        Oauth2: ['https://www.googleapis.com/auth/monitoring'],
        Oauth2c: ['https://www.googleapis.com/auth/monitoring'],
      },
      {
        Oauth2: ['https://www.googleapis.com/auth/monitoring.read'],
        Oauth2c: ['https://www.googleapis.com/auth/monitoring.read'],
      },
    ],
  })

export const getV1NameRoute = createRoute({
  method: 'get',
  path: '/v1/{name}',
  tags: ['projects'],
  description:
    'Fetches a specific dashboard.This method requires the monitoring.dashboards.get permission on the specified dashboard. For more information, see Cloud Identity and Access Management (https://cloud.google.com/iam).',
  operationId: 'monitoring.projects.dashboards.get',
  request: {
    query: z.object({
      '$.xgafv': XgafvParamsSchema,
      access_token: AccessTokenParamsSchema,
      alt: AltParamsSchema,
      callback: CallbackParamsSchema,
      fields: FieldsParamsSchema,
      key: KeyParamsSchema,
      oauth_token: OauthTokenParamsSchema,
      prettyPrint: PrettyPrintParamsSchema,
      quotaUser: QuotaUserParamsSchema,
      upload_protocol: UploadProtocolParamsSchema,
      uploadType: UploadTypeParamsSchema,
    }),
    params: z.object({
      name: z
        .string()
        .openapi({
          param: {
            description:
              'Required. The resource name of the Dashboard. The format is one of: dashboards/[DASHBOARD_ID] (for system dashboards) projects/[PROJECT_ID_OR_NUMBER]/dashboards/[DASHBOARD_ID] (for custom dashboards).',
            in: 'path',
            name: 'name',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: DashboardSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/monitoring'],
      Oauth2c: ['https://www.googleapis.com/auth/monitoring'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/monitoring.read'],
      Oauth2c: ['https://www.googleapis.com/auth/monitoring.read'],
    },
  ],
})

export const deleteV1NameRoute = createRoute({
  method: 'delete',
  path: '/v1/{name}',
  tags: ['projects'],
  description:
    'Deletes an existing custom dashboard.This method requires the monitoring.dashboards.delete permission on the specified dashboard. For more information, see Cloud Identity and Access Management (https://cloud.google.com/iam).',
  operationId: 'monitoring.projects.dashboards.delete',
  request: {
    query: z.object({
      '$.xgafv': XgafvParamsSchema,
      access_token: AccessTokenParamsSchema,
      alt: AltParamsSchema,
      callback: CallbackParamsSchema,
      fields: FieldsParamsSchema,
      key: KeyParamsSchema,
      oauth_token: OauthTokenParamsSchema,
      prettyPrint: PrettyPrintParamsSchema,
      quotaUser: QuotaUserParamsSchema,
      upload_protocol: UploadProtocolParamsSchema,
      uploadType: UploadTypeParamsSchema,
    }),
    params: z.object({
      name: z
        .string()
        .openapi({
          param: {
            description:
              'Required. The resource name of the Dashboard. The format is: projects/[PROJECT_ID_OR_NUMBER]/dashboards/[DASHBOARD_ID] ',
            in: 'path',
            name: 'name',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: EmptySchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/monitoring'],
      Oauth2c: ['https://www.googleapis.com/auth/monitoring'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/monitoring.write'],
      Oauth2c: ['https://www.googleapis.com/auth/monitoring.write'],
    },
  ],
})

export const patchV1NameRoute = createRoute({
  method: 'patch',
  path: '/v1/{name}',
  tags: ['projects'],
  description:
    'Replaces an existing custom dashboard with a new definition.This method requires the monitoring.dashboards.update permission on the specified dashboard. For more information, see Cloud Identity and Access Management (https://cloud.google.com/iam).',
  operationId: 'monitoring.projects.dashboards.patch',
  request: {
    query: z.object({
      '$.xgafv': XgafvParamsSchema,
      access_token: AccessTokenParamsSchema,
      alt: AltParamsSchema,
      callback: CallbackParamsSchema,
      fields: FieldsParamsSchema,
      key: KeyParamsSchema,
      oauth_token: OauthTokenParamsSchema,
      prettyPrint: PrettyPrintParamsSchema,
      quotaUser: QuotaUserParamsSchema,
      upload_protocol: UploadProtocolParamsSchema,
      uploadType: UploadTypeParamsSchema,
      validateOnly: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            description:
              'If set, validate the request and preview the review, but do not actually save it.',
            in: 'query',
            name: 'validateOnly',
            schema: { type: 'boolean' },
            required: false,
          },
        }),
    }),
    params: z.object({
      name: z
        .string()
        .openapi({
          param: {
            description: 'Identifier. The resource name of the dashboard.',
            in: 'path',
            name: 'name',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: DashboardSchema } } },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: DashboardSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/monitoring'],
      Oauth2c: ['https://www.googleapis.com/auth/monitoring'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/monitoring.write'],
      Oauth2c: ['https://www.googleapis.com/auth/monitoring.write'],
    },
  ],
})

export const getV1NameLocationLocationPrometheusApiV1LabelLabelValuesRoute = createRoute({
  method: 'get',
  path: '/v1/{name}/location/{location}/prometheus/api/v1/label/{label}/values',
  tags: ['projects'],
  description: 'Lists possible values for a given label name.',
  operationId: 'monitoring.projects.location.prometheus.api.v1.label.values',
  request: {
    query: z.object({
      '$.xgafv': XgafvParamsSchema,
      access_token: AccessTokenParamsSchema,
      alt: AltParamsSchema,
      callback: CallbackParamsSchema,
      fields: FieldsParamsSchema,
      key: KeyParamsSchema,
      oauth_token: OauthTokenParamsSchema,
      prettyPrint: PrettyPrintParamsSchema,
      quotaUser: QuotaUserParamsSchema,
      upload_protocol: UploadProtocolParamsSchema,
      uploadType: UploadTypeParamsSchema,
      end: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'The end time to evaluate the query for. Either floating point UNIX seconds or RFC3339 formatted timestamp.',
            in: 'query',
            name: 'end',
            schema: { type: 'string' },
            required: false,
          },
        }),
      match: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'A list of matchers encoded in the Prometheus label matcher format to constrain the values to series that satisfy them.',
            in: 'query',
            name: 'match',
            schema: { type: 'string' },
            required: false,
          },
        }),
      start: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'The start time to evaluate the query for. Either floating point UNIX seconds or RFC3339 formatted timestamp.',
            in: 'query',
            name: 'start',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
    params: z.object({
      name: z
        .string()
        .openapi({
          param: {
            description:
              'The workspace on which to execute the request. It is not part of the open source API but used as a request path prefix to distinguish different virtual Prometheus instances of Google Prometheus Engine. The format is: projects/PROJECT_ID_OR_NUMBER.',
            in: 'path',
            name: 'name',
            required: true,
            schema: { type: 'string' },
          },
        }),
      location: z
        .string()
        .openapi({
          param: {
            description: 'Location of the resource information. Has to be "global" now.',
            in: 'path',
            name: 'location',
            required: true,
            schema: { type: 'string' },
          },
        }),
      label: z
        .string()
        .openapi({
          param: {
            description: 'The label name for which values are queried.',
            in: 'path',
            name: 'label',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: HttpBodySchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/monitoring'],
      Oauth2c: ['https://www.googleapis.com/auth/monitoring'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/monitoring.read'],
      Oauth2c: ['https://www.googleapis.com/auth/monitoring.read'],
    },
  ],
})

export const postV1NameLocationLocationPrometheusApiV1LabelsRoute = createRoute({
  method: 'post',
  path: '/v1/{name}/location/{location}/prometheus/api/v1/labels',
  tags: ['projects'],
  description: 'Lists labels for metrics.',
  operationId: 'monitoring.projects.location.prometheus.api.v1.labels',
  request: {
    query: z.object({
      '$.xgafv': XgafvParamsSchema,
      access_token: AccessTokenParamsSchema,
      alt: AltParamsSchema,
      callback: CallbackParamsSchema,
      fields: FieldsParamsSchema,
      key: KeyParamsSchema,
      oauth_token: OauthTokenParamsSchema,
      prettyPrint: PrettyPrintParamsSchema,
      quotaUser: QuotaUserParamsSchema,
      upload_protocol: UploadProtocolParamsSchema,
      uploadType: UploadTypeParamsSchema,
    }),
    params: z.object({
      name: z
        .string()
        .openapi({
          param: {
            description:
              'The workspace on which to execute the request. It is not part of the open source API but used as a request path prefix to distinguish different virtual Prometheus instances of Google Prometheus Engine. The format is: projects/PROJECT_ID_OR_NUMBER.',
            in: 'path',
            name: 'name',
            required: true,
            schema: { type: 'string' },
          },
        }),
      location: z
        .string()
        .openapi({
          param: {
            description: 'Location of the resource information. Has to be "global" now.',
            in: 'path',
            name: 'location',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: QueryLabelsRequestSchema } } },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: HttpBodySchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/monitoring'],
      Oauth2c: ['https://www.googleapis.com/auth/monitoring'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/monitoring.read'],
      Oauth2c: ['https://www.googleapis.com/auth/monitoring.read'],
    },
  ],
})

export const getV1NameLocationLocationPrometheusApiV1MetadataRoute = createRoute({
  method: 'get',
  path: '/v1/{name}/location/{location}/prometheus/api/v1/metadata',
  tags: ['projects'],
  description: 'Lists metadata for metrics.',
  operationId: 'monitoring.projects.location.prometheus.api.v1.metadata.list',
  request: {
    query: z.object({
      '$.xgafv': XgafvParamsSchema,
      access_token: AccessTokenParamsSchema,
      alt: AltParamsSchema,
      callback: CallbackParamsSchema,
      fields: FieldsParamsSchema,
      key: KeyParamsSchema,
      oauth_token: OauthTokenParamsSchema,
      prettyPrint: PrettyPrintParamsSchema,
      quotaUser: QuotaUserParamsSchema,
      upload_protocol: UploadProtocolParamsSchema,
      uploadType: UploadTypeParamsSchema,
      limit: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Maximum number of metrics to return.',
            in: 'query',
            name: 'limit',
            schema: { type: 'string' },
            required: false,
          },
        }),
      metric: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'The metric name for which to query metadata. If unset, all metric metadata is returned.',
            in: 'query',
            name: 'metric',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
    params: z.object({
      name: z
        .string()
        .openapi({
          param: {
            description:
              'Required. The workspace on which to execute the request. It is not part of the open source API but used as a request path prefix to distinguish different virtual Prometheus instances of Google Prometheus Engine. The format is: projects/PROJECT_ID_OR_NUMBER.',
            in: 'path',
            name: 'name',
            required: true,
            schema: { type: 'string' },
          },
        }),
      location: z
        .string()
        .openapi({
          param: {
            description: 'Location of the resource information. Has to be "global" for now.',
            in: 'path',
            name: 'location',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: HttpBodySchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/monitoring'],
      Oauth2c: ['https://www.googleapis.com/auth/monitoring'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/monitoring.read'],
      Oauth2c: ['https://www.googleapis.com/auth/monitoring.read'],
    },
  ],
})

export const postV1NameLocationLocationPrometheusApiV1QueryRoute = createRoute({
  method: 'post',
  path: '/v1/{name}/location/{location}/prometheus/api/v1/query',
  tags: ['projects'],
  description: 'Evaluate a PromQL query at a single point in time.',
  operationId: 'monitoring.projects.location.prometheus.api.v1.query',
  request: {
    query: z.object({
      '$.xgafv': XgafvParamsSchema,
      access_token: AccessTokenParamsSchema,
      alt: AltParamsSchema,
      callback: CallbackParamsSchema,
      fields: FieldsParamsSchema,
      key: KeyParamsSchema,
      oauth_token: OauthTokenParamsSchema,
      prettyPrint: PrettyPrintParamsSchema,
      quotaUser: QuotaUserParamsSchema,
      upload_protocol: UploadProtocolParamsSchema,
      uploadType: UploadTypeParamsSchema,
    }),
    params: z.object({
      name: z
        .string()
        .openapi({
          param: {
            description:
              "The project on which to execute the request. Data associcated with the project's workspace stored under the The format is: projects/PROJECT_ID_OR_NUMBER. Open source API but used as a request path prefix to distinguish different virtual Prometheus instances of Google Prometheus Engine.",
            in: 'path',
            name: 'name',
            required: true,
            schema: { type: 'string' },
          },
        }),
      location: z
        .string()
        .openapi({
          param: {
            description: 'Location of the resource information. Has to be "global" now.',
            in: 'path',
            name: 'location',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: QueryInstantRequestSchema } } },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: HttpBodySchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/monitoring'],
      Oauth2c: ['https://www.googleapis.com/auth/monitoring'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/monitoring.read'],
      Oauth2c: ['https://www.googleapis.com/auth/monitoring.read'],
    },
  ],
})

export const postV1NameLocationLocationPrometheusApiV1QueryExemplarsRoute = createRoute({
  method: 'post',
  path: '/v1/{name}/location/{location}/prometheus/api/v1/query_exemplars',
  tags: ['projects'],
  description: 'Lists exemplars relevant to a given PromQL query,',
  operationId: 'monitoring.projects.location.prometheus.api.v1.query_exemplars',
  request: {
    query: z.object({
      '$.xgafv': XgafvParamsSchema,
      access_token: AccessTokenParamsSchema,
      alt: AltParamsSchema,
      callback: CallbackParamsSchema,
      fields: FieldsParamsSchema,
      key: KeyParamsSchema,
      oauth_token: OauthTokenParamsSchema,
      prettyPrint: PrettyPrintParamsSchema,
      quotaUser: QuotaUserParamsSchema,
      upload_protocol: UploadProtocolParamsSchema,
      uploadType: UploadTypeParamsSchema,
    }),
    params: z.object({
      name: z
        .string()
        .openapi({
          param: {
            description:
              "The project on which to execute the request. Data associcated with the project's workspace stored under the The format is: projects/PROJECT_ID_OR_NUMBER. Open source API but used as a request path prefix to distinguish different virtual Prometheus instances of Google Prometheus Engine.",
            in: 'path',
            name: 'name',
            required: true,
            schema: { type: 'string' },
          },
        }),
      location: z
        .string()
        .openapi({
          param: {
            description: 'Location of the resource information. Has to be "global" now.',
            in: 'path',
            name: 'location',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: QueryExemplarsRequestSchema } } },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: HttpBodySchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/monitoring'],
      Oauth2c: ['https://www.googleapis.com/auth/monitoring'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/monitoring.read'],
      Oauth2c: ['https://www.googleapis.com/auth/monitoring.read'],
    },
  ],
})

export const postV1NameLocationLocationPrometheusApiV1QueryRangeRoute = createRoute({
  method: 'post',
  path: '/v1/{name}/location/{location}/prometheus/api/v1/query_range',
  tags: ['projects'],
  description: 'Evaluate a PromQL query with start, end time range.',
  operationId: 'monitoring.projects.location.prometheus.api.v1.query_range',
  request: {
    query: z.object({
      '$.xgafv': XgafvParamsSchema,
      access_token: AccessTokenParamsSchema,
      alt: AltParamsSchema,
      callback: CallbackParamsSchema,
      fields: FieldsParamsSchema,
      key: KeyParamsSchema,
      oauth_token: OauthTokenParamsSchema,
      prettyPrint: PrettyPrintParamsSchema,
      quotaUser: QuotaUserParamsSchema,
      upload_protocol: UploadProtocolParamsSchema,
      uploadType: UploadTypeParamsSchema,
    }),
    params: z.object({
      name: z
        .string()
        .openapi({
          param: {
            description:
              "The project on which to execute the request. Data associcated with the project's workspace stored under the The format is: projects/PROJECT_ID_OR_NUMBER. Open source API but used as a request path prefix to distinguish different virtual Prometheus instances of Google Prometheus Engine.",
            in: 'path',
            name: 'name',
            required: true,
            schema: { type: 'string' },
          },
        }),
      location: z
        .string()
        .openapi({
          param: {
            description: 'Location of the resource information. Has to be "global" now.',
            in: 'path',
            name: 'location',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: QueryRangeRequestSchema } } },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: HttpBodySchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/monitoring'],
      Oauth2c: ['https://www.googleapis.com/auth/monitoring'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/monitoring.read'],
      Oauth2c: ['https://www.googleapis.com/auth/monitoring.read'],
    },
  ],
})

export const postV1NameLocationLocationPrometheusApiV1SeriesRoute = createRoute({
  method: 'post',
  path: '/v1/{name}/location/{location}/prometheus/api/v1/series',
  tags: ['projects'],
  description: 'Lists metadata for metrics.',
  operationId: 'monitoring.projects.location.prometheus.api.v1.series',
  request: {
    query: z.object({
      '$.xgafv': XgafvParamsSchema,
      access_token: AccessTokenParamsSchema,
      alt: AltParamsSchema,
      callback: CallbackParamsSchema,
      fields: FieldsParamsSchema,
      key: KeyParamsSchema,
      oauth_token: OauthTokenParamsSchema,
      prettyPrint: PrettyPrintParamsSchema,
      quotaUser: QuotaUserParamsSchema,
      upload_protocol: UploadProtocolParamsSchema,
      uploadType: UploadTypeParamsSchema,
    }),
    params: z.object({
      name: z
        .string()
        .openapi({
          param: {
            description:
              'Required. The workspace on which to execute the request. It is not part of the open source API but used as a request path prefix to distinguish different virtual Prometheus instances of Google Prometheus Engine. The format is: projects/PROJECT_ID_OR_NUMBER.',
            in: 'path',
            name: 'name',
            required: true,
            schema: { type: 'string' },
          },
        }),
      location: z
        .string()
        .openapi({
          param: {
            description: 'Location of the resource information. Has to be "global" for now.',
            in: 'path',
            name: 'location',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: QuerySeriesRequestSchema } } },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: HttpBodySchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/monitoring'],
      Oauth2c: ['https://www.googleapis.com/auth/monitoring'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/monitoring.read'],
      Oauth2c: ['https://www.googleapis.com/auth/monitoring.read'],
    },
  ],
})

export const getV1ParentDashboardsRoute = createRoute({
  method: 'get',
  path: '/v1/{parent}/dashboards',
  tags: ['projects'],
  description:
    'Lists the existing dashboards.This method requires the monitoring.dashboards.list permission on the specified project. For more information, see Cloud Identity and Access Management (https://cloud.google.com/iam).',
  operationId: 'monitoring.projects.dashboards.list',
  request: {
    query: z.object({
      '$.xgafv': XgafvParamsSchema,
      access_token: AccessTokenParamsSchema,
      alt: AltParamsSchema,
      callback: CallbackParamsSchema,
      fields: FieldsParamsSchema,
      key: KeyParamsSchema,
      oauth_token: OauthTokenParamsSchema,
      prettyPrint: PrettyPrintParamsSchema,
      quotaUser: QuotaUserParamsSchema,
      upload_protocol: UploadProtocolParamsSchema,
      uploadType: UploadTypeParamsSchema,
      pageSize: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .exactOptional()
        .openapi({
          param: {
            description:
              'A positive number that is the maximum number of results to return. If unspecified, a default of 1000 is used.',
            in: 'query',
            name: 'pageSize',
            schema: { type: 'integer' },
            required: false,
          },
        }),
      pageToken: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Optional. If this field is not empty then it must contain the nextPageToken value returned by a previous call to this method. Using this field causes the method to return additional results from the previous method call.',
            in: 'query',
            name: 'pageToken',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
    params: z.object({
      parent: z
        .string()
        .openapi({
          param: {
            description:
              'Required. The scope of the dashboards to list. The format is: projects/[PROJECT_ID_OR_NUMBER] ',
            in: 'path',
            name: 'parent',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: ListDashboardsResponseSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/monitoring'],
      Oauth2c: ['https://www.googleapis.com/auth/monitoring'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/monitoring.read'],
      Oauth2c: ['https://www.googleapis.com/auth/monitoring.read'],
    },
  ],
})

export const postV1ParentDashboardsRoute = createRoute({
  method: 'post',
  path: '/v1/{parent}/dashboards',
  tags: ['projects'],
  description:
    'Creates a new custom dashboard. For examples on how you can use this API to create dashboards, see Managing dashboards by API (https://cloud.google.com/monitoring/dashboards/api-dashboard). This method requires the monitoring.dashboards.create permission on the specified project. For more information about permissions, see Cloud Identity and Access Management (https://cloud.google.com/iam).',
  operationId: 'monitoring.projects.dashboards.create',
  request: {
    query: z.object({
      '$.xgafv': XgafvParamsSchema,
      access_token: AccessTokenParamsSchema,
      alt: AltParamsSchema,
      callback: CallbackParamsSchema,
      fields: FieldsParamsSchema,
      key: KeyParamsSchema,
      oauth_token: OauthTokenParamsSchema,
      prettyPrint: PrettyPrintParamsSchema,
      quotaUser: QuotaUserParamsSchema,
      upload_protocol: UploadProtocolParamsSchema,
      uploadType: UploadTypeParamsSchema,
      validateOnly: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            description:
              'If set, validate the request and preview the review, but do not actually save it.',
            in: 'query',
            name: 'validateOnly',
            schema: { type: 'boolean' },
            required: false,
          },
        }),
    }),
    params: z.object({
      parent: z
        .string()
        .openapi({
          param: {
            description:
              'Required. The project on which to execute the request. The format is: projects/[PROJECT_ID_OR_NUMBER] The [PROJECT_ID_OR_NUMBER] must match the dashboard resource name.',
            in: 'path',
            name: 'parent',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: DashboardSchema } } },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: DashboardSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/monitoring'],
      Oauth2c: ['https://www.googleapis.com/auth/monitoring'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/monitoring.write'],
      Oauth2c: ['https://www.googleapis.com/auth/monitoring.write'],
    },
  ],
})

export const postV1ParentProjectsRoute = createRoute({
  method: 'post',
  path: '/v1/{parent}/projects',
  tags: ['locations'],
  description: 'Adds a MonitoredProject with the given project ID to the specified Metrics Scope.',
  operationId: 'monitoring.locations.global.metricsScopes.projects.create',
  request: {
    query: z.object({
      '$.xgafv': XgafvParamsSchema,
      access_token: AccessTokenParamsSchema,
      alt: AltParamsSchema,
      callback: CallbackParamsSchema,
      fields: FieldsParamsSchema,
      key: KeyParamsSchema,
      oauth_token: OauthTokenParamsSchema,
      prettyPrint: PrettyPrintParamsSchema,
      quotaUser: QuotaUserParamsSchema,
      upload_protocol: UploadProtocolParamsSchema,
      uploadType: UploadTypeParamsSchema,
    }),
    params: z.object({
      parent: z
        .string()
        .openapi({
          param: {
            description:
              'Required. The resource name of the existing Metrics Scope that will monitor this project. Example: locations/global/metricsScopes/{SCOPING_PROJECT_ID_OR_NUMBER}',
            in: 'path',
            name: 'parent',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: MonitoredProjectSchema } } },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: OperationSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/monitoring'],
      Oauth2c: ['https://www.googleapis.com/auth/monitoring'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/monitoring.write'],
      Oauth2c: ['https://www.googleapis.com/auth/monitoring.write'],
    },
  ],
})
