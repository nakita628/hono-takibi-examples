import { createRoute, z } from '@hono/zod-openapi'

const SegmentDimensionFilterSchema = z
  .object({
    caseSensitive: z
      .boolean()
      .exactOptional()
      .openapi({
        description: 'Should the match be case sensitive, ignored for `IN_LIST` operator.',
      }),
    dimensionName: z
      .string()
      .exactOptional()
      .openapi({ description: 'Name of the dimension for which the filter is being applied.' }),
    expressions: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description: 'The list of expressions, only the first element is used for all operators',
      }),
    maxComparisonValue: z
      .string()
      .exactOptional()
      .openapi({ description: 'Maximum comparison values for `BETWEEN` match type.' }),
    minComparisonValue: z
      .string()
      .exactOptional()
      .openapi({ description: 'Minimum comparison values for `BETWEEN` match type.' }),
    operator: z
      .enum([
        'OPERATOR_UNSPECIFIED',
        'REGEXP',
        'BEGINS_WITH',
        'ENDS_WITH',
        'PARTIAL',
        'EXACT',
        'IN_LIST',
        'NUMERIC_LESS_THAN',
        'NUMERIC_GREATER_THAN',
        'NUMERIC_BETWEEN',
      ])
      .exactOptional()
      .openapi({ description: 'The operator to use to match the dimension with the expressions.' }),
  })
  .openapi({
    description: 'Dimension filter specifies the filtering options on a dimension.',
    required: [],
  })
  .openapi('SegmentDimensionFilter')

const SegmentMetricFilterSchema = z
  .object({
    comparisonValue: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The value to compare against. If the operator is `BETWEEN`, this value is treated as minimum comparison value.',
      }),
    maxComparisonValue: z
      .string()
      .exactOptional()
      .openapi({ description: 'Max comparison value is only used for `BETWEEN` operator.' }),
    metricName: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The metric that will be filtered on. A `metricFilter` must contain a metric name.',
      }),
    operator: z
      .enum(['UNSPECIFIED_OPERATOR', 'LESS_THAN', 'GREATER_THAN', 'EQUAL', 'BETWEEN'])
      .exactOptional()
      .openapi({
        description:
          'Specifies is the operation to perform to compare the metric. The default is `EQUAL`.',
      }),
    scope: z
      .enum(['UNSPECIFIED_SCOPE', 'PRODUCT', 'HIT', 'SESSION', 'USER'])
      .exactOptional()
      .openapi({
        description:
          'Scope for a metric defines the level at which that metric is defined. The specified metric scope must be equal to or greater than its primary scope as defined in the data model. The primary scope is defined by if the segment is selecting users or sessions.',
      }),
  })
  .openapi({ description: 'Metric filter to be used in a segment filter clause.', required: [] })
  .openapi('SegmentMetricFilter')

const SegmentFilterClauseSchema = z
  .object({
    dimensionFilter: SegmentDimensionFilterSchema.exactOptional().openapi({
      description: 'Dimension Filter for the segment definition.',
    }),
    metricFilter: SegmentMetricFilterSchema.exactOptional().openapi({
      description: 'Metric Filter for the segment definition.',
    }),
    not: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Matches the complement (`!`) of the filter.' }),
  })
  .openapi({
    description:
      'Filter Clause to be used in a segment definition, can be wither a metric or a dimension filter.',
    required: [],
  })
  .openapi('SegmentFilterClause')

const OrFiltersForSegmentSchema = z
  .object({
    segmentFilterClauses: z
      .array(SegmentFilterClauseSchema)
      .exactOptional()
      .openapi({ description: 'List of segment filters to be combined with a `OR` operator.' }),
  })
  .openapi({
    description:
      'A list of segment filters in the `OR` group are combined with the logical OR operator.',
    required: [],
  })
  .openapi('OrFiltersForSegment')

const SegmentSequenceStepSchema = z
  .object({
    matchType: z
      .enum(['UNSPECIFIED_MATCH_TYPE', 'PRECEDES', 'IMMEDIATELY_PRECEDES'])
      .exactOptional()
      .openapi({
        description:
          'Specifies if the step immediately precedes or can be any time before the next step.',
      }),
    orFiltersForSegment: z
      .array(OrFiltersForSegmentSchema)
      .exactOptional()
      .openapi({
        description:
          'A sequence is specified with a list of Or grouped filters which are combined with `AND` operator.',
      }),
  })
  .openapi({ description: 'A segment sequence definition.', required: [] })
  .openapi('SegmentSequenceStep')

const SequenceSegmentSchema = z
  .object({
    firstStepShouldMatchFirstHit: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'If set, first step condition must match the first hit of the visitor (in the date range).',
      }),
    segmentSequenceSteps: z
      .array(SegmentSequenceStepSchema)
      .exactOptional()
      .openapi({ description: 'The list of steps in the sequence.' }),
  })
  .openapi({
    description:
      'Sequence conditions consist of one or more steps, where each step is defined by one or more dimension/metric conditions. Multiple steps can be combined with special sequence operators.',
    required: [],
  })
  .openapi('SequenceSegment')

const SimpleSegmentSchema = z
  .object({
    orFiltersForSegment: z
      .array(OrFiltersForSegmentSchema)
      .exactOptional()
      .openapi({
        description:
          'A list of segment filters groups which are combined with logical `AND` operator.',
      }),
  })
  .openapi({
    description:
      'A Simple segment conditions consist of one or more dimension/metric conditions that can be combined.',
    required: [],
  })
  .openapi('SimpleSegment')

const SegmentFilterSchema = z
  .object({
    not: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'If true, match the complement of simple or sequence segment. For example, to match all visits not from "New York", we can define the segment as follows: "sessionSegment": { "segmentFilters": [{ "simpleSegment" :{ "orFiltersForSegment": [{ "segmentFilterClauses":[{ "dimensionFilter": { "dimensionName": "ga:city", "expressions": ["New York"] } }] }] }, "not": "True" }] },',
      }),
    sequenceSegment: SequenceSegmentSchema.exactOptional().openapi({
      description:
        'Sequence conditions consist of one or more steps, where each step is defined by one or more dimension/metric conditions. Multiple steps can be combined with special sequence operators.',
    }),
    simpleSegment: SimpleSegmentSchema.exactOptional().openapi({
      description:
        'A Simple segment conditions consist of one or more dimension/metric conditions that can be combined',
    }),
  })
  .openapi({
    description:
      'SegmentFilter defines the segment to be either a simple or a sequence segment. A simple segment condition contains dimension and metric conditions to select the sessions or users. A sequence segment condition can be used to select users or sessions based on sequential conditions.',
    required: [],
  })
  .openapi('SegmentFilter')

