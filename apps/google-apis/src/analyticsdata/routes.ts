import { createRoute, z } from '@hono/zod-openapi'

const NumericValueSchema = z
  .object({
    doubleValue: z.float64().exactOptional().openapi({ description: 'Double value' }),
    int64Value: z.string().exactOptional().openapi({ description: 'Integer value' }),
  })
  .openapi({ description: 'To represent a number.', required: [] })
  .openapi('NumericValue')

const BetweenFilterSchema = z
  .object({
    fromValue: NumericValueSchema.exactOptional().openapi({
      description: 'Begins with this number.',
    }),
    toValue: NumericValueSchema.exactOptional().openapi({ description: 'Ends with this number.' }),
  })
  .openapi({
    description: 'To express that the result needs to be between two numbers (inclusive).',
    required: [],
  })
  .openapi('BetweenFilter')

const InListFilterSchema = z
  .object({
    caseSensitive: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'If true, the string value is case sensitive.' }),
    values: z
      .array(z.string())
      .exactOptional()
      .openapi({ description: 'The list of string values. Must be non-empty.' }),
  })
  .openapi({ description: 'The result needs to be in a list of string values.', required: [] })
  .openapi('InListFilter')

const NumericFilterSchema = z
  .object({
    operation: z
      .enum([
        'OPERATION_UNSPECIFIED',
        'EQUAL',
        'LESS_THAN',
        'LESS_THAN_OR_EQUAL',
        'GREATER_THAN',
        'GREATER_THAN_OR_EQUAL',
      ])
      .exactOptional()
      .openapi({ description: 'The operation type for this filter.' }),
    value: NumericValueSchema.exactOptional().openapi({
      description: 'A numeric value or a date value.',
    }),
  })
  .openapi({ description: 'Filters for numeric or date values.', required: [] })
  .openapi('NumericFilter')

const StringFilterSchema = z
  .object({
    caseSensitive: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'If true, the string value is case sensitive.' }),
    matchType: z
      .enum([
        'MATCH_TYPE_UNSPECIFIED',
        'EXACT',
        'BEGINS_WITH',
        'ENDS_WITH',
        'CONTAINS',
        'FULL_REGEXP',
        'PARTIAL_REGEXP',
      ])
      .exactOptional()
      .openapi({ description: 'The match type for this filter.' }),
    value: z
      .string()
      .exactOptional()
      .openapi({ description: 'The string value used for the matching.' }),
  })
  .openapi({ description: 'The filter for string', required: [] })
  .openapi('StringFilter')

type FilterType = {
  betweenFilter?: z.infer<typeof BetweenFilterSchema>
  fieldName?: string
  inListFilter?: z.infer<typeof InListFilterSchema>
  numericFilter?: z.infer<typeof NumericFilterSchema>
  stringFilter?: z.infer<typeof StringFilterSchema>
}

const FilterExpressionListSchema: z.ZodType<FilterExpressionListType> = z
  .lazy(() =>
    z
      .object({
        expressions: z
          .array(FilterExpressionSchema)
          .exactOptional()
          .openapi({ description: 'A list of filter expressions.' }),
      })
      .openapi({ description: 'A list of filter expressions.', required: [] }),
  )
  .openapi('FilterExpressionList')

const FilterSchema: z.ZodType<FilterType> = z
  .lazy(() =>
    z
      .object({
        betweenFilter: BetweenFilterSchema.exactOptional().openapi({
          description: 'A filter for two values.',
        }),
        fieldName: z
          .string()
          .exactOptional()
          .openapi({
            description:
              "The dimension name or metric name. In most methods, dimensions & metrics can be used for the first time in this field. However in a RunPivotReportRequest, this field must be additionally specified by name in the RunPivotReportRequest's dimensions or metrics.",
          }),
        inListFilter: InListFilterSchema.exactOptional().openapi({
          description: 'A filter for in list values.',
        }),
        numericFilter: NumericFilterSchema.exactOptional().openapi({
          description: 'A filter for numeric or date values.',
        }),
        stringFilter: StringFilterSchema.exactOptional().openapi({
          description: 'Strings related filter.',
        }),
      })
      .openapi({
        description: 'An expression to filter dimension or metric values.',
        required: [],
      }),
  )
  .openapi('Filter')

type FilterExpressionType = {
  andGroup?: z.infer<typeof FilterExpressionListSchema>
  filter?: z.infer<typeof FilterSchema>
  notExpression?: FilterExpressionType
  orGroup?: z.infer<typeof FilterExpressionListSchema>
}

const FilterExpressionSchema: z.ZodType<FilterExpressionType> = z
  .lazy(() =>
    z
      .object({
        andGroup: FilterExpressionListSchema.exactOptional().openapi({
          description: 'The FilterExpressions in and_group have an AND relationship.',
        }),
        filter: FilterSchema.exactOptional().openapi({
          description:
            "A primitive filter. In the same FilterExpression, all of the filter's field names need to be either all dimensions or all metrics.",
        }),
        notExpression: FilterExpressionSchema.exactOptional().openapi({
          description: 'The FilterExpression is NOT of not_expression.',
        }),
        orGroup: FilterExpressionListSchema.exactOptional().openapi({
          description: 'The FilterExpressions in or_group have an OR relationship.',
        }),
      })
      .openapi({
        description:
          'To express dimension or metric filters. The fields in the same FilterExpression need to be either all dimensions or all metrics.',
        required: [],
      }),
  )
  .openapi('FilterExpression')

type FilterExpressionListType = { expressions?: z.infer<typeof FilterExpressionSchema>[] }

const DimensionMetadataSchema = z
  .object({
    apiName: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "This dimension's name. Useable in [Dimension](#Dimension)'s `name`. For example, `eventName`.",
      }),
    category: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The display name of the category that this dimension belongs to. Similar dimensions and metrics are categorized together.',
      }),
    customDefinition: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'True if the dimension is custom to this property. This includes user, event, & item scoped custom dimensions; to learn more about custom dimensions, see https://support.google.com/analytics/answer/14240153. This also include custom channel groups; to learn more about custom channel groups, see https://support.google.com/analytics/answer/13051316.',
      }),
    deprecatedApiNames: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description:
          'Still usable but deprecated names for this dimension. If populated, this dimension is available by either `apiName` or one of `deprecatedApiNames` for a period of time. After the deprecation period, the dimension will be available only by `apiName`.',
      }),
    description: z
      .string()
      .exactOptional()
      .openapi({ description: 'Description of how this dimension is used and calculated.' }),
    uiName: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "This dimension's name within the Google Analytics user interface. For example, `Event name`.",
      }),
  })
  .openapi({ description: 'Explains a dimension.', required: [] })
  .openapi('DimensionMetadata')

const MetricMetadataSchema = z
  .object({
    apiName: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "A metric name. Useable in [Metric](#Metric)'s `name`. For example, `eventCount`.",
      }),
    blockedReasons: z
      .array(z.enum(['BLOCKED_REASON_UNSPECIFIED', 'NO_REVENUE_METRICS', 'NO_COST_METRICS']))
      .exactOptional()
      .openapi({
        description:
          'If reasons are specified, your access is blocked to this metric for this property. API requests from you to this property for this metric will succeed; however, the report will contain only zeros for this metric. API requests with metric filters on blocked metrics will fail. If reasons are empty, you have access to this metric. To learn more, see [Access and data-restriction management](https://support.google.com/analytics/answer/10851388).',
      }),
    category: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The display name of the category that this metrics belongs to. Similar dimensions and metrics are categorized together.',
      }),
    customDefinition: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'True if the metric is a custom metric for this property.' }),
    deprecatedApiNames: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description:
          'Still usable but deprecated names for this metric. If populated, this metric is available by either `apiName` or one of `deprecatedApiNames` for a period of time. After the deprecation period, the metric will be available only by `apiName`.',
      }),
    description: z
      .string()
      .exactOptional()
      .openapi({ description: 'Description of how this metric is used and calculated.' }),
    expression: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "The mathematical expression for this derived metric. Can be used in [Metric](#Metric)'s `expression` field for equivalent reports. Most metrics are not expressions, and for non-expressions, this field is empty.",
      }),
    type: z
      .enum([
        'METRIC_TYPE_UNSPECIFIED',
        'TYPE_INTEGER',
        'TYPE_FLOAT',
        'TYPE_SECONDS',
        'TYPE_MILLISECONDS',
        'TYPE_MINUTES',
        'TYPE_HOURS',
        'TYPE_STANDARD',
        'TYPE_CURRENCY',
        'TYPE_FEET',
        'TYPE_MILES',
        'TYPE_METERS',
        'TYPE_KILOMETERS',
      ])
      .exactOptional()
      .openapi({ description: 'The type of this metric.' }),
    uiName: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "This metric's name within the Google Analytics user interface. For example, `Event count`.",
      }),
  })
  .openapi({ description: 'Explains a metric.', required: [] })
  .openapi('MetricMetadata')

type MetadataType = {
  dimensions?: z.infer<typeof DimensionMetadataSchema>[]
  metrics?: z.infer<typeof MetricMetadataSchema>[]
  name?: string
}

const DimensionOrderBySchema = z
  .object({
    dimensionName: z
      .string()
      .exactOptional()
      .openapi({ description: 'A dimension name in the request to order by.' }),
    orderType: z
      .enum(['ORDER_TYPE_UNSPECIFIED', 'ALPHANUMERIC', 'CASE_INSENSITIVE_ALPHANUMERIC', 'NUMERIC'])
      .exactOptional()
      .openapi({ description: 'Controls the rule for dimension value ordering.' }),
  })
  .openapi({ description: 'Sorts by dimension values.', required: [] })
  .openapi('DimensionOrderBy')

const MetricOrderBySchema = z
  .object({
    metricName: z
      .string()
      .exactOptional()
      .openapi({ description: 'A metric name in the request to order by.' }),
  })
  .openapi({ description: 'Sorts by metric values.', required: [] })
  .openapi('MetricOrderBy')

