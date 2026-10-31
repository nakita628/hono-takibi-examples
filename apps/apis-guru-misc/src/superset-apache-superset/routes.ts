import { createRoute, z } from '@hono/zod-openapi'

const AnnotationLayerSchema = z
  .object({
    annotationType: z
      .enum(['FORMULA', 'INTERVAL', 'EVENT', 'TIME_SERIES'])
      .exactOptional()
      .openapi({ description: 'Type of annotation layer' }),
    color: z.string().nullable().exactOptional().openapi({ description: 'Layer color' }),
    descriptionColumns: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description: 'Columns to use as the description. If none are provided, all will be shown.',
      }),
    hideLine: z
      .boolean()
      .nullable()
      .exactOptional()
      .openapi({ description: 'Should line be hidden. Only applies to line annotations' }),
    intervalEndColumn: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({
        description: 'Column containing end of interval. Only applies to interval layers',
      }),
    name: z.string().openapi({ description: 'Name of layer' }),
    opacity: z
      .enum(['', 'opacityLow', 'opacityMedium', 'opacityHigh'])
      .nullable()
      .exactOptional()
      .openapi({ description: 'Opacity of layer' }),
    overrides: z
      .record(z.string(), z.any().nullable())
      .nullable()
      .exactOptional()
      .openapi({ description: 'which properties should be overridable' }),
    show: z.boolean().openapi({ description: 'Should the layer be shown' }),
    showMarkers: z
      .boolean()
      .openapi({ description: 'Should markers be shown. Only applies to line annotations.' }),
    sourceType: z
      .enum(['', 'line', 'NATIVE', 'table'])
      .exactOptional()
      .openapi({ description: 'Type of source for annotation data' }),
    style: z
      .enum(['dashed', 'dotted', 'solid', 'longDashed'])
      .exactOptional()
      .openapi({ description: 'Line style. Only applies to time-series annotations' }),
    timeColumn: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({ description: 'Column with event date or interval start date' }),
    titleColumn: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({ description: 'Column with title' }),
    value: z
      .any()
      .openapi({
        description:
          'For formula annotations, this contains the formula. For other types, this is the primary key of the source object.',
      }),
    width: z.float32().min(0).exactOptional().openapi({ description: 'Width of annotation line' }),
  })
  .openapi({ required: ['name', 'show', 'showMarkers', 'value'] })
  .openapi('AnnotationLayer')

const AnnotationLayerRestApiGetSchema = z
  .object({
    descr: z.string().nullable().exactOptional(),
    id: z.int32().exactOptional(),
    name: z.string().max(250).nullable().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('AnnotationLayerRestApiGet')

const Meta4Schema = z
  .object({ first_name: z.string().max(64), last_name: z.string().max(64) })
  .openapi({ required: ['first_name', 'last_name'] })
  .openapi('Meta4')

const Meta3Schema = z
  .object({ first_name: z.string().max(64), last_name: z.string().max(64) })
  .openapi({ required: ['first_name', 'last_name'] })
  .openapi('Meta3')

const AnnotationLayerRestApiGetListSchema = z
  .object({
    changed_by: Meta4Schema.exactOptional(),
    changed_on: z.iso.datetime({ offset: true }).nullable().exactOptional(),
    changed_on_delta_humanized: z.any().exactOptional().openapi({ readOnly: true }),
    created_by: Meta3Schema.exactOptional(),
    created_on: z.iso.datetime({ offset: true }).nullable().exactOptional(),
    descr: z.string().nullable().exactOptional(),
    id: z.int32().exactOptional(),
    name: z.string().max(250).nullable().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('AnnotationLayerRestApiGetList')

const AnnotationLayerRestApiPostSchema = z
  .object({
    descr: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({ description: 'Give a description for this annotation layer' }),
    name: z
      .string()
      .min(1)
      .max(250)
      .exactOptional()
      .openapi({ description: 'The annotation layer name' }),
  })
  .openapi({ required: [] })
  .openapi('AnnotationLayerRestApiPost')

const AnnotationLayerRestApiPutSchema = z
  .object({
    descr: z
      .string()
      .exactOptional()
      .openapi({ description: 'Give a description for this annotation layer' }),
    name: z
      .string()
      .min(1)
      .max(250)
      .exactOptional()
      .openapi({ description: 'The annotation layer name' }),
  })
  .openapi({ required: [] })
  .openapi('AnnotationLayerRestApiPut')

const Meta2Schema = z
  .object({ id: z.int32().exactOptional(), name: z.string().max(250).nullable().exactOptional() })
  .openapi({ required: [] })
  .openapi('Meta2')

const AnnotationRestApiGetSchema = z
  .object({
    end_dttm: z.iso.datetime({ offset: true }).nullable().exactOptional(),
    id: z.int32().exactOptional(),
    json_metadata: z.string().nullable().exactOptional(),
    layer: Meta2Schema,
    long_descr: z.string().nullable().exactOptional(),
    short_descr: z.string().max(500).nullable().exactOptional(),
    start_dttm: z.iso.datetime({ offset: true }).nullable().exactOptional(),
  })
  .openapi({ required: ['layer'] })
  .openapi('AnnotationRestApiGet')

const Meta1Schema = z
  .object({ first_name: z.string().max(64), id: z.int32().exactOptional() })
  .openapi({ required: ['first_name'] })
  .openapi('Meta1')

const MetaSchema = z
  .object({ first_name: z.string().max(64), id: z.int32().exactOptional() })
  .openapi({ required: ['first_name'] })
  .openapi('Meta')

const AnnotationRestApiGetListSchema = z
  .object({
    changed_by: Meta1Schema.exactOptional(),
    changed_on_delta_humanized: z.any().exactOptional().openapi({ readOnly: true }),
    created_by: MetaSchema.exactOptional(),
    end_dttm: z.iso.datetime({ offset: true }).nullable().exactOptional(),
    id: z.int32().exactOptional(),
    long_descr: z.string().nullable().exactOptional(),
    short_descr: z.string().max(500).nullable().exactOptional(),
    start_dttm: z.iso.datetime({ offset: true }).nullable().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('AnnotationRestApiGetList')

const AnnotationRestApiPostSchema = z
  .object({
    end_dttm: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({ description: 'The annotation end date time' }),
    json_metadata: z.string().nullable().exactOptional().openapi({ description: 'JSON metadata' }),
    long_descr: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({ description: 'A long description' }),
    short_descr: z
      .string()
      .min(1)
      .max(500)
      .exactOptional()
      .openapi({ description: 'A short description' }),
    start_dttm: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({ description: 'The annotation start date time' }),
  })
  .openapi({ required: [] })
  .openapi('AnnotationRestApiPost')

const AnnotationRestApiPutSchema = z
  .object({
    end_dttm: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({ description: 'The annotation end date time' }),
    json_metadata: z.string().exactOptional().openapi({ description: 'JSON metadata' }),
    long_descr: z.string().exactOptional().openapi({ description: 'A long description' }),
    short_descr: z
      .string()
      .min(1)
      .max(500)
      .exactOptional()
      .openapi({ description: 'A short description' }),
    start_dttm: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({ description: 'The annotation start date time' }),
  })
  .openapi({ required: [] })
  .openapi('AnnotationRestApiPut')

const DatasourceSchema = z
  .object({
    database_name: z.string().exactOptional().openapi({ description: 'Datasource name' }),
    datasource_name: z.string().exactOptional().openapi({ description: 'The datasource name.' }),
    datasource_type: z
      .enum(['druid', 'table', 'view'])
      .openapi({ description: 'The type of dataset/datasource identified on `datasource_id`.' }),
    schema: z.string().exactOptional().openapi({ description: 'Datasource schema' }),
  })
  .openapi({ required: ['datasource_type'] })
  .openapi('Datasource')

const CacheInvalidationRequestSchemaSchema = z
  .object({
    datasource_uids: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description:
          'The uid of the dataset/datasource this new chart will use. A complete datasource identification needs `datasouce_uid` ',
      }),
    datasources: z
      .array(DatasourceSchema)
      .exactOptional()
      .openapi({ description: 'A list of the data source and database names' }),
  })
  .openapi({ required: [] })
  .openapi('CacheInvalidationRequestSchema')

const CacheRestApiGetSchema = z
  .object({ id: z.int32().exactOptional() })
  .openapi({ required: [] })
  .openapi('CacheRestApiGet')

const CacheRestApiGetListSchema = z
  .object({ id: z.int32().exactOptional() })
  .openapi({ required: [] })
  .openapi('CacheRestApiGetList')

const CacheRestApiPostSchema = z
  .object({ id: z.int32().exactOptional() })
  .openapi({ required: [] })
  .openapi('CacheRestApiPost')

const CacheRestApiPutSchema = z
  .object({ id: z.int32().exactOptional() })
  .openapi({ required: [] })
  .openapi('CacheRestApiPut')

const ChartCacheScreenshotResponseSchemaSchema = z
  .object({
    cache_key: z.string().exactOptional().openapi({ description: 'The cache key' }),
    chart_url: z.string().exactOptional().openapi({ description: 'The url to render the chart' }),
    image_url: z
      .string()
      .exactOptional()
      .openapi({ description: 'The url to fetch the screenshot' }),
  })
  .openapi({ required: [] })
  .openapi('ChartCacheScreenshotResponseSchema')

const ChartDataColumnSchema = z
  .object({
    column_name: z
      .string()
      .exactOptional()
      .openapi({ description: 'The name of the target column', example: 'mycol' }),
    type: z
      .string()
      .exactOptional()
      .openapi({ description: 'Type of target column', example: 'BIGINT' }),
  })
  .openapi({ required: [] })
  .openapi('ChartDataColumn')

const ChartDataAdhocMetricSchemaSchema = z
  .object({
    aggregate: z
      .enum(['AVG', 'COUNT', 'COUNT_DISTINCT', 'MAX', 'MIN', 'SUM'])
      .exactOptional()
      .openapi({ description: 'Aggregation operator. Only required for simple expression types.' }),
    column: ChartDataColumnSchema.exactOptional(),
    expressionType: z
      .enum(['SIMPLE', 'SQL'])
      .openapi({ description: 'Simple or SQL metric', example: 'SQL' }),
    hasCustomLabel: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'When false, the label will be automatically generated based on the aggregate expression. When true, a custom label has to be specified.',
        example: true,
      }),
    label: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Label for the metric. Is automatically generated unless hasCustomLabel is true, in which case label must be defined.',
        example: 'Weighted observations',
      }),
    optionName: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Unique identifier. Can be any string value, as long as all metrics have a unique identifier. If undefined, a random name will be generated.',
        example: 'metric_aec60732-fac0-4b17-b736-93f1a5c93e30',
      }),
    sqlExpression: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The metric as defined by a SQL aggregate expression. Only required for SQL expression type.',
        example: 'SUM(weight * observations) / SUM(weight)',
      }),
  })
  .openapi({ required: ['expressionType'] })
  .openapi('ChartDataAdhocMetricSchema')

const ChartDataAggregateOptionsSchemaSchema = z
  .object({
    aggregates: z
      .object({})
      .exactOptional()
      .openapi({
        description:
          'The keys are the name of the aggregate column to be created, and the values specify the details of how to apply the aggregation. If an operator requires additional options, these can be passed here to be unpacked in the operator call. The following numpy operators are supported: average, argmin, argmax, cumsum, cumprod, max, mean, median, nansum, nanmin, nanmax, nanmean, nanmedian, min, percentile, prod, product, std, sum, var. Any options required by the operator can be passed to the `options` object.\n\nIn the example, a new column `first_quantile` is created based on values in the column `my_col` using the `percentile` operator with the `q=0.25` parameter.',
        example: {
          first_quantile: { column: 'my_col', operator: 'percentile', options: { q: 0.25 } },
        },
      }),
  })
  .openapi({ required: [] })
  .openapi('ChartDataAggregateOptionsSchema')

const ChartDataAsyncResponseSchemaSchema = z
  .object({
    channel_id: z
      .string()
      .exactOptional()
      .openapi({ description: 'Unique session async channel ID' }),
    job_id: z.string().exactOptional().openapi({ description: 'Unique async job ID' }),
    result_url: z
      .string()
      .exactOptional()
      .openapi({ description: 'Unique result URL for fetching async query data' }),
    status: z.string().exactOptional().openapi({ description: 'Status value for async job' }),
    user_id: z.string().nullable().exactOptional().openapi({ description: 'Requesting user ID' }),
  })
  .openapi({ required: [] })
  .openapi('ChartDataAsyncResponseSchema')

const ChartDataBoxplotOptionsSchemaSchema = z
  .object({
    groupby: z
      .array(z.string().openapi({ description: 'Columns by which to group the query.' }))
      .nullable()
      .exactOptional(),
    metrics: z
      .array(z.any())
      .exactOptional()
      .openapi({
        description:
          'Aggregate expressions. Metrics can be passed as both references to datasource metrics (strings), or ad-hoc metricswhich are defined only within the query object. See `ChartDataAdhocMetricSchema` for the structure of ad-hoc metrics.',
      }),
    percentiles: z
      .any()
      .exactOptional()
      .openapi({
        description: 'Upper and lower percentiles for percentile whisker type.',
        example: [1, 99],
      }),
    whisker_type: z
      .enum(['tukey', 'min/max', 'percentile'])
      .openapi({ description: 'Whisker type. Any numpy function will work.', example: 'tukey' }),
  })
  .openapi({ required: ['whisker_type'] })
  .openapi('ChartDataBoxplotOptionsSchema')

const ChartDataContributionOptionsSchemaSchema = z
  .object({
    orientation: z
      .enum(['row', 'column'])
      .openapi({
        description: 'Should cell values be calculated across the row or column.',
        example: 'row',
      }),
  })
  .openapi({ required: ['orientation'] })
  .openapi('ChartDataContributionOptionsSchema')

const ChartDataDatasourceSchema = z
  .object({
    id: z.int32().openapi({ description: 'Datasource id' }),
    type: z.enum(['druid', 'table']).exactOptional().openapi({ description: 'Datasource type' }),
  })
  .openapi({ required: ['id'] })
  .openapi('ChartDataDatasource')

const ChartDataFilterSchema = z
  .object({
    col: z.string().openapi({ description: 'The column to filter.', example: 'country' }),
    op: z
      .enum([
        '==',
        '!=',
        '>',
        '<',
        '>=',
        '<=',
        'LIKE',
        'ILIKE',
        'IS NULL',
        'IS NOT NULL',
        'IN',
        'NOT IN',
        'REGEX',
        'IS TRUE',
        'IS FALSE',
      ])
      .openapi({ description: 'The comparison operator.', example: 'IN' }),
    val: z
      .any()
      .exactOptional()
      .openapi({
        description:
          'The value or values to compare against. Can be a string, integer, decimal or list, depending on the operator.',
        example: ['China', 'France', 'Japan'],
      }),
  })
  .openapi({ required: ['col', 'op'] })
  .openapi('ChartDataFilter')

const ChartDataExtrasSchema = z
  .object({
    druid_time_origin: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({
        description:
          'Starting point for time grain counting on legacy Druid datasources. Used to change e.g. Monday/Sunday first-day-of-week.',
      }),
    having: z
      .string()
      .exactOptional()
      .openapi({
        description: 'HAVING clause to be added to aggregate queries using AND operator.',
      }),
    having_druid: z
      .array(ChartDataFilterSchema)
      .exactOptional()
      .openapi({ description: 'HAVING filters to be added to legacy Druid datasource queries.' }),
    relative_end: z
      .enum(['today', 'now'])
      .exactOptional()
      .openapi({
        description:
          'End time for relative time deltas. Default: `config["DEFAULT_RELATIVE_START_TIME"]`',
      }),
    relative_start: z
      .enum(['today', 'now'])
      .exactOptional()
      .openapi({
        description:
          'Start time for relative time deltas. Default: `config["DEFAULT_RELATIVE_START_TIME"]`',
      }),
    time_grain_sqla: z
      .enum([
        'PT1S',
        'PT5S',
        'PT30S',
        'PT1M',
        'PT5M',
        'PT10M',
        'PT15M',
        'PT0.5H',
        'PT1H',
        'PT6H',
        'P1D',
        'P1W',
        'P1M',
        'P0.25Y',
        'P1Y',
        '1969-12-28T00:00:00Z/P1W',
        '1969-12-29T00:00:00Z/P1W',
        'P1W/1970-01-03T00:00:00Z',
        'P1W/1970-01-04T00:00:00Z',
      ])
      .nullable()
      .exactOptional()
      .openapi({
        description:
          'To what level of granularity should the temporal column be aggregated. Supports [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601#Durations) durations.',
        example: 'P1D',
      }),
    time_range_endpoints: z.array(z.any()).exactOptional(),
    where: z
      .string()
      .exactOptional()
      .openapi({ description: 'WHERE clause to be added to queries using AND operator.' }),
  })
  .openapi({ required: [] })
  .openapi('ChartDataExtras')

const ChartDataGeodeticParseOptionsSchemaSchema = z
  .object({
    altitude: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Name of target column for decoded altitude. If omitted, altitude information in geodetic string is ignored.',
      }),
    geodetic: z
      .string()
      .openapi({ description: 'Name of source column containing geodetic point strings' }),
    latitude: z.string().openapi({ description: 'Name of target column for decoded latitude' }),
    longitude: z.string().openapi({ description: 'Name of target column for decoded longitude' }),
  })
  .openapi({ required: ['geodetic', 'latitude', 'longitude'] })
  .openapi('ChartDataGeodeticParseOptionsSchema')

const ChartDataGeohashDecodeOptionsSchemaSchema = z
  .object({
    geohash: z.string().openapi({ description: 'Name of source column containing geohash string' }),
    latitude: z.string().openapi({ description: 'Name of target column for decoded latitude' }),
    longitude: z.string().openapi({ description: 'Name of target column for decoded longitude' }),
  })
  .openapi({ required: ['geohash', 'latitude', 'longitude'] })
  .openapi('ChartDataGeohashDecodeOptionsSchema')

const ChartDataGeohashEncodeOptionsSchemaSchema = z
  .object({
    geohash: z
      .string()
      .openapi({ description: 'Name of target column for encoded geohash string' }),
    latitude: z.string().openapi({ description: 'Name of source latitude column' }),
    longitude: z.string().openapi({ description: 'Name of source longitude column' }),
  })
  .openapi({ required: ['geohash', 'latitude', 'longitude'] })
  .openapi('ChartDataGeohashEncodeOptionsSchema')

const ChartDataPivotOptionsSchemaSchema = z
  .object({
    aggregates: z
      .object({})
      .exactOptional()
      .openapi({
        description:
          'The keys are the name of the aggregate column to be created, and the values specify the details of how to apply the aggregation. If an operator requires additional options, these can be passed here to be unpacked in the operator call. The following numpy operators are supported: average, argmin, argmax, cumsum, cumprod, max, mean, median, nansum, nanmin, nanmax, nanmean, nanmedian, min, percentile, prod, product, std, sum, var. Any options required by the operator can be passed to the `options` object.\n\nIn the example, a new column `first_quantile` is created based on values in the column `my_col` using the `percentile` operator with the `q=0.25` parameter.',
        example: {
          first_quantile: { column: 'my_col', operator: 'percentile', options: { q: 0.25 } },
        },
      }),
    column_fill_value: z
      .string()
      .exactOptional()
      .openapi({ description: 'Value to replace missing pivot columns names with.' }),
    columns: z
      .array(z.string().openapi({ description: 'Columns to group by on the table columns' }))
      .exactOptional(),
    drop_missing_columns: z
      .boolean()
      .exactOptional()
      .openapi({
        description: 'Do not include columns whose entries are all missing (default: `true`).',
      }),
    marginal_distribution_name: z
      .string()
      .exactOptional()
      .openapi({ description: 'Name of marginal distribution row/column. (default: `All`)' }),
    marginal_distributions: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Add totals for row/column. (default: `false`)' }),
    metric_fill_value: z
      .number()
      .exactOptional()
      .openapi({ description: 'Value to replace missing values with in aggregate calculations.' }),
  })
  .openapi({ required: [] })
  .openapi('ChartDataPivotOptionsSchema')

const ChartDataPostProcessingOperationSchema = z
  .object({
    operation: z
      .enum([
        'aggregate',
        'boxplot',
        'contribution',
        'cum',
        'geodetic_parse',
        'geohash_decode',
        'geohash_encode',
        'pivot',
        'prophet',
        'rolling',
        'select',
        'sort',
        'diff',
        'compare',
      ])
      .openapi({ description: 'Post processing operation type', example: 'aggregate' }),
    options: z
      .object({})
      .exactOptional()
      .openapi({
        description:
          'Options specifying how to perform the operation. Please refer to the respective post processing operation option schemas. For example, `ChartDataPostProcessingOperationOptions` specifies the required options for the pivot operation.',
        example: {
          aggregates: {
            age_mean: { column: 'age', operator: 'mean' },
            age_q1: { column: 'age', operator: 'percentile', options: { q: 0.25 } },
          },
          groupby: ['country', 'gender'],
        },
      }),
  })
  .openapi({ required: ['operation'] })
  .openapi('ChartDataPostProcessingOperation')

const ChartDataProphetOptionsSchemaSchema = z
  .object({
    confidence_interval: z
      .float32()
      .min(0)
      .max(1)
      .openapi({ description: 'Width of predicted confidence interval', example: 0.8 }),
    monthly_seasonality: z
      .any()
      .exactOptional()
      .openapi({
        description:
          'Should monthly seasonality be applied. An integer value will specify Fourier order of seasonality, `None` will automatically detect seasonality.',
        example: false,
      }),
    periods: z.int32().openapi({ example: 7 }),
    time_grain: z
      .enum([
        'PT1S',
        'PT5S',
        'PT30S',
        'PT1M',
        'PT5M',
        'PT10M',
        'PT15M',
        'PT0.5H',
        'PT1H',
        'PT6H',
        'P1D',
        'P1W',
        'P1M',
        'P0.25Y',
        'P1Y',
        '1969-12-28T00:00:00Z/P1W',
        '1969-12-29T00:00:00Z/P1W',
        'P1W/1970-01-03T00:00:00Z',
        'P1W/1970-01-04T00:00:00Z',
      ])
      .openapi({
        description:
          'Time grain used to specify time period increments in prediction. Supports [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601#Durations) durations.',
        example: 'P1D',
      }),
    weekly_seasonality: z
      .any()
      .exactOptional()
      .openapi({
        description:
          'Should weekly seasonality be applied. An integer value will specify Fourier order of seasonality, `None` will automatically detect seasonality.',
        example: false,
      }),
    yearly_seasonality: z
      .any()
      .exactOptional()
      .openapi({
        description:
          'Should yearly seasonality be applied. An integer value will specify Fourier order of seasonality, `None` will automatically detect seasonality.',
        example: false,
      }),
  })
  .openapi({ required: ['confidence_interval', 'periods', 'time_grain'] })
  .openapi('ChartDataProphetOptionsSchema')

const ChartDataQueryObjectSchema = z
  .object({
    annotation_layers: z
      .array(AnnotationLayerSchema)
      .nullable()
      .exactOptional()
      .openapi({ description: 'Annotation layers to apply to chart' }),
    applied_time_extras: z
      .object({})
      .nullable()
      .exactOptional()
      .openapi({
        description: 'A mapping of temporal extras that have been applied to the query',
        example: { __time_range: '1 year ago : now' },
      }),
    apply_fetch_values_predicate: z
      .boolean()
      .nullable()
      .exactOptional()
      .openapi({
        description: 'Add fetch values predicate (where clause) to query if defined in datasource',
      }),
    columns: z
      .array(z.string())
      .nullable()
      .exactOptional()
      .openapi({ description: 'Columns which to select in the query.' }),
    datasource: ChartDataDatasourceSchema.nullable().exactOptional(),
    druid_time_origin: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({
        description:
          'Starting point for time grain counting on legacy Druid datasources. Used to change e.g. Monday/Sunday first-day-of-week. This field is deprecated and should be passed to `extras` as `druid_time_origin`.',
      }),
    extras: ChartDataExtrasSchema.nullable()
      .exactOptional()
      .openapi({ description: 'Extra parameters to add to the query.' }),
    filters: z.array(ChartDataFilterSchema).nullable().exactOptional(),
    granularity: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({
        description:
          'Name of temporal column used for time filtering. For legacy Druid datasources this defines the time grain.',
      }),
    granularity_sqla: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({
        description:
          'Name of temporal column used for time filtering for SQL datasources. This field is deprecated, use `granularity` instead.',
      }),
    groupby: z
      .array(z.string().openapi({ description: 'Columns by which to group the query.' }))
      .nullable()
      .exactOptional(),
    having: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({
        description:
          'HAVING clause to be added to aggregate queries using AND operator. This field is deprecated and should be passed to `extras`.',
      }),
    having_filters: z
      .array(ChartDataFilterSchema)
      .nullable()
      .exactOptional()
      .openapi({
        description:
          'HAVING filters to be added to legacy Druid datasource queries. This field is deprecated and should be passed to `extras` as `having_druid`.',
      }),
    is_rowcount: z
      .boolean()
      .nullable()
      .exactOptional()
      .openapi({ description: 'Should the rowcount of the actual query be returned' }),
    is_timeseries: z
      .boolean()
      .nullable()
      .exactOptional()
      .openapi({ description: 'Is the `query_object` a timeseries.' }),
    metrics: z
      .array(z.any())
      .nullable()
      .exactOptional()
      .openapi({
        description:
          'Aggregate expressions. Metrics can be passed as both references to datasource metrics (strings), or ad-hoc metricswhich are defined only within the query object. See `ChartDataAdhocMetricSchema` for the structure of ad-hoc metrics.',
      }),
    order_desc: z
      .boolean()
      .nullable()
      .exactOptional()
      .openapi({ description: 'Reverse order. Default: `false`' }),
    orderby: z
      .array(z.any())
      .nullable()
      .exactOptional()
      .openapi({
        description:
          'Expects a list of lists where the first element is the column name which to sort by, and the second element is a boolean.',
        example: [
          ['my_col_1', false],
          ['my_col_2', true],
        ],
      }),
    post_processing: z
      .array(ChartDataPostProcessingOperationSchema.nullable())
      .nullable()
      .exactOptional()
      .openapi({
        description:
          'Post processing operations to be applied to the result set. Operations are applied to the result set in sequential order.',
      }),
    result_type: z.any().nullable().exactOptional(),
    row_limit: z
      .int32()
      .min(0)
      .nullable()
      .exactOptional()
      .openapi({ description: 'Maximum row count (0=disabled). Default: `config["ROW_LIMIT"]`' }),
    row_offset: z
      .int32()
      .min(0)
      .nullable()
      .exactOptional()
      .openapi({ description: 'Number of rows to skip. Default: `0`' }),
    time_offsets: z.array(z.string()).nullable().exactOptional(),
    time_range: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({
        description:
          'A time rage, either expressed as a colon separated string `since : until` or human readable freeform. Valid formats for `since` and `until` are: \n- ISO 8601\n- X days/years/hours/day/year/weeks\n- X days/years/hours/day/year/weeks ago\n- X days/years/hours/day/year/weeks from now\n\nAdditionally, the following freeform can be used:\n\n- Last day\n- Last week\n- Last month\n- Last quarter\n- Last year\n- No filter\n- Last X seconds/minutes/hours/days/weeks/months/years\n- Next X seconds/minutes/hours/days/weeks/months/years\n',
        example: 'Last week',
      }),
    time_shift: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({
        description:
          'A human-readable date/time string. Please refer to [parsdatetime](https://github.com/bear/parsedatetime) documentation for details on valid values.',
      }),
    timeseries_limit: z
      .int32()
      .nullable()
      .exactOptional()
      .openapi({ description: 'Maximum row count for timeseries queries. Default: `0`' }),
    timeseries_limit_metric: z
      .any()
      .nullable()
      .exactOptional()
      .openapi({ description: 'Metric used to limit timeseries queries by.' }),
    url_params: z
      .record(z.string(), z.string().openapi({ description: 'The value of the query parameter' }))
      .nullable()
      .exactOptional()
      .openapi({ description: 'Optional query parameters passed to a dashboard or Explore view' }),
    where: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({
        description:
          'WHERE clause to be added to queries using AND operator.This field is deprecated and should be passed to `extras`.',
      }),
  })
  .openapi({ required: [] })
  .openapi('ChartDataQueryObject')

const ChartDataQueryContextSchemaSchema = z
  .object({
    datasource: ChartDataDatasourceSchema.exactOptional(),
    force: z
      .boolean()
      .exactOptional()
      .openapi({
        description: 'Should the queries be forced to load from the source. Default: `false`',
      }),
    queries: z.array(ChartDataQueryObjectSchema).exactOptional(),
    result_format: z.any().exactOptional(),
    result_type: z.any().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ChartDataQueryContextSchema')

const ChartDataResponseResultSchema = z
  .object({
    annotation_data: z
      .array(z.record(z.string(), z.string()))
      .nullable()
      .exactOptional()
      .openapi({ description: 'All requested annotation data' }),
    applied_filters: z
      .array(z.object({}))
      .exactOptional()
      .openapi({ description: 'A list with applied filters' }),
    cache_key: z.string().nullable().openapi({ description: 'Unique cache key for query object' }),
    cache_timeout: z
      .int32()
      .nullable()
      .openapi({
        description:
          'Cache timeout in following order: custom timeout, datasource timeout, default config timeout.',
      }),
    cached_dttm: z.string().nullable().openapi({ description: 'Cache timestamp' }),
    data: z.array(z.object({})).exactOptional().openapi({ description: 'A list with results' }),
    error: z.string().nullable().exactOptional().openapi({ description: 'Error' }),
    is_cached: z.boolean().openapi({ description: 'Is the result cached' }),
    query: z.string().openapi({ description: 'The executed query statement' }),
    rejected_filters: z
      .array(z.object({}))
      .exactOptional()
      .openapi({ description: 'A list with rejected filters' }),
    rowcount: z.int32().exactOptional().openapi({ description: 'Amount of rows in result set' }),
    stacktrace: z.string().nullable().exactOptional(),
    status: z
      .enum(['stopped', 'failed', 'pending', 'running', 'scheduled', 'success', 'timed_out'])
      .exactOptional()
      .openapi({ description: 'Status of the query' }),
  })
  .openapi({ required: ['cache_key', 'cache_timeout', 'cached_dttm', 'is_cached', 'query'] })
  .openapi('ChartDataResponseResult')

const ChartDataResponseSchemaSchema = z
  .object({
    result: z
      .array(ChartDataResponseResultSchema)
      .exactOptional()
      .openapi({ description: 'A list of results for each corresponding query in the request.' }),
  })
  .openapi({ required: [] })
  .openapi('ChartDataResponseSchema')

const ChartDataRollingOptionsSchemaSchema = z
  .object({
    center: z
      .boolean()
      .exactOptional()
      .openapi({
        description: 'Should the label be at the center of the window. Default: `false`',
        example: false,
      }),
    min_periods: z
      .int32()
      .exactOptional()
      .openapi({
        description:
          'The minimum amount of periods required for a row to be included in the result set.',
        example: 7,
      }),
    rolling_type: z
      .enum([
        'average',
        'argmin',
        'argmax',
        'cumsum',
        'cumprod',
        'max',
        'mean',
        'median',
        'nansum',
        'nanmin',
        'nanmax',
        'nanmean',
        'nanmedian',
        'nanpercentile',
        'min',
        'percentile',
        'prod',
        'product',
        'std',
        'sum',
        'var',
      ])
      .openapi({
        description: 'Type of rolling window. Any numpy function will work.',
        example: 'percentile',
      }),
    rolling_type_options: z.object({}).exactOptional().openapi({ example: {} }),
    win_type: z
      .enum([
        'boxcar',
        'triang',
        'blackman',
        'hamming',
        'bartlett',
        'parzen',
        'bohman',
        'blackmanharris',
        'nuttall',
        'barthann',
        'kaiser',
        'gaussian',
        'general_gaussian',
        'slepian',
        'exponential',
      ])
      .exactOptional()
      .openapi({
        description:
          'Type of window function. See [SciPy window functions](https://docs.scipy.org/doc/scipy/reference/signal.windows.html#module-scipy.signal.windows) for more details. Some window functions require passing additional parameters to `rolling_type_options`. For instance, to use `gaussian`, the parameter `std` needs to be provided.',
      }),
    window: z.int32().openapi({ description: 'Size of the rolling window in days.', example: 7 }),
  })
  .openapi({ required: ['rolling_type', 'window'] })
  .openapi('ChartDataRollingOptionsSchema')

const ChartDataSelectOptionsSchemaSchema = z
  .object({
    columns: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description:
          'Columns which to select from the input data, in the desired order. If columns are renamed, the original column name should be referenced here.',
        example: ['country', 'gender', 'age'],
      }),
    exclude: z
      .array(z.string())
      .exactOptional()
      .openapi({ description: 'Columns to exclude from selection.', example: ['my_temp_column'] }),
    rename: z
      .array(z.object({}))
      .exactOptional()
      .openapi({
        description:
          "columns which to rename, mapping source column to target column. For instance, `{'y': 'y2'}` will rename the column `y` to `y2`.",
        example: [{ age: 'average_age' }],
      }),
  })
  .openapi({ required: [] })
  .openapi('ChartDataSelectOptionsSchema')