const SegmentDefinitionSchema = z
  .object({
    segmentFilters: z
      .array(SegmentFilterSchema)
      .exactOptional()
      .openapi({
        description:
          'A segment is defined by a set of segment filters which are combined together with a logical `AND` operation.',
      }),
  })
  .openapi({
    description:
      'SegmentDefinition defines the segment to be a set of SegmentFilters which are combined together with a logical `AND` operation.',
    required: [],
  })
  .openapi('SegmentDefinition')

const DynamicSegmentSchema = z
  .object({
    name: z.string().exactOptional().openapi({ description: 'The name of the dynamic segment.' }),
    sessionSegment: SegmentDefinitionSchema.exactOptional().openapi({
      description: 'Session Segment to select sessions to include in the segment.',
    }),
    userSegment: SegmentDefinitionSchema.exactOptional().openapi({
      description: 'User Segment to select users to include in the segment.',
    }),
  })
  .openapi({
    description:
      'Dynamic segment definition for defining the segment within the request. A segment can select users, sessions or both.',
    required: [],
  })
  .openapi('DynamicSegment')

type SegmentType = { dynamicSegment?: z.infer<typeof DynamicSegmentSchema>; segmentId?: string }

const ScreenviewDataSchema = z
  .object({
    appName: z.string().exactOptional().openapi({ description: 'The application name.' }),
    mobileDeviceBranding: z
      .string()
      .exactOptional()
      .openapi({ description: 'Mobile manufacturer or branded name. Eg: "Google", "Apple" etc.' }),
    mobileDeviceModel: z
      .string()
      .exactOptional()
      .openapi({ description: 'Mobile device model. Eg: "Pixel", "iPhone" etc.' }),
    screenName: z.string().exactOptional().openapi({ description: 'The name of the screen.' }),
  })
  .openapi({ required: [] })
  .openapi('ScreenviewData')

const CustomDimensionSchema = z
  .object({
    index: z.int32().exactOptional().openapi({ description: 'Slot number of custom dimension.' }),
    value: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Value of the custom dimension. Default value (i.e. empty string) indicates clearing sesion/visitor scope custom dimension value.',
      }),
  })
  .openapi({ description: 'Custom dimension.', required: [] })
  .openapi('CustomDimension')

const ProductDataSchema = z
  .object({
    itemRevenue: z
      .float64()
      .exactOptional()
      .openapi({ description: 'The total revenue from purchased product items.' }),
    productName: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The product name, supplied by the e-commerce tracking application, for the purchased items.',
      }),
    productQuantity: z
      .string()
      .exactOptional()
      .openapi({ description: 'Total number of this product units in the transaction.' }),
    productSku: z
      .string()
      .exactOptional()
      .openapi({ description: 'Unique code that represents the product.' }),
  })
  .openapi({ description: 'Details of the products in an e-commerce transaction.', required: [] })
  .openapi('ProductData')

const TransactionDataSchema = z
  .object({
    transactionId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The transaction ID, supplied by the e-commerce tracking method, for the purchase in the shopping cart.',
      }),
    transactionRevenue: z
      .float64()
      .exactOptional()
      .openapi({
        description: 'The total sale revenue (excluding shipping and tax) of the transaction.',
      }),
    transactionShipping: z
      .float64()
      .exactOptional()
      .openapi({ description: 'Total cost of shipping.' }),
    transactionTax: z
      .float64()
      .exactOptional()
      .openapi({ description: 'Total tax for the transaction.' }),
  })
  .openapi({
    description:
      'Represents details collected when the visitor performs a transaction on the page.',
    required: [],
  })
  .openapi('TransactionData')

const EcommerceDataSchema = z
  .object({
    actionType: z
      .enum([
        'UNKNOWN',
        'CLICK',
        'DETAILS_VIEW',
        'ADD_TO_CART',
        'REMOVE_FROM_CART',
        'CHECKOUT',
        'PAYMENT',
        'REFUND',
        'CHECKOUT_OPTION',
      ])
      .exactOptional()
      .openapi({ description: 'Action associated with this e-commerce action.' }),
    ecommerceType: z
      .enum(['ECOMMERCE_TYPE_UNSPECIFIED', 'CLASSIC', 'ENHANCED'])
      .exactOptional()
      .openapi({ description: 'The type of this e-commerce activity.' }),
    products: z
      .array(ProductDataSchema)
      .exactOptional()
      .openapi({ description: 'Details of the products in this transaction.' }),
    transaction: TransactionDataSchema.exactOptional().openapi({
      description: 'Transaction details of this e-commerce action.',
    }),
  })
  .openapi({ description: 'E-commerce details associated with the user activity.', required: [] })
  .openapi('EcommerceData')

const EventDataSchema = z
  .object({
    eventAction: z
      .string()
      .exactOptional()
      .openapi({ description: "Type of interaction with the object. Eg: 'play'." }),
    eventCategory: z
      .string()
      .exactOptional()
      .openapi({ description: "The object on the page that was interacted with. Eg: 'Video'." }),
    eventCount: z
      .string()
      .exactOptional()
      .openapi({ description: 'Number of such events in this activity.' }),
    eventLabel: z
      .string()
      .exactOptional()
      .openapi({ description: 'Label attached with the event.' }),
    eventValue: z
      .string()
      .exactOptional()
      .openapi({ description: 'Numeric value associated with the event.' }),
  })
  .openapi({ description: 'Represents all the details pertaining to an event.', required: [] })
  .openapi('EventData')

const GoalDataSchema = z
  .object({
    goalCompletionLocation: z
      .string()
      .exactOptional()
      .openapi({ description: 'URL of the page where this goal was completed.' }),
    goalCompletions: z
      .string()
      .exactOptional()
      .openapi({ description: 'Total number of goal completions in this activity.' }),
    goalIndex: z
      .int32()
      .exactOptional()
      .openapi({ description: 'This identifies the goal as configured for the profile.' }),
    goalName: z.string().exactOptional().openapi({ description: 'Name of the goal.' }),
    goalPreviousStep1: z
      .string()
      .exactOptional()
      .openapi({ description: 'URL of the page one step prior to the goal completion.' }),
    goalPreviousStep2: z
      .string()
      .exactOptional()
      .openapi({ description: 'URL of the page two steps prior to the goal completion.' }),
    goalPreviousStep3: z
      .string()
      .exactOptional()
      .openapi({ description: 'URL of the page three steps prior to the goal completion.' }),
    goalValue: z.float64().exactOptional().openapi({ description: 'Value in this goal.' }),
  })
  .openapi({ description: 'Represents all the details pertaining to a goal.', required: [] })
  .openapi('GoalData')