const PivotSelectionSchema = z
  .object({
    dimensionName: z
      .string()
      .exactOptional()
      .openapi({ description: 'Must be a dimension name from the request.' }),
    dimensionValue: z
      .string()
      .exactOptional()
      .openapi({ description: 'Order by only when the named dimension is this value.' }),
  })
  .openapi({
    description:
      'A pair of dimension names and values. Rows with this dimension pivot pair are ordered by the metric\'s value. For example if pivots = {{"browser", "Chrome"}} and metric_name = "Sessions", then the rows will be sorted based on Sessions in Chrome. ---------|----------|----------------|----------|---------------- | Chrome | Chrome | Safari | Safari ---------|----------|----------------|----------|---------------- Country | Sessions | Pages/Sessions | Sessions | Pages/Sessions ---------|----------|----------------|----------|---------------- US | 2 | 2 | 3 | 1 ---------|----------|----------------|----------|---------------- Canada | 3 | 1 | 4 | 1 ---------|----------|----------------|----------|----------------',
    required: [],
  })
  .openapi('PivotSelection')

const PivotOrderBySchema = z
  .object({
    metricName: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'In the response to order by, order rows by this column. Must be a metric name from the request.',
      }),
    pivotSelections: z
      .array(PivotSelectionSchema)
      .exactOptional()
      .openapi({
        description:
          "Used to select a dimension name and value pivot. If multiple pivot selections are given, the sort occurs on rows where all pivot selection dimension name and value pairs match the row's dimension name and value pair.",
      }),
  })
  .openapi({ description: 'Sorts by a pivot column group.', required: [] })
  .openapi('PivotOrderBy')

type OrderByType = {
  desc?: boolean
  dimension?: z.infer<typeof DimensionOrderBySchema>
  metric?: z.infer<typeof MetricOrderBySchema>
  pivot?: z.infer<typeof PivotOrderBySchema>
}

const ActiveMetricRestrictionSchema = z
  .object({
    metricName: z
      .string()
      .exactOptional()
      .openapi({ description: 'The name of the restricted metric.' }),
    restrictedMetricTypes: z
      .array(z.enum(['RESTRICTED_METRIC_TYPE_UNSPECIFIED', 'COST_DATA', 'REVENUE_DATA']))
      .exactOptional()
      .openapi({ description: "The reason for this metric's restriction." }),
  })
  .openapi({ description: 'A metric actively restricted in creating the report.', required: [] })
  .openapi('ActiveMetricRestriction')

const V1betaAudienceDimensionSchema = z
  .object({
    dimensionName: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Optional. The API name of the dimension. See the [API Dimensions](https://developers.google.com/analytics/devguides/reporting/data/v1/audience-list-api-schema#dimensions) for the list of dimension names.',
      }),
  })
  .openapi({
    description:
      'An audience dimension is a user attribute. Specific user attributed are requested and then later returned in the `QueryAudienceExportResponse`.',
    required: [],
  })
  .openapi('V1betaAudienceDimension')

const AudienceExportSchema = z
  .object({
    audience: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Required. The audience resource name. This resource name identifies the audience being listed and is shared between the Analytics Data & Admin APIs. Format: `properties/{property}/audiences/{audience}`',
      }),
    audienceDisplayName: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Output only. The descriptive display name for this audience. For example, "Purchasers".',
        readOnly: true,
      }),
    beginCreatingTime: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Output only. The time when CreateAudienceExport was called and the AudienceExport began the `CREATING` state.',
        readOnly: true,
      }),
    creationQuotaTokensCharged: z
      .int32()
      .exactOptional()
      .openapi({
        description:
          'Output only. The total quota tokens charged during creation of the AudienceExport. Because this token count is based on activity from the `CREATING` state, this tokens charged will be fixed once an AudienceExport enters the `ACTIVE` or `FAILED` states.',
        readOnly: true,
      }),
    dimensions: z
      .array(V1betaAudienceDimensionSchema)
      .exactOptional()
      .openapi({
        description: 'Required. The dimensions requested and displayed in the query response.',
      }),
    errorMessage: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Output only. Error message is populated when an audience export fails during creation. A common reason for such a failure is quota exhaustion.',
        readOnly: true,
      }),
    name: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Output only. Identifier. The audience export resource name assigned during creation. This resource name identifies this `AudienceExport`. Format: `properties/{property}/audienceExports/{audience_export}`',
        readOnly: true,
      }),
    percentageCompleted: z
      .float64()
      .exactOptional()
      .openapi({
        description:
          'Output only. The percentage completed for this audience export ranging between 0 to 100.',
        readOnly: true,
      }),
    rowCount: z
      .int32()
      .exactOptional()
      .openapi({
        description: 'Output only. The total number of rows in the AudienceExport result.',
        readOnly: true,
      }),
    state: z
      .enum(['STATE_UNSPECIFIED', 'CREATING', 'ACTIVE', 'FAILED'])
      .exactOptional()
      .openapi({
        description: 'Output only. The current state for this AudienceExport.',
        readOnly: true,
      }),
  })
  .openapi({
    description:
      "An audience export is a list of users in an audience at the time of the list's creation. One audience may have multiple audience exports created for different days.",
    required: [],
  })
  .openapi('AudienceExport')

const AudienceListMetadataSchema = z
  .object({})
  .openapi({ description: 'This metadata is currently blank.' })
  .openapi('AudienceListMetadata')

const CohortReportSettingsSchema = z
  .object({
    accumulate: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'If true, accumulates the result from first touch day to the end day. Not supported in `RunReportRequest`.',
      }),
  })
  .openapi({ description: 'Optional settings of a cohort report.', required: [] })
  .openapi('CohortReportSettings')

const DateRangeSchema = z
  .object({
    endDate: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "The inclusive end date for the query in the format `YYYY-MM-DD`. Cannot be before `start_date`. The format `NdaysAgo`, `yesterday`, or `today` is also accepted, and in that case, the date is inferred based on the property's reporting time zone.",
      }),
    name: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Assigns a name to this date range. The dimension `dateRange` is valued to this name in a report response. If set, cannot begin with `date_range_` or `RESERVED_`. If not set, date ranges are named by their zero based index in the request: `date_range_0`, `date_range_1`, etc.',
      }),
    startDate: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "The inclusive start date for the query in the format `YYYY-MM-DD`. Cannot be after `end_date`. The format `NdaysAgo`, `yesterday`, or `today` is also accepted, and in that case, the date is inferred based on the property's reporting time zone.",
      }),
  })
  .openapi({
    description:
      'A contiguous set of days: `startDate`, `startDate + 1`, ..., `endDate`. Requests are allowed up to 4 date ranges.',
    required: [],
  })
  .openapi('DateRange')

const CohortSchema = z
  .object({
    dateRange: DateRangeSchema.exactOptional().openapi({
      description:
        "The cohort selects users whose first touch date is between start date and end date defined in the `dateRange`. This `dateRange` does not specify the full date range of event data that is present in a cohort report. In a cohort report, this `dateRange` is extended by the granularity and offset present in the `cohortsRange`; event data for the extended reporting date range is present in a cohort report. In a cohort request, this `dateRange` is required and the `dateRanges` in the `RunReportRequest` or `RunPivotReportRequest` must be unspecified. This `dateRange` should generally be aligned with the cohort's granularity. If `CohortsRange` uses daily granularity, this `dateRange` can be a single day. If `CohortsRange` uses weekly granularity, this `dateRange` can be aligned to a week boundary, starting at Sunday and ending Saturday. If `CohortsRange` uses monthly granularity, this `dateRange` can be aligned to a month, starting at the first and ending on the last day of the month.",
    }),
    dimension: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Dimension used by the cohort. Required and only supports `firstSessionDate`.',
      }),
    name: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Assigns a name to this cohort. The dimension `cohort` is valued to this name in a report response. If set, cannot begin with `cohort_` or `RESERVED_`. If not set, cohorts are named by their zero based index `cohort_0`, `cohort_1`, etc.',
      }),
  })
  .openapi({
    description:
      'Defines a cohort selection criteria. A cohort is a group of users who share a common characteristic. For example, users with the same `firstSessionDate` belong to the same cohort.',
    required: [],
  })
  .openapi('Cohort')

const CohortsRangeSchema = z
  .object({
    endOffset: z
      .int32()
      .exactOptional()
      .openapi({
        description:
          'Required. `endOffset` specifies the end date of the extended reporting date range for a cohort report. `endOffset` can be any positive integer but is commonly set to 5 to 10 so that reports contain data on the cohort for the next several granularity time periods. If `granularity` is `DAILY`, the `endDate` of the extended reporting date range is `endDate` of the cohort plus `endOffset` days. If `granularity` is `WEEKLY`, the `endDate` of the extended reporting date range is `endDate` of the cohort plus `endOffset * 7` days. If `granularity` is `MONTHLY`, the `endDate` of the extended reporting date range is `endDate` of the cohort plus `endOffset * 30` days.',
      }),
    granularity: z
      .enum(['GRANULARITY_UNSPECIFIED', 'DAILY', 'WEEKLY', 'MONTHLY'])
      .exactOptional()
      .openapi({
        description:
          'Required. The granularity used to interpret the `startOffset` and `endOffset` for the extended reporting date range for a cohort report.',
      }),
    startOffset: z
      .int32()
      .exactOptional()
      .openapi({
        description:
          '`startOffset` specifies the start date of the extended reporting date range for a cohort report. `startOffset` is commonly set to 0 so that reports contain data from the acquisition of the cohort forward. If `granularity` is `DAILY`, the `startDate` of the extended reporting date range is `startDate` of the cohort plus `startOffset` days. If `granularity` is `WEEKLY`, the `startDate` of the extended reporting date range is `startDate` of the cohort plus `startOffset * 7` days. If `granularity` is `MONTHLY`, the `startDate` of the extended reporting date range is `startDate` of the cohort plus `startOffset * 30` days.',
      }),
  })
  .openapi({
    description:
      'Configures the extended reporting date range for a cohort report. Specifies an offset duration to follow the cohorts over.',
    required: [],
  })
  .openapi('CohortsRange')