const ChartDataSortOptionsSchemaSchema = z
  .object({
    aggregates: z
      .object({})
      .exactOptional()
      .openapi({
        description:
          'The keys are the name of the aggregate column to be created, and the values specify the details of how to apply the aggregation. If an operator requires additional options, these can be passed here to be unpacked in the operator call. The following numpy operators are supported: average, argmin, argmax, cumsum, cumprod, max, mean, median, nansum, nanmin, nanmax, nanmean, nanmedian, min, percentile, prod, product, std, sum, var. Any options required by the operator can be passed to the `options` object.\n\nIn the example, a new column `first_quantile` is created based on values in the column `my_col` using the `percentile` operator with the `q=0.25` parameter.',
        example: {
          first_quantile: { column: 'my_col', operator: 'percentile', options: { q: 0.25 } },
        },
      }),
    columns: z
      .object({})
      .openapi({
        description:
          'columns by by which to sort. The key specifies the column name, value specifies if sorting in ascending order.',
        example: { country: true, gender: false },
      }),
  })
  .openapi({ required: ['columns'] })
  .openapi('ChartDataSortOptionsSchema')

const ChartEntityResponseSchemaSchema = z
  .object({
    cache_timeout: z
      .int32()
      .exactOptional()
      .openapi({
        description:
          'Duration (in seconds) of the caching timeout for this chart. Note this defaults to the datasource/table timeout if undefined.',
      }),
    changed_on: z
      .string()
      .exactOptional()
      .openapi({ description: 'The ISO date that the chart was last changed.' }),
    datasource: z.string().exactOptional().openapi({ description: 'The datasource name.' }),
    description: z
      .string()
      .exactOptional()
      .openapi({ description: 'A description of the chart propose.' }),
    description_markeddown: z
      .string()
      .exactOptional()
      .openapi({ description: 'Sanitized HTML version of the chart description.' }),
    form_data: z
      .object({})
      .exactOptional()
      .openapi({
        description: "Form data from the Explore controls used to form the chart's data query.",
      }),
    modified: z.string().exactOptional(),
    slice_id: z.int32().exactOptional(),
    slice_name: z.string().exactOptional().openapi({ description: 'The name of the chart.' }),
    slice_url: z.string().exactOptional().openapi({ description: 'The URL of the chart.' }),
  })
  .openapi({ required: [] })
  .openapi('ChartEntityResponseSchema')

const ChartFavStarResponseResultSchema = z
  .object({
    id: z.int32().exactOptional().openapi({ description: 'The Chart id' }),
    value: z.boolean().exactOptional().openapi({ description: 'The FaveStar value' }),
  })
  .openapi({ required: [] })
  .openapi('ChartFavStarResponseResult')

const ChartGetDatasourceObjectDataResponseSchema = z
  .object({
    datasource_id: z.int32().exactOptional().openapi({ description: 'The datasource identifier' }),
    datasource_type: z.int32().exactOptional().openapi({ description: 'The datasource type' }),
  })
  .openapi({ required: [] })
  .openapi('ChartGetDatasourceObjectDataResponse')

const ChartGetDatasourceObjectResponseSchema = z
  .object({
    label: z.string().exactOptional().openapi({ description: 'The name of the datasource' }),
    value: ChartGetDatasourceObjectDataResponseSchema.exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ChartGetDatasourceObjectResponse')

const ChartGetDatasourceResponseSchemaSchema = z
  .object({
    count: z.int32().exactOptional().openapi({ description: 'The total number of datasources' }),
    result: ChartGetDatasourceObjectResponseSchema.exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ChartGetDatasourceResponseSchema')

const Meta9Schema = z
  .object({
    dashboard_title: z.string().max(500).nullable().exactOptional(),
    id: z.int32().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('Meta9')

const Meta10Schema = z
  .object({
    first_name: z.string().max(64),
    id: z.int32().exactOptional(),
    last_name: z.string().max(64),
    username: z.string().max(64),
  })
  .openapi({ required: ['first_name', 'last_name', 'username'] })
  .openapi('Meta10')

const ChartRestApiGetSchema = z
  .object({
    cache_timeout: z.int32().nullable().exactOptional(),
    dashboards: Meta9Schema.exactOptional(),
    description: z.string().nullable().exactOptional(),
    owners: Meta10Schema.exactOptional(),
    params: z.string().nullable().exactOptional(),
    query_context: z.string().nullable().exactOptional(),
    slice_name: z.string().max(250).nullable().exactOptional(),
    viz_type: z.string().max(250).nullable().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ChartRestApiGet')

const Meta8Schema = z
  .object({ first_name: z.string().max(64), last_name: z.string().max(64) })
  .openapi({ required: ['first_name', 'last_name'] })
  .openapi('Meta8')

const Meta5Schema = z
  .object({
    first_name: z.string().max(64),
    id: z.int32().exactOptional(),
    last_name: z.string().max(64),
  })
  .openapi({ required: ['first_name', 'last_name'] })
  .openapi('Meta5')

const Meta7Schema = z
  .object({
    first_name: z.string().max(64),
    id: z.int32().exactOptional(),
    last_name: z.string().max(64),
    username: z.string().max(64),
  })
  .openapi({ required: ['first_name', 'last_name', 'username'] })
  .openapi('Meta7')

const Meta6Schema = z
  .object({
    default_endpoint: z.string().nullable().exactOptional(),
    table_name: z.string().max(250),
  })
  .openapi({ required: ['table_name'] })
  .openapi('Meta6')

const ChartRestApiGetListSchema = z
  .object({
    cache_timeout: z.int32().nullable().exactOptional(),
    changed_by: Meta8Schema.exactOptional(),
    changed_by_name: z.any().exactOptional().openapi({ readOnly: true }),
    changed_by_url: z.any().exactOptional().openapi({ readOnly: true }),
    changed_on_delta_humanized: z.any().exactOptional().openapi({ readOnly: true }),
    changed_on_utc: z.any().exactOptional().openapi({ readOnly: true }),
    created_by: Meta5Schema.exactOptional(),
    datasource_id: z.int32().nullable().exactOptional(),
    datasource_name_text: z.any().exactOptional().openapi({ readOnly: true }),
    datasource_type: z.string().max(200).nullable().exactOptional(),
    datasource_url: z.any().exactOptional().openapi({ readOnly: true }),
    description: z.string().nullable().exactOptional(),
    description_markeddown: z.any().exactOptional().openapi({ readOnly: true }),
    edit_url: z.any().exactOptional().openapi({ readOnly: true }),
    id: z.int32().exactOptional(),
    owners: Meta7Schema.exactOptional(),
    params: z.string().nullable().exactOptional(),
    slice_name: z.string().max(250).nullable().exactOptional(),
    table: Meta6Schema.exactOptional(),
    thumbnail_url: z.any().exactOptional().openapi({ readOnly: true }),
    url: z.any().exactOptional().openapi({ readOnly: true }),
    viz_type: z.string().max(250).nullable().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ChartRestApiGetList')

const ChartRestApiPostSchema = z
  .object({
    cache_timeout: z
      .int32()
      .nullable()
      .exactOptional()
      .openapi({
        description:
          'Duration (in seconds) of the caching timeout for this chart. Note this defaults to the datasource/table timeout if undefined.',
      }),
    dashboards: z
      .array(
        z.int32().openapi({ description: 'A list of dashboards to include this new chart to.' }),
      )
      .exactOptional(),
    datasource_id: z
      .int32()
      .openapi({
        description:
          'The id of the dataset/datasource this new chart will use. A complete datasource identification needs `datasouce_id` and `datasource_type`.',
      }),
    datasource_name: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({ description: 'The datasource name.' }),
    datasource_type: z
      .enum(['druid', 'table', 'view'])
      .openapi({ description: 'The type of dataset/datasource identified on `datasource_id`.' }),
    description: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({ description: 'A description of the chart propose.' }),
    owners: z
      .array(
        z
          .int32()
          .openapi({
            description:
              'Owner are users ids allowed to delete or change this chart. If left empty you will be one of the owners of the chart.',
          }),
      )
      .exactOptional(),
    params: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({
        description:
          'Parameters are generated dynamically when clicking the save or overwrite button in the explore view. This JSON object for power users who may want to alter specific parameters.',
      }),
    query_context: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({
        description:
          'The query context represents the queries that need to run in order to generate the data the visualization, and in what format the data should be returned.',
      }),
    slice_name: z.string().min(1).max(250).openapi({ description: 'The name of the chart.' }),
    viz_type: z
      .string()
      .min(0)
      .max(250)
      .exactOptional()
      .openapi({
        description: 'The type of chart visualization used.',
        example: ['bar', 'line_multi', 'area', 'table'],
      }),
  })
  .openapi({ required: ['datasource_id', 'datasource_type', 'slice_name'] })
  .openapi('ChartRestApiPost')

const ChartRestApiPutSchema = z
  .object({
    cache_timeout: z
      .int32()
      .nullable()
      .exactOptional()
      .openapi({
        description:
          'Duration (in seconds) of the caching timeout for this chart. Note this defaults to the datasource/table timeout if undefined.',
      }),
    dashboards: z
      .array(
        z.int32().openapi({ description: 'A list of dashboards to include this new chart to.' }),
      )
      .exactOptional(),
    datasource_id: z
      .int32()
      .nullable()
      .exactOptional()
      .openapi({
        description:
          'The id of the dataset/datasource this new chart will use. A complete datasource identification needs `datasouce_id` and `datasource_type`.',
      }),
    datasource_type: z
      .enum(['druid', 'table', 'view'])
      .nullable()
      .exactOptional()
      .openapi({ description: 'The type of dataset/datasource identified on `datasource_id`.' }),
    description: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({ description: 'A description of the chart propose.' }),
    owners: z
      .array(
        z
          .int32()
          .openapi({
            description:
              'Owner are users ids allowed to delete or change this chart. If left empty you will be one of the owners of the chart.',
          }),
      )
      .exactOptional(),
    params: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({
        description:
          'Parameters are generated dynamically when clicking the save or overwrite button in the explore view. This JSON object for power users who may want to alter specific parameters.',
      }),
    query_context: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({
        description:
          'The query context represents the queries that need to run in order to generate the data the visualization, and in what format the data should be returned.',
      }),
    slice_name: z
      .string()
      .min(0)
      .max(250)
      .nullable()
      .exactOptional()
      .openapi({ description: 'The name of the chart.' }),
    viz_type: z
      .string()
      .min(0)
      .max(250)
      .nullable()
      .exactOptional()
      .openapi({
        description: 'The type of chart visualization used.',
        example: ['bar', 'line_multi', 'area', 'table'],
      }),
  })
  .openapi({ required: [] })
  .openapi('ChartRestApiPut')

const Meta13Schema = z
  .object({
    first_name: z.string().max(64),
    id: z.int32().exactOptional(),
    last_name: z.string().max(64),
  })
  .openapi({ required: ['first_name', 'last_name'] })
  .openapi('Meta13')

const CssTemplateRestApiGetSchema = z
  .object({
    created_by: Meta13Schema.exactOptional(),
    css: z.string().nullable().exactOptional(),
    id: z.int32().exactOptional(),
    template_name: z.string().max(250).nullable().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('CssTemplateRestApiGet')

const Meta12Schema = z
  .object({
    active: z.boolean().nullable().exactOptional(),
    changed_on: z.iso.datetime({ offset: true }).nullable().exactOptional(),
    created_on: z.iso.datetime({ offset: true }).nullable().exactOptional(),
    email: z.string().max(64),
    fail_login_count: z.int32().nullable().exactOptional(),
    first_name: z.string().max(64),
    id: z.int32().exactOptional(),
    last_login: z.iso.datetime({ offset: true }).nullable().exactOptional(),
    last_name: z.string().max(64),
    login_count: z.int32().nullable().exactOptional(),
    password: z.string().max(256).nullable().exactOptional(),
    username: z.string().max(64),
  })
  .openapi({ required: ['email', 'first_name', 'last_name', 'username'] })
  .openapi('Meta12')

const Meta11Schema = z
  .object({
    first_name: z.string().max(64),
    id: z.int32().exactOptional(),
    last_name: z.string().max(64),
  })
  .openapi({ required: ['first_name', 'last_name'] })
  .openapi('Meta11')

const CssTemplateRestApiGetListSchema = z
  .object({
    changed_by: Meta12Schema.exactOptional(),
    changed_on_delta_humanized: z.any().exactOptional().openapi({ readOnly: true }),
    created_by: Meta11Schema.exactOptional(),
    created_on: z.iso.datetime({ offset: true }).nullable().exactOptional(),
    css: z.string().nullable().exactOptional(),
    id: z.int32().exactOptional(),
    template_name: z.string().max(250).nullable().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('CssTemplateRestApiGetList')

const CssTemplateRestApiPostSchema = z
  .object({
    css: z.string().nullable().exactOptional(),
    template_name: z.string().max(250).nullable().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('CssTemplateRestApiPost')

const CssTemplateRestApiPutSchema = z
  .object({
    css: z.string().nullable().exactOptional(),
    template_name: z.string().max(250).nullable().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('CssTemplateRestApiPut')

const DatabaseSchema = z
  .object({
    allow_multi_schema_metadata_fetch: z.boolean().exactOptional(),
    allows_cost_estimate: z.boolean().exactOptional(),
    allows_subquery: z.boolean().exactOptional(),
    allows_virtual_table_explore: z.boolean().exactOptional(),
    backend: z.string().exactOptional(),
    explore_database_id: z.int32().exactOptional(),
    id: z.int32().exactOptional(),
    name: z.string().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('Database')

const DashboardDatasetSchemaSchema = z
  .object({
    cache_timeout: z.int32().exactOptional(),
    column_formats: z.object({}).exactOptional(),
    column_types: z.array(z.int32()).exactOptional(),
    columns: z.array(z.object({})).exactOptional(),
    database: DatabaseSchema.exactOptional(),
    datasource_name: z.string().exactOptional(),
    default_endpoint: z.string().exactOptional(),
    edit_url: z.string().exactOptional(),
    fetch_values_predicate: z.string().exactOptional(),
    filter_select: z.boolean().exactOptional(),
    filter_select_enabled: z.boolean().exactOptional(),
    granularity_sqla: z.array(z.array(z.string())).exactOptional(),
    health_check_message: z.string().exactOptional(),
    id: z.int32().exactOptional(),
    is_sqllab_view: z.boolean().exactOptional(),
    main_dttm_col: z.string().exactOptional(),
    metrics: z.array(z.object({})).exactOptional(),
    name: z.string().exactOptional(),
    offset: z.int32().exactOptional(),
    order_by_choices: z.array(z.array(z.string())).exactOptional(),
    owners: z.array(z.int32()).exactOptional(),
    params: z.string().exactOptional(),
    perm: z.string().exactOptional(),
    schema: z.string().exactOptional(),
    select_star: z.string().exactOptional(),
    sql: z.string().exactOptional(),
    table_name: z.string().exactOptional(),
    template_params: z.string().exactOptional(),
    time_grain_sqla: z.array(z.array(z.string())).exactOptional(),
    type: z.string().exactOptional(),
    uid: z.string().exactOptional(),
    verbose_map: z.record(z.string(), z.string()).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('DashboardDatasetSchema')

const UserSchema = z
  .object({
    first_name: z.string().exactOptional(),
    id: z.int32().exactOptional(),
    last_name: z.string().exactOptional(),
    username: z.string().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('User')

const RolesSchema = z
  .object({ id: z.int32().exactOptional(), name: z.string().exactOptional() })
  .openapi({ required: [] })
  .openapi('Roles')

const DashboardGetResponseSchemaSchema = z
  .object({
    changed_by: UserSchema.exactOptional(),
    changed_by_name: z.string().exactOptional(),
    changed_by_url: z.string().exactOptional(),
    changed_on: z.iso.datetime({ offset: true }).exactOptional(),
    changed_on_delta_humanized: z.string().exactOptional(),
    charts: z
      .array(
        z
          .string()
          .openapi({
            description: "The names of the dashboard's charts. Names are used for legacy reasons.",
          }),
      )
      .exactOptional(),
    css: z.string().exactOptional().openapi({ description: 'Override CSS for the dashboard.' }),
    dashboard_title: z
      .string()
      .exactOptional()
      .openapi({ description: 'A title for the dashboard.' }),
    id: z.int32().exactOptional(),
    json_metadata: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'This JSON object is generated dynamically when clicking the save or overwrite button in the dashboard view. It is exposed here for reference and for power users who may want to alter  specific parameters.',
      }),
    owners: z.array(UserSchema).exactOptional(),
    position_json: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'This json object describes the positioning of the widgets in the dashboard. It is dynamically generated when adjusting the widgets size and positions by using drag & drop in the dashboard view',
      }),
    published: z.boolean().exactOptional(),
    roles: z.array(RolesSchema).exactOptional(),
    slug: z.string().exactOptional(),
    table_names: z.string().exactOptional(),
    thumbnail_url: z.string().exactOptional(),
    url: z.string().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('DashboardGetResponseSchema')

const DashboardRestApiGetSchema = z
  .object({ id: z.int32().exactOptional() })
  .openapi({ required: [] })
  .openapi('DashboardRestApiGet')

const Meta15Schema = z
  .object({
    first_name: z.string().max(64),
    id: z.int32().exactOptional(),
    last_name: z.string().max(64),
    username: z.string().max(64),
  })
  .openapi({ required: ['first_name', 'last_name', 'username'] })
  .openapi('Meta15')

const Meta14Schema = z
  .object({
    first_name: z.string().max(64),
    id: z.int32().exactOptional(),
    last_name: z.string().max(64),
  })
  .openapi({ required: ['first_name', 'last_name'] })
  .openapi('Meta14')

const Meta17Schema = z
  .object({
    first_name: z.string().max(64),
    id: z.int32().exactOptional(),
    last_name: z.string().max(64),
    username: z.string().max(64),
  })
  .openapi({ required: ['first_name', 'last_name', 'username'] })
  .openapi('Meta17')

const Meta16Schema = z
  .object({ id: z.int32().exactOptional(), name: z.string().max(64) })
  .openapi({ required: ['name'] })
  .openapi('Meta16')

const DashboardRestApiGetListSchema = z
  .object({
    changed_by: Meta15Schema.exactOptional(),
    changed_by_name: z.any().exactOptional().openapi({ readOnly: true }),
    changed_by_url: z.any().exactOptional().openapi({ readOnly: true }),
    changed_on_delta_humanized: z.any().exactOptional().openapi({ readOnly: true }),
    changed_on_utc: z.any().exactOptional().openapi({ readOnly: true }),
    created_by: Meta14Schema.exactOptional(),
    css: z.string().nullable().exactOptional(),
    dashboard_title: z.string().max(500).nullable().exactOptional(),
    id: z.int32().exactOptional(),
    json_metadata: z.string().nullable().exactOptional(),
    owners: Meta17Schema.exactOptional(),
    position_json: z.string().nullable().exactOptional(),
    published: z.boolean().nullable().exactOptional(),
    roles: Meta16Schema.exactOptional(),
    slug: z.string().max(255).nullable().exactOptional(),
    status: z.any().exactOptional().openapi({ readOnly: true }),
    thumbnail_url: z.any().exactOptional().openapi({ readOnly: true }),
    url: z.any().exactOptional().openapi({ readOnly: true }),
  })
  .openapi({ required: [] })
  .openapi('DashboardRestApiGetList')

const DashboardRestApiPostSchema = z
  .object({
    css: z.string().exactOptional(),
    dashboard_title: z
      .string()
      .min(0)
      .max(500)
      .nullable()
      .exactOptional()
      .openapi({ description: 'A title for the dashboard.' }),
    json_metadata: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'This JSON object is generated dynamically when clicking the save or overwrite button in the dashboard view. It is exposed here for reference and for power users who may want to alter  specific parameters.',
      }),
    owners: z
      .array(
        z
          .int32()
          .openapi({
            description:
              'Owner are users ids allowed to delete or change this dashboard. If left empty you will be one of the owners of the dashboard.',
          }),
      )
      .exactOptional(),
    position_json: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'This json object describes the positioning of the widgets in the dashboard. It is dynamically generated when adjusting the widgets size and positions by using drag & drop in the dashboard view',
      }),
    published: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Determines whether or not this dashboard is visible in the list of all dashboards.',
      }),
    roles: z
      .array(
        z
          .int32()
          .openapi({
            description:
              'Roles is a list which defines access to the dashboard. These roles are always applied in addition to restrictions on dataset level access. If no roles defined then the dashboard is available to all roles.',
          }),
      )
      .exactOptional(),
    slug: z
      .string()
      .min(1)
      .max(255)
      .nullable()
      .exactOptional()
      .openapi({ description: 'Unique identifying part for the web address of the dashboard.' }),
  })
  .openapi({ required: [] })
  .openapi('DashboardRestApiPost')

const DashboardRestApiPutSchema = z
  .object({
    css: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({ description: 'Override CSS for the dashboard.' }),
    dashboard_title: z
      .string()
      .min(0)
      .max(500)
      .nullable()
      .exactOptional()
      .openapi({ description: 'A title for the dashboard.' }),
    json_metadata: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({
        description:
          'This JSON object is generated dynamically when clicking the save or overwrite button in the dashboard view. It is exposed here for reference and for power users who may want to alter  specific parameters.',
      }),
    owners: z
      .array(
        z
          .int32()
          .nullable()
          .openapi({
            description:
              'Owner are users ids allowed to delete or change this dashboard. If left empty you will be one of the owners of the dashboard.',
          }),
      )
      .exactOptional(),
    position_json: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({
        description:
          'This json object describes the positioning of the widgets in the dashboard. It is dynamically generated when adjusting the widgets size and positions by using drag & drop in the dashboard view',
      }),
    published: z
      .boolean()
      .nullable()
      .exactOptional()
      .openapi({
        description:
          'Determines whether or not this dashboard is visible in the list of all dashboards.',
      }),
    roles: z
      .array(
        z
          .int32()
          .nullable()
          .openapi({
            description:
              'Roles is a list which defines access to the dashboard. These roles are always applied in addition to restrictions on dataset level access. If no roles defined then the dashboard is available to all roles.',
          }),
      )
      .exactOptional(),
    slug: z
      .string()
      .min(0)
      .max(255)
      .nullable()
      .exactOptional()
      .openapi({ description: 'Unique identifying part for the web address of the dashboard.' }),
  })
  .openapi({ required: [] })
  .openapi('DashboardRestApiPut')

const DatabaseFunctionNamesResponseSchema = z
  .object({ function_names: z.array(z.string()).exactOptional() })
  .openapi({ required: [] })
  .openapi('DatabaseFunctionNamesResponse')

const DatabaseRelatedChartSchema = z
  .object({
    id: z.int32().exactOptional(),
    slice_name: z.string().exactOptional(),
    viz_type: z.string().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('DatabaseRelatedChart')

const DatabaseRelatedChartsSchema = z
  .object({
    count: z.int32().exactOptional().openapi({ description: 'Chart count' }),
    result: z
      .array(DatabaseRelatedChartSchema)
      .exactOptional()
      .openapi({ description: 'A list of dashboards' }),
  })
  .openapi({ required: [] })
  .openapi('DatabaseRelatedCharts')

const DatabaseRelatedDashboardSchema = z
  .object({
    id: z.int32().exactOptional(),
    json_metadata: z.object({}).exactOptional(),
    slug: z.string().exactOptional(),
    title: z.string().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('DatabaseRelatedDashboard')

const DatabaseRelatedDashboardsSchema = z
  .object({
    count: z.int32().exactOptional().openapi({ description: 'Dashboard count' }),
    result: z
      .array(DatabaseRelatedDashboardSchema)
      .exactOptional()
      .openapi({ description: 'A list of dashboards' }),
  })
  .openapi({ required: [] })
  .openapi('DatabaseRelatedDashboards')

const DatabaseRelatedObjectsResponseSchema = z
  .object({
    charts: DatabaseRelatedChartsSchema.exactOptional(),
    dashboards: DatabaseRelatedDashboardsSchema.exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('DatabaseRelatedObjectsResponse')

const DatabaseRestApiGetSchema = z
  .object({
    allow_csv_upload: z.boolean().nullable().exactOptional(),
    allow_ctas: z.boolean().nullable().exactOptional(),
    allow_cvas: z.boolean().nullable().exactOptional(),
    allow_dml: z.boolean().nullable().exactOptional(),
    allow_multi_schema_metadata_fetch: z.boolean().nullable().exactOptional(),
    allow_run_async: z.boolean().nullable().exactOptional(),
    backend: z.any().exactOptional().openapi({ readOnly: true }),
    cache_timeout: z.int32().nullable().exactOptional(),
    configuration_method: z.string().max(255).nullable().exactOptional(),
    database_name: z.string().max(250),
    encrypted_extra: z.string().nullable().exactOptional(),
    expose_in_sqllab: z.boolean().nullable().exactOptional(),
    extra: z.string().nullable().exactOptional(),
    force_ctas_schema: z.string().max(250).nullable().exactOptional(),
    id: z.int32().exactOptional(),
    impersonate_user: z.boolean().nullable().exactOptional(),
    parameters: z.any().exactOptional().openapi({ readOnly: true }),
    server_cert: z.string().nullable().exactOptional(),
    sqlalchemy_uri: z.string().max(1024),
  })
  .openapi({ required: ['database_name', 'sqlalchemy_uri'] })
  .openapi('DatabaseRestApiGet')

const Meta18Schema = z
  .object({ first_name: z.string().max(64), last_name: z.string().max(64) })
  .openapi({ required: ['first_name', 'last_name'] })
  .openapi('Meta18')

const DatabaseRestApiGetListSchema = z
  .object({
    allow_csv_upload: z.boolean().nullable().exactOptional(),
    allow_ctas: z.boolean().nullable().exactOptional(),
    allow_cvas: z.boolean().nullable().exactOptional(),
    allow_dml: z.boolean().nullable().exactOptional(),
    allow_multi_schema_metadata_fetch: z.boolean().nullable().exactOptional(),
    allow_run_async: z.boolean().nullable().exactOptional(),
    allows_cost_estimate: z.any().exactOptional().openapi({ readOnly: true }),
    allows_subquery: z.any().exactOptional().openapi({ readOnly: true }),
    allows_virtual_table_explore: z.any().exactOptional().openapi({ readOnly: true }),
    backend: z.any().exactOptional().openapi({ readOnly: true }),
    changed_on: z.iso.datetime({ offset: true }).nullable().exactOptional(),
    changed_on_delta_humanized: z.any().exactOptional().openapi({ readOnly: true }),
    created_by: Meta18Schema.exactOptional(),
    database_name: z.string().max(250),
    explore_database_id: z.any().exactOptional().openapi({ readOnly: true }),
    expose_in_sqllab: z.boolean().nullable().exactOptional(),
    extra: z.string().nullable().exactOptional(),
    force_ctas_schema: z.string().max(250).nullable().exactOptional(),
    id: z.int32().exactOptional(),
  })
  .openapi({ required: ['database_name'] })
  .openapi('DatabaseRestApiGetList')

const DatabaseRestApiPostSchema = z
  .object({
    allow_csv_upload: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Allow to upload CSV file data into this databaseIf selected, please set the schemas allowed for csv upload in Extra.',
      }),
    allow_ctas: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Allow CREATE TABLE AS option in SQL Lab' }),
    allow_cvas: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Allow CREATE VIEW AS option in SQL Lab' }),
    allow_dml: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Allow users to run non-SELECT statements (UPDATE, DELETE, CREATE, ...) in SQL Lab',
      }),
    allow_multi_schema_metadata_fetch: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Allow SQL Lab to fetch a list of all tables and all views across all database schemas. For large data warehouse with thousands of tables, this can be expensive and put strain on the system.',
      }),
    allow_run_async: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Operate the database in asynchronous mode, meaning  that the queries are executed on remote workers as opposed to on the web server itself. This assumes that you have a Celery worker setup as well as a results backend. Refer to the installation docs for more information.',
      }),
    cache_timeout: z
      .int32()
      .nullable()
      .exactOptional()
      .openapi({
        description:
          'Duration (in seconds) of the caching timeout for charts of this database. A timeout of 0 indicates that the cache never expires. Note this defaults to the global timeout if undefined.',
      }),
    configuration_method: z
      .any()
      .default('sqlalchemy_form')
      .exactOptional()
      .openapi({
        description:
          'Configuration_method is used on the frontend to inform the backend whether to explode parameters or to provide only a sqlalchemy_uri.',
      }),
    database_name: z
      .string()
      .min(1)
      .max(250)
      .openapi({ description: 'A database name to identify this connection.' }),
    encrypted_extra: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({
        description:
          '<p>JSON string containing additional connection configuration.<br>This is used to provide connection information for systems like Hive, Presto, and BigQuery, which do not conform to the username:password syntax normally used by SQLAlchemy.</p>',
      }),
    engine: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({ description: 'SQLAlchemy engine to use' }),
    expose_in_sqllab: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Expose this database to SQLLab' }),
    extra: z
      .string()
      .exactOptional()
      .openapi({
        description:
          '<p>JSON string containing extra configuration elements.<br>1. The <code>engine_params</code> object gets unpacked into the <a href="https://docs.sqlalchemy.org/en/latest/core/engines.html#sqlalchemy.create_engine">sqlalchemy.create_engine</a> call, while the <code>metadata_params</code> gets unpacked into the <a href="https://docs.sqlalchemy.org/en/rel_1_0/core/metadata.html#sqlalchemy.schema.MetaData">sqlalchemy.MetaData</a> call.<br>2. The <code>metadata_cache_timeout</code> is a cache timeout setting in seconds for metadata fetch of this database. Specify it as <strong>"metadata_cache_timeout": {"schema_cache_timeout": 600, "table_cache_timeout": 600}</strong>. If unset, cache will not be enabled for the functionality. A timeout of 0 indicates that the cache never expires.<br>3. The <code>schemas_allowed_for_csv_upload</code> is a comma separated list of schemas that CSVs are allowed to upload to. Specify it as <strong>"schemas_allowed_for_csv_upload": ["public", "csv_upload"]</strong>. If database flavor does not support schema or any schema is allowed to be accessed, just leave the list empty<br>4. the <code>version</code> field is a string specifying the this db\'s version. This should be used with Presto DBs so that the syntax is correct<br>5. The <code>allows_virtual_table_explore</code> field is a boolean specifying whether or not the Explore button in SQL Lab results is shown.</p>',
      }),
    force_ctas_schema: z
      .string()
      .min(0)
      .max(250)
      .nullable()
      .exactOptional()
      .openapi({
        description:
          'When allowing CREATE TABLE AS option in SQL Lab, this option forces the table to be created in this schema',
      }),
    impersonate_user: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'If Presto, all the queries in SQL Lab are going to be executed as the currently logged on user who must have permission to run them.<br/>If Hive and hive.server2.enable.doAs is enabled, will run the queries as service account, but impersonate the currently logged on user via hive.server2.proxy.user property.',
      }),
    parameters: z
      .record(z.string(), z.any())
      .exactOptional()
      .openapi({ description: 'DB-specific parameters for configuration' }),
    server_cert: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({
        description:
          '<p>Optional CA_BUNDLE contents to validate HTTPS requests. Only available on certain database engines.</p>',
      }),
    sqlalchemy_uri: z
      .string()
      .min(1)
      .max(1024)
      .exactOptional()
      .openapi({
        description:
          '<p>Refer to the <a href="https://docs.sqlalchemy.org/en/rel_1_2/core/engines.html#database-urls">SqlAlchemy docs</a> for more information on how to structure your URI.</p>',
      }),
  })
  .openapi({ required: ['database_name'] })
  .openapi('DatabaseRestApiPost')

const DatabaseRestApiPutSchema = z
  .object({
    allow_csv_upload: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Allow to upload CSV file data into this databaseIf selected, please set the schemas allowed for csv upload in Extra.',
      }),
    allow_ctas: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Allow CREATE TABLE AS option in SQL Lab' }),
    allow_cvas: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Allow CREATE VIEW AS option in SQL Lab' }),
    allow_dml: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Allow users to run non-SELECT statements (UPDATE, DELETE, CREATE, ...) in SQL Lab',
      }),
    allow_multi_schema_metadata_fetch: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Allow SQL Lab to fetch a list of all tables and all views across all database schemas. For large data warehouse with thousands of tables, this can be expensive and put strain on the system.',
      }),
    allow_run_async: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Operate the database in asynchronous mode, meaning  that the queries are executed on remote workers as opposed to on the web server itself. This assumes that you have a Celery worker setup as well as a results backend. Refer to the installation docs for more information.',
      }),
    cache_timeout: z
      .int32()
      .nullable()
      .exactOptional()
      .openapi({
        description:
          'Duration (in seconds) of the caching timeout for charts of this database. A timeout of 0 indicates that the cache never expires. Note this defaults to the global timeout if undefined.',
      }),
    configuration_method: z
      .any()
      .default('sqlalchemy_form')
      .exactOptional()
      .openapi({
        description:
          'Configuration_method is used on the frontend to inform the backend whether to explode parameters or to provide only a sqlalchemy_uri.',
      }),
    database_name: z
      .string()
      .min(1)
      .max(250)
      .nullable()
      .exactOptional()
      .openapi({ description: 'A database name to identify this connection.' }),
    encrypted_extra: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({
        description:
          '<p>JSON string containing additional connection configuration.<br>This is used to provide connection information for systems like Hive, Presto, and BigQuery, which do not conform to the username:password syntax normally used by SQLAlchemy.</p>',
      }),
    engine: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({ description: 'SQLAlchemy engine to use' }),
    expose_in_sqllab: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Expose this database to SQLLab' }),
    extra: z
      .string()
      .exactOptional()
      .openapi({
        description:
          '<p>JSON string containing extra configuration elements.<br>1. The <code>engine_params</code> object gets unpacked into the <a href="https://docs.sqlalchemy.org/en/latest/core/engines.html#sqlalchemy.create_engine">sqlalchemy.create_engine</a> call, while the <code>metadata_params</code> gets unpacked into the <a href="https://docs.sqlalchemy.org/en/rel_1_0/core/metadata.html#sqlalchemy.schema.MetaData">sqlalchemy.MetaData</a> call.<br>2. The <code>metadata_cache_timeout</code> is a cache timeout setting in seconds for metadata fetch of this database. Specify it as <strong>"metadata_cache_timeout": {"schema_cache_timeout": 600, "table_cache_timeout": 600}</strong>. If unset, cache will not be enabled for the functionality. A timeout of 0 indicates that the cache never expires.<br>3. The <code>schemas_allowed_for_csv_upload</code> is a comma separated list of schemas that CSVs are allowed to upload to. Specify it as <strong>"schemas_allowed_for_csv_upload": ["public", "csv_upload"]</strong>. If database flavor does not support schema or any schema is allowed to be accessed, just leave the list empty<br>4. the <code>version</code> field is a string specifying the this db\'s version. This should be used with Presto DBs so that the syntax is correct<br>5. The <code>allows_virtual_table_explore</code> field is a boolean specifying whether or not the Explore button in SQL Lab results is shown.</p>',
      }),
    force_ctas_schema: z
      .string()
      .min(0)
      .max(250)
      .nullable()
      .exactOptional()
      .openapi({
        description:
          'When allowing CREATE TABLE AS option in SQL Lab, this option forces the table to be created in this schema',
      }),
    impersonate_user: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'If Presto, all the queries in SQL Lab are going to be executed as the currently logged on user who must have permission to run them.<br/>If Hive and hive.server2.enable.doAs is enabled, will run the queries as service account, but impersonate the currently logged on user via hive.server2.proxy.user property.',
      }),
    parameters: z
      .record(z.string(), z.any())
      .exactOptional()
      .openapi({ description: 'DB-specific parameters for configuration' }),
    server_cert: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({
        description:
          '<p>Optional CA_BUNDLE contents to validate HTTPS requests. Only available on certain database engines.</p>',
      }),
    sqlalchemy_uri: z
      .string()
      .min(0)
      .max(1024)
      .exactOptional()
      .openapi({
        description:
          '<p>Refer to the <a href="https://docs.sqlalchemy.org/en/rel_1_2/core/engines.html#database-urls">SqlAlchemy docs</a> for more information on how to structure your URI.</p>',
      }),
  })
  .openapi({ required: [] })
  .openapi('DatabaseRestApiPut')

const DatabaseTestConnectionSchemaSchema = z
  .object({
    configuration_method: z
      .any()
      .default('sqlalchemy_form')
      .exactOptional()
      .openapi({
        description:
          'Configuration_method is used on the frontend to inform the backend whether to explode parameters or to provide only a sqlalchemy_uri.',
      }),
    database_name: z
      .string()
      .min(1)
      .max(250)
      .nullable()
      .exactOptional()
      .openapi({ description: 'A database name to identify this connection.' }),
    encrypted_extra: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({
        description:
          '<p>JSON string containing additional connection configuration.<br>This is used to provide connection information for systems like Hive, Presto, and BigQuery, which do not conform to the username:password syntax normally used by SQLAlchemy.</p>',
      }),
    engine: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({ description: 'SQLAlchemy engine to use' }),
    extra: z
      .string()
      .exactOptional()
      .openapi({
        description:
          '<p>JSON string containing extra configuration elements.<br>1. The <code>engine_params</code> object gets unpacked into the <a href="https://docs.sqlalchemy.org/en/latest/core/engines.html#sqlalchemy.create_engine">sqlalchemy.create_engine</a> call, while the <code>metadata_params</code> gets unpacked into the <a href="https://docs.sqlalchemy.org/en/rel_1_0/core/metadata.html#sqlalchemy.schema.MetaData">sqlalchemy.MetaData</a> call.<br>2. The <code>metadata_cache_timeout</code> is a cache timeout setting in seconds for metadata fetch of this database. Specify it as <strong>"metadata_cache_timeout": {"schema_cache_timeout": 600, "table_cache_timeout": 600}</strong>. If unset, cache will not be enabled for the functionality. A timeout of 0 indicates that the cache never expires.<br>3. The <code>schemas_allowed_for_csv_upload</code> is a comma separated list of schemas that CSVs are allowed to upload to. Specify it as <strong>"schemas_allowed_for_csv_upload": ["public", "csv_upload"]</strong>. If database flavor does not support schema or any schema is allowed to be accessed, just leave the list empty<br>4. the <code>version</code> field is a string specifying the this db\'s version. This should be used with Presto DBs so that the syntax is correct<br>5. The <code>allows_virtual_table_explore</code> field is a boolean specifying whether or not the Explore button in SQL Lab results is shown.</p>',
      }),
    impersonate_user: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'If Presto, all the queries in SQL Lab are going to be executed as the currently logged on user who must have permission to run them.<br/>If Hive and hive.server2.enable.doAs is enabled, will run the queries as service account, but impersonate the currently logged on user via hive.server2.proxy.user property.',
      }),
    parameters: z
      .record(z.string(), z.any())
      .exactOptional()
      .openapi({ description: 'DB-specific parameters for configuration' }),
    server_cert: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({
        description:
          '<p>Optional CA_BUNDLE contents to validate HTTPS requests. Only available on certain database engines.</p>',
      }),
    sqlalchemy_uri: z
      .string()
      .min(1)
      .max(1024)
      .exactOptional()
      .openapi({
        description:
          '<p>Refer to the <a href="https://docs.sqlalchemy.org/en/rel_1_2/core/engines.html#database-urls">SqlAlchemy docs</a> for more information on how to structure your URI.</p>',
      }),
  })
  .openapi({ required: [] })
  .openapi('DatabaseTestConnectionSchema')