const GoalSetDataSchema = z
  .object({
    goals: z
      .array(GoalDataSchema)
      .exactOptional()
      .openapi({ description: 'All the goals that were reached in the current activity.' }),
  })
  .openapi({
    description: 'Represents a set of goals that were reached in an activity.',
    required: [],
  })
  .openapi('GoalSetData')

const PageviewDataSchema = z
  .object({
    pagePath: z
      .string()
      .exactOptional()
      .openapi({ description: 'The URL of the page that the visitor viewed.' }),
    pageTitle: z
      .string()
      .exactOptional()
      .openapi({ description: 'The title of the page that the visitor viewed.' }),
  })
  .openapi({
    description: 'Represents details collected when the visitor views a page.',
    required: [],
  })
  .openapi('PageviewData')

const ActivitySchema = z
  .object({
    activityTime: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Timestamp of the activity. If activities for a visit cross midnight and occur in two separate dates, then two sessions (one per date) share the session identifier. For example, say session ID 113472 has activity within 2019-08-20, and session ID 243742 has activity within 2019-08-25 and 2019-08-26. Session ID 113472 is one session, and session ID 243742 is two sessions.',
      }),
    activityType: z
      .enum(['ACTIVITY_TYPE_UNSPECIFIED', 'PAGEVIEW', 'SCREENVIEW', 'GOAL', 'ECOMMERCE', 'EVENT'])
      .exactOptional()
      .openapi({ description: 'Type of this activity.' }),
    appview: ScreenviewDataSchema.exactOptional().openapi({
      description: 'This will be set if `activity_type` equals `SCREEN_VIEW`.',
    }),
    campaign: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'For manual campaign tracking, it is the value of the utm_campaign campaign tracking parameter. For AdWords autotagging, it is the name(s) of the online ad campaign(s) you use for the property. If you use neither, its value is (not set).',
      }),
    channelGrouping: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "The Channel Group associated with an end user's session for this View (defined by the View's Channel Groupings).",
      }),
    customDimension: z
      .array(CustomDimensionSchema)
      .exactOptional()
      .openapi({ description: 'A list of all custom dimensions associated with this activity.' }),
    ecommerce: EcommerceDataSchema.exactOptional().openapi({
      description: 'This will be set if `activity_type` equals `ECOMMERCE`.',
    }),
    event: EventDataSchema.exactOptional().openapi({
      description:
        'This field contains all the details pertaining to an event and will be set if `activity_type` equals `EVENT`.',
    }),
    goals: GoalSetDataSchema.exactOptional().openapi({
      description:
        'This field contains a list of all the goals that were reached in this activity when `activity_type` equals `GOAL`.',
    }),
    hostname: z
      .string()
      .exactOptional()
      .openapi({ description: 'The hostname from which the tracking request was made.' }),
    keyword: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'For manual campaign tracking, it is the value of the utm_term campaign tracking parameter. For AdWords traffic, it contains the best matching targeting criteria. For the display network, where multiple targeting criteria could have caused the ad to show up, it returns the best matching targeting criteria as selected by Ads. This could be display_keyword, site placement, boomuserlist, user_interest, age, or gender. Otherwise its value is (not set).',
      }),
    landingPagePath: z
      .string()
      .exactOptional()
      .openapi({ description: "The first page in users' sessions, or the landing page." }),
    medium: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The type of referrals. For manual campaign tracking, it is the value of the utm_medium campaign tracking parameter. For AdWords autotagging, it is cpc. If users came from a search engine detected by Google Analytics, it is organic. If the referrer is not a search engine, it is referral. If users came directly to the property and document.referrer is empty, its value is (none).',
      }),
    pageview: PageviewDataSchema.exactOptional().openapi({
      description:
        'This will be set if `activity_type` equals `PAGEVIEW`. This field contains all the details about the visitor and the page that was visited.',
    }),
    source: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The source of referrals. For manual campaign tracking, it is the value of the utm_source campaign tracking parameter. For AdWords autotagging, it is google. If you use neither, it is the domain of the source (e.g., document.referrer) referring the users. It may also contain a port address. If users arrived without a referrer, its value is (direct).',
      }),
  })
  .openapi({
    description:
      "An Activity represents data for an activity of a user. Note that an Activity is different from a hit. A hit might result in multiple Activity's. For example, if a hit includes a transaction and a goal completion, there will be two Activity protos for this hit, one for ECOMMERCE and one for GOAL. Conversely, multiple hits can also construct one Activity. In classic e-commerce, data for one transaction might be sent through multiple hits. These hits will be merged into one ECOMMERCE Activity.",
    required: [],
  })
  .openapi('Activity')

const DateRangeSchema = z
  .object({
    endDate: z
      .string()
      .exactOptional()
      .openapi({ description: 'The end date for the query in the format `YYYY-MM-DD`.' }),
    startDate: z
      .string()
      .exactOptional()
      .openapi({ description: 'The start date for the query in the format `YYYY-MM-DD`.' }),
  })
  .openapi({
    description:
      'A contiguous set of days: startDate, startDate + 1 day, ..., endDate. The start and end dates are specified in [ISO8601](https://en.wikipedia.org/wiki/ISO_8601) date format `YYYY-MM-DD`.',
    required: [],
  })
  .openapi('DateRange')

const CohortSchema = z
  .object({
    dateRange: DateRangeSchema.exactOptional().openapi({
      description:
        'This is used for `FIRST_VISIT_DATE` cohort, the cohort selects users whose first visit date is between start date and end date defined in the DateRange. The date ranges should be aligned for cohort requests. If the request contains `ga:cohortNthDay` it should be exactly one day long, if `ga:cohortNthWeek` it should be aligned to the week boundary (starting at Sunday and ending Saturday), and for `ga:cohortNthMonth` the date range should be aligned to the month (starting at the first and ending on the last day of the month). For LTV requests there are no such restrictions. You do not need to supply a date range for the `reportsRequest.dateRanges` field.',
    }),
    name: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'A unique name for the cohort. If not defined name will be auto-generated with values cohort_[1234...].',
      }),
    type: z
      .enum(['UNSPECIFIED_COHORT_TYPE', 'FIRST_VISIT_DATE'])
      .exactOptional()
      .openapi({
        description:
          'Type of the cohort. The only supported type as of now is `FIRST_VISIT_DATE`. If this field is unspecified the cohort is treated as `FIRST_VISIT_DATE` type cohort.',
      }),
  })
  .openapi({
    description:
      'Defines a cohort. A cohort is a group of users who share a common characteristic. For example, all users with the same acquisition date belong to the same cohort.',
    required: [],
  })
  .openapi('Cohort')