const CohortSpecSchema = z
  .object({
    cohortReportSettings: CohortReportSettingsSchema.exactOptional().openapi({
      description: 'Optional settings for a cohort report.',
    }),
    cohorts: z
      .array(CohortSchema)
      .exactOptional()
      .openapi({
        description:
          'Defines the selection criteria to group users into cohorts. Most cohort reports define only a single cohort. If multiple cohorts are specified, each cohort can be recognized in the report by their name.',
      }),
    cohortsRange: CohortsRangeSchema.exactOptional().openapi({
      description:
        'Cohort reports follow cohorts over an extended reporting date range. This range specifies an offset duration to follow the cohorts over.',
    }),
  })
  .openapi({
    description:
      'The specification of cohorts for a cohort report. Cohort reports create a time series of user retention for the cohort. For example, you could select the cohort of users that were acquired in the first week of September and follow that cohort for the next six weeks. Selecting the users acquired in the first week of September cohort is specified in the `cohort` object. Following that cohort for the next six weeks is specified in the `cohortsRange` object. For examples, see [Cohort Report Examples](https://developers.google.com/analytics/devguides/reporting/data/v1/advanced#cohort_report_examples). The report response could show a weekly time series where say your app has retained 60% of this cohort after three weeks and 25% of this cohort after six weeks. These two percentages can be calculated by the metric `cohortActiveUsers/cohortTotalUsers` and will be separate rows in the report.',
    required: [],
  })
  .openapi('CohortSpec')

const ConcatenateExpressionSchema = z
  .object({
    delimiter: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The delimiter placed between dimension names. Delimiters are often single characters such as "|" or "," but can be longer strings. If a dimension value contains the delimiter, both will be present in response with no distinction. For example if dimension 1 value = "US,FR", dimension 2 value = "JP", and delimiter = ",", then the response will contain "US,FR,JP".',
      }),
    dimensionNames: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description:
          'Names of dimensions. The names must refer back to names in the dimensions field of the request.',
      }),
  })
  .openapi({ description: 'Used to combine dimension values to a single dimension.', required: [] })
  .openapi('ConcatenateExpression')

const CaseExpressionSchema = z
  .object({
    dimensionName: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Name of a dimension. The name must refer back to a name in dimensions field of the request.',
      }),
  })
  .openapi({ description: 'Used to convert a dimension value to a single case.', required: [] })
  .openapi('CaseExpression')

const DimensionExpressionSchema = z
  .object({
    concatenate: ConcatenateExpressionSchema.exactOptional().openapi({
      description:
        'Used to combine dimension values to a single dimension. For example, dimension "country, city": concatenate(country, ", ", city).',
    }),
    lowerCase: CaseExpressionSchema.exactOptional().openapi({
      description: 'Used to convert a dimension value to lower case.',
    }),
    upperCase: CaseExpressionSchema.exactOptional().openapi({
      description: 'Used to convert a dimension value to upper case.',
    }),
  })
  .openapi({
    description:
      'Used to express a dimension which is the result of a formula of multiple dimensions. Example usages: 1) lower_case(dimension) 2) concatenate(dimension1, symbol, dimension2).',
    required: [],
  })
  .openapi('DimensionExpression')

const DimensionSchema = z
  .object({
    dimensionExpression: DimensionExpressionSchema.exactOptional().openapi({
      description:
        'One dimension can be the result of an expression of multiple dimensions. For example, dimension "country, city": concatenate(country, ", ", city).',
    }),
    name: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The name of the dimension. See the [API Dimensions](https://developers.google.com/analytics/devguides/reporting/data/v1/api-schema#dimensions) for the list of dimension names supported by core reporting methods such as `runReport` and `batchRunReports`. See [Realtime Dimensions](https://developers.google.com/analytics/devguides/reporting/data/v1/realtime-api-schema#dimensions) for the list of dimension names supported by the `runRealtimeReport` method. See [Funnel Dimensions](https://developers.google.com/analytics/devguides/reporting/data/v1/exploration-api-schema#dimensions) for the list of dimension names supported by the `runFunnelReport` method. If `dimensionExpression` is specified, `name` can be any string that you would like within the allowed character set. For example if a `dimensionExpression` concatenates `country` and `city`, you could call that dimension `countryAndCity`. Dimension names that you choose must match the regular expression `^[a-zA-Z0-9_]$`. Dimensions are referenced by `name` in `dimensionFilter`, `orderBys`, `dimensionExpression`, and `pivots`.',
      }),
  })
  .openapi({
    description:
      'Dimensions are attributes of your data. For example, the dimension city indicates the city from which an event originates. Dimension values in report responses are strings; for example, the city could be "Paris" or "New York". Requests are allowed up to 9 dimensions.',
    required: [],
  })
  .openapi('Dimension')

const MetricSchema = z
  .object({
    expression: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'A mathematical expression for derived metrics. For example, the metric Event count per user is `eventCount/totalUsers`.',
      }),
    invisible: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Indicates if a metric is invisible in the report response. If a metric is invisible, the metric will not produce a column in the response, but can be used in `metricFilter`, `orderBys`, or a metric `expression`.',
      }),
    name: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "The name of the metric. See the [API Metrics](https://developers.google.com/analytics/devguides/reporting/data/v1/api-schema#metrics) for the list of metric names supported by core reporting methods such as `runReport` and `batchRunReports`. See [Realtime Metrics](https://developers.google.com/analytics/devguides/reporting/data/v1/realtime-api-schema#metrics) for the list of metric names supported by the `runRealtimeReport` method. See [Funnel Metrics](https://developers.google.com/analytics/devguides/reporting/data/v1/exploration-api-schema#metrics) for the list of metric names supported by the `runFunnelReport` method. If `expression` is specified, `name` can be any string that you would like within the allowed character set. For example if `expression` is `screenPageViews/sessions`, you could call that metric's name = `viewsPerSession`. Metric names that you choose must match the regular expression `^[a-zA-Z0-9_]$`. Metrics are referenced by `name` in `metricFilter`, `orderBys`, and metric `expression`.",
      }),
  })
  .openapi({
    description:
      'The quantitative measurements of a report. For example, the metric `eventCount` is the total number of events. Requests are allowed up to 10 metrics.',
    required: [],
  })
  .openapi('Metric')

const OrderBySchema: z.ZodType<OrderByType> = z
  .lazy(() =>
    z
      .object({
        desc: z
          .boolean()
          .exactOptional()
          .openapi({ description: 'If true, sorts by descending order.' }),
        dimension: DimensionOrderBySchema.exactOptional().openapi({
          description: "Sorts results by a dimension's values.",
        }),
        metric: MetricOrderBySchema.exactOptional().openapi({
          description: "Sorts results by a metric's values.",
        }),
        pivot: PivotOrderBySchema.exactOptional().openapi({
          description: "Sorts results by a metric's values within a pivot column group.",
        }),
      })
      .openapi({
        description:
          'Order bys define how rows will be sorted in the response. For example, ordering rows by descending event count is one ordering, and ordering rows by the event name string is a different ordering.',
        required: [],
      }),
  )
  .openapi('OrderBy')

const PivotSchema = z
  .object({
    fieldNames: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description:
          'Dimension names for visible columns in the report response. Including "dateRange" produces a date range column; for each row in the response, dimension values in the date range column will indicate the corresponding date range from the request.',
      }),
    limit: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The number of unique combinations of dimension values to return in this pivot. The `limit` parameter is required. A `limit` of 10,000 is common for single pivot requests. The product of the `limit` for each `pivot` in a `RunPivotReportRequest` must not exceed 250,000. For example, a two pivot request with `limit: 1000` in each pivot will fail because the product is `1,000,000`.',
      }),
    metricAggregations: z
      .array(z.enum(['METRIC_AGGREGATION_UNSPECIFIED', 'TOTAL', 'MINIMUM', 'MAXIMUM', 'COUNT']))
      .exactOptional()
      .openapi({
        description:
          'Aggregate the metrics by dimensions in this pivot using the specified metric_aggregations.',
      }),
    offset: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The row count of the start row. The first row is counted as row 0.',
      }),
    orderBys: z
      .array(OrderBySchema)
      .exactOptional()
      .openapi({
        description:
          'Specifies how dimensions are ordered in the pivot. In the first Pivot, the OrderBys determine Row and PivotDimensionHeader ordering; in subsequent Pivots, the OrderBys determine only PivotDimensionHeader ordering. Dimensions specified in these OrderBys must be a subset of Pivot.field_names.',
      }),
  })
  .openapi({
    description: 'Describes the visible dimension columns and rows in the report response.',
    required: [],
  })
  .openapi('Pivot')

const RunPivotReportRequestSchema = z
  .object({
    cohortSpec: CohortSpecSchema.exactOptional().openapi({
      description:
        "Cohort group associated with this request. If there is a cohort group in the request the 'cohort' dimension must be present.",
    }),
    currencyCode: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'A currency code in ISO4217 format, such as "AED", "USD", "JPY". If the field is empty, the report uses the property\'s default currency.',
      }),
    dateRanges: z
      .array(DateRangeSchema)
      .exactOptional()
      .openapi({
        description:
          'The date range to retrieve event data for the report. If multiple date ranges are specified, event data from each date range is used in the report. A special dimension with field name "dateRange" can be included in a Pivot\'s field names; if included, the report compares between date ranges. In a cohort request, this `dateRanges` must be unspecified.',
      }),
    dimensionFilter: FilterExpressionSchema.exactOptional().openapi({
      description:
        'The filter clause of dimensions. Dimensions must be requested to be used in this filter. Metrics cannot be used in this filter.',
    }),
    dimensions: z
      .array(DimensionSchema)
      .exactOptional()
      .openapi({
        description:
          'The dimensions requested. All defined dimensions must be used by one of the following: dimension_expression, dimension_filter, pivots, order_bys.',
      }),
    keepEmptyRows: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'If false or unspecified, each row with all metrics equal to 0 will not be returned. If true, these rows will be returned if they are not separately removed by a filter. Regardless of this `keep_empty_rows` setting, only data recorded by the Google Analytics (GA4) property can be displayed in a report. For example if a property never logs a `purchase` event, then a query for the `eventName` dimension and `eventCount` metric will not have a row eventName: "purchase" and eventCount: 0.',
      }),
    metricFilter: FilterExpressionSchema.exactOptional().openapi({
      description:
        'The filter clause of metrics. Applied at post aggregation phase, similar to SQL having-clause. Metrics must be requested to be used in this filter. Dimensions cannot be used in this filter.',
    }),
    metrics: z
      .array(MetricSchema)
      .exactOptional()
      .openapi({
        description:
          'The metrics requested, at least one metric needs to be specified. All defined metrics must be used by one of the following: metric_expression, metric_filter, order_bys.',
      }),
    pivots: z
      .array(PivotSchema)
      .exactOptional()
      .openapi({
        description:
          "Describes the visual format of the report's dimensions in columns or rows. The union of the fieldNames (dimension names) in all pivots must be a subset of dimension names defined in Dimensions. No two pivots can share a dimension. A dimension is only visible if it appears in a pivot.",
      }),
    property: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'A Google Analytics GA4 property identifier whose events are tracked. Specified in the URL path and not the body. To learn more, see [where to find your Property ID](https://developers.google.com/analytics/devguides/reporting/data/v1/property-id). Within a batch request, this property should either be unspecified or consistent with the batch-level property. Example: properties/1234',
      }),
    returnPropertyQuota: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          "Toggles whether to return the current state of this Analytics Property's quota. Quota is returned in [PropertyQuota](#PropertyQuota).",
      }),
  })
  .openapi({ description: 'The request to generate a pivot report.', required: [] })
  .openapi('RunPivotReportRequest')

