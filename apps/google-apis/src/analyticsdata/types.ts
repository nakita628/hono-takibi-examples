type V1betaAudienceDimension = { dimensionName?: string | undefined }
type AudienceExport = {
  audience?: string | undefined
  audienceDisplayName?: string | undefined
  beginCreatingTime?: string | undefined
  creationQuotaTokensCharged?: number | undefined
  dimensions?: V1betaAudienceDimension[] | undefined
  errorMessage?: string | undefined
  name?: string | undefined
  percentageCompleted?: number | undefined
  rowCount?: number | undefined
  state?: 'STATE_UNSPECIFIED' | 'CREATING' | 'ACTIVE' | 'FAILED' | undefined
}
type QueryAudienceExportRequest = { limit?: string | undefined; offset?: string | undefined }
type V1betaAudienceDimensionValue = { value?: string | undefined }
type V1betaAudienceRow = { dimensionValues?: V1betaAudienceDimensionValue[] | undefined }
type QueryAudienceExportResponse = {
  audienceExport?: AudienceExport | undefined
  audienceRows?: V1betaAudienceRow[] | undefined
  rowCount?: number | undefined
}
type ListAudienceExportsResponse = {
  audienceExports?: AudienceExport[] | undefined
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
type CohortReportSettings = { accumulate?: boolean | undefined }
type DateRange = {
  endDate?: string | undefined
  name?: string | undefined
  startDate?: string | undefined
}
type Cohort = {
  dateRange?: DateRange | undefined
  dimension?: string | undefined
  name?: string | undefined
}
type CohortsRange = {
  endOffset?: number | undefined
  granularity?: 'GRANULARITY_UNSPECIFIED' | 'DAILY' | 'WEEKLY' | 'MONTHLY' | undefined
  startOffset?: number | undefined
}
type CohortSpec = {
  cohortReportSettings?: CohortReportSettings | undefined
  cohorts?: Cohort[] | undefined
  cohortsRange?: CohortsRange | undefined
}
type FilterExpressionList = { expressions?: FilterExpression[] | undefined }
type NumericValue = { doubleValue?: number | undefined; int64Value?: string | undefined }
type BetweenFilter = { fromValue?: NumericValue | undefined; toValue?: NumericValue | undefined }
type InListFilter = { caseSensitive?: boolean | undefined; values?: string[] | undefined }
type NumericFilter = {
  operation?:
    | 'OPERATION_UNSPECIFIED'
    | 'EQUAL'
    | 'LESS_THAN'
    | 'LESS_THAN_OR_EQUAL'
    | 'GREATER_THAN'
    | 'GREATER_THAN_OR_EQUAL'
    | undefined
  value?: NumericValue | undefined
}
type StringFilter = {
  caseSensitive?: boolean | undefined
  matchType?:
    | 'MATCH_TYPE_UNSPECIFIED'
    | 'EXACT'
    | 'BEGINS_WITH'
    | 'ENDS_WITH'
    | 'CONTAINS'
    | 'FULL_REGEXP'
    | 'PARTIAL_REGEXP'
    | undefined
  value?: string | undefined
}
type Filter = {
  betweenFilter?: BetweenFilter | undefined
  fieldName?: string | undefined
  inListFilter?: InListFilter | undefined
  numericFilter?: NumericFilter | undefined
  stringFilter?: StringFilter | undefined
}
type FilterExpression = {
  andGroup?: FilterExpressionList | undefined
  filter?: Filter | undefined
  notExpression?: FilterExpression | undefined
  orGroup?: FilterExpressionList | undefined
}
type ConcatenateExpression = {
  delimiter?: string | undefined
  dimensionNames?: string[] | undefined
}
type CaseExpression = { dimensionName?: string | undefined }
type DimensionExpression = {
  concatenate?: ConcatenateExpression | undefined
  lowerCase?: CaseExpression | undefined
  upperCase?: CaseExpression | undefined
}
type Dimension = {
  dimensionExpression?: DimensionExpression | undefined
  name?: string | undefined
}
type Metric = {
  expression?: string | undefined
  invisible?: boolean | undefined
  name?: string | undefined
}
type DimensionOrderBy = {
  dimensionName?: string | undefined
  orderType?:
    | 'ORDER_TYPE_UNSPECIFIED'
    | 'ALPHANUMERIC'
    | 'CASE_INSENSITIVE_ALPHANUMERIC'
    | 'NUMERIC'
    | undefined
}
type MetricOrderBy = { metricName?: string | undefined }
type PivotSelection = { dimensionName?: string | undefined; dimensionValue?: string | undefined }
type PivotOrderBy = {
  metricName?: string | undefined
  pivotSelections?: PivotSelection[] | undefined
}
type OrderBy = {
  desc?: boolean | undefined
  dimension?: DimensionOrderBy | undefined
  metric?: MetricOrderBy | undefined
  pivot?: PivotOrderBy | undefined
}
type Pivot = {
  fieldNames?: string[] | undefined
  limit?: string | undefined
  metricAggregations?:
    | ('METRIC_AGGREGATION_UNSPECIFIED' | 'TOTAL' | 'MINIMUM' | 'MAXIMUM' | 'COUNT')[]
    | undefined
  offset?: string | undefined
  orderBys?: OrderBy[] | undefined
}
type RunPivotReportRequest = {
  cohortSpec?: CohortSpec | undefined
  currencyCode?: string | undefined
  dateRanges?: DateRange[] | undefined
  dimensionFilter?: FilterExpression | undefined
  dimensions?: Dimension[] | undefined
  keepEmptyRows?: boolean | undefined
  metricFilter?: FilterExpression | undefined
  metrics?: Metric[] | undefined
  pivots?: Pivot[] | undefined
  property?: string | undefined
  returnPropertyQuota?: boolean | undefined
}
type BatchRunPivotReportsRequest = { requests?: RunPivotReportRequest[] | undefined }
type DimensionValue = { value?: string | undefined }
type MetricValue = { value?: string | undefined }
type Row = {
  dimensionValues?: DimensionValue[] | undefined
  metricValues?: MetricValue[] | undefined
}
type DimensionHeader = { name?: string | undefined }
type SamplingMetadata = {
  samplesReadCount?: string | undefined
  samplingSpaceSize?: string | undefined
}
type ActiveMetricRestriction = {
  metricName?: string | undefined
  restrictedMetricTypes?:
    | ('RESTRICTED_METRIC_TYPE_UNSPECIFIED' | 'COST_DATA' | 'REVENUE_DATA')[]
    | undefined
}
type SchemaRestrictionResponse = {
  activeMetricRestrictions?: ActiveMetricRestriction[] | undefined
}
type ResponseMetaData = {
  currencyCode?: string | undefined
  dataLossFromOtherRow?: boolean | undefined
  emptyReason?: string | undefined
  samplingMetadatas?: SamplingMetadata[] | undefined
  schemaRestrictionResponse?: SchemaRestrictionResponse | undefined
  subjectToThresholding?: boolean | undefined
  timeZone?: string | undefined
}
type MetricHeader = {
  name?: string | undefined
  type?:
    | 'METRIC_TYPE_UNSPECIFIED'
    | 'TYPE_INTEGER'
    | 'TYPE_FLOAT'
    | 'TYPE_SECONDS'
    | 'TYPE_MILLISECONDS'
    | 'TYPE_MINUTES'
    | 'TYPE_HOURS'
    | 'TYPE_STANDARD'
    | 'TYPE_CURRENCY'
    | 'TYPE_FEET'
    | 'TYPE_MILES'
    | 'TYPE_METERS'
    | 'TYPE_KILOMETERS'
    | undefined
}
type PivotDimensionHeader = { dimensionValues?: DimensionValue[] | undefined }
type PivotHeader = {
  pivotDimensionHeaders?: PivotDimensionHeader[] | undefined
  rowCount?: number | undefined
}
type QuotaStatus = { consumed?: number | undefined; remaining?: number | undefined }
type PropertyQuota = {
  concurrentRequests?: QuotaStatus | undefined
  potentiallyThresholdedRequestsPerHour?: QuotaStatus | undefined
  serverErrorsPerProjectPerHour?: QuotaStatus | undefined
  tokensPerDay?: QuotaStatus | undefined
  tokensPerHour?: QuotaStatus | undefined
  tokensPerProjectPerHour?: QuotaStatus | undefined
}
type RunPivotReportResponse = {
  aggregates?: Row[] | undefined
  dimensionHeaders?: DimensionHeader[] | undefined
  kind?: string | undefined
  metadata?: ResponseMetaData | undefined
  metricHeaders?: MetricHeader[] | undefined
  pivotHeaders?: PivotHeader[] | undefined
  propertyQuota?: PropertyQuota | undefined
  rows?: Row[] | undefined
}
type BatchRunPivotReportsResponse = {
  kind?: string | undefined
  pivotReports?: RunPivotReportResponse[] | undefined
}
type RunReportRequest = {
  cohortSpec?: CohortSpec | undefined
  currencyCode?: string | undefined
  dateRanges?: DateRange[] | undefined
  dimensionFilter?: FilterExpression | undefined
  dimensions?: Dimension[] | undefined
  keepEmptyRows?: boolean | undefined
  limit?: string | undefined
  metricAggregations?:
    | ('METRIC_AGGREGATION_UNSPECIFIED' | 'TOTAL' | 'MINIMUM' | 'MAXIMUM' | 'COUNT')[]
    | undefined
  metricFilter?: FilterExpression | undefined
  metrics?: Metric[] | undefined
  offset?: string | undefined
  orderBys?: OrderBy[] | undefined
  property?: string | undefined
  returnPropertyQuota?: boolean | undefined
}
type BatchRunReportsRequest = { requests?: RunReportRequest[] | undefined }
type RunReportResponse = {
  dimensionHeaders?: DimensionHeader[] | undefined
  kind?: string | undefined
  maximums?: Row[] | undefined
  metadata?: ResponseMetaData | undefined
  metricHeaders?: MetricHeader[] | undefined
  minimums?: Row[] | undefined
  propertyQuota?: PropertyQuota | undefined
  rowCount?: number | undefined
  rows?: Row[] | undefined
  totals?: Row[] | undefined
}
type BatchRunReportsResponse = {
  kind?: string | undefined
  reports?: RunReportResponse[] | undefined
}
type CheckCompatibilityRequest = {
  compatibilityFilter?: 'COMPATIBILITY_UNSPECIFIED' | 'COMPATIBLE' | 'INCOMPATIBLE' | undefined
  dimensionFilter?: FilterExpression | undefined
  dimensions?: Dimension[] | undefined
  metricFilter?: FilterExpression | undefined
  metrics?: Metric[] | undefined
}
type DimensionMetadata = {
  apiName?: string | undefined
  category?: string | undefined
  customDefinition?: boolean | undefined
  deprecatedApiNames?: string[] | undefined
  description?: string | undefined
  uiName?: string | undefined
}
type DimensionCompatibility = {
  compatibility?: 'COMPATIBILITY_UNSPECIFIED' | 'COMPATIBLE' | 'INCOMPATIBLE' | undefined
  dimensionMetadata?: DimensionMetadata | undefined
}
type MetricMetadata = {
  apiName?: string | undefined
  blockedReasons?:
    | ('BLOCKED_REASON_UNSPECIFIED' | 'NO_REVENUE_METRICS' | 'NO_COST_METRICS')[]
    | undefined
  category?: string | undefined
  customDefinition?: boolean | undefined
  deprecatedApiNames?: string[] | undefined
  description?: string | undefined
  expression?: string | undefined
  type?:
    | 'METRIC_TYPE_UNSPECIFIED'
    | 'TYPE_INTEGER'
    | 'TYPE_FLOAT'
    | 'TYPE_SECONDS'
    | 'TYPE_MILLISECONDS'
    | 'TYPE_MINUTES'
    | 'TYPE_HOURS'
    | 'TYPE_STANDARD'
    | 'TYPE_CURRENCY'
    | 'TYPE_FEET'
    | 'TYPE_MILES'
    | 'TYPE_METERS'
    | 'TYPE_KILOMETERS'
    | undefined
  uiName?: string | undefined
}
type MetricCompatibility = {
  compatibility?: 'COMPATIBILITY_UNSPECIFIED' | 'COMPATIBLE' | 'INCOMPATIBLE' | undefined
  metricMetadata?: MetricMetadata | undefined
}
type CheckCompatibilityResponse = {
  dimensionCompatibilities?: DimensionCompatibility[] | undefined
  metricCompatibilities?: MetricCompatibility[] | undefined
}
type MinuteRange = {
  endMinutesAgo?: number | undefined
  name?: string | undefined
  startMinutesAgo?: number | undefined
}
type RunRealtimeReportRequest = {
  dimensionFilter?: FilterExpression | undefined
  dimensions?: Dimension[] | undefined
  limit?: string | undefined
  metricAggregations?:
    | ('METRIC_AGGREGATION_UNSPECIFIED' | 'TOTAL' | 'MINIMUM' | 'MAXIMUM' | 'COUNT')[]
    | undefined
  metricFilter?: FilterExpression | undefined
  metrics?: Metric[] | undefined
  minuteRanges?: MinuteRange[] | undefined
  orderBys?: OrderBy[] | undefined
  returnPropertyQuota?: boolean | undefined
}
type RunRealtimeReportResponse = {
  dimensionHeaders?: DimensionHeader[] | undefined
  kind?: string | undefined
  maximums?: Row[] | undefined
  metricHeaders?: MetricHeader[] | undefined
  minimums?: Row[] | undefined
  propertyQuota?: PropertyQuota | undefined
  rowCount?: number | undefined
  rows?: Row[] | undefined
  totals?: Row[] | undefined
}
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/v1beta/:name': {
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
        output: AudienceExport
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1beta/:name:query': {
      $post: {
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
        } & { json: QueryAudienceExportRequest }
        output: QueryAudienceExportResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1beta/:parent/audienceExports': {
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
        output: ListAudienceExportsResponse
        outputFormat: 'json'
        status: 200
      }
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
        } & { json: AudienceExport }
        output: Operation
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1beta/:property:batchRunPivotReports': {
      $post: {
        input: { param: { property: string } } & {
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
        } & { json: BatchRunPivotReportsRequest }
        output: BatchRunPivotReportsResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1beta/:property:batchRunReports': {
      $post: {
        input: { param: { property: string } } & {
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
        } & { json: BatchRunReportsRequest }
        output: BatchRunReportsResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1beta/:property:checkCompatibility': {
      $post: {
        input: { param: { property: string } } & {
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
        } & { json: CheckCompatibilityRequest }
        output: CheckCompatibilityResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1beta/:property:runPivotReport': {
      $post: {
        input: { param: { property: string } } & {
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
        } & { json: RunPivotReportRequest }
        output: RunPivotReportResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1beta/:property:runRealtimeReport': {
      $post: {
        input: { param: { property: string } } & {
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
        } & { json: RunRealtimeReportRequest }
        output: RunRealtimeReportResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1beta/:property:runReport': {
      $post: {
        input: { param: { property: string } } & {
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
        } & { json: RunReportRequest }
        output: RunReportResponse
        outputFormat: 'json'
        status: 200
      }
    }
  },
  '/'
>
export default routes