const CohortGroupSchema = z
  .object({
    cohorts: z
      .array(CohortSchema)
      .exactOptional()
      .openapi({ description: 'The definition for the cohort.' }),
    lifetimeValue: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Enable Life Time Value (LTV). LTV measures lifetime value for users acquired through different channels. Please see: [Cohort Analysis](https://support.google.com/analytics/answer/6074676) and [Lifetime Value](https://support.google.com/analytics/answer/6182550) If the value of lifetimeValue is false: - The metric values are similar to the values in the web interface cohort report. - The cohort definition date ranges must be aligned to the calendar week and month. i.e. while requesting `ga:cohortNthWeek` the `startDate` in the cohort definition should be a Sunday and the `endDate` should be the following Saturday, and for `ga:cohortNthMonth`, the `startDate` should be the 1st of the month and `endDate` should be the last day of the month. When the lifetimeValue is true: - The metric values will correspond to the values in the web interface LifeTime value report. - The Lifetime Value report shows you how user value (Revenue) and engagement (Appviews, Goal Completions, Sessions, and Session Duration) grow during the 90 days after a user is acquired. - The metrics are calculated as a cumulative average per user per the time increment. - The cohort definition date ranges need not be aligned to the calendar week and month boundaries. - The `viewId` must be an [app view ID](https://support.google.com/analytics/answer/2649553#WebVersusAppViews)',
      }),
  })
  .openapi({
    description:
      'Defines a cohort group. For example: "cohortGroup": { "cohorts": [{ "name": "cohort 1", "type": "FIRST_VISIT_DATE", "dateRange": { "startDate": "2015-08-01", "endDate": "2015-08-01" } },{ "name": "cohort 2" "type": "FIRST_VISIT_DATE" "dateRange": { "startDate": "2015-07-01", "endDate": "2015-07-01" } }] }',
    required: [],
  })
  .openapi('CohortGroup')

const MetricHeaderEntrySchema = z
  .object({
    name: z.string().exactOptional().openapi({ description: 'The name of the header.' }),
    type: z
      .enum(['METRIC_TYPE_UNSPECIFIED', 'INTEGER', 'FLOAT', 'CURRENCY', 'PERCENT', 'TIME'])
      .exactOptional()
      .openapi({ description: 'The type of the metric, for example `INTEGER`.' }),
  })
  .openapi({ description: 'Header for the metrics.', required: [] })
  .openapi('MetricHeaderEntry')

const PivotHeaderEntrySchema = z
  .object({
    dimensionNames: z
      .array(z.string())
      .exactOptional()
      .openapi({ description: 'The name of the dimensions in the pivot response.' }),
    dimensionValues: z
      .array(z.string())
      .exactOptional()
      .openapi({ description: 'The values for the dimensions in the pivot.' }),
    metric: MetricHeaderEntrySchema.exactOptional().openapi({
      description: 'The metric header for the metric in the pivot.',
    }),
  })
  .openapi({
    description:
      'The headers for the each of the metric column corresponding to the metrics requested in the pivots section of the response.',
    required: [],
  })
  .openapi('PivotHeaderEntry')

const PivotHeaderSchema = z
  .object({
    pivotHeaderEntries: z
      .array(PivotHeaderEntrySchema)
      .exactOptional()
      .openapi({ description: 'A single pivot section header.' }),
    totalPivotGroupsCount: z
      .int32()
      .exactOptional()
      .openapi({ description: 'The total number of groups for this pivot.' }),
  })
  .openapi({
    description: 'The headers for each of the pivot sections defined in the request.',
    required: [],
  })
  .openapi('PivotHeader')

const MetricHeaderSchema = z
  .object({
    metricHeaderEntries: z
      .array(MetricHeaderEntrySchema)
      .exactOptional()
      .openapi({ description: 'Headers for the metrics in the response.' }),
    pivotHeaders: z
      .array(PivotHeaderSchema)
      .exactOptional()
      .openapi({ description: 'Headers for the pivots in the response.' }),
  })
  .openapi({ description: 'The headers for the metrics.', required: [] })
  .openapi('MetricHeader')

const ColumnHeaderSchema = z
  .object({
    dimensions: z
      .array(z.string())
      .exactOptional()
      .openapi({ description: 'The dimension names in the response.' }),
    metricHeader: MetricHeaderSchema.exactOptional().openapi({
      description: 'Metric headers for the metrics in the response.',
    }),
  })
  .openapi({ description: 'Column headers.', required: [] })
  .openapi('ColumnHeader')

const PivotValueRegionSchema = z
  .object({
    values: z
      .array(z.string())
      .exactOptional()
      .openapi({ description: 'The values of the metrics in each of the pivot regions.' }),
  })
  .openapi({ description: 'The metric values in the pivot region.', required: [] })
  .openapi('PivotValueRegion')

const DateRangeValuesSchema = z
  .object({
    pivotValueRegions: z
      .array(PivotValueRegionSchema)
      .exactOptional()
      .openapi({ description: 'The values of each pivot region.' }),
    values: z
      .array(z.string())
      .exactOptional()
      .openapi({ description: 'Each value corresponds to each Metric in the request.' }),
  })
  .openapi({
    description: 'Used to return a list of metrics for a single DateRange / dimension combination',
    required: [],
  })
  .openapi('DateRangeValues')