const BatchRunPivotReportsRequestSchema = z
  .object({
    requests: z
      .array(RunPivotReportRequestSchema)
      .exactOptional()
      .openapi({
        description:
          'Individual requests. Each request has a separate pivot report response. Each batch request is allowed up to 5 requests.',
      }),
  })
  .openapi({
    description: 'The batch request containing multiple pivot report requests.',
    required: [],
  })
  .openapi('BatchRunPivotReportsRequest')

const DimensionValueSchema = z
  .object({
    value: z
      .string()
      .exactOptional()
      .openapi({ description: 'Value as a string if the dimension type is a string.' }),
  })
  .openapi({ description: 'The value of a dimension.', required: [] })
  .openapi('DimensionValue')

const MetricValueSchema = z
  .object({
    value: z
      .string()
      .exactOptional()
      .openapi({ description: 'Measurement value. See MetricHeader for type.' }),
  })
  .openapi({ description: 'The value of a metric.', required: [] })
  .openapi('MetricValue')

const RowSchema = z
  .object({
    dimensionValues: z
      .array(DimensionValueSchema)
      .exactOptional()
      .openapi({
        description:
          'List of requested dimension values. In a PivotReport, dimension_values are only listed for dimensions included in a pivot.',
      }),
    metricValues: z
      .array(MetricValueSchema)
      .exactOptional()
      .openapi({ description: 'List of requested visible metric values.' }),
  })
  .openapi({
    description:
      'Report data for each row. For example if RunReportRequest contains: ```none "dimensions": [ { "name": "eventName" }, { "name": "countryId" } ], "metrics": [ { "name": "eventCount" } ] ``` One row with \'in_app_purchase\' as the eventName, \'JP\' as the countryId, and 15 as the eventCount, would be: ```none "dimensionValues": [ { "value": "in_app_purchase" }, { "value": "JP" } ], "metricValues": [ { "value": "15" } ] ```',
    required: [],
  })
  .openapi('Row')

const DimensionHeaderSchema = z
  .object({ name: z.string().exactOptional().openapi({ description: "The dimension's name." }) })
  .openapi({
    description:
      'Describes a dimension column in the report. Dimensions requested in a report produce column entries within rows and DimensionHeaders. However, dimensions used exclusively within filters or expressions do not produce columns in a report; correspondingly, those dimensions do not produce headers.',
    required: [],
  })
  .openapi('DimensionHeader')

const SamplingMetadataSchema = z
  .object({
    samplesReadCount: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "The total number of events read in this sampled report for a date range. This is the size of the subset this property's data that was analyzed in this report.",
      }),
    samplingSpaceSize: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "The total number of events present in this property's data that could have been analyzed in this report for a date range. Sampling uncovers the meaningful information about the larger data set, and this is the size of the larger data set. To calculate the percentage of available data that was used in this report, compute `samplesReadCount/samplingSpaceSize`.",
      }),
  })
  .openapi({
    description:
      'If this report results is [sampled](https://support.google.com/analytics/answer/13331292), this describes the percentage of events used in this report. Sampling is the practice of analyzing a subset of all data in order to uncover the meaningful information in the larger data set.',
    required: [],
  })
  .openapi('SamplingMetadata')

const SchemaRestrictionResponseSchema = z
  .object({
    activeMetricRestrictions: z
      .array(ActiveMetricRestrictionSchema)
      .exactOptional()
      .openapi({
        description:
          "All restrictions actively enforced in creating the report. For example, `purchaseRevenue` always has the restriction type `REVENUE_DATA`. However, this active response restriction is only populated if the user's custom role disallows access to `REVENUE_DATA`.",
      }),
  })
  .openapi({
    description:
      'The schema restrictions actively enforced in creating this report. To learn more, see [Access and data-restriction management](https://support.google.com/analytics/answer/10851388).',
    required: [],
  })
  .openapi('SchemaRestrictionResponse')

const ResponseMetaDataSchema = z
  .object({
    currencyCode: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The currency code used in this report. Intended to be used in formatting currency metrics like `purchaseRevenue` for visualization. If currency_code was specified in the request, this response parameter will echo the request parameter; otherwise, this response parameter is the property\'s current currency_code. Currency codes are string encodings of currency types from the ISO 4217 standard (https://en.wikipedia.org/wiki/ISO_4217); for example "USD", "EUR", "JPY". To learn more, see https://support.google.com/analytics/answer/9796179.',
      }),
    dataLossFromOtherRow: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'If true, indicates some buckets of dimension combinations are rolled into "(other)" row. This can happen for high cardinality reports. The metadata parameter dataLossFromOtherRow is populated based on the aggregated data table used in the report. The parameter will be accurately populated regardless of the filters and limits in the report. For example, the (other) row could be dropped from the report because the request contains a filter on sessionSource = google. This parameter will still be populated if data loss from other row was present in the input aggregate data used to generate this report. To learn more, see [About the (other) row and data sampling](https://support.google.com/analytics/answer/13208658#reports).',
      }),
    emptyReason: z
      .string()
      .exactOptional()
      .openapi({
        description: 'If empty reason is specified, the report is empty for this reason.',
      }),
    samplingMetadatas: z
      .array(SamplingMetadataSchema)
      .exactOptional()
      .openapi({
        description:
          'If this report results is [sampled](https://support.google.com/analytics/answer/13331292), this describes the percentage of events used in this report. One `samplingMetadatas` is populated for each date range. Each `samplingMetadatas` corresponds to a date range in order that date ranges were specified in the request. However if the results are not sampled, this field will not be defined.',
      }),
    schemaRestrictionResponse: SchemaRestrictionResponseSchema.exactOptional().openapi({
      description:
        'Describes the schema restrictions actively enforced in creating this report. To learn more, see [Access and data-restriction management](https://support.google.com/analytics/answer/10851388).',
    }),
    subjectToThresholding: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'If `subjectToThresholding` is true, this report is subject to thresholding and only returns data that meets the minimum aggregation thresholds. It is possible for a request to be subject to thresholding thresholding and no data is absent from the report, and this happens when all data is above the thresholds. To learn more, see [Data thresholds](https://support.google.com/analytics/answer/9383630).',
      }),
    timeZone: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The property\'s current timezone. Intended to be used to interpret time-based dimensions like `hour` and `minute`. Formatted as strings from the IANA Time Zone database (https://www.iana.org/time-zones); for example "America/New_York" or "Asia/Tokyo".',
      }),
  })
  .openapi({
    description: "Response's metadata carrying additional information about the report content.",
    required: [],
  })
  .openapi('ResponseMetaData')

const MetricHeaderSchema = z
  .object({
    name: z.string().exactOptional().openapi({ description: "The metric's name." }),
    type: z
      .enum([
        'METRIC_TYPE_UNSPECIFIED',
        'TYPE_INTEGER',
        'TYPE_FLOAT',
        'TYPE_SECONDS',
        'TYPE_MILLISECONDS',
        'TYPE_MINUTES',
        'TYPE_HOURS',
        'TYPE_STANDARD',
        'TYPE_CURRENCY',
        'TYPE_FEET',
        'TYPE_MILES',
        'TYPE_METERS',
        'TYPE_KILOMETERS',
      ])
      .exactOptional()
      .openapi({ description: "The metric's data type." }),
  })
  .openapi({
    description:
      'Describes a metric column in the report. Visible metrics requested in a report produce column entries within rows and MetricHeaders. However, metrics used exclusively within filters or expressions do not produce columns in a report; correspondingly, those metrics do not produce headers.',
    required: [],
  })
  .openapi('MetricHeader')

const PivotDimensionHeaderSchema = z
  .object({
    dimensionValues: z
      .array(DimensionValueSchema)
      .exactOptional()
      .openapi({ description: 'Values of multiple dimensions in a pivot.' }),
  })
  .openapi({ description: 'Summarizes dimension values from a row for this pivot.', required: [] })
  .openapi('PivotDimensionHeader')

const PivotHeaderSchema = z
  .object({
    pivotDimensionHeaders: z
      .array(PivotDimensionHeaderSchema)
      .exactOptional()
      .openapi({
        description:
          'The size is the same as the cardinality of the corresponding dimension combinations.',
      }),
    rowCount: z
      .int32()
      .exactOptional()
      .openapi({
        description:
          "The cardinality of the pivot. The total number of rows for this pivot's fields regardless of how the parameters `offset` and `limit` are specified in the request.",
      }),
  })
  .openapi({ description: "Dimensions' values in a single pivot.", required: [] })
  .openapi('PivotHeader')

const QuotaStatusSchema = z
  .object({
    consumed: z.int32().exactOptional().openapi({ description: 'Quota consumed by this request.' }),
    remaining: z
      .int32()
      .exactOptional()
      .openapi({ description: 'Quota remaining after this request.' }),
  })
  .openapi({ description: 'Current state for a particular quota group.', required: [] })
  .openapi('QuotaStatus')

