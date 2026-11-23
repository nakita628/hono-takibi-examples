type DateRange = { endDate?: string | undefined; startDate?: string | undefined }
type Cohort = {
  dateRange?: DateRange | undefined
  name?: string | undefined
  type?: 'UNSPECIFIED_COHORT_TYPE' | 'FIRST_VISIT_DATE' | undefined
}
type CohortGroup = { cohorts?: Cohort[] | undefined; lifetimeValue?: boolean | undefined }
type DimensionFilter = {
  caseSensitive?: boolean | undefined
  dimensionName?: string | undefined
  expressions?: string[] | undefined
  not?: boolean | undefined
  operator?:
    | 'OPERATOR_UNSPECIFIED'
    | 'REGEXP'
    | 'BEGINS_WITH'
    | 'ENDS_WITH'
    | 'PARTIAL'
    | 'EXACT'
    | 'NUMERIC_EQUAL'
    | 'NUMERIC_GREATER_THAN'
    | 'NUMERIC_LESS_THAN'
    | 'IN_LIST'
    | undefined
}
type DimensionFilterClause = {
  filters?: DimensionFilter[] | undefined
  operator?: 'OPERATOR_UNSPECIFIED' | 'OR' | 'AND' | undefined
}
type Dimension = { histogramBuckets?: string[] | undefined; name?: string | undefined }
type MetricFilter = {
  comparisonValue?: string | undefined
  metricName?: string | undefined
  not?: boolean | undefined
  operator?:
    | 'OPERATOR_UNSPECIFIED'
    | 'EQUAL'
    | 'LESS_THAN'
    | 'GREATER_THAN'
    | 'IS_MISSING'
    | undefined
}
type MetricFilterClause = {
  filters?: MetricFilter[] | undefined
  operator?: 'OPERATOR_UNSPECIFIED' | 'OR' | 'AND' | undefined
}
type Metric = {
  alias?: string | undefined
  expression?: string | undefined
  formattingType?:
    | 'METRIC_TYPE_UNSPECIFIED'
    | 'INTEGER'
    | 'FLOAT'
    | 'CURRENCY'
    | 'PERCENT'
    | 'TIME'
    | undefined
}
type OrderBy = {
  fieldName?: string | undefined
  orderType?:
    | 'ORDER_TYPE_UNSPECIFIED'
    | 'VALUE'
    | 'DELTA'
    | 'SMART'
    | 'HISTOGRAM_BUCKET'
    | 'DIMENSION_AS_INTEGER'
    | undefined
  sortOrder?: 'SORT_ORDER_UNSPECIFIED' | 'ASCENDING' | 'DESCENDING' | undefined
}
type Pivot = {
  dimensionFilterClauses?: DimensionFilterClause[] | undefined
  dimensions?: Dimension[] | undefined
  maxGroupCount?: number | undefined
  metrics?: Metric[] | undefined
  startGroup?: number | undefined
}
type SegmentDimensionFilter = {
  caseSensitive?: boolean | undefined
  dimensionName?: string | undefined
  expressions?: string[] | undefined
  maxComparisonValue?: string | undefined
  minComparisonValue?: string | undefined
  operator?:
    | 'OPERATOR_UNSPECIFIED'
    | 'REGEXP'
    | 'BEGINS_WITH'
    | 'ENDS_WITH'
    | 'PARTIAL'
    | 'EXACT'
    | 'IN_LIST'
    | 'NUMERIC_LESS_THAN'
    | 'NUMERIC_GREATER_THAN'
    | 'NUMERIC_BETWEEN'
    | undefined
}
type SegmentMetricFilter = {
  comparisonValue?: string | undefined
  maxComparisonValue?: string | undefined
  metricName?: string | undefined
  operator?: 'UNSPECIFIED_OPERATOR' | 'LESS_THAN' | 'GREATER_THAN' | 'EQUAL' | 'BETWEEN' | undefined
  scope?: 'UNSPECIFIED_SCOPE' | 'PRODUCT' | 'HIT' | 'SESSION' | 'USER' | undefined
}
type SegmentFilterClause = {
  dimensionFilter?: SegmentDimensionFilter | undefined
  metricFilter?: SegmentMetricFilter | undefined
  not?: boolean | undefined
}
type OrFiltersForSegment = { segmentFilterClauses?: SegmentFilterClause[] | undefined }
type SegmentSequenceStep = {
  matchType?: 'UNSPECIFIED_MATCH_TYPE' | 'PRECEDES' | 'IMMEDIATELY_PRECEDES' | undefined
  orFiltersForSegment?: OrFiltersForSegment[] | undefined
}
type SequenceSegment = {
  firstStepShouldMatchFirstHit?: boolean | undefined
  segmentSequenceSteps?: SegmentSequenceStep[] | undefined
}
type SimpleSegment = { orFiltersForSegment?: OrFiltersForSegment[] | undefined }
type SegmentFilter = {
  not?: boolean | undefined
  sequenceSegment?: SequenceSegment | undefined
  simpleSegment?: SimpleSegment | undefined
}
type SegmentDefinition = { segmentFilters?: SegmentFilter[] | undefined }
type DynamicSegment = {
  name?: string | undefined
  sessionSegment?: SegmentDefinition | undefined
  userSegment?: SegmentDefinition | undefined
}
type Segment = { dynamicSegment?: DynamicSegment | undefined; segmentId?: string | undefined }
type ReportRequest = {
  cohortGroup?: CohortGroup | undefined
  dateRanges?: DateRange[] | undefined
  dimensionFilterClauses?: DimensionFilterClause[] | undefined
  dimensions?: Dimension[] | undefined
  filtersExpression?: string | undefined
  hideTotals?: boolean | undefined
  hideValueRanges?: boolean | undefined
  includeEmptyRows?: boolean | undefined
  metricFilterClauses?: MetricFilterClause[] | undefined
  metrics?: Metric[] | undefined
  orderBys?: OrderBy[] | undefined
  pageSize?: number | undefined
  pageToken?: string | undefined
  pivots?: Pivot[] | undefined
  samplingLevel?: 'SAMPLING_UNSPECIFIED' | 'DEFAULT' | 'SMALL' | 'LARGE' | undefined
  segments?: Segment[] | undefined
  viewId?: string | undefined
}
type GetReportsRequest = {
  reportRequests?: ReportRequest[] | undefined
  useResourceQuotas?: boolean | undefined
}
type MetricHeaderEntry = {
  name?: string | undefined
  type?:
    | 'METRIC_TYPE_UNSPECIFIED'
    | 'INTEGER'
    | 'FLOAT'
    | 'CURRENCY'
    | 'PERCENT'
    | 'TIME'
    | undefined
}
type PivotHeaderEntry = {
  dimensionNames?: string[] | undefined
  dimensionValues?: string[] | undefined
  metric?: MetricHeaderEntry | undefined
}
type PivotHeader = {
  pivotHeaderEntries?: PivotHeaderEntry[] | undefined
  totalPivotGroupsCount?: number | undefined
}
type MetricHeader = {
  metricHeaderEntries?: MetricHeaderEntry[] | undefined
  pivotHeaders?: PivotHeader[] | undefined
}
type ColumnHeader = { dimensions?: string[] | undefined; metricHeader?: MetricHeader | undefined }
type PivotValueRegion = { values?: string[] | undefined }
type DateRangeValues = {
  pivotValueRegions?: PivotValueRegion[] | undefined
  values?: string[] | undefined
}
type ReportRow = { dimensions?: string[] | undefined; metrics?: DateRangeValues[] | undefined }
type ReportData = {
  dataLastRefreshed?: string | undefined
  emptyReason?: string | undefined
  isDataGolden?: boolean | undefined
  maximums?: DateRangeValues[] | undefined
  minimums?: DateRangeValues[] | undefined
  rowCount?: number | undefined
  rows?: ReportRow[] | undefined
  samplesReadCounts?: string[] | undefined
  samplingSpaceSizes?: string[] | undefined
  totals?: DateRangeValues[] | undefined
}
type Report = {
  columnHeader?: ColumnHeader | undefined
  data?: ReportData | undefined
  nextPageToken?: string | undefined
}
type ResourceQuotasRemaining = {
  dailyQuotaTokensRemaining?: number | undefined
  hourlyQuotaTokensRemaining?: number | undefined
}
type GetReportsResponse = {
  queryCost?: number | undefined
  reports?: Report[] | undefined
  resourceQuotasRemaining?: ResourceQuotasRemaining | undefined
}
type User = {
  type?: 'USER_ID_TYPE_UNSPECIFIED' | 'USER_ID' | 'CLIENT_ID' | undefined
  userId?: string | undefined
}
type SearchUserActivityRequest = {
  activityTypes?:
    | ('ACTIVITY_TYPE_UNSPECIFIED' | 'PAGEVIEW' | 'SCREENVIEW' | 'GOAL' | 'ECOMMERCE' | 'EVENT')[]
    | undefined
  dateRange?: DateRange | undefined
  pageSize?: number | undefined
  pageToken?: string | undefined
  user?: User | undefined
  viewId?: string | undefined
}
type ScreenviewData = {
  appName?: string | undefined
  mobileDeviceBranding?: string | undefined
  mobileDeviceModel?: string | undefined
  screenName?: string | undefined
}
type CustomDimension = { index?: number | undefined; value?: string | undefined }
type ProductData = {
  itemRevenue?: number | undefined
  productName?: string | undefined
  productQuantity?: string | undefined
  productSku?: string | undefined
}
type TransactionData = {
  transactionId?: string | undefined
  transactionRevenue?: number | undefined
  transactionShipping?: number | undefined
  transactionTax?: number | undefined
}
type EcommerceData = {
  actionType?:
    | 'UNKNOWN'
    | 'CLICK'
    | 'DETAILS_VIEW'
    | 'ADD_TO_CART'
    | 'REMOVE_FROM_CART'
    | 'CHECKOUT'
    | 'PAYMENT'
    | 'REFUND'
    | 'CHECKOUT_OPTION'
    | undefined
  ecommerceType?: 'ECOMMERCE_TYPE_UNSPECIFIED' | 'CLASSIC' | 'ENHANCED' | undefined
  products?: ProductData[] | undefined
  transaction?: TransactionData | undefined
}
type EventData = {
  eventAction?: string | undefined
  eventCategory?: string | undefined
  eventCount?: string | undefined
  eventLabel?: string | undefined
  eventValue?: string | undefined
}
type GoalData = {
  goalCompletionLocation?: string | undefined
  goalCompletions?: string | undefined
  goalIndex?: number | undefined
  goalName?: string | undefined
  goalPreviousStep1?: string | undefined
  goalPreviousStep2?: string | undefined
  goalPreviousStep3?: string | undefined
  goalValue?: number | undefined
}
type GoalSetData = { goals?: GoalData[] | undefined }
type PageviewData = { pagePath?: string | undefined; pageTitle?: string | undefined }
type Activity = {
  activityTime?: string | undefined
  activityType?:
    | 'ACTIVITY_TYPE_UNSPECIFIED'
    | 'PAGEVIEW'
    | 'SCREENVIEW'
    | 'GOAL'
    | 'ECOMMERCE'
    | 'EVENT'
    | undefined
  appview?: ScreenviewData | undefined
  campaign?: string | undefined
  channelGrouping?: string | undefined
  customDimension?: CustomDimension[] | undefined
  ecommerce?: EcommerceData | undefined
  event?: EventData | undefined
  goals?: GoalSetData | undefined
  hostname?: string | undefined
  keyword?: string | undefined
  landingPagePath?: string | undefined
  medium?: string | undefined
  pageview?: PageviewData | undefined
  source?: string | undefined
}
type UserActivitySession = {
  activities?: Activity[] | undefined
  dataSource?: string | undefined
  deviceCategory?: string | undefined
  platform?: string | undefined
  sessionDate?: string | undefined
  sessionId?: string | undefined
}
type SearchUserActivityResponse = {
  nextPageToken?: string | undefined
  sampleRate?: number | undefined
  sessions?: UserActivitySession[] | undefined
  totalRows?: number | undefined
}
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/v4/reports:batchGet': {
      $post: {
        input: {
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
        } & { json: GetReportsRequest }
        output: GetReportsResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v4/userActivity:search': {
      $post: {
        input: {
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
        } & { json: SearchUserActivityRequest }
        output: SearchUserActivityResponse
        outputFormat: 'json'
        status: 200
      }
    }
  },
  '/'
>
export default routes