const DimensionSchema = z
  .object({
    histogramBuckets: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description:
          'If non-empty, we place dimension values into buckets after string to int64. Dimension values that are not the string representation of an integral value will be converted to zero. The bucket values have to be in increasing order. Each bucket is closed on the lower end, and open on the upper end. The "first" bucket includes all values less than the first boundary, the "last" bucket includes all values up to infinity. Dimension values that fall in a bucket get transformed to a new dimension value. For example, if one gives a list of "0, 1, 3, 4, 7", then we return the following buckets: - bucket #1: values < 0, dimension value "<0" - bucket #2: values in [0,1), dimension value "0" - bucket #3: values in [1,3), dimension value "1-2" - bucket #4: values in [3,4), dimension value "3" - bucket #5: values in [4,7), dimension value "4-6" - bucket #6: values >= 7, dimension value "7+" NOTE: If you are applying histogram mutation on any dimension, and using that dimension in sort, you will want to use the sort type `HISTOGRAM_BUCKET` for that purpose. Without that the dimension values will be sorted according to dictionary (lexicographic) order. For example the ascending dictionary order is: "<50", "1001+", "121-1000", "50-120" And the ascending `HISTOGRAM_BUCKET` order is: "<50", "50-120", "121-1000", "1001+" The client has to explicitly request `"orderType": "HISTOGRAM_BUCKET"` for a histogram-mutated dimension.',
      }),
    name: z
      .string()
      .exactOptional()
      .openapi({ description: 'Name of the dimension to fetch, for example `ga:browser`.' }),
  })
  .openapi({
    description:
      '[Dimensions](https://support.google.com/analytics/answer/1033861) are attributes of your data. For example, the dimension `ga:city` indicates the city, for example, "Paris" or "New York", from which a session originates.',
    required: [],
  })
  .openapi('Dimension')

const DimensionFilterSchema = z
  .object({
    caseSensitive: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Should the match be case sensitive? Default is false.' }),
    dimensionName: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The dimension to filter on. A DimensionFilter must contain a dimension.',
      }),
    expressions: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description:
          'Strings or regular expression to match against. Only the first value of the list is used for comparison unless the operator is `IN_LIST`. If `IN_LIST` operator, then the entire list is used to filter the dimensions as explained in the description of the `IN_LIST` operator.',
      }),
    not: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Logical `NOT` operator. If this boolean is set to true, then the matching dimension values will be excluded in the report. The default is false.',
      }),
    operator: z
      .enum([
        'OPERATOR_UNSPECIFIED',
        'REGEXP',
        'BEGINS_WITH',
        'ENDS_WITH',
        'PARTIAL',
        'EXACT',
        'NUMERIC_EQUAL',
        'NUMERIC_GREATER_THAN',
        'NUMERIC_LESS_THAN',
        'IN_LIST',
      ])
      .exactOptional()
      .openapi({
        description: 'How to match the dimension to the expression. The default is REGEXP.',
      }),
  })
  .openapi({
    description: 'Dimension filter specifies the filtering options on a dimension.',
    required: [],
  })
  .openapi('DimensionFilter')

const DimensionFilterClauseSchema = z
  .object({
    filters: z
      .array(DimensionFilterSchema)
      .exactOptional()
      .openapi({
        description:
          'The repeated set of filters. They are logically combined based on the operator specified.',
      }),
    operator: z
      .enum(['OPERATOR_UNSPECIFIED', 'OR', 'AND'])
      .exactOptional()
      .openapi({
        description:
          'The operator for combining multiple dimension filters. If unspecified, it is treated as an `OR`.',
      }),
  })
  .openapi({
    description:
      'A group of dimension filters. Set the operator value to specify how the filters are logically combined.',
    required: [],
  })
  .openapi('DimensionFilterClause')

const MetricFilterSchema = z
  .object({
    comparisonValue: z
      .string()
      .exactOptional()
      .openapi({ description: 'The value to compare against.' }),
    metricName: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The metric that will be filtered on. A metricFilter must contain a metric name. A metric name can be an alias earlier defined as a metric or it can also be a metric expression.',
      }),
    not: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Logical `NOT` operator. If this boolean is set to true, then the matching metric values will be excluded in the report. The default is false.',
      }),
    operator: z
      .enum(['OPERATOR_UNSPECIFIED', 'EQUAL', 'LESS_THAN', 'GREATER_THAN', 'IS_MISSING'])
      .exactOptional()
      .openapi({
        description:
          'Is the metric `EQUAL`, `LESS_THAN` or `GREATER_THAN` the comparisonValue, the default is `EQUAL`. If the operator is `IS_MISSING`, checks if the metric is missing and would ignore the comparisonValue.',
      }),
  })
  .openapi({ description: 'MetricFilter specifies the filter on a metric.', required: [] })
  .openapi('MetricFilter')

const MetricFilterClauseSchema = z
  .object({
    filters: z
      .array(MetricFilterSchema)
      .exactOptional()
      .openapi({
        description:
          'The repeated set of filters. They are logically combined based on the operator specified.',
      }),
    operator: z
      .enum(['OPERATOR_UNSPECIFIED', 'OR', 'AND'])
      .exactOptional()
      .openapi({
        description:
          'The operator for combining multiple metric filters. If unspecified, it is treated as an `OR`.',
      }),
  })
  .openapi({
    description:
      'Represents a group of metric filters. Set the operator value to specify how the filters are logically combined.',
    required: [],
  })
  .openapi('MetricFilterClause')

const MetricSchema = z
  .object({
    alias: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'An alias for the metric expression is an alternate name for the expression. The alias can be used for filtering and sorting. This field is optional and is useful if the expression is not a single metric but a complex expression which cannot be used in filtering and sorting. The alias is also used in the response column header.',
      }),
    expression: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'A metric expression in the request. An expression is constructed from one or more metrics and numbers. Accepted operators include: Plus (+), Minus (-), Negation (Unary -), Divided by (/), Multiplied by (*), Parenthesis, Positive cardinal numbers (0-9), can include decimals and is limited to 1024 characters. Example `ga:totalRefunds/ga:users`, in most cases the metric expression is just a single metric name like `ga:users`. Adding mixed `MetricType` (E.g., `CURRENCY` + `PERCENTAGE`) metrics will result in unexpected results.',
      }),
    formattingType: z
      .enum(['METRIC_TYPE_UNSPECIFIED', 'INTEGER', 'FLOAT', 'CURRENCY', 'PERCENT', 'TIME'])
      .exactOptional()
      .openapi({
        description:
          'Specifies how the metric expression should be formatted, for example `INTEGER`.',
      }),
  })
  .openapi({
    description:
      '[Metrics](https://support.google.com/analytics/answer/1033861) are the quantitative measurements. For example, the metric `ga:users` indicates the total number of users for the requested time period.',
    required: [],
  })
  .openapi('Metric')