const PropertyQuotaSchema = z
  .object({
    concurrentRequests: QuotaStatusSchema.exactOptional().openapi({
      description:
        'Standard Analytics Properties can send up to 10 concurrent requests; Analytics 360 Properties can use up to 50 concurrent requests.',
    }),
    potentiallyThresholdedRequestsPerHour: QuotaStatusSchema.exactOptional().openapi({
      description:
        'Analytics Properties can send up to 120 requests with potentially thresholded dimensions per hour. In a batch request, each report request is individually counted for this quota if the request contains potentially thresholded dimensions.',
    }),
    serverErrorsPerProjectPerHour: QuotaStatusSchema.exactOptional().openapi({
      description:
        'Standard Analytics Properties and cloud project pairs can have up to 10 server errors per hour; Analytics 360 Properties and cloud project pairs can have up to 50 server errors per hour.',
    }),
    tokensPerDay: QuotaStatusSchema.exactOptional().openapi({
      description:
        'Standard Analytics Properties can use up to 200,000 tokens per day; Analytics 360 Properties can use 2,000,000 tokens per day. Most requests consume fewer than 10 tokens.',
    }),
    tokensPerHour: QuotaStatusSchema.exactOptional().openapi({
      description:
        'Standard Analytics Properties can use up to 40,000 tokens per hour; Analytics 360 Properties can use 400,000 tokens per hour. An API request consumes a single number of tokens, and that number is deducted from all of the hourly, daily, and per project hourly quotas.',
    }),
    tokensPerProjectPerHour: QuotaStatusSchema.exactOptional().openapi({
      description:
        'Analytics Properties can use up to 35% of their tokens per project per hour. This amounts to standard Analytics Properties can use up to 14,000 tokens per project per hour, and Analytics 360 Properties can use 140,000 tokens per project per hour. An API request consumes a single number of tokens, and that number is deducted from all of the hourly, daily, and per project hourly quotas.',
    }),
  })
  .openapi({
    description:
      'Current state of all quotas for this Analytics Property. If any quota for a property is exhausted, all requests to that property will return Resource Exhausted errors.',
    required: [],
  })
  .openapi('PropertyQuota')

const RunPivotReportResponseSchema = z
  .object({
    aggregates: z
      .array(RowSchema)
      .exactOptional()
      .openapi({
        description:
          'Aggregation of metric values. Can be totals, minimums, or maximums. The returned aggregations are controlled by the metric_aggregations in the pivot. The type of aggregation returned in each row is shown by the dimension_values which are set to "RESERVED_".',
      }),
    dimensionHeaders: z
      .array(DimensionHeaderSchema)
      .exactOptional()
      .openapi({
        description:
          'Describes dimension columns. The number of DimensionHeaders and ordering of DimensionHeaders matches the dimensions present in rows.',
      }),
    kind: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Identifies what kind of resource this message is. This `kind` is always the fixed string "analyticsData#runPivotReport". Useful to distinguish between response types in JSON.',
      }),
    metadata: ResponseMetaDataSchema.exactOptional().openapi({
      description: 'Metadata for the report.',
    }),
    metricHeaders: z
      .array(MetricHeaderSchema)
      .exactOptional()
      .openapi({
        description:
          'Describes metric columns. The number of MetricHeaders and ordering of MetricHeaders matches the metrics present in rows.',
      }),
    pivotHeaders: z
      .array(PivotHeaderSchema)
      .exactOptional()
      .openapi({
        description:
          'Summarizes the columns and rows created by a pivot. Each pivot in the request produces one header in the response. If we have a request like this: "pivots": [{ "fieldNames": ["country", "city"] }, { "fieldNames": "eventName" }] We will have the following `pivotHeaders` in the response: "pivotHeaders" : [{ "dimensionHeaders": [{ "dimensionValues": [ { "value": "United Kingdom" }, { "value": "London" } ] }, { "dimensionValues": [ { "value": "Japan" }, { "value": "Osaka" } ] }] }, { "dimensionHeaders": [{ "dimensionValues": [{ "value": "session_start" }] }, { "dimensionValues": [{ "value": "scroll" }] }] }]',
      }),
    propertyQuota: PropertyQuotaSchema.exactOptional().openapi({
      description: "This Analytics Property's quota state including this request.",
    }),
    rows: z
      .array(RowSchema)
      .exactOptional()
      .openapi({
        description: 'Rows of dimension value combinations and metric values in the report.',
      }),
  })
  .openapi({
    description: 'The response pivot report table corresponding to a pivot request.',
    required: [],
  })
  .openapi('RunPivotReportResponse')

const BatchRunPivotReportsResponseSchema = z
  .object({
    kind: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Identifies what kind of resource this message is. This `kind` is always the fixed string "analyticsData#batchRunPivotReports". Useful to distinguish between response types in JSON.',
      }),
    pivotReports: z
      .array(RunPivotReportResponseSchema)
      .exactOptional()
      .openapi({
        description: 'Individual responses. Each response has a separate pivot report request.',
      }),
  })
  .openapi({ description: 'The batch response containing multiple pivot reports.', required: [] })
  .openapi('BatchRunPivotReportsResponse')

const RunReportRequestSchema = z
  .object({
    cohortSpec: CohortSpecSchema.exactOptional().openapi({
      description:
        "Cohort group associated with this request. If there is a cohort group in the request the 'cohort' dimension must be present.",
    }),
    currencyCode: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'A currency code in ISO4217 format, such as "AED", "USD", "JPY". If the field is empty, the report uses the property\'s default currency.',
      }),
    dateRanges: z
      .array(DateRangeSchema)
      .exactOptional()
      .openapi({
        description:
          'Date ranges of data to read. If multiple date ranges are requested, each response row will contain a zero based date range index. If two date ranges overlap, the event data for the overlapping days is included in the response rows for both date ranges. In a cohort request, this `dateRanges` must be unspecified.',
      }),
    dimensionFilter: FilterExpressionSchema.exactOptional().openapi({
      description:
        'Dimension filters let you ask for only specific dimension values in the report. To learn more, see [Fundamentals of Dimension Filters](https://developers.google.com/analytics/devguides/reporting/data/v1/basics#dimension_filters) for examples. Metrics cannot be used in this filter.',
    }),
    dimensions: z
      .array(DimensionSchema)
      .exactOptional()
      .openapi({ description: 'The dimensions requested and displayed.' }),
    keepEmptyRows: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'If false or unspecified, each row with all metrics equal to 0 will not be returned. If true, these rows will be returned if they are not separately removed by a filter. Regardless of this `keep_empty_rows` setting, only data recorded by the Google Analytics (GA4) property can be displayed in a report. For example if a property never logs a `purchase` event, then a query for the `eventName` dimension and `eventCount` metric will not have a row eventName: "purchase" and eventCount: 0.',
      }),
    limit: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "The number of rows to return. If unspecified, 10,000 rows are returned. The API returns a maximum of 250,000 rows per request, no matter how many you ask for. `limit` must be positive. The API can also return fewer rows than the requested `limit`, if there aren't as many dimension values as the `limit`. For instance, there are fewer than 300 possible values for the dimension `country`, so when reporting on only `country`, you can't get more than 300 rows, even if you set `limit` to a higher value. To learn more about this pagination parameter, see [Pagination](https://developers.google.com/analytics/devguides/reporting/data/v1/basics#pagination).",
      }),
    metricAggregations: z
      .array(z.enum(['METRIC_AGGREGATION_UNSPECIFIED', 'TOTAL', 'MINIMUM', 'MAXIMUM', 'COUNT']))
      .exactOptional()
      .openapi({
        description:
          'Aggregation of metrics. Aggregated metric values will be shown in rows where the dimension_values are set to "RESERVED_(MetricAggregation)".',
      }),
    metricFilter: FilterExpressionSchema.exactOptional().openapi({
      description:
        "The filter clause of metrics. Applied after aggregating the report's rows, similar to SQL having-clause. Dimensions cannot be used in this filter.",
    }),
    metrics: z
      .array(MetricSchema)
      .exactOptional()
      .openapi({ description: 'The metrics requested and displayed.' }),
    offset: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The row count of the start row. The first row is counted as row 0. When paging, the first request does not specify offset; or equivalently, sets offset to 0; the first request returns the first `limit` of rows. The second request sets offset to the `limit` of the first request; the second request returns the second `limit` of rows. To learn more about this pagination parameter, see [Pagination](https://developers.google.com/analytics/devguides/reporting/data/v1/basics#pagination).',
      }),
    orderBys: z
      .array(OrderBySchema)
      .exactOptional()
      .openapi({ description: 'Specifies how rows are ordered in the response.' }),
    property: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'A Google Analytics GA4 property identifier whose events are tracked. Specified in the URL path and not the body. To learn more, see [where to find your Property ID](https://developers.google.com/analytics/devguides/reporting/data/v1/property-id). Within a batch request, this property should either be unspecified or consistent with the batch-level property. Example: properties/1234',
      }),
    returnPropertyQuota: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          "Toggles whether to return the current state of this Analytics Property's quota. Quota is returned in [PropertyQuota](#PropertyQuota).",
      }),
  })
  .openapi({ description: 'The request to generate a report.', required: [] })
  .openapi('RunReportRequest')

const BatchRunReportsRequestSchema = z
  .object({
    requests: z
      .array(RunReportRequestSchema)
      .exactOptional()
      .openapi({
        description:
          'Individual requests. Each request has a separate report response. Each batch request is allowed up to 5 requests.',
      }),
  })
  .openapi({ description: 'The batch request containing multiple report requests.', required: [] })
  .openapi('BatchRunReportsRequest')