const DatabaseValidateParametersSchemaSchema = z
  .object({
    configuration_method: z
      .any()
      .openapi({
        description:
          'Configuration_method is used on the frontend to inform the backend whether to explode parameters or to provide only a sqlalchemy_uri.',
      }),
    database_name: z
      .string()
      .min(1)
      .max(250)
      .nullable()
      .exactOptional()
      .openapi({ description: 'A database name to identify this connection.' }),
    encrypted_extra: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({
        description:
          '<p>JSON string containing additional connection configuration.<br>This is used to provide connection information for systems like Hive, Presto, and BigQuery, which do not conform to the username:password syntax normally used by SQLAlchemy.</p>',
      }),
    engine: z.string().openapi({ description: 'SQLAlchemy engine to use' }),
    extra: z
      .string()
      .exactOptional()
      .openapi({
        description:
          '<p>JSON string containing extra configuration elements.<br>1. The <code>engine_params</code> object gets unpacked into the <a href="https://docs.sqlalchemy.org/en/latest/core/engines.html#sqlalchemy.create_engine">sqlalchemy.create_engine</a> call, while the <code>metadata_params</code> gets unpacked into the <a href="https://docs.sqlalchemy.org/en/rel_1_0/core/metadata.html#sqlalchemy.schema.MetaData">sqlalchemy.MetaData</a> call.<br>2. The <code>metadata_cache_timeout</code> is a cache timeout setting in seconds for metadata fetch of this database. Specify it as <strong>"metadata_cache_timeout": {"schema_cache_timeout": 600, "table_cache_timeout": 600}</strong>. If unset, cache will not be enabled for the functionality. A timeout of 0 indicates that the cache never expires.<br>3. The <code>schemas_allowed_for_csv_upload</code> is a comma separated list of schemas that CSVs are allowed to upload to. Specify it as <strong>"schemas_allowed_for_csv_upload": ["public", "csv_upload"]</strong>. If database flavor does not support schema or any schema is allowed to be accessed, just leave the list empty<br>4. the <code>version</code> field is a string specifying the this db\'s version. This should be used with Presto DBs so that the syntax is correct<br>5. The <code>allows_virtual_table_explore</code> field is a boolean specifying whether or not the Explore button in SQL Lab results is shown.</p>',
      }),
    impersonate_user: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'If Presto, all the queries in SQL Lab are going to be executed as the currently logged on user who must have permission to run them.<br/>If Hive and hive.server2.enable.doAs is enabled, will run the queries as service account, but impersonate the currently logged on user via hive.server2.proxy.user property.',
      }),
    parameters: z
      .record(z.string(), z.any().nullable())
      .exactOptional()
      .openapi({ description: 'DB-specific parameters for configuration' }),
    server_cert: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({
        description:
          '<p>Optional CA_BUNDLE contents to validate HTTPS requests. Only available on certain database engines.</p>',
      }),
  })
  .openapi({ required: ['configuration_method', 'engine'] })
  .openapi('DatabaseValidateParametersSchema')

const DatasetColumnsPutSchema = z
  .object({
    column_name: z.string().min(1).max(255),
    description: z.string().nullable().exactOptional(),
    expression: z.string().nullable().exactOptional(),
    filterable: z.boolean().exactOptional(),
    groupby: z.boolean().exactOptional(),
    id: z.int32().exactOptional(),
    is_active: z.boolean().exactOptional(),
    is_dttm: z.boolean().exactOptional(),
    python_date_format: z.string().min(1).max(255).nullable().exactOptional(),
    type: z.string().min(1).max(32).exactOptional(),
    uuid: z.string().nullable().exactOptional(),
    verbose_name: z.string().nullable().exactOptional(),
  })
  .openapi({ required: ['column_name'] })
  .openapi('DatasetColumnsPut')

const DatasetColumnsRestApiGetSchema = z
  .object({ id: z.int32().exactOptional() })
  .openapi({ required: [] })
  .openapi('DatasetColumnsRestApiGet')

const DatasetColumnsRestApiGetListSchema = z
  .object({ id: z.int32().exactOptional() })
  .openapi({ required: [] })
  .openapi('DatasetColumnsRestApiGetList')

const DatasetColumnsRestApiPostSchema = z
  .object({ id: z.int32().exactOptional() })
  .openapi({ required: [] })
  .openapi('DatasetColumnsRestApiPost')

const DatasetColumnsRestApiPutSchema = z
  .object({ id: z.int32().exactOptional() })
  .openapi({ required: [] })
  .openapi('DatasetColumnsRestApiPut')

const DatasetMetricRestApiGetSchema = z
  .object({ id: z.int32().exactOptional() })
  .openapi({ required: [] })
  .openapi('DatasetMetricRestApiGet')

const DatasetMetricRestApiGetListSchema = z
  .object({ id: z.int32().exactOptional() })
  .openapi({ required: [] })
  .openapi('DatasetMetricRestApiGetList')

const DatasetMetricRestApiPostSchema = z
  .object({ id: z.int32().exactOptional() })
  .openapi({ required: [] })
  .openapi('DatasetMetricRestApiPost')

const DatasetMetricRestApiPutSchema = z
  .object({ id: z.int32().exactOptional() })
  .openapi({ required: [] })
  .openapi('DatasetMetricRestApiPut')

const DatasetMetricsPutSchema = z
  .object({
    d3format: z.string().min(1).max(128).nullable().exactOptional(),
    description: z.string().nullable().exactOptional(),
    expression: z.string(),
    id: z.int32().exactOptional(),
    metric_name: z.string().min(1).max(255),
    metric_type: z.string().min(1).max(32).nullable().exactOptional(),
    warning_text: z.string().nullable().exactOptional(),
  })
  .openapi({ required: ['expression', 'metric_name'] })
  .openapi('DatasetMetricsPut')