const OrderBySchema = z
  .object({
    fieldName: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The field which to sort by. The default sort order is ascending. Example: `ga:browser`. Note, that you can only specify one field for sort here. For example, `ga:browser, ga:city` is not valid.',
      }),
    orderType: z
      .enum([
        'ORDER_TYPE_UNSPECIFIED',
        'VALUE',
        'DELTA',
        'SMART',
        'HISTOGRAM_BUCKET',
        'DIMENSION_AS_INTEGER',
      ])
      .exactOptional()
      .openapi({ description: 'The order type. The default orderType is `VALUE`.' }),
    sortOrder: z
      .enum(['SORT_ORDER_UNSPECIFIED', 'ASCENDING', 'DESCENDING'])
      .exactOptional()
      .openapi({ description: 'The sorting order for the field.' }),
  })
  .openapi({ description: 'Specifies the sorting options.', required: [] })
  .openapi('OrderBy')

const PivotSchema = z
  .object({
    dimensionFilterClauses: z
      .array(DimensionFilterClauseSchema)
      .exactOptional()
      .openapi({
        description:
          'DimensionFilterClauses are logically combined with an `AND` operator: only data that is included by all these DimensionFilterClauses contributes to the values in this pivot region. Dimension filters can be used to restrict the columns shown in the pivot region. For example if you have `ga:browser` as the requested dimension in the pivot region, and you specify key filters to restrict `ga:browser` to only "IE" or "Firefox", then only those two browsers would show up as columns.',
      }),
    dimensions: z
      .array(DimensionSchema)
      .exactOptional()
      .openapi({
        description:
          'A list of dimensions to show as pivot columns. A Pivot can have a maximum of 4 dimensions. Pivot dimensions are part of the restriction on the total number of dimensions allowed in the request.',
      }),
    maxGroupCount: z
      .int32()
      .exactOptional()
      .openapi({
        description:
          'Specifies the maximum number of groups to return. The default value is 10, also the maximum value is 1,000.',
      }),
    metrics: z
      .array(MetricSchema)
      .exactOptional()
      .openapi({
        description:
          'The pivot metrics. Pivot metrics are part of the restriction on total number of metrics allowed in the request.',
      }),
    startGroup: z
      .int32()
      .exactOptional()
      .openapi({
        description:
          'If k metrics were requested, then the response will contain some data-dependent multiple of k columns in the report. E.g., if you pivoted on the dimension `ga:browser` then you\'d get k columns for "Firefox", k columns for "IE", k columns for "Chrome", etc. The ordering of the groups of columns is determined by descending order of "total" for the first of the k values. Ties are broken by lexicographic ordering of the first pivot dimension, then lexicographic ordering of the second pivot dimension, and so on. E.g., if the totals for the first value for Firefox, IE, and Chrome were 8, 2, 8, respectively, the order of columns would be Chrome, Firefox, IE. The following let you choose which of the groups of k columns are included in the response.',
      }),
  })
  .openapi({
    description:
      'The Pivot describes the pivot section in the request. The Pivot helps rearrange the information in the table for certain reports by pivoting your data on a second dimension.',
    required: [],
  })
  .openapi('Pivot')

const SegmentSchema: z.ZodType<SegmentType> = z
  .lazy(() =>
    z
      .object({
        dynamicSegment: DynamicSegmentSchema.exactOptional().openapi({
          description: 'A dynamic segment definition in the request.',
        }),
        segmentId: z
          .string()
          .exactOptional()
          .openapi({
            description: 'The segment ID of a built-in or custom segment, for example `gaid::-3`.',
          }),
      })
      .openapi({
        description:
          'The segment definition, if the report needs to be segmented. A Segment is a subset of the Analytics data. For example, of the entire set of users, one Segment might be users from a particular country or city.',
        required: [],
      }),
  )
  .openapi('Segment')

const ReportRequestSchema = z
  .object({
    cohortGroup: CohortGroupSchema.exactOptional().openapi({
      description:
        'Cohort group associated with this request. If there is a cohort group in the request the `ga:cohort` dimension must be present. Every [ReportRequest](#ReportRequest) within a `batchGet` method must contain the same `cohortGroup` definition.',
    }),
    dateRanges: z
      .array(DateRangeSchema)
      .exactOptional()
      .openapi({
        description:
          'Date ranges in the request. The request can have a maximum of 2 date ranges. The response will contain a set of metric values for each combination of the dimensions for each date range in the request. So, if there are two date ranges, there will be two set of metric values, one for the original date range and one for the second date range. The `reportRequest.dateRanges` field should not be specified for cohorts or Lifetime value requests. If a date range is not provided, the default date range is (startDate: current date - 7 days, endDate: current date - 1 day). Every [ReportRequest](#ReportRequest) within a `batchGet` method must contain the same `dateRanges` definition.',
      }),
    dimensionFilterClauses: z
      .array(DimensionFilterClauseSchema)
      .exactOptional()
      .openapi({
        description:
          'The dimension filter clauses for filtering Dimension Values. They are logically combined with the `AND` operator. Note that filtering occurs before any dimensions are aggregated, so that the returned metrics represent the total for only the relevant dimensions.',
      }),
    dimensions: z
      .array(DimensionSchema)
      .exactOptional()
      .openapi({
        description: 'The dimensions requested. Requests can have a total of 9 dimensions.',
      }),
    filtersExpression: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Dimension or metric filters that restrict the data returned for your request. To use the `filtersExpression`, supply a dimension or metric on which to filter, followed by the filter expression. For example, the following expression selects `ga:browser` dimension which starts with Firefox; `ga:browser=~^Firefox`. For more information on dimensions and metric filters, see [Filters reference](https://developers.google.com/analytics/devguides/reporting/core/v3/reference#filters).',
      }),
    hideTotals: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'If set to true, hides the total of all metrics for all the matching rows, for every date range. The default false and will return the totals.',
      }),
    hideValueRanges: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'If set to true, hides the minimum and maximum across all matching rows. The default is false and the value ranges are returned.',
      }),
    includeEmptyRows: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'If set to false, the response does not include rows if all the retrieved metrics are equal to zero. The default is false which will exclude these rows.',
      }),
    metricFilterClauses: z
      .array(MetricFilterClauseSchema)
      .exactOptional()
      .openapi({
        description:
          'The metric filter clauses. They are logically combined with the `AND` operator. Metric filters look at only the first date range and not the comparing date range. Note that filtering on metrics occurs after the metrics are aggregated.',
      }),
    metrics: z
      .array(MetricSchema)
      .exactOptional()
      .openapi({
        description:
          'The metrics requested. Requests must specify at least one metric. Requests can have a total of 10 metrics.',
      }),
    orderBys: z
      .array(OrderBySchema)
      .exactOptional()
      .openapi({
        description:
          'Sort order on output rows. To compare two rows, the elements of the following are applied in order until a difference is found. All date ranges in the output get the same row order.',
      }),
    pageSize: z
      .int32()
      .exactOptional()
      .openapi({
        description:
          "Page size is for paging and specifies the maximum number of returned rows. Page size should be >= 0. A query returns the default of 1,000 rows. The Analytics Core Reporting API returns a maximum of 100,000 rows per request, no matter how many you ask for. It can also return fewer rows than requested, if there aren't as many dimension segments as you expect. For instance, there are fewer than 300 possible values for `ga:country`, so when segmenting only by country, you can't get more than 300 rows, even if you set `pageSize` to a higher value.",
      }),
    pageToken: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'A continuation token to get the next page of the results. Adding this to the request will return the rows after the pageToken. The pageToken should be the value returned in the nextPageToken parameter in the response to the GetReports request.',
      }),
    pivots: z
      .array(PivotSchema)
      .exactOptional()
      .openapi({ description: 'The pivot definitions. Requests can have a maximum of 2 pivots.' }),
    samplingLevel: z
      .enum(['SAMPLING_UNSPECIFIED', 'DEFAULT', 'SMALL', 'LARGE'])
      .exactOptional()
      .openapi({
        description:
          'The desired report [sample](https://support.google.com/analytics/answer/2637192) size. If the the `samplingLevel` field is unspecified the `DEFAULT` sampling level is used. Every [ReportRequest](#ReportRequest) within a `batchGet` method must contain the same `samplingLevel` definition. See [developer guide](/analytics/devguides/reporting/core/v4/basics#sampling) for details.',
      }),
    segments: z
      .array(SegmentSchema)
      .exactOptional()
      .openapi({
        description:
          'Segment the data returned for the request. A segment definition helps look at a subset of the segment request. A request can contain up to four segments. Every [ReportRequest](#ReportRequest) within a `batchGet` method must contain the same `segments` definition. Requests with segments must have the `ga:segment` dimension.',
      }),
    viewId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The Analytics [view ID](https://support.google.com/analytics/answer/1009618) from which to retrieve data. Every [ReportRequest](#ReportRequest) within a `batchGet` method must contain the same `viewId`.',
      }),
  })
  .openapi({
    description: 'The main request class which specifies the Reporting API request.',
    required: [],
  })
  .openapi('ReportRequest')