const RunReportResponseSchema = z
  .object({
    dimensionHeaders: z
      .array(DimensionHeaderSchema)
      .exactOptional()
      .openapi({
        description:
          'Describes dimension columns. The number of DimensionHeaders and ordering of DimensionHeaders matches the dimensions present in rows.',
      }),
    kind: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Identifies what kind of resource this message is. This `kind` is always the fixed string "analyticsData#runReport". Useful to distinguish between response types in JSON.',
      }),
    maximums: z
      .array(RowSchema)
      .exactOptional()
      .openapi({ description: 'If requested, the maximum values of metrics.' }),
    metadata: ResponseMetaDataSchema.exactOptional().openapi({
      description: 'Metadata for the report.',
    }),
    metricHeaders: z
      .array(MetricHeaderSchema)
      .exactOptional()
      .openapi({
        description:
          'Describes metric columns. The number of MetricHeaders and ordering of MetricHeaders matches the metrics present in rows.',
      }),
    minimums: z
      .array(RowSchema)
      .exactOptional()
      .openapi({ description: 'If requested, the minimum values of metrics.' }),
    propertyQuota: PropertyQuotaSchema.exactOptional().openapi({
      description: "This Analytics Property's quota state including this request.",
    }),
    rowCount: z
      .int32()
      .exactOptional()
      .openapi({
        description:
          'The total number of rows in the query result. `rowCount` is independent of the number of rows returned in the response, the `limit` request parameter, and the `offset` request parameter. For example if a query returns 175 rows and includes `limit` of 50 in the API request, the response will contain `rowCount` of 175 but only 50 rows. To learn more about this pagination parameter, see [Pagination](https://developers.google.com/analytics/devguides/reporting/data/v1/basics#pagination).',
      }),
    rows: z
      .array(RowSchema)
      .exactOptional()
      .openapi({
        description: 'Rows of dimension value combinations and metric values in the report.',
      }),
    totals: z
      .array(RowSchema)
      .exactOptional()
      .openapi({ description: 'If requested, the totaled values of metrics.' }),
  })
  .openapi({ description: 'The response report table corresponding to a request.', required: [] })
  .openapi('RunReportResponse')

const BatchRunReportsResponseSchema = z
  .object({
    kind: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Identifies what kind of resource this message is. This `kind` is always the fixed string "analyticsData#batchRunReports". Useful to distinguish between response types in JSON.',
      }),
    reports: z
      .array(RunReportResponseSchema)
      .exactOptional()
      .openapi({
        description: 'Individual responses. Each response has a separate report request.',
      }),
  })
  .openapi({ description: 'The batch response containing multiple reports.', required: [] })
  .openapi('BatchRunReportsResponse')

const CheckCompatibilityRequestSchema = z
  .object({
    compatibilityFilter: z
      .enum(['COMPATIBILITY_UNSPECIFIED', 'COMPATIBLE', 'INCOMPATIBLE'])
      .exactOptional()
      .openapi({
        description:
          'Filters the dimensions and metrics in the response to just this compatibility. Commonly used as `”compatibilityFilter”: “COMPATIBLE”` to only return compatible dimensions & metrics.',
      }),
    dimensionFilter: FilterExpressionSchema.exactOptional().openapi({
      description:
        'The filter clause of dimensions. `dimensionFilter` should be the same value as in your `runReport` request.',
    }),
    dimensions: z
      .array(DimensionSchema)
      .exactOptional()
      .openapi({
        description:
          'The dimensions in this report. `dimensions` should be the same value as in your `runReport` request.',
      }),
    metricFilter: FilterExpressionSchema.exactOptional().openapi({
      description:
        'The filter clause of metrics. `metricFilter` should be the same value as in your `runReport` request',
    }),
    metrics: z
      .array(MetricSchema)
      .exactOptional()
      .openapi({
        description:
          'The metrics in this report. `metrics` should be the same value as in your `runReport` request.',
      }),
  })
  .openapi({
    description:
      "The request for compatibility information for a report's dimensions and metrics. Check compatibility provides a preview of the compatibility of a report; fields shared with the `runReport` request should be the same values as in your `runReport` request.",
    required: [],
  })
  .openapi('CheckCompatibilityRequest')

const DimensionCompatibilitySchema = z
  .object({
    compatibility: z
      .enum(['COMPATIBILITY_UNSPECIFIED', 'COMPATIBLE', 'INCOMPATIBLE'])
      .exactOptional()
      .openapi({
        description:
          'The compatibility of this dimension. If the compatibility is COMPATIBLE, this dimension can be successfully added to the report.',
      }),
    dimensionMetadata: DimensionMetadataSchema.exactOptional().openapi({
      description:
        'The dimension metadata contains the API name for this compatibility information. The dimension metadata also contains other helpful information like the UI name and description.',
    }),
  })
  .openapi({ description: 'The compatibility for a single dimension.', required: [] })
  .openapi('DimensionCompatibility')

const MetricCompatibilitySchema = z
  .object({
    compatibility: z
      .enum(['COMPATIBILITY_UNSPECIFIED', 'COMPATIBLE', 'INCOMPATIBLE'])
      .exactOptional()
      .openapi({
        description:
          'The compatibility of this metric. If the compatibility is COMPATIBLE, this metric can be successfully added to the report.',
      }),
    metricMetadata: MetricMetadataSchema.exactOptional().openapi({
      description:
        'The metric metadata contains the API name for this compatibility information. The metric metadata also contains other helpful information like the UI name and description.',
    }),
  })
  .openapi({ description: 'The compatibility for a single metric.', required: [] })
  .openapi('MetricCompatibility')

const CheckCompatibilityResponseSchema = z
  .object({
    dimensionCompatibilities: z
      .array(DimensionCompatibilitySchema)
      .exactOptional()
      .openapi({ description: 'The compatibility of each dimension.' }),
    metricCompatibilities: z
      .array(MetricCompatibilitySchema)
      .exactOptional()
      .openapi({ description: 'The compatibility of each metric.' }),
  })
  .openapi({
    description: 'The compatibility response with the compatibility of each dimension & metric.',
    required: [],
  })
  .openapi('CheckCompatibilityResponse')

const ListAudienceExportsResponseSchema = z
  .object({
    audienceExports: z
      .array(AudienceExportSchema)
      .exactOptional()
      .openapi({ description: 'Each audience export for a property.' }),
    nextPageToken: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'A token, which can be sent as `page_token` to retrieve the next page. If this field is omitted, there are no subsequent pages.',
      }),
  })
  .openapi({ description: 'A list of all audience exports for a property.', required: [] })
  .openapi('ListAudienceExportsResponse')

const MetadataSchema: z.ZodType<MetadataType> = z
  .lazy(() =>
    z
      .object({
        dimensions: z
          .array(DimensionMetadataSchema)
          .exactOptional()
          .openapi({ description: 'The dimension descriptions.' }),
        metrics: z
          .array(MetricMetadataSchema)
          .exactOptional()
          .openapi({ description: 'The metric descriptions.' }),
        name: z
          .string()
          .exactOptional()
          .openapi({ description: 'Resource name of this metadata.' }),
      })
      .openapi({
        description:
          'The dimensions, metrics and comparisons currently accepted in reporting methods.',
        required: [],
      }),
  )
  .openapi('Metadata')

const MinuteRangeSchema = z
  .object({
    endMinutesAgo: z
      .int32()
      .exactOptional()
      .openapi({
        description:
          'The inclusive end minute for the query as a number of minutes before now. Cannot be before `startMinutesAgo`. For example, `"endMinutesAgo": 15` specifies the report should include event data from prior to 15 minutes ago. If unspecified, `endMinutesAgo` is defaulted to 0. Standard Analytics properties can request any minute in the last 30 minutes of event data (`endMinutesAgo <= 29`), and 360 Analytics properties can request any minute in the last 60 minutes of event data (`endMinutesAgo <= 59`).',
      }),
    name: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Assigns a name to this minute range. The dimension `dateRange` is valued to this name in a report response. If set, cannot begin with `date_range_` or `RESERVED_`. If not set, minute ranges are named by their zero based index in the request: `date_range_0`, `date_range_1`, etc.',
      }),
    startMinutesAgo: z
      .int32()
      .exactOptional()
      .openapi({
        description:
          'The inclusive start minute for the query as a number of minutes before now. For example, `"startMinutesAgo": 29` specifies the report should include event data from 29 minutes ago and after. Cannot be after `endMinutesAgo`. If unspecified, `startMinutesAgo` is defaulted to 29. Standard Analytics properties can request up to the last 30 minutes of event data (`startMinutesAgo <= 29`), and 360 Analytics properties can request up to the last 60 minutes of event data (`startMinutesAgo <= 59`).',
      }),
  })
  .openapi({
    description:
      'A contiguous set of minutes: `startMinutesAgo`, `startMinutesAgo + 1`, ..., `endMinutesAgo`. Requests are allowed up to 2 minute ranges.',
    required: [],
  })
  .openapi('MinuteRange')

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
      'The `Status` type defines a logical error model that is suitable for different programming environments, including REST APIs and RPC APIs. It is used by [gRPC](https://github.com/grpc). Each `Status` message contains three pieces of data: error code, error message, and error details. You can find out more about this error model and how to work with it in the [API Design Guide](https://cloud.google.com/apis/design/errors).',
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
          'If the value is `false`, it means the operation is still in progress. If `true`, the operation is completed, and either `error` or `response` is available.',
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
          'The server-assigned name, which is only unique within the same service that originally returns it. If you use the default HTTP mapping, the `name` should be a resource name ending with `operations/{unique_id}`.',
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
          'The normal, successful response of the operation. If the original method returns no data on success, such as `Delete`, the response is `google.protobuf.Empty`. If the original method is standard `Get`/`Create`/`Update`, the response should be the resource. For other methods, the response should have the type `XxxResponse`, where `Xxx` is the original method name. For example, if the original method name is `TakeSnapshot()`, the inferred response type is `TakeSnapshotResponse`.',
      }),
  })
  .openapi({
    description:
      'This resource represents a long-running operation that is the result of a network API call.',
    required: [],
  })
  .openapi('Operation')

const QueryAudienceExportRequestSchema = z
  .object({
    limit: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "Optional. The number of rows to return. If unspecified, 10,000 rows are returned. The API returns a maximum of 250,000 rows per request, no matter how many you ask for. `limit` must be positive. The API can also return fewer rows than the requested `limit`, if there aren't as many dimension values as the `limit`. To learn more about this pagination parameter, see [Pagination](https://developers.google.com/analytics/devguides/reporting/data/v1/basics#pagination).",
      }),
    offset: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Optional. The row count of the start row. The first row is counted as row 0. When paging, the first request does not specify offset; or equivalently, sets offset to 0; the first request returns the first `limit` of rows. The second request sets offset to the `limit` of the first request; the second request returns the second `limit` of rows. To learn more about this pagination parameter, see [Pagination](https://developers.google.com/analytics/devguides/reporting/data/v1/basics#pagination).',
      }),
  })
  .openapi({ description: 'A request to list users in an audience export.', required: [] })
  .openapi('QueryAudienceExportRequest')