const DatasetRelatedChartSchema = z
  .object({
    id: z.int32().exactOptional(),
    slice_name: z.string().exactOptional(),
    viz_type: z.string().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('DatasetRelatedChart')

const DatasetRelatedChartsSchema = z
  .object({
    count: z.int32().exactOptional().openapi({ description: 'Chart count' }),
    result: z
      .array(DatasetRelatedChartSchema)
      .exactOptional()
      .openapi({ description: 'A list of dashboards' }),
  })
  .openapi({ required: [] })
  .openapi('DatasetRelatedCharts')

const DatasetRelatedDashboardSchema = z
  .object({
    id: z.int32().exactOptional(),
    json_metadata: z.object({}).exactOptional(),
    slug: z.string().exactOptional(),
    title: z.string().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('DatasetRelatedDashboard')

const DatasetRelatedDashboardsSchema = z
  .object({
    count: z.int32().exactOptional().openapi({ description: 'Dashboard count' }),
    result: z
      .array(DatasetRelatedDashboardSchema)
      .exactOptional()
      .openapi({ description: 'A list of dashboards' }),
  })
  .openapi({ required: [] })
  .openapi('DatasetRelatedDashboards')

const DatasetRelatedObjectsResponseSchema = z
  .object({
    charts: DatasetRelatedChartsSchema.exactOptional(),
    dashboards: DatasetRelatedDashboardsSchema.exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('DatasetRelatedObjectsResponse')

const Meta22Schema = z
  .object({
    changed_on: z.iso.datetime({ offset: true }).nullable().exactOptional(),
    column_name: z.string().max(255),
    created_on: z.iso.datetime({ offset: true }).nullable().exactOptional(),
    description: z.string().nullable().exactOptional(),
    expression: z.string().nullable().exactOptional(),
    filterable: z.boolean().nullable().exactOptional(),
    groupby: z.boolean().nullable().exactOptional(),
    id: z.int32().exactOptional(),
    is_active: z.boolean().nullable().exactOptional(),
    is_dttm: z.boolean().nullable().exactOptional(),
    python_date_format: z.string().max(255).nullable().exactOptional(),
    type: z.string().max(32).nullable().exactOptional(),
    type_generic: z.any().exactOptional().openapi({ readOnly: true }),
    uuid: z.uuid().nullable().exactOptional(),
    verbose_name: z.string().max(1024).nullable().exactOptional(),
  })
  .openapi({ required: ['column_name'] })
  .openapi('Meta22')

const Meta23Schema = z
  .object({ database_name: z.string().max(250), id: z.int32().exactOptional() })
  .openapi({ required: ['database_name'] })
  .openapi('Meta23')

const Meta25Schema = z
  .object({
    changed_on: z.iso.datetime({ offset: true }).nullable().exactOptional(),
    created_on: z.iso.datetime({ offset: true }).nullable().exactOptional(),
    d3format: z.string().max(128).nullable().exactOptional(),
    description: z.string().nullable().exactOptional(),
    expression: z.string(),
    extra: z.string().nullable().exactOptional(),
    id: z.int32().exactOptional(),
    metric_name: z.string().max(255),
    metric_type: z.string().max(32).nullable().exactOptional(),
    uuid: z.uuid().nullable().exactOptional(),
    verbose_name: z.string().max(1024).nullable().exactOptional(),
    warning_text: z.string().nullable().exactOptional(),
  })
  .openapi({ required: ['expression', 'metric_name'] })
  .openapi('Meta25')

const Meta24Schema = z
  .object({
    first_name: z.string().max(64),
    id: z.int32().exactOptional(),
    last_name: z.string().max(64),
    username: z.string().max(64),
  })
  .openapi({ required: ['first_name', 'last_name', 'username'] })
  .openapi('Meta24')

const DatasetRestApiGetSchema = z
  .object({
    cache_timeout: z.int32().nullable().exactOptional(),
    columns: Meta22Schema,
    database: Meta23Schema,
    datasource_type: z.any().exactOptional().openapi({ readOnly: true }),
    default_endpoint: z.string().nullable().exactOptional(),
    description: z.string().nullable().exactOptional(),
    extra: z.string().nullable().exactOptional(),
    fetch_values_predicate: z.string().max(1000).nullable().exactOptional(),
    filter_select_enabled: z.boolean().nullable().exactOptional(),
    id: z.int32().exactOptional(),
    is_sqllab_view: z.boolean().nullable().exactOptional(),
    main_dttm_col: z.string().max(250).nullable().exactOptional(),
    metrics: Meta25Schema,
    offset: z.int32().nullable().exactOptional(),
    owners: Meta24Schema.exactOptional(),
    schema: z.string().max(255).nullable().exactOptional(),
    sql: z.string().nullable().exactOptional(),
    table_name: z.string().max(250),
    template_params: z.string().nullable().exactOptional(),
    url: z.any().exactOptional().openapi({ readOnly: true }),
  })
  .openapi({ required: ['columns', 'database', 'metrics', 'table_name'] })
  .openapi('DatasetRestApiGet')

const Meta19Schema = z
  .object({ first_name: z.string().max(64), username: z.string().max(64) })
  .openapi({ required: ['first_name', 'username'] })
  .openapi('Meta19')

const Meta21Schema = z
  .object({ database_name: z.string().max(250), id: z.int32().exactOptional() })
  .openapi({ required: ['database_name'] })
  .openapi('Meta21')

const Meta20Schema = z
  .object({
    first_name: z.string().max(64),
    id: z.int32().exactOptional(),
    last_name: z.string().max(64),
    username: z.string().max(64),
  })
  .openapi({ required: ['first_name', 'last_name', 'username'] })
  .openapi('Meta20')

const DatasetRestApiGetListSchema = z
  .object({
    changed_by: Meta19Schema.exactOptional(),
    changed_by_name: z.any().exactOptional().openapi({ readOnly: true }),
    changed_by_url: z.any().exactOptional().openapi({ readOnly: true }),
    changed_on_delta_humanized: z.any().exactOptional().openapi({ readOnly: true }),
    changed_on_utc: z.any().exactOptional().openapi({ readOnly: true }),
    database: Meta21Schema,
    default_endpoint: z.string().nullable().exactOptional(),
    explore_url: z.any().exactOptional().openapi({ readOnly: true }),
    extra: z.string().nullable().exactOptional(),
    id: z.int32().exactOptional(),
    kind: z.any().exactOptional().openapi({ readOnly: true }),
    owners: Meta20Schema.exactOptional(),
    schema: z.string().max(255).nullable().exactOptional(),
    sql: z.string().nullable().exactOptional(),
    table_name: z.string().max(250),
  })
  .openapi({ required: ['database', 'table_name'] })
  .openapi('DatasetRestApiGetList')

const DatasetRestApiPostSchema = z
  .object({
    database: z.int32(),
    owners: z.array(z.int32()).exactOptional(),
    schema: z.string().min(0).max(250).exactOptional(),
    table_name: z.string().min(1).max(250),
  })
  .openapi({ required: ['database', 'table_name'] })
  .openapi('DatasetRestApiPost')

const DatasetRestApiPutSchema = z
  .object({
    cache_timeout: z.int32().nullable().exactOptional(),
    columns: z.array(DatasetColumnsPutSchema).exactOptional(),
    database_id: z.int32().exactOptional(),
    default_endpoint: z.string().nullable().exactOptional(),
    description: z.string().nullable().exactOptional(),
    extra: z.string().nullable().exactOptional(),
    fetch_values_predicate: z.string().min(0).max(1000).nullable().exactOptional(),
    filter_select_enabled: z.boolean().nullable().exactOptional(),
    is_sqllab_view: z.boolean().nullable().exactOptional(),
    main_dttm_col: z.string().nullable().exactOptional(),
    metrics: z.array(DatasetMetricsPutSchema).exactOptional(),
    offset: z.int32().nullable().exactOptional(),
    owners: z.array(z.int32()).exactOptional(),
    schema: z.string().min(0).max(255).nullable().exactOptional(),
    sql: z.string().nullable().exactOptional(),
    table_name: z.string().min(1).max(250).nullable().exactOptional(),
    template_params: z.string().nullable().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('DatasetRestApiPut')

const DistinctResultResponseSchema = z
  .object({ text: z.string().exactOptional().openapi({ description: 'The distinct item' }) })
  .openapi({ required: [] })
  .openapi('DistinctResultResponse')

const DistincResponseSchemaSchema = z
  .object({
    count: z
      .int32()
      .exactOptional()
      .openapi({ description: 'The total number of distinct values' }),
    result: z.array(DistinctResultResponseSchema).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('DistincResponseSchema')

const GetFavStarIdsSchemaSchema = z
  .object({
    result: z
      .array(ChartFavStarResponseResultSchema)
      .exactOptional()
      .openapi({ description: 'A list of results for each corresponding chart in the request' }),
  })
  .openapi({ required: [] })
  .openapi('GetFavStarIdsSchema')

const Meta43Schema = z
  .object({ username: z.string().max(64) })
  .openapi({ required: ['username'] })
  .openapi('Meta43')

const LogRestApiGetSchema = z
  .object({
    action: z.string().max(512).nullable().exactOptional(),
    dashboard_id: z.int32().nullable().exactOptional(),
    dttm: z.iso.datetime({ offset: true }).nullable().exactOptional(),
    duration_ms: z.int32().nullable().exactOptional(),
    json: z.string().nullable().exactOptional(),
    referrer: z.string().max(1024).nullable().exactOptional(),
    slice_id: z.int32().nullable().exactOptional(),
    user: Meta43Schema.exactOptional(),
    user_id: z.int32().nullable().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('LogRestApiGet')

const Meta42Schema = z
  .object({ username: z.string().max(64) })
  .openapi({ required: ['username'] })
  .openapi('Meta42')

const LogRestApiGetListSchema = z
  .object({
    action: z.string().max(512).nullable().exactOptional(),
    dashboard_id: z.int32().nullable().exactOptional(),
    dttm: z.iso.datetime({ offset: true }).nullable().exactOptional(),
    duration_ms: z.int32().nullable().exactOptional(),
    json: z.string().nullable().exactOptional(),
    referrer: z.string().max(1024).nullable().exactOptional(),
    slice_id: z.int32().nullable().exactOptional(),
    user: Meta42Schema.exactOptional(),
    user_id: z.int32().nullable().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('LogRestApiGetList')

const LogRestApiPostSchema = z
  .object({ id: z.int32().exactOptional() })
  .openapi({ required: [] })
  .openapi('LogRestApiPost')

const LogRestApiPutSchema = z
  .object({
    action: z.string().max(512).nullable().exactOptional(),
    dttm: z.iso.datetime({ offset: true }).nullable().exactOptional(),
    json: z.string().nullable().exactOptional(),
    user: z.any().nullable().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('LogRestApiPut')

const Meta26Schema = z
  .object({
    first_name: z.string().max(64),
    id: z.int32().exactOptional(),
    last_name: z.string().max(64),
    username: z.string().max(64),
  })
  .openapi({ required: ['first_name', 'last_name', 'username'] })
  .openapi('Meta26')

const Meta27Schema = z
  .object({ database_name: z.string().max(250) })
  .openapi({ required: ['database_name'] })
  .openapi('Meta27')

const Meta28Schema = z
  .object({ id: z.int32().exactOptional() })
  .openapi({ required: [] })
  .openapi('Meta28')

const Meta29Schema = z
  .object({
    first_name: z.string().max(64),
    id: z.int32().exactOptional(),
    last_name: z.string().max(64),
  })
  .openapi({ required: ['first_name', 'last_name'] })
  .openapi('Meta29')

const Meta30Schema = z
  .object({ database_name: z.string().max(250), id: z.int32().exactOptional() })
  .openapi({ required: ['database_name'] })
  .openapi('Meta30')

const Meta31Schema = z
  .object({
    first_name: z.string().max(64),
    id: z.int32().exactOptional(),
    last_name: z.string().max(64),
  })
  .openapi({ required: ['first_name', 'last_name'] })
  .openapi('Meta31')

const Meta32Schema = z
  .object({ database_name: z.string().max(250), id: z.int32().exactOptional() })
  .openapi({ required: ['database_name'] })
  .openapi('Meta32')

const Meta33Schema = z
  .object({ first_name: z.string().max(64), last_name: z.string().max(64) })
  .openapi({ required: ['first_name', 'last_name'] })
  .openapi('Meta33')

const Meta34Schema = z
  .object({ first_name: z.string().max(64), last_name: z.string().max(64) })
  .openapi({ required: ['first_name', 'last_name'] })
  .openapi('Meta34')

const Meta35Schema = z
  .object({ id: z.int32().exactOptional(), type: z.string().max(50) })
  .openapi({ required: ['type'] })
  .openapi('Meta35')

const Meta36Schema = z
  .object({
    first_name: z.string().max(64),
    id: z.int32().exactOptional(),
    last_name: z.string().max(64),
  })
  .openapi({ required: ['first_name', 'last_name'] })
  .openapi('Meta36')

const Meta37Schema = z
  .object({ database_name: z.string().max(250), id: z.int32().exactOptional() })
  .openapi({ required: ['database_name'] })
  .openapi('Meta37')

const Meta38Schema = z
  .object({
    id: z.int32().exactOptional(),
    recipient_config_json: z.string().nullable().exactOptional(),
    type: z.string().max(50),
  })
  .openapi({ required: ['type'] })
  .openapi('Meta38')

const Meta39Schema = z
  .object({
    first_name: z.string().max(64),
    id: z.int32().exactOptional(),
    last_name: z.string().max(64),
  })
  .openapi({ required: ['first_name', 'last_name'] })
  .openapi('Meta39')

const Meta40Schema = z
  .object({
    id: z.int32().exactOptional(),
    slice_name: z.string().max(250).nullable().exactOptional(),
    viz_type: z.string().max(250).nullable().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('Meta40')

const Meta41Schema = z
  .object({
    dashboard_title: z.string().max(500).nullable().exactOptional(),
    id: z.int32().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('Meta41')

const QueryRestApiGetSchema = z
  .object({
    changed_on: z.iso.datetime({ offset: true }).nullable().exactOptional(),
    client_id: z.string().max(11),
    database: Meta28Schema,
    end_result_backend_time: z.number().nullable().exactOptional(),
    end_time: z.number().nullable().exactOptional(),
    error_message: z.string().nullable().exactOptional(),
    executed_sql: z.string().nullable().exactOptional(),
    id: z.int32().exactOptional(),
    limit: z.int32().nullable().exactOptional(),
    progress: z.int32().nullable().exactOptional(),
    results_key: z.string().max(64).nullable().exactOptional(),
    rows: z.int32().nullable().exactOptional(),
    schema: z.string().max(256).nullable().exactOptional(),
    select_as_cta: z.boolean().nullable().exactOptional(),
    select_as_cta_used: z.boolean().nullable().exactOptional(),
    select_sql: z.string().nullable().exactOptional(),
    sql: z.string().nullable().exactOptional(),
    sql_editor_id: z.string().max(256).nullable().exactOptional(),
    start_running_time: z.number().nullable().exactOptional(),
    start_time: z.number().nullable().exactOptional(),
    status: z.string().max(16).nullable().exactOptional(),
    tab_name: z.string().max(256).nullable().exactOptional(),
    tmp_schema_name: z.string().max(256).nullable().exactOptional(),
    tmp_table_name: z.string().max(256).nullable().exactOptional(),
    tracking_url: z.string().nullable().exactOptional(),
  })
  .openapi({ required: ['client_id', 'database'] })
  .openapi('QueryRestApiGet')

const QueryRestApiGetListSchema = z
  .object({
    changed_on: z.iso.datetime({ offset: true }).nullable().exactOptional(),
    database: Meta27Schema,
    end_time: z.number().nullable().exactOptional(),
    executed_sql: z.string().nullable().exactOptional(),
    id: z.int32().exactOptional(),
    rows: z.int32().nullable().exactOptional(),
    schema: z.string().max(256).nullable().exactOptional(),
    sql: z.string().nullable().exactOptional(),
    sql_tables: z.any().exactOptional().openapi({ readOnly: true }),
    start_time: z.number().nullable().exactOptional(),
    status: z.string().max(16).nullable().exactOptional(),
    tab_name: z.string().max(256).nullable().exactOptional(),
    tmp_table_name: z.string().max(256).nullable().exactOptional(),
    tracking_url: z.string().nullable().exactOptional(),
    user: Meta26Schema.exactOptional(),
  })
  .openapi({ required: ['database'] })
  .openapi('QueryRestApiGetList')

const QueryRestApiPostSchema = z
  .object({ id: z.int32().exactOptional() })
  .openapi({ required: [] })
  .openapi('QueryRestApiPost')

const QueryRestApiPutSchema = z
  .object({ id: z.int32().exactOptional() })
  .openapi({ required: [] })
  .openapi('QueryRestApiPut')

const RelatedResultResponseSchema = z
  .object({
    text: z
      .string()
      .exactOptional()
      .openapi({ description: 'The related item string representation' }),
    value: z.int32().exactOptional().openapi({ description: 'The related item identifier' }),
  })
  .openapi({ required: [] })
  .openapi('RelatedResultResponse')

const RelatedResponseSchemaSchema = z
  .object({
    count: z.int32().exactOptional().openapi({ description: 'The total number of related values' }),
    result: z.array(RelatedResultResponseSchema).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('RelatedResponseSchema')

const ReportExecutionLogRestApiGetSchema = z
  .object({
    end_dttm: z.iso.datetime({ offset: true }).nullable().exactOptional(),
    error_message: z.string().nullable().exactOptional(),
    id: z.int32().exactOptional(),
    scheduled_dttm: z.iso.datetime({ offset: true }),
    start_dttm: z.iso.datetime({ offset: true }).nullable().exactOptional(),
    state: z.string().max(50),
    uuid: z.uuid().nullable().exactOptional(),
    value: z.float32().nullable().exactOptional(),
    value_row_json: z.string().nullable().exactOptional(),
  })
  .openapi({ required: ['scheduled_dttm', 'state'] })
  .openapi('ReportExecutionLogRestApiGet')

const ReportExecutionLogRestApiGetListSchema = z
  .object({
    end_dttm: z.iso.datetime({ offset: true }).nullable().exactOptional(),
    error_message: z.string().nullable().exactOptional(),
    id: z.int32().exactOptional(),
    scheduled_dttm: z.iso.datetime({ offset: true }),
    start_dttm: z.iso.datetime({ offset: true }).nullable().exactOptional(),
    state: z.string().max(50),
    uuid: z.uuid().nullable().exactOptional(),
    value: z.float32().nullable().exactOptional(),
    value_row_json: z.string().nullable().exactOptional(),
  })
  .openapi({ required: ['scheduled_dttm', 'state'] })
  .openapi('ReportExecutionLogRestApiGetList')

const ReportExecutionLogRestApiPostSchema = z
  .object({ id: z.int32().exactOptional() })
  .openapi({ required: [] })
  .openapi('ReportExecutionLogRestApiPost')

const ReportExecutionLogRestApiPutSchema = z
  .object({ id: z.int32().exactOptional() })
  .openapi({ required: [] })
  .openapi('ReportExecutionLogRestApiPut')

const ReportRecipientConfigJSONSchema = z
  .object({ target: z.string().exactOptional() })
  .openapi({ required: [] })
  .openapi('ReportRecipientConfigJSON')

const ReportRecipientSchema = z
  .object({
    recipient_config_json: ReportRecipientConfigJSONSchema.exactOptional(),
    type: z
      .enum(['Email', 'Slack'])
      .openapi({ description: 'The recipient type, check spec for valid options' }),
  })
  .openapi({ required: ['type'] })
  .openapi('ReportRecipient')

const ReportScheduleRestApiGetSchema = z
  .object({
    active: z.boolean().nullable().exactOptional(),
    chart: Meta40Schema.exactOptional(),
    context_markdown: z.string().nullable().exactOptional(),
    creation_method: z.string().max(255).nullable().exactOptional(),
    crontab: z.string().max(1000),
    dashboard: Meta41Schema.exactOptional(),
    database: Meta37Schema.exactOptional(),
    description: z.string().nullable().exactOptional(),
    grace_period: z.int32().nullable().exactOptional(),
    id: z.int32().exactOptional(),
    last_eval_dttm: z.iso.datetime({ offset: true }).nullable().exactOptional(),
    last_state: z.string().max(50).nullable().exactOptional(),
    last_value: z.float32().nullable().exactOptional(),
    last_value_row_json: z.string().nullable().exactOptional(),
    log_retention: z.int32().nullable().exactOptional(),
    name: z.string().max(150),
    owners: Meta39Schema.exactOptional(),
    recipients: Meta38Schema,
    report_format: z.string().max(50).nullable().exactOptional(),
    sql: z.string().nullable().exactOptional(),
    timezone: z.string().max(100).exactOptional(),
    type: z.string().max(50),
    validator_config_json: z.string().nullable().exactOptional(),
    validator_type: z.string().max(100).nullable().exactOptional(),
    working_timeout: z.int32().nullable().exactOptional(),
  })
  .openapi({ required: ['crontab', 'name', 'recipients', 'type'] })
  .openapi('ReportScheduleRestApiGet')

const ReportScheduleRestApiGetListSchema = z
  .object({
    active: z.boolean().nullable().exactOptional(),
    changed_by: Meta34Schema.exactOptional(),
    changed_on: z.iso.datetime({ offset: true }).nullable().exactOptional(),
    changed_on_delta_humanized: z.any().exactOptional().openapi({ readOnly: true }),
    created_by: Meta33Schema.exactOptional(),
    created_on: z.iso.datetime({ offset: true }).nullable().exactOptional(),
    creation_method: z.string().max(255).nullable().exactOptional(),
    crontab: z.string().max(1000),
    crontab_humanized: z.any().exactOptional().openapi({ readOnly: true }),
    description: z.string().nullable().exactOptional(),
    id: z.int32().exactOptional(),
    last_eval_dttm: z.iso.datetime({ offset: true }).nullable().exactOptional(),
    last_state: z.string().max(50).nullable().exactOptional(),
    name: z.string().max(150),
    owners: Meta36Schema.exactOptional(),
    recipients: Meta35Schema,
    timezone: z.string().max(100).exactOptional(),
    type: z.string().max(50),
  })
  .openapi({ required: ['crontab', 'name', 'recipients', 'type'] })
  .openapi('ReportScheduleRestApiGetList')

const ValidatorConfigJSONSchema = z
  .object({
    op: z
      .enum(['<', '<=', '>', '>=', '==', '!='])
      .exactOptional()
      .openapi({
        description: 'The operation to compare with a threshold to apply to the SQL output\n',
      }),
    threshold: z.int32().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ValidatorConfigJSON')

const ReportScheduleRestApiPostSchema = z
  .object({
    active: z.boolean().exactOptional(),
    chart: z.int32().nullable().exactOptional(),
    context_markdown: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({ description: 'Markdown description' }),
    creation_method: z
      .any()
      .exactOptional()
      .openapi({
        description:
          'Creation method is used to inform the frontend whether the report/alert was created in the dashboard, chart, or alerts and reports UI.',
      }),
    crontab: z
      .string()
      .min(1)
      .max(1000)
      .openapi({
        description:
          'A CRON expression.[Crontab Guru](https://crontab.guru/) is a helpful resource that can help you craft a CRON expression.',
        example: '*/5 * * * *',
      }),
    dashboard: z.int32().nullable().exactOptional(),
    database: z.int32().exactOptional(),
    description: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({
        description: 'Use a nice description to give context to this Alert/Report',
        example: 'Daily sales dashboard to marketing',
      }),
    grace_period: z
      .int32()
      .min(1)
      .exactOptional()
      .openapi({
        description:
          'Once an alert is triggered, how long, in seconds, before Superset nags you again. (in seconds)',
        example: 14400,
      }),
    log_retention: z
      .int32()
      .min(1)
      .exactOptional()
      .openapi({
        description: 'How long to keep the logs around for this report (in days)',
        example: 90,
      }),
    name: z
      .string()
      .min(1)
      .max(150)
      .openapi({ description: 'The report schedule name.', example: 'Daily dashboard email' }),
    owners: z
      .array(
        z
          .int32()
          .openapi({
            description:
              'Owner are users ids allowed to delete or change this report. If left empty you will be one of the owners of the report.',
          }),
      )
      .exactOptional(),
    recipients: z.array(ReportRecipientSchema).exactOptional(),
    report_format: z.enum(['PNG', 'CSV', 'TEXT']).exactOptional(),
    sql: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'A SQL statement that defines whether the alert should get triggered or not. The query is expected to return either NULL or a number value.',
        example: 'SELECT value FROM time_series_table',
      }),
    timezone: z
      .string()
      .exactOptional()
      .openapi({ description: 'A timezone string that represents the location of the timezone.' }),
    type: z.enum(['Alert', 'Report']).openapi({ description: 'The report schedule type' }),
    validator_config_json: ValidatorConfigJSONSchema.exactOptional(),
    validator_type: z
      .enum(['not null', 'operator'])
      .exactOptional()
      .openapi({
        description:
          'Determines when to trigger alert based off value from alert query. Alerts will be triggered with these validator types:\n- Not Null - When the return value is Not NULL, Empty, or 0\n- Operator - When `sql_return_value comparison_operator threshold` is True e.g. `50 <= 75`<br>Supports the comparison operators <, <=, >, >=, ==, and !=',
      }),
    working_timeout: z
      .int32()
      .min(1)
      .exactOptional()
      .openapi({
        description:
          "If an alert is staled at a working state, how long until it's state is reseted to error",
        example: 3600,
      }),
  })
  .openapi({ required: ['crontab', 'name', 'type'] })
  .openapi('ReportScheduleRestApiPost')

const ReportScheduleRestApiPutSchema = z
  .object({
    active: z.boolean().exactOptional(),
    chart: z.int32().nullable().exactOptional(),
    context_markdown: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({ description: 'Markdown description' }),
    creation_method: z
      .any()
      .nullable()
      .exactOptional()
      .openapi({
        description:
          'Creation method is used to inform the frontend whether the report/alert was created in the dashboard, chart, or alerts and reports UI.',
      }),
    crontab: z
      .string()
      .min(1)
      .max(1000)
      .exactOptional()
      .openapi({
        description:
          'A CRON expression.[Crontab Guru](https://crontab.guru/) is a helpful resource that can help you craft a CRON expression.',
      }),
    dashboard: z.int32().nullable().exactOptional(),
    database: z.int32().exactOptional(),
    description: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({
        description: 'Use a nice description to give context to this Alert/Report',
        example: 'Daily sales dashboard to marketing',
      }),
    grace_period: z
      .int32()
      .min(1)
      .exactOptional()
      .openapi({
        description:
          'Once an alert is triggered, how long, in seconds, before Superset nags you again. (in seconds)',
        example: 14400,
      }),
    log_retention: z
      .int32()
      .min(1)
      .exactOptional()
      .openapi({
        description: 'How long to keep the logs around for this report (in days)',
        example: 90,
      }),
    name: z
      .string()
      .min(1)
      .max(150)
      .exactOptional()
      .openapi({ description: 'The report schedule name.' }),
    owners: z
      .array(
        z
          .int32()
          .openapi({
            description:
              'Owner are users ids allowed to delete or change this report. If left empty you will be one of the owners of the report.',
          }),
      )
      .exactOptional(),
    recipients: z.array(ReportRecipientSchema).exactOptional(),
    report_format: z.enum(['PNG', 'CSV', 'TEXT']).exactOptional(),
    sql: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({
        description:
          'A SQL statement that defines whether the alert should get triggered or not. The query is expected to return either NULL or a number value.',
        example: 'SELECT value FROM time_series_table',
      }),
    timezone: z
      .string()
      .exactOptional()
      .openapi({ description: 'A timezone string that represents the location of the timezone.' }),
    type: z
      .enum(['Alert', 'Report'])
      .exactOptional()
      .openapi({ description: 'The report schedule type' }),
    validator_config_json: ValidatorConfigJSONSchema.exactOptional(),
    validator_type: z
      .enum(['not null', 'operator'])
      .nullable()
      .exactOptional()
      .openapi({
        description:
          'Determines when to trigger alert based off value from alert query. Alerts will be triggered with these validator types:\n- Not Null - When the return value is Not NULL, Empty, or 0\n- Operator - When `sql_return_value comparison_operator threshold` is True e.g. `50 <= 75`<br>Supports the comparison operators <, <=, >, >=, ==, and !=',
      }),
    working_timeout: z
      .int32()
      .min(1)
      .nullable()
      .exactOptional()
      .openapi({
        description:
          "If an alert is staled at a working state, how long until it's state is reseted to error",
        example: 3600,
      }),
  })
  .openapi({ required: [] })
  .openapi('ReportScheduleRestApiPut')

const SavedQueryRestApiGetSchema = z
  .object({
    created_by: Meta31Schema.exactOptional(),
    database: Meta32Schema.exactOptional(),
    description: z.string().nullable().exactOptional(),
    id: z.int32().exactOptional(),
    label: z.string().max(256).nullable().exactOptional(),
    schema: z.string().max(128).nullable().exactOptional(),
    sql: z.string().nullable().exactOptional(),
    sql_tables: z.any().exactOptional().openapi({ readOnly: true }),
  })
  .openapi({ required: [] })
  .openapi('SavedQueryRestApiGet')

const SavedQueryRestApiGetListSchema = z
  .object({
    changed_on_delta_humanized: z.any().exactOptional().openapi({ readOnly: true }),
    created_by: Meta29Schema.exactOptional(),
    created_on: z.iso.datetime({ offset: true }).nullable().exactOptional(),
    database: Meta30Schema.exactOptional(),
    db_id: z.int32().nullable().exactOptional(),
    description: z.string().nullable().exactOptional(),
    extra: z.any().exactOptional().openapi({ readOnly: true }),
    id: z.int32().exactOptional(),
    label: z.string().max(256).nullable().exactOptional(),
    last_run_delta_humanized: z.any().exactOptional().openapi({ readOnly: true }),
    rows: z.int32().nullable().exactOptional(),
    schema: z.string().max(128).nullable().exactOptional(),
    sql: z.string().nullable().exactOptional(),
    sql_tables: z.any().exactOptional().openapi({ readOnly: true }),
  })
  .openapi({ required: [] })
  .openapi('SavedQueryRestApiGetList')

const SavedQueryRestApiPostSchema = z
  .object({
    db_id: z.int32().nullable().exactOptional(),
    description: z.string().nullable().exactOptional(),
    label: z.string().max(256).nullable().exactOptional(),
    schema: z.string().max(128).nullable().exactOptional(),
    sql: z.string().nullable().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('SavedQueryRestApiPost')

const SavedQueryRestApiPutSchema = z
  .object({
    db_id: z.int32().nullable().exactOptional(),
    description: z.string().nullable().exactOptional(),
    label: z.string().max(256).nullable().exactOptional(),
    schema: z.string().max(128).nullable().exactOptional(),
    sql: z.string().nullable().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('SavedQueryRestApiPut')

const SchemasResponseSchemaSchema = z
  .object({
    result: z.array(z.string().openapi({ description: 'A database schema name' })).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('SchemasResponseSchema')

const SelectStarResponseSchemaSchema = z
  .object({ result: z.string().exactOptional().openapi({ description: 'SQL select star' }) })
  .openapi({ required: [] })
  .openapi('SelectStarResponseSchema')

const TableMetadataColumnsResponseSchema = z
  .object({
    duplicates_constraint: z.string().exactOptional(),
    keys: z.array(z.string()).exactOptional().openapi({ description: '' }),
    longType: z
      .string()
      .exactOptional()
      .openapi({ description: 'The actual backend long type for the column' }),
    name: z.string().exactOptional().openapi({ description: 'The column name' }),
    type: z.string().exactOptional().openapi({ description: 'The column type' }),
  })
  .openapi({ required: [] })
  .openapi('TableMetadataColumnsResponse')

const TableMetadataOptionsResponseSchema = z
  .object({
    deferrable: z.boolean().exactOptional(),
    initially: z.boolean().exactOptional(),
    match: z.boolean().exactOptional(),
    ondelete: z.boolean().exactOptional(),
    onupdate: z.boolean().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('TableMetadataOptionsResponse')

const TableMetadataForeignKeysIndexesResponseSchema = z
  .object({
    column_names: z
      .array(
        z
          .string()
          .openapi({ description: 'A list of column names that compose the foreign key or index' }),
      )
      .exactOptional(),
    name: z
      .string()
      .exactOptional()
      .openapi({ description: 'The name of the foreign key or index' }),
    options: TableMetadataOptionsResponseSchema.exactOptional(),
    referred_columns: z.array(z.string()).exactOptional(),
    referred_schema: z.string().exactOptional(),
    referred_table: z.string().exactOptional(),
    type: z.string().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('TableMetadataForeignKeysIndexesResponse')

const TableMetadataPrimaryKeyResponseSchema = z
  .object({
    column_names: z
      .array(
        z.string().openapi({ description: 'A list of column names that compose the primary key' }),
      )
      .exactOptional(),
    name: z.string().exactOptional().openapi({ description: 'The primary key index name' }),
    type: z.string().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('TableMetadataPrimaryKeyResponse')

const TableMetadataResponseSchemaSchema = z
  .object({
    columns: z
      .array(TableMetadataColumnsResponseSchema)
      .exactOptional()
      .openapi({ description: 'A list of columns and their metadata' }),
    foreignKeys: z
      .array(TableMetadataForeignKeysIndexesResponseSchema)
      .exactOptional()
      .openapi({ description: 'A list of foreign keys and their metadata' }),
    indexes: z
      .array(TableMetadataForeignKeysIndexesResponseSchema)
      .exactOptional()
      .openapi({ description: 'A list of indexes and their metadata' }),
    name: z.string().exactOptional().openapi({ description: 'The name of the table' }),
    primaryKey: TableMetadataPrimaryKeyResponseSchema.exactOptional().openapi({
      description: 'Primary keys metadata',
    }),
    selectStar: z.string().exactOptional().openapi({ description: 'SQL select star' }),
  })
  .openapi({ required: [] })
  .openapi('TableMetadataResponseSchema')

const DatabaseSchemasQuerySchemaSchema = z
  .object({ force: z.boolean().exactOptional() })
  .openapi({ required: [] })
  .openapi('DatabaseSchemasQuerySchema')

const GetDeleteIdsSchemaSchema = z.array(z.int()).openapi('GetDeleteIdsSchema')

const GetExportIdsSchemaSchema = z.array(z.int()).openapi('GetExportIdsSchema')

const GetFavStarIdsSchema2Schema = z.array(z.int()).openapi('GetFavStarIdsSchema2')

const GetInfoSchemaSchema = z
  .object({
    add_columns: z
      .record(
        z.string(),
        z
          .object({ page: z.int().exactOptional(), page_size: z.int().exactOptional() })
          .openapi({ required: [] }),
      )
      .exactOptional(),
    edit_columns: z
      .record(
        z.string(),
        z
          .object({ page: z.int().exactOptional(), page_size: z.int().exactOptional() })
          .openapi({ required: [] }),
      )
      .exactOptional(),
    keys: z
      .array(
        z.enum([
          'add_columns',
          'edit_columns',
          'filters',
          'permissions',
          'add_title',
          'edit_title',
          'none',
        ]),
      )
      .exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('GetInfoSchema')

const GetItemSchemaSchema = z
  .object({
    columns: z.array(z.string()).exactOptional(),
    keys: z
      .array(z.enum(['show_columns', 'description_columns', 'label_columns', 'show_title', 'none']))
      .exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('GetItemSchema')

const GetListSchemaSchema = z
  .object({
    columns: z.array(z.string()).exactOptional(),
    filters: z
      .array(
        z
          .object({
            col: z.string(),
            opr: z.string(),
            value: z.union([z.number(), z.string(), z.boolean(), z.array(z.any())]),
          })
          .openapi({ required: ['col', 'opr', 'value'] }),
      )
      .exactOptional(),
    keys: z
      .array(
        z.enum([
          'list_columns',
          'order_columns',
          'label_columns',
          'description_columns',
          'list_title',
          'none',
        ]),
      )
      .exactOptional(),
    order_column: z.string().exactOptional(),
    order_direction: z.enum(['asc', 'desc']).exactOptional(),
    page: z.int().exactOptional(),
    page_size: z.int().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('GetListSchema')

const GetRelatedSchemaSchema = z
  .object({
    filter: z.string().exactOptional(),
    include_ids: z.array(z.int()).exactOptional(),
    page: z.int().exactOptional(),
    page_size: z.int().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('GetRelatedSchema')

const ScreenshotQuerySchemaSchema = z
  .object({
    force: z.boolean().exactOptional(),
    thumb_size: z.array(z.int()).exactOptional(),
    window_size: z.array(z.int()).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ScreenshotQuerySchema')

const ThumbnailQuerySchemaSchema = z
  .object({ force: z.boolean().exactOptional() })
  .openapi({ required: [] })
  .openapi('ThumbnailQuerySchema')

const _400Response = {
  description: 'Bad request',
  content: {
    'application/json': {
      schema: z.object({ message: z.string().exactOptional() }).openapi({ required: [] }),
    },
  },
}

const _401Response = {
  description: 'Unauthorized',
  content: {
    'application/json': {
      schema: z.object({ message: z.string().exactOptional() }).openapi({ required: [] }),
    },
  },
}

const _403Response = {
  description: 'Forbidden',
  content: {
    'application/json': {
      schema: z.object({ message: z.string().exactOptional() }).openapi({ required: [] }),
    },
  },
}

const _404Response = {
  description: 'Not found',
  content: {
    'application/json': {
      schema: z.object({ message: z.string().exactOptional() }).openapi({ required: [] }),
    },
  },
}

const _422Response = {
  description: 'Could not process entity',
  content: {
    'application/json': {
      schema: z.object({ message: z.string().exactOptional() }).openapi({ required: [] }),
    },
  },
}

const _500Response = {
  description: 'Fatal error',
  content: {
    'application/json': {
      schema: z.object({ message: z.string().exactOptional() }).openapi({ required: [] }),
    },
  },
}

const JwtSecurityScheme = { bearerFormat: 'JWT', scheme: 'bearer', type: 'http' }

const JwtRefreshSecurityScheme = { bearerFormat: 'JWT', scheme: 'bearer', type: 'http' }

export const getAnnotationLayerIndexRoute = createRoute({
  method: 'get',
  path: '/annotation_layer/',
  tags: ['Annotation Layers'],
  description:
    'Get a list of Annotation layers, use Rison or JSON query parameters for filtering, sorting, pagination and for selecting specific columns and metadata.',
  request: {
    query: z.object({
      q: z
        .preprocess(
          (val) => {
            if (typeof val !== 'string') return val
            try {
              return JSON.parse(val)
            } catch {
              return val
            }
          },
          GetListSchemaSchema.openapi({
            param: {
              content: {
                'application/json': { schema: { $ref: '#/components/schemas/get_list_schema' } },
              },
              in: 'query',
              name: 'q',
              required: false,
            },
          }),
        )
        .exactOptional(),
    }),
  },
  responses: {
    200: {
      description: 'Items from Model',
      content: {
        'application/json': {
          schema: z
            .object({
              count: z
                .number()
                .exactOptional()
                .openapi({ description: 'The total record count on the backend' }),
              description_columns: z
                .object({
                  column_name: z
                    .string()
                    .exactOptional()
                    .openapi({
                      description:
                        'The description for the column name. Will be translated by babel',
                      example: 'A Nice description for the column',
                    }),
                })
                .exactOptional()
                .openapi({ required: [] }),
              ids: z
                .array(z.string())
                .exactOptional()
                .openapi({
                  description: "A list of item ids, useful when you don't know the column id",
                }),
              label_columns: z
                .object({
                  column_name: z
                    .string()
                    .exactOptional()
                    .openapi({
                      description: 'The label for the column name. Will be translated by babel',
                      example: 'A Nice label for the column',
                    }),
                })
                .exactOptional()
                .openapi({ required: [] }),
              list_columns: z
                .array(z.string())
                .exactOptional()
                .openapi({ description: 'A list of columns' }),
              list_title: z
                .string()
                .exactOptional()
                .openapi({
                  description: 'A title to render. Will be translated by babel',
                  example: 'List Items',
                }),
              order_columns: z
                .array(z.string())
                .exactOptional()
                .openapi({ description: 'A list of allowed columns to sort' }),
              result: z
                .array(AnnotationLayerRestApiGetListSchema)
                .exactOptional()
                .openapi({ description: 'The result from the get list query' }),
            })
            .openapi({ required: [] }),
        },
      },
    },
    400: _400Response,
    401: _401Response,
    422: _422Response,
    500: _500Response,
  },
  security: [{ jwt: [] }],
})

export const postAnnotationLayerIndexRoute = createRoute({
  method: 'post',
  path: '/annotation_layer/',
  tags: ['Annotation Layers'],
  description: 'Create an Annotation layer',
  request: {
    body: {
      description: 'Annotation Layer schema',
      content: { 'application/json': { schema: AnnotationLayerRestApiPostSchema } },
      required: true,
    },
  },
  responses: {
    201: {
      description: 'Annotation added',
      content: {
        'application/json': {
          schema: z
            .object({
              id: z.number().exactOptional(),
              result: AnnotationLayerRestApiPostSchema.exactOptional(),
            })
            .openapi({ required: [] }),
        },
      },
    },
    400: _400Response,
    401: _401Response,
    404: _404Response,
    500: _500Response,
  },
  security: [{ jwt: [] }],
})

export const deleteAnnotationLayerIndexRoute = createRoute({
  method: 'delete',
  path: '/annotation_layer/',
  tags: ['Annotation Layers'],
  description: 'Deletes multiple annotation layers in a bulk operation.',
  request: {
    query: z.object({
      q: z
        .preprocess(
          (val) => {
            if (typeof val !== 'string') return val
            try {
              return JSON.parse(val)
            } catch {
              return val
            }
          },
          GetDeleteIdsSchemaSchema.openapi({
            param: {
              content: {
                'application/json': {
                  schema: { $ref: '#/components/schemas/get_delete_ids_schema' },
                },
              },
              in: 'query',
              name: 'q',
              required: false,
            },
          }),
        )
        .exactOptional(),
    }),
  },
  responses: {
    200: {
      description: 'CSS templates bulk delete',
      content: {
        'application/json': {
          schema: z.object({ message: z.string().exactOptional() }).openapi({ required: [] }),
        },
      },
    },
    401: _401Response,
    404: _404Response,
    422: _422Response,
    500: _500Response,
  },
  security: [{ jwt: [] }],
})

export const getAnnotationLayerInfoRoute = createRoute({
  method: 'get',
  path: '/annotation_layer/_info',
  tags: ['Annotation Layers'],
  description: 'Get metadata information about this API resource',
  request: {
    query: z.object({
      q: z
        .preprocess(
          (val) => {
            if (typeof val !== 'string') return val
            try {
              return JSON.parse(val)
            } catch {
              return val
            }
          },
          GetInfoSchemaSchema.openapi({
            param: {
              content: {
                'application/json': { schema: { $ref: '#/components/schemas/get_info_schema' } },
              },
              in: 'query',
              name: 'q',
              required: false,
            },
          }),
        )
        .exactOptional(),
    }),
  },
  responses: {
    200: {
      description: 'Item from Model',
      content: {
        'application/json': {
          schema: z
            .object({
              add_columns: z.object({}).exactOptional(),
              edit_columns: z.object({}).exactOptional(),
              filters: z
                .object({
                  column_name: z
                    .array(
                      z
                        .object({
                          name: z
                            .string()
                            .exactOptional()
                            .openapi({
                              description: 'The filter name. Will be translated by babel',
                            }),
                          operator: z
                            .string()
                            .exactOptional()
                            .openapi({
                              description: 'The filter operation key to use on list filters',
                            }),
                        })
                        .openapi({ required: [] }),
                    )
                    .exactOptional(),
                })
                .exactOptional()
                .openapi({ required: [] }),
              permissions: z
                .array(z.string())
                .exactOptional()
                .openapi({ description: 'The user permissions for this API resource' }),
            })
            .openapi({ required: [] }),
        },
      },
    },
    400: _400Response,
    401: _401Response,
    422: _422Response,
    500: _500Response,
  },
  security: [{ jwt: [] }],
})

export const getAnnotationLayerRelatedColumnNameRoute = createRoute({
  method: 'get',
  path: '/annotation_layer/related/{column_name}',
  tags: ['Annotation Layers'],
  request: {
    params: z.object({
      column_name: z
        .string()
        .openapi({
          param: { in: 'path', name: 'column_name', required: true, schema: { type: 'string' } },
        }),
    }),
    query: z.object({
      q: z
        .preprocess(
          (val) => {
            if (typeof val !== 'string') return val
            try {
              return JSON.parse(val)
            } catch {
              return val
            }
          },
          GetRelatedSchemaSchema.openapi({
            param: {
              content: {
                'application/json': { schema: { $ref: '#/components/schemas/get_related_schema' } },
              },
              in: 'query',
              name: 'q',
              required: false,
            },
          }),
        )
        .exactOptional(),
    }),
  },
  responses: {
    200: {
      description: 'Related column data',
      content: { 'application/json': { schema: RelatedResponseSchemaSchema } },
    },
    400: _400Response,
    401: _401Response,
    404: _404Response,
    500: _500Response,
  },
  security: [{ jwt: [] }],
})

export const getAnnotationLayerPkRoute = createRoute({
  method: 'get',
  path: '/annotation_layer/{pk}',
  tags: ['Annotation Layers'],
  description: 'Get an Annotation layer',
  request: {
    params: z.object({
      pk: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .openapi({
          param: { in: 'path', name: 'pk', required: true, schema: { type: 'integer' } },
        }),
    }),
    query: z.object({
      q: z
        .preprocess(
          (val) => {
            if (typeof val !== 'string') return val
            try {
              return JSON.parse(val)
            } catch {
              return val
            }
          },
          GetItemSchemaSchema.openapi({
            param: {
              content: {
                'application/json': { schema: { $ref: '#/components/schemas/get_item_schema' } },
              },
              in: 'query',
              name: 'q',
              required: false,
            },
          }),
        )
        .exactOptional(),
    }),
  },
  responses: {
    200: {
      description: 'Item from Model',
      content: {
        'application/json': {
          schema: z
            .object({
              description_columns: z
                .object({
                  column_name: z
                    .string()
                    .exactOptional()
                    .openapi({
                      description:
                        'The description for the column name. Will be translated by babel',
                      example: 'A Nice description for the column',
                    }),
                })
                .exactOptional()
                .openapi({ required: [] }),
              id: z.string().exactOptional().openapi({ description: 'The item id' }),
              label_columns: z
                .object({
                  column_name: z
                    .string()
                    .exactOptional()
                    .openapi({
                      description: 'The label for the column name. Will be translated by babel',
                      example: 'A Nice label for the column',
                    }),
                })
                .exactOptional()
                .openapi({ required: [] }),
              result: AnnotationLayerRestApiGetSchema.exactOptional(),
              show_columns: z
                .array(z.string())
                .exactOptional()
                .openapi({ description: 'A list of columns' }),
              show_title: z
                .string()
                .exactOptional()
                .openapi({
                  description: 'A title to render. Will be translated by babel',
                  example: 'Show Item Details',
                }),
            })
            .openapi({ required: [] }),
        },
      },
    },
    400: _400Response,
    401: _401Response,
    404: _404Response,
    422: _422Response,
    500: _500Response,
  },
  security: [{ jwt: [] }],
})

export const putAnnotationLayerPkRoute = createRoute({
  method: 'put',
  path: '/annotation_layer/{pk}',
  tags: ['Annotation Layers'],
  description: 'Update an Annotation layer',
  request: {
    params: z.object({
      pk: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .openapi({
          param: {
            description: 'The annotation layer pk for this annotation',
            in: 'path',
            name: 'pk',
            required: true,
            schema: { type: 'integer' },
          },
        }),
    }),
    body: {
      description: 'Annotation schema',
      content: { 'application/json': { schema: AnnotationLayerRestApiPutSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Annotation changed',
      content: {
        'application/json': {
          schema: z
            .object({
              id: z.number().exactOptional(),
              result: AnnotationLayerRestApiPutSchema.exactOptional(),
            })
            .openapi({ required: [] }),
        },
      },
    },
    400: _400Response,
    401: _401Response,
    404: _404Response,
    500: _500Response,
  },
  security: [{ jwt: [] }],
})

export const deleteAnnotationLayerPkRoute = createRoute({
  method: 'delete',
  path: '/annotation_layer/{pk}',
  tags: ['Annotation Layers'],
  description: 'Delete Annotation layer',
  request: {
    params: z.object({
      pk: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .openapi({
          param: {
            description: 'The annotation layer pk for this annotation',
            in: 'path',
            name: 'pk',
            required: true,
            schema: { type: 'integer' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Item deleted',
      content: {
        'application/json': {
          schema: z.object({ message: z.string().exactOptional() }).openapi({ required: [] }),
        },
      },
    },
    404: _404Response,
    422: _422Response,
    500: _500Response,
  },
  security: [{ jwt: [] }],
})

export const getAnnotationLayerPkAnnotationIndexRoute = createRoute({
  method: 'get',
  path: '/annotation_layer/{pk}/annotation/',
  tags: ['Annotation Layers'],
  description:
    'Get a list of Annotation layers, use Rison or JSON query parameters for filtering, sorting, pagination and for selecting specific columns and metadata.',
  request: {
    params: z.object({
      pk: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .openapi({
          param: {
            description: 'The annotation layer id for this annotation',
            in: 'path',
            name: 'pk',
            required: true,
            schema: { type: 'integer' },
          },
        }),
    }),
    query: z.object({
      q: z
        .preprocess(
          (val) => {
            if (typeof val !== 'string') return val
            try {
              return JSON.parse(val)
            } catch {
              return val
            }
          },
          GetListSchemaSchema.openapi({
            param: {
              content: {
                'application/json': { schema: { $ref: '#/components/schemas/get_list_schema' } },
              },
              in: 'query',
              name: 'q',
              required: false,
            },
          }),
        )
        .exactOptional(),
    }),
  },
  responses: {
    200: {
      description: 'Items from Annotations',
      content: {
        'application/json': {
          schema: z
            .object({
              count: z
                .number()
                .exactOptional()
                .openapi({ description: 'The total record count on the backend' }),
              ids: z
                .array(z.string())
                .exactOptional()
                .openapi({ description: 'A list of annotation ids' }),
              result: z
                .array(AnnotationRestApiGetListSchema)
                .exactOptional()
                .openapi({ description: 'The result from the get list query' }),
            })
            .openapi({ required: [] }),
        },
      },
    },
    400: _400Response,
    401: _401Response,
    422: _422Response,
    500: _500Response,
  },
  security: [{ jwt: [] }],
})

export const postAnnotationLayerPkAnnotationIndexRoute = createRoute({
  method: 'post',
  path: '/annotation_layer/{pk}/annotation/',
  tags: ['Annotation Layers'],
  description: 'Create an Annotation layer',
  request: {
    params: z.object({
      pk: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .openapi({
          param: {
            description: 'The annotation layer pk for this annotation',
            in: 'path',
            name: 'pk',
            required: true,
            schema: { type: 'integer' },
          },
        }),
    }),
    body: {
      description: 'Annotation schema',
      content: { 'application/json': { schema: AnnotationRestApiPostSchema } },
      required: true,
    },
  },
  responses: {
    201: {
      description: 'Annotation added',
      content: {
        'application/json': {
          schema: z
            .object({
              id: z.number().exactOptional(),
              result: AnnotationRestApiPostSchema.exactOptional(),
            })
            .openapi({ required: [] }),
        },
      },
    },
    400: _400Response,
    401: _401Response,
    404: _404Response,
    500: _500Response,
  },
  security: [{ jwt: [] }],
})

export const deleteAnnotationLayerPkAnnotationIndexRoute = createRoute({
  method: 'delete',
  path: '/annotation_layer/{pk}/annotation/',
  tags: ['Annotation Layers'],
  description: 'Deletes multiple annotation in a bulk operation.',
  request: {
    params: z.object({
      pk: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .openapi({
          param: {
            description: 'The annotation layer pk for this annotation',
            in: 'path',
            name: 'pk',
            required: true,
            schema: { type: 'integer' },
          },
        }),
    }),
    query: z.object({
      q: z
        .preprocess(
          (val) => {
            if (typeof val !== 'string') return val
            try {
              return JSON.parse(val)
            } catch {
              return val
            }
          },
          GetDeleteIdsSchemaSchema.openapi({
            param: {
              content: {
                'application/json': {
                  schema: { $ref: '#/components/schemas/get_delete_ids_schema' },
                },
              },
              in: 'query',
              name: 'q',
              required: false,
            },
          }),
        )
        .exactOptional(),
    }),
  },
  responses: {
    200: {
      description: 'Annotations bulk delete',
      content: {
        'application/json': {
          schema: z.object({ message: z.string().exactOptional() }).openapi({ required: [] }),
        },
      },
    },
    401: _401Response,
    404: _404Response,
    422: _422Response,
    500: _500Response,
  },
  security: [{ jwt: [] }],
})

export const getAnnotationLayerPkAnnotationAnnotationIdRoute = createRoute({
  method: 'get',
  path: '/annotation_layer/{pk}/annotation/{annotation_id}',
  tags: ['Annotation Layers'],
  description: 'Get an Annotation layer',
  request: {
    params: z.object({
      pk: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .openapi({
          param: {
            description: 'The annotation layer pk for this annotation',
            in: 'path',
            name: 'pk',
            required: true,
            schema: { type: 'integer' },
          },
        }),
      annotation_id: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .openapi({
          param: {
            description: 'The annotation pk',
            in: 'path',
            name: 'annotation_id',
            required: true,
            schema: { type: 'integer' },
          },
        }),
    }),
    query: z.object({
      q: z
        .preprocess(
          (val) => {
            if (typeof val !== 'string') return val
            try {
              return JSON.parse(val)
            } catch {
              return val
            }
          },
          GetItemSchemaSchema.openapi({
            param: {
              content: {
                'application/json': { schema: { $ref: '#/components/schemas/get_item_schema' } },
              },
              in: 'query',
              name: 'q',
              required: false,
            },
          }),
        )
        .exactOptional(),
    }),
  },
  responses: {
    200: {
      description: 'Item from Model',
      content: {
        'application/json': {
          schema: z
            .object({
              id: z.string().exactOptional().openapi({ description: 'The item id' }),
              result: AnnotationRestApiGetSchema.exactOptional(),
            })
            .openapi({ required: [] }),
        },
      },
    },
    400: _400Response,
    401: _401Response,
    404: _404Response,
    422: _422Response,
    500: _500Response,
  },
  security: [{ jwt: [] }],
})

export const putAnnotationLayerPkAnnotationAnnotationIdRoute = createRoute({
  method: 'put',
  path: '/annotation_layer/{pk}/annotation/{annotation_id}',
  tags: ['Annotation Layers'],
  description: 'Update an Annotation layer',
  request: {
    params: z.object({
      pk: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .openapi({
          param: {
            description: 'The annotation layer pk for this annotation',
            in: 'path',
            name: 'pk',
            required: true,
            schema: { type: 'integer' },
          },
        }),
      annotation_id: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .openapi({
          param: {
            description: 'The annotation pk for this annotation',
            in: 'path',
            name: 'annotation_id',
            required: true,
            schema: { type: 'integer' },
          },
        }),
    }),
    body: {
      description: 'Annotation schema',
      content: { 'application/json': { schema: AnnotationRestApiPutSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Annotation changed',
      content: {
        'application/json': {
          schema: z
            .object({
              id: z.number().exactOptional(),
              result: AnnotationRestApiPutSchema.exactOptional(),
            })
            .openapi({ required: [] }),
        },
      },
    },
    400: _400Response,
    401: _401Response,
    404: _404Response,
    500: _500Response,
  },
  security: [{ jwt: [] }],
})

export const deleteAnnotationLayerPkAnnotationAnnotationIdRoute = createRoute({
  method: 'delete',
  path: '/annotation_layer/{pk}/annotation/{annotation_id}',
  tags: ['Annotation Layers'],
  description: 'Delete Annotation layer',
  request: {
    params: z.object({
      pk: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .openapi({
          param: {
            description: 'The annotation layer pk for this annotation',
            in: 'path',
            name: 'pk',
            required: true,
            schema: { type: 'integer' },
          },
        }),
      annotation_id: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .openapi({
          param: {
            description: 'The annotation pk for this annotation',
            in: 'path',
            name: 'annotation_id',
            required: true,
            schema: { type: 'integer' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Item deleted',
      content: {
        'application/json': {
          schema: z.object({ message: z.string().exactOptional() }).openapi({ required: [] }),
        },
      },
    },
    404: _404Response,
    422: _422Response,
    500: _500Response,
  },
  security: [{ jwt: [] }],
})

export const getAsyncEventIndexRoute = createRoute({
  method: 'get',
  path: '/async_event/',
  tags: ['AsyncEventsRestApi'],
  description:
    "Reads off of the Redis events stream, using the user's JWT token and optional query params for last event received.",
  request: {
    query: z.object({
      last_id: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Last ID received by the client',
            in: 'query',
            name: 'last_id',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Async event results',
      content: {
        'application/json': {
          schema: z
            .object({
              result: z
                .array(
                  z
                    .object({
                      channel_id: z.string().exactOptional(),
                      errors: z.array(z.object({})).exactOptional(),
                      id: z.string().exactOptional(),
                      job_id: z.string().exactOptional(),
                      result_url: z.string().exactOptional(),
                      status: z.string().exactOptional(),
                      user_id: z.int().exactOptional(),
                    })
                    .openapi({ required: [] }),
                )
                .exactOptional(),
            })
            .openapi({ required: [] }),
        },
      },
    },
    401: _401Response,
    500: _500Response,
  },
  security: [{ jwt: [] }],
})

export const postCachekeyInvalidateRoute = createRoute({
  method: 'post',
  path: '/cachekey/invalidate',
  tags: ['CacheRestApi'],
  description:
    'Takes a list of datasources, finds the associated cache records and invalidates them and removes the database records',
  request: {
    body: {
      description: 'A list of datasources uuid or the tuples of database and datasource names',
      content: { 'application/json': { schema: CacheInvalidationRequestSchemaSchema } },
      required: true,
    },
  },
  responses: {
    201: { description: 'cache was successfully invalidated' },
    400: _400Response,
    500: _500Response,
  },
  security: [{ jwt: [] }],
})

export const getChartIndexRoute = createRoute({
  method: 'get',
  path: '/chart/',
  tags: ['Charts'],
  description:
    'Get a list of charts, use Rison or JSON query parameters for filtering, sorting, pagination and  for selecting specific columns and metadata.',
  request: {
    query: z.object({
      q: z
        .preprocess(
          (val) => {
            if (typeof val !== 'string') return val
            try {
              return JSON.parse(val)
            } catch {
              return val
            }
          },
          GetListSchemaSchema.openapi({
            param: {
              content: {
                'application/json': { schema: { $ref: '#/components/schemas/get_list_schema' } },
              },
              in: 'query',
              name: 'q',
              required: false,
            },
          }),
        )
        .exactOptional(),
    }),
  },
  responses: {
    200: {
      description: 'Items from Model',
      content: {
        'application/json': {
          schema: z
            .object({
              count: z
                .number()
                .exactOptional()
                .openapi({ description: 'The total record count on the backend' }),
              description_columns: z
                .object({
                  column_name: z
                    .string()
                    .exactOptional()
                    .openapi({
                      description:
                        'The description for the column name. Will be translated by babel',
                      example: 'A Nice description for the column',
                    }),
                })
                .exactOptional()
                .openapi({ required: [] }),
              ids: z
                .array(z.string())
                .exactOptional()
                .openapi({
                  description: "A list of item ids, useful when you don't know the column id",
                }),
              label_columns: z
                .object({
                  column_name: z
                    .string()
                    .exactOptional()
                    .openapi({
                      description: 'The label for the column name. Will be translated by babel',
                      example: 'A Nice label for the column',
                    }),
                })
                .exactOptional()
                .openapi({ required: [] }),
              list_columns: z
                .array(z.string())
                .exactOptional()
                .openapi({ description: 'A list of columns' }),
              list_title: z
                .string()
                .exactOptional()
                .openapi({
                  description: 'A title to render. Will be translated by babel',
                  example: 'List Items',
                }),
              order_columns: z
                .array(z.string())
                .exactOptional()
                .openapi({ description: 'A list of allowed columns to sort' }),
              result: z
                .array(ChartRestApiGetListSchema)
                .exactOptional()
                .openapi({ description: 'The result from the get list query' }),
            })
            .openapi({ required: [] }),
        },
      },
    },
    400: _400Response,
    401: _401Response,
    422: _422Response,
    500: _500Response,
  },
  security: [{ jwt: [] }],
})

export const postChartIndexRoute = createRoute({
  method: 'post',
  path: '/chart/',
  tags: ['Charts'],
  description: 'Create a new Chart.',
  request: {
    body: {
      description: 'Chart schema',
      content: { 'application/json': { schema: ChartRestApiPostSchema } },
      required: true,
    },
  },
  responses: {
    201: {
      description: 'Chart added',
      content: {
        'application/json': {
          schema: z
            .object({
              id: z.number().exactOptional(),
              result: ChartRestApiPostSchema.exactOptional(),
            })
            .openapi({ required: [] }),
        },
      },
    },
    400: _400Response,
    401: _401Response,
    422: _422Response,
    500: _500Response,
  },
  security: [{ jwt: [] }],
})

export const deleteChartIndexRoute = createRoute({
  method: 'delete',
  path: '/chart/',
  tags: ['Charts'],
  description: 'Deletes multiple Charts in a bulk operation.',
  request: {
    query: z.object({
      q: z
        .preprocess(
          (val) => {
            if (typeof val !== 'string') return val
            try {
              return JSON.parse(val)
            } catch {
              return val
            }
          },
          GetDeleteIdsSchemaSchema.openapi({
            param: {
              content: {
                'application/json': {
                  schema: { $ref: '#/components/schemas/get_delete_ids_schema' },
                },
              },
              in: 'query',
              name: 'q',
              required: false,
            },
          }),
        )
        .exactOptional(),
    }),
  },
  responses: {
    200: {
      description: 'Charts bulk delete',
      content: {
        'application/json': {
          schema: z.object({ message: z.string().exactOptional() }).openapi({ required: [] }),
        },
      },
    },
    401: _401Response,
    403: _403Response,
    404: _404Response,
    422: _422Response,
    500: _500Response,
  },
  security: [{ jwt: [] }],
})

export const getChartInfoRoute = createRoute({
  method: 'get',
  path: '/chart/_info',
  tags: ['Charts'],
  description: 'Several metadata information about chart API endpoints.',
  request: {
    query: z.object({
      q: z
        .preprocess(
          (val) => {
            if (typeof val !== 'string') return val
            try {
              return JSON.parse(val)
            } catch {
              return val
            }
          },
          GetInfoSchemaSchema.openapi({
            param: {
              content: {
                'application/json': { schema: { $ref: '#/components/schemas/get_info_schema' } },
              },
              in: 'query',
              name: 'q',
              required: false,
            },
          }),
        )
        .exactOptional(),
    }),
  },
  responses: {
    200: {
      description: 'Item from Model',
      content: {
        'application/json': {
          schema: z
            .object({
              add_columns: z.object({}).exactOptional(),
              edit_columns: z.object({}).exactOptional(),
              filters: z
                .object({
                  column_name: z
                    .array(
                      z
                        .object({
                          name: z
                            .string()
                            .exactOptional()
                            .openapi({
                              description: 'The filter name. Will be translated by babel',
                            }),
                          operator: z
                            .string()
                            .exactOptional()
                            .openapi({
                              description: 'The filter operation key to use on list filters',
                            }),
                        })
                        .openapi({ required: [] }),
                    )
                    .exactOptional(),
                })
                .exactOptional()
                .openapi({ required: [] }),
              permissions: z
                .array(z.string())
                .exactOptional()
                .openapi({ description: 'The user permissions for this API resource' }),
            })
            .openapi({ required: [] }),
        },
      },
    },
    400: _400Response,
    401: _401Response,
    422: _422Response,
    500: _500Response,
  },
  security: [{ jwt: [] }],
})

export const postChartDataRoute = createRoute({
  method: 'post',
  path: '/chart/data',
  tags: ['Charts'],
  description:
    'Takes a query context constructed in the client and returns payload data response for the given query.',
  request: {
    body: {
      description:
        'A query context consists of a datasource from which to fetch data and one or many query objects.',
      content: { 'application/json': { schema: ChartDataQueryContextSchemaSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Query result',
      content: { 'application/json': { schema: ChartDataResponseSchemaSchema } },
    },
    202: {
      description: 'Async job details',
      content: { 'application/json': { schema: ChartDataAsyncResponseSchemaSchema } },
    },
    400: _400Response,
    401: _401Response,
    500: _500Response,
  },
  security: [{ jwt: [] }],
})

export const getChartDataCacheKeyRoute = createRoute({
  method: 'get',
  path: '/chart/data/{cache_key}',
  tags: ['Charts'],
  description:
    'Takes a query context cache key and returns payload data response for the given query.',
  request: {
    params: z.object({
      cache_key: z
        .string()
        .openapi({
          param: { in: 'path', name: 'cache_key', required: true, schema: { type: 'string' } },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Query result',
      content: { 'application/json': { schema: ChartDataResponseSchemaSchema } },
    },
    400: _400Response,
    401: _401Response,
    404: _404Response,
    422: _422Response,
    500: _500Response,
  },
  security: [{ jwt: [] }],
})

export const getChartExportIndexRoute = createRoute({
  method: 'get',
  path: '/chart/export/',
  tags: ['Charts'],
  description: 'Exports multiple charts and downloads them as YAML files',
  request: {
    query: z.object({
      q: z
        .preprocess(
          (val) => {
            if (typeof val !== 'string') return val
            try {
              return JSON.parse(val)
            } catch {
              return val
            }
          },
          GetExportIdsSchemaSchema.openapi({
            param: {
              content: {
                'application/json': {
                  schema: { $ref: '#/components/schemas/get_export_ids_schema' },
                },
              },
              in: 'query',
              name: 'q',
              required: false,
            },
          }),
        )
        .exactOptional(),
    }),
  },
  responses: {
    200: {
      description: 'A zip file with chart(s), dataset(s) and database(s) as YAML',
      content: {
        'application/zip': { schema: z.file().openapi({ type: 'string', format: 'binary' }) },
      },
    },
    400: _400Response,
    401: _401Response,
    404: _404Response,
    500: _500Response,
  },
  security: [{ jwt: [] }],
})

export const getChartFavoriteStatusIndexRoute = createRoute({
  method: 'get',
  path: '/chart/favorite_status/',
  tags: ['Charts'],
  description: 'Check favorited dashboards for current user',
  request: {
    query: z.object({
      q: z
        .preprocess(
          (val) => {
            if (typeof val !== 'string') return val
            try {
              return JSON.parse(val)
            } catch {
              return val
            }
          },
          GetFavStarIdsSchema2Schema.openapi({
            param: {
              content: {
                'application/json': {
                  schema: { $ref: '#/components/schemas/get_fav_star_ids_schema2' },
                },
              },
              in: 'query',
              name: 'q',
              required: false,
            },
          }),
        )
        .exactOptional(),
    }),
  },
  responses: {
    200: {
      description: 'None',
      content: { 'application/json': { schema: GetFavStarIdsSchemaSchema } },
    },
    400: _400Response,
    401: _401Response,
    404: _404Response,
    500: _500Response,
  },
  security: [{ jwt: [] }],
})

export const postChartImportIndexRoute = createRoute({
  method: 'post',
  path: '/chart/import/',
  tags: ['Charts'],
  request: {
    body: {
      content: {
        'multipart/form-data': {
          schema: z
            .object({
              formData: z
                .file()
                .exactOptional()
                .openapi({ type: 'string', format: 'binary', description: 'upload file (ZIP)' }),
              overwrite: z
                .preprocess(
                  ((read) => (val: unknown) => {
                    const result = read.safeParse(val)
                    return result.success ? result.data : val
                  })(z.stringbool()),
                  z.boolean(),
                )
                .exactOptional()
                .openapi({ description: 'overwrite existing databases?' }),
              passwords: z
                .string()
                .exactOptional()
                .openapi({ description: 'JSON map of passwords for each file' }),
            })
            .openapi({ required: [] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Chart import result',
      content: {
        'application/json': {
          schema: z.object({ message: z.string().exactOptional() }).openapi({ required: [] }),
        },
      },
    },
    400: _400Response,
    401: _401Response,
    422: _422Response,
    500: _500Response,
  },
  security: [{ jwt: [] }],
})

export const getChartRelatedColumnNameRoute = createRoute({
  method: 'get',
  path: '/chart/related/{column_name}',
  tags: ['Charts'],
  description:
    'Get a list of all possible owners for a chart. Use `owners` has the `column_name` parameter',
  request: {
    params: z.object({
      column_name: z
        .string()
        .openapi({
          param: { in: 'path', name: 'column_name', required: true, schema: { type: 'string' } },
        }),
    }),
    query: z.object({
      q: z
        .preprocess(
          (val) => {
            if (typeof val !== 'string') return val
            try {
              return JSON.parse(val)
            } catch {
              return val
            }
          },
          GetRelatedSchemaSchema.openapi({
            param: {
              content: {
                'application/json': { schema: { $ref: '#/components/schemas/get_related_schema' } },
              },
              in: 'query',
              name: 'q',
              required: false,
            },
          }),
        )
        .exactOptional(),
    }),
  },
  responses: {
    200: {
      description: 'Related column data',
      content: { 'application/json': { schema: RelatedResponseSchemaSchema } },
    },
    400: _400Response,
    401: _401Response,
    404: _404Response,
    500: _500Response,
  },
  security: [{ jwt: [] }],
})

export const getChartPkRoute = createRoute({
  method: 'get',
  path: '/chart/{pk}',
  tags: ['Charts'],
  description: 'Get a chart detail information.',
  request: {
    params: z.object({
      pk: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .openapi({
          param: { in: 'path', name: 'pk', required: true, schema: { type: 'integer' } },
        }),
    }),
    query: z.object({
      q: z
        .preprocess(
          (val) => {
            if (typeof val !== 'string') return val
            try {
              return JSON.parse(val)
            } catch {
              return val
            }
          },
          GetItemSchemaSchema.openapi({
            param: {
              content: {
                'application/json': { schema: { $ref: '#/components/schemas/get_item_schema' } },
              },
              in: 'query',
              name: 'q',
              required: false,
            },
          }),
        )
        .exactOptional(),
    }),
  },
  responses: {
    200: {
      description: 'Item from Model',
      content: {
        'application/json': {
          schema: z
            .object({
              description_columns: z
                .object({
                  column_name: z
                    .string()
                    .exactOptional()
                    .openapi({
                      description:
                        'The description for the column name. Will be translated by babel',
                      example: 'A Nice description for the column',
                    }),
                })
                .exactOptional()
                .openapi({ required: [] }),
              id: z.string().exactOptional().openapi({ description: 'The item id' }),
              label_columns: z
                .object({
                  column_name: z
                    .string()
                    .exactOptional()
                    .openapi({
                      description: 'The label for the column name. Will be translated by babel',
                      example: 'A Nice label for the column',
                    }),
                })
                .exactOptional()
                .openapi({ required: [] }),
              result: ChartRestApiGetSchema.exactOptional(),
              show_columns: z
                .array(z.string())
                .exactOptional()
                .openapi({ description: 'A list of columns' }),
              show_title: z
                .string()
                .exactOptional()
                .openapi({
                  description: 'A title to render. Will be translated by babel',
                  example: 'Show Item Details',
                }),
            })
            .openapi({ required: [] }),
        },
      },
    },
    400: _400Response,
    401: _401Response,
    404: _404Response,
    422: _422Response,
    500: _500Response,
  },
  security: [{ jwt: [] }],
})

export const putChartPkRoute = createRoute({
  method: 'put',
  path: '/chart/{pk}',
  tags: ['Charts'],
  description: 'Changes a Chart.',
  request: {
    params: z.object({
      pk: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .openapi({
          param: { in: 'path', name: 'pk', required: true, schema: { type: 'integer' } },
        }),
    }),
    body: {
      description: 'Chart schema',
      content: { 'application/json': { schema: ChartRestApiPutSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Chart changed',
      content: {
        'application/json': {
          schema: z
            .object({
              id: z.number().exactOptional(),
              result: ChartRestApiPutSchema.exactOptional(),
            })
            .openapi({ required: [] }),
        },
      },
    },
    400: _400Response,
    401: _401Response,
    403: _403Response,
    404: _404Response,
    422: _422Response,
    500: _500Response,
  },
  security: [{ jwt: [] }],
})

export const deleteChartPkRoute = createRoute({
  method: 'delete',
  path: '/chart/{pk}',
  tags: ['Charts'],
  description: 'Deletes a Chart.',
  request: {
    params: z.object({
      pk: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .openapi({
          param: { in: 'path', name: 'pk', required: true, schema: { type: 'integer' } },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Chart delete',
      content: {
        'application/json': {
          schema: z.object({ message: z.string().exactOptional() }).openapi({ required: [] }),
        },
      },
    },
    401: _401Response,
    403: _403Response,
    404: _404Response,
    422: _422Response,
    500: _500Response,
  },
  security: [{ jwt: [] }],
})

export const getChartPkCacheScreenshotIndexRoute = createRoute({
  method: 'get',
  path: '/chart/{pk}/cache_screenshot/',
  tags: ['Charts'],
  description: 'Compute and cache a screenshot.',
  request: {
    params: z.object({
      pk: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .openapi({
          param: { in: 'path', name: 'pk', required: true, schema: { type: 'integer' } },
        }),
    }),
    query: z.object({
      q: z
        .preprocess(
          (val) => {
            if (typeof val !== 'string') return val
            try {
              return JSON.parse(val)
            } catch {
              return val
            }
          },
          ScreenshotQuerySchemaSchema.openapi({
            param: {
              content: {
                'application/json': {
                  schema: { $ref: '#/components/schemas/screenshot_query_schema' },
                },
              },
              in: 'query',
              name: 'q',
              required: false,
            },
          }),
        )
        .exactOptional(),
    }),
  },
  responses: {
    200: {
      description: 'Chart async result',
      content: { 'application/json': { schema: ChartCacheScreenshotResponseSchemaSchema } },
    },
    302: { description: 'Redirects to the current digest' },
    400: _400Response,
    401: _401Response,
    404: _404Response,
    500: _500Response,
  },
  security: [{ jwt: [] }],
})

export const getChartPkDataIndexRoute = createRoute({
  method: 'get',
  path: '/chart/{pk}/data/',
  tags: ['Charts'],
  description:
    'Takes a chart ID and uses the query context stored when the chart was saved to return payload data response.',
  request: {
    params: z.object({
      pk: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .openapi({
          param: {
            description: 'The chart ID',
            in: 'path',
            name: 'pk',
            required: true,
            schema: { type: 'integer' },
          },
        }),
    }),
    query: z.object({
      format: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'The format in which the data should be returned',
            in: 'query',
            name: 'format',
            schema: { type: 'string' },
            required: false,
          },
        }),
      type: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'The type in which the data should be returned',
            in: 'query',
            name: 'type',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Query result',
      content: { 'application/json': { schema: ChartDataResponseSchemaSchema } },
    },
    202: {
      description: 'Async job details',
      content: { 'application/json': { schema: ChartDataAsyncResponseSchemaSchema } },
    },
    400: _400Response,
    401: _401Response,
    500: _500Response,
  },
  security: [{ jwt: [] }],
})

export const getChartPkScreenshotDigestIndexRoute = createRoute({
  method: 'get',
  path: '/chart/{pk}/screenshot/{digest}/',
  tags: ['Charts'],
  description: 'Get a computed screenshot from cache.',
  request: {
    params: z.object({
      pk: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .openapi({
          param: { in: 'path', name: 'pk', required: true, schema: { type: 'integer' } },
        }),
      digest: z
        .string()
        .openapi({
          param: { in: 'path', name: 'digest', required: true, schema: { type: 'string' } },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Chart thumbnail image',
      content: { 'image/*': { schema: z.file().openapi({ type: 'string', format: 'binary' }) } },
    },
    302: { description: 'Redirects to the current digest' },
    400: _400Response,
    401: _401Response,
    404: _404Response,
    500: _500Response,
  },
  security: [{ jwt: [] }],
})

export const getChartPkThumbnailDigestIndexRoute = createRoute({
  method: 'get',
  path: '/chart/{pk}/thumbnail/{digest}/',
  tags: ['Charts'],
  description: 'Compute or get already computed chart thumbnail from cache.',
  request: {
    params: z.object({
      pk: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .openapi({
          param: { in: 'path', name: 'pk', required: true, schema: { type: 'integer' } },
        }),
      digest: z
        .string()
        .openapi({
          param: { in: 'path', name: 'digest', required: true, schema: { type: 'string' } },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Chart thumbnail image',
      content: { 'image/*': { schema: z.file().openapi({ type: 'string', format: 'binary' }) } },
    },
    302: { description: 'Redirects to the current digest' },
    400: _400Response,
    401: _401Response,
    404: _404Response,
    500: _500Response,
  },
  security: [{ jwt: [] }],
})

export const getCssTemplateIndexRoute = createRoute({
  method: 'get',
  path: '/css_template/',
  tags: ['CSS Templates'],
  description:
    'Get a list of CSS templates, use Rison or JSON query parameters for filtering, sorting, pagination and for selecting specific columns and metadata.',
  request: {
    query: z.object({
      q: z
        .preprocess(
          (val) => {
            if (typeof val !== 'string') return val
            try {
              return JSON.parse(val)
            } catch {
              return val
            }
          },
          GetListSchemaSchema.openapi({
            param: {
              content: {
                'application/json': { schema: { $ref: '#/components/schemas/get_list_schema' } },
              },
              in: 'query',
              name: 'q',
              required: false,
            },
          }),
        )
        .exactOptional(),
    }),
  },
  responses: {
    200: {
      description: 'Items from Model',
      content: {
        'application/json': {
          schema: z
            .object({
              count: z
                .number()
                .exactOptional()
                .openapi({ description: 'The total record count on the backend' }),
              description_columns: z
                .object({
                  column_name: z
                    .string()
                    .exactOptional()
                    .openapi({
                      description:
                        'The description for the column name. Will be translated by babel',
                      example: 'A Nice description for the column',
                    }),
                })
                .exactOptional()
                .openapi({ required: [] }),
              ids: z
                .array(z.string())
                .exactOptional()
                .openapi({
                  description: "A list of item ids, useful when you don't know the column id",
                }),
              label_columns: z
                .object({
                  column_name: z
                    .string()
                    .exactOptional()
                    .openapi({
                      description: 'The label for the column name. Will be translated by babel',
                      example: 'A Nice label for the column',
                    }),
                })
                .exactOptional()
                .openapi({ required: [] }),
              list_columns: z
                .array(z.string())
                .exactOptional()
                .openapi({ description: 'A list of columns' }),
              list_title: z
                .string()
                .exactOptional()
                .openapi({
                  description: 'A title to render. Will be translated by babel',
                  example: 'List Items',
                }),
              order_columns: z
                .array(z.string())
                .exactOptional()
                .openapi({ description: 'A list of allowed columns to sort' }),
              result: z
                .array(CssTemplateRestApiGetListSchema)
                .exactOptional()
                .openapi({ description: 'The result from the get list query' }),
            })
            .openapi({ required: [] }),
        },
      },
    },
    400: _400Response,
    401: _401Response,
    422: _422Response,
    500: _500Response,
  },
  security: [{ jwt: [] }],
})

export const postCssTemplateIndexRoute = createRoute({
  method: 'post',
  path: '/css_template/',
  tags: ['CSS Templates'],
  description: 'Create a CSS template',
  request: {
    body: {
      description: 'Model schema',
      content: { 'application/json': { schema: CssTemplateRestApiPostSchema } },
      required: true,
    },
  },
  responses: {
    201: {
      description: 'Item inserted',
      content: {
        'application/json': {
          schema: z
            .object({
              id: z.string().exactOptional(),
              result: CssTemplateRestApiPostSchema.exactOptional(),
            })
            .openapi({ required: [] }),
        },
      },
    },
    400: _400Response,
    401: _401Response,
    422: _422Response,
    500: _500Response,
  },
  security: [{ jwt: [] }],
})

export const deleteCssTemplateIndexRoute = createRoute({
  method: 'delete',
  path: '/css_template/',
  tags: ['CSS Templates'],
  description: 'Deletes multiple css templates in a bulk operation.',
  request: {
    query: z.object({
      q: z
        .preprocess(
          (val) => {
            if (typeof val !== 'string') return val
            try {
              return JSON.parse(val)
            } catch {
              return val
            }
          },
          GetDeleteIdsSchemaSchema.openapi({
            param: {
              content: {
                'application/json': {
                  schema: { $ref: '#/components/schemas/get_delete_ids_schema' },
                },
              },
              in: 'query',
              name: 'q',
              required: false,
            },
          }),
        )
        .exactOptional(),
    }),
  },
  responses: {
    200: {
      description: 'CSS templates bulk delete',
      content: {
        'application/json': {
          schema: z.object({ message: z.string().exactOptional() }).openapi({ required: [] }),
        },
      },
    },
    401: _401Response,
    404: _404Response,
    422: _422Response,
    500: _500Response,
  },
  security: [{ jwt: [] }],
})

export const getCssTemplateInfoRoute = createRoute({
  method: 'get',
  path: '/css_template/_info',
  tags: ['CSS Templates'],
  description: 'Get metadata information about this API resource',
  request: {
    query: z.object({
      q: z
        .preprocess(
          (val) => {
            if (typeof val !== 'string') return val
            try {
              return JSON.parse(val)
            } catch {
              return val
            }
          },
          GetInfoSchemaSchema.openapi({
            param: {
              content: {
                'application/json': { schema: { $ref: '#/components/schemas/get_info_schema' } },
              },
              in: 'query',
              name: 'q',
              required: false,
            },
          }),
        )
        .exactOptional(),
    }),
  },
  responses: {
    200: {
      description: 'Item from Model',
      content: {
        'application/json': {
          schema: z
            .object({
              add_columns: z.object({}).exactOptional(),
              edit_columns: z.object({}).exactOptional(),
              filters: z
                .object({
                  column_name: z
                    .array(
                      z
                        .object({
                          name: z
                            .string()
                            .exactOptional()
                            .openapi({
                              description: 'The filter name. Will be translated by babel',
                            }),
                          operator: z
                            .string()
                            .exactOptional()
                            .openapi({
                              description: 'The filter operation key to use on list filters',
                            }),
                        })
                        .openapi({ required: [] }),
                    )
                    .exactOptional(),
                })
                .exactOptional()
                .openapi({ required: [] }),
              permissions: z
                .array(z.string())
                .exactOptional()
                .openapi({ description: 'The user permissions for this API resource' }),
            })
            .openapi({ required: [] }),
        },
      },
    },
    400: _400Response,
    401: _401Response,
    422: _422Response,
    500: _500Response,
  },
  security: [{ jwt: [] }],
})

export const getCssTemplateRelatedColumnNameRoute = createRoute({
  method: 'get',
  path: '/css_template/related/{column_name}',
  tags: ['CSS Templates'],
  request: {
    params: z.object({
      column_name: z
        .string()
        .openapi({
          param: { in: 'path', name: 'column_name', required: true, schema: { type: 'string' } },
        }),
    }),
    query: z.object({
      q: z
        .preprocess(
          (val) => {
            if (typeof val !== 'string') return val
            try {
              return JSON.parse(val)
            } catch {
              return val
            }
          },
          GetRelatedSchemaSchema.openapi({
            param: {
              content: {
                'application/json': { schema: { $ref: '#/components/schemas/get_related_schema' } },
              },
              in: 'query',
              name: 'q',
              required: false,
            },
          }),
        )
        .exactOptional(),
    }),
  },
  responses: {
    200: {
      description: 'Related column data',
      content: { 'application/json': { schema: RelatedResponseSchemaSchema } },
    },
    400: _400Response,
    401: _401Response,
    404: _404Response,
    500: _500Response,
  },
  security: [{ jwt: [] }],
})

export const getCssTemplatePkRoute = createRoute({
  method: 'get',
  path: '/css_template/{pk}',
  tags: ['CSS Templates'],
  description: 'Get a CSS template',
  request: {
    params: z.object({
      pk: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .openapi({
          param: { in: 'path', name: 'pk', required: true, schema: { type: 'integer' } },
        }),
    }),
    query: z.object({
      q: z
        .preprocess(
          (val) => {
            if (typeof val !== 'string') return val
            try {
              return JSON.parse(val)
            } catch {
              return val
            }
          },
          GetItemSchemaSchema.openapi({
            param: {
              content: {
                'application/json': { schema: { $ref: '#/components/schemas/get_item_schema' } },
              },
              in: 'query',
              name: 'q',
              required: false,
            },
          }),
        )
        .exactOptional(),
    }),
  },
  responses: {
    200: {
      description: 'Item from Model',
      content: {
        'application/json': {
          schema: z
            .object({
              description_columns: z
                .object({
                  column_name: z
                    .string()
                    .exactOptional()
                    .openapi({
                      description:
                        'The description for the column name. Will be translated by babel',
                      example: 'A Nice description for the column',
                    }),
                })
                .exactOptional()
                .openapi({ required: [] }),
              id: z.string().exactOptional().openapi({ description: 'The item id' }),
              label_columns: z
                .object({
                  column_name: z
                    .string()
                    .exactOptional()
                    .openapi({
                      description: 'The label for the column name. Will be translated by babel',
                      example: 'A Nice label for the column',
                    }),
                })
                .exactOptional()
                .openapi({ required: [] }),
              result: CssTemplateRestApiGetSchema.exactOptional(),
              show_columns: z
                .array(z.string())
                .exactOptional()
                .openapi({ description: 'A list of columns' }),
              show_title: z
                .string()
                .exactOptional()
                .openapi({
                  description: 'A title to render. Will be translated by babel',
                  example: 'Show Item Details',
                }),
            })
            .openapi({ required: [] }),
        },
      },
    },
    400: _400Response,
    401: _401Response,
    404: _404Response,
    422: _422Response,
    500: _500Response,
  },
  security: [{ jwt: [] }],
})

export const putCssTemplatePkRoute = createRoute({
  method: 'put',
  path: '/css_template/{pk}',
  tags: ['CSS Templates'],
  description: 'Update a CSS template',
  request: {
    params: z.object({
      pk: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .openapi({
          param: { in: 'path', name: 'pk', required: true, schema: { type: 'integer' } },
        }),
    }),
    body: {
      description: 'Model schema',
      content: { 'application/json': { schema: CssTemplateRestApiPutSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Item changed',
      content: {
        'application/json': {
          schema: z
            .object({ result: CssTemplateRestApiPutSchema.exactOptional() })
            .openapi({ required: [] }),
        },
      },
    },
    400: _400Response,
    401: _401Response,
    404: _404Response,
    422: _422Response,
    500: _500Response,
  },
  security: [{ jwt: [] }],
})

export const deleteCssTemplatePkRoute = createRoute({
  method: 'delete',
  path: '/css_template/{pk}',
  tags: ['CSS Templates'],
  description: 'Delete CSS template',
  request: {
    params: z.object({
      pk: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .openapi({
          param: { in: 'path', name: 'pk', required: true, schema: { type: 'integer' } },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Item deleted',
      content: {
        'application/json': {
          schema: z.object({ message: z.string().exactOptional() }).openapi({ required: [] }),
        },
      },
    },
    404: _404Response,
    422: _422Response,
    500: _500Response,
  },
  security: [{ jwt: [] }],
})

export const getDashboardIndexRoute = createRoute({
  method: 'get',
  path: '/dashboard/',
  tags: ['Dashboards'],
  description:
    'Get a list of dashboards, use Rison or JSON query parameters for filtering, sorting, pagination and  for selecting specific columns and metadata.',
  request: {
    query: z.object({
      q: z
        .preprocess(
          (val) => {
            if (typeof val !== 'string') return val
            try {
              return JSON.parse(val)
            } catch {
              return val
            }
          },
          GetListSchemaSchema.openapi({
            param: {
              content: {
                'application/json': { schema: { $ref: '#/components/schemas/get_list_schema' } },
              },
              in: 'query',
              name: 'q',
              required: false,
            },
          }),
        )
        .exactOptional(),
    }),
  },
  responses: {
    200: {
      description: 'Items from Model',
      content: {
        'application/json': {
          schema: z
            .object({
              count: z
                .number()
                .exactOptional()
                .openapi({ description: 'The total record count on the backend' }),
              description_columns: z
                .object({
                  column_name: z
                    .string()
                    .exactOptional()
                    .openapi({
                      description:
                        'The description for the column name. Will be translated by babel',
                      example: 'A Nice description for the column',
                    }),
                })
                .exactOptional()
                .openapi({ required: [] }),
              ids: z
                .array(z.string())
                .exactOptional()
                .openapi({
                  description: "A list of item ids, useful when you don't know the column id",
                }),
              label_columns: z
                .object({
                  column_name: z
                    .string()
                    .exactOptional()
                    .openapi({
                      description: 'The label for the column name. Will be translated by babel',
                      example: 'A Nice label for the column',
                    }),
                })
                .exactOptional()
                .openapi({ required: [] }),
              list_columns: z
                .array(z.string())
                .exactOptional()
                .openapi({ description: 'A list of columns' }),
              list_title: z
                .string()
                .exactOptional()
                .openapi({
                  description: 'A title to render. Will be translated by babel',
                  example: 'List Items',
                }),
              order_columns: z
                .array(z.string())
                .exactOptional()
                .openapi({ description: 'A list of allowed columns to sort' }),
              result: z
                .array(DashboardRestApiGetListSchema)
                .exactOptional()
                .openapi({ description: 'The result from the get list query' }),
            })
            .openapi({ required: [] }),
        },
      },
    },
    400: _400Response,
    401: _401Response,
    422: _422Response,
    500: _500Response,
  },
  security: [{ jwt: [] }],
})

export const postDashboardIndexRoute = createRoute({
  method: 'post',
  path: '/dashboard/',
  tags: ['Dashboards'],
  description: 'Create a new Dashboard.',
  request: {
    body: {
      description: 'Dashboard schema',
      content: { 'application/json': { schema: DashboardRestApiPostSchema } },
      required: true,
    },
  },
  responses: {
    201: {
      description: 'Dashboard added',
      content: {
        'application/json': {
          schema: z
            .object({
              id: z.number().exactOptional(),
              result: DashboardRestApiPostSchema.exactOptional(),
            })
            .openapi({ required: [] }),
        },
      },
    },
    302: { description: 'Redirects to the current digest' },
    400: _400Response,
    401: _401Response,
    404: _404Response,
    500: _500Response,
  },
  security: [{ jwt: [] }],
})

export const deleteDashboardIndexRoute = createRoute({
  method: 'delete',
  path: '/dashboard/',
  tags: ['Dashboards'],
  description: 'Deletes multiple Dashboards in a bulk operation.',
  request: {
    query: z.object({
      q: z
        .preprocess(
          (val) => {
            if (typeof val !== 'string') return val
            try {
              return JSON.parse(val)
            } catch {
              return val
            }
          },
          GetDeleteIdsSchemaSchema.openapi({
            param: {
              content: {
                'application/json': {
                  schema: { $ref: '#/components/schemas/get_delete_ids_schema' },
                },
              },
              in: 'query',
              name: 'q',
              required: false,
            },
          }),
        )
        .exactOptional(),
    }),
  },
  responses: {
    200: {
      description: 'Dashboard bulk delete',
      content: {
        'application/json': {
          schema: z.object({ message: z.string().exactOptional() }).openapi({ required: [] }),
        },
      },
    },
    401: _401Response,
    403: _403Response,
    404: _404Response,
    422: _422Response,
    500: _500Response,
  },
  security: [{ jwt: [] }],
})

export const getDashboardInfoRoute = createRoute({
  method: 'get',
  path: '/dashboard/_info',
  tags: ['Dashboards'],
  description: 'Several metadata information about dashboard API endpoints.',
  request: {
    query: z.object({
      q: z
        .preprocess(
          (val) => {
            if (typeof val !== 'string') return val
            try {
              return JSON.parse(val)
            } catch {
              return val
            }
          },
          GetInfoSchemaSchema.openapi({
            param: {
              content: {
                'application/json': { schema: { $ref: '#/components/schemas/get_info_schema' } },
              },
              in: 'query',
              name: 'q',
              required: false,
            },
          }),
        )
        .exactOptional(),
    }),
  },
  responses: {
    200: {
      description: 'Item from Model',
      content: {
        'application/json': {
          schema: z
            .object({
              add_columns: z.object({}).exactOptional(),
              edit_columns: z.object({}).exactOptional(),
              filters: z
                .object({
                  column_name: z
                    .array(
                      z
                        .object({
                          name: z
                            .string()
                            .exactOptional()
                            .openapi({
                              description: 'The filter name. Will be translated by babel',
                            }),
                          operator: z
                            .string()
                            .exactOptional()
                            .openapi({
                              description: 'The filter operation key to use on list filters',
                            }),
                        })
                        .openapi({ required: [] }),
                    )
                    .exactOptional(),
                })
                .exactOptional()
                .openapi({ required: [] }),
              permissions: z
                .array(z.string())
                .exactOptional()
                .openapi({ description: 'The user permissions for this API resource' }),
            })
            .openapi({ required: [] }),
        },
      },
    },
    400: _400Response,
    401: _401Response,
    422: _422Response,
    500: _500Response,
  },
  security: [{ jwt: [] }],
})

export const getDashboardExportIndexRoute = createRoute({
  method: 'get',
  path: '/dashboard/export/',
  tags: ['Dashboards'],
  description: 'Exports multiple Dashboards and downloads them as YAML files.',
  request: {
    query: z.object({
      q: z
        .preprocess(
          (val) => {
            if (typeof val !== 'string') return val
            try {
              return JSON.parse(val)
            } catch {
              return val
            }
          },
          GetExportIdsSchemaSchema.openapi({
            param: {
              content: {
                'application/json': {
                  schema: { $ref: '#/components/schemas/get_export_ids_schema' },
                },
              },
              in: 'query',
              name: 'q',
              required: false,
            },
          }),
        )
        .exactOptional(),
    }),
  },
  responses: {
    200: { description: 'Dashboard export', content: { 'text/plain': { schema: z.string() } } },
    400: _400Response,
    401: _401Response,
    404: _404Response,
    422: _422Response,
    500: _500Response,
  },
  security: [{ jwt: [] }],
})

export const getDashboardFavoriteStatusIndexRoute = createRoute({
  method: 'get',
  path: '/dashboard/favorite_status/',
  tags: ['Dashboards'],
  description: 'Check favorited dashboards for current user',
  request: {
    query: z.object({
      q: z
        .preprocess(
          (val) => {
            if (typeof val !== 'string') return val
            try {
              return JSON.parse(val)
            } catch {
              return val
            }
          },
          GetFavStarIdsSchema2Schema.openapi({
            param: {
              content: {
                'application/json': {
                  schema: { $ref: '#/components/schemas/get_fav_star_ids_schema2' },
                },
              },
              in: 'query',
              name: 'q',
              required: false,
            },
          }),
        )
        .exactOptional(),
    }),
  },
  responses: {
    200: {
      description: 'None',
      content: { 'application/json': { schema: GetFavStarIdsSchemaSchema } },
    },
    400: _400Response,
    401: _401Response,
    404: _404Response,
    500: _500Response,
  },
  security: [{ jwt: [] }],
})

export const postDashboardImportIndexRoute = createRoute({
  method: 'post',
  path: '/dashboard/import/',
  tags: ['Dashboards'],
  request: {
    body: {
      content: {
        'multipart/form-data': {
          schema: z
            .object({
              formData: z
                .file()
                .exactOptional()
                .openapi({
                  type: 'string',
                  format: 'binary',
                  description: 'upload file (ZIP or JSON)',
                }),
              overwrite: z
                .preprocess(
                  ((read) => (val: unknown) => {
                    const result = read.safeParse(val)
                    return result.success ? result.data : val
                  })(z.stringbool()),
                  z.boolean(),
                )
                .exactOptional()
                .openapi({ description: 'overwrite existing databases?' }),
              passwords: z
                .string()
                .exactOptional()
                .openapi({ description: 'JSON map of passwords for each file' }),
            })
            .openapi({ required: [] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Dashboard import result',
      content: {
        'application/json': {
          schema: z.object({ message: z.string().exactOptional() }).openapi({ required: [] }),
        },
      },
    },
    400: _400Response,
    401: _401Response,
    422: _422Response,
    500: _500Response,
  },
  security: [{ jwt: [] }],
})

export const getDashboardRelatedColumnNameRoute = createRoute({
  method: 'get',
  path: '/dashboard/related/{column_name}',
  tags: ['Dashboards'],
  description: 'Get a list of all possible owners for a dashboard.',
  request: {
    params: z.object({
      column_name: z
        .string()
        .openapi({
          param: { in: 'path', name: 'column_name', required: true, schema: { type: 'string' } },
        }),
    }),
    query: z.object({
      q: z
        .preprocess(
          (val) => {
            if (typeof val !== 'string') return val
            try {
              return JSON.parse(val)
            } catch {
              return val
            }
          },
          GetRelatedSchemaSchema.openapi({
            param: {
              content: {
                'application/json': { schema: { $ref: '#/components/schemas/get_related_schema' } },
              },
              in: 'query',
              name: 'q',
              required: false,
            },
          }),
        )
        .exactOptional(),
    }),
  },
  responses: {
    200: {
      description: 'Related column data',
      content: { 'application/json': { schema: RelatedResponseSchemaSchema } },
    },
    400: _400Response,
    401: _401Response,
    404: _404Response,
    500: _500Response,
  },
  security: [{ jwt: [] }],
})

export const getDashboardIdOrSlugRoute = createRoute({
  method: 'get',
  path: '/dashboard/{id_or_slug}',
  tags: ['Dashboards'],
  description: 'Get a dashboard detail information.',
  request: {
    params: z.object({
      id_or_slug: z
        .string()
        .openapi({
          param: {
            description: 'Either the id of the dashboard, or its slug',
            in: 'path',
            name: 'id_or_slug',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Dashboard',
      content: {
        'application/json': {
          schema: z
            .object({ result: DashboardGetResponseSchemaSchema.exactOptional() })
            .openapi({ required: [] }),
        },
      },
    },
    302: { description: 'Redirects to the current digest' },
    400: _400Response,
    401: _401Response,
    404: _404Response,
  },
  security: [{ jwt: [] }],
})

export const getDashboardIdOrSlugChartsRoute = createRoute({
  method: 'get',
  path: '/dashboard/{id_or_slug}/charts',
  tags: ['Dashboards'],
  description: 'Get the chart definitions for a given dashboard',
  request: {
    params: z.object({
      id_or_slug: z
        .string()
        .openapi({
          param: { in: 'path', name: 'id_or_slug', required: true, schema: { type: 'string' } },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Dashboard chart definitions',
      content: {
        'application/json': {
          schema: z
            .object({ result: z.array(ChartEntityResponseSchemaSchema).exactOptional() })
            .openapi({ required: [] }),
        },
      },
    },
    302: { description: 'Redirects to the current digest' },
    400: _400Response,
    401: _401Response,
    404: _404Response,
  },
  security: [{ jwt: [] }],
})

export const getDashboardIdOrSlugDatasetsRoute = createRoute({
  method: 'get',
  path: '/dashboard/{id_or_slug}/datasets',
  tags: ['Dashboards'],
  description:
    "Returns a list of a dashboard's datasets. Each dataset includes only the information necessary to render the dashboard's charts.",
  request: {
    params: z.object({
      id_or_slug: z
        .string()
        .openapi({
          param: {
            description: 'Either the id of the dashboard, or its slug',
            in: 'path',
            name: 'id_or_slug',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Dashboard dataset definitions',
      content: {
        'application/json': {
          schema: z
            .object({ result: z.array(DashboardDatasetSchemaSchema).exactOptional() })
            .openapi({ required: [] }),
        },
      },
    },
    302: { description: 'Redirects to the current digest' },
    400: _400Response,
    401: _401Response,
    404: _404Response,
  },
  security: [{ jwt: [] }],
})

export const putDashboardPkRoute = createRoute({
  method: 'put',
  path: '/dashboard/{pk}',
  tags: ['Dashboards'],
  description: 'Changes a Dashboard.',
  request: {
    params: z.object({
      pk: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .openapi({
          param: { in: 'path', name: 'pk', required: true, schema: { type: 'integer' } },
        }),
    }),
    body: {
      description: 'Dashboard schema',
      content: { 'application/json': { schema: DashboardRestApiPutSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Dashboard changed',
      content: {
        'application/json': {
          schema: z
            .object({
              id: z.number().exactOptional(),
              result: DashboardRestApiPutSchema.exactOptional(),
            })
            .openapi({ required: [] }),
        },
      },
    },
    400: _400Response,
    401: _401Response,
    403: _403Response,
    404: _404Response,
    422: _422Response,
    500: _500Response,
  },
  security: [{ jwt: [] }],
})

export const deleteDashboardPkRoute = createRoute({
  method: 'delete',
  path: '/dashboard/{pk}',
  tags: ['Dashboards'],
  description: 'Deletes a Dashboard.',
  request: {
    params: z.object({
      pk: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .openapi({
          param: { in: 'path', name: 'pk', required: true, schema: { type: 'integer' } },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Dashboard deleted',
      content: {
        'application/json': {
          schema: z.object({ message: z.string().exactOptional() }).openapi({ required: [] }),
        },
      },
    },
    401: _401Response,
    403: _403Response,
    404: _404Response,
    422: _422Response,
    500: _500Response,
  },
  security: [{ jwt: [] }],
})

export const getDashboardPkThumbnailDigestIndexRoute = createRoute({
  method: 'get',
  path: '/dashboard/{pk}/thumbnail/{digest}/',
  tags: ['Dashboards'],
  description: 'Compute async or get already computed dashboard thumbnail from cache.',
  request: {
    params: z.object({
      pk: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .openapi({
          param: { in: 'path', name: 'pk', required: true, schema: { type: 'integer' } },
        }),
      digest: z
        .string()
        .openapi({
          param: {
            description: 'A hex digest that makes this dashboard unique',
            in: 'path',
            name: 'digest',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      q: z
        .preprocess(
          (val) => {
            if (typeof val !== 'string') return val
            try {
              return JSON.parse(val)
            } catch {
              return val
            }
          },
          ThumbnailQuerySchemaSchema.openapi({
            param: {
              content: {
                'application/json': {
                  schema: { $ref: '#/components/schemas/thumbnail_query_schema' },
                },
              },
              in: 'query',
              name: 'q',
              required: false,
            },
          }),
        )
        .exactOptional(),
    }),
  },
  responses: {
    200: {
      description: 'Dashboard thumbnail image',
      content: { 'image/*': { schema: z.file().openapi({ type: 'string', format: 'binary' }) } },
    },
    202: {
      description: 'Thumbnail does not exist on cache, fired async to compute',
      content: {
        'application/json': {
          schema: z.object({ message: z.string().exactOptional() }).openapi({ required: [] }),
        },
      },
    },
    401: _401Response,
    404: _404Response,
    422: _422Response,
    500: _500Response,
  },
  security: [{ jwt: [] }],
})

export const getDatabaseIndexRoute = createRoute({
  method: 'get',
  path: '/database/',
  tags: ['Database'],
  description: 'Get a list of models',
  request: {
    query: z.object({
      q: z
        .preprocess(
          (val) => {
            if (typeof val !== 'string') return val
            try {
              return JSON.parse(val)
            } catch {
              return val
            }
          },
          GetListSchemaSchema.openapi({
            param: {
              content: {
                'application/json': { schema: { $ref: '#/components/schemas/get_list_schema' } },
              },
              in: 'query',
              name: 'q',
              required: false,
            },
          }),
        )
        .exactOptional(),
    }),
  },
  responses: {
    200: {
      description: 'Items from Model',
      content: {
        'application/json': {
          schema: z
            .object({
              count: z
                .number()
                .exactOptional()
                .openapi({ description: 'The total record count on the backend' }),
              description_columns: z
                .object({
                  column_name: z
                    .string()
                    .exactOptional()
                    .openapi({
                      description:
                        'The description for the column name. Will be translated by babel',
                      example: 'A Nice description for the column',
                    }),
                })
                .exactOptional()
                .openapi({ required: [] }),
              ids: z
                .array(z.string())
                .exactOptional()
                .openapi({
                  description: "A list of item ids, useful when you don't know the column id",
                }),
              label_columns: z
                .object({
                  column_name: z
                    .string()
                    .exactOptional()
                    .openapi({
                      description: 'The label for the column name. Will be translated by babel',
                      example: 'A Nice label for the column',
                    }),
                })
                .exactOptional()
                .openapi({ required: [] }),
              list_columns: z
                .array(z.string())
                .exactOptional()
                .openapi({ description: 'A list of columns' }),
              list_title: z
                .string()
                .exactOptional()
                .openapi({
                  description: 'A title to render. Will be translated by babel',
                  example: 'List Items',
                }),
              order_columns: z
                .array(z.string())
                .exactOptional()
                .openapi({ description: 'A list of allowed columns to sort' }),
              result: z
                .array(DatabaseRestApiGetListSchema)
                .exactOptional()
                .openapi({ description: 'The result from the get list query' }),
            })
            .openapi({ required: [] }),
        },
      },
    },
    400: _400Response,
    401: _401Response,
    422: _422Response,
    500: _500Response,
  },
  security: [{ jwt: [] }],
})

export const postDatabaseIndexRoute = createRoute({
  method: 'post',
  path: '/database/',
  tags: ['Database'],
  description: 'Create a new Database.',
  request: {
    body: {
      description: 'Database schema',
      content: { 'application/json': { schema: DatabaseRestApiPostSchema } },
      required: true,
    },
  },
  responses: {
    201: {
      description: 'Database added',
      content: {
        'application/json': {
          schema: z
            .object({
              id: z.number().exactOptional(),
              result: DatabaseRestApiPostSchema.exactOptional(),
            })
            .openapi({ required: [] }),
        },
      },
    },
    302: { description: 'Redirects to the current digest' },
    400: _400Response,
    401: _401Response,
    404: _404Response,
    500: _500Response,
  },
  security: [{ jwt: [] }],
})

export const getDatabaseInfoRoute = createRoute({
  method: 'get',
  path: '/database/_info',
  tags: ['Database'],
  description: 'Get metadata information about this API resource',
  request: {
    query: z.object({
      q: z
        .preprocess(
          (val) => {
            if (typeof val !== 'string') return val
            try {
              return JSON.parse(val)
            } catch {
              return val
            }
          },
          GetInfoSchemaSchema.openapi({
            param: {
              content: {
                'application/json': { schema: { $ref: '#/components/schemas/get_info_schema' } },
              },
              in: 'query',
              name: 'q',
              required: false,
            },
          }),
        )
        .exactOptional(),
    }),
  },
  responses: {
    200: {
      description: 'Item from Model',
      content: {
        'application/json': {
          schema: z
            .object({
              add_columns: z.object({}).exactOptional(),
              edit_columns: z.object({}).exactOptional(),
              filters: z
                .object({
                  column_name: z
                    .array(
                      z
                        .object({
                          name: z
                            .string()
                            .exactOptional()
                            .openapi({
                              description: 'The filter name. Will be translated by babel',
                            }),
                          operator: z
                            .string()
                            .exactOptional()
                            .openapi({
                              description: 'The filter operation key to use on list filters',
                            }),
                        })
                        .openapi({ required: [] }),
                    )
                    .exactOptional(),
                })
                .exactOptional()
                .openapi({ required: [] }),
              permissions: z
                .array(z.string())
                .exactOptional()
                .openapi({ description: 'The user permissions for this API resource' }),
            })
            .openapi({ required: [] }),
        },
      },
    },
    400: _400Response,
    401: _401Response,
    422: _422Response,
    500: _500Response,
  },
  security: [{ jwt: [] }],
})

export const getDatabaseAvailableIndexRoute = createRoute({
  method: 'get',
  path: '/database/available/',
  tags: ['Database'],
  description: 'Get names of databases currently available',
  responses: {
    200: {
      description: 'Database names',
      content: {
        'application/json': {
          schema: z.array(
            z
              .object({
                available_drivers: z
                  .array(z.string())
                  .exactOptional()
                  .openapi({ description: 'Installed drivers for the engine' }),
                default_driver: z
                  .string()
                  .exactOptional()
                  .openapi({ description: 'Default driver for the engine' }),
                engine: z
                  .string()
                  .exactOptional()
                  .openapi({ description: 'Name of the SQLAlchemy engine' }),
                name: z.string().exactOptional().openapi({ description: 'Name of the database' }),
                parameters: z
                  .object({})
                  .exactOptional()
                  .openapi({ description: 'JSON schema defining the needed parameters' }),
                preferred: z
                  .boolean()
                  .exactOptional()
                  .openapi({ description: 'Is the database preferred?' }),
                sqlalchemy_uri_placeholder: z
                  .string()
                  .exactOptional()
                  .openapi({ description: 'Example placeholder for the SQLAlchemy URI' }),
              })
              .openapi({ required: [] }),
          ),
        },
      },
    },
    400: _400Response,
    500: _500Response,
  },
  security: [{ jwt: [] }],
})

export const getDatabaseExportIndexRoute = createRoute({
  method: 'get',
  path: '/database/export/',
  tags: ['Database'],
  description: 'Download database(s) and associated dataset(s) as a zip file',
  request: {
    query: z.object({
      q: z
        .preprocess(
          (val) => {
            if (typeof val !== 'string') return val
            try {
              return JSON.parse(val)
            } catch {
              return val
            }
          },
          GetExportIdsSchemaSchema.openapi({
            param: {
              content: {
                'application/json': {
                  schema: { $ref: '#/components/schemas/get_export_ids_schema' },
                },
              },
              in: 'query',
              name: 'q',
              required: false,
            },
          }),
        )
        .exactOptional(),
    }),
  },
  responses: {
    200: {
      description: 'A zip file with database(s) and dataset(s) as YAML',
      content: {
        'application/zip': { schema: z.file().openapi({ type: 'string', format: 'binary' }) },
      },
    },
    401: _401Response,
    404: _404Response,
    500: _500Response,
  },
  security: [{ jwt: [] }],
})

export const postDatabaseImportIndexRoute = createRoute({
  method: 'post',
  path: '/database/import/',
  tags: ['Database'],
  request: {
    body: {
      content: {
        'multipart/form-data': {
          schema: z
            .object({
              formData: z
                .file()
                .exactOptional()
                .openapi({ type: 'string', format: 'binary', description: 'upload file (ZIP)' }),
              overwrite: z
                .preprocess(
                  ((read) => (val: unknown) => {
                    const result = read.safeParse(val)
                    return result.success ? result.data : val
                  })(z.stringbool()),
                  z.boolean(),
                )
                .exactOptional()
                .openapi({ description: 'overwrite existing databases?' }),
              passwords: z
                .string()
                .exactOptional()
                .openapi({ description: 'JSON map of passwords for each file' }),
            })
            .openapi({ required: [] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Database import result',
      content: {
        'application/json': {
          schema: z.object({ message: z.string().exactOptional() }).openapi({ required: [] }),
        },
      },
    },
    400: _400Response,
    401: _401Response,
    422: _422Response,
    500: _500Response,
  },
  security: [{ jwt: [] }],
})

export const postDatabaseTestConnectionRoute = createRoute({
  method: 'post',
  path: '/database/test_connection',
  tags: ['Database'],
  description: 'Tests a database connection',
  request: {
    body: {
      description: 'Database schema',
      content: { 'application/json': { schema: DatabaseTestConnectionSchemaSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Database Test Connection',
      content: {
        'application/json': {
          schema: z.object({ message: z.string().exactOptional() }).openapi({ required: [] }),
        },
      },
    },
    400: _400Response,
    422: _422Response,
    500: _500Response,
  },
  security: [{ jwt: [] }],
})

export const postDatabaseValidateParametersRoute = createRoute({
  method: 'post',
  path: '/database/validate_parameters',
  tags: ['Database'],
  description: 'Validates parameters used to connect to a database',
  request: {
    body: {
      description: 'DB-specific parameters',
      content: { 'application/json': { schema: DatabaseValidateParametersSchemaSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Database Test Connection',
      content: {
        'application/json': {
          schema: z.object({ message: z.string().exactOptional() }).openapi({ required: [] }),
        },
      },
    },
    400: _400Response,
    422: _422Response,
    500: _500Response,
  },
  security: [{ jwt: [] }],
})

export const getDatabasePkRoute = createRoute({
  method: 'get',
  path: '/database/{pk}',
  tags: ['Database'],
  description: 'Get an item model',
  request: {
    params: z.object({
      pk: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .openapi({
          param: { in: 'path', name: 'pk', required: true, schema: { type: 'integer' } },
        }),
    }),
    query: z.object({
      q: z
        .preprocess(
          (val) => {
            if (typeof val !== 'string') return val
            try {
              return JSON.parse(val)
            } catch {
              return val
            }
          },
          GetItemSchemaSchema.openapi({
            param: {
              content: {
                'application/json': { schema: { $ref: '#/components/schemas/get_item_schema' } },
              },
              in: 'query',
              name: 'q',
              required: false,
            },
          }),
        )
        .exactOptional(),
    }),
  },
  responses: {
    200: {
      description: 'Item from Model',
      content: {
        'application/json': {
          schema: z
            .object({
              description_columns: z
                .object({
                  column_name: z
                    .string()
                    .exactOptional()
                    .openapi({
                      description:
                        'The description for the column name. Will be translated by babel',
                      example: 'A Nice description for the column',
                    }),
                })
                .exactOptional()
                .openapi({ required: [] }),
              id: z.string().exactOptional().openapi({ description: 'The item id' }),
              label_columns: z
                .object({
                  column_name: z
                    .string()
                    .exactOptional()
                    .openapi({
                      description: 'The label for the column name. Will be translated by babel',
                      example: 'A Nice label for the column',
                    }),
                })
                .exactOptional()
                .openapi({ required: [] }),
              result: DatabaseRestApiGetSchema.exactOptional(),
              show_columns: z
                .array(z.string())
                .exactOptional()
                .openapi({ description: 'A list of columns' }),
              show_title: z
                .string()
                .exactOptional()
                .openapi({
                  description: 'A title to render. Will be translated by babel',
                  example: 'Show Item Details',
                }),
            })
            .openapi({ required: [] }),
        },
      },
    },
    400: _400Response,
    401: _401Response,
    404: _404Response,
    422: _422Response,
    500: _500Response,
  },
  security: [{ jwt: [] }],
})

export const putDatabasePkRoute = createRoute({
  method: 'put',
  path: '/database/{pk}',
  tags: ['Database'],
  description: 'Changes a Database.',
  request: {
    params: z.object({
      pk: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .openapi({
          param: { in: 'path', name: 'pk', required: true, schema: { type: 'integer' } },
        }),
    }),
    body: {
      description: 'Database schema',
      content: { 'application/json': { schema: DatabaseRestApiPutSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Database changed',
      content: {
        'application/json': {
          schema: z
            .object({
              id: z.number().exactOptional(),
              result: DatabaseRestApiPutSchema.exactOptional(),
            })
            .openapi({ required: [] }),
        },
      },
    },
    400: _400Response,
    401: _401Response,
    403: _403Response,
    404: _404Response,
    422: _422Response,
    500: _500Response,
  },
  security: [{ jwt: [] }],
})

export const deleteDatabasePkRoute = createRoute({
  method: 'delete',
  path: '/database/{pk}',
  tags: ['Database'],
  description: 'Deletes a Database.',
  request: {
    params: z.object({
      pk: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .openapi({
          param: { in: 'path', name: 'pk', required: true, schema: { type: 'integer' } },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Database deleted',
      content: {
        'application/json': {
          schema: z.object({ message: z.string().exactOptional() }).openapi({ required: [] }),
        },
      },
    },
    401: _401Response,
    403: _403Response,
    404: _404Response,
    422: _422Response,
    500: _500Response,
  },
  security: [{ jwt: [] }],
})

export const getDatabasePkFunctionNamesIndexRoute = createRoute({
  method: 'get',
  path: '/database/{pk}/function_names/',
  tags: ['Database'],
  description: 'Get function names supported by a database',
  request: {
    params: z.object({
      pk: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .openapi({
          param: { in: 'path', name: 'pk', required: true, schema: { type: 'integer' } },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Query result',
      content: { 'application/json': { schema: DatabaseFunctionNamesResponseSchema } },
    },
    401: _401Response,
    404: _404Response,
    500: _500Response,
  },
  security: [{ jwt: [] }],
})

export const getDatabasePkRelatedObjectsIndexRoute = createRoute({
  method: 'get',
  path: '/database/{pk}/related_objects/',
  tags: ['Database'],
  description: 'Get charts and dashboards count associated to a database',
  request: {
    params: z.object({
      pk: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .openapi({
          param: { in: 'path', name: 'pk', required: true, schema: { type: 'integer' } },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Query result',
      content: { 'application/json': { schema: DatabaseRelatedObjectsResponseSchema } },
    },
    401: _401Response,
    404: _404Response,
    500: _500Response,
  },
  security: [{ jwt: [] }],
})

export const getDatabasePkSchemasIndexRoute = createRoute({
  method: 'get',
  path: '/database/{pk}/schemas/',
  tags: ['Database'],
  description: 'Get all schemas from a database',
  request: {
    params: z.object({
      pk: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .openapi({
          param: {
            description: 'The database id',
            in: 'path',
            name: 'pk',
            required: true,
            schema: { type: 'integer' },
          },
        }),
    }),
    query: z.object({
      q: z
        .preprocess(
          (val) => {
            if (typeof val !== 'string') return val
            try {
              return JSON.parse(val)
            } catch {
              return val
            }
          },
          DatabaseSchemasQuerySchemaSchema.openapi({
            param: {
              content: {
                'application/json': {
                  schema: { $ref: '#/components/schemas/database_schemas_query_schema' },
                },
              },
              in: 'query',
              name: 'q',
              required: false,
            },
          }),
        )
        .exactOptional(),
    }),
  },
  responses: {
    200: {
      description: 'A List of all schemas from the database',
      content: { 'application/json': { schema: SchemasResponseSchemaSchema } },
    },
    400: _400Response,
    401: _401Response,
    404: _404Response,
    500: _500Response,
  },
  security: [{ jwt: [] }],
})

export const getDatabasePkSelectStarTableNameIndexRoute = createRoute({
  method: 'get',
  path: '/database/{pk}/select_star/{table_name}/',
  tags: ['Database'],
  description: 'Get database select star for table',
  request: {
    params: z.object({
      pk: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .openapi({
          param: {
            description: 'The database id',
            in: 'path',
            name: 'pk',
            required: true,
            schema: { type: 'integer' },
          },
        }),
      table_name: z
        .string()
        .openapi({
          param: {
            description: 'Table name',
            in: 'path',
            name: 'table_name',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      schema_name: z
        .string()
        .openapi({
          param: {
            description: 'Table schema',
            in: 'query',
            name: 'schema_name',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'SQL statement for a select star for table',
      content: { 'application/json': { schema: SelectStarResponseSchemaSchema } },
    },
    400: _400Response,
    401: _401Response,
    404: _404Response,
    422: _422Response,
    500: _500Response,
  },
  security: [{ jwt: [] }],
})

export const getDatabasePkSelectStarTableNameSchemaNameIndexRoute = createRoute({
  method: 'get',
  path: '/database/{pk}/select_star/{table_name}/{schema_name}/',
  tags: ['Database'],
  description: 'Get database select star for table',
  request: {
    params: z.object({
      pk: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .openapi({
          param: {
            description: 'The database id',
            in: 'path',
            name: 'pk',
            required: true,
            schema: { type: 'integer' },
          },
        }),
      table_name: z
        .string()
        .openapi({
          param: {
            description: 'Table name',
            in: 'path',
            name: 'table_name',
            required: true,
            schema: { type: 'string' },
          },
        }),
      schema_name: z
        .string()
        .openapi({
          param: {
            description: 'Table schema',
            in: 'path',
            name: 'schema_name',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'SQL statement for a select star for table',
      content: { 'application/json': { schema: SelectStarResponseSchemaSchema } },
    },
    400: _400Response,
    401: _401Response,
    404: _404Response,
    422: _422Response,
    500: _500Response,
  },
  security: [{ jwt: [] }],
})

export const getDatabasePkTableTableNameSchemaNameIndexRoute = createRoute({
  method: 'get',
  path: '/database/{pk}/table/{table_name}/{schema_name}/',
  tags: ['Database'],
  description: 'Get database table metadata',
  request: {
    params: z.object({
      pk: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .openapi({
          param: {
            description: 'The database id',
            in: 'path',
            name: 'pk',
            required: true,
            schema: { type: 'integer' },
          },
        }),
      table_name: z
        .string()
        .openapi({
          param: {
            description: 'Table name',
            in: 'path',
            name: 'table_name',
            required: true,
            schema: { type: 'string' },
          },
        }),
      schema_name: z
        .string()
        .openapi({
          param: {
            description: 'Table schema',
            in: 'path',
            name: 'schema_name',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Table metadata information',
      content: { 'application/json': { schema: TableMetadataResponseSchemaSchema } },
    },
    400: _400Response,
    401: _401Response,
    404: _404Response,
    422: _422Response,
    500: _500Response,
  },
  security: [{ jwt: [] }],
})

export const getDatasetIndexRoute = createRoute({
  method: 'get',
  path: '/dataset/',
  tags: ['Datasets'],
  description: 'Get a list of models',
  request: {
    query: z.object({
      q: z
        .preprocess(
          (val) => {
            if (typeof val !== 'string') return val
            try {
              return JSON.parse(val)
            } catch {
              return val
            }
          },
          GetListSchemaSchema.openapi({
            param: {
              content: {
                'application/json': { schema: { $ref: '#/components/schemas/get_list_schema' } },
              },
              in: 'query',
              name: 'q',
              required: false,
            },
          }),
        )
        .exactOptional(),
    }),
  },
  responses: {
    200: {
      description: 'Items from Model',
      content: {
        'application/json': {
          schema: z
            .object({
              count: z
                .number()
                .exactOptional()
                .openapi({ description: 'The total record count on the backend' }),
              description_columns: z
                .object({
                  column_name: z
                    .string()
                    .exactOptional()
                    .openapi({
                      description:
                        'The description for the column name. Will be translated by babel',
                      example: 'A Nice description for the column',
                    }),
                })
                .exactOptional()
                .openapi({ required: [] }),
              ids: z
                .array(z.string())
                .exactOptional()
                .openapi({
                  description: "A list of item ids, useful when you don't know the column id",
                }),
              label_columns: z
                .object({
                  column_name: z
                    .string()
                    .exactOptional()
                    .openapi({
                      description: 'The label for the column name. Will be translated by babel',
                      example: 'A Nice label for the column',
                    }),
                })
                .exactOptional()
                .openapi({ required: [] }),
              list_columns: z
                .array(z.string())
                .exactOptional()
                .openapi({ description: 'A list of columns' }),
              list_title: z
                .string()
                .exactOptional()
                .openapi({
                  description: 'A title to render. Will be translated by babel',
                  example: 'List Items',
                }),
              order_columns: z
                .array(z.string())
                .exactOptional()
                .openapi({ description: 'A list of allowed columns to sort' }),
              result: z
                .array(DatasetRestApiGetListSchema)
                .exactOptional()
                .openapi({ description: 'The result from the get list query' }),
            })
            .openapi({ required: [] }),
        },
      },
    },
    400: _400Response,
    401: _401Response,
    422: _422Response,
    500: _500Response,
  },
  security: [{ jwt: [] }],
})

export const postDatasetIndexRoute = createRoute({
  method: 'post',
  path: '/dataset/',
  tags: ['Datasets'],
  description: 'Create a new Dataset',
  request: {
    body: {
      description: 'Dataset schema',
      content: { 'application/json': { schema: DatasetRestApiPostSchema } },
      required: true,
    },
  },
  responses: {
    201: {
      description: 'Dataset added',
      content: {
        'application/json': {
          schema: z
            .object({
              id: z.number().exactOptional(),
              result: DatasetRestApiPostSchema.exactOptional(),
            })
            .openapi({ required: [] }),
        },
      },
    },
    400: _400Response,
    401: _401Response,
    422: _422Response,
    500: _500Response,
  },
  security: [{ jwt: [] }],
})

export const deleteDatasetIndexRoute = createRoute({
  method: 'delete',
  path: '/dataset/',
  tags: ['Datasets'],
  description: 'Deletes multiple Datasets in a bulk operation.',
  request: {
    query: z.object({
      q: z
        .preprocess(
          (val) => {
            if (typeof val !== 'string') return val
            try {
              return JSON.parse(val)
            } catch {
              return val
            }
          },
          GetDeleteIdsSchemaSchema.openapi({
            param: {
              content: {
                'application/json': {
                  schema: { $ref: '#/components/schemas/get_delete_ids_schema' },
                },
              },
              in: 'query',
              name: 'q',
              required: false,
            },
          }),
        )
        .exactOptional(),
    }),
  },
  responses: {
    200: {
      description: 'Dataset bulk delete',
      content: {
        'application/json': {
          schema: z.object({ message: z.string().exactOptional() }).openapi({ required: [] }),
        },
      },
    },
    400: _400Response,
    401: _401Response,
    403: _403Response,
    404: _404Response,
    422: _422Response,
    500: _500Response,
  },
  security: [{ jwt: [] }],
})

export const getDatasetInfoRoute = createRoute({
  method: 'get',
  path: '/dataset/_info',
  tags: ['Datasets'],
  description: 'Get metadata information about this API resource',
  request: {
    query: z.object({
      q: z
        .preprocess(
          (val) => {
            if (typeof val !== 'string') return val
            try {
              return JSON.parse(val)
            } catch {
              return val
            }
          },
          GetInfoSchemaSchema.openapi({
            param: {
              content: {
                'application/json': { schema: { $ref: '#/components/schemas/get_info_schema' } },
              },
              in: 'query',
              name: 'q',
              required: false,
            },
          }),
        )
        .exactOptional(),
    }),
  },
  responses: {
    200: {
      description: 'Item from Model',
      content: {
        'application/json': {
          schema: z
            .object({
              add_columns: z.object({}).exactOptional(),
              edit_columns: z.object({}).exactOptional(),
              filters: z
                .object({
                  column_name: z
                    .array(
                      z
                        .object({
                          name: z
                            .string()
                            .exactOptional()
                            .openapi({
                              description: 'The filter name. Will be translated by babel',
                            }),
                          operator: z
                            .string()
                            .exactOptional()
                            .openapi({
                              description: 'The filter operation key to use on list filters',
                            }),
                        })
                        .openapi({ required: [] }),
                    )
                    .exactOptional(),
                })
                .exactOptional()
                .openapi({ required: [] }),
              permissions: z
                .array(z.string())
                .exactOptional()
                .openapi({ description: 'The user permissions for this API resource' }),
            })
            .openapi({ required: [] }),
        },
      },
    },
    400: _400Response,
    401: _401Response,
    422: _422Response,
    500: _500Response,
  },
  security: [{ jwt: [] }],
})

export const getDatasetDistinctColumnNameRoute = createRoute({
  method: 'get',
  path: '/dataset/distinct/{column_name}',
  tags: ['Datasets'],
  request: {
    params: z.object({
      column_name: z
        .string()
        .openapi({
          param: { in: 'path', name: 'column_name', required: true, schema: { type: 'string' } },
        }),
    }),
    query: z.object({
      q: z
        .preprocess(
          (val) => {
            if (typeof val !== 'string') return val
            try {
              return JSON.parse(val)
            } catch {
              return val
            }
          },
          GetRelatedSchemaSchema.openapi({
            param: {
              content: {
                'application/json': { schema: { $ref: '#/components/schemas/get_related_schema' } },
              },
              in: 'query',
              name: 'q',
              required: false,
            },
          }),
        )
        .exactOptional(),
    }),
  },
  responses: {
    200: {
      description: 'Distinct field data',
      content: { 'application/json': { schema: DistincResponseSchemaSchema } },
    },
    400: _400Response,
    401: _401Response,
    404: _404Response,
    500: _500Response,
  },
  security: [{ jwt: [] }],
})

export const getDatasetExportIndexRoute = createRoute({
  method: 'get',
  path: '/dataset/export/',
  tags: ['Datasets'],
  description: 'Exports multiple datasets and downloads them as YAML files',
  request: {
    query: z.object({
      q: z
        .preprocess(
          (val) => {
            if (typeof val !== 'string') return val
            try {
              return JSON.parse(val)
            } catch {
              return val
            }
          },
          GetExportIdsSchemaSchema.openapi({
            param: {
              content: {
                'application/json': {
                  schema: { $ref: '#/components/schemas/get_export_ids_schema' },
                },
              },
              in: 'query',
              name: 'q',
              required: false,
            },
          }),
        )
        .exactOptional(),
    }),
  },
  responses: {
    200: { description: 'Dataset export', content: { 'text/plain': { schema: z.string() } } },
    400: _400Response,
    401: _401Response,
    404: _404Response,
    500: _500Response,
  },
  security: [{ jwt: [] }],
})

export const postDatasetImportIndexRoute = createRoute({
  method: 'post',
  path: '/dataset/import/',
  tags: ['Datasets'],
  request: {
    body: {
      content: {
        'multipart/form-data': {
          schema: z
            .object({
              formData: z
                .file()
                .exactOptional()
                .openapi({
                  type: 'string',
                  format: 'binary',
                  description: 'upload file (ZIP or YAML)',
                }),
              overwrite: z
                .preprocess(
                  ((read) => (val: unknown) => {
                    const result = read.safeParse(val)
                    return result.success ? result.data : val
                  })(z.stringbool()),
                  z.boolean(),
                )
                .exactOptional()
                .openapi({ description: 'overwrite existing datasets?' }),
              passwords: z
                .string()
                .exactOptional()
                .openapi({ description: 'JSON map of passwords for each file' }),
            })
            .openapi({ required: [] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Dataset import result',
      content: {
        'application/json': {
          schema: z.object({ message: z.string().exactOptional() }).openapi({ required: [] }),
        },
      },
    },
    400: _400Response,
    401: _401Response,
    422: _422Response,
    500: _500Response,
  },
  security: [{ jwt: [] }],
})

export const getDatasetRelatedColumnNameRoute = createRoute({
  method: 'get',
  path: '/dataset/related/{column_name}',
  tags: ['Datasets'],
  request: {
    params: z.object({
      column_name: z
        .string()
        .openapi({
          param: { in: 'path', name: 'column_name', required: true, schema: { type: 'string' } },
        }),
    }),
    query: z.object({
      q: z
        .preprocess(
          (val) => {
            if (typeof val !== 'string') return val
            try {
              return JSON.parse(val)
            } catch {
              return val
            }
          },
          GetRelatedSchemaSchema.openapi({
            param: {
              content: {
                'application/json': { schema: { $ref: '#/components/schemas/get_related_schema' } },
              },
              in: 'query',
              name: 'q',
              required: false,
            },
          }),
        )
        .exactOptional(),
    }),
  },
  responses: {
    200: {
      description: 'Related column data',
      content: { 'application/json': { schema: RelatedResponseSchemaSchema } },
    },
    400: _400Response,
    401: _401Response,
    404: _404Response,
    500: _500Response,
  },
  security: [{ jwt: [] }],
})

export const getDatasetPkRoute = createRoute({
  method: 'get',
  path: '/dataset/{pk}',
  tags: ['Datasets'],
  description: 'Get an item model',
  request: {
    params: z.object({
      pk: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .openapi({
          param: { in: 'path', name: 'pk', required: true, schema: { type: 'integer' } },
        }),
    }),
    query: z.object({
      q: z
        .preprocess(
          (val) => {
            if (typeof val !== 'string') return val
            try {
              return JSON.parse(val)
            } catch {
              return val
            }
          },
          GetItemSchemaSchema.openapi({
            param: {
              content: {
                'application/json': { schema: { $ref: '#/components/schemas/get_item_schema' } },
              },
              in: 'query',
              name: 'q',
              required: false,
            },
          }),
        )
        .exactOptional(),
    }),
  },
  responses: {
    200: {
      description: 'Item from Model',
      content: {
        'application/json': {
          schema: z
            .object({
              description_columns: z
                .object({
                  column_name: z
                    .string()
                    .exactOptional()
                    .openapi({
                      description:
                        'The description for the column name. Will be translated by babel',
                      example: 'A Nice description for the column',
                    }),
                })
                .exactOptional()
                .openapi({ required: [] }),
              id: z.string().exactOptional().openapi({ description: 'The item id' }),
              label_columns: z
                .object({
                  column_name: z
                    .string()
                    .exactOptional()
                    .openapi({
                      description: 'The label for the column name. Will be translated by babel',
                      example: 'A Nice label for the column',
                    }),
                })
                .exactOptional()
                .openapi({ required: [] }),
              result: DatasetRestApiGetSchema.exactOptional(),
              show_columns: z
                .array(z.string())
                .exactOptional()
                .openapi({ description: 'A list of columns' }),
              show_title: z
                .string()
                .exactOptional()
                .openapi({
                  description: 'A title to render. Will be translated by babel',
                  example: 'Show Item Details',
                }),
            })
            .openapi({ required: [] }),
        },
      },
    },
    400: _400Response,
    401: _401Response,
    404: _404Response,
    422: _422Response,
    500: _500Response,
  },
  security: [{ jwt: [] }],
})

export const putDatasetPkRoute = createRoute({
  method: 'put',
  path: '/dataset/{pk}',
  tags: ['Datasets'],
  description: 'Changes a Dataset',
  request: {
    params: z.object({
      pk: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .openapi({
          param: { in: 'path', name: 'pk', required: true, schema: { type: 'integer' } },
        }),
    }),
    query: z.object({
      override_columns: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'override_columns',
            schema: { type: 'boolean' },
            required: false,
          },
        }),
    }),
    body: {
      description: 'Dataset schema',
      content: { 'application/json': { schema: DatasetRestApiPutSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Dataset changed',
      content: {
        'application/json': {
          schema: z
            .object({
              id: z.number().exactOptional(),
              result: DatasetRestApiPutSchema.exactOptional(),
            })
            .openapi({ required: [] }),
        },
      },
    },
    400: _400Response,
    401: _401Response,
    403: _403Response,
    404: _404Response,
    422: _422Response,
    500: _500Response,
  },
  security: [{ jwt: [] }],
})

export const deleteDatasetPkRoute = createRoute({
  method: 'delete',
  path: '/dataset/{pk}',
  tags: ['Datasets'],
  description: 'Deletes a Dataset',
  request: {
    params: z.object({
      pk: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .openapi({
          param: { in: 'path', name: 'pk', required: true, schema: { type: 'integer' } },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Dataset delete',
      content: {
        'application/json': {
          schema: z.object({ message: z.string().exactOptional() }).openapi({ required: [] }),
        },
      },
    },
    401: _401Response,
    403: _403Response,
    404: _404Response,
    422: _422Response,
    500: _500Response,
  },
  security: [{ jwt: [] }],
})

export const deleteDatasetPkColumnColumnIdRoute = createRoute({
  method: 'delete',
  path: '/dataset/{pk}/column/{column_id}',
  tags: ['Datasets'],
  description: 'Delete a Dataset column',
  request: {
    params: z.object({
      pk: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .openapi({
          param: {
            description: 'The dataset pk for this column',
            in: 'path',
            name: 'pk',
            required: true,
            schema: { type: 'integer' },
          },
        }),
      column_id: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .openapi({
          param: {
            description: 'The column id for this dataset',
            in: 'path',
            name: 'column_id',
            required: true,
            schema: { type: 'integer' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Column deleted',
      content: {
        'application/json': {
          schema: z.object({ message: z.string().exactOptional() }).openapi({ required: [] }),
        },
      },
    },
    401: _401Response,
    403: _403Response,
    404: _404Response,
    422: _422Response,
    500: _500Response,
  },
  security: [{ jwt: [] }],
})

export const deleteDatasetPkMetricMetricIdRoute = createRoute({
  method: 'delete',
  path: '/dataset/{pk}/metric/{metric_id}',
  tags: ['Datasets'],
  description: 'Delete a Dataset metric',
  request: {
    params: z.object({
      pk: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .openapi({
          param: {
            description: 'The dataset pk for this column',
            in: 'path',
            name: 'pk',
            required: true,
            schema: { type: 'integer' },
          },
        }),
      metric_id: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .openapi({
          param: {
            description: 'The metric id for this dataset',
            in: 'path',
            name: 'metric_id',
            required: true,
            schema: { type: 'integer' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Metric deleted',
      content: {
        'application/json': {
          schema: z.object({ message: z.string().exactOptional() }).openapi({ required: [] }),
        },
      },
    },
    401: _401Response,
    403: _403Response,
    404: _404Response,
    422: _422Response,
    500: _500Response,
  },
  security: [{ jwt: [] }],
})

export const putDatasetPkRefreshRoute = createRoute({
  method: 'put',
  path: '/dataset/{pk}/refresh',
  tags: ['Datasets'],
  description: 'Refreshes and updates columns of a dataset',
  request: {
    params: z.object({
      pk: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .openapi({
          param: { in: 'path', name: 'pk', required: true, schema: { type: 'integer' } },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Dataset delete',
      content: {
        'application/json': {
          schema: z.object({ message: z.string().exactOptional() }).openapi({ required: [] }),
        },
      },
    },
    401: _401Response,
    403: _403Response,
    404: _404Response,
    422: _422Response,
    500: _500Response,
  },
  security: [{ jwt: [] }],
})

export const getDatasetPkRelatedObjectsRoute = createRoute({
  method: 'get',
  path: '/dataset/{pk}/related_objects',
  tags: ['Datasets'],
  description: 'Get charts and dashboards count associated to a dataset',
  request: {
    params: z.object({
      pk: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .openapi({
          param: { in: 'path', name: 'pk', required: true, schema: { type: 'integer' } },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Query result',
      content: { 'application/json': { schema: DatasetRelatedObjectsResponseSchema } },
    },
    401: _401Response,
    404: _404Response,
    500: _500Response,
  },
  security: [{ jwt: [] }],
})

export const getLogIndexRoute = createRoute({
  method: 'get',
  path: '/log/',
  tags: ['LogRestApi'],
  description: 'Get a list of models',
  request: {
    query: z.object({
      q: z
        .preprocess(
          (val) => {
            if (typeof val !== 'string') return val
            try {
              return JSON.parse(val)
            } catch {
              return val
            }
          },
          GetListSchemaSchema.openapi({
            param: {
              content: {
                'application/json': { schema: { $ref: '#/components/schemas/get_list_schema' } },
              },
              in: 'query',
              name: 'q',
              required: false,
            },
          }),
        )
        .exactOptional(),
    }),
  },
  responses: {
    200: {
      description: 'Items from Model',
      content: {
        'application/json': {
          schema: z
            .object({
              count: z
                .number()
                .exactOptional()
                .openapi({ description: 'The total record count on the backend' }),
              description_columns: z
                .object({
                  column_name: z
                    .string()
                    .exactOptional()
                    .openapi({
                      description:
                        'The description for the column name. Will be translated by babel',
                      example: 'A Nice description for the column',
                    }),
                })
                .exactOptional()
                .openapi({ required: [] }),
              ids: z
                .array(z.string())
                .exactOptional()
                .openapi({
                  description: "A list of item ids, useful when you don't know the column id",
                }),
              label_columns: z
                .object({
                  column_name: z
                    .string()
                    .exactOptional()
                    .openapi({
                      description: 'The label for the column name. Will be translated by babel',
                      example: 'A Nice label for the column',
                    }),
                })
                .exactOptional()
                .openapi({ required: [] }),
              list_columns: z
                .array(z.string())
                .exactOptional()
                .openapi({ description: 'A list of columns' }),
              list_title: z
                .string()
                .exactOptional()
                .openapi({
                  description: 'A title to render. Will be translated by babel',
                  example: 'List Items',
                }),
              order_columns: z
                .array(z.string())
                .exactOptional()
                .openapi({ description: 'A list of allowed columns to sort' }),
              result: z
                .array(LogRestApiGetListSchema)
                .exactOptional()
                .openapi({ description: 'The result from the get list query' }),
            })
            .openapi({ required: [] }),
        },
      },
    },
    400: _400Response,
    401: _401Response,
    422: _422Response,
    500: _500Response,
  },
  security: [{ jwt: [] }],
})

export const postLogIndexRoute = createRoute({
  method: 'post',
  path: '/log/',
  tags: ['LogRestApi'],
  request: {
    body: {
      description: 'Model schema',
      content: { 'application/json': { schema: LogRestApiPostSchema } },
      required: true,
    },
  },
  responses: {
    201: {
      description: 'Item inserted',
      content: {
        'application/json': {
          schema: z
            .object({
              id: z.string().exactOptional(),
              result: LogRestApiPostSchema.exactOptional(),
            })
            .openapi({ required: [] }),
        },
      },
    },
    400: _400Response,
    401: _401Response,
    422: _422Response,
    500: _500Response,
  },
  security: [{ jwt: [] }],
})

export const getLogPkRoute = createRoute({
  method: 'get',
  path: '/log/{pk}',
  tags: ['LogRestApi'],
  description: 'Get an item model',
  request: {
    params: z.object({
      pk: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .openapi({
          param: { in: 'path', name: 'pk', required: true, schema: { type: 'integer' } },
        }),
    }),
    query: z.object({
      q: z
        .preprocess(
          (val) => {
            if (typeof val !== 'string') return val
            try {
              return JSON.parse(val)
            } catch {
              return val
            }
          },
          GetItemSchemaSchema.openapi({
            param: {
              content: {
                'application/json': { schema: { $ref: '#/components/schemas/get_item_schema' } },
              },
              in: 'query',
              name: 'q',
              required: false,
            },
          }),
        )
        .exactOptional(),
    }),
  },
  responses: {
    200: {
      description: 'Item from Model',
      content: {
        'application/json': {
          schema: z
            .object({
              description_columns: z
                .object({
                  column_name: z
                    .string()
                    .exactOptional()
                    .openapi({
                      description:
                        'The description for the column name. Will be translated by babel',
                      example: 'A Nice description for the column',
                    }),
                })
                .exactOptional()
                .openapi({ required: [] }),
              id: z.string().exactOptional().openapi({ description: 'The item id' }),
              label_columns: z
                .object({
                  column_name: z
                    .string()
                    .exactOptional()
                    .openapi({
                      description: 'The label for the column name. Will be translated by babel',
                      example: 'A Nice label for the column',
                    }),
                })
                .exactOptional()
                .openapi({ required: [] }),
              result: LogRestApiGetSchema.exactOptional(),
              show_columns: z
                .array(z.string())
                .exactOptional()
                .openapi({ description: 'A list of columns' }),
              show_title: z
                .string()
                .exactOptional()
                .openapi({
                  description: 'A title to render. Will be translated by babel',
                  example: 'Show Item Details',
                }),
            })
            .openapi({ required: [] }),
        },
      },
    },
    400: _400Response,
    401: _401Response,
    404: _404Response,
    422: _422Response,
    500: _500Response,
  },
  security: [{ jwt: [] }],
})

export const getMenuIndexRoute = createRoute({
  method: 'get',
  path: '/menu/',
  tags: ['Menu'],
  description:
    'Get the menu data structure. Returns a forest like structure with the menu the user has access to',
  responses: {
    200: {
      description: 'Get menu data',
      content: {
        'application/json': {
          schema: z
            .object({
              result: z
                .array(
                  z
                    .object({
                      childs: z.array(z.object({})).exactOptional(),
                      icon: z
                        .string()
                        .exactOptional()
                        .openapi({ description: 'Icon name to show for this menu item' }),
                      label: z
                        .string()
                        .exactOptional()
                        .openapi({ description: 'Pretty name for the menu item' }),
                      name: z
                        .string()
                        .exactOptional()
                        .openapi({
                          description: 'The internal menu item name, maps to permission_name',
                        }),
                      url: z
                        .string()
                        .exactOptional()
                        .openapi({ description: 'The URL for the menu item' }),
                    })
                    .openapi({ required: [] }),
                )
                .exactOptional()
                .openapi({ description: 'Menu items in a forest like data structure' }),
            })
            .openapi({ required: [] }),
        },
      },
    },
    401: _401Response,
  },
  security: [{ jwt: [] }],
})

export const getOpenapiVersionOpenapiRoute = createRoute({
  method: 'get',
  path: '/openapi/{version}/_openapi',
  tags: ['OpenApi'],
  description: 'Get the OpenAPI spec for a specific API version',
  request: {
    params: z.object({
      version: z
        .string()
        .openapi({
          param: { in: 'path', name: 'version', required: true, schema: { type: 'string' } },
        }),
    }),
  },
  responses: {
    200: {
      description: 'The OpenAPI spec',
      content: { 'application/json': { schema: z.object({}) } },
    },
    404: _404Response,
    500: _500Response,
  },
  security: [{ jwt: [] }],
})

export const getQueryIndexRoute = createRoute({
  method: 'get',
  path: '/query/',
  tags: ['Queries'],
  description:
    'Get a list of queries, use Rison or JSON query parameters for filtering, sorting, pagination and  for selecting specific columns and metadata.',
  request: {
    query: z.object({
      q: z
        .preprocess(
          (val) => {
            if (typeof val !== 'string') return val
            try {
              return JSON.parse(val)
            } catch {
              return val
            }
          },
          GetListSchemaSchema.openapi({
            param: {
              content: {
                'application/json': { schema: { $ref: '#/components/schemas/get_list_schema' } },
              },
              in: 'query',
              name: 'q',
              required: false,
            },
          }),
        )
        .exactOptional(),
    }),
  },
  responses: {
    200: {
      description: 'Items from Model',
      content: {
        'application/json': {
          schema: z
            .object({
              count: z
                .number()
                .exactOptional()
                .openapi({ description: 'The total record count on the backend' }),
              description_columns: z
                .object({
                  column_name: z
                    .string()
                    .exactOptional()
                    .openapi({
                      description:
                        'The description for the column name. Will be translated by babel',
                      example: 'A Nice description for the column',
                    }),
                })
                .exactOptional()
                .openapi({ required: [] }),
              ids: z
                .array(z.string())
                .exactOptional()
                .openapi({
                  description: "A list of item ids, useful when you don't know the column id",
                }),
              label_columns: z
                .object({
                  column_name: z
                    .string()
                    .exactOptional()
                    .openapi({
                      description: 'The label for the column name. Will be translated by babel',
                      example: 'A Nice label for the column',
                    }),
                })
                .exactOptional()
                .openapi({ required: [] }),
              list_columns: z
                .array(z.string())
                .exactOptional()
                .openapi({ description: 'A list of columns' }),
              list_title: z
                .string()
                .exactOptional()
                .openapi({
                  description: 'A title to render. Will be translated by babel',
                  example: 'List Items',
                }),
              order_columns: z
                .array(z.string())
                .exactOptional()
                .openapi({ description: 'A list of allowed columns to sort' }),
              result: z
                .array(QueryRestApiGetListSchema)
                .exactOptional()
                .openapi({ description: 'The result from the get list query' }),
            })
            .openapi({ required: [] }),
        },
      },
    },
    400: _400Response,
    401: _401Response,
    422: _422Response,
    500: _500Response,
  },
  security: [{ jwt: [] }],
})

export const getQueryDistinctColumnNameRoute = createRoute({
  method: 'get',
  path: '/query/distinct/{column_name}',
  tags: ['Queries'],
  request: {
    params: z.object({
      column_name: z
        .string()
        .openapi({
          param: { in: 'path', name: 'column_name', required: true, schema: { type: 'string' } },
        }),
    }),
    query: z.object({
      q: z
        .preprocess(
          (val) => {
            if (typeof val !== 'string') return val
            try {
              return JSON.parse(val)
            } catch {
              return val
            }
          },
          GetRelatedSchemaSchema.openapi({
            param: {
              content: {
                'application/json': { schema: { $ref: '#/components/schemas/get_related_schema' } },
              },
              in: 'query',
              name: 'q',
              required: false,
            },
          }),
        )
        .exactOptional(),
    }),
  },
  responses: {
    200: {
      description: 'Distinct field data',
      content: { 'application/json': { schema: DistincResponseSchemaSchema } },
    },
    400: _400Response,
    401: _401Response,
    404: _404Response,
    500: _500Response,
  },
  security: [{ jwt: [] }],
})

export const getQueryRelatedColumnNameRoute = createRoute({
  method: 'get',
  path: '/query/related/{column_name}',
  tags: ['Queries'],
  request: {
    params: z.object({
      column_name: z
        .string()
        .openapi({
          param: { in: 'path', name: 'column_name', required: true, schema: { type: 'string' } },
        }),
    }),
    query: z.object({
      q: z
        .preprocess(
          (val) => {
            if (typeof val !== 'string') return val
            try {
              return JSON.parse(val)
            } catch {
              return val
            }
          },
          GetRelatedSchemaSchema.openapi({
            param: {
              content: {
                'application/json': { schema: { $ref: '#/components/schemas/get_related_schema' } },
              },
              in: 'query',
              name: 'q',
              required: false,
            },
          }),
        )
        .exactOptional(),
    }),
  },
  responses: {
    200: {
      description: 'Related column data',
      content: { 'application/json': { schema: RelatedResponseSchemaSchema } },
    },
    400: _400Response,
    401: _401Response,
    404: _404Response,
    500: _500Response,
  },
  security: [{ jwt: [] }],
})

export const getQueryPkRoute = createRoute({
  method: 'get',
  path: '/query/{pk}',
  tags: ['Queries'],
  description: 'Get query detail information.',
  request: {
    params: z.object({
      pk: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .openapi({
          param: { in: 'path', name: 'pk', required: true, schema: { type: 'integer' } },
        }),
    }),
    query: z.object({
      q: z
        .preprocess(
          (val) => {
            if (typeof val !== 'string') return val
            try {
              return JSON.parse(val)
            } catch {
              return val
            }
          },
          GetItemSchemaSchema.openapi({
            param: {
              content: {
                'application/json': { schema: { $ref: '#/components/schemas/get_item_schema' } },
              },
              in: 'query',
              name: 'q',
              required: false,
            },
          }),
        )
        .exactOptional(),
    }),
  },
  responses: {
    200: {
      description: 'Item from Model',
      content: {
        'application/json': {
          schema: z
            .object({
              description_columns: z
                .object({
                  column_name: z
                    .string()
                    .exactOptional()
                    .openapi({
                      description:
                        'The description for the column name. Will be translated by babel',
                      example: 'A Nice description for the column',
                    }),
                })
                .exactOptional()
                .openapi({ required: [] }),
              id: z.string().exactOptional().openapi({ description: 'The item id' }),
              label_columns: z
                .object({
                  column_name: z
                    .string()
                    .exactOptional()
                    .openapi({
                      description: 'The label for the column name. Will be translated by babel',
                      example: 'A Nice label for the column',
                    }),
                })
                .exactOptional()
                .openapi({ required: [] }),
              result: QueryRestApiGetSchema.exactOptional(),
              show_columns: z
                .array(z.string())
                .exactOptional()
                .openapi({ description: 'A list of columns' }),
              show_title: z
                .string()
                .exactOptional()
                .openapi({
                  description: 'A title to render. Will be translated by babel',
                  example: 'Show Item Details',
                }),
            })
            .openapi({ required: [] }),
        },
      },
    },
    400: _400Response,
    401: _401Response,
    404: _404Response,
    422: _422Response,
    500: _500Response,
  },
  security: [{ jwt: [] }],
})

export const getReportIndexRoute = createRoute({
  method: 'get',
  path: '/report/',
  tags: ['Report Schedules'],
  description:
    'Get a list of report schedules, use Rison or JSON query parameters for filtering, sorting, pagination and for selecting specific columns and metadata.',
  request: {
    query: z.object({
      q: z
        .preprocess(
          (val) => {
            if (typeof val !== 'string') return val
            try {
              return JSON.parse(val)
            } catch {
              return val
            }
          },
          GetListSchemaSchema.openapi({
            param: {
              content: {
                'application/json': { schema: { $ref: '#/components/schemas/get_list_schema' } },
              },
              in: 'query',
              name: 'q',
              required: false,
            },
          }),
        )
        .exactOptional(),
    }),
  },
  responses: {
    200: {
      description: 'Items from Model',
      content: {
        'application/json': {
          schema: z
            .object({
              count: z
                .number()
                .exactOptional()
                .openapi({ description: 'The total record count on the backend' }),
              description_columns: z
                .object({
                  column_name: z
                    .string()
                    .exactOptional()
                    .openapi({
                      description:
                        'The description for the column name. Will be translated by babel',
                      example: 'A Nice description for the column',
                    }),
                })
                .exactOptional()
                .openapi({ required: [] }),
              ids: z
                .array(z.string())
                .exactOptional()
                .openapi({
                  description: "A list of item ids, useful when you don't know the column id",
                }),
              label_columns: z
                .object({
                  column_name: z
                    .string()
                    .exactOptional()
                    .openapi({
                      description: 'The label for the column name. Will be translated by babel',
                      example: 'A Nice label for the column',
                    }),
                })
                .exactOptional()
                .openapi({ required: [] }),
              list_columns: z
                .array(z.string())
                .exactOptional()
                .openapi({ description: 'A list of columns' }),
              list_title: z
                .string()
                .exactOptional()
                .openapi({
                  description: 'A title to render. Will be translated by babel',
                  example: 'List Items',
                }),
              order_columns: z
                .array(z.string())
                .exactOptional()
                .openapi({ description: 'A list of allowed columns to sort' }),
              result: z
                .array(ReportScheduleRestApiGetListSchema)
                .exactOptional()
                .openapi({ description: 'The result from the get list query' }),
            })
            .openapi({ required: [] }),
        },
      },
    },
    400: _400Response,
    401: _401Response,
    422: _422Response,
    500: _500Response,
  },
  security: [{ jwt: [] }],
})

export const postReportIndexRoute = createRoute({
  method: 'post',
  path: '/report/',
  tags: ['Report Schedules'],
  description: 'Create a report schedule',
  request: {
    body: {
      description: 'Report Schedule schema',
      content: { 'application/json': { schema: ReportScheduleRestApiPostSchema } },
      required: true,
    },
  },
  responses: {
    201: {
      description: 'Report schedule added',
      content: {
        'application/json': {
          schema: z
            .object({
              id: z.number().exactOptional(),
              result: ReportScheduleRestApiPostSchema.exactOptional(),
            })
            .openapi({ required: [] }),
        },
      },
    },
    400: _400Response,
    401: _401Response,
    404: _404Response,
    500: _500Response,
  },
  security: [{ jwt: [] }],
})

export const deleteReportIndexRoute = createRoute({
  method: 'delete',
  path: '/report/',
  tags: ['Report Schedules'],
  description: 'Deletes multiple report schedules in a bulk operation.',
  request: {
    query: z.object({
      q: z
        .preprocess(
          (val) => {
            if (typeof val !== 'string') return val
            try {
              return JSON.parse(val)
            } catch {
              return val
            }
          },
          GetDeleteIdsSchemaSchema.openapi({
            param: {
              content: {
                'application/json': {
                  schema: { $ref: '#/components/schemas/get_delete_ids_schema' },
                },
              },
              in: 'query',
              name: 'q',
              required: false,
            },
          }),
        )
        .exactOptional(),
    }),
  },
  responses: {
    200: {
      description: 'Report Schedule bulk delete',
      content: {
        'application/json': {
          schema: z.object({ message: z.string().exactOptional() }).openapi({ required: [] }),
        },
      },
    },
    401: _401Response,
    403: _403Response,
    404: _404Response,
    422: _422Response,
    500: _500Response,
  },
  security: [{ jwt: [] }],
})

export const getReportInfoRoute = createRoute({
  method: 'get',
  path: '/report/_info',
  tags: ['Report Schedules'],
  description: 'Get metadata information about this API resource',
  request: {
    query: z.object({
      q: z
        .preprocess(
          (val) => {
            if (typeof val !== 'string') return val
            try {
              return JSON.parse(val)
            } catch {
              return val
            }
          },
          GetInfoSchemaSchema.openapi({
            param: {
              content: {
                'application/json': { schema: { $ref: '#/components/schemas/get_info_schema' } },
              },
              in: 'query',
              name: 'q',
              required: false,
            },
          }),
        )
        .exactOptional(),
    }),
  },
  responses: {
    200: {
      description: 'Item from Model',
      content: {
        'application/json': {
          schema: z
            .object({
              add_columns: z.object({}).exactOptional(),
              edit_columns: z.object({}).exactOptional(),
              filters: z
                .object({
                  column_name: z
                    .array(
                      z
                        .object({
                          name: z
                            .string()
                            .exactOptional()
                            .openapi({
                              description: 'The filter name. Will be translated by babel',
                            }),
                          operator: z
                            .string()
                            .exactOptional()
                            .openapi({
                              description: 'The filter operation key to use on list filters',
                            }),
                        })
                        .openapi({ required: [] }),
                    )
                    .exactOptional(),
                })
                .exactOptional()
                .openapi({ required: [] }),
              permissions: z
                .array(z.string())
                .exactOptional()
                .openapi({ description: 'The user permissions for this API resource' }),
            })
            .openapi({ required: [] }),
        },
      },
    },
    400: _400Response,
    401: _401Response,
    422: _422Response,
    500: _500Response,
  },
  security: [{ jwt: [] }],
})

export const getReportRelatedColumnNameRoute = createRoute({
  method: 'get',
  path: '/report/related/{column_name}',
  tags: ['Report Schedules'],
  request: {
    params: z.object({
      column_name: z
        .string()
        .openapi({
          param: { in: 'path', name: 'column_name', required: true, schema: { type: 'string' } },
        }),
    }),
    query: z.object({
      q: z
        .preprocess(
          (val) => {
            if (typeof val !== 'string') return val
            try {
              return JSON.parse(val)
            } catch {
              return val
            }
          },
          GetRelatedSchemaSchema.openapi({
            param: {
              content: {
                'application/json': { schema: { $ref: '#/components/schemas/get_related_schema' } },
              },
              in: 'query',
              name: 'q',
              required: false,
            },
          }),
        )
        .exactOptional(),
    }),
  },
  responses: {
    200: {
      description: 'Related column data',
      content: { 'application/json': { schema: RelatedResponseSchemaSchema } },
    },
    400: _400Response,
    401: _401Response,
    404: _404Response,
    500: _500Response,
  },
  security: [{ jwt: [] }],
})

export const getReportPkRoute = createRoute({
  method: 'get',
  path: '/report/{pk}',
  tags: ['Report Schedules'],
  description: 'Get a report schedule',
  request: {
    params: z.object({
      pk: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .openapi({
          param: { in: 'path', name: 'pk', required: true, schema: { type: 'integer' } },
        }),
    }),
    query: z.object({
      q: z
        .preprocess(
          (val) => {
            if (typeof val !== 'string') return val
            try {
              return JSON.parse(val)
            } catch {
              return val
            }
          },
          GetItemSchemaSchema.openapi({
            param: {
              content: {
                'application/json': { schema: { $ref: '#/components/schemas/get_item_schema' } },
              },
              in: 'query',
              name: 'q',
              required: false,
            },
          }),
        )
        .exactOptional(),
    }),
  },
  responses: {
    200: {
      description: 'Item from Model',
      content: {
        'application/json': {
          schema: z
            .object({
              description_columns: z
                .object({
                  column_name: z
                    .string()
                    .exactOptional()
                    .openapi({
                      description:
                        'The description for the column name. Will be translated by babel',
                      example: 'A Nice description for the column',
                    }),
                })
                .exactOptional()
                .openapi({ required: [] }),
              id: z.string().exactOptional().openapi({ description: 'The item id' }),
              label_columns: z
                .object({
                  column_name: z
                    .string()
                    .exactOptional()
                    .openapi({
                      description: 'The label for the column name. Will be translated by babel',
                      example: 'A Nice label for the column',
                    }),
                })
                .exactOptional()
                .openapi({ required: [] }),
              result: ReportScheduleRestApiGetSchema.exactOptional(),
              show_columns: z
                .array(z.string())
                .exactOptional()
                .openapi({ description: 'A list of columns' }),
              show_title: z
                .string()
                .exactOptional()
                .openapi({
                  description: 'A title to render. Will be translated by babel',
                  example: 'Show Item Details',
                }),
            })
            .openapi({ required: [] }),
        },
      },
    },
    400: _400Response,
    401: _401Response,
    404: _404Response,
    422: _422Response,
    500: _500Response,
  },
  security: [{ jwt: [] }],
})

export const putReportPkRoute = createRoute({
  method: 'put',
  path: '/report/{pk}',
  tags: ['Report Schedules'],
  description: 'Update a report schedule',
  request: {
    params: z.object({
      pk: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .openapi({
          param: {
            description: 'The Report Schedule pk',
            in: 'path',
            name: 'pk',
            required: true,
            schema: { type: 'integer' },
          },
        }),
    }),
    body: {
      description: 'Report Schedule schema',
      content: { 'application/json': { schema: ReportScheduleRestApiPutSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Report Schedule changed',
      content: {
        'application/json': {
          schema: z
            .object({
              id: z.number().exactOptional(),
              result: ReportScheduleRestApiPutSchema.exactOptional(),
            })
            .openapi({ required: [] }),
        },
      },
    },
    400: _400Response,
    401: _401Response,
    403: _403Response,
    404: _404Response,
    500: _500Response,
  },
  security: [{ jwt: [] }],
})

export const deleteReportPkRoute = createRoute({
  method: 'delete',
  path: '/report/{pk}',
  tags: ['Report Schedules'],
  description: 'Delete a report schedule',
  request: {
    params: z.object({
      pk: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .openapi({
          param: {
            description: 'The report schedule pk',
            in: 'path',
            name: 'pk',
            required: true,
            schema: { type: 'integer' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Item deleted',
      content: {
        'application/json': {
          schema: z.object({ message: z.string().exactOptional() }).openapi({ required: [] }),
        },
      },
    },
    403: _403Response,
    404: _404Response,
    422: _422Response,
    500: _500Response,
  },
  security: [{ jwt: [] }],
})

export const getReportPkLogIndexRoute = createRoute({
  method: 'get',
  path: '/report/{pk}/log/',
  tags: ['Report Schedules'],
  description:
    'Get a list of report schedule logs, use Rison or JSON query parameters for filtering, sorting, pagination and for selecting specific columns and metadata.',
  request: {
    params: z.object({
      pk: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .openapi({
          param: {
            description: 'The report schedule id for these logs',
            in: 'path',
            name: 'pk',
            required: true,
            schema: { type: 'integer' },
          },
        }),
    }),
    query: z.object({
      q: z
        .preprocess(
          (val) => {
            if (typeof val !== 'string') return val
            try {
              return JSON.parse(val)
            } catch {
              return val
            }
          },
          GetListSchemaSchema.openapi({
            param: {
              content: {
                'application/json': { schema: { $ref: '#/components/schemas/get_list_schema' } },
              },
              in: 'query',
              name: 'q',
              required: false,
            },
          }),
        )
        .exactOptional(),
    }),
  },
  responses: {
    200: {
      description: 'Items from logs',
      content: {
        'application/json': {
          schema: z
            .object({
              count: z
                .number()
                .exactOptional()
                .openapi({ description: 'The total record count on the backend' }),
              ids: z
                .array(z.string())
                .exactOptional()
                .openapi({ description: 'A list of log ids' }),
              result: z
                .array(ReportExecutionLogRestApiGetListSchema)
                .exactOptional()
                .openapi({ description: 'The result from the get list query' }),
            })
            .openapi({ required: [] }),
        },
      },
    },
    400: _400Response,
    401: _401Response,
    422: _422Response,
    500: _500Response,
  },
  security: [{ jwt: [] }],
})

export const getReportPkLogLogIdRoute = createRoute({
  method: 'get',
  path: '/report/{pk}/log/{log_id}',
  tags: ['Report Schedules'],
  description: 'Get a report schedule log',
  request: {
    params: z.object({
      pk: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .openapi({
          param: {
            description: 'The report schedule pk for log',
            in: 'path',
            name: 'pk',
            required: true,
            schema: { type: 'integer' },
          },
        }),
      log_id: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .openapi({
          param: {
            description: 'The log pk',
            in: 'path',
            name: 'log_id',
            required: true,
            schema: { type: 'integer' },
          },
        }),
    }),
    query: z.object({
      q: z
        .preprocess(
          (val) => {
            if (typeof val !== 'string') return val
            try {
              return JSON.parse(val)
            } catch {
              return val
            }
          },
          GetItemSchemaSchema.openapi({
            param: {
              content: {
                'application/json': { schema: { $ref: '#/components/schemas/get_item_schema' } },
              },
              in: 'query',
              name: 'q',
              required: false,
            },
          }),
        )
        .exactOptional(),
    }),
  },
  responses: {
    200: {
      description: 'Item log',
      content: {
        'application/json': {
          schema: z
            .object({
              id: z.string().exactOptional().openapi({ description: 'The log id' }),
              result: ReportExecutionLogRestApiGetSchema.exactOptional(),
            })
            .openapi({ required: [] }),
        },
      },
    },
    400: _400Response,
    401: _401Response,
    404: _404Response,
    422: _422Response,
    500: _500Response,
  },
  security: [{ jwt: [] }],
})

export const getSavedQueryIndexRoute = createRoute({
  method: 'get',
  path: '/saved_query/',
  tags: ['Queries'],
  description:
    'Get a list of saved queries, use Rison or JSON query parameters for filtering, sorting, pagination and for selecting specific columns and metadata.',
  request: {
    query: z.object({
      q: z
        .preprocess(
          (val) => {
            if (typeof val !== 'string') return val
            try {
              return JSON.parse(val)
            } catch {
              return val
            }
          },
          GetListSchemaSchema.openapi({
            param: {
              content: {
                'application/json': { schema: { $ref: '#/components/schemas/get_list_schema' } },
              },
              in: 'query',
              name: 'q',
              required: false,
            },
          }),
        )
        .exactOptional(),
    }),
  },
  responses: {
    200: {
      description: 'Items from Model',
      content: {
        'application/json': {
          schema: z
            .object({
              count: z
                .number()
                .exactOptional()
                .openapi({ description: 'The total record count on the backend' }),
              description_columns: z
                .object({
                  column_name: z
                    .string()
                    .exactOptional()
                    .openapi({
                      description:
                        'The description for the column name. Will be translated by babel',
                      example: 'A Nice description for the column',
                    }),
                })
                .exactOptional()
                .openapi({ required: [] }),
              ids: z
                .array(z.string())
                .exactOptional()
                .openapi({
                  description: "A list of item ids, useful when you don't know the column id",
                }),
              label_columns: z
                .object({
                  column_name: z
                    .string()
                    .exactOptional()
                    .openapi({
                      description: 'The label for the column name. Will be translated by babel',
                      example: 'A Nice label for the column',
                    }),
                })
                .exactOptional()
                .openapi({ required: [] }),
              list_columns: z
                .array(z.string())
                .exactOptional()
                .openapi({ description: 'A list of columns' }),
              list_title: z
                .string()
                .exactOptional()
                .openapi({
                  description: 'A title to render. Will be translated by babel',
                  example: 'List Items',
                }),
              order_columns: z
                .array(z.string())
                .exactOptional()
                .openapi({ description: 'A list of allowed columns to sort' }),
              result: z
                .array(SavedQueryRestApiGetListSchema)
                .exactOptional()
                .openapi({ description: 'The result from the get list query' }),
            })
            .openapi({ required: [] }),
        },
      },
    },
    400: _400Response,
    401: _401Response,
    422: _422Response,
    500: _500Response,
  },
  security: [{ jwt: [] }],
})

export const postSavedQueryIndexRoute = createRoute({
  method: 'post',
  path: '/saved_query/',
  tags: ['Queries'],
  description: 'Create a saved query',
  request: {
    body: {
      description: 'Model schema',
      content: { 'application/json': { schema: SavedQueryRestApiPostSchema } },
      required: true,
    },
  },
  responses: {
    201: {
      description: 'Item inserted',
      content: {
        'application/json': {
          schema: z
            .object({
              id: z.string().exactOptional(),
              result: SavedQueryRestApiPostSchema.exactOptional(),
            })
            .openapi({ required: [] }),
        },
      },
    },
    400: _400Response,
    401: _401Response,
    422: _422Response,
    500: _500Response,
  },
  security: [{ jwt: [] }],
})

export const deleteSavedQueryIndexRoute = createRoute({
  method: 'delete',
  path: '/saved_query/',
  tags: ['Queries'],
  description: 'Deletes multiple saved queries in a bulk operation.',
  request: {
    query: z.object({
      q: z
        .preprocess(
          (val) => {
            if (typeof val !== 'string') return val
            try {
              return JSON.parse(val)
            } catch {
              return val
            }
          },
          GetDeleteIdsSchemaSchema.openapi({
            param: {
              content: {
                'application/json': {
                  schema: { $ref: '#/components/schemas/get_delete_ids_schema' },
                },
              },
              in: 'query',
              name: 'q',
              required: false,
            },
          }),
        )
        .exactOptional(),
    }),
  },
  responses: {
    200: {
      description: 'Saved queries bulk delete',
      content: {
        'application/json': {
          schema: z.object({ message: z.string().exactOptional() }).openapi({ required: [] }),
        },
      },
    },
    401: _401Response,
    404: _404Response,
    422: _422Response,
    500: _500Response,
  },
  security: [{ jwt: [] }],
})

export const getSavedQueryInfoRoute = createRoute({
  method: 'get',
  path: '/saved_query/_info',
  tags: ['Queries'],
  description: 'Get metadata information about this API resource',
  request: {
    query: z.object({
      q: z
        .preprocess(
          (val) => {
            if (typeof val !== 'string') return val
            try {
              return JSON.parse(val)
            } catch {
              return val
            }
          },
          GetInfoSchemaSchema.openapi({
            param: {
              content: {
                'application/json': { schema: { $ref: '#/components/schemas/get_info_schema' } },
              },
              in: 'query',
              name: 'q',
              required: false,
            },
          }),
        )
        .exactOptional(),
    }),
  },
  responses: {
    200: {
      description: 'Item from Model',
      content: {
        'application/json': {
          schema: z
            .object({
              add_columns: z.object({}).exactOptional(),
              edit_columns: z.object({}).exactOptional(),
              filters: z
                .object({
                  column_name: z
                    .array(
                      z
                        .object({
                          name: z
                            .string()
                            .exactOptional()
                            .openapi({
                              description: 'The filter name. Will be translated by babel',
                            }),
                          operator: z
                            .string()
                            .exactOptional()
                            .openapi({
                              description: 'The filter operation key to use on list filters',
                            }),
                        })
                        .openapi({ required: [] }),
                    )
                    .exactOptional(),
                })
                .exactOptional()
                .openapi({ required: [] }),
              permissions: z
                .array(z.string())
                .exactOptional()
                .openapi({ description: 'The user permissions for this API resource' }),
            })
            .openapi({ required: [] }),
        },
      },
    },
    400: _400Response,
    401: _401Response,
    422: _422Response,
    500: _500Response,
  },
  security: [{ jwt: [] }],
})

export const getSavedQueryDistinctColumnNameRoute = createRoute({
  method: 'get',
  path: '/saved_query/distinct/{column_name}',
  tags: ['Queries'],
  request: {
    params: z.object({
      column_name: z
        .string()
        .openapi({
          param: { in: 'path', name: 'column_name', required: true, schema: { type: 'string' } },
        }),
    }),
    query: z.object({
      q: z
        .preprocess(
          (val) => {
            if (typeof val !== 'string') return val
            try {
              return JSON.parse(val)
            } catch {
              return val
            }
          },
          GetRelatedSchemaSchema.openapi({
            param: {
              content: {
                'application/json': { schema: { $ref: '#/components/schemas/get_related_schema' } },
              },
              in: 'query',
              name: 'q',
              required: false,
            },
          }),
        )
        .exactOptional(),
    }),
  },
  responses: {
    200: {
      description: 'Distinct field data',
      content: { 'application/json': { schema: DistincResponseSchemaSchema } },
    },
    400: _400Response,
    401: _401Response,
    404: _404Response,
    500: _500Response,
  },
  security: [{ jwt: [] }],
})

export const getSavedQueryExportIndexRoute = createRoute({
  method: 'get',
  path: '/saved_query/export/',
  tags: ['Queries'],
  description: 'Exports multiple saved queries and downloads them as YAML files',
  request: {
    query: z.object({
      q: z
        .preprocess(
          (val) => {
            if (typeof val !== 'string') return val
            try {
              return JSON.parse(val)
            } catch {
              return val
            }
          },
          GetExportIdsSchemaSchema.openapi({
            param: {
              content: {
                'application/json': {
                  schema: { $ref: '#/components/schemas/get_export_ids_schema' },
                },
              },
              in: 'query',
              name: 'q',
              required: false,
            },
          }),
        )
        .exactOptional(),
    }),
  },
  responses: {
    200: {
      description: 'A zip file with saved query(ies) and database(s) as YAML',
      content: {
        'application/zip': { schema: z.file().openapi({ type: 'string', format: 'binary' }) },
      },
    },
    400: _400Response,
    401: _401Response,
    404: _404Response,
    500: _500Response,
  },
  security: [{ jwt: [] }],
})

export const postSavedQueryImportIndexRoute = createRoute({
  method: 'post',
  path: '/saved_query/import/',
  tags: ['Queries'],
  request: {
    body: {
      content: {
        'multipart/form-data': {
          schema: z
            .object({
              formData: z
                .file()
                .exactOptional()
                .openapi({ type: 'string', format: 'binary', description: 'upload file (ZIP)' }),
              overwrite: z
                .preprocess(
                  ((read) => (val: unknown) => {
                    const result = read.safeParse(val)
                    return result.success ? result.data : val
                  })(z.stringbool()),
                  z.boolean(),
                )
                .exactOptional()
                .openapi({ description: 'overwrite existing saved queries?' }),
              passwords: z
                .string()
                .exactOptional()
                .openapi({ description: 'JSON map of passwords for each file' }),
            })
            .openapi({ required: [] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Saved Query import result',
      content: {
        'application/json': {
          schema: z.object({ message: z.string().exactOptional() }).openapi({ required: [] }),
        },
      },
    },
    400: _400Response,
    401: _401Response,
    422: _422Response,
    500: _500Response,
  },
  security: [{ jwt: [] }],
})

export const getSavedQueryRelatedColumnNameRoute = createRoute({
  method: 'get',
  path: '/saved_query/related/{column_name}',
  tags: ['Queries'],
  request: {
    params: z.object({
      column_name: z
        .string()
        .openapi({
          param: { in: 'path', name: 'column_name', required: true, schema: { type: 'string' } },
        }),
    }),
    query: z.object({
      q: z
        .preprocess(
          (val) => {
            if (typeof val !== 'string') return val
            try {
              return JSON.parse(val)
            } catch {
              return val
            }
          },
          GetRelatedSchemaSchema.openapi({
            param: {
              content: {
                'application/json': { schema: { $ref: '#/components/schemas/get_related_schema' } },
              },
              in: 'query',
              name: 'q',
              required: false,
            },
          }),
        )
        .exactOptional(),
    }),
  },
  responses: {
    200: {
      description: 'Related column data',
      content: { 'application/json': { schema: RelatedResponseSchemaSchema } },
    },
    400: _400Response,
    401: _401Response,
    404: _404Response,
    500: _500Response,
  },
  security: [{ jwt: [] }],
})

export const getSavedQueryPkRoute = createRoute({
  method: 'get',
  path: '/saved_query/{pk}',
  tags: ['Queries'],
  description: 'Get a saved query',
  request: {
    params: z.object({
      pk: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .openapi({
          param: { in: 'path', name: 'pk', required: true, schema: { type: 'integer' } },
        }),
    }),
    query: z.object({
      q: z
        .preprocess(
          (val) => {
            if (typeof val !== 'string') return val
            try {
              return JSON.parse(val)
            } catch {
              return val
            }
          },
          GetItemSchemaSchema.openapi({
            param: {
              content: {
                'application/json': { schema: { $ref: '#/components/schemas/get_item_schema' } },
              },
              in: 'query',
              name: 'q',
              required: false,
            },
          }),
        )
        .exactOptional(),
    }),
  },
  responses: {
    200: {
      description: 'Item from Model',
      content: {
        'application/json': {
          schema: z
            .object({
              description_columns: z
                .object({
                  column_name: z
                    .string()
                    .exactOptional()
                    .openapi({
                      description:
                        'The description for the column name. Will be translated by babel',
                      example: 'A Nice description for the column',
                    }),
                })
                .exactOptional()
                .openapi({ required: [] }),
              id: z.string().exactOptional().openapi({ description: 'The item id' }),
              label_columns: z
                .object({
                  column_name: z
                    .string()
                    .exactOptional()
                    .openapi({
                      description: 'The label for the column name. Will be translated by babel',
                      example: 'A Nice label for the column',
                    }),
                })
                .exactOptional()
                .openapi({ required: [] }),
              result: SavedQueryRestApiGetSchema.exactOptional(),
              show_columns: z
                .array(z.string())
                .exactOptional()
                .openapi({ description: 'A list of columns' }),
              show_title: z
                .string()
                .exactOptional()
                .openapi({
                  description: 'A title to render. Will be translated by babel',
                  example: 'Show Item Details',
                }),
            })
            .openapi({ required: [] }),
        },
      },
    },
    400: _400Response,
    401: _401Response,
    404: _404Response,
    422: _422Response,
    500: _500Response,
  },
  security: [{ jwt: [] }],
})

export const putSavedQueryPkRoute = createRoute({
  method: 'put',
  path: '/saved_query/{pk}',
  tags: ['Queries'],
  description: 'Update a saved query',
  request: {
    params: z.object({
      pk: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .openapi({
          param: { in: 'path', name: 'pk', required: true, schema: { type: 'integer' } },
        }),
    }),
    body: {
      description: 'Model schema',
      content: { 'application/json': { schema: SavedQueryRestApiPutSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Item changed',
      content: {
        'application/json': {
          schema: z
            .object({ result: SavedQueryRestApiPutSchema.exactOptional() })
            .openapi({ required: [] }),
        },
      },
    },
    400: _400Response,
    401: _401Response,
    404: _404Response,
    422: _422Response,
    500: _500Response,
  },
  security: [{ jwt: [] }],
})

export const deleteSavedQueryPkRoute = createRoute({
  method: 'delete',
  path: '/saved_query/{pk}',
  tags: ['Queries'],
  description: 'Delete saved query',
  request: {
    params: z.object({
      pk: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .openapi({
          param: { in: 'path', name: 'pk', required: true, schema: { type: 'integer' } },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Item deleted',
      content: {
        'application/json': {
          schema: z.object({ message: z.string().exactOptional() }).openapi({ required: [] }),
        },
      },
    },
    404: _404Response,
    422: _422Response,
    500: _500Response,
  },
  security: [{ jwt: [] }],
})

export const getSecurityCsrfTokenIndexRoute = createRoute({
  method: 'get',
  path: '/security/csrf_token/',
  tags: ['Security'],
  description: 'Fetch the CSRF token',
  responses: {
    200: {
      description: 'Result contains the CSRF token',
      content: {
        'application/json': {
          schema: z.object({ result: z.string().exactOptional() }).openapi({ required: [] }),
        },
      },
    },
    401: _401Response,
    500: _500Response,
  },
  security: [{ jwt: [] }],
})

export const postSecurityLoginRoute = createRoute({
  method: 'post',
  path: '/security/login',
  tags: ['Security'],
  description: 'Authenticate and get a JWT access and refresh token',
  request: {
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              password: z
                .string()
                .exactOptional()
                .openapi({
                  description: 'The password for authentication',
                  example: 'complex-password',
                }),
              provider: z
                .enum(['db', 'ldap'])
                .exactOptional()
                .openapi({ description: 'Choose an authentication provider', example: 'db' }),
              refresh: z
                .boolean()
                .exactOptional()
                .openapi({
                  description: 'If true a refresh token is provided also',
                  example: true,
                }),
              username: z
                .string()
                .exactOptional()
                .openapi({ description: 'The username for authentication', example: 'admin' }),
            })
            .openapi({ required: [] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Authentication Successful',
      content: {
        'application/json': {
          schema: z
            .object({
              access_token: z.string().exactOptional(),
              refresh_token: z.string().exactOptional(),
            })
            .openapi({ required: [] }),
        },
      },
    },
    400: _400Response,
    401: _401Response,
    500: _500Response,
  },
})

export const postSecurityRefreshRoute = createRoute({
  method: 'post',
  path: '/security/refresh',
  tags: ['Security'],
  description: 'Use the refresh token to get a new JWT access token',
  responses: {
    200: {
      description: 'Refresh Successful',
      content: {
        'application/json': {
          schema: z
            .object({
              access_token: z
                .string()
                .exactOptional()
                .openapi({ description: 'A new refreshed access token' }),
            })
            .openapi({ required: [] }),
        },
      },
    },
    401: _401Response,
    500: _500Response,
  },
  security: [{ jwt_refresh: [] }],
})