const GetReportsRequestSchema = z
  .object({
    reportRequests: z
      .array(ReportRequestSchema)
      .exactOptional()
      .openapi({
        description:
          'Requests, each request will have a separate response. There can be a maximum of 5 requests. All requests should have the same `dateRanges`, `viewId`, `segments`, `samplingLevel`, and `cohortGroup`.',
      }),
    useResourceQuotas: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Enables [resource based quotas](/analytics/devguides/reporting/core/v4/limits-quotas#analytics_reporting_api_v4), (defaults to `False`). If this field is set to `True` the per view (profile) quotas are governed by the computational cost of the request. Note that using cost based quotas will higher enable sampling rates. (10 Million for `SMALL`, 100M for `LARGE`. See the [limits and quotas documentation](/analytics/devguides/reporting/core/v4/limits-quotas#analytics_reporting_api_v4) for details.',
      }),
  })
  .openapi({ description: 'The batch request containing multiple report request.', required: [] })
  .openapi('GetReportsRequest')

const ReportRowSchema = z
  .object({
    dimensions: z
      .array(z.string())
      .exactOptional()
      .openapi({ description: 'List of requested dimensions.' }),
    metrics: z
      .array(DateRangeValuesSchema)
      .exactOptional()
      .openapi({ description: 'List of metrics for each requested DateRange.' }),
  })
  .openapi({ description: 'A row in the report.', required: [] })
  .openapi('ReportRow')

const ReportDataSchema = z
  .object({
    dataLastRefreshed: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The last time the data in the report was refreshed. All the hits received before this timestamp are included in the calculation of the report.',
      }),
    emptyReason: z
      .string()
      .exactOptional()
      .openapi({
        description: 'If empty reason is specified, the report is empty for this reason.',
      }),
    isDataGolden: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Indicates if response to this request is golden or not. Data is golden when the exact same request will not produce any new results if asked at a later point in time.',
      }),
    maximums: z
      .array(DateRangeValuesSchema)
      .exactOptional()
      .openapi({
        description:
          'Minimum and maximum values seen over all matching rows. These are both empty when `hideValueRanges` in the request is false, or when rowCount is zero.',
      }),
    minimums: z
      .array(DateRangeValuesSchema)
      .exactOptional()
      .openapi({
        description:
          'Minimum and maximum values seen over all matching rows. These are both empty when `hideValueRanges` in the request is false, or when rowCount is zero.',
      }),
    rowCount: z
      .int32()
      .exactOptional()
      .openapi({ description: 'Total number of matching rows for this query.' }),
    rows: z
      .array(ReportRowSchema)
      .exactOptional()
      .openapi({
        description: "There's one ReportRow for every unique combination of dimensions.",
      }),
    samplesReadCounts: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description:
          'If the results are [sampled](https://support.google.com/analytics/answer/2637192), this returns the total number of samples read, one entry per date range. If the results are not sampled this field will not be defined. See [developer guide](/analytics/devguides/reporting/core/v4/basics#sampling) for details.',
      }),
    samplingSpaceSizes: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description:
          'If the results are [sampled](https://support.google.com/analytics/answer/2637192), this returns the total number of samples present, one entry per date range. If the results are not sampled this field will not be defined. See [developer guide](/analytics/devguides/reporting/core/v4/basics#sampling) for details.',
      }),
    totals: z
      .array(DateRangeValuesSchema)
      .exactOptional()
      .openapi({
        description:
          'For each requested date range, for the set of all rows that match the query, every requested value format gets a total. The total for a value format is computed by first totaling the metrics mentioned in the value format and then evaluating the value format as a scalar expression. E.g., The "totals" for `3 / (ga:sessions + 2)` we compute `3 / ((sum of all relevant ga:sessions) + 2)`. Totals are computed before pagination.',
      }),
  })
  .openapi({ description: 'The data part of the report.', required: [] })
  .openapi('ReportData')

const ReportSchema = z
  .object({
    columnHeader: ColumnHeaderSchema.exactOptional().openapi({
      description: 'The column headers.',
    }),
    data: ReportDataSchema.exactOptional().openapi({ description: 'Response data.' }),
    nextPageToken: z
      .string()
      .exactOptional()
      .openapi({ description: 'Page token to retrieve the next page of results in the list.' }),
  })
  .openapi({ description: 'The data response corresponding to the request.', required: [] })
  .openapi('Report')