const V1betaAudienceDimensionValueSchema = z
  .object({
    value: z
      .string()
      .exactOptional()
      .openapi({ description: 'Value as a string if the dimension type is a string.' }),
  })
  .openapi({ description: 'The value of a dimension.', required: [] })
  .openapi('V1betaAudienceDimensionValue')

const V1betaAudienceRowSchema = z
  .object({
    dimensionValues: z
      .array(V1betaAudienceDimensionValueSchema)
      .exactOptional()
      .openapi({
        description:
          'Each dimension value attribute for an audience user. One dimension value will be added for each dimension column requested.',
      }),
  })
  .openapi({ description: 'Dimension value attributes for the audience user row.', required: [] })
  .openapi('V1betaAudienceRow')

const QueryAudienceExportResponseSchema = z
  .object({
    audienceExport: AudienceExportSchema.exactOptional().openapi({
      description:
        'Configuration data about AudienceExport being queried. Returned to help interpret the audience rows in this response. For example, the dimensions in this AudienceExport correspond to the columns in the AudienceRows.',
    }),
    audienceRows: z
      .array(V1betaAudienceRowSchema)
      .exactOptional()
      .openapi({
        description:
          "Rows for each user in an audience export. The number of rows in this response will be less than or equal to request's page size.",
      }),
    rowCount: z
      .int32()
      .exactOptional()
      .openapi({
        description:
          'The total number of rows in the AudienceExport result. `rowCount` is independent of the number of rows returned in the response, the `limit` request parameter, and the `offset` request parameter. For example if a query returns 175 rows and includes `limit` of 50 in the API request, the response will contain `rowCount` of 175 but only 50 rows. To learn more about this pagination parameter, see [Pagination](https://developers.google.com/analytics/devguides/reporting/data/v1/basics#pagination).',
      }),
  })
  .openapi({ description: 'A list of users in an audience export.', required: [] })
  .openapi('QueryAudienceExportResponse')

const RunRealtimeReportRequestSchema = z
  .object({
    dimensionFilter: FilterExpressionSchema.exactOptional().openapi({
      description: 'The filter clause of dimensions. Metrics cannot be used in this filter.',
    }),
    dimensions: z
      .array(DimensionSchema)
      .exactOptional()
      .openapi({ description: 'The dimensions requested and displayed.' }),
    limit: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "The number of rows to return. If unspecified, 10,000 rows are returned. The API returns a maximum of 250,000 rows per request, no matter how many you ask for. `limit` must be positive. The API can also return fewer rows than the requested `limit`, if there aren't as many dimension values as the `limit`. For instance, there are fewer than 300 possible values for the dimension `country`, so when reporting on only `country`, you can't get more than 300 rows, even if you set `limit` to a higher value.",
      }),
    metricAggregations: z
      .array(z.enum(['METRIC_AGGREGATION_UNSPECIFIED', 'TOTAL', 'MINIMUM', 'MAXIMUM', 'COUNT']))
      .exactOptional()
      .openapi({
        description:
          'Aggregation of metrics. Aggregated metric values will be shown in rows where the dimension_values are set to "RESERVED_(MetricAggregation)".',
      }),
    metricFilter: FilterExpressionSchema.exactOptional().openapi({
      description:
        'The filter clause of metrics. Applied at post aggregation phase, similar to SQL having-clause. Dimensions cannot be used in this filter.',
    }),
    metrics: z
      .array(MetricSchema)
      .exactOptional()
      .openapi({ description: 'The metrics requested and displayed.' }),
    minuteRanges: z
      .array(MinuteRangeSchema)
      .exactOptional()
      .openapi({
        description:
          'The minute ranges of event data to read. If unspecified, one minute range for the last 30 minutes will be used. If multiple minute ranges are requested, each response row will contain a zero based minute range index. If two minute ranges overlap, the event data for the overlapping minutes is included in the response rows for both minute ranges.',
      }),
    orderBys: z
      .array(OrderBySchema)
      .exactOptional()
      .openapi({ description: 'Specifies how rows are ordered in the response.' }),
    returnPropertyQuota: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          "Toggles whether to return the current state of this Analytics Property's Realtime quota. Quota is returned in [PropertyQuota](#PropertyQuota).",
      }),
  })
  .openapi({ description: 'The request to generate a realtime report.', required: [] })
  .openapi('RunRealtimeReportRequest')

const RunRealtimeReportResponseSchema = z
  .object({
    dimensionHeaders: z
      .array(DimensionHeaderSchema)
      .exactOptional()
      .openapi({
        description:
          'Describes dimension columns. The number of DimensionHeaders and ordering of DimensionHeaders matches the dimensions present in rows.',
      }),
    kind: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Identifies what kind of resource this message is. This `kind` is always the fixed string "analyticsData#runRealtimeReport". Useful to distinguish between response types in JSON.',
      }),
    maximums: z
      .array(RowSchema)
      .exactOptional()
      .openapi({ description: 'If requested, the maximum values of metrics.' }),
    metricHeaders: z
      .array(MetricHeaderSchema)
      .exactOptional()
      .openapi({
        description:
          'Describes metric columns. The number of MetricHeaders and ordering of MetricHeaders matches the metrics present in rows.',
      }),
    minimums: z
      .array(RowSchema)
      .exactOptional()
      .openapi({ description: 'If requested, the minimum values of metrics.' }),
    propertyQuota: PropertyQuotaSchema.exactOptional().openapi({
      description: "This Analytics Property's Realtime quota state including this request.",
    }),
    rowCount: z
      .int32()
      .exactOptional()
      .openapi({
        description:
          'The total number of rows in the query result. `rowCount` is independent of the number of rows returned in the response and the `limit` request parameter. For example if a query returns 175 rows and includes `limit` of 50 in the API request, the response will contain `rowCount` of 175 but only 50 rows.',
      }),
    rows: z
      .array(RowSchema)
      .exactOptional()
      .openapi({
        description: 'Rows of dimension value combinations and metric values in the report.',
      }),
    totals: z
      .array(RowSchema)
      .exactOptional()
      .openapi({ description: 'If requested, the totaled values of metrics.' }),
  })
  .openapi({
    description: 'The response realtime report table corresponding to a request.',
    required: [],
  })
  .openapi('RunRealtimeReportResponse')

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
        'https://www.googleapis.com/auth/analytics': 'View and manage your Google Analytics data',
        'https://www.googleapis.com/auth/analytics.readonly':
          'See and download your Google Analytics data',
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
        'https://www.googleapis.com/auth/analytics': 'View and manage your Google Analytics data',
        'https://www.googleapis.com/auth/analytics.readonly':
          'See and download your Google Analytics data',
      },
      tokenUrl: 'https://accounts.google.com/o/oauth2/token',
    },
  },
  type: 'oauth2',
}

export const getV1betaNameRoute = createRoute({
  method: 'get',
  path: '/v1beta/{name}',
  tags: ['properties'],
  description:
    'Gets configuration metadata about a specific audience export. This method can be used to understand an audience export after it has been created. See [Creating an Audience Export](https://developers.google.com/analytics/devguides/reporting/data/v1/audience-list-basics) for an introduction to Audience Exports with examples. Audience Export APIs have some methods at alpha and other methods at beta stability. The intention is to advance methods to beta stability after some feedback and adoption. To give your feedback on this API, complete the [Google Analytics Audience Export API Feedback](https://forms.gle/EeA5u5LW6PEggtCEA) form.',
  operationId: 'analyticsdata.properties.audienceExports.get',
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
              'Required. The audience export resource name. Format: `properties/{property}/audienceExports/{audience_export}`',
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
      content: { 'application/json': { schema: AudienceExportSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/analytics'],
      Oauth2c: ['https://www.googleapis.com/auth/analytics'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/analytics.readonly'],
      Oauth2c: ['https://www.googleapis.com/auth/analytics.readonly'],
    },
  ],
})

export const postV1betaNameQueryRoute = createRoute({
  method: 'post',
  path: '/v1beta/{name}:query',
  tags: ['properties'],
  description:
    'Retrieves an audience export of users. After creating an audience, the users are not immediately available for exporting. First, a request to `CreateAudienceExport` is necessary to create an audience export of users, and then second, this method is used to retrieve the users in the audience export. See [Creating an Audience Export](https://developers.google.com/analytics/devguides/reporting/data/v1/audience-list-basics) for an introduction to Audience Exports with examples. Audiences in Google Analytics 4 allow you to segment your users in the ways that are important to your business. To learn more, see https://support.google.com/analytics/answer/9267572. Audience Export APIs have some methods at alpha and other methods at beta stability. The intention is to advance methods to beta stability after some feedback and adoption. To give your feedback on this API, complete the [Google Analytics Audience Export API Feedback](https://forms.gle/EeA5u5LW6PEggtCEA) form.',
  operationId: 'analyticsdata.properties.audienceExports.query',
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
              'Required. The name of the audience export to retrieve users from. Format: `properties/{property}/audienceExports/{audience_export}`',
            in: 'path',
            name: 'name',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: QueryAudienceExportRequestSchema } } },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: QueryAudienceExportResponseSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/analytics'],
      Oauth2c: ['https://www.googleapis.com/auth/analytics'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/analytics.readonly'],
      Oauth2c: ['https://www.googleapis.com/auth/analytics.readonly'],
    },
  ],
})