const ResourceQuotasRemainingSchema = z
  .object({
    dailyQuotaTokensRemaining: z
      .int32()
      .exactOptional()
      .openapi({ description: 'Daily resource quota remaining remaining.' }),
    hourlyQuotaTokensRemaining: z
      .int32()
      .exactOptional()
      .openapi({ description: 'Hourly resource quota tokens remaining.' }),
  })
  .openapi({
    description:
      'The resource quota tokens remaining for the property after the request is completed.',
    required: [],
  })
  .openapi('ResourceQuotasRemaining')

const GetReportsResponseSchema = z
  .object({
    queryCost: z
      .int32()
      .exactOptional()
      .openapi({
        description:
          'The amount of resource quota tokens deducted to execute the query. Includes all responses.',
      }),
    reports: z
      .array(ReportSchema)
      .exactOptional()
      .openapi({ description: 'Responses corresponding to each of the request.' }),
    resourceQuotasRemaining: ResourceQuotasRemainingSchema.exactOptional().openapi({
      description: 'The amount of resource quota remaining for the property.',
    }),
  })
  .openapi({
    description:
      'The main response class which holds the reports from the Reporting API `batchGet` call.',
    required: [],
  })
  .openapi('GetReportsResponse')

const UserSchema = z
  .object({
    type: z
      .enum(['USER_ID_TYPE_UNSPECIFIED', 'USER_ID', 'CLIENT_ID'])
      .exactOptional()
      .openapi({
        description:
          'Type of the user in the request. The field `userId` is associated with this type.',
      }),
    userId: z
      .string()
      .exactOptional()
      .openapi({ description: 'Unique Id of the user for which the data is being requested.' }),
  })
  .openapi({
    description: 'Contains information to identify a particular user uniquely.',
    required: [],
  })
  .openapi('User')

const SearchUserActivityRequestSchema = z
  .object({
    activityTypes: z
      .array(
        z.enum([
          'ACTIVITY_TYPE_UNSPECIFIED',
          'PAGEVIEW',
          'SCREENVIEW',
          'GOAL',
          'ECOMMERCE',
          'EVENT',
        ]),
      )
      .exactOptional()
      .openapi({
        description:
          'Set of all activity types being requested. Only acvities matching these types will be returned in the response. If empty, all activies will be returned.',
      }),
    dateRange: DateRangeSchema.exactOptional().openapi({
      description:
        'Date range for which to retrieve the user activity. If a date range is not provided, the default date range is (startDate: current date - 7 days, endDate: current date - 1 day).',
    }),
    pageSize: z
      .int32()
      .exactOptional()
      .openapi({
        description:
          "Page size is for paging and specifies the maximum number of returned rows. Page size should be > 0. If the value is 0 or if the field isn't specified, the request returns the default of 1000 rows per page.",
      }),
    pageToken: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'A continuation token to get the next page of the results. Adding this to the request will return the rows after the pageToken. The pageToken should be the value returned in the nextPageToken parameter in the response to the [SearchUserActivityRequest](#SearchUserActivityRequest) request.',
      }),
    user: UserSchema.exactOptional().openapi({
      description:
        'Required. Unique user Id to query for. Every [SearchUserActivityRequest](#SearchUserActivityRequest) must contain this field.',
    }),
    viewId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Required. The Analytics [view ID](https://support.google.com/analytics/answer/1009618) from which to retrieve data. Every [SearchUserActivityRequest](#SearchUserActivityRequest) must contain the `viewId`.',
      }),
  })
  .openapi({
    description: 'The request to fetch User Report from Reporting API `userActivity:get` call.',
    required: [],
  })
  .openapi('SearchUserActivityRequest')

const UserActivitySessionSchema = z
  .object({
    activities: z
      .array(ActivitySchema)
      .exactOptional()
      .openapi({
        description: 'Represents a detailed view into each of the activity in this session.',
      }),
    dataSource: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The data source of a hit. By default, hits sent from analytics.js are reported as "web" and hits sent from the mobile SDKs are reported as "app". These values can be overridden in the Measurement Protocol.',
      }),
    deviceCategory: z
      .string()
      .exactOptional()
      .openapi({ description: 'The type of device used: "mobile", "tablet" etc.' }),
    platform: z
      .string()
      .exactOptional()
      .openapi({ description: 'Platform on which the activity happened: "android", "ios" etc.' }),
    sessionDate: z
      .string()
      .exactOptional()
      .openapi({ description: 'Date of this session in ISO-8601 format.' }),
    sessionId: z.string().exactOptional().openapi({ description: 'Unique ID of the session.' }),
  })
  .openapi({
    description:
      'This represents a user session performed on a specific device at a certain time over a period of time.',
    required: [],
  })
  .openapi('UserActivitySession')

const SearchUserActivityResponseSchema = z
  .object({
    nextPageToken: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'This token should be passed to [SearchUserActivityRequest](#SearchUserActivityRequest) to retrieve the next page.',
      }),
    sampleRate: z
      .float64()
      .exactOptional()
      .openapi({
        description:
          'This field represents the [sampling rate](https://support.google.com/analytics/answer/2637192) for the given request and is a number between 0.0 to 1.0. See [developer guide](/analytics/devguides/reporting/core/v4/basics#sampling) for details.',
      }),
    sessions: z
      .array(UserActivitySessionSchema)
      .exactOptional()
      .openapi({
        description: 'Each record represents a session (device details, duration, etc).',
      }),
    totalRows: z
      .int32()
      .exactOptional()
      .openapi({ description: 'Total rows returned by this query (across different pages).' }),
  })
  .openapi({ description: 'The response from `userActivity:get` call.', required: [] })
  .openapi('SearchUserActivityResponse')

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

export const postV4ReportsBatchGetRoute = createRoute({
  method: 'post',
  path: '/v4/reports:batchGet',
  tags: ['reports'],
  description: 'Returns the Analytics data.',
  operationId: 'analyticsreporting.reports.batchGet',
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
    body: { content: { 'application/json': { schema: GetReportsRequestSchema } } },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: GetReportsResponseSchema } },
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

export const postV4UserActivitySearchRoute = createRoute({
  method: 'post',
  path: '/v4/userActivity:search',
  tags: ['userActivity'],
  description: 'Returns User Activity data.',
  operationId: 'analyticsreporting.userActivity.search',
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
    body: { content: { 'application/json': { schema: SearchUserActivityRequestSchema } } },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: SearchUserActivityResponseSchema } },
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