export const getV1betaParentAudienceExportsRoute = createRoute({
  method: 'get',
  path: '/v1beta/{parent}/audienceExports',
  tags: ['properties'],
  description:
    'Lists all audience exports for a property. This method can be used for you to find and reuse existing audience exports rather than creating unnecessary new audience exports. The same audience can have multiple audience exports that represent the export of users that were in an audience on different days. See [Creating an Audience Export](https://developers.google.com/analytics/devguides/reporting/data/v1/audience-list-basics) for an introduction to Audience Exports with examples. Audience Export APIs have some methods at alpha and other methods at beta stability. The intention is to advance methods to beta stability after some feedback and adoption. To give your feedback on this API, complete the [Google Analytics Audience Export API Feedback](https://forms.gle/EeA5u5LW6PEggtCEA) form.',
  operationId: 'analyticsdata.properties.audienceExports.list',
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
              'Optional. The maximum number of audience exports to return. The service may return fewer than this value. If unspecified, at most 200 audience exports will be returned. The maximum value is 1000 (higher values will be coerced to the maximum).',
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
              'Optional. A page token, received from a previous `ListAudienceExports` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListAudienceExports` must match the call that provided the page token.',
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
              'Required. All audience exports for this property will be listed in the response. Format: `properties/{property}`',
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
      content: { 'application/json': { schema: ListAudienceExportsResponseSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/analytics'],
      Oauth2c: ['https://www.googleapis.com/auth/analytics'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/analytics.readonly'],
      Oauth2c: ['https://www.googleapis.com/auth/analytics.readonly'],
    },
  ],
})

export const postV1betaParentAudienceExportsRoute = createRoute({
  method: 'post',
  path: '/v1beta/{parent}/audienceExports',
  tags: ['properties'],
  description:
    "Creates an audience export for later retrieval. This method quickly returns the audience export's resource name and initiates a long running asynchronous request to form an audience export. To export the users in an audience export, first create the audience export through this method and then send the audience resource name to the `QueryAudienceExport` method. See [Creating an Audience Export](https://developers.google.com/analytics/devguides/reporting/data/v1/audience-list-basics) for an introduction to Audience Exports with examples. An audience export is a snapshot of the users currently in the audience at the time of audience export creation. Creating audience exports for one audience on different days will return different results as users enter and exit the audience. Audiences in Google Analytics 4 allow you to segment your users in the ways that are important to your business. To learn more, see https://support.google.com/analytics/answer/9267572. Audience exports contain the users in each audience. Audience Export APIs have some methods at alpha and other methods at beta stability. The intention is to advance methods to beta stability after some feedback and adoption. To give your feedback on this API, complete the [Google Analytics Audience Export API Feedback](https://forms.gle/EeA5u5LW6PEggtCEA) form.",
  operationId: 'analyticsdata.properties.audienceExports.create',
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
              'Required. The parent resource where this audience export will be created. Format: `properties/{property}`',
            in: 'path',
            name: 'parent',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: AudienceExportSchema } } },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: OperationSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/analytics'],
      Oauth2c: ['https://www.googleapis.com/auth/analytics'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/analytics.readonly'],
      Oauth2c: ['https://www.googleapis.com/auth/analytics.readonly'],
    },
  ],
})

export const postV1betaPropertyBatchRunPivotReportsRoute = createRoute({
  method: 'post',
  path: '/v1beta/{property}:batchRunPivotReports',
  tags: ['properties'],
  description:
    'Returns multiple pivot reports in a batch. All reports must be for the same GA4 Property.',
  operationId: 'analyticsdata.properties.batchRunPivotReports',
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
      property: z
        .string()
        .openapi({
          param: {
            description:
              'A Google Analytics GA4 property identifier whose events are tracked. Specified in the URL path and not the body. To learn more, see [where to find your Property ID](https://developers.google.com/analytics/devguides/reporting/data/v1/property-id). This property must be specified for the batch. The property within RunPivotReportRequest may either be unspecified or consistent with this property. Example: properties/1234',
            in: 'path',
            name: 'property',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: BatchRunPivotReportsRequestSchema } } },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: BatchRunPivotReportsResponseSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/analytics'],
      Oauth2c: ['https://www.googleapis.com/auth/analytics'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/analytics.readonly'],
      Oauth2c: ['https://www.googleapis.com/auth/analytics.readonly'],
    },
  ],
})

export const postV1betaPropertyBatchRunReportsRoute = createRoute({
  method: 'post',
  path: '/v1beta/{property}:batchRunReports',
  tags: ['properties'],
  description:
    'Returns multiple reports in a batch. All reports must be for the same GA4 Property.',
  operationId: 'analyticsdata.properties.batchRunReports',
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
      property: z
        .string()
        .openapi({
          param: {
            description:
              'A Google Analytics GA4 property identifier whose events are tracked. Specified in the URL path and not the body. To learn more, see [where to find your Property ID](https://developers.google.com/analytics/devguides/reporting/data/v1/property-id). This property must be specified for the batch. The property within RunReportRequest may either be unspecified or consistent with this property. Example: properties/1234',
            in: 'path',
            name: 'property',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: BatchRunReportsRequestSchema } } },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: BatchRunReportsResponseSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/analytics'],
      Oauth2c: ['https://www.googleapis.com/auth/analytics'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/analytics.readonly'],
      Oauth2c: ['https://www.googleapis.com/auth/analytics.readonly'],
    },
  ],
})

export const postV1betaPropertyCheckCompatibilityRoute = createRoute({
  method: 'post',
  path: '/v1beta/{property}:checkCompatibility',
  tags: ['properties'],
  description:
    "This compatibility method lists dimensions and metrics that can be added to a report request and maintain compatibility. This method fails if the request's dimensions and metrics are incompatible. In Google Analytics, reports fail if they request incompatible dimensions and/or metrics; in that case, you will need to remove dimensions and/or metrics from the incompatible report until the report is compatible. The Realtime and Core reports have different compatibility rules. This method checks compatibility for Core reports.",
  operationId: 'analyticsdata.properties.checkCompatibility',
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
      property: z
        .string()
        .openapi({
          param: {
            description:
              'A Google Analytics GA4 property identifier whose events are tracked. To learn more, see [where to find your Property ID](https://developers.google.com/analytics/devguides/reporting/data/v1/property-id). `property` should be the same value as in your `runReport` request. Example: properties/1234',
            in: 'path',
            name: 'property',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: CheckCompatibilityRequestSchema } } },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: CheckCompatibilityResponseSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/analytics'],
      Oauth2c: ['https://www.googleapis.com/auth/analytics'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/analytics.readonly'],
      Oauth2c: ['https://www.googleapis.com/auth/analytics.readonly'],
    },
  ],
})

export const postV1betaPropertyRunPivotReportRoute = createRoute({
  method: 'post',
  path: '/v1beta/{property}:runPivotReport',
  tags: ['properties'],
  description:
    'Returns a customized pivot report of your Google Analytics event data. Pivot reports are more advanced and expressive formats than regular reports. In a pivot report, dimensions are only visible if they are included in a pivot. Multiple pivots can be specified to further dissect your data.',
  operationId: 'analyticsdata.properties.runPivotReport',
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
      property: z
        .string()
        .openapi({
          param: {
            description:
              'A Google Analytics GA4 property identifier whose events are tracked. Specified in the URL path and not the body. To learn more, see [where to find your Property ID](https://developers.google.com/analytics/devguides/reporting/data/v1/property-id). Within a batch request, this property should either be unspecified or consistent with the batch-level property. Example: properties/1234',
            in: 'path',
            name: 'property',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: RunPivotReportRequestSchema } } },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: RunPivotReportResponseSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/analytics'],
      Oauth2c: ['https://www.googleapis.com/auth/analytics'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/analytics.readonly'],
      Oauth2c: ['https://www.googleapis.com/auth/analytics.readonly'],
    },
  ],
})

export const postV1betaPropertyRunRealtimeReportRoute = createRoute({
  method: 'post',
  path: '/v1beta/{property}:runRealtimeReport',
  tags: ['properties'],
  description:
    'Returns a customized report of realtime event data for your property. Events appear in realtime reports seconds after they have been sent to the Google Analytics. Realtime reports show events and usage data for the periods of time ranging from the present moment to 30 minutes ago (up to 60 minutes for Google Analytics 360 properties). For a guide to constructing realtime requests & understanding responses, see [Creating a Realtime Report](https://developers.google.com/analytics/devguides/reporting/data/v1/realtime-basics).',
  operationId: 'analyticsdata.properties.runRealtimeReport',
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
      property: z
        .string()
        .openapi({
          param: {
            description:
              'A Google Analytics GA4 property identifier whose events are tracked. Specified in the URL path and not the body. To learn more, see [where to find your Property ID](https://developers.google.com/analytics/devguides/reporting/data/v1/property-id). Example: properties/1234',
            in: 'path',
            name: 'property',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: RunRealtimeReportRequestSchema } } },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: RunRealtimeReportResponseSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/analytics'],
      Oauth2c: ['https://www.googleapis.com/auth/analytics'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/analytics.readonly'],
      Oauth2c: ['https://www.googleapis.com/auth/analytics.readonly'],
    },
  ],
})

export const postV1betaPropertyRunReportRoute = createRoute({
  method: 'post',
  path: '/v1beta/{property}:runReport',
  tags: ['properties'],
  description:
    'Returns a customized report of your Google Analytics event data. Reports contain statistics derived from data collected by the Google Analytics tracking code. The data returned from the API is as a table with columns for the requested dimensions and metrics. Metrics are individual measurements of user activity on your property, such as active users or event count. Dimensions break down metrics across some common criteria, such as country or event name. For a guide to constructing requests & understanding responses, see [Creating a Report](https://developers.google.com/analytics/devguides/reporting/data/v1/basics).',
  operationId: 'analyticsdata.properties.runReport',
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
      property: z
        .string()
        .openapi({
          param: {
            description:
              'A Google Analytics GA4 property identifier whose events are tracked. Specified in the URL path and not the body. To learn more, see [where to find your Property ID](https://developers.google.com/analytics/devguides/reporting/data/v1/property-id). Within a batch request, this property should either be unspecified or consistent with the batch-level property. Example: properties/1234',
            in: 'path',
            name: 'property',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: RunReportRequestSchema } } },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: RunReportResponseSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/analytics'],
      Oauth2c: ['https://www.googleapis.com/auth/analytics'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/analytics.readonly'],
      Oauth2c: ['https://www.googleapis.com/auth/analytics.readonly'],
    },
  ],
})
